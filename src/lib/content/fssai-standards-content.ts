
export const fssaiStandardsContent = {
    hi: {
        mainTitle: "डेयरी उत्पादों के लिए FSSAI मानक",
        description: "आधिकारिक डेयरी मानकों के लिए एक गाइड।",
        backToTopics: "विषयों पर वापस जाएं",
        topics: {
            general: {
                title: "दूध और दूध उत्पादों के लिए सामान्य मानक",
                p1: "सामान्य मानक दूध और दूध उत्पादों के लिए व्यापक परिभाषाएं और उपभोक्ताओं या आगे की प्रक्रिया के लिए पेश किए जाने वाले खाद्य पदार्थों के संबंध में डेयरी शर्तों के उपयोग पर मार्गदर्शन प्रदान करता है।",
                definitions: {
                    title: "परिभाषाएं",
                    list: [
                        "<b>उबालना:</b> दूध को लगातार गर्म करके वायुमंडलीय दबाव पर उबालने की प्रक्रिया को संदर्भित करता है।",
                        "<b>अनुरूप:</b> एक उत्पाद जिसमें दूध से प्राप्त नहीं होने वाले घटक, आंशिक या पूर्ण रूप से, किसी भी दूध घटक को प्रतिस्थापित करते हैं और अंतिम उत्पाद ऑर्गेनोलेप्टिक रूप से और/या कार्यात्मक रूप से एक दूध उत्पाद जैसा दिखता है।",
                        "<b>समग्र दूध उत्पाद:</b> एक उत्पाद जिसका दूध, दूध उत्पाद, या दूध घटक अंतिम उत्पाद में मात्रा के मामले में एक आवश्यक हिस्सा है।",
                        "<b>दूध:</b> एक स्वस्थ दूध देने वाले जानवर से पूर्ण दूध निकालने से प्राप्त सामान्य स्तन स्राव, बिना किसी योग या निष्कर्षण के, जब तक अन्यथा प्रदान न किया गया हो। यह कोलोस्ट्रम से मुक्त होना चाहिए।",
                        "<b>दूध उत्पाद:</b> दूध के प्रसंस्करण से प्राप्त एक उत्पाद, जिसमें अनुमत खाद्य योजक और अन्य सामग्री हो सकती है।",
                        "<b>पाश्चुरीकरण:</b> दूध का एक माइक्रोबियल गर्मी उपचार कम से कम 63°C पर 30 मिनट या 72°C पर 15 सेकंड के लिए।",
                        "<b>पुनः संयोजित दूध:</b> दूध वसा और दूध-ठोस-गैर-वसा के संरक्षित रूपों के संयोजन से प्राप्त एक उत्पाद, पीने योग्य पानी के साथ या बिना।",
                        "<b>पुनर्गठित दूध:</b> दूध के सूखे या केंद्रित रूप में पीने योग्य पानी मिलाने से प्राप्त एक उत्पाद।",
                        "<b>नसबंदी:</b> दूध या दूध उत्पादों को व्यावसायिक रूप से बाँझ बनाने के लिए उच्च तापमान (कम से कम 115°C पर 15 मिनट) पर गर्मी का अनुप्रयोग।",
                        "<b>अति उच्च तापमान (UHT) उपचार:</b> दूध को कम से कम 135°C पर एक सेकंड या अधिक के लिए एक निरंतर प्रवाह में गर्म करना और फिर सड़न रोकनेवाला स्थितियों में पैक करना।",
                    ]
                },
                principles: {
                    title: "सामान्य सिद्धांत",
                    p1: "खाद्य पदार्थों को इस तरह से वर्णित या प्रस्तुत किया जाना चाहिए कि डेयरी शर्तों का सही उपयोग सुनिश्चित हो, उपभोक्ताओं को गुमराह होने से बचाया जा सके, और उचित व्यापार प्रथाओं को सुनिश्चित किया जा सके।"
                }
            },
            milk: {
                title: "दूध के लिए मानक",
                description: {
                    title: "विवरण",
                    list: [
                        "<b>प्रजाति पहचाना गया दूध:</b> एक विशिष्ट जानवर (जैसे, गाय, भैंस) से प्राप्त दूध।",
                        "<b>मिश्रित दूध:</b> प्रजाति पहचाने गए दूध का कोई भी संयोजन।",
                        "<b>मानकीकृत दूध:</b> विशिष्ट वसा और ठोस-गैर-वसा प्रतिशत के लिए मानकीकृत दूध।",
                        "<b>कम लैक्टोज या लैक्टोज मुक्त दूध:</b> दूध जिसमें लैक्टोज की मात्रा हाइड्रोलिसिस के माध्यम से काफी कम कर दी गई है।"
                    ]
                },
                composition: {
                    title: "संरचनात्मक आवश्यकताएं (न्यूनतम)",
                    headers: ["दूध का वर्ग", "न्यूनतम दूध वसा (% m/m)", "न्यूनतम दूध ठोस-गैर-वसा (SNF) (% m/m)"],
                    rows: [
                        ["भैंस का दूध", "5.0", "9.0"],
                        ["गाय का दूध", "3.2", "8.3"],
                        ["बकरी या भेड़ का दूध", "3.0", "8.0"],
                        ["ऊंट का दूध", "2.0", "6.0"],
                        ["मिश्रित दूध", "4.5", "8.5"],
                        ["मानकीकृत दूध", "4.5", "8.5"],
                        ["टोन्ड दूध", "3.0", "8.5"],
                        ["डबल टोन्ड दूध", "1.5", "9.0"],
                        ["स्किम्ड दूध", "0.5 से अधिक नहीं", "8.7"],
                        ["फुल क्रीम दूध", "6.0", "9.0"]
                    ]
                },
                additives: {
                    title: "खाद्य योजक",
                    p1: "दूध में कोई खाद्य योजक नहीं होना चाहिए, सिवाय 2.1.2 (1)(c) में निर्दिष्ट उत्पादों में अनुमत कैरी-ओवर खाद्य योजकों और निष्फल दूध में विशिष्ट योजकों के।"
                },
                hygiene: {
                    title: "स्वच्छता",
                    p1: "उत्पादों को निर्धारित स्वच्छता मानकों के अनुसार तैयार और संभाला जाना चाहिए और सूक्ष्मजीवविज्ञानी आवश्यकताओं के अनुरूप होना चाहिए।"
                },
                labeling: {
                    title: "लेबलिंग",
                    p1: "दूध का वर्ग और ऊष्मा उपचार लेबल पर घोषित किया जाना चाहिए। यदि कोई ऊष्मा उपचार नहीं किया गया है तो दूध के नाम से पहले \"कच्चा\" लिखा जाना चाहिए।"
                }
            },
            khoa: {
                title: "खोआ के लिए मानक",
                description: { title: "विवरण", p1: "खोआ या मावा एक उत्पाद है जो किसी भी प्रकार के दूध से आंशिक रूप से पानी हटाकर प्राप्त किया जाता है, जिसमें दूध ठोस पदार्थ जोड़ा जा सकता है या नहीं, नियंत्रित परिस्थितियों में गर्म करके।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "आवश्यकता"],
                    rows: [
                        ["कुल ठोस, न्यूनतम, % (m/m)", "55.0"],
                        ["दूध वसा, न्यूनतम, % (m/m), शुष्क पदार्थ आधार पर", "30.0"],
                        ["कुल राख, अधिकतम, % (m/m)", "6.0"],
                        ["अनुमेय अम्लता (% लैक्टिक एसिड के रूप में), अधिकतम, %", "0.9"]
                    ]
                }
            },
            cream: {
                title: "क्रीम और मलाई के लिए मानक",
                description: {
                    title: "विवरण",
                    list: [
                        "<b>क्रीम:</b> वसा से भरपूर तरल उत्पाद, वसा-में-स्किम्ड दूध के पायस के रूप में, जो गाय या भैंस के दूध या मिश्रण से भौतिक अलगाव द्वारा प्राप्त किया जाता है।",
                        "<b>मलाई:</b> वसा से भरपूर उत्पाद जो दूध को उबालने और ठंडा करने से तैयार किया जाता है, जिसमें एक अघुलनशील द्रव्यमान की उपस्थिति होती है, मुख्य रूप से वसा और विकृत प्रोटीन।"
                    ]
                },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    p1: "उत्पाद में न्यूनतम 10.0% (m/m) दूध वसा होना चाहिए। किण्वित और अम्लीकृत क्रीम के अलावा, अंतिम उत्पाद की अम्लता 0.15% (लैक्टिक एसिड के रूप में) से अधिक नहीं होनी चाहिए।"
                },
                labeling: {
                    title: "लेबलिंग",
                    p1: "भोजन का नाम निर्दिष्ट किया जाना चाहिए, और वसा की मात्रा का उल्लेख किया जाना चाहिए (जैसे, \"कम वसा वाली क्रीम,\" \"मध्यम वसा वाली क्रीम,\" \"उच्च वसा वाली क्रीम\")।"
                }
            },
            fatProducts: {
                title: "दूध वसा उत्पादों के लिए मानक",
                description: { title: "विवरण", p1: "वसा युक्त उत्पाद जो केवल दूध से प्रक्रियाओं द्वारा प्राप्त किए जाते हैं जिसके परिणामस्वरूप पानी और दूध के ठोस-गैर-वसा लगभग पूरी तरह से हट जाते हैं।" },
                composition: {
                    title: "संरचनात्मक आवश्यकताएं",
                    headers: ["पैरामीटर", "दूध वसा, मक्खन तेल", "निर्जल दूध वसा, निर्जल मक्खन तेल", "घी"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "0.4", "0.1", "0.5"],
                        ["दूध वसा, न्यूनतम, % (m/m)", "99.6", "99.8", "99.5"],
                        ["ब्यूटिरो-रिफ्रेक्टोमीटर रीडिंग 40°C पर", "40.0 से 44.0", "40.0 से 44.0", "40.0 से 44.0"],
                        ["रीचर्ट मीसल मान, न्यूनतम", "24.0", "24.0", "24.0"],
                        ["FFA ओलिक एसिड के रूप में, अधिकतम %", "0.4", "0.3", "2.0"],
                        ["बाउडौइन परीक्षण", "नकारात्मक", "नकारात्मक", "नकारात्मक"],
                        ["आयोडीन मान", "-", "-", "25-38"],
                        ["साबुनीकरण मान", "-", "-", "205-235"],
                        ["बीटा-सिटोस्टेरॉल की उपस्थिति", "अनुपस्थित", "अनुपस्थित", "अनुपस्थित"]
                    ]
                },
                fattyAcid: {
                    title: "घी की वसा अम्ल संरचना",
                    headers: ["वसा अम्ल का प्रकार", "वसा अम्ल संरचना (%)"],
                    rows: [
                        ["C4:0, ब्यूटिरिक एसिड", "1-5"],
                        ["C6:0, हेक्सानोइक एसिड", "0.5-2.2"],
                        ["C16:0, हेक्साडेकानोइक एसिड", "22-38"],
                        ["C18:0, ऑक्टाडेकानोइक एसिड", "8-19"],
                        ["C18:1 (cis 9) 9-ऑक्टाडेसेनोइक एसिड (ओलिक एसिड)", "19-32"]
                    ]
                },
                note: "घी में वनस्पति तेल की मिलावट का पता लगाने के लिए RP-HPLC द्वारा निर्धारण की विधि जैसा कि FSSAI कार्यालय आदेश द्वारा अधिसूचित किया गया है: फ़ाइल संख्या 1-90/FSSAI/SP (MS&A)/2009 दिनांक 25 मार्च, 2019"
            },
             butter: {
                title: "मक्खन के लिए मानक",
                definition: { title: "परिभाषा", p1: "मक्खन एक वसा युक्त उत्पाद है, मुख्य रूप से एक पानी-में-तेल पायस जो केवल दूध या दूध उत्पादों से प्राप्त किया जाता है। यह दो प्रकार का हो सकता है: टेबल मक्खन और सफेद मक्खन/कुकिंग मक्खन।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "टेबल मक्खन", "सफेद मक्खन / कुकिंग मक्खन"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "16.0", "-"],
                        ["दूध वसा, न्यूनतम, % (m/m)", "80.0", "76.0"],
                        ["दूध ठोस-गैर-वसा, अधिकतम, % (m/m)", "2.0", "-"],
                        ["साधारण नमक, अधिकतम, % (m/m)", "3.0", "-"]
                    ]
                },
                note: "मक्खन से निकाले गए वसा को घी के रीचर्ट मीसल मान और ब्यूटिरो-रिफ्रेक्टोमीटर रीडिंग के मानकों को पूरा करना होगा।"
            },
            milkPowders: {
                title: "दूध पाउडर और क्रीम पाउडर के लिए मानक",
                description: { title: "विवरण", p1: "दूध पाउडर और क्रीम पाउडर दूध उत्पाद हैं जो दूध या क्रीम से आंशिक रूप से पानी हटाकर प्राप्त किए जाते हैं, जिसके परिणामस्वरूप एक पाउडर रूप मिलता है।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "पूरा दूध पाउडर", "आंशिक रूप से स्किम्ड दूध पाउडर", "स्किम्ड दूध पाउडर", "क्रीम पाउडर"],
                    rows: [
                        ["नमी*, अधिकतम, % (m/m)", "5.0", "5.0", "5.0", "5.0"],
                        ["दूध वसा, % (m/m)", "न्यूनतम 26.0", ">1.5 और <26.0", "1.5 (अधिकतम)", "42.0 (न्यूनतम)"],
                        ["दूध ठोस-गैर-वसा में दूध प्रोटीन, न्यूनतम, % (m/m)", "34.0", "34.0", "34.0", "34.0"],
                        ["अघुलनशीलता सूचकांक, अधिकतम, ml", "2.0", "2.0", "2.0", "-"]
                    ]
                },
                note: "नमी की मात्रा में लैक्टोज के क्रिस्टलीकरण का पानी शामिल नहीं है। प्रोटीन की मात्रा कुल नाइट्रोजन निर्धारित करके 6.38 से गुणा करके निकाली जाती है।"
            },
            fermented: {
                title: "किण्वित दूध उत्पादों के लिए मानक",
                description: {
                    title: "विवरण",
                    list: [
                        "<b>किण्वित दूध:</b> सूक्ष्मजीवों द्वारा दूध के किण्वन से प्राप्त होता है, जिसके परिणामस्वरूप पीएच कम हो जाता है। इसमें दही और योगहर्ट शामिल हैं।",
                        "<b>चक्का:</b> दही या योगहर्ट से आंशिक रूप से मट्ठा हटाकर प्राप्त किण्वित और केंद्रित दूध उत्पाद।",
                        "<b>श्रीखंड:</b> चक्का से प्राप्त अर्ध-मुलायम केंद्रित संयुक्त दूध उत्पाद, जिसमें दूध वसा और चीनी मिलाई जाती है।"
                    ]
                },
                yoghurt: {
                    title: "संरचनात्मक विनिर्देश (योगहर्ट और फ्लेवर्ड दही)",
                    headers: ["पैरामीटर", "योगहर्ट और फ्लेवर्ड दही", "आंशिक रूप से स्किम्ड योगहर्ट / फ्लेवर्ड आंशिक रूप से स्किम्ड दही", "स्किम्ड योगहर्ट / फ्लेवर्ड स्किम्ड दही"],
                    rows: [
                        ["दूध वसा, % (m/m)", "3.0 से कम नहीं और 15 से अधिक नहीं", "0.5 से अधिक और 3.0 से कम", "0.5 (अधिकतम)"],
                        ["दूध ठोस-गैर-वसा, न्यूनतम, % (m/m)", "8.5", "8.5", "8.5"]
                    ]
                },
                chakka: {
                    title: "संरचनात्मक विनिर्देश (चक्का)",
                    headers: ["पैरामीटर", "चक्का", "स्किम्ड दूध चक्का", "फुल क्रीम चक्का"],
                    rows: [
                        ["कुल ठोस, न्यूनतम, % (m/m)", "30.0", "20.0", "28.0"],
                        ["दूध वसा, % (m/m), शुष्क आधार पर", "33.0 (न्यूनतम)", "5.0 (अधिकतम)", "38.0 (न्यूनतम)"]
                    ]
                }
            },
            iceCream: {
                title: "आइसक्रीम, कुल्फी आदि के लिए मानक",
                description: { title: "विवरण", p1: "दूध या अन्य दूध-उत्पादों से बने पाश्चुरीकृत मिश्रण को मिठास और अन्य अनुमत गैर-डेयरी सामग्री के साथ जमाकर प्राप्त किए गए जमे हुए दूध उत्पाद।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "आइसक्रीम या कुल्फी", "मध्यम वसा आइसक्रीम या कुल्फी", "कम वसा आइसक्रीम या कुल्फी"],
                    rows: [
                        ["कुल ठोस, न्यूनतम, % (m/m)", "36.0", "30.0", "26.0"],
                        ["वजन, न्यूनतम, g/l", "525.0", "475.0", "475.0"],
                        ["दूध वसा, % (m/m)", "10.0 (न्यूनतम)", "2.5 से अधिक और 10.0 से कम", "2.5 (अधिकतम)"],
                        ["दूध प्रोटीन, न्यूनतम, % (m/m)", "3.5", "3.5", "3.0"]
                    ]
                },
                milkIce: {
                    title: "दूध बर्फ या दूध लॉली",
                    headers: ["पैरामीटर", "आवश्यकता"],
                    rows: [
                        ["कुल ठोस, न्यूनतम, % (m/m)", "20.0"],
                        ["दूध वसा, अधिकतम, % (m/m)", "2.0"],
                        ["दूध प्रोटीन, न्यूनतम, % (m/m)", "3.5"]
                    ]
                },
                note: "प्रोटीन की मात्रा कुल नाइट्रोजन निर्धारित करके 6.38 से गुणा करके निकाली जाती है।"
            },
            chhanaPaneer: {
                title: "छानना और पनीर के लिए मानक",
                definition: { title: "परिभाषा", p1: "छानना या पनीर दूध के किसी भी प्रकार से अनुमत अम्लों और गर्मी के साथ अवक्षेपण द्वारा प्राप्त उत्पाद है।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "छानना या पनीर", "मध्यम वसा छानना या पनीर", "कम वसा छानना या पनीर"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "65.0 (छानना के लिए) / 60.0 (पनीर के लिए)", "65.0 (छानना के लिए) / 60.0 (पनीर के लिए)", "70.0 (छानना के लिए) / 70.0 (पनीर के लिए)"],
                        ["दूध वसा, % (m/m), शुष्क आधार पर", "50.0 (न्यूनतम)", "20.0 से अधिक और 50.0 से कम", "20.0 (अधिकतम)"]
                    ]
                },
                labeling: {
                    title: "लेबलिंग",
                    p1: "नाम संरचना के अनुसार घोषित किया जाना चाहिए। \"कम वसा\" या \"मध्यम वसा\" उत्पादों को उचित घोषणाओं के साथ सील बंद पैकेज में बेचा जाना चाहिए।"
                }
            },
            cheese: {
                title: "पनीर और पनीर उत्पादों के लिए मानक",
                description: {
                    title: "विवरण",
                    list: [
                        "<b>पनीर:</b> दूध प्रोटीन के जमने से प्राप्त एक पका हुआ या कच्चा उत्पाद।",
                        "<b>प्रसंस्कृत पनीर:</b> एक या अधिक प्रकार के पनीर को पीसने, मिलाने, पिघलाने और पायसीकारी करने से प्राप्त किया जाता है, गर्मी और पायसीकारी एजेंटों की सहायता से।"
                    ]
                },
                composition: {
                    title: "संरचनात्मक आवश्यकताएं (उदाहरण)",
                    headers: ["उत्पाद", "नमी, अधिकतम, % (m/m)", "दूध वसा, न्यूनतम, % (शुष्क आधार पर)"],
                    rows: [
                        ["कठोर दबाया हुआ पनीर", "39.0", "48.0"],
                        ["चेडर पनीर", "39.0", "48.0"],
                        ["मोज़ेरेला पनीर", "60.0", "35.0"],
                        ["प्रसंस्कृत पनीर", "47.0", "40.0"],
                        ["प्रसंस्कृत पनीर स्प्रेड", "60.0", "40.0"]
                    ]
                },
                labeling: {
                    title: "लेबलिंग",
                    p1: "भोजन उत्पाद का नाम 'पनीर' या एक सु-स्थापित किस्म का नाम होना चाहिए। सतह-उपचारित पनीर के लिए विशेष घोषणाएं आवश्यक हैं (जैसे, \"NATAMYCIN से सतह उपचारित\")।"
                }
            },
            casein: {
                title: "खाद्य कैसिइन उत्पादों के लिए मानक",
                description: {
                    title: "विवरण",
                    list: [
                        "<b>खाद्य एसिड कैसिइन:</b> स्किम्ड दूध के एसिड से अवक्षेपित कोगुलम को अलग करने, धोने और सुखाने से प्राप्त उत्पाद।",
                        "<b>खाद्य रेनेट कैसिइन:</b> गैर-पशु रेनेट द्वारा जमाए गए स्किम्ड दूध से मट्ठा अलग करने के बाद बचे कोगुलम को धोने और सुखाने के बाद प्राप्त उत्पाद।",
                        "<b>खाद्य कैसिनेट:</b> खाद्य कैसिइन या कैसिइन दही कोगुलम की खाद्य-ग्रेड उदासीनीकरण एजेंटों के साथ प्रतिक्रिया के बाद सुखाकर प्राप्त किया गया शुष्क उत्पाद।"
                    ]
                },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "खाद्य एसिड कैसिइन", "खाद्य रेनेट कैसिइन", "खाद्य कैसिनेट"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "12.0", "12.0", "8.0"],
                        ["दूध वसा, अधिकतम, % (m/m)", "2.0", "2.0", "2.0"],
                        ["दूध प्रोटीन, न्यूनतम, % (m/m), शुष्क आधार पर", "90.0", "84.0", "88.0"],
                        ["प्रोटीन में कैसिइन, न्यूनतम, % (m/m)", "95.0", "95.0", "95.0"],
                        ["लैक्टोज, अधिकतम, % (m/m)", "1.0", "1.0", "1.0"],
                        ["कुल राख P2O5 सहित, % (m/m)", "2.5 (अधिकतम)", "7.5 (न्यूनतम)", "-"]
                    ]
                },
                note: "प्रोटीन की मात्रा कुल नाइट्रोजन निर्धारित करके 6.38 से गुणा करके निकाली जाती है। लैक्टोज की मात्रा निर्जल लैक्टोज के रूप में व्यक्त की जाती है।"
            },
            lactose: {
                title: "खाद्य लैक्टोज के लिए मानक",
                description: { title: "विवरण", p1: "लैक्टोज एक सफेद से हल्का पीला क्रिस्टलीय, हल्का मीठा डिसाकेराइड चीनी है जो दूध में पाया जाता है।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "सीमाएं"],
                    rows: [
                        ["कुल नमी, अधिकतम, % (m/m)", "6.0"],
                        ["लैक्टोज, न्यूनतम, % (m/m) शुष्क आधार पर", "99.0"],
                        ["सल्फेटेड राख, अधिकतम, % (m/m)", "0.3"]
                    ]
                }
            },
            wheyProtein: {
                title: "मट्ठा प्रोटीन कॉन्सेंट्रेट",
                description: { title: "विवरण", p1: "मट्ठा से गैर-प्रोटीन घटकों को भौतिक अलगाव तकनीकों द्वारा हटाकर प्राप्त किया गया एक उत्पाद, जिसके बाद सुखाया जाता है।" },
                composition: {
                    title: "संरचनात्मक विनिर्देश",
                    headers: ["पैरामीटर", "सीमाएं"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "6.0"],
                        ["दूध प्रोटीन, न्यूनतम, % (m/m)", "35.0"],
                        ["दूध वसा, अधिकतम, % (m/m)", "10"],
                        ["जले हुए कण, अधिकतम", "डिस्क B (15 mg)"]
                    ]
                },
                note: "प्रोटीन की मात्रा कुल नाइट्रोजन निर्धारित करके 6.38 से गुणा करके निकाली जाती है।"
            },
            colostrum: {
                title: "गाय या भैंस कोलोस्ट्रम और कोलोस्ट्रम उत्पादों के लिए मानक",
                description: {
                    title: "विवरण",
                    list: [
                        "<b>कोलोस्ट्रम:</b> एक गाय या भैंस के स्तन ग्रंथियों से प्राप्त लैक्टियल स्राव जो प्रसव के बाद तीन से पांच दिन तक प्राप्त होता है।",
                        "<b>कोलोस्ट्रम-आधारित उत्पाद:</b> कोलोस्ट्रम से बने प्रसंस्कृत उत्पाद।",
                        "<b>कोलोस्ट्रम पाउडर:</b> कोलोस्ट्रम को सुखाकर प्राप्त किया गया एक कोलोस्ट्रम-आधारित उत्पाद।"
                    ]
                },
                compositionColostrum: {
                    title: "संरचनात्मक विनिर्देश (कोलोस्ट्रम)",
                    headers: ["पैरामीटर", "आवश्यकताएं"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "80.0"],
                        ["प्रोटीन, न्यूनतम, % (m/m)", "7.0"],
                        ["वसा, न्यूनतम, % (m/m)", "4.0"],
                        ["इम्युनोग्लोबुलिन, न्यूनतम, % (m/m)", "1.8"],
                        ["लैक्टोफेरिन, न्यूनतम, % (m/m)", "0.2"]
                    ]
                },
                compositionPowder: {
                    title: "संरचनात्मक विनिर्देश (कोलोस्ट्रम पाउडर)",
                    headers: ["पैरामीटर", "आवश्यकताएं"],
                    rows: [
                        ["नमी, अधिकतम, % (m/m)", "4.0"],
                        ["प्रोटीन, न्यूनतम, % (m/m)", "40.0"],
                        ["वसा, न्यूनतम, % (m/m)", "17.5"],
                        ["इम्युनोग्लोबुलिन, न्यूनतम, % (m/m)", "12.5"],
                        ["लैक्टोफेरिन, न्यूनतम, % (m/m)", "1.2"]
                    ]
                },
                note: "प्रोटीन की मात्रा कुल नाइट्रोजन निर्धारित करके 6.38 से गुणा करके निकाली जाती है।"
            }
        }
    },
    en: {
        mainTitle: "FSSAI Standards for Dairy Products",
        description: "A guide to official dairy standards.",
        backToTopics: "Back to Topics",
        topics: {
            general: {
                title: "General Standards for Milk and Milk Products",
                p1: "The General standard provides overarching definitions for milk and milk products and guidance on the use of dairy terms in relation to foods offered to consumers or for further processing.",
                definitions: {
                    title: "Definitions",
                    list: [
                        "<b>Boiling:</b> Refers to the process of constantly heating milk to a boil at atmospheric pressure.",
                        "<b>Analogue:</b> A product in which ingredients not derived from milk, in part or in whole, replace any milk component and the final product resembles organoleptically and/or functionally a milk product.",
                        "<b>Composite milk product:</b> A product of which the milk, milk products, or milk constituents are an essential part in terms of quantity in the final product.",
                        "<b>Milk:</b> The normal mammary secretion derived from complete milking of a healthy milch animal, without any addition or extraction, unless otherwise provided. It should be free from colostrum.",
                        "<b>Milk Product:</b> A product obtained by processing of milk, which may contain permitted food additives and other ingredients.",
                        "<b>Pasteurisation:</b> A microbicidal heat treatment of milk at not less than 63°C for 30 minutes or 72°C for 15 seconds.",
                        "<b>Recombined milk:</b> A product resulting from the combination of preserved forms of milk fat and milk-solids-non-fat, with or without the addition of potable water.",
                        "<b>Reconstituted milk:</b> A product resulting from the addition of potable water to the dried or concentrated form of milk.",
                        "<b>Sterilisation:</b> The application of heat to milk or milk products at high temperatures (not less than 115°C for 15 minutes) to render them commercially sterile.",
                        "<b>Ultra High Temperature (UHT) treatment:</b> Heating milk in a continuous flow to a temperature of not less than 135°C for one second or more and then packing in aseptic conditions."
                    ]
                },
                principles: {
                    title: "General Principles",
                    p1: "Foods shall be described or presented in such a manner as to ensure the correct use of dairy terms, to protect consumers from being misled, and to ensure fair trade practices."
                }
            },
            milk: {
                title: "Standard for Milk",
                description: {
                    title: "Description",
                    list: [
                        "<b>Species identified milk:</b> Milk obtained from a specific animal (e.g., cow, buffalo).",
                        "<b>Mixed Milk:</b> Any combination of species identified milk.",
                        "<b>Standardized milk:</b> Milk standardized to a specific fat and solids-not-fat percentage.",
                        "<b>Low Lactose or Lactose-free milk:</b> Milk in which the lactose content has been substantially reduced through hydrolysis."
                    ]
                },
                composition: {
                    title: "Compositional Requirements (Minimum)",
                    headers: ["Class of Milk", "Minimum Milk Fat (% m/m)", "Minimum Milk Solids-not-fat (SNF) (% m/m)"],
                    rows: [
                        ["Buffalo Milk", "5.0", "9.0"],
                        ["Cow Milk", "3.2", "8.3"],
                        ["Goat or Sheep Milk", "3.0", "8.0"],
                        ["Camel Milk", "2.0", "6.0"],
                        ["Mixed Milk", "4.5", "8.5"],
                        ["Standardized Milk", "4.5", "8.5"],
                        ["Toned Milk", "3.0", "8.5"],
                        ["Double Toned Milk", "1.5", "9.0"],
                        ["Skimmed Milk", "not more than 0.5", "8.7"],
                        ["Full Cream Milk", "6.0", "9.0"]
                    ]
                },
                additives: {
                    title: "Food Additives",
                    p1: "Milk should not contain any food additives, except for permitted carry-over food additives in products specified in 2.1.2 (1)(c) and specific additives in sterilized milk."
                },
                hygiene: {
                    title: "Hygiene",
                    p1: "The products shall be prepared and handled in accordance with the prescribed hygiene standards and shall conform to the microbiological requirements."
                },
                labeling: {
                    title: "Labelling",
                    p1: "The class of milk and the heat treatment must be declared on the label. The word \"Raw\" must precede the name of the milk if no heat treatment has been applied."
                }
            },
            khoa: {
                title: "Standard for Khoa",
                description: { title: "Description", p1: "Khoa or Mawa is a product obtained from any variety of milk by partial removal of water, with or without the addition of milk solids, by heating under controlled conditions." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Requirement"],
                    rows: [
                        ["Total solids, min, % (m/m)", "55.0"],
                        ["Milk fat, min, % (m/m), on dry matter basis", "30.0"],
                        ["Total ash, max, % (m/m)", "6.0"],
                        ["Titrable acidity (as % lactic acid), max, %", "0.9"]
                    ]
                }
            },
            cream: {
                title: "Standard for Cream and Malai",
                description: {
                    title: "Description",
                    list: [
                        "<b>Cream:</b> A fat-rich liquid product in the form of a fat-in-skimmed milk emulsion, obtained by physical separation from cow or buffalo milk or a mixture thereof.",
                        "<b>Malai:</b> A fat-rich product prepared by heating milk and then cooling it, characterized by the presence of an insoluble mass, mainly fat and denatured protein."
                    ]
                },
                composition: {
                    title: "Compositional Specifications",
                    p1: "The product shall contain not less than 10.0% (m/m) of milk fat. Except for fermented and acidified cream, the acidity of the final product shall not be more than 0.15% (as lactic acid)."
                },
                labeling: {
                    title: "Labelling",
                    p1: "The name of the food shall be specified, and the fat content shall be mentioned (e.g., \"Low-fat cream,\" \"Medium-fat cream,\" \"High-fat cream\")."
                }
            },
            fatProducts: {
                title: "Standard for Milk Fat Products",
                description: { title: "Description", p1: "Fat-rich products obtained exclusively from milk by processes which result in the almost total removal of water and milk solids-not-fat." },
                composition: {
                    title: "Compositional Requirements",
                    headers: ["Parameter", "Milk Fat, Butter Oil", "Anhydrous Milk Fat, Anhydrous Butter Oil", "Ghee"],
                    rows: [
                        ["Moisture, max, % (m/m)", "0.4", "0.1", "0.5"],
                        ["Milk fat, min, % (m/m)", "99.6", "99.8", "99.5"],
                        ["Butyro-refractometer Reading at 40°C", "40.0 to 44.0", "40.0 to 44.0", "40.0 to 44.0"],
                        ["Reichert Meissl Value, min", "24.0", "24.0", "24.0"],
                        ["FFA as Oleic Acid, max %", "0.4", "0.3", "2.0"],
                        ["Baudouin Test", "Negative", "Negative", "Negative"],
                        ["Iodine Value", "-", "-", "25-38"],
                        ["Saponification value", "-", "-", "205-235"],
                        ["Presence of beta-sitosterol", "Absent", "Absent", "Absent"]
                    ]
                },
                fattyAcid: {
                    title: "Fatty Acid Composition of Ghee",
                    headers: ["Type of Fatty Acid", "Fatty Acid Composition (%)"],
                    rows: [
                        ["C4:0, Butyric acid", "1-5"],
                        ["C6:0, Hexanoic acid", "0.5-2.2"],
                        ["C16:0, Hexadecanoic acid", "22-38"],
                        ["C18:0, Octadecanoic acid", "8-19"],
                        ["C18:1 (cis 9) 9-Octadecenoic acid (Oleic acid)", "19-32"]
                    ]
                },
                note: "Method of determination for detection of adulteration of ghee with vegetable oil by RP-HPLC as notified by FSSAI office order: File No. 1-90/FSSAI/SP (MS&A)/2009 dated 25th March, 2019."
            },
             butter: {
                title: "Standard for Butter",
                definition: { title: "Definition", p1: "Butter is a fatty product, principally in the form of a water-in-oil emulsion, derived exclusively from milk or milk products. It can be of two types: Table butter and White butter/Cooking butter." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Table butter", "White butter / Cooking butter"],
                    rows: [
                        ["Moisture, max, % (m/m)", "16.0", "-"],
                        ["Milk fat, min, % (m/m)", "80.0", "76.0"],
                        ["Milk solids-not-fat, max, % (m/m)", "2.0", "-"],
                        ["Common salt, max, % (m/m)", "3.0", "-"]
                    ]
                },
                note: "Fat extracted from butter shall conform to the Reichert Meissl value and Butyro-refractometer reading for Ghee."
            },
            milkPowders: {
                title: "Standard for Milk Powders and Cream Powder",
                description: { title: "Description", p1: "Milk powders and cream powder are milk products obtained by partial removal of water from milk or cream, resulting in a powdered form." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Whole Milk Powder", "Partly Skimmed Milk Powder", "Skimmed Milk Powder", "Cream Powder"],
                    rows: [
                        ["Moisture*, max, % (m/m)", "5.0", "5.0", "5.0", "5.0"],
                        ["Milk fat, % (m/m)", "Min 26.0", ">1.5 and <26.0", "1.5 (max)", "42.0 (min)"],
                        ["Milk protein in milk solids-not-fat, min, % (m/m)", "34.0", "34.0", "34.0", "34.0"],
                        ["Insolubility Index, max, ml", "2.0", "2.0", "2.0", "-"]
                    ]
                },
                note: "The moisture content does not include water of crystallization of lactose. The protein content is derived by determining total nitrogen and multiplying by a factor of 6.38."
            },
            fermented: {
                title: "Standard for Fermented Milk Products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Fermented Milk:</b> Obtained by fermentation of milk by microorganisms, resulting in a reduction of pH. Includes Dahi and Yoghurt.",
                        "<b>Chakka:</b> A fermented and concentrated milk product obtained from Dahi or Yoghurt by partial removal of whey.",
                        "<b>Shrikhand:</b> A semi-soft concentrated composite milk product obtained from Chakka, with added milk fat and sugar."
                    ]
                },
                yoghurt: {
                    title: "Compositional Specifications (Yoghurt and Flavoured Dahi)",
                    headers: ["Parameter", "Yoghurt and Flavoured Dahi", "Partly skimmed Yoghurt / Flavoured Partly Skimmed Dahi", "Skimmed Yoghurt / Flavoured Skimmed Dahi"],
                    rows: [
                        ["Milk Fat, % (m/m)", "not less than 3.0 and not more than 15", "more than 0.5 and less than 3.0", "0.5 (max)"],
                        ["Milk solids-not-fat, min, % (m/m)", "8.5", "8.5", "8.5"]
                    ]
                },
                chakka: {
                    title: "Compositional Specifications (Chakka)",
                    headers: ["Parameter", "Chakka", "Skimmed Milk Chakka", "Full Cream Chakka"],
                    rows: [
                        ["Total solids, min, % (m/m)", "30.0", "20.0", "28.0"],
                        ["Milk fat, % (m/m), on dry basis", "33.0 (min)", "5.0 (max)", "38.0 (min)"]
                    ]
                }
            },
            iceCream: {
                title: "Standard for Ice Cream, Kulfi, etc.",
                description: { title: "Description", p1: "Frozen milk products obtained by freezing a pasteurized mix prepared from milk or other milk-products with sweeteners and other permitted non-dairy ingredients." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Ice cream or Kulfi", "Medium Fat Ice Cream or Kulfi", "Low Fat Ice Cream or Kulfi"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "36.0", "30.0", "26.0"],
                        ["Weight, min, g/l", "525.0", "475.0", "475.0"],
                        ["Milk Fat, % (m/m)", "10.0 (min)", "more than 2.5 and less than 10.0", "2.5 (max)"],
                        ["Milk Protein, min, % (m/m)", "3.5", "3.5", "3.0"]
                    ]
                },
                milkIce: {
                    title: "Milk Ice or Milk Lolly",
                    headers: ["Parameter", "Requirement"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "20.0"],
                        ["Milk Fat, max, % (m/m)", "2.0"],
                        ["Milk Protein, min, % (m/m)", "3.5"]
                    ]
                },
                note: "The protein content is derived by determining total nitrogen and multiplying by a factor of 6.38."
            },
            chhanaPaneer: {
                title: "Standard for Chhana and Paneer",
                definition: { title: "Definition", p1: "Chhana or Paneer is the product obtained from any variety of milk by precipitation with permitted acids and heat." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Chhana or Paneer", "Medium fat Chhana or Paneer", "Low fat Chhana or Paneer"],
                    rows: [
                        ["Moisture, max, % (m/m)", "65.0 (for Chhana) / 60.0 (for Paneer)", "65.0 (for Chhana) / 60.0 (for Paneer)", "70.0 (for Chhana) / 70.0 (for Paneer)"],
                        ["Milk fat, % (m/m), on dry basis", "50.0 (min)", "more than 20.0 and less than 50.0", "20.0 (max)"]
                    ]
                },
                labeling: {
                    title: "Labelling",
                    p1: "The name shall be declared according to the composition. \"Low Fat\" or \"Medium Fat\" products shall be sold in a sealed package with appropriate declarations."
                }
            },
            cheese: {
                title: "Standard for Cheese and Cheese Products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Cheese:</b> A ripened or unripened product obtained by coagulation of milk protein.",
                        "<b>Processed Cheese:</b> Obtained by grinding, mixing, melting, and emulsifying one or more varieties of cheese, with the aid of heat and emulsifying agents."
                    ]
                },
                composition: {
                    title: "Compositional Requirements (Examples)",
                    headers: ["Product", "Moisture, Max, % (m/m)", "Milk fat, Min, % (on dry basis)"],
                    rows: [
                        ["Hard-Pressed Cheese", "39.0", "48.0"],
                        ["Cheddar Cheese", "39.0", "48.0"],
                        ["Mozzarella Cheese", "60.0", "35.0"],
                        ["Processed Cheese", "47.0", "40.0"],
                        ["Processed Cheese Spread", "60.0", "40.0"]
                    ]
                },
                labeling: {
                    title: "Labelling",
                    p1: "The name of the food product shall be 'cheese' or an established variety name. Special declarations are required for surface-treated cheese (e.g., \"SURFACE TREATED WITH NATAMYCIN\")."
                }
            },
            casein: {
                title: "Standard for Edible Casein Products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Edible Acid Casein:</b> The product obtained by separating, washing, and drying the acid-precipitated coagulum of skimmed milk.",
                        "<b>Edible Rennet Casein:</b> The product obtained after washing and drying the coagulum remaining after separating the whey from skimmed milk coagulated by non-animal rennet.",
                        "<b>Edible Caseinate:</b> The dry product obtained after drying the reaction of edible casein or casein curd coagulum with food-grade neutralizing agents."
                    ]
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Edible Acid Casein", "Edible Rennet Casein", "Edible Caseinate"],
                    rows: [
                        ["Moisture, max, % (m/m)", "12.0", "12.0", "8.0"],
                        ["Milk fat, max, % (m/m)", "2.0", "2.0", "2.0"],
                        ["Milk protein, min, % (m/m), on dry basis", "90.0", "84.0", "88.0"],
                        ["Casein in protein, min, % (m/m)", "95.0", "95.0", "95.0"],
                        ["Lactose, max, % (m/m)", "1.0", "1.0", "1.0"],
                        ["Total ash including P2O5, % (m/m)", "2.5 (max)", "7.5 (min)", "-"]
                    ]
                },
                note: "The protein content is derived by determining total nitrogen and multiplying by a factor of 6.38. The lactose content is expressed as anhydrous lactose."
            },
            lactose: {
                title: "Standards for Edible Lactose",
                description: { title: "Description", p1: "Lactose is a white to slightly yellow crystalline, slightly sweet disaccharide sugar found in milk." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameters", "Limits"],
                    rows: [
                        ["Total moisture, max, % (m/m)", "6.0"],
                        ["Lactose, min, % (m/m) on dry basis", "99.0"],
                        ["Sulphated ash, max, % (m/m)", "0.3"]
                    ]
                }
            },
            wheyProtein: {
                title: "Whey Protein Concentrate",
                description: { title: "Description", p1: "A product obtained by removing non-protein constituents from whey by physical separation techniques, followed by drying." },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameters", "Limits"],
                    rows: [
                        ["Moisture, max, % (m/m)", "6.0"],
                        ["Milk Protein, min, % (m/m)", "35.0"],
                        ["Milk Fat, max, % (m/m)", "10"],
                        ["Scorched particles, max", "Disc B (15 mg)"]
                    ]
                },
                note: "The protein content is derived by determining total nitrogen and multiplying by a factor of 6.38."
            },
            colostrum: {
                title: "Standards for Cow or Buffalo Colostrum and Colostrum products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Colostrum:</b> The lacteal secretion obtained from the mammary glands of a cow or buffalo for three to five days after parturition.",
                        "<b>Colostrum-based product:</b> Processed products made from colostrum.",
                        "<b>Colostrum powder:</b> A colostrum-based product obtained by drying colostrum."
                    ]
                },
                compositionColostrum: {
                    title: "Compositional Specifications (Colostrum)",
                    headers: ["Parameters", "Requirements"],
                    rows: [
                        ["Moisture, max, % (m/m)", "80.0"],
                        ["Protein, min, % (m/m)", "7.0"],
                        ["Fat, min, % (m/m)", "4.0"],
                        ["Immunoglobulins, min, % (m/m)", "1.8"],
                        ["Lactoferrin, min, % (m/m)", "0.2"]
                    ]
                },
                compositionPowder: {
                    title: "Compositional Specifications (Colostrum Powder)",
                    headers: ["Parameters", "Requirements"],
                    rows: [
                        ["Moisture, max, % (m/m)", "4.0"],
                        ["Protein, min, % (m/m)", "40.0"],
                        ["Fat, min, % (m/m)", "17.5"],
                        ["Immunoglobulins, min, % (m/m)", "12.5"],
                        ["Lactoferrin, min, % (m/m)", "1.2"]
                    ]
                },
                note: "The protein content is derived by determining total nitrogen and multiplying by a factor of 6.38."
            }
        }
    }
}
