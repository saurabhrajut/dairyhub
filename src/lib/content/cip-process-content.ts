
export const cipProcessContent = {
    hi: {
        main_title: "डेयरी उपकरणों की धुलाई और सफाई",
        main_description: "विभिन्न डेयरी उपकरणों को साफ और स्वच्छ करने के लिए एक गाइड।",
        intro: {
            title: "परिचय और मिल्क स्टोन",
            p1: "डेयरी उपकरणों और कंटेनरों की सतह पर बचा हुआ दूध माइक्रोबियल विकास के लिए उत्कृष्ट माध्यम प्रदान करता है। इसलिए, डेयरी उपकरणों को ठीक से साफ और स्वच्छ करना आवश्यक है। सफाई और स्वच्छता पूरक प्रक्रियाएं हैं और अकेले कोई भी अंतिम परिणाम प्राप्त नहीं करता है। सफाई का मतलब दूध के अवशेष (गंदगी) को हटाना और सतह को इस गंदगी और व्यवहार्य जीव से मुक्त करना है।",
            milkstone_title: "मिल्क स्टोन:",
            milkstone_desc: "यह गर्म पानी और डिटर्जेंट समाधानों से सूखे दूध के ठोस और लवणों का संचय है। इसमें अघुलनशील कैल्शियम लवण और कैल्शियम फॉस्फेट और दूध प्रोटीन (जमा और अवक्षेपित) होते हैं।",
            composition_title: "संघटन",
            composition_desc: "इसमें 2.6-8.7% नमी; 3.6-17.6% वसा; 4.4-43.8% प्रोटीन और 42-67% राख होती है।"
        },
        cleaning_procedures: {
            title: "विभिन्न उपकरणों की सफाई प्रक्रियाएं",
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
                    lab_label_a: "टाइट्रेशन रीडिंग A (ml)",
                    lab_label_b: "टाइट्रेशन रीडिंग B (ml)",
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
        main_description: "A guide to clean and sanitize different dairy equipments.",
        intro: {
            title: "Introduction and Milk Stone",
            p1: "Milk remaining on the surface of dairy equipments and containers provides excellent medium for microbial growth. It is therefore, necessary to clean and sanitize dairy equipments properly. Cleaning and sanitization are complementary processes and alone none achieve the end result. Cleaning means removal of milk residue (Soil) and making the surface free of this soil and viable organism.",
            milkstone_title: "Milk Stone:",
            milkstone_desc: "Is accumulation of dried milk solids and salts from hot water and detergent solutions. It consists of insoluble calcium salts and calcium phosphate and milk proteins (coagulated & precipitated).",
            composition_title: "Composition",
            composition_desc: "It contains 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% proteins and 42-67% ash."
        },
        cleaning_procedures: {
            title: "Cleaning Procedures for Different Equipments",
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
                    lab_label_a: "Titration Reading A (ml)",
                    lab_label_b: "Titration Reading B (ml)",
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
