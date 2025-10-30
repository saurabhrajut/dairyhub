
export const pasteurizationContent = {
    en: {
        title: "Pasteurization",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Pasteurization</h3>
            <p>Pasteurization is a critical heat treatment process used in the dairy industry to ensure the safety and extend the shelf life of milk and other liquid dairy products. It is named after the French scientist Louis Pasteur, who discovered that heating beverages could kill harmful microorganisms. The process involves heating milk to a specific temperature for a set period and then rapidly cooling it.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Objectives of Pasteurization</h3>
            <p>The goals of pasteurization are twofold and are of paramount importance for public health and commerce.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Public Health Safety (Primary Objective):</strong> The main goal is to make milk safe for human consumption by destroying all pathogenic (disease-causing) microorganisms. Raw milk can harbor dangerous bacteria such as <i>Mycobacterium tuberculosis</i> (causes tuberculosis), <i>Brucella</i> spp. (causes brucellosis), <i>Salmonella</i> (causes salmonellosis), <i>Listeria monocytogenes</i> (causes listeriosis), and pathogenic strains of <i>E. coli</i>. Pasteurization is specifically designed to eliminate these threats.</li>
                <li><strong>Extended Shelf Life (Secondary Objective):</strong> The process also destroys a large number of spoilage microorganisms (like psychrotrophic bacteria, yeasts, and molds). Additionally, the heat inactivates native milk enzymes like lipase, which can cause hydrolytic rancidity (a soapy off-flavor) during storage. By reducing the microbial load and inactivating enzymes, pasteurization significantly slows down the spoilage process and extends the refrigerated shelf life of the milk from a few hours to several days or weeks.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Common Pasteurization Methods</h3>
            <h4 class="font-semibold mt-4 mb-2">1. High-Temperature Short-Time (HTST) Pasteurization</h4>
            <p>This is the most common method used in modern, large-scale dairy plants for market milk due to its efficiency and energy-saving capabilities.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>72°C (161°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>15 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> This time-temperature combination is scientifically validated to be lethal to the most heat-resistant, non-spore-forming pathogen commonly found in milk, <i>Coxiella burnetii</i> (the agent causing Q-fever). By ensuring the destruction of this organism, it is guaranteed that all other less-resistant pathogens are also destroyed. The short duration of heat exposure minimizes thermal damage to the milk's nutritional and sensory properties (flavor, color). This continuous process is carried out in a Plate Heat Exchanger (PHE).</p>

            <h4 class="font-semibold mt-4 mb-2">2. Low-Temperature Long-Time (LTLT) or Batch Pasteurization</h4>
            <p>This is an older method, now primarily used for smaller batches or for products like some specialty cheeses and ice cream mixes where a batch process is more suitable.</p>
             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>63°C (145°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>30 minutes</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> The principle is the same as HTST—achieving a thermal kill of pathogens. The lower temperature requires a much longer holding time to achieve the same lethal effect. This process is carried out in a jacketed vat, where the milk is heated, held for the full duration, and then cooled. While effective, it is less energy-efficient and more time-consuming than HTST.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. The HTST Pasteurizer: Working Principle & Flow</h3>
            <p>An HTST pasteurizer is a sophisticated system designed for continuous, efficient heat treatment. Here is a step-by-step breakdown of its operation:</p>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">1. Balance Tank</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">2. Feed Pump</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">3. Regeneration Section (Heating)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">4. Heating Section</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded">5. Holding Tube (CCP)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded">6. Flow Diversion Valve (FDV)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">7. Regeneration Section (Cooling)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded">8. Cooling Section</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">9. Storage Tank</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>Balance Tank:</strong> The process begins here. It's a small tank that receives raw milk and maintains a constant head of pressure for the feed pump. <strong>Scientific Reason:</strong> It ensures a consistent, uninterrupted flow of milk into the pasteurizer, which is crucial for maintaining the correct flow rate through the holding tube.</li>
                <li><strong>Feed Pump:</strong> A centrifugal pump that draws milk from the balance tank and pushes it forward into the system.</li>
                <li><strong>Regeneration Section:</strong> This is the most energy-efficient part of the pasteurizer. Here, the cold incoming raw milk flows on one side of the plates, while the hot, already pasteurized milk flows on the other side in the opposite direction. <strong>Scientific Reason:</strong> Heat is transferred from the hot milk to the cold milk. This pre-heats the raw milk (e.g., from 4°C to ~57°C) for free, reducing the energy needed in the heating section, and simultaneously pre-cools the hot milk, reducing the energy needed for final cooling. Modern regenerators can recover up to 95% of the heat energy.</li>
                <li><strong>Heating Section:</strong> The pre-heated milk then flows to the heating section, where it is heated to the full pasteurization temperature (e.g., 72°C) using hot water as the heating medium.</li>
                <li><strong>Holding Tube:</strong> After heating, the milk flows through a long pipe of a specific length and diameter, known as the holding tube. <strong>Scientific Reason:</strong> This tube is precisely engineered so that the milk takes at least 15 seconds (the minimum holding time) to travel from one end to the other. The flow rate, controlled by the feed pump, and the tube's dimensions are critical for ensuring this CCP is met.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> Located at the end of the holding tube, the FDV is an automated, three-way valve that acts as a safety device. A temperature sensor continuously monitors the milk temperature. 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li>If the temperature is at or above the set point (e.g., 72°C), the valve allows the properly pasteurized milk to flow forward to the regeneration section.</li>
                        <li>If the temperature drops below the set point for any reason, the valve automatically diverts the under-processed milk back to the balance tank for reprocessing. This ensures that no under-pasteurized milk ever reaches the final product.</li>
                    </ul>
                </li>
                <li><strong>Regeneration Section (Cooling):</strong> The properly pasteurized hot milk flows back through the regeneration section, giving up its heat to the incoming raw milk and getting pre-cooled in the process (e.g., from 72°C down to ~20°C).</li>
                <li><strong>Cooling Section:</strong> The pre-cooled milk then enters the final cooling section, where it is chilled with cold water or glycol to its final storage temperature of less than 5°C.</li>
                <li><strong>Storage Tank:</strong> The fully processed, chilled milk is then sent to a sterile storage tank, ready for packaging.</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. Verification of Pasteurization: The Alkaline Phosphatase (ALP) Test</h3>
            <p>To ensure pasteurization was successful, a reliable verification test is needed. The Alkaline Phosphatase (ALP) test is the universally accepted method for this.</p>
            <p><strong>Scientific Principle:</strong> ALP is a natural enzyme found in raw milk. Coincidentally, its heat resistance is slightly greater than that of the most heat-resistant common pathogenic bacterium found in milk, <i>Coxiella burnetii</i> (the organism that causes Q-fever). This means that a time-temperature combination sufficient to destroy ALP will have certainly been sufficient to destroy all common pathogens.</p>
            <p><strong>The Test:</strong> The test works by providing a phosphate substrate to a milk sample. If active ALP is present (indicating improper pasteurization or raw milk contamination), it will cleave the phosphate group from the substrate, which then produces a color change. The absence of a color change (a negative result) confirms that pasteurization was successful. A positive ALP test means the product is unsafe and must not be released.</p>
        `
    },
    hi: {
        title: "पाश्चुरीकरण (Pasteurization)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">पाश्चुरीकरण का परिचय</h3>
            <p>पाश्चुरीकरण डेयरी उद्योग में उपयोग की जाने वाली एक महत्वपूर्ण गर्मी उपचार प्रक्रिया है जो दूध और अन्य तरल डेयरी उत्पादों की सुरक्षा सुनिश्चित करने और उनके शेल्फ जीवन को बढ़ाने के लिए है। इसका नाम फ्रांसीसी वैज्ञानिक लुई पाश्चर के नाम पर रखा गया है, जिन्होंने पाया कि पेय पदार्थों को गर्म करने से हानिकारक सूक्ष्मजीव मारे जा सकते हैं। इस प्रक्रिया में दूध को एक विशिष्ट तापमान पर एक निश्चित अवधि के लिए गर्म करना और फिर उसे तेजी से ठंडा करना शामिल है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. पाश्चुरीकरण के उद्देश्य</h3>
            <p>पाश्चुरीकरण के लक्ष्य दोहरे हैं और सार्वजनिक स्वास्थ्य और वाणिज्य के लिए अत्यंत महत्वपूर्ण हैं।</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>सार्वजनिक स्वास्थ्य सुरक्षा (प्राथमिक उद्देश्य):</strong> मुख्य लक्ष्य कच्चे दूध में मौजूद सभी रोगजनक (बीमारी पैदा करने वाले) सूक्ष्मजीवों को नष्ट करके दूध को मानव उपभोग के लिए सुरक्षित बनाना है। इसमें <i>माइकोबैक्टीरियम ट्यूबरकुलोसिस</i> (तपेदिक का कारण), <i>ब्रूसेला</i> एसपीपी (ब्रूसेलोसिस का कारण), <i>साल्मोनेला</i> (साल्मोनेलोसिस का कारण), <i>लिस्टेरिया मोनोसाइटोजेन्स</i> (लिस्टेरियोसिस का कारण), और <i>ई. कोलाई</i> के रोगजनक उपभेदों जैसे खतरनाक बैक्टीरिया शामिल हैं।</li>
                <li><strong>विस्तारित शेल्फ जीवन (द्वितीयक उद्देश्य):</strong> यह प्रक्रिया बड़ी संख्या में खराब करने वाले सूक्ष्मजीवों (जैसे साइकोट्रोफिक बैक्टीरिया, यीस्ट और मोल्ड्स) को भी नष्ट कर देती है। इसके अतिरिक्त, गर्मी देशी दूध एंजाइमों जैसे लाइपेस को निष्क्रिय कर देती है, जो भंडारण के दौरान हाइड्रोलाइटिक बासीपन (एक साबुन जैसा ऑफ-फ्लेवर) का कारण बन सकता है। माइक्रोबियल लोड को कम करके और एंजाइमों को निष्क्रिय करके, पाश्चुरीकरण खराब होने की प्रक्रिया को काफी धीमा कर देता है और दूध के प्रशीतित शेल्फ जीवन को कुछ घंटों से बढ़ाकर कई दिनों या हफ्तों तक कर देता है।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. सामान्य पाश्चुरीकरण के तरीके</h3>
            <h4 class="font-semibold mt-4 mb-2">1. उच्च तापमान कम समय (HTST) पाश्चुरीकरण</h4>
            <p>यह अपनी दक्षता और ऊर्जा-बचत क्षमताओं के कारण बाजार के दूध के लिए आधुनिक, बड़े पैमाने पर डेयरी संयंत्रों में सबसे आम तरीका है।</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>तापमान:</strong> कम से कम <strong>72°C (161°F)</strong></li>
                <li><strong>समय:</strong> कम से कम <strong>15 सेकंड</strong> के लिए</li>
            </ul>
            <p><strong>वैज्ञानिक कारण:</strong> यह समय-तापमान संयोजन वैज्ञानिक रूप से दूध में पाए जाने वाले सबसे गर्मी प्रतिरोधी, गैर-बीजाणु बनाने वाले रोगज़नक़, <i>कॉक्सिएला बर्नेटी</i> (क्यू-बुखार का कारक एजेंट) को मारने के लिए मान्य है। इस जीव के विनाश को सुनिश्चित करके, यह गारंटी है कि अन्य सभी कम-प्रतिरोधी रोगजनक भी नष्ट हो गए हैं। गर्मी के संपर्क की छोटी अवधि दूध के पोषण और संवेदी गुणों (स्वाद, रंग) को थर्मल क्षति को कम करती है। यह निरंतर प्रक्रिया एक प्लेट हीट एक्सचेंजर (PHE) में की जाती है।</p>

            <h4 class="font-semibold mt-4 mb-2">2. कम तापमान लंबा समय (LTLT) या बैच पाश्चुरीकरण</h4>
            <p>यह एक पुरानी विधि है, जो अब मुख्य रूप से छोटे बैचों या कुछ विशेष पनीर और आइसक्रीम मिश्रण जैसे उत्पादों के लिए उपयोग की जाती है जहाँ बैच प्रक्रिया अधिक उपयुक्त होती है।</p>
             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>तापमान:</strong> कम से कम <strong>63°C (145°F)</strong></li>
                <li><strong>समय:</strong> कम से कम <strong>30 मिनट</strong> के लिए</li>
            </ul>
            <p><strong>वैज्ञानिक कारण:</strong> सिद्धांत HTST के समान है - रोगजनकों का एक थर्मल किल प्राप्त करना। कम तापमान को समान घातक प्रभाव प्राप्त करने के लिए बहुत लंबे समय तक रखने की आवश्यकता होती है। यह प्रक्रिया एक जैकेटेड वैट में की जाती है, जहाँ दूध को ठंडा करने से पहले पूरी अवधि के लिए आवश्यक तापमान पर गर्म और रखा जाता है। प्रभावी होते हुए भी, यह HTST की तुलना में कम ऊर्जा-कुशल और अधिक समय लेने वाला है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. HTST पाश्चराइज़र: कार्य सिद्धांत और प्रवाह</h3>
            <p>एक HTST पाश्चराइज़र एक परिष्कृत प्रणाली है जिसे निरंतर, कुशल गर्मी उपचार के लिए डिज़ाइन किया गया है। यहाँ इसके संचालन का एक चरण-दर-चरण विवरण दिया गया है:</p>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">1. बैलेंस टैंक</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">2. फीड पंप</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">3. पुनर्जनन खंड (हीटिंग)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">4. हीटिंग सेक्शन</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded">5. होल्डिंग ट्यूब (CCP)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded">6. फ्लो डायवर्सन वाल्व (FDV)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">7. पुनर्जनन खंड (कूलिंग)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded">8. कूलिंग सेक्शन</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">9. स्टोरेज टैंक</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>बैलेंस टैंक:</strong> प्रक्रिया यहाँ से शुरू होती है। यह एक छोटा टैंक है जो कच्चा दूध प्राप्त करता है और फीड पंप के लिए एक स्थिर दबाव बनाए रखता है। <strong>वैज्ञानिक कारण:</strong> यह पाश्चराइज़र में दूध का एक सुसंगत, अबाधित प्रवाह सुनिश्चित करता है, जो होल्डिंग ट्यूब के माध्यम से सही प्रवाह दर बनाए रखने के लिए महत्वपूर्ण है।</li>
                <li><strong>फीड पंप:</strong> एक केन्द्रापसारक पंप जो बैलेंस टैंक से दूध खींचता है और इसे सिस्टम में आगे बढ़ाता है।</li>
                <li><strong>पुनर्जनन खंड:</strong> यह पाश्चराइज़र का सबसे ऊर्जा-कुशल हिस्सा है। यहाँ, आने वाला ठंडा कच्चा दूध प्लेटों के एक तरफ बहता है, जबकि गर्म, पहले से पाश्चुरीकृत दूध विपरीत दिशा में दूसरी तरफ बहता है। <strong>वैज्ञानिक कारण:</strong> गर्मी गर्म दूध से ठंडे दूध में स्थानांतरित होती है। यह कच्चे दूध को मुफ्त में पहले से गरम करता है (जैसे, 4°C से ~57°C तक), हीटिंग सेक्शन में आवश्यक ऊर्जा को कम करता है, और साथ ही गर्म दूध को पहले से ठंडा करता है, अंतिम शीतलन के लिए आवश्यक ऊर्जा को कम करता है। आधुनिक पुनर्योजी 95% तक गर्मी ऊर्जा की वसूली कर सकते हैं।</li>
                <li><strong>हीटिंग सेक्शन:</strong> पहले से गरम दूध फिर हीटिंग सेक्शन में बहता है, जहाँ इसे गर्म पानी को हीटिंग माध्यम के रूप में उपयोग करके पूर्ण पाश्चुरीकरण तापमान (जैसे, 72°C) तक गरम किया जाता है।</li>
                <li><strong>होल्डिंग ट्यूब:</strong> गर्म करने के बाद, दूध एक विशिष्ट लंबाई और व्यास के एक लंबे पाइप के माध्यम से बहता है, जिसे होल्डिंग ट्यूब के रूप में जाना जाता है। <strong>वैज्ञानिक कारण:</strong> यह ट्यूब ठीक से इंजीनियर की जाती है ताकि दूध को एक छोर से दूसरे छोर तक यात्रा करने में कम से कम 15 सेकंड (न्यूनतम होल्डिंग समय) लगे। फीड पंप द्वारा नियंत्रित प्रवाह दर, और ट्यूब के आयाम यह सुनिश्चित करने के लिए महत्वपूर्ण हैं कि यह CCP पूरा हो।</li>
                <li><strong>फ्लो डायवर्सन वाल्व (FDV):</strong> होल्डिंग ट्यूब के अंत में स्थित, FDV एक स्वचालित, तीन-तरफ़ा वाल्व है जो एक सुरक्षा उपकरण के रूप में कार्य करता है। एक तापमान संवेदक लगातार दूध के तापमान की निगरानी करता है। 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li>यदि तापमान निर्धारित बिंदु (जैसे, 72°C) पर या उससे ऊपर है, तो वाल्व ठीक से पाश्चुरीकृत दूध को पुनर्जनन खंड में आगे बहने की अनुमति देता है।</li>
                        <li>यदि किसी भी कारण से तापमान निर्धारित बिंदु से नीचे चला जाता है, तो वाल्व स्वचालित रूप से कम संसाधित दूध को पुन: प्रसंस्करण के लिए बैलेंस टैंक में वापस मोड़ देता है। यह सुनिश्चित करता है कि कोई भी कम-पाश्चुरीकृत दूध अंतिम उत्पाद तक कभी नहीं पहुंचता है।</li>
                    </ul>
                </li>
                <li><strong>पुनर्जनन खंड (कूलिंग):</strong> ठीक से पाश्चुरीकृत गर्म दूध पुनर्जनन खंड के माध्यम से वापस बहता है, अपनी गर्मी को आने वाले कच्चे दूध को देता है और इस प्रक्रिया में पहले से ठंडा हो जाता है (जैसे, 72°C से ~20°C तक)।</li>
                <li><strong>कूलिंग सेक्शन:</strong> पहले से ठंडा दूध फिर अंतिम शीतलन खंड में प्रवेश करता है, जहाँ इसे ठंडे पानी या ग्लाइकोल से 5°C से कम के अपने अंतिम भंडारण तापमान तक ठंडा किया जाता है।</li>
                <li><strong>स्टोरेज टैंक:</strong> पूरी तरह से संसाधित, ठंडा दूध फिर एक बाँझ भंडारण टैंक में भेजा जाता है, जो पैकेजिंग के लिए तैयार है।</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. पाश्चुरीकरण का सत्यापन: क्षारीय फॉस्फेट (ALP) परीक्षण</h3>
            <p>यह सुनिश्चित करने के लिए कि पाश्चुरीकरण सफल था, एक विश्वसनीय सत्यापन परीक्षण की आवश्यकता है। क्षारीय फॉस्फेट (ALP) परीक्षण इसके लिए सार्वभौमिक रूप से स्वीकृत विधि है।</p>
            <p><strong>वैज्ञानिक सिद्धांत:</strong> ALP कच्चे दूध में पाया जाने वाला एक प्राकृतिक एंजाइम है। संयोग से, इसकी गर्मी प्रतिरोध दूध में पाए जाने वाले सबसे गर्मी प्रतिरोधी आम रोगजनक जीवाणु, <i>कॉक्सिएला बर्नेटी</i> (क्यू-बुखार का कारक जीव) से थोड़ा अधिक है। इसका मतलब है कि ALP को नष्ट करने के लिए पर्याप्त समय-तापमान संयोजन निश्चित रूप से सभी आम रोगजनकों को नष्ट करने के लिए पर्याप्त होगा।</p>
            <p><strong>परीक्षण:</strong> परीक्षण एक दूध के नमूने को एक फॉस्फेट सब्सट्रेट प्रदान करके काम करता है। यदि सक्रिय ALP मौजूद है (अनुचित पाश्चुरीकरण या कच्चे दूध के संदूषण का संकेत), तो यह सब्सट्रेट से फॉस्फेट समूह को तोड़ देगा, जो तब एक रंग परिवर्तन उत्पन्न करता है। रंग परिवर्तन की अनुपस्थिति (एक नकारात्मक परिणाम) पुष्टि करती है कि पाश्चुरीकरण सफल था। एक सकारात्मक ALP परीक्षण का मतलब है कि उत्पाद असुरक्षित है और इसे जारी नहीं किया जाना चाहिए।</p>
        `
    }
};

    