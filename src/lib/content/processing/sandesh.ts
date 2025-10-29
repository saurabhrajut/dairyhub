
export const sandeshContent = {
    en: {
        title: "Sandesh Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Sandesh</h3>
            <p>Sandesh is a classic Bengali sweet, renowned for its delicate, melt-in-the-mouth texture. It is prepared from fresh, soft chhana (Indian cottage cheese) which is kneaded with sugar and cooked at a low temperature to achieve its characteristic texture and flavor. Unlike many other sweets, sandesh is not deep-fried or soaked in syrup, making it a lighter dessert option.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Sandesh</h3>
            <p>Sandesh falls under the category of 'Chhana based sweets' in the FSSAI regulations. The standards ensure the product's quality and safety.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, %)</strong></td>
                            <td class="p-2 border">50.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">20.0</td>
                        </tr>
                         <tr>
                            <td class="p-2 border"><strong>Sucrose (on dry basis, max, %)</strong></td>
                            <td class="p-2 border">40.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Sandesh with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Sandesh Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Heating to near boiling (~90°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70-80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Coagulation with Acid (pH ~5.4) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Settling & Draining of Whey</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Kneading of Chhana & Mixing with Sugar</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Low-Temperature Cooking (75-85°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling and Shaping/Moulding</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Garnishing (Optional)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging & Storage <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Chhana Preparation (PRP):</strong>
                    <p>The quality of sandesh begins with the chhana. Fresh, soft, and moist chhana made from cow milk is essential. It must have the right moisture content (around 55-60%) and a slightly crumbly but cohesive texture. This is a critical <strong>Prerequisite Program (PRP)</strong>.</p>
                </li>
                <li><strong>Kneading & Sugar Mixing (oPRP):</strong>
                    <p>The fresh chhana is kneaded until it becomes completely smooth and free of lumps. This mechanical action breaks down the protein aggregates and develops a smooth paste. Powdered sugar is then added and mixed thoroughly. This step is an <strong>Operational Prerequisite Program (oPRP)</strong> because the texture development is critical to the final product quality. The sugar dissolves in the moisture of the chhana, forming a homogenous mixture.</p>
                </li>
                <li><strong>Low-Temperature Cooking (CCP-3):</strong>
                    <p>The chhana-sugar mixture is cooked in a pan over low heat (75-85°C) with continuous stirring and scraping. This is a <strong>Critical Control Point (CCP-3)</strong>. The goal is not to brown the mixture but to gently cook it, which serves several purposes:
                        <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                            <li><strong>Moisture Removal:</strong> It evaporates some moisture, firming up the texture.</li>
                            <li><strong>Sugar Dissolution:</strong> It ensures all sugar is completely dissolved.</li>
                            <li><strong>Flavor Development:</strong> Gentle heating develops the characteristic subtle, cooked flavor of sandesh without caramelization.</li>
                        </ul>
                    The cooking is stopped when the mixture starts to leave the sides of the pan and forms a non-sticky mass.</p>
                </li>
                <li><strong>Cooling and Shaping:</strong>
                    <p>The cooked mass is removed from the heat and cooled slightly. While it is still warm and pliable, it is portioned and shaped into various forms, often using decorative moulds. The cooling process allows the sugar to recrystallize slightly, which contributes to the final firm but tender texture.</p>
                </li>
                <li><strong>Packaging and Storage (oPRP):</strong>
                    <p>Sandesh has a limited shelf life due to its moisture content. It is packaged in food-grade boxes or containers and must be stored under refrigeration to prevent spoilage. Proper storage conditions are an <strong>oPRP</strong> to maintain safety and quality until consumption.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "Sandesh Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh ka Introduction</h3>
            <p>Sandesh ek classic Bengali mithai hai, jo apne nazuk, munh mein ghulne wale texture ke liye prasiddh hai. Ise taaze, naram chhana (भारतीय पनीर) se taiyar kiya jaata hai jise cheeni ke saath gundhkar kam taapman par pakaya jaata hai taaki iska vishesh texture aur swaad prapt ho sake. Kai anya mithaiyon ke vipreet, sandesh ko gehra tala nahi jaata ya chashni mein duboya nahi jaata, jisse yah ek halka dessert vikalp banta hai.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI ke Anusar Sandesh ke Standards</h3>
            <p>Sandesh FSSAI ke niyamon mein 'Chhana aadharit mithai' ki shreni mein aata hai. Ye maanak utpaad ki gunvatta aur suraksha sunishchit karte hain.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Nami (adhiktam, %)</strong></td>
                            <td class="p-2 border">50.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Doodh ki Vasa (sukhe adhaar par, nyunatam, %)</strong></td>
                            <td class="p-2 border">20.0</td>
                        </tr>
                         <tr>
                            <td class="p-2 border"><strong>Sucrose (sukhe adhaar par, adhiktam, %)</strong></td>
                            <td class="p-2 border">40.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Khadya Suraksha Niyantranon ke saath Sandesh ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh Utpadan ke liye Processing Flowchart</h3>
             <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Heating to near boiling (~90°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70-80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Coagulation with Acid (pH ~5.4) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Settling & Draining of Whey</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Kneading of Chhana & Mixing with Sugar</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Low-Temperature Cooking (75-85°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling and Shaping/Moulding</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Garnishing (Optional)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging & Storage <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Vistrit Vivaran</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Chhana Taiyar Karna (PRP):</strong>
                    <p>Sandesh ki gunvatta chhana se shuru hoti hai। Gaay ke doodh se bana taaza, naram aur nam chhana avashyak hai। Ismein sahi nami ki matra (lagbhag 55-60%) aur thodi bhurbhuri lekin samanjasyapoorn banavat honi chahiye। Yah ek mahatvapurna <strong>Prerequisite Program (PRP)</strong> hai।</p>
                </li>
                <li><strong>Chhana ko Gundhna aur Cheeni Milana (oPRP):</strong>
                    <p>Taaza chhana ko tab tak gundha jaata hai jab tak ki vah poori tarah se chikna aur gaanthon se mukt na ho jaaye। Yah yaantrik kriya protein samuhon ko todti hai aur ek chikna paste viksit karti hai। Phir pisi hui cheeni daali jaati hai aur achhi tarah milayi jaati hai। Yah kadam ek <strong>Operational Prerequisite Program (oPRP)</strong> hai kyonki texture ka vikas antim utpad ki gunvatta ke liye mahatvapurna hai। Cheeni chhana ki nami mein ghul jaati hai, jisse ek samroop mishran banta hai।</p>
                </li>
                <li><strong>Kam Taapman par Pakana (CCP-3):</strong>
                    <p>Chhana-cheeni ke mishran ko ek pain mein dheemi aanch (75-85°C) par lagatar hilate aur khurachate hue pakaya jaata hai। Yah ek <strong>Critical Control Point (CCP-3)</strong> hai। Iska uddeshya mishran ko bhura karna nahi, balki ise dheere-dheere pakana hai, jiske kai uddeshya hain:
                        <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                            <li><strong>Nami Hatana:</strong> Yah kuch nami ko vashpit karta hai, jisse banavat sakht hoti hai।</li>
                            <li><strong>Cheeni ka Ghulna:</strong> Yah sunishchit karta hai ki saari cheeni poori tarah se ghul gayi hai।</li>
                            <li><strong>Swaad ka Vikas:</strong> Dheemi aanch par pakane se sandesh ka vishesh halka paka hua swaad viksit hota hai, bina caramelization ke।</li>
                        </ul>
                    Pakana tab band kar diya jaata hai jab mishran pain ke kinaron ko chhodne lagta hai aur ek gair-chipchipa dravya banata hai।</p>
                </li>
                <li><strong>Thanda karna aur Aakar Dena:</strong>
                    <p>Pake hue dravya ko aanch se hata diya jaata hai aur thoda thanda hone diya jaata hai। Jab yah abhi bhi garam aur lachila hota hai, to ise bhagon mein baanta jaata hai aur vibhinn aakaron mein dhala jaata hai, aksar sajavati saanchon ka upyog karke। Thanda hone ki prakriya cheeni ko thoda punah kristal karne deti hai, jo antim sakht lekin komal banavat mein yogdan deti hai।</p>
                </li>
                <li><strong>Packaging aur Storage (oPRP):</strong>
                    <p>Sandesh ki nami ki matra ke kaaran iska shelf life seemit hota hai। Ise food-grade boxon ya containers mein pack kiya jaata hai aur kharab hone se bachane ke liye refrigeration ke tahat rakha jaana chahiye। Uchit bhandaran sthitiyan suraksha aur gunvatta banaye rakhne ke liye ek <strong>oPRP</strong> hain।</p>
                </li>
            </ol>
        `
    }
}

    