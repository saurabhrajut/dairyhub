
export const paneerProcessingContent = {
    hi: {
        title: "Paneer Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Paneer</h3>
            <p>Paneer is a fresh, non-aged, non-melting cheese common in the Indian subcontinent. It is an unripened, acid-coagulated cheese made by curdling heated milk with a fruit- or vegetable-derived acid, such as lemon juice, or other food-grade acids. Its crumbly and moist form is called chhena. Paneer is a rich source of milk protein and is widely used in various Indian culinary preparations.</p>

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

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Raw Material & Quality Control (PRP):</strong>
                    <p>The quality of paneer is directly dependent on the quality of the incoming milk. This is a fundamental <strong>Prerequisite Program (PRP)</strong>. In the dairy industry, milk is first tested for critical parameters before being accepted for processing. Buffalo milk is preferred for its higher fat and SNF content, which yields a whiter, softer product.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr><th class="p-2 border">Parameter</th><th class="p-2 border">Ideal Range (Buffalo Milk)</th><th class="p-2 border">Importance</th></tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Fat Content</td><td class="p-2 border">5.8% - 6.0%</td><td class="p-2 border">Directly impacts the final yield and texture of the paneer.</td></tr>
                                <tr><td class="p-2 border">Acidity (% Lactic Acid)</td><td class="p-2 border">0.14 - 0.16%</td><td class="p-2 border">Fresh milk is required. High acidity leads to a hard, brittle texture and lower yield.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li><strong>Heating (CCP-1):</strong>
                    <p>The standardized milk is heated to <strong>85-90°C</strong> and held for 5-10 minutes. This is a <strong>Critical Control Point (CCP-1)</strong> for destroying pathogenic microorganisms. <strong>Scientific Reason:</strong> This high heat treatment is crucial for maximizing yield. It denatures the whey proteins (like β-lactoglobulin), causing them to unfold. These denatured proteins then co-precipitate with the casein during acid coagulation, becoming part of the curd and increasing the total solid recovery by about 5-6%.</p>
                </li>
                <li><strong>Coagulation (CCP-2 / oPRP):</strong>
                    <p>The milk is cooled to the optimal coagulation temperature of <strong>70-75°C</strong> (an <strong>oPRP</strong>). A coagulating agent (typically a 1-2% hot citric acid solution) is then added slowly with gentle stirring until clear whey separates. This is a <strong>Critical Control Point (CCP-2)</strong>. <strong>Scientific Reason:</strong> The acid lowers the milk's pH to the isoelectric point of casein (pH 4.6), at which the casein micelles lose their net negative charge and aggregate, forming a curd. The temperature is critical; too high a temperature (>80°C) results in a hard, dry paneer, while too low a temperature (<65°C) yields a very soft, fragile curd that shatters easily.</p>
                </li>
                <li><strong>Pressing (oPRP):</strong>
                    <p>The drained curd is transferred to hoops and pressed at <strong>2-3 kg/cm² for 15-20 minutes</strong>. This is an <strong>Operational Prerequisite Program (oPRP)</strong>. <strong>Scientific Reason:</strong> Pressing is essential for expelling excess whey and fusing the curd particles into a solid, cohesive block. The pressure and duration are controlled to achieve the desired moisture content (around 55-60%). Over-pressing results in a dry, rubbery texture, while under-pressing leads to a product with high moisture, which has a shorter shelf life and a weak, crumbly body.</p>
                </li>
                <li><strong>Chilling & Storage (CCP-3):</strong>
                    <p>The pressed paneer blocks are immersed in chilled water (4-6°C) for 2-3 hours. This rapid cooling firms up the texture and prevents it from becoming too soft. The final product is then packaged and stored under refrigeration (<5°C). Maintaining this cold chain is a <strong>Critical Control Point (CCP-3)</strong> to ensure safety and prevent microbial spoilage.</p>
                </li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Coagulants: Types and Usage</h3>
            <p>The choice of coagulant affects the texture, flavor, and yield of the paneer.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Citric Acid:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results. A 1-2% solution in hot water (70°C) is typically used.</li>
                <li><strong>Acetic Acid (Vinegar):</strong> A widely available and effective coagulant. Can sometimes impart a slight pungent or vinegar-like flavor, which is why citric acid is often preferred for a more neutral taste profile.</li>
                <li><strong>Sour Whey:</strong> A traditional and economical method, using whey from a previous batch that has developed natural acidity. Often results in a softer, more traditional-flavored paneer but can be less consistent.</li>
                <li><strong>Calcium Chloride (Coagulation Aid):</strong> Not a primary coagulant, but often added to milk (especially cow milk or pasteurized milk) before the acid. <strong>Scientific Reason:</strong> Pasteurization can slightly reduce the availability of soluble calcium. Adding calcium chloride replenishes the calcium ions needed to form strong bridges between casein micelles during coagulation, resulting in a firmer curd and slightly improved yield.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Factors Affecting Paneer Yield and Texture</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Type of Milk:</strong> Buffalo milk gives a higher yield (20-22%) than cow milk (15-17%) due to its higher total solids content (fat and protein).</li>
                <li><strong>Fat Content:</strong> Higher fat content leads to a higher yield and a softer, richer paneer. A minimum of 5.8% fat is ideal for a good texture.</li>
                <li><strong>SNF Content:</strong> Higher SNF, particularly casein, directly increases the yield as it forms the main structure of the paneer.</li>
                <li><strong>Coagulation Temperature:</strong> A higher temperature (around 80°C) leads to a harder paneer with lower moisture, while a lower temperature (around 65°C) yields a softer, more fragile paneer. The optimal range is 70-75°C.</li>
                <li><strong>Coagulation pH:</strong> The ideal final pH of the whey is around 5.4. A lower pH (more acid) results in a hard, sour paneer with lower yield, while a higher pH leads to incomplete coagulation and a very soft, weak curd.</li>
                <li><strong>Heat Treatment of Milk:</strong> Heating milk to 90°C before coagulation is crucial. It denatures the whey proteins, allowing them to be incorporated into the curd, which can increase the yield by 5-6% and results in a softer paneer.</li>
            </ul>
        `
    },
    en: {
        title: "Paneer Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Paneer</h3>
            <p>Paneer is a fresh, non-aged, non-melting cheese common in the Indian subcontinent. It is an unripened, acid-coagulated cheese made by curdling heated milk with a fruit- or vegetable-derived acid, such as lemon juice, or other food-grade acids. Its crumbly and moist form is called chhena. Paneer is a rich source of milk protein and is widely used in various Indian culinary preparations.</p>

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

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Raw Material & Quality Control (PRP):</strong>
                    <p>The quality of paneer is directly dependent on the quality of the incoming milk. This is a fundamental <strong>Prerequisite Program (PRP)</strong>. In the dairy industry, milk is first tested for critical parameters before being accepted for processing. Buffalo milk is preferred for its higher fat and SNF content, which yields a whiter, softer product.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr><th class="p-2 border">Parameter</th><th class="p-2 border">Ideal Range (Buffalo Milk)</th><th class="p-2 border">Importance</th></tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Fat Content</td><td class="p-2 border">5.8% - 6.0%</td><td class="p-2 border">Directly impacts the final yield and texture of the paneer.</td></tr>
                                <tr><td class="p-2 border">Acidity (% Lactic Acid)</td><td class="p-2 border">0.14 - 0.16%</td><td class="p-2 border">Fresh milk is required. High acidity leads to a hard, brittle texture and lower yield.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li><strong>Heating (CCP-1):</strong>
                    <p>The standardized milk is heated to <strong>85-90°C</strong> and held for 5-10 minutes. This is a <strong>Critical Control Point (CCP-1)</strong> for destroying pathogenic microorganisms. <strong>Scientific Reason:</strong> This high heat treatment is crucial for maximizing yield. It denatures the whey proteins (like β-lactoglobulin), causing them to unfold. These denatured proteins then co-precipitate with the casein during acid coagulation, becoming part of the curd and increasing the total solid recovery by about 5-6%.</p>
                </li>
                <li><strong>Coagulation (CCP-2 / oPRP):</strong>
                    <p>The milk is cooled to the optimal coagulation temperature of <strong>70-75°C</strong> (an <strong>oPRP</strong>). A coagulating agent (typically a 1-2% hot citric acid solution) is then added slowly with gentle stirring until clear whey separates. This is a <strong>Critical Control Point (CCP-2)</strong>. <strong>Scientific Reason:</strong> The acid lowers the milk's pH to the isoelectric point of casein (pH 4.6), at which the casein micelles lose their net negative charge and aggregate, forming a curd. The temperature is critical; too high a temperature (>80°C) results in a hard, dry paneer, while too low a temperature (<65°C) yields a very soft, fragile curd that shatters easily.</p>
                </li>
                <li><strong>Pressing (oPRP):</strong>
                    <p>The drained curd is transferred to hoops and pressed at <strong>2-3 kg/cm² for 15-20 minutes</strong>. This is an <strong>Operational Prerequisite Program (oPRP)</strong>. <strong>Scientific Reason:</strong> Pressing is essential for expelling excess whey and fusing the curd particles into a solid, cohesive block. The pressure and duration are controlled to achieve the desired moisture content (around 55-60%). Over-pressing results in a dry, rubbery texture, while under-pressing leads to a product with high moisture, which has a shorter shelf life and a weak, crumbly body.</p>
                </li>
                <li><strong>Chilling & Storage (CCP-3):</strong>
                    <p>The pressed paneer blocks are immersed in chilled water (4-6°C) for 2-3 hours. This rapid cooling firms up the texture and prevents it from becoming too soft. The final product is then packaged and stored under refrigeration (<5°C). Maintaining this cold chain is a <strong>Critical Control Point (CCP-3)</strong> to ensure safety and prevent microbial spoilage.</p>
                </li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Coagulants: Types and Usage</h3>
            <p>The choice of coagulant affects the texture, flavor, and yield of the paneer.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Citric Acid:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results. A 1-2% solution in hot water (70°C) is typically used.</li>
                <li><strong>Acetic Acid (Vinegar):</strong> A widely available and effective coagulant. Can sometimes impart a slight pungent or vinegar-like flavor, which is why citric acid is often preferred for a more neutral taste profile.</li>
                <li><strong>Sour Whey:</strong> A traditional and economical method, using whey from a previous batch that has developed natural acidity. Often results in a softer, more traditional-flavored paneer but can be less consistent.</li>
                <li><strong>Calcium Chloride (Coagulation Aid):</strong> Not a primary coagulant, but often added to milk (especially cow milk or pasteurized milk) before the acid. <strong>Scientific Reason:</strong> Pasteurization can slightly reduce the availability of soluble calcium. Adding calcium chloride replenishes the calcium ions needed to form strong bridges between casein micelles during coagulation, resulting in a firmer curd and slightly improved yield.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Factors Affecting Paneer Yield and Texture</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Type of Milk:</strong> Buffalo milk gives a higher yield (20-22%) than cow milk (15-17%) due to its higher total solids content (fat and protein).</li>
                <li><strong>Fat Content:</strong> Higher fat content leads to a higher yield and a softer, richer paneer. A minimum of 5.8% fat is ideal for a good texture.</li>
                <li><strong>SNF Content:</strong> Higher SNF, particularly casein, directly increases the yield as it forms the main structure of the paneer.</li>
                <li><strong>Coagulation Temperature:</strong> A higher temperature (around 80°C) leads to a harder paneer with lower moisture, while a lower temperature (around 65°C) yields a softer, more fragile paneer. The optimal range is 70-75°C.</li>
                <li><strong>Coagulation pH:</strong> The ideal final pH of the whey is around 5.4. A lower pH (more acid) results in a hard, sour paneer with lower yield, while a higher pH leads to incomplete coagulation and a very soft, weak curd.</li>
                <li><strong>Heat Treatment of Milk:</strong> Heating milk to 90°C before coagulation is crucial. It denatures the whey proteins, allowing them to be incorporated into the curd, which can increase the yield by 5-6% and results in a softer paneer.</li>
            </ul>
        `
    }
}
