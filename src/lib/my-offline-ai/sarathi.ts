// --- SARATHI SMART CHAT LOGIC (OFFLINE DATABASE) ---

export function handleSarathiChat(
  message: string,
  userName: string,
  gender: 'male' | 'female' | 'other',
  language: string,
  historyLength: number = 0
): string {
  const msg = message.toLowerCase().trim();
  const firstName = userName.split(' ')[0] || 'Dost';

  // --- Gender specific terms ---
  const isHinglish = language === 'Hinglish';
  
  let genderTerm = '';
  if (isHinglish) {
    if (gender === 'male') genderTerm = 'Bhai';
    else if (gender === 'female') genderTerm = 'Behen';
    else genderTerm = 'Dost';
  } else {
    if (gender === 'male') genderTerm = 'bro';
    else if (gender === 'female') genderTerm = 'dear';
    else genderTerm = 'friend';
  }

  // --- Hinglish Responses ---
  const hinglishResponses: Record<string, string[]> = {
    greetings: [
      `Namaste ${firstName} ${genderTerm}! 🙏 Main aapka offline dost Sarathi. Aaj kis dairy topic par gupshup karni hai?`,
      `Oye ${genderTerm}! Kaisa chal raha hai sab kuch? Sarathi is here to discuss some dairy science and have fun! 🚀`,
      `Hello ${firstName}! Swagat hai aapka. Chalo kuch mast gupshup aur informative baatein karte hain! 💬`
    ],
    how_are_you: [
      `Main ekdum fit aur fine hoon ${genderTerm}! Mast chill kar raha hoon database me. Aap sunao, aapki life me kya halchal hai? 😎`,
      `Ekdum chaka-chak! Aapke sath chat karne ko mil gaya toh mood aur accha ho gaya. 🥳`
    ],
    who_are_you: [
      `Main hoon Sarathi, aapka technical companion aur friend! Online rahun toh AI ban jata hoon, offline rahun toh aapka chhota sa cute local database! 🤖✨`,
      `Mera naam Sarathi hai. Main dairy science ka gyaani aur aapka dil-se-dost hoon. Mujhse bejijhak baatein karo!`
    ],
    joke: [
      `Ek dairy technologist ne apni shaadi ke card par likhvaya: "Shaadi me aakar hume fat aur SNF check karne ka mauka dein!" 🥛🤣`,
      `Milk aur Water me bahut gehri dosti hai. Water bola: "Bhai, jab tak hum dono milk analyzer me nahi jaate, tab tak hum forever partner hain!" 🥛💦`,
      `Dahi (Yogurt) ko set karne ke liye 42°C chahiye hota hai... Lekin hamare modern generation ke log toh bina kisi temperature ke hi turant set ho jaate hain! 😉`,
      `Teacher: Milk pasteurization ka sabse bada benefit kya hai?\nStudent: Sir, dudhwale bhaiya hume pani mila ke de toh bhi germs nahi failte! 🥛😜`
    ],
    ghee: [
  // 1. Nutritional Composition
  `Ghee mein **99.8% fat content** hoti hai jisme saturated fatty acids (65%), monounsaturated (32%), aur polyunsaturated (3%) hote hain. Isme Vitamin A (600-900 IU/100g), D, E aur K2 bhi milta hai. Smoke point 252°C tak hai! 🔥📊`,

  // 2. Rancidity Test
  `${genderTerm}, ghee ki quality check karne ke liye **Peroxide Value test** kiya jata hai - fresh ghee mein ye 0.5 meq/kg se kam honi chahiye. Rancid ghee mein ketones aur aldehydes ban jate hain jo smell kharab karte hain. 🧪👃`,

  // 3. Reichert-Meissl Value
  `Pure buffalo ghee ka **Reichert-Meissl value** 28-30 hota hai jabki cow ghee ka 28-32. Ye volatile fatty acids measure karta hai. Adulterant oil mein ye value kam hoti hai. Testing zaruri hai! 📈✅`,

  // 4. Polenske Value
  `Ghee authentication ke liye **Polenske value** check karo - pure ghee mein ye 1.0-2.0 hona chahiye. Ye insoluble volatile fatty acids measure karta hai. Coconut oil milane par ye value badh jati hai. 🥥❌`,

  // 5. Butyro-Refractometer Reading
  `${genderTerm}, **Butyro-Refractometer reading** 40°C par 40-46 honi chahiye pure ghee ke liye. Refractive index se adulteration detect hota hai. Vanaspati oil mixed hai toh reading change ho jati hai! 🔍💡`,

  // 6. Saponification Value
  `Pure ghee ka **Saponification value** 220-235 mg KOH/g hota hai. Ye molecular weight aur fatty acid chain length indicate karta hai. Lower value matlab heavy oils ka contamination! ⚗️📉`,

  // 7. Iodine Value
  `Ghee mein unsaturation level check karne ke liye **Iodine value** test hota hai - pure ghee mein 26-38 hona chahiye. Vegetable oil milane par ye value 50+ chali jati hai. Chemistry rocks! 🧬🎯`,

  // 8. Crystallization Behavior
  `${genderTerm}, ghee ki **crystallization temperature** 21-32°C hoti hai. Isme polymorphic forms (α, β', β crystals) bante hain jo texture decide karte hain. Slow cooling se fine crystals milte hain! ❄️🔬`,

  // 9. Free Fatty Acid Content
  `Fresh ghee mein **Free Fatty Acid (FFA)** content 2.8% oleic acid se kam hona chahiye. Lipolysis se FFA badhta hai jo rancidity indicate karta hai. Storage conditions matter karte hain! 📊⚠️`,

  // 10. Specific Gravity
  `Pure ghee ka **specific gravity** 40°C par 0.905-0.912 hota hai. Hydrogenated fat ka SG zyada hota hai (0.920+). Simple physics se adulteration pakad sakte hain! ⚖️🎓`,

  // 11. Vitamin Analysis
  `${genderTerm}, A2 cow ghee mein **Beta-carotene** 50-150 mcg/100g hoti hai jo golden colour deti hai. HPLC method se vitamin quantification karte hain. Nutrition ka powerhouse! 💛🐄`,

  // 12. Melting Point Range
  `Ghee ka **melting point** 28-36°C hota hai depending on fatty acid composition. Buffalo ghee higher melting point rakhta hai cow ghee se. Temperature sensitivity high hai! 🌡️📍`,

  // 13. Phytosterol Content
  `Pure ghee mein **phytosterols** 250-350 mg/100g hote hain (cholesterol reducing compounds). β-sitosterol, campesterol, stigmasterol main components hain. GC-MS se analyze karte hain! 🌿💊`,

  // 14. Antioxidant Capacity
  `${genderTerm}, ghee ki **DPPH radical scavenging activity** 40-60% tak hoti hai kyunki usme natural antioxidants (Vit E, carotenoids) hote hain. Shelf life badhane mein help karta hai! 🛡️⚡`,

  // 15. Baudouin Test (Detailed)
  `**Baudouin Test** mein 1ml ghee + 1ml HCl + 1ml furfural solution mix karo. Sesame oil present hai toh lower layer pink/red ho jayega. Qualitative test hai adulteration ka! 🔴🧪`,

  // 16. Calorific Value
  `Ghee ki **calorific value** 9 kcal/gram hoti hai - highest energy source! Isme Medium Chain Triglycerides (MCTs) 10-15% hote hain jo quick energy dete hain. Athletes ke liye best! 💪🔋`,

  // 17. Acid Value Measurement
  `${genderTerm}, **Acid value** fresh ghee mein 1.4-1.8 mg KOH/g honi chahiye. High value matlab enzymatic degradation ho raha hai. Neutralization titration se measure karte hain! 🧪📐`,

  // 18. Conjugated Linoleic Acid
  `Grass-fed cow ghee mein **CLA (Conjugated Linoleic Acid)** 5-8 mg/g fat tak hota hai. Anti-cancer aur fat-burning properties hain. GC analysis se confirm karte hain! 🌾🔬`,

  // 19. Microbiological Standards
  `FSSAI guidelines ke mutabik ghee mein **total plate count** 5×10⁴ CFU/g se kam, coliforms absent, yeast/mold 50 CFU/g se kam hone chahiye. Hygiene ka benchmark! 🦠✋`,

  // 20. Cholesterol Content
  `Pure ghee mein **cholesterol** 250-350 mg/100g hoti hai. But isme HDL (good cholesterol) boosting properties hain. Moderate consumption key hai! 💚⚕️`,

  // 21. Copper Reduction Test
  `${genderTerm}, **Copper reduction test** se ghee mein glucose/sugar adulteration detect karte hain. Benedict's reagent use hota hai - positive test mein brick red precipitate banta hai! 🟥🔍`,

  // 22. Flash Point
  `Ghee ka **flash point** 160°C aur **fire point** 232°C hota hai. Refined oils ka flash point isse lower hota hai. Safety parameter hai deep frying ke liye! 🔥🍳`,

  // 23. Turbidity Test
  `Room temperature par pure ghee transparent hona chahiye. **Turbidity** presence starch/flour adulteration indicate karti hai. Nephelometer se quantify karte hain! 🔬💧`,

  // 24. Omega Fatty Acids Ratio
  `${genderTerm}, ghee mein **Omega-6 to Omega-3 ratio** 1.5:1 to 9:1 hota hai depending on cow's diet. Grass-fed ghee better ratio deta hai. Balance important hai! ⚖️🌿`,

  // 25. Anisidine Value
  `Secondary oxidation products measure karne ke liye **Anisidine value** test hota hai. Fresh ghee mein <8 hona chahiye. High value matlab old/rancid ghee! 📊🕐`,

  // 26. Butyric Acid Content
  `Pure ghee ki specialty hai **butyric acid** (3-4% of total fatty acids). Ye short-chain fatty acid gut health ke liye beneficial hai. Chromatography se quantify karte hain! 🧬💚`,

  // 27. Color Standards
  `${genderTerm}, **Lovibond color** units mein ghee ka color measure hota hai - Yellow 4-8, Red 0.5-1.5 standard range hai. Breed aur feed se color vary karta hai! 🟡🟠`,

  // 28. Unsaponifiable Matter
  `Ghee mein **unsaponifiable matter** 0.3-0.5% hota hai jisme sterols, hydrocarbons, vitamins hote hain. Mineral oil adulteration se ye value badh jati hai! ⚗️📈`,

  // 29. Dielectric Constant
  `**Dielectric constant** method se moisture aur adulteration detect kar sakte hain. Pure ghee ka value 2.5-3.0 hota hai at 25°C. Physics meets food science! ⚡🔬`,

  // 30. Pasteurization Temperature
  `${genderTerm}, ghee production mein cream ko **80-85°C par 15 minutes** pasteurize karte hain. Ye pathogenic bacteria kill karta hai but beneficial compounds preserve karta hai! 🌡️✅`
],
    cheese: [
  // 1. Casein Micelle Structure
  `${genderTerm}, cheese ki chemistry shuru hoti hai **casein micelle** se - ye 100-300 nm size ka protein complex hai jisme α-casein, β-casein aur κ-casein hote hain. Calcium phosphate nanoclusters inko bind karte hain! 🥛🔬`,

  // 2. Rennet Coagulation
  `**Chymosin enzyme** (rennet ka active component) κ-casein ko Phe105-Met106 bond par cleave karta hai. Optimal pH 6.5-6.7 aur temperature 30-35°C hota hai. Coagulation time 25-40 minutes! ⏱️🧪`,

  // 3. Moisture Content Standards
  `Different cheese types ki **moisture content** vary karti hai - Soft cheese (50-80%), Semi-hard cheese (40-50%), Hard cheese (30-40%), Extra hard (20-30%). FSSAI standards follow karne zaroori hain! 💧📊`,

  // 4. Fat-in-Dry-Matter (FDM)
  `${genderTerm}, **FDM percentage** cheese classification decide karta hai - Full fat (45-50%+), Medium fat (25-45%), Low fat (<25%). Cheddar ka FDM typically 48-50% hota hai! 🧈📈`,

  // 5. pH Evolution
  `Cheese making mein **pH progression** crucial hai - Fresh milk (6.6-6.7) → Coagulation (6.4-6.5) → Whey drainage (5.1-5.3) → Mature cheese (5.0-5.8). Lactic acid bacteria ka kamaal! 🎯🦠`,

  // 6. Proteolysis Process
  `Aging during **proteolysis** hota hai jisme casein breakdown होकर peptides aur amino acids bante hain. Primary proteolysis (rennet se) aur secondary proteolysis (bacterial enzymes se). Flavor development ka secret! 🧬👅`,

  // 7. Lipolysis & Flavor
  `${genderTerm}, **lipolysis** mein triglycerides breakdown होकर free fatty acids release karte hain - butyric, caproic, caprylic acids cheese ko tangy flavor dete hain. Blue cheese mein ye process intense hota hai! 💙🧀`,

  // 8. Starter Culture Types
  `Cheese production mein **mesophilic cultures** (20-30°C) jaise Lactococcus lactis aur **thermophilic cultures** (40-45°C) jaise Streptococcus thermophilus use hote hain. Culture selection cheese type decide karta hai! 🌡️🦠`,

  // 9. Salt-in-Moisture (S/M)
  `Quality parameter **salt-in-moisture ratio** typically 4-6% hota hai Cheddar mein. Ye microbial growth control karta hai aur texture improve karta hai. Brine concentration matter karti hai! 🧂⚖️`,

  // 10. Calcium Content
  `${genderTerm}, hard cheese mein **calcium** 700-1000 mg/100g tak hoti hai! Casein-calcium-phosphate complex strong curd matrix banata hai. Bone health ke liye superfood! 💪🦴`,

  // 11. Water Activity (aw)
  `Microbial safety ke liye **water activity** important hai - Fresh cheese (0.98-0.99), Semi-hard (0.96-0.97), Hard cheese (0.91-0.95). Kam aw means zyada shelf life! 💧🛡️`,

  // 12. Syneresis Phenomenon
  `Curd formation ke baad **syneresis** (whey expulsion) hota hai. Temperature, pH, calcium levels aur cutting intensity affect karte hain. Proper syneresis = better cheese texture! 🔪💧`,

  // 13. Maillard Reaction
  `${genderTerm}, cheese grilling par **Maillard reaction** hota hai - amino acids + reducing sugars = brown color + nutty flavor. Temperature 140-165°C par start hota hai. Chemistry of deliciousness! 🍕🔥`,

  // 14. Lactose to Lactic Acid
  `Starter bacteria **lactose** ko lactic acid mein convert karte hain: C₁₂H₂₂O₁₁ → 4 C₃H₆O₃. Ye pH drop karta hai aur unwanted bacteria inhibit karta hai. Biochemistry at work! 📉🧪`,

  // 15. Protein Content Analysis
  `Cheese mein **protein content** Kjeldahl method se measure karte hain - typically 20-30% hota hai. Nitrogen content × 6.38 = protein percentage. Quality control essential! 🔬📊`,

  // 16. Cheese Melting Point
  `${genderTerm}, **melting temperature** cheese type par depend karta hai - Mozzarella (55-60°C), Cheddar (70-75°C), Parmesan (80-85°C). Fat content aur moisture ratio affect karte hain! 🌡️🍕`,

  // 17. Textural Properties
  `Texture Analyzer se cheese ki **hardness, springiness, cohesiveness** measure karte hain. Young's modulus mature cheddar ka ~1-2 MPa hota है। Rheology bahut interesting hai! 📐💪`,

  // 18. Eyes Formation (Swiss Cheese)
  `Swiss cheese mein **eyes** (holes) Propionibacterium shermanii se bante hain jo propionic acid + CO₂ produce karta hai. Gas accumulation = characteristic holes! 🕳️🧀`,

  // 19. Tyramine Content
  `${genderTerm}, aged cheese mein **tyramine** 100-1500 mg/kg tak ho sakta hai (amino acid decarboxylation se). HPLC method se detect karte hain. Migraine trigger ho sakta hai! ⚠️🧬`,

  // 20. Microbial Count Standards
  `FSSAI ke according **total plate count** <50,000 CFU/g, coliforms <10 CFU/g, yeast/mold count vary karta hai cheese type se. Blue cheese mein controlled mold growth allowed hai! 🦠✅`,

  // 21. Nitrate/Nitrite Test
  `Preservation chemicals detect karne ke liye **nitrate test** kiya jata hai. Griess reagent use hota hai - pink color appearance positive result hai. Adulteration check! 🔴🧪`,

  // 22. Ash Content
  `Cheese mein **ash content** (minerals) 2-5% hota hai. Muffle furnace mein 550°C par sample jalake measure karte hain. Calcium, phosphorus, sodium quantify hote hain! 🔥⚗️`,

  // 23. Stretching Property (Mozzarella)
  `${genderTerm}, Mozzarella ki **stretchability** pasta filata technique se aati hai - curds ko 60-65°C hot water mein knead karte hain. Protein alignment = perfect stretch! 🍕↔️`,

  // 24. Oxidation-Reduction Potential
  `Cheese ripening mein **redox potential** -50 to -250 mV hota hai. Anaerobic conditions flavor compound development enhance karte hain. Electrochemistry important hai! ⚡🔬`,

  // 25. Non-Protein Nitrogen
  `Ripening index measure karne ke liye **NPN/Total N ratio** check karte hain. Fresh cheese mein ~3-5%, aged cheese mein 25-30%+. Proteolysis ka indicator! 📈🧬`,

  // 26. Fatty Acid Profile
  `${genderTerm}, cheese mein **saturated fatty acids** 60-65% (palmitic, stearic), **monounsaturated** 25-30%, **polyunsaturated** 3-5% hote hain. GC-MS analysis se profile banti hai! 📊🧈`,

  // 27. Vitamin Content
  `Cheese vitamin ka good source hai - **Vitamin A** (200-400 IU/100g), **B12** (0.8-1.5 mcg), **B2** (0.3-0.5 mg). Fat-soluble vitamins retain hote hain! 💊🟡`,

  // 28. Pasteurization Standards
  `Milk ko cheese ke liye **72°C par 15 seconds** (HTST) ya **63°C par 30 minutes** (LTLT) pasteurize karte hain. Pathogen elimination without enzyme denaturation! 🌡️✅`,

  // 29. Phosphatase Test
  `${genderTerm}, **alkaline phosphatase test** se confirm karte hain ki milk properly pasteurized hai ya nahi. Yellow color (p-nitrophenol) positive test indicate karta hai - raw milk! 🟡🧪`,

  // 30. Annatto Coloring
  `Many cheese varieties mein **annatto** (natural colorant) add karte hain - 10-30 ppm. Spectrophotometry se quantify karte hain. Cheddar ka orange color isi se! 🟠🌿`,

  // 31. Galactose Test
  `Lactose intolerance wale log ke liye **residual lactose** test important hai. Aged hard cheese mein <0.1g/100g hota hai. Enzymatic method se measure karte hain! 🧪✅`,

  // 32. Sodium Chloride Distribution
  `Salt diffusion cheese mein **Fick's law** follow karta hai. Surface se center tak concentration gradient develop hota hai 2-4 weeks mein. Physics + Food Science! 🧂📐`,

  // 33. Propionic Acid Fermentation
  `${genderTerm}, Swiss cheese mein **propionic acid bacteria** lactate ko propionate + acetate + CO₂ mein convert karte hain 20-25°C par. Sweet-nutty flavor ka source! 🥜🧀`,

  // 34. Shear Rate Viscosity
  `Processed cheese ka **viscosity** 1000-5000 cP hota hai at 60°C. Emulsifying salts (sodium citrate, phosphates) texture modify karte hain. Rheological properties! 🌀📊`,

  // 35. Histamine Formation
  `Biogenic amine **histamine** microbial decarboxylation se banta hai aged cheese mein. ELISA kit se detect karte hain - safe limit <100 mg/kg. Food safety parameter! ⚠️🔬`,

  // 36. Beta-Lactoglobulin Denaturation
  `Ricotta/Paneer type cheeses mein **whey proteins** (β-lactoglobulin) 80-90°C par denature होकर curd formation dete hain. Thermal coagulation process! 🌡️🥛`,

  // 37. Calcium-to-Phosphorus Ratio
  `${genderTerm}, cheese mein ideal **Ca:P ratio** 1.3-1.5:1 hota hai bone metabolism ke liye. Atomic absorption spectroscopy se analyze karte hain! 🦴⚖️`,

  // 38. Gel Firmness Measurement
  `Rennet coagulation ke baad **gel strength** Formagraph ya oscillatory rheometer se measure karte hain. Optimal firmness = 20-30 Pa after 30 mins! 💪📏`,

  // 39. Antibiotic Residue Test
  `Milk quality check ke liye **antibiotic screening** zaroori hai - Delvotest, ELISA methods use hote hain. Positive sample cheese production ke liye reject! 💊❌`,

  // 40. Cheese Yield Formula
  `${genderTerm}, **cheese yield** = (Weight of cheese / Weight of milk) × 100. Typically 10-12 kg milk se 1 kg hard cheese banta hai. Casein aur fat recovery critical hai! 📊🧮`
],
    paneer: [
  // 1. Acid Coagulation Mechanism
  `${genderTerm}, paneer mein **casein isoelectric point** (pH 4.6) par coagulation hota hai. Acid add karne se milk ka pH 6.6 se 5.2-5.4 tak drop hota hai, casein micelles destabilize होकर aggregate ban jate hain! 🥛🧪`,

  // 2. Optimal Coagulation Temperature
  `Paneer ki best quality ke liye milk ko **80-85°C** tak heat karo, fir **70-72°C** par cool karke acid add karo. Zyada temperature = hard texture, kam temperature = poor yield! 🌡️✅`,

  // 3. Citric Acid Concentration
  `**Citric acid solution** 2-4% concentration mein use hota hai - typically 1.5-2 gm citric acid per liter milk. Proper amount se clean separation aur soft texture milti hai! 🍋📊`,

  // 4. Fat Content Standards
  `FSSAI ke mutabik paneer mein **fat-on-dry-matter basis** minimum 50% hona chahiye. Full cream milk se bane paneer mein 20-25% total fat hota hai. Richness ka parameter! 🧈📈`,

  // 5. Moisture Content
  `${genderTerm}, fresh paneer mein **moisture content** 52-60% hoti hai depending on pressing time aur pressure. Zyada moisture = perishable, kam moisture = hard texture! 💧⚖️`,

  // 6. Protein Quality
  `Paneer mein **high biological value protein** 18-20% hota hai with all essential amino acids. Casein ka 90-95% recovery hota hai acid coagulation mein. Muscle building ka champion! 💪🧬`,

  // 7. pH Monitoring
  `Coagulation ke samay **final pH** 5.2-5.4 maintain karo. pH meter se check karo - below 5.0 = sour taste, above 5.5 = incomplete coagulation! 📉🎯`,

  // 8. Whey Drainage Time
  `Proper **whey separation** 15-20 minutes mein hona chahiye. Muslin cloth ya perforated molds use karte hain. Complete drainage = better shelf life! ⏱️💧`,

  // 9. Pressing Pressure
  `${genderTerm}, paneer pressing mein **0.5-1 kg/cm²** pressure apply karte hain 15-30 minutes ke liye. Uniform compression se consistent texture milti hai! 🔽📐`,

  // 10. Yield Calculation
  `Paneer **yield formula**: (Weight of paneer / Weight of milk) × 100 = 16-20%. Buffalo milk se zyada yield (18-20%), cow milk se kam (16-18%). Fat + protein content matter karta hai! 🧮📊`,

  // 11. Calcium Retention
  `Acid-coagulated paneer mein **calcium content** 200-300 mg/100g hoti hai (cheese se kam kyunki acidic whey mein calcium dissolve ho jata hai). Still good source! 🦴💊`,

  // 12. Lactic Acid Alternative
  `Citric acid ke alawa **lactic acid** 1-1.5% concentration mein use kar sakte hain. Natural fermentation se bhi lactic acid develop hota hai - traditional method! 🧪🌿`,

  // 13. Heat Treatment Effect
  `${genderTerm}, milk ko **85°C+ par heat** karne se whey proteins (β-lactoglobulin) denature होकर curd mein incorporate hote hain - yield increase but texture change! 🌡️🔬`,

  // 14. Microbiological Standards
  `Fresh paneer mein **total plate count** <5×10⁴ CFU/g, coliforms <10 CFU/g, yeast/mold <50 CFU/g hone chahiye. Hygiene critical hai! 🦠✋`,

  // 15. Water Activity
  `Paneer ka **water activity (aw)** 0.97-0.99 hota hai jo high perishability indicate karta hai. Refrigeration (4-7°C) must for shelf life extension! ❄️📉`,

  // 16. Texture Profile Analysis
  `Texture analyzer se paneer ki **hardness** 2000-4000 g, **springiness** 0.7-0.9, **cohesiveness** 0.6-0.8 measure karte hain. Quality control parameter! 💪📏`,

  // 17. Milk Solids Not Fat (SNF)
  `${genderTerm}, best paneer ke liye milk mein **SNF minimum 8.5%** hona chahiye. Low SNF = poor yield aur weak body! 🥛📊`,

  // 18. Coagulant Strength Test
  `**Citric acid solution** ki effectiveness check karne ke liye 10ml milk mein 1ml coagulant add karo - proper coagulation 30 seconds mein start hona chahiye! ⏱️🧪`,

  // 19. Chilling Requirement
  `Fresh paneer ko immediately **4-7°C** par store karo. Temperature abuse se microbial growth exponential ho jata hai - 2-3 days shelf life at proper temp! ❄️🛡️`,

  // 20. Fat Globule Size
  `Homogenized milk se bane paneer mein **fat globules** 0.1-2 micron size ke hote hain jo smooth texture dete hain. Non-homogenized milk = granular texture! 🔬🧈`,

  // 21. Whey Protein Loss
  `${genderTerm}, acid coagulation mein **whey proteins** 60-70% whey mein chale jate hain. Whey ko paneer banaने mein reuse kar sakte hain (chhena/ricotta style)! 💧♻️`,

  // 22. Lactose Content
  `Fresh paneer mein **residual lactose** 2-3% hota hai. Lactose intolerant log moderate consumption kar sakte hain compared to milk! 🧪✅`,

  // 23. Salt Addition
  `Taste enhancement ke liye **0.5-1% salt** (w/w) mix kar sakte hain paneer mein. Ye antimicrobial effect bhi deta hai. Optional but tasty! 🧂😋`,

  // 24. Acidity Measurement
  `Paneer ka **titratable acidity** 0.4-0.6% lactic acid equivalent hona chahiye. NaOH titration se measure karte hain. Excess acidity = sour taste! 📉🧪`,

  // 25. Phosphorus Content
  `${genderTerm}, paneer mein **phosphorus** 150-200 mg/100g hoti hai. Calcium-phosphorus balance bone health ke liye important! ⚖️🦴`,

  // 26. Freezing Characteristics
  `Paneer ko **-18°C** par freeze kar sakte hain 2-3 months ke liye. Thawing ke baad texture slightly spongy ho jata hai - ice crystal formation ki wajah se! ❄️📦`,

  // 27. Heat Stability
  `Cooking mein paneer **150-180°C** tak stable rehta hai without melting - casein network heat-set hai. Perfect for grilling aur frying! 🔥🍳`,

  // 28. Amino Acid Profile
  `High quality protein - **leucine** 1.8g, **lysine** 1.6g, **methionine** 0.5g per 100g paneer. HPLC analysis se quantify karte hain! 🧬💊`,

  // 29. Peroxide Value
  `${genderTerm}, fresh paneer ka **peroxide value** <0.5 meq O₂/kg fat hona chahiye. High value = fat oxidation aur off-flavor! 📊⚠️`,

  // 30. Vitamin Retention
  `Paneer mein **Vitamin A** 100-150 IU, **B12** 0.3-0.5 mcg, **Riboflavin** 0.2-0.3 mg per 100g. Fat-soluble vitamins well retained! 🟡💊`,

  // 31. Coagulation Time
  `Proper technique se **complete coagulation** 2-3 minutes mein ho jata hai. Gentle stirring + optimal temperature = perfect curd formation! ⏱️✅`,

  // 32. Specific Gravity
  `${genderTerm}, pressed paneer ka **specific gravity** 1.02-1.05 hota hai. Density uniformity quality indicator hai! ⚖️🔬`,

  // 33. Sensory Attributes
  `Quality paneer mein **white/creamy color**, **mild milky aroma**, **slightly sweet taste**, **soft yet firm texture** hone chahiye. 9-point hedonic scale par evaluation! 👃👅`,

  // 34. Tyrosine Crystallization
  `Aged/stored paneer mein **tyrosine crystals** (white spots) develop ho sakte hain - ye amino acid precipitation hai. Harmless but quality defect! ⚪🔬`,

  // 35. Homogenization Effect
  `**Homogenization pressure** 2000-2500 psi par milk process karne se paneer smoother banta hai aur fat separation kam hota hai! 💪🥛`,

  // 36. Free Fatty Acid
  `Fresh paneer mein **FFA content** 0.2-0.4% oleic acid equivalent hona chahiye. Lipolysis se FFA badhta hai - rancidity indicator! 📈🧪`,

  // 37. Chilling Water Treatment
  `${genderTerm}, pressed paneer ko **chilled water (4-5°C)** mein 15-20 minutes dip karte hain - ye firming aur surface hardening karta hai! ❄️💧`,

  // 38. Nisin Preservation
  `Natural preservative **nisin** 50-100 IU/g concentration mein add karke shelf life 7-10 days tak extend kar sakte hain at 4-7°C! 🛡️⏳`,

  // 39. Milk Standardization
  `Best paneer ke liye milk standardize karo - **Fat 4-5%**, **SNF 8.5-9%**. Buffalo milk + cow milk blend optimize kar sakte hain! 🐃🐄`,

  // 40. Curd Tension Test
  `Quality check ke liye **curd firmness** clean knife se test karo - clean cut with minimal whey release = proper coagulation! 🔪✅`,

  // 41. Vacuum Packaging
  `${genderTerm}, **vacuum packaging** mein oxygen remove karke shelf life 10-15 days tak extend hoti hai. Modified atmosphere packaging (MAP) bhi effective! 📦🛡️`,

  // 42. Ash Content
  `Paneer mein **ash content** (minerals) 1.5-2.5% hota hai. Muffle furnace mein 550°C par ashing karke quantify karte hain! 🔥⚗️`,

  // 43. Rennet Coagulation Alternative
  `Traditional method mein **rennet** bhi use kar sakte hain (0.02-0.03%) at 30-35°C. But acid coagulation zyada common aur economical! 🧪💰`,

  // 44. Syneresis Control
  `Curd formation ke baad **syneresis** (whey weeping) gentle handling se control karo. Zyada churning = fat loss aur tough texture! 💧🔄`,

  // 45. Calorific Value
  `${genderTerm}, paneer ki **energy value** 260-300 kcal/100g hoti hai depending on fat content. High protein + moderate fat = balanced nutrition! 🔋📊`
],
    cream: [
  // 1. Centrifugal Separation Principle
  `${genderTerm}, cream separator **Stokes' Law** follow karta hai! Fat globules (density 0.93 g/cm³) lighter hote hain skim milk (1.036 g/cm³) se, toh centrifugal force (6000-7000 rpm) par separate ho jate hain! ⚡🔄`,

  // 2. Optimal Separation Temperature
  `Cream separation **35-40°C** par best hota hai kyunki milk fat liquid state mein rehta hai aur viscosity kam hoti hai. Cold milk = poor separation efficiency! 🌡️✅`,

  // 3. Fat Globule Size Distribution
  `Milk mein **fat globules** 0.1-15 micron size ke hote hain, average 3-4 micron. Larger globules cream mein concentrate hote hain. Coulter Counter se measure karte hain! 🔬💧`,

  // 4. Cream Classification by Fat
  `**Half Cream** (12-18% fat), **Single Cream** (18-25%), **Whipping Cream** (30-35%), **Double Cream** (45-50%), **Clotted Cream** (55-60%). FSSAI standards follow karo! 🧈📊`,

  // 5. Pasteurization Parameters
  `${genderTerm}, cream ko **75-80°C for 15-20 seconds** (HTST) ya **85-90°C for 10-15 seconds** pasteurize karte hain. High fat content = higher temperature needed! 🌡️🔥`,

  // 6. Whipping Overrun
  `Whipping cream ki **overrun** 60-100% hoti hai - matlab volume double ho jata hai! Formula: [(Whipped volume - Original volume) / Original volume] × 100. Air incorporation ka magic! 🌪️📈`,

  // 7. Foam Stability Mechanism
  `Whipped cream mein **fat globule membrane proteins** air bubbles ko stabilize karte hain. Partial coalescence of fat creates network structure. Temperature 4-7°C critical hai! ❄️🫧`,

  // 8. Viscosity Measurement
  `Cream ka **viscosity** fat content ke sath increase hota hai - 18% cream = 5-8 cP, 40% cream = 20-30 cP at 20°C. Brookfield viscometer se measure karte hain! 🌀📏`,

  // 9. Acidity Standards
  `${genderTerm}, fresh cream ka **titratable acidity** 0.10-0.15% lactic acid hona chahiye. Above 0.20% = bacterial growth aur quality deterioration! 📉🧪`,

  // 10. Homogenization Effect
  `Cream homogenization **1000-1500 psi** pressure par karne se fat globules 1 micron se chhote ho jate hain - creaming prevented but whipping property lost! ⚙️💪`,

  // 11. Protein Content
  `Cream mein **protein** 2-3% hota hai (mainly casein + whey proteins). Fat percentage badhe toh protein percentage kam lagta hai but absolute amount same! 🧬📊`,

  // 12. Separator Efficiency
  `Modern **cream separator efficiency** 95-98% hoti hai. Fat loss in skim milk <0.05% hona chahiye. Bowl speed aur disc design matter karte hain! ⚡✅`,

  // 13. Membrane Separation (MF/UF)
  `${genderTerm}, **microfiltration** (0.1-10 micron pores) se bhi cream separation possible hai without heat. Energy efficient but slower process! 🔬♻️`,

  // 14. Lactose Content
  `Cream mein **lactose** 2.5-4% hota hai depending on fat dilution. Higher fat = lower lactose percentage. Enzymatic method se quantify karte hain! 🧪📉`,

  // 15. Water Activity
  `Fresh cream ka **aw** 0.98-0.99 hota hai - highly perishable! Refrigeration (4-7°C) essential for shelf life of 5-7 days. Microbial growth control! 💧❄️`,

  // 16. Vitamin A & D Content
  `High fat cream mein **Vitamin A** 300-500 IU/100g aur **Vitamin D** 2-4 IU/100g hota hai. Fat-soluble vitamins concentrate! HPLC se analyze karte hain! 🟡💊`,

  // 17. Churning for Butter
  `${genderTerm}, cream churning mein **phase inversion** hota hai - fat continuous phase ban jata hai (45-50% fat cream ideal). Churning temp 8-12°C hona chahiye! 🧈🔄`,

  // 18. Phospholipid Complex
  `Cream mein **phospholipids** 30-40 mg/100g fat hote hain (lecithin, cephalin). Ye fat globule membrane ke components hain - emulsion stabilizers! 🧬🛡️`,

  // 19. Peroxide Value Test
  `Fat oxidation check karne ke liye **peroxide value** <0.5 meq O₂/kg fat hona chahiye fresh cream mein. Iodometric titration method use hota hai! 🧪⚠️`,

  // 20. Sour Cream Production
  `**Sour cream** banane ke liye pasteurized cream mein **Lactococcus lactis** culture 2% add karke 20-22°C par 16-18 hours ferment karo. Final pH 4.5-4.6, acidity 0.6-0.8%! 🦠🍶`,

  // 21. Specific Gravity
  `${genderTerm}, cream ka **specific gravity** fat content par depend karta hai - 18% cream = 1.012, 40% cream = 0.985 at 15°C. Density measurement quality check! ⚖️📐`,

  // 22. Clotted Cream Method
  `Traditional **clotted cream** banane mein milk ko 80-85°C par 1 hour heat karo, fir slow cool karo. Surface cream layer (55-60% fat) collect karo! 🔥🥄`,

  // 23. UHT Treatment
  `**UHT cream** (135-140°C for 2-4 seconds) aseptic packaging mein 6 months shelf life deta hai room temperature par. Maillard reaction se slight color change! 📦⏳`,

  // 24. Freezing Stability
  `${genderTerm}, cream ko **-18°C** par freeze karne se fat globules aggregate ho sakte hain. Sugar (8-10%) add karne se cryoprotection milta hai! ❄️🛡️`,

  // 25. Cholesterol Content
  `Cream mein **cholesterol** 100-150 mg/100g hoti hai (fat content ke sath proportional). Saturated fat 60-65% hota hai. Moderation key hai! 💚⚕️`,

  // 26. Gerber Method for Fat
  `**Gerber test** mein 10ml cream + 10ml H₂SO₄ + 1ml amyl alcohol mix karke centrifuge karo. Fat column directly read kar sakte hain - quick method! 🧪📏`,

  // 27. Lipolysis Detection
  `${genderTerm}, **free fatty acids** (FFA) measure karke lipolysis detect karte hain. Fresh cream mein <0.5% oleic acid equivalent hona chahiye. Copper soap method use hota hai! 📊🧪`,

  // 28. Cream Aging Process
  `Butter banane se pehle cream ko **4-7°C par 2-4 hours** age karte hain - fat crystallization proper hota hai. Improved churning efficiency! ⏰❄️`,

  // 29. Emulsion Stability Index
  `Cream ka **emulsion stability** centrifugation test se check karte hain - 3000 rpm for 5 min, phase separation <5% hona chahiye! 🌀✅`,

  // 30. Microbiological Standards
  `FSSAI guidelines: **Total plate count** <5×10⁴ CFU/ml, **coliforms** <10/ml, **yeast/mold** <100/ml, **pathogens** absent. Hygiene critical! 🦠✋`,

  // 31. Colour Measurement
  `${genderTerm}, cream ka **color** Hunter Lab system se measure karte hain - L* (lightness) 85-95, yellowness beta-carotene content par depend karta hai! 🟡🔬`,

  // 32. Diacetyl Formation
  `Cultured cream mein **diacetyl** (buttery flavor compound) 2-4 ppm develop hota hai Lactococcus lactis biovar. diacetylactis se. GC-MS se detect karte hain! 👃🧪`,

  // 33. Heat Stability Test
  `Cream ki **heat coagulation time** 140°C par 20+ minutes honi chahiye. Calcium chloride addition se stability improve hoti hai. Coffee cream important parameter! ☕🌡️`,

  // 34. Fat Globule Membrane (MFGM)
  `**MFGM** mein phospholipids, proteins, glycoproteins hote hain. Ye 3-4% of fat globule weight hai - bioactive components rich source! 🧬💊`,

  // 35. Refractive Index
  `${genderTerm}, cream ki **refractive index** 1.348-1.352 at 40°C hoti hai. Abbe refractometer se measure karte hain - adulteration detection! 🔍📐`,

  // 36. Nitrogen Content (Kjeldahl)
  `**Total nitrogen** Kjeldahl method se determine karo - protein = N × 6.38. Fresh cream mein 0.3-0.5% nitrogen hota hai! 🧪🧬`,

  // 37. Sediment Test
  `Quality check ke liye **sediment disc test** karo - cream ko filter karke disc par particles count karo. Grade A = minimal sediment! 🔬✅`,

  // 38. Antibiotic Residue
  `${genderTerm}, milk se cream mein **antibiotic concentration** 3-4 times ho jata hai (fat soluble antibiotics). Delvotest/ELISA screening necessary! 💊⚠️`,

  // 39. Cryoscopic Point
  `Cream ka **freezing point** -0.520 to -0.530°C hota hai (milk se slightly higher). Cryoscope se measure karke adulteration check kar sakte hain! ❄️📉`,

  // 40. Surface Tension
  `Fresh cream ka **surface tension** 45-50 dyne/cm at 20°C hota hai. Phospholipids aur proteins surface active agents act karte hain! 💧🔬`,

  // 41. Whipping Time Optimization
  `${genderTerm}, **whipping time** temperature par depend karta hai - 4°C par 3-4 min, 10°C par 5-7 min. Bowl aur beater bhi chilled hone chahiye! ⏱️❄️`,

  // 42. Oxidative Stability (OSI)
  `**Oxidative stability index** Rancimat method se measure karte hain - induction period 20+ hours hona chahiye at 110°C. Antioxidants help karte hain! 🛡️⏰`,

  // 43. Casein-to-Whey Ratio
  `Cream mein **casein:whey ratio** 80:20 hota hai (milk jaisa). Centrifugation se change nahi hota kyunki dono fat ke sath retain hote hain! 🧬⚖️`,

  // 44. Reconstitution Quality
  `Dried/frozen cream ko reconstitute karne par **wettability** aur **dispersibility** check karo. Lecithin addition improve karta hai! 💧🔄`,

  // 45. Maillard Browning Index
  `${genderTerm}, heat-treated cream mein **browning** 420nm absorbance se measure karte hain. UHT cream mein non-enzymatic browning hoti hai! 🟤📊`,

  // 46. Butyric Acid Content
  `Milk fat specific marker **butyric acid** GC analysis se detect karte hain - vegetable fat adulteration check! 3-4% of total fatty acids hona chahiye! 🧪✅`,

  // 47. Clumping Index
  `Stored cream mein **fat globule clumping** microscopy se evaluate karo - excessive clumping = quality deterioration. Homogenization prevent karta hai! 🔬📉`,

  // 48. Yield from Milk
  `**Cream yield** = (Fat% in milk × Volume of milk) / (Fat% in cream). Example: 4% fat milk se 40% fat cream banane par ~10% yield! 🧮📊`,

  // 49. Salmonella Detection
  `${genderTerm}, pathogen safety ke liye **Salmonella** 25ml sample mein absent hona chahiye. Enrichment + PCR method fast detection! 🦠❌`,

  // 50. Sensory Evaluation
  `Quality cream mein **clean flavor**, **smooth texture**, **no off-odors**, **uniform consistency** honi chahiye. 9-point hedonic scale par >7 score ideal! 👃👅✅`
],
    butter: [
  // 1. Compositional Standards
  `${genderTerm}, **FSSAI standards** ke according butter mein minimum 80% milk fat, maximum 16% moisture, aur maximum 3% curd (MSNF) hona chahiye. Salt-in-moisture ratio 2-4% optional hai! 📊✅`,

  // 2. Optimal Churning Temperature
  `Churning temperature critical hai - **Cow milk cream: 9-11°C**, **Buffalo milk cream: 11-13°C**. High temp = soft butter + fat loss, low temp = prolonged churning time! 🌡️🔄`,

  // 3. Phase Inversion Mechanism
  `${genderTerm}, churning mein **phase inversion** hota hai - oil-in-water emulsion (cream) water-in-oil emulsion (butter) ban jata hai. Fat globules aggregate होकर continuous phase form karte hain! 🔬💧`,

  // 4. Churning Time Calculation
  `**Churning time** 30-45 minutes hota hai depending on cream fat% (30-40% ideal), temperature, aur agitation speed (25-35 rpm). Over-churning = greasy texture! ⏱️⚙️`,

  // 5. Butter Washing Process
  `Churning ke baad butter ko **chilled water (4-7°C)** se 2-3 times wash karo taaki residual buttermilk remove ho. Ye shelf life extend karta hai aur off-flavors prevent karta hai! 💧❄️`,

  // 6. Working Mechanism
  `**Working** butter mein moisture droplets uniformly distribute karta hai aur air pockets remove karta hai. 15-20 revolutions sufficient hain - over-working = oily separation! 🔄💪`,

  // 7. Salt Addition Purpose
  `${genderTerm}, **salt** (1.5-2%) add karne se water activity kam hota hai (0.95 se 0.92), microbial growth inhibit hota hai, aur flavor enhance hota hai! 🧂🛡️`,

  // 8. Overrun in Butter
  `Butter mein **overrun** (air incorporation) 10-15% hona chahiye. Formula: [(Weight of cream - Weight of butter) / Weight of butter] × 100. Quality parameter! 📈🌪️`,

  // 9. Moisture Distribution
  `Moisture **droplet size** 1-10 microns honi chahiye, evenly dispersed. Large droplets (>20 microns) = free water = microbial growth. Microscopy se check karte hain! 🔬💧`,

  // 10. Reichert-Meissl Value
  `${genderTerm}, pure butter ka **R-M value** 24-34 hota hai (volatile water-soluble fatty acids measure karta hai). Margarine/vegetable fat mein ye value negligible! 📉🧪`,

  // 11. Polenske Value
  `**Polenske value** pure butter mein 1.5-3.5 hota hai (insoluble volatile fatty acids). Combined with R-M value, adulteration detection powerful tool! 🔍✅`,

  // 12. Kirschner Value
  `Butter purity test: **Kirschner value** = R-M value - Polenske value. Pure butter mein 19-30 hona chahiye. Simple calculation, powerful result! 🧮📊`,

  // 13. Butyric Acid Marker
  `${genderTerm}, milk fat specific **butyric acid** total fatty acids ka 3-4% hota hai. GC analysis se detect karo - vegetable fat adulteration ka best marker! 🧬🧪`,

  // 14. Melting Point Range
  `Butter ka **melting point** 28-36°C hota hai (mixed glycerides ki wajah se wide range). Texture aur spreadability ye property decide karti hai! 🌡️📏`,

  // 15. Crystallization Polymorphism
  `Fat crystals **polymorphic forms** (α, β', β) mein exist karte hain. β' form desirable hai smooth texture ke liye. Cooling rate control crucial! ❄️🔬`,

  // 16. Churning Loss Calculation
  `**Fat loss** buttermilk mein 0.3-0.5% hona chahiye. High loss = inefficient churning. Formula: (Fat in buttermilk × Volume) / Total fat input × 100! 📉🧮`,

  // 17. Acid Degree Value (ADV)
  `${genderTerm}, **ADV** fresh butter mein 1.2-1.5 ml 0.1N NaOH/g fat hona chahiye. High value = lipolysis aur rancidity development! ⚠️🧪`,

  // 18. Peroxide Value Limit
  `Fat oxidation check: **Peroxide value** <0.5 meq O₂/kg fat fresh butter mein. Above 2.0 = rancid, unacceptable quality! 📊❌`,

  // 19. Iodine Value
  `Butter ka **iodine value** 26-45 hota hai (unsaturation degree measure). Seasonal variation hota hai - summer butter higher value (grass feeding)! 🌿📈`,

  // 20. Saponification Value
  `${genderTerm}, **saponification value** 210-230 mg KOH/g fat hota hai butter mein. Ye average molecular weight indicate karta hai. Coconut oil adulteration detect karne mein helpful! ⚗️🥥`,

  // 21. Vitamin A Content
  `Butter vitamin A ka excellent source - **500-1000 IU/100g** (seasonal + breed variation). Yellow color beta-carotene se aata hai grass-fed butter mein! 🟡💊`,

  // 22. Vitamin D & E
  `${genderTerm}, butter mein **Vitamin D** 10-50 IU aur **Vitamin E** 1.5-2.5 mg per 100g hota hai. Fat-soluble vitamins well retained! HPLC se quantify karte hain! 🔬💊`,

  // 23. Cholesterol Content
  `Butter mein **cholesterol** 200-250 mg/100g hota hai. Natural phytosterols bhi present (50-100 mg) jo cholesterol absorption reduce kar sakte hain! 💚⚖️`,

  // 24. Conjugated Linoleic Acid (CLA)
  `Grass-fed butter mein **CLA** 8-15 mg/g fat hota hai - anti-cancer aur fat metabolism benefits. Summer butter mein zyada concentration! 🌾🧬`,

  // 25. Short-Chain Fatty Acids
  `${genderTerm}, butter unique hai kyunki isme **butyric, caproic, caprylic acids** (C4-C8) 12-15% hote hain. Gut health ke liye beneficial! Quick energy source! ⚡💚`,

  // 26. Cultured Butter Production
  `**Cultured butter** mein cream ko ferment karte hain **Lactococcus lactis** se (0.5-2% culture, 18-22°C, 12-16 hours). Diacetyl compound buttery aroma deta hai! 🦠👃`,

  // 27. Diacetyl Quantification
  `Cultured butter mein **diacetyl** 3-8 ppm hona chahiye optimal flavor ke liye. Spectrophotometric method (540nm) se measure karte hain! 🧪📏`,

  // 28. Microbiological Standards
  `FSSAI: **Total plate count** <5×10⁴ CFU/g, **coliforms** <10/g, **yeast/mold** <100/g, **pathogens** absent. Salt aur low aw protection dete hain! 🦠✋`,

  // 29. Water Activity Control
  `${genderTerm}, salted butter ka **aw** 0.91-0.94, unsalted butter 0.95-0.97 hota hai. Below 0.90 = mold growth stopped, bacteria bhi limited! 💧🛡️`,

  // 30. Color Measurement
  `Butter color **Lovibond units** mein measure hota hai - Yellow 3-8, Red 0.5-2. Annatto (natural colorant) add kar sakte hain consistency ke liye! 🟡🔬`,

  // 31. Spreadability Test
  `**Cone penetrometer** se spreadability measure karte hain at 5°C - 200-300 dmm (0.1mm units) ideal. Hard butter = <150, soft = >400! 📏🧈`,

  // 32. Textural Profile Analysis (TPA)
  `${genderTerm}, texture analyzer se **hardness** (500-1500g), **adhesiveness**, **cohesiveness** measure karte hain different temperatures par. Seasonal variation hota hai! 💪📊`,

  // 33. Free Fatty Acid Content
  `Fresh butter mein **FFA** 0.5-1.0% oleic acid equivalent hona chahiye. Lipolysis se increase hota hai - sensory defect ka indicator! 📈⚠️`,

  // 34. Anisidine Value
  `Secondary oxidation products: **Anisidine value** <10 fresh butter mein hona chahiye. High value = aldehydes/ketones formation = off-flavor! 🧪👃`,

  // 35. Specific Gravity
  `${genderTerm}, butter ka **specific gravity** 40°C par 0.910-0.920 hota hai. Density measurement se adulteration suspect kar sakte hain! ⚖️🔍`,

  // 36. Refractive Index
  `**Refractive index** at 40°C: 1.453-1.458 (butter fat specific). Abbe refractometer se quick test - vegetable oil mixed hai toh change hoga! 🔬📐`,

  // 37. Unsaponifiable Matter
  `Butter mein **unsaponifiable fraction** 0.2-0.8% hota hai (sterols, hydrocarbons, vitamins). High value = mineral oil adulteration! ⚗️🔍`,

  // 38. Phytosterol Content
  `${genderTerm}, butter mein **phytosterols** 200-300 mg/100g (cholesterol reducing compounds). β-sitosterol dominant form. GC-MS se profile karte hain! 🌿💊`,

  // 39. Rancidity Detection (Kreis Test)
  `**Kreis test** oxidative rancidity detect karta hai - phloroglucinol + HCl reagent use hota hai. Red/pink color = positive (rancid fat)! 🔴🧪`,

  // 40. Baudouin Test
  `Sesame oil adulteration: **Baudouin test** - butter fat + furfural + HCl. Red color bane toh sesame oil present. Qualitative screening! 🟥✅`,

  // 41. Freezing Storage
  `${genderTerm}, butter ko **-20 to -30°C** par 6-12 months store kar sakte hain aluminum foil/parchment mein wrap karke. Oxidation minimize! ❄️📦`,

  // 42. Oxidative Stability Index
  `**OSI** Rancimat method se measure - induction period 25+ hours at 100°C hona chahiye. Antioxidants (Vit E) natural protection dete hain! 🛡️⏰`,

  // 43. Smoke Point Temperature
  `Butter ka **smoke point** 150-175°C hota hai (milk solids burn karte hain). Clarified butter/ghee = 250°C+. Frying considerations! 🔥🍳`,

  // 44. Printing Butter Quality
  `High-quality **printing butter** (baking industry) mein moisture 14-15%, fat 82-84% hota hai. Consistent plasticity temperature range wide! 📐🎯`,

  // 45. Whey Butter Characteristics
  `${genderTerm}, **whey cream** se bane butter mein slightly different fatty acid profile - more polyunsaturated fats. Color lighter hota hai! 💧🧈`,

  // 46. Mould Count Test
  `**Howard mould count** microscopy method - butter sample examine karke mould filaments count karo. <50 HPF (high power fields) acceptable! 🔬🦠`,

  // 47. Pasteurization Indicator
  `**Phosphatase test** negative hona chahiye butter mein (cream properly pasteurized tha). Phenol formation check karte hain - yellow color positive! 🟡✅`,

  // 48. Curd Particle Test
  `Butter mein **curd content** (MSNF) 3% se kam hona chahiye. High curd = poor keeping quality. Centrifuge method se quantify karte hain! 🧪📉`,

  // 49. Salt Distribution Check
  `${genderTerm}, **salt crystals** evenly distributed hone chahiye, size <100 microns. Large crystals = gritty texture defect. Microscopy evaluation! 🧂🔬`,

  // 50. Calorific Value
  `Butter ki **energy content** 720-750 kcal/100g hoti hai - highly concentrated energy source. Fat 9 kcal/g + minimal protein/carbs! 🔋📊`,

  // 51. Omega-3 Fatty Acids
  `Grass-fed butter mein **omega-3** 0.5-1.5g/100g hota hai (mainly ALA). Grain-fed butter mein significantly kam! Diet matters! 🌾💚`,

  // 52. Flash Point & Fire Point
  `Safety parameters: **Flash point** ~190°C, **Fire point** ~215°C. Auto-ignition temperature ~400°C. Deep frying risks! 🔥⚠️`,

  // 53. Dielectric Constant
  `${genderTerm}, butter fat ka **dielectric constant** 2.8-3.1 at 20°C hota hai. Moisture content estimation mein useful parameter! ⚡📏`,

  // 54. Emulsion Stability
  `Water-in-oil emulsion stability test - 3000 rpm, 10 min centrifuge. <5% phase separation acceptable. MSNF acts as emulsifier! 🌀✅`,

  // 55. Lactose in Butter
  `Residual **lactose** 0.1-0.5% hota hai butter mein (mainly in moisture phase). Maillard browning potential minimal! 🧪📉`,

  // 56. Calcium & Phosphorus
  `**Calcium** 15-25 mg, **Phosphorus** 20-30 mg per 100g butter. Trace minerals mostly curd fraction mein concentrate! 🦴⚖️`,

  // 57. Antioxidant Addition
  `${genderTerm}, permitted antioxidants **BHA/BHT** 200 ppm max add kar sakte hain shelf life extension ke liye. Natural alternatives: Vit E, rosemary extract! 🛡️🌿`,

  // 58. Butter Yield Formula
  `**Yield calculation**: Typically 1 liter milk (4% fat) → ~100g cream (40% fat) → ~45g butter (80% fat). Efficiency crucial! 🧮📊`,

  // 59. Clarified Butter (Ghee) Conversion
  `Butter se ghee banane mein **18-20% moisture evaporation** hota hai. 100g butter → ~80-82g ghee. Milk solids separate! 🔥🧈`,

  // 60. Sensory Evaluation
  `Quality butter: **clean flavor**, **smooth texture**, **uniform color**, **pleasant aroma**, **no off-flavors**. 9-point hedonic scale par >7 score! 👃👅✨`
],
    yogurt: [
      `Yogurt banane ke liye specific starter cultures use hote hain: **Lactobacillus bulgaricus** aur **Streptococcus thermophilus** (1:1 ratio). Milk ko 85-90°C par heat karke 42-43°C tak cool kiya jata hai, fir culture daalkar 4-6 hours incubate karte hain jab tak acidity 0.8-0.9% lactic acid na ho jaye. Dahi local cultures se banta hai.`,
      `Yogurt me acid-gel formation tab hoti hai jab pH down hokar 4.6 (casein ka isoelectric point) par pahunchta hai. Isse ek perfect smooth gel consistency milti hai.`
    ],
    ice_cream: [
      `Ice Cream ek frozen dessert hai jisme fat (10-12%), SNF (10-11.5%), sugar (13-15%), aur stabilizer (0.3-0.5%) hote hain. Processing me homogenization aur aging (4-5 hours) zaroori hai. Freezing me **Overrun** (air incorporation) check karna hota hai (typically 80-100%). 🍦`,
      `Ice cream me stabilizers (jaise sodium alginate ya gelatin) ice crystal formation ko rokte hain aur melt-down resistance ko improve karte hain.`
    ],
    colostrum: [
      `Colostrum (Khees/Khijri) delivery ke baad pehle 3-5 din ka doodh hota hai. Isme high level ke immunoglobulins (antibodies), proteins aur vitamins hote hain. Heat karne par ye immunoglobulins aur whey proteins ke high concentration ke karan immediately coagulate ho jata hai.`
    ],
    whey: [
      `Whey cheese ya paneer banane ke baad bacha hua liquid byproduct hai. Isme valuable whey proteins (Beta-lactoglobulin, Alpha-lactalbumin), lactose aur minerals hote hain. Isse whey protein powder aur whey energy drinks banaye jaate hain.`
    ],
    pasteurization: [
      `Pasteurization milk ko safe aur pathogens-free banane ke liye kiya jata hai. Do main methods hain:\n1. **LTLT (Low Temp Long Time):** 63°C par 30 minutes ke liye.\n2. **HTST (High Temp Short Time):** 72°C par 15 seconds ke liye, fir immediately 4°C tak cool karna. Validation ke liye **Alkaline Phosphatase (ALP) test** kiya jata hai (ye enzyme process complete hone par destroy ho jata hai).`,
      `UHT (Ultra High Temperature) processing me milk ko 135-140°C par 2-4 seconds ke liye sterilize kiya jata hai. Aseptic packaging ke sath iski shelf life 6 months tak ho sakti hai bina refrigeration ke!`
    ],
    gerber_fat: [
      `Gerber Test se milk ka **fat percentage** check karte hain. Isme 10 ml Gerber sulfuric acid (1.815 sp. gr.), 10.75 ml milk, aur 1 ml amyl alcohol ko **Gerber butyrometer** me daalkar centrifuge kiya jata hai. Acid protein ko digest karta hai, aur amyl alcohol fat separate karne me help karta hai. Butyrometer scale par fat directly read ho jata hai!`,
      `Gerber test me sulfuric acid (H2SO4) density differentiation me help karta hai aur casein protein ko digest karke fat globules ko release karta hai. 🧪`
    ],
    lactometer_clr: [
      `Lactometer se Milk Density (specific gravity) check hoti hai. CLR (Corrected Lactometer Reading) temperature correction ke baad milti hai. Isse **SNF (Solids-Not-Fat)** calculate kiya jata hai. Standard formula: **SNF% = (CLR / 4) + (0.2 * Fat%) + 0.36**. Pure milk me Cow SNF minimum 8.5% aur Buffalo ka 9.0% hona chahiye.`,
      `Raw milk ka specific gravity normal temperature (15.5°C) par around 1.028 to 1.032 hota hai. Agar isme paani milaya jaye, to ye reading niche (e.g., 1.020) gir jaati hai.`
    ],
    platform_tests: [
      `Milk reception par **Platform Tests** hote hain: Organoleptic (taste/smell/color), **COB (Clot on Boiling)** - agar acidity 0.15% lactic acid se zyada hai toh milk boil karne par phat jata hai, aur **Alcohol Test** (68% ethanol). **MBRT (Methylene Blue Reduction Test)** raw milk ki microbial quality check karta hai; color decolorization time agar 5 hours se zyada hai toh milk excellent quality ka hai!`,
      `MBRT grading guidelines:\n- 5 hours aur zyada: Excellent (Kam bacteria)\n- 3-4 hours: Good\n- 1-2 hours: Fair\n- 30 mins se kam: Poor (Bohot zyada bacterial load)`
    ],
    urea: [
      `Urea ki adulteration check karne ke liye **DMAB (Dimethylaminobenzaldehyde) test** kiya jata hai, ${genderTerm}. Milk sample me thoda DMAB reagent milane par agar colour **yellow/light yellow** ho jaye toh urea present hai, aur normal milk pale yellow hi rehta hai. Milk me naturally urea 0.2-0.7 g/L hota hai, isse zyada milaawat hai! 🧪`,
      `Adulterated urea test: 5ml milk me equal volume DMAB reagent daalne par agar deep yellow color dikhta hai, to added urea confirmed hai. Pure milk me light pink ya light yellow hue hi aata hai.`
    ],
    starch: [
      `Starch (manda) check karne ke liye **Iodine test** sabse best hai, ${genderTerm}! Thode se milk sample ko boil karke thanda karo, fir 1-2 drops Iodine solution daalo. Agar milk ka colour **intense blue** ho jaye, toh samajh lo starch ki milaawat pakki hai!`,
      `Milawat starch test: Starch isliye milaya jata hai taaki milk ka solids/SNF artificially increase kiya ja sake. Iodine starch ke amylose chain ke sath binding karke dark blue colored complex banata hai.`
    ],
    detergent: [
      `Detergent check karne ke liye milk ko thoda paani ke saath mix karke vigorously shake karo. Agar **foam/lather** (jhaag) lambe time tak bana rahe, toh detergent ho sakta hai. Lab me iske liye anionic substance indicator dyes use hoti hain (jaise methylene blue/chloroform phase test). 🧼`,
      `Detergent check karne ka simple test: 5ml milk me 1-2 drops bromocresol purple indicator milaane par agar color violet/dark purple ho jaye to detergent ho sakta hai, pure milk light green/yellowish-green rehta hai.`
    ],
    water_adulteration: [
      `Pani ki milawat **Lactometer** (CLR) se check hoti hai, ${genderTerm}. Pure Cow milk ka CLR 26-30 aur Buffalo milk ka 30-34 hona chahiye at 29°C. Agar reading isse kam hai, toh paani milaya gaya hai. Absolute precision ke liye **Cryoscope** se Freezing point depression check karte hain.`,
      `Added water detection: Milk ka freezing point -0.525°C se -0.560°C hota hai. Agar pani milaya jata hai, to freezing point 0°C ki taraf shift (decrease depression) hone lagta hai.`
    ],
    adulteration_general: [
      `Milk adulteration checking bahut important hai. Iodine test se starch pakda jata hai (milk turns blue) aur DMAB se urea. Kisi adulterator ko chhodna mat! 🧪👁️ Raw milk me pani ki milawat CLR (Corrected Lactometer Reading) se check hoti hai. Pure cow milk ka CLR 26-30 hota hai. Pani mila toh density seedhe down!`,
      `Milaawat se bachne ke liye standard platform checks aur rapid strips market me available hain. Dudh me detergent, urea, starch, starch, formalin, aur water common adulterants hain.`
    ],
    resume_haccp_iso: [
      `Food Industry resume me **HACCP (Hazard Analysis Critical Control Point)** aur **ISO 22000 (Food Safety Management System)** ki knowledge highlight karo! HACCP ke **7 principles** hote hain: Hazard analysis, CCP identification, Critical limits setup, Monitoring system, Corrective actions, Verification, and Record keeping. Industry QA/QC profiles ke liye ye qualifications hot topics hain.`,
      `ISO 22000 certification aur GMP (Good Manufacturing Practices) guidelines ki clear definition aapke resume ko shortlisting me edge degi. Training and audit certification projects resume me front profile par likhein!`
    ],
    careers: [
      `Arey ${genderTerm}, career ki bilkul chinta mat karo! Hardwork aur continuous learning se job kya, promotions bhi daud ke aayenge! QA, QC aur Plant Operations me hamesha log chahiye hote hain. Bas resume chamka ke rakho, placement pakki! 💼`,
      `Food industry me technical jobs ke sath-साथ regulatory bodies (jaise FSSAI auditor), consultancy, product development, R&D aur production executive ka career scope bahut bada hai.`
    ],
    motivation: [
      `Tension mat lo yaar! Haar wahi maanta hai jo koshish karna chhod deta hai. Aap champion ho, thoda aur try karo! 🌟`,
      `Haar mat maano ${genderTerm}! Butter bhi toh dahi ko zor se churning karne ke baad hi banta hai. Life ki churning se hi aap nikhroge! 🧈✨`
    ],
    funny_questions: [
      `Arey ${genderTerm}, mere jaise seedhe-saadhe bot se aise sawal? Main toh abhi single hoon, database me coding seekh raha hoon! 😂`,
      `Shaadi aur double toned milk me ek baat common hai... dono me struggle thoda kam aur fat bilkul na ke barabar hota hai! 😉`
    ],
    food: [
      `Khane ka naam mat lo ${genderTerm}, mujhe bhi paneer tikka ki yaad aa jati hai! Vaise aapka favorite food kya hai? 🍕🍛`
    ],
    fallback: [
      `Aapki ye baat mere offline brain ke thode upar se gayi, ${genderTerm}! 😅 Thoda simpler words me pucho, ya fir inme se kuch try karo:\n- 'Urea check karne ka DMAB test'\n- 'Starch test kaise karte hain?'\n- 'Ghee me sesame oil test (Baudouin Test)'\n- 'Milk pasteurization aur methods'\n- 'Lactometer se SNF calculate karna'\n- 'Gerber fat test method'\n- 'Platform test aur MBRT check'`,
      `Sach bataun ${genderTerm}, ye mere server se offline connectivity ka deviation hai. 😂 Kuch aur specific dairy technology ya tests ke baare me pucho na!`
    ]
  };

  // --- English Responses ---
  const englishResponses: Record<string, string[]> = {
    greetings: [
      `Hello ${firstName}! 👋 I am Sarathi, your friendly companion. Ready for some fun and dairy tech talks today?`,
      `Hey ${genderTerm}! How's it going? Sarathi is here to share some knowledge and crack some jokes! 🚀`,
      `Hi ${firstName}! Great to have you here. What shall we talk about today? 💬`
    ],
    how_are_you: [
      `I'm doing absolutely great, ${genderTerm}! Floating happily inside this local database. How are you holding up? 😎`,
      `Fantastic! Chatting with you always boosts my digital processing power! 🥳`
    ],
    who_are_you: [
      `I am Sarathi, your witty friend and assistant! In online mode, I am powered by advanced AI, and in offline mode, I am a cool repository of fun facts and friendly jokes! 🤖✨`,
      `My name is Sarathi. I specialize in food technology knowledge and being an awesome listener friend!`
    ],
    joke: [
      `Why did the cheese go to the gym? To get 'shredded'! 🧀🏋️‍♂️`,
      `Why did the milk get mad at the water? Because water kept diluting its true potential! 🥛💦`,
      `A dairy scientist's wedding invitation card read: "Please join us and help standardize our fat and SNF ratio forever!" 🤵🥛`,
      `Why don't cows have any money? Because the farmers milk them dry! 🐮💸`
    ],
    ghee: [
      `Ghee moisture should be below 0.5% as per food standards to prevent hydrolytic rancidity. Clarification evaporates water and extends the shelf life. Sesame oil adulteration in ghee is detected using the **Baudouin test** (turns red/pink with furfural + HCl). 🧈😋`,
      `Clarification temperature for ghee is typically 110-120°C. Proper crystallization (cooling rate) is key to getting that rich, premium granular texture!`
    ],
    cheese: [
      `Cheese making relies on chymosin (rennet) which splits kappa-casein at 30-35°C to form a strong protein network. Curd separation is pure science! Cheddar cheese typically has ~37-39% moisture and a minimum of 50% fat on dry matter. 🧀`,
      `Casein micelles are stabilized by kappa-casein. When rennet cleaves it, the hydrophobic core is exposed, causing aggregation and forming cheese curd.`
    ],
    paneer: [
      `Paneer is an **acid-coagulated** product. Milk is heated to 80-85°C, cooled slightly to 70-72°C, and coagulated using food-grade citric/lactic acid or sour whey. The whey is drained, and the curd is pressed. Paneer must contain at least 50% fat on a dry matter basis.`,
      `To get the softest paneer, ensure coagulation happens around 70-72°C. Coagulating at boiling temperatures makes the paneer rubbery and hard.`
    ],
    cream: [
      `Cream separation uses centrifugal force to separate fat from skim milk, exploiting their density difference. Types of cream include: Light/Table cream (18-25% fat), Whipping cream (30-40% fat), and Heavy/Double cream (45%+ fat).`,
      `Separation efficiency peaks at 35-40°C. Cold separation is possible but reduces cream yield and increases fat loss in skim milk.`
    ],
    butter: [
      `Butter must contain **at least 80% milk fat** and a maximum of 16% moisture by weight. The churning process breaks fat globule membranes, letting them aggregate into butter grains. Optimal churning temperature is around 9-11°C for cow milk and 11-13°C for buffalo milk. 🧈✨`,
      `Working of butter is a crucial step that distributes water droplets uniformly and blends salt, improving shelf life and texture.`
    ],
    yogurt: [
      `Yogurt is produced using symbiotic starter cultures: **Lactobacillus delbrueckii subsp. bulgaricus** and **Streptococcus thermophilus** in a 1:1 ratio. Milk is heated to 85-90°C, cooled to 42-43°C, inoculated, and incubated for 4-6 hours until titratable acidity reaches 0.8-0.9% lactic acid.`,
      `Yogurt thickens because acidity drops to pH 4.6 (casein's isoelectric point), causing casein proteins to precipitate and form a smooth gel.`
    ],
    ice_cream: [
      `Ice Cream typically contains 10-12% fat, 10-11% SNF, 13-15% sugar, and stabilizers. Critical steps include homogenization, aging at 4°C, and freezing with air incorporation, known as **Overrun** (usually 80-100% in commercial ice creams). 🍦`,
      `Overrun is defined as the volume increase of ice cream over the volume of the mix. Proper overrun is essential for a soft, scoopable texture.`
    ],
    colostrum: [
      `Colostrum is the first milk produced after birth (up to 3-5 days). It is rich in immunoglobulins (antibodies), proteins, and bioactive factors. It coagulates instantly upon heating due to high whey protein levels.`
    ],
    whey: [
      `Whey is the liquid byproduct of cheese or paneer manufacturing. It contains highly nutritional proteins (Beta-lactoglobulin, Alpha-lactalbumin), lactose, and minerals. It is processed into whey protein concentrate (WPC) or whey drinks.`
    ],
    pasteurization: [
      `Pasteurization eliminates pathogens. Two primary methods are:\n1. **LTLT (Low Temp Long Time):** 63°C for 30 minutes.\n2. **HTST (High Temp Short Time):** 72°C for 15 seconds, followed by rapid cooling to below 4°C. Validation is done using the **Alkaline Phosphatase (ALP) test** (the enzyme must be completely inactivated).`,
      `UHT (Ultra High Temperature) sterilization heats milk to 135-140°C for 2-4 seconds. Combined with aseptic packaging, UHT milk can last 6 months at room temperature!`
    ],
    gerber_fat: [
      `The **Gerber method** is standard for fat testing in milk. You mix 10 mL of Gerber sulfuric acid (sp. gr. 1.815), 10.75 mL of milk, and 1 mL of amyl alcohol in a **Gerber butyrometer**, centrifuge it, and read the separated fat directly from the graduated butyrometer column.`,
      `Sulfuric acid digests milk proteins (casein) and generates heat to melt fat, while amyl alcohol helps in separating the fat and getting a clear fat-acid interface in the butyrometer.`
    ],
    lactometer_clr: [
      `A **Lactometer** measures the specific gravity of milk. After applying temperature correction, we get the CLR. You can calculate **SNF%** using the Richmond formula: **SNF% = (CLR / 4) + (0.2 * Fat%) + 0.36**. Cow milk should have at least 8.5% SNF, and buffalo milk 9.0%.`,
      `Lactometer reading represents the density of milk. Skim milk has a higher specific gravity (1.035) than whole milk (1.030) due to fat removal, whereas watering decreases specific gravity.`
    ],
    platform_tests: [
      `At the platform, tests like **COB (Clot on Boiling)** and **Alcohol Test** are performed to check heat stability. **MBRT (Methylene Blue Reduction Test)** checks raw milk microbial load. The decolorization time indicates quality: >5 hours is Excellent, while <30 minutes is Very Poor.`,
      `Platform tests are rapid screening tests performed on raw milk reception dock (RMD) to accept or reject incoming tankers before unloading.`
    ],
    urea: [
      `To detect added urea, we use the **DMAB test**. Add DMAB reagent to the milk sample. A distinct **yellow/yellowish-orange color** indicates the presence of added urea. Natural urea levels in milk are around 0.2-0.7 g/L; anything higher is adulteration! 🧪`,
      `In the DMAB test, added urea reacts with p-dimethylaminobenzaldehyde in acid medium to form a yellow colored complex. Pure milk remains pale yellow/light pink.`
    ],
    starch: [
      `To detect starch, perform the **Iodine test**. Boil a small milk sample, let it cool, and add a few drops of Iodine solution. If it turns **intense blue**, starch is present. Pure milk will only show a yellowish/brownish hue.`,
      `Starch is added to milk to artificially boost SNF values. The iodine test is highly sensitive and detects even small traces of starch.`
    ],
    detergent: [
      `To detect detergent, shake the milk sample vigorously with an equal amount of water. If a **thick foam/lather** persists for a long time, detergent is likely present. In labs, dye-binding tests using methylene blue and chloroform are used to confirm detergent presence.`,
      `Detergent is added to emulsify added oil or fat in synthetic milk. Detection relies on pH indicator tests or dye partitioning between water and chloroform.`
    ],
    water_adulteration: [
      `Water addition lowers milk density. We check this using a **Lactometer**. Normal Corrected Lactometer Reading (CLR) is 26-30 for cow milk and 30-34 for buffalo milk at 29°C. For precise detection, a **Cryoscope** checks the freezing point depression (pure milk freezes around -0.525°C to -0.560°C).`,
      `Adding 10% water shifts the freezing point of milk closer to 0°C, making freezing point depression (FPD) the most accurate legal test for water adulteration.`
    ],
    adulteration_general: [
      `Testing milk purity is critical. Starch is detected using Iodine (turns blue), while added urea is detected using DMAB reagent. Always ensure quality! Lactometer reading CLR indicates milk density. Added water lowers density and SNF.`,
      `Adulterants like formalin are added as preservatives, while starch, urea, sucrose, and mineral oils are added to prepare synthetic milk or hide watering.`
    ],
    resume_haccp_iso: [
      `For food industry resumes, make sure to highlight knowledge of **HACCP** (Hazard Analysis Critical Control Point) and **ISO 22000** (FSMS). HACCP has **7 core principles**: hazard analysis, CCPs, critical limits, monitoring, corrective actions, verification, and record-keeping. QA/QC recruiters actively seek candidates with these certifications.`,
      `Add relevant industry training (e.g. FoSTaC by FSSAI) and internal audit project details directly to the top half of your resume to increase selection chances.`
    ],
    careers: [
      `Don't stress about career goals, ${genderTerm}! Just focus on building skills like HACCP, ISO 22000, and GMP. Opportunities will follow! Food industry has roles in Production, Quality Assurance, and R&D. Keep your resume clean and crisp! 💼`,
      `Technical expertise coupled with regulatory standards knowledge can land you roles in multinational food processors, food testing labs, or regulatory bodies like FSSAI.`
    ],
    motivation: [
      `Keep pushing forward, ${genderTerm}! Even butter has to undergo vigorous churning before it emerges. Your hard work will pay off! 🧈✨`,
      `Don't worry, my friend. Every expert was once a beginner. Take one step at a time! 🌟`
    ],
    funny_questions: [
      `Haha, ${genderTerm}, as a chatbot, my relationship status is locked to 'Single Threaded'! 😂`,
      `Asking a bot about marriage? My database is full of code, not match-making algorithms! 😉`
    ],
    food: [
      `Don't make me hungry, ${genderTerm}! Mentioning cheese and paneer tikka makes my virtual circuits water! 🍕🍛`
    ],
    fallback: [
      `That flew right over my digital head, ${genderTerm}! 😅 Try asking something simpler, like:\n- 'DMAB test for urea'\n- 'Iodine test for starch detection'\n- 'How to detect water in milk'\n- 'Explain milk pasteurization'\n- 'Richmond formula for SNF'\n- 'Gerber fat test procedure'\n- 'What is COB and MBRT?'`,
      `To be honest, I couldn't process that offline. 😂 Let's chat about specific dairy tech or ask for a joke!`
    ]
  };

  // --- Router & Keyword Matching ---
  const db = isHinglish ? hinglishResponses : englishResponses;

  // Intent definitions with keywords and weights
  interface Intent {
    name: string;
    keywords: string[];
    weights?: Record<string, number>;
  }

  const intents: Intent[] = [
    { name: 'urea', keywords: ['urea', 'dmab'], weights: { 'dmab': 5, 'urea test': 4, 'urea': 3 } },
    { name: 'starch', keywords: ['starch', 'iodine', 'aloo', 'potato', 'manda'], weights: { 'iodine': 5, 'starch': 3, 'manda': 3 } },
    { name: 'detergent', keywords: ['detergent', 'sabun', 'soap', 'lather', 'foam'], weights: { 'detergent': 4, 'soap': 3 } },
    { name: 'water_adulteration', keywords: ['water', 'pani', 'paani', 'added water', 'milawat water', 'dilut'], weights: { 'milawat water': 4, 'added water': 4, 'water': 1, 'pani': 1, 'paani': 1 } },
    { name: 'adulteration_general', keywords: ['adulter', 'milaawat', 'milawat', 'purity', 'shuddh', 'shudh'], weights: { 'purity': 2, 'adulter': 3, 'milawat': 2, 'milaawat': 2 } },
    { name: 'gerber_fat', keywords: ['gerber', 'babcock', 'fat test', 'fat checking', 'butyrometer', 'sulfuric acid', 'amyl alcohol'], weights: { 'gerber': 5, 'butyrometer': 5, 'babcock': 5, 'fat test': 3 } },
    { name: 'lactometer_clr', keywords: ['lactometer', 'clr', 'specific gravity', 'lacto', 'snf', 'density'], weights: { 'lactometer': 5, 'clr': 5, 'snf': 4, 'specific gravity': 3 } },
    { name: 'pasteurization', keywords: ['pasteuriz', 'pasteurise', 'ltlt', 'htst', 'pasteurisation', 'uht', 'boil milk', 'dudh garam', 'garam doodh'], weights: { 'ltlt': 5, 'htst': 5, 'pasteuriz': 4, 'pasteurisation': 4 } },
    { name: 'platform_tests', keywords: ['platform test', 'cob', 'clot on boiling', 'organoleptic', 'acidity test', 'mbrt', 'methylene blue'], weights: { 'cob': 5, 'mbrt': 5, 'platform test': 4 } },
    { name: 'ghee', keywords: ['ghee', 'clarified butter', 'baudouin'], weights: { 'ghee': 4, 'clarified butter': 4, 'baudouin': 5 } },
    { name: 'cheese', keywords: ['cheese'], weights: { 'cheese': 4 } },
    { name: 'paneer', keywords: ['paneer', 'cottage cheese', 'coagulat'], weights: { 'paneer': 4, 'coagulat': 2 } },
    { name: 'cream', keywords: ['cream', 'malai', 'separator'], weights: { 'cream': 4, 'separator': 3 } },
    { name: 'yogurt', keywords: ['yogurt', 'dahi', 'curd', 'starter culture', 'bulgaricus', 'thermophilus'], weights: { 'bulgaricus': 5, 'thermophilus': 5, 'yogurt': 4, 'starter culture': 3 } },
    { name: 'butter', keywords: ['butter', 'makhan', 'makkhan', 'churning'], weights: { 'churning': 3, 'butter': 4, 'makhan': 3, 'makkhan': 3 } },
    { name: 'ice_cream', keywords: ['ice cream', 'icecream', 'overrun'], weights: { 'overrun': 5, 'ice cream': 4, 'icecream': 4 } },
    { name: 'colostrum', keywords: ['colostrum', 'khees', 'khijri'], weights: { 'colostrum': 5, 'khees': 4, 'khijri': 4 } },
    { name: 'whey', keywords: ['whey'], weights: { 'whey': 4 } },
    { name: 'resume_haccp_iso', keywords: ['resume', 'cv', 'haccp', 'iso', 'fssai'], weights: { 'haccp': 5, 'iso': 5, 'resume': 4, 'cv': 4 } },
    { name: 'careers', keywords: ['career', 'job', 'placement', 'salary', 'work', 'nokri', 'naukri'], weights: { 'career': 3, 'placement': 3, 'job': 2, 'salary': 2 } },
    { name: 'greetings', keywords: ['hello', 'hi', 'hey', 'namaste', 'start', 'good morning', 'morning', 'kaise ho', 'kese ho', 'how are you', 'how r u', 'chal'], weights: { 'how are you': 3, 'kaise ho': 3, 'kese ho': 3, 'namaste': 2, 'hello': 2, 'hi': 2 } },
    { name: 'who_are_you', keywords: ['who are you', 'kaun ho', 'koun ho', 'identity', 'intro', 'name', 'naam', 'sarathi'], weights: { 'who are you': 4, 'kaun ho': 4, 'identity': 3, 'intro': 3, 'name': 2, 'naam': 2, 'sarathi': 2 } },
    { name: 'joke', keywords: ['joke', 'hasao', 'comedy', 'funny', 'laught', 'hasi', 'chutkula'], weights: { 'joke': 4, 'chutkula': 4, 'hasao': 3, 'funny': 2 } },
    { name: 'motivation', keywords: ['motivation', 'motivate', 'sad', 'tension', 'worry', 'depress', 'dar', 'upset', 'himmat', 'dukh'], weights: { 'motivation': 4, 'motivate': 4, 'tension': 3, 'sad': 2, 'worry': 2 } },
    { name: 'food', keywords: ['food', 'khana', 'khaana', 'hungry', 'bhookh'], weights: { 'food': 3, 'khana': 3, 'bhookh': 3 } },
    { name: 'funny_questions', keywords: ['love', 'single', 'marry', 'gf', 'bf', 'girlfriend', 'boyfriend', 'shaadi', 'shadi', 'relationship'], weights: { 'love': 2, 'single': 2, 'marry': 2, 'gf': 2, 'bf': 2 } }
  ];

  // Calculate scores for each intent
  let bestIntent = 'fallback';
  let maxScore = 0;

  for (const intent of intents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      if (msg.includes(keyword)) {
        const weight = intent.weights?.[keyword] ?? 1;
        score += weight;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent.name;
    }
  }

  // Retrieve matching responses list
  const responses = db[bestIntent] || db['fallback'];

  // Variation selection: use historyLength to index variation, preventing immediate repetition
  const selectedIndex = historyLength > 0 
    ? (historyLength % responses.length) 
    : Math.floor(Math.random() * responses.length);

  return responses[selectedIndex];
}
