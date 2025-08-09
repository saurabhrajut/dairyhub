
export const cipProcessContent = {
    hi: {
        main_title: "डेयरी उपकरणों की धुलाई और सफाई",
        main_description: "विभिन्न डेयरी उपकरणों को साफ और स्वच्छ करने के लिए एक विस्तृत गाइड।",
        intro: {
            title: "परिचय: CIP और मिल्क स्टोन",
            htmlContent: `
                <p>डेयरी उपकरणों और कंटेनरों की सतह पर बचा हुआ दूध माइक्रोबियल विकास के लिए उत्कृष्ट माध्यम प्रदान करता है। इसलिए, डेयरी उपकरणों को ठीक से साफ और स्वच्छ करना आवश्यक है।</p>
                <h4 class="font-bold mt-4">CIP/CAC क्या है?</h4>
                <p><strong>CIP (Cleaning-In-Place):</strong> यह एक स्वचालित विधि है जिसमें पाइपलाइनों, टैंकों और अन्य उपकरणों को बिना खोले (disassemble) साफ किया जाता है। इसमें सफाई और सैनिटाइजिंग घोल को एक निश्चित क्रम में पाइपों और उपकरणों के माध्यम से पंप किया जाता है।</p>
                <p><strong>CAC (Cleaning-Out-of-Place):</strong> इस विधि में, छोटे भागों या उपकरणों को अलग किया जाता है और उन्हें सफाई के लिए एक समर्पित क्षेत्र में ले जाया जाता है, जहाँ उन्हें टैंकों में डुबोकर या मैन्युअल रूप से साफ किया जाता है।</p>
                <h4 class="font-bold mt-4">मिल्क स्टोन:</h4>
                <p>यह गर्म पानी और डिटर्जेंट समाधानों से सूखे दूध के ठोस और लवणों का संचय है। इसमें अघुलनशील कैल्शियम लवण, कैल्शियम फॉस्फेट और दूध प्रोटीन (जमा और अवक्षेपित) होते हैं।</p>
                <p><strong>संघटन:</strong> इसमें 2.6-8.7% नमी; 3.6-17.6% वसा; 4.4-43.8% प्रोटीन और 42-67% राख होती है।</p>
            `
        },
        cip_cycle: {
            title: "Standard 5-Step CIP Cycle",
            intro: "एक विशिष्ट CIP साइकिल में निम्नलिखित 5 चरण होते हैं:",
            steps: [
                {
                    title: "Pre-rinse (प्रारंभिक धुलाई)",
                    details: "<p><strong>उद्देश्य:</strong> अधिकांश ढीली गंदगी और दूध के अवशेषों को हटाना।<br/><strong>प्रक्रिया:</strong> सिस्टम को गुनगुने पानी (लगभग 40-50°C) से 5-10 मिनट तक धोया जाता है। गर्म पानी का उपयोग नहीं किया जाता है क्योंकि यह प्रोटीन को सतह पर जमा सकता है (denature)।</p>"
                },
                {
                    title: "Alkali Wash (क्षारीय धुलाई)",
                    details: "<p><strong>उद्देश्य:</strong> वसा (fat) और प्रोटीन को हटाना।<br/><strong>प्रक्रिया:</strong> 0.5-1.5% कास्टिक सोडा (NaOH) के घोल को 70-80°C पर 15-20 मिनट के लिए प्रसारित किया जाता है। कास्टिक वसा को सैपोनिफाई (साबुन बनाना) और प्रोटीन को हाइड्रोलाइज करता है।</p>"
                },
                {
                    title: "Intermediate Rinse (मध्यवर्ती धुलाई)",
                    details: "<p><strong>उद्देश्य:</strong> क्षारीय डिटर्जेंट के अवशेषों को हटाना।<br/><strong>प्रक्रिया:</strong> सिस्टम को फिर से गर्म पानी से 5 मिनट के लिए धोया जाता है ताकि अगली एसिड धुलाई के लिए सतह तैयार हो सके।</p>"
                },
                {
                    title: "Acid Wash (अम्लीय धुलाई)",
                    details: "<p><strong>उद्देश्य:</strong> खनिज जमा (mineral deposits) जैसे मिल्क स्टोन को हटाना।<br/><strong>प्रक्रिया:</strong> 0.5-1.0% नाइट्रिक एसिड (HNO₃) या फॉस्फोरिक एसिड के घोल को 60-70°C पर 10-15 मिनट के लिए प्रसारित किया जाता है।</p>"
                },
                {
                    title: "Final Rinse (अंतिम धुलाई)",
                    details: "<p><strong>उद्देश्य:</strong> एसिड के अवशेषों को हटाना और सिस्टम को उपयोग के लिए तैयार करना।<br/><strong>प्रक्रिया:</strong> सिस्टम को ठंडे, पीने योग्य पानी से तब तक धोया जाता है जब तक कि निकलने वाले पानी का pH सामान्य न हो जाए। उपयोग से ठीक पहले, सिस्टम को अक्सर एक सैनिटाइज़र (जैसे क्लोरीन या गर्म पानी) से सैनिटाइज किया जाता है।</p>"
                }
            ]
        },
        chemicals: {
            title: "CIP में प्रयुक्त रसायन",
            intro: "CIP प्रक्रिया में विभिन्न प्रकार के रसायनों का उपयोग किया जाता है, प्रत्येक का एक विशिष्ट उद्देश्य होता है:",
            types: [
                {
                    title: "Alkaline Detergents (क्षारीय डिटर्जेंट)",
                    details: "<p><strong>उदाहरण:</strong> कास्टिक सोडा (NaOH), सोडियम कार्बोनेट।<br/><strong>उद्देश्य:</strong> ये वसा को सैपोनिफाई करते हैं और प्रोटीन को तोड़ते हैं। ये बहुत प्रभावी सफाई एजेंट हैं।</p>"
                },
                {
                    title: "Acid Detergents (अम्लीय डिटर्जेंट)",
                    details: "<p><strong>उदाहरण:</strong> नाइट्रिक एसिड (HNO₃), फॉस्फोरिक एसिड (H₃PO₄)।<br/><strong>उद्देश्य:</strong> ये मिल्क स्टोन जैसे खनिज जमा को घोलते हैं। नाइट्रिक एसिड स्टेनलेस स्टील की सतहों को पैसिवेट करने में भी मदद करता है, जिससे जंग लगने से बचाव होता है।</p>"
                },
                {
                    title: "Sanitizers (कीटाणुनाशक)",
                    details: "<p><strong>उदाहरण:</strong> क्लोरीन यौगिक (सोडियम हाइपोक्लोराइट), पेरएसिटिक एसिड (PAA), गर्म पानी (>85°C)।<br/><strong>उद्देश्य:</strong> अंतिम धुलाई के बाद बचे हुए सूक्ष्मजीवों को मारना।</p>"
                }
            ]
        },
        cleaning_procedures: {
            title: "विशिष्ट उपकरणों की सफाई प्रक्रियाएं",
            sections: [
                {
                    title: "दूध के डिब्बे की सफाई",
                    content: `
                        <p>डेयरी रिसेप्शन डॉक पर एल्यूमीनियम के डिब्बे में प्राप्त कच्चे दूध को मैन्युअल और/या मैकेनिकल वाशिंग दोनों का उपयोग करके साफ और स्वच्छ किया जा सकता है, जो दैनिक रूप से प्राप्त होने वाले डिब्बे की संख्या पर निर्भर करता है।</p>
                        <h5 class="font-bold mt-2">मैन्युअल धुलाई:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>डिब्बे खाली करने के तुरंत बाद, उन्हें पहले नल के पानी से धोया जाता है और ढीली गंदगी को ब्रश से अंदर से हटा दिया जाता है।</li>
                            <li>डिब्बे को पहले से तैयार 50°C पर डिटर्जेंट घोल (1% सोडियम हेक्सामेटाफॉस्फेट, ट्राइसोडियम फॉस्फेट, सोडियम कार्बोनेट, टीपोल) में भिगोएँ।</li>
                            <li>गर्म डिटर्जेंट घोल से डिब्बे के अंदरूनी हिस्से को अच्छी तरह से ब्रश करें।</li>
                            <li>डिब्बे को गर्म पानी से धोएँ।</li>
                            <li>ढक्कन के साथ डिब्बे को स्टीम करें और ड्रेनिंग रैक पर स्टोर करें।</li>
                        </ol>
                        <h5 class="font-bold mt-2">मैकेनिकल धुलाई (रोटरी या टनल टाइप वॉशर):</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>डिटर्जेंट टैंक को 0.5% क्षारीयता वाले डिटर्जेंट घोल से चार्ज करें।</li>
                            <li>मैकेनिकल वॉशर के पानी और स्टीम वाल्व खोलें और मोटर और पंप शुरू करें।</li>
                            <li>डिब्बे और ढक्कन को उनके संबंधित वाहक मार्गों में लोड करें।</li>
                            <li>जेट दबाव को 15 psi पर और प्री-रिंसिंग (40°C), डिटर्जेंट वॉश (75°C), गर्म पानी वॉश (85°C) का तापमान बनाए रखें।</li>
                            <li>स्टीमिंग और गर्म पानी ब्लास्ट दबाव क्रमशः 20 psi और तापमान 120°C और 125°C पर बनाए रखा जाता है।</li>
                            <li>आउटलेट पर डिब्बे और ढक्कन उतारें और रैक पर स्टोर करें।</li>
                            <li>प्रत्येक ऑपरेशन के शुरू और अंत में गुणात्मक या मात्रात्मक परीक्षणों का उपयोग करके डिटर्जेंट घोल की शक्ति की जाँच करें।</li>
                        </ol>
                    `
                },
                {
                    title: "क्रीम सेपरेटर/क्लेरिफायर की सफाई",
                    content: `
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>दिन के ऑपरेशन के बाद, मुख्य मशीन से कटोरा (bowl) हटा दें।</li>
                            <li>कटोरे को अलग करें और डिस्क हटा दें।</li>
                            <li>कटोरे की परिधि से सेपरेटर स्लाइम हटा दें।</li>
                            <li>ब्रश की मदद से प्रत्येक डिस्क को गर्म डिटर्जेंट घोल से साफ करें।</li>
                            <li>सभी भागों को गुनगुने पानी से धोएं और सूखने के लिए रख दें।</li>
                        </ol>
                    `
                },
                {
                    title: "प्लेट हीट एक्सचेंजर्स (PHE) की सफाई",
                    content: `
                        <h5 class="font-bold mt-2">दैनिक सफाई:</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>फिल्म हटाने के लिए गुनगुने पानी से धोएँ।</li>
                            <li>70°C पर 20 मिनट के लिए 1% एसिड डिटर्जेंट घोल प्रसारित करके धोएँ।</li>
                            <li>गर्म पानी से धोएँ।</li>
                            <li>70°C पर 20-30 मिनट के लिए 1% क्षार घोल प्रसारित करें।</li>
                            <li>40-50°C पर गर्म पानी से धोएँ, फिर 10 मिनट के लिए नल के पानी से और सूखने दें।</li>
                            <li>उपयोग से पहले सैनिटाइज़र घोल प्रसारित करें।</li>
                        </ol>
                        <h5 class="font-bold mt-2">आवधिक सफाई:</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>प्लेट हीट एक्सचेंजर को सावधानी से खोलें और अलग करें।</li>
                            <li>रबर गास्केट की जाँच करें और यदि खराब हो तो बदलें।</li>
                            <li>प्रत्येक प्लेट की जाँच करें और डिटर्जेंट घोल का उपयोग करके नरम ब्रश से स्क्रब करके स्केल हटा दें।</li>
                            <li>प्लेटों पर कोई खरोंच या डेंट बनाने से बचें।</li>
                            <li>डिटर्जेंट के निशान हटाने के लिए प्लेटों को नल के पानी से अच्छी तरह धो लें।</li>
                            <li>निर्माता के निर्देशों का पालन करते हुए प्लेटों को फिर से इकट्ठा करें।</li>
                        </ol>
                    `
                },
                {
                    title: "दूध भंडारण टैंक की सफाई",
                    content: `
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>टैंक खाली होने के बाद, ड्रेन वाल्व खोलें।</li>
                            <li>दबावयुक्त स्प्रे हेड का उपयोग करके टैंक को गर्म पानी से धोएँ।</li>
                            <li>वाल्व बंद करें और दबाव नोजल का उपयोग करके डिटर्जेंट घोल से धोएँ।</li>
                            <li>वाल्व खोलें और डिटर्जेंट घोल को निकलने दें।</li>
                            <li>डिटर्जेंट घोल के निशान हटाने के लिए गर्म पानी के बाद ठंडे पीने योग्य पानी से धोएँ।</li>
                            <li>पानी निकालें और सूखने दें।</li>
                            <li>स्टीम या क्लोरीनयुक्त पानी (150-200 ppm क्लोरीन) का उपयोग करके स्वच्छ करें।</li>
                        </ol>
                    `
                }
            ]
        },
        teepol_detergent: {
            title: "लिक्विड डिटर्जेंट बनाना और जांचना",
            htmlContent: `
                <p>डेयरी और खाद्य उद्योग में, हाथ से बर्तनों और छोटे उपकरणों की सफाई के लिए न्यूट्रल लिक्विड डिटर्जेंट (जैसे टीपोल) का व्यापक रूप से उपयोग किया जाता है।</p>
                <h4 class="font-bold mt-4">1. सामान्य प्रयोजन लिक्विड डिटर्जेंट कैसे बनाएं (1000 लीटर बैच):</h4>
                <p>यह एक सामान्य फॉर्मूलेशन है। औद्योगिक उत्पादन अधिक जटिल हो सकता है।</p>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">घटक (Ingredient)</th><th class="p-2 text-left">मात्रा (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">उद्देश्य</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">पानी (Water)</td><td class="p-2 border-b">820 - 840 Kg</td><td class="p-2 border-b">82-84%</td><td class="p-2 border-b">मुख्य विलायक (Solvent)</td></tr>
                <tr><td class="p-2 border-b">एसिड स्लरी (Acid Slurry - LABSA 90%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">मुख्य सफाई एजेंट (Anionic Surfactant)</td></tr>
                <tr><td class="p-2 border-b">कास्टिक सोडा (Caustic Soda - NaOH)</td><td class="p-2 border-b">~15 Kg</td><td class="p-2 border-b">~1.5%</td><td class="p-2 border-b">स्लरी को न्यूट्रलाइज करने के लिए (pH 7 तक)</td></tr>
                <tr><td class="p-2 border-b">यूरिया (Urea) या नमक (Salt)</td><td class="p-2 border-b">20 - 40 Kg</td><td class="p-2 border-b">2-4%</td><td class="p-2 border-b">गाढ़ापन बढ़ाने वाला (Viscosity Enhancer)</td></tr>
                <tr><td class="p-2 border-b">रंग और सुगंध (Color & Perfume)</td><td class="p-2 border-b">आवश्यकतानुसार</td><td class="p-2 border-b">-</td><td class="p-2 border-b">सौंदर्यशास्त्र के लिए</td></tr>
                <tr class="bg-muted"><td class="p-2 font-bold">कुल</td><td class="p-2 font-bold">1000 Kg</td><td class="p-2 font-bold">100%</td><td class="p-2 font-bold"></td></tr>
                </tbody></table></div>
                <p class="font-semibold">प्रक्रिया:</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>एक बड़े टैंक में पानी लें। धीरे-धीरे एसिड स्लरी डालें और लगातार हिलाते रहें।</li>
                    <li>अलग से, कास्टिक सोडा को थोड़े पानी में घोलें (सावधानी बरतें, यह गर्म होता है)।</li>
                    <li>कास्टिक सोडा के घोल को धीरे-धीरे स्लरी वाले मिश्रण में डालें जब तक कि मिश्रण का pH 7 (न्यूट्रल) न हो जाए।</li>
                    <li>गाढ़ापन बढ़ाने के लिए यूरिया या नमक डालें और अच्छी तरह मिलाएं। अंत में, रंग और सुगंध मिलाएं।</li>
                </ol>

                <h4 class="font-bold mt-6">2. एसिडिक क्लीनर कैसे बनाएं (1000 लीटर बैच):</h4>
                <p>यह एक मजबूत एसिड-आधारित क्लीनर है जो मिल्क स्टोन और अन्य खनिज जमा को हटाने के लिए उपयोग किया जाता है। <strong>चेतावनी: मजबूत एसिड खतरनाक होते हैं, हमेशा उचित सुरक्षा उपकरण (PPE) पहनें।</strong></p>
                 <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">घटक (Ingredient)</th><th class="p-2 text-left">मात्रा (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">उद्देश्य</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">पानी (Water)</td><td class="p-2 border-b">880 Kg</td><td class="p-2 border-b">88%</td><td class="p-2 border-b">विलायक (Solvent)</td></tr>
                <tr><td class="p-2 border-b">हाइड्रोक्लोरिक एसिड (HCl - 33%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">मुख्य सफाई एजेंट (Descaling)</td></tr>
                <tr><td class="p-2 border-b">नॉन-आयोनिक सर्फेक्टेंट</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">सतह को गीला करने और गंदगी हटाने में मदद करता है</td></tr>
                </tbody></table></div>
                <p class="font-semibold">प्रक्रिया:</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>एक एसिड-प्रतिरोधी टैंक में पानी लें।</li>
                    <li><strong>हमेशा एसिड को पानी में धीरे-धीरे डालें, कभी भी पानी को एसिड में न डालें।</strong> हाइड्रोक्लोरिक एसिड को पानी में डालें और मिलाएं।</li>
                    <li>अंत में, नॉन-आयोनिक सर्फेक्टेंट डालें और अच्छी तरह मिलाएं।</li>
                </ol>
                
                <h4 class="font-bold mt-6">लिक्विड डिटर्जेंट की शक्ति कैसे जांचें (Active Matter %):</h4>
                <p>डिटर्जेंट की शक्ति को उसमें मौजूद "एक्टिव मैटर" (सर्फेक्टेंट की मात्रा) से मापा जाता है। इसकी जाँच के लिए एक मानक विधि टू-फेज टाइट्रेशन है, जो एक जटिल लैब प्रक्रिया है और इसके लिए विशिष्ट रसायनों और विशेषज्ञता की आवश्यकता होती है।</p>
            `
        },
        solution_strength: {
            title: "CIP घोल की शक्ति का परीक्षण",
            intro: "कुशल सफाई और कीटाणुनाशक प्रभावों के लिए डिटर्जेंट घोल की उचित शक्ति बनाए रखना महत्वपूर्ण है। शक्ति को आमतौर पर % कंसंट्रेशन या ppm (क्लोरीन के लिए) में मापा जाता है।",
            alkalinity_test: {
                title: "धुलाई के घोल की शक्ति का निर्धारण (क्षारीयता परीक्षण)",
                content: `
                    <p>धुलाई के घोल की शक्ति को आम तौर पर NaOH के संदर्भ में व्यक्त किया जाता है क्योंकि यह अक्सर अकेले या डाइसोडियम फॉस्फेट और सोडियम मेटासिलिकेट आदि के साथ संयोजन में उपयोग किया जाता है। कांच की बोतलों के लिए आम तौर पर 1.5% NaOH के बराबर क्षार और कैन की धुलाई के लिए 0.5% का उपयोग किया जाता है। स्वचालित मशीनों में धुलाई के घोल का बार-बार उपयोग करने से यह आम तौर पर पतला हो जाता है। कुशल सफाई और कीटाणुनाशक प्रभावों के लिए डिटर्जेंट घोल की उचित क्षारीयता बनाए रखना महत्वपूर्ण है।</p>
                    <h5 class="font-bold mt-4">आवश्यकताएँ:</h5>
                    <p>कोनिकल फ्लास्क, पिपेट, ब्यूरेट, वॉल्यूमेट्रिक फ्लास्क, 2.5 N सल्फ्यूरिक एसिड, हाइड्रोक्लोरिक एसिड (0.1N), फेनोल्फथेलिन इंडिकेटर (0.5%)</p>

                    <h5 class="font-bold mt-4">गुणात्मक परीक्षण (Qualitative Test):</h5>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>एक कोनिकल फ्लास्क में 10 ml डिटर्जेंट घोल लें।</li>
                        <li>12.5 ml N/10 HCl और 5 बूँदें 0.5% फेनोल्फथेलिन इंडिकेटर डालें।</li>
                        <li>यदि मिश्रण लाल हो जाता है, तो यह 0.5% से अधिक कास्टिक सोडा के रूप में क्षारीयता को इंगित करता है, जो पर्याप्त है।</li>
                    </ol>

                    <h5 class="font-bold mt-4">मात्रात्मक परीक्षण (Quantitative Test) - सीधी पठन विधि:</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>100 ml कोनिकल फ्लास्क में 10 ml सैंपल मापें।</li>
                        <li>5 बूँदें फेनोल्फथेलिन इंडिकेटर डालें।</li>
                        <li>2.5 N सल्फ्यूरिक एसिड के साथ तब तक टाइट्रेट करें जब तक घोल रंगहीन न हो जाए।</li>
                        <li>उपयोग किए गए एसिड के मिलीलीटर को नोट करें।</li>
                        <li>उपयोग किया गया एसिड NaOH के रूप में प्रतिशत क्षार का सीधा संकेतक है।</li>
                    </ol>

                     <h5 class="font-bold mt-4">प्रयोगशाला विधि (Laboratory Method):</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>250 ml वॉल्यूमेट्रिक फ्लास्क में 5 ml धुलाई का घोल लें।</li>
                        <li>डिस्टिल्ड वॉटर से वॉल्यूम पूरा करें और अच्छी तरह मिलाएं।</li>
                        <li>इस घोल के 50 ml को 100 ml कोनिकल फ्लास्क में ट्रांसफर करें।</li>
                        <li>कुछ बूँदें फेनोल्फथेलिन इंडिकेटर डालें।</li>
                        <li>0.1 N सल्फ्यूरिक एसिड के साथ घोल को रंगहीन होने तक टाइट्रेट करें। उपयोग किए गए एसिड के ml को "A" के रूप में रिकॉर्ड करें।</li>
                        <li>कुछ बूँदें मिथाइल ऑरेंज इंडिकेटर डालें।</li>
                        <li>हल्का गुलाबी रंग आने तक टाइट्रेशन जारी रखें। उपयोग किए गए एसिड के ml को "B" के रूप में नोट करें।</li>
                    </ol>
                    <p class="mt-2"><strong>गणना:</strong><br/>% मुक्त कास्टिक (Free Caustic) = (A - B) × 0.4<br/>% कुल क्षार (Total Alkali) = (A + B) × 0.4</p>
                `
            },
            calculators: {
                error_title: "त्रुटि",
                success_title: "सफलतापूर्वक गणना की गई",
                error_invalid_titre: "कृपया एक मान्य टाइट्रे मान दर्ज करें।",
                naoh: {
                    title: "NaOH (%)",
                    description: "10ml CIP घोल के सैंपल को 0.1 N एसिड (जैसे HCl) के साथ फिनोल्फथेलिन इंडिकेटर का उपयोग करके टाइट्रेट करें।",
                    label: "0.1 N एसिड का उपयोग (ml)",
                    button: "NaOH % की गणना करें",
                    result_prefix: "कास्टिक सोडा (NaOH):"
                },
                hno3: {
                    title: "HNO₃ (%)",
                    description: "10ml CIP घोल के सैंपल को 0.1 N बेस (जैसे NaOH) के साथ फिनोल्फथेलिन इंडिकेटर का उपयोग करके टाइट्रेट करें।",
                    label: "0.1 N बेस का उपयोग (ml)",
                    button: "HNO₃ % की गणना करें",
                    result_prefix: "नाइट्रिक एसिड (HNO₃):"
                },
                h3po4: {
                    title: "H₃PO₄ (%)",
                    description: "10ml CIP घोल के सैंपल को 0.1 N बेस (जैसे NaOH) के साथ फिनोल्फथेलिन इंडिकेटर का उपयोग करके टाइट्रेट करें।",
                    label: "0.1 N बेस का उपयोग (ml)",
                    button: "H₃PO₄ % की गणना करें",
                    result_prefix: "फॉस्फोरिक एसिड (H₃PO₄):"
                },
                 chlorine: {
                    title: "Chlorine (ppm)",
                    description: "100ml CIP घोल के सैंपल को 0.01 N सोडियम थायोसल्फेट के साथ आयोडोमेट्रिक टाइट्रेशन विधि का उपयोग करके टाइट्रेट करें।",
                    label: "0.01 N सोडियम थायोसल्फेट का उपयोग (ml)",
                    button: "Chlorine (ppm) की गणना करें",
                    result_prefix: "उपलब्ध क्लोरीन:"
                }
            }
        }
    },
    en: {
        main_title: "Washing and Cleaning of Dairy Equipments",
        main_description: "A detailed guide to clean and sanitize different dairy equipments.",
        intro: {
            title: "Introduction: CIP and Milk Stone",
            htmlContent: `
                <p>Milk remaining on the surface of dairy equipment and containers provides an excellent medium for microbial growth. It is therefore, necessary to clean and sanitize dairy equipment properly.</p>
                <h4 class="font-bold mt-4">What is CIP/CAC?</h4>
                <p><strong>CIP (Cleaning-In-Place):</strong> This is an automated method for cleaning pipelines, tanks, and other equipment without disassembling them. It involves pumping cleaning and sanitizing solutions through the pipes and equipment in a specific sequence.</p>
                <p><strong>CAC (Cleaning-Out-of-Place):</strong> In this method, smaller parts or equipment are disassembled and taken to a dedicated area for cleaning, where they are soaked in tanks or cleaned manually.</p>
                <h4 class="font-bold mt-4">Milk Stone:</h4>
                <p>This is an accumulation of dried milk solids and salts from hot water and detergent solutions. It consists of insoluble calcium salts, calcium phosphate, and milk proteins (coagulated & precipitated).</p>
                <p><strong>Composition:</strong> It contains 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% proteins and 42-67% ash.</p>
            `
        },
        cip_cycle: {
            title: "Standard 5-Step CIP Cycle",
            intro: "A typical CIP cycle consists of the following 5 steps:",
            steps: [
                {
                    title: "Pre-rinse",
                    details: "<p><strong>Purpose:</strong> To remove most of the loose dirt and milk residues.<br/><strong>Process:</strong> The system is rinsed with lukewarm water (around 40-50°C) for 5-10 minutes. Hot water is not used as it can denature proteins, causing them to stick to the surface.</p>"
                },
                {
                    title: "Alkali Wash",
                    details: "<p><strong>Purpose:</strong> To remove fat and protein.<br/><strong>Process:</strong> A 0.5-1.5% caustic soda (NaOH) solution is circulated at 70-80°C for 15-20 minutes. The caustic saponifies the fat and hydrolyzes the protein.</p>"
                },
                {
                    title: "Intermediate Rinse",
                    details: "<p><strong>Purpose:</strong> To remove residues of the alkaline detergent.<br/><strong>Process:</strong> The system is rinsed again with warm water for 5 minutes to prepare the surface for the next acid wash.</p>"
                },
                {
                    title: "Acid Wash",
                    details: "<p><strong>Purpose:</strong> To remove mineral deposits like milk stone.<br/><strong>Process:</strong> A 0.5-1.0% solution of nitric acid (HNO₃) or phosphoric acid is circulated at 60-70°C for 10-15 minutes.</p>"
                },
                {
                    title: "Final Rinse",
                    details: "<p><strong>Purpose:</strong> To remove acid residues and prepare the system for use.<br/><strong>Process:</strong> The system is rinsed with cold, potable water until the pH of the effluent water is neutral. Just before use, the system is often sanitized with a sanitizer (like chlorine or hot water).</p>"
                }
            ]
        },
        chemicals: {
            title: "Chemicals Used in CIP",
            intro: "Various types of chemicals are used in the CIP process, each with a specific purpose:",
            types: [
                {
                    title: "Alkaline Detergents",
                    details: "<p><strong>Examples:</strong> Caustic soda (NaOH), sodium carbonate.<br/><strong>Purpose:</strong> They saponify fats and break down proteins. They are very effective cleaning agents.</p>"
                },
                {
                    title: "Acid Detergents",
                    details: "<p><strong>Examples:</strong> Nitric acid (HNO₃), phosphoric acid (H₃PO₄).<br/><strong>Purpose:</strong> They dissolve mineral deposits like milk stone. Nitric acid also helps in passivating stainless steel surfaces, protecting them from corrosion.</p>"
                },
                {
                    title: "Sanitizers",
                    details: "<p><strong>Examples:</strong> Chlorine compounds (sodium hypochlorite), peracetic acid (PAA), hot water (>85°C).<br/><strong>Purpose:</strong> To kill any remaining microorganisms after the final rinse.</p>"
                }
            ]
        },
        cleaning_procedures: {
            title: "Cleaning Procedures for Specific Equipments",
            sections: [
                {
                    title: "Cleaning of milk cans",
                    content: `
                        <p>Raw milk received in aluminium cans at the dairy reception dock may be cleaned and sanitized using both manual and or mechanical washing depending upon number of cans received daily.</p>
                        <h5 class="font-bold mt-2">Manual washing:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Immediately after empting the cans are first rinsed with tap water and loosely held soil is removed, from inside the can, with brush.</li>
                           <li>Soak the can in previously prepared detergent solution at 50° C. (1 %) sodium hexametaphosphate, trisodium phosphate, sodium carbonate, teepol).</li>
                           <li>Brush the interior of the can thoroughly with hot detergent solution.</li>
                           <li>Rinse the cans with hot water.</li>
                           <li>Steam the cans with the lid and store on draining rack.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Mechanical washing (Rotary or tunnel type washer):</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Charge the detergent tank to have 0.5% alkalinity of the detergent solution.</li>
                           <li>Open the water and steam valves of mechanical washer. And start the motors and pumps.</li>
                           <li>Load the cans and lids into their respective carriageways.</li>
                           <li>Maintain jet pressure at 15 psi and temperature of pre-rinsing (40° C), detergent wash (75° C), hot water wash (85° C).</li>
                           <li>Steaming and hot water blast pressure is maintained at 20 psi and temperatures at 120° and 125° C respectively.</li>
                           <li>Unload the cans and lids at the outlet and store on rack.</li>
                           <li>Check the strength of detergent solution at starting and end of each operation using qualitative or quantitative tests.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of Cream Separators/ Clarifiers",
                    content: `
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>After the days operation remove the bowl from main machine.</li>
                           <li>Dismantle the bowl and remove the discs.</li>
                           <li>Remove separator slime from the periphery of the bowl.</li>
                           <li>With the help of brush clean each disc with warm detergent solution.</li>
                           <li>Wash all parts with luke-warm water and place for draining.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of plate heat exchangers (PHE)",
                    content: `
                        <h5 class="font-bold mt-2">Daily cleaning:</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Rinse with luke-warm water to remove film.</li>
                           <li>Wash by circulating 1% acid detergent solution at 70° C for 20 minutes.</li>
                           <li>Rinse with warm water.</li>
                           <li>Circulate 1% alkali solution at 70° C for 20 - 30 minutes.</li>
                           <li>Rinse with hot water at 40 - 50° C followed by tap water for 10 minutes and allow drying.</li>
                           <li>Circulate sanitizer solution before use.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Periodic cleaning:</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Open and dismantle the plate heat exchanger carefully.</li>
                           <li>Check rubber gaskets and replace if defective.</li>
                           <li>Check each plate and remove scale by scrubbing with soft brush using detergent solution.</li>
                           <li>Avoid making any scratch or dents on plates.</li>
                           <li>Rinse the plates thoroughly with tap water to remove traces of detergent.</li>
                           <li>Reassemble plates following manufacturers instructions.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning milk storage tanks",
                    content: `
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>After the tank has been emptied, open the drain valve.</li>
                           <li>Rinse the tank with warm water using pressurized spray heads.</li>
                           <li>Close the valve and wash with detergent solution using pressure nozzles.</li>
                           <li>Open the valve and allow detergent solution to drain.</li>
                           <li>Rinse with warm water followed by cold portable water to remove traces of detergent solution.</li>
                           <li>Drain water and allow drying.</li>
                           <li>Sanitize using steam or chlorinated water (150-200 ppm chlorine).</li>
                        </ol>
                    `
                }
            ]
        },
        teepol_detergent: {
            title: "Making and Testing Liquid Detergent",
            htmlContent: `
                <p>Neutral liquid detergents (like Teepol) are widely used in the dairy and food industry for manual cleaning of utensils and small equipment.</p>
                <h4 class="font-bold mt-4">1. How to Make a General Purpose Liquid Detergent (1000 Litre Batch):</h4>
                <p>This is a general formulation. Industrial production can be more complex.</p>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Water</td><td class="p-2 border-b">820 - 840 Kg</td><td class="p-2 border-b">82-84%</td><td class="p-2 border-b">Main Solvent</td></tr>
                <tr><td class="p-2 border-b">Acid Slurry (LABSA 90%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Anionic Surfactant)</td></tr>
                <tr><td class="p-2 border-b">Caustic Soda (NaOH)</td><td class="p-2 border-b">~15 Kg</td><td class="p-2 border-b">~1.5%</td><td class="p-2 border-b">To neutralize the slurry (to pH 7)</td></tr>
                <tr><td class="p-2 border-b">Urea or Salt</td><td class="p-2 border-b">20 - 40 Kg</td><td class="p-2 border-b">2-4%</td><td class="p-2 border-b">Viscosity Enhancer</td></tr>
                <tr><td class="p-2 border-b">Color & Perfume</td><td class="p-2 border-b">As required</td><td class="p-2 border-b">-</td><td class="p-2 border-b">For aesthetics</td></tr>
                <tr class="bg-muted"><td class="p-2 font-bold">Total</td><td class="p-2 font-bold">1000 Kg</td><td class="p-2 font-bold">100%</td><td class="p-2 font-bold"></td></tr>
                </tbody></table></div>
                <p class="font-semibold">Process:</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>Take water in a large tank. Slowly add Acid Slurry while stirring continuously.</li>
                    <li>Separately, dissolve Caustic Soda in a small amount of water (be careful, it gets hot).</li>
                    <li>Slowly add the caustic solution to the slurry mixture until the pH of the mixture becomes 7 (neutral).</li>
                    <li>Add urea or salt to increase viscosity and mix well. Finally, add color and perfume.</li>
                </ol>

                <h4 class="font-bold mt-6">2. How to Make an Acidic Cleaner (1000 Litre Batch):</h4>
                <p>This is a strong acid-based cleaner used for descaling milk stone and other mineral deposits. <strong>Warning: Strong acids are dangerous, always wear appropriate Personal Protective Equipment (PPE).</strong></p>
                 <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Water</td><td class="p-2 border-b">880 Kg</td><td class="p-2 border-b">88%</td><td class="p-2 border-b">Solvent</td></tr>
                <tr><td class="p-2 border-b">Hydrochloric Acid (HCl - 33%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Descaling)</td></tr>
                <tr><td class="p-2 border-b">Non-ionic Surfactant</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Aids in wetting and soil removal</td></tr>
                </tbody></table></div>
                <p class="font-semibold">Process:</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>Take water in an acid-resistant tank.</li>
                    <li><strong>Always add acid slowly to water, never water to acid.</strong> Add Hydrochloric Acid to the water and mix.</li>
                    <li>Finally, add the non-ionic surfactant and mix well.</li>
                </ol>
                
                <h4 class="font-bold mt-6">How to Check the Strength of Liquid Detergent (Active Matter %):</h4>
                <p>The strength of a detergent is measured by its "Active Matter" (the amount of surfactant). A standard method for checking this is the two-phase titration, which is a complex lab procedure and requires specific chemicals and expertise.</p>
            `
        },
        solution_strength: {
            title: "Testing of CIP Solution Strength",
            intro: "It is important to maintain the proper strength of the detergent solution for efficient cleaning and germicidal effects. Strength is usually measured in % concentration or ppm (for chlorine).",
            alkalinity_test: {
                title: "Determining strength of washing solution (Alkalinity test)",
                content: `
                    <p>The strength of washing solution is generally expressed in terms of NaOH as it is often used as such or in combination with disodium phosphate and sodium metasilicate etc. An alkali equivalent to 1.5% NaOH is generally used for glass bottles and 0.5% for can washing. Repeated usage of washing solutions in automatic machines generally gets diluted. It is important to maintain the proper alkalinity of detergent solution for efficient cleaning and germicidal effects.</p>
                    <h5 class="font-bold mt-4">Requirements:</h5>
                    <p>Conical flask, pipettes, burette, volumetric flask, 2.5 N sulphuric acid, hydrochloric acid (0.1N), phenolphthalein indicator (0.5 %).</p>

                    <h5 class="font-bold mt-4">Qualitative test:</h5>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Take 10 ml of detergent solution in conical flask.</li>
                        <li>Add 12.5 ml of N/10 HCL and 5 drops of 0.5% phenolphthalein indicator.</li>
                        <li>If the mixture turns red it indicates alkalinity greater than 0.5 % as caustic soda, which is sufficient.</li>
                    </ol>

                    <h5 class="font-bold mt-4">Quantitative test (Direct reading method):</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Measure 10 ml of sample in 100 ml conical flask.</li>
                        <li>Add 5 drops of phenolphthalein indicator.</li>
                        <li>Titrate with 2.5 N sulphuric acid until solution becomes colourless.</li>
                        <li>Note millilitres of acid used for titration.</li>
                        <li>The acid used is the direct indicator of percent alkali as NaOH.</li>
                    </ol>

                     <h5 class="font-bold mt-4">Laboratory method:</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Take 5 ml of washing solution in 250 ml volumetric flask.</li>
                        <li>Makeup the volume with distilled water and mix well.</li>
                        <li>Transfer 50 ml of this solution in 100 ml conical flask.</li>
                        <li>Add few drops of phenolphthalein indicator.</li>
                        <li>Titrate the contents with 0.1 N sulphuric acid to colourless solution. Record ml of acid used as "A".</li>
                        <li>Add few drops of methyl orange indicator.</li>
                        <li>Continue titration until slight pink colour appears. Note ml of acid used as "B".</li>
                    </ol>
                    <p class="mt-2"><strong>Calculation:</strong><br/>% free caustic = (A - B) × 0.4<br/>% total alkali = (A + B) × 0.4</p>
                `
            },
            calculators: {
                error_title: "Error",
                success_title: "Calculated Successfully",
                error_invalid_titre: "Please enter a valid titre value.",
                naoh: {
                    title: "NaOH (%)",
                    description: "Titrate a 10ml sample of the CIP solution with 0.1 N acid (e.g., HCl) using phenolphthalein indicator.",
                    label: "0.1 N Acid Used (ml)",
                    button: "Calculate NaOH %",
                    result_prefix: "Caustic Soda (NaOH):"
                },
                hno3: {
                    title: "HNO₃ (%)",
                    description: "Titrate a 10ml sample of the CIP solution with 0.1 N base (e.g., NaOH) using phenolphthalein indicator.",
                    label: "0.1 N Base Used (ml)",
                    button: "Calculate HNO₃ %",
                    result_prefix: "Nitric Acid (HNO₃):"
                },
                h3po4: {
                    title: "H₃PO₄ (%)",
                    description: "Titrate a 10ml sample of the CIP solution with 0.1 N base (e.g., NaOH) using phenolphthalein indicator.",
                    label: "0.1 N Base Used (ml)",
                    button: "Calculate H₃PO₄ %",
                    result_prefix: "Phosphoric Acid (H₃PO₄):"
                },
                 chlorine: {
                    title: "Chlorine (ppm)",
                    description: "Titrate a 100ml sample of the CIP solution using the iodometric titration method with 0.01 N Sodium Thiosulphate.",
                    label: "0.01 N Sodium Thiosulphate Used (ml)",
                    button: "Calculate Chlorine (ppm)",
                    result_prefix: "Available Chlorine:"
                }
            }
        }
    }
}

    