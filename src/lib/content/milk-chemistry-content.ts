
export const milkChemistryContent = {
    hi: {
        mainTitle: "दूध का रसायन विज्ञान",
        description: "दूध के विज्ञान में एक गहरा गोता।",
        backToTopics: "विषयों पर वापस जाएं",
        composition: {
            title: "दूध की संरचना",
            whatIsMilk: {
                title: "दूध क्या है?",
                fssaiDef: "<strong>FSSAI परिभाषा:</strong> “दूध एक स्वस्थ दूध देने वाले जानवर से पूर्ण दूध निकालने से प्राप्त सामान्य स्तन स्राव है। यह कोलोस्ट्रम से मुक्त होना चाहिए।”",
                usaDef: "<strong>USA की संघीय परिभाषा:</strong> \"दूध एक या एक से अधिक स्वस्थ गायों, जिन्हें ठीक से खिलाया और रखा गया हो, के पूर्ण दूध निकालने से प्राप्त ताजा, स्वच्छ लैक्टियल स्राव है, जिसमें प्रसव से 15 दिन पहले और 10 दिन बाद प्राप्त दूध शामिल नहीं है और जिसमें 8.5 प्रतिशत से कम ठोस-गैर-वसा और 3.25 प्रतिशत से कम दूध वसा नहीं है।\"",
                p1: "दूध एक जटिल जैविक तरल पदार्थ है जिसे तीन अलग-अलग चरणों में देखा जा सकता है:",
                phases: ["पायस (Emulsion): वसा ग्लोब्यूल्स पानी में बिखरे हुए हैं।", "कोलाइडल सस्पेंशन (Colloidal Suspension): कैसिइन प्रोटीन मिसेल पानी में निलंबित हैं।", "सच्चा घोल (True Solution): लैक्टोज, मट्ठा प्रोटीन, खनिज और विटामिन पूरी तरह से पानी में घुल जाते हैं।"]
            },
            generalComposition: {
                title: "दूध की सामान्य संरचना",
                headers: ["घटक", "%", "घटक", "%"],
                rows: [
                    { c1: "पानी", v1: "87.54", c2: "कैसिइन", v2: "2.63" },
                    { c1: "वसा", v1: "3.71", c2: "मट्ठा प्रोटीन", v2: "0.42" },
                    { c1: "प्रोटीन", v1: "3.18", c2: "प्रोटीज-पेप्टोन", v2: "0.13" },
                    { c1: "लैक्टोज", v1: "4.70", c2: "अन्य नाइट्रोजनयुक्त पदार्थ", v2: "0.11" },
                    { c1: "राख", v1: "0.76", c2: "कुल", v2: "100.0" }
                ]
            },
            speciesDifferences: {
                title: "प्रजातियों के कारण दूध की संरचना में अंतर",
                headers: ["प्रजाति", "पानी (%)", "वसा (%)", "चीनी (%)", "प्रोटीन (%)", "राख (%)"],
                rows: [
                    { species: "गाय", water: "87.54", fat: "3.71", sugar: "4.70", protein: "3.31", ash: "0.76" },
                    { species: "बकरी", water: "85.58", fat: "4.93", sugar: "4.78", protein: "4.11", ash: "0.89" },
                    { species: "भैंस", water: "82.90", fat: "7.50", sugar: "4.70", protein: "4.10", ash: "0.80" },
                    { species: "मनुष्य", water: "88.50", fat: "3.30", sugar: "6.80", protein: "1.30", ash: "0.20" }
                ]
            },
            water: {
                title: "दूध में पानी",
                p1: "पानी सबसे प्रचुर मात्रा में घटक है, जो एक निलंबित करने, फैलाने और घोलने वाले माध्यम के रूप में कार्य करता है। यह तीन रूपों में मौजूद है:",
                forms: [
                    { name: "मुक्त पानी", desc: "सबसे बड़ा हिस्सा, यह एक विलायक के रूप में कार्य करता है और माइक्रोबियल विकास का समर्थन करता है।" },
                    { name: "बाध्य पानी", desc: "प्रोटीन और अन्य घटकों से हाइड्रोजन बांड के माध्यम से बंधा हुआ। यह 0 डिग्री सेल्सियस पर नहीं जमता है, विलायक के रूप में कार्य नहीं करता है, और माइक्रोबियल विकास का समर्थन नहीं कर सकता है।" },
                    { name: "क्रिस्टलीकृत पानी", desc: "लैक्टोज हाइड्रेट (C₁₂H₂₂O₁₁·H₂O) जैसे घटकों की रासायनिक संरचना के भीतर मौजूद पानी। इसे हटाना सबसे कठिन है।" }
                ]
            }
        },
        mammaryGland: {
            title: "स्तन ग्रंथि और दूध स्राव",
            structure: {
                title: "स्तन ग्रंथि संरचना",
                p1: "स्तन ग्रंथि सचिव और संयोजी ऊतक से बनी होती है। मूल सचिव इकाइयाँ छोटी, अंगूर जैसी वस्तुएं होती हैं जिन्हें \"एल्वियोली\" कहा जाता है। 150-220 एल्वियोली का एक समूह एक लोब्यूल बनाता है, और कई लोब्यूल एक लोब बनाते हैं। गाय के थन में 4 अलग-अलग क्वार्टर होते हैं, प्रत्येक में एक निप्पल कुंड और ग्रंथि कुंड होता है, जिससे कई नलिकाएं एल्वियोली तक शाखाएं बनाती हैं।",
                p2: "प्रत्येक एल्वियोलस में एक केंद्रीय गुहा (लुमेन) के चारों ओर उपकला कोशिकाओं की एक एकल परत होती है और यह मायोएपिथेलियल कोशिकाओं से घिरा होता है जो दूध निकालने के लिए जिम्मेदार होते हैं।"
            },
            physiology: {
                title: "दूध स्राव की फिजियोलॉजी",
                p1: "दूध एल्वियोलस की उपकला कोशिकाओं में जटिल हार्मोनल नियंत्रण (एस्ट्रोजन, प्रोजेस्टेरोन, प्रोलैक्टिन, आदि) के तहत संश्लेषित होता है। दूध संश्लेषण के लिए अग्रदूत रक्त से लिए जाते हैं। प्रोटीन और लिपिड एंडोप्लाज्मिक रेटिकुलम में संश्लेषित होते हैं; लैक्टोज संश्लेषण और कैसिइन मिसेल की असेंबली गोल्गी उपकरण में होती है। स्रावित दूध के हर लीटर के लिए, लगभग 400-500 लीटर रक्त को थन से होकर परिचालित होना चाहिए।",
                ejectionTitle: "दूध निकालना (लेट-डाउन)",
                ejectionText: "यह एक प्रतिवर्त क्रिया है जो हार्मोन ऑक्सीटोसिन द्वारा नियंत्रित होती है, जो मायोएपिथेलियल कोशिकाओं को अनुबंधित करने और एल्वियोली से दूध को नलिकाओं में निचोड़ने का कारण बनती है। यह प्रतिवर्त लगभग 10 मिनट तक रहता है।"
            },
            precursors: {
                title: "दूध अग्रदूत",
                caption: "रक्त प्लाज्मा और दूध संरचना की तुलना",
                headers: ["घटक", "रक्त प्लाज्मा (%)", "दूध (%)"],
                rows: [
                    { constituent: "पानी", plasma: "91.0", milk: "87.0" },
                    { constituent: "ग्लूकोज", plasma: "0.05", milk: "लैक्टोज: 4.8" },
                    { constituent: "सीरम एल्ब्यूमिन", plasma: "3.20", milk: "लैक्टलब्यूमिन: 0.52" },
                    { constituent: "सीरम ग्लोबुलिन", plasma: "4.40", milk: "ग्लोबुलिन: 0.05" },
                    { constituent: "अमीनो एसिड", plasma: "0.003", milk: "कैसिइन: 2.9" },
                    { constituent: "तटस्थ वसा", plasma: "0.09", milk: "3.8" },
                    { constituent: "कैल्शियम", plasma: "0.009", milk: "0.12" }
                ]
            }
        },
        proteins: {
            title: "दूध प्रोटीन",
            overview: {
                title: "दूध प्रोटीन का अवलोकन",
                p1: "प्रोटीन दूध के सबसे आवश्यक पोषक तत्वों में से एक है, जो लगभग 3.5% पर मौजूद है। इसमें सभी आवश्यक अमीनो एसिड होते हैं। दूध में प्रोटीन को दो मुख्य समूहों में बांटा गया है: <strong>कैसिइन (~80%)</strong> और <strong>मट्ठा प्रोटीन (~20%)</strong>।"
            },
            casein: {
                title: "कैसिइन (~80% दूध प्रोटीन)",
                p1: "कैसिइन फॉस्फोप्रोटीन का एक वर्ग है जो दूध में जटिल कणों के रूप में मौजूद होता है जिन्हें <strong>मिसेल</strong> कहा जाता है। ये मिसेल ही दूध को सफेद और अपारदर्शी बनाते हैं। जैविक रूप से, कैसिइन कैल्शियम और फॉस्फेट के वाहक के रूप में कार्य करता है। सभी कैसिइन 4.6 (उनके आइसोइलेक्ट्रिक बिंदु) के पीएच पर अवक्षेपित होते हैं।",
                fractionsTitle: "कैसिइन भिन्न",
                fractionsText: "कैसिइन चार मुख्य भिन्नों से बना है: αs1-कैसिइन, αs2-कैसिइन, β-कैसिइन, और κ-कैसिइन। κ-कैसिइन मिसेल की सतह पर स्थित होता है और इसकी स्थिरता के लिए जिम्मेदार होता है।",
                coagulationTitle: "कैसिइन जमावट (दही बनना)",
                coagulationText: "कैसिइन की जमावट की क्षमता पनीर और दही जैसे उत्पाद बनाने के लिए मौलिक है। यह कई तरीकों से होता है:",
                coagulationTypes: [
                    { name: "अम्ल जमावट", desc: "जब दूध का पीएच 4.6 तक गिर जाता है (जैसे, नींबू/सिरका मिलाने या जीवाणु किण्वन के माध्यम से), कैसिइन मिसेल अपना नकारात्मक चार्ज खो देते हैं और एक जेल बनाने के लिए एकत्रित होते हैं। यह पनीर और दही के पीछे का सिद्धांत है।" },
                    { name: "एंजाइमी जमावट", desc: "एंजाइम रेनेट (या रेनिन) विशेष रूप से κ-कैसिइन को तोड़ता है, मिसेल को अस्थिर करता है और उन्हें कैल्शियम की उपस्थिति में एक साथ गुच्छे बनाने का कारण बनता है। यह अधिकांश चीज़मेकिंग का आधार है।" },
                    { name: "अल्कोहल वर्षा", desc: "अल्कोहल मिसेल की सुरक्षात्मक परत को निर्जलित करता है। यदि दूध पहले से ही अम्लीय (अस्थिर) है, तो प्रोटीन जमा हो जाएगा। यह दूध की ताजगी के लिए एक त्वरित परीक्षण है।" },
                    { name: "गर्मी वर्षा", desc: "जबकि शुद्ध कैसिइन गर्मी-स्थिर है, बहुत उच्च तापमान पर लंबे समय तक गर्म करने (जैसे, दबाव में 120 डिग्री सेल्सियस) से जमावट हो सकती है।" }
                ]
            },
            whey: {
                title: "मट्ठा प्रोटीन (~20% दूध प्रोटीन)",
                p1: "कैसिइन वर्षा के बाद तरल मट्ठा में शेष प्रोटीन को मट्ठा प्रोटीन कहा जाता है। ये गोलाकार प्रोटीन कैसिइन की तुलना में अधिक पानी में घुलनशील होते हैं और गर्मी से विकृत हो जाते हैं।",
                fractionsTitle: "मट्ठा प्रोटीन भिन्न",
                fractions: [
                    { name: "बीटा-लैक्टोग्लोबुलिन (β-Lg)", desc: "कुल मट्ठा प्रोटीन का लगभग आधा हिस्सा होता है। यह गर्मी से जमा होता है और आवश्यक अमीनो एसिड का एक उत्कृष्ट स्रोत है।" },
                    { name: "अल्फा-लैक्टलब्यूमिन (α-La)", desc: "मानव दूध में एक प्रमुख प्रोटीन, यह ट्रिप्टोफैन का एक अच्छा स्रोत है और लैक्टोज संश्लेषण में शामिल है।" },
                    { name: "इम्युनोग्लोबुलिन (Ig)", desc: "ये एंटीबॉडी हैं जो निष्क्रिय प्रतिरक्षा प्रदान करते हैं और कोलोस्ट्रम में बहुत अधिक सांद्रता में पाए जाते हैं।" },
                    { name: "गोजातीय सीरम एल्ब्यूमिन (BSA)", desc: "अच्छे वसा-बाध्यकारी गुणों वाला एक बड़ा प्रोटीन।" }
                ]
            }
        },
        fat: {
            title: "दूध वसा (लिपिड)",
            characteristics: {
                title: "दूध वसा की विशेषताएं",
                p1: "वसा दूध का सबसे व्यावसायिक रूप से महत्वपूर्ण और परिवर्तनशील घटक है। लगभग 98% दूध वसा ट्राइग्लिसराइड्स का मिश्रण है। यह दूध वसा ग्लोब्यूल झिल्ली (MFGM) नामक एक सुरक्षात्मक झिल्ली से घिरे छोटे ग्लोब्यूल्स (0.1-15 माइक्रोन व्यास) के रूप में मौजूद होता है।",
                p2: "दूध वसा अपनी छोटी-श्रृंखला फैटी एसिड (जैसे ब्यूटिरिक एसिड, C4:0) के उच्च अनुपात के कारण अद्वितीय है, जो इसके विशिष्ट स्वाद में योगदान देता है। यह विस्तृत विविधता फैटी एसिड भी दूध वसा को एक व्यापक पिघलने की सीमा (लगभग -30 डिग्री सेल्सियस से +40 डिग्री सेल्सियस) देती है, जिससे यह प्रशीतन तापमान पर ठोस और शरीर के तापमान पर तरल हो जाता है।"
            },
            stability: {
                title: "वसा ग्लोब्यूल्स और इमल्शन स्थिरता",
                p1: "दूध एक तेल-में-पानी का पायस है। MFGM वसा ग्लोब्यूल्स को स्थिर करता है, उन्हें एक साथ गुच्छे बनाने (एकत्रीकरण) से रोकता है।",
                creamingTitle: "क्रीमिंग",
                creamingText: "उनके कम घनत्व के कारण, वसा ग्लोब्यूल्स ऊपर उठते हैं, इस प्रक्रिया को क्रीमिंग कहा जाता है। होमोजेनाइजेशन ग्लोब्यूल आकार को कम करके इसे रोकता है।",
                lipolysisTitle: "लिपोलिसिस",
                lipolysisText: "एंजाइम लिपोप्रोटीन लाइपेस वसा (लिपोलिसिस) को तोड़ सकता है, मुक्त फैटी एसिड जारी कर सकता है जो एक साबुन या बासी ऑफ-फ्लेवर का कारण बनता है। यह आमतौर पर एक अक्षुण्ण MFGM द्वारा रोका जाता है लेकिन ग्लोब्यूल्स को यांत्रिक क्षति से शुरू किया जा सकता है।"
            },
            autoxidation: {
                title: "ऑटोऑक्सीडेशन और क्रिस्टलीकरण",
                autoxidationTitle: "ऑटोऑक्सीडेशन",
                autoxidationText: "असंतृप्त फैटी एसिड में डबल बांड ऑक्सीकरण कर सकते हैं, जिससे ऑफ-फ्लेवर (टेलोवी, मछली जैसा, धात्विक) हो सकता है। यह प्रक्रिया गर्मी, प्रकाश और धातु आयनों (विशेष रूप से तांबा) द्वारा तेज होती है।",
                crystallizationTitle: "क्रिस्टलीकरण",
                crystallizationText: "दूध वसा में अलग-अलग पिघलने वाले बिंदुओं के साथ ट्राइग्लिसराइड्स का मिश्रण होता है। जब दूध को ठंडा किया जाता है, तो उच्च पिघलने वाले बिंदु वाले ट्राइग्लिसराइड्स क्रिस्टलीकृत हो जाते हैं। यह प्रक्रिया जटिल है और विभिन्न बहुरूपी रूपों (α, β', β) में हो सकती है, जो मक्खन और क्रीम जैसे उत्पादों की बनावट और स्थिरता को प्रभावित करती है।"
            }
        },
        lactose: {
            title: "लैक्टोज (दूध चीनी)",
            properties: {
                title: "लैक्टोज गुण",
                p1: "लैक्टोज दूध में मुख्य कार्बोहाइड्रेट (4.8-5.2%) है, जो सच्चे घोल में मौजूद है। यह ग्लूकोज और गैलेक्टोज से बना एक डिसाकेराइड है। लैक्टोज सुक्रोज (टेबल शुगर) से लगभग 1/6 गुना मीठा होता है।",
                p2: "यह सूक्ष्मजीवों द्वारा किण्वित होकर लैक्टिक एसिड बनाता है, जो दही और पनीर जैसे सुसंस्कृत उत्पादों के लिए आवश्यक है। गर्म करने पर, लैक्टोज प्रोटीन अमीनो समूहों के साथ Maillard प्रतिक्रिया से गुजर सकता है, जिससे ब्राउनिंग और एक पका हुआ स्वाद होता है, खासकर निष्फल दूध में।",
                crystallizationTitle: "क्रिस्टलीकरण और म्यूटेरोटेशन",
                crystallizationText1: "लैक्टोज दो रूपों में क्रिस्टलीकृत हो सकता है, α-हाइड्रेट और β-एनहाइड्रस। जब पानी में घोला जाता है, तो ये रूप एक संतुलन तक पहुंचने तक परस्पर परिवर्तित होते हैं, इस प्रक्रिया को <strong>म्यूटेरोटेशन</strong> कहा जाता है। α-लैक्टोज हाइड्रेट कम घुलनशील होता है और कठोर, किरकिरा क्रिस्टल बना सकता है, जिससे आइसक्रीम और मीठा संघनित दूध जैसे उत्पादों में \"रेतीलापन\" दोष हो सकता है यदि ठीक से नियंत्रित नहीं किया जाता है।",
                crystallizationText2: "म्यूटेरोटेशन की दर तापमान और पीएच से प्रभावित होती है। यह डेयरी पाउडर और संघनित उत्पादों के उत्पादन में एक चिकनी बनावट सुनिश्चित करने के लिए एक महत्वपूर्ण कारक है।"
            }
        },
        minerals: {
            title: "खनिज और लवण",
            composition: {
                title: "खनिज संरचना और वितरण",
                p1: "दूध आहार कैल्शियम, मैग्नीशियम, फास्फोरस और पोटेशियम का एक उत्कृष्ट स्रोत है। दूध में लवण एक भंग (घुलनशील) चरण और कैसिइन मिसेल से जुड़े एक कोलाइडल चरण के बीच एक जटिल संतुलन में मौजूद होते हैं।",
                p2: "लगभग दो-तिहाई कैल्शियम और आधा फॉस्फेट कैसिइन मिसेल के भीतर \"कोलाइडल कैल्शियम फॉस्फेट\" के रूप में बंधे होते हैं। यह कोलाइडल फॉस्फेट कैसिइन मिसेल की संरचना और स्थिरता को बनाए रखने के लिए महत्वपूर्ण है। दूध सीरम में घुले हुए लवण प्रोटीन स्थिरता, गर्मी स्थिरता और आसमाटिक दबाव सहित विभिन्न गुणों को प्रभावित करते हैं। \"लवण संतुलन\", विशेष रूप से कैल्शियम और मैग्नीशियम का फॉस्फेट और साइट्रेट से अनुपात, नसबंदी जैसे प्रसंस्करण के दौरान दूध की गर्मी स्थिरता के लिए महत्वपूर्ण है।"
            },
            trace: {
                title: "ट्रेस तत्व",
                p1: "दूध में जस्ता, तांबा और लोहा जैसे कई ट्रेस तत्व होते हैं। इनमें से कुछ पोषण संबंधी होते हैं, जबकि अन्य संदूषक हो सकते हैं। उदाहरण के लिए, तांबा (Cu) वसा ऑक्सीकरण के लिए एक उत्प्रेरक के रूप में कार्य कर सकता है, जिससे बहुत कम सांद्रता में भी ऑफ-फ्लेवर हो सकता है। इसलिए, तांबे की मिश्र धातुओं से बने उपकरणों से संदूषण से बचना महत्वपूर्ण है।"
            }
        },
        vitaminsEnzymes: {
            title: "विटामिन और एंजाइम",
            vitamins: {
                title: "दूध में विटामिन",
                p1: "दूध कई विटामिनों का एक अच्छा स्रोत है। वसा में घुलनशील विटामिन (A, D, E, K) दूध की वसा में पाए जाते हैं, जबकि पानी में घुलनशील विटामिन (B-कॉम्प्लेक्स और विटामिन C) जलीय चरण में होते हैं। पाश्चुरीकरण कुछ अधिक गर्मी के प्रति संवेदनशील विटामिन जैसे विटामिन C और फोलेट को नष्ट कर सकता है।"
            },
            enzymes: {
                title: "दूध में एंजाइम",
                p1: "दूध में कई देशी एंजाइम होते हैं। कुछ महत्वपूर्ण एंजाइमों में शामिल हैं:",
                list: [
                    { name: "लिपोप्रोटीन लाइपेस", desc: "यदि वसा ग्लोब्यूल्स क्षतिग्रस्त हो जाते हैं तो हाइड्रोलाइटिक बासीपन (साबुन जैसा स्वाद) पैदा कर सकता है। यह ज्यादातर पाश्चुरीकरण द्वारा निष्क्रिय कर दिया जाता है।" },
                    { name: "क्षारीय फॉस्फेट", desc: "उचित पाश्चुरीकरण के लिए एक संकेतक के रूप में उपयोग किया जाता है, क्योंकि यह गर्मी उपचार द्वारा नष्ट हो जाता है। एक सकारात्मक परीक्षण अपर्याप्त पाश्चुरीकरण या कच्चे दूध के संदूषण को इंगित करता है।" },
                    { name: "प्लास्मिन", desc: "एक गर्मी प्रतिरोधी प्रोटीज जो लंबे समय तक भंडारण के दौरान यूएचटी दूध में प्रोटीन को तोड़ सकता है और उम्र का जमाव या कड़वाहट पैदा कर सकता है।" },
                    { name: "लैक्टोपरॉक्सिडेज", desc: "कच्चे दूध में एक प्राकृतिक रोगाणुरोधी प्रणाली का हिस्सा। यह क्षारीय फॉस्फेट की तुलना में अधिक गर्मी प्रतिरोधी है और एक नकारात्मक परीक्षण अधिक गरम होने का संकेत दे सकता है।" },
                    { name: "ज़ैंथिन ऑक्सीडेज", desc: "वसा ग्लोब्यूल झिल्ली से जुड़ा हुआ है। इसकी गतिविधि कभी-कभी ऑक्सीडेटिव प्रक्रियाओं से जुड़ी होती है।" }
                ]
            }
        },
        properties: {
            title: "भौतिक गुण",
            overview: {
                title: "भौतिक गुणों का अवलोकन",
                p1: "दूध के भौतिक गुण इसकी जटिल संरचना द्वारा निर्धारित होते हैं और प्रसंस्करण और गुणवत्ता नियंत्रण के लिए महत्वपूर्ण हैं।"
            },
            headers: ["गुण", "मान", "महत्व"],
            rows: [
                { property: "रंग और ऑप्टिकल गुण", value: "सफेद से पीला अपारदर्शी", details: "अपारदर्शिता वसा ग्लोब्यूल्स और कैसिइन मिसेल द्वारा प्रकाश के बिखरने के कारण होती है। पीला रंग चारे से कैरोटीन के कारण होता है।" },
                { property: "स्वाद", value: "सुखद, थोड़ा मीठा", details: "घटकों का संयुक्त प्रभाव। चारे, जीवाणु वृद्धि, या ऑक्सीकरण से ऑफ-फ्लेवर विकसित हो सकते हैं।" },
                { property: "अपवर्तक सूचकांक (20°C पर)", value: "1.3440 - 1.3485", details: "कुल ठोस पदार्थों के त्वरित अनुमान और पानी की मिलावट का पता लगाने के लिए उपयोग किया जाता है।" },
                { property: "घनत्व (20°C पर)", value: "गाय: 1.028-1.032 g/mL, भैंस: 1.030-1.034 g/mL", details: "दूध अपने ठोस सामग्री (SNF) के कारण पानी से सघन होता है। उच्च वसा सामग्री घनत्व को थोड़ा कम करती है।" },
                { property: "श्यानता (25°C पर)", value: "~2.0 cP", details: "पानी से लगभग दोगुना चिपचिपा। तापमान और संरचना (वसा, प्रोटीन) पर निर्भर करता है। होमोजेनाइजेशन श्यानता बढ़ाता है।" },
                { property: "सतह तनाव (20°C पर)", value: "50 dyne/cm", details: "प्रोटीन और मुक्त फैटी एसिड जैसे सर्फेक्टेंट के कारण पानी (72 dyne/cm) से कम।" },
                { property: "हिमांक", value: "-0.512 से -0.575 °C", details: "मिलावटी पानी का पता लगाने के लिए एक विश्वसनीय संकेतक, क्योंकि मिलावटी पानी हिमांक को 0 डिग्री सेल्सियस के करीब बढ़ाता है।" },
                { property: "क्वथनांक", value: "100.17 °C", details: "घुले हुए ठोस पदार्थों के कारण पानी से थोड़ा अधिक।" },
                { property: "अम्लता (टाइट्रेट करने योग्य)", value: "गाय: 0.14-0.16% LA, भैंस: 0.17-0.18% LA", details: "प्राकृतिक अम्लता कैसिइन, फॉस्फेट, साइट्रेट आदि के कारण होती है। ताजे दूध में लैक्टिक एसिड के कारण नहीं।" },
                { property: "पीएच", value: "6.5 - 6.7", details: "थोड़ा अम्लीय। कम पीएच जीवाणु क्रिया (खट्टापन) का सुझाव देता है।" },
                { property: "गर्मी स्थिरता", value: "भिन्न होता है, लवण संतुलन पर निर्भर करता है", details: "जमावट के बिना उच्च तापमान का सामना करने की क्षमता। निष्फल दूध उत्पादों के लिए महत्वपूर्ण।" },
                { property: "रेडॉक्स क्षमता (Eh)", value: "+0.2 से +0.3 वोल्ट", details: "ऑक्सीकरण और कम करने वाले एजेंटों के बीच संतुलन को इंगित करता है। उबालने या माइक्रोबियल विकास के कारण घटता है।" }
            ]
        },
        other: {
            title: "अन्य घटक और संदूषक",
            minor: {
                title: "छोटे प्राकृतिक घटक",
                list: [
                    { name: "कार्बनिक अम्ल", desc: "दूध में साइट्रिक एसिड और दूसरों की ट्रेस मात्रा होती है। जीवाणु क्रिया लैक्टिक एसिड को बढ़ा सकती है।" },
                    { name: "नाइट्रोजनयुक्त यौगिक (NPN)", desc: "कुल नाइट्रोजन का लगभग 5% गैर-प्रोटीन नाइट्रोजन होता है, जिसमें यूरिया, क्रिएटिनिन और मुक्त अमीनो एसिड शामिल हैं।" },
                    { name: "गैसें", desc: "ताजे निकाले गए दूध में घुली हुई गैसें होती हैं, मुख्य रूप से कार्बन डाइऑक्साइड। हवा के संपर्क में आने पर, CO₂ खो जाती है और O₂/N₂ प्राप्त होती है। घुली हुई ऑक्सीजन ऑक्सीकरण में योगदान कर सकती है।" }
                ]
            },
            contaminants: {
                title: "संदूषक",
                p1: "वे पदार्थ जो अनजाने में दूध में प्रवेश कर सकते हैं:",
                list: [
                    { name: "गाय से", desc: "यदि गाय को मास्टिटिस है, तो रक्त के घटक और दैहिक कोशिकाएं दूध में प्रवेश कर सकती हैं। उपचार के लिए उपयोग की जाने वाली दवाएं भी दूध में जा सकती हैं।" },
                    { name: "चारे से", desc: "कीटनाशक, माइकोटॉक्सिन (चारे पर फफूंदी से), और भारी धातुएं दूध में स्थानांतरित हो सकती हैं।" },
                    { name: "हैंडलिंग से", desc: "सफाई एजेंट, सैनिटाइज़र, और धातु आयन (जैसे उपकरणों से तांबा) दूध को दूषित कर सकते हैं।" },
                    { name: "रेडियोन्यूक्लाइड्स", desc: "रेडियोधर्मी आइसोटोप (जैसे स्ट्रोंटियम-90, आयोडीन-131) यदि गाय दूषित चारा या पानी का सेवन करती है तो दूध में प्रवेश कर सकते हैं।" }
                ]
            }
        }
    },
    en: {
        mainTitle: "Chemistry of Milk",
        description: "A deep dive into the science of milk.",
        backToTopics: "Back to Topics",
        composition: {
            title: "Composition of Milk",
            whatIsMilk: {
                title: "What is Milk?",
                fssaiDef: "<strong>FSSAI Definition:</strong> “Milk is the secretion derived from the complete milking of healthy milch animals. It shall be free from colostrum.”",
                usaDef: "<strong>Federal Definition of U.S.A.:</strong> \"Milk is the fresh, clean lacteal secretion obtained by the complete milking of one or more healthy cows, properly fed and kept, excluding that obtained within 15 days before and 10 days after calving and containing not less than 8.5 percent solids-not-fat and not less than 3.25 percent milk fat.\"",
                p1: "Milk is a complex biological fluid that can be seen in three different phases:",
                phases: ["Emulsion: Fat globules are dispersed in water.", "Colloidal Suspension: Casein protein micelles are suspended in water.", "True Solution: Lactose, whey proteins, minerals, and vitamins are completely dissolved in water."]
            },
            generalComposition: {
                title: "General Composition of Milk",
                headers: ["Constituents", "%", "Constituents", "%"],
                rows: [
                    { c1: "Water", v1: "87.54", c2: "Casein", v2: "2.63" },
                    { c1: "Fat", v1: "3.71", c2: "Whey protein", v2: "0.42" },
                    { c1: "Protein", v1: "3.18", c2: "Protease-peptone", v2: "0.13" },
                    { c1: "Lactose", v1: "4.70", c2: "Other nitrogenous substances", v2: "0.11" },
                    { c1: "Ash", v1: "0.76", c2: "Total", v2: "100.0" }
                ]
            },
            speciesDifferences: {
                title: "Differences in Milk Composition due to Species",
                headers: ["Species", "Water (%)", "Fat (%)", "Sugar (%)", "Protein (%)", "Ash (%)"],
                rows: [
                    { species: "Cow", water: "87.54", fat: "3.71", sugar: "4.70", protein: "3.31", ash: "0.76" },
                    { species: "Goat", water: "85.58", fat: "4.93", sugar: "4.78", protein: "4.11", ash: "0.89" },
                    { species: "Buffalo", water: "82.90", fat: "7.50", sugar: "4.70", protein: "4.10", ash: "0.80" },
                    { species: "Human", water: "88.50", fat: "3.30", sugar: "6.80", protein: "1.30", ash: "0.20" }
                ]
            },
            water: {
                title: "Water in Milk",
                p1: "Water is the most abundant component, acting as a suspending, dispersing, and dissolving medium. It exists in three forms:",
                forms: [
                    { name: "Free Water", desc: "The largest portion, it acts as a solvent and supports microbial growth." },
                    { name: "Bound Water", desc: "Bound to proteins and other components via hydrogen bonds. It does not freeze at 0°C, does not act as a solvent, and cannot support microbial growth." },
                    { name: "Crystallized Water", desc: "Water present within the chemical structure of components like lactose hydrate (C₁₂H₂₂O₁₁·H₂O). It is the hardest to remove." }
                ]
            }
        },
        mammaryGland: {
            title: "The Mammary Gland and Milk Secretion",
            structure: {
                title: "The Mammary Gland Structure",
                p1: "The mammary gland is made up of secretary and connective tissue. The basic secretory units are small, grape-like objects called \"alveoli\". A group of 150-220 alveoli form a lobule, and a number of lobules form a lobe. The cow’s udder consists of 4 separate quarters, each with a teat cistern and gland cistern, from which numerous ducts branch out to the alveoli.",
                p2: "Each alveolus consists of a single layer of epithelial cells surrounding a central cavity (lumen) and is surrounded by myoepithelial cells responsible for milk ejection."
            },
            physiology: {
                title: "Physiology of Milk Secretion",
                p1: "Milk is synthesized in the epithelial cells of the alveolus under complex hormonal control (estrogen, progesterone, prolactin, etc.). Precursors for milk synthesis are taken from the blood. Protein and lipid are synthesized in the endoplasmic reticulum; lactose synthesis and assembly of casein micelles occur in the Golgi apparatus. For every liter of milk secreted, about 400-500 litres of blood must circulate through the udder.",
                ejectionTitle: "Milk Ejection (Let-down)",
                ejectionText: "This is a reflex action controlled by the hormone oxytocin, which causes the myoepithelial cells to contract and squeeze milk from the alveoli into the ducts. This reflex lasts for about 10 minutes."
            },
            precursors: {
                title: "Milk Precursors",
                caption: "Comparison of Blood Plasma and Milk Composition",
                headers: ["Constituent", "Blood Plasma (%)", "Milk (%)"],
                rows: [
                    { constituent: "Water", plasma: "91.0", milk: "87.0" },
                    { constituent: "Glucose", plasma: "0.05", milk: "Lactose: 4.8" },
                    { constituent: "Serum Albumin", plasma: "3.20", milk: "Lactalbumin: 0.52" },
                    { constituent: "Serum Globulin", plasma: "4.40", milk: "Globulin: 0.05" },
                    { constituent: "Amino Acids", plasma: "0.003", milk: "Casein: 2.9" },
                    { constituent: "Neutral Fats", plasma: "0.09", milk: "3.8" },
                    { constituent: "Calcium", plasma: "0.009", milk: "0.12" }
                ]
            }
        },
        proteins: {
            title: "Milk Proteins",
            overview: {
                title: "Overview of Milk Proteins",
                p1: "Protein is one of the most essential nutrients of milk, present at about 3.5%. It contains all essential amino acids. The proteins in milk are divided into two main groups: <strong>Casein (~80%)</strong> and <strong>Whey Proteins (~20%)</strong>."
            },
            casein: {
                title: "Casein (~80% of Milk Protein)",
                p1: "Casein is a class of phosphoproteins existing in milk as complex particles called <strong>micelles</strong>. These micelles are what make milk white and opaque. Biologically, casein serves as a carrier for calcium and phosphate. All caseins precipitate at a pH of 4.6 (their isoelectric point).",
                fractionsTitle: "Casein Fractions",
                fractionsText: "Casein is composed of four main fractions: αs1-casein, αs2-casein, β-casein, and κ-casein. κ-casein is located on the surface of the micelle and is responsible for its stability.",
                coagulationTitle: "Casein Coagulation (Curd Formation)",
                coagulationText: "The ability of casein to coagulate is fundamental to making products like cheese and yogurt. This happens in several ways:",
                coagulationTypes: [
                    { name: "Acid Coagulation", desc: "When the pH of milk drops to 4.6 (e.g., by adding lemon/vinegar or through bacterial fermentation), casein micelles lose their negative charge and aggregate to form a gel. This is the principle behind Paneer and Dahi." },
                    { name: "Enzymatic Coagulation", desc: "The enzyme rennet (or rennin) specifically cleaves κ-casein, destabilizing the micelles and causing them to clump together in the presence of calcium to form a curd. This is the basis of most cheesemaking." },
                    { name: "Alcohol Precipitation", desc: "Alcohol dehydrates the protective layer of the micelle. If the milk is already acidic (unstable), the proteins will coagulate. This is a quick test for milk freshness." },
                    { name: "Heat Precipitation", desc: "While pure casein is heat-stable, prolonged heating at very high temperatures (e.g., 120°C under pressure) can cause coagulation." }
                ]
            },
            whey: {
                title: "Whey Proteins (~20% of Milk Protein)",
                p1: "The proteins remaining in the liquid whey after casein precipitation are called whey proteins. These globular proteins are more water-soluble than caseins and are denatured by heat.",
                fractionsTitle: "Whey Protein Fractions",
                fractions: [
                    { name: "Beta–lactoglobulin (β-Lg)", desc: "Comprises about half of the total whey proteins. It is coagulated by heat and is an excellent source of essential amino acids." },
                    { name: "Alpha–lactalbumin (α-La)", desc: "A key protein in human milk, it is a good source of tryptophan and is involved in lactose synthesis." },
                    { name: "Immunoglobulins (Ig)", desc: "These are antibodies that provide passive immunity and are found in very high concentrations in colostrum." },
                    { name: "Bovine Serum Albumin (BSA)", desc: "A large protein with good fat-binding properties." }
                ]
            }
        },
        fat: {
            title: "Milk Fat (Lipids)",
            characteristics: {
                title: "Milk Fat Characteristics",
                p1: "Fat is the most commercially significant and variable constituent of milk. About 98% of milk fat is a mixture of triglycerides. It exists as small globules (0.1-15 µm diameter) surrounded by a protective membrane called the Milk Fat Globule Membrane (MFGM).",
                p2: "Milk fat is unique due to its high proportion of short-chain fatty acids (like butyric acid, C4:0), which contribute to its characteristic flavor. This wide variety of fatty acids also gives milk fat a broad melting range (approx. -30°C to +40°C), making it solid at refrigeration temperatures and liquid at body temperature."
            },
            stability: {
                title: "Fat Globules and Emulsion Stability",
                p1: "Milk is an oil-in-water emulsion. The MFGM stabilizes the fat globules, preventing them from clumping together (coalescence).",
                creamingTitle: "Creaming",
                creamingText: "Due to their lower density, fat globules rise to the top, a process called creaming. Homogenization prevents this by reducing globule size.",
                lipolysisTitle: "Lipolysis",
                lipolysisText: "The enzyme lipoprotein lipase can break down fat (lipolysis), releasing free fatty acids that cause a soapy or rancid off-flavor. This is usually prevented by an intact MFGM but can be triggered by mechanical damage to the globules."
            },
            autoxidation: {
                title: "Autoxidation and Crystallization",
                autoxidationTitle: "Autoxidation",
                autoxidationText: "Double bonds in unsaturated fatty acids can oxidize, leading to off-flavors (tallowy, fishy, metallic). This process is accelerated by heat, light, and metal ions (especially copper).",
                crystallizationTitle: "Crystallization",
                crystallizationText: "Milk fat consists of a mix of triglycerides with different melting points. When milk is cooled, the higher melting point triglycerides crystallize. This process is complex and can occur in different polymorphic forms (α, β', β), which affects the texture and stability of products like butter and cream."
            }
        },
        lactose: {
            title: "Lactose (Milk Sugar)",
            properties: {
                title: "Lactose Properties",
                p1: "Lactose is the main carbohydrate in milk (4.8-5.2%), present in true solution. It is a disaccharide made of glucose and galactose. Lactose is only about 1/6th as sweet as sucrose (table sugar).",
                p2: "It is fermented by microorganisms to produce lactic acid, which is essential for cultured products like yogurt and cheese. When heated, lactose can undergo the Maillard reaction with protein amino groups, leading to browning and a cooked flavor, especially in sterilized milk.",
                crystallizationTitle: "Crystallization and Mutarotation",
                crystallizationText1: "Lactose can crystallize in two forms, α-hydrate and β-anhydrous. When dissolved in water, these forms interconvert until an equilibrium is reached, a process called <strong>mutarotation</strong>. The α-lactose hydrate is less soluble and can form hard, gritty crystals, causing a \"sandiness\" defect in products like ice cream and sweetened condensed milk if not controlled properly.",
                crystallizationText2: "The rate of mutarotation is affected by temperature and pH. This is a critical factor in the production of dairy powders and condensed products to ensure a smooth texture."
            }
        },
        minerals: {
            title: "Minerals and Salts",
            composition: {
                title: "Mineral Composition and Distribution",
                p1: "Milk is an excellent source of dietary calcium, magnesium, phosphorus, and potassium. The salts in milk exist in a complex equilibrium between a dissolved (soluble) phase and a colloidal phase associated with the casein micelles.",
                p2: "About two-thirds of the calcium and half of the phosphate are bound within the casein micelle as \"colloidal calcium phosphate\". This colloidal phosphate is crucial for maintaining the structure and stability of the casein micelles. The dissolved salts in the milk serum affect various properties, including protein stability, heat stability, and osmotic pressure. The \"salt balance,\" particularly the ratio of calcium and magnesium to phosphate and citrate, is critical for the heat stability of milk during processing like sterilization."
            },
            trace: {
                title: "Trace Elements",
                p1: "Milk contains numerous trace elements like Zinc, Copper, and Iron. Some of these are nutritional, while others can be contaminants. For example, Copper (Cu) can act as a catalyst for fat oxidation, leading to off-flavors, even at very low concentrations. Therefore, avoiding contamination from equipment made of copper alloys is important."
            }
        },
        vitaminsEnzymes: {
            title: "Vitamins & Enzymes",
            vitamins: {
                title: "Vitamins in Milk",
                p1: "Milk is a good source of many vitamins. Fat-soluble vitamins (A, D, E, K) are found in the milk fat, while water-soluble vitamins (B-complex and Vitamin C) are in the aqueous phase. Pasteurization can destroy some of the more heat-sensitive vitamins like Vitamin C and folate."
            },
            enzymes: {
                title: "Enzymes in Milk",
                p1: "Milk contains several native enzymes. Some important ones include:",
                list: [
                    { name: "Lipoprotein Lipase", desc: "Can cause hydrolytic rancidity (soapy flavor) if fat globules are damaged. It is mostly inactivated by pasteurization." },
                    { name: "Alkaline Phosphatase", desc: "Used as an indicator for proper pasteurization, as it is destroyed by the heat treatment. A positive test indicates inadequate pasteurization or raw milk contamination." },
                    { name: "Plasmin", desc: "A heat-resistant protease that can break down protein and cause age gelation or bitterness in UHT milk during long storage." },
                    { name: "Lactoperoxidase", desc: "Part of a natural antimicrobial system in raw milk. It is more heat-resistant than alkaline phosphatase and a negative test can indicate overheating." },
                    { name: "Xanthine Oxidase", desc: "Associated with the fat globule membrane. Its activity is sometimes linked to oxidative processes." }
                ]
            }
        },
        properties: {
            title: "Physical Properties",
            overview: {
                title: "Overview of Physical Properties",
                p1: "The physical properties of milk are determined by its complex composition and are crucial for processing and quality control."
            },
            headers: ["Property", "Value", "Significance"],
            rows: [
                { property: "Colour and optical properties", value: "White to yellow opaque", details: "Opacity is due to light scattering by fat globules and casein micelles. Yellow color is due to carotene from feed." },
                { property: "Flavour", value: "Pleasant, slightly sweet", details: "Combined effect of components. Off-flavors can develop from feed, bacterial growth, or oxidation." },
                { property: "Refractive Index (at 20°C)", value: "1.3440 - 1.3485", details: "Used for quick estimation of total solids and to detect water adulteration." },
                { property: "Density (at 20°C)", value: "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", details: "Milk is denser than water due to its solid content (SNF). Higher fat content slightly lowers density." },
                { property: "Viscosity (at 25°C)", value: "~2.0 cP", details: "About twice as viscous as water. Depends on temperature and composition (fat, protein). Homogenization increases viscosity." },
                { property: "Surface Tension (at 20°C)", value: "50 dyne/cm", details: "Lower than water (72 dyne/cm) due to surfactants like proteins and free fatty acids." },
                { property: "Freezing Point", value: "-0.512 to -0.575 °C", details: "A reliable indicator for detecting added water, as added water raises the freezing point closer to 0°C." },
                { property: "Boiling Point", value: "100.17 °C", details: "Slightly higher than water due to dissolved solids." },
                { property: "Acidity (Titratable)", value: "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", details: "Natural acidity is due to casein, phosphates, citrates, etc. Not due to lactic acid in fresh milk." },
                { property: "pH", value: "6.5 - 6.7", details: "Slightly acidic. Lower pH suggests bacterial action (souring)." },
                { property: "Heat Stability", value: "Varies, depends on salt balance", details: "Ability to withstand high temperatures without coagulation. Crucial for sterilized milk products." },
                { property: "Redox Potential (Eh)", value: "+0.2 to +0.3 volts", details: "Indicates the balance between oxidizing and reducing agents. Decreases upon boiling or due to microbial growth."}
            ]
        },
        other: {
            title: "Other Components & Contaminants",
            minor: {
                title: "Minor Natural Components",
                list: [
                    { name: "Organic Acids", desc: "Milk contains citric acid and trace amounts of others. Bacterial action can increase lactic acid." },
                    { name: "Nitrogenous Compounds (NPN)", desc: "About 5% of total nitrogen is non-protein nitrogen, including urea, creatinine, and free amino acids." },
                    { name: "Gases", desc: "Freshly drawn milk contains dissolved gases, mainly carbon dioxide. On exposure to air, CO₂ is lost and O₂/N₂ are gained. Dissolved oxygen can contribute to oxidation." }
                ]
            },
            contaminants: {
                title: "Contaminants",
                p1: "Substances that can enter milk unintentionally:",
                list: [
                    { name: "From the Cow", desc: "If a cow has mastitis, blood components and somatic cells can enter the milk. Drugs used for treatment can also pass into the milk." },
                    { name: "From Feed", desc: "Pesticides, mycotoxins (from molds on feed), and heavy metals can be transferred to milk." },
                    { name: "From Handling", desc: "Cleaning agents, sanitizers, and metal ions (like copper from equipment) can contaminate milk." },
                    { name: "Radionuclides", desc: "Radioactive isotopes (like Strontium-90, Iodine-131) can enter milk if the cow ingests contaminated feed or water." }
                ]
            }
        }
    }
};
