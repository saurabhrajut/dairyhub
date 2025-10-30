
export const standardizationContent = {
    en: {
        title: "Standardization",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Milk Standardization</h3>
            <p>Standardization is the process of adjusting the fat and/or solids-not-fat (SNF) content of milk to meet legal requirements and to ensure a consistent quality for the final product. Raw milk composition varies depending on factors like breed of cow, season, and stage of lactation. Standardization removes this variability, ensuring that a product labeled 'Toned Milk' or 'Full Cream Milk' has the same composition every time a consumer buys it.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">The Principle of Standardization: Mass Balance</h3>
            <p>The process is based on a simple yet fundamental principle: <strong>mass balance</strong>. This principle states that the total amount of a component (like fat or SNF) in the final mixture must equal the sum of the amounts of that component contributed by each of the ingredients used. In other words, nothing is lost or gained.</p>
            <p>For fat standardization, the equation is:</p>
            <p class="font-mono text-sm bg-muted p-2 rounded"> (Mass of Ingredient 1 &times; % Fat of Ingredient 1) + (Mass of Ingredient 2 &times; % Fat of Ingredient 2) = (Total Mass of Final Mix &times; % Fat of Final Mix)</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Methods of Standardization</h3>

            <h4 class="font-semibold mt-4 mb-2">1. Pearson Square Method</h4>
            <p>The Pearson Square is a simple graphical tool used for standardizing the fat content of milk or cream by blending two ingredients with different fat percentages. It is a visual shortcut for the mass balance equation.</p>
            <p><strong>Example:</strong> We need to produce 100 kg of standardized milk with <strong>3.0% fat</strong>. We have whole milk with <strong>6.0% fat</strong> and skim milk with <strong>0.1% fat</strong>.</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Write the fat % of the two starting ingredients (6.0 and 0.1) on the left corners of a square.</li>
                <li>Write the desired fat % (3.0) in the center of the square.</li>
                <div class="my-4 p-4 border rounded-lg bg-indigo-50 text-center">
                    <div class="grid grid-cols-3 items-center justify-items-center">
                        <div class="flex flex-col items-center">
                            <span>Whole Milk</span>
                            <span class="text-2xl font-bold">6.0</span>
                        </div>
                        <div></div>
                        <div class="flex flex-col items-center">
                            <span>Parts of Whole Milk</span>
                            <span class="text-2xl font-bold text-green-600">2.9</span>
                        </div>
                        
                        <div></div>
                        <div class="text-3xl font-bold">3.0</div>
                        <div></div>
                        
                        <div class="flex flex-col items-center">
                            <span>Skim Milk</span>
                            <span class="text-2xl font-bold">0.1</span>
                        </div>
                        <div></div>
                         <div class="flex flex-col items-center">
                            <span>Parts of Skim Milk</span>
                            <span class="text-2xl font-bold text-red-600">3.0</span>
                        </div>
                    </div>
                </div>
                <li>Subtract diagonally across the square (ignoring negative signs):
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>(Top Left - Center) &rarr; 6.0 - 3.0 = <strong>3.0</strong> (This gives the parts of the bottom-left ingredient, Skim Milk).</li>
                        <li>(Center - Bottom Left) &rarr; 3.0 - 0.1 = <strong>2.9</strong> (This gives the parts of the top-left ingredient, Whole Milk).</li>
                    </ul>
                </li>
                <li><strong>Result:</strong> To get the desired 3.0% fat milk, you need to mix <strong>2.9 parts</strong> of the 6.0% fat milk with <strong>3.0 parts</strong> of the 0.1% fat skim milk.</li>
                <li><strong>Calculate Quantities for 100 kg:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Total parts = 2.9 + 3.0 = <strong>5.9 parts</strong>.</li>
                        <li>Amount of Whole Milk (6.0% fat) needed = (100 kg &times; 2.9 parts) / 5.9 total parts = <strong>49.15 kg</strong>.</li>
                        <li>Amount of Skim Milk (0.1% fat) needed = (100 kg &times; 3.0 parts) / 5.9 total parts = <strong>50.85 kg</strong>.</li>
                    </ul>
                </li>
            </ol>

             <h4 class="font-semibold mt-6 mb-2">2. Algebraic Method (Mass Balance Calculation)</h4>
            <p>This method uses simultaneous equations to solve the same problem with more mathematical precision.</p>
            <p><strong>Example:</strong> We need to produce 100 kg of standardized milk with <strong>3.0% fat</strong>. We have whole milk with <strong>6.0% fat</strong> and skim milk with <strong>0.1% fat</strong>.</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Define Variables:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Let <strong>'x'</strong> be the mass (kg) of whole milk needed.</li>
                        <li>Let <strong>'y'</strong> be the mass (kg) of skim milk needed.</li>
                    </ul>
                </li>
                <li><strong>Set up Equations:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Equation 1 (Total Mass):</strong> The total mass of the ingredients must equal the final mass.
                           <br/> <code class="font-mono text-blue-700">x + y = 100</code>
                        </li>
                        <li><strong>Equation 2 (Fat Mass Balance):</strong> The sum of the fat from each ingredient must equal the fat in the final mix.
                           <br/> <code class="font-mono text-blue-700">(x &times; 0.060) + (y &times; 0.001) = (100 &times; 0.030)</code>
                           <br/> <code class="font-mono text-blue-700">0.06x + 0.001y = 3</code>
                        </li>
                    </ul>
                </li>
                <li><strong>Solve the Equations:</strong>
                     <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>From Equation 1, we get <code class="font-mono">y = 100 - x</code>。</li>
                        <li>Substitute this into Equation 2: <code class="font-mono">0.06x + 0.001(100 - x) = 3</code></li>
                        <li>Simplify: <code class="font-mono">0.06x + 0.1 - 0.001x = 3</code></li>
                        <li>Combine terms: <code class="font-mono">0.059x = 2.9</code></li>
                        <li>Solve for x: <code class="font-mono">x = 2.9 / 0.059 = 49.15 kg</code></li>
                        <li>Solve for y: <code class="font-mono">y = 100 - 49.15 = 50.85 kg</code></li>
                    </ul>
                </li>
                 <li><strong>Result:</strong> You need to mix <strong>49.15 kg</strong> of 6.0% fat milk and <strong>50.85 kg</strong> of 0.1% fat skim milk to get 100 kg of 3.0% fat milk.</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Industrial Standardization Process</h3>
            <p>In a modern dairy plant, standardization is often an automated, in-line process integrated with the cream separator. This allows for continuous and highly precise standardization of large volumes of milk.</p>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Separation:</strong> Raw milk is pre-heated (40-45°C) and fed into a centrifugal cream separator. The separator splits the milk into two streams: skim milk (with very low fat, e.g., 0.05%) and cream (with high fat, e.g., 40%).</li>
                <li><strong>Real-time Analysis:</strong> In-line sensors are placed on the raw milk inlet, the skim milk outlet, and the cream outlet. These sensors continuously measure the fat content (and sometimes protein and total solids) of each stream in real time, often using optical or density-based measurement principles.</li>
                <li><strong>Calculation & Control via PLC:</strong> The data from these sensors is fed into a Programmable Logic Controller (PLC). The PLC is programmed with the target fat percentage for the final standardized milk (e.g., 3.0% for toned milk). Based on the incoming raw milk's fat content and the separated streams' fat content, the PLC continuously calculates the exact amount of cream that needs to be remixed with the skim milk to hit the target.
                <br/><strong>Scientific Reason:</strong> This continuous calculation allows the system to instantly adapt to any minor fluctuations in the raw milk's fat content, ensuring the final output remains perfectly consistent.</li>
                <li><strong>Automated Remixing:</strong> A modulating control valve, controlled by the PLC, is placed on the cream line. This valve precisely adjusts the flow of cream that is re-introduced and blended back into the skim milk line. If the system detects the standardized milk's fat content is drifting, it instantly adjusts the cream valve to correct it.</li>
                <li><strong>Excess Cream:</strong> The cream that is not needed for standardization is diverted to a separate storage tank and can be used for other products like butter, ghee, or market cream.</li>
            </ol>
            <p class="mt-4">This automated, in-line system is highly efficient, reduces the need for large blending tanks, minimizes human error, and ensures that every packet of milk has the exact composition stated on the label.</p>
        `
    },
    hi: {
        title: "मानकीकरण (Standardization)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">दूध मानकीकरण का परिचय</h3>
            <p>मानकीकरण दूध की वसा और/या ठोस-गैर-वसा (SNF) सामग्री को समायोजित करने की प्रक्रिया है ताकि कानूनी आवश्यकताओं को पूरा किया जा सके और अंतिम उत्पाद के लिए एक समान गुणवत्ता सुनिश्चित हो सके। कच्चे दूध की संरचना गाय की नस्ल, मौसम और स्तनपान के चरण जैसे कारकों के आधार पर भिन्न होती है। मानकीकरण इस परिवर्तनशीलता को दूर करता है, यह सुनिश्चित करता है कि 'टोन्ड मिल्क' या 'फुल क्रीम मिल्क' के रूप में लेबल किया गया उत्पाद हर बार जब कोई उपभोक्ता इसे खरीदता है तो उसकी संरचना समान होती है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">मानकीकरण का सिद्धांत: द्रव्यमान संतुलन</h3>
            <p>यह प्रक्रिया एक सरल लेकिन मौलिक सिद्धांत पर आधारित है: <strong>द्रव्यमान संतुलन (mass balance)</strong>। यह सिद्धांत कहता है कि अंतिम मिश्रण में किसी घटक (जैसे वसा या एसएनएफ) की कुल मात्रा उपयोग किए गए प्रत्येक अवयव द्वारा योगदान किए गए उस घटक की मात्रा के योग के बराबर होनी चाहिए। दूसरे शब्दों में, कुछ भी खोया या प्राप्त नहीं होता है।</p>
            <p>वसा मानकीकरण के लिए, समीकरण है:</p>
            <p class="font-mono text-sm bg-muted p-2 rounded">(अवयव 1 का द्रव्यमान &times; अवयव 1 का % वसा) + (अवयव 2 का द्रव्यमान &times; अवयव 2 का % वसा) = (अंतिम मिश्रण का कुल द्रव्यमान &times; अंतिम मिश्रण का % वसा)</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">मानकीकरण के तरीके</h3>

            <h4 class="font-semibold mt-4 mb-2">1. पियर्सन स्क्वायर विधि</h4>
            <p>पियर्सन स्क्वायर एक सरल ग्राफिकल उपकरण है जिसका उपयोग अलग-अलग वसा प्रतिशत वाले दो अवयवों को मिलाकर दूध या क्रीम की वसा सामग्री को मानकीकृत करने के लिए किया जाता है। यह द्रव्यमान संतुलन समीकरण का एक दृश्य शॉर्टकट है।</p>
            <p><strong>उदाहरण:</strong> हमें <strong>3.0% वसा</strong> वाला 100 किलो मानकीकृत दूध का उत्पादन करना है। हमारे पास <strong>6.0% वसा</strong> वाला पूरा दूध और <strong>0.1% वसा</strong> वाला स्किम्ड दूध है।</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>एक वर्ग के बाएं कोनों पर दो प्रारंभिक अवयवों का वसा % (6.0 और 0.1) लिखें।</li>
                <li>वर्ग के केंद्र में वांछित वसा % (3.0) लिखें।</li>
                <div class="my-4 p-4 border rounded-lg bg-indigo-50 text-center">
                    <div class="grid grid-cols-3 items-center justify-items-center">
                        <div class="flex flex-col items-center">
                            <span>पूरा दूध</span>
                            <span class="text-2xl font-bold">6.0</span>
                        </div>
                        <div></div>
                        <div class="flex flex-col items-center">
                            <span>पूरे दूध के भाग</span>
                            <span class="text-2xl font-bold text-green-600">2.9</span>
                        </div>
                        
                        <div></div>
                        <div class="text-3xl font-bold">3.0</div>
                        <div></div>
                        
                        <div class="flex flex-col items-center">
                            <span>स्किम्ड दूध</span>
                            <span class="text-2xl font-bold">0.1</span>
                        </div>
                        <div></div>
                         <div class="flex flex-col items-center">
                            <span>स्किम्ड दूध के भाग</span>
                            <span class="text-2xl font-bold text-red-600">3.0</span>
                        </div>
                    </div>
                </div>
                <li>वर्ग के पार तिरछे घटाएं (नकारात्मक संकेतों को अनदेखा करते हुए):
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>(ऊपर बाएं - केंद्र) &rarr; 6.0 - 3.0 = <strong>3.0</strong> (यह नीचे-बाएं अवयव, स्किम्ड दूध, के भागों को देता है)।</li>
                        <li>(केंद्र - नीचे बाएं) &rarr; 3.0 - 0.1 = <strong>2.9</strong> (यह ऊपर-बाएं अवयव, पूरा दूध, के भागों को देता है)।</li>
                    </ul>
                </li>
                <li><strong>परिणाम:</strong> वांछित 3.0% वसा वाला दूध प्राप्त करने के लिए, आपको 6.0% वसा वाले दूध के <strong>2.9 भागों</strong> को 0.1% वसा वाले स्किम्ड दूध के <strong>3.0 भागों</strong> के साथ मिलाना होगा।</li>
                <li><strong>100 किलो के लिए मात्रा की गणना करें:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>कुल भाग = 2.9 + 3.0 = <strong>5.9 भाग</strong>।</li>
                        <li>आवश्यक पूरे दूध (6.0% वसा) की मात्रा = (100 किलो &times; 2.9 भाग) / 5.9 कुल भाग = <strong>49.15 किलो</strong>।</li>
                        <li>आवश्यक स्किम्ड दूध (0.1% वसा) की मात्रा = (100 किलो &times; 3.0 भाग) / 5.9 कुल भाग = <strong>50.85 किलो</strong>।</li>
                    </ul>
                </li>
            </ol>

             <h4 class="font-semibold mt-6 mb-2">2. बीजगणितीय विधि (द्रव्यमान संतुलन गणना)</h4>
            <p>यह विधि एक ही समस्या को अधिक गणितीय परिशुद्धता के साथ हल करने के लिए एक साथ समीकरणों का उपयोग करती है।</p>
            <p><strong>उदाहरण:</strong> हमें <strong>3.0% वसा</strong> वाला 100 किलो मानकीकृत दूध का उत्पादन करना है। हमारे पास <strong>6.0% वसा</strong> वाला पूरा दूध और <strong>0.1% वसा</strong> वाला स्किम्ड दूध है।</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>चर परिभाषित करें:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>मान लें कि <strong>'x'</strong> आवश्यक पूरे दूध का द्रव्यमान (किलो) है।</li>
                        <li>मान लें कि <strong>'y'</strong> आवश्यक स्किम्ड दूध का द्रव्यमान (किलो) है।</li>
                    </ul>
                </li>
                <li><strong>समीकरण स्थापित करें:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>समीकरण 1 (कुल द्रव्यमान):</strong> अवयवों का कुल द्रव्यमान अंतिम द्रव्यमान के बराबर होना चाहिए।
                           <br/> <code class="font-mono text-blue-700">x + y = 100</code>
                        </li>
                        <li><strong>समीकरण 2 (वसा द्रव्यमान संतुलन):</strong> प्रत्येक अवयव से वसा का योग अंतिम मिश्रण में वसा के बराबर होना चाहिए।
                           <br/> <code class="font-mono text-blue-700">(x &times; 0.060) + (y &times; 0.001) = (100 &times; 0.030)</code>
                           <br/> <code class="font-mono text-blue-700">0.06x + 0.001y = 3</code>
                        </li>
                    </ul>
                </li>
                <li><strong>समीकरणों को हल करें:</strong>
                     <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>समीकरण 1 से, हमें मिलता है <code class="font-mono">y = 100 - x</code>。</li>
                        <li>इसे समीकरण 2 में प्रतिस्थापित करें: <code class="font-mono">0.06x + 0.001(100 - x) = 3</code></li>
                        <li>सरल करें: <code class="font-mono">0.06x + 0.1 - 0.001x = 3</code></li>
                        <li>पदों को मिलाएं: <code class="font-mono">0.059x = 2.9</code></li>
                        <li>x के लिए हल करें: <code class="font-mono">x = 2.9 / 0.059 = 49.15 किलो</code></li>
                        <li>y के लिए हल करें: <code class="font-mono">y = 100 - 49.15 = 50.85 किलो</code></li>
                    </ul>
                </li>
                 <li><strong>परिणाम:</strong> आपको 3.0% वसा वाला 100 किलो दूध प्राप्त करने के लिए <strong>49.15 किलो</strong> 6.0% वसा वाला दूध और <strong>50.85 किलो</strong> 0.1% वसा वाला स्किम्ड दूध मिलाना होगा।</li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">औद्योगिक मानकीकरण प्रक्रिया</h3>
            <p>एक आधुनिक डेयरी संयंत्र में, मानकीकरण अक्सर एक स्वचालित, इन-लाइन प्रक्रिया होती है जो क्रीम विभाजक के साथ एकीकृत होती है। यह बड़ी मात्रा में दूध का निरंतर और अत्यधिक सटीक मानकीकरण करने की अनुमति देती है।</p>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>पृथक्करण:</strong> कच्चे दूध को पहले से गरम (40-45°C) किया जाता है और एक केन्द्रापसारक क्रीम विभाजक में डाला जाता है। विभाजक दूध को दो धाराओं में विभाजित करता है: स्किम्ड दूध (बहुत कम वसा के साथ, जैसे, 0.05%) और क्रीम (उच्च वसा के साथ, जैसे, 40%)।</li>
                <li><strong>वास्तविक समय विश्लेषण:</strong> कच्चे दूध इनलेट, स्किम्ड दूध आउटलेट और क्रीम आउटलेट पर इन-लाइन सेंसर लगाए जाते हैं। ये सेंसर वास्तविक समय में प्रत्येक धारा की वसा सामग्री (और कभी-कभी प्रोटीन और कुल ठोस) को लगातार मापते हैं, अक्सर ऑप्टिकल या घनत्व-आधारित माप सिद्धांतों का उपयोग करते हैं।</li>
                <li><strong>PLC के माध्यम से गणना और नियंत्रण:</strong> इन सेंसरों से डेटा एक प्रोग्रामेबल लॉजिक कंट्रोलर (PLC) में फीड किया जाता है। PLC को अंतिम मानकीकृत दूध के लिए लक्ष्य वसा प्रतिशत (जैसे, टोन्ड दूध के लिए 3.0%) के साथ प्रोग्राम किया जाता है। आने वाले कच्चे दूध की वसा सामग्री और अलग-अलग धाराओं की वसा सामग्री के आधार पर, PLC लगातार गणना करता है कि लक्ष्य को प्राप्त करने के लिए स्किम्ड दूध के साथ कितनी क्रीम को फिर से मिलाना होगा।
                <br/><strong>वैज्ञानिक कारण:</strong> यह निरंतर गणना प्रणाली को कच्चे दूध की वसा सामग्री में किसी भी मामूली उतार-चढ़ाव के लिए तुरंत अनुकूल होने की अनुमति देती है, यह सुनिश्चित करते हुए कि अंतिम आउटपुट पूरी तरह से सुसंगत बना रहे।</li>
                <li><strong>स्वचालित पुनः मिश्रण:</strong> एक मॉड्यूलेटिंग नियंत्रण वाल्व, जिसे PLC द्वारा नियंत्रित किया जाता है, क्रीम लाइन पर रखा जाता है। यह वाल्व ठीक से उस क्रीम के प्रवाह को समायोजित करता है जिसे स्किम्ड दूध लाइन में वापस मिलाया जाता है। यदि सिस्टम यह पता लगाता है कि मानकीकृत दूध की वसा सामग्री भटक रही है, तो यह इसे ठीक करने के लिए तुरंत क्रीम वाल्व को समायोजित करता है।</li>
                <li><strong>अतिरिक्त क्रीम:</strong> मानकीकरण के लिए आवश्यक नहीं होने वाली क्रीम को एक अलग भंडारण टैंक में भेज दिया जाता है और इसका उपयोग मक्खन, घी या बाजार क्रीम जैसे अन्य उत्पादों के लिए किया जा सकता है।</li>
            </ol>
            <p class="mt-4">यह स्वचालित, इन-लाइन प्रणाली अत्यधिक कुशल है, बड़े मिश्रण टैंकों की आवश्यकता को कम करती है, मानवीय त्रुटि को कम करती है, और यह सुनिश्चित करती है कि दूध के हर पैकेट में लेबल पर बताई गई सटीक संरचना हो।</p>
        `
    }
};

