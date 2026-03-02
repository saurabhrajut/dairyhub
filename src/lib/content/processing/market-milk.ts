
export const marketMilkContent = {
    en: {
        title: "Market Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Market Milk</h3>
            <p>Market milk, also known as liquid milk, refers to milk that is processed, packaged, and sold for direct consumption. It is one of the most widely consumed dairy products globally. The primary objective of market milk processing is to ensure its safety for consumers by eliminating harmful microorganisms and to enhance its shelf life while preserving its nutritional and sensory qualities as much as possible.</p>
            <p>The processing involves a series of carefully controlled steps, from reception of raw milk to its final packaging. Standardization is a key part of this process, where the fat and solids-not-fat (SNF) content is adjusted to meet legal and commercial standards for different types of milk.</p>
            <p>India is the largest producer and consumer of milk in the world, with annual production exceeding 230 million metric tonnes (2023-24). The organized dairy sector processes approximately 25-30% of this milk into market milk and various dairy products. The Operation Flood programme, launched in 1970 by the National Dairy Development Board (NDDB) under Dr. Verghese Kurien, revolutionized India's dairy industry and established a robust milk procurement and processing network.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Historical Background of Market Milk</h3>
            <p>The concept of market milk processing evolved significantly over centuries:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Pre-1860s:</strong> Milk was sold raw, door-to-door, often adulterated and a source of diseases like tuberculosis, typhoid, and brucellosis.</li>
                <li><strong>1864:</strong> Louis Pasteur developed the principle of pasteurization, initially for wine preservation.</li>
                <li><strong>1886:</strong> Franz von Soxhlet first suggested applying pasteurization to milk.</li>
                <li><strong>1908:</strong> Chicago became one of the first cities to require pasteurization of milk.</li>
                <li><strong>1946:</strong> India's first modern dairy processing plant was established in Anand, Gujarat.</li>
                <li><strong>1970:</strong> Operation Flood launched, transforming India from a milk-deficient to a milk-surplus nation.</li>
                <li><strong>2006:</strong> FSSAI was established under the Food Safety and Standards Act, consolidating various food laws including those governing milk.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Market Milk (as per FSSAI)</h3>
            <p>In India, the Food Safety and Standards Authority of India (FSSAI) has defined several types of market milk based on their fat and SNF content. Understanding these types is crucial for both consumers and dairy professionals.</p>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Milk</th>
                            <th class="p-2 border">Minimum Fat % (m/m)</th>
                            <th class="p-2 border">Minimum SNF % (m/m)</th>
                            <th class="p-2 border">Typical Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Toned Milk</strong></td><td class="p-2 border">3.0</td><td class="p-2 border">8.5</td><td class="p-2 border">Buffalo + SMP + Water</td></tr>
                        <tr><td class="p-2 border"><strong>Double Toned Milk</strong></td><td class="p-2 border">1.5</td><td class="p-2 border">9.0</td><td class="p-2 border">Buffalo + SMP + Water</td></tr>
                        <tr><td class="p-2 border"><strong>Standardized Milk</strong></td><td class="p-2 border">4.5</td><td class="p-2 border">8.5</td><td class="p-2 border">Buffalo/Cow milk blend</td></tr>
                        <tr><td class="p-2 border"><strong>Full Cream Milk</strong></td><td class="p-2 border">6.0</td><td class="p-2 border">9.0</td><td class="p-2 border">Buffalo milk</td></tr>
                        <tr><td class="p-2 border"><strong>Skimmed Milk</strong></td><td class="p-2 border">Not more than 0.5</td><td class="p-2 border">8.7</td><td class="p-2 border">After cream separation</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Composition of Cow and Buffalo Milk (Comparison)</h4>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Cow Milk (%)</th>
                            <th class="p-2 border">Buffalo Milk (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Water</td><td class="p-2 border">87.0</td><td class="p-2 border">84.0</td></tr>
                        <tr><td class="p-2 border">Fat</td><td class="p-2 border">3.5 - 4.0</td><td class="p-2 border">6.0 - 7.5</td></tr>
                        <tr><td class="p-2 border">Protein</td><td class="p-2 border">3.2 - 3.5</td><td class="p-2 border">3.8 - 4.2</td></tr>
                        <tr><td class="p-2 border">Lactose</td><td class="p-2 border">4.6 - 4.8</td><td class="p-2 border">4.8 - 5.0</td></tr>
                        <tr><td class="p-2 border">Minerals (Ash)</td><td class="p-2 border">0.7</td><td class="p-2 border">0.8</td></tr>
                        <tr><td class="p-2 border">Total Solids</td><td class="p-2 border">12.5 - 13.0</td><td class="p-2 border">15.5 - 17.0</td></tr>
                        <tr><td class="p-2 border">SNF</td><td class="p-2 border">8.5 - 9.0</td><td class="p-2 border">9.0 - 10.0</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Detailed Information on Milk Types</h4>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">Toned Milk</h5>
                    <p>Made by adding skim milk powder and water to whole milk (usually buffalo milk) to reduce its fat content. It's a popular choice for daily consumption, offering a balance between the richness of whole milk and the leanness of skim milk. Ideal for consumers seeking moderate fat intake without sacrificing mouthfeel. The term "toned" originates from the concept of "toning up" the large volumes of skim milk reconstituted from skim milk powder with fresh buffalo milk to create an acceptable product.</p>
                </div>
                <div>
                    <h5 class="font-bold">Double Toned Milk</h5>
                    <p>Contains even less fat than toned milk, with a slightly higher SNF content to maintain its body and nutritional value (primarily protein and calcium). Targeted towards highly health-conscious individuals and those on low-fat diets. The term implies the milk has been "toned" twice, or further reduced in fat content compared to toned milk.</p>
                </div>
                <div>
                    <h5 class="font-bold">Standardized Milk</h5>
                    <p>The fat and SNF content are adjusted to a specific, consistent level, often between that of toned and full cream milk. This ensures a uniform product quality throughout the year, irrespective of seasonal variations in raw milk composition. It's an all-purpose milk. Standardization is achieved by either removing cream from high-fat milk or adding cream to low-fat milk.</p>
                </div>
                <div>
                    <h5 class="font-bold">Full Cream Milk</h5>
                    <p>Has the highest fat content, giving it a rich taste and creamy texture. It is often preferred for making traditional Indian sweets (mithai), rich curd (dahi), paneer, khoa, and for growing children who need higher energy intake. Buffalo milk naturally qualifies for this category in most cases.</p>
                </div>
                <div>
                    <h5 class="font-bold">Skimmed Milk</h5>
                    <p>Virtually all fat has been removed through centrifugal separation. It has a very thin consistency and a slightly bluish-white appearance. Primarily consumed by those on strict low-fat or low-calorie diets. It retains most of the protein, calcium, and other non-fat solids. Also used extensively as an ingredient in dairy product manufacture.</p>
                </div>
                <div>
                    <h5 class="font-bold">Flavoured Milk</h5>
                    <p>Market milk with added flavours (chocolate, strawberry, mango, cardamom, rose, etc.), sweeteners, and sometimes stabilizers. As per FSSAI, flavoured milk should contain a minimum of 1.0% fat and 7.0% SNF (from milk). It is a value-added product targeting younger consumers and has shown rapid market growth.</p>
                </div>
                <div>
                    <h5 class="font-bold">Fortified Milk</h5>
                    <p>Milk fortified with essential micronutrients like Vitamin A and Vitamin D, as per FSSAI guidelines. Vitamin A is added at 770 μg RE per litre and Vitamin D at 550 IU per litre. This addresses widespread micronutrient deficiencies in the Indian population, especially among children and women.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Raw Milk Quality Assessment</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Platform Tests (Receiving Dock Tests)</h3>
            <p>These are rapid tests conducted at the milk reception dock to quickly assess the quality and suitability of incoming raw milk for processing. They serve as the first line of quality defense.</p>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">1. Organoleptic Test</h4>
            <p>The first and simplest test conducted using the human senses:</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Appearance:</strong> Milk should have a normal white to yellowish-white colour. Abnormal colours (pink, brown, bluish) indicate contamination or disease.</li>
                <li><strong>Smell/Odour:</strong> Fresh milk has a pleasant, mild, slightly sweet smell. Sour, rancid, bitter, or feed-like odours indicate quality issues.</li>
                <li><strong>Touch/Feel:</strong> Normal milk should feel smooth and slightly viscous. Ropy or slimy texture indicates heavy microbial contamination.</li>
                <li><strong>Taste:</strong> Optional due to safety concerns, but fresh milk tastes slightly sweet.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2. Clot-on-Boiling (COB) Test</h4>
            <p>A rapid test to detect milk with high acidity (developed acidity >0.20% LA) or abnormal milk (colostrum, mastitic milk).</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> Take 5 ml of milk in a test tube. Boil the sample over a flame or in boiling water bath.</li>
                <li><strong>Interpretation:</strong> If the milk forms clots or coagulates upon boiling, it is <strong>positive</strong> (rejected). If it remains smooth, it is <strong>negative</strong> (accepted).</li>
                <li><strong>Principle:</strong> High acidity destabilizes casein micelles, causing them to coagulate when heated.</li>
                <li><strong>Significance:</strong> Milk that fails COB test cannot withstand pasteurization heat treatment and will cause fouling in heat exchangers.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">3. Alcohol Test (68% or 75% Ethanol)</h4>
            <p>A more sensitive alternative to the COB test that detects heat instability of milk.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> Mix equal volumes (2 ml each) of milk and 68% (or 75%) ethanol in a test tube or petri dish. Observe for flocculation.</li>
                <li><strong>Interpretation:</strong> Formation of clots/flakes indicates <strong>positive</strong> result (milk is unstable, rejected). No flocculation = <strong>negative</strong> (accepted).</li>
                <li><strong>Principle:</strong> Alcohol dehydrates the casein micelles and reduces the dielectric constant, destabilizing milk with high acidity or ionic imbalance.</li>
                <li><strong>Applications:</strong> Essential for UHT milk processing where heat stability is paramount. The 75% alcohol test is more stringent.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">4. Acidity Test (Titratable Acidity)</h4>
            <p>Measures the total acidity of milk, including natural acidity and developed acidity (from microbial fermentation of lactose to lactic acid).</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> Pipette 10 ml of milk into a porcelain dish. Add 1 ml of phenolphthalein indicator. Titrate with N/10 NaOH until a faint pink colour persists for 10-15 seconds.</li>
                <li><strong>Formula:</strong> % Lactic Acid (% LA) = (ml of NaOH × 0.009 × 100) / Volume of milk sample</li>
                <li><strong>Normal Values:</strong> Fresh cow milk: 0.13-0.14% LA; Fresh buffalo milk: 0.14-0.15% LA</li>
                <li><strong>Natural Acidity:</strong> Due to CO₂, casein, albumin, citrates, and phosphates (0.12-0.16% LA)</li>
                <li><strong>Developed Acidity:</strong> Due to lactic acid produced by bacterial fermentation of lactose</li>
                <li><strong>Rejection Limit:</strong> Milk with acidity >0.18% LA is generally considered to have developed acidity and may be rejected.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">5. Lactometer Test (Specific Gravity)</h4>
            <p>Used to detect possible adulteration of milk with water.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Instrument:</strong> Lactometer (Quevenne type, ISI type, or Zeal type)</li>
                <li><strong>Procedure:</strong> Pour well-mixed milk into a lactometer jar. Gently lower the lactometer and read at the upper meniscus after it stabilizes. Record the temperature.</li>
                <li><strong>Normal Range:</strong> Cow milk: 1.028-1.030; Buffalo milk: 1.030-1.032 (at a standard temperature)</li>
                <li><strong>Interpretation:</strong> Low reading suggests water addition. Abnormally high reading may indicate addition of skim milk powder or removal of fat (skimming).</li>
                <li><strong>Temperature Correction:</strong> For every 1°C above standard temperature, add 0.0002 to the reading. For every 1°C below, subtract 0.0002.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">6. Fat Test (Gerber Method)</h4>
            <p>A rapid volumetric method to determine the fat percentage in milk.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Equipment:</strong> Gerber butyrometer, Gerber centrifuge, pipettes</li>
                <li><strong>Reagents:</strong> Gerber sulfuric acid (sp. gr. 1.807-1.812) and amyl alcohol</li>
                <li><strong>Procedure:</strong> Add 10 ml H₂SO₄ to butyrometer → 10.75 ml milk → 1 ml amyl alcohol → stopper and mix → centrifuge for 5 min → read fat column in the graduated neck</li>
                <li><strong>Principle:</strong> H₂SO₄ dissolves proteins and releases fat. Amyl alcohol aids in clear separation of the fat layer. Centrifugation facilitates complete separation.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">7. Methylene Blue Reduction Test (MBRT)</h4>
            <p>An indirect method to estimate the microbial load (bacterial quality) of raw milk.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> Add 1 ml of methylene blue dye solution to 10 ml of milk in a sterilized test tube. Mix well, seal, and incubate at 37°C in a water bath. Observe for decolourization.</li>
                <li><strong>Principle:</strong> Bacteria in milk metabolize and produce reducing substances (enzymes like reductase) that reduce the blue dye (oxidized form) to its colourless leuco form (reduced form). The more bacteria present, the faster the dye is reduced.</li>
            </ul>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">MBRT Time</th>
                            <th class="p-2 border">Approximate Bacterial Count (per ml)</th>
                            <th class="p-2 border">Grading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">>5 hours</td><td class="p-2 border">< 5,00,000</td><td class="p-2 border">Very Good (Grade 1)</td></tr>
                        <tr><td class="p-2 border">3-5 hours</td><td class="p-2 border">5,00,000 - 40,00,000</td><td class="p-2 border">Good (Grade 2)</td></tr>
                        <tr><td class="p-2 border">1-3 hours</td><td class="p-2 border">40,00,000 - 2,00,00,000</td><td class="p-2 border">Fair (Grade 3)</td></tr>
                        <tr><td class="p-2 border"><30 minutes</td><td class="p-2 border">> 2,00,00,000</td><td class="p-2 border">Poor (Grade 4 - Rejected)</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">8. Adulteration Tests</h4>
            <p>Various rapid tests to detect common adulterants:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Adulterant</th>
                            <th class="p-2 border">Test/Reagent Used</th>
                            <th class="p-2 border">Positive Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Water</td><td class="p-2 border">Lactometer + Fat test (SNF calculation)</td><td class="p-2 border">Low specific gravity, low SNF</td></tr>
                        <tr><td class="p-2 border">Starch</td><td class="p-2 border">Iodine test</td><td class="p-2 border">Blue colour</td></tr>
                        <tr><td class="p-2 border">Sugar (Sucrose)</td><td class="p-2 border">Seliwanoff's / Barfoed's test / Modified Resorcinol test</td><td class="p-2 border">Red/rose colour</td></tr>
                        <tr><td class="p-2 border">Urea</td><td class="p-2 border">DMAB test (p-dimethylaminobenzaldehyde)</td><td class="p-2 border">Distinct yellow colour</td></tr>
                        <tr><td class="p-2 border">Neutralizers (NaOH, Na₂CO₃)</td><td class="p-2 border">Rosalic acid test</td><td class="p-2 border">Rose-red colour</td></tr>
                        <tr><td class="p-2 border">Detergent</td><td class="p-2 border">Methylene blue + shake test</td><td class="p-2 border">Stable blue foam</td></tr>
                        <tr><td class="p-2 border">Hydrogen Peroxide</td><td class="p-2 border">Vanadium pentoxide test</td><td class="p-2 border">Red colour</td></tr>
                        <tr><td class="p-2 border">Formalin</td><td class="p-2 border">Hehner's test (H₂SO₄ + FeCl₃)</td><td class="p-2 border">Purple/violet ring at junction</td></tr>
                        <tr><td class="p-2 border">Salt</td><td class="p-2 border">AgNO₃ test (Silver nitrate)</td><td class="p-2 border">Yellow colour (excess chlorides)</td></tr>
                        <tr><td class="p-2 border">Maltodextrin/Glucose</td><td class="p-2 border">Barfoed's test</td><td class="p-2 border">Red precipitate within 1-2 min</td></tr>
                        <tr><td class="p-2 border">Vegetable Fat (Vanaspati)</td><td class="p-2 border">Baudouin test</td><td class="p-2 border">Crimson/red colour in acid layer</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Market Milk with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Market Milk</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception (Testing for quality & safety) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-filtration / Straining <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (to &lt;5°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Storage (Insulated Silos, &lt;5°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Clarification / Centrifugal Separation (Removal of impurities) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Fat & SNF Adjustment) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Pre-heating (35-40°C for separation efficiency) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (e.g., 72°C for 15 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (at ~65°C, 2000-2500 psi) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (to &lt;5°C in PHE regeneration section)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (Aseptic/Hygienic filling) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage (&lt;5°C) & Distribution <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Key for Food Safety Controls:</h5>
                <ul class="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li><span class="bg-gray-200 p-1 rounded">PRP</span> = Prerequisite Programme (basic hygiene & operational conditions)</li>
                    <li><span class="bg-orange-200 p-1 rounded">oPRP</span> = Operational Prerequisite Programme (control measures identified by hazard analysis, monitored but not at CCP level)</li>
                    <li><span class="bg-red-200 p-1 rounded">CCP</span> = Critical Control Point (step where control is essential to prevent, eliminate, or reduce hazard to acceptable level)</li>
                </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Raw Milk Reception & Testing (PRP):</strong>
                    <p>Upon arrival at the dairy plant, raw milk undergoes rigorous quality testing at the reception dock. This is a <strong>Prerequisite Program (PRP)</strong> to ensure that only good quality raw material enters the processing line. Tests include:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Organoleptic examination (appearance, smell, taste)</li>
                        <li>Temperature check (should arrive at <10°C ideally, <15°C acceptable)</li>
                        <li>Clot-on-Boiling (COB) or Alcohol test</li>
                        <li>Acidity test (should be ≤0.18% LA)</li>
                        <li>Fat and SNF estimation</li>
                        <li>Methylene Blue Reduction Test (MBRT)</li>
                        <li>Adulteration tests (starch, urea, neutralizers, etc.)</li>
                        <li>Antibiotic residue screening (beta-lactam, tetracycline)</li>
                        <li>Somatic Cell Count (SCC) for mastitis detection</li>
                    </ul>
                    <p class="mt-2">Milk failing these tests is rejected or segregated. Accurate sampling is crucial – samples must be representative of the entire lot.</p>
                </li>

                <li><strong>Pre-filtration / Straining (PRP):</strong>
                    <p>Before chilling, raw milk is passed through a simple strainer or in-line filter to remove large visible physical contaminants such as hair, straw, insects, and other debris that may have entered during milking or transportation. This is a basic <strong>PRP</strong>.</p>
                </li>

                <li><strong>Chilling & Raw Milk Storage (oPRP):</strong>
                    <p>Accepted raw milk is immediately chilled to below 5°C using a plate chiller or tubular chiller. This rapid cooling is an <strong>Operational Prerequisite Program (oPRP)</strong> as it critically arrests microbial growth and preserves the milk's quality until processing begins. Chilled milk is stored in insulated, stainless steel raw milk storage silos with agitation to prevent cream separation.</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Temperature target:</strong> ≤4°C</li>
                        <li><strong>Maximum storage time:</strong> 24-48 hours before processing</li>
                        <li><strong>Monitoring:</strong> Continuous temperature monitoring with alarms</li>
                        <li><strong>Psychrotrophic bacteria concern:</strong> Even at low temperatures, psychrotrophic bacteria (e.g., <i>Pseudomonas</i>) can grow slowly and produce heat-stable lipases and proteases that survive pasteurization and cause off-flavours</li>
                    </ul>
                </li>

                <li><strong>Clarification / Filtration (oPRP):</strong>
                    <p>The chilled milk is passed through a clarifier or precision filter. A centrifugal clarifier operates at 6000-8000 RPM and uses centrifugal force to remove fine suspended impurities like dust, dirt, leucocytes (somatic cells), epithelial cells, and some bacteria. The separated impurities collect as "clarifier slime" or "separator sludge." This step is an <strong>oPRP</strong> because removing foreign matter is essential for the safety and quality of the final product and for the efficiency of downstream equipment like pasteurizers.</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Cold clarification:</strong> Done at 4-5°C (less efficient but prevents microbial growth)</li>
                        <li><strong>Warm clarification:</strong> Done at 35-40°C (more efficient separation due to lower viscosity)</li>
                        <li><strong>Bactofugation:</strong> A specialized clarification process using high-speed centrifugation (≥20,000g) to remove up to 99% of spore-forming bacteria like <i>Clostridium</i> and <i>Bacillus</i></li>
                    </ul>
                </li>

                <li><strong>Standardization (oPRP):</strong>
                    <p>This is a critical step where the fat and Solids-Not-Fat (SNF) content of the milk is precisely adjusted. The process ensures that the final product consistently meets the legal and commercial standards for the specific type of milk being produced. This is classified as an <strong>oPRP</strong> as it is essential for product quality and legal compliance.</p>

                    <h5 class="font-bold mt-3">Methods of Standardization:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Batch method:</strong> Manual mixing in a standardization tank by adding calculated amounts of skim milk, cream, or SMP</li>
                        <li><strong>Continuous method (In-line):</strong> Using an automatic standardization unit integrated with the cream separator. The separator splits whole milk into skim milk and cream, and a control valve automatically remixes them in the correct ratio. Most modern plants use this method.</li>
                    </ul>

                    <h5 class="font-bold mt-3">Pearson's Square Method (for fat standardization):</h5>
                    <p>A simple graphical/mathematical method to determine the proportion of two milk streams needed to achieve a desired fat percentage.</p>
                    <div class="bg-gray-50 p-4 rounded mt-2 font-mono text-sm">
                        <p>Example: Standardize buffalo milk (6.5% fat) to toned milk (3.0% fat) using skim milk (0.1% fat)</p>
                        <br>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whole Milk (6.5%) ─────┐</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Desired (3.0%)</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skim Milk (0.1%) ──────┘</p>
                        <br>
                        <p>Parts of Whole Milk = |3.0 - 0.1| = 2.9</p>
                        <p>Parts of Skim Milk = |6.5 - 3.0| = 3.5</p>
                        <p>Ratio = Whole : Skim = 2.9 : 3.5</p>
                        <br>
                        <p>For 1000 litres of toned milk:</p>
                        <p>Whole Milk needed = (2.9 / 6.4) × 1000 = 453.1 litres</p>
                        <p>Skim Milk needed = (3.5 / 6.4) × 1000 = 546.9 litres</p>
                    </div>

                    <h5 class="font-bold mt-3">SNF Adjustment:</h5>
                    <p>If the SNF is below the required standard after fat standardization, Skim Milk Powder (SMP) is added. The amount of SMP needed can be calculated using:</p>
                    <div class="bg-gray-50 p-4 rounded mt-2 font-mono text-sm">
                        <p>Amount of SMP (kg) = [Volume of milk × (Required SNF% - Available SNF%)] / (96 - Required SNF%)</p>
                        <p>(Where 96 represents the approximate SNF content of SMP)</p>
                    </div>
                </li>

                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>Pasteurization is the most critical food safety step in the process, making it a <strong>Critical Control Point (CCP-1)</strong>. It is defined as the heating of every particle of milk to a specific temperature for a specified time without allowing recontamination.</p>

                    <h5 class="font-bold mt-3">Types of Pasteurization:</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Method</th>
                                    <th class="p-2 border">Temperature</th>
                                    <th class="p-2 border">Time</th>
                                    <th class="p-2 border">Equipment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">LTLT (Low Temperature Long Time) / Batch / Holder</td><td class="p-2 border">63°C</td><td class="p-2 border">30 minutes</td><td class="p-2 border">Vat pasteurizer</td></tr>
                                <tr><td class="p-2 border"><strong>HTST (High Temperature Short Time)</strong></td><td class="p-2 border"><strong>72°C</strong></td><td class="p-2 border"><strong>15 seconds</strong></td><td class="p-2 border"><strong>Plate Heat Exchanger (PHE)</strong></td></tr>
                                <tr><td class="p-2 border">Higher Heat Shorter Time (HHST)</td><td class="p-2 border">89°C</td><td class="p-2 border">1.0 second</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                                <tr><td class="p-2 border">Higher Heat Shorter Time (HHST)</td><td class="p-2 border">90°C</td><td class="p-2 border">0.5 second</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                                <tr><td class="p-2 border">Higher Heat Shorter Time (HHST)</td><td class="p-2 border">94°C</td><td class="p-2 border">0.1 second</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                                <tr><td class="p-2 border">Ultra Pasteurization</td><td class="p-2 border">138°C</td><td class="p-2 border">2 seconds</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-bold mt-3">HTST Pasteurization System (Most Common):</h5>
                    <p>The Plate Heat Exchanger (PHE) is the heart of the HTST system. It consists of several sections:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Regeneration Section (Heat Recovery):</strong> Incoming cold raw milk is pre-heated by the outgoing hot pasteurized milk. This recovers 85-95% of the heat energy, making the process energy-efficient. The cold raw milk warms up and the hot pasteurized milk cools down simultaneously.</li>
                        <li><strong>Heating Section:</strong> The pre-heated milk is further heated to the pasteurization temperature (72°C) using hot water as the heating medium.</li>
                        <li><strong>Holding Section/Tube:</strong> The milk passes through an insulated holding tube designed to ensure every particle of milk is held at the pasteurization temperature for at least 15 seconds. The length and diameter of the tube are calculated based on flow rate.</li>
                        <li><strong>Flow Diversion Valve (FDV):</strong> A critical safety device located after the holding tube. It is connected to a temperature sensor. If the milk temperature at the exit of the holding tube falls below 72°C, the FDV automatically diverts the under-processed milk back to the raw milk balance tank for re-pasteurization. This is the key control mechanism at CCP-1.</li>
                        <li><strong>Cooling Section:</strong> After passing the FDV, the properly pasteurized milk is cooled, first in the regeneration section (by incoming raw milk) and then by chilled water or glycol to below 5°C.</li>
                    </ul>

                    <h5 class="font-bold mt-3">Target Organisms:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>The index organism for pasteurization is <i>Coxiella burnetii</i> (causative agent of Q-fever), which is the most heat-resistant non-spore-forming pathogen found in milk.</li>
                        <li>All vegetative pathogens are destroyed: <i>Mycobacterium tuberculosis</i>, <i>Brucella abortus</i>, <i>Salmonella</i> spp., <i>Listeria monocytogenes</i>, <i>E. coli</i> O157:H7, <i>Campylobacter jejuni</i>, <i>Staphylococcus aureus</i></li>
                        <li>Pasteurization does NOT destroy bacterial spores or heat-resistant enzymes like lipases from <i>Pseudomonas</i>.</li>
                    </ul>

                    <h5 class="font-bold mt-3">Verification of Pasteurization:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Alkaline Phosphatase (ALP) Test:</strong> Phosphatase is a naturally occurring enzyme in raw milk. Its thermal destruction curve closely parallels that of <i>Coxiella burnetii</i>. A negative ALP test (no enzyme activity) confirms adequate pasteurization. This is the standard test for verifying pasteurization. The Aschaffenburg and Mullen (A&M) method uses disodium para-nitrophenyl phosphate as substrate.</li>
                        <li><strong>Coliform Count:</strong> Should be absent per ml in pasteurized milk.</li>
                        <li><strong>Standard Plate Count (SPC):</strong> Should not exceed 30,000 cfu/ml for pasteurized milk (FSSAI standard).</li>
                    </ul>

                    <h5 class="font-bold mt-3">HACCP Parameters for CCP-1 (Pasteurization):</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Hazard</td><td class="p-2 border">Survival of vegetative pathogens (biological hazard)</td></tr>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">≥72°C for ≥15 seconds</td></tr>
                                <tr><td class="p-2 border">Monitoring</td><td class="p-2 border">Continuous recording of temperature at holding tube exit; flow rate monitoring</td></tr>
                                <tr><td class="p-2 border">Corrective Action</td><td class="p-2 border">FDV diverts under-processed milk; maintenance of equipment; reprocessing</td></tr>
                                <tr><td class="p-2 border">Verification</td><td class="p-2 border">ALP test on every batch; review of temperature records; equipment calibration</td></tr>
                                <tr><td class="p-2 border">Records</td><td class="p-2 border">Temperature recording charts (continuous); FDV diversion logs; ALP test results</td></tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li><strong>Homogenization (oPRP):</strong>
                    <p>Homogenization is a mechanical process where milk is forced through a narrow valve (homogenizer valve) at high pressure. This breaks down the large fat globules into much smaller, uniform ones.</p>

                    <h5 class="font-bold mt-3">Process Details:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Temperature:</strong> 55-65°C (usually done just before or after pasteurization; the milk must be warm for efficient homogenization)</li>
                        <li><strong>Pressure:</strong> First stage: 2000-2500 psi (140-175 kg/cm²); Second stage: 500 psi (35 kg/cm²)</li>
                        <li><strong>Fat globule size:</strong> Reduced from 1-22 μm (average ~3.5 μm) to <2 μm (average ~0.8 μm)</li>
                        <li><strong>Mechanism:</strong> The three main forces responsible for fat globule disruption are:
                            <ol class="list-decimal list-inside ml-4">
                                <li>Intense shear forces as milk passes through the narrow valve gap</li>
                                <li>Cavitation (formation and collapse of vapour bubbles)</li>
                                <li>Turbulent eddies and velocity gradients</li>
                            </ol>
                        </li>
                    </ul>

                    <h5 class="font-bold mt-3">Effects of Homogenization:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Prevents cream layer formation (no cream-line)</li>
                        <li>Whiter appearance due to increased light scattering by smaller fat globules</li>
                        <li>Richer, smoother mouthfeel</li>
                        <li>Better digestibility of fat</li>
                        <li>New fat globule membrane formed from adsorbed casein and whey proteins</li>
                        <li>Slightly increased viscosity</li>
                        <li>Increased susceptibility to light-induced oxidized flavour (if exposed to light)</li>
                        <li>Reduced heat stability of milk (relevant for UHT processing)</li>
                        <li>Cannot cream milk after homogenization (creaming efficiency is lost)</li>
                    </ul>

                    <h5 class="font-bold mt-3">Two-Stage Homogenization:</h5>
                    <p>The first stage breaks the fat globules. The second stage (at lower pressure) breaks up any clusters or aggregates of fat globules that may form after the first stage, ensuring a uniform dispersion.</p>
                </li>

                <li><strong>Packaging (PRP):</strong>
                    <p>After processing, the milk is immediately packaged into clean, sanitized containers. The packaging material and process are a <strong>PRP</strong> to protect the milk from light, oxygen, and most critically, post-pasteurization contamination (PPC).</p>

                    <h5 class="font-bold mt-3">Types of Packaging for Market Milk:</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Packaging Type</th>
                                    <th class="p-2 border">Material</th>
                                    <th class="p-2 border">Advantages</th>
                                    <th class="p-2 border">Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Poly-pack / Pillow pouch</td><td class="p-2 border">LDPE/LLDPE (Low-Density Polyethylene)</td><td class="p-2 border">Most economical; widely used in India</td><td class="p-2 border">Poor light barrier; easily punctured; environmental concern</td></tr>
                                <tr><td class="p-2 border">Gable-top carton</td><td class="p-2 border">Polyethylene-coated paperboard</td><td class="p-2 border">Good rigidity; re-closable; better brand visibility</td><td class="p-2 border">Higher cost; not fully light-proof</td></tr>
                                <tr><td class="p-2 border">Tetra Pak (Aseptic)</td><td class="p-2 border">6-layer laminate (PE/Paper/PE/Al foil/PE/PE)</td><td class="p-2 border">Excellent barrier; long shelf life (UHT); no refrigeration needed</td><td class="p-2 border">Expensive; recycling challenges</td></tr>
                                <tr><td class="p-2 border">HDPE Bottles</td><td class="p-2 border">High-Density Polyethylene</td><td class="p-2 border">Rigid; re-closable; good protection</td><td class="p-2 border">Costlier than pouches; poor light barrier</td></tr>
                                <tr><td class="p-2 border">PET Bottles</td><td class="p-2 border">Polyethylene Terephthalate</td><td class="p-2 border">Transparent; lightweight; good barrier</td><td class="p-2 border">Light transmission; cost; oxygen permeability</td></tr>
                                <tr><td class="p-2 border">Glass Bottles</td><td class="p-2 border">Glass</td><td class="p-2 border">Reusable; inert; excellent barrier</td><td class="p-2 border">Heavy; breakable; costly; light transmission (if clear)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-bold mt-3">Packaging Requirements:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Packaging material must be food-grade and comply with IS:10171 / FSSAI packaging regulations</li>
                        <li>Filling machines must be cleaned and sanitized (CIP/COP) before each run</li>
                        <li>Mandatory label information: Type of milk, fat %, net quantity, batch/lot number, manufacturing date, best before date, manufacturer details, FSSAI license number, MRP, storage instructions, nutritional information</li>
                    </ul>
                </li>

                <li><strong>Cold Storage & Distribution (CCP-2):</strong>
                    <p>The packaged milk is then stored in cold storage (below 5°C). Maintaining the cold chain throughout storage and distribution is a <strong>Critical Control Point (CCP-2)</strong> as any temperature abuse can allow surviving spoilage microorganisms to grow, compromising both the safety and shelf life of the product.</p>

                    <h5 class="font-bold mt-3">HACCP Parameters for CCP-2 (Cold Chain):</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Hazard</td><td class="p-2 border">Growth of surviving spoilage and potential pathogenic organisms due to temperature abuse</td></tr>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">Storage temperature ≤5°C (ideally 2-4°C)</td></tr>
                                <tr><td class="p-2 border">Monitoring</td><td class="p-2 border">Continuous temperature monitoring in cold rooms; spot checks on delivery vehicles; temperature loggers</td></tr>
                                <tr><td class="p-2 border">Corrective Action</td><td class="p-2 border">Repair refrigeration; relocate product to functioning cold room; reject if temperature exceeded for prolonged period</td></tr>
                                <tr><td class="p-2 border">Verification</td><td class="p-2 border">Review temperature records; microbiological testing of finished product; shelf-life studies</td></tr>
                                <tr><td class="p-2 border">Records</td><td class="p-2 border">Cold room temperature charts; vehicle temperature logs; product temperature on dispatch/receipt</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-bold mt-3">Cold Chain Management:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Plant cold room:</strong> 2-4°C, FIFO (First In First Out) system</li>
                        <li><strong>Insulated delivery vehicles:</strong> Refrigerated trucks/vans maintaining ≤5°C</li>
                        <li><strong>Retail display:</strong> Refrigerated cabinets at ≤5°C</li>
                        <li><strong>Consumer:</strong> Immediate refrigeration upon purchase</li>
                        <li><strong>Shelf life:</strong> Pasteurized milk: 2-3 days at retail (up to 7-10 days with good cold chain); UHT milk: 90-180 days at room temperature (unopened)</li>
                    </ul>
                </li>
            </ol>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">UHT (Ultra-High Temperature) Milk Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to UHT Processing</h3>
            <p>UHT processing involves heating milk to <strong>135-150°C for 2-5 seconds</strong> followed by aseptic packaging. This "sterilizes" the milk by destroying all microorganisms (including spores), resulting in a commercially sterile product with a shelf life of <strong>90-180 days at ambient temperature</strong> without refrigeration (until opened).</p>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">UHT Processing Methods:</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Feature</th>
                            <th class="p-2 border">Indirect Heating</th>
                            <th class="p-2 border">Direct Heating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Method</td><td class="p-2 border">PHE or Tubular Heat Exchanger</td><td class="p-2 border">Steam Injection or Steam Infusion</td></tr>
                        <tr><td class="p-2 border">Heating medium contact</td><td class="p-2 border">No direct contact (through metal plates/tubes)</td><td class="p-2 border">Direct contact of culinary steam with milk</td></tr>
                        <tr><td class="p-2 border">Heating rate</td><td class="p-2 border">Slower (seconds)</td><td class="p-2 border">Very rapid (milliseconds)</td></tr>
                        <tr><td class="p-2 border">Heat damage</td><td class="p-2 border">Relatively more (more browning, cooked flavour)</td><td class="p-2 border">Minimal (closer to fresh milk taste)</td></tr>
                        <tr><td class="p-2 border">Water addition</td><td class="p-2 border">None</td><td class="p-2 border">Yes (removed later by flash cooling/vacuum)</td></tr>
                        <tr><td class="p-2 border">Energy efficiency</td><td class="p-2 border">Higher (90%+ heat recovery)</td><td class="p-2 border">Lower</td></tr>
                        <tr><td class="p-2 border">Equipment cost</td><td class="p-2 border">Lower</td><td class="p-2 border">Higher</td></tr>
                        <tr><td class="p-2 border">Fouling</td><td class="p-2 border">More (limits run time)</td><td class="p-2 border">Less</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Steam Injection vs. Steam Infusion:</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Steam Injection:</strong> High-pressure culinary steam is injected INTO the milk stream. Very rapid heating. May cause localized overheating.</li>
                <li><strong>Steam Infusion:</strong> Milk is introduced (sprayed/falls as a thin film) INTO a chamber filled with steam. More gentle and uniform heating. Produces a higher quality product. Milk enters steam (not steam enters milk).</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Comparison: Pasteurized vs. UHT Milk</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Pasteurized Milk</th>
                            <th class="p-2 border">UHT Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Temperature</td><td class="p-2 border">72°C / 15 sec</td><td class="p-2 border">135-150°C / 2-5 sec</td></tr>
                        <tr><td class="p-2 border">Shelf life</td><td class="p-2 border">7-10 days (refrigerated)</td><td class="p-2 border">90-180 days (ambient)</td></tr>
                        <tr><td class="p-2 border">Storage</td><td class="p-2 border">Requires cold chain (≤5°C)</td><td class="p-2 border">Ambient storage (until opened)</td></tr>
                        <tr><td class="p-2 border">Organisms destroyed</td><td class="p-2 border">All vegetative pathogens</td><td class="p-2 border">All organisms + most spores</td></tr>
                        <tr><td class="p-2 border">ALP Test</td><td class="p-2 border">Negative</td><td class="p-2 border">Negative</td></tr>
                        <tr><td class="p-2 border">Peroxidase Test</td><td class="p-2 border">Positive</td><td class="p-2 border">Negative</td></tr>
                        <tr><td class="p-2 border">Turbidity Test</td><td class="p-2 border">Positive (turbid)</td><td class="p-2 border">Negative (clear) - Aschaffenburg's</td></tr>
                        <tr><td class="p-2 border">Nutritional quality</td><td class="p-2 border">Minimal loss</td><td class="p-2 border">Some loss of B vitamins, lysine</td></tr>
                        <tr><td class="p-2 border">Flavour</td><td class="p-2 border">Closer to raw milk</td><td class="p-2 border">Slight cooked/caramel flavour</td></tr>
                        <tr><td class="p-2 border">Packaging</td><td class="p-2 border">Pouches, bottles, cartons</td><td class="p-2 border">Aseptic packaging (Tetra Pak)</td></tr>
                        <tr><td class="p-2 border">Colour</td><td class="p-2 border">Normal white</td><td class="p-2 border">Slightly brownish (Maillard reaction)</td></tr>
                        <tr><td class="p-2 border">Cost</td><td class="p-2 border">Lower processing cost</td><td class="p-2 border">Higher processing & packaging cost</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Sterilized Milk</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">In-Bottle Sterilization</h3>
            <p>A traditional method where milk is filled into glass or HDPE bottles, sealed, and then sterilized in a batch autoclave or continuous retort at <strong>110-120°C for 15-20 minutes</strong>.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Shelf life:</strong> Several months at room temperature</li>
                <li><strong>Disadvantages:</strong> Significant browning (Maillard reaction), cooked flavour, loss of vitamins (especially B1, B12, C), and reduced protein quality compared to UHT milk</li>
                <li><strong>Turbidity Test (Aschaffenburg):</strong> Negative (clear filtrate indicates complete denaturation of whey proteins)</li>
                <li>Rarely used for market milk today due to quality degradation; UHT has largely replaced this method</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Quality Control of Processed Market Milk</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Tests for Pasteurized Milk</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test</th>
                            <th class="p-2 border">Purpose</th>
                            <th class="p-2 border">Standard / Expected Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Phosphatase (ALP) Test</td><td class="p-2 border">Verify adequate pasteurization</td><td class="p-2 border">Negative (≤10 μg p-nitrophenol/ml)</td></tr>
                        <tr><td class="p-2 border">Peroxidase (Storch) Test</td><td class="p-2 border">Check for over-heating (>80°C)</td><td class="p-2 border">Positive (enzyme still active after HTST)</td></tr>
                        <tr><td class="p-2 border">Standard Plate Count (SPC)</td><td class="p-2 border">Total viable bacteria</td><td class="p-2 border">≤30,000 cfu/ml (FSSAI)</td></tr>
                        <tr><td class="p-2 border">Coliform Count</td><td class="p-2 border">Indicator of post-pasteurization contamination</td><td class="p-2 border">Absent per 0.1 ml (FSSAI) or ≤10/ml</td></tr>
                        <tr><td class="p-2 border"><i>E. coli</i></td><td class="p-2 border">Faecal contamination indicator</td><td class="p-2 border">Absent per ml</td></tr>
                        <tr><td class="p-2 border"><i>Salmonella</i></td><td class="p-2 border">Pathogen screening</td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border"><i>Listeria monocytogenes</i></td><td class="p-2 border">Pathogen screening</td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border">Fat %</td><td class="p-2 border">Compliance with standards</td><td class="p-2 border">As per declared type</td></tr>
                        <tr><td class="p-2 border">SNF %</td><td class="p-2 border">Compliance with standards</td><td class="p-2 border">As per declared type</td></tr>
                        <tr><td class="p-2 border">Acidity</td><td class="p-2 border">Freshness indicator</td><td class="p-2 border">≤0.15% LA (for pasteurized milk)</td></tr>
                        <tr><td class="p-2 border">Temperature</td><td class="p-2 border">Cold chain compliance</td><td class="p-2 border">≤5°C at dispatch</td></tr>
                        <tr><td class="p-2 border">Sensory Evaluation</td><td class="p-2 border">Overall quality</td><td class="p-2 border">No off-flavours, no sediment, proper colour</td></tr>
                        <tr><td class="p-2 border">Antibiotic Residues</td><td class="p-2 border">Chemical safety</td><td class="p-2 border">Below MRL (Maximum Residue Limits) as per FSSAI</td></tr>
                        <tr><td class="p-2 border">Pesticide Residues</td><td class="p-2 border">Chemical safety</td><td class="p-2 border">Below MRL as per FSSAI</td></tr>
                        <tr><td class="p-2 border">Aflatoxin M1</td><td class="p-2 border">Mycotoxin contamination</td><td class="p-2 border">≤0.5 μg/kg (FSSAI)</td></tr>
                        <tr><td class="p-2 border">Added Water</td><td class="p-2 border">Adulteration check</td><td class="p-2 border">Freezing point depression: -0.525 to -0.565°C (Hortvet)</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">The Phosphatase and Peroxidase Tests – A Dual Check:</h4>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-2">
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li><strong>ALP Negative + Peroxidase Positive</strong> = Properly pasteurized (HTST at 72°C/15s) ✅</li>
                    <li><strong>ALP Positive + Peroxidase Positive</strong> = Under-pasteurized (not heated enough) ❌</li>
                    <li><strong>ALP Negative + Peroxidase Negative</strong> = Over-heated (heated above ~80°C) - This means pasteurization was achieved but the milk was heated more than necessary, potentially degrading quality ⚠️</li>
                    <li><strong>ALP Positive + Peroxidase Negative</strong> = Not possible in practice (contradictory)</li>
                </ul>
                <p class="mt-2 text-sm">Note: Peroxidase is more heat-stable than phosphatase. It is inactivated at ~80°C/2.5s. Its presence confirms the milk was not overheated beyond HTST conditions.</p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Defects in Market Milk</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects and Their Causes</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Causes</th>
                            <th class="p-2 border">Prevention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Sour/Acid taste</td><td class="p-2 border">Microbial</td><td class="p-2 border">Lactic acid bacteria (<i>Lactococcus, Lactobacillus</i>); broken cold chain</td><td class="p-2 border">Proper cold chain; good sanitation; timely processing</td></tr>
                        <tr><td class="p-2 border">Bitter taste</td><td class="p-2 border">Microbial/Enzymatic</td><td class="p-2 border">Psychrotrophic bacteria (<i>Pseudomonas</i>) proteases; <i>Bacillus</i> spp.</td><td class="p-2 border">Limit raw milk storage time; proper pasteurization</td></tr>
                        <tr><td class="p-2 border">Rancid/Soapy flavour</td><td class="p-2 border">Enzymatic</td><td class="p-2 border">Lipase action (native milk lipase or microbial lipases); excessive agitation of raw milk</td><td class="p-2 border">Minimize agitation; prompt pasteurization to inactivate native lipase; avoid psychrotrophic contamination</td></tr>
                        <tr><td class="p-2 border">Oxidized/Cardboardy/Metallic flavour</td><td class="p-2 border">Chemical</td><td class="p-2 border">Lipid oxidation; copper/iron contamination; exposure to light (riboflavin-sensitized oxidation)</td><td class="p-2 border">Use stainless steel equipment; light-proof packaging; add antioxidants (natural)</td></tr>
                        <tr><td class="p-2 border">Light-induced/Sunlight flavour</td><td class="p-2 border">Chemical</td><td class="p-2 border">Riboflavin-sensitized oxidation of methionine to methional; UV exposure</td><td class="p-2 border">Opaque packaging; minimize light exposure at retail</td></tr>
                        <tr><td class="p-2 border">Cooked/Caramel flavour</td><td class="p-2 border">Processing</td><td class="p-2 border">Over-heating during pasteurization; UHT processing (expected)</td><td class="p-2 border">Precise temperature control; proper equipment maintenance</td></tr>
                        <tr><td class="p-2 border">Feed/Weed flavour</td><td class="p-2 border">Absorbed</td><td class="p-2 border">Cows eating onion, garlic, silage, weeds; volatile compounds absorbed into milk</td><td class="p-2 border">Control feed quality; avoid feeding strong-flavoured feeds close to milking</td></tr>
                        <tr><td class="p-2 border">Ropy/Slimy texture</td><td class="p-2 border">Microbial</td><td class="p-2 border"><i>Alcaligenes</i>, <i>Klebsiella</i>, certain <i>Lactococcus</i> strains producing exopolysaccharides</td><td class="p-2 border">Proper sanitation; prevent post-pasteurization contamination</td></tr>
                        <tr><td class="p-2 border">Cream plug/Cream layer</td><td class="p-2 border">Processing</td><td class="p-2 border">Inadequate homogenization; damaged homogenizer valve</td><td class="p-2 border">Regular maintenance and pressure checks on homogenizer</td></tr>
                        <tr><td class="p-2 border">Sediment</td><td class="p-2 border">Processing</td><td class="p-2 border">Inadequate clarification/filtration</td><td class="p-2 border">Regular cleaning and maintenance of clarifiers</td></tr>
                        <tr><td class="p-2 border">Flat/Lacking freshness</td><td class="p-2 border">Quality</td><td class="p-2 border">Excessive dilution; old milk; over-processing</td><td class="p-2 border">Proper standardization; FIFO system; avoid re-processing</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Cleaning-in-Place (CIP) System</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">CIP for Dairy Processing Equipment</h3>
            <p>CIP is an automated method of cleaning the interior surfaces of dairy processing equipment (pipes, tanks, pasteurizers, homogenizers, filling machines) without dismantling them. It is a critical PRP for ensuring food safety and preventing contamination.</p>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Standard CIP Sequence for Milk Processing:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Pre-rinse with warm water (35-40°C):</strong> Removes bulk residues of milk (proteins, fat, lactose). Duration: 5-10 minutes.</li>
                <li><strong>Alkali/Caustic wash (NaOH, 1-2%, 70-80°C):</strong> Dissolves and removes proteins, fats, and other organic deposits. Duration: 15-20 minutes. Sodium hydroxide is the most common alkali used.</li>
                <li><strong>Intermediate rinse with water:</strong> Removes alkali residues. Duration: 5-10 minutes.</li>
                <li><strong>Acid wash (HNO₃, 0.5-1%, 65-70°C):</strong> Removes mineral deposits (milkstone - calcium phosphate deposits). Duration: 10-15 minutes. Nitric acid is most common; phosphoric acid is also used.</li>
                <li><strong>Final rinse with clean water:</strong> Removes acid residues. Duration: 5-10 minutes.</li>
                <li><strong>Sanitization (optional - before start of production):</strong> Using hot water (>85°C for 15 min), steam, or chemical sanitizers (sodium hypochlorite 100-200 ppm, peracetic acid). Destroys remaining microorganisms.</li>
            </ol>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Key CIP Parameters (TACT principle):</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>T - Time:</strong> Contact time of cleaning solution with the surface</li>
                <li><strong>A - Action (Mechanical):</strong> Flow velocity (minimum 1.5 m/s for turbulent flow) and spray ball coverage</li>
                <li><strong>C - Concentration:</strong> Concentration of cleaning chemicals</li>
                <li><strong>T - Temperature:</strong> Temperature of cleaning solutions</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Standardization & Numerical Problems</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Important Formulas</h3>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">1. Richmond's Formula (for calculating SNF):</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>SNF% = (CLR / 4) + (0.21 × F) + 0.36</strong></p>
                <p class="mt-2">Where:</p>
                <ul class="list-disc list-inside ml-4">
                    <li>CLR = Corrected Lactometer Reading (at standard temperature)</li>
                    <li>F = Fat percentage</li>
                </ul>
                <p class="mt-2"><strong>Example:</strong> If CLR = 30 and Fat = 4.0%, then SNF = (30/4) + (0.21 × 4.0) + 0.36 = 7.5 + 0.84 + 0.36 = <strong>8.7%</strong></p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2. Total Solids (TS):</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>TS% = Fat% + SNF%</strong></p>
                <p class="mt-2"><strong>Example:</strong> If Fat = 4.0% and SNF = 8.7%, then TS = 4.0 + 8.7 = <strong>12.7%</strong></p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">3. Pearson's Square Method:</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono">
                    A (higher fat %) ——————→ (C - B) parts of A<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C (desired %)<br>
                    B (lower fat %) ———————→ (A - C) parts of B
                </p>
                <p class="mt-2">Total parts = (C - B) + (A - C) = (A - B)</p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">4. Mass Balance Equation:</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>M₁ × F₁ = M₂ × F₂ + M₃ × F₃</strong></p>
                <p class="mt-2">Where M = mass/volume, F = fat percentage</p>
                <p>(Input = Output 1 + Output 2)</p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">5. Amount of Water Added (Adulteration Detection):</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>% Water Added = [(SNF of genuine milk - SNF of sample) / SNF of genuine milk] × 100</strong></p>
                <p class="mt-2"><strong>Example:</strong> Genuine milk SNF = 8.5%, Sample SNF = 7.65%</p>
                <p>% Water added = [(8.5 - 7.65) / 8.5] × 100 = <strong>10%</strong></p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Solved Numerical Problems</h3>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 1: Fat Standardization using Pearson's Square</h5>
                <p class="mt-2"><strong>Q:</strong> A dairy has 5000 litres of buffalo milk with 7.0% fat. How much skim milk (0.1% fat) should be added to produce standardized milk with 4.5% fat?</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p class="font-mono mt-1">
                    Buffalo milk (7.0%) → |4.5 - 0.1| = 4.4 parts<br>
                    Skim milk (0.1%) → |7.0 - 4.5| = 2.5 parts<br><br>
                    Ratio = Buffalo : Skim = 4.4 : 2.5<br><br>
                    If Buffalo milk = 5000 litres<br>
                    Skim milk needed = (2.5 / 4.4) × 5000 = <strong>2840.9 litres</strong><br>
                    Total standardized milk = 5000 + 2840.9 = <strong>7840.9 litres</strong>
                </p>
                <p class="mt-2"><strong>Verification:</strong> (5000 × 7.0 + 2840.9 × 0.1) / 7840.9 = (35000 + 284.09) / 7840.9 = 35284.09 / 7840.9 = <strong>4.5% ✓</strong></p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 2: Preparation of Toned Milk</h5>
                <p class="mt-2"><strong>Q:</strong> How much skim milk powder (SMP, 96% SNF, 0.5% fat) and water should be added to 1000 litres of buffalo milk (6.5% fat, 9.2% SNF) to prepare toned milk (3.0% fat, 8.5% SNF)?</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p>Let x = kg of SMP, y = litres of water added</p>
                <p class="font-mono mt-1">
                    Fat balance: 1000 × 6.5 + x × 0.5 + y × 0 = (1000 + x + y) × 3.0<br>
                    6500 + 0.5x = 3000 + 3x + 3y<br>
                    3500 = 2.5x + 3y ... (i)<br><br>
                    SNF balance: 1000 × 9.2 + x × 96 + y × 0 = (1000 + x + y) × 8.5<br>
                    9200 + 96x = 8500 + 8.5x + 8.5y<br>
                    700 + 87.5x = 8.5y<br>
                    y = (700 + 87.5x) / 8.5 ... (ii)<br><br>
                    Substituting (ii) in (i):<br>
                    3500 = 2.5x + 3 × [(700 + 87.5x) / 8.5]<br>
                    3500 = 2.5x + (2100 + 262.5x) / 8.5<br>
                    3500 × 8.5 = 21.25x + 2100 + 262.5x<br>
                    29750 = 283.75x + 2100<br>
                    27650 = 283.75x<br>
                    <strong>x = 97.4 kg SMP</strong><br><br>
                    y = (700 + 87.5 × 97.4) / 8.5<br>
                    y = (700 + 8522.5) / 8.5<br>
                    <strong>y = 1085 litres water</strong><br><br>
                    Total toned milk = 1000 + 97.4 + 1085 = <strong>2182.4 litres</strong>
                </p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 3: Cream Separation</h5>
                <p class="mt-2"><strong>Q:</strong> 10,000 litres of whole milk (4.0% fat) is separated. If skim milk has 0.05% fat and cream has 40% fat, calculate the quantity of cream and skim milk obtained.</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p>Let C = litres of cream, S = litres of skim milk</p>
                <p class="font-mono mt-1">
                    Mass balance: C + S = 10,000 ... (i)<br>
                    Fat balance: C × 40 + S × 0.05 = 10,000 × 4.0<br>
                    40C + 0.05S = 40,000 ... (ii)<br><br>
                    From (i): S = 10,000 - C<br>
                    Substituting: 40C + 0.05(10,000 - C) = 40,000<br>
                    40C + 500 - 0.05C = 40,000<br>
                    39.95C = 39,500<br>
                    <strong>C = 988.7 litres cream</strong><br>
                    <strong>S = 9011.3 litres skim milk</strong>
                </p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 4: Holding Tube Length Calculation</h5>
                <p class="mt-2"><strong>Q:</strong> Calculate the minimum length of a holding tube for HTST pasteurization if the flow rate is 5000 litres/hour, holding time required is 15 seconds, and the internal diameter of the tube is 50 mm. Assume the velocity ratio factor is 0.5 (for turbulent flow).</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p class="font-mono mt-1">
                    Flow rate = 5000 L/hr = 5000 / 3600 L/s = 1.389 L/s = 0.001389 m³/s<br><br>
                    Cross-sectional area of tube = π × (d/2)² = π × (0.025)² = 0.001963 m²<br><br>
                    Average velocity = Flow rate / Area = 0.001389 / 0.001963 = 0.708 m/s<br><br>
                    In a tube with turbulent flow, the fastest particle (at centre) moves at approximately 2× the average velocity (velocity ratio = 0.5).<br><br>
                    Maximum velocity = 0.708 / 0.5 = 1.416 m/s<br><br>
                    Minimum tube length = Maximum velocity × Holding time<br>
                    = 1.416 × 15 = <strong>21.24 metres</strong>
                </p>
                <p class="mt-2 text-sm">Note: In practice, an additional safety margin (10-15%) is added, making the tube approximately 24 metres.</p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Prerequisite Programs (PRPs) in a Dairy Plant</h2>
            <p>PRPs are the basic conditions and activities that are necessary to maintain a hygienic environment throughout the food chain suitable for the production, handling, and provision of safe end products. They form the foundation of the HACCP system.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key PRPs for Market Milk Processing:</h3>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Infrastructure & Building Design:</strong> Adequate layout preventing cross-contamination; separate raw and processed areas; smooth, cleanable surfaces; adequate drainage; pest-proof construction.</li>
                <li><strong>Supplier Control:</strong> Approved supplier list for raw milk, packaging materials, chemicals; supplier audits; certificates of analysis (CoA).</li>
                <li><strong>Equipment Maintenance:</strong> Preventive maintenance schedules for pasteurizers, homogenizers, fillers, coolers; calibration of thermometers, flow meters, and pressure gauges.</li>
                <li><strong>Cleaning & Sanitation (CIP/COP):</strong> Documented cleaning schedules; validated CIP programs; cleaning chemical management; sanitation verification through swab tests and rinse water analysis.</li>
                <li><strong>Personal Hygiene:</strong> Medical fitness certificates; proper uniforms, hairnets, gloves; handwashing protocols; no jewelry policy; hygiene training.</li>
                <li><strong>Pest Control:</strong> Integrated Pest Management (IPM); insect screens, air curtains, rodent traps; pest control contracts; monitoring records.</li>
                <li><strong>Water Quality:</strong> Potable water for processing and cleaning; regular water testing (microbiological and chemical); water treatment systems (chlorination, UV, RO).</li>
                <li><strong>Waste Management:</strong> Proper disposal of whey, wash water, packaging waste; effluent treatment plant (ETP); compliance with pollution control norms.</li>
                <li><strong>Training:</strong> Regular training programs for all staff on food safety, GMP, GHP, HACCP, personal hygiene.</li>
                <li><strong>Traceability & Recall:</strong> Batch coding system enabling full traceability from raw milk source to finished product at consumer; documented recall procedure.</li>
                <li><strong>Allergen Management:</strong> Though milk itself is an allergen, management of other allergens in flavoured milk products (nuts, soy, etc.).</li>
                <li><strong>Storage & Transport:</strong> Appropriate storage conditions; FIFO system; vehicle cleanliness and temperature control.</li>
            </ol>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Recent Advances in Market Milk Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Emerging Technologies</h3>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">1. Microfiltration (MF)</h5>
                    <p>A membrane separation technique using membranes with pore sizes of 0.8-1.4 μm. Used to remove bacteria and spores from skim milk without excessive heat treatment. Combined with mild heat treatment, it can extend shelf life to 25-35 days under refrigeration while maintaining a fresh milk taste. Often used in Extended Shelf Life (ESL) milk processing.</p>
                </div>
                <div>
                    <h5 class="font-bold">2. Pulsed Electric Field (PEF)</h5>
                    <p>A non-thermal processing method that applies short pulses (microseconds) of high-voltage electric field (20-80 kV/cm) to milk. This causes electroporation (irreversible pore formation) of microbial cell membranes, leading to cell death. PEF-treated milk retains more of its natural taste and nutritional value compared to thermally processed milk. Still largely at research/pilot scale for commercial milk processing.</p>
                </div>
                <div>
                    <h5 class="font-bold">3. High-Pressure Processing (HPP)</h5>
                    <p>Subjects milk to very high pressures (400-600 MPa) at ambient or refrigeration temperatures. Inactivates vegetative bacteria and some enzymes while preserving vitamins, flavour, and colour better than thermal processing. Also called "cold pasteurization." Challenges include effects on casein micelle structure and whey protein denaturation.</p>
                </div>
                <div>
                    <h5 class="font-bold">4. UV-C Treatment</h5>
                    <p>Exposure of thin films of milk to UV-C radiation (254 nm) for microbial inactivation. Effective for surface decontamination but limited penetration in opaque liquids like milk. Being explored for treating milk in thin-film turbulent flow systems.</p>
                </div>
                <div>
                    <h5 class="font-bold">5. Extended Shelf Life (ESL) Milk</h5>
                    <p>A category between pasteurized and UHT milk, achieving 21-45 days shelf life under refrigeration. Achieved through combinations of microfiltration + mild heat treatment, higher pasteurization temperatures (125-130°C for 2-4 seconds), or bactofugation + pasteurization. Increasingly popular in European markets.</p>
                </div>
                <div>
                    <h5 class="font-bold">6. Lactose-Free Milk</h5>
                    <p>Produced by treating pasteurized/UHT milk with the enzyme lactase (β-galactosidase), which hydrolyzes lactose into glucose and galactose. This makes milk digestible for lactose-intolerant individuals. The resultant milk tastes slightly sweeter due to the free glucose and galactose. Growing market segment in India and globally.</p>
                </div>
                <div>
                    <h5 class="font-bold">7. A2 Milk</h5>
                    <p>Milk containing only the A2 variant of beta-casein protein (from specific cow breeds like Gir, Sahiwal, Guernsey). Regular milk contains both A1 and A2 beta-casein. Some research suggests A2 milk may be easier to digest, though scientific consensus is still evolving. Premium pricing product.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Legal Framework & Regulatory Standards</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Regulations Governing Market Milk in India</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Food Safety and Standards Act, 2006:</strong> The umbrella legislation governing all food products in India.</li>
                <li><strong>FSS (Food Product Standards and Food Additives) Regulations, 2011:</strong> Defines standards for different types of milk (fat, SNF, acidity, etc.).</li>
                <li><strong>FSS (Contaminants, Toxins and Residues) Regulations, 2011:</strong> Sets maximum limits for pesticide residues, heavy metals (lead, cadmium, mercury, arsenic), aflatoxin M1, antibiotic residues, and melamine.</li>
                <li><strong>FSS (Packaging and Labelling) Regulations, 2011:</strong> Mandates labelling requirements for market milk.</li>
                <li><strong>FSS (Licensing and Registration of Food Businesses) Regulations, 2011:</strong> All dairy processing plants must obtain FSSAI license.</li>
                <li><strong>FSS (Food Recall Procedure) Regulations, 2017:</strong> Establishes procedures for product recall.</li>
                <li><strong>BIS Standards:</strong> IS 1547 (Pasteurized milk), IS 13428 (UHT milk), IS 2311 (Milk cereal-based complementary food), IS 10484 (Dairy plant design and layout).</li>
                <li><strong>MMPO (Milk and Milk Products Order), 1992:</strong> Previously governed milk processing plants handling >10,000 litres/day. Now subsumed under FSSAI.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Microbiological Standards for Pasteurized Milk</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Plate Count (TPC)</td><td class="p-2 border">≤30,000 cfu/ml</td></tr>
                        <tr><td class="p-2 border">Coliform Count</td><td class="p-2 border">Absent per 0.1 ml</td></tr>
                        <tr><td class="p-2 border"><i>E. coli</i></td><td class="p-2 border">Absent per ml</td></tr>
                        <tr><td class="p-2 border"><i>Salmonella</i></td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border"><i>Listeria monocytogenes</i></td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border"><i>S. aureus</i></td><td class="p-2 border">Absent per ml</td></tr>
                        <tr><td class="p-2 border">Phosphatase Test</td><td class="p-2 border">Negative</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Summary & Key Points for Examination</h2>
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <h4 class="font-bold text-green-800">Quick Revision Points:</h4>
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Market milk = processed liquid milk for direct human consumption</li>
                    <li>FSSAI defines 5 main types: Full cream (6% F, 9% SNF), Standardized (4.5% F, 8.5% SNF), Toned (3.0% F, 8.5% SNF), Double Toned (1.5% F, 9.0% SNF), Skimmed (≤0.5% F, 8.7% SNF)</li>
                    <li>HTST pasteurization: 72°C for 15 seconds - the most common and most important CCP</li>
                    <li>ALP test negative = properly pasteurized; Peroxidase test positive = not over-heated</li>
                    <li>Homogenization: 2000-2500 psi, reduces fat globules to <2 μm, prevents creaming</li>
                    <li>Cold chain (≤5°C) maintenance from plant to consumer is CCP-2</li>
                    <li>MBRT >5 hours = Very Good quality raw milk</li>
                    <li>Flow Diversion Valve (FDV) is the critical safety device in HTST system</li>
                    <li>UHT: 135-150°C / 2-5 sec + aseptic packaging = 90-180 days shelf life at ambient</li>
                    <li>Richmond's formula: SNF = CLR/4 + 0.21F + 0.36</li>
                    <li>Pearson's Square is used for fat standardization calculations</li>
                    <li>Toned milk concept: Adding SMP + water to buffalo milk to reduce fat while maintaining SNF</li>
                    <li>CIP sequence: Water rinse → Alkali wash → Water rinse → Acid wash → Water rinse → Sanitize</li>
                    <li>Post-pasteurization contamination (PPC) by coliforms is the most common quality problem</li>
                    <li>Index organism for pasteurization: <i>Coxiella burnetii</i></li>
                    <li>Regeneration efficiency in modern PHE: 85-95%</li>
                    <li>India is the world's largest milk producer (>230 MMT)</li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Frequently Asked Questions (FAQs)</h2>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">Q1: Why is buffalo milk preferred for toning?</h5>
                    <p>Buffalo milk has high fat (6-7.5%) and high SNF (9-10%), making it ideal for dilution with SMP and water. After toning, the resultant milk still maintains adequate SNF and body, unlike cow milk which already has relatively lower fat and SNF.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q2: What is the difference between pasteurization and sterilization?</h5>
                    <p>Pasteurization (72°C/15s) kills vegetative pathogens but not spores, requires cold chain, and has short shelf life (7-10 days). Sterilization (UHT: 135-150°C/2-5s or In-bottle: 115°C/15 min) kills all organisms including spores, allows ambient storage, and has long shelf life (90-180 days).</p>
                </div>
                <div>
                    <h5 class="font-bold">Q3: Why is homogenization done before or after pasteurization but not at room temperature?</h5>
                    <p>Homogenization is most efficient at 55-65°C because: (a) Lower viscosity allows better disruption of fat globules, (b) The HTST system conveniently provides milk at this temperature in the regeneration section, (c) Cold homogenization is less efficient and requires higher pressures. It is typically placed between the regeneration and heating sections of the PHE.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q4: What is the significance of the MBRT test?</h5>
                    <p>MBRT (Methylene Blue Reduction Test) is an indirect, rapid estimate of the bacterial load in raw milk. It correlates decolourization time with bacterial count. It's used for grading raw milk quality at the reception dock. However, it has limitations: it doesn't detect specific types of bacteria, heat-resistant organisms, or organisms that are poor reducers.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q5: What is Milkstone and how is it removed?</h5>
                    <p>Milkstone is a hard, calcium phosphate-based deposit that forms on the surfaces of dairy equipment, especially heat exchangers, during processing. It is composed of calcium phosphate, denatured proteins, and milk salts. It acts as insulation (reducing heat transfer efficiency) and harbours bacteria. It is removed during CIP using acid wash (nitric acid or phosphoric acid).</p>
                </div>
                <div>
                    <h5 class="font-bold">Q6: What is the role of the balance tank in an HTST system?</h5>
                    <p>The balance tank (also called constant level tank or float tank): (a) Maintains a constant head of milk to the pump, ensuring uniform flow rate through the system, (b) Receives diverted milk from the FDV when pasteurization temperature is not achieved, (c) Prevents air incorporation into the system, (d) Provides a buffer between raw milk supply and the pasteurizer.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q7: Why is the booster pump placed after the regeneration section?</h5>
                    <p>The timing/booster pump is placed after the regeneration section and before the heating section. It ensures a constant, positive flow rate through the holding tube. This is critical because the holding time (15 seconds) is calculated based on this specific flow rate and the holding tube dimensions. Any variation in flow rate would change the actual holding time, potentially compromising food safety.</p>
                </div>
            </div>
        `
    },
    hi: {
        title: "Market Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Market Milk</h3>
            <p>Market milk, also known as liquid milk, refers to milk that is processed, packaged, and sold for direct consumption. It is one of the most widely consumed dairy products globally. The primary objective of market milk processing is to ensure its safety for consumers by eliminating harmful microorganisms and to enhance its shelf life while preserving its nutritional and sensory qualities as much as possible.</p>
            <p>The processing involves a series of carefully controlled steps, from reception of raw milk to its final packaging. Standardization is a key part of this process, where the fat and solids-not-fat (SNF) content is adjusted to meet legal and commercial standards for different types of milk.</p>
            <p>India is the largest producer and consumer of milk in the world, with annual production exceeding 230 million metric tonnes (2023-24). The organized dairy sector processes approximately 25-30% of this milk into market milk and various dairy products. The Operation Flood programme, launched in 1970 by the National Dairy Development Board (NDDB) under Dr. Verghese Kurien, revolutionized India's dairy industry and established a robust milk procurement and processing network.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Historical Background of Market Milk</h3>
            <p>Market milk processing ka concept centuries mein kaafi evolve hua hai:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Pre-1860s:</strong> Milk raw hi becha jaata tha, ghar-ghar jaake. Aksar adulterated hota tha aur tuberculosis, typhoid, brucellosis jaise diseases ka source banta tha.</li>
                <li><strong>1864:</strong> Louis Pasteur ne pasteurization ka principle develop kiya, initially wine preservation ke liye.</li>
                <li><strong>1886:</strong> Franz von Soxhlet ne pehli baar milk par pasteurization apply karne ka suggestion diya.</li>
                <li><strong>1908:</strong> Chicago pehle cities mein se ek bana jisne milk pasteurization compulsory ki.</li>
                <li><strong>1946:</strong> India ka pehla modern dairy processing plant Anand, Gujarat mein establish hua.</li>
                <li><strong>1970:</strong> Operation Flood launch hua, jisne India ko milk-deficient se milk-surplus nation mein transform kiya.</li>
                <li><strong>2006:</strong> FSSAI establish hua Food Safety and Standards Act ke under, milk se related sabhi food laws ko consolidate karke.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Market Milk (as per FSSAI)</h3>
            <p>India mein, Food Safety and Standards Authority of India (FSSAI) ne market milk ke kai types define kiye hain unke fat aur SNF content ke basis par. In types ko samajhna consumers aur dairy professionals dono ke liye bahut zaroori hai.</p>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Milk</th>
                            <th class="p-2 border">Minimum Fat % (m/m)</th>
                            <th class="p-2 border">Minimum SNF % (m/m)</th>
                            <th class="p-2 border">Typical Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Toned Milk</strong></td><td class="p-2 border">3.0</td><td class="p-2 border">8.5</td><td class="p-2 border">Buffalo + SMP + Water</td></tr>
                        <tr><td class="p-2 border"><strong>Double Toned Milk</strong></td><td class="p-2 border">1.5</td><td class="p-2 border">9.0</td><td class="p-2 border">Buffalo + SMP + Water</td></tr>
                        <tr><td class="p-2 border"><strong>Standardized Milk</strong></td><td class="p-2 border">4.5</td><td class="p-2 border">8.5</td><td class="p-2 border">Buffalo/Cow milk blend</td></tr>
                        <tr><td class="p-2 border"><strong>Full Cream Milk</strong></td><td class="p-2 border">6.0</td><td class="p-2 border">9.0</td><td class="p-2 border">Buffalo milk</td></tr>
                        <tr><td class="p-2 border"><strong>Skimmed Milk</strong></td><td class="p-2 border">Not more than 0.5</td><td class="p-2 border">8.7</td><td class="p-2 border">After cream separation</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Cow aur Buffalo Milk ki Composition (Comparison)</h4>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Cow Milk (%)</th>
                            <th class="p-2 border">Buffalo Milk (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Water</td><td class="p-2 border">87.0</td><td class="p-2 border">84.0</td></tr>
                        <tr><td class="p-2 border">Fat</td><td class="p-2 border">3.5 - 4.0</td><td class="p-2 border">6.0 - 7.5</td></tr>
                        <tr><td class="p-2 border">Protein</td><td class="p-2 border">3.2 - 3.5</td><td class="p-2 border">3.8 - 4.2</td></tr>
                        <tr><td class="p-2 border">Lactose</td><td class="p-2 border">4.6 - 4.8</td><td class="p-2 border">4.8 - 5.0</td></tr>
                        <tr><td class="p-2 border">Minerals (Ash)</td><td class="p-2 border">0.7</td><td class="p-2 border">0.8</td></tr>
                        <tr><td class="p-2 border">Total Solids</td><td class="p-2 border">12.5 - 13.0</td><td class="p-2 border">15.5 - 17.0</td></tr>
                        <tr><td class="p-2 border">SNF</td><td class="p-2 border">8.5 - 9.0</td><td class="p-2 border">9.0 - 10.0</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Milk Types ki Detailed Information</h4>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">Toned Milk</h5>
                    <p>Ye whole milk (usually buffalo milk) mein skim milk powder aur water add karke banaya jaata hai taaki uska fat content kam ho sake. Ye daily consumption ke liye popular choice hai, jo whole milk ki richness aur skim milk ki leanness ke beech balance offer karta hai. Un consumers ke liye ideal hai jo moderate fat intake chahte hain bina mouthfeel sacrifice kiye. "Toned" shabd is concept se aaya ki SMP se reconstitute kiye gaye skim milk ki badi quantity ko fresh buffalo milk se "tone up" kiya jaata hai ek acceptable product banane ke liye.</p>
                </div>
                <div>
                    <h5 class="font-bold">Double Toned Milk</h5>
                    <p>Isme toned milk se bhi kam fat hota hai, lekin slightly higher SNF content hota hai taaki uska body aur nutritional value (mainly protein aur calcium) maintain rahe. Ye un logon ke liye target kiya jaata hai jo bahut health-conscious hain aur low-fat diets par hain. "Double toned" ka matlab hai ki milk ko toned milk ki comparison mein aur zyada fat reduce karke banaya gaya hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Standardized Milk</h5>
                    <p>Iska fat aur SNF content ek specific, consistent level par adjust kiya jaata hai, aksar toned aur full cream milk ke beech mein. Ye ensure karta hai ki saal bhar ek uniform product quality mile, chahe raw milk composition mein seasonal variations ho. Ye ek all-purpose milk hai. Standardization ya to high-fat milk se cream nikal kar ya low-fat milk mein cream add karke ki jaati hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Full Cream Milk</h5>
                    <p>Isme sabse zyada fat content hota hai, jo ise rich taste aur creamy texture deta hai. Ye aksar traditional Indian sweets (mithai), rich dahi (curd), paneer, khoa banane ke liye aur growing children ke liye prefer kiya jaata hai jinhe higher energy intake chahiye. Buffalo milk naturally is category mein qualify karti hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Skimmed Milk</h5>
                    <p>Centrifugal separation ke zariye lagbhag saara fat nikal diya jaata hai. Iski consistency bahut thin hoti hai aur appearance slightly bluish-white hoti hai. Primarily un logon dwara consume kiya jaata hai jo strict low-fat ya low-calorie diets par hain. Ye protein, calcium, aur baaki non-fat solids retain karta hai. Dairy product manufacture mein bhi ek ingredient ke roop mein extensively use hota hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Flavoured Milk</h5>
                    <p>Market milk jismein added flavours (chocolate, strawberry, mango, cardamom, rose, etc.), sweeteners, aur kabhi-kabhi stabilizers hote hain. FSSAI ke anusaar, flavoured milk mein minimum 1.0% fat aur 7.0% SNF (milk se) hona chahiye. Ye ek value-added product hai jo younger consumers ko target karta hai aur iska market growth rapid hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Fortified Milk</h5>
                    <p>Milk jo essential micronutrients jaise Vitamin A aur Vitamin D se fortified hota hai, FSSAI guidelines ke anusaar. Vitamin A 770 μg RE per litre aur Vitamin D 550 IU per litre add kiya jaata hai. Ye Indian population mein widespread micronutrient deficiencies ko address karta hai, especially children aur women mein.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Raw Milk Quality Assessment</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Platform Tests (Receiving Dock Tests)</h3>
            <p>Ye rapid tests hain jo milk reception dock par conduct kiye jaate hain taaki incoming raw milk ki quality aur suitability jaldi se assess ki ja sake processing ke liye. Ye quality defense ki pehli line ka kaam karte hain.</p>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">1. Organoleptic Test</h4>
            <p>Sabse pehla aur sabse simple test jo human senses use karke conduct kiya jaata hai:</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Appearance:</strong> Milk ka normal white se yellowish-white colour hona chahiye. Abnormal colours (pink, brown, bluish) contamination ya disease indicate karte hain.</li>
                <li><strong>Smell/Odour:</strong> Fresh milk ki pleasant, mild, slightly sweet smell hoti hai. Sour, rancid, bitter, ya feed jaisi odours quality issues indicate karti hain.</li>
                <li><strong>Touch/Feel:</strong> Normal milk smooth aur slightly viscous feel hona chahiye. Ropy ya slimy texture heavy microbial contamination indicate karta hai.</li>
                <li><strong>Taste:</strong> Safety concerns ki wajah se optional hai, lekin fresh milk slightly sweet taste karta hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2. Clot-on-Boiling (COB) Test</h4>
            <p>Ye ek rapid test hai jo high acidity (developed acidity >0.20% LA) ya abnormal milk (colostrum, mastitic milk) detect karne ke liye hota hai.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> 5 ml milk ek test tube mein lo. Sample ko flame ya boiling water bath mein boil karo.</li>
                <li><strong>Interpretation:</strong> Agar milk boil karne par clots banaata hai ya coagulate ho jaata hai, to ye <strong>positive</strong> hai (rejected). Agar smooth rahe, to ye <strong>negative</strong> hai (accepted).</li>
                <li><strong>Principle:</strong> High acidity casein micelles ko destabilize karti hai, jisse wo heat milne par coagulate ho jaate hain.</li>
                <li><strong>Significance:</strong> Jo milk COB test fail kare wo pasteurization heat treatment bardaasht nahi kar sakta aur heat exchangers mein fouling cause karega.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">3. Alcohol Test (68% ya 75% Ethanol)</h4>
            <p>COB test ka ek zyada sensitive alternative jo milk ki heat instability detect karta hai.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> Equal volumes (2 ml each) milk aur 68% (ya 75%) ethanol ko ek test tube ya petri dish mein mix karo. Flocculation observe karo.</li>
                <li><strong>Interpretation:</strong> Clots/flakes banna <strong>positive</strong> result indicate karta hai (milk unstable hai, rejected). Koi flocculation nahi = <strong>negative</strong> (accepted).</li>
                <li><strong>Principle:</strong> Alcohol casein micelles ko dehydrate karta hai aur dielectric constant kam karta hai, jisse high acidity ya ionic imbalance wali milk destabilize ho jaati hai.</li>
                <li><strong>Applications:</strong> UHT milk processing ke liye essential hai jahan heat stability sabse important hai. 75% alcohol test zyada stringent hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">4. Acidity Test (Titratable Acidity)</h4>
            <p>Milk ki total acidity measure karta hai, jismein natural acidity aur developed acidity (lactose ke microbial fermentation se lactic acid banne se) dono shamil hain.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> 10 ml milk ek porcelain dish mein pipette karo. 1 ml phenolphthalein indicator add karo. N/10 NaOH se titrate karo jab tak faint pink colour 10-15 seconds tak persist na kare.</li>
                <li><strong>Formula:</strong> % Lactic Acid (% LA) = (ml of NaOH × 0.009 × 100) / Volume of milk sample</li>
                <li><strong>Normal Values:</strong> Fresh cow milk: 0.13-0.14% LA; Fresh buffalo milk: 0.14-0.15% LA</li>
                <li><strong>Natural Acidity:</strong> CO₂, casein, albumin, citrates, aur phosphates ki wajah se (0.12-0.16% LA)</li>
                <li><strong>Developed Acidity:</strong> Bacteria dwara lactose ke fermentation se banne wale lactic acid ki wajah se</li>
                <li><strong>Rejection Limit:</strong> Jis milk ki acidity >0.18% LA ho, usmein generally developed acidity maani jaati hai aur reject ki ja sakti hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">5. Lactometer Test (Specific Gravity)</h4>
            <p>Milk mein paani ki possible adulteration detect karne ke liye use hota hai.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Instrument:</strong> Lactometer (Quevenne type, ISI type, ya Zeal type)</li>
                <li><strong>Procedure:</strong> Achhi tarah se mixed milk ko lactometer jar mein daalo. Lactometer ko gently lower karo aur stabilize hone ke baad upper meniscus par read karo. Temperature record karo.</li>
                <li><strong>Normal Range:</strong> Cow milk: 1.028-1.030; Buffalo milk: 1.030-1.032 (standard temperature par)</li>
                <li><strong>Interpretation:</strong> Low reading water addition suggest karti hai. Abnormally high reading SMP addition ya fat removal (skimming) indicate kar sakti hai.</li>
                <li><strong>Temperature Correction:</strong> Standard temperature se har 1°C upar ke liye, reading mein 0.0002 add karo. Har 1°C neeche ke liye, 0.0002 subtract karo.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">6. Fat Test (Gerber Method)</h4>
            <p>Milk mein fat percentage determine karne ka ek rapid volumetric method hai.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Equipment:</strong> Gerber butyrometer, Gerber centrifuge, pipettes</li>
                <li><strong>Reagents:</strong> Gerber sulfuric acid (sp. gr. 1.807-1.812) aur amyl alcohol</li>
                <li><strong>Procedure:</strong> Butyrometer mein 10 ml H₂SO₄ add karo → 10.75 ml milk → 1 ml amyl alcohol → stopper lagao aur mix karo → 5 min centrifuge karo → graduated neck mein fat column read karo</li>
                <li><strong>Principle:</strong> H₂SO₄ proteins ko dissolve karta hai aur fat release karta hai. Amyl alcohol fat layer ki clear separation mein madad karta hai. Centrifugation complete separation facilitate karta hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">7. Methylene Blue Reduction Test (MBRT)</h4>
            <p>Raw milk ka microbial load (bacterial quality) estimate karne ka ek indirect method hai.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Procedure:</strong> Ek sterilized test tube mein 10 ml milk mein 1 ml methylene blue dye solution add karo. Achhi tarah mix karo, seal karo, aur 37°C par water bath mein incubate karo. Decolourization observe karo.</li>
                <li><strong>Principle:</strong> Milk mein bacteria metabolize karte hain aur reducing substances (reductase jaise enzymes) produce karte hain jo blue dye (oxidized form) ko uski colourless leuco form (reduced form) mein reduce karte hain. Jitne zyada bacteria honge, utni jaldi dye reduce hogi.</li>
            </ul>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">MBRT Time</th>
                            <th class="p-2 border">Approximate Bacterial Count (per ml)</th>
                            <th class="p-2 border">Grading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">>5 hours</td><td class="p-2 border">< 5,00,000</td><td class="p-2 border">Very Good (Grade 1)</td></tr>
                        <tr><td class="p-2 border">3-5 hours</td><td class="p-2 border">5,00,000 - 40,00,000</td><td class="p-2 border">Good (Grade 2)</td></tr>
                        <tr><td class="p-2 border">1-3 hours</td><td class="p-2 border">40,00,000 - 2,00,00,000</td><td class="p-2 border">Fair (Grade 3)</td></tr>
                        <tr><td class="p-2 border"><30 minutes</td><td class="p-2 border">> 2,00,00,000</td><td class="p-2 border">Poor (Grade 4 - Rejected)</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">8. Adulteration Tests</h4>
            <p>Common adulterants detect karne ke liye various rapid tests:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Adulterant</th>
                            <th class="p-2 border">Test/Reagent Used</th>
                            <th class="p-2 border">Positive Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Water</td><td class="p-2 border">Lactometer + Fat test (SNF calculation)</td><td class="p-2 border">Low specific gravity, low SNF</td></tr>
                        <tr><td class="p-2 border">Starch</td><td class="p-2 border">Iodine test</td><td class="p-2 border">Blue colour</td></tr>
                        <tr><td class="p-2 border">Sugar (Sucrose)</td><td class="p-2 border">Seliwanoff's / Barfoed's test / Modified Resorcinol test</td><td class="p-2 border">Red/rose colour</td></tr>
                        <tr><td class="p-2 border">Urea</td><td class="p-2 border">DMAB test (p-dimethylaminobenzaldehyde)</td><td class="p-2 border">Distinct yellow colour</td></tr>
                        <tr><td class="p-2 border">Neutralizers (NaOH, Na₂CO₃)</td><td class="p-2 border">Rosalic acid test</td><td class="p-2 border">Rose-red colour</td></tr>
                        <tr><td class="p-2 border">Detergent</td><td class="p-2 border">Methylene blue + shake test</td><td class="p-2 border">Stable blue foam</td></tr>
                        <tr><td class="p-2 border">Hydrogen Peroxide</td><td class="p-2 border">Vanadium pentoxide test</td><td class="p-2 border">Red colour</td></tr>
                        <tr><td class="p-2 border">Formalin</td><td class="p-2 border">Hehner's test (H₂SO₄ + FeCl₃)</td><td class="p-2 border">Purple/violet ring at junction</td></tr>
                        <tr><td class="p-2 border">Salt</td><td class="p-2 border">AgNO₃ test (Silver nitrate)</td><td class="p-2 border">Yellow colour (excess chlorides)</td></tr>
                        <tr><td class="p-2 border">Maltodextrin/Glucose</td><td class="p-2 border">Barfoed's test</td><td class="p-2 border">Red precipitate within 1-2 min</td></tr>
                        <tr><td class="p-2 border">Vegetable Fat (Vanaspati)</td><td class="p-2 border">Baudouin test</td><td class="p-2 border">Crimson/red colour in acid layer</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Market Milk ki Processing with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Market Milk ka Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception (Quality & safety testing) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-filtration / Straining <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (&lt;5°C tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Storage (Insulated Silos, &lt;5°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Clarification / Centrifugal Separation (Impurities hatana) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Fat & SNF Adjustment) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Pre-heating (35-40°C separation efficiency ke liye) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (jaise, 72°C for 15 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (~65°C par, 2000-2500 psi) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (&lt;5°C tak PHE regeneration section mein)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (Aseptic/Hygienic filling) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage (&lt;5°C) & Distribution <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Food Safety Controls ki Key:</h5>
                <ul class="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li><span class="bg-gray-200 p-1 rounded">PRP</span> = Prerequisite Programme (basic hygiene & operational conditions)</li>
                    <li><span class="bg-orange-200 p-1 rounded">oPRP</span> = Operational Prerequisite Programme (hazard analysis se identify kiye gaye control measures, monitored lekin CCP level par nahi)</li>
                    <li><span class="bg-red-200 p-1 rounded">CCP</span> = Critical Control Point (wo step jahan control essential hai hazard ko prevent, eliminate, ya acceptable level tak reduce karne ke liye)</li>
                </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Detailed Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Raw Milk Reception & Testing (PRP):</strong>
                    <p>Dairy plant mein aane par, raw milk reception dock par rigorous quality testing se guzarti hai. Ye ek <strong>Prerequisite Program (PRP)</strong> hai taaki ensure ho sake ki sirf achhi quality ki raw material processing line mein aaye. Tests mein shamil hain:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Organoleptic examination (appearance, smell, taste)</li>
                        <li>Temperature check (ideally <10°C, acceptable <15°C par aana chahiye)</li>
                        <li>Clot-on-Boiling (COB) ya Alcohol test</li>
                        <li>Acidity test (≤0.18% LA honi chahiye)</li>
                        <li>Fat aur SNF estimation</li>
                        <li>Methylene Blue Reduction Test (MBRT)</li>
                        <li>Adulteration tests (starch, urea, neutralizers, etc.)</li>
                        <li>Antibiotic residue screening (beta-lactam, tetracycline)</li>
                        <li>Somatic Cell Count (SCC) mastitis detection ke liye</li>
                    </ul>
                    <p class="mt-2">In tests mein fail hone wali milk reject ya segregate ki jaati hai. Accurate sampling bahut zaroori hai – samples poore lot ka representative hona chahiye.</p>
                </li>

                <li><strong>Pre-filtration / Straining (PRP):</strong>
                    <p>Chilling se pehle, raw milk ko ek simple strainer ya in-line filter se guzaara jaata hai taaki bade visible physical contaminants jaise baal, tinka, keede, aur doosre debris nikal sake jo milking ya transportation ke dauraan aa gaye hon. Ye ek basic <strong>PRP</strong> hai.</p>
                </li>

                <li><strong>Chilling & Raw Milk Storage (oPRP):</strong>
                    <p>Accepted raw milk ko turant plate chiller ya tubular chiller use karke 5°C se neeche chill kiya jaata hai. Ye rapid cooling ek <strong>Operational Prerequisite Program (oPRP)</strong> hai kyunki ye microbial growth ko critically rok deta hai aur milk ki quality ko processing shuru hone tak preserve karta hai. Chilled milk ko insulated, stainless steel raw milk storage silos mein agitation ke saath store kiya jaata hai taaki cream separation na ho.</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Temperature target:</strong> ≤4°C</li>
                        <li><strong>Maximum storage time:</strong> Processing se pehle 24-48 hours</li>
                        <li><strong>Monitoring:</strong> Alarms ke saath continuous temperature monitoring</li>
                        <li><strong>Psychrotrophic bacteria concern:</strong> Low temperatures par bhi, psychrotrophic bacteria (jaise <i>Pseudomonas</i>) dheere-dheere grow kar sakte hain aur heat-stable lipases aur proteases produce kar sakte hain jo pasteurization survive karte hain aur off-flavours cause karte hain</li>
                    </ul>
                </li>

                <li><strong>Clarification / Filtration (oPRP):</strong>
                    <p>Chilled milk ko clarifier ya precision filter se guzaara jaata hai. Ek centrifugal clarifier 6000-8000 RPM par operate hota hai aur centrifugal force use karta hai fine suspended impurities jaise dust, dirt, leucocytes (somatic cells), epithelial cells, aur kuch bacteria nikalne ke liye. Alag ki gayi impurities "clarifier slime" ya "separator sludge" ke roop mein collect hoti hain. Ye step ek <strong>oPRP</strong> hai kyunki foreign matter hatana final product ki safety aur quality ke liye aur downstream equipment jaise pasteurizers ki efficiency ke liye essential hai.</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Cold clarification:</strong> 4-5°C par ki jaati hai (kam efficient lekin microbial growth prevent karti hai)</li>
                        <li><strong>Warm clarification:</strong> 35-40°C par ki jaati hai (lower viscosity ki wajah se zyada efficient separation)</li>
                        <li><strong>Bactofugation:</strong> Ek specialized clarification process jo high-speed centrifugation (≥20,000g) use karke 99% tak spore-forming bacteria jaise <i>Clostridium</i> aur <i>Bacillus</i> ko remove karta hai</li>
                    </ul>
                </li>

                <li><strong>Standardization (oPRP):</strong>
                    <p>Ye ek critical step hai jahan milk ka fat aur Solids-Not-Fat (SNF) content precisely adjust kiya jaata hai. Ye process ensure karta hai ki final product consistently specific type of milk ke legal aur commercial standards meet kare. Ye ek <strong>oPRP</strong> classify ki jaati hai kyunki ye product quality aur legal compliance ke liye essential hai.</p>

                    <h5 class="font-bold mt-3">Standardization ke Methods:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Batch method:</strong> Standardization tank mein manual mixing karke calculated amounts of skim milk, cream, ya SMP add karna</li>
                        <li><strong>Continuous method (In-line):</strong> Cream separator ke saath integrated ek automatic standardization unit use karna. Separator whole milk ko skim milk aur cream mein split karta hai, aur ek control valve automatically unhe sahi ratio mein remix karta hai. Zyaadatar modern plants ye method use karte hain.</li>
                    </ul>

                    <h5 class="font-bold mt-3">Pearson's Square Method (fat standardization ke liye):</h5>
                    <p>Do milk streams ka desired fat percentage achieve karne ke liye zaruri proportion determine karne ka ek simple graphical/mathematical method hai.</p>
                    <div class="bg-gray-50 p-4 rounded mt-2 font-mono text-sm">
                        <p>Example: Buffalo milk (6.5% fat) ko toned milk (3.0% fat) mein standardize karna skim milk (0.1% fat) use karke</p>
                        <br>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Whole Milk (6.5%) ─────┐</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Desired (3.0%)</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skim Milk (0.1%) ──────┘</p>
                        <br>
                        <p>Parts of Whole Milk = |3.0 - 0.1| = 2.9</p>
                        <p>Parts of Skim Milk = |6.5 - 3.0| = 3.5</p>
                        <p>Ratio = Whole : Skim = 2.9 : 3.5</p>
                        <br>
                        <p>1000 litres toned milk ke liye:</p>
                        <p>Whole Milk chahiye = (2.9 / 6.4) × 1000 = 453.1 litres</p>
                        <p>Skim Milk chahiye = (3.5 / 6.4) × 1000 = 546.9 litres</p>
                    </div>

                    <h5 class="font-bold mt-3">SNF Adjustment:</h5>
                    <p>Agar fat standardization ke baad SNF required standard se neeche hai, to Skim Milk Powder (SMP) add kiya jaata hai. SMP ki zaruri quantity calculate karne ka formula:</p>
                    <div class="bg-gray-50 p-4 rounded mt-2 font-mono text-sm">
                        <p>SMP ki quantity (kg) = [Milk ka Volume × (Required SNF% - Available SNF%)] / (96 - Required SNF%)</p>
                        <p>(Jahan 96 SMP ka approximate SNF content represent karta hai)</p>
                    </div>
                </li>

                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>Pasteurization process ka sabse critical food safety step hai, isliye ye ek <strong>Critical Control Point (CCP-1)</strong> hai. Ise define kiya jaata hai milk ke har ek particle ko ek specific temperature par ek specified time ke liye heat karna bina recontamination allow kiye.</p>

                    <h5 class="font-bold mt-3">Pasteurization ke Types:</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Method</th>
                                    <th class="p-2 border">Temperature</th>
                                    <th class="p-2 border">Time</th>
                                    <th class="p-2 border">Equipment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">LTLT (Low Temperature Long Time) / Batch / Holder</td><td class="p-2 border">63°C</td><td class="p-2 border">30 minutes</td><td class="p-2 border">Vat pasteurizer</td></tr>
                                <tr><td class="p-2 border"><strong>HTST (High Temperature Short Time)</strong></td><td class="p-2 border"><strong>72°C</strong></td><td class="p-2 border"><strong>15 seconds</strong></td><td class="p-2 border"><strong>Plate Heat Exchanger (PHE)</strong></td></tr>
                                <tr><td class="p-2 border">Higher Heat Shorter Time (HHST)</td><td class="p-2 border">89°C</td><td class="p-2 border">1.0 second</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                                <tr><td class="p-2 border">Higher Heat Shorter Time (HHST)</td><td class="p-2 border">90°C</td><td class="p-2 border">0.5 second</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                                <tr><td class="p-2 border">Higher Heat Shorter Time (HHST)</td><td class="p-2 border">94°C</td><td class="p-2 border">0.1 second</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                                <tr><td class="p-2 border">Ultra Pasteurization</td><td class="p-2 border">138°C</td><td class="p-2 border">2 seconds</td><td class="p-2 border">PHE / Tubular HE</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-bold mt-3">HTST Pasteurization System (Sabse Common):</h5>
                    <p>Plate Heat Exchanger (PHE) HTST system ka dil hai. Isme kai sections hote hain:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Regeneration Section (Heat Recovery):</strong> Incoming cold raw milk ko outgoing hot pasteurized milk se pre-heat kiya jaata hai. Ye 85-95% heat energy recover karta hai, jisse process energy-efficient banta hai. Cold raw milk garam hoti hai aur hot pasteurized milk thandi hoti hai simultaneously.</li>
                        <li><strong>Heating Section:</strong> Pre-heated milk ko further pasteurization temperature (72°C) tak heat kiya jaata hai hot water ko heating medium ke roop mein use karke.</li>
                        <li><strong>Holding Section/Tube:</strong> Milk ek insulated holding tube se guzarti hai jo ensure karti hai ki milk ka har particle pasteurization temperature par kam se kam 15 seconds tak hold ho. Tube ki length aur diameter flow rate ke basis par calculate kiye jaate hain.</li>
                        <li><strong>Flow Diversion Valve (FDV):</strong> Holding tube ke baad located ek critical safety device. Ye ek temperature sensor se connected hota hai. Agar holding tube ke exit par milk ka temperature 72°C se neeche gir jaaye, to FDV automatically under-processed milk ko raw milk balance tank mein divert kar deta hai re-pasteurization ke liye. Ye CCP-1 ka key control mechanism hai.</li>
                        <li><strong>Cooling Section:</strong> FDV pass karne ke baad, properly pasteurized milk ko cool kiya jaata hai, pehle regeneration section mein (incoming raw milk se) aur phir chilled water ya glycol se 5°C se neeche tak.</li>
                    </ul>

                    <h5 class="font-bold mt-3">Target Organisms:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Pasteurization ke liye index organism <i>Coxiella burnetii</i> hai (Q-fever ka causative agent), jo milk mein paya jane wala sabse heat-resistant non-spore-forming pathogen hai.</li>
                        <li>Saare vegetative pathogens destroy ho jaate hain: <i>Mycobacterium tuberculosis</i>, <i>Brucella abortus</i>, <i>Salmonella</i> spp., <i>Listeria monocytogenes</i>, <i>E. coli</i> O157:H7, <i>Campylobacter jejuni</i>, <i>Staphylococcus aureus</i></li>
                        <li>Pasteurization bacterial spores ya heat-resistant enzymes jaise <i>Pseudomonas</i> ke lipases ko destroy NAHI karta.</li>
                    </ul>

                    <h5 class="font-bold mt-3">Pasteurization ki Verification:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Alkaline Phosphatase (ALP) Test:</strong> Phosphatase raw milk mein ek naturally occurring enzyme hai. Iska thermal destruction curve <i>Coxiella burnetii</i> ke closely parallel chalta hai. Negative ALP test (koi enzyme activity nahi) adequate pasteurization confirm karta hai. Ye pasteurization verify karne ka standard test hai. Aschaffenburg and Mullen (A&M) method disodium para-nitrophenyl phosphate ko substrate ke roop mein use karta hai.</li>
                        <li><strong>Coliform Count:</strong> Pasteurized milk mein per ml absent hona chahiye.</li>
                        <li><strong>Standard Plate Count (SPC):</strong> Pasteurized milk ke liye 30,000 cfu/ml se exceed nahi hona chahiye (FSSAI standard).</li>
                    </ul>

                    <h5 class="font-bold mt-3">CCP-1 (Pasteurization) ke HACCP Parameters:</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Hazard</td><td class="p-2 border">Vegetative pathogens ka survival (biological hazard)</td></tr>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">≥72°C for ≥15 seconds</td></tr>
                                <tr><td class="p-2 border">Monitoring</td><td class="p-2 border">Holding tube exit par temperature ki continuous recording; flow rate monitoring</td></tr>
                                <tr><td class="p-2 border">Corrective Action</td><td class="p-2 border">FDV under-processed milk divert karta hai; equipment maintenance; reprocessing</td></tr>
                                <tr><td class="p-2 border">Verification</td><td class="p-2 border">Har batch par ALP test; temperature records ka review; equipment calibration</td></tr>
                                <tr><td class="p-2 border">Records</td><td class="p-2 border">Temperature recording charts (continuous); FDV diversion logs; ALP test results</td></tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li><strong>Homogenization (oPRP):</strong>
                    <p>Homogenization ek mechanical process hai jismein milk ko ek narrow valve (homogenizer valve) se high pressure par force kiya jaata hai. Ye bade fat globules ko chhote, uniform ones mein tod deta hai.</p>

                    <h5 class="font-bold mt-3">Process Details:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Temperature:</strong> 55-65°C (usually pasteurization se pehle ya baad mein kiya jaata hai; efficient homogenization ke liye milk warm honi chahiye)</li>
                        <li><strong>Pressure:</strong> First stage: 2000-2500 psi (140-175 kg/cm²); Second stage: 500 psi (35 kg/cm²)</li>
                        <li><strong>Fat globule size:</strong> 1-22 μm (average ~3.5 μm) se ghat kar <2 μm (average ~0.8 μm) ho jaata hai</li>
                        <li><strong>Mechanism:</strong> Fat globule disruption ke liye teen main forces zimmedar hain:
                            <ol class="list-decimal list-inside ml-4">
                                <li>Intense shear forces jab milk narrow valve gap se guzarti hai</li>
                                <li>Cavitation (vapour bubbles ka banna aur tutna)</li>
                                <li>Turbulent eddies aur velocity gradients</li>
                            </ol>
                        </li>
                    </ul>

                    <h5 class="font-bold mt-3">Homogenization ke Effects:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Cream layer formation prevent hoti hai (koi cream-line nahi)</li>
                        <li>Chhote fat globules dwara increased light scattering ki wajah se whiter appearance</li>
                        <li>Richer, smoother mouthfeel</li>
                        <li>Fat ki better digestibility</li>
                        <li>Adsorbed casein aur whey proteins se naya fat globule membrane banta hai</li>
                        <li>Slightly increased viscosity</li>
                        <li>Light ke exposure par light-induced oxidized flavour ki increased susceptibility</li>
                        <li>Milk ki reduced heat stability (UHT processing ke liye relevant)</li>
                        <li>Homogenization ke baad milk ko cream nahi kiya ja sakta (creaming efficiency khatam ho jaati hai)</li>
                    </ul>

                    <h5 class="font-bold mt-3">Two-Stage Homogenization:</h5>
                    <p>First stage fat globules ko todta hai. Second stage (lower pressure par) first stage ke baad ban sakne wale fat globules ke clusters ya aggregates ko todta hai, uniform dispersion ensure karta hai.</p>
                </li>

                <li><strong>Packaging (PRP):</strong>
                    <p>Processing ke baad, milk ko turant clean, sanitized containers mein pack kiya jaata hai. Packaging material aur process ek <strong>PRP</strong> hai jo milk ko light, oxygen, aur sabse importantly, post-pasteurization contamination (PPC) se protect karta hai.</p>

                    <h5 class="font-bold mt-3">Market Milk ke Packaging Types:</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Packaging Type</th>
                                    <th class="p-2 border">Material</th>
                                    <th class="p-2 border">Advantages</th>
                                    <th class="p-2 border">Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Poly-pack / Pillow pouch</td><td class="p-2 border">LDPE/LLDPE (Low-Density Polyethylene)</td><td class="p-2 border">Sabse sasta; India mein widely used</td><td class="p-2 border">Poor light barrier; aasani se puncture; environmental concern</td></tr>
                                <tr><td class="p-2 border">Gable-top carton</td><td class="p-2 border">Polyethylene-coated paperboard</td><td class="p-2 border">Achhi rigidity; re-closable; better brand visibility</td><td class="p-2 border">Higher cost; fully light-proof nahi</td></tr>
                                <tr><td class="p-2 border">Tetra Pak (Aseptic)</td><td class="p-2 border">6-layer laminate (PE/Paper/PE/Al foil/PE/PE)</td><td class="p-2 border">Excellent barrier; lambi shelf life (UHT); refrigeration zaruri nahi</td><td class="p-2 border">Mehnga; recycling challenges</td></tr>
                                <tr><td class="p-2 border">HDPE Bottles</td><td class="p-2 border">High-Density Polyethylene</td><td class="p-2 border">Rigid; re-closable; achhi protection</td><td class="p-2 border">Pouches se costlier; poor light barrier</td></tr>
                                <tr><td class="p-2 border">PET Bottles</td><td class="p-2 border">Polyethylene Terephthalate</td><td class="p-2 border">Transparent; lightweight; achha barrier</td><td class="p-2 border">Light transmission; cost; oxygen permeability</td></tr>
                                <tr><td class="p-2 border">Glass Bottles</td><td class="p-2 border">Glass</td><td class="p-2 border">Reusable; inert; excellent barrier</td><td class="p-2 border">Bhaari; toot sakti hai; mehngi; light transmission (agar clear hai)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-bold mt-3">Packaging Requirements:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li>Packaging material food-grade hona chahiye aur IS:10171 / FSSAI packaging regulations comply karna chahiye</li>
                        <li>Filling machines ko har run se pehle clean aur sanitize (CIP/COP) karna chahiye</li>
                        <li>Mandatory label information: Milk ka type, fat %, net quantity, batch/lot number, manufacturing date, best before date, manufacturer details, FSSAI license number, MRP, storage instructions, nutritional information</li>
                    </ul>
                </li>

                <li><strong>Cold Storage & Distribution (CCP-2):</strong>
                    <p>Packaged milk ko phir cold storage (5°C se neeche) mein store kiya jaata hai. Storage aur distribution ke dauraan cold chain maintain karna ek <strong>Critical Control Point (CCP-2)</strong> hai kyunki koi bhi temperature abuse surviving spoilage microorganisms ko grow hone de sakta hai, jisse product ki safety aur shelf life dono compromise hoti hai.</p>

                    <h5 class="font-bold mt-3">CCP-2 (Cold Chain) ke HACCP Parameters:</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Hazard</td><td class="p-2 border">Temperature abuse ki wajah se surviving spoilage aur potential pathogenic organisms ka growth</td></tr>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">Storage temperature ≤5°C (ideally 2-4°C)</td></tr>
                                <tr><td class="p-2 border">Monitoring</td><td class="p-2 border">Cold rooms mein continuous temperature monitoring; delivery vehicles par spot checks; temperature loggers</td></tr>
                                <tr><td class="p-2 border">Corrective Action</td><td class="p-2 border">Refrigeration repair; product ko functioning cold room mein relocate karna; agar temperature prolonged period ke liye exceed ho to reject karna</td></tr>
                                <tr><td class="p-2 border">Verification</td><td class="p-2 border">Temperature records ka review; finished product ki microbiological testing; shelf-life studies</td></tr>
                                <tr><td class="p-2 border">Records</td><td class="p-2 border">Cold room temperature charts; vehicle temperature logs; dispatch/receipt par product temperature</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-bold mt-3">Cold Chain Management:</h5>
                    <ul class="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Plant cold room:</strong> 2-4°C, FIFO (First In First Out) system</li>
                        <li><strong>Insulated delivery vehicles:</strong> Refrigerated trucks/vans ≤5°C maintain karte hue</li>
                        <li><strong>Retail display:</strong> ≤5°C par refrigerated cabinets</li>
                        <li><strong>Consumer:</strong> Purchase ke turant baad refrigeration</li>
                        <li><strong>Shelf life:</strong> Pasteurized milk: retail mein 2-3 din (achhi cold chain ke saath 7-10 din tak); UHT milk: room temperature par 90-180 din (unopened)</li>
                    </ul>
                </li>
            </ol>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">UHT (Ultra-High Temperature) Milk Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">UHT Processing ka Introduction</h3>
            <p>UHT processing mein milk ko <strong>135-150°C par 2-5 seconds</strong> ke liye heat kiya jaata hai followed by aseptic packaging. Ye milk ko "sterilize" karta hai saare microorganisms (spores sammet) ko destroy karke, jisse ek commercially sterile product milta hai jiski shelf life <strong>90-180 din ambient temperature par</strong> hoti hai bina refrigeration ke (jab tak khola na jaaye).</p>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">UHT Processing Methods:</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Feature</th>
                            <th class="p-2 border">Indirect Heating</th>
                            <th class="p-2 border">Direct Heating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Method</td><td class="p-2 border">PHE ya Tubular Heat Exchanger</td><td class="p-2 border">Steam Injection ya Steam Infusion</td></tr>
                        <tr><td class="p-2 border">Heating medium contact</td><td class="p-2 border">Direct contact nahi (metal plates/tubes ke through)</td><td class="p-2 border">Culinary steam ka milk ke saath direct contact</td></tr>
                        <tr><td class="p-2 border">Heating rate</td><td class="p-2 border">Dheema (seconds)</td><td class="p-2 border">Bahut tez (milliseconds)</td></tr>
                        <tr><td class="p-2 border">Heat damage</td><td class="p-2 border">Relatively zyada (zyada browning, cooked flavour)</td><td class="p-2 border">Minimal (fresh milk taste ke kareeb)</td></tr>
                        <tr><td class="p-2 border">Water addition</td><td class="p-2 border">Nahi</td><td class="p-2 border">Haan (baad mein flash cooling/vacuum se hataya jaata hai)</td></tr>
                        <tr><td class="p-2 border">Energy efficiency</td><td class="p-2 border">Zyada (90%+ heat recovery)</td><td class="p-2 border">Kam</td></tr>
                        <tr><td class="p-2 border">Equipment cost</td><td class="p-2 border">Kam</td><td class="p-2 border">Zyada</td></tr>
                        <tr><td class="p-2 border">Fouling</td><td class="p-2 border">Zyada (run time limit karta hai)</td><td class="p-2 border">Kam</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Steam Injection vs. Steam Infusion:</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Steam Injection:</strong> High-pressure culinary steam ko milk stream MEIN inject kiya jaata hai. Bahut rapid heating. Localized overheating ho sakti hai.</li>
                <li><strong>Steam Infusion:</strong> Milk ko ek steam se bhare chamber MEIN introduce kiya jaata hai (sprayed/thin film ki tarah girti hai). Zyada gentle aur uniform heating. Higher quality product produce karta hai. Milk steam mein jaati hai (steam milk mein nahi).</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Comparison: Pasteurized vs. UHT Milk</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Pasteurized Milk</th>
                            <th class="p-2 border">UHT Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Temperature</td><td class="p-2 border">72°C / 15 sec</td><td class="p-2 border">135-150°C / 2-5 sec</td></tr>
                        <tr><td class="p-2 border">Shelf life</td><td class="p-2 border">7-10 din (refrigerated)</td><td class="p-2 border">90-180 din (ambient)</td></tr>
                        <tr><td class="p-2 border">Storage</td><td class="p-2 border">Cold chain chahiye (≤5°C)</td><td class="p-2 border">Ambient storage (jab tak khola na jaaye)</td></tr>
                        <tr><td class="p-2 border">Organisms destroyed</td><td class="p-2 border">Saare vegetative pathogens</td><td class="p-2 border">Saare organisms + zyaadatar spores</td></tr>
                        <tr><td class="p-2 border">ALP Test</td><td class="p-2 border">Negative</td><td class="p-2 border">Negative</td></tr>
                        <tr><td class="p-2 border">Peroxidase Test</td><td class="p-2 border">Positive</td><td class="p-2 border">Negative</td></tr>
                        <tr><td class="p-2 border">Turbidity Test</td><td class="p-2 border">Positive (turbid)</td><td class="p-2 border">Negative (clear) - Aschaffenburg's</td></tr>
                        <tr><td class="p-2 border">Nutritional quality</td><td class="p-2 border">Minimal loss</td><td class="p-2 border">Kuch B vitamins, lysine ka loss</td></tr>
                        <tr><td class="p-2 border">Flavour</td><td class="p-2 border">Raw milk ke kareeb</td><td class="p-2 border">Slight cooked/caramel flavour</td></tr>
                        <tr><td class="p-2 border">Packaging</td><td class="p-2 border">Pouches, bottles, cartons</td><td class="p-2 border">Aseptic packaging (Tetra Pak)</td></tr>
                        <tr><td class="p-2 border">Colour</td><td class="p-2 border">Normal white</td><td class="p-2 border">Slightly brownish (Maillard reaction)</td></tr>
                        <tr><td class="p-2 border">Cost</td><td class="p-2 border">Kam processing cost</td><td class="p-2 border">Zyada processing & packaging cost</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Sterilized Milk</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">In-Bottle Sterilization</h3>
            <p>Ek traditional method jismein milk ko glass ya HDPE bottles mein bhara jaata hai, seal kiya jaata hai, aur phir batch autoclave ya continuous retort mein <strong>110-120°C par 15-20 minutes</strong> ke liye sterilize kiya jaata hai.</p>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>Shelf life:</strong> Room temperature par kai months</li>
                <li><strong>Disadvantages:</strong> Significant browning (Maillard reaction), cooked flavour, vitamins ka loss (especially B1, B12, C), aur UHT milk ki comparison mein reduced protein quality</li>
                <li><strong>Turbidity Test (Aschaffenburg):</strong> Negative (clear filtrate whey proteins ka complete denaturation indicate karta hai)</li>
                <li>Quality degradation ki wajah se aaj market milk ke liye rarely use hota hai; UHT ne largely is method ko replace kar diya hai</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processed Market Milk ka Quality Control</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Pasteurized Milk ke Tests</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test</th>
                            <th class="p-2 border">Purpose</th>
                            <th class="p-2 border">Standard / Expected Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Phosphatase (ALP) Test</td><td class="p-2 border">Adequate pasteurization verify karna</td><td class="p-2 border">Negative (≤10 μg p-nitrophenol/ml)</td></tr>
                        <tr><td class="p-2 border">Peroxidase (Storch) Test</td><td class="p-2 border">Over-heating (>80°C) check karna</td><td class="p-2 border">Positive (HTST ke baad enzyme abhi bhi active)</td></tr>
                        <tr><td class="p-2 border">Standard Plate Count (SPC)</td><td class="p-2 border">Total viable bacteria</td><td class="p-2 border">≤30,000 cfu/ml (FSSAI)</td></tr>
                        <tr><td class="p-2 border">Coliform Count</td><td class="p-2 border">Post-pasteurization contamination ka indicator</td><td class="p-2 border">Absent per 0.1 ml (FSSAI) ya ≤10/ml</td></tr>
                        <tr><td class="p-2 border"><i>E. coli</i></td><td class="p-2 border">Faecal contamination indicator</td><td class="p-2 border">Absent per ml</td></tr>
                        <tr><td class="p-2 border"><i>Salmonella</i></td><td class="p-2 border">Pathogen screening</td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border"><i>Listeria monocytogenes</i></td><td class="p-2 border">Pathogen screening</td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border">Fat %</td><td class="p-2 border">Standards ke saath compliance</td><td class="p-2 border">Declared type ke anusaar</td></tr>
                        <tr><td class="p-2 border">SNF %</td><td class="p-2 border">Standards ke saath compliance</td><td class="p-2 border">Declared type ke anusaar</td></tr>
                        <tr><td class="p-2 border">Acidity</td><td class="p-2 border">Freshness indicator</td><td class="p-2 border">≤0.15% LA (pasteurized milk ke liye)</td></tr>
                        <tr><td class="p-2 border">Temperature</td><td class="p-2 border">Cold chain compliance</td><td class="p-2 border">Dispatch par ≤5°C</td></tr>
                        <tr><td class="p-2 border">Sensory Evaluation</td><td class="p-2 border">Overall quality</td><td class="p-2 border">Koi off-flavours nahi, koi sediment nahi, proper colour</td></tr>
                        <tr><td class="p-2 border">Antibiotic Residues</td><td class="p-2 border">Chemical safety</td><td class="p-2 border">FSSAI ke anusaar MRL (Maximum Residue Limits) se neeche</td></tr>
                        <tr><td class="p-2 border">Pesticide Residues</td><td class="p-2 border">Chemical safety</td><td class="p-2 border">FSSAI ke anusaar MRL se neeche</td></tr>
                        <tr><td class="p-2 border">Aflatoxin M1</td><td class="p-2 border">Mycotoxin contamination</td><td class="p-2 border">≤0.5 μg/kg (FSSAI)</td></tr>
                        <tr><td class="p-2 border">Added Water</td><td class="p-2 border">Adulteration check</td><td class="p-2 border">Freezing point depression: -0.525 to -0.565°C (Hortvet)</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Phosphatase aur Peroxidase Tests – Ek Dual Check:</h4>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-2">
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li><strong>ALP Negative + Peroxidase Positive</strong> = Properly pasteurized (HTST at 72°C/15s) ✅</li>
                    <li><strong>ALP Positive + Peroxidase Positive</strong> = Under-pasteurized (kaafi heat nahi mili) ❌</li>
                    <li><strong>ALP Negative + Peroxidase Negative</strong> = Over-heated (~80°C se zyada heat mili) - Iska matlab pasteurization achieve hui lekin milk zarurat se zyada heat hui, quality degrade ho sakti hai ⚠️</li>
                    <li><strong>ALP Positive + Peroxidase Negative</strong> = Practice mein possible nahi (contradictory)</li>
                </ul>
                <p class="mt-2 text-sm">Note: Peroxidase phosphatase se zyada heat-stable hai. Ye ~80°C/2.5s par inactivate hota hai. Iski presence confirm karti hai ki milk HTST conditions se zyada overheat nahi hui.</p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Market Milk mein Defects</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects aur Unke Causes</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Causes</th>
                            <th class="p-2 border">Prevention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Sour/Acid taste</td><td class="p-2 border">Microbial</td><td class="p-2 border">Lactic acid bacteria (<i>Lactococcus, Lactobacillus</i>); broken cold chain</td><td class="p-2 border">Proper cold chain; achhi sanitation; timely processing</td></tr>
                        <tr><td class="p-2 border">Bitter taste</td><td class="p-2 border">Microbial/Enzymatic</td><td class="p-2 border">Psychrotrophic bacteria (<i>Pseudomonas</i>) proteases; <i>Bacillus</i> spp.</td><td class="p-2 border">Raw milk storage time limit karna; proper pasteurization</td></tr>
                        <tr><td class="p-2 border">Rancid/Soapy flavour</td><td class="p-2 border">Enzymatic</td><td class="p-2 border">Lipase action (native milk lipase ya microbial lipases); raw milk ki excessive agitation</td><td class="p-2 border">Agitation minimize karna; native lipase inactivate karne ke liye prompt pasteurization; psychrotrophic contamination avoid karna</td></tr>
                        <tr><td class="p-2 border">Oxidized/Cardboardy/Metallic flavour</td><td class="p-2 border">Chemical</td><td class="p-2 border">Lipid oxidation; copper/iron contamination; light exposure (riboflavin-sensitized oxidation)</td><td class="p-2 border">Stainless steel equipment use karna; light-proof packaging; natural antioxidants add karna</td></tr>
                        <tr><td class="p-2 border">Light-induced/Sunlight flavour</td><td class="p-2 border">Chemical</td><td class="p-2 border">Methionine ka riboflavin-sensitized oxidation methional mein; UV exposure</td><td class="p-2 border">Opaque packaging; retail par light exposure minimize karna</td></tr>
                        <tr><td class="p-2 border">Cooked/Caramel flavour</td><td class="p-2 border">Processing</td><td class="p-2 border">Pasteurization ke dauraan over-heating; UHT processing (expected)</td><td class="p-2 border">Precise temperature control; proper equipment maintenance</td></tr>
                        <tr><td class="p-2 border">Feed/Weed flavour</td><td class="p-2 border">Absorbed</td><td class="p-2 border">Gaayein pyaaz, lahsun, silage, weeds kha rahi hain; volatile compounds milk mein absorb ho rahe hain</td><td class="p-2 border">Feed quality control karna; milking ke kareeb strong-flavoured feeds dene se bachna</td></tr>
                        <tr><td class="p-2 border">Ropy/Slimy texture</td><td class="p-2 border">Microbial</td><td class="p-2 border"><i>Alcaligenes</i>, <i>Klebsiella</i>, kuch <i>Lactococcus</i> strains jo exopolysaccharides produce karte hain</td><td class="p-2 border">Proper sanitation; post-pasteurization contamination prevent karna</td></tr>
                        <tr><td class="p-2 border">Cream plug/Cream layer</td><td class="p-2 border">Processing</td><td class="p-2 border">Inadequate homogenization; damaged homogenizer valve</td><td class="p-2 border">Homogenizer ki regular maintenance aur pressure checks</td></tr>
                        <tr><td class="p-2 border">Sediment</td><td class="p-2 border">Processing</td><td class="p-2 border">Inadequate clarification/filtration</td><td class="p-2 border">Clarifiers ki regular cleaning aur maintenance</td></tr>
                        <tr><td class="p-2 border">Flat/Lacking freshness</td><td class="p-2 border">Quality</td><td class="p-2 border">Excessive dilution; purani milk; over-processing</td><td class="p-2 border">Proper standardization; FIFO system; re-processing avoid karna</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Cleaning-in-Place (CIP) System</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Dairy Processing Equipment ke liye CIP</h3>
            <p>CIP dairy processing equipment (pipes, tanks, pasteurizers, homogenizers, filling machines) ki interior surfaces ko bina dismantle kiye cleaning ka ek automated method hai. Ye food safety ensure karne aur contamination prevent karne ke liye ek critical PRP hai.</p>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Milk Processing ke liye Standard CIP Sequence:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Warm water se Pre-rinse (35-40°C):</strong> Milk ke bulk residues (proteins, fat, lactose) hatata hai. Duration: 5-10 minutes.</li>
                <li><strong>Alkali/Caustic wash (NaOH, 1-2%, 70-80°C):</strong> Proteins, fats, aur doosre organic deposits dissolve aur remove karta hai. Duration: 15-20 minutes. Sodium hydroxide sabse common alkali hai.</li>
                <li><strong>Water se Intermediate rinse:</strong> Alkali residues hatata hai. Duration: 5-10 minutes.</li>
                <li><strong>Acid wash (HNO₃, 0.5-1%, 65-70°C):</strong> Mineral deposits (milkstone - calcium phosphate deposits) hatata hai. Duration: 10-15 minutes. Nitric acid sabse common hai; phosphoric acid bhi use hota hai.</li>
                <li><strong>Clean water se Final rinse:</strong> Acid residues hatata hai. Duration: 5-10 minutes.</li>
                <li><strong>Sanitization (optional - production shuru hone se pehle):</strong> Hot water (>85°C for 15 min), steam, ya chemical sanitizers (sodium hypochlorite 100-200 ppm, peracetic acid) use karke. Remaining microorganisms destroy karta hai.</li>
            </ol>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">Key CIP Parameters (TACT principle):</h4>
            <ul class="list-disc list-inside space-y-1 ml-4">
                <li><strong>T - Time:</strong> Cleaning solution ka surface ke saath contact time</li>
                <li><strong>A - Action (Mechanical):</strong> Flow velocity (turbulent flow ke liye minimum 1.5 m/s) aur spray ball coverage</li>
                <li><strong>C - Concentration:</strong> Cleaning chemicals ki concentration</li>
                <li><strong>T - Temperature:</strong> Cleaning solutions ka temperature</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Standardization & Numerical Problems</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Important Formulas</h3>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">1. Richmond's Formula (SNF calculate karne ke liye):</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>SNF% = (CLR / 4) + (0.21 × F) + 0.36</strong></p>
                <p class="mt-2">Jahan:</p>
                <ul class="list-disc list-inside ml-4">
                    <li>CLR = Corrected Lactometer Reading (standard temperature par)</li>
                    <li>F = Fat percentage</li>
                </ul>
                <p class="mt-2"><strong>Example:</strong> Agar CLR = 30 aur Fat = 4.0%, to SNF = (30/4) + (0.21 × 4.0) + 0.36 = 7.5 + 0.84 + 0.36 = <strong>8.7%</strong></p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">2. Total Solids (TS):</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>TS% = Fat% + SNF%</strong></p>
                <p class="mt-2"><strong>Example:</strong> Agar Fat = 4.0% aur SNF = 8.7%, to TS = 4.0 + 8.7 = <strong>12.7%</strong></p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">3. Pearson's Square Method:</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono">
                    A (higher fat %) ——————→ (C - B) parts of A<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C (desired %)<br>
                    B (lower fat %) ———————→ (A - C) parts of B
                </p>
                <p class="mt-2">Total parts = (C - B) + (A - C) = (A - B)</p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">4. Mass Balance Equation:</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>M₁ × F₁ = M₂ × F₂ + M₃ × F₃</strong></p>
                <p class="mt-2">Jahan M = mass/volume, F = fat percentage</p>
                <p>(Input = Output 1 + Output 2)</p>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-4 mb-2">5. Added Water ki Quantity (Adulteration Detection):</h4>
            <div class="bg-gray-50 p-4 rounded mt-2">
                <p class="font-mono"><strong>% Water Added = [(Genuine milk ka SNF - Sample ka SNF) / Genuine milk ka SNF] × 100</strong></p>
                <p class="mt-2"><strong>Example:</strong> Genuine milk SNF = 8.5%, Sample SNF = 7.65%</p>
                <p>% Water added = [(8.5 - 7.65) / 8.5] × 100 = <strong>10%</strong></p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Solved Numerical Problems</h3>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 1: Pearson's Square se Fat Standardization</h5>
                <p class="mt-2"><strong>Q:</strong> Ek dairy ke paas 5000 litres buffalo milk hai jiski fat 7.0% hai. Standardized milk (4.5% fat) banane ke liye kitni skim milk (0.1% fat) add karni chahiye?</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p class="font-mono mt-1">
                    Buffalo milk (7.0%) → |4.5 - 0.1| = 4.4 parts<br>
                    Skim milk (0.1%) → |7.0 - 4.5| = 2.5 parts<br><br>
                    Ratio = Buffalo : Skim = 4.4 : 2.5<br><br>
                    Agar Buffalo milk = 5000 litres<br>
                    Skim milk chahiye = (2.5 / 4.4) × 5000 = <strong>2840.9 litres</strong><br>
                    Total standardized milk = 5000 + 2840.9 = <strong>7840.9 litres</strong>
                </p>
                <p class="mt-2"><strong>Verification:</strong> (5000 × 7.0 + 2840.9 × 0.1) / 7840.9 = (35000 + 284.09) / 7840.9 = 35284.09 / 7840.9 = <strong>4.5% ✓</strong></p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 2: Toned Milk ki Preparation</h5>
                <p class="mt-2"><strong>Q:</strong> 1000 litres buffalo milk (6.5% fat, 9.2% SNF) mein kitna skim milk powder (SMP, 96% SNF, 0.5% fat) aur paani add karna chahiye toned milk (3.0% fat, 8.5% SNF) banane ke liye?</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p>Maano x = SMP ka kg, y = add kiye gaye paani ke litres</p>
                <p class="font-mono mt-1">
                    Fat balance: 1000 × 6.5 + x × 0.5 + y × 0 = (1000 + x + y) × 3.0<br>
                    6500 + 0.5x = 3000 + 3x + 3y<br>
                    3500 = 2.5x + 3y ... (i)<br><br>
                    SNF balance: 1000 × 9.2 + x × 96 + y × 0 = (1000 + x + y) × 8.5<br>
                    9200 + 96x = 8500 + 8.5x + 8.5y<br>
                    700 + 87.5x = 8.5y<br>
                    y = (700 + 87.5x) / 8.5 ... (ii)<br><br>
                    (ii) ko (i) mein substitute karte hue:<br>
                    3500 = 2.5x + 3 × [(700 + 87.5x) / 8.5]<br>
                    3500 = 2.5x + (2100 + 262.5x) / 8.5<br>
                    3500 × 8.5 = 21.25x + 2100 + 262.5x<br>
                    29750 = 283.75x + 2100<br>
                    27650 = 283.75x<br>
                    <strong>x = 97.4 kg SMP</strong><br><br>
                    y = (700 + 87.5 × 97.4) / 8.5<br>
                    y = (700 + 8522.5) / 8.5<br>
                    <strong>y = 1085 litres paani</strong><br><br>
                    Total toned milk = 1000 + 97.4 + 1085 = <strong>2182.4 litres</strong>
                </p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 3: Cream Separation</h5>
                <p class="mt-2"><strong>Q:</strong> 10,000 litres whole milk (4.0% fat) separate ki jaati hai. Agar skim milk mein 0.05% fat hai aur cream mein 40% fat hai, to cream aur skim milk ki quantity calculate karo.</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p>Maano C = cream ke litres, S = skim milk ke litres</p>
                <p class="font-mono mt-1">
                    Mass balance: C + S = 10,000 ... (i)<br>
                    Fat balance: C × 40 + S × 0.05 = 10,000 × 4.0<br>
                    40C + 0.05S = 40,000 ... (ii)<br><br>
                    (i) se: S = 10,000 - C<br>
                    Substitute karte hue: 40C + 0.05(10,000 - C) = 40,000<br>
                    40C + 500 - 0.05C = 40,000<br>
                    39.95C = 39,500<br>
                    <strong>C = 988.7 litres cream</strong><br>
                    <strong>S = 9011.3 litres skim milk</strong>
                </p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-bold text-blue-800">Problem 4: Holding Tube Length Calculation</h5>
                <p class="mt-2"><strong>Q:</strong> HTST pasteurization ke liye holding tube ki minimum length calculate karo agar flow rate 5000 litres/hour hai, required holding time 15 seconds hai, aur tube ka internal diameter 50 mm hai. Velocity ratio factor 0.5 assume karo (turbulent flow ke liye).</p>
                <p class="mt-2"><strong>Solution:</strong></p>
                <p class="font-mono mt-1">
                    Flow rate = 5000 L/hr = 5000 / 3600 L/s = 1.389 L/s = 0.001389 m³/s<br><br>
                    Tube ka cross-sectional area = π × (d/2)² = π × (0.025)² = 0.001963 m²<br><br>
                    Average velocity = Flow rate / Area = 0.001389 / 0.001963 = 0.708 m/s<br><br>
                    Turbulent flow wali tube mein, sabse tez particle (centre par) lagbhag 2× average velocity par chalta hai (velocity ratio = 0.5).<br><br>
                    Maximum velocity = 0.708 / 0.5 = 1.416 m/s<br><br>
                    Minimum tube length = Maximum velocity × Holding time<br>
                    = 1.416 × 15 = <strong>21.24 metres</strong>
                </p>
                <p class="mt-2 text-sm">Note: Practice mein, ek additional safety margin (10-15%) add kiya jaata hai, jisse tube lagbhag 24 metres ki hoti hai.</p>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Dairy Plant mein Prerequisite Programs (PRPs)</h2>
            <p>PRPs wo basic conditions aur activities hain jo food chain mein hygienic environment maintain karne ke liye zaroori hain, jo safe end products ke production, handling, aur provision ke liye suitable ho. Ye HACCP system ki foundation banate hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Market Milk Processing ke Key PRPs:</h3>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Infrastructure & Building Design:</strong> Cross-contamination prevent karne wala adequate layout; alag raw aur processed areas; smooth, cleanable surfaces; adequate drainage; pest-proof construction.</li>
                <li><strong>Supplier Control:</strong> Raw milk, packaging materials, chemicals ke liye approved supplier list; supplier audits; certificates of analysis (CoA).</li>
                <li><strong>Equipment Maintenance:</strong> Pasteurizers, homogenizers, fillers, coolers ke preventive maintenance schedules; thermometers, flow meters, aur pressure gauges ki calibration.</li>
                <li><strong>Cleaning & Sanitation (CIP/COP):</strong> Documented cleaning schedules; validated CIP programs; cleaning chemical management; swab tests aur rinse water analysis se sanitation verification.</li>
                <li><strong>Personal Hygiene:</strong> Medical fitness certificates; proper uniforms, hairnets, gloves; handwashing protocols; no jewelry policy; hygiene training.</li>
                <li><strong>Pest Control:</strong> Integrated Pest Management (IPM); insect screens, air curtains, rodent traps; pest control contracts; monitoring records.</li>
                <li><strong>Water Quality:</strong> Processing aur cleaning ke liye potable water; regular water testing (microbiological aur chemical); water treatment systems (chlorination, UV, RO).</li>
                <li><strong>Waste Management:</strong> Whey, wash water, packaging waste ka proper disposal; effluent treatment plant (ETP); pollution control norms ke saath compliance.</li>
                <li><strong>Training:</strong> Sabhi staff ke liye food safety, GMP, GHP, HACCP, personal hygiene par regular training programs.</li>
                <li><strong>Traceability & Recall:</strong> Batch coding system jo raw milk source se consumer par finished product tak full traceability enable kare; documented recall procedure.</li>
                <li><strong>Allergen Management:</strong> Milk khud ek allergen hai, lekin flavoured milk products mein doosre allergens (nuts, soy, etc.) ka management.</li>
                <li><strong>Storage & Transport:</strong> Appropriate storage conditions; FIFO system; vehicle cleanliness aur temperature control.</li>
            </ol>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Market Milk Processing mein Recent Advances</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Emerging Technologies</h3>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">1. Microfiltration (MF)</h5>
                    <p>Ek membrane separation technique jo 0.8-1.4 μm pore size wali membranes use karti hai. Skim milk se bacteria aur spores hatane ke liye use hoti hai bina excessive heat treatment ke. Mild heat treatment ke saath combine karke, ye refrigeration mein shelf life 25-35 din tak extend kar sakti hai fresh milk taste maintain karte hue. Aksar Extended Shelf Life (ESL) milk processing mein use hoti hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">2. Pulsed Electric Field (PEF)</h5>
                    <p>Ek non-thermal processing method jo milk par short pulses (microseconds) of high-voltage electric field (20-80 kV/cm) apply karta hai. Ye microbial cell membranes ka electroporation (irreversible pore formation) cause karta hai, jisse cell death hoti hai. PEF-treated milk thermally processed milk ki comparison mein apna natural taste aur nutritional value zyada retain karti hai. Commercial milk processing ke liye abhi bhi largely research/pilot scale par hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">3. High-Pressure Processing (HPP)</h5>
                    <p>Milk ko ambient ya refrigeration temperatures par bahut high pressures (400-600 MPa) diya jaata hai. Vegetative bacteria aur kuch enzymes ko inactivate karta hai jabki vitamins, flavour, aur colour ko thermal processing se better preserve karta hai. "Cold pasteurization" bhi kehte hain. Challenges mein casein micelle structure aur whey protein denaturation par effects shamil hain.</p>
                </div>
                <div>
                    <h5 class="font-bold">4. UV-C Treatment</h5>
                    <p>Microbial inactivation ke liye milk ki thin films ko UV-C radiation (254 nm) expose karna. Surface decontamination ke liye effective hai lekin milk jaise opaque liquids mein limited penetration. Thin-film turbulent flow systems mein milk treat karne ke liye explore kiya ja raha hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">5. Extended Shelf Life (ESL) Milk</h5>
                    <p>Pasteurized aur UHT milk ke beech ki ek category, refrigeration mein 21-45 din shelf life achieve karti hai. Microfiltration + mild heat treatment, higher pasteurization temperatures (125-130°C for 2-4 seconds), ya bactofugation + pasteurization ke combinations se achieve hoti hai. European markets mein increasingly popular hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">6. Lactose-Free Milk</h5>
                    <p>Pasteurized/UHT milk ko enzyme lactase (β-galactosidase) se treat karke produce kiya jaata hai, jo lactose ko glucose aur galactose mein hydrolyze karta hai. Ye milk ko lactose-intolerant individuals ke liye digestible banata hai. Resultant milk free glucose aur galactose ki wajah se slightly sweeter taste karti hai. India aur globally growing market segment hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">7. A2 Milk</h5>
                    <p>Milk jismein sirf beta-casein protein ka A2 variant hota hai (specific cow breeds jaise Gir, Sahiwal, Guernsey se). Regular milk mein A1 aur A2 dono beta-casein hote hain. Kuch research suggest karti hai ki A2 milk digest karna aasan ho sakta hai, haalaki scientific consensus abhi evolve ho raha hai. Premium pricing product hai.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Legal Framework & Regulatory Standards</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">India mein Market Milk Govern karne wale Key Regulations</h3>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Food Safety and Standards Act, 2006:</strong> India mein sabhi food products govern karne wala umbrella legislation.</li>
                <li><strong>FSS (Food Product Standards and Food Additives) Regulations, 2011:</strong> Different types of milk ke standards define karta hai (fat, SNF, acidity, etc.).</li>
                <li><strong>FSS (Contaminants, Toxins and Residues) Regulations, 2011:</strong> Pesticide residues, heavy metals (lead, cadmium, mercury, arsenic), aflatoxin M1, antibiotic residues, aur melamine ke maximum limits set karta hai.</li>
                <li><strong>FSS (Packaging and Labelling) Regulations, 2011:</strong> Market milk ke liye labelling requirements mandate karta hai.</li>
                <li><strong>FSS (Licensing and Registration of Food Businesses) Regulations, 2011:</strong> Sabhi dairy processing plants ko FSSAI license obtain karna zaroori hai.</li>
                <li><strong>FSS (Food Recall Procedure) Regulations, 2017:</strong> Product recall ke procedures establish karta hai.</li>
                <li><strong>BIS Standards:</strong> IS 1547 (Pasteurized milk), IS 13428 (UHT milk), IS 2311 (Milk cereal-based complementary food), IS 10484 (Dairy plant design and layout).</li>
                <li><strong>MMPO (Milk and Milk Products Order), 1992:</strong> Pehle >10,000 litres/day handle karne wale milk processing plants govern karta tha. Ab FSSAI ke under aa gaya hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Pasteurized Milk ke FSSAI Microbiological Standards</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Plate Count (TPC)</td><td class="p-2 border">≤30,000 cfu/ml</td></tr>
                        <tr><td class="p-2 border">Coliform Count</td><td class="p-2 border">Absent per 0.1 ml</td></tr>
                        <tr><td class="p-2 border"><i>E. coli</i></td><td class="p-2 border">Absent per ml</td></tr>
                        <tr><td class="p-2 border"><i>Salmonella</i></td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border"><i>Listeria monocytogenes</i></td><td class="p-2 border">Absent per 25 ml</td></tr>
                        <tr><td class="p-2 border"><i>S. aureus</i></td><td class="p-2 border">Absent per ml</td></tr>
                        <tr><td class="p-2 border">Phosphatase Test</td><td class="p-2 border">Negative</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Summary & Exam ke liye Key Points</h2>
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <h4 class="font-bold text-green-800">Quick Revision Points:</h4>
                <ul class="list-disc list-inside space-y-2 ml-4">
                    <li>Market milk = direct human consumption ke liye processed liquid milk</li>
                    <li>FSSAI 5 main types define karta hai: Full cream (6% F, 9% SNF), Standardized (4.5% F, 8.5% SNF), Toned (3.0% F, 8.5% SNF), Double Toned (1.5% F, 9.0% SNF), Skimmed (≤0.5% F, 8.7% SNF)</li>
                    <li>HTST pasteurization: 72°C for 15 seconds - sabse common aur sabse important CCP</li>
                    <li>ALP test negative = properly pasteurized; Peroxidase test positive = over-heat nahi hui</li>
                    <li>Homogenization: 2000-2500 psi, fat globules ko <2 μm tak reduce karta hai, creaming prevent karta hai</li>
                    <li>Plant se consumer tak Cold chain (≤5°C) maintenance CCP-2 hai</li>
                    <li>MBRT >5 hours = Very Good quality raw milk</li>
                    <li>Flow Diversion Valve (FDV) HTST system mein critical safety device hai</li>
                    <li>UHT: 135-150°C / 2-5 sec + aseptic packaging = ambient par 90-180 din shelf life</li>
                    <li>Richmond's formula: SNF = CLR/4 + 0.21F + 0.36</li>
                    <li>Pearson's Square fat standardization calculations ke liye use hota hai</li>
                    <li>Toned milk concept: Buffalo milk mein SMP + water add karke fat reduce karna jabki SNF maintain karna</li>
                    <li>CIP sequence: Water rinse → Alkali wash → Water rinse → Acid wash → Water rinse → Sanitize</li>
                    <li>Coliforms dwara Post-pasteurization contamination (PPC) sabse common quality problem hai</li>
                    <li>Pasteurization ke liye Index organism: <i>Coxiella burnetii</i></li>
                    <li>Modern PHE mein Regeneration efficiency: 85-95%</li>
                    <li>India duniya ka sabse bada milk producer hai (>230 MMT)</li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Frequently Asked Questions (FAQs)</h2>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">Q1: Buffalo milk toning ke liye kyun prefer ki jaati hai?</h5>
                    <p>Buffalo milk mein high fat (6-7.5%) aur high SNF (9-10%) hota hai, jisse ye SMP aur water se dilution ke liye ideal banti hai. Toning ke baad bhi, resultant milk adequate SNF aur body maintain karti hai, cow milk ke opposite jiski already relatively lower fat aur SNF hoti hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q2: Pasteurization aur sterilization mein kya fark hai?</h5>
                    <p>Pasteurization (72°C/15s) vegetative pathogens maarta hai lekin spores nahi, cold chain chahiye, aur short shelf life (7-10 din). Sterilization (UHT: 135-150°C/2-5s ya In-bottle: 115°C/15 min) saare organisms ko maarta hai spores sammet, ambient storage allow karti hai, aur lambi shelf life (90-180 din).</p>
                </div>
                <div>
                    <h5 class="font-bold">Q3: Homogenization pasteurization se pehle ya baad mein kyun ki jaati hai lekin room temperature par kyun nahi?</h5>
                    <p>Homogenization 55-65°C par sabse efficient hai kyunki: (a) Lower viscosity fat globules ki better disruption allow karti hai, (b) HTST system conveniently regeneration section mein is temperature par milk provide karta hai, (c) Cold homogenization kam efficient hai aur higher pressures chahiye. Ye typically PHE ke regeneration aur heating sections ke beech placed hoti hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q4: MBRT test ki kya significance hai?</h5>
                    <p>MBRT (Methylene Blue Reduction Test) raw milk mein bacterial load ka ek indirect, rapid estimate hai. Ye decolourization time ko bacterial count ke saath correlate karta hai. Reception dock par raw milk quality grading ke liye use hota hai. Haalaki, iski limitations hain: ye specific types of bacteria detect nahi karta, heat-resistant organisms ya poor reducers organisms ko detect nahi karta.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q5: Milkstone kya hai aur ise kaise hataya jaata hai?</h5>
                    <p>Milkstone ek hard, calcium phosphate-based deposit hai jo dairy equipment ki surfaces par, especially heat exchangers par, processing ke dauraan banti hai. Ye calcium phosphate, denatured proteins, aur milk salts se bani hoti hai. Ye insulation ka kaam karti hai (heat transfer efficiency kam karti hai) aur bacteria harbour karti hai. CIP ke dauraan acid wash (nitric acid ya phosphoric acid) use karke ise hataya jaata hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q6: HTST system mein balance tank ka kya role hai?</h5>
                    <p>Balance tank (constant level tank ya float tank bhi kehte hain): (a) Pump ko milk ki constant head maintain karta hai, system ke through uniform flow rate ensure karta hai, (b) FDV se diverted milk receive karta hai jab pasteurization temperature achieve nahi hota, (c) System mein air incorporation prevent karta hai, (d) Raw milk supply aur pasteurizer ke beech buffer provide karta hai.</p>
                </div>
                <div>
                    <h5 class="font-bold">Q7: Booster pump regeneration section ke baad kyun placed hota hai?</h5>
                    <p>Timing/booster pump regeneration section ke baad aur heating section se pehle placed hota hai. Ye holding tube ke through ek constant, positive flow rate ensure karta hai. Ye isliye critical hai kyunki holding time (15 seconds) is specific flow rate aur holding tube dimensions ke basis par calculate kiya jaata hai. Flow rate mein koi bhi variation actual holding time change kar dega, jisse food safety compromise ho sakti hai.</p>
                </div>
            </div>
        `
    }
}

    
