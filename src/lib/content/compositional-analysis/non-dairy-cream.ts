/**
 * Compositional Analysis: Non-Dairy Cream (NDC) / Whipping Cream
 * Independent product module for easy future updates and extensions.
 */

export const nonDairyCreamHi = {
        title: "Non-Dairy Cream (NDC) / Whipping Cream",
        tests: [
          {
            title: "Fat ka Determination (Mojonnier / Rose-Gottlieb Method)",
            purpose: "NDC ya whipping cream mein total fat content determine karna — ye product ki richness, whipping ability aur texture ka primary indicator hai. NDC mein vegetable fat hota hai (coconut oil, palm kernel oil etc.) jo dairy fat se alag behave karta hai — isliye specific method important hai.",
            reference: "IS 1224 (Part II) 1977 / AOAC 905.02",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>NDC (Non-Dairy Cream) ek emulsion hai jisme vegetable fat (coconut oil / palm kernel oil / hydrogenated vegetable oil), water, emulsifiers (polysorbate 60, sorbitan monostearate), stabilizers (carrageenan, guar gum), proteins (sodium caseinate ya soy protein), aur sugars hote hain. Is complex matrix mein fat ko extract karne ke liye pehle emulsion ko break karna padta hai. Ammonia + ethanol se emulsion break hoti hai, phir diethyl ether + petroleum ether se fat extract hota hai. Solvents evaporate karne ke baad fat gravimetrically weigh kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">NDC ki Typical Composition (Jo Testing ko Affect Karta Hai):</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Vegetable Fat:</strong> 25-35% (coconut oil / palm kernel oil / hydrogenated veg. oil) — main fat source</li>
                <li><strong>Water:</strong> 55-65% — continuous phase</li>
                <li><strong>Sodium Caseinate / Soy Protein:</strong> 1-3% — emulsifier aur stabilizer</li>
                <li><strong>Sugar (Glucose syrup / Sucrose):</strong> 3-8% — sweetness aur texture</li>
                <li><strong>Emulsifiers (Polysorbate 60, SMS):</strong> 0.2-1.0% — emulsion stability</li>
                <li><strong>Stabilizers (Carrageenan, Guar gum):</strong> 0.1-0.5% — viscosity control</li>
                <li><strong>Sodium Phosphate / Sodium Citrate:</strong> 0.1-0.3% — buffer salts</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Ammonia solution:</strong> 25% (w/w), sp. gr. ~0.910</li>
                <li><strong>Ethanol:</strong> 95% (v/v)</li>
                <li><strong>Diethyl Ether:</strong> Peroxide-free, AR grade</li>
                <li><strong>Petroleum Ether:</strong> Boiling range 40-60°C, AR grade</li>
                <li><strong>Mojonnier Extraction Flask:</strong> 100 ml, round bottom with two necks</li>
                <li><strong>Analytical Balance:</strong> ±0.1 mg sensitivity</li>
                <li><strong>Oven:</strong> 102 ± 2°C</li>
                <li><strong>Desiccator:</strong> Silica gel ke saath</li>
                <li><strong>Water Bath:</strong> 60°C</li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 NDC Fat Testing mein Har Factor ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ NDC mein fat testing kyun zaroori hai? Dairy cream se alag kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Whipping ability directly fat % par depend karti hai:</strong> NDC mein minimum ~25% fat chahiye taaki overrun (foam volume) proper ho. Agar fat kam ho to cream whip nahi hogi ya stiff peaks nahi aayenge.</li>
                  <li><strong>Vegetable fat ki alag melting characteristics:</strong> Coconut oil/palm kernel oil ka melting point ~24-26°C hai — ye important hai kyunki fat crystal structure whipping ko help karta hai. Testing se confirm hota hai ki correct fat percentage hai.</li>
                  <li><strong>Label compliance:</strong> FSSAI / food regulations ke anusaar NDC mein declared fat % accurate honi chahiye — misleading label banned hai.</li>
                  <li><strong>Emulsion stability se link:</strong> Agar fat % zyada ya kam ho to emulsifier balance bhi bigad jayega — product separate ho sakta hai (churning/phase separation).</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Sample 10 gram kyun? NDC ke liye koi special consideration?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>10 gram optimal hai kyunki:</strong> NDC mein ~25-35% fat hota hai → 10 g sample mein ~2.5-3.5 g fat hoga → ye gravimetric weighing ke liye ideal range hai (zyada accurate).</li>
                  <li><strong>NDC solid ya semi-solid form mein hota hai (refrigerated):</strong> Isliye sample ko 40-45°C par pehle liquid karein (water bath mein), phir thoroughly mix karein, phir weigh karein — cold ya semi-solid state mein non-uniform sample hoga.</li>
                  <li><strong>Agar frozen NDC hai:</strong> Room temperature par completely thaw karein, then 40°C water bath pe melt karein, mix karein — tab weigh karein. Frozen sample mein fat crystals hain jo upar hote hain — non-representative sample milega nahi mix karne se.</li>
                  <li><strong>Homogenization:</strong> NDC ko thorough mixing zaroori hai — fat globules settle/cream ho sakti hain. Vortex mixer ya manual shaking se uniform suspension banao pehle.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 1.5 ml Ammonia (25%) kyun? NDC mein dairy cream se alag ratio kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Primary role:</strong> NDC mein sodium caseinate ya soy protein hota hai — ammonia inhe dissolve karta hai taaki fat extract karne mein barrier na banen.</li>
                  <li><strong>Secondary role:</strong> Emulsifiers (polysorbate 60, SMS — sorbitan monostearate) jo fat globules ko stabilize karte hain — alkaline conditions mein (ammonia se) inki activity reduce hoti hai, emulsion break hoti hai.</li>
                  <li><strong>1.5 ml kyun:</strong> 10 g NDC mein ~1-3% protein = 0.1-0.3 g protein. 1.5 ml 25% ammonia = 0.375 g NH₃ — ye sufficient excess hai saare protein ko dissolve karne ke liye.</li>
                  <li><strong>Zyada ammonia se problem:</strong> Ammonia ether mein partially dissolve hota hai — zyada ammonia hoga to ether layer mein NH₃ contamination hoga → false high fat reading (NH₃ ke saath kuch compounds extract ho sakte hain).</li>
                  <li><strong>NDC mein extra consideration:</strong> NDC mein carrageenan/guar gum jaise stabilizers hain — ye alkaline mein soften hote hain, emulsion break mein help karte hain — ammonia ye bhi karta hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 10 ml 95% Ethanol kyun? NDC mein iska extra role kya hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Standard role:</strong> Proteins ko precipitate karta hai (dehydration se) + emulsion break karta hai.</li>
                  <li><strong>NDC-specific role 1 — Emulsifier handling:</strong> NDC mein polysorbate 60 aur SMS strong emulsifiers hain. Ethanol inki emulsifying capacity ko reduce karta hai — fat droplets release hoti hain.</li>
                  <li><strong>NDC-specific role 2 — Sugar dissolution:</strong> NDC mein glucose syrup/sucrose hoti hai. Ethanol sugars ko aqueous layer mein rakha hai — ye ether mein nahi jayengi (ether mein sugar insoluble hai). Agar sugar ether mein jaye to false weight badh sakta tha.</li>
                  <li><strong>NDC-specific role 3 — Starch/stabilizer handling:</strong> Agar NDC mein modified starch hai to ethanol se precipitation hoti hai — starch ether layer mein nahi jaata.</li>
                  <li><strong>10 ml kyun:</strong> 10 g NDC ke liye sufficient volume hai complete protein precipitation aur emulsion breaking ke liye. Kam hone par incomplete precipitation → protein ether layer mein jata → false high reading.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Diethyl Ether + Petroleum Ether — NDC ke liye specifically kyun DONO zaroori hain?</h5>
                <table class="table-auto border-collapse border border-blue-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-blue-100"><th class="border border-blue-300 p-2">Solvent</th><th class="border border-blue-300 p-2">NDC Components Jo Extract Karta Hai</th><th class="border border-blue-300 p-2">Scientific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-blue-300 p-2">Diethyl Ether<br/>(slightly polar, εr≈4.3)</td><td class="border border-blue-300 p-2">Coconut/palm fat, partial glycerides, free fatty acids, phospholipids, fat-soluble emulsifiers (SMS partial)</td><td class="border border-blue-300 p-2">Polar lipids aur partial glycerides extract hote hain jo NDC mein emulsifiers se aate hain</td></tr>
                    <tr><td class="border border-blue-300 p-2">Petroleum Ether<br/>(non-polar, εr≈1.9)</td><td class="border border-blue-300 p-2">Triglycerides (main vegetable fat — coconut/palm kernel oil)</td><td class="border border-blue-300 p-2">Non-polar fat (triglycerides) efficiently extract hota hai</td></tr>
                    <tr><td class="border border-blue-300 p-2 font-semibold">Dono saath (25+25 ml)</td><td class="border border-blue-300 p-2 font-semibold">Total fat — 95%+ pehli extraction mein</td><td class="border border-blue-300 p-2 font-semibold">NDC mein complex emulsifier matrix hai — akela ether complete extraction nahi kar sakta</td></tr>
                  </tbody>
                </table>
                <p class="text-sm mt-2"><strong>NDC-specific note:</strong> Polysorbate 60 (HLB value ~14.9) ether mein partially soluble hai — ye bhi extract ho sakta hai! Isliye result mein slight overestimation possible hai. Standard method mein ye acceptable error hai.</p>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Teen extractions kyun? NDC ke liye specifically:</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>NDC mein strong emulsifiers hain</strong> — polysorbate 60 aur SMS fat ko tightly hold karte hain. Single extraction se poora fat release nahi hoga — do-teen extractions zaroori hain.</li>
                  <li><strong>1st extraction (25+25 ml each):</strong> ~90-93% fat extract hota hai. Zyada volume isliye kyunki maximum fat nikalna hai.</li>
                  <li><strong>2nd extraction (15+15 ml each):</strong> ~5-7% aur fat niklega — emulsifier-bound fat.</li>
                  <li><strong>3rd extraction (15+15 ml each):</strong> Remaining ~1-2% fat — last traces.</li>
                  <li><strong>Total: 3 extractions → ~99% fat recovery</strong> — reference method accuracy ke liye zaroori.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 102°C drying — NDC ke liye special consideration:</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Coconut oil/palm kernel oil</strong> ke fatty acids (lauric acid, myristic acid) — ye 102°C par stable hain, oxidize nahi hote short term mein.</li>
                  <li><strong>Hydrogenated vegetable oil</strong> (agar NDC mein use hua ho) — trans fats hote hain jo 102°C par stable hain.</li>
                  <li><strong>Emulsifiers jo extract hue hain</strong> (SMS, polysorbate 60 partial) — ye 102°C par stable hain, evaporate nahi hote — ye fat weight mein add ho jaate hain (slight overestimation).</li>
                  <li><strong>Risk:</strong> 110°C+ par polyunsaturated fats (agar present hain) oxidize ho sakte hain — weight badh sakta tha. 102°C safe hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">📊 NDC Fat Testing Summary Table:</h5>
                <table class="table-auto border-collapse border border-blue-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-blue-100"><th class="border border-blue-300 p-2">Parameter</th><th class="border border-blue-300 p-2">Value</th><th class="border border-blue-300 p-2">NDC-Specific Scientific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-blue-300 p-2">Sample weight</td><td class="border border-blue-300 p-2">10 g</td><td class="border border-blue-300 p-2">~25-35% fat → 2.5-3.5 g fat → optimal gravimetric range</td></tr>
                    <tr><td class="border border-blue-300 p-2">Sample preparation</td><td class="border border-blue-300 p-2">40-45°C melt + mix</td><td class="border border-blue-300 p-2">NDC solid/semi-solid — pehle liquid karna zaroori uniform sample ke liye</td></tr>
                    <tr><td class="border border-blue-300 p-2">Ammonia (25%)</td><td class="border border-blue-300 p-2">1.5 ml</td><td class="border border-blue-300 p-2">Caseinate/soy protein dissolve + emulsifier activity reduce</td></tr>
                    <tr><td class="border border-blue-300 p-2">Ethanol (95%)</td><td class="border border-blue-300 p-2">10 ml</td><td class="border border-blue-300 p-2">Protein precipitate + polysorbate 60/SMS ki emulsifying capacity reduce</td></tr>
                    <tr><td class="border border-blue-300 p-2">Diethyl ether</td><td class="border border-blue-300 p-2">25+15+15 ml</td><td class="border border-blue-300 p-2">Polar lipids, partial glycerides, free fatty acids extract</td></tr>
                    <tr><td class="border border-blue-300 p-2">Petroleum ether</td><td class="border border-blue-300 p-2">25+15+15 ml</td><td class="border border-blue-300 p-2">Triglycerides (main veg. fat) extract</td></tr>
                    <tr><td class="border border-blue-300 p-2">Extractions</td><td class="border border-blue-300 p-2">3 baar</td><td class="border border-blue-300 p-2">Strong emulsifiers (polysorbate) ke kaaran multiple extractions zaroori</td></tr>
                    <tr><td class="border border-blue-300 p-2">Drying temp.</td><td class="border border-blue-300 p-2">102 ± 2°C</td><td class="border border-blue-300 p-2">Coconut/palm oil stable at this temp; ether completely evaporates</td></tr>
                    <tr><td class="border border-blue-300 p-2">Constant weight tolerance</td><td class="border border-blue-300 p-2">≤0.5 mg</td><td class="border border-blue-300 p-2">Ensures all solvent + moisture removed</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>NDC sample ko 40-45°C water bath mein rakh kar completely melt karein aur thoroughly mix karein. <span class="text-xs text-gray-500">(Solid NDC mein fat crystals upar hoti hain — bina melting ke non-representative sample milega)</span></li>
                <li>Mojonnier flask mein ~10 gram sample accurately weigh karein. <span class="text-xs text-gray-500">(Analytical balance use karein — 0.1 mg precision chahiye)</span></li>
                <li>1.5 ml 25% ammonia solution daalein, mix karein, 15 minute ke liye room temperature par rakhein. <span class="text-xs text-gray-500">(Protein dissolution aur emulsion breaking ke liye time chahiye)</span></li>
                <li>10 ml 95% ethanol daalein aur 1 minute mix karein. <span class="text-xs text-gray-500">(Proteins precipitate honge, emulsifier activity reduce hogi)</span></li>
                <li>25 ml diethyl ether daalein, flask band karein, 1 minute zor se shake karein. <span class="text-xs text-gray-500">(Fat ether mein dissolve hona shuru)</span></li>
                <li>25 ml petroleum ether daalein, 1 minute phir shake karein. <span class="text-xs text-gray-500">(Triglycerides extract hote hain)</span></li>
                <li>Layers separate hone tak rakhein (ya centrifuge 500 rpm par 5 minute). <span class="text-xs text-gray-500">(Ether lighter hai — upar aayega. NDC mein gum/stabilizers hain isliye separation slow ho sakti hai — centrifuge preferred hai)</span></li>
                <li>Upper ether layer ko pre-weighed flask mein decant karein — saavdhani se, aqueous layer saath na aaye. <span class="text-xs text-gray-500">(Aqueous layer mein paani, protein, sugar hain — ye fat weight badhate hain)</span></li>
                <li>Aqueous layer se 2 baar aur extractions karein (15+15 ml each ether mixture). <span class="text-xs text-gray-500">(Residual fat nikalna — strong emulsifiers ke kaaran zaruri hai)</span></li>
                <li>Solvents ko water bath (60°C) par evaporate karein. <span class="text-xs text-gray-500">(Low temperature par — fat oxidize na ho)</span></li>
                <li>Flask ko 102°C oven mein constant weight tak dry karein (successive weighings mein ≤0.5 mg difference).</li>
                <li>Desiccator mein cool karein aur weigh karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Fat = [(W3 - W1) / W2] × 100

Jahaan:
W1 = Empty flask ka weight (g)
W2 = Sample ka weight (g)  
W3 = Flask + extracted fat ka weight (g)
(W3 - W1) = Extracted fat ka weight (g)</code></pre>

              <div class="bg-gray-50 p-3 rounded mt-2 text-sm">
                <p><strong>Example:</strong></p>
                <p>W1 (empty flask) = 52.1000 g</p>
                <p>W2 (sample) = 10.0250 g</p>
                <p>W3 (flask + fat) = 55.3150 g</p>
                <p>Fat weight = 55.3150 - 52.1000 = 3.2150 g</p>
                <p>% Fat = (3.2150 / 10.0250) × 100 = <strong>32.07%</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Expected / Specification Values:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>NDC (Non-Dairy Cream):</strong> Typically 25-35% fat (as per manufacturer spec)</li>
                <li><strong>Whipping Cream (dairy):</strong> Minimum 30% fat (FSSAI)</li>
                <li><strong>NDC Topping Cream:</strong> 28-33% fat</li>
                <li><strong>Low-fat NDC:</strong> 15-20% fat (agar declared ho)</li>
              </ul>
            `
          },
          {
            title: "Moisture / Total Solids ka Determination",
            purpose: "NDC mein paani ki matra aur total dissolved/suspended solids determine karna. Moisture content directly shelf life, texture aur microbial stability ko affect karta hai. Total solids se product ki richness aur concentration confirm hoti hai.",
            reference: "IS 1479 (Part II) 1961 / AOAC 926.08",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>NDC ke ek known weight ko controlled temperature (102°C) par oven mein tab tak dry kiya jaata hai jab tak saara free moisture evaporate na ho jaye. Bachi hui material = Total Solids. Weight loss = Moisture content. NDC mein moisture control bahut critical hai — zyada moisture se microbial growth hota hai, kam moisture se product thick/pasty ho jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">NDC ki Moisture-Relevant Composition:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Free water:</strong> Continuous phase — 55-65% typical</li>
                <li><strong>Bound water:</strong> Proteins aur stabilizers se bound — ye thoda late evaporate hota hai</li>
                <li><strong>Total Solids:</strong> Fat + proteins + sugars + emulsifiers + stabilizers + minerals = ~35-45%</li>
              </ul>

              <div class="bg-purple-50 border-l-4 border-purple-400 p-4 my-4 rounded">
                <h4 class="font-bold text-purple-800 mb-3">🔬 NDC Moisture Testing ke Har Factor ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-purple-700">❓ NDC mein moisture testing kyun critical hai? Dairy cream se zyada important kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Shelf life direct link:</strong> NDC mein preservatives limited hote hain. Zyada moisture (>65%) → water activity (aw) badh jaati hai → microbial growth faster → product jaldi kharab. Standard NDC ka aw typically 0.95-0.97 hona chahiye.</li>
                  <li><strong>Whipping performance:</strong> Agar moisture zyada ho to fat concentration effectively kam ho jaati hai → cream stiff peaks nahi de sakti. Agar moisture kam ho to cream thick → zyada force chahiye whipping mein.</li>
                  <li><strong>Emulsion stability:</strong> Water:fat ratio (typically 2:1) disturb hone par emulsion break ho sakti hai — churning ya syneresis (paani alag hona) ho sakta hai.</li>
                  <li><strong>Regulatory compliance:</strong> NDC products ka declared composition accurate hona chahiye — moisture content label se match karna chahiye.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-purple-700">❓ 5 gram sample kyun? NDC ke liye zyada ya kam kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>5 gram optimal kyunki:</strong> NDC mein ~55-65% moisture → 5 g mein ~2.75-3.25 g paani → ye evaporate hoga aur ~1.75-2.25 g solids bachenge — dono amounts analytically measurable hain.</li>
                  <li><strong>Zyada sample (10-20 g) se problems:</strong> NDC mein sugar (glucose syrup) hoti hai — drying ke time caramelization shuru ho sakti hai edges par → weight loss incomplete lagegi → moisture underestimate hoga. Surface crust bhi ban sakti hai.</li>
                  <li><strong>Kam sample (1-2 g) se problems:</strong> Weighing error zyada hoga — 0.1 mg error, 2 g sample mein 0.005% error deta hai vs 5 g mein 0.002% — accuracy suffer karti hai.</li>
                  <li><strong>NDC homogenization:</strong> 5 g weighing se pehle NDC ko 40°C par melt karke mix zaroor karein — non-uniform sample se galat result aayega.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-purple-700">❓ 102 ± 2°C kyun? NDC ke liye specifically:</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Free water evaporation:</strong> 100°C se upar — saara free water evaporate ho jaata hai.</li>
                  <li><strong>Bound water removal:</strong> Proteins (sodium caseinate) aur stabilizers (carrageenan, guar gum) se tightly bound water bhi 102°C par dheere dheere niklega.</li>
                  <li><strong>Glucose syrup safe at 102°C:</strong> Glucose syrup ka caramelization ~160°C+ par hota hai — 102°C par safe hai. Sucrose bhi 102°C par stable hai.</li>
                  <li><strong>Emulsifiers safe:</strong> Polysorbate 60, SMS — 102°C par stable, decompose nahi hote.</li>
                  <li><strong>Carrageenan/Guar gum:</strong> 102°C par dehydrate hote hain (bound water lose karte hain) lekin decompose nahi hote — weight loss moisture mein count hoga (slight overestimation possible).</li>
                  <li><strong>104°C se upar na jayein:</strong> Sodium caseinate 110°C+ par Maillard reaction (browning) start kar sakta hai sugar ke saath → weight loss apparent zyada hoga → moisture overestimate.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-purple-700">❓ NDC ke liye drying time kitna? Dairy cream se alag kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Initial 30 min water bath (boiling water):</strong> NDC mein gum/stabilizers hain jo ek viscous layer banate hain — direct oven mein rakhne par ye layer crust ban jaati hai jiske neeche paani trap ho jaata hai. Water bath par gentle evaporation se pehle free water nicely hata jaata hai.</li>
                  <li><strong>Phir 2-3 hours 102°C oven:</strong> Bound water aur residual moisture ke liye.</li>
                  <li><strong>Constant weight check:</strong> Jab do successive weighings (1 hour apart) mein ≤0.5 mg difference ho — tab complete.</li>
                  <li><strong>NDC mein zyada time kyun:</strong> Guar gum aur carrageenan strongly bind water — inhe release karne mein time lagta hai. Plain milk se zyada time lag sakta hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-purple-700">❓ Flat-bottom dish kyun? Deep beaker kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Surface area maximize:</strong> Flat-bottom dish mein sample ki thin, uniform layer banti hai → evaporation faster aur more uniform hoti hai.</li>
                  <li><strong>NDC-specific:</strong> NDC mein sugar hoti hai — deep container mein bottom par sugar concentrate hoga → uneven drying → incomplete moisture removal.</li>
                  <li><strong>Dish diameter:</strong> 7-9 cm diameter optimal — too small mein NDC zyada thick layer mein rahegi, too large mein sample spread ho kar edges par differently dry hoga.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-purple-700">📊 NDC Moisture Testing Summary:</h5>
                <table class="table-auto border-collapse border border-purple-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-purple-100"><th class="border border-purple-300 p-2">Parameter</th><th class="border border-purple-300 p-2">Value</th><th class="border border-purple-300 p-2">NDC-Specific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-purple-300 p-2">Sample</td><td class="border border-purple-300 p-2">5 g (melted, mixed)</td><td class="border border-purple-300 p-2">Uniform sample essential — NDC is non-homogeneous when cold</td></tr>
                    <tr><td class="border border-purple-300 p-2">Water bath pre-dry</td><td class="border border-purple-300 p-2">30 min, boiling water</td><td class="border border-purple-300 p-2">Gum/stabilizer crust formation rokta hai</td></tr>
                    <tr><td class="border border-purple-300 p-2">Oven temp.</td><td class="border border-purple-300 p-2">102 ± 2°C</td><td class="border border-purple-300 p-2">Sugar caramelize nahi, Maillard reaction nahi, gums safe</td></tr>
                    <tr><td class="border border-purple-300 p-2">Drying time</td><td class="border border-purple-300 p-2">2-3 hours + constant weight</td><td class="border border-purple-300 p-2">Bound water release karne ke liye zyada time (gums)</td></tr>
                    <tr><td class="border border-purple-300 p-2">Constant weight</td><td class="border border-purple-300 p-2">≤0.5 mg difference</td><td class="border border-purple-300 p-2">Bound water completely removed confirmation</td></tr>
                    <tr><td class="border border-purple-300 p-2">Cooling</td><td class="border border-purple-300 p-2">Desiccator mein</td><td class="border border-purple-300 p-2">NDC solids hygroscopic hain — moisture reabsorb karte hain quickly</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Flat-bottom dish + lid ko 102°C oven mein 1 hour dry karein, desiccator mein cool karein, weigh karein (W1). <span class="text-xs text-gray-500">(Dish ka initial moisture remove karna zaroori hai)</span></li>
                <li>NDC sample ko 40-45°C par melt karein aur thoroughly mix karein. <span class="text-xs text-gray-500">(Cold NDC mein fat crystals + settling hogi — non-representative sample)</span></li>
                <li>Dish mein ~5 gram sample daalein, weigh karein (W2). <span class="text-xs text-gray-500">(W2 - W1 = exact sample weight)</span></li>
                <li>Dish ko lid hata kar boiling water bath par 30 min rakhein. <span class="text-xs text-gray-500">(Gum-based crust formation se bachne ke liye gentle pre-drying)</span></li>
                <li>102 ± 2°C oven mein 2-3 hours ke liye transfer karein. <span class="text-xs text-gray-500">(Remaining bound moisture remove karna)</span></li>
                <li>Dish ko lid se dhak kar, desiccator mein 30 min cool karein, weigh karein (W3).</li>
                <li>Jab tak constant weight na aaye (≤0.5 mg), 1 hour aur dry karein aur dobara weigh karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100

% Total Solids = 100 - % Moisture
             = [(W3 - W1) / (W2 - W1)] × 100

Jahaan:
W1 = Empty dish + lid (g)
W2 = Dish + lid + sample before drying (g)
W3 = Dish + lid + dried residue (g)
(W2 - W1) = Sample weight
(W2 - W3) = Moisture lost (evaporated water)
(W3 - W1) = Total solids remaining</code></pre>

              <div class="bg-gray-50 p-3 rounded mt-2 text-sm">
                <p><strong>Example:</strong></p>
                <p>W1 = 38.5000 g, W2 = 43.5150 g (sample = 5.015 g), W3 = 41.6200 g</p>
                <p>Moisture = (43.5150 - 41.6200) / (43.5150 - 38.5000) × 100 = (1.895 / 5.015) × 100 = <strong>37.79%</strong></p>
                <p>Total Solids = 100 - 37.79 = <strong>62.21%</strong></p>
                <p><em>Note: Agar fat 32% hai to SNF = 62.21 - 32 = 30.21%</em></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Moisture:</strong> 55-65% (typical NDC)</li>
                <li><strong>Total Solids:</strong> 35-45% (fat + protein + sugar + emulsifiers + stabilizers)</li>
                <li><strong>Shelf-life concern:</strong> Moisture >67% → aw >0.97 → increased spoilage risk</li>
              </ul>
            `
          },
          {
            title: "Protein ka Determination (Kjeldahl Method)",
            purpose: "NDC mein total nitrogen content measure karna aur ussse crude protein calculate karna. NDC mein sodium caseinate ya soy protein hote hain jo foam stability aur whipping properties ke liye responsible hain — inki quantity aur quality critical hai.",
            reference: "IS 1479 (Part II) 1961 / AOAC 991.20",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Kjeldahl method teen stages mein kaam karta hai: (1) <strong>Digestion</strong> — concentrated H₂SO₄ se organic nitrogen ko ammonium sulphate mein convert kiya jaata hai; (2) <strong>Distillation</strong> — NaOH se NH₃ gas release ki jaati hai, boric acid solution mein absorb hoti hai; (3) <strong>Titration</strong> — absorbed NH₃ ko standard HCl se titrate kiya jaata hai. Total nitrogen se protein calculate hota hai using a conversion factor.</p>

              <h4 class="font-semibold mt-4 mb-2">NDC mein Protein Sources (Jo Testing ko Affect Karte Hain):</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Sodium Caseinate:</strong> Most common — high protein (88-90% protein content), excellent emulsification, foam stabilization. Typical level in NDC: 1.5-3%</li>
                <li><strong>Soy Protein Isolate:</strong> Vegan/cheaper alternative — 90% protein content. Typical level: 1-2%</li>
                <li><strong>Whey Protein Concentrate:</strong> Sometimes used — 35-80% protein. Rarer in NDC.</li>
                <li><strong>Non-protein nitrogen:</strong> Emulsifiers mein nitrogen nahi hota usually, lekin agar urea (adulterant) ho to false high reading aayegi!</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Concentrated H₂SO₄:</strong> AR grade, 98% (w/w), sp. gr. 1.84</li>
                <li><strong>Catalyst Mixture:</strong> CuSO₄ : K₂SO₄ = 1:10 (by weight) — powdered</li>
                <li><strong>NaOH solution:</strong> 40% (w/v)</li>
                <li><strong>Boric Acid solution:</strong> 4% (w/v) with mixed indicators (methyl red + bromocresol green)</li>
                <li><strong>Standard HCl:</strong> 0.1 N (accurately standardized)</li>
                <li><strong>Zinc granules:</strong> To prevent bumping during distillation</li>
              </ul>

              <div class="bg-green-50 border-l-4 border-green-400 p-4 my-4 rounded">
                <h4 class="font-bold text-green-800 mb-3">🔬 NDC Protein Testing ke Har Factor ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ NDC mein protein testing kyun zaroori hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Whipping stability:</strong> Sodium caseinate whipped NDC mein air bubbles ke around protein film banata hai — ye film foam stable rakhti hai. Kam protein → foam jaldi collapse, overrun (%) kam aata hai, texture poor hoti hai.</li>
                  <li><strong>Emulsion stability:</strong> Protein fat droplets ko stabilize karta hai — kam protein → emulsion break → fat separate ho sakti hai (churning effect during whipping).</li>
                  <li><strong>Label compliance:</strong> NDC products par declared protein % accurate hona chahiye.</li>
                  <li><strong>Adulteration detection:</strong> Agar NDC mein soy protein ki jagah cheaper gelatin (animal protein) use hua ho to nitrogen bhi aayega — Kjeldahl detect nahi kar pata specifically, lekin amino acid profiling se pata chalega.</li>
                  <li><strong>Urea adulteration:</strong> Agar non-protein nitrogen (urea, melamine) milaya ho to Kjeldahl false high protein dega — ye critical safety concern hai (melamine scandal ki tarah)!</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Sample size NDC ke liye — 1-2 gram kyun? 5 g ya 10 g kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>NDC mein protein ~1.5-3%</strong> → 2 g sample mein ~0.03-0.06 g protein → ~0.005-0.010 g nitrogen → titratable amount ~4-9 ml 0.1N HCl — ye measurable range mein hai.</li>
                  <li><strong>Zyada sample (10 g):</strong> Zyada fat → digestion mein zyada time, zyada acid, zyada charring → digest harder to handle. Also, boric acid absorber saturate ho sakta hai.</li>
                  <li><strong>Kam sample (0.5 g):</strong> Nitrogen amount bahut kam → titration endpoint clear nahi → error zyada.</li>
                  <li><strong>NDC fat ka consideration:</strong> NDC mein 25-35% fat hai — fat digestion mein consume nahi hota as protein karta hai, lekin zyada fat se digestion flask mein frothing/overflow ka risk hota hai. 2 g sample safe hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ H₂SO₄ concentrated (98%) kyun? 50% ya 70% kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Reaction:</strong> Organic-N + H₂SO₄ (hot) → CO₂ + H₂O + (NH₄)₂SO₄</li>
                  <li><strong>98% kyun:</strong> High concentration + high boiling point (~337°C) → sufficient energy to break C-N bonds in proteins. Dilute acid ka boiling point kam hoga → temperature insufficient → incomplete digestion → low nitrogen recovery.</li>
                  <li><strong>Oxidizing agent:</strong> H₂SO₄ fat, carbohydrates, proteins sab ko oxidize karta hai → CO₂ + H₂O release hota hai, N → ammonium salt banta hai.</li>
                  <li><strong>Volume (25-30 ml for 2g NDC):</strong> NDC mein fat hai — fat bhi acid consume karta hai (oxidation). Zyada acid ensure karta hai ki protein digestion complete ho. Plain milk ke liye 15-20 ml sufficient hota, NDC ke liye zyada chahiye.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Catalyst — CuSO₄ aur K₂SO₄ — DONO kyun? Koi ek kyun nahi?</h5>
                <table class="table-auto border-collapse border border-green-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-green-100"><th class="border border-green-300 p-2">Catalyst Component</th><th class="border border-green-300 p-2">Role</th><th class="border border-green-300 p-2">Amount aur Kyun</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-green-300 p-2">CuSO₄ (Copper sulphate)</td><td class="border border-green-300 p-2">True catalyst — oxidation reaction ki rate badhata hai. Cu²⁺ → Cu⁺ → Cu²⁺ cycle mein react karke N-containing compounds ka breakdown accelerate karta hai</td><td class="border border-green-300 p-2">0.5-1 g per digestion. Zyada se Cu solution distillation mein boric acid mein aa sakta hai → indicator interference</td></tr>
                    <tr><td class="border border-green-300 p-2">K₂SO₄ (Potassium sulphate)</td><td class="border border-green-300 p-2">Boiling point elevator — H₂SO₄ + K₂SO₄ mixture ka boiling point 330°C+ tak pahunch jaata hai (plain H₂SO₄ = 337°C). Higher temperature = faster, more complete digestion</td><td class="border border-green-300 p-2">5-10 g per digestion. Ratio CuSO₄:K₂SO₄ = 1:10. K₂SO₄ zyada effective boiling point raising agent hai</td></tr>
                    <tr><td class="border border-green-300 p-2 font-semibold">Dono saath (1:10 ratio)</td><td class="border border-green-300 p-2 font-semibold">Synergistic effect — high temperature + catalytic oxidation → 30-40 min mein complete digestion (bina catalyst 2-3 hours lag sakte hain)</td><td class="border border-green-300 p-2 font-semibold">Standard Kjeldahl catalyst mixture</td></tr>
                  </tbody>
                </table>
                <p class="text-sm mt-1 text-green-800"><strong>Se bhi H₂O₂ ya Selenium kyun alternative hain:</strong> H₂O₂ (30%) accelerates digestion (oxidant). Se (Selenium) stronger catalyst hai lekin toxic — environmental concerns. CuSO₄+K₂SO₄ safest combination hai laboratory use ke liye.</p>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ 40% NaOH kyun? Concentration itni zyada kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Reaction:</strong> (NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + 2NH₃↑</li>
                  <li><strong>40% (w/v) kyun:</strong> Digested sample mein excess H₂SO₄ hai — pehle acid neutralize hogi, phir NH₄⁺ ko NH₃ mein convert karega. Strong NaOH sufficient amount chahiye ye sab karne ke liye.</li>
                  <li><strong>Volume (50-60 ml for 2g NDC):</strong> NDC digest mein H₂SO₄ excess hai (fat oxidation ke liye zyada acid daala tha) — pehle ye neutralize hogi (exothermic), phir NH₄⁺ → NH₃. Sufficient NaOH ensure karta hai alkaline conditions maintained rahein.</li>
                  <li><strong>Concentrated kyun dilute nahi:</strong> Dilute NaOH zyada volume → distillation system mein overflow, aur heating ke time zyada paani steam banega → boric acid mein unnecessary dilution.</li>
                  <li><strong>Exothermic caution:</strong> NaOH addition ke time heat generate hoti hai — safety ke liye carefully add karein.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Boric Acid 4% kyun absorber ke roop mein? HCl ya H₂SO₄ kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Reaction:</strong> NH₃ + H₃BO₃ → NH₄⁺ + H₂BO₃⁻ (ammonium borate — alkaline)</li>
                  <li><strong>Boric acid advantage 1 — Self-indicating:</strong> Indicator (methyl red + bromocresol green) boric acid solution mein blue-green colour dikhata hai (alkaline ammonium borate). HCl titration se H₂BO₃⁻ → H₃BO₃ → colour changes to pink/red. Endpoint bahut sharp hai.</li>
                  <li><strong>Boric acid advantage 2 — Simplicity:</strong> Boric acid absorber mein exact amount precisely measure karne ki zaroorat NAHI — sirf excess ensure karein. HCl absorber mein precisely measured amount chahiye (kyunki back titration karna padta hai back calculation ke liye).</li>
                  <li><strong>4% kyun:</strong> Saturated boric acid ~5.5% at 25°C — 4% safely unsaturated hai (crystals nahi bante in flask). Sufficient concentration NH₃ absorb karne ke liye.</li>
                  <li><strong>Mixed indicators kyun (methyl red + bromocresol green):</strong> Single indicator ka endpoint at this pH (~5) sharp nahi hota. Mixed indicator → sharp color change (blue-green to pink-red) at pH ~4.4-4.6 → accurate endpoint.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Protein Conversion Factor — 6.25 NDC ke liye sahi hai? Alag factor kyun use karte hain?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>6.25 kahan se aaya:</strong> Average protein mein nitrogen content = 16% → 100/16 = 6.25. Matlab har 1 g nitrogen = 6.25 g protein.</li>
                  <li><strong>NDC mein sodium caseinate ke liye:</strong> Casein mein N content ~15.7% → factor = 100/15.7 = <strong>6.38</strong> (more accurate). Lekin industry mein 6.25 hi standard use hota hai.</li>
                  <li><strong>Soy protein ke liye:</strong> N content ~16% → factor = 6.25 (same).</li>
                  <li><strong>Sodium caseinate mein extra nitrogen:</strong> Sodium caseinate = casein + NaOH se sodium salt. Na content ~0.5-0.8% — ye nitrogen nahi hai, protein calculation ko directly affect nahi karta.</li>
                  <li><strong>Non-protein nitrogen (NPN) problem:</strong> NDC mein normally NPN nahi hota. Lekin agar adulterant (urea, melamine) mila ho to Kjeldahl galat high reading dega. Protein-specific methods (Bradford assay, Dumas method comparison) se NPN vs true protein distinguish ho sakta hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Zinc granules kyun daale jaate hain distillation flask mein?</h5>
                <p class="my-1">Distillation ke time liquid suddenly vigorous boiling (bumping) start kar sakta hai — boiling irregular hoti hai, solution splash ho sakta hai. Zinc granules (ya glass beads) smooth, even boiling provide karte hain — bumping rokta hai. Zinc NaOH ke saath react nahi karta (practically), toh nitrogen content affect nahi hota.</p>

                <h5 class="font-semibold mt-3 mb-1 text-green-700">❓ Standard HCl 0.1 N kyun? 1 N ya 0.01 N kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>2 g NDC mein ~0.03-0.06 g N</strong> → ~2.1-4.3 mmol N → ~21-43 ml 0.1N HCl consumed in titration.</li>
                  <li><strong>0.1N optimal range:</strong> 10-50 ml titration volume → readable aur accurate on burette (50 ml burette standard hai).</li>
                  <li><strong>1N se problem:</strong> Only 2-4 ml HCl lagega → burette error zyada → inaccurate result.</li>
                  <li><strong>0.01N se problem:</strong> 210-430 ml lagega → multiple refills → errors badh jayenge → impractical.</li>
                </ul>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Digestion:</strong> Kjeldahl flask mein ~2 g melted, mixed NDC sample accurately weigh karein. 25-30 ml concentrated H₂SO₄ aur catalyst mixture (CuSO₄+K₂SO₄, 1:10) daalein. Fume hood mein dhak ke rakh dein, dheere-dheere heat karein. <span class="text-xs text-gray-500">(Pehle dhime heat karo — foam/frothing rokne ke liye. NDC mein fat hai jo initially vigorously react karta hai)</span></li>
                <li>Digest karna jaari rakhein jab tak solution clear blue-green na ho jaye (2-4 hours typically). <span class="text-xs text-gray-500">(Clear = saari organic material completely oxidize ho gayi, sirf mineral salts bachein)</span></li>
                <li>Cool karein, distillation apparatus mein transfer karein, Kjeldahl flask ko 50-60 ml distilled water se wash karein aur ye bhi add karein. <span class="text-xs text-gray-500">(Saara ammonium sulphate transfer karna zaroori — wo crystal form mein bhi ho sakta hai walls par)</span></li>
                <li><strong>Distillation:</strong> Receiver flask mein 25-30 ml 4% boric acid + mixed indicator solution rakho. Distillation tube boric acid mein dip honi chahiye. 50-60 ml 40% NaOH carefully add karein aur immediately steam distillation start karein. <span class="text-xs text-gray-500">(NaOH add karne ke baad turant distill karein — NH₃ volatile hai, delay se loss hoga)</span></li>
                <li>Distillate volume ~150 ml aane tak distill karein. Solution ka color indicator mein check karein — indicator change indicate karta hai NH₃ absorb ho raha hai. <span class="text-xs text-gray-500">(Receiver flask mein colour blue-green se dheeray dheeray pale green hota jaata hai — jab colour faint ho jaaye tab distillation sufficient ho gayi)</span></li>
                <li><strong>Titration:</strong> Boric acid absorber (receiver flask) mein absorbed NH₃ ko 0.1 N standard HCl se titrate karein jab tak colour blue-green se pink na ho jaye. Volume (V ml) note karein.</li>
                <li>Blank titration bhi similarly karein (sample ke bina) aur V_blank note karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Nitrogen = [(V_sample - V_blank) × N_HCl × 0.014 × 100] / Sample weight (g)

% Crude Protein = % Nitrogen × Conversion Factor

Conversion Factors:
- Sodium Caseinate predominant: 6.38 (or use standard 6.25)
- Soy Protein: 6.25
- Mixed protein NDC: 6.25 (standard)

Jahaan:
V_sample = HCl titration volume for sample (ml)
V_blank = HCl titration volume for blank (ml)
N_HCl = Normality of HCl (e.g., 0.1)
0.014 = Milliequivalent weight of Nitrogen (g/meq) = 14/1000
Sample weight = in grams</code></pre>

              <div class="bg-gray-50 p-3 rounded mt-2 text-sm">
                <p><strong>Corrected Example with realistic NDC (2% protein NDC):</strong></p>
                <p>V_sample = 4.80 ml, V_blank = 0.20 ml, N_HCl = 0.1000 N, Sample = 2.0000 g</p>
                <p>% N = [(4.80 - 0.20) × 0.1000 × 0.014 × 100] / 2.0000 = [4.60 × 0.1000 × 0.014 × 100] / 2.0000 = 0.644 / 2.0000 = <strong>0.322% N</strong></p>
                <p>% Protein = 0.322 × 6.25 = <strong>2.01%</strong> ✓ (matches expected NDC protein level)</p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Protein:</strong> 1.5-3.5% (depending on formulation)</li>
                <li><strong>Sodium Caseinate based NDC:</strong> Typically 2-3% protein</li>
                <li><strong>Soy protein based NDC:</strong> Typically 1.5-2.5% protein</li>
              </ul>
            `
          },
          {
            title: "Total Sugar / Carbohydrate ka Determination (Lane-Eynon Method)",
            purpose: "NDC mein sugar content (sucrose, glucose syrup, lactose if any) determine karna. Sugar NDC ko sweetness, texture, overrun stability aur freeze-thaw performance deta hai. Lane-Eynon method reducing sugars (glucose, maltose, lactose) directly measure karta hai — sucrose ke liye inversion pehle karna padta hai.",
            reference: "IS 1163 : 1968 / AOAC 906.03",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Fehling solution (copper sulphate + sodium potassium tartrate + NaOH) ek alkaline oxidizing agent hai. Reducing sugars (glucose, maltose, lactose) heated conditions mein Cu²⁺ ko Cu⁺ mein reduce karte hain — cuprous oxide (Cu₂O) ka brick-red precipitate banta hai. Sample solution ko standard Fehling solution ke saath hot titrate kiya jaata hai. Endpoint = methylene blue indicator ka decolorization (Cu₂O ne indicator ko reduce kar diya).</p>

              <h4 class="font-semibold mt-4 mb-2">NDC mein Sugar Sources (Testing-Relevant):</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Glucose Syrup (corn syrup):</strong> Most common in NDC — reducing sugar (mainly glucose + maltose + dextrins) — directly measurable by Lane-Eynon</li>
                <li><strong>Sucrose:</strong> Non-reducing — pehle acid hydrolysis (inversion) karni padti hai → glucose + fructose banate hain → then Lane-Eynon</li>
                <li><strong>Dextrose (glucose):</strong> Reducing — directly measurable</li>
                <li><strong>Note:</strong> Carrageenan/guar gum non-sugar carbohydrates hain — Lane-Eynon se measure nahi hote, ye total carbohydrate mein aate hain (by difference se)</li>
              </ul>

              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded">
                <h4 class="font-bold text-yellow-800 mb-3">🔬 NDC Sugar Testing ke Har Factor ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ NDC mein sugar testing kyun zaroori hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Sweetness control:</strong> NDC ka primary use desserts, cakes, pastries mein hai — sweetness level consistent hona chahiye product se product.</li>
                  <li><strong>Overrun (whipping volume) par effect:</strong> Sugar whipping ke time foam stability improve karta hai — sugar molecules water ki surface tension badhate hain jo foam walls ko stabilize karta hai. Kam sugar → foam jaldi collapse.</li>
                  <li><strong>Freeze-thaw stability:</strong> Sugar (especially glucose syrup) freezing point depression karta hai — NDC frozen desserts mein ice crystal formation control hota hai. Sugar concentration correct hona zaroori hai.</li>
                  <li><strong>Maillard reaction prevention:</strong> NDC mein reducing sugars aur sodium caseinate (protein) dono hain — garam karne par browning ho sakti hai. Sugar level monitoring zaroori hai.</li>
                  <li><strong>Label compliance:</strong> Declared sugar content accurate honi chahiye — diabetics aur health-conscious consumers ke liye important.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Fehling Solution A aur B — alag kyun store karte hain? Milake kyun nahi rakhte?</h5>
                <table class="table-auto border-collapse border border-yellow-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-yellow-100"><th class="border border-yellow-300 p-2">Solution</th><th class="border border-yellow-300 p-2">Composition</th><th class="border border-yellow-300 p-2">Kyun Alag Rakhte Hain</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-yellow-300 p-2">Fehling A</td><td class="border border-yellow-300 p-2">CuSO₄ — 69.28 g/L distilled water</td><td class="border border-yellow-300 p-2">Cu²⁺ source — oxidizing agent</td></tr>
                    <tr><td class="border border-yellow-300 p-2">Fehling B</td><td class="border border-yellow-300 p-2">NaOH (250 g/L) + Sodium potassium tartrate (346 g/L)</td><td class="border border-yellow-300 p-2">Alkaline chelating environment — tartrate Cu²⁺ ko chelate karta hai</td></tr>
                    <tr><td class="border border-yellow-300 p-2 font-semibold">Mixed Fehling (A+B 1:1)</td><td class="border border-yellow-300 p-2 font-semibold">Cu(tartrate)₂²⁻ complex in alkaline — "deep blue Schweizer solution"</td><td class="border border-yellow-300 p-2 font-semibold">ALAG isliye: Mixed Fehling agar rakhi jaaye to slowly Cu₂O precipitate hota hai (reduces itself). Alag rakhne se indefinitely stable rahte hain</td></tr>
                  </tbody>
                </table>
                <p class="text-sm mt-1"><strong>Scientific detail:</strong> Tartrate Cu²⁺ ko complexed rakhta hai alkaline medium mein — bina tartrate ke Cu(OH)₂ precipitate ho jaata. Complex stable hai — reducing agents (sugars) hi ise Cu⁺ → Cu₂O mein reduce kar sakte hain when heated.</p>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ 5 ml Fehling A + 5 ml Fehling B = 10 ml total — ye ratio aur volume kyun fixed hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>1:1 ratio kyun:</strong> Exactly equimolar CuSO₄ (from A) aur tartrate complex (from B) milne chahiye taaki complete complexation ho. Agar ratio change ho to unreacted Cu²⁺ ya unreacted tartrate hoga → reaction stoichiometry change → inaccurate results.</li>
                  <li><strong>10 ml total kyun:</strong> Standardized amount — 10 ml Fehling = exactly 0.05 g equivalent glucose (by definition, as per Lane-Eynon standard table). Ye reference point hai titration ke liye.</li>
                  <li><strong>CuSO₄ 69.28 g/L kyun specifically:</strong> Ye concentration ensure karta hai ki exactly 1 ml Fehling A = 0.003464 g CuSO₄ = specific millimoles Cu²⁺. Combined with B, 10 ml mixed = exactly 0.05 g glucose equivalent. Ye standardization se aaya hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Sample defatting kyun zaroori hai NDC mein?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>NDC mein 25-35% fat hai</strong> — fat Fehling solution ke saath interact kar sakta hai → emulsion ban sakta hai → endpoint unclear hoga.</li>
                  <li><strong>Defatting method:</strong> Sample ko petroleum ether se wash karo (fat dissolve hoga) ya — practical method: protein precipitation (Carrez I + II treatment) se fat aur protein dono remove hote hain.</li>
                  <li><strong>Carrez I:</strong> Zinc acetate + acetic acid → protein + fat precipitate.</li>
                  <li><strong>Carrez II:</strong> Potassium ferrocyanide → remaining protein aur heavy metals precipitate.</li>
                  <li><strong>Iske baad filtrate clear hoga</strong> — sirf sugars + minerals in solution → Lane-Eynon accurately ho sakta hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Sucrose inversion — HCl 6.35 N, 68-70°C, 5 min — ye specific conditions kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Reaction:</strong> C₁₂H₂₂O₁₁ (sucrose) + H₂O → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose)</li>
                  <li><strong>HCl kyun (not H₂SO₄):</strong> HCl is easily neutralized by NaOH after inversion — ye zaroori hai because zyada acid Fehling solution ko disturb karta hai. H₂SO₄ neutralize karna harder aur interfere karta hai.</li>
                  <li><strong>6.35 N kyun:</strong> Ye concentration sufficient acid activity provide karta hai sucrose hydrolysis ke liye. Kam concentration → incomplete hydrolysis → true sugar not measured. Zyada → fructose further degrade ho sakta hai (furfural banta hai → interferes).</li>
                  <li><strong>68-70°C kyun:</strong> Is temperature par sucrose inversion rate fast hai (minutes mein complete). Room temperature par bahut slow hoga (hours lagte hain). 80°C+ par fructose decompose ho sakta hai — galat result.</li>
                  <li><strong>5 min kyun:</strong> 68-70°C par 5 min mein >99% sucrose invert ho jaata hai. Kam time → incomplete inversion → underestimate. Zyada time → fructose degradation start.</li>
                  <li><strong>Neutralization with NaOH after inversion:</strong> Excess HCl ko neutralize karna zaroori hai (methyl orange indicator se endpoint: yellow) taaki ye Fehling ko neutralize na kare (Fehling alkaline hai).</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Methylene Blue indicator — endpoint kaise kaam karta hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Methylene Blue (MB)</strong> ek redox indicator hai.</li>
                  <li><strong>Oxidized form:</strong> Blue colour (initial Fehling solution mein blue hai + MB blue)</li>
                  <li><strong>Reduced form:</strong> Colorless (leuco-MB)</li>
                  <li><strong>Endpoint mechanism:</strong> Jab saara Cu²⁺ reduce ho jaata hai (Cu₂O ban gaya), tab thodi si bhi reducing sugar remaining hai to MB ko reduce kar deti hai → blue se colorless → endpoint!</li>
                  <li><strong>Titration "hot" kyun:</strong> Cold mein reaction slow hoti hai, endpoint sharp nahi hota. Boiling conditions mein reaction fast aur clean hoti hai.</li>
                  <li><strong>Near-endpoint slow addition kyun:</strong> MB irreversibly reduce ho sakta hai agar bahut zyada sugar ek saath add ho — color change se miss ho sakta hai. Dropwise addition near endpoint → accurate endpoint detection.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-yellow-700">❓ Lane-Eynon Table se sugar calculate kaise karte hain?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Table:</strong> AOAC ya IS official tables mein diya hai — titration volume (ml of sample solution) vs sugar concentration (mg per 10 ml Fehling solution).</li>
                  <li><strong>Ye table kyun:</strong> Lane-Eynon reaction non-linear hai — zyada sugar add karo to reaction rate change hoti hai. Simple linear calculation kaam nahi karta accurately. Empirical tables zyada accurate hain.</li>
                  <li><strong>Interpolation:</strong> Agar titration volume table mein exact nahi hai to interpolation karein.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-yellow-700">📊 NDC Sugar Testing Summary:</h5>
                <table class="table-auto border-collapse border border-yellow-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-yellow-100"><th class="border border-yellow-300 p-2">Parameter</th><th class="border border-yellow-300 p-2">Value</th><th class="border border-yellow-300 p-2">NDC-Specific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-yellow-300 p-2">Sample preparation</td><td class="border border-yellow-300 p-2">Defat + Carrez clarification</td><td class="border border-yellow-300 p-2">NDC mein high fat (25-35%) endpoint obscure karta hai</td></tr>
                    <tr><td class="border border-yellow-300 p-2">Sucrose inversion</td><td class="border border-yellow-300 p-2">6.35N HCl, 68-70°C, 5 min</td><td class="border border-yellow-300 p-2">NDC mein sucrose non-reducing — convert karna zaroori</td></tr>
                    <tr><td class="border border-yellow-300 p-2">Fehling A+B</td><td class="border border-yellow-300 p-2">5+5 ml = 10 ml</td><td class="border border-yellow-300 p-2">Fixed — 10 ml = 0.05 g glucose equivalent standard</td></tr>
                    <tr><td class="border border-yellow-300 p-2">Titration condition</td><td class="border border-yellow-300 p-2">Boiling, continuous</td><td class="border border-yellow-300 p-2">Sharp endpoint aur fast reaction ke liye heat zaroori</td></tr>
                    <tr><td class="border border-yellow-300 p-2">Indicator</td><td class="border border-yellow-300 p-2">Methylene blue</td><td class="border border-yellow-300 p-2">Redox indicator — blue to colorless at endpoint</td></tr>
                    <tr><td class="border border-yellow-300 p-2">Calculation</td><td class="border border-yellow-300 p-2">Lane-Eynon table + formula</td><td class="border border-yellow-300 p-2">Non-linear reaction — empirical table zyada accurate</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure (NDC ke liye):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Sample preparation:</strong> ~5 g melted, mixed NDC sample 250 ml volumetric flask mein weigh karein. 100 ml warm distilled water daalein aur mix karein. <span class="text-xs text-gray-500">(Warm water sugar dissolve karne mein help karta hai — NDC mein glucose syrup viscous hota hai)</span></li>
                <li><strong>Defatting/Clarification (Carrez method):</strong> 5 ml Carrez I (zinc acetate + acetic acid) daalein, mix karein. Phir 5 ml Carrez II (potassium ferrocyanide) daalein, mix karein. <span class="text-xs text-gray-500">(Protein aur fat precipitate hote hain — clear filtrate milega)</span></li>
                <li>Distilled water se volume 250 ml tak complete karein. Filter karein — clear filtrate use karein. <span class="text-xs text-gray-500">(Filtrate mein sirf sugars + minerals hain — fat aur protein filtered out)</span></li>
                <li><strong>Sucrose inversion (agar sucrose measure karna hai):</strong> 50 ml filtrate lein, 5 ml 6.35 N HCl daalein, 68-70°C water bath mein 5 min rakhein. Cool karein, methyl orange indicator se NaOH se neutralize karein (yellow colour = endpoint). <span class="text-xs text-gray-500">(Sucrose → glucose + fructose — ab reducing sugar hai)</span></li>
                <li>Inverted solution ko 100 ml tak dilute karein.</li>
                <li><strong>Titration:</strong> Burette mein sugar solution fill karein. Conical flask mein 5 ml Fehling A + 5 ml Fehling B daalein. 5-7 ml sugar solution add karein, boil karein. <span class="text-xs text-gray-500">(Preliminary titration — rough estimate ke liye)</span></li>
                <li>2-3 drops methylene blue add karein. Near endpoint, dropwise sugar solution add karte jaao jabtak blue colour bilkul disappear na ho jaye. Volume (V ml) note karein.</li>
                <li>Precise titration repeat karein — bulk addition first, then dropwise near endpoint.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>Lane-Eynon Table se:
V ml sample solution ne 10 ml Fehling reduce kiya
→ Table mein V ke against sugar (mg) = W mg

% Total Sugar = [W (mg) × Dilution factor] / [Sample weight (g) × 1000] × 100

Dilution Factor = Total volume / Aliquot volume taken for titration

Example:
Sample = 5 g, Total vol = 250 ml, Aliquot for titration = 25 ml
If V titration = 12.5 ml → Table gives W = 50.3 mg glucose equivalent

Dilution factor = 250/25 = 10
% Sugar = [50.3 × 10] / [5 × 1000] × 100 = 503/5000 × 100 = 10.06%</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Total sugars (reducing, after inversion):</strong> 5-15% (depending on formulation)</li>
                <li><strong>Glucose syrup based NDC:</strong> 8-12% sugars</li>
                <li><strong>Sucrose based NDC:</strong> 5-10% sucrose equivalent</li>
                <li><strong>Unsweetened NDC (for cooking):</strong> 0-2% sugars</li>
              </ul>
            `
          },
          {
            title: "pH ka Determination",
            purpose: "NDC ki acidity ya alkalinity measure karna. NDC ka pH emulsion stability, microbial safety, aur shelf life ke liye critical parameter hai. pH shift indicate karta hai — microbial spoilage, ingredient imbalance ya formulation error.",
            reference: "IS 1479 (Part I) 1961 / AOAC 981.12",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>pH meter ek electrochemical instrument hai jisme glass electrode aur reference electrode hoti hai. Glass electrode ka potential sample solution ke hydrogen ion (H⁺) concentration ke function mein change hota hai. Ye potential voltmeter se measure hota hai aur pH scale par display hota hai. pH = -log[H⁺]. NDC ek complex emulsion hai — accurate pH ke liye sample preparation important hai.</p>

              <h4 class="font-semibold mt-4 mb-2">NDC mein pH-Relevant Components:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Buffer salts (Sodium citrate, Na₂HPO₄):</strong> pH control karte hain — typically pH 6.5-7.0 range maintain karte hain</li>
                <li><strong>Sodium caseinate:</strong> Amphoteric protein — pH ke saath behavior change hota hai</li>
                <li><strong>Lactic acid (if any fermentation occurred):</strong> pH gira sakta hai — spoilage indicator</li>
                <li><strong>Emulsifiers (polysorbate 60):</strong> Slightly acidic — minor pH effect</li>
              </ul>

              <div class="bg-red-50 border-l-4 border-red-400 p-4 my-4 rounded">
                <h4 class="font-bold text-red-800 mb-3">🔬 NDC pH Testing ke Har Factor ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-red-700">❓ NDC mein pH testing kyun critical hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Emulsion stability:</strong> Sodium caseinate ka isoelectric point (pI) = 4.6. Agar NDC ka pH 4.6 ke paas aaye to caseinate precipitate hoga → emulsion break → fat separate, product fail!</li>
                  <li><strong>Microbial spoilage detection:</strong> Bacteria lactic acid produce karte hain → pH girta hai. Normal NDC pH 6.5-7.0 → agar pH <6.0 ho to spoilage suspected.</li>
                  <li><strong>Whipping performance:</strong> pH 6.5-7.0 par sodium caseinate best whipping properties deta hai. Acidic or basic conditions mein protein conformation change → whipping affected.</li>
                  <li><strong>Maillard reaction rate:</strong> Higher pH → faster Maillard reaction (protein + sugar browning). pH monitoring se shelf life predict ho sakti hai.</li>
                  <li><strong>Regulatory:</strong> Some NDC products have pH specification — compliance testing.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-red-700">❓ Calibration Buffers — pH 4.0, 7.0, 9.2 — teen buffers kyun? Do nahi chalenge?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>pH meter electrode ka response:</strong> Theoretically linear (Nernst equation: E = E₀ - 0.0592 × pH at 25°C). Practically, electrode response slightly non-linear ho sakti hai at different pH ranges.</li>
                  <li><strong>Two-point calibration (7.0 + 4.0 or 7.0 + 9.2):</strong> Slope aur intercept define hote hain — lin interpolation. NDC typically pH 6.5-7.0 range mein — 7.0 buffer primary reference hai.</li>
                  <li><strong>Three-point calibration:</strong> More accurate — electrode non-linearity correct hoti hai. Professional labs mein preferred hai.</li>
                  <li><strong>NDC ke liye which buffers:</strong> pH 7.0 (neutral) + pH 4.0 (acidic side) — kyunki NDC ka pH 6-7 range mein hai, ye two buffers se accurate bracket milta hai.</li>
                  <li><strong>Fresh buffers kyun:</strong> Old buffers mein microbial growth ho sakti hai (especially pH 7.0 buffer) → buffer ka pH change ho jaata hai → calibration galat → all measurements galat!</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-red-700">❓ Temperature compensation (ATC) kyun zaroori hai? NDC ke liye specifically:</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Nernst equation:</strong> E = E₀ - (RT/nF) × 2.303 × pH. Temperature (T) directly electrode potential ko affect karta hai.</li>
                  <li><strong>25°C vs 20°C difference:</strong> Slope changes from 59.16 mV/pH at 25°C to 58.18 mV/pH at 20°C — ~1% difference — measurement error of ~0.05 pH units.</li>
                  <li><strong>NDC-specific:</strong> NDC refrigerated hoti hai (~5°C). Agar directly fridge se nikal kar pH measure karein to low temperature → different electrode response → wrong pH reading. Isliye 25°C par laao pehle (room temperature equilibrate) ya ATC (Automatic Temperature Compensation) use karo.</li>
                  <li><strong>ATC sensor:</strong> Thermometer in solution → meter automatically compensates — temperature-corrected pH.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-red-700">❓ NDC ke liye sample preparation — seedha measure kyun nahi karte?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>NDC emulsion problem:</strong> Fat droplets electrode ke glass membrane ko coat kar sakte hain → slow response, drift → inaccurate readings.</li>
                  <li><strong>Solution 1 (Preferred):</strong> NDC ko warm karein (40°C), phir equal volume distilled water se dilute karein (1:1), mix karein, pH measure karein. Correction: pH reported as-is (dilution ka minor effect hota hai — buffer salts already present hain).</li>
                  <li><strong>Solution 2 (Direct):</strong> 40°C par liquid NDC mein directly electrode dip karein — quickly measure lein before electrode fouls. After each measurement clean electrode thoroughly.</li>
                  <li><strong>Electrode cleaning between NDC samples:</strong> Distilled water se wash, then lightly wipe, then buffer check → accuracy ensure hoti hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-red-700">❓ Glass electrode kyun? Dusre sensors kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Glass electrode mechanism:</strong> Special glass membrane (lithium-silicate ya sodium-silicate) selectively permeable to H⁺ ions — potential builds up proportional to pH.</li>
                  <li><strong>H⁺ selective:</strong> Na⁺, K⁺, Ca²⁺ — these interfere minimally at normal pH (6-7) range. At very high pH (>12) sodium error hoti hai — NDC mein concern nahi.</li>
                  <li><strong>Fat tolerance:</strong> Glass electrode fat mildly tolerates karta hai — agar regularly clean karo to works fine. Combination electrode (glass + reference in one body) NDC labs mein practical hai.</li>
                  <li><strong>Storage:</strong> Electrode ko 3M KCl solution mein store karein — dry mein mat rakhein warna glass membrane crack kar sakti hai → wrong readings forever!</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-red-700">📊 NDC pH Testing Summary:</h5>
                <table class="table-auto border-collapse border border-red-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-red-100"><th class="border border-red-300 p-2">Parameter</th><th class="border border-red-300 p-2">Value/Condition</th><th class="border border-red-300 p-2">NDC-Specific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-red-300 p-2">Sample temp.</td><td class="border border-red-300 p-2">25°C (equilibrated)</td><td class="border border-red-300 p-2">NDC refrigerated hoti hai — direct cold measurement → wrong pH</td></tr>
                    <tr><td class="border border-red-300 p-2">Sample prep</td><td class="border border-red-300 p-2">1:1 dilution with water or direct at 40°C</td><td class="border border-red-300 p-2">Fat coating of electrode prevent karna + emulsion handling</td></tr>
                    <tr><td class="border border-red-300 p-2">Calibration</td><td class="border border-red-300 p-2">pH 4.0 + 7.0 buffers</td><td class="border border-red-300 p-2">NDC pH typically 6-7 — ye range bracket karte hain</td></tr>
                    <tr><td class="border border-red-300 p-2">ATC</td><td class="border border-red-300 p-2">Yes (25°C reference)</td><td class="border border-red-300 p-2">Temperature affects electrode potential — NDC at different temps</td></tr>
                    <tr><td class="border border-red-300 p-2">Electrode cleaning</td><td class="border border-red-300 p-2">After each NDC measurement</td><td class="border border-red-300 p-2">Fat fouling prevent karna</td></tr>
                    <tr><td class="border border-red-300 p-2">Electrode storage</td><td class="border border-red-300 p-2">3M KCl solution</td><td class="border border-red-300 p-2">Membrane hydrated rakhna — dry hone se permanent damage</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>pH meter ko standard buffer solutions se calibrate karein (pH 4.0 aur 7.0). <span class="text-xs text-gray-500">(Fresh buffers use karein — old buffers contaminated ho sakte hain → wrong calibration)</span></li>
                <li>NDC sample ko 40°C water bath mein melt karein aur thoroughly mix karein.</li>
                <li>25°C par equilibrate karein (room temperature par ~15 min rakhein).</li>
                <li>Sample ko 100 ml beaker mein transfer karein (direct measurement) ya 1:1 distilled water se dilute karein (fat coating risk kam hoga). <span class="text-xs text-gray-500">(Electrode ko fat se protect karna — accuracy ke liye)</span></li>
                <li>Electrode ko sample mein immerse karein — stable reading aa jaane tak wait karein (30-60 seconds). <span class="text-xs text-gray-500">(Stabilization time electrode ke glass membrane ko equilibrate hone ka time deta hai)</span></li>
                <li>pH note karein (2 decimal places). Temperature bhi record karein.</li>
                <li>Electrode ko distilled water se wash karein, gently wipe karein. Buffer mein check karein (within 0.05 pH units hona chahiye — warna recalibrate).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Fresh, good quality NDC:</strong> pH 6.5 - 7.0</li>
                <li><strong>Slightly acidic (aging):</strong> pH 6.0 - 6.5 (monitor closely)</li>
                <li><strong>Spoiled NDC:</strong> pH < 6.0 (lactic acid production from microbial growth)</li>
                <li><strong>Over-alkali (formulation error):</strong> pH > 7.2 (excess buffer salts)</li>
              </ul>
            `
          },
          {
            title: "Titratable Acidity ka Determination",
            purpose: "NDC mein free acids ki total amount measure karna — ye pH se alag aur complementary test hai. Titratable acidity actual acid content measure karta hai, jo microbial spoilage ka early indicator hai — pH se bhi pehle detect ho sakta hai (buffer effect ki wajah se).",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko phenolphthalein indicator ke saath 0.1 N NaOH solution se titrate kiya jaata hai jab tak faint pink colour na aaye (pH ~8.3 = endpoint). Consumed NaOH ki volume se lactic acid equivalent acidity calculate ki jaati hai. Buffer salts ki wajah se pH test early acidity increase nahi dikhata, lekin titratable acidity mein change pehle aata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">NDC mein Acidity Sources:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Lactic acid:</strong> Microbial fermentation — primary spoilage indicator</li>
                <li><strong>Free fatty acids (FFA):</strong> Fat hydrolysis (rancidity) se — vegetable fat mein lauric acid, myristic acid release ho sakti hain</li>
                <li><strong>Citric acid:</strong> Agar sodium citrate buffer salt partially free acid form mein ho</li>
                <li><strong>Carbon dioxide:</strong> Dissolved CO₂ → carbonic acid → acidity mein count hoti hai (minor)</li>
              </ul>

              <div class="bg-teal-50 border-l-4 border-teal-400 p-4 my-4 rounded">
                <h4 class="font-bold text-teal-800 mb-3">🔬 NDC Titratable Acidity ke Har Factor ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ Titratable acidity aur pH — dono kyun? Ek kafi nahi hai?</h5>
                <table class="table-auto border-collapse border border-teal-300 mt-2 text-sm w-full my-2">
                  <thead><tr class="bg-teal-100"><th class="border border-teal-300 p-2">Test</th><th class="border border-teal-300 p-2">Kya Measure Karta Hai</th><th class="border border-teal-300 p-2">NDC Advantage</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-teal-300 p-2">pH</td><td class="border border-teal-300 p-2">Active/free H⁺ concentration at equilibrium — "intensity" of acidity</td><td class="border border-teal-300 p-2">Quick screening, emulsion stability prediction</td></tr>
                    <tr><td class="border border-teal-300 p-2">Titratable Acidity</td><td class="border border-teal-300 p-2">Total acid amount — free + buffered (bound) acids — "quantity" of acidity</td><td class="border border-teal-300 p-2">Early spoilage detection — buffer salts mein change bhi reflect hota hai</td></tr>
                    <tr><td class="border border-teal-300 p-2 font-semibold">Dono saath</td><td class="border border-teal-300 p-2 font-semibold">Buffer capacity bhi samajh mein aati hai: High TA + normal pH = strong buffer. Low TA + low pH = weak buffer, actual spoilage.</td><td class="border border-teal-300 p-2 font-semibold">Complete acidity profile</td></tr>
                  </tbody>
                </table>
                <p class="text-sm mt-1"><strong>NDC-specific example:</strong> Fresh NDC pH = 6.8, TA = 0.12% lactic acid. After 3 days at room temp: pH = 6.6 (barely changed — buffer salts protect kar rahe hain!), TA = 0.18% (30% increase — early warning!). pH se detect karna mushkil tha, TA ne pehle bataya.</p>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ 9 gram sample NDC ke liye kyun? 11 gram (milk standard) kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Milk standard 9 gram hai</strong> (IS 1479 mein 9 g doodh + 20 ml water + titration).</li>
                  <li><strong>NDC ke liye bhi 9 g appropriate hai</strong> kyunki titratable acidity range similar hogi (0.10-0.20% lactic acid equivalent).</li>
                  <li><strong>Kyun 9 g:</strong> IS method mein 9 g doodh × 0.1% acidity = 0.009 g lactic acid → 0.1 N NaOH se ~1 ml titration. For 0.12% acidity: 1.2 ml NaOH → readable on burette. Agar sample zyada hota (18 g) to titration volume double hoti — still ok. Agar kam hota (4.5 g) to very small volumes → pipette errors.</li>
                  <li><strong>NDC mein consideration:</strong> NDC mein fat hai — fat ke drops titration mein float karte hain aur endpoint dekha mushkil hota hai. Agar white background par check karein ya more dilute sample (9 g + 20 ml water) use karein.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ 0.1 N NaOH kyun? Concentration aur standardization kyun zaroori hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>0.1 N optimal range:</strong> NDC acidity ~0.10-0.20% lactic acid → 9 g sample mein ~0.009-0.018 g lactic acid → 0.1-0.2 mmol lactic acid → 1-2 ml 0.1N NaOH. Readable, accurate burette reading.</li>
                  <li><strong>1N se problem:</strong> Only 0.1-0.2 ml titration → huge burette error → unreliable result.</li>
                  <li><strong>0.01N se problem:</strong> 10-20 ml titration → possible, but NaOH 0.01N absorbs CO₂ from air quickly → concentration changes → unreliable.</li>
                  <li><strong>Standardization kyun:</strong> NaOH is hygroscopic — absorbs moisture aur CO₂ from air → actual concentration of commercial 0.1N NaOH may be less than stated. Primary standard (oxalic acid ya potassium hydrogen phthalate) se standardize karo → accurate N value → accurate results.</li>
                  <li><strong>CO₂-free NaOH kyun:</strong> NaOH + CO₂ → Na₂CO₃. Na₂CO₃ bhi titratable hai (weaker base) → endpoint shift hoga. Freshly boiled, cooled water se NaOH banao.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ Phenolphthalein indicator — endpoint pH 8.3 kyun? Koi aur indicator kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Phenolphthalein range:</strong> Colorless below pH 8.2, pink at pH 8.2-10.0.</li>
                  <li><strong>pH 8.3 kyun endpoint:</strong> Weak acids (lactic acid, free fatty acids, citric acid) ka pKa range 3-5 hai. Neutralization complete hone par solution pH ~8.3 ho jaata hai (stoichiometric endpoint).</li>
                  <li><strong>Strong acid ka endpoint kab:</strong> Agar strong acid hoti (H₂SO₄, HCl) to pH 7.0 par neutralize hota — phenolphthalein suitable nahi hota. Methyl orange use hota. Lekin NDC mein sirf weak acids hain — phenolphthalein perfect hai.</li>
                  <li><strong>NDC mein color change dekhna mushkil:</strong> NDC cream colored/white hai — agar direct mein test karo to pink colour difficult to detect. Solution: 20 ml distilled water mein mix karo sample — diluted sample mein endpoint visible hota hai.</li>
                  <li><strong>"Faint pink" endpoint kyun, deep pink nahi:</strong> Over-titration se excess NaOH jayega → CO₂ absorb hoga → carbonate hoga → false high result. Faint pink = just at neutralization, not excess.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-teal-700">❓ Lactic acid equivalent mein kyun express karte hain? Actual lactic acid measurement kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Convention:</strong> Dairy industry mein acidity = lactic acid equivalent (even though other acids may be present). Ye comparison standard maintain karta hai across products.</li>
                  <li><strong>Calculation basis:</strong> 1 meq NaOH = 1 meq lactic acid = 0.090 g lactic acid (mol. wt. 90). Ye conversion factor hai.</li>
                  <li><strong>NDC mein actual acids:</strong> Lactic acid (from fermentation), free fatty acids (from lipolysis), citric acid (from buffer). Titratable acidity sab ko total mein count karta hai — "lactic acid equivalent" ek unified unit hai.</li>
                  <li><strong>Agar actual lactic acid chahiye:</strong> HPLC (ion exclusion chromatography) se accurately measure hota hai — separate test hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-teal-700">📊 NDC Titratable Acidity Summary:</h5>
                <table class="table-auto border-collapse border border-teal-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-teal-100"><th class="border border-teal-300 p-2">Parameter</th><th class="border border-teal-300 p-2">Value</th><th class="border border-teal-300 p-2">NDC-Specific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-teal-300 p-2">Sample</td><td class="border border-teal-300 p-2">9 g (melted, mixed)</td><td class="border border-teal-300 p-2">Standard IS method — gives readable titration volumes</td></tr>
                    <tr><td class="border border-teal-300 p-2">Dilution</td><td class="border border-teal-300 p-2">+20 ml distilled water</td><td class="border border-teal-300 p-2">Fat dispersion — endpoint visibility improve karna</td></tr>
                    <tr><td class="border border-teal-300 p-2">Titrant</td><td class="border border-teal-300 p-2">0.1 N NaOH (CO₂-free)</td><td class="border border-teal-300 p-2">Optimal volume range; CO₂-free for accurate titration</td></tr>
                    <tr><td class="border border-teal-300 p-2">Indicator</td><td class="border border-teal-300 p-2">Phenolphthalein (0.5 ml, 1%)</td><td class="border border-teal-300 p-2">Weak acid neutralization endpoint at pH 8.3</td></tr>
                    <tr><td class="border border-teal-300 p-2">Endpoint</td><td class="border border-teal-300 p-2">Faint pink (30 sec persistent)</td><td class="border border-teal-300 p-2">Over-titration avoid karna; accurate neutralization point</td></tr>
                    <tr><td class="border border-teal-300 p-2">Expression</td><td class="border border-teal-300 p-2">% Lactic acid</td><td class="border border-teal-300 p-2">Dairy industry convention — universal comparison</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>NDC sample ko 40°C par melt karein aur mix karein. 9 g accurately weigh karein. <span class="text-xs text-gray-500">(Representative, homogeneous sample zaroori)</span></li>
                <li>20 ml distilled water mein sample disperse karein. <span class="text-xs text-gray-500">(Fat droplets dilute honge — endpoint visibility better hogi)</span></li>
                <li>0.5 ml 1% phenolphthalein indicator daalein.</li>
                <li>0.1 N NaOH se burette se titrate karein. Swirling karte hue add karein — jab tak faint pink colour 30 seconds tak persist na kare. Volume (V ml) note karein. <span class="text-xs text-gray-500">(Swirl karo taaki CO₂ dissolved na rahe jo apparent acidity badhata hai)</span></li>
                <li>Titration duplicate mein karein — difference 0.05 ml se kam hona chahiye. Average volume lein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Titratable Acidity (as lactic acid) = 
    (V × N × 0.090 × 100) / W

Jahaan:
V = NaOH consumed (ml)
N = Normality of NaOH (0.1)
0.090 = Equivalent weight of lactic acid (g/meq) = 90/1000
W = Sample weight (g) = 9 g
100 = Percentage conversion

Simplified: % Acidity = (V × 0.1 × 0.090 × 100) / 9 = V × 0.1 / 1 = V/10
So: % Lactic Acid ≈ V (ml) × 0.01 (for 9 g sample with 0.1N NaOH)</code></pre>

              <div class="bg-gray-50 p-3 rounded mt-2 text-sm">
                <p><strong>Example:</strong></p>
                <p>V = 1.20 ml, N = 0.1000, W = 9.00 g</p>
                <p>% Acidity = (1.20 × 0.1000 × 0.090 × 100) / 9.00 = 1.08 / 9.00 × 100 = <strong>0.120% lactic acid</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Fresh good quality NDC:</strong> 0.10 - 0.14% lactic acid equivalent</li>
                <li><strong>Acceptable (near end of shelf life):</strong> 0.14 - 0.18%</li>
                <li><strong>Spoiled / Reject:</strong> > 0.20% (in absence of intentional acidification)</li>
              </ul>
            `
          },
          {
            title: "Ash Content ka Determination",
            purpose: "NDC mein total mineral content (inorganic residue) measure karna. Ash content NDC mein buffer salts (sodium phosphate, sodium citrate), emulsifier minerals, aur trace minerals ki total matra deta hai. Ye quality, formulation compliance aur adulteration detection mein helpful hai.",
            reference: "IS 1479 (Part II) 1961 / AOAC 945.46",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>NDC sample ko pehle char kiya jaata hai (burning se organic material jal jaata hai) aur phir high temperature (550°C) par muffle furnace mein ash kiya jaata hai. Saari organic material (fat, protein, carbohydrates) CO₂ aur H₂O ke roop mein ud jaati hai. Jo bacha rahta hai wo mineral residue (ash) hai — inorganic salts, oxides.</p>

              <h4 class="font-semibold mt-4 mb-2">NDC mein Ash Sources:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Buffer salts:</strong> Na₂HPO₄, Na₃PO₄, sodium citrate — major ash contributors</li>
                <li><strong>Emulsifier salts:</strong> Sodium stearoyl lactylate (SSL) — partial ash contribution</li>
                <li><strong>Minerals from caseinate:</strong> Ca, P, Na from sodium caseinate</li>
                <li><strong>Processing water minerals:</strong> Ca, Mg trace amounts</li>
              </ul>

              <div class="bg-gray-100 border-l-4 border-gray-500 p-4 my-4 rounded">
                <h4 class="font-bold text-gray-800 mb-3">🔬 NDC Ash Testing ke Har Factor ki Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ 550 ± 25°C kyun? NDC ke liye specifically:</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Organic complete oxidation:</strong> 550°C par saari carbon-based material (fat, protein, carbohydrate, organic emulsifiers) completely oxidize ho jaati hai → CO₂ + H₂O.</li>
                  <li><strong>NDC-specific — Vegetable fat consideration:</strong> Coconut/palm kernel oil high in saturated fatty acids — ye 550°C par completely combust hote hain. Unsaturated fats bhi completely burn hote hain is temperature par.</li>
                  <li><strong>Carrageenan/guar gum:</strong> Organic polymers — 550°C par completely ash hote hain. Only mineral ash bachega.</li>
                  <li><strong>Why NOT lower (400°C):</strong> Incomplete combustion — carbon black (char) residue bachega → ash artificially high lagega (carbon ko minerals samjhenge).</li>
                  <li><strong>Why NOT higher (700°C+):</strong> Sodium phosphate (Na₃PO₄) aur sodium citrate volatilize hone lagte hain ya melt ho kar crucible mein react karte hain → ash kam aayegi → underestimate.</li>
                  <li><strong>Potassium compounds:</strong> K₂O volatile hai at 700°C+ — NDC mein K levels modest hain, 550°C par safe hain.</li>
                  <li><strong>NaCl (agar present):</strong> NaCl 801°C par melt hota hai, 550°C par stable rahta hai — ash mein rahega.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ 3-5 gram sample kyun? NDC ke liye specifically:</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>NDC mein ash content ~0.5-1.5%</strong> → 3-5 g sample mein ~15-75 mg ash → measurable on analytical balance (0.1 mg sensitivity).</li>
                  <li><strong>Zyada sample (10 g):</strong> Charring ke time bahut zyada fat — vigorous burning → spattering → sample loss → low result. Crucible overflow bhi possible.</li>
                  <li><strong>Kam sample (1 g):</strong> Ash ~5-15 mg → weighing error zyada (1 mg error = 5-15% relative error) → unreliable result.</li>
                  <li><strong>NDC fat handling:</strong> NDC mein ~30% fat hai — 5 g mein ~1.5 g fat. Charring ke time ye fat jalta hai — vigorous aur visible. Fume hood zaroori hai, slow initial heating karo (electric heater ya muffle at low temp first).</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ Silica/platinum crucible kyun? Simple ceramic ya glass kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Glass:</strong> 550°C par melts/deforms — absolutely cannot use.</li>
                  <li><strong>Porcelain/ceramic (gooch crucible):</strong> 550°C par survive karta hai, acceptable option hai — practically used in most labs. Mass may absorb moisture — constant weight zaroori.</li>
                  <li><strong>Silica crucible:</strong> 1000°C+ tak stable, chemically inert, light weight → preferred for precision.</li>
                  <li><strong>Platinum crucible:</strong> Gold standard — completely inert, light, excellent for accurate work — expensive. For NDC routine testing, porcelain sufficient hai.</li>
                  <li><strong>Pre-ashing + constant weight crucible:</strong> Crucible ko 550°C par 1 hour pehle se ash karein, desiccator mein cool, weigh → W1. Ye ensure karta hai crucible ka weight stable hai (no moisture, no organic contamination).</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ Charring pehle (hotplate par) phir muffle furnace kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>NDC mein fat hai:</strong> Seedha muffle mein rakhoge to fat rapidly burn karega — vigorous flames — crucible se sample baahar aa sakta hai (spattering) → sample loss → low ash result.</li>
                  <li><strong>Hotplate par pehle charring:</strong> Dhire-dhire fat jalta hai — controlled combustion — no spattering. Carbon residue (char) ban jaata hai.</li>
                  <li><strong>Tab muffle furnace mein:</strong> Carbon char 550°C par easily oxidize ho jaata hai — complete white ash milti hai. Fast aur safe.</li>
                  <li><strong>Alternatively:</strong> NDC sample mein kuch drops of ethanol add karo (fat ko pre-dissolve karta hai) → phir ignite karo → less spattering. Ya 100°C oven mein 1 hour pehle → moisture nikal jaata hai → safer charring.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-gray-700">❓ Desiccator mein 30 min cooling kyun? Seedha weigh kyun nahi karte?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>550°C se seedha weigh karna impossible:</strong> Hot crucible → balance pan ko damage karta hai (thermal expansion → balance drift).</li>
                  <li><strong>Room air mein cool karna wrong:</strong> Ash hygroscopic hai (especially Na₂HPO₄, Na₂CO₃) → moisture absorb karta hai → weight badh jaata hai → false high ash.</li>
                  <li><strong>Desiccator with silica gel:</strong> Dry atmosphere → ash ke liye moisture available nahi → accurate weight milta hai.</li>
                  <li><strong>30 min kyun:</strong> Crucible ko room temperature tak aane mein ~25-35 min lagta hai desiccator mein — stable weight milti hai. Kam time = still warm = balance unstable reading.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-gray-700">📊 NDC Ash Testing Summary:</h5>
                <table class="table-auto border-collapse border border-gray-400 mt-2 text-sm w-full">
                  <thead><tr class="bg-gray-200"><th class="border border-gray-400 p-2">Parameter</th><th class="border border-gray-400 p-2">Value</th><th class="border border-gray-400 p-2">NDC-Specific Reason</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-gray-400 p-2">Sample</td><td class="border border-gray-400 p-2">3-5 g (melted)</td><td class="border border-gray-400 p-2">~0.5-1.5% ash → 15-75 mg ash — weighable. Zyada fat = spattering risk</td></tr>
                    <tr><td class="border border-gray-400 p-2">Pre-charring</td><td class="border border-gray-400 p-2">Hotplate, slow</td><td class="border border-gray-400 p-2">NDC mein high fat — controlled combustion, no spattering</td></tr>
                    <tr><td class="border border-gray-400 p-2">Ashing temp.</td><td class="border border-gray-400 p-2">550 ± 25°C</td><td class="border border-gray-400 p-2">Complete organic combustion; buffer salts stable at this temp</td></tr>
                    <tr><td class="border border-gray-400 p-2">Ashing time</td><td class="border border-gray-400 p-2">Until white ash (typically 3-4 hrs)</td><td class="border border-gray-400 p-2">NDC high fat content needs more time</td></tr>
                    <tr><td class="border border-gray-400 p-2">Cooling</td><td class="border border-gray-400 p-2">Desiccator, 30 min</td><td class="border border-gray-400 p-2">Hygroscopic ash (Na salts) — moisture absorption prevent</td></tr>
                    <tr><td class="border border-gray-400 p-2">Crucible</td><td class="border border-gray-400 p-2">Porcelain/silica, pre-ashed</td><td class="border border-gray-400 p-2">Heat stable, pre-ashed for constant weight accuracy</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>Crucible ko 550°C par 1 hour oven mein rakho, desiccator mein cool karo, weigh karo (W1). <span class="text-xs text-gray-500">(Crucible ka initial stable weight — reference)</span></li>
                <li>NDC sample ko melt aur mix karo. ~3-5 g accurately weigh karo crucible mein (W2).</li>
                <li>Hotplate par dhire-dhire heat karo jab tak black char ban jaye (smoke khatam ho jaye). <span class="text-xs text-gray-500">(Fat control se jalaye — no sudden flames — fume hood mein)</span></li>
                <li>Char wala crucible muffle furnace mein rakho, 550 ± 25°C par set karo.</li>
                <li>4-5 hours (ya jab tak white/grey ash na mile) tak ash karo. <span class="text-xs text-gray-500">(Black spots remaining = incomplete ashing — continue karein ya 1 drop distilled water daal kar dry karein phir continue)</span></li>
                <li>Furnace off karo, crucible ko 200°C tak furnace mein thanda hone do, phir desiccator mein 30 min cool karo.</li>
                <li>Weigh karo (W3). Repeat ashing (30 min) aur weighing jab tak constant weight (≤0.5 mg difference).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Ash = [(W3 - W1) / (W2 - W1)] × 100

Jahaan:
W1 = Empty crucible weight (g)
W2 = Crucible + sample weight before ashing (g)
W3 = Crucible + ash weight after ashing (g)
(W2 - W1) = Sample weight
(W3 - W1) = Ash weight</code></pre>

              <div class="bg-gray-50 p-3 rounded mt-2 text-sm">
                <p><strong>Example:</strong></p>
                <p>W1 = 22.0000 g, W2 = 26.5120 g (sample = 4.512 g), W3 = 22.0542 g</p>
                <p>Ash = 22.0542 - 22.0000 = 0.0542 g</p>
                <p>% Ash = (0.0542 / 4.512) × 100 = <strong>1.20%</strong></p>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Typical NDC:</strong> 0.5 - 1.5% ash</li>
                <li><strong>High buffer salt NDC:</strong> 1.0 - 2.0%</li>
                <li><strong>Low salt NDC (minimal additives):</strong> 0.3 - 0.7%</li>
                <li><strong>High ash (>2%):</strong> Excessive buffer salts / possible adulteration with cheap mineral extenders</li>
              </ul>
            `
          },
          {
            title: "Whipping Overrun (%) & Foam Stability (Syneresis) ka Determination",
            purpose: "NDC / Whipping Cream ka primary consumer functional parameter check karna — overrun (% volume increase), whipping time, whip firmness, aur syneresis (weeping/liquid drainage) measure karna.",
            reference: "ISO 16374 / BS 7142 / Industry Whipped Cream Standard",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Whipping cream ya Non-Dairy Cream (NDC) ka sabse bada functional parameter uska whipping overrun (foam volume expansion) aur foam stability (serum separation / syneresis) hota hai. Chilled cream (4–7°C) ko standardized planetary mixer mein whip kiya jaata hai jab tak stiff peaks na ban jayein. Overrun determine karne ke liye fixed volume cup mein unwhipped liquid cream aur whipped foam ka mass compare kiya jaata hai. Foam stability evaluate karne ke liye whipped cream ko wire mesh funnel par 20°C ya 4°C par 2 se 24 ghante tak rakha jaata hai aur drained liquid serum ka volume measure kiya jaata hai.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Whipping Overrun & Syneresis Testing ke Har Factor ki Scientific Explanation:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Cream ko whip karne se pehle strictly 4–7°C par chill kyu kiya jaata hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Fat Crystal Matrix:</strong> Vegetable fats (coconut/palm kernel) 24–26°C par melt hone lagte hain. 4–7°C temperature par fat globules partially solid crystalline state mein hote hain.</li>
                  <li><strong>Partial Coalescence:</strong> Whipping ke dauran partially crystalline fat globules air bubbles ke surface par collide karke ek interlocking 3D network banate hain jo trapped air aur water ko mechanically hold karta hai.</li>
                  <li><strong>Agar cream warm ho (>10°C):</strong> Saara fat liquid ho jayega — liquid fat air bubbles ko collapse kar dega, cream whip hi nahi hogi ya runny sauce ban jayegi!</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Overrun formula mein weight ratio kyu use hota hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Formula:</strong> % Overrun = [(W_liquid - W_foam) / W_foam] × 100</li>
                  <li><strong>Equal Volume Concept:</strong> Dono weighings exact same volume (e.g. 100 mL standard cup) mein ki jaati hain. Volume constant hone ke kaaran density change directly percentage air incorporation ko darshata hai.</li>
                </ul>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">📊 Whipping Quality Parameters Summary:</h5>
                <table class="table-auto border-collapse border border-blue-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-blue-100"><th class="border border-blue-300 p-2">Parameter</th><th class="border border-blue-300 p-2">Target Value</th><th class="border border-blue-300 p-2">Scientific Significance</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-blue-300 p-2">Pre-whip Temp</td><td class="border border-blue-300 p-2">4.0°C – 7.0°C</td><td class="border border-blue-300 p-2">Optimum solid-to-liquid fat ratio for bubble stabilization</td></tr>
                    <tr><td class="border border-blue-300 p-2">Optimum Overrun</td><td class="border border-blue-300 p-2">250% – 350%</td><td class="border border-blue-300 p-2">High yield and airy fluffy cake frosting texture</td></tr>
                    <tr><td class="border border-blue-300 p-2">Whip Time</td><td class="border border-blue-300 p-2">3.5 – 6.0 minutes</td><td class="border border-blue-300 p-2">Prevents over-whipping and graininess</td></tr>
                    <tr><td class="border border-blue-300 p-2">Syneresis (24h)</td><td class="border border-blue-300 p-2">0.0 mL / Zero drainage</td><td class="border border-blue-300 p-2">Guarantees cake icing will not weep or soften cake sponge</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-2">
                <li>NDC liquid sample ko 4°C refrigerator mein 12 hours store karein taaki fat crystals completely form ho jayein. <span class="text-xs text-gray-500">(Essential for foam structure formation)</span></li>
                <li>Standard 100mL metal cup mein unwhipped liquid cream ko level tak fill karein aur accurate weight note karein (W_liquid).</li>
                <li>500g chilled NDC ko planetary mixer bowl mein dalein aur wire whisk se medium-high speed par whip karein jab tak stiff peaks form na ho jayein. Time (minutes) record karein. <span class="text-xs text-gray-500">(Over-whipping se avoid karein jisse curdling/graininess na ho)</span></li>
                <li>Whipped cream se 100mL cup ko bina air pocket ke bharo, spatula se surface level karo, aur weigh karo (W_foam).</li>
                <li>Overrun calculate karein: % Overrun = [(W_liquid - W_foam) / W_foam] × 100.</li>
                <li>Foam stability: 100g whipped cream ko mesh funnel (wire sieve) par rakho 20°C par 2 ghante aur 24 ghante ke liye; measuring cylinder mein collect hue drained liquid (syneresis mL) ko measure karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation & Example:</h4>
              <pre><code>W_liquid (100 mL liquid NDC) = 104.0 g
W_foam (100 mL whipped foam) = 26.0 g

% Overrun = [(104.0 - 26.0) / 26.0] × 100 = (78.0 / 26.0) × 100 = 300%

Syneresis at 4 hours (20°C) = 0.0 mL (Excellent foam stability)</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Values for NDC:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Whipping Overrun:</strong> 250% - 350% (NDC typically gives higher overrun than dairy cream ~100-120%)</li>
                <li><strong>Whipping Time:</strong> 3.5 - 6 minutes at 4-7°C</li>
                <li><strong>Foam Stability (Syneresis):</strong> Max 1.0 mL drip after 4 hours at 20°C; Zero drip at 4°C</li>
              </ul>
            `
          }
        ]
      };

export const nonDairyCreamEn = {
        title: "Non-Dairy Cream (NDC) / Whipping Cream",
        tests: [
          {
            title: "Determination of Total Fat (Mojonnier / Rose-Gottlieb Method)",
            purpose: "To accurately determine total vegetable fat content in Non-Dairy Cream (NDC) or whipping cream. Fat content governs whipping performance, overrun, emulsion stability, and mouthfeel.",
            reference: "IS 1224 (Part II) 1977 / AOAC 905.02",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Non-Dairy Cream (NDC) is an oil-in-water emulsion containing 25–35% vegetable fat (hydrogenated palm kernel oil, coconut oil), water (55–65%), emulsifiers (polysorbate 60, sorbitan monostearate), stabilizers (carrageenan, guar gum), protein emulsifiers (sodium caseinate or soy protein), and sugars. To extract fat from this complex protective matrix, concentrated ammonia (25%) digests protein films and destabilizes emulsifier membranes. Ethanol (95%) precipitates proteins and prevents sugar dissolution in organic solvents. Diethyl ether extracts polar and neutral lipids, while petroleum ether extracts triglycerides. Solvents are evaporated, and residual fat is dried to constant mass at 102°C and measured gravimetrically.</p>

              <h4 class="font-semibold mt-4 mb-2">Typical NDC Composition:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Vegetable Fat:</strong> 25-35% (fractionated palm kernel / coconut oil)</li>
                <li><strong>Moisture / Water:</strong> 55-65% (continuous phase)</li>
                <li><strong>Protein (Sodium Caseinate / Soy):</strong> 1-3% (surface-active film)</li>
                <li><strong>Sugars (Glucose Syrup / Sucrose):</strong> 3-10% (sweetness, body, freezing depression)</li>
                <li><strong>Emulsifiers (Polysorbate 60, SMS):</strong> 0.2-1.0% (interface stabilization)</li>
                <li><strong>Hydrocolloids (Carrageenan, Guar):</strong> 0.1-0.5% (viscosity control)</li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Deep-Dive into Every Parameter & Factor:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why is Fat Determination Vital for NDC?</h5>
                <p class="text-sm">Whipping performance, air cell stabilization, and stiff peak formation depend directly on partial coalescence of fat globules. Minimum 25% fat is required for adequate overrun (>250%) and stand-up stability. Lower fat yields loose, weeping foam; higher fat causes greasy mouthfeel or churning during processing.</p>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why Pre-melt at 40–45°C?</h5>
                <p class="text-sm">Vegetable fats in NDC crystallize at low storage temperatures (4–10°C), producing solid fat fractions and phase separation. Warming to 40–45°C fully liquefies high-melting triglycerides and ensures complete homogenization before drawing analytical aliquots.</p>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why Combined Diethyl Ether and Petroleum Ether (25+25 mL)?</h5>
                <p class="text-sm">Diethyl ether (dielectric constant ~4.3) dissolves polar lipids, partial glycerides, and free fatty acids. Petroleum ether (dielectric constant ~1.9) reduces solubility of water, sugars, and urea, selectively co-extracting non-polar triglycerides without extracting hydrophilic solids.</p>

                <h5 class="font-semibold mt-4 mb-1 text-blue-700">📊 Testing Summary Table:</h5>
                <table class="table-auto border-collapse border border-blue-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-blue-100"><th class="border border-blue-300 p-2">Parameter</th><th class="border border-blue-300 p-2">Value</th><th class="border border-blue-300 p-2">Scientific Rationale</th></tr></thead>
                  <tbody>
                    <tr><td class="border border-blue-300 p-2">Sample Weight</td><td class="border border-blue-300 p-2">10.0 g</td><td class="border border-blue-300 p-2">Yields 2.5–3.5 g fat, optimal for 0.1 mg analytical balance precision</td></tr>
                    <tr><td class="border border-blue-300 p-2">Ammonia 25%</td><td class="border border-blue-300 p-2">1.5 mL</td><td class="border border-blue-300 p-2">Dissolves caseinate/soy proteins and loosens polysorbate 60 micellar bonds</td></tr>
                    <tr><td class="border border-blue-300 p-2">Ethanol 95%</td><td class="border border-blue-300 p-2">10 mL</td><td class="border border-blue-300 p-2">Precipitates proteins and retains sugars in aqueous phase</td></tr>
                    <tr><td class="border border-blue-300 p-2">Solvent System</td><td class="border border-blue-300 p-2">25 mL Ether + 25 mL Pet Ether</td><td class="border border-blue-300 p-2">Complete extraction of polar lipids and neutral triglycerides</td></tr>
                    <tr><td class="border border-blue-300 p-2">Drying Temp</td><td class="border border-blue-300 p-2">102 ± 2°C</td><td class="border border-blue-300 p-2">Evaporates trace solvents and water without thermal lipid oxidation</td></tr>
                  </tbody>
                </table>
              </div>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Fat = [(W3 - W1) / W2] × 100

Where:
W1 = Mass of empty extraction flask (g)
W2 = Mass of NDC test sample (g)
W3 = Mass of flask plus extracted dry fat (g)</code></pre>
            `
          },
          {
            title: "Determination of Moisture & Total Solids",
            purpose: "To measure free and bound water and total dry matter in Non-Dairy Cream. Governs shelf-life, microbial water activity (aw), emulsion viscosity, and solids balance.",
            reference: "IS 1479 (Part II) 1961 / AOAC 926.08",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sample is pre-evaporated gently on a boiling water bath to avoid surface crust formation caused by hydrocolloid stabilizers (guar gum, carrageenan). It is then oven-dried at 102 ± 2°C to constant mass. Loss in mass represents total moisture; residual mass constitutes total solids.</p>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100
% Total Solids = 100 - % Moisture</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Moisture: 55.0% - 65.0%</li>
                <li>Total Solids: 35.0% - 45.0%</li>
              </ul>
            `
          },
          {
            title: "Determination of Crude Protein (Kjeldahl Method)",
            purpose: "To measure total organic nitrogen and calculate crude protein derived from sodium caseinate or soy protein isolate, responsible for interfacial foam stabilization.",
            reference: "IS 1479 (Part II) 1961 / AOAC 991.20",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Organic nitrogen is digested with concentrated sulfuric acid in the presence of CuSO₄:K₂SO₄ catalyst (1:10) to form ammonium sulfate. The digest is neutralized with 40% NaOH and steam-distilled into 4% boric acid. The borate complex is titrated against standard 0.1 N HCl using mixed methyl red-bromocresol green indicator.</p>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Nitrogen = [(V_sample - V_blank) × N_HCl × 0.014 × 100] / Sample Mass (g)
% Crude Protein = % Nitrogen × 6.25 (or 6.38 for sodium caseinate)</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Protein: 1.5% - 3.5% (typically ~2.0% in commercial whipping toppings)</li>
              </ul>
            `
          },
          {
            title: "Determination of Total Sugars & Carbohydrates (Lane-Eynon Method)",
            purpose: "To quantify reducing and non-reducing sugars (corn syrup, sucrose, dextrose) determining sweetness, overrun stability, and freezing point depression in dessert applications.",
            reference: "IS 1163 : 1968 / AOAC 906.03",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Carrez clarification (zinc acetate and potassium ferrocyanide) precipitates proteins and fat. Clarified sugars are hot-titrated against standardized Fehling solution (A+B) in boiling conditions using methylene blue redox indicator. Sucrose is determined following controlled acid inversion at 68–70°C.</p>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Total Sugar = [Factor W (mg from table) × Dilution Factor] / [Sample Mass (g) × 1000] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Total Sugars: 5.0% - 15.0% (sweetened whipping toppings typically 8–12%)</li>
              </ul>
            `
          },
          {
            title: "Determination of pH (Electrometric Method)",
            purpose: "To evaluate hydrogen ion activity, validating emulsion charge stability, buffering capacity, and absence of microbial acid fermentation.",
            reference: "IS 1479 (Part I) 1961 / AOAC 981.12",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The potential developed across a hydrated lithium-silicate glass membrane is measured relative to an Ag/AgCl reference junction at 25°C with automatic temperature compensation (ATC). Calibrated against fresh pH 4.0 and 7.0 buffer solutions.</p>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Standard Fresh NDC: pH 6.50 - 7.00</li>
                <li>Acidified / Spoiled: pH < 6.00</li>
              </ul>
            `
          },
          {
            title: "Determination of Titratable Acidity",
            purpose: "To quantify total free and buffered organic acids, serving as an early indicator of lipolysis or microbial spoilage.",
            reference: "IS 1479 (Part I) 1961",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Diluted sample is titrated against standard 0.1 N CO₂-free NaOH using phenolphthalein indicator until a faint pink coloration persists for 30 seconds (pH 8.3 stoichiometric endpoint).</p>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Titratable Acidity (as Lactic Acid) = (V × N × 0.090 × 100) / Sample Mass (g)</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Fresh Commercial NDC: 0.10% - 0.14% lactic acid equivalent</li>
                <li>Spoiled: > 0.20% lactic acid equivalent</li>
              </ul>
            `
          },
          {
            title: "Determination of Ash Content",
            purpose: "To measure total inorganic mineral residue from buffer phosphate/citrate salts, emulsifier counter-ions, and assess formulation compliance.",
            reference: "IS 1479 (Part II) 1961 / AOAC 945.46",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Test portion is charred gently on an electric hotplate to combust organic fats and sugars without spattering, then incinerated in a muffle furnace at 550 ± 25°C to constant mass.</p>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Ash = [(W3 - W1) / (W2 - W1)] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Ash: 0.5% - 1.5%</li>
              </ul>
            `
          },
          {
            title: "Whipping Overrun (%) & Foam Stability (Syneresis) Determination",
            purpose: "To evaluate the key industrial performance traits: volumetric air incorporation (overrun %), whipping time, foam stiffness, and resistance to serum leakage (syneresis).",
            reference: "ISO 16374 / BS 7142 / Whipped Cream Industrial Standards",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Chilled liquid NDC (4–7°C) is whipped in a planetary mixer with wire whisk until peak firmness is achieved. Overrun is calculated by comparing mass of equal volumes of unwhipped liquid cream and whipped foam. Syneresis is evaluated by placing whipped foam on a wire mesh funnel at 20°C and 4°C and measuring drained serum over 2–24 hours.</p>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <pre><code>% Overrun = [(W_liquid - W_foam) / W_foam] × 100</code></pre>

              <h4 class="font-semibold mt-4 mb-2">Expected Limits:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Whipping Overrun: 250% - 350%</li>
                <li>Whipping Time: 3.5 - 6.0 minutes at 4-7°C</li>
                <li>Syneresis at 4 hr (20°C): Max 1.0 mL</li>
              </ul>
            `
          }
        ]
      };
