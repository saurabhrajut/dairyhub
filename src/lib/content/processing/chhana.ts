
export const chhanaContent = {
    en: {
        title: "Chhana Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Chhana</h3>
            <p>Chhana is a heat and acid-coagulated milk protein product, similar to paneer but crucially different in its final state. Unlike paneer, chhana is not pressed into a solid block. It is a soft, spongy, and moist mass of coagulated casein and denatured whey proteins. This unique texture makes it the essential base ingredient for a wide variety of famous Indian sweets, including Rasgulla, Sandesh, and Chhana Poda.</p>
            <p>Cow milk is generally preferred for chhana making as it results in a softer, more desirable texture compared to the denser curd produced from buffalo milk.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Chhana</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) defines standards for Chhana based on its moisture and fat content to ensure quality and prevent adulteration.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Chhana</th>
                            <th class="p-2 border">Maximum Moisture % (m/m)</th>
                            <th class="p-2 border">Minimum Milk Fat % (on dry basis)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Chhana (from whole milk)</strong></td>
                            <td class="p-2 border">65.0</td>
                            <td class="p-2 border">50.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Medium Fat Chhana</strong></td>
                            <td class="p-2 border">65.0</td>
                            <td class="p-2 border">More than 20.0 and less than 50.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Low Fat Chhana</strong></td>
                            <td class="p-2 border">70.0</td>
                            <td class="p-2 border">Not more than 20.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Chhana with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Chhana Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Heating to near boiling (~90°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70-80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Coagulation with Acid (pH ~5.4)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Settling of Curd (5-10 min)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Draining of Whey through Muslin Cloth</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Cooling and Final Draining (No Pressing)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Chhana Ready for Use/Packaging</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Selection and Standardization (PRP):</strong>
                    <p>The quality of chhana is highly dependent on the quality of the raw milk. Fresh cow milk with low acidity (0.13-0.14% lactic acid) is preferred as it yields a soft and spongy chhana, ideal for sweets. Buffalo milk results in a harder, chewier chhana. The milk may be standardized to achieve the desired fat content for the final product. This initial selection and standardization is a crucial <strong>Prerequisite Program (PRP)</strong> to ensure product consistency.</p>
                </li>
                <li><strong>Heating (CCP-1):</strong>
                    <p>The milk is heated to a temperature near its boiling point, typically around <strong>90°C</strong>. This step is a <strong>Critical Control Point (CCP-1)</strong> for safety, as it destroys pathogenic microorganisms. Scientifically, this high heat treatment is vital for maximizing yield and achieving the correct texture. It denatures the whey proteins (like β-lactoglobulin and α-lactalbumin), causing them to unfold. These denatured proteins then interact with and become entrapped within the casein network during coagulation, significantly increasing the total solids recovered and resulting in a softer, moister chhana.</p>
                </li>
                <li><strong>Cooling to Coagulation Temperature (oPRP):</strong>
                    <p>After heating, the milk is cooled down to the optimal coagulation temperature, which is between <strong>70-80°C</strong>. This is an <strong>Operational Prerequisite Program (oPRP)</strong>. Coagulating at too high a temperature (>85°C) can result in a hard, dry chhana with a lower yield, while coagulating at too low a temperature (<60°C) can lead to a very soft, fragile curd that is difficult to handle. Precise temperature control is key.</p>
                </li>
                <li><strong>Coagulation (CCP-2):</strong>
                    <p>A coagulating agent, typically a 1-2% solution of citric acid, is gently and slowly added to the hot milk while stirring. The acid lowers the pH of the milk. When the pH reaches the isoelectric point of casein (around 4.6), the casein micelles lose their net negative charge and aggregate, forming a curd. Simultaneously, the denatured whey proteins co-precipitate with the casein. The endpoint is judged visually when the curd separates and a clear, greenish whey is obtained. This step is a <strong>Critical Control Point (CCP-2)</strong> because achieving the correct pH and a clean break is essential for both the texture and safety (inhibiting bacterial growth) of the final product.</p>
                </li>
                <li><strong>Draining of Whey:</strong>
                    <p>Once coagulation is complete, stirring is stopped, and the curd is allowed to settle for 5-10 minutes. The whey is then drained off, usually by pouring the entire contents of the coagulation vat through a large muslin or cheese cloth. Unlike paneer, the chhana is not pressed. It is hung in the cloth for a short period to allow excess whey to drain naturally. This gentle draining process is what gives chhana its characteristic high moisture content and soft, crumbly texture.</p>
                </li>
                 <li><strong>Packaging and Storage:</strong>
                    <p>Chhana is highly perishable due to its high moisture content. It is typically used immediately for sweet making. If it needs to be stored, it must be rapidly cooled and kept under strict refrigeration (below 5°C) and used within a day or two to prevent microbial spoilage.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "Chhana Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Chhana ka Introduction</h3>
            <p>Chhana ek garmi aur acid se jamaya gaya milk protein utpaad hai, jo paneer ke saman hai lekin apni antim avastha mein mahatvapurna roop se alag hai. Paneer ke vipreet, chhana ko ek thos block mein dabaya nahi jaata hai. Yeh jamaye gaye casein aur denatured whey proteins ka ek naram, spongy, aur nam mass hai. Yeh anokha texture ise Rasgulla, Sandesh, aur Chhana Poda jaise kai prasiddh Bharatiya mithaiyon ke liye avashyak base samagri banata hai.</p>
            <p>Chhana banane ke liye aam taur par gaay ke milk ko prathmikta di jaati hai kyunki isse bhains ke milk se utpann hone wale adhik ghane dahi ki tulna mein ek naram aur adhik manchaha texture milta hai.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI ke Anusar Chhana ke Standards</h3>
            <p>Food Safety and Standards Authority of India (FSSAI) gunvatta sunishchit karne aur milavat ko rokne ke liye chhana ke liye uske nami aur vasa samagri ke adhaar par maanak paribhashit karti hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Chhana ka Prakar</th>
                            <th class="p-2 border">Adhiktam Nami % (m/m)</th>
                            <th class="p-2 border">Nyunatam Milk Fat % (dry basis par)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Chhana (whole milk se)</strong></td>
                            <td class="p-2 border">65.0</td>
                            <td class="p-2 border">50.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Medium Fat Chhana</strong></td>
                            <td class="p-2 border">65.0</td>
                            <td class="p-2 border">20.0 se adhik aur 50.0 se kam</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Low Fat Chhana</strong></td>
                            <td class="p-2 border">70.0</td>
                            <td class="p-2 border">20.0 se adhik nahi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath Chhana ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Chhana Production ke liye Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Ubalne ke kareeb tak Garam karna (~90°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Jamane ke Taapman tak Thanda karna (70-80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Acid ke saath Jamana (pH ~5.4)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Dahi ka Basna (5-10 min)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Malmal ke Kapde se Whey Nikalna</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Thanda karna aur Antim Draining (Bina Dabaye)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Upyog/Packaging ke liye Chhana Taiyar</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Detailed Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Selection aur Standardization (PRP):</strong>
                    <p>Chhana ki gunvatta raw milk ki gunvatta par bahut nirbhar karti hai. Taaza gaay ka milk jiski acidity kam ho (0.13-0.14% lactic acid) behtar mana jaata hai kyunki isse naram aur spongy chhana banta hai, jo mithaiyon ke liye aadarsh hai. Bhains ka milk ek kathor, chabane wala chhana deta hai. Milk ko antim utpaad ke liye manchaha vasa samagri prapt karne ke liye standardize kiya ja sakta hai. Yeh prarambhik chayan aur manakikaran utpaad ki sthirata sunishchit karne ke liye ek mahatvapurna <strong>Prerequisite Program (PRP)</strong> hai.</p>
                </li>
                <li><strong>Heating (CCP-1):</strong>
                    <p>Milk ko uske ubalne ke bindu ke kareeb, aam taur par lagbhag <strong>90°C</strong> tak garam kiya jaata hai. Yeh kadam suraksha ke liye ek <strong>Critical Control Point (CCP-1)</strong> hai, kyunki yeh pathogenic microorganisms ko nasht kar deta hai. Vaigyanik roop se, yeh uchch taap upchar upaj ko adhiktam karne aur sahi texture prapt karne ke liye mahatvapurna hai. Yeh whey proteins (jaise β-lactoglobulin aur α-lactalbumin) ko denature karta hai, jisse ve coagulation ke dauran casein network mein phans jaate hain, jisse kul thos ki recovery badh jaati hai aur ek naram, adhik nam chhana milta hai.</p>
                </li>
                <li><strong>Coagulation Temperature tak Cooling (oPRP):</strong>
                    <p>Garam karne ke baad, milk ko optimal coagulation temperature, jo <strong>70-80°C</strong> ke beech hai, tak thanda kiya jaata hai. Yeh ek <strong>Operational Prerequisite Program (oPRP)</strong> hai. Bahut adhik taapman (>85°C) par jamane se ek kathor, sukha chhana mil sakta hai jiski upaj kam hoti hai, jabki bahut kam taapman (<60°C) par jamane se ek bahut naram, nazuk dahi ban sakta hai jise handle karna mushkil hota hai. Sateek taapman niyantran iski kunji hai.</p>
                </li>
                <li><strong>Coagulation (CCP-2):</strong>
                    <p>Ek coagulating agent, aam taur par citric acid ka 1-2% ghol, garam milk mein dheere-dheere milaya jaata hai jabki ise dheere-dheere hilaya jaata hai. Acid milk ka pH kam karta hai. Jab pH casein ke isoelectric point (lagbhag 4.6) tak pahunch jaata hai, to casein micelles apna shuddh negative charge kho dete hain aur ek dahi banate hue ekatrit hote hain. Saath hi, denatured whey proteins casein ke saath sah-avakshipit (co-precipitate) hote hain. Antim bindu ko drshy roop se tab dekha jaata hai jab dahi alag ho jaata hai aur ek saaf, hare rang ka whey prapt hota hai. Yeh kadam ek <strong>Critical Control Point (CCP-2)</strong> hai kyunki sahi pH aur ek saaf break prapt karna antim utpaad ke texture aur suraksha (bacterial growth ko rokne) dono ke liye avashyak hai.</p>
                </li>
                <li><strong>Whey ka Nikalna:</strong>
                    <p>Jab coagulation poora ho jaata hai, to hilana band kar diya jaata hai, aur dahi ko 5-10 minute tak basne diya jaata hai. Phir whey ko nikal diya jaata hai, aam taur par coagulation vat ki poori samagri ko ek bade malmal ke kapde ke madhyam se daal kar. Paneer ke vipreet, chhana ko dabaya nahi jaata hai. Ise kapde mein thodi der ke liye latkaya jaata hai taaki atirikt whey svabhavik roop se nikal jaaye. Yeh komal draining prakriya hi chhana ko uski vishesh uchch nami samagri aur naram, bhurbhuri banawat deti hai.</p>
                </li>
                 <li><strong>Packaging aur Storage:</strong>
                    <p>Chhana apni uchch nami samagri ke kaaran bahut kharab hone wala hota hai. Iska aam taur par turant mithai banane ke liye upyog kiya jaata hai. Yadi ise store karne ki avashyakta hai, to ise tezi se thanda kiya jaana chahiye aur microbial kharabi ko rokne ke liye sakht refrigeration (5°C se neeche) ke tahat rakha jaana chahiye aur ek ya do din ke bhitar upyog kar lena chahiye.</p>
                </li>
            </ol>
        `
    }
}

    