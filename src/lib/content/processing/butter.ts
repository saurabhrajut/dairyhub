
export const butterContent = {
    en: {
        title: "Butter Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Butter</h3>
            <p>Butter is a fat-rich dairy product made by churning fresh or fermented cream or milk. It is primarily a water-in-oil emulsion, a result of the inversion of the oil-in-water emulsion of cream. Its characteristic flavor, texture, and nutritional value make it a staple in cuisines worldwide. The processing of butter is a classic dairy operation that involves a fascinating phase inversion process.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Butter</h3>
            <p>In India, the Food Safety and Standards Authority of India (FSSAI) primarily defines two categories of butter, mainly differing in their composition and intended use.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Table Butter</th>
                            <th class="p-2 border">White Butter / Cooking Butter</th>
                            <th class="p-2 border">Key Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min, % m/m)</strong></td>
                            <td class="p-2 border">80.0</td>
                            <td class="p-2 border">76.0</td>
                            <td class="p-2 border">Table butter has a higher minimum fat content, making it richer.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, % m/m)</strong></td>
                            <td class="p-2 border">16.0</td>
                            <td class="p-2 border">- (Not specified)</td>
                            <td class="p-2 border">Moisture is strictly controlled in table butter for better shelf life and consistency.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Common Salt (max, % m/m)</strong></td>
                            <td class="p-2 border">3.0</td>
                            <td class="p-2 border">- (Not specified)</td>
                            <td class="p-2 border">Table butter is typically salted for flavor and preservation, while white butter is often unsalted.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (max, % m/m)</strong></td>
                            <td class="p-2 border">2.0</td>
                            <td class="p-2 border">- (Not specified)</td>
                            <td class="p-2 border">This refers to the protein and lactose content, which is limited in table butter.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Butter with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Butter Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Chilling <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Cream Standardization (35-40% Fat) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (95°C or higher)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling & Aging (for Fat Crystallization)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><em>Optional:</em> Inoculation & Ripening (for Cultured Butter)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Cooling to Churning Temperature (8-12°C)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Churning (Phase Inversion)</strong></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Buttermilk Draining</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Washing of Butter Grains</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Salting & Working (Kneading) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage (&lt;5°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Cream Separation and Standardization (PRP & oPRP):</strong>
                    <p>The process begins with high-quality raw milk (a <strong>PRP</strong>). It's pre-heated to 40-45°C to liquefy fat for efficient separation via a centrifugal separator. Based on <strong>Stoke's Law</strong> and the density difference between fat (~0.93 g/cm³) and skim milk (~1.036 g/cm³), the cream is separated and then standardized, usually to 35-40% fat. This is an <strong>oPRP</strong> for product consistency.</p>
                </li>
                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>The cream is pasteurized at a higher temperature than milk (e.g., 95°C) to ensure safety. The high fat content provides a protective effect for microorganisms, necessitating this intense heat treatment. This is a <strong>Critical Control Point (CCP-1)</strong>.</p>
                </li>
                <li><strong>Cooling, Aging, and Ripening:</strong>
                    <p>This stage is crucial for developing both texture and flavor. The cream is cooled and aged to allow for <strong>fat crystallization</strong>. The fat inside the globules needs to partially solidify. A specific ratio of solid to liquid fat is essential for the churning process to work correctly. This aging is critical for both sweet cream and cultured butter.</p>
                    <p>For <strong>Cultured Butter</strong>, an additional step of ripening is performed. A specific starter culture (lactic acid bacteria) is added to the cream, which is then held at a ripening temperature (e.g., 20-21°C) for several hours. During this time, the bacteria ferment lactose to produce lactic acid (which adds a tangy flavor) and citrate to produce aromatic compounds like <strong>diacetyl</strong>, giving the characteristic rich, 'buttery' flavor. For <strong>Sweet Cream Butter</strong>, this ripening step is skipped, and the cream is aged only for fat crystallization.</p>
                </li>
                <li><strong>Cooling to Churning Temperature (oPRP):</strong>
                    <p>After aging/ripening, the cream is cooled to the optimal churning temperature, which is typically between <strong>8-12°C</strong>. This temperature control is an <strong>oPRP</strong> as it is critical for achieving the correct butter consistency. If the temperature is too high, the butter will be soft and greasy; if too low, the fat will be too hard, and churning will be inefficient.</p>
                </li>
                <li><strong>Churning (Phase Inversion):</strong>
                    <p>This is the core of butter making. The aged and cooled cream is vigorously agitated in a churner. This intense mechanical action disrupts the fragile Milk Fat Globule Membranes (MFGM). The now 'free' liquid fat begins to coalesce. As churning continues, this coalescence becomes so extensive that a <strong>phase inversion</strong> occurs: the oil-in-water emulsion of cream breaks and inverts into a water-in-oil emulsion of butter. The fat becomes the continuous phase, entrapping the water droplets. This process separates the mixture into solid butter grains and the liquid buttermilk.</p>
                </li>
                <li><strong>Washing and Salting:</strong>
                    <p>The buttermilk is drained off. The butter grains are then washed with chilled, pasteurized water to remove any remaining buttermilk, which improves the butter's shelf life. After washing, salt is added for flavor and preservation.</p>
                </li>
                <li><strong>Working (oPRP):</strong>
                    <p>The salted butter grains are kneaded or 'worked'. This is a critical <strong>oPRP</strong> that compacts the butter grains into a continuous mass, evenly distributes the salt and moisture, and disperses the moisture into very fine droplets. Proper working is essential for the final texture, preventing a 'leaky' or mottled appearance.</p>
                </li>
                <li><strong>Packaging and Cold Storage (PRP & CCP-2):</strong>
                    <p>Packaging is a <strong>PRP</strong> to protect the butter from light and oxygen. The finished butter is immediately packaged and stored at refrigeration temperatures (&lt;5°C). This is a <strong>Critical Control Point (CCP-2)</strong> to maintain quality and prevent microbial growth.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "मक्खन (Butter) की प्रोसेसिंग",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">मक्खन का परिचय</h3>
            <p>मक्खन एक वसा युक्त डेयरी उत्पाद है जो ताजी या किण्वित क्रीम या दूध को मथ कर बनाया जाता है। यह मुख्य रूप से एक पानी-में-तेल इमल्शन है, जो क्रीम के तेल-में-पानी इमल्शन के उलटने का परिणाम है। इसका विशिष्ट स्वाद, बनावट और पोषण मूल्य इसे दुनिया भर के व्यंजनों में एक प्रमुख स्थान देता है। मक्खन की प्रसंस्करण एक क्लासिक डेयरी ऑपरेशन है जिसमें एक रोचक चरण उलटा प्रक्रिया शामिल है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार मक्खन के मानक</h3>
            <p>भारत में, भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) मुख्य रूप से दो श्रेणियों में मक्खन को परिभाषित करता है, जो मुख्य रूप से उनकी संरचना और उपयोग में भिन्न होते हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">टेबल बटर</th>
                            <th class="p-2 border">सफेद मक्खन / कुकिंग बटर</th>
                            <th class="p-2 border">मुख्य अंतर</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>दूध वसा (न्यूनतम, % मी/मी)</strong></td>
                            <td class="p-2 border">80.0</td>
                            <td class="p-2 border">76.0</td>
                            <td class="p-2 border">टेबल बटर में न्यूनतम वसा सामग्री अधिक होती है, जिससे यह अधिक समृद्ध होता है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>नमी (अधिकतम, % मी/मी)</strong></td>
                            <td class="p-2 border">16.0</td>
                            <td class="p-2 border">- (निर्दिष्ट नहीं)</td>
                            <td class="p-2 border">बेहतर शेल्फ जीवन और स्थिरता के लिए टेबल बटर में नमी को सख्ती से नियंत्रित किया जाता है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>साधारण नमक (अधिकतम, % मी/मी)</strong></td>
                            <td class="p-2 border">3.0</td>
                            <td class="p-2 border">- (निर्दिष्ट नहीं)</td>
                            <td class="p-2 border">टेबल बटर आमतौर पर स्वाद और संरक्षण के लिए नमकीन होता है, जबकि सफेद मक्खन अक्सर बिना नमक के होता है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>दूध के ठोस-गैर-वसा (अधिकतम, % मी/मी)</strong></td>
                            <td class="p-2 border">2.0</td>
                            <td class="p-2 border">- (निर्दिष्ट नहीं)</td>
                            <td class="p-2 border">यह प्रोटीन और लैक्टोज सामग्री को संदर्भित करता है, जो टेबल बटर में सीमित होता है।</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ मक्खन की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">मक्खन उत्पादन के लिए प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध की प्राप्ति और चिलिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">प्री-हीटिंग और क्रीम पृथक्करण <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">क्रीम मानकीकरण (35-40% वसा) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>पाश्चुरीकरण (95°C या अधिक)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">कूलिंग और एजिंग (वसा क्रिस्टलीकरण के लिए)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><em>वैकल्पिक:</em> इनोकुलेशन और राइपनिंग (कल्चर्ड बटर के लिए)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>मथने के तापमान तक ठंडा करना (8-12°C)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>मथना (चरण उलटा)</strong></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">छाछ निकालना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">मक्खन के दानों की धुलाई</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">नमक मिलाना और वर्किंग (गूंथना) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">कोल्ड स्टोरेज (&lt;5°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>क्रीम पृथक्करण और मानकीकरण (PRP & oPRP):</strong>
                    <p>यह प्रक्रिया उच्च गुणवत्ता वाले कच्चे दूध (एक <strong>PRP</strong>) से शुरू होती है। इसे 40-45°C तक पहले से गरम किया जाता है ताकि वसा को कुशल पृथक्करण के लिए पिघलाया जा सके। <strong>स्टोक्स के नियम</strong> और वसा (~0.93 ग्राम/सेमी³) और स्किम दूध (~1.036 ग्राम/सेमी³) के बीच घनत्व के अंतर के आधार पर, क्रीम को अलग किया जाता है और फिर आमतौर पर 35-40% वसा के लिए मानकीकृत किया जाता है। यह उत्पाद की स्थिरता के लिए एक <strong>oPRP</strong> है।</p>
                </li>
                <li><strong>पाश्चुरीकरण (CCP-1):</strong>
                    <p>क्रीम को दूध की तुलना में अधिक तापमान (जैसे, 95°C) पर पाश्चुरीकृत किया जाता है। उच्च वसा सामग्री सूक्ष्मजीवों के लिए एक सुरक्षात्मक तापीय प्रभाव प्रदान करती है, जिससे सुरक्षा सुनिश्चित करने के लिए इस तीव्र गर्मी उपचार की आवश्यकता होती है। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है।</p>
                </li>
                <li><strong>कूलिंग, एजिंग और राइपनिंग:</strong>
                    <p>यह चरण बनावट और स्वाद दोनों को विकसित करने के लिए महत्वपूर्ण है। क्रीम को ठंडा और वृद्ध किया जाता है ताकि <strong>वसा क्रिस्टलीकरण</strong> हो सके। ग्लोब्यूल्स के अंदर की वसा को आंशिक रूप से जमने की आवश्यकता होती है। मथने की प्रक्रिया के सही ढंग से काम करने के लिए ठोस से तरल वसा का एक विशिष्ट अनुपात आवश्यक है। यह एजिंग मीठी क्रीम और संवर्धित मक्खन दोनों के लिए महत्वपूर्ण है।</p>
                    <p><strong>संवर्धित मक्खन (Cultured Butter)</strong> के लिए, राइपनिंग का एक अतिरिक्त कदम किया जाता है। एक विशिष्ट स्टार्टर कल्चर (लैक्टिक एसिड बैक्टीरिया) को क्रीम में मिलाया जाता है, जिसे फिर एक पकने वाले तापमान (जैसे, 20-21°C) पर कई घंटों तक रखा जाता है। इस दौरान, बैक्टीरिया लैक्टोज को किण्वित करके लैक्टिक एसिड (जो एक तीखा स्वाद जोड़ता है) और साइट्रेट को <strong>डायसेटाइल</strong> जैसे सुगंधित यौगिकों का उत्पादन करने के लिए किण्वित करते हैं, जिससे विशिष्ट समृद्ध, 'मक्खन जैसा' स्वाद मिलता है। <strong>मीठी क्रीम मक्खन (Sweet Cream Butter)</strong> के लिए, इस राइपनिंग चरण को छोड़ दिया जाता है, और क्रीम को केवल वसा क्रिस्टलीकरण के लिए वृद्ध किया जाता है।</p>
                </li>
                <li><strong>मथने के तापमान तक ठंडा करना (oPRP):</strong>
                    <p>एजिंग/राइपनिंग के बाद, क्रीम को इष्टतम मथने के तापमान तक ठंडा किया जाता है, जो आमतौर पर <strong>8-12°C</strong> के बीच होता है। यह तापमान नियंत्रण एक <strong>oPRP</strong> है क्योंकि यह सही मक्खन की स्थिरता प्राप्त करने के लिए महत्वपूर्ण है। यदि तापमान बहुत अधिक है, तो मक्खन नरम और चिकना होगा; यदि बहुत कम है, तो वसा बहुत कठोर होगी, और मथना अक्षम होगा।</p>
                </li>
                <li><strong>मथना (चरण उलटा - Phase Inversion):</strong>
                    <p>यह मक्खन बनाने का मूल है। वृद्ध और ठंडी क्रीम को एक मथनी में जोर से हिलाया जाता है। यह गहन यांत्रिक क्रिया नाजुक दूध वसा ग्लोब्यूल झिल्ली (MFGM) को बाधित करती है। अब 'मुक्त' तरल वसा एक साथ मिलने लगती है। जैसे-जैसे मथना जारी रहता है, यह मिलना इतना व्यापक हो जाता है कि एक <strong>चरण उलटा</strong> होता है: क्रीम का तेल-में-पानी इमल्शन टूट जाता है और मक्खन के पानी-में-तेल इमल्शन में बदल जाता है। वसा निरंतर चरण बन जाता है, जो पानी की बूंदों को फंसाता है। यह प्रक्रिया मिश्रण को ठोस मक्खन के दानों और तरल छाछ में अलग करती है।</p>
                </li>
                <li><strong>धुलाई और नमक मिलाना:</strong>
                    <p>छाछ को निकाल दिया जाता है। फिर मक्खन के दानों को ठंडे, पाश्चुरीकृत पानी से धोया जाता है ताकि किसी भी शेष छाछ को हटाया जा सके, जो मक्खन के शेल्फ जीवन में सुधार करता है। धोने के बाद, स्वाद और संरक्षण के लिए नमक मिलाया जाता है।</p>
                </li>
                <li><strong>वर्किंग (गूंथना) (oPRP):</strong>
                    <p>नमकीन मक्खन के दानों को गूंथा या 'काम किया' जाता है। यह एक महत्वपूर्ण <strong>oPRP</strong> है जो मक्खन के दानों को एक निरंतर द्रव्यमान में संकुचित करता है, नमक और नमी को समान रूप से वितरित करता है, और नमी को बहुत महीन बूंदों में फैलाता है। अंतिम बनावट के लिए उचित वर्किंग आवश्यक है, जो 'लीक' या धब्बेदार दिखने से रोकता है।</p>
                </li>
                <li><strong>पैकेजिंग और कोल्ड स्टोरेज (PRP & CCP-2):</strong>
                    <p>पैकेजिंग मक्खन को प्रकाश और ऑक्सीजन से बचाने के लिए एक <strong>PRP</strong> है। तैयार मक्खन को तुरंत पैक किया जाता है और प्रशीतन तापमान (&lt;5°C) पर संग्रहीत किया जाता है। यह गुणवत्ता बनाए रखने और माइक्रोबियल विकास को रोकने के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है।</p>
                </li>
            </ol>
        `
    }
}

