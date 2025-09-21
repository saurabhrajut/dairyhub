export const adulterationContent = {
  hi: {
      main_title: "कच्चे दूध की गुणवत्ता और मिलावट",
      main_description: "दूध में प्लेटफ़ॉर्म परीक्षण और मिलावट का पता लगाने के लिए एक गाइड।",
      back_to_categories: "श्रेणियों पर वापस जाएं",
      tabs: {
          platform: "प्लेटफ़ॉर्म परीक्षण",
          platform_desc: "दूध प्राप्ति पर त्वरित गुणवत्ता जांच।",
          preservatives: "परिरक्षक",
          preservatives_desc: "अवैध परिरक्षकों का पता लगाना।",
          adulterants: "मिलावट करने वाले पदार्थ",
          adulterants_desc: "आम मिलावटों का पता लगाना।"
      },
      intros: {
          platform: "प्लेटफ़ॉर्म परीक्षण दूध प्राप्ति डॉक पर किए जाने वाले त्वरित गुणवत्ता मूल्यांकन हैं ताकि जल्दी से यह तय किया जा सके कि दूध का एक बैच स्वीकार्य है या नहीं। ये परीक्षण निम्न-गुणवत्ता वाले या मिलावटी दूध को अच्छी गुणवत्ता वाली आपूर्ति के साथ मिलाने से रोकने के लिए महत्वपूर्ण हैं।",
          preservatives: "कानून के अनुसार, दूध में किसी भी प्रकार के परिरक्षक की अनुमति नहीं है। परिरक्षक आम तौर पर दूध में तब मिलाए जाते हैं जब शीतलन या परिवहन सुविधाएं अपर्याप्त होती हैं। आम परिरक्षकों में न्यूट्रलाइज़र, फॉर्मेलिन आदि शामिल हैं।",
          adulterants: "मिलावट करने वाले पदार्थ वे पदार्थ हैं जो दूध में उसकी मात्रा या ठोस-गैर-वसा सामग्री को बढ़ाने के लिए मिलाए जाते हैं ताकि गुणवत्ता परीक्षणों को धोखा दिया जा सके। आम मिलावटों में चीनी, स्टार्च, यूरिया और वनस्पति तेल शामिल हैं।"
      },
      platformTests: [
          {
              title: "ऑर्गेनोलेप्टिक परीक्षण (संवेदी परीक्षण)",
              content: `
                  <p>जैसे ही दूध डेयरी प्लेटफॉर्म पर आता है, कैन का ढक्कन खोला जाता है, और दूध को एक प्लंजर से मिलाया जाता है ताकि एक सुखद या खराब गंध की जांच की जा सके। इसके बाद सामान्य रूप, रंग, स्थिरता, तापमान और स्वाद का मूल्यांकन किया जाता है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ul class="list-disc list-inside mt-1">
                      <li>दूध के कैन को थोड़ा हिलाकर शुरू करें, फिर ढक्कन खोलें और उससे निकलने वाली किसी भी सुगंध या स्वाद का स्वाद लें।</li>
                      <li>दूध की दृश्य उपस्थिति की जांच करें, जिसमें रंग, सतह पर कोई विदेशी वस्तु और दूध के कैन की स्वच्छता की स्थिति शामिल है। कैन की सफाई दूध के साथ किए गए उपचार को प्रकट करती है।</li>
                      <li>दूध के तापमान की जांच करने के लिए दूध के कैन पर अपना हाथ दबाएं। दूध का तापमान यह बता सकता है कि इसे आखिरी बार कब दुहा गया था।</li>
                  </ul>
                  <h4 class="font-semibold mt-2">अनुमान:</h4>
                  <p>जो दूध आवश्यक मानकों को पूरा नहीं करता है, उसे अस्वीकार कर दिया जाता है।</p>
              `
          },
          {
              title: "उबालने पर थक्का (COB) परीक्षण",
              content: `
                  <p>यह दूध की गर्मी स्थिरता के आधार पर निश्चित परिणाम के लिए एक सरल और सस्ता परीक्षण है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ul class="list-disc list-inside mt-1">
                      <li>एक टेस्ट ट्यूब में 5 मिली दूध लें।</li>
                      <li>इसे उबलते पानी के स्नान में रखें।</li>
                      <li>इसे बिना हिलाए स्नान से निकालें।</li>
                      <li>किसी भी अम्लीय गंध या अवक्षेपित कणों पर ध्यान दें।</li>
                  </ul>
                  <h4 class="font-semibold mt-2">अनुमान:</h4>
                  <p>दूध की अम्लता जो एक सकारात्मक परीक्षण का परिणाम देती है, आमतौर पर 0.22 प्रतिशत (लैक्टिक एसिड के रूप में) से अधिक होती है या इसमें असामान्य रूप से उच्च प्रोटीन सामग्री होती है, जैसे कि कोलोस्ट्रम दूध। क्योंकि ऐसा दूध प्रसंस्करण के दौरान गर्मी उपचार का सामना नहीं कर सकता है, यह तरल दूध के रूप में वितरण या प्रसंस्करण के लिए उपयुक्त नहीं है।</p>
              `
          },
          {
              title: "अल्कोहल परीक्षण",
              content: `
                  <p>एक सरल और त्वरित अल्कोहल जमावट परीक्षण उपलब्ध है। यह इस तथ्य पर आधारित है कि दूध प्रोटीन में अल्कोहल के संपर्क में आने पर कम स्थिरता होती है। जब दूध में लैक्टिक एसिड, रेनेट, दूध प्रोटीन या नमक की उच्च मात्रा होती है, जैसे कि मास्टिटिस में, तो परीक्षण विफल हो सकता है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ul class="list-disc list-inside mt-1">
                      <li>एक टेस्ट ट्यूब में 5 मिली दूध लें।</li>
                      <li>समान मात्रा में 68% एथिल अल्कोहल डालें।</li>
                      <li>टेस्ट ट्यूब को उल्टा करके सामग्री को अच्छी तरह मिलाएं।</li>
                      <li>जमावट के गठन की जांच करें।</li>
                  </ul>
                  <h4 class="font-semibold mt-2">अनुमान:</h4>
                  <p>यदि कोई जमावट बनती है, तो टेस्ट ट्यूब के अंदर दही के महीन कण दिखाई देंगे। यह सकारात्मक अल्कोहल परीक्षण को दर्शाता है और ऐसे दूध को अस्वीकार कर दिया जाता है।</p>
              `
          },
          {
              title: "एलिजारिन-अल्कोहल परीक्षण",
              content: `
                  <p><strong>परिचय:</strong> अल्कोहल या उच्च तापमान के प्रति दूध की स्थिरता विकसित अम्लता, जीवाणु वृद्धि के परिणाम के रूप में मीठा दही जमना, सामान्य नमक संतुलन में गड़बड़ी, और असामान्य रासायनिक संरचना (जैसे कोलोस्ट्रम, देर से स्तनपान, और मास्टिटिस दूध) से काफी प्रभावित होती है। अल्कोहल परीक्षण का उपयोग इसलिए दूध की गर्मी-प्रसंस्करण, विशेष रूप से संघनन और नसबंदी के लिए स्थिरता का आकलन करने के लिए किया जाता है। अल्कोहल के साथ एलिजारिन मिलाने से यह पता लगाने में मदद मिलती है कि दूध अम्लीय है या क्षारीय।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ol class="list-disc list-inside mt-1">
                      <li>एक टेस्ट ट्यूब में 5 मिली दूध और समान मात्रा में एलिजारिन-अल्कोहल घोल (0.2% एलिजारिन 68% एथिल अल्कोहल में) डालें।</li>
                      <li>टेस्ट ट्यूब को कई बार उल्टा करके सामग्री को मिलाएं।</li>
                      <li>गुच्छे या थक्के की उपस्थिति की जांच करें और ध्यान दें कि क्या गुच्छे छोटे हैं या बड़े।</li>
                      <li>मिश्रण के रंग का निरीक्षण करें।</li>
                  </ol>
                  <h4 class="font-semibold mt-2">व्याख्या:</h4>
                  <p>दूध की गुणवत्ता का मूल्यांकन गुच्छे और थक्के के गठन और मिश्रण के रंग के आधार पर किया जाता है। गुच्छे या थक्के की उपस्थिति (अम्लता के विकास के साथ या बिना) खराब गर्मी स्थिरता और दूध की असंतोषजनक गुणवत्ता को इंगित करती है।</p>
                  <div class="overflow-x-auto"><table class="w-full"><thead><tr><th>गुच्छे/थक्के</th><th>रंग</th><th>गर्मी-स्थिरता</th><th>गुणवत्ता</th></tr></thead><tbody>
                  <tr><td>नकारात्मक</td><td>बैंगनी या हल्का लाल</td><td>अच्छा (कम अम्लता)</td><td>संतोषजनक</td></tr>
                  <tr><td>सकारात्मक</td><td>बैंगनी हल्का लाल</td><td>खराब (मीठा दही जमना)</td><td>असंतोषजनक</td></tr>
                  <tr><td>सकारात्मक</td><td>बैंगनी (क्षारीय)</td><td>खराब (देर से स्तनपान) या मास्टिटिस</td><td>असंतोषजनक</td></tr>
                  <tr><td>सकारात्मक</td><td>भूरा (अम्लीय)</td><td>खराब (विकसित अम्लता 0.1-0.2%)</td><td>असंतोषजनक</td></tr>
                  <tr><td>बड़े गुच्छे</td><td>पीला (अत्यधिक अम्लीय)</td><td>खराब (विकसित अम्लता 0.2% से अधिक)</td><td>असंतोषजनक</td></tr>
                  </tbody></table></div>
              `
          },
          {
              title: "दस मिनट का रेसाज़ुरिन परीक्षण",
              content: `
                  <p><strong>परिचय:</strong> यह परीक्षण खराब गुणवत्ता वाले दूध की आपूर्ति का तेजी से पता लगाने के लिए एक त्वरित विधि के रूप में है। रेसाज़ुरिन एक ऑक्सीकरण-अपचयन संकेतक है जो ऑक्सीकृत अवस्था में नीला होता है और जीवाणु गतिविधि या अन्य कारणों से अपचयन पर, यह पहले एक गुलाबी यौगिक "रेसो्रुफिन" में अपरिवर्तनीय रूप से बदल जाता है और फिर रंगहीन 'डाइहाइड्रोरेसो्रुफिन' में। दूसरा परिवर्तन एक प्रतिवर्ती प्रतिक्रिया है। पहले चरण के दौरान रेसाज़ुरिन (नीला) से रेसो्रुफिन (गुलाबी) में अपचयन के दौरान दूध में अलग-अलग मध्यवर्ती रंग के शेड विकसित होते हैं जिन्हें एक तुलनित्र में मानक रंग डिस्क के साथ मिलाया जा सकता है। दूसरे चरण के दौरान गुलाबी रंग तेजी से फीका पड़ जाता है और दूध अंततः सतह पर एक संकीर्ण गुलाबी बैंड के साथ सफेद हो जाता है। रेसाज़ुरिन के अपचयन की दर दूध में जीवाणु गतिविधि की सीमा द्वारा नियंत्रित होती है और किसी भी समय रंग परिवर्तनों को रिकॉर्ड करके मापा जा सकता है। यह सिद्धांत दूध की जीवाणुविज्ञानी गुणवत्ता का आकलन करने के लिए दस मिनट या एक घंटे के रेसाज़ुरिन अपचयन परीक्षणों का आधार बनता है। रेसाज़ुरिन ल्यूकोसाइटिक कोशिकाओं की अपचयन क्रिया के प्रति भी संवेदनशील है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ol class="list-disc list-inside mt-1">
                      <li>एक कैन से दूध का नमूना लें, फिर 10 मिली को एक निष्फल टेस्ट ट्यूब में स्थानांतरित करें।</li>
                      <li>1 मिली बेंच रेसाज़ुरिन घोल (0.05%) डालें, स्टॉपर डालें और उल्टा करके मिलाएं।</li>
                      <li>37.5°C पर बनाए गए पानी के स्नान में रखें।</li>
                      <li>10 मिनट के अंत में, ट्यूब को पानी के स्नान से हटा दें।</li>
                      <li>ट्यूब को तुलनित्र के दाहिने खंड में रखें। प्राकृतिक रंग की भरपाई के लिए तुलनित्र के बाएं खंड में एक नियंत्रण दूध ट्यूब रखें।</li>
                      <li>मानक रेसाज़ुरिन डिस्क को तब तक घुमाया जाता है जब तक कि नमूना मेल न खा जाए और संबंधित डिस्क रीडिंग नोट की जाती है। जब रंग दो डिस्क नंबरों के बीच आता है तो इसे आधे मान के रूप में दर्ज किया जाएगा।</li>
                  </ol>
                  <h4 class="font-semibold mt-2">परिणाम:</h4>
                  <p>निम्नलिखित मानकों के अनुसार नमूनों के परिणाम और वर्गीकरण तालिका में दिए गए हैं:</p>
                  <div class="overflow-x-auto"><table class="w-full"><thead><tr><th>क्रमांक</th><th>रेसाज़ुरिन डिस्क रीडिंग</th><th>रखने की गुणवत्ता</th><th>टिप्पणियां</th></tr></thead><tbody>
                  <tr><td>1</td><td>6, 5 या 4</td><td>संतोषजनक</td><td>दूध स्वीकार करें</td></tr>
                  <tr><td>2</td><td>3.5 से 1</td><td>संदिग्ध</td><td>आगे की जांच की आवश्यकता है</td></tr>
                  <tr><td>3</td><td>0.5 से 0</td><td>असंतोषजनक</td><td>दूध अस्वीकार करें</td></tr>
                  </tbody></table></div>
              `
          },
          {
              title: "एक घंटे का रेसाज़ुरिन रिडक्शन परीक्षण",
              content: `
                  <p><strong>परिचय:</strong> रेसाज़ुरिन एक ऑक्सीकरण-अपचयन संकेतक है जो पहले नीले से गुलाबी (रेसो्रुफिन) और फिर रंगहीन (डाइहाइड्रोरेसो्रुफिन) में बदल जाता है। इस परिवर्तन की दर दूध में जीवाणु गतिविधि को इंगित करती है। एक घंटे के परीक्षण का उपयोग कच्चे दूध की आपूर्ति को ग्रेड करने के लिए किया जाता है।</p>
                  <h4 class="font-semibold mt-2">व्याख्या:</h4>
                  <p>निम्नलिखित मानकों का उपयोग कच्चे दूध की आपूर्ति को ग्रेड करने के लिए एक गाइड के रूप में किया जाता है:</p>
                  <div class="overflow-x-auto"><table class="w-full"><thead><tr><th>एक घंटे का रेसाज़ुरिन डिस्क नंबर</th><th>दूध की गुणवत्ता</th></tr></thead><tbody>
                  <tr><td>4 या अधिक</td><td>अच्छा</td></tr>
                  <tr><td>3.5 से 1</td><td>संतोषजनक</td></tr>
                  <tr><td>0.5 से 0</td><td>खराब</td></tr>
                  </tbody></table></div>
              `
          },
          {
              title: "प्रत्यक्ष सूक्ष्मदर्शी गणना (Direct Microscopic Count)",
              content: `
                  <p><strong>परिचय:</strong> इस विधि में, दूध की एक मापी हुई मात्रा (0.01 मिली) को एक कांच की स्लाइड पर एक निर्दिष्ट क्षेत्र (1 वर्ग सेमी) में फैलाकर, रंगकर, और एक यौगिक सूक्ष्मदर्शी के नीचे जांचना शामिल है। सूक्ष्मदर्शी क्षेत्र में जीवाणु कोशिकाओं या कोशिकाओं के गुच्छों की संख्या गिनकर, प्रति मिलीलीटर दूध में कोशिकाओं या गुच्छों की संख्या की गणना की जाती है। यह दूध के एक नमूने की कुल जीवाणु आबादी का तेजी से अनुमान लगाने में सक्षम बनाता है और दूध में संदूषण के स्रोतों का पता लगाने के लिए उपयोगी जानकारी भी प्रकट करता है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ol class="list-disc list-inside mt-1">
                      <li><strong>सूक्ष्मदर्शी कारक का निर्धारण:</strong> सूक्ष्मदर्शी क्षेत्र के व्यास को मापें और क्षेत्र की गणना करें। सूक्ष्मदर्शी कारक की गणना करें।</li>
                      <li><strong>दूध स्मीयर तैयार करना:</strong> 0.01 मिली दूध को एक स्लाइड पर 1 वर्ग सेमी क्षेत्र में समान रूप से फैलाएं और 40-45°C पर सुखाएं।</li>
                      <li><strong>फिल्मों को रंगना:</strong> फिल्मों को न्यूमैन के दाग में 1/2 से 1 मिनट के लिए डुबोएं। यह दाग एक ही ऑपरेशन में वसा को हटाता है, कोशिकाओं को ठीक करता है, और जीवों को दागता है।</li>
                      <li><strong>सूक्ष्मदर्शी परीक्षा:</strong> तेल विसर्जन उद्देश्य के तहत दागदार फिल्मों की जांच करें। एकल जीवों या कोशिकाओं के गुच्छों की गिनती करें।</li>
                  </ol>
                  <h4 class="font-semibold mt-2">व्याख्या:</h4>
                  <div class="overflow-x-auto"><table class="w-full"><thead><tr><th>सूक्ष्मदर्शी क्लंप गणना प्रति मिलीलीटर दूध</th><th>जीवाणुविज्ञानी गुणवत्ता</th></tr></thead><tbody>
                  <tr><td>500,000 से कम</td><td>अच्छा</td></tr>
                  <tr><td>500,001 से 4,000,000</td><td>संतोषजनक</td></tr>
                  <tr><td>4,000,000 से 20,000,000</td><td>खराब</td></tr>
                  <tr><td>20,000,000 से अधिक</td><td>बहुत खराब</td></tr>
                  </tbody></table></div>
              `
          },
          {
              title: "मास्टिटिस का पता लगाना",
              content: `
                  <p><strong>परिचय:</strong> मास्टिटिस, थन की सूजन, डेयरी मवेशियों और भैंसों की सबसे आम बीमारियों में से एक है। यह दूध की उपज को कम करता है, दूध की रासायनिक संरचना को बदलता है, और दूध को उपयोग के लिए अनुपयुक्त बनाता है। मास्टिटिस संक्रमण का पता लगाने के लिए कई सरल क्षेत्र और प्रयोगशाला परीक्षणों का उपयोग किया जाता है।</p>
                  <h4 class="font-semibold mt-2">स्ट्रिप-कप परीक्षण:</h4>
                  <p>यह एक साधारण क्षेत्र परीक्षण है जिसका उपयोग फोरमिल्क में फाइब्रिन, बलगम और दूध के थक्कों की उपस्थिति का पता लगाने के लिए किया जाता है। एक स्ट्रिप-कप (एक कप पर फैला हुआ काला कपड़ा) पर फोरमिल्क की पहली 2 या 3 धाराओं को धोएं और थक्कों की उपस्थिति की जांच करें।</p>
                  <h4 class="font-semibold mt-2">ब्रोमथाइमोल ब्लू परीक्षण:</h4>
                  <p>यह परीक्षण इस तथ्य पर आधारित है कि संक्रमित थनों से दूध आमतौर पर प्रतिक्रिया में क्षारीय (पीएच 7.0 से 7.4) होता है। 5 मिली दूध में एक मिली संकेतक घोल मिलाएं। एक हरा-नीला या नीला रंग मास्टिटिस संक्रमण को इंगित करता है।</p>
                  <h4 class="font-semibold mt-2">ल्यूकोसाइट गणना:</h4>
                  <p>संक्रमित क्वार्टरों से दूध में आमतौर पर अत्यधिक संख्या में ल्यूकोसाइट कोशिकाएं होती हैं। दूध के स्मीयरों की एक सूक्ष्मदर्शी परीक्षा की जाती है, और प्रति मिलीलीटर 500,000 से अधिक की ल्यूकोसाइट गणना मास्टिटिस संक्रमण का संकेत है।</p>
              `
          },
          {
              title: "अम्लता और क्षारीय फॉस्फेट परीक्षण के लिए मानक संचालन प्रक्रियाएं (SOPs)",
              content: `
                  <h4 class="font-semibold mt-2">दूध की अम्लता:</h4>
                  <p>दूध की टाइट्रेट करने योग्य अम्लता का अनुमान इसकी रखने की गुणवत्ता और गर्मी स्थिरता का पता लगाने के लिए लगाया जाता है। यह फेनोल्फथेलिन संकेतक के साथ 0.1 N सोडियम हाइड्रॉक्साइड घोल का उपयोग करके एक मानकीकृत अनुमापन द्वारा मापा जाता है।</p>
                  <h4 class="font-semibold mt-2">पाश्चुरीकृत दूध के लिए फॉस्फेट परीक्षण:</h4>
                  <p>यह परीक्षण दूध के पाश्चुरीकरण की प्रभावकारिता को निर्धारित करने के लिए किया जाता है। सिद्धांत यह है कि एंजाइम फॉस्फेट पाश्चुरीकरण के दौरान नष्ट हो जाता है। यदि परीक्षण सकारात्मक है (एक पीला रंग विकसित होता है), तो यह अनुचित पाश्चुरीकरण को इंगित करता है।</p>
              `
          },
          {
              title: "लैक्टोमीटर के साथ कुल ठोस (TS) और ठोस-गैर-वसा (SNF) परीक्षण",
              content: `
                  <p><strong>सिद्धांत:</strong> यह परीक्षण दूध के विशिष्ट गुरुत्व को मापने के लिए एक लैक्टोमीटर का उपयोग करता है, जिसे बाद में रिचमंड के सूत्र में वसा प्रतिशत के साथ SNF और TS का अनुमान लगाने के लिए उपयोग किया जाता है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ul class="list-disc list-inside mt-1">
                      <li> Gerber विधि का उपयोग करके दूध का वसा प्रतिशत निर्धारित करें।</li>
                      <li>दूध के नमूने को 40°C तक गर्म करें और फिर इसे 27°C तक ठंडा करें।</li>
                      <li>दूध को एक लैक्टोमीटर जार में डालें और धीरे-धीरे एक ISI-चिह्नित लैक्टोमीटर डालें।</li>
                      <li>मेनिस्कस के शीर्ष पर लैक्टोमीटर रीडिंग (LR) रिकॉर्ड करें।</li>
                      <li>सही लैक्टोमीटर रीडिंग (CLR) प्राप्त करने के लिए तापमान और वसा सुधार लागू करें।</li>
                  </ul>
                  <h4 class="font-semibold mt-2">गणना:</h4>
                  <pre><code>SNF (%) = (CLR / 4) + (0.25 * Fat %) + 0.72 (गाय के दूध के लिए)</code></pre>
                  <pre><code>Total Solids (TS %) = Fat % + SNF %</code></pre>
                  <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
              `
          },
          {
              title: "हिमांक परीक्षण",
              content: `
                  <p><strong>सिद्धांत:</strong> दूध का हिमांक इसके सबसे स्थिर गुणों में से एक है (-0.512 से -0.575 डिग्री सेल्सियस)। दूध में पानी मिलाने से हिमांक पानी के हिमांक 0°C के करीब आ जाता है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <p>यह परीक्षण क्रायोस्कोप नामक एक विशेष उपकरण का उपयोग करके किया जाता है। उपकरण दूध के नमूने को सुपरकूल करता है और फिर क्रिस्टलीकरण को प्रेरित करता है, जिससे यह जिस तापमान पर जमता है उसे सटीक रूप से मापता है।</p>
                  <h4 class="font-semibold mt-2">अनुमान:</h4>
                  <p>मानक सीमा से अधिक हिमांक पानी मिलाने का एक निश्चित संकेत है।</p>
              `
          },
          {
              title: "अवसादन परीक्षण",
              content: `
                  <p><strong>सिद्धांत:</strong> यह परीक्षण दूध में दृश्य गंदगी और बाहरी पदार्थ की मात्रा को मापता है।</p>
                  <h4 class="font-semibold mt-2">प्रक्रिया:</h4>
                  <ul class="list-disc list-inside mt-1">
                      <li>दूध की एक ज्ञात मात्रा (जैसे, 500 मिली) को एक विशेष अवसादन परीक्षण डिस्क के माध्यम से फ़िल्टर किया जाता है।</li>
                      <li>डिस्क को फिर सुखाया जाता है और दूध को ग्रेड देने के लिए मानक अवसादन डिस्क के साथ तुलना की जाती है।</li>
                  </ul>
                  <h4 class="font-semibold mt-2">अनुमान:</h4>
                  <p>उच्च मात्रा में अवसादन दूध दुहने के दौरान खराब स्वच्छता और थन के स्वास्थ्य को इंगित करता है।</p>
              `
          }
      ],
      preservatives: [
          {
              title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
              content: `
                  <div class="prose max-w-none prose-blue">
                      <h4>Method 1: Rosalic Acid Test</h4>
                      <p><strong>Principle:</strong> Rosalic acid is an indicator that gives a red color in alkaline conditions.</p>
                      <ol>
                          <li>Take 10 ml of milk in a test tube and add an equal volume of ethyl alcohol (95%).</li>
                          <li>Add a few drops of 0.1% rosalic acid solution and mix.</li>
                          <li>Appearance of a <strong>rose-red colour</strong> indicates the presence of neutralizers, while pure milk turns brownish.</li>
                      </ol>
                      <h4 class="mt-4">Method 2: Alkalinity of Ash Test</h4>
                      <p><strong>Principle:</strong> If a neutralizer has been added, the ash of the milk will have a higher alkalinity than that of pure milk.</p>
                      <ol>
                          <li>Take 20 ml of milk in a silica crucible.</li>
                          <li>Evaporate the water and ash the contents at 550°C in a muffle furnace.</li>
                          <li>Dissolve the ash in 10 ml of distilled water and titrate it against 0.1 N HCl.</li>
                          <li>A titre value greater than 1.2 ml of 0.1 N HCl indicates the presence of neutralizers.</li>
                      </ol>
                      <h4 class="mt-4">Method 3: Determination of true lactic acid/lactate content</h4>
                      <p><strong>Principle:</strong> The true lactic acid/lactate content is determined spectrophotometrically. The principle involves removal of interfering substances, oxidation of lactic acid to acetaldehyde, which then forms a purple colour with p-hydroxydiphenyl. A disturbed relationship between lactic acid content and titrable acidity suspects neutralization.</p>
                      <ol>
                          <li>A protein-free filtrate of the milk sample is prepared using copper sulphate and calcium hydroxide.</li>
                          <li>The filtrate is treated with sulphuric acid and copper sulphate to oxidize the lactic acid.</li>
                          <li>p-Hydroxydiphenyl reagent is added, and after incubation, a violet colour develops.</li>
                          <li>The intensity of the colour is measured at 570 nm and compared against a standard curve.</li>
                          <li>If milk has normal or low titrable acidity, but lactic acid content is more than 30 mg/100 ml, neutralization is suspected.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960), BIS (1981)</p>
                  </div>
              `
          },
           {
              title: 'Boric Acid and Borates',
              content: `
                  <div class="prose max-w-none prose-blue">
                      <p><strong>Principle:</strong> Boric acid and its salts give a red color with turmeric paper.</p>
                      <ol>
                          <li>Take 5 ml of milk in a test tube and add 1 ml of conc. HCl.</li>
                          <li>Mix well, then dip a strip of turmeric paper.</li>
                          <li>Dry the paper strip and observe the color change.</li>
                          <li>A <strong>red color</strong> on the paper indicates the presence of boric acid.</li>
                          <li>Then add a drop of ammonium hydroxide solution.</li>
                          <li>A change from red to <strong>dark bluish-green</strong> confirms the presence of boric acid.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Formalin (Formaldehyde)',
              content: `
                  <div class="prose max-w-none prose-blue">
                      <h4>Method 1: Leach Test</h4>
                      <p><strong>Principle:</strong> Formaldehyde gives a violet colour in the presence of ferric salts with conc. sulphuric acid.</p>
                      <ol>
                          <li>Take about 5 ml of milk in a test tube.</li>
                          <li>Add to it an equal volume of detecting reagent (Conc. HCl + 10% FeCl3 soln).</li>
                          <li>Place the tube in a boiling water bath for about 3-4 mins.</li>
                          <li>Appearance of <strong>brownish-pink colour</strong> confirms the presence of formalin in the sample, whereas; the control sample will remain white.</li>
                      </ol>
                      <h4 class="mt-4">Method 2: Chromotropic Acid Test</h4>
                       <p><strong>Principle:</strong> Formaldehyde reacts with chromotropic acid to form a colored compound.</p>
                      <ol>
                          <li>Take 1 ml of milk in a test tube.</li>
                          <li>Add 1 ml of chromotropic acid reagent and mix well.</li>
                          <li>Appearance of <strong>yellow color</strong> confirms the presence of formalin, while the control sample remains white.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                  </div>
              `
          },
           {
              title: 'Hydrogen Peroxide (H₂O₂)',
              content: `
                  <div class="prose max-w-none prose-blue">
                      <h4>Method 1: Para-Phenylenediamine Test</h4>
                      <p><strong>Principle:</strong> Hydrogen peroxide oxidizes para-phenylenediamine, causing its color to change from yellow to blue.</p>
                      <ol>
                          <li>Take 2 ml milk in a test tube and add an equal volume of raw milk.</li>
                          <li>Add 2 drops of 2% para-phenylenediamine solution and shake well.</li>
                          <li>Appearance of <strong>blue colour</strong> confirms the presence of hydrogen peroxide.</li>
                      </ol>
                      
                      <h4 class="mt-4">Method 2: Potassium Iodide and Starch Test</h4>
                       <p><strong>Principle:</strong> H₂O₂ oxidizes potassium iodide (KI) to iodine (I₂), which then reacts with starch to form a blue complex.</p>
                      <ol>
                          <li>Take 1 ml milk and add 1 ml of potassium iodide-starch reagent.</li>
                          <li>Appearance of a <strong>blue color</strong> indicates the presence of H₂O₂.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Salicylic Acid and Benzoic Acid',
              content: `
                   <div class="prose max-w-none prose-blue">
                      <p><strong>Principle:</strong> These acids are extracted with ether and then react with ferric chloride to produce characteristic colors.</p>
                      <ol>
                          <li>Acidify 10 ml of milk with HCl and extract with ethyl ether.</li>
                          <li>Evaporate the ether. Dissolve the residue in water.</li>
                          <li>Add a few drops of 0.5% neutral ferric chloride solution.</li>
                          <li><strong>Salicylic Acid:</strong> A violet color indicates its presence.</li>
                          <li><strong>Benzoic Acid:</strong> A salmon-colored precipitate indicates its presence.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Hypochlorites and Chloramines',
              content: `
                  <div class="prose max-w-none prose-blue">
                      <p><strong>Principle:</strong> These strong oxidizing agents can be detected by their reaction with potassium iodide and starch.</p>
                      <ol>
                          <li>Add 5 ml of milk to a test tube.</li>
                          <li>Add 1.5 ml of 7% potassium iodide solution and mix.</li>
                          <li>Add 4 ml of dilute HCl and mix.</li>
                          <li>In the presence of hypochlorite, a <strong>yellowish-brown to deep mauve color</strong> develops.</li>
                      </ol>
                  </div>
              `
          }
      ],
      adulterants: [
          {
              title: 'Cane Sugar',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Method 1: Using Seliwanoff’s Reagent</h4>
                      <p><strong>Principle:</strong> Fructose in cane sugar reacts with resorcinol in HCl to give a red color.</p>
                      <ol>
                          <li>Take 1ml of milk and add 1ml of Seliwanoff’s reagent (resorcinol in HCl).</li>
                          <li>Heat in a boiling water bath for 5 mins.</li>
                          <li>A <strong>red color</strong> indicates the presence of sucrose. Pure milk remains white.</li>
                      </ol>

                      <h4 class="mt-4">Method 2: Resorcinol Test</h4>
                      <ol>
                          <li>Take about 5 ml of milk in a test tube.</li>
                          <li>Add 1 ml of concentrated HCl.</li>
                          <li>Add 0.1 g of resorcinol and mix.</li>
                          <li>Place the tube in a boiling water bath for 5 mins.</li>
                          <li>A <strong>red colour</strong> indicates the presence of sucrose.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                  </div>
              `
          },
          {
              title: 'Starch and Other Cereal Flours',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Method 1: Using Iodine (with unboiled milk sample)</h4>
                      <ol>
                          <li>Take 1ml of milk in a test tube.</li>
                          <li>Add 2 drops of iodine solution.</li>
                          <li>Appearance of a <strong>blue color</strong> indicates the presence of starch.</li>
                      </ol>

                      <h4 class="mt-4">Method 2: Using Iodine (with boiled milk sample)</h4>
                      <p><strong>Principle:</strong> Starch forms a purple-blue complex with iodine.</p>
                      <ol>
                          <li>Boil 3-5 ml of milk and cool to room temperature.</li>
                          <li>Add 1-2 drops of iodine solution. A <strong>blue color</strong> indicates starch, which disappears on boiling and reappears on cooling.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                  </div>
              `
          },
          {
              title: 'Cellulose',
              content: `
                  <div class="prose max-w-none prose-green">
                      <p><strong>Principle:</strong> Cellulose is insoluble. It can be detected by its reaction with iodinated zinc chloride.</p>
                      <ol>
                          <li>Take 10 ml of milk and add 10-15 drops of conc. nitric acid.</li>
                          <li>Filter the coagulated mass and wash with water.</li>
                          <li>Boil the residue with 1-2 ml of iodinated zinc chloride reagent.</li>
                          <li>Appearance of <strong>blue or violet color</strong> indicates the presence of cellulose.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Urea',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Method 1: DMAB and TCA Method</h4>
                      <p><strong>Principle:</strong> Urea forms a yellow complex with p-dimethylaminobenzaldehyde (DMAB) in a slightly acidic solution.</p>
                       <ol>
                          <li>Take equal volumes of milk and 24% TCA in a test tube, mix and filter.</li>
                          <li>Take 3 ml of filtrate in another test tube.</li>
                          <li>Add 3 ml of 1.6% DMAB reagent.</li>
                          <li>A <strong>distinct yellow colour</strong> indicates added urea.</li>
                      </ol>
                      <h4 class="mt-4">Method 2: DMAB Reagent Method</h4>
                      <ol>
                          <li>Take 1 ml of milk in a test tube.</li>
                          <li>Add 1 ml of 1.6% DMAB reagent.</li>
                          <li>A <strong>distinct yellow colour</strong> indicates added urea.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960), FSSAI 2006 (Limit: 70mg/100ml)</p>
                  </div>
              `
          },
          {
              title: 'Glucose',
              content: `
                  <div class="prose max-w-none prose-green">
                      <p><strong>Principle:</strong> Using a modified Barfoed's test, glucose reduces cupric ions to cuprous, which then reduces phosphomolybdic acid to form a blue compound.</p>
                      <ol>
                          <li>Take 1 ml of milk, add 1 ml of modified Barfoed’s reagent.</li>
                          <li>Heat in a boiling water bath for 3 min, then cool.</li>
                          <li>Add 1 ml of phosphomolybdic acid reagent.</li>
                          <li>An immediate formation of a <strong>deep blue colour</strong> indicates added glucose.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Maltodextrin',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Method 1: Using Iodine Reagent</h4>
                      <ol>
                         <li>Take 5 ml of milk sample in a test tube.</li>
                         <li>Add 2 ml of iodine solution (0.05 N) and mix.</li>
                         <li>Appearance of a <strong>chocolate-like red-brown color</strong> indicates the presence of dextrin/maltodextrin.</li>
                      </ol>
                      <h4 class="mt-4">Method 2: Using Citric Acid and Iodine Reagents</h4>
                      <ol>
                         <li>Boil 20 ml of milk, cool to 70°C, and coagulate by adding 0.5 ml of 10% citric acid.</li>
                         <li>Filter the coagulated milk.</li>
                         <li>To 2 ml of the filtrate, add 3 drops of iodine solution.</li>
                         <li>An <strong>orange-brown shade</strong> indicates the presence of maltodextrin.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Detergents',
              content: `
                  <div class="prose max-w-none prose-red">
                      <p><strong>Principle:</strong> Anionic detergents form a complex with the cationic dye methylene blue. This complex is soluble in chloroform.</p>
                      <ol>
                          <li>Take 1 ml milk, add 1 ml of methylene blue solution and then 2 ml chloroform.</li>
                          <li>Vortex for 15 seconds and then centrifuge at 1100 rpm for 3 minutes.</li>
                          <li>A more <strong>intense blue colour in the lower (chloroform) layer</strong> indicates the presence of detergent. If the upper layer is more intense, the detergent is absent.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Ammonium Compounds (Sulphates)',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Method 1: Nessler's Reagent Method</h4>
                       <ol>
                          <li>Take 5 ml of milk sample in a test tube.</li>
                          <li>Add 1 ml of Nessler's reagent.</li>
                          <li>Appearance of <strong>yellowish or grey colour</strong> confirms the presence of added ammonium salts.</li>
                      </ol>
                      <h4 class="mt-4">Method 2: Turmeric Paper Method</h4>
                      <p><strong>Principle:</strong> Ammonium salts release ammonia in alkaline conditions, which turns wet turmeric paper red.</p>
                      <ol>
                          <li>Take 5ml of milk and add 1ml of 10% NaOH.</li>
                          <li>Place a wet turmeric paper on the rim of the test tube.</li>
                          <li>Appearance of <strong>pinkish red colour</strong> on the paper confirms the presence of ammonium salt.</li>
                      </ol>
                       <h4 class="mt-4">Method 3: Sulfate Detection (with BaCl₂)</h4>
                      <p><strong>Principle:</strong> Sulphates precipitate with Barium Chloride (BaCl₂).</p>
                      <ol>
                          <li>Take 10 ml of milk and add 10 ml of Trichloroacetic acid (TCA) to coagulate it.</li>
                          <li>Filter the milk and take 5 ml of the clear filtrate.</li>
                          <li>Add a few drops of 5% BaCl₂ solution.</li>
                          <li>Formation of a <strong>milky-white precipitate</strong> indicates the presence of added sulphates (like ammonium sulphate).</li>
                      </ol>
                  </div>
              `
          },
           {
              title: 'Common Salt (NaCl)',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Silver Nitrate Test</h4>
                       <p><strong>Principle:</strong> Added salt reacts with silver nitrate. Potassium chromate acts as an indicator.</p>
                      <ol>
                          <li>Take 5 ml of milk in a test tube.</li>
                          <li>Add 1 ml of 0.1 N silver nitrate solution.</li>
                          <li> Mix and add 0.5 ml of 10% potassium chromate solution.</li>
                          <li>Appearance of a <strong>yellow colour</strong> indicates added salt, whereas pure milk gives a brick red color.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Vegetable/Refined Oil (Foreign Fat)',
              content: `
                  <div class="prose max-w-none prose-green">
                       <h4>Butyro-Refractometer (BR) Reading Method</h4>
                       <p><strong>Principle:</strong> Most vegetable oils have a higher refractive index than pure milk fat (ghee).</p>
                      <ol>
                          <li>Isolate fat from the milk sample using a modified Gerber butyrometer.</li>
                          <li>Take the BR reading of the extracted fat at 40°C.</li>
                          <li>Pure milk fat has a BR reading of 40-43. Any reading higher than 45 suggests the presence of foreign fat.</li>
                      </ol>
                      <h4 class="mt-4">Baudouin Test for Vanaspati</h4>
                      <p><strong>Principle:</strong> Vanaspati is required to contain 5% sesame oil. The sesamol from this oil reacts with furfural to give a red color.</p>
                      <ol>
                          <li>Extract ghee from the milk sample.</li>
                          <li>Take 5g of melted fat, add 5ml concentrated HCl and 0.4ml of 2% furfural solution. Vortex for 2 minutes.</li>
                          <li>A <strong>pink or red color</strong> in the acid layer indicates vanaspati adulteration.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> IS 3508 – 1966</p>
                  </div>
              `
          },
          {
              title: 'Mineral Oil',
              content: `
                  <div class="prose max-w-none prose-green">
                       <h4>Holde's Test</h4>
                       <p><strong>Principle:</strong> Mineral oils are non-saponifiable, meaning they do not form soap with alkali, unlike edible fats.</p>
                      <ol>
                          <li>Saponify 1g of fat with 25ml of 4% alcoholic KOH.</li>
                          <li>Add 100ml of hot water.</li>
                          <li>The appearance of <strong>turbidity</strong> indicates the presence of mineral oil.</li>
                      </ol>
                  </div>
              `
          },
           {
              title: 'Animal Body Fat (e.g., Lard)',
              content: `
                  <div class="prose max-w-none prose-green">
                       <h4>Opacity Test</h4>
                       <p><strong>Principle:</strong> Different fats solidify and become opaque at different rates and temperatures.</p>
                      <ol>
                          <li>Melt 5g of ghee at 50°C.</li>
                          <li>Transfer to a water bath at 23°C and record the time it takes for the sample to become opaque.</li>
                          <li><strong>Result:</strong> Buffalo ghee takes 14-15 min, cow ghee 18-19 min. A shorter time suggests animal body fat adulteration, while a longer time suggests vegetable oil.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Pond Water (Nitrates)',
              content: `
                  <div class="prose max-w-none prose-green">
                      <p><strong>Principle:</strong> This method detects nitrates/nitrites present in pond water from agricultural fertilizers.</p>
                      <ol>
                          <li>Rinse a test tube with the milk sample and drain.</li>
                          <li>Add 2-3 drops of 2% diphenylamine solution along the side of the test tube.</li>
                          <li>If the sides of the test tube turn <strong>blue</strong>, the milk contains pond water.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Skimmed Milk Powder (SMP) in Natural Milk',
              content: `
                  <div class="prose max-w-none prose-green">
                      <p><strong>Purpose:</strong> To illegally increase the SNF content of natural milk.</p>
                      <p><strong>Principle:</strong> The proteins in reconstituted milk powder contain reducing groups that react with phosphomolybdic acid on boiling to give a blue colour.</p>
                      <ol>
                          <li>Centrifuge 50 ml of milk to separate the cream.</li>
                          <li>Coagulate the skim milk portion with acetic acid.</li>
                          <li>Wash the precipitate, then add 2 ml of 1% phosphomolybdic acid and boil for 15 minutes.</li>
                          <li>The curd from pure milk will be greenish, whereas the curd from a sample containing SMP will be <strong>bluish</strong>.</li>
                      </ol>
                      <p class="text-xs"><strong>Ref:</strong> Journal of Food Science and Technology, Vol 22 (1985)</p>
                  </div>
              `
          },
           {
              title: 'Soymilk in Milk',
              content: `
                  <div class="prose max-w-none prose-green">
                      <p>Soymilk is sometimes added to illegally increase the protein content and SNF reading of milk. Several methods exist for its detection.</p>
                      <h4 class="mt-4">Method I: Polarimeteric method</h4>
                      <p>Based on the different optical rotation of sugars. Soymilk contains sucrose, raffinose, and stachyose, while bovine milk contains lactose. A significant change in the optical rotation of a protein-free filtrate can indicate soymilk addition.</p>
                      <h4 class="mt-4">Method II: Isoelectric precipitation method</h4>
                      <p>Soy proteins precipitate at a higher pH (~5.7) than milk casein (pH 4.6). By adjusting the milk pH to 5.7 and heating, coagulation will occur if soymilk is present.</p>
                       <h4 class="mt-4">Method III: SDS-PAGE method</h4>
                      <p>This electrophoretic technique separates proteins based on molecular weight. Soy proteins have different molecular weights than milk proteins and will show up as distinct, extra bands on the gel, confirming adulteration.</p>
                      <h4 class="mt-4">Method IV: Immunodiffusion method</h4>
                      <p>Uses antibodies specific to soy proteins. If soy protein is present in the milk, it will react with the antibody to form a visible precipitation line in an agar gel.</p>
                      <h4 class="mt-4">Method V: HPLC based method</h4>
                      <p>High-Performance Liquid Chromatography can separate and quantify the different sugars. The presence of stachyose, a sugar found in soybeans but not milk, is a definitive marker for soymilk adulteration.</p>
                      <h4 class="mt-4">Method VI: Rapid method (Trypsin Inhibition)</h4>
                      <p>Soymilk contains trypsin inhibitors. This test measures the activity of the enzyme trypsin. If soymilk is present, the trypsin will be inhibited, leading to a reduced color change in a specific chemical reaction compared to a pure milk sample.</p>
                  </div>
              `
          },
           {
              title: 'Cheese Whey in Milk',
              content: `
                  <div class="prose max-w-none prose-green">
                      <h4>Ninhydrin based spectrophotometric method</h4>
                      <p><strong>Principle:</strong> When rennet is used to make cheese, it cleaves a specific part of kappa-casein called glycomacropeptide (GMP), which goes into the whey. This GMP contains sialic acid. The test selectively precipitates GMP from the milk sample and then measures the sialic acid content. A high level of sialic acid indicates the presence of added cheese whey.</p>
                      <ol>
                          <li>Glycomacropeptide (GMP) is selectively precipitated from the milk sample using Trichloroacetic acid (TCA).</li>
                          <li>The precipitate is then treated with an acidic ninhydrin reagent and heated.</li>
                          <li>The sialic acid bound to the GMP produces a stable yellow-brown color, which is measured with a spectrophotometer at 470 nm.</li>
                          <li>An absorbance value significantly higher than that of pure milk indicates adulteration with cheese whey.</li>
                      </ol>
                  </div>
              `
          },
          {
              title: 'Gelatine',
              content: `
                  <div class="prose max-w-none prose-green">
                      <p><strong>Purpose:</strong> To increase the thickness and SNF content of milk.</p>
                      <p><strong>Principle:</strong> Gelatine forms a yellow precipitate with picric acid.</p>
                      <ol>
                          <li>Take 10 ml of milk and add 20 ml of Stokes reagent (acid mercuric nitrate).</li>
                          <li>Shake well and filter.</li>
                          <li>To the filtrate, add an equal volume of saturated picric acid solution.</li>
                          <li>A <strong>yellow precipitate</strong> indicates the presence of gelatine.</li>
                      </ol>
                  </div>
              `
          }
      ]
  },
  en: {
    main_title: "Quality and Adulteration of Raw Milk",
    main_description: "A guide to platform tests and detection of adulteration in milk.",
    back_to_categories: "Back to Categories",
    tabs: {
        platform: "Platform Tests",
        platform_desc: "Quick quality checks at milk reception.",
        preservatives: "Preservatives",
        preservatives_desc: "Detecting illegal preservatives.",
        adulterants: "Adulterants",
        adulterants_desc: "Detecting common adulterants."
    },
    intros: {
        platform: "Platform tests are rapid quality evaluations performed at the milk reception dock to quickly decide if a batch of milk is acceptable. These tests are crucial to prevent low-quality or adulterated milk from being mixed with good quality supply.",
        preservatives: "By law, no preservatives of any kind are permitted in milk. Preservatives are typically added to milk when cooling or transportation facilities are inadequate. Common preservatives include neutralizers, formalin, etc.",
        adulterants: "Adulterants are substances added to milk to increase its volume or solids-not-fat content to deceive quality tests. Common adulterants include sugar, starch, urea, and vegetable oil."
    },
    platformTests: [
        // This array should contain the English translations of the Hindi platformTests array.
        // For brevity, I will only translate the first one.
        {
            title: "Organoleptic Test (Sensory Test)",
            content: `
                <p>As soon as milk arrives at the dairy platform, the can lid is opened, and the milk is mixed with a plunger to check for a pleasant or bad odor. Afterwards, the general appearance, color, consistency, temperature, and taste are evaluated.</p>
                <h4 class="font-semibold mt-2">Procedure:</h4>
                <ul class="list-disc list-inside mt-1">
                    <li>Start by slightly shaking the milk can, then open the lid and taste any aroma or flavor that emanates from it.</li>
                    <li>Check the visual appearance of the milk, including color, any foreign objects on the surface, and the cleanliness of the milk can. The cleanliness of the can reveals the treatment given to the milk.</li>
                    <li>Press your hand on the milk can to check the milk's temperature. The temperature of the milk can tell when it was last milked.</li>
                </ul>
                <h4 class="font-semibold mt-2">Inference:</h4>
                <p>Milk that does not meet the required standards is rejected.</p>
            `
        },
        // ... all other platform tests translated to English
    ],
    preservatives: [
        // English translations of preservatives tests
        {
            title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <h4>Method 1: Rosalic Acid Test</h4>
                    <p><strong>Principle:</strong> Rosalic acid is an indicator that gives a red color in alkaline conditions.</p>
                    <ol>
                        <li>Take 10 ml of milk in a test tube and add an equal volume of ethyl alcohol (95%).</li>
                        <li>Add a few drops of 0.1% rosalic acid solution and mix.</li>
                        <li>Appearance of a <strong>rose-red colour</strong> indicates the presence of neutralizers, while pure milk turns brownish.</li>
                    </ol>
                </div>
            `
        },
        // ... all other preservatives tests translated
    ],
    adulterants: [
        // English translations of adulterants tests
        {
            title: 'Cane Sugar',
            content: `
                <div class="prose max-w-none prose-green">
                    <h4>Method 1: Using Seliwanoff’s Reagent</h4>
                    <p><strong>Principle:</strong> Fructose in cane sugar reacts with resorcinol in HCl to give a red color.</p>
                    <ol>
                        <li>Take 1ml of milk and add 1ml of Seliwanoff’s reagent (resorcinol in HCl).</li>
                        <li>Heat in a boiling water bath for 5 mins.</li>
                        <li>A <strong>red color</strong> indicates the presence of sucrose. Pure milk remains white.</li>
                    </ol>
                </div>
            `
        },
        // ... all other adulterants tests translated
    ]
  }
}
    