
export const rasgullaContent = {
    en: {
        title: "Rasgulla Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Rasgulla</h3>
            <p>Rasgulla is a syrupy dessert popular in the Indian subcontinent. It is made from ball-shaped dumplings of chhana (an Indian cottage cheese), cooked in light syrup made of sugar. This is done until the syrup permeates the dumplings. The key to a good rasgulla is its soft, spongy texture that absorbs the sugar syrup perfectly.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Canned Rasgulla</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) defines quality standards for canned rasgulla to ensure product quality and safety.</p>
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
                            <td class="p-2 border"><strong>Drained Weight of Rasgulla (min, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">45.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">5.0</td>
                        </tr>
                         <tr>
                            <td class="p-2 border"><strong>Sucrose (max, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Rasgulla with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Rasgulla Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Heating to near boiling (~90°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70-80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Coagulation with Acid (pH ~5.4) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Settling & Draining of Whey</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Kneading of Chhana (until smooth & rollable)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Portioning and Ball Formation</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Cooking in Sugar Syrup (Two Stages)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Soaking and Cooling in Syrup</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Filling into Cans/Containers with Hot Syrup <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Seaming / Sealing</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cooling & Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Chhana Preparation (PRP):</strong>
                    <p>The foundation of a good rasgulla is high-quality chhana. Fresh cow milk is used to create a soft, spongy chhana as described in the "Chhana Processing" section. The moisture content of the chhana is critical; it should be around 55-60%. Too much moisture will cause the balls to disintegrate during cooking, while too little will result in a hard, rubbery final product. Ensuring the quality of the raw chhana is a fundamental <strong>Prerequisite Program (PRP)</strong>.</p>
                </li>
                <li><strong>Kneading of Chhana (oPRP):</strong>
                    <p>This is arguably the most crucial step for texture. The chhana is kneaded thoroughly, often using the heel of the palm or a specialized machine. The scientific purpose of kneading is to break down the coarse grain of the chhana and develop a smooth, homogenous, and slightly elastic paste. This process expels some entrapped air and aligns the protein structure, allowing the chhana balls to hold their shape during cooking and absorb syrup evenly. The endpoint is reached when the chhana feels smooth and non-sticky, and a small portion can be rolled into a crack-free ball. This is an <strong>Operational Prerequisite Program (oPRP)</strong> as it directly impacts product quality.</p>
                </li>
                <li><strong>Ball Formation:</strong>
                    <p>The kneaded chhana is divided into small, equal-sized portions and rolled gently between the palms to form smooth, crack-free balls. Any cracks on the surface can cause the rasgulla to break apart during cooking.</p>
                </li>
                <li><strong>Sugar Syrup Cooking (CCP-1):</strong>
                    <p>This is a <strong>Critical Control Point (CCP-1)</strong> for both safety (killing microbes) and quality. Cooking is typically done in two stages:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Stage 1 (Swelling):</strong> The chhana balls are first cooked in a thin sugar syrup (around 40-50° Brix) at boiling temperature for about 10-15 minutes. The principle of <strong>osmosis</strong> comes into play here. The thin syrup has a higher water concentration than the chhana balls. This causes water from the syrup to move into the chhana balls, making them swell to about 1.5 to 2 times their original size.</li>
                        <li><strong>Stage 2 (Hardening & Preservation):</strong> After swelling, the rasgullas are transferred to a thicker syrup (around 60° Brix) and cooked for a short period. Now, osmosis works in reverse. The high sugar concentration of the syrup draws out some of the water from the swollen balls, which helps to firm up their structure and increases their shelf life by lowering the water activity.</li>
                    </ul>
                </li>
                <li><strong>Packaging and Storage (CCP-2):</strong>
                    <p>The cooked rasgullas are filled into cans or containers along with hot, light sugar syrup (around 40° Brix). Hot filling is a <strong>Critical Control Point (CCP-2)</strong> as it helps to sterilize the container and create a vacuum upon cooling, ensuring a longer shelf life. The containers are then hermetically sealed. After sealing, they are cooled and stored at ambient temperature.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "रसगुल्ला प्रोसेसिंग",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">रसगुल्ला का परिचय</h3>
            <p>रसगुल्ला भारतीय उपमहाद्वीप में एक लोकप्रिय सिरप वाली मिठाई है। यह छेना (एक भारतीय पनीर) के गोल गोलों से बनाया जाता है, जिसे चीनी की हल्की चाशनी में पकाया जाता है। यह तब तक किया जाता है जब तक कि चाशनी गोलों में समा न जाए। एक अच्छे रसगुल्ले की कुंजी उसकी नरम, स्पंजी बनावट है जो चीनी की चाशनी को पूरी तरह से सोख लेती है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI के अनुसार डिब्बाबंद रसगुल्ले के मानक</h3>
            <p>भारतीय खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) उत्पाद की गुणवत्ता और सुरक्षा सुनिश्चित करने के लिए डिब्बाबंद रसगुल्ले के लिए गुणवत्ता मानक परिभाषित करता है।</p>
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
                            <td class="p-2 border"><strong>रसगुल्ले का सूखा वजन (न्यूनतम, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>कुल ठोस (न्यूनतम, %)</strong></td>
                            <td class="p-2 border">45.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>वसा (सूखे आधार पर, न्यूनतम, %)</strong></td>
                            <td class="p-2 border">5.0</td>
                        </tr>
                         <tr>
                            <td class="p-2 border"><strong>सुक्रोज (अधिकतम, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">खाद्य सुरक्षा नियंत्रण के साथ रसगुल्ला की प्रसंस्करण</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">रसगुल्ला उत्पादन के लिए प्रसंस्करण प्रवाह संचित्र</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">दूध की प्राप्ति और मानकीकरण <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">उबालने के करीब तक गर्म करना (~90°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">जमावट तापमान तक ठंडा करना (70-80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">एसिड के साथ जमावट (pH ~5.4) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">दही का बसना और मट्ठा निकालना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>छेना को गूंथना (चिकना और रोल करने लायक होने तक)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">भाग बनाना और गोले बनाना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>चीनी की चाशनी में पकाना (दो चरण)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">चाशनी में भिगोना और ठंडा करना</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">गर्म चाशनी के साथ डिब्बे/कंटेनर में भरना <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">सीमिंग / सीलिंग</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">ठंडा करना और भंडारण</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">प्रसंस्करण चरणों का विस्तृत विवरण</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>छेना तैयार करना (PRP):</strong>
                    <p>एक अच्छे रसगुल्ले का आधार उच्च गुणवत्ता वाला छेना है। "छेना प्रसंस्करण" खंड में वर्णित अनुसार एक नरम, स्पंजी छेना बनाने के लिए ताजा गाय के दूध का उपयोग किया जाता है। छेना की नमी की मात्रा महत्वपूर्ण है; यह लगभग 55-60% होनी चाहिए। बहुत अधिक नमी से गोलियां पकने के दौरान टूट जाएंगी, जबकि बहुत कम नमी से एक कठोर, रबर जैसा अंतिम उत्पाद बनेगा। कच्चे छेना की गुणवत्ता सुनिश्चित करना एक मौलिक <strong>आवश्यक कार्यक्रम (PRP)</strong> है।</p>
                </li>
                <li><strong>छेना को गूंथना (oPRP):</strong>
                    <p>यह बनावट के लिए यकीनन सबसे महत्वपूर्ण कदम है। छेना को अच्छी तरह से गूंथा जाता है, अक्सर हथेली के निचले हिस्से या एक विशेष मशीन का उपयोग करके। गूंथने का वैज्ञानिक उद्देश्य छेना के मोटे दाने को तोड़ना और एक चिकना, समरूप और थोड़ा लोचदार पेस्ट विकसित करना है। यह प्रक्रिया कुछ फंसी हुई हवा को बाहर निकालती है और प्रोटीन संरचना को संरेखित करती है, जिससे छेना की गोलियां पकने के दौरान अपना आकार बनाए रखती हैं और चाशनी को समान रूप से सोखती हैं। अंतिम बिंदु तब पहुंचता है जब छेना चिकना और गैर-चिपचिपा महसूस होता है, और एक छोटा हिस्सा बिना दरार के गोल बनाया जा सकता है। यह एक <strong>परिचालन आवश्यक कार्यक्रम (oPRP)</strong> है क्योंकि यह सीधे उत्पाद की गुणवत्ता को प्रभावित करता है।</p>
                </li>
                <li><strong>गोले बनाना:</strong>
                    <p>गूंथे हुए छेना को छोटे, समान आकार के भागों में विभाजित किया जाता है और हथेलियों के बीच धीरे से गोल करके चिकने, दरार रहित गोले बनाए जाते हैं। सतह पर कोई भी दरार पकने के दौरान रसगुल्ले के टूटने का कारण बन सकती है।</p>
                </li>
                <li><strong>चीनी की चाशनी में पकाना (CCP-1):</strong>
                    <p>यह सुरक्षा (रोगाणुओं को मारने) और गुणवत्ता दोनों के लिए एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-1)</strong> है। पकाना आमतौर पर दो चरणों में किया जाता है:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>चरण 1 (सूजन):</strong> छेना की गोलियों को पहले एक पतली चीनी की चाशनी (लगभग 40-50° ब्रिक्स) में उबलते तापमान पर लगभग 10-15 मिनट तक पकाया जाता है। यहाँ <strong>परासरण (osmosis)</strong> का सिद्धांत काम आता है। पतली चाशनी में छेना की गोलियों की तुलना में अधिक पानी की सांद्रता होती है। इससे चाशनी से पानी छेना की गोलियों में चला जाता है, जिससे वे अपने मूल आकार से लगभग 1.5 से 2 गुना फूल जाती हैं।</li>
                        <li><strong>चरण 2 (कठोर करना और संरक्षण):</strong> सूजन के बाद, रसगुल्लों को एक गाढ़ी चाशनी (लगभग 60° ब्रिक्स) में स्थानांतरित किया जाता है और थोड़ी देर के लिए पकाया जाता है। अब, परासरण विपरीत दिशा में काम करता है। चाशनी की उच्च चीनी सांद्रता फूली हुई गोलियों से कुछ पानी बाहर निकालती है, जो उनकी संरचना को मजबूत करने में मदद करती है और पानी की गतिविधि को कम करके उनकी शेल्फ लाइफ बढ़ाती है।</li>
                    </ul>
                </li>
                <li><strong>पैकेजिंग और भंडारण (CCP-2):</strong>
                    <p>पके हुए रसगुल्लों को गर्म, हल्की चीनी की चाशनी (लगभग 40° ब्रिक्स) के साथ डिब्बे या कंटेनर में भरा जाता है। गर्म भरना एक <strong>महत्वपूर्ण नियंत्रण बिंदु (CCP-2)</strong> है क्योंकि यह कंटेनर को निष्फल करने और ठंडा होने पर एक वैक्यूम बनाने में मदद करता है, जिससे एक लंबी शेल्फ लाइफ सुनिश्चित होती है। कंटेनरों को फिर भली भांति बंद करके सील कर दिया जाता है। सील करने के बाद, उन्हें ठंडा किया जाता है और परिवेश के तापमान पर संग्रहीत किया जाता है।</p>
                </li>
            </ol>
        `
    }
}

    