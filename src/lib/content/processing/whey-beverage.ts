
export const wheyBeverageContent = {
    en: {
        title: "Whey-based Beverage Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Whey-based Beverages</h3>
            <p>Whey, once considered a waste byproduct of cheese and paneer manufacturing, is now recognized as a highly nutritious liquid rich in whey proteins (like α-lactalbumin and β-lactoglobulin), lactose, minerals, and vitamins. Processing this whey into refreshing and nutritious beverages is an excellent way to add value and reduce dairy waste. Whey beverages can be clear (like a soft drink) or cloudy (like a traditional lassi or buttermilk).</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Whey Beverages</h3>
            <p>While FSSAI does not have a single, dedicated standard specifically for "Whey Beverage," the product must comply with several regulations. It generally falls under the category of "Water-Based Beverages (Non-Alcoholic)". The final product must adhere to standards for microbiological safety, permissible additives (like colors, flavors, and preservatives), and labeling. If it claims to be a source of protein, it must meet the specified protein levels.</p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Whey-based Beverages with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Whey Beverage Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Whey Reception (from Paneer/Cheese making) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Clarification & Fat Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Pasteurization (e.g., 72°C for 15 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Acid, Stabilizers, Flavors) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Optional, for cloudy beverages)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">Second Pasteurization/Sterilization (Final Safety Step) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                 <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Hot or Cold Fill) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                 <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Whey Reception and Clarification (PRP/oPRP):</strong>
                    <p>The process starts with collecting fresh whey directly from the paneer or cheese production line. The type of whey (sweet whey from cheese or acid whey from paneer/chhana) determines the final taste profile. The whey is first clarified using a centrifuge to remove any remaining cheese/paneer fines and separated to remove residual fat. This is an <strong>Operational Prerequisite Program (oPRP)</strong> as clear, fat-free whey is essential for a high-quality final product.</p>
                </li>
                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>The clarified whey is pasteurized (e.g., at 72°C for 15 seconds) to destroy spoilage microorganisms and any potential pathogens. This step is a <strong>Critical Control Point (CCP-1)</strong> to ensure the initial safety of the base liquid.</p>
                </li>
                <li><strong>Ingredient Blending (PRP):</strong>
                    <p>The pasteurized whey is then transferred to a blending tank. Here, other ingredients are added to create the desired beverage. This is a <strong>Prerequisite Program (PRP)</strong> where correct formulation is key.</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Sugar/Sweeteners:</strong> To balance the natural acidity of whey and provide sweetness.</li>
                        <li><strong>Acidulants:</strong> Citric acid or malic acid may be added to enhance the tangy flavor and act as a preservative.</li>
                        <li><strong>Stabilizers:</strong> For cloudy or thicker beverages, stabilizers like Pectin or Carboxymethyl cellulose (CMC) are added to improve mouthfeel and prevent sedimentation of proteins.</li>
                        <li><strong>Flavors and Colors:</strong> Natural or artificial flavors (e.g., mango, lemon) and food-grade colors are added.</li>
                    </ul>
                </li>
                <li><strong>Homogenization:</strong>
                    <p>For cloudy or opaque beverages, the mix may be homogenized. This process creates a stable emulsion and a smoother mouthfeel, especially if fruit pulp or other solids are added.</p>
                </li>
                 <li><strong>Second Pasteurization/Sterilization (CCP-2):</strong>
                    <p>After all ingredients are blended, the final mix undergoes another heat treatment. This is a crucial <strong>Critical Control Point (CCP-2)</strong>. For a refrigerated product with a shorter shelf life, a final pasteurization is sufficient. For a shelf-stable, long-life beverage, UHT (Ultra-High Temperature) treatment is applied to achieve commercial sterility.</p>
                </li>
                <li><strong>Packaging and Storage:</strong>
                    <p>The final step is packaging. For UHT products, this is done aseptically (in a sterile environment) into sterile containers (like Tetra Paks). For pasteurized products, it can be hot-filled or cold-filled into sanitized bottles or pouches. The packaged beverage is then stored appropriately (refrigerated for pasteurized products, ambient for UHT products) until distribution.</p>
                </li>
            </ol>
        `
    },
    hi: {
        title: "Whey-based Beverage Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Whey-based Beverages</h3>
            <p>Whey, jise paneer aur chhana banane ka ek up-utpad (byproduct) mana jaata tha, ab ek atyadhik paushtik taral ke roop mein pahchana jaata hai, jo whey proteins (jaise α-lactalbumin aur β-lactoglobulin), lactose, minerals, aur vitamins se bharpoor hai। Is whey ko taazagi bhare aur paushtik pey (beverages) mein process karna value add karne aur dairy waste ko kam karne ka ek utkrusht tarika hai। Whey pey saaf (soft drink ki tarah) ya dhundhle (lassi ya buttermilk ki tarah) ho sakte hain।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Whey Beverages</h3>
            <p>Jabki FSSAI ke paas "Whey Beverage" ke liye koi ek, samarpit maanak nahi hai, utpaad ko kai niyamon ka paalan karna chahiye। Yah aam taur par "Water-Based Beverages (Non-Alcoholic)" ki shreni mein aata hai। Antim utpaad ko sukshmjiviy suraksha, anumati prapt additives (jaise rang, swaad, aur preservatives), aur labeling ke liye manakon ka paalan karna chahiye। Yadi yah protein ka srot hone ka daava karta hai, to ise nirdisht protein staron ko poora karna chahiye।</p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath Whey-based Beverages ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey Beverage Production ke liye Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Whey Reception (Paneer/Cheese banane se) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Clarification & Fat Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Pasteurization (jaise, 72°C 15 sec ke liye) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Acid, Stabilizers, Flavors) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Optional, dhundhle pey ke liye)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">Second Pasteurization/Sterilization (Antim Suraksha Chaan) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                 <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Hot ya Cold Fill) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                 <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Vistrit Vivaran</h3>
            <ol class="list-decimal list-outside pl-5 space-y-4">
                <li><strong>Whey Reception aur Clarification (PRP/oPRP):</strong>
                    <p>Prakriya paneer ya cheese utpadan line se seedhe taaza whey ekatr karne se shuru hoti hai। Whey ka prakar (cheese se meetha whey ya paneer/chhana se amliy whey) antim swaad profile ko nirdharit karta hai। Whey ko sabse pehle centrifuge ka upyog karke saaf kiya jaata hai taki shesh cheese/paneer ke kanon ko hataya ja sake aur shesh vasa ko alag kiya ja sake। Yah ek <strong>Operational Prerequisite Program (oPRP)</strong> hai kyonki saaf, vasa-mukt whey ek uchch gunvatta wale antim utpad ke liye avashyak hai।</p>
                </li>
                <li><strong>Pasteurization (CCP-1):</strong>
                    <p>Saaf kiye gaye whey ko pasteurize kiya jaata hai (jaise, 72°C par 15 second ke liye) taki kharab karne wale sukshmajiviyon aur kisi bhi sambhavit roganuon ko nasht kiya ja sake। Yah kadam base liquid ki prarambhik suraksha sunishchit karne ke liye ek <strong>Critical Control Point (CCP-1)</strong> hai।</p>
                </li>
                <li><strong>Ingredient Blending (PRP):</strong>
                    <p>Pasteurized whey ko phir ek blending tank mein sthanantarit kiya jaata hai। Yahan, manchaha pey banane ke liye anya samagri milayi jaati hai। Yah ek <strong>Prerequisite Program (PRP)</strong> hai jahan sahi formulation mahatvapurna hai।</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Cheeni/Sweeteners:</strong> Whey ki prakritik amliyata ko santulit karne aur mithas pradan karne ke liye।</li>
                        <li><strong>Acidulants:</strong> Khatte swaad ko badhane aur ek preservative ke roop mein kaam karne ke liye Citric acid ya malic acid milaya ja sakta hai।</li>
                        <li><strong>Stabilizers:</strong> Dhundhle ya mote pey ke liye, Pectin ya Carboxymethyl cellulose (CMC) jaise stabilizers mouthfeel mein sudhar karne aur proteins ke avasadan ko rokne ke liye milaye jaate hain।</li>
                        <li><strong>Flavors aur Colors:</strong> Prakritik ya kritrim swaad (jaise, aam, nimbu) aur food-grade rang milaye jaate hain।</li>
                    </ul>
                </li>
                <li><strong>Homogenization:</strong>
                    <p>Dhundhle ya aparadarshi pey ke liye, mishran ko homogenize kiya ja sakta hai। Yah prakriya ek sthir emulsion aur ek chikna mouthfeel banati hai, vishesh roop se yadi phal ka gooda ya anya thos padarth milaye jaate hain।</p>
                </li>
                 <li><strong>Doosra Pasteurization/Sterilization (CCP-2):</strong>
                    <p>Sabhi samagriyon ko milane ke baad, antim mishran ek aur garmi upchar se guzarta hai। Yah ek mahatvapurna <strong>Critical Control Point (CCP-2)</strong> hai। Ek kam shelf life wale refrigerated utpad ke liye, ek antim pasteurization paryapt hai। Ek shelf-stable, lambe samay tak chalne wale pey ke liye, vyavsayik banjhpan prapt karne ke liye UHT (Ultra-High Temperature) upchar lagu kiya jaata hai।</p>
                </li>
                <li><strong>Packaging aur Storage:</strong>
                    <p>Antim kadam packaging hai। UHT utpadon ke liye, yah aseptically (ek banjh vatavaran mein) banjh containers (jaise Tetra Paks) mein kiya jaata hai। Pasteurized utpadon ke liye, ise hot-filled ya cold-filled karke sanitized bottles ya pouches mein bhara ja sakta hai। Pack kiye gaye pey ko phir uchit roop se store kiya jaata hai (pasteurized utpadon ke liye refrigerated, UHT utpadon ke liye ambient) jab tak ki vitran na ho jaaye।</p>
                </li>
            </ol>
        `
    }
}

    
