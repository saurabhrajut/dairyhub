
export const khoaContent = {
    en: {
        title: "Khoa Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Khoa</h3>
            <p>Khoa, also known as Mawa, is a partially dehydrated whole milk product that serves as a crucial base ingredient for a vast array of Indian sweets (mithai), including Gulab Jamun, Burfi, and Peda. It is prepared by continuously heating and evaporating milk in a shallow, open pan (karahi) with constant stirring and scraping until it reaches a semi-solid, dough-like consistency. The high heat and intense desiccation process result in a rich, cooked, and slightly nutty flavor profile.</p>
            <p>Traditionally, buffalo milk is preferred for Khoa making due to its higher total solids content, which yields a whiter, softer, and more desirable product.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Khoa</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has defined standards for Khoa to ensure its quality and safety.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, % m/m)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">Ensures sufficient concentration of milk solids.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min, % m/m, on dry basis)</strong></td>
                            <td class="p-2 border">30.0</td>
                            <td class="p-2 border">Guarantees richness and is a key quality indicator.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Ash (max, % m/m)</strong></td>
                            <td class="p-2 border">6.0</td>
                            <td class="p-2 border">Indicates mineral content.</td>
                        </tr>
                         <tr>
                            <td class="p-2 border"><strong>Titrable Acidity (as % lactic acid, max)</strong></td>
                            <td class="p-2 border">0.9</td>
                            <td class="p-2 border">Reflects the freshness of the milk used.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Khoa with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Khoa Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception (Fresh, High-Solids Milk) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Continuous Heating & Desiccation in Karahi (~90-95°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Vigorous Stirring & Scraping <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Formation of Pasty Mass</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Endpoint Determination (Pat Formation)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Removal from Heat & Cooling</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging & Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Selection (PRP):</strong>
                    <p>The process starts with fresh, high-quality milk, preferably buffalo milk, due to its higher fat and SNF content. This results in a higher yield and a desirable white color and soft texture in the final khoa. The milk must have low acidity to prevent premature coagulation during heating. This selection is a fundamental <strong>Prerequisite Program (PRP)</strong>.</p>
                </li>
                <li><strong>Heating and Desiccation (CCP-1):</strong>
                    <p>This is the core of khoa making. Milk is heated in a large, open, shallow iron pan (karahi) over a vigorous fire. The milk is boiled continuously with constant stirring and scraping of the sides and bottom of the pan. This serves two purposes: 1) It facilitates rapid evaporation of water, concentrating the milk solids. 2) The continuous scraping prevents the milk solids from scorching and sticking to the pan, which would impart a burnt flavor. This heating stage is a <strong>Critical Control Point (CCP-1)</strong> as the high temperature is necessary to destroy vegetative pathogenic bacteria.</p>
                </li>
                <li><strong>Texture Development & Endpoint Determination (oPRP/CCP-2):</strong>
                    <p>As water evaporates, the milk thickens progressively. The process goes through distinct stages:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Slurry Stage:</strong> Initially, the milk is a thin liquid.</li>
                        <li><strong>Pasty Stage:</strong> As moisture reduces, the milk becomes a viscous, pasty mass. At this point, the rate of stirring and scraping is increased to prevent burning. The proteins (casein and denatured whey proteins) and fat start to aggregate.</li>
                        <li><strong>Pat Formation Stage:</strong> Eventually, the mass loses its stickiness and can be gathered together into a solid ball or 'pat'. This is the desired endpoint for most types of khoa. Judging this endpoint correctly is crucial and acts as an <strong>Operational Prerequisite Program (oPRP)</strong> for quality. Ensuring the final product has low enough water activity to be shelf-stable makes this step a <strong>Critical Control Point (CCP-2)</strong> for safety.</li>
                    </ul>
                    <p>The final texture depends on the type of khoa being made. For 'Danedar' (granular) khoa, a small amount of coagulant like citric acid is added during boiling to create a granular texture. For 'Pindi' (smooth) khoa, continuous scraping ensures a smooth, homogenous mass. For 'Dhap' (used for Gulab Jamun), the process is stopped slightly earlier to retain more moisture.</p>
                </li>
                <li><strong>Cooling, Packaging, and Storage:</strong>
                    <p>Once the desired consistency is reached, the khoa is removed from the heat and allowed to cool. It is then molded into desired shapes and packaged. Proper packaging is essential to prevent moisture absorption and microbial contamination during storage.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "खोआ प्रसंस्करण",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">खोआ का परिचय</h3>
            <p>खोआ, जिसे मावा भी कहा जाता है, एक आंशिक रूप से निर्जलित पूर्ण दूध उत्पाद है जो गुलाब जामुन, बर्फी, और पेड़ा सहित कई भारतीय मिठाइयों के लिए एक महत्वपूर्ण आधार सामग्री के रूप में कार्य करता है। इसे एक उथली, खुली कढ़ाई में दूध को लगातार गर्म करके और वाष्पित करके तैयार किया जाता है, जिसमें लगातार हिलाना और खुरचना शामिल है, जब तक कि यह एक अर्ध-ठोस, आटे जैसी स्थिरता तक नहीं पहुंच जाता। उच्च गर्मी और गहन निर्जलीकरण प्रक्रिया के परिणामस्वरूप एक समृद्ध, पका हुआ, और थोड़ा पौष्टिक स्वाद प्रोफ़ाइल होता है।</p>
            <p>परंपरागत रूप से, खोआ बनाने के लिए भैंस के दूध को प्राथमिकता दी जाती है क्योंकि इसमें कुल ठोस पदार्थों की मात्रा अधिक होती है, जिससे एक सफेद, नरम और अधिक वांछनीय उत्पाद प्राप्त होता है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार खोआ के मानक</h3>
            <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) ने बाजार में बेचे जाने वाले खोआ की गुणवत्ता और सुरक्षा सुनिश्चित करने के लिए मानक परिभाषित किए हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">आवश्यकता</th>
                            <th class="p-2 border">महत्व</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>कुल ठोस (न्यूनतम, % मी/मी)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">दूध के ठोस पदार्थों का पर्याप्त सांद्रण सुनिश्चित करता है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>दूध वसा (न्यूनतम, % मी/मी, सूखे आधार पर)</strong></td>
                            <td class="p-2 border">30.0</td>
                            <td class="p-2 border">समृद्धि की गारंटी देता है और एक प्रमुख गुणवत्ता संकेतक है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>कुल राख (अधिकतम, % मी/मी)</strong></td>
                            <td class="p-2 border">6.0</td>
                            <td class="p-2 border">खनिज सामग्री को इंगित करता है।</td>
                        </tr>
                         <tr>
                            <td class="p-2 border"><strong>अनुमापनीय अम्लता (% लैक्टिक एसिड के रूप में, अधिकतम)</strong></td>
                            <td class="p-2 border">0.9</td>
                            <td class="p-2 border">उपयोग किए गए दूध की ताजगी को दर्शाता है।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ खोआ की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">खोआ उत्पादन के लिए प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध की प्राप्ति (ताजा, उच्च-ठोस दूध) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>कढ़ाई में निरंतर हीटिंग और निर्जलीकरण (~90-95°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">जोरदार हिलाना और खुरचना <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">पेस्टी द्रव्यमान का निर्माण</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>अंतिम बिंदु निर्धारण (पैट निर्माण)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">गर्मी से हटाना और ठंडा करना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग और भंडारण</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>दूध का चयन (PRP):</strong>
                    <p>यह प्रक्रिया ताजे, उच्च गुणवत्ता वाले दूध से शुरू होती है, अधिमानतः भैंस का दूध, क्योंकि इसमें अधिक वसा और SNF होता है। इससे अंतिम खोआ में अधिक उपज और एक वांछनीय सफेद रंग और नरम बनावट प्राप्त होती है। हीटिंग के दौरान समय से पहले जमावट को रोकने के लिए दूध में कम अम्लता होनी चाहिए। यह चयन एक मौलिक <strong>आवश्यक कार्यक्रम (PRP)</strong> है।</p>
                </li>
                <li><strong>हीटिंग और निर्जलीकरण (CCP-1):</strong>
                    <p>यह खोआ बनाने की प्रक्रिया का मूल है। दूध को एक बड़ी, खुली, उथली लोहे की कढ़ाई में तेज आग पर गर्म किया जाता है। दूध को लगातार उबाला जाता है जबकि पैन के किनारों और नीचे को लगातार हिलाया और खुरचा जाता है। इसके दो उद्देश्य हैं: 1) यह पानी के तेजी से वाष्पीकरण की सुविधा प्रदान करता है, जिससे दूध के ठोस पदार्थ केंद्रित होते हैं। 2) लगातार खुरचने से दूध के ठोस पदार्थ जलने और पैन से चिपकने से बचते हैं, जिससे जला हुआ स्वाद आ सकता है। यह हीटिंग चरण एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है क्योंकि उच्च तापमान वानस्पतिक रोगजनक जीवाणुओं को नष्ट करने के लिए आवश्यक है।</p>
                </li>
                <li><strong>बनावट का विकास और अंतिम बिंदु निर्धारण (oPRP/CCP-2):</strong>
                    <p>जैसे ही पानी वाष्पित होता है, दूध धीरे-धीरे गाढ़ा होता जाता है। यह प्रक्रिया विभिन्न चरणों से गुजरती है:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>घोल चरण:</strong> प्रारंभ में, दूध एक पतला तरल होता है।</li>
                        <li><strong>पेस्टी चरण:</strong> जैसे ही नमी कम होती है, दूध एक चिपचिपा, पेस्टी द्रव्यमान बन जाता है। इस बिंदु पर, जलने से बचाने के लिए हिलाने और खुरचने की दर बढ़ जाती है। प्रोटीन (कैसिइन और विकृत मट्ठा प्रोटीन) और वसा एकत्रित होने लगते हैं।</li>
                        <li><strong>पैट निर्माण चरण:</strong> अंततः, द्रव्यमान अपनी चिपचिपाहट खो देता है और इसे एक ठोस गेंद या 'पैट' में इकट्ठा किया जा सकता है। यह अधिकांश प्रकार के खोआ के लिए वांछित अंतिम बिंदु है। इस अंतिम बिंदु का सही ढंग से निर्णय करना महत्वपूर्ण है और गुणवत्ता के लिए एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> के रूप में कार्य करता है। यह सुनिश्चित करना कि अंतिम उत्पाद में शेल्फ-स्थिर होने के लिए पर्याप्त कम पानी की गतिविधि है, इस चरण को सुरक्षा के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> बनाता है।</li>
                    </ul>
                    <p>अंतिम बनावट बनाए जा रहे खोआ के प्रकार पर निर्भर करती है। 'दानेदार' खोआ के लिए, दानेदार बनावट बनाने के लिए उबालने के दौरान थोड़ी मात्रा में साइट्रिक एसिड जैसा कोएगुलेंट मिलाया जाता है। 'पिंडी' (चिकना) खोआ के लिए, लगातार खुरचना एक चिकना, समरूप द्रव्यमान सुनिश्चित करता है। 'धाप' (गुलाब जामुन के लिए उपयोग किया जाता है) के लिए, अधिक नमी बनाए रखने के लिए प्रक्रिया को थोड़ा पहले रोक दिया जाता है।</p>
                </li>
                <li><strong>ठंडा करना, पैकेजिंग और भंडारण:</strong>
                    <p>एक बार जब वांछित स्थिरता प्राप्त हो जाती है, तो खोआ को गर्मी से हटा दिया जाता है और ठंडा होने दिया जाता है। फिर इसे वांछित आकार में ढाला जाता है और पैक किया जाता है। भंडारण के दौरान नमी अवशोषण और माइक्रोबियल संदूषण को रोकने के लिए उचित पैकेजिंग आवश्यक है।</p>
                </li>
            </ol>
        `
    }
}

    