export const microbiologyTestMethodsContent = {
  hng: {
    title: "Samanya Sukshmajeevvigyani Parikshan Vidhiyan",
    intro:
      "Dairy utpadon ki suraksha aur gunvatta sunishchit karne ke liye kai maanak sukshmajeevvigyani parikshan kiye jaate hain. Yahaan kuch pramukh parikshan vidhiyon ka avlokan diya gaya hai:",
    tests: [
      {
        id: "spc",
        title: "Standard Plate Count (SPC) of Milk",
        principle:
          "Shastriya roop se SPC prakriyaon ka upyog kul plate गणना (TPC) ya aerobic plate गणना (APC) ya kul vyavaharya गणना (TVC) ko nirdharit karne ke liye kiya jaata hai. SPC maanak vidhi hai jisse anya screening parikshanon ki tulna ki jaati hai.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">2.1.1 Diluent-Phosphate Buffer Solution taiyaar karna</h4>
              <p><strong>Stock Solution:</strong></p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Potassium dihydrogen phosphate: 42.5g</li>
                <li>Distilled Water: 1000ml</li>
              </ul>
              <p>Namak ko 500ml aasut jal mein gholen. 1N NaOH ya HCl ghol ka upyog karke pH ko samaayojit karein taaki nasbandi ke baad yeh 25°C par 7.2 ho. 1000ml tak patla karein. Screw capped namoona botlon mein vitarit karein. Unhein 121°C par 15 minute ke liye sterilize karein. Stock ghol ko prasheetan ke tehat store karein.</p>
              <p><strong>Bench Solution:</strong> 1ml stock ghol ko 1000ml paani mein milakar diluent ke roop mein upyog karein. 9 ml diluent ko test tube mein daalein. Tubeon ko band karein aur 121°C par 15 minute ke liye autoclave karke sterilize karein.</p>
              
              <h4 class="font-semibold mt-4 mb-2">2.1.3 Madhyam taiyaar karna:</h4>
              <p>Plate Count Agar ya Standard Method Agar ka upyog kiya jaata hai. Samagri ko aasut jal mein gholkar madhyam taiyaar karein. Madhyam ka pH samaayojit karein, taaki yeh nasbandi ke baad 25°C par 7.0 ± 0.2 ho.</p>

              <h4 class="font-semibold mt-4 mb-2">2.1.4 Parikshan namoonon ki taiyari:</h4>
              <p>Kachhe doodh ya pasteurized doodh ke namoone ko 25 baar tezi se ulta karke acchi tarah se hilayein taaki sukshmajeev samaan roop se vitarit ho jaayein.</p>

              <h4 class="font-semibold mt-4 mb-2">2.1.5 Dashamlav tanukaran ki taiyari:</h4>
              <p>Ek pipette se 1ml parikshan namoona nikalen aur 9ml diluent mein daalein. Is prathmik tanukaran ko 5 se 10 second ke liye ek yaantrik shaker ka upyog karke hilayein. Pratyek tanukaran ke liye ek taaza pipette ka upyog karke 10⁻², 10⁻³, aadi jaise aur tanukaran taiyaar karein.</p>

              <h4 class="font-semibold mt-4 mb-2">2.1.6 Teekakaran aur ooshmaayan:</h4>
              <p>Pratyek upyukt tanukaran se 1ml ko do baanjh Petri dish mein sthanaantarit karein. Pratyek Petri dish mein lagbhag 15ml plate-count madhyam (45°C par) daalein. Dhyaan se inoculum ko madhyam ke saath milayein aur mishran ko jamne dein. Poori tarah se jamne ke baad, taiyaar dish ko ulta karein aur 37°C par 48h ± 3h ke liye incubator mein ooshmaayan karein.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">2.2 Ganana aur parinamon ki abhivyakti:</h4>
              <p>Un dish ko banaye rakhein jinmein 15 aur 300 ke beech colonyan hon. Nimnalikhit sameekaran ka upyog karke parikshan namoone mein maujood sukshmajeevon ki sankhya N ki ganana karein:</p>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Jahan ΣC = sabhi dish par gini gayi colonyon ka yog, n1 = pehle tanukaran mein dish ki sankhya, n2 = doosre tanukaran mein dish ki sankhya, d = pehle tanukaran ke anuroop tanukaran kaarak.</p>
              <h4 class="font-semibold mt-4 mb-2">2.2.4 Vyaakhya:</h4>
              <p>Pasteurized doodh ke prati milliliter 35000 se adhik ki ginti asantoshjanak sthitiyon ko ingit karti hai. Kachhe doodh ki grading ke liye nimnalikhit maanakon ka sujhaav diya gaya hai:</p>
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
          "Coliform samuh ke bacteria mein sabhi aerobic aur vaikalpik anaerobic, gram-negative, gair-beejaanu banane waali chhaden shaamil hain jo 30°C, 35°C ya 37°C par 48 ghanton ke bheetar acid aur gas ke utpaadan ke saath lactose ko kinvit karne mein saksham hain. Dairy utpaadon mein in coliforms ki upasthiti utpaadan prasanskaran ya bhandaaran ke dauraan asvachh sthitiyon ya prathaon ka soochak hai.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">3.1.2 Madhyam ki taiyari:</h4>
              <p>Violet Red Bile Agar (VRBA) madhyam ka upyog kiya jaata hai. Samagri ko aasut jal mein gholkar madhyam taiyaar karein. Ubaal lein. Adhik garam karne se bachein. Falasvaroop madhyam ko autoclave na karein.</p>
              <h4 class="font-semibold mt-4 mb-2">3.1.4 Teekakaran aur ooshmaayan:</h4>
              <p>Pratyek upyukt tanukaran se 1ml ko do baanjh Petri dish mein sthanaantarit karein. Pratyek Petri dish mein lagbhag 15ml VRBA madhyam daalein, milayein aur jamne dein. Poori tarah se jamne ke baad, satah par lagbhag 4 ml VRBA madhyam daalein. Unhein 37°C par 24h ± 2h ke liye ooshmaayan karein. 150 se adhik colonyon waali dish ko banaye na rakhein. Coliform ki vishisht colonyan gehre ya baingani laal rang ki hoti hain jinka vyaas 0.5 mm ya usse adhik hota hai aur kabhi-kabhi pitta ke avakshepit laal rang ke kshetra se ghiri hoti hain.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">3.2 Ganana aur parinam ki abhivyakti:</h4>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Jahan ΣC = sabhi dish par gini gayi vishisht colonyon ka yog, n1 = pehle tanukaran mein dish ki sankhya, n2 = doosre tanukaran mein dish ki sankhya, d = pehle tanukaran ke anuroop tanukaran kaarak.</p>
              <h4 class="font-semibold mt-4 mb-2">3.3 Vyaakhya:</h4>
              <p>Kachhe doodh ke maamle mein 1/100 tanukaran (0.01 ml) aur pasteurized doodh ke maamle mein 1/10 tanukaran (0.1 ml) mein coliform bacteria ki anupasthiti ko santoshjanak gunvatta ka maapdan maana jaata hai.</p>
            `,
      },
      {
        id: "dmscc",
        title: "Direct Microscopic Somatic Cell Count (DMSCC)",
        principle:
          "Kachhe doodh mein daihik koshikaon ki sankhya mastitis ya kuch anya asaamaanya doodh sraav ki upasthiti aur seema ka ek maap pradaan karti hai. DMSCC ko daihik koshika ganana ki pushti ke liye aadhikaarik roop se maanyata praapt prakriyaon mein se ek ke roop mein laagu kiya jaata hai, jise pehle kai screening parikshanon mein se ek dwaara anumaanit kiya gaya tha.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">4.2.1 Single Strip Factor (SSF) ka anumaan:</h4>
              <p>Ek saaf stage micrometer ko microscope ke stage par rakhein. Tel visarjan uddeshya ke tehat microscopic kshetra ke kendra mein paimaane ko kendrit karein. Microscopic kshetra ke vyaas (d) ko mm mein nirdhaarit karein. SSF ki ganana karein: <code>SSF = 10000 / (ekal patti ka kshetra)</code></p>
              <h4 class="font-semibold mt-4 mb-2">4.2.2 Doodh film ki taiyari:</h4>
              <p>Doodh ke namoone ko 40°C tak garam karein. Acchi tarah se hilayein. Ek pipette ya calibrated loop ka upyog karke 0.01ml doodh nikalen. Doodh ko slide ke 1cm² kshetra par samaan roop se failayein. 40 se 45°C par 5 minute ke bheetar filmon ko sukhayein.</p>
              <h4 class="font-semibold mt-4 mb-2">4.2.3 Smear ko defatting, fixing aur staining:</h4>
              <p>Slideon ko das minute ke liye Newman's daag waale jar mein duboyein. Atirikt daag nikaal dein aur slideon ko acchi tarah se sookhne dein. Slides ko paani mein tab tak dhoyein jab tak ki saara atirikt dye dhul na jaaye. Microscope ke tehat film ki jaanch karne se pehle naali aur hawa mein sukhayein.</p>
              <h4 class="font-semibold mt-4 mb-2">4.2.4 Sana hua filmon ki pariksha aur ginti:</h4>
              <p>Tel visarjan uddeshya ke saath pratyek film ki jaanch karein. Keval un daihik koshikaon ko ginen jinmein ek pehchaan yogya sana hua naabhik ho. Ek ekal patti ganana karne ke liye, doodh film ke poore vyaas ko paar karein, patti ke bheetar sabhi koshikaon aur patti ke ek kinaare ko chhoone waali koshikaon ki ginti karein.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">4.2.5 Ganana aur parinamon ki abhivyakti:</h4>
              <code>DMSCC prati ml = Ekal patti mein daihik koshikaon ki sankhya × SSF</code>
              <p>Parinaam ko do mahatvapurna ankon tak goal karein.</p>
              <h4 class="font-semibold mt-4 mb-2">4.3 Vyaakhya:</h4>
              <p>Doodh ke prati milliliter 500000 se adhik daihik koshikaon ki upasthiti mastitis ka soochak hai.</p>
            `,
      },
      {
        id: "drug_residues",
        title: "Veterinary Drug Residues (Delvotest)",
        principle:
          "Delvotest ka upyog doodh mein dawa avasheshon ki upasthiti ka pata lagaane ke liye kiya jaata hai. Vidhi ka siddhant poshak tatvon aur doodh ke alawa agar mein embedded ek vishisht bacteria (Bacillus-stearo thermophilus var. calidolactis) ke beejaanuon ke ankuran aur vriddhi par aadhaarit hai. Yadi doodh nirodhaatmak padarthon se mukt hai, to in beejaanuon ki vriddhi se acid ka utpaadan hota hai, jo agar ka rang baingani se peele mein badal deta hai. Haalaanki, yadi doodh mein kuch nirodhaatmak padarth hote hain, to ye agar maadhyam mein fail jaayenge aur bacteria ke vikaas aur baad mein acid utpaadan ko rok denge aur maadhyam baingani rang ka bana rahega.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">5.2 Prakriya:</h4>
              <p>Pratyek kit ke saath aapurti kiye gaye nirmata ke protocol ka paalan karein. Yadi maadhyam ka rang peele rang mein badal jaata hai to antibiotic dawaon ke liye parinaam ko nakaratmak ke roop mein report karein aur yadi nirdishta ooshmaayan avadhi ke baad rang baingani bana rehta hai to antibiotic dawaon ki upasthiti ke liye sakaratmak. Delvotest jhoothi sakaratmak pratikriya de sakta hai, yadi doodh mein neutralizer, formalin aur hydrogen peroxide milaaya gaya ho.</p>
              <p>Yadi screening test mein nirodhaatmak padarthon ki upasthiti ke liye sakaratmak paaya jaata hai aur atirikt neutralizer, hydrogen peroxide aur formalin ki upasthiti ke liye nakaratmak paaya jaata hai, to beta lactam antibiotic dawaon aur/ya sulfonamides ki upasthiti ka nirdhaaran karne ke liye nimnaanusaar aage badhein: 0.1 ml 10 IU penicillinase prati ml paani ke ghol ko 1.0 ml doodh ke namoone mein daalein. Acchi tarah hilayein aur kamre ke taapmaan par 15 minute ke liye khade rehne dein.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">5.5 Vyaakhya:</h4>
              <p>0.1 milliliter doodh ka namoona daalne ke baad, ampoule ko 63°C se 66°C par 2.5 ghante ke liye ooshmaayan kiya jaata hai. Rogaanurodhi padarthon ki anupasthiti mein, poore thos maadhyam ka rang peela ho jaata hai (nakaratmak), jabki antibiotic dawaon ke paryaapt uchh saandrata ki upasthiti mein yeh baingani bana rehta hai. Sandigdh parinaamon ke maamle mein, maadhyam thoda peela ho jaata hai.</p>
            `,
      },
      {
        id: "yeast_mould",
        title: "Yeast and Mould Count",
        principle:
          "Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.",
        procedure: `
               <ol class='list-decimal list-inside space-y-2 mt-2'>
                <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
                <li><strong>Plating:</strong> Transfer 1ml of each dilution to sterile Petri plates (Spread Plate method is better).</li>
                <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), with pH adjusted to ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
                <li><strong>Incubation:</strong> Incubate plates at 22-25°C for 5 days.</li>
                <li><strong>Counting:</strong> Count colonies of yeasts (typically shiny, round) and moulds (cotton-like, spreading) separately.</li>
              </ol>`,
        calculation:
          "<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>",
      },
      {
        id: "media_prep",
        title: "Preparation of Media",
        principle: `Various culture media (liquid, semi-solid and solid) are used' in a bacteriological laboratory for the cultivation of micro-organisms, for studying their growth and physiological characteristics and for determining the number of viable organisms. In addition to natural media like milk several artificial media, containing different nutrients required for the growth of organisms, are employed for the purpose.`,
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2. Adjustment of reaction (pH) of media.</h4>
                <p>The reaction (pH) of the medium is one of the most important factors influencing the growth of micro-organisms. Most species of bacteria grow well when the reaction is neither acidic nor alkaline i.e. neutral (pH 7.0). Yeasts and moulds require a' pronounced acid environment (pH 4 to 5) for their growth. In the preparation of culture media for the cultivation of micro-organisms adjustment of the reaction (pH) of the medium to the required level is a very important step. The pH of the medium is commonly estimated colourimetrically by adding a few drops of an indicator solution to the medium and matching the colour developed with a standard colour-disc (corresponding to a definite pH) in a comparator. By adding a few drops of acid or alkali the pH of the medium is brought to the required level.</p>
                <h4 class="font-semibold mt-4 mb-2">3. Preparation of nutrient broth and nutrient agar.</h4>
                <p>Nutrient broth is a liquid medium commonly used for the cultivation of aerobic organisms and also as a basal medium for a variety of physiological tests. Addition of agar to the broth gives a solid medium (nutrient agar) used for cultivation of several bacterial species and for determination of viable bacterial numbers.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Preparation of potato dextrose agar.</h4>
                <p>Potato dextrose agar is a selective medium used for the cultivation of yeasts and molds. The use of a potato extract promotes growth of yeasts and molds, and the low pH (3.5) helps to inhibit the growth of bacteria while favouring the growth of yeasts and molds.</p>
                <h4 class="font-semibold mt-4 mb-2">5. Preparation of Mac Conkey's bile salt broth and agar and desoxycholate agar.</h4>
                <p>This is a selective medium used for the cultivation of coliform organisms. The presence of sodium taurocholate (bile salt) in the medium lowers surface tension thereby favouring the growth of coliform bacteria. Hence it is of great value in the detection -and isolation of coliform organisms. The medium is used for performing the presumptive coliform test for milk and water samples.</p>
            `,
        calculation: "",
      },
      {
        id: "bacteriology_air",
        title: "Bacteriology of Air",
        principle:
          "Air is not a natural environment for the growth and reproduction of micro-organisms but a few types of organisms (e.g. aerobic spore formers, micrococci, mold spores) may, however, be found in association with dust particles suspended in the air. A knowledge of the numbers and types of micro-organisms present in the atmosphere inside dairies, cattle byres and food factories, is very important for controlling contamination of milk, milk products and other materials.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Pour two plates with melted nutrient agar and two plates with sabouraud agar. Allow the media to set and harden.</li>
                    <li>Remove the tops from the plates.</li>
                    <li>Place one plate of each medium on the floor of the milking shed etc. and allow them to be exposed for 5 minutes. Immediately replace the tops.</li>
                    <li>Place one plate of each medium on the laboratory bench, allow the plates to be exposed for 15 minutes and immediately replace to tops.</li>
                    <li>Incubate the nutrient agar plates at 37°C for 2 days and the sabouraud agar plates at 22°C for 3 to 4 days.</li>
                    <li>At the end of the incubation period count the number of colonies in each plate.</li>
                    <li>Prepare smears of typical bacterial colonies in each plate and examine for morphology by Gram's Stain.</li>
                    <li>Examine mold-like colonies using the low power objective of a microscope.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
                <p>Number of organisms per c.ft. per minute should not exceed one for satisfactory atmosphere.</p>
            `,
      },
      {
        id: "sterility_equipment",
        title: "Assessing Sterility of Plant and Equipment",
        principle:
          "The sanitary condition of plant and equipment including storage tanks, vats, coolers, pipelines, heat exchangers, agitators fittings etc. is tested by applying the swab technique. In this method a sterile cotton or wire-gauge swab (wetted with buffer solution) is rubbed over the surface of the equipment and the bacterial cells removed from the surface are transferred into sterile buffer solution and their numbers estimated by standard plate count.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Press the swab with a rolling motion against the side of the glass tube to remove the excess liquid and take it out of the tube.</li>
                    <li>Rub the swab with heavy pressure back and forth over the area to be examined so that all parts of the surface are treated twice. The swab should be rotated so that all parts of it make contact with the surface.</li>
                    <li>After rubbing the required area return the swab to the solution in the tube in which it was originally placed.</li>
                    <li>Allow the swab to be immersed in the liquid for 5 minutes and mix by swirling the swab vigorously in the solution 6 times.</li>
                    <li>Prepare 1/10 dilution of the sample using a 9 ml dilution blank.</li>
                    <li>Transfer 1ml portions of the swab sample as well as the 1/10 dilution into duplicate plates and add agar medium.</li>
                    <li>Incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
        calculation: `
                <p>The average of the counts in duplicate plates (multiplied by 10 in the case of 1/10 dilution) represents the colony count per ml of the swab sample. This number multiplied by 25 gives the colony count of the total area swabbed from which the count per 900 sq.cm area can be calculated.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
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
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Add 20ml of Ringer's or buffer solution to the bottle and replace the bung.</li>
                    <li>Hold the bottle horizontally, rotate gently 12 times in one direction and also shake lengthwise 12 times so as to wet the whole of the internal surface.</li>
                    <li>Allow the bottle to stand for 15 to 30 minutes and again gently rotate 12 times.</li>
                    <li>Transfer 1ml and 5ml portions of the rinse solution to two sets of petridishes in duplicate, pour the agar medium, and incubate at 37°C for 48 hours.</li>
                </ol>
            `,
        calculation: `
                <p>The average of the counts in duplicate plates multiplied by 20 (for 1ml rinse) or by 4 (for 5ml rinse) gives the colony count per bottle.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
                <p>Colony count of more than one colony per ml of the capacity of the bottle is an indication of unsatisfactory sterility.</p>
            `,
      },
      {
        id: "sterility_cans",
        title: "Assessing Sterility of Milk Cans",
        principle:
          "The sanitary condition of milk can is tested by the rinse technique.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Make a visual inspection of each can.</li>
                    <li>Pour 500ml of sterile Ringer's or buffer solution over the inside of the lid into the can.</li>
                    <li>Replace the lid, lay the can on its side and roll it to and fro so that it makes 12 complete revolutions.</li>
                    <li>Pour the rinse sample from the can into a sterile bottle.</li>
                    <li>Prepare 1/10 dilution and plate 1ml of the sample and the dilution in duplicate.</li>
                    <li>Incubate plates at 37°C for 48 hours.</li>
                </ol>
            `,
        calculation: `
                <p>The average of the counts in duplicate plates (multiplied by 10 for 1/10 dilution) represents the colony count per ml of the rinse sample.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
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
          "The quality of dahi and other fermented milk preparation is likely to be seriously impaired if undesirable micro organisms (e.g. coliform bacteria, yeasts, molds) gain entry during manufacture from milk, starter-culture, unsterile equipment and atmosphere. The products are particularly susceptible to contamination by yeasts and molds which find the acidic environment favourable for their growth.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2.2 Presumptive Coliform Test</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Prepare dilutions of 1:10 and 1:100 of the dahi sample.</li>
                    <li>Transfer 1g portions of dahi and its dilutions into Mac Conkey's broth tubes in triplicate.</li>
                    <li>Incubate the tubes for 24 hours at 37°C and observe for the production of acid and gas.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">2.3 Yeast and mold count</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Weigh 10 gram of dahi and transfer to 90 ml dilution blank to get 1:10 dilution.</li>
                    <li>Prepare further dilutions and plate on Potato Dextrose Agar (pH 3.5).</li>
                    <li>Incubate the plates at 21°C or 25°C for 5 days.</li>
                    <li>Count the number of colonies and compute the number per gram.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Dahi of good quality should give a negative coliform test in 1/10 dilution. If yeast and mold count exceeds 100 per gram of dahi poor quality is indicated.</p>
            `,
      },
      {
        id: "starter_cultures",
        title: "Starter Cultures",
        principle:
          "Selected strains of lactic acid bacteria are used as starter cultures in the manufacture of several milk products. It is necessary to test periodically the activity of the cultures and their ability to produce acid or flavour compounds.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2.1.1 Acidity test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 0.3ml of culture to 10ml of skim milk.</li>
                    <li>Incubate at 37°C for 3.5 hours.</li>
                    <li>Titrate against 0.1 N NaOH solution and calculate acidity.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">2.1.2 Dye Reduction Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 1ml of culture to 10ml of sterile skim milk.</li>
                    <li>Add one ml MBR-solution and incubate at 37°C. Note the time of decolourisation.</li>
                </ol>
                 <h4 class="font-semibold mt-4 mb-2">2.1.3 Creatine Test (test for diacetyl):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 2-2.5ml of culture into a test tube and add a small quantity of creatine.</li>
                    <li>Add equal quantity of 30% potassium hydroxide solution and shake.</li>
                    <li>Observe the formation of a pink band on the surface.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Acidity of 0.35% or more indicates satisfactory culture. Methylene blue reduction time less than 35 minutes is very good. Formation of a pink band in creatine test indicates active flavour production.</p>
            `,
      },
      {
        id: "cream_analysis",
        title: "Bacteriological Analysis of Cream",
        principle:
          "Milk cream being susceptible to contamination, the methods of bacteriological analysis and the interpretation of results are similar to those adopted for milk.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2. Standard Plate Count of Cream</h4>
                <p>Prepare dilutions and plate on standard plate count agar. Incubate at 37°C for 48 hours.</p>
                <h4 class="font-semibold mt-4 mb-2">3. Presumptive Coliform test for Cream</h4>
                <p>Plate on Violet Red Bile Agar (VRBA) and incubate at 37°C for 24-48 hours. Count characteristic colonies.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Methylene blue reduction test for cream</h4>
                <p>Use triple concentration Methylene blue solution and incubate at 37°C. Note the time for decolourisation.</p>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Standards for raw and pasteurized cream are suggested based on SPC, coliform test, and MBRT results.</p>
            `,
      },
    ],
  },
  en: {
    title: "Common Microbiological Test Methods",
    intro:
      "Several standard microbiological tests are performed to ensure the safety and quality of dairy products. Here is an overview of some key test methods:",
    tests: [
      {
        id: "spc",
        title: "Standard Plate Count (SPC) of Milk",
        principle:
          "Classically SPC procedures are used to determine the Total Plate Count (TPC) or Aerobic Plate Count (APC) or Total Viable Count (TVC). SPC is the standard method to which other screening tests are compared.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">2.1.1 Preparation of Diluent-Phosphate Buffer Solution</h4>
              <p><strong>Stock Solution:</strong></p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Potassium dihydrogen phosphate: 42.5g</li>
                <li>Distilled Water: 1000ml</li>
              </ul>
              <p>Dissolve the salt in 500ml of distilled water. Adjust the pH using 1N NaOH or HCl solutions so that after sterilization it is 7.2 at 25°C. Dilute to 1000ml. Distribute in screw capped sample bottles. Sterilize them at 121°C for 15 minutes. Store the stock solution under refrigeration.</p>
              <p><strong>Bench Solution:</strong> Add 1ml of the stock solution to 1000ml of water for use as diluent. Dispense 9 ml of the diluent into test tubes. Stopper the tubes and sterilize by autoclaving at 121°C for 15 minutes.</p>
              
              <h4 class="font-semibold mt-4 mb-2">2.1.3 Preparation of Medium:</h4>
              <p>Plate Count Agar or Standard Method Agar is used. Prepare the medium by dissolving the ingredients in distilled water. Adjust the pH of the medium, so that it would be 7.0 ± 0.2 at 25°C after sterilization.</p>

              <h4 class="font-semibold mt-4 mb-2">2.1.4 Preparation of Test Samples:</h4>
              <p>Thoroughly agitate the raw or pasteurized milk sample by rapidly inverting the container 25 times so that micro-organisms are distributed as evenly as possible.</p>

              <h4 class="font-semibold mt-4 mb-2">2.1.5 Preparation of decimal dilutions:</h4>
              <p>Remove 1ml of the test sample with a pipette and add to 9ml diluent. Shake this primary dilution using a mechanical shaker for 5 to 10 seconds. Prepare further dilutions like 10⁻², 10⁻³, etc. using a fresh pipette for each dilution.</p>

              <h4 class="font-semibold mt-4 mb-2">2.1.6 Inoculation and Incubation:</h4>
              <p>Transfer 1ml of each appropriate dilution to two sterile petridishes. Pour about 15ml of the plate-count medium (at 45°C) into each petridish. Carefully mix the inoculum with the medium and allow the mixture to solidify. After complete solidification, invert the prepared dish and incubate in the incubator set at 37°C for 48h ± 3h.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">2.2 Calculation and expression of results:</h4>
              <p>Retain the dishes containing between 15 and 300 colonies. Calculate the number N of microorganisms present in the test sample using the following equation:</p>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Where ΣC = sum of colonies on all dishes retained, n1 = number of dishes in first dilution, n2 = number of dishes in second dilution, d = dilution factor of the first dilution.</p>
              <h4 class="font-semibold mt-4 mb-2">2.2.4 Interpretation:</h4>
              <p>Counts greater than 35000 per ml of pasteurized milk indicate unsatisfactory conditions. The following standards are suggested for grading raw milk:</p>
              <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Very good:</strong> Not exceeding 2,00,000</li>
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
          "The coliform group of bacteria comprises all aerobic and facultative anaerobic, gram-negative, non-spore forming rods able to ferment lactose with the production of acid and gas at 30°C, 35°C or 37°C within 48 hrs. The presence of these coliforms in dairy products is suggestive of unsanitary conditions or practices during production processing or storage.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">3.1.2 Preparation of Medium:</h4>
              <p>Violet Red Bile Agar (VRBA) medium is used. Prepare the medium by dissolving the ingredients in distilled water. Bring to boil. Avoid overheating. Consequently do not autoclave the medium.</p>
              <h4 class="font-semibold mt-4 mb-2">3.1.4 Inoculation and Incubation:</h4>
              <p>Transfer 1ml of each appropriate dilution to two sterile petridishes. Pour about 15ml of the VRBA medium, mix and allow to solidify. After complete solidification, pour about 4 ml of the VRBA medium on the surface. Incubate them at 37°C for 24h ± 2h. Retain the dishes containing not more than 150 colonies. Characteristic colonies of coliforms are dark or purplish red colonies having a diameter of 0.5 mm or greater and sometimes surrounded by reddish zone of precipitated bile.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">3.2 Calculation and Expression of Result:</h4>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Where ΣC = sum of characteristic colonies on all dishes retained, n1 = number of dishes in first dilution, n2 = number of dishes in second dilution, d = dilution factor of the first dilution.</p>
              <h4 class="font-semibold mt-4 mb-2">3.3 Interpretation:</h4>
              <p>Absence of coliform bacteria in 1/100 dilution (0.01 ml) in the case of raw milk and 1/10 dilution (0.1ml) in the case of pasteurized milk is accepted as criterion of satisfactory quality.</p>
            `,
      },
      {
        id: "dmscc",
        title: "Direct Microscopic Somatic Cell Count (DMSCC)",
        principle:
          "The number of somatic cells in raw milk provides a measure of the presence and the extent of mastitis or certain other abnormal milk secretions. DMSCC is applied as one of the officially recognized procedures for confirming the somatic cell counts, which were previously estimated by one of several screening tests.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">4.2.1 Estimation of Single Strip Factor (SSF):</h4>
              <p>Place a clean stage micrometer on the stage of the microscope. Focus sharply and centre the scale in the microscopic field under oil immersion objective. Determine diameter (d) of the microscopic field in mm. Calculate the SSF: <code>SSF = 10000 / (area of the single strip)</code></p>
              <h4 class="font-semibold mt-4 mb-2">4.2.2 Preparation of Milk Film:</h4>
              <p>Warm the milk sample to 40°C. Shake thoroughly. Take out 0.01ml milk using a pipette or calibrated loop. Spread the milk uniformly over the entire 1cm² area of the slide. Dry films at 40 to 45°C within five minutes.</p>
              <h4 class="font-semibold mt-4 mb-2">4.2.3 Defatting, Fixing and Staining of the Smear:</h4>
              <p>Dip the slides for ten minutes in a jar containing Newman's stain. Remove, drain, and allow the slides to dry thoroughly. Rinse the slides in water until all the surplus dye is washed away. Drain and air-dry before examining the film under microscope.</p>
              <h4 class="font-semibold mt-4 mb-2">4.2.4 Examination and Counting of stained Films:</h4>
              <p>Examine each film with an oil immersion objective. Count only those somatic cells with an identifiable stained nucleus. To make a single strip count, traverse the entire diameter of the milk film, counting all the cells within the strip and also the cells touching one edge of the strip.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">4.2.5 Calculation and Expression of Results:</h4>
              <code>DMSCC per ml = No. of somatic cells in a single strip × SSF</code>
              <p>Round off the answer to two significant figures.</p>
              <h4 class="font-semibold mt-4 mb-2">4.3 Interpretation:</h4>
              <p>The presence of more than 500,000 somatic cells/ml of milk is indicative of mastitis.</p>
            `,
      },
      {
        id: "drug_residues",
        title: "Veterinary Drug Residues (Delvotest)",
        principle:
          "The Delvotest is used to detect the presence of drug residues in milk. The principle of the method involves germination and growth of spores of a specific bacteria (Bacillus-stearo thermophilus var. calidolactis) embedded in agar upon the addition of nutrients and milk. If milk is free of inhibitory substances, the growth of these spores produce acid, which changes the colour of the agar from purple to yellow. However, if milk contains certain inhibitory substances, these will diffuse into the agar medium and prevent the growth and subsequently the acid production by the bacteria and the medium remains purple in colour.",
        procedure: `
              <h4 class="font-semibold mt-4 mb-2">5.2 Procedure:</h4>
              <p>Follow the protocol of the manufacturer of the kit supplied along with each kit. Report the result as negative for antibiotics, if the colour of the medium changes to yellow and positive for the presence of antibiotics, if the colour remains purple after the specified incubation period. Delvotest can give false positive reactions, if milk has added neutralizers, formalin and hydrogen peroxide.</p>
              <p>If found positive for the presence of inhibitory substances in the screening test and negative for the presence of added neutralizers, hydrogen peroxide and formalin proceed as follows for determining the presence of beta lactam antibiotics and/or sulfonamides: Add 0.1 ml of a solution of 10 IU of penicillinase per ml of water to 1.0ml of milk sample. Shake well and let it stand for 15 minutes at room temperature.</p>
            `,
        calculation: `
              <h4 class="font-semibold mt-4 mb-2">5.5 Interpretation:</h4>
              <p>After adding 0.1 ml of milk sample, the ampoule is incubated for 2.5h at 63°C to 66°C. In the absence of anti-microbial substances, the whole of the solid medium turns yellow (negative), whereas it remains purple in the presence of sufficiently high concentrations of antibiotic. In case of doubtful results, the medium turns slightly yellow.</p>
            `,
      },
      {
        id: "yeast_mould",
        title: "Yeast and Mould Count",
        principle:
          "Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.",
        procedure: `
               <ol class='list-decimal list-inside space-y-2 mt-2'>
                <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
                <li><strong>Plating:</strong> Transfer 1ml of each dilution to sterile Petri plates (Spread Plate method is better).</li>
                <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), with pH adjusted to ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
                <li><strong>Incubation:</strong> Incubate plates at 22-25°C for 5 days.</li>
                <li><strong>Counting:</strong> Count colonies of yeasts (typically shiny, round) and moulds (cotton-like, spreading) separately.</li>
              </ol>`,
        calculation:
          "<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>",
      },
      {
        id: "media_prep",
        title: "Preparation of Media",
        principle: `Various culture media (liquid, semi-solid and solid) are used' in a bacteriological laboratory for the cultivation of micro-organisms, for studying their growth and physiological characteristics and for determining the number of viable organisms. In addition to natural media like milk several artificial media, containing different nutrients required for the growth of organisms, are employed for the purpose.`,
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2. Adjustment of reaction (pH) of media.</h4>
                <p>The reaction (pH) of the medium is one of the most important factors influencing the growth of micro-organisms. Most species of bacteria grow well when the reaction is neither acidic nor alkaline i.e. neutral (pH 7.0). Yeasts and moulds require a' pronounced acid environment (pH 4 to 5) for their growth. In the preparation of culture media for the cultivation of micro-organisms adjustment of the reaction (pH) of the medium to the required level is a very important step.</p>
                <h4 class="font-semibold mt-4 mb-2">3. Preparation of nutrient broth and nutrient agar.</h4>
                <p>Nutrient broth is a liquid medium commonly used for the cultivation of aerobic organisms and also as a basal medium for a variety of physiological tests. Addition of agar to the broth gives a solid medium (nutrient agar) used for cultivation of several bacterial species and for determination of viable bacterial numbers.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Preparation of potato dextrose agar.</h4>
                <p>Potato dextrose agar is a selective medium used for the cultivation of yeasts and molds. The use of a potato extract promotes growth of yeasts and molds, and the low pH (3.5) helps to inhibit the growth of bacteria while favouring the growth of yeasts and molds.</p>
                <h4 class="font-semibold mt-4 mb-2">5. Preparation of Mac Conkey's bile salt broth and agar and desoxycholate agar.</h4>
                <p>This is a selective medium used for the cultivation of coliform organisms. The presence of sodium taurocholate (bile salt) in the medium lowers surface tension thereby favouring the growth of coliform bacteria. Hence it is of great value in the detection -and isolation of coliform organisms. The medium is used for performing the presumptive coliform test for milk and water samples.</p>
            `,
        calculation: "",
      },
      {
        id: "bacteriology_air",
        title: "Bacteriology of Air",
        principle:
          "Air is not a natural environment for the growth and reproduction of micro-organisms but a few types of organisms (e.g. aerobic spore formers, micrococci, mold spores) may, however, be found in association with dust particles suspended in the air. A knowledge of the numbers and types of micro-organisms present in the atmosphere inside dairies, cattle byres and food factories, is very important for controlling contamination of milk, milk products and other materials.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Pour two plates with melted nutrient agar and two plates with sabouraud agar. Allow the media to set and harden.</li>
                    <li>Remove the tops from the plates.</li>
                    <li>Place one plate of each medium on the floor of the milking shed etc. and allow them to be exposed for 5 minutes. Immediately replace the tops.</li>
                    <li>Place one plate of each medium on the laboratory bench, allow the plates to be exposed for 15 minutes and immediately replace to tops.</li>
                    <li>Incubate the nutrient agar plates at 37°C for 2 days and the sabouraud agar plates at 22°C for 3 to 4 days.</li>
                    <li>At the end of the incubation period count the number of colonies in each plate.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
                <p>Number of organisms per c.ft. per minute should not exceed one for satisfactory atmosphere.</p>
            `,
      },
      {
        id: "sterility_equipment",
        title: "Assessing Sterility of Plant and Equipment",
        principle:
          "The sanitary condition of plant and equipment including storage tanks, vats, coolers, pipelines, heat exchangers, agitators fittings etc. is tested by applying the swab technique. In this method a sterile cotton or wire-gauge swab (wetted with buffer solution) is rubbed over the surface of the equipment and the bacterial cells removed from the surface are transferred into sterile buffer solution and their numbers estimated by standard plate count.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Press the swab with a rolling motion against the side of the glass tube to remove the excess liquid and take it out of the tube.</li>
                    <li>Rub the swab with heavy pressure back and forth over the area to be examined so that all parts of the surface are treated twice.</li>
                    <li>After rubbing the required area return the swab to the solution in the tube.</li>
                    <li>Allow the swab to be immersed in the liquid for 5 minutes and mix by swirling vigorously.</li>
                    <li>Prepare 1/10 dilution of the sample and plate 1ml portions of the swab sample and the dilution in duplicate.</li>
                    <li>Incubate plates at 37°C for 48 hours.</li>
                </ol>
            `,
        calculation: `
                <p>The average count multiplied by 25 gives the colony count of the total area swabbed. Express the result as colony count per 900 sq.cm area.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
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
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Add 20ml of Ringer's or buffer solution to the bottle and replace the bung.</li>
                    <li>Hold the bottle horizontally, rotate gently 12 times in one direction and also shake lengthwise 12 times so as to wet the whole of the internal surface.</li>
                    <li>Allow the bottle to stand for 15 to 30 minutes and again gently rotate 12 times.</li>
                    <li>Transfer 1ml and 5ml portions of the rinse solution to two sets of petridishes in duplicate, pour the agar medium, and incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
        calculation: `
                <p>The average of the counts in duplicate plates multiplied by 20 (in the case of plates containing 1ml of the rinse) and by 4 (if the plates contained 5ml of the rinse) gives the colony count per bottle.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
                <p>Colony count of more than one colony per ml of the capacity of the bottle is an indication of unsatisfactory sterility.</p>
            `,
      },
      {
        id: "sterility_cans",
        title: "Assessing Sterility of Milk Cans",
        principle:
          "The sanitary condition of milk can is tested by the rinse technique.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">3. Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Make a visual inspection of each can.</li>
                    <li>Pour 500ml of sterile Ringer's or buffer solution over the inside of the lid into the can.</li>
                    <li>Replace the lid, lay the can on its side and roll it to and fro so that it makes 12 complete revolutions.</li>
                    <li>Pour the rinse sample from the can into a sterile bottle.</li>
                    <li>Prepare 1/10 dilution of the sample and plate 1ml of the sample and the dilution in duplicate.</li>
                    <li>Incubate plates at 37°C for 48 hours.</li>
                </ol>
            `,
        calculation: `
                <p>The average of the counts in duplicate plates (multiplied by 10 in the case of 1/10 dilution) represents the colony count per ml of the rinse sample.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Interpretation</h4>
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
          "The quality of dahi and other fermented milk preparation is likely to be seriously impaired if undesirable micro organisms (e.g. coliform bacteria, yeasts, molds) gain entry during manufacture from milk, starter-culture, unsterile equipment and atmosphere.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2.2 Presumptive Coliform Test</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Prepare dilutions of 1:10 and 1:100 of the dahi sample.</li>
                    <li>Transfer 1g portions of dahi and its dilutions into Mac Conkey's broth tubes in triplicate.</li>
                    <li>Incubate the tubes for 24 hours at 37°C and observe for the production of acid and gas.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">2.3 Yeast and mold count</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Weigh 10 gram of dahi and transfer to 90 ml dilution blank to get 1:10 dilution.</li>
                    <li>Prepare further dilutions and plate on Potato Dextrose Agar (pH 3.5).</li>
                    <li>Incubate the plates at 21°C or 25°C for 5 days.</li>
                    <li>Count the number of colonies and compute the number per gram.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Dahi of good quality should give a negative coliform test in 1/10 dilution. If yeast and mold count exceeds 100 per gram of dahi poor quality is indicated.</p>
            `,
      },
      {
        id: "starter_cultures",
        title: "Starter Cultures",
        principle:
          "Selected strains of lactic acid bacteria are used as starter cultures in the manufacture of several milk products. It is necessary to test periodically the activity of the cultures and their ability to produce acid or flavour compounds.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2.1.1 Acidity test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 0.3ml of culture to 10ml of skim milk.</li>
                    <li>Incubate at 37°C for 3.5 hours.</li>
                    <li>Titrate against 0.1 N NaOH solution and calculate acidity.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">2.1.2 Dye Reduction Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 1ml of culture to 10ml of sterile skim milk.</li>
                    <li>Add one ml MBR-solution and incubate at 37°C. Note the time of decolourisation.</li>
                </ol>
                 <h4 class="font-semibold mt-4 mb-2">2.1.3 Creatine Test (test for diacetyl):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 2-2.5ml of culture into a test tube and add a small quantity of creatine.</li>
                    <li>Add equal quantity of 30% potassium hydroxide solution and shake.</li>
                    <li>Observe the formation of a pink band on the surface.</li>
                </ol>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Acidity of 0.35% or more indicates satisfactory culture. Methylene blue reduction time less than 35 minutes is very good. Formation of a pink band in creatine test indicates active flavour production.</p>
            `,
      },
      {
        id: "cream_analysis",
        title: "Bacteriological Analysis of Cream",
        principle:
          "Milk cream being susceptible to contamination, the methods of bacteriological analysis and the interpretation of results are similar to those adopted for milk.",
        procedure: `
                <h4 class="font-semibold mt-4 mb-2">2. Standard Plate Count of Cream</h4>
                <p>Prepare dilutions and plate on standard plate count agar. Incubate at 37°C for 48 hours.</p>
                <h4 class="font-semibold mt-4 mb-2">3. Presumptive Coliform test for Cream</h4>
                <p>Plate on Violet Red Bile Agar (VRBA) and incubate at 37°C for 24-48 hours. Count characteristic colonies.</p>
                <h4 class="font-semibold mt-4 mb-2">4. Methylene blue reduction test for cream</h4>
                <p>Use triple concentration Methylene blue solution and incubate at 37°C. Note the time for decolourisation.</p>
            `,
        calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Standards for raw and pasteurized cream are suggested based on SPC, coliform test, and MBRT results.</p>
            `,
      },
    ],
  },
};
