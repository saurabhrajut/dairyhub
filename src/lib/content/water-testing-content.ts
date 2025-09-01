

export const waterTestingContent = {
    hi: {
        title: "जल परीक्षण गाइड",
        description: "जल की गुणवत्ता की जांच के लिए सामान्य मापदंडों, उनकी सरलीकृत प्रक्रियाओं और गणना विधियों के लिए एक गाइड।",
        backToTopics: "विषयों पर वापस जाएं",
        important_note: {
            title: "महत्वपूर्ण नोट:",
            text: "हमेशा सुरक्षा नियमों का पालन करें और लैब में काम करते समय उचित सुरक्षात्मक उपकरण (PPE) पहनें। सटीक परिणामों के लिए, प्रमाणित प्रयोगशालाओं और मानक विधियों का पालन करना बेहतर है।"
        },
        tests: [
            {
                id: 'alkalinity',
                title: 'Alkalinity (क्षारीयता)',
                intro: 'क्षारीयता पानी की अम्ल को उदासीन करने की क्षमता को मापती है। यह मुख्य रूप से बाइकार्बोनेट, कार्बोनेट और हाइड्रॉक्साइड आयनों के कारण होती है।',
                procedure: [
                    'एक साफ शंक्वाकार फ्लास्क में पानी के नमूने का एक निश्चित आयतन (जैसे 100 एमएल) लें।',
                    '2-3 बूंदें <strong>फेनोल्फथेलिन इंडिकेटर</strong> डालें। यदि घोल गुलाबी हो जाता है, तो मानक अम्ल घोल (जैसे <strong>0.02 N H₂SO₄</strong>) से तब तक अनुमापन करें जब तक कि गुलाबी रंग गायब न हो जाए। अम्ल का आयतन (P) नोट करें।',
                    'उसी घोल में 2-3 बूंदें <strong>मिथाइल ऑरेंज या ब्रोमोक्रेसोल ग्रीन इंडिकेटर</strong> डालें।',
                    'मानक अम्ल घोल से अनुमापन जारी रखें जब तक कि रंग पीले से नारंगी/लाल न हो जाए। उपयोग किए गए अम्ल का कुल आयतन (T) नोट करें।',
                ],
                calculation: `Phenolphthalein Alkalinity (mg/L CaCO₃ के रूप में) = (P &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)<br/>
                              Total Alkalinity (mg/L CaCO₃ के रूप में) = (T &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)`
            },
            {
                id: 'aluminum',
                title: 'Aluminum (एल्यूमीनियम)',
                intro: 'Eriochrome Cyanine R विधि का उपयोग करके एल्यूमीनियम का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                procedure: [
                    '<h4>उपकरण:</h4> 535 nm पर उपयोग के लिए स्पेक्ट्रोफोटोमीटर।',
                    '<h4>अभिकर्मक:</h4> स्टॉक एल्यूमीनियम समाधान, मानक एल्यूमीनियम समाधान, सल्फ्यूरिक एसिड (0.02N और 6N), एस्कॉर्बिक एसिड समाधान, बफर अभिकर्मक, डाई अभिकर्मक (Eriochrome Cyanine R)।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>0 से 7 µg एल्यूमीनियम वाले मानकों की एक श्रृंखला तैयार करें।</li>',
                    '<li>प्रत्येक मानक और नमूने में 1 एमएल 0.02N H₂SO₄, 1 एमएल एस्कॉर्बिक एसिड, 10 एमएल बफर, और 5 एमएल वर्किंग डाई अभिकर्मक डालें।</li>',
                    '<li>कुल आयतन 50 एमएल करें और 5-15 मिनट के भीतर 535 nm पर अवशोषण पढ़ें।</li>',
                    '<li>कैलिब्रेशन वक्र से नमूना सांद्रता निर्धारित करें।</li>',
                    '</ol>'
                ],
                calculation: 'कैलिब्रेशन वक्र से एल्यूमीनियम सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'यह परीक्षण 27°C पर 3 दिनों के लिए बोतल ऊष्मायन विधि पर आधारित है।',
                procedure: [
                  '<h4>उपकरण (Apparatus)</h4><ul class="list-disc list-outside pl-5"><li>300 mL की BOD बोतलें।</li><li>27 ± 1 °C पर थर्मोस्टेटिक रूप से नियंत्रित एयर इनक्यूबेटर या वॉटर बाथ।</li></ul>',
                  '<h4>अभिकर्मक (Reagents)</h4><ul class="list-disc list-outside pl-5"><li>फॉस्फेट बफर घोल।</li><li>मैग्नीशियम सल्फेट घोल।</li><li>कैल्शियम क्लोराइड घोल।</li><li>फेरिक क्लोराइड घोल।</li><li>तनुकरण जल (Dilution water): 1 लीटर आसुत जल में 1 mL प्रत्येक फॉस्फेट बफर, MgSO₄, CaCl₂, और FeCl₃ घोल डालें।</li></ul>',
                  '<h4>प्रक्रिया (Procedure)</h4><ol class="list-decimal list-outside pl-5"><li>आवश्यक मात्रा में तनुकरण जल तैयार करें, तापमान 27°C पर लाएं और हवा से संतृप्त करें।</li><li>आवश्यकतानुसार तनुकरण जल को सीड करें (औद्योगिक अपशिष्ट के लिए)।</li><li>नमूने का तनुकरण करें ताकि 3 दिनों के ऊष्मायन के बाद कम से कम 1 mg/L की अवशिष्ट DO और कम से कम 2 mg/L की DO खपत हो।</li><li>तीन BOD बोतलें भरें। एक बोतल में प्रारंभिक DO (D₀) का निर्धारण करें। अन्य दो को 27°C पर 3 दिनों के लिए ऊष्मायन करें।</li><li>3 दिनों के बाद अंतिम DO (D₃) का निर्धारण करें।</li><li>एक तनुकरण जल रिक्त (dilution water blank) और एक बीज नियंत्रण (seed control) भी चलाएं।</li></ol>',
                ],
                calculation: `
                  <p><strong>जब तनुकरण जल सीड नहीं किया गया हो:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = (D₀ - D₃) / P</code>
                  <p class="mt-4"><strong>जब तनुकरण जल सीड किया गया हो:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = [ (D₀ - D₃) - f &times; (B₀ - B₃) ] / P</code>
                  <p class="text-xs mt-2">जहाँ: D₀=प्रारंभिक DO, D₃=3 दिन बाद DO, P=नमूने का दशमलव भिन्न, B₀=बीज नियंत्रण का प्रारंभिक DO, B₃=बीज नियंत्रण का अंतिम DO, f=बीज का अनुपात।</p>
                `
            },
            {
                id: 'boron',
                title: 'Boron (बोरॉन)',
                intro: 'Curcumin विधि का उपयोग करके बोरॉन का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                procedure: [
                    '<h4>उपकरण:</h4> 540 nm पर उपयोग के लिए स्पेक्ट्रोफोटोमीटर, 55°C पर वॉटर बाथ।',
                    '<h4>अभिकर्मक:</h4> स्टॉक बोरॉन समाधान, मानक बोरॉन समाधान, Curcumin अभिकर्मक, एथिल अल्कोहल।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>मानकों और नमूनों की वाष्पीकरण डिश में 4 एमएल Curcumin अभिकर्मक डालें।</li>',
                    '<li>55°C पर 80 मिनट के लिए वॉटर बाथ पर गरम करें जब तक कि यह सूख न जाए।</li>',
                    '<li>ठंडा करें, 10 एमएल एथिल अल्कोहल में अवशेष घोलें।</li>',
                    '<li>540 nm पर अवशोषण पढ़ें और कैलिब्रेशन वक्र का उपयोग करके सांद्रता निर्धारित करें।</li>',
                    '</ol>'
                ],
                calculation: 'कैलिब्रेशन वक्र से बोरॉन सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'calcium',
                title: 'Calcium (कैल्शियम)',
                intro: 'EDTA अनुमापन विधि का उपयोग करके कैल्शियम का निर्धारण।',
                procedure: [
                    '<h4>अभिकर्मक:</h4> NaOH (1N), Murexide इंडिकेटर, मानक EDTA घोल (0.01M)।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>50 mL नमूना लें, pH को 12-13 पर समायोजित करने के लिए 2 mL NaOH डालें।</li>',
                    '<li>0.1-0.2 ग्राम Murexide इंडिकेटर डालें।</li>',
                    '<li>EDTA घोल से तब तक अनुमापन करें जब तक कि रंग गुलाबी से बैंगनी न हो जाए।</li>',
                    '</ol>'
                ],
                calculation: 'कैल्शियम (mg/L) = (A &times; B &times; 400.8) / नमूने का आयतन (एमएल)<br/> <p class="text-xs mt-2">जहाँ A = नमूने के लिए अनुमापक का एमएल, B = 1 एमएल EDTA के बराबर CaCO₃ का मिलीग्राम।</p>'
            },
            {
                id: 'chloride',
                title: 'Chloride (क्लोराइड)',
                intro: 'क्लोराइड आयन पानी में स्वाभाविक रूप से मौजूद होते हैं लेकिन उच्च सांद्रता औद्योगिक कचरे या सीवेज से प्रदूषण का संकेत दे सकती है। इसका परीक्षण मोहर की विधि से किया जाता है।',
                procedure: [
                    'एक शंक्वाकार फ्लास्क में पानी का नमूना (जैसे 50 एमएल) लें।',
                    'पीएच को 7 से 10 के बीच समायोजित करें।',
                    '1 एमएल <strong>पोटेशियम क्रोमेट इंडिकेटर</strong> डालें।',
                    'मानक <strong>सिल्वर नाइट्रेट (AgNO₃)</strong> घोल से तब तक अनुमापन करें जब तक कि एक स्थायी लाल-भूरा अवक्षेप न बन जाए। आयतन (V_sample) नोट करें।',
                    'आसुत जल के साथ एक रिक्त अनुमापन भी करें (V_blank)।',
                ],
                calculation: 'क्लोराइड (mg/L) = [ (V_sample - V_blank) &times; AgNO₃ की N &times; 35.45 &times; 1000 ] / नमूने का आयतन (एमएल)'
            },
             {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD कार्बनिक और अकार्बनिक दोनों प्रदूषकों को एक मजबूत रासायनिक ऑक्सीकारक (पोटेशियम डाइक्रोमेट) से ऑक्सीकृत करने के लिए आवश्यक ऑक्सीजन की कुल मात्रा को मापता है। यह BOD से अधिक तेजी से परिणाम देता है।',
                procedure: [
                    'नमूने को एक पाचन फ्लास्क में लें।',
                    'उसमें <strong>पोटेशियम डाइक्रोमेट घोल</strong> और <strong>सल्फ्यूरिक एसिड अभिकर्मक</strong> (सिल्वर सल्फेट के साथ) डालें।',
                    'नमूने को COD रिएक्टर में 150°C पर 2 घंटे के लिए रिफ्लक्स (पचाएं) करें।',
                    'ठंडा होने के बाद, बचे हुए अप्रतिक्रियाशील डाइक्रोमेट को मानक <strong>फेरस अमोनियम सल्फेट (FAS)</strong> घोल से अनुमापित करें। आयतन (V_sample) नोट करें।',
                    'एक रिक्त अनुमापन (बिना नमूने के) भी करें (V_blank)।',
                ],
                calculation: 'COD (mg/L) = [ (V_blank - V_sample) &times; FAS की नॉर्मलता &times; 8000 ] / नमूने का आयतन (एमएल)'
            },
            {
                id: 'coliforms',
                title: 'Coliforms (Total & Faecal)',
                intro: 'एकाधिक ट्यूब किण्वन तकनीक का उपयोग करके कोलीफॉर्म बैक्टीरिया का निर्धारण।',
                procedure: [
                    '<h4>अभिकर्मक:</h4> लॉरिल ट्रिप्टोज ब्रोथ (संभावित परीक्षण के लिए), ब्रिलियंट ग्रीन लैक्टोज बाइल ब्रोथ (पुष्टिकरण परीक्षण के लिए), EC माध्यम (मल कोलीफॉर्म के लिए)।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li><strong>संभावित परीक्षण:</strong> नमूने के विभिन्न मात्राओं (जैसे 10, 1, 0.1 mL) को लॉरिल ट्रिप्टोज ब्रोथ ट्यूबों में टीका लगाएं। 35°C पर 48 घंटे के लिए ऊष्मायन करें। गैस उत्पादन एक सकारात्मक परीक्षण है।</li>',
                    '<li><strong>पुष्टिकरण परीक्षण:</strong> सकारात्मक संभावित ट्यूबों से एक लूपफुल को ब्रिलियंट ग्रीन ब्रोथ में स्थानांतरित करें। 35°C पर 48 घंटे के लिए ऊष्मायन करें। गैस उत्पादन कुल कोलीफॉर्म की पुष्टि करता है।</li>',
                    '<li><strong>मल कोलीफॉर्म परीक्षण:</strong> सकारात्मक संभावित ट्यूबों से एक लूपफुल को EC माध्यम में स्थानांतरित करें। 44.5°C पर 24 घंटे के लिए ऊष्मायन करें। गैस उत्पादन मल कोलीफॉर्म की उपस्थिति को इंगित करता है।</li>',
                    '</ol>'
                ],
                calculation: 'MPN तालिकाओं का उपयोग करके सकारात्मक ट्यूबों के संयोजन से सबसे संभावित संख्या (MPN) प्रति 100 एमएल निर्धारित करें।'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'घुलित ऑक्सीजन जलीय जीवन के लिए आवश्यक है और पानी की गुणवत्ता का एक प्रमुख संकेतक है। इसका परीक्षण विंकलर विधि से किया जाता है।',
                procedure: [
                    'एक 300 एमएल BOD बोतल को ध्यान से पानी से भरें, हवा के बुलबुले न आने दें।',
                    '2 एमएल <strong>मैंगनीज सल्फेट घोल</strong>, फिर 2 एमएल <strong>क्षार-आयोडाइड-एजाइड अभिकर्मक</strong> डालें। बोतल बंद करके मिलाएं।',
                    'बने हुए अवक्षेप को व्यवस्थित होने दें।',
                    '2 एमएल <strong>सांद्र सल्फ्यूरिक एसिड</strong> डालें और पूरी तरह घुलने तक मिलाएं।',
                    'एक निश्चित आयतन (जैसे 200 एमएल) को मानक <strong>सोडियम थायोसल्फेट (0.025N)</strong> से तब तक अनुमापित करें जब तक कि हल्का पुआल रंग न रह जाए।',
                    '1-2 एमएल <strong>स्टार्च इंडिकेटर</strong> डालें (घोल नीला हो जाएगा)।',
                    'अनुमापन जारी रखें जब तक कि नीला रंग पूरी तरह गायब न हो जाए। आयतन (V) नोट करें।',
                ],
                calculation: 'DO (mg/L) = (अनुमापक का V &times; अनुमापक की N &times; 8 &times; 1000) / अनुमापित नमूने का आयतन (एमएल)'
            },
            {
                id: 'hardness',
                title: 'Total Hardness (कुल कठोरता)',
                intro: 'पानी की कठोरता मुख्य रूप से कैल्शियम और मैग्नीशियम आयनों के कारण होती है। इसका परीक्षण EDTA अनुमापन विधि से किया जाता है।',
                procedure: [
                    'एक शंक्वाकार फ्लास्क में पानी का नमूना (जैसे 50 एमएल) लें।',
                    '1-2 एमएल <strong>अमोनिया बफर घोल</strong> डालकर पीएच को 10 पर सेट करें।',
                    'एक चुटकी <strong>एरियोक्रोम ब्लैक टी (EBT) इंडिकेटर</strong> डालें (घोल वाइन रेड हो जाएगा)।',
                    'मानक <strong>EDTA घोल (0.01M)</strong> से तब तक अनुमापन करें जब तक कि वाइन रेड रंग आसमानी नीले में न बदल जाए। आयतन (V) नोट करें।',
                ],
                calculation: 'कुल कठोरता (mg/L CaCO₃ के रूप में) = (EDTA का V &times; EDTA की मोलरता &times; 100.086 &times; 1000) / नमूने का आयतन (एमएल)'
            },
            {
                id: 'nitrate',
                title: 'Nitrate Nitrogen (नाइट्रेट नाइट्रोजन)',
                intro: 'UV स्पेक्ट्रोफोटोमेट्रिक स्क्रीनिंग विधि का उपयोग करके नाइट्रेट का निर्धारण।',
                procedure: [
                    '<h4>उपकरण:</h4> 220 nm और 275 nm पर उपयोग के लिए UV स्पेक्ट्रोफोटोमीटर।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>50 mL नमूने में 1 mL 1N HCl डालें।</li>',
                    '<li>220 nm पर अवशोषण पढ़ें (नाइट्रेट के लिए) और 275 nm पर (जैविक पदार्थ के हस्तक्षेप के लिए)।</li>',
                    '<li>नाइट्रेट के कारण सही अवशोषण की गणना करें: A_corrected = A₂₂₀ - 2 &times; A₂₇₅।</li>',
                    '<li>कैलिब्रेशन वक्र से सांद्रता निर्धारित करें।</li>',
                    '</ol>'
                ],
                calculation: 'कैलिब्रेशन वक्र से नाइट्रेट नाइट्रोजन सांद्रता (mg N/L) पढ़ें।'
            },
            {
                id: 'phosphorus',
                title: 'Phosphorus (फॉस्फोरस)',
                intro: 'एस्कॉर्बिक एसिड विधि का उपयोग करके ऑर्थोफॉस्फेट का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                procedure: [
                    '<h4>उपकरण:</h4> 880 nm पर उपयोग के लिए स्पेक्ट्रोफोटोमीटर।',
                    '<h4>अभिकर्मक:</h4> संयुक्त अभिकर्मक (अमोनियम मोलिब्डेट, पोटेशियम एंटिमोनिल टार्ट्रेट, एस्कॉर्बिक एसिड, सल्फ्यूरिक एसिड)।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>50 mL नमूने में 8 mL संयुक्त अभिकर्मक डालें।</li>',
                    '<li>10 से 30 मिनट तक प्रतीक्षा करें।</li>',
                    '<li>880 nm पर अवशोषण पढ़ें।</li>',
                    '</ol>'
                ],
                calculation: 'कैलिब्रेशन वक्र से फॉस्फोरस सांद्रता (mg P/L) पढ़ें।'
            },
            {
                id: 'sulphate',
                title: 'Sulphate (सल्फेट)',
                intro: 'नेफेलोमेट्रिक विधि का उपयोग करके सल्फेट का निर्धारण।',
                procedure: [
                    '<h4>उपकरण:</h4> नेफेलोमेट्रिक टर्बिडिटी मीटर या 420 nm पर स्पेक्ट्रोफोटोमीटर।',
                    '<h4>अभिकर्मक:</h4> बफर घोल, बेरियम क्लोराइड (BaCl₂) क्रिस्टल।',
                    '<h4>प्रक्रिया:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>100 mL नमूने में 20 mL बफर डालें।</li>',
                    '<li>हिलाते समय BaCl₂ क्रिस्टल का एक चम्मच डालें। 60 सेकंड के लिए हिलाएं।</li>',
                    '<li>5 मिनट के बाद टर्बिडिटी मापें।</li>',
                    '</ol>'
                ],
                calculation: 'कैलिब्रेशन वक्र से सल्फेट सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS पानी में घुले हुए सभी कार्बनिक और अकार्बनिक ठोस पदार्थों की कुल मात्रा है। इसका परीक्षण ग्रेविमेट्रिक विधि से होता है।',
                procedure: [
                    'एक साफ, सूखा और पहले से तौला हुआ बीकर (W₁) लें।',
                    'एक निश्चित आयतन (जैसे 100 एमएल) फ़िल्टर किए हुए पानी को बीकर में लें।',
                    'बीकर को हॉट प्लेट या पानी के स्नान पर रखें ताकि पानी पूरी तरह वाष्पित हो जाए।',
                    'बीकर को 180°C पर हॉट एयर ओवन में 1 घंटे के लिए रखें।',
                    'बीकर को डेसिकेटर में ठंडा करके दोबारा तौलें (W₂)।',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) मिलीग्राम में &times; 1000 ] / नमूने का आयतन (एमएल)'
            },
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS पानी में निलंबित ठोस कणों का माप है जो एक फिल्टर पेपर पर रह जाते हैं।',
                procedure: [
                    'एक पहले से तौले हुए ग्लास फाइबर फिल्टर पेपर (W₁) से पानी का एक निश्चित आयतन फ़िल्टर करें।',
                    'फिल्टर पेपर को ठोस पदार्थों के साथ 103-105°C पर हॉट एयर ओवन में 1 घंटे के लिए सुखाएं।',
                    'डेसिकेटर में ठंडा करके दोबारा तौलें (W₂)।',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) मिलीग्राम में &times; 1000 ] / नमूने का आयतन (एमएल)'
            }
        ]
    },
    en: {
        title: "Water Testing Guide",
        description: "A guide to common parameters for checking water quality, their simplified procedures, and calculation methods.",
        backToTopics: "Back to Topics",
        important_note: {
            title: "Important Note:",
            text: "Always follow safety rules and wear appropriate protective gear (PPE) when working in the lab. For accurate results, it is better to follow certified labs and standard methods."
        },
        tests: [
            {
                id: 'alkalinity',
                title: 'Alkalinity',
                intro: 'Alkalinity measures the capacity of water to neutralize acids. It is mainly due to bicarbonate, carbonate, and hydroxide ions.',
                procedure: [
                    'Take a fixed volume of water sample (e.g., 100 mL) in a clean conical flask.',
                    'Add 2-3 drops of <strong>phenolphthalein indicator</strong>. If the solution turns pink, titrate with a standard acid solution (e.g., <strong>0.02 N H₂SO₄</strong>) until the pink color disappears. Note the volume of acid (P).',
                    'Add 2-3 drops of <strong>methyl orange or bromocresol green indicator</strong> to the same solution.',
                    'Continue titrating with the standard acid solution until the color changes from yellow to orange/red. Note the total volume of acid used (T).',
                ],
                calculation: 'Phenolphthalein Alkalinity (mg/L as CaCO₃) = (P &times; Normality of Acid &times; 50000) / Volume of Sample (mL)<br/>Total Alkalinity (mg/L as CaCO₃) = (T &times; Normality of Acid &times; 50000) / Volume of Sample (mL)'
            },
            {
                id: 'aluminum',
                title: 'Aluminum',
                intro: 'Spectrophotometric determination of aluminum using Eriochrome Cyanine R method.',
                procedure: [
                    '<h4>Apparatus:</h4> Spectrophotometer for use at 535 nm.',
                    '<h4>Reagents:</h4> Stock aluminum solution, Standard aluminum solution, Sulfuric acid (0.02N and 6N), Ascorbic acid solution, Buffer reagent, Dye reagent (Eriochrome Cyanine R).',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Prepare a series of standards containing 0 to 7 µg of aluminum.</li>',
                    '<li>To each standard and sample, add 1 mL 0.02N H₂SO₄, 1 mL ascorbic acid, 10 mL buffer, and 5 mL working dye reagent.</li>',
                    '<li>Make up total volume to 50 mL and read absorbance at 535 nm within 5-15 minutes.</li>',
                    '<li>Determine sample concentration from the calibration curve.</li>',
                    '</ol>'
                ],
                calculation: 'Read aluminum concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'This test is based on the bottle incubation method for 3 days at 27°C.',
                procedure: [
                  '<h4>Apparatus</h4><ul class="list-disc list-outside pl-5"><li>BOD bottles, 300 mL.</li><li>Air incubator or water bath, thermostatically controlled at 27 ± 1 °C.</li></ul>',
                  '<h4>Reagents</h4><ul class="list-disc list-outside pl-5"><li>Phosphate buffer solution.</li><li>Magnesium sulphate solution.</li><li>Calcium chloride solution.</li><li>Ferric chloride solution.</li><li>Dilution water: Add 1 mL each of phosphate buffer, MgSO₄, CaCl₂, and FeCl₃ solutions per litre distilled water.</li></ul>',
                  '<h4>Procedure</h4><ol class="list-decimal list-outside pl-5"><li>Prepare required amount of dilution water, bring temperature to 27 °C and saturate with air.</li><li>Seed the dilution water if necessary (for industrial wastes).</li><li>Make several dilutions of the sample to get a residual DO of at least 1 mg/L and a DO uptake of at least 2 mg/L after 3 days.</li><li>Fill three BOD bottles. Determine initial DO (D₀) on one bottle. Incubate the other two at 27 °C for 3 days.</li><li>Determine final DO (D₃) after 3 days.</li><li>Also run a dilution water blank and a seed control.</li></ol>',
                ],
                calculation: `
                  <p><strong>When dilution water is not seeded:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = (D₀ - D₃) / P</code>
                  <p class="mt-4"><strong>When dilution water is seeded:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = [ (D₀ - D₃) - f &times; (B₀ - B₃) ] / P</code>
                  <p class="text-xs mt-2">where: D₀=initial DO, D₃=DO after 3 days, P=decimal volumetric fraction of sample, B₀=initial DO of seed, B₃=final DO of seed, f=ratio of seed.</p>
                `
            },
            {
                id: 'boron',
                title: 'Boron',
                intro: 'Spectrophotometric determination of boron using Curcumin method.',
                procedure: [
                    '<h4>Apparatus:</h4> Spectrophotometer for use at 540 nm, Water-bath at 55 °C.',
                    '<h4>Reagents:</h4> Stock boron solution, Standard boron solution, Curcumin reagent, Ethyl alcohol.',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>To standards and samples in evaporating dishes, add 4 mL of Curcumin reagent.</li>',
                    '<li>Heat on water bath at 55°C for 80 min until dry.</li>',
                    '<li>Cool, dissolve residue in 10 mL ethyl alcohol.</li>',
                    '<li>Read absorbance at 540 nm and determine concentration using calibration curve.</li>',
                    '</ol>'
                ],
                calculation: 'Read boron concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'calcium',
                title: 'Calcium',
                intro: 'Determination of calcium using the EDTA titrimetric method.',
                procedure: [
                    '<h4>Reagents:</h4> NaOH (1N), Murexide indicator, Standard EDTA titrant (0.01M).',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Take 50 mL sample, add 2 mL NaOH to produce pH of 12-13.</li>',
                    '<li>Add 0.1-0.2 g Murexide indicator.</li>',
                    '<li>Titrate with EDTA solution until color changes from pink to purple.</li>',
                    '</ol>'
                ],
                calculation: 'Calcium (mg/L) = (A &times; B &times; 400.8) / mL of sample<br/> <p class="text-xs mt-2">where A = mL of titrant for sample, B = mg CaCO₃ equivalent to 1 mL EDTA.</p>'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions are naturally present in water but high concentrations can indicate pollution from industrial wastes or sewage. The test is performed using Mohr\'s method.',
                procedure: [
                    'Take a water sample (e.g., 50 mL) in a conical flask.',
                    'Adjust the pH to between 7 and 10.',
                    'Add 1 mL of <strong>potassium chromate indicator</strong>.',
                    'Titrate with a standard <strong>silver nitrate (AgNO₃)</strong> solution until a persistent reddish-brown precipitate forms. Note the volume (V_sample).',
                    'Also, perform a blank titration with distilled water (V_blank).',
                ],
                calculation: 'Chloride (mg/L) = [ (V_sample - V_blank) &times; N of AgNO₃ &times; 35.45 &times; 1000 ] / Volume of Sample (mL)'
            },
             {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD measures the total amount of oxygen required to oxidize both organic and inorganic pollutants using a strong chemical oxidant (potassium dichromate). It provides faster results than BOD.',
                procedure: [
                    'Take the sample in a digestion flask.',
                    'Add <strong>potassium dichromate solution</strong> and a <strong>sulfuric acid reagent</strong> (containing silver sulfate).',
                    'Reflux (digest) the sample in a COD reactor at 150°C for 2 hours.',
                    'After cooling, titrate the excess unreacted dichromate with a standard <strong>Ferrous Ammonium Sulfate (FAS)</strong> solution. Note the volume (V_sample).',
                    'Also, perform a blank titration (without the sample) (V_blank).',
                ],
                calculation: 'COD (mg/L) = [ (V_blank - V_sample) &times; Normality of FAS &times; 8000 ] / Volume of Sample (mL)'
            },
            {
                id: 'coliforms',
                title: 'Coliforms (Total & Faecal)',
                intro: 'Determination of coliform bacteria using the Multiple Tube Fermentation technique.',
                procedure: [
                    '<h4>Reagents:</h4> Lauryl tryptose broth (for presumptive test), Brilliant green lactose bile broth (for confirmed test), EC medium (for faecal coliforms).',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li><strong>Presumptive Test:</strong> Inoculate various sample volumes (e.g., 10, 1, 0.1 mL) into lauryl tryptose broth tubes. Incubate at 35°C for 48 hours. Gas production is a positive test.</li>',
                    '<li><strong>Confirmed Test:</strong> Transfer a loopful from positive presumptive tubes to Brilliant Green broth. Incubate at 35°C for 48 hours. Gas production confirms total coliforms.</li>',
                    '<li><strong>Faecal Coliform Test:</strong> Transfer a loopful from positive presumptive tubes to EC medium. Incubate at 44.5°C for 24 hours. Gas production indicates the presence of faecal coliforms.</li>',
                    '</ol>'
                ],
                calculation: 'Determine the Most Probable Number (MPN) per 100 mL from the combination of positive tubes using MPN tables.'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen is essential for aquatic life and is a key indicator of water quality. It is tested using the Winkler method.',
                procedure: [
                    'Carefully fill a 300 mL BOD bottle with water, avoiding air bubbles.',
                    'Add 2 mL of <strong>manganese sulfate solution</strong>, then 2 mL of <strong>alkali-iodide-azide reagent</strong>. Stopper and mix.',
                    'Allow the precipitate to settle.',
                    'Add 2 mL of <strong>concentrated sulfuric acid</strong> and mix until completely dissolved.',
                    'Titrate a specific volume (e.g., 200 mL) with standard <strong>sodium thiosulfate (0.025N)</strong> until a pale straw color remains.',
                    'Add 1-2 mL of <strong>starch indicator</strong> (the solution will turn blue).',
                    'Continue titrating until the blue color disappears completely. Note the volume (V).',
                ],
                calculation: 'DO (mg/L) = (V of Titrant &times; N of Titrant &times; 8 &times; 1000) / Volume of Sample Titrated (mL)'
            },
            {
                id: 'hardness',
                title: 'Total Hardness',
                intro: 'Water hardness is mainly due to calcium and magnesium ions. It is tested using the EDTA titration method.',
                procedure: [
                    'Take a water sample (e.g., 50 mL) in a conical flask.',
                    'Add 1-2 mL of <strong>ammonia buffer solution</strong> to set the pH at 10.',
                    'Add a pinch of <strong>Eriochrome Black T (EBT) indicator</strong> (the solution will turn wine red).',
                    'Titrate with a standard <strong>EDTA solution (0.01M)</strong> until the wine red color changes to sky blue. Note the volume (V).',
                ],
                calculation: 'Total Hardness (mg/L as CaCO₃) = (V of EDTA &times; Molarity of EDTA &times; 100.086 &times; 1000) / Volume of Sample (mL)'
            },
            {
                id: 'nitrate',
                title: 'Nitrate Nitrogen',
                intro: 'Determination of nitrate using the UV spectrophotometric screening method.',
                procedure: [
                    '<h4>Apparatus:</h4> UV Spectrophotometer for use at 220 nm and 275 nm.',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Add 1 mL of 1N HCl to 50 mL of sample.</li>',
                    '<li>Read absorbance at 220 nm (for nitrate) and 275 nm (for dissolved organic matter interference).</li>',
                    '<li>Calculate corrected absorbance due to nitrate: A_corrected = A₂₂₀ - 2 &times; A₂₇₅.</li>',
                    '<li>Determine concentration from the calibration curve.</li>',
                    '</ol>'
                ],
                calculation: 'Read nitrate nitrogen concentration (mg N/L) from the calibration curve.'
            },
            {
                id: 'phosphorus',
                title: 'Phosphorus',
                intro: 'Spectrophotometric determination of orthophosphate using the ascorbic acid method.',
                procedure: [
                    '<h4>Apparatus:</h4> Spectrophotometer for use at 880 nm.',
                    '<h4>Reagents:</h4> Combined reagent (ammonium molybdate, potassium antimonyl tartrate, ascorbic acid, sulfuric acid).',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Add 8 mL of combined reagent to 50 mL of sample.</li>',
                    '<li>Wait for 10 to 30 minutes.</li>',
                    '<li>Read absorbance at 880 nm.</li>',
                    '</ol>'
                ],
                calculation: 'Read phosphorus concentration (mg P/L) from the calibration curve.'
            },
            {
                id: 'sulphate',
                title: 'Sulphate',
                intro: 'Determination of sulphate using the nephelometric method.',
                procedure: [
                    '<h4>Apparatus:</h4> Nephelometric turbidity meter or spectrophotometer at 420 nm.',
                    '<h4>Reagents:</h4> Buffer solution, Barium chloride (BaCl₂) crystals.',
                    '<h4>Procedure:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Add 20 mL of buffer to 100 mL of sample.</li>',
                    '<li>Add a spoonful of BaCl₂ crystals while stirring. Stir for 60 seconds.</li>',
                    '<li>Measure turbidity after 5 minutes.</li>',
                    '</ol>'
                ],
                calculation: 'Read sulphate concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS is the total amount of all dissolved organic and inorganic solids in water. It is tested using the gravimetric method.',
                procedure: [
                    'Take a clean, dry, pre-weighed beaker (W₁).',
                    'Place a known volume (e.g., 100 mL) of filtered water into the beaker.',
                    'Evaporate the water completely on a hot plate or water bath.',
                    'Dry the beaker in a hot air oven at 180°C for one hour.',
                    'Cool the beaker in a desiccator and weigh it again (W₂).',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS is a measure of solid particles that remain on a filter paper.',
                procedure: [
                    'Filter a known volume of water through a pre-weighed glass fiber filter paper (W₁).',
                    'Dry the filter paper with the retained solids in a hot air oven at 103-105°C for one hour.',
                    'Cool in a desiccator and weigh again (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            }
        ]
    }
}

