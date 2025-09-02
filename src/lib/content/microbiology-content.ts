
export const microbiologyContent = {
    hi: {
        title: "दूध सूक्ष्म जीव विज्ञान और परीक्षण",
        description: "डेयरी उत्पादों में पाए जाने वाले मुख्य सूक्ष्मजीवों और उनके परीक्षण के बारे में जानकारी।",
        sections: [
            {
                id: "intro",
                title: "दूध सूक्ष्म जीव विज्ञान का परिचय",
                content: `
                    <p>दूध में वांछनीय रासायनिक संरचना होनी चाहिए और संतोषजनक स्वच्छ गुणवत्ता होनी चाहिए। यह सार्वजनिक स्वास्थ्य, दूध से बने उत्पादों की गुणवत्ता और प्रसंस्करण के लिए दूध की उपयुक्तता के संदर्भ में आवश्यक है। जो घटक दूध के लिए विदेशी हैं, लेकिन दूध में थन में या दूध दुहने के दौरान या बाद में प्रवेश करते हैं, साथ ही दूध में होने वाले कोई भी परिवर्तन अक्सर इसकी गुणवत्ता के लिए हानिकारक होते हैं। ये मामले दूध स्वच्छता के विषय हैं। सूक्ष्म, रासायनिक और भौतिक स्वच्छता को प्रतिष्ठित किया जा सकता है। उदाहरण के लिए, सूक्ष्मजीव जो स्वास्थ्य के लिए खतरा पैदा कर सकते हैं (खाद्य संक्रमण या खाद्य विषाक्तता) या जो दूध को खराब कर देते हैं, जैसे, क्योंकि वे भंडारण के दौरान इसे खट्टा कर देते हैं। प्रकाश-प्रेरित ऑफ-फ्लेवर, वसा ऑक्सीकरण, और वसा हाइड्रोलिसिस रासायनिक या एंजाइमेटिक परिवर्तनों से उत्पन्न होते हैं। इसके अलावा, जो यौगिक उपभोक्ता के लिए संभावित रूप से हानिकारक हो सकते हैं, जैसे कि एंटीबायोटिक्स, कीटाणुनाशक, कीटनाशक और भारी धातुएं, दूध में प्रवेश कर सकते हैं।</p>
                    <h4 class="font-bold mt-4">सामान्य पहलू</h4>
                    <p>दूध न केवल स्तनधारियों के लिए बल्कि कई सूक्ष्मजीवों के लिए पोषक तत्वों और खाद्य ऊर्जा का एक अच्छा स्रोत है, जो इस प्रकार दूध में विकसित हो सकते हैं। यह मुख्य रूप से बैक्टीरिया से संबंधित है, लेकिन कुछ मोल्ड और यीस्ट भी दूध में विकसित हो सकते हैं।</p>
                    <h4 class="font-bold mt-4">वृद्धि (Growth)</h4>
                    <p>बैक्टीरिया विभाजन द्वारा गुणा करते हैं। प्रत्येक कोशिका विभाजन से दो नए जीवाणु कोशिकाएं उत्पन्न होती हैं। गुणन एक ज्यामितीय प्रगति है। बैक्टीरिया की वृद्धि के विभिन्न चरणों को प्रतिष्ठित किया जा सकता है। लैग चरण के दौरान बैक्टीरिया गुणा नहीं करते हैं, मुख्य रूप से क्योंकि उनके एंजाइम सिस्टम को अनुकूलन की आवश्यकता होती है। घातीय चरण के दौरान, विकास अधिकतम दर पर होता है जब तक कि स्थिर चरण तक नहीं पहुंच जाता। बाद के चरण में, कुछ विकास अभी भी होता है, साथ ही मरना भी होता है। विकास दर में कमी आमतौर पर बैक्टीरिया द्वारा स्वयं बनाए गए अवरोधकों की क्रिया और/या उपलब्ध पोषक तत्वों की कमी के कारण होती है। अंततः, स्थिर चरण मरने वाले चरण में बदल जाता है, जिसके दौरान गिनती कम हो जाती है।</p>
                    <p>तापमान का जीवाणु वृद्धि पर बड़ा प्रभाव पड़ता है। तापमान कम करने से कोशिका में लगभग सभी प्रक्रियाओं की दर मंद हो जाती है, जिससे विकास धीमा हो जाता है और किण्वन दर (जैसे, एसिड उत्पादन) कम हो जाती है।</p>
                    <h4 class="font-bold mt-4">दूध एक सब्सट्रेट के रूप में</h4>
                    <p>दूध में पोषक तत्वों की इतनी विस्तृत श्रृंखला होती है, जिसमें सभी विटामिन शामिल हैं, कि कई प्रजातियों के बैक्टीरिया किण्वन और विकास के लिए पर्याप्त कच्चा माल पाते हैं। दूध में प्राकृतिक अवरोधक होते हैं। अवरोधकों का एक महत्वपूर्ण वर्ग इम्युनोग्लोबुलिन है, जो विशिष्ट एंटीजन, अक्सर बैक्टीरिया के खिलाफ एंटीबॉडी होते हैं। दूध का सबसे महत्वपूर्ण गैर-विशिष्ट अवरोधक परऑक्सीडेज-थायोसाइनेट-H2O2 प्रणाली है।</p>
                    <p>दूध का उपचार इसकी उपयुक्तता को बैक्टीरिया के लिए एक सब्सट्रेट के रूप में गहरा बदल सकता है। सबसे महत्वपूर्ण गर्मी उपचार है, जो बैक्टीरिया को मारता है और बीजाणु को सक्रिय कर सकता है लेकिन दूध को भी बदलता है। अवरोधक निष्क्रिय हो जाते हैं। नतीजतन, पाश्चुरीकरण बैक्टीरिया के विकास को काफी हद तक उत्तेजित कर सकता है (जो बाद में दूध में प्रवेश कर चुके हैं)।</p>
                `
            },
            {
                id: "undesirable_microorganisms",
                title: "अवांछनीय सूक्ष्मजीव",
                content: `
                    <p>अधिकांश सूक्ष्मजीव दूध में अवांछनीय होते हैं क्योंकि वे रोगजनक हो सकते हैं या एंजाइम उत्पन्न कर सकते हैं जो दूध में अवांछनीय परिवर्तन का कारण बनते हैं।</p>
                    <h4 class="font-bold mt-4">खराब करने वाले सूक्ष्मजीव (Spoilage Microorganisms)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>लैक्टिक एसिड बैक्टीरिया:</strong> ये बैक्टीरिया मुख्य रूप से लैक्टोज जैसे कार्बोहाइड्रेट से लैक्टिक एसिड का उत्पादन करते हैं। वे व्यापक हैं और इसमें लैक्टोकोकस और लैक्टोबैसिलस जैसे जेनेरा शामिल हैं।</li>
                        <li><strong>कोलीफॉर्म:</strong> एंटरोबैक्टीरियासी से संबंधित हैं और व्यापक हैं, जैसे, पाचन तंत्र में। वे दूध में तेजी से बढ़ते हैं, खासकर 20 डिग्री सेल्सियस से ऊपर, और प्रोटीन और लैक्टोज पर हमला करते हैं, जिसके परिणामस्वरूप गैस बनती है और दूध का स्वाद 'अशुद्ध' हो जाता है।</li>
                        <li><strong>साइकोट्रोफ्स:</strong> स्यूडोमोनास, एक्रोमोबैक्टर, फ्लेवोबैक्टीरियम, और एल्कालिजेन्स जैसे जेनेरा शामिल हैं। साइकोट्रोफ्स कम तापमान (15 डिग्री सेल्सियस से कम) पर आसानी से बढ़ते हैं; दूध में वे 4 डिग्री सेल्सियस जितने कम तापमान पर भी फैलते हैं। जीव प्रोटीज और लाइपेस का उत्पादन करते हैं, और इस प्रकार प्रोटीन और वसा पर हमला करते हैं, जिससे 'सड़ा हुआ' और बासी ऑफ-फ्लेवर होता है।</li>
                        <li><strong>गर्मी प्रतिरोधी बैक्टीरिया:</strong> कुछ बैक्टीरिया, जिनमें माइक्रोबैक्टीरियम लैक्टिकम, थर्मोफिलिक स्ट्रेप्टोकोकी और कुछ माइक्रोकोकस प्रजातियां शामिल हैं, बीजाणु नहीं बनाते हैं, लेकिन वनस्पति कोशिकाएं कम पाश्चुरीकरण से बच जाती हैं।</li>
                        <li><strong>बैक्टीरिया के बीजाणु:</strong> बैसिलस (एरोबिक) और क्लोस्ट्रीडियम (एनारोबिक) जेनेरा बीजाणु बना सकते हैं। इनमें से अधिकांश काफी तीव्र गर्मी उपचार से बच जाते हैं।</li>
                    </ul>
                    <h4 class="font-bold mt-4">रोगजनक सूक्ष्मजीव (Pathogenic Microorganisms)</h4>
                     <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>माइकोबैक्टीरियम ट्यूबरकुलोसिस:</strong> गाय या दूध वाले से उत्पन्न हो सकता है। यह कम पाश्चुरीकरण से मारा जाता है।</li>
                        <li><strong>स्टैफिलोकोकस ऑरियस:</strong> अक्सर मास्टिटिस वाली गाय के थन में होता है। कुछ उपभेद गर्मी प्रतिरोधी विष बना सकते हैं।</li>
                        <li><strong>साल्मोनेला और शिगेला एसपीपी.:</strong> प्रकृति में व्यापक रूप से होते हैं, जैसे, गोबर और प्रदूषित पानी में। कम पाश्चुरीकरण उन्हें मारने के लिए पर्याप्त है।</li>
                        <li><strong>कैम्पिलोबैक्टर जेजुनी:</strong> कई जानवरों के आंतों के मार्ग में हो सकता है। यह बहुत गर्मी के प्रति संवेदनशील है और कम पाश्चुरीकरण से नहीं बचेगा।</li>
                        <li><strong>लिस्टेरिया मोनोसाइटोजेन्स:</strong> प्रकृति में अक्सर पाया जाता है। यह 5 डिग्री सेल्सियस जितने कम तापमान पर बढ़ सकता है और सामान्य पाश्चुरीकरण द्वारा मारा जाता है।</li>
                        <li><strong>कॉक्सिएला बर्नेटी:</strong> मनुष्यों में क्यू बुखार का कारण बनता है। यह कम पाश्चुरीकरण से बच सकता है यदि तापमान पर्याप्त न हो।</li>
                    </ul>
                `
            },
            {
                id: 'sources_of_contamination',
                title: 'संदूषण के स्रोत',
                content: `
                    <h4 class="font-bold mt-4">थन में मौजूद सूक्ष्मजीव</h4>
                    <p>स्वस्थ गायों में, दूध स्रावी ऊतक में बाँझ होता है, लेकिन निप्पल नहर में बैक्टीरिया मौजूद हो सकते हैं। अस्वस्थ गायों, विशेष रूप से मास्टिटिस वाली, के दूध में रोगजनक जीवों सहित उच्च जीवाणु संख्या हो सकती है।</p>
                    <h4 class="font-bold mt-4">दूध दुहने के दौरान और बाद में संदूषण</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>गाय:</strong> गोबर, मिट्टी या धूल से दूषित निप्पल की त्वचा से सूक्ष्मजीव दूध में प्रवेश कर सकते हैं।</li>
                        <li><strong>मिट्टी, गोबर, धूल:</strong> ये संदूषक हवा के माध्यम से या सीधे संपर्क से दूध तक पहुंच सकते हैं, जिससे बैक्टीरिया, यीस्ट और मोल्ड के बीजाणु आ सकते हैं।</li>
                        <li><strong>चारा:</strong> चारे में बड़ी संख्या में सूक्ष्मजीव हो सकते हैं, जिनमें बीजाणु बनाने वाले बैक्टीरिया भी शामिल हैं जो पाचन तंत्र से गुजर सकते हैं और गोबर के माध्यम से दूध को दूषित कर सकते हैं।</li>
                        <li><strong>दूध दुहने की इकाई:</strong> खराब साफ और कीटाणुरहित दूध दुहने के उपकरण संदूषण का एक प्रमुख स्रोत हैं।</li>
                        <li><strong>पानी:</strong> सफाई और धोने के लिए इस्तेमाल किया जाने वाला दूषित पानी साइकोट्रोफिक बैक्टीरिया और अन्य रोगजनकों को पेश कर सकता है।</li>
                        <li><strong>दूध वाला:</strong> दूध वाला अपने हाथों या कपड़ों से सीधे दूध को दूषित कर सकता है, खासकर यदि वे किसी संक्रमण से पीड़ित हों।</li>
                    </ul>
                `
            },
            {
                id: 'hygienic_measures',
                title: 'स्वच्छ उपाय',
                content: `
                    <h4 class="font-bold mt-4">उपभोक्ता को रोगजनक सूक्ष्मजीवों से बचाना</h4>
                    <p>कच्चे दूध में रोगजनकों द्वारा संदूषण को कभी भी खारिज नहीं किया जा सकता है। इसलिए तरल उपभोग या दूध उत्पादों में परिवर्तन के लिए नियत दूध को अक्सर कानून द्वारा इतनी गर्मी तक गर्म करने की आवश्यकता होती है कि आम रोगजनक मारे जाएं; इसका मतलब कम से कम कम पाश्चुरीकरण है। कच्चे दूध का सेवन करने की सलाह नहीं दी जाती है।</p>
                    <h4 class="font-bold mt-4">खराब करने वाले जीवों के खिलाफ उपाय</h4>
                    <p>सूक्ष्मजीवों द्वारा कम संदूषण पहला लक्ष्य है। इसे प्राप्त करने के लिए, संदूषण के स्रोतों को जानना चाहिए। दूध दुहने के उपकरणों की सफाई और कीटाणुशोधन आवश्यक है।</p>
                    <p>दूध में बैक्टीरिया के विकास को धीमा करने का मुख्य साधन शीतलन है। खेत पर प्रशीतित दूध टैंकों का एक संतोषजनक संचालन आवश्यक है। हालांकि, दूध को ठंडा करने से कोई बैक्टीरिया नहीं मरता है और यह असंतोषजनक स्वच्छता का समाधान नहीं कर सकता है।</p>
                `
            }
        ],
        testMethods: {
          title: "सामान्य सूक्ष्मजीवविज्ञानी परीक्षण विधियाँ",
          intro: "डेयरी उत्पादों की सुरक्षा और गुणवत्ता सुनिश्चित करने के लिए कई मानक सूक्ष्मजीवविज्ञानी परीक्षण किए जाते हैं। यहाँ कुछ प्रमुख परीक्षण विधियों का अवलोकन दिया गया है:",
          tests: [
            {
              id: 'tpc',
              title: 'एरोबिक मेसोफिलिक प्लेट काउंट (कुल प्लेट काउंट)',
              principle: 'यह परीक्षण एक नमूने में व्यवहार्य (जीवित) बैक्टीरिया और कवक की कुल संख्या को मापता है जो ऑक्सीजन की उपस्थिति में मध्यम (मेसोफिलिक) तापमान पर बढ़ सकते हैं। इसे मानक प्लेट काउंट (SPC) या कुल व्यवहार्य गणना (TVC) के रूप में भी जाना जाता है।',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>नमूना तैयार करना:</strong> 90 मिलीलीटर बाँझ मंदक (जैसे, पेप्टोन पानी) के साथ 10 ग्राम या 10 मिलीलीटर नमूना मिलाकर 1:10 का तनुकरण बनाएं।</li>
                  <li><strong>क्रमिक तनुकरण:</strong> इससे आगे क्रमिक तनुकरण (1:100, 1:1000, आदि) तैयार करें।</li>
                  <li><strong>प्लेटिंग:</strong> प्रत्येक तनुकरण से 1 मिलीलीटर को दो बाँझ पेट्री प्लेटों में स्थानांतरित करें (पोर प्लेट विधि)।</li>
                  <li><strong>मीडिया:</strong> प्लेटों में 15-20 मिलीलीटर पिघला हुआ प्लेट काउंट अगर (PCA), 45 डिग्री सेल्सियस तक ठंडा, डालें। मिलाने के लिए धीरे से घुमाएं।</li>
                  <li><strong>ऊष्मायन:</strong> प्लेटों को 35-37 डिग्री सेल्सियस पर 24-48 घंटे के लिए उल्टा करके ऊष्मायन करें।</li>
                  <li><strong>गिनती:</strong> 25 और 250 कॉलोनियों के बीच वाली प्लेटों का चयन करें। एक कॉलोनी काउंटर का उपयोग करके कॉलोनियों की गिनती करें।</li>
                </ol>`,
              calculation: '<code>CFU/g (या ml) = (कॉलोनियों की औसत संख्या × तनुकरण कारक) / प्लेट किए गए नमूने का आयतन (ml)</code>'
            },
            {
              id: 'coliforms',
              title: 'कोलीफॉर्म, मल कोलीफॉर्म और ई. कोलाई का पता लगाना',
              principle: 'कोलीफॉर्म लैक्टोज को किण्वित करके एसिड और गैस का उत्पादन करते हैं। उन्हें वायलेट रेड बाइल अगर (VRBA) पर गिना जाता है। ई. कोलाई एक मल कोलीफॉर्म है जिसकी पुष्टि विशिष्ट जैव रासायनिक परीक्षणों द्वारा की जाती है।',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>नमूना और तनुकरण:</strong> टीपीसी विधि के अनुसार क्रमिक तनुकरण तैयार करें।</li>
                  <li><strong>प्लेटिंग:</strong> प्रत्येक तनुकरण से 1 मिलीलीटर को बाँझ पेट्री प्लेटों में पिपेट करें।</li>
                  <li><strong>मीडिया:</strong> 15-20 मिलीलीटर पिघला हुआ वीआरबीए डालें और मिलाएं। जमने के बाद, ऊपर एक और वीआरबीए की परत डालें (ओवरले)।</li>
                  <li><strong>ऊष्मायन:</strong> प्लेटों को 35-37 डिग्री सेल्सियस पर 18-24 घंटे के लिए ऊष्मायन करें।</li>
                  <li><strong>गिनती:</strong> लाल-बैंगनी कॉलोनियों (0.5 मिमी या उससे अधिक व्यास) को कोलीफॉर्म के रूप में गिनें।</li>
                  <li><strong>पुष्टि (ई. कोलाई):</strong> संदिग्ध कॉलोनियों को ब्रिलियंट ग्रीन लैक्टोज बाइल (BGLB) शोरबा में टीका लगाएं और 44.5 डिग्री सेल्सियस पर ऊष्मायन करें। गैस उत्पादन ई. कोलाई की उपस्थिति को इंगित करता है। आगे की पुष्टि IMViC परीक्षणों द्वारा की जाती है।</li>
                </ol>`,
              calculation: '<code>कोलीफॉर्म/जी (या एमएल) = विशिष्ट कॉलोनियों की औसत संख्या × तनुकरण कारक</code>'
            },
            {
              id: 'yeast_mould',
              title: 'खमीर और मोल्ड गणना',
              principle: 'खमीर और मोल्ड अम्लीय वातावरण में बढ़ सकते हैं, इसलिए उनकी गणना के लिए एक अम्लीय माध्यम (जैसे पोटैटो डेक्सट्रोज अगर, पीडीए) का उपयोग किया जाता है।',
              procedure: `
                 <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>नमूना और तनुकरण:</strong> टीपीसी विधि के अनुसार क्रमिक तनुकरण तैयार करें।</li>
                  <li><strong>प्लेटिंग:</strong> प्रत्येक तनुकरण से 1 मिलीलीटर को बाँझ पेट्री प्लेटों में स्थानांतरित करें (स्प्रेड प्लेट विधि बेहतर है)।</li>
                  <li><strong>मीडिया:</strong> प्लेटों में पहले से डाला हुआ पोटैटो डेक्सट्रोज अगर (PDA) होना चाहिए, जिसका पीएच ~3.5 (टार्टरिक एसिड के साथ) पर समायोजित किया गया हो ताकि जीवाणु वृद्धि को रोका जा सके।</li>
                  <li><strong>ऊष्मायन:</strong> प्लेटों को 22-25 डिग्री सेल्सियस पर 5 दिनों के लिए ऊष्मायन करें।</li>
                  <li><strong>गिनती:</strong> खमीर (आमतौर पर चमकदार, गोल) और मोल्ड (कपास जैसी, फैलने वाली) की कॉलोनियों को अलग-अलग गिनें।</li>
                </ol>`,
              calculation: '<code>खमीर/मोल्ड गणना/जी (या एमएल) = कॉलोनियों की औसत संख्या × तनुकरण कारक</code>'
            }
          ]
        }
    },
    en: {
        title: "Milk Microbiology & Testing",
        description: "A guide to the main microorganisms found in dairy products and their testing.",
        sections: [
            {
                id: "intro",
                title: "Introduction to Milk Microbiology",
                content: `
                <p>Milk must have a desirable chemical composition and must be of satisfactory hygienic quality. This is essential in terms of public health, the quality of the products made from milk, and the suitability of milk for processing. Components that are foreign to milk, but enter the milk in the udder or during or after milking, as well as any changes occurring in the milk are often detrimental to its quality. These matters are the subject of milk hygiene. Microbial, chemical, and physical hygiene may be distinguished. Examples are microorganisms that may produce a health hazard (food infection or food poisoning) or that spoil the milk, e.g., because they turn it sour during storage. Light-induced off-flavors, fat oxidation, and fat hydrolysis result from chemical or enzymic transformations. Furthermore, compounds that are potentially harmful to the consumer, such as antibiotics, disinfectants, pesticides, and heavy metals, can enter the milk.</p>
                <h4 class="font-bold mt-4">General Aspects</h4>
                <p>Milk is a good source of nutrients and edible energy, not only for mammals but for numerous microorganisms, which thus can grow in milk. It primarily concerns bacteria, but some molds and yeasts can also grow in milk.</p>
                <h4 class="font-bold mt-4">Growth</h4>
                <p>Bacteria multiply by division. Every cell division yields two new bacterial cells. The multiplication is a geometrical progression. The various growth phases that can be distinguished are lag phase, exponential phase, stationary phase, and dying-off phase. During the lag phase the bacteria do not multiply, primarily because their enzyme system needs adaptation. During the exponential phase, the growth is at a maximum rate until the stationary phase is reached. In the latter phase, some growth still occurs, together with dying off. The decrease of the growth rate is usually caused by action of inhibitors formed by the bacteria themselves and/or by a lack of available nutrients. Eventually, the stationary phase turns into the dying-off phase, during which the count decreases.</p>
                <p>Temperature has a large effect on bacterial growth. Lowering of the temperature retards the rate of nearly all processes in the cell, thereby slowing down growth and decreasing fermentation rate (e.g., acid production).</p>
                <h4 class="font-bold mt-4">Milk as a Substrate</h4>
                <p>Milk contains such a wide range of nutrients, including all of the vitamins, that numerous species of bacteria find sufficient raw material for fermentation and growth. Milk contains natural inhibitors. An important class of inhibitors is the immunoglobulins, which are antibodies against specific antigens, often bacteria. The most important nonspecific inhibitor of milk is the peroxidase–thiocyanate–H2O2 system.</p>
                <p>Treatment of milk may profoundly alter its suitability as a substrate for bacteria. The most important is heat treatment, which kills bacteria and may activate sporulation but also alters the milk. Inhibitors are inactivated. Consequently, pasteurization may considerably stimulate growth of bacteria (which have entered the milk afterward).</p>
                `
            },
            {
                id: "undesirable_microorganisms",
                title: "Undesirable Microorganisms",
                content: `
                    <p>Most microorganisms are undesirable in milk because they can be pathogenic or produce enzymes that cause undesirable transformations in the milk.</p>
                    <h4 class="font-bold mt-4">Spoilage Microorganisms</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>Lactic acid bacteria:</strong> These bacteria mainly produce lactic acid from carbohydrates such as lactose. They are widespread and include the genera Lactococcus and Lactobacillus.</li>
                        <li><strong>Coliforms:</strong> Belong to the Enterobacteriaceae and are widespread, e.g., in the digestive tract. They grow rapidly in milk, especially above 20°C, and attack proteins and lactose, as a result of which gas is formed and the flavor of the milk becomes ‘‘unclean.’’</li>
                        <li><strong>Psychrotrophs:</strong> Include the genera Pseudomonas, Achromobacter, Flavobacterium, and Alcaligenes. Psychrotrophs grow readily at low temperatures (<15°C); in milk they proliferate even at a temperature as low as 4°C. The organisms produce proteases and lipases, and thus attack protein and fat, causing ‘‘putrid’’ and rancid off-flavors.</li>
                        <li><strong>Heat-resistant bacteria:</strong> Some bacteria, including Microbacterium lacticum, thermophilic streptococci, and certain Micrococcus species do not form spores, but the vegetative cells survive low pasteurization.</li>
                        <li><strong>Spores of bacteria:</strong> The genera Bacillus (aerobic) and Clostridium (anaerobic) can form spores. Most of these survive fairly intense heat treatment.</li>
                    </ul>
                    <h4 class="font-bold mt-4">Pathogenic Microorganisms</h4>
                     <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>Mycobacterium tuberculosis:</strong> Can originate from the cow or the milker. It is killed by low pasteurization.</li>
                        <li><strong>Staphylococcus aureus:</strong> Often occurs in the udder of a cow with mastitis. Some strains can form a heat-resistant toxin.</li>
                        <li><strong>Salmonella and Shigella spp.:</strong> Occur widely in nature, e.g., in dung and polluted water. Low pasteurization is adequate to kill them.</li>
                        <li><strong>Campylobacter jejuni:</strong> Can occur in the intestinal tract of many animals. It is very heat-sensitive and will not survive low pasteurization.</li>
                        <li><strong>Listeria monocytogenes:</strong> Often found in nature. It can grow at a temperature as low as 5°C and is killed by usual pasteurization.</li>
                        <li><strong>Coxiella burnetii:</strong> Causes Q fever in humans. It can survive low pasteurization if the temperature is not adequate.</li>
                    </ul>
                `
            },
            {
                id: 'sources_of_contamination',
                title: 'Sources of Contamination',
                content: `
                    <h4 class="font-bold mt-4">Microorganisms Present in the Udder</h4>
                    <p>In healthy cows, the milk in the secretory tissue is sterile, but bacteria can be present in the teat canal. Unhealthy cows, especially those with mastitis, can have high bacterial counts in their milk, including pathogenic organisms.</p>
                    <h4 class="font-bold mt-4">Contamination During and After Milking</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>The Cow:</strong> Microorganisms from the skin of the teats, contaminated by dung, soil, or dust, can enter the milk.</li>
                        <li><strong>Soil, Dung, Dust:</strong> These contaminants can reach the milk through the air or by direct contact, introducing spores of bacteria, yeasts, and molds.</li>
                        <li><strong>The Feed:</strong> Feed can contain large numbers of microorganisms, including spore-forming bacteria that can survive passage through the digestive tract and contaminate milk via dung.</li>
                        <li><strong>Milking Unit:</strong> Poorly cleaned and disinfected milking equipment is a major source of contamination.</li>
                        <li><strong>Water:</strong> Contaminated water used for cleaning and rinsing can introduce psychrotrophic bacteria and other pathogens.</li>
                        <li><strong>The Milker:</strong> The milker can directly contaminate the milk from his hands or clothes, especially if suffering from an infection.</li>
                    </ul>
                `
            },
            {
                id: 'hygienic_measures',
                title: 'Hygienic Measures',
                content: `
                    <h4 class="font-bold mt-4">Protection of the Consumer Against Pathogenic Microorganisms</h4>
                    <p>Contamination of raw milk by pathogens can never be ruled out. Milk intended for liquid consumption or for transformation into milk products is therefore often required by law to be heated to such an extent that the common pathogens are killed; this implies at least low pasteurization. The drinking of raw milk is highly inadvisable.</p>
                    <h4 class="font-bold mt-4">Measures Against Spoilage Organisms</h4>
                    <p>A low contamination by microorganisms is the first aim. To achieve this, the sources of contamination should be known. Cleaning and disinfection of the milking equipment is essential.</p>
                    <p>Cooling is the main means of slowing down the growth of bacteria in milk. A satisfactory operation of refrigerated milk tanks on the farm is essential. However, cooling of milk kills no bacteria and it cannot remedy unsatisfactory hygiene.</p>
                `
            }
        ],
        testMethods: {
          title: "Common Microbiological Test Methods",
          intro: "Several standard microbiological tests are performed to ensure the safety and quality of dairy products. Here is an overview of some key test methods:",
          tests: [
            {
              id: 'tpc',
              title: 'Aerobic Mesophilic Plate Count (Total Plate Count)',
              principle: 'This test measures the total number of viable (living) bacteria and fungi in a sample that can grow in the presence of oxygen at moderate (mesophilic) temperatures. It is also known as Standard Plate Count (SPC) or Total Viable Count (TVC).',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample Preparation:</strong> Create a 1:10 dilution by mixing 10g or 10ml of the sample with 90ml of sterile diluent (e.g., peptone water).</li>
                  <li><strong>Serial Dilutions:</strong> Prepare further serial dilutions from this (1:100, 1:1000, etc.).</li>
                  <li><strong>Plating:</strong> Transfer 1ml of each dilution into two sterile Petri plates (Pour Plate Method).</li>
                  <li><strong>Media:</strong> Pour 15-20ml of melted Plate Count Agar (PCA), cooled to 45°C, into the plates. Gently swirl to mix.</li>
                  <li><strong>Incubation:</strong> Incubate the plates inverted at 35-37°C for 24-48 hours.</li>
                  <li><strong>Counting:</strong> Select plates with between 25 and 250 colonies. Count the colonies using a colony counter.</li>
                </ol>`,
              calculation: '<code>CFU/g (or ml) = (Average no. of colonies × Dilution factor) / Volume of sample plated (ml)</code>'
            },
            {
              id: 'coliforms',
              title: 'Detection of Coliforms, Faecal Coliforms & E.coli',
              principle: 'Coliforms ferment lactose to produce acid and gas. They are enumerated on Violet Red Bile Agar (VRBA). E. coli is a faecal coliform confirmed by specific biochemical tests.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
                  <li><strong>Plating:</strong> Pipette 1ml from each dilution into sterile Petri plates.</li>
                  <li><strong>Media:</strong> Pour 15-20ml of melted VRBA and mix. After solidification, add another layer of VRBA on top (overlay).</li>
                  <li><strong>Incubation:</strong> Incubate the plates at 35-37°C for 18-24 hours.</li>
                  <li><strong>Counting:</strong> Count red-purple colonies (0.5mm or more in diameter) as coliforms.</li>
                  <li><strong>Confirmation (E.coli):</strong> Inoculate suspected colonies into Brilliant Green Lactose Bile (BGLB) broth and incubate at 44.5°C. Gas production indicates the presence of E. coli. Further confirmation is done by IMViC tests.</li>
                </ol>`,
              calculation: '<code>Coliforms/g (or ml) = Average no. of characteristic colonies × Dilution factor</code>'
            },
            {
              id: 'yeast_mould',
              title: 'Yeast and Mould Count',
              principle: 'Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.',
              procedure: `
                 <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
                  <li><strong>Plating:</strong> Transfer 1ml of each dilution to sterile Petri plates (Spread Plate method is better).</li>
                  <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), with pH adjusted to ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
                  <li><strong>Incubation:</strong> Incubate plates at 22-25°C for 5 days.</li>
                  <li><strong>Counting:</strong> Count colonies of yeasts (typically shiny, round) and moulds (cotton-like, spreading) separately.</li>
                </ol>`,
              calculation: '<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>'
            }
          ]
        }
    }
}
