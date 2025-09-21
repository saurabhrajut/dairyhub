

export const microbiologyContent = {
    hi: {
        title: "दूध सूक्ष्म जीव विज्ञान और परीक्षण",
        description: "डेयरी उत्पादों में पाए जाने वाले मुख्य सूक्ष्मजीवों और उनके परीक्षण के बारे में जानकारी।",
        backToTopics: "विषयों पर वापस जाएं",
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
                id: "thermophilic_thermoduric",
                title: "थर्मोफिलिक और थर्मोड्यूरिक बैक्टीरिया",
                content: `
                    <h4 class="font-bold mt-4">थर्मोफिलिक बैक्टीरिया</h4>
                    <p>ये बैक्टीरिया उच्च तापमान (45°C से ऊपर) पर पनपते हैं। वे डेयरी प्रसंस्करण में एक चिंता का विषय हैं क्योंकि वे पाश्चुरीकरण से बच सकते हैं यदि तापमान पर्याप्त रूप से नियंत्रित नहीं किया जाता है और उच्च तापमान वाले उपकरणों में बढ़ सकता है। उदाहरणों में बैसिलस और क्लोस्ट्रीडियम की प्रजातियां शामिल हैं।</p>
                    <h4 class="font-bold mt-4">थर्मोड्यूरिक बैक्टीरिया</h4>
                    <p>ये जीव पाश्चुरीकरण तापमान से बच सकते हैं लेकिन जरूरी नहीं कि वे उच्च तापमान पर बढ़ें। वे खराब साफ किए गए उपकरणों से उत्पन्न हो सकते हैं और पाश्चुरीकृत दूध की शेल्फ जीवन और गुणवत्ता को प्रभावित कर सकते हैं। उदाहरणों में माइक्रोकोकस, माइक्रोबैक्टीरियम और कुछ बैसिलस बीजाणु शामिल हैं।</p>
                `
            },
            {
                id: "psychrotrophic",
                title: "साइकोट्रोफिक बैक्टीरिया",
                content: `
                    <p>साइकोट्रोफिक बैक्टीरिया रेफ्रिजरेटर के तापमान (7°C से नीचे) पर बढ़ सकते हैं, जिससे वे प्रशीतित कच्चे और पाश्चुरीकृत दूध के लिए एक बड़ी चिंता का विषय बन जाते हैं। वे गर्मी-स्थिर प्रोटीज और लाइपेस का उत्पादन कर सकते हैं जो पाश्चुरीकरण से बच जाते हैं और भंडारण के दौरान कड़वाहट और बासीपन जैसे ऑफ-फ्लेवर का कारण बनते हैं। स्यूडोमोनास जीनस एक सामान्य अपराधी है।</p>
                `
            },
            {
                id: "lactic_acid_bacteria",
                title: "लैक्टिक एसिड बैक्टीरिया (LAB)",
                content: `
                    <p>लैक्टिक एसिड बैक्टीरिया (LAB) किण्वित डेयरी उत्पादों जैसे दही, पनीर और छाछ के उत्पादन के लिए आवश्यक हैं। वे लैक्टोज को लैक्टिक एसिड में किण्वित करते हैं, जो इन उत्पादों के संरक्षण और विशिष्ट बनावट और स्वाद के लिए जिम्मेदार है। सामान्य जेनेरा में लैक्टोकोकस, लैक्टोबैसिलस, स्ट्रेप्टोकोकस और ल्यूकोनोस्टोक शामिल हैं। जबकि किण्वित उत्पादों में फायदेमंद है, कच्चे दूध में उनका अनियंत्रित विकास खट्टापन और खराब होने का कारण बनता है।</p>
                `
            },
            {
                id: "spoilage_pathogenic",
                title: "खराब करने वाले और रोगजनक जीव",
                content: `
                    <h4 class="font-bold mt-4">खराब करने वाले जीव (Spoilage Organisms)</h4>
                    <p>ये सूक्ष्मजीव रोग का कारण नहीं बनते हैं लेकिन दूध और दूध उत्पादों के स्वाद, गंध और बनावट को नीचा दिखाते हैं, जिससे वे उपभोग के लिए अनुपयुक्त हो जाते हैं। उदाहरणों में स्यूडोमोनास, कुछ बैसिलस प्रजातियां और खमीर और मोल्ड शामिल हैं।</p>
                    <h4 class="font-bold mt-4">रोगजनक जीव (Pathogenic Organisms)</h4>
                    <p>ये सूक्ष्मजीव मनुष्यों में बीमारी पैदा करने में सक्षम हैं। दूध साल्मोनेला, लिस्टेरिया मोनोसाइटोजेन्स, कैम्पिलोबैक्टर जेजुनी और ई. कोलाई O157:H7 जैसे रोगजनकों के लिए एक वाहन हो सकता है। पाश्चुरीकरण इन रोगजनकों को प्रभावी ढंग से नष्ट करने के लिए डिज़ाइन किया गया है, जिससे दूध का सेवन सुरक्षित हो जाता है।</p>
                `
            },
            {
                id: "enterobacteriaceae",
                title: "एंटरोबैक्टीरियासी (Enterobacteriaceae)",
                content: `
                    <p>यह बैक्टीरिया का एक बड़ा परिवार है जिसमें कोलीफॉर्म, ई. कोलाई और साल्मोनेला जैसे कई जेनेरा शामिल हैं। वे अक्सर पर्यावरण और जानवरों की आंतों में पाए जाते हैं। डेयरी उत्पादों में उनकी उपस्थिति आम तौर पर खराब स्वच्छता या अपर्याप्त प्रसंस्करण का संकेत देती है, और इसलिए उन्हें स्वच्छता संकेतक के रूप में उपयोग किया जाता है।</p>
                `
            },
            {
                id: "cronobacter",
                title: "क्रोनोबैक्टर (Cronobacter)",
                content: `
                    <p>क्रोनोबैक्टर (पूर्व में एंटरोबैक्टर साकाज़ाकी) एक रोगजनक बैक्टीरिया है जो शिशुओं, विशेष रूप से नवजातों में मैनिंजाइटिस और नेक्रोटाइज़िंग एंटरोकोलाइटिस जैसे गंभीर संक्रमणों का कारण बन सकता है। यह पाउडर शिशु फार्मूला (PIF) में एक विशेष चिंता का विषय है क्योंकि यह सूखे वातावरण में जीवित रह सकता है। निर्माण के दौरान कड़े स्वच्छता नियंत्रण इसे रोकने के लिए महत्वपूर्ण हैं।</p>
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
              id: 'spc',
              title: 'दूध का मानक प्लेट गणना (SPC)',
              principle: 'शास्त्रीय रूप से SPC प्रक्रियाओं का उपयोग कुल प्लेट गणना (TPC) या एरोबिक प्लेट गणना (APC) या कुल व्यवहार्य गणना (TVC) निर्धारित करने के लिए किया जाता है। SPC मानक विधि है जिससे अन्य स्क्रीनिंग परीक्षणों की तुलना की जाती है।',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>तनुकारक-फॉस्फेट बफर घोल तैयार करना:</strong> निर्दिष्ट के रूप में स्टॉक और बेंच घोल तैयार करें।</li>
                  <li><strong>माध्यम तैयार करना:</strong> प्लेट काउंट अगर (PCA) या मानक विधि अगर का उपयोग करें।</li>
                  <li><strong>परीक्षण नमूने तैयार करना:</strong> दूध के नमूने को अच्छी तरह से हिलाएं। दशमलव तनुकरण (10⁻¹, 10⁻², आदि) तैयार करें।</li>
                  <li><strong>टीकाकरण और ऊष्मायन:</strong> उपयुक्त तनुकरणों का 1 मिलीलीटर बाँझ पेट्री डिश में पिपेट करें। पिघला हुआ PCA डालें, मिलाएं और जमने दें। 48 घंटे के लिए 37°C पर उल्टा ऊष्मायन करें।</li>
                  <li><strong>गिनती:</strong> 15 और 300 कॉलोनियों के बीच वाली डिश में कॉलोनियों की गिनती करें।</li>
                </ol>`,
              calculation: `भारित माध्य N की गणना सूत्र का उपयोग करके करें: <code>N = ΣC / { (n1 + 0.1n2) d }</code>`
            },
            {
              id: 'coliforms',
              title: 'कोलीफॉर्म गणना',
              principle: 'कोलीफॉर्म एसिड और गैस के उत्पादन के साथ लैक्टोज को किण्वित करते हैं। वे वायलेट रेड बाइल अगर (VRBA) का उपयोग करके पता लगाए जाते हैं। उनकी उपस्थिति अस्वच्छ स्थितियों का सुझाव देती है।',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>तैयारी:</strong> तनुकरण और वायलेट रेड बाइल अगर (VRBA) माध्यम तैयार करें।</li>
                  <li><strong>टीकाकरण:</strong> उपयुक्त तनुकरणों का 1 मिलीलीटर बाँझ पेट्री डिश में पिपेट करें।</li>
                  <li><strong>प्लेटिंग:</strong> VRBA डालें, मिलाएं, और जमने के बाद, उसी माध्यम का एक ओवरले जोड़ें।</li>
                  <li><strong>ऊष्मायन:</strong> 24 घंटे के लिए 37°C पर उल्टे डिश को ऊष्मायन करें।</li>
                  <li><strong>गिनती:</strong> विशिष्ट गहरे लाल कॉलोनियों (≥0.5 मिमी व्यास) की गिनती करें।</li>
                </ol>`,
              calculation: 'कोलीफॉर्म के लिए भारित माध्य N की गणना करें, SPC के समान सूत्र का उपयोग करें, 15 से 150 कॉलोनियों वाली डिश को बनाए रखें।'
            },
            {
              id: 'dmscc',
              title: 'प्रत्यक्ष सूक्ष्म दैहिक कोशिका गणना (DMSCC)',
              principle: 'कच्चे दूध में दैहिक कोशिकाओं की संख्या मास्टिटिस या अन्य असामान्य दूध स्राव का एक माप प्रदान करती है। दूध की एक फिल्म को रंगा जाता है और कोशिकाओं को एक माइक्रोस्कोप के नीचे गिना जाता है।',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>एकल स्ट्रिप फैक्टर (SSF) का अनुमान:</strong> SSF निर्धारित करने के लिए माइक्रोस्कोप को कैलिब्रेट करें।</li>
                  <li><strong>दूध फिल्म तैयार करना:</strong> गर्म, मिश्रित दूध का 0.01 मिलीलीटर एक स्लाइड पर 1 सेमी² क्षेत्र में समान रूप से फैलाएं और सुखाएं।</li>
                  <li><strong>रंगाई:</strong> न्यूमैन के दाग का उपयोग करके स्मीयर को डीफैट, फिक्स और दाग दें।</li>
                  <li><strong>परीक्षा और गिनती:</strong> तेल विसर्जन के तहत जांच करें और एक परिभाषित पट्टी में सभी दैहिक कोशिकाओं की गिनती करें।</li>
                </ol>`,
              calculation: '<code>DMSCC प्रति मिली = एक एकल पट्टी में दैहिक कोशिकाओं की संख्या × SSF</code>'
            },
             {
              id: 'drug_residues',
              title: 'पशु चिकित्सा दवा अवशेष (डेल्वोटेस्ट)',
              principle: 'बैसिलस स्टीयरोथर्मोफिलस बीजाणुओं के अंकुरण और वृद्धि पर आधारित। यदि दूध में निरोधात्मक पदार्थ (जैसे एंटीबायोटिक्स) मौजूद हैं, तो बीजाणु नहीं बढ़ेंगे, और माध्यम में पीएच संकेतक रंग नहीं बदलेगा।',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li>दूध के नमूने का 0.1 मिलीलीटर एक एम्पाउल में डालें जिसमें बीजाणुओं और संकेतक के साथ अगर माध्यम हो।</li>
                  <li>एम्पाउल को 63°C से 66°C पर 2.5 घंटे के लिए ऊष्मायन करें।</li>
                  <li>रंग परिवर्तन का निरीक्षण करें।</li>
                </ol>`,
              calculation: '<strong>व्याख्या:</strong> एक पीला रंग एक नकारात्मक परिणाम (कोई एंटीबायोटिक्स नहीं) इंगित करता है। यदि रंग बैंगनी रहता है, तो परिणाम निरोधात्मक पदार्थों के लिए सकारात्मक है।'
            },
            {
              id: 'yeast_mould',
              title: 'खमीर और मोल्ड गणना',
              principle: 'खमीर और मोल्ड अम्लीय वातावरण में बढ़ सकते हैं, इसलिए उनकी गणना के लिए एक अम्लीय माध्यम (जैसे आलू डेक्सट्रोज अगर, PDA) का उपयोग किया जाता है।',
              procedure: `
                 <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>नमूना और तनुकरण:</strong> TPC विधि की तरह क्रमिक तनुकरण तैयार करें।</li>
                  <li><strong>प्लेटिंग:</strong> प्रत्येक तनुकरण का 1 मिलीलीटर बाँझ पेट्री प्लेटों में स्थानांतरित करें (स्प्रेड प्लेट विधि बेहतर है)।</li>
                  <li><strong>माध्यम:</strong> प्लेटों में पहले से डाला हुआ आलू डेक्सट्रोज अगर (PDA) होना चाहिए, जिसमें जीवाणु वृद्धि को रोकने के लिए पीएच ~3.5 (टार्टरिक एसिड के साथ) समायोजित किया गया हो।</li>
                  <li><strong>ऊष्मायन:</strong> प्लेटों को 22-25°C पर 5 दिनों के लिए ऊष्मायन करें।</li>
                  <li><strong>गिनती:</strong> खमीर (आमतौर पर चमकदार, गोल) और मोल्ड (कपास जैसी, फैलने वाली) की कॉलोनियों को अलग-अलग गिनें।</li>
                </ol>`,
              calculation: '<code>खमीर/मोल्ड गणना/जी (या मिली) = कॉलोनियों की औसत संख्या × तनुकरण कारक</code>'
            }
          ]
        }
    },
    en: {
        title: "Milk Microbiology & Testing",
        description: "A guide to the main microorganisms found in dairy products and their testing.",
        backToTopics: "Back to Topics",
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
                id: "thermophilic_thermoduric",
                title: "Thermophilic and Thermoduric Bacteria",
                content: `
                    <h4 class="font-bold mt-4">Thermophilic Bacteria</h4>
                    <p>These bacteria thrive at high temperatures (above 45°C). They are a concern in dairy processing as they can survive pasteurization if temperatures are not adequately controlled and can grow in high-temperature equipment. Examples include species of Bacillus and Clostridium.</p>
                    <h4 class="font-bold mt-4">Thermoduric Bacteria</h4>
                    <p>These organisms can survive pasteurization temperatures but do not necessarily grow at high temperatures. They can originate from poorly cleaned equipment and can affect the shelf life and quality of pasteurized milk. Examples include Micrococcus, Microbacterium, and some Bacillus spores.</p>
                `
            },
            {
                id: "psychrotrophic",
                title: "Psychrotrophic Bacteria",
                content: `
                    <p>Psychrotrophic bacteria can grow at refrigeration temperatures (below 7°C), making them a major concern for refrigerated raw and pasteurized milk. They can produce heat-stable proteases and lipases that survive pasteurization and cause off-flavors like bitterness and rancidity during storage. The genus Pseudomonas is a common culprit.</p>
                `
            },
            {
                id: "lactic_acid_bacteria",
                title: "Lactic Acid Bacteria (LAB)",
                content: `
                    <p>Lactic Acid Bacteria (LAB) are essential for the production of fermented dairy products like yogurt, cheese, and buttermilk. They ferment lactose into lactic acid, which is responsible for the preservation and characteristic texture and flavor of these products. Common genera include Lactococcus, Lactobacillus, Streptococcus, and Leuconostoc. While beneficial in fermented products, their uncontrolled growth in raw milk leads to souring and spoilage.</p>
                `
            },
            {
                id: "spoilage_pathogenic",
                title: "Spoilage and Pathogenic Organisms",
                content: `
                    <h4 class="font-bold mt-4">Spoilage Organisms</h4>
                    <p>These microorganisms do not cause disease but degrade the flavor, odor, and texture of milk and milk products, making them unsuitable for consumption. Examples include Pseudomonas, certain Bacillus species, and yeasts and molds.</p>
                    <h4 class="font-bold mt-4">Pathogenic Organisms</h4>
                    <p>These are microorganisms capable of causing illness in humans. Milk can be a vehicle for pathogens like Salmonella, Listeria monocytogenes, Campylobacter jejuni, and E. coli O157:H7. Pasteurization is designed to effectively destroy these pathogens, making milk safe to consume.</p>
                `
            },
            {
                id: "enterobacteriaceae",
                title: "Enterobacteriaceae",
                content: `
                    <p>This is a large family of bacteria that includes many genera such as Coliforms, E. coli, and Salmonella. They are often found in the environment and the intestinal tracts of animals. Their presence in dairy products generally indicates poor sanitation or inadequate processing, and they are therefore used as hygiene indicators.</p>
                `
            },
            {
                id: "cronobacter",
                title: "Cronobacter",
                content: `
                    <p>Cronobacter (formerly Enterobacter sakazakii) is a pathogenic bacterium that can cause severe infections in infants, especially neonates, such as meningitis and necrotizing enterocolitis. It is a particular concern in powdered infant formula (PIF) as it can survive in dry environments. Strict hygiene controls during manufacturing are critical to prevent it.</p>
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
              id: 'spc',
              title: 'Standard Plate Count (SPC) of Milk',
              principle: 'Classically SPC procedures are used to determine the Total Plate Count (TPC) or Aerobic Plate Count (APC) or Total Viable Count (TVC). SPC is the standard method to which other screening tests are compared.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Preparation of Diluent-Phosphate Buffer Solution:</strong> Prepare stock and bench solutions as specified.</li>
                  <li><strong>Preparation of Medium:</strong> Use Plate Count Agar (PCA) or Standard Method Agar.</li>
                  <li><strong>Preparation of Test Samples:</strong> Thoroughly agitate the milk sample. Prepare decimal dilutions (10⁻¹, 10⁻², etc.).</li>
                  <li><strong>Inoculation and Incubation:</strong> Pipette 1ml of appropriate dilutions into sterile petri dishes. Pour melted PCA, mix, and solidify. Incubate inverted at 37°C for 48h.</li>
                  <li><strong>Counting:</strong> Count colonies in dishes containing between 15 and 300 colonies.</li>
                </ol>`,
              calculation: `Calculate the weighted mean N using the formula: <code>N = ΣC / { (n1 + 0.1n2) d }</code>`
            },
            {
              id: 'coliforms',
              title: 'Coliform Count',
              principle: 'Coliforms ferment lactose with the production of acid and gas. They are detected using Violet Red Bile Agar (VRBA). Their presence suggests unsanitary conditions.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Preparation:</strong> Prepare dilutions and Violet Red Bile Agar (VRBA) medium.</li>
                  <li><strong>Inoculation:</strong> Pipette 1ml of appropriate dilutions into sterile petri dishes.</li>
                  <li><strong>Plating:</strong> Pour VRBA, mix, and after solidification, add an overlay of the same medium.</li>
                  <li><strong>Incubation:</strong> Incubate inverted dishes at 37°C for 24h.</li>
                  <li><strong>Counting:</strong> Count characteristic dark red colonies (≥0.5 mm diameter).</li>
                </ol>`,
              calculation: 'Calculate the weighted mean N for coliforms using a similar formula as SPC, retaining dishes with 15 to 150 colonies.'
            },
            {
              id: 'dmscc',
              title: 'Direct Microscopic Somatic Cell Count (DMSCC)',
              principle: 'The number of somatic cells in raw milk provides a measure of mastitis or other abnormal milk secretions. A film of milk is stained and cells are counted under a microscope.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Estimation of Single Strip Factor (SSF):</strong> Calibrate the microscope to determine the SSF.</li>
                  <li><strong>Preparation of Milk Film:</strong> Spread 0.01ml of warmed, mixed milk uniformly over a 1cm² area on a slide and dry.</li>
                  <li><strong>Staining:</strong> Defat, fix, and stain the smear using Newman\'s stain.</li>
                  <li><strong>Examination and Counting:</strong> Examine under oil immersion and count all somatic cells within a defined strip across the film.</li>
                </ol>`,
              calculation: '<code>DMSCC per ml = No. of somatic cells in a single strip × SSF</code>'
            },
             {
              id: 'drug_residues',
              title: 'Veterinary Drug Residues (Delvotest)',
              principle: 'Based on the germination and growth of Bacillus stearothermophilus spores. If inhibitory substances (like antibiotics) are present in the milk, the spores will not grow, and the pH indicator in the medium will not change color.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li>Add 0.1 ml of the milk sample to an ampoule containing the agar medium with spores and indicator.</li>
                  <li>Incubate the ampoule at 63°C to 66°C for 2.5 hours.</li>
                  <li>Observe the color change.</li>
                </ol>`,
              calculation: '<strong>Interpretation:</strong> A yellow color indicates a negative result (no antibiotics). If the color remains purple, the result is positive for inhibitory substances.'
            },
            {
              id: 'yeast_mould',
              title: 'Yeast and Mould Count',
              principle: 'Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.',
              procedure: `
                 <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample &amp; Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
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

    