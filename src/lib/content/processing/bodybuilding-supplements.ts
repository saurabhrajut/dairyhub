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
        title: "बॉडीबिल्डिंग एवं स्पोर्ट्स सप्लीमेंट्स निर्माण (Bodybuilding Supplements)",
        subTopics: {
            "whey-protein": {
                title: "A. व्हे प्रोटीन कॉन्संट्रेट (WPC-80) एवं आइसोलेट (WPI-90) - CFM एवं mTORC1",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. कच्चे व्हे का जैव-रसायन (Whey Chemistry) एवं मुख्य प्रोटीन घटक</h3>
    <p>औद्योगिक डेयरी प्रौद्योगिकी और स्पोर्ट्स न्यूट्रिशन में व्हे (Whey / मट्ठा प्रोटीन) को सर्वोच्च जैविक मूल्य वाला प्रोटीन माना जाता है। इसका <strong>बायोलॉजिकल वैल्यू (BV = 104)</strong>, <strong>प्रोटीन एफिशिएंसी रेशियो (PER = 3.2)</strong>, और <strong>PDCAAS (1.0)</strong> मानव पोषण विज्ञान में उपलब्ध सभी खाद्य स्रोतों में सर्वश्रेष्ठ है।</p>

    <p class="mt-2"><strong>मीठा पनीर व्हे (Sweet Whey) बनाम एसिड कैसिइन व्हे (Acid Whey):</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>स्वीट चीज़ व्हे (गोल्ड स्टैंडर्ड कच्चा माल):</strong> यह पाश्चुरीकृत दूध से रेनेट एंजाइम (काइमोसिन) द्वारा चीज़ (चेडर, मोज़ेरेला) निर्माण के दौरान pH 6.2 से 6.5 पर प्राप्त होता है। इसमें सभी ग्लोब्युलर प्रोटीन्स अपनी प्राकृतिक त्रि-आयामी संरचना (Native Quaternary Structure) में सुरक्षित रहते हैं और खनिज लवणों का संतुलन बना रहता है। यह मेम्ब्रेन फिल्ट्रेशन के लिए सर्वोत्तम है।</li>
        <li><strong>एसिड कैसिइन व्हे:</strong> यह खनिज अम्लों (HCl/लैक्टिक एसिड) द्वारा pH 4.6 पर कैसिइन प्रेसिपिटेशन या ग्रीक योगर्ट से निकलता है। इसमें मुक्त कैल्शियम फॉस्फेट और लैक्टिक एसिड अत्यधिक होने से मेम्ब्रेन फाउलिंग (चोकिंग) होती है और इसका स्वाद अत्यधिक खट्टा व कसैला होता है, जो स्पोर्ट्स व्हे के लिए अनुपयुक्त है।</li>
    </ul>

    <p class="mt-3"><strong>कच्चे व्हे के प्रमुख प्रोटीन घटकों का आणविक विवरण:</strong></p>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">प्रोटीन घटक</th>
                    <th class="p-2 border">कुल व्हे का %</th>
                    <th class="p-2 border">आणविक भार (kDa)</th>
                    <th class="p-2 border">जैव-रासायनिक एवं स्पोर्ट्स रिकवरी गुण</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&beta;-लैक्टोग्लोब्युलिन (&beta;-Lg)</strong></td>
                    <td class="p-2 border">50% &ndash; 55%</td>
                    <td class="p-2 border">18.4 kDa (डाइमर)</td>
                    <td class="p-2 border">ब्रांच्ड-चेन अमीनो एसिड्स (BCAA, विशेषकर ल्यूसीन 14.5%) का प्राथमिक वाहक। इसमें 2 आंतरिक डाइसल्फाइड बॉन्ड और 1 मुक्त थियोल (-SH एट Cys121) ग्रुप होता है। यह अपनी आंतरिक हाइड्रोफोबिक कैलिक्स में वसा-घुलनशील विटामिनों को बांधता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-लैक्टलेंसिन (&alpha;-La)</strong></td>
                    <td class="p-2 border">20% &ndash; 25%</td>
                    <td class="p-2 border">14.2 kDa (मोनोमर)</td>
                    <td class="p-2 border">कैल्शियम-युक्त मेटालो-प्रोटीन जिसमें 4 इंट्रा-मॉलिक्यूलर डाइसल्फाइड बॉन्ड होते हैं। यह <strong>L-ट्रिप्टोफैन (5.8%)</strong> और <strong>L-सिस्टीन</strong> का सबसे समृद्ध प्राकृतिक स्रोत है। ट्रिप्टोफैन न्यूरोलॉजिकल रिकवरी हेतु सेरोटोनिन बनाता है और सिस्टीन मास्टर एंटीऑक्सीडेंट <strong>ग्लूटाथियोन (GSH)</strong> का संश्लेषण करता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>इम्यूनोग्लोब्युलिन्स (IgG1, IgG2, IgA, IgM)</strong></td>
                    <td class="p-2 border">10% &ndash; 12%</td>
                    <td class="p-2 border">150 &ndash; 900 kDa</td>
                    <td class="p-2 border">उच्च आणविक भार वाले प्राकृतिक एंटीबॉडीज। यह आंत की म्यूकोसल बैरियर की अखंडता बनाए रखते हैं और हानिकारक रोगजनकों को बेअसर करते हैं, जिससे एथलीटों में भारी वर्कआउट के बाद होने वाले 'लीकी गट सिंड्रोम' का पूर्ण बचाव होता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>ग्लाइकोमैक्रोपेप्टाइड (GMP)</strong></td>
                    <td class="p-2 border">15% &ndash; 20%</td>
                    <td class="p-2 border">6.8 &ndash; 30 kDa</td>
                    <td class="p-2 border">रेनेट द्वारा &kappa;-कैसिइन के Phe105-Met106 बॉन्ड टूटने से मुक्त होता है। इसमें एरोमैटिक अमीनो एसिड्स नहीं होते। यह आंत के I-सेल्स से <strong>कोलीसिस्टोकाइनिन (CCK)</strong> हार्मोन रिलीज कराकर वर्कआउट के बाद भूख और क्रेविंग को नियंत्रित करता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>बोवाइन सीरम एल्ब्यूमिन (BSA)</strong></td>
                    <td class="p-2 border">4% &ndash; 5%</td>
                    <td class="p-2 border">66.5 kDa</td>
                    <td class="p-2 border">17 डाइसल्फाइड बॉन्ड वाला बड़ा ग्लोब्युलर प्रोटीन। यह रक्त परिसंचरण में लिपिड्स, स्टेरॉयड और आवश्यक फैटी एसिड्स के परिवहन में सहायता करता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>लैक्टोफेरिन एवं लैक्टोपेरोक्सीडेज</strong></td>
                    <td class="p-2 border">1% &ndash; 2%</td>
                    <td class="p-2 border">78.0 kDa</td>
                    <td class="p-2 border">आयरन-बाइंडिंग ट्रांसफेरिन ग्लाइकोप्रोटीन। यह रोगजनकों से मुक्त फेरिक आयन ($Fe^{3+}$) को छीनकर शक्तिशाली जीवाणुरोधी और एंटीवायरल सुरक्षा प्रदान करता है और आंतों के स्वास्थ्य को मजबूत बनाता है।</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. मेम्ब्रेन साइंस: कोल्ड क्रॉस-फ्लो माइक्रोफिल्ट्रेशन (CFM) बनाम केमिकल आयन एक्सचेंज (IE)</h3>
    <p>निर्माण तकनीक यह तय करती है कि अंतिम प्रोटीन पाउडर में जैविक रूप से सक्रिय इम्यूनोग्लोब्युलिन जीवित हैं या रासायनिक एसिड-क्षार से विकृत (Denatured) होकर मृत हो चुके हैं।</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">क्रॉस-फ्लो माइक्रोफिल्ट्रेशन (CFM) का थर्मोडायनामिक सिद्धांत:</p>
        <p class="text-xs text-indigo-800 mt-1">CFM प्रणाली में मल्टी-चैनल ट्यूबलर सिरेमिक मेम्ब्रेन (&alpha;-Al₂O₃ / ZrO₂) का उपयोग किया जाता है जिसका कैलिब्रेटेड पोर साइज़ <strong>0.1 से 0.2 &mu;m</strong> होता है। यह प्रक्रिया पूरी तरह ठंडे तापमान (<strong>8&deg;C से 10&deg;C</strong>) और कम ट्रांसमेम्ब्रेन प्रेशर (TMP = 0.5 से 1.2 bar) पर संचालित होती है। क्रॉस-फ्लो लिक्विड वेलोसिटी ($CFV = 5	ext{--}7	ext{ m/s}$) सतह पर उच्च शियर स्ट्रेस ($	au_w$) उत्पन्न करती है, जिससे मेम्ब्रेन सतह पर कभी फाउलिंग केक नहीं जमता।</p>
        <p class="text-xs text-indigo-800 mt-1"><strong>डार्सी का फ्लक्स समीकरण (Darcy's Law):</strong> $J = \\Delta P / [\\mu \\cdot (R_m + R_{cp} + R_f)]$। कम तापमान पर श्यानता ($\\mu$) स्थिर रखकर प्रोटीन विकृतीकरण (&lt; 2% Denaturation) को रोका जाता है और 100% बायोएक्टिव पेप्टाइड्स अपनी प्राकृतिक अवस्था में सुरक्षित रहते हैं।</p>
    </div>

    <p class="mt-3"><strong>केमिकल आयन एक्सचेंज (IE) एथलीटों के लिए घटिया क्यों है?</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>एसिड-क्षार का रासायनिक झटका:</strong> आयन एक्सचेंज में व्हे को हाइड्रोक्लोरिक एसिड डालकर pH 3.2 तक एसिडिफाई किया जाता है ताकि प्रोटीन्स पर पॉजिटिव चार्ज आ जाए, फिर सिलिका रेजिन पर चिपकाया जाता है। इसके बाद pH 9.0 पर कास्टिक सोडा (NaOH) से धोकर अलग किया जाता है।</li>
        <li><strong>बायोएक्टिविटी का विनाश:</strong> इस चरम pH झटके के कारण नाजुक इम्यूनोग्लोब्युलिन (IgG 10% से घटकर &lt; 1% रह जाता है) और लैक्टोफेरिन पूरी तरह नष्ट हो जाते हैं। इसके अलावा, GMP रेजिन पर नहीं चिपकता और सीवेज में बह जाता है। यद्यपि IE में 93% प्रोटीन मिलता है, लेकिन वह जैविक रूप से निष्प्रभावी और मृत प्रोटीन होता है। CFM नेटिव व्हे इसकी तुलना में कहीं अधिक श्रेष्ठ है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. एक्सरसाइज फिजियोलॉजी एवं मॉलिक्यूलर बायोलॉजी: mTORC1 ल्यूसीन ट्रिगर</h3>
    <p>वर्कआउट के तुरंत बाद व्हे प्रोटीन पीने पर मांसपेशियों की कोशिकाओं के अंदर प्रोटीन संश्लेषण (MPS) की आणविक मशीनरी किस प्रकार सक्रिय होती है, इसे समझें:</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">Sestrin2-Rag GTPase-mTORC1 पाथवे:</p>
        <p class="text-xs text-amber-800 mt-1">रक्त से L-ल्यूसीन मायोसाइट्स (मांसपेशी कोशिकाओं) में LAT1 ट्रांसपोर्टर द्वारा प्रवेश करता है। कोशिका द्रव्य में ल्यूसीन सीधे सेंसर प्रोटीन <strong>Sestrin2</strong> से जुड़ता है। सामान्य अवस्था में Sestrin2 GATOR2 को दबाकर रखता है। जैसे ही ल्यूसीन जुड़ता है, Sestrin2 अलग हो जाता है, जिससे GATOR2 मुक्त होकर GATOR1 को निष्क्रिय कर देता है। इसके परिणामस्वरूप <strong>RagA/B-GTP</strong> और <strong>RagC/D-GDP</strong> का सक्रिय हेटेरोडाइमर बन जाता है।</p>
        <p class="text-xs text-amber-800 mt-1">सक्रिय Rag कॉम्प्लेक्स <strong>raptor</strong> से जुड़कर पूरे <strong>mTORC1 कॉम्प्लेक्स</strong> को साइटोप्लाज्म से उठाकर लाइसोसोम की झिल्ली पर पहुंचा देता है। वहां लाइसोसोम पर स्थित छोटा GTPase <strong>Rheb</strong> mTORC1 की किनेज गतिविधि को स्विच ऑन कर देता है, जिससे प्रोटीन ट्रांसलेशन शुरू हो जाता है।</p>
    </div>

    <p class="mt-3"><strong>राइबोसोमल फॉस्फोराइलेशन एवं प्रोटीन निर्माण:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>p70S6K1 सक्रियण:</strong> सक्रिय mTORC1 सीधे <strong>p70S6K1</strong> किनेज को Thr389 स्थान पर फॉस्फोराइलेट करता है। सक्रिय p70S6K1 राइबोसोमल प्रोटीन S6 को सक्रिय कर राइबोसोम की निर्माण गति को 5 गुना तेज कर देता है।</li>
        <li><strong>4E-BP1 हाइपर-फॉस्फोराइलेशन:</strong> mTORC1 <strong>4E-BP1</strong> को Thr37/46 पर फॉस्फोराइलेट करता है। इससे 4E-BP1 इनिशिएशन फैक्टर <strong>eIF4E</strong> को छोड़ देता है। मुक्त eIF4E तुरंत eIF4G और eIF4A के साथ मिलकर <strong>eIF4F प्री-इनिशिएशन कॉम्प्लेक्स</strong> बनाता है, जो एक्टिन और मायोसिन प्रोटीन फिलामेंट्स का वास्तविक निर्माण शुरू करता है।</li>
    </ol>

    <p class="mt-3"><strong>ल्यूसीन थ्रेशोल्ड (3.0g) एवं "मसल फुल" रिफ्रैक्टरी पीरियड:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>3.0 ग्राम ल्यूसीन ट्रिगर:</strong> क्लिनिकल ट्रायल्स (Atherton et al., Phillips et al.) के अनुसार मांसपेशी प्रोटीन संश्लेषण (FSR) धीरे-धीरे नहीं बढ़ता, यह ऑन-ऑफ स्विच की तरह काम करता है। वयस्क मानव में mTORC1 स्विच को ऑन करने के लिए एक बार में रक्त में कम से कम <strong>2.7 से 3.5 ग्राम शुद्ध ल्यूसीन</strong> का पीक पहुंचना अनिवार्य है। WPC-80 में 10.5% से 11.5% ल्यूसीन होता है, यानी एक 30 ग्राम स्कूप से 3.2 ग्राम ल्यूसीन मिलता है जो इस स्विच को पूर्ण रूप से सक्रिय कर देता है।</li>
        <li><strong>"मसल फुल" रिफ्रैक्टरी प्रभाव:</strong> एक बार mTORC1 सक्रिय होने के बाद, प्रोटीन संश्लेषण 90 से 120 मिनट तक चरम पर रहता है और फिर स्वतः बेसलाइन पर लौट आता है, भले ही रक्त में अमीनो एसिड्स मौजूद हों। मांसपेशी को दोबारा उत्तेजित करने के लिए <strong>3.5 से 4.5 घंटे</strong> का रिफ्रैक्टरी रीसेट आवश्यक है। अतः हर घंटे प्रोटीन पीना व्यर्थ है; प्रत्येक 3.5 से 4 घंटे के अंतराल पर 25-30 ग्राम उच्च-ल्यूसीन प्रोटीन लेना ही विज्ञान सम्मत है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. औद्योगिक प्रोटीन ग्रेड्स की तुलनात्मक तालिका</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">पैरामीटर</th>
                    <th class="p-2 border">WPC-35</th>
                    <th class="p-2 border">WPC-80 (गोल्ड स्टैंडर्ड)</th>
                    <th class="p-2 border">WPI-90 (आइसोलेट CFM)</th>
                    <th class="p-2 border">नेटिव व्हे (दूध से सीधा)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>प्रोटीन (शुष्क आधार पर)</strong></td><td class="p-2 border">34.0% &ndash; 36.0%</td><td class="p-2 border"><strong>80.0% &ndash; 82.5%</strong></td><td class="p-2 border"><strong>90.0% &ndash; 93.0%</strong></td><td class="p-2 border"><strong>93.0% &ndash; 95.0%</strong></td></tr>
                <tr><td class="p-2 border"><strong>लैक्टोज (दुग्ध शर्करा)</strong></td><td class="p-2 border">50.0% &ndash; 52.0%</td><td class="p-2 border">4.0% &ndash; 6.0%</td><td class="p-2 border"><strong>&lt; 1.0% (लैक्टोज-मुक्त)</strong></td><td class="p-2 border"><strong>&lt; 0.4%</strong></td></tr>
                <tr><td class="p-2 border"><strong>वसा (लिपिड्स)</strong></td><td class="p-2 border">3.5% &ndash; 4.5%</td><td class="p-2 border">5.5% &ndash; 7.5%</td><td class="p-2 border"><strong>&lt; 1.0%</strong></td><td class="p-2 border"><strong>&lt; 0.3%</strong></td></tr>
                <tr><td class="p-2 border"><strong>प्रति 100g ल्यूसीन</strong></td><td class="p-2 border">3.8 g</td><td class="p-2 border"><strong>9.2 &ndash; 9.8 g</strong></td><td class="p-2 border"><strong>11.2 &ndash; 11.8 g</strong></td><td class="p-2 border"><strong>12.8 &ndash; 13.5 g</strong></td></tr>
                <tr><td class="p-2 border"><strong>खनिज राख (Ash)</strong></td><td class="p-2 border">7.5% &ndash; 8.5%</td><td class="p-2 border">3.0% &ndash; 4.0%</td><td class="p-2 border">2.0% &ndash; 2.8%</td><td class="p-2 border">1.5% &ndash; 2.0%</td></tr>
                <tr><td class="p-2 border"><strong>GMP अंश</strong></td><td class="p-2 border">18% &ndash; 20%</td><td class="p-2 border">15% &ndash; 18%</td><td class="p-2 border">15% &ndash; 18% (CFM) / 0% (IE)</td><td class="p-2 border"><strong>0% (रेनेट मुक्त)</strong></td></tr>
                <tr><td class="p-2 border"><strong>बायोलॉजिकल वैल्यू (BV)</strong></td><td class="p-2 border">95</td><td class="p-2 border"><strong>104</strong></td><td class="p-2 border"><strong>104</strong></td><td class="p-2 border"><strong>110</strong></td></tr>
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
                        व्हे प्रोटीन कॉन्संट्रेट (WPC-80) एवं आइसोलेट (WPI-90) — निर्माण फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">8-चरणीय CFM कोल्ड माइक्रोफिल्ट्रेशन, डायफिल्ट्रेशन एवं इंस्टेंटाइजेशन सतत प्रक्रिया फ्लोचार्ट</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-चरणीय व्हे CFM फ्लोचार्ट
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
                    स्वीट पनीर व्हे क्लेरिफिकेशन एवं फैट सेपरेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: कच्चा व्हे परीक्षण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">चेडर/मोज़ेरेला पनीर से प्राप्त ताजा व्हे (pH 6.2–6.5)। अपकेंद्री क्लेरिफायर द्वारा पनीर के बारीक कण अलग करना (< 50 mg/L)। 45°C पर हर्मेटिक सेपरेटर द्वारा फैट को 0.05% से कम करना ताकि मेम्ब्रेन चोक न हो।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">व्हे तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">45°C – 50°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पनीर कण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 mg/L</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट फैट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.05%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एसिडिटी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.12% LA</strong></div></div>
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
                    पाश्चुरीकरण एवं कोल्ड क्रॉस-फ्लो माइक्रोफिल्ट्रेशन (CFM)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CFM स्टेज</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">72°C पर 15s पाश्चुरीकरण। 10°C से नीचे ठंडा करना। सिरेमिक मेम्ब्रेन (0.1–0.2 µm) द्वारा कोल्ड CFM करके फैट-प्रोटीन अवशेषों व बैक्टीरिया को बिना गर्मी दिए अलग करना, जिससे प्रोटीन 100% प्राकृतिक रूप में सुरक्षित रहे।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">CFM छिद्र आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.1 – 0.2 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ऑपरेटिंग तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8°C – 10°C (ठंडा)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ट्रांसमेम्ब्रेन दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.8 – 1.2 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्राकृतिक प्रोटीन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 98% सुरक्षित</strong></div></div>
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
                    मल्टी-स्टेज अल्ट्राफिल्ट्रेशन (UF) सांद्रण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">UF प्रोटीन सांद्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">माइक्रोफिल्टर्ड व्हे PES स्पाइरल मेम्ब्रेन (MWCO 10–20 kDa) में जाता है। प्रोटीन 0.8% से बढ़कर 18–20% सांद्र हो जाता है, जबकि लैक्टोज, लवण और पानी मेम्ब्रेन से बाहर निकल जाते हैं (VRF अनुपात 20–25x)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मेम्ब्रेन MWCO</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 – 20 kDa</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इनलेट दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3.5 – 5.0 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">रिटेंटेट प्रोटीन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18% – 20%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">VRF अनुपात</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 – 25x</strong></div></div>
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
                    डायफिल्ट्रेशन (DF) द्वारा WPC-80 एवं WPI-90 शुद्धिकरण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: शुद्धता नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">अल्ट्राफिल्ट्रेशन के दौरान शुद्ध RO पानी मिलाकर बचा हुआ लैक्टोज व मिनरल्स धोकर बाहर निकालना। 2 बार DF से WPC-80 (80% प्रोटीन) और 4–5 बार DF से WPI-90 (> 90% शुद्ध प्रोटीन, < 1% लैक्टोज) बनता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WPC-80 लक्ष्य</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 80.0% प्रोटीन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">WPI-90 लक्ष्य</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 90.0% प्रोटीन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लैक्टोज (WPI)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (लैक्टोज-मुक्त)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फैट (WPI)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.8%</strong></div></div>
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
                    लो-टेम्परेचर इनडायरेक्ट स्प्रे ड्राइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: थर्मल सुरक्षा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वैक्यूम इवैपोरेटर में 35% TS तक सांद्रण। टॉल-फॉर्म स्प्रे ड्रायर (इनलेट 175°C, एग्जॉस्ट 75°C) में 20 सेकंड में सुखाना ताकि ल्यूसीन और BCAA अमीनो एसिड की जैविक सक्रियता 100% बरकरार रहे।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ड्रायर इनलेट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">175°C – 180°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एग्जॉस्ट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">75°C – 78°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाउडर नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3.5% – 4.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घुलनशीलता इंडेक्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 mL</strong></div></div>
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
                    फ्लुइड बेड लेसिथिन इंस्टेंटाइजेशन एवं एग्लोमरेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">त्वरित घुलनशीलता</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वाइब्रेटिंग फ्लुइड बेड में 0.6–0.8% सनफ्लावर लेसिथिन पाउडर कणों पर स्प्रे करना। पानी का संपर्क कोण 90° से घटकर < 15° रह जाता है, जिससे शेकर में ठंडा पानी डालते ही पाउडर मात्र 15 सेकंड में पूरी तरह घुल जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लेसिथिन स्रोत</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">नॉन-GMO सनफ्लावर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डोजिंग स्तर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.6% – 0.8% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घुलनशीलता गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15 सेकंड में ठंडा पानी</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बल्क घनत्व</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.38 – 0.44 g/mL</strong></div></div>
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
                    इन-लाइन सिफ्टिंग, 12,000 गॉस मैग्नेट एवं मेटल डिटेक्शन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: मेटल ट्रैप</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">दानेदार पाउडर को 1.0 mm चलनी, 12,000 गॉस मैग्नेटिक ट्रैप और ट्रिपल-फ्रीक्वेंसी मेटल डिटेक्टर से गुजारना (≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, ≥ 1.2 mm SS 316 का स्वचालित रिजेक्शन)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">छलनी जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm स्टेनलेस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मैग्नेट पावर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 गॉस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन संवेदनशीलता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 संवेदनशीलता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div></div>
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
                    क्लीनरूम फ्लेवर ब्लेंडिंग एवं सीलिंग पैकेजिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: पैकेजिंग सुरक्षा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 8 क्लीनरूम में: पाउडर में कोकोआ, स्टीविया/सुक्रालोज और डायजेस्टिव एंजाइम (DigeZyme 50 mg/सर्विंग) मिलाना। इंडक्शन-सील्ड जार या नाइट्रोजन-फ्लश पाउच (O₂ < 2.0%) में पैक करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लीनरूम क्लास</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 8 / Class D</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाचन एंजाइम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DigeZyme 50 mg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इंडक्शन सील</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% हर्मेटिक</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">हेडस्पेस O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "hydrolyzed-whey": {
                title: "B. हाइड्रोलाइज्ड व्हे (WPH) एवं बायोएक्टिव पेप्टाइड्स - PEPT1 अवशोषण",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. एंजाइमैटिक हाइड्रोलिसिस बायोरिएक्टर कैनेटीक्स एवं डिग्री ऑफ हाइड्रोलिसिस (DH)</h3>
    <p>हाइड्रोलाइज्ड व्हे प्रोटीन (WPH) प्रोटीन अवशोषण की चरम इंजीनियरिंग का प्रतीक है। इसमें शुद्ध व्हे प्रोटीन आइसोलेट (WPI) या कॉन्संट्रेट (WPC) को स्वचालित बायोरिएक्टरों में नियंत्रित एंजाइमों द्वारा पूर्व-पाचित (Pre-digested) कराकर लंबी पॉलीपेप्टाइड श्रृंखलाओं को सूक्ष्म बायोएक्टिव ऑलिगोपेप्टाइड्स (डाइपेप्टाइड्स और ट्राइपेप्टाइड्स) में तोड़ा जाता है।</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">डिग्री ऑफ हाइड्रोलिसिस (DH) का एडलर-निसेन समीकरण:</p>
        <p class="text-xs text-blue-800 mt-1">औद्योगिक जैव-रसायन में डिग्री ऑफ हाइड्रोलिसिस ($DH$) टूटे हुए पेप्टाइड बंधों का कुल पेप्टाइड बंधों ($h_{tot}$) के सापेक्ष प्रतिशत होता है:</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">DH = [ (B &times; N_b) / (&alpha; &times; M_p &times; h_tot) ] &times; 100%</p>
        <p class="text-xs text-blue-800 mt-1">जहां:
            <br>&bull; <strong>B:</strong> pH को स्थिर (pH 7.5&ndash;8.0) बनाए रखने हेतु खर्च हुए टाइट्रेंट क्षार (4.0 M NaOH) की मात्रा (लीटर में)।
            <br>&bull; <strong>N_b:</strong> क्षार टाइट्रेंट की नॉर्मेलिटी (eq/L)।
            <br>&bull; <strong>M_p:</strong> बायोरिएक्टर में प्रोटीन सब्सट्रेट का कुल द्रव्यमान ($N &times; 6.25$, ग्राम में)।
            <br>&bull; <strong>h_tot:</strong> व्हे प्रोटीन में कुल पेप्टाइड बंधों की संख्या ($8.8	ext{ meq/g}$)।
            <br>&bull; <strong>&alpha;:</strong> ऑपरेटिंग pH और तापमान पर &alpha;-अमीनो समूहों के वियोजन की दर: $lpha = 1 / [1 + 10^{(pK - pH)}]$।
        </p>
    </div>

    <p class="mt-3"><strong>स्पोर्ट्स न्यूट्रिशन में वाणिज्यिक DH स्तर:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>कम DH (3% &ndash; 5%):</strong> हल्का एंजाइमैटिक उपचार। यह प्रोटीन के प्राकृतिक स्वाद को बिना बिगाड़े रेडी-टू-ड्रिंक (RTD) बेवरेजेस में थर्मल स्टेबिलिटी (गर्मी सहने की क्षमता) और शिशुओं के फॉर्मूला में हाइपोएलर्जेनिक गुण प्रदान करता है।</li>
        <li><strong>मध्यम DH (10% &ndash; 15% - एथलीटों का गोल्ड स्टैंडर्ड):</strong> इसमें 65% से अधिक पेप्टाइड्स डाइपेप्टाइड्स एवं ट्राइपेप्टाइड्स (&lt; 1,000 Da) के रूप में होते हैं। यह आंतों में बिजली की गति से अवशोषित होता है और कड़वाहट को नियंत्रित सीमा में रखता है।</li>
        <li><strong>उच्च DH (20% &ndash; 30%):</strong> अत्यधिक गहरा विखंडन। यह मुख्य रूप से गंभीर दूध एलर्जी वाले शिशुओं और ICU में उपचारात्मक क्लिनिकल पोषण हेतु उपयोग होता है। इसका स्वाद अत्यधिक कड़वा और हाइपर-ऑस्मोलर होता है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. कड़वाहट निवारण विज्ञान (Debittering) एवं नेय का नियम (Q-Value)</h3>
    <p>WPH निर्माण में सबसे बड़ी तकनीकी चुनौती पेप्टाइड्स की तीव्र कड़वाहट (Bitterness) होती है, जो हाइड्रोफोबिक अमीनो एसिड्स के बाहर आने से उत्पन्न होती है।</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">कड़वाहट का थर्मोडायनामिक्स (नेय का Q-मान नियम):</p>
        <p class="text-xs text-amber-800 mt-1">खाद्य वैज्ञानिक के. एच. नेय ने सिद्ध किया कि पेप्टाइड की कड़वाहट उसकी औसत हाइड्रोफोबिसिटी यानी <strong>Q-वैल्यू</strong> पर निर्भर करती है:</p>
        <p class="text-xs text-amber-900 font-mono mt-1 text-center font-bold">Q = (&sum; &Delta;f) / n</p>
        <p class="text-xs text-amber-800 mt-1">जहां $\\sum \\Delta f$ अमीनो एसिड साइड-चेन्स की मुक्त ऊर्जा का योग है और $n$ पेप्टाइड में अवशेषों की संख्या है:
            <br>&bull; यदि <strong>Q &gt; 1,400 cal/mol</strong>, तो पेप्टाइड अत्यधिक कड़वा होगा।
            <br>&bull; यदि <strong>Q &lt; 1,300 cal/mol</strong>, तो पेप्टाइड पूर्णतः कड़वाहट-मुक्त (स्वादिष्ट) होगा।
        </p>
        <p class="text-xs text-amber-800 mt-1">जब एंडोपेप्टिडेज (जैसे <em>Alcalase</em>) व्हे को काटते हैं, तो हाइड्रोफोबिक अवशेष (ल्यूसीन, आइसोल्यूसीन, फेनिलएलनिन) सिरों पर आ जाते हैं, जिससे $Q$ मान $1,550	ext{ cal/mol}$ के पार चला जाता है और प्रोटीन कड़वा हो जाता है।</p>
    </div>

    <p class="mt-3"><strong>दो-चरणीय औद्योगिक डीबिटरिंग समाधान:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>प्रथम चरण (प्राथमिक विखंडन):</strong> खाद्य-ग्रेड एंडोपेप्टिडेज (<em>Bacillus licheniformis</em>) द्वारा 52&deg;C, pH 8.0 पर लक्षित 12% DH तक हाइड्रोलिसिस।</li>
        <li><strong>द्वितीय चरण (एक्सोपेप्टिडेज डीबिटरिंग):</strong> <em>Aspergillus oryzae</em> से प्राप्त फंगल अमीनोपेप्टिडेज मिलाए जाते हैं। ये एंजाइम पेप्टाइड के अंतिम सिरे से हाइड्रोफोबिक अमीनो एसिड्स को सटीक रूप से काट देते हैं, जिससे औसत $Q$-मान $1,280	ext{ cal/mol}$ से नीचे आ जाता है और कड़वाहट पूरी तरह गायब हो जाती है।</li>
        <li><strong>एंजाइम का थर्मल डीएक्टिवेशन:</strong> बायोरिएक्टर स्लरी को स्क्रैप्ड-सरफेस हीट एक्सचेंजर से <strong>88&deg;C से 90&deg;C पर 3 से 5 मिनट</strong> तक गुजारा जाता है। इससे एंजाइम स्थाई रूप से निष्क्रिय हो जाते हैं और उत्पाद में मायलार्ड ब्राउनिंग नहीं होती।</li>
    </ol>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. एक्सरसाइज फिजियोलॉजी: PEPT1 प्रोटॉन-कपल्ड ट्रांसपोर्टर</h3>
    <p>एथलीट WPH केवल प्रोटीन मात्रा के लिए नहीं, बल्कि इसके अभूतपूर्व अवशोषण वेग के लिए लेते हैं जो साबुत प्रोटीन और मुक्त अमीनो एसिड दोनों से तेज है।</p>

    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg mt-3">
        <p class="text-xs text-emerald-900 font-semibold">PEPT1 (SLC15A1) बनाम मुक्त अमीनो एसिड ट्रांसपोर्टर्स:</p>
        <p class="text-xs text-emerald-800 mt-1">मानव छोटी आंत (ड्यूडेनम व जेजुनम) में प्रोटीन पाचन उत्पाद दो भिन्न आणविक मार्गों से अवशोषित होते हैं:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-emerald-800 mt-1">
            <li><strong>मार्ग A (मुक्त अमीनो एसिड ट्रांसपोर्टर्स):</strong> मुक्त अमीनो एसिड्स को सीमित चैनलों (B&deg;AT1, y+LAT1 आदि) के लिए आपस में प्रतिस्पर्धा करनी पड़ती है। उच्च ल्यूसीन सांद्रता अन्य महत्वपूर्ण अमीनो एसिड्स के अवशोषण को अवरुद्ध कर देती है।</li>
            <li><strong>मार्ग B (PEPT1 ऑलिगोपेप्टाइड सिंपोर्टर):</strong> PEPT1 आंतों की ब्रश बॉर्डर झिल्ली पर स्थित एक उच्च-क्षमता वाला ट्रांसपोर्टर है। यह <strong>डाइपेप्टाइड्स और ट्राइपेप्टाइड्स को सीधे और अखंड रूप में</strong> प्रोटॉन प्रवणता ($H^+$-symport) की सहायता से कोशिका के अंदर खींच लेता है।</li>
        </ul>
        <p class="text-xs text-emerald-800 mt-1"><strong>थर्मोडायनामिक लाभ:</strong> केवल एक प्रोटॉन की ऊर्जा का उपयोग करके PEPT1 एक साथ 2 या 3 अमीनो एसिड्स को एक ही चक्र में खींच लेता है। आंत की कोशिका के अंदर साइटोसोलिक पेप्टिडेज एंजाइम इन्हें तुरंत मुक्त अमीनो एसिड्स में तोड़कर पोर्टल सर्कुलेशन में भेज देते हैं।</p>
    </div>

    <p class="mt-3"><strong>क्लीनिकल श्रेष्ठता:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>अवशोषण वेग ($V_{max}$):</strong> PEPT1 द्वारा डाइ/ट्राइपेप्टाइड अवशोषण की गति मुक्त अमीनो एसिड्स की तुलना में <strong>2.5 से 3.0 गुना अधिक</strong> होती है।</li>
        <li><strong>रक्त में पीक समय ($T_{max}$):</strong> WPH पीने के मात्र <strong>15 से 20 मिनट</strong> के भीतर रक्त में अमीनो एसिड्स का उच्चतम स्तर ($T_{max}$) पहुंच जाता है, जबकि साबुत WPI में 50&ndash;60 मिनट और ठोस भोजन में 120 मिनट लगते हैं।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. स्पोर्ट्स रिकवरी में बायोएक्टिव ऑलिगोपेप्टाइड्स</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">बायोएक्टिव पेप्टाइड</th>
                    <th class="p-2 border">अमीनो एसिड अनुक्रम</th>
                    <th class="p-2 border">स्रोत व्हे घटक</th>
                    <th class="p-2 border">क्रियाविधि एवं एथलेटिक लाभ</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>&beta;-लैक्टोसिन A</strong></td>
                    <td class="p-2 border">Ala-Leu-Pro-Met-His-Ile-Arg</td>
                    <td class="p-2 border">&beta;-लैक्टोग्लोब्युलिन</td>
                    <td class="p-2 border">ACE (एंजियोटेंसिन-कन्वर्टिंग एंजाइम) का शक्तिशाली अवरोधक ($IC_{50} = 42.6\\;\\mu	ext{M}$)। यह रक्त वाहिकाओं के संकुचन को रोककर रक्तचाप घटाता है और मांसपेशियों में हाइपरमिया (रक्त प्रवाह) को बढ़ाता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-लैक्टोर्फिन</strong></td>
                    <td class="p-2 border">Tyr-Gly-Leu-Phe</td>
                    <td class="p-2 border">&alpha;-लैक्टलेंसिन</td>
                    <td class="p-2 border">&mu;-ओपिओइड रिसेप्टर्स पर कार्य करने वाला प्राकृतिक एनाल्जेसिक पेप्टाइड। वर्कआउट के बाद मांसपेशियों के दर्द (DOMS) को कम करता है और तेजी से रिकवरी प्रदान करता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&beta;-लैक्टोर्फिन</strong></td>
                    <td class="p-2 border">Tyr-Leu-Leu-Phe</td>
                    <td class="p-2 border">&beta;-लैक्टोग्लोब्युलिन</td>
                    <td class="p-2 border">संवहनी प्रोस्टासाइक्लिन ($PGI_2$) रिलीज कराता है, जिससे वर्कआउट के दौरान रक्त नलिकाओं का फैलाव होता है और प्लेटलेट एकत्रीकरण रुकता है।</td>
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
                        हाइड्रोलाइज्ड व्हे प्रोटीन (WPH) एवं बायोएक्टिव पेप्टाइड्स — बायोरिएक्टर फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">एंजाइमेटिक हाइड्रोलिसिस (DH 10–15%), कड़वाहट निवारण, एक्टिवेटेड चारकोल पॉलिशिंग एवं स्प्रे ड्राइंग फ्लोचार्ट</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-चरणीय हाइड्रोलाइज्ड व्हे CCP फ्लोचार्ट
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
                    WPI-90 रीकॉन्स्टिट्यूशन एवं थर्मल कंडीशनिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">घोल तैयारी</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">अल्ट्रा-प्योर WPI-90 को शुद्ध RO पानी में 50°C पर घोलकर 8–10% प्रोटीन घोल तैयार करना। खाद्य ग्रेड 1.0 M पोटैशियम हाइड्रॉक्साइड (KOH) द्वारा pH को 8.0 पर संतुलित करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रोटीन घोल</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8% – 10% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घोल तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रारंभिक pH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 8.0 ± 0.1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्षार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">KOH (सोडियम मुक्त)</strong></div></div>
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
                    बायोरिएक्टर एंजाइमेटिक हाइड्रोलिसिस (अल्केलेज / ट्रिप्सिन)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">एंजाइम कटिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">फार्मास्युटिकल ग्रेड एंडोपेप्टिडेस (Alcalase 2.4L) को 1.5–2.0% w/w मिलाना। जैसे-जैसे पेप्टाइड बॉन्ड टूटते हैं और एसिड बनता है, स्वचालित pH-Stat टाइट्रेटर pH को ठीक 8.0 पर बनाए रखता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंजाइम सिस्टम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Alcalase 2.4L / ट्रिप्सिन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">E : S अनुपात</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.5% – 2.0% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH नियंत्रण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">स्वचालित pH-Stat 8.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 – 90 मिनट</strong></div></div>
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
                    ऑनलाइन डिग्री ऑफ हाइड्रोलिसिस (DH 10–15%) नियंत्रण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: DH नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">बेस खपत के आधार पर रियल-टाइम DH मापना। जब DH ठीक 10% से 15% (डाई- और ट्राई-पेप्टाइड्स का उच्चतम अनुपात) पहुंचता है, तो रिएक्शन को तुरंत रोक दिया जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लक्षित DH सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10% – 15% DH</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पेप्टाइड आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2,000 Da (> 70%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डाई/ट्राई-पेप्टाइड्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 40% कुल</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">माप तकनीक</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">रियल-टाइम बेस कंजम्प्शन</strong></div></div>
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
                    थर्मल एंजाइम निष्क्रियन (Enzyme Deactivation)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: एंजाइम खात्मा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">हाइड्रोलाइज्ड घोल को हीट एक्सचेंजर में 88°C पर 5 मिनट गर्म करना। अल्केलेज एंजाइम हमेशा के लिए नष्ट हो जाता है, जिससे प्रोटीन का जरूरत से ज्यादा कटना रुक जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">88.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होल्डिंग समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">5 मिनट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट एंजाइम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">शून्य (100% निष्क्रिय)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FDV डायवर्ट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 86.5°C</strong></div></div>
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
                    फंगल अमीनोपेप्टिडेस द्वारा कड़वाहट निवारण (Debittering)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">कड़वाहट हटाना</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">एंडोपेप्टिडेस कटिंग से ल्यूसीन और फेनिलएलनिन छोर बाहर आ जाते हैं जिससे कड़वाहट आ जाती है। फंगल अमीनोपेप्टिडेस एंजाइम इन कड़वे छोरों को काटकर 85% कड़वाहट समाप्त कर देता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंजाइम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">फंगल अमीनोपेप्टिडेस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 मिनट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कड़वाहट में कमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 85% कड़वाहट समाप्त</strong></div></div>
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
                    एक्टिवेटेड चारकोल पॉलिशिंग एवं माइक्रोफिल्ट्रेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">पॉलिशिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल में 0.2% एसिड-वाश एक्टिवेटेड चारकोल मिलाकर बची हुई गंध व कड़वे अणुओं को सोखना। 0.2 µm सिरेमिक फिल्टर से गुजारकर चारकोल को पूरी तरह अलग करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">चारकोल मात्रा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">संपर्क समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 मिनट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फिल्टर जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2 µm सिरेमिक</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घोल पारदर्शिता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">NTU < 1.0 क्रिस्टल क्लीयर</strong></div></div>
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
                    मल्टी-इफेक्ट सांद्रण एवं लो-हीट स्प्रे ड्राइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: पेप्टाइड ड्राइंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वैक्यूम में 45% TS तक सांद्रण। टॉल-फॉर्म स्प्रे ड्रायर (इनलेट 175°C, एग्जॉस्ट 76°C) में 180 bar नोजल द्वारा सुखाकर < 3.5% नमी वाला हाइड्रोलाइज्ड व्हे पेप्टाइड पाउडर तैयार करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वैक्यूम तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इनलेट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">175°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एग्जॉस्ट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">76°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अंतिम नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.5%</strong></div></div>
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
                    12,000 गॉस मैग्नेट एवं नाइट्रोजन पैकेजिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: मेटल ट्रैप व MAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">1.0 mm छलनी और 12,000 गॉस मैग्नेटिक ट्रैप से गुजारना। नाइट्रोजन-फ्लश डिब्बों (O₂ < 1.5%) में पैक करना। PEPT1 ट्रांसपोर्टर द्वारा 30 मिनट में आंतों द्वारा 100% तीव्र अवशोषण।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मैग्नेटिक ट्रैप</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 गॉस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">PEPT1 अवशोषण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 30 मिनट में पीक</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शेल्फ लाइफ</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 माह</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "micellar-casein": {
                title: "C. मिसेलर कैसिइन (MC) एवं कैसीनेट्स - 8 घंटे का एंटी-कैटाबोलिक विंडो",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. नेटिव कैसिइन मिसेल की नैनो-संरचना (Nanostructure)</h3>
    <p>डेयरी जैव-रसायन और स्पोर्ट्स साइंस में मिसेलर कैसिइन (Micellar Casein) को सर्वश्रेष्ठ "धीमी गति से पचने वाला" एंटी-कैटाबोलिक प्रोटीन माना जाता है। गाय के दूध के कुल प्रोटीन का लगभग <strong>80% भाग कैसिइन</strong> होता है। यह अकेले अणुओं के रूप में नहीं, बल्कि <strong>120 से 200 नैनोमीटर</strong> व्यास वाले विशाल, गोलाकार कोलाइडल कणों के रूप में रहता है जिसे <strong>कैसिइन मिसेल</strong> कहते हैं।</p>

    <div class="p-3 bg-purple-50 border border-purple-200 rounded-lg mt-3">
        <p class="text-xs text-purple-900 font-semibold">होल्ट नैनोक्लस्टर एवं ड्यूल-बाइंडिंग मॉडल:</p>
        <p class="text-xs text-purple-800 mt-1">एक प्राकृतिक मिसेल चार विशिष्ट जीन प्रोटीनों का समूह होता है जो <strong>कोलाइडल कैल्शियम फॉस्फेट (CCP - [Ca_9(PO_4)_6])</strong> के हजारों सूक्ष्म नैनोक्लस्टरों और हाइड्रोफोबिक बंधों द्वारा बंधा होता है:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-purple-800 mt-1">
            <li><strong>&alpha;_{s1}-कैसिइन (कुल कैसिइन का 38%, 23.6 kDa):</strong> अत्यधिक फॉस्फोराइलेटेड (8&ndash;9 फॉस्फोसेरिन अवशेष)। यह कैल्शियम को मजबूती से बांधकर CCP क्रॉस-लिंक का ढांचा बनाता है।</li>
            <li><strong>&alpha;_{s2}-कैसिइन (कुल कैसिइन का 10%, 25.2 kDa):</strong> सर्वाधिक हाइड्रोफिलिक (जल-आकर्षक) कैसिइन जिसमें 10&ndash;13 फॉस्फोसेरिन अवशेष और 2 डाइसल्फाइड बॉन्ड होते हैं।</li>
            <li><strong>&beta;-कैसिइन (कुल कैसिइन का 36%, 24.0 kDa):</strong> दृढ़ एम्फिफ़िलिक प्रोटीन जिसका एक सिरा जल-आकर्षक और दूसरा सिरा अत्यधिक हाइड्रोफोबिक होता है। यह मिसेल के आंतरिक कोर को बनाता है।</li>
            <li><strong>&kappa;-कैसिइन (कुल कैसिइन का 13%, 19.0 kDa):</strong> मिसेल का रक्षक। यह कैल्शियम से कभी प्रेसिपिटेट नहीं होता और मिसेल की बाहरी सतह पर ही स्थित रहता है।</li>
        </ul>
        <p class="text-xs text-purple-800 mt-1"><strong>&kappa;-कैसिइन का "हेयरी ब्रश लेयर":</strong> &kappa;-कैसिइन की हाइड्रोफिलिक पूंछ (अवशेष 106&ndash;169, ग्लाइकोमैक्रोपेप्टाइड) मिसेल की सतह से <strong>5 से 10 nm बाहर सीरम में फैली रहती है</strong>। न्यूट्रल pH पर यह ऋणात्मक चार्ज (जीटा पोटेंशियल $\\zeta pprox -20	ext{ mV}$) वहन करती है, जिससे मिसेल एक-दूसरे से टकराकर कभी आपस में नहीं चिपकते।</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. कोल्ड सिरेमिक माइक्रोफिल्ट्रेशन (0.1 &mu;m) बनाम केमिकल कैसीनेट्स</h3>
    <p>निर्माण तकनीक यह निर्धारित करती है कि एथलीट को वास्तविक शुद्ध मिसेलर कैसिइन मिल रहा है या रसायनों से विकृत कैसीनेट नमक।</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">पैरामीटर</th>
                    <th class="p-2 border">शुद्ध मिसेलर कैसिइन (MC-85)</th>
                    <th class="p-2 border">कैल्शियम कैसीनेट (Caseinate)</th>
                    <th class="p-2 border">सोडियम कैसीनेट</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>उत्पादन विधि</strong></td>
                    <td class="p-2 border">कोल्ड सिरेमिक माइक्रोफिल्ट्रेशन (<strong>0.10 &ndash; 0.14 &mu;m</strong>) 8&ndash;10&deg;C पर। कोई एसिड या क्षार नहीं।</td>
                    <td class="p-2 border">एसिड प्रेसिपिटेशन (pH 4.6), फिर $Ca(OH)_2$ द्वारा 80&deg;C पर रासायनिक न्यूट्रलाइजेशन।</td>
                    <td class="p-2 border">एसिड प्रेसिपिटेशन (pH 4.6), फिर कास्टिक सोडा (NaOH) द्वारा 80&deg;C पर न्यूट्रलाइजेशन।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>मिसेलर अखंडता</strong></td>
                    <td class="p-2 border"><strong>100% प्राकृतिक साबुत मिसेल्स</strong>, CCP नैनोक्लस्टर्स और हेयरी लेयर पूर्णतः सुरक्षित।</td>
                    <td class="p-2 border"><strong>पूरी तरह नष्ट (0%)।</strong> अनियंत्रित मुड़ी हुई विकृत प्रोटीन श्रृंखलाएं।</td>
                    <td class="p-2 border"><strong>पूरी तरह नष्ट (0%)।</strong> पृथक रासायनिक बहुलक श्रृंखलाएं।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>पेट में थक्का (Gastric Clot)</strong></td>
                    <td class="p-2 border"><strong>मजबूत, सघन प्रोटीन जेल क्लॉट</strong> बनता है ($pH &lt; 2.5$ पर)। अत्यंत धीमा पाचन।</td>
                    <td class="p-2 border">कमजोर, बिखरा हुआ थक्का। मध्यम गति से पाचन।</td>
                    <td class="p-2 border">कोई ठोस थक्का नहीं बनता; तरल रूप में तेजी से छोटी आंत में निकल जाता है।</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>अमीनो एसिड रिलीज प्रोफाइल</strong></td>
                    <td class="p-2 border"><strong>7 से 8 घंटे तक एक समान, निरंतर स्थिर प्रवाह।</strong></td>
                    <td class="p-2 border">3 से 4 घंटे में मध्यम प्रवाह।</td>
                    <td class="p-2 border">2 से 3 घंटे में त्वरित प्रवाह (लगभग व्हे की तरह तेज)।</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. एक्सरसाइज फिजियोलॉजी: 8 घंटे का एंटी-कैटाबोलिक विंडो एवं गैस्ट्रिक कोएगुलेशन</h3>
    <p>मिसेलर कैसिइन की सबसे बड़ी खूबी पूरे शरीर के मसल प्रोटीन ब्रेकडाउन (MPB) को 34% तक दबाकर रखना है, जिससे यह रात को सोते समय (Nocturnal) सेवन के लिए विश्व का सर्वश्रेष्ठ सप्लीमेंट बनता है।</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">गैस्ट्रिक क्लॉटिंग का जैव-भौतिकीय सिद्धांत:</p>
        <p class="text-xs text-indigo-800 mt-1">जब मिसेलर कैसिइन मानव आमाशय (पेट) में पहुंचता है, तो वहां गैस्ट्रिक हाइड्रोक्लोरिक एसिड ($pH pprox 1.5	ext{ से }2.0$) और <strong>पेप्सिन एंजाइम</strong> से मिलता है:</p>
        <ol class="list-decimal list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li><strong>जीटा पोटेंशियल का विनाश:</strong> पेट के अम्लीय माध्यम में pH समवैद्युत बिंदु ($pI = 4.6$) से नीचे चला जाता है, जिससे &kappa;-कैसिइन का ऋणात्मक चार्ज शून्य हो जाता है और वैद्युत प्रतिकर्षण समाप्त हो जाता है।</li>
            <li><strong>पेप्सिन द्वारा विखंडन:</strong> पेप्सिन &kappa;-कैसिइन के Phe105-Met106 बॉन्ड को तुरंत काट देता है, जिससे सुरक्षात्मक हेयरी ब्रश कटकर अलग हो जाता है। इसके परिणामस्वरूप मिसेल आपस में मिलकर एक सघन, जल-अघुलनशील <strong>प्रोटीन जेल क्लॉट (दही का थक्का)</strong> बना लेते हैं।</li>
        </ol>
        <p class="text-xs text-indigo-800 mt-1"><strong>शून्य-क्रम (Zero-Order) गैस्ट्रिक रिलीज:</strong> यह सघन थक्का पाइलोरिक वाल्व से नहीं गुजर सकता। पेप्सिन इस थक्के की बाहरी सतह से धीरे-धीरे प्रोटीन को खुरचकर <strong>0.025 से 0.035 ग्राम प्रति मिनट</strong> की स्थिर दर से छोटी आंत में <strong>7 से 8 घंटे तक</strong> भेजता रहता है।</p>
    </div>

    <p class="mt-3"><strong>बोइरी क्लिनिकल ट्रेसर अध्ययन (Boirie et al., PNAS):</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>क्लिनिकल ट्रायल्स में मानव स्वयंसेवकों को रेडियोधर्मी $[1-^{13}C]	ext{ल्यूसीन}$ से लेबल किया गया व्हे या मिसेलर कैसिइन दिया गया।</li>
        <li><strong>व्हे (फास्ट प्रोटीन):</strong> इसने 60 मिनट में ल्यूसीन का तीव्र पीक दिया, जिससे प्रोटीन संश्लेषण (MPS) +68% बढ़ा, किंतु इसमें से 31% ल्यूसीन ऊर्जा के रूप में जलकर नष्ट हो गया। 4 घंटे बाद रक्त में ल्यूसीन बेसलाइन पर आ गया और कैटाबोलिज्म (मांसपेशी टूटना) शुरू हो गया।</li>
        <li><strong>मिसेलर कैसिइन (स्लो एंटी-कैटाबोलिक प्रोटीन):</strong> इसने एक मध्यम ल्यूसीन स्तर बनाया जो पूरे <strong>7 घंटे (420 मिनट) तक लगातार स्थिर पठार</strong> के रूप में बना रहा। सबसे महत्वपूर्ण बात यह रही कि इसने पूरे शरीर के <strong>मसल प्रोटीन ब्रेकडाउन (MPB) को 34% तक घटा दिया</strong>।</li>
        <li><strong>नेट प्रोटीन बैलेंस ($NPB = MPS - MPB$):</strong> जहां दिन में वर्कआउट के तुरंत बाद व्हे प्रोटीन आवश्यक है, वहीं रात को सोते समय 40 ग्राम मिसेलर कैसिइन लेने से 8 घंटे की नींद के दौरान मांसपेशी क्षरण शून्य हो जाता है और सकारात्मक नाइट्रोजन संतुलन बना रहता है।</li>
    </ul>

    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        मिसेलर कैसिइन (MC) — कोल्ड माइक्रोफिल्ट्रेशन निर्माण फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">7-चरणीय 0.1 µm सिरेमिक मेम्ब्रेन एवं स्लो-रिलीज कैसिइन सतत निर्माण फ्लोचार्ट (CCPs सहित)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-चरणीय मिसेलर कैसिइन CCP फ्लोचार्ट
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
                    ताजा स्किम्ड दूध रिसेप्शन एवं बैक्टोफ्यूगेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: कच्चा दूध परीक्षण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">पूरी तरह मलाई रहित ताजा दूध (फैट < 0.05%)। 55°C पर टू-स्टेज बैक्टोफ्यूगेशन द्वारा 99% बैक्टीरियल स्पोर्स को बिना कैसिइन मिसेल को नुकसान पहुंचाए अलग करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फैट प्रतिशत</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.05%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्पोर खात्मा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99% स्पोर्स अलग</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सोमैटिक सेल्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 200,000 / mL</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एसिडिटी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.14% LA</strong></div></div>
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
                    कोल्ड सिरेमिक माइक्रोफिल्ट्रेशन (MF 0.1–0.14 µm)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">MF छंटनी</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ठंडे दूध (6°C–8°C) को 0.1 से 0.14 माइक्रोन की सिरेमिक मेम्ब्रेन से गुजारना। गोलाकार कैसिइन मिसेल्स (150–250 nm) मेम्ब्रेन पर रुक जाते हैं, जबकि व्हे प्रोटीन और लैक्टोज आर-पार निकल जाते हैं।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सिरेमिक छिद्र आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.1 – 0.14 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ऑपरेटिंग तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">6°C – 8°C (ठंडा)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कैसिइन रुकावट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">व्हे अलग होना</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 95% अलग</strong></div></div>
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
                    सतत डायफिल्ट्रेशन (DF) द्वारा लैक्टोज सफाई
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: शुद्धता</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ठंडा शुद्ध RO पानी मिलाकर 3 से 4 बार डायफिल्ट्रेशन करना। लैक्टोज और लवण पूरी तरह धुल जाते हैं, जबकि कैसिइन मिसेल का प्राकृतिक कैल्शियम-फॉस्फेट (CCP) 100% सुरक्षित रहता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लैक्टोज मात्रा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5% शुष्क भार</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्राकृतिक कैल्शियम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% सुरक्षित</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रोटीन शुद्धता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">85% – 88% मिसेलर कैसिइन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DF तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">8°C</strong></div></div>
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
                    फॉलिंग फिल्म इवैपोरेशन एवं लो-शीयर पंपिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">सांद्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वैक्यूम इवैपोरेटर में 48°C–52°C पर 28–32% TS तक गाढ़ा करना। कैसिइन मिसेल के नाजुक आकार को टूटने से बचाने के लिए केवल लो-शीयर लोब पंप का उपयोग किया जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वैक्यूम तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48°C – 52°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सॉलिड्स सांद्रण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">28% – 32% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पंप प्रकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">लो-शीयर लोब पंप</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">विस्कोसिटी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 120 cP</strong></div></div>
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
                    लो-टेम्परेचर टॉल-फॉर्म स्प्रे ड्राइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: थर्मल सुरक्षा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">इनलेट 170°C–175°C और एग्जॉस्ट 72°C–74°C पर स्प्रे ड्राइंग। कम तापमान पर सुखाने से मिसेल की घुलनशीलता बनी रहती है और पेट के एसिड में जाते ही यह मजबूत थक्का बनाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इनलेट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">170°C – 175°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एग्जॉस्ट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">72°C – 74°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाउडर नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">4.0% ± 0.3%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घुलनशीलता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.2 mL</strong></div></div>
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
                    वाइब्रेटिंग फ्लुइड बेड कंडीशनिंग एवं सिफ्टिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">कंडीशनिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वाइब्रेटिंग फ्लुइड बेड में शुष्क HEPA हवा द्वारा पाउडर को 20°C तक ठंडा करना। 1.0 mm चलनी और 12,000 गॉस मैग्नेट से गुजारकर धातु के कणों को पूरी तरह हटाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ठंडा तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20°C ± 2°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">चलनी जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मैग्नेटिक ट्रैप</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 गॉस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बल्क घनत्व</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.45 – 0.52 g/mL</strong></div></div>
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
                    पैकेजिंग एवं 8-घंटे निरंतर रिलीज का सत्यापन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: एंटी-कैटाबोलिक रिलीज</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">इंडक्शन-सील्ड जार में पैक करना। प्रयोगशाला में pH 2.0 पर परीक्षण से प्रमाणित होता है कि यह पेट में जाकर कड़ा जेल बनाता है और 7 से 8 घंटे तक मांसपेशियों को निरंतर अमीनो एसिड देता रहता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पेट में जेल बनना</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 2.0 पर प्रमाणित</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">रिलीज समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7 – 8 घंटे निरंतर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शेल्फ लाइफ</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 माह</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "mass-gainers": {
                title: "D. मास गेनर्स एवं कॉम्प्लेक्स कार्ब्स ब्लेंड्स (क्लस्टर डेक्सट्रिन व DigeZyme)",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. कैलोरिक एनर्जेटिक्स एवं एक्टोमॉर्फ (हार्डगेनर) फिजियोलॉजी</h3>
    <p>अत्यधिक तेज़ चयापचय (Hyper-metabolic BMR) वाले एथलीटों या जन्मजात दुबले व्यक्तियों (Ectomorphs / Hardgainers) में मांसपेशी वृद्धि (Hypertrophy) के लिए शरीर को निरंतर सकारात्मक ऊर्जा संतुलन में रखना अनिवार्य है। इसके लिए प्रतिदिन <strong>+400 से +800 किलोकैलोरी का शुद्ध सरप्लस</strong> चाहिए।</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-2">
        <p class="text-xs text-amber-900 font-mono text-center font-bold">दैनिक ऊर्जा आवश्यकता = BMR + TEF + EEE + NEAT + सरप्लस (&Delta;E = +400 से +800 kcal/दिन)</p>
        <p class="text-xs text-amber-800 mt-1">केवल साधारण ठोस भोजन से इतनी भारी कैलोरी खाने पर पेट भर जाता है, अपच होती है और गैस्ट्रिक समस्या पैदा होती है। उच्च-प्रदर्शन मास गेनर्स एक खुराक में <strong>600 से 1,250 शुद्ध कैलोरी</strong> वैज्ञानिक रूप से संतुलित <strong>3:1 या 4:1 कार्बोहाइड्रेट-से-प्रोटीन अनुपात</strong> में प्रदान करते हैं।</p>
    </div>

    <p class="mt-3"><strong>इंसुलिन एवं mTORC1 की जुगलबंदी:</strong> कार्बोहाइड्रेट से रिलीज होने वाला इंसुलिन ल्यूसीन के साथ मिलकर काम करता है। इंसुलिन Akt/PKB पाथवे को सक्रिय करता है जो TSC2 को निष्क्रिय कर देता है। इससे Rheb-GTP स्वतंत्र होकर mTORC1 को पूरी क्षमता से चालू करता है। साथ ही Akt FOXO प्रोटीन्स को बंद कर देता है, जिससे मांसपेशियों को गलाने वाले MuRF-1 और Atrogin-1 जीन पूरी तरह शांत हो जाते हैं और कैटाबोलिज्म रुक जाता है।</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. कार्बोहाइड्रेट पॉलीमर साइंस: क्लस्टर डेक्सट्रिन (HBCD) बनाम सस्ता डेक्सट्रोज</h3>
    <p>बाजार के सस्ते मास गेनर्स में साधारण चीनी, डेक्सट्रोज या लो-ग्रेड माल्टोडेक्सट्रिन भरी होती है, जिससे पेट फूलता है और शुगर क्रैश होता है।</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">ऑस्मोलैलिटी का जैव-भौतिकी नियम (Van 't Hoff Equation):</p>
        <p class="text-xs text-blue-800 mt-1">पेट में ऑस्मोटिक दबाव ($\\Pi$) उसमें घुले कणों की आणविक संख्या पर निर्भर करता है:</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">&Pi; = &Sigma; (c_i &times; R &times; T) &nbsp;&bull;&nbsp; ऑस्मोलैलिटी = (घुलित कणों के मोल) / (विलायक का किग्रा)</p>
        <p class="text-xs text-blue-800 mt-1"><strong>सस्ते शुगर्स का संकट (हाइपरटॉनिक घोल &gt; 450 mOsm/kg):</strong> डेक्सट्रोज ($MW = 180	ext{ Da}$) में लाखों छोटे कण होते हैं। पानी में घोलने पर यह अत्यधिक हाइपरटॉनिक घोल बनाता है। पेट में जाते ही यह आमाशय की गति को रोक देता है (गैस्ट्रोपैरेसिस) और शरीर के रक्त से पानी को खींचकर आंतों में भर देता है, जिससे गंभीर पेट दर्द, मरोड़ और दस्त (Osmotic Diarrhea) लग जाते हैं।</p>
        <p class="text-xs text-blue-800 mt-2"><strong>वैज्ञानिक समाधान: हाईली ब्रांच्ड साइक्लिक डेक्सट्रिन (HBCD / Cluster Dextrin&reg;):</strong> यह वैक्सी कॉर्न स्टार्च को ब्रांचिंग एंजाइम द्वारा चक्रीय बनाकर तैयार किया जाता है। इसका आणविक भार अत्यधिक विशाल ($MW = 160,000	ext{ से }400,000	ext{ Da}$) होता है। इसके विशाल आकार के कारण घोल में कणों की संख्या नगण्य होती है, जिससे इसकी <strong>ऑस्मोलैलिटी अत्यंत निम्न (&lt; 150 mOsm/kg &ndash; हाइपोटॉनिक)</strong> रहती है।</p>
    </div>

    <p class="mt-3"><strong>HBCD की शारीरिक श्रेष्ठता:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>अति-तीव्र आमाशय निकास (&lt; 20 मिनट):</strong> यह पेट से पानी की तरह तेजी से निकलकर छोटी आंत में पहुंचता है, जिससे वर्कआउट के दौरान या तुरंत बाद पीने पर भी पेट में जरा सा भी भारीपन या मतली नहीं होती।</li>
        <li><strong>स्थिर ग्लाइकोजन निर्माण:</strong> यह रक्त में $5	ext{--}7	ext{ mmol/kg/hr}$ की निरंतर स्थिर गति से ग्लूकोज रिलीज करता है, जिससे इंसुलिन क्रैश (सुस्ती व चक्कर) नहीं होता और मांसपेशियों में ग्लाइकोजन तेजी से भरता है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. मल्टी-फेज प्रोटीन मैट्रिक्स एवं क्लीन लिपिड बायो-एनर्जेटिक्स</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>त्रि-स्तरीय प्रोटीन मैट्रिक्स:</strong> <em>व्हे प्रोटीन आइसोलेट (WPI-90)</em> 15 मिनट में अमीनो एसिड्स पहुंचाता है &rarr; <em>व्हे प्रोटीन कॉन्संट्रेट (WPC-80)</em> 1 से 3 घंटे तक स्तर बनाए रखता है &rarr; <em>मिसेलर कैसिइन (MC-85)</em> 3 से 8 घंटे तक मांसपेशी क्षरण रोकता है।</li>
        <li><strong>मीडियम चेन ट्राइग्लिसराइड्स (MCT ऑयल पाउडर C8/C10):</strong> कैप्रिलिक एसिड ($C_8$) और कैप्रिक एसिड ($C_{10}$) बबूल (अकेशिया) फाइबर पर समाहित होते हैं।
            <br>&bull; साधारण वसा की तरह इन्हें पचने हेतु पित्त रस या काइलोमाइक्रोन की आवश्यकता नहीं होती; यह सीधे <strong>हेपेटिक पोर्टल वेन</strong> द्वारा अवशोषित होते हैं।
            <br>&bull; यह माइटोकॉन्ड्रिया में बिना CPT-1 ट्रांसपोर्टर के सीधे प्रवेश कर तुरंत &beta;-ऑक्सीडेशन द्वारा $8.3	ext{ kcal/g}$ ऊर्जा देते हैं और शरीर की चर्बी में जमा नहीं होते।
        </li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. DigeZyme&reg; 5-एंजाइम पाचक कॉम्प्लेक्स</h3>
    <p>1,000 कैलोरी के भारी पोषण को बिना गैस, अफारा या बदहजमी के 100% पचाने हेतु आधुनिक गेनर्स में पांच पाचक एंजाइमों का समूह मिलाया जाता है:</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">एंजाइम</th>
                    <th class="p-2 border">स्रोत</th>
                    <th class="p-2 border">सक्रियता</th>
                    <th class="p-2 border">पाचन कार्य</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>&alpha;-एमाइलेज</strong></td><td class="p-2 border"><em>Aspergillus oryzae</em></td><td class="p-2 border">24,000 U/g</td><td class="p-2 border">जटिल स्टार्च एवं माल्टोडेक्सट्रिन को माल्टोज में तोड़ता है।</td></tr>
                <tr><td class="p-2 border"><strong>न्यूट्रल प्रोटीएज</strong></td><td class="p-2 border"><em>Bacillus subtilis</em></td><td class="p-2 border">6,000 U/g</td><td class="p-2 border">प्रोटीन को सूक्ष्म अवशोषण योग्य पेप्टाइड्स में विभाजित करता है।</td></tr>
                <tr><td class="p-2 border"><strong>लैक्टेज (&beta;-गैलेक्टोसिडेज)</strong></td><td class="p-2 border"><em>Aspergillus oryzae</em></td><td class="p-2 border">4,000 U/g</td><td class="p-2 border">लैक्टोज को ग्लूकोज व गैलेक्टोज में तोड़कर गैस और ब्लोटिंग रोकता है।</td></tr>
                <tr><td class="p-2 border"><strong>लाइपेज</strong></td><td class="p-2 border"><em>Rhizopus oryzae</em></td><td class="p-2 border">1,000 U/g</td><td class="p-2 border">MCTs और वसा को फैटी एसिड्स में तोड़कर ऊर्जा में बदलता है।</td></tr>
                <tr><td class="p-2 border"><strong>सेल्युलेज</strong></td><td class="p-2 border"><em>Trichoderma</em></td><td class="p-2 border">200 U/g</td><td class="p-2 border">ओट्स और पादप फाइबर को पचाकर खनिजों को मुक्त करता है।</td></tr>
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
                        मास गेनर्स एवं कार्बोहाइड्रेट-प्रोटीन ब्लेंड्स — निर्माण फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">7-चरणीय क्लीनरूम पाउडर ब्लेंडिंग, DigeZyme पाचन एंजाइम डोजिंग एवं पैकेजिंग फ्लोचार्ट (CCPs सहित)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-चरणीय मास गेनर CCP फ्लोचार्ट
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
                    कॉम्प्लेक्स कार्बोहाइड्रेट एवं प्रोटीन सामग्री रिसेप्शन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: कच्ची सामग्री जांच</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">डुअल-फेज कार्बोहाइड्रेट मैट्रिक्स का वजन एवं जांच: क्लस्टर डेक्सट्रिन (HBCD / लो-ऑस्मोलैरिटी), लो-DE माल्टोडेक्सट्रिन (DE 10–12) और ओट का बारीक आटा (बीटा-ग्लूकन फाइबर)। साथ में इंस्टेंट WPC-80 और मिसेलर कैसिइन।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कार्ब : प्रोटीन अनुपात</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3:1, 4:1 या 5:1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लस्टर डेक्सट्रिन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">कुल कार्ब्स का 20%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रोटीन बेस</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">WPC-80 + कैसिइन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नमी मानक</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 5.0%</strong></div></div>
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
                    MCT ऑयल पाउडर एवं हेल्दी फैट प्री-मिक्सिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">लिपिड मैट्रिक्स</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्प्रे-ड्राइड मीडियम चेन ट्राइग्लिसराइड (MCT) पाउडर (70% C8/C10 फैट) को फ्लैक्ससीड पाउडर (ओमेगा-3) के साथ डबल-कोन ब्लेंडर में पहले से मिलाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">MCT स्रोत</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">C8/C10 फ्रेश फैट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कैरियर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">प्रीबायोटिक एकेशिया</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ओमेगा-3</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">अलसी (फ्लैक्ससीड)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फैट कैलोरी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">कुल कैलोरी का 10–12%</strong></div></div>
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
                    हाई-कैपेसिटी सैनिटरी रिबन ब्लेंडिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: एकरूपता नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">कार्बोहाइड्रेट, प्रोटीन और MCT फैट को स्टेनलेस स्टील 316 रिबन ब्लेंडर में डालना। विपरीत दिशा में घूमने वाले ब्लेड्स द्वारा 12 मिनट में एकसमान मिश्रण तैयार करना (CV < 3.0%)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ब्लेंडर क्षमता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2,000 – 5,000 kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घूर्णन गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">28 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मिश्रण समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12 मिनट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मिश्रण एकरूपता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">CV < 3.0%</strong></div></div>
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
                    मल्टी-एंजाइम कॉम्प्लेक्स (DigeZyme) एवं विटामिन्स डोजिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">पाचन एंजाइम्स</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">पांच पाचक एंजाइम्स का मिश्रण (DigeZyme: एमाइलेज, प्रोटीएज, लैक्टेज, लाइपेस, सेल्युलेज 100 mg/सर्विंग) मिलाना ताकि 1,000 कैलोरी पीने पर भी पेट में गैस, भारीपन या ब्लोटिंग न हो।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DigeZyme मात्रा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100 mg / सर्विंग</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लैक्टेज गतिविधि</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 400 ALU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रोटीएज गतिविधि</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 600 HUT/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाचन सुरक्षा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% गैस-मुक्त</strong></div></div>
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
                    इन-लाइन हाई-वेलोसिटी सिफ्टिंग एवं 12,000 गॉस मैग्नेट
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: बाहरी तत्व सफाई</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">मिश्रण को 1.2 mm रोटरी सेंट्रीफ्यूगल छलनी से गुजारना ताकि गुठलियां टूट जाएं। इसके तुरंत बाद 12,000 गॉस मैग्नेटिक ग्रिड से गुजारकर धातु के किसी भी बारीक कण को पकड़ना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">चलनी जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.2 mm अपर्चर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मैग्नेट पावर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 गॉस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन सफाई</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">सब-मिलीमीटर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्षमता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3,000 kg/घंटा</strong></div></div>
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
                    डुअल-फ्रीक्वेंसी मेटल डिटेक्शन एवं स्वचालित चेकवेइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: मेटल डिटेक्शन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">प्रत्येक बैच मेटल डिटेक्टर से गुजरता है (≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, ≥ 1.2 mm SS का स्वचालित रिजेक्शन)। स्वचालित न्यूमेटिक रिजेक्ट आर्म और लोड-सेल चेकवेयर (± 0.5% वजन सटीकता)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन डिटेक्शन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 डिटेक्शन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">रिजेक्ट सिस्टम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">न्यूमेटिक पिस्टन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वजन सटीकता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">± 0.5% लोड-सेल</strong></div></div>
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
                    हर्मेटिक बकेट पैकेजिंग एवं कैलोरी सत्यापन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: सील व लेबलिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">3 kg / 5 kg के हेवी-ड्यूटी बकेट्स या जिपर बैग्स में भरना। इंडक्शन फॉयल हीट सीलिंग। प्रत्येक सर्विंग में 1,000–1,250 स्वच्छ कैलोरी का प्रयोगशाला सत्यापन।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पैकिंग फॉर्मेट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3kg/5kg बकेट्स या पाउच</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इंडक्शन सील</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% एयरटाइट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कैलोरी उपज</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,000–1,250 Kcal/सर्विंग</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शेल्फ लाइफ</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 माह</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "creatine-performance": {
                title: "E. क्रिएटिन मोनोहाइड्रेट (200 मेश), BCAA, सिट्रूलीन एवं प्री-वर्कआउट्स",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. क्रिएटिन मोनोहाइड्रेट एवं फॉस्फोक्रिएटिन (PCr) एनर्जी शटल</h3>
    <p>क्रिएटिन (&alpha;-मिथाइलग्वा travelनिडिनोएसीटिक एसिड, $C_4H_9N_3O_2$) स्पोर्ट्स साइंस में सबसे अधिक शोधित और सिद्ध अर्गोजेनिक सप्लीमेंट है। मानव कंकाल की मांसपेशियों में शरीर का लगभग 95% क्रिएटिन भंडारित होता है, जिसमें से <strong>65% फॉस्फोक्रिएटिन (PCr)</strong> और 35% मुक्त क्रिएटिन ($Cr$) के रूप में रहता है।</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
        <p class="text-xs text-red-900 font-semibold">लोहमैन अभिक्रिया (Lohmann Reaction) एवं तात्कालिक ऊर्जा बफरिंग:</p>
        <p class="text-xs text-red-800 mt-1">भारी वजन उठाने (Heavy Lifting) या स्प्रिंटिंग (&le; 10 सेकंड) के दौरान मायोसिन ATPase एंजाइम ATP को अत्यधिक तीव्र गति से तोड़ता है: $ATP + H_2O ightarrow ADP + P_i + H^+ + 	ext{ऊर्जा}\\;(\\Delta G^\\circ = -30.5	ext{ kJ/mol})$। मांसपेशियों में जमा ATP ($~5	ext{--}6	ext{ mmol/kg}$) मात्र 1.5 से 2.0 सेकंड में समाप्त हो जाता है। <strong>क्रिएटिन किनेज (CK)</strong> एंजाइम फॉस्फोक्रिएटिन (PCr) से हाई-एनर्जी फॉस्फेट को ADP पर स्थानांतरित करके तात्कालिक रूप से ATP का पुनर्चक्रण करता है:</p>
        <p class="text-xs text-red-900 font-mono mt-1 text-center font-bold">ADP + PCr + H^+ &hArr; ATP + Cr &nbsp;&nbsp; (K_eq = 1.6 &times; 10^9 M^-1 at pH 7.0)</p>
        <p class="text-xs text-red-800 mt-1"><strong>माइटोकॉन्ड्रियल क्रिएटिन शटल:</strong> माइटोकॉन्ड्रिया में बनने वाला ATP <strong>माइटोकॉन्ड्रियल क्रिएटिन किनेज (CK_mit)</strong> द्वारा मुक्त क्रिएटिन को देकर PCr में बदल दिया जाता है। PCr साइटोसोल में तैरकर संकुचन स्थल पर आता है, जहां <strong>साइटोसोलिक CK</strong> दोबारा ADP को ATP में बदलकर मांसपेशी को बिना थके निरंतर अधिकतम शक्ति प्रदान करता है।</p>
    </div>

    <p class="mt-3"><strong>इंट्रासेल्युलर सैचुरेशन एवं मायोजेनिक सिग्नलिंग:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>क्रिएटिन पूल सैचुरेशन ($120 ightarrow 160	ext{ mmol/kg}$):</strong> सामान्य व्यक्ति की मांसपेशियों में क्रिएटिन लगभग $120	ext{ mmol/kg}$ होता है। <strong>20 ग्राम/दिन 5&ndash;7 दिन (लोडिंग)</strong> या <strong>3&ndash;5 ग्राम/दिन 28 दिन</strong> लेने से यह बढ़कर अपने शारीरिक शिखर $150	ext{ से }160	ext{ mmol/kg}$ (+25% से +35%) पर पहुंच जाता है।</li>
        <li><strong>सेल्यूलर ऑस्मोटिक स्वेलिंग एवं एनाबोलिक प्रभाव:</strong> क्रिएटिन मांसपेशी कोशिका में <strong>CRT (SLC6A8) ट्रांसपोर्टर</strong> द्वारा सोडियम के साथ प्रवेश करता है। इसके साथ ही पानी कोशिका के अंदर खिंचता है, जिससे मायोसाइट्स का आयतन (Cell Hydration) बढ़ता है। यह सूजन कोशिका के <strong>p38 MAPK पाथवे</strong> को सक्रिय करती है, जिससे <strong>MyoD और Myogenin</strong> जीन सक्रिय होते हैं, <strong>मायोस्टैटिन (मांसपेशी घटाने वाला हार्मोन)</strong> दब जाता है, और स्थानीय <strong>IGF-1</strong> का स्राव बढ़ जाता है जो नई मांसपेशी तंतुओं के निर्माण को गति देता है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. जलीय रासायनिक संश्लेषण एवं शुद्धता मानक (Creapure&reg; मानक बनाम विषाक्त मिलावट)</h3>
    <p>शुद्ध क्रिएटिन मोनोहाइड्रेट का निर्माण फार्मास्यूटिकल-ग्रेड रासायनिक संश्लेषण द्वारा किया जाता है। प्रक्रिया के दौरान बनने वाले विषैले उप-उत्पादों की पहचान अत्यंत महत्वपूर्ण है।</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">सायनामाइड-सारकोसिनेट सिंथेसिस पाथवे:</p>
        <p class="text-xs text-amber-800 mt-1">सोडियम सारकोसिनेट (जलीय $N$-मिथाइलग्लाइसिन सॉल्ट) की प्रतिक्रिया सायनामाइड के साथ क्षारीय माध्यम ($pH = 9.0	ext{ से }11.0$) में $70	ext{--}80^\\circ	ext{C}$ पर कराई जाती है:</p>
        <p class="text-xs text-amber-900 font-mono mt-1 text-center font-bold">NH_2-C&equiv;N (सायनामाइड) + CH_3-NH-CH_2-COONa + H_2O &rarr; C_4H_9N_3O_2&middot;H_2O (क्रिएटिन) + NaOH</p>
        <p class="text-xs text-amber-800 mt-1">प्रतिक्रिया पूर्ण होने पर स्लरी को $4^\\circ	ext{C}$ तक ठंडा करके शुद्ध क्रिएटिन क्रिस्टल्स को अलग कर वैक्यूम ड्राई किया जाता है।</p>
    </div>

    <p class="mt-3"><strong>विषाक्त अशुद्धियां एवं Creapure&reg; सुरक्षा सीमाएं:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li><strong>डाइसैंडायमाइड (DCD):</strong> गलत pH पर सायनामाइड स्वतः डाइमर बना लेता है। सस्ते एशियाई कारखानों में DCD की भारी मात्रा रह जाती है। अंतर्राष्ट्रीय मानक: <strong>DCD &lt; 50 ppm</strong> (Creapure मानक &lt; 20 ppm)।</li>
        <li><strong>डाइहाइड्रोट्रायाजीन (DHT):</strong> सायनामाइड की एसीटोन से प्रतिक्रिया होने पर बनने वाला चक्रीय विषैला यौगिक जो कैंसरजनक (कार्सिनोजेनिक) होता है। फार्मास्यूटिकल ग्रेड क्रिएटिन में <strong>DHT: Not Detectable (&lt; 3 ppm)</strong> होना अनिवार्य है।</li>
        <li><strong>क्रिएटिनिन:</strong> अत्यधिक गर्मी से क्रिएटिन का स्वतः डिग्रेडेशन। सख्त सीमा: <strong>&lt; 100 ppm</strong>।</li>
        <li><strong>200 मेश एयर-जेट माइक्रोनाइज़ेशन:</strong> साधारण क्रिएटिन 80 मेश ($180\\;\\mu	ext{m}$) का होता है जो पानी में नहीं घुलता और पेट में जमने से मरोड़ व गैस करता है। सुपरसोनिक एयर-जेट द्वारा इसे <strong>200 मेश (&le; 74 &mu;m)</strong> तक पीसा जाता है, जिससे इसका पृष्ठीय क्षेत्रफल बढ़कर $&gt; 1.2	ext{ m}^2/	ext{g}$ हो जाता है और ठंडे पानी में भी 4 गुना तेजी से घुल जाता है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. ब्रांच्ड-चेन अमीनो एसिड्स (BCAA 2:1:1) - यकृत-मुक्त मांसपेशी चयापचय</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>यकृत से मुक्ति (Extra-Hepatic Clearance):</strong> अन्य 17 अमीनो एसिड्स लीवर में टूटते हैं, किंतु मानव लीवर में <strong>BCATm</strong> एंजाइम नहीं होता। इसलिए BCAA लीवर से बिना टूटे सीधे कंकाल की मांसपेशियों में पहुंचते हैं।</li>
        <li><strong>सेंट्रल फटीग हाइपोथिसिस एवं LAT1 ट्रांसपोर्टर:</strong> लंबे वर्कआउट के दौरान मांसपेशियां ऊर्जा हेतु BCAA को जलाने लगती हैं। इससे रक्त में BCAA कम हो जाता है और मुक्त ट्रिप्टोफैन का अनुपात बढ़ जाता है। दोनों मस्तिष्क के <strong>LAT1 ट्रांसपोर्टर</strong> के लिए होड़ करते हैं। BCAA कम होने से ट्रिप्टोफैन दिमाग में घुसकर <strong>सेरोटोनिन (5-HT)</strong> बना देता है, जिससे थकान, आलस और तंत्रिका कमजोरी महसूस होती है। वर्कआउट के दौरान <strong>2:1:1 BCAA</strong> लेने से दिमाग में ट्रिप्टोफैन का प्रवेश रुक जाता है और मानसिक ताजगी बनी रहती है।</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. L-सिट्रूलीन मैलेट 2:1 एवं नाइट्रिक ऑक्साइड (NO) वासोडाइलेशन</h3>
    <div class="p-3 bg-green-50 border border-green-200 rounded-lg mt-3">
        <p class="text-xs text-green-900 font-semibold">L-सिट्रूलीन L-आर्जिनिन से श्रेष्ठ क्यों है?</p>
        <p class="text-xs text-green-800 mt-1">मुंह से लिया गया L-आर्जिनिन आंतों और लीवर में उपस्थित <strong>आर्जिनेज एंजाइम</strong> द्वारा 70% से अधिक नष्ट हो जाता है। इसके विपरीत <strong>L-सिट्रूलीन को आर्जिनेज पहचान ही नहीं पाता</strong>। यह बिना नुकसान के किडनी और रक्त वाहिकाओं की एंडोथीलियम में पहुंचता है, जहां यह <em>ASS</em> और <em>ASL</em> एंजाइमों द्वारा सीधे L-आर्जिनिन में बदल जाता है।</p>
        <p class="text-xs text-green-800 mt-1">इसके बाद <strong>eNOS एंजाइम</strong> L-आर्जिनिन को <strong>नाइट्रिक ऑक्साइड (&bull;NO)</strong> में बदलता है। NO रक्त नलिकाओं की मांसपेशियों में <strong>cGMP</strong> का निर्माण कराता है, जिससे धमनी की मांसपेशियां शिथिल हो जाती हैं और मांसपेशियों में रक्त प्रवाह (The Pump) 200% तक बढ़ जाता है। साथ ही मैलिक एसिड क्रेब्स चक्र में जाकर लैक्टिक एसिड और अमोनिया ($NH_3$) के निष्कासन को तेज करता है।</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. बीटा-एलानिन एवं कार्नोसिन एसिडोसिस बफरिंग</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li>तीव्र सेट (30 से 120 सेकंड) के दौरान हाइड्रोजन आयन ($H^+$) निकलने से मांसपेशी का pH <strong>7.1 से गिरकर 6.4</strong> हो जाता है, जिससे मांसपेशी कार्य करना बंद कर देती है।</li>
        <li><strong>कार्नोसिन बफर ($pK_a = 6.83$):</strong> बीटा-एलानिन मांसपेशियों में मौजूद हिस्टिडीन से मिलकर कार्नोसिन बनाता है। कार्नोसिन का इमिडाजोल रिंग इन अतिरिक्त $H^+$ आयनों को सोखकर pH गिरने से रोकता है। <strong>प्रतिदिन 3.2 से 6.4 ग्राम बीटा-एलानिन 4 से 8 सप्ताह लेने से मांसपेशियों में कार्नोसिन 60% से 80% बढ़ जाता है</strong>, जिससे वर्कआउट में रेप्स की संख्या और सहनशक्ति 15% से 25% बढ़ जाती है।</li>
    </ul>

    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        क्रिएटिन मोनोहाइड्रेट (200 मेश) एवं परफॉर्मेंस अमीनो — संश्लेषण फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">7-चरणीय जलीय संश्लेषण, DCD/DHT विषाक्तता निष्कासन, एयर-जेट माइक्रोनाइजेशन एवं पैकेजिंग फ्लोचार्ट (CCPs सहित)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-चरणीय क्रिएटिन CCP फ्लोचार्ट
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
                    क्रिएटिन मोनोहाइड्रेट का जलीय रासायनिक संश्लेषण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">रासायनिक संश्लेषण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">सोडियम सारकोसिनेट और सायानामाइड की 80°C और pH 9.0–10.0 पर जलीय माध्यम में अभिक्रिया। सटीक स्टॉइकोमेट्रिक अनुपात से 94% से अधिक क्रिएटिन में रूपांतरण बिना अवांछित उप-उत्पादों के।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कच्चा माल</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">सोडियम सारकोसिनेट + सायानामाइड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रतिक्रिया तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">80°C ± 2°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 9.0 – 10.0</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">रूपांतरण उपज</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 94%</strong></div></div>
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
                    क्रिस्टलीकरण एवं DCD / DHT विषाक्त अशुद्धियों का निष्कासन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: विषाक्तता निष्कासन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल को नियंत्रित गति से 5°C तक ठंडा करके शुद्ध क्रिएटिन क्रिस्टल्स बनाना। मदर लिकर में मौजूद डाइसायानामाइड (DCD < 50 ppm), डाइहाइड्रोट्रायजीन (DHT < 3 ppm, कैंसरकारी) और क्रिएटिनिन (< 100 ppm) को धोकर बाहर निकालना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ठंडा करने की गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.5°C/मिनट से 5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DCD अशुद्धि</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 ppm (क्रीप्योर मानक)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DHT अशुद्धि</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3 ppm (कैंसरकारी शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्रिएटिनिन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 100 ppm</strong></div></div>
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
                    अपकेंद्री पृथक्करण, RO धुलाई एवं वैक्यूम सुखाना
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">निर्जलीकरण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">हाई-स्पीड बास्केट सेंट्रीफ्यूज द्वारा क्रिस्टल्स अलग करना, ठंडे RO पानी से धोना और वैक्यूम पैडल ड्रायर में 60°C पर सुखाना जब तक कि क्रिस्टल में ठीक 1 मोल क्रिस्टल जल (12.1%) न रह जाए।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अपकेंद्री बल</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1,500 × g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">धुलाई जल</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ठंडा शुद्ध RO</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सुखाने का तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C वैक्यूम</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्रिस्टल जल</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1 मोल H₂O (मोनोहाइड्रेट)</strong></div></div>
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
                    एयर-जेट माइक्रोनाइजेशन (200 मेश / < 74 µm)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">माइक्रोनाइजेशन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">सूखे क्रिस्टल्स को हाई-प्रेशर एयर-जेट माइक्रोनाइजर से गुजारना। विपरीत दिशा से आने वाली नाइट्रोजन हवा के झोंकों से क्रिस्टल्स को 200 मेश (< 74 माइक्रोन) के अति-सूक्ष्म पाउडर में पीसना, जिससे यह पानी में तुरंत घुल जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">माइक्रोनाइजर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">फ्लुइडाइज्ड एयर-जेट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कण आकार लक्ष्य</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">200 मेश (< 74 µm)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">औसत आकार d50</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">35 – 45 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घुलनशीलता गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 20 सेकंड</strong></div></div>
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
                    फर्मेंटेशन आधारित BCAA एवं सिट्रूलीन का निर्माण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">अमीनो ब्लेंडिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">100% शाकाहारी बैक्टीरियल फर्मेंटेशन (Corynebacterium glutamicum) से बने BCAA (ल्यूसीन, आइसोल्यूसीन, वेलिन 2:1:1) को L-सिट्रूलीन मैलेट (2:1 अनुपात) और बीटा-एलानिन के साथ मिलाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">BCAA अनुपात</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2 : 1 : 1 (शाकाहारी फर्मेंटेड)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सिट्रूलीन बॉन्ड</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2:1 सिट्रूलीन : मैलिक एसिड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बीटा-एलानिन शुद्धता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 99.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">भारी धातुएं</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 ppm</strong></div></div>
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
                    डीह्यूमिडिफाइड क्लीनरूम ब्लेंडिंग (RH < 35%)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: नमी नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">क्रिएटिन, BCAA और सिट्रूलीन नमी सोखने वाले (hygroscopic) होते हैं। इन्हें ISO Class 7 क्लीनरूम में कम नमी (RH < 35%, ड्यू पॉइंट < 4°C) पर V-ब्लेंडर में सिलिका एंटी-केकिंग एजेंट के साथ मिलाया जाता है ताकि पाउडर में ढेले न पड़ें।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कमरे की नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 35% RH शुष्क वातावरण</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लीनरूम क्लास</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंटी-केकिंग</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">सिलिका डाइऑक्साइड < 1.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ब्लेंडर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">V-ब्लेंडर</strong></div></div>
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
                    इंडक्शन-सील्ड पैकेजिंग एवं HPLC शुद्धता रिलीज
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: शुद्धता रिलीज</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">UV-प्रोटेक्टेड जार में सिलिका पाउच सहित भरना। इंडक्शन फॉयल सीलिंग। अंतिम बैच रिलीज से पहले HPLC जांच द्वारा ≥ 99.9% शुद्ध क्रिएटिन मोनोहाइड्रेट और शून्य प्रतिबंधित दवाओं का प्रयोगशाला प्रमाणन।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">HPLC शुद्धता जांच</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 99.9% मोनोहाइड्रेट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डेसिकेंट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">फूड-ग्रेड सिलिका पाउच</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इंडक्शन सील</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% एयरटाइट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शेल्फ लाइफ</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">36 माह</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "quality-antidoping": {
                title: "F. गुणवत्ता नियंत्रण, वाडा (WADA) डोपिंग रोधी जांच एवं अमीनो स्पाइकिंग",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. नाइट्रोजन परीक्षण की खामी एवं "अमीनो स्पाइकिंग" आर्थिक धोखाधड़ी</h3>
    <p>स्पोर्ट्स सप्लीमेंट्स बाजार में सबसे खतरनाक और अदृश्य धोखाधड़ी <strong>"अमीनो स्पाइकिंग" (Amino Spiking / प्रोटीन स्पाइकिंग)</strong> है। बेईमान निर्माता सरकारी प्रयोगशालाओं की नाइट्रोजन जांच की वैज्ञानिक सीमाओं का फायदा उठाकर डिब्बे पर प्रोटीन की फर्जी अधिक मात्रा दिखा देते हैं।</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
        <p class="text-xs text-red-900 font-semibold">केल्डाहल एवं ड्यूमास विधियों (Kjeldahl / Dumas) की मूल वैज्ञानिक खामी:</p>
        <p class="text-xs text-red-800 mt-1">सरकारी व मानक खाद्य प्रयोगशालाएं कुल नाइट्रोजन ($N_{total}$) को मापकर उसे जोन्स रूपांतरण गुणांक (<strong>6.25</strong>) से गुणा करती हैं (यह मानकर कि प्रोटीन में औसतन 16% नाइट्रोजन होता है: $100 / 16 = 6.25$):</p>
        <p class="text-xs text-red-900 font-mono mt-1 text-center font-bold">प्रकट क्रूड प्रोटीन (%) = कुल मापी गई नाइट्रोजन (%) &times; 6.25</p>
        <p class="text-xs text-red-800 mt-1"><strong>धोखाधड़ी का गणित:</strong> असली WPC-80 कच्चा माल महंगा होता है, जबकि सस्ते गैर-प्रोटीन नाइट्रोजन (NPN) यौगिक या सस्ते अमीनो एसिड्स बहुत सस्ते होते हैं। क्योंकि केल्डाहल या ड्यूमास मशीन यह नहीं बता सकती कि नाइट्रोजन असली व्हे से आ रहा है या सस्ते पाउडर से, निम्न मिलावट की जाती है:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-red-800 mt-1">
            <li><strong>मुक्त L-ग्लाइसिन ($C_2H_5NO_2$):</strong> इसमें <strong>18.66% नाइट्रोजन</strong> होता है। $18.66 	imes 6.25 =$ <strong>116.6% "प्रोटीन"!</strong> डिब्बे में 10 ग्राम ग्लाइसिन मिलाने पर टेस्ट में वह 11.7 ग्राम असली प्रोटीन दिखेगा!</li>
            <li><strong>L-टॉरिन ($C_2H_7NO_2S$):</strong> इसमें <strong>11.19% नाइट्रोजन</strong> होता है (70% प्रोटीन रीडिंग)।</li>
            <li><strong>क्रिएटिन मोनोहाइड्रेट:</strong> इसमें <strong>28.18% नाइट्रोजन</strong> होता है (<strong>176.1% प्रोटीन रीडिंग!</strong>)। 5 ग्राम सस्ता क्रिएटिन मिलाने पर टेस्ट में 9 ग्राम अतिरिक्त व्हे प्रोटीन की रीडिंग आ जाती है।</li>
            <li><strong>मेलामाइन ($C_3H_6N_6$):</strong> <strong>66.6% नाइट्रोजन!</strong> (416% प्रोटीन रीडिंग)। यह गुर्दे में अघुलनशील क्रिस्टल बनाकर किडनी को पूरी तरह फेल कर देता है।</li>
        </ul>
    </div>

    <p class="mt-3"><strong>फोरेंसिक समाधान: स्वचालित UPLC अमीनो एसिड प्रोफाइलिंग (AOAC 994.12):</strong></p>
    <p class="text-xs text-gray-700">अमीनो स्पाइकिंग को पकड़ने हेतु रिवर्स-फेज UPLC का उपयोग किया जाता है। असली व्हे में अमीनो एसिड्स का एक अपरिवर्तनीय प्राकृतिक फिंगरप्रिंट होता है:</p>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">अमीनो एसिड मार्कर</th>
                    <th class="p-2 border">शुद्ध असली व्हे प्रोटीन का स्तर</th>
                    <th class="p-2 border">स्पाइक्ड / मिलावटी नमूने की पहचान</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>L-ग्लाइसिन</strong></td><td class="p-2 border"><strong>1.4% &ndash; 1.9%</strong></td><td class="p-2 border">&gt; 3.0% (ग्लाइसिन स्पाइकिंग का पक्का प्रमाण)</td></tr>
                <tr><td class="p-2 border"><strong>L-ल्यूसीन</strong></td><td class="p-2 border"><strong>10.5% &ndash; 12.0%</strong></td><td class="p-2 border">&lt; 8.5% (सस्ते फिलर्स की मिलावट)</td></tr>
                <tr><td class="p-2 border"><strong>कुल BCAA (Leu, Ile, Val)</strong></td><td class="p-2 border"><strong>21.0% &ndash; 24.5%</strong></td><td class="p-2 border">&lt; 18.0% (प्रोटीन में कटौती का संकेत)</td></tr>
                <tr><td class="p-2 border"><strong>L-टॉरिन</strong></td><td class="p-2 border"><strong>शून्य / नगण्य (&lt; 0.05%)</strong></td><td class="p-2 border">&gt; 0.5% (मुक्त टॉरिन मिलावट का प्रमाण)</td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. WADA प्रतिबंधित सूची एवं एंटी-डोपिंग स्क्रीन: Orbitrap LC-MS/MS</h3>
    <p>राष्ट्रीय व अंतर्राष्ट्रीय एथलीटों को डोप टेस्ट में प्रतिबंधित दवाओं से बचाने हेतु थर्ड-पार्टी सर्टिफिकेशन (Informed-Choice, NSF Certified for Sport) द्वारा <strong>हाई-रिजॉल्यूशन ऑर्बिट्रैप मास स्पेक्ट्रोमेट्री (Orbitrap LC-MS/MS)</strong> से जांच अनिवार्य होती है।</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
        <p class="text-xs text-indigo-900 font-semibold">ऑर्बिट्रैप एनालिटिकल स्टैंडर्ड (रिजॉल्यूशन &gt; 70,000 FWHM):</p>
        <p class="text-xs text-indigo-800 mt-1">यह उपकरण पार्ट्स-पर-बिलियन (ppb / &mu;g/kg) के अति-सूक्ष्म स्तर पर <strong>280 से अधिक वाडा (WADA) प्रतिबंधित दवाओं</strong> की जांच करता है:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li><strong>एनाबोलिक एंड्रोजेनिक स्टेरॉयड (AAS):</strong> नैंड्रोलोन, स्टैनोज़ोलोल, डायनाबोल, बोल्डिनोन ($LOD &lt; 5	ext{ ppb}$)।</li>
            <li><strong>SARMs (सिलेक्टिव एंड्रोजन रिसेप्टर मॉड्यूलेटर):</strong> ओस्टारिन (MK-2866), लिगैंड्रोल (LGD-4033), RAD-140 ($LOD &lt; 1	ext{ ppb}$)।</li>
            <li><strong>बीटा-2 एगोनिस्ट्स:</strong> क्लेनब्यूटिरोल ($LOD &lt; 0.1	ext{ ppb}$), साल्ब्यूटामोल।</li>
            <li><strong>उत्तेजक (Stimulants):</strong> DMAA, DMBA, एफेड्रिन, सिब्यूट्रामाइन ($LOD &lt; 10	ext{ ppb}$)।</li>
        </ul>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. विषैली भारी धातुओं की जांच: ICP-MS सीमाएं (FSSAI 2022)</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">भारी धातु (Heavy Metal)</th>
                    <th class="p-2 border">शारीरिक दुष्प्रभाव</th>
                    <th class="p-2 border">FSSAI 2022 वैधानिक सीमा</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>सीसा (Lead - Pb)</strong></td><td class="p-2 border">न्यूरोटॉक्सिन; मस्तिष्क व तंत्रिका तंत्र को हानि।</td><td class="p-2 border"><strong>&le; 2.5 mg/kg (ppm)</strong></td></tr>
                <tr><td class="p-2 border"><strong>कैडमियम (Cadmium - Cd)</strong></td><td class="p-2 border">गुर्दे की खराबी व हड्डियों की कमजोरी। चॉकलेट कोको पाउडर में सामान्य।</td><td class="p-2 border"><strong>&le; 1.5 mg/kg (ppm)</strong></td></tr>
                <tr><td class="p-2 border"><strong>आर्सेनिक (Arsenic - As)</strong></td><td class="p-2 border">कार्सिनोजेनिक विषैलता। राइस प्रोटीन व सिरप में जोखिम।</td><td class="p-2 border"><strong>&le; 1.1 mg/kg (ppm)</strong></td></tr>
                <tr><td class="p-2 border"><strong>पारा (Mercury - Hg)</strong></td><td class="p-2 border">केंद्रीय तंत्रिका तंत्र विषाक्तता।</td><td class="p-2 border"><strong>&le; 0.25 mg/kg (ppm)</strong></td></tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. भौतिक घुलनशीलता (Dissolution) एवं माइक्रोबायोलॉजिकल परीक्षण</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>पाउडर घुलनशीलता व प्रवाह क्षमता:</strong>
            <br>&bull; <em>वेटेबिलिटी (Wettability - IDF 87):</em> 20&deg;C पानी में 10 ग्राम पाउडर को डूबने में लगा समय: <strong>&lt; 30 सेकंड</strong> (0.6% सनफ्लावर लेसिथिन एग्लोमरेशन द्वारा संभव)।
            <br>&bull; <em>डिस्पर्सिबिलिटी (Dispersibility):</em> 20 सेकंड शेक करने पर <strong>&gt; 96.0%</strong> पूर्ण घुलनशीलता।
            <br>&bull; <em>हॉसनर रेशियो (Hausner Ratio):</em> $
ho_{tapped} / 
ho_{bulk}$ का मान <strong>1.12 से 1.18</strong> होना चाहिए, जो स्वचालित जार फिलिंग मशीनों में फ्री-फ्लो सुनिश्चित करता है।
        </li>
        <li><strong>सूक्ष्मजैविक सुरक्षा मानक (ISO 6579 / FSSAI):</strong>
            <br>&bull; <em>साल्मोनेला (Salmonella):</em> <strong>375g में पूर्णतः अनुपस्थित (Negative)</strong>।
            <br>&bull; <em>लिस्टेरिया (Listeria monocytogenes):</em> <strong>25g में पूर्णतः अनुपस्थित</strong>।
            <br>&bull; <em>ई-कोलाई (E. coli):</em> <strong>&lt; 10 CFU/g</strong>।
            <br>&bull; <em>टोटल प्लेट काउंट (TPC):</em> <strong>&lt; 10,000 CFU/g</strong>।
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
                        गुणवत्ता नियंत्रण, वाडा (WADA) डोपिंग रोधी एवं अमीनो स्पाइकिंग जांच — फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">6-चरणीय HPLC ट्रू प्रोटीन, Orbitrap LC-MS/MS एंटी-डोपिंग एवं ICP-MS भारी धातु रिलीज फ्लोचार्ट</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-चरणीय गुणवत्ता एवं डोपिंग CCP फ्लोचार्ट
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
                    आवक कच्ची सामग्री सैंपलिंग (MIL-STD-105E मानक)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: कच्चा माल जांच</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्टेराइल ट्रायर द्वारा MIL-STD-105E लेवल II के अनुसार प्रतिनिधि नमूने लेना। जब तक सभी पहचान, माइक्रोबायोलॉजी और रासायनिक परीक्षण पास नहीं होते, पूरा लॉट ERP सिस्टम में क्वारंटाइन (लॉक) रहता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सैंपलिंग मानक</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">MIL-STD-105E लेवल II</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्वारंटाइन स्थिति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ERP सिस्टम लॉक्ड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पहचान जांच</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">FTIR स्पेक्ट्रल मैच > 0.98</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नमी परीक्षण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">कार्ल फिशर < 4.0%</strong></div></div>
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
                    अमीनो स्पाइकिंग डिटेक्शन (Dumas vs Kjeldahl vs HPLC)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: अमीनो स्पाइकिंग जांच</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">कुल नाइट्रोजन की तुलना HPLC/UPLC अमीनो एसिड प्रोफाइलिंग (AOAC 994.12) से करना। यह तकनीक प्रत्येक अमीनो एसिड की अलग-अलग जांच करती है और मुफ्त ग्लाइसिन, टॉरिन या क्रिएटिन की मिलावट को तुरंत पकड़ लेती है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ट्रू प्रोटीन जांच</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">HPLC निनहाइड्रिन (AOAC)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नाइट्रोजन परीक्षण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Dumas कम्बशन तकनीक</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्पाइकिंग जांच</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ग्लाइसिन/टॉरिन पीक डिटेक्शन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्वीकार्य अंतर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5% टॉलरेंस</strong></div></div>
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
                    WADA प्रतिबंधित दवाएं स्क्रीन (Informed-Choice प्रोटोकॉल)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: एंटी-डोपिंग जांच</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">हाई-रेज़ोल्यूशन Orbitrap LC-MS/MS और GC-MS/MS द्वारा विश्व डोपिंग रोधी एजेंसी (WADA) की 280 से अधिक प्रतिबंधित दवाओं (स्टेरॉयड, SARMs, क्लेनब्यूटेरोल, DMAA स्टिमुलेंट्स) की सब-नैनोग्राम (< 10 ppb) स्तर पर जांच।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">उपकरण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">हाई-रेज़ Orbitrap LC-MS/MS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">परीक्षण रसायन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 280 WADA प्रतिबंधित दवाएं</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डिटेक्शन सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 ppb (नैनोग्राम स्तर)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रमाणन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Informed-Choice / Sport</strong></div></div>
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
                    ICP-MS द्वारा भारी धातुओं (लेड, आर्सेनिक) का परीक्षण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: भारी धातुएं</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">माइक्रोवेव एसिड डाइजेशन के बाद ICP-MS तकनीक द्वारा विषैली भारी धातुओं की जांच: लेड (Pb ≤ 0.5 ppm), कैडमियम (Cd ≤ 0.3 ppm), आर्सेनिक (As ≤ 0.5 ppm) और मर्करी (Hg ≤ 0.1 ppm) FSSAI 2022 नियमों के तहत।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लेड (Lead)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.5 mg/kg (ppm)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कैडमियम (Cadmium)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.3 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आर्सेनिक (Arsenic)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.5 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पारा (Mercury)</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 0.1 mg/kg</strong></div></div>
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
                    माइक्रोबायोलॉजिकल पैथोजेन परीक्षण (ISO मानक)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: माइक्रोबायोलॉजी</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">कुल बैक्टीरिया काउंट (< 1,000 CFU/g), यीस्ट व मोल्ड (< 50 CFU/g)। स्वचालित VIDAS / रीयल-टाइम PCR द्वारा साल्मोनेला (25 ग्राम में शून्य), ई-कोलाई (10 ग्राम में शून्य) और स्टेफिलोकोकस का शून्य होना प्रमाणित करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कुल बैक्टीरिया</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1,000 CFU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">यीस्ट एवं मोल्ड</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 CFU/g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">साल्मोनेला</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">25 ग्राम में अनुपस्थित (शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ई-कोलाई</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 ग्राम में अनुपस्थित (शून्य)</strong></div></div>
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
                    सर्टिफिकेट ऑफ एनालिसिस (CoA) एवं लॉट रिलीज
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">अंतिम रिलीज</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">प्रत्येक बैच के लिए क्यूआर-कोड युक्त डिजिटल सर्टिफिकेट ऑफ एनालिसिस (CoA) जारी करना ताकि उपभोक्ता लैब रिपोर्ट स्वयं देख सके। ERP सिस्टम द्वारा लॉट को पैकेजिंग और बिक्री के लिए रिलीज करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सर्टिफिकेट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">डिजिटल बैच QR कोड CoA</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ERP स्थिति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">गुणवत्ता प्रमाणित रिलीज</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नमूना प्रतिधारण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">36 माह तक सुरक्षित</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ट्रेसेबिलिटी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% फार्म-टू-जार</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            }
        }
    }
};
