

export const waterTestingContent = {
    hi: {
        title: "Jal Parikshan Guide (Water Testing Guide)",
        description: "Jal ki gunvatta ki janch ke liye samanya mapdandon, unki vistrit vaigyanik prakriyaon, reagents, aur ganana vidhiyon ke liye ek comprehensive guide. Yeh guide BIS, APHA, aur WHO standards ke anusar taiyar ki gayi hai.",
        backToTopics: "Vishyon par wapas jaen",
        important_note: {
            title: "⚠️ Mahatvapurna Note:",
            text: `Hamesha suraksha niyamon ka palan karen aur lab mein kaam karte samay uchit surakshit upkaran (PPE) pehnein jaise ki lab coat, gloves, aur safety goggles. Sateek parinamon ke liye, pramanit prayogashaalaon aur manak vidhiyon ka palan karna behtar hai. 
            
            Reference Standards:
            • BIS 3025 (Bureau of Indian Standards) - Methods of Sampling and Test for Water and Wastewater
            • APHA Standard Methods for the Examination of Water and Wastewater (23rd Edition)
            • WHO Guidelines for Drinking-water Quality (4th Edition)
            • IS 10500:2012 - Drinking Water Specifications`
        },
        tests: [
            {
                id: 'alkalinity_p',
                title: 'Alkalinity, Phenolphthalein (pH 8.3)',
                intro: `Yeh test pani mein hydroxide (OH⁻) aur carbonate (CO₃²⁻) alkalinity ko maapata hai. 
                
                🔬 Scientific Background:
                Phenolphthalein alkalinity pH 8.3 se upar ki alkalinity ko represent karti hai. Is pH par:
                • Sabhi hydroxide (OH⁻) neutralize ho jate hain
                • Sabhi carbonate (CO₃²⁻) bicarbonate (HCO₃⁻) mein convert ho jate hain
                
                Reactions:
                OH⁻ + H⁺ → H₂O
                CO₃²⁻ + H⁺ → HCO₃⁻
                
                📊 Permissible Limits:
                • Drinking Water (IS 10500): No specific limit, but typically pH should be 6.5-8.5
                • BIS 3025 (Part 23): 1984 ke anusar test kiya jata hai
                
                💡 Practical Significance:
                • High P-alkalinity industrial water treatment mein scaling ka indication deta hai
                • Swimming pools aur boiler water mein iska control zaroori hai`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>Burette (50 mL):</strong> 0.1 mL accuracy ke sath, preferably class A</li>
                    <li><strong>Conical Flask (250 mL):</strong> Erlenmeyer type</li>
                    <li><strong>Volumetric Flask (1000 mL):</strong> Class A</li>
                    <li><strong>Pipette (25 mL, 50 mL):</strong> Class A volumetric pipettes</li>
                    <li><strong>Magnetic Stirrer:</strong> Accurate titration endpoint detection ke liye</li>
                    <li><strong>White Tile:</strong> Color change clearly dekhne ke liye burette ke niche rakhein</li>
                </ul>`,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Standard Sodium Carbonate, ~0.05 N (Primary Standard):</strong>
                            <br/>Taiyaar karne ki vidhi:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Na₂CO₃ ko 250°C par 4 ghante muffle furnace mein sukhaen (moisture aur CO₂ hatane ke liye)</li>
                                <li>Desiccator mein silica gel ke sath thanda karen (approx. 30 min)</li>
                                <li>Analytical balance par 2.5±0.2 g sateekta se taulen (4 decimal places tak)</li>
                                <li>Chhoti matra mein distilled water mein dissolve karen, phir 1000 mL volumetric flask mein transfer karen</li>
                                <li>Distilled water se mark tak bharein aur achhi tarah mix karen</li>
                            </ul>
                            <br/><em>Normality = (Weight in g × 1000) / (Equivalent weight × Volume in mL)</em>
                            <br/><em>Na₂CO₃ ka equivalent weight = 53 g/eq</em>
                        </li>
                        <li>
                            <strong>Standard H₂SO₄, ~0.1N:</strong>
                            <br/>Taiyaar karne ki vidhi:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Concentrated H₂SO₄ (specific gravity 1.84) mein se 2.8 mL carefully distilled water mein daalen (hamesha acid ko pani mein daalen, kabhi pani ko acid mein nahi)</li>
                                <li>1 liter tak patle karen</li>
                                <li>Standardization: 40.00 mL 0.05N Na₂CO₃ ko conical flask mein lein, 2-3 drops methyl orange indicator daalen, H₂SO₄ se orange rang aane tak titrate karen</li>
                                <li>Normality = (mL Na₂CO₃ × N of Na₂CO₃) / mL H₂SO₄</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard H₂SO₄, 0.02N (Working Standard):</strong>
                            <br/>0.1N H₂SO₄ solution se calculate karke taiyaar karen:
                            <br/>V₁N₁ = V₂N₂ formula use karen
                            <br/>Example: 200 mL 0.1N → 1000 mL 0.02N banane ke liye
                        </li>
                        <li>
                            <strong>Phenolphthalein Indicator Solution (pH range 8.2-10.0):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>5 g phenolphthalein powder ko 500 mL 95% ethyl alcohol mein dissolve karen</li>
                                <li>500 mL CO₂-free distilled water daalen</li>
                                <li>Agar solution pink ho jaye, toh drop-wise 0.02N NaOH daalen jab tak rang bilkul saaf na ho jaye</li>
                                <li>Dark bottle mein store karen (light se degrade hota hai)</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="text-xs mt-2 bg-yellow-50 p-2 rounded">⚠️ <strong>Quality Check:</strong> Har naye batch ke reagent ko certified reference material (CRM) se verify karen.</p>
                `,
                
                procedure: [
                    `Sample Collection aur Preparation:
                    • Polyethylene ya glass container mein sample collect karen
                    • Test possible ho sake utna jaldi karna chahiye (within 24 hours)
                    • Sample ko filter na karen, shake na karen, aur na hi dilute karen jab tak zaroori na ho`,
                    
                    `Conical flask mein pipette se 25-50 mL sample lein (agar alkalinity high ho toh chhota volume lein):
                    • Sample volume choose karne ka criterion: Expected alkalinity ke basis par
                    • <500 mg/L: 50 mL sample
                    • 500-1000 mg/L: 25 mL sample
                    • >1000 mg/L: Dilute karke test karen`,
                    
                    `2-3 drops phenolphthalein indicator daalen:
                    • Agar solution colorless rahe: P-alkalinity = zero (pH already 8.3 se kam hai)
                    • Agar solution pink/red ho jaye: Continue titration`,
                    
                    `0.02N H₂SO₄ se carefully titrate karen jab tak pink rang bilkul saaf na ho jaye:
                    • Burette se acid drop by drop daalen, magnetic stirrer par continuously mix karte huye
                    • Endpoint ke paas aate aate half-drop additions karen
                    • Ranga change permanent hona chahiye (30 seconds tak stable)`,
                    
                    `Burette reading note karen (V₁ mL) - yeh P-alkalinity ka volume hai`,
                    
                    `Blank titration: Distilled water ke sath same procedure follow karen aur blank value subtract karen`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong><br/>
                Phenolphthalein Alkalinity (mg/L as CaCO₃) = (A × N × 50,000) / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>A = P-endpoint tak use kiya gaya titrant ka mL (blank corrected)</li>
                    <li>N = H₂SO₄ ki exact normality</li>
                    <li>50,000 = CaCO₃ ka equivalent weight (50) × 1000</li>
                    <li>V = Sample ka volume (mL)</li>
                </ul>
                
                <br/><strong>Example Calculation:</strong>
                <br/>Agar A = 3.5 mL, N = 0.0200, V = 50 mL
                <br/>P-Alkalinity = (3.5 × 0.0200 × 50,000) / 50 = 70 mg/L as CaCO₃
                
                <br/><br/><strong>Alkalinity Forms ki Interpretation:</strong>
                <table class="w-full text-left border-collapse mt-2 text-xs">
                    <thead>
                        <tr>
                            <th class="border p-1">Condition</th>
                            <th class="border p-1">Hydroxide Alk.</th>
                            <th class="border p-1">Carbonate Alk.</th>
                            <th class="border p-1">Bicarbonate Alk.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-1">P = 0</td><td class="border p-1">0</td><td class="border p-1">0</td><td class="border p-1">T</td></tr>
                        <tr><td class="border p-1">P < T/2</td><td class="border p-1">0</td><td class="border p-1">2P</td><td class="border p-1">T-2P</td></tr>
                        <tr><td class="border p-1">P = T/2</td><td class="border p-1">0</td><td class="border p-1">2P</td><td class="border p-1">0</td></tr>
                        <tr><td class="border p-1">P > T/2</td><td class="border p-1">2P-T</td><td class="border p-1">2(T-P)</td><td class="border p-1">0</td></tr>
                        <tr><td class="border p-1">P = T</td><td class="border p-1">T</td><td class="border p-1">0</td><td class="border p-1">0</td></tr>
                    </tbody>
                </table>
                <p class="text-xs mt-1">P = Phenolphthalein Alkalinity, T = Total Alkalinity</p>
                </div>`
            },
            
            {
                id: 'alkalinity_t',
                title: 'Alkalinity, Total (pH 4.5)',
                intro: `Yeh test pani ki kul alkalinity ko maapata hai, jisme hydroxide, carbonate, aur bicarbonate alkalinity shamil hain.
                
                🔬 Scientific Background:
                Total alkalinity titration pH 4.5 (methyl orange endpoint) ya pH 4.3 (bromcresol green endpoint) tak kiya jata hai. Is pH par sabhi carbonate aur bicarbonate species neutralize ho jati hain:
                
                Reactions at pH 4.5:
                HCO₃⁻ + H⁺ → H₂CO₃ (→ H₂O + CO₂)
                CO₃²⁻ + 2H⁺ → H₂CO₃
                OH⁻ + H⁺ → H₂O
                
                📊 Permissible Limits:
                • WHO: No health-based guideline (aesthetic limit suggested: 200 mg/L as CaCO₃)
                • IS 10500:2012: No prescribed limit for alkalinity
                • Ideal range for drinking water: 20-200 mg/L as CaCO₃
                
                💡 Practical Significance:
                • Low alkalinity (<20 mg/L): Corrosive water, pipe degradation ka risk
                • High alkalinity (>500 mg/L): Bitter taste, scaling problems
                • Buffer capacity: Higher alkalinity = better pH buffering`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>Burette (50 mL):</strong> 0.05 mL readable, Class A</li>
                    <li><strong>Conical Flask (250 mL):</strong> Borosilicate glass</li>
                    <li><strong>Volumetric Pipettes (25 mL, 50 mL):</strong> Class A</li>
                    <li><strong>pH Meter:</strong> Electrometric endpoint detection ke liye (potentiometric titration)</li>
                    <li><strong>Magnetic Stirrer with Hotplate</strong></li>
                </ul>`,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Standard H₂SO₄, 0.02N:</strong>
                            Phenolphthalein alkalinity ke liye taiyaar kiye gaye solution se hi use karen.
                        </li>
                        <li>
                            <strong>Bromcresol Green Indicator (pH range 3.8-5.4):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>100 mg bromcresol green sodium salt ko 100 mL distilled water mein dissolve karen</li>
                                <li>Color change: Blue (pH >5.4) → Yellow (pH <3.8)</li>
                                <li>Endpoint: Blue se yellow-green mein change (pH ~4.5)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Mixed Indicator (Bromcresol Green + Methyl Red):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Sharper endpoint ke liye: 3 parts bromcresol green + 1 part methyl red</li>
                                <li>Gray-purple → Pink endpoint (pH 4.5)</li>
                            </ul>
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `Flask mein 25-50 mL sample lein (same as P-alkalinity test se continue kiya ja sakta hai)`,
                    
                    `2-3 drops bromcresol green indicator ya mixed indicator daalen`,
                    
                    `0.02N H₂SO₄ se titrate karen:
                    • Jab tak blue color yellow-green mein na badal jaye (pH ~4.5)
                    • Agar CO₂ interfere kar raha ho, toh titration ke end mein briefly heat karen (CO₂ remove karne ke liye) aur cool karke re-titrate karen`,
                    
                    `Total volume of acid used note karen (V₂ mL)`,
                    
                    `Electrometric Endpoint Detection (Preferred Method):
                    • pH meter use karke exactly pH 4.5 par titration rok den
                    • Yeh method more accurate hai, especially low alkalinity samples mein`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong><br/>
                Total Alkalinity (mg/L as CaCO₃) = (B × N × 50,000) / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>B = Bromcresol green endpoint tak use kiya gaya titrant ka total mL (blank corrected)</li>
                    <li>N = H₂SO₄ ki exact normality</li>
                    <li>50,000 = CaCO₃ ka equivalent weight (50) × 1000</li>
                    <li>V = Sample ka volume (mL)</li>
                </ul>
                
                <br/><strong>Example Calculation:</strong>
                <br/>Agar B = 8.2 mL, N = 0.0200, V = 50 mL
                <br/>Total Alkalinity = (8.2 × 0.0200 × 50,000) / 50 = 164 mg/L as CaCO₃
                
                <br/><br/>⚠️ <strong>Precision aur Accuracy:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>Duplicate titrations ka difference ≤ 0.05 mL hona chahiye</li>
                    <li>Blank correction hamesha apply karen</li>
                    <li>Low alkalinity samples (<10 mg/L) mein electrometric endpoint use karen</li>
                </ul>
                </div>`
            },
            
            {
                id: 'aluminum',
                title: 'Aluminum - एल्यूमीनियम (Al)',
                intro: `Eriochrome Cyanine R (ECR) method se aluminum ka spectrophotometric determination.
                
                🔬 Scientific Background:
                Aluminum ek trivalent metal hai (Al³⁺) jo pani mein natural sources (clay minerals, aluminosilicates) aur anthropogenic sources (water treatment using alum - Al₂(SO₄)₃) se aata hai.
                
                ECR Method Principle:
                Al³⁺ + ECR dye → Red-purple colored complex (pH 6.0)
                Absorbance 535 nm par measured ki jati hai
                Beer-Lambert Law follow karta hai: A = εlc
                
                Interfering Species:
                • Fe³⁺, Cr³⁺, Cu²⁺, Mn²⁺ - ascorbic acid se reduce ya mask kiya jata hai
                • Fluoride - complexes Al aur response kam karti hai
                • Polyphosphates - chelate Al
                
                📊 Permissible Limits:
                • WHO Guideline: 0.2 mg/L (drinking water)
                • IS 10500:2012: 0.03 mg/L (desirable), 0.2 mg/L (permissible)
                • USEPA MCL: 0.05-0.2 mg/L
                
                💡 Health Significance:
                • High aluminum exposure Alzheimer's disease se link ki gayi hai (though controversial)
                • Dialysis patients mein encephalopathy ka risk
                • Children mein neurotoxic effects`,
                
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> 535 nm wavelength par, 1 cm path length cuvette ke sath</li>
                        <li><strong>Analytical Balance:</strong> 0.1 mg readability</li>
                        <li><strong>Volumetric Glassware:</strong> Class A, sab kuch aluminum-free distilled water se wash kiya hua</li>
                        <li><strong>Pre-treatment of Glassware:</strong> Sabhi glassware ko pehle 1+1 hot HCl se treat karen, phir aluminum-free distilled water se rinse karen</li>
                        <li><strong>pH Meter</strong></li>
                    </ul>
                `,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Stock Aluminum Solution (200 mg Al/L):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>8.791 g aluminum potassium sulfate [AlK(SO₄)₂·12H₂O] ko distilled water mein dissolve karen</li>
                                <li>1000 mL tak patle karen → 1 mL = 1 mg Al</li>
                                <li>Alternate: 1.000 g pure aluminum metal ko HCl mein dissolve karen</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard Aluminum Solution (0.5 mg Al/L):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>10 mL stock solution ko 2000 mL tak dilute karen → 1 mL = 5.0 µg Al</li>
                                <li>Daily fresh prepare karen (aluminum solutions hydrolysis se degrade hote hain)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>H₂SO₄, 0.02N:</strong> Standard preparation ke anusar
                        </li>
                        <li>
                            <strong>H₂SO₄, 6N:</strong> 1 volume conc. H₂SO₄ ko 5 volumes distilled water mein daalen
                        </li>
                        <li>
                            <strong>Ascorbic Acid Solution (1% w/v):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>1.0 g ascorbic acid ko 100 mL distilled water mein dissolve karen</li>
                                <li>Daily fresh prepare karen (easily oxidizes)</li>
                                <li>Function: Fe³⁺ ko Fe²⁺ mein reduce karta hai (interference remove karta hai)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Acetate Buffer Solution (pH 6.0):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>136 g sodium acetate (NaC₂H₃O₂·3H₂O) ko 700 mL distilled water mein dissolve karen</li>
                                <li>40 mL glacial acetic acid daalen</li>
                                <li>1000 mL tak patle karen</li>
                                <li>pH check karen: 6.0 ± 0.1 hona chahiye</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Eriochrome Cyanine R (ECR) Stock Dye Solution:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>300 mg ECR dye ko distilled water mein dissolve karen</li>
                                <li>1000 mL tak patle karen</li>
                                <li>Amber bottle mein store karen, 1 year tak stable</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Working Dye Solution:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>10.0 mL stock dye solution ko 100 mL tak patle karen</li>
                                <li>Weekly fresh prepare karen</li>
                            </ul>
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `Calibration Standard Preparation (0-7 µg Al range):
                    Standards taiyaar karen: 0, 0.5, 1.0, 2.0, 3.0, 5.0, 7.0 µg Al per 50 mL
                    Standard aluminum solution se appropriate volumes lein aur 50 mL volumetric flasks mein patle karen`,
                    
                    `Har standard aur sample mein following sequence mein reagents daalen (50 mL flask mein):
                    1. Sample/standard (appropriate volume)
                    2. 1 mL 0.02N H₂SO₄ (pH adjustment)
                    3. 1 mL ascorbic acid solution (interference masking)
                    4. 10 mL acetate buffer solution (pH stabilization)
                    5. 5 mL working ECR dye solution`,
                    
                    `Distilled water se 50 mL tak patle karen aur thoroughly mix karen`,
                    
                    `5-15 minute wait karen (color development time):
                    • Color development temperature-dependent hai
                    • 25°C par 10 minutes optimal hai`,
                    
                    `535 nm par absorbance read karen:
                    • Reagent blank (zero standard) ke against measure karen
                    • Cuvette ko sample se rinse karen pehle`,
                    
                    `Calibration Curve Plot Karen:
                    • X-axis: µg Al per 50 mL
                    • Y-axis: Absorbance
                    • Linear regression se R² ≥ 0.999 expected hai`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>From Calibration Curve:</strong><br/>
                Al concentration (µg/50 mL) → Al (mg/L) = (µg from curve) / (sample volume in mL)
                
                <br/><br/><strong>Beer-Lambert Law:</strong>
                <br/>A = ε × l × c
                <br/>Jahan ε = molar absorptivity, l = path length, c = concentration
                
                <br/><br/><strong>Method Detection Limit (MDL):</strong> ~0.01 mg/L
                <br/><strong>Practical Quantitation Limit (PQL):</strong> ~0.05 mg/L
                
                <br/><br/>⚠️ <strong>QC Requirements:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>Har batch mein duplicate analysis (RPD ≤ 10%)</li>
                    <li>Matrix spike recovery: 80-120%</li>
                    <li>Calibration check standard har 10 samples ke baad</li>
                </ul>
                </div>`
            },
            
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD) - Jaivik Oxygen Maang',
                intro: `BOD test 27°C par 3-din ke bottle incubation method par based hai (Indian Standard - BIS 3025 Part 44).
                
                🔬 Scientific Background:
                BOD (Biochemical Oxygen Demand) wo oxygen ki matra hai jo microorganisms ko organic matter ko decompose karne ke liye chahiye hoti hai, specified temperature aur time period mein.
                
                BOD Reaction:
                Organic Matter + O₂ → (microbial action) → CO₂ + H₂O + New Cell Biomass
                
                Two-Stage BOD:
                1. Carbonaceous BOD (CBOD): Organic carbon ka oxidation (~10-20 days)
                2. Nitrogenous BOD (NBOD): NH₃ ka oxidation (~starts after day 6-10)
                   NH₄⁺ → NO₂⁻ → NO₃⁻ (Nitrification)
                
                BOD₃ vs BOD₅:
                • India (IS): BOD₃ at 27°C
                • International (APHA): BOD₅ at 20°C
                • Conversion: BOD₅(20°C) ≈ 1.5 × BOD₃(27°C) (approximate)
                
                Rate Constant Relationship:
                BODₜ = BOD_ultimate × (1 - e^(-k×t))
                k at 27°C ≈ 0.23/day (approximate)
                
                📊 Permissible Limits:
                • WHO/CPCB: Drinking water - not applicable (BOD is for wastewater)
                • Inland surface water discharge (IS 2490): ≤ 30 mg/L
                • Municipal sewage discharge to rivers (CPCB): ≤ 30 mg/L
                • Class A rivers (drinking water source): ≤ 2 mg/L
                • Bathing ghats: ≤ 3 mg/L
                
                💡 Practical Significance:
                • BOD indicates organic pollution load
                • High BOD → Low DO → Fish kill aur aquatic life damage
                • Sewage treatment plant efficiency measure karne ka key parameter`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>BOD Bottles (300 mL):</strong> Narrow mouth, flared lip, tapered aur pointed ground glass stoppers ke sath. Numbered ya labeled karna zaroori hai.</li>
                    <li><strong>Incubator:</strong> 27 ± 1°C par thermostatically controlled air incubator ya water bath. Light entry band honi chahiye (photosynthesis se DO production avoid karne ke liye).</li>
                    <li><strong>DO Measurement Setup:</strong> Winkler titration apparatus ya DO meter (electrode method)</li>
                    <li><strong>Graduated Cylinders (1-2 L):</strong> Dilution preparation ke liye</li>
                    <li><strong>Siphon Setup:</strong> Plastic tubing + screw pin, turbulence-free filling ke liye</li>
                    <li><strong>Aeration Device:</strong> Oil-free compressed air supply, cotton-plugged aeration stone</li>
                </ul>`,
                
                reagents: `
                <h4>Abhikarnak (Reagents)</h4>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>
                        <strong>Phosphate Buffer Solution (pH 7.2):</strong>
                        <ul class="list-disc list-outside pl-5 mt-1">
                            <li>8.5 g KH₂PO₄ (monopotassium phosphate)</li>
                            <li>21.75 g K₂HPO₄ (dipotassium phosphate)</li>
                            <li>33.4 g Na₂HPO₄·7H₂O (disodium phosphate)</li>
                            <li>1.7 g NH₄Cl (ammonium chloride - nitrogen source)</li>
                            <li>Sab ko 900 mL distilled water mein dissolve karen, pH check karen (7.2), 1000 mL tak patle karen</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Magnesium Sulphate Solution:</strong>
                        22.5 g MgSO₄·7H₂O ko 1 L distilled water mein dissolve karen (microorganism growth ke liye)
                    </li>
                    <li>
                        <strong>Calcium Chloride Solution:</strong>
                        27.5 g CaCl₂ (anhydrous) ko 1 L distilled water mein dissolve karen (Ca²⁺ microorganism ke liye essential)
                    </li>
                    <li>
                        <strong>Ferric Chloride Solution:</strong>
                        0.25 g FeCl₃·6H₂O ko 1 L distilled water mein dissolve karen (trace element)
                    </li>
                    <li>
                        <strong>Acid aur Alkali Solution:</strong>
                        1N H₂SO₄ aur 1N NaOH - extreme pH samples neutralize karne ke liye (neutral pH: 6.5-7.5)
                    </li>
                    <li>
                        <strong>Glucose-Glutamic Acid (GGA) Check Solution:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1">
                            <li>150 mg anhydrous reagent-grade glucose (103°C par 1 hr dried)</li>
                            <li>150 mg anhydrous reagent-grade glutamic acid</li>
                            <li>1000 mL distilled water mein dissolve karen</li>
                            <li>Roz fresh prepare karen (microbial degradation hoti hai)</li>
                            <li><strong>Expected BOD₃: 198 ± 37 mg/L at 27°C (BIS 3025 Part 44:1993)</strong></li>
                        </ul>
                    </li>
                    <li>
                        <strong>Dilution Water (Sample Dilution ke liye):</strong>
                        <ul class="list-disc list-outside pl-5 mt-1">
                            <li>1 L distilled water mein har ek solution daalen: 1 mL phosphate buffer, 1 mL MgSO₄, 1 mL CaCl₂, 1 mL FeCl₃</li>
                            <li>27°C par oxygen se saturate karen (aeration se)</li>
                            <li>BOD of dilution water ≤ 0.2 mg/L hona chahiye (preferably <0.1 mg/L)</li>
                        </ul>
                    </li>
                </ul>`,
                
                procedure: [
                    `Dilution Water Preparation aur Aeration:
                    • Required volume calculate karen: (Number of dilutions × 2 bottles + blanks) × 300 mL
                    • Dilution water ko 27°C par 8+ hours aerate karen oil-free compressed air se
                    • Cotton-plugged bottles mein 24 hours store karna bhi effective hai
                    • DO check karen: ≥ 7 mg/L hona chahiye`,
                    
                    `Seeding (Beejarropan) ki Zaroorat:
                    Kuch samples mein sufficient microbial population nahi hoti - unhe seed karna padta hai:
                    
                    Seeds ki zaroorat hoti hai:
                    • Industrial effluents (particularly chemical industry)
                    • High temperature wastes (>40°C)
                    • Extreme pH wastes (pH <6 ya >9)
                    • Highly chlorinated samples
                    
                    Seed Sources (preference order):
                    1. Effluent treatment plant (ETP) ka secondary treated effluent
                    2. Domestic sewage (1+ hour, 36 hours se kam settled, supernatant use karen)
                    3. Receiving water body se surface water
                    
                    Seed Amount:
                    • Domestic sewage seed: 4-6 mL/L dilution water
                    • Seeded dilution water ka DO uptake: 0.6-1.0 mg/L in 3 days
                    
    Seed Control banana zaroor hai:
    Seeded dilution water ki bottles (without sample) incubate karen`,
                    
                    `Sample Dilution Selection:
                    Expected BOD ke basis par dilution choose karen:
                    
                    <table class="w-full text-left border-collapse mt-2 text-xs">
                        <thead>
                            <tr>
                                <th class="border p-2" colspan="2">% Mixture Method (1000 mL cylinder mein)</th>
                                <th class="border p-2" colspan="2">Direct Pipetting into 300 mL bottles</th>
                            </tr>
                            <tr>
                                <th class="border p-1">BOD Range (mg/L)</th>
                                <th class="border p-1">% Mixture</th>
                                <th class="border p-1">BOD Range (mg/L)</th>
                                <th class="border p-1">Sample (mL)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border p-1">1,000-3,500</td><td class="border p-1">0.2%</td><td class="border p-1">1,200-4,200</td><td class="border p-1">0.5</td></tr>
                            <tr><td class="border p-1">400-1,400</td><td class="border p-1">0.5%</td><td class="border p-1">600-2,100</td><td class="border p-1">1.0</td></tr>
                            <tr><td class="border p-1">200-700</td><td class="border p-1">1.0%</td><td class="border p-1">300-1,050</td><td class="border p-1">2.0</td></tr>
                            <tr><td class="border p-1">100-350</td><td class="border p-1">2.0%</td><td class="border p-1">120-420</td><td class="border p-1">5.0</td></tr>
                            <tr><td class="border p-1">40-140</td><td class="border p-1">5.0%</td><td class="border p-1">60-210</td><td class="border p-1">10.0</td></tr>
                            <tr><td class="border p-1">20-70</td><td class="border p-1">10.0%</td><td class="border p-1">30-105</td><td class="border p-1">20.0</td></tr>
                            <tr><td class="border p-1">10-35</td><td class="border p-1">20.0%</td><td class="border p-1">12-42</td><td class="border p-1">50.0</td></tr>
                            <tr><td class="border p-1">4-14</td><td class="border p-1">50.0%</td><td class="border p-1">6-21</td><td class="border p-1">100.0</td></tr>
                            <tr><td class="border p-1">0-7</td><td class="border p-1">100%</td><td class="border p-1">0-7</td><td class="border p-1">300.0</td></tr>
                        </tbody>
                    </table>`,
                    
                    `Dilution Preparation aur BOD Bottle Filling:
                    
                    Graduated Cylinder Method:
                    1. 1-2 L graduated cylinder mein siphon se dilution water daalen (turbulence avoid karen)
                    2. Siphon tube ki tip pani ki surface ke just neeche rakhein
                    3. Required volume sample pipette se daalen
                    4. Distilled water se appropriate level tak patle karen
                    5. Plunger-type mixing rod se gently mix karen (air bubbles avoid karen)
                    
                    BOD Bottle Filling:
                    • Siphon tube se 3 BOD bottles mein fill karen (koi air bubble nahi)
                    • Stopper lgate samay koi air nahi ana chahiye
                    • Ek bottle mein initial DO turant measure karen
                    • Baki do bottles ko 27°C par incubate karen
                    
                    Direct Pipetting Method:
                    • Required sample volume seedha bottle mein pipette karen
                    • Seeded dilution water se bhar den
                    • Same as above`,
                    
                    `Incubation aur Final DO Measurement:
                    • Incubator mein 27 ± 1°C par exactly 3 days (72 hours) rakhen
                    • Light exposure band rakhein
                    • 3 days baad duplicate bottles mein DO measure karen
                    • Dilution water blank ka bhi DO measure karen`,
                    
                    `Acceptance Criteria:
                    • Residual DO after 3 days: ≥ 1 mg/L
                    • DO depletion: ≥ 2 mg/L
                    • Agar yeh criteria meet nahi hote, toh different dilution se dobara test karen`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Case 1 - Jab Dilution Water Seeded Nahi Ho:</strong>
                <br/>BOD₃,₂₇ (mg/L) = (D₀ - D₃) / P
                
                <br/><br/><strong>Case 2 - Jab Dilution Water Seeded Ho:</strong>
                <br/>BOD₃,₂₇ (mg/L) = [(D₀ - D₃) - f × (B₀ - B₃)] / P
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>D₀ = Initial DO of diluted sample (mg/L)</li>
                    <li>D₃ = Final DO of diluted sample after 3 days (mg/L)</li>
                    <li>P = Decimal fraction of sample used (sample volume / total volume)</li>
                    <li>B₀ = Initial DO of seed control (mg/L)</li>
                    <li>B₃ = Final DO of seed control after 3 days (mg/L)</li>
                    <li>f = Ratio of seed in diluted sample to seed in control</li>
                </ul>
                
                <br/><strong>Example Calculation (Seeded):</strong>
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>Sample volume = 10 mL in 300 mL → P = 10/300 = 0.0333</li>
                    <li>D₀ = 7.8 mg/L, D₃ = 3.2 mg/L</li>
                    <li>B₀ = 7.6 mg/L, B₃ = 6.8 mg/L (seed control)</li>
                    <li>Seed in diluted sample = 5 mL/300 mL = 0.0167</li>
                    <li>Seed in control = 5 mL/300 mL = 0.0167 → f = 1.0</li>
                    <li>BOD₃ = [(7.8-3.2) - 1.0×(7.6-6.8)] / 0.0333</li>
                    <li>BOD₃ = [4.6 - 0.8] / 0.0333 = 3.8/0.0333 = <strong>114 mg/L</strong></li>
                </ul>
                
                <br/><strong>Quality Control Notes:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>GGA check solution BOD₃: 198 ± 37 mg/L hona chahiye (BIS 3025 Part 44:1993)</li>
                    <li>Dilution water BOD: ≤ 0.2 mg/L (preferably < 0.1 mg/L)</li>
                    <li>Seed control DO uptake: 0.6-1.0 mg/L</li>
                    <li>BOD values < 0.5 mg/L ko "Below Detection Limit" report karen</li>
                    <li>Duplicate results ka average report karen agar dono valid hain</li>
                </ul>
                </div>`
            },
            
            {
                id: 'boron',
                title: 'Boron - बोरॉन (B)',
                intro: `Curcumin method se boron ka spectrophotometric determination (540 nm).
                
                🔬 Scientific Background:
                Boron pani mein naturally boric acid [B(OH)₃] aur borate [B(OH)₄⁻] ke form mein paya jata hai. Ye agricultural runoff, industrial effluents (glass, ceramics, detergents manufacturing) aur geothermal activity se aata hai.
                
                Curcumin Method Principle:
                Acidic medium mein boron curcumin ke sath react karke orange-red colored rosocyanine complex banata hai
                B(OH)₃ + Curcumin → (H₂SO₄/oxalic acid) → Rosocyanine (λmax = 540 nm)
                
                Carminic Acid Method bhi use hoti hai (585 nm)
                
                Interference:
                • Nitrate (>20 mg/L) - interferes
                • Strong alkalinity - acid neutralize karti hai
                
                📊 Permissible Limits:
                • WHO Guideline: 2.4 mg/L (2022 update)
                • IS 10500:2012: 5 mg/L (permissible limit)
                • Irrigation water: 0.5-6.0 mg/L (crop dependent)
                
                💡 Health Significance:
                • Boron essential micronutrient hai (plants ke liye)
                • High doses: Reproductive toxicity, developmental effects
                • Tolerable upper intake level (adults): 20 mg/day`,
                
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> 540 nm wavelength par</li>
                        <li><strong>Evaporating Dishes:</strong> High-silica glass ya porcelain (regular glass avoid karen - boron leach kar sakta hai)</li>
                        <li><strong>Water Bath:</strong> 55 ± 2°C par precisely maintained</li>
                        <li><strong>Desiccator:</strong> Silica gel ke sath</li>
                        <li><strong>Boron-free Glassware:</strong> Sab glassware boron-free hona chahiye (Pyrex glass avoid karen)</li>
                    </ul>
                `,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Stock Boron Solution (100 mg B/L):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>571.6 mg anhydrous boric acid (H₃BO₃) ko distilled water mein dissolve karen</li>
                                <li>1000 mL tak patle karen → 1 mL = 100 µg B</li>
                                <li>Boron-free distilled water use karen</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Intermediate Standard (10 mg B/L):</strong>
                            100 mL stock ko 1000 mL tak dilute karen
                        </li>
                        <li>
                            <strong>Working Standard (1 mg B/L):</strong>
                            100 mL intermediate ko 1000 mL tak dilute karen
                        </li>
                        <li>
                            <strong>Curcumin Reagent:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>40 mg curcumin (diferuloylmethane - yellow pigment from turmeric) ko 80 mL 95% ethyl alcohol mein dissolve karen</li>
                                <li>5.0 g oxalic acid daalen aur completely dissolve karen</li>
                                <li>4.2 mL concentrated HCl daalen</li>
                                <li>95% ethyl alcohol se 100 mL tak patle karen</li>
                                <li>Dark bottle mein 4°C par store karen (4 weeks stable)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Ethyl Alcohol, 95%</strong> (residue dissolution ke liye)
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `Standards Preparation (0-10 µg B range):
                    0, 0.5, 1.0, 2.0, 4.0, 6.0, 8.0, 10.0 µg B
                    Working standard se appropriate volumes lein`,
                    
                    `Evaporating dish mein sample/standard (2 mL) lein aur 4.0 mL curcumin reagent daalen`,
                    
                    `Water bath par 55 ± 2°C par exactly 80 minutes evaporate karen:
                    • Temperature control critical hai - ± 2°C se zyada variation rosocyanine formation affect karta hai
                    • Completely dry hone tak wait karen`,
                    
                    `Room temperature par 15-20 minutes thanda karen (desiccator mein nahi, kyunki moisture absorb hogi)`,
                    
                    `Dry residue ko 10.0 mL 95% ethyl alcohol mein carefully dissolve karen:
                    • Gentle swirling se dissolve karen
                    • Complete dissolution ensure karen`,
                    
                    `540 nm par within 1 hour absorbance measure karen:
                    • Blank: Reagent blank (sample ke bajaye distilled water)
                    • Agar color develop nahi hua, toh reagent fresh prepare karen`,
                    
                    `Calibration curve plot karen aur sample concentration determine karen`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>From Calibration Curve:</strong>
                <br/>B (mg/L) = (µg B from curve) / (sample volume in mL)
                
                <br/><br/><strong>Method Performance:</strong>
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>Detection Limit: 0.1 mg/L</li>
                    <li>Optimal Range: 0.2-1.0 mg/L</li>
                    <li>Recovery: 95-105%</li>
                </ul>
                
                <br/>⚠️ <strong>Important Notes:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>High boron samples (>1 mg/L) ko dilute karna padega</li>
                    <li>Nitrate interference: Pre-treat sample with Ba(OH)₂ if nitrate >20 mg/L</li>
                    <li>All operations boron-free environment mein karna zaroori hai</li>
                </ul>
                </div>`
            },
            
            {
                id: 'calcium',
                title: 'Calcium - कैल्शियम (Ca)',
                intro: `EDTA Complexometric Titration method se calcium ka determination.
                
                🔬 Scientific Background:
                Calcium pani mein naturally limestone (CaCO₃), dolomite [CaMg(CO₃)₂], aur gypsum (CaSO₄) ke dissolution se aata hai. Yeh hardness ka primary cause hai.
                
                EDTA Titration Principle:
                Ethylenediaminetetraacetic acid (EDTA) - ek chelating agent hai jo metal ions ke sath stable complexes banata hai.
                
                pH 12-13 par, magnesium hydroxide precipitate ho jata hai [Mg(OH)₂↓], aur sirf calcium EDTA se react karta hai:
                Ca²⁺ + EDTA⁴⁻ → [Ca-EDTA]²⁻ (stable complex)
                
                Murexide Indicator:
                • Free indicator: Pink/orange
                • Ca-indicator complex: Red/wine
                • Endpoint: Red → Purple (Ca free hone par)
                
                📊 Permissible Limits:
                • WHO: No health-based guideline
                • IS 10500:2012: 75 mg/L (desirable), 200 mg/L (permissible)
                • High calcium: Scale formation in pipes, boilers
                
                💡 Health Significance:
                • Essential mineral for bones, teeth, muscle function
                • Calcium deficiency: Osteoporosis
                • High calcium: Kidney stones risk (especially with high oxalate)
                • Hard water calcium may reduce cardiovascular disease risk`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Burette (25 mL) - Class A</li>
                    <li>Conical Flask (250 mL)</li>
                    <li>Volumetric Pipettes</li>
                    <li>pH Meter (pH verification ke liye)</li>
                </ul>`,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Sodium Hydroxide Solution, 1N:</strong>
                            40 g NaOH ko CO₂-free distilled water mein dissolve karen, 1000 mL tak patle karen
                        </li>
                        <li>
                            <strong>Murexide (Ammonium Purpurate) Indicator:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Solid mixture: 0.2 g murexide + 100 g NaCl, grind to fine powder</li>
                                <li>Ya liquid: 0.5 g murexide ko 100 mL water mein dissolve karen (fresh daily)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Inhibitor Solutions (interference removal ke liye):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>1% Sodium cyanide (NaCN) - Zn, Cu, Ni, Co mask karta hai (Caution: Highly toxic!)</li>
                                <li>1% Hydroxylamine HCl - Fe, Mn reduce karta hai</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard EDTA Titrant, 0.01M:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>3.723 g EDTA disodium salt (Na₂EDTA·2H₂O) ko distilled water mein dissolve karen</li>
                                <li>1000 mL tak patle karen</li>
                                <li>Standard calcium solution se standardize karen</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard Calcium Solution (Primary Standard):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>1.000 g anhydrous CaCO₃ (ACS reagent grade, 180°C par dried) ko 50 mL distilled water mein suspend karen</li>
                                <li>Dilute HCl (1+1) dropwise daalen jab tak completely dissolve na ho jaye</li>
                                <li>1000 mL tak patle karen → 1 mL = 1 mg CaCO₃ = 0.4 mg Ca</li>
                            </ul>
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `50 mL sample ya appropriate volume conical flask mein lein`,
                    
                    `1-2 mL NaOH (1N) daalen pH 12-13 par adjust karne ke liye:
                    • Is pH par Mg(OH)₂ precipitate ho jata hai
                    • pH meter se verify karen`,
                    
                    `Agar Fe, Mn, Cu present ho, toh appropriate inhibitors daalen`,
                    
                    `0.1-0.2 g murexide indicator daalen:
                    • Solution pink/red-orange ho jani chahiye
                    • Agar rang nahi aaya, toh fresh indicator use karen`,
                    
                    `EDTA se titrate karen jab tak rang:
                    Red/wine color → Pure purple
                    • Endpoint permanent hona chahiye (30 seconds)
                    • 5 minutes ke andar titration complete karen (Mg(OH)₂ slowly dissolve hota hai)`,
                    
                    `Blank titration perform karen (distilled water ke sath)`,
                    
                    `EDTA Standardization:
                    • 20 mL standard Ca solution (= 20 mg CaCO₃) lein
                    • Same procedure follow karen
                    • EDTA molarity = mg CaCO₃ / (mL EDTA × 100.09)`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong>
                <br/>Calcium (mg/L as Ca) = (A × B × 400.8) / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>A = Sample ke liye EDTA titrant (mL) - blank corrected</li>
                    <li>B = 1 mL EDTA ke equivalent mg CaCO₃ (standardization se)</li>
                    <li>400.8 = Ca ka atomic weight (40.08) × 10 (conversion factor)</li>
                    <li>V = Sample volume (mL)</li>
                </ul>
                
                <br/><strong>Alternative - Direct from EDTA Molarity:</strong>
                <br/>Ca (mg/L) = (mL EDTA × Molarity × 40,080) / Sample volume (mL)
                
                <br/><br/><strong>Example:</strong>
                <br/>EDTA = 7.2 mL, Molarity = 0.01M, Sample = 50 mL
                <br/>Ca = (7.2 × 0.01 × 40,080) / 50 = 57.7 mg/L
                
                <br/><br/><strong>Ca Hardness (as CaCO₃):</strong>
                <br/>Ca hardness = Ca (mg/L) × 2.497
                </div>`
            },
            
            {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD) - Rasaynik Oxygen Maang',
                intro: `Potassium dichromate open reflux method se COD determination.
                
                🔬 Scientific Background:
                COD (Chemical Oxygen Demand) wo oxygen ki matra hai jo pani mein sabhi oxidizable material (karbonic aur akabarik dono) ko chemically oxidize karne ke liye chahiye hoti hai.
                
                Reaction Principle:
                Organic Matter + K₂Cr₂O₇ + H₂SO₄ → (Ag₂SO₄ catalyst) → CO₂ + H₂O + Cr³⁺
                
                Dichromate reduction:
                Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (orange → green)
                
                Back-titration with FAS:
                6Fe²⁺ + Cr₂O₇²⁻ + 14H⁺ → 6Fe³⁺ + 2Cr³⁺ + 7H₂O
                
                COD vs BOD:
                • COD typically 1.2-2.5 × BOD₅ for domestic wastewater
                • BOD/COD ratio: Biodegradability indicator
                  - >0.5: Easily biodegradable
                  - 0.3-0.5: Partially biodegradable
                  - <0.3: Non-biodegradable (industrial effluent)
                
                Chloride Interference:
                Cl⁻ + Cr₂O₇²⁻ → Cl₂ (false high COD)
                Masking: HgSO₄ + Cl⁻ → HgCl₂ (poorly ionized - eliminates interference)
                Ratio: 10:1 (HgSO₄:Cl⁻, w/w)
                
                📊 Permissible Limits:
                • Inland surface water discharge (CPCB/IS 2490): ≤ 250 mg/L
                • CETP effluent: ≤ 250 mg/L
                • Domestic sewage: 250-400 mg/L typical
                • Industrial effluent: Can be 1000-5000 mg/L
                
                💡 Applications:
                • ETP efficiency monitoring
                • Environmental compliance
                • BOD estimation (when BOD test is too slow)
                • Organic load characterization`,
                
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Reflux Apparatus:</strong> 500 mL round-bottom flask ya 250 mL Erlenmeyer flask, 24/29 ground glass neck ke sath</li>
                        <li><strong>Condenser:</strong> Liebig condenser (minimum 30 cm)</li>
                        <li><strong>Hot Plate:</strong> Even heating ke liye, ya heating mantle</li>
                        <li><strong>Analytical Balance:</strong> 0.1 mg readability</li>
                        <li><strong>Burette (25 mL):</strong> Class A</li>
                        <li><strong>Safety Equipment:</strong> Fume hood (H₂SO₄ aur dichromate vapors), splash-proof goggles, acid-resistant gloves</li>
                    </ul>
                `,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Standard Potassium Dichromate (K₂Cr₂O₇), 0.0417M (0.25N):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>12.259 g K₂Cr₂O₇ (primary standard grade) ko 103°C par 2 hours dry karen</li>
                                <li>Desiccator mein thanda karen, distilled water mein dissolve karen, 1000 mL tak patle karen</li>
                                <li>Primary standard - standardization ki zaroorat nahi</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sulphuric Acid Reagent (Ag₂SO₄ catalyst ke sath):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>5.5 g silver sulphate (Ag₂SO₄) ko 1 kg concentrated H₂SO₄ mein dissolve karen</li>
                                <li>1-2 din ke liye store karen dissolve hone ke liye (continuously stir karte rahein)</li>
                                <li>Ag₂SO₄ function: Aromatic compounds ko oxidize karne mein help karta hai</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Ferroin Indicator Solution:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>1.485 g 1,10-phenanthroline monohydrate ko 100 mL distilled water mein dissolve karen</li>
                                <li>695 mg FeSO₄·7H₂O daalen</li>
                                <li>Well mix karen - orange solution banta hai</li>
                                <li>Dark bottle mein store karen (1 month stable)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard FAS (Ferrous Ammonium Sulphate) Titrant, ~0.25M:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>98 g Fe(NH₄)₂(SO₄)₂·6H₂O ko distilled water mein dissolve karen</li>
                                <li>20 mL concentrated H₂SO₄ daalen (carefully, cooling ke sath)</li>
                                <li>Cool karke 1000 mL tak dilute karen</li>
                                <li>Daily standardize karen: 10 mL K₂Cr₂O₇ (0.0417M) + 90 mL water + 30 mL H₂SO₄, cool, FAS se ferroin endpoint tak titrate karen</li>
                                <li>FAS Molarity = 0.250 × (10 mL K₂Cr₂O₇ / mL FAS used)</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Mercuric Sulphate (HgSO₄), powder:</strong>
                            Chloride masking ke liye (10:1 ratio over chloride)
                        </li>
                        <li>
                            <strong>KHP Check Standard (500 mg COD/L):</strong>
                            425 mg potassium hydrogen phthalate ko 1000 mL distilled water mein dissolve karen
                            Theoretical COD = 1.176 g O₂/g KHP → 500 mg/L
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `Sample Pre-treatment:
                    • pH 6-7 nahi hai toh adjust karen
                    • Turbid samples: Blend ya filter karna optional
                    • Preserve: 4°C, H₂SO₄ se pH <2, analyze within 28 days`,
                    
                    `Flask Setup (500 mL reflux flask ke liye):
                    1. 50 mL sample ya diluted sample flask mein daalen
                    2. 1.0 g HgSO₄ daalen (agar Cl⁻ > 2000 mg/L ho toh zyada daalen)
                    3. Boiling chips/glass beads daalen (bumping prevent karne ke liye)
                    4. Carefully 5 mL H₂SO₄ reagent daalen, gently swirl aur cool karen
                    5. 25 mL 0.0417M K₂Cr₂O₇ daalen, mix karen`,
                    
                    `Condenser Connect karna:
                    • Cooling water flow shuru karen
                    • Condenser ke open end se remaining 70 mL H₂SO₄ reagent daalen
                    • Ek taraf se swirl karte huye daalen (mixing aur cooling ke liye)`,
                    
                    `2 Hours Reflux:
                    • Hot plate par heat karen - gentle boiling maintain karen
                    • Over-boiling avoid karen (bumping)
                    • 2 ghante exactly reflux karen (BIS standard)`,
                    
                    `Cooling aur Dilution:
                    • Room temperature tak thanda karen
                    • Condenser ko 25-50 mL distilled water se wash karen (flask mein)
                    • Total volume approximately 140-150 mL hona chahiye
                    • Again cool to room temperature`,
                    
                    `Titration:
                    • 2-3 drops ferroin indicator daalen
                    • FAS se excess dichromate titrate karen
                    • Endpoint: Blue-green → Reddish-brown (sharp color change)
                    • Near endpoint half-drop additions karen
                    • Parallel mein blank (distilled water + all reagents) bhi titrate karen`,
                    
                    `KHP Verification:
                    • 500 mg/L KHP standard ka COD test karna zaroori hai
                    • Measured COD should be within ±5% of 500 mg/L`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Main Formula:</strong>
                <br/>COD (mg/L) = [(A - B) × M × 8000] / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>A = Blank ke liye FAS (mL)</li>
                    <li>B = Sample ke liye FAS (mL)</li>
                    <li>M = FAS ki exact molarity (daily standardized)</li>
                    <li>8000 = Oxygen ka milliequivalent weight (8) × 1000</li>
                    <li>V = Sample volume (mL)</li>
                </ul>
                
                <br/><strong>Example Calculation:</strong>
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>A (blank) = 23.5 mL FAS</li>
                    <li>B (sample) = 15.8 mL FAS</li>
                    <li>M = 0.248 mol/L (standardized)</li>
                    <li>V = 50 mL</li>
                    <li>COD = [(23.5-15.8) × 0.248 × 8000] / 50</li>
                    <li>COD = [7.7 × 0.248 × 8000] / 50 = <strong>307 mg/L</strong></li>
                </ul>
                
                <br/><strong>Reagent Scaling for Different Sample Volumes:</strong>
                <table class="w-full text-left border-collapse mt-2 text-xs">
                    <thead>
                        <tr>
                            <th class="border p-1">Sample (mL)</th>
                            <th class="border p-1">K₂Cr₂O₇ (mL)</th>
                            <th class="border p-1">H₂SO₄ Reagent (mL)</th>
                            <th class="border p-1">HgSO₄ (g)</th>
                            <th class="border p-1">FAS Conc. (M)</th>
                            <th class="border p-1">Final Vol. (mL)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-1">10.0</td><td class="border p-1">5.0</td><td class="border p-1">15</td><td class="border p-1">0.2</td><td class="border p-1">0.05</td><td class="border p-1">70</td></tr>
                        <tr><td class="border p-1">20.0</td><td class="border p-1">10.0</td><td class="border p-1">30</td><td class="border p-1">0.4</td><td class="border p-1">0.10</td><td class="border p-1">140</td></tr>
                        <tr><td class="border p-1">30.0</td><td class="border p-1">15.0</td><td class="border p-1">45</td><td class="border p-1">0.6</td><td class="border p-1">0.15</td><td class="border p-1">210</td></tr>
                        <tr><td class="border p-1">40.0</td><td class="border p-1">20.0</td><td class="border p-1">60</td><td class="border p-1">0.8</td><td class="border p-1">0.20</td><td class="border p-1">280</td></tr>
                        <tr><td class="border p-1">50.0</td><td class="border p-1">25.0</td><td class="border p-1">75</td><td class="border p-1">1.0</td><td class="border p-1">0.25</td><td class="border p-1">350</td></tr>
                    </tbody>
                </table>
                </div>`
            },
            
            {
                id: 'chloride',
                title: 'Chloride - क्लोराइड (Cl⁻)',
                intro: `Mohr Method (Silver Nitrate Argentometric Titration) se chloride determination.
                
                🔬 Scientific Background:
                Chloride (Cl⁻) pani mein naturally sodium chloride (NaCl), potassium chloride (KCl), calcium chloride (CaCl₂) ke form mein paya jata hai. Industrial effluents, seawater intrusion, aur road salt se bhi aata hai.
                
                Mohr Method Principle:
                AgNO₃ + Cl⁻ → AgCl↓ (white precipitate)
                
                Endpoint Indicator:
                AgNO₃ + CrO₄²⁻ → Ag₂CrO₄↓ (brick-red precipitate)
                Jab sab Cl⁻ precipitate ho jata hai, tab excess Ag⁺ chromate ke sath react karta hai
                
                pH Range: 6-10 (optimal) - Acidic mein Ag₂CrO₄ dissolves, alkaline mein Ag₂O precipitates
                
                Volhard Method (Back Titration) - High Cl⁻ samples ke liye
                
                📊 Permissible Limits:
                • WHO: 250 mg/L (taste threshold)
                • IS 10500:2012: 250 mg/L (desirable), 1000 mg/L (permissible)
                • CPCB (inland surface water discharge): 1000 mg/L
                
                💡 Significance:
                • >250 mg/L: Salty taste
                • >1000 mg/L: Corrosive to metals aur concrete
                • High Cl⁻ with high Na⁺: Seawater intrusion indicator
                • Chloride doesn't react in body - kidney function indicator`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Burette (25 mL) - Class A, preferably amber colored (AgNO₃ light sensitive hai)</li>
                    <li>Conical Flask (250 mL) - white ya light colored (endpoint visibility ke liye)</li>
                    <li>Magnetic Stirrer</li>
                    <li>pH Meter (pH adjustment ke liye)</li>
                </ul>`,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Potassium Chromate Indicator, K₂CrO₄ (5% w/v):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>50 g K₂CrO₄ ko distilled water mein dissolve karen</li>
                                <li>AgNO₃ daalen jab tak red precipitate permanent na ho jaye</li>
                                <li>Filter karen aur 1000 mL tak dilute karen</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard Silver Nitrate (AgNO₃), 0.0141N:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>2.395 g AgNO₃ ko distilled water mein dissolve karen aur 1000 mL tak patle karen</li>
                                <li>Amber bottle mein store karen (light-sensitive)</li>
                                <li>Standardize karo standard NaCl ke sath</li>
                                <li>1 mL = 0.5 mg Cl⁻</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard Sodium Chloride (NaCl), 0.0141N (Primary Standard):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>NaCl ko 600°C par 1 hour dry karen (hygroscopic hai)</li>
                                <li>824.0 mg NaCl ko distilled water mein dissolve karen, 1000 mL tak patle karen</li>
                                <li>1 mL = 0.5 mg Cl⁻</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Dilute HNO₃ aur NaOH:</strong> pH adjustment ke liye
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `Sample Preparation:
                    • 100 mL sample ya 100 mL tak diluted sample lein
                    • pH 6-10 ke beech nahi ho toh adjust karen (HNO₃ ya NaOH se)
                    • Colored/turbid samples: Pre-treat karna padega (alum flocculation ya activate carbon)`,
                    
                    `1.0 mL K₂CrO₄ indicator daalen:
                    • Solution yellow hona chahiye
                    • Agar already orange/red hai, toh pH adjust karen`,
                    
                    `AgNO₃ (0.0141N) se titrate karen:
                    • Endpoint: Transient brick-red/salmon pink precipitate permanent ho jaye
                    • Last few drops very carefully daalen
                    • Vigorous swirling important hai endpoint accuracy ke liye`,
                    
                    `Blank Titration:
                    • Distilled water ke sath same procedure
                    • Blank volume (usually 0.1-0.3 mL) subtract karen`,
                    
                    `AgNO₃ Standardization:
                    • 20 mL standard NaCl (0.0141N) ke sath same procedure
                    • AgNO₃ normality calculate karen`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong>
                <br/>Chloride (mg/L as Cl⁻) = [(A - B) × N × 35,450] / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>A = Sample ke liye AgNO₃ titrant (mL)</li>
                    <li>B = Blank ke liye AgNO₃ (mL)</li>
                    <li>N = AgNO₃ ki normality</li>
                    <li>35,450 = Cl ka atomic weight (35.45) × 1000</li>
                    <li>V = Sample volume (mL)</li>
                </ul>
                
                <br/><strong>Example:</strong>
                <br/>A = 14.2 mL, B = 0.2 mL, N = 0.0141, V = 100 mL
                <br/>Cl⁻ = [(14.2-0.2) × 0.0141 × 35,450] / 100 = 70.0 mg/L
                
                <br/><br/>⚠️ <strong>Interferences:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>Bromide, iodide, cyanide: Cl⁻ ki tarah titrate hote hain (false high)</li>
                    <li>Sulfide, sulfite: AgNO₃ ke sath precipitate bante hain (false high)</li>
                    <li>Orthophosphate >25 mg/L: Ag₃PO₄ precipitate (interference)</li>
                    <li>Fe >10 mg/L: Endpoint visibility kharab karti hai</li>
                </ul>
                </div>`
            },
            
            {
                id: 'hardness',
                title: 'Total Hardness - कुल कठोरता',
                intro: `EDTA Complexometric Titration (Eriochrome Black T indicator) se total hardness determination.
                
                🔬 Scientific Background:
                Pani ki kathorata (Hardness) primarily calcium (Ca²⁺) aur magnesium (Mg²⁺) ions se hoti hai, aur partly Fe²⁺, Mn²⁺, Sr²⁺ se bhi. CaCO₃ equivalent mein express ki jati hai.
                
                Types of Hardness:
                1. Temporary (Carbonate) Hardness: Boiling se remove ho jati hai
                   Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂
                   Mg(HCO₃)₂ → Mg(OH)₂↓ + 2CO₂
                
                2. Permanent (Non-carbonate) Hardness: CaSO₄, CaCl₂, MgSO₄ se - boiling se nahi jati
                
                EDTA Titration Principle:
                pH 10 (NH₄Cl/NH₄OH buffer) par:
                Ca²⁺ + EDTA → [Ca-EDTA]²⁻
                Mg²⁺ + EDTA → [Mg-EDTA]²⁻
                
                Eriochrome Black T (EBT) Indicator:
                • Metal-EBT complex: Wine red
                • Free EBT: Blue
                • Endpoint: Wine red → Blue (pure)
                
                Hardness Classification:
                • Soft: <75 mg/L CaCO₃
                • Moderately hard: 75-150 mg/L
                • Hard: 150-300 mg/L
                • Very hard: >300 mg/L
                
                📊 Permissible Limits:
                • WHO: No health-based guideline (200 mg/L aesthetic)
                • IS 10500:2012: 200 mg/L (desirable), 600 mg/L (permissible)
                
                💡 Significance:
                • Hard water + soap → Scum formation (CaSt₂ - calcium stearate)
                • Scale in boilers/pipes (CaCO₃, CaSO₄)
                • High hardness: Increased detergent use
                • Cardiovascular disease se inverse relationship`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Burette (25 mL) - Class A</li>
                    <li>Conical Flask (250 mL)</li>
                    <li>Magnetic Stirrer (endpoint detection ke liye recommended)</li>
                    <li>pH Meter</li>
                    <li>Timer (5-minute titration limit ke liye)</li>
                </ul>`,
                
                reagents: `
                <h4>Abhikarnak (Reagents)</h4>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>
                        <strong>Buffer Solution, pH 10.0 ± 0.1:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1">
                            <li>16.9 g NH₄Cl ko 143 mL concentrated NH₄OH (ammonia) mein dissolve karen</li>
                            <li>1.25 g magnesium EDTA disodium salt (MgEDTA) daalen</li>
                            <li>Distilled water se 250 mL tak patle karen</li>
                            <li>pH check karen: 10.0 ± 0.1 hona chahiye</li>
                            <li>Amber bottle mein store karen (ammonia volatile hai)</li>
                        </ul>
                        <p class="text-xs mt-1"><em>Note: Agar MgEDTA nahi hai, toh 1.179 g Na₂EDTA + 780 mg MgSO₄·7H₂O + 16.9 g NH₄Cl + 143 mL NH₄OH mix karen</em></p>
                    </li>
                    <li>
                        <strong>Eriochrome Black T (EBT) Indicator:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1">
                            <li>Solid: 0.5 g EBT + 100 g NaCl, grind to powder (6 months stable)</li>
                            <li>Liquid: 0.5 g EBT + 0.5 g hydroxylamine HCl ko 100 mL 95% ethanol mein dissolve karen (1 week stable)</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Inhibitor Solutions:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1">
                            <li>1% NaCN (0.5 mL) - Cu, Zn, Ni inhibit karta hai [⚠️ HIGHLY TOXIC - fume hood mein use karen]</li>
                            <li>1% Hydroxylamine HCl (1 mL) - Fe, Mn reduce karta hai</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Standard EDTA Titrant, 0.01M:</strong>
                        3.723 g EDTA disodium salt ko distilled water mein dissolve, 1000 mL tak dilute karen
                    </li>
                    <li>
                        <strong>Standard Calcium Solution (Primary Standard):</strong>
                        1.000 g CaCO₃ (dried) ko HCl mein dissolve, 1000 mL tak dilute karen
                        → 1 mL = 1 mg CaCO₃ = 1 mg/L hardness (at 1000 mL sample)
                    </li>
                </ul>`,
                
                procedure: [
                    `Sample Preparation:
                    • 25 mL sample lein (high hardness: Dilute with distilled water aur 50 mL total lein)
                    • Very high hardness (>1000 mg/L): 10 mL sample + 40 mL distilled water`,
                    
                    `Interference Removal (agar required ho):
                    • Fe/Mn ke liye: 1 mL hydroxylamine HCl daalen
                    • Cu/Zn ke liye: 0.5 mL NaCN daalen (fume hood mein!)`,
                    
                    `1-2 mL buffer solution daalen:
                    • pH 10.0-10.1 ho jani chahiye (meter se verify karen)
                    • Zyada buffer daalen toh color change poor hota hai`,
                    
                    `Indicator daalen:
                    • Solid EBT: 0.1-0.2 g
                    • Liquid EBT: 2-3 drops
                    • Solution wine red hona chahiye (agar nahi hua, metal ions absent ho sakte hain)`,
                    
                    `EDTA se titrate karen jab tak rng wine red → Pure blue:
                    • Endpoint par last drop add karne ke baad 30 seconds stable hona chahiye
                    • Buffer add karne ke 5 minutes ke andar complete karen (Mg(OH)₂ slowly dissolves)
                    • Near endpoint: Half-drop additions`,
                    
                    `EDTA Standardization (har batch ke liye):
                    • 20 mL standard Ca solution lein
                    • Same procedure follow karen
                    • EDTA molarity verify karen`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong>
                <br/>Total Hardness (mg/L as CaCO₃) = (A × B × 1000) / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>A = Sample ke liye EDTA titrant (mL)</li>
                    <li>B = 1 mL EDTA ke equivalent CaCO₃ (mg) - standardization se calculate</li>
                    <li>1000 = L to mL conversion</li>
                    <li>V = Sample volume (mL)</li>
                </ul>
                
                <br/><strong>Alternative Formula (using EDTA molarity directly):</strong>
                <br/>Hardness (mg/L CaCO₃) = (mL EDTA × Molarity × 100,090) / V
                
                <br/><br/><strong>Example:</strong>
                <br/>EDTA used = 12.5 mL, Molarity = 0.01M, Sample = 25 mL
                <br/>Hardness = (12.5 × 0.01 × 100,090) / 25 = 500 mg/L CaCO₃
                
                <br/><br/><strong>Hardness Classification:</strong>
                <table class="w-full text-left border-collapse mt-2 text-xs">
                    <thead>
                        <tr><th class="border p-1">Classification</th><th class="border p-1">mg/L CaCO₃</th><th class="border p-1">Remarks</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-1">Soft</td><td class="border p-1">&lt;75</td><td class="border p-1">Corrosive, good lather</td></tr>
                        <tr><td class="border p-1">Moderately Hard</td><td class="border p-1">75-150</td><td class="border p-1">Acceptable</td></tr>
                        <tr><td class="border p-1">Hard</td><td class="border p-1">150-300</td><td class="border p-1">Scaling begins</td></tr>
                        <tr><td class="border p-1">Very Hard</td><td class="border p-1">&gt;300</td><td class="border p-1">Significant scaling</td></tr>
                    </tbody>
                </table>
                </div>`
            },
            
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO) - Ghula Hua Oxygen',
                intro: `Winkler (Azide Modification) Iodometric Titration method se DO determination.
                
                🔬 Scientific Background:
                Dissolved Oxygen (DO) pani mein ghula hua oxygen hai jo aquatic organisms ke survival ke liye essential hai. DO saturation temperature-dependent hai:
                
                DO Saturation at Different Temperatures (sea level, 0 salinity):
                • 0°C: 14.62 mg/L
                • 10°C: 11.33 mg/L
                • 20°C: 9.09 mg/L
                • 25°C: 8.26 mg/L
                • 30°C: 7.54 mg/L
                • 37°C: 6.59 mg/L
                
                Winkler Method Reactions:
                Step 1: Mn²⁺ + 2OH⁻ → Mn(OH)₂↓ (white)
                        Mn(OH)₂ + ½O₂ → MnO(OH)↓ (brown) [oxidized by DO]
                
                Step 2: MnO(OH) + 2I⁻ + 3H⁺ → Mn²⁺ + I₂ + 2H₂O (acidification)
                        (I₂ released proportional to DO)
                
                Step 3: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (thiosulfate titration)
                
                Azide Modification: NaN₃ nitrite interference remove karta hai
                2NO₂⁻ + 2I⁻ + 2H⁺ → N₂ + I₂ + 2H₂O (without azide, false high DO)
                NaN₃ + H⁺ → HN₃; 2HN₃ + NO₂⁻ → N₂O + N₂ + H₂O + 2N₂ (nitrite destroyed)
                
                📊 Permissible Limits:
                • WHO/CPCB for rivers:
                  - Class A (drinking water): ≥ 6 mg/L
                  - Class B (bathing): ≥ 5 mg/L
                  - Class C (drinking after treatment): ≥ 4 mg/L
                  - Class D (wildlife): ≥ 4 mg/L
                  - Class E (irrigation): ≥ 0 mg/L
                • ETP discharge: ≥ 5 mg/L (CPCB)
                
                💡 Ecological Significance:
                • DO <4 mg/L: Fish start dying (hypoxia)
                • DO <2 mg/L: Most species cannot survive
                • DO = 0 mg/L: Anaerobic conditions, H₂S production
                • DO >10 mg/L: Supersaturation (algal bloom indicator)`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>DO Sampler:</strong> Field sampling ke liye (bottle filling device)</li>
                    <li><strong>BOD Bottles (300 mL):</strong> Glass stopper ke sath, koi air pocket nahi</li>
                    <li><strong>Burette (25 mL)</strong> - Class A</li>
                    <li><strong>Volumetric Flask, Pipettes</strong></li>
                    <li><strong>DO Meter (Optional):</strong> Field measurement ke liye (membrane electrode method)</li>
                </ul>`,
                
                reagents: `
                    <h4>Abhikarnak (Reagents)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>Manganous Sulphate Solution:</strong>
                            480 g MnSO₄·4H₂O (ya 364 g MnSO₄·H₂O) ko distilled water mein dissolve, 1000 mL tak patle karen.
                            Filter karen agar turbid ho.
                        </li>
                        <li>
                            <strong>Alkali-Iodide-Azide Reagent:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>500 g NaOH ko 300-400 mL distilled water mein dissolve karen (heat hoti hai - careful!)</li>
                                <li>135 g NaI (ya 150 g KI) daalen aur dissolve karen</li>
                                <li>10 g NaN₃ (sodium azide) ko 40 mL distilled water mein dissolve karke daalen</li>
                                <li>⚠️ Azide: Highly toxic, acidification par HN₃ gas release hoti hai - fume hood mein work karen</li>
                                <li>1000 mL tak patle karen</li>
                                <li>Test: Diluted solution se starch-iodide paper blue nahi hona chahiye</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Concentrated Sulphuric Acid (H₂SO₄)</strong>
                        </li>
                        <li>
                            <strong>Starch Indicator Solution (0.5% w/v):</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>5 g soluble starch ko cold water mein paste banao</li>
                                <li>Boiling 1000 mL distilled water mein daalen aur boil karen jab tak clear na ho jaye</li>
                                <li>Thoda sa salicylic acid ya 1 mL chloroform preservative ke liye daalen</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Standard Sodium Thiosulfate Titrant, 0.025N:</strong>
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>6.205 g Na₂S₂O₃·5H₂O ko recently boiled cooled distilled water mein dissolve karen</li>
                                <li>0.4 g NaOH ya 2 mL 6N NaOH daalen (stabilization ke liye)</li>
                                <li>1000 mL tak patle karen</li>
                                <li>Standardize karen: K₂Cr₂O₇ + KI → I₂ → titrate with thiosulfate</li>
                            </ul>
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `Sample Collection (Critical Step):
                    • BOD bottle ko overflow tak bharein - koi air bubble nahi
                    • DO sampler ya siphon tube use karen
                    • Sample collect karne ke immediately baad reagents add karen (on-site ya within 5 minutes)`,
                    
                    `Manganese Addition:
                    • Stopper hata kar, 2 mL MnSO₄ solution bottle ke andar alag se (liquid surface ke neeche) daalen
                    • White precipitate banegi [Mn(OH)₂]`,
                    
                    `Alkali-Iodide-Azide Reagent:
                    • Same way se 2 mL alkali-iodide-azide reagent daalen
                    • Stopper lagaen, pani seal banane ke liye (inversion stopper method)
                    • Gently 20 times invert karen - uniform brown precipitate bane [MnO(OH)]
                    • Settle hone do (15 minutes)`,
                    
                    `Acidification:
                    • Stopper hata kar, 2 mL concentrated H₂SO₄ daalen (liquid surface ke neeche)
                    • Stopper lagaen, gently mix karen jab tak precipitate completely dissolve na ho jaye
                    • Yellow-brown solution banta hai (I₂ release hoti hai)`,
                    
                    `Titration:
                    • 201 mL (300 mL bottle - 2 mL MnSO₄ - 2 mL alkali reagent - correction for displaced volume) ya defined volume measure karen
                    • 0.025N Na₂S₂O₃ se titrate karen jab tak pale yellow na ho jaye
                    • 1-2 mL starch indicator daalen (solution blue ho jayega)
                    • Titrate karen jab tak blue color completely disappear na ho jaye (endpoint)
                    • mL thiosulfate note karen`,
                    
                    `Field DO Measurement (Alternative):
                    • Membrane electrode DO meter calibrate karen
                    • Sample mein probe insert karen
                    • Stabilize hone ke baad reading len`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong>
                <br/>DO (mg/L) = (V_titrant × N × 8000) / V_sample
                
                <br/><br/><strong>Standard Formula for 300 mL Bottle (200 mL titrated):</strong>
                <br/>DO (mg/L) = (mL Na₂S₂O₃ × 0.025 × 8000) / 200
                <br/>DO (mg/L) = mL Na₂S₂O₃ × 1.0 (when N = 0.025 and 200 mL titrated)
                
                <br/><br/><strong>Example:</strong>
                <br/>Na₂S₂O₃ used = 7.2 mL, N = 0.025, Volume titrated = 200 mL
                <br/>DO = (7.2 × 0.025 × 8000) / 200 = 7.2 mg/L
                
                <br/><br/><strong>DO Saturation % Calculation:</strong>
                <br/>DO Saturation % = (Measured DO / Saturation DO at that temp.) × 100
                
                <br/><br/><strong>DO Deficit:</strong>
                <br/>DO Deficit = Saturation DO - Measured DO
                
                <br/><br/>⚠️ <strong>Common Errors:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>Air bubble entrainment during sampling - most common error</li>
                    <li>Delay between sampling aur fixation - DO changes in minutes</li>
                    <li>Nitrite interference - azide modification use karein</li>
                    <li>Fe²⁺ >1 mg/L - blank correction zaroori</li>
                </ul>
                </div>`
            },
            
            {
                id: 'ph',
                title: 'pH - Potentiometric Method',
                intro: `Glass electrode potentiometric method se pH measurement.
                
                🔬 Scientific Background:
                pH pani ki acidity ya alkalinity ka measure hai, hydrogen ion activity ke basis par:
                pH = -log₁₀[H⁺] = -log₁₀(aH₊)
                
                pH Scale:
                • 0-7: Acidic (H⁺ > OH⁻)
                • 7: Neutral (H⁺ = OH⁻) [pure water at 25°C]
                • 7-14: Alkaline/Basic (OH⁻ > H⁺)
                
                Note: Water ka neutral pH temperature-dependent hai:
                • 0°C: pH 7.47
                • 25°C: pH 7.00
                • 60°C: pH 6.51
                
                Glass Electrode Working Principle:
                Special glass membrane H⁺ ke liye selectively permeable hoti hai
                EMF generated = const + 0.0592 × pH (at 25°C) [Nernst Equation]
                
                Nernst Equation:
                E = E° - (RT/nF) × ln[H⁺]
                Where: R = 8.314 J/mol·K, T = Temperature (K), n = 1, F = 96,485 C/mol
                
                Temperature Effect (Nernst factor):
                • 15°C: 57.17 mV/pH unit
                • 25°C: 59.16 mV/pH unit
                • 35°C: 61.14 mV/pH unit
                → ATC (Automatic Temperature Compensation) important hai
                
                📊 Permissible Limits:
                • WHO: 6.5-8.5 (no health guideline, operational parameter)
                • IS 10500:2012: 6.5-8.5
                • CPCB inland surface water discharge: 6.0-9.0
                
                💡 Significance:
                • pH <6.5: Corrosive (leaches metals from pipes - lead, copper)
                • pH >8.5: Scale formation, bitter taste, reduced chlorination efficiency
                • Aquatic life: Most species thrive at pH 6.5-8.5
                • Disinfection: Chlorination less effective at high pH`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>pH Meter:</strong> ±0.01 pH unit resolution, with ATC (Automatic Temperature Compensation)</li>
                    <li><strong>Glass Electrode + Reference Electrode:</strong> Ya combination electrode</li>
                    <li><strong>Temperature Probe</strong></li>
                    <li><strong>Calibration Buffer Solutions:</strong> NIST traceable standards</li>
                    <li><strong>Magnetic Stirrer</strong></li>
                </ul>`,
                
                reagents: `
                    <h4>Buffer Solutions (NIST Standard)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>
                            <strong>pH 4.00 Buffer (Phthalate):</strong>
                            10.12 g potassium hydrogen phthalate (KHC₈H₄O₄) ko CO₂-free distilled water mein dissolve, 1000 mL tak patle karen
                        </li>
                        <li>
                            <strong>pH 6.86 Buffer (Phosphate):</strong>
                            3.39 g KH₂PO₄ + 3.53 g Na₂HPO₄ ko 1000 mL distilled water mein dissolve karen
                        </li>
                        <li>
                            <strong>pH 9.18 Buffer (Borate):</strong>
                            3.80 g sodium tetraborate (Na₂B₄O₇·10H₂O) ko 1000 mL distilled water mein dissolve karen
                        </li>
                        <li>
                            <strong>Ya commercially prepared certified buffer solutions use karen</strong>
                        </li>
                    </ul>
                `,
                
                procedure: [
                    `pH Meter Calibration (2-point ya 3-point):
                    • Electrode ko distilled water se rinse karen, soft tissue se gentle blot karen
                    • Pehle buffer (pH 7 ya expected sample ke kareeb pH) mein electrode daalen
                    • "Calibrate" ya "Standardize" button press karen, stable reading ka wait karen
                    • Doosre buffer mein electrode daalen (rinse ke baad)
                    • Slope check karen: 95-105% hona chahiye (ideal: 100% = 59.16 mV/pH at 25°C)
                    • Agar slope out of range hai: Electrode clean/replace karen`,
                    
                    `Sample Measurement:
                    • Electrode ko distilled water se rinse karen
                    • Sample container mein (ya beaker mein) electrode daalen
                    • Gentle stirring maintain karen (magnetic stirrer - low speed)
                    • 30-60 seconds stabilize hone do
                    • Temperature note karen (ATC check karen)
                    • pH reading note karen (2 decimal places tak)`,
                    
                    `Post-measurement:
                    • Electrode rinse karen
                    • Storage solution (KCl 3M) mein rakhein`,
                    
                    `QC Requirements:
                    • Har run se pehle calibration (minimum 2 buffers)
                    • Mid-range buffer check har 20 samples ke baad
                    • Calibration valid: ±0.05 pH units of true value`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Direct Reading:</strong> pH meter se directly padhen
                
                <br/><br/><strong>pH ki Interpretation:</strong>
                <table class="w-full text-left border-collapse mt-2 text-xs">
                    <thead>
                        <tr><th class="border p-1">pH Range</th><th class="border p-1">Classification</th><th class="border p-1">H⁺ Conc.</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-1">0-3</td><td class="border p-1">Strongly Acidic</td><td class="border p-1">1 - 0.001 mol/L</td></tr>
                        <tr><td class="border p-1">3-6</td><td class="border p-1">Weakly Acidic</td><td class="border p-1">10⁻³ - 10⁻⁶ mol/L</td></tr>
                        <tr><td class="border p-1">6-7</td><td class="border p-1">Mildly Acidic</td><td class="border p-1">10⁻⁶ - 10⁻⁷ mol/L</td></tr>
                        <tr><td class="border p-1">7</td><td class="border p-1">Neutral</td><td class="border p-1">10⁻⁷ mol/L</td></tr>
                        <tr><td class="border p-1">7-8.5</td><td class="border p-1">Slightly Alkaline</td><td class="border p-1">10⁻⁷ - 10⁻⁸·⁵ mol/L</td></tr>
                        <tr><td class="border p-1">8.5-11</td><td class="border p-1">Alkaline</td><td class="border p-1">Very low</td></tr>
                        <tr><td class="border p-1">11-14</td><td class="border p-1">Strongly Alkaline</td><td class="border p-1">Extremely low</td></tr>
                    </tbody>
                </table>
                
                <br/><strong>Reporting:</strong>
                pH = X.XX (2 decimal places), at Y°C
                Example: pH = 7.42 at 25°C
                </div>`
            },
            
            {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS) - Kul Ghule Huye Thos Padarth',
                intro: `Gravimetric method se TDS determination (180°C drying).
                
                🔬 Scientific Background:
                TDS pani mein ghule huye sabhi inorganic salts (calcium, magnesium, sodium, potassium, bicarbonates, chlorides, sulfates) aur chhoti matra mein organic matter ka total measure hai.
                
                TDS ≠ TSS:
                • TDS: 0.45 µm filter se guzar jata hai
                • TSS: 0.45 µm filter par ruk jata hai
                
                TDS Drying Temperature:
                • 103-105°C: Crystal water bhi include hoti hai (total residue)
                • 180°C: Volatile salts remove, only stable salts remain (BIS standard for TDS)
                
                TDS aur Conductivity Relationship:
                TDS (mg/L) ≈ EC (µS/cm) × 0.55-0.70 (empirical factor)
                More precise: TDS = EC × 0.64 (general drinking water)
                
                📊 Permissible Limits:
                • WHO: 600 mg/L (aesthetic), no health guideline
                • IS 10500:2012: 500 mg/L (desirable), 2000 mg/L (permissible)
                • CPCB inland surface water: 2100 mg/L
                
                💡 Significance:
                • >1000 mg/L: Unacceptable taste
                • >2000 mg/L: Corrosive, scale-forming
                • <100 mg/L: Tasteless, may be corrosive (low buffering)
                • Irrigation: Depending on crop, 1000-3000 mg/L (varies)`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>Evaporating Dish:</strong> Platinum, borosilicate glass, ya porcelain (100 mL capacity), pre-numbered</li>
                    <li><strong>Hot Air Oven:</strong> 180 ± 2°C</li>
                    <li><strong>Hot Plate/Steam Bath:</strong> Initial evaporation ke liye</li>
                    <li><strong>Desiccator:</strong> Anhydrous silica gel (CaCl₂ nahi - it reacts) ke sath</li>
                    <li><strong>Analytical Balance:</strong> ±0.1 mg readability</li>
                    <li><strong>Glass Fibre Filter:</strong> 0.45 µm (TDS filtration ke liye)</li>
                    <li><strong>Vacuum Filtration Assembly</strong></li>
                </ul>`,
                
                reagents: `
                <p>Koi chemical reagents nahi chahiye.</p>
                <p><strong>Note:</strong> Distilled water (conductivity <2 µS/cm) use karen glassware rinsing ke liye.</p>`,
                
                procedure: [
                    `Dish Preparation:
                    • Evaporating dish ko 180°C par 1 hour oven mein rakhein
                    • Desiccator mein 30 minutes cool karen
                    • Analytical balance par taulen (W₁) - 0.1 mg tak record karen
                    • Cool karke fauran use karen (hygroscopic ho sakti hai)`,
                    
                    `Sample Filtration:
                    • 0.45 µm glass fibre filter se sample filter karen (suspended solids hata ne ke liye)
                    • Pehle 50-100 mL distilled water se filter rinse karen
                    • Filter rinse water discard karen
                    • Appropriate sample volume measure karen (V mL)`,
                    
                    `Evaporation:
                    • Measured volume (100 mL recommended, TDS ke basis par adjust karen) dish mein daalen
                    • Hot plate ya steam bath par gently evaporate karen jab tak dry na ho jaye
                    • Avoid spattering (low heat use karen near end)`,
                    
                    `Drying:
                    • Dish ko 180 ± 2°C oven mein 1 hour rakhen
                    • Desiccator mein 30 minutes cool karen
                    • Immediately taulen (W₂)
                    • Weighing repeat karen jab tak consistent weight na mile (±0.5 mg)`,
                    
                    `High TDS Samples:
                    • Agar residue >200 mg ho, toh analysis repeat karen smaller volume se`,
                    
                    `Low TDS Samples (<10 mg/L):
                    • Bada volume use karen (500 mL ya 1000 mL)
                    • Multiple additions by refilling dish during evaporation`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>Formula:</strong>
                <br/>TDS (mg/L) = [(W₂ - W₁) × 1000 × 1000] / V
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>W₂ = Residue ke sath dish ka weight (g)</li>
                    <li>W₁ = Empty dish ka weight (g)</li>
                    <li>V = Sample ka volume (mL)</li>
                    <li>1,000,000 (ya 10⁶) = g to mg aur mL to L conversion</li>
                </ul>
                
                <br/><strong>Simplified (W in mg):</strong>
                <br/>TDS (mg/L) = [(W₂ - W₁) in mg × 1000] / V (mL)
                
                <br/><br/><strong>Example:</strong>
                <br/>W₁ = 50.2145 g, W₂ = 50.2695 g, V = 100 mL
                <br/>Residue = (50.2695 - 50.2145) × 1000 = 55 mg
                <br/>TDS = (55 × 1000) / 100 = <strong>550 mg/L</strong>
                
                <br/><br/>⚠️ <strong>Precision:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>Duplicate analysis: Results within ±10% (for TDS >10 mg/L)</li>
                    <li>Blank correction: Run reagent blank, subtract if significant</li>
                </ul>
                </div>`
            },
            
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS) - Kul Nilabit Thos Padarth',
                intro: `Gravimetric method se TSS determination (glass fibre filter, 103-105°C drying).
                
                🔬 Scientific Background:
                TSS wo solid particles hai jo pani mein suspended rehte hain aur 0.45 µm (ya 1.2 µm glass fibre) filter par ruk jate hain jab sample filter kiya jata hai.
                
                TSS Components:
                • Settleable Solids: 1 hour mein settle ho jate hain (Imhoff cone mein)
                • Colloidal Solids: Suspended, settle nahi hote (0.001-1 µm)
                • Filterable (Dissolved) Solids: Filter se guzar jate hain (= TDS)
                
                Total Solids (TS) = TSS + TDS
                
                Fixed vs Volatile Suspended Solids:
                • FSS (Fixed Suspended Solids): 550°C par ignition ke baad jo bache (inorganic)
                • VSS (Volatile Suspended Solids): 550°C par jo burn ho jaye (organic)
                • VSS/TSS ratio: Biological activity indicator
                
                📊 Permissible Limits:
                • CPCB inland surface water discharge: 100 mg/L
                • WHO for drinking water: No standard (turbidity preferred)
                • Rivers (Class B - bathing): ≤ 20 mg/L (additional above natural level)
                
                💡 Significance:
                • High TSS: Turbidity increase, light penetration decrease
                • Affects photosynthesis in aquatic plants
                • Fish gills damage (>80 mg/L)
                • Carries adsorbed pollutants (heavy metals, organics)
                • Drinking water: Treatment efficiency indicator`,
                
                apparatus: `
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>Glass Fibre Filter Disk:</strong> 47 mm ya 55 mm diameter, 0.45 µm nominal pore size (Whatman GF/C ya equivalent)</li>
                    <li><strong>Filtration Apparatus:</strong> Gooch crucible ya vacuum filtration unit</li>
                    <li><strong>Vacuum Pump</strong></li>
                    <li><strong>Drying Oven:</strong> 103-105°C (precisely controlled)</li>
                    <li><strong>Desiccator</strong></li>
                    <li><strong>Analytical Balance:</strong> ±0.1 mg readability</li>
                    <li><strong>Aluminium Weighing Dishes ya Crucibles</strong></li>
                </ul>`,
                
                reagents: `<p>Koi chemical reagents nahi chahiye.</p>`,
                
                procedure: [
                    `Filter Preparation:
                    • Glass fibre filter ko distilled water se rinse karen (vacuum filtration assembly mein)
                    • 103-105°C oven mein 1 hour dry karen
                    • Desiccator mein 30 minutes cool karen
                    • Taulen (W₁) - 0.1 mg tak precision
                    • Weighing dish mein filter rakhein aur oven/desiccator mein ready rakhein`,
                    
                    `Sample Volume Selection:
                    • TSS <100 mg/L: 1000 mL sample
                    • TSS 100-500 mg/L: 250 mL
                    • TSS 500-2000 mg/L: 100 mL
                    • TSS >2000 mg/L: 25-50 mL (ya dilute)
                    • Final residue: 10-200 mg optimal range`,
                    
                    `Filtration:
                    • Pre-weighed filter ko assembly mein place karen
                    • Measured volume sample ko filter se guzaaren
                    • Vacuum pressure moderate rakhein (excessive vacuum fine particles pass kar sakti hai)
                    • Filter ko 3 × 10 mL distilled water se wash karen (salts remove karne ke liye)
                    • Complete drainage ensure karen`,
                    
                    `Drying aur Weighing:
                    • Filter ko dish mein (ya dish ke sath) 103-105°C par 1 hour dry karen
                    • Desiccator mein 30 minutes cool karen
                    • Immediately taulen (W₂)
                    • Constant weight aane tak repeat (±0.5 mg between successive weighings)`,
                    
                    `VSS Determination (Optional):
                    • W₂ ke baad filter ko muffle furnace mein 550°C par 15 minutes ignite karen
                    • Cool in desiccator, weigh (W₃)
                    • VSS = [(W₂-W₁) - (W₃-W₁)] × 1000/V = (W₂-W₃) × 1000/V`
                ],
                
                calculation: `
                <div class="bg-blue-50 p-3 rounded">
                <strong>TSS Formula:</strong>
                <br/>TSS (mg/L) = [(W₂ - W₁) × 1,000,000] / V
                
                <br/><strong>Simplified:</strong>
                <br/>TSS (mg/L) = [(W₂ - W₁) in mg × 1000] / V (mL)
                
                <br/><br/>Jahan:
                <ul class="list-disc list-outside pl-5 text-sm">
                    <li>W₁ = Filter ka initial weight (g ya mg)</li>
                    <li>W₂ = Filter + residue ka weight after drying (g ya mg)</li>
                    <li>V = Sample volume (mL)</li>
                </ul>
                
                <br/><strong>Example:</strong>
                <br/>W₁ = 0.4521 g, W₂ = 0.4891 g, V = 500 mL
                <br/>TSS = [(0.4891 - 0.4521) × 1000 × 1000] / 500 = 74 mg/L
                
                <br/><br/><strong>VSS (Volatile Suspended Solids):</strong>
                <br/>VSS (mg/L) = [(W₂ - W₃) × 1000] / V (mL)
                <br/>Jahan W₃ = filter + ash weight after 550°C ignition
                
                <br/><br/>⚠️ <strong>Common Errors:</strong>
                <ul class="list-disc list-outside pl-5 text-xs">
                    <li>Filter ka pre-treatment zaroori hai (rinse + dry + weigh)</li>
                    <li>Excessive vacuum: Fine particles filter se guzar jaate hain</li>
                    <li>Insufficient washing: Salt crystals remain (false high)</li>
                </ul>
                </div>`
            },
            {
    id: 'fluoride',
    title: 'Fluoride Detection (Paani mein Fluoride ka Pata Lagana)',
    intro: 'SPADNS spectrophotometric method ya Ion Selective Electrode (ISE) method ka use karke paani mein fluoride concentration ka determination. Fluoride ek essential micronutrient hai lekin excessive levels dental aur skeletal fluorosis cause karte hain.',
    
    content: `
        <div class="prose max-w-none prose-blue">
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-blue-700"><strong>Fluoride (F⁻)</strong> paani mein naturally occurring anion hai jo fluoride-bearing minerals (fluorite-CaF₂, fluorapatite-Ca₅(PO₄)₃F, cryolite-Na₃AlF₆) ke weathering se aata hai. Industrial sources mein aluminum smelting, phosphate fertilizer plants, aur glass/ceramic manufacturing se fluoride discharge hota hai.</p>
                
                <p class="text-blue-700 mt-2"><strong>Health Significance:</strong></p>
                <ul class="text-blue-700">
                    <li><strong>Optimal range (0.5-1.0 mg/L):</strong> Dental caries prevention — enamel fluorapatite formation promote karta hai</li>
                    <li><strong>Deficiency (&lt;0.5 mg/L):</strong> Increased tooth decay risk</li>
                    <li><strong>Excess (1.5-4.0 mg/L):</strong> <strong>Dental fluorosis</strong> — enamel mottling, white/brown stains</li>
                    <li><strong>High levels (&gt;4.0 mg/L):</strong> <strong>Skeletal fluorosis</strong> — bone deformities, stiffness, pain; neurological effects</li>
                </ul>
                
                <p class="text-blue-700 mt-2"><strong>WHO Guideline:</strong> 1.5 mg/L maximum permissible limit for drinking water</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 1: SPADNS Spectrophotometric Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-blue-700">Scientific Principle</h5>
                <p><strong>SPADNS</strong> ka full form hai <strong>Sodium 2-(parasulfophenylazo)-1,8-dihydroxy-3,6-naphthalene disulfonate</strong>. Yeh ek red-colored azo dye hai.</p>
                
                <p class="mt-2"><strong>Reaction Mechanism:</strong></p>
                <p>SPADNS dye <strong>zirconium (Zr⁴⁺)</strong> ke saath react karke ek <strong>intense red-colored lake complex</strong> banata hai:</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>Zr⁴⁺ + SPADNS (red dye) → [Zr-SPADNS]⁴⁺ Complex (DEEP RED)
    λmax = 570 nm</code></pre>
                
                <p class="mt-2">Jab sample mein <strong>fluoride ions present</strong> hote hain, toh fluoride zirconium se preferentially bind karta hai (very strong Zr-F bond formation):</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>Zr⁴⁺ + 6F⁻ → [ZrF₆]²⁻ (Hexafluorozirconate complex)
(Colorless, very stable, K_formation ≈ 10³⁵)</code></pre>
                
                <p class="mt-2">Result: Zirconium fluoride complex mein chala jaata hai → free SPADNS dye release hota hai → red color ka <strong>intensity DECREASE</strong> hota hai. Fluoride concentration jiitna zyada, utna kam red color.</p>
                
                <p class="mt-2"><strong>Beer's Law Application:</strong> Fluoride concentration directly proportional to decrease in absorbance at 570 nm.</p>
            </div>

            <h5 class="font-semibold mt-4 text-blue-700">Apparatus Required</h5>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Spectrophotometer</strong> capable of 570 nm wavelength measurement</li>
                <li><strong>Distillation apparatus</strong> (agar interfering ions zyada hain toh — Al³⁺, Fe³⁺, PO₄³⁻)</li>
                <li>Cuvettes (1 cm path length)</li>
                <li>Volumetric flasks (50 ml)</li>
                <li>Pipettes</li>
            </ul>

            <h5 class="font-semibold mt-4 text-blue-700">Reagents</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>1. SPADNS Solution:</strong></p>
                <ul class="text-sm">
                    <li>Commercial SPADNS powder 958 mg</li>
                    <li>Distilled water mein dissolve karke 1 liter banao</li>
                    <li>Amber bottle mein store karein (light-sensitive)</li>
                    <li>Stable for 2 years</li>
                </ul>
                
                <p class="mt-3"><strong>2. Zirconyl-Acid Reagent (Zirconyl Chloride Octahydrate):</strong></p>
                <ul class="text-sm">
                    <li>ZrOCl₂·8H₂O: 133 mg</li>
                    <li>Concentrated HCl: 350 ml</li>
                    <li>Distilled water se 1 liter volume banao</li>
                    <li>pH ≈ 0.0-0.5 (highly acidic)</li>
                </ul>
                
                <p class="mt-3"><strong>3. Acid-SPADNS Mixed Reagent:</strong></p>
                <ul class="text-sm">
                    <li>SPADNS solution aur zirconyl-acid reagent ko <strong>equal volumes</strong> mein mix karein</li>
                    <li>Use karne se pehle prepare karein (daily fresh)</li>
                    <li>Final solution deep red color ka hona chahiye</li>
                </ul>
                
                <p class="mt-3"><strong>4. Standard Fluoride Solution:</strong></p>
                <ul class="text-sm">
                    <li><strong>Stock (100 mg F/L):</strong> 221 mg anhydrous NaF ko 1 L distilled water mein dissolve karein</li>
                    <li><strong>Working standards:</strong> Stock se dilute karke 0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4 mg/L standards prepare karein</li>
                </ul>
                
                <p class="mt-3"><strong>5. Distillation Reagents (agar required):</strong></p>
                <ul class="text-sm">
                    <li>Sulfuric acid solution (1:1 v/v with water)</li>
                    <li>Silver sulfate-sulfuric acid solution (chloride removal ke liye)</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-blue-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>A. Sample Pretreatment (if necessary):</strong></p>
                <ol class="text-sm">
                    <li><strong>Distillation criterion:</strong> Agar sample mein Al³⁺ &gt;0.25 mg/L, Fe³⁺ &gt;10 mg/L, ya PO₄³⁻ &gt;25 mg/L hai toh distillation required.</li>
                    <li>Distillation apparatus mein 400 ml sample lein</li>
                    <li>50 ml H₂SO₄ (1:1) add karein — acidic environment banta hai</li>
                    <li>Heat karke distill karein, pehle 300 ml distillate collect karein</li>
                    <li>Distillate ko room temperature tak cool karein</li>
                </ol>
                
                <p class="mt-3"><strong>B. Color Development:</strong></p>
                <ol class="text-sm" start="6">
                    <li><strong>50 ml volumetric flask</strong> mein <strong>10.0 ml sample</strong> (ya distillate) pipette karein</li>
                    <li><strong>10.0 ml SPADNS mixed reagent</strong> add karein</li>
                    <li>Distilled water se volume 50 ml tak make up karein</li>
                    <li>Stopper lagake invert karke <strong>thoroughly mix</strong> karein</li>
                    <li><strong>1 minute wait</strong> karein (color development complete hone tak)</li>
                </ol>
                
                <p class="mt-3"><strong>C. Spectrophotometric Measurement:</strong></p>
                <ol class="text-sm" start="11">
                    <li>Spectrophotometer ko <strong>570 nm wavelength</strong> par set karein</li>
                    <li><strong>Blank solution</strong> use karke zero karein (blank = distilled water + mixed reagent, no fluoride)</li>
                    <li>Standards ke absorbance measure karein aur <strong>calibration curve plot</strong> karein (X-axis: F⁻ mg/L, Y-axis: Absorbance)</li>
                    <li>Sample ka absorbance read karein <strong>within 1 hour</strong> (color stable rehta hai limited time)</li>
                    <li>Calibration curve se fluoride concentration determine karein</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-blue-700">Calculation</h5>
            <div class="bg-gray-100 p-3 rounded">
                <pre class="text-sm"><code>Fluoride (mg F/L) = [Calibration curve se mg F] × (Total volume / Sample volume)

Example:
- Sample volume taken = 10 ml
- Final volume = 50 ml
- Calibration curve se reading = 0.6 mg F
- Fluoride concentration = 0.6 × (50/10) = 0.6 × 5 = 3.0 mg/L

Agar distillation kiya tha:
Fluoride in original sample = [Reading × Distillate volume] / Original sample volume</code></pre>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Interferences & Precautions</h5>
                <ul class="text-sm text-yellow-700">
                    <li><strong>Aluminum (Al³⁺):</strong> &gt;0.25 mg/L se positive error (fluoride reading high aayegi) — distillation se remove karein</li>
                    <li><strong>Iron (Fe³⁺):</strong> &gt;10 mg/L interfere karta hai</li>
                    <li><strong>Phosphate (PO₄³⁻):</strong> &gt;25 mg/L negative error cause karta hai</li>
                    <li><strong>Chloride:</strong> Low levels tolerable, agar bohot zyada hai toh silver sulfate treatment</li>
                    <li><strong>Sulfate:</strong> &gt;200 mg/L se thoda interference — dilution se minimize karein</li>
                    <li><strong>pH:</strong> Method optimal pH 0.0-1.4 par work karta hai (reagent ki acidity maintain karti hai)</li>
                    <li><strong>Temperature:</strong> Room temperature (20-25°C) par reading lein — color intensity temperature-dependent hai</li>
                </ul>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 2: Ion Selective Electrode (ISE) Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-blue-700">Scientific Principle</h5>
                <p>Fluoride Ion Selective Electrode ek <strong>solid-state electrode</strong> hai jiska sensing membrane <strong>lanthanum fluoride (LaF₃) single crystal</strong> se bana hota hai jo fluoride ions ke liye selectively permeable hai.</p>
                
                <p class="mt-2"><strong>Nernst Equation Application:</strong></p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-2"><code>E = E₀ - (2.303RT/nF) × log[F⁻]
At 25°C: E = E₀ - 59.16 × log[F⁻]

Where:
E = Measured electrode potential (mV)
E₀ = Standard electrode potential
R = Gas constant, T = Temperature (K)
n = Charge on ion (1 for F⁻)
F = Faraday constant</code></pre>
                
                <p class="mt-2">Jab LaF₃ membrane fluoride solution ke contact mein aata hai, fluoride ions membrane surface par adsorb hote hain aur ek <strong>potential difference</strong> develop hota hai jo fluoride concentration ke logarithm ke directly proportional hota hai. Yeh potential pH meter ya ion meter se measure karte hain.</p>
            </div>

            <h5 class="font-semibold mt-4 text-blue-700">Apparatus</h5>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Fluoride Ion Selective Electrode</strong> (LaF₃ crystal-based)</li>
                <li><strong>Reference electrode</strong> (Ag/AgCl double junction preferred)</li>
                <li><strong>pH/Ion meter</strong> with mV scale (expanded scale mode)</li>
                <li>Magnetic stirrer with Teflon-coated stir bar</li>
                <li>Polyethylene beakers (glass fluoride leach kar sakta hai)</li>
            </ul>

            <h5 class="font-semibold mt-4 text-blue-700">Reagents for ISE Method</h5>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li><strong>TISAB (Total Ionic Strength Adjustment Buffer):</strong>
                    <ul class="ml-5 list-circle">
                        <li>Glacial acetic acid: 57 ml</li>
                        <li>NaCl: 58 g</li>
                        <li>Sodium citrate (Na₃C₆H₅O₇·2H₂O): 4 g</li>
                        <li>Distilled water se 1 L volume banao</li>
                        <li>NaOH se pH 5.0-5.5 adjust karein</li>
                        <li><strong>Function:</strong> (1) Ionic strength constant rakhta hai, (2) pH buffer karta hai, (3) Interfering ions (Al³⁺, Fe³⁺) ko complex banake mask karta hai</li>
                    </ul>
                </li>
                <li><strong>Standard fluoride solutions:</strong> 0.1, 1.0, 10, 100 mg F/L</li>
            </ul>

            <h5 class="font-semibold mt-4 text-blue-700">Procedure (ISE Method)</h5>
            <ol class="list-decimal list-outside pl-5 space-y-1 text-sm">
                <li>Electrode ko <strong>pre-condition</strong> karein: 10⁻⁴ M NaF solution mein 1 hour soak karein</li>
                <li><strong>Calibration:</strong> 50 ml standard + 50 ml TISAB mix karein polyethylene beaker mein</li>
                <li>Low to high concentration order mein standards measure karein (10⁻⁶ to 10⁻¹ M range)</li>
                <li>Electrode aur stir bar ko beaker mein dip karein, gentle stirring karein</li>
                <li>Stable reading tak wait karein (usually 3-5 minutes) — ±0.2 mV drift acceptable</li>
                <li>mV readings note karein, semi-log graph plot karein (log [F⁻] vs mV)</li>
                <li><strong>Sample measurement:</strong> 50 ml sample + 50 ml TISAB mix karein, reading lein</li>
                <li>Graph se ya direct concentration mode mein fluoride concentration read karein</li>
            </ol>

            <h5 class="font-semibold mt-4 text-blue-700">Calculation (ISE)</h5>
            <pre class="bg-gray-100 p-3 rounded text-sm"><code>Fluoride (mg/L) = [Meter reading ya calibration graph se concentration] × Dilution factor

Dilution factor = Total volume / Sample volume = (50+50)/50 = 2

Agar sample 25 ml liya aur TISAB 25 ml, toh dilution factor = 2</code></pre>

            <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <h5 class="font-semibold text-green-800">✅ Advantages of ISE Method</h5>
                <ul class="text-sm text-green-700">
                    <li>Wide working range (0.02 to 2000 mg/L)</li>
                    <li>Rapid analysis — 3-5 minutes per sample</li>
                    <li>Minimal sample preparation</li>
                    <li>TISAB automatically handles many interferences</li>
                    <li>Non-destructive — sample can be recovered</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📚 References</h5>
                <ul class="text-xs text-blue-700">
                    <li><strong>APHA 4500-F⁻ B:</strong> Standard Methods for the Examination of Water and Wastewater, 23rd Edition — SPADNS Method</li>
                    <li><strong>APHA 4500-F⁻ C:</strong> Ion Selective Electrode Method</li>
                    <li><strong>IS 10500:2012:</strong> Indian Standard for Drinking Water Specification (BIS)</li>
                    <li><strong>WHO Guidelines for Drinking-water Quality, 4th Edition (2017):</strong> Fluoride in Drinking Water</li>
                    <li>Fawell J. et al. (2006). "Fluoride in Drinking-water", WHO/IWA Publishing</li>
                </ul>
            </div>
        </div>
    `
},

{
    id: 'iron',
    title: 'Iron Detection (Paani mein Iron/Loha ka Pata Lagana)',
    intro: 'Phenanthroline spectrophotometric method ka use karke paani mein total iron, ferrous (Fe²⁺), aur ferric (Fe³⁺) iron ka determination. Iron ek essential trace element hai lekin excess levels taste, staining aur health issues cause karte hain.',
    
    content: `
        <div class="prose max-w-none prose-red">
            <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <h4 class="text-red-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-red-700"><strong>Iron (Fe)</strong> paani mein naturally soil aur rock minerals (hematite-Fe₂O₃, magnetite-Fe₃O₄, pyrite-FeS₂, siderite-FeCO₃) se leaching ke through aata hai. Industrial sources mein steel industry, mining, acid mine drainage, corrosion of iron pipes prominent hain.</p>
                
                <p class="text-red-700 mt-2"><strong>Forms of Iron in Water:</strong></p>
                <ul class="text-red-700 text-sm">
                    <li><strong>Ferrous iron (Fe²⁺):</strong> Soluble, clear water mein present, anaerobic/reducing conditions mein stable</li>
                    <li><strong>Ferric iron (Fe³⁺):</strong> Insoluble (forms Fe(OH)₃ precipitate), aerobic conditions mein oxidize hokar ferrous se banta hai, rust/turbidity cause karta hai</li>
                    <li><strong>Organically bound iron:</strong> Humic/fulvic acids ke saath complex</li>
                    <li><strong>Particulate iron:</strong> Suspended iron oxide/hydroxide particles</li>
                </ul>
                
                <p class="text-red-700 mt-2"><strong>Problems due to Excess Iron:</strong></p>
                <ul class="text-red-700 text-sm">
                    <li><strong>Aesthetic issues:</strong> Metallic taste (threshold ~0.3 mg/L), rust-colored stains on fixtures/laundry</li>
                    <li><strong>Operational problems:</strong> Pipe corrosion, bacterial growth (iron bacteria - <em>Gallionella, Leptothrix</em>)</li>
                    <li><strong>Health:</strong> Generally non-toxic, but &gt;10 mg/L can cause gastric distress; hemochromatosis patients ke liye harmful</li>
                </ul>
                
                <p class="text-red-700 mt-2"><strong>Standards:</strong> WHO guideline = 0.3 mg/L (aesthetic), IS 10500:2012 acceptable limit = 0.3 mg/L, permissible = 1.0 mg/L</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-red-800">🧪 Phenanthroline Method (Ferrous Iron Measurement)</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-red-700">Scientific Principle</h5>
                <p><strong>1,10-Phenanthroline (Orthophenanthroline, C₁₂H₈N₂)</strong> ek heterocyclic organic compound hai jo <strong>ferrous iron (Fe²⁺)</strong> ke saath highly specific aur stable colored complex banata hai.</p>
                
                <p class="mt-2"><strong>Complex Formation Reaction:</strong></p>
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>Fe²⁺ + 3 (C₁₂H₈N₂) → [Fe(C₁₂H₈N₂)₃]²⁺
(Ferrous ion) + (Phenanthroline) → (Ferroin Complex - ORANGE-RED)

Complex structure: Octahedral geometry, coordination number = 6
Color: Intense orange-red
λmax = 510 nm
Molar absorptivity (ε) = 11,000 L·mol⁻¹·cm⁻¹ (매우 sensitive)</code></pre>
                
                <p class="mt-2"><strong>Specificity:</strong></p>
                <ul class="text-sm">
                    <li>Phenanthroline <strong>specifically Fe²⁺ ke saath react</strong> karta hai — Fe³⁺ direct react nahi karta</li>
                    <li>Fe³⁺ ko measure karne ke liye pehle <strong>reduction to Fe²⁺ required</strong> (using hydroxylamine)</li>
                    <li>Complex formation pH 3-9 range mein quantitative hai, optimal pH 3.2-3.3</li>
                    <li>Complex extremely stable hai — color 6 months tak stable rehta hai</li>
                </ul>
                
                <p class="mt-2"><strong>Total Iron Determination Strategy:</strong></p>
                <ol class="text-sm">
                    <li>Sample mein present Fe³⁺ ko <strong>hydroxylamine (NH₂OH·HCl)</strong> se reduce karke Fe²⁺ mein convert karo</li>
                    <li>Ab total iron (Fe²⁺ original + Fe²⁺ from reduced Fe³⁺) ko phenanthroline se complex banao</li>
                    <li>Absorbance measure karo at 510 nm</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-red-700">Apparatus Required</h5>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li><strong>Spectrophotometer</strong> — 510 nm wavelength</li>
                <li>Cuvettes (1 cm or 5 cm path length, depending on iron concentration)</li>
                <li>Volumetric flasks (50 ml, 100 ml)</li>
                <li>Pipettes (volumetric aur graduated)</li>
                <li>pH meter</li>
                <li>Acid-washed glassware (trace iron contamination se bachne ke liye)</li>
            </ul>

            <h5 class="font-semibold mt-4 text-red-700">Reagents</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>1. Hydroxylamine Hydrochloride Solution (Reducing Agent):</strong></p>
                <ul class="text-sm">
                    <li><strong>10% w/v solution:</strong> 10 g NH₂OH·HCl powder ko 100 ml distilled water mein dissolve karein</li>
                    <li><strong>Function:</strong> Fe³⁺ ko Fe²⁺ mein reduce karta hai:
                        <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>2Fe³⁺ + 2NH₂OH + 2OH⁻ → 2Fe²⁺ + N₂ + 4H₂O</code></pre>
                    </li>
                    <li>Fresh prepare karein (oxidize ho sakta hai with time)</li>
                </ul>
                
                <p class="mt-3"><strong>2. 1,10-Phenanthroline Solution:</strong></p>
                <ul class="text-sm">
                    <li><strong>0.1% (1 g/L) solution:</strong> 
                        <ul class="ml-5 list-circle">
                            <li>100 mg 1,10-phenanthroline monohydrate ko</li>
                            <li>80°C hot distilled water mein dissolve karein</li>
                            <li>Cool karke 100 ml volume banao</li>
                        </ul>
                    </li>
                    <li>Alternative: 0.5 g phenanthroline + 0.2 g ascorbic acid (reducing agent already included)</li>
                    <li>Amber bottle mein store (light-sensitive)</li>
                    <li>Shelf life: 6 months</li>
                </ul>
                
                <p class="mt-3"><strong>3. Ammonium Acetate Buffer Solution:</strong></p>
                <ul class="text-sm">
                    <li>250 g ammonium acetate (CH₃COONH₄) ko 150 ml distilled water mein dissolve karein</li>
                    <li>700 ml glacial acetic acid add karein</li>
                    <li><strong>Final pH 3.5 maintain</strong> — optimal phenanthroline complex formation ke liye</li>
                </ul>
                
                <p class="mt-3"><strong>4. Hydrochloric Acid (1+1):</strong></p>
                <ul class="text-sm">
                    <li>Concentrated HCl aur distilled water equal volumes mein mix karein</li>
                    <li>Sample ko acidify karne ke liye (iron ko solution mein rakhne ke liye, precipitation prevent)</li>
                </ul>
                
                <p class="mt-3"><strong>5. Standard Iron Solution:</strong></p>
                <ul class="text-sm">
                    <li><strong>Stock (1000 mg Fe/L):</strong>
                        <ul class="ml-5 list-circle">
                            <li>1.404 g ferrous ammonium sulfate [(NH₄)₂Fe(SO₄)₂·6H₂O] ko distilled water mein dissolve karein</li>
                            <li>20 ml conc. H₂SO₄ add karein (oxidation prevent karne ke liye)</li>
                            <li>1 liter volume banao</li>
                        </ul>
                    </li>
                    <li><strong>Working standards:</strong> Stock se dilute karke 0, 0.1, 0.2, 0.5, 1.0, 2.0, 5.0 mg Fe/L prepare karein</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-red-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>A. Sample Preservation (Collection ke time):</strong></p>
                <ol class="text-sm">
                    <li>Sample collect karte waqt container ko <strong>HNO₃ se pre-acidify</strong> karein (pH &lt;2) — iron precipitation prevent hota hai</li>
                    <li>Sample ko <strong>immediately analyze</strong> karein ya refrigerate karke 6 months tak store kar sakte hain</li>
                </ol>
                
                <p class="mt-3"><strong>B. Total Iron Measurement:</strong></p>
                <ol class="text-sm" start="3">
                    <li><strong>50 ml sample</strong> volumetric flask mein lein (agar iron concentration high hai toh dilute karein)</li>
                    <li><strong>2 ml HCl (1+1)</strong> add karein — acidic pH maintain</li>
                    <li><strong>1 ml hydroxylamine solution</strong> add karein — Fe³⁺ reduction ke liye</li>
                    <li>Mix karke <strong>5 minutes wait</strong> — complete reduction hone tak</li>
                    <li><strong>10 ml ammonium acetate buffer</strong> add karein — pH 3.5 adjust</li>
                    <li><strong>4 ml phenanthroline solution</strong> add karein</li>
                    <li>Distilled water se <strong>50 ml volume</strong> make up karein</li>
                    <li>Thoroughly mix karke <strong>10-15 minutes stand</strong> — complete color development</li>
                </ol>
                
                <p class="mt-3"><strong>C. Spectrophotometric Reading:</strong></p>
                <ol class="text-sm" start="12">
                    <li>Spectrophotometer ko <strong>510 nm</strong> par set karein</li>
                    <li><strong>Blank</strong> prepare karein (distilled water + all reagents except sample)</li>
                    <li>Standards run karke <strong>calibration curve</strong> plot karein</li>
                    <li>Sample ka absorbance measure karein</li>
                    <li>Curve se iron concentration read karein</li>
                </ol>
                
                <p class="mt-3"><strong>D. Ferrous Iron (Fe²⁺) Only — Separate Measurement:</strong></p>
                <ol class="text-sm">
                    <li>Hydroxylamine <strong>SKIP</strong> karein — direct phenanthroline add karein</li>
                    <li>Yeh reading sirf originally present Fe²⁺ ko measure karegi</li>
                    <li>Ferric iron (Fe³⁺) = Total Iron - Ferrous Iron</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-red-700">Calculation</h5>
            <div class="bg-gray-100 p-3 rounded">
                <pre class="text-sm"><code><strong>Total Iron (mg Fe/L) = [mg Fe from calibration curve] × (Final volume / Sample volume) × Dilution factor</strong>

Example:
- Sample volume = 50 ml (no dilution)
- Final volume = 50 ml
- Calibration curve reading = 0.8 mg Fe
- Iron concentration = 0.8 × (50/50) × 1 = 0.8 mg/L

Agar 10 ml sample liya aur 50 ml banaya:
Iron = 0.8 × (50/10) = 4.0 mg/L

<strong>Ferric Iron calculation:</strong>
Fe³⁺ (mg/L) = Total Iron (mg/L) - Ferrous Iron (Fe²⁺, mg/L)</code></pre>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Interferences & Troubleshooting</h5>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-yellow-100">
                            <th class="border p-2">Interfering Substance</th>
                            <th class="border p-2">Effect</th>
                            <th class="border p-2">Remedy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2"><strong>Copper (Cu²⁺)</strong></td>
                            <td class="border p-2">Blue complex forms (λmax 435 nm)</td>
                            <td class="border p-2">Agar &gt;10 mg/L toh 510 nm par interference minimal; ya potassium cyanide se mask (toxic!)</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Nickel (Ni²⁺)</strong></td>
                            <td class="border p-2">&gt;5 mg/L positive error</td>
                            <td class="border p-2">Citrate or tartrate se complex banao</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Cobalt (Co²⁺)</strong></td>
                            <td class="border p-2">Yellow complex</td>
                            <td class="border p-2">Usually &lt;1 mg/L in natural waters — negligible</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Color/Turbidity</strong></td>
                            <td class="border p-2">High background absorbance</td>
                            <td class="border p-2">Sample ko filter karein (0.45 μm); true color ke liye separate blank without phenanthroline</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Strong oxidizing agents</strong></td>
                            <td class="border p-2">Phenanthroline oxidize kar sakte hain</td>
                            <td class="border p-2">Excess hydroxylamine use karein (scavenges oxidants)</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Polyphosphates</strong></td>
                            <td class="border p-2">Iron ko sequester karte hain → low reading</td>
                            <td class="border p-2">Acid digestion required (sample ko HNO₃/H₂SO₄ mein boil karke organic matter aur complexed iron release karein)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">🔬 Alternative Methods (Brief)</h5>
                <p class="text-sm text-blue-700 mt-2"><strong>1. Atomic Absorption Spectroscopy (AAS):</strong></p>
                <ul class="text-xs text-blue-700 ml-5 list-disc">
                    <li>Detection limit: 0.005 mg/L (매우 sensitive)</li>
                    <li>Flame AAS at 248.3 nm wavelength</li>
                    <li>No color/turbidity interference</li>
                    <li>Expensive equipment required</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-2"><strong>2. ICP-MS (Inductively Coupled Plasma Mass Spectrometry):</strong></p>
                <ul class="text-xs text-blue-700 ml-5 list-disc">
                    <li>Ultra-trace detection (sub-ppb levels)</li>
                    <li>Multi-element capability</li>
                    <li>Highly expensive</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-2"><strong>3. Ferrozine Method:</strong></p>
                <ul class="text-xs text-blue-700 ml-5 list-disc">
                    <li>Alternative to phenanthroline — ferrozine reagent (3-(2-pyridyl)-5,6-diphenyl-1,2,4-triazine-p,p'-disulfonic acid)</li>
                    <li>λmax = 562 nm, higher molar absorptivity</li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <h5 class="font-semibold text-green-800">💡 Quality Control Tips</h5>
                <ul class="text-sm text-green-700">
                    <li><strong>Glassware cleaning:</strong> HCl (1+1) se rinse karke iron contamination remove karein</li>
                    <li><strong>Reagent blank:</strong> Har batch ke saath run karein — should be &lt;0.01 mg/L</li>
                    <li><strong>Check standard:</strong> Known concentration ka standard run karke ±10% recovery verify karein</li>
                    <li><strong>Duplicate analysis:</strong> Har 10 samples mein ek duplicate — precision check (&lt;5% RSD acceptable)</li>
                    <li><strong>Calibration verification:</strong> Mid-range standard har 10 samples ke baad re-check</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📚 References</h5>
                <ul class="text-xs text-blue-700">
                    <li><strong>APHA 3500-Fe B:</strong> Standard Methods for the Examination of Water and Wastewater, 23rd Ed. — Phenanthroline Method</li>
                    <li><strong>IS 3025 (Part 53):2003:</strong> Methods of Sampling and Test for Water - Iron</li>
                    <li><strong>EPA Method 200.7:</strong> Determination of Metals by ICP</li>
                    <li><strong>WHO Guidelines (2017):</strong> Iron in Drinking-water, Background document</li>
                    <li>Saywell, L.G. and Cunningham, B.B. (1937). "Determination of Iron: Colorimetric o-Phenanthroline Method", <em>Ind. Eng. Chem. Anal. Ed.</em>, 9, 67-69</li>
                </ul>
            </div>
        </div>
    `
},

{
    id: 'magnesium',
    title: 'Magnesium Detection (Paani mein Magnesium ka Pata Lagana)',
    intro: 'Calculation method using Total Hardness aur Calcium Hardness ke data se magnesium ka determination. Yeh indirect lekin accurate method hai jo routine water analysis mein widely use hota hai.',
    
    content: `
        <div class="prose max-w-none prose-purple">
            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                <h4 class="text-purple-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-purple-700"><strong>Magnesium (Mg²⁺)</strong> paani mein naturally occurring divalent cation hai jo magnesium-bearing minerals (dolomite-CaMg(CO₃)₂, magnesite-MgCO₃, serpentine minerals) ke weathering se aata hai. Seawater mein magnesium concentration ~1300 mg/L hota hai (second most abundant cation after sodium).</p>
                
                <p class="text-purple-700 mt-2"><strong>Role & Significance:</strong></p>
                <ul class="text-purple-700 text-sm">
                    <li><strong>Water hardness contributor:</strong> Calcium ke saath magnesium bhi hardness cause karta hai (soap lather reduce, scale formation)</li>
                    <li><strong>Health benefits:</strong> Essential mineral — enzyme activation, protein synthesis, nerve/muscle function regulate karta hai</li>
                    <li><strong>Taste effect:</strong> &gt;125 mg/L se bitter taste develop hota hai</li>
                    <li><strong>Laxative effect:</strong> High concentration (especially magnesium sulfate ~500 mg/L) diarrhea cause kar sakta hai</li>
                </ul>
                
                <p class="text-purple-700 mt-2"><strong>Standards:</strong> WHO — No health-based guideline value; IS 10500:2012 — Acceptable 30 mg/L, Permissible 100 mg/L</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-purple-800">🧮 Calculation Method (Indirect Determination)</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-purple-700">Scientific Principle</h5>
                <p><strong>Water hardness</strong> mainly calcium aur magnesium ions ki wajah se hota hai. Conventional EDTA titration method se hum determine karte hain:</p>
                
                <ol class="text-sm mt-2">
                    <li><strong>Total Hardness (TH):</strong> Ca²⁺ + Mg²⁺ combined measurement (as CaCO₃ equivalent)</li>
                    <li><strong>Calcium Hardness (CH):</strong> Sirf Ca²⁺ measurement (as CaCO₃ equivalent)</li>
                </ol>
                
                <p class="mt-2"><strong>Logical Derivation:</strong></p>
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>Total Hardness = Calcium Hardness + Magnesium Hardness
Therefore:
<strong>Magnesium Hardness = Total Hardness - Calcium Hardness</strong> (all in mg/L as CaCO₃)

Magnesium hardness ko actual Mg²⁺ concentration mein convert karne ke liye:
<strong>Mg²⁺ (mg/L) = Magnesium Hardness (mg/L as CaCO₃) × Conversion Factor</strong></code></pre>
                
                <p class="mt-2"><strong>Conversion Factor Derivation:</strong></p>
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>Hardness "as CaCO₃" ek conventional expression hai based on calcium carbonate equivalent weight.

Equivalent weight of CaCO₃ = Molecular weight / Valence = 100 / 2 = 50
Equivalent weight of Mg²⁺ = Atomic weight / Valence = 24.3 / 2 = 12.15

Conversion factor = Equivalent weight of Mg / Equivalent weight of CaCO₃
                  = 12.15 / 50 = <strong>0.243</strong>

Therefore:
<strong>Mg²⁺ (mg/L) = Magnesium Hardness (mg/L as CaCO₃) × 0.243</strong></code></pre>
            </div>

            <h5 class="font-semibold mt-4 text-purple-700">Prerequisites (Required Data)</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p class="text-sm">Is method ko use karne ke liye aapko pehle determine karna hoga:</p>
                
                <p class="mt-3"><strong>1. Total Hardness (EDTA Titration with EBT indicator):</strong></p>
                <ul class="text-sm ml-5 list-disc">
                    <li>Sample ko pH 10 buffer se treat karein</li>
                    <li>Eriochrome Black T (EBT) indicator add karein — wine-red color</li>
                    <li>Standard EDTA solution se titrate karein until blue endpoint</li>
                    <li>Total Hardness (mg/L as CaCO₃) calculate karein</li>
                    <li><em>Detailed procedure → see "Total Hardness" test section</em></li>
                </ul>
                
                <p class="mt-3"><strong>2. Calcium Hardness (EDTA Titration with Murexide/Patton-Reeder indicator):</strong></p>
                <ul class="text-sm ml-5 list-disc">
                    <li>Sample ko pH 12-13 highly alkaline condition mein adjust karein (NaOH ya KOH use karke)</li>
                    <li>High pH par Mg(OH)₂ precipitate ho jaata hai → sirf Ca²⁺ solution mein rehta hai</li>
                    <li>Murexide indicator add karein — pink color</li>
                    <li>EDTA se titrate karein until purple endpoint</li>
                    <li>Calcium Hardness (mg/L as CaCO₃) calculate karein</li>
                    <li><em>Detailed procedure → see "Calcium" test section</em></li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-purple-700">Calculation Formula (Complete)</h5>
            <div class="bg-gray-100 p-4 rounded">
                <pre class="text-sm"><code><strong>Step 1: Calculate Magnesium Hardness</strong>
Magnesium Hardness (mg/L as CaCO₃) = Total Hardness - Calcium Hardness

<strong>Step 2: Convert to Mg²⁺ concentration</strong>
Mg²⁺ (mg/L) = Magnesium Hardness (mg/L as CaCO₃) × 0.243

<strong>Alternative formula (direct):</strong>
<strong>Mg²⁺ (mg/L) = [Total Hardness - Calcium Hardness] × 0.243</strong>

---
<strong>Example Calculation:</strong>

Given data:
- Total Hardness = 250 mg/L as CaCO₃
- Calcium Hardness = 150 mg/L as CaCO₃

Solution:
Magnesium Hardness = 250 - 150 = 100 mg/L as CaCO₃
Mg²⁺ = 100 × 0.243 = <strong>24.3 mg/L</strong>

---
<strong>Verification (Mass Balance Check):</strong>
Ca²⁺ from Calcium Hardness = 150 × 0.4 = 60 mg/L (conversion factor for Ca = 20/50 = 0.4)
Mg²⁺ calculated = 24.3 mg/L

Recalculate TH from individual ions:
TH = (Ca²⁺/0.4) + (Mg²⁺/0.243) = (60/0.4) + (24.3/0.243) = 150 + 100 = 250 ✓ (matches)</code></pre>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📊 Interpretation Guide</h5>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-blue-100">
                            <th class="border p-2">Mg²⁺ Concentration</th>
                            <th class="border p-2">Classification</th>
                            <th class="border p-2">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2">&lt; 30 mg/L</td>
                            <td class="border p-2">Low</td>
                            <td class="border p-2">Acceptable for drinking, no taste issues</td>
                        </tr>
                        <tr class="bg-yellow-50">
                            <td class="border p-2">30-100 mg/L</td>
                            <td class="border p-2">Moderate</td>
                            <td class="border p-2">Permissible, possible slight bitter taste</td>
                        </tr>
                        <tr class="bg-orange-50">
                            <td class="border p-2">100-150 mg/L</td>
                            <td class="border p-2">High</td>
                            <td class="border p-2">Bitter taste, laxative effect possible</td>
                        </tr>
                        <tr class="bg-red-50">
                            <td class="border p-2">&gt; 150 mg/L</td>
                            <td class="border p-2">Very High</td>
                            <td class="border p-2">Unacceptable taste, health concerns</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Limitations & Precautions</h5>
                <ul class="text-sm text-yellow-700">
                    <li><strong>Assumes only Ca & Mg contribute to hardness:</strong> Agar paani mein significant amounts of Sr²⁺, Ba²⁺, Fe²⁺ present hain (rare in natural waters) toh error aa sakta hai</li>
                    <li><strong>Accuracy depends on TH and CH measurements:</strong> Titration errors propagate — careful technique required</li>
                    <li><strong>Negative values:</strong> Kabhi-kabhi calculation mein negative Mg²⁺ aa sakta hai agar:
                        <ul class="ml-5 list-circle">
                            <li>Calcium Hardness &gt; Total Hardness (error in titration)</li>
                            <li>Murexide endpoint overshot (excess EDTA added)</li>
                            <li>Solution: Repeat both titrations carefully</li>
                        </ul>
                    </li>
                    <li><strong>Interference in Ca titration:</strong> Agar Mg(OH)₂ completely precipitate nahi hua high pH par, toh some Mg²⁺ will be counted as Ca²⁺ → underestimated Mg²⁺</li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <h5 class="font-semibold text-green-800">🔬 Alternative Direct Methods for Mg²⁺</h5>
                
                <p class="text-sm text-green-700 mt-2"><strong>1. Atomic Absorption Spectroscopy (AAS):</strong></p>
                <ul class="text-xs text-green-700 ml-5 list-disc">
                    <li>Direct measurement at 285.2 nm (Mg resonance line)</li>
                    <li>Detection limit: 0.001 mg/L</li>
                    <li>Lanthanum chloride (LaCl₃) as releasing agent — prevents phosphate/sulfate interference</li>
                    <li>Most accurate method</li>
                </ul>
                
                <p class="text-sm text-green-700 mt-2"><strong>2. ICP-OES (Inductively Coupled Plasma - Optical Emission Spectroscopy):</strong></p>
                <ul class="text-xs text-green-700 ml-5 list-disc">
                    <li>Multi-element analysis capability</li>
                    <li>Wavelength: 279.5 nm or 285.2 nm</li>
                    <li>Very high precision (&lt;2% RSD)</li>
                </ul>
                
                <p class="text-sm text-green-700 mt-2"><strong>3. Titan Yellow (Thiazole Yellow) Colorimetric Method:</strong></p>
                <ul class="text-xs text-green-700 ml-5 list-disc">
                    <li>Mg²⁺ + Titan Yellow (pH 11-12) → Red lake complex</li>
                    <li>Measure absorbance at 540 nm</li>
                    <li>Ca²⁺ interference — remove by precipitation as CaCO₃ at high pH</li>
                    <li>Sensitivity: 0.1-10 mg Mg/L range</li>
                </ul>
                
                <p class="text-sm text-green-700 mt-2"><strong>4. Eriochrome Black T (Direct Mg Titration):</strong></p>
                <ul class="text-xs text-green-700 ml-5 list-disc">
                    <li>First titrate for TH using EBT</li>
                    <li>Separately titrate for Ca using Murexide</li>
                    <li>Mg by difference (same as calculation method)</li>
                </ul>
            </div>

            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
                <h5 class="font-semibold text-purple-800">💡 Practical Tips</h5>
                <ul class="text-sm text-purple-700">
                    <li><strong>Sample freshness:</strong> Hardness titrations preferably within 24 hours of collection</li>
                    <li><strong>pH control critical:</strong> Calcium titration mein pH 12-13 must maintain — check with pH paper</li>
                    <li><strong>Endpoint clarity:</strong> Good lighting conditions mein titration karein; EBT aur Murexide endpoints sharp hone chahiye</li>
                    <li><strong>Duplicate analysis:</strong> Both TH aur CH ka duplicate run karein — difference &lt;5% hona chahiye</li>
                    <li><strong>EDTA standardization:</strong> Regular intervals par EDTA solution ko standard CaCO₃ solution se verify karein</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📚 References</h5>
                <ul class="text-xs text-blue-700">
                    <li><strong>APHA 2340 B:</strong> Standard Methods, 23rd Ed. — Hardness by Calculation</li>
                    <li><strong>APHA 3500-Mg B:</strong> Magnesium by Calculation Method</li>
                    <li><strong>IS 3025 (Part 46):2005:</strong> Methods for Sampling and Test - Magnesium (Calculation)</li>
                    <li><strong>WHO Guidelines (2009):</strong> Calcium and Magnesium in Drinking-water</li>
                    <li><strong>EPA Method 200.7:</strong> Determination of Metals by ICP-OES (Direct Mg measurement)</li>
                </ul>
            </div>
        </div>
   `
}, // ✅ Yahan comma (,) lagayein!

{
    id: 'manganese',
    title: 'Manganese Detection (Paani mein Manganese ka Pata Lagana)',
    intro: 'Persulphate oxidation method ka use karke paani mein dissolved manganese ka spectrophotometric determination. Manganese trace concentrations mein bhi staining aur taste issues cause karta hai.',
    
    content: `
        <div class="prose max-w-none prose-pink">
            <div class="bg-pink-50 border-l-4 border-pink-500 p-4 mb-4">
                <h4 class="text-pink-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-pink-700"><strong>Manganese (Mn)</strong> paani mein naturally occurring transition metal hai jo manganese-bearing minerals (pyrolusite-MnO₂, rhodochrosite-MnCO₃, manganite-MnOOH) se leaching aur groundwater ke anaerobic conditions mein reduction se aata hai. Industrial sources mein steel manufacturing, mining, battery production prominent hain.</p>
                
                <p class="text-pink-700 mt-2"><strong>Oxidation States in Water:</strong></p>
                <ul class="text-pink-700 text-sm">
                    <li><strong>Mn²⁺ (Manganous):</strong> Soluble, colorless, reducing conditions mein stable</li>
                    <li><strong>Mn³⁺:</strong> Unstable, rapidly disproportionates</li>
                    <li><strong>Mn⁴⁺ (Manganic):</strong> Forms MnO₂ (black precipitate), oxidizing conditions mein</li>
                    <li><strong>Mn⁷⁺ (Permanganate, MnO₄⁻):</strong> Intense purple color, strong oxidizing agent — is test mein chromophore</li>
                </ul>
                
                <p class="text-pink-700 mt-2"><strong>Problems due to Manganese:</strong></p>
                <ul class="text-pink-700 text-sm">
                    <li><strong>Aesthetic issues:</strong> &gt;0.05 mg/L se black/brown stains on fixtures, laundry; metallic taste (threshold ~0.05 mg/L)</li>
                    <li><strong>Bacterial growth:</strong> Manganese-oxidizing bacteria (Leptothrix, Crenothrix) cause black slime, pipe clogging</li>
                    <li><strong>Health effects:</strong> High levels (&gt;0.4 mg/L long-term) neurotoxicity — Parkinson's-like symptoms; infants mein developmental issues</li>
                </ul>
                
                <p class="text-pink-700 mt-2"><strong>Standards:</strong> WHO guideline = 0.4 mg/L (health-based), 0.1 mg/L (aesthetic); IS 10500:2012 acceptable = 0.1 mg/L, permissible = 0.3 mg/L</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-pink-800">🧪 Persulphate Oxidation Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-pink-700">Scientific Principle</h5>
                <p>Is method mein Mn²⁺ (colorless, soluble form) ko <strong>Mn⁷⁺ permanganate ion (MnO₄⁻, intense purple color)</strong> tak oxidize karte hain strong oxidizing agent <strong>ammonium persulphate (NH₄)₂S₂O₈</strong> aur <strong>silver nitrate (AgNO₃) catalyst</strong> ki presence mein.</p>
                
                <p class="mt-2"><strong>Oxidation Reaction:</strong></p>
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>2Mn²⁺ + 5S₂O₈²⁻ + 8H₂O → 2MnO₄⁻ + 10SO₄²⁻ + 16H⁺
(Colorless)   (Persulphate)      (PURPLE permanganate)

Complete oxidation pathway:
Mn²⁺ → Mn³⁺ → Mn⁴⁺ (MnO₂) → Mn⁶⁺ → Mn⁷⁺ (MnO₄⁻)

AgNO₃ acts as catalyst — Ag⁺ temporarily oxidized to Ag²⁺ jo reaction ko accelerate karta hai</code></pre>
                
                <p class="mt-2"><strong>Reaction Conditions:</strong></p>
                <ul class="text-sm">
                    <li><strong>Acidic medium required:</strong> H₃PO₄ aur HNO₃ use — provide H⁺ for reaction aur interfering ions ko complex/suppress karte hain</li>
                    <li><strong>Boiling essential:</strong> Reaction kinetically slow hai room temperature par; boiling se complete oxidation 1-2 minutes mein</li>
                    <li><strong>Color measurement:</strong> Permanganate ka λmax = 525 nm (purple color ka characteristic absorption)</li>
                    <li><strong>Molar absorptivity:</strong> ε = 2350 L·mol⁻¹·cm⁻¹ (moderate sensitivity)</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-pink-700">Apparatus Required</h5>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li><strong>Spectrophotometer</strong> — 525 nm wavelength</li>
                <li><strong>Hot plate</strong> or boiling water bath</li>
                <li>Erlenmeyer flasks (250 ml)</li>
                <li>Cuvettes (1 cm or 5 cm path length)</li>
                <li>Volumetric flasks (100 ml)</li>
                <li>Pipettes</li>
                <li>Acid-washed glassware</li>
            </ul>

            <h5 class="font-semibold mt-4 text-pink-700">Reagents</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>1. Special Reagent (Mixed Acid Solution):</strong></p>
                <ul class="text-sm">
                    <li><strong>Composition:</strong>
                        <ul class="ml-5 list-circle">
                            <li>Mercuric sulfate (HgSO₄): 75 g</li>
                            <li>Concentrated nitric acid (HNO₃): 400 ml</li>
                            <li>Concentrated phosphoric acid (H₃PO₄, 85%): 400 ml</li>
                            <li>Silver nitrate (AgNO₃): 200 mg</li>
                            <li>Distilled water se total volume 1 liter banao</li>
                        </ul>
                    </li>
                    <li><strong>Functions:</strong>
                        <ul class="ml-5 list-circle">
                            <li><strong>HNO₃:</strong> Acidic medium maintain, organic matter oxidize</li>
                            <li><strong>H₃PO₄:</strong> Iron (Fe³⁺) ko colorless phosphate complex banake mask karta hai — Fe interference prevent</li>
                            <li><strong>HgSO₄:</strong> Chloride ions ko complex banata hai (HgCl₄²⁻) — chloride persulphate ko consume kar lega otherwise</li>
                            <li><strong>AgNO₃:</strong> Catalyst for Mn oxidation</li>
                        </ul>
                    </li>
                    <li><strong>Preparation note:</strong> HgSO₄ ko pehle thode se distilled water mein dissolve karein, phir acids add karein — exothermic reaction, cool karte rahen</li>
                </ul>
                
                <p class="mt-3"><strong>2. Ammonium Persulphate (Solid):</strong></p>
                <ul class="text-sm">
                    <li>(NH₄)₂S₂O₈ powder — solid form mein use karte hain, fresh hona chahiye</li>
                    <li>Solution nahi banate (persulphate solution unstable hai, decomposes)</li>
                    <li>Store in cool, dark place</li>
                    <li>Approximately <strong>0.5 g per sample</strong> use karenge</li>
                </ul>
                
                <p class="mt-3"><strong>3. Standard Manganese Solution:</strong></p>
                <ul class="text-sm">
                    <li><strong>Stock (1000 mg Mn/L):</strong>
                        <ul class="ml-5 list-circle">
                            <li>Dissolve 1.000 g electrolytic manganese metal (99.9% pure) in</li>
                            <li>10 ml concentrated HNO₃ + 10 ml distilled water</li>
                            <li>Heat gently until completely dissolved</li>
                            <li>Cool karke 1 liter volume banao</li>
                        </ul>
                    </li>
                    <li><strong>Alternative:</strong> 3.076 g MnSO₄·H₂O se bhi bana sakte hain</li>
                    <li><strong>Working standards:</strong> Stock se dilute karke 0, 0.01, 0.05, 0.1, 0.2, 0.5, 1.0 mg Mn/L prepare karein</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-pink-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>A. Sample Preparation:</strong></p>
                <ol class="text-sm">
                    <li><strong>Volume selection:</strong> Expected Mn concentration ke basis par sample volume choose karein:
                        <ul class="ml-5 list-circle">
                            <li>Low Mn (&lt;0.1 mg/L): 100 ml sample</li>
                            <li>Moderate (0.1-1.0 mg/L): 50 ml sample</li>
                            <li>High (&gt;1.0 mg/L): 10-25 ml sample, dilute to 100 ml</li>
                        </ul>
                    </li>
                    <li>Sample ko <strong>Erlenmeyer flask</strong> mein lein</li>
                    <li>Agar sample colored ya turbid hai toh prehle <strong>acid digestion</strong> karein:
                        <ul class="ml-5 list-circle">
                            <li>5 ml conc. HNO₃ add karein</li>
                            <li>Boil karke volume 20-25 ml tak reduce karein</li>
                            <li>Cool karke filter</li>
                        </ul>
                    </li>
                </ol>
                
                <p class="mt-3"><strong>B. Oxidation Reaction:</strong></p>
                <ol class="text-sm" start="4">
                    <li>Sample/treated sample ko Erlenmeyer flask mein lein, distilled water se <strong>~90 ml volume</strong> make up karein</li>
                    <li><strong>5 ml special reagent</strong> pipette karke add karein</li>
                    <li>Mix karein — solution acidic ho jayega</li>
                    <li><strong>0.5 g (spatula tip) ammonium persulphate</strong> add karein</li>
                    <li>Flask ko <strong>hot plate par boil</strong> karein (या boiling water bath mein रखें):</li>
                    <li><strong>1-2 minutes vigorous boiling</strong> — purple color develop hoga (agar Mn present hai)</li>
                    <li>Boiling band karo aur <strong>immediately room temperature tak cool</strong> karein (cold water bath mein)</li>
                </ol>
                
                <p class="mt-3"><strong>C. Volume Make-up & Measurement:</strong></p>
                <ol class="text-sm" start="12">
                    <li>Cooled solution ko <strong>100 ml volumetric flask</strong> mein transfer karein</li>
                    <li>Distilled water se exactly <strong>100 ml volume</strong> banao</li>
                    <li>Mix thoroughly</li>
                    <li><strong>5-10 minutes wait</strong> — color stabilize hone tak</li>
                    <li>Spectrophotometer ko <strong>525 nm</strong> par set karein</li>
                    <li><strong>Blank</strong> prepare karein (distilled water + all reagents, no Mn)</li>
                    <li>Standards run karke <strong>calibration curve</strong> plot karein</li>
                    <li>Sample ka absorbance measure karein</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-pink-700">Calculation</h5>
            <div class="bg-gray-100 p-3 rounded">
                <pre class="text-sm"><code><strong>Manganese (mg Mn/L) = [mg Mn from calibration curve] × (100 / Sample volume in ml)</strong>

Example 1:
- Sample volume taken = 100 ml
- Final volume = 100 ml
- Calibration curve reading = 0.08 mg Mn
- Mn concentration = 0.08 × (100/100) = <strong>0.08 mg/L</strong>

Example 2 (diluted sample):
- Sample volume = 25 ml (diluted to 100 ml before treatment)
- After oxidation, final volume = 100 ml
- Calibration reading = 0.15 mg Mn
- Mn concentration = 0.15 × (100/25) = <strong>0.60 mg/L</strong>

<strong>Detection Range:</strong> 0.01 - 1.0 mg Mn/L (optimal)
For higher concentrations, dilute sample appropriately</code></pre>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Interferences & Solutions</h5>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-yellow-100">
                            <th class="border p-2">Interfering Substance</th>
                            <th class="border p-2">Effect</th>
                            <th class="border p-2">Remedy (Built-in Special Reagent)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2"><strong>Iron (Fe³⁺)</strong></td>
                            <td class="border p-2">Yellow color interferes</td>
                            <td class="border p-2">H₃PO₄ forms colorless FeH₂PO₄²⁺ complex — up to 20 mg/L Fe tolerable</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Chloride (Cl⁻)</strong></td>
                            <td class="border p-2">Consumes persulphate, prevents Mn oxidation</td>
                            <td class="border p-2">HgSO₄ forms HgCl₄²⁻ complex — up to 500 mg/L Cl⁻ manageable</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Organic matter</strong></td>
                            <td class="border p-2">Reduces permanganate (color fades)</td>
                            <td class="border p-2">HNO₃ oxidizes organics during boiling; agar zyada ho toh pre-digestion required</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>Chromium (Cr)</strong></td>
                            <td class="border p-2">Cr³⁺ oxidizes to Cr₂O₇²⁻ (orange color)</td>
                            <td class="border p-2">Usually &lt;0.05 mg/L in natural waters — negligible. Agar high, use ICP/AAS method</td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>High sulfate</strong></td>
                            <td class="border p-2">&gt;200 mg/L may precipitate as BaSO₄ if Ba present</td>
                            <td class="border p-2">Generally no issue; ensure sample clear before reading</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
                <h5 class="font-semibold text-red-800">🔥 Troubleshooting Common Issues</h5>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-red-100">
                            <th class="border p-2">Problem</th>
                            <th class="border p-2">Likely Cause</th>
                            <th class="border p-2">Solution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2">Purple color fades rapidly</td>
                            <td class="border p-2">Excess organic matter reducing MnO₄⁻</td>
                            <td class="border p-2">Pre-digest sample with HNO₃; add more persulphate; boil longer</td>
                        </tr>
                        <tr>
                            <td class="border p-2">No purple color develops</td>
                            <td class="border p-2">Persulphate degraded; insufficient boiling</td>
                            <td class="border p-2">Use fresh persulphate; ensure vigorous boiling 1-2 min; check AgNO₃ in special reagent</td>
                        </tr>
                        <tr>
                            <td class="border p-2">Brown precipitate forms</td>
                            <td class="border p-2">MnO₂ intermediate not fully oxidized</td>
                            <td class="border p-2">Add more persulphate; boil longer; ensure acidic pH</td>
                        </tr>
                        <tr>
                            <td class="border p-2">Yellow tint remains</td>
                            <td class="border p-2">Excess Fe not complexed</td>
                            <td class="border p-2">Add more H₃PO₄; or dilute sample if Fe &gt;20 mg/L</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">🔬 Alternative Methods</h5>
                
                <p class="text-sm text-blue-700 mt-2"><strong>1. Atomic Absorption Spectroscopy (AAS):</strong></p>
                <ul class="text-xs text-blue-700 ml-5 list-disc">
                    <li>Direct aspiration method at 279.5 nm</li>
                    <li>Detection limit: 0.002 mg/L</li>
                    <li>No interference from color/turbidity</li>
                    <li>Preferred for low-level Mn (&lt;0.05 mg/L)</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-2"><strong>2. ICP-MS/ICP-OES:</strong></p>
                <ul class="text-xs text-blue-700 ml-5 list-disc">
                    <li>Multi-element analysis</li>
                    <li>ICP-MS: sub-ppb detection (ultra-trace)</li>
                    <li>ICP-OES wavelength: 257.6 nm or 259.4 nm</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-2"><strong>3. Formaldoxime Method (Colorimetric):</strong></p>
                <ul class="text-xs text-blue-700 ml-5 list-disc">
                    <li>Mn²⁺ + Formaldoxime → Brown complex at pH 8-9</li>
                    <li>Measure at 450 nm</li>
                    <li>More sensitive than persulphate (range 0.001-0.1 mg/L)</li>
                    <li>Fe, Cu interference — masking agents required</li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                <h5 class="font-semibold text-green-800">💡 Quality Control</h5>
                <ul class="text-sm text-green-700">
                    <li><strong>Reagent blank:</strong> Should give absorbance &lt;0.005 at 525 nm</li>
                    <li><strong>Check standard:</strong> 0.1 mg/L Mn standard — recovery 90-110%</li>
                    <li><strong>Duplicate samples:</strong> RSD &lt;10% for Mn &gt;0.05 mg/L</li>
                    <li><strong>Calibration linearity:</strong> R² &gt;0.995 for 0-1.0 mg/L range</li>
                    <li><strong>Persulphate test:</strong> Keep fresh — should vigorously oxidize Mn²⁺ standard to purple</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📚 References</h5>
                <ul class="text-xs text-blue-700">
                    <li><strong>APHA 3500-Mn B:</strong> Standard Methods, 23rd Ed. — Persulphate Method</li>
                    <li><strong>IS 3025 (Part 54):2003:</strong> Methods for Sampling and Test - Manganese (Persulphate)</li>
                    <li><strong>EPA Method 200.7:</strong> ICP-OES for Mn</li>
                    <li><strong>WHO Guidelines (2017):</strong> Manganese in Drinking-water, Background document</li>
                    <li>Willard & Greathouse (1917). "The Colorimetric Determination of Manganese by Oxidation with Periodate", <em>J. Am. Chem. Soc.</em> 39, 2366</li>
                </ul>
            </div>
        </div>
    `
},

{
    id: 'ammonia',
    title: 'Ammonia Nitrogen Detection (NH₃-N/Ammoniacal Nitrogen)',
    intro: 'Distillation-Titrimetric method, Phenate colorimetric method, ya Ion Selective Electrode method se paani mein ammonia nitrogen ka determination. Ammonia water pollution ka important indicator hai.',
    
    content: `
        <div class="prose max-w-none prose-teal">
            <div class="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4">
                <h4 class="text-teal-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-teal-700"><strong>Ammonia (NH₃)</strong> aur <strong>ammonium ion (NH₄⁺)</strong> paani mein nitrogen ka reduced form hai. Yeh mainly sewage discharge, agricultural runoff (fertilizers), industrial waste, aur organic matter ke decomposition se aata hai.</p>
                
                <p class="text-teal-700 mt-2"><strong>Chemistry in Water:</strong></p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>NH₃ (ammonia, uncharged) + H₂O ⇌ NH₄⁺ (ammonium ion) + OH⁻

pH-dependent equilibrium:
- pH &lt; 7: NH₄⁺ dominant form (99% at pH 7)
- pH 9.25: 50% NH₃, 50% NH₄⁺ (pKa value)
- pH &gt; 11: NH₃ dominant (free ammonia, toxic form)

Conventionally reported as: <strong>NH₃-N (ammonia-nitrogen)</strong> ya <strong>NH₄-N (ammonium-nitrogen)</strong></code></pre>
                
                <p class="text-teal-700 mt-2"><strong>Environmental & Health Significance:</strong></p>
                <ul class="text-teal-700 text-sm">
                    <li><strong>Pollution indicator:</strong> High NH₃-N = recent sewage contamination (organic pollution)</li>
                    <li><strong>Toxicity to aquatic life:</strong> Free NH₃ (un-ionized) highly toxic to fish — damages gills, LC₅₀ ~0.2-2 mg NH₃/L</li>
                    <li><strong>Chlorination problem:</strong> NH₃ reacts with chlorine forming chloramines (bad taste/odor, weak disinfection)</li>
                    <li><strong>Nitrification:</strong> NH₄⁺ → NO₂⁻ → NO₃⁻ by bacteria (consumes dissolved oxygen in water bodies)</li>
                    <li><strong>Drinking water:</strong> No health-based guideline (odor threshold ~1.5 mg/L), but presence indicates fecal contamination</li>
                </ul>
                
                <p class="text-teal-700 mt-2"><strong>Standards:</strong> IS 10500:2012 — No relaxation for NH₃-N in drinking water (should be absent); EPA secondary standard (non-enforceable) ~0.5 mg/L</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-teal-800">🧪 Method 1: Preliminary Distillation + Titrimetric Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-teal-700">Scientific Principle</h5>
                <p><strong>Step 1: Distillation</strong> — Sample ko <strong>alkaline conditions (pH &gt;9.5)</strong> mein boil karte hain. High pH par NH₄⁺ ions NH₃ gas mein convert ho jaate hain:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>NH₄⁺ + OH⁻ → NH₃↑ (gas) + H₂O</code></pre>
                
                <p class="mt-2">Liberated NH₃ gas ko <strong>steam distillation</strong> se condenser ke through pass karke <strong>boric acid (H₃BO₃) solution</strong> mein absorb karte hain:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>NH₃ + H₃BO₃ → NH₄⁺ + H₂BO₃⁻
(Ammonia trapped as ammonium borate)</code></pre>
                
                <p class="mt-2"><strong>Step 2: Titration</strong> — Trapped ammonia ko <strong>standard sulfuric acid (H₂SO₄)</strong> se titrate karte hain:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>2NH₄⁺ + H₂SO₄ → (NH₄)₂SO₄
Endpoint detection: Mixed indicator (Methyl red + Methylene blue) — Green → Pink/Violet</code></pre>
                
                <p class="mt-2"><strong>Calculation basis:</strong> 1 ml of 0.02N H₂SO₄ ≡ 0.28 mg NH₃-N</p>
            </div>

            <h5 class="font-semibold mt-4 text-teal-700">Apparatus (Distillation Method)</h5>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li><strong>Distillation apparatus:</strong>
                    <ul class="ml-5 list-circle">
                        <li>Distillation flask (800-1000 ml Kjeldahl flask)</li>
                        <li>Connecting tube with trap</li>
                        <li>Condenser (Liebig or Graham type)</li>
                        <li>Heating mantle or burner</li>
                    </ul>
                </li>
                <li>Erlenmeyer flasks (500 ml) for collecting distillate</li>
                <li>Burette (50 ml) for titration</li>
                <li>pH meter</li>
            </ul>

            <h5 class="font-semibold mt-4 text-teal-700">Reagents (Titrimetric Method)</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>1. Borate Buffer Solution (pH 9.5):</strong></p>
                <ul class="text-sm">
                    <li>Dissolve 88 ml 0.1M boric acid (H₃BO₃, 6.2 g/L) +</li>
                    <li>12 ml 0.1M NaOH in distilled water, make 100 ml</li>
                    <li>Check pH = 9.5 ± 0.1</li>
                    <li><strong>Function:</strong> Raises sample pH to convert NH₄⁺ → NH₃ for distillation</li>
                </ul>
                
                <p class="mt-3"><strong>2. Indicating Boric Acid Solution (Absorbing solution):</strong></p>
                <ul class="text-sm">
                    <li>20 g boric acid (H₃BO₃) in 1 L distilled water</li>
                    <li>Add <strong>mixed indicator:</strong>
                        <ul class="ml-5 list-circle">
                            <li>20 ml methyl red solution (0.2% in 95% ethanol)</li>
                            <li>10 ml methylene blue solution (0.2% in 95% ethanol)</li>
                        </ul>
                    </li>
                    <li>Final color: Pale greenish-blue</li>
                </ul>
                
                <p class="mt-3"><strong>3. Standard Sulfuric Acid (0.02N H₂SO₄):</strong></p>
                <ul class="text-sm">
                    <li>Dilute 0.556 ml conc. H₂SO₄ to 1 liter with distilled water</li>
                    <li>Standardize against 0.02N Na₂CO₃ solution</li>
                    <li>Store in glass-stoppered bottle</li>
                </ul>
                
                <p class="mt-3"><strong>4. Sodium Hydroxide Solution (10N NaOH):</strong></p>
                <ul class="text-sm">
                    <li>400 g NaOH pellets in 1 L distilled water</li>
                    <li>Strong alkaline for pH adjustment during distillation</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-teal-700">Detailed Procedure (Distillation-Titration)</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>A. Sample Preparation & Distillation Setup:</strong></p>
                <ol class="text-sm">
                    <li><strong>500 ml sample</strong> distillation flask mein transfer karein (agar NH₃ concentration low expected hai toh; 100-250 ml for high NH₃)</li>
                    <li>Sample pH check karein — agar pH &lt;6 hai toh NaOH se neutralize karein</li>
                    <li><strong>25 ml borate buffer</strong> add karein — pH 9.5 ho jayega (NH₃ liberation ke liye optimal)</li>
                    <li>Anti-bumping granules (boiling chips) add karein — smooth boiling ke liye</li>
                    <li>Distillation apparatus assemble karein</li>
                    <li>Condenser outlet tube ko <strong>50 ml indicating boric acid solution</strong> (Erlenmeyer flask mein) ke neeche dip karein — ammonia absorb hoga</li>
                </ol>
                
                <p class="mt-3"><strong>B. Distillation Process:</strong></p>
                <ol class="text-sm" start="7">
                    <li>Heating start karein — gentle boiling maintain karein</li>
                    <li><strong>200 ml distillate</strong> collect karein (approx. 30-40 minutes) — yeh volume sufficient hai almost all NH₃ collect karne ke liye</li>
                    <li>Distillation ke dauraan receiving flask mein boric acid solution ka color <strong>greenish se blue/purple</strong> shift hoga (ammonia absorption indicate karta hai)</li>
                    <li>Distillation complete hone par condenser tube ko boric acid se bahar निकालें, distilled water se rinse karein (rinse water bhi receiving flask mein collect karein)</li>
                </ol>
                
                <p class="mt-3"><strong>C. Titration:</strong></p>
                <ol class="text-sm" start="11">
                    <li>Distillate containing absorbed ammonia (now blue/purple color) ko burette stand ke neeche rakhein</li>
                    <li><strong>0.02N H₂SO₄</strong> se titrate karein</li>
                    <li>Endpoint: Blue/purple color → <strong>Pale pink/violet</strong> (methyl red dominates)</li>
                    <li>Volume of H₂SO₄ consumed note karein = <strong>A ml</strong></li>
                    <li><strong>Blank titration:</strong> 50 ml boric acid solution (without distillate) ko same H₂SO₄ se titrate karein = <strong>B ml</strong> (usually ~0.1-0.2 ml)</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-teal-700">Calculation (Titrimetric Method)</h5>
            <div class="bg-gray-100 p-3 rounded">
                <pre class="text-sm"><code><strong>NH₃-N (mg/L) = [(A - B) × 280] / Sample volume (ml)</strong>

Where:
A = ml of 0.02N H₂SO₄ used for sample distillate
B = ml of 0.02N H₂SO₄ used for blank
280 = Conversion factor (1 ml 0.02N H₂SO₄ ≡ 0.28 mg N; scaled to 1000 ml = 280)

---
<strong>Example Calculation:</strong>

Given:
- Sample volume distilled = 500 ml
- Titration volume for sample (A) = 8.5 ml
- Blank titration (B) = 0.2 ml

Solution:
NH₃-N = [(8.5 - 0.2) × 280] / 500
      = [8.3 × 280] / 500
      = 2324 / 500
      = <strong>4.65 mg NH₃-N/L</strong>

---
<strong>To convert NH₃-N to NH₃ (total ammonia):</strong>
NH₃ (mg/L) = NH₃-N (mg/L) × (17/14) = NH₃-N × 1.214

Example: 4.65 mg NH₃-N/L = 4.65 × 1.214 = 5.64 mg NH₃/L</code></pre>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-teal-800">🧪 Method 2: Phenate (Nessler) Colorimetric Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-teal-700">Scientific Principle</h5>
                <p><strong>Phenate method</strong> (also called <strong>Indophenol Blue method</strong>) mein ammonia, <strong>phenol</strong> aur <strong>hypochlorite</strong> ke saath alkaline medium mein react karke <strong>indophenol blue</strong> (intense blue color) banata hai, jo <strong>sodium nitroprusside catalyst</strong> ki presence mein intensify hota hai.</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>NH₃ + Phenol + OCl⁻ (alkaline pH, catalyst) → Indophenol (Blue)
λmax = 640 nm

Reaction sequence:
1. Hypochlorite oxidizes ammonia to monochloramine (NH₂Cl)
2. Monochloramine reacts with phenol forming p-benzoquinone monoimine
3. Further oxidation & condensation → Indophenol blue dye

Nitroprusside [Fe(CN)₅NO]²⁻ acts as catalyst — intensifies color</code></pre>
                
                <p class="mt-2"><strong>Advantages:</strong> No distillation required (direct method), rapid (30 min), sensitive (0.01-0.5 mg NH₃-N/L range)</p>
            </div>

            <h5 class="font-semibold mt-4 text-teal-700">Apparatus (Phenate Method)</h5>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li><strong>Spectrophotometer</strong> — 640 nm wavelength</li>
                <li>Cuvettes (1 cm or 5 cm path length)</li>
                <li>Volumetric flasks (50 ml)</li>
                <li>Pipettes</li>
                <li>Water bath (25°C ± 1°C) for color development</li>
            </ul>

            <h5 class="font-semibold mt-4 text-teal-700">Reagents (Phenate Method)</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg text-sm">
                <p><strong>1. Phenol Solution:</strong></p>
                <ul class="text-xs ml-3">
                    <li>11.1 ml liquified phenol (C₆H₅OH, 89% purity) in 100 ml 95% ethanol</li>
                    <li>Store in amber bottle (light-sensitive)</li>
                </ul>
                
                <p class="mt-2"><strong>2. Sodium Nitroprusside Solution (Catalyst):</strong></p>
                <ul class="text-xs ml-3">
                    <li>0.5 g Na₂[Fe(CN)₅NO]·2H₂O in 100 ml distilled water</li>
                    <li>Store in dark bottle, stable 1 month</li>
                </ul>
                
                <p class="mt-2"><strong>3. Alkaline Reagent:</strong></p>
                <ul class="text-xs ml-3">
                    <li>100 g trisodium citrate (Na₃C₆H₅O₇·2H₂O) + 5 g NaOH in distilled water, make 500 ml</li>
                    <li>Provides alkaline pH for reaction</li>
                </ul>
                
                <p class="mt-2"><strong>4. Sodium Hypochlorite Solution:</strong></p>
                <ul class="text-xs ml-3">
                    <li>Commercial bleach (5% available chlorine) diluted — test activity by titration with thiosulfate</li>
                    <li>Adjust to give absorbance 0.5-0.7 for 0.5 mg NH₃-N/L standard</li>
                </ul>
                
                <p class="mt-2"><strong>5. Standard Ammonia Solution:</strong></p>
                <ul class="text-xs ml-3">
                    <li><strong>Stock (1000 mg NH₃-N/L):</strong> 3.819 g anhydrous NH₄Cl in 1 L distilled water</li>
                    <li><strong>Working standards:</strong> 0, 0.05, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0 mg NH₃-N/L</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-teal-700">Procedure (Phenate Method)</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <ol class="text-sm">
                    <li><strong>25 ml sample</strong> (या appropriate volume) volumetric flask (50 ml) mein lein</li>
                    <li>Agar turbidity/color hai toh pehle <strong>filter (0.45 μm)</strong> ya <strong>clarify with ZnSO₄ + NaOH</strong></li>
                    <li>Flask mein add karein (order important):
                        <ul class="ml-5 list-circle">
                            <li><strong>1.0 ml phenol solution</strong></li>
                            <li><strong>1.0 ml sodium nitroprusside</strong></li>
                            <li>Mix gently</li>
                            <li><strong>2.5 ml alkaline reagent</strong></li>
                            <li>Mix again</li>
                            <li><strong>2.0 ml sodium hypochlorite</strong> (last addition)</li>
                        </ul>
                    </li>
                    <li>Distilled water se <strong>50 ml volume</strong> make up</li>
                    <li>Mix thoroughly aur <strong>25°C water bath mein 1 hour incubate</strong> — complete color development</li>
                    <li>Spectrophotometer ko <strong>640 nm</strong> par set, blank ke saath zero, absorbance read karein</li>
                    <li>Calibration curve se NH₃-N concentration determine karein</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-teal-700">Calculation (Phenate)</h5>
            <pre class="bg-gray-100 p-3 rounded text-sm"><code>NH₃-N (mg/L) = [mg N from curve] × (Final volume / Sample volume)

Example: Sample 25 ml, final 50 ml, curve reading = 0.3 mg N
NH₃-N = 0.3 × (50/25) = 0.6 mg/L</code></pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Interferences</h5>
                <ul class="text-xs text-yellow-700">
                    <li><strong>Calcium & Magnesium:</strong> High hardness (>500 mg/L) precipitates — pre-distillation recommended</li>
                    <li><strong>Sulfide, thiosulfate:</strong> Interfere — oxidize with H₂O₂ before analysis</li>
                    <li><strong>Organic amines:</strong> Positive interference — distillation separates ammonia</li>
                    <li><strong>Residual chlorine:</strong> Destroys color — remove with Na₂S₂O₃ (thiosulfate)</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">🔬 Method 3: Ion Selective Electrode (ISE) - Brief</h5>
                <ul class="text-sm text-blue-700">
                    <li><strong>Electrode:</strong> Ammonia gas-sensing electrode (membrane-based)</li>
                    <li><strong>Principle:</strong> NH₃ gas diffuses through membrane, changes internal pH, measured potentiometrically</li>
                    <li><strong>Procedure:</strong> Sample pH adjust to &gt;11 with NaOH → NH₄⁺ converts to NH₃ → electrode measures</li>
                    <li><strong>Range:</strong> 0.03-1400 mg NH₃-N/L</li>
                    <li><strong>Advantage:</strong> Rapid, minimal sample prep</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📚 References</h5>
                <ul class="text-xs text-blue-700">
                    <li><strong>APHA 4500-NH₃ B, C, D, F:</strong> Standard Methods, 23rd Ed. — Distillation, Phenate, Nessler, ISE methods</li>
                    <li><strong>IS 3025 (Part 34):1988:</strong> Nitrogen - Ammonia (Distillation-Titration)</li>
                    <li><strong>IS 3025 (Part 58):2006:</strong> Nitrogen - Ammonia (Phenate Method)</li>
                    <li><strong>EPA Method 350.1:</strong> Nitrogen, Ammonia (Colorimetric, Automated Phenate)</li>
                    <li>Bolleter et al. (1961). "Spectrophotometric Determination of Ammonia as Indophenol", <em>Anal. Chem.</em> 33(4), 592-594</li>
                </ul>
            </div>
        </div>
    `
}
            {
    id: 'nitrate',
    title: 'Nitrate Nitrogen (NO₃-N)',
    intro: 'UV Spectrophotometric method, Ion Selective Electrode, ya calculation method (TON - NO₂-N) se nitrate determination. Nitrate groundwater contamination ka major indicator hai.',
    
    content: `
        <div class="prose max-w-none prose-indigo">
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
                <h4 class="text-indigo-800 font-bold">🔬 Overview</h4>
                <p class="text-indigo-700 text-sm"><strong>Nitrate (NO₃⁻)</strong> oxidized form of nitrogen — agricultural fertilizers, sewage, animal waste se aata hai. <strong>Health Risk:</strong> Infant methemoglobinemia (Blue Baby Syndrome); WHO limit = 50 mg NO₃/L ya 11.3 mg NO₃-N/L.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-indigo-800">UV Spectrophotometric Screening Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Nitrate ions absorb UV light at <strong>220 nm</strong>. Organic matter bhi 220 nm par absorb karta hai, isliye <strong>275 nm par correction reading</strong> lete hain.</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Corrected Abs₂₂₀ = Abs₂₂₀ - (2 × Abs₂₇₅)
NO₃-N concentration from calibration curve</code></pre>
            </div>

            <p class="text-sm"><strong>Reagents:</strong> HCl (1N), Standard NO₃⁻ solution (0-7 mg N/L range)</p>
            
            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li>50 ml sample + 1 ml HCl (1N) → acidify</li>
                <li>Read absorbance at <strong>220 nm</strong> (nitrate) aur <strong>275 nm</strong> (organics correction)</li>
                <li>Calculate: Corrected A₂₂₀ = A₂₂₀ - (2 × A₂₇₅)</li>
                <li>Standards se calibration curve banao, NO₃-N read karo</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">NO₃-N (mg/L) = [Curve reading] × Dilution factor
To convert: NO₃ (mg/L) = NO₃-N × 4.43</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <p class="text-xs text-yellow-800"><strong>⚠️ Limitation:</strong> Agar organic matter high hai (A₂₇₅ &gt; 0.1), toh cadmium reduction method use karein.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-indigo-800">Alternative: Calculation Method</h4>
            <p class="text-sm">Agar aapne <strong>TON (Total Oxidized Nitrogen)</strong> aur <strong>NO₂-N (Nitrite)</strong> measure kiya hai:</p>
            <pre class="bg-gray-100 p-2 rounded text-sm mt-1"><code><strong>NO₃-N (mg/L) = TON (mg/L) - NO₂-N (mg/L)</strong></code></pre>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-NO₃⁻ B (UV method); IS 3025 (Part 34):1988; EPA Method 352.1</p>
            </div>
        </div>
    `
},
             {
    id: 'nitrite',
    title: 'Nitrite Nitrogen (NO₂-N)',
    intro: 'Colorimetric diazotization method (Griess reaction) se nitrite detection. Nitrite intermediate oxidation state hai — unstable, toxic.',
    
    content: `
        <div class="prose max-w-none prose-rose">
            <div class="bg-rose-50 border-l-4 border-rose-500 p-4 mb-4">
                <h4 class="text-rose-800 font-bold">🔬 Overview</h4>
                <p class="text-rose-700 text-sm"><strong>Nitrite (NO₂⁻)</strong> ammonia oxidation ka intermediate product (nitrification process mein). <strong>Highly toxic</strong> — methemoglobinemia cause karta hai; WHO guideline = 3 mg NO₂/L (0.9 mg NO₂-N/L). Drinking water mein presence = incomplete treatment ya bacterial contamination.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-rose-800">Colorimetric Method (Griess Diazotization)</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Nitrite acidic conditions mein <strong>sulfanilamide</strong> se react karke diazonium compound banata hai, jo <strong>N-(1-naphthyl)-ethylenediamine (NED)</strong> ke saath couple hoke <strong>reddish-purple azo dye</strong> produce karta hai.</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>NO₂⁻ + Sulfanilamide (acidic) → Diazonium salt
Diazonium salt + NED → Reddish-purple azo dye (λmax = 543 nm)</code></pre>
            </div>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs space-y-1">
                <li><strong>Color Reagent:</strong> Mix equal volumes of:
                    <ul class="ml-4 list-circle">
                        <li>Solution A: 2 g sulfanilamide in 100 ml (1+9) HCl</li>
                        <li>Solution B: 0.1 g NED dihydrochloride in 100 ml water</li>
                    </ul>
                </li>
                <li><strong>Standard NO₂⁻:</strong> 0.246 g NaNO₂ in 1 L (100 mg NO₂-N/L stock)</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li>50 ml sample volumetric flask mein lein</li>
                <li><strong>2 ml color reagent</strong> add karein, mix</li>
                <li><strong>10 min - 2 hours</strong> wait (color stable rehta hai)</li>
                <li><strong>543 nm</strong> par absorbance read karein</li>
                <li>Calibration curve (0-0.5 mg NO₂-N/L) se concentration nikalo</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">NO₂-N (mg/L) = [Curve reading mg N] × (1000 / Sample ml)
Detection range: 0.001 - 0.5 mg NO₂-N/L</pre>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-NO₂⁻ B; IS 3025 (Part 34); EPA Method 354.1</p>
            </div>
        </div>
    `
},

{
    id: 'organic_nitrogen',
    title: 'Organic Nitrogen (Organic-N)',
    intro: 'Kjeldahl digestion method se organic nitrogen determination — proteins, amino acids, urea ka nitrogen measure hota hai.',
    
    content: `
        <div class="prose max-w-none prose-amber">
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <h4 class="text-amber-800 font-bold">🔬 Overview</h4>
                <p class="text-amber-700 text-sm"><strong>Organic Nitrogen</strong> proteins, amino acids, urea mein bound nitrogen hai. Sewage, agricultural runoff, decaying organic matter se aata hai. Measurement = <strong>Total Kjeldahl Nitrogen (TKN) - Ammonia Nitrogen</strong></p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-amber-800">Kjeldahl Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong></p>
                <ol class="text-xs space-y-1">
                    <li><strong>Digestion:</strong> Organic-N ko conc. H₂SO₄ + catalyst (CuSO₄, K₂SO₄) se heat → NH₄⁺ convert</li>
                    <li><strong>Distillation:</strong> NH₄⁺ ko NaOH se liberate → NH₃ gas</li>
                    <li><strong>Titration:</strong> Trapped NH₃ ko standard acid se titrate</li>
                </ol>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Organic-N + H₂SO₄ (heat, catalyst) → (NH₄)₂SO₄
NH₄⁺ + OH⁻ → NH₃ ↑ → Trapped in H₃BO₃ → Titrate with H₂SO₄</code></pre>
            </div>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Digestion reagent:</strong> K₂SO₄ (133g) + CuSO₄ (7.3g) powder blend</li>
                <li><strong>Conc. H₂SO₄</strong> (sulfuric acid)</li>
                <li><strong>NaOH-Na₂S₂O₃ reagent:</strong> 500g NaOH + 25g Na₂S₂O₃·5H₂O per liter</li>
                <li>Indicating boric acid, 0.02N H₂SO₄ (same as ammonia method)</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>Pre-treatment:</strong> Sample se free ammonia remove (distill without digestion, discard distillate)</li>
                <li><strong>Digestion:</strong> Remaining sample (100-500 ml) + 10g digestion reagent + 25 ml conc. H₂SO₄ → digest flask mein boil until clear (~30 min)</li>
                <li><strong>Distillation:</strong> Cooled digest + 25 ml NaOH reagent → distill into 50 ml boric acid</li>
                <li><strong>Titration:</strong> Distillate ko 0.02N H₂SO₄ se titrate</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">Organic-N (mg/L) = [(A - B) × 280] / Sample ml

A = ml H₂SO₄ for sample, B = blank
280 = factor for 0.02N acid

<strong>Alternative:</strong>
Organic-N = TKN - NH₃-N (both separately measured)</pre>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-N org B; IS 3025 (Part 34); EPA Method 351.2</p>
            </div>
        </div>
    `
},

{
    id: 'ton',
    title: 'Total Oxidized Nitrogen (TON = NO₂⁻ + NO₃⁻)',
    intro: 'Cadmium reduction method se nitrate ko nitrite mein convert karke total oxidized nitrogen measure karte hain.',
    
    content: `
        <div class="prose max-w-none prose-cyan">
            <div class="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-4">
                <h4 class="text-cyan-800 font-bold">🔬 Overview</h4>
                <p class="text-cyan-700 text-sm"><strong>TON (Total Oxidized Nitrogen)</strong> = NO₂-N + NO₃-N combined. Cadmium reduction column se NO₃⁻ → NO₂⁻ convert, phir total NO₂⁻ colorimetrically measure.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-cyan-800">Cadmium Reduction Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> <strong>Copper-cadmium granules</strong> metallic Cd surface par nitrate ko nitrite mein reduce karte hain:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>NO₃⁻ + Cd (copper-activated) → NO₂⁻
(Total NO₂⁻ = Original NO₂⁻ + Reduced NO₃⁻)
Phir Griess reaction se measure (pink color at 543 nm)</code></pre>
            </div>

            <p class="text-sm"><strong>Apparatus:</strong> Reduction column (glass column packed with Cu-Cd granules)</p>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Copper-cadmium granules:</strong> Cd filings coated with Cu (activation: Cd + CuSO₄ → Cu-Cd)</li>
                <li><strong>NH₄Cl-EDTA solution:</strong> Buffer + complexing agent (prevents Cd, Cu interference)</li>
                <li><strong>Color reagent:</strong> Same as nitrite method (sulfanilamide + NED)</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li>Reduction column prepare: Cu-Cd granules pack, 200 ml NH₄Cl-EDTA से condition</li>
                <li><strong>25 ml sample</strong> + 75 ml NH₄Cl-EDTA mix → column se pass (flow rate ~5 ml/min)</li>
                <li>First 50 ml eluate discard, next <strong>25 ml collect</strong></li>
                <li>Collected eluate mein <strong>1 ml color reagent</strong> add</li>
                <li>10 min wait, <strong>543 nm</strong> par read</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">TON (mg N/L) = [Calibration curve reading]

To get NO₃-N separately:
NO₃-N = TON - NO₂-N (measure NO₂ separately without reduction)</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <p class="text-xs text-yellow-800"><strong>⚠️ Note:</strong> Column efficiency verify regularly — reduction >90% hona chahiye (test with NO₃⁻ standards)</p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-NO₃⁻ E; EPA Method 353.2</p>
            </div>
        </div>
    `
},

{
    id: 'odour',
    title: 'Odour (Gandh)',
    intro: 'Qualitative sensory analysis — human olfactory receptors se odor detection aur characterization.',
    
    content: `
        <div class="prose max-w-none prose-gray">
            <div class="bg-gray-50 border-l-4 border-gray-500 p-4 mb-4">
                <h4 class="text-gray-800 font-bold">🔬 Overview</h4>
                <p class="text-gray-700 text-sm"><strong>Odour</strong> paani ki organoleptic quality hai — volatile organic compounds, hydrogen sulfide, chlorine, algae metabolites se aata hai. Aesthetic parameter hai, health risk directly nahi lekin contamination indicate kar sakta hai.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-gray-800">Qualitative Test</h4>
            <p class="text-sm"><strong>Apparatus:</strong> Clean, odourless glass bottle (250 ml) with stopper</p>
            
            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li>Bottle ko sample se rinse karein (remove residual odors)</li>
                <li>Bottle ko <strong>half-fill (125 ml)</strong> sample se bharein</li>
                <li>Stopper lagao, <strong>shake vigorously 2-3 seconds</strong></li>
                <li>Immediately stopper open karke <strong>smell/sniff</strong> (bottle opening ke just above)</li>
                <li>Odor type aur intensity note karein</li>
            </ol>

            <p class="text-sm mt-3"><strong>Odor Types (Classification):</strong></p>
            <ul class="text-sm grid grid-cols-2 gap-1">
                <li>✓ Odourless (No smell)</li>
                <li>✓ Earthy (mitti jaisa)</li>
                <li>✓ Fishy (machli jaisa)</li>
                <li>✓ Musty (basi/moldy)</li>
                <li>✓ Septic/Sewage</li>
                <li>✓ Rotten egg (H₂S)</li>
                <li>✓ Chlorinous (chlorine)</li>
                <li>✓ Aromatic (fragrant)</li>
                <li>✓ Chemical/Phenolic</li>
                <li>✓ Grassy/Vegetable</li>
            </ul>

            <p class="text-sm mt-3"><strong>Reporting:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">Example: "Septic odor detected" या "Mild chlorinous odor"
Intensity scale (optional): None, Faint, Distinct, Strong, Very Strong</pre>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-blue-800">Quantitative Method (Threshold Odor Number - TON)</h5>
                <p class="text-xs text-blue-700">Dilution series method: Sample ko progressively dilute karte hain until odor just disappears. TON = Total volume / Sample volume at threshold.</p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 2150 B; IS 3025 (Part 15):1984; WHO Guidelines</p>
            </div>
        </div>
    `
},

{
    id: 'orthophosphate',
    title: 'Orthophosphate (PO₄³⁻)',
    intro: 'Ascorbic acid reduction method — molybdate complex formation se orthophosphate determination.',
    
    content: `
        <div class="prose max-w-none prose-lime">
            <div class="bg-lime-50 border-l-4 border-lime-500 p-4 mb-4">
                <h4 class="text-lime-800 font-bold">🔬 Overview</h4>
                <p class="text-lime-700 text-sm"><strong>Orthophosphate (o-PO₄, HPO₄²⁻, H₂PO₄⁻)</strong> dissolved reactive phosphorus hai. Detergents, fertilizers, sewage se aata hai. <strong>Eutrophication</strong> cause karta hai (algal blooms).</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-lime-800">Ascorbic Acid Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Acidic medium mein orthophosphate + ammonium molybdate → phosphomolybdate complex (yellow). Ascorbic acid reduces it to <strong>molybdenum blue</strong> (intense blue, λmax = 880 nm).</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>PO₄³⁻ + Mo(VI) → Phosphomolybdate (yellow)
+ Ascorbic acid → Molybdenum Blue (λ880nm)</code></pre>
            </div>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Combined Reagent (mix in order):</strong>
                    <ul class="ml-4 list-circle">
                        <li>50 ml H₂SO₄ (5N)</li>
                        <li>5 ml Potassium antimonyl tartrate (1.3715 g/500 ml)</li>
                        <li>15 ml Ammonium molybdate (20 g/500 ml)</li>
                        <li>30 ml Ascorbic acid (17.6 g/200 ml, fresh daily)</li>
                    </ul>
                </li>
                <li><strong>Standard PO₄:</strong> 0.2197 g KH₂PO₄ → 1 L (50 mg P/L stock)</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>50 ml sample</strong> (clear, filtered if turbid) Erlenmeyer mein</li>
                <li><strong>8 ml combined reagent</strong> add, mix</li>
                <li><strong>10-30 min</strong> wait (color stable up to 2 hours)</li>
                <li><strong>880 nm</strong> par absorbance read</li>
                <li>Standards (0-2 mg P/L) से curve, concentration निकालो</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">o-PO₄ (mg P/L) = [mg P from curve × 1000] / Sample ml
To convert: PO₄ (mg/L) = P (mg/L) × 3.06</pre>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-P E; IS 3025 (Part 44):1993; EPA Method 365.1</p>
            </div>
        </div>
    `
},

{
    id: 'total_phosphorus',
    title: 'Total Phosphorus (Total-P)',
    intro: 'Persulphate digestion + ascorbic acid method — all forms of phosphorus (ortho + polyphosphates + organic-P) measure.',
    
    content: `
        <div class="prose max-w-none prose-emerald">
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-4">
                <h4 class="text-emerald-800 font-bold">🔬 Overview</h4>
                <p class="text-emerald-700 text-sm"><strong>Total Phosphorus</strong> = Orthophosphate + Polyphosphates + Organic Phosphorus. Digestion se sab forms ko orthophosphate mein convert karke measure karte hain.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-emerald-800">Persulphate Digestion Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Strong oxidizing agent (K₂S₂O₈) + heat → all P-forms convert to PO₄³⁻. Then measure as orthophosphate.</p>
            </div>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Persulphate:</strong> 25 g K₂S₂O₈ per 100 ml</li>
                <li><strong>H₂SO₄ (10N):</strong> For acidification</li>
                <li><strong>Combined reagent:</strong> Same as orthophosphate method</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>50 ml sample</strong> + 1 ml H₂SO₄ (10N) Erlenmeyer flask mein</li>
                <li><strong>0.5 g persulphate</strong> add (solid powder)</li>
                <li><strong>Hot plate par boil 30-40 min</strong> (gentle boiling, volume reduce to ~10 ml)</li>
                <li>Cool, neutralize with phenolphthalein indicator</li>
                <li>Volume को 50 ml make up</li>
                <li>Proceed as orthophosphate: <strong>8 ml combined reagent</strong> add</li>
                <li>Wait 10-30 min, read at <strong>880 nm</strong></li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">Total P (mg/L) = [mg P from curve × 1000] / Sample ml</pre>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-P B,E; IS 3025 (Part 44); EPA Method 365.3</p>
            </div>
        </div>
    `
},

{
    id: 'potassium',
    title: 'Potassium (K⁺)',
    intro: 'Flame photometry — potassium atoms ki emission spectroscopy se detection.',
    
    content: `
        <div class="prose max-w-none prose-violet">
            <div class="bg-violet-50 border-l-4 border-violet-500 p-4 mb-4">
                <h4 class="text-violet-800 font-bold">🔬 Overview</h4>
                <p class="text-violet-700 text-sm"><strong>Potassium (K⁺)</strong> essential mineral — fertilizers, soil erosion se paani mein aata hai. Generally safe, high levels (>12 mg/L) bitter taste de sakti hai.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-violet-800">Flame Emission Photometry</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> K⁺ ions flame mein excited → emit violet light at <strong>766.5 nm</strong>. Emission intensity ∝ K concentration.</p>
            </div>

            <p class="text-sm"><strong>Apparatus:</strong> Flame photometer with K filter (766.5 nm)</p>
            
            <p class="text-sm"><strong>Reagents:</strong> Standard K solution (1000 mg K/L stock from KCl)</p>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li>Instrument को 766.5 nm par set, warm-up 15 min</li>
                <li>Standards prepare (0, 1, 2, 5, 10 mg K/L)</li>
                <li>Distilled water blank से zero</li>
                <li>Standards aspirate karke calibration curve banao</li>
                <li>Sample aspirate, emission intensity read</li>
                <li>Curve se K concentration निकालो</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">K (mg/L) = Calibration curve reading × Dilution factor</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <p class="text-xs text-yellow-800"><strong>⚠️ Interference:</strong> High Na (>10x K level) suppress kar sakta hai — dilution se minimize.</p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 3500-K B; IS 3025 (Part 47):1987; EPA Method 258.1</p>
            </div>
        </div>
    `
}
            {
    id: 'silicate',
    title: 'Silicate (SiO₂)',
    intro: 'Molybdosilicate colorimetric method — reactive silica (dissolved SiO₂) ka determination.',
    
    content: `
        <div class="prose max-w-none prose-sky">
            <div class="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4">
                <h4 class="text-sky-800 font-bold">🔬 Overview</h4>
                <p class="text-sky-700 text-sm"><strong>Silicate (SiO₂)</strong> natural weathering of silicate minerals se aata hai. Boiler water mein scale formation cause karta hai. Drinking water mein generally harmless (1-30 mg/L typical range).</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-sky-800">Heteropoly Blue Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Acidic solution mein silicate + ammonium molybdate → yellow silicomolybdate complex. Oxalic acid se phosphate interference remove. Reducing agent adds → <strong>molybdenum blue</strong> (λmax = 815 nm).</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>SiO₂ + Mo(VI) (acidic) → Silicomolybdic acid (yellow)
+ Reducing agent → Heteropoly blue (815 nm)</code></pre>
            </div>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Ammonium molybdate (10%):</strong> 100 g (NH₄)₆Mo₇O₂₄·4H₂O in 1 L</li>
                <li><strong>Oxalic acid (10%):</strong> 100 g H₂C₂O₄ in 1 L (removes PO₄ interference)</li>
                <li><strong>Reducing agent:</strong> 
                    <ul class="ml-4 list-circle">
                        <li>Sodium sulfite (Na₂SO₃) 40 g</li>
                        <li>1-amino-2-naphthol-4-sulfonic acid 0.5 g</li>
                        <li>Sodium bisulfite (NaHSO₃) 30 g in 500 ml</li>
                    </ul>
                </li>
                <li><strong>HCl (1+1):</strong> Equal volumes conc. HCl + water</li>
                <li><strong>Standard SiO₂:</strong> Dissolve sodium metasilicate (Na₂SiO₃) for stock solution</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>50 ml sample</strong> volumetric flask mein</li>
                <li><strong>1 ml HCl (1+1)</strong> add — acidify</li>
                <li><strong>2 ml ammonium molybdate</strong> add, mix, <strong>5 min wait</strong></li>
                <li><strong>2 ml oxalic acid</strong> add (phosphate interference destroy), mix, <strong>2 min wait</strong></li>
                <li><strong>5 ml reducing agent</strong> add, volume 100 ml make up</li>
                <li><strong>10 min</strong> color development (stable up to 30 min)</li>
                <li><strong>815 nm</strong> par absorbance read</li>
                <li>Standards (0-5 mg SiO₂/L) se calibration curve, concentration read</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">SiO₂ (mg/L) = [mg SiO₂ from curve × 1000] / Sample ml
Detection range: 0.1 - 5 mg SiO₂/L</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <p class="text-xs text-yellow-800"><strong>⚠️ Interference:</strong> Phosphate (>10 mg/L) interferes — oxalic acid treatment removes. High color/turbidity — filter sample (0.45 μm).</p>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-SiO₂ C; IS 3025 (Part 55):2003; EPA Method 370.1</p>
            </div>
        </div>
    `
},

{
    id: 'sodium',
    title: 'Sodium (Na⁺)',
    intro: 'Flame emission photometry — sodium ions ki characteristic yellow emission se determination.',
    
    content: `
        <div class="prose max-w-none prose-orange">
            <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
                <h4 class="text-orange-800 font-bold">🔬 Overview</h4>
                <p class="text-orange-700 text-sm"><strong>Sodium (Na⁺)</strong> most abundant cation in water — halite (NaCl) dissolution, seawater intrusion, road salt, industrial discharge se aata hai. High Na (>200 mg/L) salty taste, hypertension patients ke liye harmful. WHO guideline = 200 mg/L (taste threshold).</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-orange-800">Flame Photometry Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Na⁺ atoms flame mein excite होकर characteristic <strong>yellow light (589 nm — D-line)</strong> emit karte hain. Emission intensity directly proportional to Na concentration.</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Na⁺ (ground state) + Flame heat → Na* (excited)
Na* → Na⁺ + hν (yellow light, 589 nm)
Intensity measured by photometer</code></pre>
            </div>

            <p class="text-sm"><strong>Apparatus:</strong> Flame photometer with sodium filter (589 nm wavelength)</p>
            
            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Stock Na solution (1000 mg Na/L):</strong> 
                    <ul class="ml-4 list-circle">
                        <li>Dissolve 2.542 g anhydrous NaCl (dried at 140°C) in distilled water</li>
                        <li>Make up to 1 liter</li>
                    </ul>
                </li>
                <li><strong>Working standards:</strong> Dilute stock to prepare 0, 1, 5, 10, 20, 50, 100 mg Na/L series</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li>Flame photometer को <strong>589 nm</strong> par set karein</li>
                <li>Instrument warm-up 15-20 minutes</li>
                <li><strong>Distilled water (blank)</strong> aspirate karke zero set</li>
                <li>Standards ko low to high order mein aspirate karein, readings note</li>
                <li><strong>Calibration curve</strong> plot (Na concentration vs emission intensity)</li>
                <li><strong>Sample aspirate</strong> karein (agar high concentration expected toh dilute 1:10 or 1:100)</li>
                <li>Emission reading curve se match karke concentration read</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">Na (mg/L) = [Calibration curve reading] × Dilution factor

Example:
- Sample diluted 1:10 (1 ml sample + 9 ml water)
- Curve reading = 8 mg Na/L
- Actual Na = 8 × 10 = 80 mg/L</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <p class="text-xs text-yellow-800"><strong>⚠️ Interferences:</strong></p>
                <ul class="text-xs text-yellow-700">
                    <li>High hardness (Ca, Mg &gt;1000 mg/L) — dilution se minimize</li>
                    <li>Viscosity differences — sample aur standards ka matrix match karein</li>
                    <li>Ionization interference — usually negligible for Na</li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-green-800">Alternative: Calculation Method</h5>
                <p class="text-xs text-green-700">Agar complete cation-anion analysis kiya hai (Ca, Mg, K, Cl, SO₄, HCO₃), toh <strong>ion balance equation</strong> se Na calculate kar sakte hain:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Na (meq/L) = Total anions (meq/L) - [Ca + Mg + K] (meq/L)
Na (mg/L) = Na (meq/L) × 23</code></pre>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 3500-Na B; IS 3025 (Part 48):2002; EPA Method 273.1; WHO Guidelines (2003) — Sodium in Drinking-water</p>
            </div>
        </div>
    `
},

{
    id: 'sulphate',
    title: 'Sulphate (SO₄²⁻)',
    intro: 'Turbidimetric/Nephelometric method — barium sulphate precipitation se sulphate determination.',
    
    content: `
        <div class="prose max-w-none prose-fuchsia">
            <div class="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-4 mb-4">
                <h4 class="text-fuchsia-800 font-bold">🔬 Overview</h4>
                <p class="text-fuchsia-700 text-sm"><strong>Sulphate (SO₄²⁻)</strong> natural minerals (gypsum-CaSO₄, barite-BaSO₄) dissolution, acid mine drainage, industrial waste se aata hai. High levels (&gt;500 mg/L) laxative effect (diarrhea), bitter taste cause karte hain. WHO guideline = 500 mg/L; IS 10500 acceptable = 200 mg/L, permissible = 400 mg/L.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-fuchsia-800">Turbidimetric Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Acidic conditions mein sulphate ions ko <strong>barium chloride (BaCl₂)</strong> se treat karte hain → <strong>barium sulphate (BaSO₄)</strong> white precipitate बनता है। BaSO₄ particles uniform size mein suspend karte hain (conditioning reagent se stabilize) aur turbidity measure karte hain.</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>SO₄²⁻ + Ba²⁺ → BaSO₄↓ (white precipitate, uniform suspension)
Turbidity (NTU) ∝ SO₄²⁻ concentration
Measurement: 420 nm (spectrophotometer) ya nephelometer</code></pre>
            </div>

            <p class="text-sm"><strong>Apparatus:</strong></p>
            <ul class="text-xs">
                <li>Nephelometric turbidity meter (preferred) OR</li>
                <li>Spectrophotometer at 420 nm</li>
                <li>Magnetic stirrer</li>
                <li>Stopwatch/timer</li>
            </ul>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Buffer solution (MgCl₂ + Sodium acetate + Acetic acid):</strong>
                    <ul class="ml-4 list-circle">
                        <li>30 g MgCl₂·6H₂O + 5 g CH₃COONa·3H₂O + 1 ml glacial acetic acid in 500 ml</li>
                        <li>pH ~4.2, stabilizes BaSO₄ crystal size</li>
                    </ul>
                </li>
                <li><strong>Barium chloride crystals (20-30 mesh):</strong> BaCl₂·2H₂O powder</li>
                <li><strong>Standard SO₄ solution:</strong>
                    <ul class="ml-4 list-circle">
                        <li>Stock (1000 mg SO₄/L): 1.479 g anhydrous Na₂SO₄ in 1 L</li>
                        <li>Working standards: 0, 5, 10, 20, 30, 40 mg SO₄/L</li>
                    </ul>
                </li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>100 ml sample</strong> (clear, filter agar turbid) Erlenmeyer flask mein lein</li>
                <li><strong>20 ml buffer solution</strong> add karein, mix</li>
                <li>Flask ko <strong>magnetic stirrer</strong> par रखें, stirring start करें (constant speed)</li>
                <li>While stirring, <strong>spatula tip BaCl₂ crystals (approx. 0.3 g)</strong> add करें</li>
                <li><strong>Exactly 60 seconds vigorous stirring</strong> maintain (critical timing!)</li>
                <li>Stirring band karo, solution को immediately <strong>cuvette/nephelometer cell</strong> mein transfer</li>
                <li><strong>5 minutes after BaCl₂ addition</strong>, turbidity/absorbance read करें (not before, not after — timing critical)</li>
                <li>Standards के साथ same procedure follow karके calibration curve prepare</li>
            </ol>

            <p class="text-sm mt-3"><strong>Calculation:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">SO₄²⁻ (mg/L) = [Calibration curve reading] × Dilution factor

Detection range: 1-40 mg SO₄/L (agar higher, dilute 1:10 or 1:50)

Example:
- Sample diluted 1:10
- Turbidity reading matches 25 mg/L on curve
- Actual SO₄²⁻ = 25 × 10 = 250 mg/L</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <h5 class="font-semibold text-xs text-yellow-800">⚠️ Critical Factors for Accuracy</h5>
                <ul class="text-xs text-yellow-700">
                    <li><strong>Timing crucial:</strong> Read exactly 5 min after BaCl₂ addition — BaSO₄ particles settle with time</li>
                    <li><strong>Stirring speed:</strong> Constant vigorous stirring for 60 sec ensures uniform crystal size</li>
                    <li><strong>Temperature:</strong> Maintain 25°C ± 3°C — temperature affects precipitation kinetics</li>
                    <li><strong>Interferences:</strong>
                        <ul class="ml-4 list-circle">
                            <li>Color/Turbidity in sample — pre-filter (0.45 μm)</li>
                            <li>Suspended solids — centrifuge ya settle overnight</li>
                            <li>High silica (&gt;500 mg SiO₂/L) — may co-precipitate, dilution recommended</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-green-800">🔬 Alternative: Gravimetric Method (High Accuracy)</h5>
                <p class="text-xs text-green-700">For precise measurement (standards, reference samples):</p>
                <ol class="text-xs text-green-700">
                    <li>100-250 ml sample को HCl से acidify, boil</li>
                    <li>Hot BaCl₂ solution slowly add — BaSO₄ precipitate</li>
                    <li>Digest on hot plate 2 hours, cool overnight</li>
                    <li>Filter through ashless filter paper, wash</li>
                    <li>Ignite at 800°C, weigh BaSO₄ residue</li>
                    <li>SO₄²⁻ (mg/L) = [BaSO₄ weight (mg) × 0.4116 × 1000] / Sample ml</li>
                </ol>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 4500-SO₄²⁻ E (Turbidimetric), D (Gravimetric); IS 3025 (Part 24):1986; EPA Method 375.4; WHO Guidelines (2004) — Sulfate in Drinking-water</p>
            </div>
        </div>
    `
},

{
    id: 'temperature',
    title: 'Temperature (Taapman)',
    intro: 'Mercury/digital thermometer se direct measurement — physical parameter jo chemical/biological reactions ko influence karta hai.',
    
    content: `
        <div class="prose max-w-none prose-red">
            <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <h4 class="text-red-800 font-bold">🔬 Overview</h4>
                <p class="text-red-700 text-sm"><strong>Temperature</strong> water quality ka fundamental parameter hai jo affects karta hai: (1) Dissolved oxygen solubility (high temp → low DO), (2) Chemical reaction rates, (3) Aquatic organism metabolism, (4) Bacterial growth, (5) pH, conductivity readings. Measurement <strong>in-situ (field)</strong> preferred — samples cool down with time.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-red-800">Mercury Thermometer Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Mercury liquid thermal expansion — temperature increase → volume expand → column rise in calibrated glass tube.</p>
            </div>

            <p class="text-sm"><strong>Apparatus:</strong></p>
            <ul class="text-xs">
                <li><strong>Mercury thermometer:</strong> 
                    <ul class="ml-4 list-circle">
                        <li>Range: -10°C to +110°C (or appropriate for expected temp)</li>
                        <li>Accuracy: ± 0.5°C या better</li>
                        <li>Subdivision: 0.1°C or 1°C</li>
                        <li>Immersion type: Total immersion or partial immersion (check marking)</li>
                    </ul>
                </li>
                <li><strong>Alternative:</strong> Digital thermometer (thermocouple/RTD probe) — faster response, ±0.1°C accuracy</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>In-situ (field) measurement:</strong>
                    <ul class="ml-4 list-circle">
                        <li>Sample collection site par thermometer को directly water body mein <strong>immerse</strong> करें</li>
                        <li>Manufacturer specified immersion depth तक डुबोएं (usually mercury bulb + 5-7 cm stem)</li>
                        <li><strong>2-3 minutes wait</strong> — thermal equilibrium achieve hone tak</li>
                        <li>Thermometer को water मein रखते हुए reading लें (don't remove — air temperature affect karega)</li>
                    </ul>
                </li>
                <li><strong>Laboratory (sample):</strong>
                    <ul class="ml-4 list-circle">
                        <li>Sample container को बिना खोले gentle swirl करें (temperature uniform हो)</li>
                        <li>Immediately container open करके thermometer insert</li>
                        <li>1-2 min equilibration, read at eye level (avoid parallax error)</li>
                        <li><strong>Note:</strong> Lab temperature sample का actual field temperature reflect नहीं करता — always record field temp separately</li>
                    </ul>
                </li>
            </ol>

            <p class="text-sm mt-3"><strong>Reading & Reporting:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">Temperature reading: Direct से thermometer scale पर पढ़ें
Report: XX.X °C (e.g., 25.5°C)

Conversion (agar required):
°F = (°C × 9/5) + 32
K = °C + 273.15</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <h5 class="font-semibold text-xs text-yellow-800">⚠️ Precautions</h5>
                <ul class="text-xs text-yellow-700">
                    <li><strong>Thermal shock:</strong> Mercury thermometer को sudden extreme temp changes से बचाएं — crack हो सकता है</li>
                    <li><strong>Parallax error:</strong> Reading eye level पर लें, meniscus की top edge देखें</li>
                    <li><strong>Calibration:</strong> Thermometer को ice point (0°C) aur boiling point (100°C at 1 atm) par verify करें</li>
                    <li><strong>Mercury hazard:</strong> Agar thermometer break हो तो mercury spill carefully clean (droplets toxic हैं)</li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-green-800">💡 Digital Thermometer Advantages</h5>
                <ul class="text-xs text-green-700">
                    <li>Faster response time (10-30 seconds)</li>
                    <li>No mercury — environmentally safer</li>
                    <li>Digital display — no parallax error</li>
                    <li>Data logging capability (some models)</li>
                    <li>Wide range (-50°C to +300°C possible)</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-blue-800">📊 Temperature Significance in Water Quality</h5>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-blue-100">
                            <th class="border p-2">Parameter Affected</th>
                            <th class="border p-2">Temperature Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-2">Dissolved Oxygen</td><td class="border p-2">↑ Temp → ↓ DO solubility (e.g., 25°C: 8.3 mg/L; 30°C: 7.6 mg/L at 1 atm)</td></tr>
                        <tr><td class="border p-2">pH</td><td class="border p-2">↑ Temp → slight ↓ pH (water ionization increases)</td></tr>
                        <tr><td class="border p-2">Conductivity</td><td class="border p-2">↑ Temp → ↑ Conductivity (~2% per °C) — instruments auto-compensate to 25°C</td></tr>
                        <tr><td class="border p-2">Chemical reactions</td><td class="border p-2">↑ Temp → reaction rates double every 10°C (van't Hoff rule)</td></tr>
                        <tr><td class="border p-2">Bacterial growth</td><td class="border p-2">Optimal 20-37°C; &gt;60°C inhibits most organisms</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 2550 B; IS 3025 (Part 12):1987; WHO Guidelines — Temperature not health-based limit, but operational parameter for disinfection/treatment</p>
            </div>
        </div>
    `
},

{
    id: 'turbidity',
    title: 'Turbidity (Maailpan)',
    intro: 'Nephelometric method — suspended particles द्वारा light scattering measurement se turbidity determination.',
    
    content: `
        <div class="prose max-w-none prose-slate">
            <div class="bg-slate-50 border-l-4 border-slate-500 p-4 mb-4">
                <h4 class="text-slate-800 font-bold">🔬 Overview</h4>
                <p class="text-slate-700 text-sm"><strong>Turbidity</strong> paani ki optical clarity measure karta hai — suspended particles (clay, silt, organic matter, microorganisms) light scatter karte hain। High turbidity: (1) Aesthetic problem (cloudy appearance), (2) Interferes with disinfection (particles shield bacteria), (3) Indicator of contamination. <strong>WHO guideline:</strong> &lt;5 NTU (ideally &lt;1 NTU); IS 10500: Acceptable 1 NTU, Permissible 5 NTU.</p>
            </div>

            <h4 class="font-bold text-lg mt-4 mb-2 text-slate-800">Nephelometric Method</h4>
            <div class="bg-gray-50 p-3 rounded-lg mb-3">
                <p class="text-sm"><strong>Principle:</strong> Sample पर white light (tungsten lamp) चमकाते हैं। Suspended particles light को <strong>90° angle</strong> par scatter करते हैं। Scattered light intensity को photodetector से measure करते हैं — intensity directly proportional to turbidity। Unit: <strong>NTU (Nephelometric Turbidity Units)</strong> या FTU/FNU.</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Light scattering ∝ Particle concentration × Particle size
90° detector optimizes sensitivity for fine particles
Rayleigh scattering principle applies</code></pre>
            </div>

            <p class="text-sm"><strong>Apparatus:</strong></p>
            <ul class="text-xs">
                <li><strong>Nephelometric turbidity meter:</strong>
                    <ul class="ml-4 list-circle">
                        <li>Light source: Tungsten lamp (wavelength 400-680 nm, centered ~550 nm)</li>
                        <li>Detector: 90° से scattered light measure</li>
                        <li>Sample cell: Optically clear glass/plastic tube</li>
                        <li>Range: 0-1000 NTU (auto-ranging)</li>
                        <li>Accuracy: ±2% या ±0.01 NTU (whichever greater)</li>
                    </ul>
                </li>
                <li><strong>Sample cells:</strong> Matched pair, scratch-free, clean</li>
            </ul>

            <p class="text-sm"><strong>Reagents:</strong></p>
            <ul class="text-xs">
                <li><strong>Primary Standard (Formazin Polymer Suspension):</strong>
                    <ul class="ml-4 list-circle">
                        <li><strong>Stock 4000 NTU:</strong> Mix equal volumes (5 ml each) of:
                            <ul class="ml-4">
                                <li>Solution I: 1.0 g hydrazine sulfate [(NH₂)₂·H₂SO₄] in 100 ml water</li>
                                <li>Solution II: 10.0 g hexamethylenetetramine [(CH₂)₆N₄] in 100 ml water</li>
                            </ul>
                        </li>
                        <li>Mix, stand 24 hours at 25°C — white polymer suspension forms</li>
                        <li>Dilute to 100 ml = 400 NTU stock</li>
                        <li><strong>Caution:</strong> Hydrazine sulfate carcinogenic — handle with care, use commercial formazin standards preferred</li>
                    </ul>
                </li>
                <li><strong>Working standards:</strong> Dilute 400 NTU stock to prepare 0, 5, 10, 20, 40, 100 NTU standards</li>
            </ul>

            <p class="text-sm mt-2"><strong>Procedure:</strong></p>
            <ol class="text-sm space-y-1">
                <li><strong>Instrument calibration:</strong>
                    <ul class="ml-4 list-circle">
                        <li>Nephelometer को manufacturer instructions के अनुसार warm-up (typically 10-15 min)</li>
                        <li>Sample cell को distilled water से rinse, lint-free tissue से wipe (no scratches)</li>
                        <li><strong>Zero standard (0 NTU):</strong> Particle-free distilled water से zero calibrate</li>
                        <li><strong>High standard (e.g., 100 NTU):</strong> Formazin standard से span adjust</li>
                        <li>Intermediate standards (10, 40 NTU) verify — within ±5% hone chahiye</li>
                    </ul>
                </li>
                <li><strong>Sample measurement:</strong>
                    <ul class="ml-4 list-circle">
                        <li>Sample को <strong>gently invert</strong> karके mix (bubbles avoid करें — scatter light)</li>
                        <li>Sample को clean cell मein भरें (meniscus के ऊपर तक, no air bubbles)</li>
                        <li>Cell की outer surface को clean tissue से wipe (fingerprints/water droplets remove)</li>
                        <li>Cell को instrument मein insert, <strong>same orientation</strong> maintain (cells का mark align करें)</li>
                        <li>Wait for stable reading (usually 10-30 seconds)</li>
                        <li>Reading note — display shows NTU directly</li>
                    </ul>
                </li>
                <li><strong>Repeat measurement:</strong> Same sample का duplicate reading लें — difference &lt;5% acceptable</li>
            </ol>

            <p class="text-sm mt-3"><strong>Reading & Reporting:</strong></p>
            <pre class="bg-gray-100 p-2 rounded text-xs">Turbidity: Directly read from instrument display
Report: XX.X NTU (e.g., 2.3 NTU)

Reporting precision:
0-1 NTU: Report to 0.01 NTU
1-10 NTU: Report to 0.1 NTU
10-100 NTU: Report to 1 NTU
>100 NTU: Report to nearest 10 NTU</pre>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                <h5 class="font-semibold text-xs text-yellow-800">⚠️ Precautions & Sources of Error</h5>
                <ul class="text-xs text-yellow-700">
                    <li><strong>Air bubbles:</strong> Sample fill करते समय bubbles avoid — scatter light causing high reading</li>
                    <li><strong>Dirty cells:</strong> Scratches, fingerprints, water droplets outside cell — false high readings; always clean with lint-free tissue</li>
                    <li><strong>Sample aging:</strong> Turbidity can change with time (particles settle or coagulate); measure immediately after collection</li>
                    <li><strong>Temperature:</strong> Maintain samples at constant temp (±1°C) — affects particle suspension</li>
                    <li><strong>Color interference:</strong> Highly colored samples (true color >500 Pt-Co units) absorb light — may give low turbidity reading; dilution या color correction required</li>
                    <li><strong>Stray light:</strong> Instrument mein external light enter nahi honi chahiye — lid close रखें</li>
                </ul>
            </div>

            <div class="bg-green-50 border-l-4 border-green-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-green-800">💡 Quality Control</h5>
                <ul class="text-xs text-green-700">
                    <li><strong>Daily checks:</strong> Zero aur span standard run करें before sample analysis</li>
                    <li><strong>Cell maintenance:</strong> Weekly clean with non-abrasive detergent, rinse thoroughly; replace agar scratched</li>
                    <li><strong>Formazin stability:</strong> Stock solution 1 year stable (dark bottle, 4°C); working standards monthly prepare</li>
                    <li><strong>Commercial standards:</strong> Pre-made formazin/polymer standards available (safer than preparing hydrazine-based formazin)</li>
                    <li><strong>Alternative standards:</strong> AMCO-AEPA polymer beads, Styrene-divinylbenzene copolymer suspensions</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <h5 class="font-semibold text-sm text-blue-800">📊 Turbidity Interpretation</h5>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-blue-100">
                            <th class="border p-2">Turbidity (NTU)</th>
                            <th class="border p-2">Visual Appearance</th>
                            <th class="border p-2">Drinking Water Quality</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-2">&lt; 1</td><td class="border p-2">Crystal clear</td><td class="border p-2"><strong>Excellent</strong> — Ideal for drinking</td></tr>
                        <tr><td class="border p-2">1-5</td><td class="border p-2">Slight haze</td><td class="border p-2"><strong>Acceptable</strong> — Disinfection effective</td></tr>
                        <tr class="bg-yellow-50"><td class="border p-2">5-25</td><td class="border p-2">Cloudy</td><td class="border p-2"><strong>Marginal</strong> — Treatment required</td></tr>
                        <tr class="bg-orange-50"><td class="border p-2">25-100</td><td class="border p-2">Very cloudy</td><td class="border p-2"><strong>Unacceptable</strong> — Filtration essential</td></tr>
                        <tr class="bg-red-50"><td class="border p-2">&gt; 100</td><td class="border p-2">Opaque, muddy</td><td class="border p-2"><strong>Highly polluted</strong> — Unfit for drinking</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-3 mt-3">
                <p class="text-xs text-blue-700"><strong>📚 References:</strong> APHA 2130 B; IS 3025 (Part 10):1984 (Reaffirmed 2021); EPA Method 180.1; ISO 7027:2016; WHO Guidelines for Drinking-water Quality, 4th Ed. (2017)</p>
            </div>
        </div>
    `
}
        ]
    },
    en: {
        title: "Water Testing Guide",
        description: "A guide to common parameters for checking water quality, their simplified procedures, and calculation methods.",
        backToTopics: "Back to Topics",
        important_note: {
            title: "Important Note:",
            text: "Always follow safety rules and wear appropriate protective gear (PPE) when working in the lab. For accurate results, it is better to follow certified labs and standard methods."
        },
        tests: [
            {
                id: 'alkalinity_p',
                title: 'Alkalinity, Phenolphthalein (pH 8.3)',
                intro: 'This test measures hydroxide and carbonate alkalinity in water.',
                apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks, conical flasks and beakers.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sodium carbonate, approximately 0.05 N:</strong> Dry 3 to 5 g sodium carbonate, Na₂CO₃, at 250°C for 4h and cool in a desiccator. Accurately weigh 2.5±0.2 g to the nearest mg, dissolve in distilled water and make to 1 L.</li>
                        <li><strong>Standard H₂SO₄, approximately 0.1N:</strong> Dilute 2.8 mL conc. sulphuric acid to 1 L. Standardise against 40.00 mL 0.05N Na₂CO₃.</li>
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> Prepare by calculation from the above 0.1N solution.</li>
                        <li><strong>Phenolphthalein indicator solution, alcoholic, pH 8.3:</strong> Dissolve 5 g phenolphthalein in 500 mL 95% ethyl alcohol. Add 500 mL distilled water.</li>
                    </ul>
                `,
                procedure: [
                    'Take 25 to 50 mL sample in a conical flask.',
                    'Add 2 to 3 drops of phenolphthalein indicator.',
                    'If it turns pink (pH > 8.3), titrate with 0.02 N H₂SO₄ to disappearance of the colour.',
                    'Record mL titrant used.',
                ],
                calculation: `Phenolphthalein Alkalinity (as mg/L CaCO₃) = (A &times; Normality of Acid &times; 50000) / mL of sample<br/><p class="text-xs mt-2">where A = mL titrant used to phenolphthalein end point.</p>`
            },
            {
                id: 'alkalinity_t',
                title: 'Alkalinity, Total (pH 4.5)',
                intro: 'This test measures the total alkalinity of water.',
                 apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks and beakers.</p>',
                reagents: `
                    <h4>Reagents</h4>
                     <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> As prepared for phenolphthalein alkalinity.</li>
                        <li><strong>Bromcresol green indicator, pH 4.5:</strong> Dissolve 100mg bromcresol green sodium salt in 100 mL distilled water.</li>
                    </ul>
                `,
                procedure: [
                    'Add 2 to 3 drops of bromcresol green indicator.',
                    'Titrate until change in colour (blue to yellow, pH 4.9 to 4.3) is observed.',
                    'Record total mL titrant used.',
                ],
                calculation: `Total Alkalinity (as mg/L CaCO₃) = (B &times; Normality of Acid &times; 50000) / mL of sample<br/><p class="text-xs mt-2">where B = total mL of titrant used to bromcresol green end point.</p>`
            },
            {
                id: 'aluminum',
                title: 'Aluminum',
                intro: 'Spectrophotometric determination of aluminum using Eriochrome Cyanine R method.',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> For use at 535 nm with light path of 1 cm or longer.</li>
                        <li><strong>Glassware:</strong> Treat all glassware with 1 + 1 warm HCl and rinse with aluminium free distilled water.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock aluminum solution:</strong> Dissolve 8.791 g aluminum potassium sulphate, AlK(SO₄)₂.12H₂O, in water and dilute to 1 L.</li>
                        <li><strong>Standard aluminum solution:</strong> Dilute 10 mL stock aluminum solution to 1000 mL with distilled water; 1.00 mL = 5.00 µg Al. Prepare daily.</li>
                        <li><strong>Sulphuric acid, H₂SO₄, 0.02 N and 6 N.</strong></li>
                        <li><strong>Ascorbic acid solution:</strong> Dissolve 0.1 g ascorbic acid in water and make up to 100 mL in a volumetric flask. Prepare fresh daily.</li>
                        <li><strong>Buffer reagent:</strong> Dissolve 136 g sodium acetate, NaC₂H₃O₂.3H₂O, in water, add 40 mL 1N acetic acid and dilute to 1 L.</li>
                        <li><strong>Working dye solution (Eriochrome Cyanine R):</strong> Dilute 10.0 mL of stock dye solution to 100 mL in a volumetric flask with water.</li>
                    </ul>
                `,
                procedure: [
                    'Prepare a series of standards containing 0 to 7 µg aluminum.',
                    'To each standard and sample, add 1 mL 0.02N H₂SO₄, 1 mL ascorbic acid, 10 mL buffer, and 5 mL working dye reagent.',
                    'Make up the total volume to 50 mL and read absorbance at 535 nm within 5-15 minutes.',
                    'Determine sample concentration from the calibration curve.',
                ],
                calculation: 'Read aluminum concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'This test is based on the bottle incubation method for 3 days at 27°C.',
                apparatus: `<ul class="list-disc list-outside pl-5 space-y-1">
                    <li>300 mL BOD bottles, narrow mouth, flared lip, with tapered and pointed ground glass stoppers.</li>
                    <li>Air incubator or water bath, thermostatically controlled at 27 ± 1 °C. Light entry must be prevented in order to avoid photosynthetic oxygen production.</li>
                    <li>Accessories: plastic tube, screw-pin and a 5-10 L water container.</li>
                    </ul>`,
                reagents: `<h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Phosphate buffer solution:</strong> Dissolve 8.5 g KH₂PO₄, 21.75 g K₂HPO₄, 33.4 g Na₂HPO₄·7H₂O and 1.7 g NH₄Cl in 1 L distilled water.</li>
                        <li><strong>Magnesium sulphate solution:</strong> Dissolve 22.5 g MgSO₄·7H₂O in 1 L distilled water.</li>
                        <li><strong>Calcium chloride solution:</strong> Dissolve 27.5 g CaCl₂ in 1 L distilled water.</li>
                        <li><strong>Ferric chloride solution:</strong> Dissolve 0.25 g FeCl₃·6H₂O in 1 L distilled water.</li>
                        <li><strong>Acid and alkali solution:</strong> 1N NaOH and 1N H₂SO₄. Use for neutralising samples.</li>
                        <li><strong>Glucose-glutamic acid solution (prepare fresh):</strong> Dissolve 150 mg dry reagent grade glucose and 150 mg dry reagent grade glutamic acid in 1 L distilled water.</li>
                        <li><strong>Sample dilution water:</strong> Add 1 mL each of phosphate buffer, MgSO₄, CaCl₂, and FeCl₃ solutions per litre distilled water.</li>
                    </ul>`,
                procedure: [
                    'Prepare required amount of dilution water at the rate of 1000 to 1200 mL per sample per dilution. Bring the diluted water temperature to 27 °C. Saturate with air by shaking in a partially filled bottle, by bubbling with organic free filtered air or by storing in cotton-plugged bottles for a day.',
                    'Some samples do not contain sufficient microbial population (for example, some industrial wastes, high temperature wastes, or wastes with extreme pH values). For such wastes, the dilution water is seeded using effluent from a biological treatment system processing the waste. Where this is not available, use supernatant from domestic wastewater after settling for at least 1 h but not more than 36 h. Seed from a surface water body receiving the waste may also be suitable. Add enough seed volume such that the DO uptake of the seeded dilution water is between 0.6 and 1.0 mg/L. For domestic wastewater seed, usually 4 to 6 mL seed / L of dilution water is required. Surface water samples usually do not require seeding.',
                    `Dilution of sample. Dilutions must result in a sample with a residual DO (after 3 days of incubation) of at least 1 mg/L and a DO uptake of at least 2 mg/L. Make several dilutions using the Table and experience with the particular sample source. Polluted surface waters may have 5 to 25 mg/L BOD.<br/><table class="w-full text-left border-collapse mt-2"><thead><tr><th class="border p-2" colspan="2">Using percent mixture</th><th class="border p-2" colspan="2">By direct pipetting into 300mL bottles</th></tr><tr><th class="border p-2">Range of BOD</th><th class="border p-2">% mixture</th><th class="border p-2">Range of BOD</th><th class="border p-2">mL Sample</th></tr></thead><tbody><tr><td class="border p-2">1,000 - 3,500</td><td class="border p-2">0.2</td><td class="border p-2">1,200 - 4,200</td><td class="border p-2">0.5</td></tr><tr><td class="border p-2">400 - 1,400</td><td class="border p-2">0.5</td><td class="border p-2">600 - 2,100</td><td class="border p-2">1.0</td></tr><tr><td class="border p-2">200 - 700</td><td class="border p-2">1.0</td><td class="border p-2">300 - 1,050</td><td class="border p-2">2.0</td></tr><tr><td class="border p-2">100 - 350</td><td class="border p-2">2.0</td><td class="border p-2">120 - 420</td><td class="border p-2">5.0</td></tr><tr><td class="border p-2">40 - 140</td><td class="border p-2">5.0</td><td class="border p-2">60 - 210</td><td class="border p-2">10.0</td></tr><tr><td class="border p-2">20 - 70</td><td class="border p-2">10.0</td><td class="border p-2">30 - 105</td><td class="border p-2">20.0</td></tr><tr><td class="border p-2">10 - 35</td><td class="border p-2">20.0</td><td class="border p-2">12 - 42</td><td class="border p-2">50.0</td></tr><tr><td class="border p-2">4 - 14</td><td class="border p-2">50.0</td><td class="border p-2">6 - 21</td><td class="border p-2">100.0</td></tr><tr><td class="border p-2">0 - 7</td><td class="border p-2">100.0</td><td class="border p-2">0 - 7</td><td class="border p-2">300.0</td></tr></tbody></table><br/>For preparing dilution in graduated cylinders, siphon dilution water, seeded if necessary, into a 1 to 2 L capacity cylinder. Siphoning should always be done slowly without bubbling, use a screw-pin on the tube to regulate the flow. Keep the tip of the tube just below the water surface as it rises. Fill cylinder half full, add desired quantity of sample and dilute to appropriate level, mix with plunger type mixing rod. Siphon mixed diluted sample in three BOD bottles, stopper without entraining any air. Determine initial DO (method 1.9) on one bottle and incubate the other two at 27 °C. Determine final DO (method 1.9) in duplicate after 3 days.<br/>For direct pipetting, siphon the desired sample volume to individual bottles and fill with enough dilution water. Complete the test as in the earlier case.`,
                    'Dilution water blank. Find the DO consumption of unseeded dilution water by determining initial and final DO as in c above. It should not be more than 0.2 mg/L.',
                    'Seed control. Determine the DO uptake by seeding material according to the procedure in c above.',
                ],
                calculation: `
                  <p><strong>When dilution water is not seeded:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = (D₀ - D₃) / P</code>
                  <p class="mt-4"><strong>When dilution water is seeded:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = [ (D₀ - D₃) - f &times; (B₀ - B₃) ] / P</code>
                  <p class="text-xs mt-2">where: D₀=initial DO, D₃=DO after 3 days, P=decimal volumetric fraction of sample, B₀=initial DO of seed, B₃=final DO of seed, f=ratio of seed.</p>
                  <p class="mt-4"><strong>Notes:</strong></p>
                  <ul class="list-disc list-outside pl-5 space-y-1 text-xs">
                    <li>Report average results of duplicates if both dilutions are correct.</li>
                    <li>Formula does not correct for BOD of dilution water which is only valid for dilution water meeting the criteria. BOD of dilution water should not be more than 0.2 mg/L, preferably lower than 0.1 mg/L.</li>
                    <li>The standard glucose-glutamic acid should have BOD of 198 ± 37 mg/L (BIS3025 (part 44): 1993). Check procedure otherwise.</li>
                    <li>Report BOD values lower than 0.5mg/L or 2 times the measured BOD of the dilution water (whichever is lower) as lower than detection limit.</li>
                  </ul>
                `
            },
            {
                id: 'boron',
                title: 'Boron',
                intro: 'Spectrophotometric determination of boron using Curcumin method.',
                 apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> For use at 540 nm.</li>
                        <li><strong>Evaporating dishes:</strong> High-silica glass or porcelain.</li>
                        <li><strong>Water-bath:</strong> Set at 55°C.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock boron solution:</strong> Dissolve 571.6 mg anhydrous boric acid in distilled water and dilute to 1 L.</li>
                        <li><strong>Curcumin reagent:</strong> Dissolve 40 mg curcumin and 5 g oxalic acid in 80 mL 95% ethyl alcohol, add 4.2 mL conc. HCl, make to 100 mL.</li>
                        <li><strong>Ethyl alcohol, 95%.</strong></li>
                    </ul>
                `,
                procedure: [
                    'To standards and samples in evaporating dishes, add 4 mL of Curcumin reagent.',
                    'Heat on water bath at 55°C for 80 min until dry.',
                    'Cool, dissolve residue in 10 mL ethyl alcohol.',
                    'Read absorbance at 540 nm and determine concentration using calibration curve.',
                ],
                calculation: 'Read boron concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'calcium',
                title: 'Calcium',
                intro: 'Determination of calcium using the EDTA titrimetric method.',
                 apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sodium hydroxide, NaOH, 1N.</strong></li>
                        <li><strong>Murexide (ammonium purpurate) indicator:</strong> Mix 0.2 g of dye with 100 g of solid NaCl.</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> Dissolve 3.723 g of disodium salt of EDTA in distilled water and dilute to 1000 mL.</li>
                        <li><strong>Standard calcium solution:</strong> Dissolve 1.000 g of anhydrous CaCO₃ in 1+1 HCl and dilute to 1000 mL.</li>
                    </ul>
                `,
                procedure: [
                    'Take 50 mL sample, add 2 mL NaOH to produce pH of 12 to 13.',
                    'Add 0.1 to 0.2 g Murexide indicator.',
                    'Titrate with EDTA solution until the colour changes from pink to purple.',
                ],
                calculation: 'Calcium (mg/L) = (A &times; B &times; 400.8) / mL of sample<br/> <p class="text-xs mt-2">where A = mL of titrant for sample, B = mg CaCO₃ equivalent to 1 mL EDTA.</p>'
            },
             {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD measures the total amount of oxygen required to oxidize both organic and inorganic pollutants using a strong chemical oxidant (potassium dichromate).',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Reflux flasks:</strong> 250 mL capacity, with 24/29 ground glass neck.</li>
                        <li><strong>Condensers:</strong> Leibig or equivalent.</li>
                        <li><strong>Hot plate or gas burner.</strong></li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard potassium dichromate solution, 0.0417M (0.25N):</strong> Dissolve 12.259 g K₂Cr₂O₇ (primary standard grade, previously dried at 103 °C for 2 hours) in distilled water and dilute to 1 L.</li>
                        <li><strong>Sulphuric acid reagent:</strong> Add 5.5 g Ag₂SO₄ per kg of conc. H₂SO₄. Let it stand for a day or two to dissolve.</li>
                        <li><strong>Ferroin indicator solution:</strong> Dissolve 1.485 g 1, 10-phenanthroline monohydrate and 695 mg FeSO₄·7H₂O in distilled water and dilute to 100 mL.</li>
                        <li><strong>Standard ferrous ammonium sulphate (FAS), titrant, 0.25M:</strong> Dissolve 98 g Fe(NH₄)₂(SO₄)₂·6H₂O in distilled water, add 20 mL conc. H₂SO₄, cool and dilute to 1 L. Standardise daily.</li>
                        <li><strong>Mercuric Sulphate, HgSO₄, powder.</strong></li>
                        <li><strong>Potassium hydrogen phthalate (KHP) standard:</strong> Weigh 425 mg KHP in distilled water and dilute to 1 L. This solution has a theoretical COD of 500 µgO₂/mL.</li>
                    </ul>
                `,
                procedure: [
                    'Add 50 mL of sample or an aliquot diluted to 50 mL with distilled water in a 500 mL refluxing flask. Add 1g HgSO₄, few glass beads, and 5 mL sulphuric acid reagent, mix, cool. Add 25 mL of 0.0417M K₂Cr₂O₇ solution, mix.',
                    'Connect the flask to the condenser and turn on cooling water, add additional 70 mL of sulphuric acid reagent through open end of condenser, with swirling and mixing.',
                    'Reflux for 2 hours; cool, wash down condenser with distilled water to double the volume of contents, cool.',
                    'Add 2 drops of Ferroin indicator, titrate with FAS the remaining potassium dichromate, until a colour change from bluish green to reddish brown. Also reflux and titrate a distilled water blank with reagents.',
                    'Use standard 0.00417M K₂Cr₂O₇, and 0.025M FAS, when analysing very low COD samples.',
                    'Evaluate the technique and reagents by conducting the test on potassium hydrogen phthalate solution.',
                ],
                calculation: 'COD (mg/L) = [ (A - B) &times; M &times; 8000 ] / mL of sample<br/><p class="text-xs mt-2">where: A = mL of FAS for blank, B = mL of FAS for sample, M = Molarity of FAS.</p><p class="text-sm mt-2"><b>Note:</b> Use smaller sample volumes and proportionally reduce quantities of chemicals as given in the following table.</p><table class="w-full text-left border-collapse mt-2"><thead><tr><th class="border p-2">Sample size (mL)</th><th class="border p-2">K₂Cr₂O₇ (mL)</th><th class="border p-2">H₂SO₄ (mL)</th><th class="border p-2">HgSO₄ (g)</th><th class="border p-2">FAS (mole/L)</th><th class="border p-2">Final volume (mL)</th></tr></thead><tbody><tr><td class="border p-2">10.0</td><td class="border p-2">5.0</td><td class="border p-2">15</td><td class="border p-2">0.2</td><td class="border p-2">0.05</td><td class="border p-2">70</td></tr><tr><td class="border p-2">20.0</td><td class="border p-2">10.0</td><td class="border p-2">30</td><td class="border p-2">0.4</td><td class="border p-2">0.10</td><td class="border p-2">140</td></tr><tr><td class="border p-2">30.0</td><td class="border p-2">15.0</td><td class="border p-2">45</td><td class="border p-2">0.6</td><td class="border p-2">0.15</td><td class="border p-2">210</td></tr><tr><td class="border p-2">40.0</td><td class="border p-2">20.0</td><td class="border p-2">60</td><td class="border p-2">0.8</td><td class="border p-2">0.20</td><td class="border p-2">280</td></tr><tr><td class="border p-2">50.0</td><td class="border p-2">25.0</td><td class="border p-2">75</td><td class="border p-2">1.0</td><td class="border p-2">0.25</td><td class="border p-2">350</td></tr></tbody></table>'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions are naturally present in water but high concentrations can indicate pollution from industrial wastes or sewage. The test is performed using Mohr\'s method.',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Potassium chromate indicator solution.</strong></li>
                        <li><strong>Standard silver nitrate titrant, 0.0141N:</strong> Dissolve 2.395 g AgNO₃ to 1 L.</li>
                        <li><strong>Standard sodium chloride, 0.0141N:</strong> Dissolve 824.0 mg NaCl to 1 L.</li>
                    </ul>
                `,
                procedure: [
                    'Use a 100 mL sample or a suitable portion diluted to 100 mL.',
                    'Add 1 mL K₂CrO₄ indicator, titrate with AgNO₃ titrant to a pinkish yellow end point.',
                    'Also perform a blank titration.',
                ],
                calculation: 'Chloride (mg/L) = [ (A - B) &times; N &times; 35450 ] / mL of sample<br/><p class="text-xs mt-2">where A = mL titration for sample, B = mL titration for blank, N = normality of AgNO₃.</p>'
            },
            {
                id: 'hardness',
                title: 'Total Hardness',
                intro: 'Water hardness is mainly due to calcium and magnesium ions. It is tested using the EDTA titration method.',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `<h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution:</strong> Dissolve 16.9 g NH₄Cl in 143 mL conc. NH₄OH. Add 1.25 g magnesium salt of EDTA and dilute to 250 mL with distilled water.</li>
                        <li><strong>Indicator:</strong> Eriochrome Black T sodium salt. Grind 0.5 g dye with 100 g NaCl.</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> Dissolve 3.723 g of disodium salt of EDTA in distilled water and dilute to 1000 mL.</li>
                        <li><strong>Standard Calcium Solution:</strong> Dissolve 1.000 g CaCO₃ in HCl and dilute to 1000 mL.</li>
                    </ul>
                    <p class="text-xs mt-2"><strong>Note:</strong> If the Mg salt of EDTA is unavailable, prepare buffer by mixing 1.179g disodium EDTA, 780mg MgSO₄·7H₂O, 16.9g NH₄Cl, and 143ml conc. NH₄OH.</p>`,
                procedure: [
                    'Dilute 25 mL sample to 50 mL with distilled water.',
                    'Add 1 to 2 mL buffer solution to give a pH of 10.0 to 10.1.',
                    'Add 1 to 2 drops of indicator solution and titrate with EDTA titrant to change in colour from reddish tinge to blue.',
                    'Complete titration within 5 min after buffer addition.',
                    'Standardise the EDTA titrant against standard calcium solution.',
                ],
                calculation: 'Total Hardness (as mg/L CaCO₃) = (A &times; B &times; 1000) / mL of sample<br/><p class="text-xs mt-2">where A = mL EDTA titrated for sample, B = mg CaCO₃ equivalent to 1.00 mL EDTA titrant.</p>'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen is essential for aquatic life and is a key indicator of water quality. It is tested using the Winkler method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>DO sampler.</li><li>BOD bottles, 300 mL.</li></ul>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Manganous sulphate solution:</strong> Dissolve 480 g MnSO₄·4H₂O to 1 L.</li>
                        <li><strong>Alkali-iodide-azide reagent:</strong> Dissolve 500 g NaOH, 135 g NaI, and 10 g NaN₃ to 1 L.</li>
                        <li><strong>Sulphuric acid, conc.</strong></li>
                        <li><strong>Starch indicator.</strong></li>
                        <li><strong>Standard sodium thiosulphate titrant, 0.025N:</strong> Dissolve 6.205 g Na₂S₂O₃·5H₂O to 1 L.</li>
                    </ul>
                `,
                procedure: [
                    'Carefully fill a 300 mL BOD bottle with water, avoiding air bubbles.',
                    'Add 2 mL of <strong>manganese sulfate solution</strong>, then 2 mL of <strong>alkali-iodide-azide reagent</strong>. Stopper and mix.',
                    'Allow the precipitate to settle.',
                    'Add 2 mL of <strong>concentrated sulfuric acid</strong> and mix until completely dissolved.',
                    'Titrate a specific volume (e.g., 201 mL) with standard <strong>sodium thiosulfate (0.025N)</strong> until a pale straw color remains.',
                    'Add 1-2 mL of <strong>starch indicator</strong> (the solution will turn blue).',
                    'Continue titrating until the blue color disappears completely. Note the volume.',
                ],
                calculation: 'DO (mg/L) = (V of Titrant &times; Molarity of Titrant &times; 8000) / 200'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'Potentiometric method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>pH meter with temperature compensation.</li><li>Reference and Glass electrodes.</li></ul>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solutions:</strong> Commercially available or prepared for pH 4.00, 6.86, and 9.18.</li>
                    </ul>
                `,
                procedure: [
                  'Calibrate pH meter using two buffer solutions (typically pH 4 and 7) according to manufacturer’s instructions.',
                  'Rinse electrodes with distilled water, blot dry, and immerse in the sample.',
                  'Read the pH after equilibrium is established.',
                ],
                calculation: 'Read directly from the meter.'
            },
             {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS is the total amount of all dissolved organic and inorganic solids in water. It is tested using the gravimetric method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Evaporating dishes.</li><li>Drying oven, 180±2°C.</li><li>Desiccator.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Take a clean, dry, pre-weighed beaker (W₁).',
                    'Place a known volume (e.g., 100 mL) of filtered water into the beaker.',
                    'Evaporate the water completely on a hot plate or water bath.',
                    'Dry the beaker in a hot air oven at 180°C for one hour.',
                    'Cool the beaker in a desiccator and weigh it again (W₂).',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
             {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS is a measure of solid particles that remain on a filter paper.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Glass-fibre filter disk.</li><li>Filtration apparatus.</li><li>Drying oven, 103–105°C.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Filter a known volume of water through a pre-weighed glass fiber filter paper (W₁).',
                    'Dry the filter paper with the retained solids in a hot air oven at 103-105°C for one hour.',
                    'Cool in a desiccator and weigh again (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'fluoride',
                title: 'Fluoride',
                intro: 'Determination of fluoride using SPADNS spectrophotometric method or Ion Selective Electrode method.',
                apparatus: '<p>Spectrophotometer (570 nm) or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>Reagents for SPADNS Method</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard fluoride solution.</strong></li>
                        <li><strong>SPADNS solution.</strong></li>
                        <li><strong>Zirconyl-acid reagent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Distill sample if necessary.',
                    'Add SPADNS and Zirconyl-acid reagent to the sample.',
                    'Read absorbance at 570 nm and calculate concentration from calibration curve.',
                ],
                calculation: 'Read fluoride concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'iron',
                title: 'Iron',
                intro: 'Spectrophotometric determination of iron using the Phenanthroline method.',
                 apparatus: '<p>Spectrophotometer (510 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Hydroxylamine solution.</strong></li>
                        <li><strong>Phenanthroline solution.</strong></li>
                        <li><strong>Standard iron solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add hydrochloric acid and hydroxylamine solution to the sample.',
                    'Add buffer and phenanthroline solution.',
                    'Read absorbance at 510 nm.',
                ],
                calculation: 'Read iron concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'magnesium',
                title: 'Magnesium',
                intro: 'Calculation from total hardness and calcium hardness.',
                apparatus: '<p>Not required.</p>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Determine Total Hardness.',
                    'Determine Calcium Hardness.',
                ],
                calculation: 'Mg (mg/L) = [Total Hardness (mg/L as CaCO₃) - Calcium Hardness (mg/L as CaCO₃)] x 0.243'
            },
            {
                id: 'manganese',
                title: 'Manganese',
                intro: 'Spectrophotometric determination of manganese using the Persulphate method.',
                apparatus: '<p>Spectrophotometer (525 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Special reagent (HgSO₄, HNO₃, H₃PO₄, AgNO₃).</strong></li>
                        <li><strong>Ammonium persulphate.</strong></li>
                        <li><strong>Standard manganese solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add special reagent to the sample and boil.',
                    'Add ammonium persulphate and boil.',
                    'Read absorbance at 525 nm.',
                ],
                calculation: 'Read manganese concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'ammonia',
                title: 'Nitrogen, Ammonia',
                intro: 'Determination of ammonia by distillation and titration, phenate, or ion selective electrode methods.',
                 apparatus: '<p>Distillation apparatus, Spectrophotometer (640 nm), or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>Reagents for Titrimetric Method</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Borate buffer.</strong></li>
                        <li><strong>Indicating boric acid solution.</strong></li>
                        <li><strong>Standard sulphuric acid, 0.02N.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Buffer the sample and distill the ammonia.',
                    'Collect the distillate in boric acid.',
                    'Titrate with standard sulfuric acid.',
                ],
                calculation: 'NH₃-N (mg/L) = [ (A - B) &times; 280 ] / mL of sample'
            },
            {
                id: 'nitrate',
                title: 'Nitrogen, Nitrate',
                intro: 'Determination by calculation from TON and NO₂-N, or by ion selective electrode, or UV spectrophotometric methods.',
                apparatus: '<p>Spectrophotometer or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>Reagents for UV Method</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard Nitrate solution.</strong></li>
                        <li><strong>Hydrochloric acid solution, 1N.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add HCl to the sample.',
                    'Read absorbance at 220 nm (for nitrate) and 275 nm (for organic interference).',
                ],
                calculation: 'Read nitrate concentration (mg N/L) from the calibration curve.'
            },
             {
                id: 'nitrite',
                title: 'Nitrogen, Nitrite',
                intro: 'Spectrophotometric determination of nitrite using the Sulphanilamide method.',
                apparatus: '<p>Spectrophotometer (543 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Colour reagent.</strong></li>
                        <li><strong>Standard nitrite solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add colour reagent to the sample.',
                    'Read absorbance at 543 nm between 10 min and 2 h.',
                ],
                calculation: 'Read nitrite concentration (mg N/L) from the calibration curve.'
            },
             {
                id: 'organic_nitrogen',
                title: 'Nitrogen, Organic',
                intro: 'Determination of organic nitrogen by the Kjeldahl method.',
                apparatus: '<p>Digestion and Distillation apparatus.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Digestion reagent (K₂SO₄, CuSO₄, H₂SO₄).</strong></li>
                        <li><strong>Sodium hydroxide thiosulphate reagent.</strong></li>
                        <li><strong>Indicating boric acid solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Remove ammonia from the sample.',
                    'Digest the remaining sample with digestion reagent.',
                    'Distill the ammonia and titrate with standard acid.',
                ],
                calculation: 'Organic N (mg/L) = [ (A - B) &times; 280 ] / mL of sample'
            },
             {
                id: 'ton',
                title: 'Nitrogen, Total Oxidised (NO₂ + NO₃)',
                intro: 'Determination of total oxidized nitrogen by cadmium reduction and spectrophotometric method.',
                 apparatus: '<p>Reduction column, Spectrophotometer (543 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Copper-cadmium granules.</strong></li>
                        <li><strong>Ammonium chloride-EDTA solution.</strong></li>
                        <li><strong>Colour reagent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Pass sample through a cadmium reduction column to convert nitrate to nitrite.',
                    'Follow the spectrophotometric method for nitrite.',
                ],
                calculation: 'Read TON concentration (mg N/L) from the calibration curve.'
            },
            {
                id: 'odour',
                title: 'Odour',
                intro: 'Qualitative human receptor method.',
                apparatus: '<p>Odourless glass bottle.</p>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Fill a cleaned odourless bottle half - full of sample, insert stopper, shake vigorously for 2 to 3 seconds and then quickly observe the odour.',
                ],
                calculation: 'Report the odour as: odour free, rotten egg, burnt sugar, soapy, fishy, septic, aromatic, chlorinous, alcoholic odour or any other specific odour.'
            },
             {
                id: 'orthophosphate',
                title: 'Phosphorus, Ortho Phosphate',
                intro: 'Spectrophotometric determination of orthophosphate using the Ascorbic Acid method.',
                 apparatus: '<p>Spectrophotometer (880 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sulphuric acid, 5N.</strong></li>
                        <li><strong>Potassium antimonyl tartrate solution.</strong></li>
                        <li><strong>Ammonium molybdate solution.</strong></li>
                        <li><strong>Ascorbic acid, 0.1M.</strong></li>
                        <li><strong>Combined reagent (mixture of all four reagents).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add combined reagent to the sample.',
                    'Wait for 10 to 30 minutes and read absorbance at 880 nm.',
                ],
                calculation: 'o-PO₄ (mg P/L) = [mg P from calibration curve &times; 1000] / mL of sample'
            },
             {
                id: 'total_phosphorus',
                title: 'Phosphorus, Total',
                intro: 'Determination of total phosphorus by digestion and ascorbic acid spectrophotometric method.',
                apparatus: '<p>Hot plate, Spectrophotometer (880 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Persulphate.</strong></li>
                        <li><strong>Sulphuric acid, 10N.</strong></li>
                        <li><strong>Combined reagent (as for orthophosphate).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Digest the sample with persulphate and sulfuric acid.',
                    'Neutralize and follow the procedure for orthophosphate.',
                ],
                calculation: 'Total P (mg/L) = [mg P from calibration curve &times; 1000] / mL of sample'
            },
            {
                id: 'potassium',
                title: 'Potassium',
                intro: 'Determination of potassium by flame emission photometric method.',
                 apparatus: '<p>Flame photometer.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock potassium solution (1000 mg K/L).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Set instrument at 766.5 nm.',
                    'Prepare a calibration curve using standards.',
                    'Measure emission intensity in the sample.',
                ],
                calculation: 'Read potassium concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'silicate',
                title: 'Silicate',
                intro: 'Spectrophotometric determination of silicate by the ammonium molybdate method.',
                apparatus: '<p>Spectrophotometer (815 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Ammonium molybdate reagent.</strong></li>
                        <li><strong>Oxalic acid solution.</strong></li>
                        <li><strong>Reducing agent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add HCl and ammonium molybdate to sample, followed by oxalic acid and reducing agent.',
                    'Read absorbance at 815 nm.',
                ],
                calculation: 'Read silicate concentration (mg SiO₂/L) from the calibration curve.'
            },
            {
                id: 'sodium',
                title: 'Sodium',
                intro: 'Determination of sodium by flame emission photometric method.',
                apparatus: '<p>Flame photometer.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock sodium solution (1000 mg Na/L).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Set instrument at 589 nm.',
                    'Prepare a calibration curve using standards.',
                    'Measure emission intensity in the sample.',
                ],
                calculation: 'Read sodium concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'sulphate',
                title: 'Sulphate',
                intro: 'Determination of sulphate by the nephelometric method.',
                 apparatus: '<p>Nephelometric turbidity meter or spectrophotometer (420 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution.</strong></li>
                        <li><strong>Barium chloride crystals.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add buffer solution to the sample.',
                    'Add barium chloride crystals and stir for 60 seconds.',
                    'Measure turbidity after 5 minutes.',
                ],
                calculation: 'Read sulphate concentration (mg/L) from the calibration curve.'
            },
             {
                id: 'temperature',
                title: 'Temperature',
                intro: 'Mercury thermometer method.',
                apparatus: '<p>Mercury thermometer.</p>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Immerse thermometer in the sample up to the mark specified by the manufacturer and read temperature after equilibration.',
                ],
                calculation: 'Read directly from the thermometer.'
            },
            {
                id: 'turbidity',
                title: 'Turbidity',
                intro: 'Nephelometric method.',
                apparatus: '<p>Nephelometric turbidity meter.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Formazin polymer suspension (4000 NTU stock).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Calibrate nephelometer according to manufacturer’s operating instructions.',
                    'Gently agitate sample. Wait until air bubbles disappear and pour sample into cell. Read turbidity directly from instrument display.',
                ],
                calculation: 'Read directly from the instrument display.'
            }
        ]
    }
}

