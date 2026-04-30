
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
                    <tr><td>Mixed Doodh</td><td>3.5%</td></tr>
                    <tr><td>Toned Milk</td><td>3.0%</td></tr>
                    <tr><td>Double Toned Milk</td><td>1.5%</td></tr>
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
    },
    en: {
        main_title: "Raw Milk Quality & Adulteration",
        main_description: "A guide to Platform Tests and detecting adulterants in milk.",
        back_to_categories: "Back to Categories",
        tabs: {
            platform: "Platform Tests",
            platform_desc: "Quick quality checks at milk reception.",
            preservatives: "Preservatives",
            preservatives_desc: "Detecting illegal preservatives.",
            adulterants: "Adulterants",
            adulterants_desc: "Detecting common adulterations."
        },
        intros: {
            platform: "Platform tests are rapid quality assessments performed at the milk reception dock to quickly judge if a batch of milk is acceptable. These tests are crucial for preventing low-quality or adulterated milk from being mixed with good quality supplies.",
            preservatives: "By law, no preservative of any type is permitted in milk. Preservatives are generally added to milk when chilling or transport facilities are inadequate. The common preservatives used are neutralizers, formalin, etc.",
            adulterants: "Adulterants are substances added to milk to increase its volume or solids-not-fat content to deceive quality tests. Common adulterants include sugar, starch, urea, and vegetable oil."
        },
        platformTests: [
            {
                title: "Organoleptic Test (Sensory Test)",
                content: `
                    <p>The lid of the can is opened as soon as the milk arrives on the dairy platform, and the milk is mixed up with a plunger to check for a pleasant or bad odour. The general appearance, color, consistency, temperature and flavor are next assessed.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <ul class="list-disc list-inside mt-1">
                        <li>Begin by shaking the milk can a little bit, then opening the lid and tasting it for any aroma or flavor that radiates from it.</li>
                        <li>Examine the visual appearance of the milk, including color, any foreign items on the surface, and the sanitary state of the milk can. The cleanliness of the can reveals how the milk was treated.</li>
                        <li>To check the temperature of the milk, press your hand on the milk can. The temperature of the milk can reveal when it was last milked.</li>
                    </ul>
                    <h4 class="font-semibold mt-2">Inference:</h4>
                    <p>The milk that is not having the required standards is rejected.</p>
                `
            },
            {
                title: "Clot On Boiling (COB) Test",
                content: `
                    <p>It is a simple and cheap test for definitive result based on heat stability of the milk.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <ul class="list-disc list-inside mt-1">
                        <li>In a test tube take 5ml of milk.</li>
                        <li>Place it a boiling water bath.</li>
                        <li>Remove it from the bath without shaking.</li>
                        <li>Note for any acidic smell or precipitated particles.</li>
                    </ul>
                    <h4 class="font-semibold mt-2">Inference:</h4>
                    <p>The acidity of milk that results in a positive test is usually greater than 0.22 percent (as lactic acid) or has abnormally high protein content, such as colostrum milk. Because such milk cannot withstand heat treatment during processing, it is not appropriate for distribution or processing as liquid milk.</p>
                `
            },
            {
                title: "Alcohol Test",
                content: `
                    <p>A simple and quick alcohol coagulation test is available. It's based on the fact that milk proteins have a low stability when exposed to alcohol. When milk has a high quantity of lactic acid, rennet, milk protein, or salt, as in mastitis, the test may fail.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <ul class="list-disc list-inside mt-1">
                        <li>In a test tube take 5ml of milk.</li>
                        <li>Add equal quantity of 68% Ethyl alcohol.</li>
                        <li>Mix the contents well by inverting the test tube.</li>
                        <li>Examine for formation of coagulation.</li>
                    </ul>
                    <h4 class="font-semibold mt-2">Inference:</h4>
                    <p>If any coagulation is formed, then fine particles of curd will be visible inside the test tube. This denotes positive alcohol test and such milk is rejected.</p>
                `
            },
            {
                title: "Total Solids (TS) and Solid-Not-Fat (SNF) Test with Lactometer",
                content: `
                    <p><strong>Principle:</strong> This test uses a lactometer to measure the specific gravity of milk, which is then used with the fat percentage in Richmond's formula to estimate the SNF and TS.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <ul class="list-disc list-inside mt-1">
                        <li>Determine the fat percentage of the milk using the Gerber method.</li>
                        <li>Warm the milk sample to 40°C and then cool it to 27°C.</li>
                        <li>Pour the milk into a lactometer jar and gently insert an ISI-marked lactometer.</li>
                        <li>Record the lactometer reading (LR) at the top of the meniscus.</li>
                        <li>Apply temperature and fat corrections to get the Corrected Lactometer Reading (CLR).</li>
                    </ul>
                    <h4 class="font-semibold mt-2">Calculation:</h4>
                    <pre><code>SNF (%) = (CLR / 4) + (0.25 * Fat %) + 0.72 (for cow milk)</code></pre>
                    <pre><code>Total Solids (TS %) = Fat % + SNF %</code></pre>
                    <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                `
            },
            {
                title: "Freezing Point Test",
                content: `
                    <p><strong>Principle:</strong> The freezing point of milk is one of its most constant properties (-0.512 to -0.575 °C). Adding water to milk raises the freezing point closer to 0°C, the freezing point of water.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <p>This test is performed using a specialized instrument called a Cryoscope. The instrument supercools the milk sample and then induces crystallization, accurately measuring the temperature at which it freezes.</p>
                    <h4 class="font-semibold mt-2">Inference:</h4>
                    <p>A freezing point higher than the standard range is a definitive indication of added water.</p>
                `
            },
            {
                title: "Sedimentation Test",
                content: `
                    <p><strong>Principle:</strong> This test measures the amount of visible dirt and extraneous matter in milk.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <ul class="list-disc list-inside mt-1">
                        <li>A known volume of milk (e.g., 500 ml) is filtered through a special sediment test disc.</li>
                        <li>The disc is then dried and compared with standard sediment discs to grade the milk.</li>
                    </ul>
                    <h4 class="font-semibold mt-2">Inference:</h4>
                    <p>A high amount of sediment indicates poor hygiene and udder health during milking.</p>
                `
            },
            {
                title: "Resazurin Test",
                content: `
                    <p><strong>Principle:</strong> Resazurin is a redox dye that changes color based on the metabolic activity of bacteria in the milk. It provides a quick estimate of the microbiological quality.</p>
                    <h4 class="font-semibold mt-2">Procedure:</h4>
                    <p>A standard solution of resazurin is added to a milk sample, which is then incubated. The color change from blue to pink to white is observed over time.</p>
                    <h4 class="font-semibold mt-2">Inference:</h4>
                    <p>A rapid color change indicates a high bacterial load and poor quality milk.</p>
                `
            }
        ],
        preservatives: [
            {
                title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
                content: `
                    <div class="prose max-w-none prose-blue">
                        <h4>Method 1: Rosalic Acid Test</h4>
                        <p><strong>Principle:</strong> Rosolic acid is an indicator which gives a red colour in alkaline condition.</p>
                        <ol>
                            <li>Take 10 ml of milk in a test tube and add an equal volume of ethyl alcohol (95%).</li>
                            <li>Add a few drops of 0.1% rosolic acid solution and mix.</li>
                            <li>Appearance of a <strong>rose-red colour</strong> indicates the presence of neutralizers, whereas pure milk turns brownish.</li>
                        </ol>
                        <h4 class="mt-4">Method 2: Alkalinity of Ash Test</h4>
                        <p><strong>Principle:</strong> If a neutralizer has been added, the ash of the milk will have a higher alkalinity compared to pure milk.</p>
                        <ol>
                            <li>Take 20 ml of milk in a silica crucible.</li>
                            <li>Evaporate the water and ash the contents in a muffle furnace at 550°C.</li>
                            <li>Dissolve the ash in 10 ml of distilled water and titrate it against 0.1 N HCl.</li>
                            <li>A titre value of more than 1.2 ml of 0.1 N HCl indicates the presence of neutralizers.</li>
                        </ol>
                        <h4 class="mt-4">Method 3: Determination of true lactic acid/lactate content</h4>
                        <p><strong>Principle:</strong> The true lactic acid/lactate content is determined spectrophotometrically. The principle involves removing interfering substances, oxidizing lactic acid to acetaldehyde, which then forms a purple color with p-hydroxydiphenyl. A disturbed relationship between lactic acid content and titratable acidity indicates neutralization.</p>
                        <ol>
                            <li>Prepare a protein-free filtrate of the milk sample using copper sulfate and calcium hydroxide.</li>
                            <li>The filtrate is treated with sulfuric acid and copper sulfate to oxidize lactic acid.</li>
                            <li>p-Hydroxydiphenyl reagent is added, and after incubation, a purple color develops.</li>
                            <li>The intensity of the color is measured at 570 nm and compared against a standard curve.</li>
                            <li>If the milk has normal or low titratable acidity but a lactic acid content higher than 30 mg/100 ml, neutralization is suspected.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960), BIS (1981)</p>
                    </div>
                `
            },
             {
                title: 'Boric Acid and Borates',
                content: `
                    <div class="prose max-w-none prose-blue">
                        <p><strong>Principle:</strong> Boric acid and its salts give a red colour with turmeric paper.</p>
                        <ol>
                            <li>Take 5 ml of milk in a test tube and add 1 ml concentrated HCl.</li>
                            <li>Mix well, then dip a strip of turmeric paper.</li>
                            <li>Dry the paper strip and observe the color change.</li>
                            <li>A <strong>red colour</strong> on the paper indicates the presence of boric acid.</li>
                            <li>Then add a drop of ammonium hydroxide solution.</li>
                            <li>A change from red to <strong>deep-green</strong> confirms the presence of boric acid.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Formalin (Formaldehyde)',
                content: `
                    <div class="prose max-w-none prose-blue">
                        <h4>Method 1: Leach Test</h4>
                        <p><strong>Principle:</strong> Formaldehyde gives a violet colour with ferric salts in the presence of concentrated sulfuric acid.</p>
                        <ol>
                            <li>Take about 5 ml of milk in a test tube.</li>
                            <li>Add to it equal volume of detecting reagent (Conc. HCl + 10% FeCl3 solution).</li>
                            <li>Keep the tube in boiling water bath for about 3-4 min.</li>
                            <li>Appearance of a <strong>brownish pink colour</strong> confirms the presence of formalin in the sample, whereas; control sample will remain white.</li>
                        </ol>
                        <h4 class="mt-4">Method 2: Chromotropic Acid Test</h4>
                         <p><strong>Principle:</strong> Formaldehyde reacts with chromotropic acid to form a colored compound.</p>
                        <ol>
                            <li>Take 1 ml of milk in a test tube.</li>
                            <li>Add 1 ml of chromotropic acid reagent and mix well.</li>
                            <li>Appearance of a <strong>yellow color</strong> confirms the presence of formalin, whereas the control sample remains white.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                    </div>
                `
            },
             {
                title: 'Hydrogen Peroxide (H₂O₂)',
                content: `
                    <div class="prose max-w-none prose-blue">
                        <h4>Method 1: Para-phenylenediamine Test</h4>
                        <p><strong>Principle:</strong> Hydrogen peroxide oxidizes para-phenylenediamine, changing its colour from yellow to blue.</p>
                        <ol>
                            <li>Take 2 ml of milk in a test tube and add an equal volume of raw milk.</li>
                            <li>Add 2 drops of 2% para-phenylenediamine solution and shake well.</li>
                            <li>Appearance of a <strong>blue colour</strong> confirms the presence of hydrogen peroxide.</li>
                        </ol>
                        
                        <h4 class="mt-4">Method 2: Potassium Iodide & Starch Test</h4>
                         <p><strong>Principle:</strong> H₂O₂ oxidizes potassium iodide (KI) to iodine (I₂), which then reacts with starch to form a blue complex.</p>
                        <ol>
                            <li>Take 1 ml of milk and add 1 ml of potassium iodide-starch reagent.</li>
                            <li>Appearance of a <strong>blue color</strong> indicates the presence of H₂O₂.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Salicylic Acid & Benzoic Acid',
                content: `
                     <div class="prose max-w-none prose-blue">
                        <p><strong>Principle:</strong> These acids are extracted with ether and then react with ferric chloride to produce characteristic colors.</p>
                        <ol>
                            <li>Acidify 10 ml of milk with HCl and extract with ethyl ether.</li>
                            <li>Evaporate the ether. Dissolve the residue in water.</li>
                            <li>Add a few drops of 0.5% neutral ferric chloride solution.</li>
                            <li><strong>Salicylic Acid:</strong> A violet color indicates its presence.</li>
                            <li><strong>Benzoic Acid:</strong> A salmon-colored precipitate indicates its presence.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Hypochlorites & Chloramines',
                content: `
                    <div class="prose max-w-none prose-blue">
                        <p><strong>Principle:</strong> These strong oxidizing agents can be detected by their reaction with potassium iodide and starch.</p>
                        <ol>
                            <li>Add 5 ml of milk to a test tube.</li>
                            <li>Add 1.5 ml of 7% potassium iodide solution and mix.</li>
                            <li>Add 4 ml of dilute HCl and mix.</li>
                            <li>In the presence of hypochlorite, a <strong>yellowish-brown to deep mauve color</strong> develops.</li>
                        </ol>
                    </div>
                `
            }
        ],
        adulterants: [
            {
                title: 'Cane Sugar',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Method 1: Using Seliwanoff’s Reagent</h4>
                        <p><strong>Principle:</strong> Fructose in cane sugar reacts with resorcinol in HCl to give red colour.</p>
                        <ol>
                            <li>Take 1 ml of milk and add 1 ml of Seliwanoff's reagent (resorcinol in HCl).</li>
                            <li>Heat in a boiling water bath for 5 minutes.</li>
                            <li>A <strong>red colour</strong> indicates the presence of sucrose. Pure milk remains white.</li>
                        </ol>

                        <h4 class="mt-4">Method 2: Resorcinol Test</h4>
                        <ol>
                            <li>Take about 5 ml of milk in a test tube.</li>
                            <li>Add 1 ml of concentrated HCl.</li>
                            <li>Add 0.1 g of resorcinol and mix.</li>
                            <li>Place the tube in boiling water bath for 5 min.</li>
                            <li>A <strong>red colour</strong> indicates the presence of sucrose.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                    </div>
                `
            },
            {
                title: 'Starch & Other Cereal Flours',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Method 1: Using Iodine (Without heated milk sample)</h4>
                        <ol>
                            <li>Take 1 ml milk in a test tube.</li>
                            <li>Add 2 drops of iodine solution.</li>
                            <li>Appearance of a <strong>blue colour</strong> indicates the presence of starch.</li>
                        </ol>

                        <h4 class="mt-4">Method 2: Using Iodine (With boiled milk sample)</h4>
                        <p><strong>Principle:</strong> Starch forms a purple-blue complex with iodine.</p>
                        <ol>
                            <li>Boil 3-5 ml of milk and cool to room temperature.</li>
                            <li>Add 1-2 drops of iodine solution. A <strong>blue colour</strong> indicates the presence of starch, which disappears on boiling and reappears on cooling.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
                    </div>
                `
            },
            {
                title: 'Cellulose',
                content: `
                    <div class="prose max-w-none prose-green">
                        <p><strong>Principle:</strong> Cellulose is insoluble. It can be detected by its reaction with iodinated zinc chloride.</p>
                        <ol>
                            <li>Take 10 ml of milk and add 10-15 drops of concentrated nitric acid.</li>
                            <li>Filter the coagulated mass and wash with water.</li>
                            <li>Boil the residue with 1-2 ml of iodinated zinc chloride reagent.</li>
                            <li>Appearance of a <strong>blue or violet color</strong> indicates the presence of cellulose.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Urea',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Method 1: DMAB & TCA Method</h4>
                        <p><strong>Principle:</strong> Urea forms a yellow complex with p-dimethylaminobenzaldehyde (DMAB) in a slightly acidic solution.</p>
                         <ol>
                            <li>Take equal quantity of milk and 24% TCA in a test tube, mix and filter.</li>
                            <li>Take 3 ml of filtrate in another test tube.</li>
                            <li>Add 3 ml of 1.6% DMAB reagent.</li>
                            <li>A <strong>distinct yellow colour</strong> indicates added urea.</li>
                        </ol>
                        <h4 class="mt-4">Method 2: DMAB Reagent Method</h4>
                        <ol>
                            <li>Take 1 ml of milk in a test tube.</li>
                            <li>Add 1 ml of 1.6% DMAB reagent.</li>
                            <li>A <strong>distinct yellow colour</strong> indicates added urea.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960), FSSAI 2006 (limit: 70 mg/100 ml)</p>
                    </div>
                `
            },
            {
                title: 'Glucose',
                content: `
                    <div class="prose max-w-none prose-green">
                        <p><strong>Principle:</strong> Using a modified Barfoed's test, glucose reduces cupric ions to cuprous, which then reduces phosphomolybdic acid to form a blue compound.</p>
                        <ol>
                            <li>Take 1 ml of milk, add 1 ml of modified Barfoed’s reagent.</li>
                            <li>Heat in a boiling water bath for 3 min, then cool.</li>
                            <li>Add 1 ml of phosphomolybdic acid reagent.</li>
                            <li>Immediate formation of a <strong>deep blue color</strong> indicates added glucose.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Maltodextrin',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Method 1: Using Iodine Reagent</h4>
                        <ol>
                           <li>Take 5 ml of milk sample in a test tube.</li>
                           <li>Add 2 ml of iodine solution (0.05 N) and mix.</li>
                           <li>Appearance of a <strong>chocolate-like red-brown color</strong> indicates the presence of dextrin/maltodextrin.</li>
                        </ol>
                        <h4 class="mt-4">Method 2: Using Citric Acid and Iodine Reagents</h4>
                        <ol>
                           <li>Boil 20 ml milk, cool to 70°C and add 0.5 ml of 10% citric acid to coagulate.</li>
                           <li>Filter the coagulated milk.</li>
                           <li>To 2 ml of the filtrate, add 3 drops of iodine solution.</li>
                           <li>An <strong>orange-brown shade</strong> indicates the presence of maltodextrin.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Detergent',
                content: `
                    <div class="prose max-w-none prose-red">
                        <p><strong>Principle:</strong> Anionic detergents form a complex with the cationic dye methylene blue. This complex is soluble in chloroform.</p>
                        <ol>
                            <li>Take 1 ml of milk, add 1 ml of methylene blue solution and then 2 ml of chloroform.</li>
                            <li>Vortex for 15 seconds and then centrifuge at 1100 rpm for 3 minutes.</li>
                            <li>A more <strong>intense blue colour in the lower (chloroform) layer</strong> indicates the presence of detergent. If the upper layer is more intense, the detergent is absent.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Ammonium Compounds (Sulphates)',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Method 1: Nessler’s Reagent Method</h4>
                         <ol>
                            <li>Take 5 ml of milk sample into a test tube.</li>
                            <li>Add 1 ml of Nessler’s reagent.</li>
                            <li>Appearance of <strong>yellowish or grey colour</strong> confirms the presence of added ammonium salts.</li>
                        </ol>
                        <h4 class="mt-4">Method 2: Turmeric Paper Method</h4>
                        <p><strong>Principle:</strong> Ammonium salts release ammonia in alkaline conditions, which turns wet turmeric paper red.</p>
                        <ol>
                            <li>Take 5 ml of milk and add 1 ml of 10% NaOH.</li>
                            <li>Place a wet turmeric paper on the rim of the test tube.</li>
                            <li>Appearance of <strong>pinkish red colour</strong> on the paper confirms the presence of ammonium salt.</li>
                        </ol>
                         <h4 class="mt-4">Method 3: Sulfate Detection (with BaCl₂)</h4>
                        <p><strong>Principle:</strong> Sulphates precipitate with Barium Chloride (BaCl₂).</p>
                        <ol>
                            <li>Take 10 ml of milk and add 10 ml of Trichloroacetic acid (TCA) to coagulate it.</li>
                            <li>Filter the milk and take 5 ml of the clear filtrate.</li>
                            <li>Add a few drops of 5% BaCl₂ solution.</li>
                            <li>Formation of a <strong>milky-white precipitate</strong> indicates the presence of added sulphates (like ammonium sulphate).</li>
                        </ol>
                    </div>
                `
            },
             {
                title: 'Common Salt (NaCl)',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Silver Nitrate Test</h4>
                         <p><strong>Principle:</strong> Added salt reacts with silver nitrate. Potassium chromate acts as an indicator.</p>
                        <ol>
                            <li>Take 5 ml of milk in a test tube.</li>
                            <li>Add 1 ml of 0.1 N silver nitrate solution.</li>
                            <li> Mix and add 0.5 ml of 10% potassium chromate solution.</li>
                            <li>Appearance of a <strong>yellow colour</strong> indicates added salt, whereas pure milk gives a brick red color.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Vegetable/Refined Oil (Foreign Fat)',
                content: `
                    <div class="prose max-w-none prose-green">
                         <h4>Butyro-Refractometer (BR) Reading Method</h4>
                         <p><strong>Principle:</strong> Most vegetable oils have a higher refractive index than pure milk fat (ghee).</p>
                        <ol>
                            <li>Isolate fat from the milk sample using a modified Gerber butyrometer.</li>
                            <li>Take the BR reading of the extracted fat at 40°C.</li>
                            <li>Pure milk fat has a BR reading of 40-43. Any reading higher than 45 suggests the presence of foreign fat.</li>
                        </ol>
                        <h4 class="mt-4">Baudouin Test for Vanaspati</h4>
                        <p><strong>Principle:</strong> Vanaspati is required to contain 5% sesame oil. The sesamol from this oil reacts with furfural to give a red color.</p>
                        <ol>
                            <li>Extract ghee from the milk sample.</li>
                            <li>Take 5g of melted fat, add 5ml concentrated HCl and 0.4ml of 2% furfural solution. Vortex for 2 minutes.</li>
                            <li>A <strong>pink or red color</strong> in the acid layer indicates vanaspati adulteration.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> IS 3508 – 1966</p>
                    </div>
                `
            },
            {
                title: 'Mineral Oil',
                content: `
                    <div class="prose max-w-none prose-green">
                         <h4>Holde's Test</h4>
                         <p><strong>Principle:</strong> Mineral oils are non-saponifiable, meaning they do not form soap with alkali, unlike edible fats.</p>
                        <ol>
                            <li>Saponify 1g of fat with 25ml of 4% alcoholic KOH.</li>
                            <li>Add 100ml of hot water.</li>
                            <li>The appearance of <strong>turbidity</strong> indicates the presence of mineral oil.</li>
                        </ol>
                    </div>
                `
            },
             {
                title: 'Animal Body Fat (e.g., Lard)',
                content: `
                    <div class="prose max-w-none prose-green">
                         <h4>Opacity Test</h4>
                         <p><strong>Principle:</strong> Different fats solidify and become opaque at different rates and temperatures.</p>
                        <ol>
                            <li>Melt 5g of ghee at 50°C.</li>
                            <li>Transfer to a water bath at 23°C and record the time it takes for the sample to become opaque.</li>
                            <li><strong>Result:</strong> Buffalo ghee takes 14-15 min, cow ghee 18-19 min. A shorter time suggests animal body fat adulteration, while a longer time suggests vegetable oil.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Pond Water (Nitrates)',
                content: `
                    <div class="prose max-w-none prose-green">
                        <p><strong>Principle:</strong> This method detects nitrates/nitrites present in pond water from agricultural fertilizers.</p>
                        <ol>
                            <li>Rinse a test tube with the milk sample and drain.</li>
                            <li>Add 2-3 drops of 2% diphenylamine solution along the side of the test tube.</li>
                            <li>If the sides of the test tube turn <strong>blue</strong>, the milk contains pond water.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Skimmed Milk Powder (SMP) in Natural Milk',
                content: `
                    <div class="prose max-w-none prose-green">
                        <p><strong>Purpose:</strong> To illegally increase the SNF content of natural milk.</p>
                        <p><strong>Principle:</strong> The proteins in reconstituted milk powder contain reducing groups that react with phosphomolybdic acid on boiling to give a blue colour.</p>
                        <ol>
                            <li>Centrifuge 50 ml of milk to separate the cream.</li>
                            <li>Coagulate the skim milk portion with acetic acid.</li>
                            <li>Wash the precipitate, then add 2 ml of 1% phosphomolybdic acid and boil for 15 minutes.</li>
                            <li>The curd from pure milk will be greenish, whereas the curd from a sample containing SMP will be <strong>bluish</strong>.</li>
                        </ol>
                        <p class="text-xs"><strong>Ref:</strong> Journal of Food Science and Technology, Vol 22 (1985)</p>
                    </div>
                `
            },
             {
                title: 'Soymilk in Milk',
                content: `
                    <div class="prose max-w-none prose-green">
                        <p>Soymilk is sometimes added to illegally increase the protein content and SNF reading of milk. Several methods exist for its detection.</p>
                        <h4 class="mt-4">Method I: Polarimeteric method</h4>
                        <p>Based on the different optical rotation of sugars. Soymilk contains sucrose, raffinose, and stachyose, while bovine milk contains lactose. A significant change in the optical rotation of a protein-free filtrate can indicate soymilk addition.</p>
                        <h4 class="mt-4">Method II: Isoelectric precipitation method</h4>
                        <p>Soy proteins precipitate at a higher pH (~5.7) than milk casein (pH 4.6). By adjusting the milk pH to 5.7 and heating, coagulation will occur if soymilk is present.</p>
                         <h4 class="mt-4">Method III: SDS-PAGE method</h4>
                        <p>This electrophoretic technique separates proteins based on molecular weight. Soy proteins have different molecular weights than milk proteins and will show up as distinct, extra bands on the gel, confirming adulteration.</p>
                        <h4 class="mt-4">Method IV: Immunodiffusion method</h4>
                        <p>Uses antibodies specific to soy proteins. If soy protein is present in the milk, it will react with the antibody to form a visible precipitation line in an agar gel.</p>
                        <h4 class="mt-4">Method V: HPLC based method</h4>
                        <p>High-Performance Liquid Chromatography can separate and quantify the different sugars. The presence of stachyose, a sugar found in soybeans but not milk, is a definitive marker for soymilk adulteration.</p>
                        <h4 class="mt-4">Method VI: Rapid method (Trypsin Inhibition)</h4>
                        <p>Soymilk contains trypsin inhibitors. This test measures the activity of the enzyme trypsin. If soymilk is present, the trypsin will be inhibited, leading to a reduced color change in a specific chemical reaction compared to a pure milk sample.</p>
                    </div>
                `
            },
             {
                title: 'Cheese Whey in Milk',
                content: `
                    <div class="prose max-w-none prose-green">
                        <h4>Ninhydrin based spectrophotometric method</h4>
                        <p><strong>Principle:</strong> When rennet is used to make cheese, it cleaves a specific part of kappa-casein called glycomacropeptide (GMP), which goes into the whey. This GMP contains sialic acid. The test selectively precipitates GMP from the milk sample and then measures the sialic acid content. A high level of sialic acid indicates the presence of added cheese whey.</p>
                        <ol>
                            <li>Glycomacropeptide (GMP) is selectively precipitated from the milk sample using Trichloroacetic acid (TCA).</li>
                            <li>The precipitate is then treated with an acidic ninhydrin reagent and heated.</li>
                            <li>The sialic acid bound to the GMP produces a stable yellow-brown color, which is measured with a spectrophotometer at 470 nm.</li>
                            <li>An absorbance value significantly higher than that of pure milk indicates adulteration with cheese whey.</li>
                        </ol>
                    </div>
                `
            },
            {
                title: 'Gelatine',
                content: `
                    <div class="prose max-w-none prose-green">
                        <p><strong>Purpose:</strong> To increase the thickness and SNF content of milk.</p>
                        <p><strong>Principle:</strong> Gelatine forms a yellow precipitate with picric acid.</p>
                        <ol>
                            <li>Take 10 ml of milk and add 20 ml of Stokes reagent (acid mercuric nitrate).</li>
                            <li>Shake well and filter.</li>
                            <li>To the filtrate, add an equal volume of saturated picric acid solution.</li>
                            <li>A <strong>yellow precipitate</strong> indicates the presence of gelatine.</li>
                        </ol>
                    </div>
                `
            }
        ]
    }
}
