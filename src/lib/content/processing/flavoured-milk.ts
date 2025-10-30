
export const flavouredMilkContent = {
    en: {
        title: "Flavoured Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Flavoured Milk</h3>
            <p>Flavoured milk is a sweetened dairy drink made with milk, sugar, flavourings, and sometimes colouring. It can be sold as a pasteurized product requiring refrigeration, or as an ultra-high-temperature (UHT) treated product that is shelf-stable. It is a popular beverage, especially among children, providing the nutritional benefits of milk in a more palatable format.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Flavoured Milk</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has defined standards for flavoured milk to ensure its quality and safety. The key requirements are:</p>
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
                            <td class="p-2 border"><strong>Milk Fat (% m/m)</strong></td>
                            <td class="p-2 border">Not less than the minimum required for the corresponding milk type (e.g., Toned, Double Toned).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (SNF) (% m/m)</strong></td>
                            <td class="p-2 border">Not less than the minimum required for the corresponding milk type.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar (Sucrose)</strong></td>
                            <td class="p-2 border">Permitted, but the amount added must be declared on the label.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Additives</strong></td>
                            <td class="p-2 border">Only permitted stabilizers, flavours, and colours may be used as per regulations.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Flavoured Milk with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Flavoured Milk Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (Fat & SNF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Stabilizers, etc.) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heat Treatment (Pasteurization or Sterilization)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Flavour & Colour Addition</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Aseptic for UHT) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage (Refrigerated or Ambient)</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Standardization (PRP):</strong> The process starts with standardizing milk to the desired fat and SNF levels, which is a <strong>Prerequisite Program (PRP)</strong> for consistency. This ensures the final product has a consistent mouthfeel and meets legal standards.</li>
                <li><strong>Ingredient Blending (oPRP):</strong> Sugar, cocoa powder (for chocolate milk), and stabilizers are added. This is an <strong>Operational Prerequisite Program (oPRP)</strong>.
                    <br/><strong>Stabilizers:</strong> Stabilizers like Carrageenan are crucial, especially in chocolate milk. <strong>Scientific Reason:</strong> Carrageenan forms a weak, thixotropic gel by interacting with casein micelles. This gel network has a high viscosity at rest, which effectively suspends the heavy cocoa particles, preventing them from settling to the bottom. When the bottle is shaken, the gel temporarily breaks, allowing the liquid to flow freely.
                </li>
                <li><strong>Heat Treatment (CCP-1):</strong> The mix undergoes a heat treatment which is a <strong>Critical Control Point (CCP-1)</strong>.
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>For Pasteurized Flavoured Milk:</strong> HTST pasteurization (72-75°C for 15 seconds) is used for a refrigerated product.</li>
                        <li><strong>For Sterilized Flavoured Milk:</strong> In-bottle sterilization (e.g., 115-120°C for 15-20 minutes) or UHT treatment (135-140°C for 2-4 seconds) is used for a shelf-stable product. This high heat also helps to fully hydrate and activate the stabilizers.</li>
                    </ul>
                </li>
                <li><strong>Homogenization (oPRP):</strong> The mix is homogenized to break down fat globules and any solid particles (like cocoa), ensuring a smooth texture and preventing fat separation. This is an <strong>oPRP</strong>.
                    <br/><strong>Scientific Reason:</strong> A two-stage homogenization process is typically used.
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>First Stage (2000-2500 PSI / 135-170 Bar):</strong> This high pressure forces the milk through a small gap, shearing the large fat globules into very small ones. This creates a stable emulsion.</li>
                        <li><strong>Second Stage (500 PSI / 35 Bar):</strong> This lower pressure stage is crucial to break up any clumps or clusters of the newly formed small fat globules that may have formed after the first stage. This prevents 're-agglomeration' and ensures a uniform, smooth consistency without a thick, viscous texture.</li>
                    </ul>
                </li>
                <li><strong>Flavor & Colour Addition:</strong> Flavors and colors are added. 
                    <br/><strong>Scientific Reason:</strong> For UHT products, these are often added aseptically after the heat treatment. This is because many flavor compounds are volatile and can be degraded or evaporated by the intense heat of UHT processing. Adding them post-treatment via <strong>aseptic dosing</strong> preserves the intended flavor profile. For pasteurized products, they can be added before pasteurization if they are heat-stable.
                </li>
                <li><strong>Packaging and Storage (CCP-2):</strong> The final product is packaged. For UHT milk, this must be done in an aseptic environment into sterile packaging (like Tetra Paks), which is a <strong>Critical Control Point (CCP-2)</strong> to prevent re-contamination. Pasteurized milk is stored under refrigeration, while UHT milk is stored at ambient temperature.</li>
            </ol>
        `
    },
    hi: {
        title: "फ्लेवर्ड मिल्क प्रसंस्करण",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">फ्लेवर्ड मिल्क का परिचय</h3>
            <p>फ्लेवर्ड मिल्क एक मीठा डेयरी पेय है जो दूध, चीनी, फ्लेवरिंग और कभी-कभी रंग के साथ बनाया जाता है। इसे एक पाश्चुरीकृत उत्पाद के रूप में बेचा जा सकता है जिसे प्रशीतन की आवश्यकता होती है, या एक अति-उच्च-तापमान (UHT) उपचारित उत्पाद के रूप में जो शेल्फ-स्थिर होता है। यह एक लोकप्रिय पेय है, खासकर बच्चों में, जो दूध के पोषण संबंधी लाभों को अधिक स्वादिष्ट प्रारूप में प्रदान करता है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार फ्लेवर्ड मिल्क के मानक</h3>
            <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) ने इसकी गुणवत्ता और सुरक्षा सुनिश्चित करने के लिए फ्लेवर्ड मिल्क के लिए मानक परिभाषित किए हैं। मुख्य आवश्यकताएं हैं:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">आवश्यकता</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>दूध वसा (% m/m)</strong></td>
                            <td class="p-2 border">संबंधित दूध प्रकार (जैसे, टोंड, डबल टोंड) के लिए आवश्यक न्यूनतम से कम नहीं।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>दूध के ठोस-गैर-वसा (SNF) (% m/m)</strong></td>
                            <td class="p-2 border">संबंधित दूध प्रकार के लिए आवश्यक न्यूनतम से कम नहीं।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>चीनी (सुक्रोज)</strong></td>
                            <td class="p-2 border">अनुमत है, लेकिन जोड़ी गई मात्रा को लेबल पर घोषित किया जाना चाहिए।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>योज्य पदार्थ</strong></td>
                            <td class="p-2 border">नियमों के अनुसार केवल अनुमत स्टेबलाइजर्स, फ्लेवर और रंगों का उपयोग किया जा सकता है।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ फ्लेवर्ड मिल्क की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">फ्लेवर्ड मिल्क उत्पादन के लिए प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध मानकीकरण (वसा और SNF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">सामग्री का सम्मिश्रण (चीनी, स्टेबलाइजर्स, आदि) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>गर्मी उपचार (पाश्चुरीकरण या नसबंदी)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">समरूपता <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">ठंडा करना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">स्वाद और रंग मिलाना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग (UHT के लिए सड़न रोकनेवाला) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">भंडारण (प्रशीतित या परिवेश)</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>दूध मानकीकरण (PRP):</strong> प्रक्रिया दूध को वांछित वसा और SNF स्तरों में मानकीकृत करने से शुरू होती है, जो स्थिरता के लिए एक <strong>आवश्यक कार्यक्रम (PRP)</strong> है।</li>
                <li><strong>सामग्री का सम्मिश्रण (oPRP):</strong> चीनी, कोको पाउडर (चॉकलेट दूध के लिए), और स्टेबलाइजर्स मिलाए जाते हैं। यह एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है।
                    <br/><strong>स्टेबलाइजर्स:</strong> कैरेजेनन जैसे स्टेबलाइजर्स महत्वपूर्ण हैं, खासकर चॉकलेट दूध में। <strong>वैज्ञानिक कारण:</strong> कैरेजेनन कैसिइन मिसेल के साथ इंटरैक्ट करके एक कमजोर, थिक्सोट्रोपिक जेल बनाता है। यह जेल नेटवर्क आराम की स्थिति में उच्च चिपचिपाहट रखता है, जो भारी कोको कणों को प्रभावी ढंग से निलंबित करता है, उन्हें नीचे बैठने से रोकता है। जब बोतल को हिलाया जाता है, तो जेल अस्थायी रूप से टूट जाता है, जिससे तरल स्वतंत्र रूप से बहता है।
                </li>
                <li><strong>गर्मी उपचार (CCP-1):</strong> मिश्रण एक गर्मी उपचार से गुजरता है जो एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है।
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>पाश्चुरीकृत फ्लेवर्ड मिल्क के लिए:</strong> एक प्रशीतित उत्पाद के लिए HTST पाश्चुरीकरण (72-75°C 15 सेकंड के लिए) का उपयोग किया जाता है।</li>
                        <li><strong>निष्फल फ्लेवर्ड मिल्क के लिए:</strong> एक शेल्फ-स्थिर उत्पाद के लिए इन-बोतल नसबंदी (जैसे, 115-120°C 15-20 मिनट के लिए) या UHT उपचार (135-140°C 2-4 सेकंड के लिए) का उपयोग किया जाता है। यह उच्च गर्मी स्टेबलाइजर्स को पूरी तरह से हाइड्रेट और सक्रिय करने में भी मदद करती है।</li>
                    </ul>
                </li>
                <li><strong>समरूपता (oPRP):</strong> मिश्रण को समरूप किया जाता है ताकि वसा ग्लोब्यूल्स और किसी भी ठोस कणों (जैसे कोको) को तोड़ा जा सके, एक चिकनी बनावट सुनिश्चित हो सके और वसा पृथक्करण को रोका जा सके। यह उत्पाद की गुणवत्ता के लिए एक <strong>oPRP</strong> है।
                    <br/><strong>वैज्ञानिक कारण:</strong> आमतौर पर दो-चरण वाली समरूपता प्रक्रिया का उपयोग किया जाता है।
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>पहला चरण (2000-2500 PSI / 135-170 Bar):</strong> यह उच्च दबाव दूध को एक संकीर्ण अंतराल से गुजरने के लिए मजबूर करता है, बड़े वसा ग्लोब्यूल्स को बहुत छोटे में कतरता है। यह एक स्थिर पायस बनाता है।</li>
                        <li><strong>दूसरा चरण (500 PSI / 35 Bar):</strong> यह कम दबाव वाला चरण पहले चरण के बाद बन सकने वाले नए छोटे वसा ग्लोब्यूल्स के किसी भी गुच्छे या समूहों को तोड़ने के लिए महत्वपूर्ण है। यह 'पुनः-एकत्रीकरण' को रोकता है और एक मोटी, चिपचिपी बनावट के बिना एक समान, चिकनी स्थिरता सुनिश्चित करता है।</li>
                    </ul>
                </li>
                <li><strong>स्वाद और रंग मिलाना:</strong> स्वाद और रंग मिलाए जाते हैं।
                    <br/><strong>वैज्ञानिक कारण:</strong> UHT उत्पादों के लिए, इन्हें अक्सर गर्मी उपचार के बाद सड़न रोकनेवाला तरीके से जोड़ा जाता है। ऐसा इसलिए है क्योंकि कई स्वाद यौगिक वाष्पशील होते हैं और UHT प्रसंस्करण की तीव्र गर्मी से खराब या वाष्पित हो सकते हैं। उन्हें उपचार के बाद <strong>एसेप्टिक डोजिंग</strong> के माध्यम से जोड़ने से इच्छित स्वाद प्रोफ़ाइल संरक्षित रहती है। पाश्चुरीकृत उत्पादों के लिए, यदि वे गर्मी-स्थिर हैं तो उन्हें पाश्चुरीकरण से पहले जोड़ा जा सकता है।
                </li>
                <li><strong>पैकेजिंग और भंडारण (CCP-2):</strong> अंतिम उत्पाद पैक किया जाता है। UHT दूध के लिए, यह एक सड़न रोकनेवाला वातावरण में बाँझ पैकेजिंग (जैसे टेट्रा पैक) में किया जाना चाहिए, जो पुन: संदूषण को रोकने के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है। पाश्चुरीकृत दूध को प्रशीतन के तहत संग्रहीत किया जाता है, जबकि UHT दूध को परिवेश के तापमान पर संग्रहीत किया जाता है।</li>
            </ol>
        `
    }
}
