

export const compositionalAnalysisContent = {
  hi: {
    main_title: "Dairy Products ka Compositional Analysis",
    main_description: "Chemical quality assurance ke liye ek detailed guide — Scientific aur Practical Testing Methods ke saath. Har test mein use hone wale factors, constants aur formulas ki complete scientific explanation included hai.",
    back_to_topics: "Topics par wapas jayein",
    topics: {
      "processed-milk": {
        title: "Doodh (Milk)",
        tests: [
          {
            title: "Fat ka Determination (Gerber Method)",
            purpose: "Fat content ki routine testing, centrifuge ka use karke.",
            reference: "IS 1479 (Part I) 1961 (Reaffirmed 2003)",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ko sulphuric acid aur iso-amyl alcohol ke saath ek special Gerber tube (butyrometer) mein milaya jaata hai. Acid proteins aur doosre solid particles ko ghol deta hai, jisse fat free ho jaata hai. Iso-amyl alcohol fat ki layer ko saaf-saaf alag karne mein madad karta hai. Tubes ko centrifuge kiya jaata hai, aur fat, halka hone ke kaaran, butyrometer ke calibrated stem mein upar uth jaata hai, jahaan iska percentage seedha padha jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Sulphuric Acid:</strong> 90-91% concentration, sp. gr. 1.807-1.812 at 27°C.</li>
                <li><strong>Amyl Alcohol:</strong> Furfural-free, sp. gr. 0.808-0.818 at 27°C.</li>
                <li><strong>Gerber Butyrometer:</strong> ISI marked, suitable range (jaise, 0-10%).</li>
                <li><strong>Pipette:</strong> 10.75 ml (doodh), 10 ml (acid), 1 ml (amyl alcohol).</li>
                <li><strong>Water Bath:</strong> 65 ± 2°C par maintain kiya gaya.</li>
                <li><strong>Gerber Centrifuge:</strong> 1100-1200 rpm mein capable.</li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 10.75 ml doodh hi kyun lete hain? (Sabse Important Sawaal)</h5>
                <p>Ye koi random number nahi hai — ye pure mathematical calculation se nikla hai:</p>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Step 1:</strong> Doodh ki average density = ~1.032 g/ml (27°C par)</li>
                  <li><strong>Step 2:</strong> 10.75 ml × 1.032 g/ml = <strong>11.094 g ≈ 11 g doodh</strong></li>
                  <li><strong>Step 3:</strong> 1% fat of 11 g = 0.11 g fat</li>
                  <li><strong>Step 4:</strong> Fat ki density at 65°C (reading temperature) = ~0.893 g/ml</li>
                  <li><strong>Step 5:</strong> Volume of 0.11 g fat = 0.11 ÷ 0.893 = <strong>0.1232 ml ≈ 0.125 ml</strong></li>
                  <li><strong>Step 6:</strong> Butyrometer ke stem mein har ek graduation (1%) = exactly <strong>0.125 ml</strong> capacity</li>
                </ul>
                <p class="font-semibold">Matlab: 10.75 ml isliye taaki fat column ka har graduation seedha percentage (%) mein padh sakein — koi conversion ki zaroorat nahi! Agar 10 ml ya 11 ml lete to butyrometer scale directly % nahi dikhata.</p>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">❓ 10 ml Sulphuric Acid kyun? Concentration 90-91% hi kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Kaam:</strong> Proteins (casein, whey) ko dissolve karta hai aur fat globules ki membrane tod deta hai taaki fat free ho jaye.</li>
                  <li><strong>10 ml kyun:</strong> 11 g doodh ke saare proteins ko completely digest karne ke liye itna amount zaroori hai — kam hone par protein adhura ghulega, reading galat aayegi.</li>
                  <li><strong>90-91% kyun — less nahi:</strong> Agar concentration <90% ho to proteins puri tarah nahi ghulenge, fat incomplete separate hoga — reading kam aayegi.</li>
                  <li><strong>90-91% kyun — more nahi:</strong> Agar concentration >91% ho to fat ka <strong>charring (jalana)</strong> ho jayega — dark coloured fat layer aayegi, reading galat hogi aur padh nahi paayenge.</li>
                  <li><strong>Sp. gr. 1.807-1.812 at 27°C:</strong> Ye concentration check karne ka tarika hai. Agar sp. gr. is range se bahar hai, to acid ki concentration galat hai — replace karein.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">❓ 1 ml Amyl Alcohol hi kyun? Zyada ya kam kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Kaam 1 (Anti-foaming):</strong> Surface tension ko kam karta hai — fat aur acid layer ke beech clean separation hota hai.</li>
                  <li><strong>Kaam 2 (Anti-charring):</strong> Acid aur organic matter ke reaction se jo dark colour aata hai, wo amyl alcohol reduce karta hai.</li>
                  <li><strong>Kaam 3 (Clarity):</strong> Fat column ko clear aur transparent banata hai taaki reading accurately li ja sake.</li>
                  <li><strong>1 ml se kam hone par:</strong> Fat layer clean nahi hogi, dark spots dikhenge, reading unclear aur inaccurate hogi.</li>
                  <li><strong>1 ml se zyada hone par:</strong> Amyl alcohol khud fat column mein dissolve ho jaayega — <strong>false high reading</strong> aayegi kyunki amyl alcohol ka volume bhi fat ke saath count hoga!</li>
                  <li><strong>Furfural-free kyun:</strong> Furfural ek impurity hai jo acid ke saath dark colour deta hai — fat column ki transparency kharab karta hai aur reading mein interfere karta hai.</li>
                  <li><strong>Sp. gr. 0.808-0.818:</strong> Ye purity check hai — agar is range se bahar hai to alcohol mein impurities hain jo result affect karengi.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">❓ 65 ± 2°C Water Bath hi kyun? Kam ya zyada kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Core reason:</strong> Fat ko <strong>liquid state</strong> mein rakhna zaroori hai taaki column mein smoothly upar aaye aur clear meniscus bane.</li>
                  <li><strong>Milk fat ka melting point:</strong> ~37°C hai, lekin <strong>complete liquefaction</strong> aur <strong>clear readable meniscus</strong> ke liye 65°C optimal temperature hai.</li>
                  <li><strong>65°C se kam hone par:</strong> Fat partially jam jaata hai, fat column mein bubbles ya gaps aate hain — reading kam aayegi.</li>
                  <li><strong>65°C se zyada hone par:</strong> Fat expand ho jaata hai (thermal expansion) — reading artificially high aayegi.</li>
                  <li><strong>±2°C tolerance kyun:</strong> Fat ki density temperature ke saath change hoti hai. 2°C ka difference approximately 0.02% fat ka error deta hai — ye acceptable limit hai.</li>
                  <li><strong>Butyrometer scale bhi 65°C par calibrate kiya gaya hai</strong> — isliye isi temperature par reading leni chahiye.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">❓ 1100-1200 rpm Centrifuge kyun? Zyada fast kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Kaam:</strong> Fat halka hai (density ~0.93 g/ml) vs acid-milk mixture (~1.40 g/ml). Centrifugal force fat ko butyrometer ke narrow stem mein push karta hai.</li>
                  <li><strong>1100 rpm se kam:</strong> Fat puri tarah separate nahi hoga — reading kam aayegi, kuch fat mixture mein hi reh jayega.</li>
                  <li><strong>1200 rpm se zyada:</strong> Glass butyrometer mein garam acid hai — high speed par <strong>tube toot sakti hai</strong> (bahut dangerous — acid splash ho sakta hai!).</li>
                  <li><strong>4-5 minute kyun:</strong> Itna time sufficient hai complete fat separation ke liye — kam time mein incomplete separation, zyada time mein koi additional benefit nahi.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">📊 Summary Table — Sab Ek Nazar Mein:</h5>
                <table class="table-auto border-collapse border border-blue-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-blue-100"><th class="border border-blue-300 p-2">Parameter</th><th class="border border-blue-300 p-2">Value</th><th class="border border-blue-300 p-2">Scientific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-blue-300 p-2">Milk volume</td><td class="border border-blue-300 p-2">10.75 ml</td><td class="border border-blue-300 p-2">~11 g milk → 1% fat = 0.125 ml = 1 butyrometer graduation</td></tr>
                    <tr><td class="border border-blue-300 p-2">H₂SO₄ volume</td><td class="border border-blue-300 p-2">10 ml</td><td class="border border-blue-300 p-2">11 g milk ke proteins ko fully dissolve karne ke liye sufficient</td></tr>
                    <tr><td class="border border-blue-300 p-2">H₂SO₄ conc.</td><td class="border border-blue-300 p-2">90-91%</td><td class="border border-blue-300 p-2">Kam = incomplete digestion; Zyada = fat charring</td></tr>
                    <tr><td class="border border-blue-300 p-2">H₂SO₄ sp. gr.</td><td class="border border-blue-300 p-2">1.807-1.812</td><td class="border border-blue-300 p-2">Concentration verify karne ka measure at 27°C</td></tr>
                    <tr><td class="border border-blue-300 p-2">Amyl alcohol</td><td class="border border-blue-300 p-2">1 ml</td><td class="border border-blue-300 p-2">Kam = unclear; Zyada = false high reading</td></tr>
                    <tr><td class="border border-blue-300 p-2">Amyl sp. gr.</td><td class="border border-blue-300 p-2">0.808-0.818</td><td class="border border-blue-300 p-2">Purity check — impure se error aata hai</td></tr>
                    <tr><td class="border border-blue-300 p-2">Water bath</td><td class="border border-blue-300 p-2">65 ± 2°C</td><td class="border border-blue-300 p-2">Fat liquid + clear meniscus; scale bhi isi par calibrated</td></tr>
                    <tr><td class="border border-blue-300 p-2">Centrifuge</td><td class="border border-blue-300 p-2">1100-1200 rpm</td><td class="border border-blue-300 p-2">Kam = incomplete separation; Zyada = tube breakage danger</td></tr>
                    <tr><td class="border border-blue-300 p-2">Centrifuge time</td><td class="border border-blue-300 p-2">4-5 min</td><td class="border border-blue-300 p-2">Complete separation ke liye sufficient</td></tr>
                    <tr><td class="border border-blue-300 p-2">Fat density (65°C)</td><td class="border border-blue-300 p-2">~0.893 g/ml</td><td class="border border-blue-300 p-2">Garam fat halka hota hai — isi se volume calculate hota hai</td></tr>
                    <tr><td class="border border-blue-300 p-2">Milk density</td><td class="border border-blue-300 p-2">~1.032 g/ml</td><td class="border border-blue-300 p-2">10.75 ml × 1.032 = ~11 g</td></tr>
                    <tr><td class="border border-blue-300 p-2">1 graduation</td><td class="border border-blue-300 p-2">0.125 ml</td><td class="border border-blue-300 p-2">Stem ki internal capacity per % mark</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Butyrometer tube mein 10 ml sulphuric acid daalein bina neck ko geela kiye. <span class="text-xs text-gray-500">(Neck geela hone par acid aur doodh ka premature reaction hoga — local charring hogi)</span></li>
                <li>Deewar ke kinaare 10.75 ml achchi tarah se milaya hua doodh butyrometer mein pipette karein. <span class="text-xs text-gray-500">(Deewar ke kinaare isliye taaki doodh aur acid ki layers alag rahein — mixing controlled ho)</span></li>
                <li>1 ml amyl alcohol daalein. <span class="text-xs text-gray-500">(Ye sab se last mein daalte hain taaki acid-milk reaction ke beech buffer ka kaam kare)</span></li>
                <li>Ek lock stopper se band karein, homogeneous hone tak hilayein, aur poora mixture ke liye ulta karein. <span class="text-xs text-gray-500">(Ulta karna zaroori hai taaki stopper ke peeche trapped sample bhi mix ho jaye — warna incomplete digestion hogi)</span></li>
                <li>5 minute ke liye 65±2°C par water bath mein rakhein. <span class="text-xs text-gray-500">(Ye ensure karta hai ki saare casein particles completely ghul jayein aur reaction complete ho)</span></li>
                <li>4-5 minute ke liye 1100-1200 rpm par centrifuge karein. <span class="text-xs text-gray-500">(Centrifugal force fat ko stem mein push karta hai — density difference ka fayda uthata hai)</span></li>
                <li>5 minute ke liye water bath mein wapas rakhein. <span class="text-xs text-gray-500">(Dobaara 65°C par laana zaroori hai kyunki centrifuge mein temperature gir jaata hai — sahi reading ke liye exact temperature chahiye)</span></li>
                <li>Stopper ko adjust karke calibrated stem se fat ka percentage padhein. Reading fat column meniscus ke neeche se li jaati hai. <span class="text-xs text-gray-500">(Lower meniscus se padhein kyunki fat ki surface curved hoti hai — concave meniscus ka bottom point accurate reading deta hai)</span></li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Typical Values:</h4>
              <p>Full cream milk: 6.0% (minimum as per FSSAI), Toned milk: 3.0%, Double toned: 1.5%, Skimmed: ≤0.5%</p>
            `
          },
          {
            title: "Fat ka Determination (Rose-Gottlieb Method)",
            purpose: "Fat determination ke liye reference ya standard method, bahut accurate hai — ye arbitration aur calibration ke liye use hota hai.",
            reference: "IS: 1224 (Part-II)-1977",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ke sample ka ammonia aur ethanol ke saath treatment kiya jaata hai. Ammonia casein ko gholta hai aur fat globule membrane ko neutralize karta hai. Ethanol protein ko precipitate karta hai. Fat ko phir diethyl ether aur petroleum ether ke mixture se extract kiya jaata hai. Solvents ko evaporate kar diya jaata hai, aur extracted fat ko weigh kiya jaata hai. Ye gravimetric method hai — bahut precise results deta hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Ammonia solution (25%)</li>
                <li>Ethanol (95%)</li>
                <li>Diethyl ether (peroxide-free)</li>
                <li>Petroleum ether (40-60°C boiling range)</li>
              </ul>

              <div class="bg-green-50 border-l-4 border-green-400 p-4 my-4 rounded">
                <h4 class="font-bold text-green-800 mb-3">🔬 Har Reagent & Number ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Ammonia 25% kyun use hota hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Kaam 1:</strong> Casein proteins ko dissolve karta hai — alkaline conditions mein casein micelles toot jaate hain aur soluble ho jaate hain.</li>
                  <li><strong>Kaam 2:</strong> Fat globule membrane (jo phospholipids + proteins se bani hai) ko disrupt karta hai — fat free ho jaata hai extraction ke liye.</li>
                  <li><strong>25% kyun:</strong> Ye optimum concentration hai — 10 g milk ke proteins ko dissolve karne ke liye. Kam concentration mein casein adhura ghulega.</li>
                  <li><strong>1.5 ml kyun:</strong> Exactly utna chahiye jitna 10 g milk ke liye sufficient ho — zyada ammonia se baad mein ether layer mein impurities aa sakti hain.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Ethanol 95% kyun? 100% kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Kaam 1:</strong> Proteins ko <strong>dehydrate</strong> aur <strong>precipitate</strong> karta hai — ye proteins ko solid form mein la deta hai taaki wo ether layer mein na jayein.</li>
                  <li><strong>Kaam 2:</strong> Fat aur solvent ki <strong>miscibility improve</strong> karta hai — fat extraction better hota hai.</li>
                  <li><strong>Kaam 3:</strong> Fat globule ke around jo emulsion hai usse <strong>break</strong> karta hai — fat separate hota hai.</li>
                  <li><strong>95% kyun, 100% nahi:</strong> Absolute (100%) ethanol mein thoda paani milana padta hai interaction ke liye. 95% naturally optimal hai — proteins dehydrate bhi hote hain aur system mein sufficient water rahta hai sahi reaction ke liye.</li>
                  <li><strong>10 ml kyun:</strong> 10 g sample ke proteins ko completely precipitate karne ke liye sufficient volume.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Diethyl Ether + Petroleum Ether — DONO kyun? Ek se kaam nahi chalega?</h5>
                <table class="table-auto border-collapse border border-green-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-green-100"><th class="border border-green-300 p-2">Solvent</th><th class="border border-green-300 p-2">Kya Dissolve Karta Hai</th><th class="border border-green-300 p-2">Kyun Zaroori</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-green-300 p-2">Diethyl ether (slightly polar)</td><td class="border border-green-300 p-2">Free fatty acids, phospholipids, partial glycerides</td><td class="border border-green-300 p-2">Polar lipids extract karta hai jo petroleum ether akela nahi kar sakta</td></tr>
                    <tr><td class="border border-green-300 p-2">Petroleum ether (non-polar)</td><td class="border border-green-300 p-2">Triglycerides (neutral fat) — doodh ka main fat</td><td class="border border-green-300 p-2">Non-polar fat ko efficiently extract karta hai</td></tr>
                    <tr><td class="border border-green-300 p-2 font-semibold">Dono saath</td><td class="border border-green-300 p-2 font-semibold">Total fat — complete extraction</td><td class="border border-green-300 p-2 font-semibold">Akele koi bhi solvent 100% fat extract nahi kar sakta!</td></tr>
                  </tbody>
                </table>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Pehle 25 ml each, phir 15 ml each — ye pattern kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>1st extraction (25+25 ml):</strong> ~95% fat nikal jaata hai — maximum fat pehli baar mein aata hai.</li>
                  <li><strong>2nd extraction (15+15 ml):</strong> ~4% aur fat nikalta hai — jo residual fat bacha tha.</li>
                  <li><strong>3rd extraction (15+15 ml):</strong> Remaining ~1% fat — ye last traces nikalte hain.</li>
                  <li><strong>Teen baar kyun:</strong> Quantitative (nearly 100%) recovery ke liye zaroori hai. Do baar se ~99% aata hai, teen baar se 99.5%+ — reference method mein maximum accuracy chahiye.</li>
                  <li><strong>Pehli baar zyada (25 ml) kyun:</strong> Maximum fat ko extract karne ke liye zyada solvent chahiye. Baad ki extractions mein kam fat bacha hai to kam solvent sufficient hai — solvent ki bhi saving hoti hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ 102°C par drying kyun? Koi aur temperature kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Diethyl ether ka boiling point:</strong> ~35°C — 102°C par completely evaporate ho jaata hai.</li>
                  <li><strong>Petroleum ether ka boiling point:</strong> ~40-60°C — ye bhi 102°C par completely nikal jaata hai.</li>
                  <li><strong>Paani ka boiling point:</strong> 100°C — koi bhi trapped moisture hatt jaata hai.</li>
                  <li><strong>Fat 102°C par decompose nahi hota</strong> (short term ke liye) — safe hai.</li>
                  <li><strong>110°C+ par risk:</strong> Fat ka oxidation start ho sakta hai — weight badh jayega (oxygen addition se) — galat result.</li>
                  <li><strong>Constant weight ka matlab:</strong> Jab successive weighings mein difference <0.5 mg ho — tab saara solvent/moisture hatt chuka hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Peroxide-free diethyl ether kyun chahiye?</h5>
                <p class="my-1">Diethyl ether hawa mein rakhne par slowly peroxides banata hai (O₂ se react karke). Ye peroxides <strong>explosive</strong> hain — garam karne par blast ho sakte hain! Isliye fresh, peroxide-free ether use karna safety ke liye zaroori hai. Testing: KI-starch paper se check karein — brown colour = peroxides present = mat use karein.</p>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Petroleum ether ka 40-60°C boiling range kyun specified hai?</h5>
                <p class="my-1">Petroleum ether alag-alag grades mein aata hai (30-40°C, 40-60°C, 60-80°C). 40-60°C grade optimal hai kyunki: (1) Bahut volatile nahi — handling safe hai, (2) 102°C par completely evaporate ho jaata hai — residue nahi chhhodta, (3) Fat dissolving capacity achchi hai is range mein.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek Mojonnier extraction flask mein lagbhag 10 gram doodh ka sample accurately weigh karein. <span class="text-xs text-gray-500">(Volume nahi, weight isliye lete hain kyunki gravimetric method mein weight-based calculation zyada accurate hai)</span></li>
                <li>1.5 ml ammonia solution daalein aur achchi tarah mix karein. <span class="text-xs text-gray-500">(Casein dissolve hota hai — fat globule membrane tootati hai)</span></li>
                <li>10 ml 95% ethanol daalein aur 1 minute ke liye hilayein. <span class="text-xs text-gray-500">(Proteins precipitate hote hain — emulsion break hota hai)</span></li>
                <li>25 ml diethyl ether daalein, 1 minute ke liye zor se hilayein. <span class="text-xs text-gray-500">(Fat ether mein dissolve hona shuru — polar lipids bhi)</span></li>
                <li>25 ml petroleum ether daalein aur 1 minute ke liye phir se hilayein. <span class="text-xs text-gray-500">(Neutral fat/triglycerides extract hote hain)</span></li>
                <li>Mixture ko tab tak khada rehne dein jab tak upper ether layer clear na ho jaye, ya layers ko separate karne ke liye centrifuge karein. <span class="text-xs text-gray-500">(Ether lighter hai — upar aata hai, aqueous layer neeche — gravity separation)</span></li>
                <li>Ether layer ko ek pehle se weigh kiye hue flask mein carefully decant karein. <span class="text-xs text-gray-500">(Pre-weighed flask zaroori hai — baad mein fat ka weight nikalna hai)</span></li>
                <li>Aqueous layer ke saath do baar aur extraction repeat karein, har baar 15 ml har ek ether ka use karein. <span class="text-xs text-gray-500">(Residual fat nikalna — total 3 extractions se 99.5%+ recovery)</span></li>
                <li>Ek hot plate ya water bath par solvents ko evaporate karein. <span class="text-xs text-gray-500">(Low temperature par evaporate karein — fat oxidize na ho)</span></li>
                <li>Extracted fat wale flask ko 102°C par ek oven mein constant weight par dry karein. <span class="text-xs text-gray-500">(Last traces of solvent aur moisture hataane ke liye)</span></li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Fat = (Extracted fat ka weight / Sample ka weight) × 100</code></pre>
              <div class="bg-gray-50 p-3 rounded mt-2 text-sm">
                <p><strong>Example:</strong> Flask + fat = 85.450 g, Empty flask = 85.100 g, Fat weight = 0.350 g, Sample = 10.00 g</p>
                <p>% Fat = (0.350 / 10.00) × 100 = <strong>3.50%</strong></p>
              </div>
            `
          },
          {
            title: "Fat ka Determination (Werner-Schmidt Method)",
            purpose: "Sour ya preserved doodh ke liye suitable, jahaan casein ko dissolve karne ke liye acid ki zaroorat hoti hai.",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ko concentrated hydrochloric acid ke saath boil kiya jaata hai, jo protein ko digest karta hai aur fat ko free karta hai. Fat ko phir ether ke saath extract kiya jaata hai aur weigh kiya jaata hai. Ye method tab use hota hai jab Rose-Gottlieb method mein ammonia casein ko dissolve nahi kar pata — jaise sour, fermented, ya preserved samples mein.</p>

              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded">
                <h4 class="font-bold text-yellow-800 mb-3">🔬 Ye Method Kyun Alag Hai? — Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Rose-Gottlieb mein ammonia use hota hai to Werner-Schmidt mein HCl kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Normal doodh mein:</strong> Casein calcium caseinate ke roop mein hota hai — ammonia easily dissolve kar leta hai (alkaline hydrolysis).</li>
                  <li><strong>Sour doodh mein:</strong> Lactic acid ne casein ko already pH 4.6 par precipitate kar diya hai — ye denatured casein ammonia mein properly dissolve nahi hota.</li>
                  <li><strong>Preserved/fermented samples mein:</strong> Preservatives (formalin, etc.) ne protein ko cross-link kar diya hai — ammonia se nahi ghulega.</li>
                  <li><strong>HCl solution:</strong> Concentrated HCl + boiling se saari proteins completely <strong>hydrolyze (digest)</strong> ho jaati hain — chahe kitni bhi denatured/cross-linked hon.</li>
                  <li><strong>Dark brown colour:</strong> Protein ka complete hydrolysis indicate karta hai — amino acids bante hain jo acid mein soluble hain.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ 10 ml concentrated HCl kyun?</h5>
                <p class="my-1">10 g milk mein ~3.5% protein = ~0.35 g protein. Concentrated HCl (~37% w/w, sp. gr. ~1.18) ka 10 ml = ~4.3 g HCl — ye 0.35 g protein ko completely hydrolyze karne ke liye bahut zyada hai (excess mein — taaki reaction complete ho). Excess acid zaroori hai kyunki denatured proteins resistant hote hain.</p>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Baad ke steps Rose-Gottlieb jaisi kyun hain?</h5>
                <p class="my-1">Fat extract karne ka mechanism same hai — ether solvent mein fat dissolve hota hai. Bas protein dissolve karne ka tarika alag hai (acid vs ammonia). Isliye extraction, evaporation, aur weighing same follow karte hain.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek suitable extraction tube mein lagbhag 10 gram doodh ka sample accurately weigh karein.</li>
                <li>10 ml concentrated HCl daalein aur tab tak heat karein jab tak solution dark brown na ho jaye (sab protein digest ho jaye). <span class="text-xs text-gray-500">(Heating time ~20-30 min — fume hood mein karein kyunki HCl fumes niklenge)</span></li>
                <li>Cool karein, aur Rose-Gottlieb method mein described anusaar diethyl aur petroleum ether ke saath teen baar extract karein.</li>
                <li>Solvents ko evaporate karein, residue ko dry karein aur weigh karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Fat = (Extracted fat ka weight / Sample ka weight) × 100</code></pre>
            `
          },
          {
            title: "Total Solids ka Determination (Gravimetric Method)",
            purpose: "Total solid content ko accurately determine karne ke liye standard reference method.",
            reference: "IS 1479 (Part II) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ke ek known weight ko heat kiya jaata hai taaki saara paani evaporate ho jaye. Remaining dry residue ka weight total solids ko represent karta hai. Isme fat, protein, lactose, minerals — sab kuch included hota hai.</p>

              <div class="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded">
                <h4 class="font-bold text-purple-800 mb-3">🔬 Formula & Numbers ki Complete Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-purple-700">❓ Formula kaise kaam karta hai?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
                <table class="table-auto border-collapse border border-purple-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-purple-100"><th class="border border-purple-300 p-2">Symbol</th><th class="border border-purple-300 p-2">Kya Hai</th><th class="border border-purple-300 p-2">Kyun Chahiye</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-purple-300 p-2">W1</td><td class="border border-purple-300 p-2">Empty dish + lid ka weight</td><td class="border border-purple-300 p-2">Reference point — dish ka weight result mein nahi aana chahiye</td></tr>
                    <tr><td class="border border-purple-300 p-2">W2</td><td class="border border-purple-300 p-2">Dish + milk sample ka weight</td><td class="border border-purple-300 p-2">Total weight drying se pehle</td></tr>
                    <tr><td class="border border-purple-300 p-2">W2 - W1</td><td class="border border-purple-300 p-2">Sirf milk sample ka weight</td><td class="border border-purple-300 p-2">Kitna doodh liya — denominator hai</td></tr>
                    <tr><td class="border border-purple-300 p-2">W3</td><td class="border border-purple-300 p-2">Dish + dried residue ka weight</td><td class="border border-purple-300 p-2">Drying ke baad — paani ud gaya, solids bache</td></tr>
                    <tr><td class="border border-purple-300 p-2">W3 - W1</td><td class="border border-purple-300 p-2">Sirf dried residue (total solids) ka weight</td><td class="border border-purple-300 p-2">Numerator — jo bacha wo solids hain</td></tr>
                    <tr><td class="border border-purple-300 p-2">× 100</td><td class="border border-purple-300 p-2">Percentage mein convert</td><td class="border border-purple-300 p-2">Standard practice — % mein express karna hai</td></tr>
                  </tbody>
                </table>
                <div class="bg-white p-3 rounded mt-2 text-sm">
                  <p><strong>Example:</strong> W1 = 45.000 g, W2 = 50.000 g (5 g milk), W3 = 45.625 g</p>
                  <p>% TS = [(45.625 - 45.000) / (50.000 - 45.000)] × 100 = [0.625 / 5.000] × 100 = <strong>12.50%</strong></p>
                </div>

                <h5 class="font-semibold mt-4 mb-1 text-purple-700">❓ 102 ± 2°C kyun? Koi aur temperature kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>100°C se upar:</strong> Saara free water evaporate ho jaye — 100°C paani ka boiling point hai, thoda upar rakhte hain taaki bound water bhi nikle.</li>
                  <li><strong>104°C se neeche:</strong> Lactose caramelize/decompose na ho — lactose ~160°C par decompose hota hai lekin browning (Maillard reaction) 105°C+ par start ho sakti hai.</li>
                  <li><strong>Fat oxidize na ho:</strong> 110°C+ par fat ki oxidation hoti hai — weight badh jayega (galat result).</li>
                  <li><strong>102°C = Sweet spot:</strong> Paani hatt jaata hai, solids intact rehte hain — no decomposition, no oxidation.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-purple-700">❓ Water bath par pehle kyun heat karte hain (30 min)?</h5>
                <p class="my-1">Agar doodh ko seedha oven mein rakh dein to surface par ek <strong>crust (papdi)</strong> ban jaati hai. Ye crust andar ka paani bahar nahi nikalne deti — result kam aayega. Water bath par gentle heating se paani dheere-dheere evaporate hota hai bina crust banaye. Phir oven mein remaining moisture nikalta hai.</p>

                <h5 class="font-semibold mt-4 mb-1 text-purple-700">❓ 5 gram sample kyun? Zyada ya kam kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>5 gram optimal hai:</strong> Itne mein drying uniformly hoti hai aur residue accurately weigh ho sakta hai.</li>
                  <li><strong>Kam (1-2 g):</strong> Residue bahut kam hoga — weighing error zyada hoga (percentage error badh jaata hai).</li>
                  <li><strong>Zyada (10-20 g):</strong> Drying mein bahut time lagega, crust banne ka zyada chance, aur dish overflow ho sakti hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-purple-700">❓ Constant weight kya hota hai? 0.5 mg tolerance kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Constant weight matlab:</strong> Jab oven mein rakh kar, cool kar ke, weigh karein — phir dobaara oven mein rakh kar, cool kar ke weigh karein — dono weights mein difference 0.5 mg se kam ho.</li>
                  <li><strong>Ye confirm karta hai:</strong> "Ab aur paani/moisture nahi bacha — jo weight hai wo final hai."</li>
                  <li><strong>0.5 mg kyun:</strong> Analytical balance ki sensitivity ~0.1 mg hoti hai. 0.5 mg = 5 readings ki uncertainty — practically negligible hai.</li>
                  <li><strong>Agar constant weight na aaye:</strong> Aur 30 min oven mein rakhein aur phir check karein.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-purple-700">❓ Desiccator mein cool kyun karte hain? Room mein kyun nahi?</h5>
                <p class="my-1">Desiccator mein silica gel hota hai jo moisture absorb karta hai. Agar dish ko room mein cool karein to hawa ki humidity se dish moisture absorb karegi — weight badh jayega — result galat aayega. Desiccator dry environment provide karta hai.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek khaali, saaf, dry flat-bottom dish ko uske dhakkan (W1) ke saath weigh karein.</li>
                <li>Dish mein lagbhag 5 gram prepared doodh ka sample daalein aur phir se weigh karein (W2).</li>
                <li>30 minute ke liye boiling water bath par dhakkan ke bina dish ko heat karein. <span class="text-xs text-gray-500">(Dhakkan hataate hain taaki steam nikal sake — crust nahi bane)</span></li>
                <li>Dish ko 102 ± 2°C par 2 ghante ke liye hot air oven mein transfer karein.</li>
                <li>Dish ko dhakkan se dhak dein, ek desiccator mein cool karein, aur weigh karein (W3). <span class="text-xs text-gray-500">(Dhakkan lagaate hain cooling ke time taaki dust ya moisture na enter kare)</span></li>
                <li>Ek constant weight prapt hone tak heating aur cooling process ko repeat karein (successive weights mein difference 0.5 mg se kam hona chahiye).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Full cream milk: ≥12.0%, Toned milk: ≥11.5%, Double toned: ≥11.0%, Skimmed: ≥8.7%</p>
            `
          },
          {
            title: "Solids-Not-Fat (SNF) ka Determination",
            purpose: "Doodh mein fat ke alawa baaki saare solids (protein, lactose, minerals) ko measure karna.",
            reference: "IS 1479 (Part II) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>SNF = Total Solids minus Fat. Ye value doodh ki quality aur adulteration detect karne mein important hai. Paani milane se SNF kam hota hai. FSSAI ke standards mein SNF ki minimum limit define ki gayi hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Method 1: By Difference</h4>
              <pre><code>% SNF = % Total Solids - % Fat</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Method 2: ISI Formula (using Lactometer)</h4>
              <pre><code>% SNF = (CLR / 4) + (0.21 × F) + 0.36</code></pre>
              <p class="text-xs">Jahaan CLR = Corrected Lactometer Reading at 27°C, F = Fat %</p>

              <div class="bg-indigo-50 border-l-4 border-indigo-400 p-4 my-4 rounded">
                <h4 class="font-bold text-indigo-800 mb-3">🔬 ISI Formula ke Har Term ki Scientific Explanation:</h4>

                <p class="my-2"><strong>Ye ek empirical formula hai</strong> — matlab ye theory se nahi, balki hazaaron doodh ke samples ka data analyze karke derive kiya gaya hai. Har term ka scientific reason hai:</p>

                <h5 class="font-semibold mt-3 mb-1 text-indigo-700">❓ CLR / 4 — ye term kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>CLR (Corrected Lactometer Reading)</strong> doodh ki density ko represent karta hai.</li>
                  <li>SNF (protein, lactose, minerals) doodh ki density <strong>badhata</strong> hai — zyada SNF = zyada density = zyada CLR.</li>
                  <li><strong>Division by 4:</strong> Data analysis se nikla hai ki CLR aur SNF ka ratio approximately 4:1 hai. Jaise CLR 28 → SNF contribution ≈ 7.0%. Ye linear relationship experimentally established hai.</li>
                  <li>Ye SNF ka <strong>main contributing term</strong> hai — total SNF ka ~80% isi se aata hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-indigo-700">❓ 0.21 × F — fat ka correction kyun chahiye?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Fat halka hai</strong> (density ~0.93 g/ml) — fat hone se doodh ki density KAM hoti hai.</li>
                  <li>Matlab zyada fat = kam CLR — to CLR/4 se SNF underestimate ho jayega.</li>
                  <li><strong>0.21 × F correction:</strong> Ye fat ke density-lowering effect ko compensate karta hai. Har 1% fat CLR ko approximately 0.84 units kam karta hai, aur 0.84/4 ≈ 0.21.</li>
                  <li><strong>Example:</strong> Agar fat 4% hai to correction = 0.21 × 4 = 0.84%. Bina is correction ke SNF 0.84% kam aata.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-indigo-700">❓ 0.36 — ye constant kyun add hota hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Ye <strong>residual correction factor</strong> hai — dissolved gases (CO₂), minor components, aur formula ki inherent systematic error ko compensate karta hai.</li>
                  <li>Data fitting mein jab regression line banate hain to ek intercept aata hai — wo intercept 0.36 hai.</li>
                  <li>Iske bina formula consistently ~0.36% kam SNF deta hai.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-3 text-sm">
                  <p><strong>Example Calculation:</strong></p>
                  <p>CLR = 28, Fat = 4.0%</p>
                  <p>SNF = (28/4) + (0.21 × 4) + 0.36 = 7.0 + 0.84 + 0.36 = <strong>8.20%</strong></p>
                  <p class="mt-2">CLR = 32, Fat = 6.0%</p>
                  <p>SNF = (32/4) + (0.21 × 6) + 0.36 = 8.0 + 1.26 + 0.36 = <strong>9.62%</strong></p>
                </div>

                <h5 class="font-semibold mt-4 mb-1 text-indigo-700">❓ Ye formula kitna accurate hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Accuracy:</strong> ±0.2% ke andar — field conditions ke liye sufficient hai.</li>
                  <li><strong>Limitation:</strong> Ye formula normal, unadulterated milk ke liye hai. Agar paani, urea, sugar mila hua ho to galat result dega.</li>
                  <li><strong>Reference method:</strong> Accurate SNF ke liye gravimetric total solids - Gerber fat use karein (Method 1).</li>
                </ul>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Full cream milk: ≥9.0% (cow), ≥9.0% (buffalo). Adulterated milk mein SNF 8.5% se neeche gir sakta hai.</p>
            `
          },
          {
            title: "Specific Gravity / Lactometer Reading",
            purpose: "Doodh ki density measure karna — paani milawat detect karne ka sabse simple aur rapid method.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ka specific gravity paani se zyada hota hai (1.028-1.034 range mein). Agar doodh mein paani milaya jaye to specific gravity kam ho jaati hai. Agar fat nikala jaye (skimming) to specific gravity badh jaati hai. Lactometer ek special hydrometer hai jo doodh ke liye calibrated hota hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>ISI marked Lactometer (graduated 15-40)</li>
                <li>Measuring cylinder (500 ml)</li>
                <li>Thermometer (0-50°C)</li>
              </ul>

              <div class="bg-orange-50 border-l-4 border-orange-400 p-4 my-4 rounded">
                <h4 class="font-bold text-orange-800 mb-3">🔬 Formulas & Corrections ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-orange-700">❓ CLR = LR + 0.2 × (T - 27) — ye temperature correction kyun chahiye?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Lactometer 27°C par calibrate hota hai</strong> (Indian standard temperature).</li>
                  <li><strong>Temperature badhne par:</strong> Doodh expand hota hai → density KAM hoti hai → lactometer zyada doobta hai → reading KAM aati hai. Isliye add karte hain.</li>
                  <li><strong>Temperature kam hone par:</strong> Doodh contract hota hai → density ZYADA hoti hai → lactometer kam doobta hai → reading ZYADA aati hai. Isliye subtract karte hain.</li>
                  <li><strong>0.2 per °C kyun:</strong> Experiments se pata chala hai ki doodh ka thermal expansion coefficient aise hai ki har 1°C change se lactometer reading mein approximately 0.2 units ka change aata hai. Ye empirically determined constant hai.</li>
                  <li><strong>27°C kyun (Indian standard):</strong> India ka average ambient temperature ~27°C hai — isliye Indian Standards Bureau ne is temperature ko reference rakha. European standards mein 15°C ya 20°C use hota hai.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm">
                  <p><strong>Example 1:</strong> LR = 26, Temperature = 32°C</p>
                  <p>CLR = 26 + 0.2 × (32 - 27) = 26 + 0.2 × 5 = 26 + 1.0 = <strong>27.0</strong></p>
                  <p class="mt-1"><strong>Example 2:</strong> LR = 30, Temperature = 22°C</p>
                  <p>CLR = 30 + 0.2 × (22 - 27) = 30 + 0.2 × (-5) = 30 - 1.0 = <strong>29.0</strong></p>
                </div>

                <h5 class="font-semibold mt-4 mb-1 text-orange-700">❓ Specific Gravity = 1 + (CLR / 1000) — ye formula kaise nikla?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Lactometer readings</strong> (25, 28, 30, 32 etc.) actually specific gravity ke <strong>last 3 digits</strong> hain — simplification ke liye.</li>
                  <li>Jaise: CLR 28 matlab Sp. Gr. = 1.028, CLR 32 matlab Sp. Gr. = 1.032</li>
                  <li><strong>Formula:</strong> Sp. Gr. = 1 + (CLR/1000) = 1 + 28/1000 = 1.028</li>
                  <li><strong>Lactometer scale ne "1.0" hata diya</strong> aur baaki ko ×1000 kar diya — taaki chhoti graduations mein padh sakein. Agar scale par 1.028, 1.029, 1.030... likhein to bahut chhota difference hoga — padha nahi jayega!</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-orange-700">❓ Lactometer scale 15-40 kyun graduated hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>15 (Sp. Gr. 1.015):</strong> Bahut zyada paani milaya hua doodh — lower limit.</li>
                  <li><strong>40 (Sp. Gr. 1.040):</strong> Skimmed buffalo milk ya adulterants (salt/sugar) mila hua — upper limit.</li>
                  <li><strong>Normal milk:</strong> 28-34 range mein — ye range scale ke beech mein hai jahaan accuracy sabse zyada hai.</li>
                  <li>Is range se bahar koi normal doodh nahi aata — isliye ye range sufficient hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-orange-700">❓ 500 ml measuring cylinder kyun? Chhota kyun nahi chalega?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Lactometer freely float karna chahiye</strong> — deewar ko touch nahi karna chahiye.</li>
                  <li>Chhote cylinder mein lactometer deewar se touch karega — reading galat aayegi (capillary effect).</li>
                  <li>500 ml mein sufficient clearance milta hai — lactometer centre mein float karta hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-orange-700">❓ Foam kyun nahi banni chahiye mixing ke time?</h5>
                <p class="my-1">Foam (air bubbles) doodh ki density KAM kar deta hai — lactometer reading artificially kam aayegi. Gently mix karein — hilayein, mat pheintein!</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Doodh ko achchi tarah mix karein bina foam banaye.</li>
                <li>Doodh ko measuring cylinder mein daalein (lagbhag 500 ml).</li>
                <li>Lactometer ko gently doodh mein lower karein aur chhod dein taaki ye freely float kare. <span class="text-xs text-gray-500">(Dhakka dekar nahi chhodna — natural position mein aane dein)</span></li>
                <li>Jab lactometer stable ho jaye, reading lo — meniscus ke upper surface se padhein. <span class="text-xs text-gray-500">(Doodh opaque hai — lower meniscus dikhai nahi deta, isliye upper surface se padhte hain — ye paani se alag hai jahaan lower meniscus se padhte hain)</span></li>
                <li>Temperature bhi note karein.</li>
                <li>Temperature correction apply karein: Har 1°C 27°C se upar hone par 0.2 add karein, aur har 1°C neeche hone par 0.2 subtract karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>Corrected Lactometer Reading (CLR) = LR + 0.2 × (T - 27)</code></pre>
              <pre><code>Specific Gravity = 1 + (CLR / 1000)</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Normal cow milk: CLR 28-32, Buffalo milk: CLR 28-34. Specific gravity: 1.028-1.034</p>
            `
          },
          {
            title: "Total Protein Content (Kjeldahl Method)",
            purpose: "Total nitrogen content determine karne ke liye standard reference method, jise baad mein crude protein content mein convert kiya jaata hai.",
            reference: "IDF 20B: 1993; A.O.A.C 17th edn, 2000 Official Method 991.23",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Kjeldahl method ek sample mein total nitrogen determine karta hai. Protein mein nitrogen ko pehle concentrated sulphuric acid (digestion) use karke ammonium sulphate mein convert kiya jaata hai. Phir, ammonia gas ko release kiya jaata hai (distillation) aur nitrogen ki quantity determine karne ke liye titrate kiya jaata hai. Is nitrogen amount ko crude protein content calculate karne ke liye ek factor (doodh ke liye 6.38) se multiply kiya jaata hai.</p>

              <div class="bg-red-50 border-l-4 border-red-400 p-4 my-4 rounded">
                <h4 class="font-bold text-red-800 mb-3">🔬 Kjeldahl Method ke Sabhi Factors & Constants ki Complete Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-red-700">❓ Factor 6.38 kyun? — Sabse Fundamental Sawaal</h5>
                <p class="my-2">Ye nitrogen-to-protein conversion factor hai. Iska derivation:</p>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Milk protein mein average nitrogen content = 15.67%</strong></li>
                  <li>Matlab: 100 g milk protein mein 15.67 g nitrogen hai</li>
                  <li>To: <strong>1 g nitrogen = 100 ÷ 15.67 = 6.38 g protein</strong></li>
                  <li>Isliye: <strong>% Protein = % Nitrogen × 6.38</strong></li>
                </ul>
                <p class="my-2 font-semibold">Lekin 15.67% nitrogen kyun? Kyunki milk protein (casein + whey) ka amino acid composition aisa hai ki har 100 g protein mein nitrogen atoms ka total weight 15.67 g aata hai. Har protein ka amino acid composition alag hai, isliye factor bhi alag hota hai:</p>
                <table class="table-auto border-collapse border border-red-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-red-100"><th class="border border-red-300 p-2">Product</th><th class="border border-red-300 p-2">N in Protein</th><th class="border border-red-300 p-2">Factor (100/N%)</th><th class="border border-red-300 p-2">Kyun Alag?</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-red-300 p-2 font-semibold">Milk & dairy</td><td class="border border-red-300 p-2">15.67%</td><td class="border border-red-300 p-2 font-semibold">6.38</td><td class="border border-red-300 p-2">Casein nitrogen-rich hai</td></tr>
                    <tr><td class="border border-red-300 p-2">Meat, eggs, general</td><td class="border border-red-300 p-2">16.00%</td><td class="border border-red-300 p-2">6.25</td><td class="border border-red-300 p-2">Average animal protein</td></tr>
                    <tr><td class="border border-red-300 p-2">Wheat (gluten)</td><td class="border border-red-300 p-2">17.54%</td><td class="border border-red-300 p-2">5.70</td><td class="border border-red-300 p-2">Glutamic acid rich — zyada N%</td></tr>
                    <tr><td class="border border-red-300 p-2">Soybean</td><td class="border border-red-300 p-2">17.51%</td><td class="border border-red-300 p-2">5.71</td><td class="border border-red-300 p-2">High N amino acids</td></tr>
                    <tr><td class="border border-red-300 p-2">Rice</td><td class="border border-red-300 p-2">16.95%</td><td class="border border-red-300 p-2">5.95</td><td class="border border-red-300 p-2">Different amino acid profile</td></tr>
                  </tbody>
                </table>
                <p class="text-xs my-1"><strong>Important:</strong> Agar galat factor use karein to protein content galat calculate hoga! Dairy products ke liye HAMESHA 6.38 use karein.</p>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ Formula mein 1.4007 kahan se aaya?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>% Total Nitrogen = [1.4007 × (V_sample - V_blank) × N_acid] / Weight_sample</code></pre>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Nitrogen ka atomic weight = 14.007 g/mol</strong></li>
                  <li>1 ml of 1N HCl = 1 milli-equivalent = 14.007/1000 g nitrogen = 0.014007 g nitrogen</li>
                  <li>Percentage ke liye × 100 karna hai: 0.014007 × 100 = <strong>1.4007</strong></li>
                  <li><strong>Matlab: 1.4007 = Nitrogen ka milliequivalent weight × 100 = (14.007 × 100) / 1000</strong></li>
                </ul>
                <div class="bg-white p-3 rounded mt-2 text-sm">
                  <p><strong>Example:</strong> V_sample = 25 ml, V_blank = 0.5 ml, N_acid = 0.1N, W_sample = 5 g</p>
                  <p>% N = [1.4007 × (25 - 0.5) × 0.1] / 5 = [1.4007 × 24.5 × 0.1] / 5 = 3.4317 / 5 = <strong>0.686%</strong></p>
                  <p>% Protein = 0.686 × 6.38 = <strong>4.38%</strong></p>
                </div>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ V_sample - V_blank kyun? Blank kyun chahiye?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Blank:</strong> Saari reagents (acid, catalyst, NaOH, boric acid) mein bhi trace nitrogen ho sakta hai.</li>
                  <li>Blank mein saari reagents daalte hain <strong>bina sample ke</strong> — aur poora procedure follow karte hain.</li>
                  <li>Blank mein jo titre value aata hai wo reagents ki nitrogen hai — ise subtract karna padta hai warna result artificially high aayega.</li>
                  <li><strong>V_blank usually 0.2-0.5 ml hota hai</strong> — chhota lekin ignore nahi kar sakte.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ Catalyst mixture — CuSO₄:K₂SO₄ = 1:8 ratio kyun?</h5>
                <table class="table-auto border-collapse border border-red-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-red-100"><th class="border border-red-300 p-2">Catalyst</th><th class="border border-red-300 p-2">Kaam</th><th class="border border-red-300 p-2">Kyun Ye Amount</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-red-300 p-2">K₂SO₄ (Potassium sulphate) — ZYADA</td><td class="border border-red-300 p-2">H₂SO₄ ka boiling point badhata hai — 337°C se ~400°C+ ho jaata hai</td><td class="border border-red-300 p-2">Zyada K₂SO₄ chahiye BP sufficient raise karne ke liye — zyada temperature par digestion faster aur complete hota hai</td></tr>
                    <tr><td class="border border-red-300 p-2">CuSO₄ (Copper sulphate) — KAM</td><td class="border border-red-300 p-2">Actual catalyst — oxidation reaction ko speed up karta hai</td><td class="border border-red-300 p-2">Catalyst thoda hi chahiye — zyada CuSO₄ se boric acid mein interference ho sakta hai (colour change affect)</td></tr>
                  </tbody>
                </table>
                <p class="text-xs my-1">Note: Kuch methods mein selenium dioxide bhi catalyst ke roop mein use hota hai — lekin toxic hai aur disposal mushkil hai.</p>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ Digestion mein concentrated H₂SO₄ kyun? Reaction kya hota hai?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>Organic N + H₂SO₄ → (NH₄)₂SO₄ + CO₂↑ + H₂O
(Protein)     (conc.)    (Ammonium sulphate)

Step by step:
1. H₂SO₄ organic matter ko oxidize karta hai (carbon → CO₂, hydrogen → H₂O)
2. Nitrogen amino groups (-NH₂) se nikal kar NH₃ banta hai
3. NH₃ + H₂SO₄ → (NH₄)₂SO₄ (solution mein trap ho jaata hai)
4. Clear blue-green colour = CuSO₄ ka colour = digestion complete</code></pre>
                <p class="my-1"><strong>25 ml H₂SO₄ kyun:</strong> 5 g milk mein ~0.5 g organic matter hai jise oxidize karna hai — 25 ml sufficient hai excess mein rehne ke liye.</p>
                <p class="my-1"><strong>Clear blue-green colour ka matlab:</strong> Saara organic carbon CO₂ ban kar ud gaya, sirf CuSO₄ ka blue colour bacha — digestion complete ho gayi.</p>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ NaOH 40% distillation mein kyun? Reaction kya hai?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>(NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2NH₃↑ + 2H₂O</code></pre>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>40% concentrated kyun:</strong> Excess NaOH ensure karta hai ki SAARA ammonium sulphate convert ho jaye ammonia mein.</li>
                  <li><strong>Reaction exothermic hai:</strong> Bahut garmi niklti hai — isliye carefully add karein aur immediately distillation start karein warna ammonia loss ho jayega.</li>
                  <li><strong>Dilute NaOH (10-20%) kyun nahi:</strong> Reaction incomplete rehegi — saari ammonia release nahi hogi — result kam aayega.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ Boric acid 4% mein ammonia kyun trap karte hain? HCl mein kyun nahi?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>NH₃ + H₃BO₃ → NH₄H₂BO₃ (ammonium borate — weakly acidic)</code></pre>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Boric acid weak acid hai:</strong> Ammonia ko absorb karta hai bina titration ke accuracy affect kiye.</li>
                  <li><strong>HCl/H₂SO₄ (strong acid) mein kyun nahi trap karte:</strong> Agar strong acid use karein to EXACTLY utna hi acid chahiye jitni ammonia aayegi — agar thoda bhi zyada acid hua to ammonia ki quantity galat measure hogi. Boric acid ke saath ye problem nahi hai kyunki ye itna weak hai ki titrant (HCl) usse easily displace kar leta hai.</li>
                  <li><strong>4% concentration kyun:</strong> Sufficient ammonia absorb karne ke liye. Zyada concentrated boric acid solution banana mushkil hai (solubility limit ~5% at room temp).</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ Mixed indicator — Methyl Red + Bromocresol Green kyun? Akela indicator kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Akela Methyl Red:</strong> Red → Yellow change — subtle hai, dekhna mushkil hai, especially yellowish boric acid solution mein.</li>
                  <li><strong>Akela Bromocresol Green:</strong> Yellow → Blue change — bhi subtle hai.</li>
                  <li><strong>Dono saath milane par:</strong> <span class="font-semibold">Green → Grey → Wine-red/Pink</span> — bahut sharp, clear endpoint! Miss hone ka chance nahi.</li>
                  <li><strong>Green kyun shuru mein:</strong> Ammonia absorbed hone ke baad boric acid solution alkaline hai — mixed indicator green dikhata hai.</li>
                  <li><strong>Pink/wine-red endpoint:</strong> Jab HCl se titrate karte hain to pH kam hota hai — indicator green se grey (briefly) se wine-red ho jaata hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ 0.1 N HCl kyun titration mein? 1N ya 0.01N kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>0.1N optimal hai:</strong> 5 g milk sample mein ~0.5-0.7% N hai → ~0.025-0.035 g N → ye ~18-25 ml 0.1N HCl ke equivalent hai.</li>
                  <li><strong>1N (too concentrated):</strong> Sirf 1.8-2.5 ml lagega — itna kam volume accurately measure karna mushkil hai — error zyada hoga.</li>
                  <li><strong>0.01N (too dilute):</strong> 180-250 ml lagega — burette 50 ml ki hoti hai — baar baar refill karna padega — impractical.</li>
                  <li><strong>0.1N se 18-25 ml titre aata hai</strong> — ye 50 ml burette mein comfortably fit hota hai aur accuracy bhi achchi rehti hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">❓ "Crude Protein" kyun kehte hain? "True Protein" kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Kjeldahl method TOTAL nitrogen measure karta hai</strong> — sirf protein nitrogen nahi.</li>
                  <li>Doodh mein non-protein nitrogen (NPN) bhi hota hai — urea, creatinine, uric acid, free amino acids (~5% of total N).</li>
                  <li>Ye sabhi nitrogen 6.38 se multiply ho jaata hai — isliye result "crude protein" hai, "true protein" nahi.</li>
                  <li><strong>True protein = Crude protein - (NPN × 6.38)</strong></li>
                  <li>Normal doodh mein: True protein ≈ 95% of crude protein.</li>
                  <li><strong>Urea milawat ka khatra:</strong> Urea mein 46.7% nitrogen hai! Agar urea milaya ho to crude protein bahut high aayega — lekin ye fake hai.</li>
                </ul>
              </div>

              <h4 class="font-semibold mt-4 mb-2">3 Steps of Kjeldahl Method:</h4>

              <h4 class="font-semibold mt-2 mb-1">Step 1 — Digestion:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Kjeldahl flask mein ~5 gram doodh weigh karein.</li>
                <li>25 ml concentrated sulphuric acid aur ek catalyst mixture (copper sulphate + potassium sulphate — ratio 1:8) daalein.</li>
                <li>Fume hood mein heat karein jab tak solution clear blue-green na ho jaye (2-3 hours lag sakte hain). <span class="text-xs text-gray-500">(Initially dark → brown → clear blue-green = complete digestion)</span></li>
                <li>Ye step saara organic nitrogen ko (NH₄)₂SO₄ mein convert kar deta hai.</li>
              </ol>

              <h4 class="font-semibold mt-2 mb-1">Step 2 — Distillation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Digestate ko cool karein, ~200 ml paani se dilute karein. <span class="text-xs text-gray-500">(Dilution zaroori hai — concentrated acid + NaOH ka reaction bahut violent hoga)</span></li>
                <li>Excess NaOH (40%) daalein — ye ammonium sulphate ko ammonia gas mein convert karta hai.</li>
                <li>Released ammonia ko steam-distill karein ek known amount standard acid mein (4% boric acid with mixed indicator — methyl red + bromocresol green). <span class="text-xs text-gray-500">(Condenser ka tip boric acid mein dooba rehna chahiye — warna NH₃ gas escape kar jayegi)</span></li>
              </ol>

              <h4 class="font-semibold mt-2 mb-1">Step 3 — Titration:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Trapped ammonia ko 0.1 N HCl se titrate karein jab tak indicator colour change na ho jaye (green se wine-red/pink). <span class="text-xs text-gray-500">(Slowly add karein endpoint ke paas — drop by drop)</span></li>
                <li>Ek blank determination bhi kiya jaata hai (bina sample ke saari reagents ke saath).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Total Nitrogen = [1.4007 × (V_sample - V_blank) × N_acid] / Weight_sample</code></pre>
              <pre><code>% Crude Protein = % Total Nitrogen × 6.38</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Cow milk protein: 3.0-3.5%, Buffalo milk protein: 3.5-4.5%</p>
            `
          },
          {
            title: "Casein Content (Kjeldahl Method)",
            purpose: "Casein, doodh mein main protein ki quantity determine karna — ise nitrogen analysis se pehle precipitate karke.",
            reference: "IS 1479 (Part II) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Casein ko doodh se iski isoelectric point (pH 4.6) par acetic acid use karke precipitate kiya jaata hai. Whey proteins filtrate mein rehte hain. Casein precipitate ki nitrogen content ko phir Kjeldahl method dwara determine kiya jaata hai. Casein doodh ka ~80% protein hota hai.</p>

              <div class="bg-teal-50 border-l-4 border-teal-400 p-4 my-4 rounded">
                <h4 class="font-bold text-teal-800 mb-3">🔬 Casein Precipitation ke Factors ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ pH 4.6 — ye specific number kyun? Isoelectric Point kya hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Isoelectric Point (pI):</strong> Wo pH jahaan protein ka <strong>net electrical charge ZERO</strong> hota hai.</li>
                  <li><strong>pH > 4.6:</strong> Casein par <strong>negative charge</strong> hota hai → proteins ek doosre ko repel karte hain → <strong>soluble</strong> rehte hain (calcium caseinate ke roop mein doodh mein exist karte hain).</li>
                  <li><strong>pH < 4.6:</strong> Casein par <strong>positive charge</strong> hota hai → phir se soluble ho jaata hai (acid casein).</li>
                  <li><strong>pH = 4.6 (Exactly):</strong> <strong>Zero charge</strong> → proteins ek doosre ko attract karte hain → <strong>aggregate/clump</strong> ban kar <strong>precipitate</strong> ho jaata hai!</li>
                  <li><strong>4.6 kyun ye specific number:</strong> Casein ke amino acid composition mein acidic (glutamic, aspartic) aur basic (lysine, arginine, histidine) residues ka balance aise hai ki pH 4.6 par positive aur negative charges exactly cancel ho jaate hain. Ye experimentally determined value hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ Acetic acid kyun? HCl kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Acetic acid WEAK acid hai</strong> — pH dheere-dheere kam karta hai — controlled precipitation hoti hai.</li>
                  <li><strong>HCl STRONG acid hai</strong> — ek drop mein pH bahut jaldi girta hai — <strong>overshoot</strong> ho sakta hai (pH 4.6 se neeche chala jayega).</li>
                  <li>pH 4.6 se neeche jaane par casein partially re-dissolve ho jayega — result kam aayega!</li>
                  <li><strong>10% acetic acid ka 1.5 ml:</strong> Ye carefully calculated hai ki 10 g milk (pH ~6.7) ko pH 4.6 tak lane ke liye approximately itna sufficient hai.</li>
                  <li><strong>Drop by drop kyun daalte hain:</strong> Taaki pH gradually kam ho aur exactly 4.6 par rok sakein — overshoot na ho.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ 40-42°C temperature kyun? Room temperature par kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>40-42°C par casein ki structure thodi loosen hoti hai</strong> — protein unfolding better hota hai → aggregation faster aur more complete hoti hai.</li>
                  <li><strong>Room temperature (~25°C) par:</strong> Precipitation slow aur incomplete hota hai — kuch casein solution mein reh jaata hai — result kam aayega.</li>
                  <li><strong>50°C+ par:</strong> Whey proteins bhi denature hone lagti hain aur casein ke saath co-precipitate ho sakti hain — result zyada aayega (contamination).</li>
                  <li><strong>40-42°C = Sweet spot:</strong> Casein fully precipitate, whey proteins solution mein — clean separation.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ 90 ml distilled water kyun daalte hain (10 g milk ko dilute karte hain)?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Dilution se casein precipitation <strong>better</strong> hoti hai — concentrated milk mein fat globules aur proteins ek doosre ko interfere karte hain.</li>
                  <li>Dilute milk mein acid uniformly mix hota hai — <strong>local pH extremes</strong> nahi bante.</li>
                  <li>Washing (filtering ke baad) bhi easy hoti hai dilute mein.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ 10 minute standing kyun? Supernatant clear kyun hona chahiye?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>10 minute:</strong> Casein clumps ko settle hone ka time chahiye — gravity se neeche jaate hain.</li>
                  <li><strong>Clear supernatant:</strong> Agar supernatant milky/turbid hai to casein abhi fully precipitate nahi hua — thoda aur acetic acid chahiye ya zyada time dein.</li>
                  <li><strong>Clear = whey:</strong> Whey proteins (alpha-lactalbumin, beta-lactoglobulin) solution mein rehte hain — ye precipitate nahi hone chahiye.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ Washing kyun zaroori hai filter paper par?</h5>
                <p class="my-1">Casein precipitate ke saath whey protein ka thoda solution trapped hota hai. Thande paani se wash karne se ye whey protein nikal jaata hai — sirf casein rehta hai. Agar wash nahi karein to result overestimated aayega (whey protein bhi count hoga).</p>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ Calculation mein 6.38 same kyun use hota hai?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>% Casein = % Nitrogen in precipitate × 6.38</code></pre>
                <p class="my-1">Casein ka nitrogen content bhi ~15.67% hai (milk protein average ke similar) — isliye same factor 6.38 use hota hai. Actually casein ka exact factor 6.40 hai lekin conventionally 6.38 hi use karte hain dairy industry mein.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>250 ml beaker mein 10 gram doodh weigh karein. 40-42°C par 90 ml distilled water daalein.</li>
                <li>Hilate hue 10% acetic acid solution ka 1.5 ml boond-boond daalein (pH 4.6 tak lane ke liye).</li>
                <li>Mixture ko 10 minute ke liye khada rehne dein. Supernatant clear hona chahiye.</li>
                <li>Ek filter paper ke through mixture ko filter karein. Precipitate ko thande paani se dhoyein taaki whey proteins puri tarah nikal jayein.</li>
                <li>Total protein method mein described anusaar nitrogen determination ke liye filter paper aur precipitate ko Kjeldahl flask mein transfer karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Casein = Precipitate mein % Nitrogen × 6.38</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Cow milk casein: ~2.5%, Buffalo milk casein: ~3.0-3.5%. Casein = ~80% of total protein.</p>
            `
          },
          {
            title: "Lactose ka Determination (Lane-Eynon Method)",
            purpose: "Doodh mein lactose (doodh ki shakkar) ki quantity measure karna. Lactose ek reducing sugar hai.",
            reference: "IS 1479 (Part II) 1961; A.O.A.C Official Method 930.28",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Lactose ek reducing sugar hai jo Fehling's solution (copper sulphate + alkaline tartrate) ko reduce kar sakta hai. Fehling's solution ka known volume liya jaata hai aur doodh ke clarified solution se titrate kiya jaata hai jab tak saara copper reduce na ho jaye. Methylene blue indicator ka use endpoint detect karne ke liye hota hai — colour blue se colourless ho jaata hai.</p>

              <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-4 rounded">
                <h4 class="font-bold text-amber-800 mb-3">🔬 Lane-Eynon Method ke Sabhi Factors ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Fehling's Solution kya hai? A aur B alag kyun hote hain?</h5>
                <table class="table-auto border-collapse border border-amber-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-amber-100"><th class="border border-amber-300 p-2">Solution</th><th class="border border-amber-300 p-2">Composition</th><th class="border border-amber-300 p-2">Kaam</th><th class="border border-amber-300 p-2">Alag kyun rakhte hain?</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-amber-300 p-2">Fehling's A</td><td class="border border-amber-300 p-2">CuSO₄ · 5H₂O — 69.28 g per litre</td><td class="border border-amber-300 p-2">Cu²⁺ ions provide karta hai — ye reduce honge</td><td class="border border-amber-300 p-2" rowspan="2">Agar dono ek saath mix karke rakhein to dhire-dhire Cu(OH)₂ precipitate ban jayega — solution kharab ho jayega. Alag rakhne se dono stable rehte hain — use karne se pehle mix karo.</td></tr>
                    <tr><td class="border border-amber-300 p-2">Fehling's B</td><td class="border border-amber-300 p-2">Sodium potassium tartrate (Rochelle salt) — 346 g/L + NaOH — 100 g/L</td><td class="border border-amber-300 p-2">Tartrate Cu²⁺ ko chelate karke solution mein soluble rakhta hai; NaOH alkaline medium deta hai</td></tr>
                  </tbody>
                </table>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Core reaction kya hoti hai?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>Lactose (reducing sugar) + 2Cu²⁺ (blue) + NaOH → Lactobionic acid + Cu₂O↓ (brick red)

Step by step:
1. Lactose ka aldehyde group Cu²⁺ ko reduce karta hai → Cu⁺ banta hai
2. Cu⁺ alkaline medium mein Cu₂O (cuprous oxide) banata hai → BRICK RED precipitate
3. Blue colour (Cu²⁺) → disappear → brick red (Cu₂O)</code></pre>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Lead acetate se protein precipitation kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Proteins aur fat interfere karte hain:</strong> Ye Fehling's solution ke saath react kar sakte hain ya turbidity create karte hain — endpoint dekhna mushkil hoga.</li>
                  <li><strong>Lead acetate kaise kaam karta hai:</strong> Pb²⁺ ions proteins ke saath insoluble lead-protein complex banate hain → precipitate → filter out.</li>
                  <li><strong>Excess lead hataana (oxalate se) kyun zaroori:</strong> Lead ions bhi reducing agent ki tarah kaam kar sakte hain — Fehling's solution ko reduce kar sakte hain — <strong>false high result</strong> aayega. Potassium/sodium oxalate lead ko insoluble lead oxalate (PbC₂O₄) bana kar hata deta hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ 10 ml Fehling's A + 10 ml Fehling's B — kyun equal volumes?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Equal mixing se <strong>correct Cu²⁺ to tartrate ratio</strong> banta hai — copper puri tarah chelated rehta hai.</li>
                  <li>Agar A zyada daalein: Excess Cu²⁺ precipitate ho jayega — unreacted copper — galat endpoint.</li>
                  <li>Agar B zyada daalein: Solution zyada alkaline hoga — side reactions badh jayengi.</li>
                  <li><strong>10 ml standard hai</strong> — isse known amount Cu²⁺ milta hai jiska lactose equivalent table mein diya hota hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Methylene Blue indicator kyun? Ye kaise kaam karta hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Problem:</strong> Solution already brick red (Cu₂O) ho rahi hai — endpoint dekhna mushkil hai.</li>
                  <li><strong>Solution:</strong> Methylene blue ek <strong>redox indicator</strong> hai — ye Cu²⁺ se ZYADA easily reduce hota hai.</li>
                  <li><strong>Kaise kaam karta hai:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1">
                      <li>Jab tak Cu²⁺ bacha hai → Methylene blue oxidized (blue) rehta hai</li>
                      <li>Jab SAARA Cu²⁺ reduce ho jaata hai → extra lactose methylene blue ko reduce karta hai → <strong>colourless (leuco form)</strong></li>
                    </ul>
                  </li>
                  <li><strong>Endpoint:</strong> Blue → colourless (brick red background par — clearly dikhta hai)</li>
                  <li><strong>2-3 drops hi kyun:</strong> Indicator ki zyada matra extra lactose consume karegi — result galat aayega.</li>
                  <li><strong>End ke paas kyun daalte hain (pehle nahi):</strong> Agar shuru mein daalein to boiling ke dauran methylene blue decompose ho sakta hai — endpoint miss ho jayega.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Boiling karte hue titrate kyun karna padta hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Lactose aur Cu²⁺ ki reaction <strong>sirf high temperature par fast hoti hai</strong> — room temperature par bahut slow hai.</li>
                  <li>Boiling ensure karta hai ki reaction <strong>immediately aur completely</strong> hoti hai — har drop ke baad.</li>
                  <li><strong>Boiling rok kar titrate nahi kar sakte</strong> — cooling hone par reaction ruk jayegi aur endpoint galat aayega.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Lane-Eynon Table kyun use hoti hai? Direct calculation kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Problem:</strong> Lactose aur Fehling's solution ka reaction <strong>exactly stoichiometric nahi hai</strong> — matlab fixed ratio mein react nahi karte. Titre value ke saath ratio slightly change hota hai.</li>
                  <li><strong>Solution:</strong> Scientists ne experimentally determine kiya ki different titre values par kitna lactose (mg) 10 ml Fehling's A + 10 ml Fehling's B ko reduce karta hai — ye data table mein hai.</li>
                  <li><strong>Example:</strong> Agar titre value 15.5 ml hai → table se dekhein → suppose factor = 67.2 mg lactose.</li>
                  <li>Ye table <strong>internationally standardized</strong> hai — har lab mein same table use hoti hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-amber-700">❓ Dilution factor (25 ml → 250 ml = 10× dilution) — calculation mein kaise use hota hai?</h5>
                <pre class="bg-white p-2 rounded my-2"><code>% Lactose = (Factor from table × Total dilution volume) / (Titre value × Aliquot × Sample weight) × 100

Example:
Sample = 25 ml milk, diluted to 250 ml (10× dilution)
Factor = 67.2 mg (from table for titre value)
Titre = 15.5 ml

Lactose in 250 ml solution = 67.2 mg per 15.5 ml used
Lactose per ml = 67.2 / 15.5 = 4.335 mg/ml
Total in 250 ml = 4.335 × 250 = 1083.87 mg = 1.084 g
This came from 25 ml milk
Per 100 ml = (1.084 / 25) × 100 = 4.34% lactose</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Sample Preparation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>25 ml doodh ko 250 ml volumetric flask mein lein.</li>
                <li>Proteins precipitate karne ke liye 10 ml lead acetate solution daalein, mix karein.</li>
                <li>Excess lead hataane ke liye potassium/sodium oxalate daalein.</li>
                <li>Volume ko 250 ml tak distilled water se make up karein.</li>
                <li>Filter karein — ye clear filtrate titration ke liye use hoga.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek conical flask mein 10 ml each Fehling's A aur Fehling's B solution lein.</li>
                <li>~15 ml distilled water daalein aur boil karein.</li>
                <li>Boiling mixture ko burette se doodh ke clarified solution se titrate karein.</li>
                <li>Jab solution ka colour halka blue ho jaye, 2-3 drops methylene blue indicator daalein.</li>
                <li>Boiling continue karein aur solution drop by drop add karein jab tak blue colour completely disappear na ho jaye (brick red endpoint).</li>
                <li>Titre value note karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Normal milk lactose: 4.5-5.0%</p>
            `
          },
          {
            title: "Titratable Acidity",
            purpose: "Doodh ki total acidity (natural + developed) measure karna — freshness ka indicator hai.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ki total acidity ko ek standard alkali solution (NaOH) ke saath titrate karke measure kiya jaata hai. Phenolphthalein indicator colour change (colourless se pink) endpoint indicate karta hai. Fresh doodh ki natural acidity ~0.12-0.14% hoti hai (casein, phosphates, CO₂ se). Bacterial growth se lactic acid banta hai jo acidity badhata hai.</p>

              <div class="bg-pink-50 border-l-4 border-pink-400 p-4 my-4 rounded">
                <h4 class="font-bold text-pink-800 mb-3">🔬 Acidity Formula ke Factor "9" ki Complete Derivation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-pink-700">❓ Formula mein "9" kahan se aaya? — Step by Step Derivation</h5>
                <pre class="bg-white p-2 rounded my-2"><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>

                <p class="font-semibold my-2">Derivation:</p>
                <ol class="list-decimal list-outside pl-5 space-y-1 my-2">
                  <li><strong>Lactic acid ka formula:</strong> CH₃CHOHCOOH</li>
                  <li><strong>Molecular weight:</strong> C₃H₆O₃ = (3×12) + (6×1) + (3×16) = 36 + 6 + 48 = <strong>90 g/mol</strong></li>
                  <li><strong>Lactic acid monoprotic hai</strong> (ek -COOH group hai) → <strong>Equivalent weight = Molecular weight = 90 g/eq</strong></li>
                  <li><strong>1 ml of 1N NaOH</strong> = 1 milliequivalent = neutralizes 1 milliequivalent acid = <strong>90/1000 g lactic acid = 0.090 g</strong></li>
                  <li><strong>V ml of N normality NaOH</strong> = V × N milliequivalents = neutralizes <strong>V × N × 0.090 g</strong> lactic acid</li>
                  <li><strong>Percentage calculation:</strong></li>
                </ol>
                <pre class="bg-white p-2 rounded my-2"><code>% Acidity = (V × N × 0.090 / W) × 100
           = (V × N × 90) / (W × 1000) × 100
           = (V × N × 90 × 100) / (W × 1000)
           = (V × N × 9) / W

Factor 9 = Equivalent weight (90) × 100 / 1000 = 90/10 = 9</code></pre>

                <div class="bg-white p-3 rounded mt-2 text-sm">
                  <p><strong>Example:</strong> V = 1.5 ml, N = 0.1, W = 10 g</p>
                  <p>% Acidity = (9 × 1.5 × 0.1) / 10 = 1.35 / 10 = <strong>0.135%</strong> (normal range mein hai ✅)</p>
                </div>

                <h5 class="font-semibold mt-4 mb-1 text-pink-700">❓ Agar acidity doosre acid ke terms mein express karni ho to factor kya hoga?</h5>
                <table class="table-auto border-collapse border border-pink-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-pink-100"><th class="border border-pink-300 p-2">Acid</th><th class="border border-pink-300 p-2">Molecular Wt</th><th class="border border-pink-300 p-2">Eq. Wt</th><th class="border border-pink-300 p-2">Factor (Eq.Wt × 100/1000)</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-pink-300 p-2 font-semibold">Lactic acid (dairy standard)</td><td class="border border-pink-300 p-2">90</td><td class="border border-pink-300 p-2">90 (monoprotic)</td><td class="border border-pink-300 p-2 font-semibold">9.0</td></tr>
                    <tr><td class="border border-pink-300 p-2">Citric acid</td><td class="border border-pink-300 p-2">192</td><td class="border border-pink-300 p-2">64 (triprotic)</td><td class="border border-pink-300 p-2">6.4</td></tr>
                    <tr><td class="border border-pink-300 p-2">Oleic acid</td><td class="border border-pink-300 p-2">282</td><td class="border border-pink-300 p-2">282 (monoprotic)</td><td class="border border-pink-300 p-2">28.2</td></tr>
                    <tr><td class="border border-pink-300 p-2">Sulphuric acid</td><td class="border border-pink-300 p-2">98</td><td class="border border-pink-300 p-2">49 (diprotic)</td><td class="border border-pink-300 p-2">4.9</td></tr>
                  </tbody>
                </table>
                <p class="text-xs my-1">Dairy mein hamesha lactic acid ke terms mein express karte hain (factor = 9) kyunki bacteria lactose se lactic acid banate hain — developed acidity ka source lactic acid hai.</p>

                <h5 class="font-semibold mt-4 mb-1 text-pink-700">❓ 0.1 N NaOH kyun? Concentration important kyun hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Doodh ki acidity bahut kam hai</strong> (~0.12-0.15%) — 10 g sample mein sirf ~0.012-0.015 g lactic acid hai.</li>
                  <li><strong>0.1N NaOH se:</strong> ~1.3-1.7 ml titre aata hai — accurately measure ho sakta hai burette se.</li>
                  <li><strong>1N NaOH se:</strong> Sirf ~0.13-0.17 ml lagega — itna kam volume accurately measure karna bahut mushkil hai — ek drop ka error bhi significant hoga.</li>
                  <li><strong>0.01N NaOH se:</strong> ~13-17 ml lagega — ye practical hai lekin dilute NaOH jaldi kharab (CO₂ absorb karke) ho jaata hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-pink-700">❓ Phenolphthalein indicator kyun? Endpoint ka pink colour kya represent karta hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Phenolphthalein ka colour change range:</strong> pH 8.2-10.0 → colourless to pink.</li>
                  <li><strong>Doodh naturally buffered hai</strong> (pH ~6.7) — jab NaOH add karte hain to pH dheere-dheere badhta hai.</li>
                  <li><strong>Jab pH ~8.3 pahunchta hai:</strong> Phenolphthalein pink ho jaata hai — matlab saara acid (lactic acid + natural acidity) neutralize ho chuka hai.</li>
                  <li><strong>15 seconds tak pink rehna chahiye:</strong> Kyunki CO₂ dissolved hone se temporary pink aa kar gayab ho sakta hai — stable pink = true endpoint.</li>
                  <li><strong>Phenolphthalein kyun, methyl orange nahi:</strong> Methyl orange ka range pH 3.1-4.4 hai — doodh ka starting pH 6.7 hai — methyl orange pehle se hi ek colour mein hoga — kaam nahi karega.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-pink-700">❓ Doodh ki "Natural Acidity" vs "Developed Acidity" kya hai?</h5>
                <table class="table-auto border-collapse border border-pink-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-pink-100"><th class="border border-pink-300 p-2">Type</th><th class="border border-pink-300 p-2">Source</th><th class="border border-pink-300 p-2">Amount</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-pink-300 p-2"><strong>Natural Acidity</strong></td><td class="border border-pink-300 p-2">Casein (~0.05-0.08%), Phosphates (~0.03%), CO₂ (~0.01%), Citrates, Whey proteins</td><td class="border border-pink-300 p-2">~0.12-0.16%</td></tr>
                    <tr><td class="border border-pink-300 p-2"><strong>Developed Acidity</strong></td><td class="border border-pink-300 p-2">Lactic acid (bacteria ne lactose se banaya)</td><td class="border border-pink-300 p-2">0% (fresh) se badhta jaata hai</td></tr>
                    <tr><td class="border border-pink-300 p-2 font-semibold"><strong>Titratable Acidity</strong></td><td class="border border-pink-300 p-2 font-semibold">Natural + Developed</td><td class="border border-pink-300 p-2 font-semibold">Total jo NaOH se titrate hota hai</td></tr>
                  </tbody>
                </table>
                <p class="text-xs my-1"><strong>Developed acidity = Titratable acidity - Natural acidity.</strong> Agar titratable acidity 0.18% hai aur natural acidity ~0.14% hai to developed acidity = 0.04% — bacteria ne itna lactic acid banaya.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek porcelain dish ya conical flask mein 10 ml doodh ka sample lein (ya 10 gram weigh karein). <span class="text-xs text-gray-500">(Porcelain dish isliye kyunki white background par pink colour clearly dikhta hai)</span></li>
                <li>1% phenolphthalein solution ki kuch boondein daalein (3-4 drops).</li>
                <li>0.1 N NaOH solution se burette se titrate karein.</li>
                <li>Jab ek halka pink colour dikhaye (endpoint) — jo 15 seconds tak rehna chahiye — tab titration band kar dein.</li>
                <li>Use kiye gaye alkali ki volume note karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Fresh cow milk: 0.12-0.14%, Fresh buffalo milk: 0.12-0.15%. FSSAI maximum limit: 0.15% (as lactic acid) for mixed milk.</p>
            `
          },
          {
            title: "Total Ash ka Determination",
            purpose: "Doodh mein total mineral content determine karna.",
            reference: "IS: 1479 (Part-II)-1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ke sample ko tab tak incinerate (burn) kiya jaata hai jab tak saara organic matter destroy na ho jaye, jisse sirf inorganic minerals (ash) reh jaate hain. Ash mein calcium, phosphorus, sodium, potassium, magnesium, chloride etc. included hote hain.</p>

              <div class="bg-gray-100 border-l-4 border-gray-400 p-4 my-4 rounded">
                <h4 class="font-bold text-gray-800 mb-3">🔬 Ash Determination ke Factors ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ 550°C kyun? Kam ya zyada kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>< 500°C:</strong> Organic matter (carbon) puri tarah burn nahi hoga — <strong>black/dark grey ash</strong> aayegi — result overestimated (carbon bhi weigh hoga).</li>
                  <li><strong>> 600°C:</strong> Kuch minerals volatile ho jaate hain — NaCl ~800°C par sublimate hota hai, lekin loss 600°C+ par start ho sakta hai. Potassium chloride bhi volatile hai. Carbonates decompose ho sakte hain (CaCO₃ → CaO + CO₂ at ~840°C lekin partial loss earlier hota hai).</li>
                  <li><strong>550°C = Standard temperature:</strong> Saara organic carbon completely burn hota hai (CO₂ ban kar ud jaata hai) + saare minerals intact rehte hain.</li>
                  <li><strong>White/light grey ash = complete ashing.</strong> Black spots = incomplete — aur time chahiye.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ 6-8 hours muffle furnace mein kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Doodh ke solids mein fat + protein + lactose — in sab ko completely oxidize hona chahiye.</li>
                  <li><strong>Fat slowly burn hota hai</strong> — especially charred fat ka carbon mushkil se hatta hai.</li>
                  <li>6-8 hours mein typically complete ashing ho jaata hai. Agar ash abhi bhi dark hai to overnight rakhein.</li>
                  <li><strong>Tip:</strong> Bhi add HNO₃ ki kuch drops agar carbon nahi hatt raha — ye oxidizing agent hai aur carbon ko CO₂ mein convert karta hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ Silica ya Platinum crucible kyun? Glass kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Glass:</strong> 550°C par melt/deform ho jayega — glass ka softening point ~500-600°C hai.</li>
                  <li><strong>Silica (quartz):</strong> Melting point ~1700°C — 550°C par bilkul safe. Sasta hai. Commonly used.</li>
                  <li><strong>Platinum:</strong> Melting point ~1768°C — sabse best, inert, non-reactive. Lekin bahut <strong>mehnga</strong> hai — special research labs mein use hota hai.</li>
                  <li><strong>Porcelain:</strong> Bhi use hota hai — melting point ~1400°C — lekin absorb kar sakta hai kuch components — less accurate.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ Water bath → Hot plate → Muffle furnace — ye 3-step process kyun?</h5>
                <ol class="list-decimal list-outside pl-5 space-y-1 my-2">
                  <li><strong>Water bath (100°C):</strong> Paani hataata hai — agar seedha muffle furnace mein rakhein to paani rapidly boil hoga aur sample <strong>splatter</strong> (udh) hoga — loss of material.</li>
                  <li><strong>Hot plate (~200-300°C):</strong> Charring — organic matter partially burn hota hai. Ye smoke release karta hai. Muffle furnace mein seedha daalenge to smoke furnace ko damage karega.</li>
                  <li><strong>Muffle furnace (550°C):</strong> Final complete ashing — remaining carbon CO₂ ban kar ud jaata hai. Clean, smoke-free combustion.</li>
                </ol>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ Formula explanation:</h5>
                <pre class="bg-white p-2 rounded my-2"><code>% Total Ash = [(W2 - W1) / Sample weight] × 100

W1 = Empty crucible weight
W2 = Crucible + ash weight (after ashing)
W2 - W1 = Ash weight only
Sample weight = original milk weight taken</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek pehle se weigh kiye hue silica ya platinum crucible (W1) mein lagbhag 10 gram doodh ka sample accurately weigh karein.</li>
                <li>Sample ko ek water bath par evaporate karein (paani hata dein).</li>
                <li>Phir ek hot plate par tab tak heat karein jab tak ye burn hona band na kar de (charring).</li>
                <li>Crucible ko 550°C par ek muffle furnace mein tab tak heat karein jab tak ek white ya light grey ash prapt na ho jaye (6-8 hours).</li>
                <li>Ek desiccator mein cool karein aur weigh karein (W2).</li>
                <li>Constant weight ke liye repeat karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Total Ash = [(W2 - W1) / Sample ka weight] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Normal milk ash: 0.7-0.75%. Agar ash unusually high hai to neutralizer (soda, lime) milawat ka indication hai.</p>
            `
          },
          {
            title: "Minerals ka Determination (Flame Photometry se)",
            purpose: "Doodh mein calcium, sodium aur potassium ki quantity ka tezi se aur accurately determination karna.",
            reference: "Journal of Dairy Science Vol. 33, No. 6, 1950",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flame photometry ek aisi technique hai jismein ek sample ko ek flame mein introduce kiya jaata hai. Har element ek specific wavelength par light emit karta hai (Na: 589 nm — yellow, K: 766 nm — violet, Ca: 622 nm — red-orange). Emitted light ki intensity us element ki concentration ke proportional hoti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Sample Preparation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek porcelain crucible mein 100 gram doodh ka accurately weight karein.</li>
                <li>Sample ko 100°C par 24 ghante ke liye dry karein.</li>
                <li>Dried sample ko muffle furnace mein 550°C par ash karein.</li>
                <li>Ash ko 10 ml 1:1 HCl aur garam paani se extract karein. Solution ko filter karein.</li>
                <li>Complete extraction ensure karne ke liye ashing aur extraction process repeat karein.</li>
                <li>Final filtered solution ko ek volumetric flask mein 500 ml tak distilled water se dilute karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Stock solution ka 5 ml aliquot lein, ise 100 ml volumetric flask mein daalein, aur distilled water se mark tak dilute karein.</li>
                <li>Flame photometer ko Ca, Na ya K ke specific wavelength par set karein.</li>
                <li>Known concentrations ke standard solutions tayyar karein.</li>
                <li>Standard solutions ki intensity measure karein aur calibration curve banayein.</li>
                <li>Unknown sample ki flame intensity measure karein aur calibration curve se concentration find karein.</li>
              </ol>

              <div class="bg-cyan-50 border-l-4 border-cyan-400 p-4 mt-4 rounded">
                <h4 class="font-bold text-cyan-800 mb-3">🔬 Factors & Constants ki Scientific Explanation:</h4>

                <h5 class="font-semibold text-cyan-700 mt-3 mb-1">❓ Specific Wavelengths kyun — Na 589 nm, K 766 nm, Ca 622 nm?</h5>
                <p class="text-sm mb-2">Har element ke <strong>electrons ka energy level unique</strong> hota hai (quantum mechanics). Jab atom flame mein excite hota hai:</p>
                <pre class="bg-white p-2 rounded text-sm"><code>Step 1: Flame ki heat → electron ground state se excited state mein jaata hai
Step 2: Electron wapas ground state mein aata hai
Step 3: Energy difference = specific wavelength ki light emit hoti hai

ΔE = hν = hc/λ
Jahaan: h = Planck's constant, c = speed of light, λ = wavelength

Har element ka ΔE different → λ different → colour different</code></pre>
                <table class="table-auto border-collapse border border-cyan-300 mt-2 mb-3 text-sm w-full">
                  <thead><tr class="bg-cyan-100"><th class="border border-cyan-300 p-2">Element</th><th class="border border-cyan-300 p-2">Wavelength</th><th class="border border-cyan-300 p-2">Colour</th><th class="border border-cyan-300 p-2">Electron Transition</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-cyan-300 p-2"><strong>Sodium (Na)</strong></td><td class="border border-cyan-300 p-2">589 nm (D-line)</td><td class="border border-cyan-300 p-2">Bright Yellow</td><td class="border border-cyan-300 p-2">3p → 3s transition. Ye sabse famous flame colour hai — namak jalane par yellow flame dikhti hai</td></tr>
                    <tr><td class="border border-cyan-300 p-2"><strong>Potassium (K)</strong></td><td class="border border-cyan-300 p-2">766 nm</td><td class="border border-cyan-300 p-2">Violet/Lilac</td><td class="border border-cyan-300 p-2">4p → 4s transition. K ki electron configuration Na se different hai → different energy gap → different λ</td></tr>
                    <tr><td class="border border-cyan-300 p-2"><strong>Calcium (Ca)</strong></td><td class="border border-cyan-300 p-2">622 nm</td><td class="border border-cyan-300 p-2">Red-Orange</td><td class="border border-cyan-300 p-2">CaOH molecular emission band. Ca diatomic molecules banata hai flame mein</td></tr>
                  </tbody>
                </table>
                <p class="text-sm"><strong>Ye wavelengths "fingerprint" hain:</strong> Har element ki unique identification — isi principle par atomic spectroscopy kaam karta hai.</p>

                <h5 class="font-semibold text-cyan-700 mt-4 mb-1">❓ Interpolation Formula kaise kaam karta hai?</h5>
                <pre class="bg-white p-2 rounded text-sm"><code>C_x = C₁ + (C₂ - C₁) × (I_x - I₁) / (I₂ - I₁)

Ye LINEAR INTERPOLATION hai:
• C₁, C₂ = known standard concentrations (lower & upper)
• I₁, I₂ = corresponding intensities (measured)
• I_x = unknown sample ki intensity (measured)
• C_x = unknown concentration (FIND karna hai)

Assumption: C₁ aur C₂ ke beech relationship LINEAR hai
(concentration ↑ → intensity ↑ proportionally)</code></pre>
                <p class="text-sm mt-2"><strong>Example:</strong></p>
                <pre class="bg-white p-2 rounded text-sm"><code>Standard 1: Na = 10 ppm, Intensity = 25
Standard 2: Na = 20 ppm, Intensity = 50
Sample: Intensity = 35

C_x = 10 + (20-10) × (35-25) / (50-25)
    = 10 + 10 × 10/25
    = 10 + 4
    = 14 ppm Na</code></pre>

                <h5 class="font-semibold text-cyan-700 mt-4 mb-1">❓ Beer-Lambert Law — flame photometry ka scientific basis</h5>
                <pre class="bg-white p-2 rounded text-sm"><code>Emission Intensity ∝ Concentration (dilute solutions mein)

I = k × C
Jahaan: I = emitted light intensity
        k = proportionality constant (instrument + element dependent)
        C = concentration

Isliye calibration curve banana padta hai — k find karne ke liye</code></pre>

                <h5 class="font-semibold text-cyan-700 mt-4 mb-1">❓ 1:1 HCl se ash extract kyun karte hain?</h5>
                <p class="text-sm">Ashing ke baad minerals <strong>oxides aur carbonates</strong> ke form mein hote hain (jaise CaO, Na₂CO₃). Ye paani mein insoluble ya poorly soluble hain. HCl inhe <strong>soluble chlorides</strong> mein convert karta hai:</p>
                <pre class="bg-white p-2 rounded text-sm"><code>CaO + 2HCl → CaCl₂ (soluble) + H₂O
Na₂CO₃ + 2HCl → 2NaCl (soluble) + H₂O + CO₂↑</code></pre>
                <p class="text-sm mt-1"><strong>1:1 HCl:</strong> Concentrated HCl (37%) ko equal volume paani mein mix kiya → ~18.5% HCl. Ye moderate strength hai — sufficient for dissolution but not too aggressive.</p>

                <h5 class="font-semibold text-cyan-700 mt-4 mb-1">❓ 100 g doodh → 500 ml final volume — dilution calculations</h5>
                <pre class="bg-white p-2 rounded text-sm"><code>100 g doodh → ash → extract → 500 ml stock solution
Stock se 5 ml → 100 ml working solution

Total dilution:
• Stage 1: 100 g doodh → 500 ml (essentially a 1:5 factor on ash content)
• Stage 2: 5 ml → 100 ml (20× dilution)
• Overall dilution on the aliquot: 100 ml / 5 ml = 20× on stock

Final concentration calculation:
ppm from curve × (100/5) × (500/100) = ppm in original milk
                
Ye dilution isliye zaroor hai kyunki:
1. Flame photometer dilute solutions ke liye calibrated hai
2. Concentrated solutions mein self-absorption hota hai → non-linear response
3. Burner clog ho sakta hai concentrated solutions se</code></pre>

                <h5 class="font-semibold text-cyan-700 mt-4 mb-1">❓ Calibration Curve kyun banana padta hai?</h5>
                <p class="text-sm">Flame photometer ki response har din, har instrument par thodi different hoti hai (flame stability, gas pressure, atomizer efficiency). Isliye <strong>har baar</strong> standards ke saath calibrate karna padta hai. Standards ke known concentrations vs measured intensities plot karke curve banate hain → unknown sample ki intensity se concentration find karte hain.</p>

                <h5 class="font-semibold text-cyan-700 mt-4 mb-1">❓ Interference problems aur solutions:</h5>
                <table class="table-auto border-collapse border border-cyan-300 mt-2 mb-3 text-sm w-full">
                  <thead><tr class="bg-cyan-100"><th class="border border-cyan-300 p-2">Problem</th><th class="border border-cyan-300 p-2">Explanation</th><th class="border border-cyan-300 p-2">Solution</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-cyan-300 p-2"><strong>Na interference in K</strong></td><td class="border border-cyan-300 p-2">Na bahut strong emitter hai — K reading mein interfere karta hai</td><td class="border border-cyan-300 p-2">K standards mein bhi same Na concentration add karein</td></tr>
                    <tr><td class="border border-cyan-300 p-2"><strong>Phosphate interference in Ca</strong></td><td class="border border-cyan-300 p-2">Phosphate Ca ke saath refractory compound banata hai flame mein</td><td class="border border-cyan-300 p-2">Lanthanum chloride add karein — phosphate ko La ke saath bind karata hai, Ca free rehta hai</td></tr>
                    <tr><td class="border border-cyan-300 p-2"><strong>Self-absorption</strong></td><td class="border border-cyan-300 p-2">High concentration par outer flame atoms inner atoms ki light absorb karte hain</td><td class="border border-cyan-300 p-2">Sample dilute karein — calibration range mein rakhein</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Calculation (Interpolation Method):</h4>
              <pre><code>C_x = C₁ + (C₂ - C₁) × (I_x - I₁) / (I₂ - I₁)</code></pre>
              <p class="text-xs">Jahaan C = concentration, I = intensity, subscript x = unknown, 1 = lower standard, 2 = upper standard.</p>

              <h4 class="font-semibold mt-4 mb-2">Expected Values in Milk:</h4>
              <p>Calcium: ~120 mg/100ml, Sodium: ~50 mg/100ml, Potassium: ~150 mg/100ml</p>
            `
          },
          {
            title: "Methylene Blue Reduction Test (MBRT)",
            purpose: "Raw doodh ki microbiological quality ka quickly assessment karna — ye ek rapid platform test hai.",
            reference: "IS: 1479 (Part III) – 1977",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Methylene Blue ek blue redox dye hai. Doodh mein present bacteria apne metabolism (respiration) ke dauran is dye ko reduce karte hain, jisse ye colourless (leuco form) ho jaata hai. Jitni tezi se colour gayab hota hai, doodh mein utne hi zyada bacteria hote hain. Ye test bacteria count ka indirect measure deta hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Methylene Blue solution: 5 mg methylene blue per litre distilled water (autoclaved)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek sterilized test tube mein 10 ml doodh ka sample lein (aseptic technique se).</li>
                <li>Ek standard methylene blue solution ka 1 ml daalein.</li>
                <li>Tube ko ek rubber stopper se band karein aur ise ek baar ulta karke mix karein (zyada mat hilayein).</li>
                <li>Tube ko 37°C par ek water bath mein rakhein.</li>
                <li>Samay-samay par dekhein (bina hilaye — sirf tube ko dekhein) aur us time ko record karein jab blue colour puri tarah se disappear ho jaye.</li>
                <li>Ek control tube bhi rakhein (doodh + dye bina incubation ke).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Interpretation (Grading):</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Grade</th><th class="border p-2">MBRT</th><th class="border p-2">Approx. Bacteria Count</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2"><strong>Bahut Achha (Very Good)</strong></td><td class="border p-2">5 ghante ya usse zyada</td><td class="border p-2">&lt; 5 lakh/ml</td></tr>
                  <tr><td class="border p-2"><strong>Achha (Good)</strong></td><td class="border p-2">2 se 4 ghante</td><td class="border p-2">5-20 lakh/ml</td></tr>
                  <tr><td class="border p-2"><strong>Santoshjanak (Fair)</strong></td><td class="border p-2">30 minute se 1 ghanta</td><td class="border p-2">20 lakh - 1 crore/ml</td></tr>
                  <tr><td class="border p-2"><strong>Kharab (Poor)</strong></td><td class="border p-2">30 minute se kam</td><td class="border p-2">&gt; 1 crore/ml</td></tr>
                </tbody>
              </table>
            `
          },
          {
            title: "Resazurin Test (10 Minute Test)",
            purpose: "MBRT se bhi tez — sirf 10 minute mein doodh ki quality ka rough assessment.",
            reference: "IS: 1479 (Part III) – 1977",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Resazurin ek blue dye hai jo bacteria ke metabolic activity se reduce hoti hai. Blue → Purple → Pink → Colourless. 10 minute incubation ke baad colour ko ek Lovibond disc se compare karke grade diya jaata hai. Ye MBRT se zyada rapid hai aur field conditions mein useful hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Sterilized tube mein 10 ml doodh lein.</li>
                <li>1 ml standard resazurin solution (0.005%) daalein.</li>
                <li>Ek baar ulta karke mix karein.</li>
                <li>37°C par water bath mein rakhein.</li>
                <li>Exactly 10 minute baad tube nikaalein aur colour ko Lovibond comparator disc se compare karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Grading (10-minute Resazurin):</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Disc Reading</th><th class="border p-2">Colour</th><th class="border p-2">Grade</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">6</td><td class="border p-2">Blue</td><td class="border p-2">Excellent</td></tr>
                  <tr><td class="border p-2">5</td><td class="border p-2">Light Blue</td><td class="border p-2">Good</td></tr>
                  <tr><td class="border p-2">4</td><td class="border p-2">Purple</td><td class="border p-2">Fair</td></tr>
                  <tr><td class="border p-2">3</td><td class="border p-2">Purple-Pink</td><td class="border p-2">Fair</td></tr>
                  <tr><td class="border p-2">2</td><td class="border p-2">Pink</td><td class="border p-2">Poor</td></tr>
                  <tr><td class="border p-2">1</td><td class="border p-2">White/Colourless</td><td class="border p-2">Very Poor</td></tr>
                </tbody>
              </table>
            `
          },
          {
            title: "Alkaline Phosphatase Test (ALP Test)",
            purpose: "Pasteurization ki efficiency verify karna — sabse important quality control test.",
            reference: "IS 1479 (Part III) 1977; A.O.A.C 946.03",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Phosphatase ek enzyme hai jo raw doodh mein naturally present hota hai. Ye 63°C/30 min ya 72°C/15 sec par inactivate ho jaata hai — matlab proper pasteurization se yeh enzyme destroy ho jaata hai. Agar yeh test positive aaye to iska matlab hai ki doodh ko properly pasteurize nahi kiya gaya tha ya ise raw doodh se contaminate kiya gaya tha.</p>

              <h4 class="font-semibold mt-4 mb-2">Aschaffenburg and Mullen (A&M) Method:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Doodh ke sample ko ek buffer-substrate solution (disodium p-nitrophenyl phosphate — 0.15% in buffer pH 10.2) ke saath mix karein — 5 ml doodh + 5 ml substrate.</li>
                <li>37°C par 2 hours ke liye incubate karein.</li>
                <li>Agar phosphatase present hai, to yeh substrate ko hydrolyze karega, jisse p-nitrophenol niklega — jo alkaline solution mein YELLOW hota hai.</li>
                <li>Colour ki intensity ko standard colour discs ya spectrophotometer (420 nm) se compare/measure karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p><strong>Properly pasteurized milk:</strong> No yellow colour (negative test) — &lt;10 µg p-nitrophenol/ml</p>
              <p><strong>Under-pasteurized/raw milk:</strong> Yellow colour (positive test) — &gt;10 µg p-nitrophenol/ml</p>
            `
          },
          {
            title: "Peroxidase Test (Storch Test)",
            purpose: "Over-heating ya over-pasteurization detect karna. Peroxidase enzyme 80°C se upar destroy hota hai.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Peroxidase ek enzyme hai jo raw doodh mein present hota hai aur HTST pasteurization (72°C/15 sec) survive karta hai but 80°C se upar destroy ho jaata hai. Properly pasteurized doodh mein peroxidase POSITIVE hona chahiye. Agar negative aaye, to doodh over-heated tha.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure (Storch Test):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Test tube mein 5 ml doodh lein.</li>
                <li>5 drops of 2% paraphenylene diamine solution daalein.</li>
                <li>2 drops of hydrogen peroxide (0.2%) daalein.</li>
                <li>Mix karein aur 30 seconds observe karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p><strong>Dark blue/indigo colour (within 30 sec):</strong> Positive — Peroxidase present — doodh properly pasteurized (72°C/15 sec) aur over-heated nahi hai.</p>
              <p><strong>No colour change:</strong> Negative — Peroxidase destroyed — doodh 80°C se upar heat hua hai (over-pasteurized).</p>
              <p><strong>Raw milk:</strong> Strongly positive (immediate deep colour)</p>
            `
          },
          {
            title: "pH Determination",
            purpose: "Doodh ka hydrogen ion concentration measure karna — freshness aur quality ka indicator.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>pH meter ko standard buffer solutions (pH 4.0 aur pH 7.0) se calibrate karein.</li>
                <li>50 ml doodh ek beaker mein lein.</li>
                <li>Temperature note karein (25°C ideal hai).</li>
                <li>Electrode ko doodh mein daalein aur stable reading le karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
              <p>Fresh cow milk pH: 6.6-6.8, Fresh buffalo milk pH: 6.7-6.8</p>
              <p>Sour/fermented milk: pH &lt; 6.0, Mastitic milk: pH &gt; 7.0</p>
            `
          },
          {
            title: "Alcohol Test (COB Test - Clot on Boiling)",
            purpose: "Doodh ki acidity quickly check karna — developed acidity high hone par doodh alcohol/heat se clot hota hai.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Method 1: Alcohol Test</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek test tube mein 2 ml doodh lein.</li>
                <li>2 ml 68% ethanol (ya 75% ethanol for more sensitive test) daalein.</li>
                <li>Mix karein aur clot formation observe karein.</li>
              </ol>
              <p><strong>Result:</strong> Clot formation = POSITIVE = doodh ki acidity 0.20% se zyada hai ya colostrum hai. No clot = NEGATIVE = doodh normal hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Clot on Boiling (COB) Test</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh ek test tube ya spoon mein lein.</li>
                <li>Direct flame par boil karein.</li>
                <li>Clot formation dekhein.</li>
              </ol>
              <p><strong>Result:</strong> Clot = doodh ki acidity 0.24% se zyada hai. No clot = normal.</p>
            `
          },
          {
            title: "Added Water ka Detection",
            purpose: "Doodh mein paani milawat ka pata lagana — sabse common adulteration.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Paani milane se doodh ka SNF aur specific gravity dono kam ho jaate hain. Freezing point bhi change hota hai. Normal doodh ka freezing point -0.520 to -0.540°C hota hai. Paani milane se ye 0°C ki taraf shift hota hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Method 1: Lactometer + SNF Method</h4>
              <p>Lactometer reading aur fat % se SNF calculate karein. Agar SNF 8.5% se neeche hai aur specific gravity 1.028 se kam hai to paani milawat ka strong indication hai.</p>
              <pre><code>% Added Water = [(Expected SNF - Observed SNF) / Expected SNF] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Cryoscopy (Freezing Point Method)</h4>
              <p>Doodh ka freezing point ek precision cryoscope se measure karein.</p>
              <p>Normal freezing point: -0.520 to -0.540°C (Hortvet scale)</p>
              <pre><code>% Added Water = [(T_observed - T_normal) / T_normal] × 100</code></pre>
              <p class="text-xs">Jahaan T = Freezing point depression</p>

              <h4 class="font-semibold mt-4 mb-2">Method 3: Nitrate Test</h4>
              <p>Normal doodh mein nitrate absent hota hai, lekin tap water mein present hota hai. 5 ml doodh lein, carefully 1 ml conc. H₂SO₄ add karein with diphenylamine crystal. Ek blue ring at junction = nitrate present = paani mila hua hai.</p>
            `
          },
          {
            title: "Formalin ka Detection",
            purpose: "Formalin (formaldehyde) ek illegal preservative hai — iska detection zaroori hai.",
            reference: "FSSAI Manual Method 2.1.9",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Hehner's Test:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek test tube mein 10 ml doodh lein.</li>
                <li>5 ml concentrated sulphuric acid (with trace of ferric chloride — 0.2 ml of 10% FeCl₃ per 100 ml acid) ko tube ki deewar se carefully neeche slide karein taaki ye doodh ke neeche settle ho jaye.</li>
                <li>Interface (junction) par colour observe karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Result:</h4>
              <p><strong>Violet/Purple ring at junction:</strong> Formalin PRESENT — adulterated</p>
              <p><strong>Brown ring (normal):</strong> Formalin ABSENT — no adulteration</p>

              <h4 class="font-semibold mt-4 mb-2">Confirmatory Test (Chromotropic Acid Test):</h4>
              <p>1 ml doodh + 1 ml chromotropic acid solution + 5 ml conc. H₂SO₄. Violet colour = formaldehyde confirmed.</p>
            `
          },
          {
            title: "Urea ka Detection",
            purpose: "Urea ek common adulterant hai — SNF artificially badhane ke liye milaya jaata hai.",
            reference: "FSSAI Manual Method",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Method 1: DMAB Method</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek test tube mein 5 ml doodh lein.</li>
                <li>5 ml of DMAB reagent (para-dimethylaminobenzaldehyde — 1.6 g in 100 ml ethanol + 10 ml conc. HCl) daalein.</li>
                <li>Mix karein aur 10 minute observe karein.</li>
              </ol>
              <p><strong>Yellow colour development:</strong> Urea PRESENT (normal doodh mein bhi thoda urea hota hai ~20-70 mg/100ml, but intense yellow = added urea)</p>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Urease Based Quantitative Method</h4>
              <p>Soybean urease doodh mein add kiya jaata hai jo urea ko ammonia mein convert karta hai. Released ammonia ko Nessler's reagent se measure kiya jaata hai (yellow-brown colour at 420 nm). Normal milk urea: 20-70 mg/100 ml. Added urea: >70 mg/100 ml suspect.</p>
            `
          },
          {
            title: "Hydrogen Peroxide ka Detection",
            purpose: "H₂O₂ ek illegal preservative hai — doodh ki shelf life artificially badhane ke liye milaya jaata hai.",
            reference: "FSSAI Manual Method 2.1.8",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Method 1: Vanadium Pentoxide Method</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek test tube mein 10 ml doodh lein.</li>
                <li>2-3 drops vanadium pentoxide (V₂O₅) solution daalein — ye catalyst ka kaam karta hai.</li>
                <li>Colour observe karein.</li>
              </ol>
              <p><strong>Red/Pink colour:</strong> H₂O₂ PRESENT — adulterated</p>
              <p><strong>No colour change:</strong> H₂O₂ ABSENT</p>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Potassium Iodide-Starch Method</h4>
              <p>5 ml doodh + few drops KI solution + few drops starch solution. Blue colour = H₂O₂ present (H₂O₂ KI se iodine liberate karta hai jo starch ke saath blue deta hai).</p>
            `
          },
          {
            title: "Neutralizer ka Detection",
            purpose: "Soda, caustic soda, sodium bicarbonate — ye sab doodh ki acidity chhupane ke liye milaaye jaate hain.",
            reference: "IS 1479 (Part I) 1961; FSSAI Manual",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Method 1: Rosalic Acid Test (for Soda/Carbonates)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh ek test tube mein lein.</li>
                <li>5 ml alcohol daalein (proteins precipitate karne ke liye).</li>
                <li>3-4 drops rosalic acid solution (1% in alcohol) daalein.</li>
              </ol>
              <p><strong>Rose-red/Pink colour:</strong> Neutralizer (soda/carbonate) PRESENT</p>
              <p><strong>Brownish/Yellow colour:</strong> ABSENT — normal doodh</p>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Alizarin Test for Sodium Bicarbonate</h4>
              <p>Equal volumes doodh + alizarin reagent (0.2% in alcohol). Deep violet = sodium bicarbonate present.</p>
            `
          },
          {
            title: "Detergent ka Detection",
            purpose: "Doodh mein detergent milawat detect karna — ye fat percentage artificially badhane ke liye milaya jaata hai.",
            reference: "FSSAI Manual",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Methylene Blue Method:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>10 ml doodh ek test tube mein lein.</li>
                <li>0.5 ml methylene blue solution daalein.</li>
                <li>5 ml chloroform daalein.</li>
                <li>Vigorously shake karein aur settle hone dein.</li>
              </ol>
              <p><strong>Blue colour in chloroform layer (lower):</strong> Detergent PRESENT — methylene blue detergent ke saath chloroform layer mein migrate karta hai.</p>
              <p><strong>Colourless chloroform layer:</strong> Detergent ABSENT</p>
            `
          },
          {
            title: "Ammonium Sulphate ka Detection",
            purpose: "Ammonium sulphate doodh ki lactometer reading badhane ke liye milaya jaata hai.",
            reference: "FSSAI Manual",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Nessler's Reagent Method:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh + 5 ml 2% NaOH solution mix karein.</li>
                <li>1 ml Nessler's reagent (K₂HgI₄ in NaOH) daalein.</li>
                <li>5 minute observe karein.</li>
              </ol>
              <p><strong>Orange-brown precipitate:</strong> Ammonium sulphate PRESENT (excessive ammonia)</p>
              <p><strong>Faint yellow (normal level):</strong> Normal doodh — thoda urea naturally hota hai</p>
            `
          },
          {
            title: "Starch ka Detection in Milk",
            purpose: "Starch ek thickener ke roop mein milaya jaata hai taaki paani milane ka pata na chale.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Iodine Test:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh ek test tube mein lein.</li>
                <li>Boil karein aur phir cool karein (starch granules ko swell karne ke liye).</li>
                <li>2-3 drops iodine solution (Lugol's iodine) daalein.</li>
              </ol>
              <p><strong>Blue/Blue-black colour:</strong> Starch PRESENT</p>
              <p><strong>Yellow-brown colour:</strong> Starch ABSENT (normal)</p>
            `
          },
          {
            title: "Sugar (Sucrose) ka Detection in Milk",
            purpose: "Cane sugar ka detection — ye SNF aur taste artificially badhane ke liye milaya jaata hai.",
            reference: "FSSAI Manual",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Seliwanoff's Test (Modified Barfoed's):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh ek test tube mein lein.</li>
                <li>1 ml conc. HCl daalein.</li>
                <li>0.05 gram resorcinol add karein.</li>
                <li>Boiling water bath mein 5 minute heat karein.</li>
              </ol>
              <p><strong>Red/Rose-red colour:</strong> Sucrose (cane sugar) PRESENT</p>
              <p><strong>No colour change:</strong> Sucrose ABSENT</p>

              <h4 class="font-semibold mt-4 mb-2">Note:</h4>
              <p>Normal doodh mein sirf lactose hota hai, sucrose nahi. Koi bhi sucrose presence adulteration indicate karta hai.</p>
            `
          },
          {
            title: "Salt (NaCl) ka Detection in Milk",
            purpose: "Namak milawat ka detection — ye specific gravity aur taste mask karne ke liye milaya jaata hai.",
            reference: "FSSAI Manual",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Silver Nitrate Test:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh ek test tube mein lein.</li>
                <li>1 ml 0.1N silver nitrate (AgNO₃) solution daalein.</li>
                <li>2 drops potassium chromate indicator daalein.</li>
              </ol>
              <p><strong>Yellow colour:</strong> Excess salt (NaCl) PRESENT — AgNO₃ saara chloride se react kar chuka aur excess AgNO₃ chromate se yellow colour de raha hai — actually means chloride kam hai aur salt normal hai.</p>
              <p><strong>Correction:</strong> Normal milk mein 0.14-0.17% Cl hota hai. White precipitate excess indicate karta hai. Quantitative determination ke liye Mohr's method use karein (butter section mein described hai).</p>
            `
          },
          {
            title: "Turbidity Test (Lacto Test)",
            purpose: "Doodh mein paani milawat ka ek simple qualitative test.",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh ek test tube mein lein.</li>
                <li>5 ml trichloroacetic acid (TCA, 4%) daalein — ye proteins precipitate kar deta hai.</li>
                <li>Mix karein aur filter karein.</li>
                <li>Filtrate ko observe karein.</li>
              </ol>
              <p><strong>Clear filtrate:</strong> Normal doodh</p>
              <p><strong>Turbid/Milky filtrate:</strong> Paani aur/ya synthetic milk milawat ka indication</p>
            `
          },
          // ==================== SHELF LIFE TESTS ====================
          {
            title: "Accelerated Shelf Life Test (Moseley / Keeping Quality Test)",
            purpose: "Pasteurized milk ki keeping quality predict karna — incubation ke through jaldi result lena.",
            reference: "IS 1479 (Part III) 1977; BIS Standards",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Pasteurized doodh ke sample ko elevated temperature par incubate kiya jaata hai (jaise 35-37°C) taaki bacterial growth accelerate ho. Phir incubation ke baad acidity, pH, organoleptic changes, aur bacterial count measure kiye jaate hain. Agar doodh incubation ke baad bhi acceptable limits mein rahe, to iski shelf life achhi mani jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Method 1: Moseley Keeping Quality Test</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Pasteurized doodh ke do sets of samples lein — ek "test" set aur ek "control" set.</li>
                <li><strong>Test samples:</strong> 37°C par incubator mein rakhein.</li>
                <li><strong>Control samples:</strong> 4°C par refrigerator mein rakhein.</li>
                <li>Incubation ke baad (typically 24 hours), dono sets ki titratable acidity measure karein.</li>
                <li>Acidity ka difference calculate karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📐 Formulas aur Factors ka Explanation:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>Acidity Measurement Formula (Titratable Acidity):</strong></p>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs mt-1">V = NaOH volume (ml), N = NaOH normality, W = sample weight (g)</p>
                
                <p class="mt-2"><strong>Factor "9" kahan se aaya?</strong></p>
                <p class="text-sm">Lactic acid ka molecular weight = 90 g/mol. Ye monoprotic acid hai (1 H⁺ deta hai), so equivalent weight = 90. Formula derivation:</p>
                <pre><code>% = (V × N × Eq.Wt.) / (1000 × W) × 100 = (V × N × 90 × 100) / (1000 × W) = (9 × V × N) / W</code></pre>
                
                <p class="mt-2"><strong>Keeping Quality Formula:</strong></p>
                <pre><code>Acidity Difference = Incubated Acidity (37°C/24h) − Control Acidity (4°C/24h)</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">🔑 Har Temperature/Time Factor Kyu?</h4>
              <div class="bg-yellow-50 p-3 rounded mt-2 mb-2">
                <p><strong>37°C kyu?</strong> — Most dairy spoilage bacteria (Lactobacillus, Streptococcus, E. coli) mesophilic hain — inka optimum growth temperature 30-40°C hai. 37°C = human body temperature ≈ fastest bacterial multiplication. Ek bacterium 37°C par har 20-30 min mein double hota hai. 24 hours mein ek bacterium → 2⁴⁸ = ~2.8 × 10¹⁴ ban sakta hai (ideal conditions mein)!</p>
                
                <p class="mt-2"><strong>4°C kyu (Control)?</strong> — Ye standard refrigeration temperature hai. 4°C par mesophilic bacteria lagbhag dormant rehte hain — growth negligible hoti hai. Isliye control ki acidity ~unchanged rehti hai. Ye baseline provide karta hai.</p>
                
                <p class="mt-2"><strong>24 hours kyu?</strong> — 37°C par 24 hours ≈ 4°C par 4-5 din ke equivalent bacterial growth. Ye "accelerated" isliye hai kyunki Q₁₀ rule ke according: <em>Temperature mein har 10°C increase se bacterial growth rate ~2-3 guna badh jaata hai.</em></p>
                <pre><code>Q₁₀ Rule: Rate₂ / Rate₁ = Q₁₀^((T₂-T₁)/10)
Example: Q₁₀ = 2.5, T₁ = 4°C, T₂ = 37°C
Rate ratio = 2.5^((37-4)/10) = 2.5^3.3 = ~21×
Matlab 37°C par 24h ≈ 4°C par 21 din ka equivalent (approximately)</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (Good Quality Milk):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Given:</strong> Pasteurized toned milk sample. 0.1N NaOH use kiya. Sample weight = 10 g each.</p>
                <p><strong>Control sample (4°C/24h):</strong> NaOH volume used = 1.5 ml</p>
                <pre><code>Control Acidity = (9 × 1.5 × 0.1) / 10 = 1.35 / 10 = 0.135% LA</code></pre>
                
                <p><strong>Test sample (37°C/24h):</strong> NaOH volume used = 1.7 ml</p>
                <pre><code>Test Acidity = (9 × 1.7 × 0.1) / 10 = 1.53 / 10 = 0.153% LA</code></pre>
                
                <pre><code>Acidity Difference = 0.153 - 0.135 = 0.018% LA</code></pre>
                
                <p><strong>Result: 0.018% < 0.02% → ✅ EXCELLENT keeping quality!</strong></p>
                <p>Iska matlab hai bacteria bahut kam hain pasteurized milk mein. Expected shelf life: 5+ din at 4°C.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Poor Quality Milk):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Given:</strong> Doosra batch. Same conditions.</p>
                <p><strong>Control sample (4°C/24h):</strong> NaOH = 1.5 ml → Acidity = 0.135% LA</p>
                <p><strong>Test sample (37°C/24h):</strong> NaOH = 2.9 ml</p>
                <pre><code>Test Acidity = (9 × 2.9 × 0.1) / 10 = 2.61 / 10 = 0.261% LA</code></pre>
                <pre><code>Acidity Difference = 0.261 - 0.135 = 0.126% LA</code></pre>
                
                <p><strong>Result: 0.126% > 0.10% → ❌ POOR keeping quality!</strong></p>
                <p>Bahut zyada bacteria the — possibly post-pasteurization contamination ya under-pasteurization. Expected shelf life: < 2 din. Is batch ki investigation zaroori hai!</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <pre><code>Acidity Difference = Incubated Acidity - Control Acidity</code></pre>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Acidity Increase (% LA)</th><th class="border p-2">Keeping Quality</th><th class="border p-2">Expected Shelf Life at 4°C</th><th class="border p-2">Approx. Bacterial Load</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">&lt; 0.02%</td><td class="border p-2">Excellent</td><td class="border p-2">5+ din</td><td class="border p-2">&lt; 10,000 CFU/ml</td></tr>
                  <tr><td class="border p-2">0.02 - 0.05%</td><td class="border p-2">Good</td><td class="border p-2">3-5 din</td><td class="border p-2">10,000 - 50,000 CFU/ml</td></tr>
                  <tr><td class="border p-2">0.05 - 0.10%</td><td class="border p-2">Fair</td><td class="border p-2">2-3 din</td><td class="border p-2">50,000 - 5,00,000 CFU/ml</td></tr>
                  <tr><td class="border p-2">&gt; 0.10%</td><td class="border p-2">Poor</td><td class="border p-2">&lt; 2 din</td><td class="border p-2">&gt; 5,00,000 CFU/ml</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Extended Keeping Quality at Refrigeration</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Multiple sealed samples 4-7°C par store karein.</li>
                <li>Har 24 ghante ek sample nikaalein aur test karein — acidity, pH, sensory, coliform count.</li>
                <li>Jab koi bhi parameter fail kare, woh din shelf life ki limit hai.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">⚠️ Critical Limits (Fail Criteria):</h4>
              <div class="bg-gray-50 p-3 rounded mt-2">
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li>Acidity > 0.18% LA → doodh sour hone laga</li>
                  <li>pH < 6.4 → significant acid production</li>
                  <li>Acidity > 0.20% → COB test positive → market ke liye unfit</li>
                  <li>Acidity > 0.24% → clot on boiling → completely spoiled</li>
                  <li>Sensory score < 5 → consumer unacceptable</li>
                </ul>
              </div>
            `
          },
          {
            title: "Turbidity Test (for UHT / Sterilized Milk)",
            purpose: "UHT ya sterilized milk ki sterility aur completeness of heat treatment verify karna.",
            reference: "IS 7982:1976; IDF Standard",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Properly sterilized doodh mein saare whey proteins denature ho jaate hain. Jab is doodh ko boil kiya jaata hai, to koi turbidity ya precipitate nahi banta. Lekin agar heat treatment incomplete hai (under-processed), to undenatured whey proteins boiling par precipitate ho jaayenge — turbidity dikhegi. Ye test UHT milk ke liye ek important quality check hai.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Scientific Factors ka Explanation:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>Whey Protein Denaturation Temperature:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>β-Lactoglobulin (β-Lg):</strong> Denaturation shuru hota hai ~65°C par, significant denaturation 72-80°C par, near-complete >90°C par</li>
                  <li><strong>α-Lactalbumin (α-La):</strong> Zyada heat-stable, denaturation ~75-85°C par</li>
                  <li><strong>BSA (Bovine Serum Albumin):</strong> ~70°C par denature</li>
                </ul>
                
                <p class="mt-2"><strong>UHT Treatment:</strong> 135-150°C for 2-5 seconds — is temperature par >99% whey proteins denature ho jaate hain.</p>
                <p><strong>HTST Pasteurization:</strong> 72°C/15 sec — sirf ~70-80% β-Lg denature hota hai → turbidity test FAIL karega (expected hai — ye test sirf UHT/sterilized ke liye hai).</p>
                
                <p class="mt-2"><strong>Denaturation ka percentage calculate kaise karein:</strong></p>
                <pre><code>% Denaturation = [(Native WP in raw − Native WP in heated) / Native WP in raw] × 100

Example: Raw milk mein β-Lg = 3.2 mg/ml
UHT milk mein β-Lg = 0.05 mg/ml
% Denaturation = [(3.2 − 0.05) / 3.2] × 100 = 98.4%
→ Properly processed! Turbidity test PASS hoga.</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">🔑 Ammonium Sulphate Method — 4 gram in 20 ml Kyu?</h4>
              <div class="bg-yellow-50 p-3 rounded mt-2 mb-2">
                <p><strong>4 g (NH₄)₂SO₄ in 20 ml milk = 20% (w/v) saturation</strong></p>
                <p>Is concentration par:</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>Casein:</strong> Precipitate ho jaata hai (removed by filtration)</li>
                  <li><strong>Denatured whey proteins:</strong> Precipitate ho jaate hain (ye bhi removed)</li>
                  <li><strong>Native (undenatured) whey proteins:</strong> Soluble rehte hain — filtrate mein aate hain!</li>
                </ul>
                <p class="mt-1">Jab filtrate ko boil karein → native whey proteins <strong>heat se denature</strong> → aggregate → <strong>TURBIDITY</strong>!</p>
                <p class="mt-1"><strong>"Salting Out" principle:</strong> Ammonium sulphate proteins ki hydration shell hatata hai. Denatured proteins (jo already unfolded hain) ki hydrophobic surfaces exposed hain — ye easily precipitate ho jaate hain. Native proteins (folded, hydrophilic surface) soluble rehte hain at 20% saturation.</p>
                
                <p class="mt-2"><strong>Kyu exactly 20% saturation?</strong></p>
                <p class="text-sm">Full saturation of (NH₄)₂SO₄ at 20°C = ~76.7 g/100 ml. 20% saturation = ~15.3 g/100 ml ≈ 3-4 g/20 ml. Is concentration par selective precipitation hoti hai — sirf denatured + casein precipitate hote hain, native whey soluble rehte hain. Agar zyada concentration use karein → native proteins bhi precipitate ho jayenge → false negative (turbidity nahi dikhegi even if under-processed).</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Ek test tube mein 5 ml UHT/sterilized doodh lein.</li>
                <li>Test tube ko boiling water bath mein 5 minute ke liye rakhein.</li>
                <li>Tube ko nikaalein aur filter paper se filter karein.</li>
                <li>Filtrate ko observe karein — clear ya turbid?</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Alternative Method (Ammonium Sulphate):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>20 ml doodh + 4 gram ammonium sulphate daalein.</li>
                <li>Mix karke dissolve karein.</li>
                <li>Filter karein.</li>
                <li>Filtrate ko boil karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (Properly Processed UHT):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Amul Taaza UHT milk (200 ml Tetra Pak)</p>
                <p><strong>Step 1:</strong> 20 ml milk + 4 g (NH₄)₂SO₄ → dissolve → filter</p>
                <p><strong>Step 2:</strong> Clear filtrate obtained (casein + denatured whey removed)</p>
                <p><strong>Step 3:</strong> Filtrate ko boil kiya 5 min</p>
                <p><strong>Observation:</strong> Filtrate CLEAR raha — koi turbidity nahi aayi</p>
                <p><strong>Result: ✅ PASS — UHT treatment complete. 135°C/4 sec par saare whey proteins denature ho gaye the. Expected shelf life: 3-6 months (room temp, sealed).</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Under-Processed Milk):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Ek batch jismein UHT plant ka holding tube short tha — actual temperature 125°C/2 sec raha (instead of 135°C/4 sec)</p>
                <p><strong>Step 1:</strong> 20 ml milk + 4 g (NH₄)₂SO₄ → dissolve → filter</p>
                <p><strong>Step 2:</strong> Filtrate obtained</p>
                <p><strong>Step 3:</strong> Filtrate ko boil kiya</p>
                <p><strong>Observation:</strong> Filtrate TURBID/CLOUDY ho gaya — white precipitate dikha</p>
                <p><strong>Result: ❌ FAIL — Undenatured β-Lg aur α-La present the jo boiling par aggregate hue. Shelf life: sirf 2-3 weeks (instead of months). Batch REJECT — reprocessing required!</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p><strong>Clear filtrate (no turbidity after boiling):</strong> PASS — Doodh properly sterilized hai, whey proteins puri tarah denature ho gaye hain. Shelf life achhi hogi.</p>
              <p><strong>Turbid/Cloudy filtrate:</strong> FAIL — Heat treatment incomplete tha. Undenatured whey proteins present hain. Shelf life kam hogi, reprocessing ki zaroorat hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Importance for Shelf Life:</h4>
              <p>UHT milk jo turbidity test pass karti hai, woh 3-6 mahine room temperature par safe reh sakti hai. Fail hone par 2-3 hafte mein spoilage ho sakti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">⚠️ Important Note:</h4>
              <div class="bg-gray-50 p-3 rounded mt-2">
                <p><strong>Ye test pasteurized milk par APPLY NAHI hota!</strong> Pasteurized milk (72°C/15 sec) mein whey proteins partially denature hote hain — isliye ye hamesha turbidity dikhayegi. Ye test SIRF UHT (135-150°C) aur sterilized (121°C/15 min) milk ke liye hai.</p>
                <p class="mt-1"><strong>Boiling 5 min kyu?</strong> — 5 minute boiling ensure karta hai ki jo bhi native whey proteins hain, woh completely aggregate ho jayein aur visible turbidity de sakein. Kam time mein faint turbidity miss ho sakti hai.</p>
              </div>
            `
          },
          {
            title: "Pre-Incubation Count (Preliminary Incubation - PI Count)",
            purpose: "Pasteurized milk mein psychrotrophic bacteria ka assessment — ye bacteria fridge temperature par bhi grow karte hain aur shelf life reduce karte hain.",
            reference: "Standard Methods for the Examination of Dairy Products (APHA); IDF 100B:1991",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Pasteurized doodh ko pehle 7°C ya 13°C par ek set period ke liye pre-incubate kiya jaata hai taaki psychrotrophic (cold-loving) bacteria grow ho sakein. Phir Standard Plate Count (SPC) kiya jaata hai. Agar count bahut zyada hai, to iska matlab hai ki raw milk mein psychrotrophs zyada the ya post-pasteurization contamination hua hai — dono cases mein shelf life kam hogi.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Temperatures aur Times ka Scientific Explanation:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>13°C / 18 hours KYU?</strong></p>
                <p>Psychrotrophic bacteria ka generation time (doubling time):</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li>At 4°C: ~8-12 hours (ek division mein 8-12 ghante)</li>
                  <li>At 7°C: ~4-6 hours</li>
                  <li>At 13°C: ~2-3 hours</li>
                  <li>At 21°C: ~1-1.5 hours</li>
                </ul>
                <p class="mt-1"><strong>13°C par 18 hours</strong> ≈ 6-9 generations of psychrotrophs</p>
                <p><strong>7°C par 10 din (240 hours)</strong> ≈ 20-60 generations</p>
                <p>13°C/18h method FASTER hai but 7°C/10d method MORE REALISTIC hai (actual fridge simulation).</p>
                
                <p class="mt-2"><strong>Q₁₀ Calculation:</strong></p>
                <pre><code>Growth rate at 13°C / Growth rate at 7°C ≈ Q₁₀^((13-7)/10) 
= ~2.0^0.6 = ~1.52 times faster

So: 18 hours at 13°C ≈ 18 × 1.52 = ~27 hours at 7°C (roughly)
But with lag phase adjustment, 18h/13°C ≈ 2-3 days at 7°C</code></pre>
                
                <p class="mt-2"><strong>32°C / 48 hours (SPC incubation) KYU?</strong></p>
                <p>Standard Plate Count mein 32°C use hota hai kyunki ye mesophilic bacteria ka lower optimum range hai. 48 hours sufficient hai ki colonies visible size (0.5-2 mm) tak grow ho jayein. 37°C bhi use ho sakta hai but 32°C par wider range of organisms grow karte hain including some psychrotrophs.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">🔑 SPC Formula aur Dilution Factor:</h4>
              <div class="bg-yellow-50 p-3 rounded mt-2 mb-2">
                <pre><code>PI Count (CFU/ml) = Colony Count / (Dilution Factor × Volume Plated)

Where:
- Colony Count = plates par counted colonies (30-300 range valid)
- Dilution Factor = 10⁻¹, 10⁻², 10⁻³, etc.
- Volume Plated = 1 ml (pour plate) ya 0.1 ml (spread plate)</code></pre>
                
                <p class="mt-2"><strong>30-300 colonies kyu count karte hain?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>&lt; 30 colonies:</strong> Statistically unreliable — sampling error bahut zyada hoga</li>
                  <li><strong>&gt; 300 colonies:</strong> Overcrowding — colonies merge ho jaati hain, nutrients ki competition hoti hai → undercount</li>
                  <li><strong>30-300 range:</strong> Statistically valid aur practically countable</li>
                </ul>
                
                <p class="mt-2"><strong>Serial Dilution kaise kaam karta hai?</strong></p>
                <pre><code>Original milk → 1 ml + 9 ml diluent = 10⁻¹ (1/10th)
10⁻¹ → 1 ml + 9 ml diluent = 10⁻² (1/100th)
10⁻² → 1 ml + 9 ml diluent = 10⁻³ (1/1000th)
... aur aage</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure (Method 1: 13°C / 18 hours):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Pasteurized doodh ke sample ko aseptically lein.</li>
                <li>Sample ko 13°C par 18 hours ke liye incubate karein (accelerated growth conditions).</li>
                <li>Incubation ke baad, Standard Plate Count (SPC) perform karein — pour plate method se, PCA agar par, 32°C/48 hours.</li>
                <li>Colony count karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Procedure (Method 2: 7°C / 10 days):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Sample ko 7°C par 10 din tak store karein (real refrigeration simulation).</li>
                <li>Har 2 din baad ek sample nikaal kar SPC karein.</li>
                <li>Growth curve plot karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (Excellent Quality):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized toned milk, Brand A, Batch #2024-05-15</p>
                <p><strong>Pre-incubation:</strong> 13°C / 18 hours</p>
                <p><strong>Plating:</strong> 1 ml of 10⁻² dilution plated on PCA</p>
                <p><strong>Incubation:</strong> 32°C / 48 hours</p>
                <p><strong>Colony Count:</strong> 38 colonies on 10⁻² plate</p>
                <pre><code>PI Count = 38 / (10⁻² × 1) = 38 / 0.01 = 3,800 CFU/ml</code></pre>
                <p><strong>Result: 3,800 CFU/ml < 50,000 → ✅ EXCELLENT!</strong></p>
                <p>Expected shelf life: 5+ din at 4°C. Plant hygiene achhi hai, post-pasteurization contamination negligible.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Poor Quality):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized full cream milk, Brand B, Batch #2024-05-16</p>
                <p><strong>Pre-incubation:</strong> 13°C / 18 hours</p>
                <p><strong>Plating:</strong> Multiple dilutions plated</p>
                <p><strong>Results:</strong></p>
                <ul class="list-disc list-outside pl-5">
                  <li>10⁻³ plate: TNTC (Too Numerous To Count — &gt;300)</li>
                  <li>10⁻⁴ plate: 85 colonies</li>
                  <li>10⁻⁵ plate: 9 colonies (too few, &lt;30)</li>
                </ul>
                <pre><code>PI Count = 85 / (10⁻⁴ × 1) = 85 / 0.0001 = 8,50,000 CFU/ml
= 8.5 × 10⁵ CFU/ml</code></pre>
                <p><strong>Result: 8,50,000 CFU/ml → range 5,00,000 - 50,00,000 → ⚠️ FAIR</strong></p>
                <p>Expected shelf life: sirf 2-3 din at 4°C. Investigation needed — check filler machine, pipe joints, packaging material contamination.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">PI Count (after 13°C/18h)</th><th class="border p-2">Assessment</th><th class="border p-2">Expected Shelf Life</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">&lt; 50,000 CFU/ml</td><td class="border p-2">Excellent</td><td class="border p-2">5+ din (at 4°C)</td></tr>
                  <tr><td class="border p-2">50,000 - 5,00,000 CFU/ml</td><td class="border p-2">Good</td><td class="border p-2">3-4 din</td></tr>
                  <tr><td class="border p-2">5,00,000 - 50,00,000 CFU/ml</td><td class="border p-2">Fair</td><td class="border p-2">2-3 din</td></tr>
                  <tr><td class="border p-2">&gt; 50,00,000 CFU/ml</td><td class="border p-2">Poor</td><td class="border p-2">&lt; 2 din</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Key Psychrotrophic Organisms:</h4>
              <p>Pseudomonas spp. (sabse common — 60-70% psychrotrophic flora), Bacillus cereus, Enterobacter, Acinetobacter — ye sab fridge temperature (4-7°C) par grow karte hain aur lipases/proteases produce karte hain jo doodh ko bitter/rancid bana dete hain.</p>

              <h4 class="font-semibold mt-4 mb-2">🔑 PCA (Plate Count Agar) Composition — Kyu ye media?</h4>
              <div class="bg-gray-50 p-3 rounded mt-2">
                <p>PCA = Tryptone (5g) + Yeast Extract (2.5g) + Glucose (1g) + Agar (15g) per litre</p>
                <p><strong>Ye non-selective, nutrient-poor media hai</strong> — isliye maximum variety ke bacteria grow kar sakte hain. Rich media (jaise BHI) par fast-growers dominate karte hain aur slow-growers suppress hote hain. PCA sabko equal chance deta hai.</p>
                <p><strong>45°C par pour kyu?</strong> — Agar 45°C par molten hota hai but bacteria ko kill nahi karta (thermal death point >50°C for most). 50°C se upar pour karein → bacteria mar jayenge → count kam aayega.</p>
              </div>
            `
          },
          {
            title: "Standard Plate Count / Total Plate Count (TPC) — Shelf Life Monitoring",
            purpose: "Doodh mein total viable bacteria count — shelf life ke dauran microbial load monitor karna.",
            reference: "IS 5402:2012; FSSAI Microbiological Standards; A.O.A.C 990.12",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Doodh ke serial dilutions ko nutrient agar plates par pour kiya jaata hai aur incubate kiya jaata hai. Har viable bacterium ek visible colony banata hai. Colony count se total bacteria per ml calculate hota hai. Shelf life study mein ye test different time intervals par kiya jaata hai taaki bacterial growth curve pata chale.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 TPC Formula — Detailed Breakdown:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <pre><code>TPC (CFU/ml) = Colony Count / (Dilution Factor × Volume Plated)</code></pre>
                
                <p class="mt-2"><strong>CFU ka full form:</strong> Colony Forming Unit — ye "viable bacteria" ka unit hai. Har colony ek ya ek se zyada bacteria se start hui thi.</p>
                
                <p class="mt-2"><strong>Dilution Factor kya hai?</strong></p>
                <pre><code>Agar 1 ml sample + 9 ml diluent = 10 ml total
Dilution = 1/10 = 10⁻¹

Serial dilutions:
10⁻¹ → 10⁻² → 10⁻³ → 10⁻⁴ → 10⁻⁵

Dilution Factor = reciprocal of dilution
10⁻³ ka Dilution Factor = 1000 (ya 10³)
Alternatively: Dilution Factor = 10⁻³ = 0.001</code></pre>

                <p class="mt-2"><strong>Multiple plates hone par (APHA rule):</strong></p>
                <pre><code>TPC = Σ(all colonies from countable plates) / Σ(ml plated × dilution factor for each plate)

Example: 10⁻³ plate = 256 colonies, 10⁻⁴ plate = 28 colonies
TPC = (256 + 28) / [(1 × 10⁻³) + (1 × 10⁻⁴)]
  = 284 / (0.001 + 0.0001)  
  = 284 / 0.0011
  = 2,58,182 ≈ 2.6 × 10⁵ CFU/ml</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">🔑 Har Factor ka Explanation:</h4>
              <div class="bg-yellow-50 p-3 rounded mt-2 mb-2">
                <p><strong>37°C vs 32°C incubation — kaunsa use karein?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>37°C / 48h:</strong> FSSAI standard — pathogens aur indicator organisms ke liye optimized</li>
                  <li><strong>32°C / 48h:</strong> IDF/APHA standard — wider range of dairy organisms count hote hain, including some psychrotrophs</li>
                  <li><strong>Dairy industry mein 32°C preferred hai</strong> kyunki ye dairy-specific flora ko better represent karta hai</li>
                </ul>
                
                <p class="mt-2"><strong>~15 ml agar kyu pour karte hain?</strong></p>
                <p>15 ml agar se plate ki thickness ~3-4 mm hoti hai. Kam agar → plate jaldi dry hogi → colonies properly nahi banegi. Zyada agar → colonies agar ke andar zyada deep hongi → count mushkil.</p>
                
                <p class="mt-2"><strong>0.1% Peptone Water (diluent) kyu?</strong></p>
                <p>Plain distilled water hypotonic hai → bacteria ka osmotic lysis ho sakta hai → count kam aayega. Peptone water isotonic-like environment deta hai jo bacteria ko dilution ke dauran viable rakhta hai.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Doodh ke sample ko aseptically collect karein.</li>
                <li>Serial dilutions banayein — 10⁻¹, 10⁻², 10⁻³, 10⁻⁴, 10⁻⁵ etc. (0.1% peptone water ya phosphate buffer mein).</li>
                <li>1 ml diluted sample ko sterile petri dish mein daalein.</li>
                <li>~15 ml molten Plate Count Agar (PCA, 45°C par cooled) pour karein.</li>
                <li>Gently rotate karke mix karein (figure-of-8 motion). Solidify hone dein.</li>
                <li>Plates ko 37°C par 48 hours incubate karein (ya 32°C par 48h for mesophilic count).</li>
                <li>30-300 colonies wali plates count karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 — Day 0 (Production Day):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Freshly pasteurized toned milk</p>
                <p><strong>Dilutions plated:</strong> 10⁻¹, 10⁻², 10⁻³ (1 ml each)</p>
                <p><strong>After 48h at 32°C:</strong></p>
                <ul class="list-disc list-outside pl-5">
                  <li>10⁻¹ plate: TNTC (>300)</li>
                  <li>10⁻² plate: 125 colonies ✓ (30-300 range mein)</li>
                  <li>10⁻³ plate: 14 colonies (too few)</li>
                </ul>
                <pre><code>TPC = 125 / (10⁻² × 1 ml) = 125 / 0.01 = 12,500 CFU/ml</code></pre>
                <p><strong>Result: 12,500 CFU/ml < 30,000 → ✅ PASS for dispatch!</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 — Shelf Life Monitoring (Day 3):</h4>
              <div class="bg-orange-50 p-3 rounded mt-2 mb-2">
                <p><strong>Same batch, Day 3 (stored at 4°C):</strong></p>
                <p><strong>Dilutions plated:</strong> 10⁻², 10⁻³, 10⁻⁴</p>
                <p><strong>After 48h at 32°C:</strong></p>
                <ul class="list-disc list-outside pl-5">
                  <li>10⁻² plate: TNTC</li>
                  <li>10⁻³ plate: 245 colonies ✓</li>
                  <li>10⁻⁴ plate: 22 colonies</li>
                </ul>
                <pre><code>TPC = 245 / (10⁻³ × 1) = 245 / 0.001 = 2,45,000 CFU/ml</code></pre>
                <p><strong>Result: 2,45,000 CFU/ml > 1,00,000 → ❌ Exceeds retail limit!</strong></p>
                <p><strong>Conclusion: Is batch ki shelf life = 2 din (Day 2 tak okay tha, Day 3 par fail). Best-before date accordingly set karein.</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Bacterial Growth Curve Example (Shelf Life Study):</h4>
              <div class="bg-gray-50 p-3 rounded mt-2 mb-2">
                <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-2">Day</th><th class="border p-2">TPC (CFU/ml)</th><th class="border p-2">Log₁₀ TPC</th><th class="border p-2">Status</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-2">0</td><td class="border p-2">12,500</td><td class="border p-2">4.10</td><td class="border p-2">✅ Pass</td></tr>
                    <tr><td class="border p-2">1</td><td class="border p-2">18,000</td><td class="border p-2">4.26</td><td class="border p-2">✅ Pass</td></tr>
                    <tr><td class="border p-2">2</td><td class="border p-2">45,000</td><td class="border p-2">4.65</td><td class="border p-2">✅ Pass</td></tr>
                    <tr><td class="border p-2">3</td><td class="border p-2">2,45,000</td><td class="border p-2">5.39</td><td class="border p-2">❌ Fail</td></tr>
                    <tr><td class="border p-2">4</td><td class="border p-2">18,50,000</td><td class="border p-2">6.27</td><td class="border p-2">❌ Rejected</td></tr>
                    <tr><td class="border p-2">5</td><td class="border p-2">4,20,00,000</td><td class="border p-2">7.62</td><td class="border p-2">❌ Sour/curdled</td></tr>
                  </tbody>
                </table>
                <p class="mt-2"><strong>Shelf life = Day 2 (last day TPC < 1 lakh). Best-before = Day 2 with 20% safety margin ≈ print "Use within 2 days".</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">FSSAI Standards for Market Milk:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Product</th><th class="border p-2">TPC Limit (CFU/ml)</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Pasteurized Milk (at dispatch)</td><td class="border p-2">≤ 30,000</td></tr>
                  <tr><td class="border p-2">Pasteurized Milk (at retail)</td><td class="border p-2">≤ 1,00,000</td></tr>
                  <tr><td class="border p-2">UHT Milk (commercially sterile)</td><td class="border p-2">No growth after incubation</td></tr>
                  <tr><td class="border p-2">Sterilized Milk</td><td class="border p-2">No growth after incubation</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Shelf Life Monitoring Protocol:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Day 0 (production day): TPC check</li>
                <li>Day 1, 2, 3, 4, 5: Har din ek sample ka TPC karein</li>
                <li>Jab TPC 1 lakh cross kare — wahi shelf life ki limit hai</li>
                <li>Saath mein sensory evaluation bhi karein</li>
              </ol>
            `
          },
          {
            title: "Coliform Count — Post-Pasteurization Contamination Check",
            purpose: "Coliform bacteria ki presence — ye post-pasteurization contamination ka direct indicator hai aur shelf life ko drastically reduce karta hai.",
            reference: "IS 5401 (Part 1):2012; FSSAI Standards",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Coliform bacteria (E. coli, Klebsiella, Enterobacter) pasteurization se destroy ho jaate hain. Agar pasteurized doodh mein coliforms milein, to iska matlab hai ki doodh pasteurization ke BAAD contaminate hua hai — equipment, packaging, ya handling se. Coliforms ki presence shelf life ko bahut kam kar deti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Coliform Count Formulas aur Factors:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>Method 1 Formula (VRBA Pour Plate):</strong></p>
                <pre><code>Coliform Count (CFU/ml) = Dark red colonies with halo / (Dilution × Volume)

Example: 8 typical colonies on undiluted (10⁰) 1 ml plate
Count = 8 / (1 × 1) = 8 CFU/ml</code></pre>

                <p class="mt-2"><strong>Method 2 Formula (MPN Method):</strong></p>
                <pre><code>MPN = Most Probable Number (statistical estimate)
3-tube method: 3 sets of 3 tubes each
- Set 1: 10 ml sample per tube
- Set 2: 1 ml sample per tube  
- Set 3: 0.1 ml sample per tube

Result read as: Positive tubes in each set → MPN table → Coliform/ml</code></pre>
                
                <p class="mt-2"><strong>VRBA Agar ke Components — Kyu ye selective hai?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>Crystal Violet:</strong> Gram-positive bacteria ko inhibit karta hai → sirf Gram-negative grow karein</li>
                  <li><strong>Bile Salts:</strong> Non-enteric bacteria ko inhibit karte hain → sirf intestinal-type bacteria grow karein</li>
                  <li><strong>Neutral Red:</strong> pH indicator — acid production se red colonies banti hain</li>
                  <li><strong>Lactose:</strong> Coliforms lactose ferment karte hain → acid + gas produce karte hain → red colonies with precipitate halo</li>
                </ul>
                
                <p class="mt-2"><strong>Overlay (double layer) kyu?</strong></p>
                <p>Second VRBA layer aerobic growth restrict karti hai. Coliforms facultative anaerobes hain — ye anaerobic conditions mein bhi grow karte hain. Surface spreading organisms (non-coliforms like Pseudomonas) ka growth rok diya jaata hai.</p>
                
                <p class="mt-2"><strong>FSSAI Sampling Plan ka Explanation (n=5, c=1, m=&lt;1, M=10):</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>n=5:</strong> 5 samples test karein ek batch se</li>
                  <li><strong>c=1:</strong> Maximum 1 sample accept kar sakte hain jo m aur M ke beech ho</li>
                  <li><strong>m=&lt;1:</strong> Acceptable level = &lt;1 CFU/ml (essentially zero)</li>
                  <li><strong>M=10:</strong> Maximum allowable = 10 CFU/ml. Koi bhi sample isse upar → BATCH REJECT</li>
                </ul>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Method 1: Violet Red Bile Agar (VRBA) Pour Plate</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>1 ml doodh (ya appropriate dilution) ko sterile petri dish mein daalein.</li>
                <li>~15 ml VRBA agar (45°C) pour karein, mix karein.</li>
                <li>Solidify hone ke baad, ek aur thin layer VRBA pour karein (overlay — anaerobic conditions ke liye).</li>
                <li>37°C par 24 ± 2 hours incubate karein.</li>
                <li>Dark red colonies with bile precipitate halo count karein — ye coliforms hain.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Method 2: MPN Method (LST Broth)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>3 tubes each of 10 ml, 1 ml, aur 0.1 ml sample volumes se inoculate karein.</li>
                <li>37°C par 24-48 hours incubate karein.</li>
                <li>Gas production wali tubes ko positive count karein.</li>
                <li>MPN table se coliform count determine karein.</li>
                <li>Positive tubes ko Brilliant Green Bile Broth mein confirm karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (VRBA Method — Good Quality):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized toned milk, 5 packs from Batch #101</p>
                <p><strong>1 ml undiluted sample per plate, VRBA, 37°C/24h:</strong></p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm">
                  <tr><td class="border p-1">Pack 1</td><td class="border p-1">0 colonies</td></tr>
                  <tr><td class="border p-1">Pack 2</td><td class="border p-1">0 colonies</td></tr>
                  <tr><td class="border p-1">Pack 3</td><td class="border p-1">2 colonies</td></tr>
                  <tr><td class="border p-1">Pack 4</td><td class="border p-1">0 colonies</td></tr>
                  <tr><td class="border p-1">Pack 5</td><td class="border p-1">0 colonies</td></tr>
                </table>
                <p class="mt-1"><strong>Assessment:</strong> 4 samples = &lt;1 (m satisfied). 1 sample = 2 CFU/ml (between m and M). c=1 allowed.</p>
                <p><strong>Result: ✅ BATCH ACCEPTED. Coliform level negligible. Good shelf life expected.</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (MPN Method — Poor Quality):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized milk from small dairy, Batch #55</p>
                <p><strong>LST Broth MPN (3-tube method):</strong></p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Sample Vol</th><th class="border p-1">Tube 1</th><th class="border p-1">Tube 2</th><th class="border p-1">Tube 3</th><th class="border p-1">Positive</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">10 ml</td><td class="border p-1">Gas +</td><td class="border p-1">Gas +</td><td class="border p-1">Gas +</td><td class="border p-1">3</td></tr>
                    <tr><td class="border p-1">1 ml</td><td class="border p-1">Gas +</td><td class="border p-1">Gas +</td><td class="border p-1">Gas -</td><td class="border p-1">2</td></tr>
                    <tr><td class="border p-1">0.1 ml</td><td class="border p-1">Gas -</td><td class="border p-1">Gas +</td><td class="border p-1">Gas -</td><td class="border p-1">1</td></tr>
                  </tbody>
                </table>
                <p class="mt-1"><strong>MPN combination: 3-2-1</strong></p>
                <p>MPN table se: <strong>3-2-1 = 150 MPN/ml</strong></p>
                <p><strong>Result: 150 CFU/ml >> 10 (M value) → ❌ BATCH REJECT!</strong></p>
                <p>Root cause: Filler machine ki O-ring damaged thi → post-pasteurization contamination. Shelf life 50% se zyada reduce ho jayegi. Machine maintenance required!</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">FSSAI Limits:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Product</th><th class="border p-2">Coliform Limit</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Pasteurized Milk</td><td class="border p-2">≤ 10 CFU/ml (n=5, c=1, m=&lt;1, M=10)</td></tr>
                  <tr><td class="border p-2">UHT Milk</td><td class="border p-2">Absent in 1 ml</td></tr>
                  <tr><td class="border p-2">Sterilized Milk</td><td class="border p-2">Absent in 1 ml</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Impact on Shelf Life:</h4>
              <p>Agar coliform count >10 CFU/ml hai to shelf life 50% tak reduce ho sakti hai. High coliform = post-pasteurization contamination = equipment cleaning issues.</p>
            `
          },
          {
            title: "Sterility Test (for UHT / Sterilized Milk)",
            purpose: "UHT aur sterilized milk ki commercial sterility verify karna — ye long shelf life ka basis hai.",
            reference: "IS 7982:1976; FSSAI Regulations; Codex Alimentarius CAC/RCP 48-2001",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Commercially sterile doodh mein koi bhi viable microorganism nahi hona chahiye jo normal storage conditions mein grow kar sake. Ye verify karne ke liye, sealed packs ko elevated temperatures par incubate kiya jaata hai. Agar koi microbial growth nahi hota (no pH change, no gas, no off-flavour), to product commercially sterile hai.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Incubation Temperatures aur Times — Scientific Basis:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>Set A — 30-35°C / 14 din KYU?</strong></p>
                <p>Mesophilic bacteria (jaise Bacillus subtilis, B. cereus, Enterobacteriaceae) ka optimum = 30-37°C. 14 din = sufficient time ki agar ek bhi viable organism hai (including dormant spores), woh germinate hokar detectable level tak grow kar jaye.</p>
                <pre><code>Agar 1 spore germinate ho 30°C par, generation time ~30-60 min
14 din = 336 hours = 336-672 generations
1 bacterium → 2³³⁶ = astronomically high number
Reality: Nutrients deplete ho jaate hain, so final count ~10⁸-10⁹ CFU/ml — but clearly detectable as pH drop, turbidity, gas, off-flavour</code></pre>
                
                <p class="mt-2"><strong>Set B — 55°C / 7 din KYU?</strong></p>
                <p>Thermophilic spore-formers (jaise B. stearothermophilus, B. coagulans) 55°C par optimally grow karte hain. Ye organisms UHT process ke closest survivors hain (D₁₂₁ values highest). 7 din sufficient hai kyunki thermophiles fast growers hain at 55°C (generation time ~15-30 min).</p>
                
                <p class="mt-2"><strong>Set C — 4°C (Control) KYU?</strong></p>
                <p>Reference — doodh mein koi natural changes (browning, fat separation) hoti hain woh control se compare karke differentiate ki ja sakti hain. 4°C par koi bacteria practically grow nahi karta.</p>
                
                <p class="mt-2"><strong>pH Change > 0.5 = FAIL kyu?</strong></p>
                <p>Bacterial growth acids produce karta hai (lactic acid, acetic acid) → pH girti hai. Ya gas-producing organisms CO₂ banate hain → carbonic acid → pH drop. 0.5 pH unit change = significant acid production = substantial microbial growth.</p>
                <pre><code>pH drop calculation:
Fresh UHT milk pH = 6.65
After incubation pH = 6.10
Drop = 6.65 - 6.10 = 0.55 → > 0.5 → FAIL!</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">🔑 D-Value aur Z-Value — UHT Sterility ka Basis:</h4>
              <div class="bg-yellow-50 p-3 rounded mt-2 mb-2">
                <p><strong>D-Value (Decimal Reduction Time):</strong> Woh time jo required hai ki ek specific temperature par bacterial population 90% (1 log) reduce ho jaye.</p>
                <pre><code>D₁₂₁ of B. stearothermophilus = ~4-5 min (at 121°C)
D₁₃₅ of same organism = ~0.3-0.5 sec (at 135°C)

UHT target: 12D reduction (12 × D value)
At 135°C: 12 × 0.4 sec = 4.8 sec
Isliye UHT = 135°C/4-5 sec → 12-log reduction → commercially sterile</code></pre>
                
                <p class="mt-2"><strong>Z-Value:</strong> Temperature increase required for D-value ko 10 times reduce karne ke liye.</p>
                <pre><code>Z-value for most spores = ~10°C
So: D₁₂₁ = 4 min → D₁₃₁ = 0.4 min → D₁₄₁ = 0.04 min</code></pre>
                
                <p class="mt-2"><strong>Commercial Sterility ≠ Absolute Sterility</strong></p>
                <p>UHT mein 100% organisms kill nahi hote — kuch extremely heat-resistant spores survive kar sakte hain. But ye itne kam hote hain ki normal conditions mein grow nahi kar paate. "Commercially sterile" = no organisms that can grow under normal storage.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure (Incubation Method):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Production batch se randomly sealed packs/bottles select karein (typically 5 per batch minimum).</li>
                <li><strong>Set A (Mesophilic):</strong> 30-35°C par 14 din incubate karein.</li>
                <li><strong>Set B (Thermophilic):</strong> 55°C par 7 din incubate karein.</li>
                <li><strong>Set C (Control):</strong> 4°C par store karein.</li>
                <li>Incubation ke baad examine karein:</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Examination Parameters:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Visual:</strong> Pack swelling, leakage, colour change</li>
                <li><strong>pH:</strong> Incubated vs Control ka difference — &gt;0.5 pH change = fail</li>
                <li><strong>Acidity:</strong> Increase &gt;0.02% = suspect</li>
                <li><strong>Sensory:</strong> Off-flavour, off-odour, sour taste</li>
                <li><strong>Microscopic:</strong> Gram staining — bacteria dikhna = fail</li>
                <li><strong>Plating:</strong> PCA, BHI agar par streaking — colony growth = fail</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (PASS — Commercially Sterile):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Amul Taaza UHT, Batch #UHT-2024-0515, 5 packs</p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Parameter</th><th class="border p-1">Control (4°C)</th><th class="border p-1">Set A (35°C/14d)</th><th class="border p-1">Set B (55°C/7d)</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">pH</td><td class="border p-1">6.62</td><td class="border p-1">6.58</td><td class="border p-1">6.60</td></tr>
                    <tr><td class="border p-1">Acidity (%LA)</td><td class="border p-1">0.135</td><td class="border p-1">0.138</td><td class="border p-1">0.136</td></tr>
                    <tr><td class="border p-1">Pack Swelling</td><td class="border p-1">No</td><td class="border p-1">No</td><td class="border p-1">No</td></tr>
                    <tr><td class="border p-1">Off-flavour</td><td class="border p-1">None</td><td class="border p-1">Slight cooked (normal for UHT)</td><td class="border p-1">None</td></tr>
                    <tr><td class="border p-1">Gram Stain</td><td class="border p-1">No bacteria</td><td class="border p-1">No bacteria</td><td class="border p-1">No bacteria</td></tr>
                    <tr><td class="border p-1">PCA Plating</td><td class="border p-1">No growth</td><td class="border p-1">No growth</td><td class="border p-1">No growth</td></tr>
                  </tbody>
                </table>
                <pre><code>pH difference (Set A vs Control) = |6.58 - 6.62| = 0.04 → < 0.5 ✓
Acidity change = |0.138 - 0.135| = 0.003% → < 0.02% ✓</code></pre>
                <p><strong>Result: ✅ ALL PARAMETERS PASS → Commercially Sterile → Shelf life 3-6 months at room temperature.</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (FAIL — Not Sterile):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> UHT milk from new plant, Batch #UHT-Trial-003</p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Parameter</th><th class="border p-1">Control (4°C)</th><th class="border p-1">Set A (35°C/14d)</th><th class="border p-1">Set B (55°C/7d)</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">pH</td><td class="border p-1">6.60</td><td class="border p-1">5.85</td><td class="border p-1">6.55</td></tr>
                    <tr><td class="border p-1">Acidity (%LA)</td><td class="border p-1">0.14</td><td class="border p-1">0.28</td><td class="border p-1">0.15</td></tr>
                    <tr><td class="border p-1">Pack Swelling</td><td class="border p-1">No</td><td class="border p-1">SLIGHT SWELLING</td><td class="border p-1">No</td></tr>
                    <tr><td class="border p-1">Off-flavour</td><td class="border p-1">Normal</td><td class="border p-1">SOUR, BITTER</td><td class="border p-1">Normal</td></tr>
                    <tr><td class="border p-1">Gram Stain</td><td class="border p-1">No bacteria</td><td class="border p-1">Gram + rods seen</td><td class="border p-1">No bacteria</td></tr>
                    <tr><td class="border p-1">PCA Plating</td><td class="border p-1">No growth</td><td class="border p-1">TNTC colonies</td><td class="border p-1">No growth</td></tr>
                  </tbody>
                </table>
                <pre><code>pH difference (Set A vs Control) = |5.85 - 6.60| = 0.75 → > 0.5 ❌ FAIL!
Acidity change = |0.28 - 0.14| = 0.14% → > 0.02% ❌ FAIL!</code></pre>
                <p><strong>Result: ❌ Set A FAILED — Mesophilic bacteria (likely Bacillus sp.) survive kiye UHT process mein. Probable cause: Holding tube mein flow rate zyada thi → actual hold time 2 sec ke bajay 1.5 sec tha → insufficient lethality.</strong></p>
                <p><strong>Action: Batch REJECT. UHT plant ki flow meter recalibrate karein. Holding tube length verify karein.</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Observation</th><th class="border p-2">Result</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">No pH change, no growth, no swelling, no off-flavour</td><td class="border p-2"><strong>PASS — Commercially Sterile</strong></td></tr>
                  <tr><td class="border p-2">pH drop &gt;0.5, or microbial growth, or pack swelling</td><td class="border p-2"><strong>FAIL — Not sterile, batch reject</strong></td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">UHT Milk ke liye Special Note:</h4>
              <p>UHT milk jo sterility test pass karti hai — uski shelf life 3-6 mahine (room temperature, unopened) hoti hai. Open karne ke baad refrigerate karein aur 2-3 din mein consume karein.</p>
            `
          },
          {
            title: "Sensory Evaluation During Shelf Life",
            purpose: "Doodh ki organoleptic quality (taste, smell, appearance, texture) ko shelf life ke dauran monitor karna — consumer acceptance ka direct measure.",
            reference: "IS 6273 (Part I & II):1971; IDF Standard 99C:1997",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sensory evaluation mein trained panelists doodh ko taste, smell, appearance, aur mouthfeel ke basis par score karte hain. Shelf life ke dauran ye evaluation regular intervals par ki jaati hai. Jab score acceptable limit se neeche gire — wahi shelf life ki end hai. Chemical tests kabhi kabhi changes detect nahi kar paate jo human senses detect kar lete hain.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Scoring System aur Statistical Analysis:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>9-Point Hedonic Scale — Kyu 9 points?</strong></p>
                <p>Research se proven hai ki 9-point scale optimum discriminating power deta hai. 5-point scale mein zyada sensitivity nahi hoti, 15-point scale mein panelists confuse hote hain. 9 points = achha balance between sensitivity aur usability.</p>
                
                <p class="mt-2"><strong>Average Score Calculation:</strong></p>
                <pre><code>Average Score = Σ(Individual Scores) / Number of Panelists

Example: 5 panelists ne Day 3 par scores diye:
Panelist 1: 7, Panelist 2: 6, Panelist 3: 7, Panelist 4: 5, Panelist 5: 6
Average = (7+6+7+5+6) / 5 = 31/5 = 6.2</code></pre>
                
                <p class="mt-2"><strong>Overall Acceptability Score:</strong></p>
                <pre><code>Overall Score = (Appearance × W₁ + Odour × W₂ + Taste × W₃ + Texture × W₄) / (W₁+W₂+W₃+W₄)

Typical weights for milk:
Appearance (W₁) = 20%, Odour (W₂) = 20%, Taste (W₃) = 40%, Texture (W₄) = 20%

Example: Appearance=7, Odour=6, Taste=5, Texture=7
Overall = (7×0.20 + 6×0.20 + 5×0.40 + 7×0.20) / 1.0
      = (1.4 + 1.2 + 2.0 + 1.4) / 1.0 = 6.0</code></pre>
                
                <p class="mt-2"><strong>Minimum Panelists = 5 kyu?</strong></p>
                <p>Statistical reliability ke liye minimum 5 trained panelists chahiye. 5 se kam = insufficient data points for meaningful average. Ideal = 8-12 panelists.</p>
                
                <p class="mt-2"><strong>Score < 5 = Unacceptable kyu?</strong></p>
                <p>5 = "Neither like nor dislike" (neutral). Isse neeche = dislike territory. Consumer acceptability ke liye minimum 5 zaroori hai — commercially, score 6+ target karte hain.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Scoring System (9-Point Hedonic Scale):</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Score</th><th class="border p-2">Description</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">9</td><td class="border p-2">Bahut zyada pasand (Like extremely)</td></tr>
                  <tr><td class="border p-2">8</td><td class="border p-2">Bahut pasand (Like very much)</td></tr>
                  <tr><td class="border p-2">7</td><td class="border p-2">Moderately pasand</td></tr>
                  <tr><td class="border p-2">6</td><td class="border p-2">Thoda pasand</td></tr>
                  <tr><td class="border p-2">5</td><td class="border p-2">Na pasand na napasand (Neutral)</td></tr>
                  <tr><td class="border p-2">4</td><td class="border p-2">Thoda napasand</td></tr>
                  <tr><td class="border p-2">3</td><td class="border p-2">Moderately napasand</td></tr>
                  <tr><td class="border p-2">2</td><td class="border p-2">Bahut napasand</td></tr>
                  <tr><td class="border p-2">1</td><td class="border p-2">Bahut zyada napasand</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example — Complete Shelf Life Sensory Data:</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Product:</strong> Pasteurized Toned Milk (3% fat, 8.5% SNF), stored at 4°C</p>
                <p><strong>Panel:</strong> 5 trained panelists. Scores shown as averages.</p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Day</th><th class="border p-1">Appearance</th><th class="border p-1">Odour</th><th class="border p-1">Taste</th><th class="border p-1">Texture</th><th class="border p-1">Overall*</th><th class="border p-1">Status</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">0</td><td class="border p-1">8.6</td><td class="border p-1">8.4</td><td class="border p-1">8.8</td><td class="border p-1">8.6</td><td class="border p-1">8.6</td><td class="border p-1">✅ Excellent</td></tr>
                    <tr><td class="border p-1">1</td><td class="border p-1">8.4</td><td class="border p-1">8.2</td><td class="border p-1">8.4</td><td class="border p-1">8.4</td><td class="border p-1">8.4</td><td class="border p-1">✅ Very Good</td></tr>
                    <tr><td class="border p-1">2</td><td class="border p-1">8.0</td><td class="border p-1">7.6</td><td class="border p-1">7.8</td><td class="border p-1">8.0</td><td class="border p-1">7.8</td><td class="border p-1">✅ Good</td></tr>
                    <tr><td class="border p-1">3</td><td class="border p-1">7.2</td><td class="border p-1">6.4</td><td class="border p-1">6.2</td><td class="border p-1">7.0</td><td class="border p-1">6.5</td><td class="border p-1">✅ Acceptable</td></tr>
                    <tr><td class="border p-1">4</td><td class="border p-1">6.0</td><td class="border p-1">5.2</td><td class="border p-1">4.8</td><td class="border p-1">6.2</td><td class="border p-1">5.4</td><td class="border p-1">⚠️ Marginal</td></tr>
                    <tr><td class="border p-1">5</td><td class="border p-1">4.4</td><td class="border p-1">3.6</td><td class="border p-1">3.2</td><td class="border p-1">4.8</td><td class="border p-1">3.8</td><td class="border p-1">❌ Rejected</td></tr>
                  </tbody>
                </table>
                <p class="text-xs mt-1">*Overall = Appearance×0.20 + Odour×0.20 + Taste×0.40 + Texture×0.20</p>
                <pre><code>Day 4 Overall = (6.0×0.20)+(5.2×0.20)+(4.8×0.40)+(6.2×0.20) = 1.2+1.04+1.92+1.24 = 5.4
Day 5 Overall = (4.4×0.20)+(3.6×0.20)+(3.2×0.40)+(4.8×0.20) = 0.88+0.72+1.28+0.96 = 3.84</code></pre>
                <p><strong>Sensory Shelf Life = Day 3 (last day overall > 5.0 with comfortable margin). Day 4 marginal, Day 5 rejected.</strong></p>
                <p><strong>With 20% safety margin: Best-before = Day 3 × 0.8 ≈ print "2 days" on pack.</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Evaluation Parameters:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Appearance (Dikhawat):</strong> Colour (white/creamy), clarity, cream layer separation, sediment</li>
                <li><strong>Odour (Gandh):</strong> Fresh, sour, rancid, burnt, fruity, malty, bitter, metallic</li>
                <li><strong>Taste (Swad):</strong> Sweet (lactose), sour (acid), bitter (proteolysis), salty, metallic</li>
                <li><strong>Texture/Mouthfeel:</strong> Smooth, watery, slimy, grainy, thick</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Common Defects aur Unki Causes:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Defect</th><th class="border p-2">Cause</th><th class="border p-2">Detection Threshold</th><th class="border p-2">Shelf Life Impact</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Sour taste/smell</td><td class="border p-2">Lactic acid bacteria (>0.18% LA)</td><td class="border p-2">~0.16-0.18% acidity</td><td class="border p-2">Shelf life over</td></tr>
                  <tr><td class="border p-2">Bitter taste</td><td class="border p-2">Psychrotrophic proteases (casein breakdown)</td><td class="border p-2">~20% NPN increase</td><td class="border p-2">End of shelf life</td></tr>
                  <tr><td class="border p-2">Rancid/soapy taste</td><td class="border p-2">Lipase activity (ADV > 1.0)</td><td class="border p-2">ADV ~0.5-1.0 meq/100g fat</td><td class="border p-2">Product rejected</td></tr>
                  <tr><td class="border p-2">Fruity/Fermented smell</td><td class="border p-2">Pseudomonas, yeasts</td><td class="border p-2">Ester compounds > 5 ppm</td><td class="border p-2">Product rejected</td></tr>
                  <tr><td class="border p-2">Malty flavour</td><td class="border p-2">S. lactis var. maltigenes</td><td class="border p-2">3-methylbutanal > 0.5 ppm</td><td class="border p-2">Quality defect</td></tr>
                  <tr><td class="border p-2">Cream plug / separation</td><td class="border p-2">Inadequate homogenization (HI > 1.5)</td><td class="border p-2">Visible to eye</td><td class="border p-2">Visual rejection</td></tr>
                  <tr><td class="border p-2">Gelation (UHT)</td><td class="border p-2">Heat-stable proteases</td><td class="border p-2">NPN increase > 40%</td><td class="border p-2">UHT shelf life end</td></tr>
                </tbody>
              </table>
            `
          },
          {
            title: "pH aur Acidity Monitoring During Shelf Life",
            purpose: "Storage ke dauran pH aur acidity ko regular intervals par measure karna — microbial spoilage ka early indicator.",
            reference: "IS 1479 (Part I) 1961; FSSAI Standards",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Bacteria jab doodh mein grow karte hain, to lactose ko lactic acid mein convert karte hain. Isse pH girta hai aur titratable acidity badhti hai. pH aur acidity changes spoilage ka pehla chemical indicator hain — ye sensory changes se pehle detect ho jaate hain.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Acidity Formula — Complete Derivation:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W

Where:
V = Volume of 0.1N NaOH used (ml)
N = Normality of NaOH (typically 0.1N)
W = Weight of milk sample (g) — typically 10g
9 = Conversion factor</code></pre>

                <p class="mt-2"><strong>Factor 9 ka Derivation:</strong></p>
                <pre><code>Lactic acid: CH₃CHOHCOOH
Molecular Weight = 90.08 g/mol
Monoprotic acid → Equivalent Weight = 90 g/eq

% = (meq of acid × Eq.Wt.) / (W × 1000) × 100
= (V × N × 90) / (W × 1000) × 100
= (V × N × 9000) / (W × 1000)
= (V × N × 9) / W</code></pre>

                <p class="mt-2"><strong>pH aur Acidity ka Relationship:</strong></p>
                <p>pH aur acidity inversely related hain but exactly proportional nahi — kyunki doodh ka buffer capacity hai (casein aur phosphates buffer ka kaam karte hain).</p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm">
                  <thead><tr class="bg-gray-100"><th class="border p-1">pH</th><th class="border p-1">Approx Acidity (%LA)</th><th class="border p-1">Status</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">6.8</td><td class="border p-1">0.12</td><td class="border p-1">Very fresh</td></tr>
                    <tr><td class="border p-1">6.6</td><td class="border p-1">0.14</td><td class="border p-1">Fresh</td></tr>
                    <tr><td class="border p-1">6.4</td><td class="border p-1">0.16-0.18</td><td class="border p-1">Acceptable limit</td></tr>
                    <tr><td class="border p-1">6.0</td><td class="border p-1">0.20-0.22</td><td class="border p-1">Sour — rejected</td></tr>
                    <tr><td class="border p-1">5.5</td><td class="border p-1">0.30+</td><td class="border p-1">Curdled</td></tr>
                    <tr><td class="border p-1">4.6</td><td class="border p-1">0.60+</td><td class="border p-1">Casein precipitated (curd)</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example — Shelf Life Monitoring Data:</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Product:</strong> Pasteurized Full Cream Milk (6% fat), stored at 4±1°C</p>
                <p><strong>Acidity measured with 0.1N NaOH, 10g sample each time:</strong></p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Day</th><th class="border p-1">NaOH (ml)</th><th class="border p-1">Acidity Calc</th><th class="border p-1">% LA</th><th class="border p-1">pH</th><th class="border p-1">Status</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">0</td><td class="border p-1">1.50</td><td class="border p-1">(9×1.50×0.1)/10</td><td class="border p-1">0.135%</td><td class="border p-1">6.68</td><td class="border p-1">✅ Fresh</td></tr>
                    <tr><td class="border p-1">1</td><td class="border p-1">1.55</td><td class="border p-1">(9×1.55×0.1)/10</td><td class="border p-1">0.140%</td><td class="border p-1">6.64</td><td class="border p-1">✅ Fresh</td></tr>
                    <tr><td class="border p-1">2</td><td class="border p-1">1.65</td><td class="border p-1">(9×1.65×0.1)/10</td><td class="border p-1">0.149%</td><td class="border p-1">6.58</td><td class="border p-1">✅ Good</td></tr>
                    <tr><td class="border p-1">3</td><td class="border p-1">1.85</td><td class="border p-1">(9×1.85×0.1)/10</td><td class="border p-1">0.167%</td><td class="border p-1">6.45</td><td class="border p-1">⚠️ Alert</td></tr>
                    <tr><td class="border p-1">4</td><td class="border p-1">2.10</td><td class="border p-1">(9×2.10×0.1)/10</td><td class="border p-1">0.189%</td><td class="border p-1">6.28</td><td class="border p-1">❌ > 0.18%</td></tr>
                    <tr><td class="border p-1">5</td><td class="border p-1">2.60</td><td class="border p-1">(9×2.60×0.1)/10</td><td class="border p-1">0.234%</td><td class="border p-1">5.95</td><td class="border p-1">❌ Sour/COB+</td></tr>
                  </tbody>
                </table>
                
                <p class="mt-2"><strong>Analysis:</strong></p>
                <pre><code>Day 0 to Day 3: Acidity increase = 0.167 - 0.135 = 0.032% (gradual, normal)
Day 3 to Day 4: Acidity increase = 0.189 - 0.167 = 0.022% (accelerating!)
Day 4 to Day 5: Acidity increase = 0.234 - 0.189 = 0.045% (rapid spoilage!)

pH drop Day 0 to Day 3 = 6.68 - 6.45 = 0.23 (< 0.3 threshold)
pH drop Day 0 to Day 4 = 6.68 - 6.28 = 0.40 (> 0.3 → significant!)

Shelf Life by acidity: Day 3 (last day < 0.18%)
Shelf Life by pH: Day 3 (last day pH drop < 0.3 from baseline)
Both parameters agree: Shelf life = 3 din</code></pre>
                <p><strong>Best-before with safety margin (20%): 3 × 0.8 = 2.4 ≈ "Best before 2 days from packaging"</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Monitoring Protocol:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Production day (Day 0) par baseline pH aur acidity record karein.</li>
                <li><strong>Pasteurized milk:</strong> Har 12-24 ghante test karein.</li>
                <li><strong>UHT milk:</strong> Weekly ya fortnightly test karein.</li>
                <li>Saare readings ek log sheet mein record karein.</li>
                <li>Graph plot karein — pH vs Time, Acidity vs Time.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Critical Limits:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Parameter</th><th class="border p-2">Fresh Milk</th><th class="border p-2">Acceptable Limit</th><th class="border p-2">Rejected</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">pH</td><td class="border p-2">6.6-6.8</td><td class="border p-2">≥ 6.4</td><td class="border p-2">&lt; 6.0</td></tr>
                  <tr><td class="border p-2">Acidity (% LA)</td><td class="border p-2">0.12-0.14%</td><td class="border p-2">≤ 0.18%</td><td class="border p-2">&gt; 0.20%</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p><strong>pH drop of 0.3 or more from baseline:</strong> Significant spoilage shuru ho gayi hai.</p>
              <p><strong>Acidity increase of 0.04% or more from baseline:</strong> Bacterial growth confirm — shelf life nearing end.</p>
              <p><strong>Acidity &gt;0.20%:</strong> COB test positive ho jayega — doodh market ke liye unfit.</p>

              <h4 class="font-semibold mt-4 mb-2">⚠️ Why pH Change Faster Than Acidity Change?</h4>
              <div class="bg-gray-50 p-3 rounded mt-2">
                <p>pH <strong>logarithmic scale</strong> par hai — pH mein 0.3 unit change = hydrogen ion concentration mein ~2× increase. Jab ki acidity <strong>linear</strong> hai — direct proportion. Isliye kabhi kabhi pH change detect hota hai but acidity mein significant change nahi dikhta (buffer effect). <strong>Dono parameters saath mein monitor karein</strong> — koi ek akela sufficient nahi hai.</p>
              </div>
            `
          },
          {
            title: "Alcohol Stability Test (for Heat Stability / UHT Suitability)",
            purpose: "Doodh ki heat stability assess karna — ye test predict karta hai ki doodh UHT/sterilization process survive karega ya nahi.",
            reference: "IS 1479 (Part I) 1961; IDF Standard",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Ethanol doodh ke proteins ke hydration shell ko destabilize karta hai — jaise heat karta hai. Zyada concentrated alcohol mein stable rehne wala doodh heat treatment mein bhi stable rahega. Ye test UHT processing se pehle raw milk ki suitability check karne ke liye use hota hai, aur processed milk ki storage stability predict karne ke liye bhi.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Alcohol Concentrations ka Scientific Basis:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>Ethanol kaise destabilize karta hai?</strong></p>
                <p>Casein micelles paani mein stable hain kyunki:</p>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                  <li><strong>κ-Casein</strong> (surface par) negative charge rakhta hai → electrostatic repulsion</li>
                  <li><strong>Hydration shell</strong> (paani ki layer) casein ko surround karti hai → steric stabilization</li>
                </ol>
                <p class="mt-1"><strong>Ethanol</strong> dielectric constant kam karta hai → electrostatic repulsion kam hoti hai. Aur hydration shell ko remove karta hai (dehydration). Dono effects milkar casein ko destabilize karte hain → aggregation → CLOT.</p>
                
                <p class="mt-2"><strong>Effective Ethanol Concentration (Milk + Ethanol mix mein):</strong></p>
                <pre><code>2 ml milk + 2 ml 68% ethanol = 4 ml total
Effective ethanol in mixture = (2 × 68) / 4 = 34%

2 ml milk + 2 ml 75% ethanol → Effective = 37.5%
2 ml milk + 2 ml 80% ethanol → Effective = 40%</code></pre>
                <p>Matlab effectively 34-40% ethanol concentration par protein stability test ho raha hai.</p>
                
                <p class="mt-2"><strong>Kyu 2 ml + 2 ml (equal volumes)?</strong></p>
                <p>Equal volumes (1:1 ratio) isliye taaki calculation simple rahe aur results reproducible hon. Agar ratio change karein to sensitivity change hogi → comparison mushkil.</p>
                
                <p class="mt-2"><strong>Har concentration ka matlab:</strong></p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Test Ethanol %</th><th class="border p-1">Effective % in Mix</th><th class="border p-1">Kya Test Karta Hai</th><th class="border p-1">Equivalent to</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">68%</td><td class="border p-1">34%</td><td class="border p-1">Basic acidity check</td><td class="border p-1">Acidity > 0.20% detect karta hai</td></tr>
                    <tr><td class="border p-1">72%</td><td class="border p-1">36%</td><td class="border p-1">HTST suitability</td><td class="border p-1">72°C/15s pasteurization tolerance</td></tr>
                    <tr><td class="border p-1">75%</td><td class="border p-1">37.5%</td><td class="border p-1">UHT minimum</td><td class="border p-1">Acidity 0.14-0.16% detect</td></tr>
                    <tr><td class="border p-1">78%</td><td class="border p-1">39%</td><td class="border p-1">Good UHT milk</td><td class="border p-1">Well-balanced minerals</td></tr>
                    <tr><td class="border p-1">80%</td><td class="border p-1">40%</td><td class="border p-1">Excellent stability</td><td class="border p-1">Low ionic Ca, fresh milk</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure (Graduated Alcohol Test):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Different concentrations ke ethanol solutions prepare karein: 68%, 72%, 75%, 78%, 80%.</li>
                <li>Alag-alag test tubes mein 2 ml doodh lein.</li>
                <li>Har tube mein 2 ml respective ethanol concentration daalein.</li>
                <li>Mix karein (gently invert karein).</li>
                <li>Clot/flocculation formation observe karein.</li>
                <li>Sabse highest alcohol concentration note karein jismein doodh stable rahe (no clotting).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (UHT-Suitable Milk):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Fresh cow milk from cooperative, Acidity = 0.13% LA, pH = 6.72</p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Ethanol %</th><th class="border p-1">Observation</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">68%</td><td class="border p-1">No clot — smooth ✓</td></tr>
                    <tr><td class="border p-1">72%</td><td class="border p-1">No clot — smooth ✓</td></tr>
                    <tr><td class="border p-1">75%</td><td class="border p-1">No clot — smooth ✓</td></tr>
                    <tr><td class="border p-1">78%</td><td class="border p-1">No clot — smooth ✓</td></tr>
                    <tr><td class="border p-1">80%</td><td class="border p-1">Very fine flocculation (barely visible) ✓/△</td></tr>
                  </tbody>
                </table>
                <p><strong>Result: Stable up to 78% → ✅ GOOD — UHT processing ke liye suitable!</strong></p>
                <p>Is doodh ko 135-140°C UHT treatment diya ja sakta hai. Expected UHT shelf life: 3-4 months.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Unstable Milk):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Evening collection milk, 4 hours old without chilling, Acidity = 0.19% LA, pH = 6.35</p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Ethanol %</th><th class="border p-1">Observation</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">68%</td><td class="border p-1">CLOT formed — large flakes! ✗</td></tr>
                    <tr><td class="border p-1">72%</td><td class="border p-1">Heavy clot ✗</td></tr>
                    <tr><td class="border p-1">75%</td><td class="border p-1">Heavy clot ✗</td></tr>
                  </tbody>
                </table>
                <p><strong>Result: Clots at 68% → ❌ POOR — UHT ke liye UNSUITABLE! Even pasteurization risky hai.</strong></p>
                <p>Developed acidity (0.19%) ne casein ko destabilize kar diya. Is doodh ko sirf paneer/chhena banane ke liye use kar sakte hain.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Alcohol Stability</th><th class="border p-2">Suitability</th><th class="border p-2">Shelf Life Prediction</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Stable at 80%+ ethanol</td><td class="border p-2">Excellent — UHT ke liye ideal</td><td class="border p-2">Maximum shelf life expected</td></tr>
                  <tr><td class="border p-2">Stable at 75-78%</td><td class="border p-2">Good — UHT suitable</td><td class="border p-2">Normal shelf life</td></tr>
                  <tr><td class="border p-2">Stable at 72% only</td><td class="border p-2">Marginal — HTST pasteurization ok</td><td class="border p-2">Reduced shelf life possible</td></tr>
                  <tr><td class="border p-2">Clots at 68%</td><td class="border p-2">Poor — high acidity/unstable</td><td class="border p-2">Very short shelf life</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Factors Affecting Alcohol Stability:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Developed acidity (lactic acid)</strong> — stability kam karti hai (pH drop → casein charge reduce)</li>
                <li><strong>High ionic calcium (Ca²⁺)</strong> — destabilizing effect (casein micelles ke beech calcium bridges banata hai)</li>
                <li><strong>Low casein:whey protein ratio</strong> — kam κ-casein = kam stability</li>
                <li><strong>Mastitic milk</strong> — poor stability (high SCC, altered mineral balance, elevated pH)</li>
                <li><strong>Late lactation milk</strong> — variable stability (mineral imbalance, high protease activity)</li>
              </ul>
            `
          },
          {
            title: "Psychrotrophic Bacterial Count",
            purpose: "Fridge temperature par grow karne wale bacteria ka count — ye pasteurized milk ki shelf life ka sabse important predictor hai.",
            reference: "IDF 101A:1991; Standard Methods for Examination of Dairy Products (APHA)",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Psychrotrophic bacteria wo organisms hain jo 7°C ya usse neeche grow kar sakte hain (optimum temperature 20-30°C hota hai). Ye pasteurized milk ki shelf life ke sabse bade dushman hain kyunki fridge mein bhi ye grow karte rehte hain aur heat-stable enzymes (lipases, proteases) produce karte hain jo doodh ko kharab karte hain.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Incubation Conditions ka Scientific Explanation:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>7°C / 10 din — Standard Method KYU?</strong></p>
                <p>7°C typical household fridge temperature hai. 10 din = psychrotrophic bacteria ke multiple generations ko cover karta hai. Ye method sabse accurate hai kyunki actual refrigeration conditions simulate karti hai.</p>
                <pre><code>Pseudomonas fluorescens generation time at different temperatures:
4°C: ~8-12 hours
7°C: ~5-7 hours  
10°C: ~3-4 hours
21°C: ~1-1.5 hours
25°C: ~45-60 min (optimum)

At 7°C in 10 days (240 hours):
Generations = 240/6 = ~40 generations
1 bacterium → 2⁴⁰ = ~1.1 × 10¹² (theoretical max)
Actual: ~10⁷-10⁸ due to nutrient limitation</code></pre>
                
                <p class="mt-2"><strong>21°C / 25 hours — Rapid Method KYU?</strong></p>
                <p>Accelerated alternative — 21°C par psychrotrophs ka growth rate ~4-6× faster hai compared to 7°C.</p>
                <pre><code>Q₁₀ calculation for acceleration:
Q₁₀ ≈ 2.5 for Pseudomonas
Rate ratio = 2.5^((21-7)/10) = 2.5^1.4 = ~3.6×

So 25 hours at 21°C ≈ 25 × 3.6 = ~90 hours at 7°C ≈ ~4 days at 7°C
Ye "rapid screening" hai — full 10-day result ke liye wait nahi karna padta</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Doodh ke sample ka serial dilution banayein.</li>
                <li>1 ml diluted sample ko PCA plates par pour karein.</li>
                <li>Plates ko 7°C par 10 din incubate karein (standard method).</li>
                <li>Ya — accelerated method: 21°C par 25 hours incubate karein (rapid count).</li>
                <li>Colonies count karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (Excellent Plant Hygiene):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized milk, Plant A (modern CIP system)</p>
                <p><strong>Method:</strong> 7°C / 10 days, PCA pour plate</p>
                <p><strong>Dilution 10⁻¹ plate:</strong> 45 colonies</p>
                <pre><code>Psychrotrophic Count = 45 / (10⁻¹ × 1 ml) = 45 / 0.1 = 450 CFU/ml</code></pre>
                <p><strong>Result: 450 CFU/ml = range 100-1,000 → ✅ GOOD quality!</strong></p>
                <p>Expected shelf life: 3-5 din at 4°C. Plant sanitation achhi hai.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Poor Plant Hygiene):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized milk, Plant B (manual cleaning)</p>
                <p><strong>Method:</strong> 21°C / 25 hours (rapid method)</p>
                <p><strong>Dilution 10⁻³ plate:</strong> 156 colonies</p>
                <pre><code>Psychrotrophic Count = 156 / (10⁻³ × 1 ml) = 156 / 0.001 = 1,56,000 CFU/ml</code></pre>
                <p><strong>Result: 1,56,000 ≈ 1.56 × 10⁵ CFU/ml → range > 10,000 → ❌ POOR!</strong></p>
                <p>Expected shelf life: < 2 din at 4°C. Filler machine ke rubber gaskets mein biofilm formation ho rahi hai — deep CIP required!</p>
                
                <p class="mt-2"><strong>Agar ye bacteria heat-stable lipase produce karte hain, to:</strong></p>
                <pre><code>Pseudomonas lipase activity at 7°C:
1 CFU produces ~10⁻¹² units lipase/hour
1,56,000 CFU/ml × 10⁻¹² × 72 hours = detectable rancidity by Day 3
Isliye shelf life sirf 2 din!</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Psychrotrophic Count</th><th class="border p-2">Quality</th><th class="border p-2">Shelf Life Impact</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">&lt; 100 CFU/ml</td><td class="border p-2">Excellent</td><td class="border p-2">Maximum shelf life (5-7 din at 4°C)</td></tr>
                  <tr><td class="border p-2">100 - 1,000 CFU/ml</td><td class="border p-2">Good</td><td class="border p-2">Normal shelf life (3-5 din)</td></tr>
                  <tr><td class="border p-2">1,000 - 10,000 CFU/ml</td><td class="border p-2">Fair</td><td class="border p-2">Reduced (2-3 din)</td></tr>
                  <tr><td class="border p-2">&gt; 10,000 CFU/ml</td><td class="border p-2">Poor</td><td class="border p-2">Very short (&lt;2 din)</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Key Point:</h4>
              <p>Psychrotrophic count pasteurized milk mein mainly post-pasteurization contamination (PPC) se aata hai — filler, pipes, tanks, packaging material se. Isiliye plant hygiene aur CIP (Clean-In-Place) bahut important hai. High psychrotrophic count ka matlab hai plant sanitation mein problem hai.</p>
            `
          },
          {
            title: "Spore Count (Aerobic Spore-Formers)",
            purpose: "Heat-resistant spore-forming bacteria ka count — ye UHT aur sterilized milk ki shelf life ke liye critical hai.",
            reference: "IDF 132A:1991; IS 1479 (Part III) 1977",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Bacterial spores (especially Bacillus species) pasteurization survive karte hain aur kuch UHT treatment bhi survive kar sakte hain. Spore count raw milk quality ka indicator hai aur predict karta hai ki processed milk mein kitne spore-formers honge. UHT milk mein agar spores survive karein, to storage ke dauran germinate hokar spoilage cause kar sakte hain.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Heat Treatment — 80°C / 10 min KYU?</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>Vegetative cells vs Spores ki heat resistance:</strong></p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Organism Type</th><th class="border p-1">D₈₀ Value</th><th class="border p-1">80°C/10 min ke baad</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">Vegetative bacteria (E. coli, Pseudomonas)</td><td class="border p-1">< 1 second</td><td class="border p-1">Completely destroyed</td></tr>
                    <tr><td class="border p-1">Thermoduric bacteria (Enterococcus)</td><td class="border p-1">~30-60 sec</td><td class="border p-1">Mostly destroyed</td></tr>
                    <tr><td class="border p-1">Bacillus spores</td><td class="border p-1">>30 min (at 80°C)</td><td class="border p-1">SURVIVE! ✓</td></tr>
                    <tr><td class="border p-1">Clostridium spores</td><td class="border p-1">>60 min (at 80°C)</td><td class="border p-1">SURVIVE! ✓</td></tr>
                  </tbody>
                </table>
                <p class="mt-1"><strong>80°C/10 min = "pasteurization++"</strong> — ye saare vegetative cells ko kill karta hai but spores ko intact rakhta hai. Jo bhi colonies ugte hain = SPORES se originated.</p>
                
                <p class="mt-2"><strong>Ice bath mein turant cool kyu?</strong></p>
                <p>80°C par 10 min ke baad agar dheere cool karein → kuch spores heat-activated ho jayenge (heat shock = germination trigger) → ye vegetative cells mein convert ho jayenge → phir 80°C+ se kill nahi honge (already cool ho chuka). Rapid cooling germination rokti hai → accurate spore count milta hai.</p>
                
                <p class="mt-2"><strong>D-values of key spore-formers at different temperatures:</strong></p>
                <pre><code>B. cereus spores:     D₁₀₀ = ~5 min,  D₁₂₁ = ~0.03 min
B. subtilis spores:   D₁₀₀ = ~12 min, D₁₂₁ = ~0.5 min  
B. stearothermophilus: D₁₀₀ = ~200 min, D₁₂₁ = ~4-5 min
Clostridium botulinum: D₁₂₁ = ~0.2 min (reference organism for canning)

UHT (135°C/4 sec) lethality:
F₀ = t × 10^((T-121)/z) = 4 × 10^((135-121)/10) = 4 × 10^1.4 = 4 × 25.1 = ~100 sec F₀
This gives 12D for B. stearothermophilus (12 × 5 min × 60 = 3600 sec equivalent)
Actually: F₀ needed = 5-6 min, achieved F₀ ≈ 100 sec = sufficient for 12D of most organisms</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>10 ml doodh ko ek sterile test tube mein lein.</li>
                <li><strong>Heat treatment:</strong> 80°C par 10 minute heat karein (water bath mein) — ye vegetative cells ko kill karta hai, sirf spores survive karte hain.</li>
                <li>Turant ice bath mein cool karein.</li>
                <li>Heat-treated sample ka serial dilution banayein.</li>
                <li>PCA plates par pour plate method se plate karein.</li>
                <li><strong>Aerobic spores:</strong> 30-37°C par 48-72 hours incubate karein (aerobic conditions).</li>
                <li><strong>Thermophilic spores:</strong> 55°C par 48 hours incubate karein.</li>
                <li>Colonies count karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (Good Raw Milk Quality):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Raw milk from cooperative (well-maintained farm, good milking hygiene)</p>
                <p><strong>After 80°C/10 min heat treatment → dilution 10⁻¹ plated:</strong></p>
                <p><strong>Aerobic spore count (37°C/48h):</strong> 6 colonies on 10⁻¹ plate</p>
                <pre><code>Spore Count = 6 / (10⁻¹ × 1 ml) = 6 / 0.1 = 60 spores/ml</code></pre>
                <p><strong>Result: 60 spores/ml < 100 → ✅ EXCELLENT raw milk quality!</strong></p>
                <p>Is doodh se banaya UHT milk achhi shelf life dega (3-6 months). Minimal risk of sweet curdling ya gelation.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Poor Raw Milk — Silage-fed cows):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Raw milk from farm with poor silage quality (butyric acid bacteria contamination in feed)</p>
                <p><strong>After 80°C/10 min heat treatment:</strong></p>
                <p><strong>Aerobic spore count (37°C/72h):</strong> 180 colonies on 10⁻¹ plate</p>
                <pre><code>Spore Count = 180 / (10⁻¹ × 1) = 1,800 spores/ml</code></pre>
                <p><strong>Thermophilic spore count (55°C/48h):</strong> 25 colonies on undiluted plate</p>
                <pre><code>Thermophilic Count = 25 / (10⁰ × 1) = 25 spores/ml</code></pre>
                <p><strong>Result: 1,800 aerobic spores/ml > 1,000 → ❌ POOR!</strong></p>
                <p>UHT milk se is doodh se banayi jayegi, usmein:</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li>B. cereus: Sweet curdling 2-3 months mein possible</li>
                  <li>B. subtilis: Gelation risk at 4-5 months</li>
                  <li>Clostridium: Late blowing (gas) risk</li>
                </ul>
                <p><strong>Action: Is raw milk ko UHT ke liye REJECT karein. Sirf pasteurized milk ke liye use karein (short shelf life product).</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Spore Count</th><th class="border p-2">Raw Milk Quality</th><th class="border p-2">UHT/Sterilized Milk Impact</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">&lt; 100 spores/ml</td><td class="border p-2">Excellent</td><td class="border p-2">Good shelf life expected</td></tr>
                  <tr><td class="border p-2">100 - 1,000 spores/ml</td><td class="border p-2">Acceptable</td><td class="border p-2">Normal processing sufficient</td></tr>
                  <tr><td class="border p-2">&gt; 1,000 spores/ml</td><td class="border p-2">Poor</td><td class="border p-2">UHT ke liye unsuitable — gelation, sweet curdling risk</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Important Spore-Formers:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Bacillus cereus:</strong> Pasteurization survive karta hai, sweet curdling, bitty cream</li>
                <li><strong>Bacillus subtilis:</strong> UHT mein sweet curdling</li>
                <li><strong>Bacillus stearothermophilus:</strong> Thermophilic, sterilized milk mein flat sour</li>
                <li><strong>Clostridium spp.:</strong> Anaerobic spore-formers, gas production, late blowing (cheese mein bhi important)</li>
              </ul>
            `
          },
          {
            title: "Proteolysis Detection (Proteolytic Activity During Storage)",
            purpose: "Storage ke dauran protein breakdown detect karna — ye UHT milk mein gelation aur bitter taste ka karan hai.",
            reference: "IDF Standard; Journal of Dairy Science methodologies",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Psychrotrophic bacteria (jaise Pseudomonas) heat-stable proteases produce karte hain jo pasteurization/UHT survive karte hain. Ye enzymes storage ke dauran casein ko todte hain (proteolysis) — isse bitter peptides bante hain aur eventually doodh gel bhi ho sakta hai (UHT mein). Proteolysis measure karke shelf life predict ki ja sakti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 Key Formulas aur Factors:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <p><strong>TCA (Trichloroacetic Acid) — 24% KYU?</strong></p>
                <p>24% TCA (final concentration 12% jab equal volumes mix hon) ek critical concentration hai:</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li>Intact casein aur whey proteins → PRECIPITATE (TCA-insoluble)</li>
                  <li>Small peptides (< 10 kDa) → SOLUBLE (TCA-soluble)</li>
                  <li>Free amino acids → SOLUBLE</li>
                  <li>Urea, NPN compounds → SOLUBLE</li>
                </ul>
                <p class="mt-1">Storage ke dauran jab proteases casein ko todte hain → bade proteins → chote peptides → TCA-soluble fraction BADHTA hai!</p>
                
                <p class="mt-2"><strong>NPN Increase Formula:</strong></p>
                <pre><code>% NPN Increase = [(NPN_day_x - NPN_day_0) / NPN_day_0] × 100

NPN = Non-Protein Nitrogen (TCA-soluble nitrogen)
Measured by Kjeldahl method on TCA filtrate</code></pre>

                <p class="mt-2"><strong>TNBS Method — Absorbance at 340 nm KYU?</strong></p>
                <p>TNBS (trinitrobenzenesulfonic acid) free amino groups (-NH₂) ke saath react karta hai → yellow chromophore banata hai jo 340 nm par absorb karta hai. Zyada proteolysis = zyada free amino groups = zyada absorbance at 340 nm.</p>
                <pre><code>Beer-Lambert Law: A = ε × c × l
A = Absorbance at 340 nm
ε = molar absorptivity of TNBS-amino complex
c = concentration of free amino groups (proportional to proteolysis)
l = path length (1 cm)</code></pre>
                
                <p class="mt-2"><strong>Leucine Standard Curve KYU?</strong></p>
                <p>Leucine ek amino acid hai jiska -NH₂ group TNBS ke saath well-characterized reaction deta hai. Standard curve se unknown sample mein free amino groups ko "leucine equivalents" mein quantify kiya jaata hai.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Method 1: TNBS Method</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Doodh ke samples ko different time intervals par collect karein (Day 0, 7, 14, 30, 60, 90 — UHT ke liye).</li>
                <li>1 ml doodh + 1 ml 24% TCA solution — mix karein, 10 min stand karein, filter karein.</li>
                <li>Filtrate (TCA-soluble nitrogen) collect karein.</li>
                <li>0.5 ml filtrate + 0.5 ml TNBS reagent (0.1% in pH 8.2 buffer).</li>
                <li>50°C par 60 min incubate karein.</li>
                <li>0.5 ml 0.1N HCl se reaction stop karein.</li>
                <li>Absorbance at 340 nm read karein.</li>
                <li>Standard curve (leucine) se free amino groups quantify karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Method 2: NPN Method (Simpler)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>5 ml doodh + 5 ml 24% TCA — mix, stand 15 min, filter.</li>
                <li>Filtrate ka nitrogen content Kjeldahl method se determine karein.</li>
                <li>Ye NPN hai (normally ~5% of total N in fresh milk).</li>
                <li>Shelf life ke dauran NPN increase = proteolysis ho rahi hai.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example — UHT Milk Shelf Life Study:</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Product:</strong> UHT Toned Milk, stored at 25°C</p>
                <p><strong>NPN measured by Kjeldahl on TCA filtrate:</strong></p>
                <table class="table-auto border-collapse border border-gray-300 mt-1 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Day</th><th class="border p-1">NPN (mg N/100 ml)</th><th class="border p-1">% NPN Increase</th><th class="border p-1">Sensory</th><th class="border p-1">Status</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">0</td><td class="border p-1">28.5</td><td class="border p-1">0% (baseline)</td><td class="border p-1">Normal</td><td class="border p-1">✅</td></tr>
                    <tr><td class="border p-1">30</td><td class="border p-1">30.2</td><td class="border p-1">+6.0%</td><td class="border p-1">Normal</td><td class="border p-1">✅</td></tr>
                    <tr><td class="border p-1">60</td><td class="border p-1">33.8</td><td class="border p-1">+18.6%</td><td class="border p-1">Slight bitter hint</td><td class="border p-1">⚠️</td></tr>
                    <tr><td class="border p-1">90</td><td class="border p-1">36.1</td><td class="border p-1">+26.7%</td><td class="border p-1">Noticeable bitter</td><td class="border p-1">❌ Bitter</td></tr>
                    <tr><td class="border p-1">120</td><td class="border p-1">42.5</td><td class="border p-1">+49.1%</td><td class="border p-1">Very bitter + GELATION!</td><td class="border p-1">❌ Gel</td></tr>
                  </tbody>
                </table>
                <pre><code>Day 90 calculation: 
% NPN Increase = [(36.1 - 28.5) / 28.5] × 100 = [7.6 / 28.5] × 100 = 26.7%
> 20% threshold → significant proteolysis confirmed!

Day 120: 49.1% increase > 40% → GELATION occurred!
κ-casein degradation → casein micelle destabilization → gel network formation</code></pre>
                <p><strong>Conclusion: Shelf life = 60-75 din (last acceptable before bitter taste). Raw milk mein psychrotrophic count zyada raha hoga → heat-stable proteases survive kiye UHT mein.</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p><strong>NPN increase &gt;20% from baseline:</strong> Significant proteolysis — bitter taste likely develop hoga.</p>
              <p><strong>NPN increase &gt;40%:</strong> Gelation risk high — UHT milk ki shelf life ending.</p>
              <p><strong>For pasteurized milk:</strong> Bitter taste se pehle hi acidity develop ho jaati hai, isliye proteolysis kam relevant hai.</p>
            `
          },
          {
            title: "Lipolysis Detection (Free Fatty Acid Estimation)",
            purpose: "Storage ke dauran fat breakdown detect karna — rancid/soapy off-flavour ka indicator.",
            reference: "IDF 6:2004; BDL Method",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Lipase enzymes (milk ka natural lipase ya bacterial lipases) milk fat ko hydrolyze karte hain, free fatty acids (FFA) release karte hain — especially short-chain fatty acids (butyric, caproic, caprylic) jo rancid/soapy taste dete hain. FFA level measure karke lipolysis ki extent determine hoti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">📐 ADV Formula — Detailed Explanation:</h4>
              <div class="bg-blue-50 p-3 rounded mt-2 mb-2">
                <pre><code>Acid Degree Value (ADV) = (ml KOH × N × 100) / (ml fat in aliquot)

Where:
- ml KOH = volume of alcoholic KOH used in titration
- N = Normality of KOH (typically 0.02N)
- 100 = conversion factor for "per 100 g fat"
- ml fat in aliquot = amount of fat present in the 5 ml petroleum ether aliquot</code></pre>

                <p class="mt-2"><strong>Extraction Mixture Ratio — 40:10:1 KYU?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li><strong>Isopropanol (40 parts):</strong> Proteins denature karta hai, fat globule membrane todta hai → fat free hota hai</li>
                  <li><strong>Petroleum ether (10 parts):</strong> Fat ko dissolve karta hai — non-polar solvent</li>
                  <li><strong>4N H₂SO₄ (1 part):</strong> Phase separation improve karta hai, proteins ko precipitate karta hai</li>
                </ul>
                <p>Is ratio mein petroleum ether layer cleanly separate hoti hai aur isme sirf fat + FFA hota hai.</p>
                
                <p class="mt-2"><strong>0.02N KOH kyu (bahut dilute)?</strong></p>
                <p>FFA ki quantity bahut kam hoti hai (micrograms to milligrams). 0.1N KOH use karein to ek drop bahut zyada change karega → endpoint overshoot. 0.02N = 5× zyada sensitive titration → accurate results.</p>
                
                <p class="mt-2"><strong>Fat in aliquot kaise calculate karein?</strong></p>
                <pre><code>Total extraction volume = 10 ml (petroleum ether added)
Aliquot taken = 5 ml (half of upper layer)
Original milk = 10 ml, Fat% = 3.0% (known from Gerber test)
Fat in 10 ml milk = 10 × 0.03 × 1.032 = 0.310 g (approx)
Fat in 5 ml aliquot = 0.310 × (5/10) = 0.155 g

Note: This is approximate — actual fat distribution between 
layers depends on partition coefficient</code></pre>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Method 1: BDL / Acid Degree Value (ADV)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>10 ml doodh ek conical flask mein lein.</li>
                <li>10 ml extraction mixture (isopropanol:petroleum ether:4N H₂SO₄ — 40:10:1) daalein.</li>
                <li>Vigorously shake karein (1 minute).</li>
                <li>Stand hone dein — upper petroleum ether layer separate hogi.</li>
                <li>5 ml upper layer ko carefully pipette karein.</li>
                <li>2-3 drops phenolphthalein indicator daalein.</li>
                <li>0.02N alcoholic KOH se titrate karein — pink endpoint tak.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 1 (Fresh Milk — No Rancidity):</h4>
              <div class="bg-green-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Pasteurized toned milk, Day 0, Fat = 3.0%</p>
                <p><strong>Titration:</strong> 0.02N KOH used = 0.35 ml</p>
                <p><strong>Fat in aliquot (calculated):</strong> 0.155 g = 0.155 ml (fat density ~1 for approximation)</p>
                <pre><code>ADV = (0.35 × 0.02 × 100) / 0.155
  = 0.70 / 0.155
  = 0.45 meq/100g fat</code></pre>
                <p><strong>Result: ADV = 0.45 < 0.5 → ✅ No rancidity detected. Fresh milk!</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Worked Example 2 (Stored Milk — Rancid):</h4>
              <div class="bg-red-50 p-3 rounded mt-2 mb-2">
                <p><strong>Sample:</strong> Same milk, Day 5 at 4°C (high psychrotrophic count batch)</p>
                <p><strong>Titration:</strong> 0.02N KOH used = 1.25 ml</p>
                <pre><code>ADV = (1.25 × 0.02 × 100) / 0.155
  = 2.50 / 0.155
  = 1.61 meq/100g fat</code></pre>
                <p><strong>Result: ADV = 1.61 > 1.5 → ❌ Strong rancidity! Shelf life khatam!</strong></p>
                <p>Panelists ne bhi "soapy, rancid, unpleasant" taste report kiya. Bacterial lipases (from Pseudomonas contamination) ne butyric acid aur caproic acid release kiya.</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Interpretation for Shelf Life:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">ADV (meq/100g fat)</th><th class="border p-2">Rancidity Level</th><th class="border p-2">Consumer Acceptance</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">&lt; 0.5</td><td class="border p-2">No rancidity</td><td class="border p-2">Acceptable</td></tr>
                  <tr><td class="border p-2">0.5 - 1.0</td><td class="border p-2">Slight — trained panel detect</td><td class="border p-2">Marginal</td></tr>
                  <tr><td class="border p-2">1.0 - 1.5</td><td class="border p-2">Definite rancidity</td><td class="border p-2">Unacceptable — shelf life over</td></tr>
                  <tr><td class="border p-2">&gt; 1.5</td><td class="border p-2">Strong rancidity</td><td class="border p-2">Rejected</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">🔑 Kaunse Fatty Acids Rancidity Cause Karte Hain?</h4>
              <div class="bg-gray-50 p-3 rounded mt-2">
                <table class="table-auto border-collapse border border-gray-300 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-1">Fatty Acid</th><th class="border p-1">Carbon Chain</th><th class="border p-1">Flavour Threshold</th><th class="border p-1">Taste/Smell</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-1">Butyric acid</td><td class="border p-1">C4:0</td><td class="border p-1">Very low (~5 ppm)</td><td class="border p-1">Rancid, vomit-like</td></tr>
                    <tr><td class="border p-1">Caproic acid</td><td class="border p-1">C6:0</td><td class="border p-1">~15 ppm</td><td class="border p-1">Goaty, sweaty</td></tr>
                    <tr><td class="border p-1">Caprylic acid</td><td class="border p-1">C8:0</td><td class="border p-1">~20 ppm</td><td class="border p-1">Soapy, waxy</td></tr>
                    <tr><td class="border p-1">Capric acid</td><td class="border p-1">C10:0</td><td class="border p-1">~30 ppm</td><td class="border p-1">Soapy</td></tr>
                  </tbody>
                </table>
                <p class="mt-1">Milk fat mein short-chain fatty acids (C4-C10) ki proportion ~15-20% hai — ye dairy fat ko rancidity ke liye particularly susceptible banata hai compared to vegetable oils.</p>
              </div>
            `
          },
          {
            title: "Sediment / Sedimentation Test (for UHT Milk)",
            purpose: "UHT milk mein sediment formation check karna — ye shelf life ke dauran protein aggregation aur mineral precipitation ka indicator hai.",
            reference: "IDF Standard; Industry practice",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>UHT milk mein storage ke dauran proteins aggregate ho sakte hain aur minerals (calcium phosphate) precipitate ho sakte hain — ye pack ke bottom mein sediment ke roop mein jam jaata hai. Excessive sediment consumer complaint ka karan banta hai aur ye processing parameters (pre-heat treatment, homogenization) ki adequacy indicate karta hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>UHT milk ka pack carefully kholein bina hilaye.</li>
                <li>Doodh ko carefully decant karein, sediment pack mein rehne dein.</li>
                <li>Sediment ko distilled water se dhoyein aur ek pre-weighed filter paper par collect karein.</li>
                <li>102°C par dry karein constant weight tak.</li>
                <li>Sediment ka weight record karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Alternative — Visual Assessment:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Pack kholein, doodh ko ek beaker mein daalein.</li>
                <li>Pack ke bottom mein sediment observe karein.</li>
                <li>Score karein: 0 (no sediment), 1 (slight), 2 (moderate), 3 (heavy).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Acceptable Limits:</h4>
              <p><strong>No sediment ya trace amount:</strong> Acceptable — normal shelf life</p>
              <p><strong>Visible sediment &gt;0.5% of total weight:</strong> Unacceptable — processing parameters review karein</p>

              <h4 class="font-semibold mt-4 mb-2">Prevention Tips:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Proper pre-heating (85°C/30 sec before UHT) — stabilizes whey proteins</li>
                <li>Good homogenization (200 bar 1st stage + 50 bar 2nd stage)</li>
                <li>Raw milk quality — low SCC, balanced minerals</li>
                <li>Citrate/phosphate addition (stabilizers) — approved by FSSAI</li>
              </ul>
            `
          },
          {
            title: "Cream Rising / Fat Separation Test (Homogenization Efficiency)",
            purpose: "Homogenization ki effectiveness check karna — poor homogenization se cream layer separate hoti hai jo shelf life mein visual defect hai.",
            reference: "IS 1479 (Part I) 1961; USPH method; NIZO method",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Homogenization mein fat globules ko chote size (1-2 micron) mein tod diya jaata hai taaki wo upar na tairein. Agar homogenization incomplete hai, to storage ke dauran fat globules upar uthte hain aur cream layer ban jaati hai — ye market milk mein unacceptable hai. Homogenization Efficiency (HE) ya Homogenization Index (HI) measure karke predict kiya ja sakta hai ki cream separation shelf life ke dauran hogi ya nahi.</p>

              <h4 class="font-semibold mt-4 mb-2">Method 1: USPH (United States Public Health) Method</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>100 ml homogenized doodh ek graduated cylinder mein daalein.</li>
                <li>48 ghante ke liye undisturbed refrigerator (4°C) mein rakhein.</li>
                <li>Top 10 ml carefully pipette karein (upper layer).</li>
                <li>Remaining 90 ml ko achchi tarah mix karein (lower layer).</li>
                <li>Dono fractions ka fat content Gerber method se determine karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>Homogenization Index (HI) = (Fat% in top layer / Fat% in bottom layer)</code></pre>
              <pre><code>Homogenization Efficiency (HE) = [1 - (Fat_top - Fat_bottom) / Fat_original] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Method 2: NIZO Method (Rapid)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>25 ml doodh centrifuge karein at 1000 rpm for 30 minutes.</li>
                <li>Top aur bottom fractions ka fat test karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">HI Value</th><th class="border p-2">Homogenization</th><th class="border p-2">Shelf Life Impact</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">&lt; 1.10</td><td class="border p-2">Excellent</td><td class="border p-2">No cream separation throughout shelf life</td></tr>
                  <tr><td class="border p-2">1.10 - 1.20</td><td class="border p-2">Good</td><td class="border p-2">Minimal separation</td></tr>
                  <tr><td class="border p-2">1.20 - 1.50</td><td class="border p-2">Fair</td><td class="border p-2">Visible cream layer may form</td></tr>
                  <tr><td class="border p-2">&gt; 1.50</td><td class="border p-2">Poor</td><td class="border p-2">Cream plug/line formation — consumer complaint</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">FSSAI Requirement:</h4>
              <p>Homogenized milk mein fat globule ka average diameter 2 micron se kam hona chahiye. Cluster formation nahi hona chahiye.</p>
            `
          },
          {
            title: "Pack Integrity Test (for Pouches / Tetra Paks)",
            purpose: "Packaging ki integrity verify karna — leakage shelf life drastically reduce karti hai kyunki contamination ka raasta khul jaata hai.",
            reference: "Industry Standard Operating Procedures; FSSAI GMP Guidelines",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Agar packaging mein koi bhi micro-leak hai to bacteria enter kar sakte hain aur product rapidly spoil ho jaata hai. UHT milk ki 3-6 mahine ki shelf life puri tarah packaging integrity par depend karti hai. Pack integrity tests production line par bhi aur shelf life study ke dauran bhi kiye jaate hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Method 1: Dye Penetration Test (for Pouches)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Sealed pouch ko 0.5% methylene blue solution mein daalein.</li>
                <li>Pouch ko gently squeeze karein aur 30 minute immerse rakhein.</li>
                <li>Pouch nikaalein, bahar se dhoyein.</li>
                <li>Pouch kholein aur andar doodh ki colour dekhein.</li>
              </ol>
              <p><strong>Blue colour inside:</strong> LEAK present — pack reject</p>
              <p><strong>No colour change:</strong> PASS — pack intact</p>

              <h4 class="font-semibold mt-4 mb-2">Method 2: Vacuum/Pressure Test (for Tetra Paks)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Pack ko vacuum chamber mein rakhein.</li>
                <li>-500 mbar vacuum apply karein.</li>
                <li>Agar pack swell kare aur air bubbles aayein = leak hai.</li>
                <li>Ya: Pack ko underwater rakhein aur vacuum lagayein — bubbles = leak.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Method 3: Electrolytic Test (for Tetra Paks)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Pack ko saline solution mein daalein.</li>
                <li>Pack ke andar aur bahar ke beech electric current measure karein.</li>
                <li>Current flow = pin-hole/micro-leak present.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Method 4: Visual Inspection</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Seal integrity — proper sealing, no wrinkles</li>
                <li>Pouch swelling — gas production = microbial growth</li>
                <li>Leakage stains — wet spots on pack</li>
                <li>Pin holes — hold against light</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Frequency:</h4>
              <p>Production line: Every 30 minutes ek pack test karein. Shelf life study: Weekly pack integrity check karein. Ek bhi leak wali pack milne par poori batch investigate karein.</p>
            `
          },
          {
            title: "Comprehensive Shelf Life Study Protocol (Market Milk)",
            purpose: "Complete shelf life study kaise conduct karein — production se lekar expiry determination tak ka full protocol.",
            reference: "FSSAI Guidelines; Codex CAC/GL 46-2003; Industry Best Practices",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Shelf Life Study Design:</h4>
              <p>Ek systematic shelf life study mein multiple parameters ko set intervals par monitor kiya jaata hai. Ye study regulatory submission, internal quality assurance, aur best-before date determination ke liye zaroori hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Step 1: Sample Collection</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Minimum 3 different batches se samples lein (batch-to-batch variation cover karne ke liye).</li>
                <li>Har batch se minimum 30-50 units collect karein (testing intervals cover karne ke liye).</li>
                <li>Samples ko designated storage conditions mein rakhein.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step 2: Storage Conditions</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Product</th><th class="border p-2">Storage Temp</th><th class="border p-2">Testing Intervals</th><th class="border p-2">Study Duration</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Pasteurized Milk</td><td class="border p-2">4 ± 1°C</td><td class="border p-2">Every 24 hours</td><td class="border p-2">7-10 din</td></tr>
                  <tr><td class="border p-2">UHT Milk</td><td class="border p-2">25 ± 2°C (room temp)</td><td class="border p-2">Weekly for 1st month, then monthly</td><td class="border p-2">6-9 mahine</td></tr>
                  <tr><td class="border p-2">Sterilized Milk</td><td class="border p-2">25 ± 2°C</td><td class="border p-2">Weekly</td><td class="border p-2">3-6 mahine</td></tr>
                  <tr><td class="border p-2">Flavoured Milk</td><td class="border p-2">4 ± 1°C</td><td class="border p-2">Every 2-3 days</td><td class="border p-2">15-21 din</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Step 3: Parameters to Test at Each Interval</h4>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Category</th><th class="border p-2">Tests</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2"><strong>Microbiological</strong></td><td class="border p-2">TPC, Coliform count, Yeast & Mold count, E. coli</td></tr>
                  <tr><td class="border p-2"><strong>Chemical</strong></td><td class="border p-2">pH, Titratable acidity, Fat %, SNF %</td></tr>
                  <tr><td class="border p-2"><strong>Sensory</strong></td><td class="border p-2">Appearance, Odour, Taste, Texture (hedonic scale)</td></tr>
                  <tr><td class="border p-2"><strong>Physical</strong></td><td class="border p-2">Pack integrity, Cream separation, Sediment</td></tr>
                  <tr><td class="border p-2"><strong>Enzymatic</strong></td><td class="border p-2">ALP test, Peroxidase test (initial only)</td></tr>
                </tbody>
              </table>

              <h4 class="font-semibold mt-4 mb-2">Step 4: Shelf Life Determination Criteria</h4>
              <p>Shelf life us din khatam hoti hai jab <strong>koi bhi ek</strong> parameter fail kare:</p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>TPC &gt; 1,00,000 CFU/ml (pasteurized milk)</li>
                <li>Coliform detected (UHT/sterilized)</li>
                <li>pH &lt; 6.0 ya acidity &gt; 0.18%</li>
                <li>Sensory score &lt; 5 (overall unacceptable)</li>
                <li>Visible cream separation, sediment, or off-colour</li>
                <li>Pack swelling or leakage</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step 5: Safety Margin</h4>
              <p>Determined shelf life se 20-30% kam best-before date print karein. Example: Agar study mein 6 din tak sab okay rahe, to best-before = 4-5 din rakhein. Ye safety margin temperature abuse (cold chain break) cover karta hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Documentation:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Har test ka result dated aur signed hona chahiye</li>
                <li>Graph/charts banayein — trend analysis ke liye</li>
                <li>Any deviation ya observation note karein</li>
                <li>Final shelf life recommendation report banayein</li>
                <li>Records minimum 2 saal retain karein</li>
              </ul>
            `
          }
        ]
      },
  
        "cream": {
          title: "Cream ka Analysis",
          tests: [
            {
              title: "Fat ka Determination",
              purpose: "Cream mein fat content determine karna — ye iski primary commercial value hai.",
              reference: "IS 3509-1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Method 1: Gerber Method (Cream ke liye)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek special cream butyrometer mein seedha 5 gram achchi tarah se mixed cream weigh karein.</li>
                  <li>5 ml paani daalein (cream ko dilute karne ke liye).</li>
                  <li>10 ml Gerber ka acid aur 1 ml amyl alcohol daalein.</li>
                  <li>Doodh ke liye Gerber method ke anusaar aage badhein (centrifuge, water bath, reading). Reading ko butyrometer ke basis par ek factor se multiply kiya jaata hai taaki fat percentage prapt ho sake.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Method 2: Rose-Gottlieb Method</h4>
                <p>Reference/accurate method. ~5 gram cream ko ammonia, ethanol, diethyl ether aur petroleum ether se extract karein — same as milk Rose-Gottlieb but sample size adjust kiya jaata hai.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Method 3: Werner-Schmidt Method</h4>
                <p>Sour ya preserved cream ke liye suitable. Lagbhag 5 gram cream ko HCl se digest karein, aur fat ko ether se extract karein aur weigh karein.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Light cream: 25-30% fat, Heavy/Table cream: 40-50% fat, FSSAI standard: Min 25% fat</p>
              `
            },
            {
              title: "Total Solids ka Determination",
              purpose: "Cream mein total solid content determine karna.",
              reference: "IS 3509-1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek pehle se weigh kiye hue dish (W1) mein ~5 gram cream ka sample weigh karein.</li>
                  <li>Water bath par 30 min heat karein, phir oven mein 100±2°C par 3-4 hours dry karein.</li>
                  <li>Desiccator mein cool karein, weigh karein (W2).</li>
                  <li>Constant weight prapt hone tak repeat karein.</li>
                </ol>
                <pre><code>% Total Solids = [(W2 - W_empty dish) / Sample weight] × 100</code></pre>
              `
            },
            {
              title: "Titratable Acidity",
              purpose: "Cream ki acidity determine karna.",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek porcelain dish mein 10 gram cream weigh karein.</li>
                  <li>Sample ko disperse karne ke liye 10 ml garam, neutral distilled water daalein.</li>
                  <li>Phenolphthalein indicator ki kuch boondein daalein.</li>
                  <li>Ek halke pink endpoint par 0.1 N NaOH ke saath titrate karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Acidity = (Titration volume × NaOH ki Normality × 9) / Sample ka weight</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Fresh pasteurized cream: ≤0.30% (as lactic acid)</p>
              `
            },
            {
              title: "Cream mein Thickeners ka Detection",
              purpose: "Cream ko artificially gaadha karne ke liye use kiye jaane wale starch ya gelatin jaise illegal additives ka pata lagana.",
              reference: "A.O.A.C. Official method 920.106",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Starch Detection:</h4>
                <p>10 ml cream ko 10 ml paani se dilute karein aur boil karein. Cool karein aur iodine solution ki kuch boondein daalein. <strong>Blue colour = Starch PRESENT</strong></p>
  
                <h4 class="font-semibold mt-4 mb-2">Gelatin Detection (Stokes Test):</h4>
                <p>10 ml cream, 20 ml paani, aur 20 ml Stokes reagent (acid mercuric nitrate) mix karein. Mixture ko filter karein. Filtrate mein, saturated picric acid ki equal quantity daalein. <strong>Yellow precipitate = Gelatin PRESENT</strong></p>
  
                <h4 class="font-semibold mt-4 mb-2">Carrageenan/Guar Gum Detection:</h4>
                <p>Cream ko dilute acid se treat karein aur agar gel formation ya viscous behaviour dikhaye to stabilizers ka indication hai. Confirmatory testing HPLC se kiya jaata hai.</p>
              `
            },
            {
              title: "Phosphatase Test for Cream",
              purpose: "Cream ke proper pasteurization ki verification.",
              reference: "IS 3509-1966",
              procedure: `
                <p>Doodh ke phosphatase test jaisa hi procedure follow karein. Cream ke liye, pehle cream ko buffer solution se 1:10 dilute karein taaki fat interference kam ho. Baaki procedure (substrate addition, incubation at 37°C for 2 hours, colour observation) same hai.</p>
                <p><strong>No yellow colour:</strong> Properly pasteurized cream</p>
                <p><strong>Yellow colour:</strong> Under-pasteurized ya raw cream se contaminated</p>
              `
            },
            {
              title: "Protein Content of Cream",
              purpose: "Cream mein protein content determine karna.",
              reference: "A.O.A.C 991.23",
              procedure: `
                <p>Kjeldahl method use karein — ~5 gram cream weigh karein aur standard digestion, distillation, aur titration procedure follow karein. Conversion factor 6.38 use karein.</p>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
                <p>Expected: Light cream ~2.5%, Heavy cream ~1.5-2.0%</p>
              `
            }
          ]
        },
  
        "cream-powder": {
          title: "Cream Powder ka Analysis",
          tests: [
            {
              title: "Moisture ka Determination",
              purpose: "Free moisture content determine karna — shelf life ke liye critical hai.",
              reference: "IS 16072: 2012",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek saaf, dry, khaali moisture dish ko uske dhakkan (W1) ke saath weigh karein.</li>
                  <li>Dish mein lagbhag 1 gram sample daalein aur phir se weigh karein (W2).</li>
                  <li>Dhakkan ke bina dish ko 102 ± 2°C par 2 ghante ke liye hot air oven mein rakhein.</li>
                  <li>Dish ko dhak dein, desiccator mein cool karein, aur weigh karein (W3).</li>
                  <li>1 ghante ke intervals par heating repeat karein jab tak constant weight prapt na ho jaye.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <p>Expected: ≤ 4.0% (FSSAI standard for cream powder)</p>
              `
            },
            {
              title: "Fat ka Determination",
              purpose: "Cream powder mein fat content determine karna.",
              reference: "A.O.A.C 932.06",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure (Rose-Gottlieb Method):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek extraction flask mein accurately ~1 gram powder weigh karein.</li>
                  <li>10 ml garam paani daalein aur powder ko reconstitute karne ke liye achchi tarah mix karein.</li>
                  <li>1.25 ml ammonia solution daalein aur mix karein.</li>
                  <li>Liquid doodh ke liye described anusaar diethyl ether aur petroleum ether use karke standard Rose-Gottlieb extraction ke saath aage badhein.</li>
                </ol>
                <p>Expected: Cream powder mein 42-75% fat hota hai (grade ke hisaab se).</p>
              `
            },
            {
              title: "Milk Protein ka Determination",
              purpose: "Kjeldahl method use karke protein content determine karna.",
              reference: "A.O.A.C 991.23, 991.20, 991.21",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Kjeldahl method use karke powder ki Total Nitrogen (TN) content determine karein.</li>
                  <li>Reconstituted sample ke Trichloroacetic Acid (TCA) filtrate se Non-Protein Nitrogen (NPN) determine karein, Kjeldahl method ka bhi use karein. 12% TCA proteins precipitate karta hai, NPN filtrate mein rehta hai.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% True Protein = (% TN - % NPN) × 6.38</code></pre>
              `
            },
            {
              title: "Titratable Acidity",
              purpose: "Cream powder ki acidity determine karna.",
              procedure: `
                <p>10 gram cream powder ko 100 ml warm distilled water mein dissolve/reconstitute karein. Iske 10 ml lein, phenolphthalein indicator daalein, aur 0.1 N NaOH se titrate karein jab tak pink endpoint aaye.</p>
                <pre><code>% Acidity = (9 × V × N) / W</code></pre>
              `
            },
            {
              title: "Scorched Particles",
              purpose: "Manufacturing process mein excessive heat exposure ka indication — powder ki quality ka indicator.",
              reference: "ADPI Standard",
              procedure: `
                <p>Reconstituted cream powder solution ko ek standard ADPI disc (15 cm² area) ke through filter karein. Filter disc par jo brown/dark particles reh jaate hain unhe standard discs (A, B, C, D grades) se compare karein. Grade A = lowest scorched particles = best quality.</p>
              `
            }
          ]
        },
  
        "butter": {
          title: "Makhan (Butter) ka Analysis",
          tests: [
            {
              title: "Moisture ka Determination",
              purpose: "Paani ki quantity determine karna — ek major quality aur legal parameter.",
              reference: "IS 3507 – 1966; A.O.A.C 920.116",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek pehle se weigh ki hui flat-bottom dish (W1) mein prepared butter ke sample ka 3-4 gram weigh karein.</li>
                  <li>Dish ko ~20 minute ke liye boiling water bath par heat karein, baar-baar stirring karein (jab tak bubbling band na ho jaye — ye indicate karta hai ki saara moisture evaporate ho gaya).</li>
                  <li>Constant weight (W2) par dry hone ke liye 100 ± 1°C par hot air oven mein transfer karein.</li>
                  <li>Desiccator mein cool karein, weigh karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>Moisture % = [(W1 - W2) / Sample ka initial weight] × 100</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">FSSAI Standards:</h4>
                <p>Table butter: Maximum 16% moisture, White butter: Maximum 20% moisture</p>
              `
            },
            {
              title: "Fat aur Curd (MSNF) ka Determination",
              purpose: "Fat aur non-fat solid content determine karna.",
              reference: "IS 3507 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Moisture determination (W2) se residue ka use karein.</li>
                  <li>Ek fat solvent (petroleum ether) se baar-baar residue ko wash karke aur solvent ko filter karke fat extract karein.</li>
                  <li>Saara fat extract hone ke baad, remaining residue ko oven mein dry karein taaki saara solvent nikal jaye aur ise weigh karein (W3). Ye curd + salt ka weight deta hai.</li>
                  <li>Curd content find karne ke liye, salt content ko separately determine karna chahiye aur is value se subtract karna chahiye.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = 100 - (%Moisture + %Curd aur Salt)</code></pre>
                <pre><code>% Curd (MSNF) = %Curd aur Salt - %Salt</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">FSSAI Standards:</h4>
                <p>Table butter fat: Minimum 80%, Curd: Maximum 1.5%</p>
              `
            },
            {
              title: "Salt (NaCl) ka Determination",
              purpose: "Salt content measure karna — taste aur legal standards ke liye important hai.",
              reference: "IS 3507 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Method 1: Mohr's Method (Direct Titration)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>5 gram butter weigh karein ek beaker mein.</li>
                  <li>100 ml boiling distilled water daalein — ye butter melt kar deta hai aur salt paani mein dissolve ho jaata hai.</li>
                  <li>50-55°C tak cool karein (fat solidify ho jaata hai upper layer mein).</li>
                  <li>Paani ki layer carefully nikaalein ya filter karein.</li>
                  <li>Potassium chromate indicator (K₂CrO₄ — 5% solution, ~1 ml) daalein.</li>
                  <li>Standard silver nitrate (0.1 N AgNO₃) solution se tab tak titrate karein jab tak ek permanent reddish-brown colour na ban jaye.</li>
                </ol>
                <pre><code>NaCl % = [5.844 × N_AgNO₃ × (V_sample - V_blank)] / Weight_sample</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Method 2: Volhard's Method (Back Titration)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Garam paani se salt extract karein.</li>
                  <li>Chloride ko precipitate karne ke liye excess standard silver nitrate daalein.</li>
                  <li>Nitric acid daalein (acidify karne ke liye).</li>
                  <li>Ferric alum indicator use karke potassium thiocyanate (KCNS) se excess silver nitrate ka back-titration karein.</li>
                  <li>Red-brown colour at endpoint.</li>
                </ol>
                <pre><code>NaCl % = [23.38 × N_KCNS × (V_blank - V_sample)] / Weight_sample</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">FSSAI Standard:</h4>
                <p>Table butter: Maximum 3.0% salt</p>
              `
            },
            {
              title: "Titratable Acidity of Butter Fat",
              purpose: "Butter fat ki free acidity measure karna — staleness ka indication.",
              reference: "IS 3507 – 1966",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>10 gram melted, clear butter fat (curd aur moisture free) weigh karein.</li>
                  <li>50 ml neutralized ethanol mein dissolve karein (garam karke).</li>
                  <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                  <li>0.1 N NaOH se titrate karein jab tak pink endpoint aaye.</li>
                </ol>
                <pre><code>% FFA (as oleic acid) = (Titre × N × 28.2) / Sample weight</code></pre>
                <p>Expected: Fresh butter FFA ≤ 0.3%</p>
              `
            },
            {
              title: "Peroxide Value of Butter",
              purpose: "Oxidative rancidity ka early stage measure karna.",
              reference: "A.O.A.C 965.33",
              procedure: `
                <p>Melted butter fat ko acetic acid-chloroform mixture mein dissolve karein. Saturated KI solution daalein. Fat mein peroxides KI se iodine liberate karte hain. Liberated iodine ko starch indicator use karke standard sodium thiosulphate (Na₂S₂O₃) se titrate karein.</p>
                <pre><code>PV (meq/kg) = (S × N × 1000) / Sample weight</code></pre>
                <p>Expected: Fresh butter PV ≤ 1.0 meq/kg. Rancid butter: > 5 meq/kg</p>
              `
            },
            {
              title: "Coliform Test (Presumptive)",
              purpose: "Butter mein coliform contamination ka detection — hygienic quality ka indicator.",
              reference: "IS 5401 (Part 1)",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>11 gram butter ko 99 ml sterile warm (45°C) ringer solution mein homogenize karein — ye 1:10 dilution hai.</li>
                  <li>Serial dilutions prepare karein (10⁻¹, 10⁻², 10⁻³).</li>
                  <li>Har dilution ka 1 ml Violet Red Bile Agar (VRBA) plates par pour karein.</li>
                  <li>Overlay daalein aur 37°C par 24-48 hours incubate karein.</li>
                  <li>Dark red colonies with bile precipitate halo = presumptive coliforms.</li>
                </ol>
                <p>FSSAI limit: ≤ 10 cfu/gram for pasteurized butter.</p>
              `
            }
          ]
        },
  
        "ghee-butter-oil": {
      title: "Ghee / Butter Oil ka Analysis",
      tests: [
        {
          title: "Butyro-Refractometer (BR) Reading",
          purpose: "Ghee ki purity check karne ka sabse simple aur rapid instrumental method.",
          reference: "IS 3508 – 1966; FSSAI Manual",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Jab light ek medium (jaise air) se doosre medium (jaise fat/oil) mein jaata hai, to ye bend hota hai — isko <strong>refraction</strong> kehte hain. Har fat ki ek characteristic refractive index (RI) hoti hai jo uski chemical composition par depend karti hai. Ghee ki BR reading 40-44 hoti hai at 40°C. Foreign oils milane se ye reading change hoti hai — vegetable oils ki RI zyada hoti hai kyunki unme zyada unsaturated (double bond wale) fatty acids hote hain.</p>
            <p class="mt-2"><strong>Butyro-Refractometer kya hai?</strong> Ye ek special refractometer hai jo specifically fats/oils ke liye design kiya gaya hai. Iska scale "BR units" mein hota hai (normal refractometer RI value deta hai jaise 1.4524). BR scale ko fats ke narrow RI range (1.4500-1.4600) ke liye optimize kiya gaya hai taaki chhote differences bhi easily padh sakein.</p>

            <h4 class="font-semibold mt-4 mb-2">BR Reading aur Refractive Index ka Relationship:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">BR Reading</th><th class="border p-2">Refractive Index (nD at 40°C)</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">40.0</td><td class="border p-2">1.4524</td></tr>
                <tr><td class="border p-2">44.0</td><td class="border p-2">1.4545</td></tr>
                <tr><td class="border p-2">50.0</td><td class="border p-2">1.4577</td></tr>
                <tr><td class="border p-2">60.0</td><td class="border p-2">1.4600</td></tr>
              </tbody>
            </table>
            <p class="mt-2 text-sm text-gray-600">Butyro-refractometer ka scale specifically fats ke liye design kiya gaya hai. Range 40-60 BR ≈ nD 1.4524-1.4600. Instrument mein prism ke upar sample rakh ke eyepiece se light-dark boundary directly BR scale par padh lete hain.</p>

            <h4 class="font-semibold mt-4 mb-2">Temperature Correction Formula:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>Corrected BR Reading = Observed BR + 0.55 × (T - 40)</code></pre>
              <p class="text-sm mt-2"><strong>Har factor ka matlab:</strong></p>
              <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>Observed BR</strong> = Jo reading instrument par dikhi</li>
                <li><strong>0.55</strong> = Temperature correction factor — har 1°C temperature change par BR reading 0.55 unit change hoti hai fats ke liye. Ye experimentally determine kiya gaya constant hai.</li>
                <li><strong>T</strong> = Actual temperature (°C) jis par reading li gayi</li>
                <li><strong>40</strong> = Standard reference temperature (°C) — sabhi BR readings 40°C par compare ki jaati hain</li>
              </ul>
              <p class="text-sm mt-2"><strong>Kyun correction zaroori hai?</strong> Temperature badhne se fat ki density kam hoti hai, molecules zyada spread hote hain, aur light kam bend hota hai — isliye RI (aur BR reading) kam hoti hai. Har degree ke liye 0.55 ka correction lagta hai.</p>
              <p class="text-sm mt-2"><strong>Example:</strong> Agar 38°C par reading 42.0 aayi:</p>
              <pre class="text-sm"><code>Corrected BR = 42.0 + 0.55 × (38 - 40) = 42.0 + 0.55 × (-2) = 42.0 - 1.1 = 40.9</code></pre>
              <p class="text-sm">Matlab 38°C par jo 42.0 dikha, wo actually 40°C par 40.9 ke barabar hai.</p>
              <p class="text-sm mt-2"><strong>Agar T > 40:</strong> T=42°C par reading 39.5 aayi → Corrected = 39.5 + 0.55×(42-40) = 39.5 + 1.1 = 40.6</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>Ghee ko 40°C se thoda upar melt karein. Clear fat decant karein (bina moisture/curd ke). <em>— Moisture aur curd particles light ko scatter karte hain jo galat reading dega.</em></li>
              <li>Butyro-refractometer ko circulating water bath se 40°C par maintain karein. <em>— Exactly 40°C par karna zaroori hai taaki temperature correction ki zaroorat na pade.</em></li>
              <li>1-2 drops melted ghee refractometer ke prism par daalein. <em>— Sample ko prism ki poori surface par evenly spread hona chahiye, koi air bubble nahi hona chahiye.</em></li>
              <li>Eyepiece se dekhein — light aur dark boundary line ko scale par adjust karein. <em>— Chromatic aberration se boundary thoda coloured dikh sakti hai, compensator adjust karein jab tak sharp boundary aaye.</em></li>
              <li>BR reading note karein. Agar temperature exactly 40°C nahi hai to correction formula apply karein.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">BR Reading at 40°C</th><th class="border p-2">Kyun aisi value?</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Cow ghee</td><td class="border p-2">40.0 - 43.0</td><td class="border p-2">Mostly saturated short-chain fatty acids</td></tr>
                <tr><td class="border p-2">Buffalo ghee</td><td class="border p-2">40.0 - 43.5</td><td class="border p-2">Thoda zyada unsaturation cow ghee se</td></tr>
                <tr><td class="border p-2">Groundnut oil</td><td class="border p-2">58-60</td><td class="border p-2">Highly unsaturated (oleic, linoleic acid) → high RI</td></tr>
                <tr><td class="border p-2">Coconut oil</td><td class="border p-2">35-37</td><td class="border p-2">Mostly saturated but medium chain → ghee se bhi kam</td></tr>
              </tbody>
            </table>
            <p class="mt-2"><strong>Interpretation:</strong> Agar BR reading 44 se upar hai — vegetable oil milawat ka indication hai. Agar 40 se neeche hai — coconut oil milawat ho sakti hai.</p>
            <p class="mt-1 text-sm text-gray-600"><strong>Limitation:</strong> Agar koi is tarah mix kare ki BR reading normal range mein aaye (jaise coconut oil + groundnut oil ka mixture) to ye test alone detect nahi kar paayega — isliye doosre tests bhi zaroori hain.</p>
          `
        },
        {
          title: "Reichert-Meissl (RM) & Polenske Value (PV)",
          purpose: "Ghee ki purity check karne ke liye. RM value doodh ki fat ke characteristic short-chain fatty acids ko measure karta hai. PV value coconut oil ke saath adulteration detect karne mein help karta hai.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Ghee ko saponify (soap mein convert) kiya jaata hai, phir acid se acidify karke volatile fatty acids release kiye jaate hain. Ye acids steam distillation se distill kiye jaate hain.</p>
            <p class="mt-2"><strong>RM value</strong> = water-SOLUBLE volatile acids ka measure (mainly butyric acid C4, caproic acid C6 — ye sirf milk fat mein significant量 mein hote hain). Pure ghee mein ye acids bahut zyada hain isliye RM value high hota hai.</p>
            <p class="mt-1"><strong>Polenske value</strong> = water-INSOLUBLE volatile acids ka measure (mainly caprylic C8, capric C10, lauric C12 — ye coconut oil mein bahut zyada hote hain). Normal ghee mein ye kam hote hain.</p>

            <div class="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
              <p class="text-sm"><strong>Samajhne ke liye:</strong> Fat = Glycerol + 3 Fatty Acids. Saponification se fatty acids alag hote hain. Short-chain fatty acids (C4-C12) volatile hain — ye steam se ud sakte hain. Long-chain fatty acids (C16, C18) non-volatile hain — ye flask mein reh jaate hain.</p>
              <p class="text-sm mt-1">Distillate mein jo acids aaye, unme se kuch paani mein dissolve hote hain (butyric, caproic = RM value measure karta hai), aur kuch paani mein dissolve nahi hote lekin condenser par jam jaate hain (caprylic, capric, lauric = Polenske value measure karta hai).</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li><strong>Saponification:</strong> 5.00 gram ghee ko 250 ml round bottom flask mein lein. 20 gram glycerol aur 2 ml 50% NaOH daalein. Gentle heat par liquid clear hone tak heat karein (saponification complete). <em>— Glycerol high boiling point solvent ka kaam karta hai aur saponification ko uniform banata hai.</em></li>
              <li><strong>Dilution aur Acidification:</strong> 93 ml boiled, cooled distilled water daalein (dissolved CO₂ remove karne ke liye boiled water use hota hai). 50 ml dilute sulphuric acid (25 ml conc. H₂SO₄ per litre water) daalein — ye soap ko tod ke free fatty acids release karta hai. Pumice stone ke 2-3 tukde daalein. <em>— Pumice stone bumping prevent karta hai (sudden violent boiling).</em></li>
              <li><strong>Distillation:</strong> Polenske distillation apparatus attach karein (condenser + receiving flask). 19-21 minute mein 110 ml distillate collect karein. <em>— Rate consistent honi chahiye (~5.5 ml/min). Bahut fast distillation se non-volatile acids bhi aa sakte hain, bahut slow se volatile acids properly nahi aayenge.</em></li>
              <li><strong>Cooling:</strong> Distillate ko 15°C par 10 minute rakhein — insoluble fatty acids solidify ho jayenge.</li>
              <li><strong>Filtration:</strong> Distillate ko dry filter paper se filter karein. <em>— Insoluble acids filter paper par reh jayenge, soluble acids filtrate mein jayenge.</em></li>
              <li><strong>RM Value Titration:</strong> Filtrate ka 100 ml lein (110 ml mein se), phenolphthalein indicator daalein, 0.1 N NaOH se titrate karein jab tak persistent faint pink colour aaye.</li>
              <li><strong>Polenske Value Titration:</strong> Condenser tube aur filter paper ko teen baar 15 ml neutralized ethanol se wash karein (total 45 ml). Combined washings ko 0.1 N NaOH se titrate karein (phenolphthalein indicator). <em>— Ethanol insoluble acids ko dissolve kar leta hai jo paani nahi kar sakta.</em></li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formulas aur Unke Factors ki Detailed Explanation:</h4>
            
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <h5 class="font-semibold">RM Value Formula:</h5>
              <pre class="text-sm mt-1"><code>RM Value = 1.1 × V</code></pre>
              <p class="text-sm mt-1">Jahaan V = ml of 0.1N NaOH used to titrate 100 ml filtrate</p>
              
              <p class="text-sm mt-3"><strong>Factor 1.1 kahan se aaya? Step-by-step:</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <tbody>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Step 1</td><td class="border p-2">Distillation mein total <strong>110 ml</strong> distillate collect kiya jaata hai</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Step 2</td><td class="border p-2">Lekin filter paper kuch liquid absorb karta hai, isliye sirf <strong>100 ml</strong> filtrate milta hai titration ke liye</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Step 3</td><td class="border p-2">100 ml filtrate titrate karne se jo value aati hai, wo sirf 100/110 = 90.9% acids ka represent karti hai</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Step 4</td><td class="border p-2">Poore 110 ml ke liye result chahiye, isliye multiply karte hain: <strong>110/100 = 1.1</strong></td></tr>
                </tbody>
              </table>
              <p class="text-sm mt-2"><strong>Matlab:</strong> 1.1 ek simple volume correction factor hai — hum 100 ml titrate karte hain lekin result 110 ml ke liye report karte hain.</p>
              
              <p class="text-sm mt-3"><strong>0.1N NaOH kyun specifically?</strong></p>
              <p class="text-sm">RM value ki definition hi yahi hai: <em>"Number of ml of 0.1N alkali required to neutralize water-soluble, steam-volatile fatty acids from 5 grams of fat."</em> Agar kisi reason se alag normality use karein to convert karna padega:</p>
              <pre class="text-sm"><code>RM Value = 1.1 × V × (N / 0.1)</code></pre>
              <p class="text-sm">Jaise agar 0.05N NaOH use kiya aur 52 ml laga:</p>
              <pre class="text-sm"><code>RM = 1.1 × 52 × (0.05/0.1) = 1.1 × 52 × 0.5 = 28.6</code></pre>

              <p class="text-sm mt-3"><strong>Blank correction:</strong></p>
              <p class="text-sm">Ideally blank negligible hota hai, lekin agar significant ho:</p>
              <pre class="text-sm"><code>RM Value = 1.1 × (V_sample - V_blank)</code></pre>

              <p class="text-sm mt-3"><strong>Example Calculation:</strong></p>
              <pre class="text-sm"><code>5.00 g ghee liya, 110 ml distill kiya, 100 ml filtrate ko titrate kiya
0.1N NaOH ka titre = 26.5 ml, Blank = 0.2 ml

RM Value = 1.1 × (26.5 - 0.2) = 1.1 × 26.3 = 28.93

FSSAI minimum 28 hai → Ye ghee PASS ✓</code></pre>
            </div>

            <div class="bg-green-50 border border-green-200 rounded p-3 mt-3">
              <h5 class="font-semibold">Polenske Value Formula:</h5>
              <pre class="text-sm mt-1"><code>Polenske Value = V_insoluble × (N / 0.1)</code></pre>
              <p class="text-sm mt-1">Jahaan V_insoluble = ml of 0.1N NaOH used to titrate combined ethanol washings</p>
              
              <p class="text-sm mt-3"><strong>Ye kaise kaam karta hai:</strong></p>
              <ol class="list-decimal list-inside text-sm space-y-1">
                <li>Distillation ke baad jo fatty acids paani mein dissolve nahi hue — wo condenser wall par aur filter paper par solidify ho gaye</li>
                <li>In solid acids ko 3 × 15 ml neutral ethanol se wash karte hain — ethanol inhe dissolve kar leta hai</li>
                <li>Combined ethanol washings (45 ml) ko 0.1N NaOH se titrate karte hain</li>
                <li>Titre value = Polenske Value (jab 0.1N NaOH use ho)</li>
              </ol>
              
              <p class="text-sm mt-2"><strong>Blank correction kab karein:</strong></p>
              <pre class="text-sm"><code>PV = (V_sample_insoluble - V_blank_insoluble) × (N / 0.1)</code></pre>
              <p class="text-sm">Usually blank negligible hota hai (0.1-0.2 ml).</p>

              <p class="text-sm mt-2"><strong>Coconut oil milawat mein kya hota hai:</strong> Coconut oil mein lauric acid (C12) bahut zyada hota hai — ye water-insoluble volatile acid hai. Isliye coconut oil ka PV = 16-18 (bahut high), jabki ghee ka sirf 1-2 hai. Agar ghee mein coconut oil milaya to PV badh jayegi.</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">RM Value</th><th class="border p-2">Polenske Value</th><th class="border p-2">Explanation</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Cow ghee</td><td class="border p-2">24-34</td><td class="border p-2">1.0-2.0</td><td class="border p-2">High butyric acid → high RM; low insoluble volatile acids → low PV</td></tr>
                <tr><td class="border p-2">Buffalo ghee</td><td class="border p-2">26-32</td><td class="border p-2">1.0-2.0</td><td class="border p-2">Similar to cow ghee</td></tr>
                <tr><td class="border p-2">Coconut oil</td><td class="border p-2">6-8</td><td class="border p-2">16-18</td><td class="border p-2">Very low butyric (almost nil) → low RM; very high lauric acid → very high PV</td></tr>
                <tr><td class="border p-2">Groundnut oil</td><td class="border p-2">0.5-1.5</td><td class="border p-2">0.5-1.0</td><td class="border p-2">Almost no short-chain volatile acids → both RM & PV very low</td></tr>
              </tbody>
            </table>
            <p class="mt-2">FSSAI minimum RM value for ghee: <strong>28</strong>. Agar RM < 28, to ghee mein vegetable oil milawat ka strong indication hai.</p>
          `
        },
        {
          title: "Iodine Value (Wijs Method)",
          purpose: "Fat mein unsaturation ki degree measure karna — kitne double bonds hain fatty acids mein. Foreign oil milawat detect karne mein bahut useful hai.",
          reference: "IS 3508 – 1966; A.O.A.C 993.20",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Fatty acids mein double bonds (C=C) hote hain — inhe <strong>unsaturation</strong> kehte hain. Iodine (ya iodine monochloride) in double bonds par add ho jaata hai. Jitne zyada double bonds, utna zyada iodine absorb hoga.</p>
            <p class="mt-1"><strong>Iodine Value ki definition:</strong> Grams of iodine absorbed per 100 grams of fat.</p>
            <p class="mt-1">Milk fat (ghee) ka IV 26-38 hota hai (mostly saturated), jabki vegetable oils ka bahut zyada hota hai (groundnut oil 80-106, mustard oil 96-112) kyunki vegetable oils mein oleic, linoleic, linolenic jaise highly unsaturated acids zyada hote hain.</p>

            <div class="bg-yellow-50 border border-yellow-200 rounded p-3 mt-3">
              <p class="text-sm"><strong>Wijs Method ka concept:</strong></p>
              <p class="text-sm mt-1">Hum sample mein EXCESS Wijs reagent (ICl — iodine monochloride in acetic acid) daalte hain. Kuch ICl fat ke double bonds se react karta hai (consume ho jaata hai). Jo ICl bach jaata hai (unreacted), usse KI ke saath react karwa ke I₂ (free iodine) release karte hain. Phir is I₂ ko Na₂S₂O₃ se titrate karte hain.</p>
              <p class="text-sm mt-1">Ek blank bhi run karte hain (bina fat ke) — usme saara ICl unreacted rehta hai aur zyada Na₂S₂O₃ lagta hai. Dono ka difference = kitna iodine fat ne absorb kiya.</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Chemical Reactions:</h4>
            <div class="bg-gray-50 border rounded p-3 mt-2 text-sm">
              <p><strong>Step 1 — Iodine ka fat mein addition:</strong></p>
              <pre><code>R-CH=CH-R' + ICl → R-CHI-CHCl-R'
(unsaturated fat) + (Wijs reagent) → (iodine add ho gaya double bond par)</code></pre>
              
              <p class="mt-2"><strong>Step 2 — Excess ICl + KI:</strong></p>
              <pre><code>ICl + KI → KCl + I₂
(unreacted Wijs) + (potassium iodide) → free iodine release</code></pre>
              
              <p class="mt-2"><strong>Step 3 — Titration:</strong></p>
              <pre><code>I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆
(free iodine) + (sodium thiosulfate) → endpoint (blue → colourless with starch)</code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>~0.25 gram ghee ko iodine flask (glass-stoppered) mein accurately weigh karein. <em>— Kam sample isliye lete hain kyunki Wijs reagent expensive hai aur excess mein hona chahiye (sample se kam se kam 2 guna).</em></li>
              <li>10 ml chloroform daalein aur dissolve karein. <em>— Chloroform fat ko dissolve karta hai taaki Wijs reagent uniformly react kar sake.</em></li>
              <li>25 ml Wijs solution (ICl in glacial acetic acid) daalein — ye EXCESS mein hai. <em>— Excess isliye zaroori hai taaki saare double bonds react karein. Kam padne se result galat aayega.</em></li>
              <li>Flask ko glass stopper se band karein, KI solution ki seal lagayein, aur andheri jagah mein 30 minute ke liye rakhein. <em>— Dark mein isliye kyunki light se side reactions ho sakti hain. 30 min = reaction complete hone ka time.</em></li>
              <li>15 ml 10% KI solution daalein. <em>— KI unreacted ICl se react karke I₂ release karta hai jo titrate kar sakein.</em></li>
              <li>100 ml distilled water daalein. <em>— Dilution ke liye, aur KI layer mein I₂ ko properly dissolve rakhne ke liye.</em></li>
              <li>Starch indicator (1%) ki kuch drops daalein aur 0.1 N Na₂S₂O₃ se titrate karein jab tak blue colour completely disappear ho jaye. <em>— Starch + I₂ = blue colour. Jab saara I₂ react ho jaata hai Na₂S₂O₃ se, to blue colour disappear ho jaata hai = endpoint.</em></li>
              <li>Ek blank bhi run karein (same procedure, bina ghee ke). <em>— Blank mein saara Wijs reagent unreacted hai, isliye zyada Na₂S₂O₃ lagega.</em></li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula aur Factor Derivation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>Iodine Value = [12.69 × N × (V_blank - V_sample)] / W</code></pre>
              
              <h5 class="font-semibold mt-3 text-sm">Factor 12.69 kahan se aaya? Detailed Derivation:</h5>
              
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <tbody>
                  <tr><td class="border p-2 bg-gray-50 font-semibold w-1/3">Iodine (I₂) ka molecular weight</td><td class="border p-2">I = 126.9, so I₂ = 2 × 126.9 = <strong>253.8 g/mol</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">I₂ ki reaction with Na₂S₂O₃</td><td class="border p-2">I₂ + 2Na₂S₂O₃ → products. I₂ accept karta hai <strong>2 electrons</strong> (2I⁰ → 2I⁻)</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">I₂ ka Equivalent Weight</td><td class="border p-2">Eq.Wt = Mol.Wt / n-factor = 253.8 / 2 = <strong>126.9 g/eq</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">1 ml of 1N Na₂S₂O₃</td><td class="border p-2">= 1 milliequivalent = 126.9/1000 g = <strong>0.1269 g of I₂</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">IV ki definition</td><td class="border p-2">Grams of I₂ absorbed per <strong>100 grams</strong> of fat</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Per 100 g ke liye</td><td class="border p-2">0.1269 × 100 = <strong>12.69</strong></td></tr>
                </tbody>
              </table>

              <p class="text-sm mt-3"><strong>Formula ka step-by-step derivation:</strong></p>
              <pre class="text-sm"><code>
I₂ absorbed = (V_blank - V_sample) × N milliequivalents

In grams: = (V_blank - V_sample) × N × (126.9/1000) grams

Iodine Value = grams of I₂ per 100 g of fat

= [(V_blank - V_sample) × N × 126.9/1000 × 100] / W

= [(V_blank - V_sample) × N × 12.69] / W

= [12.69 × N × (V_blank - V_sample)] / W
              </code></pre>

              <h5 class="font-semibold mt-3 text-sm">Har variable ka matlab:</h5>
              <ul class="list-disc list-inside text-sm space-y-1 mt-1">
                <li><strong>12.69</strong> = (Eq.Wt of I₂ / 1000) × 100 = 126.9 × 100 / 1000. Ye iodine ke equivalent weight ko per-100-gram basis par convert karta hai</li>
                <li><strong>N</strong> = Na₂S₂O₃ ki normality (usually 0.1N). Agar 0.1N use kiya to N = 0.1</li>
                <li><strong>V_blank</strong> = Blank titration mein kitne ml Na₂S₂O₃ lage (saara Wijs unreacted tha, isliye zyada I₂ tha, zyada thiosulfate laga)</li>
                <li><strong>V_sample</strong> = Sample titration mein kitne ml Na₂S₂O₃ lage (kuch Wijs fat ne absorb kar liya, kam I₂ bacha, kam thiosulfate laga)</li>
                <li><strong>(V_blank - V_sample)</strong> = Ye difference = kitna I₂ fat ne absorb kiya. Blank mein poora unreacted, sample mein kam unreacted → difference = consumed by fat</li>
                <li><strong>W</strong> = Sample weight in grams</li>
              </ul>

              <p class="text-sm mt-3"><strong>Example Calculation:</strong></p>
              <pre class="text-sm"><code>
Sample weight (W) = 0.2510 g
Na₂S₂O₃ normality (N) = 0.1 N
Blank titre (V_blank) = 45.20 ml
Sample titre (V_sample) = 38.50 ml

Iodine Value = [12.69 × 0.1 × (45.20 - 38.50)] / 0.2510
             = [12.69 × 0.1 × 6.70] / 0.2510
             = [8.5023] / 0.2510
             = 33.87

Ghee ki FSSAI range 26-38 hai → Ye sample PASS ✓
              </code></pre>

              <p class="text-sm mt-3"><strong>Agar IV bahut zyada aaye (>45):</strong> Vegetable oil (highly unsaturated) milaya gaya hai — groundnut oil (IV 80-106), soybean oil (IV 120-143) milane se ghee ka IV badh jaata hai.</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">Iodine Value</th><th class="border p-2">Kyun?</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Cow ghee</td><td class="border p-2">26-35</td><td class="border p-2">Mostly saturated fats, kam double bonds</td></tr>
                <tr><td class="border p-2">Buffalo ghee</td><td class="border p-2">28-38</td><td class="border p-2">Thoda zyada unsaturated cow ghee se</td></tr>
                <tr><td class="border p-2">Coconut oil</td><td class="border p-2">7-10</td><td class="border p-2">Highly saturated (lauric, myristic)</td></tr>
                <tr><td class="border p-2">Groundnut oil</td><td class="border p-2">80-106</td><td class="border p-2">Highly unsaturated (oleic, linoleic)</td></tr>
                <tr><td class="border p-2">Mustard oil</td><td class="border p-2">96-112</td><td class="border p-2">Erucic acid (highly unsaturated)</td></tr>
              </tbody>
            </table>
            <p class="mt-2">FSSAI range for ghee: <strong>26-38</strong></p>
          `
        },
        {
          title: "Saponification Value",
          purpose: "Fat ke average molecular weight ka indication — short chain fatty acids ki presence indicate karta hai jo milk fat ke characteristic hain.",
          reference: "IS 3508 – 1966; A.O.A.C 920.160",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p><strong>Saponification</strong> = Fat ko alkali (KOH) ke saath heat karke soap mein convert karna.</p>
            <pre class="text-sm bg-gray-50 p-2 rounded"><code>Fat (triglyceride) + 3KOH → Glycerol + 3 Potassium Soap (fatty acid salts)</code></pre>
            <p class="mt-2"><strong>Saponification value ki definition:</strong> Milligrams of KOH required to completely saponify 1 gram of fat.</p>
            <p class="mt-2"><strong>Kyun important hai?</strong></p>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>Short chain fatty acids (butyric C4, caproic C6) ka molecular weight CHHOTA hai</li>
              <li>1 gram fat mein zyada molecules honge agar fatty acids short-chain hain</li>
              <li>Har triglyceride molecule ko 3 KOH chahiye saponify hone ke liye</li>
              <li>Zyada molecules = zyada KOH = ZYADA Saponification Value</li>
              <li>Milk fat mein short-chain acids BAHUT hain → SV = 220-235 (high)</li>
              <li>Vegetable oils (groundnut, soybean) mein mostly long-chain acids hain → SV = 185-195 (low)</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>~2 gram ghee accurately weigh karein ek 250 ml round bottom flask mein. <em>— Accurately isliye kyunki formula mein weight denominator hai, galat weight = galat result.</em></li>
              <li>25 ml 0.5 N alcoholic KOH daalein (ye EXCESS mein hai). <em>— Excess KOH zaroori hai taaki saara fat completely saponify ho jaye. Alcohol solvent ka kaam karta hai — fat paani mein dissolve nahi hota lekin alcohol mein hota hai, isliye alcoholic KOH use karte hain.</em></li>
              <li>Reflux condenser lagayein aur 1 hour boiling water bath par heat karein. <em>— Reflux condenser isliye taaki alcohol evaporate na ho. 1 hour = saponification complete hone ka time. Water bath isliye taaki gentle, uniform heating ho — direct flame se alcohol aag pakad sakta hai.</em></li>
              <li>Cool karein room temperature tak, phenolphthalein indicator ki 2-3 drops daalein.</li>
              <li>Excess (unreacted) KOH ko 0.5 N HCl se back-titrate karein jab tak pink colour disappear ho jaye (colourless endpoint). <em>— Back titration isliye kyunki direct titration possible nahi — hum pehle excess KOH dete hain, phir check karte hain kitna bacha = kitna fat ne consume kiya.</em></li>
              <li>Ek blank bhi run karein (same procedure bina fat ke — sirf 25 ml alcoholic KOH + reflux + titrate). <em>— Blank mein saara KOH unreacted hai, isliye zyada HCl lagega.</em></li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula aur Factor Derivation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>Saponification Value = [56.1 × N × (V_blank - V_sample)] / W</code></pre>
              
              <h5 class="font-semibold mt-3 text-sm">Factor 56.1 kahan se aaya? Step-by-step:</h5>
              
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <tbody>
                  <tr><td class="border p-2 bg-gray-50 font-semibold w-1/3">KOH ka Molecular Weight</td><td class="border p-2">K = 39.1, O = 16.0, H = 1.0 → KOH = <strong>56.1 g/mol</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">KOH monovalent hai</td><td class="border p-2">KOH → K⁺ + OH⁻ (ek OH⁻ deta hai) → n-factor = 1 → Equivalent Weight = 56.1/1 = <strong>56.1 g/eq</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">1 ml of 1N HCl</td><td class="border p-2">= 1 milliequivalent HCl = neutralizes 1 milliequivalent KOH = <strong>56.1/1000 g = 0.0561 g = 56.1 mg</strong> KOH</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">SV ki definition</td><td class="border p-2"><strong>mg of KOH</strong> per gram of fat</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Isliye factor</td><td class="border p-2">56.1 (mg KOH per meq) directly use hota hai — koi ×100 nahi kyunki SV "per gram" hai, "per 100 gram" nahi</td></tr>
                </tbody>
              </table>

              <p class="text-sm mt-3"><strong>Full derivation:</strong></p>
              <pre class="text-sm"><code>
Back titration ka concept:

Blank mein:  25 ml KOH mein se KUCH BHI use nahi hua
  → Saara KOH bacha → V_blank ml HCl lagta hai neutralize karne mein

Sample mein: 25 ml KOH mein se KUCH fat ne consume kiya
  → Kam KOH bacha → V_sample ml HCl laga (V_sample < V_blank)

KOH consumed by fat = (V_blank - V_sample) ml of N-normal HCl
                     = (V_blank - V_sample) × N milliequivalents of KOH

In mg of KOH:         = (V_blank - V_sample) × N × 56.1 mg

Per gram of fat:       = [(V_blank - V_sample) × N × 56.1] / W mg KOH/g

∴ Saponification Value = [56.1 × N × (V_blank - V_sample)] / W
              </code></pre>

              <h5 class="font-semibold mt-3 text-sm">Har variable ka matlab:</h5>
              <ul class="list-disc list-inside text-sm space-y-1 mt-1">
                <li><strong>56.1</strong> = KOH ka molecular/equivalent weight in mg per milliequivalent. Ye universal constant hai — kabhi nahi change hoga</li>
                <li><strong>N</strong> = HCl ki normality (usually 0.5N). Agar 0.5N HCl use kiya to N = 0.5</li>
                <li><strong>V_blank</strong> = Blank mein kitne ml HCl lage. Ye = total KOH jo initially add kiya tha (kyunki kuch consume nahi hua)</li>
                <li><strong>V_sample</strong> = Sample mein kitne ml HCl lage. Ye = bacha hua KOH (fat ne kuch consume kar liya)</li>
                <li><strong>(V_blank - V_sample)</strong> = KOH jo fat ne consume kiya = saponification mein use hua</li>
                <li><strong>W</strong> = Fat sample weight in grams</li>
              </ul>

              <p class="text-sm mt-3"><strong>Example Calculation:</strong></p>
              <pre class="text-sm"><code>
Sample weight (W) = 2.05 g
HCl normality (N) = 0.5 N
Blank titre (V_blank) = 42.5 ml
Sample titre (V_sample) = 26.3 ml

SV = [56.1 × 0.5 × (42.5 - 26.3)] / 2.05
   = [56.1 × 0.5 × 16.2] / 2.05
   = [454.41] / 2.05
   = 221.7 mg KOH/g

Ghee ki range 220-235 → Ye sample PASS ✓
              </code></pre>

              <p class="text-sm mt-3"><strong>SV se molecular weight estimate:</strong></p>
              <pre class="text-sm"><code>
Average Molecular Weight of fat ≈ (3 × 56100) / SV

(3 isliye kyunki triglyceride mein 3 fatty acids hain, har ek ke liye 1 KOH chahiye)
(56100 = 56.1 × 1000 for unit conversion)

For ghee (SV=225): MW ≈ 168300/225 ≈ 748 g/mol
For groundnut oil (SV=192): MW ≈ 168300/192 ≈ 877 g/mol

Ghee ka MW kam hai kyunki short-chain acids hain → confirms SV theory
              </code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">SV (mg KOH/g)</th><th class="border p-2">Explanation</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Ghee</td><td class="border p-2">220-235</td><td class="border p-2">Short chain acids (C4-C6) → small molecules → zyada KOH</td></tr>
                <tr><td class="border p-2">Coconut oil</td><td class="border p-2">250-264</td><td class="border p-2">Medium chain (lauric C12) → sabse zyada SV</td></tr>
                <tr><td class="border p-2">Groundnut oil</td><td class="border p-2">188-196</td><td class="border p-2">Long chain (oleic C18) → kam KOH needed</td></tr>
                <tr><td class="border p-2">Soybean oil</td><td class="border p-2">189-195</td><td class="border p-2">Long chain acids</td></tr>
              </tbody>
            </table>
          `
        },
        {
          title: "Unsaponifiable Matter",
          purpose: "Fat mein non-fat components (sterols, hydrocarbons, vitamins) ka measure — mineral oil milawat detect karne mein bahut useful.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p><strong>Unsaponifiable matter</strong> = Fat ke wo components jo KOH se saponify (soap mein convert) NAHI hote lekin fat-soluble hain aur petroleum ether mein extract ho jaate hain.</p>
            <p class="mt-1">Isme aata hai:</p>
            <ul class="list-disc list-inside text-sm">
              <li><strong>Sterols</strong> — Cholesterol (animal fat), Phytosterols (plant fat)</li>
              <li><strong>Fat-soluble vitamins</strong> — A, D, E, K</li>
              <li><strong>Hydrocarbons</strong> — Squalene</li>
              <li><strong>Mineral oil</strong> (agar milawat ki gayi ho) — ye 100% unsaponifiable hai!</li>
            </ul>
            <p class="mt-2"><strong>Kyun important:</strong> Normal ghee mein ≤ 1.2% unsaponifiable matter hota hai. Agar mineral oil (liquid paraffin, kerosene) milaya jaaye to ye value bahut badh jaati hai kyunki mineral oil completely unsaponifiable hai — ye hydrocarbons hain, fatty acids nahi.</p>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>5 gram ghee ko 250 ml round bottom flask mein accurately weigh karein (W_sample).</li>
              <li>50 ml alcoholic KOH (0.5N) daalein aur reflux condenser laga kar 1 hour water bath par heat karein — saponification complete ho jayegi. <em>— Fat → soap + glycerol. Lekin sterols, vitamins, mineral oil react nahi karenge.</em></li>
              <li>Saponified mixture ko separating funnel mein transfer karein. Thoda warm water se flask dhoyein aur wo bhi funnel mein daalein.</li>
              <li><strong>Extraction:</strong> 50 ml petroleum ether (40-60°C fraction) daalein, stopper lagayein, gently mix karein (vigorous shaking se emulsion ban jayega), phase separation hone dein. <em>— Soap + glycerol = paani wali layer mein rehte hain. Unsaponifiable matter = petroleum ether layer mein jaata hai.</em></li>
              <li>Ether layer (upper) ko alag flask mein collect karein. Ye extraction 3 baar repeat karein (3 × 50 ml). <em>— 3 baar isliye taaki maximum unsaponifiable matter extract ho jaye (liquid-liquid extraction efficiency).</em></li>
              <li>Combined ether extracts ko 25 ml 0.5N aqueous KOH se 2-3 baar wash karein. <em>— Kuch soap bhi ether mein aa sakta hai — KOH wash se soap paani wali layer mein chala jaata hai, pure unsaponifiable matter ether mein bachta hai.</em></li>
              <li>Phir distilled water se wash karein jab tak washings alkaline na hon (phenolphthalein se check karein — no pink colour means alkali-free).</li>
              <li>Ether ko pre-weighed flask (W_flask) mein collect karein aur water bath par evaporate karein. <em>— Petroleum ether low boiling point (40-60°C) par evaporate ho jaata hai, residue reh jaata hai.</em></li>
              <li>Residue ko 80°C par 30 min oven mein dry karein, desiccator mein cool karein, aur weigh karein (W_flask+residue).</li>
              <li>Constant weight tak repeat karein.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula aur Factor Explanation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>% Unsaponifiable Matter = (W_residue / W_sample) × 100</code></pre>
              
              <p class="text-sm mt-2"><strong>Jahaan:</strong></p>
              <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>W_residue</strong> = (W_flask+residue) - (W_flask) = Sirf residue ka weight in grams. Ye unsaponifiable matter hai.</li>
                <li><strong>W_sample</strong> = Original ghee sample ka weight in grams (5 g)</li>
                <li><strong>× 100</strong> = Percentage mein convert karne ke liye</li>
              </ul>

              <p class="text-sm mt-3"><strong>Ye formula itna simple kyun hai?</strong></p>
              <p class="text-sm">Kyunki ye ek <strong>gravimetric method</strong> hai — titration nahi hai. Hum directly weight measure kar rahe hain. Koi chemical conversion factor ki zaroorat nahi. Jo bacha = unsaponifiable matter.</p>

              <p class="text-sm mt-3"><strong>Conceptual diagram:</strong></p>
              <pre class="text-sm"><code>
5 g Ghee
  │
  ├── Saponifiable part (98.8%+): Triglycerides → Soap + Glycerol
  │   → Paani mein dissolve → DISCARD
  │
  └── Unsaponifiable part (≤1.2%): Sterols, Vitamins, Hydrocarbons
      → Petroleum ether mein dissolve → COLLECT
      → Ether evaporate → WEIGH = W_residue
              </code></pre>

              <p class="text-sm mt-3"><strong>Example:</strong></p>
              <pre class="text-sm"><code>
W_sample = 5.00 g
W_flask = 85.234 g
W_flask+residue = 85.290 g

W_residue = 85.290 - 85.234 = 0.056 g

% Unsaponifiable = (0.056 / 5.00) × 100 = 1.12%

FSSAI limit ≤ 1.2% → PASS ✓
              </code></pre>

              <p class="text-sm mt-3"><strong>Agar mineral oil milaya ho:</strong></p>
              <pre class="text-sm"><code>
Suppose 10% mineral oil milaya ghee mein:
W_sample = 5.00 g (jisme 0.50 g mineral oil hai)

Mineral oil saponify nahi hota → poora 0.50 g ether mein aayega
Plus normal unsaponifiable (0.05 g) = total 0.55 g

% Unsaponifiable = (0.55/5.00) × 100 = 11.0%

Ye 1.2% se bahut zyada hai → ADULTERATION DETECTED! ✗
              </code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">Unsaponifiable Matter</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Pure Ghee</td><td class="border p-2">≤ 1.2%</td></tr>
                <tr><td class="border p-2">Vegetable oils</td><td class="border p-2">0.5 - 2.0%</td></tr>
                <tr><td class="border p-2">Mineral oil added ghee</td><td class="border p-2">>> 2% (bahut zyada)</td></tr>
              </tbody>
            </table>
            <p class="mt-2">FSSAI standard: Maximum <strong>1.2%</strong> unsaponifiable matter in ghee</p>
          `
        },
        {
          title: "Free Fatty Acids (FFA)",
          purpose: "Fat ke breakdown (hydrolysis) ki extent measure karta hai — freshness aur quality indicate karta hai. High FFA rancidity ki taraf le jaata hai.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Normal fat mein fatty acids glycerol se bonded (ester bond) hote hain — ye <strong>triglycerides</strong> hain. Jab fat hydrolysis hota hai (moisture, enzymes ya heat ki wajah se), to fatty acids glycerol se toot kar FREE ho jaate hain:</p>
            <pre class="text-sm bg-gray-50 p-2 rounded"><code>Triglyceride + H₂O → Diglyceride + Free Fatty Acid
(moisture/enzyme/heat se ye reaction hota hai)</code></pre>
            <p class="mt-2">Free fatty acids (FFA) directly NaOH se neutralize hote hain. Jitna zyada FFA, utna zyada NaOH lagega = utna zyada hydrolysis hua hai = fat PURANA ya kharab hai.</p>
            <p class="mt-1">Result <strong>oleic acid</strong> ke terms mein express karte hain (convention — oleic acid sabse common fatty acid hai fats mein).</p>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>~10 gram melted ghee accurately weigh karein ek conical flask mein. <em>— 10 gram isliye lete hain kyunki FFA usually kam hoti hai, zyada sample se accurate titre milta hai.</em></li>
              <li>50 ml neutralized warm ethanol daalein aur dissolve karein. <em>— Ethanol ko pehle NaOH se neutralize karte hain (phenolphthalein indicator ke saath titrate karke jab tak faint pink aaye). Agar ethanol neutral nahi hai to uski apni acidity FFA ke result mein add ho jayegi — galat answer aayega. Warm isliye ki ghee properly dissolve ho.</em></li>
              <li>Phenolphthalein indicator ki 2-3 drops daalein.</li>
              <li>0.1 N NaOH se titrate karein jab tak persistent faint pink colour aaye (30 seconds tak pink rahe). <em>— Ye direct titration hai, blank ki zaroorat nahi kyunki ethanol already neutralized hai.</em></li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula aur Factor Derivation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>% FFA (as oleic acid) = [V × N × 28.2] / W</code></pre>
              
              <h5 class="font-semibold mt-3 text-sm">Factor 28.2 kahan se aaya? Complete Derivation:</h5>
              
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <tbody>
                  <tr><td class="border p-2 bg-gray-50 font-semibold w-1/3">Oleic Acid ka formula</td><td class="border p-2">C₁₇H₃₃COOH = C₁₈H₃₄O₂</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Molecular Weight</td><td class="border p-2">C: 18×12 = 216, H: 34×1 = 34, O: 2×16 = 32 → Total = <strong>282 g/mol</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Oleic acid monobasic hai</td><td class="border p-2">Sirf ek -COOH group hai → n-factor = 1 → Eq.Wt = 282/1 = <strong>282 g/eq</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">Reaction</td><td class="border p-2">C₁₇H₃₃COOH + NaOH → C₁₇H₃₃COONa + H₂O (1:1 ratio)</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">1 ml of 1N NaOH</td><td class="border p-2">= 1 meq = neutralizes 282/1000 g = <strong>0.282 g oleic acid</strong></td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">% ke liye ×100</td><td class="border p-2">0.282 × 100 = <strong>28.2</strong></td></tr>
                </tbody>
              </table>

              <p class="text-sm mt-3"><strong>Full derivation:</strong></p>
              <pre class="text-sm"><code>
FFA (RCOOH) + NaOH → RCOONa + H₂O

meq of FFA = V × N (V = ml of NaOH, N = normality)

Grams of FFA (as oleic) = V × N × (282/1000)
                         = V × N × 0.282 grams

% FFA = (grams of FFA / sample weight) × 100
      = [V × N × 0.282 / W] × 100
      = [V × N × 28.2] / W
              </code></pre>

              <h5 class="font-semibold mt-3 text-sm">Har variable:</h5>
              <ul class="list-disc list-inside text-sm space-y-1">
                <li><strong>V</strong> = ml of NaOH used in titration (direct titre, no blank)</li>
                <li><strong>N</strong> = NaOH ki normality (usually 0.1N)</li>
                <li><strong>28.2</strong> = Oleic acid equivalent weight (282) × 100/1000. Ye oleic acid specific constant hai — agar doosre acid mein express karein to factor change hoga</li>
                <li><strong>W</strong> = Sample weight in grams</li>
              </ul>

              <p class="text-sm mt-3"><strong>Agar doosre fatty acid mein express karein:</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm">
                <thead><tr class="bg-gray-100"><th class="border p-2">Acid</th><th class="border p-2">Mol.Wt</th><th class="border p-2">Factor (MW×100/1000)</th><th class="border p-2">Kab use hota hai</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Oleic acid</td><td class="border p-2">282</td><td class="border p-2">28.2</td><td class="border p-2">Ghee, most oils</td></tr>
                  <tr><td class="border p-2">Lauric acid</td><td class="border p-2">200</td><td class="border p-2">20.0</td><td class="border p-2">Coconut oil</td></tr>
                  <tr><td class="border p-2">Palmitic acid</td><td class="border p-2">256</td><td class="border p-2">25.6</td><td class="border p-2">Palm oil</td></tr>
                  <tr><td class="border p-2">Butyric acid</td><td class="border p-2">88</td><td class="border p-2">8.8</td><td class="border p-2">Special cases</td></tr>
                </tbody>
              </table>

              <p class="text-sm mt-3"><strong>FFA aur Acid Value ka relationship:</strong></p>
              <pre class="text-sm"><code>
Acid Value = mg of KOH to neutralize FFA in 1 g fat
           = [V × N × 56.1] / W

% FFA (oleic) = Acid Value × (282 / 56.1) / 10 = Acid Value × 0.503

ya ulta: Acid Value = % FFA × 1.99
              </code></pre>
              <p class="text-sm"><strong>0.503 kahan se aaya:</strong> (Oleic eq.wt)/(KOH eq.wt × 10) = 282/(56.1×10) = 282/561 = 0.5027 ≈ 0.503</p>

              <p class="text-sm mt-3"><strong>Example Calculation:</strong></p>
              <pre class="text-sm"><code>
Sample weight = 10.05 g
NaOH normality = 0.1 N
Titre = 1.42 ml

% FFA = [1.42 × 0.1 × 28.2] / 10.05
      = [4.0044] / 10.05
      = 0.40%

FSSAI limit: Max 3.0%. Fresh ghee typically < 0.5% → Ye fresh ghee hai ✓
              </code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">FSSAI Standard:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Category</th><th class="border p-2">FFA (% as oleic)</th><th class="border p-2">Interpretation</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">FSSAI Maximum</td><td class="border p-2">3.0%</td><td class="border p-2">Legal limit</td></tr>
                <tr><td class="border p-2">Agmark Special Grade</td><td class="border p-2">≤ 1.4%</td><td class="border p-2">Premium quality</td></tr>
                <tr><td class="border p-2">Fresh ghee</td><td class="border p-2">< 0.5%</td><td class="border p-2">Excellent freshness</td></tr>
                <tr><td class="border p-2">Rancid ghee</td><td class="border p-2">> 3.0%</td><td class="border p-2">Rejected — off-flavour, bad smell</td></tr>
              </tbody>
            </table>
          `
        },
        {
          title: "Moisture / Volatile Matter",
          purpose: "Ghee mein paani aur volatile compounds ki quantity — shelf life, quality aur adulteration ke liye important parameter.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Ghee ko 105°C par heat karte hain — paani (boiling point 100°C) aur koi bhi volatile compound evaporate ho jaata hai. Weight loss = moisture + volatile matter. Ye ek simple <strong>gravimetric method</strong> hai (weight measurement par based).</p>
            <p class="mt-2"><strong>Kyun important hai:</strong></p>
            <ul class="list-disc list-inside text-sm">
              <li>Zyada moisture → microbial growth → ghee kharab hogi jaldi</li>
              <li>Zyada moisture → weight ke hisaab se customer ko kam ghee milta hai</li>
              <li>Paani milawat detect ho sakti hai</li>
              <li>FSSAI limit: Maximum 0.3%</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>Ek clean flat-bottom aluminium/porcelain dish ko 105°C par 1 hour oven mein rakhein, desiccator mein cool karein, weigh karein = <strong>W1</strong>. <em>— Pehle se dry karna zaroori hai taaki dish ki apni moisture result mein na aaye. Desiccator mein cool isliye karte hain kyunki hot dish moisture absorb karegi atmosphere se.</em></li>
              <li>~10 gram melted ghee accurately dish mein weigh karein. Dish + ghee ka weight = <strong>W2</strong>.</li>
              <li>Dish ko 105°C oven mein rakhein 2 hours ke liye (ya jab tak bubbling completely band ho jaye). <em>— Bubbling = paani evaporate ho raha hai. Jab bubbling band, matlab paani nikal gaya.</em></li>
              <li>Desiccator mein cool karein (20-30 min), weigh karein = <strong>W3</strong>.</li>
              <li>Wapas oven mein 30 min rakhein, cool karein, weigh karein. Agar weight constant hai (previous se ±0.001 g ke andar) to final weight = W3. Nahi to repeat karein. <em>— "Constant weight" ensure karta hai ki saara moisture nikal gaya.</em></li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula aur Factor Explanation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
              
              <h5 class="font-semibold mt-3 text-sm">Har Factor kya hai aur kahan se aaya:</h5>
              
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <tbody>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">W1</td><td class="border p-2">Empty dry dish ka weight (grams). Ye "tare" weight hai — dish ka contribution remove karne ke liye.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">W2</td><td class="border p-2">Dish + Sample (before drying). Ye starting weight hai.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">W3</td><td class="border p-2">Dish + Sample (after drying at 105°C). Ye ending weight hai — moisture ud gaya.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">W2 - W1</td><td class="border p-2">= Pure sample weight (ghee ka weight). Dish ka weight cancel ho gaya.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">W2 - W3</td><td class="border p-2">= Weight LOSS = Jo evaporate ho gaya = Moisture + Volatile matter</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">× 100</td><td class="border p-2">= Percentage mein convert karne ke liye</td></tr>
                </tbody>
              </table>

              <p class="text-sm mt-3"><strong>Visual representation:</strong></p>
              <pre class="text-sm"><code>
BEFORE DRYING (W2)              AFTER DRYING (W3)
┌──────────────────┐           ┌──────────────────┐
│ ☁ Moisture ☁    │    105°C  │                  │
│   (W2 - W3)      │  ──────→ │ (moisture ud gaya)│
│                  │   2 hrs   │                  │
│ 🧈 Dry Fat 🧈   │           │ 🧈 Dry Fat 🧈   │
│   (W3 - W1)      │           │   (W3 - W1)      │
├──────────────────┤           ├──────────────────┤
│ 🍽 Dish (W1)     │           │ 🍽 Dish (W1)     │
└──────────────────┘           └──────────────────┘

Weight loss = W2 - W3 (moisture gone!)
Sample weight = W2 - W1 (total sample)
              </code></pre>

              <p class="text-sm mt-3"><strong>Kyun 105°C?</strong></p>
              <ul class="list-disc list-inside text-sm">
                <li>Paani ka boiling point = 100°C</li>
                <li>105°C ensures ki saara paani definitely nikal jaye (thoda above boiling point)</li>
                <li>Bahut zyada temperature (>120°C) se fat decompose/oxidize ho sakta hai → galat weight loss</li>
                <li>105°C = sweet spot — paani nikle, fat safe rahe</li>
              </ul>

              <p class="text-sm mt-3"><strong>Example Calculation:</strong></p>
              <pre class="text-sm"><code>
W1 (empty dish) = 45.236 g
W2 (dish + ghee before drying) = 55.482 g
W3 (dish + ghee after drying) = 55.456 g

Sample weight = W2 - W1 = 55.482 - 45.236 = 10.246 g
Weight loss = W2 - W3 = 55.482 - 55.456 = 0.026 g

% Moisture = (0.026 / 10.246) × 100 = 0.254%

FSSAI limit: Max 0.3% → PASS ✓
              </code></pre>

              <p class="text-sm mt-3"><strong>Desiccator kyun use karte hain?</strong></p>
              <p class="text-sm">Hot sample jab atmosphere mein cool hota hai to hawa ki moisture absorb karta hai. Desiccator mein silica gel ya CaCl₂ hota hai jo moisture absorb karta hai — dry environment mein sample cool hota hai bina moisture gain kiye.</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">FSSAI Standard:</h4>
            <p>Maximum <strong>0.3%</strong> moisture in ghee. Fresh, well-prepared ghee mein usually 0.1-0.2% hoti hai.</p>
          `
        },
        {
          title: "Baudouin Test (Vanaspati Detection)",
          purpose: "Ghee mein vanaspati (hydrogenated vegetable oil) milawat ka pata lagata hai. Ye ek qualitative colour test hai.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>FSSAI rule ke under, India mein banne wali <strong>vanaspati</strong> (hydrogenated vegetable oil) mein <strong>5% sesame (til) oil</strong> milana mandatory hai — taaki vanaspati ko ghee se distinguish kar sakein.</p>
            <p class="mt-1">Sesame oil mein ek unique compound hota hai: <strong>Sesamol</strong> (3,4-methylenedioxyphenol). Ye compound <strong>furfural</strong> ke saath acidic medium (conc. HCl) mein react karke <strong>PINK/RED colour</strong> ka condensation product banata hai.</p>
            <p class="mt-1">Pure ghee mein sesamol nahi hota, isliye ye test negative aata hai. Agar ghee mein vanaspati milaya gaya hai to sesame oil automatic aayega → test POSITIVE.</p>

            <h4 class="font-semibold mt-4 mb-2">Chemical Reaction:</h4>
            <div class="bg-gray-50 border rounded p-3 mt-2 text-sm">
              <pre><code>Sesamol + Furfural + HCl → PINK/RED coloured condensation product

Sesamol (sesame oil mein):         Furfural:
    OH                               CHO
    |                                 |
    [benzene ring]—O                  [furan ring]
                    \                 
                     CH₂              
                    /                 
    [benzene ring]—O                  

Conc. HCl = Catalyst + acidic medium provide karta hai
Result = Crimson pink/red colour (condensation product)</code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>5 ml melted ghee ek clean, dry test tube mein lein.</li>
              <li>5 ml concentrated HCl daalein carefully. <em>— HCl acidic medium provide karta hai jo reaction ke liye zaroori hai. Conc. HCl very corrosive hai — carefully handle karein.</em></li>
              <li>0.4 ml 2% furfural solution daalein (FRESHLY prepared in alcohol). <em>— Furfural purana hone par polymerize ho jaata hai aur dark ho jaata hai — isliye fresh solution zaroori hai. 2% = 2 g furfural in 100 ml ethanol.</em></li>
              <li>Test tube ko 2 minute ke liye vigorously shake karein (rubber stopper laga kar). <em>— Vigorous shaking se ghee aur acid layer ka contact maximum hota hai — reaction properly ho sake.</em></li>
              <li>Test tube stand mein rakh kar layers separate hone dein (2-3 minutes).</li>
              <li>Lower (acid) layer ka colour observe karein.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Result Interpretation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <p class="text-sm"><strong>Ye qualitative test hai — koi mathematical formula nahi hai. Result colour observation par based hai:</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Observation (Acid Layer)</th><th class="border p-2">Interpretation</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2 text-red-600 font-semibold">Pink ya Red colour</td><td class="border p-2">Vanaspati PRESENT — Ghee ADULTERATED hai (sesame oil detected)</td></tr>
                  <tr><td class="border p-2 text-green-600 font-semibold">No colour / pale yellow</td><td class="border p-2">Vanaspati ABSENT — Pure ghee (no sesame oil)</td></tr>
                </tbody>
              </table>
              <p class="text-sm mt-2"><strong>Sensitivity:</strong> Ye test approximately 5% vanaspati milawat tak detect kar sakta hai. Kyunki vanaspati mein 5% sesame oil hai, isliye 5% vanaspati milane par effectively 0.25% sesame oil present hoga — sufficient for detection.</p>
              <p class="text-sm mt-2"><strong>False Positive kab ho sakta hai?</strong> Agar ghee til ke tel mein fry karke banayi gayi ho (rare but possible), ya agar separately sesame oil milaya gaya ho. Isliye ye test specifically vanaspati ka conclusive nahi, balki sesame oil ka detection test hai.</p>
              <p class="text-sm mt-2"><strong>FSSAI Logic:</strong> Vanaspati bahut sasti hai ghee ke comparison mein. Log profit ke liye vanaspati milaate hain. FSSAI ne vanaspati mein sesame oil milana mandatory kiya taaki ye adulteration detect ho sake — bahut clever regulatory strategy!</p>
            </div>
          `
        },
        {
          title: "Fiehe's Test (for Vegetable Fat)",
          purpose: "Ghee mein vegetable fat/oil ya vanaspati milawat ka ek aur confirmatory colour test — Liebermann-Burchard reaction par based.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Vegetable oils mein <strong>phytosterols</strong> hote hain (β-sitosterol, stigmasterol, campesterol — ye plant-specific sterols hain). Animal fats (ghee) mein <strong>cholesterol</strong> hota hai.</p>
            <p class="mt-1">Jab sterols ko <strong>acetic anhydride + conc. H₂SO₄</strong> ke saath react karate hain, to phytosterols ek characteristic <strong>GREEN/BLUE-GREEN</strong> colour dete hain (Liebermann-Burchard reaction). Cholesterol bhi colour deta hai lekin wo initial green ke baad jaldi brownish ho jaata hai, aur intensity kam hoti hai.</p>

            <h4 class="font-semibold mt-4 mb-2">Chemical Reaction (Liebermann-Burchard):</h4>
            <div class="bg-gray-50 border rounded p-3 mt-2 text-sm">
              <pre><code>Phytosterol + Acetic Anhydride + Conc. H₂SO₄ 
→ Dehydration → Conjugated unsaturated sterol derivative
→ GREEN/BLUE-GREEN colour

Step 1: H₂SO₄ acts as dehydrating agent
        Sterol → loses water → forms unsaturated ring system

Step 2: Conjugated double bonds form
        → Absorb specific wavelength of visible light
        → GREEN colour dikhai deta hai

Step 3: Acetic anhydride provides acetylation medium
        → Stabilizes the colour reaction</code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>5 ml melted ghee ko ek dry test tube mein lein.</li>
              <li>5 ml acetic anhydride daalein aur mix karein. <em>— Acetic anhydride moisture-sensitive hai. Test tube bilkul dry honi chahiye, nahi to acetic anhydride paani se react karega (acetic acid banega) aur test fail hoga.</em></li>
              <li>1-2 drops conc. H₂SO₄ carefully test tube ke side se add karein (DIRECTLY mat daalein — bahut exothermic reaction hai). <em>— Conc. H₂SO₄ bahut dangerous hai — skin par girne se severe burns hote hain. Very carefully handle karein.</em></li>
              <li>Gently mix karein aur colour observe karein immediately aur 5 minute ke baad.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Result Interpretation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <p class="text-sm"><strong>Ye qualitative colour test hai — koi formula nahi:</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Colour Observed</th><th class="border p-2">Interpretation</th><th class="border p-2">Kyun?</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2 text-green-600 font-semibold">Green / Blue-green</td><td class="border p-2">Vegetable fat/oil PRESENT</td><td class="border p-2">Phytosterols (β-sitosterol) ki reaction → intense green colour</td></tr>
                  <tr><td class="border p-2 font-semibold">Brown / no green</td><td class="border p-2">Pure milk fat</td><td class="border p-2">Cholesterol ki reaction → transient greenish → quickly turns brown</td></tr>
                </tbody>
              </table>
              <p class="text-sm mt-2"><strong>Limitation:</strong> Ye test semi-quantitative hai — green colour ki intensity se milawat ki approximate extent pata chal sakti hai, lekin exact percentage nahi. Cholesterol bhi slight green de sakta hai initially — isliye observation time important hai. Phytosterol ka green PERSISTENT rehta hai, cholesterol ka GREEN TRANSIENT hota hai.</p>
              <p class="text-sm mt-2"><strong>Baudouin vs Fiehe's Test:</strong></p>
              <ul class="list-disc list-inside text-sm">
                <li>Baudouin test sesame oil detect karta hai → specifically vanaspati ke liye</li>
                <li>Fiehe's test phytosterols detect karta hai → ANY vegetable oil/fat ke liye (refined oils, crude oils, vanaspati sab)</li>
                <li>Dono complementary tests hain — ek se doosre ki confirmation hoti hai</li>
              </ul>
            </div>
          `
        },
        {
          title: "Mineral Oil ka Detection (Holde's Test)",
          purpose: "Non-edible mineral oils (liquid paraffin, kerosene) ki milawat detect karta hai — ye bahut dangerous adulteration hai.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p><strong>Mineral oil</strong> = Petroleum se bane hydrocarbons (liquid paraffin, white oil, kerosene). Ye fatty acids ke esters NAHI hain — ye simple hydrocarbons (CₙH₂ₙ₊₂) hain.</p>
            <p class="mt-2"><strong>Key difference:</strong></p>
            <ul class="list-disc list-inside text-sm">
              <li><strong>Edible fat/oil</strong> (triglyceride) = Ester of glycerol + fatty acids → KOH se react karke SOAP banta hai (saponification) → soap PAANI mein dissolve hota hai</li>
              <li><strong>Mineral oil</strong> = Hydrocarbon → KOH se react NAHI karta (saponify nahi hota) → paani mein dissolve NAHI hota → TURBIDITY/oily droplets ke roop mein dikhai deta hai</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">Chemical Basis:</h4>
            <div class="bg-gray-50 border rounded p-3 mt-2 text-sm">
              <pre><code>Normal Fat + KOH → SOAP (water soluble) + Glycerol (water soluble)
  (saponification reaction)
  
  R-COO-CH₂           CH₂-OH
  |                    |
  R-COO-CH   + 3KOH → CH-OH    + 3R-COOK
  |                    |          (soap - dissolves in water)
  R-COO-CH₂           CH₂-OH
  (triglyceride)       (glycerol)

Mineral Oil + KOH → NO REACTION (kuch nahi hota!)
  
  CₙH₂ₙ₊₂ + KOH → CₙH₂ₙ₊₂ (unchanged!)
  (hydrocarbon)       (remains as oily droplets)

Jab hot water daalte hain:
  Soap → dissolves → CLEAR solution
  Mineral oil → does not dissolve → TURBIDITY / floating droplets</code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>1 gram ghee ko 250 ml round bottom flask mein lein.</li>
              <li>25 ml 4% alcoholic KOH daalein (4 g KOH in 100 ml ethanol). <em>— Alcoholic KOH isliye kyunki fat alcohol mein dissolve hota hai, paani mein nahi. 4% sufficient hai complete saponification ke liye.</em></li>
              <li>Reflux condenser laga kar 30 minute water bath par heat karein. <em>— 30 minute mein saara fat saponify ho jaata hai. Mineral oil wahi ka wahi rehta hai.</em></li>
              <li>100 ml hot distilled water (70-80°C) daalein aur gently mix karein. <em>— Hot water mein soap zyada easily dissolve hota hai.</em></li>
              <li>Solution ko observe karein.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Result Interpretation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <p class="text-sm"><strong>Ye qualitative test hai — koi formula nahi:</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Observation</th><th class="border p-2">Interpretation</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2 text-red-600 font-semibold">Turbidity / oily droplets floating</td><td class="border p-2">Mineral oil PRESENT — dangerous adulteration!</td></tr>
                  <tr><td class="border p-2 text-green-600 font-semibold">Completely clear solution</td><td class="border p-2">Mineral oil ABSENT — pure ghee (saara fat soap ban gaya aur dissolve ho gaya)</td></tr>
                </tbody>
              </table>
              <p class="text-sm mt-2"><strong>Kyun dangerous hai mineral oil milawat?</strong></p>
              <ul class="list-disc list-inside text-sm">
                <li>Mineral oil body mein digest nahi hota (lipase enzyme ise break nahi kar sakta)</li>
                <li>Intestine aur liver mein accumulate hota hai</li>
                <li>Laxative effect hota hai (diarrhoea)</li>
                <li>Long-term use se liver damage ho sakta hai</li>
                <li>FSSAI ke under ye serious food adulteration offence hai</li>
              </ul>
              <p class="text-sm mt-2"><strong>Confirmation:</strong> Unsaponifiable matter test se bhi confirm hota hai — mineral oil milane se unsaponifiable matter > 1.2% ho jaata hai.</p>
            </div>
          `
        },
        {
          title: "Peroxide Value (PV)",
          purpose: "Fat mein oxidative rancidity ke early stages measure karta hai — fat ki freshness aur storage stability ka important indicator.",
          reference: "A.O.A.C 965.33",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Jab fat oxygen ke saath react karta hai (air exposure, light, heat se), to unsaturated fatty acids ke double bonds par <strong>peroxides</strong> (R-O-O-H) bante hain — ye <strong>primary oxidation products</strong> hain.</p>
            <p class="mt-1">Ye peroxides <strong>potassium iodide (KI)</strong> se react karke <strong>iodine (I₂)</strong> release karte hain. Released I₂ ko <strong>sodium thiosulfate (Na₂S₂O₃)</strong> se titrate karte hain. Jitna zyada peroxide, utna zyada I₂ release, utna zyada Na₂S₂O₃ lagega.</p>
            <p class="mt-1">Result = <strong>milliequivalents of peroxide oxygen per kilogram of fat</strong> (meq O₂/kg).</p>

            <h4 class="font-semibold mt-4 mb-2">Chemical Reactions — Step by Step:</h4>
            <div class="bg-gray-50 border rounded p-3 mt-2 text-sm">
              <p><strong>Step 1 — Oxidation (ye pehle se ho chuka hai storage ke during):</strong></p>
              <pre><code>R-CH=CH-R' + O₂ → R-CH(OOH)-CH-R'  (lipid peroxide/hydroperoxide)
(unsaturated fat)   (oxygen)   (peroxide — ye measure karna hai)</code></pre>
              
              <p class="mt-2"><strong>Step 2 — Peroxide + KI → Iodine release:</strong></p>
              <pre><code>R-OOH + 2KI + 2HCl → R-OH + I₂ + 2KCl + H₂O
(peroxide) + (KI)  → (alcohol) + (free iodine) — iodine brown colour deta hai</code></pre>
              <p class="text-xs">Acidic medium (acetic acid) mein ye reaction hota hai. Jitni zyada peroxide, utni zyada I₂ release.</p>

              <p class="mt-2"><strong>Step 3 — Titration (I₂ ka measurement):</strong></p>
              <pre><code>I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆
(iodine) + (thiosulfate) → products

Starch indicator: I₂ ke saath BLUE colour deta hai
Endpoint: Blue → COLOURLESS (jab saara I₂ react ho jaata hai)</code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>~5 gram ghee accurately weigh karein ek 250 ml glass-stoppered conical flask mein.</li>
              <li>30 ml acetic acid : chloroform (3:2 v/v) mixture daalein aur dissolve karein. <em>— Chloroform fat ko dissolve karta hai. Acetic acid acidic medium provide karta hai jo reaction ke liye zaroori hai. 3:2 ratio = 18 ml acetic acid + 12 ml chloroform.</em></li>
              <li>0.5 ml freshly prepared saturated KI solution daalein. <em>— Saturated KI mein excess KI hota hai taaki saari peroxide se react ho sake. FRESHLY prepared isliye kyunki purana KI solution oxidize ho ke I₂ bana leta hai → false high results.</em></li>
              <li>Exactly 1 minute dark mein rakhein, occasionally shake karein. <em>— Dark mein isliye kyunki light se KI directly oxidize ho kar I₂ release kar sakta hai (bina peroxide ke) → false high result. 1 minute = standardized reaction time.</em></li>
              <li>30 ml distilled water daalein. <em>— Reaction stop karna aur titration ke liye dilute karna.</em></li>
              <li>Starch indicator (1% solution) ki 0.5-1 ml daalein. Solution BLUE ho jayega agar I₂ present hai.</li>
              <li>0.01 N ya 0.1 N Na₂S₂O₃ se titrate karein jab tak blue colour COMPLETELY disappear ho jaye aur solution colourless/pale yellow rahe. <em>— 0.01N use karte hain jab PV low expected ho (fresh ghee). 0.1N use karte hain jab PV high expected ho (rancid fat).</em></li>
              <li>Blank bhi run karein (same procedure bina ghee ke). <em>— Reagents ki background I₂ release check karne ke liye. Ideally blank 0.1 ml se kam hona chahiye.</em></li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula aur Factor Derivation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>PV (meq/kg) = [(S - B) × N × 1000] / W</code></pre>
              
              <h5 class="font-semibold mt-3 text-sm">Har Factor ki Detailed Explanation:</h5>
              
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <tbody>
                  <tr><td class="border p-2 bg-gray-50 font-semibold w-1/4">S</td><td class="border p-2"><strong>Sample titre</strong> = ml of Na₂S₂O₃ used for sample titration. Zyada titre = zyada I₂ released = zyada peroxide thi sample mein.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">B</td><td class="border p-2"><strong>Blank titre</strong> = ml of Na₂S₂O₃ used for blank (bina fat ke). Ye reagents ki apni I₂ release correct karta hai. Ideally < 0.1 ml.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">(S - B)</td><td class="border p-2"><strong>Net titre</strong> = Sirf fat ki peroxides ki wajah se kitna Na₂S₂O₃ laga. Blank ki interference remove ho gayi.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">N</td><td class="border p-2"><strong>Na₂S₂O₃ ki normality</strong> (0.01N ya 0.1N). Concentration factor — exact amount of thiosulfate per ml.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">1000</td><td class="border p-2"><strong>Grams to kilograms conversion</strong>. PV ki unit meq/KG hai, lekin sample GRAMS mein weigh kiya. 1 kg = 1000 g, isliye × 1000.</td></tr>
                  <tr><td class="border p-2 bg-gray-50 font-semibold">W</td><td class="border p-2"><strong>Sample weight in grams</strong></td></tr>
                </tbody>
              </table>

              <p class="text-sm mt-3"><strong>Complete Derivation:</strong></p>
              <pre class="text-sm"><code>
Peroxides + KI → I₂ released
I₂ + Na₂S₂O₃ → titrated

I₂ + 2Na₂S₂O₃ → products
(1 mole I₂ = 2 equivalents, 1 mole Na₂S₂O₃ = 1 equivalent)
So: 1 ml of 1N Na₂S₂O₃ ≡ 1 meq of I₂ ≡ 1 meq of peroxide

Net meq of peroxide = (S - B) × N milliequivalents

PV = meq per KILOGRAM of fat

= [(S - B) × N] meq    ÷    W grams    ×    1000 g/kg

= [(S - B) × N × 1000] / W    meq/kg
              </code></pre>

              <p class="text-sm mt-3"><strong>Kyun 1000 multiply karte hain — simple explanation:</strong></p>
              <pre class="text-sm"><code>
Agar W = 5 grams aur total meq = 0.031

Per gram: 0.031/5 = 0.0062 meq/g
Per kilogram: 0.0062 × 1000 = 6.2 meq/kg

Same answer: (0.031 × 1000)/5 = 31/5 = 6.2 meq/kg

Isliye formula mein × 1000 hai — unit conversion grams se kilograms mein
              </code></pre>

              <p class="text-sm mt-3"><strong>Example Calculation:</strong></p>
              <pre class="text-sm"><code>
Sample weight (W) = 5.02 g
Na₂S₂O₃ normality (N) = 0.01 N
Sample titre (S) = 3.20 ml
Blank titre (B) = 0.10 ml

PV = [(3.20 - 0.10) × 0.01 × 1000] / 5.02
   = [3.10 × 0.01 × 1000] / 5.02
   = [31.0] / 5.02
   = 6.17 meq/kg

FSSAI limit for ghee ≤ 1.0 meq/kg → Ye ghee RANCID hai ✗
              </code></pre>

              <p class="text-sm mt-3"><strong>Example 2 (Fresh ghee):</strong></p>
              <pre class="text-sm"><code>
W = 5.00 g, N = 0.01 N, S = 0.45 ml, B = 0.05 ml

PV = [(0.45 - 0.05) × 0.01 × 1000] / 5.00
   = [0.40 × 0.01 × 1000] / 5.00
   = 4.0 / 5.00
   = 0.80 meq/kg → Fresh ghee, PASS ✓
              </code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">FSSAI Standards:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Category</th><th class="border p-2">PV (meq/kg)</th><th class="border p-2">Meaning</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Fresh ghee (FSSAI)</td><td class="border p-2">≤ 1.0</td><td class="border p-2">Excellent — minimal oxidation</td></tr>
                <tr><td class="border p-2">Agmark limit</td><td class="border p-2">≤ 3.0</td><td class="border p-2">Acceptable</td></tr>
                <tr><td class="border p-2">Moderately oxidized</td><td class="border p-2">5-10</td><td class="border p-2">Beginning of rancidity</td></tr>
                <tr><td class="border p-2">Rancid</td><td class="border p-2">> 10</td><td class="border p-2">Off-flavour, unhealthy — reject</td></tr>
              </tbody>
            </table>
          `
        },
        {
          title: "Modified Kirschner Value",
          purpose: "Specifically butyric acid ka measure — ghee ki authenticity ka sabse reliable aur specific chemical indicator. Butyric acid sirf milk fat mein hota hai.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p><strong>Kirschner value</strong> specifically <strong>butyric acid</strong> (C4) ko measure karta hai jo exclusively milk fat mein paaya jaata hai. Vegetable oils mein butyric acid ZERO hota hai. Isliye ye ghee ke adulteration detection ka <strong>sabse specific test</strong> hai.</p>
            
            <p class="mt-2"><strong>RM Value vs Kirschner Value — kya fark hai?</strong></p>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Parameter</th><th class="border p-2">RM Value</th><th class="border p-2">Kirschner Value</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Kya measure karta hai</td><td class="border p-2">ALL water-soluble volatile acids (butyric + caproic + formic)</td><td class="border p-2">ONLY butyric acid (silver salt separation se isolate)</td></tr>
                <tr><td class="border p-2">Specificity</td><td class="border p-2">Less specific</td><td class="border p-2">Highly specific for milk fat</td></tr>
                <tr><td class="border p-2">Extra step</td><td class="border p-2">Simple distillation + titration</td><td class="border p-2">Silver salt precipitation step added</td></tr>
              </tbody>
            </table>

            <h4 class="font-semibold mt-4 mb-2">Silver Salt Separation ka Concept:</h4>
            <div class="bg-yellow-50 border border-yellow-200 rounded p-3 mt-2 text-sm">
              <p><strong>Kyun silver salt use karte hain?</strong></p>
              <p class="mt-1">RM value distillate mein butyric acid (C4) ke alaawa caproic acid (C6) bhi hota hai. Hume sirf butyric acid chahiye. Silver salt ka trick ye hai:</p>
              <ul class="list-disc list-inside mt-1 space-y-1">
                <li>Butyric acid ka silver salt (CH₃CH₂CH₂COOAg) → WATER SOLUBLE hai</li>
                <li>Caproic acid ka silver salt (C₅H₁₁COOAg) → WATER INSOLUBLE hai (precipitate ban jaata hai)</li>
                <li>Higher acids ke silver salts bhi insoluble hain</li>
              </ul>
              <p class="mt-2">Isliye jab AgNO₃ daalte hain:</p>
              <pre><code>Butyric acid → Silver butyrate (SOLUBLE → stays in solution)
Caproic acid → Silver caproate (INSOLUBLE → precipitates out → filter out)
Higher acids → Silver salts (INSOLUBLE → precipitates out)</code></pre>
              <p class="mt-1">Filter karne ke baad jo solution bachta hai usme sirf butyric acid ka silver salt hai. Use acidify karke butyric acid free karte hain, distill karte hain, aur titrate karte hain = KIRSCHNER VALUE.</p>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li><strong>Step 1-5:</strong> Exactly same as RM value test — 5g ghee saponify karein, acidify karein, 110 ml distill karein, filter karein.</li>
              <li><strong>Step 6 — Neutralization:</strong> 100 ml filtrate ko 0.1N Ba(OH)₂ ya NaOH se exactly neutralize karein (phenolphthalein — faint pink endpoint).</li>
              <li><strong>Step 7 — Silver salt precipitation:</strong> Neutralized solution mein excess AgNO₃ (silver nitrate) solution daalein. <em>— Caproic acid ka silver salt precipitate ho jayega (white precipitate), butyric acid ka silver salt dissolved rehega.</em></li>
              <li><strong>Step 8 — Filtration:</strong> Precipitate filter karein. Clear filtrate collect karein — isme sirf silver butyrate hai.</li>
              <li><strong>Step 9 — Acidification aur Re-distillation:</strong> Filtrate ko dilute H₂SO₄ se acidify karein (butyric acid free hoga). 110 ml distill karein again.</li>
              <li><strong>Step 10 — Titration:</strong> Distillate ka 100 ml lein, 0.1N NaOH se titrate karein = Kirschner Value.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Formula:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <pre class="text-sm"><code>Kirschner Value = 1.1 × V</code></pre>
              <p class="text-sm mt-1">Jahaan V = ml of 0.1N NaOH used to titrate 100 ml of the SECOND distillate (silver-soluble fraction)</p>
              
              <p class="text-sm mt-2"><strong>Factor 1.1</strong> = same reason as RM value (110 ml distill kiya, 100 ml titrate kiya → 110/100 = 1.1 correction)</p>

              <p class="text-sm mt-3"><strong>RM aur Kirschner ka relationship:</strong></p>
              <pre class="text-sm"><code>
RM Value = Butyric acid + Caproic acid + other water-soluble volatile acids
Kirschner Value = ONLY Butyric acid (after silver salt separation)

Isliye: Kirschner Value < RM Value (always)

For pure cow ghee:
  RM Value: 24-34
  Kirschner Value: 19-27
  Difference = mainly caproic acid ka contribution
              </code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Expected Values aur Interpretation:</h4>
            <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
              <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">Kirschner Value</th><th class="border p-2">Explanation</th></tr></thead>
              <tbody>
                <tr><td class="border p-2">Pure cow ghee</td><td class="border p-2">19-27</td><td class="border p-2">High butyric acid content</td></tr>
                <tr><td class="border p-2">Pure buffalo ghee</td><td class="border p-2">19-25</td><td class="border p-2">Slightly less butyric acid than cow ghee</td></tr>
                <tr><td class="border p-2">Vegetable oil</td><td class="border p-2">~0</td><td class="border p-2">NO butyric acid present</td></tr>
                <tr><td class="border p-2">Ghee + 20% veg oil</td><td class="border p-2">~15-20</td><td class="border p-2">Proportionally reduced (dilution effect)</td></tr>
              </tbody>
            </table>
            <p class="mt-2 text-sm"><strong>Adulteration detection:</strong> Agar 20% vegetable oil milaya ghee mein, to butyric acid bhi 20% dilute hoga → Kirschner value ~20% kam ho jayegi. Ye test <strong>proportional response</strong> deta hai — jitni milawat utna kam Kirschner value.</p>
          `
        },
        {
          title: "Kreis Test (Rancidity Detection)",
          purpose: "Ghee mein developed rancidity (oxidative deterioration) detect karna — ye ek rapid qualitative screening test hai.",
          reference: "IS 3508 – 1966",
          procedure: `
            <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
            <p>Jab fat oxidize hota hai (rancidity), to peroxides bante hain (primary products). Ye peroxides further breakdown hoke <strong>aldehydes</strong> bante hain (secondary oxidation products) — specifically <strong>epihydrinal dehyde (malondialdehyde)</strong>.</p>
            <p class="mt-1"><strong>Phloroglucinol</strong> (1,3,5-trihydroxybenzene) in aldehydes ke saath HCl ki presence mein react karke <strong>PINK/RED colour</strong> ka condensation product banata hai.</p>
            <p class="mt-1">Fresh fat mein aldehydes nahi hote → no colour. Rancid fat mein aldehydes present → PINK/RED colour.</p>

            <h4 class="font-semibold mt-4 mb-2">Chemical Reaction:</h4>
            <div class="bg-gray-50 border rounded p-3 mt-2 text-sm">
              <pre><code>Oxidation chain:

Fat + O₂ → Peroxides (R-OOH) → Aldehydes (R-CHO) + other products
 (primary oxidation)            (secondary oxidation)
                                 ↑
                                 Malondialdehyde (OHC-CH₂-CHO)
                                 Epihydrinal dehyde

Detection Reaction:

     OH          OH                      CHO
      \         /                         |
       [ring]         +    CH₂     +   HCl
      /         \                         |
     OH          OH                      CHO
   Phloroglucinol          Malondialdehyde

         ↓ Acid-catalyzed condensation

   PINK/RED coloured product (Schiff base type)</code></pre>
            </div>

            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
            <ol class="list-decimal list-outside pl-5 space-y-2">
              <li>1 ml melted ghee ek clean, dry test tube mein lein.</li>
              <li>1 ml concentrated HCl daalein. <em>— HCl acidic catalyst ka kaam karta hai aur phloroglucinol-aldehyde reaction ko promote karta hai. Conc. HCl carefully handle karein.</em></li>
              <li>1 ml 1% phloroglucinol solution (1 g phloroglucinol in 100 ml diethyl ether) daalein. <em>— Phloroglucinol ko ether mein dissolve karte hain kyunki ye paani mein kam soluble hai. Solution FRESHLY prepare karein.</em></li>
              <li>Test tube ko rubber stopper se band karke vigorously shake karein (30 seconds). <em>— Vigorous shaking se fat, acid aur reagent ka contact maximum hota hai.</em></li>
              <li>Layers settle hone dein aur colour observe karein.</li>
            </ol>

            <h4 class="font-semibold mt-4 mb-2">Result Interpretation:</h4>
            <div class="bg-blue-50 border border-blue-200 rounded p-3 mt-2">
              <p class="text-sm"><strong>Ye qualitative test hai — koi mathematical formula nahi:</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Colour</th><th class="border p-2">Interpretation</th><th class="border p-2">Action</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2 text-red-600 font-semibold">Pink / Red colour</td><td class="border p-2">RANCIDITY detected — oxidation aldehydes present</td><td class="border p-2">Ghee reject karein — off-flavour hoga, potentially harmful</td></tr>
                  <tr><td class="border p-2 text-green-600 font-semibold">No colour change</td><td class="border p-2">NOT rancid — fresh ghee</td><td class="border p-2">Acceptable</td></tr>
                </tbody>
              </table>
              
              <p class="text-sm mt-3"><strong>Kreis Test vs Peroxide Value — kya fark hai?</strong></p>
              <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                <thead><tr class="bg-gray-100"><th class="border p-2">Parameter</th><th class="border p-2">Kreis Test</th><th class="border p-2">Peroxide Value</th></tr></thead>
                <tbody>
                  <tr><td class="border p-2">Type</td><td class="border p-2">Qualitative (haan/nahi)</td><td class="border p-2">Quantitative (exact number)</td></tr>
                  <tr><td class="border p-2">Kya detect karta hai</td><td class="border p-2">Secondary oxidation products (aldehydes)</td><td class="border p-2">Primary oxidation products (peroxides)</td></tr>
                  <tr><td class="border p-2">Stage of rancidity</td><td class="border p-2">Advanced rancidity</td><td class="border p-2">Early rancidity</td></tr>
                  <tr><td class="border p-2">Time required</td><td class="border p-2">2-3 minutes</td><td class="border p-2">20-30 minutes</td></tr>
                  <tr><td class="border p-2">Use case</td><td class="border p-2">Quick screening</td><td class="border p-2">Detailed quality control</td></tr>
                </tbody>
              </table>
              <p class="text-sm mt-2">Note: Kabhi-kabhi peroxide value high hota hai lekin Kreis test negative — iska matlab rancidity initial stage mein hai (peroxides ban rahe hain lekin aldehydes abhi nahi bane). Dono tests complementary hain.</p>
            </div>
          `
        }
      ]
    },
  
        "cheese-paneer": {
          title: "Paneer / Cheese ka Analysis",
          tests: [
            {
              title: "Moisture aur Total Solids ka Determination",
              purpose: "Paani ki quantity measure karna — texture aur shelf life ko affect karta hai.",
              reference: "IS 2785-1979",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek saaf, dry, khaali aluminium moisture dish ko sand aur ek glass rod ke saath weigh karein (W1).</li>
                  <li>Dish mein 3 gram grated/crumbled sample weigh karein (W2).</li>
                  <li>Kuch boondein distilled water daalein aur sample ko sand ke saath mix karein (surface area badhane ke liye).</li>
                  <li>Ek hot plate par dish rakhkar paani ko evaporate karein.</li>
                  <li>Dish ko 102 ± 2°C par 4 ghante ke liye hot air oven mein dry karein.</li>
                  <li>Desiccator mein cool karein aur weigh karein. Constant weight prapt hone tak repeat karein (W3).</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <pre><code>% Total Solids = 100 - % Moisture</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Paneer: 55-60% moisture, Cheddar cheese: 35-38% moisture, Processed cheese: 42-45% moisture</p>
              `
            },
            {
              title: "Fat ka Determination (Acid Digestion - Werner-Schmidt Method)",
              purpose: "Dry matter basis par fat content determine karna.",
              reference: "IS 2785-1979",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek 100 ml beaker mein prepared sample ka 1-2 gram weigh karein.</li>
                  <li>10 ml concentrated HCl daalein aur water bath par tab tak heat karein jab tak saare solid particles dissolve na ho jayein (dark brown solution).</li>
                  <li>Solution ko cool karein, 10 ml ethanol daalein, aur ek Mojonnier flask mein transfer karein.</li>
                  <li>25 ml diethyl ether daalein, 1 minute ke liye shake karein. Phir 25 ml petroleum ether daalein aur phir se shake karein.</li>
                  <li>Centrifuge karein aur ether layer ko pehle se weigh kiye hue conical flask mein transfer karein.</li>
                  <li>Extraction ko do baar repeat karein.</li>
                  <li>Ether ko evaporate karein aur fat content find karne ke liye residue ko dry karein aur weigh karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = (Extracted fat weight / Sample weight) × 100</code></pre>
                <pre><code>% Fat on Dry Matter (FDM) = (% Fat / % Total Solids) × 100</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Full fat paneer: 50-55% FDM, Full fat cheddar: 48-54% FDM</p>
              `
            },
            {
              title: "Protein ka Determination (Kjeldahl)",
              purpose: "Cheese/Paneer mein protein content determine karna.",
              reference: "A.O.A.C 991.23",
              procedure: `
                <p>~1-2 gram finely grated sample weigh karein. Standard Kjeldahl method follow karein (digestion, distillation, titration). Conversion factor: 6.38 for dairy products.</p>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
                <p>Expected: Paneer protein ~18-20%, Cheddar cheese protein ~24-26%</p>
              `
            },
            {
              title: "Titratable Acidity",
              purpose: "Paneer/cheese ki acidity measure karna.",
              reference: "IS 2785-1979",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>10 gram grated sample ko mortar mein mash karein 20 ml warm distilled water ke saath.</li>
                  <li>Phenolphthalein indicator daalein.</li>
                  <li>0.1 N NaOH se titrate karein jab tak pink endpoint aaye (15 seconds stable).</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p>Expected: Fresh paneer acidity ~0.5%, Cheddar cheese ~0.8-1.2%</p>
              `
            },
            {
              title: "Salt (NaCl) Content in Cheese",
              purpose: "Cheese mein namak ki quantity measure karna.",
              reference: "IS 2785-1979; A.O.A.C 935.43",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Volhard's Method:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>5 gram grated cheese ko 100 ml boiling water mein dissolve karein.</li>
                  <li>Cool karein, 10 ml 0.1N AgNO₃ (excess) daalein.</li>
                  <li>10 ml nitric acid daalein.</li>
                  <li>Filter karein (AgCl precipitate hata dein).</li>
                  <li>Filtrate mein 2 ml ferric alum indicator daalein.</li>
                  <li>0.1N KSCN (potassium thiocyanate) se back-titrate karein jab tak persistent reddish-brown colour aaye.</li>
                </ol>
                <pre><code>% NaCl = [5.844 × N × (V_AgNO₃ - V_KSCN)] / Sample weight</code></pre>
                <p>Expected: Cheddar cheese ~1.5-2.0% salt, Paneer ~0-0.5%</p>
              `
            },
            {
              title: "Total Ash",
              purpose: "Cheese/paneer mein mineral content determine karna.",
              reference: "IS 2785-1979",
              procedure: `
                <p>3-5 gram grated sample ko pehle se weigh kiye hue crucible mein lein. Pehle hot plate par char karein, phir 550°C muffle furnace mein 6-8 hours ashing karein. Cool karein, weigh karein.</p>
                <pre><code>% Ash = (Ash weight / Sample weight) × 100</code></pre>
                <p>Expected: Paneer ash ~1.5-2.0%, Cheddar ~3.5-4.5%</p>
              `
            },
            {
              title: "pH Determination of Cheese/Paneer",
              purpose: "pH measure karna — ripening stage aur quality ka indicator.",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>10 gram finely grated sample ko 10 ml distilled water ke saath homogenize karein (paste banayein).</li>
                  <li>Calibrated pH meter ke electrode ko paste mein insert karein.</li>
                  <li>Stable reading note karein.</li>
                </ol>
                <p>Expected: Fresh paneer pH ~5.5-5.8, Fresh cheddar pH ~5.0-5.3, Aged cheddar pH ~5.2-5.6</p>
              `
            },
            {
              title: "Paneer mein Starch ka Detection",
              purpose: "Ek filler ke roop mein starch ke illegal addition ka pata lagana.",
              reference: "FSSAI Manual",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek porcelain dish mein 1 gram paneer ke sample ko 1 ml distilled water ke saath mash karein.</li>
                  <li>Phir iodine solution ki ek boond daalein.</li>
                </ol>
                <p><strong>Blue colour:</strong> Starch PRESENT — adulterated</p>
                <p><strong>Brown colour:</strong> Starch ABSENT — normal</p>
              `
            },
            {
              title: "Paneer mein Vanaspati ka Detection",
              purpose: "Paneer mein vanaspati (hydrogenated vegetable fat) milawat detect karna.",
              procedure: `
                <p>Baudouin test (ghee section mein described) use karein. Paneer se pehle fat extract karein (Werner-Schmidt method se), phir extracted fat par Baudouin test karein.</p>
                <p><strong>Pink/Red colour in acid layer:</strong> Vanaspati PRESENT</p>
              `
            }
          ]
        },
  
        "dahi-yoghurt": {
          title: "Dahi / Yoghurt ka Analysis",
          tests: [
            {
              title: "Titratable Acidity",
              purpose: "Fermentation ke dauran developed acidity determine karna — proper culture activity ka indicator.",
              reference: "IS 12333:1997",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek beaker mein 10 gram sample weigh karein.</li>
                  <li>Ek paste banane ke liye 10 ml distilled water daalein aur achchi tarah mix karein.</li>
                  <li>Phenolphthalein indicator ki kuch boondein daalein.</li>
                  <li>0.1 N NaOH se tab tak titrate karein jab tak ek halka pink colour dikhaye (15 seconds stable).</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Jahaan V = NaOH ki volume, N = NaOH ki normality, W = sample ka weight.</p>
  
                <h4 class="font-semibold mt-4 mb-2">FSSAI Standards:</h4>
                <p>Dahi acidity: 0.5-1.0% (as lactic acid). Good quality dahi: 0.7-0.85%</p>
              `
            },
            {
              title: "Total Solids ka Determination",
              purpose: "Total solid content determine karna — fermented products mein acidity neutralize karna important hai warna loss hota hai.",
              reference: "IS 12333: 1997 / IDF 151: 1991",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Method 1: NaOH Method</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>4-5 gram sample dish mein weigh karein (W2).</li>
                  <li>Acidity ko 0.1N NaOH se neutralize karein (phenolphthalein pink tak) — added NaOH ka weight note karein.</li>
                  <li>Water bath par dry karein, phir oven mein 100±2°C par constant weight tak dry karein (W3).</li>
                  <li>Added NaOH ka weight final residue se subtract karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Method 2: Zinc Oxide Method</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>1 gram sample weigh karein, 2 gram zinc oxide (ZnO) ke saath achchi tarah mix karein (ZnO lactic acid ko neutralize karta hai).</li>
                  <li>Water bath par pre-dry karein, phir oven mein 100±2°C par constant weight tak dry karein.</li>
                  <li>Developed lactic acid ko separately determine karein (acidity test se) aur moisture value mein add karein taaki correct total solids milein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Whole milk dahi TS: ≥12%, Skimmed milk dahi TS: ≥9%</p>
              `
            },
            {
              title: "Fat ka Determination",
              purpose: "Dahi/yoghurt mein fat content determine karna.",
              reference: "IS 12333: 1997",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Gerber Method (Modified for Dahi):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>~5 gram dahi ko butyrometer mein weigh karein.</li>
                  <li>~5 ml warm water daalein sample ko dissolve karne ke liye.</li>
                  <li>10 ml sulphuric acid carefully daalein.</li>
                  <li>1 ml amyl alcohol daalein.</li>
                  <li>Mix karein, centrifuge karein, water bath (65°C) mein rakhein, reading lein.</li>
                </ol>
                <p>Note: Fermented products ke saath acid reaction zyada vigorous hoti hai — carefully mix karein.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Alternatively: Werner-Schmidt method</h4>
                <p>~5 gram sample + 10 ml conc. HCl se digest karein, phir ether extraction karein.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Full fat dahi: ≥3.0% (FSSAI), Low fat dahi: 0.5-3.0%</p>
              `
            },
            {
              title: "Protein ka Determination",
              purpose: "Dahi mein protein content determine karna.",
              reference: "A.O.A.C 991.23",
              procedure: `
                <p>Standard Kjeldahl method use karein. ~5 gram sample weigh karein, digest, distill, titrate karein. Factor 6.38 se multiply karein.</p>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
                <p>Expected: Whole milk dahi protein ~3.2-3.5%</p>
              `
            },
            {
              title: "Diacetyl Content",
              purpose: "Ek important flavour compound measure karna — dahi ki characteristic aroma isse aati hai.",
              reference: "IS 12333: 1997",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant:</h4>
                <p>Diacetyl (2,3-butanedione) fermentation ke dauran Leuconostoc aur Lactococcus bacteria dwara produce hota hai. Ye dahi ka characteristic "buttery" flavour deta hai. Isse spectrophotometrically measure kiya jaata hai.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>10 gram dahi ko 50 ml distilled water mein homogenize karein.</li>
                  <li>Steam distillation se diacetyl extract karein.</li>
                  <li>Distillate ko hydroxylamine aur ferric chloride ke saath react karayein — red colour develop hota hai.</li>
                  <li>Colour intensity ko 570 nm par spectrophotometer se measure karein.</li>
                  <li>Standard diacetyl solutions ke calibration curve se concentration determine karein.</li>
                </ol>
                <p>Expected: Good quality dahi mein ~1-5 ppm diacetyl hota hai.</p>
              `
            },
            {
              title: "pH Determination",
              purpose: "Dahi ka pH measure karna — fermentation degree ka objective indicator.",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>pH meter ko standard buffers se calibrate karein.</li>
                  <li>10 gram dahi lein, halka mix karein (zyada nahi).</li>
                  <li>Electrode directly dahi mein insert karein.</li>
                  <li>Stable reading note karein.</li>
                </ol>
                <p>Expected: Good quality dahi pH: 4.0-4.5, Overripe dahi pH: < 3.8</p>
              `
            },
            {
              title: "Coliform Count",
              purpose: "Hygienic quality ka assessment — post-pasteurization contamination detect karna.",
              reference: "IS 5401 (Part 1)",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>11 gram dahi ko 99 ml sterile ringer solution mein homogenize karein (1:10 dilution).</li>
                  <li>Serial dilutions prepare karein.</li>
                  <li>Violet Red Bile Agar (VRBA) plates par pour karein (1 ml each dilution).</li>
                  <li>Overlay daalein, 37°C par 24-48 hours incubate karein.</li>
                  <li>Typical dark red colonies count karein.</li>
                </ol>
                <p>FSSAI limit: ≤ 10 cfu/gram for dahi/yoghurt</p>
              `
            },
            {
              title: "Yeast & Mould Count",
              purpose: "Spoilage organisms ka detection — dahi mein yeast aur mould growth ka assessment.",
              reference: "IS 5403:1999",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Sample ko aseptically dilute karein (1:10 dilution).</li>
                  <li>Potato Dextrose Agar (PDA) ya Rose Bengal Chloramphenicol Agar (RBCA) plates par pour/spread karein.</li>
                  <li>25°C par 3-5 din incubate karein.</li>
                  <li>Colonies count karein — fuzzy colonies mould hain, smooth/glossy colonies yeast hain.</li>
                </ol>
                <p>FSSAI limit: ≤ 100 cfu/gram for yoghurt</p>
              `
            }
          ]
        },
  
        "chakka-shrikhand": {
          title: "Chakka / Shrikhand ka Analysis",
          tests: [
            {
              title: "Milk Solids ka Determination",
              purpose: "Total milk solids determine karna — sugar (sucrose) separately nikaal ke.",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Dahi ke liye described procedure follow karein (ZnO ya NaOH method se total solids determine karein).</li>
                  <li>Shrikhand ke liye — sucrose content separately determine karein (Lane-Eynon method se).</li>
                  <li>Milk solids = Total Solids - Sucrose content.</li>
                </ol>
                <p>FSSAI: Shrikhand mein minimum 58% total solids, minimum 26% milk solids</p>
              `
            },
            {
              title: "Fat ka Determination",
              purpose: "Fat content determine karna.",
              procedure: `<p>Paneer ke liye Werner-Schmidt method follow karein. ~2-3 gram sample lein, HCl se digest karein, ether se fat extract karein, evaporate karein aur weigh karein.</p>
              <p>FSSAI standard: Shrikhand mein minimum 5.0% milk fat</p>`
            },
            {
              title: "Protein ka Determination",
              purpose: "Protein content determine karna.",
              procedure: `<p>Kjeldahl method follow karein. ~2 gram sample weigh karein, digest, distill, titrate karein. Factor 6.38 se multiply karein. Expected: Shrikhand protein ~5-7%</p>`
            },
            {
              title: "Titratable Acidity ka Determination",
              purpose: "Acidity determine karna.",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>10 gram sample lein, 30 ml warm distilled water mein disperse karein.</li>
                  <li>Phenolphthalein daalein, 0.1 N NaOH se titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p>Expected: Shrikhand acidity ~1.0-1.4%</p>
              `
            },
            {
              title: "Total Ash ka Determination",
              purpose: "Mineral content determine karna.",
              procedure: `<p>Milk powder ke liye procedure follow karein (550°C par ashing). ~3-5 gram sample lein.</p>
              <p>Expected: ~0.5-0.8%</p>`
            },
            {
              title: "Sucrose Content ka Determination",
              purpose: "Added sugar ki quantity determine karna — shrikhand ka major ingredient.",
              reference: "IS 12333: 1997",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Lane-Eynon Method:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>10 gram sample ko 250 ml volumetric flask mein dissolve karein ~100 ml warm water mein.</li>
                  <li>Proteins precipitate karein (lead acetate + sodium/potassium oxalate).</li>
                  <li>Volume make up karein, filter karein.</li>
                  <li><strong>Step 1:</strong> Filtrate se reducing sugars (lactose) determine karein by Fehling's titration.</li>
                  <li><strong>Step 2:</strong> Filtrate ke 50 ml lein, 5 ml conc. HCl daalein, 30 minute incubate karein (70°C) — ye sucrose ko invert sugars (glucose + fructose) mein convert karta hai.</li>
                  <li>Neutralize karein (NaOH se), volume make up karein.</li>
                  <li>Inversion ke baad total reducing sugars determine karein by Fehling's titration.</li>
                </ol>
                <pre><code>Sucrose % = (Total reducing sugars after inversion - Original reducing sugars) × 0.95</code></pre>
                <p>Expected: Shrikhand mein ~40-45% sucrose</p>
              `
            }
          ]
        },
  
        "khoa": {
    title: "Khoa Ka Analysis",
    tests: [
        {
            title: "Moisture Ka Determination (Sand Drying Method)",
            purpose: "Khoa mein paani ki maatra determine karne ke liye, jo quality aur shelf life ke liye critical hai.",
            reference: "IS 4883:1980 (Reaffirmed 2005)",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Khoa ka ek weighed sample sand ke saath mix karke oven mein constant weight tak sukhaya jaata hai. Weight mein jo loss hota hai woh moisture content represent karta hai. Sand isliye use hote hain taaki sample ka surface area badhe aur moisture efficiently nikal sake.</p>
                <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>Moisture dish:</strong> Flat-bottom aluminium dish with lid.</li>
                    <li><strong>Acid-washed sand:</strong> Pre-dried, 40-60 mesh.</li>
                    <li><strong>Glass stirring rod:</strong> Dish mein fit hone wali.</li>
                    <li><strong>Hot air oven:</strong> 102 ± 2°C maintain karne wala.</li>
                    <li><strong>Desiccator:</strong> Silica gel ke saath.</li>
                    <li><strong>Analytical balance:</strong> 0.1 mg sensitivity.</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek clean, dry aluminium dish mein ~25g acid-washed sand aur ek glass rod daalein. Dish ko lid ke saath 102±2°C par 1 hour ke liye oven mein rakhein. Desiccator mein cool karein aur weigh karein (W1).</li>
                    <li>Dish mein approximately 3g grated/crumbled khoa ka sample accurately weigh karein (W2).</li>
                    <li>Sample ko sand ke saath glass rod se thoroughly mix karein. Kuch drops distilled water daalein taaki uniform paste ban jaaye.</li>
                    <li>Dish ko pehle hot plate par rakhein aur major moisture evaporate karein.</li>
                    <li>Phir dish ko 102 ± 2°C par hot air oven mein 4 hours ke liye rakhein.</li>
                    <li>Dish ko lid se dhakein, desiccator mein room temperature tak cool karein, aur weigh karein (W3).</li>
                    <li>Dubara 1 hour oven mein rakhein, cool karein aur weigh karein. Jab tak constant weight na aaye, repeat karein (successive readings mein 0.5 mg se zyada difference nahi hona chahiye).</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <pre><code>% Total Solids = 100 - % Moisture</code></pre>
                <p class="text-xs mt-2">Standard: Pindi Khoa mein max 30% moisture, Dhap Khoa mein max 40% moisture hona chahiye.</p>
            `
        },
        {
            title: "Fat Ka Determination (Werner-Schmidt / Acid Digestion Method)",
            purpose: "Khoa mein fat content determine karne ke liye. Yeh method un samples ke liye suitable hai jinmein sugar added nahi hai.",
            reference: "IS 4883:1980",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Sample ko concentrated HCl se digest kiya jaata hai, jo proteins aur other solids ko dissolve kar deta hai aur fat ko free kar deta hai. Free fat ko phir diethyl ether aur petroleum ether ke mixture se extract kiya jaata hai. Solvent evaporate karne ke baad, extracted fat ko weigh kiya jaata hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek 100ml beaker mein approximately 1-2g prepared khoa sample accurately weigh karein.</li>
                    <li>10ml concentrated HCl daalein aur water bath par tab tak heat karein jab tak sab solid particles dissolve na ho jaayein aur solution dark brown ho jaaye.</li>
                    <li>Solution ko cool karein aur 10ml ethanol daalein.</li>
                    <li>Mixture ko Mojonnier extraction flask mein transfer karein.</li>
                    <li>25ml diethyl ether daalein, stopper lagaayein, aur 1 minute ke liye vigorously shake karein.</li>
                    <li>25ml petroleum ether (40-60°C boiling range) daalein aur phir se 1 minute shake karein.</li>
                    <li>Centrifuge karein ya layers separate hone dein.</li>
                    <li>Upper ether layer ko carefully ek pre-weighed conical flask mein decant karein.</li>
                    <li>Aqueous layer ke saath extraction do baar aur repeat karein (15ml each ether).</li>
                    <li>Combined ether extracts se solvent ko water bath par evaporate karein.</li>
                    <li>Flask ko 102°C par oven mein 1 hour rakhein, desiccator mein cool karein, aur weigh karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = (Weight of extracted fat / Weight of sample) × 100</code></pre>
                <pre><code>% Fat on dry basis = (% Fat × 100) / % Total Solids</code></pre>
            `
        },
        {
            title: "Fat Ka Determination (Rose-Gottlieb Method - Sugar wale Khoa ke liye)",
            purpose: "Jab khoa mein added sugar ho (jaise sweet dishes ke liye bana hua), tab yeh method use hota hai kyunki acid digestion mein sugar charring problem deti hai.",
            reference: "IS 1224 (Part-II)-1977",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Sample ko ammonia se treat kiya jaata hai jo casein ko dissolve karti hai. Ethanol protein ko precipitate karta hai. Fat ko diethyl ether aur petroleum ether ke mixture se extract kiya jaata hai bina acid digestion ke.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Mojonnier tube mein ~2g khoa sample accurately weigh karein.</li>
                    <li>10ml garam paani daalein aur thorough mixing se dissolve karein.</li>
                    <li>1.5ml ammonia solution (25%) daalein aur mix karein.</li>
                    <li>10ml 95% ethanol daalein aur 1 minute shake karein.</li>
                    <li>25ml diethyl ether daalein aur 1 minute vigorously shake karein.</li>
                    <li>25ml petroleum ether daalein aur 1 minute phir shake karein.</li>
                    <li>Layers separate hone dein ya centrifuge karein.</li>
                    <li>Ether layer ko pre-weighed flask mein transfer karein.</li>
                    <li>Do baar aur extraction repeat karein (15ml each ether).</li>
                    <li>Solvent evaporate karein, 102°C par dry karein, aur weigh karein.</li>
                </ol>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Khoa mein total protein content determine karne ke liye.",
            reference: "IS 4883:1980; A.O.A.C 991.23",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Kjeldahl method se total nitrogen determine hota hai. Organic nitrogen ko concentrated H₂SO₄ aur catalyst ke saath digest karke ammonium sulfate mein convert kiya jaata hai. Phir ammonia gas release ki jaati hai (NaOH se) aur standard acid mein trap karke titrate ki jaati hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li><strong>Digestion:</strong> Kjeldahl flask mein ~1g khoa weigh karein. 25ml concentrated H₂SO₄ aur catalyst mixture (CuSO₄:K₂SO₄ = 1:5) daalein. Fume hood mein tab tak heat karein jab tak solution clear ho jaaye (2-3 hours). Cool karein.</li>
                    <li><strong>Distillation:</strong> Digest ko carefully 200ml distilled water se dilute karein. Excess 40% NaOH solution (~75ml) daalein. Ammonia ko steam-distill karein aur 25ml 4% boric acid + mixed indicator mein collect karein.</li>
                    <li><strong>Titration:</strong> Collected ammonia (green colour) ko 0.1N HCl se titrate karein jab tak colour green se pink ho jaaye. Blank bhi run karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Total Nitrogen = [1.4007 × (V_sample - V_blank) × N_HCl] / Weight_sample</code></pre>
                <pre><code>% Crude Protein = % Total Nitrogen × 6.38</code></pre>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Khoa ki acidity measure karne ke liye, jo freshness aur quality indicate karti hai.",
            reference: "IS 4883:1980",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek beaker mein 10g khoa sample accurately weigh karein.</li>
                    <li>30ml garam (40°C) neutral distilled water daalein aur thorough mixing se uniform dispersion banayein.</li>
                    <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                    <li>0.1N NaOH se titrate karein jab tak halka pink colour aaye jo 30 seconds tak rahe.</li>
                    <li>NaOH ka volume note karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Jahaan V = NaOH ka volume (ml), N = NaOH ki normality, W = sample ka weight (g).</p>
                <p class="text-xs mt-2">Standard: Fresh khoa ki acidity 0.5% se zyada nahi honi chahiye.</p>
            `
        },
        {
            title: "Total Ash Ka Determination",
            purpose: "Khoa mein total mineral content determine karne ke liye.",
            reference: "IS 4883:1980",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Sample ko high temperature par incinerate kiya jaata hai jab tak saara organic matter destroy na ho jaaye. Jo residue bachta hai woh inorganic mineral (ash) hota hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek silica/platinum crucible ko pre-heat karein 550°C par 30 minutes ke liye. Desiccator mein cool karein aur weigh karein (W1).</li>
                    <li>Crucible mein ~3g khoa sample accurately weigh karein (W2).</li>
                    <li>Sample ko pehle water bath par evaporate karein, phir hot plate par char karein (smoke aana band hone tak).</li>
                    <li>Crucible ko muffle furnace mein 550 ± 20°C par 4-6 hours tak rakhein jab tak white/light grey ash mil jaaye.</li>
                    <li>Desiccator mein cool karein aur weigh karein (W3).</li>
                    <li>Constant weight ke liye repeat karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Total Ash = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
            `
        },
        {
            title: "Starch Ka Detection (Qualitative Test)",
            purpose: "Khoa mein adulterant ke roop mein starch ka illegal addition detect karne ke liye.",
            reference: "FSSAI Manual of Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Starch iodine ke saath react karke ek characteristic blue-black colour deta hai. Yeh colour starch-iodine complex ki wajah se hota hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>11g grated khoa ko 50ml garam distilled water mein disperse karein aur achhe se mix karein.</li>
                    <li>Is dispersion ka 5ml ek test tube mein lein.</li>
                    <li>Ek-do drops iodine solution (0.1N I₂ in KI) daalein.</li>
                    <li>Observe karein: <strong>Blue-black colour</strong> = Starch PRESENT (adulteration). <strong>Brown colour</strong> (iodine ka original colour) = Starch ABSENT (genuine).</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Note:</h4>
                <p class="text-xs">Yeh ek qualitative test hai. Quantitative starch determination ke liye acid hydrolysis karke reducing sugars measure karna padta hai.</p>
            `
        },
        {
            title: "Sucrose Ka Detection (Seliwanoff's / Resorcinol Test)",
            purpose: "Khoa mein cane sugar (sucrose) ka addition detect karne ke liye.",
            reference: "FSSAI Manual; IS 4883:1980",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Sucrose (ek ketose sugar) concentrated HCl ke saath furfural derivatives banata hai, jo resorcinol ke saath react karke characteristic deep red/cherry red colour deta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Prepared khoa dispersion ka 5ml ek test tube mein lein.</li>
                    <li>0.5ml concentrated HCl daalein.</li>
                    <li>0.005g resorcinol crystals daalein.</li>
                    <li>Mixture ko boiling water bath mein 5 minutes ke liye rakhein.</li>
                    <li>Observe karein: <strong>Deep red/cherry red colour</strong> = Sucrose PRESENT. <strong>No significant colour change</strong> = Sucrose ABSENT.</li>
                </ol>
            `
        },
        {
            title: "Added Vanaspati/Foreign Fat Ka Detection (Baudouin Test)",
            purpose: "Khoa mein vanaspati ghee ya non-dairy fat ki adulteration detect karne ke liye.",
            reference: "IS 4883:1980; FSSAI Manual",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>India mein vanaspati mein mandatorily 5% sesame oil milaya jaata hai. Sesame oil mein sesamol hota hai jo furfural aur concentrated HCl ke saath pink/crimson red colour deta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g khoa ko 20ml petroleum ether mein dissolve karein aur filter karein fat extract nikalne ke liye.</li>
                    <li>Solvent evaporate karein taaki pure fat mil jaaye.</li>
                    <li>5ml melted fat ko ek test tube mein lein.</li>
                    <li>5ml concentrated HCl daalein.</li>
                    <li>0.4ml 2% furfural solution (in alcohol) daalein.</li>
                    <li>2 minutes tak vigorously shake karein.</li>
                    <li>Layers separate hone dein. Acid layer (neeche wali layer) observe karein.</li>
                    <li><strong>Pink/Red colour</strong> acid layer mein = Vanaspati PRESENT. <strong>No colour</strong> = Vanaspati ABSENT.</li>
                </ol>
            `
        },
        {
            title: "Lactose Ka Determination (Lane-Eynon Method)",
            purpose: "Khoa mein lactose content determine karne ke liye.",
            reference: "IS 1479 (Part II):1961",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Lactose ek reducing sugar hai jo Fehling's solution ko reduce kar sakta hai. Known volume ki Fehling's solution ko sample se titrate karte hain, methylene blue indicator ke saath. Endpoint tab aata hai jab saari Fehling's solution reduce ho jaaye.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>5g khoa ko 50ml distilled water mein dissolve karein.</li>
                    <li>Proteins precipitate karne ke liye 1ml each of potassium ferrocyanide solution aur zinc acetate solution daalein.</li>
                    <li>Volume ko 100ml tak make up karein aur filter karein.</li>
                    <li>Ek conical flask mein exactly 5ml each Fehling's A aur Fehling's B solution lein.</li>
                    <li>Prepared filtrate se burette mein bharein.</li>
                    <li>Fehling's solution ko boil karein aur boiling Fehling's mein sample ko slowly titrate karein.</li>
                    <li>Endpoint ke paas methylene blue indicator ki 2-3 drops daalein.</li>
                    <li>Titrate karte rahein jab tak blue colour disappear ho jaaye aur brick red precipitate dikhey.</li>
                    <li>Lane-Eynon tables se lactose content calculate karein.</li>
                </ol>
            `
        },
        {
            title: "Alkaline Phosphatase Test",
            purpose: "Yeh confirm karne ke liye ki khoa banane mein use hua doodh properly pasteurized tha ya nahi.",
            reference: "IS 4883:1980",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Alkaline phosphatase ek enzyme hai jo raw milk mein naturally present hota hai. Agar pasteurization proper hua hai toh yeh enzyme destroy ho jaata hai. Positive test matlab doodh properly pasteurized nahi tha.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>1g khoa ko 9ml buffer substrate solution (disodium p-nitrophenyl phosphate) mein disperse karein.</li>
                    <li>37°C par 2 hours ke liye incubate karein.</li>
                    <li>Agar phosphatase present hai toh woh substrate ko hydrolyze karega, p-nitrophenol release karega.</li>
                    <li>Alkaline conditions mein yellow colour develop hoga.</li>
                    <li>Colour intensity ko spectrophotometer ya comparator se measure karein.</li>
                    <li><strong>Yellow colour</strong> = Phosphatase positive = Improper heating. <strong>No colour</strong> = Properly heated.</li>
                </ol>
            `
        }
    ]
},
"ice-cream": {
    title: "Ice Cream Ka Analysis",
    tests: [
        {
            title: "Fat Ka Determination (Rose-Gottlieb Method)",
            purpose: "Ice cream mein fat content determine karne ke liye. Legal standards aur texture ke liye bahut important hai.",
            reference: "Pearson's Composition and Analysis of Foods 9th edn, 1991 page 604; IS 2802:1964",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Ice cream ko pehle melt kiya jaata hai, phir ammonia aur ethanol se treat kiya jaata hai. Fat ko diethyl ether aur petroleum ether ke mixture se extract kiya jaata hai. Solvents evaporate karne ke baad fat ko weigh kiya jaata hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ice cream sample ko 40°C par completely melt karein aur achhe se mix karein.</li>
                    <li>Ek Mojonnier tube mein 4-5g melted sample accurately weigh karein.</li>
                    <li>10ml distilled water daalein aur achhe se mix karein.</li>
                    <li>2ml ammonia solution daalein, mix karein, aur 60°C par 20 minutes ke liye water bath mein rakhein.</li>
                    <li>Cool karein, aur 10ml ethanol daalein aur mix karein.</li>
                    <li>25ml diethyl ether daalein, 1 minute vigorously shake karein.</li>
                    <li>25ml petroleum ether daalein aur 1 minute phir shake karein.</li>
                    <li>Layers separate hone dein ya centrifuge karein.</li>
                    <li>Ether layer ko ek pre-weighed vessel mein carefully decant karein.</li>
                    <li>Extraction do baar aur repeat karein (15ml each ether).</li>
                    <li>Combined ether extracts se ether evaporate karein aur residue ko 102 ± 2°C par 3 hours ke liye dry karein.</li>
                    <li>Desiccator mein cool karein aur weigh karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = (Weight of extracted fat / Weight of sample) × 100</code></pre>
                <p class="text-xs mt-2">FSSAI Standards: Medium fat ice cream mein min 2.5% fat, Regular ice cream mein min 10% fat hona chahiye.</p>
            `
        },
        {
            title: "Overrun Ka Determination",
            purpose: "Overrun freezing ke dauraan air incorporation ki wajah se ice cream ke volume mein mix ke volume se percentage increase hai. Yeh texture aur body ke liye critical hai.",
            reference: "IS 2802:1964",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Overrun ice cream aur uske melted mix ke weights ko compare karke determine kiya jaata hai. Kyunki air ka koi significant weight nahi hota, weight difference air incorporation ko indicate karta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ice cream ka ek unit (jaise ek cup ya carton) lein aur iska net weight determine karein (W_icecream).</li>
                    <li>Usi container mein same volume ki ice cream ko completely melt karein, saari air remove karein (ek drop amyl alcohol foam todne mein help kar sakta hai).</li>
                    <li>Melted mix ko weigh karein (W_mix). Ya phir same volume ke container mein melted mix bharein aur weigh karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Overrun = [(W_mix - W_icecream) / W_icecream] × 100</code></pre>
                <p class="text-xs mt-2">Normal range: 70-100% overrun commercial ice cream ke liye. Zyada overrun matlab zyada air = halka product.</p>
            `
        },
        {
            title: "Total Solids Content Ka Determination",
            purpose: "Ice cream mein total solids determine karne ke liye.",
            reference: "IS 2802:1964",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek weighed dish (sand ke saath) mein 5g melted ice cream sample weigh karein (W2).</li>
                    <li>Kuch drops paani daalein aur paste banaane ke liye mix karein.</li>
                    <li>20-30 minutes ke liye boiling water bath par sample ko dry karein.</li>
                    <li>Dish ko 100 ± 2°C par hot air oven mein 4 hours ke liye rakhein.</li>
                    <li>Desiccator mein cool karein aur weigh karein (W3). Constant weight tak repeat karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">FSSAI Standard: Minimum 36% total solids hona chahiye.</p>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Ice cream mein protein content determine karne ke liye.",
            reference: "Pearson's Composition and Analysis of Foods, 9th edn, 1991 page 17",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>5-8g melted ice cream sample ko Kjeldahl flask mein weigh karein.</li>
                    <li>Liquid milk ke liye described Kjeldahl method follow karein (Digestion → Distillation → Titration).</li>
                    <li>Total nitrogen determine karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Protein = % Total Nitrogen × 6.38 (dairy ice cream ke liye)</code></pre>
                <pre><code>% Protein = % Total Nitrogen × 6.25 (frozen desserts ke liye jo vegetable protein use karte hain)</code></pre>
                <p class="text-xs mt-2">FSSAI Standard: Minimum 3.5% protein hona chahiye.</p>
            `
        },
        {
            title: "Sucrose Ka Determination (Lane-Eynon Titration Method)",
            purpose: "Ice cream mein total sugar (sucrose) content determine karne ke liye.",
            reference: "IS 2802:1964; A.O.A.C Official Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Reducing sugars (lactose) ko pehle determine kiya jaata hai. Phir acid inversion se sucrose ko reducing sugars mein convert karke total reducing sugars determine kiye jaate hain. Difference se sucrose calculate hota hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>25g melted sample ko 250ml volumetric flask mein weigh karein.</li>
                    <li>~150ml distilled water daalein aur mix karein.</li>
                    <li>Protein precipitate karne ke liye 5ml potassium ferrocyanide aur 5ml zinc acetate daalein.</li>
                    <li>250ml tak make up karein, mix karein, aur filter karein.</li>
                    <li><strong>Before inversion:</strong> Filtrate se Fehling's solution ko titrate karein (reducing sugars = lactose).</li>
                    <li><strong>After inversion:</strong> 50ml filtrate mein 5ml conc. HCl daalein, 69°C par 15 min heat karein, cool karein, NaOH se neutralize karein, 100ml tak dilute karein. Phir se Fehling's solution titrate karein (total reducing sugars).</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Sucrose = (Total reducing sugars after inversion - Reducing sugars before inversion) × 0.95</code></pre>
            `
        },
        {
            title: "Added Starch Ka Determination",
            purpose: "Ice cream mein illegally added starch detect aur quantify karne ke liye.",
            reference: "A.O.A.C 17th edn, 2000 Modified Official method 925.50",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Qualitative Test (Detection):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>5ml melted ice cream ko boil karein aur cool karein.</li>
                    <li>Iodine solution ki kuch drops daalein.</li>
                    <li><strong>Blue-black colour</strong> = Starch present.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Quantitative Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sample se petroleum ether ke saath fat remove karein.</li>
                    <li>80% alcohol se starch precipitate karein.</li>
                    <li>Precipitate ko dilute H₂SO₄ ke saath acid hydrolysis karein (starch → glucose).</li>
                    <li>Lane-Eynon method se reducing sugars ki amount determine karein.</li>
                    <li>Starch content calculate karein: Starch = Glucose × 0.9</li>
                </ol>
            `
        },
        {
            title: "Total Ash Ka Determination",
            purpose: "Ice cream mein mineral content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~5g melted sample weigh karein.</li>
                    <li>Water bath par evaporate karein, phir hot plate par char karein.</li>
                    <li>Muffle furnace mein 550°C par 4-6 hours rakhein jab tak white ash mil jaaye.</li>
                    <li>Desiccator mein cool karein aur weigh karein.</li>
                </ol>
                <pre><code>% Ash = (Weight of ash / Weight of sample) × 100</code></pre>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Ice cream mix ki acidity measure karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g melted sample ek beaker mein weigh karein.</li>
                    <li>20ml neutral distilled water daalein.</li>
                    <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                    <li>0.1N NaOH se halka pink endpoint tak titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Coliform Count (Microbiological Test)",
            purpose: "Hygienic quality assess karne ke liye. Coliforms ki presence poor sanitation indicate karti hai.",
            reference: "IS 2802:1964; BIS Standards",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Coliforms Violet Red Bile Agar (VRBA) par characteristic dark red colonies banate hain. Sample ka serial dilution karke pour plate method se count kiya jaata hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>11g melted sample ko 99ml sterile butterfield's phosphate buffer mein mix karein (1:10 dilution).</li>
                    <li>Further serial dilutions banayein as required.</li>
                    <li>1ml appropriate dilution ko sterile petri dish mein pipette karein.</li>
                    <li>Cooled, molten VRBA (~45°C) pour karein, mix karein, solidify hone dein.</li>
                    <li>VRBA ki ek overlay layer daalein.</li>
                    <li>35°C par 24 ± 2 hours ke liye incubate karein.</li>
                    <li>Dark red colonies (0.5mm se badi) count karein.</li>
                </ol>
                <pre><code>Coliform count (CFU/g) = No. of colonies × Dilution factor</code></pre>
                <p class="text-xs">Standard: Max 10 CFU/g acceptable hai.</p>
            `
        }
    ]
},
"condensed-milk": {
    title: "Condensed Milk Ka Analysis",
    tests: [
        {
            title: "Total Solids Ka Determination",
            purpose: "Total solids content measure karne ke liye, condensed milk ke liye ek primary parameter.",
            reference: "IS 12333:1997 / ISO 6731:1989",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sand aur glass rod wali ek pre-weighed dish (W1) mein ~2g sample accurately weigh karein (W2).</li>
                    <li>5ml distilled water daalein aur paste banayein.</li>
                    <li>30 minutes ke liye boiling water bath par dry karein.</li>
                    <li>Phir 102 ± 2°C par hot air oven mein constant weight (W3) tak dry karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">Standard: Sweetened condensed milk mein minimum 74% total solids hona chahiye.</p>
            `
        },
        {
            title: "Fat Ka Determination (Rose-Gottlieb Method)",
            purpose: "Fat content measure karne ke liye.",
            reference: "IS 1224 (Part II):1977; Rose-Gottlieb Method",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>2-2.5g sample accurately weigh karein Mojonnier tube mein.</li>
                    <li>Garam distilled water se reconstitute karein (~10ml).</li>
                    <li>1.5ml ammonia daalein aur mix karein.</li>
                    <li>Standard Rose-Gottlieb extraction follow karein jaise liquid milk ke liye described hai.</li>
                    <li>Triple extraction karein, solvents evaporate karein, aur fat weigh karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = (Weight of extracted fat / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: Sweetened condensed milk mein minimum 9% fat.</p>
            `
        },
        {
            title: "Sucrose Ka Determination",
            purpose: "Sweetened condensed milk ka ek major component, added sugar ki quantity measure karne ke liye.",
            reference: "IS 1166:1968",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Method 1: Lane-Eynon Method (Titrimetric)</h4>
                <h4 class="font-semibold mt-3 mb-2">Principle:</h4>
                <p>Is method mein sample ko clarify karna aur acid inversion se pehle aur baad mein reducing sugars (lactose) determine karna involved hai. Inversion sucrose ko reducing sugars mein convert karta hai. Difference sucrose content deta hai.</p>
                <h4 class="font-semibold mt-3 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~10g sample ko weigh karein, garam paani mein dissolve karein.</li>
                    <li>Lead acetate se clarify karein (excess lead ko sodium oxalate se remove karein).</li>
                    <li>Volume make up karein, filter karein.</li>
                    <li><strong>Before inversion:</strong> Filtrate se Fehling's solution titrate karein (methylene blue indicator). Result = Lactose.</li>
                    <li><strong>After inversion:</strong> 50ml filtrate + 5ml conc HCl, 69°C par 15 min heat, cool, neutralize, dilute karein. Phir se titrate karein. Result = Total reducing sugars (lactose + inverted sucrose).</li>
                    <li>Lane-Eynon tables se sugar values calculate karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Sucrose = (Total reducing sugars % - Original reducing sugars %) × 0.95</code></pre>
                
                <h4 class="font-semibold mt-4 mb-2">Method 2: Polarimetric Method</h4>
                <h4 class="font-semibold mt-3 mb-2">Principle:</h4>
                <p>Yeh method ek clarified sample solution ke optical rotation mein change par based hai acid inversion se pehle aur baad mein. Sucrose right (+) rotate karta hai, inversion ke baad mixture left (-) rotate karta hai. Rotation mein change sucrose content ke proportional hota hai.</p>
                <h4 class="font-semibold mt-3 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Clarified solution ko polarimeter tube mein bharein.</li>
                    <li>Optical rotation measure karein (Direct reading P₁).</li>
                    <li>Acid inversion karein (HCl se heat karein).</li>
                    <li>Inverted solution ka rotation measure karein (Invert reading P₂).</li>
                </ol>
                <pre><code>% Sucrose = (P₁ - P₂) / [132.66 - 0.0794 × (m - 13)]</code></pre>
                <p class="text-xs">Jahaan m = total solids minus fat minus protein.</p>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Condensed milk ki acidity determine karne ke liye.",
            reference: "IS 1166:1968",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g condensed milk sample ek porcelain dish mein accurately weigh karein.</li>
                    <li>30ml garam (40°C) neutral distilled water daalein aur achhe se mix karein jab tak uniform dispersion ban jaaye.</li>
                    <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                    <li>0.1N NaOH se titrate karein jab tak halka pink colour aaye.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Condensed milk mein protein content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~2g sample ko Kjeldahl flask mein accurately weigh karein.</li>
                    <li>Standard Kjeldahl procedure follow karein (Digestion → Distillation → Titration).</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
            `
        },
        {
            title: "Total Ash Ka Determination",
            purpose: "Mineral content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~5g sample weigh karein.</li>
                    <li>Water bath par evaporate karein, phir char karein.</li>
                    <li>550°C par muffle furnace mein ash karein jab tak white ash mile.</li>
                    <li>Cool karein aur weigh karein.</li>
                </ol>
                <pre><code>% Ash = (Weight of ash / Weight of sample) × 100</code></pre>
            `
        }
    ]
},
"milk-powder": {
    title: "Milk Powder Ka Analysis",
    tests: [
        {
            title: "Moisture aur Total Solids Ka Determination",
            purpose: "Free moisture content determine karne ke liye, shelf life ke liye bahut important.",
            reference: "IS 16072:2012; IDF 26:2004",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Ek accurately weighed sample ko hot air oven mein 102±2°C par constant weight tak dry kiya jaata hai. Weight loss moisture content represent karta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek clean, dry, empty dish ko uske lid (W1) ke saath weigh karein.</li>
                    <li>Usme approximately 1g milk powder accurately weigh karein aur phir se weigh karein (W2).</li>
                    <li>Dish ko lid hatakar 102 ± 2°C par hot air oven mein 2 hours ke liye rakhein.</li>
                    <li>Dish ko lid lagakar desiccator mein room temperature tak cool karein.</li>
                    <li>Weigh karein aur weight note karein (W3).</li>
                    <li>Constant weight aane tak heating aur cooling repeat karein (1 hour intervals).</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
                <pre><code>% Moisture = 100 - % Total Solids</code></pre>
                <p class="text-xs mt-2">Standard: SMP mein max 4% moisture, WMP mein max 4% moisture.</p>
            `
        },
        {
            title: "Fat Ka Determination (Rose-Gottlieb Method)",
            purpose: "Milk powder mein fat content determine karne ke liye.",
            reference: "A.O.A.C 17th edn, 2000 Official method 932.06",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Mojonnier tube mein ~1g powder accurately weigh karein.</li>
                    <li>10ml garam distilled water daalein aur powder ko reconstitute karne ke liye achhe se mix karein (vortex ya vigorous shaking).</li>
                    <li>1.25ml ammonia solution daalein aur mix karein.</li>
                    <li>10ml ethanol daalein aur shake karein.</li>
                    <li>25ml diethyl ether daalein, 1 minute vigorously shake karein.</li>
                    <li>25ml petroleum ether daalein, 1 minute shake karein.</li>
                    <li>Centrifuge karein ya layers separate hone dein.</li>
                    <li>Ether layer decant karein pre-weighed flask mein.</li>
                    <li>Triple extraction karein.</li>
                    <li>Solvents evaporate karein, 102°C par dry karein, weigh karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = (Weight of fat / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: SMP mein max 1.5% fat, WMP mein min 26% fat.</p>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Milk powder mein protein content determine karne ke liye.",
            reference: "A.O.A.C 991.23",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~0.5g powder ko Kjeldahl flask mein accurately weigh karein.</li>
                    <li>Standard Kjeldahl digestion, distillation, aur titration karein.</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
                <p class="text-xs">Standard: SMP mein min 34% protein hona chahiye.</p>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Reconstituted milk powder ki acidity determine karne ke liye.",
            reference: "IS 11623:1986",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g powder ko 100ml distilled water mein reconstitute karein (10% solution).</li>
                    <li>Is reconstituted milk ka 10ml ek dish mein pipette karein.</li>
                    <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                    <li>0.1N NaOH se titrate karein.</li>
                    <li>Endpoint colour ko reference standard (Rosaniline acetate ya cobalt sulfate solution) se compare karein accurate endpoint ke liye.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Standard: Max 1.5% acidity (18°T) reconstituted mein.</p>
            `
        },
        {
            title: "Solubility Index Ka Determination",
            purpose: "Reconstitution ke baad undissolved powder ki amount measure karta hai. Yeh manufacturing quality indicate karta hai.",
            reference: "ISI Handbook of Food Analysis (Part XI) 1981; IDF 129A:1988",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Ek standard solution banaya jaata hai aur specific conditions mein centrifuge kiya jaata hai. Sediment ka volume graduated centrifuge tube mein measure kiya jaata hai. Kam sediment = achhi solubility = better quality powder.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>13g milk powder ko 100ml distilled water (24°C) mein reconstitute karein.</li>
                    <li>Blender mein 90 seconds ke liye mix karein.</li>
                    <li>50ml reconstituted milk ko calibrated centrifuge tube mein daalein.</li>
                    <li>900 rpm par 5 minutes ke liye centrifuge karein.</li>
                    <li>Supernatant carefully decant karein.</li>
                    <li>Tube ko phir se distilled water se 50ml tak fill karein, mix karein, aur centrifuge karein.</li>
                    <li>Settled sediment ka volume (ml) read karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Result:</h4>
                <pre><code>Solubility Index = Volume of sediment in ml</code></pre>
                <p class="text-xs">Standard: Extra grade SMP ke liye max 0.5 ml, Standard grade ke liye max 1.0 ml.</p>
            `
        },
        {
            title: "Total Ash Ka Determination",
            purpose: "Mineral content determine karne ke liye.",
            reference: "IS 1165:2005; A.O.A.C 930.30",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~3g powder accurately weigh karein.</li>
                    <li>Pehle dhire se hot plate par char karein (flaming se avoid karein).</li>
                    <li>Phir muffle furnace mein 550 ± 20°C par 4-6 hours rakhein jab tak grey/white ash mil jaaye.</li>
                    <li>Desiccator mein cool karein aur weigh karein. Constant weight tak repeat karein.</li>
                </ol>
                <pre><code>% Total Ash = (Weight of ash / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: SMP mein max 8.2% ash.</p>
            `
        },
        {
            title: "Lactose Ka Determination (Lane-Eynon Method)",
            purpose: "Milk powder mein lactose content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g powder ko distilled water mein dissolve karein.</li>
                    <li>Clarifying agents (potassium ferrocyanide + zinc acetate) daalein.</li>
                    <li>Volume make up karein aur filter karein.</li>
                    <li>Fehling's solution (5ml A + 5ml B) ko boil karein.</li>
                    <li>Sample filtrate se titrate karein, methylene blue indicator ke saath.</li>
                    <li>Lane-Eynon tables se lactose calculate karein.</li>
                </ol>
            `
        },
        {
            title: "Crude Fibre Ka Determination",
            purpose: "Cereal-based supplementary foods ke liye important test.",
            reference: "A.O.A.C Official Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Fat-free sample ko successively dilute acid aur phir dilute alkali se boil kiya jaata hai. Jo insoluble residue bachta hai usse dry karke weigh kiya jaata hai, phir ignite karke phir weigh kiya jaata hai. Weight loss on ignition crude fibre represent karta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>2g fat-free sample weigh karein.</li>
                    <li>200ml boiling 1.25% H₂SO₄ se 30 minutes boil karein. Filter karein aur wash karein.</li>
                    <li>Residue ko 200ml boiling 1.25% NaOH se 30 minutes boil karein. Filter aur wash karein.</li>
                    <li>Residue ko dry karein 105°C par aur weigh karein (W1).</li>
                    <li>550°C par ignite karein aur weigh karein (W2).</li>
                </ol>
                <pre><code>% Crude Fibre = [(W1 - W2) / Weight of sample] × 100</code></pre>
            `
        },
        {
            title: "Scorched Particles Ka Determination",
            purpose: "Manufacturing ke dauraan burn/scorch hue particles ki quantity assess karne ke liye. Powder ki appearance quality batati hai.",
            reference: "ADPI Standards; IDF 107:1995",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>25g milk powder ko 250ml distilled water (22-25°C) mein dissolve karein.</li>
                    <li>Solution ko ADPI standard comparison disc holder mein ek white filter disc se filter karein.</li>
                    <li>Filter disc ko dry karein.</li>
                    <li>Disc ko ADPI standard scorched particle discs (A, B, C, D grades) se compare karein.</li>
                </ol>
                <p class="text-xs">Grade A = Best (least scorched), Grade D = Worst.</p>
            `
        }
    ]
},
"casein": {
    title: "Edible Casein Products Ka Analysis",
    tests: [
        {
            title: "Moisture Ka Determination",
            purpose: "Casein products mein water content determine karne ke liye.",
            reference: "IS 13313:1992; IDF 78C:1981",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed dish mein ~3g casein sample weigh karein.</li>
                    <li>102 ± 2°C par hot air oven mein constant weight tak dry karein.</li>
                    <li>Desiccator mein cool karein aur weigh karein.</li>
                </ol>
                <pre><code>% Moisture = [(Initial weight - Final weight) / Weight of sample] × 100</code></pre>
                <p class="text-xs">Standard: Edible casein mein max 12% moisture.</p>
            `
        },
        {
            title: "Fat Ka Determination (SBR Method)",
            purpose: "Casein mein residual fat content determine karne ke liye.",
            reference: "IDF 127A:1995",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Schmid-Bondzynski-Ratzlaff (SBR) method use hota hai. Sample ko HCl se digest kiya jaata hai protein dissolve karne ke liye, aur fat ko diethyl ether aur petroleum ether se extract kiya jaata hai. Werner-Schmidt method ka hi modified version hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>1g casein sample ko weigh karein.</li>
                    <li>10ml concentrated HCl daalein aur water bath par 70-80°C tak heat karein jab tak dissolve ho jaaye.</li>
                    <li>Cool karein, 10ml ethanol daalein.</li>
                    <li>Diethyl ether (25ml) aur petroleum ether (25ml) se extract karein.</li>
                    <li>Triple extraction karein.</li>
                    <li>Solvents evaporate karein, dry karein, aur weigh karein.</li>
                </ol>
                <pre><code>% Fat = (Weight of fat / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: Edible casein mein max 2% fat.</p>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Casein mein protein content determine karne ke liye.",
            reference: "IDF 92:1979; A.O.A.C 991.23",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li><strong>Total Nitrogen (TN):</strong> ~0.3g casein ko Kjeldahl method se digest, distill, aur titrate karein.</li>
                    <li><strong>Non-Protein Nitrogen (NPN):</strong> 1g casein ko 50ml water mein disperse karein. 20ml 15% TCA daalein. Filter karein. Filtrate ki nitrogen Kjeldahl se determine karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% True Protein = (% TN - % NPN) × 6.38</code></pre>
                <p class="text-xs">Standard: Edible casein mein min 84% protein (dry basis).</p>
            `
        },
        {
            title: "Lactose Ka Determination (Photometric Method)",
            purpose: "Casein mein residual lactose determine karne ke liye.",
            reference: "IDF 106:1982",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Casein ko precipitate karke filtrate mein lactose ko phenol aur sulfuric acid ke saath react karaya jaata hai. Isse ek orange-yellow colour develop hota hai jo 490nm par spectrophotometrically measure hota hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>2g casein ko 50ml warm water mein suspend karein.</li>
                    <li>1N HCl se pH 4.6 tak acidify karein casein precipitate karne ke liye.</li>
                    <li>Filter karein. Filtrate mein lactose present hoga.</li>
                    <li>1ml filtrate + 1ml 5% phenol solution + 5ml concentrated H₂SO₄ (rapidly add karein).</li>
                    <li>Mix karein, 10 minutes stand hone dein.</li>
                    <li>30°C par water bath mein 20 minutes rakhein.</li>
                    <li>490nm par absorbance read karein spectrophotometer se.</li>
                    <li>Standard lactose solutions ke calibration curve se concentration determine karein.</li>
                </ol>
                <p class="text-xs">Standard: Edible casein mein max 1% lactose.</p>
            `
        },
        {
            title: "Ash Ka Determination",
            purpose: "Casein mein mineral content determine karne ke liye.",
            reference: "IDF 90C:1989",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure (Normal Ash):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~3g sample weigh karein.</li>
                    <li>825 ± 25°C par muffle furnace mein ignite karein jab tak saara carbon remove ho jaaye.</li>
                    <li>Cool karein aur weigh karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Procedure (Fixed Ash - for phosphorus retention):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sample mein magnesium acetate solution daalein ashing se pehle.</li>
                    <li>Phir normally ash karein. Magnesium acetate saara phosphorus retain karta hai.</li>
                    <li>Blank magnesium acetate bhi separately ash karein aur subtract karein.</li>
                </ol>
                <pre><code>% Fixed Ash = [(Ash with MgAc - Ash of blank MgAc) / Weight of sample] × 100</code></pre>
                <p class="text-xs">Standard: Acid casein mein max 2.5% ash, Rennet casein mein max 7.5% ash.</p>
            `
        },
        {
            title: "Free Acidity aur pH Ka Determination",
            purpose: "Casein ki acidity level check karne ke liye.",
            reference: "IDF 91A:1983",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Free Acidity:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>2g casein ko 60ml carbon dioxide-free distilled water mein suspend karein.</li>
                    <li>0.1N NaOH se titrate karein phenolphthalein endpoint tak.</li>
                </ol>
                <pre><code>Free Acidity (ml 0.1N NaOH/g) = Volume of NaOH / Weight of sample</code></pre>
                <h4 class="font-semibold mt-4 mb-2">pH Determination:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>5g casein ko 100ml distilled water mein suspend karein.</li>
                    <li>20 minutes tak stir karein.</li>
                    <li>Calibrated pH meter se pH measure karein.</li>
                </ol>
            `
        },
        {
            title: "Sediment Ka Determination",
            purpose: "Casein mein foreign particles ya impurities detect karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>25g casein ko warm sodium hydroxide solution mein dissolve karein.</li>
                    <li>Solution ko ek standard filter disc se filter karein.</li>
                    <li>Filter disc ko examine karein particles ke liye.</li>
                    <li>Standard comparison discs se compare karein.</li>
                </ol>
            `
        }
    ]
},
"whey-powder": {
    title: "Whey Powder Ka Analysis",
    tests: [
        {
            title: "Moisture Ka Determination",
            purpose: "Whey powder mein water content determine karne ke liye.",
            reference: "IDF 26:2004",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed dish mein ~2g whey powder weigh karein.</li>
                    <li>102 ± 2°C par hot air oven mein 2 hours ke liye dry karein.</li>
                    <li>Desiccator mein cool karein aur weigh karein.</li>
                    <li>Constant weight tak repeat karein.</li>
                </ol>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">Standard: Max 5% moisture.</p>
            `
        },
        {
            title: "Fat Ka Determination (Rose-Gottlieb Method)",
            purpose: "Whey powder mein fat content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~1g whey powder ko Mojonnier tube mein weigh karein.</li>
                    <li>10ml garam paani se reconstitute karein.</li>
                    <li>Milk powder ke liye described Rose-Gottlieb method follow karein.</li>
                </ol>
                <pre><code>% Fat = (Weight of fat / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: Max 1.5% fat.</p>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Whey powder mein protein content determine karne ke liye.",
            reference: "A.O.A.C 991.23",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~0.5g whey powder ko Kjeldahl flask mein weigh karein.</li>
                    <li>Standard Kjeldahl procedure follow karein.</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
                <p class="text-xs">WPC34 mein min 34% protein, WPC80 mein min 80% protein, WPI mein min 90% protein.</p>
            `
        },
        {
            title: "Total Ash Ka Determination",
            purpose: "Whey powder mein mineral content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~3g sample weigh karein.</li>
                    <li>Hot plate par char karein.</li>
                    <li>550 ± 20°C par muffle furnace mein ignite karein jab tak white ash mile.</li>
                    <li>Cool karein aur weigh karein.</li>
                </ol>
                <pre><code>% Ash = (Weight of ash / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: Normal whey powder mein ~8-9% ash.</p>
            `
        },
        {
            title: "pH Ka Determination",
            purpose: "Whey powder ka pH check karne ke liye (sweet vs acid whey).",
            reference: "IDF Standards",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g whey powder ko 90ml distilled water mein dissolve karein (10% w/v solution banayein).</li>
                    <li>Achhe se stir karein jab tak fully dissolved ho jaaye.</li>
                    <li>Solution ko 20 ± 2°C par equilibrate karein.</li>
                    <li>Calibrated pH meter se pH measure karein (buffer solutions pH 4.0 aur 7.0 se calibrate karke).</li>
                </ol>
                <p class="text-xs">Sweet whey pH: 6.0-6.5; Acid whey pH: 4.5-5.0</p>
            `
        },
        {
            title: "Lactose Ka Determination (Lane-Eynon Method)",
            purpose: "Whey powder mein lactose content determine karne ke liye.",
            reference: "A.O.A.C Official Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Lactose ek reducing sugar hai jo Fehling's solution reduce karta hai. Lane-Eynon titration se lactose ki amount calculate hoti hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g whey powder ko distilled water mein dissolve karein.</li>
                    <li>Clarifying agents daalein (K₄Fe(CN)₆ + ZnAc₂).</li>
                    <li>250ml tak volume make up karein aur filter karein.</li>
                    <li>5ml each Fehling's A aur B ko boil karein.</li>
                    <li>Filtrate se titrate karein, methylene blue indicator ke saath.</li>
                    <li>Tables se anhydrous lactose calculate karein.</li>
                </ol>
                <pre><code>% Lactose (anhydrous) = (Fehling's factor × Dilution) / (Titre × Weight of sample) × 100</code></pre>
                <p class="text-xs">Normal whey powder mein ~70% lactose hota hai.</p>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Whey powder ki acidity level determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g whey powder ko 100ml distilled water mein dissolve karein.</li>
                    <li>Is solution ka 10ml pipette karein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se pink endpoint tak titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        }
    ]
},
"lassi": {
    title: "Lassi Ka Analysis",
    tests: [
        {
            title: "Total Solids Ka Determination",
            purpose: "Lassi mein total solids content determine karne ke liye.",
            reference: "FSSAI Manual of Methods; IS 12333:1997",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Lassi mein developed acidity ki wajah se, sample ko pehle NaOH se neutralize kiya jaata hai taaki drying ke dauraan volatile acid losses prevent ho sakein. Phir standard gravimetric method se total solids determine kiye jaate hain.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed flat bottom dish (W1) mein ~5g lassi sample accurately weigh karein (W2).</li>
                    <li>1ml 0.1N NaOH daalein aur mix karein (acidity neutralize karne ke liye).</li>
                    <li>Water bath par 30 minutes ke liye evaporate karein.</li>
                    <li>Hot air oven mein 100 ± 2°C par constant weight (W3) tak dry karein.</li>
                    <li>Added NaOH ka weight final weight se subtract karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Total Solids = [(W3 - Weight of NaOH - W1) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">FSSAI Standard: Plain lassi mein min 15% total solids.</p>
            `
        },
        {
            title: "Fat Ka Determination (Gerber Method)",
            purpose: "Lassi mein fat content determine karne ke liye.",
            reference: "IS 1479 (Part I):1961",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Gerber butyrometer mein 10ml sulfuric acid daalein.</li>
                    <li>10.75ml well-mixed lassi sample ko dhire se deewar ke sahaare daalein.</li>
                    <li>1ml amyl alcohol daalein.</li>
                    <li>Lock stopper lagayein aur shake karein jab tak homogeneous ho jaaye.</li>
                    <li>65 ± 2°C par water bath mein 5 minutes rakhein.</li>
                    <li>1100-1200 rpm par 5 minutes centrifuge karein.</li>
                    <li>Water bath mein 5 minutes wapas rakhein.</li>
                    <li>Fat column ko calibrated stem se read karein.</li>
                </ol>
                <p class="text-xs">Standard: Lassi mein min 2% fat hona chahiye.</p>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Lassi mein developed acidity measure karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Ek beaker mein 10g lassi sample weigh karein.</li>
                    <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                    <li>0.1N NaOH se halka pink endpoint tak titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Standard: Lassi ki acidity minimum 0.7% (as lactic acid) honi chahiye.</p>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Lassi mein protein content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g lassi ko Kjeldahl flask mein weigh karein.</li>
                    <li>Standard Kjeldahl method follow karein.</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
            `
        },
        {
            title: "Sucrose Ka Determination (Sweetened Lassi mein)",
            purpose: "Sweetened lassi mein added sugar content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <p>Lane-Eynon method follow karein jaise condensed milk ke liye describe kiya gaya hai. Reducing sugars (lactose) before inversion aur total reducing sugars after acid inversion determine karein. Difference se sucrose calculate hota hai.</p>
                <pre><code>% Sucrose = (Total reducing sugars after inversion - Reducing sugars before inversion) × 0.95</code></pre>
            `
        },
        {
            title: "Artificial Sweeteners Ka Detection",
            purpose: "Lassi mein illegally added artificial sweeteners (saccharin, aspartame) detect karne ke liye.",
            reference: "FSSAI Manual of Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Saccharin Detection:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>50ml lassi ko 5ml conc. HCl ke saath acidify karein.</li>
                    <li>30ml diethyl ether se 3 baar extract karein.</li>
                    <li>Combined ether extract ko evaporate karein.</li>
                    <li>Residue mein 0.5ml conc. H₂SO₄ aur 0.5ml resorcinol solution daalein.</li>
                    <li>Gently heat karein aur phir excess NaOH solution mein pour karein.</li>
                    <li><strong>Intense green fluorescence</strong> = Saccharin PRESENT.</li>
                </ol>
            `
        },
        {
            title: "Coliform Test (Microbiological Quality)",
            purpose: "Lassi ki hygienic quality assess karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>1ml lassi ko 9ml sterile saline mein dilute karein (serial dilutions).</li>
                    <li>1ml diluted sample ko sterile petri dish mein pour karein.</li>
                    <li>Violet Red Bile Agar (VRBA) pour karein (~45°C).</li>
                    <li>Solidify hone dein, overlay daalein.</li>
                    <li>35°C par 24 hours incubate karein.</li>
                    <li>Dark red colonies count karein.</li>
                </ol>
                <p class="text-xs">Standard: Max 10 CFU/ml coliforms.</p>
            `
        }
    ]
},
"chhena-rasogolla": {
    title: "Chhena / Rasogolla Ka Analysis",
    tests: [
        {
            title: "Chhena: Moisture Ka Determination",
            purpose: "Chhena mein water content determine karne ke liye, jo texture aur quality ke liye critical hai.",
            reference: "IS 5162:1969",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Paneer/cheese ke similar, chhena ko sand ke saath mix karke oven mein constant weight tak dry kiya jaata hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sand aur glass rod wali pre-weighed dish (W1) mein ~3g finely crumbled chhena weigh karein (W2).</li>
                    <li>Kuch drops distilled water daalein aur sand ke saath thorough mixing karein.</li>
                    <li>Hot plate par initial evaporation karein.</li>
                    <li>102 ± 2°C par hot air oven mein 5 hours ke liye dry karein.</li>
                    <li>Desiccator mein cool karein aur weigh karein (W3). Constant weight tak repeat karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">Standard: Good quality chhena mein 50-55% moisture hona chahiye.</p>
            `
        },
        {
            title: "Chhena: Fat Ka Determination (Werner-Schmidt Method)",
            purpose: "Chhena mein fat content determine karne ke liye.",
            reference: "IS 5162:1969",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>1-2g prepared chhena sample ko beaker mein weigh karein.</li>
                    <li>10ml conc. HCl daalein aur water bath par heat karein jab tak dissolve ho jaaye.</li>
                    <li>Cool karein, 10ml ethanol daalein.</li>
                    <li>Mojonnier flask mein transfer karein.</li>
                    <li>25ml diethyl ether + 25ml petroleum ether se extract karein.</li>
                    <li>Triple extraction karein.</li>
                    <li>Solvents evaporate karein, dry karein (102°C), weigh karein.</li>
                </ol>
                <pre><code>% Fat = (Weight of fat / Weight of sample) × 100</code></pre>
                <pre><code>% Fat on dry basis = (% Fat / % Total Solids) × 100</code></pre>
                <p class="text-xs">Standard: Chhena mein min 50% fat (dry basis).</p>
            `
        },
        {
            title: "Chhena: Titratable Acidity",
            purpose: "Chhena ki acidity measure karne ke liye, jo quality aur suitability ke liye important hai.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g chhena ko beaker mein weigh karein.</li>
                    <li>20ml warm neutral distilled water daalein aur smooth paste banayein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se pink endpoint tak titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Good chhena ki acidity 0.3-0.5% honi chahiye.</p>
            `
        },
        {
            title: "Rasogolla: Total Solids Ka Determination",
            purpose: "Rasogolla mein total solids determine karne ke liye.",
            reference: "IS 14542:1998",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Rasogolla ko sugar syrup se nikaalein aur blotting paper se excess syrup remove karein.</li>
                    <li>Rasogolla ko finely grate/crush karein.</li>
                    <li>Sand wali dish mein ~3g prepared sample weigh karein.</li>
                    <li>Sand ke saath mix karein, kuch drops paani daalein.</li>
                    <li>Water bath par preliminary drying karein.</li>
                    <li>Oven mein 102 ± 2°C par constant weight tak dry karein.</li>
                </ol>
                <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
            `
        },
        {
            title: "Rasogolla: Fat Ka Determination",
            purpose: "Rasogolla mein fat content determine karne ke liye.",
            procedure: `<p>Werner-Schmidt acid digestion method use karein jaise chhena ke liye describe kiya gaya hai.</p>`
        },
        {
            title: "Rasogolla: Sucrose Ka Determination",
            purpose: "Rasogolla mein sugar content (syrup aur body dono) determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Rasogolla body aur syrup ko separately analyse karein.</li>
                    <li><strong>Syrup:</strong> Refractometer se Brix reading lein. Sucrose concentration directly read karein.</li>
                    <li><strong>Body:</strong> Lane-Eynon method se reducing sugars before aur after acid inversion determine karein. Difference se sucrose calculate karein.</li>
                </ol>
                <pre><code>% Sucrose = (Total reducing sugars - Original reducing sugars) × 0.95</code></pre>
                <p class="text-xs">Standard: Sugar syrup concentration 40-55° Brix hona chahiye.</p>
            `
        },
        {
            title: "Rasogolla: Sponge Test (Texture Assessment)",
            purpose: "Rasogolla ki spongy texture evaluate karne ke liye - ek important quality parameter.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Rasogolla ko sugar syrup se nikaalein.</li>
                    <li>Blotting paper par rakhein 1 minute ke liye.</li>
                    <li>Fingers se gently squeeze karein.</li>
                    <li>Release karne par shape recover honi chahiye (elasticity test).</li>
                    <li>Texture Profile Analysis (TPA) instrumentally bhi kar sakte hain texture analyzer se.</li>
                </ol>
                <p class="text-xs">Good rasogolla squeeze karne ke baad original shape mein wapas aa jaata hai.</p>
            `
        },
        {
            title: "Chhena/Rasogolla: Starch Detection",
            purpose: "Adulterant ke roop mein starch ka detection.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>1g sample ko 2ml distilled water ke saath mash karein.</li>
                    <li>Boil karein aur cool karein.</li>
                    <li>Iodine solution ki ek drop daalein.</li>
                    <li><strong>Blue-black colour</strong> = Starch PRESENT (adulteration).</li>
                </ol>
            `
        }
    ]
},
"rabri": {
    title: "Rabri Ka Analysis",
    tests: [
        {
            title: "Total Solids Ka Determination",
            purpose: "Rabri mein total solids content determine karne ke liye.",
            reference: "FSSAI Manual",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sand wali pre-weighed dish mein ~3g rabri sample weigh karein.</li>
                    <li>Sand ke saath mix karein, kuch drops paani daalein.</li>
                    <li>Water bath par 30 minutes dry karein.</li>
                    <li>Hot air oven mein 100 ± 2°C par constant weight tak dry karein.</li>
                </ol>
                <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
            `
        },
        {
            title: "Fat Ka Determination",
            purpose: "Rabri mein fat content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <p>Agar rabri mein added sugar hai toh Rose-Gottlieb method use karein. Agar koi sugar nahi hai toh Werner-Schmidt acid digestion method use karein.</p>
                <p class="mt-2">Rose-Gottlieb ke liye: ~2g sample + 10ml warm water + ammonia + ethanol + diethyl ether + petroleum ether se triple extraction.</p>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Rabri ki acidity measure karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g rabri ko beaker mein weigh karein.</li>
                    <li>30ml warm distilled water daalein aur mix karein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se titrate karein pink endpoint tak.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Sucrose Ka Determination",
            purpose: "Rabri mein added sugar content determine karne ke liye.",
            procedure: `<p>Lane-Eynon method follow karein jaise condensed milk ke liye describe kiya gaya hai.</p>`
        },
        {
            title: "Protein Ka Determination",
            purpose: "Rabri mein protein content determine karne ke liye.",
            procedure: `<p>Kjeldahl method follow karein. ~2g sample lein. Conversion factor 6.38 use karein.</p>`
        },
        {
            title: "Starch Detection",
            purpose: "Rabri mein adulterant ke roop mein starch detect karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>5g rabri ko 10ml paani mein disperse karein.</li>
                    <li>Boil karein aur cool karein.</li>
                    <li>Iodine solution ki kuch drops daalein.</li>
                    <li><strong>Blue-black colour</strong> = Starch PRESENT.</li>
                </ol>
            `
        },
        {
            title: "Added Colour Detection",
            purpose: "Rabri mein illegally added artificial colours detect karne ke liye.",
            reference: "FSSAI Manual of Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g rabri ko 20ml water mein dissolve karein.</li>
                    <li>Mixture ko acidify karein dilute HCl se.</li>
                    <li>White defatted wool ke ek piece ko solution mein boil karein 10-15 minutes.</li>
                    <li>Wool ko nikaalen aur distilled water se wash karein.</li>
                    <li>Agar wool par colour remain karta hai = <strong>Artificial colour PRESENT</strong>.</li>
                    <li>Specific dyes identify karne ke liye thin layer chromatography (TLC) ya paper chromatography use karein.</li>
                </ol>
            `
        }
    ]
},
"flavoured-milk": {
    title: "Flavoured Milk Ka Analysis",
    tests: [
        {
            title: "Fat Ka Determination (Gerber Method)",
            purpose: "Flavoured milk mein fat content determine karne ke liye.",
            reference: "IS 1479 (Part I):1961",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Butyrometer mein 10ml H₂SO₄ daalein.</li>
                    <li>10.75ml well-mixed flavoured milk sample daalein.</li>
                    <li>1ml amyl alcohol daalein.</li>
                    <li>Standard Gerber procedure follow karein (shake, water bath 65°C, centrifuge, read).</li>
                </ol>
                <p class="text-xs">Standard: Flavoured milk mein min 1.5-2.0% fat (variety ke according).</p>
            `
        },
        {
            title: "Total Solids Ka Determination",
            purpose: "Flavoured milk mein total solids determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed dish mein ~5g sample weigh karein.</li>
                    <li>Water bath par evaporate karein.</li>
                    <li>102 ± 2°C par oven mein constant weight tak dry karein.</li>
                </ol>
                <pre><code>% Total Solids = [(W3 - W1) / (W2 - W1)] × 100</code></pre>
            `
        },
        {
            title: "Sucrose Ka Determination",
            purpose: "Flavoured milk mein added sugar measure karne ke liye.",
            procedure: `<p>Lane-Eynon method follow karein. Reducing sugars (lactose) before inversion aur total reducing sugars after acid inversion determine karein. Difference se sucrose calculate karein.</p>
            <pre><code>% Sucrose = (Total reducing sugars - Reducing sugars before inversion) × 0.95</code></pre>`
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Flavoured milk mein protein content determine karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g sample ko Kjeldahl flask mein weigh karein.</li>
                    <li>Standard Kjeldahl procedure follow karein.</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
            `
        },
        {
            title: "Titratable Acidity",
            purpose: "Acidity level check karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10ml sample lein porcelain dish mein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se titrate karein pink endpoint tak.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Artificial Colour Detection",
            purpose: "Permitted aur non-permitted artificial colours detect karne ke liye.",
            reference: "FSSAI Manual of Methods",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>50ml sample ko dilute HCl se acidify karein.</li>
                    <li>Defatted white wool ka piece daalein aur 15 minutes boil karein.</li>
                    <li>Wool ko nikaalen, distilled water se wash karein.</li>
                    <li>Agar wool par colour absorb hua hai = Synthetic dye present.</li>
                    <li>Wool ko dilute ammonia mein boil karein colour strip karne ke liye.</li>
                    <li>Extracted colour ko TLC/Paper chromatography se identify karein.</li>
                </ol>
            `
        },
        {
            title: "Preservatives Ka Detection (Formalin Test)",
            purpose: "Illegally added formalin preservative detect karne ke liye.",
            reference: "FSSAI Manual",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Hehner's Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Test tube mein 10ml flavoured milk lein.</li>
                    <li>5ml concentrated H₂SO₄ (containing trace of ferric chloride) ko deewar ke sahaare slowly add karein taaki layers ban jaayein.</li>
                    <li>Two layers ke junction par observe karein.</li>
                    <li><strong>Violet/purple ring</strong> = Formalin PRESENT.</li>
                    <li><strong>Brown ring</strong> (normal) = Formalin ABSENT.</li>
                </ol>
            `
        },
        {
            title: "Cocoa/Chocolate Content (Flavoured Milk mein)",
            purpose: "Chocolate flavoured milk mein cocoa content verify karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure (Theobromine Estimation):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>100ml sample ko acidify karein aur protein precipitate karein.</li>
                    <li>Filter karein aur filtrate ko chloroform se extract karein.</li>
                    <li>Chloroform ko evaporate karein.</li>
                    <li>Residue ko spectrophotometrically 272nm par measure karein.</li>
                    <li>Theobromine content se cocoa powder content calculate karein.</li>
                </ol>
            `
        }
    ]
},
"buttermilk-chaas": {
    title: "Buttermilk / Chaas Ka Analysis",
    tests: [
        {
            title: "Total Solids Ka Determination",
            purpose: "Chaas mein total solids determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed dish mein ~5g chaas sample weigh karein.</li>
                    <li>Acidity neutralize karne ke liye NaOH daalein (dahi jaisa).</li>
                    <li>Water bath par evaporate karein, phir 100 ± 2°C par oven mein constant weight tak dry karein.</li>
                </ol>
                <pre><code>% Total Solids = [(W3 - NaOH weight - W1) / (W2 - W1)] × 100</code></pre>
            `
        },
        {
            title: "Fat Ka Determination (Gerber Method)",
            purpose: "Chaas mein fat content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <p>Standard Gerber method follow karein jaise liquid milk ke liye described hai. 10ml H₂SO₄ + 10.75ml sample + 1ml amyl alcohol. Centrifuge karein aur fat percentage read karein.</p>
                <p class="text-xs mt-2">Note: Chaas ki fat content doodh se kam hoti hai, isliye low-range butyrometer use karein.</p>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Chaas ki acidity measure karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g sample ek beaker mein weigh karein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se pink endpoint tak titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Standard: Chaas ki acidity typically 0.5-1.0% hoti hai.</p>
            `
        },
        {
            title: "SNF (Solids-Not-Fat) Ka Determination",
            purpose: "Chaas mein non-fat solids determine karne ke liye.",
            procedure: `
                <pre><code>% SNF = % Total Solids - % Fat</code></pre>
            `
        },
        {
            title: "pH Ka Determination",
            purpose: "Chaas ka pH measure karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>pH meter ko standard buffer solutions (pH 4.0 aur 7.0) se calibrate karein.</li>
                    <li>Sample ko 20 ± 2°C par equilibrate karein.</li>
                    <li>pH meter ki electrode ko sample mein daalein.</li>
                    <li>Stable reading note karein.</li>
                </ol>
                <p class="text-xs">Expected pH: 4.0 - 4.5</p>
            `
        },
        {
            title: "Added Water Ka Detection (Cryoscopy)",
            purpose: "Chaas mein paani ki adulteration detect karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Doodh ka freezing point -0.540°C ke around hota hai. Paani milane se freezing point 0°C ki taraf shift hota hai. Cryoscope se freezing point precisely measure hota hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Cryoscope ko calibrate karein standard NaCl solutions se.</li>
                    <li>2.5ml sample ko test tube mein daalein.</li>
                    <li>Instrument mein set karein aur freezing point read karein.</li>
                    <li>Freezing point -0.525°C se zyada (0°C ki taraf) ho toh water addition suspected.</li>
                </ol>
                <pre><code>% Added Water = [(FP_genuine - FP_sample) / FP_genuine] × 100</code></pre>
            `
        }
    ]
},
"dairy-whitener": {
    title: "Dairy Whitener Ka Analysis",
    tests: [
        {
            title: "Moisture Ka Determination",
            purpose: "Dairy whitener mein moisture content determine karne ke liye.",
            reference: "IS 16072:2012",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed dish mein ~1g sample weigh karein.</li>
                    <li>102 ± 2°C par oven mein 2 hours dry karein.</li>
                    <li>Desiccator mein cool karein aur weigh karein.</li>
                    <li>Constant weight tak repeat karein.</li>
                </ol>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">Standard: Max 4% moisture.</p>
            `
        },
        {
            title: "Fat Ka Determination (Rose-Gottlieb Method)",
            purpose: "Dairy whitener mein fat content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~1g dairy whitener ko Mojonnier tube mein weigh karein.</li>
                    <li>10ml warm water se reconstitute karein.</li>
                    <li>Standard Rose-Gottlieb extraction procedure follow karein.</li>
                </ol>
                <pre><code>% Fat = (Weight of fat / Weight of sample) × 100</code></pre>
            `
        },
        {
            title: "Total Solids Ka Determination",
            purpose: "Dairy whitener ka total solids determine karne ke liye.",
            procedure: `<pre><code>% Total Solids = 100 - % Moisture</code></pre>`
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Protein content determine karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~0.5g sample ko Kjeldahl flask mein weigh karein.</li>
                    <li>Standard Kjeldahl procedure follow karein.</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>
            `
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Reconstituted dairy whitener ki acidity check karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g powder ko 100ml distilled water mein reconstitute karein.</li>
                    <li>10ml reconstituted solution lein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Solubility Index Ka Determination",
            purpose: "Reconstitution quality measure karne ke liye.",
            procedure: `<p>Milk powder ke liye described procedure follow karein. Low sediment volume desirable hai.</p>`
        },
        {
            title: "Added Sugar Ka Determination",
            purpose: "Dairy whitener mein added sucrose ya dextrose detect aur quantify karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <p>Lane-Eynon method se reducing sugars before aur after acid inversion determine karein.</p>
                <pre><code>% Sucrose = (Total reducing sugars after inversion - Reducing sugars before inversion) × 0.95</code></pre>
            `
        },
        {
            title: "Vegetable Fat Ka Detection (Phytosterol Acetate Test)",
            purpose: "Dairy whitener mein non-dairy (vegetable) fat ki presence detect karne ke liye.",
            reference: "FSSAI Manual; IS 3508",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Dairy fat mein primarily cholesterol hota hai, jabki vegetable fats mein phytosterols (sitosterol, stigmasterol) hote hain. Unsaponifiable matter se sterols isolate karke aur unke acetates banake melting point check kiya jaata hai. Cholesterol acetate (114.3°C) aur phytosterol acetate (137°C) ke melting points different hain.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Fat extract se unsaponifiable matter isolate karein (saponification + ether extraction).</li>
                    <li>Unsaponifiable matter ko digitonin se treat karein (sterols precipitate karne ke liye).</li>
                    <li>Precipitate ko acetic anhydride se treat karein sterol acetates banane ke liye.</li>
                    <li>Sterol acetates ka melting point determine karein.</li>
                    <li>Melting point > 117°C = Vegetable fat mixed hai.</li>
                </ol>
            `
        }
    ]
},
"uht-milk": {
    title: "UHT Milk Ka Analysis",
    tests: [
        {
            title: "Fat Ka Determination (Gerber Method)",
            purpose: "UHT milk mein fat content determine karne ke liye.",
            reference: "IS 1479 (Part I):1961",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <p>Standard Gerber method follow karein. UHT milk ko room temperature par laayein aur achhe se mix karein before testing.</p>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Butyrometer mein 10ml H₂SO₄ daalein.</li>
                    <li>10.75ml UHT milk daalein deewar ke sahaare.</li>
                    <li>1ml amyl alcohol daalein.</li>
                    <li>Stopper lagaayein, shake karein, water bath (65°C, 5 min), centrifuge (5 min), water bath (5 min), read karein.</li>
                </ol>
            `
        },
        {
            title: "Total Solids Ka Determination",
            purpose: "UHT milk mein total solids determine karne ke liye.",
            procedure: `<p>Standard gravimetric method follow karein jaise processed milk ke liye described hai.</p>`
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "UHT milk mein protein content determine karne ke liye.",
            procedure: `<p>~5g sample lein aur standard Kjeldahl procedure follow karein.</p>
            <pre><code>% Protein = % Total Nitrogen × 6.38</code></pre>`
        },
        {
            title: "Titratable Acidity",
            purpose: "UHT milk ki acidity measure karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10ml sample ek dish mein lein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Turbidity Test (Sterilization Check)",
            purpose: "UHT processing ki adequacy check karne ke liye. Agar whey proteins completely denature nahi hue toh turbidity dikhegi.",
            reference: "FSSAI Manual; IS 4883",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Properly sterilized/UHT treated milk mein saare whey proteins denature ho chuke hote hain. Agar ammonium sulfate se precipitation ke baad bhi supernatant clear rahe toh sterilization proper hua hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>20ml UHT milk ko test tube mein lein.</li>
                    <li>5ml saturated ammonium sulfate solution daalein.</li>
                    <li>Mix karein aur filter karein.</li>
                    <li>Filtrate ko 100°C par 5 minutes ke liye boil karein.</li>
                    <li>Observe karein: <strong>Clear filtrate</strong> = Proper UHT treatment. <strong>Turbid/cloudy filtrate</strong> = Inadequate treatment (undenatured whey proteins present).</li>
                </ol>
            `
        },
        {
            title: "Sterility Test (Microbiological)",
            purpose: "UHT milk ki commercial sterility confirm karne ke liye.",
            reference: "IS 4883:1980; BIS Standards",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Aseptic conditions mein UHT milk ke pack se sample collect karein.</li>
                    <li>2 sets mein sample ko sterile tubes/bottles mein transfer karein.</li>
                    <li>Set 1: 30°C par 15 days incubate karein (mesophilic organisms ke liye).</li>
                    <li>Set 2: 55°C par 7 days incubate karein (thermophilic organisms ke liye).</li>
                    <li>Incubation ke baad check karein: pH change, clotting, gas production, off-odour, colony count.</li>
                    <li>Agar koi significant change nahi hai = <strong>Commercially sterile</strong>.</li>
                </ol>
            `
        },
        {
            title: "Sedimentation Test",
            purpose: "UHT milk mein sedimentation/settling detect karne ke liye, storage stability check karta hai.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>UHT milk ke pack ko undisturbed rakhein specified storage conditions par.</li>
                    <li>Pack kholein aur dhire se content nikaalein.</li>
                    <li>Bottom mein koi sediment/deposit check karein.</li>
                    <li>Sediment ko weigh karein dry weight basis par.</li>
                </ol>
            `
        }
    ]
},
"traditional-sweets": {
    title: "Traditional Dairy Sweets Ka Analysis (Peda, Burfi, Gulab Jamun, Milk Cake)",
    tests: [
        {
            title: "Total Solids / Moisture Ka Determination",
            purpose: "Dairy sweets mein moisture aur total solids determine karne ke liye.",
            reference: "FSSAI Manual; IS Standards for respective products",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure (Sand Drying Method):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sand + glass rod wali pre-weighed dish (W1) mein ~3g finely grated/crushed sample weigh karein (W2).</li>
                    <li>Kuch drops distilled water daalein aur sand ke saath thoroughly mix karein.</li>
                    <li>Hot plate par preliminary drying karein.</li>
                    <li>Hot air oven mein 102 ± 2°C par 5 hours (ya constant weight tak) dry karein.</li>
                    <li>Desiccator mein cool karein, weigh karein (W3).</li>
                </ol>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <pre><code>% Total Solids = 100 - % Moisture</code></pre>
                <p class="text-xs mt-2">Standards: Peda mein max 20% moisture, Burfi mein max 18% moisture.</p>
            `
        },
        {
            title: "Fat Ka Determination",
            purpose: "Dairy sweets mein fat content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Method Selection:</h4>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li><strong>Without added sugar:</strong> Werner-Schmidt (HCl acid digestion) method use karein.</li>
                    <li><strong>With added sugar (Peda, Burfi, Gulab Jamun):</strong> Rose-Gottlieb method use karein, kyunki sugar HCl ke saath charring problem de sakta hai.</li>
                </ul>
                <h4 class="font-semibold mt-4 mb-2">Rose-Gottlieb Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~2g sample ko Mojonnier tube mein weigh karein.</li>
                    <li>10ml warm water mein dissolve karein.</li>
                    <li>1.5ml ammonia, 10ml ethanol, 25ml diethyl ether, 25ml petroleum ether ke saath extract karein.</li>
                    <li>Triple extraction karein, solvents evaporate karein, fat weigh karein.</li>
                </ol>
            `
        },
        {
            title: "Sucrose Ka Determination (Lane-Eynon Method)",
            purpose: "Added sugar content determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~10g sample ko warm water mein dissolve karein.</li>
                    <li>Clarifying agents (potassium ferrocyanide + zinc acetate) se treat karein.</li>
                    <li>Volume make up karein (250ml) aur filter karein.</li>
                    <li><strong>Before inversion:</strong> Fehling's solution titrate karein (Reducing sugars = Lactose).</li>
                    <li><strong>After inversion:</strong> HCl se invert karein, neutralize karein, phir se titrate karein (Total reducing sugars).</li>
                    <li>Difference se sucrose calculate karein.</li>
                </ol>
                <pre><code>% Sucrose = (Total reducing sugars - Original reducing sugars) × 0.95</code></pre>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Protein content determine karne ke liye.",
            procedure: `<p>~1g sample lein, standard Kjeldahl method follow karein. % Protein = % N × 6.38</p>`
        },
        {
            title: "Titratable Acidity Ka Determination",
            purpose: "Sweet ki acidity measure karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>10g sample ko 30ml warm water mein dissolve karein.</li>
                    <li>Phenolphthalein indicator daalein.</li>
                    <li>0.1N NaOH se pink endpoint tak titrate karein.</li>
                </ol>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
            `
        },
        {
            title: "Total Ash Ka Determination",
            purpose: "Mineral content determine karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~5g sample weigh karein.</li>
                    <li>Water bath par evaporate karein, phir char karein.</li>
                    <li>550°C par muffle furnace mein ash karein.</li>
                    <li>Cool aur weigh karein.</li>
                </ol>
                <pre><code>% Ash = (Weight of ash / Weight of sample) × 100</code></pre>
            `
        },
        {
            title: "Starch Detection",
            purpose: "Illegally added starch detect karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>2g sample ko 5ml water mein dissolve/disperse karein.</li>
                    <li>Boil karein aur cool karein.</li>
                    <li>Iodine solution ki kuch drops daalein.</li>
                    <li><strong>Blue-black</strong> = Starch present.</li>
                </ol>
            `
        },
        {
            title: "Vanaspati/Non-dairy Fat Detection (Baudouin Test)",
            purpose: "Non-dairy fat ki adulteration detect karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Sample se fat extract karein (petroleum ether se ya Rose-Gottlieb se).</li>
                    <li>5ml melted fat + 5ml conc. HCl + 0.4ml 2% furfural solution.</li>
                    <li>2 minutes vigorously shake karein.</li>
                    <li><strong>Pink/Red colour</strong> in acid layer = Vanaspati present.</li>
                </ol>
            `
        },
        {
            title: "Gulab Jamun: Sugar Syrup Ka Analysis (Brix)",
            purpose: "Gulab Jamun ke sugar syrup ki concentration measure karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Gulab jamun ko syrup se carefully nikaalen.</li>
                    <li>Syrup ko filter karein agar particles hon.</li>
                    <li>Refractometer ko distilled water se calibrate karein (0° Brix at 20°C).</li>
                    <li>Syrup ki kuch drops refractometer ke prism par daalein.</li>
                    <li>Brix reading note karein.</li>
                </ol>
                <p class="text-xs">Standard: Gulab Jamun syrup mein typically 55-65° Brix hona chahiye.</p>
            `
        },
        {
            title: "Gulab Jamun: Absorption Ratio",
            purpose: "Gulab Jamun ka sugar syrup absorption ratio determine karne ke liye.",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Freshly fried gulab jamun (before soaking) ka weight lein (W_dry).</li>
                    <li>Sugar syrup mein prescribed time tak soak karein.</li>
                    <li>Soaked gulab jamun ka weight lein (W_soaked).</li>
                </ol>
                <pre><code>Absorption Ratio = W_soaked / W_dry</code></pre>
                <p class="text-xs">Good gulab jamun ka absorption ratio typically 1.8-2.2 hota hai.</p>
            `
        }
    ]
},
"infant-formula": {
    title: "Infant Formula / Baby Food Ka Analysis",
    tests: [
        {
            title: "Moisture Ka Determination",
            purpose: "Infant formula mein moisture content determine karne ke liye.",
            reference: "IS 14433:1997; Codex Stan 72",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed dish mein ~2g sample weigh karein.</li>
                    <li>102 ± 2°C par oven mein 2 hours dry karein.</li>
                    <li>Desiccator mein cool karein aur weigh karein.</li>
                    <li>Constant weight tak repeat karein.</li>
                </ol>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <p class="text-xs">Standard: Max 5% moisture (powder form).</p>
            `
        },
        {
            title: "Fat Ka Determination (Rose-Gottlieb / Mojonnier Method)",
            purpose: "Infant formula mein fat content determine karne ke liye.",
            reference: "A.O.A.C 989.05; IDF 123:2005",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~1g sample ko Mojonnier tube mein weigh karein.</li>
                    <li>10ml warm water mein reconstitute karein.</li>
                    <li>1.5ml ammonia daalein aur mix karein.</li>
                    <li>Standard Rose-Gottlieb extraction follow karein (ethanol → diethyl ether → petroleum ether).</li>
                    <li>Triple extraction karein.</li>
                    <li>Solvents evaporate karein, 102°C par dry karein, weigh karein.</li>
                </ol>
                <pre><code>% Fat = (Weight of fat / Weight of sample) × 100</code></pre>
                <p class="text-xs">Standard: As per declaration (typically 20-30% in powder).</p>
            `
        },
        {
            title: "Protein Ka Determination (Kjeldahl Method)",
            purpose: "Infant formula mein protein content determine karne ke liye.",
            reference: "A.O.A.C 991.20; IDF 20B:1993",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~0.5g sample ko Kjeldahl flask mein accurately weigh karein.</li>
                    <li>Standard Kjeldahl procedure follow karein.</li>
                    <li>Conversion factor: 6.38 (dairy based) ya 6.25 (mixed/soy based).</li>
                </ol>
                <pre><code>% Protein = % Total Nitrogen × Conversion factor</code></pre>
            `
        },
        {
            title: "Ash Ka Determination",
            purpose: "Total mineral content determine karne ke liye.",
            procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>Pre-weighed crucible mein ~3g sample weigh karein.</li>
                    <li>Char karein aur 550°C par ash karein.</li>
                    <li>Cool karein aur weigh karein.</li>
                </ol>
                <pre><code>% Ash = (Weight of ash / Weight of sample) × 100</code></pre>
            `
        },
        {
            title: "Calcium Ka Determination (EDTA Titrimetric Method)",
            purpose: "Infant formula mein calcium content determine karne ke liye, bone development ke liye essential hai.",
            reference: "A.O.A.C 991.25",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Sample ko ash karein. Ash ko acid mein dissolve karein. Calcium ko EDTA (ethylenediaminetetraacetic acid) se titrate karein, murexide ya calcon indicator ke saath.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g sample ko ash karein 550°C par.</li>
                    <li>Ash ko 10ml 1:1 HCl mein dissolve karein, filter karein, 100ml tak dilute karein.</li>
                    <li>25ml aliquot lein, NaOH se pH 12-13 adjust karein.</li>
                    <li>Murexide indicator daalein (pink colour aayega).</li>
                    <li>0.01M EDTA se titrate karein jab tak colour pink se purple ho jaaye.</li>
                </ol>
                <pre><code>Ca (mg/100g) = [EDTA volume × EDTA molarity × 40.08 × Dilution factor × 100] / (Aliquot × Weight of sample)</code></pre>
            `
        },
        {
            title: "Iron Ka Determination (Spectrophotometric Method)",
            purpose: "Infant formula mein iron content determine karne ke liye.",
            reference: "A.O.A.C 999.11",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Sample ko ash karke acid mein dissolve kiya jaata hai. Iron (Fe²⁺) 1,10-phenanthroline ke saath react karke orange-red complex banata hai jo 510nm par spectrophotometrically measure hota hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g sample ko 550°C par ash karein.</li>
                    <li>Ash ko dilute HCl mein dissolve karein.</li>
                    <li>Hydroxylamine hydrochloride daalein (Fe³⁺ ko Fe²⁺ mein reduce karne ke liye).</li>
                    <li>Sodium acetate buffer daalein (pH 3-5 maintain karne ke liye).</li>
                    <li>1,10-Phenanthroline solution daalein.</li>
                    <li>15 minutes stand hone dein colour development ke liye.</li>
                    <li>510nm par absorbance read karein.</li>
                    <li>Standard iron solutions ke calibration curve se concentration determine karein.</li>
                </ol>
            `
        },
        {
            title: "Vitamin C (Ascorbic Acid) Ka Determination",
            purpose: "Infant formula mein Vitamin C content determine karne ke liye.",
            reference: "A.O.A.C 967.21 (DCIP Titrimetric Method)",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                <p>Ascorbic acid ek reducing agent hai jo 2,6-dichloroindophenol (DCIP) dye ko reduce karta hai (blue → colorless). Endpoint tab aata hai jab excess DCIP pink/rose colour deta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li>~5g sample ko metaphosphoric acid-acetic acid solution mein extract karein.</li>
                    <li>Volume make up karein aur filter karein.</li>
                    <li>Filtrate ka aliquot lein.</li>
                    <li>Standardized DCIP solution se titrate karein jab tak rose pink colour 15 seconds tak rahe.</li>
                    <li>Standard ascorbic acid solutions se DCIP ko standardize karein.</li>
                </ol>
                <pre><code>Vitamin C (mg/100g) = [DCIP volume × DCIP factor × Dilution × 100] / (Aliquot × Weight of sample)</code></pre>
            `
        },
        {
            title: "Crude Fibre Ka Determination",
            purpose: "Cereal-based infant formula mein crude fibre determine karne ke liye.",
            procedure: `<p>Milk powder ke liye described procedure follow karein (acid-alkali digestion, drying, ignition).</p>`
        },
        {
            title: "Microbiological Tests (TPC, Coliforms, Salmonella, Cronobacter)",
            purpose: "Infant formula ki microbiological safety ensure karne ke liye - bahut strict standards hain.",
            reference: "FSSAI Standards; Codex Stan 72",
            procedure: `
                <h4 class="font-semibold mt-4 mb-2">Tests:</h4>
                <ul class="list-disc list-outside pl-5 space-y-2">
                    <li><strong>Total Plate Count (TPC):</strong> Serial dilutions → Pour plate on Plate Count Agar → 35°C, 48 hours → Count colonies. Standard: Max 10,000 CFU/g.</li>
                    <li><strong>Coliform Count:</strong> Pour plate on VRBA → 35°C, 24 hours → Count red colonies. Standard: Max 10 CFU/g.</li>
                    <li><strong>Salmonella Detection:</strong> Pre-enrichment → Selective enrichment → Selective plating → Biochemical/serological confirmation. Standard: Absent in 25g.</li>
                    <li><strong>Cronobacter sakazakii:</strong> Enrichment in BPW → Selective plating on chromogenic agar → Confirmation. Standard: Absent in 10g.</li>
                </ul>
            `
        }]
    }
}
},
en: {
        main_title: "Compositional Analysis of Dairy Products",
        main_description: "A detailed guide to chemical quality assurance.",
        back_to_topics: "Back to Topics",
        topics: {
            "processed-milk": {
                title: "Milk",
                tests: [
                    {
                        title: "Determination of Fat (Gerber Method)",
                        purpose: "A routine screening test for fat content using a centrifuge.",
                        reference: "IS 1479 (Part I) 1961 (Reaffirmed 2003)",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The milk is mixed with sulphuric acid and iso-amyl alcohol in a special Gerber tube (butyrometer). The acid dissolves the protein and other solids, releasing the fat. The iso-amyl alcohol helps in a clear separation of the fat layer. The tubes are centrifuged, and the fat, being lighter, rises into the calibrated stem of the butyrometer, where its percentage is directly read.</p>
                            <h4 class="font-semibold mt-4 mb-2">Reagents & Apparatus:</h4>
                            <ul class="list-disc list-outside pl-5 space-y-1">
                                <li><strong>Sulphuric acid:</strong> 90-91% concentration, sp. gr. 1.807-1.812 at 27°C.</li>
                                <li><strong>Amyl alcohol:</strong> Furfural-free, sp. gr. 0.808-0.818 at 27°C.</li>
                                <li><strong>Gerber Butyrometers:</strong> ISI marked, appropriate range (e.g., 0-10%).</li>
                                <li><strong>Pipettes:</strong> 10.75 ml (milk), 10 ml (acid), 1 ml (amyl alcohol).</li>
                                <li><strong>Water Bath:</strong> Maintained at 65 ± 2°C.</li>
                                <li><strong>Gerber Centrifuge:</strong> Capable of 1100-1200 rpm.</li>
                            </ul>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Measure 10 ml of sulphuric acid into a butyrometer tube without wetting the neck.</li>
                                <li>Pipette 10.75 ml of well-mixed milk into the butyrometer along the side wall.</li>
                                <li>Add 1 ml of Amyl alcohol.</li>
                                <li>Close with a lock stopper, shake until homogeneous, and invert for complete mixing.</li>
                                <li>Place in a water bath at 65±2°C for 5 minutes to ensure all casein particles are dissolved.</li>
                                <li>Centrifuge for 4-5 minutes at 1100-1200 rpm.</li>
                                <li>Place back in the water bath for 5 minutes.</li>
                                <li>Read the percentage of fat from the calibrated stem by adjusting the stopper. The reading is taken from the bottom of the fat column meniscus.</li>
                            </ol>
                        `
                    },
                    {
                        title: "Determination of Fat (Rose-Gottlieb Method)",
                        purpose: "The reference or standard method for fat determination, very accurate.",
                        reference: "IS: 1224 (Part-II)-1977",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The milk sample is treated with ammonia and ethanol. Ammonia dissolves the casein and neutralizes the fat globule membrane. Ethanol precipitates the protein. The fat is then extracted with a mixture of diethyl ether and petroleum ether. The solvents are evaporated, and the extracted fat is weighed.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Accurately weigh about 10g of milk sample into a Mojonnier extraction flask.</li>
                                <li>Add 1.5 ml of ammonia solution and mix well.</li>
                                <li>Add 10 ml of 95% ethanol and shake for 1 minute.</li>
                                <li>Add 25 ml of diethyl ether, shake vigorously for 1 minute.</li>
                                <li>Add 25 ml of petroleum ether and shake again for 1 minute.</li>
                                <li>Let the mixture stand until the upper ether layer is clear, or centrifuge to separate the layers.</li>
                                <li>Carefully decant the ether layer into a pre-weighed flask.</li>
                                <li>Repeat the extraction twice more with the aqueous layer, using 15 ml of each ether each time.</li>
                                <li>Evaporate the solvents on a hot plate or water bath.</li>
                                <li>Dry the flask with the extracted fat in an oven at 102°C to a constant weight.</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Fat = (Weight of extracted fat / Weight of sample) * 100</code></pre>
                        `
                    },
                    {
                        title: "Determination of Fat (Werner-Schmidt Method)",
                        purpose: "Suitable for soured or preserved milk, where acid is needed to dissolve the casein.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The milk is boiled with concentrated hydrochloric acid, which digests the protein and liberates the fat. The fat is then extracted with ether and weighed.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Accurately weigh about 10g of milk sample into a suitable extraction tube.</li>
                                <li>Add 10 ml of concentrated HCl and heat until the solution turns dark brown.</li>
                                <li>Cool, and extract three times with diethyl and petroleum ether as described in the Rose-Gottlieb method.</li>
                                <li>Evaporate the solvents, dry the residue, and weigh.</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Fat = (Weight of extracted fat / Weight of sample) * 100</code></pre>
                        `
                    },
                    {
                        title: "Determination of Total Solids (Gravimetric Method)",
                        purpose: "The standard reference method for accurately determining the total solids content.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>A known weight of milk is heated to evaporate all the water. The weight of the remaining dry residue represents the total solids.</p>
                             <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Weigh an empty, clean, dry flat-bottomed dish with its lid (W1).</li>
                                <li>Add about 5g of prepared milk sample into the dish and weigh again (W2).</li>
                                <li>Heat the dish without the lid on a boiling water bath for 30 minutes.</li>
                                <li>Transfer the dish to a hot air oven at 102 ± 2°C for 2 hours.</li>
                                <li>Cover the dish with the lid, cool in a desiccator, and weigh (W3).</li>
                                <li>Repeat the heating and cooling process until a constant weight is achieved.</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Total Solids = [ (W3 - W1) / (W2 - W1) ] * 100</code></pre>
                        `
                    },
                    {
                        title: "Total Protein Content (Kjeldahl Method)",
                        purpose: "The standard reference method for determining the total nitrogen content, which is then converted to crude protein content.",
                        reference: "IDF 20B: 1993; A.O.A.C 17th edn, 2000 Official Method 991.23",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The Kjeldahl method determines the total nitrogen in a sample. The nitrogen in the protein is first converted to ammonium sulfate using concentrated sulfuric acid (digestion). Then, ammonia gas is released and titrated to determine the amount of nitrogen. This nitrogen amount is multiplied by a factor (6.38 for milk) to calculate the crude protein content.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                             <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li><strong>Digestion:</strong> Weigh ~5 g of milk into a Kjeldahl flask. Add 25 ml concentrated sulfuric acid and a catalyst mixture (copper sulfate & potassium sulfate). Heat until the solution is clear.</li>
                                <li><strong>Distillation:</strong> Cool the digestate, dilute with water, and add excess NaOH. Steam-distill the released ammonia into a known volume of standard acid (e.g., boric acid with indicator).</li>
                                <li><strong>Titration:</strong> Titrate the trapped ammonia with a standard acid (e.g., 0.1 N HCl) until the indicator changes color. A blank determination is also performed.</li>
                             </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>% Total Nitrogen = [ 1.4007 * (V_sample - V_blank) * N_acid ] / Weight_sample</code></pre><br/>
                             <pre><code>% Crude Protein = % Total Nitrogen * 6.38</code></pre>
                        `
                    },
                    {
                        title: "Casein Content (Kjeldahl Method)",
                        purpose: "To determine the amount of casein, the main protein in milk, by precipitating it before nitrogen analysis.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>Casein is precipitated from milk at its isoelectric point (pH 4.6) using acetic acid. The whey proteins remain in the filtrate. The nitrogen content of the casein precipitate is then determined by the Kjeldahl method.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                             <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Weigh 10g of milk into a 250ml beaker. Add 90ml distilled water at 40-42°C.</li>
                                <li>Add 1.5ml of 10% acetic acid solution drop by drop while stirring.</li>
                                <li>Let the mixture stand for 10 minutes. The supernatant should be clear.</li>
                                <li>Filter the mixture through a filter paper. Wash the precipitate with cold water.</li>
                                <li>Transfer the filter paper and precipitate into a Kjeldahl flask for nitrogen determination as described in the Total Protein method.</li>
                             </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>% Casein = % Nitrogen in Precipitate * 6.38</code></pre>
                        `
                    },
                     {
                        title: "Titratable Acidity",
                        purpose: "To measure the total acidity (natural + developed) of milk.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The total acidity of milk is measured by titrating it with a standard alkali solution (NaOH) to a specific endpoint, indicated by a color change with phenolphthalein.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Take 10 ml of milk sample in a porcelain dish.</li>
                                <li>Add a few drops of 1% phenolphthalein solution.</li>
                                <li>Titrate with 0.1 N NaOH solution.</li>
                                <li>Stop the titration when a faint pink color appears (endpoint).</li>
                                <li>Note the volume of alkali used.</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Acidity (as Lactic Acid) = (9 * V * N) / W</code></pre>
                            <p class="text-xs">Where V = volume of NaOH, N = normality of NaOH, W = weight of milk sample.</p>
                        `
                    },
                    {
                        title: "Determination of Total Ash",
                        purpose: "To determine the total mineral content in milk.",
                        reference: "IS: 1479 (Part-II)-1961",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>The milk sample is incinerated until all organic matter is destroyed, leaving only the inorganic minerals (ash).</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Accurately weigh about 10g of milk sample into a pre-weighed silica or platinum crucible (W1).</li>
                                <li>Evaporate the sample on a water bath and then heat on a hot plate until it ceases to fume.</li>
                                <li>Ignite the crucible in a muffle furnace at 550°C until a white or light grey ash is obtained.</li>
                                <li>Cool in a desiccator and weigh (W2).</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>% Total Ash = [ (W2 - W1) / Weight of Sample ] * 100</code></pre>
                        `
                    },
                    {
                        title: "Determination of Minerals (by Flame Photometry)",
                        purpose: "For the rapid and accurate determination of calcium, sodium, and potassium in milk.",
                        reference: "Journal of Dairy Science Vol. 33, No. 6, 1950",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>Flame photometry is a technique where a sample is atomized into a flame and the intensity of the light emitted is measured. Each element emits light at a specific wavelength, and the intensity of the light emitted is proportional to the concentration of that element.</p>
                            <h4 class="font-semibold mt-4 mb-2">Sample Preparation:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Accurately weigh 100g of milk into a porcelain crucible.</li>
                                <li>Dry the sample at 100°C for 24 hours.</li>
                                <li>Ash the dried sample in a muffle furnace at 550°C.</li>
                                <li>Extract the ash with 10 ml of 1:1 HCl and hot water. Filter the solution.</li>
                                <li>Repeat the ashing and extraction process to ensure complete extraction.</li>
                                <li>Dilute the final filtered solution to 500 ml with distilled water in a volumetric flask. This stock solution is used for analysis.</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                             <ol class="list-decimal list-outside pl-5 space-y-2">
                                 <li>Take a 5-ml aliquot of the stock solution, place it in a 100-ml volumetric flask, and dilute to the mark with distilled water.</li>
                                 <li>Set the instrument (a flame photometer) to the specific wavelength for calcium, sodium, or potassium.</li>
                                 <li>Prepare standard solutions with known concentrations of Ca, K, and P to mimic the composition of the milk sample, as these ions can interfere with each other's measurement.</li>
                                 <li>Interpolate the flame intensity of the unknown sample between the intensities of two standards (one of slightly lower and one of slightly higher concentration).</li>
                                 <li>Calculate the concentration of the unknown assuming a straight-line relationship.</li>
                             </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>C_x = C₁ + (C₂ - C₁) * (I_x - I₁) / (I₂ - I₁)</code></pre>
                             <p class="text-xs">Where C is concentration, I is intensity, and the subscripts x, 1, and 2 denote the unknown, lower standard, and higher standard, respectively.</p>
                        `
                    },
                    {
                        title: "Methylene Blue Reduction Test (MBRT)",
                        purpose: "To quickly assess the microbiological quality of raw milk.",
                        reference: "IS: 1479 (Part III) – 1977",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>Methylene blue is a blue redox dye. Bacteria present in the milk reduce this dye during their metabolism, causing it to become colorless. The faster the color disappears, the more bacteria are present in the milk.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Take 10 ml of milk sample in a sterile test tube.</li>
                                <li>Add 1 ml of a standard Methylene Blue solution.</li>
                                <li>Stopper the tube with a rubber stopper and mix by inverting it once.</li>
                                <li>Place the tube in a water bath at 37°C.</li>
                                <li>Observe periodically and record the time it takes for the blue color to completely disappear (Methylene Blue Reduction Time).</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
                             <p><strong>Very Good:</strong> 5 hours or more<br><strong>Good:</strong> 2 to 4 hours<br><strong>Satisfactory:</strong> 30 minutes to 1 hour<br><strong>Poor:</strong> Less than 30 minutes</p>
                        `
                    },
                    {
                        title: "Alkaline Phosphatase Test",
                        purpose: "To verify the efficiency of pasteurization.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
                            <p>Phosphatase is an enzyme naturally present in raw milk that is destroyed during pasteurization. If this test is positive, it means the milk was not properly pasteurized or was contaminated with raw milk.</p>
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>The milk sample is incubated with a buffer-substrate solution (disodium p-nitrophenyl phosphate).</li>
                                <li>If phosphatase is present, it will hydrolyze the substrate, releasing p-nitrophenol, which is yellow in an alkaline solution.</li>
                                <li>The intensity of the color is measured using a spectrophotometer or a comparator.</li>
                            </ol>
                        `
                    }
                ]
            },
            "cream": {
                title: "Analysis of Cream",
                tests: [
                    {
                        title: "Determination of Fat",
                        purpose: "To determine the fat content in cream, which is its primary commercial value.",
                        reference: "IS 3509-1966",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Method 1: Gerber Method (for Cream)</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Weigh 5g of well-mixed cream directly into a special cream butyrometer.</li>
                                <li>Add 5ml of water.</li>
                                <li>Add 10ml of Gerber's acid and 1ml of amyl alcohol.</li>
                                <li>Proceed as for the Gerber method for milk (centrifugation, water bath, reading). The reading is multiplied by a factor depending on the butyrometer to get the fat percentage.</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Method 2: Werner-Schmidt Method</h4>
                            <p>Suitable for soured or preserved cream. Approximately 5g of cream is digested with hydrochloric acid, and the fat is extracted with ether and weighed.</p>
                        `
                    },
                     {
                        title: "Titratable Acidity",
                        purpose: "To determine the acidity of cream.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Weigh 10g of cream into a porcelain dish.</li>
                                <li>Add 10ml of hot, neutral distilled water to disperse the sample.</li>
                                <li>Add a few drops of phenolphthalein indicator.</li>
                                <li>Titrate with 0.1 N NaOH to a faint pink endpoint.</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Acidity = (Titre volume * Normality of NaOH * 9) / Weight of sample</code></pre>
                        `
                    },
                   {
                        title: "Detection of Thickeners in Cream",
                        purpose: "To detect illegal additives like starch or gelatine used to artificially thicken cream.",
                        reference: "A.O.A.C. Official method 920.106",
                        procedure: `
                          <p><strong>Starch:</strong> Dilute 10ml of cream with 10ml water and boil. Cool and add a few drops of iodine solution. A blue color indicates the presence of starch.</p>
                          <p class="mt-2"><strong>Gelatine:</strong> Detected by Stokes Test. Mix 10ml cream, 20ml water, and 20ml of Stokes reagent (acid mercuric nitrate). Filter the mixture. To the filtrate, add an equal volume of saturated picric acid. A yellow precipitate indicates gelatine.</p>
                        `
                    }
                ]
            },
            "cream-powder": {
                title: "Analysis of Cream Powder",
                tests: [
                   {
                        title: "Determination of Moisture",
                        purpose: "To determine the free moisture content, which is critical for shelf life.",
                        reference: "IS 16072: 2012",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Weigh a clean, dry, empty moisture dish with its lid (W1).</li>
                                <li>Add about 1g of sample into the dish and weigh again (W2).</li>
                                <li>Place the dish without the lid in a hot air oven at 102 ± 2°C for 2 hours.</li>
                                <li>Cover the dish, cool in a desiccator, and weigh (W3).</li>
                                <li>Repeat heating for 1-hour intervals until a constant weight is achieved.</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Moisture = [ (W2 - W3) / (W2 - W1) ] * 100</code></pre>
                        `
                    },
                    {
                        title: "Determination of Fat",
                        purpose: "To determine the fat content in cream powder.",
                        reference: "A.O.A.C 932.06",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure (Rose-Gottlieb Method):</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                 <li>Accurately weigh ~1g of powder into an extraction flask.</li>
                                 <li>Add 10ml of warm water and mix well to reconstitute the powder.</li>
                                 <li>Add 1.25ml of ammonia solution and mix.</li>
                                 <li>Proceed with the standard Rose-Gottlieb extraction using diethyl ether and petroleum ether, as described for liquid milk.</li>
                            </ol>
                        `
                    },
                    {
                        title: "Determination of Milk Protein",
                        purpose: "To determine the protein content using the Kjeldahl method.",
                        reference: "A.O.A.C 991.23, 991.20, 991.21",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Determine Total Nitrogen (TN) content of the powder using the Kjeldahl method.</li>
                                <li>Determine Non-Protein Nitrogen (NPN) from a trichloroacetic acid (TCA) filtrate of the reconstituted sample, also using the Kjeldahl method.</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>% True Protein = (% TN - % NPN) * 6.38</code></pre>
                        `
                    }
                ]
            },
            "butter": {
                title: "Analysis of Butter",
                tests: [
                   {
                        title: "Determination of Moisture",
                        purpose: "To determine the water content, a key quality and legal parameter.",
                        reference: "IS 3507 – 1966; A.O.A.C 920.116",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Weigh 3-4 g of prepared butter sample into a pre-weighed flat-bottomed dish (W1).</li>
                                <li>Heat the dish on a boiling water-bath for ~20 min, stirring frequently.</li>
                                <li>Transfer to a hot air oven at 100 ± 1°C and dry to a constant weight (W2).</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>Moisture % = [ (W1 - W2) / Initial Weight of sample ] * 100</code></pre>
                        `
                    },
                   {
                        title: "Determination of Fat and Curd (MSNF)",
                        purpose: "To determine fat and non-fat solids content.",
                        reference: "IS 3507 – 1966",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Use the residue from the moisture determination (W2).</li>
                                <li>Extract the fat by repeatedly washing the residue with a fat solvent (petroleum ether) and decanting the solvent.</li>
                                <li>After all fat is extracted, dry the remaining residue in the oven to remove all solvent and weigh it (W3). This gives the weight of Curd + Salt.</li>
                                <li>To find the curd content, the salt content must be determined separately and subtracted from this value.</li>
                            </ol>
                            <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                            <pre><code>% Fat = 100 - (%Moisture + %Curd&Salt)</code></pre>
                            <pre><code>% Curd = %Curd&Salt - %Salt</code></pre>
                        `
                    },
                   {
                        title: "Determination of Salt (NaCl)",
                        purpose: "To measure the salt content, important for flavor and legal standards.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Method 1: Mohr's Method</h4>
                            <p>Weigh 5g of butter, add 100ml boiling water, and cool to 50-55°C. Add potassium chromate indicator and titrate with standard silver nitrate (AgNO₃) solution until a brownish color persists.</p>
                            <pre><code>NaCl % = [5.844 * N_AgNO3 * (V_sample - V_blank)] / Weight_sample</code></pre>
                            
                            <h4 class="font-semibold mt-4 mb-2">Method 2: Volhard's Method</h4>
                            <p>Extract salt with hot water. Add excess standard silver nitrate to precipitate chlorides. Back-titrate the excess silver nitrate with potassium thiocyanate using ferric alum indicator.</p>
                            <pre><code>NaCl % = [23.38 * N_KCNS * (V_blank - V_sample)] / Weight_sample</code></pre>
                        `
                    }
                ]
            },
            "ghee-butter-oil": {
                title: "Analysis of Ghee / Butter Oil",
                tests: [
                   {
                        title: "Reichert-Meissel (RM) & Polenske Value (PV)",
                        purpose: "To check the purity of ghee. RM value measures short-chain fatty acids characteristic of milk fat. PV value helps detect adulteration with coconut oil.",
                        reference: "IS 3508 – 1966",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li><strong>Saponification:</strong> 5.00 g of ghee is saponified (turned into soap) using 20g glycerol and 2 ml 50% NaOH. Heat until the liquid is clear.</li>
                                <li><strong>Dilution & Acidification:</strong> Add 93 ml of boiled, cooled water, and then 50 ml of dilute sulfuric acid.</li>
                                <li><strong>Distillation:</strong> Distill 110 ml of the mixture in 19-21 minutes using a Polenske distillation apparatus.</li>
                                <li><strong>RM Value Titration:</strong> Filter the distillate and titrate 100 ml of the filtrate with 0.1 N NaOH.</li>
                                <li><strong>Polenske Value Titration:</strong> Wash the condenser and filter paper three times with 15 ml of neutralized ethanol. Titrate the combined washings with 0.1 N NaOH.</li>
                            </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>RM Value = 1.1 * (Titration_Sample - Titration_Blank)</code></pre>
                             <pre><code>Polenske Value = Titration_Insoluble_Acids - Titration_Blank_Insoluble</code></pre>
                        `
                    },
                   {
                        title: "Free Fatty Acids (FFA)",
                        purpose: "Measures the extent of fat breakdown (hydrolysis), which indicates freshness. High FFA leads to rancidity.",
                        reference: "IS 3508 – 1966",
                        procedure: `
                            <p>The sample is dissolved in hot neutralized alcohol and titrated with standard 0.1 N NaOH solution using phenolphthalein indicator. Acidity is usually expressed as % oleic acid.</p>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>% FFA (as Oleic acid) = [Titre * N_NaOH * 28.2] / Weight_sample</code></pre>
                        `
                    },
                   {
                        title: "Baudouin Test for Vanaspati",
                        purpose: "Detects vanaspati (hydrogenated vegetable oil) in ghee.",
                        reference: "IS 3508 – 1966",
                        procedure: `<p>Based on the mandatory addition of 5% sesame oil to vanaspati. Melted ghee (5ml) is shaken vigorously for 2 mins with 5ml of concentrated HCl and 0.4ml of 2% furfural solution. A pink or red color in the acid layer indicates the presence of vanaspati.</p>`
                    },
                    {
                        title: "Detection of Mineral Oil (Holde's Test)",
                        purpose: "Detects non-edible mineral oils used as adulterants.",
                        procedure: `<p>Saponify 1g of fat with 25ml of 4% alcoholic KOH. Add 100ml of hot water. The appearance of turbidity indicates the presence of mineral oil, which does not saponify.</p>`
                    },
                    {
                        title: "Peroxide Value (PV)",
                        purpose: "Measures the initial stages of oxidative rancidity.",
                        reference: "A.O.A.C 965.33",
                        procedure: `
                            <p>The ghee sample is dissolved in an acetic acid-chloroform mixture. Saturated potassium iodide (KI) solution is added. Peroxides in the fat liberate iodine from KI. The liberated iodine is then titrated with a standard sodium thiosulphate solution using starch as an indicator.</p>
                            <pre><code>PV (meq/kg) = (S * N * 1000) / Weight of Sample</code></pre>
                            <p class="text-xs">Where S = ml of Na₂S₂O₃ (blank corrected) and N = Normality of Na₂S₂O₃</p>
                        `
                    }
                ]
            },
             "cheese-paneer": {
                title: "Analysis of Paneer / Cheese",
                tests: [
                   {
                        title: "Determination of Moisture & Total Solids",
                        purpose: "To measure the water content, affecting texture and shelf life.",
                        reference: "IS 2785 -1979",
                        procedure: `
                          <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                          <ol class="list-decimal list-outside pl-5 space-y-2">
                              <li>Weigh a clean, dry, empty aluminum moisture dish with sand and a glass rod.</li>
                              <li>Weigh 3g of grated sample into the dish.</li>
                              <li>Add a few drops of distilled water and mix the sample with the sand.</li>
                              <li>Evaporate the water by placing the dish on a hot plate.</li>
                              <li>Dry the dish in a hot air oven at 102 ± 2°C for 4 hours.</li>
                              <li>Cool in a desiccator and weigh. Repeat until a constant weight is achieved.</li>
                          </ol>
                        `
                    },
                   {
                        title: "Determination of Fat (Acid Digestion - Werner-Schmidt Method)",
                        purpose: "To determine the fat content on a dry matter basis.",
                        reference: "IS 2785 -1979",
                        procedure: `
                          <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                          <ol class="list-decimal list-outside pl-5 space-y-2">
                              <li>Weigh 1-2g of the prepared sample into a 100 ml beaker.</li>
                              <li>Add 10 ml of concentrated HCl and heat on a water bath until all solid particles dissolve.</li>
                              <li>Cool the solution, add 10 ml of ethanol, and transfer to a Mojonnier flask.</li>
                              <li>Add 25 ml of diethyl ether, shake for 1 minute. Then add 25 ml of petroleum ether and shake again.</li>
                              <li>Centrifuge and transfer the ethereal layer to a pre-weighed conical flask.</li>
                              <li>Repeat the extraction twice.</li>
                              <li>Evaporate the ether and dry the residue to find the fat content.</li>
                          </ol>
                        `
                    },
                    {
                        title: "Detection of Starch in Paneer",
                        purpose: "To detect illegal addition of starch as a filler.",
                        procedure: `<p>Macerate 1g of the paneer sample with 1ml of distilled water in a porcelain dish. Then add a drop of iodine solution. A blue color indicates the presence of starch.</p>`
                    }
                ]
            },
            "dahi-yoghurt": {
                title: "Analysis of Dahi / Yoghurt",
                tests: [
                   {
                        title: "Titratable Acidity",
                        purpose: "To determine the acidity developed during fermentation.",
                        procedure: `
                          <ol class="list-decimal list-outside pl-5 space-y-2">
                            <li>Weigh 10g of sample in a beaker.</li>
                            <li>Add 10 ml of distilled water to make a paste.</li>
                            <li>Add a few drops of phenolphthalein indicator and titrate with 0.1 N NaOH until a faint pink color appears.</li>
                          </ol>
                          <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                          <pre><code>% Acidity (as Lactic Acid) = (9 * V * N) / W</code></pre>
                          <p class="text-xs">Where V = volume of NaOH, N = normality of NaOH, W = weight of sample.</p>
                        `
                    },
                    {
                        title: "Determination of Total Solids",
                        purpose: "To determine the total solids content, often done after neutralizing acidity.",
                        reference: "IS 12333: 1997 / IDF 151: 1991",
                        procedure: `
                            <p><strong>NaOH Method:</strong> Weigh 4-5g of sample, neutralize with 0.1N NaOH, and then dry on a water bath followed by an oven at 100±2°C to a constant weight. The weight of added NaOH is subtracted from the final residue.</p>
                            <p><strong>Zinc Oxide Method:</strong> Weigh 1g of sample, mix with 2g of zinc oxide, and dry to a constant weight. The developed lactic acid is determined separately and added to the moisture value to get the correct total solids.</p>
                        `
                    },
                   {
                        title: "Diacetyl Content",
                        purpose: "To measure a key flavor compound.",
                        procedure: `<p>Diacetyl is a characteristic flavor compound produced during fermentation. Its quantity is measured spectrophotometrically at 570 nm after a series of chemical reactions.</p>`
                    }
                ]
            },
            "chakka-shrikhand": {
                title: "Analysis of Chakka / Shrikhand",
                tests: [
                    { title: "Determination of Milk Solids", purpose: "To determine total milk solids.", procedure: "<p>Follow the procedure for Dahi. For Shrikhand, determine sucrose content separately and subtract it from the total solids to get milk solids.</p>" },
                    { title: "Determination of Fat", purpose: "To determine fat content.", procedure: "<p>Follow the Werner-Schmidt Method as for Paneer.</p>" },
                    { title: "Determination of Protein", purpose: "To determine protein content.", procedure: "<p>Follow the Kjeldahl method as for Ice Cream.</p>" },
                    { title: "Determination of Titratable Acidity", purpose: "To determine acidity.", procedure: "<p>Follow the procedure for Condensed Milk.</p>" },
                    { title: "Determination of Total Ash", purpose: "To determine mineral content.", procedure: "<p>Follow the procedure for Milk Powder.</p>" },
                    { title: "Determination of Sucrose Content", purpose: "To determine added sugar.", procedure: "<p>Follow the procedure for Condensed Milk (Lane-Eynon method).</p>" }
                ]
            },
            "khoa": {
                title: "Analysis of Khoa",
                tests: [
                    { title: "Determination of Moisture", purpose: "To determine water content.", procedure: "<p>Follow the procedure for Paneer (drying with sand).</p>" },
                    { title: "Determination of Fat", purpose: "To determine fat content.", procedure: "<p>If the sample contains added sugar, use the Rose-Gottlieb method. If no sugar is present, the Werner-Schmidt acid digestion method can be used.</p>" },
                    { title: "Detection of Starch", purpose: "To detect illegal addition of starch.", procedure: "<p>Disperse 11g of grated khoa in 50ml hot water. Take 5ml of this dispersion, add 0.2ml iodine solution. A blue color indicates starch.</p>" },
                    { title: "Detection of Sucrose", purpose: "To detect added sugar.", procedure: "<p>Take 5ml of the prepared khoa dispersion, add 0.5ml conc. HCl and 0.005g resorcinol. Heat in a boiling water bath for 5 mins. A deep red color indicates sucrose.</p>" }
                ]
            },
            "ice-cream": {
                title: "Analysis of Ice Cream",
                tests: [
                   {
                        title: "Determination of Fat (Rose-Gottlieb method)",
                        purpose: "To determine the fat content, crucial for legal standards and texture.",
                        reference: "Pearson’s Composition and analysis of foods 9th edn, 1991 page 604",
                        procedure: `
                          <ol class="list-decimal list-outside pl-5 space-y-2">
                            <li>Weigh 4-5 g of sample into a Mojonnier tube.</li>
                            <li>Add 10 ml of distilled water and mix.</li>
                            <li>Add 2 ml of ammonia, mix, and heat in a 60°C water bath for 20 min.</li>
                            <li>Cool, and add 10 ml of ethanol, 25 ml of diethyl ether, and mix.</li>
                            <li>Then add 25 ml of petroleum ether and mix.</li>
                            <li>Allow the layers to separate, or centrifuge.</li>
                            <li>Decant the ethereal layer into a weighed vessel.</li>
                            <li>Repeat the extraction twice.</li>
                            <li>Evaporate the ether and dry the residue at 102 ± 2°C for 3 hours.</li>
                          </ol>
                        `
                    },
                   {
                        title: "Determination of Overrun",
                        purpose: "Overrun is the percentage increase in the volume of ice cream over the volume of the mix, due to the incorporation of air during freezing.",
                        reference: "IS:2802: 1964",
                        procedure: `
                          <ol class="list-decimal list-outside pl-5 space-y-2">
                            <li>Weigh a unit of ice cream (e.g., a full cup or carton) to get its net weight. Let this be W_icecream.</li>
                            <li>Melt the same volume of ice cream completely, removing all air (a drop of amyl alcohol can help).</li>
                            <li>Weigh the melted mix. Let this be W_mix.</li>
                          </ol>
                             <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                             <pre><code>% Overrun = [ (Weight of mix - Weight of ice cream) / Weight of ice cream ] * 100</code></pre>
                        `
                    },
                   {
                        title: "Total Solids Content",
                        purpose: "To determine the total solids in ice cream.",
                        procedure: `
                          <ol class="list-decimal list-outside pl-5 space-y-2">
                            <li>Weigh 5g of sample into a weighed dish containing sand.</li>
                            <li>Add a few drops of water to make a paste.</li>
                            <li>Dry the sample on a boiling water bath for 20-30 min.</li>
                            <li>Dry the dish in a hot air oven at 100 ± 2°C for 4 hours.</li>
                            <li>Cool and weigh. Repeat until constant weight is achieved.</li>
                          </ol>
                        `
                    },
                    {
                        title: "Determination of Protein (Kjeldahl Method)",
                        purpose: "To determine protein content.",
                        reference: "Pearson’s Composition and Analysis of Foods,9th edn,1991 page 17",
                        procedure: `<p>Weigh 5-8g of sample and determine the total nitrogen content using the Kjeldahl method (as described for liquid milk). The protein content is calculated by multiplying the nitrogen percentage by a factor of 6.38 for dairy ice cream or 6.25 for frozen desserts.</p>`
                    },
                    {
                        title: "Determination of Added Starch",
                        purpose: "To detect illegal addition of starch.",
                        reference: "A.O.A.C 17th edn,2000 Modified Official method- 925.50",
                        procedure: `<p>Defat the sample with petroleum ether. Precipitate starch with alcohol. Hydrolyze the precipitate with acid to convert starch to reducing sugars. Determine the amount of reducing sugars using the Lane-Eynon method and multiply by 0.9 to get the starch content.</p>`
                    }
                ]
            },
            "condensed-milk": {
                title: "Analysis of Condensed Milk",
                tests: [
                    {
                        title: "Determination of Total Solids",
                        purpose: "To measure the total solid content, a key parameter for condensed milk.",
                        reference: "IS 12333 – 1997 / ISO 6731 -1989",
                        procedure: `<p>Weigh ~2g of sample into a dish with sand. Add 5ml water and mix to a paste. Dry on a water bath for 30 mins, then dry in an oven at 102 ± 2°C to constant weight.</p>`
                    },
                     {
                        title: "Determination of Fat",
                        purpose: "To measure the fat content.",
                        reference: "Rose-Gottlieb Method",
                        procedure: `<p>Weigh 2-2.5g of sample, reconstitute with warm water and ammonia. Proceed with the Rose-Gottlieb method as for liquid milk.</p>`
                    },
                    {
                        title: "Determination of Sucrose",
                        purpose: "To measure the amount of added sugar, a key component in sweetened condensed milk.",
                        procedure: `
                            <h4 class="font-semibold mt-4 mb-2">Lane-Eynon Method (Volumetric)</h4>
                            <p>This method involves clarifying the sample and determining reducing sugars (lactose) before and after acid inversion (which converts sucrose to reducing sugars). The difference gives the sucrose content.</p>
                            <pre><code>Sucrose % = (Total Reducing Sugars % - Original Reducing Sugars %) * 0.95</code></pre>
                            
                            <h4 class="font-semibold mt-4 mb-2">Polarimetric Method</h4>
                            <p>This method is based on the change in the optical rotation of a clarified sample solution before and after acid inversion. The change in rotation is proportional to the sucrose content.</p>
                        `
                    },
                    { title: "Determination of Titratable Acidity", purpose: "To determine acidity.", procedure: "<p>Weigh 10g of sample, dilute with 30ml warm water, add phenolphthalein indicator, and titrate with 0.1N NaOH.</p>" }
                ]
            },
            "milk-powder": {
                title: "Analysis of Milk Powder",
                tests: [
                    {
                        title: "Determination of Moisture & Total Solids",
                        purpose: "To determine the free moisture content, critical for shelf life.",
                        reference: "IS 16072 : 2012",
                        procedure: `
                           <ol class="list-decimal list-outside pl-5 space-y-2">
                              <li>Weigh a clean, dry, empty dish (W1).</li>
                              <li>Weigh 1 g of sample into it and weigh again (W2).</li>
                              <li>Dry the dish in a hot air oven at 102 ± 2°C for 2 hours.</li>
                              <li>Cool the dish in a desiccator to room temperature.</li>
                              <li>Weigh the dish and note the weight (W3).</li>
                              <li>Repeat heating and cooling until a constant weight is obtained.</li>
                           </ol>
                           <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                           <pre><code>% Total Solids = [ (W3 - W1) / (W2 - W1) ] * 100</code></pre>
                           <pre><code>% Moisture = 100 - % Total Solids</code></pre>
                        `
                    },
                   {
                        title: "Determination of Fat",
                        purpose: "To measure the fat content.",
                        reference: "A.O.A.C 17th edn, 2000 Official method 932.06",
                        procedure: `<p>Weigh ~1g of powder, reconstitute it with 10ml warm water, add ammonia, and then extract the fat using the Rose-Gottlieb method.</p>`
                    },
                    { title: "Determination of Titratable Acidity", purpose: "To determine acidity.", procedure: "<p>Reconstitute 10g of powder to 100ml. Titrate 10ml of this reconstituted milk with 0.1N NaOH using phenolphthalein, comparing the endpoint color to a reference standard (rosaniline acetate or cobalt sulphate).</p>" },
                   {
                        title: "Determination of Solubility Index",
                        purpose: "Measures the amount of undissolved powder after reconstitution, indicating quality.",
                        reference: "ISI Hand book of Food Analysis (Part XI) – 1981",
                        procedure: `<p>A standard solution is prepared and centrifuged. The volume of the sediment is measured in a graduated centrifuge tube and reported as the solubility index in ml. A low index is desirable.</p>`
                    },
                    {
                        title: "Determination of Total Ash",
                        purpose: "To determine the mineral content.",
                        reference: "IS 1165 - 2005",
                        procedure: `<p>Weigh ~3g of powder in a crucible. Heat gently and then strongly in a muffle furnace at 550 ± 20°C until grey ash is obtained. The final constant weight of the residue is the total ash.</p>`
                    },
                    { title: "Determination of Crude Fibre", purpose: "For cereal-based weaning foods.", procedure: "<p>The defatted sample is sequentially boiled with dilute acid and then with dilute alkali. The remaining insoluble residue is dried, weighed, ignited, and weighed again. The loss in weight on ignition represents the crude fibre.</p>" }
                ]
            },
            "casein": {
                title: "Analysis of Edible Casein Products",
                tests: [
                    { title: "Determination of Moisture", purpose: "To determine water content.", procedure: "<p>Follow the procedure for Milk Powder (drying at 102±2°C).</p>" },
                    { title: "Determination of Fat", purpose: "To determine fat content.", procedure: "<p>The sample is digested with HCl, and fat is extracted using the Schmid-Bondzynski-Ratzlaff (SBR) principle (similar to Werner-Schmidt method) using diethyl ether and petroleum ether.</p>" },
                    { title: "Determination of Protein", purpose: "To determine protein content.", procedure: "<p>Total nitrogen is determined by the Kjeldahl method. For true protein, non-protein nitrogen (NPN) is determined separately from a TCA filtrate and subtracted from the total nitrogen.</p>" },
                    { title: "Determination of Lactose", purpose: "To determine residual lactose.", procedure: "<p>Using a photometric method. The casein is precipitated, and the lactose in the filtrate reacts with phenol and sulfuric acid to produce a color, which is measured at 490 nm.</p>" },
                    { title: "Determination of Ash", purpose: "To determine mineral content.", procedure: "<p>The sample is incinerated at 825 ± 25°C until all carbon is removed. For fixed ash, magnesium acetate is added before incineration to retain all phosphorus.</p>" },
                    { title: "Determination of Free Acidity & pH", purpose: "To determine acidity.", procedure: "<p>An aqueous extract of the sample is titrated with 0.1N NaOH (for free acidity) or measured with a pH meter (for pH).</p>" }
                ]
            },
            "whey-powder": {
                title: "Analysis of Whey Powder",
                tests: [
                    { title: "Determination of Moisture", purpose: "To determine water content.", procedure: "<p>Follow the procedure for Milk Powder.</p>" },
                    { title: "Determination of Fat", purpose: "To determine fat content.", procedure: "<p>Follow the Rose-Gottlieb method as for Milk Powder.</p>" },
                    { title: "Determination of Protein", purpose: "To determine protein content.", procedure: "<p>Follow the Kjeldahl method as for milk powder, using a conversion factor of 6.38.</p>" },
                    { title: "Determination of Total Ash", purpose: "To determine mineral content.", procedure: "<p>Follow the procedure for Milk Powder.</p>" },
                    { title: "Determination of pH", purpose: "To determine pH.", procedure: "<p>Prepare a 10% reconstituted solution of the whey powder and measure the pH using a calibrated pH meter.</p>" },
                    { title: "Determination of Lactose", purpose: "To determine lactose content.", procedure: "<p>Determine the reducing sugars using the Lane-Eynon method (as for condensed milk) and calculate as anhydrous lactose.</p>" }
                ]
            }
        }
    }
}
