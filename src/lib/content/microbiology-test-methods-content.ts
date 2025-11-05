
export const microbiologyTestMethodsContent = {
    hi: {
        title: "Common Microbiological Test Methods",
        intro:
          "Dairy products ki safety aur quality ensure karne ke liye kai standard microbiological tests kiye jaate hain. Yahaan kuch important test methods ka overview diya gaya hai:",
        tests: [
          {
            id: "spc",
            title: "Standard Plate Count (SPC) of Milk",
            principle:
              "Classical roop se SPC procedures ka upyog Total Plate Count (TPC) ya Aerobic Plate Count (APC) ya Total Viable Count (TVC) nirdharit karne ke liye kiya jaata hai. SPC ek standard method hai jisse anya screening tests ki tulna ki jaati hai.",
            procedure: `
              <h4 class="font-semibold mt-4 mb-2">Diluent-Phosphate Buffer Solution taiyaar karna</h4>
              <p><strong>Stock Solution:</strong></p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Potassium dihydrogen phosphate: 42.5g</li>
                <li>Distilled Water: 1000ml</li>
              </ul>
              <p>Salt ko 500ml distilled water mein gholen. 1N NaOH ya HCl solution ka upyog karke pH ko adjust karein taaki sterilization ke baad yeh 25°C par 7.2 ho. 1000ml tak dilute karein. Screw capped sample bottles mein distribute karein. Unhein 121°C par 15 minute ke liye sterilize karein. Stock solution ko refrigeration ke tehat store karein.</p>
              <p><strong>Bench Solution:</strong> 1ml stock solution ko 1000ml paani mein milakar diluent ke roop mein upyog karein. 9 ml diluent ko test tube mein daalein. Tubes ko band karein aur 121°C par 15 minute ke liye autoclave karke sterilize karein.</p>
              
              <h4 class="font-semibold mt-4 mb-2">Medium taiyaar karna:</h4>
              <p>Plate Count Agar ya Standard Method Agar ka upyog kiya jaata hai. Samagri ko distilled water mein gholkar medium taiyaar karein. Medium ka pH adjust karein, taaki yeh sterilization ke baad 25°C par 7.0 ± 0.2 ho.</p>

              <h4 class="font-semibold mt-4 mb-2">Test samples ki taiyari:</h4>
              <p>Raw milk ya pasteurized milk ke sample ko 25 baar tezi se ulta karke acchi tarah se hilayein taaki microorganisms samaan roop se distribute ho jaayein.</p>

              <h4 class="font-semibold mt-4 mb-2">Decimal dilutions ki taiyari:</h4>
              <p>Ek pipette se 1ml test sample nikalein aur 9ml diluent mein daalein. Is primary dilution ko 5 se 10 second ke liye ek mechanical shaker ka upyog karke hilayein. Pratyek dilution ke liye ek taaza pipette ka upyog karke 10⁻², 10⁻³, aadi jaise aur dilutions taiyaar karein.</p>

              <h4 class="font-semibold mt-4 mb-2">Inoculation aur Incubation:</h4>
              <p>Pratyek upyukt dilution se 1ml ko do sterile Petri dish mein sthanaantarit karein. Pratyek Petri dish mein lagbhag 15ml plate-count medium (45°C par) daalein. Dhyaan se inoculum ko medium ke saath milayein aur mishran ko jamne dein. Poori tarah se jamne ke baad, taiyaar dish ko ulta karein aur 37°C par 48h ± 3h ke liye incubator mein incubate karein.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation aur Results ka Expression:</h4>
              <p>Un dishes ko banaye rakhein jinmein 15 aur 300 ke beech colonies hon. Nimnalikhit equation ka upyog karke test sample mein maujood microorganisms ki sankhya N ki ganana karein:</p>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Jahan ΣC = sabhi dishes par gini gayi colonies ka yog, n1 = pehle dilution mein dishes ki sankhya, n2 = doosre dilution mein dishes ki sankhya, d = pehle dilution ke anuroop dilution factor.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>Pasteurized milk ke prati milliliter 35000 se adhik ki ginti asantoshjanak sthitiyon ko ingit karti hai. Raw milk ki grading ke liye nimnalikhit maanakon ka sujhaav diya gaya hai:</p>
              <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Bahut Accha:</strong> 2,00,000 se adhik nahin</li>
                <li><strong>Accha:</strong> 2,00,000 - 10,00,000</li>
                <li><strong>Santoshjanak:</strong> 10,00,000 - 50,00,000</li>
                <li><strong>Kharaab:</strong> 50,00,000 se adhik</li>
              </ul>
            `,
      },
      {
        id: "coliform",
        title: "Coliform Count",
        principle:
          "Coliform group ke bacteria mein sabhi aerobic aur facultative anaerobic, gram-negative, non-spore forming rods shaamil hain jo 30°C, 35°C ya 37°C par 48 ghanton ke bheetar acid aur gas ke utpaadan ke saath lactose ko ferment karne mein saksham hain. Dairy products mein in coliforms ki upasthiti production, processing ya storage ke dauran unsanitary conditions ya practices ka soochak hai.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">Medium ki taiyari:</h4>
              <p>Violet Red Bile Agar (VRBA) medium ka upyog kiya jaata hai. Ingredients ko distilled water mein gholkar medium taiyaar karein. Ubaal lein. Adhik garam karne se bachein. Is medium ko autoclave na karein.</p>
              <h4 class="font-semibold mt-4 mb-2">Inoculation aur Incubation:</h4>
              <p>Pratyek upyukt dilution se 1ml ko do sterile Petri dish mein transfer karein. Pratyek Petri dish mein lagbhag 15ml VRBA medium daalein, milayein aur jamne dein. Poori tarah se jamne ke baad, satah par lagbhag 4 ml VRBA medium daalein. Unhein 37°C par 24h ± 2h ke liye incubate karein. 150 se adhik colonies waali dish ko na rakhein. Coliform ki vishisht colonies gehre ya baingani laal rang ki hoti hain jinka diameter 0.5 mm ya usse adhik hota hai aur kabhi-kabhi pitta ke avakshepit laal rang ke kshetra se ghiri hoti hain.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation aur Result ka Expression:</h4>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Jahan ΣC = sabhi dishes par gini gayi vishisht colonies ka yog, n1 = pehle dilution mein dishes ki sankhya, n2 = doosre dilution mein dishes ki sankhya, d = pehle dilution ke anuroop dilution factor.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>Raw milk ke mamle mein 1/100 dilution (0.01 ml) aur pasteurized milk ke mamle mein 1/10 dilution (0.1 ml) mein coliform bacteria ki anupasthiti ko santoshjanak gunvatta ka maapdan maana jaata hai.</p>
            `,
      },
      {
        id: "dmscc",
        title: "Direct Microscopic Somatic Cell Count (DMSCC)",
        principle:
          "Raw milk mein somatic cells ki sankhya mastitis ya kuch anya abnormal milk secretion ki upasthiti aur seema ka ek maap pradan karti hai. DMSCC ko somatic cell count ki pushti ke liye aadhikaarik roop se maanyata praapt prakriyaon mein se ek ke roop mein laagu kiya jaata hai.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">Single Strip Factor (SSF) ka anumaan:</h4>
              <p>Ek saaf stage micrometer ko microscope ke stage par rakhein. Microscopic kshetra ke vyaas (d) ko mm mein nirdhaarit karein. SSF ki ganana karein: <code>SSF = 10000 / (single strip ka area)</code></p>
              <h4 class="font-semibold mt-4 mb-2">Doodh film ki taiyari:</h4>
              <p>Doodh ke sample ko 40°C tak garam karein. Acchi tarah se hilayein. Ek pipette ya calibrated loop ka upyog karke 0.01ml doodh nikalen. Doodh ko slide ke 1cm² kshetra par samaan roop se failayein. 40 se 45°C par 5 minute ke bheetar filmon ko sukhayein.</p>
              <h4 class="font-semibold mt-4 mb-2">Smear ko defatting, fixing aur staining:</h4>
              <p>Slideon ko das minute ke liye Newman's stain waale jar mein duboyein. Atirikt stain nikaal dein aur slideon ko acchi tarah se sookhne dein. Slides ko paani mein tab tak dhoyein jab tak ki saara atirikt dye dhul na jaaye. Microscope ke tehat film ki jaanch karne se pehle naali aur hawa mein sukhayein.</p>
              <h4 class="font-semibold mt-4 mb-2">Stained filmon ki pariksha aur ginti:</h4>
              <p>Oil immersion objective ke saath pratyek film ki jaanch karein. Keval un somatic cells ko ginen jinmein ek pehchaan yogya stained nucleus ho. Ek single strip count karne ke liye, doodh film ke poore diameter ko paar karein, strip ke bheetar sabhi koshikaon aur patti ke ek kinaare ko chhoone waali koshikaon ki ginti karein.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation aur Results ka Expression:</h4>
              <code>DMSCC per ml = Single strip mein somatic cells ki sankhya × SSF</code>
              <p>Result ko do mahatvapurna ankon tak round karein.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>Doodh ke prati milliliter 500,000 se adhik somatic cells ki upasthiti mastitis ka soochak hai.</p>
            `,
      },
      {
        id: "drug_residues",
        title: "Veterinary Drug Residues (Delvotest)",
        principle:
          "Delvotest ka upyog doodh mein dawa avasheshon ki upasthiti ka pata lagaane ke liye kiya jaata hai. Iska siddhant poshak tatvon aur doodh ke alawa agar mein embedded ek vishisht bacteria (Bacillus-stearothermophilus var. calidolactis) ke spores ke germination aur growth par aadhaarit hai. Yadi doodh inhibitory substances se mukt hai, to in spores ki growth se acid ka utpaadan hota hai, jo agar ka rang baingani se peele mein badal deta hai. Haalaanki, yadi doodh mein kuch inhibitory substances hote hain, to ye agar medium mein fail jaayenge aur bacteria ke vikas aur baad mein acid utpaadan ko rok denge aur medium baingani rang ka bana rahega.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Pratyek kit ke saath diye gaye manufacturer ke protocol ka paalan karein. Yadi medium ka rang peele rang mein badal jaata hai to antibiotic dawaon ke liye result ko negative ke roop mein report karein aur yadi nirdisht incubation avadhi ke baad rang baingani bana rehta hai to antibiotic dawaon ki upasthiti ke liye positive. Delvotest jhoothi positive pratikriya de sakta hai, yadi doodh mein neutralizer, formalin aur hydrogen peroxide milaaya gaya ho.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>0.1 milliliter doodh ka sample daalne ke baad, ampoule ko 63°C se 66°C par 2.5 ghante ke liye incubate kiya jaata hai. Antimicrobial padarthon ki anupasthiti mein, poore thos medium ka rang peela ho jaata hai (negative), jabki antibiotic dawaon ke paryaapt uchh saandrata ki upasthiti mein yah baingani bana rehta hai. Sandigdh parinaamon ke maamle mein, medium thoda peela ho jaata hai.</p>
            `,
      },
      {
        id: "yeast_mould",
        title: "Yeast and Mould Count",
        principle:
          "Yeasts and moulds amliy vatavaran mein vikas kar sakte hain, isliye unki ganana ke liye ek amliy madhyam (jaise Potato Dextrose Agar, PDA) ka upyog kiya jaata hai.",
        procedure: `
               <ol class='list-decimal list-inside space-y-2 mt-2'>
                <li><strong>Sample & Dilutions:</strong> TPC method ki tarah serial dilutions taiyaar karein.</li>
                <li><strong>Plating:</strong> Pratyek dilution se 1ml ko sterile Petri plates mein transfer karein (Spread Plate method behtar hai).</li>
                <li><strong>Media:</strong> Plates mein pehle se daala gaya Potato Dextrose Agar (PDA) hona chahiye, jiska pH ~3.5 (tartaric acid ke saath) adjust kiya gaya ho taaki bacterial growth ko roka ja sake.</li>
                <li><strong>Incubation:</strong> Plates ko 22-25°C par 5 dino ke liye incubate karein.</li>
                <li><strong>Counting:</strong> Yeasts (aam taur par chamakdar, gol) aur moulds (rui jaisa, failne wala) ki colonies ko alag-alag ginen.</li>
              </ol>`,
        calculation:
          "<code>Yeast/Mould Count/g (ya ml) = Average no. of colonies × Dilution factor</code>",
      },
      {
        id: "media_prep",
        title: "Media ki Taiyari",
        principle: `Bacteriological laboratory mein vibhinn culture media (liquid, semi-solid, aur solid) ka upyog microorganisms ke cultivation, unke vikas aur sharirik visheshtaon ka adhyayan karne aur viable organisms ki sankhya nirdharit karne ke liye kiya jaata hai.`,
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Media ki reaction (pH) ka samayojan.</h4>
                <p>Medium ka reaction (pH) microorganisms ke vikas ko prabhavit karne wale sabse mahatvapurna kaarakon mein se ek hai. Adhikansh bacteria prajatiyan tab acchi tarah se badhti hain jab reaction na to amliy ho aur na hi kshariy, yaani neutral (pH 7.0). Yeasts aur moulds ko unke vikas ke liye ek spasht amliy vatavaran (pH 4 se 5) ki avashyakta hoti hai. Culture media ki taiyari mein medium ke reaction (pH) ko avashyak star tak samayojit karna ek bahut hi mahatvapurna kadam hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Nutrient broth aur nutrient agar ki taiyari.</h4>
                <p>Nutrient broth ek liquid medium hai jiska upyog aam taur par aerobic organisms ke cultivation ke liye aur vibhinn sharirik parikshanon ke liye ek basal medium ke roop mein kiya jaata hai. Broth mein agar milane se ek thos medium (nutrient agar) milta hai jiska upyog kai bacterial prajatiyon ke cultivation aur viable bacterial numbers ke nirdharan ke liye kiya jaata hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Potato dextrose agar ki taiyari.</h4>
                <p>Potato dextrose agar ek selective medium hai jiska upyog yeasts aur molds ke cultivation ke liye kiya jaata hai. Aalu ke ras ka upyog yeasts aur molds ke vikas ko badhava deta hai, aur kam pH (3.5) bacterial vikas ko rokne mein madad karta hai jabki yeasts aur molds ke vikas ka samarthan karta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Mac Conkey's bile salt broth aur agar aur desoxycholate agar ki taiyari.</h4>
                <p>Yah ek selective medium hai jiska upyog coliform organisms ke cultivation ke liye kiya jaata hai. Medium mein sodium taurocholate (bile salt) ki upasthiti satah ke tanav ko kam karti hai jisse coliform bacteria ke vikas ka samarthan hota hai. Isliye yah doodh aur paani ke namoonon ke liye presumptive coliform test karne mein bahut mahatva rakhta hai.</p>
            `,
        calculation: "",
      },
      {
        id: "bacteriology_air",
        title: "Bacteriology of Air",
        principle:
          "Hawa microorganisms ke vikas aur prajanan ke liye ek prakritik vatavaran nahi hai lekin kuch prakar ke jeev (jaise aerobic spore formers, micrococci, mold spores) hawa mein suspend kiye gaye dhool kanon ke saath jude paaye ja sakte hain. Dairy, pashu shalaon aur food factories ke andar vayumandal mein maujood microorganisms ki sankhya aur prakaron ka gyan doodh, doodh utpaadon aur anya samagriyon ke contamination ko niyantrit karne ke liye bahut mahatvapurna hai.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Pighle hue nutrient agar ke saath do plate aur sabouraud agar ke saath do plate daalein. Media ko set aur kathor hone dein.</li>
                    <li>Plates se dhakkan hata dein.</li>
                    <li>Pratyek medium ki ek plate ko milking shed aadi ke farsh par rakhein aur unhein 5 minute ke liye expose hone dein. Turant dhakkan wapas laga dein.</li>
                    <li>Pratyek medium ki ek plate ko laboratory bench par rakhein, plates ko 15 minute ke liye expose hone dein aur turant dhakkan wapas laga dein.</li>
                    <li>Nutrient agar plates ko 37°C par 2 din aur sabouraud agar plates ko 22°C par 3 se 4 din ke liye incubate karein.</li>
                    <li>Incubation avadhi ke ant mein pratyek plate mein colonies ki sankhya ginen.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Prati c.ft. prati minute organisms ki sankhya santoshjanak vatavaran ke liye ek se adhik nahi honi chahiye.</p>
            `,
      },
      {
        id: "sterility_equipment",
        title: "Plant aur Equipment ki Sterility ka Aakalan",
        principle:
          "Storage tanks, vats, coolers, pipelines, heat exchangers, agitators fittings aadi sahit plant aur equipment ki sanitary sthiti ko swab technique lagu karke parikshit kiya jaata hai. Is vidhi mein ek sterile cotton ya wire-gauge swab (buffer solution se geela) ko equipment ki satah par ragada jaata hai aur satah se hataye gaye bacterial cells ko sterile buffer solution mein sthanantarit kiya jaata hai aur unki sankhya standard plate count dwara anumanit ki jaati hai.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Atirikt taral ko hatane ke liye swab ko glass tube ke kinare par ek rolling motion ke saath dabayein aur use tube se bahar nikalen.</li>
                    <li>Swab ko parikshit kiye jaane wale kshetra par bhari dabav ke saath aage aur peeche ragaden taaki satah ke sabhi hisson ka do baar upchar kiya ja sake.</li>
                    <li>Avashyak kshetra ko ragadne ke baad swab ko us ghol mein wapas laayein jismein ise mool roop se rakha gaya tha.</li>
                    <li>Swab ko 5 minute ke liye taral mein dooba rehne dein aur swab ko ghol mein 6 baar jor se ghumakar milayein.</li>
                    <li>1/10 dilution taiyar karein aur swab sample aur dilution ke 1ml hisson ko duplicate mein plate karein.</li>
                    <li>Plates ko 37°C par 48 ghante ke liye incubate karein.</li>
                </ol>
            `,
        calculation: `
                <p>Duplicate plates mein counts ka ausat, 25 se guna karke, swab kiye gaye kul kshetra ka colony count deta hai. Parinaam ko prati 900 sq.cm kshetra ke colony count ke roop mein vyakt karein.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony Count prati 900 sq.cm area | Sterility</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>5,000 se kam: Santoshjanak</li>
                    <li>5,000 se 25,000: Kafi santoshjanak</li>
                    <li>25,000 se adhik: Asantoshjanak</li>
                </ul>
            `,
      },
      {
        id: "sterility_bottles",
        title: "Doodh ki Botlon ki Sterility ka Aakalan",
        principle:
          "Doodh ki botlon ki sanitary sthiti (sterility) ko rinse technique dwara parikshit kiya jaata hai. Is vidhi mein bottle ko ek jyat matra mein sterile Ringer's ya phosphate buffer solution se dhoya jaata hai taaki satah par bache bacterial cells ko hataya ja sake aur unki sankhya rinse solutions ke standard plate counts lekar anumanit ki jaati hai.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Bottle mein 20ml Ringer's ya buffer solution daalein aur bung wapas laga dein.</li>
                    <li>Bottle ko kshaitij roop se pakden, dheere-dheere ek disha mein 12 baar ghumayein aur poori aantarik satah ko geela karne ke liye 12 baar lambai mein bhi hilayein.</li>
                    <li>Bottle ko 15 se 30 minute ke liye khade rehne dein aur phir se aantarik satah ko acchi tarah se geela karne ke liye 12 baar dheere-dheere ghumayein.</li>
                    <li>Rinse solution ke 1ml aur 5ml hisson ko do set petridishes mein duplicate mein sthanantarit karein, agar medium daalein, aur plates ko 37°C par 48 ghante ke liye incubate karein.</li>
                </ol>
            `,
        calculation: `
                <p>Duplicate plates mein counts ka ausat, 20 se guna karke (1ml rinse waali plates ke maamle mein) aur 4 se guna karke (yadi plates mein 5ml rinse tha), prati bottle colony count deta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Bottle ki kshamata ke prati ml ek se adhik colony ki colony count asantoshjanak sterility ka sanket hai.</p>
            `,
      },
      {
        id: "sterility_cans",
        title: "Doodh ke Cans ki Sterility ka Aakalan",
        principle:
          "Doodh ke can ki sanitary sthiti ko rinse technique dwara parikshit kiya jaata hai.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Pratyek can ka drishy nirikshan karein.</li>
                    <li>Can mein dhakkan ke andar se 500ml sterile Ringer's ya buffer solution daalein.</li>
                    <li>Dhakkan wapas lagayein, can ko uski taraf se letayein aur use aage aur peeche ghumayein taaki vah 12 poore chakkar laga le.</li>
                    <li>Can se rinse sample ko ek sterile bottle ya flask mein daalein.</li>
                    <li>Sample ka 1/10 dilution taiyar karein aur sample aur dilution ke 1ml ko duplicate mein plate karein.</li>
                    <li>Plates ko 37°C par 48 ghante ke liye incubate karein.</li>
                </ol>
            `,
        calculation: `
                <p>Duplicate plates mein counts ka ausat (1/10 dilution ke maamle mein 10 se guna karke) rinse sample ke prati ml colony count ka pratinidhitv karta hai.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Prati litre kshamata colony count | Sterility</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>1,000 se kam: Santoshjanak</li>
                    <li>1,000 se 5,000: Kafi santoshjanak</li>
                    <li>5,000 se adhik: Asantoshjanak</li>
                </ul>
            `,
      },
      {
        id: "fermented_products",
        title: "Fermented Milk Products ka Microbiological Analysis",
        principle:
          "Dahi aur anya fermented milk preparation ki gunvatta gambhir roop se kharab ho sakti hai yadi anichchhniy microorganisms (jaise coliform bacteria, yeasts, molds) nirmaan ke dauran doodh, starter-culture, unsterile equipment aur vatavaran se pravesh karte hain.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Presumptive Coliform Test</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Dahi sample ke 1:10 aur 1:100 ke dilutions taiyar karein.</li>
                    <li>Dahi aur uske dilutions ke 1g hisson ko Mac Conkey's broth tubes mein triplicate mein sthanantarit karein.</li>
                    <li>Tubes ko 37°C par 24 ghante ke liye incubate karein aur acid aur gas ke utpaadan ke liye avlokan karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Yeast and mold count</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>10 gram dahi ko 90 ml dilution blank mein sthanantarit karein taki 1:10 dilution prapt ho sake.</li>
                    <li>Aur dilutions taiyar karein aur Potato Dextrose Agar (pH 3.5) par plate karein.</li>
                    <li>Plates ko 21°C ya 25°C par 5 din ke liye incubate karein.</li>
                    <li>Colonies ki sankhya ginen aur prati gram sankhya ki ganana karein.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Acchi gunvatta ke dahi mein 1/10 dilution mein coliform test negative hona chahiye. Yadi yeast aur mold count 100 prati gram se adhik hai to kharab gunvatta ka sanket hai.</p>
            `,
      },
      {
        id: "starter_cultures",
        title: "Starter Cultures",
        principle:
          "Lactic acid bacteria ke chayanit strains ka upyog starter cultures ke roop mein kai doodh utpaadon jaise dahi, yoghurt, acidophilus milk, cultured milk, ripened cream butter aur cheese ke nirmaan mein kiya jaata hai. Samay-samay par cultures ki gatividhi aur acid ya swaad yaugikon ka utpaadan karne ki unki kshamata ka parikshan karna avashyak hai.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Acidity test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>0.3ml culture ko 10ml skim milk mein sthanantarit karein.</li>
                    <li>37°C par 3.5 ghante ke liye incubate karein.</li>
                    <li>0.1 N NaOH ghol ke khilaaf titrate karein aur acidity ki ganana karein.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Dye Reduction Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>1ml culture ko 10ml sterile skim milk mein sthanantarit karein.</li>
                    <li>Ek ml MBR-solution daalein aur 37°C par incubate karein. Decolourisation ka samay note karein.</li>
                </ol>
                 <h4 class="font-semibold mt-4 mb-2">Creatine Test (diacetyl ke liye test):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Ek test tube mein lagbhag 2-2.5ml culture sthanantarit karein aur thodi matra mein creatine (1-2 mg) daalein.</li>
                    <li>Barabar matra (2 se 2.5ml) 30% potassium hydroxide ghol daalein aur hilayein.</li>
                    <li>Doodh ki satah par ek gulabi band ke gathan aur liye gaye samay ka avlokan karein.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>0.35% ya usse adhik ki acidity santoshjanak culture ko ingit karti hai. Methylene blue reduction time 35 minute se kam bahut accha hai. Creatine test mein gulabi band ka gathan sakriya swaad utpaadan ko ingit karta hai.</p>
            `,
      },
      {
        id: "cream_analysis",
        title: "Bacteriological Analysis of Cream",
        principle:
          "Doodh cream vibhinn sroton se utpaadan ke dauran sandushan ke prati sanvedansheel hone ke kaaran, yadi ise bhandaran ke dauran garam taapman mein rakha jaata hai, to sukshmajiviyon (bacteria, yeasts aur molds) ki tezi se vriddhi hoti hai jiske parinaamasvaroop khatas aur anya dosh vikasit hote hain. Cream ke bacteriological vishleshan ke tarike aur parinamon ki vyaakhya doodh ke liye apanaye gaye tarikon ke saman hain.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">Standard Plate Count of Cream</h4>
                <p>Dilutions taiyar karein aur standard plate count agar par plate karein. 37°C par 48 ghante ke liye incubate karein.</p>
                <h4 class="font-semibold mt-4 mb-2">Presumptive Coliform test for Cream</h4>
                <p>Violet Red Bile Agar (VRBA) par plate karein aur 37°C par 24-48 ghante ke liye incubate karein. Vishisht colonies ki ginti karein.</p>
                <h4 class="font-semibold mt-4 mb-2">Methylene blue reduction test for cream</h4>
                <p>Triple concentration Methylene blue solution ka upyog karein aur 37°C par incubate karein. Decolourisation ka samay note karein.</p>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Kachhe aur pasteurized cream ke liye maanak SPC, coliform test, aur MBRT parinamon ke adhaar par sujhaye gaye hain.</p>
            `,
      },
    ],
    },
    en: {
        title: "Common Microbiological Test Methods",
        intro:
            "Several standard microbiological tests are performed to ensure the safety and quality of dairy products. Here is an overview of some important test methods:",
        tests: [
            {
                id: "spc",
                title: "Standard Plate Count (SPC) of Milk",
                principle:
                    "Classically SPC procedures are employed for the determination of Total Plate Count (TPC) or Aerobic Plate Count (APC) or Total Viable Count (TVC). SPC is a standard method with which other screening tests are compared.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Preparation of Diluent-Phosphate Buffer Solution</h4>
              <p><strong>Stock Solution:</strong></p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Potassium dihydrogen phosphate: 42.5g</li>
                <li>Distilled Water: 1000ml</li>
              </ul>
              <p>Dissolve the salt in 500ml distilled water. Adjust the pH using 1N NaOH or HCl solution so that after sterilization it will be 7.2 at 25°C. Dilute to 1000ml. Distribute in screw capped sample bottles. Sterilize them at 121°C for 15 minutes. Store the stock solution under refrigeration.</p>
              <p><strong>Bench Solution:</strong> Add 1ml of stock solution to 1000ml of water and use as diluent. Dispense 9 ml of diluent into test tubes. Plug the tubes and sterilize by autoclaving at 121°C for 15 minutes.</p>
              
              <h4 class="font-semibold mt-4 mb-2">Preparation of Medium:</h4>
              <p>Plate Count Agar or Standard Method Agar is used. Prepare the medium by dissolving the ingredients in distilled water. Adjust the pH of the medium, so that after sterilization it will be 7.0 ± 0.2 at 25°C.</p>

              <h4 class="font-semibold mt-4 mb-2">Preparation of test samples:</h4>
              <p>Shake the sample of raw milk or pasteurized milk thoroughly by inverting it rapidly 25 times to ensure uniform distribution of microorganisms.</p>

              <h4 class="font-semibold mt-4 mb-2">Preparation of decimal dilutions:</h4>
              <p>Take out 1ml of the test sample with a pipette and transfer to 9ml of diluent. Shake this primary dilution for 5 to 10 seconds using a mechanical shaker. Prepare further dilutions like 10⁻², 10⁻³, etc., using a fresh pipette for each dilution.</p>

              <h4 class="font-semibold mt-4 mb-2">Inoculation and Incubation:</h4>
              <p>Transfer 1ml from each suitable dilution to two sterile Petri dishes. Add about 15ml of plate-count medium (at 45°C) to each Petri dish. Mix the inoculum carefully with the medium and allow the mixture to solidify. After complete solidification, invert the prepared dish and incubate in an incubator at 37°C for 48h ± 3h.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation and Expression of Results:</h4>
              <p>Retain dishes which contain between 15 and 300 colonies. Calculate the number of microorganisms, N, present in the test sample using the following equation:</p>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Where ΣC = sum of colonies counted on all the dishes retained, n1 = number of dishes in the first dilution, n2 = number of dishes in the second dilution, d = dilution factor corresponding to the first dilution.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>A count exceeding 35000 per milliliter of pasteurized milk indicates unsatisfactory conditions. For grading of raw milk the following standards have been suggested:</p>
              <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Very Good:</strong> Not exceeding 2,00,000</li>
                <li><strong>Good:</strong> 2,00,000 - 10,00,000</li>
                <li><strong>Fair:</strong> 10,00,000 - 50,00,000</li>
                <li><strong>Poor:</strong> Over 50,00,000</li>
              </ul>
            `,
            },
            {
                id: "coliform",
                title: "Coliform Count",
                principle:
                    "The coliform group of bacteria includes all aerobic and facultative anaerobic, gram-negative, non-spore forming rods which are capable of fermenting lactose with the production of acid and gas within 48 hours at 30°C, 35°C or 37°C. The presence of these coliforms in dairy products is an index of unsanitary conditions or practices during production, processing or storage.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Preparation of Medium:</h4>
              <p>Violet Red Bile Agar (VRBA) medium is used. Prepare the medium by dissolving the ingredients in distilled water. Bring to boil. Avoid overheating. Do not autoclave this medium.</p>
              <h4 class="font-semibold mt-4 mb-2">Inoculation and Incubation:</h4>
              <p>Transfer 1ml from each suitable dilution to two sterile Petri dishes. Add about 15ml of VRBA medium to each Petri dish, mix and allow to solidify. After complete solidification, pour about 4 ml of the VRBA medium on the surface. Incubate them at 37°C for 24h ± 2h. Do not retain dishes containing more than 150 colonies. Typical colonies of coliform are dark or purplish red in colour having a diameter of 0.5 mm or more and are sometimes surrounded by a reddish zone of precipitated bile.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation and Expression of Result:</h4>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Where ΣC = sum of typical colonies counted on all dishes retained, n1 = number of dishes in the first dilution, n2 = number of dishes in the second dilution, d = dilution factor corresponding to the first dilution.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>Absence of coliform bacteria in 1/100 dilution (0.01 ml) in case of raw milk and in 1/10 dilution (0.1 ml) in case of pasteurized milk is considered as a criterion of satisfactory quality.</p>
            `,
            },
            {
                id: "dmscc",
                title: "Direct Microscopic Somatic Cell Count (DMSCC)",
                principle:
                    "The number of somatic cells in raw milk provides a measure of the presence and extent of mastitis or some other abnormal milk secretion. DMSCC is implemented as one of the officially recognized procedures for confirmation of somatic cell count.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Estimation of single strip factor (SSF):</h4>
              <p>Place a clean stage micrometer on the stage of the microscope. Determine the diameter (d) of the microscopic field in mm. Calculate the SSF: <code>SSF = 10000 / (area of a single strip)</code></p>
              <h4 class="font-semibold mt-4 mb-2">Preparation of milk films:</h4>
              <p>Warm the milk sample to 40°C. Shake well. Take out 0.01ml of milk using a pipette or calibrated loop. Spread the milk evenly over an area of 1cm² of the slide. Dry the films within 5 minutes at 40 to 45°C.</p>
              <h4 class="font-semibold mt-4 mb-2">Defatting, fixing and staining the smear:</h4>
              <p>Immerse the slides in a jar containing Newman's stain for ten minutes. Drain excess stain and allow the slides to dry thoroughly. Wash the slides in water until all the excess dye is washed out. Drain and air dry before examining the film under the microscope.</p>
              <h4 class="font-semibold mt-4 mb-2">Examination and counting of stained films:</h4>
              <p>Examine each film with an oil immersion objective. Count only those somatic cells that have a recognizably stained nucleus. For a single strip count, traverse the entire diameter of the milk film, counting all the cells within the strip and the cells touching one edge of the strip.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation and Expression of Results:</h4>
              <code>DMSCC per ml = Number of somatic cells in a single strip × SSF</code>
              <p>Round the result to two significant figures.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>The presence of more than 500,000 somatic cells per milliliter of milk is an indication of mastitis.</p>
            `,
            },
            {
                id: "drug_residues",
                title: "Veterinary Drug Residues (Delvotest)",
                principle:
                    "Delvotest is used to detect the presence of drug residues in milk. The principle is based on the germination and growth of spores of a specific bacterium (Bacillus-stearothermophilus var. calidolactis) embedded in agar in addition to nutrients and milk. If the milk is free of inhibitory substances, growth of these spores results in the production of acid, which turns the agar from purple to yellow. However, if the milk contains certain inhibitory substances, these will diffuse into the agar medium and prevent the growth of the bacteria and subsequent acid production and the medium will remain purple in colour.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Follow the manufacturer's protocol provided with each kit. Report the result for antibiotic drugs as negative if the colour of the medium has changed to yellow and positive for the presence of antibiotic drugs if the colour remains purple after the specified incubation period. The Delvotest can give a false positive reaction, if the milk has been adulterated with neutralizer, formalin, and hydrogen peroxide.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>After adding a 0.1 millilitre milk sample, the ampoule is incubated at 63°C to 66°C for 2.5 hours. In the absence of antimicrobial substances, the colour of the entire solid medium changes to yellow (negative), whereas in the presence of a sufficiently high concentration of antibiotic drugs it remains purple. In the case of doubtful results, the medium turns slightly yellow.</p>
            `,
            },
            {
                id: "yeast_mould",
                title: "Yeast and Mould Count",
                principle:
                    "Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.",
                procedure: `
               <ol class='list-decimal list-inside space-y-2 mt-2'>
                <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as for the SPC method.</li>
                <li><strong>Plating:</strong> Transfer 1ml from each dilution to sterile Petri plates (Spread Plate method is preferred).</li>
                <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), acidified to a pH of ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
                <li><strong>Incubation:</strong> Incubate the plates at 22-25°C for 5 days.</li>
                <li><strong>Counting:</strong> Count the colonies of yeasts (typically shiny, round) and moulds (fuzzy, spreading) separately.</li>
              </ol>`,
                calculation:
                    "<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>",
            },
            {
                id: "media_prep",
                title: "Preparation of Media",
                principle: `Various culture media (liquid, semi-solid, and solid) are used in a bacteriological laboratory for the cultivation of microorganisms, for studying their growth and physiological characteristics, and for determining the number of viable organisms.`,
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Adjustment of reaction (pH) of media.</h4>
                <p>The reaction (pH) of the medium is one of the most important factors influencing the growth of microorganisms. Most species of bacteria grow well when the reaction is neither acidic nor alkaline, i.e., neutral (pH 7.0). Yeasts and moulds require a pronounced acid environment (pH 4 to 5) for their growth. In the preparation of culture media, adjustment of the reaction (pH) of the medium to the required level is a very important step.</p>
                <h4 class="font-semibold mt-4 mb-2">Preparation of nutrient broth and nutrient agar.</h4>
                <p>Nutrient broth is a liquid medium commonly used for the cultivation of aerobic organisms and also as a basal medium for a variety of physiological tests. Addition of agar to the broth gives a solid medium (nutrient agar) used for cultivation of several bacterial species and for determination of viable bacterial numbers.</p>
                <h4 class="font-semibold mt-4 mb-2">Preparation of potato dextrose agar.</h4>
                <p>Potato dextrose agar is a selective medium used for the cultivation of yeasts and molds. The use of a potato extract promotes the growth of yeasts and molds, and the low pH (3.5) helps to inhibit the growth of bacteria while favoring the growth of yeasts and molds.</p>
                <h4 class="font-semibold mt-4 mb-2">Preparation of Mac Conkey's bile salt broth and agar and desoxycholate agar.</h4>
                <p>This is a selective medium used for the cultivation of coliform organisms. The presence of sodium taurocholate (bile salt) in the medium lowers surface tension thereby favouring the growth of coliform bacteria. Hence it is of great value for performing the presumptive coliform test for milk and water samples.</p>
            `,
                calculation: "",
            },
            {
                id: "bacteriology_air",
                title: "Bacteriology of Air",
                principle:
                    "Air is not a natural environment for the growth and reproduction of micro-organisms but a few types of organisms (e.g. aerobic spore formers, micrococci, mold spores) may be found in association with dust particles suspended in the air. A knowledge of the numbers and types of micro-organisms present in the atmosphere inside dairies, cattle byres and food factories, is very important for controlling contamination of milk and milk products.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Pour two plates with melted nutrient agar and two plates with sabouraud agar. Allow the media to set and harden.</li>
                    <li>Remove the tops from the plates.</li>
                    <li>Place one plate of each medium on the floor of the milking shed etc. and allow them to be exposed for 5 minutes. Immediately replace the tops.</li>
                    <li>Place one plate of each medium on the laboratory bench, allow the plates to be exposed for 15 minutes and immediately replace the tops.</li>
                    <li>Incubate the nutrient agar plates at 37°C for 2 days and the sabouraud agar plates at 22°C for 3 to 4 days.</li>
                    <li>At the end of the incubation period count the number of colonies in each plate.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Number of organisms per c.ft. per minute should not exceed one for satisfactory atmosphere.</p>
            `,
            },
            {
                id: "sterility_equipment",
                title: "Assessing Sterility of Plant and Equipment",
                principle:
                    "The sanitary condition of plant and equipment is tested by applying the swab technique. In this method a sterile cotton swab (wetted with buffer solution) is rubbed over the surface of the equipment and the bacterial cells removed from the surface are transferred into sterile buffer solution and their numbers estimated by standard plate count.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Press the swab with a rolling motion against the side of the glass tube to remove the excess liquid and take it out of the tube.</li>
                    <li>Rub the swab with heavy pressure back and forth over the area to be examined so that all parts of the surface are treated twice.</li>
                    <li>After rubbing the required area return the swab to the solution in the tube in which it was originally placed.</li>
                    <li>Allow the swab to be immersed in the liquid for 5 minutes and mix by swirling the swab vigorously in the solution 6 times.</li>
                    <li>Prepare 1/10 dilution of the sample and plate 1ml portions of the swab sample and the dilution in duplicate.</li>
                    <li>Incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
                calculation: `
                <p>The average of the counts in duplicate plates, multiplied by 25, gives the colony count of the total area swabbed. Express the result as colony count per 900 sq.cm area.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony Count per 900 sq.cm area | Sterility</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Less than 5,000: Satisfactory</li>
                    <li>5,000 to 25,000: Fairly satisfactory</li>
                    <li>More than 25,000: Unsatisfactory</li>
                </ul>
            `,
            },
            {
                id: "sterility_bottles",
                title: "Assessing Sterility of Milk Bottles",
                principle:
                    "The sanitary condition (sterility) of milk bottles is tested by the rinse technique. In this method the bottle is rinsed with a known amount of sterile Ringer's or phosphate buffer solution to remove the bacterial cells remaining on the surface and their number estimated by taking standard plate counts of the rinse solutions.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Add 20ml of Ringer's or buffer solution to the bottle and replace the bung.</li>
                    <li>Hold the bottle horizontally, rotate gently 12 times in one direction and also shake lengthwise 12 times to wet the whole of the internal surface.</li>
                    <li>Allow the bottle to stand for 15 to 30 minutes and again gently rotate 12 times to wet the internal surface thoroughly.</li>
                    <li>Transfer 1ml and 5ml portions of the rinse solution to two sets of petridishes in duplicate, pour the agar medium, and incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
                calculation: `
                <p>The average of the counts in duplicate plates multiplied by 20 (for 1ml rinse) and by 4 (for 5ml rinse), gives the colony count per bottle.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony count of more than one colony per ml of the capacity of the bottle is an indication of unsatisfactory sterility.</p>
            `,
            },
            {
                id: "sterility_cans",
                title: "Assessing Sterility of Milk Cans",
                principle: "The sanitary condition of milk can is tested by the rinse technique.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Make a visual inspection of each can.</li>
                    <li>Pour 500ml of sterile Ringer's or buffer solution over the inside of the lid into the can.</li>
                    <li>Replace the lid, lay the can on its side and roll it to and fro so that it makes 12 complete revolutions.</li>
                    <li>Pour the rinse sample from the can into a sterile bottle or flask.</li>
                    <li>Prepare 1/10 dilution of the sample and plate 1ml of the sample and the dilution in duplicate.</li>
                    <li>Incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
                calculation: `
                <p>The average of the counts in duplicate plates (multiplied by 10 in the case of 1/10 dilution) represents the colony count per ml of the rinse sample.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony Count per litre capacity | Sterility</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Less than 1,000: Satisfactory</li>
                    <li>1,000 to 5,000: Fairly satisfactory</li>
                    <li>More than 5,000: Unsatisfactory</li>
                </ul>
            `,
            },
            {
                id: "fermented_products",
                title: "Microbiological Analysis of Fermented Milk Products",
                principle:
                    "The quality of dahi and other fermented milk preparations is likely to be seriously impaired if undesirable microorganisms (e.g. coliform bacteria, yeasts, molds) gain entry during manufacture.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Presumptive Coliform Test</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Prepare 1:10 and 1:100 dilutions of the dahi sample.</li>
                    <li>Transfer 1g portions of dahi and its dilutions into Mac Conkey's broth tubes in triplicate.</li>
                    <li>Incubate the tubes for 24 hours at 37°C and observe for the production of acid and gas.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Yeast and mold count</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 10 gram of dahi to 90 ml dilution blank to get 1:10 dilution.</li>
                    <li>Prepare further dilutions and plate on Potato Dextrose Agar (pH 3.5).</li>
                    <li>Incubate the plates at 21°C or 25°C for 5 days.</li>
                    <li>Count the number of colonies and calculate the number per gram.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Dahi of good quality should give a negative coliform test in 1/10 dilution. If yeast and mold count exceeds 100 per gram, poor quality is indicated.</p>
            `,
            },
            {
                id: "starter_cultures",
                title: "Starter Cultures",
                principle:
                    "Selected strains of lactic acid bacteria are used as starter cultures in the manufacture of several milk products. It is necessary to test periodically the activity of the cultures and their ability to produce acid or flavour compounds.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Acidity test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 0.3ml of culture to 10ml of skim milk.</li>
                    <li>Incubate at 37°C for 3.5 hours.</li>
                    <li>Titrate against 0.1 N NaOH solution and calculate acidity.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Dye Reduction Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 1ml of culture to 10ml of sterile skim milk.</li>
                    <li>Add one ml MBR-solution and incubate at 37°C. Note the time of decolourisation.</li>
                </ol>
                 <h4 class="font-semibold mt-4 mb-2">Creatine Test (for diacetyl):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer about 2-2.5ml of culture into a test tube and add a small quantity of creatine (1-2 mg).</li>
                    <li>Add equal quantity (2 to 2.5ml) of 30% potassium hydroxide solution and shake.</li>
                    <li>Observe for the formation of a pink band on the surface of milk and the time taken.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Acidity of 0.35% or more indicates a satisfactory culture. Methylene blue reduction time of less than 35 minutes is very good. Formation of a pink band in the Creatine test indicates active flavour production.</p>
            `,
            },
            {
                id: "cream_analysis",
                title: "Bacteriological Analysis of Cream",
                principle:
                    "Since cream is susceptible to contamination from various sources during its production, rapid growth of microorganisms occurs if it is held at warm temperatures during storage. The methods of bacteriological analysis of cream and the interpretation of results are similar to those adopted for milk.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Standard Plate Count of Cream</h4>
                <p>Prepare dilutions and plate on standard plate count agar. Incubate at 37°C for 48 hours.</p>
                <h4 class="font-semibold mt-4 mb-2">Presumptive Coliform test for Cream</h4>
                <p>Plate on Violet Red Bile Agar (VRBA) and incubate at 37°C for 24-48 hours. Count typical colonies.</p>
                <h4 class="font-semibold mt-4 mb-2">Methylene blue reduction test for cream</h4>
                <p>Use triple concentration Methylene blue solution and incubate at 37°C. Note the time of decolourisation.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Standards for raw and pasteurized cream have been suggested based on SPC, coliform test, and MBRT results.</p>
            `,
            },
        ],
    }
};

    
