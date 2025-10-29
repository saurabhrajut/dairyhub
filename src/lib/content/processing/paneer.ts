export const paneerProcessingContent = {
    hi: {
        title: "Paneer Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Paneer</h3>
            <p>Paneer is a fresh, non-aged, non-melting cheese common in the Indian subcontinent. It is made by curdling heated milk with a fruit- or vegetable-derived acid, such as lemon juice. Its crumbly and moist form is called chhena. Paneer is a rich source of milk protein and is widely used in various Indian culinary preparations.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Paneer</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has defined standards for Paneer to ensure its quality and safety.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, % by mass)</strong></td>
                            <td class="p-2 border">60.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min, % on dry matter basis)</strong></td>
                            <td class="p-2 border">50.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Paneer with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Paneer Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Heating (85-90°C for 5-10 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70-75°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Coagulation with Acid (pH ~5.2)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Draining of Whey</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Hooping and Pressing (2-3 kg/cm²) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Chilling in Cold Water (4-6°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging & Storage <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Raw Material & Quality Control</h3>
            <p>Paneer ki quality seedhe aane wale milk ki quality par nirbhar karti hai. Dairy industry mein, milk ko process karne se pehle mahatvapurna parameters ke liye test kiya jaata hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr><th class="p-2 border">Parameter</th><th class="p-2 border">Ideal Range (Buffalo Milk)</th><th class="p-2 border">Importance</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Fat Content</td><td class="p-2 border">5.8% - 6.0%</td><td class="p-2 border">Antim paneer ki upaj aur banavat ko seedhe prabhavit karta hai.</td></tr>
                        <tr><td class="p-2 border">Acidity (% Lactic Acid)</td><td class="p-2 border">0.14 - 0.16%</td><td class="p-2 border">Taaza milk avashyak hai. Adhik acidity kharab banavat aur kam upaj ka kaaran banti hai.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Coagulants: Types and Usage</h3>
            <p>Coagulant ka chayan paneer ki banavat, swaad aur upaj ko prabhavit karta hai.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Citric Acid:</strong> Sabse aam audyogik coagulant. Ek saaf, amliy swaad aur sthir parinaam pradan karta hai.</li>
                <li><strong>Sour Whey:</strong> Ek paramparik aur kifayti tarika. Aksar ek naram, adhik paramparik swaad wala paneer milta hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">How to Increase Paneer Yield</h3>
            <p>Upaj ko adhiktam karna labhdayakta ki kunji hai. Yahan sabse prabhavi tarike hain:</p>
            <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                <li><strong>Optimal Heating:</strong> Milk ko 85-90°C tak garam karne se whey proteins denature ho jaate hain, jo phir coagulation ke dauran casein dahi mein phans jaate hain, jisse kul thos recovery badh jaati hai.</li>
                <li><strong>Correct Coagulation pH:</strong> Paneer jamane ke liye aadarsh pH lagbhag 5.2 hai. Is pH tak pahunchne ke liye coagulant ko sahi dhang se milana adhiktam protein varsha sunishchit karta hai.</li>
                <li><strong>Gentle Stirring:</strong> Jamane ke dauran bahut jor se hilane se dahi mahin kanon mein toot jaata hai, jo phir whey mein kho jaate hain.</li>
                <li><strong>Controlled Pressing:</strong> Sahi dabav (2-3 kg/cm²) ko sahi samay (15-20 min) ke liye lagana mahatvapurna hai. Adhik dabane se bahut adhik nami aur vasa nikal jaati hai.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Safe Yield Increasers for Consumption</h3>
            <p><strong>Whey Protein Concentrate (WPC):</strong> Garam karne se pehle milk mein WPC powder milana protein samagri ko badhava dene ke liye ek aadhunik taknik hai. Yah seedhe jamne ke liye uplabdh thos padarthon ki matra ko badhata hai.</p>
        
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Paneer Texture Explained: Hard, Soft, and Fluffy</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr><th class="p-2 border">Texture</th><th class="p-2 border">Primary Causes</th><th class="p-2 border">Result</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Hard / Rubbery</td><td class="p-2 border">Low fat content, over-pressing, high coagulation temperature.</td><td class="p-2 border">Chewy, dry, and does not absorb flavors well.</td></tr>
                        <tr><td class="p-2 border">Soft / Spongy (Ideal)</td><td class="p-2 border">Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing.</td><td class="p-2 border">Holds its shape, has a smooth bite, and absorbs gravies.</td></tr>
                        <tr><td class="p-2 border">Crumbly / Brittle</td><td class="p-2 border">High acidity in milk, coagulation at too low a temperature, insufficient pressing.</td><td class="p-2 border">Breaks apart easily, difficult to cut into cubes.</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    en: {
        title: "Paneer Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Paneer</h3>
            <p>Paneer is a fresh, non-aged, non-melting cheese common in the Indian subcontinent. It is made by curdling heated milk with a fruit- or vegetable-derived acid, such as lemon juice. Its crumbly and moist form is called chhena. Paneer is a rich source of milk protein and is widely used in various Indian culinary preparations.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Paneer</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has defined standards for Paneer to ensure its quality and safety.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, % by mass)</strong></td>
                            <td class="p-2 border">60.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min, % on dry matter basis)</strong></td>
                            <td class="p-2 border">50.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Paneer with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Paneer Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Heating (85-90°C for 5-10 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70-75°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Coagulation with Acid (pH ~5.2)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Draining of Whey</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Hooping and Pressing (2-3 kg/cm²) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Chilling in Cold Water (4-6°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging & Storage <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Raw Material & Quality Control</h3>
            <p>The quality of paneer is directly dependent on the quality of the incoming milk. In a dairy industry setting, milk is first tested for critical parameters before being accepted for processing.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr><th class="p-2 border">Parameter</th><th class="p-2 border">Ideal Range (Buffalo Milk)</th><th class="p-2 border">Importance</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Fat Content</td><td class="p-2 border">5.8% - 6.0%</td><td class="p-2 border">Directly impacts the final yield and texture of the paneer.</td></tr>
                        <tr><td class="p-2 border">Acidity (% Lactic Acid)</td><td class="p-2 border">0.14 - 0.16%</td><td class="p-2 border">Fresh milk is required. High acidity leads to poor texture and low yield.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Coagulants: Types and Usage</h3>
            <p>The choice of coagulant affects the texture, flavor, and yield of the paneer.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Citric Acid:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results.</li>
                <li><strong>Sour Whey:</strong> A traditional and economical method. Often results in a softer, more traditional-flavored paneer.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">How to Increase Paneer Yield</h3>
            <p>Maximizing yield is key to profitability. Here are the most effective methods:</p>
            <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                <li><strong>Optimal Heating:</strong> Heating milk to 85-90°C denatures the whey proteins, which then get trapped in the casein curd during coagulation, increasing total solid recovery.</li>
                <li><strong>Correct Coagulation pH:</strong> The ideal pH for paneer coagulation is around 5.2. Adding the coagulant correctly to reach this pH ensures maximum protein precipitation.</li>
                <li><strong>Gentle Stirring:</strong> Stirring too vigorously during coagulation breaks the curd into fine particles, which are then lost in the whey.</li>
                <li><strong>Controlled Pressing:</strong> Applying the correct pressure (2-3 kg/cm²) for the right amount of time (15-20 mins) is crucial. Over-pressing squeezes out too much moisture and fat.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Safe Yield Increasers for Consumption</h3>
            <p><strong>Whey Protein Concentrate (WPC):</strong> Adding WPC powder to milk before heating is a modern technique to boost the protein content. This directly increases the amount of solids available for coagulation.</p>
        
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Paneer Texture Explained: Hard, Soft, and Fluffy</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr><th class="p-2 border">Texture</th><th class="p-2 border">Primary Causes</th><th class="p-2 border">Result</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Hard / Rubbery</td><td class="p-2 border">Low fat content, over-pressing, high coagulation temperature.</td><td class="p-2 border">Chewy, dry, and does not absorb flavors well.</td></tr>
                        <tr><td class="p-2 border">Soft / Spongy (Ideal)</td><td class="p-2 border">Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing.</td><td class="p-2 border">Holds its shape, has a smooth bite, and absorbs gravies.</td></tr>
                        <tr><td class="p-2 border">Crumbly / Brittle</td><td class="p-2 border">High acidity in milk, coagulation at too low a temperature, insufficient pressing.</td><td class="p-2 border">Breaks apart easily, difficult to cut into cubes.</td></tr>
                    </tbody>
                </table>
            </div>
        `
    }
};