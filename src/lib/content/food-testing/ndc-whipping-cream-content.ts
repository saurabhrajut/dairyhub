import { FoodTestItem } from './types';

export const NDC_WHIPPING_CREAM_TESTS: FoodTestItem[] = [
  {
    "id": "ndc-test-1",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Total Fat Determination by Mojonnier / Rose-Gottlieb Method (IS 1224 Part II / AOAC 905.02)",
    "shortSummary": "Quantitative extraction and gravimetric measurement of vegetable fat (hydrogenated palm kernel, coconut oil) in complex NDC emulsions using ammonia-ethanol digestion and ether extraction.",
    "detailedScientificRationale": "NDC (Non-Dairy Cream) ek complex oil-in-water emulsion hai jisme 25-35% fractionated vegetable fat (coconut oil, palm kernel oil, ya hydrogenated vegetable fat), water (55-65%), emulsifiers (polysorbate 60, sorbitan monostearate SMS, sodium stearoyl lactylate SSL), stabilizers (carrageenan, guar gum), protein film formers (sodium caseinate ya soy protein isolate), aur sugars (glucose syrup, sucrose) hote hain. Whipping ability directly fat content par depend karti hai \u2014 minimum ~25% fat chahiye taaki whipping ke dauran partial coalescence ho aur stiff peaks banein. Vegetable fat ka melting point ~24-26\u00b0C hota hai jo dairy fat se alag behave karta hai. Ammonia + ethanol emulsion ko break karta hai aur protein/emulsifier films ko dissolve karta hai, jiske baad diethyl ether aur petroleum ether se quantitative fat extraction gravimetrically ensure hoti hai.",
    "detailedTestPrinciple": "Ammonia-Ethanol Matrix Digestion, Dual Ether Gravimetric Liquid-Liquid Extraction (IS 1224 Part II / AOAC 905.02). 10.0g melted, homogenized NDC sample ko 1.5 mL concentrated ammonia (25%) aur 10 mL 95% ethanol se treat karke interfacial caseinate/soy protein barriers ko dissolve aur precipitate kiya jaata hai. Polysorbate 60 aur SMS surfactant micelles destabilize ho jaate hain. 25 mL Diethyl Ether polar lipids aur partial glycerides ko dissolve karta hai, jabki 25 mL Petroleum Ether non-polar triglycerides ko selectively extract karta hai. 3 successive extractions ke baad ether layers ko 60\u00b0C water bath par evaporate karke residue ko 102 \u00b1 2\u00b0C oven mein constant weight tak dry kiya jaata hai.",
    "chemicalEquation": "Protein-Emulsion + NH4OH + C2H5OH \u27f6 Solubilized Caseinate/Soy Protein + Demulsified Fat Globules   |   Fat + (C2H5)2O + Pet-Ether \u27f6 Organic Fat Phase",
    "formulaBreakdown": {
      "formula": "% Total Fat = [(W3 - W1) / W2] \u00d7 100",
      "variables": [
        {
          "symbol": "W1",
          "description": "Empty pre-conditioned Mojonnier extraction flask ka weight (g)"
        },
        {
          "symbol": "W2",
          "description": "Accurately weighed NDC test sample ka mass (g)"
        },
        {
          "symbol": "W3",
          "description": "Flask plus extracted dried fat residue ka constant weight (g)"
        },
        {
          "symbol": "(W3 - W1)",
          "description": "Net weight of extracted vegetable fat (g)"
        }
      ],
      "derivation": "Gravimetric mass difference formula: Total extracted anhydrous lipid mass divided by initial homogenized NDC test sample mass multiplied by 100.",
      "factorOrigin": "Reference gravimetric absolute method \u2014 empirical constant nahi, direct physical mass measurement hai.",
      "unitAnalysis": "% Fat = [g fat / g sample] \u00d7 100 = percentage by weight (w/w)",
      "practicalExample": "W1 = 52.1000 g, W2 = 10.0250 g NDC sample, W3 = 55.3150 g. Extracted fat = 55.3150 - 52.1000 = 3.2150 g. % Fat = (3.2150 / 10.0250) \u00d7 100 = 32.07% Fat (Complies with typical NDC 25-35% commercial specification) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "NDC mein fat testing dairy cream se alag kyu hai?",
        "answer": "1. Whipping ability directly fat % par depend karti hai: NDC mein minimum ~25% fat chahiye taaki overrun (foam volume) proper ho. Agar fat kam ho to cream whip nahi hogi ya stiff peaks nahi aayenge.\n2. Vegetable fat ki alag melting characteristics: Coconut oil/palm kernel oil ka melting point ~24-26\u00b0C hai \u2014 ye important hai kyunki fat crystal structure whipping ko help karta hai.\n3. Label compliance: FSSAI / food regulations ke anusaar NDC mein declared fat % accurate honi chahiye.\n4. Emulsion stability se link: Agar fat % zyada ya kam ho to emulsifier balance bigad jaata hai \u2014 churning ya oil separation ho sakta hai."
      },
      {
        "question": "Sample 10 gram kyu aur pre-melting 40-45\u00b0C par kyu zaroori hai?",
        "answer": "1. NDC mein ~25-35% fat hota hai \u2192 10 g sample mein ~2.5-3.5 g fat hoga jo gravimetric weighing ke liye ideal analytical balance precision (\u00b10.1 mg) deta hai.\n2. NDC refrigerated state (4\u00b0C) mein solid ya semi-solid hoti hai jisme high-melting triglycerides crystal banakar settle ho jaate hain. 40-45\u00b0C water bath par completely melt aur thoroughly mix karke hi uniform, representative aliquot milta hai."
      },
      {
        "question": "1.5 mL 25% Ammonia kyu use kiya jaata hai?",
        "answer": "1. Sodium caseinate aur soy protein coating ko alkaline medium mein dissolve karta hai taaki fat globules release ho sakein.\n2. Polysorbate 60 aur SMS surfactants ki emulsifying capacity ko alkaline conditions mein suppress karta hai.\n3. 10 g NDC mein 0.1-0.3 g protein ke complete dissolution ke liye 1.5 mL 25% NH3 perfectly stoichiometric excess hai."
      },
      {
        "question": "10 mL 95% Ethanol kyu zaroori hai?",
        "answer": "1. Dehydration ke zariye proteins ko precipitate karta hai aur emulsion break karta hai.\n2. NDC mein maujood glucose syrup aur sucrose ko ether mein dissolve hone se rokta hai (sugars remain locked in aqueous alcoholic phase).\n3. Modified starches aur carrageenan hydrocolloids ko aqueous layer mein retain karta hai jisse false high fat weight nahi aata."
      },
      {
        "question": "Diethyl Ether aur Petroleum Ether DONO kyu zaroori hain?",
        "answer": "1. Diethyl Ether (dielectric constant ~4.3) polar lipids, free fatty acids, partial mono/diglycerides, aur lipid-soluble emulsifiers ko extract karta hai.\n2. Petroleum Ether (dielectric constant ~1.9) non-polar triglycerides ko efficiently dissolve karta hai aur water/sugar solubility ko zero kar deta hai.\n3. Dono solvent systems milkar 99%+ complete fat recovery ensure karte hain."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "10.0 g",
        "reason": "~25-35% fat yields 2.5-3.5g fat \u2014 optimal analytical gravimetric range"
      },
      {
        "parameter": "Pre-melting temp",
        "value": "40-45\u00b0C",
        "reason": "Liquefies solid vegetable fat crystals for uniform representative sampling"
      },
      {
        "parameter": "Ammonia (25%)",
        "value": "1.5 mL",
        "reason": "Dissolves caseinate/soy protein barriers and weakens emulsifier micelles"
      },
      {
        "parameter": "Ethanol (95%)",
        "value": "10.0 mL",
        "reason": "Precipitates proteins and prevents sugars/gums from entering ether phase"
      },
      {
        "parameter": "Diethyl Ether",
        "value": "25+15+15 mL",
        "reason": "Extracts polar lipids, partial glycerides, and FFA"
      },
      {
        "parameter": "Petroleum Ether",
        "value": "25+15+15 mL",
        "reason": "Selectively extracts non-polar triglycerides, repelling water and sugars"
      },
      {
        "parameter": "Extraction cycles",
        "value": "3 stages",
        "reason": "Strong synthetic surfactants in NDC require 3 stages for 99% recovery"
      },
      {
        "parameter": "Drying temp",
        "value": "102 \u00b1 2\u00b0C",
        "reason": "Completely volatilizes ether and moisture without lipid thermal oxidation"
      }
    ],
    "referenceStandard": "IS 1224 (Part II) 1977 / AOAC 905.02 / FSSAI Manual 01",
    "reagentsAndApparatus": [
      "Ammonia Solution: 25% (w/w) AR Grade, sp. gr. ~0.910",
      "Ethanol: 95% (v/v) neutralized AR Grade",
      "Diethyl Ether: Peroxide-free, freshly distilled AR Grade",
      "Petroleum Ether: Boiling range 40-60\u00b0C, AR Grade",
      "Mojonnier Extraction Flask (100 mL round bottom with dual necks)",
      "Analytical Balance (sensitivity \u00b10.1 mg)",
      "Thermostatic Drying Oven (calibrated at 102 \u00b1 2\u00b0C)",
      "Desiccator with active silica gel desiccant",
      "Hot water bath at 40-45\u00b0C and 60\u00b0C"
    ],
    "prescribedLimit": "Commercial NDC: 25.0% - 35.0% fat; Low-fat NDC: 15.0% - 20.0%; Whipping Topping: 28.0% - 33.0% (as per declared label)",
    "riskIfFailed": "Fat <25% causes severe whipping failure, low overrun, weak foam peaks, and rapid syrup weeping; fat >38% causes phase inversion, greasy mouthfeel, and batch separation.",
    "procedureSteps": [
      "NDC sample ko 40-45\u00b0C water bath par 15 minute rakh kar completely melt karein aur vortex mixer ya manual shaking se thoroughly mix karein (Cold NDC mein fat crystals alag layer banate hain \u2014 unmixed sample se false fat value aayegi).",
      "Clean, dry Mojonnier flask mein 10.0g sample accurately weigh karein (\u00b10.1 mg analytical balance precision zaroori hai).",
      "Flask mein 1.5 mL 25% ammonia solution dalein, gently swirl karein, aur 15 minute room temperature par chhod dein (Sodium caseinate aur soy protein barriers dissolve ho jaate hain).",
      "10 mL 95% ethanol add karein aur 1 minute vigorously shake karein (Proteins precipitate hote hain aur sugars aqueous phase mein lock ho jaati hain).",
      "25 mL Diethyl Ether add karein, stopper lagayein, aur 1 minute thoroughly invert aur shake karein (Polar lipids aur partial glycerides ether mein solubilize hone lagte hain).",
      "25 mL Petroleum Ether add karein aur 1 minute dobara shake karein (Triglycerides quantitatively organic phase mein shift ho jaate hain).",
      "Flask ko 15-20 minute stand karein jab tak organic solvent layer aur aqueous bottom layer bilkul clear separate na ho jayein (Ya centrifuge karein 500 rpm par 5 minute).",
      "Upper clear ethereal layer ko carefully pre-weighed extraction flask (W1) mein decant karein (Aqueous phase ki ek drop bhi na aane dein warna sugar/protein se false high weight aayega).",
      "Aqueous phase mein 15 mL Diethyl Ether + 15 mL Petroleum Ether dalkar 2nd aur 3rd extraction repeat karein aur saare extracts combine karein.",
      "Combined ether extracts ko 60\u00b0C warm water bath par gentle draft mein evaporate karein (Low temperature fat oxidation prevent karta hai).",
      "Flask ko 102 \u00b1 2\u00b0C oven mein 60 minute dry karein, desiccator mein 30 minute cool karein aur weigh karein (Constant weight criteria: successive differences \u22640.5 mg).",
      "Weight note karein (W3) aur percentage fat calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Prep",
        "title": "Melting & Homogenization",
        "action": "Melt NDC at 40-45\u00b0C water bath and thoroughly mix",
        "scientificMechanism": "Liquefies solid fat crystal networks and achieves uniform dispersed phase"
      },
      {
        "stepNumber": 2,
        "phaseName": "Digestion",
        "title": "Ammonia Treatment",
        "action": "Add 1.5 mL 25% NH4OH, stand for 15 min",
        "scientificMechanism": "Alkaline solubilization of caseinate/soy protein interfacial coats"
      },
      {
        "stepNumber": 3,
        "phaseName": "Alcohol Addition",
        "title": "Ethanol Precipitation",
        "action": "Add 10 mL 95% ethanol, shake 1 min",
        "scientificMechanism": "Precipitates proteins and prevents sucrose/glucose syrup partition into ether"
      },
      {
        "stepNumber": 4,
        "phaseName": "Extraction",
        "title": "Dual Ether Extraction",
        "action": "Add 25 mL Diethyl Ether + 25 mL Pet Ether, shake and separate",
        "scientificMechanism": "Comprehensive dissolution of both polar and neutral lipids into organic phase"
      },
      {
        "stepNumber": 5,
        "phaseName": "Drying & Weighing",
        "title": "Oven Drying to Constant Mass",
        "action": "Evaporate solvents at 60\u00b0C, dry at 102\u00b0C, cool in desiccator and weigh",
        "scientificMechanism": "Volatilizes organic solvents and residual moisture yielding anhydrous fat"
      }
    ]
  },
  {
    "id": "ndc-test-2",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Fat Determination by Gerber Method (IS 1479 Part I Cream Butyrometer)",
    "shortSummary": "Rapid routine factory determination of vegetable fat percentage using 5 mL NDC sample, 90-91% H2SO4, amyl alcohol, and 0-50% cream butyrometer at 65\u00b0C.",
    "detailedScientificRationale": "NDC mein fat content bahut zyada hota hai (25-40%), isliye standard 0-10% milk butyrometer stem overflow ho jaata hai aur pressure build-up se hazard banta hai. Special cream butyrometer (0-50% range, 0.5% graduations) mein 5 mL sample volume use kiya jaata hai (density ~1.01 g/mL = ~5.05 g sample). Concentrated H2SO4 (90-91%, sp. gr. 1.807-1.812) vegetable proteins (soy, pea), caseinates, aur synthetic surfactants (polysorbate 60, SMS) ko completely digest karta hai. Amyl alcohol (1 mL) surfactant micelles ko neutralize karke interfacial tension drastically drop karta hai. 1100-1200 rpm centrifugation aur 65\u00b0C water bath equilibration par clear, transparent fat column banta hai jisse direct visual fat reading mil sakti hai.",
    "detailedTestPrinciple": "Acid Digestion, Centrifugal Separation, and Direct Volumetric Stem Reading (IS 1479 Part I / Gerber Method). 5.0 mL warm (35-40\u00b0C) homogeneous NDC sample ko 10.0 mL 90-91% sulfuric acid aur 1.0 mL furfural-free amyl alcohol ke sath cream butyrometer mein mix kiya jaata hai. 65 \u00b1 2\u00b0C water bath heating ke baad 1100-1200 rpm par 4-5 minute centrifuge kiya jaata hai aur calibrated stem ke lower meniscus se fat percentage directly read ki jaati hai.",
    "chemicalEquation": "NDC Emulsion + H2SO4 (90-91%) \u27f6 Solubilized Proteins/Emulsifiers + Free Vegetable Fat Globules   |   Fat + Amyl Alcohol + Centrifuge (65\u00b0C) \u27f6 Separated Upper Fat Column",
    "formulaBreakdown": {
      "formula": "% Fat = Direct Butyrometer Stem Reading at 65\u00b0C",
      "variables": [
        {
          "symbol": "Reading",
          "description": "Direct percentage reading from the bottom of fat meniscus to fat-acid boundary line on cream butyrometer stem"
        }
      ],
      "derivation": "The 0-50% cream butyrometer stem is calibrated such that 1.0% division corresponds to exactly 0.0556 mL fat volume for a 5.0 mL sample at 65\u00b0C (fat density = 0.893 g/mL).",
      "factorOrigin": "Gerber volumetric calibration standard for dairy and imitation creams (IS 1223 / IS 1479).",
      "unitAnalysis": "% Fat = (mass of fat / mass of sample) \u00d7 100 = direct w/w percentage",
      "practicalExample": "5.0 mL NDC sample pipetted at 38\u00b0C. Centrifuged at 1200 rpm, tempered at 65\u00b0C. Lower meniscus = 32.5%. Fat Content = 32.5% Fat (Complies with whipping cream spec 30-35%) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "NDC mein 5 mL sample kyu lete hain? Milk ka 10.75 mL kyu nahi?",
        "answer": "1. Milk mein fat sirf 3-5% hota hai, jabki NDC mein 25-40% fat hota hai.\n2. Agar 10.75 mL NDC lein to fat volume ~3.5 mL ho jayega jo stem se bahar nikal kar stopper ko blow kar dega.\n3. 5 mL sample cream butyrometer ke 0-50% stem volume range mein perfectly fit hota hai."
      },
      {
        "question": "Amyl alcohol strictly 1 mL furfural-free kyu hona chahiye?",
        "answer": "1. 1 mL se kam lene par NDC ke synthetic emulsifiers (polysorbate 60) neutralize nahi honge aur fat column hazy/turbid aayega.\n2. 1 mL se zyada lene par amyl alcohol khud fat layer mein dissolve hokar false high reading dega.\n3. Furfural acid ke sath react karke dark brown polymer banata hai jo meniscus visibility ko block karta hai."
      },
      {
        "question": "Water bath aur reading strictly 65 \u00b1 2\u00b0C par kyu honi chahiye?",
        "answer": "1. Vegetable fats (palm kernel, coconut oil) ka melting point 26-38\u00b0C hota hai \u2014 65\u00b0C par ye completely liquid hote hain.\n2. Cream butyrometer ki stem volumetric scale strictly 65\u00b0C fat density (~0.893 g/mL) par calibrate ki gayi hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample volume",
        "value": "5.0 mL (warmed to 35-40\u00b0C)",
        "reason": "Accommodates high 25-40% fat within 0-50% calibrated stem"
      },
      {
        "parameter": "H2SO4 volume",
        "value": "10.0 mL (90-91%, sp gr 1.807-1.812)",
        "reason": "Digests soy/casein proteins and synthetic emulsifiers without charring"
      },
      {
        "parameter": "Amyl alcohol",
        "value": "1.0 mL (furfural-free)",
        "reason": "Destabilizes surfactant interface and yields transparent fat meniscus"
      },
      {
        "parameter": "Centrifuge speed",
        "value": "1100 - 1200 rpm for 4-5 min",
        "reason": "Optimal centrifugal force for rapid liquid-liquid density separation"
      },
      {
        "parameter": "Tempering bath",
        "value": "65 \u00b1 2\u00b0C for 5 min",
        "reason": "Matches standard calibration temperature of butyrometer scale"
      }
    ],
    "referenceStandard": "IS 1479 (Part I) 1961 (Reaffirmed 2003) \u2014 Modified for Cream",
    "reagentsAndApparatus": [
      "Cream Butyrometer: ISI marked 0-50% with 0.5% graduations",
      "Gerber Sulphuric Acid: 90-91% concentration (sp. gr. 1.807 - 1.812 at 27\u00b0C)",
      "Amyl Alcohol: AR grade, furfural-free (sp. gr. 0.808 - 0.818 at 27\u00b0C)",
      "Gerber Centrifuge: 1100 - 1200 rpm with heated head",
      "Water bath thermostatically controlled at 65 \u00b1 2\u00b0C",
      "5.0 mL volumetric cream pipette and automatic tilt measures"
    ],
    "prescribedLimit": "Commercial Whipping NDC: 28.0% - 35.0% fat; Cooking NDC: 20.0% - 25.0% fat",
    "riskIfFailed": "Low fat (<25%) causes whipping failure, loose watery foam, and cake sagging; excess fat (>38%) causes phase inversion, greasy mouthfeel, and batch separation.",
    "procedureSteps": [
      "NDC sample ko 35-40\u00b0C par warm karein aur vortex mixer ya manual swirling se homogeneous banayein (High fat settle na ho).",
      "Cream butyrometer mein 10.0 mL Gerber sulfuric acid dalein bina neck ko geela kiye.",
      "5.0 mL cream sample pipette se carefully butyrometer neck ke side se layer karein.",
      "1.0 mL amyl alcohol add karein aur lock stopper se tight seal karein.",
      "Butyrometer ko safety cloth/towel mein pakad kar 45\u00b0 par invert karein aur shake karein jab tak saara protein aur emulsifier completely dissolve na ho jaye.",
      "Tube ko 65 \u00b1 2\u00b0C water bath mein 5 minute rakhein.",
      "Centrifuge mein symmetrically balance karein aur 1100-1200 rpm par 4-5 minute centrifuge karein.",
      "Tube ko wapas 65\u00b0C water bath mein 5 minute rakhein, stopper ko adjust karke fat column ko graduated scale par layein aur lower meniscus se reading padhein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Acid Addition",
        "title": "10 mL H2SO4",
        "action": "Add 10 mL 90-91% H2SO4 to cream butyrometer",
        "scientificMechanism": "Provides strong digestive medium"
      },
      {
        "stepNumber": 2,
        "phaseName": "Sample Layering",
        "title": "5 mL NDC Sample",
        "action": "Layer 5 mL warmed NDC onto acid",
        "scientificMechanism": "Forms distinct layer prior to controlled mixing"
      },
      {
        "stepNumber": 3,
        "phaseName": "Surfactant Neutralization",
        "title": "1 mL Amyl Alcohol",
        "action": "Add 1 mL amyl alcohol and shake vigorously",
        "scientificMechanism": "Dissolves caseinate coats and lowers interfacial tension"
      },
      {
        "stepNumber": 4,
        "phaseName": "Separation",
        "title": "Centrifugation at 65\u00b0C",
        "action": "Centrifuge at 1200 rpm and temper in 65\u00b0C bath",
        "scientificMechanism": "Separates lighter vegetable fat into calibrated stem"
      },
      {
        "stepNumber": 5,
        "phaseName": "Measurement",
        "title": "Stem Reading",
        "action": "Read fat column percentage at lower meniscus",
        "scientificMechanism": "Direct volumetric fat readout on calibrated 0-50% scale"
      }
    ]
  },
  {
    "id": "ndc-test-3",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Free Fatty Acids (FFA) Determination (AOCS Cd 3d-63 / IS 548 Part I)",
    "shortSummary": "Acid-base titration of extracted vegetable fat dissolved in neutralized 95% ethanol against 0.1 N KOH to measure lipolytic and hydrolytic rancidity as % oleic acid.",
    "detailedScientificRationale": "NDC mein vegetable fats (fractionated palm kernel oil, coconut oil) hote hain jinme lauric acid (C12:0) aur myristic acid (C14:0) predominant hote hain. Storage ke dauran microbial lipases ya moisture hydrolysis se triglycerides cleave hokar free fatty acids (FFA) liberate karte hain. Free lauric aur myristic acids low sensory threshold par extremely soapy, bitter, aur pungent rancid taste create karte hain. FSSAI aur industrial standards ke anusaar commercial whipping fats mein FFA strictly < 0.35% (as oleic acid) hona chahiye. FFA > 0.5% hone par product rejected maana jaata hai kyunki ye surfactant balance ko disturb karta hai aur shelf life ko drastically khatam kar deta hai.",
    "detailedTestPrinciple": "Alcoholic Solubilization and Alkaline Neutralization Titration (AOCS Cd 3d-63 / IS 548). 3.0-5.0g melted NDC fat ko 50 mL neutralized 95% ethanol mein dissolve kiya jaata hai (ethanol fat aur free carboxylic acids dono ko homogeneous phase mein lata hai). Standardized 0.1000 N KOH se titrate kiya jaata hai jab tak phenolphthalein indicator ka faint pink endpoint 15 seconds tak persist na kare.",
    "chemicalEquation": "R-COOH (Free Fatty Acid) + KOH \u27f6 R-COOK + H2O   [Endpoint pH 8.5-9.0, Colorless to Faint Pink]",
    "formulaBreakdown": {
      "formula": "% FFA (as Oleic Acid) = [(V - V_blank) \u00d7 N \u00d7 28.2] / W",
      "variables": [
        {
          "symbol": "V",
          "description": "Volume of standardized 0.1 N KOH consumed in sample titration (mL)"
        },
        {
          "symbol": "V_blank",
          "description": "Volume of KOH consumed during neutral alcohol blank titration (typically 0.05 mL)"
        },
        {
          "symbol": "N",
          "description": "Standardized exact normality of Potassium Hydroxide titrant (0.1000 N)"
        },
        {
          "symbol": "28.2",
          "description": "Factor derived from Oleic Acid molecular mass (282.46 g/mol / 10)"
        },
        {
          "symbol": "W",
          "description": "Accurate mass of fat test sample (typically 5.0000 g)"
        }
      ],
      "derivation": "1 mL of 0.1 N KOH = 0.0282 g oleic acid. % FFA = [(mL KOH \u00d7 0.0282 g/mL) / W] \u00d7 100 = (mL KOH \u00d7 2.82) / W.",
      "factorOrigin": "Oleic acid (C18:1, MW 282.46) is the universal international reference standard for vegetable oil FFA.",
      "unitAnalysis": "% FFA = [mL \u00d7 (meq/mL) \u00d7 (g acid / meq) \u00d7 100] / g sample = % w/w as oleic acid",
      "practicalExample": "W = 5.0000 g fat, V = 0.80 mL 0.1000 N KOH, V_blank = 0.00. % FFA = (0.80 \u00d7 0.1000 \u00d7 28.2) / 5.0000 = 2.256 / 5 = 0.45% as Oleic Acid (Within acceptable commercial limit < 0.50%) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "95% Ethanol kyu use karte hain? Paani kyu nahi?",
        "answer": "Fat non-polar hydrophobic molecule hai jo paani mein bilkul insoluble hota hai. 95% neutralized ethanol fat ko completely dissolve karta hai aur free fatty acids ke carboxyl groups ko KOH ke sath instantaneous, uniform ionic reaction ke liye expose karta hai."
      },
      {
        "question": "Alcohol ko pehle NEUTRALIZE karna kyu mandatory hai?",
        "answer": "Commercial ethanol mein atmospheric CO2 absorb hone se carbonic acid ya trace acetic acid hoti hai. Agar alcohol ko pehle se neutralize na karein to solvent ki apni acidity KOH consume karegi aur false high FFA aayegi."
      },
      {
        "question": "Reference standard ke roop mein Oleic Acid (MW 282) kyu use karte hain?",
        "answer": "Vegetable oil industry convention ke tehat FFA ko oleic acid (MW 282) ke roop mein express kiya jaata hai taaki international trade aur quality comparison standard bana rahe."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "3.0 - 5.0 g fat",
        "reason": "Provides 0.8-2.5 mL titration range on 25 mL microburette"
      },
      {
        "parameter": "Solvent",
        "value": "50 mL 95% Neutral Ethanol",
        "reason": "Dissolves lipid phase and provides homogeneous reaction medium"
      },
      {
        "parameter": "Titrant",
        "value": "0.1000 N Standard KOH",
        "reason": "High analytical precision for weak carboxylic acid neutralization"
      },
      {
        "parameter": "Indicator",
        "value": "0.5 mL 1% Phenolphthalein",
        "reason": "Distinct colorless to faint pink transition at stoichiometric pH 8.5-9.0"
      },
      {
        "parameter": "Endpoint persistence",
        "value": "15 seconds",
        "reason": "Distinguishes true stoichiometric neutralization from ambient CO2 absorption"
      }
    ],
    "referenceStandard": "AOCS Official Method Cd 3d-63 / IS 548 (Part I)",
    "reagentsAndApparatus": [
      "Standard Potassium Hydroxide: 0.1000 N accurately standardized in ethanol or DI water",
      "Neutralized Ethanol: 95% (v/v) AR Grade neutralized to faint pink phenolphthalein",
      "Phenolphthalein Indicator: 1.0% (w/v) in 95% ethanol",
      "250 mL wide-neck Erlenmeyer flasks and 25 mL precision burette (0.05 mL divisions)",
      "Thermostatic water bath at 50-60\u00b0C"
    ],
    "prescribedLimit": "Fresh NDC Fat: < 0.35% as Oleic Acid; Acceptable Limit: Max 0.50%; Spoiled/Rancid: > 1.00%",
    "riskIfFailed": "High FFA (>0.5%) causes unpleasant soapy/pungent off-flavor, severe foam instability, rapid syneresis, and customer rejection.",
    "procedureSteps": [
      "NDC sample ko 50-60\u00b0C par warm karein taaki fat completely melt ho jaye aur thoroughly mix karein.",
      "Clean 250 mL Erlenmeyer flask mein 3.0-5.0g fat sample accurately weigh karein (W).",
      "50 mL 95% ethanol lein, 2-3 drops phenolphthalein dalein aur 0.1N KOH se dropwise neutralize karein jab tak faint pink colour na aa jaye (Neutral alcohol prep).",
      "Neutralized alcohol ko sample flask mein add karein aur water bath (45-50\u00b0C) par gently swirl karke fat ko completely dissolve karein.",
      "2 drops extra phenolphthalein dalein aur standard 0.1000 N KOH se titrate karein continuously swirl karte hue.",
      "Dropwise addition karein jab tak poore solution mein faint pink colour 15 seconds tak persist na kare.",
      "Burette volume V (mL) note karein aur formula se % FFA calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Weighing",
        "title": "5g Fat Sample",
        "action": "Weigh ~5.0g melted NDC fat into flask",
        "scientificMechanism": "Provides measurable fatty acid quantity"
      },
      {
        "stepNumber": 2,
        "phaseName": "Solvent Neutralization",
        "title": "Neutral Ethanol",
        "action": "Neutralize 50 mL 95% ethanol to faint pink",
        "scientificMechanism": "Eliminates solvent background acidity"
      },
      {
        "stepNumber": 3,
        "phaseName": "Dissolution",
        "title": "Lipid Dissolution",
        "action": "Dissolve fat in warm neutral ethanol",
        "scientificMechanism": "Brings non-polar triglycerides and polar FFA into single phase"
      },
      {
        "stepNumber": 4,
        "phaseName": "Alkaline Titration",
        "title": "0.1 N KOH Titration",
        "action": "Titrate against 0.1N KOH with continuous swirling",
        "scientificMechanism": "Neutralizes free carboxylic acid protons"
      },
      {
        "stepNumber": 5,
        "phaseName": "Endpoint",
        "title": "15s Faint Pink",
        "action": "Stop at 15s stable faint pink endpoint, record V mL",
        "scientificMechanism": "Marks stoichiometric completion without atmospheric CO2 interference"
      }
    ]
  },
  {
    "id": "ndc-test-4",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Peroxide Value (PV) Determination (AOCS Cd 8-53 / IS 548 Part I)",
    "shortSummary": "Iodometric titration measuring elemental iodine released by lipid hydroperoxides in acetic acid-chloroform medium against 0.01 N sodium thiosulfate.",
    "detailedScientificRationale": "Vegetable fats mein unsaturated fatty acids (oleic, linoleic) heat, atmospheric oxygen, light, aur trace metals se react karke primary oxidation products \u2014 hydroperoxides (ROOH) banate hain. Peroxide Value (PV) lipid oxidation ke initial stages ka direct quantitative indicator hai. Fresh non-dairy cream fat mein PV < 2.0 meq/kg hona chahiye; value 5.0 meq/kg se badhne par rancid, cardboard-like aur oxidized off-flavors develop hone lagte hain. Secondary oxidation mein hydroperoxides decompose hokar volatile aldehydes aur ketones banate hain, isliye low PV maintain karna NDC shelf life ke liye fundamental requirement hai.",
    "detailedTestPrinciple": "Iodometric Redox Titration in Glacial Acetic Acid-Chloroform Medium (AOCS Cd 8-53 / IS 548). 5.0g melted NDC fat ko 30 mL glacial acetic acid:chloroform (3:2 v/v) mein dissolve kiya jaata hai. Saturated potassium iodide (KI) add karke 1 minute dark mein react karwaya jaata hai \u2014 hydroperoxides stoichiometric elemental iodine (I2) release karte hain. Liberated iodine ko standardized 0.0100 N sodium thiosulfate (Na2S2O3) se starch indicator ki presence mein titrate kiya jaata hai jab tak blue-black color completely disappear na ho jaye.",
    "chemicalEquation": "ROOH + 2I- + 2CH3COOH \u27f6 ROH + I2 + 2CH3COO- + H2O   |   I2 + 2S2O3^2- \u27f6 2I- + S4O6^2- [Blue-Black to Colorless]",
    "formulaBreakdown": {
      "formula": "Peroxide Value (meq peroxide / kg fat) = [(V_sample - V_blank) \u00d7 N \u00d7 1000] / W",
      "variables": [
        {
          "symbol": "V_sample",
          "description": "Volume of 0.01 N Na2S2O3 consumed during sample titration (mL)"
        },
        {
          "symbol": "V_blank",
          "description": "Volume of 0.01 N Na2S2O3 consumed during reagent blank titration (typically 0.05-0.10 mL)"
        },
        {
          "symbol": "N",
          "description": "Standardized exact normality of Sodium Thiosulfate titrant (0.0100 N)"
        },
        {
          "symbol": "1000",
          "description": "Multiplier to convert grams of sample to kilograms basis"
        },
        {
          "symbol": "W",
          "description": "Accurate mass of fat test sample taken (typically 5.0000 g)"
        }
      ],
      "derivation": "1 mL of 0.01 N Na2S2O3 reacts with 0.01 milliequivalents of liberated iodine, equivalent to 0.01 meq active oxygen. Scaling by sample weight W and multiplying by 1000 expresses active oxygen in meq/kg.",
      "factorOrigin": "Standard international definition of Peroxide Value (milli-equivalents of peroxide per kg of fat).",
      "unitAnalysis": "PV = [mL \u00d7 (meq/mL) \u00d7 1000 g/kg] / g fat = meq peroxide / kg fat",
      "practicalExample": "W = 5.0000 g, V_sample = 2.40 mL, V_blank = 0.10 mL, N = 0.0100 N. PV = [(2.40 - 0.10) \u00d7 0.0100 \u00d7 1000] / 5.0000 = (2.30 \u00d7 10) / 5.0000 = 4.60 meq/kg (Fresh acceptable quality NDC fat < 5.0 meq/kg) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Acetic Acid aur Chloroform ka 3:2 ratio kyu zaroori hai?",
        "answer": "1. Chloroform non-polar solvent hai jo vegetable fat ko completely dissolve karta hai.\n2. Glacial acetic acid KI ko ionize karta hai aur reaction ke liye zaroori protonated acidic medium deta hai.\n3. 3:2 ratio optimal miscibility deta hai jisse fat dissolve rehta hai aur iodide ions smoothly react karte hain."
      },
      {
        "question": "Reaction ko strictly DARK mein kyu rakha jaata hai?",
        "answer": "Iodide ions aur liberated elemental iodine light-sensitive hote hain. Ambient room light KI ke photo-oxidation ko catalyze karti hai jisse false high peroxide value aati hai. 1 minute darkness mein pure peroxide reaction hoti hai."
      },
      {
        "question": "Starch indicator shuru mein kyu nahi daala jaata?",
        "answer": "Agar concentrated iodine mein shuru se starch dalein to iodine starch helical amylose core mein irreversibly adsorb ho jaati hai aur thiosulfate se react nahi karti, jisse endpoint late aur diffused aata hai. Isliye solution pale straw yellow hone ke baad hi starch add karte hain."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "5.0 g fat",
        "reason": "Sufficient lipid mass for measurable titration volume with 0.01N titrant"
      },
      {
        "parameter": "Solvent system",
        "value": "30 mL Acetic Acid:Chloroform (3:2)",
        "reason": "Complete fat dissolution with optimal proton-donating acidic activity"
      },
      {
        "parameter": "Potassium Iodide",
        "value": "0.5 mL Saturated KI (fresh)",
        "reason": "Maximum iodide excess to drive quantitative peroxide reduction"
      },
      {
        "parameter": "Incubation",
        "value": "Strictly 1 min in complete darkness",
        "reason": "Prevents photo-oxidation of iodide ions by ambient light"
      },
      {
        "parameter": "Titrant",
        "value": "0.0100 N Standard Na2S2O3",
        "reason": "Accurate burette resolution for 1-5 meq/kg peroxide levels"
      },
      {
        "parameter": "Indicator",
        "value": "1 mL 1% Fresh Starch Solution",
        "reason": "Sharp reversible blue-black to completely colorless endpoint"
      }
    ],
    "referenceStandard": "AOCS Official Method Cd 8-53 / IS 548 (Part I)",
    "reagentsAndApparatus": [
      "Glacial Acetic Acid:Chloroform mixture (3:2 v/v) AR Grade",
      "Saturated Potassium Iodide (KI) solution (freshly prepared, iodine-free)",
      "Standard Sodium Thiosulfate: 0.0100 N freshly standardized against KIO3",
      "Starch Indicator Solution: 1.0% (w/v) fresh aqueous paste",
      "250 mL ground-glass stoppered Iodine Flasks",
      "10 mL / 25 mL precision microburette and automated dispenser"
    ],
    "prescribedLimit": "Fresh NDC Fat: < 2.0 meq/kg; Acceptable Commercial Limit: Max 5.0 meq/kg; Rancid/Reject: > 10.0 meq/kg",
    "riskIfFailed": "High peroxide value (>10 meq/kg) causes cardboard/painty oxidized off-flavor, destroys vitamins, degrades whipping volume, and creates toxic lipid oxidation by-products.",
    "procedureSteps": [
      "Melted NDC fat sample ka 5.0000g clean, dry 250 mL iodine flask mein accurately weigh karein (W).",
      "30 mL acetic acid:chloroform (3:2) mixture add karein aur swirl karke fat ko completely dissolve karein.",
      "0.5 mL freshly prepared saturated KI solution add karein, stopper lagayein aur stopwatch on karein.",
      "Flask ko dark cupboard mein strictly 1 minute ke liye rakhein, 30 second par gently shake karein.",
      "1 min complete hote hi turant 30 mL distilled water add karein (Reaction stop hoti hai aur iodine aqueous phase mein aati hai).",
      "Burette se 0.0100 N Na2S2O3 solution add karein swirling ke sath jab tak yellow color pale straw-yellow na ho jaye.",
      "1 mL fresh 1% starch indicator add karein (Deep blue-black color develop hoga).",
      "Titration dropwise continue karein jab tak blue color completely disappear hokar milk-white emulsion na ban jaye.",
      "Volume V_sample (mL) note karein. Blank titration (bina sample ke) perform karein aur formula se PV calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Prep",
        "title": "5g Fat in Solvent",
        "action": "Dissolve 5.0g fat in 30 mL Acetic-Chloroform (3:2)",
        "scientificMechanism": "Provides homogeneous lipid solution in acidic medium"
      },
      {
        "stepNumber": 2,
        "phaseName": "Iodide Reaction",
        "title": "Saturated KI in Dark",
        "action": "Add 0.5 mL KI, stand 1 min in dark",
        "scientificMechanism": "Hydroperoxides quantitatively oxidize I- to elemental I2"
      },
      {
        "stepNumber": 3,
        "phaseName": "Quenching",
        "title": "30 mL Water Addition",
        "action": "Add 30 mL distilled water, swirl",
        "scientificMechanism": "Stops reaction and partitions iodine into aqueous titration phase"
      },
      {
        "stepNumber": 4,
        "phaseName": "Pre-Titration",
        "title": "Thiosulfate to Pale Yellow",
        "action": "Titrate with 0.01N Na2S2O3 until pale yellow",
        "scientificMechanism": "Consumes bulk iodine before adding starch indicator"
      },
      {
        "stepNumber": 5,
        "phaseName": "Endpoint",
        "title": "Starch Indicator Decolorization",
        "action": "Add starch, titrate dropwise to colorless endpoint",
        "scientificMechanism": "Measures total stoichiometric active peroxide oxygen"
      }
    ]
  },
  {
    "id": "ndc-test-5",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Saponification Value (SV) Determination (AOCS Cd 3-25 / IS 548)",
    "shortSummary": "Alkaline saponification with excess 0.5 N alcoholic KOH under reflux and acidimetric back-titration with 0.5 N HCl to evaluate fatty acid chain length and fat authenticity.",
    "detailedScientificRationale": "Saponification Value (SV) 1 gram fat ko completely saponify karne ke liye required Potassium Hydroxide (KOH) ki milligrams (mg) quantity hoti hai. SV fatty acids ke average molecular weight ke inversely proportional hoti hai. NDC whipping creams mein primary fat Palm Kernel Oil (PKO, SV ~245-255) ya Coconut Oil (SV ~250-265) hota hai jisme high concentration of short/medium chain fatty acids (lauric C12, myristic C14) hote hain jo fast melting aur sharp stand-up rigidity dete hain. Agar manufacturer ne cheap palm oil (SV ~195-205) ya liquid vegetable oils (SV ~185-195) se adulterate kiya ho to SV drastically drop ho jaati hai, jisse whipped cream room temperature par melt hokar collapse ho jaati hai.",
    "detailedTestPrinciple": "Excess Alkaline Reflux and Acidimetric Back-Titration (AOCS Cd 3-25 / IS 548). 2.0g melted NDC fat ko exactly 25.0 mL 0.5000 N alcoholic KOH ke sath reflux condenser par 30 minute boil kiya jaata hai (triglycerides glycerol aur potassium soaps mein split ho jaate hain). Unreacted excess KOH ko standardized 0.5000 N HCl se phenolphthalein indicator ki presence mein back-titrate kiya jaata hai (pink to colorless endpoint).",
    "chemicalEquation": "C3H5(OOCR)3 (Triglyceride) + 3KOH \u27f6 C3H5(OH)3 (Glycerol) + 3RCOOK (Potassium Soap)   |   Excess KOH + HCl \u27f6 KCl + H2O [Pink to Colorless]",
    "formulaBreakdown": {
      "formula": "Saponification Value (mg KOH / g fat) = [(V_blank - V_sample) \u00d7 N_HCl \u00d7 56.11] / W",
      "variables": [
        {
          "symbol": "V_blank",
          "description": "Volume of 0.5 N HCl consumed during reagent blank titration (mL)"
        },
        {
          "symbol": "V_sample",
          "description": "Volume of 0.5 N HCl consumed during sample titration (mL)"
        },
        {
          "symbol": "N_HCl",
          "description": "Standardized exact normality of Hydrochloric Acid titrant (0.5000 N)"
        },
        {
          "symbol": "56.11",
          "description": "Molecular weight of Potassium Hydroxide (56.11 mg KOH per milliequivalent)"
        },
        {
          "symbol": "W",
          "description": "Accurate mass of fat test sample taken (typically 2.0000 g)"
        }
      ],
      "derivation": "The net consumed KOH is given by (V_blank - V_sample) \u00d7 N_HCl milliequivalents. Multiplying by 56.11 mg/meq gives total consumed KOH in milligrams, divided by sample mass W in grams.",
      "factorOrigin": "Equivalent weight of Potassium Hydroxide (KOH = 56.11 g/equiv).",
      "unitAnalysis": "SV = [mL \u00d7 (meq/mL) \u00d7 (mg KOH / meq)] / g fat = mg KOH / g fat",
      "practicalExample": "W = 2.0000 g, V_blank = 24.80 mL, V_sample = 7.10 mL, N_HCl = 0.5000 N. Net consumed = 17.70 mL. SV = (17.70 \u00d7 0.5000 \u00d7 56.11) / 2.0000 = 496.57 / 2.0000 = 248.29 mg KOH/g (Authentic high-lauric Palm Kernel Oil based NDC) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Alcoholic KOH kyu use karte hain? Aqueous KOH kyu nahi?",
        "answer": "Fat hydrophobic non-polar triglycerides se bana hota hai jo aqueous medium mein float karke phase separate ho jaata hai. Ethanol fat aur KOH dono ko mutually dissolve karke homogeneous single-phase reaction environment deta hai jisse 30 minute mein 100% saponification achieve hoti hai."
      },
      {
        "question": "30 minute reflux boiling kyu zaroori hai?",
        "answer": "High-melting fractionated vegetable fats room temperature par saponify nahi hote. Reflux condenser volatile ethanol vapors ko condense karke wapas flask mein bhejta hai jisse concentration change hue bina 78\u00b0C boiling point par complete ester cleavage ensure hoti hai."
      },
      {
        "question": "Blank titration ka kya role hai?",
        "answer": "Blank titration mein wahi 25.0 mL alcoholic KOH bina sample ke reflux hota hai. Ye boiling ke dauran atmospheric CO2 absorption aur alcohol evaporation losses ko balance karta hai, jisse sample titration ka difference strictly consumed fat saponification ko reflect karta hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "1.5 - 2.0 g fat",
        "reason": "Consumes ~15-18 mL of 0.5N KOH leaving sufficient back-titre volume"
      },
      {
        "parameter": "Reagent",
        "value": "25.0 mL 0.5000 N Alcoholic KOH",
        "reason": "Stoichiometric excess guaranteeing 100% triglyceride saponification"
      },
      {
        "parameter": "Reflux conditions",
        "value": "Boiling for strictly 30 min",
        "reason": "Ensures complete cleavage of all ester bonds with zero solvent loss"
      },
      {
        "parameter": "Back-titrant",
        "value": "0.5000 N Standardized HCl",
        "reason": "Equal normality for simple molar subtraction against alcoholic KOH"
      },
      {
        "parameter": "Indicator",
        "value": "1.0 mL 1% Phenolphthalein",
        "reason": "Sharp pink to completely colorless neutralization endpoint"
      }
    ],
    "referenceStandard": "AOCS Official Method Cd 3-25 / IS 548 (Part I)",
    "reagentsAndApparatus": [
      "Alcoholic Potassium Hydroxide: 0.5000 N in aldehyde-free 95% ethanol",
      "Standard Hydrochloric Acid: 0.5000 N accurately standardized with Na2CO3",
      "Phenolphthalein Indicator: 1% (w/v) in neutralized 95% ethanol",
      "250 mL ground-joint Erlenmeyer flasks with Liebig air/water reflux condensers",
      "Electric hotplate / water bath and 50 mL Class-A precision burette"
    ],
    "prescribedLimit": "Palm Kernel Oil (PKO) based NDC: 240 - 260 mg KOH/g; Coconut Oil based NDC: 250 - 265 mg KOH/g; Hydrogenated Fat NDC: 190 - 220 mg KOH/g",
    "riskIfFailed": "Low SV (<220 for PKO topping) indicates adulteration with low-melting soft oils, causing cake collapse, poor foam stiffness, and greasy mouthfeel.",
    "procedureSteps": [
      "NDC fat sample ko 50\u00b0C par melt karein aur clear anhydrous aliquot lein.",
      "250 mL reflux flask mein accurately ~2.0000g sample weigh karein (W).",
      "Pipette se exactly 25.0 mL 0.5000 N alcoholic KOH solution add karein.",
      "Flask ko reflux condenser se connect karein aur boiling water bath par 30 minute gently boil karein (Swirl occasionally).",
      "30 min baad condenser inner tube ko 10 mL neutral distilled water se flask mein rinse karein aur flask ko room temperature par cool karein.",
      "1.0 mL phenolphthalein indicator add karein (Deep pink color).",
      "Standard 0.5000 N HCl se titrate karein continuously swirling karte hue jab tak pink color completely disappear na ho jaye. V_sample (mL) note karein.",
      "Blank determination (same 25.0 mL alcoholic KOH bina sample ke) exactly same reflux aur titration ke sath perform karein aur V_blank note karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Weighing",
        "title": "2g Fat Weighing",
        "action": "Weigh 2.0g melted NDC fat into 250 mL flask",
        "scientificMechanism": "Provides stoichiometric lipid mass for 25 mL reagent"
      },
      {
        "stepNumber": 2,
        "phaseName": "Alkali Addition",
        "title": "25 mL Alcoholic KOH",
        "action": "Add exactly 25.0 mL 0.5N alcoholic KOH",
        "scientificMechanism": "Provides excess potassium ethoxide and hydroxide ions"
      },
      {
        "stepNumber": 3,
        "phaseName": "Reflux Saponification",
        "title": "30 Min Reflux Boiling",
        "action": "Boil under reflux condenser for 30 minutes",
        "scientificMechanism": "Hydrolyzes all triglyceride ester linkages to glycerol and soap"
      },
      {
        "stepNumber": 4,
        "phaseName": "Cooling & Rinse",
        "title": "Condenser Rinse & Cool",
        "action": "Rinse condenser with DI water, cool to 25\u00b0C",
        "scientificMechanism": "Recovers condensed alkali droplets and stabilizes solution"
      },
      {
        "stepNumber": 5,
        "phaseName": "Back-Titration",
        "title": "0.5 N HCl Titration",
        "action": "Titrate excess alkali with 0.5N HCl to colorless",
        "scientificMechanism": "Quantifies unreacted KOH and determines net saponification mass"
      }
    ]
  },
  {
    "id": "ndc-test-6",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Iodine Value (IV) Determination by Wijs Method (AOCS Cd 1-25 / IS 548)",
    "shortSummary": "Electrophilic halogen addition of iodine monochloride (ICl) across unsaturated double bonds and iodometric titration to determine hydrogenation degree and foam stability.",
    "detailedScientificRationale": "Iodine Value (IV) 100 gram vegetable fat dwara absorb ki gayi halogen (elemental iodine equivalent) ki grams quantity hoti hai. Ye fat mein maujood carbon-carbon double bonds (C=C unsaturation) ka direct quantitative measurement hai. Non-Dairy Cream (NDC) whipping performance strictly controlled solid fat content (SFC) aur crystallization behavior par depend karti hai. Whipping toppings mein use hone wala fractionated palm kernel oil ya hydrogenated vegetable fat low Iodine Value (IV 14-20 ya <10) ka hota hai jisse 4-7\u00b0C par solid fat crystal network banta hai jo whipping ke time air cells ko structural firmness deta hai. High IV (>40) soft, liquid oils ki presence darshata hai jisse cream whip nahi hoti aur watery foam collapse ho jaati hai.",
    "detailedTestPrinciple": "Electrophilic Halogen Addition and Iodometric Thiosulfate Titration (Wijs Method - AOCS Cd 1-25 / IS 548). 0.3-0.5g clear melted NDC fat ko 15 mL chloroform mein dissolve kiya jaata hai. Excess Wijs reagent (ICl in glacial acetic acid) add karke strictly 30 minute dark mein react karwaya jaata hai \u2014 ICl double bonds par stoichiometrically add ho jaata hai. Unreacted excess ICl ko 10% potassium iodide (KI) se react karke elemental iodine (I2) release ki jaati hai, jise standardized 0.1000 N sodium thiosulfate (Na2S2O3) se starch indicator ki presence mein titrate kiya jaata hai.",
    "chemicalEquation": "-CH=CH- (Unsaturated Fat) + ICl (Excess) \u27f6 -CHI-CHCl-   |   Unreacted ICl + KI \u27f6 KCl + I2   |   I2 + 2Na2S2O3 \u27f6 2NaI + Na2S4O6 [Blue to Colorless]",
    "formulaBreakdown": {
      "formula": "Iodine Value (g I2 / 100 g fat) = [12.69 \u00d7 N \u00d7 (V_blank - V_sample)] / W",
      "variables": [
        {
          "symbol": "V_blank",
          "description": "Volume of 0.1 N Na2S2O3 consumed during blank titration (mL)"
        },
        {
          "symbol": "V_sample",
          "description": "Volume of 0.1 N Na2S2O3 consumed during sample titration (mL)"
        },
        {
          "symbol": "N",
          "description": "Standardized exact normality of Sodium Thiosulfate titrant (0.1000 N)"
        },
        {
          "symbol": "12.69",
          "description": "Constant factor representing (Atomic weight of Iodine 126.9 / 1000) \u00d7 100"
        },
        {
          "symbol": "W",
          "description": "Accurate mass of fat test sample taken (typically ~0.5000 g)"
        }
      ],
      "derivation": "1 mL of 1 N Na2S2O3 neutralizes 0.1269 g iodine. For N normal solution: grams of I2 absorbed = (V_blank - V_sample) \u00d7 N \u00d7 0.1269. Normalized to 100g basis: IV = [(V_blank - V_sample) \u00d7 N \u00d7 0.1269 \u00d7 100] / W = [12.69 \u00d7 N \u00d7 (V_blank - V_sample)] / W.",
      "factorOrigin": "Atomic weight of Iodine (126.904 g/mol) and 100-gram statutory definition.",
      "unitAnalysis": "IV = [mL \u00d7 (meq/mL) \u00d7 (0.1269 g I2 / meq) \u00d7 100] / g fat = g I2 / 100g fat",
      "practicalExample": "W = 0.5000 g, V_blank = 45.50 mL, V_sample = 38.60 mL (Difference = 6.90 mL), N = 0.1000 N. IV = (12.69 \u00d7 0.1000 \u00d7 6.90) / 0.5000 = 8.756 / 0.5000 = 17.51 g I2/100g (Authentic commercial Palm Kernel Oil whipping fat range 14-20) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Wijs reagent (ICl) pure Iodine (I2) se better kyu hai?",
        "answer": "Pure I2 ka addition carbon-carbon double bonds par extremely slow aur incomplete hota hai. Iodine monochloride (ICl) highly polar electrophilic reagent hai jo double bonds par minutes mein quantitatively add ho jaata hai bina side substitution reactions ke."
      },
      {
        "question": "Reaction strictly 30 minute DARK mein kyu karni chahiye?",
        "answer": "ICl aur liberated iodine light-sensitive hote hain. Ambient sunlight ya laboratory lighting halogen radicals produce karti hai jo allylic substitution reactions karti hain jisse erroneous high iodine absorption reading aati hai. Dark storage clean addition ensure karti hai."
      },
      {
        "question": "Starch indicator near endpoint par kyu add karte hain?",
        "answer": "Concentrated iodine starch ke sath irreversible inclusion complex banati hai. Pehle solution ko pale straw-yellow tak titrate karne se free iodine dilute ho jaati hai, jiske baad starch dalte hi sharp reversible blue-to-colorless endpoint milta hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "0.3 - 0.5 g fat",
        "reason": "Guarantees 100-150% stoichiometric excess of Wijs halogen reagent"
      },
      {
        "parameter": "Solvent",
        "value": "15 mL Chloroform AR",
        "reason": "Rapidly dissolves saturated and unsaturated triglycerides"
      },
      {
        "parameter": "Wijs reagent",
        "value": "25.0 mL (0.1-0.2 N ICl in Acetic)",
        "reason": "Electrophilic addition agent with high reactivity across C=C bonds"
      },
      {
        "parameter": "Dark incubation",
        "value": "Strictly 30 min at 25\u00b0C",
        "reason": "Allows quantitative halogen addition while preventing photo-decomposition"
      },
      {
        "parameter": "Quenching",
        "value": "20 mL 10% KI + 100 mL DI water",
        "reason": "Converts all unreacted ICl to free elemental iodine in aqueous phase"
      },
      {
        "parameter": "Titrant",
        "value": "0.1000 N Standard Na2S2O3",
        "reason": "Stoichiometric reduction of liberated iodine to colorless iodide"
      }
    ],
    "referenceStandard": "AOCS Official Method Cd 1-25 (Wijs Method) / IS 548 (Part I)",
    "reagentsAndApparatus": [
      "Wijs Iodine Monochloride Reagent (0.1-0.2 N ICl in glacial acetic acid)",
      "Standard Sodium Thiosulfate: 0.1000 N accurately standardized",
      "Potassium Iodide Solution: 10% (w/v) freshly prepared, iodate-free",
      "Starch Indicator Solution: 1.0% (w/v) freshly prepared paste",
      "500 mL ground-glass stoppered Iodine Flasks with lip seals",
      "50 mL precision Class-A burette and dark conditioning cabinet"
    ],
    "prescribedLimit": "Palm Kernel Oil based NDC: 14 - 20 g I2/100g; Hydrogenated PKO NDC: 5 - 15 g I2/100g; Coconut Oil based NDC: 7 - 12 g I2/100g",
    "riskIfFailed": "High Iodine Value (>35 g I2/100g) indicates presence of liquid soft oils, causing whipping failure, oily weeping syneresis, and rapid oxidative rancidity.",
    "procedureSteps": [
      "NDC fat sample ko 50\u00b0C par melt karein aur clean anhydrous sample lein.",
      "Clean, dry 500 mL iodine flask mein accurately 0.3000-0.5000g sample weigh karein (W).",
      "15 mL chloroform add karein aur swirl karke fat ko completely dissolve karein.",
      "Dispenser ya precision pipette se 25.0 mL Wijs reagent add karein, glass stopper lagayein aur neck par 1-2 mL 10% KI solution daal kar seal karein.",
      "Flask ko dark cabinet mein strictly 30 minute ke liye 25 \u00b1 2\u00b0C par rakhein, beech-beech mein swirl karein.",
      "30 min complete hone par 20 mL 10% KI solution aur 100 mL distilled water add karein (Stopper aur neck ko bhi wash karein).",
      "0.1000 N Na2S2O3 standard solution se titrate karein continuously shake karte hue jab tak yellow color pale straw-yellow na ho jaye.",
      "1 mL fresh 1% starch indicator add karein (Intense blue color aayega).",
      "Titration dropwise continue karein jab tak blue color completely disappear hokar milk-white na ho jaye. V_sample (mL) note karein.",
      "Blank determination (bina sample ke same reagents) run karein aur formula se Iodine Value calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Weighing",
        "title": "0.5g Fat in Chloroform",
        "action": "Weigh ~0.5g fat into 500 mL iodine flask, dissolve in 15 mL CHCl3",
        "scientificMechanism": "Homogenizes unsaturated triglycerides in organic phase"
      },
      {
        "stepNumber": 2,
        "phaseName": "Halogen Addition",
        "title": "25 mL Wijs in Dark",
        "action": "Add 25 mL Wijs reagent, seal with KI, keep 30 min in dark",
        "scientificMechanism": "Electrophilic addition of ICl across carbon-carbon double bonds"
      },
      {
        "stepNumber": 3,
        "phaseName": "Iodine Liberation",
        "title": "10% KI & Water Addition",
        "action": "Add 20 mL 10% KI and 100 mL DI water",
        "scientificMechanism": "Converts excess unreacted ICl into titratable elemental iodine I2"
      },
      {
        "stepNumber": 4,
        "phaseName": "Pre-Titration",
        "title": "Thiosulfate to Straw Yellow",
        "action": "Titrate with 0.1N Na2S2O3 to pale yellow color",
        "scientificMechanism": "Reduces bulk free iodine before adding starch indicator"
      },
      {
        "stepNumber": 5,
        "phaseName": "Endpoint",
        "title": "Starch Decolorization",
        "action": "Add 1 mL starch, titrate dropwise to colorless",
        "scientificMechanism": "Quantifies consumed halogen and calculates unsaturation degree"
      }
    ]
  },
  {
    "id": "ndc-test-7",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Moisture & Total Solids Determination (IS 1479 Part II / AOAC 926.08)",
    "shortSummary": "Gravimetric oven-drying at 102\u00b0C with boiling water-bath pre-drying to measure moisture and total solids without stabilizer crust formation.",
    "detailedScientificRationale": "NDC mein 55-65% free water (continuous phase) aur 35-45% total solids (vegetable fat, sodium caseinate, sugars, emulsifiers, stabilizers) hote hain. Moisture content directly product ki shelf-life, microbial water activity (aw), overrun potential aur emulsion stability ko govern karta hai. Agar moisture >67% ho to aw >0.97 pahunch jaata hai jisse microbial spoilage accelerate ho jaati hai. NDC mein hydrocolloid gums (guar gum, carrageenan) hote hain jo seedha oven mein rakhne par ek impermeable surface skin/crust bana lete hain jiske neeche moisture trap ho jaata hai. Isliye boiling water bath par 30 minute gentle pre-evaporation zaroori hota hai jiske baad 102\u00b0C par oven drying ki jaati hai.",
    "detailedTestPrinciple": "Water Bath Pre-Drying and Thermostatic Convection Oven Gravimetry (IS 1479 Part II / AOAC 926.08). 5.0g melted, homogenized sample ko pre-dried flat bottom dish mein weigh kiya jaata hai. Surface skin rokne ke liye open dish ko boiling water bath par 30 min evaporate kiya jaata hai, phir 102 \u00b1 2\u00b0C oven mein 2-3 ghante tak dry kiya jaata hai. Desiccator mein cool karke constant weight (\u22640.5 mg difference) tak weigh kiya jaata hai.",
    "chemicalEquation": "NDC Emulsion [Fat + Protein + Gums + Sugars + H2O] \u27f6 H2O \u2191 (102\u00b0C) + Anhydrous Total Solids (Residue)",
    "formulaBreakdown": {
      "formula": "% Moisture = [(W2 - W3) / (W2 - W1)] \u00d7 100   |   % Total Solids = 100 - % Moisture",
      "variables": [
        {
          "symbol": "W1",
          "description": "Empty pre-conditioned dish plus lid ka initial tare weight (g)"
        },
        {
          "symbol": "W2",
          "description": "Dish + lid + NDC sample ka weight drying se pehle (g)"
        },
        {
          "symbol": "W3",
          "description": "Dish + lid + dried residue ka constant weight drying ke baad (g)"
        },
        {
          "symbol": "(W2 - W1)",
          "description": "Accurate mass of NDC test sample (g)"
        },
        {
          "symbol": "(W2 - W3)",
          "description": "Loss in mass representing total evaporated moisture (g)"
        }
      ],
      "derivation": "Moisture is calculated by dividing evaporated water mass by sample mass times 100. Total solids is calculated either by residual dry mass or by difference from 100.",
      "factorOrigin": "Standard gravimetric mass loss principle.",
      "unitAnalysis": "Moisture % = (g water loss / g wet sample) \u00d7 100 = % w/w",
      "practicalExample": "W1 = 38.5000 g, W2 = 43.5150 g (sample = 5.0150 g), W3 = 41.6200 g. Moisture loss = 43.5150 - 41.6200 = 1.8950 g. % Moisture = (1.8950 / 5.0150) \u00d7 100 = 37.79%. % Total Solids = 100 - 37.79 = 62.21% (Typical sweetened whipping topping solids) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Water bath par pre-drying 30 min kyu zaroori hai? Seedha oven mein kyu nahi rakhte?",
        "answer": "NDC mein guar gum aur carrageenan jaise stabilizers viscous layer banate hain. Seedha 102\u00b0C oven mein rakhne par sample ki surface par dry plasticized crust ban jaati hai jiske neeche moisture trap ho jaata hai aur drying incomplete reh jaati hai. Water bath par gentle surface evaporation se bina skin formation ke bulk water smooth evaporate hota hai."
      },
      {
        "question": "Oven temperature strictly 102 \u00b1 2\u00b0C kyu rakha jaata hai?",
        "answer": "1. 100\u00b0C se upar hone ke kaaran free aur capillary-bound moisture evaporate hota hai.\n2. Glucose syrup aur sucrose 102\u00b0C par thermal caramelization se safe rehte hain.\n3. 110\u00b0C+ par sodium caseinate aur reducing sugars ke beech Maillard browning shuru ho sakti hai jisse volatile loss se false high moisture reading aayegi."
      },
      {
        "question": "Sample size 5g kyu optimal hai?",
        "answer": "1. 5g sample 7-9 cm dish mein thin, uniform film banata hai jisse evaporation rapid aur homogeneous hoti hai.\n2. 10g lene se drying time 5-6 ghante ho jaata hai aur caramelization risk badhta hai; 1-2g lene se analytical weighing error badh jaata hai."
      },
      {
        "question": "Desiccator cooling strictly 30 minute kyu honi chahiye?",
        "answer": "Dry NDC solids (sugars, proteins, gums) highly hygroscopic hote hain. Open laboratory air mein cool karne se atmospheric moisture instantly reabsorb ho jaata hai aur tare weight unstable ho jaata hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "5.0 g",
        "reason": "Forms optimal thin film in flat dish without thick core trapping moisture"
      },
      {
        "parameter": "Pre-drying",
        "value": "30 min at boiling water bath",
        "reason": "Prevents hydrocolloid surface skin / crust formation"
      },
      {
        "parameter": "Oven temp",
        "value": "102 \u00b1 2\u00b0C",
        "reason": "Completely volatilizes water without Maillard reaction or caramelization"
      },
      {
        "parameter": "Drying duration",
        "value": "2 to 3 hours",
        "reason": "Ensures release of bound water from proteins and stabilizers"
      },
      {
        "parameter": "Cooling",
        "value": "30 min in desiccator",
        "reason": "Prevents hygroscopic moisture uptake by dried sugars and caseinate"
      },
      {
        "parameter": "Constant weight limit",
        "value": "\u2264 0.5 mg difference",
        "reason": "Statistical validation that no residual moisture remains in sample"
      }
    ],
    "referenceStandard": "IS 1479 (Part II) 1961 / AOAC 926.08 / FSSAI Manual 01",
    "reagentsAndApparatus": [
      "Flat-bottom metal/glass moisture dish with snug-fitting lid (diameter 7-9 cm, depth 2.5 cm)",
      "Thermostatic Drying Oven (102 \u00b1 2\u00b0C)",
      "Boiling steam water bath",
      "Analytical balance (0.1 mg sensitivity)",
      "Desiccator containing freshly activated blue silica gel"
    ],
    "prescribedLimit": "Moisture: 55.0% - 65.0%; Total Solids: 35.0% - 45.0% (Unsweetened NDC); Sweetened Whipping Topping Total Solids: 45.0% - 65.0%",
    "riskIfFailed": "High moisture (>67%) leads to water activity aw >0.97, bacterial/mold growth, emulsion syneresis, and inability to hold stiff peaks during cake decoration.",
    "procedureSteps": [
      "Moisture dish aur lid ko 102\u00b0C oven mein 1 ghanta dry karein, desiccator mein 30 min cool karein aur accurately weigh karein (W1).",
      "NDC container ko 40-45\u00b0C water bath par melt karein aur thoroughly mix karein (Cold NDC mein phase separation hoti hai \u2014 unmixed sample se galat moisture aayega).",
      "Dish mein lagbhag 5.0g sample daalein, lid lagakar accurately weigh karein (W2).",
      "Lid hata kar dish ko boiling water bath par 30 minute gentle steam heating par rakhein jab tak bulk liquid evaporate na ho jaye aur paste ban jaye (Gum skin formation se bachne ke liye).",
      "Dish ko lid ke sath (partially open) 102 \u00b1 2\u00b0C hot air oven mein transfer karein aur 2.5 ghante dry karein.",
      "Lid close karein, dish ko desiccator mein 30 minute cool karein aur weigh karein (W3).",
      "Dish ko dobara 30 minute oven mein dry karein aur cool karke weigh karein jab tak do successive weights mein difference \u22640.5 mg na ho.",
      "Formula se % Moisture aur % Total Solids calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Tare Dish",
        "title": "Dish Pre-Conditioning",
        "action": "Dry dish and lid at 102\u00b0C, cool in desiccator, weigh W1",
        "scientificMechanism": "Removes surface adsorbed humidity from dish walls"
      },
      {
        "stepNumber": 2,
        "phaseName": "Sample Weighing",
        "title": "Melted Aliquot",
        "action": "Weigh ~5.0g melted homogenized NDC, record W2",
        "scientificMechanism": "Ensures representative sample representing bulk emulsion"
      },
      {
        "stepNumber": 3,
        "phaseName": "Pre-Evaporation",
        "title": "Water Bath Steam Heating",
        "action": "Evaporate 30 min on boiling water bath",
        "scientificMechanism": "Gentle thermal de-watering avoiding hydrocolloid crust entrapment"
      },
      {
        "stepNumber": 4,
        "phaseName": "Oven Drying",
        "title": "102\u00b0C Convection Drying",
        "action": "Dry in calibrated oven at 102\u00b0C for 2.5 hours",
        "scientificMechanism": "Eliminates capillary and bound moisture without sugar degradation"
      },
      {
        "stepNumber": 5,
        "phaseName": "Constant Weighing",
        "title": "Desiccator Cooling & W3",
        "action": "Cool in desiccator 30 min, weigh to constant mass <=0.5 mg",
        "scientificMechanism": "Guarantees complete removal of all moisture"
      }
    ]
  },
  {
    "id": "ndc-test-8",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Crude Protein Determination by Macro-Kjeldahl Method (IS 1479 Part II / AOAC 991.20)",
    "shortSummary": "Sulfuric acid digestion, alkaline steam distillation, and acidimetric titration to quantify interfacial protein film formers (sodium caseinate/soy protein).",
    "detailedScientificRationale": "Non-Dairy Cream mein sodium caseinate (88-90% protein) ya soy protein isolate (90% protein) 1.5-3.5% formulation level par use kiye jaate hain. Ye proteins whipped NDC mein air bubbles ke chaaro taraf ek elastic, interfacial viscoelastic protein film banate hain jo air cells ko stabilize karti hai aur foam collapse ko rokti hai. Kam protein hone par overrun kam aata hai aur whipped cream room temperature par jaldi weep (syneresis) karne lagti hai. Macro-Kjeldahl method organic nitrogen ko digest karke crude protein calculate karta hai. Agar manufacturer ne cheap non-protein nitrogen (urea) use kiya ho to Kjeldahl false high dega, isliye nitrogen balance quality assurance ke liye pivotal hai.",
    "detailedTestPrinciple": "Concentrated Acid Digestion, Alkaline Distillation into Boric Acid, and Standard Acidimetric Titration (AOAC 991.20 / IS 1479 Part II). 2.0g sample ko 25-30 mL concentrated H2SO4 aur CuSO4:K2SO4 catalyst (1:10) ke sath digest kiya jaata hai. Carbon CO2 mein oxidize hota hai aur organic nitrogen (NH4)2SO4 mein convert ho jaata hai. Digest ko 50 mL 40% NaOH se alkalize karke liberated NH3 ko 4% boric acid receiving solution mein steam-distill kiya jaata hai. Absorbed ammonium borate ko standardized 0.1 N HCl se titrate kiya jaata hai (methyl red + bromocresol green indicator).",
    "chemicalEquation": "Organic-N + H2SO4 \u27f6 (NH4)2SO4 + CO2 \u2191 + SO2 \u2191   |   (NH4)2SO4 + 2NaOH \u27f6 Na2SO4 + 2H2O + 2NH3 \u2191   |   NH3 + H3BO3 \u27f6 NH4+ + H2BO3-   |   H2BO3- + HCl \u27f6 H3BO3 + Cl- [Green to Pink, pH 4.5]",
    "formulaBreakdown": {
      "formula": "% Nitrogen = [(V_sample - V_blank) \u00d7 N_HCl \u00d7 0.014007 \u00d7 100] / W   |   % Crude Protein = % Nitrogen \u00d7 Factor",
      "variables": [
        {
          "symbol": "V_sample",
          "description": "Volume of 0.1 N standard HCl consumed during sample distillate titration (mL)"
        },
        {
          "symbol": "V_blank",
          "description": "Volume of 0.1 N HCl consumed during reagent blank titration (typically 0.10-0.25 mL)"
        },
        {
          "symbol": "N_HCl",
          "description": "Standardized exact normality of Hydrochloric Acid titrant (e.g., 0.1000 N)"
        },
        {
          "symbol": "0.014007",
          "description": "Milliequivalent weight of Nitrogen (14.007 g/mol / 1000 = 0.014007 g/meq)"
        },
        {
          "symbol": "W",
          "description": "Accurate weight of NDC sample taken for digestion (typically ~2.0000 g)"
        },
        {
          "symbol": "Factor",
          "description": "Nitrogen-to-Protein conversion factor: 6.38 for Sodium Caseinate; 6.25 for Soy Protein / standard"
        }
      ],
      "derivation": "Each mL of 1 N HCl neutralizes exactly 1 meq of ammonia containing 14.007 mg nitrogen. Multiplying net titrant volume by acid normality and nitrogen milliequivalent weight gives nitrogen mass, converted to percentage and scaled by protein conversion factor.",
      "factorOrigin": "16.0% nitrogen in typical protein = 100/16 = 6.25; 15.67% nitrogen in pure casein = 100/15.67 = 6.38.",
      "unitAnalysis": "% Nitrogen = [mL \u00d7 (meq/mL) \u00d7 (g N / meq) \u00d7 100] / g sample = % w/w",
      "practicalExample": "V_sample = 4.80 mL, V_blank = 0.20 mL (Net = 4.60 mL), N_HCl = 0.1000 N, W = 2.0000 g NDC. % Nitrogen = [(4.60 \u00d7 0.1000 \u00d7 0.014007 \u00d7 100) / 2.0000] = 0.322% N. % Protein = 0.322 \u00d7 6.25 = 2.01% Crude Protein (Standard sodium caseinate NDC formulation ~2.0%) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "NDC ke liye sample weight strictly 2.0 gram kyu hona chahiye?",
        "answer": "1. NDC mein 25-35% vegetable fat hota hai jo digestion ke time concentrated H2SO4 ke sath vigorous foaming aur charring karta hai. 5-10g lene par digestion flask overflow ho sakti hai.\n2. 2.0g sample mein ~0.04g protein (~0.006g nitrogen) hota hai jo 0.1N HCl se ~4-5 mL titration volume deta hai \u2014 ye burette par accurate aur readable range hai."
      },
      {
        "question": "Catalyst mixture mein CuSO4 aur K2SO4 DONO kyu zaroori hain?",
        "answer": "1. K2SO4 boiling point elevator hai \u2014 H2SO4 ka boiling point 330\u00b0C se badhakar ~370\u00b0C kar deta hai jisse C-N bonds rapidly break hote hain.\n2. CuSO4 true transition-metal oxidation catalyst hai jo organic matter ke catalytic oxidation ko 4 guna accelerate karta hai.\n3. 1:10 ratio synergistic effect deta hai jisse 2 ghante mein completely clear emerald green digest milta hai."
      },
      {
        "question": "Distillation mein 40% NaOH ki high concentration kyu zaroori hai?",
        "answer": "Digested flask mein 25-30 mL excess concentrated sulfuric acid hota hai. 40% NaOH pehle excess acid ko neutralize karta hai aur phir solution ko strongly alkaline (pH > 11.5) banata hai taaki non-volatile ammonium ions (NH4+) quantitatively volatile ammonia gas (NH3) mein convert ho sakein."
      },
      {
        "question": "Receiving solution mein 4% Boric Acid kyu use karte hain? Standard H2SO4 kyu nahi?",
        "answer": "Boric acid weak acid hai. Ye ammonia ko quantitatively absorb karke ammonium borate banata hai lekin khud methyl red indicator ko acidic turn nahi karta. Iska sabse bada fayda ye hai ki boric acid ka volume exactly measure karne ki zaroorat nahi hoti aur direct acidimetric titration possible hota hai (back titration ki zaroorat nahi padti)."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "2.0 g (melted)",
        "reason": "Sufficient nitrogen for clear titration while controlling violent fat frothing"
      },
      {
        "parameter": "H2SO4 volume",
        "value": "25-30 mL",
        "reason": "High fat content requires extra acid for complete carbonaceous oxidation"
      },
      {
        "parameter": "Catalyst mixture",
        "value": "1g CuSO4 + 10g K2SO4",
        "reason": "Raises digest boiling temperature to 370\u00b0C and accelerates bond cleavage"
      },
      {
        "parameter": "Digestion endpoint",
        "value": "Clear emerald green liquid",
        "reason": "Indicates 100% organic carbon conversion to CO2 and all N to (NH4)2SO4"
      },
      {
        "parameter": "NaOH volume",
        "value": "50-60 mL of 40% w/v",
        "reason": "Neutralizes residual acid and raises pH above 11.5 to liberate volatile NH3"
      },
      {
        "parameter": "Distillate volume",
        "value": "~150 mL",
        "reason": "Guarantees complete quantitative steam transfer of all liberated ammonia"
      },
      {
        "parameter": "Titrant",
        "value": "0.1000 N HCl",
        "reason": "Accurate burette titration range for ~2% protein food matrices"
      },
      {
        "parameter": "Indicator",
        "value": "Methyl Red + Bromocresol Green",
        "reason": "Sharp, unambiguous transition from emerald green to pink at pH 4.5"
      }
    ],
    "referenceStandard": "IS 1479 (Part II) 1961 / AOAC 991.20 / ISO 8968-1",
    "reagentsAndApparatus": [
      "Concentrated Sulfuric Acid: 98% (w/w) Nitrogen-free AR Grade (sp. gr. 1.84)",
      "Catalyst Powder Blend: Potassium Sulfate (K2SO4) + Copper Sulfate (CuSO4\u00b75H2O) in 10:1 ratio",
      "Sodium Hydroxide: 40% (w/v) Nitrogen-free solution",
      "Boric Acid Receiving Solution: 4% (w/v) with Tashiro mixed indicator",
      "Standard Hydrochloric Acid Titrant: 0.1000 N accurately standardized with sodium carbonate",
      "Macro-Kjeldahl digestion and steam distillation unit with fume aspiration",
      "Zinc granules / anti-bumping boiling stones"
    ],
    "prescribedLimit": "Commercial NDC Crude Protein: 1.5% - 3.5% (Typically 2.0% - 2.8% for Sodium Caseinate based topping)",
    "riskIfFailed": "Low protein (<1.5%) causes poor air cell entrapment, low overrun, weak structure, and rapid weeping; zero protein indicates complete lack of caseinate stabilizer.",
    "procedureSteps": [
      "NDC sample ko 40\u00b0C par melt karein aur thoroughly mix karein. Kjeldahl digestion flask mein accurately ~2.0000g sample weigh karein.",
      "11g powdered catalyst mixture (10g K2SO4 + 1g CuSO4) add karein.",
      "Dispenser se 25-30 mL concentrated 98% H2SO4 carefully flask ki walls ko wash karte hue dalein. Flask ko gently swirl karein.",
      "Fume hood mein digestion bench par flask ko 45\u00b0 angle par rakhein. Pehle 20 minute gentle heat dekar initial foaming aur fat charring ko subsidise hone dein.",
      "Heat increase karein aur vigorous boiling par 2 se 3 ghante digest karein jab tak black char completely gayab ho kar crystal-clear emerald-green solution na ban jaye.",
      "Flask ko room temperature par cool hone dein, 60 mL distilled water carefully dalein aur wash karein (Exothermic reaction \u2014 cool karein).",
      "Steam distillation unit setup karein: Receiver conical flask mein 30 mL 4% boric acid + mixed indicator solution dalein aur delivery condenser tip ko liquid mein immerse karein.",
      "Kjeldahl flask mein zinc granules dalein aur 50-60 mL 40% NaOH solution carefully side wall se layer karein.",
      "Immediately flask ko splash head se connect karein aur steam distillation shuru karein (NaOH dalte hi delay na karein warna volatile NH3 escape ho sakti hai).",
      "Distillation tab tak chalayein jab tak receiver flask mein ~150 mL distillate collect na ho jaye aur indicator completely green ho jaye.",
      "Receiver flask ki delivery tube ko distillate se upar uthayein, tips ko rinse karein, aur distillate ko standard 0.1000 N HCl se titrate karein jab tak green colour sharp light pink/violet mein na badal jaye.",
      "Reagent blank run karein aur formula se % Protein calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Weighing",
        "title": "2g Sample & Catalyst",
        "action": "Weigh ~2.0g melted NDC into Kjeldahl flask with 11g catalyst",
        "scientificMechanism": "Provides stoichiometric nitrogen while preventing violent lipid foaming"
      },
      {
        "stepNumber": 2,
        "phaseName": "Acid Digestion",
        "title": "H2SO4 Digestion",
        "action": "Digest with 25-30 mL 98% H2SO4 until clear emerald green",
        "scientificMechanism": "Destroys organic framework; converts protein amino nitrogen into (NH4)2SO4"
      },
      {
        "stepNumber": 3,
        "phaseName": "Alkalinization",
        "title": "40% NaOH Addition",
        "action": "Add anti-bumping zinc and 50 mL 40% NaOH",
        "scientificMechanism": "Converts ammonium cations to volatile ammonia gas NH3"
      },
      {
        "stepNumber": 4,
        "phaseName": "Distillation",
        "title": "Steam Distillation into Boric Acid",
        "action": "Distill ~150 mL into 4% boric acid receiving solution",
        "scientificMechanism": "Forms ammonium dihydrogen borate complex with quantitative retention"
      },
      {
        "stepNumber": 5,
        "phaseName": "Titration",
        "title": "Acidimetric Titration",
        "action": "Titrate against 0.1 N HCl to pink endpoint",
        "scientificMechanism": "Measures total milliequivalents of nitrogen and calculates crude protein"
      }
    ]
  },
  {
    "id": "ndc-test-9",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Total Sugars & Carbohydrates Determination by Lane-Eynon Method (IS 1163 / AOAC 906.03)",
    "shortSummary": "Carrez clarification for protein/fat removal, acid inversion of sucrose, and hot Lane-Eynon copper reduction titration with methylene blue.",
    "detailedScientificRationale": "Non-Dairy Cream mein glucose syrup (corn syrup solids), sucrose, aur dextrose 5-15% formulation level par use kiye jaate hain. Sugars whipped cream ko sweetness dene ke sath-sath whipping volume (overrun) aur foam stability mein crucial role play karti hain. Sugar molecules water ki surface tension badhate hain aur lamella water drainage ko slow karte hain jisse foam collapse nahi hota. Glucose syrup freeze-thaw stability bhi deta hai aur ice crystal formation ko control karta hai. Reducing sugars (glucose, maltose) Fehling solution ko directly reduce karte hain, jabki sucrose non-reducing disaccharide hai jisko pehle 6.35 N HCl se 68-70\u00b0C par 5 minute invert (hydrolyze) karke glucose + fructose mein convert kiya jaata hai. NDC ke high fat (30%) aur protein ko Carrez I + II se precipitate karna mandatory hota hai.",
    "detailedTestPrinciple": "Carrez Clarification, Controlled Acid Hydrolysis, and Hot Fehling Redox Titration (Lane-Eynon Method - IS 1163 / AOAC 906.03). 5.0g sample ko warm water mein disperse karke Carrez I (Zinc acetate) aur Carrez II (Potassium ferrocyanide) se treat kiya jaata hai jisse fat aur protein quantitatively precipitate ho jaate hain. Clear filtrate ke sucrose ko 6.35 N HCl se 68-70\u00b0C par 5 min invert kiya jaata hai aur NaOH se neutralize kiya jaata hai. Inverted sugar solution se standardized boiling Fehling solution (5 mL A + 5 mL B) ko titrate kiya jaata hai jisme methylene blue redox indicator colorless ho jaata hai.",
    "chemicalEquation": "C12H22O11 (Sucrose) + H2O + [H+] \u27f6 C6H12O6 (Glucose) + C6H12O6 (Fructose)   |   Reducing Sugars + 2Cu2+ + 4OH- \u27f6 Cu2O \u2193 (Brick Red) + Oxidized Acids + 2H2O",
    "formulaBreakdown": {
      "formula": "% Total Sugars (as Invert) = [Factor W (mg from table) \u00d7 Dilution Factor] / [Sample Mass (g) \u00d7 1000] \u00d7 100",
      "variables": [
        {
          "symbol": "Factor W",
          "description": "Milligrams of total invert sugar required to reduce 10 mL Fehling solution (from Lane-Eynon standard table corresponding to titration volume V)"
        },
        {
          "symbol": "V",
          "description": "Titre volume of sample sugar solution consumed in boiling titration (mL)"
        },
        {
          "symbol": "Dilution Factor",
          "description": "Total volumetric flask volume divided by aliquot taken for titration (typically 250/25 = 10)"
        },
        {
          "symbol": "Sample Mass",
          "description": "Initial weight of NDC test portion taken (g)"
        },
        {
          "symbol": "1000",
          "description": "Conversion constant from milligrams to grams"
        }
      ],
      "derivation": "The Lane-Eynon redox titration is non-linear due to copper reduction kinetics. Official empirical AOAC/IS tables map exact titre volume V (mL) directly to milligrams of invert sugar required to reduce 10.0 mL standardized Fehling reagent.",
      "factorOrigin": "Established AOAC empirical table for 10.0 mL Soxhlet/Fehling copper complex solution.",
      "unitAnalysis": "% Sugars = [(mg sugar \u00d7 dilution) / (g sample \u00d7 1000 mg/g)] \u00d7 100 = % w/w",
      "practicalExample": "5.0000g sample clarified to 250 mL; inverted and diluted. Titre V = 12.50 mL. From Lane-Eynon Table, 12.50 mL corresponds to W = 50.3 mg invert sugar. Dilution Factor = 10. % Total Sugar = [50.3 mg \u00d7 10] / [5.0000 g \u00d7 1000] \u00d7 100 = 503 / 5000 \u00d7 100 = 10.06% Total Sugars (Standard sweetened NDC formulation ~10%) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Sample defatting aur Carrez treatment kyu mandatory hai?",
        "answer": "NDC mein 25-35% fat aur ~2% protein hota hai. Agar directly titrate karein to fat globules Fehling solution ke sath emulsion banate hain aur red Cu2O precipitate ko coat kar lete hain, jisse methylene blue indicator ka blue-to-colorless endpoint bilkul obscure ho jaata hai. Carrez I (zinc acetate) aur Carrez II (potassium ferrocyanide) fat aur protein ko crystal precipitate mein lock kar dete hain aur crystal-clear sugar filtrate provide karte hain."
      },
      {
        "question": "Fehling A aur Fehling B ko alag-alag kyu store kiya jaata hai?",
        "answer": "1. Fehling A pure Copper Sulfate (CuSO4\u00b75H2O, 69.28 g/L) hai.\n2. Fehling B Potassium Sodium Tartrate (Rochelle salt, 346 g/L) aur NaOH (250 g/L) ka alkaline blend hai.\n3. Agar dono ko pehle se mix karke store karein to alkaline medium mein copper tartrate complex slowly self-reduce hokar Cu2O precipitate hone lagta hai. Alag rakhne par dono solutions saalo tak stable rehte hain."
      },
      {
        "question": "Sucrose inversion strictly 68-70\u00b0C par 5 minute kyu ki jaati hai?",
        "answer": "Sucrose non-reducing disaccharide hai jo Fehling ko reduce nahi kar sakta. 6.35 N HCl ke sath 68-70\u00b0C par 5 minute mein >99% sucrose glucose aur fructose mein invert ho jaata hai. 75\u00b0C se upar fructose degrade hokar hydroxymethylfurfural (HMF) bana leta hai jisse false sugar value aati hai."
      },
      {
        "question": "Titration strictly boiling conditions mein kyu honi chahiye?",
        "answer": "Reducing sugars dwara cupric tartrate complex ka reduction high activation energy mangta hai. Boiling point par copper reduction seconds mein hoti hai aur methylene blue indicator ka decolorization sharp aur instantaneous dikhta hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "5.0 g",
        "reason": "Sufficient sugar concentration for 12-25 mL titration range in 250 mL flask"
      },
      {
        "parameter": "Clarification",
        "value": "5 mL Carrez I + 5 mL Carrez II",
        "reason": "Completely precipitates interfering vegetable fat and caseinate protein"
      },
      {
        "parameter": "Fehling Reagents",
        "value": "5 mL A + 5 mL B (10 mL mixed)",
        "reason": "Standardized volume equivalent to exactly ~50 mg invert sugar"
      },
      {
        "parameter": "Inversion condition",
        "value": "68-70\u00b0C for 5 min with 6.35N HCl",
        "reason": "Hydrolyzes sucrose to glucose+fructose without thermal degradation of fructose"
      },
      {
        "parameter": "Neutralization",
        "value": "Neutralized with NaOH to methyl orange",
        "reason": "Prevents excess acid from neutralizing alkaline Fehling solution"
      },
      {
        "parameter": "Indicator",
        "value": "1 mL 0.2% Methylene Blue",
        "reason": "Redox indicator: Sharp blue to colorless transition at stoichiometric endpoint"
      }
    ],
    "referenceStandard": "IS 1163 : 1968 / AOAC 906.03 / FSSAI Manual 01",
    "reagentsAndApparatus": [
      "Fehling Solution A: 69.28 g CuSO4\u00b75H2O per liter distilled water",
      "Fehling Solution B: 346 g Potassium Sodium Tartrate + 250 g NaOH per liter",
      "Carrez Solution I: 21.9 g Zinc Acetate + 3 mL Glacial Acetic Acid in 100 mL",
      "Carrez Solution II: 10.6 g Potassium Ferrocyanide K4[Fe(CN)6]\u00b73H2O in 100 mL",
      "Hydrochloric Acid: 6.35 N solution for sugar inversion",
      "Sodium Hydroxide: 20% solution for neutralization",
      "Methylene Blue Indicator: 0.2% aqueous solution",
      "Electric heating mantle and 250 mL conical titration flasks"
    ],
    "prescribedLimit": "Commercial Whipping Topping Total Sugars: 5.0% - 15.0% (Typically 8.0% - 12.0% as invert sugar); Unsweetened NDC: 0.0% - 2.0%",
    "riskIfFailed": "High sugar (>18%) causes soft, sticky foam, excessive weeping, and crystallization; low sugar (<5% in sweetened topping) causes lack of sweetness and rapid foam collapse.",
    "procedureSteps": [
      "~5.0g melted NDC sample 250 mL volumetric flask mein weigh karein aur 100 mL warm (45\u00b0C) distilled water dalkar dissolve karein.",
      "5 mL Carrez I solution dalein aur 1 minute swirl karein; phir 5 mL Carrez II solution dalein aur shake karein (Fat aur protein precipitate ho jaate hain).",
      "Distilled water se volume 250 mL mark tak make-up karein, mix karein aur Whatman No. 4 filter paper se clear filtrate collect karein.",
      "Sucrose Inversion: 50 mL filtrate 100 mL volumetric flask mein lein, 5 mL 6.35 N HCl add karein, aur 68-70\u00b0C water bath mein strictly 5 minute rakhein.",
      "Turant tap water mein cool karein, 2 drops methyl orange indicator dalein aur 20% NaOH solution se dropwise neutralize karein jab tak colour yellow na ho jaye. 100 mL tak dilute karein.",
      "Burette mein neutralized inverted sugar solution fill karein.",
      "250 mL conical flask mein 5.0 mL Fehling A aur 5.0 mL Fehling B accurately pipette karein aur 10 mL distilled water dalein. Heating mantle par boil karein.",
      "Boiling Fehling solution mein burette se 10-12 mL sugar solution add karein aur 2 minute boil karein.",
      "3 drops methylene blue indicator add karein aur continuous boiling mein sugar solution dropwise add karte rahein jab tak blue colour completely gayab hokar brick-red Cu2O precipitate na reh jaye.",
      "Total consumed volume (V mL) note karein, Lane-Eynon table se Factor W dekhein aur % Total Sugars calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Clarification",
        "title": "Carrez Deproteinization",
        "action": "Add Carrez I & II to 5g NDC in warm water, filter",
        "scientificMechanism": "Precipitates fat and protein complexes, producing clear carbohydrate filtrate"
      },
      {
        "stepNumber": 2,
        "phaseName": "Acid Inversion",
        "title": "Sucrose Hydrolysis",
        "action": "Heat with 6.35N HCl at 68-70\u00b0C for 5 min, neutralize",
        "scientificMechanism": "Cleaves glycosidic bond of non-reducing sucrose yielding glucose + fructose"
      },
      {
        "stepNumber": 3,
        "phaseName": "Reagent Prep",
        "title": "Fehling Mixing",
        "action": "Mix 5 mL Fehling A + 5 mL Fehling B, bring to boil",
        "scientificMechanism": "Generates deep blue cupric bistartrate complex in alkaline solution"
      },
      {
        "stepNumber": 4,
        "phaseName": "Hot Titration",
        "title": "Boiling Reduction",
        "action": "Titrate boiling Fehling with sugar solution",
        "scientificMechanism": "Reduces Cu2+ to insoluble red cuprous oxide Cu2O"
      },
      {
        "stepNumber": 5,
        "phaseName": "Endpoint",
        "title": "Methylene Blue Endpoint",
        "action": "Add indicator near finish, titrate to colorless",
        "scientificMechanism": "Excess reducing sugar reduces methylene blue to colorless leuco-form"
      }
    ]
  },
  {
    "id": "ndc-test-10",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "pH Determination by Potentiometric Glass Electrode (IS 1479 Part I / AOAC 981.12)",
    "shortSummary": "Electrometric pH measurement using temperature-compensated combination glass electrode to monitor protein charge, buffering, and stability.",
    "detailedScientificRationale": "NDC ka pH product ki emulsion stability, foaming behavior, aur microbial preservation ke liye critical control parameter hai. Non-Dairy Cream mein sodium caseinate interfacial protein stabilizer hota hai jiska isoelectric point (pI) pH 4.6 hota hai. Normal fresh NDC ka pH 6.50 - 7.00 par buffer salts (disodium phosphate, sodium citrate) ke dwara lock rehta hai. Is neutral pH par caseinate molecules par net negative charge hota hai jo fat droplets ko electrostatic repulsion ke zariye separate rakhta hai. Agar microbial fermentation ya thermal abuse se pH 6.0 se neeche girta hai to caseinate net charge loose karta hai jisse emulsion destabilize ho jaati hai aur phase separation (curdling/syneresis) hone lagti hai.",
    "detailedTestPrinciple": "Potentiometric Glass Electrode Measurement with Automatic Temperature Compensation (ATC) (IS 1479 Part I / AOAC 981.12). Hydrogen ion activity ko hydrated glass membrane aur Ag/AgCl reference junction ke beech develop hone wale Nernst potential difference (59.16 mV/pH unit at 25\u00b0C) se accurately measure kiya jaata hai. Instrument ko fresh standard buffer solutions (pH 4.01 aur pH 7.00) se two-point calibrate kiya jaata hai.",
    "chemicalEquation": "E_cell = E\u00b0 - (2.303 RT / F) \u00d7 pH   |   At 25\u00b0C: E_cell = E\u00b0 - 0.05916 \u00d7 pH",
    "formulaBreakdown": {
      "formula": "pH = -log10 [a_H+]",
      "variables": [
        {
          "symbol": "pH",
          "description": "Negative logarithm of hydrogen ion activity in liquid NDC"
        },
        {
          "symbol": "a_H+",
          "description": "Effective thermodynamic activity of hydronium ions in aqueous continuous phase"
        }
      ],
      "derivation": "Nernstian electromotive force directly converted to pH units by calibrated microprocessor pH meter with ATC.",
      "factorOrigin": "Fundamental electrochemical constant (S\u00f8rensen definition, 1909).",
      "unitAnalysis": "Dimensionless standard acidity/alkalinity scale (0 - 14).",
      "practicalExample": "Electrode immersed in 25\u00b0C equilibrated NDC topping. Calibrated slope = 98.4%. Display reading = 6.78 pH at 25.0\u00b0C. (Complies with fresh NDC specification 6.50 - 7.00) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "NDC ka pH strictly 6.5 - 7.0 kyu hona chahiye?",
        "answer": "1. Sodium caseinate ka isoelectric point pH 4.6 hai. pH 6.5-7.0 par caseinate maximum net negative charge carry karta hai jo fat droplets ko electrostatic repulsion deta hai.\n2. Is pH par sodium caseinate ki whipping foam volume aur viscoelastic rigidity optimal hoti hai.\n3. Agar pH < 6.00 ho to bacterial lactic acid fermentation indicate hoti hai aur product shelf-life fail ho jaati hai."
      },
      {
        "question": "Sample temperature strictly 25\u00b0C par kyu equilibrate karna zaroori hai?",
        "answer": "Commercial NDC 4\u00b0C refrigerator mein store hoti hai. Cold cream mein Nernstian slope (mV/pH) shift hota hai aur viscous fat electrode bulb ko coat karke sluggish, drifting readings deti hai. 25\u00b0C par equilibrate karne se electrode quickly stabilize hota hai."
      },
      {
        "question": "Electrode cleaning mein kya special precaution leni chahiye?",
        "answer": "NDC mein 30% vegetable fat hota hai jo glass membrane aur porous reference junction par hydrophobic lipid film deposit kar sakta hai. Har test ke baad warm distilled water (40\u00b0C) aur mild detergent se rinse karke distilled water se flush karna zaroori hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample temperature",
        "value": "25.0 \u00b1 1.0\u00b0C",
        "reason": "Standard reference temperature matching Nernst calibration equations"
      },
      {
        "parameter": "Calibration buffers",
        "value": "pH 7.00 and pH 4.01",
        "reason": "Brackets expected NDC pH range (6.0 - 7.2) for maximum slope accuracy"
      },
      {
        "parameter": "Electrode type",
        "value": "Combination glass electrode with ceramic junction",
        "reason": "Provides fast response in emulsion matrices with low drift"
      },
      {
        "parameter": "Stabilization time",
        "value": "45 - 60 seconds",
        "reason": "Allows viscous emulsion to reach thermodynamic equilibrium at glass interface"
      },
      {
        "parameter": "Storage solution",
        "value": "3.0 M KCl electrolyte",
        "reason": "Keeps hydrated gel layer on glass membrane active and prevents junction drying"
      }
    ],
    "referenceStandard": "IS 1479 (Part I) 1961 / AOAC 981.12",
    "reagentsAndApparatus": [
      "Digital benchtop pH meter with 0.01 pH resolution and Automatic Temperature Compensation (ATC)",
      "Combination Glass pH Electrode with Ag/AgCl reference junction",
      "Standard Buffer Solution pH 7.00 (Phosphate buffer at 25\u00b0C)",
      "Standard Buffer Solution pH 4.01 (Potassium hydrogen phthalate at 25\u00b0C)",
      "Standard Buffer Solution pH 9.20 (Borax buffer for optional 3-point calibration)",
      "Deionized water wash bottle and lint-free lens wipes"
    ],
    "prescribedLimit": "Fresh Commercial NDC: pH 6.50 - 7.00; Marginal/Aging: pH 6.00 - 6.49; Spoiled/Fermented: pH < 6.00",
    "riskIfFailed": "pH < 6.0 causes protein precipitation at curdling point, immediate emulsion breakdown, serum leakage during whipping, and microbiological rejection.",
    "procedureSteps": [
      "pH meter ko on karein aur 15 minute warm-up hone dein. Fresh pH 7.00 aur pH 4.01 standard buffers se 2-point calibration karein (Slope 95-102% ke beech hona chahiye).",
      "NDC sample ko 40\u00b0C water bath par melt karein aur mix karein. Phir 25\u00b0C room temperature par 15 minute equilibrate karein.",
      "Clean 100 mL beaker mein ~50 mL liquid NDC dalein.",
      "Electrode ko deionized water se rinse karein aur soft lint-free tissue se gently blot karein (Glass bulb ko rub na karein static charge se bachne ke liye).",
      "Electrode aur ATC temperature probe ko NDC sample mein immerse karein (Sufficient depth honi chahiye taaki ceramic reference junction fully doob jaye).",
      "Gently swirl karein aur reading stabilize hone tak 45-60 seconds wait karein.",
      "Display par stabilized pH value (2 decimal places) aur sample temperature record karein.",
      "Electrode ko warm (40\u00b0C) deionized water se wash karein taaki fat film completely clean ho jaye, aur 3M KCl storage solution mein wapas rakhein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Calibration",
        "title": "2-Point Buffer Calibration",
        "action": "Calibrate meter with pH 7.00 & 4.01 buffers at 25\u00b0C",
        "scientificMechanism": "Establishes asymmetric potential and operational Nernstian slope"
      },
      {
        "stepNumber": 2,
        "phaseName": "Sample Equilibrate",
        "title": "Temperature Equilibration",
        "action": "Bring melted NDC sample to 25.0\u00b0C",
        "scientificMechanism": "Eliminates temperature gradient errors across liquid junction"
      },
      {
        "stepNumber": 3,
        "phaseName": "Immersion",
        "title": "Probe Immersion",
        "action": "Immerse glass bulb and ceramic reference junction",
        "scientificMechanism": "Forms electrical contact between inner reference and sample hydrogen ions"
      },
      {
        "stepNumber": 4,
        "phaseName": "Measurement",
        "title": "Equilibrium Reading",
        "action": "Wait 60s for stable reading, record pH to 0.01 units",
        "scientificMechanism": "Reaches stable electrochemical potential across hydrated gel layer"
      },
      {
        "stepNumber": 5,
        "phaseName": "De-fatting Clean",
        "title": "Electrode Sanitation",
        "action": "Rinse with warm DI water, store in 3M KCl",
        "scientificMechanism": "Removes lipid coating and maintains hydrated porous reference junction"
      }
    ]
  },
  {
    "id": "ndc-test-11",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Titratable Acidity Determination (IS 1479 Part I)",
    "shortSummary": "Acid-base titration with standardized 0.1 N sodium hydroxide to phenolphthalein endpoint to measure free and bound organic acids.",
    "detailedScientificRationale": "Titratable Acidity NDC mein total free organic acids (lactic acid, free fatty acids from vegetable lipid hydrolysis, citric acid from buffer salts) ka quantitative measurement hai. NDC mein disodium phosphate aur sodium citrate buffer salts hote hain jo initial spoilage acid ko absorb kar lete hain jisse pH initially nahi girta. Lekin Titratable Acidity buffer capacity ke bawajood total neutralization capacity measure karti hai, isliye ye microbial spoilage aur lipase enzyme rancidity ka early warning indicator hai. Acidity ko dairy convention ke anusaar % lactic acid equivalent mein express kiya jaata hai.",
    "detailedTestPrinciple": "Acidimetric Titration against Standard Sodium Hydroxide using Phenolphthalein Indicator (IS 1479 Part I). 9.0g melted, mixed NDC sample ko 20 mL neutral distilled water mein disperse kiya jaata hai (fat dispersion se endpoint visibility improve hoti hai). Standardized 0.1000 N CO2-free NaOH se swirl karte hue titrate kiya jaata hai jab tak faint pink coloration 30 seconds tak persist na kare (pH 8.3 stoichiometric endpoint).",
    "chemicalEquation": "CH3CH(OH)COOH (Lactic Acid) + NaOH \u27f6 CH3CH(OH)COONa + H2O   [Endpoint pH 8.3, Colorless to Faint Pink]",
    "formulaBreakdown": {
      "formula": "% Titratable Acidity (as Lactic Acid) = (V \u00d7 N \u00d7 0.090 \u00d7 100) / W",
      "variables": [
        {
          "symbol": "V",
          "description": "Volume of standardized 0.1 N NaOH consumed in titration (mL)"
        },
        {
          "symbol": "N",
          "description": "Exact normality of standardized Sodium Hydroxide titrant (typically 0.1000 N)"
        },
        {
          "symbol": "0.090",
          "description": "Milliequivalent weight of Lactic Acid (Molecular mass 90.08 g/mol / 1000 = 0.090 g/meq)"
        },
        {
          "symbol": "W",
          "description": "Accurate mass of NDC sample taken (typically 9.0000 g)"
        },
        {
          "symbol": "100",
          "description": "Conversion multiplier to express result as percentage (w/w)"
        }
      ],
      "derivation": "For 9.0g sample with 0.1000 N NaOH: % Acidity = (V \u00d7 0.1 \u00d7 0.090 \u00d7 100) / 9.0 = V \u00d7 0.090 / 9 = V / 10. Simplified direct formula: % Lactic Acid \u2248 V (mL) / 10.",
      "factorOrigin": "Equivalent weight of monocarboxylic lactic acid = 90.08 g/equiv.",
      "unitAnalysis": "% Acidity = [mL \u00d7 (meq/mL) \u00d7 (g acid / meq) \u00d7 100] / g sample = % w/w lactic acid equivalent",
      "practicalExample": "W = 9.0000 g sample, V = 1.20 mL of 0.1000 N NaOH. % Acidity = (1.20 \u00d7 0.1000 \u00d7 0.090 \u00d7 100) / 9.0000 = 1.08 / 9.0 = 0.120% Lactic Acid (Complies with fresh NDC specification 0.10 - 0.14%) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "pH aur Titratable Acidity dono test kyu zaroori hain?",
        "answer": "1. pH free hydrogen ion activity measure karta hai ('intensity' of acidity).\n2. Titratable Acidity total neutralizing capacity measure karti hai ('quantity' of acid), jisme buffer salts dwara held hydrogen ions bhi titrate hote hain.\n3. Example: Fresh NDC ka pH 6.8 aur TA 0.12% hota hai. Spoilage shuru hone par buffer salts pH ko 6.6 par hold karte hain lekin TA badhkar 0.18% ho jaata hai \u2014 TA pehle alert karta hai!"
      },
      {
        "question": "Sample 9.0 gram kyu liya jaata hai?",
        "answer": "IS 1479 standard method mein 9.0g sample isliye specified hai kyunki calculation mein 9.0 aur 0.090 cancel hokar direct decimal factor V/10 ban jaata hai, aur titration volume 1.0-2.0 mL aati hai jo 10 mL ya 25 mL microburette par highly precise hoti hai."
      },
      {
        "question": "20 mL distilled water add karna kyu zaroori hai?",
        "answer": "NDC thick, white viscous emulsion hai. Direct cream mein phenolphthalein ka faint pink color dekhna difficult hota hai. 20 mL water fat droplets ko dilute aur disperse kar deta hai jisse 30 second persistent faint pink endpoint crystal-clear dikhta hai."
      },
      {
        "question": "NaOH strictly CO2-free kyu hona chahiye?",
        "answer": "Atmospheric CO2 NaOH solution mein dissolve hokar sodium carbonate banata hai. Carbonate weak base hone ke kaaran phenolphthalein endpoint par incomplete react karta hai jisse false high acidity reading aati hai."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "9.0 g (melted)",
        "reason": "Standard stoichiometric sample mass giving direct V/10 simplified formula"
      },
      {
        "parameter": "Dilution water",
        "value": "20 mL CO2-free DI water",
        "reason": "Disperses fat globules for clear visualization of faint pink color"
      },
      {
        "parameter": "Titrant",
        "value": "0.1000 N NaOH",
        "reason": "Standard analytical alkaline titrant calibrated against potassium hydrogen phthalate"
      },
      {
        "parameter": "Indicator",
        "value": "0.5 mL 1% Phenolphthalein",
        "reason": "Weak organic acid stoichiometric neutralization endpoint at pH 8.2 - 8.3"
      },
      {
        "parameter": "Endpoint criterion",
        "value": "Faint pink persisting 30 seconds",
        "reason": "Prevents over-titration and atmospheric CO2 re-absorption error"
      },
      {
        "parameter": "Expression",
        "value": "% Lactic Acid equivalent",
        "reason": "Universal statutory dairy and food testing convention"
      }
    ],
    "referenceStandard": "IS 1479 (Part I) 1961 / FSSAI Manual 01",
    "reagentsAndApparatus": [
      "Standard Sodium Hydroxide Solution: 0.1000 N accurately standardized, CO2-free",
      "Phenolphthalein Indicator Solution: 1% (w/v) in 95% neutralized ethanol",
      "Freshly boiled and cooled distilled water (CO2-free)",
      "Precision 10 mL / 25 mL Class-A burette with 0.05 mL graduations",
      "150 mL wide-mouth Erlenmeyer flasks and white porcelain titration tile"
    ],
    "prescribedLimit": "Fresh Commercial NDC: 0.10% - 0.14% lactic acid; Borderline/Aging: 0.15% - 0.19%; Spoiled/Rejection: \u2265 0.20%",
    "riskIfFailed": "High acidity (>0.20%) indicates bacterial lactic fermentation or severe vegetable oil hydrolytic rancidity, causing curdling during coffee whitening or cake collapse.",
    "procedureSteps": [
      "NDC sample ko 40\u00b0C par melt karein aur thoroughly mix karein. 150 mL conical flask mein 9.0000g accurately weigh karein.",
      "20 mL freshly boiled aur cooled distilled water add karein aur swirl karke cream ko uniformly disperse karein.",
      "0.5 mL 1% phenolphthalein indicator solution dalein.",
      "Flask ko white tile par rakhein aur burette se 0.1000 N NaOH solution dropwise swirl karte hue titrate karein.",
      "Jaise hi faint pink color aana shuru ho, addition dropwise karein aur swirl karein.",
      "Endpoint note karein jab poore solution mein uniform faint pink colour develop ho aur strictly 30 seconds tak persist kare.",
      "Burette volume V (mL) record karein aur duplicate run karein (Difference \u22640.05 mL).",
      "Formula se % Titratable Acidity calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Sample Weighing",
        "title": "9g NDC Weighing",
        "action": "Weigh 9.0g melted NDC into 150 mL conical flask",
        "scientificMechanism": "Calibrated aliquot yielding direct stoichiometric V/10 ratio"
      },
      {
        "stepNumber": 2,
        "phaseName": "Dispersal",
        "title": "Water Dilution",
        "action": "Add 20 mL CO2-free distilled water, swirl",
        "scientificMechanism": "Dilutes opacity and allows light transmission for color observation"
      },
      {
        "stepNumber": 3,
        "phaseName": "Indicator",
        "title": "Phenolphthalein Addition",
        "action": "Add 0.5 mL 1% phenolphthalein indicator",
        "scientificMechanism": "Triarylmethane dye responding with chromophore quinoid ring at pH 8.3"
      },
      {
        "stepNumber": 4,
        "phaseName": "Titration",
        "title": "0.1 N NaOH Titration",
        "action": "Titrate with 0.1N NaOH on white tile with continuous swirling",
        "scientificMechanism": "Neutralizes free carboxylic protons and weak buffer acid species"
      },
      {
        "stepNumber": 5,
        "phaseName": "Endpoint",
        "title": "30-Sec Faint Pink Color",
        "action": "Stop at 30s stable faint pink endpoint, note V mL",
        "scientificMechanism": "Reaches stoichiometric equivalence without interference from ambient CO2"
      }
    ]
  },
  {
    "id": "ndc-test-12",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Total Ash Content Determination (IS 1479 Part II / AOAC 945.46)",
    "shortSummary": "Slow electric pre-charring and 550\u00b0C muffle furnace incineration to quantify mineral residue, buffer phosphates, and inorganic salts.",
    "detailedScientificRationale": "NDC mein ash content total inorganic minerals aur salts ko represent karta hai. Non-Dairy Cream formulation mein buffer salts (disodium phosphate, trisodium citrate), emulsifier counter-ions (sodium stearoyl lactylate SSL), aur sodium caseinate ke structural minerals (calcium, phosphorus, sodium) hote hain. Typical NDC ka ash content 0.5% - 1.5% hota hai. Low ash (<0.3%) formula mein buffer deficit darshata hai jisse product temperature fluctuation par unstable ho jaata hai. High ash (>2.0%) excessive chemical buffering salts ya cheap mineral extenders ki adulteration indicate karta hai. High fat (30%) hone ke kaaran seedha muffle furnace mein rakhne se explosive spattering aur sample loss ho sakta hai, isliye hotplate par slow pre-charring mandatory hai.",
    "detailedTestPrinciple": "Controlled Hotplate Pre-Charring and Muffle Furnace Incineration at 550 \u00b1 25\u00b0C (IS 1479 Part II / AOAC 945.46). 3.0-5.0g sample ko pre-ignited silica/porcelain crucible mein weigh kiya jaata hai. Fume hood mein electric hotplate par dhire-dhire smoke khatam hone tak char kiya jaata hai. Black char ko 550 \u00b1 25\u00b0C muffle furnace mein 4 ghante ash kiya jaata hai jab tak light grey/white mineral residue na mil jaye. Desiccator mein cool karke constant mass weigh kiya jaata hai.",
    "chemicalEquation": "NDC Organics [Fat, Protein, Sugars, Gums] + O2 (550\u00b0C) \u27f6 CO2 \u2191 + H2O \u2191 + SO2 \u2191   |   Minerals \u27f6 Na2O, K2O, P2O5, CaO, NaCl (Ash Residue)",
    "formulaBreakdown": {
      "formula": "% Total Ash = [(W3 - W1) / (W2 - W1)] \u00d7 100",
      "variables": [
        {
          "symbol": "W1",
          "description": "Empty pre-conditioned crucible ka tare weight 550\u00b0C ashing ke baad (g)"
        },
        {
          "symbol": "W2",
          "description": "Crucible plus NDC test sample ka weight ashing se pehle (g)"
        },
        {
          "symbol": "W3",
          "description": "Crucible plus white mineral ash residue ka constant weight (g)"
        },
        {
          "symbol": "(W2 - W1)",
          "description": "Accurate mass of NDC test portion (g)"
        },
        {
          "symbol": "(W3 - W1)",
          "description": "Net mass of inorganic mineral ash residue (g)"
        }
      ],
      "derivation": "Gravimetric mass ratio: Net mineral residue remaining after complete organic combustion divided by original sample mass multiplied by 100.",
      "factorOrigin": "Fundamental thermal gravimetric analysis principle.",
      "unitAnalysis": "% Ash = (g ash / g sample) \u00d7 100 = % w/w",
      "practicalExample": "W1 = 22.0000 g, W2 = 26.5120 g (sample = 4.5120 g), W3 = 22.0542 g. Net ash = 22.0542 - 22.0000 = 0.0542 g. % Ash = (0.0542 / 4.5120) \u00d7 100 = 1.20% Total Ash (Complies with typical NDC 0.5 - 1.5% range) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Hotplate par slow pre-charring kyu zaroori hai? Seedha muffle furnace mein kyu nahi rakhte?",
        "answer": "NDC mein 25-35% vegetable fat aur sugars hote hain. Agar seedha 550\u00b0C muffle furnace mein rakhein to volatile fat rapidly vaporize hokar ignite hoga aur violent flaming aur spattering create karega jisse sample crucible se bahar gir jaata hai. Hotplate par slow heating se fat bina flame ke smoke bankar gently decompose hota hai."
      },
      {
        "question": "Ashing temperature strictly 550 \u00b1 25\u00b0C kyu rakha jaata hai?",
        "answer": "1. 550\u00b0C par saari organic carbonaceous material completely CO2 aur H2O mein oxidize ho jaati hai.\n2. 550\u00b0C par sodium phosphate aur potassium salts stable rehte hain aur volatilize nahi hote.\n3. Agar 700\u00b0C+ par ash karein to sodium aur potassium chlorides evaporate hone lagte hain aur ash value artificially low aati hai."
      },
      {
        "question": "Desiccator cooling strictly 30 minute kyu honi chahiye?",
        "answer": "Ash residue mein sodium phosphate (Na2HPO4) aur potassium carbonates hote hain jo extremely hygroscopic hote hain. 550\u00b0C se nikalte hi silica gel desiccator mein 30 min cool karna zaroori hai taaki ye atmospheric humidity absorb na kare."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Sample weight",
        "value": "3.0 - 5.0 g",
        "reason": "~1% ash yields 30-50 mg residue \u2014 optimal precision on 0.1 mg analytical balance"
      },
      {
        "parameter": "Crucible",
        "value": "Silica or glazed porcelain",
        "reason": "Withstands 1000\u00b0C without mass loss or thermal cracking"
      },
      {
        "parameter": "Pre-charring",
        "value": "Low heat on electric hotplate",
        "reason": "Controlled pyrolysis of vegetable fat without flaming or sample spattering"
      },
      {
        "parameter": "Muffle furnace temp",
        "value": "550 \u00b1 25\u00b0C",
        "reason": "Complete organic combustion while preventing volatile chloride/phosphate sublimation"
      },
      {
        "parameter": "Ashing duration",
        "value": "3 to 4 hours until white",
        "reason": "Ensures zero black carbon particles remain in residue"
      },
      {
        "parameter": "Cooling",
        "value": "30 min in desiccator",
        "reason": "Prevents rapid moisture uptake by hygroscopic alkali metal phosphates"
      }
    ],
    "referenceStandard": "IS 1479 (Part II) 1961 / AOAC 945.46",
    "reagentsAndApparatus": [
      "Muffle Furnace electronically regulated at 550 \u00b1 25\u00b0C with digital display",
      "High-purity fused silica or glazed porcelain crucibles (45-50 mm diameter)",
      "Variable temperature electric hotplate inside efficient fume hood",
      "Long stainless steel crucible tongs with heat-resistant tips",
      "Analytical balance (0.1 mg sensitivity) and active silica gel desiccator"
    ],
    "prescribedLimit": "Commercial NDC Total Ash: 0.50% - 1.50%; High buffer salt NDC: 1.00% - 2.00%; Quality limit: Max 2.00%",
    "riskIfFailed": "High ash (>2.0%) indicates excessive buffer salts causing harsh chemical aftertaste; low ash (<0.3%) indicates buffer deficiency leading to protein curdling.",
    "procedureSteps": [
      "Crucible ko muffle furnace mein 550\u00b0C par 1 ghanta heat karein, desiccator mein 30 min cool karein aur tare weight W1 note karein.",
      "Melted homogenized NDC sample ka 3.0 se 5.0g crucible mein accurately weigh karein (W2).",
      "Crucible ko fume hood mein electric hotplate par rakhein. Low heat par shuru karein aur dhire-dhire heat badhayein jab tak water evaporate ho jaye aur fat smoke khatam hokar dry black carbon char ban jaye.",
      "Char wale crucible ko tongs ki madad se 550 \u00b1 25\u00b0C pre-heated muffle furnace mein transfer karein.",
      "3 se 4 ghante ash karein jab tak residue completely white ya light grey na ho jaye (Black carbon spots nahi rehne chahiye).",
      "Furnace switch off karein aur crucible ko ~200\u00b0C tak furnace ke andar cool hone dein.",
      "Crucible ko transfer karke desiccator mein strictly 30 minute cool karein aur analytical balance par weigh karein (W3).",
      "Formula se % Total Ash calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Tare Crucible",
        "title": "Crucible Conditioning",
        "action": "Ignite crucible at 550\u00b0C for 1h, cool, weigh W1",
        "scientificMechanism": "Removes surface organic volatiles and moisture from porcelain pores"
      },
      {
        "stepNumber": 2,
        "phaseName": "Sample Weighing",
        "title": "Aliquot Weighing",
        "action": "Weigh ~4.0g melted NDC into crucible (W2)",
        "scientificMechanism": "Provides measurable 30-50 mg inorganic ash residue"
      },
      {
        "stepNumber": 3,
        "phaseName": "Pre-Charring",
        "title": "Hotplate Slow Charring",
        "action": "Heat gently on hotplate until smoking ceases",
        "scientificMechanism": "Controlled thermal pyrolysis of lipids avoiding flame explosion"
      },
      {
        "stepNumber": 4,
        "phaseName": "Furnace Ashing",
        "title": "550\u00b0C Muffle Incineration",
        "action": "Ash at 550\u00b0C for 3-4 hours to white residue",
        "scientificMechanism": "Oxidizes all carbonaceous soot leaving inorganic mineral oxides"
      },
      {
        "stepNumber": 5,
        "phaseName": "Desiccate & Weigh",
        "title": "Desiccator Cooling & W3",
        "action": "Cool in desiccator 30 min, weigh to constant mass",
        "scientificMechanism": "Shields hygroscopic alkali phosphates from ambient atmospheric humidity"
      }
    ]
  },
  {
    "id": "ndc-test-13",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Physical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream, Vegetable Fat Dessert Topping",
    "testName": "Whipping Overrun (%) & Foam Stability (Syneresis) Determination (ISO 16374 / BS 7142)",
    "shortSummary": "Standardized planetary mixer whipping at 4-7\u00b0C to determine volumetric air expansion (overrun %), whip firmness, and serum syneresis weeping.",
    "detailedScientificRationale": "Non-Dairy Cream (NDC) ka sabse critical consumer functional parameter uska whipping overrun (% air expansion), whipping time, whip stiffness, aur foam stability (resistance to liquid syneresis / weeping) hota hai. Whipping ke dauran planetary mixer ka wire whisk high shear force generate karta hai jo liquid cream mein air bubbles incorporate karta hai. 4-7\u00b0C cold temperature par vegetable fat droplets mein solid fat crystals hote hain jo air bubble surface par migrate karke partial coalescence karte hain. Sodium caseinate aur polysorbate 60 surfactants air-water interface ko stabilize karte hain aur ek rigid 3D foam network banate hain jo liquid serum ko trap kar leta hai. Overrun measure karne ke liye fixed volume cup mein liquid cream aur whipped foam ka mass compare kiya jaata hai. Foam stability wire mesh funnel par 20\u00b0C par 2 se 24 ghante tak liquid drainage measure karke determine ki jaati hai.",
    "detailedTestPrinciple": "Volumetric Gravimetry and Sieve Liquid Drainage Evaluation (ISO 16374 / BS 7142). Liquid NDC ko 4-7\u00b0C par 12 ghante conditioning di jaati hai taaki fat crystallization complete ho sake. 500g chilled cream ko standardized planetary mixer mein wire whisk se medium-high speed par whip kiya jaata hai jab tak stiff peaks form na ho jayein (Whipping time note karein). Fixed volume cup (100 mL) mein unwhipped liquid cream ka mass (W_liquid) aur surface-leveled whipped cream ka mass (W_foam) accurately weigh kiya jaata hai. 100g whipped foam ko 60-mesh wire funnel par 20\u00b0C aur 4\u00b0C par 2-24 ghante rakha jaata hai aur graduated cylinder mein drained liquid serum (mL) measure kiya jaata hai.",
    "chemicalEquation": "Liquid Emulsion + Air + Shear (4\u00b0C) \u27f6 Rigid 3D Viscoelastic Foam [Fat-Crystal Coalesced Network]",
    "formulaBreakdown": {
      "formula": "% Whipping Overrun = [(W_liquid - W_foam) / W_foam] \u00d7 100",
      "variables": [
        {
          "symbol": "W_liquid",
          "description": "Mass of standard 100 mL cup filled with unwhipped liquid NDC (g)"
        },
        {
          "symbol": "W_foam",
          "description": "Mass of the exact same 100 mL cup filled with whipped foam without voids (g)"
        },
        {
          "symbol": "(W_liquid - W_foam)",
          "description": "Mass of liquid displaced by incorporated air cells (g)"
        }
      ],
      "derivation": "Overrun is defined as the volumetric percentage increase of cream foam relative to the original liquid volume. Because density is inversely proportional to volume for a fixed mass, comparing masses of equal volumes yields the exact overrun percentage.",
      "factorOrigin": "International dairy and baking industry standard definition for overrun.",
      "unitAnalysis": "% Overrun = [(g - g) / g] \u00d7 100 = percentage volumetric air expansion (%)",
      "practicalExample": "100 mL metal cup: W_liquid = 104.0 g. After 4.5 min whipping at 5\u00b0C, 100 mL cup W_foam = 26.0 g. % Overrun = [(104.0 - 26.0) / 26.0] \u00d7 100 = (78.0 / 26.0) \u00d7 100 = 300% Overrun. Drained serum after 4 hours at 20\u00b0C = 0.0 mL (Zero syneresis \u2014 premium commercial quality) \u2713"
    },
    "factorsExplanation": [
      {
        "question": "Cream ko whip karne se pehle strictly 4-7\u00b0C par 12 ghante kyu chill kiya jaata hai?",
        "answer": "1. Whipping process fat globules ke partial coalescence par depend karta hai. Iske liye fat globules ke andar solid fat crystals ka presence zaroori hai.\n2. Room temperature (25\u00b0C) par vegetable fat liquid oil form mein hota hai \u2014 whipping karne par emulsion break hokar butter/oil separate ho jaayegi aur foam nahi banega.\n3. 4-7\u00b0C par solid fat crystals air bubble interface ko pierce karke rigid protective skeleton banate hain."
      },
      {
        "question": "NDC dairy cream se zyada overrun kyu deti hai?",
        "answer": "Dairy cream typically 100-120% overrun deti hai, jabki NDC 250-350% overrun deti hai. Iska reason NDC mein synthetic high-performance surfactants (polysorbate 60, sorbitan monostearate) aur hydrocolloid gums (guar gum, carrageenan) ka synergistic blend hai jo air bubble surface tension ko drastically reduce karta hai aur smaller, more densely packed air bubbles trap karta hai."
      },
      {
        "question": "Over-whipping se kya nuksan hota hai?",
        "answer": "Agar stiff peaks aane ke baad bhi whipping continue rakhi jaye to excessive mechanical shear fat globule bridges ko completely crush kar deta hai. Cream grainy ho jaati hai, overrun drop ho jaata hai, aur emulsion churn hokar water aur vegetable fat alag-alag ho jaate hain."
      },
      {
        "question": "Syneresis (weeping) test cake decoration ke liye kyu critical hai?",
        "answer": "Whipped cream ka use cakes aur pastries par decorative icing ke liye hota hai. Agar foam stability poor ho to ambient room temperature (20-25\u00b0C) par whipped cream se paani/sugar syrup drain hone lagta hai (weeping), jisse cake soggy ho jaata hai aur decorative rosettes collapse ho jaate hain."
      }
    ],
    "factorsSummaryTable": [
      {
        "parameter": "Pre-chilling temp",
        "value": "4.0 - 7.0\u00b0C for 12 hrs",
        "reason": "Ensures complete solid fat crystallization needed for air cell wall support"
      },
      {
        "parameter": "Mixer speed",
        "value": "Medium-High (Planetary wire whisk)",
        "reason": "Provides optimum shear rate to fold air without thermal frictional heating"
      },
      {
        "parameter": "Whipping endpoint",
        "value": "Stiff peaks with smooth glossy texture",
        "reason": "Peak structural firmness before destructive over-whipping occurs"
      },
      {
        "parameter": "Whipping duration",
        "value": "3.5 - 6.0 minutes",
        "reason": "Standard industrial planetary whipping time window"
      },
      {
        "parameter": "Overrun cup",
        "value": "100 mL machined stainless steel cup",
        "reason": "Fixed precision volume for accurate density and air expansion calculation"
      },
      {
        "parameter": "Syneresis evaluation",
        "value": "60-mesh wire sieve at 20\u00b0C & 4\u00b0C",
        "reason": "Standardized liquid drainage measurement under gravity over 2-24 hours"
      }
    ],
    "referenceStandard": "ISO 16374 / BS 7142 / Bakery Whipped Topping Industrial Standards",
    "reagentsAndApparatus": [
      "Standardized Planetary Food Mixer (e.g. Hobart or KitchenAid) with stainless steel bowl and wire whip",
      "Precision machined 100 mL stainless steel density / overrun cup with flat strike-off straightedge",
      "Analytical / Top-loading balance with 0.01 g accuracy",
      "Stainless steel 60-mesh wire funnel / sieve with 50 mL graduated collecting cylinder",
      "Temperature-controlled refrigerated cabinet at 4-7\u00b0C and incubator at 20 \u00b1 1\u00b0C",
      "Digital probe penetration thermometer"
    ],
    "prescribedLimit": "Whipping Overrun: 250% - 350% (Commercial NDC Topping); Whipping Time: 3.5 - 6.0 min; Syneresis (Weeping): Max 1.0 mL drip after 4 hours at 20\u00b0C; 0.0 mL at 4\u00b0C",
    "riskIfFailed": "Low overrun (<200%) increases bakery cost per cake; high syneresis (>3 mL) causes iced cake collapse, water puddle formation, and melted appearance.",
    "procedureSteps": [
      "NDC liquid carton ko 4-7\u00b0C refrigerator mein 12 ghante store karein taaki fat crystals fully develop ho sakein (Direct warm cream whip nahi hogi).",
      "Mixer bowl aur wire whip ko bhi 15 minute chill karein.",
      "100 mL stainless steel density cup mein unwhipped liquid NDC ko brim tak bharein, straightedge spatula se surface level karein aur accurate weight note karein (W_liquid).",
      "500g chilled liquid NDC ko mixer bowl mein transfer karein. Digital thermometer se temperature verify karein (strictly 4-7\u00b0C).",
      "Planetary mixer ko medium-high speed par start karein aur stopwatch on karein.",
      "Whipped cream ke texture ko monitor karein: Cream pehle frothy hogi, phir soft peaks banenge, aur finally stiff peaks banenge jab whisk marks distinct aur firm dikhne lagen (Time record karein).",
      "Mixer turant stop karein (Over-whipping se avoid karein jisse graininess na aaye).",
      "Whipped foam se 100 mL density cup ko bina air pocket trap kiye spatula se bharein, surface ko flat scrape karein, outer surface wipe karein aur weigh karein (W_foam).",
      "Formula se % Overrun calculate karein.",
      "Foam Stability / Syneresis: 100g whipped cream ko 60-mesh wire funnel par rakhein jiske neeche 50 mL graduated cylinder laga ho. System ko 20\u00b0C par 2 ghante aur 4 ghante ke liye rakhein aur collect hue drained liquid (mL syneresis) ka volume note karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Thermal Prep",
        "title": "Cold Conditioning",
        "action": "Store liquid NDC at 4-7\u00b0C for 12 hours",
        "scientificMechanism": "Forms solid high-melting fat crystal nuclei inside dispersed globules"
      },
      {
        "stepNumber": 2,
        "phaseName": "Liquid Density",
        "title": "Liquid Mass W_liquid",
        "action": "Weigh 100 mL unwhipped liquid cream in standard cup",
        "scientificMechanism": "Determines baseline liquid continuous emulsion density"
      },
      {
        "stepNumber": 3,
        "phaseName": "Shear Whipping",
        "title": "Planetary Whipping",
        "action": "Whip 500g at medium-high speed until stiff peaks",
        "scientificMechanism": "Incorporates air and causes partial fat globule coalescence forming 3D foam"
      },
      {
        "stepNumber": 4,
        "phaseName": "Overrun Weighing",
        "title": "Foam Mass W_foam",
        "action": "Fill and level 100 mL cup with whipped foam, weigh",
        "scientificMechanism": "Measures density decrease from volumetric air cell entrapment"
      },
      {
        "stepNumber": 5,
        "phaseName": "Syneresis Check",
        "title": "Sieve Drainage Evaluation",
        "action": "Place 100g foam on wire mesh, record serum drip at 20\u00b0C",
        "scientificMechanism": "Evaluates foam network water-binding capacity and resistance to gravity weeping"
      }
    ]
  },
  {
    "id": "ndc-test-14",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Physical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Specific Gravity & Density Determination (IS 1166 / AOAC 988.06 / ISO 2811)",
    "shortSummary": "Rapid determination of emulsion density and specific gravity using glass pycnometer or oscillating digital U-tube density meter at 20°C/25°C to assess fat level and emulsion aeration.",
    "detailedScientificRationale": "NDC ki density directly fat content se related hai. Fat (density ~0.91-0.93 g/ml) paani se halka hota hai (1.0 g/ml). Zyada fat = kam density = lighter product. Agar density unexpectedly high hai = fat kam hai = possible adulteration ya formulation deviation. Density ek fast, non-destructive test hai jo har batch ka rapid screening provide karta hai. Emulsion properly homogenized hai ya nahi, ye different layers ki density check karke verify kiya jata hai.",
    "detailedTestPrinciple": "Archimedes principle aur pycnometer / digital oscillating U-tube method. Glass pycnometer mein exact known volume of water at standardized temperature (20°C/25°C) aur sample weight ka ratio le kar density aur specific gravity accurately determine ki jaati hai.",
    "chemicalEquation": "Density (ρ) = (W3 - W1) / (W2 - W1) × ρ_water(T)   |   Specific Gravity = ρ_sample / ρ_water(T)",
    "formulaBreakdown": {
      "formula": "Density (g/ml) = (W3 - W1) / [(W2 - W1) / ρ_water]",
      "variables": [
        {
          "symbol": "W1",
          "description": "Empty clean, dried pycnometer ka weight (g)"
        },
        {
          "symbol": "W2",
          "description": "Pycnometer + calibrated water ka weight at T°C (g)"
        },
        {
          "symbol": "W3",
          "description": "Pycnometer + bubble-free NDC sample ka weight at T°C (g)"
        },
        {
          "symbol": "ρ_water",
          "description": "Density of pure water at test temperature (0.99820 g/ml at 20°C)"
        }
      ],
      "derivation": "Direct pycnometric mass-to-volume ratio calculation based on standardized water calibration.",
      "factorOrigin": "Fundamental physical density definition (Mass/Volume).",
      "unitAnalysis": "g/mL or dimensionless SG ratio",
      "practicalExample": "W1 = 30.000 g, W2 = 55.000 g, W3 = 53.000 g at 20°C. Volume = (55 - 30) / 0.99820 = 25.045 mL. Density = (53 - 30) / 25.045 = 0.918 g/mL; SG = 0.920."
    },
    "factorsExplanation": [
      {
        "question": "Temperature control (20°C / 25°C) itna critical kyun hai?",
        "answer": "Fat ka thermal expansion coefficient paani se bahut zyada hota hai. 1°C temperature change se density mein ~0.001-0.003 g/ml difference aa sakta hai. Isliye ±0.1°C precision water bath mandatory hai."
      },
      {
        "question": "Filling ke dauran air bubbles avoid karna kyun zaroori hai?",
        "answer": "Air ki density ~0.0012 g/ml hoti hai. 1 mL trapped air bubble sample mass ko artificially kam kar deta hai, jisse calculated density falsely low aati hai."
      }
    ],
    "referenceStandard": "IS 1166 / AOAC 988.06 / ISO 2811",
    "reagentsAndApparatus": [
      "Glass Pycnometer (25 mL ya 50 mL with capillary stopper)",
      "Digital Density Meter (Anton Paar DMA series)",
      "Thermostatic Water Bath (±0.1°C)",
      "Analytical Balance (0.1 mg precision)",
      "Deionized / Distilled Water (0.99820 g/ml at 20°C)",
      "Analytical Grade Ethanol & Acetone"
    ],
    "prescribedLimit": "Standard Liquid NDC (35% Fat): 0.96 - 1.00 g/mL; High-Fat NDC (40-45%): 0.94 - 0.97 g/mL; Light NDC (20-25%): 1.00 - 1.03 g/mL; Adulterated (>1.02 g/mL).",
    "riskIfFailed": "High density indicates fat deficiency or illegal water dilution; inconsistent density between strata indicates incomplete homogenization and impending emulsion separation.",
    "procedureSteps": [
      "Pycnometer ko thoroughly clean karke 105°C oven mein dry karein aur desiccator mein cool karke W1 weigh karein.",
      "20.0°C water bath mein pycnometer ko distilled water se fill karke excess capillary se nikalne dein, bahar se wipe dry karke W2 weigh karein.",
      "NDC sample ko 20.0°C par equilibrate karke bina bubbles ke fill karein, stopper lagayein, wipe karein aur W3 weigh karein.",
      "Formula se density aur specific gravity calculate karein duplicate readings ke sath."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Calibration",
        "title": "Water Calibration",
        "action": "Weigh empty (W1) and water-filled (W2) pycnometer at 20°C",
        "scientificMechanism": "Determines exact true volume of pycnometer glassware"
      },
      {
        "stepNumber": 2,
        "phaseName": "Sample Measurement",
        "title": "NDC Weighing",
        "action": "Fill bubble-free NDC at 20°C and weigh (W3)",
        "scientificMechanism": "Accurately measures sample mass corresponding to calibrated volume"
      }
    ]
  },
  {
    "id": "ndc-test-15",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Physical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Viscosity Determination by Brookfield Rotational Rheometry (IS 1166 / ASTM D445 / ISO 3219)",
    "shortSummary": "Measurement of dynamic flow resistance and non-Newtonian pseudoplastic shear-thinning index across variable rotational speeds (6 to 60 RPM).",
    "detailedScientificRationale": "Viscosity whipping rate, pumpability, packaging fill speed, aur foam cell wall thickness ko directly govern karti hai. NDC shear-thinning (pseudoplastic) emulsion hai jisme shear rate badhne par viscosity drop hoti hai. Stabilizer hydrocolloids (carrageenan, guar gum) ki hydration aur network formation viscosity testing se verify hoti hai.",
    "detailedTestPrinciple": "Brookfield rotational viscometer principle. Calibrated spindle NDC sample mein controlled rotational velocity (RPM) par ghuma kar spring torque deflection measure karta hai jo dynamic viscosity (mPa.s / cP) mein convert hoti hai.",
    "chemicalEquation": "Shear Stress (τ) = η × (dv/dy)   |   Power Law: η = K × γ^(n - 1) (n < 1 pseudoplastic)",
    "formulaBreakdown": {
      "formula": "Viscosity (cP / mPa.s) = Dial Reading × Spindle Factor × (100 / RPM)",
      "variables": [
        {
          "symbol": "Dial Reading",
          "description": "Viscometer scale deflection (torque %)"
        },
        {
          "symbol": "Spindle Factor",
          "description": "Manufacturer calibrated spindle geometry factor"
        },
        {
          "symbol": "RPM",
          "description": "Rotational speed (6, 12, 30, 60 RPM)"
        }
      ],
      "derivation": "Rotational drag torque conversion through torsion spring constant into dynamic viscosity.",
      "factorOrigin": "ASTM D445 & ISO 3219 standardized rotational geometry constants.",
      "unitAnalysis": "cP (centipoise) or mPa.s (millipascal-seconds)",
      "practicalExample": "Spindle LV-2 at 60 RPM, 20°C: Dial reading 45.0, factor 5.0 → Viscosity = 45.0 × 5.0 = 225 cP (mPa.s)."
    },
    "factorsExplanation": [
      {
        "question": "Brookfield viscometer kyun zaroori hai capillary ke badle?",
        "answer": "NDC non-Newtonian fluid hai. Single shear rate wala capillary viscometer incomplete picture deta hai, jabki rotational rheometer variable RPM par true pseudoplastic profile deta hai."
      },
      {
        "question": "Sample pre-conditioning 30 min kyun chahiye?",
        "answer": "NDC thixotropic behavior exhibit karta hai (shaking se viscosity temporarily drop hoti hai). Rest condition mein 30 min hold karne se reversible structural gel recovery hoti hai."
      }
    ],
    "referenceStandard": "IS 1166 / ASTM D445 / ISO 3219",
    "reagentsAndApparatus": [
      "Brookfield Rotational Viscometer (LVT / RVT model)",
      "LV/RV Spindle Set (Spindles 1 to 4 / 1 to 7)",
      "Circulating Temperature Jacket with Water Bath (±0.5°C)",
      "600 mL Griffin Low-Form Beaker",
      "Standard Silicone Viscosity Calibration Oils (100 cP, 500 cP)"
    ],
    "prescribedLimit": "Standard Liquid Whipping NDC (20°C, 60 RPM): 200 - 800 mPa.s; Thin Liquid NDC: 50 - 200 mPa.s; Heavy Topping Cream: 800 - 3000 mPa.s; Chilled (5°C): 1000 - 5000 mPa.s.",
    "riskIfFailed": "Viscosity <150 mPa.s causes weak foam, poor overrun retention, and packaging leakage; viscosity >1000 mPa.s causes line blockage in volumetric fillers and heavy, gummy mouthfeel.",
    "procedureSteps": [
      "500 mL NDC sample ko 20.0°C water bath mein 30 minute bina vigorous agitation ke equilibrate karein.",
      "600 mL beaker mein sample transfer karein aur guard leg ke sath viscometer mein mount karein.",
      "Appropriate spindle immerse karein groove mark tak. 60 RPM par start karke 1 minute baad torque % aur dial reading note karein.",
      "Stepwise RPM reduce karein (60 → 30 → 12 → 6 RPM) taaki shear-thinning flow index determine ho sake."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Equilibration",
        "title": "Thermal Pre-Conditioning",
        "action": "Hold 500 mL NDC at 20.0°C for 30 min",
        "scientificMechanism": "Restores thixotropic gel network after handling shear"
      },
      {
        "stepNumber": 2,
        "phaseName": "Rotational Drag",
        "title": "Multi-Speed Rheometry",
        "action": "Record torque at 60, 30, 12, 6 RPM",
        "scientificMechanism": "Measures shear stress at varying strain rates to confirm pseudoplasticity"
      }
    ]
  },
  {
    "id": "ndc-test-16",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Whey Protein Nitrogen Index (WPNI) & Heat Classification (ADPI / AOAC 985.09)",
    "shortSummary": "Determination of undenatured native soluble whey protein nitrogen via acid precipitation at pH 4.6 and saturated ammonium sulfate salting-out.",
    "detailedScientificRationale": "WPNI test pasteurization intensity aur heat damage ka benchmark indicator hai. Native un-denatured whey proteins whipping cream ke air-water interface par flexible elastic film banate hain. Agar manufacturing ya spray drying ke dauran excessive heat treatment hua ho to whey proteins irreversibly aggregate ho jaate hain jisse whipping performance aur foam overrun severely drop ho jaati hai.",
    "detailedTestPrinciple": "Isoelectric precipitation of casein at pH 4.6 followed by saturated ammonium sulfate salting-out of undenatured whey proteins. Denatured proteins aggregate and co-precipitate with casein, while native whey proteins remain soluble until selective ammonium sulfate fractionation, followed by turbidimetric or Kjeldahl nitrogen determination.",
    "chemicalEquation": "Native Whey Proteins (Soluble) + Sat. (NH4)2SO4 ⟶ Precipitated Native Whey Nitrogen Complex",
    "formulaBreakdown": {
      "formula": "WPNI (mg N/g solids) = [mg Undenatured Whey Protein Nitrogen / g Sample Dry Matter]",
      "variables": [
        {
          "symbol": "mg N",
          "description": "Kjeldahl or spectrophotometric nitrogen in isolated whey fraction"
        },
        {
          "symbol": "g Sample",
          "description": "Total dry solids mass of tested NDC sample"
        }
      ],
      "derivation": "ADPI standardized empirical turbidimetric transmittance or Kjeldahl nitrogen back-titration.",
      "factorOrigin": "ADPI Dairy Solids Standards Classification.",
      "unitAnalysis": "mg N/g dry solids",
      "practicalExample": "Aliquots show 4.5 mg N/g → Classified as Medium Heat treatment (Adequate HTST pasteurization without functional protein impairment)."
    },
    "factorsExplanation": [
      {
        "question": "pH 4.6 par casein precipitate kyun hota hai?",
        "answer": "Casein ka isoelectric point (pI) ~4.6 hai jahan net charge zero hota hai aur electrostatic repulsion khatam hone se casein precipitate ho jaata hai, jabki whey proteins (pI ~4.8-5.2) soluble rehte hain."
      }
    ],
    "referenceStandard": "ADPI Standards / AOAC 985.09 / ISO 6732",
    "reagentsAndApparatus": [
      "UV-Vis Spectrophotometer (600 nm) or Kjeldahl Unit",
      "Benchtop Centrifuge (4000 RPM)",
      "Calibrated pH Meter (0.01 resolution)",
      "Saturated Ammonium Sulfate Solution",
      "10% Acetic Acid / Sodium Acetate Buffer (pH 4.6)"
    ],
    "prescribedLimit": "Low Heat (WPNI >6.0 mg N/g) — Best whipping; Medium Heat (1.5 - 6.0 mg N/g) — Standard HTST specification; High Heat (<1.5 mg N/g) — Overheated, poor foam volume.",
    "riskIfFailed": "WPNI <1.5 mg N/g causes failure to whip, dense foam collapse, and coarse crumbly appearance on bakery icing.",
    "procedureSteps": [
      "Reconstituted NDC sample ka pH 4.6 par adjust karein buffer se taaki casein separate ho jaye.",
      "Centrifuge karke clear serum collect karein aur saturated ammonium sulfate add karein.",
      "Turbidity ya Kjeldahl digestion se undenatured nitrogen quantify karein standard calibration curve ke against."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Casein Removal",
        "title": "Acid Precipitation",
        "action": "Adjust sample to pH 4.6 with acetate buffer and centrifuge",
        "scientificMechanism": "Precipitates isoelectric casein and denatured aggregated whey proteins"
      },
      {
        "stepNumber": 2,
        "phaseName": "Whey Isolation",
        "title": "Salting-Out & Measurement",
        "action": "Add saturated ammonium sulfate and measure nitrogen at 600 nm",
        "scientificMechanism": "Selectively salts out native undenatured whey protein nitrogen"
      }
    ]
  },
  {
    "id": "ndc-test-17",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Physical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Whipped Foam Stability & Drain Time Determination (IDF Standard 116A)",
    "shortSummary": "Direct quantitative measurement of whipped foam stiffness, liquid drainage rate on 100-mesh wire funnel, and foam height collapse over 2 to 24 hours.",
    "detailedScientificRationale": "Foam stability bakery aur pastry chefs ke liye sabse critical functional parameter hai. Whipped decoration ko cakes par room temperature (25°C) aur refrigerated display (5°C) par hours tak shape hold karni hoti hai. Emulsifiers (polysorbate 60, SMS) aur fat crystal network (Pickering stabilization) liquid serum ko gravity weeping se protect karte hain.",
    "detailedTestPrinciple": "Standardized planetary whipping to peak firmness followed by gravimetric mesh-drain funnel filtration and volumetric cylinder height tracking at 5°C and 25°C.",
    "chemicalEquation": "% Foam Collapse = [(H0 - Ht) / H0] × 100   |   Drain % = (W_drained / W_initial) × 100",
    "formulaBreakdown": {
      "formula": "% Foam Collapse = [(H0 - Ht) / H0] × 100",
      "variables": [
        {
          "symbol": "H0",
          "description": "Initial packed foam column height in graduated cylinder (mm)"
        },
        {
          "symbol": "Ht",
          "description": "Foam column height after specified time t (30, 60, 120 min)"
        },
        {
          "symbol": "W_drained",
          "description": "Weight of liquid serum collected in receiving cylinder (g)"
        }
      ],
      "derivation": "Direct volumetric and gravimetric stability ratio.",
      "factorOrigin": "IDF Standard 116A Whipping Performance Standards.",
      "unitAnalysis": "Percentage (%) and mL drained serum",
      "practicalExample": "100 g whipped cream placed on funnel for 60 min at 5°C: Drained liquid = 1.2 mL. Foam height retention = 96% → Excellent rating."
    },
    "factorsExplanation": [
      {
        "question": "Pre-conditioning at 5°C for 24 hours kyun mandatory hai?",
        "answer": "Vegetable fat ko completely beta-prime (β') polymorphic state mein crystallize hona zaroori hai. Warm whipping fat crystals ko destroy kar deti hai jisse foam instantly collapse ho jaata hai."
      }
    ],
    "referenceStandard": "IDF Standard 116A / Industrial Whipping Specifications",
    "reagentsAndApparatus": [
      "Planetary Bench Mixer with Wire Whisk (e.g. KitchenAid)",
      "Stainless Steel 100-Mesh Wire Funnel",
      "Graduated Cylinders (100 mL, 250 mL)",
      "Digital Height Caliper & Stopwatch",
      "Thermostatic Cold Room / Refrigerator (5 ± 1°C)"
    ],
    "prescribedLimit": "Drain Volume at 30 min (5°C): <5 mL/100g (Excellent), 5-15 mL/100g (Good), >15 mL (Poor). Foam Height at 2 hr (25°C): >90% initial height.",
    "riskIfFailed": "Excessive drainage causes watery weeping on cake surfaces, soggy sponge layers, bleeding food coloring, and collapsed rosette piping.",
    "procedureSteps": [
      "200 mL NDC ko 5°C par 24 hr condition karein, chilled bowl mein stiff peaks tak whip karein (record overrun).",
      "100 g foam ko 100-mesh wire funnel par place karein aur 5°C par 30, 60, 120 min par drained serum volume measure karein.",
      "Parallel mein graduated cylinder mein initial height H0 record karke 25°C par height collapse monitor karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Standardized Whip",
        "title": "Chilled Planetary Whipping",
        "action": "Whip 200 mL NDC at 5°C to firm peak overrun",
        "scientificMechanism": "Incorporate air into stabilized fat-crystal Pickering emulsion"
      },
      {
        "stepNumber": 2,
        "phaseName": "Drainage Tracking",
        "title": "Funnel Sieve Drainage",
        "action": "Weigh drained serum at 30, 60, and 120 minutes",
        "scientificMechanism": "Quantifies gravitational syneresis and serum retention"
      }
    ]
  },
  {
    "id": "ndc-test-18",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Physical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Melting Point & Dropping Point of NDC Fat (AOCS Cc 1-25 / ISO 6321)",
    "shortSummary": "Determination of melting and thermal transition points of extracted vegetable fat using capillary tube and automated Mettler dropping point cup.",
    "detailedScientificRationale": "Fat identity, degree of hydrogenation, mouthfeel, aur bloom resistance melting point se confirm hote hain. Low melting fats (coconut oil, 24-26°C) body temperature par instantly melt hote hain lekin low foam stability dete hain. Partially hydrogenated PKO (~35-40°C) optimal balance deta hai between whipping stiffness aur smooth melt-in-the-mouth texture.",
    "detailedTestPrinciple": "Dropping Point: Temperature at which softened fat flows through standard orifice cup under gravity. Clear Melting Point: Temperature at which solidified fat inside capillary becomes fully optically transparent.",
    "chemicalEquation": "Triglyceride Solid Crystal Matrix ⟶ (ΔT, 0.5°C/min) ⟶ Isotropic Liquid Phase",
    "formulaBreakdown": {
      "formula": "Dropping Point (°C) = T_drop (first droplet falls from sample cup)",
      "variables": [
        {
          "symbol": "T_drop",
          "description": "Automated photocell detection temperature (°C)"
        }
      ],
      "derivation": "Standard AOCS Cc 1-25 thermal flow measurement.",
      "factorOrigin": "AOCS thermal analysis standard.",
      "unitAnalysis": "Degrees Celsius (°C)",
      "practicalExample": "Extracted PKO fat dropping point = 36.5°C → Ideal for whipping cream with clean sensory melt-off at body temperature (37°C)."
    },
    "factorsExplanation": [
      {
        "question": "Heating rate 0.5-1.0°C/min kyun maintain karni chahiye?",
        "answer": "Fat low thermal conductivity exhibit karta hai. Faster heating thermal lag create karti hai jisse reading actual sample temperature se 3-5°C falsely high aati hai."
      }
    ],
    "referenceStandard": "AOCS Cc 1-25 / ISO 6321 / Codex Standard 210",
    "reagentsAndApparatus": [
      "Automated Dropping Point Apparatus (Mettler Toledo DP70)",
      "Thin-Wall Capillary Melting Tubes (1.0 mm ID)",
      "Precision NIST-Calibrated Thermometer (±0.1°C)",
      "Controlled Temperature Cryostat / Water Bath"
    ],
    "prescribedLimit": "Ideal Whipping NDC Fat (Hydrogenated PKO): 32.0°C - 40.0°C; Coconut Oil: 23.0°C - 26.0°C; Dairy AMF: 30.0°C - 38.0°C; Fully Hydrogenated (>45°C) is unacceptable.",
    "riskIfFailed": "Dropping point <30°C causes cream to liquefy in room display; dropping point >42°C causes waxy, greasy residue that coats consumer palates unpleasantly.",
    "procedureSteps": [
      "Extracted fat ko 70°C par melt karein, standardized cup/capillary mein fill karein aur 5°C par 24 hr temper karein.",
      "Apparatus mein mount karein 10°C below expected melting point.",
      "0.5°C/min rate par heat apply karein aur first droplet fall / optical clarity temperature record karein triplicate mein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Tempering",
        "title": "Fat Melting & Recrystallization",
        "action": "Melt at 70°C and solidify at 5°C for 24 hr",
        "scientificMechanism": "Erases thermal history and standardizes stable polymorphic crystal state"
      },
      {
        "stepNumber": 2,
        "phaseName": "Ramp Heating",
        "title": "Thermal Flow Detection",
        "action": "Heat at 0.5°C/min until first droplet drops from cup",
        "scientificMechanism": "Detects solidus-to-liquidus transition temperature under standardized gravity"
      }
    ]
  },
  {
    "id": "ndc-test-19",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Physical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Solid Fat Content (SFC) by Pulsed NMR (AOCS Cd 16b-93 / ISO 8292-1)",
    "shortSummary": "Direct non-destructive measurement of solid vs liquid proton relaxation in fat phase across temperatures from 5°C to 40°C using benchtop pulsed NMR.",
    "detailedScientificRationale": "SFC at whipping temperature (5-10°C) whipping performance ka single sabse bada scientific predictor hai. Whipping ke dauran air bubbles ke around solid fat crystals ki continuous stabilizing lining (Pickering stabilization) banti hai. Agar 5°C par SFC <45% ho to cream whip nahi hogi; agar 37°C par SFC >3% ho to muh mein mom (waxy) jaisa feeling aayegi.",
    "detailedTestPrinciple": "Pulsed 1H Nuclear Magnetic Resonance (NMR) transverse relaxation rate discrimination. Radiofrequency pulse protons ko excite karta hai. Solid protons rapidly relax hote hain (short T2 ~10-30 μs), jabki liquid protons slowly relax hote hain (long T2 >10 ms). FID signal ratio se solid fat percentage calculate hota hai.",
    "chemicalEquation": "SFC (%) = [S_solid / (S_solid + S_liquid)] × 100",
    "formulaBreakdown": {
      "formula": "SFC (%) = [S(70 μs) - S(11 ms) × F] / S(70 μs) × 100",
      "variables": [
        {
          "symbol": "S(70 μs)",
          "description": "Total proton signal (solid + liquid) at 70 microseconds"
        },
        {
          "symbol": "S(11 ms)",
          "description": "Residual liquid proton signal at 11 milliseconds"
        },
        {
          "symbol": "F",
          "description": "Instrument calibration factor"
        }
      ],
      "derivation": "Standard AOCS Cd 16b-93 direct method NMR calculation.",
      "factorOrigin": "International Union of Pure and Applied Chemistry (IUPAC) 2.150 standard.",
      "unitAnalysis": "Percentage (%) solid fat",
      "practicalExample": "Extracted NDC fat: SFC at 5°C = 62%, at 10°C = 48%, at 20°C = 28%, at 35°C = 2%, at 37.8°C = 0.5% (Meets ideal bakery whipping profile)."
    },
    "factorsExplanation": [
      {
        "question": "ISO 8292 tempering protocol kyun zaroori hai?",
        "answer": "Polymorphic forms (alpha, beta-prime, beta) different solid fractions show karte hain. Standard tempering (80°C melt → 0°C 1 hr → 26°C 40 min → measurement temp) consistent β' crystals ensure karta hai."
      }
    ],
    "referenceStandard": "AOCS Cd 16b-93 / ISO 8292-1 / IUPAC 2.150",
    "reagentsAndApparatus": [
      "Pulsed Benchtop NMR Analyzer (Bruker Minispec mq-one)",
      "Precision NMR Tubes (10 mm diameter)",
      "Thermostatic Water Baths (0°C, 10°C, 20°C, 30°C, 35°C, 40°C ±0.1°C)",
      "Standard NMR SFC Reference Calibration Standards (0%, 30%, 70%)"
    ],
    "prescribedLimit": "Target NDC Fat SFC Profile: 5°C: 50-70%; 10°C: 35-55%; 20°C: 20-40%; 25°C: 10-25%; 30°C: 5-15%; 35°C: <5%; 37.8°C: <2.0% (Complete body-temp melting).",
    "riskIfFailed": "Low SFC at 5-10°C results in complete whipping failure; high SFC at 37.8°C causes greasy waxy film on the palate.",
    "procedureSteps": [
      "Dry fat sample ko 10 mm NMR tube mein 3.5 cm height tak fill karein.",
      "Tempering thermal protocol follow karein: 80°C melt (1 hr) → 0°C hold (1 hr) → 26°C (40 min) → transfer to measurement bath for 30 min.",
      "Minispec mein insert karein, 90° RF pulse apply karein aur SFC reading record karein across 5°C to 40°C."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Standard Tempering",
        "title": "ISO Polymorphic Conditioning",
        "action": "80°C (1 hr) ⟶ 0°C (1 hr) ⟶ 26°C (40 min) ⟶ Target Temp",
        "scientificMechanism": "Induces stable beta-prime crystal polymorphic transformation"
      },
      {
        "stepNumber": 2,
        "phaseName": "Pulse NMR",
        "title": "FID Signal Relaxation",
        "action": "Acquire proton magnetization decay at 70 μs and 11 ms",
        "scientificMechanism": "Separates immobile crystalline protons from mobile liquid triglycerides"
      }
    ]
  },
  {
    "id": "ndc-test-20",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Microbiological",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Microbiological Safety Battery: TPC, Coliforms, Yeast & Mould (FSSAI / IS 5402 / IS 5403 / ISO 4833)",
    "shortSummary": "Aseptic pour-plating and cultural enumeration of Total Plate Count (PCA, 30°C), Coliforms (VRBA/MacConkey, 37°C), and Yeast & Mould (DRBC, 25°C).",
    "detailedScientificRationale": "NDC mein 50-60% moisture, glucose syrup sugars, aur sodium caseinate proteins hote hain jo microbial multiplication ke liye favorable environment provide karte hain. TPC pasteurization adequacy verify karta hai. Coliform absence sanitary hygiene aur fecal safety confirm karti hai. Yeast & mould shelf-life deterioration aur sour gas production ko predict karte hain.",
    "detailedTestPrinciple": "Serial 10-fold dilution in peptone water followed by selective nutrient agar pour-plating and colony enumeration under controlled aerobic incubation.",
    "chemicalEquation": "CFU/mL = Total Colony Count / (Volume Plated × Dilution Factor)",
    "formulaBreakdown": {
      "formula": "CFU/mL = N / (V × d)",
      "variables": [
        {
          "symbol": "N",
          "description": "Counted colonies on plates in statistically valid range (30-300)"
        },
        {
          "symbol": "V",
          "description": "Volume of diluted sample plated (1.0 mL)"
        },
        {
          "symbol": "d",
          "description": "Dilution factor (10^-1, 10^-2, 10^-3)"
        }
      ],
      "derivation": "Standard ISO 4833 microbiological colony enumeration formula.",
      "factorOrigin": "FSSAI Food Safety Standards Regulations.",
      "unitAnalysis": "CFU/mL (Colony Forming Units per milliliter)",
      "practicalExample": "150 colonies counted at 10^-2 dilution in 1 mL plate: CFU/mL = 150 / (1 × 0.01) = 15,000 CFU/mL (Within FSSAI ≤50,000 limit)."
    },
    "factorsExplanation": [
      {
        "question": "Pour plate method spread plate se better kyun hai NDC ke liye?",
        "answer": "NDC ke fat globules molten agar (45°C) mein uniformly disperse ho jaate hain. Spread plating mein surface oil film banti hai jo colonies ko obscure karti hai."
      }
    ],
    "referenceStandard": "IS 5402 / IS 5403 / ISO 4833 / ISO 4831 / ISO 21527 / FSSAI Regulations",
    "reagentsAndApparatus": [
      "Laminar Air Flow (LAF) Class II Safety Cabinet",
      "Bacteriological Incubators (30°C, 37°C, 25°C)",
      "Autoclave (121°C, 15 psi)",
      "Sterile Glass/Plastic Petri Dishes (90 mm)",
      "Plate Count Agar (PCA), VRBA, DRBC Media",
      "0.1% Sterile Peptone Water Diluent"
    ],
    "prescribedLimit": "FSSAI Mandatory Limits: TPC: ≤50,000 CFU/mL; Coliform Count: Absent in 1 mL (≤10 CFU/mL); Yeast & Mould: ≤10 CFU/mL; Salmonella: Absent in 25 mL; S. aureus: Absent in 0.1 mL.",
    "riskIfFailed": "Presence of coliforms or pathogens indicates sewage contamination or pasteurizer failure, requiring immediate batch recall and regulatory reporting.",
    "procedureSteps": [
      "LAF cabinet mein 1.0 mL NDC ko 9.0 mL sterile peptone water mein mix karke 10^-1 to 10^-4 serial dilutions banayein.",
      "1 mL aliquot sterile petri dishes mein transfer karein, 15 mL 45°C molten media pour karein, figure-8 motion mein mix karein.",
      "PCA plates ko 30°C par 48-72 hr, VRBA ko 37°C par 24 hr, aur DRBC ko 25°C par 5 din incubate karein.",
      "30-300 countable colonies ko count karke CFU/mL calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Serial Dilution",
        "title": "Aseptic Ten-Fold Dilution",
        "action": "Dilute 1 mL sample into 9 mL peptone water (10^-1 to 10^-4)",
        "scientificMechanism": "Reduces cell concentration to statistically valid counting range (30-300)"
      },
      {
        "stepNumber": 2,
        "phaseName": "Selective Plating",
        "title": "Pour Plating & Incubation",
        "action": "Pour PCA (30°C), VRBA (37°C), DRBC (25°C) and incubate",
        "scientificMechanism": "Allows colony formation for TPC, coliforms, and fungal organisms"
      }
    ]
  },
  {
    "id": "ndc-test-21",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Hydroxymethylfurfural (HMF) Colorimetric & HPLC Determination (AOAC 980.23 / IDF 57)",
    "shortSummary": "Spectrophotometric quantification of 5-HMF at 550 nm via p-toluidine and barbituric acid reaction to assess heat treatment damage and Maillard browning risk.",
    "detailedScientificRationale": "NDC formulations mein reducing sugars (glucose syrup, dextrose) aur amino acids (sodium caseinate, soy protein) dono hote hain. High-temperature processing (UHT, pasteurization) Amadori rearrangement aur Maillard reaction induce karta hai jiska byproduct 5-Hydroxymethyl-2-furaldehyde (HMF) hai. High HMF protein lysine loss, caramel off-flavor, and browning indicate karta hai.",
    "detailedTestPrinciple": "Deproteinization of sample using Carrez reagents followed by reaction of free HMF with p-toluidine and barbituric acid to produce a stable chromophoric pink complex measured spectrophotometrically at 550 nm.",
    "chemicalEquation": "5-HMF + Barbituric Acid + p-Toluidine ⟶ Chromophoric Complex (λ_max = 550 nm)",
    "formulaBreakdown": {
      "formula": "HMF (mg/kg) = (Absorbance_550 / Slope_std) × Dilution Factor × Volume Factor",
      "variables": [
        {
          "symbol": "Absorbance_550",
          "description": "Net optical density at 550 nm against blank"
        },
        {
          "symbol": "Slope_std",
          "description": "Calibration slope from pure HMF standard curve (0-10 mg/L)"
        },
        {
          "symbol": "Dilution Factor",
          "description": "Sample extraction and dilution ratio"
        }
      ],
      "derivation": "Beer-Lambert Law spectrophotometric quantification.",
      "factorOrigin": "White & Subers standard photometric method.",
      "unitAnalysis": "mg/kg (ppm)",
      "practicalExample": "A550 = 0.120, standard curve slope = 0.045, dilution factor = 5 → HMF = (0.120 / 0.045) × 5 = 13.3 mg/kg (Acceptable HTST level)."
    },
    "factorsExplanation": [
      {
        "question": "Carrez clarification kyun zaroori hai?",
        "answer": "Proteins aur fat turbidity create karte hain jo 550 nm light scatter karke false high absorbance deti hain. Carrez I & II precipitate them for a crystal-clear aqueous filtrate."
      }
    ],
    "referenceStandard": "AOAC 980.23 / IDF Standard 57 / White & Subers Method",
    "reagentsAndApparatus": [
      "Double Beam UV-Vis Spectrophotometer (550 nm, 1 cm cuvettes)",
      "HPLC C18 Column with UV Detector (284 nm, reference)",
      "p-Toluidine Solution (10% in isopropanol)",
      "Barbituric Acid Solution (0.5% aqueous)",
      "Carrez Solutions I & II",
      "Pure 5-Hydroxymethylfurfural (analytical reference standard)"
    ],
    "prescribedLimit": "Fresh HTST Pasteurized NDC: <5.0 mg/kg; Moderately Processed: 5.0 - 20.0 mg/kg; UHT Sterilized: 20.0 - 80.0 mg/kg; Heat Damaged / Stored Warm: >80.0 mg/kg.",
    "riskIfFailed": "HMF >80 mg/kg results in brown discoloration, stale caramel off-taste, protein cross-linking, and severe loss of foaming elasticity.",
    "procedureSteps": [
      "5.0 g NDC ko 40 mL warm water mein dissolve karein, 2.5 mL Carrez I aur 2.5 mL Carrez II add karein, filter karke 50 mL tak dilute karein.",
      "Tube A (Sample): 2.0 mL filtrate + 5.0 mL p-toluidine + 1.0 mL barbituric acid solution mix karein.",
      "Tube B (Blank): 2.0 mL filtrate + 5.0 mL p-toluidine + 1.0 mL water mix karein.",
      "5 minute reaction ke baad 550 nm par absorbance read karein aur standard curve se HMF (mg/kg) calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Clarification",
        "title": "Carrez Deproteinization",
        "action": "Precipitate proteins/lipids with Carrez I & II and filter",
        "scientificMechanism": "Removes light-scattering colloids to produce optical clarity"
      },
      {
        "stepNumber": 2,
        "phaseName": "Colorimetry",
        "title": "Chromophore Formation & Detection",
        "action": "React with p-toluidine and barbituric acid, measure at 550 nm",
        "scientificMechanism": "Generates spectrophotometrically quantifiable pink quinoid dye"
      }
    ]
  },
  {
    "id": "ndc-test-22",
    "category": "Non-Dairy Cream (NDC)",
    "testType": "Chemical",
    "productName": "Non-Dairy Cream (NDC), Whipping Cream",
    "testName": "Emulsifier Identification & Quantification by TLC & RP-HPLC (AOAC 974.11 / ISO 18861)",
    "shortSummary": "Folch extraction of surfactants followed by Silica Gel 60 TLC cobalt thiocyanate screening and RP-HPLC-ELSD quantification of Polysorbate 60, SMS, and mono/diglycerides.",
    "detailedScientificRationale": "NDC emulsions mein 0.6-1.2% food-grade emulsifiers hote hain. Polysorbate 60 (high HLB ~14.9) whipping ke dauran rapid foam volume aur air entrapment stimulate karta hai, jabki Sorbitan Monostearate SMS (low HLB ~4.7) fat crystal Pickering stabilization provide karta hai. FSSAI limit whipping toppings mein Polysorbates ke liye max 0.46% (4600 ppm) specify karti hai. Exact HPLC profiling compliance aur functional peak firmness verify karti hai.",
    "detailedTestPrinciple": "Folch liquid-liquid surfactant partition (Chloroform:Methanol 2:1) followed by Silica Gel 60 F254 TLC development (Cobalt thiocyanate colorimetry for polyoxyethylene blue complexes) and Reverse-Phase C18 HPLC coupled with Evaporative Light Scattering Detection (ELSD) for universal aerosol mass detection.",
    "chemicalEquation": "Polysorbate 60 + Co(SCN)4^2- ⟶ Blue Polyoxyethylene-Cobalt Thiocyanate Complex (λ_max = 620 nm)",
    "formulaBreakdown": {
      "formula": "% Emulsifier = [(C_HPLC × V_extract) / (W_sample × 1000)] × 100",
      "variables": [
        {
          "symbol": "C_HPLC",
          "description": "Concentration determined from standard ELSD response curve (mg/mL)"
        },
        {
          "symbol": "V_extract",
          "description": "Total reconstituted solvent extract volume (mL)"
        },
        {
          "symbol": "W_sample",
          "description": "Sample test weight taken (g)"
        }
      ],
      "derivation": "Direct volumetric dilution and chromatographic calibration curve mass quantification.",
      "factorOrigin": "AOAC 974.11 & ISO 18861 standard chromatographic methods.",
      "unitAnalysis": "Percentage by weight (w/w %)",
      "practicalExample": "10.0 g NDC extracted into 5.0 mL chloroform; HPLC C_HPLC for Polysorbate 60 = 0.64 mg/mL → % Polysorbate 60 = [(0.64 × 5.0) / (10.0 × 1000)] × 100 = 0.32% (Complies with FSSAI ≤0.46% limit)."
    },
    "factorsExplanation": [
      {
        "question": "Polysorbate 60 aur SMS combination kyun zaroori hai?",
        "answer": "Polysorbate 60 (HLB 14.9) aqueous foaming agent hai aur SMS (HLB 4.7) lipophilic fat crystal stabilizer hai. Dono ka 65:35 ratio optimal HLB ~11.3 deta hai jo stiff non-collapsing peaks banata hai."
      },
      {
        "question": "ELSD detector kyun mandatory hai UV ke badle?",
        "answer": "Polysorbates aur glycerides mein UV chromophores nahi hote. ELSD mobile phase ko evaporate karke solid surfactant solute aerosol scattering se mass quantify karta hai."
      }
    ],
    "referenceStandard": "AOAC 974.11 / ISO 18861 / FSSAI Food Additives Regulations / AOCS Ja 7b-91",
    "reagentsAndApparatus": [
      "Silica Gel 60 F254 Pre-coated TLC Plates (20 × 20 cm)",
      "RP-HPLC System with Quaternary Gradient Pump & ELSD Detector",
      "Rotary Vacuum Evaporator with 40°C Water Bath",
      "Folch Extraction Solvent (Chloroform:Methanol 2:1 HPLC Grade)",
      "Cobalt Thiocyanate Spray Reagent",
      "Pure Reference Standards: Polysorbate 60, SMS, GMS (USP Grade)"
    ],
    "prescribedLimit": "Polysorbate 60: 0.20% - 0.45% (FSSAI Max 0.46%); Sorbitan Monostearate (SMS): 0.15% - 0.35% (GMP); Sodium Stearoyl Lactylate (SSL): 0.10% - 0.30% (Max 0.5%); Total Emulsifiers: 0.60% - 1.20%.",
    "riskIfFailed": "Excess Polysorbate (>0.46%) is an FSSAI statutory non-compliance; low emulsifier (<0.5% total) causes complete whipping failure, zero stiffness, and excessive serum leakage.",
    "procedureSteps": [
      "10.0 g NDC ko 50 mL Chloroform:Methanol (2:1) se separatory funnel mein extract karein, 10 mL 0.9% NaCl add karke phase separate karein aur chloroform layer collect karein.",
      "Extract ko rotary evaporator par 40°C par concentrate karke 2.0 mL karein.",
      "5 μL extract aur standard solutions Silica Gel 60 TLC plate par spot karke Chloroform:MeOH:H2O:HCOOH (65:25:4:1) mein develop karein.",
      "Cobalt thiocyanate reagent se spray karke 105°C par heat karein aur Polysorbate 60 ka blue spot (Rf ~0.38) confirm karein.",
      "Extract ko RP-HPLC C18 column par ELSD detector se run karein aur peak area integration se exact percentage calculate karein."
    ],
    "flowchartSteps": [
      {
        "stepNumber": 1,
        "phaseName": "Folch Extraction",
        "title": "Lipid-Surfactant Partition",
        "action": "Extract 10g sample with 50 mL Chloroform:MeOH (2:1)",
        "scientificMechanism": "Selectively isolates polar and non-polar surfactants from dairy/soy proteins"
      },
      {
        "stepNumber": 2,
        "phaseName": "Chromatography",
        "title": "TLC & HPLC-ELSD Quantification",
        "action": "Separate on C18 column and detect with ELSD drift tube at 65°C",
        "scientificMechanism": "Quantifies non-chromophoric emulsifier mass against USP calibration standards"
      }
    ]
  }
];
