
export const calibrationStandardizationContent = {
  hi: {
    mainTitle: "कैलिब्रेशन और मानकीकरण",
    description: "डेयरी प्रयोगशाला में सटीक माप सुनिश्चित करने के लिए एक गाइड।",
    backToTopics: "विषयों पर वापस जाएं",
    intro_p1: "<strong>कैलिब्रेशन</strong> का मतलब है किसी मापने वाले उपकरण (measuring equipment) की तुलना एक मानक उपकरण से करना जिसका माप पहले से ही सही माना गया हो। इससे यह पता चलता है कि हमारा उपकरण कितना सटीक (accurate) है। इसमें समायोजन शामिल नहीं होता, लेकिन यह समायोजन की आवश्यकता को दिखा सकता है।",
    intro_p2: "डेयरी संयंत्र में, दूध की संरचना (वसा, एसएनएफ, आदि) और गुणवत्ता को स्वागत से लेकर प्रेषण तक कई बार विश्लेषण किया जाता है। यह उत्पाद की सही कीमत, प्रसंस्करण के लिए उसकी उपयुक्तता, और कानूनी मानकों (legal standards) को पूरा करने के लिए आवश्यक है। इसलिए, विश्लेषण में उपयोग होने से पहले कांच के बने पदार्थ (ब्यूटिरोमीटर, पिपेट, आदि) और रसायनों का अंशांकन और मानकीकरण बहुत महत्वपूर्ण है, ताकि गलत परिणामों से बचा जा सके।",
    tabs: {
        definitions: "मुख्य परिभाषाएं",
        pipette: "पिपेट कैलिब्रेशन",
        butyrometer: "ब्यूटिरोमीटर कैलिब्रेशन",
        lactometer: "लैक्टोमीटर कैलिब्रेशन",
        other: "अन्य कांच के बने पदार्थ",
        thermometer: "थर्मामीटर कैलिब्रेशन",
        balance: "वजन संतुलन"
    },
    definitions: {
        title: "मुख्य परिभाषाएं",
        reagent: "अभिकर्मक",
        reagent_desc: "एक पदार्थ जो दूसरे पदार्थ के साथ प्रतिक्रिया करके रासायनिक बदलाव लाता है।",
        solution: "घोल (Solution)",
        solution_desc: "घोल दो या दो से अधिक पदार्थों का एक सजातीय मिश्रण है। जिसमें एक विलेय (जो कम मात्रा में हो) और एक विलायक (जो अधिक मात्रा में हो) होता है।",
        dilute_sol: "<strong>पतला घोल:</strong> जिसमें विलेय की मात्रा कम हो।",
        concentrated_sol: "<strong>सांद्र घोल:</strong> जिसमें विलेय की मात्रा अधिक हो।",
        saturated_sol: "<strong>संतृप्त घोल:</strong> जिसमें एक निश्चित तापमान पर और विलेय न घुल सके।",
        standard_sol: "मानक घोल",
        standard_sol_desc: "एक ऐसा घोल जिसकी शक्ति या सांद्रता बिल्कुल सही पता हो।",
        normal_sol: "सामान्य घोल (Normality - N)",
        normal_sol_desc: "यह 1 लीटर घोल में घुले हुए विलेय के ग्राम समकक्ष की संख्या है। <code>N = विलेय का ग्राम समकक्ष / घोल का आयतन (L)</code>।",
        normal_sol_formula: "ग्राम समकक्ष वजन = <code>दाढ़ द्रव्यमान / n-कारक</code>। (n-कारक एसिड के लिए H+ आयनों की संख्या और बेस के लिए OH- आयनों की संख्या होती है)।",
        molar_sol: "मोलर घोल (Molarity - M)",
        molar_sol_desc: "यह 1 लीटर घोल में घुले हुए विलेय के मोल्स की संख्या है। <code>M = विलेय के मोल्स / घोल का आयतन (L)</code>।",
        molal_sol: "मोलल घोल (Molality - m)",
        molal_sol_desc: "यह 1000g (1 kg) विलायक में घुले हुए विलेय के मोल्स की संख्या है। <code>m = विलेय के मोल्स की संख्या / विलायक का वजन (kg)</code>।",
        note: "ध्यान दें: सामान्यता और मोलरता तापमान पर निर्भर करती हैं क्योंकि आयतन तापमान के साथ बदलता है, जबकि मोललता तापमान से स्वतंत्र है।"
    },
    pipette: {
        title: "दूध पिपेट का अंशांकन",
        comparison: {
            title: "(ए) तुलना विधि (Comparison Method)",
            desc: "इस विधि में, एक नई पिपेट से दूध का वसा परीक्षण करके उसकी तुलना एक पुरानी, पहले से अंशांकित पिपेट के परिणाम से की जाती है। यदि दोनों का परिणाम समान आता है, तो नई पिपेट सही मानी जाती है। यह सबसे आसान लेकिन कम सटीक तरीका है।"
        },
        bis: {
            title: "(बी) बीआईएस विधि (Gravimetric Method)",
            desc: "यह सबसे सटीक विधि है। इसमें यह जांचा जाता है कि पिपेट 27°C पर <strong>10.75 ± 0.03 मिलीलीटर</strong> आसुत जल वितरित करती है या नहीं।",
            steps: [
                "पिपेट को साफ करके 27°C आसुत जल से निशान के ऊपर तक भरें।",
                "मेनिस्कस को निशान पर समायोजित करें।",
                "पानी को एक पहले से तौले हुए बीकर में वितरित करें।",
                "पानी के साथ बीकर को तौलें और पानी का वजन (द्रव्यमान) निकालें।",
                "आयतन की गणना करें: <code>आयतन = द्रव्यमान / घनत्व</code>। 27°C पर पानी का घनत्व 0.99654 g/mL होता है।",
                "यदि गणना किया गया आयतन 10.72 मिलीलीटर से 10.78 मिलीलीटर के बीच है, तो पिपेट सही है।"
            ]
        },
        mathematical: {
            title: "(सी) गणितीय विधि (Mathematical Method)",
            desc: "इस विधि में पिपेट के तने की प्रति इकाई लंबाई का आयतन गणना किया जाता है और फिर दो अस्थायी बिंदुओं के माप के आधार पर 10.75 मिलीलीटर का सही बिंदु निर्धारित करके एक स्थायी निशान लगाया जाता है।"
        }
    },
    butyrometer: {
        title: "ब्यूटिरोमीटर का अंशांकन",
        principle: {
            title: "सिद्धांत",
            desc: "ब्यूटिरोमीटर अंशांकन का मुख्य सिद्धांत यह है कि इसके तने (पतली नली) पर बने निशान एक निश्चित आयतन को दर्शाते हैं। <strong>दूध ब्यूटिरोमीटर</strong> के लिए, प्रत्येक <strong>1% वसा का निशान 0.125 मिलीलीटर</strong> के आंतरिक आयतन के बराबर होता है। इसलिए, 0 से 10% तक की पूरी पैमाने का आयतन 1.25 मिलीलीटर होना चाहिए। अंशांकन में हम इसी आयतन की जांच करते हैं। इसके लिए आमतौर पर शुद्ध पारा (mercury) का उपयोग किया जाता है क्योंकि यह कांच से नहीं चिपकता है और इसका घनत्व बहुत अधिक होता है।"
        },
        methods: {
            title: "अंशांकन के विभिन्न तरीके",
            comparison: {
                title: "1. तुलना विधि",
                desc: "यह सबसे आसान तरीका है। इसमें एक ही दूध के नमूने का वसा दो अलग-अलग ब्यूटिरोमीटर में परीक्षण किया जाता है:",
                points: ["एक पहले से अंशांकित (मानक) ब्यूटिरोमीटर।", "एक नया ब्यूटिरोमीटर जिसे अंशांकित करना है।"],
                conclusion: "यदि दोनों ब्यूटिरोमीटर में वसा की रीडिंग समान आती है, तो नए ब्यूटिरोमीटर को सही मान लिया जाता है। लेकिन यह विधि बहुत सटीक नहीं है क्योंकि पुराना (मानक) ब्यूटिरोमीटर भी सही नहीं हो सकता है।"
            },
            bis: {
                title: "2. बीआईएस विधि (Mercury Pipette Method)",
                desc: "यह एक अधिक सटीक और मानक तरीका है। इसमें एक विशेष प्रकार की स्वचालित पारा पिपेट का उपयोग किया जाता है जो एक बार में ठीक <strong>0.3125 मिलीलीटर</strong> पारा वितरित करती है। यह आयतन ब्यूटिरोमीटर के <strong>2.5% वसा पैमाने</strong> के बराबर होता है।",
                steps: [
                    "ब्यूटिरोमीटर को साफ करके सुखा लें।",
                    "ब्यूटिरोमीटर को 10% के निशान तक पारा से भरें। इसे हम आधार (शून्य) बिंदु मानते हैं।",
                    "पारा पिपेट से 0.3125 मिलीलीटर पारा ब्यूटिरोमीटर में डालें। पारा का स्तर 10% से 7.5% तक आ जाना चाहिए।",
                    "इस प्रक्रिया को 3 बार और दोहराएं। हर बार पारा 2.5% पैमाने को भरेगा (7.5% -> 5.0% -> 2.5% -> 0%)।",
                    "यदि 4 बार पारा डालने पर ब्यूटिरोमीटर का पैमाना 0 से 10% तक पूरी तरह से सही-सही भर जाता है, तो ब्यूटिरोमीटर अंशांकित माना जाता है।"
                ]
            },
            gravimetric: {
                title: "3. ग्रेविमेट्रिक विधि (पारा तौलकर)",
                desc: "यह सबसे सटीक तरीका है। इसमें अलग-अलग निशानों के बीच पारा का वजन करके आयतन निकाला जाता है।",
                steps: [
                    "एक साफ, सूखे ब्यूटिरोमीटर को तौलें।",
                    "उसमें 10% के निशान तक पारा भरें और दोबारा तौलें।",
                    "अब 9% के निशान तक पारा भरें और फिर तौलें। दोनों वजनों के अंतर से 9% और 10% के बीच पारा का वजन पता चल जाएगा।",
                    "पारा के घनत्व (जो तापमान पर निर्भर करता है) का उपयोग करके, इस वजन को आयतन में बदलें: <code>आयतन = द्रव्यमान / घनत्व</code>।",
                    "यह आयतन <strong>0.125 ± 0.001 मिलीलीटर</strong> के बीच होना चाहिए (1% वसा के लिए)।",
                    "इसी प्रकार, ब्यूटिरोमीटर के पैमाने पर 2-3 अलग-अलग बिंदुओं (जैसे 5-6% और 1-2%) पर इस परीक्षण को दोहराएं ताकि पूरे पैमाने की सटीकता जांची जा सके।"
                ]
            }
        },
        table: {
            caption: "तालिका 6.1: विभिन्न उत्पादों के लिए ब्यूटिरोमीटर के प्रकार",
            header1: "पैमाना सीमा (%)",
            header2: "उत्पाद",
            rows: [
                { scale: "0–0.5", product: "स्किम्ड दूध" },
                { scale: "0–4", product: "आंशिक रूप से स्किम्ड दूध, छाछ" },
                { scale: "0–10", product: "साबुत दूध, वाष्पित दूध (बिना मीठा)" },
                { scale: "0–20", product: "सूखा दूध पाउडर" },
                { scale: "0–40", product: "आइसक्रीम, संघनित दूध, पनीर" },
                { scale: "0–70", product: "क्रीम" },
                { scale: "0–90", product: "मक्खन" }
            ]
        }
    },
    lactometer: {
        title: "लैक्टोमीटर का अंशांकन",
        principle: {
            title: "सिद्धांत",
            desc1: "लैक्टोमीटर <strong>आर्किमिडीज के सिद्धांत</strong> पर काम करते हैं: जब कोई वस्तु किसी तरल में डुबोई जाती है, तो उस पर ऊपर की ओर एक बल लगता है जो उस वस्तु द्वारा हटाए गए तरल के भार के बराबर होता है। लैक्टोमीटर तरल के विशिष्ट गुरुत्व को मापता है। दूध जितना गाढ़ा होगा (अधिक SNF), लैक्टोमीटर उतना ही कम डूबेगा और रीडिंग अधिक आएगी। पानी मिलाने पर दूध पतला हो जाता है, जिससे लैक्टोमीटर अधिक डूबता है और रीडिंग कम आती है।",
            desc2: "आमतौर पर 3 प्रकार के लैक्टोमीटर का उपयोग किया जाता है, जो अलग-अलग तापमान पर अंशांकित होते हैं:",
            types: ["<strong>क्यूवेन का लैक्टोमीटर:</strong> 15.5°C पर अंशांकित।", "<strong>बीआईएस लैक्टोमीटर:</strong> 27°C पर अंशांकित।", "<strong>जील लैक्टोमीटर:</strong> 29.4°C पर अंशांकित।"],
            desc3: "एक मानक बीआईएस लैक्टोमीटर में 1.020 से 1.035 तक की विशिष्ट गुरुत्व सीमा होती है, जिसे पैमाने पर 20 से 35 के रूप में दर्शाया जाता है।"
        },
        methods: {
            title: "अंशांकन के विभिन्न तरीके",
            comparison: {
                title: "1. तुलना विधि",
                desc: "यह सबसे आसान तरीका है। इसमें एक ही दूध के नमूने में दो लैक्टोमीटर (एक नया और एक पहले से अंशांकित मानक लैक्टोमीटर) एक साथ डुबोए जाते हैं। यदि दोनों की रीडिंग समान आती है, तो नए लैक्टोमीटर को सही मान लिया जाता है।"
            },
            bis: {
                title: "2. बीआईएस विधि (मानक घोल विधि)",
                desc: "यह एक सटीक तरीका है जिसमें ज्ञात विशिष्ट गुरुत्व वाले घोलों का उपयोग किया जाता है। आमतौर पर, निर्जल सोडियम कार्बोनेट या सोडियम क्लोराइड के घोल बनाए जाते हैं।",
                steps: [
                    "तालिका के अनुसार, अलग-अलग विशिष्ट गुरुत्व (जैसे 1.025, 1.030) के लिए निर्धारित मात्रा में निर्जल सोडियम कार्बोनेट को आसुत जल में घोलें।",
                    "इस घोल का सतही तनाव दूध के बराबर लाने के लिए थोड़ा एथिल अल्कोहल मिलाएं।",
                    "घोल को एक लैक्टोमीटर जार में डालें और तापमान को लैक्टोमीटर के अंशांकन तापमान (जैसे बीआईएस के लिए 27°C) पर लाएं।",
                    "लैक्टोमीटर को धीरे से घोल में डुबोएं और स्थिर होने दें।",
                    "रीडिंग नोट करें। आपकी रीडिंग मानक घोल के विशिष्ट गुरुत्व से मेल खानी चाहिए। बीआईएस के अनुसार, 0.0005 से अधिक का अंतर नहीं होना चाहिए।"
                ]
            }
        }
    },
    other_glassware: {
        title: "अन्य कांच के बने पदार्थों का अंशांकन",
        intro: "वॉल्यूमेट्रिक फ्लास्क, मापने वाले सिलेंडर और बीकर जैसे कांच के बने पदार्थों को अंशांकित करना उतना ही महत्वपूर्ण है जितना कि पिपेट और ब्यूटिरोमीटर को। इनका अंशांकन भी ग्रेविमेट्रिक विधि (वजन मापकर) से किया जाता है।",
        principle: {
            title: "सिद्धांत",
            desc: "इस विधि का सिद्धांत बहुत सरल है: हम कांच के बने पदार्थ में आने वाले आसुत जल के वजन (द्रव्यमान) को एक निश्चित तापमान पर तौलकर उसके आयतन का पता लगाते हैं, क्योंकि हर तापमान पर पानी का घनत्व ज्ञात होता है (<code>आयतन = द्रव्यमान / घनत्व</code>)। इस निकाले गए आयतन की तुलना कांच के बने पदार्थ पर लिखी हुई क्षमता से की जाती है।"
        },
        procedure: {
            title: "वॉल्यूमेट्रिक फ्लास्क/मापने वाले सिलेंडर/बीकर की अंशांकन विधि",
            steps: [
                "एक साफ और पूरी तरह से सूखे वॉल्यूमेट्रिक फ्लास्क (या सिलेंडर/बीकर) को एक सटीक वजन संतुलन पर तौलें। इस वजन को <strong>W1</strong> के रूप में नोट करें।",
                "अब, उस फ्लास्क में निश्चित तापमान (आमतौर पर 27°C) वाला आसुत जल उसके स्नातक चिह्न तक धीरे-धीरे भरें। मेनिस्कस का निचला हिस्सा निशान पर होना चाहिए।",
                "पानी से भरे फ्लास्क को दोबारा तौलें। इस वजन को <strong>W2</strong> के रूप में नोट करें।",
                "पानी का वजन (द्रव्यमान) निकालें: <strong>पानी का द्रव्यमान = W2 - W1</strong>।",
                "अब इस वजन से पानी का आयतन गणना करें: <strong>आयतन (मिलीलीटर) = पानी का द्रव्यमान (ग्राम) / 27°C पर पानी का घनत्व (0.99654 ग्राम/मिलीलीटर)</strong>।",
                "गणना किए गए आयतन की तुलना फ्लास्क पर लिखी हुई क्षमता (जैसे 100 मिलीलीटर, 250 मिलीलीटर) से करें।",
                "हर कांच के बने पदार्थ की एक सहनशीलता सीमा होती है (कक्षा ए के लिए कम, कक्षा बी के लिए अधिक)। यदि गणना किया गया आयतन इस सीमा के भीतर है, तो कांच का बना पदार्थ सही है, अन्यथा उसे अस्वीकार कर दिया जाता है।"
            ]
        }
    },
    thermometer: {
        title: "थर्मामीटर का अंशांकन",
        intro: "थर्मामीटर को दो निश्चित बिंदुओं पर अंशांकित किया जाता है, जिससे उनकी सटीकता सुनिश्चित हो सके:",
        ice_point: {
            title: "1. बर्फ बिंदु (0°C)",
            steps: [
                "एक बीकर में शुद्ध, कुचली हुई बर्फ भरें।",
                "उसमें थोड़ा ठंडा, आसुत जल डालें ताकि बर्फ पूरी तरह गीली हो जाए, लेकिन तैरे नहीं।",
                "इस बर्फ-पानी के मिश्रण को अच्छी तरह मिलाएं।",
                "जिस थर्मामीटर को अंशांकित करना है, उसे इस मिश्रण में डालें। ध्यान रहे कि थर्मामीटर का बल्ब बीकर के नीचे या किनारों से न टकराए।",
                "थर्मामीटर को स्थिर होने तक प्रतीक्षा करें (लगभग 3-4 मिनट)।",
                "रीडिंग नोट करें। एक सही अंशांकित थर्मामीटर पर यह <strong>0°C</strong> दिखाना चाहिए। यदि कोई अंतर है, तो उसे त्रुटि के रूप में नोट कर लें।"
            ]
        },
        boiling_point: {
            title: "2. क्वथनांक (100°C)",
            steps: [
                "एक फ्लास्क में आसुत जल लें और उसे उबालना शुरू करें।",
                "थर्मामीटर को फ्लास्क में इस तरह रखें कि उसका बल्ब उबलते पानी के ठीक ऊपर, भाप में रहे, पानी को न छुए।",
                "जब थर्मामीटर की रीडिंग स्थिर हो जाए, तो उसे नोट करें।",
                "मानक वायुमंडलीय दबाव (760 मिमी Hg) पर, पानी <strong>100°C</strong> पर उबलता है। यदि दबाव अलग है, तो सुधार की आवश्यकता हो सकती है।",
                "यदि रीडिंग 100°C से अलग है, तो उस अंतर को त्रुटि के रूप में नोट करें।"
            ]
        }
    },
    balance: {
        title: "वजन संतुलन का अंशांकन",
        intro: "वजन संतुलन को मानक, प्रमाणित वजनों का उपयोग करके अंशांकित किया जाता है। इसके लिए तीन मुख्य परीक्षण किए जाते हैं:",
        tests: [
            "<strong>उत्केंद्रता परीक्षण:</strong> इसमें मानक वजन को वजन पैन के अलग-अलग कोनों पर रखकर देखा जाता है कि रीडिंग बदल तो नहीं रही है।",
            "<strong>पुनरावृत्ति परीक्षण:</strong> इसमें एक ही वजन को बार-बार रखकर जांचा जाता है कि संतुलन हर बार समान रीडिंग दे रहा है या नहीं।",
            "<strong>रैखिकता परीक्षण:</strong> इसमें संतुलन की पूरी मापने की सीमा (जैसे, 0 ग्राम से 200 ग्राम) में अलग-अलग मानक वजन (जैसे, 20 ग्राम, 50 ग्राम, 100 ग्राम, 150 ग्राम) रखकर सटीकता जांची जाती है।"
        ]
    }
},
en: {
    mainTitle: "Calibration and Standardization",
    description: "A guide to ensuring accurate measurements in the dairy laboratory.",
    backToTopics: "Back to Topics",
    intro_p1: "<strong>Calibration</strong> means comparing a measuring instrument to a standard instrument whose measurement is already considered accurate. This determines how accurate our instrument is. It does not involve adjustment but may indicate the need for adjustment.",
    intro_p2: "In a dairy plant, the composition (fat, SNF, etc.) and quality of milk are analyzed multiple times from reception to dispatch. This is essential for doğru pricing of the product, its suitability for processing, and meeting legal standards. Therefore, calibration and standardization of glassware (butyrometers, pipettes, etc.) and chemicals used in analysis are very important before use to avoid incorrect results.",
    tabs: {
        definitions: "Key Definitions",
        pipette: "Pipette Calibration",
        butyrometer: "Butyrometer Calibration",
        lactometer: "Lactometer Calibration",
        other: "Other Glassware",
        thermometer: "Thermometer Calibration",
        balance: "Weighing Balance"
    },
    definitions: {
        title: "Key Definitions",
        reagent: "Reagent",
        reagent_desc: "A substance that brings about a chemical change by reacting with another substance.",
        solution: "Solution",
        solution_desc: "A solution is a homogeneous mixture of two or more substances, consisting of a solute (in smaller quantity) and a solvent (in larger quantity).",
        dilute_sol: "<strong>Dilute Solution:</strong> Contains a small amount of solute.",
        concentrated_sol: "<strong>Concentrated Solution:</strong> Contains a large amount of solute.",
        saturated_sol: "<strong>Saturated Solution:</strong> No more solute can be dissolved at a given temperature.",
        standard_sol: "Standard Solution",
        standard_sol_desc: "A solution whose strength or concentration is precisely known.",
        normal_sol: "Normal Solution (Normality - N)",
        normal_sol_desc: "It is the number of gram equivalents of solute dissolved in 1 liter of solution. <code>N = gram equivalent of solute / volume of solution (L)</code>.",
        normal_sol_formula: "Gram equivalent weight = <code>Molar mass / n-factor</code>. (n-factor is the number of H+ ions for an acid and OH- ions for a base).",
        molar_sol: "Molar Solution (Molarity - M)",
        molar_sol_desc: "It is the number of moles of solute dissolved in 1 liter of solution. <code>M = moles of solute / volume of solution (L)</code>.",
        molal_sol: "Molal Solution (Molality - m)",
        molal_sol_desc: "It is the number of moles of solute dissolved in 1000g (1 kg) of solvent. <code>m = No. of moles of solute / weight of solvent (kg)</code>.",
        note: "Note: Normality and Molarity depend on temperature as volume changes with temperature, whereas Molality is independent of temperature."
    },
    pipette: {
        title: "Calibration of Milk Pipette",
        comparison: {
            title: "(a) Comparison Method",
            desc: "In this method, a fat test of milk is performed with a new pipette and its result is compared with that of an old, previously calibrated pipette. If both results are the same, the new pipette is considered correct. This is the easiest but least accurate method."
        },
        bis: {
            title: "(b) BIS Method (Gravimetric Method)",
            desc: "This is the most accurate method. It checks whether the pipette dispenses <strong>10.75 ± 0.03 ml</strong> of distilled water at 27°C.",
            steps: [
                "Clean the pipette and fill it with distilled water at 27°C above the mark.",
                "Adjust the meniscus to the mark.",
                "Dispense the water into a pre-weighed beaker.",
                "Weigh the beaker with the water and find the mass of the water.",
                "Calculate the volume: <code>Volume = Mass / Density</code>. The density of water at 27°C is 0.99654 g/mL.",
                "If the calculated volume is between 10.72 ml and 10.78 ml, the pipette is correct."
            ]
        },
        mathematical: {
            title: "(c) Mathematical Method",
            desc: "In this method, the volume per unit length of the pipette stem is calculated, and then based on the measurement of two temporary points, the correct point for 10.75 ml is determined and a permanent mark is made."
        }
    },
    butyrometer: {
        title: "Calibration of Butyrometer",
        principle: {
            title: "Principle",
            desc: "The main principle of butyrometer calibration is that the markings on its stem represent a certain volume. For a <strong>milk butyrometer</strong>, each <strong>1% fat mark is equivalent to an internal volume of 0.125 ml</strong>. Therefore, the total volume of the scale from 0 to 10% should be 1.25 ml. In calibration, we verify this volume. Pure mercury is commonly used for this because it does not stick to glass and has a very high density."
        },
        methods: {
            title: "Different Calibration Methods",
            comparison: {
                title: "1. Comparison Method",
                desc: "This is the easiest method. In this, the fat of the same milk sample is tested in two different butyrometers:",
                points: ["One previously calibrated (standard) butyrometer.", "One new butyrometer to be calibrated."],
                conclusion: "If the fat reading in both butyrometers is the same, the new butyrometer is considered correct. But this method is not very accurate as the old (standard) butyrometer may also not be correct."
            },
            bis: {
                title: "2. BIS Method (Mercury Pipette Method)",
                desc: "This is a more accurate and standard method. It uses a special type of automatic mercury pipette that dispenses exactly <strong>0.3125 ml</strong> of mercury at a time. This volume is equivalent to the <strong>2.5% fat scale</strong> of the butyrometer.",
                steps: [
                    "Clean and dry the butyrometer.",
                    "Fill the butyrometer with mercury up to the 10% mark. We consider this the base (zero) point.",
                    "Add 0.3125 ml of mercury from the mercury pipette into the butyrometer. The mercury level should come down from 10% to 7.5%.",
                    "Repeat this process 3 more times. Each time the mercury will fill a 2.5% scale (7.5% -> 5.0% -> 2.5% -> 0%).",
                    "If the butyrometer scale from 0 to 10% is filled correctly after adding mercury 4 times, the butyrometer is considered calibrated."
                ]
            },
            gravimetric: {
                title: "3. Gravimetric Method (by Weighing Mercury)",
                desc: "This is the most accurate method. In this, the volume is calculated by weighing the mercury between different marks.",
                steps: [
                    "Weigh a clean, dry butyrometer.",
                    "Fill it with mercury up to the 10% mark and weigh again.",
                    "Now fill with mercury up to the 9% mark and weigh again. The difference between the two weights will give the weight of mercury between 9% and 10%.",
                    "Using the density of mercury (which depends on temperature), convert this weight to volume: <code>Volume = Mass / Density</code>.",
                    "This volume should be between <strong>0.125 ± 0.001 ml</strong> (for 1% fat).",
                    "Similarly, repeat this test at 2-3 different points on the butyrometer scale (e.g., 5-6% and 1-2%) to check the accuracy of the entire scale."
                ]
            }
        },
        table: {
            caption: "Table 6.1: Types of Butyrometers for Different Products",
            header1: "Scale Range (%)",
            header2: "Product",
            rows: [
                { scale: "0–0.5", product: "Skim milk" },
                { scale: "0–4", product: "Partly skimmed milk, buttermilk" },
                { scale: "0–10", product: "Whole milk, evaporated milk (unsweetened)" },
                { scale: "0–20", product: "Dry milk powder" },
                { scale: "0–40", product: "Ice cream, condensed milk, cheese" },
                { scale: "0–70", product: "Cream" },
                { scale: "0–90", product: "Butter" }
            ]
        }
    },
    lactometer: {
        title: "Calibration of Lactometer",
        principle: {
            title: "Principle",
            desc1: "Lactometers work on <strong>Archimedes' principle</strong>: when an object is immersed in a liquid, it is buoyed up by a force equal to the weight of the liquid displaced by the object. The lactometer measures the specific gravity of the liquid. The denser the milk (more SNF), the less the lactometer will sink, and the reading will be higher. Adding water makes the milk thinner, causing the lactometer to sink more and the reading to be lower.",
            desc2: "Commonly 3 types of lactometers are used, which are calibrated at different temperatures:",
            types: ["<strong>Quevenne’s Lactometer:</strong> calibrated at 15.5°C.", "<strong>BIS Lactometer:</strong> calibrated at 27°C.", "<strong>Zeal Lactometer:</strong> calibrated at 29.4°C."],
            desc3: "A standard BIS lactometer has a specific gravity range from 1.020 to 1.035, which is represented as 20 to 35 on the scale."
        },
        methods: {
            title: "Different Calibration Methods",
            comparison: {
                title: "1. Comparison Method",
                desc: "This is the easiest method. In this, two lactometers (one new and one previously calibrated standard lactometer) are immersed together in the same milk sample. If both give the same reading, the new lactometer is considered correct."
            },
            bis: {
                title: "2. BIS Method (Standard Solution Method)",
                desc: "This is an accurate method that uses solutions of known specific gravity. Typically, solutions of anhydrous sodium carbonate or sodium chloride are made.",
                steps: [
                    "According to the table, dissolve a specified amount of anhydrous sodium carbonate in distilled water for different specific gravities (e.g., 1.025, 1.030).",
                    "Add a little ethyl alcohol to bring the surface tension of this solution equal to that of milk.",
                    "Pour the solution into a lactometer jar and bring the temperature to the lactometer's calibration temperature (e.g., 27°C for BIS).",
                    "Gently immerse the lactometer in the solution and let it stabilize.",
                    "Note the reading. Your reading should match the specific gravity of the standard solution. According to BIS, the difference should not be more than 0.0005."
                ]
            }
        }
    },
    other_glassware: {
        title: "Calibration of Other Glassware",
        intro: "Calibrating glassware like volumetric flasks, measuring cylinders, and beakers is just as important as calibrating pipettes and butyrometers. Their calibration is also done by the Gravimetric Method (by measuring weight).",
        principle: {
            title: "Principle",
            desc: "The principle of this method is very simple: we find the volume of distilled water contained in the glassware by weighing it at a certain temperature, as the density of water at every temperature is known (<code>Volume = Mass / Density</code>). This calculated volume is compared with the capacity written on the glassware."
        },
        procedure: {
            title: "Calibration Method for Volumetric Flask/Measuring Cylinder/Beaker",
            steps: [
                "Weigh a clean and completely dry volumetric flask (or cylinder/beaker) on an accurate weighing balance. Note this weight as <strong>W1</strong>.",
                "Now, slowly fill that flask with distilled water at a certain temperature (usually 27°C) up to its graduation mark. The lower part of the meniscus should be on the mark.",
                "Weigh the flask filled with water again. Note this weight as <strong>W2</strong>.",
                "Calculate the weight (mass) of the water: <strong>Mass of Water = W2 - W1</strong>.",
                "Now calculate the volume of water from this weight: <strong>Volume (ml) = Mass of Water (g) / Density of water at 27°C (0.99654 g/ml)</strong>.",
                "Compare the calculated volume with the capacity written on the flask (e.g., 100 ml, 250 ml).",
                "Every glassware has a tolerance limit (less for Class A, more for Class B). If the calculated volume is within this limit, the glassware is correct, otherwise, it is rejected."
            ]
        }
    },
    thermometer: {
        title: "Calibration of Thermometer",
        intro: "Thermometers are calibrated at two fixed points to ensure their accuracy:",
        ice_point: {
            title: "1. Ice Point (0°C)",
            steps: [
                "Fill a beaker with pure, crushed ice.",
                "Add a little cold, distilled water to it so that the ice is completely wet but not floating.",
                "Mix this ice-water mixture well.",
                "Immerse the thermometer to be calibrated in this mixture. Ensure the thermometer's bulb does not touch the bottom or sides of the beaker.",
                "Wait for the thermometer to stabilize (about 3-4 minutes).",
                "Note the reading. A correctly calibrated thermometer should show <strong>0°C</strong>. If there is any difference, note it as an error."
            ]
        },
        boiling_point: {
            title: "2. Boiling Point (100°C)",
            steps: [
                "Take distilled water in a flask and start boiling it.",
                "Place the thermometer in the flask in such a way that its bulb is just above the boiling water, in the steam, not touching the water.",
                "When the thermometer's reading stabilizes, note it.",
                "At standard atmospheric pressure (760 mm Hg), water boils at <strong>100°C</strong>. If the pressure is different, a correction may be needed.",
                "If the reading is different from 100°C, note that difference as an error."
            ]
        }
    },
    balance: {
        title: "Calibration of Weighing Balance",
        intro: "Weighing balances are calibrated using standard, certified weights. Three main tests are performed for this:",
        tests: [
            "<strong>Eccentricity Test:</strong> In this, the standard weight is placed on different corners of the weighing pan to see if the reading changes.",
            "<strong>Repeatability Test:</strong> In this, the same weight is placed repeatedly to check if the balance gives the same reading every time.",
            "<strong>Linearity Test:</strong> In this, the accuracy is checked across the entire measuring range of the balance (e.g., 0g to 200g) by placing different standard weights (e.g., 20g, 50g, 100g, 150g)."
        ]
    }
}
}
