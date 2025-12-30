
export const hplcContent = {
    hi: {
        mainTitle: "High-Performance Liquid Chromatography (HPLC)",
        description: "डेयरी उद्योग में HPLC के सिद्धांत, अनुप्रयोग और महत्व को समझना।",
        introduction: {
            title: "HPLC का परिचय",
            content: "<p>HPLC (High-Performance Liquid Chromatography) एक शक्तिशाली विश्लेषणात्मक तकनीक है जिसका उपयोग किसी मिश्रण में प्रत्येक घटक को अलग करने, पहचानने और उसकी मात्रा निर्धारित करने के लिए किया जाता है। यह डेयरी उद्योग में खाद्य सुरक्षा, गुणवत्ता नियंत्रण और पोषण संबंधी विश्लेषण के लिए एक अनिवार्य उपकरण है, जो उन यौगिकों का पता लगाने और उनकी मात्रा निर्धारित करने की अनुमति देता है जो पारंपरिक तरीकों से मापना मुश्किल है।</p>"
        },
        principle: {
            title: "HPLC का सिद्धांत",
            content: `<p>HPLC क्रोमैटोग्राफी के मूल सिद्धांत पर काम करता है: एक मिश्रण के घटकों को दो चरणों के बीच उनके अंतर वितरण के आधार पर अलग किया जाता है:
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>मोबाइल चरण (Mobile Phase):</strong> एक उच्च दबाव वाला तरल विलायक (या विलायकों का मिश्रण) जो सिस्टम के माध्यम से लगातार बहता है।</li>
                <li><strong>स्थिर चरण (Stationary Phase):</strong> एक स्तंभ के भीतर पैक किए गए बहुत महीन, छिद्रपूर्ण कणों (आमतौर पर सिलिका-आधारित) से मिलकर बनता है।</li>
            </ul>
            <p class="mt-4">जब एक नमूना इंजेक्ट किया जाता है, तो मोबाइल चरण उसे स्तंभ के माध्यम से ले जाता है। नमूने में प्रत्येक घटक स्थिर चरण के साथ अलग-अलग तरह से इंटरैक्ट करता है। जिन घटकों की स्थिर चरण के प्रति अधिक आत्मीयता होती है, वे धीमी गति से चलते हैं, जबकि कम आत्मीयता वाले घटक तेजी से चलते हैं। यह अंतर गति मिश्रण को उसके व्यक्तिगत घटकों में अलग करने का कारण बनती है, जो तब एक डिटेक्टर द्वारा पता लगाए जाते हैं।</p>`
        },
        components: {
            title: "HPLC प्रणाली के प्रमुख घटक",
            content: `
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>सॉल्वेंट डिलीवरी सिस्टम (पंप):</strong> यह एक उच्च दबाव वाला पंप है जो एक स्थिर और सटीक प्रवाह दर पर मोबाइल चरण को स्तंभ के माध्यम से पहुंचाता है।</li>
                <li><strong>सैंपल इंजेक्टर:</strong> नमूने को उच्च दबाव वाले मोबाइल चरण प्रवाह में सटीक रूप से इंजेक्ट करता है।</li>
                <li><strong>कॉलम:</strong> HPLC प्रणाली का दिल, यह स्थिर चरण कणों से भरा होता है जहाँ पृथक्करण होता है। कॉलम का प्रकार (जैसे, C18, C8) विश्लेषण किए जा रहे यौगिकों के आधार पर चुना जाता है।</li>
                <li><strong>डिटेक्टर:</strong> स्तंभ से निकलने वाले अलग-अलग घटकों का पता लगाता है। सामान्य डिटेक्टरों में शामिल हैं:
                    <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                        <li><strong>UV-Vis डिटेक्टर:</strong> उन यौगिकों का पता लगाता है जो UV या दृश्य प्रकाश को अवशोषित करते हैं।</li>
                        <li><strong>Fluorescence डिटेक्टर:</strong> फ्लोरोसेंट यौगिकों के लिए अत्यधिक संवेदनशील।</li>
                        <li><strong>Refractive Index (RI) डिटेक्टर:</strong> लगभग सभी यौगिकों का पता लगाता है लेकिन कम संवेदनशील होता है।</li>
                        <li><strong>Mass Spectrometer (LC-MS):</strong> यौगिकों की पहचान और मात्रा निर्धारित करने के लिए आणविक भार के आधार पर अत्यधिक विशिष्ट और संवेदनशील पहचान प्रदान करता है।</li>
                    </ul>
                </li>
                 <li><strong>डेटा अधिग्रहण प्रणाली:</strong> डिटेक्टर से सिग्नल को संसाधित करती है और एक क्रोमैटोग्राम उत्पन्न करती है - समय के मुकाबले सिग्नल की तीव्रता का एक ग्राफ।</li>
            </ol>`
        },
        applications: {
            title: "डेयरी उद्योग में HPLC के अनुप्रयोग",
            content: `
            <ul class="list-disc list-outside pl-5 space-y-3">
                <li><strong>एफ्लाटॉक्सिन M1 विश्लेषण:</strong> एफ्लाटॉक्सिन बी1 के साथ दूषित पशु चारा खाने वाले जानवरों के दूध में पाया जाने वाला एक अत्यधिक कार्सिनोजेनिक माइकोटॉक्सिन। HPLC, विशेष रूप से एक प्रतिदीप्ति डिटेक्टर के साथ मिलकर, दूध में एफ्लाटॉक्सिन M1 के बहुत कम स्तरों का पता लगाने और उनकी मात्रा निर्धारित करने के लिए मानक विधि है, जो नियामक सीमाओं का अनुपालन सुनिश्चित करता है।</li>
                <li><strong>विटामिन विश्लेषण:</strong> दूध और शिशु फार्मूला में वसा में घुलनशील (A, D, E) और पानी में घुलनशील (B-समूह) दोनों विटामिनों की सटीक मात्रा निर्धारित करने के लिए उपयोग किया जाता है ताकि पोषण संबंधी लेबलिंग और फोर्टिफिकेशन स्तरों को सत्यापित किया जा सके।</li>
                <li><strong>चीनी प्रोफाइलिंग:</strong> लैक्टोज, ग्लूकोज, गैलेक्टोज और अन्य शर्करा को अलग और मात्रा निर्धारित करने के लिए। यह लैक्टोज-मुक्त उत्पादों की गुणवत्ता की जांच करने या किण्वन प्रक्रियाओं की निगरानी के लिए महत्वपूर्ण है।</li>
                <li><strong>एंटीबायोटिक अवशेषों का पता लगाना:</strong> दूध में विभिन्न प्रकार के एंटीबायोटिक अवशेषों (जैसे टेट्रासाइक्लिन, सल्फोनामाइड्स) का पता लगाने के लिए, यह सुनिश्चित करना कि यह मानव उपभोग के लिए सुरक्षित है।</li>
                <li><strong>कार्बनिक अम्ल विश्लेषण:</strong> किण्वित डेयरी उत्पादों जैसे दही और पनीर में लैक्टिक, साइट्रिक और एसिटिक एसिड जैसे कार्बनिक अम्लों की प्रोफाइलिंग करके स्वाद और गुणवत्ता का आकलन करने के लिए।</li>
            </ul>`
        },
        advantages: {
            title: "HPLC के लाभ",
            content: `
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>उच्च संवेदनशीलता:</strong> बहुत कम सांद्रता (प्रति मिलियन या प्रति बिलियन भागों) का पता लगा सकता है।</li>
                <li><strong>उच्च परिशुद्धता और सटीकता:</strong> मात्रात्मक विश्लेषण के लिए विश्वसनीय और प्रतिलिपि प्रस्तुत करने योग्य परिणाम प्रदान करता है।</li>
                <li><strong>बहुमुखी प्रतिभा:</strong> यौगिकों की एक विस्तृत श्रृंखला का विश्लेषण कर सकता है।</li>
                <li><strong>गैर-वाष्पशील यौगिकों के लिए उपयुक्त:</strong> गर्मी के प्रति संवेदनशील या गैर-वाष्पशील यौगिकों का विश्लेषण कर सकता है जिन्हें गैस क्रोमैटोग्राफी द्वारा विश्लेषण नहीं किया जा सकता है।</li>
            </ul>`
        }
    },
    en: {
        mainTitle: "High-Performance Liquid Chromatography (HPLC)",
        description: "Understanding the principles, applications, and importance of HPLC in the dairy industry.",
        introduction: {
            title: "Introduction to HPLC",
            content: "<p>HPLC (High-Performance Liquid Chromatography) is a powerful analytical technique used to separate, identify, and quantify each component in a mixture. It is an indispensable tool in the dairy industry for food safety, quality control, and nutritional analysis, allowing for the detection and quantification of compounds that are difficult to measure by conventional methods.</p>"
        },
        principle: {
            title: "Principle of HPLC",
            content: `<p>HPLC operates on the basic principle of chromatography: the separation of components of a mixture based on their differential distribution between two phases:
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Mobile Phase:</strong> A high-pressure liquid solvent (or mixture of solvents) that flows continuously through the system.</li>
                <li><strong>Stationary Phase:</strong> Consists of very fine, porous particles (typically silica-based) packed within a column.</li>
            </ul>
            <p class="mt-4">When a sample is injected, the mobile phase carries it through the column. Each component in the sample interacts differently with the stationary phase. Components with a higher affinity for the stationary phase move slower, while those with a lower affinity move faster. This differential movement causes the mixture to separate into its individual components, which are then detected by a detector.</p>`
        },
        components: {
            title: "Key Components of an HPLC System",
            content: `
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Solvent Delivery System (Pump):</strong> This is a high-pressure pump that delivers the mobile phase through the column at a constant and precise flow rate.</li>
                <li><strong>Sample Injector:</strong> Accurately injects the sample into the high-pressure mobile phase stream.</li>
                <li><strong>Column:</strong> The heart of the HPLC system, it is packed with the stationary phase particles where the separation occurs. The type of column (e.g., C18, C8) is chosen based on the compounds being analyzed.</li>
                <li><strong>Detector:</strong> Detects the separated components as they elute from the column. Common detectors include:
                    <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                        <li><strong>UV-Vis Detector:</strong> Detects compounds that absorb UV or visible light.</li>
                        <li><strong>Fluorescence Detector:</strong> Highly sensitive for fluorescent compounds.</li>
                        <li><strong>Refractive Index (RI) Detector:</strong> Detects almost all compounds but is less sensitive.</li>
                        <li><strong>Mass Spectrometer (LC-MS):</strong> Provides highly specific and sensitive detection based on molecular weight to identify and quantify compounds.</li>
                    </ul>
                </li>
                 <li><strong>Data Acquisition System:</strong> Processes the signal from the detector and generates a chromatogram - a graph of signal intensity versus time.</li>
            </ol>`
        },
        applications: {
            title: "Applications of HPLC in the Dairy Industry",
            content: `
            <ul class="list-disc list-outside pl-5 space-y-3">
                <li><strong>Aflatoxin M1 Analysis:</strong> A highly carcinogenic mycotoxin found in the milk of animals that have consumed feed contaminated with Aflatoxin B1. HPLC, especially coupled with a fluorescence detector, is the standard method for detecting and quantifying very low levels of Aflatoxin M1 in milk, ensuring compliance with regulatory limits.</li>
                <li><strong>Vitamin Analysis:</strong> Used to accurately quantify both fat-soluble (A, D, E) and water-soluble (B-group) vitamins in milk and infant formula to verify nutritional labeling and fortification levels.</li>
                <li><strong>Sugar Profiling:</strong> To separate and quantify lactose, glucose, galactose, and other sugars. This is critical for checking the quality of lactose-free products or monitoring fermentation processes.</li>
                <li><strong>Detection of Antibiotic Residues:</strong> For detecting various classes of antibiotic residues (e.g., tetracyclines, sulfonamides) in milk, ensuring it is safe for human consumption.</li>
                <li><strong>Organic Acid Analysis:</strong> To assess flavor and quality in fermented dairy products like yogurt and cheese by profiling organic acids such as lactic, citric, and acetic acid.</li>
            </ul>`
        },
        advantages: {
            title: "Advantages of HPLC",
            content: `
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>High Sensitivity:</strong> Can detect very low concentrations (parts per million or parts per billion).</li>
                <li><strong>High Precision and Accuracy:</strong> Provides reliable and reproducible results for quantitative analysis.</li>
                <li><strong>Versatility:</strong> Can analyze a wide range of compounds.</li>
                <li><strong>Suitable for Non-Volatile Compounds:</strong> Can analyze heat-sensitive or non-volatile compounds that cannot be analyzed by gas chromatography.</li>
            </ul>`
        }
    }
};
