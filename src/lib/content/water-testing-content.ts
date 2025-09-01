

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
                id: 'alkalinity_p',
                title: 'Alkalinity, Phenolphthalein (pH 8.3)',
                intro: 'यह परीक्षण पानी में हाइड्रॉक्साइड और कार्बोनेट क्षारीयता को मापता है।',
                apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks, conical flasks and beakers.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sodium carbonate, approximately 0.05 N:</strong> 3 से 5 ग्राम सोडियम कार्बोनेट (Na₂CO₃) को 250°C पर 4 घंटे सुखाएं और डेसिकेटर में ठंडा करें। 2.5±0.2 ग्राम सटीक रूप से तौलें, आसुत जल में घोलें और 1 लीटर तक करें।</li>
                        <li><strong>Standard H₂SO₄, approximately 0.1N:</strong> 2.8 मिलीलीटर सांद्र सल्फ्यूरिक एसिड को 1 लीटर तक पतला करें। इसे 40.00 मिलीलीटर 0.05N Na₂CO₃ के विरुद्ध मानकीकृत करें।</li>
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> उपरोक्त 0.1N घोल से गणना करके तैयार करें।</li>
                        <li><strong>Phenolphthalein indicator solution, alcoholic, pH 8.3:</strong> 5 ग्राम फेनोल्फथेलिन को 500 मिलीलीटर 95% एथिल अल्कोहल में घोलें। 500 मिलीलीटर आसुत जल डालें।</li>
                    </ul>
                `,
                procedure: [
                    'एक शंक्वाकार फ्लास्क में 25 से 50 मिलीलीटर नमूना लें।',
                    '2 से 3 बूंदें फेनोल्फथेलिन संकेतक डालें।',
                    'यदि यह गुलाबी हो जाता है (pH > 8.3), तो रंग गायब होने तक 0.02 N H₂SO₄ से अनुमापन करें।',
                    'उपयोग किए गए अनुमापक का आयतन नोट करें।',
                ],
                calculation: `Phenolphthalein Alkalinity (mg/L CaCO₃ के रूप में) = (A &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = फेनोल्फथेलिन समापन बिंदु तक उपयोग किया गया अनुमापक का एमएल।</p>`
            },
            {
                id: 'alkalinity_t',
                title: 'Alkalinity, Total (pH 4.5)',
                intro: 'यह परीक्षण पानी की कुल क्षारीयता को मापता है।',
                 apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks and beakers.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                     <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> जैसा कि फेनोल्फथेलिन क्षारीयता के लिए तैयार किया गया है।</li>
                        <li><strong>Bromcresol green indicator, pH 4.5:</strong> 100 मिलीग्राम ब्रोमोक्रेसोल ग्रीन सोडियम नमक को 100 मिलीलीटर आसुत जल में घोलें।</li>
                    </ul>
                `,
                procedure: [
                    '2 से 3 बूंदें ब्रोमोक्रेसोल ग्रीन संकेतक डालें।',
                    'रंग में परिवर्तन (नीले से पीला, pH 4.9 से 4.3) होने तक अनुमापन करें।',
                    'उपयोग किए गए अनुमापक का कुल आयतन नोट करें।',
                ],
                calculation: `Total Alkalinity (mg/L CaCO₃ के रूप में) = (B &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ B = ब्रोमोक्रेसोल ग्रीन समापन बिंदु तक उपयोग किया गया अनुमापक का कुल एमएल।</p>`
            },
            {
                id: 'aluminum',
                title: 'Aluminum (एल्यूमीनियम)',
                intro: 'Eriochrome Cyanine R विधि का उपयोग करके एल्यूमीनियम का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> 535 nm पर उपयोग के लिए, 1 सेमी या उससे अधिक के प्रकाश पथ के साथ।</li>
                        <li><strong>Glassware:</strong> सभी कांच के बर्तनों को 1+1 गर्म HCl से उपचारित करें और एल्यूमीनियम मुक्त आसुत जल से धोएं।</li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock aluminum solution:</strong> 8.791 ग्राम एल्यूमीनियम पोटेशियम सल्फेट, AlK(SO₄)₂·12H₂O को पानी में घोलें और 1 लीटर तक करें।</li>
                        <li><strong>Standard aluminum solution:</strong> 10 मिलीलीटर स्टॉक घोल को 1000 मिलीलीटर तक पतला करें; 1.00 मिलीलीटर = 5.00 µg Al। दैनिक तैयार करें।</li>
                        <li><strong>Sulphuric acid, H₂SO₄, 0.02 N and 6 N.</strong></li>
                        <li><strong>Ascorbic acid solution:</strong> 0.1 ग्राम एस्कॉर्बिक एसिड को पानी में घोलें और 100 मिलीलीटर तक करें। दैनिक तैयार करें।</li>
                        <li><strong>Buffer reagent:</strong> 136 ग्राम सोडियम एसीटेट, NaC₂H₃O₂·3H₂O को पानी में घोलें, 40 मिलीलीटर 1N एसिटिक एसिड डालें और 1 लीटर तक करें।</li>
                        <li><strong>Working dye solution (Eriochrome Cyanine R):</strong> 10.0 मिलीलीटर स्टॉक डाई घोल को 100 मिलीलीटर तक पतला करें।</li>
                    </ul>
                `,
                procedure: [
                    '0 से 7 µg एल्यूमीनियम वाले मानकों की एक श्रृंखला तैयार करें।',
                    'प्रत्येक मानक और नमूने में 1 एमएल 0.02N H₂SO₄, 1 एमएल एस्कॉर्बिक एसिड, 10 एमएल बफर, और 5 एमएल वर्किंग डाई अभिकर्मक डालें।',
                    'कुल आयतन 50 एमएल करें और 5-15 मिनट के भीतर 535 nm पर अवशोषण पढ़ें।',
                    'कैलिब्रेशन वक्र से नमूना सांद्रता निर्धारित करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से एल्यूमीनियम सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'यह परीक्षण 27°C पर 3 दिनों के लिए बोतल ऊष्मायन विधि पर आधारित है।',
                 apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>300 mL की BOD बोतलें।</li>
                        <li>27 ± 1 °C पर थर्मोस्टेटिक रूप से नियंत्रित एयर इनक्यूबेटर या वॉटर बाथ।</li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Phosphate buffer solution:</strong> 8.5 g KH₂PO₄, 21.75 g K₂HPO₄, 33.4 g Na₂HPO₄·7H₂O और 1.7 g NH₄Cl को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Magnesium sulphate solution:</strong> 22.5 g MgSO₄·7H₂O को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Calcium chloride solution:</strong> 27.5 g CaCl₂ को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Ferric chloride solution:</strong> 0.25 g FeCl₃·6H₂O को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Dilution water:</strong> 1 लीटर आसुत जल में 1 mL प्रत्येक फॉस्फेट बफर, MgSO₄, CaCl₂, और FeCl₃ घोल डालें।</li>
                    </ul>
                `,
                procedure: [
                  'आवश्यक मात्रा में तनुकरण जल तैयार करें, तापमान 27°C पर लाएं और हवा से संतृप्त करें।',
                  'आवश्यकतानुसार तनुकरण जल को सीड करें (औद्योगिक अपशिष्ट के लिए)।',
                  'नमूने का तनुकरण करें ताकि 3 दिनों के ऊष्मायन के बाद कम से कम 1 mg/L की अवशिष्ट DO और कम से कम 2 mg/L की DO खपत हो।',
                  'तीन BOD बोतलें भरें। एक बोतल में प्रारंभिक DO (D₀) का निर्धारण करें। अन्य दो को 27°C पर 3 दिनों के लिए ऊष्मायन करें।',
                  '3 दिनों के बाद अंतिम DO (D₃) का निर्धारण करें।',
                  'एक तनुकरण जल रिक्त (dilution water blank) और एक बीज नियंत्रण (seed control) भी चलाएं।',
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
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> 540 nm पर उपयोग के लिए।</li>
                        <li><strong>Evaporating dishes:</strong> High-silica glass or porcelain.</li>
                        <li><strong>Water-bath:</strong> 55°C पर सेट।</li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock boron solution:</strong> 571.6 mg निर्जल बोरिक एसिड को आसुत जल में घोलें और 1 लीटर तक करें।</li>
                        <li><strong>Curcumin reagent:</strong> 40 mg curcumin और 5 g ऑक्सालिक एसिड को 80 mL 95% एथिल अल्कोहल में घोलें, 4.2 mL सांद्र HCl डालें, 100 mL तक करें।</li>
                        <li><strong>Ethyl alcohol, 95%.</strong></li>
                    </ul>
                `,
                procedure: [
                    'मानकों और नमूनों की वाष्पीकरण डिश में 4 एमएल Curcumin अभिकर्मक डालें।',
                    '55°C पर 80 मिनट के लिए वॉटर बाथ पर गरम करें जब तक कि यह सूख न जाए।',
                    'ठंडा करें, 10 एमएल एथिल अल्कोहल में अवशेष घोलें।',
                    '540 nm पर अवशोषण पढ़ें और कैलिब्रेशन वक्र का उपयोग करके सांद्रता निर्धारित करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से बोरॉन सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'calcium',
                title: 'Calcium (कैल्शियम)',
                intro: 'EDTA अनुमापन विधि का उपयोग करके कैल्शियम का निर्धारण।',
                 apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sodium hydroxide, NaOH, 1N.</strong></li>
                        <li><strong>Murexide (ammonium purpurate) indicator:</strong> 0.2 ग्राम डाई को 100 ग्राम ठोस NaCl के साथ मिलाएं।</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> 3.723 ग्राम EDTA डाइसोडियम नमक को आसुत जल में घोलें और 1000 मिलीलीटर तक करें।</li>
                        <li><strong>Standard calcium solution:</strong> 1.000 ग्राम निर्जल CaCO₃ को 1+1 HCl में घोलें और 1000 मिलीलीटर तक करें।</li>
                    </ul>
                `,
                procedure: [
                    '50 mL नमूना लें, pH को 12-13 पर समायोजित करने के लिए 2 mL NaOH डालें।',
                    '0.1-0.2 ग्राम Murexide इंडिकेटर डालें।',
                    'EDTA घोल से तब तक अनुमापन करें जब तक कि रंग गुलाबी से बैंगनी न हो जाए।',
                ],
                calculation: 'कैल्शियम (mg/L) = (A &times; B &times; 400.8) / नमूने का आयतन (एमएल)<br/> <p class="text-xs mt-2">जहाँ A = नमूने के लिए अनुमापक का एमएल, B = 1 एमएल EDTA के बराबर CaCO₃ का मिलीग्राम।</p>'
            },
            {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD कार्बनिक और अकार्बनिक दोनों प्रदूषकों को एक मजबूत रासायनिक ऑक्सीकारक (पोटेशियम डाइक्रोमेट) से ऑक्सीकृत करने के लिए आवश्यक ऑक्सीजन की कुल मात्रा को मापता है। यह BOD से अधिक तेजी से परिणाम देता है।',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Reflux flasks:</strong> 250 mL क्षमता, 24/29 ग्राउंड ग्लास नेक के साथ।</li>
                        <li><strong>Condensers:</strong> Leibig या समकक्ष।</li>
                        <li><strong>Hot plate or gas burner.</strong></li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard potassium dichromate solution, 0.0417M (0.25N):</strong> 12.259 g K₂Cr₂O₇ को 1 लीटर तक घोलें।</li>
                        <li><strong>Sulphuric acid reagent:</strong> 5.5 g Ag₂SO₄ को 1 किलो सांद्र H₂SO₄ में मिलाएं।</li>
                        <li><strong>Ferroin indicator solution.</strong></li>
                        <li><strong>Standard ferrous ammonium sulphate (FAS), titrant, 0.25M:</strong> 98 g Fe(NH₄)₂(SO₄)₂·6H₂O को 1 लीटर घोल में घोलें।</li>
                        <li><strong>Mercuric Sulphate, HgSO₄, powder.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने को एक पाचन फ्लास्क में लें।',
                    'उसमें 1 ग्राम HgSO₄, कांच के मोती, और 5 मिलीलीटर सल्फ्यूरिक एसिड अभिकर्मक डालें, मिलाएं, ठंडा करें।',
                    '25 मिलीलीटर पोटेशियम डाइक्रोमेट घोल डालें और मिलाएं।',
                    'कंडेनसर कनेक्ट करें, और कंडेनसर के खुले सिरे से अतिरिक्त 70 मिलीलीटर सल्फ्यूरिक एसिड अभिकर्मक डालें।',
                    '2 घंटे के लिए रिफ्लक्स करें; ठंडा करें, कंडेनसर धोएं और आयतन दोगुना करें।',
                    'फेरोइन संकेतक डालें, और FAS के साथ अनुमापन करें जब तक कि रंग नीला-हरा से लाल-भूरा न हो जाए।',
                    'एक रिक्त अनुमापन भी करें।',
                ],
                calculation: 'COD (mg/L) = [ (A - B) &times; M &times; 8000 ] / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = रिक्त के लिए FAS का एमएल, B = नमूने के लिए FAS का एमएल, M = FAS की मोलरता।</p>'
            },
            {
                id: 'chloride',
                title: 'Chloride (क्लोराइड)',
                intro: 'क्लोराइड आयन पानी में स्वाभाविक रूप से मौजूद होते हैं लेकिन उच्च सांद्रता औद्योगिक कचरे या सीवेज से प्रदूषण का संकेत दे सकती है। इसका परीक्षण मोहर की विधि से किया जाता है।',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Potassium chromate indicator solution.</strong></li>
                        <li><strong>Standard silver nitrate titrant, 0.0141N:</strong> 2.395 g AgNO₃ को 1 लीटर तक घोलें।</li>
                        <li><strong>Standard sodium chloride, 0.0141N:</strong> 824.0 mg NaCl को 1 लीटर तक घोलें।</li>
                    </ul>
                `,
                procedure: [
                    'एक 100 एमएल नमूना या 100 एमएल तक पतला किया गया एक उपयुक्त भाग उपयोग करें।',
                    '1 एमएल K₂CrO₄ संकेतक डालें, AgNO₃ अनुमापक से गुलाबी-पीले समापन बिंदु तक अनुमापन करें।',
                    'एक रिक्त अनुमापन भी करें।',
                ],
                calculation: 'क्लोराइड (mg/L) = [ (A - B) &times; N &times; 35450 ] / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = नमूने के लिए एमएल अनुमापन, B = रिक्त के लिए एमएल अनुमापन, N = AgNO₃ की नॉर्मलता।</p>'
            },
            {
                id: 'hardness',
                title: 'Total Hardness (कुल कठोरता)',
                intro: 'पानी की कठोरता मुख्य रूप से कैल्शियम और मैग्नीशियम आयनों के कारण होती है। इसका परीक्षण EDTA अनुमापन विधि से किया जाता है।',
                 apparatus: '<p>Standard laboratory glassware.</p>',
                 reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution:</strong> 16.9 g NH₄Cl को 143 mL सांद्र NH₄OH में घोलें। 1.25 g मैग्नीशियम EDTA नमक डालें और 250 mL तक पतला करें।</li>
                        <li><strong>Indicator:</strong> Eriochrome Black T सोडियम नमक।</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> 3.723 g EDTA डाइसोडियम नमक को आसुत जल में घोलें और 1000 मिलीलीटर तक करें।</li>
                        <li><strong>Standard Calcium Solution:</strong> 1.000 g CaCO₃ को HCl में घोलें और 1000 मिलीलीटर तक करें।</li>
                    </ul>
                `,
                procedure: [
                    '25 एमएल नमूने को 50 एमएल तक पतला करें।',
                    '1 से 2 एमएल बफर घोल डालें ताकि पीएच 10.0 से 10.1 हो जाए।',
                    '1 से 2 बूंदें संकेतक घोल डालें और EDTA अनुमापक से लाल रंग से नीले रंग में बदलने तक अनुमापन करें।',
                ],
                calculation: 'कुल कठोरता (mg/L CaCO₃ के रूप में) = (A &times; B &times; 1000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = नमूने के लिए एमएल अनुमापन, B = 1.00 एमएल EDTA अनुमापक के बराबर CaCO₃ का मिलीग्राम।</p>'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'घुलित ऑक्सीजन जलीय जीवन के लिए आवश्यक है और पानी की गुणवत्ता का एक प्रमुख संकेतक है। इसका परीक्षण विंकलर विधि से किया जाता है।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>DO sampler.</li><li>BOD bottles, 300 mL.</li></ul>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Manganous sulphate solution:</strong> 480 g MnSO₄·4H₂O को 1 लीटर तक घोलें।</li>
                        <li><strong>Alkali-iodide-azide reagent:</strong> 500 g NaOH, 135 g NaI, और 10 g NaN₃ को 1 लीटर तक घोलें।</li>
                        <li><strong>Sulphuric acid, conc.</strong></li>
                        <li><strong>Starch indicator.</strong></li>
                        <li><strong>Standard sodium thiosulphate titrant, 0.025N:</strong> 6.205 g Na₂S₂O₃·5H₂O को 1 लीटर तक घोलें।</li>
                    </ul>
                `,
                procedure: [
                    'एक 300 एमएल BOD बोतल को ध्यान से पानी से भरें, हवा के बुलबुले न आने दें।',
                    '2 एमएल <strong>मैंगनीज सल्फेट घोल</strong>, फिर 2 एमएल <strong>क्षार-आयोडाइड-एजाइड अभिकर्मक</strong> डालें। बोतल बंद करके मिलाएं।',
                    'बने हुए अवक्षेप को व्यवस्थित होने दें।',
                    '2 एमएल <strong>सांद्र सल्फ्यूरिक एसिड</strong> डालें और पूरी तरह घुलने तक मिलाएं।',
                    'एक निश्चित आयतन (जैसे 201 एमएल) को मानक <strong>सोडियम थायोसल्फेट (0.025N)</strong> से तब तक अनुमापित करें जब तक कि हल्का पुआल रंग न रह जाए।',
                    '1-2 एमएल <strong>स्टार्च इंडिकेटर</strong> डालें (घोल नीला हो जाएगा)।',
                    'अनुमापन जारी रखें जब तक कि नीला रंग पूरी तरह गायब न हो जाए। आयतन नोट करें।',
                ],
                calculation: 'DO (mg/L) = (अनुमापक का V &times; अनुमापक की Molarity &times; 8000) / 200'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'पोटेंशियोमेट्रिक विधि।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>pH meter with temperature compensation.</li><li>Reference and Glass electrodes.</li></ul>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solutions:</strong> pH 4.00, 6.86, और 9.18 के लिए व्यावसायिक रूप से उपलब्ध या तैयार किए गए।</li>
                    </ul>
                `,
                procedure: [
                  'निर्माता के निर्देशों के अनुसार पीएच मीटर को दो बफर घोलों (आमतौर पर पीएच 4 और 7) का उपयोग करके कैलिब्रेट करें।',
                  'इलेक्ट्रोड को आसुत जल से धोएं, सुखाएं और नमूने में डुबोएं।',
                  'संतुलन स्थापित होने के बाद पीएच पढ़ें।',
                ],
                calculation: 'सीधे मीटर से पढ़ें।'
            },
             {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS पानी में सभी घुले हुए कार्बनिक और अकार्बनिक ठोस पदार्थों की कुल मात्रा है। इसका परीक्षण ग्रेविमेट्रिक विधि से किया जाता है।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Evaporating dishes.</li><li>Drying oven, 180±2°C.</li><li>Desiccator.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'एक साफ, सूखी, पहले से तौली हुई बीकर (W₁) लें।',
                    'बीकर में एक ज्ञात आयतन (जैसे 100 एमएल) छाना हुआ पानी डालें।',
                    'पानी को हॉट प्लेट या वॉटर बाथ पर पूरी तरह से वाष्पित करें।',
                    'बीकर को 180°C पर एक घंटे के लिए हॉट एयर ओवन में सुखाएं।',
                    'बीकर को डेसिकेटर में ठंडा करें और फिर से तौलें (W₂)।',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) मिलीग्राम में &times; 1000 ] / नमूने का आयतन (एमएल)'
            },
             {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS उन ठोस कणों का माप है जो फिल्टर पेपर पर रह जाते हैं।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Glass-fibre filter disk.</li><li>Filtration apparatus.</li><li>Drying oven, 103–105°C.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'एक ज्ञात आयतन पानी को एक पहले से तौले हुए ग्लास फाइबर फिल्टर पेपर (W₁) से छानें।',
                    'रोके गए ठोस पदार्थों के साथ फिल्टर पेपर को 103-105°C पर एक घंटे के लिए हॉट एयर ओवन में सुखाएं।',
                    'डेसिकेटर में ठंडा करें और फिर से तौलें (W₂)।',
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
                id: 'alkalinity_p',
                title: 'Alkalinity, Phenolphthalein (pH 8.3)',
                intro: 'This test measures hydroxide and carbonate alkalinity in water.',
                apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks, conical flasks and beakers.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sodium carbonate, approximately 0.05 N:</strong> Dry 3 to 5 g sodium carbonate, Na₂CO₃, at 250°C for 4h and cool in a desiccator. Accurately weigh 2.5±0.2 g, dissolve in distilled water and make to 1 L.</li>
                        <li><strong>Standard H₂SO₄, approximately 0.1N:</strong> Dilute 2.8 mL conc. sulphuric acid to 1 L. Standardise against 40.00 mL 0.05N Na₂CO₃.</li>
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> Prepare by calculation from the above 0.1N solution.</li>
                        <li><strong>Phenolphthalein indicator solution, alcoholic, pH 8.3:</strong> Dissolve 5 g phenolphthalein in 500 mL 95% ethyl alcohol. Add 500 mL distilled water.</li>
                    </ul>
                `,
                procedure: [
                    'Take 25 to 50 mL sample in a conical flask.',
                    'Add 2 to 3 drops of phenolphthalein indicator.',
                    'If it turns pink (pH > 8.3), titrate with 0.02 N H₂SO₄ to disappearance of the colour.',
                    'Record mL titrant used.',
                ],
                calculation: `Phenolphthalein Alkalinity (as mg/L CaCO₃) = (A &times; Normality of Acid &times; 50000) / mL of sample<br/><p class="text-xs mt-2">where A = mL titrant used to phenolphthalein end point.</p>`
            },
            {
                id: 'alkalinity_t',
                title: 'Alkalinity, Total (pH 4.5)',
                intro: 'This test measures the total alkalinity of water.',
                 apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks and beakers.</p>',
                reagents: `
                    <h4>Reagents</h4>
                     <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> As prepared for phenolphthalein alkalinity.</li>
                        <li><strong>Bromcresol green indicator, pH 4.5:</strong> Dissolve 100mg bromcresol green sodium salt in 100 mL distilled water.</li>
                    </ul>
                `,
                procedure: [
                    'Add 2 to 3 drops of bromcresol green indicator.',
                    'Titrate until change in colour (blue to yellow, pH 4.9 to 4.3) is observed.',
                    'Record total mL titrant used.',
                ],
                calculation: `Total Alkalinity (as mg/L CaCO₃) = (B &times; Normality of Acid &times; 50000) / mL of sample<br/><p class="text-xs mt-2">where B = total mL of titrant used to bromcresol green end point.</p>`
            },
            {
                id: 'aluminum',
                title: 'Aluminum',
                intro: 'Spectrophotometric determination of aluminum using Eriochrome Cyanine R method.',
                 apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> For use at 535 nm with light path of 1 cm or longer.</li>
                        <li><strong>Glassware:</strong> Treat all glassware with 1+1 warm HCl and rinse with aluminium free distilled water.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock aluminum solution:</strong> Dissolve 8.791 g aluminum potassium sulphate, AlK(SO₄)₂·12H₂O, in water and dilute to 1 L.</li>
                        <li><strong>Standard aluminum solution:</strong> Dilute 10 mL stock aluminum solution to 1000 mL; 1.00 mL = 5.00 µg Al. Prepare daily.</li>
                        <li><strong>Sulphuric acid, H₂SO₄, 0.02 N and 6 N.</strong></li>
                        <li><strong>Ascorbic acid solution:</strong> Dissolve 0.1 g ascorbic acid in water and make up to 100 mL. Prepare fresh daily.</li>
                        <li><strong>Buffer reagent:</strong> Dissolve 136 g sodium acetate, NaC₂H₃O₂·3H₂O, in water, add 40 mL 1N acetic acid and dilute to 1 L.</li>
                        <li><strong>Working dye solution (Eriochrome Cyanine R):</strong> Dilute 10.0 mL of stock dye solution to 100 mL.</li>
                    </ul>
                `,
                procedure: [
                    'Prepare a series of standards containing 0 to 7 µg of aluminum.',
                    'To each standard and sample, add 1 mL 0.02N H₂SO₄, 1 mL ascorbic acid, 10 mL buffer, and 5 mL working dye reagent.',
                    'Make up total volume to 50 mL and read absorbance at 535 nm within 5-15 minutes.',
                    'Determine sample concentration from the calibration curve.',
                ],
                calculation: 'Read aluminum concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'This test is based on the bottle incubation method for 3 days at 27°C.',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li>BOD bottles, 300 mL.</li>
                        <li>Air incubator or water bath, thermostatically controlled at 27 ± 1 °C.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Phosphate buffer solution:</strong> Dissolve 8.5 g KH₂PO₄, 21.75 g K₂HPO₄, 33.4 g Na₂HPO₄·7H₂O and 1.7 g NH₄Cl in 1 L distilled water.</li>
                        <li><strong>Magnesium sulphate solution:</strong> Dissolve 22.5 g MgSO₄·7H₂O in 1 L distilled water.</li>
                        <li><strong>Calcium chloride solution:</strong> Dissolve 27.5 g CaCl₂ in 1 L distilled water.</li>
                        <li><strong>Ferric chloride solution:</strong> Dissolve 0.25 g FeCl₃·6H₂O in 1 L distilled water.</li>
                        <li><strong>Dilution water:</strong> Add 1 mL each of phosphate buffer, MgSO₄, CaCl₂, and FeCl₃ solutions per litre distilled water.</li>
                    </ul>
                `,
                procedure: [
                  'Prepare required amount of dilution water, bring temperature to 27 °C and saturate with air.',
                  'Seed the dilution water if necessary (for industrial wastes).',
                  'Make several dilutions of the sample to get a residual DO of at least 1 mg/L and a DO uptake of at least 2 mg/L after 3 days.',
                  'Fill three BOD bottles. Determine initial DO (D₀) on one bottle. Incubate the other two at 27 °C for 3 days.',
                  'Determine final DO (D₃) after 3 days.',
                  'Also run a dilution water blank and a seed control.',
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
                 apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> For use at 540 nm.</li>
                        <li><strong>Evaporating dishes:</strong> High-silica glass or porcelain.</li>
                        <li><strong>Water-bath:</strong> Set at 55°C.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock boron solution:</strong> Dissolve 571.6 mg anhydrous boric acid in distilled water and dilute to 1 L.</li>
                        <li><strong>Curcumin reagent:</strong> Dissolve 40 mg curcumin and 5 g oxalic acid in 80 mL 95% ethyl alcohol, add 4.2 mL conc. HCl, make up to 100 mL.</li>
                        <li><strong>Ethyl alcohol, 95%.</strong></li>
                    </ul>
                `,
                procedure: [
                    'To standards and samples in evaporating dishes, add 4 mL of Curcumin reagent.',
                    'Heat on water bath at 55°C for 80 min until dry.',
                    'Cool, dissolve residue in 10 mL ethyl alcohol.',
                    'Read absorbance at 540 nm and determine concentration using calibration curve.',
                ],
                calculation: 'Read boron concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'calcium',
                title: 'Calcium',
                intro: 'Determination of calcium using the EDTA titrimetric method.',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sodium hydroxide, NaOH, 1N.</strong></li>
                        <li><strong>Murexide (ammonium purpurate) indicator:</strong> Mix 200 mg of dye with 100 g of solid NaCl.</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> Dissolve 3.723 g of disodium salt of EDTA in distilled water and dilute to 1000 mL.</li>
                        <li><strong>Standard calcium solution:</strong> Dissolve 1.000 g of anhydrous CaCO₃ in 1+1 HCl and dilute to 1000 mL.</li>
                    </ul>
                `,
                procedure: [
                    'Take 50 mL sample, add 2 mL NaOH to produce pH of 12 to 13.',
                    'Add 0.1 to 0.2 g Murexide indicator.',
                    'Titrate with EDTA solution until the colour changes from pink to purple.',
                ],
                calculation: 'Calcium (mg/L) = (A &times; B &times; 400.8) / mL of sample<br/> <p class="text-xs mt-2">where A = mL of titrant for sample, B = mg CaCO₃ equivalent to 1 mL EDTA.</p>'
            },
            {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD measures the total amount of oxygen required to oxidize both organic and inorganic pollutants using a strong chemical oxidant (potassium dichromate). It provides faster results than BOD.',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Reflux flasks:</strong> 250 mL capacity, with 24/29 ground glass neck.</li>
                        <li><strong>Condensers:</strong> Leibig or equivalent.</li>
                        <li><strong>Hot plate or gas burner.</strong></li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard potassium dichromate solution, 0.0417M (0.25N):</strong> Dissolve 12.259 g K₂Cr₂O₇ to 1 L.</li>
                        <li><strong>Sulphuric acid reagent:</strong> Add 5.5 g Ag₂SO₄ per kg of conc. H₂SO₄.</li>
                        <li><strong>Ferroin indicator solution.</strong></li>
                        <li><strong>Standard ferrous ammonium sulphate (FAS), titrant, 0.25M:</strong> Dissolve 98 g Fe(NH₄)₂(SO₄)₂·6H₂O in 1 L solution.</li>
                        <li><strong>Mercuric Sulphate, HgSO₄, powder.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Take the sample in a digestion flask.',
                    'Add 1g HgSO₄, glass beads, and 5 mL sulfuric acid reagent, mix, cool.',
                    'Add 25 mL potassium dichromate solution and mix.',
                    'Connect condenser, and add an additional 70 mL of sulfuric acid reagent through the open end of condenser.',
                    'Reflux for 2 hours; cool, wash down condenser and double the volume.',
                    'Add ferroin indicator, and titrate with FAS until color change from bluish green to reddish brown.',
                    'Also perform a blank titration.',
                ],
                calculation: 'COD (mg/L) = [ (A - B) &times; M &times; 8000 ] / mL of sample<br/><p class="text-xs mt-2">where A = mL of FAS for blank, B = mL of FAS for sample, M = Molarity of FAS.</p>'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions are naturally present in water but high concentrations can indicate pollution from industrial wastes or sewage. The test is performed using Mohr\'s method.',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Potassium chromate indicator solution.</strong></li>
                        <li><strong>Standard silver nitrate titrant, 0.0141N:</strong> Dissolve 2.395 g AgNO₃ to 1 L.</li>
                        <li><strong>Standard sodium chloride, 0.0141N:</strong> Dissolve 824.0 mg NaCl to 1 L.</li>
                    </ul>
                `,
                procedure: [
                    'Use a 100 mL sample or a suitable portion diluted to 100 mL.',
                    'Add 1 mL K₂CrO₄ indicator, titrate with AgNO₃ titrant to a pinkish yellow end point.',
                    'Also perform a blank titration.',
                ],
                calculation: 'Chloride (mg/L) = [ (A - B) &times; N &times; 35450 ] / mL of sample<br/><p class="text-xs mt-2">where A = mL titration for sample, B = mL titration for blank, N = normality of AgNO₃.</p>'
            },
            {
                id: 'hardness',
                title: 'Total Hardness',
                intro: 'Water hardness is mainly due to calcium and magnesium ions. It is tested using the EDTA titration method.',
                 apparatus: '<p>Standard laboratory glassware.</p>',
                 reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution:</strong> Dissolve 16.9 g NH₄Cl in 143 mL conc. NH₄OH. Add 1.25 g magnesium salt of EDTA and dilute to 250 mL.</li>
                        <li><strong>Indicator:</strong> Eriochrome Black T sodium salt.</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> Dissolve 3.723 g of disodium salt of EDTA in distilled water and dilute to 1000 mL.</li>
                        <li><strong>Standard Calcium Solution:</strong> Dissolve 1.000 g CaCO₃ in HCl and dilute to 1000 mL.</li>
                    </ul>
                `,
                procedure: [
                    'Dilute 25 mL sample to 50 mL with distilled water.',
                    'Add 1 to 2 mL buffer solution to give a pH of 10.0 to 10.1.',
                    'Add 1 to 2 drops of indicator solution and titrate with EDTA titrant to change in colour from reddish tinge to blue.',
                ],
                calculation: 'Total Hardness (as mg/L CaCO₃) = (A &times; B &times; 1000) / mL of sample<br/><p class="text-xs mt-2">where A = mL EDTA titrated for sample, B = mg CaCO₃ equivalent to 1.00 mL EDTA titrant.</p>'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen is essential for aquatic life and is a key indicator of water quality. It is tested using the Winkler method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>DO sampler.</li><li>BOD bottles, 300 mL.</li></ul>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Manganous sulphate solution:</strong> Dissolve 480 g MnSO₄·4H₂O to 1 L.</li>
                        <li><strong>Alkali-iodide-azide reagent:</strong> Dissolve 500 g NaOH, 135 g NaI, and 10 g NaN₃ to 1 L.</li>
                        <li><strong>Sulphuric acid, conc.</strong></li>
                        <li><strong>Starch indicator.</strong></li>
                        <li><strong>Standard sodium thiosulphate titrant, 0.025N:</strong> Dissolve 6.205 g Na₂S₂O₃·5H₂O to 1 L.</li>
                    </ul>
                `,
                procedure: [
                    'Carefully fill a 300 mL BOD bottle with water, avoiding air bubbles.',
                    'Add 2 mL of <strong>manganese sulfate solution</strong>, then 2 mL of <strong>alkali-iodide-azide reagent</strong>. Stopper and mix.',
                    'Allow the precipitate to settle.',
                    'Add 2 mL of <strong>concentrated sulfuric acid</strong> and mix until completely dissolved.',
                    'Titrate a specific volume (e.g., 201 mL) with standard <strong>sodium thiosulfate (0.025N)</strong> until a pale straw color remains.',
                    'Add 1-2 mL of <strong>starch indicator</strong> (the solution will turn blue).',
                    'Continue titrating until the blue color disappears completely. Note the volume.',
                ],
                calculation: 'DO (mg/L) = (V of Titrant &times; Molarity of Titrant &times; 8000) / 200'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'Potentiometric method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>pH meter with temperature compensation.</li><li>Reference and Glass electrodes.</li></ul>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solutions:</strong> Commercially available or prepared for pH 4.00, 6.86, and 9.18.</li>
                    </ul>
                `,
                procedure: [
                  'Calibrate pH meter using two buffer solutions (typically pH 4 and 7) according to manufacturer’s instructions.',
                  'Rinse electrodes with distilled water, blot dry, and immerse in the sample.',
                  'Read the pH after equilibrium is established.',
                ],
                calculation: 'Read directly from the meter.'
            },
             {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS is the total amount of all dissolved organic and inorganic solids in water. It is tested using the gravimetric method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Evaporating dishes.</li><li>Drying oven, 180±2°C.</li><li>Desiccator.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>Not required.</p>',
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
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Glass-fibre filter disk.</li><li>Filtration apparatus.</li><li>Drying oven, 103–105°C.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>Not required.</p>',
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

