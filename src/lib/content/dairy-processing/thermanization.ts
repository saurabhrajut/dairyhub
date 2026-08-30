export const thermanizationContent = {
    en: {
        title: "Thermanization of Fermented Products",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Introduction to Thermanization of Fermented Products</h3>
            <p><strong>Thermanization</strong> (also widely known as <em>Thermization of Fermented Products</em>, <em>Post-Fermentation Heat Treatment</em>, or <em>Post-Fermentation Pasteurization</em>) is a specialized thermal process applied to liquid fermented dairy products—such as Buttermilk (Chaas), Lassi, Laban, Kefir, and Drinking Yoghurt—after fermentation, curd breaking, and stabilization. It involves heating the cultured liquid to temperatures typically between <strong>68°C and 74°C for 15 to 30 seconds</strong> (or up to 80°C–85°C for ambient shelf-stable beverages), followed by immediate chilling or hot-filling.</p>
            <p>In traditional dairy processing, fermented beverages contain live starter cultures (Lactic Acid Bacteria or LAB). While live cultures are nutritionally desirable, they continue to ferment lactose into lactic acid even under cold storage—a phenomenon known as <strong>post-acidification</strong>. This plunges the product pH below 3.9, resulting in aggressive whey separation (syneresis), protein curdling, harsh sourness, and a short shelf life of just 3 to 5 days. Thermanization halts post-acidification by destroying active starter cultures, yeasts, and molds, extending product shelf life from days to <strong>30 to 120 days</strong>.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Thermanization vs. Raw Milk Thermization</h4>
            <p>It is crucial to distinguish between two distinct processes in the dairy industry that share similar terminology:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Raw Milk Thermization:</strong> Sub-pasteurization heat treatment (63°C–65°C for 15 seconds) applied to raw milk immediately upon reception. Its sole purpose is to destroy heat-sensitive psychrotrophic bacteria (e.g., <i>Pseudomonas</i> spp.) prior to cold storage before main processing. Milk pH is normal (~6.7), and no cultures are present.</li>
                <li><strong>Post-Fermentation Thermanization:</strong> Heat treatment applied to an acidic fermented milk system (pH 3.8–4.4) after culturing. Its objective is to inactivate starter culture bacteria and spoilage microflora, creating extended shelf-life (ESL) or ambient-stable beverages.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Biological Inactivation Kinetics & Microbiology</h3>
            <p>The microbial target of post-fermentation thermanization differs from standard milk pasteurization:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Inactivation of Starter Cultures:</strong> Active starter organisms—such as <i>Lactococcus lactis</i> subsp. <i>lactis</i>, <i>Lactococcus lactis</i> subsp. <i>cremoris</i>, <i>Streptococcus thermophilus</i>, and <i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i>—have D-values at 70°C (D<sub>70°C</sub>) ranging from 0.1 to 0.3 minutes (6–18 seconds). Heating at 72°C for 15 seconds achieves a <strong>&gt;6-log (99.9999%) reduction</strong> in active LAB count, reducing populations from &gt;10<sup>8</sup> CFU/ml to &lt;10<sup>1</sup> CFU/ml. This effectively freezes lactic acid production.</li>
                <li><strong>Destruction of Yeasts & Molds:</strong> Fermented beverages are particularly susceptible to spoilage by acid-tolerant yeasts (e.g., <i>Saccharomyces cerevisiae</i>, <i>Kluyveromyces marxianus</i>) and molds (<i>Penicillium</i>, <i>Aspergillus</i>). Yeasts have a D<sub>65°C</sub> of less than 5 seconds. Thermanization guarantees complete destruction of vegetative yeasts and molds, preventing container bloating, gas production, and off-flavors.</li>
                <li><strong>Enzyme Inactivation:</strong> Inactivates residual bacterial proteases and lipases that could otherwise degrade milk proteins and fats during extended storage.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. Colloidal Chemistry & Stabilizer Science</h3>
            <p>Heating an acidic milk gel (pH &lt; 4.6) causes severe thermodynamic instability due to the behavior of casein proteins:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
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

            <div class="space-y-2 font-mono text-center my-6">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded font-semibold text-blue-900">1. Raw Milk Reception & Standardization (Fat: 0.5–3.0%, SNF: 7.5–8.5%)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-indigo-100 border border-indigo-300 rounded font-semibold text-indigo-900">2. High-Heat Base Pasteurization & Denaturation (85°C–90°C / 5 min)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded font-semibold text-purple-900">3. Base Homogenization & Chilling to Fermentation Temp (42°C)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-emerald-100 border border-emerald-300 rounded font-semibold text-emerald-900">4. Starter Culture Inoculation & Fermentation (Target pH: 4.1–4.3)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded font-semibold text-teal-900">5. Curd Breaking, Low-Shear Agitation & RO Water Dilution (Chaas)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded font-semibold text-yellow-900">6. High-Shear Stabilizer Slurry Addition (HMP Pectin 0.25–0.40% + CMC)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-amber-100 border border-amber-300 rounded font-semibold text-amber-900">7. Post-Fermentation 2-Stage Homogenization (Stage 1: 120 bar, Stage 2: 30 bar)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded font-bold text-red-950">8. HTST Thermanizer & Holding Tube (CCP-1 — Critical Control Point: 68°C–74°C / 15–30s)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded font-semibold text-orange-900">9. Flow Diversion Valve (FDV — Automatic Safety Divert if Temp &lt; 68°C)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded font-semibold text-cyan-900">10. Regeneration & Chilled Water Cooling Section (Chilled to ≤ 4°C)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-slate-200 border border-slate-400 rounded font-bold text-slate-900">11. Aseptic Buffer Tank & Packaging (CCP-2 — Aseptic Pouch / Bottle Filling)</div>
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
        title: "किण्वित उत्पादों का थर्मानाइजेशन (Thermanization of Fermented Products)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. किण्वित उत्पादों में थर्मानाइजेशन का परिचय</h3>
            <p><strong>थर्मानाइजेशन (Thermanization)</strong> (जिसे <em>पोस्ट-फर्मेंटेशन थर्माइजेशन</em>, <em>किण्वन-पश्चात तापीय उपचार</em> या <em>पोस्ट-फर्मेंटेशन पाश्चराइजेशन</em> भी कहा जाता है) तरल किण्वित डेयरी उत्पादों — जैसे छाछ (Chaas/Buttermilk), लस्सी, लबान, केफिर और ड्रिंकिंग दही — पर किण्वन, थक्का तोड़ने और स्टेबलाइज़र मिलाने के बाद लागू की जाने वाली एक विशेष तापीय प्रक्रिया है। इसमें किण्वित घोल को <strong>68°C से 74°C पर 15 से 30 सेकंड</strong> (या एम्बिएंट शेल्फ-स्टेबल उत्पादों हेतु 80°C–85°C) तक गर्म करके तुरंत ठंडा या हॉट-फिल किया जाता है।</p>
            <p>पारंपरिक डेयरी प्रसंस्करण में, किण्वित पेय पदार्थों में जीवित लैक्टिक एसिड बैक्टीरिया (LAB) मौजूद रहते हैं। यद्यपि जीवित कल्चर स्वास्थ्य के लिए लाभदायक हैं, फिर भी वे ठंडे भंडारण के दौरान भी दूध की बची हुई शर्करा को लैक्टिक एसिड में बदलते रहते हैं — इस घटना को <strong>पोस्ट-एसिडिफिकेशन (Post-Acidification)</strong> कहा जाता है। इससे उत्पाद का pH 3.9 से नीचे चला जाता है, जिससे पानी अलग होने (Syneresis), प्रोटीन जमने, तीव्र खट्टापन आने और शेल्फ लाइफ घटकर केवल 3 से 5 दिन रहने की समस्या होती है। थर्मानाइजेशन जीवित कल्चर, यीस्ट और मोल्ड को नष्ट करके खट्टापन रोक देता है, जिससे शेल्फ लाइफ <strong>30 से 120 दिन</strong> तक बढ़ जाती है।</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">कच्चे दूध का थर्माइजेशन बनाम किण्वित उत्पादों का थर्मानाइजेशन</h4>
            <p>डेयरी उद्योग में समान शब्दावली वाली दो अलग-अलग प्रक्रियाओं का अंतर समझना अत्यंत आवश्यक है:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>कच्चे दूध का थर्माइजेशन (Raw Milk Thermization):</strong> यह पाश्चराइजेशन से कम तापमान (63°C–65°C / 15s) पर कच्चे दूध के आगमन पर साइक्रोट्रोफिक बैक्टीरिया (जैसे <i>Pseudomonas</i>) को नष्ट करने हेतु किया जाता है। इस समय दूध का pH सामान्य (~6.7) होता है और कल्चर नहीं मिलाया जाता।</li>
                <li><strong>किण्वित उत्पादों का थर्मानाइजेशन (Post-Fermentation Thermanization):</strong> यह किण्वित अम्लीय घोल (pH 3.8–4.4) पर किया जाने वाला तापीय उपचार है। इसका उद्देश्य कल्चर बैक्टीरिया व यीस्ट/मोल्ड को निष्क्रिय करके लंबी शेल्फ लाइफ (ESL) या एम्बिएंट पेय बनाना है।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. सूक्ष्मजैविक निष्क्रियता गतिकी व सूक्ष्मजीव विज्ञान</h3>
            <p>थर्मानाइजेशन का सूक्ष्मजैविक उद्देश्य सामान्य दूध पाश्चराइजेशन से भिन्न होता है:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>स्टार्टर कल्चर की निष्क्रियता:</strong> जीवित लैक्टिक एसिड बैक्टीरिया (LAB) — जैसे <i>Lactococcus lactis</i>, <i>Streptococcus thermophilus</i>, और <i>Lactobacillus bulgaricus</i> — का 70°C पर D-मान (D<sub>70°C</sub>) 0.1 से 0.3 मिनट (6–18 सेकंड) होता है। 72°C पर 15 सेकंड गर्म करने से LAB की संख्या में <strong>&gt;6-log (99.9999%) की कमी</strong> आती है (संख्या &gt;10<sup>8</sup> से घट कर &lt;10<sup>1</sup> CFU/ml रह जाती है), जिससे खट्टापन बनना वहीं रुक जाता है।</li>
                <li><strong>यीस्ट व मोल्ड का विनाश:</strong> किण्वित पेय अम्ल-सहनशील यीस्ट (<i>Saccharomyces</i>, <i>Kluyveromyces</i>) और मोल्ड (<i>Penicillium</i>) से जल्दी खराब होते हैं। यीस्ट का D<sub>65°C</sub> 5 सेकंड से कम होता है। थर्मानाइजेशन से यीस्ट/मोल्ड 100% नष्ट हो जाते हैं, जिससे पैकेट फूलने (Gas Blowing) और दुर्गंध की समस्या नहीं होती।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. कोलाइडल रसायन विज्ञान व स्टेबलाइज़र विज्ञान</h3>
            <p>अम्लीय दूध घोल (pH &lt; 4.6) को गर्म करने पर केसीन प्रोटीन में अत्यधिक तापीय अस्थिरता उत्पन्न होती है:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>केसीन pI (4.6) व आवेश निष्प्रभावीकरण:</strong> सामान्य दूध pH (6.7) पर केसीन पर ऋणात्मक आवेश (-20 mV) होता है। किण्वन द्वारा pH 4.6 से नीचे जाने पर कोलाइडल कैल्शियम फॉस्फेट (CCP) घुल जाता है और केसीन का आवेश शून्य हो जाता है, जिससे केसीन थक्का बना लेता है।</li>
                <li><strong>तापीय सिरम पृथक्करण (Syneresis) व दानेदारपन:</strong> इस अम्लीय थक्के को 60°C से ऊपर गर्म करने पर केसीन अणुओं के बीच हाइड्रोफोबिक आकर्षण तीव्र हो जाता है। प्रोटीन नेटवर्क तेजी से सिकुड़ता है, पानी बाहर फेंकता है (<strong>Syneresis</strong>) और बड़े खुरदरे थक्कों (&gt;25–50 µm) में बदल जाता है।</li>
                <li><strong>High Methoxyl Pectin (HMP) स्टेबलाइजेशन का विज्ञान:</strong> अम्लीय प्रोटीन प्रणाली को ताप-स्थिर बनाने के लिए HMP पेक्टिन (&gt;65% Esterification) मिलाया जाता है:
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-1">
                        <li><em>इलेक्ट्रोस्टैटिक जुडाव:</em> pH &lt; 4.6 पर केसीन पर धनात्मक आवेश होता है। पेक्टिन का ऋणात्मक (-COO⁻) भाग केसीन की सतह से चिपक जाता है।</li>
                        <li><em>स्टैरिक रुकावट (Steric Repulsion):</em> पेक्टिन की शर्करा शाखाएं (Galactan/Arabinan) पानी में 15–20 nm बाहर निकल कर सुरक्षात्मक परत बनाती हैं। गर्म करते समय दो केसीन कणों के पास आने पर ये शाखाएं उन्हें टकराने और चिपकने से रोकती हैं (Steric Hindrance)।</li>
                    </ol>
                </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. थर्मानाइजेशन प्रोसेस फ्लोचार्ट व चरणबद्ध विवरण</h3>
            <p>औद्योगिक थर्मानाइजेशन प्लांट का चरणबद्ध परिचालन प्रवाह नीचे चित्र रूप में दर्शाया गया है:</p>

            <div class="space-y-2 font-mono text-center my-6">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded font-semibold text-blue-900">1. कच्चा दूध आगमन व मानकीकरण (Fat: 0.5–3.0%, SNF: 7.5–8.5%)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-indigo-100 border border-indigo-300 rounded font-semibold text-indigo-900">2. उच्च-ताप बेस पाश्चराइजेशन व डीनेचुरेशन (85°C–90°C / 5 मिनट)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded font-semibold text-purple-900">3. बेस होमोजीनाइजेशन व फर्मेंटेशन ताप तक शीतलन (42°C)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-emerald-100 border border-emerald-300 rounded font-semibold text-emerald-900">4. स्टार्टर कल्चर इनोक्यूलेशन व किण्वन (लक्ष्य pH: 4.1–4.3)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded font-semibold text-teal-900">5. दही तोड़ना, धीमी गति आंदोलन व RO पानी मिलाना (छाछ)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded font-semibold text-yellow-900">6. हाइ-शीयर पेक्टिन स्टेबलाइज़र घोल मिलाना (HMP 0.25–0.40% + CMC)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-amber-100 border border-amber-300 rounded font-semibold text-amber-900">7. पोस्ट-फर्मेंटेशन 2-स्टेज होमोजीनाइजेशन (Stage 1: 120 bar, Stage 2: 30 bar)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded font-bold text-red-950">8. HTST थर्मानाइजर व होल्डिंग ट्यूब (CCP-1 — क्रिटिकल कंट्रोल पॉइंट: 68°C–74°C / 15–30s)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded font-semibold text-orange-900">9. फ्लो डाइवर्जन वाल्व (FDV — स्वचालित सुरक्षा डाइवर्ट यदि ताप &lt; 68°C)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded font-semibold text-cyan-900">10. रीजेनरेशन व चिल्ड पानी कूलिंग सेक्शन (शीतलन ≤ 4°C तक)</div>
                <div class="text-2xl font-bold text-gray-400">↓</div>
                <div class="p-3 bg-slate-200 border border-slate-400 rounded font-bold text-slate-900">11. असेप्टिक बफर टैंक व पैकिंग (CCP-2 — असेप्टिक पाउच / बोतल पैकिंग)</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>कच्चा दूध आगमन व मानकीकरण:</strong> कच्चे दूध की प्रयोगशाला जांच के बाद उसमें वसा (0.5%–3.0%) और SNF (7.5%–8.5%) का मानकीकरण किया जाता है। <strong>वैज्ञानिक कारण:</strong> वसा व SNF का सही अनुपात थर्मानाइजेशन के बाद उत्पाद को एकसमान गाढ़ापन और गाढ़ा स्वाद प्रदान करता है।</li>
                <li><strong>उच्च-ताप बेस पाश्चराइजेशन व डीनेचुरेशन:</strong> बेस दूध को 85°C–90°C पर 5 मिनट (या 95°C पर 5 मिनट) तक गर्म किया जाता है। <strong>वैज्ञानिक कारण:</strong> यह उच्च ताप वे-प्रोटीन (विशेषकर β-lactoglobulin) को 85% से अधिक डीनेचर कर देता है, जो केसीन की सतह पर चिपक कर किण्वन के दौरान पानी थामने की क्षमता (Water holding capacity) बढ़ा देता है।</li>
                <li><strong>बेस होमोजीनाइजेशन व शीतलन:</strong> दूध को 150 bar (45°C–55°C) पर होमोजीनाइज करके वसा गोलिकाओं का आकार &lt;1 µm किया जाता है और इनोक्यूलेशन ताप (42°C) तक ठंडा किया जाता है। <strong>वैज्ञानिक कारण:</strong> इससे वसा गोलिकाओं पर केसीन की परत चढ़ जाती है और जमने के दौरान मलाई ऊपर नहीं तैरती।</li>
                <li><strong>स्टार्टर कल्चर इनोक्यूलेशन व किण्वन:</strong> शुद्ध DVS कल्चर मिलाकर बंद सेनेटरी टैंकों में pH 4.1 से 4.3 आने तक किण्वन किया जाता है। <strong>वैज्ञानिक कारण:</strong> pH 4.1–4.3 पर किण्वन रोकने से छाछ/लस्सी में सही सुगंध (Diacetyl/Acetaldehyde) बनती है और pH 3.9 से नीचे जाने पर होने वाले नुकसान से बचा जा सकता है।</li>
                <li><strong>दही तोड़ना व पानी मिलाना:</strong> जमे हुए दही को धीमी गति के एंकर एजीटेटर (20–30 RPM) द्वारा धीरे-धीरे तोड़ा जाता है। छाछ हेतु RO पानी (1:1 अनुपात) मिलाया जाता है। <strong>वैज्ञानिक कारण:</strong> धीमी गति से दही तोड़ने से हवा अंदर नहीं जाती, जिससे ऑक्सीडेटिव स्वाद बिगड़ने और पानी अलग होने से बचाव होता है।</li>
                <li><strong>हाइ-शीयर पेक्टिन स्टेबलाइज़र घोल मिलाना:</strong> 60°C पर 2900 RPM हाइ-शीयर मिक्सर द्वारा तैयार HMP पेक्टिन (0.25%–0.40%) व CMC (0.10%–0.15%) का घोल 45°C–50°C पर मिलाया जाता है। <strong>वैज्ञानिक कारण:</strong> गर्म करने से पहले पेक्टिन का पूरी तरह पानी में घुला होना आवश्यक है ताकि वह केसीन कणों पर सुरक्षात्मक परत बना सके।</li>
                <li><strong>पोस्ट-फर्मेंटेशन 2-स्टेज होमोजीनाइजेशन:</strong> स्टेबलाइज्ड घोल को 150 bar (Stage 1: 120 bar, Stage 2: 30 bar) पर होमोजीनाइज किया जाता है। <strong>वैज्ञानिक कारण:</strong> उच्च दाब होमोजीनाइजेशन प्रोटीन के बड़े थक्कों को तोड़कर कण आकार (d₄,₃) को &lt;5 µm कर देता है, जिससे जीभ पर खुरदरापन नहीं लगता।</li>
                <li><strong>HTST थर्मानाइजर व होल्डिंग ट्यूब (CCP-1):</strong> घोल PHE/THE में प्रवेश करता है, जहाँ इसे 68°C–74°C पर 15–30 सेकंड तक होल्डिंग ट्यूब में रखा जाता है। <strong>वैज्ञानिक कारण:</strong> यह क्रिटिकल कंट्रोल पॉइंट 1 (CCP-1) है। यह जीवित स्टार्टर कल्चर (&gt;6-log kill) व यीस्ट/मोल्ड को नष्ट करके पैकिंग के बाद खट्टापन बढ़ना रोक देता है।</li>
                <li><strong>फ्लो डाइवर्जन वाल्व (FDV):</strong> होल्डिंग ट्यूब के अंत में लगा न्युमेटिक सेनेटरी वाल्व जो निरंतर तापमान की निगरानी करता है। <strong>वैज्ञानिक कारण:</strong> यदि तापमान 68.0°C से कम हो जाता है, तो वाल्व तुरंत उत्पाद को वापस बैलेंस टैंक में भेज देता है, जिससे कम गर्म उत्पाद पैकिंग में नहीं जा पाता।</li>
                <li><strong>रीजेनरेशन व चिल्ड पानी कूलिंग:</strong> थर्मानाइज्ड उत्पाद अपनी गर्मी आने वाले ठंडे घोल को देता है (85% ऊर्जा बचत) और चिल्ड पानी से ≤4°C तक ठंडा होता है। <strong>वैज्ञानिक कारण:</strong> तीव्र शीतलन उत्पाद के स्वाद को बनाए रखता है और बैक्टीरिया बीजाणुओं (Spores) को निष्क्रिय रखता है।</li>
                <li><strong>असेप्टिक बफर टैंक व पैकिंग (CCP-2):</strong> ठंडा उत्पाद असेप्टिक बफर टैंक में सकारात्मक हवा के दबाव में रखा जाता है और असेप्टिक पाउच या बोतलों में पैक होता है। <strong>वैज्ञानिक कारण:</strong> क्रिटिकल कंट्रोल पॉइंट 2 (CCP-2) पैकिंग के दौरान बाहरी बैक्टीरिया के प्रवेश को रोकता है, जिससे 30 से 120 दिनों की शेल्फ लाइफ मिलती है।</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">V. प्री-रेक्विज़िट प्रोग्राम (PRPs)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-indigo-50 font-bold text-indigo-900">
                            <th class="border border-gray-200 p-2">PRP श्रेणी</th>
                            <th class="border border-gray-200 p-2">मानक परिचालन आवश्यकता</th>
                            <th class="border border-gray-200 p-2">सत्यापन व बारंबारता</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-1: कच्चे माल की गुणवत्ता</td>
                            <td class="border border-gray-200 p-2">दूध एंटीबायोटिक-मुक्त, MBRT &gt; 4 घंटे, अम्लता &lt; 0.14% LA। कल्चर शुद्ध व फेज-मुक्त होना चाहिए।</td>
                            <td class="border border-gray-200 p-2">प्रत्येक टैंकर (Charm टेस्ट, अम्लता, MBRT)। कल्चर शुद्धता जांच साप्ताहिक।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-2: प्रक्रिया जल की शुद्धता</td>
                            <td class="border border-gray-200 p-2">छाछ हेतु RO पानी सूक्ष्मजैविक रूप से बाँझ (TBC &lt; 10 CFU/ml) तथा TDS &lt; 50 ppm होना चाहिए।</td>
                            <td class="border border-gray-200 p-2">ऑनलाइन कंडक्टिविटी व UV लैंप जांच। दैनिक माइक्रोबायोलॉजी लैब टेस्ट।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-3: CIP स्वच्छता प्रोटोकॉल</td>
                            <td class="border border-gray-200 p-2">PHE व होमोजीनाइजर का 5-चरणीय CIP: जल धुलाई -&gt; कॉस्टिक (1.5-2.0% 85°C/20m) -&gt; जल -&gt; एसिड (1.0-1.5% 65°C/15m) -&gt; गर्म जल स्टरलाइजेशन (90°C/20m)।</td>
                            <td class="border border-gray-200 p-2">धुलाई के बाद कंडक्टिविटी जांच, उत्पादन से पूर्व PHE प्लेट्स का ATP स्वैब टेस्ट।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">PRP-4: वायु स्वच्छता व पैकिंग एरिया</td>
                            <td class="border border-gray-200 p-2">असेप्टिक पैकिंग रूम में धनात्मक दबाव (Class 100 HEPA)। कैप्स व फॉयल का ओजोन / UV स्टरलाइजेशन।</td>
                            <td class="border border-gray-200 p-2">एयर सेट्टर प्लेट्स (Yeast/Mold &lt; 1 CFU/plate/4hr) व डिफ्रेंशियल प्रेशर गेज दैनिक जांच।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VI. ऑपरेशनल प्री-रेक्विज़िट प्रोग्राम (OPRPs)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-emerald-50 font-bold text-emerald-900">
                            <th class="border border-gray-200 p-2">OPRP मद</th>
                            <th class="border border-gray-200 p-2">नियंत्रण सीमा व पैरामीटर</th>
                            <th class="border border-gray-200 p-2">निगरानी विधि व सुधारात्मक कार्रवाई</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-1: पेक्टिन घोल बनाना व हाइड्रेशन</td>
                            <td class="border border-gray-200 p-2">HMP पेक्टिन को गर्म पानी (60°C–65°C) में हाइ-शीयर मिक्सर (2900 RPM) द्वारा 20 मिनट तक घोलना। शून्य गांठें।</td>
                            <td class="border border-gray-200 p-2">इनलाइन जाली फ़िल्टर (100 mesh) द्वारा दृश्य जांच। गांठें होने पर मिक्सिंग का समय बढ़ाएं।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-2: पोस्ट-फर्मेंटेशन होमोजीनाइजेशन</td>
                            <td class="border border-gray-200 p-2">कुल दबाव: 150 ± 10 bar (Stage 1: 120 bar, Stage 2: 30 bar) तापमान 45°C–50°C पर।</td>
                            <td class="border border-gray-200 p-2">डिजिटल प्रेशर ट्रांसड्यूसर लॉग। दबाव &lt; 130 bar होने पर अलार्म बजेगा और बैच दोबारा होमोजीनाइज होगा।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-3: मिक्सिंग टैंक में आंदोलन दर</td>
                            <td class="border border-gray-200 p-2">फर्मेंटर में दही को धीमी गति (20–30 RPM) पर तोड़ना। हवा अंदर जाने (Air incorporation) से बचाना।</td>
                            <td class="border border-gray-200 p-2">VFD स्पीड डिस्प्ले जांच। 50 RPM से अधिक गति से झाग बनता है और पानी अलग होता है।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">OPRP-4: रीजेनरेटिव प्रेशर डिफ्रेंशियल</td>
                            <td class="border border-gray-200 p-2">PHE में थर्मानाइज्ड उत्पाद की तरफ का दबाव कच्चे/अ-थर्मानाइज्ड उत्पाद से कम से कम 0.5 bar अधिक होना चाहिए।</td>
                            <td class="border border-gray-200 p-2">डिफ्रेंशियल प्रेशर ट्रांसमीटर व बूस्टर पंप कंट्रोल। क्रॉस-कंटेमिनेशन रोकता है।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VII. क्रिटिकल कंट्रोल पॉइंट्स (CCPs) व HACCP प्लान</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-rose-50 font-bold text-rose-900">
                            <th class="border border-gray-200 p-2">CCP संख्या व चरण</th>
                            <th class="border border-gray-200 p-2">संभावित गंभीर खतरा</th>
                            <th class="border border-gray-200 p-2">क्रिटिकल लिमिट (सीमा)</th>
                            <th class="border border-gray-200 p-2">निगरानी प्रक्रिया</th>
                            <th class="border border-gray-200 p-2">सुधारात्मक कार्रवाई</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-rose-700">CCP-1: HTST थर्मानाइजर यूनिट (PHE)</td>
                            <td class="border border-gray-200 p-2">कम तापमान के कारण रोगजनक बैक्टीरिया, यीस्ट/मोल्ड या जीवित कल्चर का बच जाना।</td>
                            <td class="border border-gray-200 p-2"><strong>तापमान: ≥ 72.0°C</strong><br><strong>होल्डिंग समय: ≥ 15.0 सेकंड</strong></td>
                            <td class="border border-gray-200 p-2">होल्डिंग ट्यूब के अंत में लगे दोहरे PT100 सेंसर द्वारा निरंतर तापमान रिकॉर्डिंग।</td>
                            <td class="border border-gray-200 p-2">फ्लो डाइवर्जन वाल्व (FDV) तुरंत खुलकर दूध को वापस बैलेंस टैंक में भेज देगा। स्टीम वाल्व जांचें।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-rose-700">CCP-2: असेप्टिक पैकिंग व सीलिंग</td>
                            <td class="border border-gray-200 p-2">पैकेट की सील खराब होने से थर्मानाइजेशन के बाद दोबारा बैक्टीरिया/मोल्ड का प्रवेश।</td>
                            <td class="border border-gray-200 p-2"><strong>सील अखंडता: 100% लीक-मुक्त</strong><br>उत्पाद ताप: ≤ 4.0°C (चिल्ड) या ≥ 75.0°C (हॉट-फिल)</td>
                            <td class="border border-gray-200 p-2">प्रत्येक 30 मिनट में बर्स्ट प्रेशर टेस्ट (1.5 bar / 5 sec)। डाई पेनिट्रेशन लीक टेस्ट।</td>
                            <td class="border border-gray-200 p-2">पैकिंग मशीन तुरंत रोकें। पिछले 30 मिनट में पैक हुए सभी बंडलों को अलग करके जांचें।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VIII. उपकरण एवं इंजीनियरिंग पैरामीटर</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-gray-100 font-bold text-gray-800">
                            <th class="border border-gray-200 p-2">उपकरण (Equipment)</th>
                            <th class="border border-gray-200 p-2">इंजीनियरिंग विनिर्देश (Specs)</th>
                            <th class="border border-gray-200 p-2">परिचालन भूमिका</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">प्लेट हीट एक्सचेंजर (PHE)</td>
                            <td class="border border-gray-200 p-2">316L स्टेनलेस स्टील प्लेट्स। EPDM खाद्य-ग्रेड गास्केट्स। 85% हीट रीजनेरेशन क्षमता।</td>
                            <td class="border border-gray-200 p-2">दूध को पूर्व-गर्म करना, स्टीम से गर्म करना, होल्डिंग व चिल्ड पानी से ठंडा करना।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">पोस्ट-फर्मेंटेशन होमोजीनाइजर</td>
                            <td class="border border-gray-200 p-2">2-स्टेज असेप्टिक डिज़ाइन। स्टेलाइट अलॉय वाल्व सीट। 0-250 bar हाइड्रोलिक प्रेशर नियंत्रण।</td>
                            <td class="border border-gray-200 p-2">प्रोटीन के थक्कों को तोड़कर कण आकार &lt; 5 µm करना जिससे छाछ चिकनी बनती है।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">हाइ-शीयर पाउडर डिस्पर्सर</td>
                            <td class="border border-gray-200 p-2">रोटर-स्टेटर हाइ-शीयर मिक्सर (2900 RPM)। बिना धूल उड़ाए पेक्टिन पाउडर घोलने हेतु वैक्यूम हॉपर।</td>
                            <td class="border border-gray-200 p-2">पेक्टिन (HMP) व CMC स्टेबलाइज़र को बिना गांठ (Lumps) बनाए 100% पानी में घोलना।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold">फ्लो डाइवर्जन वाल्व (FDV)</td>
                            <td class="border border-gray-200 p-2">3-वे न्युमेटिक सेनेटरी वाल्व। माइक्रो-स्विच फीडबैक के साथ। प्रतिक्रिया समय &lt; 0.5 सेकंड।</td>
                            <td class="border border-gray-200 p-2">68°C से कम गर्म हुए उत्पाद को पैकिंग सेक्शन में जाने से पूरी तरह रोकना।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IX. गुणदोष निवारण गाइड (Troubleshooting & Defects)</h3>
            <div class="dc-table-responsive my-4">
                <table class="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                        <tr class="bg-amber-50 font-bold text-amber-900">
                            <th class="border border-gray-200 p-2">उत्पाद दोष (Defect)</th>
                            <th class="border border-gray-200 p-2">मूल कारण विश्लेषण (RCA)</th>
                            <th class="border border-gray-200 p-2">सुधारात्मक कार्रवाई योजना</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">1. पानी का अलग होना (Whey Separation)</td>
                            <td class="border border-gray-200 p-2">• पेक्टिन (HMP) की मात्रा कम होना (&lt; 0.20%)।<br>• पेक्टिन का पानी में अधूरा घुलना।<br>• थर्मानाइजर का तापमान अत्यधिक होना (&gt; 78°C)।</td>
                            <td class="border border-gray-200 p-2">• HMP पेक्टिन की मात्रा बनाकर 0.30%–0.35% करें।<br>• पेक्टिन घोल को 60°C पर 20 मिनट हाइ-शीयर मिक्सर में चलाएं।<br>• थर्मानाइजर का तापमान घटाकर 72°C करें।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">2. छाछ का दानेदार या खुरदरा होना (Graininess)</td>
                            <td class="border border-gray-200 p-2">• होमोजीनाइजर का दबाव कम होना (&lt; 100 bar)।<br>• गर्म करने से पहले अत्यधिक खट्टापन (pH &lt; 3.8)।<br>• थर्मानाइजेशन के बाद तेज पंप चलाना।</td>
                            <td class="border border-gray-200 p-2">• होमोजीनाइजर का दबाव बढ़ाकर 150 bar करें।<br>• फर्मेंटेशन को pH 4.2 आते ही तुरंत रोकें।<br>• थर्मानाइजर के बाद केवल लो-शीयर लोब पंप (Lobe pump) चलाएं।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">3. पैकिंग के बाद खट्टापन बढ़ना / पैकेट फूलना</td>
                            <td class="border border-gray-200 p-2">• थर्मानाइजेशन तापमान कम होना (&lt; 68°C)।<br>• FDV वाल्व का काम न करना या बाईपास होना।<br>• पैकिंग मशीन में यीस्ट/मोल्ड का प्रवेश।</td>
                            <td class="border border-gray-200 p-2">• PT100 तापमान सेंसर को कैलिब्रेट करें।<br>• FDV डाइवर्जन की रोजाना स्वचालित जांच करें।<br>• पैकिंग लाइनों को परएसीटिक एसिड (PAA) से स्टरलाइज करें।</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2 font-semibold text-red-700">4. गाढ़ापन कम होना / पतलापन</td>
                            <td class="border border-gray-200 p-2">• दूध में SNF की मात्रा कम होना (&lt; 7.5%)।<br>• बेस दूध का पाश्चराइजेशन कम होना (&lt; 80°C)।<br>• छाछ में अत्यधिक पानी मिला देना।</td>
                            <td class="border border-gray-200 p-2">• बेस दूध का SNF बनाकर 8.5% करें।<br>• बेस दूध को 90°C पर 5 मिनट गर्म करें।<br>• पानी मिलाने का अनुपात नियंत्रित (अधिकतम 1:1) रखें।</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    }
};
