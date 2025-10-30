
export const lassiContent = {
    en: {
        title: "Lassi Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Lassi</h3>
            <p>Lassi is a popular, traditional yogurt-based drink, originating from the Indian subcontinent. It is prepared by blending yogurt (Dahi) with water, salt or sugar, and sometimes spices or fruit. It is served chilled as a cooling beverage, especially during hot weather. There are two main varieties: a salty version (often called 'Chaas' or salted lassi) and a sweet version.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Lassi</h3>
            <p>Lassi falls under the category of 'Fermented Milk Products'. While there isn't a separate standard just for "Lassi", it must conform to the general standards for fermented milk products, similar to Dahi or Buttermilk, ensuring it is safe and meets basic compositional requirements for milk solids and fat.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">General Requirement (as per Fermented Milk standards)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Milk Fat (% m/m)</strong></td><td class="p-2 border">Usually based on the milk used (e.g., min 3.0% for whole milk products)</td></tr>
                        <tr><td class="p-2 border"><strong>Milk Solids-Not-Fat (SNF) (% m/m)</strong></td><td class="p-2 border">Generally expected to be not less than 8.5% in the milk portion.</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Lassi with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Lassi Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Curd (Dahi) Preparation <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Breaking of Curd</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Addition of Sugar/Salt, Water, and Flavorings <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Blending/Mixing</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (for smoothness & stability) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (e.g., 72-75°C for 15 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (to &lt;5°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Curd (Dahi) Preparation (PRP):</strong>
                    <p>The foundation of lassi is high-quality, fresh curd with a firm set and pleasant acidity. The curd is prepared following the standard procedure for Dahi production (see Dahi Processing). The quality of this starting material is a fundamental <strong>Prerequisite Program (PRP)</strong> as it dictates the final taste, texture, and microbial safety of the lassi.</p>
                </li>
                <li><strong>Breaking and Blending (oPRP):</strong>
                    <p>The set curd is first gently broken to form a smooth, uniform mass. Following this, other ingredients are added in a blending tank. This step is an <strong>Operational Prerequisite Program (oPRP)</strong> for consistency.</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Sugar/Salt and Water:</strong> Sugar for sweet lassi or salt for salted lassi is added. Potable water is added to adjust the total solids (TS) content, typically bringing it down to 14-16%, which gives lassi its characteristic drinkable consistency.</li>
                        <li><strong>Stabilizers:</strong> For commercial production, especially for fruit-based lassi, stabilizers like Pectin or Carboxymethyl Cellulose (CMC) are often added. <strong>Scientific Reason:</strong> These hydrocolloids bind free water and increase the viscosity of the serum phase. This prevents the settling of curd particles and fruit pulp, thus preventing whey separation ('wheying off') and ensuring a stable, homogenous product throughout its shelf life.</li>
                        <li><strong>Flavors and Colors:</strong> This is where the desired flavor profile is created.
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Natural Flavors:</strong> Fruit pulps (e.g., mango, strawberry), purees, or natural extracts (e.g., rose water, saffron, cardamom) are used for premium products.</li>
                                <li><strong>Synthetic Flavors:</strong> Nature-identical or artificial flavoring essences are used for cost-effective, standardized products.</li>
                                <li><strong>Colors:</strong> Permitted food-grade colors (natural like carotene or synthetic) may be added to enhance the visual appeal, especially for fruit-flavored lassi.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Homogenization (oPRP):</strong>
                    <p>The blended mix is homogenized, typically using a two-stage process. This is a critical <strong>oPRP</strong> for achieving a smooth mouthfeel and long-term stability.</p>
                    <p><strong>Scientific Reason:</strong> The high shear forces in the homogenizer break down any remaining lumps of curd and large particles of fruit pulp into very fine particles, resulting in a uniformly smooth texture. It also creates a stable emulsion of any free fat.
                    <br/><strong>Pressures Used:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>First Stage: 2000-2500 PSI (135-170 Bar)</strong> - This primary stage performs the main work of particle size reduction.</li>
                        <li><strong>Second Stage: 500 PSI (35 Bar)</strong> - This stage prevents the re-agglomeration of the newly formed small particles, ensuring the product remains smooth and stable.</li>
                    </ul>
                </li>
                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>The final blended and homogenized lassi mix undergoes pasteurization (e.g., 72-75°C for 15 seconds). This is a <strong>Critical Control Point (CCP-1)</strong>. Although the base curd is already fermented, the addition of water, sugar, fruit, and other ingredients can introduce post-fermentation contaminants like yeasts and molds. This heat treatment destroys these spoilage organisms, significantly increasing the shelf life of the final product and ensuring its safety.</p>
                </li>
                <li><strong>Cooling, Packaging, and Storage (PRP, CCP-2):</strong>
                    <p>The pasteurized lassi is immediately cooled to below 5°C to preserve its freshness and inhibit any potential microbial growth. Packaging (a <strong>PRP</strong>) is done into clean, sanitized bottles or pouches. The final product must be stored and distributed under strict refrigeration. Maintaining this cold chain is the final <strong>Critical Control Point (CCP-2)</strong> to ensure the safety and quality of the lassi until it reaches the consumer.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "Lassi Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Lassi</h3>
            <p>लस्सी एक लोकप्रिय, पारंपरिक दही-आधारित पेय है, जो भारतीय उपमहाद्वीप से उत्पन्न हुआ है। इसे दही को पानी, नमक या चीनी और कभी-कभी मसाले या फल के साथ मिलाकर तैयार किया जाता है। इसे विशेष रूप से गर्म मौसम में ठंडा पेय के रूप में परोसा जाता है। इसकी दो मुख्य किस्में हैं: एक नमकीन संस्करण (जिसे अक्सर 'छाछ' या नमकीन लस्सी कहा जाता है) और एक मीठा संस्करण।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Lassi</h3>
            <p>लस्सी 'किण्वित दूध उत्पाद' की श्रेणी में आती है। जबकि केवल "लस्सी" के लिए कोई अलग मानक नहीं है, इसे किण्वित दूध उत्पादों के लिए सामान्य मानकों का पालन करना चाहिए, जो दही या छाछ के समान है, यह सुनिश्चित करते हुए कि यह सुरक्षित है और दूध के ठोस और वसा के लिए बुनियादी संरचनात्मक आवश्यकताओं को पूरा करता है।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">सामान्य आवश्यकता (किण्वित दूध मानकों के अनुसार)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>दूध वसा (% m/m)</strong></td><td class="p-2 border">आमतौर पर उपयोग किए गए दूध पर आधारित (जैसे, पूरे दूध उत्पादों के लिए न्यूनतम 3.0%)</td></tr>
                        <tr><td class="p-2 border"><strong>दूध के ठोस-गैर-वसा (SNF) (% m/m)</strong></td><td class="p-2 border">आम तौर पर दूध के हिस्से में 8.5% से कम नहीं होने की उम्मीद है।</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ लस्सी की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">लस्सी उत्पादन के लिए प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दही तैयार करना <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">दही को तोड़ना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">चीनी/नमक, पानी और स्वाद मिलाना <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">सम्मिश्रण/मिश्रण</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">समरूपता (चिकनाई और स्थिरता के लिए) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>पाश्चुरीकरण (जैसे, 72-75°C 15 सेकंड के लिए)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">ठंडा करना (&lt;5°C तक)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">कोल्ड स्टोरेज और वितरण <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>दही तैयार करना (PRP):</strong> लस्सी का आधार उच्च गुणवत्ता वाला, ताज़ा दही होता है जिसकी बनावट अच्छी और स्वाद में सुखद खटास हो। दही को मानक प्रक्रिया (देखें दही प्रसंस्करण) का पालन करते हुए तैयार किया जाता है। इस प्रारंभिक सामग्री की गुणवत्ता एक मौलिक <strong>आवश्यक कार्यक्रम (PRP)</strong> है क्योंकि यह लस्सी के अंतिम स्वाद, बनावट और माइक्रोबियल सुरक्षा को निर्धारित करती है।</li>
                <li><strong>तोड़ना और मिलाना (oPRP):</strong> जमे हुए दही को पहले एक चिकने द्रव्यमान में तोड़ा जाता है। इसके बाद, अन्य सामग्री जैसे चीनी (मीठी लस्सी के लिए), नमक (नमकीन लस्सी के लिए), पानी (कुल ठोस पदार्थ (TS) को समायोजित करने के लिए, आमतौर पर 14-16% तक), और स्वाद (जैसे फलों का गूदा, गुलाब जल, या मसाले) एक सम्मिश्रण टैंक में मिलाए जाते हैं। यह सम्मिश्रण चरण एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है ताकि सभी सामग्री समान रूप से मिश्रित हो सकें।
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>स्टेबलाइजर्स:</strong> वाणिज्यिक उत्पादन के लिए, विशेष रूप से फल-आधारित लस्सी के लिए, पेक्टिन या कार्बोक्सिमिथाइल सेलुलोज (CMC) जैसे स्टेबलाइजर्स अक्सर मिलाए जाते हैं। <strong>वैज्ञानिक कारण:</strong> ये हाइड्रोकोलाइड्स मुक्त पानी को बांधते हैं और सीरम चरण की चिपचिपाहट को बढ़ाते हैं। यह दही के कणों और फलों के गूदे के बैठने से रोकता है, इस प्रकार मट्ठा पृथक्करण ('व्हेइंग ऑफ') को रोकता है और इसके शेल्फ जीवन के दौरान एक स्थिर, समरूप उत्पाद सुनिश्चित करता है।</li>
                        <li><strong>स्वाद और रंग:</strong> यहीं पर वांछित स्वाद प्रोफ़ाइल बनाई जाती है। प्राकृतिक (फलों का गूदा, गुलाब जल) या सिंथेटिक स्वाद और खाद्य-ग्रेड रंगों का उपयोग किया जा सकता है।</li>
                    </ul>
                </li>
                <li><strong>समरूपता (oPRP):</strong> मिश्रित मिश्रण को अक्सर दो-चरण की प्रक्रिया का उपयोग करके समरूप किया जाता है। यह एक चिकनी माउथफिल और दीर्घकालिक स्थिरता प्राप्त करने के लिए एक महत्वपूर्ण <strong>oPRP</strong> है।
                    <p><strong>वैज्ञानिक कारण:</strong> होमोजेनाइज़र में उच्च कतरनी बल दही के किसी भी शेष थक्के और फलों के गूदे के बड़े कणों को बहुत महीन कणों में तोड़ देते हैं, जिसके परिणामस्वरूप एक समान रूप से चिकनी बनावट होती है। यह किसी भी मुक्त वसा का एक स्थिर पायस भी बनाता है।
                    <br/><strong>उपयोग किया जाने वाला दबाव:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>पहला चरण: 2000-2500 PSI (135-170 Bar)</strong> - यह प्राथमिक चरण कण आकार में कमी का मुख्य कार्य करता है।</li>
                        <li><strong>दूसरा चरण: 500 PSI (35 Bar)</strong> - यह चरण नए बने छोटे कणों के पुनः-समूहन को रोकता है, यह सुनिश्चित करता है कि उत्पाद चिकना और स्थिर बना रहे।</li>
                    </ul>
                </li>
                <li><strong>पाश्चुरीकरण (CCP-1):</strong> अंतिम मिश्रित और समरूप लस्सी मिश्रण पाश्चुरीकरण (जैसे, 72-75°C 15 सेकंड के लिए) से गुजरता है। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है। यद्यपि आधार दही पहले से ही किण्वित है, पानी, चीनी, फल और अन्य अवयवों को मिलाने से किण्वन के बाद के संदूषक जैसे खमीर और मोल्ड आ सकते हैं। यह गर्मी उपचार इन खराब करने वाले जीवों को नष्ट कर देता है, अंतिम उत्पाद की शेल्फ लाइफ को काफी बढ़ा देता है और इसकी सुरक्षा सुनिश्चित करता है।</li>
                <li><strong>ठंडा करना, पैकेजिंग और भंडारण (PRP, CCP-2):</strong> पाश्चुरीकृत लस्सी को तुरंत 5°C से नीचे ठंडा किया जाता है। पैकेजिंग उत्पाद को बचाने के लिए एक <strong>PRP</strong> है। फिर इसे बोतलों या पाउच में भरा जाता है और कोल्ड स्टोरेज में स्थानांतरित किया जाता है। कोल्ड चेन बनाए रखना सुरक्षा और गुणवत्ता सुनिश्चित करने के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है जब तक कि यह उपभोक्ता तक न पहुंच जाए।</li>
            </ol>
        `
    }
}
