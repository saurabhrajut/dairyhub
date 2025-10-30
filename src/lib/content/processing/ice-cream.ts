
export const iceCreamContent = {
    en: {
        title: "Ice Cream & Frozen Dessert Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Ice Cream & Frozen Desserts</h3>
            <p>Ice cream is a complex frozen dessert, technically classified as a frozen foam. Its structure consists of ice crystals, air cells, fat globules, and an unfrozen liquid phase (serum) containing dissolved sugars and milk solids. The art and science of ice cream making lie in controlling the formation and size of these components to achieve a smooth, creamy texture and a desirable eating experience.</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Ice Cream vs. Frozen Dessert: The Key Difference</h2>
            <p>The primary distinction between "Ice Cream" and "Frozen Dessert" in the Indian context lies in the <strong>source of fat</strong> used. While their production processes are very similar, this single difference in ingredients has significant implications for labeling, cost, and final product characteristics.</p>
            <ul>
                <li><strong>Ice Cream:</strong> Must exclusively use <strong>milk fat</strong> from dairy sources like cream and butter.</li>
                <li><strong>Frozen Dessert:</strong> Uses <strong>vegetable fat/oil</strong> (like palm oil or coconut oil) to partially or wholly replace milk fat.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards: Ice Cream vs. Frozen Dessert</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) has distinct standards for both categories.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <caption class="text-sm text-muted-foreground mb-2">Comparison of FSSAI Standards for the standard category</caption>
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Ice Cream / Kulfi</th>
                            <th class="p-2 border">Frozen Dessert</th>
                            <th class="p-2 border">Significance of Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fat Source</strong></td>
                            <td class="p-2 border font-semibold text-green-700">Milk Fat only</td>
                            <td class="p-2 border font-semibold text-red-700">Vegetable Oil/Fat</td>
                            <td class="p-2 border">This is the defining legal difference.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Content (min, %)</strong></td>
                            <td class="p-2 border">10.0%</td>
                            <td class="p-2 border">10.0%</td>
                            <td class="p-2 border">The minimum total fat percentage is the same for the standard category.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Protein (min, %)</strong></td>
                            <td class="p-2 border">3.5%</td>
                            <td class="p-2 border">3.5%</td>
                            <td class="p-2 border">Both must contain a minimum amount of milk protein from milk solids.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">36.0%</td>
                            <td class="p-2 border">36.0%</td>
                            <td class="p-2 border">Total solids contribute to the body and texture.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        subTopics: {
            iceCream: {
                title: "A. Processing of Ice Cream (Milk Fat Based)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Ice Cream</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception (Cream, Milk, etc.) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Ingredient Blending (Milk, Cream, Sugar, Stabilizers, etc.) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (e.g., 80°C for 25 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (at high pressure) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling & Aging (at 4°C for 4-24 hours) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Flavor & Color Addition</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Freezing & Aeration (Overrun)</strong></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Addition of Inclusions (Fruits, Nuts, etc.)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Hardening (at -23°C to -30°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage & Distribution</div>
                    </div>
                     <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Ice Cream Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Ingredient Blending (oPRP):</strong> The process starts by blending the liquid ingredients (milk, cream) and then mixing in the dry ingredients (sugar, milk powder, stabilizers, emulsifiers). This is an <strong>oPRP</strong> as accurate weighing and thorough mixing are essential for the consistency and quality of the final product.</li>
                        <li><strong>Pasteurization (CCP-1):</strong> The mix is pasteurized (e.g., 80°C for 25 seconds) to destroy all pathogenic bacteria, making it a <strong>Critical Control Point (CCP-1)</strong>. The high fat and sugar content provides a protective effect to microorganisms, thus requiring a slightly higher temperature than standard milk pasteurization. This step also helps to hydrate proteins and stabilizers, which improves the body and texture of the ice cream.</li>
                        <li><strong>Homogenization (oPRP):</strong> The hot mix is homogenized at high pressure to break down fat globules into very small, uniform sizes (<1 micron). This is a critical <strong>oPRP</strong> that prevents the fat from separating out (creaming) and contributes to a smoother texture and richer mouthfeel.
                            <br/><strong>Scientific Reason & Pressures:</strong> A two-stage process is typically used.
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>First Stage (2000-2500 PSI / 135-170 Bar):</strong> This high pressure forces the mix through a small gap, shearing the large fat globules into very small ones, creating a stable emulsion.</li>
                                <li><strong>Second Stage (500 PSI / 35 Bar):</strong> This lower pressure stage is crucial to break up any clumps or clusters of the newly formed small fat globules that may have formed after the first stage. This prevents 're-agglomeration' and ensures a uniform, smooth consistency without a thick, viscous texture.</li>
                            </ul>
                        </li>
                        <li><strong>Aging (oPRP):</strong> The mix is cooled to around 4°C and aged for at least 4 hours. During this <strong>oPRP</strong>, several crucial physicochemical changes occur: the milk fat begins to crystallize, which is essential for the structure-building process during freezing; the proteins and stabilizers fully hydrate, increasing mix viscosity; and the emulsifiers adsorb to the fat globule surface, preparing them for partial destabilization during freezing. This results in improved whipping properties, better air incorporation (overrun), and a smoother final texture.</li>
                        <li><strong>Flavor & Color Addition:</strong> After aging, the desired liquid flavors and colors are added to the mix just before it enters the freezer. This ensures the flavors are fresh and not degraded by the pasteurization heat. Flavors can be natural (fruit extracts), nature-identical, or artificial.</li>
                        <li><strong>Freezing and Aeration:</strong> The aged mix is frozen in a continuous freezer that scrapes the frozen layer off the cold barrel walls while simultaneously whipping air into the mix. This is where <strong>partial coalescence</strong> of the fat globules occurs—the semi-solid fat globules, destabilized by the emulsifiers and shear forces, clump together to form a three-dimensional network that stabilizes the air cells. The amount of air incorporated is called 'overrun' and is crucial for the final texture and density.</li>
                        <li><strong>Hardening (CCP-2):</strong> The semi-frozen ice cream (at about -5°C) is packaged and then rapidly frozen in a hardening tunnel at very low temperatures (-23°C to -30°C). This is a <strong>Critical Control Point (CCP-2)</strong> because rapid freezing is essential to freeze the remaining water into very small ice crystals. Slow hardening would lead to large, coarse ice crystals, resulting in an icy texture. This step ensures the final product is stable and has the desired smooth texture.</li>
                    </ol>
                `
            },
            frozenDessert: {
                title: "B. Processing of Frozen Dessert (Vegetable Fat Based)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Frozen Dessert</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Material Reception (Milk Solids, Vegetable Fat, etc.) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Ingredient Blending (Water, Milk Solids, Vegetable Fat, Sugar, etc.) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (e.g., 80°C for 25 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (at high pressure) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling & Aging (at 4°C for 4-24 hours) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Flavor & Color Addition</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Freezing & Aeration (Overrun)</strong></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Addition of Inclusions (Fruits, Nuts, etc.)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Hardening (at -23°C to -30°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage & Distribution</div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Frozen Dessert Processing Steps</h3>
                    <p>The processing of frozen dessert is nearly identical to that of ice cream. The key difference lies in the initial blending stage, where vegetable fat is used instead of milk fat.</p>
                     <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>Ingredient Blending (oPRP):</strong> The process starts by blending water, milk solids (like skim milk powder), vegetable fat, sugar, stabilizers, and emulsifiers. This is an <strong>oPRP</strong>. The choice of vegetable fat (e.g., coconut oil, palm kernel oil) is critical as its melting profile will significantly affect the final texture and mouthfeel of the dessert.</li>
                        <li><strong>Pasteurization (CCP-1):</strong> The mix is pasteurized to ensure safety, making it a <strong>Critical Control Point (CCP-1)</strong>.</li>
                        <li><strong>Homogenization (oPRP):</strong> This step is an <strong>oPRP</strong> that creates a stable emulsion between the vegetable fat and the aqueous phase. The two-stage pressure system (e.g., 2000-2500 PSI followed by 500 PSI) is used for the same reasons as in ice cream.</li>
                        <li><strong>Aging (oPRP):</strong> Similar to ice cream, this <strong>oPRP</strong> allows the vegetable fat to crystallize and the other ingredients to hydrate fully.</li>
                        <li><strong>Flavor & Color Addition:</strong> Flavors and colors are added to the aged mix before freezing.</li>
                        <li><strong>Freezing and Aeration:</strong> Air is whipped into the mix while it is being frozen to create the desired overrun and light texture.</li>
                        <li><strong>Hardening (CCP-2):</strong> Rapid freezing in a hardening tunnel is a <strong>Critical Control Point (CCP-2)</strong> to ensure a smooth final product by keeping ice crystals small.</li>
                    </ol>
                `
            }
        }
    },
    hi: {
        title: "आइसक्रीम और फ्रोजन डेजर्ट की प्रोसेसिंग",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">आइसक्रीम और फ्रोजन डेसर्ट का परिचय</h3>
            <p>आइसक्रीम एक जटिल (complex) फ्रोजन डेजर्ट है, जिसे तकनीकी रूप से एक फ्रोजन फोम के रूप में वर्गीकृत किया जाता है। इसकी संरचना में बर्फ के क्रिस्टल, हवा की कोशिकाएं, वसा के ग्लोब्यूल्स, और एक बिना जमा हुआ तरल चरण (सीरम) होता है जिसमें घुली हुई चीनी और दूध के ठोस पदार्थ होते हैं। आइसक्रीम बनाने की कला और विज्ञान इन घटकों के गठन और आकार को नियंत्रित करने में निहित है ताकि एक चिकनी, मलाईदार बनावट और एक वांछनीय खाने का अनुभव प्राप्त किया जा सके।</p>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">आइसक्रीम बनाम फ्रोजन डेजर्ट: मुख्य अंतर</h2>
            <p>"आइसक्रीम" और "फ्रोजन डेजर्ट" के बीच प्राथमिक अंतर इस्तेमाल किए गए <strong>वसा के स्रोत (source of fat)</strong> में है। जबकि उनकी उत्पादन प्रक्रियाएं बहुत समान हैं, सामग्री में यह एक अंतर लेबलिंग, लागत और अंतिम उत्पाद की विशेषताओं के लिए महत्वपूर्ण प्रभाव डालता है।</p>
            <ul>
                <li><strong>आइसक्रीम:</strong> इसमें विशेष रूप से <strong>दूध की वसा (milk fat)</strong> का उपयोग होना चाहिए, जैसे क्रीम और मक्खन से।</li>
                <li><strong>फ्रोजन डेजर्ट:</strong> इसमें दूध की वसा को आंशिक या पूरी तरह से <strong>वनस्पति वसा/तेल (vegetable fat/oil)</strong> (जैसे ताड़ का तेल या नारियल का तेल) से बदल दिया जाता है।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI मानक: आइसक्रीम बनाम फ्रोजन डेजर्ट</h3>
            <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) ने दोनों श्रेणियों के लिए अलग-अलग मानक निर्धारित किए हैं।</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <caption class="text-sm text-muted-foreground mb-2">FSSAI मानकों की तुलना (मानक श्रेणी के लिए)</caption>
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">पैरामीटर</th>
                            <th class="p-2 border">आइसक्रीम / कुल्फी</th>
                            <th class="p-2 border">फ्रोजन डेजर्ट</th>
                            <th class="p-2 border">अंतर का महत्व</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>वसा का स्रोत</strong></td>
                            <td class="p-2 border font-semibold text-green-700">केवल दूध वसा</td>
                            <td class="p-2 border font-semibold text-red-700">वनस्पति तेल/वसा</td>
                            <td class="p-2 border">यह परिभाषित कानूनी अंतर है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>वसा सामग्री (न्यूनतम, %)</strong></td>
                            <td class="p-2 border">10.0%</td>
                            <td class="p-2 border">10.0%</td>
                            <td class="p-2 border">मानक श्रेणी के लिए कुल वसा प्रतिशत समान है।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>दूध प्रोटीन (न्यूनतम, %)</strong></td>
                            <td class="p-2 border">3.5%</td>
                            <td class="p-2 border">3.5%</td>
                            <td class="p-2 border">दोनों में दूध के ठोस पदार्थों से न्यूनतम दूध प्रोटीन की मात्रा होनी चाहिए।</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>कुल ठोस (न्यूनतम, %)</strong></td>
                            <td class="p-2 border">36.0%</td>
                            <td class="p-2 border">36.0%</td>
                            <td class="p-2 border">कुल ठोस पदार्थ बनावट और शरीर में योगदान करते हैं।</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        subTopics: {
            iceCream: {
                title: "A. आइसक्रीम की प्रसंस्करण (दूध वसा आधारित)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">आइसक्रीम के लिए प्रसंस्करण प्रवाह संचित्र</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध की प्राप्ति (क्रीम, दूध, आदि) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">सामग्री का सम्मिश्रण (दूध, क्रीम, चीनी, स्टेबलाइजर्स, आदि) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>पाश्चुरीकरण (जैसे, 80°C 25 सेकंड के लिए)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">समरूपता (उच्च दबाव पर) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">शीतलन और एजिंग (4°C पर 4-24 घंटे) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">स्वाद और रंग मिलाना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>फ्रीजिंग और एération (ओवररन)</strong></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">शामिल करना (फल, मेवे, आदि)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>हार्डनिंग (-23°C से -30°C पर)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">भंडारण और वितरण</div>
                    </div>
                     <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">आइसक्रीम प्रसंस्करण चरणों का विस्तृत विवरण</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>सामग्री का सम्मिश्रण (oPRP):</strong> प्रक्रिया तरल सामग्री (दूध, क्रीम) को मिलाने और फिर सूखी सामग्री (चीनी, दूध पाउडर, स्टेबलाइजर्स, इमल्सीफायर) को मिलाने से शुरू होती है। यह एक <strong>oPRP</strong> है क्योंकि सटीक वजन और संपूर्ण मिश्रण अंतिम उत्पाद की स्थिरता और गुणवत्ता के लिए आवश्यक है।</li>
                        <li><strong>पाश्चुरीकरण (CCP-1):</strong> मिश्रण को पाश्चुरीकृत किया जाता है (जैसे, 80°C 25 सेकंड के लिए) ताकि सभी रोगजनक बैक्टीरिया नष्ट हो जाएं, जिससे यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> बन जाता है। उच्च वसा और चीनी सामग्री सूक्ष्मजीवों को एक सुरक्षात्मक प्रभाव प्रदान करती है, इसलिए मानक दूध पाश्चुरीकरण की तुलना में थोड़ा अधिक तापमान की आवश्यकता होती है। यह कदम प्रोटीन और स्टेबलाइजर्स को हाइड्रेट करने में भी मदद करता है, जो आइसक्रीम के शरीर और बनावट में सुधार करता है।</li>
                        <li><strong>समरूपता (oPRP):</strong> गर्म मिश्रण को उच्च दबाव पर समरूप किया जाता है ताकि वसा के ग्लोब्यूल्स को बहुत छोटे, समान आकार (<1 माइक्रोन) में तोड़ा जा सके। यह एक महत्वपूर्ण <strong>oPRP</strong> है जो वसा के पृथक्करण (क्रीमिंग) को रोकता है और एक चिकनी बनावट और समृद्ध माउथफिल में योगदान देता है।
                            <br/><strong>वैज्ञानिक कारण और दबाव:</strong> आमतौर पर दो-चरण की प्रक्रिया का उपयोग किया जाता है।
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>पहला चरण (2000-2500 PSI / 135-170 Bar):</strong> यह उच्च दबाव मिश्रण को एक संकीर्ण अंतराल से गुजरने के लिए मजबूर करता है, बड़े वसा ग्लोब्यूल्स को बहुत छोटे में कतरता है, एक स्थिर पायस बनाता है।</li>
                                <li><strong>दूसरा चरण (500 PSI / 35 Bar):</strong> यह कम दबाव वाला चरण पहले चरण के बाद बन सकने वाले नए छोटे वसा ग्लोब्यूल्स के किसी भी गुच्छे या समूहों को तोड़ने के लिए महत्वपूर्ण है। यह 'पुनः-एकत्रीकरण' को रोकता है और एक मोटी, चिपचिपी बनावट के बिना एक समान, चिकनी स्थिरता सुनिश्चित करता है।</li>
                            </ul>
                        </li>
                        <li><strong>एजिंग (oPRP):</strong> मिश्रण को लगभग 4°C तक ठंडा किया जाता है और कम से कम 4 घंटे तक एज किया जाता है। इस <strong>oPRP</strong> के दौरान, कई महत्वपूर्ण भौतिक-रासायनिक परिवर्तन होते हैं: दूध वसा क्रिस्टलीकृत होने लगता है, जो ठंड के दौरान संरचना-निर्माण प्रक्रिया के लिए आवश्यक है; प्रोटीन और स्टेबलाइजर्स पूरी तरह से हाइड्रेट होते हैं, जिससे मिश्रण की चिपचिपाहट बढ़ जाती है; और इमल्सीफायर वसा ग्लोब्यूल की सतह पर सोख लेते हैं, उन्हें ठंड के दौरान आंशिक अस्थिरता के लिए तैयार करते हैं। इसके परिणामस्वरूप बेहतर व्हिपिंग गुण, बेहतर हवा समावेश (ओवररन), और एक चिकनी अंतिम बनावट होती है।</li>
                        <li><strong>स्वाद और रंग मिलाना:</strong> एजिंग के बाद, वांछित तरल स्वाद और रंग मिश्रण में फ्रीजर में प्रवेश करने से ठीक पहले मिलाए जाते हैं। यह सुनिश्चित करता है कि स्वाद ताजा हैं और पाश्चुरीकरण गर्मी से खराब नहीं हुए हैं।</li>
                        <li><strong>फ्रीजिंग और एération:</strong> वृद्ध मिश्रण को एक सतत फ्रीजर में जमाया जाता है जो ठंडे बैरल की दीवारों से जमी हुई परत को खुरचता है और साथ ही मिश्रण में हवा को फेंटता है। यहीं पर वसा ग्लोब्यूल्स का <strong>आंशिक सहसंयोजन</strong> होता है - अर्ध-ठोस वसा ग्लोब्यूल्स, जो इमल्सीफायर और कतरनी बलों द्वारा अस्थिर होते हैं, एक त्रि-आयामी नेटवर्क बनाने के लिए एक साथ गुच्छे बनाते हैं जो हवा की कोशिकाओं को स्थिर करता है। शामिल हवा की मात्रा को 'ओवररन' कहा जाता है और यह अंतिम बनावट और घनत्व के लिए महत्वपूर्ण है।</li>
                        <li><strong>हार्डनिंग (CCP-2):</strong> अर्ध-जमे हुए आइसक्रीम (लगभग -5°C पर) को पैक किया जाता है और फिर बहुत कम तापमान (-23°C से -30°C) पर एक हार्डनिंग टनल में तेजी से जमाया जाता है। यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है क्योंकि तेजी से जमना शेष पानी को बहुत छोटे बर्फ के क्रिस्टल में जमाने के लिए आवश्यक है। धीमी गति से सख्त होने से बड़े, मोटे बर्फ के क्रिस्टल बन जाएंगे, जिसके परिणामस्वरूप एक बर्फीली बनावट होगी। यह कदम सुनिश्चित करता है कि अंतिम उत्पाद स्थिर है और वांछित चिकनी बनावट है।</li>
                    </ol>
                `
            },
            frozenDessert: {
                title: "B. फ्रोजन डेजर्ट की प्रसंस्करण (वनस्पति वसा आधारित)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">फ्रोजन डेजर्ट के लिए प्रसंस्करण प्रवाह संचित्र</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">कच्चे माल की प्राप्ति (दूध के ठोस, वनस्पति वसा, आदि) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">सामग्री का सम्मिश्रण (पानी, दूध के ठोस, वनस्पति वसा, चीनी, आदि) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>पाश्चुरीकरण (जैसे, 80°C 25 सेकंड के लिए)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">समरूपता (उच्च दबाव पर) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">शीतलन और एजिंग (4°C पर 4-24 घंटे) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">स्वाद और रंग मिलाना</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>फ्रीजिंग और एération (ओवररन)</strong></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">शामिल करना (फल, मेवे, आदि)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">पैकेजिंग <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>हार्डनिंग (-23°C से -30°C पर)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">भंडारण और वितरण</div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">फ्रोजन डेजर्ट प्रसंस्करण चरणों का विस्तृत विवरण</h3>
                    <p>फ्रोजन डेजर्ट की प्रसंस्करण आइसक्रीम के लगभग समान है। मुख्य अंतर प्रारंभिक मिश्रण चरण में है, जहाँ दूध की वसा के बजाय वनस्पति वसा का उपयोग किया जाता है।</p>
                     <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li><strong>सामग्री का सम्मिश्रण (oPRP):</strong> प्रक्रिया पानी, दूध के ठोस (जैसे स्किम्ड दूध पाउडर), वनस्पति वसा, चीनी, स्टेबलाइजर्स और इमल्सीफायर को मिलाने से शुरू होती है। यह एक <strong>oPRP</strong> है। वनस्पति वसा का चुनाव (जैसे, नारियल का तेल, ताड़ का तेल) महत्वपूर्ण है क्योंकि इसका पिघलने का प्रोफाइल अंतिम मिठाई की बनावट और माउथफिल को महत्वपूर्ण रूप से प्रभावित करेगा।</li>
                        <li><strong>पाश्चुरीकरण (CCP-1):</strong> मिश्रण को सुरक्षा सुनिश्चित करने के लिए पाश्चुरीकृत किया जाता है, जिससे यह एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> बन जाता है।</li>
                        <li><strong>समरूपता (oPRP):</strong> यह कदम एक <strong>oPRP</strong> है जो वनस्पति वसा और जलीय चरण के बीच एक स्थिर पायस बनाता है। आइसक्रीम की तरह ही दो-चरण दबाव प्रणाली (जैसे, 2000-2500 PSI के बाद 500 PSI) का उपयोग किया जाता है।</li>
                        <li><strong>एजिंग (oPRP):</strong> आइसक्रीम की तरह, यह <strong>oPRP</strong> वनस्पति वसा को क्रिस्टलीकृत करने और अन्य अवयवों को पूरी तरह से हाइड्रेट करने की अनुमति देता है।</li>
                        <li><strong>स्वाद और रंग मिलाना:</strong> एजिंग के बाद फ्रीजिंग से पहले स्वाद और रंग मिलाए जाते हैं।</li>
                        <li><strong>फ्रीजिंग और एération:</strong> वांछित ओवररन और हल्की बनावट बनाने के लिए मिश्रण को जमाते समय उसमें हवा को फेंटा जाता है।</li>
                        <li><strong>हार्डनिंग (CCP-2):</strong> एक हार्डनिंग टनल में तेजी से जमना एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है ताकि बर्फ के क्रिस्टल को छोटा रखकर एक चिकना अंतिम उत्पाद सुनिश्चित हो सके।</li>
                    </ol>
                `
            }
        }
    }
}

