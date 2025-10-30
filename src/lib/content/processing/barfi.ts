
export const barfiContent = {
    en: {
        title: "Barfi Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Barfi</h3>
            <p>Barfi is a popular Indian sweet, a type of milk fudge. It is made by thickening milk with sugar and other ingredients until it solidifies. The primary ingredient is typically Khoa (dried milk solids), which is cooked with sugar. Its name is derived from the Persian word 'barf', which means snow, alluding to its white, opaque appearance.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Barfi</h3>
            <p>Barfi falls under the category of 'Khoa based sweets' in the FSSAI regulations. The standards ensure its quality and composition.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Total Solids (min, %)</strong></td><td class="p-2 border">75.0</td></tr>
                        <tr><td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td><td class="p-2 border">17.5</td></tr>
                        <tr><td class="p-2 border"><strong>Sucrose (on dry basis, max, %)</strong></td><td class="p-2 border">35.0</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Barfi with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Barfi Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Khoa Preparation (see Khoa processing) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Kneading of Khoa</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Sugar Addition & Mixing <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Cooking the Mixture (Desiccation)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling and Setting in Trays <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting into Pieces</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging & Storage <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Khoa Preparation (PRP):</strong> High-quality, fresh Khoa is the primary raw material. Its quality (moisture content, fat content, and texture) directly impacts the final barfi. This is a <strong>Prerequisite Program (PRP)</strong>.</li>
                <li><strong>Kneading & Mixing (oPRP):</strong> The khoa is kneaded to create a smooth, lump-free mass. Powdered sugar is then added and mixed thoroughly. This is an <strong>Operational Prerequisite Program (oPRP)</strong> as uniform mixing is essential for a consistent final product. The ratio of khoa to sugar is typically around 3:1 to 4:1 by weight.</li>
                <li><strong>Cooking (CCP-1):</strong> The mixture is cooked in a pan with continuous stirring over low to medium heat. This is a <strong>Critical Control Point (CCP-1)</strong>. The goal is to evaporate excess moisture and cook the mixture until it thickens and starts to leave the sides of the pan. This develops the characteristic cooked flavor and grainy texture. Overcooking can make the barfi hard and dry, while undercooking can result in a soft, sticky product that doesn't set properly.</li>
                <li><strong>Cooling and Setting (oPRP):</strong> The cooked mass is poured onto a greased tray or surface and spread evenly to a desired thickness. It is then allowed to cool and set at room temperature. This is an <strong>oPRP</strong> as controlled cooling is necessary for the proper crystallization of sugar, which gives barfi its characteristic texture.</li>
                <li><strong>Cutting and Packaging:</strong> Once set, the barfi slab is cut into desired shapes (usually squares or diamonds). It is then packaged in boxes, often with a butter paper lining, to protect it and maintain its freshness.</li>
            </ol>
        `
    },
    hi: {
        title: "Barfi Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Barfi</h3>
            <p>बर्फी एक लोकप्रिय भारतीय मिठाई है, जो दूध के फज का एक प्रकार है। इसे दूध को चीनी और अन्य सामग्री के साथ गाढ़ा करके तब तक पकाया जाता है जब तक कि यह जम न जाए। प्राथमिक घटक आमतौर पर खोया (सूखे दूध के ठोस पदार्थ) होता है, जिसे चीनी के साथ पकाया जाता है। इसका नाम फारसी शब्द 'बर्फ' से लिया गया है, जिसका अर्थ है बर्फ, जो इसके सफेद, अपारदर्शी स्वरूप की ओर इशारा करता है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Barfi</h3>
            <p>बर्फी FSSAI के नियमों में 'खोया आधारित मिठाई' की श्रेणी में आती है। मानक इसकी गुणवत्ता और संरचना सुनिश्चित करते हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">आवश्यकता</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>कुल ठोस (न्यूनतम, %)</strong></td><td class="p-2 border">75.0</td></tr>
                        <tr><td class="p-2 border"><strong>दूध वसा (सूखे आधार पर, न्यूनतम, %)</strong></td><td class="p-2 border">17.5</td></tr>
                        <tr><td class="p-2 border"><strong>सुक्रोज (सूखे आधार पर, अधिकतम, %)</strong></td><td class="p-2 border">35.0</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ बर्फी की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">बर्फी उत्पादन के लिए प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">खोया तैयार करना (खोया प्रसंस्करण देखें) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">खोया को गूंथना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">चीनी मिलाना और मिश्रण <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>मिश्रण को पकाना (निर्जलीकरण)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">ट्रे में ठंडा करना और सेट करना <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">टुकड़ों में काटना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग और भंडारण <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>खोया तैयार करना (PRP):</strong> उच्च गुणवत्ता वाला, ताजा खोया प्राथमिक कच्चा माल है। इसकी गुणवत्ता (नमी की मात्रा, वसा की मात्रा, और बनावट) सीधे अंतिम बर्फी को प्रभावित करती है। यह एक <strong>आवश्यक कार्यक्रम (PRP)</strong> है।</li>
                <li><strong>गूंथना और मिश्रण (oPRP):</strong> खोया को एक चिकनी, गांठ रहित द्रव्यमान बनाने के लिए गूंथा जाता है। फिर पीसी हुई चीनी डाली जाती है और अच्छी तरह मिलाई जाती है। यह एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है क्योंकि एक समान मिश्रण एक सुसंगत अंतिम उत्पाद के लिए आवश्यक है। खोया से चीनी का अनुपात आमतौर पर वजन के हिसाब से लगभग 3:1 से 4:1 होता है।</li>
                <li><strong>पकाना (CCP-1):</strong> मिश्रण को एक पैन में धीमी से मध्यम आंच पर लगातार हिलाते हुए पकाया जाता है। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है। इसका उद्देश्य अतिरिक्त नमी को वाष्पित करना और मिश्रण को तब तक पकाना है जब तक कि यह गाढ़ा न हो जाए और पैन के किनारों को छोड़ने न लगे। यह विशिष्ट पके हुए स्वाद और दानेदार बनावट को विकसित करता है। अधिक पकाने से बर्फी कठोर और सूखी हो सकती है, जबकि कम पकाने से एक नरम, चिपचिपा उत्पाद बन सकता है जो ठीक से सेट नहीं होता है।</li>
                <li><strong>ठंडा करना और सेट करना (oPRP):</strong> पके हुए द्रव्यमान को एक चिकनी ट्रे या सतह पर डाला जाता है और एक वांछित मोटाई तक समान रूप से फैलाया जाता है। फिर इसे कमरे के तापमान पर ठंडा और सेट होने दिया जाता है। यह एक <strong>oPRP</strong> है क्योंकि चीनी के उचित क्रिस्टलीकरण के लिए नियंत्रित शीतलन आवश्यक है, जो बर्फी को उसकी विशिष्ट बनावट देता है।</li>
                <li><strong>काटना और पैकेजिंग:</strong> एक बार सेट हो जाने पर, बर्फी स्लैब को वांछित आकार (आमतौर पर वर्ग या हीरे) में काटा जाता है। फिर इसे बक्सों में पैक किया जाता है, अक्सर एक बटर पेपर अस्तर के साथ, ताकि इसे संरक्षित किया जा सके और इसकी ताजगी बनाए रखी जा सके।</li>
            </ol>
        `
    }
};

    
