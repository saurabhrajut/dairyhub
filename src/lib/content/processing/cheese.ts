
export const cheeseContent = {
    en: {
        title: "Cheese Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Cheese</h3>
            <p>Cheese is a concentrated dairy product derived from milk by coagulation of the casein protein. The coagulation is typically achieved by the addition of rennet or a bacterial starter culture that produces acid. After coagulation, the solid curd is separated from the liquid whey. The diversity of cheese is immense, with over 1,800 different types, each with its own unique flavor, texture, and appearance resulting from variations in milk source, coagulation method, ripening time, and processing conditions.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">General FSSAI Standards for Cheese</h3>
            <p>FSSAI defines standards for various types of cheese. Below are examples for some common categories.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product</th>
                            <th class="p-2 border">Moisture, Max, % (m/m)</th>
                            <th class="p-2 border">Milk fat, Min, % (on dry basis)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Hard-Pressed Cheese</strong></td>
                            <td class="p-2 border">39.0</td>
                            <td class="p-2 border">48.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cheddar Cheese</strong></td>
                            <td class="p-2 border">39.0</td>
                            <td class="p-2 border">48.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Mozzarella Cheese</strong></td>
                            <td class="p-2 border">60.0</td>
                            <td class="p-2 border">35.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Processed Cheese</strong></td>
                            <td class="p-2 border">47.0</td>
                            <td class="p-2 border">40.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        subTopics: {
            cheddar: {
                title: "A. Cheddar Cheese Processing",
                content: `
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Cheddar Cheese</h2>
                    <p>Cheddar cheese is a hard, natural cheese that originated in the English village of Cheddar. It is one of the most popular cheeses worldwide, known for its sharp flavor that intensifies with age.</p>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Cheddar Cheese</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization & Pasteurization (CCP-1)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Ripening Temperature (30-32°C) (oPRP)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Inoculation with Starter Culture & Ripening</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Rennet Addition & Coagulation (CCP-2)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting the Curd</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooking/Scalding the Curd (oPRP)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Draining of Whey</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Cheddaring (pH development)</strong> (CCP-3)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Milling, Salting & Hooping</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Pressing</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Curing/Ripening (Storage) (CCP-4)</div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Milk Standardization & Pasteurization (CCP-1):</strong> Milk is standardized to a specific protein-to-fat ratio (around 0.9-1.0 for Cheddar) to ensure consistent cheese composition. It is then pasteurized (e.g., 72°C for 15s). This is a <strong>CCP-1</strong> to ensure safety.</li>
                        <li><strong>Ripening & Coagulation (oPRP, CCP-2):</strong> The milk is cooled to 30-32°C and inoculated with a lactic acid starter culture. The milk is held for a short period (ripening) to allow acid development. Then, rennet (an enzyme) is added. This is a <strong>CCP-2</strong> as rennet coagulates the casein protein, forming a firm gel. The pH, temperature, and calcium ion concentration are critical <strong>oPRPs</strong> affecting this step.</li>
                        <li><strong>Cutting and Cooking:</strong> The firm coagulum is cut into small cubes to facilitate the expulsion of whey. The curd and whey are then cooked (scalded) slowly, raising the temperature. This helps to expel more whey, develop the curd's texture, and control the growth of the starter culture.</li>
                        <li><strong>Cheddaring (CCP-3):</strong> This is the unique step for Cheddar cheese. After whey is drained, the curd is allowed to mat together. The matted curd is cut into blocks, which are piled and turned periodically. During this process, which is a <strong>CCP-3</strong>, lactic acid develops, and the curd's texture changes from open and crumbly to close-knit and fibrous.</li>
                        <li><strong>Milling, Salting, and Pressing:</strong> The cheddared curd is milled into small chips. Salt is added for flavor, preservation, and further moisture removal. The salted curd is then placed in hoops and pressed for several hours to form a solid block of cheese.</li>
                        <li><strong>Curing/Ripening (CCP-4):</strong> The cheese is stored in a controlled environment (specific temperature and humidity) for a period ranging from a few months to several years. This is a <strong>CCP-4</strong>. During this time, enzymes from the milk, rennet, and starter culture break down the fats and proteins into smaller compounds, developing the characteristic flavor and sharp aroma of the mature cheese.</li>
                    </ol>
                `
            },
            mozzarella: {
                title: "B. Mozzarella Cheese Processing",
                content: `
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Mozzarella Cheese</h2>
                    <p>Mozzarella is a semi-soft cheese traditionally from southern Italy made from Italian buffalo's milk. It is prized for its unique stretching and melting properties, making it a key ingredient for pizza. The key to its character is the 'pasta filata' or 'spun paste' process.</p>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Mozzarella Cheese</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization & Pasteurization (CCP-1)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Ripening Temperature (32-37°C) (oPRP)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Inoculation with Thermophilic Starter Culture</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Rennet Addition & Coagulation (CCP-2)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting the Curd</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Healing & Draining Whey</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Allowing Acid Development (to pH 5.2-5.4)</strong> (CCP-3)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Stretching (Pasta Filata) in Hot Water (80-95°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Moulding and Hardening in Cold Brine</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging & Cold Storage</div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Milk and Culture Selection:</strong> The process starts with high-quality pasteurized milk. For mozzarella, thermophilic starter cultures (like <i>Streptococcus thermophilus</i> and <i>Lactobacillus</i> species) are used, which thrive at higher temperatures.</li>
                        <li><strong>Coagulation and Cutting:</strong> Rennet is added to form a curd, which is then cut into cubes, similar to cheddar processing. The curd is allowed to heal, and the whey is drained.</li>
                        <li><strong>Acid Development (CCP-3):</strong> This is a crucial step. The drained curd is held to allow the starter culture to continue producing lactic acid. The process is monitored until the curd reaches a specific pH of <strong>5.2-5.4</strong>. This is a <strong>Critical Control Point (CCP-3)</strong>. At this specific pH, the casein protein structure becomes highly responsive to heat and stretching.</li>
                        <li><strong>Pasta Filata - Stretching (CCP-4):</strong> This is the defining step for mozzarella and a <strong>Critical Control Point (CCP-4)</strong>. The acidified curd is immersed in hot water or brine (80-95°C). The heat causes the casein proteins to soften and align. The mass is then kneaded and stretched, either manually or mechanically. This stretching process aligns the casein fibers into a parallel orientation, which gives mozzarella its characteristic fibrous structure and excellent stretching properties when melted.</li>
                        <li><strong>Moulding and Cooling:</strong> The hot, plastic curd is moulded into balls or blocks and then immediately plunged into cold brine. The brine cools the cheese rapidly, stopping the stretching process and firming up its shape, while also adding salt for flavor.</li>
                        <li><strong>Packaging:</strong> The cooled mozzarella is packaged, often in water or a light brine, to maintain its moisture and shape. It is then stored under refrigeration.</li>
                    </ol>
                `
            }
        }
    },
    hi: {
        title: "चीज़ प्रसंस्करण",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">चीज़ का परिचय</h3>
            <p>चीज़ एक केंद्रित डेयरी उत्पाद है जिसे दूध से कैसिइन प्रोटीन के जमाव द्वारा प्राप्त किया जाता है। जमावट आमतौर पर रेनेट या एक जीवाणु स्टार्टर कल्चर के अतिरिक्त द्वारा प्राप्त किया जाता है जो एसिड का उत्पादन करता है। जमावट के बाद, ठोस दही को तरल मट्ठा से अलग किया जाता है। चीज़ की विविधता बहुत बड़ी है, जिसमें 1,800 से अधिक विभिन्न प्रकार हैं, प्रत्येक का अपना अनूठा स्वाद, बनावट और उपस्थिति है जो दूध के स्रोत, जमावट विधि, पकने के समय और प्रसंस्करण की स्थितियों में भिन्नता के परिणामस्वरूप होता है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार चीज़ के सामान्य मानक</h3>
            <p>FSSAI विभिन्न प्रकार के चीज़ के लिए मानक परिभाषित करता है। नीचे कुछ सामान्य श्रेणियों के उदाहरण दिए गए हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">उत्पाद</th>
                            <th class="p-2 border">नमी, अधिकतम, % (m/m)</th>
                            <th class="p-2 border">दूध वसा, न्यूनतम, % (सूखे आधार पर)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>हार्ड-प्रेस्ड चीज़</strong></td>
                            <td class="p-2 border">39.0</td>
                            <td class="p-2 border">48.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>चेडर चीज़</strong></td>
                            <td class="p-2 border">39.0</td>
                            <td class="p-2 border">48.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>मोज़ेरेला चीज़</strong></td>
                            <td class="p-2 border">60.0</td>
                            <td class="p-2 border">35.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>संसाधित चीज़</strong></td>
                            <td class="p-2 border">47.0</td>
                            <td class="p-2 border">40.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        subTopics: {
            cheddar: {
                title: "A. चेडर चीज़ की प्रसंस्करण",
                content: `
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">चेडर चीज़ की प्रसंस्करण</h2>
                    <p>चेडर चीज़ एक कठोर, प्राकृतिक चीज़ है जो इंग्लैंड के चेडर गांव में उत्पन्न हुआ था। यह दुनिया भर में सबसे लोकप्रिय चीज़ों में से एक है, जो अपने तीखे स्वाद के लिए जाना जाता है जो उम्र के साथ बढ़ता है।</p>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">चेडर चीज़ के लिए प्रसंस्करण प्रवाह संचित्र</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध मानकीकरण और पाश्चुरीकरण (CCP-1)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">पकने के तापमान तक ठंडा करना (30-32°C) (oPRP)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">स्टार्टर कल्चर के साथ इनोकुलेशन और पकना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">रेनेट मिलाना और जमावट (CCP-2)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">दही को काटना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">दही को पकाना/स्काल्डिंग (oPRP)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">मट्ठा निकालना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>चेडरिंग (pH विकास)</strong> (CCP-3)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">मिलिंग, नमक मिलाना और हूपिंग</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">दबाना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">क्योरिंग/पकना (भंडारण) (CCP-4)</div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>दूध मानकीकरण और पाश्चुरीकरण (CCP-1):</strong> दूध को एक विशिष्ट प्रोटीन-से-वसा अनुपात (चेडर के लिए लगभग 0.9-1.0) में मानकीकृत किया जाता है ताकि लगातार चीज़ संरचना सुनिश्चित हो सके। फिर इसे पाश्चुरीकृत किया जाता है (जैसे, 72°C 15 सेकंड के लिए)। यह सुरक्षा सुनिश्चित करने के लिए एक <strong>CCP-1</strong> है।</li>
                        <li><strong>पकना और जमावट (oPRP, CCP-2):</strong> दूध को 30-32°C तक ठंडा किया जाता है और एक लैक्टिक एसिड स्टार्टर कल्चर के साथ टीका लगाया जाता है। दूध को एसिड विकास की अनुमति देने के लिए थोड़ी देर (पकने) के लिए रखा जाता है। फिर, रेनेट (एक एंजाइम) मिलाया जाता है। यह एक <strong>CCP-2</strong> है क्योंकि रेनेट कैसिइन प्रोटीन को जमा देता है, एक दृढ़ जेल बनाता है। पीएच, तापमान और कैल्शियम आयन सांद्रता इस चरण को प्रभावित करने वाले महत्वपूर्ण <strong>oPRPs</strong> हैं।</li>
                        <li><strong>काटना और पकाना:</strong> दृढ़ जमाव को छोटे क्यूब्स में काटा जाता है ताकि मट्ठा का निष्कासन हो सके। दही और मट्ठे को फिर धीरे-धीरे पकाया (स्काल्ड) जाता है, जिससे तापमान बढ़ता है। यह अधिक मट्ठा निकालने, दही की बनावट विकसित करने और स्टार्टर कल्चर के विकास को नियंत्रित करने में मदद करता है।</li>
                        <li><strong>चेडरिंग (CCP-3):</strong> यह चेडर चीज़ के लिए अनूठा कदम है। मट्ठा निकालने के बाद, दही को एक साथ चटाई बनाने दिया जाता है। चटा हुआ दही ब्लॉकों में काटा जाता है, जिन्हें समय-समय पर ढेर और पलटा जाता है। इस प्रक्रिया के दौरान, जो एक <strong>CCP-3</strong> है, लैक्टिक एसिड विकसित होता है, और दही की बनावट खुले और भुरभुरे से करीबी-बुना और रेशेदार में बदल जाती है।</li>
                        <li><strong>मिलिंग, नमक मिलाना और दबाना:</strong> चेडर किए हुए दही को छोटे चिप्स में मिलाया जाता है। स्वाद, संरक्षण और आगे नमी हटाने के लिए नमक मिलाया जाता है। नमकीन दही को फिर हूप्स में रखा जाता है और कई घंटों के लिए दबाया जाता है ताकि चीज़ का एक ठोस ब्लॉक बन सके।</li>
                        <li><strong>क्योरिंग/पकना (CCP-4):</strong> चीज़ को एक नियंत्रित वातावरण (विशिष्ट तापमान और आर्द्रता) में कुछ महीनों से लेकर कई वर्षों तक की अवधि के लिए संग्रहीत किया जाता है। यह एक <strong>CCP-4</strong> है। इस दौरान, दूध, रेनेट और स्टार्टर कल्चर के एंजाइम वसा और प्रोटीन को छोटे यौगिकों में तोड़ते हैं, जिससे परिपक्व चीज़ का विशिष्ट स्वाद और तीखी सुगंध विकसित होती है।</li>
                    </ol>
                `
            },
            mozzarella: {
                title: "B. मोज़ेरेला चीज़ की प्रसंस्करण",
                content: `
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">मोज़ेरेला चीज़ की प्रसंस्करण</h2>
                    <p>मोज़ेरेला एक अर्ध-नरम चीज़ है जो पारंपरिक रूप से दक्षिणी इटली में इतालवी भैंस के दूध से बनाया जाता है। यह अपने अद्वितीय खिंचाव और पिघलने के गुणों के लिए बेशकीमती है, जो इसे पिज्जा के लिए एक प्रमुख घटक बनाता है। इसके चरित्र की कुंजी 'पास्ता फिलाटा' या 'काता हुआ पेस्ट' प्रक्रिया है।</p>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">मोज़ेरेला चीज़ के लिए प्रसंस्करण प्रवाह संचित्र</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध मानकीकरण और पाश्चुरीकरण (CCP-1)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">पकने के तापमान तक ठंडा करना (32-37°C) (oPRP)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">थर्मोफिलिक स्टार्टर कल्चर के साथ इनोकुलेशन</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">रेनेट मिलाना और जमावट (CCP-2)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">दही को काटना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">हीलिंग और मट्ठा निकालना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>एसिड विकास की अनुमति देना (pH 5.2-5.4 तक)</strong> (CCP-3)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>गर्म पानी में खींचना (पास्ता फिलाटा) (80-95°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">ठंडे नमकीन पानी में ढालना और सख्त करना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">पैकेजिंग और कोल्ड स्टोरेज</div>
                    </div>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>दूध और कल्चर का चयन:</strong> यह प्रक्रिया उच्च गुणवत्ता वाले पाश्चुरीकृत दूध से शुरू होती है। मोज़ेरेला के लिए, थर्मोफिलिक स्टार्टर कल्चर (जैसे <i>Streptococcus thermophilus</i> और <i>Lactobacillus</i> प्रजातियां) का उपयोग किया जाता है, जो उच्च तापमान पर पनपते हैं।</li>
                        <li><strong>जमावट और काटना:</strong> रेनेट को दही बनाने के लिए मिलाया जाता है, जिसे फिर क्यूब्स में काटा जाता है, जैसा कि चेडर प्रसंस्करण में होता है। दही को ठीक होने दिया जाता है, और मट्ठा निकाल दिया जाता है।</li>
                        <li><strong>एसिड विकास (CCP-3):</strong> यह एक महत्वपूर्ण कदम है। निकाले गए दही को स्टार्टर कल्चर को लैक्टिक एसिड का उत्पादन जारी रखने की अनुमति देने के लिए रखा जाता है। प्रक्रिया की निगरानी तब तक की जाती है जब तक कि दही <strong>5.2-5.4</strong> के एक विशिष्ट पीएच तक नहीं पहुंच जाता। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-3)</strong> है। इस विशिष्ट पीएच पर, कैसिइन प्रोटीन संरचना गर्मी और खिंचाव के प्रति अत्यधिक उत्तरदायी हो जाती है।</li>
                        <li><strong>पास्ता फिलाटा - खींचना (CCP-4):</strong> यह मोज़ेरेला के लिए परिभाषित कदम है और एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-4)</strong> है। अम्लीकृत दही को गर्म पानी या नमकीन पानी (80-95°C) में डुबोया जाता है। गर्मी कैसिइन प्रोटीन को नरम और संरेखित करने का कारण बनती है। फिर द्रव्यमान को या तो मैन्युअल रूप से या यंत्रवत् रूप से गूंथा और खींचा जाता है। यह खींचने की प्रक्रिया कैसिइन फाइबर को एक समानांतर अभिविन्यास में संरेखित करती है, जो पिघलने पर मोज़ेरेला को इसकी विशिष्ट रेशेदार संरचना और उत्कृष्ट खींचने वाले गुण देती है।</li>
                        <li><strong>ढालना और ठंडा करना:</strong> गर्म, प्लास्टिक दही को गेंदों या ब्लॉकों में ढाला जाता है और फिर तुरंत ठंडे नमकीन पानी में डाल दिया जाता है। नमकीन पानी चीज़ को तेजी से ठंडा करता है, खींचने की प्रक्रिया को रोकता है और इसके आकार को मजबूत करता है, साथ ही स्वाद के लिए नमक भी मिलाता है।</li>
                        <li><strong>पैकेजिंग:</strong> ठंडे मोज़ेरेला को पैक किया जाता है, अक्सर पानी या हल्के नमकीन पानी में, इसकी नमी और आकार बनाए रखने के लिए। फिर इसे प्रशीतन के तहत संग्रहीत किया जाता है।</li>
                    </ol>
                `
            }
        }
    },
}

    

