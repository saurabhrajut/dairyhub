
export const evaporationContent = {
    en: {
        title: "Evaporation",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Dairy Processing mein Evaporation ka Introduction</h3>
            <p>Evaporation dairy industry mein ek crucial unit operation hai jo milk ya whey ko water vapor ke form mein remove karke concentrate karta hai. Ye process condensed milk, evaporated milk, aur milk powders manufacturing mein primary step hai. Main goal liquid ki total solids content increase karna hai, jo transportation costs reduce karta hai, shelf life increase karta hai (water activity reduce karke), aur product ko subsequent processes jaise spray drying ke liye prepare karta hai.</p>
            
            <p><strong>Industrial Significance:</strong> Modern dairy industry mein evaporation ek energy-intensive operation hai jo processing cost ka 30-50% constitute karta hai. High-efficiency evaporation systems annual energy savings millions of dollars mein provide kar sakte hain large-scale operations ke liye. Example: 100 tonnes/day milk powder plant approximately 15-25 tonnes/hour steam consume karta hai evaporation ke liye alone.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Vacuum Evaporation ka Principle: Thermodynamic Foundation</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Boiling Point aur Pressure Relationship</h4>
            <p>Water atmospheric pressure (101.325 kPa ya 1 atm) par 100°C par boil karta hai. Lekin boiling point pressure ke saath dramatically vary karta hai, jo Clausius-Clapeyron equation se describe hota hai:</p>
            
            <p><strong>Clausius-Clapeyron Equation:</strong></p>
            <p>ln(P₂/P₁) = -(ΔHᵥₐₚ/R) × (1/T₂ - 1/T₁)</p>
            <p>Jahan: P = vapor pressure, ΔHᵥₐₚ = latent heat of vaporization (~2257 kJ/kg for water), R = gas constant (8.314 J/mol·K), T = absolute temperature (K)</p>
            
            <p><strong>Practical Boiling Point-Pressure Data for Water:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Absolute Pressure (kPa)</th>
                        <th class="border border-gray-300 px-4 py-2">Vacuum Level (kPa below atm)</th>
                        <th class="border border-gray-300 px-4 py-2">Boiling Point (°C)</th>
                        <th class="border border-gray-300 px-4 py-2">Typical Application</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">101.3</td>
                        <td class="border border-gray-300 px-4 py-2">0 (atmospheric)</td>
                        <td class="border border-gray-300 px-4 py-2">100</td>
                        <td class="border border-gray-300 px-4 py-2">No vacuum (avoid in dairy)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">47.4</td>
                        <td class="border border-gray-300 px-4 py-2">53.9</td>
                        <td class="border border-gray-300 px-4 py-2">80</td>
                        <td class="border border-gray-300 px-4 py-2">First effect (multi-effect)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">19.9</td>
                        <td class="border border-gray-300 px-4 py-2">81.4</td>
                        <td class="border border-gray-300 px-4 py-2">60</td>
                        <td class="border border-gray-300 px-4 py-2">Second/third effect</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">7.38</td>
                        <td class="border border-gray-300 px-4 py-2">93.9</td>
                        <td class="border border-gray-300 px-4 py-2">40</td>
                        <td class="border border-gray-300 px-4 py-2">Final effect (gentle processing)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">2.34</td>
                        <td class="border border-gray-300 px-4 py-2">99.0</td>
                        <td class="border border-gray-300 px-4 py-2">20</td>
                        <td class="border border-gray-300 px-4 py-2">Ultra-low temp (experimental)</td>
                    </tr>
                </tbody>
            </table>
            
            <p><strong>Key Insight:</strong> 95% vacuum level (pressure 5 kPa se kam) par, water sirf 33°C par boil karta hai—body temperature se kam! Ye gentle evaporation dairy products ke liye ideal hai.</p>
            
            <h4 class="font-semibold mt-4 mb-2">Heat Damage Prevention: Scientific Rationale</h4>
            
            <p>Extended high-temperature exposure se milk mein kai detrimental reactions occur karte hain:</p>
            
            <p><strong>1. Protein Denaturation (>70°C):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Whey Protein Denaturation:</strong> β-lactoglobulin aur α-lactalbumin 70-80°C par denature hone lagte hain. Ye tertiary structure lose karte hain, exposing hydrophobic groups → protein aggregation → fouling on heat exchange surfaces → reduced heat transfer efficiency (coefficient 50-70% decrease ho sakta hai heavily fouled surfaces par).</li>
                <li><strong>Casein Micelle Destabilization:</strong> 90°C se upar prolonged heating casein micelles ko disrupt karta hai → colloidal calcium phosphate dissolution → age gelation susceptibility increase.</li>
                <li><strong>Functional Impact:</strong> Denatured proteins reduced solubility, altered water-binding, aur modified emulsification properties show karte hain—final product quality adversely affect karta hai.</li>
            </ul>
            
            <p><strong>2. Maillard Reaction (Non-Enzymatic Browning):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Mechanism:</strong> Reducing sugars (lactose) amino groups (milk proteins mein lysine residues) ke saath react karte hain forming glycosylamines → Amadori rearrangement → melanoidins (brown pigments) + heterocyclic compounds (flavor compounds).</li>
                <li><strong>Temperature Dependence:</strong> Reaction rate temperature ke saath exponentially increase hota hai. Q₁₀ (rate increase per 10°C rise) typically 2-4 hai dairy products mein. Matlab: 80°C par rate 60°C se 4-16× higher ho sakta hai.</li>
                <li><strong>Consequences:</strong> Undesirable brown color, cooked/caramel flavor, lysine destruction (nutritional value loss—lysine essential amino acid hai), reduced protein digestibility.</li>
            </ul>
            
            <p><strong>3. Lactose Caramelization (>100°C):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Atmospheric boiling temperature ke near, lactose thermal decomposition undergo karta hai forming caramel compounds, organic acids, aur bitter-tasting degradation products.</li>
                <li>Vacuum evaporation (60°C se kam) ye completely avoid karta hai.</li>
            </ul>
            
            <p><strong>4. Vitamin Degradation:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Vitamin</th>
                        <th class="border border-gray-300 px-4 py-2">Heat Sensitivity</th>
                        <th class="border border-gray-300 px-4 py-2">Loss at 100°C (30 min)</th>
                        <th class="border border-gray-300 px-4 py-2">Loss at 60°C (30 min)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Vitamin C (Ascorbic acid)</td>
                        <td class="border border-gray-300 px-4 py-2">Bahut high</td>
                        <td class="border border-gray-300 px-4 py-2">80-100%</td>
                        <td class="border border-gray-300 px-4 py-2">10-25%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Thiamine (B₁)</td>
                        <td class="border border-gray-300 px-4 py-2">High</td>
                        <td class="border border-gray-300 px-4 py-2">40-60%</td>
                        <td class="border border-gray-300 px-4 py-2">5-15%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Folate (B₉)</td>
                        <td class="border border-gray-300 px-4 py-2">Moderate</td>
                        <td class="border border-gray-300 px-4 py-2">25-40%</td>
                        <td class="border border-gray-300 px-4 py-2">5-10%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Riboflavin (B₂)</td>
                        <td class="border border-gray-300 px-4 py-2">Low</td>
                        <td class="border border-gray-300 px-4 py-2">10-15%</td>
                        <td class="border border-gray-300 px-4 py-2"><5%</td>
                    </tr>
                </tbody>
            </table>
            
            <p><strong>Conclusion:</strong> Vacuum evaporation (40-70°C operating range) dramatically reduces thermal degradation compared to atmospheric boiling, preserving product quality, nutritional value, aur functional properties.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Heat Transfer Fundamentals in Evaporators</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Overall Heat Transfer Equation</h4>
            <p>Evaporator ka heart heat transfer hai hot steam se boiling milk tak through tube wall. Quantitative relationship:</p>
            
            <p><strong>Q = U × A × ΔT<sub>m</sub></strong></p>
            <p>Jahan:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Q = heat transfer rate (kW ya kJ/hr)</li>
                <li>U = overall heat transfer coefficient (W/m²·K)</li>
                <li>A = heat transfer area (m²)</li>
                <li>ΔT<sub>m</sub> = mean temperature difference between steam aur boiling milk (K ya °C)</li>
            </ul>
            
            <p><strong>Overall Heat Transfer Coefficient (U):</strong></p>
            <p>U kai individual resistances ka combined effect hai:</p>
            <p>1/U = 1/h<sub>steam</sub> + t<sub>wall</sub>/k<sub>wall</sub> + 1/h<sub>milk</sub> + R<sub>fouling</sub></p>
            
            <p>Jahan:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>h<sub>steam</sub> = steam-side heat transfer coefficient (typically 8,000-15,000 W/m²·K for condensing steam—bahut high!)</li>
                <li>t<sub>wall</sub> = tube wall thickness (typically 1-2 mm stainless steel)</li>
                <li>k<sub>wall</sub> = thermal conductivity of wall material (SS 316: ~16 W/m·K)</li>
                <li>h<sub>milk</sub> = milk-side heat transfer coefficient (1,000-3,000 W/m²·K falling film evaporators mein)</li>
                <li>R<sub>fouling</sub> = fouling resistance (0.0001-0.0005 m²·K/W clean surface ke liye, 0.001-0.003 heavily fouled surface ke liye)</li>
            </ul>
            
            <p><strong>Example Calculation:</strong></p>
            <p>Clean falling film evaporator tube:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>h<sub>steam</sub> = 10,000 W/m²·K</li>
                <li>Wall resistance = 0.0015 m / 16 W/m·K = 0.000094 m²·K/W</li>
                <li>h<sub>milk</sub> = 2,000 W/m²·K</li>
                <li>R<sub>fouling</sub> = 0.0002 m²·K/W (relatively clean)</li>
            </ul>
            <p>1/U = 1/10000 + 0.000094 + 1/2000 + 0.0002 = 0.0001 + 0.000094 + 0.0005 + 0.0002 = 0.000794</p>
            <p>U = 1/0.000794 = 1,259 W/m²·K</p>
            
            <p><strong>Fouling Impact:</strong> Agar R<sub>fouling</sub> 0.002 m²·K/W increase ho jaye (heavy fouling):</p>
            <p>1/U = 0.000794 + 0.002 = 0.002794 → U = 358 W/m²·K (72% reduction!)</p>
            <p>Result: Heat transfer capacity 72% drop, evaporation rate dramatically reduced, ya steam consumption proportionally increased.</p>
            
            <h4 class="font-semibold mt-4 mb-2">Boiling Point Elevation (BPE)</h4>
            
            <p>Pure water vacuum ke under ek certain temperature par boils. Lekin milk solution concentrated hone par, dissolved solids (lactose, minerals, proteins) vapor pressure reduce karte hain, boiling point increase karte hue. Ye phenomenon <strong>Boiling Point Elevation</strong> kehlata hai.</p>
            
            <p><strong>Dühring's Rule:</strong> BPE ka estimation:</p>
            <p>BPE ≈ K × (% Total Solids)</p>
            <p>Jahan K concentration aur pressure dependent constant hai (typically 0.03-0.08 for milk under typical evaporator conditions).</p>
            
            <p><strong>Practical Example:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Pure water 20 kPa absolute pressure par: boiling point = 60°C</li>
                <li>Milk 12% total solids (normal milk): BPE ≈ 0.05 × 12 = 0.6°C → boiling point ≈ 60.6°C</li>
                <li>Milk 50% total solids (concentrated): BPE ≈ 0.07 × 50 = 3.5°C → boiling point ≈ 63.5°C</li>
            </ul>
            
            <p><strong>Impact on Evaporator Design:</strong> BPE effective ΔT reduce karta hai. Agar steam 70°C hai aur concentrated milk 63.5°C par boiling hai, actual driving force sirf 6.5°C (instead of 10°C for pure water). Ye heat transfer rate aur evaporation capacity reduce karta hai as concentration increases.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Evaporators: Detailed Engineering Analysis</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Falling Film Evaporator (FFE)</h4>
            
            <p><strong>Design aur Construction:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Calandria (Tube Bundle):</strong> 100-300 vertical tubes, typically 6-10 meters long, 25-50 mm internal diameter, stainless steel SS 316L. Tubes hexagonal ya square pattern mein arranged hote hain compact design ke liye.</li>
                <li><strong>Distribution System:</strong> Top par liquid distributor milk ko uniformly sabhi tubes ki inner walls par distribute karta hai. Critical design—uneven distribution se dry patches (overheating, burning) aur wet patches (inefficient evaporation) cause hote hain.</li>
                <li><strong>Steam Chest:</strong> Tube bundle ko surround karne wala jacket jisme heating steam flow karta hai. Steam tubes ke outer surface par condense hota hai, latent heat release karte hue.</li>
                <li><strong>Vapor Separator:</strong> Tube bundle ke bottom par large-diameter cylindrical vessel. Centrifugal or gravity separation use karke vapor concentrate se separate hota hai.</li>
            </ul>
            
            <p><strong>Operating Principle - Detailed Physics:</strong></p>
            <ol class="list-decimal list-outside pl-5 mt-2 space-y-3">
                <li><strong>Film Formation:</strong> Milk tube top par enter karta hai aur gravity ke under tube wall par thin film (0.1-0.5 mm thickness) ke roop mein neeche flow karta hai. Film thickness critical hai—too thick: poor heat transfer; too thin: dry spots aur burning.</li>
                <li><strong>Heat Transfer:</strong> Steam (typically 100-150°C, 100-470 kPa gauge pressure) tube outer surface par condense hota hai → latent heat (≈2000-2100 kJ/kg) tube wall ke through milk film mein transfer hota hai → film surface par water rapidly evaporates.</li>
                <li><strong>Vapor Generation:</strong> Evaporated water vapor milk film se separate hota hai aur upward flow karta hai (because vapor density 1000× kam milk se). Ye counter-current flow create karta hai jo mass transfer enhance karta hai.</li>
                <li><strong>Concentrate Collection:</strong> Concentrated milk (ab higher total solids ke saath) tube bottom par collect hota hai aur vapor separator vessel mein discharge hota hai.</li>
                <li><strong>Phase Separation:</strong> Separator mein, vapor overhead exit karta hai (next effect ko supply hone ke liye ya condenser mein), jab ki concentrate bottom se withdraw hota hai further processing ke liye.</li>
            </ol>
            
            <p><strong>Key Advantages of FFE:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Short Residence Time:</strong> Milk sirf 5-30 seconds heated surface ke contact mein rehta hai (tube length aur flow velocity ke depending). Atmospheric evaporators (30-60 min residence time) ke comparison mein, ye 100× reduction hai → minimal heat damage.</li>
                <li><strong>High Heat Transfer Coefficient:</strong> Thin film aur turbulent flow (if vapor shear high enough) h<sub>milk</sub> = 2,000-4,000 W/m²·K achieve karte hain, vs 500-800 W/m²·K for thick-film evaporators.</li>
                <li><strong>Low Fouling Tendency:</strong> High velocity (2-5 m/s typical) aur short residence time protein denaturation aur deposition minimize karte hain. CIP cycles typically har 8-24 hours (vs 4-8 hours older designs mein).</li>
                <li><strong>Gentle Product Handling:</strong> Low temperature, short time, aur minimal mechanical stress product quality preserve karte hain—critical for heat-sensitive dairy products.</li>
                <li><strong>Flexibility:</strong> Wide range of inlet concentrations (5-50% TS) aur evaporation rates (500-50,000 kg water/hr depending on size) handle kar sakta hai.</li>
            </ul>
            
            <p><strong>Limitations:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Minimum Wetting Rate:</strong> Film stable formation ke liye minimum liquid flow rate (typically 0.5-1.5 kg/m tube circumference·s) required hai. Highly concentrated liquids (>55% TS) ya low throughputs par, adequate wetting maintain karna difficult ho jata hai.</li>
                <li><strong>Viscosity Limitation:</strong> High-viscosity products (>50 cP) uniform film formation disturb karte hain, heat transfer reduce karte hue. Practical limit: ~200 cP at operating temperature.</li>
                <li><strong>Foam Formation:</strong> High-protein products (whey concentrate, skim milk) excessive foaming show kar sakte hain, vapor-liquid separation difficult banate hue. Anti-foam agents ya mechanical foam breakers required ho sakte hain.</li>
            </ul>
            
            <p><strong>Typical Performance Data:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Parameter</th>
                        <th class="border border-gray-300 px-4 py-2">Single Effect</th>
                        <th class="border border-gray-300 px-4 py-2">4-Effect System</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Operating Pressure</td>
                        <td class="border border-gray-300 px-4 py-2">15-50 kPa abs</td>
                        <td class="border border-gray-300 px-4 py-2">5-80 kPa (varying by effect)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Boiling Temperature</td>
                        <td class="border border-gray-300 px-4 py-2">50-80°C</td>
                        <td class="border border-gray-300 px-4 py-2">40-85°C (varying by effect)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Overall U (clean)</td>
                        <td class="border border-gray-300 px-4 py-2">1,200-2,500 W/m²·K</td>
                        <td class="border border-gray-300 px-4 py-2">800-2,000 W/m²·K (avg)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Steam Economy</td>
                        <td class="border border-gray-300 px-4 py-2">0.9-1.0 kg water/kg steam</td>
                        <td class="border border-gray-300 px-4 py-2">3.0-3.8 kg water/kg steam</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Residence Time</td>
                        <td class="border border-gray-300 px-4 py-2">10-30 seconds</td>
                        <td class="border border-gray-300 px-4 py-2">40-120 seconds (total)</td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="font-semibold mt-4 mb-2">2. Rising Film (Climbing Film) Evaporator</h4>
            
            <p><strong>Design Concept:</strong> Similar to FFE lekin film upward flow karta hai tube ke andar. Milk bottom se enter hota hai, aur rapid vapor generation se created upward momentum milk film ko tube walls par upward carry karta hai.</p>
            
            <p><strong>Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Self-circulation due to vapor lift—no recirculation pump needed for dilute feeds</li>
                <li>Higher turbulence due to vapor bubbles → better heat transfer for low-viscosity liquids</li>
                <li>Effective for high evaporation rates (>50% water removal in single pass possible)</li>
            </ul>
            
            <p><strong>Disadvantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Longer residence time than FFE (30-90 seconds)</li>
                <li>Not suitable for viscous or heat-sensitive products</li>
                <li>Difficult to control with varying feed rates</li>
            </ul>
            
            <p><strong>Application:</strong> Limited use in modern dairy—primarily for preliminary evaporation of whey ya skim milk jahan heat sensitivity kam critical hai.</p>
            
            <h4 class="font-semibold mt-4 mb-2">3. Plate Evaporator</h4>
            
            <p><strong>Design:</strong> Gasketed plate heat exchanger design use karta hai. Corrugated plates alternating steam aur milk channels create karte hain. Milk plates ke beech thin channels (3-6 mm) mein flow karta hai jab ki steam adjacent channels mein condense hota hai.</p>
            
            <p><strong>Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Compact Design:</strong> Tubular evaporators se 3-5× smaller footprint for same capacity</li>
                <li><strong>Easy Maintenance:</strong> Plates easily accessible cleaning ke liye—disassembly simple</li>
                <li><strong>Flexible Capacity:</strong> Plates add/remove karke capacity adjust kar sakte hain</li>
                <li><strong>High Turbulence:</strong> Corrugated plate geometry turbulence promote karta hai → high h values (2,500-4,000 W/m²·K)</li>
            </ul>
            
            <p><strong>Disadvantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Gasket Limitations:</strong> Temperature limit ~140°C, pressure limit ~10 bar gauge—restricts operating conditions</li>
                <li><strong>Fouling Sensitivity:</strong> Narrow channels clog hone prone hain high-protein feeds se</li>
                <li><strong>Pressure Drop:</strong> Higher than tubular evaporators—pump power consumption increase</li>
            </ul>
            
            <p><strong>Application:</strong> Growing use in small-to-medium scale dairy plants (500-5,000 L/hr milk) where space limited aur flexibility valued hai.</p>
            
            <h4 class="font-semibold mt-4 mb-2">4. Forced Circulation Evaporator</h4>
            
            <p><strong>Design:</strong> Liquid ko external circulation pump se high velocity (2-4 m/s) par heat exchanger (tubular calandria) ke through circulate kiya jata hai. Boiling primarily vapor separator vessel mein occur karta hai, heat exchanger mein nahi (to avoid localized overheating).</p>
            
            <p><strong>Operating Principle:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Concentrate ko recirculation pump continuously heat exchanger mein pump karta hai</li>
                <li>High velocity fouling minimize karta hai aur heat transfer enhance karta hai</li>
                <li>Heated liquid separator vessel mein discharge hota hai jahan pressure suddenly drops → flash evaporation occurs</li>
                <li>Vapor overhead remove hota hai, liquid recirculate hota hai (with fresh feed added)</li>
            </ul>
            
            <p><strong>Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>High-viscosity products (up to 1,000 cP) handle kar sakta hai</li>
                <li>Crystallizing solutions (lactose crystallization applications) handle kar sakta hai bina tube blockage</li>
                <li>Better fouling control high velocity se</li>
            </ul>
            
            <p><strong>Disadvantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>High power consumption due to recirculation pump (5-15 kW per 1000 kg/hr evaporation)</li>
                <li>Longer residence time due to recirculation (several minutes)—not suitable for very heat-sensitive products</li>
                <li>More complex operation aur maintenance</li>
            </ul>
            
            <p><strong>Application:</strong> Mainly for highly concentrated products (sweetened condensed milk final stages, whey protein concentrate >60% TS).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Multi-Effect Evaporation: Energy Efficiency ka Cornerstone</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Concept aur Thermodynamic Principle</h4>
            
            <p>Single-effect evaporator mein, steam latent heat use karke water evaporate hota hai, aur generated vapor condenser mein condense hoke waste heat ban jata hai. Ye energy-wise inefficient hai—approximately 1 kg steam sirf 0.9-1.0 kg water evaporate kar sakta hai.</p>
            
            <p><strong>Multi-Effect Strategy:</strong> Pehle effect se generated vapor (jo still significant thermal energy contain karta hai) ko heating medium ke roop mein next effect mein use karein, jo lower pressure/temperature par operate karta hai. Ye cascading reuse same input steam se multiple times water evaporation allow karta hai.</p>
            
            <p><strong>Steam Economy Definition:</strong></p>
            <p>Steam Economy = (kg water evaporated) / (kg fresh steam consumed)</p>
            
            <p><strong>Theoretical Steam Economy:</strong></p>
            <p>Ideal conditions (no losses, equal ΔT per effect) ke under: Steam Economy ≈ Number of Effects</p>
            <p>Example: 4-effect system → theoretical economy = 4.0 (4 kg water per kg steam)</p>
            
            <p><strong>Practical Steam Economy:</strong> Losses (BPE, heat losses, non-ideal ΔT distribution) se reduce hota hai:</p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Number of Effects</th>
                        <th class="border border-gray-300 px-4 py-2">Theoretical Economy</th>
                        <th class="border border-gray-300 px-4 py-2">Practical Economy</th>
                        <th class="border border-gray-300 px-4 py-2">Efficiency (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">1</td>
                        <td class="border border-gray-300 px-4 py-2">1.0</td>
                        <td class="border border-gray-300 px-4 py-2">0.90-0.95</td>
                        <td class="border border-gray-300 px-4 py-2">90-95%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">2</td>
                        <td class="border border-gray-300 px-4 py-2">2.0</td>
                        <td class="border border-gray-300 px-4 py-2">1.7-1.9</td>
                        <td class="border border-gray-300 px-4 py-2">85-95%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">3</td>
                        <td class="border border-gray-300 px-4 py-2">3.0</td>
                        <td class="border border-gray-300 px-4 py-2">2.4-2.7</td>
                        <td class="border border-gray-300 px-4 py-2">80-90%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">4</td>
                        <td class="border border-gray-300 px-4 py-2">4.0</td>
                        <td class="border border-gray-300 px-4 py-2">3.0-3.5</td>
                        <td class="border border-gray-300 px-4 py-2">75-87%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">5</td>
                        <td class="border border-gray-300 px-4 py-2">5.0</td>
                        <td class="border border-gray-300 px-4 py-2">3.5-4.2</td>
                        <td class="border border-gray-300 px-4 py-2">70-84%</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">6-7</td>
                        <td class="border border-gray-300 px-4 py-2">6.0-7.0</td>
                        <td class="border border-gray-300 px-4 py-2">4.0-5.0</td>
                        <td class="border border-gray-300 px-4 py-2">67-71%</td>
                    </tr>
                </tbody>
            </table>
            
            <p><strong>Economic Optimization:</strong> More effects = better steam economy lekin higher capital cost. Optimal design typically:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Small plants (<5,000 kg/hr evaporation): 2-3 effects</li>
                <li>Medium plants (5,000-20,000 kg/hr): 3-4 effects</li>
                <li>Large plants (>20,000 kg/hr): 4-6 effects</li>
                <li>Very large plants with MVR/TVR: 6-7 effects + mechanical/thermal vapor recompression</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">Flow Arrangements in Multi-Effect Systems</h4>
            
            <p><strong>1. Forward Feed (Co-current):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Configuration:</strong> Feed first effect mein enter karta hai (highest temperature/pressure), concentrate successive effects ke through progressively lower temperatures par flow karta hai.</li>
                <li><strong>Advantage:</strong> Simplest design, feed pump sirf first effect pressure overcome karna hai (subsequent effects lower pressure par), no inter-effect pumps needed (pressure differential drives flow).</li>
                <li><strong>Disadvantage:</strong> Most concentrated product (highest viscosity) sabse low temperature par hai → poorest heat transfer conditions → lowest evaporation rate in final effect → unbalanced load distribution.</li>
                <li><strong>Application:</strong> Heat-sensitive products jahan final effect low temperature critical hai, ya products jo crystallize nahi karte (no viscosity issue).</li>
            </ul>
            
            <p><strong>2. Backward Feed (Counter-current):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Configuration:</strong> Feed last effect (lowest temperature) mein enter karta hai, concentrate backward pumped hota hai through progressively hotter effects.</li>
                <li><strong>Advantage:</strong> Concentrated product highest temperature par hai → lowest viscosity → best heat transfer conditions → more balanced evaporation rates across effects. Higher final concentration achievable.</li>
                <li><strong>Disadvantage:</strong> Inter-effect pumps required (har effect ke beech because concentrate higher pressure zone mein pump karna hai)—capital cost aur complexity increase. Total heat exposure time longer (product sabhi temperatures experience karta hai).</li>
                <li><strong>Application:</strong> High final concentration (>50% TS) required jahan viscosity dominant factor hai. Common in sweetened condensed milk production.</li>
            </ul>
            
            <p><strong>3. Mixed Feed (Hybrid):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Configuration:</strong> Feed intermediate effect mein introduced hota hai. Pehle section forward feed, second section backward feed, ya other combinations.</li>
                <li><strong>Advantage:</strong> Flexibility to balance heat transfer efficiency aur product quality considerations. Optimize kar sakte hain specific product requirements ke liye.</li>
                <li><strong>Application:</strong> Specialty products with specific temperature-concentration-time profiles required.</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">Temperature and Pressure Profile - Example 4-Effect System</h4>
            
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Effect</th>
                        <th class="border border-gray-300 px-4 py-2">Pressure (kPa abs)</th>
                        <th class="border border-gray-300 px-4 py-2">Boiling Temp (°C)</th>
                        <th class="border border-gray-300 px-4 py-2">Steam Temp (°C)</th>
                        <th class="border border-gray-300 px-4 py-2">ΔT (K)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">1st (Fresh steam input)</td>
                        <td class="border border-gray-300 px-4 py-2">70</td>
                        <td class="border border-gray-300 px-4 py-2">90</td>
                        <td class="border border-gray-300 px-4 py-2">110</td>
                        <td class="border border-gray-300 px-4 py-2">20</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">2nd</td>
                        <td class="border border-gray-300 px-4 py-2">40</td>
                        <td class="border border-gray-300 px-4 py-2">76</td>
                        <td class="border border-gray-300 px-4 py-2">90</td>
                        <td class="border border-gray-300 px-4 py-2">14</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">3rd</td>
                        <td class="border border-gray-300 px-4 py-2">20</td>
                        <td class="border border-gray-300 px-4 py-2">60</td>
                        <td class="border border-gray-300 px-4 py-2">76</td>
                        <td class="border border-gray-300 px-4 py-2">16</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">4th (Final)</td>
                        <td class="border border-gray-300 px-4 py-2">8</td>
                        <td class="border border-gray-300 px-4 py-2">42</td>
                        <td class="border border-gray-300 px-4 py-2">60</td>
                        <td class="border border-gray-300 px-4 py-2">18</td>
                    </tr>
                </tbody>
            </table>
            
            <p><strong>Note:</strong> ΔT values optimized hote hain to balance heat transfer area aur evaporation capacity across effects. BPE adjust kiya jata hai actual boiling points determine karne ke liye.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Vapor Recompression Technologies: Next-Level Energy Efficiency</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Thermal Vapor Recompression (TVR)</h4>
            
            <p><strong>Principle:</strong> Steam ejector use karke, high-pressure motive steam low-pressure vapor ko entrain aur compress karta hai, producing intermediate pressure steam jo evaporator heating ke liye reused ho sakta hai.</p>
            
            <p><strong>Operation:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>High-pressure steam (500-1000 kPa) nozzle se high velocity (300-500 m/s) par expand hota hai</li>
                <li>Ye low-pressure vapor (evaporator se) suction chamber mein entrain karta hai</li>
                <li>Mixed stream diffuser mein gradually decelerate hota hai, velocity kinetic energy pressure head mein convert hoti hai</li>
                <li>Output: compressed vapor (intermediate pressure) jo calandria heating ke liye feed hota hai</li>
            </ul>
            
            <p><strong>Performance:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Compression ratio: typically 1.5-3.0 (e.g., 20 kPa vapor ko 40-60 kPa compress karta hai)</li>
                <li>Entrainment ratio: 0.3-1.5 kg vapor per kg motive steam (ejector design ke depending)</li>
                <li>Steam economy improvement: 4-effect system mein TVR add karke 3.5 se 5.5-7.0 increase ho sakta hai</li>
            </ul>
            
            <p><strong>Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>No moving parts—maintenance minimal, high reliability</li>
                <li>Low capital cost compared to mechanical compressor</li>
                <li>Can handle wet, dirty vapor without damage</li>
            </ul>
            
            <p><strong>Disadvantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Low compression ratio—limited ΔT boost</li>
                <li>Requires high-pressure motive steam (additional boiler capacity/cost)</li>
                <li>Fixed operating point—poor turndown capability (efficiency dramatically drops at part-load)</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">2. Mechanical Vapor Recompression (MVR)</h4>
            
            <p><strong>Principle:</strong> Electrically-driven centrifugal or axial compressor vapor ko mechanically compress karta hai, temperature aur pressure increase karte hue taaki ye same evaporator ko heat kar sake.</p>
            
            <p><strong>Thermodynamic Cycle:</strong></p>
            <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                <li>Evaporator se low-pressure saturated vapor (e.g., 15 kPa, 54°C) discharge hota hai</li>
                <li>Compressor is vapor ko higher pressure (e.g., 120 kPa, 105°C) compress karta hai—isentropic compression with electrical work input</li>
                <li>Compressed vapor (now superheated) calandria mein steam side par supply hota hai</li>
                <li>Condensation during heat transfer latent heat + superheat release karta hai, milk boiling karte hue</li>
                <li>Cycle repeats—same vapor continuously reused, sirf makeup steam/vapor losses compensate karne ke liye added</li>
            </ol>
            
            <p><strong>Energy Analysis:</strong></p>
            <p>Typical MVR system:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Compressor power: 20-30 kWh per tonne water evaporated</li>
                <li>Equivalent thermal energy: 20-30 kWh × 3.6 MJ/kWh = 72-108 MJ/tonne</li>
                <li>Latent heat of vaporization: ~2,300 MJ/tonne water</li>
                <li>Effective "steam economy": 2300/90 = 25-30 kg water per kg steam equivalent!</li>
            </ul>
            
            <p><strong>Comparison with Conventional Multi-Effect:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">System Type</th>
                        <th class="border border-gray-300 px-4 py-2">Energy Input</th>
                        <th class="border border-gray-300 px-4 py-2">Equivalent Steam (kg/tonne water)</th>
                        <th class="border border-gray-300 px-4 py-2">Operating Cost ($/tonne)*</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Single Effect</td>
                        <td class="border border-gray-300 px-4 py-2">1000 kg steam</td>
                        <td class="border border-gray-300 px-4 py-2">1000</td>
                        <td class="border border-gray-300 px-4 py-2">$25.00</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">4-Effect</td>
                        <td class="border border-gray-300 px-4 py-2">300 kg steam</td>
                        <td class="border border-gray-300 px-4 py-2">300</td>
                        <td class="border border-gray-300 px-4 py-2">$7.50</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">4-Effect + TVR</td>
                        <td class="border border-gray-300 px-4 py-2">180 kg steam</td>
                        <td class="border border-gray-300 px-4 py-2">180</td>
                        <td class="border border-gray-300 px-4 py-2">$4.50</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">MVR (standalone)</td>
                        <td class="border border-gray-300 px-4 py-2">25 kWh electricity</td>
                        <td class="border border-gray-300 px-4 py-2">40 (equivalent)</td>
                        <td class="border border-gray-300 px-4 py-2">$2.50</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">3-Effect + MVR</td>
                        <td class="border border-gray-300 px-4 py-2">100 kg steam + 15 kWh</td>
                        <td class="border border-gray-300 px-4 py-2">130 (total)</td>
                        <td class="border border-gray-300 px-4 py-2">$4.00</td>
                    </tr>
                </tbody>
            </table>
            <p class="text-sm mt-2">*Assuming steam $25/tonne, electricity $0.10/kWh</p>
            
            <p><strong>Advantages of MVR:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Dramatic Energy Savings:</strong> 85-95% steam reduction vs conventional systems</li>
                <li><strong>Compact Design:</strong> Single-effect MVR much smaller than 4-5 effect conventional system for same capacity</li>
                <li><strong>Lower Operating Cost:</strong> Jahan electricity relatively cheap hai (especially with renewable sources), operating cost minimal</li>
                <li><strong>Environmental Benefits:</strong> Reduced CO₂ emissions (electricity typically cleaner than steam boilers), less water consumption (no cooling water for condenser)</li>
                <li><strong>Operational Flexibility:</strong> Variable speed drive allow karta hai precise capacity control</li>
            </ul>
            
            <p><strong>Disadvantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>High Capital Cost:</strong> Compressor + controls + instrumentation typically 2-3× cost of equivalent conventional evaporator. Payback period: 2-5 years depending on energy costs</li>
                <li><strong>Maintenance Complexity:</strong> Compressor precision equipment hai—regular maintenance critical. Bearings, seals, impellers wear subject hain. Maintenance cost: $10,000-50,000/year depending on size</li>
                <li><strong>Electricity Dependency:</strong> Total reliance on electrical power—backup/redundancy required for critical operations</li>
                <li><strong>Vapor Quality Requirements:</strong> Entrainment (liquid droplets in vapor) can damage compressor—effective de-misting critical</li>
                <li><strong>Limited ΔT:</strong> Practical compression ratio limits (typically 2-4) mean limited temperature boost (15-30°C)—multi-stage compression required for larger ΔT</li>
            </ul>
            
            <p><strong>Applications:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>New large-scale plants (>10 tonnes/hr evaporation) jahan energy cost dominant factor hai</li>
                <li>Regions with high steam costs ya low electricity costs</li>
                <li>Plants with environmental regulations (CO₂ emission limits)</li>
                <li>Whey processing (high volumes, commodity product—energy cost critical)</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Components of Evaporation System: Detailed Engineering</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Calandria (Heat Exchanger Core)</h4>
            
            <p><strong>Design Specifications:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Tube Material:</strong> Stainless steel SS 316L (low carbon for weld corrosion resistance), titanium (for highly corrosive applications), ya duplex stainless steel (high strength + corrosion resistance)</li>
                <li><strong>Tube Dimensions:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Length: 6-12 meters (falling film), 4-8 meters (rising film)</li>
                        <li>Internal diameter: 25-50 mm (typically 38 mm common)</li>
                        <li>Wall thickness: 1-2 mm (balance between heat transfer aur mechanical strength)</li>
                        <li>Number of tubes: 100-500 depending on capacity (20,000 kg/hr plant mein ~200 tubes typical)</li>
                    </ul>
                </li>
                <li><strong>Tube Arrangement:</strong> Triangular pitch (compact, high packing density) ya square pitch (easier cleaning). Pitch ratio: typically 1.25-1.5× tube OD</li>
                <li><strong>Heat Transfer Area:</strong> 500-5,000 m² per effect (large plants mein)</li>
            </ul>
            
            <p><strong>Steam Chest Design:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Shell-side steam distribution system—uniform steam delivery to all tubes ensure karna</li>
                <li>Condensate drainage—gravity drains ya steam traps condensate continuously remove karte hain to prevent flooding (which drastically reduces heat transfer)</li>
                <li>Non-condensable gas venting—air aur other gases accumulate hote hain aur insulating blanket form karte hain. Automatic vent valves continuous purging provide karte hain</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">2. Vapor-Liquid Separator</h4>
            
            <p><strong>Function:</strong> Vapor aur entrained liquid droplets ko efficiently separate karna. Critical kyunki:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Liquid carry-over product loss hai (valuable concentrate)</li>
                <li>Entrainment next effect ko contaminate karta hai</li>
                <li>MVR compressor mein liquid droplets catastrophic damage cause kar sakte hain</li>
            </ul>
            
            <p><strong>Design Elements:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Large Diameter Vessel:</strong> Low vapor velocity (typically 1-3 m/s) allow karta hai gravity settling of larger droplets. Diameter: 2-6 meters depending on capacity</li>
                <li><strong>Cyclone Separators:</strong> Tangential vapor entry centrifugal force create karta hai → droplets wall par throw hote hain → drain down. Efficiency: 90-98% for droplets >10 μm</li>
                <li><strong>Mesh Pad Demister:</strong> Knitted wire mesh (stainless steel ya polypropylene) fine droplets (1-10 μm) capture karta hai via impingement aur coalescence. Efficiency: 98-99.9% when properly designed aur maintained</li>
                <li><strong>Drainage System:</strong> Separated liquid ko evaporator feed ya recirculation line mein return karna without re-entrainment</li>
            </ul>
            
            <p><strong>Performance Criteria:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Vapor outlet moisture content: <0.1% by weight (for compressor protection)</li>
                <li>Pressure drop: <1-2 kPa (to maintain system vacuum)</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">3. Condenser</h4>
            
            <p><strong>Purpose:</strong> Final effect se vapor ko condense karke vacuum create aur maintain karna. Condenser performance directly evaporator efficiency affect karti hai.</p>
            
            <p><strong>Types:</strong></p>
            
            <p><strong>A) Surface Condenser:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Design:</strong> Shell-and-tube heat exchanger. Cooling water tubes mein flow karta hai, vapor shell side par condense hota hai</li>
                <li><strong>Advantages:</strong> Condensate aur cooling water separate remain karte hain—condensate recovery possible (process water ke roop mein reuse), cooling water quality less critical</li>
                <li><strong>Disadvantages:</strong> Higher capital cost, larger size, fouling on tube side (scaling from cooling water) reduce karta hai performance</li>
                <li><strong>Cooling Water Requirement:</strong> Typically 30-50 kg cold water per kg vapor condensed (depending on inlet temperature aur desired vacuum level)</li>
            </ul>
            
            <p><strong>B) Direct Contact (Barometric) Condenser:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Design:</strong> Vapor aur cooling water directly mix hote hain tall vertical column mein. Mixed condensate gravity se bottom par drain hota hai</li>
                <li><strong>Advantages:</strong> Simple, compact, low cost, no fouling issues, excellent heat transfer (direct contact)</li>
                <li><strong>Disadvantages:</strong> Condensate contaminated hai cooling water se—cannot be recovered. Large water consumption. Height requirement: typically 10-12 meters (for barometric leg to seal against vacuum)</li>
                <li><strong>Application:</strong> Where abundant cheap water available aur condensate recovery not valued</li>
            </ul>
            
            <p><strong>Vacuum Level Achievement:</strong></p>
            <p>Condenser pressure primarily cooling water temperature se determined hota hai:</p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Cooling Water Temp (°C)</th>
                        <th class="border border-gray-300 px-4 py-2">Achievable Vacuum (kPa abs)</th>
                        <th class="border border-gray-300 px-4 py-2">Corresponding Boiling Point (°C)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">15</td>
                        <td class="border border-gray-300 px-4 py-2">2-3</td>
                        <td class="border border-gray-300 px-4 py-2">18-24</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">20</td>
                        <td class="border border-gray-300 px-4 py-2">3-5</td>
                        <td class="border border-gray-300 px-4 py-2">24-33</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">25</td>
                        <td class="border border-gray-300 px-4 py-2">5-8</td>
                        <td class="border border-gray-300 px-4 py-2">33-41</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">30</td>
                        <td class="border border-gray-300 px-4 py-2">8-12</td>
                        <td class="border border-gray-300 px-4 py-2">41-49</td>
                    </tr>
                </tbody>
            </table>
            
            <p><strong>Design Implication:</strong> Summer vs winter, aur geographic location dramatically vacuum performance affect karte hain. Plants tropical regions mein (cooling water 28-32°C) arctic regions (10-15°C) ke comparison mein significantly lower vacuum achieve karte hain → lower evaporation efficiency.</p>
            
            <h4 class="font-semibold mt-4 mb-2">4. Vacuum Pump</h4>
            
            <p><strong>Purpose:</strong> Non-condensable gases (air leakage, dissolved gases from feed) ko continuously remove karke vacuum maintain karna. Even small air leak (1-2 kg/hr) vacuum significantly degrade kar sakta hai agar not removed.</p>
            
            <p><strong>Types:</strong></p>
            
            <p><strong>A) Liquid Ring Vacuum Pump:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Principle:</strong> Eccentric rotor rotating liquid ring (typically water) create karta hai jo compression chambers form karta hai. Gas compressed aur discharged hota hai</li>
                <li><strong>Advantages:</strong> Wet gas handle kar sakta hai, isothermal compression (cool operation), robust, low maintenance</li>
                <li><strong>Disadvantages:</strong> Lower efficiency than dry pumps, sealing liquid requirement (water consumption), capacity limited (typically <100 m³/hr per stage)</li>
                <li><strong>Application:</strong> Most common in dairy evaporators due to reliability aur tolerance to condensable vapors</li>
            </ul>
            
            <p><strong>B) Rotary Vane Pump:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Principle:</strong> Spring-loaded vanes eccentric rotor mein slots se slide karte hain, compression chambers create karte hue</li>
                <li><strong>Advantages:</strong> Higher efficiency, deeper vacuum achievable (<1 kPa), compact</li>
                <li><strong>Disadvantages:</strong> Sensitive to liquid slugs (damage vanes), frequent oil changes needed, higher maintenance</li>
                <li><strong>Application:</strong> High-vacuum applications, laboratory/pilot scale units</li>
            </ul>
            
            <p><strong>Sizing:</strong> Pump capacity (m³/hr at operating vacuum) determined by:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Estimated air leakage: typically 0.5-2.0 kg/hr per effect (depending on system tightness)</li>
                <li>Dissolved gases released from feed: ~0.1-0.3 kg/hr per tonne feed</li>
                <li>Safety margin: 50-100% overcapacity to handle transients, startup surges</li>
            </ul>
            
            <p><strong>Typical sizing:</strong> 4-effect evaporator (10 tonnes/hr capacity) → vacuum pump ~30-60 m³/hr capacity at 5-10 kPa suction pressure</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Evaporator Operation: Best Practices aur Troubleshooting</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Startup Procedure</h4>
            
            <ol class="list-decimal list-outside pl-5 mt-2 space-y-3">
                <li><strong>Pre-Startup Checks:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Verify sabhi valves correct positions mein hain (steam, condensate, feed, product, cooling water)</li>
                        <li>Check vacuum system—pump lubrication, sealing liquid level</li>
                        <li>Inspect separator mesh pads—ensure clean aur properly installed</li>
                        <li>Verify CIP completion aur system drainage</li>
                        <li>Check instrumentation—pressure gauges, temperature sensors, flow meters calibrated aur functioning</li>
                    </ul>
                </li>
                
                <li><strong>Vacuum Establishment:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Start cooling water flow to condenser (verify adequate flow rate—typically 80-100% design value)</li>
                        <li>Start vacuum pump</li>
                        <li>Monitor vacuum buildup—should reach near-design vacuum (within 10-20%) in 10-20 minutes agar no major leaks</li>
                        <li>Agar vacuum slow to develop: check for leaks (connections, flanges, sight glasses), verify condenser cooling water temperature adequate</li>
                    </ul>
                </li>
                
                <li><strong>Heating Up:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Gradually open steam supply to first effect—avoid thermal shock (sudden temperature changes crack tubes ya damage gaskets)</li>
                        <li>Establish steam flow aur verify condensate drainage (check steam trap operation)</li>
                        <li>Allow system to reach thermal equilibrium—all effects at stable temperatures (typically 30-60 min depending on size)</li>
                    </ul>
                </li>
                
                <li><strong>Feed Introduction:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Pre-heat feed to near first effect temperature (to avoid sudden cooling aur capacity upset)</li>
                        <li>Start feed pump at low flow rate (30-50% design capacity)</li>
                        <li>Monitor vacuum, temperatures, levels—should stabilize within 10-30 minutes</li>
                        <li>Gradually increase feed rate to design capacity while monitoring performance parameters</li>
                    </ul>
                </li>
                
                <li><strong>Performance Optimization:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Adjust steam pressure to achieve target evaporation rate</li>
                        <li>Balance effect levels—maintain optimal liquid levels in each separator (typically 30-60% of separator height)</li>
                        <li>Fine-tune vacuum—optimize condenser cooling water to achieve best vacuum without excessive consumption</li>
                        <li>Monitor product concentration—adjust feed rate or steam to achieve target total solids</li>
                    </ul>
                </li>
            </ol>
            
            <h4 class="font-semibold mt-4 mb-2">Normal Operation Monitoring</h4>
            
            <p><strong>Critical Parameters aur Normal Ranges:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Parameter</th>
                        <th class="border border-gray-300 px-4 py-2">Normal Range</th>
                        <th class="border border-gray-300 px-4 py-2">Out-of-Range Indication</th>
                        <th class="border border-gray-300 px-4 py-2">Corrective Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Final effect vacuum</td>
                        <td class="border border-gray-300 px-4 py-2">5-15 kPa abs</td>
                        <td class="border border-gray-300 px-4 py-2">Poor condensation, air leaks</td>
                        <td class="border border-gray-300 px-4 py-2">Increase cooling water, locate/fix leaks, check vacuum pump</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Boiling temperatures</td>
                        <td class="border border-gray-300 px-4 py-2">Per design profile (±3°C)</td>
                        <td class="border border-gray-300 px-4 py-2">Fouling, vacuum loss, steam issues</td>
                        <td class="border border-gray-300 px-4 py-2">CIP cleaning, fix vacuum, adjust steam</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Product total solids</td>
                        <td class="border border-gray-300 px-4 py-2">Target ±1-2%</td>
                        <td class="border border-gray-300 px-4 py-2">Feed rate imbalance</td>
                        <td class="border border-gray-300 px-4 py-2">Adjust feed rate or steam input</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Steam consumption</td>
                        <td class="border border-gray-300 px-4 py-2">Per steam economy target</td>
                        <td class="border border-gray-300 px-4 py-2">Fouling, leaks, poor vacuum</td>
                        <td class="border border-gray-300 px-4 py-2">Identify efficiency loss cause</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Separator levels</td>
                        <td class="border border-gray-300 px-4 py-2">30-60% of height</td>
                        <td class="border border-gray-300 px-4 py-2">Imbalanced flows, plugged drains</td>
                        <td class="border border-gray-300 px-4 py-2">Adjust control valves, clear blockages</td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="font-semibold mt-4 mb-2">Common Problems aur Solutions</h4>
            
            <p><strong>1. Progressive Capacity Loss (Over Days/Weeks):</strong></p>
            <p><strong>Symptom:</strong> Evaporation rate gradually decrease, steam consumption increase for same product output</p>
            <p><strong>Cause:</strong> Tube fouling—protein denaturation, mineral scaling (calcium phosphate, lactose crystallization) heat transfer surfaces par deposit hote hain</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Schedule CIP (Clean-In-Place) before capacity drops >15-20%</li>
                <li>Use alternating alkaline (1.5-2% NaOH at 75-85°C, 30-45 min) aur acid (0.5-1% HNO₃ or H₃PO₄ at 60-70°C, 20-30 min) cycles</li>
                <li>Enzymatic cleaners for stubborn protein deposits</li>
                <li>Preventive: operate at lower temperatures (if product allows), optimize feed pre-treatment (reduce sediment, control pH)</li>
            </ul>
            
            <p><strong>2. Sudden Vacuum Loss:</strong></p>
            <p><strong>Symptom:</strong> Vacuum pressure suddenly increase (e.g., 10 kPa se 30 kPa), boiling temperatures rise</p>
            <p><strong>Cause:</strong> Air leak, condenser cooling water failure, vacuum pump malfunction</p>
            <p><strong>Diagnosis & Solution:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Check cooling water:</strong> Flow rate, inlet temperature—agar inadequate, increase supply ya reduce load</li>
                <li><strong>Vacuum pump:</strong> Listen for unusual noise, check seal water level (liquid ring pumps), verify discharge—agar failed, switch to backup or repair</li>
                <li><strong>Leak detection:</strong> Close feed aur steam, monitor vacuum decay rate. Agar rapidly decays, significant leak hai. Use soap solution on flanges, valve stems, sight glasses—bubbles indicate leak location. Tighten or replace gaskets</li>
            </ul>
            
            <p><strong>3. Product Quality Issues (Burnt Taste, Dark Color):</strong></p>
            <p><strong>Cause:</strong> Localized overheating—dry patches on tubes (inadequate wetting), excessive steam temperature, prolonged residence time</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Verify distributor function—ensure uniform milk distribution</li>
                <li>Reduce steam temperature/pressure agar within operational flexibility</li>
                <li>Increase feed rate (reduces residence time, improves wetting) if product concentration allows</li>
                <li>Check for tube blockages—mechanical cleaning ya chemical descaling</li>
            </ul>
            
            <p><strong>4. Excessive Entrainment:</strong></p>
            <p><strong>Symptom:</strong> High carryover of product in vapor (detected by conductivity/turbidity of condensate), MVR compressor fouling</p>
            <p><strong>Cause:</strong> Excessive vapor velocity (separator overloaded), damaged demister mesh, foaming</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Reduce evaporation rate (lower steam input or feed rate) to design capacity</li>
                <li>Inspect aur replace damaged mesh pads</li>
                <li>Agar foaming issue: adjust pH (slightly acidic tends to reduce foam in milk), use anti-foam agents (food-grade silicone emulsions, 10-50 ppm), reduce feed protein content if possible</li>
            </ul>
            
            <p><strong>5. Inconsistent Product Concentration:</strong></p>
            <p><strong>Cause:</strong> Feed rate fluctuations, steam pressure variations, level control issues</p>
            <p><strong>Solution:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Install/calibrate flow control on feed pump—maintain steady feed rate</li>
                <li>Steam pressure regulator—stabilize heating supply</li>
                <li>Automated control system (PLC-based) linking feed rate, steam supply, aur product concentration sensors for real-time adjustment</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Energy Optimization Strategies</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Heat Integration with Pasteurization</h4>
            <p>Evaporator se hot condensate (70-100°C) valuable heat source hai. Use karein:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Pre-heating Raw Milk:</strong> Cold milk (4°C) ko evaporator feed temperature (50-60°C) tak heat karne ke liye condensate heat use karein—plate heat exchanger mein. Typical savings: 50-80% of pre-heating steam</li>
                <li><strong>Pasteurizer Regeneration:</strong> Hot side of pasteurizer regeneration section ko supplement karne ke liye condensate use karein</li>
                <li><strong>CIP Water Heating:</strong> Cleaning solution heating ke liye condensate heat utilize karein</li>
                <li><strong>Potential Savings:</strong> 10,000 kg/hr evaporation plant mein, condensate ~8,000 kg/hr at 80°C available. Cooling 80°C to 40°C releases: 8000 kg/hr × 4.18 kJ/kg·K × 40K = 1,338 MJ/hr. At steam cost $25/tonne (2,000 kJ/kg latent heat): savings = 1338/(2000) × $25 = ~$17/hr = $120,000/year (assuming 7000 operating hrs/year)!</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">2. Vapor Bleeding for Milk Preheating</h4>
            <p>Intermediate effect se vapor (typically 2nd effect at 70-80°C) bleed karke direct contact preheater mein milk ko heat karne ke liye use kar sakte hain. Advantages:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Eliminates separate steam consumption for pre-heating</li>
                <li>Vapor energy utilized jo otherwise waste hota condenser mein</li>
                <li>Improves overall steam economy 5-10%</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">3. Optimizing Operating Pressure Profile</h4>
            <p>Multi-effect systems mein, temperature distribution across effects optimization ke liye open hai:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Equal ΔT Approach:</strong> Each effect ke liye approximately equal temperature difference maintain karein—leads to balanced evaporation rates aur optimal overall U</li>
                <li><strong>BPE Compensation:</strong> Final effects (high concentration, high BPE) ko slightly larger ΔT allocate karein to compensate for reduced driving force</li>
                <li><strong>Software Tools:</strong> Process simulation software (Aspen Plus, CHEMCAD) use karke optimize karein for minimum steam consumption at given product spec</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">4. Regular Performance Auditing</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Monthly steam economy calculation—compare with design values. >10% deviation indicates problem (fouling, leaks, control issues)</li>
                <li>Tube-side pressure drop monitoring—sudden increase fouling indication</li>
                <li>Thermal imaging—hot spots on calandria exterior indicate internal fouling/blockages</li>
                <li>Periodic performance testing under standard conditions to establish fouling rate aur CIP frequency optimization</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Safety Considerations</h3>
            
            <h4 class="font-semibold mt-4 mb-2">Operational Hazards</h4>
            
            <p><strong>1. Vacuum Collapse (Implosion):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Risk:</strong> Separator vessels operate at 5-20 kPa absolute (85-95 kPa below atmospheric). Sudden atmospheric pressure admission (valve malfunction, vessel breach) massive inward force create karta hai—can implode vessel</li>
                <li><strong>Prevention:</strong> Vacuum relief valves (open at slightly sub-atmospheric pressure to prevent excessive vacuum), regular vessel inspection for corrosion/cracks, interlocks preventing steam admission without prior vacuum breaking</li>
                <li><strong>Design:</strong> Vessels designed for full vacuum + safety factor, stiffening rings to resist buckling</li>
            </ul>
            
            <p><strong>2. Steam Burns:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Risk:</strong> Steam lines, calandria, condensate lines 100-150°C operate karte hain. Contact severe burns cause karta hai (steam latent heat ~2000 kJ/kg—much more damaging than hot water)</li>
                <li><strong>Prevention:</strong> Complete insulation of hot surfaces, warning labels, PPE (heat-resistant gloves, face shields) during maintenance, lockout-tagout before opening any steam system, controlled cooldown procedures</li>
            </ul>
            
            <p><strong>3. Hot Product Discharge:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Risk:</strong> Concentrated milk 60-90°C par discharge hota hai, often pressurized. Accidental spills large-scale burns cause kar sakte hain</li>
                <li><strong>Prevention:</strong> Enclosed piping, drip pans, emergency shower/eyewash stations, proper valve sequencing to depressurize before opening connections</li>
            </ul>
            
            <p><strong>4. Confined Space Entry (for Cleaning/Maintenance):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Risk:</strong> Separators, steam chests confined spaces hain. Oxygen deficiency (vapor residues), toxic fumes (cleaning chemicals), heat stress risks</li>
                <li><strong>Prevention:</strong> Confined space permits, atmospheric testing before entry, continuous ventilation, attendant outside, communication system, rescue equipment ready</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">Environmental Considerations</h4>
            
            <p><strong>Condensate Disposal:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Evaporator condensate relatively clean hai (distilled water with traces of volatiles—primarily water-soluble vitamins, volatile flavor compounds, trace CO₂, NH₃)</li>
                <li>BOD/COD typically low (50-200 mg/L) but may vary with entrainment</li>
                <li>Options: Reuse as boiler feedwater (after treatment), process water (cooling, CIP dilution), discharge to sewer (if meets regulations), evaporation pond</li>
            </ul>
            
            <p><strong>Emissions:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Vapor from vent systems (vacuum pump discharge, condenser) primarily water vapor—generally benign</li>
                <li>Trace volatiles (diacetyl, acetone, dimethyl sulfide from milk) typically <5 ppm—odor potentially noticeable downwind but not health hazard</li>
                <li>Mitigation if needed: activated carbon adsorption, biofilter treatment</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Future Trends aur Innovations</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Hybrid Evaporation-Membrane Systems</h4>
            <p>Combining evaporation with reverse osmosis (RO) or nanofiltration (NF):</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Pre-concentration by RO:</strong> Milk ko 18-25% TS tak RO se concentrate karein (minimal heat, no phase change) → then evaporation to final 45-50% TS. Total energy consumption 30-50% reduced vs evaporation alone</li>
                <li><strong>Advantages:</strong> Lower thermal load on product, reduced evaporator size, lower fouling rates (less time at high temperature)</li>
                <li><strong>Challenges:</strong> Membrane fouling, limited concentration by RO (osmotic pressure limit ~4-5 MPa for milk), higher capital cost</li>
                <li><strong>Status:</strong> Commercially proven, growing adoption in large whey processing plants</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">2. Advanced MVR with Variable Speed Control</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Modern VFD (Variable Frequency Drive) technology allows precise compressor speed adjustment matching load variations</li>
                <li>Benefits: 20-30% energy savings during part-load operation, extended turndown range (30-110% vs 70-100% for fixed-speed), reduced mechanical stress (soft start/stop)</li>
                <li>Integration with AI-based control systems for predictive load management</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">3. Ultra-Low Temperature Evaporation (<30°C)</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Deep vacuum systems (1-3 kPa) allowing boiling at 10-30°C</li>
                <li>Applications: Ultra-heat-sensitive products (probiotic concentrates, bioactive peptides, whey protein isolates)</li>
                <li>Challenges: Very low ΔT available (requires huge heat transfer area or extremely high U), vacuum system complexity, energy penalty from deep vacuum maintenance</li>
                <li>Status: Niche applications, research stage for broader dairy use</li>
            </ul>
            
            <h4 class="font-semibold mt-4 mb-2">4. Process Intensification - Spinning Cone Column</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Rotating cone technology creating thin film under centrifugal force—residence time <1 second</li>
                <li>Extremely gentle processing—ideal for premium products where even MVR heat exposure too much</li>
                <li>Challenges: Limited capacity per unit (batch or semi-continuous), high capital cost, complex operation</li>
                <li><strong>Application:</strong> High-value specialty ingredients, aroma recovery from dairy streams</li>
            </ul>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p class="font-semibold text-blue-900">Industry Perspective:</p>
                <p class="text-blue-800 mt-2">Modern evaporation technology represents perfect balance between thermodynamic efficiency aur product quality preservation. State-of-the-art plants combining 5-6 effect systems with MVR achieve steam economies >25-30 (equivalent), operating costs <$2 per tonne water removed, jab ki product temperature 50°C se kam maintain karte hain. Continuous innovation membrane technology, automation, aur energy recovery mein dairy evaporation ko aur sustainable aur economical bana raha hai. Future belongs to integrated systems jo minimal energy use, maximum product quality, aur operational flexibility deliver karenge.</p>
            </div>
        `
    },
    hi: {
        title: "Evaporation (Vashpikaran)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Dairy Processing mein Evaporation ka Introduction</h3>
            <p>Evaporation dairy industry mein ek mahatvapurna unit operation hai jiska upyog vapor ke roop mein paani hatakar milk ya whey ko concentrate karne ke liye kiya jaata hai. Yah process condensed milk, evaporated milk, aur milk powders jaise products ke nirman mein prathmik kadam hai. Mukhya lakshya liquid ke total solids content ko badhana hai, jo transportation costs ko kam karta hai, shelf life badhata hai (water activity ko kam karke), aur product ko spray drying jaise agle processes ke liye taiyar karta hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Vacuum Evaporation ka Principle</h3>
            <p>Paani normal atmospheric pressure par 100°C par ubalta hai. Milk ko is temperature par lambe samay tak garam karne se significant heat damage hoga, jismein shamil hain:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Cooked Flavor:</strong> Protein denaturation aur Maillard reactions ke karan.</li>
                <li><strong>Browning:</strong> Lactose ka caramelization.</li>
                <li><strong>Nutrient Loss:</strong> Heat-sensitive vitamins ka nash.</li>
            </ul>
            <p class="mt-2">Isse bachne ke liye, dairy evaporation lagbhag hamesha ek <strong>vacuum</strong> ke tahat kiya jaata hai. <strong>Scientific Reason:</strong> Evaporator ke andar pressure kam karke, paani ka boiling point kafi kam ho jaata hai (jaise, 40-70°C tak). Yah bahut kam temperature par tezi se paani hatane ki anumati deta hai, jisse heat damage ko kam kiya jaata hai aur milk concentrate ki quality aur nutritional value ko sanrakshit kiya jaata hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Evaporators ke Prakar</h3>
            <h4 class="font-semibold mt-4 mb-2">1. Falling Film Evaporator</h4>
            <p>Yah apni high efficiency aur gentle heat treatment ke karan modern dairy plants mein sabse aam prakar hai.</p>
            <p><strong>Working:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Milk ko lambe vertical tubes (calandria) ke ek bundle ke upar pump kiya jaata hai.</li>
                <li>Ise tubes ki antarik deewaron ke saath ek patli film ke roop mein neeche behne ke liye samaan roop se distribute kiya jaata hai.</li>
                <li>Steam tubes ke bahar ko garam karti hai. Heat tezi se tube wall ke madhyam se patli milk film mein transfer hoti hai.</li>
                <li>Milk film mein paani evaporate ho jaata hai, aur vapor aur concentrated milk ka parinami mishran tubes ke neeche se bahar nikalta hai.</li>
                <li>Vapor ko ek separator vessel mein concentrate se alag kiya jaata hai.</li>
            </ol>
            <p><strong>Advantage:</strong> Milk bahut kam samay (kuch seconds) ke liye garam satah ke sampark mein rehta hai, jo heat damage ko kam karta hai.</p>
            
            <h4 class="font-semibold mt-4 mb-2">2. Multi-Effect Evaporators</h4>
            <p>Energy efficiency mein sudhar karne ke liye, kai evaporators (jinhein 'effects' kaha jaata hai) ko series mein joda jaata hai. Pahle effect se utpann vapor, jo uchch temperature aur pressure par hota hai, ka upyog doosre effect ko garam karne ke liye kiya jaata hai, jo kam pressure aur temperature par kaam karta hai. Vapor ka yah cascading upyog poori prakriya ke liye avashyak steam ki kul matra ko kafi kam kar deta hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ek Evaporation System ke Key Components</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Calandria:</strong> Evaporator ka heating section, jismein tubes hote hain jahan heat exchange hota hai.</li>
                <li><strong>Vapor Separator:</strong> Ek bada chamber jahan vapor ko concentrated liquid se alag kiya jaata hai.</li>
                <li><strong>Condenser:</strong> Ek heat exchanger jo antim effect se water vapor ko condense karta hai, system mein vacuum banata hai aur banaye rakhta hai.</li>
                <li><strong>Vacuum Pump:</strong> Vacuum banaye rakhne ke liye system se non-condensable gases ko hatata hai.</li>
            </ul>
        `
    }
};

    

