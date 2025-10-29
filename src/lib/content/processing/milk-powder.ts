
export const milkPowderContent = {
    en: {
        title: "Milk Powder Processing",
        subTopics: {
            smp: {
                title: "A. Skimmed Milk Powder (SMP) Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Skimmed Milk Powder</h3>
                    <p>Skimmed Milk Powder (SMP) is a highly versatile dairy ingredient produced by removing water from pasteurized skim milk. Due to its long shelf life, ease of transport, and high protein content, it is widely used in the manufacturing of reconstituted milk, yoghurts, ice cream, bakery, and confectionery products.</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for SMP</h3>
                    <p>The Food Safety and Standards Authority of India (FSSAI) has laid down specific standards for SMP to ensure its quality and safety.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">FSSAI Requirement</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (max, %)</strong></td><td class="p-2 border">1.5</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td></tr>
                                <tr><td class="p-2 border"><strong>Insolubility Index (max, ml)</strong></td><td class="p-2 border">2.0</td></tr>
                                <tr><td class="p-2 border"><strong>Total Ash (max, %)</strong></td><td class="p-2 border">8.2</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of SMP with Food Safety Controls</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for SMP Production</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization of Skim Milk (72°C for 15 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Pre-heating for Evaporation (88-95°C for several mins)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Evaporation (to 45-50% TS) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet Air: 180-220°C, Outlet Air: 88-98°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Powder Separation (Cyclones) & Cooling</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Sifting & Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Milk Reception & Separation (PRP, oPRP):</strong> High-quality raw milk (a <strong>PRP</strong>) is pre-heated and separated into skim milk and cream using a centrifugal separator (an <strong>oPRP</strong>). The skim milk is used for SMP production.</li>
                        <li><strong>Pasteurization (CCP-1):</strong> The skim milk is pasteurized (72°C for 15 sec) to ensure it is free from pathogens. This is a <strong>Critical Control Point (CCP-1)</strong>.</li>
                        <li><strong>Pre-heating for Evaporation (CCP-2):</strong> Before evaporation, the skim milk is subjected to a specific heat treatment (e.g., 88-95°C for several minutes). This is a crucial <strong>CCP-2</strong>. This step denatures the whey proteins, which is essential for the heat stability of the final powder, especially if it's to be used in products that will be heat-treated later, like evaporated milk. Some systems use Direct Steam Injection (DSI) for rapid and precise heating.</li>
                        <li><strong>Multi-Effect Evaporation (oPRP):</strong> This is a critical energy-saving step and an <strong>oPRP</strong>. The milk is concentrated in a multi-effect evaporator to a total solids content of 45-50%.
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Vacuum Pan:</strong> The process occurs under a vacuum, which lowers the boiling point of water (to ~40-70°C). This allows for gentle water removal without damaging the milk proteins or causing excessive browning.</li>
                                <li><strong>Calandria:</strong> This is the heating section of the evaporator, typically consisting of a bundle of tubes. Steam heats the outside of the tubes, and milk flows as a thin film inside (falling film evaporator), allowing for rapid heat transfer and evaporation.</li>
                                <li><strong>Surface Condenser:</strong> A surface condenser is used to create and maintain the vacuum by condensing the water vapor removed from the milk.</li>
                            </ul>
                        </li>
                        <li><strong>Spray Drying (CCP-3):</strong> This is the core of the process and a <strong>CCP-3</strong>. The concentrated milk is atomized into fine droplets into a chamber of hot air.
                             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>High-Pressure Pump & Nozzle Atomization:</strong> A high-pressure pump forces the concentrated milk through a small nozzle, creating a fine spray of droplets. This maximizes the surface area for rapid drying.</li>
                                <li><strong>Dryer Chamber & Fans:</strong> The droplets are sprayed into a large drying chamber where hot air (inlet temp: 180-220°C) is blown in by powerful fans. The water evaporates almost instantly, leaving fine powder particles. The outlet air temperature (88-98°C) is carefully controlled as it determines the final moisture content of the powder.</li>
                                <li><strong>Flash Vessel:</strong> Sometimes, the powder is passed through a flash vessel, where a sudden drop in pressure helps to cool the powder and remove any final traces of moisture.</li>
                            </ul>
                        </li>
                        <li><strong>Powder Separation, Cooling & Packaging (PRP):</strong>
                             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Cyclones & Roots Blower:</strong> The powder is separated from the hot air stream using cyclones. A Roots blower often helps in creating the necessary air pressure dynamics for efficient separation.</li>
                                <li><strong>Vibro-Sifter:</strong> The collected powder is passed through a vibro-sifter to ensure uniform particle size and remove any lumps.</li>
                                <li><strong>Packaging:</strong> The cooled powder is then packed into multi-layer bags with a polyethylene liner to protect it from moisture and oxygen. This is a final <strong>PRP</strong>.</li>
                            </ul>
                        </li>
                    </ol>
                `
            },
            wmp: {
                title: "B. Whole Milk Powder (WMP) Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Whole Milk Powder</h3>
                    <p>Whole Milk Powder (WMP), also known as full cream milk powder, is produced by removing water from pasteurized, homogenized whole milk. It contains both milk fat and milk solids, making it a convenient base for reconstituting full cream milk and a key ingredient in confectionery, chocolate, and bakery products.</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for WMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr><th class="p-2 border">Parameter</th><th class="p-2 border">FSSAI Requirement</th></tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (min, %)</strong></td><td class="p-2 border">26.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of WMP with Food Safety Controls</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for WMP Production</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (to desired Fat:SNF ratio) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pre-heating & Pasteurization (e.g., 90°C for 2-3 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Evaporation (to 45-50% TS) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet Air: 180-220°C, Outlet Air: 88-98°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Powder Separation, Cooling & Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of WMP Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Standardization & Pre-heating (oPRP, CCP-1):</strong> The process starts with standardizing whole milk to the correct fat-to-SNF ratio (an <strong>oPRP</strong>). The pre-heating step (a <strong>CCP-1</strong>) is even more critical for WMP than for SMP. The high heat treatment not only ensures microbial safety but also inactivates lipase enzymes and creates antioxidant compounds (sulfhydryl groups from denatured proteins). This is vital to prevent oxidative rancidity of the fat during storage, which is the primary cause of spoilage in WMP.</li>
                        <li><strong>Homogenization (oPRP):</strong> Homogenization is an essential <strong>oPRP</strong> for WMP. It breaks down the fat globules, preventing the 'free fat' from separating out in the final powder. Free fat is highly susceptible to oxidation and leads to poor solubility and flavor defects.</li>
                        <li><strong>Evaporation & Spray Drying (oPRP, CCP-2):</strong> Similar to SMP, the milk is concentrated in a multi-effect evaporator (an <strong>oPRP</strong>), utilizing equipment like vacuum pans, calandrias, and surface condensers. It is then spray-dried. The spray drying process is a <strong>CCP-2</strong> where temperatures must be carefully controlled to achieve the target moisture content without causing heat damage to the fat. The same equipment (high-pressure pumps, nozzles, drying chambers, cyclones) is used.</li>
                        <li><strong>Packaging:</strong> WMP is highly susceptible to oxidation due to its fat content. Therefore, it is often packaged using gas flushing (replacing oxygen with an inert gas like nitrogen) to extend its shelf life.</li>
                    </ol>
                `
            }
        }
    },
    hi: {
        title: "Milk Powder ki Processing",
        subTopics: {
            smp: {
                title: "A. Skimmed Milk Powder (SMP) ki Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Skimmed Milk Powder ka Introduction</h3>
                    <p>Skimmed Milk Powder (SMP) ek bahut versatile dairy ingredient hai jo pasteurized skim milk se paani hatakar banaya jaata hai. Iski lambi shelf life, aasan transport, aur high protein content ke karan, iska istemal reconstituted milk, yoghurts, ice cream, bakery, aur confectionery products banane mein bahutayat se hota hai.</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP ke liye FSSAI Standards</h3>
                    <p>Food Safety and Standards Authority of India (FSSAI) ne SMP ki gunvatta aur suraksha sunishchit karne ke liye vishisht maanak nirdharit kiye hain.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">FSSAI Requirement</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (max, %)</strong></td><td class="p-2 border">1.5</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td></tr>
                                <tr><td class="p-2 border"><strong>Insolubility Index (max, ml)</strong></td><td class="p-2 border">2.0</td></tr>
                                <tr><td class="p-2 border"><strong>Total Ash (max, %)</strong></td><td class="p-2 border">8.2</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath SMP ki Processing</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP Production ke liye Processing Flowchart</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization of Skim Milk (72°C 15 sec ke liye)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Pre-heating for Evaporation (88-95°C kai mins ke liye)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Evaporation (45-50% TS tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet Air: 180-220°C, Outlet Air: 88-98°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Powder Separation (Cyclones) & Cooling</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Sifting & Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Detailed Explanation</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Milk Reception & Separation (PRP, oPRP):</strong> High-quality raw milk (ek <strong>PRP</strong>) ko pre-heat kiya jaata hai aur ek centrifugal separator (ek <strong>oPRP</strong>) se skim milk aur cream mein alag kiya jaata hai. SMP banane ke liye skim milk ka istemal hota hai.</li>
                        <li><strong>Pasteurization (CCP-1):</strong> Skim milk ko pasteurize kiya jaata hai (72°C 15 sec ke liye) taaki vah pathogens se mukt ho jaaye. Yah ek <strong>Critical Control Point (CCP-1)</strong> hai.</li>
                        <li><strong>Pre-heating for Evaporation (CCP-2):</strong> Evaporation se pehle, skim milk ko ek vishisht heat treatment (jaise, 88-95°C kai minutes ke liye) diya jaata hai. Yah ek mahatvapurna <strong>CCP-2</strong> hai. Yah kadam whey proteins ko denature karta hai, jo antim powder ki heat stability ke liye avashyak hai. Kuch systems mein tezi se aur sateek heating ke liye <strong>Direct Steam Injection (DSI)</strong> ka upyog hota hai.</li>
                        <li><strong>Multi-Effect Evaporation (oPRP):</strong> Yah ek mahatvapurna urja-bachat kadam aur ek <strong>oPRP</strong> hai. Milk ko ek multi-effect evaporator mein 45-50% total solids tak concentrate kiya jaata hai.
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Vacuum Pan:</strong> Yah prakriya ek vacuum ke tahat hoti hai, jo paani ke ubalne ke bindu ko kam kar deta hai (~40-70°C). Isse milk proteins ko nuksaan pahunchaye bina ya atyadhik browning ke bina paani ko komalta se hatane ki anumati milti hai.</li>
                                <li><strong>Calandria:</strong> Yah evaporator ka heating section hai, jisme aam taur par tubes ka ek bundle hota hai. Steam tubes ke bahar ko garam karti hai, aur milk andar ek patli film ke roop mein behta hai (falling film evaporator), jisse tezi se garmi ka sthanantaran aur vashpikaran hota hai.</li>
                                <li><strong>Surface Condenser:</strong> Ek surface condenser ka upyog milk se hataye gaye paani ke vashp ko sanghanit karke vacuum banane aur banaye rakhne ke liye kiya jaata hai.</li>
                            </ul>
                        </li>
                        <li><strong>Spray Drying (CCP-3):</strong> Yah prakriya ka mool hai aur ek <strong>CCP-3</strong> hai. Concentrate kiye gaye milk ko garam hawa ke ek chamber mein mahin boondon mein atomize kiya jaata hai.
                             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>High-Pressure Pump & Nozzle Atomization:</strong> Ek high-pressure pump concentrate kiye gaye milk ko ek chhote nozzle ke madhyam se force karta hai, jisse mahin boondon ka ek spray banta hai. Yah tezi se sukhane ke liye satah kshetra ko adhiktam karta hai.</li>
                                <li><strong>Dryer Chamber & Fans:</strong> Boondein ek bade sukhane wale chamber mein spray ki jaati hain jahan shaktishali pankhon dwara garam hawa (inlet temp: 180-220°C) phunki jaati hai. Paani lagbhag turant vashpit ho jaata hai, jisse mahin powder ke kan bachte hain. Outlet hawa ka taapman (88-98°C) dhyan se niyantrit kiya jaata hai kyonki yah powder ke antim nami content ko nirdharit karta hai.</li>
                                <li><strong>Flash Vessel:</strong> Kabhi-kabhi, powder ko ek flash vessel se guzara jaata hai, jahan dabav mein achanak giravat powder ko thanda karne aur nami ke antim anshon ko hatane mein madad karti hai.</li>
                            </ul>
                        </li>
                        <li><strong>Powder Separation, Cooling & Packaging (PRP):</strong>
                             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Cyclones & Roots Blower:</strong> Powder ko garam hawa ki dhara se cyclones ka upyog karke alag kiya jaata hai. Ek Roots blower aksar kushal alagav ke liye avashyak hawa dabav gatiki banane mein madad karta hai.</li>
                                <li><strong>Vibro-Sifter:</strong> Ekatrit powder ko ek vibro-sifter se guzara jaata hai taki saman kan aakar sunishchit ho sake aur koi bhi gaanth hatayi ja sake.</li>
                                <li><strong>Packaging:</strong> Thanda kiya gaya powder phir use nami aur oxygen se bachane ke liye polyethylene liner wale multi-layer bags mein pack kiya jaata hai. Yah ek antim <strong>PRP</strong> hai.</li>
                            </ul>
                        </li>
                    </ol>
                `
            },
            wmp: {
                title: "B. Whole Milk Powder (WMP) ki Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whole Milk Powder ka Introduction</h3>
                    <p>Whole Milk Powder (WMP), jise full cream milk powder bhi kaha jaata hai, pasteurized, homogenized whole milk se paani hatakar banaya jaata hai. Ismein milk fat aur milk solids dono hote hain, jisse yah reconstituted full cream milk banane ke liye ek suvidhajanak adhaar aur confectionery, chocolate, aur bakery products mein ek pramukh sanghatak hai.</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP ke liye FSSAI Standards</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr><th class="p-2 border">Parameter</th><th class="p-2 border">FSSAI Requirement</th></tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (min, %)</strong></td><td class="p-2 border">26.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath WMP ki Processing</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP Production ke liye Processing Flowchart</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (desired Fat:SNF ratio tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pre-heating & Pasteurization (jaise, 90°C 2-3 min ke liye)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Evaporation (45-50% TS tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet Air: 180-220°C, Outlet Air: 88-98°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Powder Separation, Cooling & Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP Processing Steps ka Detailed Explanation</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Standardization & Pre-heating (oPRP, CCP-1):</strong> Process whole milk ko sahi fat-to-SNF ratio tak standardize karne se shuru hota hai (ek <strong>oPRP</strong>). Pre-heating step (ek <strong>CCP-1</strong>) WMP ke liye SMP se bhi zyada mahatvapurna hai. High heat treatment na sirf microbial suraksha sunishchit karta hai balki lipase enzymes ko bhi nishkriya karta hai aur antioxidant compounds (denatured proteins se sulfhydryl groups) banata hai. Yah storage ke dauran fat ke oxidative rancidity ko rokne ke liye mahatvapurna hai, jo WMP mein kharab hone ka pramukh karan hai.</li>
                        <li><strong>Homogenization (oPRP):</strong> Homogenization WMP ke liye ek avashyak <strong>oPRP</strong> hai. Yah fat globules ko todta hai, jisse antim powder mein 'free fat' ko alag hone se rokta hai. Free fat oxidation ke prati atyant sanvedansheel hota hai aur kharab solubility aur swaad doshon ki or le jaata hai.</li>
                        <li><strong>Evaporation & Spray Drying (oPRP, CCP-2):</strong> SMP ke saman, milk ko ek multi-effect evaporator (ek <strong>oPRP</strong>) mein concentrate kiya jaata hai, jisme vacuum pans, calandrias, aur surface condensers jaise upkaranon ka upyog hota hai. Phir ise spray-dry kiya jaata hai. Spray drying prakriya ek <strong>CCP-2</strong> hai jahan taapman ko dhyan se niyantrit kiya jaana chahiye taaki fat ko garmi se nuksaan pahunchaye bina lakshit nami samagri prapt ho sake. Vahi upkaran (high-pressure pumps, nozzles, drying chambers, cyclones) ka upyog hota hai.</li>
                        <li><strong>Packaging:</strong> WMP apne fat content ke karan oxidation ke prati atyant sanvedansheel hai. Isliye, ise aksar gas flushing (oxygen ko nitrogen jaisi ek akriya gas se badalna) ka upyog karke pack kiya jaata hai taki iski shelf life badh sake.</li>
                    </ol>
                `
            }
        }
    }
}

    