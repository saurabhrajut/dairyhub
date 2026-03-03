

export const compositionalAnalysisContent = {
    hi: {
      main_title: "Dairy Products ka Compositional Analysis",
      main_description: "Chemical quality assurance ke liye ek detailed guide — Scientific aur Practical Testing Methods ke saath.",
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
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Butyrometer tube mein 10 ml sulphuric acid daalein bina neck ko geela kiye.</li>
                  <li>Deewar ke kinaare 10.75 ml achchi tarah se milaya hua doodh butyrometer mein pipette karein.</li>
                  <li>1 ml amyl alcohol daalein.</li>
                  <li>Ek lock stopper se band karein, homogeneous hone tak hilayein, aur poora mixture ke liye ulta karein.</li>
                  <li>Yeh ensure karne ke liye ki saare casein particles ghul gaye hain, 5 minute ke liye 65±2°C par water bath mein rakhein.</li>
                  <li>4-5 minute ke liye 1100-1200 rpm par centrifuge karein.</li>
                  <li>5 minute ke liye water bath mein wapas rakhein.</li>
                  <li>Stopper ko adjust karke calibrated stem se fat ka percentage padhein. Reading fat column meniscus ke neeche se li jaati hai.</li>
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
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek Mojonnier extraction flask mein lagbhag 10 gram doodh ka sample accurately weigh karein.</li>
                  <li>1.5 ml ammonia solution daalein aur achchi tarah mix karein.</li>
                  <li>10 ml 95% ethanol daalein aur 1 minute ke liye hilayein.</li>
                  <li>25 ml diethyl ether daalein, 1 minute ke liye zor se hilayein.</li>
                  <li>25 ml petroleum ether daalein aur 1 minute ke liye phir se hilayein.</li>
                  <li>Mixture ko tab tak khada rehne dein jab tak upper ether layer clear na ho jaye, ya layers ko separate karne ke liye centrifuge karein.</li>
                  <li>Ether layer ko ek pehle se weigh kiye hue flask mein carefully decant karein.</li>
                  <li>Aqueous layer ke saath do baar aur extraction repeat karein, har baar 15 ml har ek ether ka use karein.</li>
                  <li>Ek hot plate ya water bath par solvents ko evaporate karein.</li>
                  <li>Extracted fat wale flask ko 102°C par ek oven mein constant weight par dry karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Fat = (Extracted fat ka weight / Sample ka weight) × 100</code></pre>
              `
            },
            {
              title: "Fat ka Determination (Werner-Schmidt Method)",
              purpose: "Sour ya preserved doodh ke liye suitable, jahaan casein ko dissolve karne ke liye acid ki zaroorat hoti hai.",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
                <p>Doodh ko concentrated hydrochloric acid ke saath boil kiya jaata hai, jo protein ko digest karta hai aur fat ko free karta hai. Fat ko phir ether ke saath extract kiya jaata hai aur weigh kiya jaata hai. Ye method tab use hota hai jab Rose-Gottlieb method mein ammonia casein ko dissolve nahi kar pata — jaise sour, fermented, ya preserved samples mein.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek suitable extraction tube mein lagbhag 10 gram doodh ka sample accurately weigh karein.</li>
                  <li>10 ml concentrated HCl daalein aur tab tak heat karein jab tak solution dark brown na ho jaye (sab protein digest ho jaye).</li>
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
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek khaali, saaf, dry flat-bottom dish ko uske dhakkan (W1) ke saath weigh karein.</li>
                  <li>Dish mein lagbhag 5 gram prepared doodh ka sample daalein aur phir se weigh karein (W2).</li>
                  <li>30 minute ke liye boiling water bath par dhakkan ke bina dish ko heat karein.</li>
                  <li>Dish ko 102 ± 2°C par 2 ghante ke liye hot air oven mein transfer karein.</li>
                  <li>Dish ko dhakkan se dhak dein, ek desiccator mein cool karein, aur weigh karein (W3).</li>
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
                <p>Jab laboratory equipment available na ho, tab lactometer reading aur fat content se SNF calculate kiya ja sakta hai:</p>
                <pre><code>% SNF = (CLR / 4) + (0.21 × F) + 0.36</code></pre>
                <p class="text-xs">Jahaan CLR = Corrected Lactometer Reading at 27°C, F = Fat %</p>
  
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
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Doodh ko achchi tarah mix karein bina foam banaye.</li>
                  <li>Doodh ko measuring cylinder mein daalein (lagbhag 500 ml).</li>
                  <li>Lactometer ko gently doodh mein lower karein aur chhod dein taaki ye freely float kare.</li>
                  <li>Jab lactometer stable ho jaye, reading lo — meniscus ke upper surface se padhein.</li>
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
  
                <h4 class="font-semibold mt-4 mb-2">3 Steps of Kjeldahl Method:</h4>
  
                <h4 class="font-semibold mt-2 mb-1">Step 1 — Digestion:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                  <li>Kjeldahl flask mein ~5 gram doodh weigh karein.</li>
                  <li>25 ml concentrated sulphuric acid aur ek catalyst mixture (copper sulphate + potassium sulphate — ratio 1:8) daalein.</li>
                  <li>Fume hood mein heat karein jab tak solution clear blue-green na ho jaye (2-3 hours lag sakte hain).</li>
                  <li>Ye step saara organic nitrogen ko (NH₄)₂SO₄ mein convert kar deta hai.</li>
                </ol>
  
                <h4 class="font-semibold mt-2 mb-1">Step 2 — Distillation:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                  <li>Digestate ko cool karein, paani se dilute karein.</li>
                  <li>Excess NaOH (40%) daalein — ye ammonium sulphate ko ammonia gas mein convert karta hai.</li>
                  <li>Released ammonia ko steam-distill karein ek known amount standard acid mein (4% boric acid with mixed indicator — methyl red + bromocresol green).</li>
                </ol>
  
                <h4 class="font-semibold mt-2 mb-1">Step 3 — Titration:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                  <li>Trapped ammonia ko 0.1 N HCl se titrate karein jab tak indicator colour change na ho jaye (green se pink).</li>
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
                <p>Cow milk casein: ~2.5%, Buffalo milk casein: ~3.0-3.5%</p>
              `
            },
            {
              title: "Lactose ka Determination (Lane-Eynon Method)",
              purpose: "Doodh mein lactose (doodh ki shakkar) ki quantity measure karna. Lactose ek reducing sugar hai.",
              reference: "IS 1479 (Part II) 1961; A.O.A.C Official Method 930.28",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
                <p>Lactose ek reducing sugar hai jo Fehling's solution (copper sulphate + alkaline tartrate) ko reduce kar sakta hai. Fehling's solution ka known volume liya jaata hai aur doodh ke clarified solution se titrate kiya jaata hai jab tak saara copper reduce na ho jaye. Methylene blue indicator ka use endpoint detect karne ke liye hota hai — colour blue se colourless ho jaata hai.</p>
  
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
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>Lactose (mg) = Factor from Lane-Eynon table corresponding to titre value</code></pre>
                <pre><code>% Lactose = (Factor × Dilution) / (Titre × Sample weight) × 100</code></pre>
  
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
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ek porcelain dish ya conical flask mein 10 ml doodh ka sample lein (ya 10 gram weigh karein).</li>
                  <li>1% phenolphthalein solution ki kuch boondein daalein (3-4 drops).</li>
                  <li>0.1 N NaOH solution se burette se titrate karein.</li>
                  <li>Jab ek halka pink colour dikhaye (endpoint) — jo 15 seconds tak rehna chahiye — tab titration band kar dein.</li>
                  <li>Use kiye gaye alkali ki volume note karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% Acidity (as lactic acid) = (9 × V × N) / W</code></pre>
                <p class="text-xs">Jahaan V = NaOH ki volume (ml), N = NaOH ki normality, W = doodh ke sample ka weight (gram). Factor 9 isliye kyunki lactic acid ka equivalent weight 90 hai aur % ke liye 100 se multiply karna hai — 90/1000 × 100 = 9.</p>
  
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
                <p>Jab light ek medium se doosre mein jaata hai, to ye bend hota hai (refraction). Har fat ki ek characteristic refractive index hoti hai. Ghee ki BR reading 40-44 hoti hai at 40°C. Foreign oils milane se ye reading change hoti hai — vegetable oils ki RI zyada hoti hai.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Ghee ko 40°C se thoda upar melt karein. Clear fat decant karein (bina moisture/curd ke).</li>
                  <li>Butyro-refractometer ko circulating water bath se 40°C par maintain karein.</li>
                  <li>1-2 drops melted ghee refractometer ke prism par daalein.</li>
                  <li>Eyepiece se dekhein — light aur dark boundary line ko scale par adjust karein.</li>
                  <li>BR reading note karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">BR Reading at 40°C</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-2">Cow ghee</td><td class="border p-2">40.0 - 43.0</td></tr>
                    <tr><td class="border p-2">Buffalo ghee</td><td class="border p-2">40.0 - 43.5</td></tr>
                    <tr><td class="border p-2">Groundnut oil</td><td class="border p-2">58-60</td></tr>
                    <tr><td class="border p-2">Coconut oil</td><td class="border p-2">35-37</td></tr>
                  </tbody>
                </table>
                <p class="mt-2">Agar BR reading 44 se upar hai — vegetable oil milawat ka indication hai.</p>
              `
            },
            {
              title: "Reichert-Meissl (RM) & Polenske Value (PV)",
              purpose: "Ghee ki purity check karne ke liye. RM value doodh ki fat ke characteristic short-chain fatty acids ko measure karta hai. PV value coconut oil ke saath adulteration detect karne mein help karta hai.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
                <p>Ghee ko saponify (soap mein convert) kiya jaata hai, phir acid se acidify karke volatile fatty acids release kiye jaate hain. Ye acids distill kiye jaate hain. RM value water-soluble volatile acids ka measure hai (butyric, caproic acid — ye sirf milk fat mein significant hote hain). Polenske value water-insoluble volatile acids ka measure hai (coconut oil mein zyada hote hain).</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li><strong>Saponification:</strong> 5.00 gram ghee ko 20 gram glycerol aur 2 ml 50% NaOH use karke saponify karein. Liquid clear hone tak heat karein (250 ml round bottom flask mein).</li>
                  <li><strong>Dilution aur Acidification:</strong> 93 ml boiled, cooled water daalein. Phir 50 ml dilute sulphuric acid (25 ml conc. H₂SO₄ in 1 litre) daalein. Pumice stone ke kuch tukde daalein (bumping prevent karne ke liye).</li>
                  <li><strong>Distillation:</strong> Polenske distillation apparatus use karke 19-21 minute mein mixture ka 110 ml distil karein. Distillation rate consistent honi chahiye.</li>
                  <li><strong>RM Value Titration:</strong> Distillate ko filter karein aur filtrate ka 100 ml phenolphthalein indicator ke saath 0.1 N NaOH se titrate karein.</li>
                  <li><strong>Polenske Value Titration:</strong> Condenser aur filter paper ko teen baar 15 ml neutralized ethanol se wash karein. 0.1 N NaOH ke saath combined washings ka titration karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>RM Value = 1.1 × (Titre_sample - Titre_blank)</code></pre>
                <pre><code>Polenske Value = Insoluble acid titre - Blank insoluble titre</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <table class="table-auto border-collapse border border-gray-300 mt-2 text-sm w-full">
                  <thead><tr class="bg-gray-100"><th class="border p-2">Sample</th><th class="border p-2">RM Value</th><th class="border p-2">Polenske Value</th></tr></thead>
                  <tbody>
                    <tr><td class="border p-2">Cow ghee</td><td class="border p-2">24-34</td><td class="border p-2">1.0-2.0</td></tr>
                    <tr><td class="border p-2">Buffalo ghee</td><td class="border p-2">26-32</td><td class="border p-2">1.0-2.0</td></tr>
                    <tr><td class="border p-2">Coconut oil</td><td class="border p-2">6-8</td><td class="border p-2">16-18</td></tr>
                    <tr><td class="border p-2">Groundnut oil</td><td class="border p-2">0.5-1.5</td><td class="border p-2">0.5-1.0</td></tr>
                  </tbody>
                </table>
                <p class="mt-2">FSSAI minimum RM value for ghee: 28</p>
              `
            },
            {
              title: "Iodine Value (Wijs Method)",
              purpose: "Fat mein unsaturation ki degree measure karna — foreign oil milawat detect karne mein useful.",
              reference: "IS 3508 – 1966; A.O.A.C 993.20",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
                <p>Iodine unsaturated fatty acids ke double bonds se react karta hai. Jitne zyada double bonds, utna zyada iodine absorb hoga. Iodine value = grams of iodine absorbed per 100 grams of fat. Milk fat ka IV 26-38 hota hai, jabki vegetable oils ka bahut zyada (80-140).</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>~0.25 gram ghee ko iodine flask mein weigh karein.</li>
                  <li>10 ml chloroform mein dissolve karein.</li>
                  <li>25 ml Wijs solution (iodine monochloride in acetic acid) daalein — excess mein.</li>
                  <li>Andheri jagah mein 30 minute ke liye rakhein (reaction complete hone ke liye).</li>
                  <li>15 ml 10% KI solution daalein — unreacted iodine ko absorb karne ke liye.</li>
                  <li>100 ml distilled water daalein.</li>
                  <li>Starch indicator use karke 0.1 N sodium thiosulphate se titrate karein (blue colour disappear hone tak).</li>
                  <li>Ek blank bhi run karein (bina sample ke).</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>Iodine Value = [12.69 × N × (V_blank - V_sample)] / Weight_sample</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Cow ghee: 26-35, Buffalo ghee: 28-38, FSSAI range: 26-38</p>
              `
            },
            {
              title: "Saponification Value",
              purpose: "Fat ke molecular weight ka indication — short chain fatty acids ki presence indicate karta hai.",
              reference: "IS 3508 – 1966; A.O.A.C 920.160",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
                <p>Saponification value = mg of KOH required to saponify 1 gram of fat. Short chain fatty acids zyada hone par saponification value zyada hota hai. Milk fat (ghee) ka SV zyada hota hai (220-235) compared to vegetable oils (185-195) kyunki milk fat mein short chain fatty acids (butyric, caproic) zyada hote hain.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>~2 gram ghee accurately weigh karein ek 250 ml round bottom flask mein.</li>
                  <li>25 ml 0.5 N alcoholic KOH daalein (excess).</li>
                  <li>Reflux condenser lagayein aur 1 hour boiling water bath par heat karein.</li>
                  <li>Cool karein, phenolphthalein indicator daalein.</li>
                  <li>Excess KOH ko 0.5 N HCl se back-titrate karein (pink colour disappear hone tak).</li>
                  <li>Blank bhi run karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>Saponification Value = [56.1 × N × (V_blank - V_sample)] / Weight_sample</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Ghee: 220-235, Groundnut oil: 188-196, Coconut oil: 250-264</p>
              `
            },
            {
              title: "Unsaponifiable Matter",
              purpose: "Fat mein non-fat components (sterols, hydrocarbons, vitamins) ka measure — mineral oil milawat detect karne mein useful.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>5 gram ghee ko 50 ml alcoholic KOH se saponify karein (1 hour reflux).</li>
                  <li>Saponified mixture ko separating funnel mein transfer karein.</li>
                  <li>50 ml petroleum ether se 3 baar extract karein — unsaponifiable matter ether layer mein jaata hai.</li>
                  <li>Ether extracts combine karein, 0.5N KOH se wash karein (remaining soap remove karne ke liye), phir water se wash karein.</li>
                  <li>Ether evaporate karein, residue ko 80°C par dry karein aur weigh karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Normal ghee: ≤ 1.2% unsaponifiable matter. Mineral oil milane se ye value bahut badh jaati hai (mineral oil completely unsaponifiable hota hai).</p>
              `
            },
            {
              title: "Free Fatty Acids (FFA)",
              purpose: "Fat ke breakdown (hydrolysis) ki extent measure karta hai — freshness indicate karta hai. High FFA rancidity ki taraf le jaata hai.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>~10 gram melted ghee accurately weigh karein.</li>
                  <li>50 ml neutralized warm ethanol mein dissolve karein.</li>
                  <li>Phenolphthalein indicator ki kuch drops daalein.</li>
                  <li>0.1 N NaOH se titrate karein jab tak persistent pink colour aaye.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>% FFA (as oleic acid) = [Titre × N_NaOH × 28.2] / Sample weight</code></pre>
  
                <h4 class="font-semibold mt-4 mb-2">FSSAI Standard:</h4>
                <p>Ghee FFA: Maximum 3.0% (as oleic acid). Fresh ghee: typically < 0.5%</p>
              `
            },
            {
              title: "Moisture / Volatile Matter",
              purpose: "Ghee mein paani aur volatile compounds ki quantity — shelf life aur quality ke liye important.",
              reference: "IS 3508 – 1966",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>Pehle se weigh ki hui dish (W1) mein ~10 gram ghee weigh karein (W2).</li>
                  <li>105°C par oven mein 2 hours heat karein (ya jab tak bubbling band ho jaye).</li>
                  <li>Desiccator mein cool karein, weigh karein (W3).</li>
                  <li>Constant weight tak repeat karein.</li>
                </ol>
                <pre><code>% Moisture = [(W2 - W3) / (W2 - W1)] × 100</code></pre>
                <p>FSSAI standard: Maximum 0.3% moisture in ghee</p>
              `
            },
            {
              title: "Baudouin Test (Vanaspati Detection)",
              purpose: "Ghee mein vanaspati (hydrogenated vegetable oil) ka pata lagata hai.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
                <p>Vanaspati mein 5% sesame (til) oil ka mandatory addition hota hai (FSSAI requirement). Ye test sesame oil mein present sesamol compound detect karta hai. Furfural sesamol ke saath react karke acidic medium mein PINK/RED colour deta hai.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>5 ml melted ghee ek test tube mein lein.</li>
                  <li>5 ml concentrated HCl daalein.</li>
                  <li>0.4 ml 2% furfural solution (freshly prepared in alcohol) daalein.</li>
                  <li>2 minute ke liye vigorously shake karein.</li>
                  <li>Layers separate hone dein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Result:</h4>
                <p><strong>Pink ya Red colour in acid (lower) layer:</strong> Vanaspati PRESENT — adulterated ghee</p>
                <p><strong>No colour ya light yellow:</strong> Vanaspati ABSENT — pure ghee</p>
                <p class="text-xs mt-2">Sensitivity: 5% vanaspati milawat tak detect kar sakta hai.</p>
              `
            },
            {
              title: "Fiehe's Test (for Vegetable Fat)",
              purpose: "Vanaspati ya vegetable fat milawat ka ek aur confirmatory test.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant:</h4>
                <p>Vegetable oils mein phytosterols hote hain jo modified Fiehe's reagent ke saath specific colour reaction dete hain.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>5 ml melted ghee ko 5 ml acetic anhydride ke saath mix karein.</li>
                  <li>1-2 drops conc. H₂SO₄ carefully add karein.</li>
                  <li>Colour observe karein.</li>
                </ol>
                <p><strong>Green/Blue-green colour:</strong> Vegetable fat/oil PRESENT (phytosterol reaction — Liebermann-Burchard test)</p>
                <p><strong>Brown colour:</strong> Pure milk fat</p>
              `
            },
            {
              title: "Mineral Oil ka Detection (Holde's Test)",
              purpose: "Adulteration ke roop mein use kiye jaane wale non-edible mineral oils ka pata lagata hai.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant:</h4>
                <p>Mineral oil saponify (soap mein convert) nahi hota. Jab fat ko alkali se saponify kiya jaata hai aur paani dala jaata hai, to mineral oil insoluble turbidity ke roop mein dikhta hai — jabki saara saponified fat dissolve ho jaata hai.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>1 gram ghee ko 25 ml 4% alcoholic KOH se saponify karein (heat with reflux 30 min).</li>
                  <li>100 ml hot water daalein aur mix karein.</li>
                </ol>
                <p><strong>Turbidity ya oily droplets:</strong> Mineral oil PRESENT — ye saponify nahi hua</p>
                <p><strong>Clear solution:</strong> Mineral oil ABSENT</p>
              `
            },
            {
              title: "Peroxide Value (PV)",
              purpose: "Oxidative rancidity ke early stages measure karta hai.",
              reference: "A.O.A.C 965.33",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant:</h4>
                <p>Oxidation se fat mein peroxides bante hain (primary oxidation products). Ye peroxides potassium iodide (KI) se iodine liberate karte hain, jo Na₂S₂O₃ se titrate kiya jaata hai. Result meq peroxide per kg fat mein express hota hai.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>~5 gram ghee ko 30 ml acetic acid: chloroform (3:2) mixture mein dissolve karein.</li>
                  <li>0.5 ml saturated KI solution daalein.</li>
                  <li>Exactly 1 minute dark mein rakhein, occasionally shake karein.</li>
                  <li>30 ml distilled water daalein.</li>
                  <li>Starch indicator (1%) daalein aur 0.01 N ya 0.1 N Na₂S₂O₃ se titrate karein jab tak blue colour disappear ho jaye.</li>
                  <li>Blank bhi run karein.</li>
                </ol>
  
                <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
                <pre><code>PV (meq/kg) = [(S - B) × N × 1000] / Sample weight</code></pre>
                <p class="text-xs">Jahaan S = sample titre, B = blank titre, N = Na₂S₂O₃ ki normality</p>
  
                <h4 class="font-semibold mt-4 mb-2">FSSAI Standard:</h4>
                <p>Maximum PV for ghee: ≤ 1.0 meq/kg (fresh). Agmark: ≤ 3.0 meq/kg</p>
              `
            },
            {
              title: "Modified Kirschner Value",
              purpose: "Specifically butyric acid ka measure — ghee ki authenticity ka sabse reliable chemical indicator.",
              reference: "IS 3508 – 1966",
              procedure: `
                <h4 class="font-semibold mt-4 mb-2">Siddhant:</h4>
                <p>Kirschner value specifically water-soluble, steam-volatile, silver-salt soluble acids (mainly butyric acid) ko measure karta hai. Butyric acid exclusively milk fat mein hota hai — vegetable oils mein absent. Isliye ye ghee ke adulteration detection ka sabse specific test hai.</p>
  
                <p>Procedure RM value test se milta julta hai, but additional silver salt precipitation step hota hai taaki specifically butyric acid isolate ho.</p>
  
                <h4 class="font-semibold mt-4 mb-2">Expected Values:</h4>
                <p>Pure cow ghee: 19-27, Pure buffalo ghee: 19-25. Adulterated ghee mein ye value proportionally kam hoti jaati hai.</p>
              `
            },
            {
              title: "Kreis Test (Rancidity Detection)",
              purpose: "Ghee mein developed rancidity detect karna — qualitative test.",
              reference: "IS 3508 – 1966",
              procedure: `
                <ol class="list-decimal list-outside pl-5 space-y-2">
                  <li>1 ml melted ghee ek test tube mein lein.</li>
                  <li>1 ml conc. HCl daalein.</li>
                  <li>1 ml 1% phloroglucinol solution (in diethyl ether) daalein.</li>
                  <li>Vigorously shake karein.</li>
                </ol>
                <p><strong>Pink/Red colour:</strong> Rancidity detected — epihydrinal dehyde presence (oxidation product)</p>
                <p><strong>No colour:</strong> Not rancid</p>
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
