
export const curdContent = {
    en: {
        title: "Curd (Dahi) Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Curd (Dahi)</h3>
            <p>Curd, known as Dahi in India, is one of the most popular and traditional fermented milk products. It is produced by the lactic acid fermentation of milk by specific starter cultures. This process not only preserves the milk but also enhances its nutritional value and digestibility. The characteristic tangy taste and thick, gel-like consistency of curd are a result of the lactic acid acting on the milk protein, casein.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Dahi</h3>
            <p>According to FSSAI, Dahi is a fermented milk product obtained by fermentation with a mixed starter culture of <i>Lactococcus lactis</i>, <i>Lactococcus cremoris</i>, <i>Lactococcus diacetylactis</i>, and species of <i>Lactobacillus</i> and <i>Streptococcus</i>. The compositional standards for Dahi are primarily based on the type of milk used to prepare it.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Dahi</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Minimum Milk Solids-Not-Fat (SNF) % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Dahi (from whole milk)</strong></td>
                            <td class="p-2 border">3.5</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Partly skimmed Dahi</strong></td>
                            <td class="p-2 border">More than 0.5 and less than 3.5</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Skimmed Dahi</strong></td>
                            <td class="p-2 border">Not more than 0.5</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Curd with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Curd Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (to &lt;5°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Fat & SNF, up to 10-12%) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>High Heat Treatment (90-95°C for 10 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Optional, at ~65°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Incubation Temperature (40-42°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Starter Culture (1-2%)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (in cups) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation (at 40-42°C for 3-4 hours)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Rapid Cooling (to &lt;5°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Reception, Chilling, and Standardization (PRP & oPRP):</strong> The process starts with receiving high-quality raw milk, which is a fundamental <strong>PRP</strong>. The milk is immediately chilled to below 5°C (an <strong>oPRP</strong>) to arrest microbial growth. It is then standardized to the desired fat and SNF levels. For a firm curd, the SNF is often fortified to 10-12% by adding skim milk powder. This is an <strong>oPRP</strong> for ensuring consistent product quality.</li>
                <li><strong>Heat Treatment (CCP-1):</strong> The standardized milk is subjected to a high heat treatment, typically <strong>90-95°C for 10 minutes</strong>. This is more intense than standard pasteurization and is a <strong>Critical Control Point (CCP-1)</strong>. Scientifically, this high heat denatures the whey proteins (mainly β-lactoglobulin), causing them to unfold. These denatured proteins then interact with and attach to the surface of the casein micelles (specifically κ-casein). This creates a more complex and stable protein network that can hold more water, resulting in a thicker curd with minimal whey separation (syneresis). It also destroys competing microorganisms.</li>
                <li><strong>Homogenization (Optional, oPRP):</strong> While not always done for traditional dahi, homogenization (an <strong>oPRP</strong>) can be performed to create a smoother, more uniform curd and to prevent a cream layer from forming on top. It is typically done after heat treatment at around 65°C.</li>
                <li><strong>Cooling to Incubation Temperature (oPRP):</strong> The milk is cooled to the optimal growth temperature for the starter culture, typically between <strong>40-42°C</strong>. This is an <strong>oPRP</strong> as precise temperature control is vital. Too high, and the culture may be damaged; too low, and fermentation will be too slow.</li>
                <li><strong>Inoculation (oPRP):</strong> A specific dahi starter culture (1-2%) is added. This culture's purity and viability are critical, making this step an <strong>oPRP</strong>. The culture contains a mix of lactic acid bacteria that will ferment the milk.</li>
                <li><strong>Packaging and Incubation (PRP, CCP-2):</strong> For 'set curd' style dahi, the inoculated milk is immediately filled into final retail packages (a <strong>PRP</strong>). These cups are then moved to an incubation room maintained at 40-42°C. During incubation (3-4 hours), the bacteria ferment lactose into lactic acid, dropping the pH. When the pH reaches the isoelectric point of casein (around 4.6), the proteins coagulate to form the gel structure. This controlled fermentation is a <strong>Critical Control Point (CCP-2)</strong> for both safety (inhibiting pathogens) and quality.</li>
                <li><strong>Cooling & Cold Storage (CCP-3):</strong> Once the desired acidity (e.g., 0.7-0.8%) and firmness are reached, the curd must be rapidly cooled to below 5°C. This is a <strong>Critical Control Point (CCP-3)</strong>. Rapid cooling immediately halts the fermentation, preventing the curd from becoming too sour. Cold storage stabilizes the curd structure and allows the flavors to mellow before distribution.</li>
            </ol>
        `
    },
    hi: {
        title: "Dahi (Curd) ki Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Dahi (Curd) ka Introduction</h3>
            <p>Dahi, jise India mein curd kehte hain, sabse lokpriya aur paramparik fermented milk products mein se ek hai. Yeh specific starter cultures dwara milk ke lactic acid fermentation se produce hota hai. Yeh prakriya na sirf milk ko preserve karti hai balki uski nutritional value aur pachansheelta (digestibility) ko bhi badhati hai. Dahi ka vishesh khatta swaad aur mota, jel jaisa consistency lactic acid ke milk protein, casein, par kaam karne ka parinaam hai.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI ke Anusar Dahi ke Standards</h3>
            <p>FSSAI ke anusaar, Dahi ek fermented milk product hai jo <i>Lactococcus lactis</i>, <i>Lactococcus cremoris</i>, <i>Lactococcus diacetylactis</i>, aur <i>Lactobacillus</i> aur <i>Streptococcus</i> ki species ke mixed starter culture ke saath fermentation se prapt hota hai. Dahi ke liye compositional standards mukhya roop se use banane ke liye istemal kiye gaye milk ke prakar par adharit hain.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Dahi ka Prakar</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Minimum Milk Solids-Not-Fat (SNF) % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Dahi (whole milk se)</strong></td>
                            <td class="p-2 border">3.5</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Partly skimmed Dahi</strong></td>
                            <td class="p-2 border">0.5 se adhik aur 3.5 se kam</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Skimmed Dahi</strong></td>
                            <td class="p-2 border">0.5 se adhik nahi</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath Dahi ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Dahi Production ke liye Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (&lt;5°C tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Fat & SNF, 10-12% tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>High Heat Treatment (90-95°C 10 min ke liye)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Vaikalpik, ~65°C par) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Incubation Temperature tak Cooling (40-42°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Starter Culture (1-2%)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (cups mein) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation (40-42°C par 3-4 ghante)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Rapid Cooling (&lt;5°C tak)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Vistrit Vivaran</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Reception, Chilling, aur Standardization (PRP & oPRP):</strong> Process high-quality raw milk receive karne se shuru hota hai, jo ek maulik <strong>PRP</strong> hai. Milk ko turant 5°C se neeche thanda kiya jaata hai (ek <strong>oPRP</strong>) microbial vikas ko rokne ke liye. Phir ise dahi ke prakar ke anusaar vanchhit fat aur SNF staron par standardize kiya jaata hai. Ek mazboot dahi ke liye, SNF ko aksar skim milk powder milakar 10-12% tak badhaya jaata hai. Yah sthir utpaad gunvatta sunishchit karne ke liye ek <strong>oPRP</strong> hai.</li>
                <li><strong>Heat Treatment (CCP-1):</strong> Standardized milk ko high heat treatment, aam taur par <strong>90-95°C par 10 minute</strong> ke liye diya jaata hai. Yah standard pasteurization se zyada gahan hai aur yah ek <strong>Critical Control Point (CCP-1)</strong> hai. Vaigyanik roop se, yah gahan garmi <strong>whey proteins</strong> (mukhya roop se β-lactoglobulin) ko unki prakritik sanrachna se khol deti hai (denature karti hai). Ye denatured whey proteins phir <strong>casein micelles</strong> ki satah (vishesh roop se κ-casein) ke saath jud jaate hain. Yah interaction ek adhik jatil aur sthir protein network banata hai jo adhik paani rok sakta hai, jiske parinaamswaroop ek mota, adhik viscous curd banta hai jismein kam syneresis hota hai. Yah anavashyak microorganisms ko bhi nasht karta hai.</li>
                <li><strong>Homogenization (Vaikalpik, oPRP):</strong> Jabki paramparik dahi ke liye hamesha nahi kiya jaata, homogenization (ek <strong>oPRP</strong>) ek chikna, adhik saman dahi banane aur upar malai ki parat banne se rokne ke liye kiya ja sakta hai. Yah aam taur par heat treatment ke baad lagbhag 65°C par kiya jaata hai.</li>
                <li><strong>Incubation Temperature tak Cooling (oPRP):</strong> Heat treatment ke baad, milk ko starter culture ke liye optimal vikas taapman, jo aam taur par <strong>40-42°C</strong> ke beech hota hai, tak thanda kiya jaata hai. Yah kadam ek <strong>oPRP</strong> hai kyonki satik taapman niyantran avashyak hai. Yadi taapman bahut adhik hai, to yah starter bacteria ko nuksan pahuncha sakta hai; yadi yah bahut kam hai, to fermentation bahut dheema hoga, jisse antim utpaad ki gunvatta prabhavit hogi.</li>
                <li><strong>Inoculation (oPRP):</strong> Ek vishisht dahi starter culture (1-2%) milaya jaata hai. Is culture ki shuddhta aur jivan kshamata mahatvapurna hai, jisse yah kadam ek <strong>oPRP</strong> ban jaata hai. Is culture mein lactic acid bacteria ke vishisht strains hote hain jo doodh ko ferment karenge.</li>
                <li><strong>Packaging aur Incubation (PRP, CCP-2):</strong> 'Set curd' style dahi ke liye, inoculated milk ko turant antim retail packages (ek <strong>PRP</strong>) mein bhara jaata hai. In cups ko phir ek incubation room mein le jaaya jaata hai, jise 40-42°C par banaye rakha jaata hai. Incubation (3-4 ghante) ke dauran, bacteria lactose ko lactic acid mein ferment karte hain, jisse pH gir jaata hai. Jab pH casein ke isoelectric point (lagbhag 4.6) tak pahunch jaata hai, to proteins jam kar gel sanrachna banate hain. Yah niyantrit fermentation suraksha (pathogens ko rokne) aur gunvatta dono ke liye ek <strong>Critical Control Point (CCP-2)</strong> hai.</li>
                <li><strong>Cooling & Cold Storage (CCP-3):</strong> Jaise hi vanchhit amlata (jaise, 0.7-0.8%) aur dridhata prapt ho jaati hai, dahi ko tezi se 5°C se neeche thanda kiya jaana chahiye. Yah ek <strong>Critical Control Point (CCP-3)</strong> hai. Tezi se thanda karna fermentation prakriya ko turant rok deta hai, utpaad ko bahut zyada khatta hone se bachata hai. Cold storage dahi ki sanrachna ko sthir karta hai aur vitran se pehle swaad ko mulayam hone deta hai.</li>
            </ol>
        `
    }
}

    

    