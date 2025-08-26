export const paneerProcessingContent = {
    hi: {
        mainTitle: "औद्योगिक पनीर उत्पादन",
        description: "प्रक्रिया, उपज और गुणवत्ता नियंत्रण 🧀",
        backToTopics: "विषयों पर वापस जाएं",
        tabs: {
            process: "प्रक्रिया",
            quality_control: "गुणवत्ता नियंत्रण",
            coagulants: "कोएगुलेंट",
            yield_texture: "उपज और बनावट"
        },
        topics: {
            process: {
                title: "चरण-दर-चरण उत्पादन प्रक्रिया",
                description: "निम्नलिखित तालिका औद्योगिक पैमाने पर पनीर के निर्माण के लिए मानकीकृत प्रक्रिया की रूपरेखा प्रस्तुत करती है।",
                table: {
                    headers: ["चरण संख्या", "प्रक्रिया चरण", "मुख्य पैरामीटर और प्रक्रिया"],
                    rows: [
                        { step: 1, stage: "दूध मानकीकरण", params: "दूध को एक विशिष्ट वसा-से-एसएनएफ अनुपात में मानकीकृत किया जाता है, आमतौर पर वसा की मात्रा को <strong>5.8-6.0%</strong> पर समायोजित करके ताकि लगातार उत्पाद की गुणवत्ता सुनिश्चित हो सके।" },
                        { step: 2, stage: "तापन", params: "मानकीकृत दूध को <strong>85-90°C</strong> तक गर्म किया जाता है और 5-10 मिनट तक रखा जाता है। यह कदम रोगजनक जीवाणुओं को मारता है और मट्ठा प्रोटीन को विकृत करता है, जिससे अंतिम उपज बढ़ जाती है।" },
                        { step: 3, stage: "जमावट (Coagulation)", params: "दूध को <strong>70-75°C</strong> के जमावट तापमान तक ठंडा किया जाता है। एक कोएगुलेंट (आमतौर पर 1-2% गर्म साइट्रिक एसिड घोल या खट्टा मट्ठा) धीरे-धीरे धीरे-धीरे हिलाते हुए मिलाया जाता है जब तक कि साफ मट्ठा अलग न हो जाए।" },
                        { step: 4, stage: "मट्ठा निकालना", params: "जमे हुए द्रव्यमान (दही) को 5-10 मिनट के लिए जमने दिया जाता है। बाद में, तरल मट्ठा को सावधानी से निकाल दिया जाता है, जिससे ठोस पनीर दही पीछे रह जाता है।" },
                        { step: 5, stage: "हूपिंग और प्रेसिंग", params: "गर्म दही को मलमल के कपड़े से ढके स्टेनलेस स्टील के हूप्स (सांचों) में स्थानांतरित किया जाता है। दही को फिर यांत्रिक या वायवीय प्रेस का उपयोग करके <strong>2-3 किग्रा/सेमी²</strong> के दबाव पर <strong>15-20 मिनट</strong> के लिए दबाया जाता है।" },
                        { step: 6, stage: "चिलिंग", params: "दबाने के बाद, पनीर के ठोस ब्लॉक को हूप्स से हटा दिया जाता है और 2-3 घंटे के लिए ठंडे पानी (<strong>4-6°C</strong>) में डुबोया जाता है। यह बनावट को मजबूत करता है और शेल्फ जीवन में सुधार करता है।" },
                        { step: 7, stage: "काटना और पैकेजिंग", params: "ठंडे पनीर ब्लॉक को वांछित आकार और आकार में काटा जाता है। फिर इसे ताजगी बनाए रखने और माइक्रोबियल विकास को रोकने के लिए वैक्यूम-पैक या नमकीन पानी के साथ पाउच में पैक किया जाता है। अंतिम उत्पाद को प्रशीतन तापमान (<5°C) पर संग्रहीत किया जाता है।" },
                    ]
                }
            },
            quality_control: {
                title: "कच्चा माल और गुणवत्ता नियंत्रण",
                description: "पनीर की गुणवत्ता सीधे आने वाले दूध की गुणवत्ता पर निर्भर करती है। डेयरी उद्योग सेटिंग में, दूध को प्रसंस्करण के लिए स्वीकार किए जाने से पहले महत्वपूर्ण मापदंडों के लिए पहले परीक्षण किया जाता है।",
                table: {
                    headers: ["पैरामीटर", "आदर्श सीमा (भैंस का दूध)", "आदर्श सीमा (गाय का दूध)", "महत्व"],
                    rows: [
                        { param: "वसा सामग्री", buffalo: "5.5% - 6.5%", cow: "3.5% - 4.5%", importance: "पनीर की अंतिम उपज और बनावट को सीधे प्रभावित करता है।" },
                        { param: "एसएनएफ (ठोस-गैर-वसा)", buffalo: "~9.0%", cow: "~8.5%", importance: "संरचना और दृढ़ता में योगदान देता है।" },
                        { param: "अम्लता (% लैक्टिक एसिड)", buffalo: "0.14 - 0.16%", cow: "0.13 - 0.14%", importance: "ताजा दूध आवश्यक है। उच्च अम्लता खराब बनावट और कम उपज की ओर ले जाती है।" },
                    ]
                }
            },
            coagulants: {
                title: "कोएगुलेंट: प्रकार और उपयोग",
                description: "कोएगुलेंट का चुनाव पनीर की बनावट, स्वाद और उपज को प्रभावित करता है।",
                types: [
                    { name: "साइट्रिक एसिड", details: "<strong>तैयारी:</strong> 1-2% घोल (1 लीटर 70°C पर गर्म पानी में 10-20 ग्राम साइट्रिक एसिड पाउडर)।<br/><strong>उपयोग:</strong> सबसे आम औद्योगिक कोएगुलेंट। एक साफ, अम्लीय स्वाद और लगातार परिणाम प्रदान करता है। साफ मट्ठा अलग होने तक धीरे-धीरे हिलाते हुए गर्म दूध (70-75°C) में धीरे-धीरे डालें। अधिक मिलाने से पनीर खट्टा हो सकता है।" },
                    { name: "एसिटिक एसिड (सिरका)", details: "<strong>तैयारी:</strong> 1-2% घोल (1 लीटर गर्म पानी में 10-20 मिलीलीटर खाद्य-ग्रेड सफेद सिरका)।<br/><strong>उपयोग:</strong> एक व्यापक रूप से उपलब्ध और प्रभावी कोएगुलेंट। यह कभी-कभी एक हल्का तीखा या सिरके जैसा स्वाद दे सकता है, यही वजह है कि अधिक तटस्थ स्वाद प्रोफ़ाइल के लिए अक्सर साइट्रिक एसिड को प्राथमिकता दी जाती है। साइट्रिक एसिड घोल के समान तरीके से उपयोग करें।" },
                    { name: "खट्टा मट्ठा", details: "<strong>तैयारी:</strong> पिछली खेप से मट्ठा का उपयोग करें, जिसे प्राकृतिक अम्लता (0.8-0.9% लैक्टिक एसिड) विकसित करने की अनुमति है।<br/><strong>उपयोग:</strong> एक पारंपरिक और किफायती तरीका। अक्सर एक नरम, अधिक पारंपरिक स्वाद वाले पनीर का परिणाम होता है। साइट्रिक एसिड की तुलना में कम सुसंगत हो सकता है।" },
                    { name: "कैल्शियम क्लोराइड", details: "<strong>तैयारी:</strong> अक्सर एसिड कोएगुलेंट से *पहले* दूध में जोड़ा जाता है।<br/><strong>उपयोग:</strong> एक प्राथमिक कोएगुलेंट नहीं है, लेकिन दूध (विशेषकर गाय का दूध या पाश्चुरीकृत दूध) में जमावट गुणों और दही की दृढ़ता में सुधार करने के लिए जोड़ा जाता है, जो नमी प्रतिधारण में सुधार करके उपज को थोड़ा बढ़ा सकता है।" }
                ]
            },
            yield_texture: {
                title: "उपज और बनावट",
                yield: {
                    title: "पनीर की उपज कैसे बढ़ाएं",
                    description: "उपज को अधिकतम करना लाभप्रदता की कुंजी है। यहां सबसे प्रभावी तरीके दिए गए हैं:",
                    methods: [
                        "<strong>इष्टतम तापन:</strong> दूध को 85-90°C तक गर्म करने से मट्ठा प्रोटीन (जैसे β-लैक्टोग्लोबुलिन और α-लैक्टलब्यूमिन) विकृत हो जाते हैं। ये प्रोटीन फिर जमावट के दौरान कैसिइन दही में फंस जाते हैं, जिससे कुल ठोस वसूली बढ़ जाती है और इस प्रकार उपज बढ़ जाती है।",
                        "<strong>सही जमावट पीएच:</strong> पनीर जमावट के लिए आदर्श पीएच लगभग 5.2 है। इस पीएच तक पहुंचने के लिए कोएगुलेंट को सही ढंग से जोड़ने से अधिकतम प्रोटीन वर्षा सुनिश्चित होती है बिना पनीर को बहुत अम्लीय बनाए, जिससे यह नमी और उपज खो देगा।",
                        "<strong>कोमल हिलाना:</strong> जमावट के दौरान बहुत जोर से हिलाने से दही महीन कणों में टूट जाता है, जो फिर मट्ठा में खो जाते हैं। कोमल, धीमा हिलाना एक दृढ़, समेकित दही द्रव्यमान बनाने में मदद करता है।",
                        "<strong>नियंत्रित प्रेसिंग:</strong> सही दबाव (2-3 किग्रा/सेमी²) को सही समय (15-20 मिनट) के लिए लागू करना महत्वपूर्ण है। अधिक प्रेस करने से बहुत अधिक नमी और वसा निकल जाती है, जिससे उपज कम हो जाती है और एक कठोर पनीर बनता है। कम प्रेस करने से बहुत अधिक नमी वाला उत्पाद बनता है, जिसका शेल्फ जीवन कम होता है।"
                    ]
                },
                safeIncreasers: {
                    title: "उपभोग के लिए सुरक्षित उपज बढ़ाने वाले",
                    description: "पनीर की उपज को सुरक्षित रूप से बढ़ाने और बनावट में सुधार करने के लिए कुछ योजक का उपयोग किया जा सकता है।",
                    wpc_info: "<strong>मट्ठा प्रोटीन कॉन्सेंट्रेट (WPC):</strong> गर्म करने से पहले दूध में WPC पाउडर मिलाना प्रोटीन सामग्री को बढ़ावा देने के लिए एक आधुनिक तकनीक है। यह सीधे जमावट के लिए उपलब्ध ठोस पदार्थों की मात्रा को बढ़ाता है, जिससे उच्च उपज और एक नरम, अधिक पौष्टिक पनीर बनता है। यह उद्योग में एक आम और सुरक्षित प्रथा है।"
                },
                texture: {
                    title: "पनीर की बनावट समझाया: कठोर, नरम, और भुरभुरा",
                    description: "पनीर की अंतिम बनावट उत्पादन प्रक्रिया के दौरान कई कारकों का परिणाम है।",
                    table: {
                        headers: ["बनावट", "प्राथमिक कारण", "परिणाम"],
                        rows: [
                            { texture: "कठोर / रबर जैसा", colorClass: "text-red-600", causes: "दूध में कम वसा सामग्री, अधिक प्रेसिंग, उच्च जमावट तापमान, अत्यधिक खाना पकाना।", result: "चबाने वाला, सूखा, और स्वादों को अच्छी तरह से अवशोषित नहीं करता है। कम नमी सामग्री।" },
                            { texture: "नरम / स्पंजी (आदर्श)", colorClass: "text-green-600", causes: "मानकीकृत दूध (6% वसा), सही जमावट तापमान (70-75°C), नियंत्रित प्रेसिंग, उचित चिलिंग।", result: "अपना आकार बनाए रखता है, एक चिकना काटने वाला होता है, और ग्रेवी को अवशोषित करता है। यह उच्च गुणवत्ता वाले पनीर के लिए वांछित बनावट है।" },
                            { texture: "भुरभुरा / टुकड़े-टुकड़े", colorClass: "text-yellow-600", causes: "दूध में उच्च अम्लता, बहुत कम तापमान पर जमावट, अपर्याप्त प्रेसिंग।", result: "आसानी से टूट जाता है, क्यूब्स में काटना मुश्किल होता है, बहुत अम्लीय स्वाद हो सकता है।" }
                        ]
                    }
                }
            }
        }
    },
    en: {
        mainTitle: "Industrial Paneer Production",
        description: "Process, Yield & Quality Control 🧀",
        backToTopics: "Back to Topics",
        tabs: {
            process: "Process",
            quality_control: "Quality Control",
            coagulants: "Coagulants",
            yield_texture: "Yield & Texture"
        },
        topics: {
            process: {
                title: "Step-by-Step Production Process",
                description: "The following table outlines the standardized procedure for manufacturing paneer at an industrial scale.",
                table: {
                    headers: ["Step No.", "Process Stage", "Key Parameters & Procedure"],
                    rows: [
                        { step: 1, stage: "Milk Standardization", params: "Milk is standardized to a specific Fat-to-SNF ratio, typically by adjusting the fat content to <strong>5.8-6.0%</strong> for consistent product quality." },
                        { step: 2, stage: "Heating", params: "The standardized milk is heated to <strong>85-90°C</strong> and held for 5-10 minutes. This step kills pathogenic bacteria and denatures whey proteins, which increases the final yield." },
                        { step: 3, stage: "Coagulation", params: "The milk is cooled to the coagulation temperature of <strong>70-75°C</strong>. A coagulant (typically 1-2% hot citric acid solution or sour whey) is slowly added while gently stirring until clear whey separates." },
                        { step: 4, stage: "Draining the Whey", params: "The coagulated mass (curd) is allowed to settle for 5-10 minutes. Afterwards, the liquid whey is carefully drained off, leaving the solid paneer curd behind." },
                        { step: 5, stage: "Hooping & Pressing", params: "The hot curd is transferred into stainless steel hoops (molds) lined with muslin cloth. The curd is then pressed using mechanical or pneumatic presses at a pressure of <strong>2-3 kg/cm² for 15-20 minutes</strong>." },
                        { step: 6, stage: "Chilling", params: "After pressing, the solid block of paneer is removed from the hoops and immersed in chilled water (<strong>4-6°C</strong>) for 2-3 hours. This firms up the texture and improves shelf life." },
                        { step: 7, stage: "Cutting & Packaging", params: "The chilled paneer block is cut into desired sizes and shapes. It is then vacuum-packed or packed in pouches with brine to maintain freshness and prevent microbial growth. The final product is stored at refrigeration temperatures (< 5°C)." },
                    ]
                }
            },
            quality_control: {
                title: "Raw Material & Quality Control",
                description: "The quality of paneer is directly dependent on the quality of the incoming milk. In a dairy industry setting, milk is first tested for critical parameters before being accepted for processing.",
                table: {
                    headers: ["Parameter", "Ideal Range (Buffalo Milk)", "Ideal Range (Cow Milk)", "Importance"],
                    rows: [
                        { param: "Fat Content", buffalo: "5.5% - 6.5%", cow: "3.5% - 4.5%", importance: "Directly impacts the final yield and texture of the paneer." },
                        { param: "SNF (Solids-Not-Fat)", buffalo: "~9.0%", cow: "~8.5%", importance: "Contributes to the structure and firmness." },
                        { param: "Acidity (% Lactic Acid)", buffalo: "0.14 - 0.16%", cow: "0.13 - 0.14%", importance: "Fresh milk is required. High acidity leads to poor texture and low yield." },
                    ]
                }
            },
            coagulants: {
                title: "Coagulants: Types and Usage",
                description: "The choice of coagulant affects the texture, flavor, and yield of the paneer.",
                types: [
                    { name: "Citric Acid", details: "<strong>Preparation:</strong> 1-2% solution (10-20g of citric acid powder in 1 litre of hot water at 70°C).<br/><strong>Usage:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results. Add slowly to hot milk (70-75°C) with gentle stirring until clear whey separates. Over-addition can make paneer sour." },
                    { name: "Acetic Acid (Vinegar)", details: "<strong>Preparation:</strong> 1-2% solution (10-20ml of food-grade white vinegar in 1 litre of hot water).<br/><strong>Usage:</strong> A widely available and effective coagulant. It can sometimes impart a slight pungent or vinegar-like flavor, which is why citric acid is often preferred for a more neutral taste profile. Use in the same manner as citric acid solution." },
                    { name: "Sour Whey", details: "<strong>Preparation:</strong> Use whey from a previous batch, allowed to develop natural acidity (0.8-0.9% lactic acid).<br/><strong>Usage:</strong> A traditional and economical method. Often results in a softer, more traditional-flavored paneer. Can be less consistent than citric acid." },
                    { name: "Calcium Chloride", details: "<strong>Preparation:</strong> Often added to milk *before* the acid coagulant.<br/><strong>Usage:</strong> Not a primary coagulant, but added to milk (especially cow milk or pasteurized milk) to improve the coagulation properties and firmness of the curd, which can slightly increase yield by improving moisture retention." }
                ]
            },
            yield_texture: {
                title: "Yield & Texture",
                yield: {
                    title: "How to Increase Paneer Yield",
                    description: "Maximizing yield is key to profitability. Here are the most effective methods:",
                    methods: [
                        "<strong>Optimal Heating:</strong> Heating milk to 85-90°C denatures whey proteins (like β-lactoglobulin and α-lactalbumin). These proteins then get trapped in the casein curd during coagulation, increasing the total solid recovery and thus the yield.",
                        "<strong>Correct Coagulation pH:</strong> The ideal pH for paneer coagulation is around 5.2. Adding the coagulant correctly to reach this pH ensures maximum protein precipitation without making the paneer too acidic, which would cause it to lose moisture and yield.",
                        "<strong>Gentle Stirring:</strong> Stirring too vigorously during coagulation breaks the curd into fine particles, which are then lost in the whey. Gentle, slow stirring helps form a firm, consolidated curd mass.",
                        "<strong>Controlled Pressing:</strong> Applying the correct pressure (2-3 kg/cm²) for the right amount of time (15-20 mins) is crucial. Over-pressing squeezes out too much moisture and fat, reducing yield and creating a hard paneer. Under-pressing results in a product with too much moisture, which has a shorter shelf life."
                    ]
                },
                safeIncreasers: {
                    title: "Safe Yield Increasers for Consumption",
                    description: "Certain additives can be used to safely increase the yield and improve the texture of paneer.",
                    wpc_info: "<strong>Whey Protein Concentrate (WPC):</strong> Adding WPC powder to milk before heating is a modern technique to boost the protein content. This directly increases the amount of solids available for coagulation, leading to a higher yield and a softer, more nutritious paneer. This is a common and safe practice in the industry."
                },
                texture: {
                    title: "Paneer Texture Explained: Hard, Soft, and Fluffy",
                    description: "The final texture of paneer is a result of several factors throughout the production process.",
                    table: {
                        headers: ["Texture", "Primary Causes", "Result"],
                        rows: [
                            { texture: "Hard / Rubbery", colorClass: "text-red-600", causes: "Low fat content in milk, over-pressing, high coagulation temperature, excessive cooking.", result: "Chewy, dry, and does not absorb flavors well. Low moisture content." },
                            { texture: "Soft / Spongy (Ideal)", colorClass: "text-green-600", causes: "Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing, proper chilling.", result: "Holds its shape, has a smooth bite, and absorbs gravies. This is the desired texture for high-quality paneer." },
                            { texture: "Fluffy / Crumbly", colorClass: "text-yellow-600", causes: "High acidity in milk, coagulation at too low a temperature, insufficient pressing.", result: "Breaks apart easily, difficult to cut into cubes, may taste overly acidic." }
                        ]
                    }
                }
            }
        }
    }
};
