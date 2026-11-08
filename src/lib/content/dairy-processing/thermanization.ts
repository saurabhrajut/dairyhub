export const thermanizationContent = {
    en: {
        title: "Thermanization of Fermented Products",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Introduction to Thermanization of Fermented Products</h3>
            <p><strong>Thermanization</strong> (also widely known as <em>Thermization of Fermented Products</em>, <em>Post-Fermentation Heat Treatment</em>, or <em>Post-Fermentation Pasteurization</em>) is a specialized thermal process applied to liquid fermented dairy products—such as Buttermilk (Chaas), Lassi, Laban, Kefir, and Drinking Yoghurt—after fermentation, curd breaking, and stabilization. It involves heating the cultured liquid to temperatures typically between <strong>68°C and 74°C for 15 to 30 seconds</strong> (or up to 80°C–85°C for ambient shelf-stable beverages), followed by immediate chilling or hot-filling.</p>
            <p class="mt-2">In traditional dairy processing, fermented beverages contain live starter cultures (Lactic Acid Bacteria or LAB). While live cultures are nutritionally desirable, they continue to ferment lactose into lactic acid even under cold storage—a phenomenon known as <strong>post-acidification</strong>. This plunges the product pH below 3.9, resulting in aggressive whey separation (syneresis), protein curdling, harsh sourness, and a short shelf life of just 3 to 5 days. Thermanization halts post-acidification by destroying active starter cultures, yeasts, and molds, extending product shelf life from days to <strong>30 to 120 days</strong>.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Thermanization vs. Raw Milk Thermization</h4>
            <p>It is crucial to distinguish between two distinct processes in the dairy industry that share similar terminology:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Raw Milk Thermization:</strong> Sub-pasteurization heat treatment (63°C–65°C for 15 seconds) applied to raw milk immediately upon reception. Its sole purpose is to destroy heat-sensitive psychrotrophic bacteria (e.g., <i>Pseudomonas</i> spp.) prior to cold storage before main processing. Milk pH is normal (~6.7), and no cultures are present.</li>
                <li><strong>Post-Fermentation Thermanization:</strong> Heat treatment applied to an acidic fermented milk system (pH 3.8–4.4) after culturing. Its objective is to inactivate starter culture bacteria and spoilage microflora, creating extended shelf-life (ESL) or ambient-stable beverages.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Biological Inactivation Kinetics & Microbiology</h3>
            <p>The microbial target of post-fermentation thermanization differs from standard milk pasteurization:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Inactivation of Starter Cultures:</strong> Active starter organisms—such as <i>Lactococcus lactis</i> subsp. <i>lactis</i>, <i>Lactococcus lactis</i> subsp. <i>cremoris</i>, <i>Streptococcus thermophilus</i>, and <i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i>—have D-values at 70°C (D<sub>70°C</sub>) ranging from 0.1 to 0.3 minutes (6–18 seconds). Heating at 72°C for 15 seconds achieves a <strong>&gt;6-log (99.9999%) reduction</strong> in active LAB count, reducing populations from &gt;10<sup>8</sup> CFU/ml to &lt;10<sup>1</sup> CFU/ml. This effectively freezes lactic acid production.</li>
                <li><strong>Destruction of Yeasts & Molds:</strong> Fermented beverages are particularly susceptible to spoilage by acid-tolerant yeasts (e.g., <i>Saccharomyces cerevisiae</i>, <i>Kluyveromyces marxianus</i>) and molds (<i>Penicillium</i>, <i>Aspergillus</i>). Yeasts have a D<sub>65°C</sub> of less than 5 seconds. Thermanization guarantees complete destruction of vegetative yeasts and molds, preventing container bloating, gas production, and off-flavors.</li>
                <li><strong>Enzyme Inactivation:</strong> Inactivates residual bacterial proteases and lipases that could otherwise degrade milk proteins and fats during extended storage.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. Colloidal Chemistry & Stabilizer Science</h3>
            <p>Heating an acidic milk gel (pH &lt; 4.6) causes severe thermodynamic instability due to the behavior of casein proteins:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Casein Micelle Demineralization & Isoelectric Point (pI 4.6):</strong> At native milk pH (6.7), casein micelles possess a net negative surface charge (-20 mV) and steric stabilization provided by κ-casein. As fermentation lowers the pH below 4.6, colloidal calcium phosphate (CCP) dissolves completely, and net surface charge drops to zero. Caseins aggregate into a three-dimensional gel network.</li>
                <li><strong>Thermal Syneresis & Graininess:</strong> Heating this acid gel above 60°C intensifies hydrophobic interactions between casein clusters. The protein network contracts violently, squeezing out serum water (<strong>syneresis</strong>) and clumping into large, gritty aggregates (&gt;25–50 µm).</li>
                <li><strong>High Methoxyl Pectin (HMP) Stabilization Mechanism:</strong> To render the acidic protein system heat-stable, High Methoxyl Pectin (HMP) with a degree of esterification &gt;65% is added:
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-1">
                        <li><em>Electrostatic Association:</em> Below pI 4.6, casein carries a net positive charge. Un-esterified carboxylate groups (-COO⁻) on HMP bind electrostatically to positively charged residues on casein surfaces.</li>
                        <li><em>Steric Repulsion:</em> Neutral sugar side-chains (galactan and arabinan) of HMP extend 15–20 nm into the serum phase, creating a hydrophilic protective cushion. When two casein particles approach during heating, the overlapping pectin chains generate steric repulsion, preventing collision and aggregation.</li>
                    </ol>
                </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. Thermanization Process Flowchart & Line Diagram</h3>
            <p>The operational sequence of a commercial thermanization plant is illustrated below:</p>


            <div class="my-6 border border-rose-200 rounded-xl overflow-hidden shadow-sm bg-gradient-to-b from-rose-50/40 to-white p-4">
                <div class="text-xs font-bold uppercase tracking-wider text-rose-800 text-center mb-4">Thermanization Industrial Line Flowchart (11 Steps & Critical Control Points)</div>
                <div class="space-y-3 font-sans text-xs">
                    <!-- Step 1 -->
                    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">1</span>
                            <div>
                                <strong class="text-blue-900 text-sm">Raw Milk Reception & Standardization</strong>
                                <p class="text-gray-600 text-xs">Testing antibiotic-free milk, fat & SNF standardizing</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">Fat: 0.5–3.0%</span>
                            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">SNF: 7.5–8.5%</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">PRP-1</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 2 -->
                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0">2</span>
                            <div>
                                <strong class="text-indigo-900 text-sm">High-Heat Base Pasteurization & Denaturation</strong>
                                <p class="text-gray-600 text-xs">High-heat holding for &gt;85% β-lactoglobulin denaturation</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">85°C–90°C / 5 min</span>
                            <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">κ-Casein Complex</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 3 -->
                    <div class="p-3 bg-purple-50 border border-purple-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">3</span>
                            <div>
                                <strong class="text-purple-900 text-sm">Base Homogenization & Chilling to Fermentation Temp</strong>
                                <p class="text-gray-600 text-xs">Fat globule sub-micron reduction (&lt;1 µm) to prevent creaming</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded border border-purple-200">150 bar</span>
                            <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Chilled: 42°C (or 30°C)</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 4 -->
                    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">4</span>
                            <div>
                                <strong class="text-emerald-900 text-sm">Starter Culture Inoculation & Fermentation</strong>
                                <p class="text-gray-600 text-xs">Aseptic DVS culture addition in sanitary jacketed vat</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">Target pH: 4.1–4.3</span>
                            <span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">DVS LAB</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 5 -->
                    <div class="p-3 bg-teal-50 border border-teal-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs shrink-0">5</span>
                            <div>
                                <strong class="text-teal-900 text-sm">Curd Breaking, Low-Shear Agitation & Sterile Water Dilution</strong>
                                <p class="text-gray-600 text-xs">Slow sweep/anchor agitation & sterile RO water blending for Chaas</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-teal-100 text-teal-800 px-2 py-0.5 rounded border border-teal-200">20–30 RPM</span>
                            <span class="bg-teal-100 text-teal-800 px-2 py-0.5 rounded border border-teal-200">RO Water 1:1</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-3</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 6 -->
                    <div class="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-yellow-600 text-white font-bold flex items-center justify-center text-xs shrink-0">6</span>
                            <div>
                                <strong class="text-yellow-950 text-sm">High-Shear Stabilizer Slurry Addition (HMP + CMC)</strong>
                                <p class="text-gray-600 text-xs">Pre-hydrated High Methoxyl Pectin dosing at 45°C–50°C</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-yellow-100 text-yellow-900 px-2 py-0.5 rounded border border-yellow-300">HMP: 0.25–0.40%</span>
                            <span class="bg-yellow-100 text-yellow-900 px-2 py-0.5 rounded border border-yellow-300">CMC: 0.10–0.15%</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-1</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 7 -->
                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs shrink-0">7</span>
                            <div>
                                <strong class="text-amber-950 text-sm">Post-Fermentation 2-Stage Homogenization</strong>
                                <p class="text-gray-600 text-xs">Dispersing casein clusters to d₄,₃ &lt; 5 µm for silky smooth mouthfeel</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">Total: 150 bar (120 + 30)</span>
                            <span class="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">d₄,₃ &lt; 5 µm</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-2</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 8: CCP-1 -->
                    <div class="p-3 bg-red-100 border-2 border-red-500 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0">8</span>
                            <div>
                                <div class="flex items-center gap-2">
                                    <strong class="text-red-950 text-sm">HTST Thermanizer & Holding Tube</strong>
                                    <span class="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">CCP-1</span>
                                </div>
                                <p class="text-red-800 text-xs">&gt;6-log LAB kill & total destruction of vegetative yeasts & molds</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-red-200 text-red-950 px-2 py-0.5 rounded border border-red-300 font-bold">68°C–74°C / 15–30 sec</span>
                            <span class="bg-red-200 text-red-950 px-2 py-0.5 rounded border border-red-300">&gt;6-log Lethality</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 9 -->
                    <div class="p-3 bg-orange-50 border border-orange-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-xs shrink-0">9</span>
                            <div>
                                <strong class="text-orange-950 text-sm">Flow Diversion Valve (FDV) Automatic Safety Divert</strong>
                                <p class="text-gray-600 text-xs">Pneumatic divert back to balance tank if temperature drops &lt; 68.0°C</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded border border-orange-300">Cut-off: &lt; 68.0°C</span>
                            <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded border border-orange-300">Response &lt; 0.5s</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 10 -->
                    <div class="p-3 bg-cyan-50 border border-cyan-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-xs shrink-0">10</span>
                            <div>
                                <strong class="text-cyan-950 text-sm">Regeneration & Chilled Water Cooling</strong>
                                <p class="text-gray-600 text-xs">85% heat energy recovery & rapid cooling to arrest spore germination</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded border border-cyan-300">Regen: 85%</span>
                            <span class="bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded border border-cyan-300">Chilled: ≤ 4°C</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-4</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 11: CCP-2 -->
                    <div class="p-3 bg-slate-100 border-2 border-slate-600 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs shrink-0">11</span>
                            <div>
                                <div class="flex items-center gap-2">
                                    <strong class="text-slate-950 text-sm">Aseptic Buffer Tank & Packaging (Filling & Sealing)</strong>
                                    <span class="bg-slate-800 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">CCP-2</span>
                                </div>
                                <p class="text-slate-700 text-xs">Positive sterile air buffer tank & hermetic aseptic pouch/bottle sealing</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-slate-200 text-slate-900 px-2 py-0.5 rounded border border-slate-300 font-bold">100% Leak-Free</span>
                            <span class="bg-slate-200 text-slate-900 px-2 py-0.5 rounded border border-slate-300">Shelf Life: 30–120 Days</span>
                        </div>
                    </div>
                </div>
            </div>


            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>Raw Milk Reception & Standardization:</strong> Raw milk is tested and standardized to exact fat (0.5%–3.0%) and SNF (7.5%–8.5%) levels depending on whether the end-product is spiced buttermilk (chaas) or sweet lassi. <strong>Scientific Reason:</strong> Proper fat-to-SNF ratios ensure consistent viscosity, surface tension, and mouthfeel post-thermanization.</li>
                <li><strong>High-Heat Base Pasteurization & Denaturation:</strong> The standardized milk base is pasteurized at high temperatures (85°C–90°C for 5 minutes or 95°C for 5 minutes). <strong>Scientific Reason:</strong> High heat denatures &gt;85% of whey proteins (specifically β-lactoglobulin), forming a complex with κ-casein on micelle surfaces. This complex significantly increases the water-holding capacity of the milk gel during subsequent fermentation, reducing native syneresis.</li>
                <li><strong>Base Homogenization & Chilling:</strong> Milk is homogenized at 150 bar (45°C–55°C) to reduce fat globule diameter to &lt;1 µm and cooled to incubation temperature (42°C for thermophilic culture or 30°C for mesophilic culture). <strong>Scientific Reason:</strong> Homogenization coats fat globules with casein fragments, creating a uniform emulsion that prevents cream lining during incubation.</li>
                <li><strong>Starter Culture Inoculation & Fermentation:</strong> Pure DVS (Direct Vat Set) starter culture is added under aseptic conditions. Fermentation proceeds in sanitary jacketed tanks until the target pH of 4.1 to 4.3 is reached. <strong>Scientific Reason:</strong> Stopping fermentation at pH 4.1–4.3 ensures optimum flavor development (diacetyl/acetaldehyde) while preventing over-acidification below pH 3.9, which would destabilize pectin binding.</li>
                <li><strong>Curd Breaking & Water Dilution:</strong> The coagulated curd is gently broken using slow-speed anchor agitators (20–30 RPM). For buttermilk (chaas), microbiologically sterile RO water is blended in (1:1 ratio). <strong>Scientific Reason:</strong> Low-shear breaking prevents air incorporation, which could cause oxidative off-flavors and whey separation.</li>
                <li><strong>High-Shear Stabilizer Slurry Addition:</strong> Pre-hydrated HMP pectin (0.25%–0.40% w/w) and CMC (0.10%–0.15% w/w) slurry (prepared in warm water at 60°C under high shear at 2900 RPM) is metered into the fermented liquid at 45°C–50°C. <strong>Scientific Reason:</strong> Pectin must be fully hydrated and uncoiled in solution before entering the thermanizer so that it can immediately form protective electrostatic layers around casein particles upon heating.</li>
                <li><strong>Post-Fermentation 2-Stage Homogenization:</strong> The stabilized mixture passes through a 2-stage homogenizer at 150 bar (Stage 1: 120 bar, Stage 2: 30 bar). <strong>Scientific Reason:</strong> High-pressure homogenization disrupts aggregated casein clusters, reducing particle size diameter (d₄,₃) to &lt;5 µm and ensuring uniform pectin distribution over all protein surfaces.</li>
                <li><strong>HTST Thermanizer & Holding Tube (CCP-1):</strong> The liquid enters a Plate Heat Exchanger (PHE) or Tubular Heat Exchanger (THE), is heated to 68°C–74°C, and held for 15–30 seconds in an upward-sloped holding tube. <strong>Scientific Reason:</strong> This is Critical Control Point 1 (CCP-1). It delivers the exact thermal lethality required to destroy active LAB starter cultures (&gt;6-log kill) and vegetative spoilage yeasts/molds, preventing post-pack acidification.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> A 3-way pneumatic safety valve at the holding tube outlet continuously monitored by a dual RTD sensor. <strong>Scientific Reason:</strong> If product temperature drops below 68.0°C, the FDV instantly diverts flow back to the balance tank, guaranteeing that no under-thermanized product ever reaches packaging.</li>
                <li><strong>Regeneration & Chilled Water Cooling:</strong> The thermanized product transfers heat to incoming cold liquid in the regenerator (85% energy recovery) and is rapidly chilled to ≤4°C using chilled water. <strong>Scientific Reason:</strong> Rapid cooling prevents thermal degradation of flavor compounds and keeps any heat-resistant bacterial spores dormant.</li>
                <li><strong>Aseptic Buffer Tank & Packaging (CCP-2):</strong> Chilled product is held in an aseptic buffer tank under positive sterile air pressure and filled into aseptic pouches, ESM cartons, or PET bottles. <strong>Scientific Reason:</strong> Critical Control Point 2 (CCP-2) ensures zero post-processing contamination (PPC) and airtight sealing, enabling a shelf life of 30 to 120 days.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">V. Prerequisite Programs (PRPs)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-indigo-50 font-bold text-indigo-900">
                            <th class="border border-gray-200 p-2">PRP Category</th>
                            <th class="border border-gray-200 p-2">Standard Operational Requirement</th>
                            <th class="border border-gray-200 p-2">Verification & Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-1: Raw Material Quality</td>
                            <td class="border border-gray-200 p-2">Milk antibiotic-free (Charm test negative), MBRT &gt; 4 hrs, Titratable Acidity &lt; 0.14% LA. Starter culture pure, phage-free DVS.</td>
                            <td class="border border-gray-200 p-2">Every tanker load (Charm, Acidity, MBRT). Culture purity test weekly.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-2: Process Water Purity</td>
                            <td class="border border-gray-200 p-2">RO water for dilution must be microbiologically sterile (TBC &lt; 10 CFU/ml, Coliforms 0/100ml) with TDS &lt; 50 ppm.</td>
                            <td class="border border-gray-200 p-2">Daily Online Conductivity & UV Intensity monitoring. Micro testing daily.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-3: Equipment CIP Sanitation</td>
                            <td class="border border-gray-200 p-2">5-stage CIP for PHE & Homogenizer: Water rinse -&gt; Caustic (1.5-2.0% at 85°C/20m) -&gt; Water -&gt; Acid (1.0-1.5% at 65°C/15m) -&gt; Hot water sterilization (90°C/20m).</td>
                            <td class="border border-gray-200 p-2">Conductivity check post-rinse, ATP swab test of PHE plates daily before production.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-4: Air Quality & Packaging Area</td>
                            <td class="border border-gray-200 p-2">Positive pressure HEPA filtration (Class 100 / ISO 5) in aseptic packaging room. Ozone / UV sterilization of caps & foils.</td>
                            <td class="border border-gray-200 p-2">Air settle plates (Yeast/Mold &lt; 1 CFU/plate/4hr) and differential pressure gauge check daily.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VI. Operational Prerequisite Programs (OPRPs)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-emerald-50 font-bold text-emerald-900">
                            <th class="border border-gray-200 p-2">OPRP Item</th>
                            <th class="border border-gray-200 p-2">Control Parameter & Limit</th>
                            <th class="border border-gray-200 p-2">Monitoring Method & Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-1: Pectin Hydration & Dispersion</td>
                            <td class="border border-gray-200 p-2">HMP dissolved in warm water (60°C–65°C) under high-shear powder blender (2900 RPM) for at least 20 min. Zero lumps.</td>
                            <td class="border border-gray-200 p-2">Visual inspection through inline mesh filter (100 mesh). If lumps present, extend high-shear recirculation.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-2: Post-Fermentation Homogenization</td>
                            <td class="border border-gray-200 p-2">Total pressure: 150 ± 10 bar (Stage 1: 120 bar, Stage 2: 30 bar) at product temp 45°C–50°C.</td>
                            <td class="border border-gray-200 p-2">Continuous digital pressure transducer log. If pressure drops &lt; 130 bar, alarm triggers and batch re-homogenized.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-3: Tank Agitation Shear Rate</td>
                            <td class="border border-gray-200 p-2">Curd breaking in fermenter at low-shear speed (20–30 RPM) using anchor/sweep agitator. Avoid air incorporation.</td>
                            <td class="border border-gray-200 p-2">VFD speed display check. High speed (&gt;50 RPM) causes foaming and whey separation.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-4: Regenerative Pressure Differential</td>
                            <td class="border border-gray-200 p-2">Thermanized product side pressure must be maintained at least 0.5 bar HIGHER than un-thermanized/raw side in PHE.</td>
                            <td class="border border-gray-200 p-2">Differential pressure transmitter with automatic booster pump control. Prevents cross-contamination.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VII. Critical Control Points (CCPs) & HACCP Plan</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-rose-50 font-bold text-rose-900">
                            <th class="border border-gray-200 p-2">CCP No. & Process Step</th>
                            <th class="border border-gray-200 p-2">Significant Hazard</th>
                            <th class="border border-gray-200 p-2">Critical Limit</th>
                            <th class="border border-gray-200 p-2">Monitoring Procedure</th>
                            <th class="border border-gray-200 p-2">Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-rose-700">CCP-1: HTST Thermanization Unit (PHE)</td>
                            <td class="border border-gray-200 p-2">Survival of pathogenic bacteria, vegetative yeasts/molds, and active starter culture due to insufficient heating.</td>
                            <td class="border border-gray-200 p-2"><strong>Temperature: ≥ 72.0°C</strong><br><strong>Holding Time: ≥ 15.0 seconds</strong></td>
                            <td class="border border-gray-200 p-2">Continuous dual PT100 sensors at end of holding tube connected to automatic PLC chart recorder.</td>
                            <td class="border border-gray-200 p-2">Automatic Flow Diversion Valve (FDV) opens instantly to divert product back to balance tank. Investigate steam valve.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-rose-700">CCP-2: Aseptic Packaging & Sealing</td>
                            <td class="border border-gray-200 p-2">Post-processing microbial recontamination (PPC) through defective pouch seals or compromised aseptic barrier.</td>
                            <td class="border border-gray-200 p-2"><strong>Seal Integrity: 100% leak-free</strong><br>Product Temp: ≤ 4.0°C (Chilled line) or ≥ 75.0°C (Hot-fill)</td>
                            <td class="border border-gray-200 p-2">Online squeeze/burst pressure test (1.5 bar / 5 sec) every 30 min. Visual seal check. Dye penetration test.</td>
                            <td class="border border-gray-200 p-2">Stop filler immediately. Quarantine all packages produced since last clean check. Re-seal jaw adjustment.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VIII. Equipment Engineering Specifications</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-gray-100 font-bold text-gray-800">
                            <th class="border border-gray-200 p-2">Equipment Unit</th>
                            <th class="border border-gray-200 p-2">Engineering Specifications</th>
                            <th class="border border-gray-200 p-2">Operational Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">Plate Heat Exchanger (PHE)</td>
                            <td class="border border-gray-200 p-2">316L Stainless Steel corrugated chevron plates. EPDM high-temp food-grade gaskets. 85% Regeneration efficiency.</td>
                            <td class="border border-gray-200 p-2">Regenerative pre-heating, steam heating, holding, and chilled glycol cooling in 4 compact sections.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">Post-Fermentation Homogenizer</td>
                            <td class="border border-gray-200 p-2">2-Stage aseptic design. Stellite alloy valve seats. Hydraulic pressure control (0–250 bar). Sanitary diaphragm dampers.</td>
                            <td class="border border-gray-200 p-2">Breaks protein aggregates down to d₄,₃ &lt; 5 µm, ensuring a smooth, non-grainy liquid texture.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">High-Shear Powder Disperser</td>
                            <td class="border border-gray-200 p-2">Rotor-stator high-shear mixer (2900 RPM). Vacuum induction hopper for dustless pectin powder feeding.</td>
                            <td class="border border-gray-200 p-2">Complete 100% lump-free hydration of High Methoxyl Pectin (HMP) and CMC stabilizers.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">Flow Diversion Valve (FDV)</td>
                            <td class="border border-gray-200 p-2">3-way pneumatic sanitary divert valve with dual micro-switch feedback and fail-safe spring return. Response &lt; 0.5s.</td>
                            <td class="border border-gray-200 p-2">Ensures zero under-heated product (&lt; 68°C) reaches the chilling section or filler.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IX. Quality Control, Defects & Troubleshooting Guide</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-amber-50 font-bold text-amber-900">
                            <th class="border border-gray-200 p-2">Quality Defect</th>
                            <th class="border border-gray-200 p-2">Root Cause Analysis (RCA)</th>
                            <th class="border border-gray-200 p-2">Corrective Action Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">1. Whey Separation (Syneresis)</td>
                            <td class="border border-gray-200 p-2">• HMP pectin dosage too low (&lt; 0.20%).<br>• Incomplete pectin hydration.<br>• Thermanization temp too high (&gt; 78°C).</td>
                            <td class="border border-gray-200 p-2">• Increase HMP dosage to 0.28%–0.35%.<br>• Ensure pectin slurry mixed at 60°C for 20 min.<br>• Reduce thermanizer temp to 72°C.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">2. Graininess / Chalky Mouthfeel</td>
                            <td class="border border-gray-200 p-2">• Homogenization pressure low (&lt; 100 bar).<br>• Over-acidification (pH &lt; 3.8) before heating.<br>• High shear after thermanization.</td>
                            <td class="border border-gray-200 p-2">• Increase homogenizer pressure to 150 bar.<br>• Stop fermentation strictly at pH 4.2.<br>• Avoid high-shear pumps post-thermanizer.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">3. Post-Pack Souring / Gas Production</td>
                            <td class="border border-gray-200 p-2">• Under-pasteurization (Temp &lt; 68°C).<br>• FDV malfunction or bypassed.<br>• Post-thermanization yeast contamination.</td>
                            <td class="border border-gray-200 p-2">• Calibrate PT100 temp sensors.<br>• Test FDV auto-divert solenoid daily.<br>• Sanitize filler lines with peracetic acid (PAA).</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">4. Low Viscosity / Watery Body</td>
                            <td class="border border-gray-200 p-2">• Base milk SNF low (&lt; 7.5%).<br>• Low base heat treatment (denaturation &lt; 80%).<br>• Excessive dilution water addition.</td>
                            <td class="border border-gray-200 p-2">• Standardize base milk SNF to 8.5%.<br>• Heat base milk to 90°C for 5 minutes.<br>• Control water addition ratio precisely (1:1 max).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
`
    },
    hi: {
        title: "Fermented Products ka Thermanization (Post-Fermentation Heat Treatment)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Fermented Products ke Thermanization ka Introduction</h3>
            <p><strong>Thermanization</strong> (jise commercial dairy science mein <em>Thermization of Fermented Products</em>, <em>Post-Fermentation Heat Treatment</em>, ya <em>Post-Fermentation Pasteurization</em> bhi kaha jaata hai) liquid fermented dairy products — jaise Chaas (Spiced Buttermilk), Lassi, Laban, Kefir, aur Drinking Yoghurt — par fermentation, curd breaking, aur stabilizer mixing ke baad apply ki jaane wali ek specialized thermal process hai. Is process mein cultured liquid ko typically <strong>68°C se 74°C par 15 se 30 seconds</strong> (ya ambient shelf-stable retail pack beverages ke liye 80°C–85°C tak) heat kiya jaata hai, jiske turant baad rapid chilling (≤ 4°C) ya aseptic hot-filling ki jaati hai.</p>
            <p class="mt-2">Traditional dairy processing mein, fermented beverages ke andar live starter cultures (Lactic Acid Bacteria ya LAB) present hote hain. Halanki live cultures nutritional aur probiotic perspective se beneficial hote hain, lekin unki continuous enzymatic activity commercial distribution ke liye ek bohot bada challenge hoti hai. Cold storage (4°C) mein bhi ye bacteria residual lactose ko lactic acid mein continuously convert karte rehte hain — is biological phenomenon ko <strong>Post-Acidification</strong> kaha jaata hai. Isse product ka pH tezi se drop hokar 3.9 ke niche chala jaata hai, jisse aggressive whey separation (syneresis/paani chhodna), casein protein curdling, harsh acidic sourness, aur shelf life sirf <strong>3 se 5 din</strong> tak simat jaati hai. Thermanization active starter cultures, yeasts, aur molds ko completely inactivate karke post-acidification ko permanently halt kar deta hai, jisse product ki shelf life dino se badhkar <strong>30 se 120 din</strong> tak extend ho jaati hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Thermanization vs. Raw Milk Thermization (Dono mein kya scientific farq hai?)</h4>
            <p>Dairy technology mein in do distinct processes ke beech ka scientific difference samajhna bahut zaroori hai kyunki dono similar sound karti hain par unka purpose aur timing bilkul alag hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Raw Milk Thermization (Kachhe Doodh ka Thermization):</strong> Ye ek sub-pasteurization heat treatment (63°C–65°C for 15 seconds) hai jo dairy dock par raw milk reception ke turant baad apply kiya jaata hai. Iska sole objective heat-sensitive psychrotrophic bacteria (jaise <i>Pseudomonas</i> spp.) aur unke extracellular spoilage enzymes ko destroy karna hota hai taaki silos mein cold storage ke dauran milk spoil na ho. Is stage par milk ka pH normal (~6.7) hota hai aur koi bacterial culture present nahi hota.</li>
                <li><strong>Post-Fermentation Thermanization:</strong> Ye heat treatment ek acidic fermented milk system (pH 3.8–4.4) par culturing ke baad kiya jaata hai. Iska primary objective live starter culture bacteria aur spoilage microflora ko inactivate karke Extended Shelf Life (ESL) ya ambient-stable commercial beverages taiyar karna hota hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Biological Inactivation Kinetics & Microbiology</h3>
            <p>Post-fermentation thermanization ka microbial target standard milk pasteurization se fundamentally alag hota hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Starter Cultures ki Inactivation Kinetics:</strong> Active starter organisms — jaise <i>Lactococcus lactis</i> subsp. <i>lactis</i>, <i>Lactococcus lactis</i> subsp. <i>cremoris</i>, <i>Streptococcus thermophilus</i>, aur <i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i> — ki 70°C par D-value (D<sub>70°C</sub>) 0.1 se 0.3 minutes (6–18 seconds) hoti hai. Product ko 72°C par 15 seconds hold karne se active LAB population mein <strong>&gt;6-log (99.9999%) reduction</strong> achieve hoti hai, jisse bacterial count &gt;10<sup>8</sup> CFU/mL se drop hokar &lt;10<sup>1</sup> CFU/mL reh jaata hai. Is thermal lethality se lactic acid ka production permanently freeze ho jaata hai.</li>
                <li><strong>Yeasts &amp; Molds ka Complete Destruction:</strong> Fermented beverages acid-tolerant yeasts (jaise <i>Saccharomyces cerevisiae</i>, <i>Kluyveromyces marxianus</i>) aur molds (<i>Penicillium</i>, <i>Aspergillus</i>) se contamination aur spoilage ke liye highly vulnerable hote hain. Yeasts ki D<sub>65°C</sub> value 5 seconds se bhi kam hoti hai. Thermanization vegetative yeasts aur molds ka complete 100% destruction guarantee karta hai, jisse pack hone ke baad bottle/pouch ka phoolna (gas production/bloating), CO2 generation, aur bitter off-flavors completely eliminate ho jaate hain.</li>
                <li><strong>Enzyme Inactivation:</strong> Heat treatment residual bacterial proteases aur lipases ko bhi denature aur inactivate kar deta hai, jo varna extended shelf life ke dauran milk fats aur proteins ko todkar rancidity aur bitterness produce kar sakte the.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. Colloidal Chemistry & Stabilizer Science (Casein & Pectin Mechanics)</h3>
            <p>Ek acidic milk gel (pH &lt; 4.6) ko heat karna severe thermodynamic instability create karta hai, jo casein proteins ke colloidal behavior par depend karta hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Casein Micelle Demineralization &amp; Isoelectric Point (pI 4.6):</strong> Native milk pH (6.7) par casein micelles par strong negative surface charge (-20 mV) hota hai aur κ-casein ki "hairy layer" unhe steric stabilization provide karti hai. Jaise-jaise fermentation ke dauran lactic acid pH ko 4.6 ke niche le jaata hai, Colloidal Calcium Phosphate (CCP) micelles se completely dissolve ho jaata hai aur net surface charge zero (isoelectric point) ho jaata hai. Casein particles aapas mein judkar ek three-dimensional acid gel network bana lete hain.</li>
                <li><strong>Thermal Syneresis &amp; Graininess (Doodh ka phatna aur daane banna):</strong> Agar is acidic gel ko bina proper stabilization ke 60°C se upar heat kiya jaye, toh casein clusters ke beech hydrophobic interactions violently strong ho jaati hain. Protein network achanak contract (sikud) jaata hai, jisse serum water bahar nikal jaata hai (jise <strong>Syneresis</strong> ya wheying-off kehte hain) aur protein clumps bankar bade, gritty/chalky aggregates (&gt;25–50 µm) bana lete hain jo peene mein khurdure lagte hain.</li>
                <li><strong>High Methoxyl Pectin (HMP) Stabilization Mechanism:</strong> Acidic protein system ko heat-stable banane ke liye High Methoxyl Pectin (HMP — Degree of Esterification &gt;65%) add kiya jaata hai:
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-1">
                        <li><em>Electrostatic Association (Aakarshan):</em> pI 4.6 ke niche casein par net positive charge hota hai. HMP ke un-esterified carboxyl groups (-COO⁻) casein particle surface ke positively charged patches ke saath electrostatically bind ho jaate hain.</li>
                        <li><em>Steric Repulsion (Dhaka):</em> HMP ki neutral sugar side-chains (galactan aur arabinan polymers) serum phase mein 15–20 nm bahar extend karti hain, creating a dense hydrophilic protective barrier. Jab do casein particles heat ke dauran paas aate hain, ye overlapping pectin chains strong steric hindrance/repulsion generate karti hain, preventing collision, curdling, aur aggregation.</li>
                    </ol>
                </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. Thermanization Process Flowchart & Line Diagram</h3>
            <p>Commercial industrial thermanization plant ka step-by-step operational flow niche visual line diagram mein diya gaya hai:</p>


            <div class="my-6 border border-rose-200 rounded-xl overflow-hidden shadow-sm bg-gradient-to-b from-rose-50/40 to-white p-4">
                <div class="text-xs font-bold uppercase tracking-wider text-rose-800 text-center mb-4">Thermanization Industrial Line Flowchart (11 Steps & Critical Control Points)</div>
                <div class="space-y-3 font-sans text-xs">
                    <!-- Step 1 -->
                    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">1</span>
                            <div>
                                <strong class="text-blue-900 text-sm">Raw Milk Reception &amp; Standardization</strong>
                                <p class="text-gray-600 text-xs">Antibiotic-free milk testing, Fat aur SNF standardizing</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">Fat: 0.5–3.0%</span>
                            <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded border border-blue-200">SNF: 7.5–8.5%</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">PRP-1</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 2 -->
                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0">2</span>
                            <div>
                                <strong class="text-indigo-900 text-sm">High-Heat Base Pasteurization &amp; Denaturation</strong>
                                <p class="text-gray-600 text-xs">&gt;85% β-lactoglobulin denaturation ke liye high-heat treatment</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">85°C–90°C / 5 min</span>
                            <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded border border-indigo-200">κ-Casein Complex</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 3 -->
                    <div class="p-3 bg-purple-50 border border-purple-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">3</span>
                            <div>
                                <strong class="text-purple-900 text-sm">Base Homogenization &amp; Chilling to Fermentation Temp</strong>
                                <p class="text-gray-600 text-xs">Fat globules ko &lt;1 µm break karna taaki incubation mein cream separation na ho</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded border border-purple-200">150 bar</span>
                            <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded border border-purple-200">Chilled: 42°C (ya 30°C)</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 4 -->
                    <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0">4</span>
                            <div>
                                <strong class="text-emerald-900 text-sm">Starter Culture Inoculation &amp; Fermentation</strong>
                                <p class="text-gray-600 text-xs">Sanitary jacketed vat mein pure DVS culture add karke incubation</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">Target pH: 4.1–4.3</span>
                            <span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">DVS LAB</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 5 -->
                    <div class="p-3 bg-teal-50 border border-teal-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-xs shrink-0">5</span>
                            <div>
                                <strong class="text-teal-900 text-sm">Curd Breaking, Low-Shear Agitation &amp; Sterile Water Dilution</strong>
                                <p class="text-gray-600 text-xs">Slow sweep/anchor agitation &amp; Chaas ke liye sterile RO water blending</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-teal-100 text-teal-800 px-2 py-0.5 rounded border border-teal-200">20–30 RPM</span>
                            <span class="bg-teal-100 text-teal-800 px-2 py-0.5 rounded border border-teal-200">RO Water 1:1</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-3</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 6 -->
                    <div class="p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-yellow-950 text-white font-bold flex items-center justify-center text-xs shrink-0">6</span>
                            <div>
                                <strong class="text-yellow-950 text-sm">High-Shear Stabilizer Slurry Addition (HMP + CMC)</strong>
                                <p class="text-gray-600 text-xs">Pre-hydrated High Methoxyl Pectin slurry dosing at 45°C–50°C</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-yellow-100 text-yellow-900 px-2 py-0.5 rounded border border-yellow-300">HMP: 0.25–0.40%</span>
                            <span class="bg-yellow-100 text-yellow-900 px-2 py-0.5 rounded border border-yellow-300">CMC: 0.10–0.15%</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-1</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 7 -->
                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs shrink-0">7</span>
                            <div>
                                <strong class="text-amber-950 text-sm">Post-Fermentation 2-Stage Homogenization</strong>
                                <p class="text-gray-600 text-xs">Casein aggregates ko todkar d₄,₃ &lt; 5 µm karna for silky smooth texture</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">Total: 150 bar (120 + 30)</span>
                            <span class="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">d₄,₃ &lt; 5 µm</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-2</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 8: CCP-1 -->
                    <div class="p-3 bg-red-100 border-2 border-red-500 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shrink-0">8</span>
                            <div>
                                <div class="flex items-center gap-2">
                                    <strong class="text-red-950 text-sm">HTST Thermanizer &amp; Holding Tube</strong>
                                    <span class="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">CCP-1</span>
                                </div>
                                <p class="text-red-800 text-xs">&gt;6-log LAB kill &amp; vegetative yeasts/molds ka complete elimination</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-red-200 text-red-950 px-2 py-0.5 rounded border border-red-300 font-bold">68°C–74°C / 15–30 sec</span>
                            <span class="bg-red-200 text-red-950 px-2 py-0.5 rounded border border-red-300">&gt;6-log Lethality</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 9 -->
                    <div class="p-3 bg-orange-50 border border-orange-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-xs shrink-0">9</span>
                            <div>
                                <strong class="text-orange-950 text-sm">Flow Diversion Valve (FDV) Automatic Safety Divert</strong>
                                <p class="text-gray-600 text-xs">Agar temperature &lt; 68.0°C drop ho toh instantly balance tank mein auto divert</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded border border-orange-300">Cut-off: &lt; 68.0°C</span>
                            <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded border border-orange-300">Response &lt; 0.5s</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 10 -->
                    <div class="p-3 bg-cyan-50 border border-cyan-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xs">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-xs shrink-0">10</span>
                            <div>
                                <strong class="text-cyan-950 text-sm">Regeneration &amp; Chilled Water Cooling</strong>
                                <p class="text-gray-600 text-xs">85% thermal energy recovery aur spore germination rokne ke liye rapid chilling</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded border border-cyan-300">Regen: 85%</span>
                            <span class="bg-cyan-100 text-cyan-900 px-2 py-0.5 rounded border border-cyan-300">Chilled: ≤ 4°C</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-0.5 rounded border border-gray-300">OPRP-4</span>
                        </div>
                    </div>
                    <div class="text-center text-gray-400 font-bold text-sm">↓</div>

                    <!-- Step 11: CCP-2 -->
                    <div class="p-3 bg-slate-100 border-2 border-slate-600 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs shrink-0">11</span>
                            <div>
                                <div class="flex items-center gap-2">
                                    <strong class="text-slate-950 text-sm">Aseptic Buffer Tank &amp; Packaging (Filling &amp; Sealing)</strong>
                                    <span class="bg-slate-800 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">CCP-2</span>
                                </div>
                                <p class="text-slate-700 text-xs">Positive sterile air buffer tank &amp; hermetic leak-free pouch/bottle sealing</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1 text-[11px] font-mono">
                            <span class="bg-slate-200 text-slate-900 px-2 py-0.5 rounded border border-slate-300 font-bold">100% Leak-Free</span>
                            <span class="bg-slate-200 text-slate-900 px-2 py-0.5 rounded border border-slate-300">Shelf Life: 30–120 Days</span>
                        </div>
                    </div>
                </div>
            </div>


            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>Raw Milk Reception &amp; Standardization:</strong> Raw milk ka laboratory analysis (fat, SNF, acidity, MBRT, antibiotics) karke target fat (0.5%–3.0%) aur SNF (7.5%–8.5%) par standardize kiya jaata hai. <strong>Scientific Reason:</strong> Proper fat-to-SNF ratio thermanization ke baad beverage ko consistent viscosity, natural surface tension, aur silky mouthfeel provide karta hai.</li>
                <li><strong>High-Heat Base Pasteurization &amp; Denaturation:</strong> Standardized base milk ko high temperature (85°C–90°C for 5 minutes ya 95°C for 5 minutes) par pasteurize kiya jaata hai. <strong>Scientific Reason:</strong> High heat whey proteins (specially β-lactoglobulin) ko &gt;85% denature kar deta hai, jo micelle surface par κ-casein ke saath disulfide-linked complex bana leta hai. Ye complex acid coagulation ke dauran gel ki water-holding capacity ko dramatically boost karta hai, reducing native syneresis.</li>
                <li><strong>Base Homogenization &amp; Chilling:</strong> Milk ko 150 bar (45°C–55°C) par homogenize karke fat globules ka diameter &lt;1 µm kiya jaata hai aur culture incubation temperature (thermophilic ke liye 42°C, mesophilic ke liye 30°C) tak cool kiya jaata hai. <strong>Scientific Reason:</strong> Homogenization fat globules par casein fragments ki protective film coat kar deta hai, jisse incubation ke dauran fat separation ya cream lining nahi hoti.</li>
                <li><strong>Starter Culture Inoculation &amp; Fermentation:</strong> Pure DVS (Direct Vat Set) starter culture ko sanitary closed tank mein aseptically inoculate kiya jaata hai aur pH 4.1 se 4.3 aane tak incubate kiya jaata hai. <strong>Scientific Reason:</strong> Fermentation ko strictly pH 4.1–4.3 par halt karna optimum aroma compounds (diacetyl/acetaldehyde) create karta hai aur over-acidification (pH &lt; 3.9) ko rokkta hai jo baad mein pectin binding ko destabilize kar sakti hai.</li>
                <li><strong>Curd Breaking, Low-Shear Agitation &amp; Sterile RO Water Dilution:</strong> Fermented dahi ko slow-speed anchor/sweep agitator (20–30 RPM) se gently break kiya jaata hai. Chaas (buttermilk) ke liye microbiologically sterile RO water (1:1 ratio) blend kiya jaata hai. <strong>Scientific Reason:</strong> Low-shear breaking se hawa (air incorporation/foam) mix nahi hoti, jisse oxidative off-flavors aur wheying-off se protection milti hai.</li>
                <li><strong>High-Shear Stabilizer Slurry Addition:</strong> Pre-hydrated HMP pectin (0.25%–0.40% w/w) aur CMC (0.10%–0.15% w/w) ki slurry (jo 60°C warm water mein 2900 RPM high-shear blender se banayi gayi ho) ko 45°C–50°C par fermented beverage mein inject kiya jaata hai. <strong>Scientific Reason:</strong> Thermanizer heat exchanger mein enter karne se pehle pectin ka solution mein 100% hydrated aur uncoiled hona mandatory hai taaki heating start hote hi ye casein par electrostatic protective coat bana sake.</li>
                <li><strong>Post-Fermentation 2-Stage Homogenization:</strong> Stabilized mixture ko 2-stage homogenizer se 150 bar (Stage 1: 120 bar, Stage 2: 30 bar) par pass kiya jaata hai. <strong>Scientific Reason:</strong> High-pressure homogenization acid-induced casein clumps ko break karke mean particle diameter (d₄,₃) &lt;5 µm kar deta hai, ensuring completely smooth, non-chalky liquid texture.</li>
                <li><strong>HTST Thermanizer &amp; Holding Tube (CCP-1):</strong> Liquid Plate Heat Exchanger (PHE) ya Tubular Heat Exchanger (THE) mein enter karta hai, jahan ise 68°C–74°C tak heat karke upward-sloped sanitary holding tube mein 15–30 seconds hold kiya jaata hai. <strong>Scientific Reason:</strong> Ye Critical Control Point 1 (CCP-1) hai. Ye active starter cultures (&gt;6-log kill) aur spoilage yeasts/molds ko completely destroy karke post-packaging acidification aur gas-blowing ko permanently band kar deta hai.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> Holding tube outlet par 3-way pneumatic safety valve laga hota hai jo dual PT100 RTD sensor se continuously communicate karta hai. <strong>Scientific Reason:</strong> Agar product temperature 68.0°C se niche drop ho jaye, toh FDV millisecond mein divert hokar saara liquid balance tank mein wapas bhej deta hai — guaranteeing zero under-thermanized product reaches packaging.</li>
                <li><strong>Regeneration &amp; Chilled Water Cooling:</strong> Thermanized product apni heat incoming cold product ko dekar cool hota hai (85% energy recovery) aur chilled water section mein instantly ≤4°C tak chill ho jaata hai. <strong>Scientific Reason:</strong> Rapid chilling volatile flavor compounds ko preserve karta hai aur heat-tolerant bacterial spores ko dormant state mein lock rakhta hai.</li>
                <li><strong>Aseptic Buffer Tank &amp; Packaging (CCP-2):</strong> Chilled product positive sterile air pressure (HEPA Class 100) wale aseptic buffer tank mein hold hota hai aur aseptic pouches, cartons, ya PET bottles mein hermetically seal hota hai. <strong>Scientific Reason:</strong> Critical Control Point 2 (CCP-2) post-processing microbial contamination (PPC) ko zero rakhta hai, giving an extended shelf life of 30 to 120 days under cold chain or ambient conditions.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">V. Prerequisite Programs (PRPs)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-indigo-50 font-bold text-indigo-900">
                            <th class="border border-gray-200 p-2">PRP Category</th>
                            <th class="border border-gray-200 p-2">Standard Operational Requirement</th>
                            <th class="border border-gray-200 p-2">Verification &amp; Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-1: Raw Material Quality</td>
                            <td class="border border-gray-200 p-2">Milk antibiotic-free hona chahiye (Charm test negative), MBRT &gt; 4 hrs, Titratable Acidity &lt; 0.14% LA. Starter culture pure, phage-free DVS strain.</td>
                            <td class="border border-gray-200 p-2">Har incoming tanker par (Charm, Acidity, MBRT). Culture purity test weekly.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-2: Process Water Purity</td>
                            <td class="border border-gray-200 p-2">Dilution ke liye RO water microbiologically sterile hona mandatory hai (TBC &lt; 10 CFU/ml, Coliforms 0/100ml) with TDS &lt; 50 ppm.</td>
                            <td class="border border-gray-200 p-2">Daily online conductivity &amp; UV lamp intensity log. Microbiological testing daily.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-3: Equipment CIP Sanitation</td>
                            <td class="border border-gray-200 p-2">PHE &amp; Homogenizer ka 5-stage automated CIP: Water rinse -&gt; Caustic (1.5-2.0% at 85°C/20m) -&gt; Water rinse -&gt; Acid (1.0-1.5% at 65°C/15m) -&gt; Hot water sterilization (90°C/20m).</td>
                            <td class="border border-gray-200 p-2">Final rinse conductivity check, PHE plates ka production se pehle daily ATP swab test.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-4: Air Quality &amp; Packaging Area</td>
                            <td class="border border-gray-200 p-2">Aseptic packaging room mein positive pressure HEPA filtration (Class 100 / ISO 5). Bottle caps aur packaging foils ka Ozone / UV sterilization.</td>
                            <td class="border border-gray-200 p-2">Air settle plates (Yeast/Mold &lt; 1 CFU/plate/4hr) aur differential pressure gauge check daily.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VI. Operational Prerequisite Programs (OPRPs)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-emerald-50 font-bold text-emerald-900">
                            <th class="border border-gray-200 p-2">OPRP Item</th>
                            <th class="border border-gray-200 p-2">Control Parameter &amp; Limit</th>
                            <th class="border border-gray-200 p-2">Monitoring Method &amp; Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-1: Pectin Hydration &amp; Dispersion</td>
                            <td class="border border-gray-200 p-2">HMP pectin ko warm water (60°C–65°C) mein high-shear mixer (2900 RPM) se at least 20 min mix karna. Zero lumps.</td>
                            <td class="border border-gray-200 p-2">Inline mesh filter (100 mesh) se visual check. Lumps dikhne par high-shear recirculation extend karein.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-2: Post-Fermentation Homogenization</td>
                            <td class="border border-gray-200 p-2">Total pressure: 150 ± 10 bar (Stage 1: 120 bar, Stage 2: 30 bar) at product temp 45°C–50°C.</td>
                            <td class="border border-gray-200 p-2">Continuous digital pressure transducer log. Pressure &lt; 130 bar drop hone par alarm trigger hoga aur batch re-homogenize hoga.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-3: Tank Agitation Shear Rate</td>
                            <td class="border border-gray-200 p-2">Fermenter tank mein curd breaking low-shear speed (20–30 RPM) anchor/sweep agitator se karna. Air incorporation strictly avoid karein.</td>
                            <td class="border border-gray-200 p-2">VFD speed display check. High speed (&gt;50 RPM) foaming aur whey separation cause karti hai.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-4: Regenerative Pressure Differential</td>
                            <td class="border border-gray-200 p-2">PHE mein thermanized product side ka pressure un-thermanized/raw side se at least 0.5 bar HIGHER maintain hona chahiye.</td>
                            <td class="border border-gray-200 p-2">Differential pressure transmitter with automatic booster pump control. Plate micro-leakage hone par cross-contamination rokkta hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VII. Critical Control Points (CCPs) & HACCP Plan</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-rose-50 font-bold text-rose-900">
                            <th class="border border-gray-200 p-2">CCP No. &amp; Process Step</th>
                            <th class="border border-gray-200 p-2">Significant Hazard</th>
                            <th class="border border-gray-200 p-2">Critical Limit</th>
                            <th class="border border-gray-200 p-2">Monitoring Procedure</th>
                            <th class="border border-gray-200 p-2">Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-rose-700">CCP-1: HTST Thermanization Unit (PHE)</td>
                            <td class="border border-gray-200 p-2">Insufficient heating ki wajah se pathogenic bacteria, spoilage yeasts/molds, ya active starter culture ka survive kar jaana.</td>
                            <td class="border border-gray-200 p-2"><strong>Temperature: ≥ 72.0°C</strong><br><strong>Holding Time: ≥ 15.0 seconds</strong></td>
                            <td class="border border-gray-200 p-2">Holding tube outlet par dual PT100 sensors dwara continuous PLC temperature logging.</td>
                            <td class="border border-gray-200 p-2">Automatic Flow Diversion Valve (FDV) instantly divert hokar product ko balance tank mein return bhej dega. Steam valve inspect karein.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-rose-700">CCP-2: Aseptic Packaging &amp; Sealing</td>
                            <td class="border border-gray-200 p-2">Defective pouch/bottle seals ya compromised aseptic zone ki wajah se post-processing microbial recontamination (PPC).</td>
                            <td class="border border-gray-200 p-2"><strong>Seal Integrity: 100% leak-free</strong><br>Product Temp: ≤ 4.0°C (Chilled line) ya ≥ 75.0°C (Hot-fill)</td>
                            <td class="border border-gray-200 p-2">Har 30 minute mein online squeeze/burst pressure test (1.5 bar / 5 sec). Visual seal check. Dye penetration leak test.</td>
                            <td class="border border-gray-200 p-2">Filler instantly stop karein. Pichle clean check se bane saare packages quarantine karein. Sealing jaws re-align karein.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VIII. Equipment Engineering Specifications</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-gray-100 font-bold text-gray-800">
                            <th class="border border-gray-200 p-2">Equipment Unit</th>
                            <th class="border border-gray-200 p-2">Engineering Specifications</th>
                            <th class="border border-gray-200 p-2">Operational Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">Plate Heat Exchanger (PHE)</td>
                            <td class="border border-gray-200 p-2">316L Stainless Steel corrugated chevron plates. EPDM high-temperature food-grade gaskets. 85% Regeneration efficiency.</td>
                            <td class="border border-gray-200 p-2">Regenerative pre-heating, hot water/steam heating, holding, aur chilled glycol cooling ek hi sanitary unit mein.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">Post-Fermentation Homogenizer</td>
                            <td class="border border-gray-200 p-2">2-Stage aseptic design. Stellite alloy valve seats. 0–250 bar hydraulic pressure control. Sanitary pulsation dampers.</td>
                            <td class="border border-gray-200 p-2">Casein protein aggregates ko break karke particle size d₄,₃ &lt; 5 µm karna, preventing gritty or chalky mouthfeel.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">High-Shear Powder Disperser</td>
                            <td class="border border-gray-200 p-2">Rotor-stator high-shear mixer (2900 RPM). Vacuum induction hopper for dustless pectin powder feeding.</td>
                            <td class="border border-gray-200 p-2">High Methoxyl Pectin (HMP) aur CMC stabilizers ko bina lumps (gaanth) ke 100% complete hydrate karna.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">Flow Diversion Valve (FDV)</td>
                            <td class="border border-gray-200 p-2">3-way pneumatic sanitary divert valve with dual micro-switch feedback and fail-safe spring return. Response &lt; 0.5s.</td>
                            <td class="border border-gray-200 p-2">Ensure karta hai ki koi bhi under-heated product (&lt; 68°C) chiller ya packaging filler line tak na pahuche.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IX. Quality Control, Defects & Troubleshooting Guide</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-amber-50 font-bold text-amber-900">
                            <th class="border border-gray-200 p-2">Quality Defect</th>
                            <th class="border border-gray-200 p-2">Root Cause Analysis (RCA)</th>
                            <th class="border border-gray-200 p-2">Corrective Action Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">1. Whey Separation (Syneresis / Paani chhodna)</td>
                            <td class="border border-gray-200 p-2">• HMP pectin dosage bohot kam hona (&lt; 0.20%).<br>• Pectin ka incomplete hydration.<br>• Thermanization temperature bohot high hona (&gt; 78°C).</td>
                            <td class="border border-gray-200 p-2">• HMP dosage badhakar 0.28%–0.35% karein.<br>• Ensure karein pectin slurry 60°C par 20 min high-shear mix ho.<br>• Thermanizer temperature ko 72°C par optimize karein.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">2. Graininess / Chalky Mouthfeel (Khurdurapan)</td>
                            <td class="border border-gray-200 p-2">• Homogenization pressure kam hona (&lt; 100 bar).<br>• Heating se pehle over-acidification (pH &lt; 3.8).<br>• Thermanization ke baad high-shear pumps use karna.</td>
                            <td class="border border-gray-200 p-2">• Homogenizer pressure badhakar 150 bar karein.<br>• Fermentation ko strictly pH 4.2 aate hi stop karein.<br>• Post-thermanizer sirf gentle low-shear lobe pumps use karein.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">3. Post-Pack Souring / Gas Production (Packet phoolna)</td>
                            <td class="border border-gray-200 p-2">• Under-pasteurization (Temperature &lt; 68°C).<br>• FDV malfunction ya manual bypass.<br>• Packaging area mein post-thermanization yeast contamination.</td>
                            <td class="border border-gray-200 p-2">• PT100 temperature sensors ko calibrate karein.<br>• FDV auto-divert solenoid ki daily testing karein.<br>• Filler lines ko peracetic acid (PAA) se sanitize karein.</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">4. Low Viscosity / Watery Body (Patla hona)</td>
                            <td class="border border-gray-200 p-2">• Base milk ka SNF kam hona (&lt; 7.5%).<br>• Base milk ka insufficient heat treatment (denaturation &lt; 80%).<br>• Excessive dilution water addition.</td>
                            <td class="border border-gray-200 p-2">• Base milk SNF ko 8.5% par standardize karein.<br>• Base milk ko 90°C par 5 minutes hold karein.<br>• Dilution water ratio ko strictly 1:1 par control karein.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
`
    }
};
