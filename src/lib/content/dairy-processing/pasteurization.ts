
export const pasteurizationContent = {
    en: {
        title: "Pasteurization",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Pasteurization</h3>
            <p>Pasteurization is a critical heat treatment process used in the dairy industry to ensure the safety and extend the shelf life of milk and other liquid dairy products. It is named after the French scientist <strong>Louis Pasteur</strong>, who in the 1860s discovered that heating beverages could kill harmful microorganisms — a groundbreaking finding that laid the foundation for the germ theory of disease. The process involves heating milk to a specific temperature for a set period and then rapidly cooling it.</p>
            <p>Before pasteurization became widespread in the early 20th century, milk was a significant vehicle for the transmission of diseases such as tuberculosis, typhoid fever, scarlet fever, diphtheria, and various diarrheal illnesses. The adoption of mandatory pasteurization laws is considered one of the most important public health interventions in modern history, dramatically reducing milk-borne disease outbreaks.</p>
            <p><strong>Fundamental Scientific Basis:</strong> The destruction of microorganisms by heat follows <strong>first-order kinetics</strong>, meaning that at a given temperature, a fixed percentage of the microbial population is killed per unit time. This is described by the <strong>D-value (Decimal Reduction Time)</strong> — the time required at a specific temperature to destroy 90% (one log cycle) of a given microbial population. Each organism has a characteristic D-value at each temperature. The <strong>z-value</strong> represents the temperature increase required to reduce the D-value by a factor of 10 (one log cycle). Together, D-values and z-values form the scientific foundation for designing all thermal processing parameters in the dairy industry.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Objectives of Pasteurization</h3>
            <p>The goals of pasteurization are twofold and are of paramount importance for public health and commerce.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Public Health Safety (Primary Objective):</strong> The main goal is to make milk safe for human consumption by destroying all pathogenic (disease-causing) microorganisms. Raw milk can harbor dangerous bacteria such as:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><i>Mycobacterium tuberculosis</i> — causes tuberculosis; historically the primary target organism before <i>Coxiella burnetii</i> was identified as more heat-resistant.</li>
                        <li><i>Coxiella burnetii</i> — causes Q-fever; now recognized as the most heat-resistant non-spore-forming pathogen in milk. Its D<sub>72°C</sub> is approximately 0.002–0.01 seconds, making it the benchmark organism for pasteurization design.</li>
                        <li><i>Brucella abortus</i> — causes brucellosis (undulant fever); shed into milk by infected cattle.</li>
                        <li><i>Salmonella</i> spp. — causes salmonellosis; relatively heat-sensitive compared to <i>C. burnetii</i>.</li>
                        <li><i>Listeria monocytogenes</i> — causes listeriosis; particularly dangerous for pregnant women, neonates, the elderly, and immunocompromised individuals. It can grow at refrigeration temperatures (psychrotrophic), making post-pasteurization contamination a concern.</li>
                        <li><i>Campylobacter jejuni</i> — a leading cause of bacterial gastroenteritis worldwide; very heat-sensitive and easily destroyed by pasteurization.</li>
                        <li>Pathogenic strains of <i>Escherichia coli</i> (e.g., O157:H7) — causes hemorrhagic colitis and hemolytic uremic syndrome (HUS).</li>
                        <li><i>Staphylococcus aureus</i> — while the cells are destroyed by pasteurization, any preformed enterotoxins are heat-stable and will survive. This underscores the importance of good hygienic practices during milking and raw milk handling.</li>
                    </ul>
                    <p class="mt-2">Pasteurization is specifically designed to achieve at least a <strong>5-log (99.999%) reduction</strong> of <i>Coxiella burnetii</i>. By ensuring the destruction of this most resistant target organism, it is guaranteed that all other less-resistant pathogens are also destroyed with an even greater margin of safety.</p>
                </li>
                <li><strong>Extended Shelf Life (Secondary Objective):</strong> The process also destroys a large number of spoilage microorganisms (like psychrotrophic bacteria such as <i>Pseudomonas</i> spp., yeasts, and molds). Additionally, the heat inactivates native milk enzymes:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Lipase:</strong> Causes hydrolytic rancidity — breaking down triglycerides into free fatty acids, particularly short-chain fatty acids (butyric, caproic, caprylic, capric acids), which produce a characteristic soapy, bitter, or "goaty" off-flavor during storage.</li>
                        <li><strong>Protease:</strong> Heat-stable bacterial proteases (produced by psychrotrophs during cold storage of raw milk before pasteurization) can survive pasteurization and cause gelation and bitterness in stored milk by degrading casein.</li>
                        <li><strong>Peroxidase:</strong> A natural milk enzyme that is more heat-resistant than alkaline phosphatase. Its inactivation (at approximately 80°C/15 sec) indicates over-pasteurization.</li>
                    </ul>
                    <p class="mt-2">By reducing the microbial load (typically by 95–99%) and inactivating enzymes, pasteurization significantly slows down the spoilage process and extends the refrigerated shelf life of the milk from a few hours (raw milk at ambient temperature) to <strong>14–21 days</strong> under proper refrigeration (≤4°C). The initial microbial quality of the raw milk and post-pasteurization contamination are the primary factors determining actual shelf life.</p>
                </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Thermal Death Kinetics and Time-Temperature Relationships</h3>
            <p>The scientific design of pasteurization relies on understanding how microorganisms respond to lethal heat treatments. Two key parameters govern this relationship:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>D-value (Decimal Reduction Time):</strong> The time in minutes (or seconds) at a specific temperature required to destroy 90% of the target microorganism population. For example, if a bacterium has a D<sub>63°C</sub> of 2 minutes, it takes 2 minutes at 63°C to reduce the population from 10<sup>6</sup> to 10<sup>5</sup> cells/mL. To achieve a 5-log reduction (from 10<sup>6</sup> to 10<sup>1</sup>), one would need 5D, or 10 minutes at 63°C.</li>
                <li><strong>z-value:</strong> The temperature increase (in °C) required to reduce the D-value by a factor of 10. For most vegetative bacteria, the z-value is approximately <strong>5–10°C</strong>. For <i>Coxiella burnetii</i>, the z-value is approximately <strong>4–5°C</strong>. This means that increasing the temperature by just 4–5°C makes the process 10 times more lethal, which is why HTST pasteurization at 72°C requires only 15 seconds compared to 30 minutes at 63°C.</li>
                <li><strong>Thermal Death Time (TDT) Curve:</strong> A plot of the log of the time required to kill a given number of organisms against temperature. This curve allows dairy engineers to design equivalent pasteurization processes at different time-temperature combinations that achieve the same lethality. All points on the TDT curve are equally effective.</li>
            </ul>
            <p class="mt-2">The relationship can be expressed mathematically as:</p>
            <p class="text-center my-2"><strong>log(t₁/t₂) = (T₂ - T₁) / z</strong></p>
            <p>Where t₁ and t₂ are the holding times at temperatures T₁ and T₂, respectively. This equation explains why 72°C/15s and 63°C/30min achieve equivalent microbial destruction.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. Common Pasteurization Methods</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. High-Temperature Short-Time (HTST) Pasteurization</h4>
            <p>This is the most common method used in modern, large-scale dairy plants for market milk due to its efficiency and energy-saving capabilities.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>72°C (161°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>15 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> This time-temperature combination is scientifically validated to be lethal to the most heat-resistant, non-spore-forming pathogen commonly found in milk, <i>Coxiella burnetii</i> (the agent causing Q-fever). The process achieves a minimum of 5-log (100,000-fold) reduction of this organism. By ensuring the destruction of this organism, it is guaranteed that all other less-resistant pathogens are also destroyed. The short duration of heat exposure minimizes thermal damage to the milk's nutritional and sensory properties (flavor, color, vitamin content). This continuous process is carried out in a <strong>Plate Heat Exchanger (PHE)</strong>, which uses thin corrugated stainless steel plates arranged in a frame to create narrow channels for efficient heat transfer.</p>
            <p><strong>Advantages of HTST:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Continuous process — can handle large volumes (up to 20,000+ liters/hour)</li>
                <li>Energy efficient due to regeneration (85–95% heat recovery)</li>
                <li>Minimal heat damage to milk components</li>
                <li>Better retention of heat-sensitive vitamins (B₁₂, C, folate)</li>
                <li>Automated and easily controlled with recording instruments</li>
                <li>Compact design with small space requirement</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Low-Temperature Long-Time (LTLT) or Batch Pasteurization</h4>
            <p>This is an older method, now primarily used for smaller batches or for products like some specialty cheeses, flavored milk, cream, and ice cream mixes where a batch process is more suitable.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>63°C (145°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>30 minutes</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> The principle is the same as HTST — achieving a thermal kill of pathogens based on equivalent lethality. The lower temperature requires a much longer holding time to achieve the same lethal effect, as dictated by the z-value relationship described above. This process is carried out in a <strong>double-jacketed vat</strong> (or vat pasteurizer), where the milk is heated via hot water or steam circulating in the jacket, held for the full duration with continuous agitation to ensure uniform temperature distribution, and then cooled. While effective, it is less energy-efficient and more time-consuming than HTST.</p>
            <p><strong>Applications of LTLT:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Small-scale dairy operations and artisanal producers</li>
                <li>Ice cream mix pasteurization (69°C/30 min due to higher fat and sugar content, which increase thermal resistance of organisms)</li>
                <li>Products with added ingredients (chocolate, fruits) that may not flow well through a PHE</li>
                <li>Cream and cultured products</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">3. Ultra-High Temperature (UHT) Treatment</h4>
            <p>While technically beyond pasteurization (it is a sterilization process), UHT is an important related heat treatment used in the dairy industry.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> <strong>135–150°C (275–302°F)</strong></li>
                <li><strong>Time:</strong> For <strong>2–5 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> UHT treatment destroys all viable microorganisms, including bacterial spores (particularly <i>Bacillus</i> and <i>Clostridium</i> species), rendering the product commercially sterile. When combined with aseptic packaging, UHT milk can be stored at room temperature for <strong>6–9 months</strong> without refrigeration. The ultra-short exposure time at very high temperatures exploits the fact that the z-value for microbial destruction (~10°C for spores) is lower than the z-value for chemical changes (~30°C for browning, vitamin loss). This means that at very high temperatures, microbial kill increases much faster than chemical degradation, resulting in a commercially sterile product with relatively minor changes to flavor and nutrition.</p>
            <p>UHT systems can be classified as:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Direct heating:</strong> Steam injection (steam into milk) or steam infusion (milk into steam) — very rapid heating and cooling via vacuum flash cooling</li>
                <li><strong>Indirect heating:</strong> Using plate, tubular, or scraped-surface heat exchangers — similar principle to HTST but at much higher temperatures</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">4. Other Pasteurization Time-Temperature Combinations</h4>
            <p>Regulatory bodies (such as the USDA/FDA in the USA and FSSAI in India) recognize several equivalent time-temperature combinations, all based on the same thermal death kinetics:</p>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Temperature</th>
                            <th class="border border-gray-300 px-4 py-2">Time</th>
                            <th class="border border-gray-300 px-4 py-2">Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">63°C (145°F)</td><td class="border border-gray-300 px-4 py-2">30 minutes</td><td class="border border-gray-300 px-4 py-2">LTLT (Batch)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">72°C (161°F)</td><td class="border border-gray-300 px-4 py-2">15 seconds</td><td class="border border-gray-300 px-4 py-2">HTST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">89°C (191°F)</td><td class="border border-gray-300 px-4 py-2">1.0 second</td><td class="border border-gray-300 px-4 py-2">Higher Heat/Shorter Time (HHST)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">90°C (194°F)</td><td class="border border-gray-300 px-4 py-2">0.5 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">94°C (201°F)</td><td class="border border-gray-300 px-4 py-2">0.1 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">96°C (204°F)</td><td class="border border-gray-300 px-4 py-2">0.05 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">100°C (212°F)</td><td class="border border-gray-300 px-4 py-2">0.01 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">138°C (280°F)</td><td class="border border-gray-300 px-4 py-2">2 seconds (min)</td><td class="border border-gray-300 px-4 py-2">UHT (Ultra Pasteurization)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">All these combinations achieve equivalent destruction of <i>Coxiella burnetii</i> and represent points on the same Thermal Death Time curve. Products with higher fat content (cream, ice cream mix) or added sweeteners require slightly higher temperatures or longer times because fat and sugar have a protective effect on microorganisms during heat treatment.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. The HTST Pasteurizer: Working Principle & Flow</h3>
            <p>An HTST pasteurizer is a sophisticated system designed for continuous, efficient heat treatment. It consists of several integrated components working together. Here is a step-by-step breakdown of its operation:</p>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">1. Balance Tank (Float-Controlled)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">2. Feed Pump (Centrifugal/Timing)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">3. Regeneration Section (Pre-Heating)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">4. Heating Section (Hot Water)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded font-bold">5. Holding Tube (CCP — Critical Control Point)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded">6. Flow Diversion Valve (FDV — Safety Device)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">7. Regeneration Section (Pre-Cooling)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded">8. Cooling Section (Chilled Water/Glycol)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">9. Storage/Packaging</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>Balance Tank (Float Tank):</strong> The process begins here. It's a small open or closed tank equipped with a float valve that receives raw milk and maintains a constant head (level) of milk. <strong>Scientific Reason:</strong> It ensures a consistent, uninterrupted flow of milk into the pasteurizer, which is crucial for maintaining the correct flow rate through the holding tube. The constant level prevents the pump from cavitating (drawing air) and ensures uniform flow. In the event of a diversion (FDV sends milk back), the balance tank also receives the returned milk for reprocessing. The balance tank is positioned at a level below the holding tube to ensure that the product pressure on the pasteurized side is always greater than on the raw side in the regeneration section — this is a critical food safety principle that prevents raw milk from contaminating pasteurized milk in the event of a plate leak (called <strong>positive pressure differential</strong>).</li>
                <li><strong>Feed Pump (Timing Pump):</strong> A centrifugal pump (or in some systems, a positive displacement pump called a <strong>timing pump</strong>) that draws milk from the balance tank and pushes it forward into the system. <strong>Scientific Reason:</strong> A timing pump provides a constant, predetermined flow rate regardless of changes in downstream pressure. This is critical because the holding time in the holding tube is directly dependent on the flow rate — if the pump delivers milk too quickly, the residence time in the holding tube may be less than 15 seconds, resulting in inadequate pasteurization. Regulatory authorities often require a timing pump or a means to ensure minimum holding time.</li>
                <li><strong>Regeneration Section (Pre-Heating):</strong> This is the most energy-efficient part of the pasteurizer. Here, the cold incoming raw milk (at approximately 4°C) flows on one side of the plates, while the hot, already pasteurized milk (at approximately 72°C) flows on the other side in the opposite direction (counter-current flow). <strong>Scientific Reason:</strong> Heat is transferred from the hot milk to the cold milk through the thin stainless steel plates. This pre-heats the raw milk (e.g., from 4°C to approximately 57–65°C) using the heat energy that would otherwise be wasted, and simultaneously pre-cools the hot pasteurized milk (e.g., from 72°C down to approximately 10–20°C). Modern regenerators can recover up to <strong>90–95% of the heat energy</strong>, making the process highly energy-efficient and reducing steam/hot water requirements significantly. The plates are corrugated (with herringbone or chevron patterns) to create turbulent flow, which enhances heat transfer coefficients and prevents fouling.</li>
                <li><strong>Heating Section:</strong> The pre-heated milk then flows to the heating section, where it is heated from its regenerated temperature to the full pasteurization temperature (e.g., 72°C) using <strong>hot water</strong> as the heating medium. <strong>Scientific Reason:</strong> Hot water (typically maintained at 74–76°C, just 2–4°C above the target milk temperature) is used instead of steam to avoid localized overheating of the milk, which could cause protein denaturation, whey protein fouling on the plate surfaces, and cooked flavors. The small temperature differential (ΔT) between the heating medium and the milk ensures gentle, uniform heating.</li>
                <li><strong>Holding Tube:</strong> After heating, the milk flows through a long pipe of a specific length and diameter, known as the holding tube. The tube is inclined upward (at least 0.25 inches per foot) so that the milk flows against gravity. <strong>Scientific Reason:</strong> This tube is precisely engineered so that the <strong>fastest moving particle</strong> of milk takes at least 15 seconds (the minimum holding time) to travel from one end to the other. In laminar flow conditions, the velocity profile is parabolic, meaning the fluid at the center of the pipe moves approximately twice as fast as the average velocity. Therefore, the holding tube is designed based on the <strong>maximum velocity</strong>, not the average velocity, to ensure that even the fastest-moving particles receive adequate heat treatment. The upward slope ensures that the tube remains completely filled with milk and that air pockets do not form (which could allow some milk to bypass the tube more quickly). This is the <strong>Critical Control Point (CCP)</strong> in HACCP terms — the point at which the safety of the product is ensured.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> Located at the end of the holding tube, the FDV is an automated, pneumatically or spring-operated, three-way valve that acts as the primary safety device of the HTST system. A calibrated <strong>Resistance Temperature Detector (RTD)</strong> or thermocouple continuously monitors the milk temperature at the exit of the holding tube. 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li><strong>Forward Flow:</strong> If the temperature is at or above the set point (e.g., ≥72°C), the valve allows the properly pasteurized milk to flow forward to the regeneration section (cooling side) and onward to packaging.</li>
                        <li><strong>Divert Flow:</strong> If the temperature drops even 0.5°C below the set point for any reason (e.g., equipment malfunction, startup, or shutdown), the valve automatically diverts the under-processed milk back to the balance tank for reprocessing. This ensures that <strong>no under-pasteurized milk ever reaches the final product</strong>.</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific Reason:</strong> The FDV is a fail-safe device. It is designed to be in the divert position by default (spring-loaded to divert). It only moves to forward flow when the electronic controller confirms the correct temperature. The entire recording and control system (including the recording chart/data logger, RTD, and FDV) must be sealed by regulatory inspectors to prevent tampering.</p>
                </li>
                <li><strong>Regeneration Section (Cooling):</strong> The properly pasteurized hot milk flows back through the regeneration section on the opposite side of the same plates, giving up its heat to the incoming raw milk and getting pre-cooled in the process (e.g., from 72°C down to approximately 10–20°C). <strong>Pressure Differential:</strong> It is critical that the <strong>pasteurized milk side maintains higher pressure</strong> than the raw milk side in the regenerator. This ensures that if a crack or pinhole develops in a plate, the flow direction of leakage is from pasteurized to raw (and not raw contaminating pasteurized milk). This pressure differential is maintained by the relative positions of the balance tank and the pump.</li>
                <li><strong>Cooling Section:</strong> The pre-cooled milk then enters the final cooling section, where it is chilled with <strong>cold water</strong> (first stage, cooling to ~7°C) and then with <strong>chilled water or propylene glycol</strong> (second stage, cooling to ≤4°C). <strong>Scientific Reason:</strong> Rapid cooling is essential to prevent the growth of any surviving thermophilic or thermoduric organisms and to ensure the milk reaches safe storage temperature quickly. The target is to cool milk to <strong>≤4°C (39°F)</strong> as rapidly as possible to enter the safe refrigeration zone and maximize shelf life. Delay in cooling can allow surviving bacteria to multiply rapidly in the warm milk.</li>
                <li><strong>Storage Tank:</strong> The fully processed, chilled milk is then sent to an insulated, sanitary <strong>silo storage tank</strong>, ready for packaging. These tanks are equipped with agitators (to prevent cream separation), temperature monitoring devices, and Clean-In-Place (CIP) systems for automated cleaning and sanitization.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">V. The Plate Heat Exchanger (PHE): Design and Function</h3>
            <p>The PHE is the heart of the HTST system. Understanding its design is essential for comprehending the pasteurization process.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Construction:</strong> A PHE consists of a series of thin, corrugated <strong>stainless steel plates</strong> (typically AISI 316 grade, 0.5–0.6 mm thick) clamped together in a frame. Gaskets between the plates create alternating channels through which product and heating/cooling media flow in a counter-current arrangement.</li>
                <li><strong>Corrugation Pattern:</strong> The plates have a herringbone or chevron pattern pressed into them. <strong>Scientific Reason:</strong> These corrugations serve three purposes — (1) they increase the surface area available for heat transfer, (2) they create turbulent flow even at low velocities, dramatically improving heat transfer coefficients, and (3) they provide mechanical support to withstand pressure differences between adjacent channels.</li>
                <li><strong>Heat Transfer Coefficient:</strong> PHEs achieve overall heat transfer coefficients of <strong>3,000–5,000 W/m²·K</strong>, which is 3–5 times higher than tubular heat exchangers. This high efficiency allows the use of small temperature differentials between product and heating medium.</li>
                <li><strong>Sections:</strong> A typical HTST PHE is divided into three sections within the same frame: (1) Regeneration section, (2) Heating section, and (3) Cooling section. Each section has a specific number of plates calculated based on the required heat load and flow rate.</li>
                <li><strong>Fouling:</strong> Over time, milk proteins (particularly β-lactoglobulin) and calcium phosphate can deposit on the heated surfaces (a process called fouling). This reduces heat transfer efficiency and increases the pressure drop. PHEs typically need to be cleaned every 6–10 hours of operation using CIP procedures (typically with caustic soda followed by acid rinse).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VI. Verification of Pasteurization: The Alkaline Phosphatase (ALP) Test</h3>
            <p>To ensure pasteurization was successful, a reliable verification test is needed. The <strong>Alkaline Phosphatase (ALP) test</strong> is the universally accepted method for this.</p>
            <p><strong>Scientific Principle:</strong> ALP (EC 3.1.3.1) is a naturally occurring, membrane-bound enzyme in raw milk, predominantly associated with the milk fat globule membrane (MFGM). Its thermal resistance is slightly greater than that of the most heat-resistant common pathogenic bacterium found in milk, <i>Coxiella burnetii</i>. Specifically:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>ALP is completely inactivated at <strong>72°C for 15 seconds</strong> (or equivalent).</li>
                <li><i>Coxiella burnetii</i> is destroyed at conditions slightly less severe than those needed to inactivate ALP.</li>
            </ul>
            <p>This means that if ALP is inactive (negative test), the milk has certainly been heated enough to destroy all common pathogens. Conversely, if ALP is still active (positive test), the pasteurization was inadequate.</p>
            
            <h4 class="font-semibold mt-4 mb-2">Standard ALP Tests:</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Aschaffenburg and Mullen Test (A&M Test):</strong> The classic colorimetric method. A substrate — disodium para-nitrophenyl phosphate — is added to the milk sample and incubated at 37°C. If active ALP is present, it cleaves the phosphate group, releasing para-nitrophenol, which turns <strong>yellow</strong> in alkaline conditions. The intensity of the yellow color is proportional to the residual ALP activity. A positive result (yellow color) = inadequate pasteurization. A negative result (no color change) = successful pasteurization.</li>
                <li><strong>Fluorometric Method (ISO 11816):</strong> A more sensitive and modern method used in regulatory testing. Uses a fluorogenic substrate (Fluorophos®) that releases a fluorescent compound when cleaved by ALP. Can detect ALP activity as low as <strong>10 mU/L</strong>, making it more reliable for detecting marginal pasteurization failures or post-pasteurization contamination with raw milk.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">Important Considerations:</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>ALP Reactivation:</strong> Under certain conditions (particularly in cream and high-fat products), ALP can undergo reactivation after pasteurization during storage, especially at temperatures above 4°C. This phenomenon is due to the protein refolding and the presence of zinc and magnesium ions. It can lead to false-positive results. To distinguish reactivated ALP from residual ALP (due to inadequate pasteurization), a <strong>heat test</strong> or <strong>magnesium chloride addition test</strong> is used — reactivated ALP is inhibited by boiling the sample before testing.</li>
                <li><strong>A positive ALP test</strong> means the product is unsafe and must not be released for sale. The entire batch must be reprocessed or discarded.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VII. Peroxidase Test (Storch's Test)</h3>
            <p>While the ALP test checks for adequate pasteurization, the <strong>Peroxidase Test</strong> checks for <strong>over-pasteurization</strong>.</p>
            <p><strong>Scientific Principle:</strong> Peroxidase (lactoperoxidase) is a natural milk enzyme that is more heat-resistant than ALP. It is inactivated at approximately <strong>80°C for 15 seconds</strong> or <strong>76°C for 2 minutes</strong>.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>In properly HTST-pasteurized milk (72°C/15s): ALP is <strong>negative</strong> (destroyed), Peroxidase is <strong>positive</strong> (still active). ✅</li>
                <li>In over-pasteurized milk (>80°C): Both ALP and Peroxidase are <strong>negative</strong> (both destroyed). This indicates excessive heat treatment, which can cause cooked flavors, whey protein denaturation, and nutritional losses.</li>
                <li>In raw milk: Both ALP and Peroxidase are <strong>positive</strong>.</li>
            </ul>
            <p><strong>The Test:</strong> The sample is mixed with hydrogen peroxide (H₂O₂) and a chromogenic substrate (such as para-phenylenediamine or ABTS). If peroxidase is active, it catalyzes the oxidation of the substrate by H₂O₂, producing a <strong>blue/blue-black color</strong> within seconds. No color change = peroxidase destroyed = over-pasteurized.</p>
            <p class="mt-2"><strong>Summary:</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Milk Type</th>
                            <th class="border border-gray-300 px-4 py-2">ALP Test</th>
                            <th class="border border-gray-300 px-4 py-2">Peroxidase Test</th>
                            <th class="border border-gray-300 px-4 py-2">Interpretation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Raw Milk</td><td class="border border-gray-300 px-4 py-2">Positive (+)</td><td class="border border-gray-300 px-4 py-2">Positive (+)</td><td class="border border-gray-300 px-4 py-2">Not pasteurized</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Properly HTST Pasteurized</td><td class="border border-gray-300 px-4 py-2">Negative (−)</td><td class="border border-gray-300 px-4 py-2">Positive (+)</td><td class="border border-gray-300 px-4 py-2">✅ Correct pasteurization</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Over-pasteurized / Boiled</td><td class="border border-gray-300 px-4 py-2">Negative (−)</td><td class="border border-gray-300 px-4 py-2">Negative (−)</td><td class="border border-gray-300 px-4 py-2">Excessive heat treatment</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VIII. Effect of Pasteurization on Milk Components</h3>
            <p>Pasteurization is designed to achieve microbiological safety with <strong>minimal impact</strong> on the nutritional and physicochemical properties of milk. However, some changes do occur:</p>
            
            <h4 class="font-semibold mt-4 mb-2">A. Proteins</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Caseins (αs1, αs2, β, κ-casein):</strong> Extremely heat-stable due to their lack of tertiary structure and high proline content. HTST pasteurization causes <strong>negligible changes</strong> to caseins.</li>
                <li><strong>Whey Proteins (β-lactoglobulin, α-lactalbumin, BSA, immunoglobulins):</strong> More heat-sensitive due to their globular structure. HTST pasteurization causes approximately <strong>1–5% denaturation of β-lactoglobulin</strong>. Higher temperatures (>80°C) cause significant denaturation — denatured β-lactoglobulin interacts with κ-casein on the surface of casein micelles via disulfide bond formation, which affects cheese-making properties and rennet coagulation time.</li>
                <li><strong>Immunoglobulins (IgG, IgA, IgM):</strong> Significantly reduced by pasteurization (20–40% loss). This is relevant for colostrum processing and infant nutrition, but the public health benefit of pathogen destruction far outweighs the loss of immunoglobulins.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">B. Fat</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Milk fat is highly stable at pasteurization temperatures. <strong>No significant changes</strong> to fatty acid composition or triglyceride structure.</li>
                <li>However, the heat treatment inactivates <strong>native lipase</strong> (an important objective), preventing lipolytic rancidity during storage.</li>
                <li>If milk has been pumped excessively or has high levels of psychrotrophic bacterial lipases (heat-stable), rancidity may still develop post-pasteurization.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">C. Vitamins</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Fat-soluble vitamins (A, D, E, K):</strong> Very heat-stable. <strong>No significant losses</strong> during pasteurization.</li>
                <li><strong>Water-soluble vitamins:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Vitamin C (ascorbic acid):</strong> Most heat-sensitive. Losses of <strong>10–25%</strong> during HTST pasteurization. However, milk is not a significant dietary source of vitamin C.</li>
                        <li><strong>Vitamin B₁₂:</strong> Losses of approximately <strong>5–10%</strong>.</li>
                        <li><strong>Thiamine (B₁), Riboflavin (B₂):</strong> Riboflavin is very heat-stable (<strong>&lt;5% loss</strong>). Thiamine losses are minimal.</li>
                        <li><strong>Folate:</strong> Some loss (up to 10%), but highly variable depending on conditions.</li>
                    </ul>
                </li>
                <li>Overall, the nutritional impact of HTST pasteurization on vitamins is <strong>minor and nutritionally insignificant</strong> in the context of a balanced diet.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">D. Minerals</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Minerals (calcium, phosphorus, magnesium, potassium, sodium) are <strong>not affected</strong> by pasteurization temperatures. Their bioavailability remains unchanged.</li>
                <li>At higher temperatures (UHT and above), some calcium phosphate may precipitate from the soluble phase and deposit on heat exchanger surfaces (contributing to fouling), but this is negligible at pasteurization temperatures.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">E. Lactose</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Lactose is <strong>not affected</strong> by pasteurization. Maillard browning reactions (between lactose and amino groups of proteins) require much higher temperatures (>100°C for extended periods) and are a concern only in UHT and sterilized milk, where they contribute to the "cooked" or "caramelized" flavor.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IX. Thermoduric and Thermophilic Organisms</h3>
            <p>While pasteurization effectively destroys all vegetative pathogens, certain categories of microorganisms survive:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Thermoduric organisms:</strong> These are organisms that can <strong>survive (but not grow at)</strong> pasteurization temperatures. They are present in pasteurized milk in low numbers. Examples include <i>Microbacterium lacticum</i>, <i>Streptococcus thermophilus</i>, <i>Micrococcus</i> spp., and bacterial endospores (e.g., <i>Bacillus cereus</i>, <i>Bacillus licheniformis</i>, <i>Clostridium</i> spp.). Their presence can be determined by the <strong>Laboratory Pasteurization Count (LPC)</strong> — heating a raw milk sample at 63°C for 35 minutes and then plating.</li>
                <li><strong>Thermophilic organisms:</strong> These organisms can <strong>grow at</strong> pasteurization temperatures (55–65°C). If the pasteurizer runs for extended periods without cleaning, thermophiles (like <i>Streptococcus thermophilus</i>) can form biofilms in the regeneration section and holding tube, leading to increasing plate counts in the pasteurized milk over time. This is one reason why pasteurizers are cleaned every 6–10 hours.</li>
                <li><strong>Spore-formers:</strong> Bacterial endospores (particularly <i>Bacillus</i> spp.) are not destroyed by pasteurization. They can germinate during storage, especially if temperature abuse occurs, leading to spoilage. <i>B. cereus</i> is of particular concern as it is psychrotrophic (can grow at refrigeration temperatures) and can produce enterotoxins causing foodborne illness.</li>
            </ul>
            <p><strong>Implication:</strong> This is why pasteurized milk still has a limited shelf life and must be stored under refrigeration. The shelf life is determined by the initial count of thermoduric organisms and the rate of post-pasteurization contamination (PPC).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">X. Post-Pasteurization Contamination (PPC)</h3>
            <p>One of the greatest challenges in extending the shelf life of pasteurized milk is <strong>post-pasteurization contamination</strong> — the reintroduction of microorganisms after the heat treatment step.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Sources:</strong> Packaging materials, filler heads, gaskets, pipe joints, air in the filling room, residual biofilms in pipelines, and even contaminated seals on storage tanks.</li>
                <li><strong>Organisms involved:</strong> Primarily Gram-negative psychrotrophic bacteria (especially <i>Pseudomonas</i> spp.), which are efficient spoilage organisms capable of producing proteases and lipases at refrigeration temperatures.</li>
                <li><strong>Control measures:</strong> Strict sanitation of all post-pasteurization equipment, use of aseptic or ultra-clean filling systems, HEPA-filtered air in packaging rooms, and frequent monitoring using coliform and psychrotrophic counts.</li>
                <li><strong>Impact:</strong> PPC is often the <strong>single most important factor</strong> limiting the shelf life of pasteurized milk. A well-managed dairy can achieve shelf lives of 18–21 days, while poor post-pasteurization hygiene may limit shelf life to only 7–10 days.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XI. HACCP and Regulatory Controls in Pasteurization</h3>
            <p>Pasteurization is a key part of the <strong>HACCP (Hazard Analysis and Critical Control Points)</strong> food safety management system in dairy processing.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Critical Control Points (CCPs):</strong> In an HTST system, the primary CCPs are:
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>The <strong>holding tube</strong> (temperature and time must meet minimum requirements)</li>
                        <li>The <strong>FDV</strong> (must function correctly to divert under-processed milk)</li>
                    </ul>
                </li>
                <li><strong>Monitoring:</strong> Continuous recording of temperature at the exit of the holding tube on a sealed recording chart or electronic data logger. Records must be maintained for regulatory inspection.</li>
                <li><strong>Corrective Action:</strong> If temperature falls below the set point, the FDV automatically diverts milk. The cause must be identified and corrected before resuming forward flow.</li>
                <li><strong>Verification:</strong> ALP testing of finished product, regular calibration of RTDs and recording instruments, and regulatory sealing of critical components (FDV, RTD, recording system, timing pump).</li>
                <li><strong>Regulatory Bodies:</strong> In India, the <strong>FSSAI (Food Safety and Standards Authority of India)</strong> regulates pasteurization standards. In the USA, the <strong>PMO (Pasteurized Milk Ordinance)</strong> administered by the FDA and enforced by state agencies governs all aspects of Grade "A" milk pasteurization.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XII. Comparison: HTST vs. LTLT vs. UHT</h3>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2">LTLT</th>
                            <th class="border border-gray-300 px-4 py-2">HTST</th>
                            <th class="border border-gray-300 px-4 py-2">UHT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Temperature</td><td class="border border-gray-300 px-4 py-2">63°C</td><td class="border border-gray-300 px-4 py-2">72°C</td><td class="border border-gray-300 px-4 py-2">135–150°C</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Time</td><td class="border border-gray-300 px-4 py-2">30 minutes</td><td class="border border-gray-300 px-4 py-2">15 seconds</td><td class="border border-gray-300 px-4 py-2">2–5 seconds</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Process Type</td><td class="border border-gray-300 px-4 py-2">Batch</td><td class="border border-gray-300 px-4 py-2">Continuous</td><td class="border border-gray-300 px-4 py-2">Continuous</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Equipment</td><td class="border border-gray-300 px-4 py-2">Jacketed Vat</td><td class="border border-gray-300 px-4 py-2">Plate Heat Exchanger</td><td class="border border-gray-300 px-4 py-2">PHE/Tubular/Direct Steam</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pathogens Destroyed</td><td class="border border-gray-300 px-4 py-2">All vegetative</td><td class="border border-gray-300 px-4 py-2">All vegetative</td><td class="border border-gray-300 px-4 py-2">All vegetative + spores</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Shelf Life</td><td class="border border-gray-300 px-4 py-2">14–18 days (refrigerated)</td><td class="border border-gray-300 px-4 py-2">14–21 days (refrigerated)</td><td class="border border-gray-300 px-4 py-2">6–9 months (ambient)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Storage</td><td class="border border-gray-300 px-4 py-2">Refrigeration required</td><td class="border border-gray-300 px-4 py-2">Refrigeration required</td><td class="border border-gray-300 px-4 py-2">No refrigeration needed (until opened)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Flavor Impact</td><td class="border border-gray-300 px-4 py-2">Minimal</td><td class="border border-gray-300 px-4 py-2">Minimal</td><td class="border border-gray-300 px-4 py-2">Slight cooked flavor</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Whey Protein Denaturation</td><td class="border border-gray-300 px-4 py-2">~5–15%</td><td class="border border-gray-300 px-4 py-2">~1–5%</td><td class="border border-gray-300 px-4 py-2">~60–80%</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Energy Efficiency</td><td class="border border-gray-300 px-4 py-2">Low (no regeneration)</td><td class="border border-gray-300 px-4 py-2">High (90–95% regeneration)</td><td class="border border-gray-300 px-4 py-2">Moderate to High</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">ALP Test</td><td class="border border-gray-300 px-4 py-2">Negative</td><td class="border border-gray-300 px-4 py-2">Negative</td><td class="border border-gray-300 px-4 py-2">Negative</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Peroxidase Test</td><td class="border border-gray-300 px-4 py-2">Positive</td><td class="border border-gray-300 px-4 py-2">Positive</td><td class="border border-gray-300 px-4 py-2">Negative</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Packaging</td><td class="border border-gray-300 px-4 py-2">Standard</td><td class="border border-gray-300 px-4 py-2">Standard</td><td class="border border-gray-300 px-4 py-2">Aseptic (Tetra Pak, etc.)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XIII. Emerging and Non-Thermal Pasteurization Technologies</h3>
            <p>While thermal pasteurization remains the gold standard, research is ongoing into alternative and supplementary technologies that may offer improved quality retention:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>High-Pressure Processing (HPP):</strong> Subjects milk to pressures of 400–600 MPa for several minutes. Inactivates vegetative bacteria and some enzymes by disrupting cell membranes and denaturing proteins. Better retention of heat-sensitive vitamins and fresh flavor. However, it does not inactivate spores and is currently expensive for liquid milk.</li>
                <li><strong>Pulsed Electric Fields (PEF):</strong> Applies short pulses of high-voltage electricity (20–80 kV/cm) to milk, causing electroporation (irreversible disruption) of microbial cell membranes. Minimal heating occurs. Better retention of fresh flavor and nutrients. Limited commercial adoption due to cost and inconsistent efficacy against spores.</li>
                <li><strong>Microfiltration:</strong> Physical removal of bacteria using ceramic membranes with pore sizes of 1.4 μm. Can achieve >3.5 log reduction of total bacteria and >6 log reduction of spores. Often used as a pre-treatment before or combined with mild heat treatment. Removes somatic cells and bacteria physically without heat damage.</li>
                <li><strong>UV-C Irradiation:</strong> Exposure to ultraviolet light at 254 nm wavelength, which damages microbial DNA. Challenging in opaque liquids like milk due to poor UV penetration. Thin-film UV systems have been developed but have limited commercial application for milk.</li>
            </ul>
            <p class="mt-2">Currently, none of these technologies have replaced thermal pasteurization for regulatory compliance in most countries, but they are used as supplementary processes in certain applications.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XIV. Quality Indicators and Tests for Pasteurized Milk</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Standard Plate Count (SPC):</strong> Measures total aerobic bacterial count. For pasteurized milk, the standard is typically <strong>&lt;30,000 CFU/mL</strong> (FSSAI) or <strong>&lt;20,000 CFU/mL</strong> (PMO Grade A). A high SPC indicates poor raw milk quality, inadequate pasteurization, or post-pasteurization contamination.</li>
                <li><strong>Coliform Count:</strong> Should be <strong>&lt;10 CFU/mL</strong> in pasteurized milk. Coliforms are easily destroyed by pasteurization, so their presence indicates post-pasteurization contamination or gross under-processing.</li>
                <li><strong>MBRT (Methylene Blue Reduction Test):</strong> Although primarily used for raw milk quality assessment, it can indicate the microbial load. For pasteurized milk, reduction time should be <strong>&gt;6 hours</strong>.</li>
                <li><strong>Turbidity Test:</strong> Detects whether milk has been severely overheated (boiled). Properly pasteurized milk produces a turbid (cloudy) filtrate due to intact whey proteins, while boiled milk produces a clear filtrate because whey proteins have been fully denatured and coagulated.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XV. Important Numerical Problems and Calculations</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Holding Tube Length Calculation</h4>
            <p>Given: Flow rate = 5,000 L/hr; Tube internal diameter = 48 mm; Required holding time = 15 seconds.</p>
            <p>Steps:</p>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Convert flow rate: 5,000 L/hr = 5,000 / 3,600 = 1.389 L/s = 1.389 × 10⁻³ m³/s</li>
                <li>Cross-sectional area of tube: A = π(d/2)² = π(0.048/2)² = π(0.024)² = 1.8096 × 10⁻³ m²</li>
                <li>Average velocity: v<sub>avg</sub> = Q/A = 1.389 × 10⁻³ / 1.8096 × 10⁻³ = 0.768 m/s</li>
                <li>For laminar flow, maximum velocity = 2 × v<sub>avg</sub> = 2 × 0.768 = 1.536 m/s</li>
                <li>Minimum tube length = v<sub>max</sub> × time = 1.536 × 15 = <strong>23.04 meters</strong></li>
            </ul>
            <p class="mt-2"><strong>Note:</strong> In practice, an additional safety margin of 10–20% is added, and the actual flow regime (turbulent vs. laminar) must be considered. In turbulent flow (Reynolds number >4,000, which is typical in dairy systems), the velocity profile is flatter, and the maximum velocity is approximately 1.2 times the average velocity rather than 2 times.</p>

            <h4 class="font-semibold mt-4 mb-2">2. Regeneration Efficiency Calculation</h4>
            <p>Regeneration efficiency (%) = [(Temperature gain of raw milk in regenerator) / (Total temperature gain without regeneration)] × 100</p>
            <p>Example: Raw milk enters at 4°C, exits regenerator at 65°C, pasteurized at 72°C.</p>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Temperature gain in regenerator = 65 - 4 = 61°C</li>
                <li>Total temperature gain needed = 72 - 4 = 68°C</li>
                <li>Regeneration efficiency = (61/68) × 100 = <strong>89.7%</strong></li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XVI. Summary of Key Points</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Pasteurization is the most important heat treatment in the dairy industry for ensuring public health safety.</li>
                <li>The benchmark organism for pasteurization design is <i>Coxiella burnetii</i> (most heat-resistant non-spore-forming pathogen).</li>
                <li>HTST (72°C/15s) is the most widely used commercial method; LTLT (63°C/30 min) is used for batch processing.</li>
                <li>The Alkaline Phosphatase test is the standard verification test (negative = adequate pasteurization).</li>
                <li>The Peroxidase test checks for over-pasteurization (should be positive for HTST milk).</li>
                <li>The Flow Diversion Valve (FDV) and Holding Tube are the critical safety components of the HTST system.</li>
                <li>Pasteurization has minimal impact on milk's nutritional value — the public health benefit far outweighs any minor nutrient losses.</li>
                <li>Post-pasteurization contamination (PPC) is the primary factor limiting shelf life of pasteurized milk.</li>
                <li>Proper refrigeration (≤4°C) after pasteurization is essential for maintaining safety and quality.</li>
                <li>Pasteurization does NOT sterilize milk — thermoduric organisms and spores survive, necessitating refrigerated storage and limited shelf life.</li>
            </ul>
        `,
        simulation: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Advanced Milk Processing Plant Simulator</title>
                <style>
                    body { margin: 0; overflow: hidden; background-color: #1a1a1a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                    #ui-container { position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(20, 30, 40, 0.95); border-top: 4px solid #3498db; color: white; display: flex; justify-content: space-around; align-items: flex-start; padding: 15px 10px; box-sizing: border-box; backdrop-filter: blur(5px); z-index: 10; }
                    .panel-section { display: flex; flex-direction: column; align-items: center; padding: 0 15px; border-right: 1px solid #444; height: 100%; }
                    .panel-section:last-child { border-right: none; }
                    h2 { margin: 0 0 10px 0; font-size: 14px; color: #3498db; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
                    .digital-display { background: #000; color: #0f0; font-family: 'Courier New', monospace; font-size: 20px; padding: 5px 10px; border: 2px solid #555; border-radius: 4px; margin-bottom: 5px; min-width: 70px; text-align: center; }
                    .status-light { width: 15px; height: 15px; border-radius: 50%; background: #333; border: 2px solid #555; margin: 5px; box-shadow: inset 0 0 5px #000; display: inline-block; }
                    .status-light.on { background: #00ff00; box-shadow: 0 0 8px #00ff00; }
                    .status-light.off { background: #ff0000; box-shadow: 0 0 8px #ff0000; }
                    .toggle-btn { background: #444; color: #ccc; border: 1px solid #666; padding: 5px 10px; cursor: pointer; border-radius: 4px; font-size: 12px; margin: 2px; width: 100px; }
                    .toggle-btn.active { background: #2ecc71; color: #fff; border-color: #27ae60; }
                    button.main-start { background: linear-gradient(to bottom, #2c3e50, #1a252f); color: white; border: 2px solid #3498db; padding: 10px 20px; font-weight: bold; cursor: pointer; border-radius: 6px; transition: all 0.2s; }
                    button.main-start:hover { background: #34495e; box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
                    button.main-start.active { background: #e74c3c; border-color: #c0392b; }
                    #view-controls { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; gap: 5px; z-index: 20; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 8px; }
                    #view-controls button { background: rgba(50,50,50,0.8); color: white; border: 1px solid #777; padding: 6px 12px; cursor: pointer; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; width: 80px; }
                    #view-controls button:hover { background: #3498db; border-color: #3498db; }
                    .view-label { font-size: 10px; color: #aaa; text-align: center; margin-bottom: 2px; }
                    input[type=range] { width: 120px; cursor: pointer; }
                    #tooltip { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px; border-radius: 20px; pointer-events: none; font-size: 14px; border: 1px solid #555; z-index: 10; }
                    .legend { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; font-size: 11px; color: #ddd; z-index: 10; }
                    .legend-item { display: flex; align-items: center; margin-bottom: 4px; }
                    .color-box { width: 10px; height: 10px; margin-right: 8px; border: 1px solid #777; }
                    @media (max-width: 768px) { 
                        #ui-container { flex-wrap: wrap; padding: 5px; justify-content: center; height: auto; max-height: 200px; }
                        .panel-section { flex-grow: 1; flex-basis: 45%; padding: 5px; margin-bottom: 5px; border-right: none; min-width: 140px; }
                        h2 { font-size: 11px; margin-bottom: 5px;}
                        .digital-display { font-size: 14px; padding: 2px 4px; }
                        .toggle-btn, button.main-start { width: 90%; font-size: 10px; padding: 4px; }
                        #view-controls { display: none; }
                        .legend { display: none; }
                        #tooltip { display: none; }
                    }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
            </head>
            <body>
                <div class="legend">
                    <div class="legend-item"><div class="color-box" style="background:#ecf0f1"></div>Tanks / Pipes</div>
                    <div class="legend-item"><div class="color-box" style="background:#34495e"></div>Pump & Motors</div>
                    <div class="legend-item"><div class="color-box" style="background:#f39c12"></div>Regen/Separator</div>
                    <div class="legend-item"><div class="color-box" style="background:#8e44ad"></div>Homogenizer</div>
                    <div class="legend-item"><div class="color-box" style="background:#e74c3c"></div>Heating Section</div>
                    <div class="legend-item"><div class="color-box" style="background:#3498db"></div>Cooling Section</div>
                </div>
                <div id="view-controls">
                    <div class="view-label">CAMERA VIEW</div>
                    <button onclick="setView('front')">FRONT</button>
                    <button onclick="setView('back')">BACK</button>
                    <button onclick="setView('left')">LEFT</button>
                    <button onclick="setView('right')">RIGHT</button>
                    <button onclick="setView('top')">TOP</button>
                    <button onclick="setView('iso')">ISO</button>
                </div>
                <div id="tooltip">PLANT READY. Configure & Start.</div>
                <div id="ui-container">
                    <div class="panel-section">
                        <h2>Main Control</h2>
                        <div style="display:flex; align-items:center; margin-bottom:10px;">
                            <div id="status-pump" class="status-light"></div>
                            <span style="font-size:12px; margin-left:5px;">FEED PUMP</span>
                        </div>
                        <button class="main-start" id="btn-power" onclick="toggleSystem()">START PLANT</button>
                    </div>
                    <div class="panel-section">
                        <h2>Units</h2>
                        <button class="toggle-btn" id="btn-sep" onclick="toggleSep()">Separator: OFF</button>
                        <button class="toggle-btn" id="btn-homo" onclick="toggleHomo()">Homogenizer: OFF</button>
                    </div>
                    <div class="panel-section">
                        <h2>Pasteurizer</h2>
                        <div class="digital-display" id="temp-display">25.0°C</div>
                        <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                        <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                        <span id="steam-val-text" style="font-size:12px;">0%</span>
                    </div>
                    <div class="panel-section">
                        <h2>FDV Logic</h2>
                        <div style="display:flex; gap:15px; margin-top:5px;">
                            <div style="text-align:center;"><div id="light-fwd" class="status-light"></div><div style="font-size:10px;">SAFE</div></div>
                            <div style="text-align:center;"><div id="light-div" class="status-light on"></div><div style="font-size:10px;">DIVERT</div></div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-top:8px;">Set Point: 72.0°C</div>
                    </div>
                    <div class="panel-section" style="width: 180px; align-items:flex-start;">
                        <h2>Status</h2>
                        <div id="flow-status" style="font-size: 11px; color: #0f0; line-height:1.4;">Idle.</div>
                    </div>
                </div>
                <script>
                    let scene, camera, renderer, controls;
                    let fdvMesh, pumpMesh, particles = [];
                    let systemOn = false, sepOn = false, homoOn = false, steamVal = 0, currentTemp = 25.0;
                    const targetTempSet = 72.0;
                    let fdvState = 'DIVERT';
                    let pathFeed, pathRegen, pathSepMain, pathSepCream, pathHomo, pathHeat, pathHold, pathSafe, pathDivert;
                    
                    const elTemp = document.getElementById('temp-display'),
                          elStatus = document.getElementById('flow-status'),
                          elLightFwd = document.getElementById('light-fwd'),
                          elLightDiv = document.getElementById('light-div'),
                          elPumpLight = document.getElementById('status-pump'),
                          btnPower = document.getElementById('btn-power'),
                          btnSep = document.getElementById('btn-sep'),
                          btnHomo = document.getElementById('btn-homo');

                    function getRendererHeight() {
                        const uiContainer = document.getElementById('ui-container');
                        return window.innerHeight - (uiContainer ? uiContainer.offsetHeight : 0);
                    }
                    
                    function init() {
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x222222);
                        scene.fog = new THREE.Fog(0x222222, 30, 100);
                        camera = new THREE.PerspectiveCamera(45, window.innerWidth / getRendererHeight(), 0.1, 1000);
                        camera.position.set(0, 20, 35);
                        renderer = new THREE.WebGLRenderer({ antialias: true });
                        renderer.setSize(window.innerWidth, getRendererHeight());
                        document.body.appendChild(renderer.domElement);
                        controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true; controls.maxPolarAngle = Math.PI / 2 - 0.05;
                        const amb = new THREE.AmbientLight(0xffffff, 0.4); scene.add(amb);
                        const sun1 = new THREE.DirectionalLight(0xffffff, 0.7); sun1.position.set(10, 30, 20); scene.add(sun1);
                        const sun2 = new THREE.DirectionalLight(0xffbbaa, 0.4); sun2.position.set(-10, 20, -20); scene.add(sun2);
                        buildEnvironment(); buildTanks(); buildPump(); buildProcessingLine(); buildHoldingAndFDV(); buildPipes();
                        initPaths();
                        window.addEventListener('resize', onWindowResize);
                        animate();
                    }
                    
                    window.setView=function(v){const d=35,h=20;let x=0,y=h,z=0;switch(v){case'front':z=d;break;case'back':z=-d;break;case'left':x=-d;break;case'right':x=d;break;case'top':y=d+15,z=1;break;case'iso':x=25,y=25,z=25;break}camera.position.set(x,y,z);camera.lookAt(0,0,0);controls.update()}
                    
                    function buildEnvironment(){const f=new THREE.Mesh(new THREE.PlaneGeometry(80,60),new THREE.MeshStandardMaterial({color:0x151515,roughness:.8}));f.rotation.x=-Math.PI/2;scene.add(f);scene.add(new THREE.GridHelper(80,40,0x444444,0x222222))}
                    function buildTanks(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7,metalness:.7,roughness:.2});createTank(-25,5,0,3,10,"RAW MILK",t);createTank(-15,2.5,0,1.5,3,"BALANCE",t);createTank(20,5,-5,3,10,"SKIM/PAST.",t);createTank(20,3,5,1.5,5,"CREAM",t)}
                    function createTank(t,e,o,i,n,s,a){const d=new THREE.Mesh(new THREE.CylinderGeometry(i,i,n,32),a);d.position.set(t,e,o);scene.add(d);const r=new THREE.CylinderGeometry(.1,.1,1.5,8);for(let e=0;e<4;e++){const a=new THREE.Mesh(r);const l=e*90*Math.PI/180;a.position.set(t+Math.cos(l)*(i-.2),.75,o+Math.sin(l)*(i-.2)),scene.add(a)}addLabel(s,t,n+1.5,o)}
                    function buildPump(){const t=new THREE.Group;const e=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,1.5,16),new THREE.MeshStandardMaterial({color:0x34495e}));e.rotation.z=Math.PI/2,t.add(e);const o=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.5,16),new THREE.MeshStandardMaterial({color:0x95a5a6}));o.rotation.x=Math.PI/2,o.position.set(.8,0,0),t.add(o),t.position.set(-10,.8,0),pumpMesh=t,scene.add(t),addLabel("PUMP",-10,2,0)}
                    function buildProcessingLine(){createPHEUnit(-5,0,0,0xf39c12,"REGEN");const t=new THREE.Group,e=new THREE.Mesh(new THREE.CylinderGeometry(1,1.5,2),new THREE.MeshStandardMaterial({color:0xecf0f1})),o=new THREE.Mesh(new THREE.SphereGeometry(1,32,16,0,6.283185307179586,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xecf0f1}));o.position.y=1,t.add(e),t.add(o),t.position.set(-1,2,2),scene.add(t),addLabel("SEPARATOR",-1,4,2);const i=new THREE.Group,n=new THREE.Mesh(new THREE.BoxGeometry(2.5,2,1.5),new THREE.MeshStandardMaterial({color:0x8e44ad})),s=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0xffffff}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.8),i.add(n),i.add(s);const a=s.clone();a.position.set(0,0,.8),i.add(a);const d=s.clone();d.position.set(0,-.5,.8),i.add(d),i.position.set(3,1.5,0),scene.add(i),addLabel("HOMOGENIZER",3,3.5,0),createPHEUnit(7,0,0,0xe74c3c,"HEATING"),createPHEUnit(10,0,0,0x3498db,"COOLING")}
                    function createPHEUnit(t,e,o,i,n){const s=new THREE.MeshStandardMaterial({color:i}),a=new THREE.Mesh(new THREE.BoxGeometry(1.5,2.5,2),s);a.position.set(t,2,e),scene.add(a);const d=new THREE.Mesh(new THREE.BoxGeometry(1.6,2.7,.2),new THREE.MeshStandardMaterial({color:0x2c3e50}));d.position.set(t,2,e-1.1),scene.add(d);const r=d.clone();r.position.set(t,2,e+1.1),scene.add(r),addLabel(n,t,4,e)}
                    function buildHoldingAndFDV(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7}),e=new THREE.Group;for(let o=0;o<3;o++){const i=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,4),t);i.rotation.z=Math.PI/2,i.position.set(0,o*.3,-o*.4),e.add(i)}e.position.set(7,4,-2),scene.add(e),addLabel("HOLDING",7,5.5,-2),fdvMesh=new THREE.Mesh(new THREE.SphereGeometry(.5),new THREE.MeshStandardMaterial({color:0xecf0f1}));const o=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0x333}));o.position.y=.5,fdvMesh.add(o),fdvMesh.position.set(10,4,-2),scene.add(fdvMesh),addLabel("FDV",10,5,-2)}
                    function buildPipes(){const t=new THREE.MeshStandardMaterial({color:0x888888,transparent:!0,opacity:.3});createPipe([-25,1,0,-15,1,0,-15,3,0],t),createPipe([-15,.5,0,-10,.5,0],t),createPipe([-10,.5,0,-5,.5,0,-5,1,0],t),createPipe([-5,3,0,-1,3,0,-1,3,2],t),createPipe([-1,3,2,3,3,2,3,2,0],t),createPipe([3,2,0,7,2,0],t),createPipe([7,3,0,7,4,0,7,4,-2],t),createPipe([7,4,-2,10,4,-2],t),createPipe([10,4,-2,10,3,0],t),createPipe([10,1,0,20,1,0],t),createPipe([10,4,-2,10,6,-2,-15,6,-2,-15,4,0],t)}
                    function createPipe(t,e){const o=[];for(let e=0;e<t.length;e+=3)o.push(new THREE.Vector3(t[e],t[e+1],t[e+2]));const i=new THREE.CatmullRomCurve3(o),n=new THREE.TubeGeometry(i,10,.08,8,!1),s=new THREE.Mesh(n,e);scene.add(s)}
                    function addLabel(t,e,o,i){const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d");s.fillStyle="rgba(0,0,0,0.6)",s.fillRect(0,0,256,64),s.font="bold 28px Arial",s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.fillText(t,128,32);const a=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(n)}));a.position.set(e,o,i),a.scale.set(3,.75,1),scene.add(a)}
                    function initPaths(){pathFeed=new THREE.CatmullRomCurve3([v(-25,1,0),v(-15,1,0),v(-15,.5,0),v(-10,.5,0)]),pathRegen=new THREE.CatmullRomCurve3([v(-10,.5,0),v(-5,.5,0),v(-5,2.5,0)]),pathSepMain=new THREE.CatmullRomCurve3([v(-5,2.5,0),v(-1,2.5,0),v(-1,2.5,2)]),pathSepCream=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(-1,1,4),v(20,1,5),v(20,5,5)]),pathHomo=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(3,2.5,0)]),pathHeat=new THREE.CatmullRomCurve3([v(3,2.5,0),v(7,2.5,0),v(7,4,-2)]),pathHold=new THREE.CatmullRomCurve3([v(7,4,-2),v(8.5,4,-2),v(10,4,-2)]),pathSafe=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,2.5,0),v(20,0.5,-5),v(20,5,-5)]),pathDivert=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,6,-2),v(-15,6,-2),v(-15,4,0)])}
                    function v(t,e,o){return new THREE.Vector3(t,e,o)}
                    function animate(){requestAnimationFrame(animate),controls.update(),updateProcessLogic(),updateParticles(),systemOn&&(pumpMesh.children[1].rotation.x+=.5),renderer.render(scene,camera)}
                    function updateProcessLogic() {
                        let target = 25.0;
                        if (systemOn) {
                            target = 25.0 + (steamVal * 0.7); // Max ~95C
                            if (currentTemp < target) currentTemp += 0.2;
                            if (currentTemp > target) currentTemp -= 0.1;
                        } else {
                            if (currentTemp > 25) currentTemp -= 0.1;
                        }
                        elTemp.innerText = currentTemp.toFixed(1) + "°C";

                        if (systemOn && currentTemp >= targetTempSet) {
                            fdvState = 'FORWARD';
                            setLight(elLightFwd, true);
                            setLight(elLightDiv, false);
                            fdvMesh.material.color.setHex(0x2ecc71);
                        } else {
                            fdvState = 'DIVERT';
                            setLight(elLightFwd, false);
                            setLight(elLightDiv, true);
                            fdvMesh.material.color.setHex(0xe74c3c);
                        }
                        let status = "System Off";
                        if (systemOn) {
                           status = \`Pump ON.\\nSeparator: \${sepOn ? 'Active' : 'Bypass'}\\nHomo: \${homoOn ? 'Active' : 'Bypass'}\\nMode: \${fdvState}\`;
                        }
                        elStatus.innerText = status;
                    }
                    function updateParticles(){if(!systemOn)return;Math.random()>.8&&spawnParticle();for(let t=particles.length-1;t>=0;t--){let e=particles[t];e.progress+=.01,e.path&&e.mesh.position.copy(e.path.getPoint(e.progress)),e.progress>=1&&(e.progress=0,handlePathSwitch(e))}}
                    function spawnParticle(){const t=new THREE.SphereGeometry(.1,8,8),e=new THREE.MeshBasicMaterial({color:0xffffff}),o=new THREE.Mesh(t,e);scene.add(o),particles.push({mesh:o,path:pathFeed,progress:0,stage:"feed"})}
                    function handlePathSwitch(t){"feed"===t.stage?(t.path=pathRegen,t.stage="regen"):"regen"===t.stage?(t.path=pathSepMain,t.stage="sep_in"):"sep_in"===t.stage?sepOn?Math.random()>.8?(t.path=pathSepCream,t.stage="cream_out",t.mesh.material.color.setHex(0xf1c40f)):(t.path=pathHomo,t.stage="homo_in"):(t.path=pathHomo,t.stage="homo_in"):"homo_in"===t.stage?(t.path=pathHeat,t.stage="heating"):"heating"===t.stage?(t.path=pathHold,t.stage="holding"):"holding"===t.stage?"FORWARD"===fdvState?(t.path=pathSafe,t.stage="finished",t.mesh.material.color.setHex(0x2ecc71)):(t.path=pathDivert,t.stage="divert",t.mesh.material.color.setHex(0xe74c3c)):"divert"===t.stage?(t.path=pathRegen,t.stage="regen",t.mesh.material.color.setHex(0xffffff)):(scene.remove(t.mesh),particles.splice(particles.indexOf(t),1))}
                    function toggleSystem(){systemOn=!systemOn,systemOn?(btnPower.classList.add('active'),btnPower.innerText="STOP PLANT",elPumpLight.classList.add("on"),elPumpLight.classList.remove("off"),elTooltip.innerText="Pump Running. Milk flowing."):(btnPower.classList.remove('active'),btnPower.innerText="START PLANT",elPumpLight.classList.remove("on"),elPumpLight.classList.add("off"),elTooltip.innerText="System Stopped.")}
                    function toggleSep(){sepOn=!sepOn;btnSep.innerText=sepOn?"Separator: ON":"Separator: OFF";btnSep.classList.toggle('active')}
                    function toggleHomo(){homoOn=!homoOn;btnHomo.innerText=homoOn?"Homogenizer: ON":"Homogenizer: OFF";btnHomo.classList.toggle('active')}
                    window.updateSteam=function(t){steamVal=parseInt(t),document.getElementById("steam-val-text").innerText=t+"%"}
                    function setLight(t,e){e?(t.classList.add("on"),t.classList.remove("off")):(t.classList.add("off"),t.classList.remove("on"))}
                    function onWindowResize(){camera.aspect=window.innerWidth/getRendererHeight(),camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,getRendererHeight())}
                    init();
                <\/script>
            </body>
            </html>
        `
    },
    hi: {
        title: "Pasteurization",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Pasteurization</h3>
            <p>Pasteurization ek critical heat treatment process hai jo dairy industry mein milk aur other liquid dairy products ki safety ensure karne aur unki shelf life badhane ke liye use hota hai. Iska naam French scientist <strong>Louis Pasteur</strong> ke naam par rakha gaya hai, jinhone 1860s mein discover kiya tha ki beverages ko heat karne se harmful microorganisms mar jaate hain — ye ek groundbreaking discovery thi jisne germ theory of disease ki foundation rakhi. Is process mein milk ko ek specific temperature par ek fixed time ke liye heat kiya jaata hai aur phir rapidly cool kiya jaata hai.</p>
            <p>Pasteurization ke widespread hone se pehle (early 20th century mein), milk tuberculosis, typhoid fever, scarlet fever, diphtheria, aur various diarrheal diseases ke transmission ka ek significant vehicle tha. Mandatory pasteurization laws ka adoption modern history mein sabse important public health interventions mein se ek maana jaata hai, jisne milk-borne disease outbreaks ko dramatically reduce kar diya.</p>
            <p><strong>Fundamental Scientific Basis:</strong> Heat se microorganisms ka destruction <strong>first-order kinetics</strong> follow karta hai, matlab ek given temperature par, microbial population ka ek fixed percentage har unit time mein destroy hota hai. Isko <strong>D-value (Decimal Reduction Time)</strong> se describe kiya jaata hai — wo time jo ek specific temperature par kisi given microbial population ka 90% (ek log cycle) destroy karne ke liye chahiye. Har organism ka har temperature par ek characteristic D-value hota hai. <strong>z-value</strong> wo temperature increase represent karta hai jo D-value ko 10 ke factor se (ek log cycle) reduce karne ke liye chahiye. D-values aur z-values milke dairy industry mein saare thermal processing parameters design karne ki scientific foundation banate hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Pasteurization ke Objectives</h3>
            <p>Pasteurization ke goals do hain aur ye public health aur commerce dono ke liye bahut important hain.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Public Health Safety (Primary Objective):</strong> Sabse main goal hai milk ko human consumption ke liye safe banana by destroying all pathogenic (disease-causing) microorganisms. Raw milk mein dangerous bacteria ho sakte hain jaise:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><i>Mycobacterium tuberculosis</i> — tuberculosis cause karta hai; historically ye primary target organism tha jab tak <i>Coxiella burnetii</i> ko zyada heat-resistant identify nahi kiya gaya.</li>
                        <li><i>Coxiella burnetii</i> — Q-fever cause karta hai; ab isko milk mein sabse zyada heat-resistant non-spore-forming pathogen maana jaata hai. Iska D<sub>72°C</sub> approximately 0.002–0.01 seconds hai, jo ise pasteurization design ke liye benchmark organism banata hai.</li>
                        <li><i>Brucella abortus</i> — brucellosis (undulant fever) cause karta hai; infected cattle dwara milk mein shed hota hai.</li>
                        <li><i>Salmonella</i> spp. — salmonellosis cause karta hai; <i>C. burnetii</i> ke comparison mein relatively heat-sensitive hai.</li>
                        <li><i>Listeria monocytogenes</i> — listeriosis cause karta hai; ye particularly pregnant women, neonates, elderly, aur immunocompromised individuals ke liye dangerous hai. Ye refrigeration temperatures par grow kar sakta hai (psychrotrophic), isliye post-pasteurization contamination ek concern hai.</li>
                        <li><i>Campylobacter jejuni</i> — worldwide bacterial gastroenteritis ka leading cause hai; bahut heat-sensitive hai aur pasteurization se easily destroy ho jaata hai.</li>
                        <li>Pathogenic strains of <i>Escherichia coli</i> (jaise O157:H7) — hemorrhagic colitis aur hemolytic uremic syndrome (HUS) cause karta hai.</li>
                        <li><i>Staphylococcus aureus</i> — cells toh pasteurization se destroy ho jaate hain, lekin koi bhi preformed enterotoxins heat-stable hote hain aur survive kar jaate hain. Ye milking aur raw milk handling ke dauran good hygienic practices ki importance ko underline karta hai.</li>
                    </ul>
                    <p class="mt-2">Pasteurization specifically <i>Coxiella burnetii</i> ka kam se kam <strong>5-log (99.999%) reduction</strong> achieve karne ke liye design kiya gaya hai. Is sabse resistant target organism ka destruction ensure karke, ye guarantee ho jaati hai ki baaki saare less-resistant pathogens bhi aur zyada margin of safety ke saath destroy ho gaye hain.</p>
                </li>
                <li><strong>Extended Shelf Life (Secondary Objective):</strong> Ye process bahut saare spoilage microorganisms ko bhi destroy karta hai (jaise psychrotrophic bacteria jaise <i>Pseudomonas</i> spp., yeasts, aur molds). Iske alawa, heat native milk enzymes ko bhi inactivate karti hai:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Lipase:</strong> Hydrolytic rancidity cause karta hai — triglycerides ko free fatty acids mein break down karta hai, particularly short-chain fatty acids (butyric, caproic, caprylic, capric acids), jo storage ke dauran characteristic soapy, bitter, ya "goaty" off-flavor produce karte hain.</li>
                        <li><strong>Protease:</strong> Heat-stable bacterial proteases (jo psychrotrophs dwara pasteurization se pehle raw milk ki cold storage ke dauran produce hote hain) pasteurization survive kar sakte hain aur stored milk mein casein ko degrade karke gelation aur bitterness cause kar sakte hain.</li>
                        <li><strong>Peroxidase:</strong> Ek natural milk enzyme jo alkaline phosphatase se zyada heat-resistant hai. Iska inactivation (approximately 80°C/15 sec par) over-pasteurization indicate karta hai.</li>
                    </ul>
                    <p class="mt-2">Microbial load ko reduce karke (typically 95–99% tak) aur enzymes ko inactivate karke, pasteurization significantly spoilage process ko slow down karta hai aur milk ki refrigerated shelf life ko kuch hours (raw milk ambient temperature par) se <strong>14–21 days</strong> tak extend kar deta hai proper refrigeration (≤4°C) mein. Raw milk ki initial microbial quality aur post-pasteurization contamination actual shelf life determine karne wale primary factors hain.</p>
                </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Thermal Death Kinetics aur Time-Temperature Relationships</h3>
            <p>Pasteurization ka scientific design ye samajhne par depend karta hai ki microorganisms lethal heat treatments par kaise respond karte hain. Do key parameters is relationship ko govern karte hain:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>D-value (Decimal Reduction Time):</strong> Ek specific temperature par minutes (ya seconds) mein wo time jo target microorganism population ka 90% destroy karne ke liye chahiye. Example ke liye, agar ek bacterium ka D<sub>63°C</sub> 2 minutes hai, toh 63°C par population ko 10<sup>6</sup> se 10<sup>5</sup> cells/mL tak reduce karne mein 2 minutes lagte hain. 5-log reduction achieve karne ke liye (10<sup>6</sup> se 10<sup>1</sup> tak), 5D chahiye hoga, yaani 63°C par 10 minutes.</li>
                <li><strong>z-value:</strong> Wo temperature increase (°C mein) jo D-value ko 10 ke factor se reduce karne ke liye chahiye. Zyaadatar vegetative bacteria ke liye, z-value approximately <strong>5–10°C</strong> hota hai. <i>Coxiella burnetii</i> ke liye, z-value approximately <strong>4–5°C</strong> hai. Iska matlab hai ki temperature sirf 4–5°C badhane se process 10 guna zyada lethal ho jaata hai, yahi reason hai ki HTST pasteurization 72°C par sirf 15 seconds require karti hai jabki 63°C par 30 minutes lagte hain.</li>
                <li><strong>Thermal Death Time (TDT) Curve:</strong> Ek given number of organisms ko kill karne ke liye required time ke log ka temperature ke against plot. Ye curve dairy engineers ko different time-temperature combinations par equivalent pasteurization processes design karne ki permission deta hai jo same lethality achieve karte hain. TDT curve ke saare points equally effective hote hain.</li>
            </ul>
            <p class="mt-2">Is relationship ko mathematically aise express kar sakte hain:</p>
            <p class="text-center my-2"><strong>log(t₁/t₂) = (T₂ - T₁) / z</strong></p>
            <p>Jahan t₁ aur t₂ temperatures T₁ aur T₂ par holding times hain, respectively. Ye equation explain karti hai ki 72°C/15s aur 63°C/30min kyun equivalent microbial destruction achieve karte hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. Common Pasteurization Methods</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. High-Temperature Short-Time (HTST) Pasteurization</h4>
            <p>Ye modern, large-scale dairy plants mein market milk ke liye sabse common method hai kyunki ye efficient hai aur energy save karta hai.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> Kam se kam <strong>72°C (161°F)</strong></li>
                <li><strong>Time:</strong> Kam se kam <strong>15 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> Ye time-temperature combination scientifically validated hai ki ye milk mein commonly found sabse zyada heat-resistant, non-spore-forming pathogen <i>Coxiella burnetii</i> (Q-fever ka agent) ke liye lethal hai. Ye process is organism ka minimum 5-log (100,000-fold) reduction achieve karta hai. Is organism ka destruction ensure karke, ye guarantee ho jaati hai ki baaki saare less-resistant pathogens bhi destroy ho gaye hain. Short duration ki heat exposure milk ki nutritional aur sensory properties (flavor, color, vitamin content) par thermal damage ko minimize karti hai. Ye continuous process ek <strong>Plate Heat Exchanger (PHE)</strong> mein carry out hota hai, jo thin corrugated stainless steel plates use karta hai jo ek frame mein arrange hoti hain aur efficient heat transfer ke liye narrow channels create karti hain.</p>
            <p><strong>HTST ke Advantages:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Continuous process — large volumes handle kar sakta hai (20,000+ liters/hour tak)</li>
                <li>Regeneration ki wajah se energy efficient (85–95% heat recovery)</li>
                <li>Milk components par minimal heat damage</li>
                <li>Heat-sensitive vitamins (B₁₂, C, folate) ki better retention</li>
                <li>Automated aur recording instruments ke saath easily controlled</li>
                <li>Compact design jo kam space leta hai</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Low-Temperature Long-Time (LTLT) ya Batch Pasteurization</h4>
            <p>Ye ek purana method hai, ab primarily choti batches ke liye ya phir products jaise kuch specialty cheeses, flavored milk, cream, aur ice cream mixes ke liye use hota hai jahan batch process zyada suitable hota hai.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> Kam se kam <strong>63°C (145°F)</strong></li>
                <li><strong>Time:</strong> Kam se kam <strong>30 minutes</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> Principle same hai HTST jaisa — equivalent lethality ke basis par pathogens ka thermal kill achieve karna. Lower temperature ko same lethal effect achieve karne ke liye bahut zyada lamba holding time chahiye, jaise ki upar describe kiye gaye z-value relationship se pata chalta hai. Ye process ek <strong>double-jacketed vat</strong> (ya vat pasteurizer) mein carry out hota hai, jahan milk ko jacket mein circulate hone wale hot water ya steam ke through heat kiya jaata hai, puri duration tak continuous agitation ke saath hold kiya jaata hai taaki uniform temperature distribution ho, aur phir cool kiya jaata hai. Effective toh hai, lekin HTST se kam energy-efficient aur zyada time-consuming hai.</p>
            <p><strong>LTLT ke Applications:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Small-scale dairy operations aur artisanal producers</li>
                <li>Ice cream mix pasteurization (69°C/30 min kyunki higher fat aur sugar content organisms ki thermal resistance badhata hai)</li>
                <li>Products jinmein added ingredients (chocolate, fruits) hain jo PHE se achhe se flow nahi karte</li>
                <li>Cream aur cultured products</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">3. Ultra-High Temperature (UHT) Treatment</h4>
            <p>Technically pasteurization se beyond hai ye (ye ek sterilization process hai), lekin UHT dairy industry mein ek important related heat treatment hai.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> <strong>135–150°C (275–302°F)</strong></li>
                <li><strong>Time:</strong> <strong>2–5 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> UHT treatment saare viable microorganisms ko destroy karta hai, including bacterial spores (particularly <i>Bacillus</i> aur <i>Clostridium</i> species), product ko commercially sterile bana deta hai. Aseptic packaging ke saath combine karne par, UHT milk room temperature par <strong>6–9 months</strong> tak bina refrigeration ke store ho sakta hai. Very high temperatures par ultra-short exposure time is fact ko exploit karta hai ki microbial destruction ka z-value (~10°C spores ke liye) chemical changes ke z-value (~30°C browning, vitamin loss ke liye) se lower hai. Iska matlab hai ki bahut high temperatures par, microbial kill chemical degradation se bahut zyada fast increase hota hai, jisse commercially sterile product milta hai jismein flavor aur nutrition mein relatively minor changes hote hain.</p>
            <p>UHT systems ko classify kar sakte hain:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Direct heating:</strong> Steam injection (steam milk mein) ya steam infusion (milk steam mein) — bahut rapid heating aur vacuum flash cooling ke through cooling</li>
                <li><strong>Indirect heating:</strong> Plate, tubular, ya scraped-surface heat exchangers use karke — HTST jaisa similar principle lekin bahut higher temperatures par</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">4. Other Pasteurization Time-Temperature Combinations</h4>
            <p>Regulatory bodies (jaise USA mein USDA/FDA aur India mein FSSAI) kai equivalent time-temperature combinations recognize karte hain, sab same thermal death kinetics par based hain:</p>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Temperature</th>
                            <th class="border border-gray-300 px-4 py-2">Time</th>
                            <th class="border border-gray-300 px-4 py-2">Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">63°C (145°F)</td><td class="border border-gray-300 px-4 py-2">30 minutes</td><td class="border border-gray-300 px-4 py-2">LTLT (Batch)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">72°C (161°F)</td><td class="border border-gray-300 px-4 py-2">15 seconds</td><td class="border border-gray-300 px-4 py-2">HTST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">89°C (191°F)</td><td class="border border-gray-300 px-4 py-2">1.0 second</td><td class="border border-gray-300 px-4 py-2">Higher Heat/Shorter Time (HHST)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">90°C (194°F)</td><td class="border border-gray-300 px-4 py-2">0.5 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">94°C (201°F)</td><td class="border border-gray-300 px-4 py-2">0.1 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">96°C (204°F)</td><td class="border border-gray-300 px-4 py-2">0.05 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">100°C (212°F)</td><td class="border border-gray-300 px-4 py-2">0.01 seconds</td><td class="border border-gray-300 px-4 py-2">HHST</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">138°C (280°F)</td><td class="border border-gray-300 px-4 py-2">2 seconds (min)</td><td class="border border-gray-300 px-4 py-2">UHT (Ultra Pasteurization)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">Ye saari combinations <i>Coxiella burnetii</i> ka equivalent destruction achieve karti hain aur same Thermal Death Time curve ke points represent karti hain. Higher fat content (cream, ice cream mix) ya added sweeteners wale products ko slightly higher temperatures ya longer times chahiye kyunki fat aur sugar ka heat treatment ke dauran microorganisms par protective effect hota hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. HTST Pasteurizer: Working Principle & Flow</h3>
            <p>HTST pasteurizer ek sophisticated system hai jo continuous, efficient heat treatment ke liye design kiya gaya hai. Isme kai integrated components hain jo saath mein kaam karte hain. Yahan iska step-by-step breakdown hai:</p>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">1. Balance Tank (Float-Controlled)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">2. Feed Pump (Centrifugal/Timing)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">3. Regeneration Section (Pre-Heating)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">4. Heating Section (Hot Water)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded font-bold">5. Holding Tube (CCP — Critical Control Point)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded">6. Flow Diversion Valve (FDV — Safety Device)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">7. Regeneration Section (Pre-Cooling)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded">8. Cooling Section (Chilled Water/Glycol)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">9. Storage/Packaging</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>Balance Tank (Float Tank):</strong> Process yahan se shuru hota hai. Ye ek chhota open ya closed tank hai jismein float valve laga hota hai jo raw milk receive karta hai aur milk ka constant head (level) maintain karta hai. <strong>Scientific Reason:</strong> Ye pasteurizer mein milk ka consistent, uninterrupted flow ensure karta hai, jo holding tube ke through correct flow rate maintain karne ke liye crucial hai. Constant level pump ko cavitating (air draw karne) se rokta hai aur uniform flow ensure karta hai. Diversion ki situation mein (FDV milk wapas bhejta hai), balance tank returned milk ko reprocessing ke liye receive bhi karta hai. Balance tank holding tube se neeche position kiya jaata hai taaki regeneration section mein pasteurized side ka product pressure hamesha raw side se zyada rahe — ye ek critical food safety principle hai jo plate leak hone ki situation mein raw milk ko pasteurized milk contaminate karne se rokta hai (ise <strong>positive pressure differential</strong> kehte hain).</p>
                </li>
                <li><strong>Feed Pump (Timing Pump):</strong> Ek centrifugal pump (ya kuch systems mein, ek positive displacement pump jise <strong>timing pump</strong> kehte hain) jo balance tank se milk draw karta hai aur system mein aage push karta hai. <strong>Scientific Reason:</strong> Timing pump downstream pressure mein changes ke bawajood ek constant, predetermined flow rate provide karta hai. Ye critical hai kyunki holding tube mein holding time directly flow rate par depend karta hai — agar pump milk bahut jaldi deliver kare, toh holding tube mein residence time 15 seconds se kam ho sakta hai, jisse inadequate pasteurization hogi. Regulatory authorities aksar timing pump ya minimum holding time ensure karne ka means require karti hain.</li>
                <li><strong>Regeneration Section (Pre-Heating):</strong> Ye pasteurizer ka sabse energy-efficient part hai. Yahan, cold incoming raw milk (approximately 4°C par) plates ke ek side flow karti hai, jabki hot, already pasteurized milk (approximately 72°C par) doosri side opposite direction mein flow karti hai (counter-current flow). <strong>Scientific Reason:</strong> Hot milk se cold milk mein thin stainless steel plates ke through heat transfer hota hai. Ye raw milk ko pre-heat karta hai (jaise 4°C se approximately 57–65°C tak) us heat energy ka use karke jo otherwise waste ho jaati, aur simultaneously hot pasteurized milk ko pre-cool karta hai (jaise 72°C se approximately 10–20°C tak). Modern regenerators <strong>90–95% tak heat energy recover</strong> kar sakte hain, jo process ko highly energy-efficient banata hai aur steam/hot water requirements ko significantly reduce karta hai. Plates corrugated hoti hain (herringbone ya chevron patterns ke saath) jo turbulent flow create karti hain, jo heat transfer coefficients ko enhance karta hai aur fouling prevent karta hai.</li>
                <li><strong>Heating Section:</strong> Pre-heated milk phir heating section mein jaati hai, jahan ise regenerated temperature se full pasteurization temperature (jaise 72°C) tak <strong>hot water</strong> use karke heat kiya jaata hai. <strong>Scientific Reason:</strong> Hot water (typically 74–76°C par maintain kiya jaata hai, target milk temperature se sirf 2–4°C upar) steam ki jagah use hota hai taaki milk ka localized overheating avoid ho, jo protein denaturation, plate surfaces par whey protein fouling, aur cooked flavors cause kar sakta hai. Heating medium aur milk ke beech chhota temperature differential (ΔT) gentle, uniform heating ensure karta hai.</li>
                <li><strong>Holding Tube:</strong> Heating ke baad, milk ek lambi pipe se flow karti hai jiska specific length aur diameter hota hai, jise holding tube kehte hain. Tube upward inclined hota hai (kam se kam 0.25 inches per foot) taaki milk gravity ke against flow kare. <strong>Scientific Reason:</strong> Ye tube precisely engineered hai taaki milk ka <strong>sabse fast moving particle</strong> ek end se doosre end tak jaane mein kam se kam 15 seconds (minimum holding time) le. Laminar flow conditions mein, velocity profile parabolic hota hai, matlab pipe ke center mein fluid average velocity se approximately do guna fast move karta hai. Isliye, holding tube <strong>maximum velocity</strong> ke basis par design kiya jaata hai, na ki average velocity ke basis par, taaki fastest-moving particles ko bhi adequate heat treatment mile. Upward slope ensure karta hai ki tube completely milk se filled rahe aur air pockets na ban jaayein (jo kuch milk ko tube se zyada jaldi bypass karne de sakte hain). Ye HACCP terms mein <strong>Critical Control Point (CCP)</strong> hai — wo point jahan product ki safety ensure hoti hai.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> Holding tube ke end par located, FDV ek automated, pneumatically ya spring-operated, three-way valve hai jo HTST system ka primary safety device hai. Ek calibrated <strong>Resistance Temperature Detector (RTD)</strong> ya thermocouple holding tube ke exit par milk temperature continuously monitor karta hai. 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li><strong>Forward Flow:</strong> Agar temperature set point par ya usse upar hai (jaise ≥72°C), toh valve properly pasteurized milk ko aage regeneration section (cooling side) aur packaging ki taraf flow karne deta hai.</li>
                        <li><strong>Divert Flow:</strong> Agar temperature kisi bhi reason se (jaise equipment malfunction, startup, ya shutdown) set point se 0.5°C bhi neeche gir jaata hai, toh valve automatically under-processed milk ko wapas balance tank mein divert kar deta hai reprocessing ke liye. Ye ensure karta hai ki <strong>koi bhi under-pasteurized milk kabhi final product tak na pahunche</strong>.</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific Reason:</strong> FDV ek fail-safe device hai. Ye default mein divert position mein rehne ke liye design kiya gaya hai (spring-loaded to divert). Ye sirf tab forward flow mein move hota hai jab electronic controller correct temperature confirm karta hai. Poora recording aur control system (including recording chart/data logger, RTD, aur FDV) regulatory inspectors dwara sealed hona chahiye taaki tampering prevent ho.</p>
                </li>
                <li><strong>Regeneration Section (Cooling):</strong> Properly pasteurized hot milk wapas regeneration section mein same plates ke opposite side se flow karti hai, apni heat incoming raw milk ko deti hai aur process mein pre-cool ho jaati hai (jaise 72°C se approximately 10–20°C tak). <strong>Pressure Differential:</strong> Ye critical hai ki <strong>pasteurized milk side regenerator mein raw milk side se higher pressure maintain kare</strong>. Ye ensure karta hai ki agar plate mein crack ya pinhole develop ho jaaye, toh leakage ki direction pasteurized se raw ki taraf ho (na ki raw contaminating pasteurized milk). Ye pressure differential balance tank aur pump ki relative positions se maintain hota hai.</li>
                <li><strong>Cooling Section:</strong> Pre-cooled milk phir final cooling section mein enter karti hai, jahan ise <strong>cold water</strong> (pehla stage, ~7°C tak cooling) aur phir <strong>chilled water ya propylene glycol</strong> (doosra stage, ≤4°C tak cooling) se chill kiya jaata hai. <strong>Scientific Reason:</strong> Rapid cooling essential hai taaki kisi bhi surviving thermophilic ya thermoduric organisms ki growth prevent ho aur milk safe storage temperature tak jaldi pahunche. Target hai milk ko <strong>≤4°C (39°F)</strong> tak jitna jaldi ho sake cool karna taaki safe refrigeration zone mein enter ho aur shelf life maximize ho. Cooling mein delay surviving bacteria ko warm milk mein rapidly multiply karne ka mauka de sakti hai.</li>
                <li><strong>Storage Tank:</strong> Fully processed, chilled milk phir ek insulated, sanitary <strong>silo storage tank</strong> mein bhej di jaati hai, packaging ke liye ready. Ye tanks agitators se equipped hote hain (cream separation prevent karne ke liye), temperature monitoring devices, aur Clean-In-Place (CIP) systems automated cleaning aur sanitization ke liye.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">V. Plate Heat Exchanger (PHE): Design aur Function</h3>
            <p>PHE HTST system ka heart hai. Iska design samajhna pasteurization process ko comprehend karne ke liye essential hai.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Construction:</strong> PHE mein thin, corrugated <strong>stainless steel plates</strong> (typically AISI 316 grade, 0.5–0.6 mm thick) ki ek series hoti hai jo ek frame mein clamp ki hoti hain. Plates ke beech gaskets alternating channels create karte hain jinse product aur heating/cooling media counter-current arrangement mein flow karte hain.</li>
                <li><strong>Corrugation Pattern:</strong> Plates mein herringbone ya chevron pattern pressed hota hai. <strong>Scientific Reason:</strong> Ye corrugations teen purposes serve karte hain — (1) heat transfer ke liye available surface area badhate hain, (2) low velocities par bhi turbulent flow create karte hain, jo heat transfer coefficients ko dramatically improve karta hai, aur (3) adjacent channels ke beech pressure differences withstand karne ke liye mechanical support provide karte hain.</li>
                <li><strong>Heat Transfer Coefficient:</strong> PHEs <strong>3,000–5,000 W/m²·K</strong> ke overall heat transfer coefficients achieve karte hain, jo tubular heat exchangers se 3–5 guna zyada hai. Ye high efficiency product aur heating medium ke beech small temperature differentials use karne ki permission deti hai.</li>
                <li><strong>Sections:</strong> Ek typical HTST PHE same frame ke andar teen sections mein divided hota hai: (1) Regeneration section, (2) Heating section, aur (3) Cooling section. Har section mein required heat load aur flow rate ke basis par calculated specific number of plates hoti hain.</li>
                <li><strong>Fouling:</strong> Time ke saath, milk proteins (particularly β-lactoglobulin) aur calcium phosphate heated surfaces par deposit ho sakte hain (is process ko fouling kehte hain). Ye heat transfer efficiency reduce karta hai aur pressure drop badhata hai. PHEs ko typically har 6–10 hours operation ke baad CIP procedures use karke clean karna padta hai (typically caustic soda followed by acid rinse).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VI. Pasteurization ki Verification: Alkaline Phosphatase (ALP) Test</h3>
            <p>Pasteurization successful hui ya nahi ye ensure karne ke liye, ek reliable verification test chahiye. <strong>Alkaline Phosphatase (ALP) test</strong> iske liye universally accepted method hai.</p>
            <p><strong>Scientific Principle:</strong> ALP (EC 3.1.3.1) ek naturally occurring, membrane-bound enzyme hai raw milk mein, predominantly milk fat globule membrane (MFGM) ke saath associated. Iski thermal resistance milk mein commonly found sabse heat-resistant common pathogenic bacterium <i>Coxiella burnetii</i> se slightly greater hai. Specifically:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>ALP <strong>72°C par 15 seconds</strong> (ya equivalent) par completely inactivate ho jaata hai.</li>
                <li><i>Coxiella burnetii</i> ALP ko inactivate karne ke liye required conditions se slightly less severe conditions par destroy ho jaata hai.</li>
            </ul>
            <p>Iska matlab hai ki agar ALP inactive hai (negative test), toh milk certainly itna heat ho chuki hai ki saare common pathogens destroy ho gaye hain. Ulta, agar ALP abhi bhi active hai (positive test), toh pasteurization inadequate thi.</p>
            
            <h4 class="font-semibold mt-4 mb-2">Standard ALP Tests:</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Aschaffenburg and Mullen Test (A&M Test):</strong> Classic colorimetric method. Ek substrate — disodium para-nitrophenyl phosphate — milk sample mein add kiya jaata hai aur 37°C par incubate kiya jaata hai. Agar active ALP present hai, toh ye phosphate group ko cleave karta hai, para-nitrophenol release karta hai, jo alkaline conditions mein <strong>yellow</strong> ho jaata hai. Yellow color ki intensity residual ALP activity ke proportional hoti hai. Positive result (yellow color) = inadequate pasteurization. Negative result (koi color change nahi) = successful pasteurization.</li>
                <li><strong>Fluorometric Method (ISO 11816):</strong> Ek zyada sensitive aur modern method jo regulatory testing mein use hota hai. Ek fluorogenic substrate (Fluorophos®) use karta hai jo ALP dwara cleave hone par fluorescent compound release karta hai. <strong>10 mU/L</strong> jitna low ALP activity detect kar sakta hai, jo ise marginal pasteurization failures ya raw milk ke post-pasteurization contamination detect karne ke liye zyada reliable banata hai.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">Important Considerations:</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>ALP Reactivation:</strong> Certain conditions mein (particularly cream aur high-fat products mein), ALP pasteurization ke baad storage ke dauran reactivation undergo kar sakta hai, especially 4°C se upar temperatures par. Ye phenomenon protein refolding aur zinc aur magnesium ions ki presence ki wajah se hota hai. Ye false-positive results de sakta hai. Reactivated ALP ko residual ALP (inadequate pasteurization ki wajah se) se distinguish karne ke liye, ek <strong>heat test</strong> ya <strong>magnesium chloride addition test</strong> use hota hai — reactivated ALP testing se pehle sample ko boil karne se inhibit ho jaata hai.</li>
                <li><strong>Positive ALP test</strong> ka matlab hai ki product unsafe hai aur sale ke liye release nahi kiya jaana chahiye. Poori batch ko reprocess ya discard karna hoga.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VII. Peroxidase Test (Storch's Test)</h3>
            <p>Jahan ALP test adequate pasteurization check karta hai, wahan <strong>Peroxidase Test</strong> <strong>over-pasteurization</strong> check karta hai.</p>
            <p><strong>Scientific Principle:</strong> Peroxidase (lactoperoxidase) ek natural milk enzyme hai jo ALP se zyada heat-resistant hai. Ye approximately <strong>80°C par 15 seconds</strong> ya <strong>76°C par 2 minutes</strong> par inactivate ho jaata hai.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Properly HTST-pasteurized milk mein (72°C/15s): ALP <strong>negative</strong> hai (destroyed), Peroxidase <strong>positive</strong> hai (abhi bhi active). ✅</li>
                <li>Over-pasteurized milk mein (>80°C): ALP aur Peroxidase dono <strong>negative</strong> hain (dono destroyed). Ye excessive heat treatment indicate karta hai, jo cooked flavors, whey protein denaturation, aur nutritional losses cause kar sakta hai.</li>
                <li>Raw milk mein: ALP aur Peroxidase dono <strong>positive</strong> hain.</li>
            </ul>
            <p><strong>The Test:</strong> Sample ko hydrogen peroxide (H₂O₂) aur ek chromogenic substrate (jaise para-phenylenediamine ya ABTS) ke saath mix kiya jaata hai. Agar peroxidase active hai, toh ye H₂O₂ dwara substrate ki oxidation catalyze karta hai, seconds mein <strong>blue/blue-black color</strong> produce karta hai. Koi color change nahi = peroxidase destroyed = over-pasteurized.</p>
            <p class="mt-2"><strong>Summary:</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Milk Type</th>
                            <th class="border border-gray-300 px-4 py-2">ALP Test</th>
                            <th class="border border-gray-300 px-4 py-2">Peroxidase Test</th>
                            <th class="border border-gray-300 px-4 py-2">Interpretation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Raw Milk</td><td class="border border-gray-300 px-4 py-2">Positive (+)</td><td class="border border-gray-300 px-4 py-2">Positive (+)</td><td class="border border-gray-300 px-4 py-2">Pasteurized nahi hai</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Properly HTST Pasteurized</td><td class="border border-gray-300 px-4 py-2">Negative (−)</td><td class="border border-gray-300 px-4 py-2">Positive (+)</td><td class="border border-gray-300 px-4 py-2">✅ Correct pasteurization</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Over-pasteurized / Boiled</td><td class="border border-gray-300 px-4 py-2">Negative (−)</td><td class="border border-gray-300 px-4 py-2">Negative (−)</td><td class="border border-gray-300 px-4 py-2">Excessive heat treatment</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">VIII. Pasteurization ka Milk Components par Effect</h3>
            <p>Pasteurization microbiological safety achieve karne ke liye design kiya gaya hai milk ki nutritional aur physicochemical properties par <strong>minimal impact</strong> ke saath. Lekin, kuch changes zaroor hote hain:</p>
            
            <h4 class="font-semibold mt-4 mb-2">A. Proteins</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Caseins (αs1, αs2, β, κ-casein):</strong> Apni tertiary structure ki kami aur high proline content ki wajah se extremely heat-stable hain. HTST pasteurization caseins mein <strong>negligible changes</strong> cause karti hai.</li>
                <li><strong>Whey Proteins (β-lactoglobulin, α-lactalbumin, BSA, immunoglobulins):</strong> Apni globular structure ki wajah se zyada heat-sensitive hain. HTST pasteurization approximately <strong>1–5% denaturation of β-lactoglobulin</strong> cause karti hai. Higher temperatures (>80°C) significant denaturation cause karte hain — denatured β-lactoglobulin casein micelles ki surface par κ-casein ke saath disulfide bond formation ke through interact karta hai, jo cheese-making properties aur rennet coagulation time ko affect karta hai.</li>
                <li><strong>Immunoglobulins (IgG, IgA, IgM):</strong> Pasteurization se significantly reduce hote hain (20–40% loss). Ye colostrum processing aur infant nutrition ke liye relevant hai, lekin pathogen destruction ka public health benefit immunoglobulins ke loss se bahut zyada hai.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">B. Fat</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Milk fat pasteurization temperatures par highly stable hai. Fatty acid composition ya triglyceride structure mein <strong>koi significant changes nahi</strong> hote.</li>
                <li>Lekin, heat treatment <strong>native lipase</strong> ko inactivate karta hai (ek important objective), storage ke dauran lipolytic rancidity prevent karta hai.</li>
                <li>Agar milk ko excessively pump kiya gaya ho ya usmein high levels of psychrotrophic bacterial lipases (heat-stable) hain, toh rancidity post-pasteurization bhi develop ho sakti hai.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">C. Vitamins</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Fat-soluble vitamins (A, D, E, K):</strong> Bahut heat-stable hain. Pasteurization ke dauran <strong>koi significant losses nahi</strong> hote.</li>
                <li><strong>Water-soluble vitamins:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Vitamin C (ascorbic acid):</strong> Sabse zyada heat-sensitive hai. HTST pasteurization ke dauran <strong>10–25%</strong> losses hote hain. Lekin, milk vitamin C ka significant dietary source nahi hai.</li>
                        <li><strong>Vitamin B₁₂:</strong> Approximately <strong>5–10%</strong> losses.</li>
                        <li><strong>Thiamine (B₁), Riboflavin (B₂):</strong> Riboflavin bahut heat-stable hai (<strong>&lt;5% loss</strong>). Thiamine losses minimal hain.</li>
                        <li><strong>Folate:</strong> Kuch loss (10% tak), lekin conditions ke basis par highly variable.</li>
                    </ul>
                </li>
                <li>Overall, HTST pasteurization ka vitamins par nutritional impact ek balanced diet ke context mein <strong>minor aur nutritionally insignificant</strong> hai.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">D. Minerals</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Minerals (calcium, phosphorus, magnesium, potassium, sodium) pasteurization temperatures se <strong>affect nahi hote</strong>. Unki bioavailability unchanged rehti hai.</li>
                <li>Higher temperatures (UHT aur above) par, kuch calcium phosphate soluble phase se precipitate ho sakta hai aur heat exchanger surfaces par deposit ho sakta hai (fouling mein contribute karta hai), lekin pasteurization temperatures par ye negligible hai.</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">E. Lactose</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Lactose pasteurization se <strong>affect nahi hota</strong>. Maillard browning reactions (lactose aur proteins ke amino groups ke beech) bahut higher temperatures (>100°C extended periods ke liye) require karti hain aur sirf UHT aur sterilized milk mein concern hain, jahan ye "cooked" ya "caramelized" flavor mein contribute karti hain.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IX. Thermoduric aur Thermophilic Organisms</h3>
            <p>Jabki pasteurization effectively saare vegetative pathogens destroy karti hai, kuch categories ke microorganisms survive karte hain:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Thermoduric organisms:</strong> Ye wo organisms hain jo pasteurization temperatures <strong>survive kar sakte hain (lekin grow nahi karte)</strong>. Ye pasteurized milk mein low numbers mein present hote hain. Examples mein shamil hain <i>Microbacterium lacticum</i>, <i>Streptococcus thermophilus</i>, <i>Micrococcus</i> spp., aur bacterial endospores (jaise <i>Bacillus cereus</i>, <i>Bacillus licheniformis</i>, <i>Clostridium</i> spp.). Inki presence <strong>Laboratory Pasteurization Count (LPC)</strong> dwara determine ki ja sakti hai — raw milk sample ko 63°C par 35 minutes heat karke phir plating karke.</li>
                <li><strong>Thermophilic organisms:</strong> Ye organisms pasteurization temperatures (55–65°C) par <strong>grow kar sakte hain</strong>. Agar pasteurizer lambe samay tak bina cleaning ke run kare, toh thermophiles (jaise <i>Streptococcus thermophilus</i>) regeneration section aur holding tube mein biofilms form kar sakte hain, jo pasteurized milk mein time ke saath increasing plate counts le aata hai. Yahi ek reason hai ki pasteurizers ko har 6–10 hours mein clean kiya jaata hai.</li>
                <li><strong>Spore-formers:</strong> Bacterial endospores (particularly <i>Bacillus</i> spp.) pasteurization se destroy nahi hote. Ye storage ke dauran germinate ho sakte hain, especially agar temperature abuse ho, jisse spoilage hota hai. <i>B. cereus</i> particularly concern hai kyunki ye psychrotrophic hai (refrigeration temperatures par grow kar sakta hai) aur enterotoxins produce kar sakta hai jo foodborne illness cause karte hain.</li>
            </ul>
            <p><strong>Implication:</strong> Yahi reason hai ki pasteurized milk ki abhi bhi limited shelf life hoti hai aur ise refrigeration mein store karna zaroori hai. Shelf life thermoduric organisms ke initial count aur post-pasteurization contamination (PPC) ki rate se determine hoti hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">X. Post-Pasteurization Contamination (PPC)</h3>
            <p>Pasteurized milk ki shelf life extend karne mein sabse badi challenges mein se ek hai <strong>post-pasteurization contamination</strong> — heat treatment step ke baad microorganisms ka dobara introduction.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Sources:</strong> Packaging materials, filler heads, gaskets, pipe joints, filling room mein air, pipelines mein residual biofilms, aur storage tanks ke contaminated seals bhi.</li>
                <li><strong>Organisms involved:</strong> Primarily Gram-negative psychrotrophic bacteria (especially <i>Pseudomonas</i> spp.), jo efficient spoilage organisms hain aur refrigeration temperatures par proteases aur lipases produce karne mein capable hain.</li>
                <li><strong>Control measures:</strong> Saare post-pasteurization equipment ki strict sanitation, aseptic ya ultra-clean filling systems ka use, packaging rooms mein HEPA-filtered air, aur coliform aur psychrotrophic counts use karke frequent monitoring.</li>
                <li><strong>Impact:</strong> PPC aksar pasteurized milk ki shelf life limit karne wala <strong>single most important factor</strong> hota hai. Ek well-managed dairy 18–21 days ki shelf life achieve kar sakti hai, jabki poor post-pasteurization hygiene shelf life ko sirf 7–10 days tak limit kar sakti hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XI. HACCP aur Regulatory Controls in Pasteurization</h3>
            <p>Pasteurization dairy processing mein <strong>HACCP (Hazard Analysis and Critical Control Points)</strong> food safety management system ka ek key part hai.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Critical Control Points (CCPs):</strong> HTST system mein, primary CCPs hain:
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Holding tube</strong> (temperature aur time minimum requirements meet karne chahiye)</li>
                        <li><strong>FDV</strong> (under-processed milk divert karne ke liye correctly function karna chahiye)</li>
                    </ul>
                </li>
                <li><strong>Monitoring:</strong> Holding tube ke exit par temperature ki continuous recording ek sealed recording chart ya electronic data logger par. Records regulatory inspection ke liye maintain karne honge.</li>
                <li><strong>Corrective Action:</strong> Agar temperature set point se neeche girta hai, toh FDV automatically milk divert karta hai. Forward flow resume karne se pehle cause identify karke correct karna hoga.</li>
                <li><strong>Verification:</strong> Finished product ki ALP testing, RTDs aur recording instruments ki regular calibration, aur critical components (FDV, RTD, recording system, timing pump) ki regulatory sealing.</li>
                <li><strong>Regulatory Bodies:</strong> India mein, <strong>FSSAI (Food Safety and Standards Authority of India)</strong> pasteurization standards regulate karta hai. USA mein, <strong>PMO (Pasteurized Milk Ordinance)</strong> jo FDA dwara administer hota hai aur state agencies dwara enforce hota hai, Grade "A" milk pasteurization ke saare aspects govern karta hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XII. Comparison: HTST vs. LTLT vs. UHT</h3>
            <div class="overflow-x-auto mt-2">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2">LTLT</th>
                            <th class="border border-gray-300 px-4 py-2">HTST</th>
                            <th class="border border-gray-300 px-4 py-2">UHT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Temperature</td><td class="border border-gray-300 px-4 py-2">63°C</td><td class="border border-gray-300 px-4 py-2">72°C</td><td class="border border-gray-300 px-4 py-2">135–150°C</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Time</td><td class="border border-gray-300 px-4 py-2">30 minutes</td><td class="border border-gray-300 px-4 py-2">15 seconds</td><td class="border border-gray-300 px-4 py-2">2–5 seconds</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Process Type</td><td class="border border-gray-300 px-4 py-2">Batch</td><td class="border border-gray-300 px-4 py-2">Continuous</td><td class="border border-gray-300 px-4 py-2">Continuous</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Equipment</td><td class="border border-gray-300 px-4 py-2">Jacketed Vat</td><td class="border border-gray-300 px-4 py-2">Plate Heat Exchanger</td><td class="border border-gray-300 px-4 py-2">PHE/Tubular/Direct Steam</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pathogens Destroyed</td><td class="border border-gray-300 px-4 py-2">Saare vegetative</td><td class="border border-gray-300 px-4 py-2">Saare vegetative</td><td class="border border-gray-300 px-4 py-2">Saare vegetative + spores</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Shelf Life</td><td class="border border-gray-300 px-4 py-2">14–18 days (refrigerated)</td><td class="border border-gray-300 px-4 py-2">14–21 days (refrigerated)</td><td class="border border-gray-300 px-4 py-2">6–9 months (ambient)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Storage</td><td class="border border-gray-300 px-4 py-2">Refrigeration zaroori</td><td class="border border-gray-300 px-4 py-2">Refrigeration zaroori</td><td class="border border-gray-300 px-4 py-2">Refrigeration nahi chahiye (kholne tak)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Flavor Impact</td><td class="border border-gray-300 px-4 py-2">Minimal</td><td class="border border-gray-300 px-4 py-2">Minimal</td><td class="border border-gray-300 px-4 py-2">Halka cooked flavor</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Whey Protein Denaturation</td><td class="border border-gray-300 px-4 py-2">~5–15%</td><td class="border border-gray-300 px-4 py-2">~1–5%</td><td class="border border-gray-300 px-4 py-2">~60–80%</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Energy Efficiency</td><td class="border border-gray-300 px-4 py-2">Low (koi regeneration nahi)</td><td class="border border-gray-300 px-4 py-2">High (90–95% regeneration)</td><td class="border border-gray-300 px-4 py-2">Moderate to High</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">ALP Test</td><td class="border border-gray-300 px-4 py-2">Negative</td><td class="border border-gray-300 px-4 py-2">Negative</td><td class="border border-gray-300 px-4 py-2">Negative</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Peroxidase Test</td><td class="border border-gray-300 px-4 py-2">Positive</td><td class="border border-gray-300 px-4 py-2">Positive</td><td class="border border-gray-300 px-4 py-2">Negative</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Packaging</td><td class="border border-gray-300 px-4 py-2">Standard</td><td class="border border-gray-300 px-4 py-2">Standard</td><td class="border border-gray-300 px-4 py-2">Aseptic (Tetra Pak, etc.)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XIII. Emerging aur Non-Thermal Pasteurization Technologies</h3>
            <p>Jabki thermal pasteurization gold standard bana hua hai, alternative aur supplementary technologies par research chal rahi hai jo improved quality retention offer kar sakti hain:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>High-Pressure Processing (HPP):</strong> Milk ko 400–600 MPa ke pressures par several minutes ke liye subject karta hai. Cell membranes ko disrupt karke aur proteins ko denature karke vegetative bacteria aur kuch enzymes ko inactivate karta hai. Heat-sensitive vitamins aur fresh flavor ki better retention. Lekin, ye spores inactivate nahi karta aur currently liquid milk ke liye expensive hai.</li>
                <li><strong>Pulsed Electric Fields (PEF):</strong> Milk par high-voltage electricity ke short pulses (20–80 kV/cm) apply karta hai, jo electroporation (microbial cell membranes ka irreversible disruption) cause karta hai. Minimal heating hoti hai. Fresh flavor aur nutrients ki better retention. Cost aur spores ke against inconsistent efficacy ki wajah se limited commercial adoption.</li>
                <li><strong>Microfiltration:</strong> 1.4 μm pore sizes wale ceramic membranes use karke bacteria ko physically remove karna. Total bacteria ka >3.5 log reduction aur spores ka >6 log reduction achieve kar sakta hai. Aksar mild heat treatment se pehle ya combined pre-treatment ke taur par use hota hai. Heat damage ke bina somatic cells aur bacteria ko physically remove karta hai.</li>
                <li><strong>UV-C Irradiation:</strong> 254 nm wavelength par ultraviolet light ka exposure, jo microbial DNA damage karta hai. Milk jaise opaque liquids mein poor UV penetration ki wajah se challenging hai. Thin-film UV systems develop kiye gaye hain lekin milk ke liye limited commercial application hai.</li>
            </ul>
            <p class="mt-2">Currently, in mein se koi bhi technology zyaadatar countries mein regulatory compliance ke liye thermal pasteurization ko replace nahi kar payi hai, lekin ye certain applications mein supplementary processes ke taur par use hoti hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XIV. Pasteurized Milk ke Quality Indicators aur Tests</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Standard Plate Count (SPC):</strong> Total aerobic bacterial count measure karta hai. Pasteurized milk ke liye, standard typically <strong>&lt;30,000 CFU/mL</strong> (FSSAI) ya <strong>&lt;20,000 CFU/mL</strong> (PMO Grade A) hai. High SPC poor raw milk quality, inadequate pasteurization, ya post-pasteurization contamination indicate karta hai.</li>
                <li><strong>Coliform Count:</strong> Pasteurized milk mein <strong>&lt;10 CFU/mL</strong> hona chahiye. Coliforms pasteurization se easily destroy ho jaate hain, toh inki presence post-pasteurization contamination ya gross under-processing indicate karti hai.</li>
                <li><strong>MBRT (Methylene Blue Reduction Test):</strong> Primarily raw milk quality assessment ke liye use hota hai, lekin ye microbial load indicate kar sakta hai. Pasteurized milk ke liye, reduction time <strong>&gt;6 hours</strong> hona chahiye.</li>
                <li><strong>Turbidity Test:</strong> Detect karta hai ki milk severely overheated (boiled) hui ya nahi. Properly pasteurized milk turbid (cloudy) filtrate produce karti hai intact whey proteins ki wajah se, jabki boiled milk clear filtrate produce karti hai kyunki whey proteins fully denatured aur coagulated ho chuke hote hain.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XV. Important Numerical Problems aur Calculations</h3>
            
            <h4 class="font-semibold mt-4 mb-2">1. Holding Tube Length Calculation</h4>
            <p>Given: Flow rate = 5,000 L/hr; Tube internal diameter = 48 mm; Required holding time = 15 seconds.</p>
            <p>Steps:</p>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Flow rate convert karo: 5,000 L/hr = 5,000 / 3,600 = 1.389 L/s = 1.389 × 10⁻³ m³/s</li>
                <li>Tube ka cross-sectional area: A = π(d/2)² = π(0.048/2)² = π(0.024)² = 1.8096 × 10⁻³ m²</li>
                <li>Average velocity: v<sub>avg</sub> = Q/A = 1.389 × 10⁻³ / 1.8096 × 10⁻³ = 0.768 m/s</li>
                <li>Laminar flow ke liye, maximum velocity = 2 × v<sub>avg</sub> = 2 × 0.768 = 1.536 m/s</li>
                <li>Minimum tube length = v<sub>max</sub> × time = 1.536 × 15 = <strong>23.04 meters</strong></li>
            </ul>
            <p class="mt-2"><strong>Note:</strong> Practice mein, 10–20% ka additional safety margin add kiya jaata hai, aur actual flow regime (turbulent vs. laminar) consider karna hota hai. Turbulent flow mein (Reynolds number >4,000, jo dairy systems mein typical hai), velocity profile flatter hota hai, aur maximum velocity approximately average velocity ka 1.2 guna hota hai na ki 2 guna.</p>

            <h4 class="font-semibold mt-4 mb-2">2. Regeneration Efficiency Calculation</h4>
            <p>Regeneration efficiency (%) = [(Regenerator mein raw milk ka temperature gain) / (Bina regeneration ke total temperature gain)] × 100</p>
            <p>Example: Raw milk 4°C par enter karti hai, regenerator se 65°C par nikalta hai, 72°C par pasteurize hota hai.</p>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Regenerator mein temperature gain = 65 - 4 = 61°C</li>
                <li>Total needed temperature gain = 72 - 4 = 68°C</li>
                <li>Regeneration efficiency = (61/68) × 100 = <strong>89.7%</strong></li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">XVI. Key Points ka Summary</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Pasteurization dairy industry mein public health safety ensure karne ke liye sabse important heat treatment hai.</li>
                <li>Pasteurization design ke liye benchmark organism <i>Coxiella burnetii</i> hai (sabse heat-resistant non-spore-forming pathogen).</li>
                <li>HTST (72°C/15s) sabse widely used commercial method hai; LTLT (63°C/30 min) batch processing ke liye use hota hai.</li>
                <li>Alkaline Phosphatase test standard verification test hai (negative = adequate pasteurization).</li>
                <li>Peroxidase test over-pasteurization check karta hai (HTST milk ke liye positive hona chahiye).</li>
                <li>Flow Diversion Valve (FDV) aur Holding Tube HTST system ke critical safety components hain.</li>
                <li>Pasteurization ka milk ki nutritional value par minimal impact hota hai — public health benefit kisi bhi minor nutrient losses se bahut zyada hai.</li>
                <li>Post-pasteurization contamination (PPC) pasteurized milk ki shelf life limit karne wala primary factor hai.</li>
                <li>Pasteurization ke baad proper refrigeration (≤4°C) safety aur quality maintain karne ke liye essential hai.</li>
                <li>Pasteurization milk ko sterilize NAHI karti — thermoduric organisms aur spores survive karte hain, isliye refrigerated storage aur limited shelf life zaroori hai.</li>
            </ul>
        `,
        simulation: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Advanced Milk Processing Plant Simulator</title>
                <style>
                    body { margin: 0; overflow: hidden; background-color: #1a1a1a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                    #ui-container { position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(20, 30, 40, 0.95); border-top: 4px solid #3498db; color: white; display: flex; justify-content: space-around; align-items: flex-start; padding: 15px 10px; box-sizing: border-box; backdrop-filter: blur(5px); z-index: 10; }
                    .panel-section { display: flex; flex-direction: column; align-items: center; padding: 0 15px; border-right: 1px solid #444; height: 100%; }
                    .panel-section:last-child { border-right: none; }
                    h2 { margin: 0 0 10px 0; font-size: 14px; color: #3498db; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
                    .digital-display { background: #000; color: #0f0; font-family: 'Courier New', monospace; font-size: 20px; padding: 5px 10px; border: 2px solid #555; border-radius: 4px; margin-bottom: 5px; min-width: 70px; text-align: center; }
                    .status-light { width: 15px; height: 15px; border-radius: 50%; background: #333; border: 2px solid #555; margin: 5px; box-shadow: inset 0 0 5px #000; display: inline-block; }
                    .status-light.on { background: #00ff00; box-shadow: 0 0 8px #00ff00; }
                    .status-light.off { background: #ff0000; box-shadow: 0 0 8px #ff0000; }
                    .toggle-btn { background: #444; color: #ccc; border: 1px solid #666; padding: 5px 10px; cursor: pointer; border-radius: 4px; font-size: 12px; margin: 2px; width: 100px; }
                    .toggle-btn.active { background: #2ecc71; color: #fff; border-color: #27ae60; }
                    button.main-start { background: linear-gradient(to bottom, #2c3e50, #1a252f); color: white; border: 2px solid #3498db; padding: 10px 20px; font-weight: bold; cursor: pointer; border-radius: 6px; transition: all 0.2s; }
                    button.main-start:hover { background: #34495e; box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
                    button.main-start.active { background: #e74c3c; border-color: #c0392b; }
                    #view-controls { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; gap: 5px; z-index: 20; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 8px; }
                    #view-controls button { background: rgba(50,50,50,0.8); color: white; border: 1px solid #777; padding: 6px 12px; cursor: pointer; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; width: 80px; }
                    #view-controls button:hover { background: #3498db; border-color: #3498db; }
                    .view-label { font-size: 10px; color: #aaa; text-align: center; margin-bottom: 2px; }
                    input[type=range] { width: 120px; cursor: pointer; }
                    #tooltip { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px; border-radius: 20px; pointer-events: none; font-size: 14px; border: 1px solid #555; z-index: 10; }
                    .legend { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; font-size: 11px; color: #ddd; z-index: 10; }
                    .legend-item { display: flex; align-items: center; margin-bottom: 4px; }
                    .color-box { width: 10px; height: 10px; margin-right: 8px; border: 1px solid #777; }
                    @media (max-width: 768px) {
                        #ui-container { flex-wrap: wrap; padding: 5px; justify-content: center; height: auto; max-height: 200px; }
                        .panel-section { flex-grow: 1; flex-basis: 45%; padding: 5px; margin-bottom: 5px; border-right: none; min-width: 140px; }
                        h2 { font-size: 11px; margin-bottom: 5px;}
                        .digital-display { font-size: 14px; padding: 2px 4px; }
                        .toggle-btn, button.main-start { width: 90%; font-size: 10px; padding: 4px; }
                        #view-controls { display: none; }
                        .legend { display: none; }
                        #tooltip { display: none; }
                    }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
            </head>
            <body>
                <div class="legend">
                    <div class="legend-item"><div class="color-box" style="background:#ecf0f1"></div>Tanks / Pipes</div>
                    <div class="legend-item"><div class="color-box" style="background:#34495e"></div>Pump & Motors</div>
                    <div class="legend-item"><div class="color-box" style="background:#f39c12"></div>Regen/Separator</div>
                    <div class="legend-item"><div class="color-box" style="background:#8e44ad"></div>Homogenizer</div>
                    <div class="legend-item"><div class="color-box" style="background:#e74c3c"></div>Heating Section</div>
                    <div class="legend-item"><div class="color-box" style="background:#3498db"></div>Cooling Section</div>
                </div>
                <div id="view-controls">
                    <div class="view-label">CAMERA VIEW</div>
                    <button onclick="setView('front')">FRONT</button>
                    <button onclick="setView('back')">BACK</button>
                    <button onclick="setView('left')">LEFT</button>
                    <button onclick="setView('right')">RIGHT</button>
                    <button onclick="setView('top')">TOP</button>
                    <button onclick="setView('iso')">ISO</button>
                </div>
                <div id="tooltip">PLANT READY. Configure & Start.</div>
                <div id="ui-container">
                    <div class="panel-section">
                        <h2>Main Control</h2>
                        <div style="display:flex; align-items:center; margin-bottom:10px;">
                            <div id="status-pump" class="status-light"></div>
                            <span style="font-size:12px; margin-left:5px;">FEED PUMP</span>
                        </div>
                        <button class="main-start" id="btn-power" onclick="toggleSystem()">START PLANT</button>
                    </div>
                    <div class="panel-section">
                        <h2>Units</h2>
                        <button class="toggle-btn" id="btn-sep" onclick="toggleSep()">Separator: OFF</button>
                        <button class="toggle-btn" id="btn-homo" onclick="toggleHomo()">Homogenizer: OFF</button>
                    </div>
                    <div class="panel-section">
                        <h2>Pasteurizer</h2>
                        <div class="digital-display" id="temp-display">25.0°C</div>
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                            <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                            <span id="steam-val-text" style="font-size:12px;">0%</span>
                        </div>
                    </div>
                    <div class="panel-section">
                        <h2>FDV Logic</h2>
                        <div style="display:flex; gap:15px; margin-top:5px;">
                            <div style="text-align:center;"><div id="light-fwd" class="status-light"></div><div style="font-size:10px;">SAFE</div></div>
                            <div style="text-align:center;"><div id="light-div" class="status-light on"></div><div style="font-size:10px;">DIVERT</div></div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-top:8px;">Set Point: 72.0°C</div>
                    </div>
                    <div class="panel-section" style="width: 180px; align-items:flex-start;">
                        <h2>Status</h2>
                        <div id="flow-status" style="font-size: 11px; color: #0f0; line-height:1.4;">Idle.</div>
                    </div>
                </div>
                <script>
                    let scene, camera, renderer, controls;
                    let fdvMesh, pumpMesh, particles = [];
                    let systemOn = false, sepOn = false, homoOn = false, steamVal = 0, currentTemp = 25.0;
                    const targetTempSet = 72.0;
                    let fdvState = 'DIVERT';
                    let pathFeed, pathRegen, pathSepMain, pathSepCream, pathHomo, pathHeat, pathHold, pathSafe, pathDivert;
                    
                    const elTemp = document.getElementById('temp-display'),
                          elStatus = document.getElementById('flow-status'),
                          elLightFwd = document.getElementById('light-fwd'),
                          elLightDiv = document.getElementById('light-div'),
                          elPumpLight = document.getElementById('status-pump'),
                          btnPower = document.getElementById('btn-power'),
                          btnSep = document.getElementById('btn-sep'),
                          btnHomo = document.getElementById('btn-homo');

                    function getRendererHeight() {
                        const uiContainer = document.getElementById('ui-container');
                        return window.innerHeight - (uiContainer ? uiContainer.offsetHeight : 0);
                    }
                    
                    function init() {
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x222222);
                        scene.fog = new THREE.Fog(0x222222, 30, 100);
                        camera = new THREE.PerspectiveCamera(45, window.innerWidth / getRendererHeight(), 0.1, 1000);
                        camera.position.set(0, 20, 35);
                        renderer = new THREE.WebGLRenderer({ antialias: true });
                        renderer.setSize(window.innerWidth, getRendererHeight());
                        document.body.appendChild(renderer.domElement);
                        controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true; controls.maxPolarAngle = Math.PI / 2 - 0.05;
                        const amb = new THREE.AmbientLight(0xffffff, 0.4); scene.add(amb);
                        const sun1 = new THREE.DirectionalLight(0xffffff, 0.7); sun1.position.set(10, 30, 20); scene.add(sun1);
                        const sun2 = new THREE.DirectionalLight(0xffbbaa, 0.4); sun2.position.set(-10, 20, -20); scene.add(sun2);
                        buildEnvironment(); buildTanks(); buildPump(); buildProcessingLine(); buildHoldingAndFDV(); buildPipes();
                        initPaths();
                        window.addEventListener('resize', onWindowResize);
                        animate();
                    }
                    
                    window.setView=function(v){const d=35,h=20;let x=0,y=h,z=0;switch(v){case'front':z=d;break;case'back':z=-d;break;case'left':x=-d;break;case'right':x=d;break;case'top':y=d+15,z=1;break;case'iso':x=25,y=25,z=25;break}camera.position.set(x,y,z);camera.lookAt(0,0,0);controls.update()}
                    
                    function buildEnvironment(){const f=new THREE.Mesh(new THREE.PlaneGeometry(80,60),new THREE.MeshStandardMaterial({color:0x151515,roughness:.8}));f.rotation.x=-Math.PI/2;scene.add(f);scene.add(new THREE.GridHelper(80,40,0x444444,0x222222))}
                    function buildTanks(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7,metalness:.7,roughness:.2});createTank(-25,5,0,3,10,"RAW MILK",t);createTank(-15,2.5,0,1.5,3,"BALANCE",t);createTank(20,5,-5,3,10,"SKIM/PAST.",t);createTank(20,3,5,1.5,5,"CREAM",t)}
                    function createTank(t,e,o,i,n,s,a){const d=new THREE.Mesh(new THREE.CylinderGeometry(i,i,n,32),a);d.position.set(t,e,o);scene.add(d);const r=new THREE.CylinderGeometry(.1,.1,1.5,8);for(let e=0;e<4;e++){const a=new THREE.Mesh(r);const l=e*90*Math.PI/180;a.position.set(t+Math.cos(l)*(i-.2),.75,o+Math.sin(l)*(i-.2)),scene.add(a)}addLabel(s,t,n+1.5,o)}
                    function buildPump(){const t=new THREE.Group;const e=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,1.5,16),new THREE.MeshStandardMaterial({color:0x34495e}));e.rotation.z=Math.PI/2,t.add(e);const o=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.5,16),new THREE.MeshStandardMaterial({color:0x95a5a6}));o.rotation.x=Math.PI/2,o.position.set(.8,0,0),t.add(o),t.position.set(-10,.8,0),pumpMesh=t,scene.add(t),addLabel("PUMP",-10,2,0)}
                    function buildProcessingLine(){createPHEUnit(-5,0,0,0xf39c12,"REGEN");const t=new THREE.Group,e=new THREE.Mesh(new THREE.CylinderGeometry(1,1.5,2),new THREE.MeshStandardMaterial({color:0xecf0f1})),o=new THREE.Mesh(new THREE.SphereGeometry(1,32,16,0,6.283185307179586,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xecf0f1}));o.position.y=1,t.add(e),t.add(o),t.position.set(-1,2,2),scene.add(t),addLabel("SEPARATOR",-1,4,2);const i=new THREE.Group,n=new THREE.Mesh(new THREE.BoxGeometry(2.5,2,1.5),new THREE.MeshStandardMaterial({color:0x8e44ad})),s=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0xffffff}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.8),i.add(n),i.add(s);const a=s.clone();a.position.set(0,0,.8),i.add(a);const d=s.clone();d.position.set(0,-.5,.8),i.add(d),i.position.set(3,1.5,0),scene.add(i),addLabel("HOMOGENIZER",3,3.5,0),createPHEUnit(7,0,0,0xe74c3c,"HEATING"),createPHEUnit(10,0,0,0x3498db,"COOLING")}
                    function createPHEUnit(t,e,o,i,n){const s=new THREE.MeshStandardMaterial({color:i}),a=new THREE.Mesh(new THREE.BoxGeometry(1.5,2.5,2),s);a.position.set(t,2,e),scene.add(a);const d=new THREE.Mesh(new THREE.BoxGeometry(1.6,2.7,.2),new THREE.MeshStandardMaterial({color:0x2c3e50}));d.position.set(t,2,e-1.1),scene.add(d);const r=d.clone();r.position.set(t,2,e+1.1),scene.add(r),addLabel(n,t,4,e)}
                    function buildHoldingAndFDV(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7}),e=new THREE.Group;for(let o=0;o<3;o++){const i=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,4),t);i.rotation.z=Math.PI/2,i.position.set(0,o*.3,-o*.4),e.add(i)}e.position.set(7,4,-2),scene.add(e),addLabel("HOLDING",7,5.5,-2),fdvMesh=new THREE.Mesh(new THREE.SphereGeometry(.5),new THREE.MeshStandardMaterial({color:0xecf0f1}));const o=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0x333}));o.position.y=.5,fdvMesh.add(o),fdvMesh.position.set(10,4,-2),scene.add(fdvMesh),addLabel("FDV",10,5,-2)}
                    function buildPipes(){const t=new THREE.MeshStandardMaterial({color:0x888888,transparent:!0,opacity:.3});createPipe([-25,1,0,-15,1,0,-15,3,0],t),createPipe([-15,.5,0,-10,.5,0],t),createPipe([-10,.5,0,-5,.5,0,-5,1,0],t),createPipe([-5,3,0,-1,3,0,-1,3,2],t),createPipe([-1,3,2,3,3,2,3,2,0],t),createPipe([3,2,0,7,2,0],t),createPipe([7,3,0,7,4,0,7,4,-2],t),createPipe([7,4,-2,10,4,-2],t),createPipe([10,4,-2,10,3,0],t),createPipe([10,1,0,20,1,0],t),createPipe([10,4,-2,10,6,-2,-15,6,-2,-15,4,0],t)}
                    function createPipe(t,e){const o=[];for(let e=0;e<t.length;e+=3)o.push(new THREE.Vector3(t[e],t[e+1],t[e+2]));const i=new THREE.CatmullRomCurve3(o),n=new THREE.TubeGeometry(i,10,.08,8,!1),s=new THREE.Mesh(n,e);scene.add(s)}
                    function addLabel(t,e,o,i){const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d");s.fillStyle="rgba(0,0,0,0.6)",s.fillRect(0,0,256,64),s.font="bold 28px Arial",s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.fillText(t,128,32);const a=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(n)}));a.position.set(e,o,i),a.scale.set(3,.75,1),scene.add(a)}
                    function initPaths(){pathFeed=new THREE.CatmullRomCurve3([v(-25,1,0),v(-15,1,0),v(-15,.5,0),v(-10,.5,0)]),pathRegen=new THREE.CatmullRomCurve3([v(-10,.5,0),v(-5,.5,0),v(-5,2.5,0)]),pathSepMain=new THREE.CatmullRomCurve3([v(-5,2.5,0),v(-1,2.5,0),v(-1,2.5,2)]),pathSepCream=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(-1,1,4),v(20,1,5),v(20,5,5)]),pathHomo=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(3,2.5,0)]),pathHeat=new THREE.CatmullRomCurve3([v(3,2.5,0),v(7,2.5,0),v(7,4,-2)]),pathHold=new THREE.CatmullRomCurve3([v(7,4,-2),v(8.5,4,-2),v(10,4,-2)]),pathSafe=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,2.5,0),v(20,0.5,-5),v(20,5,-5)]),pathDivert=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,6,-2),v(-15,6,-2),v(-15,4,0)])}
                    function v(t,e,o){return new THREE.Vector3(t,e,o)}
                    function animate(){requestAnimationFrame(animate),controls.update(),updateProcessLogic(),updateParticles(),systemOn&&(pumpMesh.children[1].rotation.x+=.5),renderer.render(scene,camera)}
                    function updateProcessLogic(){let t=25;systemOn?(t=25+steamVal*0.7,currentTemp<t?currentTemp+=.2:currentTemp>t&&(currentTemp-=.1)):currentTemp>25&&(currentTemp-=.1);elTemp.innerText=currentTemp.toFixed(1)+"°C";let e="System Off";if(systemOn){e=\`Pump ON.\\nSeparator: \${sepOn?'Active':'Bypass'}\\nHomo: \${homoOn?'Active':'Bypass'}\\nMode: \${fdvState}\`}elStatus.innerText=e;if(systemOn&&currentTemp>=72){fdvState="FORWARD";setLight(elLightFwd,!0);setLight(elLightDiv,!1);fdvMesh.material.color.setHex(3066993)}else{fdvState="DIVERT";setLight(elLightFwd,!1);setLight(elLightDiv,!0);fdvMesh.material.color.setHex(15158332)}}
                    function updateParticles(){if(!systemOn)return;Math.random()>.8&&spawnParticle();for(let t=particles.length-1;t>=0;t--){let e=particles[t];e.progress+=.01,e.path&&e.mesh.position.copy(e.path.getPoint(e.progress)),e.progress>=1&&(e.progress=0,handlePathSwitch(e))}}
                    function spawnParticle(){const t=new THREE.SphereGeometry(.1,8,8),e=new THREE.MeshBasicMaterial({color:16777215}),o=new THREE.Mesh(t,e);scene.add(o),particles.push({mesh:o,path:pathFeed,progress:0,stage:"feed"})}
                    function handlePathSwitch(t){"feed"===t.stage?(t.path=pathRegen,t.stage="regen"):"regen"===t.stage?(t.path=pathSepMain,t.stage="sep_in"):"sep_in"===t.stage?sepOn?Math.random()>.8?(t.path=pathSepCream,t.stage="cream_out",t.mesh.material.color.setHex(15844367)):(t.path=pathHomo,t.stage="homo_in"):(t.path=pathHomo,t.stage="homo_in"):"homo_in"===t.stage?(t.path=pathHeat,t.stage="heating"):"heating"===t.stage?(t.path=pathHold,t.stage="holding"):"holding"===t.stage?"FORWARD"===fdvState?(t.path=pathSafe,t.stage="finished",t.mesh.material.color.setHex(3066993)):(t.path=pathDivert,t.stage="divert",t.mesh.material.color.setHex(15158332)):"divert"===t.stage?(t.path=pathRegen,t.stage="regen",t.mesh.material.color.setHex(16777215)):(scene.remove(t.mesh),particles.splice(particles.indexOf(t),1))}
                    function toggleSystem(){systemOn=!systemOn,systemOn?(btnPower.classList.add('active'),btnPower.innerText="STOP PLANT",elPumpLight.classList.add("on"),elPumpLight.classList.remove("off"),elTooltip.innerText="Pump Running. Milk flowing."):(btnPower.classList.remove('active'),btnPower.innerText="START PLANT",elPumpLight.classList.remove("on"),elPumpLight.classList.add("off"),elTooltip.innerText="System Stopped.")}
                    function toggleSep(){sepOn=!sepOn;btnSep.innerText=sepOn?"Separator: ON":"Separator: OFF";btnSep.classList.toggle('active')}
                    function toggleHomo(){homoOn=!homoOn;btnHomo.innerText=homoOn?"Homogenizer: ON":"Homogenizer: OFF";btnHomo.classList.toggle('active')}
                    window.updateSteam=function(t){steamVal=parseInt(t),document.getElementById("steam-val-text").innerText=t+"%"}
                    function setLight(t,e){e?(t.classList.add("on"),t.classList.remove("off")):(t.classList.add("off"),t.classList.remove("on"))}
                    function onWindowResize(){camera.aspect=window.innerWidth/getRendererHeight(),camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,getRendererHeight())}
                    init();
                <\/script>
            </body>
            </html>
        `
    }
}

    
