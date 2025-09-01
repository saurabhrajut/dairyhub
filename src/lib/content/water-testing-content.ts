

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
                    'उसी घोल में 2-3 बूंदें <strong>मिथाइल ऑरेंज इंडिकेटर</strong> डालें।',
                    'मानक अम्ल घोल से अनुमापन जारी रखें जब तक कि रंग पीले से नारंगी/लाल न हो जाए। उपयोग किए गए अम्ल का कुल आयतन (T) नोट करें।',
                ],
                calculation: 'कुल क्षारीयता (mg/L CaCO₃ के रूप में) = (T &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'BOD 20°C पर 5 दिनों में पानी के नमूने में कार्बनिक पदार्थों को विघटित करने में सूक्ष्मजीवों द्वारा खपत की गई ऑक्सीजन की मात्रा को मापता है। यह पानी के प्रदूषण स्तर का एक महत्वपूर्ण संकेतक है।',
                procedure: [
                    'BOD तनुकरण पानी का उपयोग करके पानी के नमूने के विभिन्न तनुकरण तैयार करें।',
                    'प्रत्येक तनुकरण के लिए दो BOD बोतलें भरें: एक प्रारंभिक DO के लिए और एक ऊष्मायन के लिए।',
                    'पहली बोतल में तुरंत घुलित ऑक्सीजन (DO₁) मापें (विंकलर विधि द्वारा)।',
                    'दूसरी बोतलों के सेट को 5 दिनों के लिए 20°C पर अंधेरे में ऊष्मायन करें।',
                    '5 दिनों के बाद, दूसरी बोतलों के सेट में अंतिम घुलित ऑक्सीजन (DO₅) मापें।',
                    'एक रिक्त नमूने (केवल तनुकरण पानी) के लिए भी यही प्रक्रिया दोहराएं ताकि इसके प्रारंभिक (B₁) और अंतिम (B₅) DO मान मिल सकें।',
                ],
                calculation: 'BOD₅ (mg/L) = [ (DO₁ - DO₅) - (B₁ - B₅) ] &times; तनुकरण कारक'
            },
            {
                id: 'chloride',
                title: 'Chloride',
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
                    'Add 2-3 drops of <strong>methyl orange indicator</strong> to the same solution.',
                    'Continue titrating with the standard acid solution until the color changes from yellow to orange/red. Note the total volume of acid used (T).',
                ],
                calculation: 'Total Alkalinity (mg/L as CaCO₃) = (T &times; Normality of Acid &times; 50000) / Volume of Sample (mL)'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'BOD measures the amount of oxygen consumed by microorganisms to decompose organic matter in a water sample over 5 days at 20°C. It is a crucial indicator of water pollution.',
                procedure: [
                    'Prepare various dilutions of the water sample using BOD dilution water.',
                    'Fill two BOD bottles for each dilution: one for initial DO and one for incubation.',
                    'Measure the Initial Dissolved Oxygen (DO₁) in the first bottle immediately (using Winkler method).',
                    'Incubate the second set of bottles in the dark at 20°C for 5 days.',
                    'After 5 days, measure the Final Dissolved Oxygen (DO₅) in the second set of bottles.',
                    'Repeat the same process for a blank sample (only dilution water) to find its initial (B₁) and final (B₅) DO values.',
                ],
                calculation: 'BOD₅ (mg/L) = [ (DO₁ - DO₅) - (B₁ - B₅) ] &times; Dilution Factor'
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
