export const standardizationContent = {
    en: {
        title: "Standardization:",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Milk Standardization</h3>
            <p>Standardization represents a critical compositional control process in modern dairy manufacturing where fat and/or solids-not-fat (SNF) content of milk are precisely adjusted to meet stringent regulatory specifications, achieve consistent product quality, optimize manufacturing efficiency, and satisfy consumer expectations. Raw milk exhibits substantial natural compositional variability (fat: 3.0-6.5%, SNF: 8.0-9.5%, protein: 2.8-4.0%) attributable to multiple biological and environmental factors: cattle breed (Holstein: 3.5% fat vs. Jersey: 5.0%+ fat), genetic variation within breeds, lactation stage (colostrum: 6-8% fat → mature milk: 3.5-4.5% → late lactation: 4.5-5.5%), seasonal fluctuations (summer: -10 to -15% fat vs. winter due to heat stress, pasture composition), nutritional status (high-energy diet → higher fat), and individual animal health. Without standardization, product labeled "Toned Milk 3.0% fat" might actually contain 2.7-3.3% fat batch-to-batch—creating regulatory non-compliance, consumer distrust, nutritional inconsistency, and manufacturing problems (variable yogurt firmness, cheese yield fluctuations, cream separation in UHT milk).</p>
            
            <p><strong>Global Regulatory Standards (Examples):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>India (FSSAI):</strong> Full Cream Milk ≥6.0% fat, ≥9.0% SNF; Toned Milk 3.0% fat, ≥8.5% SNF; Double Toned 1.5% fat, ≥9.0% SNF; Skim Milk ≤0.5% fat, ≥8.7% SNF</li>
                <li><strong>USA (FDA/PMO):</strong> Whole Milk ≥3.25% fat, ≥8.25% SNF; Low-fat Milk 0.5-2.0% fat; Skim Milk <0.5% fat</li>
                <li><strong>EU (Codex):</strong> Whole Milk ≥3.5% fat; Semi-skimmed 1.5-1.8% fat; Skimmed ≤0.5% fat</li>
            </ul>
            
            <p><strong>Economic and Quality Drivers:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Regulatory Compliance:</strong> Non-standardized milk risks penalties, product recalls, license suspension (violations common in small/unorganized dairy sector)</li>
                <li><strong>Product Consistency:</strong> Consumer expectation: every purchase identical composition → brand loyalty. Batch variation destroys consumer confidence</li>
                <li><strong>Value Optimization:</strong> Fat is most valuable milk component (market cream, butter, ghee). Standardization maximizes revenue by removing excess fat from whole milk for sale as premium products while meeting minimum fat specification</li>
                <li><strong>Manufacturing Control:</strong> Downstream processes (yogurt fermentation, cheese making, milk powder drying) extremely sensitive to fat/protein ratio. Standardization enables predictable, consistent manufacturing performance</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">The Principle of Standardization: Mass Balance Fundamentals</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Conservation of Mass - The Core Concept</h4>
            
            <p>Standardization operates on fundamental physical law: <strong>Conservation of Mass</strong>. When mixing ingredients, total mass of any component in final blend must exactly equal sum of that component contributed by each ingredient. Mathematically:</p>
            
            <p><strong>General Mass Balance Equation:</strong></p>
            <p class="font-mono text-sm bg-gray-100 p-3 rounded overflow-x-auto">Σ(Mass of Ingredient_i × Component%_i) = (Total Final Mass) × (Target Component%)</p>
            
            <p><strong>For Two-Ingredient Fat Standardization (Most Common):</strong></p>
            <p class="font-mono text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                (M₁ × F₁) + (M₂ × F₂) = M_total × F_target<br/>
                Where: M₁, M₂ = masses of ingredients 1 & 2<br/>
                F₁, F₂ = fat percentages of ingredients 1 & 2<br/>
                M_total = M₁ + M₂ (total mass)<br/>
                F_target = desired final fat percentage
            </p>
            
            <h4 class="font-semibold mt-4 mb-2">Practical Example - Mass Balance Calculation</h4>
            
            <p><strong>Problem:</strong> Dairy plant receives 10,000 L raw milk (4.5% fat, 8.8% SNF) daily. Plant must produce Toned Milk (3.0% fat, 8.5% SNF minimum) per India FSSAI standards. Calculate required blending.</p>
            
            <p><strong>Step 1 - Separate Raw Milk:</strong></p>
            <p>Pass 10,000 L through centrifugal separator → Skim milk (0.05% fat, 9.0% SNF) + Cream (40% fat, assumed for calculation)</p>
            
            <p><strong>Step 2 - Fat Balance Equation:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Let x = liters of skim milk used, y = liters of cream added back</li>
                <li>Fat from skim: x × 0.0005 (0.05% = 0.0005 as decimal)</li>
                <li>Fat from cream: y × 0.40</li>
                <li>Target fat in final product: (x + y) × 0.03</li>
                <li>Equation: x(0.0005) + y(0.40) = (x + y)(0.03)</li>
            </ul>
            
            <p><strong>Step 3 - Solve (Simplified):</strong></p>
            <p>Since raw milk separated completely: x + y ≈ 10,000 L (allowing for small separation losses ~2%). Solving: x ≈ 9,212 L skim, y ≈ 788 L cream mixed back. Remaining cream: 10,000 - 9,212 - 788 = ~1,000 L excess cream (available for butter/ghee production)</p>
            
            <p><strong>Economic Impact:</strong> This excess 1,000 L cream (40% fat) = 400 kg butterfat. If sold as cream ($8/kg fat) or butter ($12/kg fat) vs. included in toned milk ($2/kg fat), value uplift = $2,400-4,000 per day for 10,000 L plant!</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Methods of Standardization: Calculation Techniques</h3>

            <h4 class="font-semibold mt-4 mb-2">1. Pearson Square Method (Graphical Shortcut)</h4>
            
            <p>The Pearson Square (also called "Rectangle Method" or "Square Mixing Diagram") provides visual, rapid calculation tool for two-ingredient blending. Widely used in dairy plants for quick manual calculations and quality control verification.</p>
            
            <p><strong>Detailed Example with Complete Explanation:</strong></p>
            <p><strong>Objective:</strong> Produce 1,000 kg standardized milk with <strong>3.5% fat</strong> by blending whole milk (5.5% fat) and skim milk (0.1% fat).</p>
            
            <p><strong>Step-by-Step Pearson Square Application:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Draw Square and Label Corners:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2">
                        <li>Top-left corner: Fat% of higher-fat ingredient (Whole Milk: 5.5%)</li>
                        <li>Bottom-left corner: Fat% of lower-fat ingredient (Skim Milk: 0.1%)</li>
                        <li>Center: Target fat% (Desired: 3.5%)</li>
                    </ul>
                </li>
                <li><strong>Perform Diagonal Subtraction (CRITICAL: Always subtract smaller from larger to avoid negatives):</strong>
                    <div class="my-4 p-4 border rounded-lg bg-blue-50 overflow-x-auto">
                        <div class="grid grid-cols-3 gap-4 items-center min-w-[300px]">
                            <div class="text-center">
                                <div>Whole Milk</div>
                                <div class="text-2xl font-bold">5.5%</div>
                            </div>
                            <div class="text-3xl font-bold text-center">3.5%</div>
                            <div class="text-center">
                                <div class="text-green-600 font-bold">Parts of Whole Milk</div>
                                <div class="text-2xl font-bold text-green-600">3.4</div>
                                <div class="text-sm">(3.5 - 0.1)</div>
                            </div>
                            <div class="text-center">
                                <div>Skim Milk</div>
                                <div class="text-2xl font-bold">0.1%</div>
                            </div>
                            <div></div>
                            <div class="text-center">
                                <div class="text-red-600 font-bold">Parts of Skim Milk</div>
                                <div class="text-2xl font-bold text-red-600">2.0</div>
                                <div class="text-sm">(5.5 - 3.5)</div>
                            </div>
                        </div>
                    </div>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Top-right (parts of whole milk) = Center - Bottom-left = 3.5 - 0.1 = <strong>3.4 parts</strong></li>
                        <li>Bottom-right (parts of skim milk) = Top-left - Center = 5.5 - 3.5 = <strong>2.0 parts</strong></li>
                    </ul>
                </li>
                <li><strong>Interpretation of Results:</strong>
                    <p>Mix ratio: <strong>3.4 parts whole milk : 2.0 parts skim milk</strong></p>
                    <p>Total parts = 3.4 + 2.0 = 5.4 parts</p>
                    <p><strong>Physical Meaning:</strong> For every 5.4 kg of final standardized milk, use 3.4 kg whole milk and 2.0 kg skim milk</p>
                </li>
                <li><strong>Scale to Production Requirement (1,000 kg):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Whole Milk Required:</strong> (1,000 kg × 3.4 parts) ÷ 5.4 total parts = <strong>629.6 kg</strong></li>
                        <li><strong>Skim Milk Required:</strong> (1,000 kg × 2.0 parts) ÷ 5.4 total parts = <strong>370.4 kg</strong></li>
                        <li><strong>Verification:</strong> 629.6 + 370.4 = 1,000 kg ✓</li>
                    </ul>
                </li>
                <li><strong>Final Fat Content Verification (Quality Control Check):</strong>
                    <p>Fat from whole milk: 629.6 kg × 0.055 = 34.63 kg fat</p>
                    <p>Fat from skim milk: 370.4 kg × 0.001 = 0.37 kg fat</p>
                    <p>Total fat: 34.63 + 0.37 = 35.0 kg fat in 1,000 kg milk</p>
                    <p>Final fat%: (35.0 ÷ 1,000) × 100 = <strong>3.5%</strong> ✓ (Perfect match!)</p>
                </li>
            </ol>
            
            <p><strong>Pearson Square Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Rapid calculation (30-60 seconds manual calculation)</li>
                <li>No complex algebra required (suitable for plant floor operators)</li>
                <li>Visual/intuitive (easy to teach, remember, verify)</li>
                <li>Accurate for two-ingredient mixing</li>
            </ul>
            
            <p><strong>Limitations:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Only works for TWO ingredients (cream + skim, whole + skim, etc.). Cannot handle three+ component blends</li>
                <li>Single target parameter only (fat OR SNF, not both simultaneously)</li>
                <li>For simultaneous fat AND SNF standardization → requires algebraic method</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Algebraic Method (Simultaneous Equations for Dual Standardization)</h4>
            
            <p>When both fat AND SNF must meet specifications (common requirement), algebraic approach using simultaneous equations becomes necessary.</p>
            
            <p><strong>Complex Example: Dual Standardization (Fat + SNF):</strong></p>
            <p><strong>Problem:</strong> Produce 5,000 kg Toned Milk meeting India FSSAI standards: 3.0% fat, 8.5% SNF minimum. Available ingredients: Whole milk (5.0% fat, 8.8% SNF), Skim milk (0.1% fat, 9.0% SNF).</p>
            
            <p><strong>Solution:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Define Variables:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2">
                        <li>Let W = kg of whole milk needed</li>
                        <li>Let S = kg of skim milk needed</li>
                    </ul>
                </li>
                <li><strong>Set Up Equations:</strong>
                    <p><strong>Equation 1 (Total Mass Balance):</strong></p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">W + S = 5,000 kg</p>
                    
                    <p><strong>Equation 2 (Fat Balance):</strong></p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">W(0.050) + S(0.001) = 5,000(0.030)</p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">0.050W + 0.001S = 150 kg fat</p>
                    
                    <p><strong>Equation 3 (SNF Balance):</strong></p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">W(0.088) + S(0.090) = 5,000(0.085)</p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">0.088W + 0.090S = 425 kg SNF</p>
                </li>
                <li><strong>Solve System of Equations:</strong>
                    <p>From Equation 1: S = 5,000 - W</p>
                    <p>Substitute into Equation 2:</p>
                    <div class="overflow-x-auto">
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">0.050W + 0.001(5,000 - W) = 150</p>
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">0.050W + 5 - 0.001W = 150</p>
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">0.049W = 145</p>
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">W = 2,959 kg</p>
                    </div>
                    <p>Therefore: S = 5,000 - 2,959 = <strong>2,041 kg</strong></p>
                </li>
                <li><strong>Verify SNF Specification:</strong>
                    <p>SNF = 2,959(0.088) + 2,041(0.090) = 260.4 + 183.7 = 444.1 kg</p>
                    <p>SNF% = (444.1 ÷ 5,000) × 100 = <strong>8.88%</strong> > 8.5% minimum ✓ (Exceeds requirement)</p>
                </li>
            </ol>
            
            <p><strong>Result Interpretation:</strong></p>
            <p>To produce 5,000 kg Toned Milk (3.0% fat, 8.5%+ SNF), blend <strong>2,959 kg whole milk + 2,041 kg skim milk</strong>. Final product: 3.0% fat (meets spec exactly), 8.88% SNF (exceeds minimum by 0.38% - acceptable over-compliance providing safety margin).</p>
            
            <h4 class="font-semibold mt-4 mb-2">3. Advanced: SNF Adjustment via Milk Powder Addition</h4>
            
            <p>Sometimes fat-standardized milk has insufficient SNF (<8.5% for Indian toned milk). Solution: Add skim milk powder (SMP) to boost SNF without affecting fat%.</p>
            
            <p><strong>Calculation Example:</strong></p>
            <p>Fat-standardized milk: 1,000 kg, 3.0% fat, but only 8.2% SNF (below 8.5% requirement). SMP composition: 96% SNF, 0.5% fat. How much SMP to add?</p>
            
            <p><strong>Target:</strong> Raise SNF from 8.2% to 8.5% in final product</p>
            <p><strong>Let x = kg SMP to add</strong></p>
            <p><strong>SNF Balance:</strong></p>
            <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">
                1,000(0.082) + x(0.96) = (1,000 + x)(0.085)<br/>
                82 + 0.96x = 85 + 0.085x<br/>
                0.875x = 3<br/>
                x = 3.43 kg SMP
            </p>
            <p><strong>Result:</strong> Add 3.43 kg SMP to 1,000 kg milk → Final: 1,003.43 kg milk with 3.0% fat (unchanged), 8.5% SNF (target achieved)</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Industrial Standardization Process: Automated In-Line Systems</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Modern Integrated Standardization Technology</h4>
            
            <p>Contemporary large-scale dairy plants (processing 100,000-1,000,000 L/day) employ fully automated, continuous standardization systems integrated with centrifugal separation, eliminating manual calculations and batch blending tanks. This represents quantum leap in precision, efficiency, and flexibility.</p>
            
            <p><strong>System Components and Process Flow:</strong></p>
            
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Pre-Heating and Clarification:</strong>
                    <p>Raw milk (4°C from silos) heated to 40-55°C in plate heat exchanger (PHE). Optimal temperature for separation: Fat viscosity reduced (better separation efficiency), bacterial multiplication still minimal (<10°C/hour heating rate limits growth).</p>
                </li>
                
                <li><strong>Centrifugal Separation (Cream Separator):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Technology:</strong> High-speed disc-stack centrifuge (6,000-9,000 RPM, 4,000-8,000 G centrifugal force). Separates milk into two precisely controlled streams: Skim milk (0.03-0.10% fat, adjustable), Cream (35-45% fat, adjustable via back-pressure valve)</li>
                        <li><strong>Capacity:</strong> Industrial separators: 10,000-50,000 L/hr throughput</li>
                        <li><strong>Separation Efficiency:</strong> >99.5% fat recovery (minimal fat losses to skim stream)</li>
                        <li><strong>Temperature Maintenance:</strong> Jacketed separator maintains 40-50°C throughout process (optimal fat fluidity, prevents cream thickening/clogging)</li>
                    </ul>
                </li>
                
                <li><strong>Real-Time Compositional Analysis (In-Line Sensors):</strong>
                    <p>Three critical measurement points, each equipped with online analyzer:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Raw Milk Inlet:</strong> Measures fat%, SNF%, protein%, total solids% of incoming milk (provides feed composition for calculation)</li>
                        <li><strong>Skim Milk Stream:</strong> Monitors fat% in skim (typically 0.05-0.08%), SNF% (typically 8.9-9.1%)</li>
                        <li><strong>Cream Stream:</strong> Monitors fat% in cream (typically 38-42%)</li>
                        <li><strong>Standardized Milk Outlet:</strong> Final verification that blended product meets target (e.g., 3.0% fat, 8.5% SNF)</li>
                    </ul>
                    
                    <p><strong>Analyzer Technology Options:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Mid-Infrared (MIR) Spectroscopy:</strong> Most common. Measures fat, protein, lactose, SNF simultaneously. Principle: Different milk components absorb specific infrared wavelengths. Accuracy: ±0.03% for fat, ±0.05% for SNF. Response time: 30-60 seconds. Cost: $30,000-60,000 per unit</li>
                        <li><strong>Near-Infrared (NIR) Spectroscopy:</strong> Alternative technology, similar principle, slightly lower accuracy but faster (15-30 sec)</li>
                        <li><strong>Ultrasonic Sensors:</strong> Measure milk density and sound velocity → calculate fat/SNF. Less accurate but more robust, lower cost ($10,000-20,000). Suitable for less critical applications</li>
                    </ul>
                </li>
                
                <li><strong>Programmable Logic Controller (PLC) - The Brain:</strong>
                    <p><strong>Functions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Data Acquisition:</strong> Continuously receives composition data from all in-line sensors (every 5-30 seconds updates)</li>
                        <li><strong>Real-Time Calculation:</strong> PLC programmed with standardization algorithms (mass balance equations). Example: If target is 3.0% fat toned milk, and current readings show raw milk = 4.8% fat, skim = 0.06% fat, cream = 40% fat, PLC calculates required cream:skim ratio instantly using: <span class="font-mono text-xs md:text-base">(Skim × 0.0006 + Cream × 0.40) = Total × 0.030</span></li>
                        <li><strong>Proportional-Integral-Derivative (PID) Control:</strong> Advanced control algorithm continuously adjusts cream recombination valve to maintain target within ±0.02% tolerance (extremely tight control impossible with manual operation)</li>
                        <li><strong>Adaptive Response:</strong> Compensates for feed variation. If raw milk fat% drifts from 4.8% to 5.2%, PLC instantly recalculates and adjusts cream valve within 10-30 seconds (prevents off-spec product)</li>
                    </ul>
                </li>
                
                <li><strong>Automated Cream Recombination:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Modulating Control Valve:</strong> Precision pneumatic or electric valve on cream line, receives control signal (4-20 mA or 0-10V) from PLC. Valve position (0-100% open) determines cream flow rate back into skim stream</li>
                        <li><strong>Flow Rate Control:</strong> If standardizing 20,000 L/hr milk to 3.0% fat, and calculation shows need 8% cream recombination (1,600 L/hr cream), valve adjusts to deliver exactly 1,600 L/hr</li>
                        <li><strong>Inline Blending:</strong> Cream and skim streams converge in static mixer (series of fixed helical blades creating turbulent mixing) → homogeneous blend in 2-5 seconds residence time</li>
                        <li><strong>Response Time:</strong> System responds to composition changes within 15-45 seconds (sensor response + PLC calculation + valve actuation + mixing)</li>
                    </ul>
                </li>
                
                <li><strong>Excess Cream Diversion:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Cream not required for standardization diverted via three-way valve to separate cream storage tank (maintained at 4-6°C)</li>
                        <li>This excess cream = valuable co-product for butter, ghee, ice cream, or market cream production</li>
                        <li>Automated tracking: PLC logs cream production (total volume, fat%, diversion time) → inventory management and value accounting</li>
                    </ul>
                </li>
                
                <li><strong>Final Product Verification and Diversion:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Standardized milk passes through final in-line analyzer → verifies fat%, SNF% meet specifications</li>
                        <li>If out-of-spec detected (e.g., 2.85% fat instead of 3.0%): Automated diversion valve redirects flow back to raw milk tank for re-processing (prevents off-spec product entering pasteurizer/packaging)</li>
                        <li>Alarm systems: Visual/audible alerts notify operators of spec violations, sensor malfunctions, valve failures</li>
                    </ul>
                </li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Performance Advantages of Automated Systems</h4>
            
            <div class="overflow-x-auto w-full">
                <table class="min-w-full border-collapse border border-gray-300 mt-3 whitespace-nowrap md:whitespace-normal">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2">Manual Batch System</th>
                            <th class="border border-gray-300 px-4 py-2">Automated In-Line System</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Accuracy (fat%)</td>
                            <td class="border border-gray-300 px-4 py-2">±0.10-0.15% (human calculation/measurement error)</td>
                            <td class="border border-gray-300 px-4 py-2">±0.02-0.05% (sensor + control precision)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Batch time</td>
                            <td class="border border-gray-300 px-4 py-2">30-60 min per batch (separation + blending + testing)</td>
                            <td class="border border-gray-300 px-4 py-2">Continuous (zero downtime, instant adjustment)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Tank requirements</td>
                            <td class="border border-gray-300 px-4 py-2">Large blending tanks (3-5× hourly throughput)</td>
                            <td class="border border-gray-300 px-4 py-2">Minimal (inline mixing, <5 min holdup)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Labor</td>
                            <td class="border border-gray-300 px-4 py-2">2-3 operators per shift (calculations, valve adjustments, testing)</td>
                            <td class="border border-gray-300 px-4 py-2">1 supervisor (system monitoring, parameter entry)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Product consistency</td>
                            <td class="border border-gray-300 px-4 py-2">Batch-to-batch variation ±0.10-0.20%</td>
                            <td class="border border-gray-300 px-4 py-2">Continuous uniformity ±0.02-0.05%</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Off-spec product</td>
                            <td class="border border-gray-300 px-4 py-2">2-5% of production (entire batch rejected if calculations wrong)</td>
                            <td class="border border-gray-300 px-4 py-2"><0.5% (immediate detection and diversion)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Capital cost</td>
                            <td class="border border-gray-300 px-4 py-2">Lower ($50,000-150,000 for separator + tanks)</td>
                            <td class="border border-gray-300 px-4 py-2">Higher ($200,000-500,000 including sensors, PLC, automation)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Operating cost</td>
                            <td class="border border-gray-300 px-4 py-2">Higher (labor, rework, waste)</td>
                            <td class="border border-gray-300 px-4 py-2">Lower (reduced labor, minimal waste, optimized cream extraction)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Payback period</td>
                            <td class="border border-gray-300 px-4 py-2">-</td>
                            <td class="border border-gray-300 px-4 py-2">1.5-3 years for large plants (>100,000 L/day)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Special Standardization Scenarios</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Double-Toned Milk (1.5% fat, 9.0% SNF)</h4>
            <p>Challenge: Achieve very low fat (1.5%) while maintaining high SNF (9.0%). Standard skim milk (0.05% fat) has only ~9.0% SNF marginally sufficient.</p>
            <p><strong>Solution:</strong> Add skim milk powder (SMP) to boost SNF above 9.0% safety margin. Typical: Add 1.5-2.5% SMP (15-25 kg per 1000 L) to skim milk before cream recombination.</p>
            
            <h4 class="font-semibold mt-4 mb-2">2. Full Cream Milk (6.0% fat minimum)</h4>
            <p>Most raw milk in India: 3.5-5.0% fat (insufficient for full cream specification). Options:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Cream Addition:</strong> Add separated cream back to raw milk until 6.0% fat achieved. Example: 1000 L milk (4.5% fat) + 45 L cream (40% fat) = 1045 L (6.0% fat)</li>
                <li><strong>Blending Jersey/Buffalo Milk:</strong> Jersey milk (5.5-6.5% fat), buffalo milk (7-9% fat) naturally high-fat. Blend with lower-fat Holstein milk to achieve 6.0% target cost-effectively</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">3. Flavored Milk Standardization</h4>
            <p>Additional complexity: Sugar (10-12%), cocoa/fruit flavoring (1-3%), stabilizers (0.1-0.3%) affect total solids and density → require modified calculation accounting for all added ingredients' contribution to SNF/total solids.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Control and Compliance</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Testing and Verification</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>In-Process Monitoring:</strong> Automated analyzers provide real-time data (every 30-60 sec). Continuous PLC logging creates complete traceability record</li>
                <li><strong>Laboratory Verification:</strong> Despite automation, regulatory requirement + quality assurance best practice: Laboratory analysis of standardized milk samples every 2-4 hours using reference methods (Gerber method for fat, oven drying for SNF). Discrepancy >0.10% triggers sensor calibration check</li>
                <li><strong>Calibration:</strong> In-line sensors calibrated against certified reference standards weekly (fat: gravimetric standard, SNF: oven-dried standard). Calibration drift: typically <0.02% per week for well-maintained MIR analyzers</li>
                <li><strong>Regulatory Compliance:</strong> Final packaged product must meet labeled specifications. Random sampling by food safety authorities (FSSAI in India, FDA in US). Non-compliance penalties: Product recall, fines ($1,000-50,000), license suspension, criminal prosecution for gross violations (intentional adulteration)</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">Economic Optimization</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Minimize Over-Specification:</strong> Target exactly minimum legal requirement (e.g., 3.0% fat for toned milk, not 3.1-3.2%). Each 0.1% excess fat = cream value lost in low-value toned milk vs. high-value butter (opportunity cost $50-100 per 1000 L)</li>
                <li><strong>Maximize Cream Extraction:</strong> Advanced standardization systems achieve 98-99% cream recovery efficiency (vs. 90-95% manual). For 100,000 L/day plant: 3-4% efficiency gain = 15-20 kg extra butterfat/day = $50,000-80,000 additional annual revenue</li>
                <li><strong>Dynamic Pricing Models:</strong> Some sophisticated plants use real-time optimization algorithms: Adjust product mix (toned vs. standardized vs. full cream) based on current raw milk composition and market prices to maximize profitability hour-by-hour</li>
            </ul>
        `
    },
    hi: {
        title: "Standardization:",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Milk Standardization ka Introduction</h3>
            <p>Standardization represent karta hai ek critical compositional control process modern dairy manufacturing mein jahan fat aur/ya solids-not-fat (SNF) content of milk precisely adjust kiye jate hain to meet stringent regulatory specifications, achieve consistent product quality, optimize manufacturing efficiency, aur satisfy consumer expectations. Raw milk exhibit karta hai substantial natural compositional variability (fat: 3.0-6.5%, SNF: 8.0-9.5%, protein: 2.8-4.0%) jo attributable hai multiple biological aur environmental factors ko: cattle breed (Holstein: 3.5% fat vs. Jersey: 5.0%+ fat), genetic variation within breeds, lactation stage (colostrum: 6-8% fat → mature milk: 3.5-4.5% → late lactation: 4.5-5.5%), seasonal fluctuations (summer: -10 to -15% fat vs. winter due to heat stress, pasture composition), nutritional status (high-energy diet → higher fat), aur individual animal health. Standardization ke bina, product jo labeled hai "Toned Milk 3.0% fat" might actually contain kar sakta hai 2.7-3.3% fat batch-to-batch—creating regulatory non-compliance, consumer distrust, nutritional inconsistency, aur manufacturing problems (variable yogurt firmness, cheese yield fluctuations, cream separation in UHT milk).</p>
            
            <p><strong>Global Regulatory Standards (Examples):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>India (FSSAI):</strong> Full Cream Milk ≥6.0% fat, ≥9.0% SNF; Toned Milk 3.0% fat, ≥8.5% SNF; Double Toned 1.5% fat, ≥9.0% SNF; Skim Milk ≤0.5% fat, ≥8.7% SNF</li>
                <li><strong>USA (FDA/PMO):</strong> Whole Milk ≥3.25% fat, ≥8.25% SNF; Low-fat Milk 0.5-2.0% fat; Skim Milk <0.5% fat</li>
                <li><strong>EU (Codex):</strong> Whole Milk ≥3.5% fat; Semi-skimmed 1.5-1.8% fat; Skimmed ≤0.5% fat</li>
            </ul>
            
            <p><strong>Economic aur Quality Drivers:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Regulatory Compliance:</strong> Non-standardized milk risk karta hai penalties, product recalls, license suspension (violations common in small/unorganized dairy sector)</li>
                <li><strong>Product Consistency:</strong> Consumer expectation: every purchase identical composition → brand loyalty. Batch variation destroy karta hai consumer confidence</li>
                <li><strong>Value Optimization:</strong> Fat sabse valuable milk component hai (market cream, butter, ghee). Standardization maximize karta hai revenue by removing excess fat from whole milk for sale as premium products while meeting minimum fat specification</li>
                <li><strong>Manufacturing Control:</strong> Downstream processes (yogurt fermentation, cheese making, milk powder drying) extremely sensitive hain fat/protein ratio ke liye. Standardization enable karta hai predictable, consistent manufacturing performance</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Standardization ka Principle: Mass Balance Fundamentals</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Conservation of Mass - The Core Concept</h4>
            
            <p>Standardization operate karta hai fundamental physical law par: <strong>Conservation of Mass</strong>. Jab ingredients mix karte hain, final blend mein kisi bhi component ka total mass exactly equal hona chahiye sum of that component jo contributed hai by each ingredient. Mathematically:</p>
            
            <p><strong>General Mass Balance Equation:</strong></p>
            <p class="font-mono text-sm bg-gray-100 p-3 rounded overflow-x-auto">Σ(Mass of Ingredient_i × Component%_i) = (Total Final Mass) × (Target Component%)</p>
            
            <p><strong>Two-Ingredient Fat Standardization ke liye (Most Common):</strong></p>
            <p class="font-mono text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                (M₁ × F₁) + (M₂ × F₂) = M_total × F_target<br/>
                Jahan: M₁, M₂ = ingredients 1 & 2 ke masses<br/>
                F₁, F₂ = ingredients 1 & 2 ke fat percentages<br/>
                M_total = M₁ + M₂ (total mass)<br/>
                F_target = desired final fat percentage
            </p>
            
            <h4 class="font-semibold mt-4 mb-2">Practical Example - Mass Balance Calculation</h4>
            
            <p><strong>Problem:</strong> Dairy plant receive karta hai 10,000 L raw milk (4.5% fat, 8.8% SNF) daily. Plant produce karna chahta hai Toned Milk (3.0% fat, 8.5% SNF minimum) per India FSSAI standards. Calculate required blending.</p>
            
            <p><strong>Step 1 - Separate Raw Milk:</strong></p>
            <p>10,000 L pass karo centrifugal separator se → Skim milk (0.05% fat, 9.0% SNF) + Cream (40% fat, assumed for calculation)</p>
            
            <p><strong>Step 2 - Fat Balance Equation:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Let x = liters of skim milk used, y = liters of cream added back</li>
                <li>Skim se fat: x × 0.0005 (0.05% = 0.0005 as decimal)</li>
                <li>Cream se fat: y × 0.40</li>
                <li>Final product mein target fat: (x + y) × 0.03</li>
                <li>Equation: x(0.0005) + y(0.40) = (x + y)(0.03)</li>
            </ul>
            
            <p><strong>Step 3 - Solve (Simplified):</strong></p>
            <p>Since raw milk completely separated: x + y ≈ 10,000 L (allowing for small separation losses ~2%). Solve karne par: x ≈ 9,212 L skim, y ≈ 788 L cream mixed back. Remaining cream: 10,000 - 9,212 - 788 = ~1,000 L excess cream (available for butter/ghee production)</p>
            
            <p><strong>Economic Impact:</strong> Yeh excess 1,000 L cream (40% fat) = 400 kg butterfat. Agar sold as cream ($8/kg fat) ya butter ($12/kg fat) vs. included in toned milk ($2/kg fat), value uplift = $2,400-4,000 per day for 10,000 L plant!</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Standardization ke Methods: Calculation Techniques</h3>

            <h4 class="font-semibold mt-4 mb-2">1. Pearson Square Method (Graphical Shortcut)</h4>
            
            <p>Pearson Square (also called "Rectangle Method" ya "Square Mixing Diagram") provide karta hai visual, rapid calculation tool for two-ingredient blending. Widely used in dairy plants for quick manual calculations aur quality control verification.</p>
            
            <p><strong>Complete Explanation ke saath Detailed Example:</strong></p>
            <p><strong>Objective:</strong> Produce 1,000 kg standardized milk with <strong>3.5% fat</strong> by blending whole milk (5.5% fat) aur skim milk (0.1% fat).</p>
            
            <p><strong>Step-by-Step Pearson Square Application:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Square Draw karo aur Corners Label karo:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2">
                        <li>Top-left corner: Higher-fat ingredient ka fat% (Whole Milk: 5.5%)</li>
                        <li>Bottom-left corner: Lower-fat ingredient ka fat% (Skim Milk: 0.1%)</li>
                        <li>Center: Target fat% (Desired: 3.5%)</li>
                    </ul>
                </li>
                <li><strong>Diagonal Subtraction perform karo (CRITICAL: Always subtract smaller from larger to avoid negatives):</strong>
                    <div class="my-4 p-4 border rounded-lg bg-blue-50 overflow-x-auto">
                        <div class="grid grid-cols-3 gap-4 items-center min-w-[300px]">
                            <div class="text-center">
                                <div>Whole Milk</div>
                                <div class="text-2xl font-bold">5.5%</div>
                            </div>
                            <div class="text-3xl font-bold text-center">3.5%</div>
                            <div class="text-center">
                                <div class="text-green-600 font-bold">Parts of Whole Milk</div>
                                <div class="text-2xl font-bold text-green-600">3.4</div>
                                <div class="text-sm">(3.5 - 0.1)</div>
                            </div>
                            <div class="text-center">
                                <div>Skim Milk</div>
                                <div class="text-2xl font-bold">0.1%</div>
                            </div>
                            <div></div>
                            <div class="text-center">
                                <div class="text-red-600 font-bold">Parts of Skim Milk</div>
                                <div class="text-2xl font-bold text-red-600">2.0</div>
                                <div class="text-sm">(5.5 - 3.5)</div>
                            </div>
                        </div>
                    </div>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Top-right (whole milk ke parts) = Center - Bottom-left = 3.5 - 0.1 = <strong>3.4 parts</strong></li>
                        <li>Bottom-right (skim milk ke parts) = Top-left - Center = 5.5 - 3.5 = <strong>2.0 parts</strong></li>
                    </ul>
                </li>
                <li><strong>Results ka Interpretation:</strong>
                    <p>Mix ratio: <strong>3.4 parts whole milk : 2.0 parts skim milk</strong></p>
                    <p>Total parts = 3.4 + 2.0 = 5.4 parts</p>
                    <p><strong>Physical Meaning:</strong> Har 5.4 kg of final standardized milk ke liye, use karo 3.4 kg whole milk aur 2.0 kg skim milk</p>
                </li>
                <li><strong>Production Requirement ke liye Scale karo (1,000 kg):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Whole Milk Required:</strong> (1,000 kg × 3.4 parts) ÷ 5.4 total parts = <strong>629.6 kg</strong></li>
                        <li><strong>Skim Milk Required:</strong> (1,000 kg × 2.0 parts) ÷ 5.4 total parts = <strong>370.4 kg</strong></li>
                        <li><strong>Verification:</strong> 629.6 + 370.4 = 1,000 kg ✓</li>
                    </ul>
                </li>
                <li><strong>Final Fat Content Verification (Quality Control Check):</strong>
                    <p>Whole milk se fat: 629.6 kg × 0.055 = 34.63 kg fat</p>
                    <p>Skim milk se fat: 370.4 kg × 0.001 = 0.37 kg fat</p>
                    <p>Total fat: 34.63 + 0.37 = 35.0 kg fat in 1,000 kg milk</p>
                    <p>Final fat%: (35.0 ÷ 1,000) × 100 = <strong>3.5%</strong> ✓ (Perfect match!)</p>
                </li>
            </ol>
            
            <p><strong>Pearson Square Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Rapid calculation (30-60 seconds manual calculation)</li>
                <li>Complex algebra required nahi (suitable for plant floor operators)</li>
                <li>Visual/intuitive (easy to teach, remember, verify)</li>
                <li>Two-ingredient mixing ke liye accurate</li>
            </ul>
            
            <p><strong>Limitations:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Sirf TWO ingredients ke liye work karta hai (cream + skim, whole + skim, etc.). Three+ component blends handle nahi kar sakta</li>
                <li>Single target parameter only (fat OR SNF, not both simultaneously)</li>
                <li>Simultaneous fat AND SNF standardization ke liye → algebraic method required</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Algebraic Method (Simultaneous Equations for Dual Standardization)</h4>
            
            <p>Jab fat AND SNF dono specifications meet karni hain (common requirement), algebraic approach using simultaneous equations necessary ban jata hai.</p>
            
            <p><strong>Complex Example: Dual Standardization (Fat + SNF):</strong></p>
            <p><strong>Problem:</strong> 5,000 kg Toned Milk produce karo jo meet kare India FSSAI standards: 3.0% fat, 8.5% SNF minimum. Available ingredients: Whole milk (5.0% fat, 8.8% SNF), Skim milk (0.1% fat, 9.0% SNF).</p>
            
            <p><strong>Solution:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Variables Define karo:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2">
                        <li>Let W = kg of whole milk needed</li>
                        <li>Let S = kg of skim milk needed</li>
                    </ul>
                </li>
                <li><strong>Equations Set Up karo:</strong>
                    <p><strong>Equation 1 (Total Mass Balance):</strong></p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">W + S = 5,000 kg</p>
                    
                    <p><strong>Equation 2 (Fat Balance):</strong></p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">W(0.050) + S(0.001) = 5,000(0.030)</p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">0.050W + 0.001S = 150 kg fat</p>
                    
                    <p><strong>Equation 3 (SNF Balance):</strong></p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">W(0.088) + S(0.090) = 5,000(0.085)</p>
                    <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">0.088W + 0.090S = 425 kg SNF</p>
                </li>
                <li><strong>System of Equations Solve karo:</strong>
                    <p>Equation 1 se: S = 5,000 - W</p>
                    <p>Equation 2 mein substitute karo:</p>
                    <div class="overflow-x-auto">
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">0.050W + 0.001(5,000 - W) = 150</p>
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">0.050W + 5 - 0.001W = 150</p>
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">0.049W = 145</p>
                        <p class="font-mono bg-gray-100 p-2 rounded whitespace-nowrap">W = 2,959 kg</p>
                    </div>
                    <p>Therefore: S = 5,000 - 2,959 = <strong>2,041 kg</strong></p>
                </li>
                <li><strong>SNF Specification Verify karo:</strong>
                    <p>SNF = 2,959(0.088) + 2,041(0.090) = 260.4 + 183.7 = 444.1 kg</p>
                    <p>SNF% = (444.1 ÷ 5,000) × 100 = <strong>8.88%</strong> > 8.5% minimum ✓ (Requirement exceed karta hai)</p>
                </li>
            </ol>
            
            <p><strong>Result Interpretation:</strong></p>
            <p>5,000 kg Toned Milk (3.0% fat, 8.5%+ SNF) produce karne ke liye, blend <strong>2,959 kg whole milk + 2,041 kg skim milk</strong>. Final product: 3.0% fat (spec exactly meet karta hai), 8.88% SNF (minimum se 0.38% exceed - acceptable over-compliance jo provide karta hai safety margin).</p>
            
            <h4 class="font-semibold mt-4 mb-2">3. Advanced: Milk Powder Addition ke via SNF Adjustment</h4>
            
            <p>Kabhi-kabhi fat-standardized milk mein insufficient SNF hota hai (<8.5% for Indian toned milk). Solution: Skim milk powder (SMP) add karo to boost SNF without affecting fat%.</p>
            
            <p><strong>Calculation Example:</strong></p>
            <p>Fat-standardized milk: 1,000 kg, 3.0% fat, but only 8.2% SNF (8.5% requirement se below). SMP composition: 96% SNF, 0.5% fat. Kitna SMP add karna hai?</p>
            
            <p><strong>Target:</strong> SNF raise karo from 8.2% to 8.5% in final product</p>
            <p><strong>Let x = kg SMP to add</strong></p>
            <p><strong>SNF Balance:</strong></p>
            <p class="font-mono bg-gray-100 p-2 rounded overflow-x-auto">
                1,000(0.082) + x(0.96) = (1,000 + x)(0.085)<br/>
                82 + 0.96x = 85 + 0.085x<br/>
                0.875x = 3<br/>
                x = 3.43 kg SMP
            </p>
            <p><strong>Result:</strong> 3.43 kg SMP add karo to 1,000 kg milk → Final: 1,003.43 kg milk with 3.0% fat (unchanged), 8.5% SNF (target achieved)</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Industrial Standardization Process: Automated In-Line Systems</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Modern Integrated Standardization Technology</h4>
            
            <p>Contemporary large-scale dairy plants (processing 100,000-1,000,000 L/day) employ karte hain fully automated, continuous standardization systems jo integrated hain centrifugal separation ke saath, eliminating manual calculations aur batch blending tanks. Yeh represent karta hai quantum leap in precision, efficiency, aur flexibility.</p>
            
            <p><strong>System Components aur Process Flow:</strong></p>
            
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Pre-Heating aur Clarification:</strong>
                    <p>Raw milk (4°C from silos) heat kiya jata hai to 40-55°C in plate heat exchanger (PHE). Separation ke liye optimal temperature: Fat viscosity reduced (better separation efficiency), bacterial multiplication still minimal (<10°C/hour heating rate limit karta hai growth).</p>
                </li>
                
                <li><strong>Centrifugal Separation (Cream Separator):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Technology:</strong> High-speed disc-stack centrifuge (6,000-9,000 RPM, 4,000-8,000 G centrifugal force). Separate karta hai milk into two precisely controlled streams: Skim milk (0.03-0.10% fat, adjustable), Cream (35-45% fat, adjustable via back-pressure valve)</li>
                        <li><strong>Capacity:</strong> Industrial separators: 10,000-50,000 L/hr throughput</li>
                        <li><strong>Separation Efficiency:</strong> >99.5% fat recovery (minimal fat losses to skim stream)</li>
                        <li><strong>Temperature Maintenance:</strong> Jacketed separator maintain karta hai 40-50°C throughout process (optimal fat fluidity, prevent cream thickening/clogging)</li>
                    </ul>
                </li>
                
                <li><strong>Real-Time Compositional Analysis (In-Line Sensors):</strong>
                    <p>Teen critical measurement points, har ek equipped with online analyzer:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Raw Milk Inlet:</strong> Measure karta hai fat%, SNF%, protein%, total solids% of incoming milk (provides feed composition for calculation)</li>
                        <li><strong>Skim Milk Stream:</strong> Monitor karta hai fat% in skim (typically 0.05-0.08%), SNF% (typically 8.9-9.1%)</li>
                        <li><strong>Cream Stream:</strong> Monitor karta hai fat% in cream (typically 38-42%)</li>
                        <li><strong>Standardized Milk Outlet:</strong> Final verification ki blended product meet karta hai target (e.g., 3.0% fat, 8.5% SNF)</li>
                    </ul>
                    
                    <p><strong>Analyzer Technology Options:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Mid-Infrared (MIR) Spectroscopy:</strong> Most common. Measure karta hai fat, protein, lactose, SNF simultaneously. Principle: Different milk components absorb specific infrared wavelengths. Accuracy: ±0.03% for fat, ±0.05% for SNF. Response time: 30-60 seconds. Cost: $30,000-60,000 per unit</li>
                        <li><strong>Near-Infrared (NIR) Spectroscopy:</strong> Alternative technology, similar principle, slightly lower accuracy but faster (15-30 sec)</li>
                        <li><strong>Ultrasonic Sensors:</strong> Measure karte hain milk density aur sound velocity → calculate fat/SNF. Less accurate but more robust, lower cost ($10,000-20,000). Suitable for less critical applications</li>
                    </ul>
                </li>
                
                <li><strong>Programmable Logic Controller (PLC) - The Brain:</strong>
                    <p><strong>Functions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Data Acquisition:</strong> Continuously receive karta hai composition data from all in-line sensors (every 5-30 seconds updates)</li>
                        <li><strong>Real-Time Calculation:</strong> PLC programmed hai with standardization algorithms (mass balance equations). Example: Agar target hai 3.0% fat toned milk, aur current readings show raw milk = 4.8% fat, skim = 0.06% fat, cream = 40% fat, PLC calculate karta hai required cream:skim ratio instantly using: <span class="font-mono text-xs md:text-base">(Skim × 0.0006 + Cream × 0.40) = Total × 0.030</span></li>
                        <li><strong>Proportional-Integral-Derivative (PID) Control:</strong> Advanced control algorithm continuously adjust karta hai cream recombination valve to maintain target within ±0.02% tolerance (extremely tight control impossible with manual operation)</li>
                        <li><strong>Adaptive Response:</strong> Compensate karta hai for feed variation. Agar raw milk fat% drift karta hai from 4.8% to 5.2%, PLC instantly recalculate aur adjust cream valve within 10-30 seconds (prevents off-spec product)</li>
                    </ul>
                </li>
                
                <li><strong>Automated Cream Recombination:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Modulating Control Valve:</strong> Precision pneumatic ya electric valve on cream line, receive karta hai control signal (4-20 mA or 0-10V) from PLC. Valve position (0-100% open) determine karta hai cream flow rate back into skim stream</li>
                        <li><strong>Flow Rate Control:</strong> Agar standardizing 20,000 L/hr milk to 3.0% fat, aur calculation show need 8% cream recombination (1,600 L/hr cream), valve adjust karta hai to deliver exactly 1,600 L/hr</li>
                        <li><strong>Inline Blending:</strong> Cream aur skim streams converge karte hain in static mixer (series of fixed helical blades jo create karte hain turbulent mixing) → homogeneous blend in 2-5 seconds residence time</li>
                        <li><strong>Response Time:</strong> System respond karta hai to composition changes within 15-45 seconds (sensor response + PLC calculation + valve actuation + mixing)</li>
                    </ul>
                </li>
                
                <li><strong>Excess Cream Diversion:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Cream jo required nahi for standardization diverted via three-way valve to separate cream storage tank (maintained at 4-6°C)</li>
                        <li>Yeh excess cream = valuable co-product for butter, ghee, ice cream, ya market cream production</li>
                        <li>Automated tracking: PLC log karta hai cream production (total volume, fat%, diversion time) → inventory management aur value accounting</li>
                    </ul>
                </li>
                
                <li><strong>Final Product Verification aur Diversion:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Standardized milk pass karta hai through final in-line analyzer → verify karta hai fat%, SNF% meet specifications</li>
                        <li>If out-of-spec detect hota hai (e.g., 2.85% fat instead of 3.0%): Automated diversion valve redirect karta hai flow back to raw milk tank for re-processing (prevents off-spec product entering pasteurizer/packaging)</li>
                        <li>Alarm systems: Visual/audible alerts notify karte hain operators of spec violations, sensor malfunctions, valve failures</li>
                    </ul>
                </li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Automated Systems ke Performance Advantages</h4>
            
            <div class="overflow-x-auto w-full">
                <table class="min-w-full border-collapse border border-gray-300 mt-3 whitespace-nowrap md:whitespace-normal">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2">Manual Batch System</th>
                            <th class="border border-gray-300 px-4 py-2">Automated In-Line System</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Accuracy (fat%)</td>
                            <td class="border border-gray-300 px-4 py-2">±0.10-0.15% (human calculation/measurement error)</td>
                            <td class="border border-gray-300 px-4 py-2">±0.02-0.05% (sensor + control precision)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Batch time</td>
                            <td class="border border-gray-300 px-4 py-2">30-60 min per batch (separation + blending + testing)</td>
                            <td class="border border-gray-300 px-4 py-2">Continuous (zero downtime, instant adjustment)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Tank requirements</td>
                            <td class="border border-gray-300 px-4 py-2">Large blending tanks (3-5× hourly throughput)</td>
                            <td class="border border-gray-300 px-4 py-2">Minimal (inline mixing, <5 min holdup)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Labor</td>
                            <td class="border border-gray-300 px-4 py-2">2-3 operators per shift (calculations, valve adjustments, testing)</td>
                            <td class="border border-gray-300 px-4 py-2">1 supervisor (system monitoring, parameter entry)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Product consistency</td>
                            <td class="border border-gray-300 px-4 py-2">Batch-to-batch variation ±0.10-0.20%</td>
                            <td class="border border-gray-300 px-4 py-2">Continuous uniformity ±0.02-0.05%</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Off-spec product</td>
                            <td class="border border-gray-300 px-4 py-2">2-5% of production (entire batch rejected agar calculations wrong)</td>
                            <td class="border border-gray-300 px-4 py-2"><0.5% (immediate detection aur diversion)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Capital cost</td>
                            <td class="border border-gray-300 px-4 py-2">Lower ($50,000-150,000 for separator + tanks)</td>
                            <td class="border border-gray-300 px-4 py-2">Higher ($200,000-500,000 including sensors, PLC, automation)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Operating cost</td>
                            <td class="border border-gray-300 px-4 py-2">Higher (labor, rework, waste)</td>
                            <td class="border border-gray-300 px-4 py-2">Lower (reduced labor, minimal waste, optimized cream extraction)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Payback period</td>
                            <td class="border border-gray-300 px-4 py-2">-</td>
                            <td class="border border-gray-300 px-4 py-2">1.5-3 years for large plants (>100,000 L/day)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Special Standardization Scenarios</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Double-Toned Milk (1.5% fat, 9.0% SNF)</h4>
            <p>Challenge: Achieve very low fat (1.5%) while maintaining high SNF (9.0%). Standard skim milk (0.05% fat) has only ~9.0% SNF jo marginally sufficient hai.</p>
            <p><strong>Solution:</strong> Skim milk powder (SMP) add karo to boost SNF above 9.0% safety margin. Typical: 1.5-2.5% SMP add karo (15-25 kg per 1000 L) to skim milk before cream recombination.</p>
            
            <h4 class="font-semibold mt-4 mb-2">2. Full Cream Milk (6.0% fat minimum)</h4>
            <p>India mein most raw milk: 3.5-5.0% fat (insufficient for full cream specification). Options:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Cream Addition:</strong> Separated cream add back karo to raw milk until 6.0% fat achieve. Example: 1000 L milk (4.5% fat) + 45 L cream (40% fat) = 1045 L (6.0% fat)</li>
                <li><strong>Jersey/Buffalo Milk Blending:</strong> Jersey milk (5.5-6.5% fat), buffalo milk (7-9% fat) naturally high-fat. Blend with lower-fat Holstein milk to achieve 6.0% target cost-effectively</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">3. Flavored Milk Standardization</h4>
            <p>Additional complexity: Sugar (10-12%), cocoa/fruit flavoring (1-3%), stabilizers (0.1-0.3%) affect karte hain total solids aur density → require modified calculation jo account kare all added ingredients' contribution to SNF/total solids.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Control aur Compliance</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Testing aur Verification</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>In-Process Monitoring:</strong> Automated analyzers provide karte hain real-time data (every 30-60 sec). Continuous PLC logging create karta hai complete traceability record</li>
                <li><strong>Laboratory Verification:</strong> Automation ke bawajud, regulatory requirement + quality assurance best practice: Standardized milk samples ka laboratory analysis every 2-4 hours using reference methods (Gerber method for fat, oven drying for SNF). Discrepancy >0.10% trigger karta hai sensor calibration check</li>
                <li><strong>Calibration:</strong> In-line sensors calibrate kiye jate hain against certified reference standards weekly (fat: gravimetric standard, SNF: oven-dried standard). Calibration drift: typically <0.02% per week for well-maintained MIR analyzers</li>
                <li><strong>Regulatory Compliance:</strong> Final packaged product meet karna chahiye labeled specifications. Food safety authorities (FSSAI in India, FDA in US) ke dwara random sampling. Non-compliance penalties: Product recall, fines ($1,000-50,000), license suspension, criminal prosecution for gross violations (intentional adulteration)</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">Economic Optimization</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Minimize Over-Specification:</strong> Target exactly minimum legal requirement (e.g., 3.0% fat for toned milk, not 3.1-3.2%). Har 0.1% excess fat = cream value lost in low-value toned milk vs. high-value butter (opportunity cost $50-100 per 1000 L)</li>
                <li><strong>Maximize Cream Extraction:</strong> Advanced standardization systems achieve karte hain 98-99% cream recovery efficiency (vs. 90-95% manual). 100,000 L/day plant ke liye: 3-4% efficiency gain = 15-20 kg extra butterfat/day = $50,000-80,000 additional annual revenue</li>
                <li><strong>Dynamic Pricing Models:</strong> Kuch sophisticated plants use karte hain real-time optimization algorithms: Product mix adjust karte hain (toned vs. standardized vs. full cream) based on current raw milk composition aur market prices to maximize profitability hour-by-hour</li>
            </ul>
        `
    }
};
