
export const yoghurtContent = {
    en: {
        title: "Yoghurt Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Yoghurt</h3>
            <p>Yoghurt is a globally popular fermented milk product, produced by the bacterial fermentation of milk. What distinguishes yoghurt from Dahi (Indian curd) is the specific pair of thermophilic bacteria used for its fermentation: <strong><i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i></strong> and <strong><i>Streptococcus thermophilus</i></strong>. These two bacteria work in symbiosis to produce the characteristic thick, viscous texture and tangy, aromatic flavor of yoghurt.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Yoghurt</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) provides compositional standards for different types of yoghurt, primarily based on their fat and solids-not-fat content.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Yoghurt</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Minimum Milk Solids-Not-Fat (SNF) % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Yoghurt (from whole milk)</strong></td>
                            <td class="p-2 border">Not less than 3.0 and not more than 15.0</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Partly Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">More than 0.5 and less than 3.0</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">Not more than 0.5</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Yoghurt with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Yoghurt Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (Fat & SNF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">High Heat Treatment (90-95°C for 5-10 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Incubation Temperature (42-45°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Yoghurt Starter Culture</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (Set Yoghurt) or Incubation in Tank (Stirred Yoghurt) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation (at 42-45°C until pH 4.6)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Rapid Cooling (to &lt;10°C) & Cold Storage <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Standardization and Heat Treatment (PRP, CCP-1):</strong>
                    <p>The process starts with standardizing the milk to the desired fat and SNF content. The SNF is often fortified to 12-14% using skim milk powder. This higher SNF content provides more protein (casein), which is essential for forming a strong gel network, resulting in a thicker curd and reducing whey separation (syneresis). This standardization is a <strong>Prerequisite Program (PRP)</strong> for consistent quality.</p>
                    <p>The milk then undergoes a high heat treatment, typically <strong>90-95°C for 5-10 minutes</strong>. This is a <strong>Critical Control Point (CCP-1)</strong> as it ensures the destruction of pathogenic and spoilage microorganisms. Scientifically, this intense heat also denatures the whey proteins (mainly β-lactoglobulin), causing them to unfold. These denatured proteins then associate with the surface of the casein micelles (specifically with κ-casein). This interaction creates a more complex and stable protein network that can hold more water, resulting in a thicker, more viscous curd with minimal syneresis.</p>
                </li>
                <li><strong>Cooling to Incubation Temperature (oPRP):</strong>
                    <p>After heat treatment, the milk is cooled to the optimum incubation temperature of <strong>42-45°C</strong>. This step is an <strong>Operational Prerequisite Program (oPRP)</strong> because precise temperature control is essential for the activity of the specific starter culture. If the temperature is too high, it can kill the starter bacteria; if it's too low, their growth will be too slow, affecting the fermentation time and final product quality.</p>
                </li>
                <li><strong>Inoculation with Yoghurt Culture (oPRP):</strong>
                    <p>The specific yoghurt starter culture, containing <i>Lactobacillus bulgaricus</i> and <i>Streptococcus thermophilus</i> typically in a 1:1 ratio, is added at a rate of 1-3%. The purity and viability of this culture are critical, making this step an <strong>oPRP</strong>.</p>
                    <p>These two bacteria exhibit a <strong>symbiotic relationship</strong>. <i>S. thermophilus</i> grows first, producing formic acid and CO₂, which stimulates the growth of <i>L. bulgaricus</i>. In turn, <i>L. bulgaricus</i>, being more proteolytic, breaks down proteins into smaller peptides and amino acids, which are essential nutrients that stimulate the growth of <i>S. thermophilus</i>. This mutualism ensures a faster and more consistent fermentation process.</p>
                </li>
                <li><strong>Incubation (CCP-2):</strong>
                    <p>The inoculated milk is incubated at 42-45°C. During this phase, the bacteria ferment lactose into lactic acid, causing the pH to drop. When the pH reaches the isoelectric point of casein (around 4.6), the casein micelles lose their negative charge, aggregate, and form a three-dimensional gel network, trapping the fat and whey. This is the formation of the yoghurt curd.</p>
                    <p>Simultaneously, the starter culture produces characteristic flavor compounds. <i>Lactobacillus bulgaricus</i> is primarily responsible for producing <strong>acetaldehyde</strong>, which gives yoghurt its typical 'green apple' or tangy aroma. The entire incubation process is a <strong>Critical Control Point (CCP-2)</strong> because achieving the target pH within a specific time frame is essential for product safety (inhibiting pathogens) and quality.</p>
                </li>
                 <li><strong>Flavoured Yoghurt:</strong> For flavoured yoghurt, a sterilized fruit preparation (fruit preserve) is added. This can be done in two ways:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Fruit-at-the-bottom (Set yoghurt):</strong> The fruit preparation is dosed into the bottom of the cup before the inoculated milk is filled.</li>
                        <li><strong>Blended/Stirred yoghurt:</strong> After incubation in a large tank, the firm curd is broken, cooled, and then gently blended with the fruit preparation before packaging.</li>
                    </ul>
                </li>
                <li><strong>Cooling and Cold Storage (CCP-3):</strong>
                    <p>Once the desired acidity (e.g., 0.9% lactic acid) and firmness are achieved, the yoghurt must be rapidly cooled to below 10°C (ideally <5°C). This is a <strong>Critical Control Point (CCP-3)</strong>. Rapid cooling immediately halts the fermentation process, preventing the product from becoming too sour. It also helps to firm up the gel structure and minimize whey separation. The final product must be stored and distributed under strict refrigeration to maintain its quality and ensure safety until consumption.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "Yoghurt Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt ka Introduction</h3>
            <p>Yoghurt ek vishva-star par lokpriya fermented milk product hai, jo milk ke bacterial fermentation se utpann hota hai. Yoghurt ko Dahi (Indian curd) se alag karne wali cheez iske fermentation ke liye istemal hone wale vishisht thermophilic bacteria ki jodi hai: <strong><i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i></strong> aur <strong><i>Streptococcus thermophilus</i></strong>. Ye dono bacteria symbiosis mein kaam karte hain taaki yoghurt ki vishesh moti, viscous texture aur teekha, sugandhit swaad utpann ho sake.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI ke Anusar Yoghurt ke Standards</h3>
            <p>Food Safety and Standards Authority of India (FSSAI) vibhinn prakar ke yoghurt ke liye compositional standards pradan karti hai, jo mukhya roop se unke fat aur solids-not-fat content par adharit hain.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Yoghurt ka Prakar</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Minimum Milk Solids-Not-Fat (SNF) % (m/m)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Yoghurt (whole milk se)</strong></td>
                            <td class="p-2 border">3.0 se kam nahi aur 15.0 se adhik nahi</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Partly Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">0.5 se adhik aur 3.0 se kam</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">0.5 se adhik nahi</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath Yoghurt ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt Production ke liye Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (Fat & SNF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">High Heat Treatment (90-95°C 5-10 min ke liye) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Incubation Temperature tak Cooling (42-45°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Yoghurt Starter Culture</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (Set Yoghurt) ya Tank mein Incubation (Stirred Yoghurt) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation (42-45°C par pH 4.6 tak)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Rapid Cooling (&lt;10°C) & Cold Storage <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Detailed Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Milk Standardization aur Heat Treatment (PRP, CCP-1):</strong>
                    <p>Process milk ko desired fat aur SNF levels par standardize karne se shuru hota hai. SNF ko aksar skim milk powder ka upyog karke 12-14% tak badhaya jaata hai. Yeh higher SNF content ek mazboot gel network banane ke liye adhik protein (casein) pradan karta hai, jiske parinaamswaroop ek mota curd banta hai aur whey separation (syneresis) kam hota hai. Yeh standardization sthir gunvatta ke liye ek <strong>Prerequisite Program (PRP)</strong> hai.</p>
                    <p>Phir milk ko high heat treatment, aam taur par <strong>90-95°C par 5-10 minute</strong> ke liye diya jaata hai. Yeh ek <strong>Critical Control Point (CCP-1)</strong> hai kyunki yeh pathogenic aur spoilage microorganisms ka nash sunishchit karta hai. Vaigyanik roop se, yeh gahan garmi <strong>whey proteins</strong> (mukhya roop se β-lactoglobulin) ko unki prakritik sanrachna se khol deti hai (denature karti hai). Ye denatured proteins phir <strong>casein micelles</strong> ki satah (vishesh roop se κ-casein) ke saath jud jaate hain. Yeh interaction ek adhik jatil aur sthir protein network banata hai jo adhik paani rok sakta hai, jiske parinaamswaroop ek mota, adhik viscous curd banta hai jismein kam syneresis hota hai.</p>
                </li>
                <li><strong>Incubation Temperature tak Cooling (oPRP):</strong>
                    <p>Heat treatment ke baad, milk ko optimal incubation temperature <strong>42-45°C</strong> tak thanda kiya jaata hai. Yeh kadam ek <strong>Operational Prerequisite Program (oPRP)</strong> hai kyunki vishisht starter culture ki gatividhi ke liye satik taapman niyantran avashyak hai. Yadi taapman bahut adhik hai, to yah starter bacteria ko maar sakta hai; yadi yah bahut kam hai, to unka vikas bahut dheema hoga, jisse fermentation samay aur antim utpaad ki gunvatta prabhavit hogi.</p>
                </li>
                <li><strong>Yoghurt Culture ke saath Inoculation (oPRP):</strong>
                    <p>Vishisht yoghurt starter culture, jismein <i>Lactobacillus bulgaricus</i> aur <i>Streptococcus thermophilus</i> aam taur par 1:1 anupaat mein hote hain, ko 1-3% ki dar se milaya jaata hai. Is culture ki shuddhta aur jivan kshamata mahatvapurna hai, jisse yeh kadam ek <strong>oPRP</strong> ban jaata hai.</p>
                    <p>Ye dono bacteria ek <strong>symbiotic sambandh</strong> pradarshit karte hain. <i>S. thermophilus</i> pehle vikas karta hai, formic acid aur CO₂ utpann karta hai, jo <i>L. bulgaricus</i> ke vikas ko prerit karta hai. Badle mein, <i>L. bulgaricus</i>, jo adhik proteolytic hai, proteins ko chote peptides aur amino acids mein todta hai, jo <i>S. thermophilus</i> ke vikas ke liye avashyak poshak tatva hain. Yeh sahayog ek tez aur adhik sthir fermentation prakriya sunishchit karta hai.</p>
                </li>
                <li><strong>Incubation (Jamana) (CCP-2):</strong>
                    <p>Inoculated milk ko 42-45°C par incubate kiya jaata hai. Is avadhi ke dauran, bacteria lactose ko lactic acid mein ferment karte hain, jisse pH gir jaata hai. Jab pH casein ke <strong>isoelectric point (lagbhag 4.6)</strong> tak pahunch jaata hai, to casein micelles apna negative charge kho dete hain, ekatrit hote hain, aur ek three-dimensional gel network banate hain, jo fat aur whey ko trap kar leta hai. Yah yoghurt curd ka gathan hai.</p>
                    <p>Saath hi, starter culture vishesh swaad yaugik utpann karte hain. <i>Lactobacillus bulgaricus</i> mukhya roop se <strong>acetaldehyde</strong> utpann karne ke liye jimmedar hai, jo yoghurt ko uski aam 'hare seb' jaisi ya teekhi sugandh deta hai. Poori incubation prakriya ek <strong>Critical Control Point (CCP-2)</strong> hai kyunki ek vishisht samay seema ke bhitar lakshya pH prapt karna utpaad suraksha (pathogens ko rokne) aur gunvatta ke liye avashyak hai।</p>
                </li>
                 <li><strong>Flavoured Yoghurt:</strong> Flavoured yoghurt ke liye, ek sterilized fruit preparation (fruit preserve) milayi jaati hai। Yah do tarikon se kiya ja sakta hai:
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Fruit-at-the-bottom (Set yoghurt):</strong> Inoculated milk bharne se pehle fruit preparation ko cup ke neeche dose kiya jaata hai।</li>
                        <li><strong>Blended/Stirred yoghurt:</strong> Ek bade tank mein incubation ke baad, mazboot dahi ko toda jaata hai, thanda kiya jaata hai, aur phir packaging se pehle fruit preparation ke saath dheere-dheere milaya jaata hai।</li>
                    </ul>
                </li>
                <li><strong>Cooling aur Cold Storage (CCP-3):</strong>
                    <p>Ek baar jab desired acidity (jaise, 0.9% lactic acid) aur firmness prapt ho jaati hai, to yoghurt ko tezi se 10°C se neeche (aadarsh roop se <5°C) thanda kiya jaana chahiye। Yah ek <strong>Critical Control Point (CCP-3)</strong> hai। Tezi se thanda karna fermentation prakriya ko turant rok deta hai, utpaad ko bahut zyada khatta hone se bachata hai। Yah gel sanrachna ko bhi mazboot karta hai aur antim texture aur sthirata ke liye mahatvapurna hai। Antim utpaad ko uski gunvatta banaye rakhne aur upbhog tak suraksha sunishchit karne ke liye sakht refrigeration ke tahat store aur vitrit kiya jaana chahiye।</p>
                </li>
            </ol>
        `
    }
}

  