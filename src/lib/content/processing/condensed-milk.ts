
export const condensedMilkContent = {
    en: {
        title: "Condensed & Evaporated Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Condensed Milk</h3>
            <p>Condensed milk products are dairy items from which water has been partially removed and to which sugar may have been added. The primary purpose of this process is preservation. The reduction in water activity, combined with high sugar content (in sweetened condensed milk) or in-can sterilization (in evaporated milk), inhibits microbial growth, resulting in a product with a long shelf life that does not require refrigeration until opened.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Condensed & Evaporated Milk</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has distinct standards for these concentrated milk products.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Minimum Total Milk Solids % (m/m)</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Sucrose Content % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Milk</strong></td>
                            <td class="p-2 border">31.0</td>
                            <td class="p-2 border">9.0</td>
                            <td class="p-2 border">Minimum 40.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Skimmed Milk</strong></td>
                            <td class="p-2 border">26.0</td>
                            <td class="p-2 border">Max 0.5</td>
                            <td class="p-2 border">Minimum 40.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Evaporated Milk</strong></td>
                            <td class="p-2 border">26.0</td>
                            <td class="p-2 border">8.0</td>
                            <td class="p-2 border">Not Applicable</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Evaporated Skimmed Milk</strong></td>
                            <td class="p-2 border">20.0</td>
                            <td class="p-2 border">Max 1.0</td>
                            <td class="p-2 border">Not Applicable</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Sweetened Condensed Milk with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization (Fat:SNF ratio ~1:2.44) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Pre-heating (110-115°C for 2-3 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Sugar Addition (as hot syrup) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Condensing/Evaporation (under vacuum) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Homogenization (for evaporated milk)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Forced Cooling & Lactose Crystallization (Seeding) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging into Cans <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Standardization and Pre-heating (PRP, CCP-1):</strong>
                    <p>High-quality milk is standardized to a specific fat-to-SNF ratio, typically around 1:2.44, to meet final product specifications. This is a <strong>Prerequisite Program (PRP)</strong>. The milk is then pre-heated to a high temperature (110-115°C) for a very short time. This is a <strong>Critical Control Point (CCP-1)</strong> as it destroys microorganisms and inactivates enzymes, preventing age thickening and ensuring stability.</p>
                </li>
                <li><strong>Sugar Addition and Condensing (oPRP):</strong>
                    <p>Sugar is added to the hot milk, usually as a pre-sterilized syrup, to achieve a concentration of 62-65% in the final aqueous phase. The addition and proper dissolution of sugar is an <strong>Operational Prerequisite Program (oPRP)</strong>. The sweetened milk is then drawn into a vacuum evaporator. Under vacuum, water boils at a lower temperature (around 45-60°C), allowing for gentle water removal without excessive browning or flavor damage. The milk is concentrated until it reaches the desired total solids content (around 74-75%).</p>
                </li>
                <li><strong>Cooling and Lactose Crystallization (CCP-2):</strong>
                    <p>This is a highly critical step. The hot, concentrated milk is supersaturated with lactose. If cooled slowly, lactose will form large, sharp crystals, resulting in a sandy, gritty texture. To prevent this, the condensed milk is rapidly cooled under agitation, and 'seeded' with very fine lactose crystals. This forced crystallization creates a large number of tiny, imperceptible crystals (less than 10µm in size), resulting in a smooth final product. Controlling this crystallization process is a <strong>Critical Control Point (CCP-2)</strong> for product quality.</p>
                </li>
                <li><strong>Packaging and Storage:</strong>
                    <p>The cooled, viscous product is then filled into pre-sterilized cans. The high sugar content acts as the primary preservative, so in-can sterilization (like for evaporated milk) is not required. The product is then stored at ambient temperature.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "संघनित दूध प्रसंस्करण",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">संघनित दूध का परिचय</h3>
            <p>संघनित दूध उत्पाद डेयरी आइटम हैं जिनसे पानी आंशिक रूप से हटा दिया गया है और जिनमें चीनी मिलाई जा सकती है। इस प्रक्रिया का प्राथमिक उद्देश्य संरक्षण है। कम जल गतिविधि, उच्च चीनी सामग्री (मीठे संघनित दूध में) या कैन-में नसबंदी (वाष्पित दूध में) के साथ मिलकर, माइक्रोबियल विकास को रोकती है, जिसके परिणामस्वरूप एक लंबा शेल्फ जीवन वाला उत्पाद होता है जिसे खोलने तक प्रशीतन की आवश्यकता नहीं होती है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार संघनित और वाष्पित दूध के मानक</h3>
            <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) ने इन केंद्रित दूध उत्पादों के लिए अलग-अलग मानक निर्धारित किए हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">उत्पाद का प्रकार</th>
                            <th class="p-2 border">न्यूनतम कुल दूध ठोस % (m/m)</th>
                            <th class="p-2 border">न्यूनतम दूध वसा % (m/m)</th>
                            <th class="p-2 border">सुक्रोज सामग्री % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>मीठा संघनित दूध</strong></td>
                            <td class="p-2 border">31.0</td>
                            <td class="p-2 border">9.0</td>
                            <td class="p-2 border">न्यूनतम 40.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>मीठा संघनित स्किम्ड दूध</strong></td>
                            <td class="p-2 border">26.0</td>
                            <td class="p-2 border">अधिकतम 0.5</td>
                            <td class="p-2 border">न्यूनतम 40.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>वाष्पित दूध</strong></td>
                            <td class="p-2 border">26.0</td>
                            <td class="p-2 border">8.0</td>
                            <td class="p-2 border">लागू नहीं</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>वाष्पित स्किम्ड दूध</strong></td>
                            <td class="p-2 border">20.0</td>
                            <td class="p-2 border">अधिकतम 1.0</td>
                            <td class="p-2 border">लागू नहीं</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ मीठा संघनित दूध की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध की प्राप्ति और मानकीकरण (वसा:SNF अनुपात ~1:2.44) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">पूर्व-तापन (110-115°C 2-3 सेकंड के लिए) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">चीनी मिलाना (गर्म सिरप के रूप में) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">संक्षेपण/वाष्पीकरण (वैक्यूम के तहत) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">समरूपता (वाष्पित दूध के लिए)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">मजबूर शीतलन और लैक्टोज क्रिस्टलीकरण (सीडिंग) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">डिब्बे में पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">भंडारण</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>दूध मानकीकरण और पूर्व-तापन (PRP, CCP-1):</strong>
                    <p>उच्च गुणवत्ता वाले दूध को अंतिम उत्पाद विनिर्देशों को पूरा करने के लिए एक विशिष्ट वसा-से-एसएनएफ अनुपात, आमतौर पर लगभग 1:2.44, में मानकीकृत किया जाता है। यह एक <strong>आवश्यक कार्यक्रम (PRP)</strong> है। दूध को फिर बहुत कम समय के लिए उच्च तापमान (110-115°C) पर पहले से गरम किया जाता है। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है क्योंकि यह सूक्ष्मजीवों को नष्ट करता है और एंजाइमों को निष्क्रिय करता है, जिससे उम्र का मोटा होना रुकता है और स्थिरता सुनिश्चित होती है।</p>
                </li>
                <li><strong>चीनी मिलाना और संक्षेपण (oPRP):</strong>
                    <p>चीनी को गर्म दूध में मिलाया जाता है, आमतौर पर एक पूर्व-निष्फल सिरप के रूप में, ताकि अंतिम जलीय चरण में 62-65% की सांद्रता प्राप्त हो सके। चीनी का जोड़ और उचित विघटन एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है। मीठा दूध फिर एक वैक्यूम वाष्पीकरणकर्ता में खींचा जाता है। वैक्यूम के तहत, पानी कम तापमान (लगभग 45-60°C) पर उबलता है, जिससे अत्यधिक भूरापन या स्वाद क्षति के बिना पानी को धीरे-धीरे हटाया जा सकता है। दूध को तब तक केंद्रित किया जाता है जब तक कि यह वांछित कुल ठोस सामग्री (लगभग 74-75%) तक नहीं पहुंच जाता।</p>
                </li>
                <li><strong>शीतलन और लैक्टोज क्रिस्टलीकरण (CCP-2):</strong>
                    <p>यह एक अत्यंत महत्वपूर्ण कदम है। गर्म, केंद्रित दूध लैक्टोज के साथ अतिसंतृप्त होता है। यदि धीरे-धीरे ठंडा किया जाता है, तो लैक्टोज बड़े, तेज क्रिस्टल बनाएगा, जिसके परिणामस्वरूप एक रेतीली, किरकिरी बनावट होगी। इसे रोकने के लिए, संघनित दूध को आंदोलन के तहत तेजी से ठंडा किया जाता है, और बहुत महीन लैक्टोज क्रिस्टल के साथ 'सीड' किया जाता है। यह मजबूर क्रिस्टलीकरण बड़ी संख्या में छोटे, अगोचर क्रिस्टल (10µm से कम आकार के) बनाता है, जिसके परिणामस्वरूप एक चिकना अंतिम उत्पाद होता है। इस क्रिस्टलीकरण प्रक्रिया को नियंत्रित करना उत्पाद की गुणवत्ता के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है।</p>
                </li>
                <li><strong>पैकेजिंग और भंडारण:</strong>
                    <p>ठंडा, चिपचिपा उत्पाद फिर पूर्व-निष्फल डिब्बे में भरा जाता है। उच्च चीनी सामग्री प्राथमिक परिरक्षक के रूप में कार्य करती है, इसलिए कैन-में नसबंदी (वाष्पित दूध के लिए) की आवश्यकता नहीं होती है। उत्पाद को फिर परिवेश के तापमान पर संग्रहीत किया जाता है।</p>
                </li>
            </ol>
        `
    }
};

    
