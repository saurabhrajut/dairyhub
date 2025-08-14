
export const evaporationDryingContent = {
    hi: {
        title: "वाष्पीकरण और सुखाने की प्रक्रियाएं",
        description: "संघनित और पाउडर दूध उत्पादों के उत्पादन में अंतर्दृष्टि।",
        tabs: {
            intro: "परिचय",
            evaporated_milk: "वाष्पित दूध",
            milk_powder: "दूध पाउडर",
            whey_processing: "मट्ठा प्रसंस्करण",
            casein_production: "कैसिइन उत्पादन",
            drying_principles: "सुखाने के सिद्धांत"
        },
        sections: {
            introduction: {
                title: "I. परिचय: डेयरी में जल न्यूनीकरण",
                content: "<p>डेयरी उद्योग में, वाष्पीकरण और सुखाने महत्वपूर्ण प्रक्रियाएं हैं जिनका उपयोग दूध से पानी निकालकर केंद्रित और स्थिर उत्पाद बनाने के लिए किया जाता है। ये तकनीकें न केवल शेल्फ जीवन का विस्तार करती हैं बल्कि परिवहन और भंडारण की लागत को भी काफी कम करती हैं। वाष्पीकरण आंशिक रूप से पानी को हटाता है, जिससे संघनित दूध जैसे तरल उत्पाद बनते हैं, जबकि सुखाने से लगभग सारा पानी निकल जाता है, जिससे दूध पाउडर बनता है। ये प्रक्रियाएं दूध की पोषण अखंडता को बनाए रखते हुए दूध के ठोस पदार्थों को संरक्षित करने के लिए महत्वपूर्ण हैं, जो उन्हें वैश्विक डेयरी आपूर्ति श्रृंखला का एक अनिवार्य हिस्सा बनाती हैं।</p>",
                table: {
                    headers: ["उत्पाद प्रकार", "आधार सामग्री", "जल न्यूनीकरण", "विशेषताएँ", "वसा सामग्री (%)", "प्रोटीन सामग्री (%)", "शेल्फ जीवन", "प्रशीतन आवश्यक?", "प्राथमिक उपयोग"],
                    rows: [
                        { product_type: "वाष्पित दूध", base_material: "पूरा दूध", water_reduction: "~60%", characteristics: "गाढ़ा तरल, पके हुए स्वाद के साथ", fat_content: "≥7.5", protein_content: "≥6.5", shelf_life: ">1 वर्ष", refrigeration_required: "डिब्बाबंदी के बाद नहीं", primary_uses: "कॉफी, खाना पकाने, बेकिंग में क्रीम के विकल्प के रूप में" },
                        { product_type: "मीठा संघनित दूध", base_material: "पूरा दूध + चीनी", water_reduction: "~60%", characteristics: "बहुत मीठा, चिपचिपा तरल", fat_content: "≥8", protein_content: "≥6.5", shelf_life: ">1 वर्ष", refrigeration_required: "नहीं", primary_uses: "मिठाई, मिठाई, टॉपिंग" },
                        { product_type: "पूरा दूध पाउडर", base_material: "पूरा दूध", water_reduction: "~87%", characteristics: "सूखा पाउडर, पुनर्गठन के बाद दूध जैसा स्वाद", fat_content: "≥26", protein_content: "≥24", shelf_life: "6-12 महीने", refrigeration_required: "नहीं", primary_uses: "पुनर्गठित दूध, शिशु फार्मूला, बेकरी, कन्फेक्शनरी" },
                        { product_type: "स्किम्ड दूध पाउडर", base_material: "स्किम्ड दूध", water_reduction: "~90%", characteristics: "सूखा पाउडर, कम वसा वाला स्वाद", fat_content: "≤1.5", protein_content: "≥34", shelf_life: "1-2 साल", refrigeration_required: "नहीं", primary_uses: "पुनर्गठित दूध, दही, पनीर, बेकरी" }
                    ]
                }
            },
            evaporated_milk: {
                title: "II. वाष्पित दूध: प्रसंस्करण और सिद्धांत",
                content: "<p>वाष्पित दूध, जिसे अनमीठा संघनित दूध के रूप में भी जाना जाता है, एक शेल्फ-स्थिर डिब्बाबंद दूध उत्पाद है जिसे इसके मूल मात्रा के लगभग 60% पानी को हटाकर बनाया गया है। यह प्रक्रिया दूध के पोषक तत्वों और दूध के ठोस पदार्थों को केंद्रित करती है, जिसके परिणामस्वरूप एक गाढ़ा, थोड़ा कैरामेलाइज्ड स्वाद वाला उत्पाद बनता है।</p>",
                subsections: {
                    pre_treatment: {
                        title: "प्रारंभिक उपचार और मानकीकरण",
                        content: "<p>उत्पादन प्रक्रिया आने वाले दूध की सावधानीपूर्वक जाँच के साथ शुरू होती है ताकि यह सुनिश्चित हो सके कि यह उच्च गुणवत्ता वाला है। दूध को फिर अंतिम उत्पाद में एक विशिष्ट वसा-से-ठोस-गैर-वसा अनुपात प्राप्त करने के लिए मानकीकृत किया जाता है। गर्मी स्थिरता में सुधार के लिए फॉस्फेट या साइट्रेट जैसे स्टेबलाइजिंग लवणों का जोड़ एक महत्वपूर्ण कदम है, जो बाद में तीव्र गर्मी उपचार के दौरान दूध को जमने से रोकता है।</p>"
                    },
                    evaporation: {
                        title: "वाष्पीकरण: पानी हटाने का मूल",
                        content: "<p>मानकीकरण के बाद, दूध को लगभग 40-50% की कुल ठोस सामग्री तक केंद्रित करने के लिए वाष्पीकरण से गुजरना पड़ता है। पानी को हटाने के लिए दूध को वैक्यूम के तहत उबालकर यह हासिल किया जाता है, जो कम तापमान पर उबलने की अनुमति देता है। यह सौम्य दृष्टिकोण अत्यधिक गर्मी से प्रेरित रासायनिक परिवर्तनों को कम करने, उत्पाद के स्वाद और रंग को संरक्षित करने के लिए महत्वपूर्ण है।</p>"
                    },
                    evaporator_types: {
                        title: "वाष्पीकरणकर्ता के प्रकार",
                        content: `
                            <ul>
                                <li><strong>गिरती फिल्म वाष्पीकरणकर्ता:</strong> यह सबसे अधिक इस्तेमाल किया जाने वाला प्रकार है। दूध गर्म ऊर्ध्वाधर ट्यूबों की आंतरिक सतहों पर एक पतली फिल्म के रूप में बहता है। इस बड़े सतह क्षेत्र के कारण पानी तेजी से वाष्पित होता है।</li>
                                <li><strong>बहु-प्रभाव वाष्पीकरणकर्ता:</strong> ऊर्जा दक्षता में सुधार करने के लिए, कई वाष्पीकरणकर्ताओं को श्रृंखला में व्यवस्थित किया जाता है। एक प्रभाव से उत्पन्न भाप का उपयोग अगले को गर्म करने के लिए किया जाता है, जिससे समग्र भाप की खपत कम हो जाती है।</li>
                            </ul>`
                    },
                    sterilization: {
                        title: "समरूपता, डिब्बाबंदी और नसबंदी",
                        content: "<p>केंद्रित दूध को फिर समरूप बनाया जाता है ताकि भंडारण के दौरान वसा पृथक्करण को रोका जा सके। फिर इसे डिब्बे में भरा जाता है और भली भांति बंद करके सील कर दिया जाता है। अंतिम चरण नसबंदी है, जहाँ बंद डिब्बे को गर्मी के अधीन किया जाता है - या तो बैच रिटॉर्ट्स में या निरंतर प्रणालियों में - सभी शेष सूक्ष्मजीवों को नष्ट करने और व्यावसायिक बाँझपन प्राप्त करने के लिए। यह अंतिम गर्मी उपचार वाष्पित दूध को इसकी विशिष्ट पकी हुई स्वाद और थोड़ी गहरी रंगत भी देता है।</p>"
                    }
                }
            },
            milk_powder: {
                title: "III. दूध पाउडर: स्प्रे सुखाने के माध्यम से उत्पादन",
                content: "<p>दूध पाउडर, या सूखा दूध, एक निर्मित डेयरी उत्पाद है जो दूध से लगभग सभी पानी को वाष्पीकरण और स्प्रे सुखाने के माध्यम से हटाकर बनाया जाता है। दूध पाउडर का मुख्य उद्देश्य दूध को संरक्षित करना है; इसकी कम नमी सामग्री के कारण, इसका शेल्फ जीवन तरल दूध की तुलना में बहुत लंबा होता है और इसे प्रशीतन की आवश्यकता नहीं होती है।</p>",
                subsections: {
                    initial_processing: {
                        title: "प्रारंभिक प्रसंस्करण और एकाग्रता",
                        content: "<p>दूध पाउडर के उत्पादन में पहला कदम कच्चे दूध को गुणवत्ता के लिए जाँचने और स्किम्ड दूध या पूरे दूध में अलग करना है। दूध को फिर 88°C पर 15-20 सेकंड के लिए पहले से गरम किया जाता है ताकि अधिकांश सूक्ष्मजीवों को नष्ट किया जा सके और एंजाइमों को निष्क्रिय किया जा सके। इसके बाद, दूध को वाष्पीकरण के माध्यम से 45-55% की कुल ठोस सामग्री तक केंद्रित किया जाता है, ठीक वाष्पित दूध के उत्पादन की तरह। यह एकाग्रता चरण बाद के स्प्रे सुखाने की प्रक्रिया को अधिक कुशल और किफायती बनाता है।</p>"
                    },
                    composition: {
                        title: "दूध पाउडर की संरचना",
                        table: {
                            headers: ["घटक", "पूरा दूध पाउडर (WMP) (%)", "स्किम्ड दूध पाउडर (SMP) (%)"],
                            rows: [
                                { component: "नमी", wmp: "2.5 - 4.5", smp: "3.5 - 4.5" },
                                { component: "वसा", wmp: "26 - 40", smp: "अधिकतम 1.5" },
                                { component: "प्रोटीन", wmp: "24 - 27", smp: "34 - 37" },
                                { component: "लैक्टोज", wmp: "36 - 38", smp: "49 - 52" },
                                { component: "खनिज (राख)", wmp: "5.5 - 6.5", smp: "7.9 - 8.2" }
                            ]
                        }
                    }
                }
            },
            whey_processing: {
                title: "IV. मट्ठा प्रसंस्करण: मूल्य वर्धित उत्पादों में एक उप-उत्पाद को बदलना",
                content: "<p>मट्ठा, एक बार पनीर बनाने का एक उप-उत्पाद माना जाता था, अब एक मूल्यवान घटक है जिसे विभिन्न प्रकार के खाद्य और पोषण उत्पादों में संसाधित किया जाता है। मट्ठा प्रसंस्करण में एकाग्रता और सुखाने की तकनीकें शामिल हैं जो दूध पाउडर के उत्पादन के समान हैं।</p>",
                subsections: {
                    initial_separation: {
                        title: "प्रारंभिक पृथक्करण और स्पष्टीकरण",
                        content: "<p>पनीर बनाने से प्राप्त तरल मट्ठा में अभी भी जुर्माना कैसिइन कण और अवशिष्ट वसा हो सकता है। इन्हें स्पष्टीकरण और क्रीम पृथक्करण के माध्यम से हटा दिया जाता है। परिणामी मट्ठा को फिर पाश्चुरीकृत किया जाता है ताकि किसी भी शेष सूक्ष्मजीवों को नष्ट किया जा सके और इसे आगे के प्रसंस्करण के लिए तैयार किया जा सके।</p>"
                    },
                    protein_concentration: {
                        title: "प्रोटीन एकाग्रता: WPC और WPI का उत्पादन",
                        content: "<p>मट्ठा प्रोटीन को केंद्रित करने के लिए अल्ट्राफिल्ट्रेशन (UF) एक महत्वपूर्ण प्रक्रिया है। UF झिल्ली का उपयोग करके लैक्टोज, खनिज और पानी को हटा देता है जबकि बड़े प्रोटीन अणुओं को बनाए रखता है। यह मट्ठा प्रोटीन कॉन्सेंट्रेट (WPC) का उत्पादन करता है, जिसमें 35% से 80% तक प्रोटीन होता है। आगे के प्रसंस्करण, जैसे आयन-विनिमय क्रोमैटोग्राफी, का उपयोग मट्ठा प्रोटीन आइसोलेट्स (WPI) बनाने के लिए किया जा सकता है, जिसमें 90% से अधिक प्रोटीन होता है।</p>"
                    },
                    drying_applications: {
                        title: "सुखाने और अनुप्रयोग",
                        content: "<p>केंद्रित मट्ठा या WPC को फिर स्प्रे सुखाकर पाउडर बनाया जाता है। परिणामी मट्ठा पाउडर और WPC का व्यापक रूप से खाद्य उद्योग में उनके कार्यात्मक गुणों (जैसे, पायसीकरण, गेलिंग) और पोषण मूल्य के लिए उपयोग किया जाता है। वे खेल पोषण की खुराक, शिशु फार्मूला, पके हुए माल और प्रसंस्कृत खाद्य पदार्थों में पाए जाते हैं।</p>"
                    }
                }
            },
            casein_production: {
                title: "V. कैसिइन उत्पादन: दूध से प्रोटीन को अलग करना",
                content: "<p>कैसिइन स्किम्ड दूध में मुख्य प्रोटीन है, जो कुल प्रोटीन का लगभग 80% है। इसे दूध से इसके आइसोइलेक्ट्रिक बिंदु पर वर्षा द्वारा अलग किया जा सकता है। परिणामी उत्पाद, कैसिइन, एक उच्च-प्रोटीन घटक है जिसका उपयोग विभिन्न खाद्य और औद्योगिक अनुप्रयोगों में किया जाता है।</p>",
                subsections: {
                    precipitation_methods: {
                        title: "वर्षा के तरीके: एसिड बनाम रेनेट कैसिइन",
                        table: {
                            headers: ["चरण", "एसिड कैसिइन", "रेनेट कैसिइन"],
                            rows: [
                                { stage: "दूध का प्रकार", acid_casein: "पाश्चुरीकृत स्किम्ड दूध", rennet_casein: "पाश्चुरीकृत स्किम्ड दूध" },
                                { stage: "वर्षा एजेंट", acid_casein: "हाइड्रोक्लोरिक या सल्फ्यूरिक एसिड", rennet_casein: "रेनेट एंजाइम" },
                                { stage: "वर्षा pH", acid_casein: "4.6 (आइसोइलेक्ट्रिक बिंदु)", rennet_casein: "6.2 - 6.4" },
                                { stage: "तापमान", acid_casein: "35-40°C", rennet_casein: "30-35°C" },
                                { stage: "विशेषताएँ", acid_casein: "अघुलनशील, दानेदार", rennet_casein: "कैल्शियम कैसिनेट-फॉस्फेट कॉम्प्लेक्स" },
                                { stage: "अनुप्रयोग", acid_casein: "औद्योगिक उपयोग (चिपकने वाले, पेंट), खाद्य योजक", rennet_casein: "पनीर एनालॉग, प्रसंस्कृत पनीर" }
                            ]
                        }
                    },
                    drying_applications: {
                        title: "धुलाई, सुखाने और अनुप्रयोग",
                        content: "<p>वर्षा के बाद, कैसिइन दही को मट्ठा से अलग किया जाता है, धोया जाता है ताकि अवशिष्ट लैक्टोज और खनिजों को हटाया जा सके, और फिर सुखाया जाता है। सुखाने की प्रक्रिया में आमतौर पर पीसना, एक गर्म हवा के प्रवाह में सुखाना और अंतिम पाउडर को मिलिंग करना शामिल है। एसिड कैसिइन का उपयोग इसके पोषण मूल्य के लिए खाद्य पदार्थों में किया जाता है, जबकि रेनेट कैसिइन का उपयोग पनीर और अन्य डेयरी उत्पादों में इसकी बनावट और पिघलने के गुणों के लिए किया जाता है।</p>"
                    }
                }
            },
            drying_principles: {
                title: "VI. डेयरी में सुखाने के सिद्धांत और प्रौद्योगिकियां",
                subsections: {
                    technologies: {
                        title: "सुखाने की प्रौद्योगिकियां",
                        content: "<p>कई सुखाने की प्रौद्योगिकियों का उपयोग किया जाता है, प्रत्येक के अपने फायदे और सीमाएं हैं।</p>",
                        table: {
                            headers: ["प्रौद्योगिकी", "सिद्धांत", "उत्पाद रूप", "लाभ", "सीमाएं"],
                            rows: [
                                { technology: "स्प्रे सुखाने", principle: "तरल फ़ीड को गर्म हवा के प्रवाह में महीन बूंदों में परमाणु बनाना, जिससे तेजी से वाष्पीकरण होता है।", product_form: "महीन पाउडर", advantages: "निरंतर प्रक्रिया, कम गर्मी क्षति, अच्छा घुलनशीलता।", limitations: "उच्च पूंजी लागत, बड़े पदचिह्न।" },
                                { technology: "ड्रम सुखाने", principle: "केंद्रित तरल को आंतरिक रूप से गर्म घूमने वाले ड्रम की सतह पर एक पतली फिल्म के रूप में लागू करना। सूखी फिल्म को फिर बंद कर दिया जाता है।", product_form: "गुच्छे या पाउडर", advantages: "उच्च ऊर्जा कुशल, चिपचिपा उत्पादों के लिए उपयुक्त।", limitations: "अधिक गर्मी क्षति, खराब घुलनशीलता।" },
                                { technology: "फ्रीज सुखाने (लियोफिलाइजेशन)", principle: "उत्पाद को फ्रीज करना और फिर दबाव को कम करना ताकि जमे हुए पानी को सीधे ठोस से गैस (ऊर्ध्वपातन) में बदल दिया जा सके।", product_form: "छिद्रपूर्ण, हल्का ठोस", advantages: "उत्कृष्ट गुणवत्ता प्रतिधारण, न्यूनतम गर्मी क्षति, अच्छा पुनर्जलीकरण।", limitations: "बहुत महंगा, धीमी प्रक्रिया, उच्च ऊर्जा खपत।" }
                            ]
                        }
                    },
                    post_drying: {
                        title: "सुखाने के बाद के चरण: इंस्टेंटाइजेशन और एग्लोमरेशन",
                        content: "<p>मानक दूध पाउडर में अक्सर खराब घुलनशीलता होती है। इंस्टेंटाइजेशन इस समस्या को हल करने के लिए डिज़ाइन की गई एक प्रक्रिया है। इसमें पाउडर कणों को थोड़ा गीला करना शामिल है ताकि वे एक साथ चिपक जाएं और छिद्रपूर्ण समूह बना सकें। ये समूह पानी में अधिक आसानी से डूब जाते हैं और तेजी से घुल जाते हैं, जिससे एक 'तत्काल' उत्पाद बनता है।</p>"
                    },
                    conclusion: {
                        title: "निष्कर्ष",
                        content: "<p>संक्षेप में, वाष्पीकरण और सुखाने डेयरी उद्योग में परिवर्तनकारी प्रक्रियाएं हैं जो दूध की स्थिरता, परिवहन क्षमता और बहुमुखी प्रतिभा को बहुत बढ़ाती हैं। जबकि ये तकनीकें दूध के ठोस पदार्थों को संरक्षित करने में अत्यधिक प्रभावी हैं, उन्हें सावधानीपूर्वक नियंत्रित किया जाना चाहिए ताकि गर्मी से प्रेरित रासायनिक परिवर्तनों को कम किया जा सके जो स्वाद, रंग और पोषण मूल्य को प्रभावित कर सकते हैं। इन प्रक्रियाओं के पीछे के सिद्धांतों को समझना लगातार उच्च गुणवत्ता वाले केंद्रित और सूखे डेयरी उत्पादों के उत्पादन के लिए आवश्यक है जो दुनिया भर के उपभोक्ताओं की मांगों को पूरा करते हैं।</p>"
                    }
                }
            }
        }
    },
    en: {
        title: "Evaporation and Drying Processes",
        description: "Insights into the production of condensed and powdered milk products.",
        tabs: {
            intro: "Introduction",
            evaporated_milk: "Evaporated Milk",
            milk_powder: "Milk Powder",
            whey_processing: "Whey Processing",
            casein_production: "Casein Production",
            drying_principles: "Drying Principles"
        },
        sections: {
            introduction: {
                title: "I. Introduction: Water Reduction in Dairy",
                content: "<p>In the dairy industry, evaporation and drying are critical processes used to create concentrated and stable products by removing water from milk. These techniques not only extend shelf life but also significantly reduce transportation and storage costs. Evaporation partially removes water, leading to liquid products like condensed milk, while drying removes almost all water, resulting in milk powder. These processes are vital for preserving milk solids while maintaining the nutritional integrity of the milk, making them an essential part of the global dairy supply chain.</p>",
                table: {
                    headers: ["Product Type", "Base Material", "Water Reduction", "Characteristics", "Fat Content (%)", "Protein Content (%)", "Shelf Life", "Refrigeration Required?", "Primary Uses"],
                    rows: [
                        { product_type: "Evaporated Milk", base_material: "Whole milk", water_reduction: "~60%", characteristics: "Thick liquid, with a cooked flavor", fat_content: "≥7.5", protein_content: "≥6.5", shelf_life: ">1 year", refrigeration_required: "Not after canning", primary_uses: "Cream substitute in coffee, cooking, baking" },
                        { product_type: "Sweetened Condensed Milk", base_material: "Whole milk + sugar", water_reduction: "~60%", characteristics: "Very sweet, viscous liquid", fat_content: "≥8", protein_content: "≥6.5", shelf_life: ">1 year", refrigeration_required: "No", primary_uses: "Desserts, sweets, toppings" },
                        { product_type: "Whole Milk Powder", base_material: "Whole milk", water_reduction: "~87%", characteristics: "Dry powder, milk-like taste after reconstitution", fat_content: "≥26", protein_content: "≥24", shelf_life: "6-12 months", refrigeration_required: "No", primary_uses: "Reconstituted milk, infant formula, bakery, confectionery" },
                        { product_type: "Skimmed Milk Powder", base_material: "Skimmed milk", water_reduction: "~90%", characteristics: "Dry powder, low-fat taste", fat_content: "≤1.5", protein_content: "≥34", shelf_life: "1-2 years", refrigeration_required: "No", primary_uses: "Reconstituted milk, yogurt, cheese, bakery" }
                    ]
                }
            },
            evaporated_milk: {
                title: "II. Evaporated Milk: Processing and Principles",
                content: "<p>Evaporated milk, also known as unsweetened condensed milk, is a shelf-stable canned milk product made by removing about 60% of the water from its original volume. This process concentrates the milk's nutrients and milk solids, resulting in a thicker product with a slightly caramelized flavor.</p>",
                subsections: {
                    pre_treatment: {
                        title: "Pre-treatment and Standardization",
                        content: "<p>The production process begins with careful checking of the incoming milk to ensure it is of high quality. The milk is then standardized to achieve a specific fat-to-solids-not-fat ratio in the final product. The addition of stabilizing salts like phosphates or citrates is a crucial step to improve heat stability, which prevents the milk from coagulating during the subsequent intense heat treatment.</p>"
                    },
                    evaporation: {
                        title: "Evaporation: The Core of Water Removal",
                        content: "<p>After standardization, the milk undergoes evaporation to concentrate it to a total solids content of about 40-50%. This is achieved by boiling the milk under a vacuum to remove water, which allows boiling at a lower temperature. This gentle approach is critical for minimizing heat-induced chemical changes, preserving the flavor and color of the product.</p>"
                    },
                    evaporator_types: {
                        title: "Types of Evaporators",
                        content: `
                            <ul>
                                <li><strong>Falling Film Evaporators:</strong> This is the most commonly used type. Milk flows as a thin film on the inner surfaces of heated vertical tubes. Water evaporates rapidly due to this large surface area.</li>
                                <li><strong>Multi-effect Evaporators:</strong> To improve energy efficiency, several evaporators are arranged in series. The steam generated from one effect is used to heat the next, reducing overall steam consumption.</li>
                            </ul>`
                    },
                    sterilization: {
                        title: "Homogenization, Canning, and Sterilization",
                        content: "<p>The concentrated milk is then homogenized to prevent fat separation during storage. It is then filled into cans and hermetically sealed. The final step is sterilization, where the sealed cans are subjected to heat—either in batch retorts or in continuous systems—to destroy all remaining microorganisms and achieve commercial sterility. This final heat treatment also gives evaporated milk its characteristic cooked flavor and slightly darker color.</p>"
                    }
                }
            },
            milk_powder: {
                title: "III. Milk Powder: Production through Spray Drying",
                content: "<p>Milk powder, or dried milk, is a manufactured dairy product made by removing nearly all water from milk through evaporation and spray drying. The main purpose of milk powder is to preserve milk; due to its low moisture content, it has a much longer shelf life than liquid milk and does not require refrigeration.</p>",
                subsections: {
                    initial_processing: {
                        title: "Initial Processing and Concentration",
                        content: "<p>The first step in producing milk powder is to check the raw milk for quality and separate it into skimmed milk or whole milk. The milk is then preheated to 88°C for 15-20 seconds to destroy most microorganisms and inactivate enzymes. Following this, the milk is concentrated to a total solids content of 45-55% through evaporation, just like in the production of evaporated milk. This concentration step makes the subsequent spray drying process more efficient and economical.</p>"
                    },
                    composition: {
                        title: "Composition of Milk Powder",
                        table: {
                            headers: ["Component", "Whole Milk Powder (WMP) (%)", "Skimmed Milk Powder (SMP) (%)"],
                            rows: [
                                { component: "Moisture", wmp: "2.5 - 4.5", smp: "3.5 - 4.5" },
                                { component: "Fat", wmp: "26 - 40", smp: "Max 1.5" },
                                { component: "Protein", wmp: "24 - 27", smp: "34 - 37" },
                                { component: "Lactose", wmp: "36 - 38", smp: "49 - 52" },
                                { component: "Minerals (Ash)", wmp: "5.5 - 6.5", smp: "7.9 - 8.2" }
                            ]
                        }
                    }
                }
            },
            whey_processing: {
                title: "IV. Whey Processing: Turning a By-product into Value-Added Products",
                content: "<p>Whey, once considered a by-product of cheesemaking, is now a valuable ingredient processed into a variety of food and nutritional products. Whey processing involves concentration and drying techniques similar to those used in the production of milk powder.</p>",
                subsections: {
                    initial_separation: {
                        title: "Initial Separation and Clarification",
                        content: "<p>The liquid whey from cheesemaking may still contain fine casein particles and residual fat. These are removed through clarification and cream separation. The resulting whey is then pasteurized to destroy any remaining microorganisms and prepare it for further processing.</p>"
                    },
                    protein_concentration: {
                        title: "Protein Concentration: Production of WPC and WPI",
                        content: "<p>Ultrafiltration (UF) is a key process for concentrating whey proteins. UF uses membranes to remove lactose, minerals, and water while retaining the larger protein molecules. This produces Whey Protein Concentrate (WPC), which contains from 35% to 80% protein. Further processing, such as ion-exchange chromatography, can be used to create Whey Protein Isolates (WPI), which contain over 90% protein.</p>"
                    },
                    drying_applications: {
                        title: "Drying and Applications",
                        content: "<p>The concentrated whey or WPC is then spray-dried to form a powder. The resulting whey powder and WPC are widely used in the food industry for their functional properties (e.g., emulsification, gelling) and nutritional value. They are found in sports nutrition supplements, infant formula, baked goods, and processed foods.</p>"
                    }
                }
            },
            casein_production: {
                title: "V. Casein Production: Isolating Protein from Milk",
                content: "<p>Casein is the main protein in skimmed milk, accounting for about 80% of the total protein. It can be isolated from milk by precipitation at its isoelectric point. The resulting product, casein, is a high-protein ingredient used in various food and industrial applications.</p>",
                subsections: {
                    precipitation_methods: {
                        title: "Precipitation Methods: Acid vs. Rennet Casein",
                        table: {
                            headers: ["Step", "Acid Casein", "Rennet Casein"],
                            rows: [
                                { stage: "Type of Milk", acid_casein: "Pasteurized skimmed milk", rennet_casein: "Pasteurized skimmed milk" },
                                { stage: "Precipitation Agent", acid_casein: "Hydrochloric or sulfuric acid", rennet_casein: "Rennet enzyme" },
                                { stage: "Precipitation pH", acid_casein: "4.6 (isoelectric point)", rennet_casein: "6.2 - 6.4" },
                                { stage: "Temperature", acid_casein: "35-40°C", rennet_casein: "30-35°C" },
                                { stage: "Characteristics", acid_casein: "Insoluble, granular", rennet_casein: "Calcium caseinate-phosphate complex" },
                                { stage: "Applications", acid_casein: "Industrial uses (adhesives, paints), food additives", rennet_casein: "Cheese analogs, processed cheese" }
                            ]
                        }
                    },
                    drying_applications: {
                        title: "Washing, Drying, and Applications",
                        content: "<p>After precipitation, the casein curd is separated from the whey, washed to remove residual lactose and minerals, and then dried. The drying process typically involves grinding, drying in a stream of hot air, and milling the final powder. Acid casein is used in foods for its nutritional value, while rennet casein is used in cheese and other dairy products for its textural and melting properties.</p>"
                    }
                }
            },
            drying_principles: {
                title: "VI. Principles and Technologies of Drying in Dairy",
                subsections: {
                    technologies: {
                        title: "Drying Technologies",
                        content: "<p>Several drying technologies are used, each with its own advantages and limitations.</p>",
                        table: {
                            headers: ["Technology", "Principle", "Product Form", "Advantages", "Limitations"],
                            rows: [
                                { technology: "Spray Drying", principle: "Atomizing the liquid feed into fine droplets in a stream of hot air, leading to rapid evaporation.", product_form: "Fine powder", advantages: "Continuous process, low heat damage, good solubility.", limitations: "High capital cost, large footprint." },
                                { technology: "Drum Drying", principle: "Applying a thin film of concentrated liquid onto the surface of an internally heated rotating drum. The dried film is then scraped off.", product_form: "Flakes or powder", advantages: "High energy efficiency, suitable for viscous products.", limitations: "More heat damage, poor solubility." },
                                { technology: "Freeze Drying (Lyophilization)", principle: "Freezing the product and then reducing the pressure to allow the frozen water to change directly from solid to gas (sublimation).", product_form: "Porous, lightweight solid", advantages: "Excellent quality retention, minimal heat damage, good rehydration.", limitations: "Very expensive, slow process, high energy consumption." }
                            ]
                        }
                    },
                    post_drying: {
                        title: "Post-Drying Steps: Instantization and Agglomeration",
                        content: "<p>Standard milk powder often has poor solubility. Instantization is a process designed to solve this problem. It involves slightly wetting the powder particles to make them stick together and form porous agglomerates. These agglomerates sink more easily in water and dissolve quickly, creating an 'instant' product.</p>"
                    },
                    conclusion: {
                        title: "Conclusion",
                        content: "<p>In summary, evaporation and drying are transformative processes in the dairy industry that greatly enhance the stability, transportability, and versatility of milk. While these techniques are highly effective at preserving milk solids, they must be carefully controlled to minimize heat-induced chemical changes that can affect flavor, color, and nutritional value. Understanding the principles behind these processes is essential for consistently producing high-quality concentrated and dried dairy products that meet the demands of consumers worldwide.</p>"
                    }
                }
            }
        }
    }
}
