
export const gheeContent = {
    en: {
        title: "Ghee Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Ghee</h3>
            <p>Ghee, also known as clarified butter, is a class of clarified butter that originated in ancient India. It is a premium, shelf-stable fat product obtained by heating butter or cream to remove almost all the water and milk solids, leaving behind pure milk fat. Its distinct nutty, aromatic flavor and high smoke point make it a staple in Indian cuisine and an important product in the dairy industry.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Ghee</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has laid down specific standards to ensure the purity and quality of ghee sold in the market.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">FSSAI Requirement</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max)</strong></td>
                            <td class="p-2 border">0.5%</td>
                            <td class="p-2 border">Low moisture is critical for a long shelf life and prevents microbial growth.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min)</strong></td>
                            <td class="p-2 border">99.5%</td>
                            <td class="p-2 border">Ensures the product is almost pure milk fat.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Free Fatty Acids (FFA) as Oleic Acid (max)</strong></td>
                            <td class="p-2 border">2.0%</td>
                            <td class="p-2 border">Indicates the extent of fat breakdown (hydrolysis). Higher values lead to a rancid taste.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Butyro-refractometer (BR) Reading at 40°C</strong></td>
                            <td class="p-2 border">40.0 to 44.0</td>
                            <td class="p-2 border">Measures the refractive index, which is characteristic of pure milk fat. Helps detect adulteration with other oils.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Reichert-Meissl (RM) Value (min)</strong></td>
                            <td class="p-2 border">24.0</td>
                            <td class="p-2 border">Measures volatile, water-soluble fatty acids (like butyric acid) unique to milk fat. A low RM value suggests adulteration.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Baudouin Test</strong></td>
                            <td class="p-2 border">Negative</td>
                            <td class="p-2 border">This test detects the presence of vanaspati (hydrogenated vegetable oil), which is a common adulterant.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Ghee</h2>
            <p>There are four main industrial methods for ghee production:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2 mt-4">
                <li><strong>Direct Cream Method:</strong> Cream with a high fat content (60-80%) is heated directly in a ghee kettle to remove moisture and clarify the fat. This method is quick and yields a characteristic cooked flavor.</li>
                <li><strong>Creamery Butter Method:</strong> Unsalted butter is used as the raw material. This is one of the most common methods in the organized dairy sector as it allows for butter to be produced and stored, and then converted to ghee as per market demand.</li>
                <li><strong>Pre-stratification Method:</strong> Butter is melted and held at 80-85°C, allowing it to separate into three layers: a top layer of denatured protein (scum), a middle layer of clear fat, and a bottom layer of buttermilk. The fat layer is then drained and heated to produce ghee. This method is energy-efficient as only the fat layer needs to be heated to the final clarification temperature.</li>
                <li><strong>Desi Method:</strong> The traditional Indian method where milk is converted to curd, which is then churned to produce 'makkhan' (traditional butter). This makkhan is then heated to produce ghee with a very rich, aromatic flavor.</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart (Creamery Butter Method)</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Cream Pasteurization (95°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Aging & Churning (to make Butter)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Unsalted Butter Reception</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Melting of Butter in Ghee Kettle (60-80°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-2 bg-gray-200 border-l-4 border-gray-400 rounded text-sm text-left"><strong>Optional Path: Pre-stratification</strong><br/>Hold at 80-85°C to separate layers. Drain middle fat layer for further heating.</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heating & Clarification (Raising temp to ~114°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Settling of Ghee Residue</strong></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Filtration (to remove Ghee Residue) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling & Granulation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Butter Melting & Pre-stratification:</strong>
                    <p>Unsalted butter is melted in a steam-jacketed ghee kettle. The temperature is raised to 60-80°C. At this point, a choice can be made:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Standard Method:</strong> Proceed directly to high-temperature clarification.</li>
                        <li><strong>Pre-stratification Method:</strong> Hold the molten butter at 80-85°C without agitation for 30 minutes. This allows the melted butter to separate into three distinct layers based on density: a top layer of floating curd particles (scum), a large middle layer of clear liquid fat, and a bottom layer of buttermilk (serum). The buttermilk is drained from the bottom, and the clear fat layer is pumped to another kettle for final clarification. This method is highly energy-efficient as it requires heating a smaller volume (only the fat layer) to the final high temperature.</li>
                    </ul>
                </li>
                <li><strong>Heating & Clarification (CCP-2):</strong> This is the heart of the ghee-making process. The butter is slowly heated in a steam-jacketed kettle. The process can be divided into three stages:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Initial Melting & Emulsion Breaking (60-90°C):</strong> The butter melts, and the water-in-oil emulsion starts to break. The curd (protein) particles become visible.</li>
                        <li><strong>Moisture Evaporation (100-102°C):</strong> The temperature stays constant around 100°C as the free water boils off vigorously. This stage is characterized by heavy bubbling or 'effervescence'.</li>
                        <li><strong>Clarification & Browning (~110-114°C):</strong> Once most of the water has evaporated, the temperature rises rapidly. In this critical phase, the milk solids-not-fat (protein and lactose) undergo browning reactions. The <strong>Maillard reaction</strong> (between amino acids and lactose) and <strong>caramelization</strong> of lactose occur, developing the characteristic nutty, rich aroma of ghee. The protein coagulates and settles at the bottom as brown particles, known as 'ghee residue' or 'scum'. The endpoint is judged by sensory cues: the cessation of effervescence, the appearance of the brown residue, and the development of the characteristic aroma. This is a <strong>Critical Control Point (CCP-2)</strong> for flavor and quality.</li>
                    </ul>
                </li>
                <li><strong>Settling and Clarification:</strong>
                    <p>After the heating is stopped, the ghee is allowed to stand undisturbed for a short period. During this time, the heavier, browned solid particles (ghee residue) settle to the bottom of the kettle due to gravity, leaving a clear layer of pure fat on top. This settling process is crucial as it facilitates easier and more efficient filtration in the next step.</p>
                </li>
                <li><strong>Filtration (oPRP):</strong> Once settling is complete, the hot, clear ghee is carefully decanted or pumped through a filter to remove all suspended particles. This is an <strong>Operational Prerequisite Program (oPRP)</strong>. In traditional methods, this might be done through a muslin cloth, while industrial production uses clarifiers and pressure filters. The goal is to obtain a perfectly clear and pure liquid fat, free from any residue, which is essential for its long shelf life.</li>
                <li><strong>Cooling & Granulation (oPRP):</strong> The filtered ghee is cooled in a controlled manner. This step is a crucial <strong>oPRP</strong> for developing the desirable granular texture (crystallization). Ghee is a mixture of different triglycerides with different melting points. Slow, controlled cooling allows the higher melting point fats to crystallize first, forming nuclei. As cooling continues, more fat crystallizes around these nuclei, forming the characteristic grains. Rapid cooling would result in a smooth, pasty texture, which is generally considered undesirable in ghee. The ideal granulation is achieved by holding the ghee at a specific temperature (around 28-30°C) for some time.</li>
                <li><strong>Packaging (PRP):</strong> The granulated ghee is then packaged into suitable containers like tins, glass jars, or multi-layered pouches that protect it from light, oxygen, and moisture to ensure a long shelf life. This is a final <strong>Prerequisite Program (PRP)</strong>.</li>
            </ol>
        `
    },
    hi: {
        title: "घी प्रसंस्करण",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">घी का परिचय</h3>
            <p>घी, जिसे स्पष्ट मक्खन भी कहा जाता है, स्पष्ट मक्खन का एक वर्ग है जो प्राचीन भारत में उत्पन्न हुआ था। यह एक प्रीमियम, शेल्फ-स्थिर वसा उत्पाद है जो मक्खन या क्रीम को गर्म करके लगभग सभी पानी और दूध के ठोस पदार्थों को हटाकर प्राप्त किया जाता है, जिससे शुद्ध दूध वसा पीछे रह जाता है। इसका विशिष्ट पौष्टिक, सुगंधित स्वाद और उच्च धुआं बिंदु इसे भारतीय व्यंजनों में एक प्रमुख बनाता है और डेयरी उद्योग में एक महत्वपूर्ण उत्पाद है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार घी के मानक</h3>
            <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) ने बाजार में बेचे जाने वाले घी की शुद्धता और गुणवत्ता सुनिश्चित करने के लिए विशिष्ट मानक निर्धारित किए हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">FSSAI आवश्यकता</th>
                            <th class="p-2 border">महत्व</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>नमी (अधिकतम)</strong></td>
                            <td class="p-2 border">0.5%</td>
                            <td class="p-2 border">लंबी शेल्फ लाइफ के लिए कम नमी महत्वपूर्ण है और माइक्रोबियल विकास को रोकती है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>दूध वसा (न्यूनतम)</strong></td>
                            <td class="p-2 border">99.5%</td>
                            <td class="p-2 border">सुनिश्चित करता है कि उत्पाद लगभग शुद्ध दूध वसा है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>मुक्त फैटी एसिड (FFA) ओलिक एसिड के रूप में (अधिकतम)</strong></td>
                            <td class="p-2 border">2.0%</td>
                            <td class="p-2 border">वसा के टूटने (हाइड्रोलिसिस) की सीमा को इंगित करता है। उच्च मान बासी स्वाद की ओर ले जाते हैं।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>ब्यूटिरो-रिफ्रैक्टोमीटर (BR) रीडिंग 40°C पर</strong></td>
                            <td class="p-2 border">40.0 से 44.0</td>
                            <td class="p-2 border">अपवर्तक सूचकांक को मापता है, जो शुद्ध दूध वसा की विशेषता है। अन्य तेलों के साथ मिलावट का पता लगाने में मदद करता है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>रीचर्ट-मीसल (RM) मान (न्यूनतम)</strong></td>
                            <td class="p-2 border">24.0</td>
                            <td class="p-2 border">दूध वसा के लिए अद्वितीय वाष्पशील, पानी में घुलनशील फैटी एसिड (जैसे ब्यूटिरिक एसिड) को मापता है। कम RM मान मिलावट का सुझाव देता है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>बौडौइन परीक्षण</strong></td>
                            <td class="p-2 border">नकारात्मक</td>
                            <td class="p-2 border">यह परीक्षण वनस्पति (हाइड्रोजनीकृत वनस्पति तेल) की उपस्थिति का पता लगाता है, जो एक आम मिलावट है।</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">घी की प्रसंस्करण</h2>
            <p>घी उत्पादन के लिए चार मुख्य औद्योगिक विधियाँ हैं:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2 mt-4">
                <li><strong>डायरेक्ट क्रीम विधि:</strong> उच्च वसा सामग्री (60-80%) वाली क्रीम को सीधे घी की केतली में गर्म करके नमी और दूध के ठोस पदार्थों को हटाया जाता है। यह विधि त्वरित है और एक विशिष्ट पका हुआ स्वाद देती है।</li>
                <li><strong>क्रीमरी बटर विधि:</strong> बिना नमक वाले मक्खन को कच्चे माल के रूप में उपयोग किया जाता है। यह संगठित डेयरी क्षेत्र में सबसे आम तरीकों में से एक है क्योंकि यह मक्खन का उत्पादन और भंडारण करने की अनुमति देता है, और फिर बाजार की मांग के अनुसार घी में परिवर्तित किया जा सकता है।</li>
                <li><strong>प्री-स्ट्रेटिफिकेशन विधि:</strong> मक्खन को पिघलाकर 80-85°C पर रखा जाता है, जिससे यह तीन परतों में अलग हो जाता है: ऊपर विकृत प्रोटीन (मैला) की एक परत, बीच में स्पष्ट वसा की एक परत, और नीचे छाछ की एक परत। फिर वसा की परत को निकालकर अंतिम स्पष्टीकरण के लिए गर्म किया जाता है। यह विधि ऊर्जा-कुशल है क्योंकि केवल वसा की परत को अंतिम उच्च तापमान तक गर्म करने की आवश्यकता होती है।</li>
                <li><strong>देसी विधि:</strong> पारंपरिक भारतीय विधि जिसमें दूध को दही में बदला जाता है, जिसे फिर मथकर 'मक्खन' (पारंपरिक मक्खन) बनाया जाता है। इस मक्खन को फिर गर्म करके बहुत समृद्ध, सुगंधित स्वाद वाला घी बनाया जाता है।</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण प्रवाह संचित्र (क्रीमरी बटर विधि)</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध की प्राप्ति <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">प्री-हीटिंग और क्रीम पृथक्करण <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">क्रीम पाश्चुरीकरण (95°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">एजिंग और मथना (मक्खन बनाने के लिए)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">बिना नमक वाले मक्खन की प्राप्ति</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">घी की केतली में मक्खन को पिघलाना (60-80°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-2 bg-gray-200 border-l-4 border-gray-400 rounded text-sm text-left"><strong>वैकल्पिक पथ: प्री-स्ट्रेटिफिकेशन</strong><br/>परतों को अलग करने के लिए 80-85°C पर रखें। आगे की हीटिंग के लिए मध्य वसा परत को निकालें।</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>हीटिंग और स्पष्टीकरण (तापमान ~114°C तक बढ़ाना)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>घी अवशेषों का बैठना</strong></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">छानना (घी अवशेषों को हटाने के लिए) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">ठंडा करना और दानेदार बनाना <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>मक्खन पिघलाना और प्री-स्ट्रेटिफिकेशन:</strong>
                    <p>बिना नमक वाले मक्खन को भाप-जैकेट वाली घी की केतली में पिघलाया जाता है। तापमान को 60-80°C तक बढ़ाया जाता है। इस बिंदु पर, एक विकल्प बनाया जा सकता है:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>मानक विधि:</strong> सीधे उच्च तापमान स्पष्टीकरण के लिए आगे बढ़ें।</li>
                        <li><strong>प्री-स्ट्रेटिफिकेशन विधि:</strong> पिघले हुए मक्खन को बिना हिलाए 80-85°C पर 30 मिनट तक रखें। यह पिघले हुए मक्खन को घनत्व के आधार पर तीन अलग-अलग परतों में अलग होने देता है: ऊपर तैरते हुए दही के कणों की एक परत (मैला), बीच में स्पष्ट तरल वसा की एक बड़ी परत, और नीचे छाछ (सीरम) की एक परत। छाछ को नीचे से निकाल दिया जाता है, और स्पष्ट वसा की परत को अंतिम स्पष्टीकरण के लिए दूसरे केतली में पंप किया जाता है। यह विधि अत्यधिक ऊर्जा-कुशल है क्योंकि इसमें केवल वसा की परत को अंतिम उच्च तापमान तक गर्म करने की आवश्यकता होती है।</li>
                    </ul>
                </li>
                <li><strong>हीटिंग और स्पष्टीकरण (CCP-2):</strong> यह घी बनाने की प्रक्रिया का सबसे महत्वपूर्ण हिस्सा है। मक्खन को धीरे-धीरे एक स्टीम-जैकेटेड केतली में गर्म किया जाता है। प्रक्रिया को तीन चरणों में विभाजित किया जा सकता है:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>प्रारंभिक पिघलना और इमल्शन का टूटना (60-90°C):</strong> मक्खन पिघलता है, और पानी-में-तेल का इमल्शन टूटना शुरू हो जाता है। दही (प्रोटीन) के कण दिखाई देने लगते हैं।</li>
                        <li><strong>नमी का वाष्पीकरण (100-102°C):</strong> तापमान लगभग 100°C पर स्थिर रहता है क्योंकि मुक्त पानी जोर से उबलता है। इस चरण की विशेषता भारी बुदबुदाहट या 'उफान' है।</li>
                        <li><strong>स्पष्टीकरण और ब्राउनिंग (~110-114°C):</strong> एक बार जब अधिकांश पानी वाष्पित हो जाता है, तो तापमान तेजी से बढ़ता है। इस महत्वपूर्ण चरण में, दूध के ठोस-गैर-वसा (प्रोटीन और लैक्टोज) ब्राउनिंग प्रतिक्रियाओं से गुजरते हैं। <strong>मैईलार्ड प्रतिक्रिया (Maillard reaction)</strong> और <strong>कैरामलीकरण (caramelization)</strong> लैक्टोज का होता है, जो घी की विशिष्ट पौष्टिक, सुगंधित सुगंध विकसित करता है। प्रोटीन जम जाता है और भूरे कणों के रूप में नीचे बैठ जाता है, जिसे 'घी अवशेष' या 'मैला' के रूप में जाना जाता है। अंतिम बिंदु का अंदाजा बुदबुदाहट के बंद होने, अवशेषों के भूरे होने और विशिष्ट सुगंध के विकास से लगाया जाता है। यह स्वाद और गुणवत्ता के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है।</li>
                    </ul>
                </li>
                <li><strong>सेटलिंग और स्पष्टीकरण:</strong>
                    <p>हीटिंग बंद करने के बाद, घी को थोड़ी देर के लिए बिना हिलाए छोड़ दिया जाता है। इस दौरान, भारी, भूरे ठोस कण (घी अवशेष) गुरुत्वाकर्षण के कारण केतली के नीचे बैठ जाते हैं, जिससे ऊपर शुद्ध वसा की एक स्पष्ट परत रह जाती है। यह बसने की प्रक्रिया महत्वपूर्ण है क्योंकि यह अगले चरण में छानने को आसान और अधिक कुशल बनाती है।</p>
                </li>
                <li><strong>छानना (oPRP):</strong> एक बार जब बसना पूरा हो जाता है, तो गर्म, स्पष्ट घी को सभी निलंबित कणों को हटाने के लिए सावधानी से एक फिल्टर के माध्यम से निकाला या पंप किया जाता है। यह एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है। पारंपरिक तरीकों में, यह एक मलमल के कपड़े के माध्यम से किया जा सकता है, जबकि औद्योगिक उत्पादन में क्लेरिफायर और प्रेशर फिल्टर का उपयोग किया जाता है। इसका लक्ष्य एक पूरी तरह से स्पष्ट और शुद्ध तरल वसा प्राप्त करना है, जो किसी भी अवशेष से मुक्त हो, जो इसकी लंबी शेल्फ लाइफ के लिए आवश्यक है।</li>
                <li><strong>ठंडा करना और दानेदार बनाना (oPRP):</strong> फ़िल्टर किए गए घी को एक नियंत्रित तरीके से ठंडा किया जाता है। यह कदम वांछनीय दानेदार बनावट (क्रिस्टलीकरण) विकसित करने के लिए एक महत्वपूर्ण <strong>oPRP</strong> है। घी विभिन्न पिघलने बिंदुओं के साथ विभिन्न ट्राइग्लिसराइड्स का मिश्रण है। धीमी, नियंत्रित शीतलन उच्च पिघलने बिंदु वाले वसा को पहले क्रिस्टलीकृत करने की अनुमति देती है, जो नाभिक बनाती है। जैसे-जैसे शीतलन जारी रहता है, अधिक वसा इन नाभिकों के चारों ओर क्रिस्टलीकृत होती है, जिससे विशिष्ट दाने बनते हैं। तेजी से ठंडा करने से एक चिकनी, पेस्टी बनावट होगी, जिसे आमतौर पर घी में अवांछनीय माना जाता है। आदर्श दानेदार बनाने के लिए घी को कुछ समय के लिए एक विशिष्ट तापमान (लगभग 28-30°C) पर रखा जाता है।</li>
                <li><strong>पैकेजिंग (PRP):</strong> दानेदार घी को फिर टिन, कांच के जार, या बहु-स्तरित पाउच जैसे उपयुक्त कंटेनरों में पैक किया जाता है जो इसे प्रकाश, ऑक्सीजन और नमी से बचाते हैं ताकि एक लंबी शेल्फ लाइफ सुनिश्चित हो सके। यह एक अंतिम <strong>आवश्यक कार्यक्रम (PRP)</strong> है।</li>
            </ol>
        `
    }
}

    