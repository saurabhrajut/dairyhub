
export const adulterationContent = {
    hi: {
      main_title: "Kachche Doodh Ki Gunvatta Aur Milavat",
      main_description: "Doodh mein platform parikshan aur milavat ka pata lagane ke liye ek vyapak vaigyanik guide. Is guide mein sabhi standard tests, chemical reactions, health hazards, aur FSSAI/BIS standards ko detail mein cover kiya gaya hai.",
      back_to_categories: "Shreniyon Par Vaapas Jaayein",
      tabs: {
        platform: "Platform Parikshan",
        platform_desc: "Doodh prapti par tvarit gunvatta jaanch — organoleptic, chemical, microbiological aur physical tests shamil hain.",
        preservatives: "Parirakshak (Preservatives)",
        preservatives_desc: "Avaidh parirakshako ka pata lagana — neutralizers, formalin, H₂O₂, antibiotics aur anya.",
        adulterants: "Milavati Padaarth (Adulterants)",
        adulterants_desc: "Aam milavatoon ka pata lagana — cheeni, starch, urea, melamine, synthetic milk aur anya."
      },
      intros: {
        platform: `Platform tests wo tvarit gunvatta moolyankan hain jo doodh prapti dock par kiye jaate hain taaki jaldi se yeh tay kiya ja sake ki doodh ka ek batch svikarya hai ya nahi. Yeh parikshan nimn-gunvatta waale ya milavati doodh ko achchi gunvatta waali aapoorti ke saath milane se rokne ke liye mahatvpoorn hain. Platform testing doodh processing ka pehla aur sabse critical step hai — agar yahan galat doodh accept ho gaya, toh poori batch kharab ho sakti hai.
  
  Vaigyanik Mahatva: Doodh ek perishable commodity hai jisme bacteria tezi se badhte hain. Room temperature (25-30°C) par doodh mein bacteria har 20-30 minute mein double ho sakte hain. Isliye platform par hi doodh ki quality check karna zaroori hai. Platform tests mein physical (temperature, appearance), chemical (acidity, alcohol stability), aur microbiological (resazurin, MBRT) sabhi prakar ke tests shamil hote hain.
  
  FSSAI Standards ke anusaar, kachche doodh mein minimum fat content gaay ke liye 3.2% aur bhains ke liye 5.0% hona chahiye, jabki SNF (Solids-Not-Fat) minimum 8.3% (gaay) aur 9.0% (bhains) hona chahiye.`,
  
        preservatives: `Kanoon ke anusaar (FSSAI Act 2006, Food Safety and Standards Act), doodh mein kisi bhi prakar ke parirakshak ki anumati nahi hai. Parirakshak aam taur par doodh mein tab milaaye jaate hain jab sheetlan (cooling) ya parivahan (transportation) suvidhaayein aparyaapt hoti hain. Aam parirakshako mein neutralizers (NaOH, Na₂CO₃, NaHCO₃), formalin (formaldehyde), hydrogen peroxide (H₂O₂), boric acid, salicylic acid, benzoic acid, hypochlorites, aur antibiotics shamil hain.
  
  Vaigyanik Parishthiti: Parirakshak doodh mein bacteria ki growth ko rokne ya dheema karne ke liye milaaye jaate hain. Lekin yeh swasthya ke liye haanikaarak hain:
  • Formalin (HCHO) — ek known carcinogen hai (IARC Group 1). Yeh proteins ko cross-link karke unhe denature karta hai, jisse body mein digestion problems, kidney damage, aur cancer ka risk badhta hai.
  • Hydrogen Peroxide (H₂O₂) — yeh ek strong oxidizing agent hai jo doodh mein bacteria ko maarta hai lekin saath hi doodh ke vitamins (especially Vitamin C aur B-complex) ko bhi nashta karta hai.
  • Neutralizers — yeh developed acidity ko mask karte hain, jisse kharab doodh bhi fresh lagta hai. NaOH (caustic soda) ka seedha contact mucous membranes ko burn kar sakta hai.
  • Boric Acid — chronic exposure se kidney damage, reproductive toxicity, aur gastrointestinal problems ho sakti hain.
  
  FSSAI ke anusaar, doodh mein kisi bhi parirakshak ki ZERO tolerance hai.`,
  
        adulterants: `Milavati padaarth woh padaarth hain jo doodh mein uski maatra (volume) ya solids-not-fat (SNF) content ko badhaane ke liye milaaye jaate hain taaki gunvatta parikshano ko dhokha diya ja sake. Aam milavato mein cheeni (sucrose), starch, urea, glucose, vegetable oil, vanaspati, pond water, detergent, melamine, synthetic milk, skimmed milk powder (SMP), soy milk, cheese whey, aur gelatine shamil hain.
  
  Vaigyanik Parishthiti: Milavat ka uddeshya adhik profit kamana hota hai. Milavat do prakar ki hoti hai:
  1. Intentional Adulteration — jaanbujhkar profit ke liye (jaise paani milana, urea milana, melamine milana)
  2. Incidental Adulteration — galatfehmi ya carelessness se (jaise pesticide residues, antibiotic residues, aflatoxins)
  
  Swasthya Par Prabhav:
  • Urea — kidney par atyadhik dabaav, kidney failure ka risk
  • Melamine — kidney stones, renal failure (2008 China scandal mein 300,000 se zyada bachche prabhavit hue the)
  • Detergent — gastrointestinal problems, food poisoning
  • Starch — diabetic patients ke liye khatarnaak
  • Vegetable Oil/Vanaspati — heart disease ka risk badhata hai (trans fats)
  • Formalin — carcinogenic (cancer karak)
  
  FSSAI (Food Safety and Standards Authority of India) ke anusaar milavat ek sangeern apraadh hai jiske liye 6 maheene se lekar umraqaid tak ki sazaa ho sakti hai.`
      },
  
      platformTests: [
        {
          title: "Organoleptic Parikshan (Sensory Test / Indriya Parikshan)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> Organoleptic parikshan doodh ki gunvatta ka sabse pehla aur sabse tez moolyankan hai. "Organoleptic" shabd Greek shabdon "organon" (indriya) aur "leptikos" (prapt karna) se aaya hai. Is parikshan mein paanch indriyon — drishti (sight), gandh (smell), svaad (taste), sparsh (touch), aur shravan (hearing) — ka upyog karke doodh ki gunvatta ka anumaan lagaya jaata hai. Yeh parikshan kisi bhi equipment ki zaroorat ke bina kiya ja sakta hai aur trained personnel dwara bahut tezi se kiya ja sakta hai.</p>
  
              <p><strong>Vaigyanik Aadhaar:</strong> Doodh ki gandh (odor) volatile organic compounds (VOCs) ke kaaran hoti hai. Taaza doodh mein halka sa meetha aur pleasant aroma hota hai jo short-chain fatty acids (butanoic acid, hexanoic acid) aur lactones se aata hai. Jab bacteria doodh mein badhte hain, toh woh lactic acid, acetic acid, butyric acid, aur anya volatile compounds produce karte hain jo kharab gandh dete hain. Psychrotrophic bacteria (jo thande temperature par badhte hain) lipase aur protease enzymes produce karte hain jo fats aur proteins ko tod kar rancid aur bitter flavors paida karte hain.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>Gandh ka Moolyankan (Odor Evaluation):</strong> Doodh ke can ko thoda hilaakar shuru karein. Phir dhakkan kholein aur turant gandh ka moolyankan karein. Taaza doodh mein halka meetha aroma hona chahiye. Khattee, rancid, musty, ya chemical gandh doodh ki kharab gunvatta ya milavat ko darshata hai. Feed flavors (jaise silage, garlic, onion) bhi detect kiye ja sakte hain.</li>
                <li><strong>Drishya Jaanch (Visual Examination):</strong> Doodh ka rang dekhein — normal gaay ka doodh halka peela-safed hota hai (beta-carotene ke kaaran), jabki bhains ka doodh safed hota hai (kyunki bhains beta-carotene ko retinol mein convert kar deta hai). Koi bhi asamanya rang — neela (paani milana), peela (colostrum ya mastitis), gulabi (blood contamination), ya bhoora (bacterial contamination) — samsya ka sanket hai. Surface par koi bhi videshi vastu (baaal, dhool, keede) ki jaanch karein. Can ki safaai bhi check karein — gandaa can doodh ke saath kiye gaye kharab vyavhaar ko prakat karta hai.</li>
                <li><strong>Taapman Jaanch (Temperature Check):</strong> Doodh ke can par apna haath dabaakar taapman ki jaanch karein. Ideally, doodh 4-10°C par hona chahiye agar properly chilled hai. Garam doodh (>15°C) yeh darshata hai ki yeh recently milked hai ya adequate cooling nahi hui hai, jisse bacterial growth ka risk badhta hai. Thermometer se precise temperature record karein.</li>
                <li><strong>Sthirata/Consistency Jaanch:</strong> Doodh ko plunger se hilaakar dekhein — normal doodh smoothly behta hai. Agar doodh bahut patla hai (paani milana), bahut gaadhaa hai (starch/gelatin milana), ya usme lumps ya clots hain (acidity development ya mastitis), toh yeh samsya ka sanket hai.</li>
                <li><strong>Svaad Jaanch (Taste Test):</strong> Thoda sa doodh chakhein (sirf tab jab safe ho). Normal doodh halka meetha hota hai (lactose ke kaaran — lagbhag 4.6-4.8%). Khatta svaad developed acidity ko darshata hai, namkeen svaad NaCl milavat ya mastitis ko, aur kadwa svaad protein breakdown ya late lactation milk ko darshata hai.</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Maapdand (Standards):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>Normal Doodh</th><th>Asamanya (Abnormal)</th><th>Sambhavit Kaaran</th></tr></thead>
                  <tbody>
                    <tr><td>Rang (Color)</td><td>Safed se halka peela</td><td>Neela, gulabi, bhoora, gehra peela</td><td>Paani, blood, bacteria, colostrum</td></tr>
                    <tr><td>Gandh (Odor)</td><td>Halka meetha, pleasant</td><td>Khatta, rancid, chemical, musty</td><td>Acidity, lipolysis, preservatives, mold</td></tr>
                    <tr><td>Svaad (Taste)</td><td>Halka meetha</td><td>Khatta, namkeen, kadwa</td><td>Acidity, NaCl, proteolysis</td></tr>
                    <tr><td>Sthirata (Consistency)</td><td>Smooth, homogeneous</td><td>Patla, gaadhaa, lumpy</td><td>Paani, starch/gelatin, curdling</td></tr>
                    <tr><td>Taapman (Temperature)</td><td>4-10°C (chilled)</td><td>>15°C</td><td>Inadequate cooling</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Anumaan (Inference):</h4>
              <p>Jo doodh aavashyak maanako ko poora nahi karta, use turant asvikaar kar diya jaata hai. Organoleptic test ka result subjective hota hai, isliye trained aur experienced personnel ka hona zaroori hai. Yeh test sabhi anya platform tests se pehle kiya jaata hai — agar organoleptic test fail ho jaye, toh aage ke tests ki zaroorat nahi hoti.</p>
  
              <h4 class="font-semibold mt-3">Seemaayein (Limitations):</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Yeh parikshan subjective hai aur vyakti ki training aur anubhav par nirbhar karta hai.</li>
                <li>Kam maatra mein milavat (jaise 5-10% paani) detect nahi ho sakti.</li>
                <li>Chemical milavat (jaise urea, melamine) ka pata nahi lagaaya ja sakta.</li>
                <li>Operator fatigue aur sensory adaptation se accuracy kam ho sakti hai.</li>
              </ul>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960, Reaffirmed 2003; FSSAI Manual of Methods of Analysis of Foods - Milk and Milk Products</p>
            </div>
          `
        },
        {
          title: "Ubalne Par Thakka (COB) Parikshan — Clot on Boiling Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> COB test doodh ki garmi sthirata (heat stability) ke aadhaar par ek saral aur sasta parikshan hai. Yeh test doodh mein developed acidity ya asamanya protein content ka pata lagata hai. Jab doodh ko ubala jaata hai, toh normally yeh stable rehta hai. Lekin agar doodh mein lactic acid ki maatra badh gayi hai (0.22% se zyada, lactic acid ke roop mein), toh casein protein apna isoelectric point (pH 4.6) ke nazdeek pahunch jaata hai aur garmi ke prabhav se coagulate (jamna) ho jaata hai.</p>
  
              <p><strong>Vaigyanik Siddhant (Scientific Principle):</strong> Doodh mein casein micelles calcium phosphate bridges dwara stabilize hoti hain. Normal doodh ka pH lagbhag 6.6-6.8 hota hai. Jab bacteria lactose ko ferment karke lactic acid banate hain, toh pH ghatata hai. Garmi ke saath yeh destabilization aur tez ho jaata hai, jisse casein micelles aggregate hokar visible clots banate hain. Colostrum doodh mein bhi is test ka result positive aata hai kyunki usme immunoglobulins aur anya heat-sensitive proteins ki maatra bahut zyada hoti hai (total protein ~14% vs normal ~3.2%).</p>
  
              <p><strong>Rasaynik Pratikriya (Chemical Reaction):</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Lactose + Bacteria → Lactic Acid (CH₃CHOHCOOH)
  pH decrease → Casein destabilization
  Heat application → Protein coagulation (visible clots)
              </pre>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Ek saaf test tube mein 5 ml doodh lein.</li>
                <li>Ise ubalne waale paani ke snan (boiling water bath — 100°C) mein rakhein. Dhyan rakhein ki test tube paani mein doob jaaye.</li>
                <li>Exactly 5 minute tak rakhein (consistent results ke liye).</li>
                <li>Ise bina hilaaye snan se nikalein.</li>
                <li>Dhyan se dekhein — koi bhi amleey gandh (sour smell), avakshepeet kanom (precipitated particles/flakes/clots) ya thakke ka nirman.</li>
                <li>Test tube ko halka sa tilt karke dekhein ki doodh ki deewar par koi coating ya particles chipke hain ya nahi.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Anumaan aur Vyakhya (Inference & Interpretation):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parinam (Result)</th><th>Matlab (Meaning)</th><th>Acidity Range</th><th>Karyavaahi (Action)</th></tr></thead>
                  <tbody>
                    <tr><td>Koi thakka nahi (Negative)</td><td>Doodh heat-stable hai</td><td>< 0.20% LA</td><td>Doodh sveekaar karein</td></tr>
                    <tr><td>Halke flakes (Weakly Positive)</td><td>Thodi acidity developed hai</td><td>0.20-0.22% LA</td><td>Turnt testing karein</td></tr>
                    <tr><td>Bade thakke (Strongly Positive)</td><td>Zyada acidity ya abnormal milk</td><td>> 0.22% LA</td><td>Doodh asvikaar karein</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Kis Prakar Ka Doodh Positive Result Deta Hai:</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>High acidity milk:</strong> Bacteria ne lactose ko lactic acid mein badal diya hai (> 0.22% LA)</li>
                <li><strong>Colostrum milk:</strong> Asaamaanya roop se uchch protein content (14-16% vs normal 3.2%)</li>
                <li><strong>Mastitis milk:</strong> Altered salt balance aur uchch somatic cell count</li>
                <li><strong>Late lactation milk:</strong> Badla hua mineral aur protein composition</li>
                <li><strong>Neutralizer-added milk:</strong> Kabhi kabhi false negative de sakta hai kyunki acidity mask ho jaati hai</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Mahatva (Significance):</h4>
              <p>COB positive doodh processing ke dauraan garmi upchaar (pasteurization 72°C/15 sec ya UHT 135°C/2-4 sec) ka saamna nahi kar sakta. Yeh doodh taral doodh ke roop mein vitaran ke liye ya kisi bhi dairy product (butter, cheese, paneer, yogurt, milk powder) ki manufacturing ke liye anupooyukt hai kyunki yeh processing equipment mein fouling (jama hona) ka kaaran banta hai.</p>
  
              <h4 class="font-semibold mt-3">Seemaayein (Limitations):</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Kam acidity (0.18-0.20% LA) detect nahi hoti — alcohol test zyada sensitive hai.</li>
                <li>Neutralizer mila doodh false negative de sakta hai.</li>
                <li>High mineral content wala doodh false positive de sakta hai.</li>
                <li>Result interpretation mein subjectivity hai.</li>
              </ul>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; De, S. (2004) "Outlines of Dairy Technology"; Walstra, P. et al. (2006) "Dairy Science and Technology"</p>
            </div>
          `
        },
        {
          title: "Alcohol Parikshan (Alcohol Test)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> Alcohol coagulation test ek saral aur tvarit parikshan hai jo doodh ki protein stability ka moolyankan karta hai. Yeh test is tathy par aadhaarit hai ki doodh protein (mukhya roop se casein micelles) mein alcohol ke sampark mein aane par kam sthirata (stability) hoti hai. Alcohol ek dehydrating agent ke roop mein kaam karta hai — yeh casein micelles ke aaspas ka hydration shell (paani ki parat) ko hata deta hai, jisse micelles ek doosre se chipak jaate hain (aggregate) aur visible coagulation hota hai.</p>
  
              <p><strong>Vaigyanik Siddhant (Scientific Principle):</strong></p>
              <p>Casein micelles doodh mein colloidal suspension mein rehte hain, jo stabilize hote hain:</p>
              <ul class="list-disc list-inside">
                <li><strong>Steric stabilization:</strong> κ-casein (kappa-casein) ka hairy layer jo micelle surface par hota hai</li>
                <li><strong>Electrostatic repulsion:</strong> Negative charge jo micelles ko ek doosre se door rakhta hai</li>
                <li><strong>Hydration:</strong> Paani ki molecules jo micelles ke aaspas bound hoti hain</li>
              </ul>
              <p>Ethanol (68-75%) in stabilizing factors ko disturb karta hai:</p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Ethanol → Dehydration of casein micelles
         → Reduction of dielectric constant of medium
         → Decrease in electrostatic repulsion
         → Calcium bridge formation between micelles
         → Aggregation → Visible coagulation (flakes/clots)
              </pre>
              <p>Yeh destabilization tab aur tez hoti hai jab doodh mein:</p>
              <ul class="list-disc list-inside">
                <li>Developed acidity ho (lactic acid ≥ 0.21% LA) — pH ghatne se charge kam hota hai</li>
                <li>Ionic calcium (Ca²⁺) ki maatra badhi ho — mastitis, late lactation mein</li>
                <li>Rennet ki upasthiti ho — κ-casein cleave ho jaata hai</li>
                <li>Protein content abnormally high ho — colostrum mein</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Ek saaf, dry test tube mein 5 ml doodh lein.</li>
                <li>Samaan maatra mein 68% ethyl alcohol (v/v) dalein. Note: 68% concentration internationally standardized hai (ISO 8197:2004). Kuch countries 72% ya 75% bhi use karte hain — zyada concentration ka matlab zyada stringent test.</li>
                <li>Test tube ko turant stopper se band karein.</li>
                <li>Test tube ko 3-4 baar ulta-seedha karke contents ko achchi tarah milaaein. Vigorous shaking se bachein kyunki isse foam banta hai.</li>
                <li>Turant jaanch karein — test tube ke andar ki deewar par ya doodh-alcohol mixture mein fine particles (dahi ke kano) ya clots ki upasthiti dekhein.</li>
                <li>Test tube ko ek kaale background ke saamne rakhkar dekhein — chote flakes zyada clearly dikhte hain.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Vyakhya (Interpretation):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parinam</th><th>Lakshan</th><th>Matlab</th><th>Anumaan</th></tr></thead>
                  <tbody>
                    <tr><td>Negative (Pass)</td><td>Koi flakes ya clots nahi</td><td>Doodh heat-stable hai</td><td>Sveekaar karein ✅</td></tr>
                    <tr><td>Weakly Positive</td><td>Bahut fine, dust-like particles</td><td>Borderline stability</td><td>Aage jaanch karein ⚠️</td></tr>
                    <tr><td>Positive (Fail)</td><td>Spasht flakes ya clots</td><td>Doodh heat-unstable hai</td><td>Asvikaar karein ❌</td></tr>
                    <tr><td>Strongly Positive</td><td>Bade thakke, dahi jaisa</td><td>High acidity ya severely abnormal milk</td><td>Turant asvikaar karein ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">COB Test vs Alcohol Test — Tulna (Comparison):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>COB Test</th><th>Alcohol Test</th></tr></thead>
                  <tbody>
                    <tr><td>Sensitivity</td><td>Kam sensitive (> 0.22% LA)</td><td>Zyada sensitive (> 0.20% LA)</td></tr>
                    <tr><td>Samay (Time)</td><td>5 minute</td><td>< 1 minute</td></tr>
                    <tr><td>Equipment</td><td>Boiling water bath chahiye</td><td>Koi special equipment nahi</td></tr>
                    <tr><td>Application</td><td>General screening</td><td>UHT/sterilization suitability</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Swasthya aur Processing Mahatva:</h4>
              <p>Alcohol test fail karne waala doodh UHT processing (Ultra-High Temperature — 135-150°C, 2-4 seconds) aur sterilization ke liye bilkul unsuitable hai. Aisa doodh process karne par equipment mein fouling (protein deposit) hoti hai, jo:</p>
              <ul class="list-disc list-inside">
                <li>Heat transfer efficiency ko kam karti hai</li>
                <li>Processing cost badhati hai (frequent cleaning required)</li>
                <li>Product quality aur shelf life ko negatively affect karti hai</li>
                <li>Potential food safety issues create karti hai</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Seemaayein (Limitations):</h4>
              <ul class="list-disc list-inside mt-1">
                <li>High mineral content wala doodh (late lactation, breed variation) false positive de sakta hai</li>
                <li>Alcohol concentration accurately prepared honi chahiye — even 1-2% variation results ko affect karti hai</li>
                <li>Doodh ka temperature test accuracy ko affect karta hai — ideally 20-25°C par test karein</li>
                <li>Colostrum milk hamesha positive result deta hai regardless of freshness</li>
              </ul>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; ISO 8197:2004; IDF Standard 48:2020; Horne, D.S. (2016) "Ethanol stability and milk composition"</p>
            </div>
          `
        },
        {
          title: "Alizarin-Alcohol Parikshan (Alizarin-Alcohol Test)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> Yeh test alcohol test ka ek advanced version hai jisme alizarin indicator milaya jaata hai. Alizarin (1,2-dihydroxyanthraquinone, C₁₄H₈O₄) ek pH-sensitive dye hai jo alag-alag pH par alag-alag rang deta hai. Is tarah yeh test na sirf doodh ki heat stability batata hai, balki yeh bhi batata hai ki doodh acidic hai, normal hai, ya alkaline hai.</p>
  
              <p><strong>Alizarin Ka Rasaynik Vyavhaar (Chemical Behavior of Alizarin):</strong></p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>pH Range</th><th>Alizarin Ka Rang</th><th>Doodh Ki Avastha</th></tr></thead>
                  <tbody>
                    <tr><td>< 5.5 (Highly Acidic)</td><td>Peela (Yellow)</td><td>Bahut zyada acidity — doodh bilkul kharab</td></tr>
                    <tr><td>5.5 - 6.0 (Acidic)</td><td>Bhoora-Peela (Brownish-Yellow)</td><td>Significant acidity development</td></tr>
                    <tr><td>6.0 - 6.5 (Slightly Acidic)</td><td>Bhoora (Brownish)</td><td>Thodi acidity developed</td></tr>
                    <tr><td>6.4 - 6.8 (Normal)</td><td>Baigni ya halka laal (Purple/Light Red)</td><td>Normal, fresh doodh</td></tr>
                    <tr><td>> 6.8 (Alkaline)</td><td>Gehra Baigni (Deep Purple)</td><td>Alkaline — mastitis ya neutralizer added</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Reagent Taiyaari (Reagent Preparation):</h4>
              <p>0.2 gm alizarin ko 100 ml 68% ethyl alcohol mein dissolve karein. Yeh solution dark bottle mein store karein aur 1 month ke andar use karein. Solution ka rang dark yellowish-brown hona chahiye.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Ek saaf test tube mein 5 ml doodh lein.</li>
                <li>Samaan maatra (5 ml) alizarin-alcohol solution (0.2% alizarin in 68% ethyl alcohol) dalein.</li>
                <li>Test tube ko turant stopper se band karein aur 4-5 baar ulta-seedha karke achchi tarah milaaein.</li>
                <li>Ab do cheezein observe karein: (a) Guchche ya thakke ki upasthiti (flakes/clots) aur unka size, (b) Mixture ka rang.</li>
                <li>Result ko neeche di gayi table se match karein.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Vyaapak Vyakhya Taalika (Comprehensive Interpretation Table):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Guchche/Thakke</th><th>Rang</th><th>Acidity (% LA)</th><th>Garmi-Sthirata</th><th>Gunvatta</th><th>Sambhavit Kaaran</th></tr></thead>
                  <tbody>
                    <tr><td>Nakaratmak (None)</td><td>Baigni/Halka Laal</td><td>0.14-0.18%</td><td>Achcha</td><td>Santoshjanak ✅</td><td>Normal fresh doodh</td></tr>
                    <tr><td>Sakaratmak (Fine)</td><td>Baigni-Halka Laal</td><td>0.14-0.18%</td><td>Kharab</td><td>Asantoshjanak ❌</td><td>Sweet curdling, abnormal salt</td></tr>
                    <tr><td>Sakaratmak</td><td>Gehra Baigni</td><td>< 0.14%</td><td>Kharab</td><td>Asantoshjanak ❌</td><td>Mastitis, late lactation, neutralizer</td></tr>
                    <tr><td>Sakaratmak</td><td>Bhoora</td><td>0.18-0.22%</td><td>Kharab</td><td>Asantoshjanak ❌</td><td>Developed acidity (mild)</td></tr>
                    <tr><td>Bade Guchche</td><td>Peela</td><td>> 0.22%</td><td>Bahut Kharab</td><td>Bilkul Asantoshjanak ❌</td><td>High developed acidity, sour milk</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Mahatva (Significance):</h4>
              <p>Yeh test alcohol test se behtar hai kyunki:</p>
              <ul class="list-disc list-inside mt-1">
                <li>Yeh acidity level bhi batata hai (rang ke aadhaar par)</li>
                <li>Mastitis doodh ka pata lagata hai (alkaline reaction — gehra baigni rang)</li>
                <li>Late lactation doodh identify karta hai</li>
                <li>Neutralizer milane ka sanket deta hai (alkaline reaction bina bacterial growth ke)</li>
                <li>UHT aur sterilization processing ke liye doodh ki suitability accurately assess karta hai</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; IDF Standard 48:2020; Walstra, P. (2006) "Dairy Science and Technology"</p>
            </div>
          `
        },
        {
          title: "Methylene Blue Reduction Test (MBRT) — Doodh Ka Neela Rang Parikshan",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> MBRT doodh ki jeevanu gunvatta (bacteriological quality) ka moolyankan karne ke liye sabse widely used platform test hai. Is test ko "Dye Reduction Test" bhi kaha jaata hai. Yeh 1912 mein Barthel aur Jensen dwara viksit kiya gaya tha. MBRT ka basic principle yeh hai ki doodh mein maujood bacteria apni metabolic activity ke dauraan enzymes (jaise reductases — NADH dehydrogenase, lactate dehydrogenase) produce karte hain jo methylene blue dye ko reduce (rangheen se rangheen karke) phir colourless (leuco form) mein badal dete hain.</p>
  
              <p><strong>Vaigyanik Siddhant (Scientific Principle):</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Methylene Blue (Neela/Oxidized form) + 2H⁺ + 2e⁻ → Leuco-Methylene Blue (Rangheen/Reduced form)
                      [Blue]                                      [Colorless]
  
  Yeh electrons aur protons bacterial metabolism se aate hain:
  Lactose → Lactic Acid → NADH → electron transfer → dye reduction
  
  Jitne zyada bacteria → utni zyada metabolic activity → utni tez dye reduction → utna kam samay
              </pre>
  
              <p><strong>Dye Reduction Ka Mechanism:</strong></p>
              <ul class="list-disc list-inside">
                <li>Bacteria doodh mein lactose ko metabolize karte hain</li>
                <li>Is process mein NADH (Nicotinamide Adenine Dinucleotide, reduced form) produce hota hai</li>
                <li>NADH apne electrons methylene blue ko transfer karta hai</li>
                <li>Methylene blue reduce hokar leuco-methylene blue (colorless) ban jaata hai</li>
                <li>Zyada bacteria = zyada NADH = tez reduction = kam time mein decolorization</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Reagent Taiyaari:</h4>
              <p>Methylene Blue Solution (Standard): 1 tablet (containing 8.8 mg methylene blue chloride) ko 200 ml sterile distilled water mein dissolve karein. Solution ko dark glass bottle mein store karein aur 1 week ke andar use karein. Fresh solution ka OD (optical density) 600nm par 0.60 ± 0.02 hona chahiye.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Sterile test tube mein 10 ml achchi tarah se mixed doodh sample lein.</li>
                <li>1 ml methylene blue standard solution (prepared from tablet) dalein.</li>
                <li>Test tube ko rubber stopper se band karein aur 2-3 baar ulta-seedha karke milaaein.</li>
                <li>Ek control tube rakhein (10 ml doodh, bina dye ke) — yeh ensure karta hai ki doodh ka natural rang interfere na kare.</li>
                <li>Sabhi tubes ko 37 ± 0.5°C par maintained water bath mein rakhein (incubation temperature critical hai).</li>
                <li>Pehle 30 minute baad dekhein, phir har 30 minute ya 1 ghante par jab tak rang poori tarah khatam na ho jaaye.</li>
                <li>Jab doodh ka neela rang poori tarah chala jaaye (4/5th se zyada decolorized), us samay ko MBRT time ke roop mein record karein.</li>
                <li>Observation ke dauraan tubes ko hilaaein NAHI — oxygen mix hone se dye re-oxidize ho jaayegi.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">MBRT Grading System (BIS Standard):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>MBRT Samay (Reduction Time)</th><th>Doodh Ki Gunvatta</th><th>Anumaaanit Bacterial Count</th><th>Grading</th></tr></thead>
                  <tbody>
                    <tr><td>5 ghante se zyada</td><td>Bahut Achcha (Very Good)</td><td>< 5 lakh/ml</td><td>Grade 1 ✅</td></tr>
                    <tr><td>3 - 5 ghante</td><td>Achcha (Good)</td><td>5 lakh - 20 lakh/ml</td><td>Grade 2 ✅</td></tr>
                    <tr><td>1 - 3 ghante</td><td>Theek (Fair)</td><td>20 lakh - 1 crore/ml</td><td>Grade 3 ⚠️</td></tr>
                    <tr><td>30 min - 1 ghanta</td><td>Kharab (Poor)</td><td>1 crore - 5 crore/ml</td><td>Grade 4 ❌</td></tr>
                    <tr><td>30 minute se kam</td><td>Bahut Kharab (Very Poor)</td><td>> 5 crore/ml</td><td>Asvikaar ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Mahatva (Significance):</h4>
              <ul class="list-disc list-inside mt-1">
                <li>MBRT test doodh processing plant mein sabse zyada use hone wala screening test hai</li>
                <li>Yeh doodh ki keeping quality (kitne samay tak fresh rahega) ka achcha indicator hai</li>
                <li>Doodh ki payment/pricing mein bhi MBRT grading use hoti hai — achchi quality ka doodh zyada price milta hai</li>
                <li>FSSAI ke anusaar, Grade 1 aur Grade 2 ka doodh hi processing ke liye ideal hai</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Seemaayein (Limitations):</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Sabhi bacteria samaan rate par dye reduce nahi karte — kuch species (jaise Streptococcus) tez reduce karte hain jabki kuch (jaise Pseudomonas) dhire</li>
                <li>Somatic cells (leucocytes) bhi dye ko reduce kar sakte hain — mastitis doodh mein false fast reduction ho sakta hai</li>
                <li>Doodh mein natural reducing substances (jaise ascorbic acid — Vitamin C) bhi interference kar sakte hain</li>
                <li>Individual organism ka pata nahi lagta — sirf total activity measure hoti hai</li>
                <li>Antibiotics ya preservatives wale doodh mein bacteria suppress hote hain, toh MBRT falsely achcha result de sakta hai</li>
                <li>Oxygen exposure se dye re-oxidize ho sakti hai — false slow reduction</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; BIS:5764-1970; IDF Standard 100B:1991; APHA Standard Methods for Examination of Dairy Products</p>
            </div>
          `
        },
        {
          title: "10-Minute Resazurin Parikshan (Ten-Minute Resazurin Test)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> Yeh parikshan kharab gunvatta waale doodh ki aapoorti ka tezi se pata lagane ke liye ek tvarit vidhi hai. Resazurin (7-hydroxy-3H-phenoxazin-3-one 10-oxide, C₁₂H₇NO₄) ek oxidation-reduction indicator hai jo oxidized avastha mein NEELA (blue) hota hai. Bacterial activity ya anya kaarano se reduction par, yeh pehle ek GULAABI (pink) yaugik "resorufin" mein APARIVARTNIYE (irreversibly) roop se badal jaata hai aur phir RANGHEEN (colorless) 'dihydroresorufin' mein. Doosra parivartan ek PRATIVARTNIYE (reversible) pratikriya hai.</p>
  
              <p><strong>Rasaynik Pratikriya (Chemical Reactions):</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Step 1 (Irreversible):
  Resazurin (Blue, λmax = 600nm) + 2H → Resorufin (Pink, λmax = 572nm)
                                           ↓ [One oxygen atom lost]
  
  Step 2 (Reversible):
  Resorufin (Pink) + 2H ⇌ Dihydroresorufin (Colorless)
                            ↑ [Re-oxidized by O₂ exposure]
              </pre>
  
              <p>Pehle charan ke dauraan resazurin (neela) se resorufin (gulaabi) mein reduction ke dauraan doodh mein alag-alag madhyavarti rang ke shades develop hote hain jinhe ek tulanitri (comparator) mein maanak rang disc ke saath milaaya ja sakta hai. Resazurin disc numbers 6 (neela, koi reduction nahi) se 0 (safed, poori reduction) tak hote hain.</p>
  
              <h4 class="font-semibold mt-3">Reagent Taiyaari:</h4>
              <p><strong>Bench Solution:</strong> 1 Resazurin tablet (containing 25 mg resazurin sodium salt) ko 50 ml sterile distilled water mein dissolve karein = 0.05% solution. Fresh banaaein aur 8 ghante ke andar use karein. Solution ka rang neela-baigni hona chahiye. Dark bottle mein store karein.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Ek can se doodh ka nmoona lein aur achchi tarah milaaein. Phir 10 ml ko ek nishphal (sterile) test tube mein sthaanantarit karein.</li>
                <li>1 ml bench resazurin solution (0.05%) dalein. Stopper lagaaein aur dhire se ulta karke milaaein (vigorous mixing se bachein).</li>
                <li>37.5 ± 0.5°C par maintained water bath mein rakhein. Sahi temperature bahut important hai — 1°C ka difference bhi results affect karta hai.</li>
                <li>Exactly 10 minute ke baad, tube ko paani ke snan se hataaein.</li>
                <li>Tube ko tulanitri (comparator) ke daahine khand mein rakhein. Prakritik rang ki bharpaai ke liye tulanitri ke baayen khand mein ek niyantran (control) doodh tube rakhein.</li>
                <li>Maanak resazurin disc ko tab tak ghumaayein jab tak namoona mel na kha jaaye aur sambandhi disc reading note karein. Jab rang do disc numberon ke beech aata hai toh ise aadhe maan ke roop mein darj karein (e.g., 4.5, 3.5).</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Resazurin Disc Color Guide:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Disc Number</th><th>Rang (Color)</th><th>Reduction Level</th></tr></thead>
                  <tbody>
                    <tr><td>6</td><td>Neela (Blue)</td><td>Koi reduction nahi — bahut kam bacteria</td></tr>
                    <tr><td>5</td><td>Neela-Baigni (Blue-Purple)</td><td>Bahut halki reduction</td></tr>
                    <tr><td>4</td><td>Baigni (Purple)</td><td>Halki reduction</td></tr>
                    <tr><td>3</td><td>Baigni-Gulaabi (Purple-Pink)</td><td>Moderate reduction</td></tr>
                    <tr><td>2</td><td>Gulaabi (Pink)</td><td>Significant reduction</td></tr>
                    <tr><td>1</td><td>Gulaabi-Safed (Pink-White)</td><td>Bahut zyada reduction</td></tr>
                    <tr><td>0</td><td>Safed (White/Colorless)</td><td>Poori reduction — bahut zyada bacteria</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Parinaam aur Vargikaran (Results & Classification):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Kramank</th><th>Resazurin Disc Reading</th><th>Rakhne Ki Gunvatta</th><th>Tippaniyaan</th></tr></thead>
                  <tbody>
                    <tr><td>1</td><td>6, 5 ya 4</td><td>Santoshjanak (Satisfactory)</td><td>Doodh sveekaar karein ✅</td></tr>
                    <tr><td>2</td><td>3.5 se 1</td><td>Sandighidh (Doubtful)</td><td>Aage ki jaanch zaroori ⚠️</td></tr>
                    <tr><td>3</td><td>0.5 se 0</td><td>Asantoshjanak (Unsatisfactory)</td><td>Doodh asvikaar karein ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">MBRT vs Resazurin Test — Tulna:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>MBRT</th><th>10-Min Resazurin</th></tr></thead>
                  <tbody>
                    <tr><td>Samay</td><td>30 min - 6+ hours</td><td>10 minutes</td></tr>
                    <tr><td>Sensitivity</td><td>Zyada accurate</td><td>Rapid screening</td></tr>
                    <tr><td>Use</td><td>Detailed grading</td><td>Quick reject/accept</td></tr>
                    <tr><td>Color change</td><td>Blue → White</td><td>Blue → Pink → White</td></tr>
                    <tr><td>Reading method</td><td>Time-based</td><td>Color disc matching</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; IDF Standard 100B:1991; BIS Standard</p>
            </div>
          `
        },
        {
          title: "1-Ghante Ka Resazurin Reduction Parikshan (One-Hour Resazurin Test)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay:</strong> Yeh 10-minute resazurin test ka extended version hai jo kachche doodh ki aapoorti ko zyada accurately grade karne ke liye use hota hai. Siddhant bilkul same hai — resazurin neele se gulaabi (resorufin) aur phir rangheen (dihydroresorufin) mein badalta hai. 1-ghante ka extended incubation period zyada differentiation allow karta hai — yeh test 10-minute test se zyada reliable hai kyunki bacteria ko growth ke liye zyada samay milta hai.</p>
  
              <h4 class="font-semibold mt-3">Prakriya:</h4>
              <p>Bilkul same hai jaise 10-minute test, bas incubation time 10 minute ki jagah 60 minute (1 ghanta) hai at 37.5°C.</p>
  
              <h4 class="font-semibold mt-3">Vyakhya (Interpretation):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>1-Ghante Ka Resazurin Disc Number</th><th>Doodh Ki Gunvatta</th><th>Anumaaanit Bacteria</th><th>Karyavaahi</th></tr></thead>
                  <tbody>
                    <tr><td>4 ya zyada</td><td>Achcha (Good) ✅</td><td>< 5 lakh/ml</td><td>Processing ke liye ideal</td></tr>
                    <tr><td>3.5 se 1</td><td>Santoshjanak (Satisfactory) ⚠️</td><td>5-50 lakh/ml</td><td>Accept lekin monitoring karein</td></tr>
                    <tr><td>0.5 se 0</td><td>Kharab (Poor) ❌</td><td>> 50 lakh/ml</td><td>Asvikaar karein</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; IDF Standard 100B:1991</p>
            </div>
          `
        },
        {
          title: "Direct Microscopic Somatic Cell Count (DMSCC)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> DMSCC vidhi mein, doodh ki ek maapi hui maatra (0.01 ml) ko ek kaanch ki slide par ek nirdishta kshetra (1 varg cm = 1 sq. cm) mein phelaakar, rangkar (staining), aur ek yaugik sookshmdarshi (compound microscope) ke neeche jaanch karna shamil hai. Somatic cells wo cells hain jo doodh mein normally present hoti hain — inme mukhya roop se leucocytes (white blood cells — neutrophils, macrophages, lymphocytes) aur epithelial cells (udder lining se) shamil hain.</p>
  
              <p><strong>Vaigyanik Mahatva:</strong></p>
              <ul class="list-disc list-inside">
                <li><strong>Normal SCC:</strong> Swasth gaay ka doodh mein SCC lagbhag 1-2 lakh cells/ml hota hai</li>
                <li><strong>Subclinical Mastitis:</strong> 2-5 lakh cells/ml — bahari lakshan nahi dikhte lekin doodh ki quality aur yield affected hoti hai</li>
                <li><strong>Clinical Mastitis:</strong> > 5 lakh cells/ml — udder mein sujan, doodh mein clots, yield mein significant drop</li>
                <li>SCC badhne par doodh mein proteolytic aur lipolytic enzymes ki maatra badhti hai, jisse shelf life kam hoti hai</li>
                <li>High SCC doodh mein casein kam hota hai aur whey protein zyada — cheese yield kam hota hai</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li><strong>Microscope Factor Ka Nirdharan:</strong> Microscope field ke vyaas (diameter) ko stage micrometer se maaapen. Kshetra ki ganana karein: Area = π × (d/2)². Microscopic Factor (MF) = Smear area (1 sq cm = 100 sq mm) / Field area. Example: agar field diameter = 0.146 mm, toh field area = 0.01675 sq mm, MF = 100/0.01675 = 5,970 ≈ 6,000.</li>
                <li><strong>Doodh Smear Taiyaar Karna:</strong> Calibrated pipette se exactly 0.01 ml doodh ko ek slide par 1 sq cm kshetra mein samaan roop se phelaaein. 40-45°C par sukhaayein. Dhyan rakhein ki sample uniformly spread ho — uneven spreading se inaccurate count hoga.</li>
                <li><strong>Films Ko Rangna (Staining):</strong> Films ko Newman's stain mein 1/2 se 1 minute ke liye duboyein. Newman's stain ek methylene blue-based stain hai jo ek hi operation mein vasa (fat) ko hataata hai, koshikaon (cells) ko fix karta hai, aur jeevon (organisms) ko daagta (stains) hai. Alternative: Levowitz-Weber stain bhi use ho sakta hai.</li>
                <li><strong>Sookshmdarshik Pareeksha (Microscopic Examination):</strong> Oil immersion objective (100x) ke under daage films ki jaanch karein. Minimum 50 microscopic fields count karein (ideally 100 fields). Single organisms ya koshikaon ke guchcho (clumps) ki ginti karein.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Ganana (Calculation):</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  SCC per ml = Average number of cells per field × Microscope Factor (MF)
  
  Example: Agar 50 fields mein kul 250 somatic cells count hue
  Average = 250/50 = 5 cells/field
  SCC/ml = 5 × 6,000 = 30,000 cells/ml (Normal)
  
  Agar average = 100 cells/field
  SCC/ml = 100 × 6,000 = 6,00,000 cells/ml (Mastitis indicator!)
              </pre>
  
              <h4 class="font-semibold mt-3">SCC Interpretation Guide:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>SCC (cells/ml)</th><th>Interpretation</th><th>Doodh Ki Quality Impact</th></tr></thead>
                  <tbody>
                    <tr><td>< 2,00,000</td><td>Normal, Healthy Udder</td><td>Best quality, maximum yield</td></tr>
                    <tr><td>2,00,000 - 4,00,000</td><td>Borderline — monitoring needed</td><td>Slight quality decrease possible</td></tr>
                    <tr><td>4,00,000 - 7,50,000</td><td>Subclinical Mastitis likely</td><td>Reduced casein, altered minerals, shorter shelf life</td></tr>
                    <tr><td>7,50,000 - 10,00,000</td><td>Mastitis infection</td><td>Significant quality loss, enzyme damage</td></tr>
                    <tr><td>> 10,00,000</td><td>Severe Mastitis</td><td>Doodh processing ke liye unsuitable</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">EU aur FSSAI Standards:</h4>
              <ul class="list-disc list-inside">
                <li>EU Standard: Raw milk SCC < 4,00,000 cells/ml (geometric mean over 3 months)</li>
                <li>USA Standard: < 7,50,000 cells/ml (Grade A PMO)</li>
                <li>FSSAI: Currently SCC ka specific limit notified nahi hai, lekin 5,00,000 cells/ml ko indicator maana jaata hai</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; IDF Standard 148-2:2006; APHA Standard Methods; National Mastitis Council Guidelines</p>
            </div>
          `
        },
        {
          title: "Mastitis Ka Pata Lagana (Detection of Mastitis)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Parichay aur Vaigyanik Prishthbhoomi:</strong> Mastitis (than ki sujan / udder inflammation) dairy pashuon ki sabse aam aur costly bimariyon mein se ek hai. Globally, mastitis se dairy industry ko saalana lagbhag $35 billion ka nuksaan hota hai. Bharat mein estimated loss lagbhag ₹7,000-10,000 crore annually hai. Mastitis se doodh ki upaj (yield) 10-70% tak kam ho jaati hai (severity ke anusaar), doodh ki rasaynik sanrachna badalti hai (casein kam, whey protein zyada, lactose kam, Na⁺ aur Cl⁻ zyada, fat composition alter), aur doodh ko upyog ke liye anupooyukt bana deta hai.</p>
  
              <p><strong>Mastitis Ke Prakar (Types of Mastitis):</strong></p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>Clinical Mastitis</th><th>Subclinical Mastitis</th></tr></thead>
                  <tbody>
                    <tr><td>Bahari Lakshan</td><td>Sujan, laalima, dard, garam udder</td><td>Koi dikhne wala lakshan nahi</td></tr>
                    <tr><td>Doodh mein Change</td><td>Clots, pus, blood, watery</td><td>Normal dikhta hai</td></tr>
                    <tr><td>SCC</td><td>> 10,00,000/ml</td><td>2,00,000 - 10,00,000/ml</td></tr>
                    <tr><td>Frequency</td><td>Kam (sabhi cases ka ~30%)</td><td>Zyada (sabhi cases ka ~70%)</td></tr>
                    <tr><td>Economic Loss</td><td>Bahut zyada (treatment + milk loss)</td><td>Zyada (hidden yield loss)</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p><strong>Aam Kaarak Jeev (Common Causative Organisms):</strong></p>
              <ul class="list-disc list-inside">
                <li><strong>Staphylococcus aureus</strong> — sabse common, contagious, chronic infection</li>
                <li><strong>Streptococcus agalactiae</strong> — contagious, udder-specific pathogen</li>
                <li><strong>E. coli</strong> — environmental, acute/severe cases</li>
                <li><strong>Streptococcus uberis</strong> — environmental, bedding se</li>
                <li><strong>Klebsiella spp.</strong> — environmental, sawdust bedding se</li>
                <li><strong>Mycoplasma bovis</strong> — contagious, difficult to treat</li>
              </ul>
  
              <h4 class="font-semibold mt-3">1. Strip-Cup Parikshan (Strip-Cup Test):</h4>
              <p><strong>Siddhant:</strong> Clinical mastitis mein foremilk (pehle nikla doodh) mein fibrin, balgam (mucus), aur doodh ke thakke (clots) maujood hote hain jo normal aankh se dekhe ja sakte hain.</p>
              <ol class="list-decimal list-inside">
                <li>Ek strip-cup (ek cup par phaila hua kaala kapda) par foremilk ki pehli 2-3 dhaaraon ko nikaalein.</li>
                <li>Kaale kapde par thakkon, flakon, ya asaamanya rang ki upasthiti ki jaanch karein.</li>
                <li><strong>Positive:</strong> Doodh mein clots, flakes, ya strings dikhna = Clinical mastitis</li>
                <li><strong>Note:</strong> Yeh test har milking se pehle karna chahiye — early detection mein bahut helpful hai</li>
              </ol>
  
              <h4 class="font-semibold mt-3">2. California Mastitis Test (CMT) — NEW ADDITION:</h4>
              <p><strong>Siddhant:</strong> CMT reagent (sodium alkyl aryl sulfonate — ek anionic surfactant) somatic cells ke nuclear DNA ke saath react karke ek gel-like mass banata hai. Jitne zyada somatic cells, utna gaadhaa gel.</p>
              <ol class="list-decimal list-inside">
                <li>CMT paddle ke 4 cups mein 4 quarters se alag-alag doodh ki thodi maatra (2-3 ml) nikaalein.</li>
                <li>Har cup mein samaan maatra CMT reagent dalein.</li>
                <li>Paddle ko circular motion mein 10-15 seconds tak ghumaaein.</li>
                <li>Gel formation dekhein — scoring neeche di gayi hai.</li>
              </ol>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Score</th><th>Reaction</th><th>Gel Consistency</th><th>Estimated SCC</th><th>Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td>Negative (N)</td><td>Koi change nahi</td><td>Liquid, no thickening</td><td>< 2,00,000</td><td>Normal ✅</td></tr>
                    <tr><td>Trace (T)</td><td>Slight thickening</td><td>Halka gaadhaa, quickly disappears</td><td>2-4 lakh</td><td>Suspicious ⚠️</td></tr>
                    <tr><td>1+</td><td>Mild thickening</td><td>Thickening present but not gel</td><td>4-15 lakh</td><td>Subclinical ⚠️</td></tr>
                    <tr><td>2+</td><td>Moderate gel</td><td>Clear gel formation, moves as mass</td><td>15-50 lakh</td><td>Mastitis positive ❌</td></tr>
                    <tr><td>3+</td><td>Strong gel</td><td>Gaadhaa gel, sticks to paddle, peaks</td><td>> 50 lakh</td><td>Severe mastitis ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">3. Bromothymol Blue Parikshan:</h4>
              <p><strong>Siddhant:</strong> Normal doodh ka pH 6.6-6.8 hota hai, lekin mastitis-infected quarters se doodh aam taur par kshareeya (alkaline) hota hai (pH 7.0-7.4). Mastitis mein blood-milk barrier damage hota hai, jisse blood components (Na⁺, Cl⁻, HCO₃⁻) doodh mein leak ho jaate hain, jo pH badhaate hain.</p>
              <p>Bromothymol blue ka pH range: Yellow (acidic, pH < 6.0) → Green (neutral, pH 6.0-7.6) → Blue (alkaline, pH > 7.6)</p>
              <ol class="list-decimal list-inside">
                <li>5 ml doodh mein 1 ml bromothymol blue indicator solution milaaein.</li>
                <li><strong>Peela-hara rang (Yellowish-green):</strong> Normal doodh (pH 6.4-6.8) ✅</li>
                <li><strong>Hara-neela rang (Greenish-blue):</strong> Mastitis ki shanka (pH 6.8-7.2) ⚠️</li>
                <li><strong>Neela rang (Blue):</strong> Mastitis confirmed (pH > 7.2) ❌</li>
              </ol>
  
              <h4 class="font-semibold mt-3">4. Electrical Conductivity (EC) Test — NEW ADDITION:</h4>
              <p><strong>Siddhant:</strong> Mastitis mein Na⁺ aur Cl⁻ ions ki maatra badhti hai aur K⁺ aur lactose ki maatra ghatati hai. Ions badhne se doodh ki electrical conductivity badh jaati hai.</p>
              <ul class="list-disc list-inside">
                <li>Normal doodh EC: 4.0-5.5 mS/cm (milliSiemens per centimeter)</li>
                <li>Mastitis doodh EC: > 6.0 mS/cm</li>
                <li>Yeh test automated milking systems mein real-time monitoring ke liye widely use hota hai</li>
              </ul>
  
              <h4 class="font-semibold mt-3">5. Leucocyte Count:</h4>
              <p>Infected quarters se doodh mein atyadhik sankhya mein leucocyte cells hoti hain. DMSCC ya automated cell counters (jaise Fossomatic™) se count kiya jaata hai. 5,00,000/ml se zyada ki leucocyte count mastitis sankarman ka sanket hai.</p>
  
              <h4 class="font-semibold mt-3">6. N-Acetyl-β-D-Glucosaminidase (NAGase) Test — NEW ADDITION:</h4>
              <p><strong>Siddhant:</strong> NAGase ek enzyme hai jo damaged udder tissue aur neutrophils se release hota hai. Mastitis mein iska level significantly badh jaata hai. Yeh test subclinical mastitis ke liye bahut sensitive hai.</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479; National Mastitis Council (NMC) Guidelines; IDF Bulletin 321; Sharma, N. et al. (2011) "Mastitis: An Overview", Asian J. Animal & Veterinary Advances</p>
            </div>
          `
        },
        {
          title: "Acidity Aur Alkaline Phosphatase Parikshan Ke Liye SOPs",
          content: `
            <div class="prose max-w-none">
              <h4 class="font-semibold">A. Doodh Ki Amlataa (Titratable Acidity of Milk):</h4>
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Doodh ki titratable acidity do components se milkar banti hai:</p>
              <ul class="list-disc list-inside">
                <li><strong>Natural/Apparent Acidity (Praakritik Amlataa):</strong> Yeh fresh doodh mein naturally present hoti hai aur casein proteins (contributes ~0.05-0.08% LA), phosphates (~0.04% LA), citrates (~0.01% LA), aur dissolved CO₂ (~0.01% LA) ke kaaran hoti hai. Gaay ke fresh doodh ki natural acidity lagbhag 0.13-0.14% LA hoti hai.</li>
                <li><strong>Developed Acidity (Vikasit Amlataa):</strong> Yeh bacteria (mukhya roop se Lactobacillus, Streptococcus) dwara lactose ko lactic acid mein ferment karne se develop hoti hai: Lactose → 4 Lactic Acid (C₁₂H₂₂O₁₁ + H₂O → 4 CH₃CHOHCOOH)</li>
              </ul>
              <p>Total Titratable Acidity = Natural Acidity + Developed Acidity</p>
  
              <h4 class="font-semibold mt-2">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside">
                <li>10 ml doodh ko ek porcelain basin ya conical flask mein lein.</li>
                <li>0.5 ml phenolphthalein indicator (1% in 95% ethanol) dalein.</li>
                <li>0.1 N NaOH solution se burette se titrate karein jab tak halka sa pink rang aaye jo 15-30 seconds tak rahe.</li>
                <li>Use kiye gaye NaOH ka volume note karein.</li>
              </ol>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  % Lactic Acid = (ml of 0.1N NaOH × 0.009 × 100) / Volume of milk sample (ml)
  
  Example: 10 ml doodh ke liye 1.5 ml 0.1N NaOH laga
  % LA = (1.5 × 0.009 × 100) / 10 = 0.135% (Normal gaay ka doodh)
              </pre>
  
              <h4 class="font-semibold mt-3">Standard Acidity Values:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Doodh Ka Prakar</th><th>Normal Acidity (% LA)</th><th>Acceptable Range</th></tr></thead>
                  <tbody>
                    <tr><td>Gaay Ka Doodh</td><td>0.13 - 0.14%</td><td>0.12 - 0.18%</td></tr>
                    <tr><td>Bhains Ka Doodh</td><td>0.14 - 0.15%</td><td>0.12 - 0.18%</td></tr>
                    <tr><td>Mixed Doodh</td><td>0.13 - 0.15%</td><td>0.12 - 0.18%</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">B. Phosphatase Parikshan (Pasteurized Doodh Ke Liye):</h4>
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Alkaline phosphatase (ALP) ek enzyme hai jo kachche doodh mein naturally maujood hota hai. Yeh enzyme milk fat globule membrane (MFGM) se associated hota hai. Is enzyme ka thermal inactivation temperature pasteurization conditions (72°C/15 seconds ya 63°C/30 minutes) se thoda zyada hai — iska matlab hai ki agar pasteurization sahi se hua hai toh ALP poori tarah inactive ho jaayega.</p>
  
              <p><strong>Rasaynik Pratikriya (Chemical Reaction — Aschaffenburg-Mullen Method):</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Disodium p-nitrophenyl phosphate (colorless substrate)
       ↓ Alkaline Phosphatase enzyme (if present/active)
  p-Nitrophenol (YELLOW color) + Phosphate
  
  Agar doodh sahi se pasteurize hua hai → ALP inactive → Koi yellow rang nahi → TEST NEGATIVE ✅
  Agar doodh sahi se pasteurize NAHI hua → ALP active → Yellow rang → TEST POSITIVE ❌
              </pre>
  
              <h4 class="font-semibold mt-3">Prakriya (Aschaffenburg-Mullen Method):</h4>
              <ol class="list-decimal list-inside">
                <li>5 ml doodh ko ek test tube mein lein.</li>
                <li>1 ml buffer substrate (disodium p-nitrophenyl phosphate in sodium carbonate-bicarbonate buffer, pH 10.0) dalein.</li>
                <li>37 ± 0.5°C par 2 ghante tak incubate karein.</li>
                <li>Rang ki comparison karein standard tubes se.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Rang</th><th>ALP Activity (μg p-NP/ml)</th><th>Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td>Koi rang nahi (Colorless)</td><td>< 4</td><td>Sahi pasteurization ✅</td></tr>
                    <tr><td>Halka peela</td><td>4-10</td><td>Borderline — recheck ⚠️</td></tr>
                    <tr><td>Gehra peela (Deep yellow)</td><td>> 10</td><td>Inadequate pasteurization ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I & II); IS:5764-1970; FSSAI Manual; Aschaffenburg, R. & Mullen, J.E.C. (1949)</p>
            </div>
          `
        },
        {
          title: "Lactometer Ke Saath Total Solids (TS) Aur Solids-Not-Fat (SNF) Parikshan",
          content: `
            <div class="prose max-w-none">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Doodh ek complex biological fluid hai jisme paani (~87%), fat (~3.5-6.5%), protein (~3.0-3.5%), lactose (~4.6-4.8%), minerals (~0.7-0.8%), aur vitamins shamil hain. Solids-Not-Fat (SNF) = Total Solids - Fat. SNF mein protein, lactose, aur minerals aate hain. SNF doodh ki nutritional quality ka important indicator hai aur iske aadhaar par doodh ki pricing bhi hoti hai.</p>
  
              <p><strong>Lactometer Ka Siddhant:</strong> Lactometer ek hydrometer hai jo specifically doodh ke specific gravity (relative density) maapne ke liye calibrated hota hai. Yeh Archimedes' Principle par kaam karta hai — ek body ko liquid mein doobane par uspar buoyant force lagta hai jo displaced liquid ke weight ke barabar hota hai. Normal doodh ka specific gravity 1.028-1.034 (gaay) ya 1.030-1.035 (bhains) hota hai at 27°C.</p>
  
              <p><strong>Paani milaane ka prabhav:</strong> Paani milaane se specific gravity ghatata hai (paani ka SG = 1.000). Fat nikalne (skimming) se SG badhta hai (fat ka SG = 0.93, jo doodh se halka hai). Isliye, agar koi pehle cream nikalkar phir paani milaaye, toh SG normal range mein aa sakta hai — yeh "double adulteration" kehlata hai aur lactometer se detect nahi hota.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside mt-1">
                <li><strong>Fat % nirdharan:</strong> Gerber method se doodh ka fat percentage nikalein.</li>
                <li><strong>Temperature adjustment:</strong> Doodh ke sample ko 40°C tak garam karein (sahi mixing ke liye), phir ise 27 ± 1°C tak thanda karein (ISI lactometer 27°C par calibrated hota hai).</li>
                <li><strong>Lactometer reading:</strong> Doodh ko ek lactometer jar mein dalein (jhag banne na dein). Dhire se ISI-marked lactometer dalein aur ise freely float hone dein. Meniscus ke top par lactometer reading (LR) record karein. Reading 15-20 seconds ke andar lein.</li>
                <li><strong>Temperature correction:</strong> Agar doodh ka temperature exactly 27°C nahi hai, toh correction apply karein: Har 1°C zyada → LR mein 0.5 jodein; Har 1°C kam → LR mein se 0.5 ghataayein.</li>
                <li><strong>Corrected Lactometer Reading (CLR) nikalein.</strong></li>
              </ol>
  
              <h4 class="font-semibold mt-3">Ganana (Calculations — Richmond's Formula):</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Gaay ka Doodh:
  SNF (%) = (CLR / 4) + (0.25 × Fat %) + 0.44
  
  Bhains ka Doodh:
  SNF (%) = (CLR / 4) + (0.25 × Fat %) + 0.72 [ya 0.44 — formula vary karta hai]
  
  Total Solids (TS %) = Fat % + SNF %
  
  Example (Gaay ka Doodh):
  Fat = 4.0%, CLR = 28
  SNF = (28/4) + (0.25 × 4.0) + 0.44 = 7.0 + 1.0 + 0.44 = 8.44%
  TS = 4.0 + 8.44 = 12.44%
              </pre>
  
              <h4 class="font-semibold mt-3">FSSAI Standards (Minimum Requirements):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>Gaay Ka Doodh</th><th>Bhains Ka Doodh</th><th>Mixed Doodh</th></tr></thead>
                  <tbody>
                    <tr><td>Fat (minimum %)</td><td>3.2%</td><td>5.0%</td><td>3.5%</td></tr>
                    <tr><td>SNF (minimum %)</td><td>8.3%</td><td>9.0%</td><td>8.5%</td></tr>
                    <tr><td>Specific Gravity (at 27°C)</td><td>1.028 - 1.034</td><td>1.030 - 1.035</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Paani Milavat Ka Anumaan:</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  % Water Added (approximate) = 100 × (1 - CLR observed / CLR standard)
  
  Example: Observed CLR = 22, Standard CLR for cow milk = 28
  % Water = 100 × (1 - 22/28) = 100 × 0.214 = 21.4% paani milaya gaya hai
              </pre>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; IS:1183-1965 (Lactometer specification); FSSAI Standards; De, S. (2004) "Outlines of Dairy Technology"</p>
            </div>
          `
        },
        {
          title: "Himank Parikshan (Freezing Point Test / Cryoscopy)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Doodh ka himank (freezing point) uske sabse sthir (constant) gunon mein se ek hai. Normal gaay ke doodh ka freezing point -0.520 se -0.560°C hota hai (BIS standard: -0.512 to -0.575°C), jabki bhains ke doodh ka -0.518 to -0.543°C hota hai. Yeh property doodh mein dissolved solutes — mukhya roop se lactose (~55% contribution) aur chlorides/minerals (~25% contribution) — ke kaaran hoti hai.</p>
  
              <p><strong>Rasaynik Siddhant (Colligative Property):</strong> Freezing point depression ek colligative property hai — yeh dissolved particles ki sankhya par nirbhar karti hai, unke prakar par nahi. Raoult's Law ke anusaar:</p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  ΔTf = Kf × m × i
  
  Jahan:
  ΔTf = Freezing point depression
  Kf = Cryoscopic constant of water (1.86 °C·kg/mol)
  m = Molality of solute
  i = Van't Hoff factor (ionization factor)
  
  Paani milane se dissolved solutes dilute ho jaate hain
  → Effective molality (m) ghatata hai
  → ΔTf ghatata hai
  → Freezing point 0°C ki taraf badhta hai
              </pre>
  
              <p><strong>Sensitivity:</strong> Freezing point test bahut sensitive hai — sirf 1% paani milane se bhi freezing point mein detectable change aata hai (~0.006°C shift). Yeh is test ko paani milavat ka pata lagane ka GOLD STANDARD banata hai.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Cryoscope Method):</h4>
              <ol class="list-decimal list-inside">
                <li>Modern thermistor cryoscope (jaise Fiske, Advanced Instruments, ya Laktron) use karein.</li>
                <li>2.0-2.5 ml doodh sample ko sample tube mein dalein.</li>
                <li>Tube ko cooling chamber mein rakhein jahan temperature -7°C se -12°C tak set hai.</li>
                <li>Instrument doodh ko supercool karta hai (freezing point se neeche bina crystallize hue).</li>
                <li>Wire stirrer automatically vibrate hokar ice crystal nucleation induce karta hai.</li>
                <li>Temperature rapidly equilibrium freezing point tak pahunchta hai — yeh point instrument automatically record karta hai.</li>
                <li>Result °C ya °H (degrees Hortvet) mein display hota hai.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Freezing Point (°C)</th><th>Interpretation</th><th>Estimated % Water Added</th></tr></thead>
                  <tbody>
                    <tr><td>-0.525 to -0.565</td><td>Normal, pure doodh ✅</td><td>0%</td></tr>
                    <tr><td>-0.512 to -0.525</td><td>Suspicious ⚠️</td><td>Possibly 1-3%</td></tr>
                    <tr><td>-0.500 to -0.512</td><td>Paani milaya gaya hai ❌</td><td>~3-5%</td></tr>
                    <tr><td>> -0.500 (jaise -0.480)</td><td>Significant paani milavat ❌</td><td>> 5%</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Paani Ka % Nikalne Ka Formula:</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  % Water Added = [(FP standard - FP observed) / FP standard] × 100
  
  Example: FP standard = -0.540°C, FP observed = -0.500°C
  % Water = [(-0.540 - (-0.500)) / -0.540] × 100 = [(-0.040) / (-0.540)] × 100 = 7.4%
              </pre>
  
              <h4 class="font-semibold mt-3">Seemaayein (Limitations):</h4>
              <ul class="list-disc list-inside">
                <li>Agar doodh mein paani ke saath salt/sugar bhi milaya jaaye, toh freezing point compensate ho sakta hai</li>
                <li>Breed, season, feed, lactation stage se natural variation hoti hai</li>
                <li>Instrument calibration bahut zaroori hai — standard sucrose solutions se calibrate karein</li>
                <li>Developed acidity (lactic acid formation) se bhi freezing point slightly decrease hota hai (false effect)</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part II) - 1961; IDF Standard 108:2009; ISO 5764:2009; Codex Alimentarius</p>
            </div>
          `
        },
        {
          title: "Avsaadan Parikshan (Sedimentation / Dirt Test)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Yeh test doodh mein drishya gandagi (visible dirt) aur baahari padaarth (foreign matter) ki maatra ko maapata hai. Doodh mein gandagi ke sources mein udder ki safaai ka abhav, gandaa doodh nikalne ka sthaan, gandee equipment, aur kharab handling shamil hain. Gandagi mein mitti, gobar ke kan, baal, chaara ke tukde, aur keede shamil ho sakte hain.</p>
  
              <h4 class="font-semibold mt-3">Prakriya:</h4>
              <ol class="list-decimal list-inside">
                <li>500 ml doodh ko ek vishesh avsaadan parikshan disc (sediment test disc — cotton pad filter) ke maadhyam se filter karein. Standard vacuum ya gravity filtration use karein.</li>
                <li>Disc ko phir sukhaayein aur doodh ko grade dene ke liye maanak avsaadan disc (ADPI/USDA Sediment Standards) ke saath tulna karein.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Grading System (USDA/ADPI Standards):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Grade</th><th>Sediment Description</th><th>Disc Appearance</th><th>Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td>Grade 1 (No. 1)</td><td>Practically sediment-free</td><td>Saaf, hardly any particles</td><td>Excellent hygiene ✅</td></tr>
                    <tr><td>Grade 2 (No. 2)</td><td>Light sediment</td><td>Slight discoloration, few particles</td><td>Acceptable ✅</td></tr>
                    <tr><td>Grade 3 (No. 3)</td><td>Moderate sediment</td><td>Noticeable dirt particles</td><td>Needs improvement ⚠️</td></tr>
                    <tr><td>Grade 4 (No. 4)</td><td>Heavy sediment</td><td>Clearly dirty disc</td><td>Unacceptable ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Mahatva:</h4>
              <p>Uchch maatra mein avsaadan doodh duhne ke dauraan kharab svachhata (poor hygiene during milking), udder ke svaasthya (udder health), aur equipment ki safaai (sanitation) ki kharab haalat ko darshata hai. Sediment directly bacterial contamination se correlated hai.</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; ADPI Standards; USDA Inspection Manual</p>
            </div>
          `
        },
        {
          title: "pH Measurement — Doodh Ka pH Maapna (NEW TOPIC)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> pH doodh mein hydrogen ion (H⁺) concentration ka logarithmic measure hai. pH = -log[H⁺]. Normal fresh doodh ka pH 6.6-6.8 hota hai (slightly acidic). pH titratable acidity se alag hai — pH actual hydrogen ion concentration batata hai jabki titratable acidity total acid content (including buffered acids) batata hai.</p>
  
              <p><strong>Doodh Ka Buffer System:</strong> Doodh mein excellent buffering capacity hai jo mainly casein proteins, phosphates, aur citrates ke kaaran hoti hai. Is kaaran, significant lactic acid development hone par bhi pH initially bahut slowly decrease hota hai. Isliye pH measurement akele mein early acidity detection ke liye titratable acidity se kam sensitive hai.</p>
  
              <h4 class="font-semibold mt-3">pH Ranges aur Unka Matlab:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>pH Value</th><th>Doodh Ki Avastha</th><th>Sambhavit Kaaran</th></tr></thead>
                  <tbody>
                    <tr><td>7.0 - 7.4</td><td>Alkaline</td><td>Mastitis, late lactation, neutralizer added</td></tr>
                    <tr><td>6.6 - 6.8</td><td>Normal fresh doodh</td><td>Swasth pashu ka taaza doodh</td></tr>
                    <tr><td>6.4 - 6.6</td><td>Slightly acidic</td><td>Early bacterial growth, colostrum</td></tr>
                    <tr><td>6.0 - 6.4</td><td>Acidic</td><td>Significant developed acidity</td></tr>
                    <tr><td>< 6.0</td><td>Highly acidic</td><td>Advanced spoilage, near curdling</td></tr>
                    <tr><td>~4.6</td><td>Isoelectric point of casein</td><td>Casein coagulation/curdling</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Prakriya:</h4>
              <ol class="list-decimal list-inside">
                <li>pH meter ko standard buffer solutions (pH 4.0 aur 7.0) se calibrate karein.</li>
                <li>Saaf electrode ko doodh sample mein daalein (sample temperature 20-25°C par laaein).</li>
                <li>Stable reading aane par pH note karein.</li>
                <li>Har reading ke baad electrode ko distilled water se dhoyein.</li>
              </ol>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I); AOAC Official Methods; FSSAI Manual</p>
            </div>
          `
        },
        {
          title: "Fat Content — Gerber Method (Detailed) (NEW TOPIC)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Gerber method doodh mein fat content maapne ka sabse widely used rapid method hai. Yeh 1892 mein N. Gerber dwara Switzerland mein develop kiya gaya tha. Is method mein sulphuric acid doodh ke proteins ko dissolve karta hai aur fat ko release karta hai. Amyl alcohol ek surfactant ke roop mein kaam karta hai jo fat ko cleanly separate karne mein madad karta hai.</p>
  
              <p><strong>Rasaynik Siddhant:</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  H₂SO₄ (conc.) + Milk Proteins → Dissolved proteins (acid hydrolysis)
                                  → Releases milk fat from fat globule membrane
  Amyl Alcohol (C₅H₁₁OH) → Reduces surface tension → Aids clean fat separation
  Heat + Centrifugation → Fat column separates in butyrometer neck
  
  Fat is read directly from the calibrated butyrometer scale.
              </pre>
  
              <h4 class="font-semibold mt-3">Prakriya:</h4>
              <ol class="list-decimal list-inside">
                <li>Gerber butyrometer mein pehle 10 ml conc. H₂SO₄ (specific gravity 1.807-1.812 at 27°C) dalein. Dhyan se dalein — acid bahut corrosive hai!</li>
                <li>Phir 10.75 ml achchi tarah mixed doodh sample ko dhire dhire acid ke upar dalein (pipette se, side wall ke saath).</li>
                <li>Phir 1 ml amyl alcohol (isoamyl alcohol, specific gravity 0.814-0.816) dalein.</li>
                <li>Butyrometer ko lock stopper se band karein.</li>
                <li>Cloth mein wrap karke vigorous shaking karein jab tak sab mix na ho jaaye aur koi white particles na rahe. Bahut garam hoga — savdhaan rehein!</li>
                <li>Water bath mein 65 ± 2°C par 5 minute rakhein.</li>
                <li>Gerber centrifuge mein rakhein aur 1100-1200 rpm par 4-5 minute centrifuge karein.</li>
                <li>Phir se water bath mein 65°C par 3-5 minute rakhein.</li>
                <li>Fat column ki reading lein — bottom of meniscus se top of meniscus tak. Reading directly % fat mein milti hai.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">FSSAI Minimum Fat Standards:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Doodh Ka Prakar</th><th>Minimum Fat %</th></tr></thead>
                  <tbody>
                    <tr><td>Gaay Ka Doodh</td><td>3.2%</td></tr>
                    <tr><td>Bhains Ka Doodh</td><td>5.0%</td></tr>
                    <tr><td>Mixed Doodh</td><td>4.5%</td></tr>
                    <tr><td>Toned Milk</td><td>3.0%</td></tr>
                    <tr><td>Double Toned Milk</td><td>1.3%</td></tr>
                    <tr><td>Skimmed Milk</td><td>< 0.5%</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1224 (Part I) - 1977; IDF Standard 105:2008; ISO 2446:2008</p>
            </div>
          `
        },
        {
          title: "Turbidity Test — Pasteurization Check (NEW TOPIC)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Turbidity test doodh ke pasteurization aur sterilization ki efficiency check karne ka ek confirmatory test hai. Yeh test is siddhant par aadhaarit hai ki whey proteins (especially serum albumin aur immunoglobulins) heat-labile hain aur 80°C se upar ke temperature par denature hokar insoluble ho jaate hain. Properly sterilized doodh ko acid se treat karne par milne wala whey bilkul clear hona chahiye (sab whey proteins denatured hain). Agar whey turbid (dhundhla) hai, toh doodh properly sterilize nahi hua hai.</p>
  
              <h4 class="font-semibold mt-3">Prakriya (Procedure):</h4>
              <ol class="list-decimal list-inside">
                <li>5 ml doodh ko test tube mein lein aur 5 ml 4% ammonium sulphate solution dalein.</li>
                <li>5 minute tak ubaalein (boiling water bath mein).</li>
                <li>Filter karein aur filtrate ki clarity dekhein.</li>
                <li><strong>Clear filtrate:</strong> Proper sterilization ✅</li>
                <li><strong>Turbid (dhundhla) filtrate:</strong> Improper heat treatment ❌</li>
              </ol>
  
              <p><strong>Note:</strong> Yeh test primarily sterilized/UHT milk ke liye hai, HTST pasteurized milk ke liye nahi (kyunki HTST mein kuch whey proteins survive karte hain).</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part II); FSSAI Manual of Methods</p>
            </div>
          `
        }
      ],
  
      preservatives: [
        {
          title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
          content: `
            <div class="prose max-w-none prose-blue">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Neutralizers wo chemical agents hain jo doodh mein developed acidity (lactic acid) ko mask/neutralize karne ke liye milaaye jaate hain. Jab bacteria doodh mein lactose ko ferment karke lactic acid banate hain, toh doodh khatta ho jaata hai (acidity badhti hai). Beimaan doodh waale is khatte doodh ko "fresh" dikhane ke liye usme alkalis (NaOH — caustic soda, Na₂CO₃ — soda ash/washing soda, NaHCO₃ — baking soda/meetha soda) milate hain. Yeh doodh ka pH normal range mein le aate hain, lekin doodh mein bacteria aur unke toxins phir bhi maujood rehte hain.</p>
  
              <p><strong>Rasaynik Pratikriya (Chemical Reaction):</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  CH₃CHOHCOOH + NaOH → CH₃CHOHCOONa + H₂O
  (Lactic Acid)   (Caustic Soda)  (Sodium Lactate)   (Water)
  
  2CH₃CHOHCOOH + Na₂CO₃ → 2CH₃CHOHCOONa + H₂O + CO₂↑
  (Lactic Acid)   (Soda Ash)    (Sodium Lactate)   (Water) (Gas)
  
  CH₃CHOHCOOH + NaHCO₃ → CH₃CHOHCOONa + H₂O + CO₂↑
  (Lactic Acid)  (Baking Soda)  (Sodium Lactate)   (Water) (Gas)
              </pre>
  
              <p><strong>Swasthya Khatre (Health Hazards):</strong></p>
              <ul class="list-disc list-inside">
                <li><strong>NaOH (Caustic Soda):</strong> Bahut corrosive — gastrointestinal tract ki mucous membranes ko burn kar sakta hai, esophageal damage, severe pain</li>
                <li><strong>Na₂CO₃:</strong> GI tract mein irritation, nausea, vomiting — chronic exposure se alkalosis</li>
                <li><strong>NaHCO₃:</strong> Comparatively kam harmful, lekin excess mein metabolic alkalosis, electrolyte imbalance</li>
                <li>Sabse bada khatraa: Neutralized doodh mein bacteria aur toxins phir bhi maujood hain — food poisoning ka risk</li>
                <li>Neutralizer doodh ki natural warning system (khatta swaad/gandh) ko mask karta hai</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Vidhi 1: Rosalic Acid Test (Rapid Field Test)</h4>
              <p><strong>Siddhant:</strong> Rosalic acid (aurin, C₁₉H₁₄O₃) ek pH indicator hai jo acidic conditions mein peela/bhoora aur alkaline conditions mein laal (rose-red) rang deta hai. Agar doodh mein neutralizer milaya gaya hai, toh doodh alkaline ho jaayega aur rosalic acid laal rang dega.</p>
              <ol class="list-decimal list-inside">
                <li>Ek test tube mein 10 ml doodh lein aur samaan maatra mein 95% ethyl alcohol dalein.</li>
                <li>0.1% rosalic acid solution ki 4-5 boondein dalein aur achchi tarah milaaein.</li>
                <li><strong>Gulaab-Laal Rang (Rose-Red Color):</strong> Neutralizer ki upasthiti ko darshata hai ❌</li>
                <li><strong>Bhoora Rang (Brownish Color):</strong> Shuddh doodh — koi neutralizer nahi ✅</li>
              </ol>
              <p><strong>Sensitivity:</strong> Yeh test 0.05% (500 ppm) se zyada NaOH detect kar sakta hai.</p>
  
              <h4 class="font-semibold mt-3">Vidhi 2: Raakh Ki Kshareeyta Parikshan (Alkalinity of Ash Test)</h4>
              <p><strong>Siddhant:</strong> Jab doodh ko jalaaya jaata hai (ashing), toh uski raakh mein minerals aur unke salts hote hain. Normal doodh ki raakh ki alkalinity ek specific range mein hoti hai. Agar neutralizer milaya gaya hai, toh raakh mein Na compounds ki zyada maatra hogi, jisse alkalinity badh jaayegi.</p>
              <ol class="list-decimal list-inside">
                <li>Ek silica crucible mein 20 ml doodh lein.</li>
                <li>Pehle water bath par paani evaporate karein, phir electric hotplate par char (charring) karein.</li>
                <li>550°C par muffle furnace mein 3-4 ghante tak rakhein jab tak safed/grey raakh na mil jaaye.</li>
                <li>Raakh ko 10 ml distilled water mein dissolve karein.</li>
                <li>Phenolphthalein indicator dalein aur 0.1 N HCl se titrate karein.</li>
                <li><strong>1.2 ml se zyada 0.1 N HCl ka consumption:</strong> Neutralizer ki upasthiti ❌</li>
                <li>Normal doodh: 1.0-1.2 ml 0.1 N HCl (per 20 ml milk)</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Vidhi 3: Vaastaavik Lactic Acid/Lactate Content Ka Nirdharan</h4>
              <p><strong>Siddhant:</strong> Yeh sabse definitive test hai. Agar doodh mein neutralizer milaya gaya hai, toh uski titratable acidity normal ya kam dikhegi (kyunki neutralizer ne acid ko neutralize kar diya), LEKIN vaastaavik lactic acid content zyada hogi (kyunki bacteria ne acid toh banaya hai, neutralizer ne sirf usse neutralize kiya). Is mismatch se neutralization ka pata chalta hai.</p>
              <p><strong>Method:</strong> Spectrophotometric — lactic acid ko oxidize karke acetaldehyde banate hain, jo p-hydroxydiphenyl ke saath baigni rang (violet color) deta hai at 570 nm.</p>
              <ol class="list-decimal list-inside">
                <li>Copper sulphate aur calcium hydroxide se protein-free filtrate taiyaar karein.</li>
                <li>Filtrate ko concentrated H₂SO₄ aur CuSO₄ ke saath heat karein (lactic acid → acetaldehyde).</li>
                <li>p-Hydroxydiphenyl reagent dalein aur 30 minute incubate karein.</li>
                <li>Baigni rang ki intensity 570 nm par spectrophotometer se maaapein.</li>
                <li>Standard curve se lactic acid concentration calculate karein.</li>
                <li><strong>Decision Rule:</strong> Agar titratable acidity normal ya kam hai (≤ 0.14% LA), LEKIN actual lactic acid content > 30 mg/100 ml hai → Neutralization suspected ❌</li>
              </ol>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; BIS:1981; FSSAI Manual; De, S. (2004)</p>
            </div>
          `
        },
        {
          title: 'Boric Acid Aur Borates',
          content: `
            <div class="prose max-w-none prose-blue">
              <p><strong>Vaigyanik Prishthbhoomi:</strong> Boric acid (H₃BO₃) aur borates (jaise sodium tetraborate — borax, Na₂B₄O₇·10H₂O) doodh mein preservative ke roop mein use kiye jaate hain. Boric acid ek weak antiseptic hai jo bacteria ki growth ko inhibit karta hai by interfering with their cell membrane function aur metabolic enzymes. Borax ko kabhi kabhi detergent residue ke roop mein bhi doodh mein contamination ho sakta hai (equipment washing se).</p>
  
              <p><strong>Swasthya Khatre:</strong></p>
              <ul class="list-disc list-inside">
                <li>Acute toxicity: Nausea, vomiting, diarrhea, abdominal cramps</li>
                <li>Chronic exposure: Kidney damage (boric acid kidneys se slowly excrete hota hai aur accumulate hota hai)</li>
                <li><strong>Reproductive toxicity:</strong> Animal studies mein fertility problems, testicular atrophy. WHO/EFSA ne ise reproductive toxicant declare kiya hai.</li>
                <li>Children mein zyada susceptible hain — kam dose bhi harmful ho sakta hai</li>
                <li>LD₅₀ (oral, rat): 2,660 mg/kg body weight</li>
              </ul>
  
              <p><strong>Siddhant:</strong> Boric acid aur borates acidic conditions mein turmeric (haldi) ke curcumin pigment ke saath react karke ek laal-bhoora rang (rosocyanine complex) banate hain. Yeh complex ammonium hydroxide (NH₄OH) ke saath dark blue-green mein badal jaata hai.</p>
  
              <pre class="bg-gray-100 p-2 rounded text-sm">
  H₃BO₃ + Curcumin (Haldi) + HCl → Rosocyanine Complex (RED color)
  Rosocyanine Complex + NH₄OH → Dark Bluish-Green color (CONFIRMATION)
              </pre>
  
              <h4 class="font-semibold mt-3">Prakriya:</h4>
              <ol class="list-decimal list-inside">
                <li>Ek test tube mein 5 ml doodh lein aur 1 ml concentrated HCl dalein.</li>
                <li>Achchi tarah milaaein.</li>
                <li>Haldi kagaz (turmeric paper) ki ek patti duboyein aur nikalein.</li>
                <li>Kagaz ki patti ko room temperature par sukhaaein (direct heat se nahi — warna haldi ka rang change hoga).</li>
                <li>Kagaz par <strong>Laal Rang (Red Color)</strong> ka dikhna boric acid ki upasthiti ko darshata hai ❌</li>
                <li>Confirmation ke liye: Laal kagaz par ammonium hydroxide (dilute NH₄OH) ki ek boond dalein.</li>
                <li>Laal se <strong>Gehra Neela-Hara (Dark Bluish-Green)</strong> mein badalna boric acid ki upasthiti ki PUSHTI karta hai ❌</li>
                <li>Normal doodh mein kagaz peela hi rehta hai ✅</li>
              </ol>
  
              <p><strong>Sensitivity:</strong> Yeh test 500 ppm (0.05%) boric acid detect kar sakta hai.</p>
              <p><strong>FSSAI Limit:</strong> ZERO — kisi bhi maatra mein boric acid/borates allowed nahi hain.</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part II) - 1961; FSSAI Manual; WHO/JECFA Monograph</p>
            </div>
          `
        },
        {
            title: 'Formalin (Formaldehyde — HCHO)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Formaldehyde (HCHO) ek organic compound hai jo sabse simple aldehyde hai. Yeh ek colorless, tez smell wali gas hai jo aqueous solution mein "formalin" ke naam se jaani jaati hai (typically 37-40% formaldehyde by weight). Formalin ko doodh mein illegally isliye milaya jaata hai kyunki yeh ek powerful bactericidal aur bacteriostatic agent hai jo microbial growth ko rok deta hai, jisse doodh ka shelf life artificially badh jaata hai.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards & Toxicology</h4>
                        <ul class="text-red-700">
                            <li><strong>Carcinogenicity:</strong> IARC (International Agency for Research on Cancer) ne formaldehyde ko <strong>Group 1 carcinogen</strong> classify kiya hai — yeh nasopharyngeal cancer aur leukemia ka proven cause hai.</li>
                            <li><strong>Acute Toxicity:</strong> Oral LD₅₀ (rat) = 100 mg/kg body weight. Humans mein 30 ml formalin ka ingestion fatal ho sakta hai.</li>
                            <li><strong>Mechanism of Harm:</strong> Formaldehyde proteins ko cross-link karta hai, DNA ko damage karta hai, aur cellular enzymes ko inactivate karta hai. Yeh gastrointestinal tract ki mucosal lining ko severely damage karta hai.</li>
                            <li><strong>Chronic Exposure Symptoms:</strong> Abdominal pain, vomiting, diarrhea, ulceration of mouth aur stomach, kidney damage, liver cirrhosis, aur nervous system disorders.</li>
                            <li><strong>Reproductive Toxicity:</strong> Animal studies mein formaldehyde exposure se fertility problems aur fetal abnormalities report hui hain.</li>
                            <li><strong>Allergic Reactions:</strong> Skin sensitization, contact dermatitis, aur respiratory allergies commonly reported hain.</li>
                        </ul>
                    </div>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h4 class="text-yellow-800 font-bold">📋 Legal Status & Regulatory Framework</h4>
                        <ul class="text-yellow-700">
                            <li><strong>FSSAI (Food Safety and Standards Authority of India):</strong> Doodh mein formaldehyde ka addition <strong>completely prohibited</strong> hai under FSSAI Act 2006, Section 26.</li>
                            <li><strong>IPC Section 272/273:</strong> Adulteration ke liye imprisonment up to 6 months aur fine.</li>
                            <li><strong>FDA (US):</strong> Formaldehyde ko food preservative ke roop mein GRAS (Generally Recognized As Safe) status nahi diya gaya hai.</li>
                            <li><strong>Codex Alimentarius:</strong> Doodh mein formaldehyde ka koi bhi permissible limit nahi hai — zero tolerance policy.</li>
                            <li><strong>EU Regulations:</strong> EU mein bhi dairy products mein formaldehyde ka use strictly banned hai.</li>
                        </ul>
                    </div>
    
                    <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                        <h4 class="text-purple-800 font-bold">🧪 Formaldehyde Ka Doodh Mein Chemical Behavior</h4>
                        <p class="text-purple-700">Formaldehyde doodh mein add karne par casein proteins ke amino groups (-NH₂) ke saath react karta hai aur methylene bridges (-N=CH₂) form karta hai. Yeh process:</p>
                        <ul class="text-purple-700">
                            <li>Protein denaturation cause karta hai</li>
                            <li>Bacterial enzymes ko inactivate karta hai</li>
                            <li>Doodh ki natural souring process ko rok deta hai</li>
                            <li>Doodh ki consistency mein subtle changes laata hai</li>
                            <li>Doodh ka natural flavor mask ho jaata hai</li>
                        </ul>
                        <p class="text-purple-700 mt-2"><strong>Chemical Reaction:</strong></p>
                        <pre class="bg-purple-100 p-2 rounded"><code>R-NH₂ + HCHO → R-N=CH₂ + H₂O (Schiff base formation)
    2 R-NH₂ + HCHO → R-NH-CH₂-NH-R + H₂O (Methylene bridge cross-linking)</code></pre>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 1: Leach Test (Hehner Test / Sulphuric Acid Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Formaldehyde concentrated sulphuric acid (H₂SO₄) ki presence mein ferric salts (Fe³⁺) ke saath react karke ek characteristic <strong>violet/purple color</strong> produce karta hai. Yeh reaction actually Marquis reaction ka ek variant hai. Formaldehyde aromatic compounds (jo doodh ke proteins mein present hain, jaise tryptophan aur tyrosine amino acid residues) ke saath condensation reaction undergo karta hai, aur concentrated H₂SO₄ ek oxidizing agent aur dehydrating agent dono ki tarah kaam karta hai. Ferric chloride (FeCl₃) ek catalyst ka kaam karta hai jo reaction ki sensitivity ko badhaata hai.</p>
                        
                        <p class="mt-2"><strong>Detailed Chemical Mechanism:</strong></p>
                        <ul>
                            <li>Step 1: H₂SO₄ proteins ko hydrolyze karta hai, free amino acids release hote hain</li>
                            <li>Step 2: HCHO tryptophan ke indole ring ke saath electrophilic substitution karta hai</li>
                            <li>Step 3: Fe³⁺ ions oxidation catalyst ka kaam karte hain</li>
                            <li>Step 4: Resultant conjugated compound violet/purple color dikhata hai</li>
                        </ul>
                    </div>
                    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>Concentrated Hydrochloric Acid (HCl) — AR grade, 36-38%</li>
                        <li>10% Ferric Chloride solution (FeCl₃) — freshly prepared</li>
                        <li>Detecting reagent: 100 ml conc. HCl + 2 ml 10% FeCl₃ solution mix karein</li>
                        <li>Boiling water bath</li>
                        <li>Clean, dry test tubes (Borosilicate glass preferred)</li>
                        <li>Positive control: doodh + known amount of formalin (0.1%)</li>
                        <li>Negative control: pure, unadulterated doodh</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>Sample Preparation:</strong> Ek clean, dry test tube mein approximately <strong>5 ml doodh ka sample</strong> lein. Sample fresh hona chahiye aur room temperature par hona chahiye.</li>
                        <li><strong>Reagent Addition:</strong> Isme <strong>equal volume (5 ml) detecting reagent</strong> (concentrated HCl + 10% FeCl₃ solution ka mixture) daalein. Reagent ko slowly, tube ki wall ke along slide karte hue add karein — ek direct stream mein mat daalein taaki layers properly ban sakein.</li>
                        <li><strong>Heating:</strong> Test tube ko dheere se <strong>boiling water bath mein 3-4 minutes</strong> ke liye rakhein. Tube ko intermittently gentle swirling se mix karein, lekin vigorously shake mat karein. Water bath ka temperature 95-100°C hona chahiye.</li>
                        <li><strong>Observation:</strong> Tube ko water bath se carefully nikaalein aur white background ke against color observe karein.</li>
                        <li><strong>Comparison:</strong> Result ko positive control aur negative control ke saath compare karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Color Developed</th>
                                    <th class="border p-2">Inference</th>
                                    <th class="border p-2">Approximate Concentration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2">No color change</td>
                                    <td class="border p-2">White/Cream (doodh ka natural color)</td>
                                    <td class="border p-2">Formalin <strong>ABSENT</strong> — Sample pure hai</td>
                                    <td class="border p-2">0% (Not detected)</td>
                                </tr>
                                <tr class="bg-red-50">
                                    <td class="border p-2">Faint color change</td>
                                    <td class="border p-2">Light brownish-pink</td>
                                    <td class="border p-2">Formalin ki <strong>TRACE AMOUNT</strong> present hai</td>
                                    <td class="border p-2">< 0.05%</td>
                                </tr>
                                <tr class="bg-red-100">
                                    <td class="border p-2">Distinct color change</td>
                                    <td class="border p-2"><strong>Brownish-pink to violet</strong></td>
                                    <td class="border p-2">Formalin <strong>PRESENT</strong> — Confirmed positive</td>
                                    <td class="border p-2">0.05 - 0.2%</td>
                                </tr>
                                <tr class="bg-red-200">
                                    <td class="border p-2">Strong color</td>
                                    <td class="border p-2"><strong>Deep violet/purple</strong></td>
                                    <td class="border p-2">Formalin ki <strong>HIGH CONCENTRATION</strong> present hai</td>
                                    <td class="border p-2">> 0.2%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Important Notes:</strong></p>
                        <ul>
                            <li>Control sample (pure doodh) hamesha simultaneously test karein comparison ke liye</li>
                            <li>Conc. HCl highly corrosive hai — gloves aur eye protection use karein</li>
                            <li>Test fume hood mein perform karein kyunki HCl fumes hazardous hain</li>
                            <li>Ferric chloride solution freshly prepared hona chahiye — purana solution false results de sakta hai</li>
                            <li>Sensitivity: approximately 1:250,000 dilution tak detect kar sakta hai</li>
                            <li>Yeh test qualitative hai — exact quantification ke liye spectrophotometric methods use karein</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 2: Chromotropic Acid Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Formaldehyde <strong>chromotropic acid</strong> (4,5-dihydroxy-2,7-naphthalenedisulfonic acid, disodium salt) ke saath concentrated sulphuric acid ki presence mein react karke ek <strong>stable violet-purple color</strong> produce karta hai. Yeh reaction highly specific hai formaldehyde ke liye aur other aldehydes se interfere nahi hoti. Chemical mechanism mein formaldehyde do chromotropic acid molecules ke saath condensation karta hai, forming a di-substituted product jo concentrated H₂SO₄ mein oxidize hoke characteristic violet chromophore deta hai.</p>
                        
                        <p class="mt-2"><strong>Chemical Reaction:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>2 Chromotropic Acid + HCHO → Condensation Product (Violet)
                        
    Reaction Conditions: Concentrated H₂SO₄, 60-100°C, 15-30 min</code></pre>
                        
                        <p class="mt-2"><strong>Advantages over Leach Test:</strong></p>
                        <ul>
                            <li>Higher specificity — formaldehyde ke liye highly selective hai</li>
                            <li>Kam interfering substances — acetaldehyde, acetone se interfere nahi hota</li>
                            <li>Better sensitivity — lower concentrations detect kar sakta hai</li>
                            <li>Color stable hai — 1-2 hours tak consistent rehta hai</li>
                        </ul>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>Chromotropic acid disodium salt (C₁₀H₆Na₂O₈S₂·2H₂O) — 1% aqueous solution freshly prepared</li>
                        <li>Concentrated Sulphuric Acid (H₂SO₄) — AR grade, 98%</li>
                        <li>Alternative: Chromotropic acid reagent = 50 mg chromotropic acid dissolved in 1 ml water + 5 ml conc. H₂SO₄</li>
                        <li>Boiling water bath (95-100°C)</li>
                        <li>Clean test tubes, pipettes</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>Sample Preparation:</strong> Ek clean test tube mein <strong>1 ml doodh ka sample</strong> lein.</li>
                        <li><strong>Reagent Addition:</strong> <strong>1 ml chromotropic acid reagent</strong> (1% solution) daalein aur <strong>gently mix</strong> karein by swirling.</li>
                        <li><strong>Acid Addition:</strong> Tube ki wall ke along <strong>2 ml concentrated H₂SO₄</strong> slowly add karein. Yeh step bahut carefully karna hai kyunki reaction exothermic hai.</li>
                        <li><strong>Heating:</strong> Tube ko <strong>boiling water bath mein 15-20 minutes</strong> ke liye rakhein.</li>
                        <li><strong>Cooling:</strong> Tube ko bath se nikaal kar <strong>room temperature tak cool</strong> hone dein.</li>
                        <li><strong>Observation:</strong> Color change observe karein white background ke against.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2">No color / White remains</td>
                                    <td class="border p-2">Formalin <strong>ABSENT</strong> — Control sample bhi same dikhega</td>
                                </tr>
                                <tr class="bg-yellow-50">
                                    <td class="border p-2"><strong>Yellow color</strong> develops</td>
                                    <td class="border p-2">Formalin ki <strong>LOW CONCENTRATION</strong> present — Suspicious result, confirmatory test needed</td>
                                </tr>
                                <tr class="bg-red-50">
                                    <td class="border p-2"><strong>Violet/Purple color</strong> develops</td>
                                    <td class="border p-2">Formalin <strong>CONFIRMED PRESENT</strong> — Sample adulterated hai</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 3: Hehner's Test (Ring Test / Layer Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Jab formaldehyde-containing doodh ko carefully concentrated sulphuric acid par layer kiya jaata hai, toh dono liquids ke junction (interface) par ek <strong>violet/purple ring</strong> form hota hai. Yeh ring proteins ke amino acids (especially tryptophan) ke formaldehyde ke saath reaction se produce hoti hai jo concentrated H₂SO₄ ke dehydrating aur oxidizing environment mein hota hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Ek clean test tube mein <strong>2-3 ml concentrated H₂SO₄</strong> lein.</li>
                        <li>Test tube ko approximately <strong>45° angle</strong> par tilt karein.</li>
                        <li>Ek pipette se <strong>2-3 ml doodh ka sample</strong> bahut dheere se sulphuric acid ki surface par layer karein — dono layers mix nahi honi chahiye.</li>
                        <li>Tube ko dheere se <strong>upright position</strong> mein laayein.</li>
                        <li><strong>2-5 minutes wait</strong> karein aur interface ko observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Violet/Purple ring at interface:</strong> Formalin PRESENT</li>
                        <li><strong>Brown ring (doodh proteins ka normal reaction):</strong> Formalin ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 4: Schiff's Reagent Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Schiff's reagent (decolorized fuchsin / rosaniline hydrochloride treated with SO₂) formaldehyde ke saath react karke ek characteristic <strong>magenta/pink-purple color</strong> produce karta hai. Yeh test aldehydes ke liye classical test hai. Schiff's reagent mein SO₂ ne fuchsin dye ko colorless bana diya hai; jab formaldehyde isse react karta hai, toh ek colored aldehyde-bisulfite-dye complex banta hai jo color restore karta hai. Importantly, ketones is test mein negative result dete hain, making it specific for aldehydes.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Doodh ka <strong>protein-free filtrate</strong> prepare karein: 5 ml doodh + 5 ml 20% TCA, mix karein, filter karein.</li>
                        <li><strong>2 ml filtrate</strong> ek clean test tube mein lein.</li>
                        <li><strong>2 ml Schiff's reagent</strong> add karein.</li>
                        <li><strong>10-15 minutes</strong> room temperature par stand karne dein.</li>
                        <li>Color observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Pink to magenta/purple color:</strong> Formalin PRESENT</li>
                        <li><strong>Colorless remains:</strong> Formalin ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 5: Nash Reagent Method (Quantitative — Spectrophotometric)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Yeh ek <strong>quantitative method</strong> hai jo formaldehyde ki exact concentration determine karta hai. Formaldehyde <strong>acetylacetone (2,4-pentanedione)</strong> aur <strong>ammonia</strong> ke saath react karke <strong>3,5-diacetyl-1,4-dihydrolutidine (DDL)</strong> banata hai, jo ek yellow compound hai. Is reaction ko <strong>Hantzsch reaction</strong> kehte hain. Yellow color ki intensity formaldehyde concentration ke directly proportional hoti hai aur <strong>412 nm</strong> par spectrophotometrically measure ki jaati hai.</p>
                        
                        <p class="mt-2"><strong>Chemical Equation:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>HCHO + 2 CH₃COCH₂COCH₃ + NH₃ → DDL (Yellow, λmax = 412 nm) + 3 H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Doodh ka protein-free filtrate prepare karein using TCA precipitation.</li>
                        <li>Filtrate ko Nash reagent (ammonium acetate + acetic acid + acetylacetone) ke saath mix karein.</li>
                        <li>60°C par 10 minutes incubate karein.</li>
                        <li>Cool karein aur 412 nm par absorbance read karein.</li>
                        <li>Standard curve se formaldehyde concentration calculate karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Detection Limit:</h5>
                    <p>0.1 ppm (parts per million) tak detect kar sakta hai — bahut sensitive method hai.</p>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 6: Rapid Strip Test (Field Method)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Commercially available formalin detection strips/kits jo chromotropic acid ya similar reagents par based hain. Yeh ready-to-use strips hain jo field conditions mein bina sophisticated equipment ke use ki ja sakti hain.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Detection strip ko doodh ke sample mein <strong>30 seconds</strong> ke liye dip karein.</li>
                        <li>Strip ko nikaalein aur <strong>2-5 minutes</strong> wait karein.</li>
                        <li>Strip ka color kit mein provided <strong>reference color chart</strong> se compare karein.</li>
                    </ol>
    
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                        <h4 class="text-green-800 font-bold">✅ Best Practices & Quality Assurance</h4>
                        <ul class="text-green-700">
                            <li>Har test mein <strong>positive control</strong> (doodh + known formalin) aur <strong>negative control</strong> (pure doodh) zaroor include karein</li>
                            <li>At least <strong>2 methods</strong> se confirmation karein — single test par rely mat karein</li>
                            <li>Reagents ki <strong>expiry date</strong> check karein — expired reagents false negatives de sakte hain</li>
                            <li>Results ko properly <strong>document</strong> karein — date, time, method, result, analyst name sab record karein</li>
                            <li>Contested cases mein sample ko <strong>NABL accredited lab</strong> mein bhejein quantitative analysis ke liye</li>
                            <li>Formaldehyde volatile hai — samples ko <strong>sealed containers</strong> mein store karein aur jaldi test karein</li>
                        </ul>
                    </div>
    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mt-4">
                        <h4 class="text-indigo-800 font-bold">📊 Comparison of All Methods</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse border">
                                <thead>
                                    <tr class="bg-indigo-100">
                                        <th class="border p-2">Method</th>
                                        <th class="border p-2">Type</th>
                                        <th class="border p-2">Sensitivity</th>
                                        <th class="border p-2">Specificity</th>
                                        <th class="border p-2">Time Required</th>
                                        <th class="border p-2">Equipment Needed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="border p-2">Leach Test</td><td class="border p-2">Qualitative</td><td class="border p-2">Moderate</td><td class="border p-2">Moderate</td><td class="border p-2">5-10 min</td><td class="border p-2">Basic lab</td></tr>
                                    <tr><td class="border p-2">Chromotropic Acid</td><td class="border p-2">Qualitative</td><td class="border p-2">High</td><td class="border p-2">High</td><td class="border p-2">20-25 min</td><td class="border p-2">Basic lab</td></tr>
                                    <tr><td class="border p-2">Hehner's Ring</td><td class="border p-2">Qualitative</td><td class="border p-2">Moderate</td><td class="border p-2">Moderate</td><td class="border p-2">5 min</td><td class="border p-2">Minimal</td></tr>
                                    <tr><td class="border p-2">Schiff's Reagent</td><td class="border p-2">Qualitative</td><td class="border p-2">High</td><td class="border p-2">Moderate</td><td class="border p-2">15-20 min</td><td class="border p-2">Basic lab</td></tr>
                                    <tr><td class="border p-2">Nash (Hantzsch)</td><td class="border p-2">Quantitative</td><td class="border p-2">Very High</td><td class="border p-2">Very High</td><td class="border p-2">30-45 min</td><td class="border p-2">Spectrophotometer</td></tr>
                                    <tr><td class="border p-2">Rapid Strip</td><td class="border p-2">Semi-quantitative</td><td class="border p-2">Moderate</td><td class="border p-2">Moderate</td><td class="border p-2">2-5 min</td><td class="border p-2">None (kit)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual of Methods of Analysis of Foods — Milk and Milk Products (2015), AOAC Official Methods, Codex Alimentarius CAC/RCP 57-2004</p>
                </div>
            `
        },
        {
            title: 'Hydrogen Peroxide (H₂O₂)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Hydrogen Peroxide (H₂O₂) ek strong oxidizing agent hai jo molecular formula H₂O₂ ke saath jaana jaata hai. Yeh ek colorless liquid hai jo doodh mein illegally add kiya jaata hai kyunki yeh ek effective bactericidal agent hai. H₂O₂ ka mechanism — yeh reactive oxygen species (ROS) generate karta hai jo bacterial cell membranes, DNA, aur enzymes ko damage karte hain, jisse bacteria ki growth ruk jaati hai aur doodh ka apparent shelf life badh jaata hai.</p>
                        <p class="text-blue-700 mt-2">Fresh doodh mein naturally ek enzyme <strong>lactoperoxidase</strong> hota hai jo trace amounts of H₂O₂ ke saath thiocyanate (SCN⁻) ko antimicrobial hypothiocyanite (OSCN⁻) mein convert karta hai — yeh <strong>Lactoperoxidase System (LP System)</strong> hai. Lekin externally added H₂O₂ ka level is natural system se bahut zyada hota hai aur health hazards create karta hai.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Gastrointestinal Irritation:</strong> H₂O₂ ingestion se stomach aur intestinal mucosal lining mein irritation aur ulceration ho sakti hai</li>
                            <li><strong>Oxidative Stress:</strong> ROS cellular damage cause karte hain — lipid peroxidation, protein oxidation, DNA damage</li>
                            <li><strong>Nutritional Destruction:</strong> H₂O₂ doodh mein Vitamin C (ascorbic acid), Vitamin B₁ (thiamine), aur other antioxidants ko destroy karta hai</li>
                            <li><strong>Enzyme Destruction:</strong> Natural beneficial enzymes like lipase, phosphatase destroy ho jaate hain</li>
                            <li><strong>Gas Embolism Risk:</strong> High concentration ingestion se stomach mein O₂ gas rapidly release hota hai jo dangerous hai</li>
                        </ul>
                    </div>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h4 class="text-yellow-800 font-bold">📋 Legal Status</h4>
                        <p class="text-yellow-700">FSSAI ke under doodh mein H₂O₂ ka addition <strong>strictly prohibited</strong> hai. Codex Alimentarius ne sirf LP System activation ke liye controlled conditions mein very low concentrations (≤30 ppm) ki limited permission di hai — yeh bhi sirf un areas mein jahan refrigeration available nahi hai aur proper regulatory oversight hai. India mein general commercial doodh mein yeh bhi allowed nahi hai.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 1: Para-Phenylenediamine (PPD) Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Hydrogen peroxide ek strong oxidizer hai. Doodh mein naturally present enzyme <strong>lactoperoxidase</strong> (ya exogenously added peroxidase) H₂O₂ ko decompose karta hai aur is process mein nascent oxygen [O] release karta hai. Yeh nascent oxygen <strong>para-phenylenediamine (PPD)</strong> ko oxidize karta hai — PPD ek aromatic amine hai jo oxidized hone par apna color yellow se <strong>blue/indigo</strong> mein change karta hai (Bandrowski's base formation). Isliye is test mein raw doodh ko mix kiya jaata hai taaki lactoperoxidase enzyme provide ho sake jo H₂O₂ ki detection facilitate kare.</p>
                        
                        <p class="mt-2"><strong>Chemical Reaction:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>H₂O₂ + Lactoperoxidase → H₂O + [O] (Nascent Oxygen)
    3 PPD (reduced, colorless/yellow) + 2[O] → Bandrowski's Base (Blue/Purple) + 2H₂O</code></pre>
                        
                        <p class="mt-2"><strong>Note:</strong> Is test mein raw doodh ki zarurat hoti hai kyunki pasteurized doodh mein lactoperoxidase inactivated ho chuki hoti hai. Agar tested sample pasteurized hai, toh exogenous peroxidase (jaise horseradish peroxidase) use ki ja sakti hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>2% Para-phenylenediamine dihydrochloride solution (freshly prepared in distilled water)</li>
                        <li>Raw (unpasteurized) doodh — lactoperoxidase enzyme source ke roop mein</li>
                        <li>Clean test tubes, dropper/pipette</li>
                        <li>Positive control: raw doodh + 0.1% H₂O₂</li>
                        <li>Negative control: pure raw doodh</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>2 ml suspected doodh sample</strong> lein.</li>
                        <li>Isme <strong>2 ml known pure raw doodh</strong> (enzyme source) add karein aur gently mix karein.</li>
                        <li><strong>2% para-phenylenediamine solution ki 2-3 drops</strong> daalein.</li>
                        <li>Tube ko <strong>acchhi tarah se shake</strong> karein aur <strong>2-5 minutes</strong> observe karein.</li>
                        <li>Color development note karein aur controls se compare karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2">No significant color change / slight yellowish</td>
                                    <td class="border p-2">H₂O₂ <strong>ABSENT</strong></td>
                                </tr>
                                <tr class="bg-red-50">
                                    <td class="border p-2"><strong>Blue/Indigo color</strong> develops within 2-5 minutes</td>
                                    <td class="border p-2">H₂O₂ <strong>PRESENT</strong> — Sample adulterated hai</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 2: Potassium Iodide (KI) and Starch Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Yeh ek classic iodometric detection method hai. H₂O₂ ek oxidizer hai jo <strong>potassium iodide (KI)</strong> ko oxidize karke <strong>free iodine (I₂)</strong> release karta hai. Released iodine phir <strong>starch</strong> ke saath react karke ek <strong>characteristic deep blue-black complex</strong> banata hai (starch-iodine complex). Yeh complex actually iodine molecules ka starch ke amylose helical structure mein inclusion compound hai.</p>
                        
                        <p class="mt-2"><strong>Chemical Reactions:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Step 1: H₂O₂ + 2KI → I₂ + 2KOH (Oxidation of iodide to iodine)
    Step 2: I₂ + Starch → Blue-Black Complex (Iodine trapped in amylose helix)
    
    Net: H₂O₂ + 2KI + Starch → Blue-Black Color + 2KOH</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>Potassium Iodide-Starch reagent: 1% KI + 1% soluble starch in distilled water</li>
                        <li>Alternative: Separate 2% KI solution + 1% starch solution</li>
                        <li>Dilute sulphuric acid (2N H₂SO₄) — optional, sensitivity badhane ke liye</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>5 ml doodh sample</strong> lein.</li>
                        <li><strong>1 ml KI-starch reagent</strong> add karein (ya separately 0.5 ml 2% KI + 0.5 ml 1% starch).</li>
                        <li>Optional: <strong>2-3 drops dilute H₂SO₄</strong> add karein — yeh acidic pH par reaction ki sensitivity badhata hai.</li>
                        <li><strong>Gently mix</strong> karein aur <strong>2-5 minutes</strong> observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue-black color:</strong> H₂O₂ PRESENT</li>
                        <li><strong>No blue color:</strong> H₂O₂ ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 3: Vanadium Pentoxide (V₂O₅) Catalytic Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Vanadium pentoxide H₂O₂ ke saath react karke ek <strong>red-brown colored pervanadic acid (HVO₄)</strong> banata hai. Yeh test H₂O₂ ke liye highly sensitive hai aur interferents se kam affected hota hai.</p>
                        <pre class="bg-gray-100 p-2 rounded"><code>V₂O₅ + 3H₂O₂ → 2HVO₄ (red-brown) + 2H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>5 ml doodh mein 5 ml 10% TCA add karein aur filter karein.</li>
                        <li>Filtrate mein kuch drops 1% V₂O₅ (dilute H₂SO₄ mein dissolved) add karein.</li>
                        <li><strong>Red-brown color:</strong> H₂O₂ PRESENT</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 4: Titanium Sulphate Method (Quantitative)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> H₂O₂ titanium(IV) ions ke saath react karke ek <strong>yellow-orange pertitanic acid complex</strong> banata hai jo 410 nm par spectrophotometrically measure hota hai. Yeh quantitative method hai.</p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Ti⁴⁺ + H₂O₂ + 2H₂O → H₂TiO₄ (yellow) + 4H⁺</code></pre>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-4">
                        <p><strong>⚠️ Important Considerations:</strong></p>
                        <ul>
                            <li>H₂O₂ unstable hai aur time ke saath decompose hoti hai — samples jaldi test karein</li>
                            <li>Doodh mein natural catalase enzyme H₂O₂ ko decompose karta hai — delay se false negative aa sakta hai</li>
                            <li>Pasteurized doodh mein catalase inactivated hoti hai toh H₂O₂ zyada persist karti hai</li>
                            <li>Some bacteria (catalase-positive) bhi H₂O₂ decompose kar sakte hain</li>
                            <li>PPD test ke liye raw doodh zaruri hai — pasteurized mein enzyme nahi hota</li>
                            <li>Light aur heat H₂O₂ decomposition accelerate karte hain — samples dark, cool conditions mein rakhein</li>
                        </ul>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual (2015), AOAC 957.08, Codex Alimentarius</p>
                </div>
            `
        },
        {
            title: 'Salicylic Acid aur Benzoic Acid',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700"><strong>Salicylic Acid (C₇H₆O₃, 2-Hydroxybenzoic acid)</strong> aur <strong>Benzoic Acid (C₇H₆O₂, Benzenecarboxylic acid)</strong> dono organic acids hain jo antimicrobial properties rakhte hain. Yeh doodh mein illegally add kiye jaate hain doodh ko preserve karne ke liye.</p>
                        <ul class="text-blue-700 mt-2">
                            <li><strong>Salicylic Acid:</strong> Aspirin (acetylsalicylic acid) ka active metabolite hai. Yeh bacteria ki cell wall synthesis inhibit karta hai aur prostaglandin synthesis bhi block karta hai.</li>
                            <li><strong>Benzoic Acid:</strong> Yeh acidic foods mein microbial growth inhibit karta hai by disrupting the proton motive force across bacterial cell membranes. Sodium benzoate (its salt) commonly use hota hai.</li>
                        </ul>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Salicylic Acid:</strong> GI irritation, Reye's syndrome risk (especially children mein), tinnitus, metabolic acidosis, hypoglycemia</li>
                            <li><strong>Benzoic Acid:</strong> Allergic reactions (urticaria, asthma), hyperactivity in children, potential benzene formation jab Vitamin C ke saath react kare</li>
                            <li><strong>Chronic Exposure:</strong> Kidney damage, liver toxicity</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Method: Ferric Chloride Test (Ether Extraction Method)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Dono acids ko pehle doodh se <strong>ether extraction</strong> se isolate kiya jaata hai (kyunki yeh organic acids ether mein soluble hain). Phir extracted residue ko <strong>ferric chloride (FeCl₃)</strong> ke saath react karaya jaata hai. <strong>Salicylic acid</strong> apne phenolic -OH group ki wajah se Fe³⁺ ke saath ek stable <strong>violet/purple chelate complex</strong> banata hai. <strong>Benzoic acid</strong> Fe³⁺ ke saath ek <strong>salmon/buff colored precipitate</strong> (ferric benzoate) banata hai.</p>
                        
                        <p class="mt-2"><strong>Chemical Reactions:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Salicylic Acid: 3 C₇H₅(OH)COO⁻ + Fe³⁺ → [Fe(C₇H₄(OH)COO)₃] (Violet complex)
    Benzoic Acid: 3 C₆H₅COO⁻ + Fe³⁺ → Fe(C₆H₅COO)₃↓ (Salmon precipitate)</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>Acidification:</strong> <strong>10 ml doodh</strong> lein aur <strong>2-3 drops concentrated HCl</strong> se acidify karein (pH ~2). Yeh step acids ko ionized form se protonated (uncharged) form mein convert karta hai, making them ether-soluble.</li>
                        <li><strong>Ether Extraction:</strong> <strong>15-20 ml diethyl ether</strong> add karein, tube ko stopper se close karein aur <strong>vigorously shake</strong> karein 2 minutes tak. Layers separate hone dein — ether (upper layer) mein acids extract ho jaayenge.</li>
                        <li><strong>Evaporation:</strong> Upper ether layer ko carefully ek clean evaporating dish mein pipette karein aur <strong>ether ko evaporate</strong> hone dein (water bath par — direct flame NEVER use karein kyunki ether highly flammable hai! Flash point: -45°C).</li>
                        <li><strong>Dissolution:</strong> Residue ko <strong>2-3 ml distilled water</strong> mein dissolve karein.</li>
                        <li><strong>Detection:</strong> <strong>0.5% neutral ferric chloride solution ki 3-5 drops</strong> add karein aur color observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Adulterant</th>
                                    <th class="border p-2">Color with FeCl₃</th>
                                    <th class="border p-2">Appearance</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">None (pure doodh)</td><td class="border p-2">Light yellow (FeCl₃ ka natural color)</td><td class="border p-2">Clear solution</td><td class="border p-2">No preservative detected</td></tr>
                                <tr class="bg-purple-50"><td class="border p-2">Salicylic Acid</td><td class="border p-2"><strong>Violet/Purple</strong></td><td class="border p-2">Clear colored solution</td><td class="border p-2">Salicylic acid PRESENT</td></tr>
                                <tr class="bg-orange-50"><td class="border p-2">Benzoic Acid</td><td class="border p-2"><strong>Salmon/Buff</strong></td><td class="border p-2">Colored precipitate</td><td class="border p-2">Benzoic acid PRESENT</td></tr>
                                <tr class="bg-red-50"><td class="border p-2">Dono present</td><td class="border p-2">Violet tint with precipitate</td><td class="border p-2">Colored solution + precipitate</td><td class="border p-2">Dono acids PRESENT</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Safety Precautions:</strong></p>
                        <ul>
                            <li>Diethyl ether <strong>extremely flammable</strong> hai — koi open flame nearby nahi honi chahiye</li>
                            <li>Ether ko <strong>fume hood</strong> mein handle karein — vapors narcotic hain</li>
                            <li>FeCl₃ solution <strong>"neutral"</strong> hona chahiye — excess acid false results de sakta hai</li>
                            <li>Ether evaporation water bath par karein (temperature < 40°C), electric hot plate par NAHI</li>
                        </ul>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), AOAC Official Methods</p>
                </div>
            `
        },
        {
            title: 'Hypochlorites aur Chloramines',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700"><strong>Sodium Hypochlorite (NaOCl)</strong> commonly bleach ke naam se jaana jaata hai, aur <strong>Chloramines (NH₂Cl, NHCl₂)</strong> dono strong oxidizing aur disinfecting agents hain. Yeh kabhi-kabhi doodh mein milaye jaate hain taaki bacterial contamination chhupayi ja sake aur doodh ki apparent quality maintain ho. Chlorine-based compounds microbial cells ke proteins aur enzymes ko oxidize karke bacteria ko kill karte hain.</p>
                        <ul class="text-blue-700 mt-2">
                            <li><strong>Hypochlorites:</strong> NaOCl → Na⁺ + OCl⁻; OCl⁻ (hypochlorite ion) strong oxidizer hai</li>
                            <li><strong>Available Chlorine:</strong> HOCl (hypochlorous acid) actual antimicrobial species hai — yeh bacterial cell mein penetrate karke enzymes oxidize karta hai</li>
                            <li><strong>Chloramines:</strong> NH₂Cl slower-acting lekin longer-lasting antimicrobial agent hai</li>
                        </ul>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li>GI tract irritation aur damage</li>
                            <li>Chlorinated organic byproducts (Trihalomethanes — THMs) ka formation jo <strong>carcinogenic</strong> hain</li>
                            <li>Doodh ke nutritional components (vitamins, proteins) ka destruction</li>
                            <li>Allergic reactions</li>
                            <li>Chlorine doodh mein present organic matter ke saath react karke <strong>chloroform (CHCl₃)</strong> jaise toxic compounds bana sakta hai</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Method: Potassium Iodide-Starch Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Hypochlorites aur chloramines strong oxidizers hain jo <strong>potassium iodide (KI)</strong> ko oxidize karke <strong>free iodine (I₂)</strong> release karte hain. Released iodine phir <strong>starch indicator</strong> ke saath blue-black complex banata hai. Acidic conditions mein reaction faster hoti hai.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>NaOCl + 2KI → I₂ + NaCl + K₂O
    OR: OCl⁻ + 2I⁻ + 2H⁺ → I₂ + Cl⁻ + H₂O
    Then: I₂ + Starch → Blue-Black Complex
    
    For Chloramine:
    NH₂Cl + 2KI + H₂O → I₂ + NH₃ + KCl + KOH</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>5 ml doodh</strong> lein.</li>
                        <li><strong>1.5 ml 7% potassium iodide (KI) solution</strong> add karein aur gently mix karein.</li>
                        <li><strong>4 ml dilute HCl (2N)</strong> add karein aur mix karein — yeh acidic condition reaction ko accelerate karti hai aur sensitivity badhati hai.</li>
                        <li><strong>3-5 minutes</strong> stand karne dein aur color observe karein.</li>
                        <li>Confirmation ke liye: <strong>1% starch solution ki 1 ml</strong> add karein — agar iodine released hai toh blue-black color aayega.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">No color change / milky white</td><td class="border p-2">Hypochlorite/Chloramine <strong>ABSENT</strong></td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2"><strong>Yellowish-brown color</strong></td><td class="border p-2">Low level of oxidizing agent <strong>PRESENT</strong></td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Deep mauve to dark brown/blue-black</strong> (with starch)</td><td class="border p-2">Significant amount of hypochlorite/chloramine <strong>CONFIRMED PRESENT</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Important Notes:</strong></p>
                        <ul>
                            <li>Yeh test H₂O₂ ke liye bhi positive de sakta hai — isliye differentiation ke liye separate H₂O₂ test bhi karein</li>
                            <li>Chlorine compounds volatile hain — sample jaldi test karein, delay se false negative aa sakta hai</li>
                            <li>High fat content interference cause kar sakta hai — skim doodh portion use karna better hai</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            title: 'Antibiotics aur Drug Residues (Additional Topic)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Antibiotic residues doodh mein tab aate hain jab dairy animals ko mastitis ya other infections ke treatment ke dauraan antibiotics diye jaate hain aur sufficient withdrawal period observe nahi kiya jaata. Common antibiotics jo doodh mein detect hote hain: <strong>Beta-lactams (Penicillin, Amoxicillin, Ampicillin)</strong>, <strong>Tetracyclines (Oxytetracycline)</strong>, <strong>Sulfonamides (Sulfamethazine)</strong>, <strong>Aminoglycosides (Streptomycin, Gentamicin)</strong>, <strong>Quinolones (Enrofloxacin)</strong>.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Antibiotic Resistance:</strong> Sabse bada public health concern — low-level chronic exposure se antibiotic-resistant bacteria develop hote hain (AMR — Antimicrobial Resistance)</li>
                            <li><strong>Allergic Reactions:</strong> Penicillin-sensitive individuals mein anaphylaxis ka risk</li>
                            <li><strong>Gut Microbiome Disruption:</strong> Beneficial gut bacteria ka imbalance</li>
                            <li><strong>Carcinogenicity:</strong> Kuch antibiotics ke metabolites potentially carcinogenic hain</li>
                            <li><strong>Dairy Industry Impact:</strong> Antibiotic residues starter cultures ko inhibit karte hain — curd, yogurt, cheese manufacturing fail ho jaata hai</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Methods:</h4>
    
                    <h5 class="font-semibold mt-3">Method 1: Brilliant Black Reduction Test (BRT) / Delvotest</h5>
                    <p><strong>Principle:</strong> Yeh test Bacillus stearothermophilus var. calidolactis ke spores use karta hai. Agar doodh mein antibiotics hain toh bacterial growth inhibit hogi aur agar indicator (bromocresol purple) ka color change nahi hoga (purple remains). Normal doodh mein bacteria grow hote hain, acid produce hote hain, aur indicator yellow ho jaata hai.</p>
                    <ol>
                        <li>Ampoule mein doodh sample daalein jo bacterial spores aur nutrient medium contain karta hai</li>
                        <li>64°C par 2.5-3 hours incubate karein</li>
                        <li><strong>Yellow:</strong> Antibiotics ABSENT (bacteria grew normally)</li>
                        <li><strong>Purple:</strong> Antibiotics PRESENT (bacterial growth inhibited)</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Method 2: SNAP Test (Rapid Immunoassay)</h5>
                    <p><strong>Principle:</strong> Competitive enzyme-linked immunoassay jo specific antibiotics ke liye antibodies use karta hai. Results 10 minutes mein milte hain.</p>
    
                    <h5 class="font-semibold mt-3">Method 3: HPLC/LC-MS/MS (Confirmatory)</h5>
                    <p><strong>Principle:</strong> High-Performance Liquid Chromatography coupled with tandem Mass Spectrometry — gold standard confirmatory method jo individual antibiotics ko identify aur quantify karta hai ng/ml level tak.</p>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                        <h4 class="text-yellow-800 font-bold">📋 FSSAI Maximum Residue Limits (MRLs)</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse border">
                                <thead>
                                    <tr class="bg-yellow-100">
                                        <th class="border p-2">Antibiotic</th>
                                        <th class="border p-2">MRL (µg/kg or ppb)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="border p-2">Tetracyclines (sum)</td><td class="border p-2">100</td></tr>
                                    <tr><td class="border p-2">Penicillin G</td><td class="border p-2">4</td></tr>
                                    <tr><td class="border p-2">Amoxicillin</td><td class="border p-2">4</td></tr>
                                    <tr><td class="border p-2">Streptomycin</td><td class="border p-2">200</td></tr>
                                    <tr><td class="border p-2">Sulfonamides (sum)</td><td class="border p-2">100</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: 'Pesticide Residues (Additional Topic)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Pesticide residues doodh mein contaminated feed, water, ya environment se aate hain. Organochlorine pesticides (DDT, BHC/HCH, Endosulfan) fat-soluble hote hain aur doodh ki fat mein accumulate hote hain (bioaccumulation). Organophosphates (Malathion, Chlorpyrifos) aur Pyrethroids bhi detect hote hain. India mein doodh mein pesticide contamination ek significant public health issue hai.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li>Endocrine disruption (hormone mimicking)</li>
                            <li>Carcinogenicity (DDT — IARC Group 2A probable carcinogen)</li>
                            <li>Neurotoxicity (organophosphates — acetylcholinesterase inhibition)</li>
                            <li>Reproductive toxicity aur developmental effects</li>
                            <li>Immunosuppression</li>
                            <li>Chronic liver aur kidney damage</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Methods:</h4>
                    <ol>
                        <li><strong>Gas Chromatography (GC-ECD):</strong> Organochlorine pesticides ke liye primary method — Electron Capture Detector highly sensitive hai chlorinated compounds ke liye</li>
                        <li><strong>GC-MS/MS:</strong> Confirmatory method jo identification aur quantification dono karta hai</li>
                        <li><strong>HPLC:</strong> Thermally unstable pesticides ke liye</li>
                        <li><strong>Rapid Screening Kits:</strong> Immunoassay-based field kits available hain</li>
                    </ol>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                        <h4 class="text-yellow-800 font-bold">📋 FSSAI MRLs for Pesticides in Milk</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse border">
                                <thead>
                                    <tr class="bg-yellow-100">
                                        <th class="border p-2">Pesticide</th>
                                        <th class="border p-2">MRL (mg/kg)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="border p-2">DDT (total)</td><td class="border p-2">0.05</td></tr>
                                    <tr><td class="border p-2">BHC/HCH (total)</td><td class="border p-2">0.01</td></tr>
                                    <tr><td class="border p-2">Endosulfan</td><td class="border p-2">0.004</td></tr>
                                    <tr><td class="border p-2">Malathion</td><td class="border p-2">0.01</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `
        }
    ],
    
    // ==================== ADULTERANTS SECTION (HINGLISH) ====================
    adulterants: [
        {
            title: 'Ganne ki Cheeni (Cane Sugar / Sucrose)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Sucrose (C₁₂H₂₂O₁₁)</strong> ek disaccharide hai jo glucose aur fructose se mil kar banta hai. Doodh mein cheeni milane ka motive yeh hai ki doodh mein paani milane ke baad jo lactometer reading (specific gravity) gir jaati hai, use compensate karne ke liye SNF artificially badhaya jaaye. Doodh ka natural sugar <strong>lactose</strong> hai (4.6-4.8%), lekin sucrose natural doodh mein nahi hota. Isliye sucrose ki presence direct evidence hai ki doodh mein milavat hui hai.</p>
                        <p class="text-green-700 mt-2"><strong>Adulteration Motive:</strong> Jab doodh mein paani milaya jaata hai, specific gravity (lactometer reading) gir jaati hai. Cheeni milane se specific gravity wapas normal range mein aa jaati hai, jisse paani milane ka pata nahi chalta simple lactometer test se.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Diabetic Patients:</strong> Uncontrolled blood sugar spikes — bahut dangerous especially Type 1 diabetics ke liye</li>
                            <li><strong>Obesity:</strong> Extra caloric intake without nutritional benefit</li>
                            <li><strong>Dental Health:</strong> Increased risk of dental caries</li>
                            <li><strong>Infants:</strong> Sucrose doodh mein milane se infants ko renal solute load badhta hai, osmotic diarrhea ho sakta hai</li>
                            <li><strong>Economic Fraud:</strong> Consumer ko inferior quality doodh full price par milta hai</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Seliwanoff's Test (Resorcinol-HCl Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Yeh test specifically <strong>ketoses (fructose)</strong> detect karta hai. Sucrose ek disaccharide hai jo acid hydrolysis par glucose + <strong>fructose</strong> deta hai. Fructose (ek ketohexose) hot HCl mein dehydrate hokar <strong>hydroxymethylfurfural (HMF)</strong> banata hai, jo phir <strong>resorcinol (1,3-dihydroxybenzene)</strong> ke saath condensation karke ek <strong>cherry-red colored complex</strong> produce karta hai. Aldoses (glucose, lactose) is reaction mein bahut slowly react karte hain, isliye yeh test ketoses ke liye selective hai.</p>
                        
                        <p class="mt-2"><strong>Chemical Mechanism:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Step 1: Sucrose + H⁺/HCl (heat) → Glucose + Fructose (Acid hydrolysis)
    Step 2: Fructose -3H₂O (dehydration by HCl) → 5-Hydroxymethylfurfural (HMF)
    Step 3: HMF + 2 Resorcinol → Cherry-Red Condensation Product</code></pre>
                        
                        <p class="mt-2"><strong>Why Lactose Does Not Interfere:</strong> Lactose glucose + galactose deta hai — dono aldoses hain jo is condition mein bahut slowly dehydrate hote hain. Isliye normal doodh mein yeh test negative aata hai (ya bahut prolonged heating par light pink jo significant nahi hai).</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li><strong>Seliwanoff's Reagent:</strong> 0.05 g resorcinol dissolved in 100 ml dilute HCl (1:2 = conc. HCl : water)</li>
                        <li>Boiling water bath (95-100°C)</li>
                        <li>Clean test tubes, timer</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Ek clean test tube mein <strong>1 ml doodh sample</strong> lein.</li>
                        <li><strong>1 ml Seliwanoff's reagent</strong> add karein aur gently mix karein.</li>
                        <li>Tube ko <strong>boiling water bath mein 5 minutes</strong> ke liye rakhein — <strong>5 minutes se zyada mat rakhein!</strong> (Prolonged heating se lactose bhi faint color de sakta hai, causing false positive).</li>
                        <li>Tube ko bath se nikaalein aur <strong>immediately color observe</strong> karein.</li>
                        <li>Control sample (pure doodh) se compare karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">No color change / remains white</td><td class="border p-2">Sucrose <strong>ABSENT</strong></td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Cherry-red / Rose-red color</strong> within 5 minutes</td><td class="border p-2">Sucrose <strong>PRESENT</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Modified Resorcinol Test (Detailed)</h4>
                    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>5 ml doodh</strong> lein.</li>
                        <li><strong>1 ml concentrated HCl</strong> add karein carefully.</li>
                        <li><strong>0.1 g resorcinol crystals</strong> directly add karein aur dissolve karein by gentle shaking.</li>
                        <li>Tube ko <strong>boiling water bath mein 5 minutes</strong> ke liye rakhein.</li>
                        <li><strong>Red color:</strong> Sucrose PRESENT</li>
                        <li><strong>No red color:</strong> Sucrose ABSENT</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Barfoed's Test (Differentiation of Monosaccharide vs Disaccharide)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Barfoed's reagent (cupric acetate in dilute acetic acid) monosaccharides (glucose, fructose) se rapidly reduce hota hai lekin disaccharides (sucrose, lactose) se slowly. Agar doodh mein sucrose add ki gayi hai, toh acid hydrolysis ke baad excess monosaccharides present honge jo rapid reduction denge.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 4: HPLC Method (Quantitative — Confirmatory)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> High-Performance Liquid Chromatography (HPLC) with Refractive Index (RI) detector doodh mein individual sugars (lactose, sucrose, glucose, fructose) ko separate, identify aur quantify kar sakta hai. Normal doodh mein sirf lactose hota hai; sucrose ki koi bhi detectable amount adulteration confirm karti hai.</p>
                        <ul>
                            <li>Column: Aminopropyl bonded silica ya ion-exchange column</li>
                            <li>Mobile Phase: Acetonitrile:Water (75:25 ya 80:20)</li>
                            <li>Detector: RI (Refractive Index) detector</li>
                            <li>Detection Limit: ~0.1% sucrose in milk</li>
                        </ul>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual of Methods (2015), AOAC 982.14</p>
                </div>
            `
        },
        {
            title: 'Starch aur Anya Anaaj ke Aate (Starch & Cereal Flours)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Starch (C₆H₁₀O₅)ₙ</strong> ek polysaccharide hai jo do components se bana hai: <strong>Amylose</strong> (linear chain, ~20-30%) aur <strong>Amylopectin</strong> (branched chain, ~70-80%). Starch, arrowroot powder, wheat flour, rice flour, ya cornstarch doodh mein isliye milaye jaate hain kyunki yeh doodh ki <strong>viscosity (thickness/gadhaapan)</strong> badha dete hain aur paani milane se jo thinness aati hai use mask kar dete hain. Starch SNF reading ko bhi artificially badha sakta hai.</p>
                        <p class="text-green-700 mt-2">Normal doodh mein starch naturally nahi hota. Starch ka molecular weight bahut high hota hai (10⁵ to 10⁷ Da) aur yeh doodh mein insoluble/partially soluble hota hai, forming a colloidal suspension.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Digestive Issues:</strong> Infants mein pancreatic amylase 6 months tak fully developed nahi hota — undigested starch diarrhea, bloating cause karta hai</li>
                            <li><strong>Nutritional Dilution:</strong> Essential nutrients (protein, fat, calcium) dilute ho jaate hain</li>
                            <li><strong>Diabetic Risk:</strong> Extra carbohydrate load — blood sugar spike</li>
                            <li><strong>Allergic Reactions:</strong> Wheat flour se gluten-sensitive individuals mein celiac disease trigger</li>
                            <li><strong>Contamination Risk:</strong> Low-grade starch/flour mein insect fragments, pesticide residues, aflatoxins ho sakte hain</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Iodine Test (Unboiled Milk — Rapid Screening)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Yeh chemistry ka ek classic reaction hai. <strong>Iodine (I₂)</strong> starch ke <strong>amylose component</strong> ke helical (coiled) structure mein ghus jaata hai aur ek <strong>inclusion complex</strong> banata hai jo <strong>intense blue-black color</strong> deta hai. Iodine molecules (as polyiodide chains, I₅⁻ ya I₃⁻) amylose ki helix ke andar fit ho jaate hain aur charge transfer interactions ki wajah se blue color aata hai.</p>
                        
                        <p class="mt-2"><strong>Specificity:</strong></p>
                        <ul>
                            <li><strong>Amylose + I₂ → Deep Blue</strong> (linear helix mein I₂ trap)</li>
                            <li><strong>Amylopectin + I₂ → Red-Purple</strong> (branched structure, less organized)</li>
                            <li><strong>Glycogen + I₂ → Red-Brown</strong> (highly branched)</li>
                            <li><strong>Dextrin + I₂ → Red-Brown</strong> (partially hydrolyzed starch)</li>
                        </ul>
                        
                        <p class="mt-2"><strong>Temperature Dependence:</strong> Blue color heating par <strong>disappear</strong> hota hai (kyunki amylose helix uncoil hoti hai, releasing I₂) aur cooling par <strong>reappear</strong> hota hai (helix reform hoti hai, I₂ wapas trap hota hai). Yeh ek <strong>reversible</strong> process hai aur starch detection ka confirmatory sign hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li><strong>Iodine Solution:</strong> Lugol's Iodine (1% I₂ + 2% KI in water) ya dilute I₂ solution</li>
                        <li>Clean test tubes, dropper</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>1-2 ml doodh sample</strong> lein (unboiled).</li>
                        <li><strong>Iodine solution ki 2-3 drops</strong> add karein.</li>
                        <li>Gently mix karein aur <strong>color observe</strong> karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue/Blue-black color:</strong> Starch PRESENT</li>
                        <li><strong>Yellow-brown (iodine ka normal color):</strong> Starch ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Iodine Test (Boiled Milk — Enhanced Sensitivity)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Boiling se starch granules <strong>gelatinize</strong> hote hain — yani starch granules swell hoke rupture ho jaate hain aur amylose solution mein release hota hai. Gelatinized starch iodine ke saath <strong>zyada intensely react</strong> karta hai kyunki amylose chains fully exposed aur hydrated hoti hain, allowing better I₂ penetration into the helix.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>3-5 ml doodh ko boil</strong> karein (3-5 minutes tak).</li>
                        <li><strong>Room temperature tak cool</strong> karein — yeh zaruri hai kyunki starch-iodine complex sirf lower temperatures par blue hota hai.</li>
                        <li><strong>Iodine solution ki 1-2 drops</strong> add karein.</li>
                        <li><strong>Blue color:</strong> Starch PRESENT — yeh color heating par disappear hoga aur cooling par reappear hoga (confirmatory).</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Microscopic Examination</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Different starches ke granules ka unique microscopic appearance hota hai — size, shape, hilum position, aur birefringence pattern (polarized light mein "Maltese cross" pattern dikhata hai). Yeh method starch ka source bhi identify kar sakti hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Doodh ki ek drop glass slide par rakhein, cover slip lagayein.</li>
                        <li>Iodine solution ki ek drop edge se add karein (staining ke liye).</li>
                        <li>Microscope mein 40x aur 100x par examine karein.</li>
                        <li>Starch granules blue-black stained dikhenge; fat globules stain nahi honge.</li>
                    </ol>
    
                    <div class="overflow-x-auto mt-3">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Starch Source</th>
                                    <th class="border p-2">Granule Size</th>
                                    <th class="border p-2">Shape</th>
                                    <th class="border p-2">Hilum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Wheat</td><td class="border p-2">20-35 µm</td><td class="border p-2">Round, lenticular</td><td class="border p-2">Central, point</td></tr>
                                <tr><td class="border p-2">Rice</td><td class="border p-2">3-8 µm</td><td class="border p-2">Polygonal, angular</td><td class="border p-2">Central</td></tr>
                                <tr><td class="border p-2">Corn/Maize</td><td class="border p-2">15-20 µm</td><td class="border p-2">Round, polygonal</td><td class="border p-2">Central, stellate</td></tr>
                                <tr><td class="border p-2">Potato</td><td class="border p-2">40-100 µm</td><td class="border p-2">Oval, irregular</td><td class="border p-2">Eccentric</td></tr>
                                <tr><td class="border p-2">Arrowroot</td><td class="border p-2">25-50 µm</td><td class="border p-2">Oval</td><td class="border p-2">Central to eccentric</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual (2015)</p>
                </div>
            `
        },
        {
            title: 'Cellulose',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Cellulose (C₆H₁₀O₅)ₙ</strong> ek structural polysaccharide hai jo plant cell walls ka main component hai. Yeh β-1,4-glycosidic bonds se bana hota hai (starch mein α-1,4 bonds hote hain). Human digestive system mein cellulase enzyme nahi hota, isliye cellulose digest nahi hota — yeh dietary fiber ki tarah kaam karta hai. Doodh mein cellulose powder (carboxymethylcellulose — CMC, ya microcrystalline cellulose) illegally milaya jaata hai taaki doodh ki <strong>viscosity (thickness)</strong> aur <strong>apparent solid content</strong> badhe.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Detection Method: Iodinated Zinc Chloride Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Iodinated zinc chloride (Schulze's reagent)</strong> ek specific reagent hai cellulose detection ke liye. Zinc chloride cellulose ko swell karta hai (breaking hydrogen bonds between cellulose chains), aur iodine swollen cellulose ke saath interact karke ek <strong>blue ya violet color</strong> produce karta hai. Yeh reaction starch-iodine se different hai — cellulose ko pehle zinc chloride se swell karna padta hai tabhi iodine react karta hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Reagent Preparation (Iodinated Zinc Chloride / Schulze's Reagent):</h5>
                    <ol>
                        <li>20 g zinc ko 60 ml HCl mein dissolve karein aur filter karein</li>
                        <li>Solution ko evaporate karke syrupy consistency laayen</li>
                        <li>Potassium iodide aur iodine add karein jab tak dark brown color aaye</li>
                        <li>Alternative: 50 g ZnCl₂ + 16 ml water + 8 g KI + 0.5 g I₂</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>10 ml doodh</strong> lein aur <strong>10-15 drops concentrated nitric acid (HNO₃)</strong> add karein — yeh proteins ko coagulate karega.</li>
                        <li>Coagulated mass ko <strong>filter paper se filter</strong> karein.</li>
                        <li>Residue ko <strong>distilled water se 2-3 baar wash</strong> karein (acid remove karne ke liye).</li>
                        <li>Washed residue ko ek test tube mein transfer karein aur <strong>1-2 ml iodinated zinc chloride reagent</strong> add karein.</li>
                        <li><strong>Gently boil</strong> karein 2-3 minutes ke liye.</li>
                        <li>Color observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue ya violet color:</strong> Cellulose PRESENT</li>
                        <li><strong>No blue/violet color:</strong> Cellulose ABSENT</li>
                    </ul>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>Note:</strong> Cellulose aur starch dono polysaccharides hain lekin alag detection methods chahiye — starch simple iodine test se detect hota hai jabki cellulose ke liye zinc chloride swelling agent zaruri hai.</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Urea (CO(NH₂)₂)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Urea (CO(NH₂)₂, Molecular Weight: 60.06 g/mol)</strong> ek organic compound hai jo naturally doodh mein 18-40 mg/100 ml ki concentration mein present hota hai (yeh doodh ke Non-Protein Nitrogen — NPN fraction ka major component hai, approximately 50% NPN). Normal doodh mein urea blood urea se mammary gland mein filtrate hoke aata hai aur yeh normal hai.</p>
                        <p class="text-green-700 mt-2">Lekin jab <strong>externally urea add</strong> ki jaati hai, toh concentration significantly badh jaati hai (>70 mg/100 ml). Urea doodh mein isliye milai jaati hai kyunki:</p>
                        <ul class="text-green-700">
                            <li>Yeh <strong>SNF (Solids-Not-Fat) reading artificially badha</strong> deti hai</li>
                            <li>Paani milane ke baad jo SNF gir jaata hai use compensate karti hai</li>
                            <li>Lactometer reading ko normal range mein laati hai</li>
                            <li>Sasti hai aur aasani se available hai (fertilizer ke roop mein)</li>
                            <li>Doodh mein dissolve hone par taste significantly change nahi hota</li>
                        </ul>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Kidney Damage:</strong> Excess urea kidneys par excessive load daalti hai — chronic kidney disease (CKD) risk badhta hai. Kidneys ko extra urea filter karna padta hai jo nephrons damage karta hai.</li>
                            <li><strong>Ammonia Toxicity:</strong> Urea body mein urease enzyme se ammonia (NH₃) mein convert hoti hai. Blood mein excess ammonia <strong>hyperammonemia</strong> cause karta hai jo <strong>encephalopathy</strong> (brain damage) tak le ja sakta hai.</li>
                            <li><strong>GI Disturbances:</strong> Nausea, vomiting, abdominal pain, diarrhea</li>
                            <li><strong>Metabolic Acidosis:</strong> Excess urea metabolism se acid-base balance disturb hota hai</li>
                            <li><strong>Cardiovascular Effects:</strong> Chronic high urea intake se vascular damage report hua hai</li>
                            <li><strong>Infants:</strong> Immature kidneys handle nahi kar sakte — extreme risk</li>
                        </ul>
                    </div>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h4 class="text-yellow-800 font-bold">📋 Legal Limits</h4>
                        <p class="text-yellow-700"><strong>FSSAI 2006:</strong> Maximum permissible limit of urea in milk = <strong>70 mg/100 ml</strong>. Isse zyada hone par adulteration maana jaata hai.</p>
                        <p class="text-yellow-700"><strong>Normal range in genuine milk:</strong> 18-40 mg/100 ml (breed, diet, lactation stage par depend karta hai)</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: DMAB-TCA Method (Primary Screening)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Para-Dimethylaminobenzaldehyde (DMAB, C₉H₁₁NO)</strong> urea ke saath weakly acidic conditions mein react karke ek <strong>yellow-colored complex</strong> banata hai. TCA (Trichloroacetic Acid) ka role proteins ko precipitate karna hai taaki clear filtrate mile jismein urea dissolved ho. DMAB ka aldehyde group urea ke -NH₂ groups ke saath condensation reaction karta hai forming a Schiff base-type product.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>DMAB + Urea (slightly acidic pH) → Yellow Colored Complex (λmax ≈ 420 nm)
    
    (CH₃)₂N-C₆H₄-CHO + H₂N-CO-NH₂ → (CH₃)₂N-C₆H₄-CH=N-CO-NH₂ + H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li><strong>24% Trichloroacetic Acid (TCA):</strong> 24 g TCA in 100 ml distilled water</li>
                        <li><strong>1.6% DMAB reagent:</strong> 1.6 g DMAB dissolved in 100 ml ethanol + 10 ml conc. HCl</li>
                        <li>Filter paper (Whatman No. 1 ya equivalent)</li>
                        <li>Clean test tubes, pipettes</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>5 ml doodh sample</strong> lein.</li>
                        <li><strong>5 ml 24% TCA solution</strong> add karein — proteins precipitate ho jaayenge.</li>
                        <li>Acchhi tarah <strong>mix</strong> karein aur <strong>5 minutes stand</strong> karne dein.</li>
                        <li><strong>Filter paper se filter</strong> karein — clear filtrate collect karein. Yeh filtrate mein urea dissolved hogi (proteins removed).</li>
                        <li>Ek doosri clean test tube mein <strong>3 ml clear filtrate</strong> lein.</li>
                        <li><strong>3 ml 1.6% DMAB reagent</strong> add karein.</li>
                        <li><strong>Gently mix</strong> karein aur <strong>10-15 minutes</strong> room temperature par stand karne dein.</li>
                        <li>Color observe karein — control sample se compare karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                    <th class="border p-2">Urea Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Very faint yellow / almost colorless</td><td class="border p-2">Normal urea — Doodh PURE hai</td><td class="border p-2">18-40 mg/100ml</td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2">Light yellow</td><td class="border p-2">Borderline — further quantitative test needed</td><td class="border p-2">40-70 mg/100ml</td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Distinct/Bright yellow</strong></td><td class="border p-2">External urea <strong>ADDED</strong> — Adulteration confirmed</td><td class="border p-2">>70 mg/100ml</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Direct DMAB Method (Rapid Screening)</h4>
                    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>1 ml doodh</strong> directly lein.</li>
                        <li><strong>1 ml 1.6% DMAB reagent</strong> add karein.</li>
                        <li>Mix karein aur <strong>5 minutes</strong> observe karein.</li>
                        <li><strong>Distinct yellow color:</strong> Added urea PRESENT</li>
                    </ol>
                    <p><strong>Note:</strong> Yeh method rapid hai lekin less accurate hai kyunki doodh ke proteins interfere kar sakte hain. TCA method zyada reliable hai.</p>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Urease-Based Enzymatic Method (Quantitative)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Urease enzyme urea ko specifically hydrolyze karta hai ammonia aur CO₂ mein. Released ammonia ko phir Nessler's reagent ya Berthelot reaction se quantify kiya jaata hai.</p>
                        <pre class="bg-gray-100 p-2 rounded"><code>CO(NH₂)₂ + H₂O → (Urease) → 2NH₃ + CO₂
    Then: NH₃ + Nessler's reagent → Orange-Brown color (measured at 420 nm)</code></pre>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI 2006 (Limit: 70mg/100ml), Indian Journal of Dairy Science</p>
                </div>
            `
        },
        {
            title: 'Glucose (Dextrose)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Glucose (C₆H₁₂O₆, Dextrose)</strong> ek monosaccharide hai jo doodh mein naturally nahi hota (doodh mein <strong>lactose</strong> natural sugar hai). Glucose isliye milaya jaata hai kyunki yeh sasta hai, easily available hai, aur doodh mein dissolve hone par density/specific gravity badhaata hai — paani milane ka mask karne ke liye.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Modified Barfoed's Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Barfoed's test monosaccharides ko disaccharides se differentiate karta hai. Barfoed's reagent mein <strong>cupric acetate (Cu(CH₃COO)₂)</strong> dilute acetic acid mein hota hai. <strong>Monosaccharides (glucose, fructose) rapidly</strong> Cu²⁺ ko Cu⁺ (cuprous oxide — Cu₂O, brick-red precipitate) mein reduce karte hain, jabki <strong>disaccharides (lactose) slowly</strong> react karte hain. Reduced Cu₂O phir <strong>phosphomolybdic acid</strong> ko reduce karke ek <strong>deep blue compound (molybdenum blue)</strong> banata hai.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Step 1: Glucose + Cu²⁺ (Barfoed's) → Cu₂O↓ (brick-red) + Gluconic acid
    (Rapid — within 1-3 minutes)
    
    Step 2: Cu₂O + Phosphomolybdic acid → Molybdenum Blue (deep blue)
    
    Note: Lactose (disaccharide) needs > 5 minutes for Step 1, so timing is critical!</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>1 ml doodh</strong> lein, <strong>1 ml modified Barfoed's reagent</strong> add karein.</li>
                        <li><strong>Boiling water bath mein exactly 3 minutes</strong> rakhein — zyada mat rakhein!</li>
                        <li>Rapidly <strong>cool</strong> karein (cold water mein).</li>
                        <li><strong>1 ml phosphomolybdic acid reagent</strong> add karein.</li>
                        <li><strong>Deep blue color ka immediate formation:</strong> Added glucose PRESENT</li>
                        <li><strong>No blue color / very faint:</strong> Glucose ABSENT (normal doodh — sirf lactose hai)</li>
                    </ol>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Critical Timing:</strong> Boiling exactly 3 minutes tak hi karein. 5+ minutes heating se lactose bhi slowly reduce hota hai jo false positive de sakta hai. Timer use karein!</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Maltodextrin',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Maltodextrin</strong> ek partially hydrolyzed starch hai (DE value 3-20) jo white powder ke roop mein milta hai. Yeh starch se chota lekin glucose se bada molecule hai. Doodh mein isliye milaya jaata hai kyunki yeh <strong>SNF reading badhaata hai, viscosity thoda increase karta hai, aur paani mein easily dissolve</strong> ho jaata hai. Maltodextrin starch-iodine test mein pure blue nahi deta (kyunki amylose chains broken hain) — isliye yeh starch test se bach sakta hai!</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Iodine Reagent Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Maltodextrin/Dextrin partially hydrolyzed starch hai — iski amylose chains shorter hain. Shorter chains mein iodine ka interaction different hota hai: instead of deep blue (starch), yeh <strong>red-brown / chocolate color</strong> deta hai. Yeh color difference chain length par depend karta hai — longer chains = more blue, shorter chains = more red.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>5 ml doodh sample</strong> test tube mein lein.</li>
                        <li><strong>2 ml iodine solution (0.05 N)</strong> add karein aur mix karein.</li>
                        <li><strong>Chocolate-like red-brown color:</strong> Dextrin/Maltodextrin PRESENT</li>
                        <li><strong>Yellow-brown (iodine natural) / No change:</strong> ABSENT</li>
                        <li><strong>Blue-black:</strong> Starch present hai (maltodextrin nahi)</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Citric Acid Coagulation + Iodine Test</h4>
                    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>20 ml doodh ko boil</strong> karein, <strong>70°C tak cool</strong> karein.</li>
                        <li><strong>0.5 ml 10% citric acid</strong> add karke coagulate karein — proteins precipitate honge.</li>
                        <li>Coagulated doodh ko <strong>filter</strong> karein — clear filtrate mein maltodextrin hogi (kyunki yeh soluble hai).</li>
                        <li><strong>2 ml filtrate</strong> mein <strong>iodine solution ki 3 drops</strong> add karein.</li>
                        <li><strong>Orange-brown color:</strong> Maltodextrin PRESENT</li>
                    </ol>
                </div>
            `
        },
        {
            title: 'Detergent',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Detergents (Surfactants)</strong> doodh mein do reasons se aa sakte hain: (1) Intentional adulteration — detergent doodh ki <strong>foaming properties badhaata hai</strong> aur paani milane se jo thinness aati hai use mask karta hai, aur (2) Unintentional contamination — doodh ke containers/tankers ki safai ke baad proper rinsing nahi hui. <strong>Anionic detergents</strong> (sodium dodecyl sulfate — SDS, linear alkylbenzene sulfonates — LAS) sabse commonly detect hote hain.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li>GI tract ki mucosal lining ka damage</li>
                            <li>Diarrhea, nausea, vomiting</li>
                            <li>Organ toxicity (liver, kidney) on chronic exposure</li>
                            <li>Skin irritation aur allergic reactions</li>
                            <li>Endocrine disruption (kuch detergent components — nonylphenol ethoxylates)</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Methylene Blue Active Substances (MBAS) Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Anionic detergents</strong> (negatively charged surfactants) <strong>methylene blue</strong> (ek cationic/positively charged dye) ke saath ek <strong>ion-pair complex</strong> banate hain. Yeh complex <strong>chloroform (CHCl₃, organic solvent)</strong> mein soluble hai jabki free methylene blue aqueous (water) phase mein rehta hai. Isliye agar detergent present hai toh chloroform layer blue hogi; agar nahi hai toh aqueous layer blue rehegi.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Anionic Detergent (R-SO₃⁻) + Methylene Blue⁺ (MB⁺) → [R-SO₃⁻···MB⁺] Ion-Pair Complex
    
    This complex is SOLUBLE in chloroform → Blue chloroform layer
    Free MB⁺ remains in AQUEOUS phase → Blue aqueous layer</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Ek test tube mein <strong>1 ml doodh sample</strong> lein.</li>
                        <li><strong>1 ml methylene blue solution (0.003%)</strong> add karein aur mix karein.</li>
                        <li><strong>2 ml chloroform</strong> add karein.</li>
                        <li>Tube ko <strong>stopper se band</strong> karein aur <strong>15 seconds vigorously shake (vortex)</strong> karein.</li>
                        <li><strong>1100 rpm par 3 minutes centrifuge</strong> karein (ya 5 minutes stand karne dein for layer separation).</li>
                        <li>Dono layers ka <strong>color compare</strong> karein:</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Lower Layer (Chloroform)</th>
                                    <th class="border p-2">Upper Layer (Aqueous/Milk)</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Colorless / very faint blue</td><td class="border p-2"><strong>Intense blue</strong></td><td class="border p-2">Detergent <strong>ABSENT</strong></td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Intense blue</strong></td><td class="border p-2">Faint blue / colorless</td><td class="border p-2">Detergent <strong>PRESENT</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Safety:</strong> Chloroform toxic hai — fume hood mein kaam karein. Skin contact avoid karein. Disposal properly karein.</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Ammonium Compounds (Ammonium Sulphate)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Ammonium Sulphate ((NH₄)₂SO₄)</strong> ek common fertilizer hai jo doodh mein isliye milaya jaata hai kyunki yeh <strong>lactometer reading (specific gravity) badhaata hai</strong> aur <strong>SNF content artificially increase</strong> karta hai. Ammonium salts doodh mein easily dissolve ho jaate hain aur taste significantly change nahi karte. (NH₄)₂SO₄ ka molecular weight 132.14 g/mol hai.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Nessler's Reagent Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Nessler's reagent (K₂[HgI₄] — potassium tetraiodomercurate(II) in KOH)</strong> ammonium ions (NH₄⁺) ke saath react karke ek <strong>yellow-brown to orange precipitate</strong> (mercury(II) amidoiodide — OHg₂NH₂I) banata hai. Normal doodh mein bhi trace ammonium hota hai lekin added (NH₄)₂SO₄ se significantly zyada intense color aata hai.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>NH₄⁺ + 2[HgI₄]²⁻ + 4OH⁻ → OHg₂·NH₂I↓ (Yellow-Brown) + 7I⁻ + 3H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>5 ml doodh sample</strong> test tube mein lein.</li>
                        <li><strong>1 ml Nessler's reagent</strong> add karein.</li>
                        <li><strong>Yellow ya grey/brown color:</strong> Added ammonium salts PRESENT</li>
                        <li><strong>Faint yellowish (normal):</strong> ABSENT (trace amount normal hai)</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Haldi (Turmeric) Paper Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Ammonium salts NaOH (alkaline condition) mein <strong>ammonia gas (NH₃)</strong> release karte hain. Yeh ammonia gas <strong>wet turmeric paper</strong> (curcumin-containing) ke saath react karke ek <strong>reddish-brown compound (rubrocurcumin)</strong> banata hai. Curcumin + NH₃ → rubrocurcumin — yeh color change NH₃ ki presence confirm karta hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>5 ml doodh</strong> lein, <strong>1 ml 10% NaOH</strong> add karein.</li>
                        <li>Ek <strong>gila haldi (turmeric) paper</strong> test tube ke rim par rakhein (doodh mein touch nahi hona chahiye).</li>
                        <li>Tube ko gently <strong>warm</strong> karein — NH₃ gas release hogi jo upar jayegi.</li>
                        <li><strong>Pink-red color on turmeric paper:</strong> Ammonium salts PRESENT</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Sulphate Detection (BaCl₂ Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Ammonium SULPHATE mein sulphate ions (SO₄²⁻) hote hain jo normally doodh mein significant quantities mein nahi hote. Barium chloride (BaCl₂) sulphate ke saath ek <strong>white, insoluble precipitate — Barium Sulphate (BaSO₄)</strong> banata hai jo acid mein bhi dissolve nahi hota.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>SO₄²⁻ + BaCl₂ → BaSO₄↓ (White precipitate, insoluble in HCl) + 2Cl⁻</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>10 ml doodh</strong> lein, <strong>10 ml TCA (trichloroacetic acid)</strong> add karein — proteins coagulate honge.</li>
                        <li><strong>Filter</strong> karein aur <strong>5 ml clear filtrate</strong> lein.</li>
                        <li><strong>5% BaCl₂ solution ki kuch drops</strong> add karein.</li>
                        <li><strong>Milky-white precipitate:</strong> Added sulphate PRESENT (ammonium sulphate ki indication)</li>
                        <li><strong>No precipitate:</strong> Sulphate ABSENT</li>
                    </ol>
                </div>
            `
        },
        {
            title: 'Sadhaaran Namak (Common Salt — NaCl)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700">Normal doodh mein naturally approximately <strong>0.6-0.7% chlorides</strong> (mainly NaCl) hota hai. Namak doodh mein isliye milaya jaata hai kyunki yeh <strong>lactometer reading (specific gravity) badhaata hai</strong> — paani milane ke baad lactometer reading ko wapas normal range mein laane ke liye. NaCl doodh mein easily dissolve ho jaata hai aur small amounts mein taste significantly change nahi karta.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Silver Nitrate (AgNO₃) — Mohr's Method</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Silver nitrate (AgNO₃)</strong> chloride ions (Cl⁻) ke saath react karke <strong>white silver chloride (AgCl) precipitate</strong> banata hai. Jab sab chloride consume ho jaata hai (yani excess AgNO₃ bach jaata hai), toh excess Ag⁺ <strong>potassium chromate (K₂CrO₄) indicator</strong> ke saath react karke <strong>brick-red silver chromate (Ag₂CrO₄)</strong> banata hai — yeh endpoint hai.</p>
                        
                        <p class="mt-2">Agar doodh mein extra namak milaya gaya hai, toh sabse pehle Ag⁺ excess Cl⁻ consume karega aur brick-red color nahi aayega (ya bahut der se aayega). Agar Cl⁻ normal hai, toh quickly Ag⁺ chromate ke saath react karega aur brick-red color aayega.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>AgNO₃ + NaCl → AgCl↓ (white) + NaNO₃  (Chloride consumed first)
    Then when all Cl⁻ consumed:
    2AgNO₃ + K₂CrO₄ → Ag₂CrO₄↓ (brick-red) + 2KNO₃  (Endpoint)</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>5 ml doodh</strong> test tube mein lein.</li>
                        <li><strong>1 ml 0.1N AgNO₃ solution</strong> add karein aur mix karein.</li>
                        <li><strong>0.5 ml 10% potassium chromate (K₂CrO₄) solution</strong> add karein.</li>
                        <li>Color observe karein:</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Color</th>
                                    <th class="border p-2">Inference</th>
                                    <th class="border p-2">Explanation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2"><strong>Brick-red / Reddish-brown</strong></td><td class="border p-2">Salt <strong>NOT ADDED</strong> — Normal chloride level</td><td class="border p-2">AgNO₃ ne sab normal Cl⁻ consume kiya, excess Ag⁺ ne chromate se red color diya</td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2"><strong>Yellow color</strong></td><td class="border p-2">Salt <strong>ADDED</strong> — Excess chloride present</td><td class="border p-2">Excess Cl⁻ ne saara AgNO₃ consume kar liya, chromate ke liye Ag⁺ nahi bacha — yellow (K₂CrO₄ ka natural color) rehta hai</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        {
            title: 'Vanaspati/Refined Tel (Videshi Vasa / Foreign Fat)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700">Doodh mein <strong>vegetable oils (soybean oil, palm oil, coconut oil)</strong> ya <strong>vanaspati (hydrogenated vegetable fat)</strong> isliye milaye jaate hain kyunki yeh saste hain aur doodh ka <strong>fat percentage artificially badha</strong> dete hain. Genuine doodh ki fat (milk fat/ghee) ki unique <strong>fatty acid profile</strong> hoti hai — isme short-chain fatty acids (butyric acid C4:0, caproic acid C6:0) hote hain jo vegetable oils mein nahi hote. Vegetable oils mein predominantly long-chain unsaturated fatty acids (oleic, linoleic) hote hain.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Butyro-Refractometer (BR) Reading</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Refractive Index (RI)</strong> light ka direction change hona hai jab yeh ek medium se doosre mein jaata hai. Different fats ki different RI hoti hai. Pure milk fat (ghee) ki <strong>BR reading 40-43 at 40°C</strong> hoti hai. Most vegetable oils ki RI zyada hoti hai (BR > 45). Isliye elevated BR reading foreign fat ki indication hai.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Doodh se fat extract karein — modified Gerber method ya cream separation use karein.</li>
                        <li>Extracted fat ko <strong>40°C par melt</strong> karein.</li>
                        <li>Butyro-refractometer par <strong>BR reading</strong> lein.</li>
                        <li><strong>BR 40-43:</strong> Pure milk fat</li>
                        <li><strong>BR > 45:</strong> Foreign fat PRESENT — further confirmation needed</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Baudouin Test (Vanaspati Detection)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Indian law ke under, vanaspati (hydrogenated vegetable fat) mein <strong>5% sesame (til) oil</strong> compulsorily add karna hota hai as a marker. Sesame oil mein <strong>sesamol (3,4-methylenedioxyphenol)</strong> hota hai jo concentrated HCl ki presence mein <strong>furfural</strong> ke saath react karke ek <strong>characteristic pink to crimson-red color</strong> produce karta hai. Isliye agar doodh mein vanaspati milai gayi hai toh yeh test positive aayega.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Sesamol + Furfural + HCl → Pink/Red Colored Complex</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Doodh se <strong>ghee/fat extract</strong> karein.</li>
                        <li><strong>5 g melted fat</strong> ek test tube mein lein.</li>
                        <li><strong>5 ml concentrated HCl</strong> add karein.</li>
                        <li><strong>0.4 ml 2% furfural solution (in alcohol)</strong> add karein.</li>
                        <li>Tube ko <strong>2 minutes tak vigorously vortex/shake</strong> karein.</li>
                        <li>Layers separate hone dein aur <strong>acid (lower) layer</strong> ka color observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Pink to crimson-red in acid layer:</strong> Vanaspati PRESENT</li>
                        <li><strong>No pink/red:</strong> Vanaspati ABSENT (ya sesame oil-free vegetable oil use hua hai)</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Gas Chromatography (GC) — Fatty Acid Profile (Confirmatory)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Fat ko fatty acid methyl esters (FAMEs) mein convert karke GC-FID se analyze karte hain. Milk fat ka unique profile hai — butyric acid (C4:0) milk fat ka fingerprint hai. Vegetable oils mein C4:0 nahi hota. Fatty acid profile comparison se exact type aur amount of foreign fat determine hoti hai.</p>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS 3508-1966, FSSAI Regulations, AOAC Methods</p>
                </div>
            `
        },
        {
            title: 'Khanij Tel (Mineral Oil)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Mineral oils</strong> petroleum-derived hydrocarbons hain (paraffin oil, liquid paraffin, white oil) jo <strong>non-edible</strong> hain. Yeh doodh mein accidental contamination se (machinery lubrication) ya intentional adulteration se (fat content badhane ke liye) aa sakte hain. Mineral oils <strong>non-saponifiable</strong> hain — yani yeh alkali (KOH/NaOH) ke saath saponification reaction (soap formation) nahi karte, unlike edible triglycerides.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Holde's Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Jab fat ko alcoholic KOH ke saath saponify kiya jaata hai, toh edible fats (triglycerides) completely soap + glycerol mein convert ho jaate hain jo paani mein clear solution dete hain. Lekin mineral oils saponify nahi hote — yeh soap solution mein insoluble rehte hain aur <strong>turbidity (ganda/dhundhla pan)</strong> cause karte hain.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Edible Fat + KOH (alcoholic) → Soap (K-salt of fatty acid) + Glycerol → Clear in water ✓
    Mineral Oil + KOH → NO REACTION → Remains as oil droplets → Turbidity in water ✗</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>1 g fat</strong> (doodh se extracted) lein.</li>
                        <li><strong>25 ml 4% alcoholic KOH</strong> add karein.</li>
                        <li>Reflux condenser ke saath <strong>30 minutes boil</strong> karein (complete saponification ke liye).</li>
                        <li><strong>100 ml hot water</strong> add karein aur mix karein.</li>
                        <li>Solution observe karein:</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Clear solution:</strong> Pure edible fat — Mineral oil ABSENT</li>
                        <li><strong>Turbidity/cloudiness:</strong> Mineral oil PRESENT — non-saponifiable matter hai</li>
                    </ul>
                </div>
            `
        },
        {
            title: 'Pashu Shareer ki Vasa (Animal Body Fat — Lard, Tallow)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Animal body fats</strong> (lard — suwar ki charbi, tallow — goat/cattle body fat) doodh ki fat (ghee) mein isliye milaye jaate hain kyunki yeh saste hain. Yeh fats milk fat se different hain — inka fatty acid profile, melting point, aur crystallization behavior alag hota hai. Body fats mein <strong>palmitic acid (C16:0) aur stearic acid (C18:0)</strong> ki percentage zyada hoti hai milk fat ki comparison mein.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Opacity Test (Solidification Time Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Different fats different temperatures par solidify hote hain aur opaque (dhundhle/safed) ban jaate hain. Yeh inka <strong>fatty acid composition</strong> par depend karta hai. Animal body fats mein higher melting point fatty acids zyada hain, toh yeh <strong>jaldi opaque</strong> hote hain. Vegetable oils mein unsaturated fatty acids zyada hain, toh yeh <strong>deri se opaque</strong> hote hain (ya nahi hote).</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>5 g ghee ko 50°C par melt</strong> karein (completely liquid).</li>
                        <li>Ek transparent tube/container mein daalein.</li>
                        <li><strong>23°C water bath</strong> mein transfer karein.</li>
                        <li><strong>Timer start</strong> karein aur note karein ki sample ko <strong>completely opaque</strong> hone mein kitna time lagta hai.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Reference Times:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Fat Type</th>
                                    <th class="border p-2">Opacity Time at 23°C</th>
                                    <th class="border p-2">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Buffalo Ghee (Pure)</td><td class="border p-2">14-15 minutes</td><td class="border p-2">Reference standard</td></tr>
                                <tr><td class="border p-2">Cow Ghee (Pure)</td><td class="border p-2">18-19 minutes</td><td class="border p-2">Reference standard</td></tr>
                                <tr class="bg-red-50"><td class="border p-2">Animal Body Fat (Lard/Tallow)</td><td class="border p-2"><strong>< 12 minutes</strong></td><td class="border p-2">Shorter time = Animal body fat adulteration suspected</td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2">Vegetable Oil adulterated</td><td class="border p-2"><strong>> 22 minutes</strong></td><td class="border p-2">Longer time = Vegetable oil adulteration suspected</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        {
            title: 'Talaab ka Paani (Pond Water — Nitrates)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700">Rural areas mein kabhi-kabhi doodh mein <strong>talaab (pond) ya nahar (canal) ka paani</strong> milaya jaata hai instead of clean tap/bore water. Talaab ke paani mein <strong>nitrates (NO₃⁻) aur nitrites (NO₂⁻)</strong> present hote hain jo agricultural fertilizers (urea, ammonium nitrate, DAP) ke surface runoff se aate hain. Clean drinking water ya tap water mein nitrate levels bahut kam hote hain. Isliye doodh mein nitrates detect karna = talaab/contaminated paani milaya gaya hai.</p>
                        <p class="text-green-700 mt-2"><strong>Health Risk of Nitrates:</strong> Body mein nitrates reduce hokar nitrites ban jaate hain jo <strong>methemoglobinemia (Blue Baby Syndrome)</strong> cause karte hain — especially infants mein. Nitrites hemoglobin ke Fe²⁺ ko Fe³⁺ mein oxidize karte hain forming methemoglobin jo oxygen carry nahi kar sakta.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Diphenylamine Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Diphenylamine ((C₆H₅)₂NH)</strong> concentrated sulphuric acid mein dissolved, nitrates ke saath react karke ek <strong>intense blue color</strong> produce karta hai. Nitrate ions diphenylamine ko oxidize karte hain forming a quinoidal compound (diphenylbenzidine) jo blue color deta hai. Yeh test nitrate ke liye classic qualitative test hai.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Diphenylamine + NO₃⁻ (in H₂SO₄) → Diphenylbenzidine (Blue) → Diphenylbenzidine Violet</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Ek <strong>clean test tube ko doodh sample se rinse</strong> karein — doodh daalein aur fir drain kar dein (doodh ki thin film tube ki walls par reh jaayegi).</li>
                        <li>Test tube ki side se <strong>2-3 drops 2% diphenylamine solution (conc. H₂SO₄ mein)</strong> daalein — drops tube ki wall ke along slide honi chahiye.</li>
                        <li>Tube ki <strong>inner walls ka color observe</strong> karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue color on tube walls:</strong> Nitrates PRESENT — Pond/contaminated water milaya gaya hai</li>
                        <li><strong>No blue color:</strong> Nitrates ABSENT — Clean water (ya no water added)</li>
                    </ul>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Safety:</strong> Concentrated H₂SO₄ highly corrosive hai — extreme care required. Gloves aur eye protection mandatory hain.</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Natural Doodh mein Skimmed Milk Powder (SMP)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Skimmed Milk Powder (SMP)</strong> natural doodh mein isliye milaya jaata hai kyunki yeh doodh ki <strong>SNF (Solids-Not-Fat) content</strong> artificially badha deta hai without adding fat. Yeh especially tab kiya jaata hai jab doodh mein paani milaya gaya ho — paani se dilute hua SNF wapas normal range mein laane ke liye SMP add ki jaati hai. SMP mein proteins heat treatment (spray drying, roller drying) ke dauraan chemical changes undergo karte hain jo fresh doodh mein nahi hote.</p>
                        <p class="text-green-700 mt-2"><strong>Key Scientific Difference:</strong> SMP manufacturing mein high-temperature processing hota hai (typically 160-200°C spray dryer inlet temperature). Is process mein proteins mein <strong>Maillard reaction</strong> hoti hai (reducing sugars + amino acids) aur protein denaturation hota hai. Denatured proteins mein <strong>exposed sulfhydryl (-SH) groups aur reducing groups</strong> hote hain jo fresh milk proteins mein hidden/unexposed rehte hain.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Phosphomolybdic Acid Reduction Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> SMP ke proteins mein jo <strong>exposed reducing groups</strong> hain (Maillard reaction products aur denatured protein ke -SH groups), yeh boiling conditions mein <strong>phosphomolybdic acid (H₃PMo₁₂O₄₀)</strong> ko reduce karte hain. Reduced phosphomolybdic acid <strong>"molybdenum blue"</strong> color deta hai. Fresh doodh ke native proteins mein yeh reducing groups exposed nahi hote, isliye yeh blue color nahi dete (greenish rehta hai).</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Denatured Proteins (-SH, Maillard products) + Phosphomolybdic Acid (Yellow) 
        → Reduced Molybdenum Complex (BLUE) — on boiling
    
    Native Fresh Milk Proteins + Phosphomolybdic Acid 
        → No significant reduction → Remains GREENISH</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>50 ml doodh ko centrifuge</strong> karein cream separate karne ke liye.</li>
                        <li>Skim doodh portion ko <strong>acetic acid se coagulate</strong> karein.</li>
                        <li>Coagulated curd ko <strong>distilled water se wash</strong> karein (residual lactose aur minerals remove karne ke liye).</li>
                        <li>Washed curd mein <strong>2 ml 1% phosphomolybdic acid solution</strong> add karein.</li>
                        <li><strong>15 minutes tak boil</strong> karein.</li>
                        <li>Curd ka color observe karein.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Curd Color</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2"><strong>Greenish</strong></td><td class="border p-2">Pure natural doodh — SMP NOT added</td></tr>
                                <tr class="bg-blue-50"><td class="border p-2"><strong>Bluish</strong></td><td class="border p-2">SMP <strong>ADDED</strong> — Reconstituted protein detected</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <p class="text-xs mt-4"><strong>Ref:</strong> Journal of Food Science and Technology, Vol 22 (1985)</p>
                </div>
            `
        },
        {
          title: 'Doodh mein Soya Doodh (Soy Milk Adulteration)',
    content: `
        <div class="prose max-w-none prose-green">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-green-700"><strong>Soya milk (soy milk)</strong> doodh mein isliye milaya jaata hai kyunki yeh <strong>protein content aur SNF reading ko artificially badha deta hai</strong> at very low cost. Soya milk plant-based protein source hai jo soybeans se banta hai. Bovine (cow/buffalo) milk aur soy milk ke biochemical composition mein fundamental differences hain.</p>
                <p class="text-green-700 mt-2"><strong>Key Compositional Differences:</strong></p>
                <ul class="text-green-700">
                    <li><strong>Proteins:</strong> Cow milk mein <strong>caseins (α-casein, β-casein, κ-casein)</strong> aur whey proteins (α-lactalbumin, β-lactoglobulin) hote hain. Soy milk mein <strong>glycinin (11S globulin) aur β-conglycinin (7S globulin)</strong> dominant proteins hain.</li>
                    <li><strong>Carbohydrates:</strong> Cow milk mein <strong>lactose (glucose + galactose disaccharide)</strong> hota hai. Soy milk mein <strong>sucrose, raffinose (trisaccharide), aur stachyose (tetrasaccharide)</strong> hote hain — lactose absent hota hai.</li>
                    <li><strong>Bioactive Compounds:</strong> Soy milk mein <strong>trypsin inhibitors (Kunitz aur Bowman-Birk inhibitors)</strong> aur <strong>isoflavones (genistein, daidzein)</strong> present hote hain jo cow milk mein nahi hote.</li>
                </ul>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Detection Methods (विधियाँ)</h4>
            
            <!-- Method I: Polarimetric -->
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Method I: Polarimetric Method</h5>
                <p><strong>Principle:</strong> Different sugars ka different <strong>specific optical rotation</strong> hota hai. <strong>Lactose ka specific rotation [α]²⁰ᴅ = +52.6°</strong> hai, jabki <strong>sucrose ka [α]²⁰ᴅ = +66.5°</strong> hai, aur <strong>raffinose aur stachyose ka +105° to +148°</strong> tak. Polarimeter mein plane-polarized light ko sample se pass karte hain — sugar molecules light plane ko rotate karte hain. Agar soy milk present hai toh optical rotation value significantly change ho jayegi.</p>
                
                <h6 class="font-semibold mt-3">Procedure:</h6>
                <ol>
                    <li>Doodh se <strong>protein-free filtrate</strong> prepare karein:
                        <ul>
                            <li>10 ml doodh + 5 ml distilled water mix karein</li>
                            <li><strong>Acetic acid (1-2 drops)</strong> add karke proteins precipitate karein</li>
                            <li>70°C tak warm karein (complete coagulation ke liye)</li>
                            <li><strong>Whatman No. 1 filter paper</strong> se filter karein — clear filtrate milega (sugar solution)</li>
                        </ul>
                    </li>
                    <li>Filtrate ko <strong>polarimeter tube</strong> mein bharein (usually 200 mm path length tube).</li>
                    <li><strong>Optical rotation (degrees)</strong> measure karein sodium D-line light (589 nm) use karke.</li>
                    <li>Pure cow milk ka rotation <strong>+26° to +30°</strong> range mein hota hai.</li>
                    <li><strong>Significantly higher rotation (+35° ya above)</strong> soy milk presence indicate karta hai.</li>
                </ol>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                    <p><strong>📊 Calculation Example:</strong> Agar filtrate ka rotation +38° hai instead of normal +28°, toh soy sugar mix hone ka strong indication hai.</p>
                </div>
            </div>

            <!-- Method II: Isoelectric Precipitation -->
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Method II: Isoelectric Precipitation Method</h5>
                <p><strong>Principle:</strong> Har protein ka ek specific <strong>isoelectric point (pI)</strong> hota hai — yeh wo pH hai jahan protein ka net charge zero hota hai aur wo least soluble rehta hai (precipitate hota hai). <strong>Cow milk casein ka pI = 4.6</strong> hai, jabki <strong>soy proteins (glycinin, β-conglycinin) ka pI ≈ 5.7-6.0</strong> hai. Agar doodh ko pH 5.7 par adjust karke heat karein, toh soy proteins coagulate honge lekin casein dissolved rahega (kyunki wo apne pI se dur hai).</p>
                
                <h6 class="font-semibold mt-3">Procedure:</h6>
                <ol>
                    <li>10 ml doodh sample ko <strong>beaker mein lein</strong>.</li>
                    <li><strong>0.1 N HCl</strong> dropwise add karke pH ko <strong>5.7-5.8</strong> par adjust karein (pH meter ya pH paper use karein).</li>
                    <li>Beaker ko <strong>water bath mein 80-90°C par 5 minutes heat</strong> karein.</li>
                    <li>Observe karein coagulation/precipitation.</li>
                </ol>
                
                <h6 class="font-semibold mt-3">Result Interpretation:</h6>
                <ul>
                    <li><strong>No coagulation/minimal precipitation:</strong> Pure cow milk — soy milk absent</li>
                    <li><strong>Visible coagulation/curd formation at pH 5.7:</strong> Soy milk PRESENT — soy proteins precipitated at their pI</li>
                </ul>
            </div>

            <!-- Method III: SDS-PAGE -->
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Method III: SDS-PAGE (Electrophoresis) Method</h5>
                <p><strong>Principle:</strong> <strong>Sodium Dodecyl Sulfate - Polyacrylamide Gel Electrophoresis (SDS-PAGE)</strong> proteins ko unke <strong>molecular weight</strong> ke basis par separate karta hai. SDS (anionic detergent) proteins ko denature karke uniformly negative charge deta hai. Electric field mein, proteins gel matrix ke through migrate karte hain — smaller proteins fast migrate karte hain, larger proteins slow. Cow milk aur soy milk ke proteins ki molecular weights different hain, isliye gel par distinct bands banenge.</p>
                
                <p class="mt-2"><strong>Molecular Weight Reference:</strong></p>
                <table class="w-full border-collapse border mt-2 text-sm">
                    <thead>
                        <tr class="bg-green-100">
                            <th class="border p-2">Protein Source</th>
                            <th class="border p-2">Major Proteins</th>
                            <th class="border p-2">Molecular Weight (kDa)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-2">Cow Milk</td><td class="border p-2">α-casein, β-casein, κ-casein, β-lactoglobulin</td><td class="border p-2">19-25 kDa</td></tr>
                        <tr class="bg-blue-50"><td class="border p-2">Soy Milk</td><td class="border p-2">Glycinin (11S), β-conglycinin (7S)</td><td class="border p-2">50-70 kDa (subunits: 35-70 kDa)</td></tr>
                    </tbody>
                </table>
                
                <h6 class="font-semibold mt-3">Procedure (Simplified):</h6>
                <ol>
                    <li>Doodh sample ko <strong>SDS sample buffer</strong> mein dilute karein (contains SDS, reducing agent DTT/β-mercaptoethanol, glycerol, bromophenol blue dye).</li>
                    <li><strong>95-100°C par 5 minutes boil</strong> karein (complete denaturation ke liye).</li>
                    <li>Sample ko <strong>polyacrylamide gel wells</strong> mein load karein (typically 12-15% gel concentration).</li>
                    <li><strong>Electric field apply</strong> karein (100-150 V constant voltage) — proteins migrate karenge towards anode.</li>
                    <li>Gel ko <strong>Coomassie Brilliant Blue stain</strong> se stain karein — protein bands visible honge.</li>
                    <li>Gel ko destain karein (excess dye remove karne ke liye).</li>
                </ol>
                
                <h6 class="font-semibold mt-3">Result:</h6>
                <ul>
                    <li><strong>Pure cow milk:</strong> Gel par bands 19-25 kDa region mein dikhenge (casein aur whey proteins).</li>
                    <li><strong>Soy milk adulterated:</strong> <strong>Additional distinct bands 35-70 kDa region mein</strong> dikhenge (glycinin aur β-conglycinin subunits) — yeh cow milk mein absent hote hain.</li>
                </ul>
                
                <div class="bg-blue-50 border-l-4 border-blue-400 p-3 mt-3">
                    <p><strong>🔬 Advanced Variant:</strong> <strong>Western Blotting</strong> use karke soy-specific antibodies se confirm kar sakte hain — highly specific detection.</p>
                </div>
            </div>

            <!-- Method IV: Immunodiffusion -->
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Method IV: Immunodiffusion Method (Ouchterlony Double Diffusion)</h5>
                <p><strong>Principle:</strong> Yeh <strong>antigen-antibody interaction</strong> par based hai. Soy proteins ke liye specific <strong>polyclonal/monoclonal antibodies</strong> commercially available hain. Agar doodh mein soy proteins present hain, toh antibodies unse bind karke agar gel mein ek <strong>visible white precipitation line</strong> banayenge (immune complex formation).</p>
                
                <h6 class="font-semibold mt-3">Procedure:</h6>
                <ol>
                    <li><strong>1% agar gel</strong> prepare karein aur petri dish mein pour karein.</li>
                    <li>Gel mein <strong>wells cut</strong> karein (typically hexagonal pattern — center mein antiserum, periphery mein samples).</li>
                    <li>Center well mein <strong>anti-soy protein antibody</strong> add karein.</li>
                    <li>Peripheral wells mein:
                        <ul>
                            <li>Test doodh sample (diluted/treated)</li>
                            <li>Positive control (pure soy milk dilution)</li>
                            <li>Negative control (pure cow milk)</li>
                        </ul>
                    </li>
                    <li>Petri dish ko <strong>humid chamber mein 24-48 hours incubate</strong> karein at room temperature.</li>
                    <li>Diffusion hone par antigens aur antibodies gel mein meet karte hain aur precipitate karte hain.</li>
                </ol>
                
                <h6 class="font-semibold mt-3">Result:</h6>
                <ul>
                    <li><strong>Precipitation line visible between antibody well aur test sample well:</strong> Soy milk PRESENT</li>
                    <li><strong>No precipitation line:</strong> Soy milk ABSENT</li>
                    <li><strong>Line of identity:</strong> Agar test sample ki line positive control ki line se merge karti hai toh confirm ho jaata hai ki same antigen (soy protein) present hai.</li>
                </ul>
            </div>

            <!-- Method V: HPLC -->
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Method V: HPLC-Based Method (Sugar Profiling)</h5>
                <p><strong>Principle:</strong> <strong>High-Performance Liquid Chromatography (HPLC)</strong> ek highly sensitive analytical technique hai jo complex mixtures ke individual components ko separate aur quantify karta hai. Soy milk mein <strong>stachyose</strong> hota hai jo cow milk mein completely absent hota hai — yeh ek definitive marker hai. HPLC carbohydrates ko <strong>retention time</strong> ke basis par identify karta hai.</p>
                
                <h6 class="font-semibold mt-3">Procedure (Outline):</h6>
                <ol>
                    <li>Doodh sample se <strong>deproteinized filtrate</strong> prepare karein (acetonitrile precipitation ya Carrez reagent method).</li>
                    <li>Filtrate ko <strong>0.45 μm syringe filter</strong> se filter karein.</li>
                    <li><strong>HPLC system setup:</strong>
                        <ul>
                            <li><strong>Column:</strong> Amino column (e.g., NH₂-bonded silica) ya carbohydrate analysis column</li>
                            <li><strong>Mobile phase:</strong> Acetonitrile:Water (75:25 to 80:20 v/v)</li>
                            <li><strong>Flow rate:</strong> 1.0-1.5 ml/min</li>
                            <li><strong>Detector:</strong> Refractive Index Detector (RID) ya Evaporative Light Scattering Detector (ELSD)</li>
                            <li><strong>Injection volume:</strong> 10-20 μl</li>
                        </ul>
                    </li>
                    <li>Standard solutions run karein: lactose, sucrose, raffinose, stachyose — retention times note karein.</li>
                    <li>Test sample inject karein aur chromatogram analyze karein.</li>
                </ol>
                
                <h6 class="font-semibold mt-3">Result Interpretation:</h6>
                <table class="w-full border-collapse border mt-2 text-sm">
                    <thead>
                        <tr class="bg-green-100">
                            <th class="border p-2">Sugar Detected</th>
                            <th class="border p-2">Typical Retention Time</th>
                            <th class="border p-2">Inference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border p-2">Lactose only</td><td class="border p-2">~6-8 min</td><td class="border p-2">Pure cow milk</td></tr>
                        <tr class="bg-red-50"><td class="border p-2"><strong>Stachyose peak present</strong></td><td class="border p-2">~12-15 min</td><td class="border p-2"><strong>Soy milk PRESENT</strong></td></tr>
                        <tr><td class="border p-2">Raffinose + Sucrose peaks</td><td class="border p-2">~9-11 min</td><td class="border p-2">Supportive evidence of soy</td></tr>
                    </tbody>
                </table>
                
                <div class="bg-green-50 border-l-4 border-green-500 p-3 mt-3">
                    <p><strong>✅ Advantage:</strong> HPLC extremely sensitive hai — <strong>even 1-2% soy milk contamination</strong> detect kar sakta hai. Quantitative analysis bhi possible hai (exact % adulteration calculate kar sakte hain).</p>
                </div>
            </div>

            <!-- Method VI: Trypsin Inhibition -->
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Method VI: Rapid Method — Trypsin Inhibition Assay</h5>
                <p><strong>Principle:</strong> Soybeans mein naturally <strong>trypsin inhibitors</strong> present hote hain — yeh anti-nutritional factors hain jo digestive enzyme trypsin ko inhibit karte hain. Main inhibitors hain <strong>Kunitz Trypsin Inhibitor (KTI, ~20 kDa)</strong> aur <strong>Bowman-Birk Inhibitor (BBI, ~8 kDa)</strong>. Yeh proteins trypsin ke active site se tightly bind karte hain aur usko inactive kar dete hain. Cow milk mein yeh inhibitors naturally absent hote hain. Test mein trypsin enzyme ki proteolytic activity measure karte hain — agar activity reduce hui toh inhibitors present hain = soy milk milaya gaya hai.</p>
                
                <p class="mt-2"><strong>Trypsin Activity Measurement:</strong> Trypsin ek specific synthetic substrate <strong>BAEE (Benzoyl-L-Arginine Ethyl Ester)</strong> ya <strong>casein</strong> ko cleave karta hai. Cleavage se ek measurable product banta hai (absorbance change ya color change).</p>
                
                <h6 class="font-semibold mt-3">Procedure (Using BAEE Substrate):</h6>
                <ol>
                    <li><strong>Sample preparation:</strong> 
                        <ul>
                            <li>5 ml doodh sample ko <strong>pH 8.0 Tris-HCl buffer</strong> mein dilute karein</li>
                            <li>Centrifuge karke fat remove karein</li>
                        </ul>
                    </li>
                    <li><strong>Trypsin solution prepare:</strong> 0.1 mg/ml trypsin in pH 8.0 buffer</li>
                    <li><strong>Test tubes setup:</strong>
                        <ul>
                            <li><strong>Control tube:</strong> 1 ml buffer + 0.5 ml trypsin solution + 1 ml BAEE substrate (0.001 M)</li>
                            <li><strong>Test tube:</strong> 1 ml treated doodh sample + 0.5 ml trypsin solution + incubate 10 min (inhibitor ko trypsin se bind hone ka time) + 1 ml BAEE substrate</li>
                        </ul>
                    </li>
                    <li><strong>37°C par 10 minutes incubate</strong> karein.</li>
                    <li><strong>Absorbance measure</strong> karein at 253 nm (BAEE hydrolysis product absorbs UV light).</li>
                </ol>
                
                <h6 class="font-semibold mt-3">Alternative Simplified Method (Casein-Ninhydrin):</h6>
                <ol>
                    <li>2 ml doodh sample + 1 ml trypsin solution (1 mg/ml) mix karein.</li>
                    <li>1 ml <strong>casein solution (1%)</strong> add karein as substrate.</li>
                    <li><strong>37°C par 30 minutes incubate</strong>.</li>
                    <li><strong>TCA (Trichloroacetic Acid, 10%)</strong> 2 ml add karke reaction stop karein — undigested casein precipitate ho jayega.</li>
                    <li>Centrifuge aur clear supernatant lein.</li>
                    <li>Supernatant mein <strong>ninhydrin reagent</strong> add karein aur boil karein — free amino acids (casein digestion product) se <strong>purple color</strong> develop hoga.</li>
                    <li>Absorbance measure karein at 570 nm.</li>
                </ol>
                
                <h6 class="font-semibold mt-3">Result:</h6>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse border text-sm">
                        <thead>
                            <tr class="bg-green-100">
                                <th class="border p-2">Observation</th>
                                <th class="border p-2">Trypsin Activity</th>
                                <th class="border p-2">Inference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td class="border p-2">High absorbance (intense purple color)</td><td class="border p-2">Normal/High — trypsin actively digesting substrate</td><td class="border p-2">Pure cow milk — no inhibitors</td></tr>
                            <tr class="bg-red-50"><td class="border p-2"><strong>Significantly reduced absorbance</strong> (pale color)</td><td class="border p-2"><strong>Inhibited</strong> — trypsin blocked by inhibitors</td><td class="border p-2"><strong>Soy milk PRESENT</strong></td></tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                    <p><strong>⚡ Speed Advantage:</strong> Yeh method 30-45 minutes mein complete ho jaata hai — field testing ke liye suitable. No expensive equipment required except spectrophotometer.</p>
                </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📚 References:</h5>
                <ul class="text-sm text-blue-700">
                    <li>Journal of Dairy Science, Vol. 85(2002) - "Detection of Soy Protein in Milk"</li>
                    <li>Food Chemistry, Vol. 158(2014) - "HPLC determination of oligosaccharides in soy-adulterated milk"</li>
                    <li>International Dairy Journal, Vol. 22(2012) - "Immunological methods for milk adulteration"</li>
                </ul>
            </div>
        </div>
    `
},
{
    title: 'Doodh mein Paneer Mattha (Cheese Whey Adulteration)',
    content: `
        <div class="prose max-w-none prose-green">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-green-700"><strong>Cheese whey (paneer mattha)</strong> cheese/paneer manufacturing ka by-product hai. Jab doodh se paneer banate hain toh milk proteins do fractions mein separate ho jaate hain:</p>
                <ul class="text-green-700">
                    <li><strong>Curd/Paneer (80% milk protein):</strong> Mainly <strong>casein</strong> — yeh coagulate hokar solid paneer banta hai</li>
                    <li><strong>Whey (20% milk protein):</strong> Liquid portion — isme mainly <strong>whey proteins (α-lactalbumin, β-lactoglobulin, BSA, immunoglobulins)</strong>, lactose, minerals, aur thoda fat hota hai</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>Why Whey is Added to Milk?</strong></p>
                <ul class="text-green-700">
                    <li>Whey disposal problem hai — environmental pollution cause karta hai (high BOD/COD)</li>
                    <li>Whey addition se doodh ka <strong>volume increase</strong> hota hai without obvious detection</li>
                    <li>Whey mein lactose aur proteins present hain jo <strong>lactometer reading ko maintain</strong> karte hain</li>
                    <li>Economic benefit — whey is cheaper than milk</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>The Marker: Glycomacropeptide (GMP)</strong></p>
                <p class="text-green-700">Jab paneer banate waqt <strong>rennet enzyme (chymosin)</strong> use karte hain, yeh enzyme κ-casein molecule ko specific site par cleave karta hai:</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>κ-Casein (Phe₁₀₅-Met₁₀₆ bond cleavage)
    ↓ Rennet (Chymosin)
Para-κ-casein (residue 1-105) → Remains in curd
        +
Glycomacropeptide/GMP (residue 106-169) → Goes into WHEY</code></pre>
                
                <p class="text-green-700 mt-2"><strong>GMP Structure & Uniqueness:</strong></p>
                <ul class="text-green-700">
                    <li>GMP ek <strong>64 amino acid peptide</strong> hai (molecular weight ~6.8 kDa)</li>
                    <li>Isme <strong>N-acetylneuraminic acid (NANA, yeh sialic acid ka ek form hai)</strong> attached hota hai as glycan chains</li>
                    <li><strong>Normal fresh milk mein GMP absent</strong> hota hai (κ-casein intact form mein hota hai)</li>
                    <li><strong>Cheese whey mein GMP abundant</strong> hota hai</li>
                    <li>GMP detection = rennet-treated whey ka indicator = cheese whey adulteration</li>
                </ul>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Ninhydrin-Based Spectrophotometric Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Scientific Principle (Detailed)</h5>
                <p>Yeh method <strong>sialic acid content measurement</strong> par based hai jo GMP se attached hota hai. Method ke 3 major steps hain:</p>
                
                <p class="mt-3"><strong>Step 1: Selective Precipitation of GMP</strong></p>
                <p>Doodh sample ko <strong>Trichloroacetic Acid (TCA, 12-15%)</strong> se treat karte hain. TCA ek strong protein precipitant hai lekin <strong>GMP ko precipitate nahi karta</strong> kyunki:</p>
                <ul>
                    <li>GMP ek relatively small, highly charged peptide hai</li>
                    <li>Attached sialic acid residues negative charge dete hain → TCA-acidic condition mein soluble rehta hai</li>
                    <li>Large proteins (caseins, whey proteins) precipitate ho jaate hain</li>
                </ul>
                <p>Result: TCA supernatant mein sirf GMP dissolved rehta hai.</p>
                
                <p class="mt-3"><strong>Step 2: Sialic Acid Release</strong></p>
                <p>GMP-containing supernatant ko <strong>acidic conditions (dilute HCl/H₂SO₄) mein heat (80-100°C)</strong> karte hain. Yeh hydrolysis reaction hota hai:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>GMP-Sialic Acid (glycosidic bond) + H⁺ + Heat 
    → Free Sialic Acid (NANA) + Peptide backbone</code></pre>
                <p>Glycosidic bonds cleave ho jaate hain aur <strong>free N-acetylneuraminic acid (NANA)</strong> release hota hai.</p>
                
                <p class="mt-3"><strong>Step 3: Ninhydrin Reaction (Color Development)</strong></p>
                <p><strong>Ninhydrin (1,2,3-indanetrione monohydrate)</strong> amino acids aur amines ke saath react karke colored products banata hai. Sialic acid (NANA) mein ek <strong>free amino group</strong> present hota hai (N-acetyl group ki wajah se partially exposed). Acidic ninhydrin reagent mein heating par:</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>NANA + Ninhydrin (in acidic solution) + Heat
    ↓
Oxidative decarboxylation + Schiff base formation
    ↓
Yellow-brown colored complex (λmax ≈ 470 nm)
(Different from classic Ruhemann's purple at 570 nm for amino acids)</code></pre>
                
                <p class="mt-2">Sialic acid ka ninhydrin reaction amino acids se slightly different hai — yeh <strong>yellow-brown chromophore</strong> deta hai instead of purple, jo <strong>470 nm wavelength par maximum absorbance</strong> deta hai.</p>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>A. Sample Preparation & GMP Isolation:</strong></p>
                <ol>
                    <li><strong>10 ml doodh sample</strong> ek test tube mein lein.</li>
                    <li><strong>15 ml TCA solution (15% w/v)</strong> add karein — proteins precipitate honge.</li>
                    <li>Tube ko <strong>vigorously shake</strong> karein aur <strong>room temperature par 10 minutes</strong> stand hone dein (complete precipitation ke liye).</li>
                    <li><strong>Whatman No. 1 filter paper</strong> se filter karein — clear filtrate collect karein (yeh GMP-containing fraction hai).</li>
                </ol>
                
                <p class="mt-3"><strong>B. Sialic Acid Hydrolysis:</strong></p>
                <ol start="5">
                    <li>Filtrate mein se <strong>5 ml portion</strong> lein aur clean test tube mein transfer karein.</li>
                    <li><strong>0.5 ml 0.1 N HCl</strong> add karein (acidic pH maintain karne ke liye).</li>
                    <li>Tube ko <strong>boiling water bath mein 15-20 minutes</strong> heat karein (glycosidic bond hydrolysis).</li>
                    <li>Room temperature tak <strong>cool</strong> karein.</li>
                </ol>
                
                <p class="mt-3"><strong>C. Ninhydrin Color Reaction:</strong></p>
                <ol start="9">
                    <li><strong>Ninhydrin reagent prepare:</strong>
                        <ul>
                            <li>0.2 g ninhydrin powder ko</li>
                            <li>100 ml glacial acetic acid + conc. HCl (95:5 v/v) mixture mein dissolve karein</li>
                            <li>Fresh prepare karein before use (reagent stable nahi hota)</li>
                        </ul>
                    </li>
                    <li>Cooled hydrolysate mein <strong>2 ml ninhydrin reagent</strong> add karein.</li>
                    <li>Tube ko again <strong>boiling water bath mein 10-12 minutes</strong> heat karein.</li>
                    <li>Remove karke <strong>ice-cold water mein immediately cool</strong> karein (color stabilize hota hai).</li>
                </ol>
                
                <p class="mt-3"><strong>D. Spectrophotometric Measurement:</strong></p>
                <ol start="13">
                    <li>Solution ko <strong>cuvette mein transfer</strong> karein (1 cm path length).</li>
                    <li><strong>Spectrophotometer ko 470 nm</strong> wavelength par set karein.</li>
                    <li><strong>Blank solution</strong> use karke instrument zero karein (blank = reagent blank — pure milk ki jagah distilled water use karke same procedure follow karein).</li>
                    <li>Test sample ka <strong>absorbance (A₄₇₀)</strong> read karein.</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Result Interpretation</h5>
            <div class="overflow-x-auto mt-3">
                <table class="w-full border-collapse border">
                    <thead>
                        <tr class="bg-green-100">
                            <th class="border p-2">Absorbance at 470 nm</th>
                            <th class="border p-2">Visual Color</th>
                            <th class="border p-2">GMP Content</th>
                            <th class="border p-2">Inference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2"><strong>< 0.100</strong></td>
                            <td class="border p-2">Very pale yellow / Colorless</td>
                            <td class="border p-2">Absent/Trace</td>
                            <td class="border p-2"><strong>Pure milk</strong> — No whey added</td>
                        </tr>
                        <tr class="bg-yellow-50">
                            <td class="border p-2"><strong>0.100 - 0.250</strong></td>
                            <td class="border p-2">Light yellow</td>
                            <td class="border p-2">Low GMP</td>
                            <td class="border p-2">Borderline — possible <strong>5-10% whey</strong></td>
                        </tr>
                        <tr class="bg-orange-50">
                            <td class="border p-2"><strong>0.250 - 0.500</strong></td>
                            <td class="border p-2">Yellow-brown</td>
                            <td class="border p-2">Moderate GMP</td>
                            <td class="border p-2"><strong>10-20% whey added</strong></td>
                        </tr>
                        <tr class="bg-red-50">
                            <td class="border p-2"><strong>> 0.500</strong></td>
                            <td class="border p-2">Intense brown</td>
                            <td class="border p-2">High GMP</td>
                            <td class="border p-2"><strong>Heavy adulteration (>20% whey)</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📊 Quantitative Analysis (Optional)</h5>
                <p class="text-blue-700">Standard curve prepare karke exact GMP concentration calculate kar sakte hain:</p>
                <ol class="text-sm text-blue-700 mt-2">
                    <li>Pure sialic acid (NANA) standards prepare karein (0, 10, 20, 30, 40, 50 μg/ml concentrations)</li>
                    <li>Har standard ko ninhydrin reagent se treat karke absorbance measure karein</li>
                    <li>Graph plot karein: X-axis = NANA concentration (μg/ml), Y-axis = Absorbance (A₄₇₀)</li>
                    <li>Test sample ka absorbance graph par match karke GMP/sialic acid concentration calculate karein</li>
                    <li>Whey percentage estimate karein using formula (based on typical GMP content in cheese whey ~ 0.6-1.2 g/L)</li>
                </ol>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Important Notes & Precautions</h5>
                <ul class="text-sm text-yellow-700">
                    <li><strong>Acid-set paneer whey:</strong> Agar paneer citric acid/lemon juice se banaya gaya hai (not rennet), toh GMP release nahi hoga — yeh test negative rahega even if whey added hai. Is case mein alternate methods chahiye (e.g., lactose:protein ratio analysis).</li>
                    <li><strong>Timing critical:</strong> Ninhydrin reaction ka color time-dependent hai — exactly recommended time follow karein.</li>
                    <li><strong>Temperature control:</strong> Boiling time aur temperature variations results ko affect karte hain — consistent heating maintain karein.</li>
                    <li><strong>Reagent quality:</strong> Ninhydrin light-sensitive hai — amber bottles mein store karein. Old/degraded ninhydrin weak color deta hai.</li>
                    <li><strong>Interference:</strong> Kuch preservatives (benzoic acid, sorbic acid) absorbance ko slightly affect kar sakte hain.</li>
                </ul>
            </div>

            <div class="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
                <h5 class="font-semibold text-gray-800">🔬 Alternative/Confirmatory Methods</h5>
                <ul class="text-sm text-gray-700">
                    <li><strong>HPLC Method:</strong> Direct GMP quantification — highly accurate, gold standard method</li>
                    <li><strong>Capillary Electrophoresis:</strong> GMP separation based on charge-to-mass ratio</li>
                    <li><strong>Immunoassay (ELISA):</strong> Anti-GMP antibodies use karke detection — very specific</li>
                    <li><strong>Lactose:Casein Ratio:</strong> Whey addition se ratio disturb hota hai (whey mein high lactose, low casein)</li>
                </ul>
            </div>

            <p class="text-xs mt-4 text-gray-600"><strong>References:</strong> Journal of Food Science and Technology, Vol 22 (1985); International Dairy Journal, Vol 18 (2008); Food Chemistry, Vol 113 (2009)</p>
        </div>
    `
},
{
    title: 'Doodh mein Gelatin (Gelatin Adulteration)',
    content: `
        <div class="prose max-w-none prose-green">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-green-700"><strong>Gelatin</strong> ek protein-rich substance hai jo animal tissues (mainly bones, skin, connective tissues) se collagen ko partial hydrolysis karke extract kiya jaata hai. Yeh economically cheap aur easily available hai, isliye unethical traders isko doodh mein milate hain.</p>
                
                <p class="text-green-700 mt-2"><strong>Why Gelatin is Added to Milk?</strong></p>
                <ul class="text-green-700">
                    <li><strong>Viscosity increase:</strong> Gelatin solution viscous/thick hota hai — watered-down milk ko thick appearance deta hai, natural doodh jaisa lagta hai</li>
                    <li><strong>SNF content artificially increase:</strong> Gelatin protein hai (contains nitrogen) — Kjeldahl method se SNF reading badh jaati hai</li>
                    <li><strong>Mouthfeel enhancement:</strong> Diluted doodh ka thin texture mask ho jaata hai</li>
                    <li><strong>Economic fraud:</strong> Cheap gelatin (₹200-400/kg) se expensive milk solids replace karte hain</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>Gelatin Structure & Composition:</strong></p>
                <p class="text-green-700">Gelatin <strong>denatured collagen</strong> hai. Collagen ek triple-helix protein hai jo mainly connective tissues mein hota hai. Jab collagen ko controlled heat aur partial acid/alkali hydrolysis se treat karte hain, toh triple helix break ho jaata hai aur gelatin banta hai.</p>
                
                <ul class="text-green-700 mt-2">
                    <li><strong>Amino Acid Composition:</strong> Gelatin mein <strong>glycine (33%), proline (12%), hydroxyproline (10%)</strong> abundant hote hain. Especially <strong>hydroxyproline</strong> gelatin ka unique marker hai — yeh milk proteins mein virtually absent hota hai.</li>
                    <li><strong>Molecular Weight:</strong> 20-250 kDa range (depending on hydrolysis extent)</li>
                    <li><strong>Isoelectric Point:</strong> pH 4.7-5.0 (acidic side)</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>Detection Strategy:</strong></p>
                <p class="text-green-700">Gelatin ko doodh se isolate karke kisi specific reagent se react karate hain jo gelatin ke liye characteristic color/precipitate de. <strong>Picric acid (2,4,6-trinitrophenol)</strong> gelatin ke saath specific interaction karta hai.</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Picric Acid Precipitation Test</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Scientific Principle (Detailed)</h5>
                
                <p><strong>Picric Acid (C₆H₂(NO₂)₃OH) — Structure aur Properties:</strong></p>
                <ul>
                    <li>Picric acid ek <strong>aromatic compound</strong> hai with <strong>three nitro groups (-NO₂)</strong> aur ek hydroxyl group (-OH) attached to benzene ring</li>
                    <li>Yeh <strong>strong acid</strong> hai (pKa ≈ 0.4) — phenolic -OH group ke adjacent nitro groups ke electron-withdrawing effect ki wajah se</li>
                    <li>Bright <strong>yellow crystalline solid</strong> — highly colored due to conjugated system</li>
                    <li>Water-soluble (saturated solution ~1.4% w/v at room temperature)</li>
                </ul>
                
                <p class="mt-3"><strong>Mechanism of Gelatin-Picric Acid Interaction:</strong></p>
                <p>Gelatin ka picric acid ke saath reaction <strong>electrostatic interaction aur hydrogen bonding</strong> par based hai:</p>
                
                <div class="bg-white border border-gray-300 p-3 rounded mt-2">
                    <p class="font-semibold">Step-by-Step Interaction:</p>
                    <ol>
                        <li><strong>Protonation of Gelatin:</strong> Acidic medium (mercuric nitrate + acetic acid ka Stokes reagent) mein gelatin ke basic amino acid residues (lysine, arginine, histidine) protonated ho jaate hain:
                            <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>-NH₂ (gelatin) + H⁺ → -NH₃⁺ (positively charged)</code></pre>
                        </li>
                        <li><strong>Picrate Ion Formation:</strong> Picric acid dissociate hoke picrate anion banata hai:
                            <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>C₆H₂(NO₂)₃OH ⇌ C₆H₂(NO₂)₃O⁻ + H⁺
(Picric acid)     (Picrate ion - YELLOW)</code></pre>
                        </li>
                        <li><strong>Electrostatic Complex Formation:</strong> Positively charged gelatin amino groups aur negatively charged picrate ions attract hote hain:
                            <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Gelatin-NH₃⁺ + ⁻O-C₆H₂(NO₂)₃ → 
    [Gelatin-NH₃⁺ ··· ⁻O-C₆H₂(NO₂)₃]
    (Gelatin-picrate COMPLEX - YELLOW PRECIPITATE)</code></pre>
                        </li>
                        <li><strong>Additional H-Bonding:</strong> Gelatin ke -OH groups (from serine, threonine, hydroxyproline) aur -NH groups (peptide backbone) bhi picric acid ke nitro groups (-NO₂) aur phenolic -OH ke saath hydrogen bonds banate hain — complex ko stabilize karte hain.</li>
                    </ol>
                </div>
                
                <p class="mt-3"><strong>Why Milk Proteins Don't React Similarly?</strong></p>
                <ul>
                    <li>Milk caseins aur whey proteins ka amino acid composition gelatin se different hai</li>
                    <li>Caseins already acidic medium mein precipitate ho jaate hain (Stokes reagent mein) aur filtrate mein nahi aate</li>
                    <li>Small amount of residual milk proteins picric acid se weak interaction karte hain — no significant yellow precipitate</li>
                    <li>Gelatin ka <strong>high glycine, proline, hydroxyproline content</strong> unique structural conformation deta hai jo picric acid ke saath strong multi-point interaction facilitate karta hai</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Reagents Required</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>1. Stokes Reagent (Acid Mercuric Nitrate Solution):</strong></p>
                <ul class="text-sm">
                    <li><strong>Composition:</strong> Mercuric nitrate [Hg(NO₃)₂] in acidified water</li>
                    <li><strong>Preparation:</strong>
                        <ul>
                            <li>Dissolve <strong>5 g mercuric nitrate</strong> in <strong>100 ml distilled water</strong></li>
                            <li>Add <strong>2-3 ml glacial acetic acid</strong> (pH ~3-4 maintain karne ke liye)</li>
                            <li>Mix thoroughly — clear solution milega</li>
                        </ul>
                    </li>
                    <li><strong>Function:</strong> 
                        <ul>
                            <li>Milk proteins (casein, whey proteins) ko precipitate karta hai — mercury cations protein amino groups se coordinate bonding karte hain</li>
                            <li>Acidic environment maintain karta hai</li>
                            <li>Gelatin ko precipitate NAHI karta (gelatin mercury ke saath weak interaction karta hai, soluble rehta hai)</li>
                        </ul>
                    </li>
                </ul>
                
                <p class="mt-3"><strong>2. Saturated Picric Acid Solution:</strong></p>
                <ul class="text-sm">
                    <li><strong>Preparation:</strong>
                        <ul>
                            <li><strong>1.4 g picric acid powder</strong> ko <strong>100 ml warm distilled water (40-50°C)</strong> mein dissolve karein</li>
                            <li>Cool to room temperature — saturated solution ban jayega</li>
                            <li>Undissolved crystals ko settle hone dein, clear supernatant use karein</li>
                        </ul>
                    </li>
                    <li><strong>Storage:</strong> Amber/dark glass bottle mein (light-sensitive hai). Room temperature par stable.</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>Step 1: Milk Sample Conditioning</strong></p>
                <ol>
                    <li><strong>10 ml doodh sample</strong> ek clean test tube mein lein.</li>
                    <li>Agar doodh thanda hai toh <strong>room temperature (20-25°C)</strong> tak warm karein — gelatin solubility improve hogi.</li>
                    <li>Fat layer present hai toh gently mix karein (uniform sample chahiye).</li>
                </ol>
                
                <p class="mt-3"><strong>Step 2: Protein Precipitation (Deproteinization)</strong></p>
                <ol start="4">
                    <li>Doodh sample mein <strong>20 ml Stokes reagent</strong> add karein (ratio 1:2 — milk:reagent).</li>
                    <li>Stopper se test tube ko close karke <strong>vigorously shake</strong> karein for 30 seconds — proteins precipitate honge (whitish curd formation).</li>
                    <li>Tube ko <strong>5-10 minutes stand</strong> hone dein at room temperature — complete precipitation aur settling ke liye.</li>
                    <li>Precipitate agar loose hai toh gentle centrifugation (2000 rpm, 3-5 min) kar sakte hain.</li>
                </ol>
                
                <p class="mt-3"><strong>Step 3: Filtration</strong></p>
                <ol start="8">
                    <li><strong>Whatman No. 1 filter paper</strong> aur funnel use karke filtrate collect karein.</li>
                    <li>Filtrate <strong>clear aur colorless/slightly yellowish</strong> hona chahiye.</li>
                    <li>Agar filtrate cloudy hai toh re-filter karein — clear filtrate essential hai accurate results ke liye.</li>
                </ol>
                
                <p class="mt-3"><strong>Step 4: Picric Acid Test</strong></p>
                <ol start="11">
                    <li>Clear filtrate mein se <strong>5 ml portion</strong> fresh clean test tube mein lein.</li>
                    <li>Filtrate mein <strong>equal volume (5 ml) saturated picric acid solution</strong> add karein.</li>
                    <li>Test tube ko gently shake karke <strong>mix</strong> karein.</li>
                    <li><strong>5-10 minutes</strong> stand hone dein at room temperature.</li>
                    <li>Tube ko <strong>transmitted light against dark background</strong> observe karein — precipitation clearly visible hogi.</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Result Interpretation</h5>
            <div class="overflow-x-auto mt-3">
                <table class="w-full border-collapse border">
                    <thead>
                        <tr class="bg-green-100">
                            <th class="border p-2">Observation</th>
                            <th class="border p-2">Description</th>
                            <th class="border p-2">Inference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-red-50">
                            <td class="border p-2"><strong>Bright YELLOW Precipitate</strong></td>
                            <td class="border p-2">
                                <ul class="text-sm mb-0">
                                    <li>Heavy yellow sediment bottom mein settle hoti hai</li>
                                    <li>Supernatant clear/pale yellow</li>
                                    <li>Precipitate flocculent/granular appearance</li>
                                </ul>
                            </td>
                            <td class="border p-2"><strong>GELATIN PRESENT</strong><br><span class="text-xs">Gelatin-picrate complex formed</span></td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>NO Yellow Precipitate</strong></td>
                            <td class="border p-2">
                                <ul class="text-sm mb-0">
                                    <li>Solution clear rehta hai ya slightly yellow color (picric acid ka own color)</li>
                                    <li>No sediment formation</li>
                                    <li>Possible faint turbidity (non-specific) but no yellow ppt</li>
                                </ul>
                            </td>
                            <td class="border p-2"><strong>Gelatin ABSENT</strong><br><span class="text-xs">Pure milk — no adulteration</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Safety Precautions</h5>
                <ul class="text-sm text-yellow-700">
                    <li><strong>Mercuric nitrate:</strong> Highly TOXIC heavy metal salt. Handle with gloves. Avoid skin contact aur inhalation. Disposal proper waste protocol ke according karein.</li>
                    <li><strong>Picric acid:</strong> EXPLOSIVE when dry. Hamesha aqueous solution mein handle karein. Never allow to dry out completely. Avoid friction aur shock.</li>
                    <li><strong>Acetic acid:</strong> Corrosive aur pungent odor. Well-ventilated area mein use karein.</li>
                    <li><strong>Eye protection aur lab coat mandatory.</strong></li>
                    <li><strong>Waste disposal:</strong> Heavy metal waste aur picric acid waste ko separate designated containers mein collect karein — municipal drain mein NEVER dispose.</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">🔬 Advanced/Alternative Methods for Gelatin Detection</h5>
                
                <p class="text-sm text-blue-700 mt-2"><strong>1. Hydroxyproline Quantification (Chemical Method):</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Gelatin mein <strong>hydroxyproline ~10%</strong> hota hai; milk proteins mein virtually absent</li>
                    <li>Sample ko acid hydrolysis karke amino acids release karte hain</li>
                    <li><strong>Ehrlich's reagent (p-dimethylaminobenzaldehyde)</strong> se react karte hain — hydroxyproline se <strong>red-purple color (λmax = 558 nm)</strong> develop hota hai</li>
                    <li>Spectrophotometry se quantify karte hain</li>
                    <li><strong>Detection limit:</strong> ~0.01% gelatin in milk</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-3"><strong>2. ELISA (Enzyme-Linked Immunosorbent Assay):</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Anti-gelatin antibodies use karte hain</li>
                    <li>Highly specific aur sensitive — <strong>ppb (parts per billion) level detection</strong></li>
                    <li>Commercial ELISA kits available hain</li>
                    <li>Quantitative results — exact gelatin concentration calculate ho sakta hai</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-3"><strong>3. PCR-Based Detection (for source identification):</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Gelatin animal-derived hai — trace DNA present ho sakta hai</li>
                    <li><strong>Species-specific PCR</strong> se identify kar sakte hain gelatin bovine/porcine/fish source se aaya hai</li>
                    <li>Halal/Kosher compliance verification ke liye important</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-3"><strong>4. FTIR Spectroscopy:</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Fourier Transform Infrared Spectroscopy</li>
                    <li>Gelatin ki characteristic absorption bands (amide I, amide II, amide III regions mein) identify karte hain</li>
                    <li>Non-destructive, rapid method</li>
                    <li>Chemometric analysis se quantification possible</li>
                </ul>
            </div>

            <div class="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
                <h5 class="font-semibold text-gray-800">📋 Quality Control & Troubleshooting</h5>
                
                <p class="text-sm text-gray-700 mt-2"><strong>Common Issues & Solutions:</strong></p>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="border p-2">Problem</th>
                            <th class="border p-2">Possible Cause</th>
                            <th class="border p-2">Solution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2">Filtrate cloudy/turbid</td>
                            <td class="border p-2">Incomplete protein precipitation</td>
                            <td class="border p-2">Add more Stokes reagent; wait longer; re-filter</td>
                        </tr>
                        <tr>
                            <td class="border p-2">Faint yellow color but no precipitate</td>
                            <td class="border p-2">Very low gelatin concentration (&lt;0.1%)</td>
                            <td class="border p-2">Concentrate sample; use larger volume; wait longer (15-20 min)</td>
                        </tr>
                        <tr>
                            <td class="border p-2">Dark yellow solution without ppt</td>
                            <td class="border p-2">Excess picric acid</td>
                            <td class="border p-2">Normal — picric acid ka own color hai. No gelatin present.</td>
                        </tr>
                        <tr>
                            <td class="border p-2">White precipitate instead of yellow</td>
                            <td class="border p-2">Residual milk proteins not removed</td>
                            <td class="border p-2">Filtration step repeat karein; fresh Stokes reagent use karein</td>
                        </tr>
                    </tbody>
                </table>
                
                <p class="text-sm text-gray-700 mt-3"><strong>Controls for Validation:</strong></p>
                <ul class="text-sm text-gray-700">
                    <li><strong>Positive control:</strong> Pure milk mein 0.5-1% food-grade gelatin milake test karein — clear yellow precipitate milna chahiye</li>
                    <li><strong>Negative control:</strong> Pure fresh milk (gelatin-free confirmed) test karein — no precipitate</li>
                    <li><strong>Reagent blank:</strong> Distilled water Stokes reagent se treat karke picric acid add karein — no precipitate (reagent contamination check)</li>
                </ul>
            </div>

            <p class="text-xs mt-4 text-gray-600"><strong>References:</strong> Indian Standards IS:1479 (Part II) - Methods of Test for Dairy Industry; Food Analytical Methods, Vol 5 (2012); Journal of Food Science and Technology, Vol 48(6), 2011</p>
       </div>
    `
}
    ]
  }, // <-- Semicolon hatakar yahan }, lagayein kyunki 'hi' ka section khatam hua hai.

  en: { // <-- Dobara 'export const...' nahi likhna hai, sirf 'en:' likhna hai.
      main_title: "Raw Milk Quality and Adulteration",
      main_description: "A comprehensive scientific guide for platform testing and adulteration detection in milk. This guide covers all standard tests, chemical reactions, health hazards, and FSSAI/BIS standards in detail.",
      back_to_categories: "Back to Categories",
      tabs: {
        platform: "Platform Testing",
        platform_desc: "Rapid quality checks at milk reception — includes organoleptic, chemical, microbiological and physical tests.",
        preservatives: "Preservatives",
        preservatives_desc: "Detection of illegal preservatives — neutralizers, formalin, H₂O₂, antibiotics and others.",
        adulterants: "Adulterants",
        adulterants_desc: "Detection of common adulterants — sugar, starch, urea, melamine, synthetic milk and others."
      },
      intros: {
        platform: `Platform tests are rapid quality evaluations performed at the milk reception dock to quickly determine whether a batch of milk is acceptable or not. These tests are critical to prevent low-quality or adulterated milk from mixing with good quality supplies. Platform testing is the first and most critical step in milk processing — if substandard milk is accepted here, the entire batch can be compromised.
  
  Scientific Significance: Milk is a perishable commodity in which bacteria multiply rapidly. At room temperature (25-30°C), bacteria in milk can double every 20-30 minutes. Therefore, checking milk quality at the platform is essential. Platform tests include physical (temperature, appearance), chemical (acidity, alcohol stability), and microbiological (resazurin, MBRT) tests of all types.
  
  According to FSSAI Standards, minimum fat content in raw milk should be 3.2% for cow milk and 5.0% for buffalo milk, while SNF (Solids-Not-Fat) should be minimum 8.3% (cow) and 9.0% (buffalo).`,
  
        preservatives: `By law (FSSAI Act 2006, Food Safety and Standards Act), no preservatives of any kind are permitted in milk. Preservatives are generally added to milk when refrigeration (cooling) or transportation facilities are inadequate. Common preservatives include neutralizers (NaOH, Na₂CO₃, NaHCO₃), formalin (formaldehyde), hydrogen peroxide (H₂O₂), boric acid, salicylic acid, benzoic acid, hypochlorites, and antibiotics.
  
  Scientific Context: Preservatives are added to milk to prevent or slow bacterial growth. However, they are harmful to health:
  • Formalin (HCHO) — a known carcinogen (IARC Group 1). It cross-links proteins causing denaturation, leading to digestion problems, kidney damage, and increased cancer risk in the body.
  • Hydrogen Peroxide (H₂O₂) — a strong oxidizing agent that kills bacteria in milk but also destroys vitamins (especially Vitamin C and B-complex).
  • Neutralizers — these mask developed acidity, making spoiled milk appear fresh. Direct contact with NaOH (caustic soda) can burn mucous membranes.
  • Boric Acid — chronic exposure can cause kidney damage, reproductive toxicity, and gastrointestinal problems.
  
  According to FSSAI, there is ZERO tolerance for any preservative in milk.`,
  
        adulterants: `Adulterants are substances added to milk to increase its quantity (volume) or solids-not-fat (SNF) content to deceive quality tests. Common adulterants include sugar (sucrose), starch, urea, glucose, vegetable oil, vanaspati, pond water, detergent, melamine, synthetic milk, skimmed milk powder (SMP), soy milk, cheese whey, and gelatin.
  
  Scientific Context: The purpose of adulteration is to earn more profit. Adulteration is of two types:
  1. Intentional Adulteration — deliberately for profit (e.g., adding water, urea, melamine)
  2. Incidental Adulteration — due to negligence or accident (e.g., pesticide residues, antibiotic residues, aflatoxins)
  
  Health Effects:
  • Urea — excessive strain on kidneys, risk of kidney failure
  • Melamine — kidney stones, renal failure (in the 2008 China scandal, more than 300,000 children were affected)
  • Detergent — gastrointestinal problems, food poisoning
  • Starch — dangerous for diabetic patients
  • Vegetable Oil/Vanaspati — increases risk of heart disease (trans fats)
  • Formalin — carcinogenic (cancer-causing)
  
  According to FSSAI (Food Safety and Standards Authority of India), adulteration is a serious crime punishable by imprisonment ranging from 6 months to life imprisonment.`
      },
  
      platformTests: [
        {
          title: "Organoleptic Test (Sensory Test)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> The organoleptic test is the first and fastest evaluation of milk quality. The word "organoleptic" comes from the Greek words "organon" (sense organ) and "leptikos" (to receive). This test uses five senses — sight, smell, taste, touch, and hearing — to estimate the quality of milk. This test can be performed without any equipment and can be done very quickly by trained personnel.</p>
  
              <p><strong>Scientific Basis:</strong> The odor of milk is due to volatile organic compounds (VOCs). Fresh milk has a slightly sweet and pleasant aroma that comes from short-chain fatty acids (butanoic acid, hexanoic acid) and lactones. When bacteria grow in milk, they produce lactic acid, acetic acid, butyric acid, and other volatile compounds that give off odors. Psychrotrophic bacteria (which grow at cold temperatures) produce lipase and protease enzymes that break down fats and proteins, creating rancid and bitter flavors.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>Odor Evaluation:</strong> Begin by slightly agitating the milk can. Then open the lid and immediately evaluate the odor. Fresh milk should have a slightly sweet aroma. Sour, rancid, musty, or chemical odors indicate poor quality or adulteration in milk. Feed flavors (such as silage, garlic, onion) can also be detected.</li>
                <li><strong>Visual Examination:</strong> Observe the color of milk — normal cow milk is slightly yellowish-white (due to beta-carotene), while buffalo milk is white (because buffalo converts beta-carotene to retinol). Any abnormal color — blue (water addition), pink (blood contamination), brown (bacterial contamination), or deep yellow (colostrum) — is a sign of a problem. Check for any foreign matter (hair, dust, insects). Also check the cleanliness of the can — a dirty can reveals poor handling of the milk.</li>
                <li><strong>Temperature Check:</strong> Press your hand against the milk can to check temperature. Ideally, milk should be at 4-10°C if properly chilled. Warm milk (>15°C) indicates it was recently milked or adequate cooling has not been done, increasing the risk of bacterial growth. Record precise temperature with a thermometer.</li>
                <li><strong>Consistency Check:</strong> Agitate the milk with a plunger and observe — normal milk flows smoothly. If milk is too thin (water addition), too thick (starch/gelatin addition), or has lumps or clots (acidity development or mastitis), it is a sign of a problem.</li>
                <li><strong>Taste Test:</strong> Taste a small amount of milk (only when safe to do so). Normal milk is slightly sweet (due to lactose — approximately 4.6-4.8%). Sour taste indicates developed acidity, salty taste indicates NaCl adulteration or mastitis, and bitter taste indicates protein breakdown or late lactation milk.</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Standards:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>Normal Milk</th><th>Abnormal</th><th>Possible Cause</th></tr></thead>
                  <tbody>
                    <tr><td>Color</td><td>White to slightly yellow</td><td>Blue, pink, brown, deep yellow</td><td>Water, blood, bacteria, colostrum</td></tr>
                    <tr><td>Odor</td><td>Slightly sweet, pleasant</td><td>Sour, rancid, chemical, musty</td><td>Acidity, lipolysis, preservatives, mold</td></tr>
                    <tr><td>Taste</td><td>Slightly sweet</td><td>Sour, salty, bitter</td><td>Acidity, NaCl, proteolysis</td></tr>
                    <tr><td>Consistency</td><td>Smooth, homogeneous</td><td>Thin, thick, lumpy</td><td>Water, starch/gelatin, curdling</td></tr>
                    <tr><td>Temperature</td><td>4-10°C (chilled)</td><td>>15°C</td><td>Inadequate cooling</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Inference:</h4>
              <p>Milk that does not meet the required standards is immediately rejected. The result of the organoleptic test is subjective, so it is essential to have trained and experienced personnel. This test is performed before all other platform tests — if the organoleptic test fails, there is no need for further tests.</p>
  
              <h4 class="font-semibold mt-3">Limitations:</h4>
              <ul class="list-disc list-inside mt-1">
                <li>This test is subjective and depends on the training and experience of the person.</li>
                <li>Small amounts of adulteration (e.g., 5-10% water) cannot be detected.</li>
                <li>Chemical adulterants (e.g., urea, melamine) cannot be detected.</li>
                <li>Operator fatigue and sensory adaptation can reduce accuracy.</li>
              </ul>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960, Reaffirmed 2003; FSSAI Manual of Methods of Analysis of Foods - Milk and Milk Products</p>
            </div>
          `
        },
        {
          title: "Clot on Boiling (COB) Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> The COB test is a simple and inexpensive test based on the heat stability of milk. This test detects developed acidity or abnormal protein content in milk. When milk is boiled, it normally remains stable. However, if the amount of lactic acid in milk has increased (more than 0.22%, expressed as lactic acid), the casein protein approaches its isoelectric point (pH 4.6) and coagulates (curdles) under the effect of heat.</p>
  
              <p><strong>Scientific Principle:</strong> Casein micelles in milk are stabilized by calcium phosphate bridges. Normal milk has a pH of approximately 6.6-6.8. When bacteria ferment lactose to produce lactic acid, the pH decreases. With heat, this destabilization accelerates, causing casein micelles to aggregate and form visible clots. Colostrum milk also gives a positive result in this test because the amount of immunoglobulins and other heat-sensitive proteins is very high (total protein ~14% vs normal ~3.2%).</p>
  
              <p><strong>Chemical Reaction:</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Lactose + Bacteria → Lactic Acid (CH₃CHOHCOOH)
  pH decrease → Casein destabilization
  Heat application → Protein coagulation (visible clots)
              </pre>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Take 5 ml of milk in a clean test tube.</li>
                <li>Place it in a boiling water bath (100°C). Ensure the test tube is submerged in water.</li>
                <li>Keep for exactly 5 minutes (for consistent results).</li>
                <li>Remove from the bath without shaking.</li>
                <li>Observe carefully — any sour smell, precipitated particles/flakes/clots, or curd formation.</li>
                <li>Slightly tilt the test tube to see if any coating or particles are sticking to the walls.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Inference and Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Result</th><th>Meaning</th><th>Acidity Range</th><th>Action</th></tr></thead>
                  <tbody>
                    <tr><td>No clot (Negative)</td><td>Milk is heat-stable</td><td>< 0.20% LA</td><td>Accept milk</td></tr>
                    <tr><td>Fine flakes (Weakly Positive)</td><td>Some acidity has developed</td><td>0.20-0.22% LA</td><td>Test immediately</td></tr>
                    <tr><td>Large clots (Strongly Positive)</td><td>High acidity or abnormal milk</td><td>> 0.22% LA</td><td>Reject milk</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Types of Milk That Give Positive Results:</h4>
              <ul class="list-disc list-inside mt-1">
                <li><strong>High acidity milk:</strong> Bacteria have converted lactose to lactic acid (> 0.22% LA)</li>
                <li><strong>Colostrum milk:</strong> Abnormally high protein content (14-16% vs normal 3.2%)</li>
                <li><strong>Mastitis milk:</strong> Altered salt balance and high somatic cell count</li>
                <li><strong>Late lactation milk:</strong> Changed mineral and protein composition</li>
                <li><strong>Neutralizer-added milk:</strong> Can sometimes give false negative because acidity is masked</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Significance:</h4>
              <p>COB positive milk cannot withstand heat treatment during processing (pasteurization 72°C/15 sec or UHT 135°C/2-4 sec). This milk is unsuitable for distribution as liquid milk or for manufacturing any dairy product (butter, cheese, paneer, yogurt, milk powder) as it causes fouling (deposit buildup) in processing equipment.</p>
  
              <h4 class="font-semibold mt-3">Limitations:</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Low acidity (0.18-0.20% LA) is not detected — the alcohol test is more sensitive.</li>
                <li>Milk with added neutralizer can give a false negative.</li>
                <li>Milk with high mineral content can give a false positive.</li>
                <li>There is subjectivity in interpreting results.</li>
              </ul>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; De, S. (2004) "Outlines of Dairy Technology"; Walstra, P. et al. (2006) "Dairy Science and Technology"</p>
            </div>
          `
        },
        {
          title: "Alcohol Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> The alcohol coagulation test is a simple and rapid test that evaluates the protein stability of milk. This test is based on the fact that milk protein (primarily casein micelles) has reduced stability when in contact with alcohol. Alcohol acts as a dehydrating agent — it removes the hydration shell (layer of water) surrounding casein micelles, causing the micelles to stick together (aggregate) and produce visible coagulation.</p>
  
              <p><strong>Scientific Principle:</strong></p>
              <p>Casein micelles remain in colloidal suspension in milk, stabilized by:</p>
              <ul class="list-disc list-inside">
                <li><strong>Steric stabilization:</strong> The hairy layer of κ-casein (kappa-casein) on the micelle surface</li>
                <li><strong>Electrostatic repulsion:</strong> Negative charge that keeps micelles apart from each other</li>
                <li><strong>Hydration:</strong> Water molecules bound around the micelles</li>
              </ul>
              <p>Ethanol (68-75%) disturbs these stabilizing factors:</p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Ethanol → Dehydration of casein micelles
         → Reduction of dielectric constant of medium
         → Decrease in electrostatic repulsion
         → Calcium bridge formation between micelles
         → Aggregation → Visible coagulation (flakes/clots)
              </pre>
              <p>This destabilization is further accelerated when milk contains:</p>
              <ul class="list-disc list-inside">
                <li>Developed acidity (lactic acid ≥ 0.21% LA) — reduced pH decreases charge</li>
                <li>Increased ionic calcium (Ca²⁺) — in mastitis, late lactation</li>
                <li>Presence of rennet — κ-casein gets cleaved</li>
                <li>Abnormally high protein content — in colostrum</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Take 5 ml of milk in a clean, dry test tube.</li>
                <li>Add an equal volume of 68% ethyl alcohol (v/v). Note: 68% concentration is internationally standardized (ISO 8197:2004). Some countries also use 72% or 75% — higher concentration means a more stringent test.</li>
                <li>Immediately close the test tube with a stopper.</li>
                <li>Invert the test tube 3-4 times to thoroughly mix the contents. Avoid vigorous shaking as it creates foam.</li>
                <li>Immediately examine — look for fine particles (curd-like grains) or clots in the milk-alcohol mixture or on the inner walls of the test tube.</li>
                <li>Hold the test tube against a dark background — small flakes are more clearly visible.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Result</th><th>Observation</th><th>Meaning</th><th>Inference</th></tr></thead>
                  <tbody>
                    <tr><td>Negative (Pass)</td><td>No flakes or clots</td><td>Milk is heat-stable</td><td>Accept ✅</td></tr>
                    <tr><td>Weakly Positive</td><td>Very fine, dust-like particles</td><td>Borderline stability</td><td>Further testing ⚠️</td></tr>
                    <tr><td>Positive (Fail)</td><td>Distinct flakes or clots</td><td>Milk is heat-unstable</td><td>Reject ❌</td></tr>
                    <tr><td>Strongly Positive</td><td>Large clots, curd-like</td><td>High acidity or severely abnormal milk</td><td>Reject immediately ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">COB Test vs Alcohol Test — Comparison:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>COB Test</th><th>Alcohol Test</th></tr></thead>
                  <tbody>
                    <tr><td>Sensitivity</td><td>Less sensitive (> 0.22% LA)</td><td>More sensitive (> 0.20% LA)</td></tr>
                    <tr><td>Time</td><td>5 minutes</td><td>< 1 minute</td></tr>
                    <tr><td>Equipment</td><td>Boiling water bath required</td><td>No special equipment needed</td></tr>
                    <tr><td>Application</td><td>General screening</td><td>UHT/sterilization suitability</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Health and Processing Significance:</h4>
              <p>Milk that fails the alcohol test is completely unsuitable for UHT processing (Ultra-High Temperature — 135-150°C, 2-4 seconds) and sterilization. Processing such milk causes fouling (protein deposits) in equipment, which:</p>
              <ul class="list-disc list-inside">
                <li>Reduces heat transfer efficiency</li>
                <li>Increases processing costs (frequent cleaning required)</li>
                <li>Negatively affects product quality and shelf life</li>
                <li>Creates potential food safety issues</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Limitations:</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Milk with high mineral content (late lactation, breed variation) can give false positive</li>
                <li>Alcohol concentration must be accurately prepared — even 1-2% variation affects results</li>
                <li>Milk temperature affects test accuracy — ideally test at 20-25°C</li>
                <li>Colostrum milk always gives a positive result regardless of freshness</li>
              </ul>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; ISO 8197:2004; IDF Standard 48:2020; Horne, D.S. (2016) "Ethanol stability and milk composition"</p>
            </div>
          `
        },
        {
          title: "Alizarin-Alcohol Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> This test is an advanced version of the alcohol test in which alizarin indicator is added. Alizarin (1,2-dihydroxyanthraquinone, C₁₄H₈O₄) is a pH-sensitive dye that gives different colors at different pH levels. Thus, this test not only indicates the heat stability of milk, but also indicates whether the milk is acidic, normal, or alkaline.</p>
  
              <p><strong>Chemical Behavior of Alizarin:</strong></p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>pH Range</th><th>Color of Alizarin</th><th>Condition of Milk</th></tr></thead>
                  <tbody>
                    <tr><td>< 5.5 (Highly Acidic)</td><td>Yellow</td><td>Very high acidity — milk completely spoiled</td></tr>
                    <tr><td>5.5 - 6.0 (Acidic)</td><td>Brownish-Yellow</td><td>Significant acidity development</td></tr>
                    <tr><td>6.0 - 6.5 (Slightly Acidic)</td><td>Brownish</td><td>Slight acidity developed</td></tr>
                    <tr><td>6.4 - 6.8 (Normal)</td><td>Purple / Light Red</td><td>Normal, fresh milk</td></tr>
                    <tr><td>> 6.8 (Alkaline)</td><td>Deep Purple</td><td>Alkaline — mastitis or neutralizer added</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Reagent Preparation:</h4>
              <p>Dissolve 0.2 g alizarin in 100 ml of 68% ethyl alcohol. Store in a dark bottle and use within 1 month. The solution should be dark yellowish-brown in color.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Take 5 ml of milk in a clean test tube.</li>
                <li>Add an equal volume (5 ml) of alizarin-alcohol solution (0.2% alizarin in 68% ethyl alcohol).</li>
                <li>Immediately close the test tube with a stopper and invert 4-5 times to mix thoroughly.</li>
                <li>Now observe two things: (a) Presence of flakes/clots and their size, (b) Color of the mixture.</li>
                <li>Match the result with the table given below.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Comprehensive Interpretation Table:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Flakes/Clots</th><th>Color</th><th>Acidity (% LA)</th><th>Heat Stability</th><th>Quality</th><th>Possible Cause</th></tr></thead>
                  <tbody>
                    <tr><td>Negative (None)</td><td>Purple/Light Red</td><td>0.14-0.18%</td><td>Good</td><td>Satisfactory ✅</td><td>Normal fresh milk</td></tr>
                    <tr><td>Positive (Fine)</td><td>Purple-Light Red</td><td>0.14-0.18%</td><td>Poor</td><td>Unsatisfactory ❌</td><td>Sweet curdling, abnormal salt</td></tr>
                    <tr><td>Positive</td><td>Deep Purple</td><td>< 0.14%</td><td>Poor</td><td>Unsatisfactory ❌</td><td>Mastitis, late lactation, neutralizer</td></tr>
                    <tr><td>Positive</td><td>Brown</td><td>0.18-0.22%</td><td>Poor</td><td>Unsatisfactory ❌</td><td>Developed acidity (mild)</td></tr>
                    <tr><td>Large Flakes</td><td>Yellow</td><td>> 0.22%</td><td>Very Poor</td><td>Completely Unsatisfactory ❌</td><td>High developed acidity, sour milk</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Significance:</h4>
              <p>This test is better than the alcohol test because:</p>
              <ul class="list-disc list-inside mt-1">
                <li>It also indicates the acidity level (based on color)</li>
                <li>It detects mastitis milk (alkaline reaction — deep purple color)</li>
                <li>It identifies late lactation milk</li>
                <li>It signals neutralizer addition (alkaline reaction without bacterial growth)</li>
                <li>It accurately assesses the suitability of milk for UHT and sterilization processing</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; IDF Standard 48:2020; Walstra, P. (2006) "Dairy Science and Technology"</p>
            </div>
          `
        },
        {
          title: "Methylene Blue Reduction Test (MBRT)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> MBRT is the most widely used platform test for evaluating the bacteriological quality of milk. This test is also called the "Dye Reduction Test." It was developed by Barthel and Jensen in 1912. The basic principle of MBRT is that bacteria present in milk produce enzymes (such as reductases — NADH dehydrogenase, lactate dehydrogenase) during their metabolic activity that reduce (convert) the methylene blue dye from colored to colorless (leuco form).</p>
  
              <p><strong>Scientific Principle:</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Methylene Blue (Blue/Oxidized form) + 2H⁺ + 2e⁻ → Leuco-Methylene Blue (Colorless/Reduced form)
                      [Blue]                                      [Colorless]
  
  These electrons and protons come from bacterial metabolism:
  Lactose → Lactic Acid → NADH → electron transfer → dye reduction
  
  More bacteria → more metabolic activity → faster dye reduction → less time required
              </pre>
  
              <p><strong>Mechanism of Dye Reduction:</strong></p>
              <ul class="list-disc list-inside">
                <li>Bacteria metabolize lactose in milk</li>
                <li>In this process, NADH (Nicotinamide Adenine Dinucleotide, reduced form) is produced</li>
                <li>NADH transfers its electrons to methylene blue</li>
                <li>Methylene blue is reduced to leuco-methylene blue (colorless)</li>
                <li>More bacteria = more NADH = faster reduction = decolorization in less time</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Reagent Preparation:</h4>
              <p>Methylene Blue Solution (Standard): Dissolve 1 tablet (containing 8.8 mg methylene blue chloride) in 200 ml sterile distilled water. Store in a dark glass bottle and use within 1 week. The OD (optical density) of fresh solution at 600nm should be 0.60 ± 0.02.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Take 10 ml of well-mixed milk sample in a sterile test tube.</li>
                <li>Add 1 ml of standard methylene blue solution (prepared from tablet).</li>
                <li>Close the test tube with a rubber stopper and invert 2-3 times to mix.</li>
                <li>Keep a control tube (10 ml milk, without dye) — this ensures the natural color of milk does not interfere.</li>
                <li>Place all tubes in a water bath maintained at 37 ± 0.5°C (incubation temperature is critical).</li>
                <li>Check after the first 30 minutes, then every 30 minutes or 1 hour until the color completely disappears.</li>
                <li>When the blue color of milk completely disappears (more than 4/5th decolorized), record that time as the MBRT time.</li>
                <li>Do NOT shake tubes during observation — oxygen mixing will re-oxidize the dye.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">MBRT Grading System (BIS Standard):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>MBRT Time (Reduction Time)</th><th>Milk Quality</th><th>Estimated Bacterial Count</th><th>Grading</th></tr></thead>
                  <tbody>
                    <tr><td>More than 5 hours</td><td>Very Good</td><td>< 5 lakh/ml</td><td>Grade 1 ✅</td></tr>
                    <tr><td>3 - 5 hours</td><td>Good</td><td>5 lakh - 20 lakh/ml</td><td>Grade 2 ✅</td></tr>
                    <tr><td>1 - 3 hours</td><td>Fair</td><td>20 lakh - 1 crore/ml</td><td>Grade 3 ⚠️</td></tr>
                    <tr><td>30 min - 1 hour</td><td>Poor</td><td>1 crore - 5 crore/ml</td><td>Grade 4 ❌</td></tr>
                    <tr><td>Less than 30 minutes</td><td>Very Poor</td><td>> 5 crore/ml</td><td>Reject ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Significance:</h4>
              <ul class="list-disc list-inside mt-1">
                <li>MBRT test is the most widely used screening test in milk processing plants</li>
                <li>It is a good indicator of the keeping quality of milk (how long it will remain fresh)</li>
                <li>MBRT grading is also used in milk payment/pricing — better quality milk gets higher price</li>
                <li>According to FSSAI, Grade 1 and Grade 2 milk is ideal for processing</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Limitations:</h4>
              <ul class="list-disc list-inside mt-1">
                <li>Not all bacteria reduce the dye at the same rate — some species (like Streptococcus) reduce faster while some (like Pseudomonas) reduce slower</li>
                <li>Somatic cells (leucocytes) can also reduce the dye — false fast reduction may occur in mastitis milk</li>
                <li>Natural reducing substances in milk (like ascorbic acid — Vitamin C) can also interfere</li>
                <li>Individual organisms cannot be identified — only total activity is measured</li>
                <li>In milk with antibiotics or preservatives, bacteria are suppressed, so MBRT may give a falsely good result</li>
                <li>Oxygen exposure can re-oxidize the dye — false slow reduction</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; BIS:5764-1970; IDF Standard 100B:1991; APHA Standard Methods for Examination of Dairy Products</p>
            </div>
          `
        },
        {
          title: "Ten-Minute Resazurin Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> This test is a rapid method for quickly detecting supplies of poor quality milk. Resazurin (7-hydroxy-3H-phenoxazin-3-one 10-oxide, C₁₂H₇NO₄) is an oxidation-reduction indicator that is BLUE in the oxidized state. On reduction due to bacterial activity or other causes, it first IRREVERSIBLY changes into a PINK compound "resorufin" and then into COLORLESS 'dihydroresorufin'. The second change is a REVERSIBLE reaction.</p>
  
              <p><strong>Chemical Reactions:</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Step 1 (Irreversible):
  Resazurin (Blue, λmax = 600nm) + 2H → Resorufin (Pink, λmax = 572nm)
                                           ↓ [One oxygen atom lost]
  
  Step 2 (Reversible):
  Resorufin (Pink) + 2H ⇌ Dihydroresorufin (Colorless)
                            ↑ [Re-oxidized by O₂ exposure]
              </pre>
  
              <p>During the first stage, from resazurin (blue) to resorufin (pink) reduction, various intermediate color shades develop in milk which can be matched against standard color discs in a comparator. Resazurin disc numbers range from 6 (blue, no reduction) to 0 (white, complete reduction).</p>
  
              <h4 class="font-semibold mt-3">Reagent Preparation:</h4>
              <p><strong>Bench Solution:</strong> Dissolve 1 Resazurin tablet (containing 25 mg resazurin sodium salt) in 50 ml sterile distilled water = 0.05% solution. Prepare fresh and use within 8 hours. The color of the solution should be blue-purple. Store in a dark bottle.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li>Take a milk sample from a can and mix thoroughly. Then transfer 10 ml to a sterile test tube.</li>
                <li>Add 1 ml bench resazurin solution (0.05%). Apply stopper and gently invert to mix (avoid vigorous mixing).</li>
                <li>Place in a water bath maintained at 37.5 ± 0.5°C. Correct temperature is very important — even 1°C difference affects results.</li>
                <li>After exactly 10 minutes, remove the tube from the water bath.</li>
                <li>Place the tube in the right compartment of the comparator. Place a control milk tube in the left compartment of the comparator to compensate for the natural color.</li>
                <li>Rotate the standard resazurin disc until it matches the sample and note the corresponding disc reading. When the color falls between two disc numbers, record it as a half value (e.g., 4.5, 3.5).</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Resazurin Disc Color Guide:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Disc Number</th><th>Color</th><th>Reduction Level</th></tr></thead>
                  <tbody>
                    <tr><td>6</td><td>Blue</td><td>No reduction — very few bacteria</td></tr>
                    <tr><td>5</td><td>Blue-Purple</td><td>Very slight reduction</td></tr>
                    <tr><td>4</td><td>Purple</td><td>Slight reduction</td></tr>
                    <tr><td>3</td><td>Purple-Pink</td><td>Moderate reduction</td></tr>
                    <tr><td>2</td><td>Pink</td><td>Significant reduction</td></tr>
                    <tr><td>1</td><td>Pink-White</td><td>Very high reduction</td></tr>
                    <tr><td>0</td><td>White/Colorless</td><td>Complete reduction — very high bacteria</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Results and Classification:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>S.No.</th><th>Resazurin Disc Reading</th><th>Keeping Quality</th><th>Remarks</th></tr></thead>
                  <tbody>
                    <tr><td>1</td><td>6, 5 or 4</td><td>Satisfactory</td><td>Accept milk ✅</td></tr>
                    <tr><td>2</td><td>3.5 to 1</td><td>Doubtful</td><td>Further testing required ⚠️</td></tr>
                    <tr><td>3</td><td>0.5 to 0</td><td>Unsatisfactory</td><td>Reject milk ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">MBRT vs Resazurin Test — Comparison:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>MBRT</th><th>10-Min Resazurin</th></tr></thead>
                  <tbody>
                    <tr><td>Time</td><td>30 min - 6+ hours</td><td>10 minutes</td></tr>
                    <tr><td>Sensitivity</td><td>More accurate</td><td>Rapid screening</td></tr>
                    <tr><td>Use</td><td>Detailed grading</td><td>Quick reject/accept</td></tr>
                    <tr><td>Color change</td><td>Blue → White</td><td>Blue → Pink → White</td></tr>
                    <tr><td>Reading method</td><td>Time-based</td><td>Color disc matching</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; IDF Standard 100B:1991; BIS Standard</p>
            </div>
          `
        },
        {
          title: "One-Hour Resazurin Reduction Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction:</strong> This is an extended version of the 10-minute resazurin test used to more accurately grade raw milk supplies. The principle is exactly the same — resazurin changes from blue to pink (resorufin) and then to colorless (dihydroresorufin). The 1-hour extended incubation period allows for greater differentiation — this test is more reliable than the 10-minute test because bacteria get more time to grow.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <p>Exactly the same as the 10-minute test, except the incubation time is 60 minutes (1 hour) instead of 10 minutes at 37.5°C.</p>
  
              <h4 class="font-semibold mt-3">Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>1-Hour Resazurin Disc Number</th><th>Milk Quality</th><th>Estimated Bacteria</th><th>Action</th></tr></thead>
                  <tbody>
                    <tr><td>4 or above</td><td>Good ✅</td><td>< 5 lakh/ml</td><td>Ideal for processing</td></tr>
                    <tr><td>3.5 to 1</td><td>Satisfactory ⚠️</td><td>5-50 lakh/ml</td><td>Accept but monitor</td></tr>
                    <tr><td>0.5 to 0</td><td>Poor ❌</td><td>> 50 lakh/ml</td><td>Reject</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; IDF Standard 100B:1991</p>
            </div>
          `
        },
        {
          title: "Direct Microscopic Somatic Cell Count (DMSCC)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> In the DMSCC method, a measured volume of milk (0.01 ml) is spread over a specified area (1 sq. cm) on a glass slide, stained, and examined under a compound microscope. Somatic cells are cells normally present in milk — these mainly include leucocytes (white blood cells — neutrophils, macrophages, lymphocytes) and epithelial cells (from udder lining).</p>
  
              <p><strong>Scientific Significance:</strong></p>
              <ul class="list-disc list-inside">
                <li><strong>Normal SCC:</strong> Milk from a healthy cow has an SCC of approximately 1-2 lakh cells/ml</li>
                <li><strong>Subclinical Mastitis:</strong> 2-5 lakh cells/ml — no visible symptoms but milk quality and yield are affected</li>
                <li><strong>Clinical Mastitis:</strong> > 5 lakh cells/ml — udder inflammation, clots in milk, significant drop in yield</li>
                <li>As SCC increases, the amount of proteolytic and lipolytic enzymes in milk increases, reducing shelf life</li>
                <li>High SCC milk has less casein and more whey protein — cheese yield decreases</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li><strong>Determination of Microscope Factor:</strong> Measure the diameter of the microscope field with a stage micrometer. Calculate the field area: Area = π × (d/2)². Microscopic Factor (MF) = Smear area (1 sq cm = 100 sq mm) / Field area. Example: if field diameter = 0.146 mm, then field area = 0.01675 sq mm, MF = 100/0.01675 = 5,970 ≈ 6,000.</li>
                <li><strong>Preparing Milk Smear:</strong> Using a calibrated pipette, spread exactly 0.01 ml of milk uniformly over 1 sq cm area on a slide. Dry at 40-45°C. Ensure the sample is uniformly spread — uneven spreading will result in inaccurate count.</li>
                <li><strong>Staining Films:</strong> Immerse films in Newman's stain for 1/2 to 1 minute. Newman's stain is a methylene blue-based stain that in one operation removes fat, fixes cells, and stains organisms. Alternative: Levowitz-Weber stain can also be used.</li>
                <li><strong>Microscopic Examination:</strong> Examine stained films under oil immersion objective (100x). Count a minimum of 50 microscopic fields (ideally 100 fields). Count individual organisms or clumps of cells.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Calculation:</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  SCC per ml = Average number of cells per field × Microscope Factor (MF)
  
  Example: If 250 somatic cells are counted in 50 fields
  Average = 250/50 = 5 cells/field
  SCC/ml = 5 × 6,000 = 30,000 cells/ml (Normal)
  
  If average = 100 cells/field
  SCC/ml = 100 × 6,000 = 6,00,000 cells/ml (Mastitis indicator!)
              </pre>
  
              <h4 class="font-semibold mt-3">SCC Interpretation Guide:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>SCC (cells/ml)</th><th>Interpretation</th><th>Milk Quality Impact</th></tr></thead>
                  <tbody>
                    <tr><td>< 2,00,000</td><td>Normal, Healthy Udder</td><td>Best quality, maximum yield</td></tr>
                    <tr><td>2,00,000 - 4,00,000</td><td>Borderline — monitoring needed</td><td>Slight quality decrease possible</td></tr>
                    <tr><td>4,00,000 - 7,50,000</td><td>Subclinical Mastitis likely</td><td>Reduced casein, altered minerals, shorter shelf life</td></tr>
                    <tr><td>7,50,000 - 10,00,000</td><td>Mastitis infection</td><td>Significant quality loss, enzyme damage</td></tr>
                    <tr><td>> 10,00,000</td><td>Severe Mastitis</td><td>Milk unsuitable for processing</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">EU and FSSAI Standards:</h4>
              <ul class="list-disc list-inside">
                <li>EU Standard: Raw milk SCC < 4,00,000 cells/ml (geometric mean over 3 months)</li>
                <li>USA Standard: < 7,50,000 cells/ml (Grade A PMO)</li>
                <li>FSSAI: Currently no specific SCC limit notified, but 5,00,000 cells/ml is considered an indicator</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part III) - 1962; IDF Standard 148-2:2006; APHA Standard Methods; National Mastitis Council Guidelines</p>
            </div>
          `
        },
        {
          title: "Detection of Mastitis",
          content: `
            <div class="prose max-w-none">
              <p><strong>Introduction and Scientific Background:</strong> Mastitis (udder inflammation) is one of the most common and costly diseases of dairy animals. Globally, mastitis causes an annual loss of approximately $35 billion to the dairy industry. The estimated loss in India is approximately ₹7,000-10,000 crore annually. Mastitis reduces milk yield by 10-70% (depending on severity), alters the chemical composition of milk (less casein, more whey protein, less lactose, more Na⁺ and Cl⁻, altered fat composition), and renders milk unsuitable for use.</p>
  
              <p><strong>Types of Mastitis:</strong></p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>Clinical Mastitis</th><th>Subclinical Mastitis</th></tr></thead>
                  <tbody>
                    <tr><td>External Symptoms</td><td>Swelling, redness, pain, warm udder</td><td>No visible symptoms</td></tr>
                    <tr><td>Changes in Milk</td><td>Clots, pus, blood, watery</td><td>Appears normal</td></tr>
                    <tr><td>SCC</td><td>> 10,00,000/ml</td><td>2,00,000 - 10,00,000/ml</td></tr>
                    <tr><td>Frequency</td><td>Less (~30% of all cases)</td><td>More (~70% of all cases)</td></tr>
                    <tr><td>Economic Loss</td><td>Very high (treatment + milk loss)</td><td>High (hidden yield loss)</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p><strong>Common Causative Organisms:</strong></p>
              <ul class="list-disc list-inside">
                <li><strong>Staphylococcus aureus</strong> — most common, contagious, chronic infection</li>
                <li><strong>Streptococcus agalactiae</strong> — contagious, udder-specific pathogen</li>
                <li><strong>E. coli</strong> — environmental, acute/severe cases</li>
                <li><strong>Streptococcus uberis</strong> — environmental, from bedding</li>
                <li><strong>Klebsiella spp.</strong> — environmental, from sawdust bedding</li>
                <li><strong>Mycoplasma bovis</strong> — contagious, difficult to treat</li>
              </ul>
  
              <h4 class="font-semibold mt-3">1. Strip-Cup Test:</h4>
              <p><strong>Principle:</strong> In clinical mastitis, foremilk (first milk drawn) contains fibrin, mucus, and milk clots that can be seen with the naked eye.</p>
              <ol class="list-decimal list-inside">
                <li>Strip the first 2-3 streams of foremilk onto a strip-cup (a black cloth stretched over a cup).</li>
                <li>Check for presence of clots, flakes, or abnormal color on the black cloth.</li>
                <li><strong>Positive:</strong> Clots, flakes, or strings visible in milk = Clinical mastitis</li>
                <li><strong>Note:</strong> This test should be done before every milking — very helpful in early detection</li>
              </ol>
  
              <h4 class="font-semibold mt-3">2. California Mastitis Test (CMT):</h4>
              <p><strong>Principle:</strong> CMT reagent (sodium alkyl aryl sulfonate — an anionic surfactant) reacts with the nuclear DNA of somatic cells to form a gel-like mass. More somatic cells = thicker gel.</p>
              <ol class="list-decimal list-inside">
                <li>Collect a small amount (2-3 ml) of milk from each of the 4 quarters separately into the 4 cups of the CMT paddle.</li>
                <li>Add an equal amount of CMT reagent to each cup.</li>
                <li>Rotate the paddle in a circular motion for 10-15 seconds.</li>
                <li>Observe gel formation — scoring given below.</li>
              </ol>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Score</th><th>Reaction</th><th>Gel Consistency</th><th>Estimated SCC</th><th>Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td>Negative (N)</td><td>No change</td><td>Liquid, no thickening</td><td>< 2,00,000</td><td>Normal ✅</td></tr>
                    <tr><td>Trace (T)</td><td>Slight thickening</td><td>Slightly thick, quickly disappears</td><td>2-4 lakh</td><td>Suspicious ⚠️</td></tr>
                    <tr><td>1+</td><td>Mild thickening</td><td>Thickening present but not gel</td><td>4-15 lakh</td><td>Subclinical ⚠️</td></tr>
                    <tr><td>2+</td><td>Moderate gel</td><td>Clear gel formation, moves as mass</td><td>15-50 lakh</td><td>Mastitis positive ❌</td></tr>
                    <tr><td>3+</td><td>Strong gel</td><td>Thick gel, sticks to paddle, peaks</td><td>> 50 lakh</td><td>Severe mastitis ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">3. Bromothymol Blue Test:</h4>
              <p><strong>Principle:</strong> Normal milk has a pH of 6.6-6.8, but milk from mastitis-infected quarters is generally alkaline (pH 7.0-7.4). In mastitis, the blood-milk barrier is damaged, causing blood components (Na⁺, Cl⁻, HCO₃⁻) to leak into milk, raising the pH.</p>
              <p>pH range of bromothymol blue: Yellow (acidic, pH < 6.0) → Green (neutral, pH 6.0-7.6) → Blue (alkaline, pH > 7.6)</p>
              <ol class="list-decimal list-inside">
                <li>Add 1 ml bromothymol blue indicator solution to 5 ml milk.</li>
                <li><strong>Yellowish-green color:</strong> Normal milk (pH 6.4-6.8) ✅</li>
                <li><strong>Greenish-blue color:</strong> Mastitis suspected (pH 6.8-7.2) ⚠️</li>
                <li><strong>Blue color:</strong> Mastitis confirmed (pH > 7.2) ❌</li>
              </ol>
  
              <h4 class="font-semibold mt-3">4. Electrical Conductivity (EC) Test:</h4>
              <p><strong>Principle:</strong> In mastitis, the amount of Na⁺ and Cl⁻ ions increases and K⁺ and lactose decrease. As ions increase, the electrical conductivity of milk increases.</p>
              <ul class="list-disc list-inside">
                <li>Normal milk EC: 4.0-5.5 mS/cm (milliSiemens per centimeter)</li>
                <li>Mastitis milk EC: > 6.0 mS/cm</li>
                <li>This test is widely used in automated milking systems for real-time monitoring</li>
              </ul>
  
              <h4 class="font-semibold mt-3">5. Leucocyte Count:</h4>
              <p>Milk from infected quarters contains an excessive number of leucocyte cells. Counted by DMSCC or automated cell counters (like Fossomatic™). A leucocyte count greater than 5,00,000/ml is an indicator of mastitis infection.</p>
  
              <h4 class="font-semibold mt-3">6. N-Acetyl-β-D-Glucosaminidase (NAGase) Test:</h4>
              <p><strong>Principle:</strong> NAGase is an enzyme released from damaged udder tissue and neutrophils. Its level increases significantly in mastitis. This test is very sensitive for subclinical mastitis.</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479; National Mastitis Council (NMC) Guidelines; IDF Bulletin 321; Sharma, N. et al. (2011) "Mastitis: An Overview", Asian J. Animal & Veterinary Advances</p>
            </div>
          `
        },
        {
          title: "SOPs for Acidity and Alkaline Phosphatase Testing",
          content: `
            <div class="prose max-w-none">
              <h4 class="font-semibold">A. Titratable Acidity of Milk:</h4>
              <p><strong>Scientific Background:</strong> The titratable acidity of milk consists of two components:</p>
              <ul class="list-disc list-inside">
                <li><strong>Natural/Apparent Acidity:</strong> This is naturally present in fresh milk and is due to casein proteins (contributes ~0.05-0.08% LA), phosphates (~0.04% LA), citrates (~0.01% LA), and dissolved CO₂ (~0.01% LA). The natural acidity of fresh cow milk is approximately 0.13-0.14% LA.</li>
                <li><strong>Developed Acidity:</strong> This develops from fermentation of lactose to lactic acid by bacteria (mainly Lactobacillus, Streptococcus): Lactose → 4 Lactic Acid (C₁₂H₂₂O₁₁ + H₂O → 4 CH₃CHOHCOOH)</li>
              </ul>
              <p>Total Titratable Acidity = Natural Acidity + Developed Acidity</p>
  
              <h4 class="font-semibold mt-2">Procedure:</h4>
              <ol class="list-decimal list-inside">
                <li>Take 10 ml milk in a porcelain basin or conical flask.</li>
                <li>Add 0.5 ml phenolphthalein indicator (1% in 95% ethanol).</li>
                <li>Titrate with 0.1 N NaOH solution from a burette until a faint pink color appears that persists for 15-30 seconds.</li>
                <li>Note the volume of NaOH used.</li>
              </ol>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  % Lactic Acid = (ml of 0.1N NaOH × 0.009 × 100) / Volume of milk sample (ml)
  
  Example: 1.5 ml of 0.1N NaOH was used for 10 ml milk
  % LA = (1.5 × 0.009 × 100) / 10 = 0.135% (Normal cow milk)
              </pre>
  
              <h4 class="font-semibold mt-3">Standard Acidity Values:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Type of Milk</th><th>Normal Acidity (% LA)</th><th>Acceptable Range</th></tr></thead>
                  <tbody>
                    <tr><td>Cow Milk</td><td>0.13 - 0.14%</td><td>0.12 - 0.18%</td></tr>
                    <tr><td>Buffalo Milk</td><td>0.14 - 0.15%</td><td>0.12 - 0.18%</td></tr>
                    <tr><td>Mixed Milk</td><td>0.13 - 0.15%</td><td>0.12 - 0.18%</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">B. Phosphatase Test (For Pasteurized Milk):</h4>
              <p><strong>Scientific Background:</strong> Alkaline phosphatase (ALP) is an enzyme naturally present in raw milk. This enzyme is associated with the milk fat globule membrane (MFGM). The thermal inactivation temperature of this enzyme is slightly above pasteurization conditions (72°C/15 seconds or 63°C/30 minutes) — meaning if pasteurization has been done correctly, ALP will be completely inactivated.</p>
  
              <p><strong>Chemical Reaction (Aschaffenburg-Mullen Method):</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Disodium p-nitrophenyl phosphate (colorless substrate)
       ↓ Alkaline Phosphatase enzyme (if present/active)
  p-Nitrophenol (YELLOW color) + Phosphate
  
  If milk is properly pasteurized → ALP inactive → No yellow color → TEST NEGATIVE ✅
  If milk is NOT properly pasteurized → ALP active → Yellow color → TEST POSITIVE ❌
              </pre>
  
              <h4 class="font-semibold mt-3">Procedure (Aschaffenburg-Mullen Method):</h4>
              <ol class="list-decimal list-inside">
                <li>Take 5 ml milk in a test tube.</li>
                <li>Add 1 ml buffer substrate (disodium p-nitrophenyl phosphate in sodium carbonate-bicarbonate buffer, pH 10.0).</li>
                <li>Incubate at 37 ± 0.5°C for 2 hours.</li>
                <li>Compare color with standard tubes.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Color</th><th>ALP Activity (μg p-NP/ml)</th><th>Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td>No color (Colorless)</td><td>< 4</td><td>Proper pasteurization ✅</td></tr>
                    <tr><td>Faint yellow</td><td>4-10</td><td>Borderline — recheck ⚠️</td></tr>
                    <tr><td>Deep yellow</td><td>> 10</td><td>Inadequate pasteurization ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I & II); IS:5764-1970; FSSAI Manual; Aschaffenburg, R. & Mullen, J.E.C. (1949)</p>
            </div>
          `
        },
        {
          title: "Total Solids (TS) and Solids-Not-Fat (SNF) Testing with Lactometer",
          content: `
            <div class="prose max-w-none">
              <p><strong>Scientific Background:</strong> Milk is a complex biological fluid containing water (~87%), fat (~3.5-6.5%), protein (~3.0-3.5%), lactose (~4.6-4.8%), minerals (~0.7-0.8%), and vitamins. Solids-Not-Fat (SNF) = Total Solids - Fat. SNF includes protein, lactose, and minerals. SNF is an important indicator of the nutritional quality of milk and milk pricing is also based on it.</p>
  
              <p><strong>Principle of Lactometer:</strong> A lactometer is a hydrometer specifically calibrated to measure the specific gravity (relative density) of milk. It works on Archimedes' Principle — when a body is immersed in liquid, a buoyant force equal to the weight of the displaced liquid acts on it. Normal milk has a specific gravity of 1.028-1.034 (cow) or 1.030-1.035 (buffalo) at 27°C.</p>
  
              <p><strong>Effect of water addition:</strong> Adding water reduces specific gravity (SG of water = 1.000). Removing fat (skimming) increases SG (SG of fat = 0.93, which is lighter than milk). Therefore, if someone first removes cream and then adds water, the SG can come back to normal range — this is called "double adulteration" and cannot be detected by lactometer.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside mt-1">
                <li><strong>Fat % determination:</strong> Determine the fat percentage of milk using the Gerber method.</li>
                <li><strong>Temperature adjustment:</strong> Heat the milk sample to 40°C (for proper mixing), then cool it to 27 ± 1°C (ISI lactometer is calibrated at 27°C).</li>
                <li><strong>Lactometer reading:</strong> Pour milk into a lactometer jar (avoid foaming). Gently insert the ISI-marked lactometer and allow it to float freely. Record the lactometer reading (LR) at the top of the meniscus. Take the reading within 15-20 seconds.</li>
                <li><strong>Temperature correction:</strong> If the milk temperature is not exactly 27°C, apply correction: For every 1°C above → add 0.5 to LR; For every 1°C below → subtract 0.5 from LR.</li>
                <li><strong>Calculate Corrected Lactometer Reading (CLR).</strong></li>
              </ol>
  
              <h4 class="font-semibold mt-3">Calculations (Richmond's Formula):</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  Cow Milk:
  SNF (%) = (CLR / 4) + (0.25 × Fat %) + 0.44
  
  Buffalo Milk:
  SNF (%) = (CLR / 4) + (0.25 × Fat %) + 0.72 [or 0.44 — formula varies]
  
  Total Solids (TS %) = Fat % + SNF %
  
  Example (Cow Milk):
  Fat = 4.0%, CLR = 28
  SNF = (28/4) + (0.25 × 4.0) + 0.44 = 7.0 + 1.0 + 0.44 = 8.44%
  TS = 4.0 + 8.44 = 12.44%
              </pre>
  
              <h4 class="font-semibold mt-3">FSSAI Standards (Minimum Requirements):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Parameter</th><th>Cow Milk</th><th>Buffalo Milk</th><th>Mixed Milk</th></tr></thead>
                  <tbody>
                    <tr><td>Fat (minimum %)</td><td>3.2%</td><td>5.0%</td><td>3.5%</td></tr>
                    <tr><td>SNF (minimum %)</td><td>8.3%</td><td>9.0%</td><td>8.5%</td></tr>
                    <tr><td>Specific Gravity (at 27°C)</td><td>1.028 - 1.034</td><td>1.030 - 1.035</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Estimating Water Adulteration:</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  % Water Added (approximate) = 100 × (1 - CLR observed / CLR standard)
  
  Example: Observed CLR = 22, Standard CLR for cow milk = 28
  % Water = 100 × (1 - 22/28) = 100 × 0.214 = 21.4% water has been added
              </pre>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; IS:1183-1965 (Lactometer specification); FSSAI Standards; De, S. (2004) "Outlines of Dairy Technology"</p>
            </div>
          `
        },
            {
          title: "Freezing Point Test (Cryoscopy)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Scientific Background:</strong> The freezing point of milk is one of its most stable (constant) properties. The freezing point of normal cow milk is -0.520 to -0.560°C (BIS standard: -0.512 to -0.575°C), while that of buffalo milk is -0.518 to -0.543°C. This property is due to dissolved solutes in milk — primarily lactose (~55% contribution) and chlorides/minerals (~25% contribution).</p>
  
              <p><strong>Chemical Principle (Colligative Property):</strong> Freezing point depression is a colligative property — it depends on the number of dissolved particles, not their type. According to Raoult's Law:</p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  ΔTf = Kf × m × i
  
  Where:
  ΔTf = Freezing point depression
  Kf = Cryoscopic constant of water (1.86 °C·kg/mol)
  m = Molality of solute
  i = Van't Hoff factor (ionization factor)
  
  Adding water dilutes dissolved solutes
  → Effective molality (m) decreases
  → ΔTf decreases
  → Freezing point moves toward 0°C
              </pre>
  
              <p><strong>Sensitivity:</strong> The freezing point test is very sensitive — even adding just 1% water causes a detectable change in freezing point (~0.006°C shift). This makes this test the GOLD STANDARD for detecting water adulteration.</p>
  
              <h4 class="font-semibold mt-3">Procedure (Cryoscope Method):</h4>
              <ol class="list-decimal list-inside">
                <li>Use a modern thermistor cryoscope (such as Fiske, Advanced Instruments, or Laktron).</li>
                <li>Add 2.0-2.5 ml milk sample into the sample tube.</li>
                <li>Place the tube in the cooling chamber where temperature is set between -7°C to -12°C.</li>
                <li>The instrument supercools the milk (below freezing point without crystallizing).</li>
                <li>A wire stirrer automatically vibrates to induce ice crystal nucleation.</li>
                <li>Temperature rapidly reaches the equilibrium freezing point — the instrument automatically records this point.</li>
                <li>Result is displayed in °C or °H (degrees Hortvet).</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Interpretation:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Freezing Point (°C)</th><th>Interpretation</th><th>Estimated % Water Added</th></tr></thead>
                  <tbody>
                    <tr><td>-0.525 to -0.565</td><td>Normal, pure milk ✅</td><td>0%</td></tr>
                    <tr><td>-0.512 to -0.525</td><td>Suspicious ⚠️</td><td>Possibly 1-3%</td></tr>
                    <tr><td>-0.500 to -0.512</td><td>Water has been added ❌</td><td>~3-5%</td></tr>
                    <tr><td>> -0.500 (e.g., -0.480)</td><td>Significant water adulteration ❌</td><td>> 5%</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Formula to Calculate % Water Added:</h4>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  % Water Added = [(FP standard - FP observed) / FP standard] × 100
  
  Example: FP standard = -0.540°C, FP observed = -0.500°C
  % Water = [(-0.540 - (-0.500)) / -0.540] × 100 = [(-0.040) / (-0.540)] × 100 = 7.4%
              </pre>
  
              <h4 class="font-semibold mt-3">Limitations:</h4>
              <ul class="list-disc list-inside">
                <li>If salt/sugar is also added along with water, the freezing point may be compensated</li>
                <li>Natural variation occurs due to breed, season, feed, and lactation stage</li>
                <li>Instrument calibration is essential — calibrate with standard sucrose solutions</li>
                <li>Developed acidity (lactic acid formation) also slightly decreases freezing point (false effect)</li>
              </ul>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part II) - 1961; IDF Standard 108:2009; ISO 5764:2009; Codex Alimentarius</p>
            </div>
          `
        },
        {
          title: "Sedimentation / Dirt Test",
          content: `
            <div class="prose max-w-none">
              <p><strong>Scientific Background:</strong> This test measures the amount of visible dirt and foreign matter in milk. Sources of dirt in milk include lack of udder cleanliness, dirty milking areas, dirty equipment, and poor handling. Dirt may include soil, dung particles, hair, feed particles, and insects.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside">
                <li>Filter 500 ml of milk through a special sediment test disc (cotton pad filter). Use standard vacuum or gravity filtration.</li>
                <li>Dry the disc and compare it with a standard sediment disc (ADPI/USDA Sediment Standards) to grade the milk.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Grading System (USDA/ADPI Standards):</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Grade</th><th>Sediment Description</th><th>Disc Appearance</th><th>Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td>Grade 1 (No. 1)</td><td>Practically sediment-free</td><td>Clean, hardly any particles</td><td>Excellent hygiene ✅</td></tr>
                    <tr><td>Grade 2 (No. 2)</td><td>Light sediment</td><td>Slight discoloration, few particles</td><td>Acceptable ✅</td></tr>
                    <tr><td>Grade 3 (No. 3)</td><td>Moderate sediment</td><td>Noticeable dirt particles</td><td>Needs improvement ⚠️</td></tr>
                    <tr><td>Grade 4 (No. 4)</td><td>Heavy sediment</td><td>Clearly dirty disc</td><td>Unacceptable ❌</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Significance:</h4>
              <p>High levels of sediment in milk indicate poor hygiene during milking, poor udder health, and poor equipment sanitation. Sediment is directly correlated with bacterial contamination.</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; ADPI Standards; USDA Inspection Manual</p>
            </div>
          `
        },
        {
          title: "pH Measurement of Milk",
          content: `
            <div class="prose max-w-none">
              <p><strong>Scientific Background:</strong> pH is a logarithmic measure of hydrogen ion (H⁺) concentration in milk. pH = -log[H⁺]. Normal fresh milk has a pH of 6.6-6.8 (slightly acidic). pH is different from titratable acidity — pH indicates the actual hydrogen ion concentration while titratable acidity indicates total acid content (including buffered acids).</p>
  
              <p><strong>Buffer System of Milk:</strong> Milk has excellent buffering capacity mainly due to casein proteins, phosphates, and citrates. Because of this, even when significant lactic acid develops, pH initially decreases very slowly. Therefore, pH measurement alone is less sensitive than titratable acidity for early acidity detection.</p>
  
              <h4 class="font-semibold mt-3">pH Ranges and Their Meaning:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>pH Value</th><th>Condition of Milk</th><th>Possible Cause</th></tr></thead>
                  <tbody>
                    <tr><td>7.0 - 7.4</td><td>Alkaline</td><td>Mastitis, late lactation, neutralizer added</td></tr>
                    <tr><td>6.6 - 6.8</td><td>Normal fresh milk</td><td>Fresh milk from healthy animal</td></tr>
                    <tr><td>6.4 - 6.6</td><td>Slightly acidic</td><td>Early bacterial growth, colostrum</td></tr>
                    <tr><td>6.0 - 6.4</td><td>Acidic</td><td>Significant developed acidity</td></tr>
                    <tr><td>< 6.0</td><td>Highly acidic</td><td>Advanced spoilage, near curdling</td></tr>
                    <tr><td>~4.6</td><td>Isoelectric point of casein</td><td>Casein coagulation/curdling</td></tr>
                  </tbody>
                </table>
              </div>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside">
                <li>Calibrate the pH meter with standard buffer solutions (pH 4.0 and 7.0).</li>
                <li>Immerse the clean electrode in the milk sample (bring sample temperature to 20-25°C).</li>
                <li>Note the pH when a stable reading appears.</li>
                <li>Wash the electrode with distilled water after each reading.</li>
              </ol>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I); AOAC Official Methods; FSSAI Manual</p>
            </div>
          `
        },
        {
          title: "Fat Content — Gerber Method (Detailed)",
          content: `
            <div class="prose max-w-none">
              <p><strong>Scientific Background:</strong> The Gerber method is the most widely used rapid method for measuring fat content in milk. It was developed by N. Gerber in Switzerland in 1892. In this method, sulphuric acid dissolves milk proteins and releases fat. Amyl alcohol acts as a surfactant that helps fat separate cleanly.</p>
  
              <p><strong>Chemical Principle:</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  H₂SO₄ (conc.) + Milk Proteins → Dissolved proteins (acid hydrolysis)
                                  → Releases milk fat from fat globule membrane
  Amyl Alcohol (C₅H₁₁OH) → Reduces surface tension → Aids clean fat separation
  Heat + Centrifugation → Fat column separates in butyrometer neck
  
  Fat is read directly from the calibrated butyrometer scale.
              </pre>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside">
                <li>First add 10 ml conc. H₂SO₄ (specific gravity 1.807-1.812 at 27°C) to the Gerber butyrometer. Add carefully — acid is highly corrosive!</li>
                <li>Then slowly add 10.75 ml of well-mixed milk sample over the acid (using a pipette, along the side wall).</li>
                <li>Then add 1 ml amyl alcohol (isoamyl alcohol, specific gravity 0.814-0.816).</li>
                <li>Close the butyrometer with the lock stopper.</li>
                <li>Wrap in cloth and shake vigorously until everything is mixed and no white particles remain. It will be very hot — be careful!</li>
                <li>Place in a water bath at 65 ± 2°C for 5 minutes.</li>
                <li>Place in a Gerber centrifuge and centrifuge at 1100-1200 rpm for 4-5 minutes.</li>
                <li>Place again in water bath at 65°C for 3-5 minutes.</li>
                <li>Take the fat column reading — from bottom of meniscus to top of meniscus. Reading is obtained directly in % fat.</li>
              </ol>
  
              <h4 class="font-semibold mt-3">FSSAI Minimum Fat Standards:</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr><th>Type of Milk</th><th>Minimum Fat %</th></tr></thead>
                  <tbody>
                    <tr><td>Cow Milk</td><td>3.2%</td></tr>
                    <tr><td>Buffalo Milk</td><td>5.0%</td></tr>
                    <tr><td>Mixed Milk</td><td>4.5%</td></tr>
                    <tr><td>Toned Milk</td><td>3.0%</td></tr>
                    <tr><td>Double Toned Milk</td><td>1.3%</td></tr>
                    <tr><td>Skimmed Milk</td><td>< 0.5%</td></tr>
                  </tbody>
                </table>
              </div>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1224 (Part I) - 1977; IDF Standard 105:2008; ISO 2446:2008</p>
            </div>
          `
        },
        {
          title: "Turbidity Test — Pasteurization Check",
          content: `
            <div class="prose max-w-none">
              <p><strong>Scientific Background:</strong> The turbidity test is a confirmatory test for checking the efficiency of milk pasteurization and sterilization. This test is based on the principle that whey proteins (especially serum albumin and immunoglobulins) are heat-labile and denature above 80°C, becoming insoluble. The whey obtained by treating properly sterilized milk with acid should be completely clear (all whey proteins are denatured). If the whey is turbid, the milk has not been properly sterilized.</p>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside">
                <li>Take 5 ml milk in a test tube and add 5 ml of 4% ammonium sulphate solution.</li>
                <li>Boil for 5 minutes (in a boiling water bath).</li>
                <li>Filter and observe the clarity of the filtrate.</li>
                <li><strong>Clear filtrate:</strong> Proper sterilization ✅</li>
                <li><strong>Turbid (cloudy) filtrate:</strong> Improper heat treatment ❌</li>
              </ol>
  
              <p><strong>Note:</strong> This test is primarily for sterilized/UHT milk, not for HTST pasteurized milk (because some whey proteins survive in HTST).</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part II); FSSAI Manual of Methods</p>
            </div>
          `
        }
      ],
  
      preservatives: [
        {
          title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
          content: `
            <div class="prose max-w-none prose-blue">
              <p><strong>Scientific Background:</strong> Neutralizers are chemical agents added to milk to mask/neutralize developed acidity (lactic acid). When bacteria ferment lactose in milk to produce lactic acid, the milk turns sour (acidity increases). Dishonest milk vendors add alkalis (NaOH — caustic soda, Na₂CO₃ — soda ash/washing soda, NaHCO₃ — baking soda) to make this sour milk appear "fresh." These bring the pH of milk back to the normal range, but bacteria and their toxins still remain in the milk.</p>
  
              <p><strong>Chemical Reaction:</strong></p>
              <pre class="bg-gray-100 p-2 rounded text-sm">
  CH₃CHOHCOOH + NaOH → CH₃CHOHCOONa + H₂O
  (Lactic Acid)   (Caustic Soda)  (Sodium Lactate)   (Water)
  
  2CH₃CHOHCOOH + Na₂CO₃ → 2CH₃CHOHCOONa + H₂O + CO₂↑
  (Lactic Acid)   (Soda Ash)    (Sodium Lactate)   (Water) (Gas)
  
  CH₃CHOHCOOH + NaHCO₃ → CH₃CHOHCOONa + H₂O + CO₂↑
  (Lactic Acid)  (Baking Soda)  (Sodium Lactate)   (Water) (Gas)
              </pre>
  
              <p><strong>Health Hazards:</strong></p>
              <ul class="list-disc list-inside">
                <li><strong>NaOH (Caustic Soda):</strong> Highly corrosive — can burn gastrointestinal tract mucous membranes, esophageal damage, severe pain</li>
                <li><strong>Na₂CO₃:</strong> GI tract irritation, nausea, vomiting — chronic exposure leads to alkalosis</li>
                <li><strong>NaHCO₃:</strong> Comparatively less harmful, but in excess causes metabolic alkalosis, electrolyte imbalance</li>
                <li>Biggest danger: Bacteria and toxins still present in neutralized milk — risk of food poisoning</li>
                <li>Neutralizer masks the natural warning system of milk (sour taste/smell)</li>
              </ul>
  
              <h4 class="font-semibold mt-3">Method 1: Rosalic Acid Test (Rapid Field Test)</h4>
              <p><strong>Principle:</strong> Rosalic acid (aurin, C₁₉H₁₄O₃) is a pH indicator that gives yellow/brown color in acidic conditions and red (rose-red) color in alkaline conditions. If a neutralizer has been added to milk, the milk will become alkaline and rosalic acid will give a red color.</p>
              <ol class="list-decimal list-inside">
                <li>Take 10 ml milk in a test tube and add an equal volume of 95% ethyl alcohol.</li>
                <li>Add 4-5 drops of 0.1% rosalic acid solution and mix thoroughly.</li>
                <li><strong>Rose-Red Color:</strong> Indicates the presence of neutralizer ❌</li>
                <li><strong>Brownish Color:</strong> Pure milk — no neutralizer ✅</li>
              </ol>
              <p><strong>Sensitivity:</strong> This test can detect more than 0.05% (500 ppm) NaOH.</p>
  
              <h4 class="font-semibold mt-3">Method 2: Alkalinity of Ash Test</h4>
              <p><strong>Principle:</strong> When milk is burned (ashing), its ash contains minerals and their salts. The alkalinity of normal milk ash is within a specific range. If a neutralizer has been added, the ash will contain a higher amount of Na compounds, which will increase alkalinity.</p>
              <ol class="list-decimal list-inside">
                <li>Take 20 ml milk in a silica crucible.</li>
                <li>First evaporate water on a water bath, then char on an electric hotplate.</li>
                <li>Place in a muffle furnace at 550°C for 3-4 hours until white/grey ash is obtained.</li>
                <li>Dissolve ash in 10 ml distilled water.</li>
                <li>Add phenolphthalein indicator and titrate with 0.1 N HCl.</li>
                <li><strong>Consumption of more than 1.2 ml 0.1 N HCl:</strong> Presence of neutralizer ❌</li>
                <li>Normal milk: 1.0-1.2 ml 0.1 N HCl (per 20 ml milk)</li>
              </ol>
  
              <h4 class="font-semibold mt-3">Method 3: Determination of Actual Lactic Acid/Lactate Content</h4>
              <p><strong>Principle:</strong> This is the most definitive test. If a neutralizer has been added to milk, its titratable acidity will appear normal or low (because the neutralizer has neutralized the acid), BUT the actual lactic acid content will be high (because bacteria have produced the acid, the neutralizer has only neutralized it). This mismatch reveals neutralization.</p>
              <p><strong>Method:</strong> Spectrophotometric — lactic acid is oxidized to produce acetaldehyde, which gives a violet color with p-hydroxydiphenyl at 570 nm.</p>
              <ol class="list-decimal list-inside">
                <li>Prepare a protein-free filtrate with copper sulphate and calcium hydroxide.</li>
                <li>Heat the filtrate with concentrated H₂SO₄ and CuSO₄ (lactic acid → acetaldehyde).</li>
                <li>Add p-hydroxydiphenyl reagent and incubate for 30 minutes.</li>
                <li>Measure the intensity of violet color at 570 nm with a spectrophotometer.</li>
                <li>Calculate lactic acid concentration from a standard curve.</li>
                <li><strong>Decision Rule:</strong> If titratable acidity is normal or low (≤ 0.14% LA), BUT actual lactic acid content is > 30 mg/100 ml → Neutralization suspected ❌</li>
              </ol>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part I) - 1960; BIS:1981; FSSAI Manual; De, S. (2004)</p>
            </div>
          `
        },
        {
          title: 'Boric Acid and Borates',
          content: `
            <div class="prose max-w-none prose-blue">
              <p><strong>Scientific Background:</strong> Boric acid (H₃BO₃) and borates (such as sodium tetraborate — borax, Na₂B₄O₇·10H₂O) are used as preservatives in milk. Boric acid is a weak antiseptic that inhibits bacterial growth by interfering with their cell membrane function and metabolic enzymes. Borax can sometimes also contaminate milk as a detergent residue (from equipment washing).</p>
  
              <p><strong>Health Hazards:</strong></p>
              <ul class="list-disc list-inside">
                <li>Acute toxicity: Nausea, vomiting, diarrhea, abdominal cramps</li>
                <li>Chronic exposure: Kidney damage (boric acid is slowly excreted by kidneys and accumulates)</li>
                <li><strong>Reproductive toxicity:</strong> Fertility problems and testicular atrophy reported in animal studies. WHO/EFSA has declared it a reproductive toxicant.</li>
                <li>Children are more susceptible — even low doses can be harmful</li>
                <li>LD₅₀ (oral, rat): 2,660 mg/kg body weight</li>
              </ul>
  
              <p><strong>Principle:</strong> Boric acid and borates react with the curcumin pigment of turmeric under acidic conditions to form a red-brown color (rosocyanine complex). This complex turns dark blue-green with ammonium hydroxide (NH₄OH).</p>
  
              <pre class="bg-gray-100 p-2 rounded text-sm">
  H₃BO₃ + Curcumin (Turmeric) + HCl → Rosocyanine Complex (RED color)
  Rosocyanine Complex + NH₄OH → Dark Bluish-Green color (CONFIRMATION)
              </pre>
  
              <h4 class="font-semibold mt-3">Procedure:</h4>
              <ol class="list-decimal list-inside">
                <li>Take 5 ml milk in a test tube and add 1 ml concentrated HCl.</li>
                <li>Mix thoroughly.</li>
                <li>Dip a strip of turmeric paper and remove.</li>
                <li>Dry the paper strip at room temperature (not with direct heat — it will change turmeric's color).</li>
                <li>Appearance of <strong>Red Color</strong> on paper indicates presence of boric acid ❌</li>
                <li>For confirmation: Add a drop of ammonium hydroxide (dilute NH₄OH) on the red paper.</li>
                <li>Change from red to <strong>Dark Bluish-Green</strong> CONFIRMS the presence of boric acid ❌</li>
                <li>In normal milk, the paper remains yellow ✅</li>
              </ol>
  
              <p><strong>Sensitivity:</strong> This test can detect 500 ppm (0.05%) boric acid.</p>
              <p><strong>FSSAI Limit:</strong> ZERO — boric acid/borates are not allowed in any amount.</p>
  
              <p class="text-xs mt-2"><strong>Reference:</strong> IS:1479 (Part II) - 1961; FSSAI Manual; WHO/JECFA Monograph</p>
            </div>
          `
        },
        {
            title: 'Formalin (Formaldehyde — HCHO)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Formaldehyde (HCHO) is an organic compound that is the simplest aldehyde. It is a colorless, strong-smelling gas known in aqueous solution as "formalin" (typically 37-40% formaldehyde by weight). Formalin is illegally added to milk because it is a powerful bactericidal and bacteriostatic agent that prevents microbial growth, artificially extending the shelf life of milk.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards & Toxicology</h4>
                        <ul class="text-red-700">
                            <li><strong>Carcinogenicity:</strong> IARC (International Agency for Research on Cancer) has classified formaldehyde as a <strong>Group 1 carcinogen</strong> — it is a proven cause of nasopharyngeal cancer and leukemia.</li>
                            <li><strong>Acute Toxicity:</strong> Oral LD₅₀ (rat) = 100 mg/kg body weight. Ingestion of 30 ml formalin in humans can be fatal.</li>
                            <li><strong>Mechanism of Harm:</strong> Formaldehyde cross-links proteins, damages DNA, and inactivates cellular enzymes. It severely damages the mucosal lining of the gastrointestinal tract.</li>
                            <li><strong>Chronic Exposure Symptoms:</strong> Abdominal pain, vomiting, diarrhea, ulceration of mouth and stomach, kidney damage, liver cirrhosis, and nervous system disorders.</li>
                            <li><strong>Reproductive Toxicity:</strong> Fertility problems and fetal abnormalities have been reported in animal studies with formaldehyde exposure.</li>
                            <li><strong>Allergic Reactions:</strong> Skin sensitization, contact dermatitis, and respiratory allergies are commonly reported.</li>
                        </ul>
                    </div>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h4 class="text-yellow-800 font-bold">📋 Legal Status & Regulatory Framework</h4>
                        <ul class="text-yellow-700">
                            <li><strong>FSSAI (Food Safety and Standards Authority of India):</strong> Addition of formaldehyde to milk is <strong>completely prohibited</strong> under FSSAI Act 2006, Section 26.</li>
                            <li><strong>IPC Section 272/273:</strong> Imprisonment up to 6 months and fine for adulteration.</li>
                            <li><strong>FDA (US):</strong> Formaldehyde has not been given GRAS (Generally Recognized As Safe) status as a food preservative.</li>
                            <li><strong>Codex Alimentarius:</strong> There is no permissible limit for formaldehyde in milk — zero tolerance policy.</li>
                            <li><strong>EU Regulations:</strong> Use of formaldehyde in dairy products is strictly banned in the EU as well.</li>
                        </ul>
                    </div>
    
                    <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                        <h4 class="text-purple-800 font-bold">🧪 Chemical Behavior of Formaldehyde in Milk</h4>
                        <p class="text-purple-700">When formaldehyde is added to milk, it reacts with the amino groups (-NH₂) of casein proteins and forms methylene bridges (-N=CH₂). This process:</p>
                        <ul class="text-purple-700">
                            <li>Causes protein denaturation</li>
                            <li>Inactivates bacterial enzymes</li>
                            <li>Prevents the natural souring process of milk</li>
                            <li>Brings subtle changes in milk consistency</li>
                            <li>Masks the natural flavor of milk</li>
                        </ul>
                        <p class="text-purple-700 mt-2"><strong>Chemical Reaction:</strong></p>
                        <pre class="bg-purple-100 p-2 rounded"><code>R-NH₂ + HCHO → R-N=CH₂ + H₂O (Schiff base formation)
    2 R-NH₂ + HCHO → R-NH-CH₂-NH-R + H₂O (Methylene bridge cross-linking)</code></pre>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 1: Leach Test (Hehner Test / Sulphuric Acid Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Formaldehyde reacts with ferric salts (Fe³⁺) in the presence of concentrated sulphuric acid (H₂SO₄) to produce a characteristic <strong>violet/purple color</strong>. This reaction is actually a variant of the Marquis reaction. Formaldehyde undergoes a condensation reaction with aromatic compounds (present in milk proteins, such as tryptophan and tyrosine amino acid residues), and concentrated H₂SO₄ acts both as an oxidizing agent and a dehydrating agent. Ferric chloride (FeCl₃) acts as a catalyst that increases the sensitivity of the reaction.</p>
                        
                        <p class="mt-2"><strong>Detailed Chemical Mechanism:</strong></p>
                        <ul>
                            <li>Step 1: H₂SO₄ hydrolyzes proteins, releasing free amino acids</li>
                            <li>Step 2: HCHO undergoes electrophilic substitution with the indole ring of tryptophan</li>
                            <li>Step 3: Fe³⁺ ions act as an oxidation catalyst</li>
                            <li>Step 4: The resulting conjugated compound shows violet/purple color</li>
                        </ul>
                    </div>
                    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>Concentrated Hydrochloric Acid (HCl) — AR grade, 36-38%</li>
                        <li>10% Ferric Chloride solution (FeCl₃) — freshly prepared</li>
                        <li>Detecting reagent: Mix 100 ml conc. HCl + 2 ml 10% FeCl₃ solution</li>
                        <li>Boiling water bath</li>
                        <li>Clean, dry test tubes (Borosilicate glass preferred)</li>
                        <li>Positive control: milk + known amount of formalin (0.1%)</li>
                        <li>Negative control: pure, unadulterated milk</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>Sample Preparation:</strong> Take approximately <strong>5 ml milk sample</strong> in a clean, dry test tube. The sample should be fresh and at room temperature.</li>
                        <li><strong>Reagent Addition:</strong> Add <strong>equal volume (5 ml) of detecting reagent</strong> (mixture of concentrated HCl + 10% FeCl₃ solution). Add the reagent slowly, sliding it along the wall of the tube — do not add in a direct stream so that layers can form properly.</li>
                        <li><strong>Heating:</strong> Gently place the test tube in a <strong>boiling water bath for 3-4 minutes</strong>. Intermittently mix with gentle swirling, but do not shake vigorously. Water bath temperature should be 95-100°C.</li>
                        <li><strong>Observation:</strong> Carefully remove the tube from the water bath and observe color against a white background.</li>
                        <li><strong>Comparison:</strong> Compare result with positive control and negative control.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Color Developed</th>
                                    <th class="border p-2">Inference</th>
                                    <th class="border p-2">Approximate Concentration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2">No color change</td>
                                    <td class="border p-2">White/Cream (milk's natural color)</td>
                                    <td class="border p-2">Formalin <strong>ABSENT</strong> — Sample is pure</td>
                                    <td class="border p-2">0% (Not detected)</td>
                                </tr>
                                <tr class="bg-red-50">
                                    <td class="border p-2">Faint color change</td>
                                    <td class="border p-2">Light brownish-pink</td>
                                    <td class="border p-2"><strong>TRACE AMOUNT</strong> of formalin present</td>
                                    <td class="border p-2">< 0.05%</td>
                                </tr>
                                <tr class="bg-red-100">
                                    <td class="border p-2">Distinct color change</td>
                                    <td class="border p-2"><strong>Brownish-pink to violet</strong></td>
                                    <td class="border p-2">Formalin <strong>PRESENT</strong> — Confirmed positive</td>
                                    <td class="border p-2">0.05 - 0.2%</td>
                                </tr>
                                <tr class="bg-red-200">
                                    <td class="border p-2">Strong color</td>
                                    <td class="border p-2"><strong>Deep violet/purple</strong></td>
                                    <td class="border p-2"><strong>HIGH CONCENTRATION</strong> of formalin present</td>
                                    <td class="border p-2">> 0.2%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Important Notes:</strong></p>
                        <ul>
                            <li>Always test a control sample (pure milk) simultaneously for comparison</li>
                            <li>Conc. HCl is highly corrosive — use gloves and eye protection</li>
                            <li>Perform test in a fume hood as HCl fumes are hazardous</li>
                            <li>Ferric chloride solution should be freshly prepared — old solution can give false results</li>
                            <li>Sensitivity: can detect up to approximately 1:250,000 dilution</li>
                            <li>This test is qualitative — use spectrophotometric methods for exact quantification</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 2: Chromotropic Acid Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Formaldehyde reacts with <strong>chromotropic acid</strong> (4,5-dihydroxy-2,7-naphthalenedisulfonic acid, disodium salt) in the presence of concentrated sulphuric acid to produce a <strong>stable violet-purple color</strong>. This reaction is highly specific for formaldehyde and does not interfere with other aldehydes. In the chemical mechanism, formaldehyde undergoes condensation with two chromotropic acid molecules, forming a di-substituted product that oxidizes in concentrated H₂SO₄ to give the characteristic violet chromophore.</p>
                        
                        <p class="mt-2"><strong>Chemical Reaction:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>2 Chromotropic Acid + HCHO → Condensation Product (Violet)
                        
    Reaction Conditions: Concentrated H₂SO₄, 60-100°C, 15-30 min</code></pre>
                        
                        <p class="mt-2"><strong>Advantages over Leach Test:</strong></p>
                        <ul>
                            <li>Higher specificity — highly selective for formaldehyde</li>
                            <li>Fewer interfering substances — not interfered by acetaldehyde, acetone</li>
                            <li>Better sensitivity — can detect lower concentrations</li>
                            <li>Color is stable — remains consistent for 1-2 hours</li>
                        </ul>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>Chromotropic acid disodium salt (C₁₀H₆Na₂O₈S₂·2H₂O) — 1% aqueous solution freshly prepared</li>
                        <li>Concentrated Sulphuric Acid (H₂SO₄) — AR grade, 98%</li>
                        <li>Alternative: Chromotropic acid reagent = 50 mg chromotropic acid dissolved in 1 ml water + 5 ml conc. H₂SO₄</li>
                        <li>Boiling water bath (95-100°C)</li>
                        <li>Clean test tubes, pipettes</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>Sample Preparation:</strong> Take <strong>1 ml milk sample</strong> in a clean test tube.</li>
                        <li><strong>Reagent Addition:</strong> Add <strong>1 ml chromotropic acid reagent</strong> (1% solution) and <strong>gently mix</strong> by swirling.</li>
                        <li><strong>Acid Addition:</strong> Slowly add <strong>2 ml concentrated H₂SO₄</strong> along the wall of the tube. This step must be done very carefully as the reaction is exothermic.</li>
                        <li><strong>Heating:</strong> Place the tube in a <strong>boiling water bath for 15-20 minutes</strong>.</li>
                        <li><strong>Cooling:</strong> Remove the tube from the bath and allow it to <strong>cool to room temperature</strong>.</li>
                        <li><strong>Observation:</strong> Observe the color change against a white background.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2">No color / White remains</td>
                                    <td class="border p-2">Formalin <strong>ABSENT</strong> — Control sample will look the same</td>
                                </tr>
                                <tr class="bg-yellow-50">
                                    <td class="border p-2"><strong>Yellow color</strong> develops</td>
                                    <td class="border p-2">Formalin at <strong>LOW CONCENTRATION</strong> present — Suspicious result, confirmatory test needed</td>
                                </tr>
                                <tr class="bg-red-50">
                                    <td class="border p-2"><strong>Violet/Purple color</strong> develops</td>
                                    <td class="border p-2">Formalin <strong>CONFIRMED PRESENT</strong> — Sample is adulterated</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 3: Hehner's Test (Ring Test / Layer Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> When formaldehyde-containing milk is carefully layered over concentrated sulphuric acid, a <strong>violet/purple ring</strong> forms at the junction (interface) of the two liquids. This ring is produced by the reaction of protein amino acids (especially tryptophan) with formaldehyde in the dehydrating and oxidizing environment of concentrated H₂SO₄.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>2-3 ml concentrated H₂SO₄</strong> in a clean test tube.</li>
                        <li>Tilt the test tube at approximately <strong>45° angle</strong>.</li>
                        <li>Using a pipette, very slowly layer <strong>2-3 ml milk sample</strong> over the surface of the sulphuric acid — the two layers should not mix.</li>
                        <li>Gently bring the tube to an <strong>upright position</strong>.</li>
                        <li><strong>Wait 2-5 minutes</strong> and observe the interface.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Violet/Purple ring at interface:</strong> Formalin PRESENT</li>
                        <li><strong>Brown ring (normal reaction of milk proteins):</strong> Formalin ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 4: Schiff's Reagent Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Schiff's reagent (decolorized fuchsin / rosaniline hydrochloride treated with SO₂) reacts with formaldehyde to produce a characteristic <strong>magenta/pink-purple color</strong>. This is the classical test for aldehydes. SO₂ in Schiff's reagent has rendered the fuchsin dye colorless; when formaldehyde reacts with it, a colored aldehyde-bisulfite-dye complex forms that restores the color. Importantly, ketones give a negative result in this test, making it specific for aldehydes.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Prepare a <strong>protein-free filtrate</strong> of milk: 5 ml milk + 5 ml 20% TCA, mix, filter.</li>
                        <li>Take <strong>2 ml filtrate</strong> in a clean test tube.</li>
                        <li>Add <strong>2 ml Schiff's reagent</strong>.</li>
                        <li>Allow to stand at room temperature for <strong>10-15 minutes</strong>.</li>
                        <li>Observe color.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Pink to magenta/purple color:</strong> Formalin PRESENT</li>
                        <li><strong>Remains colorless:</strong> Formalin ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 5: Nash Reagent Method (Quantitative — Spectrophotometric)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> This is a <strong>quantitative method</strong> that determines the exact concentration of formaldehyde. Formaldehyde reacts with <strong>acetylacetone (2,4-pentanedione)</strong> and <strong>ammonia</strong> to form <strong>3,5-diacetyl-1,4-dihydrolutidine (DDL)</strong>, which is a yellow compound. This reaction is called the <strong>Hantzsch reaction</strong>. The intensity of yellow color is directly proportional to formaldehyde concentration and is measured spectrophotometrically at <strong>412 nm</strong>.</p>
                        
                        <p class="mt-2"><strong>Chemical Equation:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>HCHO + 2 CH₃COCH₂COCH₃ + NH₃ → DDL (Yellow, λmax = 412 nm) + 3 H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Prepare a protein-free filtrate of milk using TCA precipitation.</li>
                        <li>Mix the filtrate with Nash reagent (ammonium acetate + acetic acid + acetylacetone).</li>
                        <li>Incubate at 60°C for 10 minutes.</li>
                        <li>Cool and read absorbance at 412 nm.</li>
                        <li>Calculate formaldehyde concentration from a standard curve.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Detection Limit:</h5>
                    <p>Can detect up to 0.1 ppm (parts per million) — very sensitive method.</p>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 6: Rapid Strip Test (Field Method)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Commercially available formalin detection strips/kits based on chromotropic acid or similar reagents. These are ready-to-use strips that can be used in field conditions without sophisticated equipment.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Dip the detection strip into the milk sample for <strong>30 seconds</strong>.</li>
                        <li>Remove the strip and wait <strong>2-5 minutes</strong>.</li>
                        <li>Compare the strip color with the <strong>reference color chart</strong> provided in the kit.</li>
                    </ol>
    
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
                        <h4 class="text-green-800 font-bold">✅ Best Practices & Quality Assurance</h4>
                        <ul class="text-green-700">
                            <li>Always include a <strong>positive control</strong> (milk + known formalin) and <strong>negative control</strong> (pure milk) in every test</li>
                            <li>Confirm with at least <strong>2 methods</strong> — do not rely on a single test</li>
                            <li>Check the <strong>expiry date</strong> of reagents — expired reagents can give false negatives</li>
                            <li>Properly <strong>document</strong> results — record date, time, method, result, analyst name</li>
                            <li>In contested cases, send sample to a <strong>NABL accredited lab</strong> for quantitative analysis</li>
                            <li>Formaldehyde is volatile — store samples in <strong>sealed containers</strong> and test quickly</li>
                        </ul>
                    </div>
    
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 mt-4">
                        <h4 class="text-indigo-800 font-bold">📊 Comparison of All Methods</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse border">
                                <thead>
                                    <tr class="bg-indigo-100">
                                        <th class="border p-2">Method</th>
                                        <th class="border p-2">Type</th>
                                        <th class="border p-2">Sensitivity</th>
                                        <th class="border p-2">Specificity</th>
                                        <th class="border p-2">Time Required</th>
                                        <th class="border p-2">Equipment Needed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="border p-2">Leach Test</td><td class="border p-2">Qualitative</td><td class="border p-2">Moderate</td><td class="border p-2">Moderate</td><td class="border p-2">5-10 min</td><td class="border p-2">Basic lab</td></tr>
                                    <tr><td class="border p-2">Chromotropic Acid</td><td class="border p-2">Qualitative</td><td class="border p-2">High</td><td class="border p-2">High</td><td class="border p-2">20-25 min</td><td class="border p-2">Basic lab</td></tr>
                                    <tr><td class="border p-2">Hehner's Ring</td><td class="border p-2">Qualitative</td><td class="border p-2">Moderate</td><td class="border p-2">Moderate</td><td class="border p-2">5 min</td><td class="border p-2">Minimal</td></tr>
                                    <tr><td class="border p-2">Schiff's Reagent</td><td class="border p-2">Qualitative</td><td class="border p-2">High</td><td class="border p-2">Moderate</td><td class="border p-2">15-20 min</td><td class="border p-2">Basic lab</td></tr>
                                    <tr><td class="border p-2">Nash (Hantzsch)</td><td class="border p-2">Quantitative</td><td class="border p-2">Very High</td><td class="border p-2">Very High</td><td class="border p-2">30-45 min</td><td class="border p-2">Spectrophotometer</td></tr>
                                    <tr><td class="border p-2">Rapid Strip</td><td class="border p-2">Semi-quantitative</td><td class="border p-2">Moderate</td><td class="border p-2">Moderate</td><td class="border p-2">2-5 min</td><td class="border p-2">None (kit)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual of Methods of Analysis of Foods — Milk and Milk Products (2015), AOAC Official Methods, Codex Alimentarius CAC/RCP 57-2004</p>
                </div>
            `
        },
             {
            title: 'Hydrogen Peroxide (H₂O₂)',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Hydrogen Peroxide (H₂O₂) is a strong oxidizing agent known by the molecular formula H₂O₂. It is a colorless liquid that is illegally added to milk because it is an effective bactericidal agent. The mechanism of H₂O₂ — it generates reactive oxygen species (ROS) that damage bacterial cell membranes, DNA, and enzymes, thereby stopping bacterial growth and artificially extending the apparent shelf life of milk.</p>
                        <p class="text-blue-700 mt-2">Fresh milk naturally contains an enzyme <strong>lactoperoxidase</strong> that converts trace amounts of H₂O₂ along with thiocyanate (SCN⁻) into antimicrobial hypothiocyanite (OSCN⁻) — this is the <strong>Lactoperoxidase System (LP System)</strong>. However, the level of externally added H₂O₂ is far higher than this natural system and creates health hazards.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Gastrointestinal Irritation:</strong> Ingestion of H₂O₂ can cause irritation and ulceration of the stomach and intestinal mucosal lining</li>
                            <li><strong>Oxidative Stress:</strong> ROS cause cellular damage — lipid peroxidation, protein oxidation, DNA damage</li>
                            <li><strong>Nutritional Destruction:</strong> H₂O₂ destroys Vitamin C (ascorbic acid), Vitamin B₁ (thiamine), and other antioxidants in milk</li>
                            <li><strong>Enzyme Destruction:</strong> Natural beneficial enzymes like lipase and phosphatase are destroyed</li>
                            <li><strong>Gas Embolism Risk:</strong> High concentration ingestion rapidly releases O₂ gas in the stomach which is dangerous</li>
                        </ul>
                    </div>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h4 class="text-yellow-800 font-bold">📋 Legal Status</h4>
                        <p class="text-yellow-700">Under FSSAI, addition of H₂O₂ to milk is <strong>strictly prohibited</strong>. Codex Alimentarius has given limited permission for very low concentrations (≤30 ppm) only for LP System activation under controlled conditions — and only in areas where refrigeration is not available and proper regulatory oversight exists. Even this is not allowed in general commercial milk in India.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 1: Para-Phenylenediamine (PPD) Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Hydrogen peroxide is a strong oxidizer. The enzyme <strong>lactoperoxidase</strong> naturally present in milk (or exogenously added peroxidase) decomposes H₂O₂ and in this process releases nascent oxygen [O]. This nascent oxygen oxidizes <strong>para-phenylenediamine (PPD)</strong> — PPD is an aromatic amine that changes its color from yellow to <strong>blue/indigo</strong> when oxidized (Bandrowski's base formation). Therefore, raw milk is mixed in this test to provide the lactoperoxidase enzyme that facilitates detection of H₂O₂.</p>
                        
                        <p class="mt-2"><strong>Chemical Reaction:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>H₂O₂ + Lactoperoxidase → H₂O + [O] (Nascent Oxygen)
    3 PPD (reduced, colorless/yellow) + 2[O] → Bandrowski's Base (Blue/Purple) + 2H₂O</code></pre>
                        
                        <p class="mt-2"><strong>Note:</strong> Raw milk is required for this test because lactoperoxidase is inactivated in pasteurized milk. If the tested sample is pasteurized, exogenous peroxidase (such as horseradish peroxidase) can be used.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>2% Para-phenylenediamine dihydrochloride solution (freshly prepared in distilled water)</li>
                        <li>Raw (unpasteurized) milk — as a source of lactoperoxidase enzyme</li>
                        <li>Clean test tubes, dropper/pipette</li>
                        <li>Positive control: raw milk + 0.1% H₂O₂</li>
                        <li>Negative control: pure raw milk</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>2 ml of the suspected milk sample</strong> in a test tube.</li>
                        <li>Add <strong>2 ml of known pure raw milk</strong> (enzyme source) and gently mix.</li>
                        <li>Add <strong>2-3 drops of 2% para-phenylenediamine solution</strong>.</li>
                        <li><strong>Shake the tube well</strong> and observe for <strong>2-5 minutes</strong>.</li>
                        <li>Note the color development and compare with controls.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2">No significant color change / slight yellowish</td>
                                    <td class="border p-2">H₂O₂ <strong>ABSENT</strong></td>
                                </tr>
                                <tr class="bg-red-50">
                                    <td class="border p-2"><strong>Blue/Indigo color</strong> develops within 2-5 minutes</td>
                                    <td class="border p-2">H₂O₂ <strong>PRESENT</strong> — Sample is adulterated</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 2: Potassium Iodide (KI) and Starch Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> This is a classic iodometric detection method. H₂O₂ is an oxidizer that oxidizes <strong>potassium iodide (KI)</strong> to release <strong>free iodine (I₂)</strong>. The released iodine then reacts with <strong>starch</strong> to form a <strong>characteristic deep blue-black complex</strong> (starch-iodine complex). This complex is actually an inclusion compound of iodine molecules in the helical structure of the amylose in starch.</p>
                        
                        <p class="mt-2"><strong>Chemical Reactions:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Step 1: H₂O₂ + 2KI → I₂ + 2KOH (Oxidation of iodide to iodine)
    Step 2: I₂ + Starch → Blue-Black Complex (Iodine trapped in amylose helix)
    
    Net: H₂O₂ + 2KI + Starch → Blue-Black Color + 2KOH</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li>Potassium Iodide-Starch reagent: 1% KI + 1% soluble starch in distilled water</li>
                        <li>Alternative: Separate 2% KI solution + 1% starch solution</li>
                        <li>Dilute sulphuric acid (2N H₂SO₄) — optional, to increase sensitivity</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk sample</strong> in a test tube.</li>
                        <li>Add <strong>1 ml KI-starch reagent</strong> (or separately 0.5 ml 2% KI + 0.5 ml 1% starch).</li>
                        <li>Optional: Add <strong>2-3 drops dilute H₂SO₄</strong> — this increases the sensitivity of the reaction at acidic pH.</li>
                        <li><strong>Gently mix</strong> and observe for <strong>2-5 minutes</strong>.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue-black color:</strong> H₂O₂ PRESENT</li>
                        <li><strong>No blue color:</strong> H₂O₂ ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 3: Vanadium Pentoxide (V₂O₅) Catalytic Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Vanadium pentoxide reacts with H₂O₂ to form a <strong>red-brown colored pervanadic acid (HVO₄)</strong>. This test is highly sensitive for H₂O₂ and is less affected by interferents.</p>
                        <pre class="bg-gray-100 p-2 rounded"><code>V₂O₅ + 3H₂O₂ → 2HVO₄ (red-brown) + 2H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Add 5 ml 10% TCA to 5 ml milk and filter.</li>
                        <li>Add a few drops of 1% V₂O₅ (dissolved in dilute H₂SO₄) to the filtrate.</li>
                        <li><strong>Red-brown color:</strong> H₂O₂ PRESENT</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Method 4: Titanium Sulphate Method (Quantitative)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> H₂O₂ reacts with titanium(IV) ions to form a <strong>yellow-orange pertitanic acid complex</strong> that is measured spectrophotometrically at 410 nm. This is a quantitative method.</p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Ti⁴⁺ + H₂O₂ + 2H₂O → H₂TiO₄ (yellow) + 4H⁺</code></pre>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-4">
                        <p><strong>⚠️ Important Considerations:</strong></p>
                        <ul>
                            <li>H₂O₂ is unstable and decomposes over time — test samples quickly</li>
                            <li>The natural catalase enzyme in milk decomposes H₂O₂ — delay can give a false negative</li>
                            <li>Catalase is inactivated in pasteurized milk, so H₂O₂ persists longer</li>
                            <li>Some bacteria (catalase-positive) can also decompose H₂O₂</li>
                            <li>Raw milk is essential for the PPD test — pasteurized milk does not contain the enzyme</li>
                            <li>Light and heat accelerate H₂O₂ decomposition — keep samples in dark, cool conditions</li>
                        </ul>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual (2015), AOAC 957.08, Codex Alimentarius</p>
                </div>
            `
        },
        {
            title: 'Salicylic Acid and Benzoic Acid',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700"><strong>Salicylic Acid (C₇H₆O₃, 2-Hydroxybenzoic acid)</strong> and <strong>Benzoic Acid (C₇H₆O₂, Benzenecarboxylic acid)</strong> are both organic acids with antimicrobial properties. They are illegally added to milk to preserve it.</p>
                        <ul class="text-blue-700 mt-2">
                            <li><strong>Salicylic Acid:</strong> The active metabolite of Aspirin (acetylsalicylic acid). It inhibits bacterial cell wall synthesis and also blocks prostaglandin synthesis.</li>
                            <li><strong>Benzoic Acid:</strong> It inhibits microbial growth in acidic foods by disrupting the proton motive force across bacterial cell membranes. Sodium benzoate (its salt) is commonly used.</li>
                        </ul>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Salicylic Acid:</strong> GI irritation, risk of Reye's syndrome (especially in children), tinnitus, metabolic acidosis, hypoglycemia</li>
                            <li><strong>Benzoic Acid:</strong> Allergic reactions (urticaria, asthma), hyperactivity in children, potential benzene formation when reacting with Vitamin C</li>
                            <li><strong>Chronic Exposure:</strong> Kidney damage, liver toxicity</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Method: Ferric Chloride Test (Ether Extraction Method)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Both acids are first isolated from milk by <strong>ether extraction</strong> (because these organic acids are soluble in ether). Then the extracted residue is reacted with <strong>ferric chloride (FeCl₃)</strong>. <strong>Salicylic acid</strong>, due to its phenolic -OH group, forms a stable <strong>violet/purple chelate complex</strong> with Fe³⁺. <strong>Benzoic acid</strong> forms a <strong>salmon/buff colored precipitate</strong> (ferric benzoate) with Fe³⁺.</p>
                        
                        <p class="mt-2"><strong>Chemical Reactions:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Salicylic Acid: 3 C₇H₅(OH)COO⁻ + Fe³⁺ → [Fe(C₇H₄(OH)COO)₃] (Violet complex)
    Benzoic Acid: 3 C₆H₅COO⁻ + Fe³⁺ → Fe(C₆H₅COO)₃↓ (Salmon precipitate)</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li><strong>Acidification:</strong> Take <strong>10 ml milk</strong> and acidify with <strong>2-3 drops of concentrated HCl</strong> (pH ~2). This step converts the acids from ionized form to protonated (uncharged) form, making them ether-soluble.</li>
                        <li><strong>Ether Extraction:</strong> Add <strong>15-20 ml diethyl ether</strong>, close the tube with a stopper, and <strong>shake vigorously</strong> for 2 minutes. Allow layers to separate — the acids will extract into the ether (upper layer).</li>
                        <li><strong>Evaporation:</strong> Carefully pipette the upper ether layer into a clean evaporating dish and allow the <strong>ether to evaporate</strong> (on a water bath — NEVER use direct flame as ether is highly flammable! Flash point: -45°C).</li>
                        <li><strong>Dissolution:</strong> Dissolve the residue in <strong>2-3 ml distilled water</strong>.</li>
                        <li><strong>Detection:</strong> Add <strong>3-5 drops of 0.5% neutral ferric chloride solution</strong> and observe the color.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Adulterant</th>
                                    <th class="border p-2">Color with FeCl₃</th>
                                    <th class="border p-2">Appearance</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">None (pure milk)</td><td class="border p-2">Light yellow (natural color of FeCl₃)</td><td class="border p-2">Clear solution</td><td class="border p-2">No preservative detected</td></tr>
                                <tr class="bg-purple-50"><td class="border p-2">Salicylic Acid</td><td class="border p-2"><strong>Violet/Purple</strong></td><td class="border p-2">Clear colored solution</td><td class="border p-2">Salicylic acid PRESENT</td></tr>
                                <tr class="bg-orange-50"><td class="border p-2">Benzoic Acid</td><td class="border p-2"><strong>Salmon/Buff</strong></td><td class="border p-2">Colored precipitate</td><td class="border p-2">Benzoic acid PRESENT</td></tr>
                                <tr class="bg-red-50"><td class="border p-2">Both present</td><td class="border p-2">Violet tint with precipitate</td><td class="border p-2">Colored solution + precipitate</td><td class="border p-2">Both acids PRESENT</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Safety Precautions:</strong></p>
                        <ul>
                            <li>Diethyl ether is <strong>extremely flammable</strong> — there should be no open flame nearby</li>
                            <li>Handle ether in a <strong>fume hood</strong> — vapors are narcotic</li>
                            <li>FeCl₃ solution should be <strong>"neutral"</strong> — excess acid can give false results</li>
                            <li>Evaporate ether on a water bath (temperature < 40°C), NOT on an electric hot plate</li>
                        </ul>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), AOAC Official Methods</p>
                </div>
            `
        },
        {
            title: 'Hypochlorites and Chloramines',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700"><strong>Sodium Hypochlorite (NaOCl)</strong>, commonly known as bleach, and <strong>Chloramines (NH₂Cl, NHCl₂)</strong> are both strong oxidizing and disinfecting agents. These are sometimes added to milk to conceal bacterial contamination and maintain the apparent quality of milk. Chlorine-based compounds kill bacteria by oxidizing the proteins and enzymes of microbial cells.</p>
                        <ul class="text-blue-700 mt-2">
                            <li><strong>Hypochlorites:</strong> NaOCl → Na⁺ + OCl⁻; OCl⁻ (hypochlorite ion) is a strong oxidizer</li>
                            <li><strong>Available Chlorine:</strong> HOCl (hypochlorous acid) is the actual antimicrobial species — it penetrates bacterial cells and oxidizes enzymes</li>
                            <li><strong>Chloramines:</strong> NH₂Cl is a slower-acting but longer-lasting antimicrobial agent</li>
                        </ul>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li>GI tract irritation and damage</li>
                            <li>Formation of chlorinated organic byproducts (Trihalomethanes — THMs) which are <strong>carcinogenic</strong></li>
                            <li>Destruction of nutritional components of milk (vitamins, proteins)</li>
                            <li>Allergic reactions</li>
                            <li>Chlorine can react with organic matter present in milk to form toxic compounds like <strong>chloroform (CHCl₃)</strong></li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Method: Potassium Iodide-Starch Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Hypochlorites and chloramines are strong oxidizers that oxidize <strong>potassium iodide (KI)</strong> to release <strong>free iodine (I₂)</strong>. The released iodine then forms a blue-black complex with the <strong>starch indicator</strong>. The reaction is faster under acidic conditions.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>NaOCl + 2KI → I₂ + NaCl + K₂O
    OR: OCl⁻ + 2I⁻ + 2H⁺ → I₂ + Cl⁻ + H₂O
    Then: I₂ + Starch → Blue-Black Complex
    
    For Chloramine:
    NH₂Cl + 2KI + H₂O → I₂ + NH₃ + KCl + KOH</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk</strong> in a test tube.</li>
                        <li>Add <strong>1.5 ml of 7% potassium iodide (KI) solution</strong> and gently mix.</li>
                        <li>Add <strong>4 ml dilute HCl (2N)</strong> and mix — this acidic condition accelerates the reaction and increases sensitivity.</li>
                        <li>Allow to stand for <strong>3-5 minutes</strong> and observe the color.</li>
                        <li>For confirmation: Add <strong>1 ml of 1% starch solution</strong> — if iodine has been released, a blue-black color will appear.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-blue-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">No color change / milky white</td><td class="border p-2">Hypochlorite/Chloramine <strong>ABSENT</strong></td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2"><strong>Yellowish-brown color</strong></td><td class="border p-2">Low level of oxidizing agent <strong>PRESENT</strong></td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Deep mauve to dark brown/blue-black</strong> (with starch)</td><td class="border p-2">Significant amount of hypochlorite/chloramine <strong>CONFIRMED PRESENT</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Important Notes:</strong></p>
                        <ul>
                            <li>This test can also give a positive result for H₂O₂ — therefore, also perform a separate H₂O₂ test for differentiation</li>
                            <li>Chlorine compounds are volatile — test samples quickly, as delay can give a false negative</li>
                            <li>High fat content can cause interference — it is better to use the skim milk portion</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            title: 'Antibiotics and Drug Residues',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Antibiotic residues enter milk when dairy animals are treated with antibiotics for mastitis or other infections and sufficient withdrawal period is not observed. Common antibiotics detected in milk: <strong>Beta-lactams (Penicillin, Amoxicillin, Ampicillin)</strong>, <strong>Tetracyclines (Oxytetracycline)</strong>, <strong>Sulfonamides (Sulfamethazine)</strong>, <strong>Aminoglycosides (Streptomycin, Gentamicin)</strong>, <strong>Quinolones (Enrofloxacin)</strong>.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Antibiotic Resistance:</strong> The biggest public health concern — low-level chronic exposure leads to development of antibiotic-resistant bacteria (AMR — Antimicrobial Resistance)</li>
                            <li><strong>Allergic Reactions:</strong> Risk of anaphylaxis in penicillin-sensitive individuals</li>
                            <li><strong>Gut Microbiome Disruption:</strong> Imbalance of beneficial gut bacteria</li>
                            <li><strong>Carcinogenicity:</strong> Metabolites of some antibiotics are potentially carcinogenic</li>
                            <li><strong>Dairy Industry Impact:</strong> Antibiotic residues inhibit starter cultures — curd, yogurt, cheese manufacturing fails</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Methods:</h4>
    
                    <h5 class="font-semibold mt-3">Method 1: Brilliant Black Reduction Test (BRT) / Delvotest</h5>
                    <p><strong>Principle:</strong> This test uses spores of Bacillus stearothermophilus var. calidolactis. If antibiotics are present in milk, bacterial growth will be inhibited and the agar indicator (bromocresol purple) will not change color (purple remains). In normal milk, bacteria grow, produce acid, and the indicator turns yellow.</p>
                    <ol>
                        <li>Add milk sample to the ampoule containing bacterial spores and nutrient medium</li>
                        <li>Incubate at 64°C for 2.5-3 hours</li>
                        <li><strong>Yellow:</strong> Antibiotics ABSENT (bacteria grew normally)</li>
                        <li><strong>Purple:</strong> Antibiotics PRESENT (bacterial growth inhibited)</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Method 2: SNAP Test (Rapid Immunoassay)</h5>
                    <p><strong>Principle:</strong> Competitive enzyme-linked immunoassay that uses antibodies specific to particular antibiotics. Results are obtained within 10 minutes.</p>
    
                    <h5 class="font-semibold mt-3">Method 3: HPLC/LC-MS/MS (Confirmatory)</h5>
                    <p><strong>Principle:</strong> High-Performance Liquid Chromatography coupled with tandem Mass Spectrometry — the gold standard confirmatory method that identifies and quantifies individual antibiotics down to the ng/ml level.</p>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                        <h4 class="text-yellow-800 font-bold">📋 FSSAI Maximum Residue Limits (MRLs)</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse border">
                                <thead>
                                    <tr class="bg-yellow-100">
                                        <th class="border p-2">Antibiotic</th>
                                        <th class="border p-2">MRL (µg/kg or ppb)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="border p-2">Tetracyclines (sum)</td><td class="border p-2">100</td></tr>
                                    <tr><td class="border p-2">Penicillin G</td><td class="border p-2">4</td></tr>
                                    <tr><td class="border p-2">Amoxicillin</td><td class="border p-2">4</td></tr>
                                    <tr><td class="border p-2">Streptomycin</td><td class="border p-2">200</td></tr>
                                    <tr><td class="border p-2">Sulfonamides (sum)</td><td class="border p-2">100</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: 'Pesticide Residues',
            content: `
                <div class="prose max-w-none prose-blue">
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                        <h4 class="text-blue-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-blue-700">Pesticide residues enter milk through contaminated feed, water, or environment. Organochlorine pesticides (DDT, BHC/HCH, Endosulfan) are fat-soluble and accumulate in the fat of milk (bioaccumulation). Organophosphates (Malathion, Chlorpyrifos) and Pyrethroids are also detected. Pesticide contamination in milk is a significant public health issue in India.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li>Endocrine disruption (hormone mimicking)</li>
                            <li>Carcinogenicity (DDT — IARC Group 2A probable carcinogen)</li>
                            <li>Neurotoxicity (organophosphates — acetylcholinesterase inhibition)</li>
                            <li>Reproductive toxicity and developmental effects</li>
                            <li>Immunosuppression</li>
                            <li>Chronic liver and kidney damage</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-blue-800">🧪 Detection Methods:</h4>
                    <ol>
                        <li><strong>Gas Chromatography (GC-ECD):</strong> Primary method for organochlorine pesticides — Electron Capture Detector is highly sensitive for chlorinated compounds</li>
                        <li><strong>GC-MS/MS:</strong> Confirmatory method that performs both identification and quantification</li>
                        <li><strong>HPLC:</strong> For thermally unstable pesticides</li>
                        <li><strong>Rapid Screening Kits:</strong> Immunoassay-based field kits are available</li>
                    </ol>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                        <h4 class="text-yellow-800 font-bold">📋 FSSAI MRLs for Pesticides in Milk</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse border">
                                <thead>
                                    <tr class="bg-yellow-100">
                                        <th class="border p-2">Pesticide</th>
                                        <th class="border p-2">MRL (mg/kg)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td class="border p-2">DDT (total)</td><td class="border p-2">0.05</td></tr>
                                    <tr><td class="border p-2">BHC/HCH (total)</td><td class="border p-2">0.01</td></tr>
                                    <tr><td class="border p-2">Endosulfan</td><td class="border p-2">0.004</td></tr>
                                    <tr><td class="border p-2">Malathion</td><td class="border p-2">0.01</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `
        }
    ],
        // ==================== ADULTERANTS SECTION ====================
    adulterants: [
        {
            title: 'Cane Sugar (Sucrose)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Sucrose (C₁₂H₂₂O₁₁)</strong> is a disaccharide composed of glucose and fructose. The motive for adding sugar to milk is to artificially increase SNF to compensate for the drop in lactometer reading (specific gravity) that occurs after adding water to milk. The natural sugar in milk is <strong>lactose</strong> (4.6-4.8%), but sucrose does not naturally occur in milk. Therefore, the presence of sucrose is direct evidence of adulteration.</p>
                        <p class="text-green-700 mt-2"><strong>Adulteration Motive:</strong> When water is added to milk, the specific gravity (lactometer reading) drops. Adding sugar brings the specific gravity back to the normal range, so water addition cannot be detected by a simple lactometer test.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Diabetic Patients:</strong> Uncontrolled blood sugar spikes — very dangerous especially for Type 1 diabetics</li>
                            <li><strong>Obesity:</strong> Extra caloric intake without nutritional benefit</li>
                            <li><strong>Dental Health:</strong> Increased risk of dental caries</li>
                            <li><strong>Infants:</strong> Adding sucrose to milk increases renal solute load in infants, may cause osmotic diarrhea</li>
                            <li><strong>Economic Fraud:</strong> Consumer receives inferior quality milk at full price</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Seliwanoff's Test (Resorcinol-HCl Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> This test specifically detects <strong>ketoses (fructose)</strong>. Sucrose is a disaccharide that on acid hydrolysis gives glucose + <strong>fructose</strong>. Fructose (a ketohexose) dehydrates in hot HCl to form <strong>hydroxymethylfurfural (HMF)</strong>, which then undergoes condensation with <strong>resorcinol (1,3-dihydroxybenzene)</strong> to produce a <strong>cherry-red colored complex</strong>. Aldoses (glucose, lactose) react very slowly in this reaction, making this test selective for ketoses.</p>
                        
                        <p class="mt-2"><strong>Chemical Mechanism:</strong></p>
                        <pre class="bg-gray-100 p-2 rounded"><code>Step 1: Sucrose + H⁺/HCl (heat) → Glucose + Fructose (Acid hydrolysis)
    Step 2: Fructose -3H₂O (dehydration by HCl) → 5-Hydroxymethylfurfural (HMF)
    Step 3: HMF + 2 Resorcinol → Cherry-Red Condensation Product</code></pre>
                        
                        <p class="mt-2"><strong>Why Lactose Does Not Interfere:</strong> Lactose gives glucose + galactose — both aldoses that dehydrate very slowly under these conditions. Therefore, this test gives a negative result in normal milk (or a very faint pink with prolonged heating that is not significant).</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li><strong>Seliwanoff's Reagent:</strong> 0.05 g resorcinol dissolved in 100 ml dilute HCl (1:2 = conc. HCl : water)</li>
                        <li>Boiling water bath (95-100°C)</li>
                        <li>Clean test tubes, timer</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>1 ml milk sample</strong> in a clean test tube.</li>
                        <li>Add <strong>1 ml Seliwanoff's reagent</strong> and gently mix.</li>
                        <li>Place the tube in a <strong>boiling water bath for 5 minutes</strong> — <strong>do not keep for more than 5 minutes!</strong> (Prolonged heating can cause lactose to give a faint color, causing false positive).</li>
                        <li>Remove the tube from the bath and <strong>immediately observe the color</strong>.</li>
                        <li>Compare with a control sample (pure milk).</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">No color change / remains white</td><td class="border p-2">Sucrose <strong>ABSENT</strong></td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Cherry-red / Rose-red color</strong> within 5 minutes</td><td class="border p-2">Sucrose <strong>PRESENT</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Modified Resorcinol Test (Detailed)</h4>
                    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk</strong> in a test tube.</li>
                        <li>Carefully add <strong>1 ml concentrated HCl</strong>.</li>
                        <li>Add <strong>0.1 g resorcinol crystals</strong> directly and dissolve by gentle shaking.</li>
                        <li>Place the tube in a <strong>boiling water bath for 5 minutes</strong>.</li>
                        <li><strong>Red color:</strong> Sucrose PRESENT</li>
                        <li><strong>No red color:</strong> Sucrose ABSENT</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Barfoed's Test (Differentiation of Monosaccharide vs Disaccharide)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Barfoed's reagent (cupric acetate in dilute acetic acid) is rapidly reduced by monosaccharides (glucose, fructose) but slowly by disaccharides (sucrose, lactose). If sucrose has been added to milk, after acid hydrolysis there will be excess monosaccharides present that will give rapid reduction.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 4: HPLC Method (Quantitative — Confirmatory)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> High-Performance Liquid Chromatography (HPLC) with a Refractive Index (RI) detector can separate, identify, and quantify individual sugars (lactose, sucrose, glucose, fructose) in milk. Normal milk contains only lactose; any detectable amount of sucrose confirms adulteration.</p>
                        <ul>
                            <li>Column: Aminopropyl bonded silica or ion-exchange column</li>
                            <li>Mobile Phase: Acetonitrile:Water (75:25 or 80:20)</li>
                            <li>Detector: RI (Refractive Index) detector</li>
                            <li>Detection Limit: ~0.1% sucrose in milk</li>
                        </ul>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual of Methods (2015), AOAC 982.14</p>
                </div>
            `
        },
        {
            title: 'Starch and Cereal Flours',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Starch (C₆H₁₀O₅)ₙ</strong> is a polysaccharide composed of two components: <strong>Amylose</strong> (linear chain, ~20-30%) and <strong>Amylopectin</strong> (branched chain, ~70-80%). Starch, arrowroot powder, wheat flour, rice flour, or cornstarch are added to milk because they increase the <strong>viscosity (thickness)</strong> of milk and mask the thinness that results from adding water. Starch can also artificially increase SNF readings.</p>
                        <p class="text-green-700 mt-2">Starch does not naturally occur in milk. Starch has a very high molecular weight (10⁵ to 10⁷ Da) and is insoluble/partially soluble in milk, forming a colloidal suspension.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Digestive Issues:</strong> Pancreatic amylase in infants is not fully developed until 6 months — undigested starch causes diarrhea and bloating</li>
                            <li><strong>Nutritional Dilution:</strong> Essential nutrients (protein, fat, calcium) are diluted</li>
                            <li><strong>Diabetic Risk:</strong> Extra carbohydrate load — blood sugar spike</li>
                            <li><strong>Allergic Reactions:</strong> Gluten from wheat flour can trigger celiac disease in gluten-sensitive individuals</li>
                            <li><strong>Contamination Risk:</strong> Low-grade starch/flour may contain insect fragments, pesticide residues, aflatoxins</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Iodine Test (Unboiled Milk — Rapid Screening)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> This is a classic chemistry reaction. <strong>Iodine (I₂)</strong> enters the helical (coiled) structure of the <strong>amylose component</strong> of starch and forms an <strong>inclusion complex</strong> that gives an <strong>intense blue-black color</strong>. Iodine molecules (as polyiodide chains, I₅⁻ or I₃⁻) fit inside the amylose helix, and the blue color arises due to charge transfer interactions.</p>
                        
                        <p class="mt-2"><strong>Specificity:</strong></p>
                        <ul>
                            <li><strong>Amylose + I₂ → Deep Blue</strong> (I₂ trapped in linear helix)</li>
                            <li><strong>Amylopectin + I₂ → Red-Purple</strong> (branched structure, less organized)</li>
                            <li><strong>Glycogen + I₂ → Red-Brown</strong> (highly branched)</li>
                            <li><strong>Dextrin + I₂ → Red-Brown</strong> (partially hydrolyzed starch)</li>
                        </ul>
                        
                        <p class="mt-2"><strong>Temperature Dependence:</strong> The blue color <strong>disappears</strong> on heating (because the amylose helix uncoils, releasing I₂) and <strong>reappears</strong> on cooling (the helix reforms, trapping I₂ again). This is a <strong>reversible</strong> process and is a confirmatory sign of starch detection.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li><strong>Iodine Solution:</strong> Lugol's Iodine (1% I₂ + 2% KI in water) or dilute I₂ solution</li>
                        <li>Clean test tubes, dropper</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>1-2 ml milk sample</strong> in a test tube (unboiled).</li>
                        <li>Add <strong>2-3 drops of iodine solution</strong>.</li>
                        <li>Gently mix and <strong>observe the color</strong>.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue/Blue-black color:</strong> Starch PRESENT</li>
                        <li><strong>Yellow-brown (normal color of iodine):</strong> Starch ABSENT</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Iodine Test (Boiled Milk — Enhanced Sensitivity)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Boiling causes starch granules to <strong>gelatinize</strong> — the starch granules swell and rupture, releasing amylose into solution. Gelatinized starch reacts <strong>more intensely</strong> with iodine because the amylose chains are fully exposed and hydrated, allowing better I₂ penetration into the helix.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>Boil 3-5 ml milk</strong> (for 3-5 minutes).</li>
                        <li><strong>Cool to room temperature</strong> — this is essential as the starch-iodine complex is only blue at lower temperatures.</li>
                        <li>Add <strong>1-2 drops of iodine solution</strong>.</li>
                        <li><strong>Blue color:</strong> Starch PRESENT — this color will disappear on heating and reappear on cooling (confirmatory).</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Microscopic Examination</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Different starches have unique microscopic appearances — size, shape, hilum position, and birefringence pattern (shows "Maltese cross" pattern in polarized light). This method can also identify the source of starch.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Place a drop of milk on a glass slide and apply a cover slip.</li>
                        <li>Add a drop of iodine solution from the edge (for staining).</li>
                        <li>Examine under microscope at 40x and 100x.</li>
                        <li>Starch granules will appear blue-black stained; fat globules will not stain.</li>
                    </ol>
    
                    <div class="overflow-x-auto mt-3">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Starch Source</th>
                                    <th class="border p-2">Granule Size</th>
                                    <th class="border p-2">Shape</th>
                                    <th class="border p-2">Hilum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Wheat</td><td class="border p-2">20-35 µm</td><td class="border p-2">Round, lenticular</td><td class="border p-2">Central, point</td></tr>
                                <tr><td class="border p-2">Rice</td><td class="border p-2">3-8 µm</td><td class="border p-2">Polygonal, angular</td><td class="border p-2">Central</td></tr>
                                <tr><td class="border p-2">Corn/Maize</td><td class="border p-2">15-20 µm</td><td class="border p-2">Round, polygonal</td><td class="border p-2">Central, stellate</td></tr>
                                <tr><td class="border p-2">Potato</td><td class="border p-2">40-100 µm</td><td class="border p-2">Oval, irregular</td><td class="border p-2">Eccentric</td></tr>
                                <tr><td class="border p-2">Arrowroot</td><td class="border p-2">25-50 µm</td><td class="border p-2">Oval</td><td class="border p-2">Central to eccentric</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI Manual (2015)</p>
                </div>
            `
        },
        {
            title: 'Cellulose',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Cellulose (C₆H₁₀O₅)ₙ</strong> is a structural polysaccharide that is the main component of plant cell walls. It is made of β-1,4-glycosidic bonds (starch has α-1,4 bonds). The human digestive system lacks the cellulase enzyme, so cellulose cannot be digested — it acts as dietary fiber. Cellulose powder (carboxymethylcellulose — CMC, or microcrystalline cellulose) is illegally added to milk to increase its <strong>viscosity (thickness)</strong> and <strong>apparent solid content</strong>.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Detection Method: Iodinated Zinc Chloride Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Iodinated zinc chloride (Schulze's reagent)</strong> is a specific reagent for cellulose detection. Zinc chloride swells cellulose (breaking hydrogen bonds between cellulose chains), and iodine interacts with the swollen cellulose to produce a <strong>blue or violet color</strong>. This reaction is different from starch-iodine — cellulose must first be swollen by zinc chloride before iodine can react.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Reagent Preparation (Iodinated Zinc Chloride / Schulze's Reagent):</h5>
                    <ol>
                        <li>Dissolve 20 g zinc in 60 ml HCl and filter</li>
                        <li>Evaporate the solution to syrupy consistency</li>
                        <li>Add potassium iodide and iodine until a dark brown color appears</li>
                        <li>Alternative: 50 g ZnCl₂ + 16 ml water + 8 g KI + 0.5 g I₂</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>10 ml milk</strong> and add <strong>10-15 drops of concentrated nitric acid (HNO₃)</strong> — this will coagulate the proteins.</li>
                        <li><strong>Filter</strong> the coagulated mass through filter paper.</li>
                        <li><strong>Wash the residue 2-3 times with distilled water</strong> (to remove acid).</li>
                        <li>Transfer the washed residue to a test tube and add <strong>1-2 ml iodinated zinc chloride reagent</strong>.</li>
                        <li><strong>Gently boil</strong> for 2-3 minutes.</li>
                        <li>Observe the color.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue or violet color:</strong> Cellulose PRESENT</li>
                        <li><strong>No blue/violet color:</strong> Cellulose ABSENT</li>
                    </ul>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>Note:</strong> Cellulose and starch are both polysaccharides but require different detection methods — starch is detected by a simple iodine test while cellulose requires zinc chloride as a swelling agent.</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Urea (CO(NH₂)₂)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Urea (CO(NH₂)₂, Molecular Weight: 60.06 g/mol)</strong> is an organic compound that is naturally present in milk at a concentration of 18-40 mg/100 ml (it is a major component of milk's Non-Protein Nitrogen — NPN fraction, approximately 50% of NPN). In normal milk, urea enters from blood urea filtered through the mammary gland and this is normal.</p>
                        <p class="text-green-700 mt-2">However, when <strong>urea is added externally</strong>, the concentration increases significantly (>70 mg/100 ml). Urea is added to milk because:</p>
                        <ul class="text-green-700">
                            <li>It <strong>artificially increases SNF (Solids-Not-Fat) reading</strong></li>
                            <li>It compensates for the drop in SNF that occurs after adding water</li>
                            <li>It brings the lactometer reading back to normal range</li>
                            <li>It is cheap and readily available (as fertilizer)</li>
                            <li>When dissolved in milk, it does not significantly change the taste</li>
                        </ul>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li><strong>Kidney Damage:</strong> Excess urea puts excessive load on kidneys — increased risk of chronic kidney disease (CKD). Kidneys must filter extra urea which damages nephrons.</li>
                            <li><strong>Ammonia Toxicity:</strong> Urea is converted to ammonia (NH₃) in the body by the urease enzyme. Excess ammonia in the blood causes <strong>hyperammonemia</strong> which can lead to <strong>encephalopathy</strong> (brain damage).</li>
                            <li><strong>GI Disturbances:</strong> Nausea, vomiting, abdominal pain, diarrhea</li>
                            <li><strong>Metabolic Acidosis:</strong> Excess urea metabolism disturbs acid-base balance</li>
                            <li><strong>Cardiovascular Effects:</strong> Chronic high urea intake has been reported to cause vascular damage</li>
                            <li><strong>Infants:</strong> Immature kidneys cannot handle it — extreme risk</li>
                        </ul>
                    </div>
    
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                        <h4 class="text-yellow-800 font-bold">📋 Legal Limits</h4>
                        <p class="text-yellow-700"><strong>FSSAI 2006:</strong> Maximum permissible limit of urea in milk = <strong>70 mg/100 ml</strong>. Exceeding this is considered adulteration.</p>
                        <p class="text-yellow-700"><strong>Normal range in genuine milk:</strong> 18-40 mg/100 ml (depends on breed, diet, lactation stage)</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: DMAB-TCA Method (Primary Screening)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Para-Dimethylaminobenzaldehyde (DMAB, C₉H₁₁NO)</strong> reacts with urea under weakly acidic conditions to form a <strong>yellow-colored complex</strong>. The role of TCA (Trichloroacetic Acid) is to precipitate proteins so that a clear filtrate is obtained in which urea is dissolved. The aldehyde group of DMAB undergoes a condensation reaction with the -NH₂ groups of urea forming a Schiff base-type product.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>DMAB + Urea (slightly acidic pH) → Yellow Colored Complex (λmax ≈ 420 nm)
    
    (CH₃)₂N-C₆H₄-CHO + H₂N-CO-NH₂ → (CH₃)₂N-C₆H₄-CH=N-CO-NH₂ + H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Required Reagents:</h5>
                    <ul class="list-disc list-inside">
                        <li><strong>24% Trichloroacetic Acid (TCA):</strong> 24 g TCA in 100 ml distilled water</li>
                        <li><strong>1.6% DMAB reagent:</strong> 1.6 g DMAB dissolved in 100 ml ethanol + 10 ml conc. HCl</li>
                        <li>Filter paper (Whatman No. 1 or equivalent)</li>
                        <li>Clean test tubes, pipettes</li>
                    </ul>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk sample</strong> in a test tube.</li>
                        <li>Add <strong>5 ml 24% TCA solution</strong> — proteins will precipitate.</li>
                        <li><strong>Mix</strong> well and allow to <strong>stand for 5 minutes</strong>.</li>
                        <li><strong>Filter through filter paper</strong> — collect the clear filtrate. Urea will be dissolved in this filtrate (proteins removed).</li>
                        <li>Take <strong>3 ml clear filtrate</strong> in another clean test tube.</li>
                        <li>Add <strong>3 ml 1.6% DMAB reagent</strong>.</li>
                        <li><strong>Gently mix</strong> and allow to stand at room temperature for <strong>10-15 minutes</strong>.</li>
                        <li>Observe color — compare with control sample.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result Interpretation:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Observation</th>
                                    <th class="border p-2">Inference</th>
                                    <th class="border p-2">Urea Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Very faint yellow / almost colorless</td><td class="border p-2">Normal urea — Milk is PURE</td><td class="border p-2">18-40 mg/100ml</td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2">Light yellow</td><td class="border p-2">Borderline — further quantitative test needed</td><td class="border p-2">40-70 mg/100ml</td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Distinct/Bright yellow</strong></td><td class="border p-2">External urea <strong>ADDED</strong> — Adulteration confirmed</td><td class="border p-2">>70 mg/100ml</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Direct DMAB Method (Rapid Screening)</h4>
                    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>1 ml milk</strong> directly in a test tube.</li>
                        <li>Add <strong>1 ml 1.6% DMAB reagent</strong>.</li>
                        <li>Mix and observe for <strong>5 minutes</strong>.</li>
                        <li><strong>Distinct yellow color:</strong> Added urea PRESENT</li>
                    </ol>
                    <p><strong>Note:</strong> This method is rapid but less accurate as milk proteins can interfere. The TCA method is more reliable.</p>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Urease-Based Enzymatic Method (Quantitative)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> The urease enzyme specifically hydrolyzes urea to ammonia and CO₂. The released ammonia is then quantified using Nessler's reagent or Berthelot reaction.</p>
                        <pre class="bg-gray-100 p-2 rounded"><code>CO(NH₂)₂ + H₂O → (Urease) → 2NH₃ + CO₂
    Then: NH₃ + Nessler's reagent → Orange-Brown color (measured at 420 nm)</code></pre>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS:1479 (1960), FSSAI 2006 (Limit: 70mg/100ml), Indian Journal of Dairy Science</p>
                </div>
            `
        },
        {
            title: 'Glucose (Dextrose)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Glucose (C₆H₁₂O₆, Dextrose)</strong> is a monosaccharide that does not naturally occur in milk (the natural sugar in milk is <strong>lactose</strong>). Glucose is added because it is cheap, easily available, and when dissolved in milk it increases the density/specific gravity — to mask the addition of water.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Modified Barfoed's Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Barfoed's test differentiates monosaccharides from disaccharides. Barfoed's reagent contains <strong>cupric acetate (Cu(CH₃COO)₂)</strong> in dilute acetic acid. <strong>Monosaccharides (glucose, fructose) rapidly</strong> reduce Cu²⁺ to Cu⁺ (cuprous oxide — Cu₂O, brick-red precipitate), while <strong>disaccharides (lactose) react slowly</strong>. The reduced Cu₂O then reduces <strong>phosphomolybdic acid</strong> to form a <strong>deep blue compound (molybdenum blue)</strong>.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Step 1: Glucose + Cu²⁺ (Barfoed's) → Cu₂O↓ (brick-red) + Gluconic acid
    (Rapid — within 1-3 minutes)
    
    Step 2: Cu₂O + Phosphomolybdic acid → Molybdenum Blue (deep blue)
    
    Note: Lactose (disaccharide) needs > 5 minutes for Step 1, so timing is critical!</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>1 ml milk</strong>, add <strong>1 ml modified Barfoed's reagent</strong>.</li>
                        <li>Place in <strong>boiling water bath for exactly 3 minutes</strong> — do not exceed!</li>
                        <li>Rapidly <strong>cool</strong> (in cold water).</li>
                        <li>Add <strong>1 ml phosphomolybdic acid reagent</strong>.</li>
                        <li><strong>Immediate formation of deep blue color:</strong> Added glucose PRESENT</li>
                        <li><strong>No blue color / very faint:</strong> Glucose ABSENT (normal milk — only lactose present)</li>
                    </ol>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Critical Timing:</strong> Boil for exactly 3 minutes only. Heating for 5+ minutes causes lactose to also slowly reduce, giving a false positive. Use a timer!</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Maltodextrin',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Maltodextrin</strong> is a partially hydrolyzed starch (DE value 3-20) available as a white powder. It is a molecule smaller than starch but larger than glucose. It is added to milk because it <strong>increases SNF reading, slightly increases viscosity, and dissolves easily in water</strong>. Maltodextrin does not give a pure blue color in the starch-iodine test (because amylose chains are broken) — so it can escape the starch test!</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Iodine Reagent Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Maltodextrin/Dextrin is partially hydrolyzed starch — its amylose chains are shorter. The interaction of iodine with shorter chains is different: instead of deep blue (starch), it gives a <strong>red-brown / chocolate color</strong>. This color difference depends on chain length — longer chains = more blue, shorter chains = more red.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk sample</strong> in a test tube.</li>
                        <li>Add <strong>2 ml iodine solution (0.05 N)</strong> and mix.</li>
                        <li><strong>Chocolate-like red-brown color:</strong> Dextrin/Maltodextrin PRESENT</li>
                        <li><strong>Yellow-brown (iodine natural) / No change:</strong> ABSENT</li>
                        <li><strong>Blue-black:</strong> Starch is present (not maltodextrin)</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Citric Acid Coagulation + Iodine Test</h4>
                    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>Boil 20 ml milk</strong>, cool to <strong>70°C</strong>.</li>
                        <li>Add <strong>0.5 ml 10% citric acid</strong> to coagulate — proteins will precipitate.</li>
                        <li><strong>Filter</strong> the coagulated milk — maltodextrin will be in the clear filtrate (as it is soluble).</li>
                        <li>Add <strong>3 drops of iodine solution</strong> to <strong>2 ml filtrate</strong>.</li>
                        <li><strong>Orange-brown color:</strong> Maltodextrin PRESENT</li>
                    </ol>
                </div>
            `
        },
        {
            title: 'Detergent',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Detergents (Surfactants)</strong> can enter milk for two reasons: (1) Intentional adulteration — detergent <strong>increases the foaming properties</strong> of milk and masks the thinness that comes from adding water, and (2) Unintentional contamination — improper rinsing after cleaning milk containers/tankers. <strong>Anionic detergents</strong> (sodium dodecyl sulfate — SDS, linear alkylbenzene sulfonates — LAS) are most commonly detected.</p>
                    </div>
    
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                        <h4 class="text-red-800 font-bold">⚠️ Health Hazards</h4>
                        <ul class="text-red-700">
                            <li>Damage to GI tract mucosal lining</li>
                            <li>Diarrhea, nausea, vomiting</li>
                            <li>Organ toxicity (liver, kidney) on chronic exposure</li>
                            <li>Skin irritation and allergic reactions</li>
                            <li>Endocrine disruption (some detergent components — nonylphenol ethoxylates)</li>
                        </ul>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Methylene Blue Active Substances (MBAS) Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Anionic detergents</strong> (negatively charged surfactants) form an <strong>ion-pair complex</strong> with <strong>methylene blue</strong> (a cationic/positively charged dye). This complex is <strong>soluble in chloroform (CHCl₃, an organic solvent)</strong> while free methylene blue remains in the aqueous (water) phase. Therefore, if detergent is present, the chloroform layer will be blue; if not, the aqueous layer will remain blue.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Anionic Detergent (R-SO₃⁻) + Methylene Blue⁺ (MB⁺) → [R-SO₃⁻···MB⁺] Ion-Pair Complex
    
    This complex is SOLUBLE in chloroform → Blue chloroform layer
    Free MB⁺ remains in AQUEOUS phase → Blue aqueous layer</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Detailed Procedure:</h5>
                    <ol>
                        <li>Take <strong>1 ml milk sample</strong> in a test tube.</li>
                        <li>Add <strong>1 ml methylene blue solution (0.003%)</strong> and mix.</li>
                        <li>Add <strong>2 ml chloroform</strong>.</li>
                        <li><strong>Close the tube with a stopper</strong> and <strong>vigorously shake (vortex) for 15 seconds</strong>.</li>
                        <li><strong>Centrifuge at 1100 rpm for 3 minutes</strong> (or allow to stand for 5 minutes for layer separation).</li>
                        <li><strong>Compare the color</strong> of both layers:</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Lower Layer (Chloroform)</th>
                                    <th class="border p-2">Upper Layer (Aqueous/Milk)</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Colorless / very faint blue</td><td class="border p-2"><strong>Intense blue</strong></td><td class="border p-2">Detergent <strong>ABSENT</strong></td></tr>
                                <tr class="bg-red-50"><td class="border p-2"><strong>Intense blue</strong></td><td class="border p-2">Faint blue / colorless</td><td class="border p-2">Detergent <strong>PRESENT</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Safety:</strong> Chloroform is toxic — work in a fume hood. Avoid skin contact. Dispose of properly.</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Ammonium Compounds (Ammonium Sulphate)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Ammonium Sulphate ((NH₄)₂SO₄)</strong> is a common fertilizer added to milk because it <strong>increases the lactometer reading (specific gravity)</strong> and <strong>artificially increases SNF content</strong>. Ammonium salts dissolve easily in milk and do not significantly change the taste. Molecular weight of (NH₄)₂SO₄ is 132.14 g/mol.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Nessler's Reagent Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Nessler's reagent (K₂[HgI₄] — potassium tetraiodomercurate(II) in KOH)</strong> reacts with ammonium ions (NH₄⁺) to form a <strong>yellow-brown to orange precipitate</strong> (mercury(II) amidoiodide — OHg₂NH₂I). Normal milk also contains trace ammonium but added (NH₄)₂SO₄ produces a significantly more intense color.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>NH₄⁺ + 2[HgI₄]²⁻ + 4OH⁻ → OHg₂·NH₂I↓ (Yellow-Brown) + 7I⁻ + 3H₂O</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk sample</strong> in a test tube.</li>
                        <li>Add <strong>1 ml Nessler's reagent</strong>.</li>
                        <li><strong>Yellow or grey/brown color:</strong> Added ammonium salts PRESENT</li>
                        <li><strong>Faint yellowish (normal):</strong> ABSENT (trace amount is normal)</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Turmeric Paper Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Ammonium salts release <strong>ammonia gas (NH₃)</strong> under alkaline conditions (NaOH). This ammonia gas reacts with <strong>wet turmeric paper</strong> (containing curcumin) to form a <strong>reddish-brown compound (rubrocurcumin)</strong>. Curcumin + NH₃ → rubrocurcumin — this color change confirms the presence of NH₃.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk</strong>, add <strong>1 ml 10% NaOH</strong>.</li>
                        <li>Place a <strong>moist turmeric paper</strong> at the rim of the test tube (should not touch the milk).</li>
                        <li>Gently <strong>warm</strong> the tube — NH₃ gas will be released and rise upward.</li>
                        <li><strong>Pink-red color on turmeric paper:</strong> Ammonium salts PRESENT</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Sulphate Detection (BaCl₂ Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Ammonium SULPHATE contains sulphate ions (SO₄²⁻) that are not normally present in significant quantities in milk. Barium chloride (BaCl₂) forms a <strong>white, insoluble precipitate — Barium Sulphate (BaSO₄)</strong> with sulphate that does not dissolve even in acid.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>SO₄²⁻ + BaCl₂ → BaSO₄↓ (White precipitate, insoluble in HCl) + 2Cl⁻</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>10 ml milk</strong>, add <strong>10 ml TCA (trichloroacetic acid)</strong> — proteins will coagulate.</li>
                        <li><strong>Filter</strong> and take <strong>5 ml clear filtrate</strong>.</li>
                        <li>Add <strong>a few drops of 5% BaCl₂ solution</strong>.</li>
                        <li><strong>Milky-white precipitate:</strong> Added sulphate PRESENT (indication of ammonium sulphate)</li>
                        <li><strong>No precipitate:</strong> Sulphate ABSENT</li>
                    </ol>
                </div>
            `
        },
        {
            title: 'Common Salt (NaCl)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700">Normal milk naturally contains approximately <strong>0.6-0.7% chlorides</strong> (mainly NaCl). Salt is added to milk because it <strong>increases the lactometer reading (specific gravity)</strong> — to bring the lactometer reading back to normal range after adding water. NaCl dissolves easily in milk and in small amounts does not significantly change the taste.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Silver Nitrate (AgNO₃) — Mohr's Method</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Silver nitrate (AgNO₃)</strong> reacts with chloride ions (Cl⁻) to form a <strong>white silver chloride (AgCl) precipitate</strong>. When all chloride is consumed (i.e., excess AgNO₃ remains), the excess Ag⁺ reacts with the <strong>potassium chromate (K₂CrO₄) indicator</strong> to form <strong>brick-red silver chromate (Ag₂CrO₄)</strong> — this is the endpoint.</p>
                        
                        <p class="mt-2">If extra salt has been added to milk, the Ag⁺ will first consume the excess Cl⁻ and the brick-red color will not appear (or will appear very late). If Cl⁻ is normal, Ag⁺ will quickly react with chromate to give the brick-red color.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>AgNO₃ + NaCl → AgCl↓ (white) + NaNO₃  (Chloride consumed first)
    Then when all Cl⁻ consumed:
    2AgNO₃ + K₂CrO₄ → Ag₂CrO₄↓ (brick-red) + 2KNO₃  (Endpoint)</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>5 ml milk</strong> in a test tube.</li>
                        <li>Add <strong>1 ml 0.1N AgNO₃ solution</strong> and mix.</li>
                        <li>Add <strong>0.5 ml 10% potassium chromate (K₂CrO₄) solution</strong>.</li>
                        <li>Observe the color:</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Color</th>
                                    <th class="border p-2">Inference</th>
                                    <th class="border p-2">Explanation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2"><strong>Brick-red / Reddish-brown</strong></td><td class="border p-2">Salt <strong>NOT ADDED</strong> — Normal chloride level</td><td class="border p-2">AgNO₃ consumed all normal Cl⁻, excess Ag⁺ gave red color with chromate</td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2"><strong>Yellow color</strong></td><td class="border p-2">Salt <strong>ADDED</strong> — Excess chloride present</td><td class="border p-2">Excess Cl⁻ consumed all AgNO₃, no Ag⁺ left for chromate — yellow (natural color of K₂CrO₄) remains</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        {
            title: 'Vanaspati/Refined Oil (Foreign Fat)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Vegetable oils (soybean oil, palm oil, coconut oil)</strong> or <strong>vanaspati (hydrogenated vegetable fat)</strong> are added to milk because they are cheap and <strong>artificially increase the fat percentage</strong> of milk. Genuine milk fat (milk fat/ghee) has a unique <strong>fatty acid profile</strong> — it contains short-chain fatty acids (butyric acid C4:0, caproic acid C6:0) that are not found in vegetable oils. Vegetable oils predominantly contain long-chain unsaturated fatty acids (oleic, linoleic).</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 1: Butyro-Refractometer (BR) Reading</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Refractive Index (RI)</strong> is the bending of light as it passes from one medium to another. Different fats have different RI values. Pure milk fat (ghee) has a <strong>BR reading of 40-43 at 40°C</strong>. Most vegetable oils have a higher RI (BR > 45). Therefore, an elevated BR reading is an indication of foreign fat.</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Extract fat from milk — use modified Gerber method or cream separation.</li>
                        <li><strong>Melt the extracted fat at 40°C</strong>.</li>
                        <li>Take the <strong>BR reading</strong> on a butyro-refractometer.</li>
                        <li><strong>BR 40-43:</strong> Pure milk fat</li>
                        <li><strong>BR > 45:</strong> Foreign fat PRESENT — further confirmation needed</li>
                    </ol>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 2: Baudouin Test (Vanaspati Detection)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Under Indian law, vanaspati (hydrogenated vegetable fat) must compulsorily contain <strong>5% sesame (til) oil</strong> as a marker. Sesame oil contains <strong>sesamol (3,4-methylenedioxyphenol)</strong> which reacts with <strong>furfural</strong> in the presence of concentrated HCl to produce a <strong>characteristic pink to crimson-red color</strong>. Therefore, if vanaspati has been added to milk, this test will be positive.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Sesamol + Furfural + HCl → Pink/Red Colored Complex</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Extract <strong>ghee/fat</strong> from milk.</li>
                        <li>Take <strong>5 g melted fat</strong> in a test tube.</li>
                        <li>Add <strong>5 ml concentrated HCl</strong>.</li>
                        <li>Add <strong>0.4 ml 2% furfural solution (in alcohol)</strong>.</li>
                        <li><strong>Vigorously vortex/shake the tube for 2 minutes</strong>.</li>
                        <li>Allow layers to separate and observe the color of the <strong>acid (lower) layer</strong>.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Pink to crimson-red in acid layer:</strong> Vanaspati PRESENT</li>
                        <li><strong>No pink/red:</strong> Vanaspati ABSENT (or sesame oil-free vegetable oil was used)</li>
                    </ul>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Method 3: Gas Chromatography (GC) — Fatty Acid Profile (Confirmatory)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Fat is converted to fatty acid methyl esters (FAMEs) and analyzed by GC-FID. Milk fat has a unique profile — butyric acid (C4:0) is the fingerprint of milk fat. Vegetable oils do not contain C4:0. Exact type and amount of foreign fat can be determined by comparing fatty acid profiles.</p>
                    </div>
    
                    <p class="text-xs mt-4"><strong>References:</strong> IS 3508-1966, FSSAI Regulations, AOAC Methods</p>
                </div>
            `
        },
        {
            title: 'Mineral Oil',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Mineral oils</strong> are petroleum-derived hydrocarbons (paraffin oil, liquid paraffin, white oil) that are <strong>non-edible</strong>. They can enter milk through accidental contamination (machinery lubrication) or intentional adulteration (to increase fat content). Mineral oils are <strong>non-saponifiable</strong> — meaning they do not undergo saponification reaction (soap formation) with alkali (KOH/NaOH), unlike edible triglycerides.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Holde's Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> When fat is saponified with alcoholic KOH, edible fats (triglycerides) are completely converted to soap + glycerol which gives a clear solution in water. But mineral oils do not saponify — they remain insoluble in the soap solution and cause <strong>turbidity (cloudiness)</strong>.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Edible Fat + KOH (alcoholic) → Soap (K-salt of fatty acid) + Glycerol → Clear in water ✓
    Mineral Oil + KOH → NO REACTION → Remains as oil droplets → Turbidity in water ✗</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li>Take <strong>1 g fat</strong> (extracted from milk).</li>
                        <li>Add <strong>25 ml 4% alcoholic KOH</strong>.</li>
                        <li><strong>Boil for 30 minutes</strong> with a reflux condenser (for complete saponification).</li>
                        <li>Add <strong>100 ml hot water</strong> and mix.</li>
                        <li>Observe the solution:</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Clear solution:</strong> Pure edible fat — Mineral oil ABSENT</li>
                        <li><strong>Turbidity/cloudiness:</strong> Mineral oil PRESENT — non-saponifiable matter present</li>
                    </ul>
                </div>
            `
        },
        {
            title: 'Animal Body Fat (Lard, Tallow)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Animal body fats</strong> (lard — pig fat, tallow — goat/cattle body fat) are added to milk fat (ghee) because they are cheaper. These fats differ from milk fat — their fatty acid profile, melting point, and crystallization behavior are different. Body fats have a higher percentage of <strong>palmitic acid (C16:0) and stearic acid (C18:0)</strong> compared to milk fat.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Opacity Test (Solidification Time Test)</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> Different fats solidify at different temperatures and become opaque (cloudy/white). This depends on their <strong>fatty acid composition</strong>. Animal body fats have more higher melting point fatty acids, so they become <strong>opaque more quickly</strong>. Vegetable oils have more unsaturated fatty acids, so they become opaque <strong>more slowly</strong> (or not at all).</p>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>Melt 5 g ghee at 50°C</strong> (completely liquid).</li>
                        <li>Pour into a transparent tube/container.</li>
                        <li>Transfer to a <strong>23°C water bath</strong>.</li>
                        <li><strong>Start a timer</strong> and note how long it takes for the sample to become <strong>completely opaque</strong>.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Reference Times:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Fat Type</th>
                                    <th class="border p-2">Opacity Time at 23°C</th>
                                    <th class="border p-2">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2">Buffalo Ghee (Pure)</td><td class="border p-2">14-15 minutes</td><td class="border p-2">Reference standard</td></tr>
                                <tr><td class="border p-2">Cow Ghee (Pure)</td><td class="border p-2">18-19 minutes</td><td class="border p-2">Reference standard</td></tr>
                                <tr class="bg-red-50"><td class="border p-2">Animal Body Fat (Lard/Tallow)</td><td class="border p-2"><strong>< 12 minutes</strong></td><td class="border p-2">Shorter time = Animal body fat adulteration suspected</td></tr>
                                <tr class="bg-yellow-50"><td class="border p-2">Vegetable Oil adulterated</td><td class="border p-2"><strong>> 22 minutes</strong></td><td class="border p-2">Longer time = Vegetable oil adulteration suspected</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        {
            title: 'Pond Water (Nitrates)',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700">In rural areas, sometimes <strong>pond or canal water</strong> is added to milk instead of clean tap/bore water. Pond water contains <strong>nitrates (NO₃⁻) and nitrites (NO₂⁻)</strong> that come from surface runoff of agricultural fertilizers (urea, ammonium nitrate, DAP). Clean drinking water or tap water has very low nitrate levels. Therefore, detecting nitrates in milk indicates that pond/contaminated water has been added.</p>
                        <p class="text-green-700 mt-2"><strong>Health Risk of Nitrates:</strong> In the body, nitrates are reduced to nitrites which cause <strong>methemoglobinemia (Blue Baby Syndrome)</strong> — especially in infants. Nitrites oxidize Fe²⁺ in hemoglobin to Fe³⁺ forming methemoglobin which cannot carry oxygen.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Diphenylamine Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> <strong>Diphenylamine ((C₆H₅)₂NH)</strong> dissolved in concentrated sulphuric acid reacts with nitrates to produce an <strong>intense blue color</strong>. Nitrate ions oxidize diphenylamine to form a quinoidal compound (diphenylbenzidine) that gives a blue color. This is the classical qualitative test for nitrate.</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Diphenylamine + NO₃⁻ (in H₂SO₄) → Diphenylbenzidine (Blue) → Diphenylbenzidine Violet</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>Rinse a clean test tube with the milk sample</strong> — pour milk in and then drain it out (a thin film of milk will remain on the tube walls).</li>
                        <li>Add <strong>2-3 drops of 2% diphenylamine solution (in conc. H₂SO₄)</strong> along the side of the tube — drops should slide along the tube wall.</li>
                        <li>Observe the <strong>color of the inner walls</strong> of the tube.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <ul>
                        <li><strong>Blue color on tube walls:</strong> Nitrates PRESENT — Pond/contaminated water has been added</li>
                        <li><strong>No blue color:</strong> Nitrates ABSENT — Clean water (or no water added)</li>
                    </ul>
    
                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <p><strong>⚠️ Safety:</strong> Concentrated H₂SO₄ is highly corrosive — extreme care required. Gloves and eye protection are mandatory.</p>
                    </div>
                </div>
            `
        },
        {
            title: 'Skimmed Milk Powder (SMP) in Natural Milk',
            content: `
                <div class="prose max-w-none prose-green">
                    <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                        <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                        <p class="text-green-700"><strong>Skimmed Milk Powder (SMP)</strong> is added to natural milk because it artificially increases the <strong>SNF (Solids-Not-Fat) content</strong> without adding fat. This is especially done when water has been added to milk — SMP is added to bring the diluted SNF back to the normal range. During SMP manufacturing, proteins undergo chemical changes due to high temperature processing (spray drying, roller drying) that do not occur in fresh milk.</p>
                        <p class="text-green-700 mt-2"><strong>Key Scientific Difference:</strong> SMP manufacturing involves high-temperature processing (typically 160-200°C spray dryer inlet temperature). During this process, proteins undergo <strong>Maillard reaction</strong> (reducing sugars + amino acids) and protein denaturation. Denatured proteins have <strong>exposed sulfhydryl (-SH) groups and reducing groups</strong> that are hidden/unexposed in fresh milk proteins.</p>
                    </div>
    
                    <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Phosphomolybdic Acid Reduction Test</h4>
                    
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                        <p><strong>Principle:</strong> The <strong>exposed reducing groups</strong> in SMP proteins (Maillard reaction products and -SH groups of denatured protein) reduce <strong>phosphomolybdic acid (H₃PMo₁₂O₄₀)</strong> under boiling conditions. Reduced phosphomolybdic acid gives a <strong>"molybdenum blue"</strong> color. The native proteins of fresh milk do not have these reducing groups exposed, so they do not give a blue color (remain greenish).</p>
                        
                        <pre class="bg-gray-100 p-2 rounded"><code>Denatured Proteins (-SH, Maillard products) + Phosphomolybdic Acid (Yellow) 
        → Reduced Molybdenum Complex (BLUE) — on boiling
    
    Native Fresh Milk Proteins + Phosphomolybdic Acid 
        → No significant reduction → Remains GREENISH</code></pre>
                    </div>
    
                    <h5 class="font-semibold mt-3">Procedure:</h5>
                    <ol>
                        <li><strong>Centrifuge 50 ml milk</strong> to separate cream.</li>
                        <li><strong>Coagulate the skim milk portion with acetic acid</strong>.</li>
                        <li><strong>Wash the coagulated curd with distilled water</strong> (to remove residual lactose and minerals).</li>
                        <li>Add <strong>2 ml 1% phosphomolybdic acid solution</strong> to the washed curd.</li>
                        <li><strong>Boil for 15 minutes</strong>.</li>
                        <li>Observe the color of the curd.</li>
                    </ol>
    
                    <h5 class="font-semibold mt-3">Result:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border p-2">Curd Color</th>
                                    <th class="border p-2">Inference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border p-2"><strong>Greenish</strong></td><td class="border p-2">Pure natural milk — SMP NOT added</td></tr>
                                <tr class="bg-blue-50"><td class="border p-2"><strong>Bluish</strong></td><td class="border p-2">SMP <strong>ADDED</strong> — Reconstituted protein detected</td></tr>
                            </tbody>
                        </table>
                    </div>
    
                    <p class="text-xs mt-4"><strong>Ref:</strong> Journal of Food Science and Technology, Vol 22 (1985)</p>
                </div>
            `
        },
        {
          title: 'Soy Milk Adulteration in Milk',
          content: `
              <div class="prose max-w-none prose-green">
                  <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                      <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                      <p class="text-green-700"><strong>Soy milk</strong> is added to milk because it <strong>artificially increases protein content and SNF reading</strong> at very low cost. Soy milk is a plant-based protein source made from soybeans. There are fundamental differences in the biochemical composition of bovine (cow/buffalo) milk and soy milk.</p>
                      <p class="text-green-700 mt-2"><strong>Key Compositional Differences:</strong></p>
                      <ul class="text-green-700">
                          <li><strong>Proteins:</strong> Cow milk contains <strong>caseins (α-casein, β-casein, κ-casein)</strong> and whey proteins (α-lactalbumin, β-lactoglobulin). Soy milk has <strong>glycinin (11S globulin) and β-conglycinin (7S globulin)</strong> as dominant proteins.</li>
                          <li><strong>Carbohydrates:</strong> Cow milk contains <strong>lactose (glucose + galactose disaccharide)</strong>. Soy milk contains <strong>sucrose, raffinose (trisaccharide), and stachyose (tetrasaccharide)</strong> — lactose is absent.</li>
                          <li><strong>Bioactive Compounds:</strong> Soy milk contains <strong>trypsin inhibitors (Kunitz and Bowman-Birk inhibitors)</strong> and <strong>isoflavones (genistein, daidzein)</strong> that are not present in cow milk.</li>
                      </ul>
                  </div>

                  <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Detection Methods</h4>
                  
                  <!-- Method I: Polarimetric -->
                  <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 class="font-semibold text-green-700">Method I: Polarimetric Method</h5>
                      <p><strong>Principle:</strong> Different sugars have different <strong>specific optical rotation</strong> values. <strong>Lactose's specific rotation [α]²⁰ᴅ = +52.6°</strong>, while <strong>sucrose's [α]²⁰ᴅ = +66.5°</strong>, and <strong>raffinose and stachyose range from +105° to +148°</strong>. In a polarimeter, plane-polarized light is passed through the sample — sugar molecules rotate the plane of light. If soy milk is present, the optical rotation value will change significantly.</p>
                      
                      <h6 class="font-semibold mt-3">Procedure:</h6>
                      <ol>
                          <li>Prepare a <strong>protein-free filtrate</strong> from milk:
                              <ul>
                                  <li>Mix 10 ml milk + 5 ml distilled water</li>
                                  <li>Add <strong>acetic acid (1-2 drops)</strong> to precipitate proteins</li>
                                  <li>Warm to 70°C (for complete coagulation)</li>
                                  <li>Filter through <strong>Whatman No. 1 filter paper</strong> — a clear filtrate (sugar solution) will be obtained</li>
                              </ul>
                          </li>
                          <li>Fill the filtrate into a <strong>polarimeter tube</strong> (usually 200 mm path length tube).</li>
                          <li>Measure <strong>optical rotation (degrees)</strong> using sodium D-line light (589 nm).</li>
                          <li>Rotation for pure cow milk is in the <strong>+26° to +30°</strong> range.</li>
                          <li><strong>Significantly higher rotation (+35° or above)</strong> indicates soy milk presence.</li>
                      </ol>
                      
                      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-3">
                          <p><strong>📊 Calculation Example:</strong> If the rotation of the filtrate is +38° instead of the normal +28°, this is a strong indication of soy sugar mixing.</p>
                      </div>
                  </div>

                  <!-- Method II: Isoelectric Precipitation -->
                  <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 class="font-semibold text-green-700">Method II: Isoelectric Precipitation Method</h5>
                      <p><strong>Principle:</strong> Every protein has a specific <strong>isoelectric point (pI)</strong> — the pH at which the protein has zero net charge and is least soluble (precipitates). <strong>Cow milk casein's pI = 4.6</strong>, while <strong>soy proteins (glycinin, β-conglycinin) pI ≈ 5.7-6.0</strong>. If milk is adjusted to pH 5.7 and heated, soy proteins will coagulate but casein will remain dissolved (because it is far from its pI).</p>
                      
                      <h6 class="font-semibold mt-3">Procedure:</h6>
                      <ol>
                          <li>Take <strong>10 ml milk sample in a beaker</strong>.</li>
                          <li>Adjust pH to <strong>5.7-5.8</strong> by adding <strong>0.1 N HCl</strong> dropwise (use pH meter or pH paper).</li>
                          <li><strong>Heat in a water bath at 80-90°C for 5 minutes</strong>.</li>
                          <li>Observe coagulation/precipitation.</li>
                      </ol>
                      
                      <h6 class="font-semibold mt-3">Result Interpretation:</h6>
                      <ul>
                          <li><strong>No coagulation/minimal precipitation:</strong> Pure cow milk — soy milk absent</li>
                          <li><strong>Visible coagulation/curd formation at pH 5.7:</strong> Soy milk PRESENT — soy proteins precipitated at their pI</li>
                      </ul>
                  </div>

                  <!-- Method III: SDS-PAGE -->
                  <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 class="font-semibold text-green-700">Method III: SDS-PAGE (Electrophoresis) Method</h5>
                      <p><strong>Principle:</strong> <strong>Sodium Dodecyl Sulfate - Polyacrylamide Gel Electrophoresis (SDS-PAGE)</strong> separates proteins based on their <strong>molecular weight</strong>. SDS (anionic detergent) denatures proteins giving them a uniform negative charge. In an electric field, proteins migrate through the gel matrix — smaller proteins migrate fast, larger proteins migrate slowly. Cow milk and soy milk proteins have different molecular weights, so distinct bands will form on the gel.</p>
                      
                      <p class="mt-2"><strong>Molecular Weight Reference:</strong></p>
                      <table class="w-full border-collapse border mt-2 text-sm">
                          <thead>
                              <tr class="bg-green-100">
                                  <th class="border p-2">Protein Source</th>
                                  <th class="border p-2">Major Proteins</th>
                                  <th class="border p-2">Molecular Weight (kDa)</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr><td class="border p-2">Cow Milk</td><td class="border p-2">α-casein, β-casein, κ-casein, β-lactoglobulin</td><td class="border p-2">19-25 kDa</td></tr>
                              <tr class="bg-blue-50"><td class="border p-2">Soy Milk</td><td class="border p-2">Glycinin (11S), β-conglycinin (7S)</td><td class="border p-2">50-70 kDa (subunits: 35-70 kDa)</td></tr>
                          </tbody>
                      </table>
                      
                      <h6 class="font-semibold mt-3">Procedure (Simplified):</h6>
                      <ol>
                          <li>Dilute milk sample in <strong>SDS sample buffer</strong> (contains SDS, reducing agent DTT/β-mercaptoethanol, glycerol, bromophenol blue dye).</li>
                          <li><strong>Boil at 95-100°C for 5 minutes</strong> (for complete denaturation).</li>
                          <li>Load the sample into <strong>polyacrylamide gel wells</strong> (typically 12-15% gel concentration).</li>
                          <li><strong>Apply electric field</strong> (100-150 V constant voltage) — proteins will migrate towards the anode.</li>
                          <li>Stain gel with <strong>Coomassie Brilliant Blue stain</strong> — protein bands will be visible.</li>
                          <li>Destain gel (to remove excess dye).</li>
                      </ol>
                      
                      <h6 class="font-semibold mt-3">Result:</h6>
                      <ul>
                          <li><strong>Pure cow milk:</strong> Bands will appear in the 19-25 kDa region on the gel (casein and whey proteins).</li>
                          <li><strong>Soy milk adulterated:</strong> <strong>Additional distinct bands in the 35-70 kDa region</strong> will appear (glycinin and β-conglycinin subunits) — these are absent in cow milk.</li>
                      </ul>
                      
                      <div class="bg-blue-50 border-l-4 border-blue-400 p-3 mt-3">
                          <p><strong>🔬 Advanced Variant:</strong> <strong>Western Blotting</strong> using soy-specific antibodies can confirm — highly specific detection.</p>
                      </div>
                  </div>

                  <!-- Method IV: Immunodiffusion -->
                  <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 class="font-semibold text-green-700">Method IV: Immunodiffusion Method (Ouchterlony Double Diffusion)</h5>
                      <p><strong>Principle:</strong> This is based on <strong>antigen-antibody interaction</strong>. <strong>Polyclonal/monoclonal antibodies</strong> specific to soy proteins are commercially available. If soy proteins are present in milk, the antibodies will bind to them and form a <strong>visible white precipitation line</strong> in agar gel (immune complex formation).</p>
                      
                      <h6 class="font-semibold mt-3">Procedure:</h6>
                      <ol>
                          <li>Prepare <strong>1% agar gel</strong> and pour into a petri dish.</li>
                          <li><strong>Cut wells</strong> in the gel (typically hexagonal pattern — antiserum in center, samples in periphery).</li>
                          <li>Add <strong>anti-soy protein antibody</strong> to the center well.</li>
                          <li>In peripheral wells add:
                              <ul>
                                  <li>Test milk sample (diluted/treated)</li>
                                  <li>Positive control (pure soy milk dilution)</li>
                                  <li>Negative control (pure cow milk)</li>
                              </ul>
                          </li>
                          <li><strong>Incubate the petri dish in a humid chamber for 24-48 hours</strong> at room temperature.</li>
                          <li>As diffusion occurs, antigens and antibodies meet in the gel and precipitate.</li>
                      </ol>
                      
                      <h6 class="font-semibold mt-3">Result:</h6>
                      <ul>
                          <li><strong>Precipitation line visible between antibody well and test sample well:</strong> Soy milk PRESENT</li>
                          <li><strong>No precipitation line:</strong> Soy milk ABSENT</li>
                          <li><strong>Line of identity:</strong> If the test sample's line merges with the positive control's line, it is confirmed that the same antigen (soy protein) is present.</li>
                      </ul>
                  </div>

                  <!-- Method V: HPLC -->
                  <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 class="font-semibold text-green-700">Method V: HPLC-Based Method (Sugar Profiling)</h5>
                      <p><strong>Principle:</strong> <strong>High-Performance Liquid Chromatography (HPLC)</strong> is a highly sensitive analytical technique that separates and quantifies individual components of complex mixtures. Soy milk contains <strong>stachyose</strong> which is completely absent in cow milk — this is a definitive marker. HPLC identifies carbohydrates based on <strong>retention time</strong>.</p>
                      
                      <h6 class="font-semibold mt-3">Procedure (Outline):</h6>
                      <ol>
                          <li>Prepare a <strong>deproteinized filtrate</strong> from milk (acetonitrile precipitation or Carrez reagent method).</li>
                          <li>Filter through a <strong>0.45 μm syringe filter</strong>.</li>
                          <li><strong>HPLC system setup:</strong>
                              <ul>
                                  <li><strong>Column:</strong> Amino column (e.g., NH₂-bonded silica) or carbohydrate analysis column</li>
                                  <li><strong>Mobile phase:</strong> Acetonitrile:Water (75:25 to 80:20 v/v)</li>
                                  <li><strong>Flow rate:</strong> 1.0-1.5 ml/min</li>
                                  <li><strong>Detector:</strong> Refractive Index Detector (RID) or Evaporative Light Scattering Detector (ELSD)</li>
                                  <li><strong>Injection volume:</strong> 10-20 μl</li>
                              </ul>
                          </li>
                          <li>Run standard solutions: lactose, sucrose, raffinose, stachyose — note retention times.</li>
                          <li>Inject test sample and analyze chromatogram.</li>
                      </ol>
                      
                      <h6 class="font-semibold mt-3">Result Interpretation:</h6>
                      <table class="w-full border-collapse border mt-2 text-sm">
                          <thead>
                              <tr class="bg-green-100">
                                  <th class="border p-2">Sugar Detected</th>
                                  <th class="border p-2">Typical Retention Time</th>
                                  <th class="border p-2">Inference</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr><td class="border p-2">Lactose only</td><td class="border p-2">~6-8 min</td><td class="border p-2">Pure cow milk</td></tr>
                              <tr class="bg-red-50"><td class="border p-2"><strong>Stachyose peak present</strong></td><td class="border p-2">~12-15 min</td><td class="border p-2"><strong>Soy milk PRESENT</strong></td></tr>
                              <tr><td class="border p-2">Raffinose + Sucrose peaks</td><td class="border p-2">~9-11 min</td><td class="border p-2">Supportive evidence of soy</td></tr>
                          </tbody>
                      </table>
                      
                      <div class="bg-green-50 border-l-4 border-green-500 p-3 mt-3">
                          <p><strong>✅ Advantage:</strong> HPLC is extremely sensitive — can detect <strong>even 1-2% soy milk contamination</strong>. Quantitative analysis is also possible (exact % adulteration can be calculated).</p>
                      </div>
                  </div>

                  <!-- Method VI: Trypsin Inhibition -->
                  <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      <h5 class="font-semibold text-green-700">Method VI: Rapid Method — Trypsin Inhibition Assay</h5>
                      <p><strong>Principle:</strong> Soybeans naturally contain <strong>trypsin inhibitors</strong> — these are anti-nutritional factors that inhibit the digestive enzyme trypsin. The main inhibitors are <strong>Kunitz Trypsin Inhibitor (KTI, ~20 kDa)</strong> and <strong>Bowman-Birk Inhibitor (BBI, ~8 kDa)</strong>. These proteins tightly bind to the active site of trypsin and inactivate it. These inhibitors are naturally absent in cow milk. In the test, the proteolytic activity of trypsin enzyme is measured — if activity is reduced, inhibitors are present = soy milk has been added.</p>
                      
                      <p class="mt-2"><strong>Trypsin Activity Measurement:</strong> Trypsin cleaves a specific synthetic substrate <strong>BAEE (Benzoyl-L-Arginine Ethyl Ester)</strong> or <strong>casein</strong>. Cleavage produces a measurable product (absorbance change or color change).</p>
                      
                      <h6 class="font-semibold mt-3">Procedure (Using BAEE Substrate):</h6>
                      <ol>
                          <li><strong>Sample preparation:</strong> 
                              <ul>
                                  <li>Dilute 5 ml milk sample in <strong>pH 8.0 Tris-HCl buffer</strong></li>
                                  <li>Centrifuge to remove fat</li>
                              </ul>
                          </li>
                          <li><strong>Prepare trypsin solution:</strong> 0.1 mg/ml trypsin in pH 8.0 buffer</li>
                          <li><strong>Test tubes setup:</strong>
                              <ul>
                                  <li><strong>Control tube:</strong> 1 ml buffer + 0.5 ml trypsin solution + 1 ml BAEE substrate (0.001 M)</li>
                                  <li><strong>Test tube:</strong> 1 ml treated milk sample + 0.5 ml trypsin solution + incubate 10 min (time for inhibitor to bind trypsin) + 1 ml BAEE substrate</li>
                              </ul>
                          </li>
                          <li><strong>Incubate at 37°C for 10 minutes</strong>.</li>
                          <li><strong>Measure absorbance</strong> at 253 nm (BAEE hydrolysis product absorbs UV light).</li>
                      </ol>
                      
                      <h6 class="font-semibold mt-3">Alternative Simplified Method (Casein-Ninhydrin):</h6>
                      <ol>
                          <li>Mix 2 ml milk sample + 1 ml trypsin solution (1 mg/ml).</li>
                          <li>Add <strong>1 ml casein solution (1%)</strong> as substrate.</li>
                          <li><strong>Incubate at 37°C for 30 minutes</strong>.</li>
                          <li>Add <strong>2 ml TCA (Trichloroacetic Acid, 10%)</strong> to stop reaction — undigested casein will precipitate.</li>
                          <li>Centrifuge and take clear supernatant.</li>
                          <li>Add <strong>ninhydrin reagent</strong> to supernatant and boil — <strong>purple color</strong> will develop from free amino acids (casein digestion product).</li>
                          <li>Measure absorbance at 570 nm.</li>
                      </ol>
                      
                      <h6 class="font-semibold mt-3">Result:</h6>
                      <div class="overflow-x-auto">
                          <table class="w-full border-collapse border text-sm">
                              <thead>
                                  <tr class="bg-green-100">
                                      <th class="border p-2">Observation</th>
                                      <th class="border p-2">Trypsin Activity</th>
                                      <th class="border p-2">Inference</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr><td class="border p-2">High absorbance (intense purple color)</td><td class="border p-2">Normal/High — trypsin actively digesting substrate</td><td class="border p-2">Pure cow milk — no inhibitors</td></tr>
                                  <tr class="bg-red-50"><td class="border p-2"><strong>Significantly reduced absorbance</strong> (pale color)</td><td class="border p-2"><strong>Inhibited</strong> — trypsin blocked by inhibitors</td><td class="border p-2"><strong>Soy milk PRESENT</strong></td></tr>
                              </tbody>
                          </table>
                      </div>
                      
                      <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                          <p><strong>⚡ Speed Advantage:</strong> This method is complete in 30-45 minutes — suitable for field testing. No expensive equipment required except a spectrophotometer.</p>
                      </div>
                  </div>

                  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                      <h5 class="font-semibold text-blue-800">📚 References:</h5>
                      <ul class="text-sm text-blue-700">
                          <li>Journal of Dairy Science, Vol. 85(2002) - "Detection of Soy Protein in Milk"</li>
                          <li>Food Chemistry, Vol. 158(2014) - "HPLC determination of oligosaccharides in soy-adulterated milk"</li>
                          <li>International Dairy Journal, Vol. 22(2012) - "Immunological methods for milk adulteration"</li>
                      </ul>
                  </div>
              </div>
          `
      },
             {
    title: 'Cheese Whey Adulteration in Milk',
    content: `
        <div class="prose max-w-none prose-green">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-green-700"><strong>Cheese whey (paneer whey)</strong> is a by-product of cheese/paneer manufacturing. When paneer is made from milk, milk proteins separate into two fractions:</p>
                <ul class="text-green-700">
                    <li><strong>Curd/Paneer (80% milk protein):</strong> Mainly <strong>casein</strong> — this coagulates to form solid paneer</li>
                    <li><strong>Whey (20% milk protein):</strong> Liquid portion — mainly contains <strong>whey proteins (α-lactalbumin, β-lactoglobulin, BSA, immunoglobulins)</strong>, lactose, minerals, and a little fat</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>Why Whey is Added to Milk?</strong></p>
                <ul class="text-green-700">
                    <li>Whey disposal is a problem — it causes environmental pollution (high BOD/COD)</li>
                    <li>Whey addition <strong>increases the volume</strong> of milk without obvious detection</li>
                    <li>Lactose and proteins present in whey <strong>maintain the lactometer reading</strong></li>
                    <li>Economic benefit — whey is cheaper than milk</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>The Marker: Glycomacropeptide (GMP)</strong></p>
                <p class="text-green-700">When <strong>rennet enzyme (chymosin)</strong> is used to make paneer, this enzyme cleaves the κ-casein molecule at a specific site:</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>κ-Casein (Phe₁₀₅-Met₁₀₆ bond cleavage)
    ↓ Rennet (Chymosin)
Para-κ-casein (residue 1-105) → Remains in curd
        +
Glycomacropeptide/GMP (residue 106-169) → Goes into WHEY</code></pre>
                
                <p class="text-green-700 mt-2"><strong>GMP Structure & Uniqueness:</strong></p>
                <ul class="text-green-700">
                    <li>GMP is a <strong>64 amino acid peptide</strong> (molecular weight ~6.8 kDa)</li>
                    <li>It has <strong>N-acetylneuraminic acid (NANA, a form of sialic acid)</strong> attached as glycan chains</li>
                    <li><strong>GMP is absent in normal fresh milk</strong> (κ-casein exists in intact form)</li>
                    <li><strong>GMP is abundant in cheese whey</strong></li>
                    <li>GMP detection = indicator of rennet-treated whey = cheese whey adulteration</li>
                </ul>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Ninhydrin-Based Spectrophotometric Method</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Scientific Principle (Detailed)</h5>
                <p>This method is based on <strong>sialic acid content measurement</strong> attached to GMP. The method has 3 major steps:</p>
                
                <p class="mt-3"><strong>Step 1: Selective Precipitation of GMP</strong></p>
                <p>The milk sample is treated with <strong>Trichloroacetic Acid (TCA, 12-15%)</strong>. TCA is a strong protein precipitant but does <strong>not precipitate GMP</strong> because:</p>
                <ul>
                    <li>GMP is a relatively small, highly charged peptide</li>
                    <li>Attached sialic acid residues give negative charge → remains soluble in TCA-acidic conditions</li>
                    <li>Large proteins (caseins, whey proteins) precipitate</li>
                </ul>
                <p>Result: Only GMP remains dissolved in TCA supernatant.</p>
                
                <p class="mt-3"><strong>Step 2: Sialic Acid Release</strong></p>
                <p>The GMP-containing supernatant is <strong>heated (80-100°C) under acidic conditions (dilute HCl/H₂SO₄)</strong>. This hydrolysis reaction occurs:</p>
                <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>GMP-Sialic Acid (glycosidic bond) + H⁺ + Heat 
    → Free Sialic Acid (NANA) + Peptide backbone</code></pre>
                <p>Glycosidic bonds are cleaved and <strong>free N-acetylneuraminic acid (NANA)</strong> is released.</p>
                
                <p class="mt-3"><strong>Step 3: Ninhydrin Reaction (Color Development)</strong></p>
                <p><strong>Ninhydrin (1,2,3-indanetrione monohydrate)</strong> reacts with amino acids and amines to form colored products. Sialic acid (NANA) has a <strong>free amino group</strong> present (partially exposed due to the N-acetyl group). On heating with acidic ninhydrin reagent:</p>
                
                <pre class="bg-gray-100 p-3 rounded text-xs mt-2"><code>NANA + Ninhydrin (in acidic solution) + Heat
    ↓
Oxidative decarboxylation + Schiff base formation
    ↓
Yellow-brown colored complex (λmax ≈ 470 nm)
(Different from classic Ruhemann's purple at 570 nm for amino acids)</code></pre>
                
                <p class="mt-2">The ninhydrin reaction of sialic acid is slightly different from amino acids — it gives a <strong>yellow-brown chromophore</strong> instead of purple, which gives <strong>maximum absorbance at 470 nm wavelength</strong>.</p>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>A. Sample Preparation & GMP Isolation:</strong></p>
                <ol>
                    <li>Take <strong>10 ml milk sample</strong> in a test tube.</li>
                    <li>Add <strong>15 ml TCA solution (15% w/v)</strong> — proteins will precipitate.</li>
                    <li><strong>Vigorously shake</strong> the tube and allow to <strong>stand at room temperature for 10 minutes</strong> (for complete precipitation).</li>
                    <li>Filter through <strong>Whatman No. 1 filter paper</strong> — collect the clear filtrate (this is the GMP-containing fraction).</li>
                </ol>
                
                <p class="mt-3"><strong>B. Sialic Acid Hydrolysis:</strong></p>
                <ol start="5">
                    <li>Take a <strong>5 ml portion</strong> from the filtrate and transfer to a clean test tube.</li>
                    <li>Add <strong>0.5 ml 0.1 N HCl</strong> (to maintain acidic pH).</li>
                    <li><strong>Heat the tube in a boiling water bath for 15-20 minutes</strong> (glycosidic bond hydrolysis).</li>
                    <li><strong>Cool</strong> to room temperature.</li>
                </ol>
                
                <p class="mt-3"><strong>C. Ninhydrin Color Reaction:</strong></p>
                <ol start="9">
                    <li><strong>Prepare ninhydrin reagent:</strong>
                        <ul>
                            <li>Dissolve 0.2 g ninhydrin powder in</li>
                            <li>100 ml mixture of glacial acetic acid + conc. HCl (95:5 v/v)</li>
                            <li>Prepare fresh before use (reagent is not stable)</li>
                        </ul>
                    </li>
                    <li>Add <strong>2 ml ninhydrin reagent</strong> to the cooled hydrolysate.</li>
                    <li>Heat the tube again in a <strong>boiling water bath for 10-12 minutes</strong>.</li>
                    <li>Remove and <strong>immediately cool in ice-cold water</strong> (to stabilize the color).</li>
                </ol>
                
                <p class="mt-3"><strong>D. Spectrophotometric Measurement:</strong></p>
                <ol start="13">
                    <li>Transfer the solution to a <strong>cuvette</strong> (1 cm path length).</li>
                    <li>Set the <strong>spectrophotometer to 470 nm</strong> wavelength.</li>
                    <li>Zero the instrument using a <strong>blank solution</strong> (blank = reagent blank — follow same procedure using distilled water instead of pure milk).</li>
                    <li>Read the <strong>absorbance (A₄₇₀)</strong> of the test sample.</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Result Interpretation</h5>
            <div class="overflow-x-auto mt-3">
                <table class="w-full border-collapse border">
                    <thead>
                        <tr class="bg-green-100">
                            <th class="border p-2">Absorbance at 470 nm</th>
                            <th class="border p-2">Visual Color</th>
                            <th class="border p-2">GMP Content</th>
                            <th class="border p-2">Inference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2"><strong>< 0.100</strong></td>
                            <td class="border p-2">Very pale yellow / Colorless</td>
                            <td class="border p-2">Absent/Trace</td>
                            <td class="border p-2"><strong>Pure milk</strong> — No whey added</td>
                        </tr>
                        <tr class="bg-yellow-50">
                            <td class="border p-2"><strong>0.100 - 0.250</strong></td>
                            <td class="border p-2">Light yellow</td>
                            <td class="border p-2">Low GMP</td>
                            <td class="border p-2">Borderline — possible <strong>5-10% whey</strong></td>
                        </tr>
                        <tr class="bg-orange-50">
                            <td class="border p-2"><strong>0.250 - 0.500</strong></td>
                            <td class="border p-2">Yellow-brown</td>
                            <td class="border p-2">Moderate GMP</td>
                            <td class="border p-2"><strong>10-20% whey added</strong></td>
                        </tr>
                        <tr class="bg-red-50">
                            <td class="border p-2"><strong>> 0.500</strong></td>
                            <td class="border p-2">Intense brown</td>
                            <td class="border p-2">High GMP</td>
                            <td class="border p-2"><strong>Heavy adulteration (>20% whey)</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">📊 Quantitative Analysis (Optional)</h5>
                <p class="text-blue-700">A standard curve can be prepared to calculate the exact GMP concentration:</p>
                <ol class="text-sm text-blue-700 mt-2">
                    <li>Prepare pure sialic acid (NANA) standards (0, 10, 20, 30, 40, 50 μg/ml concentrations)</li>
                    <li>Treat each standard with ninhydrin reagent and measure absorbance</li>
                    <li>Plot graph: X-axis = NANA concentration (μg/ml), Y-axis = Absorbance (A₄₇₀)</li>
                    <li>Match test sample absorbance on graph to calculate GMP/sialic acid concentration</li>
                    <li>Estimate whey percentage using formula (based on typical GMP content in cheese whey ~ 0.6-1.2 g/L)</li>
                </ol>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Important Notes & Precautions</h5>
                <ul class="text-sm text-yellow-700">
                    <li><strong>Acid-set paneer whey:</strong> If paneer was made with citric acid/lemon juice (not rennet), GMP will not be released — this test will remain negative even if whey has been added. In this case, alternate methods are needed (e.g., lactose:protein ratio analysis).</li>
                    <li><strong>Timing critical:</strong> The color of ninhydrin reaction is time-dependent — follow exactly the recommended time.</li>
                    <li><strong>Temperature control:</strong> Variations in boiling time and temperature affect results — maintain consistent heating.</li>
                    <li><strong>Reagent quality:</strong> Ninhydrin is light-sensitive — store in amber bottles. Old/degraded ninhydrin gives weak color.</li>
                    <li><strong>Interference:</strong> Some preservatives (benzoic acid, sorbic acid) can slightly affect absorbance.</li>
                </ul>
            </div>

            <div class="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
                <h5 class="font-semibold text-gray-800">🔬 Alternative/Confirmatory Methods</h5>
                <ul class="text-sm text-gray-700">
                    <li><strong>HPLC Method:</strong> Direct GMP quantification — highly accurate, gold standard method</li>
                    <li><strong>Capillary Electrophoresis:</strong> GMP separation based on charge-to-mass ratio</li>
                    <li><strong>Immunoassay (ELISA):</strong> Detection using anti-GMP antibodies — very specific</li>
                    <li><strong>Lactose:Casein Ratio:</strong> Whey addition disturbs this ratio (whey has high lactose, low casein)</li>
                </ul>
            </div>

            <p class="text-xs mt-4 text-gray-600"><strong>References:</strong> Journal of Food Science and Technology, Vol 22 (1985); International Dairy Journal, Vol 18 (2008); Food Chemistry, Vol 113 (2009)</p>
        </div>
    `
},
{
    title: 'Gelatin Adulteration in Milk',
    content: `
        <div class="prose max-w-none prose-green">
            <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h4 class="text-green-800 font-bold">🔬 Scientific Overview</h4>
                <p class="text-green-700"><strong>Gelatin</strong> is a protein-rich substance extracted from animal tissues (mainly bones, skin, connective tissues) by partial hydrolysis of collagen. It is economically cheap and easily available, so unethical traders add it to milk.</p>
                
                <p class="text-green-700 mt-2"><strong>Why Gelatin is Added to Milk?</strong></p>
                <ul class="text-green-700">
                    <li><strong>Viscosity increase:</strong> Gelatin solution is viscous/thick — gives watered-down milk a thick appearance, making it seem like natural milk</li>
                    <li><strong>Artificially increases SNF content:</strong> Gelatin is a protein (contains nitrogen) — SNF reading increases with Kjeldahl method</li>
                    <li><strong>Mouthfeel enhancement:</strong> The thin texture of diluted milk is masked</li>
                    <li><strong>Economic fraud:</strong> Cheap gelatin (₹200-400/kg) replaces expensive milk solids</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>Gelatin Structure & Composition:</strong></p>
                <p class="text-green-700">Gelatin is <strong>denatured collagen</strong>. Collagen is a triple-helix protein found mainly in connective tissues. When collagen is treated with controlled heat and partial acid/alkali hydrolysis, the triple helix breaks and gelatin is formed.</p>
                
                <ul class="text-green-700 mt-2">
                    <li><strong>Amino Acid Composition:</strong> Gelatin is abundant in <strong>glycine (33%), proline (12%), hydroxyproline (10%)</strong>. Especially <strong>hydroxyproline</strong> is gelatin's unique marker — it is virtually absent in milk proteins.</li>
                    <li><strong>Molecular Weight:</strong> 20-250 kDa range (depending on extent of hydrolysis)</li>
                    <li><strong>Isoelectric Point:</strong> pH 4.7-5.0 (acidic side)</li>
                </ul>
                
                <p class="text-green-700 mt-2"><strong>Detection Strategy:</strong></p>
                <p class="text-green-700">Gelatin is isolated from milk and reacted with a specific reagent that gives a characteristic color/precipitate for gelatin. <strong>Picric acid (2,4,6-trinitrophenol)</strong> has a specific interaction with gelatin.</p>
            </div>

            <h4 class="font-bold text-lg mt-6 mb-3 text-green-800">🧪 Picric Acid Precipitation Test</h4>
            
            <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 class="font-semibold text-green-700">Scientific Principle (Detailed)</h5>
                
                <p><strong>Picric Acid (C₆H₂(NO₂)₃OH) — Structure and Properties:</strong></p>
                <ul>
                    <li>Picric acid is an <strong>aromatic compound</strong> with <strong>three nitro groups (-NO₂)</strong> and a hydroxyl group (-OH) attached to a benzene ring</li>
                    <li>It is a <strong>strong acid</strong> (pKa ≈ 0.4) — due to the electron-withdrawing effect of nitro groups adjacent to the phenolic -OH group</li>
                    <li>Bright <strong>yellow crystalline solid</strong> — highly colored due to conjugated system</li>
                    <li>Water-soluble (saturated solution ~1.4% w/v at room temperature)</li>
                </ul>
                
                <p class="mt-3"><strong>Mechanism of Gelatin-Picric Acid Interaction:</strong></p>
                <p>The reaction of gelatin with picric acid is based on <strong>electrostatic interaction and hydrogen bonding</strong>:</p>
                
                <div class="bg-white border border-gray-300 p-3 rounded mt-2">
                    <p class="font-semibold">Step-by-Step Interaction:</p>
                    <ol>
                        <li><strong>Protonation of Gelatin:</strong> In acidic medium (Stokes reagent of mercuric nitrate + acetic acid), the basic amino acid residues (lysine, arginine, histidine) of gelatin become protonated:
                            <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>-NH₂ (gelatin) + H⁺ → -NH₃⁺ (positively charged)</code></pre>
                        </li>
                        <li><strong>Picrate Ion Formation:</strong> Picric acid dissociates to form the picrate anion:
                            <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>C₆H₂(NO₂)₃OH ⇌ C₆H₂(NO₂)₃O⁻ + H⁺
(Picric acid)     (Picrate ion - YELLOW)</code></pre>
                        </li>
                        <li><strong>Electrostatic Complex Formation:</strong> Positively charged gelatin amino groups and negatively charged picrate ions attract each other:
                            <pre class="bg-gray-100 p-2 rounded text-xs mt-1"><code>Gelatin-NH₃⁺ + ⁻O-C₆H₂(NO₂)₃ → 
    [Gelatin-NH₃⁺ ··· ⁻O-C₆H₂(NO₂)₃]
    (Gelatin-picrate COMPLEX - YELLOW PRECIPITATE)</code></pre>
                        </li>
                        <li><strong>Additional H-Bonding:</strong> The -OH groups of gelatin (from serine, threonine, hydroxyproline) and -NH groups (peptide backbone) also form hydrogen bonds with the nitro groups (-NO₂) and phenolic -OH of picric acid — stabilizing the complex.</li>
                    </ol>
                </div>
                
                <p class="mt-3"><strong>Why Milk Proteins Don't React Similarly?</strong></p>
                <ul>
                    <li>The amino acid composition of milk caseins and whey proteins is different from gelatin</li>
                    <li>Caseins already precipitate in acidic medium (in Stokes reagent) and do not come into the filtrate</li>
                    <li>Small amounts of residual milk proteins have weak interaction with picric acid — no significant yellow precipitate</li>
                    <li>Gelatin's <strong>high glycine, proline, hydroxyproline content</strong> gives a unique structural conformation that facilitates strong multi-point interaction with picric acid</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Reagents Required</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>1. Stokes Reagent (Acid Mercuric Nitrate Solution):</strong></p>
                <ul class="text-sm">
                    <li><strong>Composition:</strong> Mercuric nitrate [Hg(NO₃)₂] in acidified water</li>
                    <li><strong>Preparation:</strong>
                        <ul>
                            <li>Dissolve <strong>5 g mercuric nitrate</strong> in <strong>100 ml distilled water</strong></li>
                            <li>Add <strong>2-3 ml glacial acetic acid</strong> (to maintain pH ~3-4)</li>
                            <li>Mix thoroughly — a clear solution will be obtained</li>
                        </ul>
                    </li>
                    <li><strong>Function:</strong> 
                        <ul>
                            <li>Precipitates milk proteins (casein, whey proteins) — mercury cations form coordinate bonds with protein amino groups</li>
                            <li>Maintains acidic environment</li>
                            <li>Does NOT precipitate gelatin (gelatin has weak interaction with mercury, remains soluble)</li>
                        </ul>
                    </li>
                </ul>
                
                <p class="mt-3"><strong>2. Saturated Picric Acid Solution:</strong></p>
                <ul class="text-sm">
                    <li><strong>Preparation:</strong>
                        <ul>
                            <li>Dissolve <strong>1.4 g picric acid powder</strong> in <strong>100 ml warm distilled water (40-50°C)</strong></li>
                            <li>Cool to room temperature — a saturated solution will form</li>
                            <li>Allow undissolved crystals to settle, use clear supernatant</li>
                        </ul>
                    </li>
                    <li><strong>Storage:</strong> In amber/dark glass bottle (light-sensitive). Stable at room temperature.</li>
                </ul>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Detailed Procedure</h5>
            <div class="bg-white border border-gray-300 p-4 rounded-lg">
                <p><strong>Step 1: Milk Sample Conditioning</strong></p>
                <ol>
                    <li>Take <strong>10 ml milk sample</strong> in a clean test tube.</li>
                    <li>If milk is cold, warm to <strong>room temperature (20-25°C)</strong> — gelatin solubility will improve.</li>
                    <li>If a fat layer is present, gently mix (a uniform sample is required).</li>
                </ol>
                
                <p class="mt-3"><strong>Step 2: Protein Precipitation (Deproteinization)</strong></p>
                <ol start="4">
                    <li>Add <strong>20 ml Stokes reagent</strong> to the milk sample (ratio 1:2 — milk:reagent).</li>
                    <li>Close the test tube with a stopper and <strong>vigorously shake</strong> for 30 seconds — proteins will precipitate (whitish curd formation).</li>
                    <li>Allow the tube to <strong>stand for 5-10 minutes</strong> at room temperature — for complete precipitation and settling.</li>
                    <li>If precipitate is loose, gentle centrifugation (2000 rpm, 3-5 min) can be done.</li>
                </ol>
                
                <p class="mt-3"><strong>Step 3: Filtration</strong></p>
                <ol start="8">
                    <li>Collect filtrate using <strong>Whatman No. 1 filter paper</strong> and a funnel.</li>
                    <li>Filtrate should be <strong>clear and colorless/slightly yellowish</strong>.</li>
                    <li>If filtrate is cloudy, re-filter — a clear filtrate is essential for accurate results.</li>
                </ol>
                
                <p class="mt-3"><strong>Step 4: Picric Acid Test</strong></p>
                <ol start="11">
                    <li>Take a <strong>5 ml portion</strong> from the clear filtrate into a fresh clean test tube.</li>
                    <li>Add <strong>equal volume (5 ml) saturated picric acid solution</strong> to the filtrate.</li>
                    <li>Gently shake the test tube to <strong>mix</strong>.</li>
                    <li>Allow to <strong>stand for 5-10 minutes</strong> at room temperature.</li>
                    <li>Observe the tube against <strong>transmitted light against a dark background</strong> — precipitation will be clearly visible.</li>
                </ol>
            </div>

            <h5 class="font-semibold mt-4 text-green-700">Result Interpretation</h5>
            <div class="overflow-x-auto mt-3">
                <table class="w-full border-collapse border">
                    <thead>
                        <tr class="bg-green-100">
                            <th class="border p-2">Observation</th>
                            <th class="border p-2">Description</th>
                            <th class="border p-2">Inference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-red-50">
                            <td class="border p-2"><strong>Bright YELLOW Precipitate</strong></td>
                            <td class="border p-2">
                                <ul class="text-sm mb-0">
                                    <li>Heavy yellow sediment settles at bottom</li>
                                    <li>Supernatant clear/pale yellow</li>
                                    <li>Precipitate has flocculent/granular appearance</li>
                                </ul>
                            </td>
                            <td class="border p-2"><strong>GELATIN PRESENT</strong><br><span class="text-xs">Gelatin-picrate complex formed</span></td>
                        </tr>
                        <tr>
                            <td class="border p-2"><strong>NO Yellow Precipitate</strong></td>
                            <td class="border p-2">
                                <ul class="text-sm mb-0">
                                    <li>Solution remains clear or slightly yellow (picric acid's own color)</li>
                                    <li>No sediment formation</li>
                                    <li>Possible faint turbidity (non-specific) but no yellow precipitate</li>
                                </ul>
                            </td>
                            <td class="border p-2"><strong>Gelatin ABSENT</strong><br><span class="text-xs">Pure milk — no adulteration</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <h5 class="font-semibold text-yellow-800">⚠️ Safety Precautions</h5>
                <ul class="text-sm text-yellow-700">
                    <li><strong>Mercuric nitrate:</strong> Highly TOXIC heavy metal salt. Handle with gloves. Avoid skin contact and inhalation. Dispose according to proper waste protocol.</li>
                    <li><strong>Picric acid:</strong> EXPLOSIVE when dry. Always handle in aqueous solution. Never allow to dry out completely. Avoid friction and shock.</li>
                    <li><strong>Acetic acid:</strong> Corrosive and pungent odor. Use in a well-ventilated area.</li>
                    <li><strong>Eye protection and lab coat mandatory.</strong></li>
                    <li><strong>Waste disposal:</strong> Collect heavy metal waste and picric acid waste in separate designated containers — NEVER dispose in municipal drain.</li>
                </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <h5 class="font-semibold text-blue-800">🔬 Advanced/Alternative Methods for Gelatin Detection</h5>
                
                <p class="text-sm text-blue-700 mt-2"><strong>1. Hydroxyproline Quantification (Chemical Method):</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Gelatin contains ~<strong>10% hydroxyproline</strong>; virtually absent in milk proteins</li>
                    <li>Sample is acid hydrolyzed to release amino acids</li>
                    <li>Reacted with <strong>Ehrlich's reagent (p-dimethylaminobenzaldehyde)</strong> — hydroxyproline produces <strong>red-purple color (λmax = 558 nm)</strong></li>
                    <li>Quantified by spectrophotometry</li>
                    <li><strong>Detection limit:</strong> ~0.01% gelatin in milk</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-3"><strong>2. ELISA (Enzyme-Linked Immunosorbent Assay):</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Uses anti-gelatin antibodies</li>
                    <li>Highly specific and sensitive — <strong>ppb (parts per billion) level detection</strong></li>
                    <li>Commercial ELISA kits are available</li>
                    <li>Quantitative results — exact gelatin concentration can be calculated</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-3"><strong>3. PCR-Based Detection (for source identification):</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Gelatin is animal-derived — trace DNA may be present</li>
                    <li><strong>Species-specific PCR</strong> can identify whether gelatin came from bovine/porcine/fish source</li>
                    <li>Important for Halal/Kosher compliance verification</li>
                </ul>
                
                <p class="text-sm text-blue-700 mt-3"><strong>4. FTIR Spectroscopy:</strong></p>
                <ul class="text-sm text-blue-700">
                    <li>Fourier Transform Infrared Spectroscopy</li>
                    <li>Identifies gelatin's characteristic absorption bands (in amide I, amide II, amide III regions)</li>
                    <li>Non-destructive, rapid method</li>
                    <li>Quantification possible with chemometric analysis</li>
                </ul>
            </div>

            <div class="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
                <h5 class="font-semibold text-gray-800">📋 Quality Control & Troubleshooting</h5>
                
                <p class="text-sm text-gray-700 mt-2"><strong>Common Issues & Solutions:</strong></p>
                <table class="w-full border-collapse border mt-2 text-xs">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="border p-2">Problem</th>
                            <th class="border p-2">Possible Cause</th>
                            <th class="border p-2">Solution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border p-2">Filtrate cloudy/turbid</td>
                            <td class="border p-2">Incomplete protein precipitation</td>
                            <td class="border p-2">Add more Stokes reagent; wait longer; re-filter</td>
                        </tr>
                        <tr>
                            <td class="border p-2">Faint yellow color but no precipitate</td>
                            <td class="border p-2">Very low gelatin concentration (&lt;0.1%)</td>
                            <td class="border p-2">Concentrate sample; use larger volume; wait longer (15-20 min)</td>
                        </tr>
                        <tr>
                            <td class="border p-2">Dark yellow solution without precipitate</td>
                            <td class="border p-2">Excess picric acid</td>
                            <td class="border p-2">Normal — this is picric acid's own color. No gelatin present.</td>
                        </tr>
                        <tr>
                            <td class="border p-2">White precipitate instead of yellow</td>
                            <td class="border p-2">Residual milk proteins not removed</td>
                            <td class="border p-2">Repeat filtration step; use fresh Stokes reagent</td>
                        </tr>
                    </tbody>
                </table>
                
                <p class="text-sm text-gray-700 mt-3"><strong>Controls for Validation:</strong></p>
                <ul class="text-sm text-gray-700">
                    <li><strong>Positive control:</strong> Add 0.5-1% food-grade gelatin to pure milk and test — a clear yellow precipitate should be obtained</li>
                    <li><strong>Negative control:</strong> Test pure fresh milk (confirmed gelatin-free) — no precipitate</li>
                    <li><strong>Reagent blank:</strong> Treat distilled water with Stokes reagent and add picric acid — no precipitate (reagent contamination check)</li>
                </ul>
            </div>

            <p class="text-xs mt-4 text-gray-600"><strong>References:</strong> Indian Standards IS:1479 (Part II) - Methods of Test for Dairy Industry; Food Analytical Methods, Vol 5 (2012); Journal of Food Science and Technology, Vol 48(6), 2011</p>
        </div>
    `
}
    ]
    }
}
