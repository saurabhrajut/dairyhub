
export const buttermilkContent = {
    en: {
        title: "Buttermilk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Buttermilk</h3>
            <p>Buttermilk is a fermented dairy drink with a characteristically sour taste caused by lactic acid bacteria. Traditionally, it was the liquid left behind after churning butter out of cultured cream. However, most modern buttermilk is 'cultured buttermilk', which is produced by directly fermenting milk (usually skim or low-fat milk) with specific starter cultures.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Buttermilk</h3>
            <p>According to FSSAI, Buttermilk (often referred to as 'Chaas' in regulations) should conform to the following standards:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (% m/m)</strong></td>
                            <td class="p-2 border">Not more than 2.0</td>
                            <td class="p-2 border">Ensures it is a low-fat product.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (SNF) (% m/m)</strong></td>
                            <td class="p-2 border">Not less than 4.0</td>
                            <td class="p-2 border">Provides body, texture, and nutritional value (protein, lactose, minerals).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Titrable Acidity (% Lactic Acid)</strong></td>
                            <td class="p-2 border">Not more than 0.50</td>
                            <td class="p-2 border">Indicates the level of fermentation and contributes to the characteristic tangy flavor.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Cultured Buttermilk with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception (Skim or Low-Fat Milk) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Adjusting SNF) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heat Treatment (90-95°C for 5-10 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Incubation Temp (20-22°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Mesophilic Starter Culture</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation (at 20-22°C for 16-20 hours)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Breaking the Coagulum <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Cooling (to &lt;5°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Optional: Salting/Flavoring</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Selection and Standardization (PRP & oPRP):</strong> The process starts with fresh, good quality skim milk or low-fat milk (a <strong>PRP</strong>). To achieve a richer body and prevent whey separation (syneresis), the SNF content is often fortified to 9-10% by adding skim milk powder. This standardization is an <strong>oPRP</strong> for product consistency.</li>
                <li><strong>Heat Treatment (CCP-1):</strong> The milk is given a high heat treatment, typically <strong>90-95°C for 5-10 minutes</strong>. This is a <strong>Critical Control Point (CCP-1)</strong>. The scientific reason for this intense heat is twofold: it destroys spoilage organisms and potential pathogens, and it denatures the whey proteins. These denatured whey proteins then interact with the casein micelles, which significantly increases the water-holding capacity of the protein network, resulting in a thicker, more viscous final product with improved stability.</li>
                <li><strong>Cooling & Inoculation (oPRP):</strong> The milk is cooled to the optimal growth temperature for mesophilic cultures, around <strong>20-22°C</strong>. A specific starter culture (1-2%), typically containing flavor-producing strains like <i>Lactococcus lactis</i> subsp. <i>cremoris</i> and the citrate-fermenting <i>Lactococcus lactis</i> subsp. <i>diacetylactis</i>, is added. Proper temperature control and the use of a pure, active culture are crucial <strong>oPRPs</strong>.</li>
                <li><strong>Incubation (CCP-2):</strong> The inoculated milk is held at 20-22°C for a long period, typically <strong>16-20 hours</strong>. During this slow fermentation, the bacteria convert lactose into lactic acid, dropping the pH to around 4.5. This acidification causes the casein to coagulate, forming a soft gel. Critically, the citrate-fermenting bacteria convert the citrate in the milk into <strong>diacetyl</strong>, the compound that gives buttermilk its characteristic buttery aroma and flavor. This controlled fermentation is a <strong>Critical Control Point (CCP-2)</strong> for safety and quality.
                    <div class="p-3 my-2 bg-indigo-50 border-l-4 border-indigo-400">
                        <strong>Scientific Insight: Why a different temperature than Dahi?</strong><br/>
                        Dahi (Curd) uses <strong>thermophilic</strong> cultures that thrive at warmer temperatures (40-45°C) for rapid acid production. Cultured buttermilk uses <strong>mesophilic</strong> cultures that work best at cooler temperatures (20-22°C). The primary reason for this lower temperature is to allow the flavor-producing bacteria (like <i>L. diacetylactis</i>) enough time to convert citrate into diacetyl. At higher temperatures, these bacteria would be stressed, and the dominant acid-producing bacteria would make the product sour too quickly, without developing the characteristic buttery aroma.
                    </div>
                </li>
                <li><strong>Breaking the Coagulum (oPRP):</strong> Once the desired acidity and flavor are achieved, the soft coagulum is gently broken by controlled agitation. This step is a vital <strong>oPRP</strong> as it determines the final viscosity and smoothness. Too much shear will result in a thin, watery product, while too little agitation can leave lumps.</li>
                <li><strong>Cooling, Salting, & Packaging (CCP-3, PRP):</strong> The broken curd is rapidly cooled to below 5°C. This is a <strong>Critical Control Point (CCP-3)</strong> as it immediately halts further fermentation, preventing the product from becoming overly sour. Salt and other flavorings (like spices for 'masala chaas') can be blended in at this stage. Finally, the product is packaged (a <strong>PRP</strong>) and stored under refrigeration.</li>
            </ol>
        `
    },
    hi: {
        title: "छाछ (Buttermilk) की प्रोसेसिंग",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Buttermilk का Introduction</h3>
            <p>Buttermilk ek fermented dairy drink hai jiska vishesh roop se khattas swaad lactic acid bacteria ke karan hota hai. Paramparik roop se, yah cultured cream se makkhan nikalne ke baad bacha hua liquid hota tha. Halaanki, aajkal ka buttermilk 'cultured buttermilk' hota hai, jo seedhe milk (aam taur par skim ya low-fat milk) ko vishisht starter cultures ke saath ferment karke banaya jaata hai.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI ke Anusar Buttermilk ke Standards</h3>
            <p>FSSAI ke anusaar, Buttermilk (jise aksar niyamon mein 'Chaas' kaha jaata hai) ko nimnalikhit manakon ke anuroop hona chahiye:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                            <th class="p-2 border">Mahatva (Significance)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (% m/m)</strong></td>
                            <td class="p-2 border">2.0 se adhik nahi</td>
                            <td class="p-2 border">Sunishchit karta hai ki yah ek low-fat product hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (SNF) (% m/m)</strong></td>
                            <td class="p-2 border">4.0 se kam nahi</td>
                            <td class="p-2 border">Body, texture, aur poshan moolya (protein, lactose, minerals) pradan karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Titrable Acidity (% Lactic Acid)</strong></td>
                            <td class="p-2 border">0.50 se adhik nahi</td>
                            <td class="p-2 border">Fermentation ke star ko darshata hai aur vishesh khattas swaad mein yogdan deta hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Cultured Buttermilk ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception (Skim ya Low-Fat Milk) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (SNF Adjust karna) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heat Treatment (90-95°C 5-10 min ke liye)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Incubation Temp tak Cooling (20-22°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Mesophilic Starter Culture</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation (20-22°C par 16-20 ghante)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Coagulum ko Todna <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Cooling (&lt;5°C tak)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Vaikalpik: Salting/Flavoring</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Vistrit Vivaran</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Selection aur Standardization (PRP & oPRP):</strong> Prakriya taaza, achhi gunvatta wale skim milk ya low-fat milk (ek <strong>PRP</strong>) se shuru hoti hai. Ek samriddh body prapt karne aur whey separation (syneresis) ko rokne ke liye, SNF content ko aksar skim milk powder milakar 9-10% tak badhaya jaata hai. Yah manakikaran utpaad ki sthirata ke liye ek <strong>oPRP</strong> hai.</li>
                <li><strong>Heat Treatment (Garmi Upchar) (CCP-1):</strong> Milk ko ek uchch garmi upchar, aam taur par <strong>90-95°C par 5-10 minute</strong> ke liye diya jaata hai. Yah ek <strong>Critical Control Point (CCP-1)</strong> hai. Is gahan garmi ka vaigyanik kaaran dohra hai: yah kharab karne wale sukshmajiviyon aur sambhavit roganuon ko nasht karta hai, aur yah whey proteins ko vikrit (denature) karta hai. Ye vikrit whey proteins phir casein micelles ke saath interact karte hain, jo protein network ki paani dharan karne ki kshamata ko mahatvapurna roop se badhata hai, jiske parinaamswaroop ek mota, adhik viscous antim utpaad banta hai jismein behtar sthirata hoti hai.</li>
                <li><strong>Cooling aur Inoculation (oPRP):</strong> Milk ko mesophilic cultures ke liye optimal vikas taapman, lagbhag <strong>20-22°C</strong> tak thanda kiya jaata hai. Ek vishisht starter culture (1-2%), jismein aam taur par swaad utpann karne wale strains jaise <i>Lactococcus lactis</i> subsp. <i>cremoris</i> aur citrate-fermenting <i>Lactococcus lactis</i> subsp. <i>diacetylactis</i> hote hain, milaya jaata hai. Sahi taapman niyantran aur ek shuddh, sakriya culture ka upyog mahatvapurna <strong>oPRPs</strong> hain.</li>
                <li><strong>Incubation (Jamane ki Prakriya) (CCP-2):</strong> Inoculated milk ko 20-22°C par ek lambe samay, aam taur par <strong>16-20 ghante</strong>, ke liye rakha jaata hai. Is dheeme fermentation ke dauran, bacteria lactose ko lactic acid mein badalte hain, jisse pH lagbhag 4.5 tak gir jaata hai. Yah acidification casein ko coagulate karta hai, ek naram gel banata hai. Mahatvapurna roop se, citrate-fermenting bacteria milk mein citrate ko <strong>diacetyl</strong> mein badalte hain, jo buttermilk ko uski vishesh makkhan jaisi sugandh aur swaad deta hai. Yah niyantrit fermentation suraksha aur gunvatta ke liye ek <strong>Critical Control Point (CCP-2)</strong> hai.
                    <div class="p-3 my-2 bg-indigo-50 border-l-4 border-indigo-400">
                        <strong>वैज्ञानिक अंतर्दृष्टि: दही से अलग तापमान क्यों?</strong><br/>
                        दही (Curd) <strong>थर्मोफिलिक</strong> कल्चर का उपयोग करता है जो गर्म तापमान (40-45°C) पर तेजी से एसिड उत्पादन के लिए पनपते हैं। कल्चर्ड बटरमिल्क <strong>मेसोफिलिक</strong> कल्चर का उपयोग करता है जो ठंडे तापमान (20-22°C) पर सबसे अच्छा काम करते हैं। इस कम तापमान का मुख्य कारण स्वाद-उत्पादक बैक्टीरिया (जैसे <i>L. diacetylactis</i>) को साइट्रेट को डायसेटाइल में बदलने के लिए पर्याप्त समय देना है। उच्च तापमान पर, ये बैक्टीरिया तनावग्रस्त हो जाएंगे, और प्रमुख एसिड-उत्पादक बैक्टीरिया उत्पाद को बहुत जल्दी खट्टा कर देंगे, बिना विशिष्ट मक्खन जैसी सुगंध विकसित किए।
                    </div>
                </li>
                <li><strong>Coagulum ko Todna (oPRP):</strong> Jab vanchhit amlata aur swaad prapt ho jaata hai, to naram coagulum ko niyantrit agitation se dheere-dheere toda jaata hai. Yah kadam antim viscosity aur chiknapan nirdharit karne ke liye ek mahatvapurna <strong>oPRP</strong> hai. Bahut zyada shear se patla, paanidar utpaad banega, jabki bahut kam agitation se gaanth ho sakti hai.</li>
                <li><strong>Cooling, Salting, aur Packaging (CCP-3, PRP):</strong> Tode gaye curd ko tezi se 5°C se neeche thanda kiya jaata hai. Yah ek <strong>Critical Control Point (CCP-3)</strong> hai kyonki yah aage ki fermentation ko turant rok deta hai, utpaad ko bahut zyada khatta hone se bachata hai. Is charan mein namak aur anya swaad (jaise 'masala chaas' ke liye masale) milaye ja sakte hain. Ant mein, utpaad ko pack kiya jaata hai (ek <strong>PRP</strong>) aur refrigeration ke tahat store kiya jaata hai.</li>
            </ol>
        `
    }
}

    