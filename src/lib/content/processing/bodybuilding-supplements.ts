export const bodybuildingSupplementsContent = {
    en: {
        title: "Bodybuilding & Sports Supplements Processing",
        subTopics: {
            "whey-protein": {
                title: "A. Whey Protein Concentrate (WPC-80) & Isolate (WPI-90) - CFM & mTORC1",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Raw Whey Chemistry & Major Protein Fractions</h3>
    <p>In industrial dairy technology and sports nutrition, whey is recognized as the ultimate biological protein source. It exhibits the highest <strong>Biological Value (BV = 104)</strong>, highest <strong>Protein Efficiency Ratio (PER = 3.2)</strong>, and a maximum <strong>Protein Digestibility-Corrected Amino Acid Score (PDCAAS = 1.0)</strong> of any dietary protein source known to nutritional science.</p>

    <p class="mt-2"><strong>Raw Sweet Cheese Whey vs. Acid Casein Whey:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Sweet Cheese Whey (The Gold Standard Substrate):</strong> Co-product of enzymatic rennet coagulation (Cheddar, Mozzarella, Gouda) at pH 6.2 to 6.5. Contains intact globular proteins, cleaved glycomacropeptide (GMP), and low mineral acidity. Ideal for membrane fractionation without membrane fouling.</li>
        <li><strong>Acid Casein Whey:</strong> Co-product of mineral acid precipitation (pH 4.4–4.6) or Greek yogurt manufacturing. High in free calcium phosphate and lactic acid, creating severe membrane fouling and an astringent, sour sensory profile unsuitable for high-end sports powders.</li>
    </ul>

    <p class="mt-3"><strong>Detailed Biochemical Breakdown of Native Whey Protein Fractions:</strong></p>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Protein Fraction</th>
                    <th class="p-2 border">% of Total Whey</th>
                    <th class="p-2 border">Molecular Mass</th>
                    <th class="p-2 border">Biochemical & Ergogenic Properties</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&beta;-Lactoglobulin</strong></td>
                    <td class="p-2 border">50% – 55%</td>
                    <td class="p-2 border">18.4 kDa (Dimer)</td>
                    <td class="p-2 border">Primary carrier of Branched-Chain Amino Acids (BCAAs: Leucine 14.5%, Isoleucine, Valine). Possesses 2 internal disulfide bridges and 1 free thiol (-SH at Cys121). Binds fat-soluble vitamins and fatty acids inside its internal hydrophobic calyx.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Lactalbumin</strong></td>
                    <td class="p-2 border">20% – 25%</td>
                    <td class="p-2 border">14.2 kDa (Monomer)</td>
                    <td class="p-2 border">Calcium-metalloprotein containing 4 intramolecular disulfide bonds. Richest natural dietary source of <strong>L-Tryptophan (5.8%)</strong> and <strong>L-Cysteine</strong>. Tryptophan synthesizes cerebral serotonin for neurological recovery; cysteine synthesizes intracellular <strong>Glutathione (GSH)</strong>, the master human antioxidant.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Immunoglobulins (IgG1, IgG2, IgA, IgM)</strong></td>
                    <td class="p-2 border">10% – 12%</td>
                    <td class="p-2 border">150 – 900 kDa</td>
                    <td class="p-2 border">High-molecular-weight antibodies preserving gut mucosal barrier integrity. Binds and neutralizes opportunistic gut pathogens, drastically reducing exercise-induced gut permeability ("leaky gut syndrome") in endurance and heavy-lifting athletes.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Glycomacropeptide (GMP)</strong></td>
                    <td class="p-2 border">15% – 20%</td>
                    <td class="p-2 border">6.8 – 30 kDa</td>
                    <td class="p-2 border">Cleaved from &kappa;-casein at the Phe106-Met107 bond during rennet coagulation. Highly sialylated and hydrophilic. Naturally lacks aromatic amino acids (Phenylalanine, Tyrosine, Tryptophan). Potently stimulates <strong>Cholecystokinin (CCK)</strong> release from intestinal I-cells to suppress post-workout hunger.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Bovine Serum Albumin (BSA)</strong></td>
                    <td class="p-2 border">4% – 5%</td>
                    <td class="p-2 border">66.5 kDa</td>
                    <td class="p-2 border">Large globular protein with 17 disulfide bonds and 1 free thiol. High affinity for carrying lipids, steroids, and essential fatty acids throughout the circulation.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lactoferrin & Lactoperoxidase</strong></td>
                    <td class="p-2 border">1% – 2%</td>
                    <td class="p-2 border">78.0 kDa</td>
                    <td class="p-2 border">Iron-binding transferrin glycoprotein. Exhibits direct bactericidal and fungicidal activity by sequestering free ferric iron ($Fe^{3+}$) away from pathogens. Stimulates intestinal enterocyte proliferation.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Membrane Science: Cross-Flow Microfiltration (CFM) vs. Chemical Ion Exchange (IE)</h3>
    <p>The manufacturing process determines whether the final whey powder retains its bioactive immunoglobulins or is reduced to an inert, biologically stripped protein isolate.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">The Thermodynamics of Cross-Flow Microfiltration (CFM):</p>
        <p class="text-xs text-indigo-800 mt-1">CFM utilizes multi-channel tubular ceramic membranes (&alpha;-Al₂O₃ / ZrO₂) with a calibrated pore size of <strong>0.1 to 0.2 &mu;m</strong> operating under cold conditions (<strong>8°C to 10°C</strong>) and low Transmembrane Pressure (TMP = 0.5 to 1.2 bar). Unlike dead-end filtration where a cake forms and blocks flow, cross-flow liquid velocity ($CFV = 5	ext{–}7	ext{ m/s}$) generates high wall shear stress ($	au_w = \\mu \\cdot \\gamma_w$) that continuously sweeps foulants off the membrane surface.</p>
        <p class="text-xs text-indigo-800 mt-1"><strong>Darcy's Law Permeate Flux Equation:</strong> $J = \\Delta P / [\\mu \\cdot (R_m + R_{cp} + R_f)]$. Operating cold keeps viscosity $\\mu$ stable while preventing protein denaturation (< 2% denaturation) and preserving 100% of native quaternary folding.</p>
    </div>

    <p class="mt-3"><strong>Why Chemical Ion Exchange (IE) is Inferior for Athletes:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Acid-Base Shock:</strong> Ion Exchange relies on cellulose or silica resin beads with carboxymethyl or quaternary amine groups. Whey is acidified to pH 3.2 to give proteins a net positive charge ($pH < pI$), binding them to negative resin beads. They are eluted with alkaline sodium hydroxide at pH 9.0.</li>
        <li><strong>Biological Destruction:</strong> This extreme pH swing irreversibly denatures fragile immunoglobulins (IgG drops from 10% to < 1%) and lactoferrin. Furthermore, Glycomacropeptide (GMP) does not bind to the resin and is completely lost in the chemical effluent waste stream. While Ion Exchange yields 93% protein, it is biologically dead compared to CFM Native Whey.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Exercise Physiology & Molecular Biology: The mTORC1 Leucine Trigger</h3>
    <p>Consuming whey protein post-workout triggers an intracellular anabolic signaling cascade that activates the translational machinery of skeletal muscle.</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">The Sestrin2-Rag GTPase-mTORC1 Molecular Pathway:</p>
        <p class="text-xs text-amber-800 mt-1">L-Leucine enters the skeletal myocyte through the L-type amino acid transporter 1 (LAT1 / SLC7A5). Intracellular leucine binds with nanomolar affinity to the cytosolic sensor protein <strong>Sestrin2</strong>. In the basal state, Sestrin2 binds and inhibits <strong>GATOR2</strong>. Upon leucine binding, Sestrin2 dissociates, freeing GATOR2 to inhibit <strong>GATOR1</strong> (a GTPase-activating protein for RagA/B). This allows <strong>RagA/B to bind GTP</strong> and <strong>RagC/D to bind GDP</strong> (the active Rag heterodimer conformation).</p>
        <p class="text-xs text-amber-800 mt-1">The active Rag GTPase complex binds to <strong>raptor</strong>, physically translocating the entire <strong>mTORC1 (mechanistic Target of Rapamycin Complex 1)</strong> complex from the cytoplasm to the lysosomal membrane surface. At the lysosome, the small GTPase <strong>Rheb (Ras homolog enriched in brain)</strong> stimulates mTORC1 kinase activity, initiating protein synthesis.</p>
    </div>

    <p class="mt-3"><strong>Downstream Ribosomal Phosphorylation Cascade:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>p70S6K1 Activation:</strong> mTORC1 directly phosphorylates <strong>ribosomal protein S6 kinase 1 (p70S6K1)</strong> at residue Thr389. Activated p70S6K1 phosphorylates ribosomal protein S6 and eIF4B, vastly accelerating the translation of 5'-TOP mRNAs (which encode ribosomal proteins and elongation factors).</li>
        <li><strong>4E-BP1 Hyperphosphorylation:</strong> mTORC1 phosphorylates <strong>eukaryotic initiation factor 4E-binding protein 1 (4E-BP1)</strong> at Thr37/46, Thr70, and Ser65. Hyperphosphorylated 4E-BP1 dissociates from <strong>eIF4E</strong>, allowing eIF4E to bind eIF4G and eIF4A to assemble the active <strong>eIF4F cap-binding translation pre-initiation complex</strong>. This triggers translation of actin and myosin filaments.</li>
        <li><strong>eEF2 Kinase Inactivation:</strong> Activated p70S6K1 phosphorylates and inactivates eukaryotic elongation factor 2 kinase (eEF2K), keeping <strong>eEF2</strong> in its unphosphorylated, highly active state to accelerate peptide elongation.</li>
    </ol>

    <p class="mt-3"><strong>The Leucine Threshold & The "Muscle Full" Effect:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>The 3.0g Leucine Threshold:</strong> Human clinical trials (Atherton et al., Phillips et al., Churchward-Venne et al.) demonstrate that Fractional Synthetic Rate (FSR) of muscle protein synthesis does not increase linearly; it operates as a step-function switch. An arterial leucine concentration peak corresponding to a minimum bolus of <strong>2.7 to 3.5 grams of L-Leucine</strong> is required to saturate the mTORC1 trigger in adult skeletal muscle. WPC-80 contains 10.5%–11.5% leucine; consuming a standard 30g scoop delivers 3.2g of pure leucine, fully firing the mTORC1 switch.</li>
        <li><strong>The "Muscle Full" Refractory Reset:</strong> After mTORC1 activation, muscle protein synthesis remains elevated for approximately 90 to 120 minutes before spontaneously returning to baseline, even if circulating plasma amino acids remain elevated (the "Muscle Full" phenomenon). Skeletal muscle requires approximately <strong>3.5 to 4.5 hours</strong> of refractory reset before another leucine bolus can re-stimulate the mTORC1 cascade. Consuming protein every 1 hour is biochemically wasteful; optimal muscle hypertrophy requires pulsed feeding of 25–35g high-leucine protein spaced every 3.5 to 4 hours.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Industrial Product Comparison Table</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Nutritional Parameter</th>
                    <th class="p-2 border">WPC-35</th>
                    <th class="p-2 border">WPC-80 (Gold Standard)</th>
                    <th class="p-2 border">WPI-90 (Isolate)</th>
                    <th class="p-2 border">Native Whey (Direct Milk)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>Protein (Dry Basis)</strong></td><td class="p-2 border">34.0% – 36.0%</td><td class="p-2 border"><strong>80.0% – 82.5%</strong></td><td class="p-2 border"><strong>90.0% – 93.0%</strong></td><td class="p-2 border"><strong>93.0% – 95.0%</strong></td></tr>
                <tr><td class="p-2 border"><strong>Lactose Content</strong></td><td class="p-2 border">50.0% – 52.0%</td><td class="p-2 border">4.0% – 6.0%</td><td class="p-2 border"><strong>< 1.0% (Lactose-Free)</strong></td><td class="p-2 border"><strong>< 0.4%</strong></td></tr>
                <tr><td class="p-2 border"><strong>Fat (Lipids)</strong></td><td class="p-2 border">3.5% – 4.5%</td><td class="p-2 border">5.5% – 7.5%</td><td class="p-2 border"><strong>< 1.0%</strong></td><td class="p-2 border"><strong>< 0.3%</strong></td></tr>
                <tr><td class="p-2 border"><strong>Leucine per 100g</strong></td><td class="p-2 border">3.8 g</td><td class="p-2 border"><strong>9.2 – 9.8 g</strong></td><td class="p-2 border"><strong>11.2 – 11.8 g</strong></td><td class="p-2 border"><strong>12.8 – 13.5 g</strong></td></tr>
                <tr><td class="p-2 border"><strong>Ash (Minerals)</strong></td><td class="p-2 border">7.5% – 8.5%</td><td class="p-2 border">3.0% – 4.0%</td><td class="p-2 border">2.0% – 2.8%</td><td class="p-2 border">1.5% – 2.0%</td></tr>
                <tr><td class="p-2 border"><strong>GMP Content</strong></td><td class="p-2 border">18% – 20%</td><td class="p-2 border">15% – 18%</td><td class="p-2 border">15% – 18% (CFM) / 0% (IE)</td><td class="p-2 border"><strong>0% (No rennet used)</strong></td></tr>
                <tr><td class="p-2 border"><strong>Biological Value (BV)</strong></td><td class="p-2 border">95</td><td class="p-2 border"><strong>104</strong></td><td class="p-2 border"><strong>104</strong></td><td class="p-2 border"><strong>110</strong></td></tr>
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
                        Whey Protein Concentrate (WPC-80) & Isolate (WPI-90) — Manufacturing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Complete 8-Step CFM Cold Microfiltration, Diafiltration & Instantization Process Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-STEP WHEY CFM FLOWCHART
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
                    Sweet Cheese Whey Clarification & Fat Separation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: WHEY RECEPTION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Sweet cheese whey (pH 6.2–6.5) collected from cheddar/mozzarella vats. Centrifugal clarifiers remove cheese fines (< 50 mg/L). Hermetic self-cleaning separators strip residual fat down to < 0.05% at 45°C to prevent membrane lipid fouling.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Whey Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">45°C – 50°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cheese Fines</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 mg/L</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Fat</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.05%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Titratable Acidity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.12% LA</strong></div></div>
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
                    Pasteurization & Cold Cross-Flow Microfiltration (CFM)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CFM STAGE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Regenerative pasteurization at 72°C for 15s. Chilled to < 10°C. Cold cross-flow microfiltration using 0.1–0.2 µm tubular ceramic membranes removes residual lipid-protein fragments and bacteria without heat-denaturing native immunoglobulins and alpha-lactalbumin.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">CFM Pore Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.1 – 0.2 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Operating Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8°C – 10°C (Cold)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Transmembrane Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.8 – 1.2 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Native Protein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 98% Undenatured</strong></div></div>
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
                    Multi-Stage Ultrafiltration (UF) Concentration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">UF PROTEIN CONCENTRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The microfiltered whey enters multi-stage spiral-wound Polyethersulfone (PES) ultrafiltration membranes (MWCO 10–20 kDa). Concentrates proteins from 0.8% to 18% in the retentate while permeating lactose, ash, and water (Volume Reduction Factor VRF 20–25).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Membrane MWCO</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 – 20 kDa</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3.5 – 5.0 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Retentate Protein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18% – 20%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">VRF Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 – 25x</strong></div></div>
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
                    Diafiltration (DF) for WPC-80 / WPI-90 Purity
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: PURITY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-purity demineralized RO water is continuously metered into the retentate loop to wash out trapped lactose and minerals. 2 stages of DF produce WPC-80 (80% protein dry basis); 4–5 stages of DF produce WPI-90 (> 90% protein, < 1% lactose, < 1% fat).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WPC-80 Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 80.0% Protein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WPI-90 Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 90.0% Protein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lactose (WPI)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (Lactose-Free)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat (WPI)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.8%</strong></div></div>
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
                    Low-Temperature Indirect Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Retentate is concentrated to 35% TS under high vacuum (50°C) and fed into a tall-form spray drying tower. Controlled inlet air at 175°C–180°C and exhaust at 75°C–78°C flash dries droplets in 20s, ensuring zero denaturation of leucine-rich peptides.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">175°C – 180°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">75°C – 78°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Powder Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3.5% – 4.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solubility Index</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 mL</strong></div></div>
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
                    Fluid Bed Lecithin Instantization & Agglomeration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">INSTANTIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">In an external vibrating fluid bed, 0.6–0.8% non-GMO sunflower lecithin dissolved in medium-chain triglycerides is aerosolized onto warm powder granules. Slashes water contact angle from >90° to <15°, achieving instant shaker dispersibility in < 15 seconds.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lecithin Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Non-GMO Sunflower</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dosing Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.6% – 0.8% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dispersibility</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15s in cold water</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bulk Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.38 – 0.44 g/mL</strong></div></div>
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
                    In-line Sifting, 12,000 Gauss Magnet & Metal Detection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: METAL TRAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Agglomerated powder passes through an oscillating 1.0 mm sanitary sifter, 12,000 Gauss neodymium magnetic trap, and triple-frequency metal detector (sensitive to ≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, ≥ 1.2 mm SS 316).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Screen</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnet Power</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Sensitivity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 Sensitivity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div></div>
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
                    Cleanroom Flavor Blending & Double-Sealed Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: PACKAGING INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Inside ISO Class 8 cleanroom: Protein powder is blended with natural cocoa/vanilla, debittered stevia, sucralose, and digestive enzyme complex (DigeZyme 50 mg/serving). Packaged in induction-sealed HDPE tubs or nitrogen-flushed barrier bags (O₂ < 2.0%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 8 / Class D</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme Complex</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DigeZyme 50 mg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Induction Seal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Hermetic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Headspace O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "hydrolyzed-whey": {
                title: "B. Hydrolyzed Whey Protein (WPH) & Peptides - PEPT1 Transporter Kinetics",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Enzymatic Hydrolysis Bioreactor Kinetics & Degree of Hydrolysis (DH)</h3>
    <p>Hydrolyzed Whey Protein (WPH) represents the technological pinnacle of engineered protein kinetics. By subjecting native whey protein isolate (WPI) or concentrate (WPC) to precision enzymatic cleavage in automated bioreactors, long intact polypeptide chains are pre-digested into bioactive short-chain oligopeptides (dipeptides and tripeptides).</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">The Adler-Nissen Equation for Degree of Hydrolysis (DH):</p>
        <p class="text-xs text-blue-800 mt-1">In industrial biochemistry, the Degree of Hydrolysis ($DH$) represents the percentage of peptide bonds cleaved relative to the total number of peptide bonds per unit weight ($h_{tot}$):</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">DH = [ (B &times; N_b) / (&alpha; &times; M_p &times; h_tot) ] &times; 100%</p>
        <p class="text-xs text-blue-800 mt-1">Where:
            <br>&bull; <strong>B:</strong> Volume of base (standardized 4.0 M NaOH) consumed to maintain constant pH (pH-stat titration, typically 7.5 to 8.0).
            <br>&bull; <strong>N_b:</strong> Normality of the base titrant (eq/L).
            <br>&bull; <strong>M_p:</strong> Mass of substrate protein in the bioreactor (grams, $N &times; 6.25$).
            <br>&bull; <strong>h_tot:</strong> Total number of peptide bonds in native whey ($8.8	ext{ milliequivalents per gram}$).
            <br>&bull; <strong>&alpha;:</strong> Average degree of dissociation of &alpha;-amino groups at the operating pH and temperature: $lpha = 1 / [1 + 10^{(pK - pH)}]$, where $pK = 7.8 + [(298 - T) / (298 \\cdot T)] 	imes 2400$.
        </p>
    </div>

    <p class="mt-3"><strong>Commercial DH Tiers in Modern Sports Nutrition:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Low DH (3% &ndash; 5%):</strong> Mild enzymatic conditioning. Retains intact protein structure for heat stability in ready-to-drink (RTD) clear protein beverages and infant hypoallergenic formulas without altering natural mouthfeel.</li>
        <li><strong>Medium DH (10% &ndash; 15% - The Athletic Sweet Spot):</strong> Yields a molecular weight profile where &gt; 65% of all peptide fragments are dipeptides and tripeptides (&lt; 1,000 Da). Maximizes intestinal absorption speed while keeping bitterness manageable through enzymatic debittering.</li>
        <li><strong>High DH (20% &ndash; 30%):</strong> Extreme cleavage into free amino acids and small peptides. Used strictly for clinical elemental enteral medical nutrition and severe pediatric cow's milk protein allergy (CMPA). Highly bitter and hyper-osmolar.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Debittering Science & The Ney Rule (Q-Value)</h3>
    <p>A major industrial challenge in WPH manufacturing is severe peptide bitterness caused by exposed hydrophobic amino acids.</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">Thermodynamics of Bitterness (Ney's Q-Rule):</p>
        <p class="text-xs text-amber-800 mt-1">In 1971, food chemist K. H. Ney established that the bitter taste of a peptide is directly correlated with its average hydrophobicity, termed the <strong>Q-value</strong>:</p>
        <p class="text-xs text-amber-900 font-mono mt-1 text-center font-bold">Q = (&sum; &Delta;f) / n</p>
        <p class="text-xs text-amber-800 mt-1">Where $\\sum \\Delta f$ is the sum of free energy of transfer of amino acid side chains from ethanol to water (Tanford scale) and $n$ is the total number of amino acid residues in the peptide.
            <br>&bull; If <strong>Q &gt; 1,400 cal/mol</strong>, the peptide is intensely bitter.
            <br>&bull; If <strong>Q &lt; 1,300 cal/mol</strong>, the peptide is completely non-bitter.
        </p>
        <p class="text-xs text-amber-800 mt-1">When endopeptidases (like <em>Alcalase / Subtilisin</em>) randomly cleave native whey, they expose hydrophobic interior residues (Leucine, Isoleucine, Phenylalanine, Tryptophan, Valine) at the terminal ends of 4-to-8 residue peptides, driving $Q$ well above $1,550	ext{ cal/mol}$.</p>
    </div>

    <p class="mt-3"><strong>Two-Stage Industrial Debittering Solution:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Stage 1 (Primary Cleavage):</strong> Hydrolysis with food-grade endopeptidase (e.g. <em>Bacillus licheniformis</em> serine endoprotease) at 52&deg;C, pH 8.0 until target DH of 12% is reached.</li>
        <li><strong>Stage 2 (Exopeptidase Debittering):</strong> Addition of fungal aminopeptidases from <em>Aspergillus oryzae</em>. These exopeptidases specifically clip off terminal hydrophobic residues, releasing hydrophilic free amino acids and reducing average chain length until the mean peptide $Q$-value drops below $1,280	ext{ cal/mol}$.</li>
        <li><strong>Enzyme Thermal Quenching:</strong> The bioreactor slurry is pumped through a continuous scraped-surface heat exchanger at <strong>88&deg;C &ndash; 90&deg;C for 3 to 5 minutes</strong>. This permanently denatures and inactivates the proteolytic enzymes without inducing scorching or advanced Maillard reaction browning ($A_{420} &lt; 0.15$).</li>
    </ol>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Exercise Physiology: The PEPT1 Proton-Coupled Transporter</h3>
    <p>Athletes consume WPH not merely for total protein, but for unprecedented absorption kinetics that surpass intact proteins and free amino acids.</p>

    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg mt-3">
        <p class="text-xs text-emerald-900 font-semibold">PEPT1 (SLC15A1) vs. Free Amino Acid Transporters:</p>
        <p class="text-xs text-emerald-800 mt-1">In the human small intestine (duodenum and jejunum), protein digestion products are absorbed through two distinct molecular routes:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-emerald-800 mt-1">
            <li><strong>Route A (Free Amino Acid Transporters - B&deg;AT1, y+LAT1, ASCT2, etc.):</strong> Free amino acids must compete for a limited number of substrate-specific transport channels. High concentrations of branched-chain amino acids saturate and competitively inhibit the absorption of aromatic and basic amino acids.</li>
            <li><strong>Route B (PEPT1 / SLC15A1 Oligopeptide Symporter):</strong> The PEPT1 transporter is a high-capacity, low-affinity symporter located on the brush border membrane. It transports <strong>dipeptides and tripeptides intact</strong> into enterocytes coupled to an inward proton electrochemical gradient ($H^+$-symport).</li>
        </ul>
        <p class="text-xs text-emerald-800 mt-1"><strong>The Thermodynamic Advantage:</strong> One PEPT1 transport cycle imports 2 or 3 amino acids simultaneously using the energy of just a single proton. The intracellular $H^+$ is continuously extruded back into the lumen by the apical $Na^+/H^+$ exchanger (NHE3), powered by the basolateral $Na^+/K^+$ ATPase pump.</p>
    </div>

    <p class="mt-3"><strong>Clinical Kinetic Superiority:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Absorption Velocity ($V_{max}$):</strong> Di/tripeptide transport via PEPT1 has a $V_{max}$ approximately <strong>2.5 to 3.0 times higher</strong> than individual free amino acid uptake.</li>
        <li><strong>Rapid Plasma Appearance ($T_{max}$):</strong> Circulating arterial hyperaminoacidemia peaks at $T_{max} = 15	ext{ to }20	ext{ minutes}$ post-ingestion for WPH, compared to 45&ndash;60 minutes for intact WPI and 90&ndash;120 minutes for solid protein foods.</li>
        <li><strong>Cytosolic Enterocyte Cleavage:</strong> Once inside the enterocyte cytoplasm, intracellular prolidases and dipeptidases rapidly hydrolyze the di/tripeptides into free amino acids before they exit through basolateral transporters (LAT1, LAT2, TAT1) into the hepatic portal circulation.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Bioactive Oligopeptides in Sports Recovery</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Bioactive Peptide</th>
                    <th class="p-2 border">Amino Acid Sequence</th>
                    <th class="p-2 border">Precursor Fraction</th>
                    <th class="p-2 border">Mechanism of Action & Athletic Benefit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&beta;-Lactosin A</strong></td>
                    <td class="p-2 border">Ala-Leu-Pro-Met-His-Ile-Arg</td>
                    <td class="p-2 border">&beta;-Lactoglobulin</td>
                    <td class="p-2 border">Potent competitive inhibitor of Angiotensin-Converting Enzyme (ACE, $IC_{50} = 42.6\\;\\mu	ext{M}$). Blunts vascular vasoconstriction, lowering arterial peripheral resistance and enhancing microvascular hyperemia to working skeletal muscle beds.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Lactorphin</strong></td>
                    <td class="p-2 border">Tyr-Gly-Leu-Phe</td>
                    <td class="p-2 border">&alpha;-Lactalbumin</td>
                    <td class="p-2 border">Exogenous opioid peptide acting on central and peripheral &mu;-opioid receptors. Exerts mild analgesic and anti-nociceptive effects, accelerating recovery from Delayed-Onset Muscle Soreness (DOMS).</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&beta;-Lactorphin</strong></td>
                    <td class="p-2 border">Tyr-Leu-Leu-Phe</td>
                    <td class="p-2 border">&beta;-Lactoglobulin</td>
                    <td class="p-2 border">Stimulates vascular prostacyclin ($PGI_2$) release from arterial endothelial cells, promoting vasodilation and preventing platelet aggregation during strenuous exercise.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Immunopeptides</strong></td>
                    <td class="p-2 border">Tyr-Gly &amp; Thr-Lys-Pro-Arg</td>
                    <td class="p-2 border">Whey globulins</td>
                    <td class="p-2 border">Stimulates macrophage phagocytosis and natural killer (NK) cell cytotoxicity, blunting the transient post-workout immunosuppression ("open window" phenomenon) in competitive athletes.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Hydrolyzed vs. Intact Whey vs. Free Amino Acids Comparison</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Parameter</th>
                    <th class="p-2 border">Intact WPI-90</th>
                    <th class="p-2 border">WPH (DH 12% - Debittered)</th>
                    <th class="p-2 border">Free Crystalline Amino Acids</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>Molecular Form</strong></td><td class="p-2 border">Intact Globular Proteins (&gt; 14,000 Da)</td><td class="p-2 border"><strong>Dipeptides &amp; Tripeptides (&lt; 1,000 Da)</strong></td><td class="p-2 border">Free Monomers (75 &ndash; 204 Da)</td></tr>
                <tr><td class="p-2 border"><strong>Primary Transport Mechanism</strong></td><td class="p-2 border">Intraluminal Pancreatic Digestion required</td><td class="p-2 border"><strong>PEPT1 Proton-Coupled Symport</strong></td><td class="p-2 border">Competitive Na&plus;-dependent AA transporters</td></tr>
                <tr><td class="p-2 border"><strong>Gastric Emptying Time</strong></td><td class="p-2 border">40 &ndash; 50 minutes</td><td class="p-2 border"><strong>&lt; 15 minutes</strong></td><td class="p-2 border">Rapid (&lt; 15 minutes)</td></tr>
                <tr><td class="p-2 border"><strong>Plasma Leucine Peak (T_max)</strong></td><td class="p-2 border">50 &ndash; 60 minutes</td><td class="p-2 border"><strong>15 &ndash; 20 minutes</strong></td><td class="p-2 border">20 &ndash; 30 minutes</td></tr>
                <tr><td class="p-2 border"><strong>Osmolality at 10% Soln</strong></td><td class="p-2 border">Low (~70 mOsm/kg)</td><td class="p-2 border"><strong>Moderate (~220 mOsm/kg)</strong></td><td class="p-2 border"><strong>Very High (&gt; 650 mOsm/kg - Hypertonic)</strong></td></tr>
                <tr><td class="p-2 border"><strong>GI Distress / Cramping Risk</strong></td><td class="p-2 border">Low</td><td class="p-2 border"><strong>Lowest (Virtually Zero)</strong></td><td class="p-2 border">High (Osmotic diarrhea risk)</td></tr>
                <tr><td class="p-2 border"><strong>Glycogen Resynthesis Rate</strong></td><td class="p-2 border">Standard</td><td class="p-2 border"><strong>Accelerated (+35% when co-ingested with carbs)</strong></td><td class="p-2 border">Moderate</td></tr>
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
                        Hydrolyzed Whey Protein (WPH) & Bioactive Peptides — Bioreactor Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Enzymatic Hydrolysis (DH 10–15%), Debittering, Membrane Polishing & Spray Drying Flowchart</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-STEP HYDROLYZED WHEY CCP FLOWCHART
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
                    WPI-90 Reconstitution & Thermal Conditioning
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">SUBSTRATE PREP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Ultra-pure WPI-90 powder is reconstituted in demineralized RO water to an 8–10% protein solution at 50°C. pH is adjusted and stabilized at pH 8.0 using food-grade 1.0 M potassium hydroxide (KOH).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Solution</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8% – 10% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solution Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Starting pH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 8.0 ± 0.1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Base Used</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">KOH (Minimizes Sodium)</strong></div></div>
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
                    Enzymatic Bioreactor Hydrolysis (Alcalase / Trypsin)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">ENZYME DIGESTION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Immobilized or free pharmaceutical-grade endopeptidase (Alcalase 2.4L / Subtilisin Carlsberg) is dosed at 1.5–2.0% w/w. The pH-stat titrator continuously injects KOH to maintain pH 8.0 as peptide bonds are severed.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme System</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Alcalase 2.4L / Trypsin</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">E : S Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.5% – 2.0% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH Control</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Automated pH-Stat 8.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 – 90 Minutes</strong></div></div>
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
                    Online In-line Degree of Hydrolysis (DH) Monitoring
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: DH CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Degree of Hydrolysis is tracked in real-time via base consumption: DH = (B × N_b) / (alpha × m_p × h_tot) × 100%. Hydrolysis is precisely terminated when DH reaches exactly 10% to 15% (optimal di- and tri-peptide yield).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target DH Range</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10% – 15% DH</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Peptide Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2,000 Da (> 70%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Di/Tri-Peptides</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 40% of Total</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Measurement</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Real-Time Base Consumption</strong></div></div>
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
                    Thermal Enzyme Inactivation & Denaturation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: ENZYME KILL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The hydrolysate is pumped through a high-temperature plate heat exchanger at 85°C–90°C for 5 minutes. Irreversibly denatures the Alcalase enzyme, halting hydrolysis and preventing over-cleavage into free amino acids.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inactivation Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">88.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">5 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Enzyme</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.0% (Complete Inactivation)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FDV Divert</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 86.5°C</strong></div></div>
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
                    Enzymatic Debittering using Fungal Aminopeptidase
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DEBITTERING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Endopeptidase cleavage exposes hydrophobic C-terminal leucine and phenylalanine residues, causing intense bitterness (Q-value > 1,400 cal/mol). Fungal aminopeptidase (Aspergillus oryzae) cleaves terminal hydrophobic residues, eliminating bitterness.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Debittering Enzyme</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Fungal Aminopeptidase</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Treatment Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bitterness Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 85% Debittered</strong></div></div>
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
                    Activated Carbon Polishing & Microfiltration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">POLISHING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">0.2% acid-washed food-grade activated carbon is added to adsorb trace bitter peptides and hydrophobic off-flavor molecules. Passed through a 0.2 µm cross-flow ceramic filter to remove all carbon particles.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carbon Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Contact Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Filter Pore Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2 µm Ceramic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Permeate Clarity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Optical NTU < 1.0</strong></div></div>
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
                    Multi-Effect Concentration & Low-Heat Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: PEPTIDE DRYING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Concentrated to 45% TS under vacuum (55°C). Atomized at 180 bar into a tall-form spray dryer (Inlet 175°C, Exhaust 76°C) to yield fine Hydrolyzed Whey Peptide powder with residual moisture < 3.5%.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">175°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">76°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.5%</strong></div></div>
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
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: FOREIGN BODY & MAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Screened through 1.0 mm sifter and 12,000 Gauss magnetic trap. Packed in nitrogen-flushed, moisture-barrier containers (O₂ < 1.5%). Certified for rapid PEPT1 intestinal absorption (< 30 minutes to peak aminoacidemia).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Grate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">PEPT1 Absorption</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 30 Min Peak</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "micellar-casein": {
                title: "C. Micellar Casein (MC) & Caseinates - 8-Hour Anti-Catabolic Release",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Supramolecular Nanostructure of the Native Casein Micelle</h3>
    <p>In dairy biochemistry and sports science, Micellar Casein represents the quintessential "slow-release" anti-catabolic protein. Comprising approximately <strong>80% of total bovine milk protein</strong>, casein does not exist as isolated free monomers, but as vast, stable, spherical polydisperse colloidal aggregates known as <strong>Casein Micelles</strong> (mean hydrodynamic diameter <strong>120 to 200 nm</strong>, molecular mass $10^7	ext{ to }10^9	ext{ Da}$).</p>

    <div class="p-3 bg-purple-50 border border-purple-200 rounded-lg mt-3">
        <p class="text-xs text-purple-900 font-semibold">The Holt Nanocluster &amp; Dual-Binding Model:</p>
        <p class="text-xs text-purple-800 mt-1">A native micelle consists of four primary individual gene products held together by thousands of nanoclusters of <strong>Colloidal Calcium Phosphate (CCP - [Ca_9(PO_4)_6])</strong> and hydrophobic interactions:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-purple-800 mt-1">
            <li><strong>&alpha;_{s1}-Casein (38% of total casein, 23.6 kDa):</strong> Highly phosphorylated (8&ndash;9 phosphoserine residues). Strong calcium-binding capacity forming the structural backbone of CCP cross-linkages.</li>
            <li><strong>&alpha;_{s2}-Casein (10% of total casein, 25.2 kDa):</strong> Most hydrophilic casein, possessing 10&ndash;13 phosphoserine residues and 2 intramolecular disulfide bonds.</li>
            <li><strong>&beta;-Casein (36% of total casein, 24.0 kDa):</strong> Strongly amphiphilic protein with a highly charged polar N-terminal domain (5 phosphoserine residues) and an intensely hydrophobic C-terminal tail. Acts as the primary hydrophobic core driver.</li>
            <li><strong>&kappa;-Casein (13% of total casein, 19.0 kDa):</strong> The master colloidal stabilizer. Lacks phosphoserine clusters and is insensitive to calcium precipitation. It resides almost exclusively on the outer micellar perimeter.</li>
        </ul>
        <p class="text-xs text-purple-800 mt-1"><strong>The &kappa;-Casein "Hairy Layer" Steric Stabilization:</strong> The hydrophilic C-terminal domain of &kappa;-casein (residues 106&ndash;169, glycomacropeptide) protrudes <strong>5 to 10 nm into the surrounding aqueous serum</strong>. Carrying negative charges at neutral pH (zeta potential $\\zeta pprox -20	ext{ mV}$ at pH 6.7), this hairy brush layer provides electrostatic and steric repulsion, preventing micellar coalescence and precipitation.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Cold Ceramic Microfiltration (0.1 &mu;m) vs. Chemical Caseinates</h3>
    <p>The manufacturing technology determines whether the athlete receives genuine native micellar casein with intact mineral nanoclusters, or chemically stripped, un-micellized caseinate salts.</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Manufacturing Metric</th>
                    <th class="p-2 border">Native Micellar Casein (MC-85)</th>
                    <th class="p-2 border">Calcium Caseinate</th>
                    <th class="p-2 border">Sodium Caseinate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Production Method</strong></td>
                    <td class="p-2 border">Cold Ceramic Microfiltration (<strong>0.10 &ndash; 0.14 &mu;m</strong>) at 8&ndash;10&deg;C. No acids or alkalis used.</td>
                    <td class="p-2 border">Isoelectric acid precipitation (pH 4.6 with HCl) followed by neutralization with $Ca(OH)_2$ at 80&deg;C.</td>
                    <td class="p-2 border">Isoelectric acid precipitation (pH 4.6 with HCl) followed by neutralization with NaOH at 80&deg;C.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Micellar Integrity</strong></td>
                    <td class="p-2 border"><strong>100% Intact Native Micelles</strong> with intact CCP nanoclusters and &kappa;-casein hairy brush.</td>
                    <td class="p-2 border"><strong>Completely Destroyed (0%).</strong> Exists as random-coil linear denatured aggregates.</td>
                    <td class="p-2 border"><strong>Completely Destroyed (0%).</strong> Dissolved as isolated individual random polymer chains.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Gastric Curd Clotting</strong></td>
                    <td class="p-2 border"><strong>Firm, cohesive protein gel clot</strong> formed in the stomach ($pH &lt; 2.5$). Slow digestion.</td>
                    <td class="p-2 border">Weak, loose, crumbly flocculation. Moderate digestion speed.</td>
                    <td class="p-2 border">Minimal or no cohesive clotting; rapid liquid transit into the duodenum.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Amino Acid Release Profile</strong></td>
                    <td class="p-2 border"><strong>Sustained, steady zero-order plateau over 7 &ndash; 8 hours.</strong></td>
                    <td class="p-2 border">Moderate release over 3 &ndash; 4 hours.</td>
                    <td class="p-2 border">Intermediate release over 2 &ndash; 3 hours (approaching whey speeds).</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Bioactive Nanominerals</strong></td>
                    <td class="p-2 border">Retains organic <strong>Colloidal Bio-Calcium and Phosphorus</strong> in natural milk ratios.</td>
                    <td class="p-2 border">Synthetic calcium hydroxide additions; disrupted ionic balance.</td>
                    <td class="p-2 border">Stripped of calcium; high in inorganic sodium (up to 1,400 mg/100g).</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Exercise Physiology: The 8-Hour Anti-Catabolic Window &amp; Gastric Coagulation</h3>
    <p>The unique physiological value of micellar casein is its powerful suppression of whole-body Muscle Protein Breakdown (MPB), making it the gold standard bedtime (nocturnal) recovery protein.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">Gastric Clotting Kinetics &amp; Pepsin Proteolysis:</p>
        <p class="text-xs text-indigo-800 mt-1">When micellar casein enters the human stomach, it encounters gastric hydrochloric acid ($pH pprox 1.5	ext{ to }2.0$) and the endopeptidase <strong>pepsin</strong>. Two dramatic biophysical events occur:</p>
        <ol class="list-decimal list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li><strong>Zeta Potential Collapse:</strong> As the pH drops below the isoelectric point ($pI = 4.6$), the negative charges on the outer &kappa;-casein hairy brush are completely neutralized ($\\zeta ightarrow 0	ext{ mV}$). Electrostatic repulsion vanishes.</li>
            <li><strong>Pepsin Hydrolysis:</strong> Pepsin rapidly cleaves the Phe105-Met106 peptide bond of &kappa;-casein, severing the hydrophilic glycomacropeptide tail. Deprived of both electrostatic and steric stabilization, the hydrophobic micellar cores spontaneously coalesce into a dense, viscous, water-insoluble <strong>protein gel clot</strong> (the gastric curd).</li>
        </ol>
        <p class="text-xs text-indigo-800 mt-1"><strong>Zero-Order Gastric Emptying:</strong> The gastric clot cannot pass through the pyloric sphincter. Instead, pepsin slowly hydrolyzes the surface of the clot from the outside in, releasing peptides and amino acids into the duodenum at a constant, zero-order rate of approximately <strong>0.025 to 0.035 grams of protein per minute</strong> over an extended duration of <strong>7 to 8 hours</strong>.</p>
    </div>

    <p class="mt-3"><strong>The Landmark Boirie Tracer Study (PNAS):</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>In the seminal clinical isotopic tracer trial by <em>Boirie et al. (PNAS 1997)</em>, healthy adults received either $[1-^{13}C]	ext{leucine}$-labeled whey protein or $[1-^{13}C]	ext{leucine}$-labeled micellar casein.</li>
        <li><strong>Whey (The "Fast" Protein):</strong> Caused a rapid, transient peak in plasma leucine within 60 minutes, which stimulated Muscle Protein Synthesis (MPS) by +68%, but also triggered high rates of leucine oxidation (+31% oxidized as fuel). By 240 minutes, plasma leucine returned to baseline, failing to suppress muscle breakdown over the long term.</li>
        <li><strong>Micellar Casein (The "Slow" Anti-Catabolic Protein):</strong> Reached a modest leucine peak within 60&ndash;90 minutes that was maintained as a sustained plateau for over <strong>420 minutes (7 hours)</strong>. Overall leucine oxidation was significantly lower. Most crucially, micellar casein induced a <strong>34% suppression of whole-body Muscle Protein Breakdown (MPB)</strong> across the entire 7-hour period.</li>
        <li><strong>Net Protein Balance (NPB = MPS &minus; MPB):</strong> While whey is ideal for the immediate post-workout window to ignite MPS, micellar casein is superior for long fasting intervals (e.g. 8 hours of sleep or prolonged daytime fasts) by keeping MPB near zero, yielding greater net cumulative nitrogen retention over 8 hours.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Phosphopeptides &amp; Bioactive Mineral Chelators</h3>
    <p>During the slow digestion of micellar casein, specialized bioactive peptides are liberated that exhibit extraordinary biological functions:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Caseinophosphopeptides (CPPs):</strong> Phosphorylated sequences containing the motif <em>-Ser(P)-Ser(P)-Ser(P)-Glu-Glu-</em>. These negatively charged sequences chelate dietary calcium ($Ca^{2+}$), zinc ($Zn^{2+}$), iron ($Fe^{2+}$), and magnesium ($Mg^{2+}$), preventing them from precipitating as insoluble calcium phosphate salts in the alkaline environment of the distal ileum. CPPs increase intestinal bio-accessibility and mineral bone deposition in heavy resistance-training athletes.</li>
        <li><strong>Casomorphins:</strong> &mu;-opioid receptor agonists derived from &beta;-casein (e.g. &beta;-casomorphin-7). In moderate physiological amounts, they prolong gastrointestinal transit time, allowing more complete intestinal enzymatic absorption of all co-ingested micronutrients.</li>
        <li><strong>Casokinins:</strong> Potent endogenous ACE-inhibitory peptides that suppress angiotensin-II-mediated vasoconstriction, aiding nocturnal cardiovascular restoration and endothelial recovery.</li>
    </ul>

    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Micellar Casein (MC) — Native Cold Microfiltration Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">7-Step 0.1 µm Ceramic Membrane Fractionation & Sustained-Release Casein Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP MICELLAR CASEIN FLOWCHART
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
                    Fresh Skim Milk Reception & Bactofugation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW MILK</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Grade-A fresh skim milk (< 0.05% fat) tested for antibiotic residues and somatic cell counts. Two-stage bactofugation at 55°C eliminates 99% of bacterial spores without denaturing casein micelle structures.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Content</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.05%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bactofuge Efficiency</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99% Spore Kill</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Somatic Cells</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 200,000 / mL</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Acidity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.14% LA</strong></div></div>
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
                    Cold Ceramic Microfiltration (MF 0.1–0.14 µm)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">MF FRACTIONATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Chilled skim milk (6°C–8°C) is processed through tubular ceramic membranes with a calibrated pore size of 0.1 to 0.14 µm. Intact spherical casein micelles (150–250 nm) are retained in the retentate; native whey proteins and lactose permeate through.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Membrane Pore</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.1 – 0.14 µm Ceramic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Operating Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">6°C – 8°C (Cold)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Casein Retained</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Whey Permeated</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 95% into Ideal Whey</strong></div></div>
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
                    Continuous Diafiltration (DF) for Lactose Washout
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: PURITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Chilled demineralized RO water is continuously metered into the retentate. 3 to 4 stages of diafiltration wash out permeable lactose and soluble minerals while preserving 100% of the native Colloidal Calcium Phosphate (CCP) cross-links inside the micelles.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lactose Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5% in dry basis</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">CCP Retention</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Native Bound</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Purity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">85% – 88% Micellar Casein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Diafiltration Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8°C</strong></div></div>
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
                    Falling Film Vacuum Evaporation & Low-Shear Pumping
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CONCENTRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The micellar casein retentate is gently concentrated to 28–32% TS in a vacuum falling film evaporator at 48°C–52°C. Low-shear positive displacement lobe pumps are used exclusively to avoid mechanical shearing of the fragile casein micelles.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48°C – 52°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solids Concentration</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">28% – 32% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pump Type</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Low-Shear Lobe Pump</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Viscosity Control</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 120 cP</strong></div></div>
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
                    Low-Temperature Tall-Form Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Indirect-heated spray drying with inlet air at 170°C–175°C and exhaust at 72°C–74°C. Gentle atomization preserves native micellar solubility and ensures that the powder forms an elastic sustained-release gel upon contact with gastric acid.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">170°C – 175°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">72°C – 74°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Powder Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">4.0% ± 0.3%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Insolubility Index</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.2 mL</strong></div></div>
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
                    Fluid Bed Conditioning & Sanitary Sifting
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CONDITIONING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Vibrating fluid bed cools powder to 20°C using dehumidified HEPA air. Passes through an oscillating 1.0 mm stainless sifter and continuous 12,000 Gauss magnetic trap to remove any metal contamination.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cooling Bed Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20°C ± 2°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Screen</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Trap</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bulk Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.45 – 0.52 g/mL</strong></div></div>
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
                    Packaging & 8-Hour Sustained-Release Verification
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: ANTI-CATABOLIC RELEASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Packed in airtight induction-sealed containers. In vitro gastric digestion testing confirms firm clotting at pH 2.0 with sustained leucine release over 7 to 8 hours, providing optimal overnight anti-catabolic protection.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Gastric Gel Clotting</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Confirmed at pH 2.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Release Profile</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7 – 8 Hours Sustained</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "mass-gainers": {
                title: "D. Mass Gainers & Complex Carbohydrate-Protein Blends (HBCD & DigeZyme)",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Caloric Energetics &amp; Ectomorph Hypertrophy Physiology</h3>
    <p>For athletes with hyper-metabolic basal metabolic rates (BMR) or "hardgainers" (ectomorph somatotype), achieving skeletal muscle hypertrophy requires a chronic, positive energy balance. Under thermodynamics of muscular adaptation, the daily caloric surplus equation is:</p>
    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-2">
        <p class="text-xs text-amber-900 font-mono text-center font-bold">Total Daily Energy Intake (TDEI) = BMR + TEF + EEE + NEAT + Surplus (&Delta;E = +400 to +800 kcal/day)</p>
        <p class="text-xs text-amber-800 mt-1">Where BMR is Basal Metabolic Rate, TEF is Thermic Effect of Food, EEE is Exercise Energy Expenditure, and NEAT is Non-Exercise Activity Thermogenesis. Attempting to consume this surplus purely through fibrous, low-energy-density whole foods often triggers early gastric satiety, delayed gastric emptying, and gastrointestinal distress. High-performance mass gainers solve this thermodynamic barrier by delivering <strong>600 to 1,250 clean calories</strong> per serving in a scientifically engineered <strong>3:1 or 4:1 Carbohydrate-to-Protein</strong> macronutrient ratio.</p>
    </div>

    <p class="mt-3"><strong>The Insulin-mTORC1 Synergy:</strong> Carbohydrate-induced insulin secretion acts synergistically with dietary leucine. Insulin binds to the cell surface Insulin Receptor (INSR), activating the <strong>IRS1-PI3K-Akt/PKB pathway</strong>. Akt directly phosphorylates and inactivates <strong>Tuberous Sclerosis Complex 2 (TSC2 / Tuberin)</strong> at Ser939 and Thr1462. This relieves inhibition on <strong>Rheb-GTP</strong>, allowing Rheb to maximally stimulate the kinase activity of mTORC1. Furthermore, Akt phosphorylates <strong>FOXO transcription factors</strong>, causing their nuclear exclusion and preventing the transcription of muscle-wasting ubiquitin ligases (MuRF-1 and MAFbx/Atrogin-1), completely halting post-workout catabolism.</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Carbohydrate Polymer Science: HBCD vs. Cheap Maltodextrin &amp; Dextrose</h3>
    <p>The critical technological failure of budget commercial mass gainers is their reliance on cheap, low-molecular-weight sugars (dextrose, fructose, and corn syrup solids) which trigger severe gastric bloating and reactive hypoglycemia.</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">The Biophysics of Osmolality (Van 't Hoff Equation):</p>
        <p class="text-xs text-blue-800 mt-1">Osmotic pressure ($\\Pi$) in the gastric lumen is governed by the molar concentration of dissolved solute particles:</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">&Pi; = &Sigma; (c_i &times; R &times; T) &amp; Osmolality = (Moles of Solute Particles) / (kg of Solvent)</p>
        <p class="text-xs text-blue-800 mt-1"><strong>The Budget Sugar Dilemma (Hypertonic Solutions &gt; 450 mOsm/kg):</strong> Standard dextrose ($MW = 180	ext{ Da}$) and maltodextrin ($DE = 15	ext{--}20$, $MW pprox 1,000	ext{ Da}$) contain millions of small sugar molecules per 100g serving. When mixed in water, they create an extremely hypertonic liquid. In the stomach and upper duodenum, hypertonicity activates mucosal osmoreceptors, triggering an immediate shutdown of gastric emptying (gastroparesis) and pulling water from systemic blood circulation into the intestinal lumen, causing painful abdominal distension, cramps, and osmotic diarrhea.</p>
        <p class="text-xs text-blue-800 mt-2"><strong>The Solution: Highly Branched Cyclic Dextrin (HBCD / Cluster Dextrin&reg;):</strong> Produced through the cyclization of waxy corn starch using the branching enzyme <em>1,4-&alpha;-glucan branching enzyme (EC 2.4.1.18)</em>. HBCD possesses an ultra-high molecular weight ($MW = 160,000	ext{ to }400,000	ext{ Da}$) and a narrow polydispersity index. Because of its massive molecular size, the molar particle count in solution is virtually negligible, yielding an <strong>ultra-low osmolality (&lt; 150 mOsm/kg &ndash; hypotonic)</strong>.</p>
    </div>

    <p class="mt-3"><strong>Physiological Superiority of HBCD:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Ultra-Rapid Gastric Clearance (&lt; 20 minutes):</strong> Bypasses the stomach almost as quickly as pure water, eliminating all stomach heaviness, nausea, and cramping even when consumed during or immediately post-lifting.</li>
        <li><strong>Sustained Glycogen Resynthesis without Reactive "Crashing":</strong> The densely clustered &alpha;-(1,6) branching clusters provide continuous multi-point cleavage sites for brush-border &alpha;-amylases and isomaltase, releasing a steady stream of glucose into the bloodstream ($5	ext{--}7	ext{ mmol/kg/hr}$) for steady GLUT4 uptake, preventing reactive insulin-spike rebound hypoglycemia.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Multi-Phase Protein Matrix &amp; Clean Lipid Bio-Energetics</h3>
    <p>A true muscle-building gainer pairs advanced carbohydrates with a sustained multi-fraction protein blend and ketogenic lipid fuel:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Tri-Stage Protein Matrix:</strong> <em>Whey Protein Isolate (WPI-90)</em> for immediate 15-minute hyperaminoacidemia &rarr; <em>Whey Protein Concentrate (WPC-80)</em> for hours 1 to 3 &rarr; <em>Micellar Casein (MC-85)</em> for hours 3 to 8. This guarantees continuous nitrogen positive balance over an entire 8-hour post-ingestion period.</li>
        <li><strong>Medium Chain Triglycerides (MCT Oil Powder - C8/C10):</strong> Esterified medium-chain fatty acids (Caprylic Acid $C_8H_{16}O_2$ and Capric Acid $C_{10}H_{20}O_2$) micro-encapsulated onto prebiotic acacia gum fiber.
            <br>&bull; Unlike long-chain dietary fats (LCTs) that require bile salts, micelle formation, and lymphatic chylomicron transport, MCTs are water-soluble and absorb directly into the <strong>hepatic portal vein</strong>.
            <br>&bull; They enter the mitochondrial matrix <strong>independently of Carnitine Palmitoyltransferase-1 (CPT-1)</strong>, undergoing rapid mitochondrial &beta;-oxidation to provide dense ATP energy ($8.3	ext{ kcal/g}$) without being deposited into adipose fat tissue.
        </li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. The DigeZyme&reg; 5-Enzyme Digestive Complex</h3>
    <p>To ensure complete hydrolysis of a 1,000-calorie nutrient load without gastrointestinal fermentation or flatulence, modern formulas incorporate a multi-enzyme bio-complex (DigeZyme&reg;) derived from non-animal fermentation:</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Enzyme</th>
                    <th class="p-2 border">Fermentation Source</th>
                    <th class="p-2 border">Activity Unit</th>
                    <th class="p-2 border">Specific Substrate Cleaved</th>
                    <th class="p-2 border">Physiological Function</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Amylase</strong></td>
                    <td class="p-2 border"><em>Aspergillus oryzae</em></td>
                    <td class="p-2 border">24,000 U/g</td>
                    <td class="p-2 border">&alpha;-(1,4)-glucosidic bonds</td>
                    <td class="p-2 border">Hydrolyzes complex starches and maltodextrins into maltose and dextrins, accelerating gastric breakdown.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Neutral Protease</strong></td>
                    <td class="p-2 border"><em>Bacillus subtilis</em></td>
                    <td class="p-2 border">6,000 U/g</td>
                    <td class="p-2 border">Internal peptide bonds</td>
                    <td class="p-2 border">Cleaves large protein aggregates into low-molecular-weight absorbable oligopeptides, preventing putrefaction.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lactase (&beta;-Galactosidase)</strong></td>
                    <td class="p-2 border"><em>Aspergillus oryzae</em></td>
                    <td class="p-2 border">4,000 U/g</td>
                    <td class="p-2 border">&beta;-(1,4)-galactoside bonds</td>
                    <td class="p-2 border">Hydrolyzes residual milk lactose into glucose and galactose, completely eliminating dairy bloating and diarrhea.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lipase</strong></td>
                    <td class="p-2 border"><em>Rhizopus oryzae</em></td>
                    <td class="p-2 border">1,000 U/g</td>
                    <td class="p-2 border">Glycerol ester bonds</td>
                    <td class="p-2 border">Hydrolyzes dietary lipids and MCTs into free fatty acids and monoacylglycerols for rapid absorption.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Cellulase</strong></td>
                    <td class="p-2 border"><em>Trichoderma longibrachiatum</em></td>
                    <td class="p-2 border">200 U/g</td>
                    <td class="p-2 border">&beta;-(1,4)-D-glucan bonds</td>
                    <td class="p-2 border">Hydrolyzes insoluble plant cellulose fibers and oat beta-glucans, liberating entrapped nutrients and vitamins.</td>
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
                        Mass Gainers & Complex Carbohydrate-Protein Blends — Manufacturing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">7-Step High-Capacity Cleanroom Powder Blending, DigeZyme Dosing & Packaging Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP MASS GAINER FLOWCHART
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
                    Complex Carbohydrate & Protein Raw Intake
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW INGREDIENTS</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Weighing and screening of dual-phase carbohydrate matrix: Highly Branched Cyclic Dextrin (HBCD / Cluster Dextrin, low osmolality), Low-DE Maltodextrin (DE 10–12), and micronized whole oat flour (yielding beta-glucan fibers). Combined with instant WPC-80 and Micellar Casein.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carb : Protein Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3:1, 4:1, or 5:1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">HBCD Content</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20% of Carbs</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Base</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">WPC-80 + Micellar Casein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture Specs</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 5.0%</strong></div></div>
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
                    MCT Oil Powder & Healthy Lipid Premixing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">LIPID MATRIX</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Spray-dried Medium Chain Triglyceride (MCT) powder (70% C8/C10 triglycerides on acacia fiber matrix) is blended with flaxseed powder (alpha-linolenic omega-3) in an auxiliary double-cone blender.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">MCT Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">C8/C10 Fractionated</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carrier Matrix</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Prebiotic Acacia</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Omega-3 Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Flaxseed Powder</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Energy Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10% – 12% Total Kcal</strong></div></div>
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
                    High-Capacity Sanitary Ribbon / Tumble Blending
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: HOMOGENEITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Carbohydrate base, protein matrix, and lipid premix are charged into an automated sanitary 316-stainless ribbon blender. Dual-shaft counter-rotating ribbons ensure thorough dispersion within 12 minutes (Coefficient of Variation CV < 3.0%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Blender Capacity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2,000 – 5,000 kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mixing Speed</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">28 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mixing Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Homogeneity CV</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.0%</strong></div></div>
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
                    Multi-Enzyme Complex (DigeZyme) & Micronutrient Dosing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DIGESTIVE BLEND</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Addition of broad-spectrum multi-enzyme complex: DigeZyme (Alpha-Amylase, Protease, Lactase, Lipase, Cellulase at 100 mg/serving) to ensure zero bloating, paired with Vitamin-Mineral premix calibrated for energy metabolism (B-Complex, Zinc, Magnesium).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DigeZyme Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100 mg / Serving</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lactase Activity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 400 ALU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protease Activity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 600 HUT/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Anti-Bloat Efficacy</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Clinical Grade</strong></div></div>
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
                    In-line High-Velocity Sifting & 12,000 Gauss Magnet
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: FOREIGN BODY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Powder flows through an in-line centrifugal sifter (1.2 mm aperture screen) to break soft lumps, followed by a continuous 12,000 Gauss rare-earth magnetic grate to eliminate ferrous particulate contamination.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Centrifugal Screen</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.2 mm Aperture</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnet Rating</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Removal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Sub-Millimeter</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Throughput</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3,000 kg/hour</strong></div></div>
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
                    Dual-Frequency Metal Detection & Automated Checkweighing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: CRITICAL RELEASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Every batch passes an in-line dual-frequency metal detector (sensitive to ≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, ≥ 1.2 mm SS). Connected to an automated pneumatic reject arm and dynamic load-cell checkweigher (± 0.5% weight accuracy).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Detection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 Detection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reject Mechanism</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Pneumatic Piston</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Weight Accuracy</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">± 0.5% Load-Cell</strong></div></div>
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
                    Hermetic Container Packaging & Caloric Verification
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: SEAL & LABEL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Filling into heavy-duty tamper-evident buckets (3 kg / 5 kg) or barrier zipper bags. Induction foil heat sealing. Verified for 1,000–1,250 kcal per serving, delivering clean mass gain without gastrointestinal distress.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pack Format</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3kg/5kg Buckets or Bags</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Induction Seal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Hermetic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Caloric Yield</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,000–1,250 Kcal/Serve</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "creatine-performance": {
                title: "E. Creatine Monohydrate (200 Mesh), BCAAs, Citrulline & Pre-Workouts",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Creatine Monohydrate &amp; The Phosphocreatine (PCr) Energy Shuttle</h3>
    <p>Creatine (&alpha;-methylguanidinoacetic acid, $C_4H_9N_3O_2$) is the most rigorously researched and clinically validated ergogenic aid in exercise science. In human skeletal muscle, approximately 95% of the total body creatine pool is stored, with <strong>65% existing as Phosphocreatine (PCr)</strong> and 35% as free creatine ($Cr$).</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
        <p class="text-xs text-red-900 font-semibold">The Lohmann Reaction &amp; Temporal Energy Buffering:</p>
        <p class="text-xs text-red-800 mt-1">During maximal anaerobic muscular exertion (heavy resistance sets, sprinting &le; 10 seconds), cellular ATP is hydrolyzed at extreme rates by actomyosin ATPase: $ATP + H_2O ightarrow ADP + P_i + H^+ + 	ext{Energy}\\;(\\Delta G^\\circ = -30.5	ext{ kJ/mol})$. Intramuscular ATP stores ($~5	ext{--}6	ext{ mmol/kg wet weight}$) are exhausted within 1.5 to 2.0 seconds. <strong>Creatine Kinase (CK)</strong> catalyzes the reversible, instantaneous transfer of a high-energy phosphoryl group from PCr to ADP:</p>
        <p class="text-xs text-red-900 font-mono mt-1 text-center font-bold">ADP + PCr + H^+ &hArr; ATP + Cr &nbsp;&nbsp; (K_eq = 1.6 &times; 10^9 M^-1 at pH 7.0)</p>
        <p class="text-xs text-red-800 mt-1"><strong>The Mitochondrial Creatine Shuttle:</strong> ATP produced in the mitochondrial matrix via oxidative phosphorylation is transferred across the inner membrane by adenine nucleotide translocase (ANT). <strong>Mitochondrial Creatine Kinase (CK_mit)</strong> couples ATP hydrolysis to the phosphorylation of free creatine, generating PCr. PCr rapidly diffuses through the cytosol to myofibrillar ATPase sites, where <strong>Cytosolic Muscle Creatine Kinase (CK_mm)</strong> re-phosphorylates ADP, maintaining high local $[ATP]/[ADP]$ ratios without relying on anaerobic glycolysis.</p>
    </div>

    <p class="mt-3"><strong>Intracellular Saturation &amp; Myogenic Signaling:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Pool Supersaturation ($120 ightarrow 160	ext{ mmol/kg}$):</strong> Baseline total muscle creatine in non-supplemented omnivores averages $120	ext{ mmol/kg dry muscle}$. A loading phase of <strong>20g/day (4 &times; 5g) for 5&ndash;7 days</strong>, or a maintenance protocol of <strong>3&ndash;5g/day for 28 days</strong>, saturates the intracellular pool to its physiological ceiling of $150	ext{ to }160	ext{ mmol/kg dry muscle}$ (+25% to +35%).</li>
        <li><strong>Cellular Osmotic Swelling &amp; Anabolic Signaling:</strong> Creatine is co-transported into muscle cells against a 200-fold concentration gradient via the sodium- and chloride-dependent transporter <strong>CRT (SLC6A8)</strong> ($2\\;Na^+ : 1\\;Cl^- : 1\\;Cr$). This influx draws intracellular water, increasing myocyte cell volume and hydration. Cellular swelling acts as an immediate mechanical stimulus that upregulates <strong>p38 MAPK kinase</strong>, stimulates the myogenic transcription factors <strong>MyoD, Myogenin, and MRF4</strong>, downregulates the catabolic hormone <strong>Myostatin</strong>, and increases local autocrine secretion of <strong>Insulin-like Growth Factor 1 (IGF-1)</strong>, directly driving muscle satellite cell proliferation.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Aqueous Chemical Synthesis &amp; Purity Standards (Creapure&reg; vs. Industrial Adulterants)</h3>
    <p>Pharmaceutical-grade creatine monohydrate is synthesized through precision chemical manufacturing. Understanding the reaction pathway is vital to identifying toxic industrial contaminants.</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">The Cyanamide-Sarcosinate Synthetic Pathway:</p>
        <p class="text-xs text-amber-800 mt-1">Sodium sarcosinate (aqueous sodium $N$-methylglycinate) is reacted with cyanamide in an alkaline aqueous medium ($pH = 9.0	ext{ to }11.0$) at $70	ext{--}80^\\circ	ext{C}$:</p>
        <p class="text-xs text-amber-900 font-mono mt-1 text-center font-bold">NH_2-C&equiv;N (Cyanamide) + CH_3-NH-CH_2-COONa (Sodium Sarcosinate) + H_2O &rarr; C_4H_9N_3O_2&middot;H_2O (Creatine Monohydrate) + NaOH</p>
        <p class="text-xs text-amber-800 mt-1">Upon completion, the reaction slurry is cooled to $4^\\circ	ext{C}$, precipitating crystalline creatine monohydrate, followed by centrifugation, multi-stage hot-water washing, and vacuum drying.</p>
    </div>

    <p class="mt-3"><strong>Toxic Contaminants &amp; Creapure&reg; QC Specifications:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Dicyandiamide (DCD):</strong> Cyanamide spontaneously dimerizes at improper pH: $2\\;H_2N-CN ightarrow H_2N-C(=NH)-NH-CN$. Cheap Asian industrial factories fail to remove DCD. International Pharmacopoeia specification requires $DCD &lt; 50	ext{ ppm}$ (Creapure standard &lt; 20 ppm).</li>
        <li><strong>Dihydrotriazine (DHT):</strong> A hazardous cyclic by-product formed when cyanamide reacts with trace acetone or aliphatic aldehydes. DHT is a potent cellular carcinogen. Pharmaceutical-grade creatine requires <strong>DHT: Not Detectable (&lt; 3 ppm)</strong>.</li>
        <li><strong>Creatinine:</strong> Under excessive heat during crystallization, creatine spontaneously cyclizes into creatinine ($C_4H_7N_3O$). High creatinine content indicates thermal degradation (strict limit: $&lt; 100	ext{ ppm}$).</li>
        <li><strong>200 Mesh Air-Jet Micronization:</strong> Standard un-micronized creatine has an average particle size of 80 mesh ($180\\;\\mu	ext{m}$), which settles rapidly to the bottom of a shaker and causes gastric crystallization and stomach cramps. Supersonic air-jet micronization mills particles down to <strong>200 mesh (&le; 74 &mu;m)</strong>, increasing specific surface area to $&gt; 1.2	ext{ m}^2/	ext{g}$, accelerating dissolution kinetics by 400% in cold water.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Branched-Chain Amino Acids (BCAAs 2:1:1) - Extra-Hepatic Muscle Metabolism</h3>
    <p>The three BCAAs &mdash; <strong>L-Leucine, L-Isoleucine, and L-Valine</strong> &mdash; represent 35% of all essential amino acids in skeletal muscle tissue. Their physiological uniqueness stems from their unique metabolic journey:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Extra-Hepatic Clearance:</strong> Unlike the other 17 amino acids which are predominantly degraded in the liver during first-pass transit, the human liver virtually lacks the initial transamination enzyme: <strong>Branched-Chain Aminotransferase (BCATm)</strong>. Consequently, ingested BCAAs escape hepatic breakdown and are delivered directly to skeletal muscle beds intact.</li>
        <li><strong>The Central Fatigue Hypothesis &amp; LAT1 Competition:</strong> During prolonged physical exhaustion, active muscles oxidize circulating BCAAs for auxiliary ATP generation via the Branched-Chain &alpha;-Keto Acid Dehydrogenase (BCKDH) complex. This drops the plasma $[	ext{BCAA}]/[	ext{Free Tryptophan}]$ ratio.
            <br>&bull; Free tryptophan and BCAAs share the identical blood-brain barrier transport carrier: <strong>Large Neutral Amino Acid Transporter 1 (LAT1 / SLC7A5)</strong>.
            <br>&bull; As blood BCAAs decline, tryptophan crosses into the brain at accelerated rates, where it is converted by tryptophan hydroxylase into <strong>Serotonin (5-Hydroxytryptamine / 5-HT)</strong>, driving central nervous system lethargy, perceived exertion, and motor unit drop-out.
            <br>&bull; Consuming an intra-workout <strong>2:1:1 BCAA blend</strong> maintains high plasma BCAA concentrations, competitively occupying the LAT1 transporter and preventing central fatigue.
        </li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. L-Citrulline Malate 2:1 &amp; The Nitric Oxide Endothelial Cascade</h3>
    <p>Athletes seeking vascular hyperemia ("the pump"), increased microvascular oxygenation, and ammonia clearance utilize <strong>L-Citrulline Malate (bonded in a 2:1 stoichiometric ratio)</strong>:</p>

    <div class="p-3 bg-green-50 border border-green-200 rounded-lg mt-3">
        <p class="text-xs text-green-900 font-semibold">Why L-Citrulline Trumps L-Arginine for Nitric Oxide Synthesis:</p>
        <p class="text-xs text-green-800 mt-1">Oral supplementation of L-Arginine is heavily degraded in enterocytes and hepatocytes by high-activity <strong>Arginase enzymes (Arginase I &amp; II)</strong>, resulting in an oral systemic bioavailability of less than 20% to 30%. In contrast, <strong>L-Citrulline is not recognized by arginase</strong>. It passes through the gastrointestinal tract and liver completely unaffected, entering the renal circulation and vascular endothelium.</p>
        <p class="text-xs text-green-800 mt-1">In endothelial cells, L-Citrulline is recycled into L-Arginine via a two-step enzymatic reaction:
            <br>1. Citrulline + L-Aspartate + ATP &rarr; Argininosuccinate (via <em>Argininosuccinate Synthase, ASS</em>)
            <br>2. Argininosuccinate &rarr; L-Arginine + Fumarate (via <em>Argininosuccinate Lyase, ASL</em>)
        </p>
        <p class="text-xs text-green-800 mt-1">This intra-cellular pathway generates higher plasma and endothelial L-Arginine concentrations than direct oral arginine itself. <strong>Endothelial Nitric Oxide Synthase (eNOS)</strong> converts L-Arginine to <strong>Nitric Oxide (&bull;NO)</strong>. NO diffuses into vascular smooth muscle, activating <strong>Soluble Guanylyl Cyclase (sGC)</strong> to produce <strong>cyclic GMP (cGMP)</strong>. cGMP activates Protein Kinase G (PKG), which pumps $Ca^{2+}$ out of the cytosol, causing smooth muscle relaxation, arterial vasodilation, and a massive 200% surge in capillary blood perfusion.</p>
    </div>

    <p class="mt-3"><strong>Ergogenic Role of the Malate Anion ($C_4H_4O_5^{2-}$):</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>Malic acid is an essential intermediate in the mitochondrial <strong>Tricarboxylic Acid (TCA / Krebs) cycle</strong>. It is dehydrogenated into oxaloacetate by malate dehydrogenase, producing NADH for the electron transport chain. Co-supplementing malate boosts aerobic ATP resynthesis and enhances the hepatic urea cycle, accelerating the clearance of toxic lactic acid and metabolic ammonia ($NH_3$) generated during high-intensity lifting.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Beta-Alanine &amp; Carnosine Intramuscular Acidosis Buffering</h3>
    <p>During high-intensity anaerobic glycolysis (sets lasting 30 to 120 seconds), glycogen breakdown produces lactate and hydrogen ions ($H^+$), causing intramuscular pH to plummet from <strong>7.1 down to 6.4</strong>. This severe acidosis inhibits the rate-limiting glycolytic enzyme phosphofructokinase (PFK) and impairs calcium binding to troponin C, producing acute muscular failure.</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Carnosine Synthesis:</strong> Carnosine (&beta;-alanyl-L-histidine) is an abundant dipeptide stored in human skeletal muscle (especially Type II fast-twitch fibers). It is synthesized from &beta;-alanine and L-histidine by the enzyme <strong>Carnosine Synthase</strong>. Because intramuscular histidine is naturally abundant, <strong>&beta;-alanine is the strict rate-limiting substrate</strong> for muscle carnosine synthesis.</li>
        <li><strong>Physicochemical Buffering Mechanism ($pK_a = 6.83$):</strong> The imidazole nitrogen of the histidine residue in carnosine has an acid dissociation constant of $pK_a = 6.83$, situated precisely in the physiological pH transition zone ($6.4	ext{ to }7.1$). It acts as an ultra-efficient proton sponge, binding excess $H^+$ ions and delaying intracellular acidosis. Daily supplementation of <strong>3.2 to 6.4 grams of &beta;-alanine for 4 to 8 weeks increases muscle carnosine content by 60% to 80%</strong>, extending anaerobic work capacity and repetitions to failure by 15% to 25%.</li>
        <li><strong>Mitigating Paresthesia:</strong> Acute doses &gt; 1.6g activate sensory nerve G-protein coupled receptors (MrgprD), causing harmless skin tingling (paresthesia). Dividing daily intake into 4 doses of 1.6g, or utilizing sustained-release micro-bead pellets, completely prevents paresthesia symptoms.</li>
    </ul>

    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Creatine Monohydrate (200 Mesh) & Performance Aminos — Synthesis Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">7-Step Aqueous Synthesis, DCD/DHT Toxin Elimination, Air-Jet Micronization & Packaging Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP CREATINE & AMINOS FLOWCHART
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
                    Aqueous Synthesis of Creatine Monohydrate
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CHEMICAL SYNTHESIS</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Pure sodium sarcosinate reacts with cyanamide in an aqueous medium at pH 9.0–10.0 and 80°C. Controlled stoichiometric ratio guarantees complete conversion into Creatine while preventing toxic dimerization.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Precursors</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Sodium Sarcosinate + Cyanamide</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">80°C ± 2°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH Range</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 9.0 – 10.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Molar Yield</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 94%</strong></div></div>
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
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Crystallization & Elimination of DCD / DHT Impurities
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: TOXIN REMOVAL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The reaction liquor is cooled under controlled ramp rates to 5°C, precipitating pure Creatine Monohydrate crystals. Mother liquor containing Dicyandiamide (DCD < 50 ppm), Dihydrotriazine (DHT < 3 ppm, carcinogenic), and Creatinine (< 100 ppm) is washed out.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cooling Rate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.5°C / Min down to 5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DCD Impurity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 ppm (Creapure Spec)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DHT Impurity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3 ppm (Banned Carcinogen)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Creatinine</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 100 ppm</strong></div></div>
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
                    Centrifugal Separation, RO Washing & Vacuum Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DEHYDRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Crystals are separated in a high-speed basket centrifuge, washed with chilled RO water, and dried in a sanitary vacuum paddle dryer at 60°C until free moisture reaches exactly 1 mole of crystal water (12.1% crystal water, total moisture < 12.5%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Centrifuge G-Force</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,500 × g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Washing Water</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Chilled RO Purified</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Drying Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C Vacuum</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Crystal Hydration</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1 Mole H₂O (Monohydrate)</strong></div></div>
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
                    Air-Jet Micronization to 200 Mesh (< 74 µm)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">MICRONIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Dried creatine crystals pass through a high-pressure air-jet micronizer (opposed nitrogen jets). Pulverizes crystal particle size down to 200 Mesh (d90 < 74 µm), dramatically increasing surface area for instantaneous cold-water dispersion.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Micronizer Type</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Fluidized Opposed Jet</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target Particle Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">200 Mesh (< 74 µm)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">d50 Median Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">35 – 45 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cold Dispersion</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 20 Seconds</strong></div></div>
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
                    Fermentation-Derived BCAA & Citrulline Synthesis
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">AMINO BLENDING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">BCAAs (L-Leucine, L-Isoleucine, L-Valine in 2:1:1 ratio) produced via bacterial fermentation (Corynebacterium glutamicum - 100% vegan, duck-feather free) combined with L-Citrulline Malate (2:1 bonded) and Beta-Alanine.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">BCAA Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2 : 1 : 1 (Vegan Fermented)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Citrulline Bond</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2:1 L-Citrulline : DL-Malic Acid</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Beta-Alanine Purity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 99.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Heavy Metals</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 ppm</strong></div></div>
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
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Dehumidified Cleanroom Blending (RH < 35%)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: HUMIDITY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Creatine, BCAAs, and Citrulline Malate are hygroscopic. Blended inside a dedicated ISO Class 7 cleanroom under strict dehumidification (Relative Humidity RH < 35%, dew point < 4°C) with silica colloidal anti-caking agent to prevent clumping.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom RH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 35% Strict Dehumidification</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Anti-Caking Agent</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Silica Dioxide < 1.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mixer Type</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">V-Blender</strong></div></div>
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
                    Induction-Sealed Hermetic Packaging & HPLC Assay
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: PURITY RELEASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Packaged in UV-barrier containers with food-grade silica desiccant bags. Final lot release requires HPLC assay verifying ≥ 99.9% Creatine Monohydrate purity, zero heavy metals, and zero prohibited stimulants.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">HPLC Purity Assay</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 99.9% Monohydrate</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Desiccant In-Can</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Food-Grade Silica Pouch</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Induction Seal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Hermetic Barrier</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">36 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "quality-antidoping": {
                title: "F. Quality Control, WADA Anti-Doping, Amino Spiking Detection & FSSAI Standards",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. The Nitrogen Testing Blindspot &amp; "Amino Spiking" Economic Fraud</h3>
    <p>In commercial sports nutrition, the most insidious form of adulteration is <strong>"Amino Spiking" (or Protein Spiking)</strong>. Unscrupulous manufacturers exploit the inherent scientific limitations of regulatory total-nitrogen testing methods to artificially inflate declared protein content on the Nutrition Facts panel.</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
        <p class="text-xs text-red-900 font-semibold">The Fundamental Flaw of Kjeldahl &amp; Dumas Methods (AOAC 930.29 / 992.15):</p>
        <p class="text-xs text-red-800 mt-1">Regulatory laboratories calculate protein by measuring <strong>Total Organic Nitrogen ($N_{total}$)</strong> via sulfuric acid digestion (Kjeldahl) or high-temperature oxygen combustion (Dumas). The total nitrogen percentage is multiplied by the empirical Jones conversion factor for dairy: <strong>6.25</strong> (based on the historical assumption that pure dairy proteins contain exactly 16% nitrogen: $100 / 16 = 6.25$):</p>
        <p class="text-xs text-red-900 font-mono mt-1 text-center font-bold">Apparent Crude Protein (%) = Total Measured Nitrogen (%) &times; 6.25</p>
        <p class="text-xs text-red-800 mt-1"><strong>The Economic Incentive for Adulteration:</strong> While 1 kg of pure CFM WPC-80 raw material costs &dollar;12 to &dollar;16 USD, cheap industrial non-protein nitrogen (NPN) compounds or low-cost free amino acids cost &dollar;2 to &dollar;4 USD per kg. Because neither Kjeldahl nor Dumas can distinguish between intact protein polypeptides and free non-protein nitrogen, adding these substances deceives the nitrogen analyzer:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-red-800 mt-1">
            <li><strong>Free L-Glycine ($C_2H_5NO_2$, MW 75.07):</strong> Contains <strong>18.66% Nitrogen</strong>. Multiplying by 6.25 gives an apparent protein reading of <strong>116.6%</strong>! Adding 10g of glycine reads as 11.7g of "protein" on the lab test.</li>
            <li><strong>L-Taurine ($C_2H_7NO_2S$, MW 125.15):</strong> Contains <strong>11.19% Nitrogen</strong> (Apparent protein reading = 70.0%).</li>
            <li><strong>Creatine Monohydrate ($C_4H_9N_3O_2&middot;H_2O$, MW 149.15):</strong> Contains <strong>28.18% Nitrogen</strong> (Apparent protein reading = <strong>176.1%</strong>!). Adding 5g of cheap creatine inflates the apparent protein count by nearly 9 grams!</li>
            <li><strong>Melamine ($C_3H_6N_6$, MW 126.12):</strong> Extreme toxic adulterant with <strong>66.6% Nitrogen</strong> (Apparent reading = 416% protein). Forms insoluble melamine cyanurate crystals in renal tubules, causing acute kidney failure.</li>
        </ul>
    </div>

    <p class="mt-3"><strong>Definitive Forensic Detection: Automated UPLC Amino Acid Fingerprinting (AOAC 994.12):</strong></p>
    <p class="text-xs text-gray-700">To defeat amino spiking, reputable sports labs utilize Reverse-Phase Ultra-Performance Liquid Chromatography (RP-UPLC). Samples undergo 24-hour acid hydrolysis in 6.0 M HCl at 110&deg;C, followed by AccQ-Fluor (6-aminoquinolyl-N-hydroxysuccinimidyl carbamate) pre-column derivatization and fluorescence detection. An authentic, unadulterated whey protein concentrate or isolate MUST match the biological amino acid profile:</p>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Amino Acid Marker</th>
                    <th class="p-2 border">Authentic Native Whey Range</th>
                    <th class="p-2 border">Spiked / Adulterated Sample Indicator</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>L-Glycine</strong></td><td class="p-2 border"><strong>1.4% &ndash; 1.9% of total protein</strong></td><td class="p-2 border">&gt; 3.0% (Definitive evidence of Glycine spiking)</td></tr>
                <tr><td class="p-2 border"><strong>L-Leucine</strong></td><td class="p-2 border"><strong>10.5% &ndash; 12.0% of total protein</strong></td><td class="p-2 border">&lt; 8.5% (Indicates protein dilution)</td></tr>
                <tr><td class="p-2 border"><strong>Total BCAAs (Leu, Ile, Val)</strong></td><td class="p-2 border"><strong>21.0% &ndash; 24.5% of total protein</strong></td><td class="p-2 border">&lt; 18.0% (Indicates dilution with non-BCAA fillers)</td></tr>
                <tr><td class="p-2 border"><strong>L-Taurine</strong></td><td class="p-2 border"><strong>Undetectable / Trace (&lt; 0.05%)</strong></td><td class="p-2 border">&gt; 0.5% (Proof of free Taurine addition)</td></tr>
                <tr><td class="p-2 border"><strong>Non-Protein Nitrogen (NPN - PTA method)</strong></td><td class="p-2 border"><strong>&lt; 3.5% of total nitrogen</strong></td><td class="p-2 border">&gt; 8.0% (Precipitates proteins with phosphotungstic acid; un-precipitated nitrogen reveals free aminos)</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. WADA Prohibited List Anti-Doping Screen: Orbitrap High-Resolution LC-MS/MS</h3>
    <p>Athletes participating in Olympics, international federations, or military service risk severe career bans from tainted supplements cross-contaminated with banned performance enhancers. Third-party anti-doping certifications (Informed-Choice, NSF Certified for Sport, BSCG, Cologne List) mandate comprehensive screening using <strong>High-Resolution Accurate Mass Spectrometry (Orbitrap LC-MS/MS and GC-MS/MS)</strong>.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">The Orbitrap Analytical Standard (Resolving Power &gt; 70,000 FWHM):</p>
        <p class="text-xs text-indigo-800 mt-1">A quadropole-Orbitrap hybrid mass spectrometer extracts supplement matrices, performing positive and negative electrospray ionization ($ESI^+ / ESI^-$). Ions are trapped and their harmonic oscillation frequency is measured with sub-ppm mass accuracy (&lt; 2 ppm error), eliminating false positives from matrix interference.</p>
        <p class="text-xs text-indigo-800 mt-1"><strong>Targeted Screen of &gt; 280 WADA Prohibited Substances at Parts-Per-Billion (ppb / &mu;g/kg) Limits of Detection (LOD):</strong></p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li><strong>Anabolic Androgenic Steroids (AAS):</strong> Nandrolone, Stanozolol, Methandienone (Dianabol), Boldenone, Testosterone esters, Trenbolone ($LOD &lt; 5	ext{ ppb}$).</li>
            <li><strong>Selective Androgen Receptor Modulators (SARMs):</strong> Ostarine (MK-2866), Ligandrol (LGD-4033), RAD-140 (Testolone), Andarine (S-4), Cardarine (GW501516 &ndash; PPAR&delta; agonist) ($LOD &lt; 1	ext{ ppb}$).</li>
            <li><strong>Beta-2 Adrenergic Agonists:</strong> Clenbuterol ($LOD &lt; 0.1	ext{ ppb}$), Salbutamol, Terbutaline.</li>
            <li><strong>Stimulants &amp; Amphetamine Analogs:</strong> DMAA (1,3-Dimethylamylamine), DMBA (1,3-Dimethylbutylamine), DMHA (Octodrine), Ephedrine, Sibutramine ($LOD &lt; 10	ext{ ppb}$).</li>
            <li><strong>Aromatase Inhibitors &amp; SERMs:</strong> Anastrozole, Letrozole, Tamoxifen, Clomiphene.</li>
        </ul>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Toxicological Heavy Metal Screening: ICP-MS Limits (FSSAI 2022 &amp; California Prop 65)</h3>
    <p>Raw materials derived from agricultural commodities or cocoa trees absorb heavy metals from soil. Multi-element Inductively Coupled Plasma Mass Spectrometry (ICP-MS) ionizes samples at 6,000 K using an argon plasma torch, measuring trace elements down to parts-per-trillion levels.</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Heavy Metal Element</th>
                    <th class="p-2 border">Toxicological Risk</th>
                    <th class="p-2 border">FSSAI Regulatory Limit (2022)</th>
                    <th class="p-2 border">California Prop 65 Maximum Allowable Dose Level (MADL)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Lead (Pb)</strong></td>
                    <td class="p-2 border">Neurotoxicant, causes cognitive decline, hypertension, and renal impairment.</td>
                    <td class="p-2 border">&le; 2.5 mg/kg (ppm)</td>
                    <td class="p-2 border"><strong>&le; 0.5 &mu;g/day</strong> (Strict ceiling)</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Cadmium (Cd)</strong></td>
                    <td class="p-2 border">Severe nephrotoxin; bioaccumulates in the renal cortex; causes osteomalacia (Itai-Itai disease). Common in chocolate cocoa powders.</td>
                    <td class="p-2 border">&le; 1.5 mg/kg (ppm)</td>
                    <td class="p-2 border"><strong>&le; 4.1 &mu;g/day</strong></td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Arsenic (As - Inorganic)</strong></td>
                    <td class="p-2 border">Carcinogen; disrupts cellular ATP production by inhibiting pyruvate dehydrogenase. Common in rice protein and brown rice syrups.</td>
                    <td class="p-2 border">&le; 1.1 mg/kg (ppm)</td>
                    <td class="p-2 border"><strong>&le; 10.0 &mu;g/day</strong></td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Mercury (Hg)</strong></td>
                    <td class="p-2 border">Potent central nervous system toxicant; depletes intracellular glutathione.</td>
                    <td class="p-2 border">&le; 0.25 mg/kg (ppm)</td>
                    <td class="p-2 border"><strong>&le; 0.3 &mu;g/day</strong></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Physical Powder Dissolution Rheology &amp; Microbiological Validation</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Physical Powder Flow &amp; Reconstitution Kinetics:</strong>
            <br>&bull; <em>Wettability (IDF 87):</em> Time in seconds for 10g of powder to submerge completely under undisturbed water at 20&deg;C. Target: <strong>&lt; 30 seconds</strong> (achieved by 0.5% &ndash; 0.8% sunflower lecithin spray agglomeration).
            <br>&bull; <em>Dispersibility (IDF 129A):</em> Percentage of powder dissolved after 20 seconds of moderate shaking. Target: <strong>&gt; 96.0%</strong>.
            <br>&bull; <em>Hausner Ratio &amp; Carr Index:</em> Measures flowability. $HR = ho_{tapped} / ho_{bulk}$. An HR of <strong>1.12 to 1.18</strong> indicates excellent powder free-flow without hopper arching or clumping in commercial high-speed tub filling machines.
        </li>
        <li><strong>Microbiological Pathogen Testing (Real-Time PCR / ISO 6579):</strong>
            <br>&bull; <em>Salmonella spp.:</em> <strong>Absent in 375g (composite testing)</strong>.
            <br>&bull; <em>Listeria monocytogenes:</em> <strong>Absent in 25g</strong>.
            <br>&bull; <em>Escherichia coli:</em> <strong>&lt; 10 CFU/g (Coliform count &lt; 10 CFU/g)</strong>.
            <br>&bull; <em>Staphylococcus aureus (Enterotoxin):</em> <strong>&lt; 10 CFU/g</strong>.
            <br>&bull; <em>Total Aerobic Mesophilic Plate Count:</em> <strong>&lt; 10,000 CFU/g</strong>.
            <br>&bull; <em>Yeasts &amp; Molds:</em> <strong>&lt; 100 CFU/g</strong>.
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
                        Quality Control, Anti-Doping (WADA) & Amino Spiking Detection — Testing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">6-Step HPLC True Protein Assay, Orbitrap LC-MS/MS Anti-Doping Screen & Heavy Metal Release Flowchart</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-STEP QUALITY & DOPING CCP FLOWCHART
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
                    Incoming Raw Material Sampling (MIL-STD-105E)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: INTAKE TESTING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Representative sampling using sterile trier according to MIL-STD-105E Level II. Quarantined under automated ERP lock until all identity, microbiological, and chemical release assays pass.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sampling Standard</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">MIL-STD-105E Level II</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Quarantine Status</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ERP System Locked</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Identity Test</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">FTIR Spectral Match > 0.98</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Karl Fischer < 4.0%</strong></div></div>
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
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Amino Spiking Detection (Dumas vs Kjeldahl vs HPLC)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: AMINO SPIKING SCREEN</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Total Nitrogen (Dumas / Kjeldahl) compared against True Protein via automated UPLC/HPLC amino acid profiling (AOAC 994.12). Peak area analysis quantifies individual essential amino acids, instantly flagging free glycine, taurine, or creatine spiking.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">True Protein Assay</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">HPLC Ninhydrin (AOAC 994.12)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Nitrogen Conversion</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Dumas Combustion</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Spiking Screen</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Free Glycine/Taurine Peak</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Kjeldahl Discrepancy</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5% Tolerance</strong></div></div>
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
                    WADA Banned Substances Screen (Informed-Choice Protocol)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: ANTI-DOPING SCREEN</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-Resolution Orbitrap LC-MS/MS and GC-MS/MS screening against > 280 WADA prohibited substances (Anabolic Steroids, SARMs, Clenbuterol, Stimulants DMAA/DMBA, Prohormones). Limit of Detection: sub-nanogram (< 10 ppb).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Instrument</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">High-Res Orbitrap LC-MS/MS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Analytes Tested</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 280 WADA Prohibited List</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Limit of Detection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 ppb (< 10 ng/g)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Certification</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Informed-Choice / Sport</strong></div></div>
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
                    Inductively Coupled Plasma Mass Spectrometry (ICP-MS)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: HEAVY METALS</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Microwave acid digestion (HNO₃ + H₂O₂) followed by ICP-MS analysis for toxic heavy metals: Lead (Pb ≤ 0.5 ppm), Cadmium (Cd ≤ 0.3 ppm), Arsenic (As ≤ 0.5 ppm), and Mercury (Hg ≤ 0.1 ppm) under FSSAI 2022 Nutraceutical regulations.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lead Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.5 mg/kg (ppm)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cadmium Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.3 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Arsenic Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.5 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mercury Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.1 mg/kg</strong></div></div>
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
                    Microbiological Pathogen Testing (ISO 4833 & ISO 6579)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: MICROBIOLOGY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Aerobic Plate Count (< 1,000 CFU/g), Yeast & Mold (< 50 CFU/g), Coliforms (< 10 CFU/g). Automated VIDAS / Real-Time PCR screening confirms absence of Salmonella (in 25g), E. coli (in 10g), and Staphylococcus aureus (in 10g).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">TPC Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1,000 CFU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Yeast & Mold</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 CFU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Salmonella</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Absent in 25g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">E. coli</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Absent in 10g</strong></div></div>
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
                    Certificate of Analysis (CoA) Generation & ERP Lot Release
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">FINAL RELEASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Generation of tamper-proof digital Certificate of Analysis (CoA) with unique batch QR code for consumer verification. ERP system unlocks batch inventory for high-speed automated packaging and commercial distribution.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Certificate Type</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Digital Batch QR-Coded CoA</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ERP Status</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Quality Released</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Retained Sample</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Held 36 Months</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Traceability</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Farm-to-Tub</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            }
        }
    },
    hi: {
        title: "Bodybuilding & Sports Supplements Processing (Supplements Banane ki Prakriya)",
        subTopics: {
            "whey-protein": {
                title: "A. Whey Protein Concentrate (WPC-80) & Isolate (WPI-90) - CFM & mTORC1",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Raw Whey Chemistry &amp; Major Protein Fractions</h3>
    <p>Industrial dairy technology aur sports nutrition science mein Whey protein ko human body ke liye highest biological quality ka protein source mana jaata hai. Iska <strong>Biological Value (BV = 104)</strong>, <strong>Protein Efficiency Ratio (PER = 3.2)</strong>, aur <strong>PDCAAS (1.0)</strong> dietary nutrition ke sabhi known food sources mein sabse upar hai.</p>

    <p class="mt-2"><strong>Sweet Cheese Whey vs. Acid Casein Whey:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Sweet Cheese Whey (Gold Standard Raw Substrate):</strong> Ye cheddar ya mozzarella cheese manufacturing ke dauran rennet enzyme (chymosin) coagulation se pH 6.2 se 6.5 par nikalta hai. Isme sabhi globular whey proteins apni natural folded quaternary shape mein intact rehte hain aur mineral balance perfect hota hai, jisse membrane microfiltration bina kisi fouling ya choking ke smoothly chalti hai.</li>
        <li><strong>Acid Casein Whey:</strong> Ye mineral acids (HCl / Lactic acid) daalkar pH 4.4–4.6 par casein precipitate karne se ya Greek yogurt se nikalta hai. Isme free calcium phosphate aur lactic acid high hone ki wajah se membrane filtration mein heavy fouling aati hai aur iska taste kaafi khatta aur astringent hota hai, jo sports supplements ke liye unsuitable hai.</li>
    </ul>

    <p class="mt-3"><strong>Native Whey Protein Fractions ka Complete Biochemical Breakdown:</strong></p>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Protein Fraction</th>
                    <th class="p-2 border">% of Total Whey</th>
                    <th class="p-2 border">Molecular Mass</th>
                    <th class="p-2 border">Biochemical &amp; Muscle Recovery Properties</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&beta;-Lactoglobulin (&beta;-Lg)</strong></td>
                    <td class="p-2 border">50% &ndash; 55%</td>
                    <td class="p-2 border">18.4 kDa (Dimer)</td>
                    <td class="p-2 border">Branched-Chain Amino Acids (BCAAs: Leucine 14.5%, Isoleucine, Valine) ka primary natural carrier hai. Isme 2 internal disulfide bonds aur 1 free thiol (-SH at Cys121) group hota hai. Ye hydrophobic calyx ke andar fat-soluble vitamins aur fatty acids ko bind karke muscles tak deliver karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Lactalbumin (&alpha;-La)</strong></td>
                    <td class="p-2 border">20% &ndash; 25%</td>
                    <td class="p-2 border">14.2 kDa (Monomer)</td>
                    <td class="p-2 border">Calcium-metalloprotein jisme 4 intramolecular disulfide bonds hote hain. Ye dietary nutrition ka sabse rich source hai <strong>L-Tryptophan (5.8%)</strong> aur <strong>L-Cysteine</strong> ka. Tryptophan central nervous recovery ke liye serotonin banata hai, aur cysteine body ke master cellular antioxidant <strong>Glutathione (GSH)</strong> ka synthesis karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Immunoglobulins (IgG1, IgG2, IgA, IgM)</strong></td>
                    <td class="p-2 border">10% &ndash; 12%</td>
                    <td class="p-2 border">150 &ndash; 900 kDa</td>
                    <td class="p-2 border">High-molecular-weight natural antibodies jo athlete ke gut mucosal barrier ki integrity maintain rakhte hain. Ye heavy training ke baad opportunistic gut pathogens ko neutralize karke exercise-induced 'leaky gut syndrome' se 100% protection dete hain.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Glycomacropeptide (GMP)</strong></td>
                    <td class="p-2 border">15% &ndash; 20%</td>
                    <td class="p-2 border">6.8 &ndash; 30 kDa</td>
                    <td class="p-2 border">Rennet dwara &kappa;-casein ke Phe105-Met106 bond cleave hone par alag hota hai. Ye natural form mein aromatic amino acids se free hota hai. Intestinal I-cells se <strong>Cholecystokinin (CCK)</strong> hormone release kara kar intense workout ke baad hunger aur cravings ko naturally suppress karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Bovine Serum Albumin (BSA)</strong></td>
                    <td class="p-2 border">4% &ndash; 5%</td>
                    <td class="p-2 border">66.5 kDa</td>
                    <td class="p-2 border">17 disulfide bonds aur 1 free thiol wala large globular protein. Ye blood circulation mein essential fatty acids aur steroid hormones ke transport mein madad karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lactoferrin &amp; Lactoperoxidase</strong></td>
                    <td class="p-2 border">1% &ndash; 2%</td>
                    <td class="p-2 border">78.0 kDa</td>
                    <td class="p-2 border">Iron-binding transferrin glycoprotein. Harmful bacteria se free ferric iron ($Fe^{3+}$) chelate karke direct bactericidal aur anti-viral action show karta hai, aur intestinal cells ki recovery fast karta hai.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Membrane Science: Cold Cross-Flow Microfiltration (CFM) vs. Chemical Ion Exchange (IE)</h3>
    <p>Manufacturing technology decide karti hai ki final whey powder mein bioactive immunoglobulins zinda bachenge ya acid-base chemical wash se denature hokar dead protein ban jayenge.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">Cold Cross-Flow Microfiltration (CFM) ka Scientific Principle:</p>
        <p class="text-xs text-indigo-800 mt-1">CFM system mein multi-channel tubular ceramic membranes (&alpha;-Al₂O₃ / ZrO₂) use hoti hain jinka calibrated pore size <strong>0.1 se 0.2 &mu;m</strong> hota hai. Ye process strictly cold conditions (<strong>8&deg;C se 10&deg;C</strong>) aur gentle Transmembrane Pressure (TMP = 0.5 to 1.2 bar) par run hoti hai. Cross-flow liquid velocity ($CFV = 5	ext{--}7	ext{ m/s}$) membrane surface par continuously high shear stress ($	au_w$) create karti hai, jisse membrane par koi foulant cake layer nahi jamti.</p>
        <p class="text-xs text-indigo-800 mt-1"><strong>Darcy's Law Permeate Flux Equation:</strong> $J = \\Delta P / [\\mu \\cdot (R_m + R_{cp} + R_f)]$। Low temperature par viscosity ($\\mu$) stable rehti hai aur protein denaturation rate <strong>&lt; 2%</strong> hota hai, jisse 100% native quaternary structure aur immunoglobulins perfectly active bache rehte hain.</p>
    </div>

    <p class="mt-3"><strong>Chemical Ion Exchange (IE) Athletes ke liye inferior kyu hai?</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Acid-Base Chemical Shock:</strong> Ion Exchange mein whey ko hydrochloric acid daalkar pH 3.2 tak chemically acidify kiya jaata hai taaki proteins par positive charge aa jaye aur wo silica resin beads se bind ho sakein. Phir unhe pH 9.0 par caustic soda (NaOH) se wash out karke release karaya jaata hai.</li>
        <li><strong>Bioactive Proteins ka Destruction:</strong> Is violent pH swing ki wajah se delicate immunoglobulins destroy ho jaate hain (IgG 10% se girkar &lt; 1% ho jaata hai) aur lactoferrin bilkul mar jaata hai. Saath hi Glycomacropeptide (GMP) resin par bind nahi hota aur effluent waste stream mein beh jaata hai. Bhale hi IE se 93% crude protein milta ho, par wo biologically lifeless hota hai. CFM Native Whey iske mukable kahin zyada superior aur functional hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Exercise Physiology &amp; Molecular Biology: mTORC1 Leucine Trigger</h3>
    <p>Post-workout whey protein lene par skeletal muscle cells ke andar muscle protein synthesis (MPS) ka molecular switch kaise on hota hai, iska exact biochemical mechanism samjhein:</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">The Sestrin2-Rag GTPase-mTORC1 Molecular Cascade:</p>
        <p class="text-xs text-amber-800 mt-1">Bloodstream se L-Leucine skeletal myocyte ke andar LAT1 (SLC7A5) transporter ke through enter karta hai. Cytoplasm mein free leucine nanomolar affinity ke saath sensor protein <strong>Sestrin2</strong> se bind hota hai. Basal state mein Sestrin2 GATOR2 ko suppress karke rakhta hai. Jaise hi leucine judta hai, Sestrin2 dissociate ho jaata hai, jisse GATOR2 free hokar GATOR1 ko shut off kar deta hai. Isse <strong>RagA/B-GTP</strong> aur <strong>RagC/D-GDP</strong> ka active Rag heterodimer ban jaata hai.</p>
        <p class="text-xs text-amber-800 mt-1">Ye active Rag complex <strong>raptor</strong> se bind karke pure <strong>mTORC1 (mechanistic Target of Rapamycin Complex 1)</strong> complex ko cytoplasm se physically uthakar lysosome membrane surface par translocate kar deta hai. Wahan lysosome par baitha small GTPase <strong>Rheb</strong> mTORC1 ki kinase activity ko fully switch on kar deta hai.</p>
    </div>

    <p class="mt-3"><strong>Downstream Ribosomal Phosphorylation Cascade:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>p70S6K1 Activation:</strong> Active mTORC1 directly <strong>p70S6K1</strong> kinase ko Thr389 position par phosphorylate karta hai. Activated p70S6K1 ribosomal protein S6 aur eIF4B ko activate karke ribosomal translation machine ki speed ko exponentially badha deta hai.</li>
        <li><strong>4E-BP1 Hyperphosphorylation:</strong> mTORC1 <strong>4E-BP1</strong> ko Thr37/46 par phosphorylate karta hai, jisse 4E-BP1 translation initiation factor <strong>eIF4E</strong> ko release kar deta hai. Free eIF4E turant eIF4G aur eIF4A ke saath milkar <strong>eIF4F cap-binding translation pre-initiation complex</strong> assemble karta hai, jo new actin aur myosin muscle fibers ka direct construction start karta hai.</li>
    </ol>

    <p class="mt-3"><strong>The 3.0g Leucine Threshold &amp; "Muscle Full" Refractory Period:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>The 3.0g Leucine Threshold:</strong> Clinical human trials (Atherton et al., Phillips et al.) ne prove kiya hai ki Muscle Protein Synthesis (MPS) linear curve par nahi badhta, balki step-function on-off switch ki tarah kaam karta hai. Adult human muscle mein mTORC1 switch ko complete trigger karne ke liye ek single meal mein kam se kam <strong>2.7 se 3.5 grams pure L-Leucine</strong> ka blood peak aana compulsory hai. WPC-80 mein 10.5%–11.5% natural leucine hota hai, yaani ek 30g scoop se 3.2g leucine milta hai jo is switch ko fully on kar deta hai.</li>
        <li><strong>The "Muscle Full" Refractory Reset:</strong> Ek baar mTORC1 ignite hone ke baad, muscle protein synthesis 90 se 120 minutes tak peak par rehta hai aur phir spontaneously baseline par drop ho jaata hai, chahe blood mein amino acids kitne bhi high kyu na ho (The Muscle Full Phenomenon). Muscle ko dobara stimulate karne ke liye <strong>3.5 se 4.5 hours</strong> ka refractory reset period chahiye hota hai. Har 1 ghante mein protein shake peena biochemically waste hota hai; optimal muscle building ke liye har 3.5 se 4 ghante ke gap par 25–35g high-leucine protein lena hi scientifically correct protocol hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Industrial Product Comparison Table</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Nutritional Parameter</th>
                    <th class="p-2 border">WPC-35</th>
                    <th class="p-2 border">WPC-80 (Gold Standard)</th>
                    <th class="p-2 border">WPI-90 (CFM Isolate)</th>
                    <th class="p-2 border">Native Whey (Direct Milk)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>Protein (Dry Basis)</strong></td><td class="p-2 border">34.0% &ndash; 36.0%</td><td class="p-2 border"><strong>80.0% &ndash; 82.5%</strong></td><td class="p-2 border"><strong>90.0% &ndash; 93.0%</strong></td><td class="p-2 border"><strong>93.0% &ndash; 95.0%</strong></td></tr>
                <tr><td class="p-2 border"><strong>Lactose Content</strong></td><td class="p-2 border">50.0% &ndash; 52.0%</td><td class="p-2 border">4.0% &ndash; 6.0%</td><td class="p-2 border"><strong>&lt; 1.0% (Lactose-Free)</strong></td><td class="p-2 border"><strong>&lt; 0.4%</strong></td></tr>
                <tr><td class="p-2 border"><strong>Fat (Lipids)</strong></td><td class="p-2 border">3.5% &ndash; 4.5%</td><td class="p-2 border">5.5% &ndash; 7.5%</td><td class="p-2 border"><strong>&lt; 1.0%</strong></td><td class="p-2 border"><strong>&lt; 0.3%</strong></td></tr>
                <tr><td class="p-2 border"><strong>Leucine per 100g</strong></td><td class="p-2 border">3.8 g</td><td class="p-2 border"><strong>9.2 &ndash; 9.8 g</strong></td><td class="p-2 border"><strong>11.2 &ndash; 11.8 g</strong></td><td class="p-2 border"><strong>12.8 &ndash; 13.5 g</strong></td></tr>
                <tr><td class="p-2 border"><strong>Ash (Minerals)</strong></td><td class="p-2 border">7.5% &ndash; 8.5%</td><td class="p-2 border">3.0% &ndash; 4.0%</td><td class="p-2 border">2.0% &ndash; 2.8%</td><td class="p-2 border">1.5% &ndash; 2.0%</td></tr>
                <tr><td class="p-2 border"><strong>GMP Content</strong></td><td class="p-2 border">18% &ndash; 20%</td><td class="p-2 border">15% &ndash; 18%</td><td class="p-2 border">15% &ndash; 18% (CFM) / 0% (IE)</td><td class="p-2 border"><strong>0% (No rennet used)</strong></td></tr>
                <tr><td class="p-2 border"><strong>Biological Value (BV)</strong></td><td class="p-2 border">95</td><td class="p-2 border"><strong>104</strong></td><td class="p-2 border"><strong>104</strong></td><td class="p-2 border"><strong>110</strong></td></tr>
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
                        Whey Protein Concentrate (WPC-80) & Isolate (WPI-90) — Manufacturing Process Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Complete 8-Step CFM Cold Microfiltration, Diafiltration & Instantization Process Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-STEP WHEY CFM FLOWCHART
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
                    Sweet Cheese Whey Clarification & Fat Separation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW WHEY INSPECTION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Cheddar ya mozzarella cheese vats se fresh sweet whey (pH 6.2–6.5) collect kiya jaata hai. Centrifugal clarifier se cheese fines (< 50 mg/L) remove karte hain. 45°C par hermetic separator se residual fat ko < 0.05% tak laya jaata hai taaki membrane lipid fouling na ho.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Whey Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">45°C – 50°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cheese Fines</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 mg/L</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Fat</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.05%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Titratable Acidity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.12% LA</strong></div></div>
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
                    Pasteurization & Cold Cross-Flow Microfiltration (CFM)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CFM STAGE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Whey ko 72°C par 15s regenerative pasteurization dekar turant < 10°C par chill kiya jaata hai. Cold CFM tubular ceramic membranes (0.1–0.2 µm) se lipid-protein aggregates aur bacteria filter ho jaate hain bina native immunoglobulins aur alpha-lactalbumin ko heat-denature kiye.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">CFM Pore Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.1 – 0.2 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Operating Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8°C – 10°C (Cold)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Transmembrane Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.8 – 1.2 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Native Protein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 98% Undenatured</strong></div></div>
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
                    Multi-Stage Ultrafiltration (UF) Concentration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">UF PROTEIN CONCENTRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Microfiltered whey multi-stage spiral-wound PES ultrafiltration membranes (MWCO 10–20 kDa) mein pass hota hai. Protein content retentate mein 0.8% se concentrate hokar 18–20% ho jaata hai, jabki lactose, minerals aur water permeate banke nikal jaate hain (VRF 20–25x).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Membrane MWCO</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 – 20 kDa</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3.5 – 5.0 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Retentate Protein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18% – 20%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">VRF Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 – 25x</strong></div></div>
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
                    Diafiltration (DF) for WPC-80 & WPI-90 Purity
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: PURITY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-purity demineralized RO water ko retentate loop mein continuously add karke bacha hua lactose aur minerals wash out kiya jaata hai. 2 stages DF se WPC-80 (80% protein) aur 4–5 stages DF se WPI-90 (> 90% pure protein, < 1% lactose, < 1% fat) banta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WPC-80 Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 80.0% Protein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WPI-90 Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 90.0% Protein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lactose (WPI)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (Lactose-Free)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat (WPI)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.8%</strong></div></div>
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
                    Low-Temperature Indirect Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Retentate ko vacuum evaporator mein 35% TS tak concentrate karke tall-form spray dryer tower mein inject karte hain. Controlled inlet air (175°C–180°C) aur exhaust (75°C–78°C) par 20 seconds mein flash dry hota hai, jisse leucine-rich peptides ki bioactivity 100% intact rehti hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">175°C – 180°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">75°C – 78°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Powder Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3.5% – 4.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solubility Index</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 mL</strong></div></div>
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
                    Fluid Bed Lecithin Instantization & Agglomeration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">INSTANTIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">External vibrating fluid bed mein 0.6–0.8% non-GMO sunflower lecithin warm powder granules par aerosolize kiya jaata hai. Water contact angle 90° se घटकर < 15° ho jaata hai, jisse shaker mein cold water daalte hi powder < 15 seconds mein instantly disperse ho jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lecithin Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Non-GMO Sunflower</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dosing Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.6% – 0.8% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dispersibility</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15s in cold water</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bulk Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.38 – 0.44 g/mL</strong></div></div>
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
                    In-line Sifting, 12,000 Gauss Magnet & Metal Detection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: METAL TRAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Agglomerated powder oscillating 1.0 mm sanitary sifter, 12,000 Gauss neodymium magnet trap aur triple-frequency metal detector se pass hota hai (sensitive to ≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, ≥ 1.2 mm SS 316 automatic rejection).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Screen</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnet Power</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Detect</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 Detect</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div></div>
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
                    Cleanroom Flavor Blending & Double-Sealed Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: PACKAGING INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 8 cleanroom mein: Pure powder ko natural cocoa/vanilla, stevia/sucralose aur multi-enzyme complex (DigeZyme 50 mg/serving) ke saath blend karke induction-sealed HDPE jars ya nitrogen-flushed barrier bags (headspace O₂ < 2.0%) mein hermetically pack karte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 8 / Class D</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme Complex</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DigeZyme 50 mg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Induction Seal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Hermetic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Headspace O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "hydrolyzed-whey": {
                title: "B. Hydrolyzed Whey (WPH) & Bioactive Peptides - PEPT1 Absorption Kinetics",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Enzymatic Hydrolysis Bioreactor Kinetics &amp; Degree of Hydrolysis (DH)</h3>
    <p>Hydrolyzed Whey Protein (WPH) engineered protein kinetics ka pinnacle hai. Isme pure Whey Protein Isolate (WPI) ya Concentrate (WPC) ko automated bioreactors ke andar specific food-grade enzymes se pre-digest karaya jaata hai, jisse long polypeptide chains toot kar ultra-fast absorbing bioactive short-chain oligopeptides (dipeptides aur tripeptides) ban jaati hain.</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">Degree of Hydrolysis (DH) ka Adler-Nissen Scientific Equation:</p>
        <p class="text-xs text-blue-800 mt-1">Industrial biochemistry mein Degree of Hydrolysis ($DH$) ka matlab hota hai total peptide bonds ($h_{tot}$) ke mukable kitne percent bonds successfully cleave hue hain:</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">DH = [ (B &times; N_b) / (&alpha; &times; M_p &times; h_tot) ] &times; 100%</p>
        <p class="text-xs text-blue-800 mt-1">Jahan:
            <br>&bull; <strong>B:</strong> pH ko constant (pH 7.5–8.0) rakhne ke liye titrate kiya gaya standard 4.0 M NaOH ka volume (liters mein).
            <br>&bull; <strong>N_b:</strong> Base titrant ki normality (eq/L).
            <br>&bull; <strong>M_p:</strong> Bioreactor mein protein substrate ka mass (grams, $N &times; 6.25$).
            <br>&bull; <strong>h_tot:</strong> Native whey protein mein total peptide bonds ($8.8	ext{ milliequivalents per gram}$).
            <br>&bull; <strong>&alpha;:</strong> Reaction pH aur temperature par &alpha;-amino groups ka dissociation factor: $lpha = 1 / [1 + 10^{(pK - pH)}]$।
        </p>
    </div>

    <p class="mt-3"><strong>Sports Nutrition mein Standard Commercial DH Tiers:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Low DH (3% &ndash; 5%):</strong> Gentle enzymatic conditioning. Ye ready-to-drink (RTD) clear protein drinks mein clarity aur heat stability deta hai aur infant hypoallergenic formulas mein use hota hai bina taste bigade.</li>
        <li><strong>Medium DH (10% &ndash; 15% - The Athletic Sweet Spot):</strong> Isme 65% se zyada peptide fragments dipeptides aur tripeptides (&lt; 1,000 Da) ke roop mein hote hain. Ye intestinal gut lining se lightning-fast speed se absorb hota hai aur enzymatic debittering ke baad taste bhi kaafi pleasant rehta hai.</li>
        <li><strong>High DH (20% &ndash; 30%):</strong> Deep cleavage into free amino acids and small peptides. Ye severe milk allergy wale infants aur clinical hospital tube feeding mein use hota hai. Iska taste kaafi bitter aur hyper-osmolar hota hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Debittering Science &amp; Ney's Rule (Q-Value)</h3>
    <p>WPH manufacturing mein sabse bada industrial hurdle hota hai peptides ki heavy bitterness, jo internal hydrophobic amino acids ke bahar expose hone se aati hai.</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">Peptide Bitterness Thermodynamics (Ney's Q-Value Rule):</p>
        <p class="text-xs text-amber-800 mt-1">Food biochemist K. H. Ney ne prove kiya tha ki peptide ki bitterness uski average hydrophobicity yaani <strong>Q-value</strong> par depend karti hai:</p>
        <p class="text-xs text-amber-900 font-mono mt-1 text-center font-bold">Q = (&sum; &Delta;f) / n</p>
        <p class="text-xs text-amber-800 mt-1">Jahan $\\sum \\Delta f$ amino acid side chains ki transfer free energy ka sum hai aur $n$ residues count hai:
            <br>&bull; Agar <strong>Q &gt; 1,400 cal/mol</strong> ho, toh peptide intensely bitter (kadwa) hoga.
            <br>&bull; Agar <strong>Q &lt; 1,300 cal/mol</strong> ho, toh peptide completely non-bitter (smooth taste) hoga.
        </p>
        <p class="text-xs text-amber-800 mt-1">Jab endopeptidases (jaise <em>Alcalase / Subtilisin</em>) whey chains ko randomly cut karte hain, toh hydrophobic residues (Leucine, Isoleucine, Phenylalanine) ends par expose ho jaate hain, jisse $Q$-value $1,550	ext{ cal/mol}$ ke paar chali jaati hai aur protein kadwa ho jaata hai.</p>
    </div>

    <p class="mt-3"><strong>Two-Stage Industrial Debittering Solution:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Stage 1 (Primary Cleavage):</strong> Food-grade endopeptidase (<em>Bacillus licheniformis</em> serine protease) se 52&deg;C, pH 8.0 par target 12% DH tak hydrolysis.</li>
        <li><strong>Stage 2 (Exopeptidase Debittering):</strong> <em>Aspergillus oryzae</em> se nikali gayi fungal aminopeptidases add ki jaati hain. Ye enzymes peptide ke outer terminal ends se hydrophobic amino acids ko selectively trim kar dete hain, jisse average $Q$-value $1,280	ext{ cal/mol}$ se niche drop ho jaati hai aur bitterness 85% se zyada eliminate ho jaati hai.</li>
        <li><strong>Thermal Enzyme Quenching:</strong> Bioreactor slurry ko scraped-surface heat exchanger se <strong>88&deg;C &ndash; 90&deg;C par 3 se 5 minutes</strong> ke liye pass karte hain. Isse enzymes permanently denature ho jaate hain bina product mein scorching ya Maillard browning create kiye.</li>
    </ol>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Exercise Physiology: PEPT1 Proton-Coupled Transporter</h3>
    <p>Athletes WPH sirf protein quantity ke liye nahi, balki iske unprecedented absorption kinetics ke liye prefer karte hain jo intact proteins aur free amino acids dono se tez hote hain.</p>

    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg mt-3">
        <p class="text-xs text-emerald-900 font-semibold">PEPT1 (SLC15A1) vs. Free Amino Acid Transporters:</p>
        <p class="text-xs text-emerald-800 mt-1">Human small intestine (duodenum aur jejunum) ke brush border membrane par protein products do alag molecular routes se absorb hote hain:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-emerald-800 mt-1">
            <li><strong>Route A (Free Amino Acid Transporters):</strong> Free crystalline amino acids ko limited channels (B&deg;AT1, y+LAT1 etc.) ke liye aapas mein compete karna padta hai. High concentration Leucine dusre essential amino acids ke absorption ko block kar deti hai.</li>
            <li><strong>Route B (PEPT1 / SLC15A1 Oligopeptide Symporter):</strong> PEPT1 ek high-capacity, low-affinity symporter hai. Ye <strong>dipeptides aur tripeptides ko directly intact</strong> proton gradient ($H^+$-symport) ki help se cell ke andar pull kar leta hai.</li>
        </ul>
        <p class="text-xs text-emerald-800 mt-1"><strong>The Thermodynamic Advantage:</strong> Sirf single proton ki energy use karke PEPT1 ek sath 2 ya 3 amino acids ko cell ke andar le aata hai. Cell ke andar cytosolic prolidases aur dipeptidases in peptides ko turant free amino acids mein break karke portal circulation mein release kar dete hain.</p>
    </div>

    <p class="mt-3"><strong>Clinical Kinetic Superiority:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Absorption Velocity ($V_{max}$):</strong> Di/tripeptide transport ka $V_{max}$ free amino acids ke mukable <strong>2.5 se 3.0 times higher</strong> hota hai.</li>
        <li><strong>Rapid Blood Peak ($T_{max}$):</strong> WPH lene ke baad circulating blood hyperaminoacidemia peak sirf <strong>15 se 20 minutes</strong> mein reach ho jaata hai, jabki intact WPI mein 45–60 minutes aur solid food protein mein 120 minutes lagte hain.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Bioactive Oligopeptides in Sports Recovery</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Bioactive Peptide</th>
                    <th class="p-2 border">Amino Acid Sequence</th>
                    <th class="p-2 border">Precursor Whey Fraction</th>
                    <th class="p-2 border">Mechanism of Action &amp; Athletic Benefit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&beta;-Lactosin A</strong></td>
                    <td class="p-2 border">Ala-Leu-Pro-Met-His-Ile-Arg</td>
                    <td class="p-2 border">&beta;-Lactoglobulin</td>
                    <td class="p-2 border">Angiotensin-Converting Enzyme (ACE) ka potent competitive inhibitor ($IC_{50} = 42.6\\;\\mu	ext{M}$). Blood vessels ke constriction ko rok kar blood pressure reduce karta hai aur working muscle beds mein microvascular blood flow (hyperemia) badhata hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Lactorphin</strong></td>
                    <td class="p-2 border">Tyr-Gly-Leu-Phe</td>
                    <td class="p-2 border">&alpha;-Lactalbumin</td>
                    <td class="p-2 border">&mu;-opioid receptors par act karne wala natural analgesic peptide. Heavy workouts ke baad Delayed-Onset Muscle Soreness (DOMS) aur muscle pain ko significantly reduce karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&beta;-Lactorphin</strong></td>
                    <td class="p-2 border">Tyr-Leu-Leu-Phe</td>
                    <td class="p-2 border">&beta;-Lactoglobulin</td>
                    <td class="p-2 border">Endothelial cells se vascular prostacyclin ($PGI_2$) release stimulate karta hai, jisse arteries dilate hoti hain aur intense exercise ke dauran platelet clotting prevent hoti hai.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Hydrolyzed vs. Intact Whey vs. Free Amino Acids Comparison</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Parameter</th>
                    <th class="p-2 border">Intact WPI-90</th>
                    <th class="p-2 border">WPH (DH 12% - Debittered)</th>
                    <th class="p-2 border">Free Crystalline Amino Acids</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>Molecular Form</strong></td><td class="p-2 border">Intact Globular Proteins (&gt; 14,000 Da)</td><td class="p-2 border"><strong>Dipeptides &amp; Tripeptides (&lt; 1,000 Da)</strong></td><td class="p-2 border">Free Monomers (75 &ndash; 204 Da)</td></tr>
                <tr><td class="p-2 border"><strong>Primary Transport Mechanism</strong></td><td class="p-2 border">Intraluminal Pancreatic Digestion required</td><td class="p-2 border"><strong>PEPT1 Proton-Coupled Symport</strong></td><td class="p-2 border">Competitive Na&plus;-dependent AA transporters</td></tr>
                <tr><td class="p-2 border"><strong>Gastric Emptying Time</strong></td><td class="p-2 border">40 &ndash; 50 minutes</td><td class="p-2 border"><strong>&lt; 15 minutes</strong></td><td class="p-2 border">Rapid (&lt; 15 minutes)</td></tr>
                <tr><td class="p-2 border"><strong>Plasma Leucine Peak (T_max)</strong></td><td class="p-2 border">50 &ndash; 60 minutes</td><td class="p-2 border"><strong>15 &ndash; 20 minutes</strong></td><td class="p-2 border">20 &ndash; 30 minutes</td></tr>
                <tr><td class="p-2 border"><strong>Osmolality at 10% Soln</strong></td><td class="p-2 border">Low (~70 mOsm/kg)</td><td class="p-2 border"><strong>Moderate (~220 mOsm/kg)</strong></td><td class="p-2 border"><strong>Very High (&gt; 650 mOsm/kg - Hypertonic)</strong></td></tr>
                <tr><td class="p-2 border"><strong>GI Distress / Cramping Risk</strong></td><td class="p-2 border">Low</td><td class="p-2 border"><strong>Lowest (Virtually Zero)</strong></td><td class="p-2 border">High (Osmotic diarrhea risk)</td></tr>
                <tr><td class="p-2 border"><strong>Glycogen Resynthesis Rate</strong></td><td class="p-2 border">Standard</td><td class="p-2 border"><strong>Accelerated (+35% co-ingested with carbs)</strong></td><td class="p-2 border">Moderate</td></tr>
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
                        Hydrolyzed Whey Protein (WPH) & Bioactive Peptides — Bioreactor Process Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Enzymatic Hydrolysis (DH 10–15%), Debittering, Activated Carbon Polishing & Spray Drying Flowchart</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-STEP HYDROLYZED WHEY CCP FLOWCHART
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
                    WPI-90 Reconstitution & Thermal Conditioning
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">SUBSTRATE PREPARATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Ultra-pure WPI-90 powder ko demineralized RO water mein 50°C par dissolve karke 8–10% protein solution banaya jaata hai. Food-grade 1.0 M KOH se pH ko exactly 8.0 par stabilize kiya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Solution</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8% – 10% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solution Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Starting pH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 8.0 ± 0.1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Base Used</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">KOH (Sodium-Free)</strong></div></div>
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
                    Enzymatic Bioreactor Hydrolysis (Alcalase / Trypsin)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">ENZYME DIGESTION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Pharmaceutical-grade endopeptidase (Alcalase 2.4L / Subtilisin) 1.5–2.0% w/w par inject ki jaati hai. Jaise-jaise peptide bonds cleave hote hain, automated pH-stat titrator continuously KOH feed karke pH 8.0 maintain rakhta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme System</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Alcalase 2.4L / Trypsin</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">E : S Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.5% – 2.0% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH Control</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Automated pH-Stat 8.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 – 90 Minutes</strong></div></div>
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
                    Online In-line Degree of Hydrolysis (DH 10–15%) Monitoring
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: DH CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Base consumption ke base par real-time DH calculate hota hai: DH = (B × N_b) / (alpha × m_p × h_tot) × 100%. Jaise hi DH target 10%–15% (di- aur tri-peptides ka maximum yield) reach karta hai, reaction ko instantly stop kar diya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target DH Range</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10% – 15% DH</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Peptide Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2,000 Da (> 70%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Di/Tri-Peptides</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 40% of Total</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Measurement</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Real-Time Base Consumption</strong></div></div>
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
                    Thermal Enzyme Inactivation & Denaturation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: ENZYME DEACTIVATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Hydrolysate ko high-temperature plate heat exchanger se 88°C–90°C par 5 minutes ke liye pass karte hain. Alcalase enzyme permanently denature ho jaati hai, jisse over-hydrolysis aur free amino acids mein conversion ruk jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inactivation Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">88.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">5 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Enzyme</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.0% (Complete Kill)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FDV Divert</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 86.5°C</strong></div></div>
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
                    Enzymatic Debittering using Fungal Aminopeptidase
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DEBITTERING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Endopeptidase cleavage se hydrophobic C-terminal leucine aur phenylalanine expose ho jaate hain jisse intense bitterness (Q-value > 1,400 cal/mol) aati hai. Fungal aminopeptidase (Aspergillus oryzae) terminal hydrophobic residues ko cut karke > 85% bitterness khatam kar deta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Debittering Enzyme</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Fungal Aminopeptidase</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Treatment Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bitterness Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 85% Debittered</strong></div></div>
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
                    Activated Carbon Polishing & Microfiltration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">POLISHING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">0.2% acid-washed food-grade activated carbon add karke trace bitter peptides aur off-flavors ko adsorb kiya jaata hai. Phir 0.2 µm ceramic microfilter se carbon particles ko 100% separate kar lete hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carbon Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Contact Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Filter Pore Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2 µm Ceramic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Permeate Clarity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Optical NTU < 1.0</strong></div></div>
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
                    Multi-Effect Concentration & Low-Heat Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: PEPTIDE DRYING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Vacuum evaporator mein 45% TS tak concentrate karke tall-form spray dryer (Inlet 175°C, Exhaust 76°C) mein 180 bar pressure par atomize karte hain. Fine Hydrolyzed Whey Peptide powder banta hai jisme residual moisture < 3.5% rehti hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">175°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">76°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.5%</strong></div></div>
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
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: FOREIGN BODY & MAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">1.0 mm sifter aur 12,000 Gauss magnetic trap se pass karke nitrogen-flushed barrier packaging (O₂ < 1.5%) mein seal karte hain. Rapid PEPT1 intestinal absorption (< 30 minutes peak hyperaminoacidemia) certified.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Grate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">PEPT1 Absorption</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 30 Min Peak</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "micellar-casein": {
                title: "C. Micellar Casein (MC) & Caseinates - 8-Hour Anti-Catabolic Window",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Supramolecular Nanostructure of Native Casein Micelle</h3>
    <p>Dairy biochemistry aur sports nutrition mein Micellar Casein ko ultimate "slow-release" anti-catabolic protein mana jaata hai. Cow milk ke total protein ka lagbhag <strong>80% part Casein</strong> hota hai. Ye isolated monomers ke roop mein nahi, balki <strong>120 se 200 nanometers</strong> diameter wale stable spherical colloidal aggregates ke roop mein rehta hai jise <strong>Casein Micelle</strong> kehte hain (molecular mass $10^7	ext{ to }10^9	ext{ Da}$).</p>

    <div class="p-3 bg-purple-50 border border-purple-200 rounded-lg mt-3">
        <p class="text-xs text-purple-900 font-semibold">The Holt Nanocluster &amp; Dual-Binding Model:</p>
        <p class="text-xs text-purple-800 mt-1">Ek native micelle chaar distinct proteins ka organized cluster hota hai jo <strong>Colloidal Calcium Phosphate (CCP - [Ca_9(PO_4)_6])</strong> nanoclusters aur hydrophobic bonds dwara firmly linked rehta hai:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-purple-800 mt-1">
            <li><strong>&alpha;_{s1}-Casein (38% of total casein, 23.6 kDa):</strong> Highly phosphorylated (8–9 phosphoserine residues). Strong calcium-binding capacity jo CCP cross-linkages ka core scaffold banata hai.</li>
            <li><strong>&alpha;_{s2}-Casein (10% of total casein, 25.2 kDa):</strong> Most hydrophilic casein jisme 10–13 phosphoserine residues aur 2 internal disulfide bonds hote hain.</li>
            <li><strong>&beta;-Casein (36% of total casein, 24.0 kDa):</strong> Strongly amphiphilic protein jiska N-terminal polar aur C-terminal tail intensely hydrophobic hota hai. Ye micellar interior core ko form karta hai.</li>
            <li><strong>&kappa;-Casein (13% of total casein, 19.0 kDa):</strong> Colloidal protector. Ye calcium presence mein precipitate nahi hota aur micelle ke outer surface perimeter par settle rehta hai.</li>
        </ul>
        <p class="text-xs text-purple-800 mt-1"><strong>The &kappa;-Casein "Hairy Layer" Steric Brush:</strong> &kappa;-Casein ka hydrophilic C-terminal domain (residues 106–169, glycomacropeptide) micelle surface se <strong>5 se 10 nm bahar aqueous phase mein extend rehta hai</strong>. Neutral pH par ye negative charge (zeta potential $\\zeta pprox -20	ext{ mV}$) carry karta hai, jisse micelles aapas mein takra kar kabhi coagulate nahi hote.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Cold Ceramic Microfiltration (0.1 &mu;m) vs. Chemical Caseinates</h3>
    <p>Manufacturing process ye decide karta hai ki athlete ko real native micellar casein mil raha hai ya chemical acid-alkali se stripped denatured caseinate salts.</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Manufacturing Metric</th>
                    <th class="p-2 border">Native Micellar Casein (MC-85)</th>
                    <th class="p-2 border">Calcium Caseinate</th>
                    <th class="p-2 border">Sodium Caseinate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Production Method</strong></td>
                    <td class="p-2 border">Cold Ceramic Microfiltration (<strong>0.10 &ndash; 0.14 &mu;m</strong>) at 8&ndash;10&deg;C. Zero chemical acids or alkalis used.</td>
                    <td class="p-2 border">Isoelectric acid precipitation (pH 4.6 with HCl), followed by neutralization with $Ca(OH)_2$ at 80&deg;C.</td>
                    <td class="p-2 border">Isoelectric acid precipitation (pH 4.6 with HCl), followed by neutralization with NaOH at 80&deg;C.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Micellar Integrity</strong></td>
                    <td class="p-2 border"><strong>100% Intact Native Micelles</strong> with intact CCP nanoclusters and &kappa;-casein hairy layer.</td>
                    <td class="p-2 border"><strong>Completely Destroyed (0%).</strong> Exists as random-coil linear denatured aggregates.</td>
                    <td class="p-2 border"><strong>Completely Destroyed (0%).</strong> Isolated individual random polymer chains.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Gastric Curd Clotting</strong></td>
                    <td class="p-2 border"><strong>Firm, cohesive protein gel clot</strong> formed in the stomach ($pH &lt; 2.5$). Slow digestion.</td>
                    <td class="p-2 border">Weak, loose, crumbly flocculation. Moderate digestion speed.</td>
                    <td class="p-2 border">Minimal or no cohesive clotting; rapid liquid transit into the duodenum.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Amino Acid Release Profile</strong></td>
                    <td class="p-2 border"><strong>Sustained, steady zero-order plateau over 7 &ndash; 8 hours.</strong></td>
                    <td class="p-2 border">Moderate release over 3 &ndash; 4 hours.</td>
                    <td class="p-2 border">Intermediate release over 2 &ndash; 3 hours (approaching whey speeds).</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Bioactive Nanominerals</strong></td>
                    <td class="p-2 border">Retains organic <strong>Colloidal Bio-Calcium and Phosphorus</strong> in natural milk ratios.</td>
                    <td class="p-2 border">Synthetic calcium hydroxide additions; disrupted ionic balance.</td>
                    <td class="p-2 border">Stripped of calcium; high in inorganic sodium (up to 1,400 mg/100g).</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Exercise Physiology: The 8-Hour Anti-Catabolic Window &amp; Gastric Coagulation</h3>
    <p>Micellar casein ki sabse badi physiological power hai whole-body Muscle Protein Breakdown (MPB) ko 34% tak suppress karna, jisse ye world ka gold-standard bedtime (nocturnal) anti-catabolic protein banta hai.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">Gastric Clotting Kinetics &amp; Pepsin Proteolysis:</p>
        <p class="text-xs text-indigo-800 mt-1">Jab micellar casein human stomach mein enter karta hai, toh gastric hydrochloric acid ($pH pprox 1.5	ext{ to }2.0$) aur <strong>pepsin</strong> enzyme se react karta hai:</p>
        <ol class="list-decimal list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li><strong>Zeta Potential Collapse:</strong> Stomach ke acidic environment mein pH isoelectric point ($pI = 4.6$) se niche chala jaata hai, jisse &kappa;-casein ka negative charge zero ho jaata hai ($\\zeta ightarrow 0	ext{ mV}$) aur electrostatic repulsion vanish ho jaata hai.</li>
            <li><strong>Pepsin Hydrolysis:</strong> Pepsin enzyme &kappa;-casein ke Phe105-Met106 peptide bond ko rapidly cut kar deta hai, jisse hydrophilic glycomacropeptide tail severed ho jaati hai. Steric aur electrostatic protection khatam hote hi hydrophobic cores aapas mein merge hokar ek dense, water-insoluble <strong>protein gel clot (gastric curd)</strong> bana lete hain.</li>
        </ol>
        <p class="text-xs text-indigo-800 mt-1"><strong>Zero-Order Gastric Emptying:</strong> Ye solid curd pyloric sphincter se direct pass nahi ho sakta. Pepsin is clot ko bahar se andar ki taraf slow zero-order rate (<strong>0.025 to 0.035 g/min</strong>) par continuously erode karta rehta hai, jisse <strong>7 se 8 hours</strong> tak duodenum mein steady amino acid release chalta rehta hai.</p>
    </div>

    <p class="mt-3"><strong>The Landmark Boirie Tracer Study (PNAS):</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>Seminal isotopic tracer trial (<em>Boirie et al., PNAS</em>) mein healthy adults ko $[1-^{13}C]	ext{leucine}$-labeled whey ya $[1-^{13}C]	ext{leucine}$-labeled micellar casein diya gaya.</li>
        <li><strong>Whey (The "Fast" Protein):</strong> 60 minutes mein sharp plasma leucine peak laya jisse MPS +68% badha, lekin 31% leucine fuel ki tarah oxidize hokar burn ho gaya. 4 hours baad leucine baseline par aa gaya aur muscle breakdown suppress nahi ho paya.</li>
        <li><strong>Micellar Casein (The "Slow" Anti-Catabolic Protein):</strong> Isne 60–90 minutes mein moderate leucine level generate kiya jo lagatar <strong>420 minutes (7 hours) tak stable plateau</strong> ke roop mein maintain raha. Overall leucine oxidation bohot kam hui aur sabse crucial: micellar casein ne <strong>whole-body Muscle Protein Breakdown (MPB) ko 34% suppress</strong> karke rakha.</li>
        <li><strong>Net Protein Balance (NPB = MPS &minus; MPB):</strong> Immediate post-workout window mein MPS fire karne ke liye whey best hai, lekin bedtime ya prolonged fasting ke dauran 40g micellar casein MPB ko zero ke paas rakhta hai, jisse 8 hours of sleep ke dauran cumulative net nitrogen balance maximum positive rehta hai.</li>
    </ul>

    
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Phosphopeptides &amp; Bioactive Mineral Chelators</h3>
    <p>Micellar casein ke slow digestion ke dauran specialized bioactive peptides release hote hain jo athlete ke body mein unique biological functions perform karte hain:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Caseinophosphopeptides (CPPs):</strong> Phosphorylated sequences jisme <em>-Ser(P)-Ser(P)-Ser(P)-Glu-Glu-</em> motif hota hai. Ye negatively charged sequences dietary calcium (^{2+}$), zinc (^{2+}$), iron (^{2+}$), aur magnesium (^{2+}$) ko chelate karke alkaline distal ileum mein insoluble salts banne se rokti hain. CPPs intestinal mineral bio-availability aur bone mineral density ko heavy lifting athletes mein significantly boost karte hain.</li>
        <li><strong>Casomorphins:</strong> &beta;-casein se derive hone wale &mu;-opioid receptor agonists (jaise &beta;-casomorphin-7). Moderate physiological amounts mein ye gastrointestinal transit time ko naturally prolong karte hain, jisse saath mein khaye gaye sabhi micronutrients ka 100% complete intestinal absorption ho sake.</li>
        <li><strong>Casokinins:</strong> Potent endogenous ACE-inhibitory peptides jo angiotensin-II vasoconstriction ko suppress karke night-time mein blood pressure normalize karte hain aur nocturnal cardiovascular &amp; endothelial recovery provide karte hain.</li>
    </ul>

    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Micellar Casein (MC-85) — Cold Ceramic Fractionation Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">0.14 µm Cold Ceramic Microfiltration, Diafiltration & Low-Heat Spray Drying Process Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP MICELLAR CASEIN FLOWCHART
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
                    Fresh Skim Milk Reception & Bactofugation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW MILK INTAKE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Grade-A fresh skim milk (< 0.05% fat) ki antibiotic residue aur somatic cell testing. 55°C par two-stage bactofugation 99% bacterial spores ko eliminate kar deta hai bina native casein micelle structure ko damage kiye.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Content</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.05%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bactofuge Kill</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99% Spores</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Somatic Cells</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 200,000 / mL</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Acidity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.14% LA</strong></div></div>
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
                    Cold Ceramic Microfiltration (MF 0.1–0.14 µm)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">MF FRACTIONATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Chilled skim milk (6°C–8°C) ko tubular ceramic membranes (0.1–0.14 µm calibrated pore size) se pass kiya jaata hai. Intact spherical casein micelles (150–250 nm) retentate mein ruk jaate hain, jabki native whey proteins aur lactose permeate hoke Ideal Whey banate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Membrane Pore</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.1 – 0.14 µm Ceramic</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Operating Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">6°C – 8°C (Cold)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Casein Retained</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Whey Permeated</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 95% into Ideal Whey</strong></div></div>
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
                    Continuous Cold Diafiltration (DF) for Micellar Purity
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: PURITY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Retentate loop mein continuously chilled RO water feed karke residual whey proteins aur lactose ko wash out kiya jaata hai. Retentate mein pure micellar casein protein concentration 85%–88% (dry basis) tak achieve hota hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Diafiltration Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8°C – 10°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Purity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 85.0% Micellar Casein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Whey</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 5.0% of Total Protein</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Native Micelles</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Intact</strong></div></div>
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
                    Low-Temperature Falling Film Vacuum Evaporation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CONCENTRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Retentate ko MVR falling film evaporator mein low temperature (50°C–55°C, high vacuum -0.88 bar) par 28–30% total solids tak gently concentrate kiya jaata hai bina micellar calcium-phosphate bonds ko destabilize kiye.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Evaporation Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C – 55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.88 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Concentrate TS</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">28% – 30%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Viscosity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 120 cP at 50°C</strong></div></div>
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
                    Gentle Tall-Form Spray Drying with Low Shear
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Low-shear rotary atomizer ya low-velocity pressure nozzles se tall-form drying chamber (Inlet 170°C–175°C, Exhaust 74°C–76°C) mein dry kiya jaata hai. Native micellar structure aur organic calcium-phosphate nanoclusters 100% preserve rehte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">170°C – 175°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">74°C – 76°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Powder Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">4.0% – 4.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solubility Index</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.2 mL</strong></div></div>
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
                    Fluid Bed Conditioning & Sunflower Lecithin Instantization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">INSTANTIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Casein powder intrinsically hydrophobic hota hai. External fluid bed mein 0.8–1.0% high-purity sunflower lecithin aerosol spray karke powder ko instantized banaya jaata hai taaki cold water aur milk mein smooth thick shake texture bane bina lumps ke.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lecithin Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.8% – 1.0% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bed Air Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">35°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Wettability</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 30s in cold liquid</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bulk Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.42 – 0.48 g/mL</strong></div></div>
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
                    Sifting, 12,000 Gauss Magnet Trap & Hermetic Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: METAL TRAP & PACKAGING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Powder 1.0 mm sifter aur 12,000 Gauss Rare-Earth neodymium magnet trap se pass hoke nitrogen-flushed HDPE tubs ya multi-ply foil pouches mein hermetically pack hota hai. 8-hour anti-catabolic sustained release certified.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Screen</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnet Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Release Window</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7 – 8 Hours Sustained</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "mass-gainers": {
                title: "D. Mass Gainers & Complex Carbohydrate-Protein Blends (Cluster Dextrin & DigeZyme)",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Caloric Energetics &amp; Ectomorph Hypertrophy Physiology</h3>
    <p>Hyper-metabolic basal metabolic rates (BMR) ya "hardgainers" (ectomorph somatotype) wale athletes mein muscle hypertrophy achieve karne ke liye chronic positive energy balance compulsory hai. Daily caloric surplus equation is tarah calculate hoti hai:</p>
    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-2">
        <p class="text-xs text-amber-900 font-mono text-center font-bold">Total Daily Energy Intake (TDEI) = BMR + TEF + EEE + NEAT + Surplus (&Delta;E = +400 to +800 kcal/day)</p>
        <p class="text-xs text-amber-800 mt-1">Sirf fibrous solid whole food se itna heavy surplus khane par premature gastric satiety aur stomach bloating hoti hai. Scientific mass gainers ek single shake mein <strong>600 se 1,250 clean calories</strong> deliver karte hain perfectly balanced <strong>3:1 ya 4:1 Carbohydrate-to-Protein</strong> macronutrient ratio ke saath.</p>
    </div>

    <p class="mt-3"><strong>The Insulin-mTORC1 Synergy:</strong> Carbs se hone wala insulin secretion leucine ke saath synergistically work karta hai. Insulin Akt/PKB pathway activate karta hai jo TSC2 (Tuberin) ko inactivate kar deta hai. Isse Rheb-GTP fully free hokar mTORC1 ko maximum speed par chalata hai. Saath hi Akt FOXO transcription factors ko shut down kar deta hai, jisse muscle-wasting ubiquitin ligases (MuRF-1 aur Atrogin-1) completely suppress ho jaate hain aur catabolism ruk jaata hai.</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Carbohydrate Polymer Science: HBCD vs. Cheap Maltodextrin &amp; Dextrose</h3>
    <p>Saste commercial mass gainers mein dextrose, fructose aur cheap corn syrup bhara hota hai jo gastric bloating aur blood sugar crash create karta hai.</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">The Biophysics of Osmolality (Van 't Hoff Equation):</p>
        <p class="text-xs text-blue-800 mt-1">Stomach mein osmotic pressure ($\\Pi$) solute particles ki molar concentration par depend karta hai:</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">&Pi; = &Sigma; (c_i &times; R &times; T) &nbsp;&bull;&nbsp; Osmolality = (Moles of Solute Particles) / (kg of Solvent)</p>
        <p class="text-xs text-blue-800 mt-1"><strong>The Budget Sugar Dilemma (Hypertonic Solutions &gt; 450 mOsm/kg):</strong> Standard dextrose ($MW = 180	ext{ Da}$) aur maltodextrin ($DE = 15	ext{--}20$, $MW pprox 1,000	ext{ Da}$) mein per 100g serving millions of tiny sugar molecules hote hain. Water mein mix karne par ye hypertonic solution banate hain. Stomach mein jaate hi hypertonicity gastric emptying ko halt kar deti hai (gastroparesis) aur systemic circulation se paani kheench kar intestine mein bhar deti hai, jisse painful cramps, abdominal distension aur osmotic diarrhea hota hai.</p>
        <p class="text-xs text-blue-800 mt-2"><strong>The Scientific Solution: Highly Branched Cyclic Dextrin (HBCD / Cluster Dextrin&reg;):</strong> Waxy corn starch ko branching enzyme (<em>1,4-&alpha;-glucan branching enzyme</em>) dwara cyclize karke banaya jaata hai. HBCD ka molecular weight extremely high ($MW = 160,000	ext{ to }400,000	ext{ Da}$) hota hai. Large molecular size ki wajah se particle count negligible hota hai, jisse iski <strong>osmolality ultra-low (&lt; 150 mOsm/kg &ndash; hypotonic)</strong> rehti hai.</p>
    </div>

    <p class="mt-3"><strong>HBCD ki Physiological Superiority:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Ultra-Fast Gastric Clearance (&lt; 20 minutes):</strong> Stomach se paani ki tarah tezi se nikal kar intestine mein reach karta hai, jisse workout ke turant baad peene par bhi zero stomach heaviness ya nausea hoti hai.</li>
        <li><strong>Sustained Glycogen Resynthesis without Rebound Crashes:</strong> Blood mein $5	ext{--}7	ext{ mmol/kg/hr}$ ki continuous steady rate se glucose deliver karta hai, jisse insulin spike ke baad energy crash nahi hota aur muscle glycogen supercompensation steady chalta hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Multi-Phase Protein Matrix &amp; Clean Lipid Bio-Energetics</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Tri-Stage Protein Matrix:</strong> <em>Whey Protein Isolate (WPI-90)</em> 15 minutes mein amino acids deliver karta hai &rarr; <em>Whey Protein Concentrate (WPC-80)</em> hours 1 to 3 maintain rakhta hai &rarr; <em>Micellar Casein (MC-85)</em> hours 3 to 8 muscle breakdown prevent karta hai.</li>
        <li><strong>Medium Chain Triglycerides (MCT Oil Powder - C8/C10):</strong> Caprylic Acid ($C_8$) aur Capric Acid ($C_{10}$) acacia fiber carrier par micro-encapsulated hote hain.
            <br>&bull; Inhe digest hone ke liye bile salts ya chylomicron transport ki zaroorat nahi hoti; ye directly <strong>hepatic portal vein</strong> se absorb hote hain.
            <br>&bull; Mitochondria mein bina CPT-1 carrier ke direct enter karke &beta;-oxidation dwara $8.3	ext{ kcal/g}$ dense ATP energy dete hain aur adipose body fat mein store nahi hote.
        </li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. The DigeZyme&reg; 5-Enzyme Digestive Complex</h3>
    <p>1,000 calories ke heavy nutrient load ko bina kisi gas, bloating ya indigestion ke 100% digest karne ke liye modern clean gainers mein multi-enzyme digestive complex (DigeZyme&reg;) add kiya jaata hai:</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Enzyme</th>
                    <th class="p-2 border">Fermentation Source</th>
                    <th class="p-2 border">Activity Unit</th>
                    <th class="p-2 border">Target Substrate Cleaved</th>
                    <th class="p-2 border">Physiological Function</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Amylase</strong></td>
                    <td class="p-2 border"><em>Aspergillus oryzae</em></td>
                    <td class="p-2 border">24,000 U/g</td>
                    <td class="p-2 border">&alpha;-(1,4)-glucosidic bonds</td>
                    <td class="p-2 border">Complex starches aur maltodextrins ko maltose mein rapidly convert karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Neutral Protease</strong></td>
                    <td class="p-2 border"><em>Bacillus subtilis</em></td>
                    <td class="p-2 border">6,000 U/g</td>
                    <td class="p-2 border">Internal peptide bonds</td>
                    <td class="p-2 border">Proteins ko easily absorb hone wale peptides mein break karke gut putrefaction prevent karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lactase (&beta;-Galactosidase)</strong></td>
                    <td class="p-2 border"><em>Aspergillus oryzae</em></td>
                    <td class="p-2 border">4,000 U/g</td>
                    <td class="p-2 border">&beta;-(1,4)-galactoside bonds</td>
                    <td class="p-2 border">Milk lactose ko glucose aur galactose mein break karke bloating aur dairy diarrhea completely eliminate karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lipase</strong></td>
                    <td class="p-2 border"><em>Rhizopus oryzae</em></td>
                    <td class="p-2 border">1,000 U/g</td>
                    <td class="p-2 border">Glycerol ester bonds</td>
                    <td class="p-2 border">Dietary fats aur MCTs ko clean fatty acids mein convert karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Cellulase</strong></td>
                    <td class="p-2 border"><em>Trichoderma</em></td>
                    <td class="p-2 border">200 U/g</td>
                    <td class="p-2 border">&beta;-(1,4)-D-glucan bonds</td>
                    <td class="p-2 border">Oat fibers aur plant cellulose ko break karke trapped micronutrients liberate karta hai.</td>
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
                        Mass Gainer & Carbohydrate-Protein Matrix — Manufacturing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Cleanroom Blending, Magnetic Separation, DigeZyme Dosing & Induction Sealing Process Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP MASS GAINER FLOWCHART
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
                    Raw Material Testing & High-Energy Formulation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW INGREDIENT QC</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-grade raw materials ka batch inspection: Cluster Dextrin® (HBCD), CFM WPC-80, WPI-90, Micellar Casein, Micro-encapsulated MCT Oil Powder (C8/C10), aur organic rolled oat flour. Moisture < 5.0%, heavy metals ICP-MS screen pass hona mandatory hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Raw Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 5.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lead (Pb)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.5 ppm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Arsenic (As)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.2 ppm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Microbial Count</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1,000 CFU/g</strong></div></div>
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
                    Rotary Sanitary Sifting (1.0 mm Mesh Screen)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DE-LUMPING & SIFTING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Sabhi carbohydrate polymers aur protein powders ko independent sanitary high-speed rotary sifters (1.0 mm 316L stainless steel mesh) se pass karke aggregates aur lumps ko break kiya jaata hai taaki particle size uniform ho.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Stainless</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Throughput</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,500 kg/hr</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Oversize Rejection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Continuous Trap</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Screen Inspection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Pre/Post Run Checked</strong></div></div>
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
                    Dual Rare-Earth 12,000 Gauss Magnetic Separation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: FERROUS CONTAMINATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Sifted powder dual-stage high-intensity 12,000 Gauss neodymium magnetic drawer grates se gravity flow ke through pass hota hai. Har trah ke sub-micron ferrous wear particles ko capture kar liya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss Grate</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pull Strength</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 12 lbs</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleaning Cycle</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Every 4 Hours</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Integrity Test</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Annual Gaussmeter Calibration</strong></div></div>
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
                    High-Precision Loss-in-Weight Vacuum Pneumatic Transfer
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">PRECISION BATCHING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Loss-in-weight automated gravimetric feeders components ko automated high-shear paddle blender mein vacuum pneumatic transfer line ke through accurately transfer karte hain (+/- 0.1% batch precision).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Transfer Gas</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Dry Oil-Free Air (Dew point -40°C)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Batch Precision</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">± 0.1% Target Weight</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dust Control</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">HEPA Pulse Jet Filter</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Static Grounding</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Continuous Monitored</strong></div></div>
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
                    Low-Shear Gentle Blending & Micro-Nutrient Dosing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">HOMOGENEOUS BLENDING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Paddle blender mein 25 RPM par 12 minutes gentle blending. Special pre-blend zone mein DigeZyme 5-enzyme digestive complex (50 mg/serving), vitamins, minerals aur micronized natural flavors homogeneous distribute kiye jaate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Blender Type</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Sanitary Dual-Shaft Paddle</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Blender Speed</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">25 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Blend Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Blend Uniformity (RSD)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.0% (HPLC Assay)</strong></div></div>
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
                    In-line Triple Frequency Metal Detection & Checkweighing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: METAL DETECTION & WEIGHT</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Blended mass gainer powder packaging feed hopper mein aate waqt triple-frequency metal detector se pass hota hai: sensitive to >= 0.8 mm Ferrous, >= 1.0 mm Non-Ferrous, aur >= 1.2 mm SS 316. In-line checkweigher 100% tubs verify karta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Sensitivity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Non-Ferrous Sensitivity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.0 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 Sensitivity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reject System</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">High-Speed Air Blast</strong></div></div>
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
                    Automated Auger Tub Filling & Induction Heat Sealing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: CONTAINER INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Servo-driven auger filling heads cleanroom environment (ISO Class 8) mein tubs fill karte hain. Nitrogen purge tunnel (headspace O₂ < 2.0%) ke baad high-frequency induction sealer foil liner ko 100% hermetically bond kar deta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 8 / FED 100,000</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Headspace O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Induction Seal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Hermetic Bond</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Caloric Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,000+ kcal / Serving</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "creatine-performance": {
                title: "E. Creatine Monohydrate (200 Mesh), BCAA, Citrulline & Pre-Workouts",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Creatine Monohydrate &amp; The Phosphocreatine (PCr) Energy Shuttle</h3>
    <p>Creatine (&alpha;-methylguanidinoacetic acid, $C_4H_9N_3O_2$) sports science ka sabse thoroughly researched aur scientifically validated ergogenic performance compound hai. Human skeletal muscle mein body ka lagbhag 95% creatine store hota hai, jisme se <strong>65% Phosphocreatine (PCr)</strong> aur 35% free creatine ($Cr$) ke roop mein rehta hai.</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
        <p class="text-xs text-red-900 font-semibold">The Lohmann Reaction &amp; Instantaneous ATP Buffering:</p>
        <p class="text-xs text-red-800 mt-1">Heavy lifting sets ya max sprints (&le; 10 seconds) ke dauran actomyosin ATPase cellular ATP ko extreme speed par todta hai: $ATP + H_2O ightarrow ADP + P_i + H^+ + 	ext{Energy}\\;(\\Delta G^\\circ = -30.5	ext{ kJ/mol})$। Intramuscular ATP stores ($~5	ext{--}6	ext{ mmol/kg}$) sirf 1.5 se 2.0 seconds mein exhaust ho jaate hain. <strong>Creatine Kinase (CK)</strong> enzyme high-energy phosphoryl group ko instantaneously PCr se ADP par transfer karke ATP regenerate karta hai:</p>
        <p class="text-xs text-red-900 font-mono mt-1 text-center font-bold">ADP + PCr + H^+ &hArr; ATP + Cr &nbsp;&nbsp; (K_eq = 1.6 &times; 10^9 M^-1 at pH 7.0)</p>
        <p class="text-xs text-red-800 mt-1"><strong>The Mitochondrial Creatine Shuttle:</strong> Mitochondria mein oxidative phosphorylation se banne wala ATP <strong>Mitochondrial Creatine Kinase (CK_mit)</strong> dwara free creatine ko dekar PCr mein convert hota hai. PCr cytosol mein diffuse hokar contraction sites par <strong>Cytosolic Muscle CK</strong> dwara ADP ko instantly ATP mein recycle karta rehta hai bina lactic acid banaye.</p>
    </div>

    <p class="mt-3"><strong>Intracellular Saturation &amp; Myogenic Anabolic Signaling:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Creatine Pool Supersaturation ($120 ightarrow 160	ext{ mmol/kg}$):</strong> Non-supplemented adults mein baseline muscle creatine lagbhag $120	ext{ mmol/kg dry muscle}$ hota hai. <strong>20g/day 5&ndash;7 days (Loading)</strong> ya <strong>3&ndash;5g/day 28 days</strong> lene se pool saturated hokar $150	ext{ to }160	ext{ mmol/kg}$ (+25% se +35%) tak pahunch jaata hai.</li>
        <li><strong>Cellular Osmotic Swelling &amp; Myogenic Signaling:</strong> Creatine muscle cells mein <strong>CRT (SLC6A8) transporter</strong> dwara sodium ions ke saath enter karta hai. Iske saath intracellular water retention badhta hai (cellular hydration). Ye mechanical swelling <strong>p38 MAPK pathway</strong> ko trigger karti hai, <strong>MyoD aur Myogenin</strong> transcription factors ko upregulate karti hai, <strong>Myostatin (muscle wasting hormone)</strong> ko downregulate karti hai, aur local autocrine <strong>IGF-1</strong> secretion badha kar satellite muscle stem cells ko activate karti hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Aqueous Chemical Synthesis &amp; Creapure&reg; Purity Standards</h3>
    <p>Pharmaceutical-grade creatine monohydrate precision chemical synthesis se banta hai. Synthesis ke hazardous industrial by-products ki jaankari hona quality ke liye critical hai.</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">Cyanamide-Sarcosinate Synthetic Pathway:</p>
        <p class="text-xs text-amber-800 mt-1">Sodium sarcosinate (aqueous $N$-methylglycine sodium salt) ko cyanamide ke saath alkaline medium ($pH = 9.0	ext{ to }11.0$) mein $70	ext{--}80^\\circ	ext{C}$ par react karaya jaata hai:</p>
        <p class="text-xs text-amber-900 font-mono mt-1 text-center font-bold">NH_2-C&equiv;N (Cyanamide) + CH_3-NH-CH_2-COONa + H_2O &rarr; C_4H_9N_3O_2&middot;H_2O (Creatine Monohydrate) + NaOH</p>
        <p class="text-xs text-amber-800 mt-1">Reaction complete hone par solution ko $4^\\circ	ext{C}$ tak cool karke pure creatine crystals precipitate kiye jaate hain, centrifuged, washed with chilled RO water, aur vacuum dry kiye jaate hain.</p>
    </div>

    <p class="mt-3"><strong>Toxic Impurities &amp; Creapure&reg; Safety Specifications:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>Dicyandiamide (DCD):</strong> Improper pH par cyanamide dimerize ho jaata hai. Saste industrial grade creatine mein high DCD hota hai. Strict safety standard: <strong>DCD &lt; 50 ppm</strong> (Creapure standard &lt; 20 ppm).</li>
        <li><strong>Dihydrotriazine (DHT):</strong> Cyanamide jab trace acetone ya aldehydes se react karta hai toh cyclic DHT banta hai jo potent carcinogen (cancer-causing) hai. Pure creatine mein <strong>DHT: Not Detectable (&lt; 3 ppm)</strong> hona compulsory hai.</li>
        <li><strong>Creatinine:</strong> Excessive heat se creatine degrade ho jaata hai. Limit: <strong>&lt; 100 ppm</strong>.</li>
        <li><strong>200 Mesh Air-Jet Micronization:</strong> Standard unmicronized creatine 80 mesh ($180\\;\\mu	ext{m}$) ka hota hai jo glass ke bottom mein baith jaata hai aur stomach mein crystals jamne se cramps karta hai. Supersonic air-jet micronization particle size ko <strong>200 mesh (&le; 74 &mu;m)</strong> tak grind kar deti hai, jisse specific surface area $&gt; 1.2	ext{ m}^2/	ext{g}$ ho jaata hai aur cold water dissolution 4 times faster ho jaati hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Branched-Chain Amino Acids (BCAAs 2:1:1) - Extra-Hepatic Muscle Metabolism</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Extra-Hepatic Clearance:</strong> Dusre 17 amino acids liver mein degrade hote hain, par human liver mein BCAA ko todne wala enzyme <strong>BCATm</strong> absent hota hai. Isliye BCAAs first-pass liver breakdown se bach kar direct skeletal muscle tissue mein pahunchte hain.</li>
        <li><strong>Central Fatigue Hypothesis &amp; LAT1 Transporter:</strong> Heavy training ke dauran muscles energy ke liye BCAAs burn karte hain, jisse blood mein BCAA kam ho jaata hai aur Free Tryptophan badh jaata hai. Dono brain ke <strong>LAT1 (SLC7A5) transporter</strong> ke liye compete karte hain. BCAA drop hote hi Tryptophan brain mein ghus kar <strong>Serotonin (5-HT)</strong> bana deta hai, jisse central nervous system fatigue, lethargy aur weakness aati hai. Workout ke dauran <strong>2:1:1 BCAA</strong> lene se brain mein serotonin spike nahi hota aur mental alertness bani rehti hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. L-Citrulline Malate 2:1 &amp; Nitric Oxide (NO) Vasodilation</h3>
    <div class="p-3 bg-green-50 border border-green-200 rounded-lg mt-3">
        <p class="text-xs text-green-900 font-semibold">Why L-Citrulline Trumps L-Arginine for Nitric Oxide Synthesis:</p>
        <p class="text-xs text-green-800 mt-1">Direct L-Arginine lene par gut aur liver ke <strong>Arginase enzymes</strong> use 70% se zyada pehle hi destroy kar dete hain. Jabki <strong>L-Citrulline arginase enzyme se completely immune rehta hai</strong>. Ye bypass karke kidney aur vascular endothelium mein pahunchta hai, jahan ASS aur ASL enzymes ise high-efficiency L-arginine mein convert kar dete hain.</p>
        <p class="text-xs text-green-800 mt-1">Endothelium mein <strong>eNOS enzyme</strong> L-Arginine se <strong>Nitric Oxide (&bull;NO)</strong> produce karta hai. NO smooth muscles mein <strong>cGMP</strong> create karta hai, jisse arteries dilate hoti hain aur working muscles mein blood flow (The Pump) 200% tak surge kar jaata hai. Saath hi Malic acid Krebs cycle mein enter karke toxic ammonia ($NH_3$) aur lactate clearance ko boost karta hai.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Beta-Alanine &amp; Carnosine Intramuscular Acidosis Buffering</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li>Heavy anaerobic sets (30 to 120 seconds) ke dauran hydrogen ions ($H^+$) release hone se muscle pH <strong>7.1 se gir kar 6.4</strong> ho jaata hai, jisse muscle failure hota hai.</li>
        <li><strong>Carnosine Buffer ($pK_a = 6.83$):</strong> Beta-Alanine intramuscular histidine ke saath combine hokar Carnosine banta hai. Carnosine ka imidazole ring excess $H^+$ ions ko buffer kar leta hai. <strong>Daily 3.2 to 6.4 grams Beta-Alanine 4 to 8 weeks lene se muscle carnosine 60% to 80% badh jaata hai</strong>, jisse reps to failure aur high-intensity endurance 15% to 25% increase ho jaati hai.</li>
    </ul>

    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Creatine Monohydrate (200 Mesh) & Ergogenic Aminos — Manufacturing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Aqueous Synthesis, 200 Mesh Air-Jet Micronization, Blending & Desiccant Packaging Process Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP CREATINE & AMINOS FLOWCHART
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
                    Aqueous Chemical Synthesis & Reaction Control
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">AQUEOUS SYNTHESIS</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Pharmaceutical-grade sodium sarcosinate aur cyanamide ko demineralized water mein exact stoichiometric ratio mein reactor mein feed karte hain. Alkaline conditions (pH 9.0–11.0) aur 70°C–80°C par reaction hoti hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reactants</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Cyanamide + Sodium Sarcosinate</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C – 80°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction pH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 9.0 – 11.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Impurity Check</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DCD & DHT In-Process Monitor</strong></div></div>
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
                    Crystallization, Solid-Liquid Centrifugation & Washing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CRYSTALLIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Synthesized solution ko 4°C tak rapidly cool kiya jaata hai jisse ultra-pure Creatine Monohydrate crystals precipitate ho jaate hain. Sanitary basket centrifuge mein spin karke multiple stages pure chilled RO water se wash karke by-product salts remove karte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Crystallization Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">4.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Centrifuge Speed</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,800 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Wash Water</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0°C – 2°C Demineralized RO</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Purge Quality</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Conductivity < 10 µS/cm</strong></div></div>
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
                    Vacuum Rotary Cone Drying to Monohydrate State
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: HYDRATION MOISTURE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Washed crystals ko vacuum double-cone rotary dryer mein 60°C–65°C par dry kiya jaata hai. Stoichiometric 1-mole bound water (C₄H₉N₃O₂ · H₂O = 12.08% crystal water) precisely lock kiya jaata hai bina free water ya thermal creatinine degradation ke.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C – 65°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.92 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bound Crystal Water</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12.0% – 12.2% (1 Mole H₂O)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Free Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.5%</strong></div></div>
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
                    Supersonic Air-Jet Micronization to 200 Mesh (< 74 µm)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">MICRONIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Dried crystalline creatine ko supersonic fluid energy air-jet mill mein dry nitrogen stream ke saath feed karte hain. Particle-on-particle collisions se particle diameter < 74 µm (200 mesh) ho jaata hai, jisse cold water dissolution rate 400% accelerate ho jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air-Jet Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7.5 – 8.5 bar (Dry N₂)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Particle Size d90</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 74 µm (200 Mesh)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Specific Surface Area</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 1.2 m²/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cold Water Sol</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Instant Dissolution</strong></div></div>
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
                    In-line Sifting & 12,000 Gauss Rare-Earth Magnet Trap
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: METAL TRAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Micronized powder ultrasonic vibratory sifter (150 µm guard screen) aur dual 12,000 Gauss neodymium magnetic grid se pass hota hai to ensure zero foreign metal particles.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ultrasonic Screen</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">150 µm Stainless</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Particle Trap</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Captured</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inspection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Every Batch Start/End</strong></div></div>
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
                    Synergistic Pre-Workout Blending (Citrulline, Beta-Alanine, BCAA)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">PERFORMANCE BLEND</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Cleanroom mixer mein micronized creatine ko L-Citrulline Malate 2:1, CarnoSyn® Beta-Alanine, Vegan Fermented BCAA 2:1:1, L-Tyrosine aur natural active ingredients ke saath precisely blend kiya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Blend Uniformity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">RSD < 2.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Citrulline Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2:1 Stoichiometric</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Beta-Alanine Grade</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">CarnoSyn® Pure</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">BCAA Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2:1:1 Vegan Instantized</strong></div></div>
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
                    Moisture-Proof Induction Sealing with Silica Desiccant
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: MOISTURE PACKAGING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Creatine monohydrate hygroscopic hota hai aur humidity mein clumpy ho jaata hai. Cleanroom mein food-grade silica desiccant pouch insert karke nitrogen-purged HDPE jars ko high-frequency induction heat-sealing se pack kiya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Room RH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 35% Relative Humidity</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Desiccant</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Food-Grade Silica Gel Sachet</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Induction Seal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Air-Tight Bond</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Purity Standard</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Creapure® / USP Grade</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "quality-antidoping": {
                title: "F. Quality Control, WADA Anti-Doping, Amino Spiking Detection & FSSAI Standards",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. The Nitrogen Testing Blindspot &amp; "Amino Spiking" Economic Fraud</h3>
    <p>Sports nutrition market mein sabse notorious aur deceptive economic fraud <strong>"Amino Spiking" (ya Protein Spiking)</strong> hai. Dishonest manufacturers standard total-nitrogen testing methods ki scientific limitations ka advantage lekar fake protein content declare kar dete hain.</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
        <p class="text-xs text-red-900 font-semibold">The Fundamental Flaw of Kjeldahl &amp; Dumas Methods (AOAC 930.29 / 992.15):</p>
        <p class="text-xs text-red-800 mt-1">Regulatory labs protein calculate karne ke liye <strong>Total Organic Nitrogen ($N_{total}$)</strong> ko measure karke Jones conversion factor (<strong>6.25</strong>) se multiply karti hain (ye assume karke ki dairy protein mein exactly 16% nitrogen hota hai: $100 / 16 = 6.25$):</p>
        <p class="text-xs text-red-900 font-mono mt-1 text-center font-bold">Apparent Crude Protein (%) = Total Measured Nitrogen (%) &times; 6.25</p>
        <p class="text-xs text-red-800 mt-1"><strong>The Economics of Adulteration:</strong> Pure CFM WPC-80 raw material mehenga hota hai, jabki saste non-protein nitrogen (NPN) compounds aur free amino acids bohot saste aate hain. Kjeldahl ya Dumas machine ye nahi pehchaan sakti ki nitrogen intact whey se aa raha hai ya saste powders se:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-red-800 mt-1">
            <li><strong>Free L-Glycine ($C_2H_5NO_2$):</strong> Isme <strong>18.66% Nitrogen</strong> hota hai. $18.66 	imes 6.25 =$ <strong>116.6% "Protein"!</strong> Tub mein 10g glycine milane par lab test mein 11.7g real protein show hoga!</li>
            <li><strong>L-Taurine ($C_2H_7NO_2S$):</strong> Isme <strong>11.19% Nitrogen</strong> hota hai (Apparent reading = 70.0% protein).</li>
            <li><strong>Creatine Monohydrate:</strong> Isme <strong>28.18% Nitrogen</strong> hota hai (Apparent reading = <strong>176.1% protein!</strong>). Sirf 5g sasta creatine daalne par test mein 9g fake protein spike ho jaata hai.</li>
            <li><strong>Melamine ($C_3H_6N_6$):</strong> <strong>66.6% Nitrogen!</strong> (Apparent reading = 416% protein). Ye kidneys mein insoluble crystals bana kar acute renal failure karta hai.</li>
        </ul>
    </div>

    <p class="mt-3"><strong>Definitive Forensic Detection: Automated UPLC Amino Acid Fingerprinting (AOAC 994.12):</strong></p>
    <p class="text-xs text-gray-700">Amino spiking ko pakadne ke liye Reverse-Phase UPLC par sample ka acid hydrolysis (6.0 M HCl at 110&deg;C for 24h) karke amino acid fingerprint verify kiya jaata hai. Authentic pure whey ka natural fingerprint fixed hota hai:</p>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Amino Acid Marker</th>
                    <th class="p-2 border">Authentic Native Whey Range</th>
                    <th class="p-2 border">Spiked / Adulterated Sample Indicator</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>L-Glycine</strong></td><td class="p-2 border"><strong>1.4% &ndash; 1.9% of total protein</strong></td><td class="p-2 border">&gt; 3.0% (Definitive evidence of Glycine spiking)</td></tr>
                <tr><td class="p-2 border"><strong>L-Leucine</strong></td><td class="p-2 border"><strong>10.5% &ndash; 12.0% of total protein</strong></td><td class="p-2 border">&lt; 8.5% (Indicates protein dilution)</td></tr>
                <tr><td class="p-2 border"><strong>Total BCAAs (Leu, Ile, Val)</strong></td><td class="p-2 border"><strong>21.0% &ndash; 24.5% of total protein</strong></td><td class="p-2 border">&lt; 18.0% (Indicates non-BCAA fillers)</td></tr>
                <tr><td class="p-2 border"><strong>L-Taurine</strong></td><td class="p-2 border"><strong>Undetectable / Trace (&lt; 0.05%)</strong></td><td class="p-2 border">&gt; 0.5% (Proof of Taurine spiking)</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. WADA Prohibited List Anti-Doping Screen: Orbitrap High-Resolution LC-MS/MS</h3>
    <p>Competitive athletes ko doping bans se protect karne ke liye third-party certifications (Informed-Choice, NSF Certified for Sport) dwara <strong>High-Resolution Accurate Mass Spectrometry (Orbitrap LC-MS/MS)</strong> testing mandatory hoti hai.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">The Orbitrap Analytical Standard (Resolving Power &gt; 70,000 FWHM):</p>
        <p class="text-xs text-indigo-800 mt-1">Ye instrument parts-per-billion (ppb / &mu;g/kg) sensitivity par <strong>280+ WADA Prohibited List compounds</strong> screen karta hai:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li><strong>Anabolic Androgenic Steroids (AAS):</strong> Nandrolone, Stanozolol, Dianabol, Boldenone ($LOD &lt; 5	ext{ ppb}$).</li>
            <li><strong>SARMs:</strong> Ostarine (MK-2866), Ligandrol (LGD-4033), RAD-140 ($LOD &lt; 1	ext{ ppb}$).</li>
            <li><strong>Beta-2 Agonists:</strong> Clenbuterol ($LOD &lt; 0.1	ext{ ppb}$), Salbutamol.</li>
            <li><strong>Stimulants:</strong> DMAA, DMBA, Ephedrine, Sibutramine ($LOD &lt; 10	ext{ ppb}$).</li>
        </ul>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Toxicological Heavy Metal Limits (ICP-MS - FSSAI 2022 &amp; Prop 65)</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Heavy Metal Element</th>
                    <th class="p-2 border">Toxicological Risk</th>
                    <th class="p-2 border">FSSAI 2022 Regulatory Limit</th>
                    <th class="p-2 border">California Prop 65 MADL</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>Lead (Pb)</strong></td><td class="p-2 border">Neurotoxicant; causes cognitive decline and hypertension.</td><td class="p-2 border">&le; 2.5 mg/kg (ppm)</td><td class="p-2 border"><strong>&le; 0.5 &mu;g/day</strong></td></tr>
                <tr><td class="p-2 border"><strong>Cadmium (Cd)</strong></td><td class="p-2 border">Severe nephrotoxin; bioaccumulates in renal cortex. Common in chocolate cocoa.</td><td class="p-2 border">&le; 1.5 mg/kg (ppm)</td><td class="p-2 border"><strong>&le; 4.1 &mu;g/day</strong></td></tr>
                <tr><td class="p-2 border"><strong>Arsenic (As)</strong></td><td class="p-2 border">Carcinogen; disrupts cellular ATP production. Common in rice protein.</td><td class="p-2 border">&le; 1.1 mg/kg (ppm)</td><td class="p-2 border"><strong>&le; 10.0 &mu;g/day</strong></td></tr>
                <tr><td class="p-2 border"><strong>Mercury (Hg)</strong></td><td class="p-2 border">Central nervous system toxicant.</td><td class="p-2 border">&le; 0.25 mg/kg (ppm)</td><td class="p-2 border"><strong>&le; 0.3 &mu;g/day</strong></td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Physical Powder Dissolution Rheology &amp; Microbiological Validation</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Physical Flow &amp; Reconstitution Kinetics:</strong>
            <br>&bull; <em>Wettability (IDF 87):</em> 20&deg;C paani mein 10g powder submerge hone ka time: <strong>&lt; 30 seconds</strong> (0.6% sunflower lecithin instantization dwara achieved).
            <br>&bull; <em>Dispersibility (IDF 129A):</em> 20 seconds moderate shaking ke baad <strong>&gt; 96.0%</strong> complete dissolution.
            <br>&bull; <em>Hausner Ratio:</em> $
ho_{tapped} / 
ho_{bulk}$ <strong>1.12 se 1.18</strong> ke beech hona chahiye, jo automated tub filling lines par powder ka free-flow ensure karta hai.
        </li>
        <li><strong>Microbiological Pathogen Testing (Real-Time PCR / ISO 6579):</strong>
            <br>&bull; <em>Salmonella spp.:</em> <strong>Absent in 375g (Composite PCR)</strong>.
            <br>&bull; <em>Listeria monocytogenes:</em> <strong>Absent in 25g</strong>.
            <br>&bull; <em>Escherichia coli:</em> <strong>&lt; 10 CFU/g</strong>.
            <br>&bull; <em>Total Plate Count (TPC):</em> <strong>&lt; 10,000 CFU/g</strong>.
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
                        Quality Control, WADA Anti-Doping Screen & Heavy Metal Verification Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Complete 6-Step Analytical Testing Protocol: UPLC Amino Fingerprint, Orbitrap LC-MS/MS, ICP-MS & Batch Release</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-STEP QC & ANTI-DOPING FLOWCHART
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
                    Statistical Raw Material & Finished Product Composite Sampling
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: COMPOSITE SAMPLING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO 2859-1 / Military Standard 105E compliance: Multi-point core vacuum thief sampling se homogeneous composite laboratory samples prepare kiye jaate hain cleanroom laminar air flow booth (Class 100) ke andar.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sampling Standard</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO 2859-1 Normal Single</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inspection Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Level II General (AQL 0.65)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sampling Booth</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 5 Laminar Flow</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sample Prep</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Composite 500g Core</strong></div></div>
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
                    True Protein Nitrogen (Dumas) & PTA Non-Protein Nitrogen Screen
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: NITROGEN INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Total nitrogen combustion analysis (Dumas AOAC 992.15, N x 6.25). Phosphotungstic Acid (PTA) se intact proteins precipitate karke Non-Protein Nitrogen (NPN) quantify karte hain. NPN > 5.0% par sample turant amino spiking suspect mark ho jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">True Protein Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Matches Label Claim ± 2%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">NPN (PTA Method)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.5% of Total N</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Combustion Gas</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Pure O₂ at 1,050°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Jones Factor</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">6.25 (Dairy Specific)</strong></div></div>
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
                    Automated UPLC Amino Acid Fingerprinting (AOAC 994.12)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: AMINO SPIKING DETECT</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Sample ko 6.0 M HCl mein 110°C par 24 hours acid hydrolysis karke AccQ-Tag derivatization ke baad Reverse-Phase UPLC par run karte hain. Authentic natural whey fingerprint verify hota hai: Leucine >= 10.5%, Glycine <= 1.8%, Total BCAA >= 21%. Glycine > 3.0% spikes proof rejection.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">UPLC Instrument</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Waters Acquity H-Class UPLC</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Column</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">AccQ-Tag Ultra C18 1.7 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Glycine Tolerance</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.4% – 1.9% (Spike if >3%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Leucine Fingerprint</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10.5% – 11.5% of Protein</strong></div></div>
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
                    Orbitrap High-Resolution LC-MS/MS WADA Prohibited Substances Screen
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: ANTI-DOPING SCREEN</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-Resolution Accurate Mass Spectrometry (HRMS Orbitrap LC-MS/MS & GC-MS/MS, Resolution > 70,000 FWHM) se 280+ WADA Prohibited List compounds screen kiye jaate hain at parts-per-billion sensitivity: Anabolic Steroids (< 5 ppb), SARMs (< 1 ppb), Beta-2 Agonists (< 0.1 ppb), Stimulants (< 10 ppb).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Orbitrap Mass Acc</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2 ppm Mass Error</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Resolving Power</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 70,000 FWHM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Anabolic Steroids LOD</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 5.0 ppb (µg/kg)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SARMs LOD</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0 ppb (µg/kg)</strong></div></div>
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
                    ICP-MS Toxic Heavy Metals Trace Quantification
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: HEAVY METALS LIMIT</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Microwave acid digestion (HNO₃ + H₂O₂) followed by Inductively Coupled Plasma Mass Spectrometry (ICP-MS) multi-element analysis: Lead (Pb) <= 2.5 ppm, Cadmium (Cd) <= 1.5 ppm, Arsenic (As) <= 1.1 ppm, Mercury (Hg) <= 0.25 ppm (FSSAI 2022 & California Prop 65 compliance).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lead (Pb) Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 2.5 ppm (Prop 65 <0.5 µg/day)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cadmium (Cd) Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 1.5 ppm (Prop 65 <4.1 µg/day)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Arsenic (As) Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 1.1 ppm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mercury (Hg) Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.25 ppm</strong></div></div>
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
                    Real-Time PCR Microbiological Testing & CoA Quarantine Release
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-4: PATHOGEN ZERO-TOLERANCE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Automated Real-Time PCR (ISO 6579 / ISO 11290): Salmonella spp. Negative in 375g composite, Listeria monocytogenes Negative in 25g, E. coli < 10 CFU/g, TPC < 10,000 CFU/g, Yeast & Mold < 100 CFU/g. Physical dissolution: Wettability < 30s. Final QA Certificate of Analysis (CoA) release.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Salmonella spp.</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Absent in 375g (Composite PCR)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Listeria mono</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Absent in 25g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">E. coli</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 CFU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">CoA Authorization</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Signed Batch Release</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            }
        }
    }
};
