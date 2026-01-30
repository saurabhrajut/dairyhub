export const evaporationContent = {
    en: {
        title: "Evaporation",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Evaporation in Dairy Processing</h3>
            <p>Evaporation is a crucial unit operation in the dairy industry used to concentrate milk or whey by removing water in the form of vapor. This process is the primary step in manufacturing products like condensed milk, evaporated milk, and milk powders. The main goal is to increase the total solids content of the liquid, which reduces transportation costs, increases shelf life (by reducing water activity), and prepares the product for subsequent processes like spray drying.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">The Principle of Vacuum Evaporation</h3>
            <p>Water boils at 100°C at normal atmospheric pressure. Heating milk to this temperature for an extended period would cause significant heat damage, including:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Cooked Flavor:</strong> Due to protein denaturation and Maillard reactions.</li>
                <li><strong>Browning:</strong> Caramelization of lactose.</li>
                <li><strong>Nutrient Loss:</strong> Destruction of heat-sensitive vitamins.</li>
            </ul>
            <p class="mt-2">To avoid this, dairy evaporation is almost always carried out under a <strong>vacuum</strong>. <strong>Scientific Reason:</strong> By reducing the pressure inside the evaporator, the boiling point of water is significantly lowered (e.g., to 40-70°C). This allows for rapid water removal at a much lower temperature, minimizing heat damage and preserving the quality and nutritional value of the milk concentrate.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Evaporators</h3>
            <h4 class="font-semibold mt-4 mb-2">1. Falling Film Evaporator</h4>
            <p>This is the most common type used in modern dairy plants due to its high efficiency and gentle heat treatment.</p>
            <p><strong>Working:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Milk is pumped to the top of a vertical bundle of long tubes (the calandria).</li>
                <li>It is distributed evenly to flow downwards as a thin film along the inner walls of the tubes.</li>
                <li>Steam heats the outside of the tubes. The heat is rapidly transferred through the tube wall to the thin milk film.</li>
                <li>The water in the milk film evaporates, and the resulting mixture of vapor and concentrated milk exits at the bottom of the tubes.</li>
                <li>The vapor is separated from the concentrate in a separator vessel.</li>
            </ol>
            <p><strong>Advantage:</strong> The milk is in contact with the hot surface for a very short time (a few seconds), which minimizes heat damage.</p>
            
            <h4 class="font-semibold mt-4 mb-2">2. Multi-Effect Evaporators</h4>
            <p>To improve energy efficiency, multiple evaporators (called 'effects') are connected in series. The vapor generated from the first effect, which is at a higher temperature and pressure, is used as the heating medium for the second effect, which operates at a lower pressure and temperature. This cascading use of vapor significantly reduces the total amount of steam required for the entire process.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Components of an Evaporation System</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Calandria:</strong> The heating section of the evaporator, consisting of tubes where heat exchange occurs.</li>
                <li><strong>Vapor Separator:</strong> A large chamber where the vapor is separated from the concentrated liquid.</li>
                <li><strong>Condenser:</strong> A heat exchanger that condenses the water vapor from the last effect, creating and maintaining the vacuum in the system.</li>
                <li><strong>Vacuum Pump:</strong> Removes non-condensable gases from the system to maintain the vacuum.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Boiling Point Elevation (BPE)</h3>
            <p>As milk concentration increases during evaporation, the boiling point of the solution rises above that of pure water at the same pressure. This phenomenon is called Boiling Point Elevation (BPE). It occurs because dissolved solids (lactose, minerals, proteins) reduce the vapor pressure of the solution.</p>
            <p><strong>Impact:</strong> BPE reduces the effective temperature difference between the heating steam and boiling milk, which can decrease evaporation efficiency. At 50% total solids, BPE can be 6-10°C, significantly affecting heat transfer rates.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Energy-Saving Technologies</h3>
            <h4 class="font-semibold mt-4 mb-2">Thermal Vapor Recompression (TVR)</h4>
            <p>A steam jet ejector uses high-pressure steam to compress low-pressure vapor from an effect, raising its temperature so it can be reused as heating steam. This improves steam economy significantly.</p>
            
            <h4 class="font-semibold mt-4 mb-2">Mechanical Vapor Recompression (MVR)</h4>
            <p>An electric compressor compresses the vapor from the evaporator, increasing its temperature and pressure. The compressed vapor is then used as the heating medium in the same evaporator. MVR systems can achieve very high energy efficiency, using only 25-45 kWh of electrical energy per ton of water evaporated compared to 600-800 kWh thermal equivalent for single-effect steam evaporation.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Applications in Dairy Products</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Condensed Milk:</strong> Concentrated to 2.0-2.3× with added sugar for preservation.</li>
                <li><strong>Evaporated Milk:</strong> Concentrated to ~2× and then sterilized in cans.</li>
                <li><strong>Milk Powder Production:</strong> Pre-concentration to 45-52% total solids before spray drying.</li>
                <li><strong>Whey Concentration:</strong> Concentrating whey before further processing or drying.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Operational Challenges and Solutions</h3>
            <h4 class="font-semibold mt-4 mb-2">Fouling</h4>
            <p>Protein and mineral deposits on heating surfaces reduce heat transfer efficiency. Types include:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Type A:</strong> Protein fouling at high temperatures (>70°C)</li>
                <li><strong>Type B:</strong> Mineral (calcium phosphate) fouling</li>
            </ul>
            <p><strong>Solutions:</strong> Temperature control, pH adjustment, regular CIP (Clean-in-Place) cycles with alkaline and acid washes.</p>

            <h4 class="font-semibold mt-4 mb-2">Maintaining Product Quality</h4>
            <p>Operating at low temperatures (50-70°C) under vacuum, using short residence times (10-60 seconds in falling film evaporators), and precise process control help preserve milk quality, minimize vitamin losses, and prevent off-flavors.</p>
        `
    },
    hi: {
        title: "वाष्पीकरण (Evaporation)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">डेयरी प्रसंस्करण में वाष्पीकरण का परिचय</h3>
            <p>वाष्पीकरण डेयरी उद्योग में एक महत्वपूर्ण इकाई संचालन है जिसका उपयोग वाष्प के रूप में पानी निकालकर दूध या मट्ठा को केंद्रित करने के लिए किया जाता है। यह प्रक्रिया संघनित दूध (condensed milk), वाष्पित दूध (evaporated milk) और दूध पाउडर (milk powder) जैसे उत्पादों के निर्माण में प्राथमिक कदम है। मुख्य लक्ष्य तरल के कुल ठोस सामग्री (total solids) को बढ़ाना है, जो परिवहन लागत को कम करता है, शेल्फ जीवन को बढ़ाता है (जल गतिविधि को कम करके), और उत्पाद को स्प्रे सुखाने (spray drying) जैसी बाद की प्रक्रियाओं के लिए तैयार करता है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">वैक्यूम वाष्पीकरण का सिद्धांत</h3>
            <p>सामान्य वायुमंडलीय दबाव (atmospheric pressure) पर पानी 100°C पर उबलता है। दूध को इस तापमान पर लंबे समय तक गर्म करने से महत्वपूर्ण गर्मी क्षति (heat damage) होगी, जिसमें शामिल हैं:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>पका हुआ स्वाद (Cooked Flavor):</strong> प्रोटीन विकृतीकरण (protein denaturation) और मैलार्ड प्रतिक्रियाओं (Maillard reactions) के कारण।</li>
                <li><strong>भूरापन (Browning):</strong> लैक्टोज का कैरामलीकरण (caramelization of lactose)।</li>
                <li><strong>पोषक तत्वों की हानि (Nutrient Loss):</strong> गर्मी के प्रति संवेदनशील विटामिनों (heat-sensitive vitamins) का विनाश।</li>
            </ul>
            <p class="mt-2">इससे बचने के लिए, डेयरी वाष्पीकरण लगभग हमेशा एक <strong>वैक्यूम (vacuum)</strong> के तहत किया जाता है। <strong>वैज्ञानिक कारण:</strong> वाष्पीकरणकर्ता (evaporator) के अंदर दबाव कम करके, पानी का क्वथनांक (boiling point) काफी कम हो जाता है (उदाहरण के लिए, 40-70°C तक)। यह बहुत कम तापमान पर तेजी से पानी हटाने की अनुमति देता है, जिससे गर्मी से होने वाले नुकसान को कम किया जा सकता है और दूध के सांद्रण (concentrate) की गुणवत्ता और पोषण मूल्य (nutritional value) को संरक्षित किया जा सकता है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">वाष्पीकरणकर्ताओं के प्रकार (Types of Evaporators)</h3>
            <h4 class="font-semibold mt-4 mb-2">1. फॉलिंग फिल्म इवापोरेटर (Falling Film Evaporator)</h4>
            <p>यह अपनी उच्च दक्षता (high efficiency) और कोमल गर्मी उपचार (gentle heat treatment) के कारण आधुनिक डेयरी संयंत्रों में सबसे आम प्रकार है।</p>
            <p><strong>कार्यप्रणाली (Working):</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>दूध को लंबी ऊर्ध्वाधर ट्यूबों (vertical tubes) के एक बंडल के शीर्ष पर पंप किया जाता है जिसे कैलेंड्रिया (calandria) कहते हैं।</li>
                <li>इसे ट्यूबों की आंतरिक दीवारों (inner walls) के साथ एक पतली फिल्म (thin film) के रूप में नीचे की ओर बहने के लिए समान रूप से वितरित (distributed) किया जाता है।</li>
                <li>भाप (steam) ट्यूबों के बाहर को गर्म करती है। गर्मी (heat) ट्यूब की दीवार के माध्यम से पतली दूध फिल्म में तेजी से स्थानांतरित (transferred) होती है।</li>
                <li>दूध की फिल्म में पानी वाष्पित (evaporate) हो जाता है, और वाष्प और केंद्रित दूध (concentrated milk) का परिणामी मिश्रण (mixture) ट्यूबों के नीचे से बाहर निकलता है।</li>
                <li>वाष्प (vapor) को एक विभाजक पोत (separator vessel) में सांद्रण (concentrate) से अलग किया जाता है।</li>
            </ol>
            <p><strong>लाभ (Advantage):</strong> दूध बहुत कम समय (कुछ सेकंड) के लिए गर्म सतह (hot surface) के संपर्क में रहता है, जो गर्मी से होने वाले नुकसान (heat damage) को कम करता है।</p>
            
            <h4 class="font-semibold mt-4 mb-2">2. मल्टी-इफेक्ट इवापोरेटर्स (Multi-Effect Evaporators)</h4>
            <p>ऊर्जा दक्षता (energy efficiency) में सुधार करने के लिए, कई वाष्पीकरणकर्ताओं (evaporators) को श्रृंखला (series) में जोड़ा जाता है जिन्हें 'इफेक्ट्स (effects)' कहा जाता है। पहले इफेक्ट (first effect) से उत्पन्न वाष्प (vapor), जो उच्च तापमान और दबाव (higher temperature and pressure) पर होता है, का उपयोग दूसरे इफेक्ट (second effect) को गर्म करने के लिए किया जाता है, जो कम दबाव और तापमान (lower pressure and temperature) पर काम करता है। वाष्प का यह व्यापक उपयोग (cascading use) पूरी प्रक्रिया (entire process) के लिए आवश्यक भाप (steam) की कुल मात्रा को काफी कम कर देता है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">एक वाष्पीकरण प्रणाली के मुख्य घटक (Key Components)</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>कैलेंड्रिया (Calandria):</strong> वाष्पीकरणकर्ता का ताप खंड (heating section), जिसमें ट्यूब (tubes) होते हैं जहाँ ऊष्मा विनिमय (heat exchange) होता है।</li>
                <li><strong>वाष्प विभाजक (Vapor Separator):</strong> एक बड़ा कक्ष (chamber) जहाँ वाष्प (vapor) को केंद्रित तरल (concentrated liquid) से अलग किया जाता है।</li>
                <li><strong>कंडेनसर (Condenser):</strong> एक ऊष्मा विनियामक (heat exchanger) जो अंतिम इफेक्ट (last effect) से जल वाष्प (water vapor) को संघनित (condense) करता है, जिससे सिस्टम में वैक्यूम (vacuum) बनता है और बना रहता है।</li>
                <li><strong>वैक्यूम पंप (Vacuum Pump):</strong> वैक्यूम बनाए रखने (maintain vacuum) के लिए सिस्टम से गैर-संघनित गैसों (non-condensable gases) को हटाता है।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">बॉइलिंग पॉइंट एलिवेशन (BPE)</h3>
            <p>जैसे-जैसे वाष्पीकरण (evaporation) के दौरान दूध का सांद्रण (concentration) बढ़ता है, समाधान (solution) का क्वथनांक (boiling point) उसी दबाव (pressure) पर शुद्ध पानी (pure water) की तुलना में बढ़ जाता है। इस घटना को बॉइलिंग पॉइंट एलिवेशन (Boiling Point Elevation - BPE) कहा जाता है। यह इसलिए होता है क्योंकि घुले हुए ठोस पदार्थ (dissolved solids) - लैक्टोज (lactose), खनिज (minerals), प्रोटीन (proteins) - समाधान के वाष्प दबाव (vapor pressure) को कम करते हैं।</p>
            <p><strong>प्रभाव (Impact):</strong> BPE हीटिंग स्टीम (heating steam) और उबलते दूध (boiling milk) के बीच प्रभावी तापमान अंतर (effective temperature difference) को कम करता है, जो वाष्पीकरण दक्षता (evaporation efficiency) को कम कर सकता है। 50% कुल ठोस (total solids) पर, BPE 6-10°C हो सकता है, जो ऊष्मा स्थानांतरण दर (heat transfer rate) को महत्वपूर्ण रूप से प्रभावित करता है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">ऊर्जा बचत प्रौद्योगिकियां (Energy-Saving Technologies)</h3>
            <h4 class="font-semibold mt-4 mb-2">थर्मल वेपर रीकंप्रेशन (TVR - Thermal Vapor Recompression)</h4>
            <p>एक स्टीम जेट इजेक्टर (steam jet ejector) उच्च दबाव वाली भाप (high-pressure steam) का उपयोग करके एक इफेक्ट से कम दबाव वाले वाष्प (low-pressure vapor) को संपीड़ित (compress) करता है, इसके तापमान को बढ़ाता है ताकि इसे हीटिंग स्टीम (heating steam) के रूप में पुन: उपयोग किया जा सके। यह स्टीम इकॉनमी (steam economy) को महत्वपूर्ण रूप से सुधारता है।</p>
            
            <h4 class="font-semibold mt-4 mb-2">मैकेनिकल वेपर रीकंप्रेशन (MVR - Mechanical Vapor Recompression)</h4>
            <p>एक इलेक्ट्रिक कंप्रेसर (electric compressor) वाष्पीकरणकर्ता (evaporator) से वाष्प (vapor) को संपीड़ित (compress) करता है, इसके तापमान और दबाव (temperature and pressure) को बढ़ाता है। संपीड़ित वाष्प (compressed vapor) को फिर उसी वाष्पीकरणकर्ता में हीटिंग माध्यम (heating medium) के रूप में उपयोग किया जाता है। MVR सिस्टम बहुत अधिक ऊर्जा दक्षता (energy efficiency) प्राप्त कर सकते हैं, केवल 25-45 kWh विद्युत ऊर्जा (electrical energy) का उपयोग करते हुए प्रति टन पानी वाष्पित (per ton of water evaporated) की तुलना में सिंगल-इफेक्ट स्टीम वाष्पीकरण (single-effect steam evaporation) के लिए 600-800 kWh थर्मल समकक्ष (thermal equivalent)।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">डेयरी उत्पादों में अनुप्रयोग (Applications)</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>कंडेंस्ड मिल्क (Condensed Milk):</strong> संरक्षण (preservation) के लिए शुगर (sugar) के साथ 2.0-2.3× तक केंद्रित (concentrated)।</li>
                <li><strong>इवेपोरेटेड मिल्क (Evaporated Milk):</strong> ~2× तक केंद्रित और फिर कैन्स (cans) में निष्फल (sterilized) किया जाता है।</li>
                <li><strong>मिल्क पाउडर उत्पादन (Milk Powder Production):</strong> स्प्रे ड्राइंग (spray drying) से पहले 45-52% कुल ठोस (total solids) तक प्री-कंसेंट्रेशन (pre-concentration)।</li>
                <li><strong>व्हे कंसेंट्रेशन (Whey Concentration):</strong> आगे की प्रक्रिया (further processing) या सुखाने (drying) से पहले मट्ठा (whey) को केंद्रित करना।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">संचालन संबंधी चुनौतियाँ और समाधान (Operational Challenges)</h3>
            <h4 class="font-semibold mt-4 mb-2">फाउलिंग (Fouling)</h4>
            <p>हीटिंग सरफेस (heating surfaces) पर प्रोटीन और खनिज जमा (protein and mineral deposits) ऊष्मा स्थानांतरण दक्षता (heat transfer efficiency) को कम करते हैं। प्रकार (types) में शामिल हैं:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>टाइप A:</strong> उच्च तापमान (high temperature - >70°C) पर प्रोटीन फाउलिंग (protein fouling)</li>
                <li><strong>टाइप B:</strong> मिनरल फाउलिंग - कैल्शियम फॉस्फेट (calcium phosphate fouling)</li>
            </ul>
            <p><strong>समाधान (Solutions):</strong> तापमान नियंत्रण (temperature control), pH एडजस्टमेंट (pH adjustment), नियमित CIP (Clean-in-Place) साइकिल (cycles) एल्कलाइन और एसिड वॉश (alkaline and acid washes) के साथ।</p>

            <h4 class="font-semibold mt-4 mb-2">उत्पाद गुणवत्ता बनाए रखना (Maintaining Product Quality)</h4>
            <p>वैक्यूम (vacuum) के तहत कम तापमान (50-70°C) पर संचालन, शॉर्ट रेजिडेंस टाइम (short residence times - फॉलिंग फिल्म इवापोरेटर में 10-60 सेकंड) का उपयोग, और सटीक प्रक्रिया नियंत्रण (precise process control) दूध की गुणवत्ता (milk quality) को संरक्षित करने, विटामिन नुकसान (vitamin losses) को कम करने, और ऑफ-फ्लेवर (off-flavors) को रोकने में मदद करता है।</p>
        `
    }
};
