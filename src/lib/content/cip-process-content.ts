
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
        solution_strength: {
            title: "घोल की शक्ति का परीक्षण",
            intro: "वाशिंग घोल की शक्ति आमतौर पर NaOH के संदर्भ में व्यक्त की जाती है क्योंकि यह अक्सर ऐसे ही या डिसोडियम फॉस्फेट और सोडियम मेटासिलिकेट आदि के संयोजन में उपयोग किया जाता है। कांच की बोतलों के लिए आमतौर पर 1.5% NaOH के बराबर क्षार और कैन धोने के लिए 0.5% का उपयोग किया जाता है। स्वचालित मशीनों में वाशिंग घोल का बार-बार उपयोग करने से यह आमतौर पर पतला हो जाता है। कुशल सफाई और कीटाणुनाशक प्रभावों के लिए डिटर्जेंट घोल की उचित क्षारीयता बनाए रखना महत्वपूर्ण है।",
            calculators: {
                alkalinity: {
                    qualitative_title: "गुणात्मक परीक्षण (Qualitative Test)",
                    detergent_label: "डिटर्जेंट घोल (ml)",
                    hcl_label: "N/10 HCl (ml)",
                    qualitative_button: "क्षारीयता जांचें",
                    qualitative_result: "यदि मिश्रण लाल हो जाता है, तो यह 0.5% से अधिक कास्टिक सोडा के रूप में क्षारीयता दर्शाता है, जो पर्याप्त है।",
                    direct_title: "मात्रात्मक परीक्षण (प्रत्यक्ष विधि)",
                    direct_label: "उपयोग किया गया 2.5 N सल्फ्यूरिक एसिड (ml)",
                    direct_button: "NaOH % की गणना करें",
                    direct_result_prefix: "क्षार % (NaOH के रूप में):",
                    lab_title: "मात्रात्मक परीक्षण (प्रयोगशाला विधि)",
                    lab_label_a: "कुल टाइट्रेशन रीडिंग (ml)",
                    lab_label_b: "पहली टाइट्रेशन रीडिंग (ml)",
                    lab_note: "नोट: यहाँ 'A' कुल एसिड उपयोग है और 'B' केवल फिनोल्फथेलिन एंडपॉइंट तक का उपयोग है।",
                    lab_button: "क्षारीयता की गणना करें",
                    lab_result_free: "मुक्त कास्टिक % =",
                    lab_result_total: "कुल क्षार % ="
                },
                chlorine: {
                    title: "उपलब्ध क्लोरीन परीक्षण",
                    label: "N/10 सोडियम थायोसल्फेट का उपयोग किया गया (V) ml",
                    note: "यह ब्लैंक रीडिंग घटाने के बाद अंतिम टाइट्रे मान है।",
                    button: "उपलब्ध क्लोरीन % की गणना करें",
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
                <p>Milk remaining on the surface of dairy equipment and containers provides an excellent medium for microbial growth. Therefore, it is necessary to clean and sanitize dairy equipment properly.</p>
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
        solution_strength: {
            title: "Testing of Solution Strength",
            intro: "The strength of washing solution is generally expressed in terms of NaOH as it is often used as such or in combination with disodium phosphate and sodium metasilicate etc. An alkali equivalent to 1.5% NaOH is generally used for glass bottles and 0.5% for can washing. Repeated usage of washing solutions in automatic machines generally gets diluted. It is important to maintain the proper alkalinity of detergent solution for efficient cleaning and germicidal effects.",
            calculators: {
                alkalinity: {
                    qualitative_title: "Qualitative Test",
                    detergent_label: "Detergent Solution (ml)",
                    hcl_label: "N/10 HCl (ml)",
                    qualitative_button: "Check Alkalinity",
                    qualitative_result: "If the mixture turns red it indicates alkalinity greater than 0.5% as caustic soda, which is sufficient.",
                    direct_title: "Quantitative Test (Direct Method)",
                    direct_label: "2.5 N Sulphuric Acid Used (ml)",
                    direct_button: "Calculate NaOH %",
                    direct_result_prefix: "Alkali % (as NaOH):",
                    lab_title: "Quantitative Test (Laboratory Method)",
                    lab_label_a: "Total Titration Reading (ml)",
                    lab_label_b: "First Titration Reading (ml)",
                    lab_note: "Note: Here 'A' is the total acid used and 'B' is the usage up to the phenolphthalein endpoint only.",
                    lab_button: "Calculate Alkalinity",
                    lab_result_free: "% free caustic =",
                    lab_result_total: "% total alkali ="
                },
                chlorine: {
                    title: "Available Chlorine Test",
                    label: "N/10 Sodium Thiosulphate Used (V) ml",
                    note: "This is the final titre value after deducting the blank reading.",
                    button: "Calculate Available Chlorine %",
                    result_prefix: "Available Chlorine:"
                }
            }
        }
    }
}

    