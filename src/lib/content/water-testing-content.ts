

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
                id: 'carbonate_bicarbonate',
                title: 'Carbonate & Bicarbonate',
                intro: 'कुल और फेनोल्फथेलिन क्षारीयता और पीएच मानों से गणना की जाती है।',
                procedure: [
                  'कुल क्षारीयता (Alk-T), फेनोल्फथेलिन क्षारीयता (Alk-P), और पीएच के लिए मान प्राप्त करें।',
                  'गणना के लिए नीचे दिए गए संबंधों का उपयोग करें।',
                ],
                calculation: `
                <p>जब TDS < 500 mg/L:</p>
                <code>HCO₃⁻ (mg/L) = [Alk-T - 5.0 x 10^(pH-10)] / [1 + 0.94 x 10^(pH-10)]</code><br/>
                <code>CO₃²⁻ (mg/L) = [0.94 x 10^(pH-10) x HCO₃⁻]</code>
                <p class="mt-4">जब TDS > 500 mg/L:</p>
                <p>कार्बोनेट (mg/L CaCO₃ के रूप में) = 2 &times; Alk-P</p>
                <p>बाइकार्बोनेट (mg/L CaCO₃ के रूप में) = Alk-T - (2 &times; Alk-P)</p>
                `
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
                id: 'chlorophyll_a',
                title: 'Chlorophyll-a',
                intro: 'एसीटोन निष्कर्षण स्पेक्ट्रोफोटोमेट्रिक विधि।',
                procedure: [
                  '<h4>उपकरण:</h4> 5 mL की नमूना क्षमता वाली ट्यूबों के साथ टर्नटेबल या रैक प्रकार का फ्लोरोमीटर।',
                  '<h4>अभिकर्मक:</h4> जलीय एसीटोन घोल (90% एसीटोन + 10% संतृप्त मैग्नीशियम कार्बोनेट घोल)।',
                  '<h4>प्रक्रिया:</h4>',
                  '<ol class="list-decimal list-outside pl-5">',
                  '<li>ग्लास फाइबर फिल्टर (GFF) का उपयोग करके नमूने को फ़िल्टर करें।</li>',
                  '<li>एक ऊतक ग्राइंडर में फिल्टर को 2-3 mL 90% जलीय एसीटोन घोल के साथ पीसें।</li>',
                  '<li>एक अपकेंद्रित्र ट्यूब में स्थानांतरित करें, 10 mL तक करें और 4°C पर 2 घंटे के लिए अंधेरे में रखें।</li>',
                  '<li>20 मिनट के लिए 500g पर अपकेंद्रित्र करें।</li>',
                  '<li>एक क्यूवेट में 3 mL स्पष्ट अर्क स्थानांतरित करें और 750 और 664 nm पर ऑप्टिकल घनत्व (OD) पढ़ें।</li>',
                  '<li>0.1N HCl के साथ अर्क को अम्लीकृत करें और 90 सेकंड के बाद 750 और 665 nm पर फिर से पढ़ें।</li>',
                  '</ol>'
                ],
                calculation: 'Chlorophyll-a (mg/m³) = [26.7 &times; (OD₆₆₄b - OD₆₆₅a) &times; V₁] / (V₂ &times; L)<br/><p class="text-xs mt-2">जहाँ V₁=अर्क का आयतन (L), V₂=नमूने का आयतन (m³), L=प्रकाश पथ (cm), b=अम्लीकरण से पहले, a=अम्लीकरण के बाद।</p>'
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
                id: 'colour',
                title: 'Colour (रंग)',
                intro: 'दृश्य तुलना विधि का उपयोग करके पानी के रंग का निर्धारण।',
                procedure: [
                  'एक नेसलर ट्यूब में नमूना को 50 mL के निशान तक डालें।',
                  'तीन से चार ट्यूबों को रंग मानकों से भरें जो नमूने के रंग से मेल खाते हों।',
                  'एक सफेद सतह पर ट्यूबों को रखते हुए, ऊपर से नीचे की ओर देखकर नमूने के रंग की तुलना मानकों से करें।',
                  'यदि नमूने का रंग 70 इकाइयों से अधिक है, तो नमूने को ज्ञात अनुपात में आसुत जल से पतला करें।',
                ],
                calculation: 'Colour Units = (A &times; 50) / B<br/><p class="text-xs mt-2">जहाँ A = पतले नमूने का अनुमानित रंग, B = 50 mL पतले नमूने में नमूने का mL।</p>'
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
                id: 'ec',
                title: 'Electrical Conductivity (EC)',
                intro: 'चालकता सेल पोटेंशियोमेट्रिक विधि का उपयोग करके विद्युत चालकता का निर्धारण।',
                procedure: [
                  'एक चालकता मीटर और एक प्लेटिनम इलेक्ट्रोड प्रकार की चालकता सेल का उपयोग करें।',
                  'मानक पोटेशियम क्लोराइड घोल (0.01M KCl) तैयार करें।',
                  'निर्माता के निर्देशों के अनुसार मीटर को कैलिब्रेट करें।',
                  'कम से कम तीन भागों 0.01M KCl घोल से चालकता सेल को धोएं। चौथे भाग के प्रतिरोध को मापें और तापमान नोट करें।',
                  'नमूने को लगभग 25°C पर लाएं और चालकता पढ़ें।',
                ],
                calculation: 'EC (µmho/cm) = (मापा गया चालकता &times; सेल स्थिरांक) / तापमान सुधार कारक'
            },
            {
                id: 'fluoride',
                title: 'Fluoride (फ्लोराइड)',
                intro: 'आयन चयनात्मक इलेक्ट्रोड विधि या SPADNS स्पेक्ट्रोफोटोमेट्रिक विधि का उपयोग करके फ्लोराइड का निर्धारण।',
                procedure: [
                    '<h4>आयन चयनात्मक इलेक्ट्रोड विधि:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>मानकों की एक श्रृंखला तैयार करें (0.5, 1.0, और 2.0 mg F⁻/L)।</li>',
                    '<li>मानकों और नमूनों में समान मात्रा में बफर मिलाएं।</li>',
                    '<li>निर्माता के निर्देशों का पालन करते हुए मीटर को कैलिब्रेट करें और नमूना पढ़ें।</li>',
                    '</ol>',
                    '<h4 class="mt-4">SPADNS विधि:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>उच्च क्लोराइड वाले नमूनों के लिए आसवन आवश्यक है।</li>',
                    '<li>मानक वक्र तैयार करें।</li>',
                    '<li>50 mL नमूने में 10 mL मिश्रित एसिड-जिरकोनिल-SPADNS अभिकर्मक डालें, मिलाएं और 570 nm पर अवशोषण पढ़ें।</li>',
                    '</ol>'
                ],
                calculation: 'कैलिब्रेशन वक्र से फ्लोराइड सांद्रता (mg/L) पढ़ें या मीटर से सीधे पढ़ें।'
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
                calculation: 'कुल कठोरता (mg/L CaCO₃ के रूप में) = (EDTA का V &times; B &times; 1000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ B = 1.00 एमएल EDTA अनुमापक के बराबर CaCO₃ का मिलीग्राम।</p>'
            },
            {
                id: 'iron',
                title: 'Iron (आयरन)',
                intro: 'फेनैनथ्रोलाइन स्पेक्ट्रोफोटोमेट्रिक विधि का उपयोग करके आयरन का निर्धारण।',
                procedure: [
                  '50 mL नमूना लें, 2 mL सांद्र HCl और 1 mL हाइड्रॉक्सिलअमाइन घोल डालें।',
                  'उबालकर आयतन को 15-20 mL तक कम करें, ठंडा करें और 50 mL वॉल्यूमेट्रिक फ्लास्क में स्थानांतरित करें।',
                  '10 mL अमोनियम एसीटेट बफर और 4 mL फेनैनथ्रोलाइन घोल डालें, और 50 mL तक करें।',
                  '10-15 मिनट के बाद 510 nm पर फोटोमेट्रिक रीडिंग लें।',
                  'मानक आयरन घोल का उपयोग करके एक कैलिब्रेशन वक्र तैयार करें।',
                ],
                calculation: 'आयरन (mg/L) = (कैलिब्रेशन वक्र से µg Fe &times; 1000) / (नमूने का आयतन, mL)'
            },
            {
                id: 'magnesium',
                title: 'Magnesium (मैग्नीशियम)',
                intro: 'कुल कठोरता और कैल्शियम कठोरता से गणना की जाती है।',
                procedure: ['कुल कठोरता (TH) और कैल्शियम कठोरता (CaH) के मान प्राप्त करें।'],
                calculation: 'मैग्नीशियम (mg/L) = (TH - CaH) &times; 0.243<br/><p class="text-xs mt-2">जहाँ TH और CaH दोनों mg/L CaCO₃ के रूप में हैं।</p>'
            },
            {
                id: 'manganese',
                title: 'Manganese (मैंगनीज)',
                intro: 'पर्सल्फेट स्पेक्ट्रोफोटोमेट्रिक विधि का उपयोग करके मैंगनीज का निर्धारण।',
                procedure: [
                  'एक उपयुक्त आयतन नमूना लें, 5 mL विशेष अभिकर्मक और एक बूंद H₂O₂ डालें।',
                  '90 mL तक उबालकर सांद्र करें।',
                  '1 ग्राम (NH₄)₂S₂O₈ डालें और 1 मिनट के लिए उबालें, फिर ठंडा करें और 100 mL तक करें।',
                  '525 nm पर एक डिस्टिल्ड वॉटर ब्लैंक के खिलाफ फोटोमेट्रिक माप करें।',
                  'मानक मैंगनीज घोल का उपयोग करके एक कैलिब्रेशन वक्र तैयार करें।',
                ],
                calculation: 'मैंगनीज (mg/L) = (कैलिब्रेशन वक्र से µg Mn) / (नमूने का आयतन, mL)'
            },
            {
                id: 'ammonia_nitrogen',
                title: 'Nitrogen, Ammonia',
                intro: 'अमोनिया नाइट्रोजन का निर्धारण आसवन, फेनेट, या आयन चयनात्मक इलेक्ट्रोड विधियों द्वारा किया जा सकता है।',
                procedure: [
                  '<h4>आसवन विधि:</h4> <p>नमूने को 9.5 पीएच पर बफर किया जाता है और आसवित किया जाता है। अमोनिया को एक शोषक घोल में एकत्र किया जाता है और अनुमापित किया जाता है।</p>',
                  '<h4>फेनेट विधि:</h4> <p>अमोनिया फिनोल, हाइपोक्लोराइट और मैंगनीज सल्फेट उत्प्रेरक के साथ प्रतिक्रिया करके नीला रंग बनाता है, जिसे 640 nm पर मापा जाता है।</p>',
                  '<h4>आयन चयनात्मक इलेक्ट्रोड:</h4> <p>एक अमोनिया-चयनात्मक इलेक्ट्रोड 11 से ऊपर के पीएच पर NH₃ गैस की आंशिक दबाव को मापता है।</p>',
                ],
                calculation: 'विधि के आधार पर अनुमापन या कैलिब्रेशन वक्र से गणना की जाती है।'
            },
            {
                id: 'nitrite_nitrogen',
                title: 'Nitrogen, Nitrite',
                intro: 'सल्फानिलामाइड स्पेक्ट्रोफोटोमेट्रिक विधि।',
                procedure: [
                  '50 mL नमूने में 2 mL रंग अभिकर्मक डालें और मिलाएं।',
                  '10 मिनट से 2 घंटे के बीच 543 nm पर अवशोषण मापें।',
                  'मानक नाइट्राइट घोल का उपयोग करके एक कैलिब्रेशन वक्र तैयार करें।',
                ],
                calculation: 'नाइट्राइट नाइट्रोजन (mg N/L) = (कैलिब्रेशन वक्र से µg N) / (नमूने का आयतन, mL)'
            },
            {
                id: 'organic_nitrogen',
                title: 'Nitrogen, Organic',
                intro: 'केल्डाल टाइट्रिमेट्रिक विधि।',
                procedure: [
                  'पहले अमोनिया को आसवन द्वारा हटा दें।',
                  'शेष नमूने को सल्फ्यूरिक एसिड और उत्प्रेरक के साथ पचाएं ताकि कार्बनिक नाइट्रोजन अमोनियम सल्फेट में परिवर्तित हो जाए।',
                  'अमोनिया को फिर से आसवित करें और अनुमापित करें।',
                ],
                calculation: 'कार्बनिक नाइट्रोजन (mg N/L) = (A - B) &times; 280 / (नमूने का आयतन, mL)<br/><p class="text-xs mt-2">जहाँ A = नमूने के लिए H₂SO₄ का एमएल, B = रिक्त के लिए H₂SO₄ का एमएल।</p>'
            },
            {
                id: 'total_oxidised_nitrogen',
                title: 'Nitrogen, Total Oxidised (NO₂ + NO₃)',
                intro: 'कैडमियम रिडक्शन विधि।',
                procedure: [
                  'नमूने को एक कॉपर-कैडमियम रिडक्शन कॉलम से गुजारें ताकि नाइट्रेट नाइट्राइट में कम हो जाए।',
                'कुल नाइट्राइट को नाइट्राइट नाइट्रोजन के लिए स्पेक्ट्रोफोटोमेट्रिक विधि का उपयोग करके मापें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से कुल ऑक्सीकृत नाइट्रोजन सांद्रता (mg N/L) पढ़ें।'
            },
            {
                id: 'odour',
                title: 'Odour (गंध)',
                intro: 'गुणात्मक मानव रिसेप्टर विधि।',
                procedure: [
                  'एक साफ, गंधहीन बोतल को नमूने से आधा भरें।',
                  'जोर से 2-3 सेकंड के लिए हिलाएं और फिर तुरंत गंध का निरीक्षण करें।',
                  'गंध को गंध मुक्त, सड़े हुए अंडे, जली हुई चीनी, साबुन, मछली, सेप्टिक, सुगंधित, क्लोरिनयुक्त, अल्कोहलिक गंध या किसी अन्य विशिष्ट गंध के रूप में रिपोर्ट करें।',
                ],
                calculation: 'गुणात्मक विवरण।'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'पोटेंशियोमेट्रिक विधि।',
                procedure: [
                  'निर्माता के निर्देशों के अनुसार पीएच मीटर को दो बफर घोलों (आमतौर पर पीएच 4 और 7) का उपयोग करके कैलिब्रेट करें।',
                  'इलेक्ट्रोड को आसुत जल से धोएं, सुखाएं और नमूने में डुबोएं।',
                  'संतुलन स्थापित होने के बाद पीएच पढ़ें।',
                ],
                calculation: 'सीधे मीटर से पढ़ें।'
            },
            {
                id: 'total_phosphorus',
                title: 'Phosphorus, Total',
                intro: 'पाचन और एस्कॉर्बिक एसिड स्पेक्ट्रोफोटोमेट्रिक विधि।',
                procedure: [
                  'नमूने को सल्फ्यूरिक एसिड और पर्सल्फेट के साथ पचाएं ताकि सभी फॉस्फोरस ऑर्थोफॉस्फेट में परिवर्तित हो जाएं।',
                  'एस्कॉर्बिक एसिड विधि का उपयोग करके ऑर्थोफॉस्फेट का विश्लेषण करें।',
                ],
                calculation: 'कुल फॉस्फोरस (mg P/L) = (कैलिब्रेशन वक्र से mg P &times; 1000) / (नमूने का आयतन, mL)'
            },
            {
                id: 'potassium',
                title: 'Potassium (पोटेशियम)',
                intro: 'लौ उत्सर्जन फोटोमेट्रिक विधि।',
                procedure: [
                  'निर्माता के निर्देशों का पालन करते हुए लौ फोटोमीटर सेट करें।',
                  '0-100, 0-10, या 0-1 mg K/L की लागू श्रेणियों में एक रिक्त और पोटेशियम कैलिब्रेशन मानक तैयार करें।',
                  '766.5 nm पर उत्सर्जन मापें और कैलिब्रेशन वक्र तैयार करें।',
                  'वक्र से नमूने की पोटेशियम सांद्रता का निर्धारण करें।',
                ],
                calculation: 'पोटेशियम (mg/L) = (कैलिब्रेशन वक्र से mg/L) &times; तनुकरण कारक'
            },
            {
                id: 'silicate',
                title: 'Silicate (सिलिकेट)',
                intro: 'अमोनियम मोलिब्डेट स्पेक्ट्रोफोटोमेट्रिक विधि।',
                procedure: [
                  '50 mL नमूने में, तेजी से 1.0 mL (1+1) HCl और 2 mL अमोनियम मोलिब्डेट अभिकर्मक डालें।',
                  '5 से 10 मिनट तक प्रतीक्षा करें।',
                  '2.0 mL ऑक्सालिक एसिड घोल डालें, मिलाएं। 2 से 15 मिनट के बीच प्रतीक्षा करें, 2 mL कम करने वाला एजेंट डालें और अच्छी तरह मिलाएं।',
                  '5 मिनट के बाद 815 nm पर अवशोषण पढ़ें।',
                  'मानक सिलिका घोल का उपयोग करके एक कैलिब्रेशन वक्र तैयार करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से सिलिकेट सांद्रता (mg SiO₂/L) पढ़ें।'
            },
            {
                id: 'sodium',
                title: 'Sodium (सोडियम)',
                intro: 'लौ उत्सर्जन फोटोमेट्रिक विधि।',
                procedure: [
                  'निर्माता के निर्देशों का पालन करते हुए लौ फोटोमीटर सेट करें।',
                  'लागू श्रेणियों में एक रिक्त और सोडियम कैलिब्रेशन मानक तैयार करें।',
                  '589 nm पर उत्सर्जन मापें और कैलिब्रेशन वक्र तैयार करें।',
                  'वक्र से नमूने की सोडियम सांद्रता का निर्धारण करें।',
                ],
                calculation: 'सोडियम (mg/L) = (कैलिब्रेशन वक्र से mg/L) &times; तनुकरण कारक'
            },
            {
                id: 'total_solids',
                title: 'Solids, Total',
                intro: 'ग्रेविमेट्रिक विधि।',
                procedure: [
                  'एक पहले से तौली हुई वाष्पीकरण डिश में एक मापा हुआ आयतन डालें।',
                  '104 ± 1°C पर एक ओवन में सुखाएं।',
                  'एक डेसिकेटर में ठंडा करें और तौलें।',
                ],
                calculation: 'कुल ठोस (mg/L) = (अवशेष का वजन, mg &times; 1000) / (नमूने का आयतन, mL)'
            },
            {
                id: 'temperature',
                title: 'Temperature (तापमान)',
                intro: 'पारा थर्मामीटर विधि।',
                procedure: ['थर्मामीटर को नमूने में निर्माता द्वारा निर्दिष्ट निशान तक डुबोएं और संतुलन के बाद तापमान पढ़ें।'],
                calculation: 'सीधे थर्मामीटर से पढ़ें (°C)।'
            },
            {
                id: 'turbidity',
                title: 'Turbidity (टर्बिडिटी)',
                intro: 'नेफेलोमेट्रिक विधि।',
                procedure: [
                  'निर्माता के निर्देशों के अनुसार नेफेलोमीटर को कैलिब्रेट करें।',
                  'नमूने को धीरे से हिलाएं। हवा के बुलबुले गायब होने तक प्रतीक्षा करें और नमूने को सेल में डालें।',
                  'उपकरण प्रदर्शन से सीधे टर्बिडिटी पढ़ें।',
                ],
                calculation: 'सीधे मीटर से पढ़ें (NTU)।'
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
                id: 'carbonate_bicarbonate',
                title: 'Carbonate & Bicarbonate',
                intro: 'Calculated from total and phenolphthalein alkalinity and pH values.',
                procedure: [
                  'Obtain values for total alkalinity (Alk-T), phenolphthalein alkalinity (Alk-P), and pH.',
                  'Use the relationships below for calculation.',
                ],
                calculation: `
                <p>When TDS < 500 mg/L:</p>
                <code>HCO₃⁻ (mg/L) = [Alk-T - 5.0 x 10^(pH-10)] / [1 + 0.94 x 10^(pH-10)]</code><br/>
                <code>CO₃²⁻ (mg/L) = [0.94 x 10^(pH-10) x HCO₃⁻]</code>
                <p class="mt-4">When TDS > 500 mg/L:</p>
                <p>Carbonate (as mg/L CaCO₃) = 2 &times; Alk-P</p>
                <p>Bicarbonate (as mg/L CaCO₃) = Alk-T - (2 &times; Alk-P)</p>
                `
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
                id: 'chlorophyll_a',
                title: 'Chlorophyll-a',
                intro: 'Acetone extraction spectrophotometric method.',
                procedure: [
                  '<h4>Apparatus:</h4> Fluorometer of turntable or rack type with tubes of sample capacity of 5 mL.',
                  '<h4>Reagents:</h4> Aqueous acetone solution (90% acetone + 10% saturated magnesium carbonate solution).',
                  '<h4>Procedure:</h4>',
                  '<ol class="list-decimal list-outside pl-5">',
                  '<li>Filter sample using glass fibre filter (GFF).</li>',
                  '<li>Grind the filter with 2-3 mL of 90% aqueous acetone solution in a tissue grinder.</li>',
                  '<li>Transfer to a centrifuge tube, make up to 10 mL and keep in dark for 2h at 4°C.</li>',
                  '<li>Centrifuge for 20 min at 500g.</li>',
                  '<li>Transfer 3 mL of the clear extract to a cuvette and read optical density (OD) at 750 and 664 nm.</li>',
                  '<li>Acidify the extract with 0.1N HCl and read again at 750 and 665 nm after 90 sec.</li>',
                  '</ol>'
                ],
                calculation: 'Chlorophyll-a (mg/m³) = [26.7 &times; (OD₆₆₄b - OD₆₆₅a) &times; V₁] / (V₂ &times; L)<br/><p class="text-xs mt-2">where V₁=volume of extract(L), V₂=volume of sample (m³), L=light path (cm), b=before acidification, a=after acidification.</p>'
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
                id: 'colour',
                title: 'Colour',
                intro: 'Determination of water color using visual comparison method.',
                procedure: [
                  'Pour sample into a Nessler tube up to the 50 mL mark.',
                  'Fill three to four tubes with color standards that appear to correspond to the sample color.',
                  'Compare the color of the sample with that of the standards by viewing vertically downwards while the tubes are placed on a white surface.',
                  'If the sample color exceeds 70 units, dilute the sample with distilled water in known proportions.',
                ],
                calculation: 'Colour Units = (A &times; 50) / B<br/><p class="text-xs mt-2">where A = estimated color of diluted sample, B = mL of sample in 50 mL diluted sample.</p>'
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
                id: 'ec',
                title: 'Electrical Conductivity (EC)',
                intro: 'Determination of electrical conductivity using the conductivity cell potentiometric method.',
                procedure: [
                  'Use a conductivity meter and a platinum electrode type conductivity cell.',
                  'Prepare standard potassium chloride solution (0.01M KCl).',
                  'Calibrate the meter according to manufacturer’s instructions.',
                  'Rinse conductivity cell with at least three portions of 0.01 M KCl solution. Measure resistance of a fourth portion and note temperature.',
                  'Bring the sample to about 25°C and read the conductivity.',
                ],
                calculation: 'EC (µmho/cm) = (Measured Conductance &times; Cell Constant) / Temperature Correction Factor'
            },
            {
                id: 'fluoride',
                title: 'Fluoride',
                intro: 'Determination of fluoride using either the Ion Selective Electrode method or the SPADNS spectrophotometric method.',
                procedure: [
                    '<h4>Ion Selective Electrode Method:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Prepare a series of standards (0.5, 1.0, and 2.0 mg F⁻/L).</li>',
                    '<li>Add an equal volume of buffer to standards and samples.</li>',
                    '<li>Calibrate the meter and read the sample following manufacturer’s instructions.</li>',
                    '</ol>',
                    '<h4 class="mt-4">SPADNS Method:</h4>',
                    '<ol class="list-decimal list-outside pl-5">',
                    '<li>Distillation is necessary for samples with high chloride.</li>',
                    '<li>Prepare a standard curve.</li>',
                    '<li>To 50 mL of sample, add 10 mL of mixed acid-zirconyl-SPADNS reagent, mix, and read absorbance at 570 nm.</li>',
                    '</ol>'
                ],
                calculation: 'Read fluoride concentration (mg/L) from the calibration curve or directly from the meter.'
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
                calculation: 'Total Hardness (mg/L as CaCO₃) = (V of EDTA &times; B &times; 1000) / Volume of Sample (mL)<br/><p class="text-xs mt-2">where B = mg CaCO₃ equivalent to 1.00 mL EDTA titrant.</p>'
            },
            {
                id: 'iron',
                title: 'Iron',
                intro: 'Determination of iron using the phenanthroline spectrophotometric method.',
                procedure: [
                  'Take 50 mL sample, add 2 mL conc. HCl and 1 mL hydroxylamine solution.',
                  'Heat to boil, reducing volume to 15-20 mL, cool, and transfer to a 50 mL volumetric flask.',
                  'Add 10 mL ammonium acetate buffer and 4 mL phenanthroline solution, and make up to 50 mL.',
                  'Take photometric readings at 510 nm after 10-15 minutes.',
                  'Prepare a calibration curve using standard iron solutions.',
                ],
                calculation: 'Iron (mg/L) = (µg Fe from calibration curve &times; 1000) / (sample volume, mL)'
            },
            {
                id: 'magnesium',
                title: 'Magnesium',
                intro: 'Calculated from total hardness and calcium hardness.',
                procedure: ['Obtain values for Total Hardness (TH) and Calcium Hardness (CaH).'],
                calculation: 'Magnesium (mg/L) = (TH - CaH) &times; 0.243<br/><p class="text-xs mt-2">where TH and CaH are both in mg/L as CaCO₃.</p>'
            },
            {
                id: 'manganese',
                title: 'Manganese',
                intro: 'Determination of manganese using the persulphate spectrophotometric method.',
                procedure: [
                  'Take a suitable volume of sample, add 5 mL special reagent and one drop of H₂O₂.',
                  'Concentrate to 90 mL by boiling.',
                  'Add 1 g (NH₄)₂S₂O₈ and boil for 1 min, then cool and make up to 100 mL.',
                  'Make photometric measurements of standards and sample at 525 nm against a distilled water blank.',
                  'Prepare a calibration curve using standard manganese solutions.',
                ],
                calculation: 'Manganese (mg/L) = (µg Mn from calibration curve) / (sample volume, mL)'
            },
            {
                id: 'ammonia_nitrogen',
                title: 'Nitrogen, Ammonia',
                intro: 'Ammonia nitrogen can be determined by distillation, phenate, or ion selective electrode methods.',
                procedure: [
                  '<h4>Distillation Method:</h4> <p>Sample is buffered at pH 9.5 and distilled. Ammonia is collected in an absorbent solution and titrated.</p>',
                  '<h4>Phenate Method:</h4> <p>Ammonia reacts with phenol, hypochlorite, and manganese sulfate catalyst to form a blue color, measured at 640 nm.</p>',
                  '<h4>Ion Selective Electrode:</h4> <p>An ammonia-selective electrode measures the partial pressure of NH₃ gas at a pH above 11.</p>',
                ],
                calculation: 'Calculated from titration or calibration curve depending on the method.'
            },
            {
                id: 'nitrite_nitrogen',
                title: 'Nitrogen, Nitrite',
                intro: 'Sulphanilamide spectrophotometric method.',
                procedure: [
                  'Add 2 mL colour reagent to 50 mL of sample and mix.',
                  'Measure absorbance at 543 nm between 10 min and 2 h after reagent addition.',
                  'Prepare a calibration curve using standard nitrite solutions.',
                ],
                calculation: 'Nitrite Nitrogen (mg N/L) = (µg N from calibration curve) / (sample volume, mL)'
            },
            {
                id: 'organic_nitrogen',
                title: 'Nitrogen, Organic',
                intro: 'Kjeldahl titrimetric method.',
                procedure: [
                  'Remove ammonia first by distillation.',
                  'Digest the remaining sample with sulfuric acid and catalyst to convert organic nitrogen to ammonium sulfate.',
                  'Distill off the ammonia again and titrate.',
                ],
                calculation: 'Organic Nitrogen (mg N/L) = (A - B) &times; 280 / (sample volume, mL)<br/><p class="text-xs mt-2">where A = mL of H₂SO₄ for sample, B = mL of H₂SO₄ for blank.</p>'
            },
            {
                id: 'total_oxidised_nitrogen',
                title: 'Nitrogen, Total Oxidised (NO₂ + NO₃)',
                intro: 'Cadmium reduction method.',
                procedure: [
                  'Pass the sample through a copper-cadmium reduction column to reduce nitrate to nitrite.',
                  'Measure the total nitrite using the spectrophotometric method for nitrite nitrogen.',
                ],
                calculation: 'Read total oxidized nitrogen concentration (mg N/L) from the calibration curve.'
            },
            {
                id: 'odour',
                title: 'Odour',
                intro: 'Qualitative human receptor method.',
                procedure: [
                  'Fill a cleaned, odourless bottle half-full of sample.',
                  'Shake vigorously for 2-3 seconds and then quickly observe the odour.',
                  'Report the odour as odour free, rotten egg, burnt sugar, soapy, fishy, septic, aromatic, chlorinous, alcoholic odour or any other specific odour.',
                ],
                calculation: 'Qualitative description.'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'Potentiometric method.',
                procedure: [
                  'Calibrate pH meter using two buffer solutions (typically pH 4 and 7) according to manufacturer’s instructions.',
                  'Rinse electrodes with distilled water, blot dry, and immerse in the sample.',
                  'Read the pH after equilibrium is established.',
                ],
                calculation: 'Read directly from the meter.'
            },
            {
                id: 'total_phosphorus',
                title: 'Phosphorus, Total',
                intro: 'Digestion and ascorbic acid spectrophotometric method.',
                procedure: [
                  'Digest the sample with sulfuric acid and persulphate to convert all phosphorus to orthophosphate.',
                  'Analyze for orthophosphate using the ascorbic acid method.',
                ],
                calculation: 'Total Phosphorus (mg P/L) = (mg P from calibration curve &times; 1000) / (sample volume, mL)'
            },
            {
                id: 'potassium',
                title: 'Potassium',
                intro: 'Flame emission photometric method.',
                procedure: [
                  'Set up flame photometer following manufacturer’s instructions.',
                  'Prepare a blank and potassium calibration standards in the applicable ranges of 0-100, 0-10, or 0-1 mg K/L.',
                  'Measure emission at 766.5 nm and prepare a calibration curve.',
                  'Determine potassium concentration of the sample from the curve.',
                ],
                calculation: 'Potassium (mg/L) = (mg/L from calibration curve) &times; Dilution factor'
            },
            {
                id: 'silicate',
                title: 'Silicate',
                intro: 'Ammonium molybdate spectrophotometric method.',
                procedure: [
                  'To 50 mL sample, add in rapid succession 1.0 mL (1+1) HCl and 2 mL ammonium molybdate reagent.',
                  'Let stand for 5 to 10 min.',
                  'Add 2.0 mL oxalic acid solution, mix. Wait at least 2 min but not more than 15 min, add 2 mL reducing agent and mix thoroughly.',
                  'Read absorbance at 815 nm after 5 min.',
                  'Prepare a calibration curve using standard silica solutions.',
                ],
                calculation: 'Read silicate concentration (mg SiO₂/L) from the calibration curve.'
            },
            {
                id: 'sodium',
                title: 'Sodium',
                intro: 'Flame emission photometric method.',
                procedure: [
                  'Set up flame photometer following manufacturer’s instructions.',
                  'Prepare a blank and sodium calibration standards in the applicable ranges.',
                  'Measure emission at 589 nm and prepare a calibration curve.',
                  'Determine sodium concentration of the sample from the curve.',
                ],
                calculation: 'Sodium (mg/L) = (mg/L from calibration curve) &times; Dilution factor'
            },
            {
                id: 'total_solids',
                title: 'Solids, Total',
                intro: 'Gravimetric method.',
                procedure: [
                  'Pipette a measured volume into a pre-weighed evaporating dish.',
                  'Evaporate to dryness in an oven at 104 ± 1°C.',
                  'Cool in a desiccator and weigh.',
                ],
                calculation: 'Total Solids (mg/L) = (Weight of residue, mg &times; 1000) / (Sample volume, mL)'
            },
            {
                id: 'temperature',
                title: 'Temperature',
                intro: 'Mercury thermometer method.',
                procedure: ['Immerse thermometer in the sample up to the mark specified by the manufacturer and read temperature after equilibration.'],
                calculation: 'Read directly from the thermometer (°C).'
            },
            {
                id: 'turbidity',
                title: 'Turbidity',
                intro: 'Nephelometric method.',
                procedure: [
                  'Calibrate nephelometer according to manufacturer’s operating instructions.',
                  'Gently agitate sample. Wait until air bubbles disappear and pour sample into cell.',
                  'Read turbidity directly from instrument display.',
                ],
                calculation: 'Read directly from meter (NTU).'
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

    