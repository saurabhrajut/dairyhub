
export const creamContent = {
    en: {
        title: "Cream Processing",
        subTopics: {
            pasteurized: {
                title: "A. Processing of Pasteurized (Fresh) Cream",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Cream</h3>
                    <p>Cream is the fat-rich portion of milk that is separated from whole milk. It is a highly valued dairy product used both as a primary ingredient in products like butter and ghee, and as a standalone product for culinary purposes. The processing of cream focuses on ensuring its safety, stability, and specific functional properties (like whipping ability or viscosity).</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Cream (as per FSSAI)</h3>
                    <p>The Food Safety and Standards Authority of India (FSSAI) categorizes cream based on its milk fat content. This classification determines its use and labeling.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Type of Cream</th>
                                    <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                                    <th class="p-2 border">Common Uses</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Low Fat Cream</strong></td>
                                    <td class="p-2 border">Not less than 10.0</td>
                                    <td class="p-2 border">Used as a light cream for coffee, soups, and sauces. Often referred to as 'table cream'.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Medium Fat Cream</strong></td>
                                    <td class="p-2 border">Not less than 25.0</td>
                                    <td class="p-2 border">This is the most versatile type, commonly known as 'whipping cream'. Ideal for whipping into toppings for desserts and cakes.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>High Fat Cream</strong></td>
                                    <td class="p-2 border">Not less than 40.0</td>
                                    <td class="p-2 border">Also known as 'heavy cream'. It has a very rich texture and is primarily used for making butter and ghee. It whips very easily and holds its shape well.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">A. Processing of Pasteurized (Fresh) Cream</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Pasteurized Cream</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Chilling (to &lt;5°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (to 40-45°C)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cream Separation (Centrifugation) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Adjusting Fat %) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Pasteurization (e.g., 80-85°C for 15 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Optional, for table cream) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling & Aging (4-5°C for several hours) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                    </div>

                    <h4 class="font-bold mt-6 mb-2">Detailed Explanation of Pasteurized Cream Processing:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li><strong>Raw Milk Reception and Pre-heating (PRP):</strong> The process starts with high-quality raw milk. This is a <strong>Prerequisite Program (PRP)</strong>. After reception and chilling to below 5°C (to control psychrotrophic bacteria), the milk is pre-heated to 40-45°C. This step is crucial because it lowers the viscosity of the milk and melts the solid fat, making the fat globules less viscous and easier to separate from the skim milk phase during centrifugation. This temperature is optimal for efficient separation without damaging the fat globules.</li>
                        <li><strong>Cream Separation (oPRP):</strong> Separation is achieved using a centrifugal cream separator. This is an <strong>Operational Prerequisite Program (oPRP)</strong>. The pre-heated milk is fed into the separator, which spins at a very high speed (5,000-10,000 RPM). Based on <strong>Stoke's Law</strong>, the centrifugal force acts upon the density difference between the milk fat globules (density ~0.93 g/cm³) and the skim milk phase (density ~1.036 g/cm³). The force pushes the denser skim milk to the outer edge of the separator bowl, while the lighter cream (fat globules) moves towards the center. The fat content of the cream can be controlled by adjusting the flow rates of the cream and skim milk outlets.</li>
                        <li><strong>Standardization (oPRP):</strong> After separation, the cream is standardized to the desired fat content. This is typically done by adding a calculated amount of skim milk back into the cream. This is an <strong>oPRP</strong> for product consistency and to meet legal standards for different cream types (low, medium, high fat).</li>
                        <li><strong>Pasteurization (CCP-1):</strong> Cream is pasteurized to destroy pathogenic bacteria. This is a <strong>Critical Control Point (CCP-1)</strong>. Because of its higher fat content, cream requires a more intense heat treatment than milk (e.g., 80-85°C for 15 seconds). The fat globules can provide a protective thermal effect for microorganisms, necessitating a higher temperature to ensure safety. This step also inactivates lipase enzymes, which would otherwise cause hydrolytic rancidity (a soapy flavor) during storage.</li>
                        <li><strong>Homogenization (oPRP):</strong> Homogenization is an <strong>oPRP</strong> that is optional and depends on the cream's intended use. It is <strong>not performed</strong> for whipping cream as it reduces the ability of fat globules to cluster, which is essential for creating a stable foam. For table cream, it's done to prevent fat separation and create a more uniform, viscous product.</li>
                        <li><strong>Cooling and Aging (oPRP):</strong> The cream is rapidly cooled to 4-5°C and then 'aged' for several hours. During aging, the milk fat crystallizes. This is a critical <strong>oPRP</strong> for whipping cream. The slow cooling allows for the formation of stable <strong>β-type fat crystals</strong>. These solid fat crystals are necessary to pierce adjacent fat globules during whipping, leading to partial coalescence and the formation of a stable network that entraps air bubbles, creating a firm foam.</li>
                        <li><strong>Packaging & Storage (PRP, CCP-2):</strong> Packaging is a <strong>PRP</strong> to protect the cream from light, oxygen, and contaminants. Maintaining the cold chain (below 5°C) throughout storage and distribution is a <strong>Critical Control Point (CCP-2)</strong> to prevent the growth of any surviving spoilage microorganisms and ensure the product's safety and quality until it reaches the consumer.</li>
                    </ol>
                `
            },
            uht: {
                title: "B. Processing of UHT (Long-Life) Cream",
                content: `
                    <p>UHT cream is processed to be shelf-stable, meaning it does not require refrigeration until opened. This involves a more intense heat treatment and aseptic packaging.</p>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for UHT Cream</h3>
                    <div class="space-y-2 font-mono text-center mt-4">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardized Cream</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Pre-heating (to ~80°C)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>UHT Treatment (e.g., 140°C for 4 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Flash Cooling (to ~70°C)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Aseptic Homogenization (Downstream)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Final Cooling (to ~20°C)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Aseptic Packaging</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Ambient Storage</div>
                    </div>
                    
                    <h4 class="font-bold mt-6 mb-2">Detailed Explanation of UHT Cream Processing:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li><strong>UHT Treatment (CCP-1):</strong> The cream undergoes Ultra-High Temperature treatment (e.g., 140°C for 4 seconds). This can be done through <strong>direct heating</strong> (steam injection/infusion) or <strong>indirect heating</strong> (plate/tubular heat exchangers). Direct heating is faster but introduces water that must be removed via flash cooling. Indirect heating is more common. This intense process is a <strong>CCP-1</strong> that destroys all microorganisms and their heat-resistant spores, rendering the product commercially sterile.</li>
                        <li><strong>Aseptic Homogenization (oPRP):</strong> For UHT cream, homogenization is performed 'downstream' (after UHT heating) to prevent the formation of fat globule clusters, which can be induced by the intense heat treatment and can lead to 'age gelation' (thickening) during storage. This is a critical <strong>oPRP</strong>. The homogenizer itself must be sterile to prevent recontamination of the sterile product.</li>
                        <li><strong>Aseptic Packaging (CCP-2):</strong> The sterile, cooled cream is packaged into pre-sterilized containers (like Tetra Paks) in a completely sterile environment. This process, including the sterility of the packaging material and the filling environment, is a <strong>CCP-2</strong> as it prevents any post-sterilization contamination, which is critical for a shelf-stable product.</li>
                    </ol>
                `
            }
        }
    },
    hi: {
        title: "क्रीम प्रोसेसिंग",
        subTopics: {
            pasteurized: {
                title: "A. पाश्चुरीकृत (ताजा) क्रीम की प्रसंस्करण",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">क्रीम का परिचय</h3>
                    <p>क्रीम दूध का वसा युक्त हिस्सा है जिसे पूरे दूध से अलग किया जाता है। यह एक अत्यंत मूल्यवान डेयरी उत्पाद है जिसका उपयोग मक्खन और घी जैसे उत्पादों में प्राथमिक घटक के रूप में और पाक प्रयोजनों के लिए एक स्टैंडअलोन उत्पाद के रूप में किया जाता है। क्रीम की प्रसंस्करण इसकी सुरक्षा, स्थिरता और विशिष्ट कार्यात्मक गुणों (जैसे व्हिपिंग क्षमता या चिपचिपाहट) को सुनिश्चित करने पर केंद्रित है।</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार क्रीम के प्रकार</h3>
                    <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) क्रीम को उसके दूध वसा सामग्री के आधार पर वर्गीकृत करता है। यह वर्गीकरण इसके उपयोग और लेबलिंग को निर्धारित करता है।</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">क्रीम का प्रकार</th>
                                    <th class="p-2 border">न्यूनतम दूध वसा % (m/m)</th>
                                    <th class="p-2 border">सामान्य उपयोग</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>कम वसा वाली क्रीम</strong></td>
                                    <td class="p-2 border">10.0 से कम नहीं</td>
                                    <td class="p-2 border">कॉफी, सूप और सॉस के लिए हल्की क्रीम के रूप में उपयोग किया जाता है। अक्सर 'टेबल क्रीम' के रूप में संदर्भित किया जाता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>मध्यम वसा वाली क्रीम</strong></td>
                                    <td class="p-2 border">25.0 से कम नहीं</td>
                                    <td class="p-2 border">यह सबसे बहुमुखी प्रकार है, जिसे आमतौर पर 'व्हिपिंग क्रीम' के रूप में जाना जाता है। डेसर्ट और केक के लिए टॉपिंग में व्हिप करने के लिए आदर्श।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>उच्च वसा वाली क्रीम</strong></td>
                                    <td class="p-2 border">40.0 से कम नहीं</td>
                                    <td class="p-2 border">इसे 'भारी क्रीम' के रूप में भी जाना जाता है। इसमें बहुत समृद्ध बनावट होती है और यह मुख्य रूप से मक्खन और घी बनाने के लिए उपयोग की जाती है। यह बहुत आसानी से व्हिप होती है और अपना आकार अच्छी तरह से बनाए रखती है।</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">A. पाश्चुरीकृत (ताजा) क्रीम की प्रसंस्करण</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">पाश्चुरीकृत क्रीम के लिए प्रसंस्करण प्रवाह संचित्र</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">कच्चे दूध की प्राप्ति और चिलिंग (&lt;5°C तक) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">प्री-हीटिंग (40-45°C तक)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">क्रीम पृथक्करण (अपकेंद्रित्र) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">मानकीकरण (वसा % समायोजित करना) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">पाश्चुरीकरण (जैसे, 80-85°C 15 सेकंड के लिए) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">समरूपता (वैकल्पिक, टेबल क्रीम के लिए) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">शीतलन और एजिंग (4-5°C कई घंटों के लिए) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">कोल्ड स्टोरेज और वितरण <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                    </div>

                    <h4 class="font-bold mt-6 mb-2">पाश्चुरीकृत क्रीम प्रसंस्करण का विस्तृत विवरण:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li><strong>कच्चे दूध की प्राप्ति और प्री-हीटिंग (PRP):</strong> यह प्रक्रिया उच्च गुणवत्ता वाले कच्चे दूध से शुरू होती है। यह एक <strong>आवश्यक कार्यक्रम (PRP)</strong> है। प्राप्ति और चिलिंग के बाद (साइकोट्रॉफिक बैक्टीरिया को नियंत्रित करने के लिए), दूध को 40-45°C तक प्री-हीट किया जाता है। यह कदम महत्वपूर्ण है क्योंकि यह दूध की चिपचिपाहट को कम करता है और ठोस वसा को पिघलाता है, जिससे वसा ग्लोब्यूल्स कम चिपचिपे हो जाते हैं और अपकेंद्रित्र के दौरान स्किम दूध चरण से आसानी से अलग हो जाते हैं। यह तापमान वसा ग्लोब्यूल्स को नुकसान पहुंचाए बिना कुशल पृथक्करण के लिए इष्टतम है।</li>
                        <li><strong>क्रीम पृथक्करण (oPRP):</strong> पृथक्करण एक केन्द्रापसारक क्रीम विभाजक का उपयोग करके प्राप्त किया जाता है। यह एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है। प्री-हीटेड दूध को विभाजक में डाला जाता है, जो बहुत तेज गति (5,000-10,000 RPM) से घूमता है। <strong>स्टोक्स के नियम</strong> के आधार पर, केन्द्रापसारक बल दूध वसा ग्लोब्यूल्स (घनत्व ~0.93 ग्राम/सेमी³) और स्किम दूध चरण (घनत्व ~1.036 ग्राम/सेमी³) के बीच घनत्व अंतर पर कार्य करता है। बल सघन स्किम दूध को विभाजक कटोरे के बाहरी किनारे पर धकेलता है, जबकि हल्की क्रीम (वसा ग्लोब्यूल्स) केंद्र की ओर बढ़ती है। क्रीम और स्किम दूध आउटलेट के प्रवाह दरों को समायोजित करके क्रीम की वसा सामग्री को नियंत्रित किया जा सकता है।</li>
                        <li><strong>मानकीकरण (oPRP):</strong> पृथक्करण के बाद, क्रीम को वांछित वसा सामग्री में मानकीकृत किया जाता है। यह आमतौर पर क्रीम में स्किम दूध की एक परिकलित मात्रा वापस जोड़कर किया जाता है। यह उत्पाद की स्थिरता के लिए और विभिन्न प्रकार की क्रीम (कम, मध्यम, उच्च वसा) के लिए कानूनी मानकों को पूरा करने के लिए एक <strong>oPRP</strong> है।</li>
                        <li><strong>पाश्चुरीकरण (CCP-1):</strong> क्रीम को रोगजनक बैक्टीरिया को नष्ट करने के लिए पाश्चुरीकृत किया जाता है। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है। इसकी उच्च वसा सामग्री के कारण, क्रीम को दूध (जैसे, 80-85°C 15 सेकंड के लिए) की तुलना में अधिक तीव्र गर्मी उपचार की आवश्यकता होती है। वसा ग्लोब्यूल्स सूक्ष्मजीवों के लिए एक सुरक्षात्मक तापीय प्रभाव प्रदान कर सकते हैं, जिससे सुरक्षा सुनिश्चित करने के लिए उच्च तापमान की आवश्यकता होती है। यह कदम लाइपेस एंजाइमों को भी निष्क्रिय करता है, जो अन्यथा भंडारण के दौरान हाइड्रोलाइटिक बासीपन (एक साबुन जैसा स्वाद) का कारण बनते हैं।</li>
                        <li><strong>समरूपता (oPRP):</strong> समरूपता एक <strong>oPRP</strong> है जो वैकल्पिक है और क्रीम के इच्छित उपयोग पर निर्भर करती है। यह <strong>व्हिपिंग क्रीम के लिए नहीं किया जाता है</strong> क्योंकि यह वसा ग्लोब्यूल्स के गुच्छे बनाने की क्षमता को कम करता है, जो एक स्थिर फोम बनाने के लिए आवश्यक है। टेबल क्रीम के लिए, यह वसा पृथक्करण को रोकने और एक अधिक समान, चिपचिपा उत्पाद बनाने के लिए किया जाता है।</li>
                        <li><strong>शीतलन और एजिंग (oPRP):</strong> क्रीम को तेजी से 4-5°C तक ठंडा किया जाता है और फिर कई घंटों के लिए 'एज' किया जाता है। एजिंग के दौरान, दूध वसा क्रिस्टलीकृत हो जाता है। यह व्हिपिंग क्रीम के लिए एक महत्वपूर्ण <strong>oPRP</strong> है। धीमी शीतलन स्थिर <strong>β-प्रकार के वसा क्रिस्टल</strong> के गठन की अनुमति देती है। ये ठोस वसा क्रिस्टल व्हिपिंग के दौरान आसन्न वसा ग्लोब्यूल्स को छेदने के लिए आवश्यक हैं, जिससे आंशिक सहसंयोजन होता है और एक स्थिर नेटवर्क बनता है जो हवा के बुलबुले को फंसाता है, एक दृढ़ फोम बनाता है।</li>
                        <li><strong>पैकेजिंग और भंडारण (PRP, CCP-2):</strong> पैकेजिंग क्रीम को प्रकाश, ऑक्सीजन और संदूषकों से बचाने के लिए एक <strong>PRP</strong> है। भंडारण और वितरण के दौरान कोल्ड चेन (5°C से नीचे) बनाए रखना एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है ताकि किसी भी जीवित खराब होने वाले सूक्ष्मजीवों के विकास को रोका जा सके और उपभोक्ता तक पहुंचने तक उत्पाद की सुरक्षा और गुणवत्ता सुनिश्चित हो सके।</li>
                    </ol>
                `
            },
            uht: {
                title: "B. UHT (लॉन्ग-लाइफ) क्रीम की प्रसंस्करण",
                content: `
                    <p>यूएचटी क्रीम को शेल्फ-स्थिर बनाने के लिए संसाधित किया जाता है, जिसका अर्थ है कि इसे खोलने तक प्रशीतन की आवश्यकता नहीं होती है। इसमें एक अधिक तीव्र गर्मी उपचार और सड़न रोकनेवाला पैकेजिंग शामिल है।</p>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">यूएचटी क्रीम के लिए प्रसंस्करण प्रवाह संचित्र</h3>
                    <div class="space-y-2 font-mono text-center mt-4">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">मानकीकृत क्रीम</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">प्री-हीटिंग (~80°C तक)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>यूएचटी उपचार (जैसे, 140°C 4 सेकंड के लिए)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">फ्लैश कूलिंग (~70°C तक)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>एसेप्टिक होमोजेनाइजेशन (डाउनस्ट्रीम)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">अंतिम शीतलन (~20°C तक)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>एसेप्टिक पैकेजिंग</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">परिवेश भंडारण</div>
                    </div>
                    
                    <h4 class="font-bold mt-6 mb-2">यूएचटी क्रीम प्रसंस्करण का विस्तृत विवरण:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li><strong>यूएचटी उपचार (CCP-1):</strong> क्रीम अति-उच्च तापमान उपचार (जैसे, 140°C 4 सेकंड के लिए) से गुजरती है। यह <strong>प्रत्यक्ष हीटिंग</strong> (भाप इंजेक्शन/इन्फ्यूजन) या <strong>अप्रत्यक्ष हीटिंग</strong> (प्लेट/ट्यूबलर हीट एक्सचेंजर्स) के माध्यम से किया जा सकता है। प्रत्यक्ष हीटिंग तेज है लेकिन पानी का परिचय देता है जिसे फ्लैश कूलिंग के माध्यम से हटाया जाना चाहिए। अप्रत्यक्ष हीटिंग अधिक आम है। यह गहन प्रक्रिया एक <strong>CCP-1</strong> है जो सभी सूक्ष्मजीवों और उनके गर्मी प्रतिरोधी बीजाणुओं को नष्ट कर देती है, जिससे उत्पाद व्यावसायिक रूप से बाँझ हो जाता है।</li>
                        <li><strong>एसेप्टिक होमोजेनाइजेशन (oPRP):</strong> यूएचटी क्रीम के लिए, होमोजेनाइजेशन 'डाउनस्ट्रीम' (यूएचटी हीटिंग के बाद) किया जाता है ताकि वसा ग्लोब्यूल समूहों के गठन को रोका जा सके, जो तीव्र गर्मी उपचार से प्रेरित हो सकते हैं और भंडारण के दौरान 'उम्र का जमना' पैदा कर सकते हैं। यह एक महत्वपूर्ण <strong>oPRP</strong> है। होमोजेनाइज़र स्वयं बाँझ होना चाहिए ताकि बाँझ उत्पाद का पुन: संदूषण न हो।</li>
                        <li><strong>एसेप्टिक पैकेजिंग (CCP-2):</strong> बाँझ, ठंडी क्रीम को पूरी तरह से बाँझ वातावरण में पूर्व-निष्फल कंटेनरों (जैसे टेट्रा पैक) में पैक किया जाता है। यह प्रक्रिया, जिसमें पैकेजिंग सामग्री और भरने के वातावरण की बाँझपन शामिल है, एक <strong>CCP-2</strong> है क्योंकि यह किसी भी पोस्ट-स्टरलाइजेशन संदूषण को रोकता है, जो एक शेल्फ-स्थिर उत्पाद के लिए महत्वपूर्ण है।</li>
                    </ol>
                `
            }
        }
    }
}
