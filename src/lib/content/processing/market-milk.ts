
export const marketMilkContent = {
    en: {
        title: "Market Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Market Milk</h3>
            <p>Market milk, also known as liquid milk, refers to milk that is processed, packaged, and sold for direct consumption. It is one of the most widely consumed dairy products globally. The primary objective of market milk processing is to ensure its safety for consumers by eliminating harmful microorganisms and to enhance its shelf life while preserving its nutritional and sensory qualities as much as possible.</p>
            <p>The processing involves a series of carefully controlled steps, from reception of raw milk to its final packaging. Standardization is a key part of this process, where the fat and solids-not-fat (SNF) content is adjusted to meet legal and commercial standards for different types of milk.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Market Milk (as per FSSAI)</h3>
            <p>In India, the Food Safety and Standards Authority of India (FSSAI) has defined several types of market milk based on their fat and SNF content. Understanding these types is crucial for both consumers and dairy professionals.</p>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Milk</th>
                            <th class="p-2 border">Minimum Fat % (m/m)</th>
                            <th class="p-2 border">Minimum SNF % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Toned Milk</strong></td><td class="p-2 border">3.0</td><td class="p-2 border">8.5</td></tr>
                        <tr><td class="p-2 border"><strong>Double Toned Milk</strong></td><td class="p-2 border">1.3</td><td class="p-2 border">9.0</td></tr>
                        <tr><td class="p-2 border"><strong>Standardized Milk</strong></td><td class="p-2 border">4.5</td><td class="p-2 border">8.5</td></tr>
                        <tr><td class="p-2 border"><strong>Full Cream Milk</strong></td><td class="p-2 border">6.0</td><td class="p-2 border">9.0</td></tr>
                        <tr><td class="p-2 border"><strong>Skimmed Milk</strong></td><td class="p-2 border">Not more than 0.5</td><td class="p-2 border">8.7</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Detailed Information on Milk Types</h4>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">Toned Milk</h5>
                    <p>Made by adding skim milk powder and water to whole milk (usually buffalo milk) to reduce its fat content. It's a popular choice for daily consumption, offering a balance between the richness of whole milk and the leanness of skim milk. Ideal for consumers seeking moderate fat intake without sacrificing mouthfeel.</p>
                </div>
                <div>
                    <h5 class="font-bold">Double Toned Milk</h5>
                    <p>Contains even less fat than toned milk, with a slightly higher SNF content to maintain its body and nutritional value (primarily protein and calcium). Targeted towards highly health-conscious individuals and those on low-fat diets.</p>
                </div>
                <div>
                    <h5 class="font-bold">Standardized Milk</h5>
                    <p>The fat and SNF content are adjusted to a specific, consistent level, often between that of toned and full cream milk. This ensures a uniform product quality throughout the year, irrespective of seasonal variations in raw milk composition. It's an all-purpose milk.</p>
                </div>
                <div>
                    <h5 class="font-bold">Full Cream Milk</h5>
                    <p>Has the highest fat content, giving it a rich taste and creamy texture. It is often preferred for making traditional Indian sweets (mithai), rich curd (dahi), and for growing children who need higher energy intake.</p>
                </div>
                <div>
                    <h5 class="font-bold">Skimmed Milk</h5>
                    <p>Virtually all fat has been removed through centrifugal separation. It has a very thin consistency and is primarily consumed by those on strict low-fat or low-calorie diets. It retains most of the protein, calcium, and other non-fat solids.</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Market Milk with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Market Milk</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception (Testing for quality & safety) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (to &lt;5°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Clarification / Filtration (Removal of impurities) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Fat & SNF Adjustment) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (e.g., 72°C for 15 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (at ~65°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Chilling (to &lt;5°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Raw Milk Reception & Chilling (PRP & oPRP):</strong>
                    <p>Upon arrival, raw milk undergoes rigorous quality testing (organoleptic, chemical, and microbiological). This is a <strong>Prerequisite Program (PRP)</strong> to ensure that only good quality raw material enters the processing line. Once approved, it is immediately chilled to below 5°C. This rapid cooling is an <strong>Operational Prerequisite Program (oPRP)</strong> as it critically arrests microbial growth and preserves the milk's quality until processing begins.</p>
                </li>
                <li><strong>Clarification / Filtration (oPRP):</strong>
                    <p>The chilled milk is passed through a clarifier or filter. A clarifier uses centrifugal force, while a filter uses fine mesh screens, to remove fine suspended impurities like dust, dirt, somatic cells, and some bacteria. This step is an <strong>oPRP</strong> because removing foreign matter is essential for the safety and quality of the final product and for the efficiency of downstream equipment like pasteurizers.</p>
                </li>
                <li><strong>Standardization (oPRP):</strong>
                    <p>This is a critical step where the fat and Solids-Not-Fat (SNF) content of the milk is precisely adjusted. This is typically done in a standardization tank by blending milk with calculated amounts of skim milk or cream. The process ensures that the final product consistently meets the legal and commercial standards for the specific type of milk being produced. This is classified as an <strong>oPRP</strong> as it is essential for product quality and legal compliance, and its parameters are closely monitored.</p>
                </li>
                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>Pasteurization is the most critical food safety step in the process, making it a <strong>Critical Control Point (CCP-1)</strong>. The most common method is High-Temperature Short-Time (HTST) pasteurization, where milk is heated to at least <strong>72°C for 15 seconds</strong>. This specific time-temperature combination is scientifically validated to kill all pathogenic (disease-causing) microorganisms (like <i>Mycobacterium tuberculosis</i>, <i>Listeria</i>, <i>Salmonella</i>) and significantly reduce spoilage organisms. The effectiveness of pasteurization is verified by the Alkaline Phosphatase (ALP) test; a negative result confirms that the CCP was met and the process was successful.</p>
                </li>
                <li><strong>Homogenization (oPRP):</strong>
                    <p>Homogenization is a mechanical process where milk is forced through a narrow opening at high pressure (around 2000-2500 PSI). This breaks down the large fat globules into much smaller ones (typically <2 microns). Scientifically, this increases the surface area of the fat and creates a new fat globule membrane from adsorbed casein and whey proteins. This prevents the formation of a cream layer (creaming), results in a whiter appearance, richer taste, and more uniform consistency. It is classified as an <strong>oPRP</strong> because while it is crucial for product quality and stability, it is not a direct food safety control step.</p>
                </li>
                <li><strong>Packaging & Cold Storage (PRP & CCP-2):</strong>
                    <p>After processing, the milk is immediately packaged into clean, sanitized containers. The packaging material and process are a <strong>PRP</strong> to protect the milk from light, oxygen, and post-pasteurization contamination. The packaged milk is then stored in cold storage (below 5°C). Maintaining the cold chain throughout storage and distribution is a <strong>Critical Control Point (CCP-2)</strong> as any temperature abuse can allow surviving spoilage microorganisms to grow, compromising both the safety and shelf life of the product.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "Market Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Market Milk ka Introduction</h3>
            <p>Market milk, jise liquid milk bhi kehte hain, us milk ko refer karta hai jise direct consumption ke liye process, pack, aur sell kiya jaata hai. Yah globally sabse zyada consume hone wale dairy products mein se ek hai. Market milk processing ka primary objective harmful microorganisms ko khatam karke consumers ke liye iski safety ensure karna aur iske nutritional aur sensory qualities ko jitna ho sake preserve karte hue iski shelf life ko badhana hai.</p>
            <p>Processing mein raw milk ke reception se lekar uski final packaging tak, carefully controlled steps ki ek series shamil hai. Standardization is process ka ek important hissa hai, jahan alag-alag prakar ke milk ke liye legal aur commercial standards ko poora karne ke liye fat aur solids-not-fat (SNF) content ko adjust kiya jaata hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Market Milk ke Prakar (FSSAI ke Anusar)</h3>
            <p>India mein, Food Safety and Standards Authority of India (FSSAI) ne unke fat aur SNF content ke adhaar par kai prakar ke market milk ko define kiya hai. In prakaron ko samajhna consumers aur dairy professionals dono ke liye mahatvapurna hai.</p>
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Milk ka Prakar</th>
                            <th class="p-2 border">Minimum Fat % (m/m)</th>
                            <th class="p-2 border">Minimum SNF % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Toned Milk</strong></td><td class="p-2 border">3.0</td><td class="p-2 border">8.5</td></tr>
                        <tr><td class="p-2 border"><strong>Double Toned Milk</strong></td><td class="p-2 border">1.3</td><td class="p-2 border">9.0</td></tr>
                        <tr><td class="p-2 border"><strong>Standardized Milk</strong></td><td class="p-2 border">4.5</td><td class="p-2 border">8.5</td></tr>
                        <tr><td class="p-2 border"><strong>Full Cream Milk</strong></td><td class="p-2 border">6.0</td><td class="p-2 border">9.0</td></tr>
                        <tr><td class="p-2 border"><strong>Skimmed Milk</strong></td><td class="p-2 border">Not more than 0.5</td><td class="p-2 border">8.7</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h4 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Doodh ke Prakaron par Vistrit Jaankari</h4>
            <div class="space-y-4">
                <div>
                    <h5 class="font-bold">Toned Milk</h5>
                    <p>Whole milk (aam taur par bhains ka) mein skim milk powder aur paani milakar iska fat content kam karke banaya jaata hai। Yah daily consumption ke liye ek popular choice hai, jo whole milk ki richness aur skim milk ke leanness ke beech ek balance pradan karta hai। Moderate fat intake chahne wale consumers ke liye ideal hai jo mouthfeel se samjhauta nahi karna chahte।</p>
                </div>
                <div>
                    <h5 class="font-bold">Double Toned Milk</h5>
                    <p>Ismein toned milk se bhi kam fat hota hai, aur iske body aur nutritional value (protein aur calcium) ko banaye rakhne ke liye thoda zyada SNF hota hai। Yah highly health-conscious individuals aur low-fat diet par rehne wale logon ke liye targeted hai।</p>
                </div>
                <div>
                    <h5 class="font-bold">Standardized Milk</h5>
                    <p>Fat aur SNF content ko ek specific, consistent level par adjust kiya jaata hai, jo aksar toned aur full cream milk ke beech hota hai। Yah raw milk composition mein seasonal variations ke bawajood saal bhar ek uniform product quality sunishchit karta hai। Yah ek all-purpose milk hai।</p>
                </div>
                <div>
                    <h5 class="font-bold">Full Cream Milk</h5>
                    <p>Ismein sabse zyada fat content hota hai, jo ise ek rich taste aur creamy texture deta hai। Yah aksar traditional Indian sweets (mithai), rich curd (dahi) banane ke liye aur badhte bachhon ke liye pasand kiya jaata hai jinhein high energy intake ki zaroorat hoti hai।</p>
                </div>
                <div>
                    <h5 class="font-bold">Skimmed Milk</h5>
                    <p>Centrifugal separation ke through lagbhag saara fat nikal diya jaata hai। Iski consistency bahut patli hoti hai aur yah mukhya roop se un logon dwara consume kiya jaata hai jo strict low-fat ya low-calorie diet par hain। Yah protein, calcium, aur anya non-fat solids ko retain karta hai।</p>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath Market Milk ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Market Milk ke liye Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception (Quality & Safety ki jaanch) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (&lt;5°C tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Clarification / Filtration (Ashuddhiyon ko hatana) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Fat aur SNF ko adjust karna) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization (jaise, 72°C 15 sec ke liye)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (~65°C par) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Chilling (&lt;5°C tak)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Detailed Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Raw Milk Reception & Chilling (PRP & oPRP):</strong>
                    <p>Aagaman par, raw milk kathor gunvatta parikshan (organoleptic, chemical, aur microbiological) se guzarta hai। Yah ek <strong>Prerequisite Program (PRP)</strong> hai jo sunishchit karta hai ki kewal achhi gunvatta wala kachcha maal processing line mein pravesh kare। Manjoor hone par, ise turant 5°C se neeche thanda kiya jaata hai। Yah teji se thanda karna ek <strong>Operational Prerequisite Program (oPRP)</strong> hai kyonki yah microbial vikas ko mahatvapurn roop se rokta hai aur processing shuru hone tak milk ki gunvatta ko banaye rakhta hai।</p>
                </li>
                <li><strong>Clarification / Filtration (oPRP):</strong>
                    <p>Thande milk ko ek clarifier ya filter se guzara jaata hai। Ek clarifier centrifugal force ka upyog karta hai, jabki ek filter महीन जाली स्क्रीन ka upyog karta hai, महीन निलंबित अशुद्धियों jaise dhool, mitti, somatic cells, aur kuch bacteria ko hatane ke liye। Yah kadam ek <strong>oPRP</strong> hai kyonki videshi padarth ko hatana antim utpaad ki suraksha aur gunvatta ke liye aur pasteurizers jaise downstream upkaranon ki dakshata ke liye avashyak hai।</p>
                </li>
                <li><strong>Standardization (oPRP):</strong>
                    <p>Yah ek mahatvapurna kadam hai jahan milk ke fat aur Solids-Not-Fat (SNF) content ko theek se adjust kiya jaata hai। Yah aam taur par ek standardization tank mein milk ko skim milk ya cream ki ganana ki gayi matra ke saath milakar kiya jaata hai। Yah prakriya sunishchit karti hai ki antim utpaad utpaadit kiye ja rahe vishisht prakar ke milk ke liye kanuni aur vanijyik manakon ko lagatar poora karta hai। Ise ek <strong>oPRP</strong> ke roop mein vargikrit kiya gaya hai kyonki yah utpaad ki gunvatta aur kanuni anupalan ke liye avashyak hai, aur iske parameters ko lagatar monitor kiya jaata hai।</p>
                </li>
                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>Pasteurization process mein sabse mahatvapurna food safety step hai, jisse yah ek <strong>Critical Control Point (CCP-1)</strong> ban jaata hai। Sabse aam tarika High-Temperature Short-Time (HTST) pasteurization hai, jahan milk ko kam se kam <strong>72°C par 15 second</strong> ke liye garam kiya jaata hai। Yah vishisht samay-taapman sanyojan sabhi pathogenic (bimari paida karne wale) microorganisms (jaise <i>Mycobacterium tuberculosis</i>, <i>Listeria</i>, <i>Salmonella</i>) ko maarne aur kharab karne wale organisms ko kafi kam karne ke liye vaigyanik roop se validate kiya gaya hai। Pasteurization ki prabhavshilta Alkaline Phosphatase (ALP) test dwara satyapit ki jaati hai; ek negative parinaam pushti karta hai ki CCP poora ho gaya tha aur prakriya safal rahi।</p>
                </li>
                <li><strong>Homogenization (oPRP):</strong>
                    <p>Homogenization ek mechanical process hai jahan milk ko high pressure (lagbhag 2000-2500 PSI) par ek sankirn opening ke madhyam se force kiya jaata hai। Yah bade fat globules ko bahut chote (aam taur par <2 microns) mein tod deta hai। Vaigyanik roop se, yah fat ke satah kshetra ko badhata hai aur adsorbed casein aur whey proteins se ek naya fat globule membrane banata hai। Yah ek cream layer (creaming) ke gathan ko rokta hai, ek safed dikhavat, samriddh swaad, aur adhik saman sthirata mein parinaam deta hai। Ise ek <strong>oPRP</strong> ke roop mein vargikrit kiya gaya hai kyonki jabki yah utpaad ki gunvatta aur sthirata ke liye mahatvapurna hai, yah ek seedha food safety control step nahi hai।</p>
                </li>
                <li><strong>Packaging & Cold Storage (PRP & CCP-2):</strong>
                    <p>Processing ke baad, milk ko turant saaf, sanitized containers mein pack kiya jaata hai। Packaging material aur process ek <strong>PRP</strong> hai jo milk ko prakash, oxygen, aur post-pasteurization contamination se bachata hai। Pack kiye gaye milk ko phir cold storage (5°C se neeche) mein store kiya jaata hai। Storage aur distribution ke dauran cold chain banaye rakhna ek <strong>Critical Control Point (CCP-2)</strong> hai kyonki koi bhi taapman ka durupayog bache hue kharab hone wale microorganisms ko grow karne ki anumati de sakta hai, jisse utpaad ki suraksha aur shelf life dono se samjhauta ho sakta hai।</p>
                </li>
            </ol>
        `
    }
}

    