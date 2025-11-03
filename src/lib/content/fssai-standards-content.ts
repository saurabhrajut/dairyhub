export const fssaiStandardsContent = {
    hinglish: {
        mainTitle: "Dairy Products ke liye FSSAI Standards",
        description: "Official dairy standards ke liye ek comprehensive guide.",
        backToTopics: "Topics par wapas jaayein",
        topics: {
            general: {
                title: "Milk aur Milk Products ke liye General Standards",
                p1: "General standards milk aur milk products ke liye comprehensive definitions aur consumers ya aage ki processing ke liye pesh kiye jaane wale food items ke sambandh mein dairy terms ke use par guidance provide karta hai.",
                definitions: {
                    title: "Definitions",
                    list: [
                        "<b>Ubalna (Boiling):</b> Milk ko atmospheric pressure (101.325 kPa) par lagatar garam karke 100°C tak ubalne ki process ko refer karta hai. Yeh process pathogenic microorganisms ko destroy karta hai lekin spores ko survive karne deta hai.",
                        "<b>Analogue:</b> Ek product jismein milk se hasil nahi hone wale components (jaise vegetable oils, plant proteins), partial ya complete taur par, kisi bhi milk component ko replace karte hain aur final product organoleptically aur/ya functionally ek milk product jaisa dikhta hai. Inhe clearly label karna zaroori hai.",
                        "<b>Composite Milk Product:</b> Ek product jiska milk, milk products, ya milk constituents final product mein quantity ke mamle mein ek essential part hai (generally >50% by weight). Examples: flavoured milk, milk-based desserts.",
                        "<b>Milk (Doodh):</b> Ek healthy milch animal ke complete milking se hasil normal mammary secretion, bina kisi addition ya extraction ke. Yeh colostrum se free hona chahiye. pH range: 6.6-6.8, specific gravity: 1.027-1.035 at 15°C.",
                        "<b>Milk Product:</b> Milk ki processing se hasil ek product, jismein permitted food additives (emulsifiers, stabilizers, preservatives) aur other ingredients ho sakti hain, jo FSSAI regulations ke anusaar hain.",
                        "<b>Pasteurisation:</b> Milk ka ek microbicidal heat treatment jo pathogenic bacteria ko destroy karta hai:<br>• Low Temperature Long Time (LTLT): 63°C par 30 minutes<br>• High Temperature Short Time (HTST): 72°C par 15 seconds<br>• Higher Heat Shorter Time (HHST): 89°C par 1.0 second<br>Yeh process Alkaline Phosphatase enzyme ko inactivate kar deta hai, jo pasteurization ki success ka indicator hai.",
                        "<b>Recombined Milk:</b> Milk fat (butter, butter oil, cream) aur milk-solids-non-fat (skim milk powder) ke preserved forms ke combination se hasil ek product, potable water ke saath ya bina. Processing temperature: 50-55°C, homogenization pressure: 150-200 bar.",
                        "<b>Reconstituted Milk:</b> Milk ke dried (milk powder) ya concentrated form (evaporated milk) mein potable water milane se hasil ek product. Reconstitution ratio: typically 1:7 to 1:8 (powder:water) for full cream milk powder.",
                        "<b>Sterilisation (Nasbandi):</b> Milk ya milk products ko commercially sterile banane ke liye high temperature par heat ka application:<br>• In-container sterilization: 115-121°C par 15-40 minutes<br>• Continuous sterilization: 140-150°C par 2-6 seconds<br>Yeh process spores including Clostridium botulinum ko bhi destroy karta hai.",
                        "<b>Ultra High Temperature (UHT) Treatment:</b> Milk ko kam se kam 135-150°C par 2-8 seconds ke liye continuous flow mein garam karna aur phir aseptic conditions mein pack karna. Direct heating (steam injection) ya indirect heating (plate/tubular heat exchangers) methods use hote hain. Shelf life: 6-9 months at room temperature without refrigeration."
                    ]
                },
                principles: {
                    title: "General Principles",
                    p1: "Food items ko is tarah se describe ya present kiya jana chahiye ki dairy terms ka correct use ensure ho, consumers ko mislead hone se bachaya ja sake, aur fair trade practices ensure ki ja sakein. Dairy products ko 4°C se niche refrigeration mein store karna chahiye (except UHT aur sterilized products)."
                },
                microbiological: {
                    title: "Microbiological Standards",
                    p1: "FSSAI aur international guidelines ke anusaar microbiological limits:",
                    list: [
                        "<b>Total Plate Count (TPC):</b> Pasteurized milk: <30,000 CFU/ml; Raw milk: <2,00,000 CFU/ml",
                        "<b>Coliform Count:</b> Pasteurized milk: <10 CFU/ml (Satisfactory: <20, Acceptable: 20-10,000, Unsatisfactory: >10,000)",
                        "<b>E. coli:</b> Pasteurized milk mein absent hona chahiye (<10 CFU/ml)",
                        "<b>Staphylococcus aureus:</b> <20 CFU/ml (Satisfactory), <100 CFU/ml (Acceptable), ≥10,000 CFU/ml (Unacceptable)",
                        "<b>Salmonella:</b> 25 ml sample mein absent/not detected",
                        "<b>Listeria monocytogenes:</b> 25 g sample mein absent/not detected",
                        "<b>Yeast and Mold:</b> <50 CFU/ml for pasteurized products"
                    ]
                }
            },
            milk: {
                title: "Milk ke liye Standards",
                description: {
                    title: "Description",
                    list: [
                        "<b>Species Identified Milk:</b> Ek specific animal (cow, buffalo, goat, sheep, camel) se hasil milk.",
                        "<b>Mixed Milk:</b> Species identified milk ka koi bhi combination.",
                        "<b>Standardized Milk:</b> Specific fat (4.5%) aur solids-not-fat percentage (8.5%) ke liye standardized milk.",
                        "<b>Low Lactose ya Lactose Free Milk:</b> Milk jismein lactose ki quantity hydrolysis ke through kaafi kam kar di gayi hai."
                    ]
                },
                composition: {
                    title: "Compositional Requirements (Minimum)",
                    headers: ["Milk ka Class", "Minimum Milk Fat (% m/m)", "Minimum SNF (% m/m)"],
                    rows: [
                        ["Bhains ka Milk", "5.0", "9.0"],
                        ["Gaye ka Milk", "3.2", "8.3"],
                        ["Bakri ka Milk", "3.0", "8.0"],
                        ["Bhed ka Milk", "3.0", "9.0"],
                        ["Oont ka Milk", "2.0", "6.0"],
                        ["Mixed Milk", "4.5", "8.5"],
                        ["Standardized Milk", "4.5", "8.5"],
                        ["Toned Milk", "3.0", "8.5"],
                        ["Double Toned Milk", "1.3", "9.0"],
                        ["Skimmed Milk", "0.5 se zyada nahi", "8.7"],
                        ["Full Cream Milk", "6.0", "9.0"]
                    ]
                },
                additives: {
                    title: "Food Additives aur Contaminants",
                    p1: "Milk mein koi food additives nahi hona chahiye, except sterilised milk mein specific additives ke (sodium citrate, sodium bicarbonate as stabilizers - max 2000 mg/kg).",
                    contaminants: "Heavy metals limits: Lead <0.02 mg/kg, Arsenic <0.1 mg/kg, Mercury <0.01 mg/kg. Antibiotic residues (penicillin, tetracycline, streptomycin) detection limit se niche hone chahiye."
                },
                hygiene: {
                    title: "Hygiene (Swachhata) aur Quality Parameters",
                    p1: "Products ko prescribed hygiene standards ke anusaar prepare aur handle kiya jana chahiye:",
                    list: [
                        "<b>Somatic Cell Count (SCC):</b> Buffalo milk: <4,00,000 cells/ml; Cow milk: <4,00,000 cells/ml (indicator of udder health/mastitis)",
                        "<b>Freezing Point:</b> -0.512°C to -0.550°C (adultered milk ka freezing point higher hota hai)",
                        "<b>Acidity:</b> Fresh milk: 0.13-0.14% lactic acid; Sour milk: >0.18%",
                        "<b>Alcohol Test:</b> 68% alcohol test positive nahi hona chahiye (indicates stability)",
                        "<b>Methylene Blue Reduction Test (MBRT):</b> Good quality milk: >5 hours; Poor quality: <2 hours"
                    ]
                },
                labeling: {
                    title: "Labelling Requirements",
                    p1: "Milk ka class (Buffalo/Cow/Toned etc.) aur heat treatment (Raw/Pasteurized/Boiled/Sterilized/UHT) label par declare kiya jana chahiye. Manufacturing date, expiry date, storage temperature (4°C or below), aur batch number mandatory hain."
                }
            },
            flavouredMilk: {
                title: "Flavoured Milk ke liye Standards",
                description: {
                    title: "Description",
                    p1: "Flavoured Milk milk ya milk se derive hone wale products se prepare kiya gaya product hai, jismein edible flavourings (chocolate, vanilla, strawberry, mango, coffee) milaye jaate hain, sugar, nutritive sweeteners, stabilizers aur food colours ke saath ya bina. Flavoured milk ko heat treatment ke adheen kiya jayega."
                },
                composition: {
                    title: "Composition",
                    p1: "Flavoured Milk mein milk fat aur milk ke solids-not-fat ka minimum percentage wahi hoga jo us milk ka hai jisse ise prepare kiya gaya hai."
                }
            },
            evaporatedMilk: {
                title: "Evaporated ya Concentrated Milk ke liye Standards",
                description: {
                    title: "Description",
                    p1: "Evaporated Milk heat ya kisi aur process dwara milk se pani ko approximately 60% partially remove karke hasil kiya gaya product hai. Fat aur protein content ko adjust kiya ja sakta hai."
                },
                composition: {
                    title: "Composition",
                    headers: ["Parameter", "Evaporated Milk", "Evaporated Partially Skimmed Milk", "Evaporated Skimmed Milk", "Evaporated High Fat Milk"],
                    rows: [
                        ["Milk Fat, %, (m/m)", "7.5 (minimum)", "1.0 se zyada aur 7.5 se kam", "1.0 (maximum)", "15.0 (minimum)"],
                        ["Milk Solids, min, %, (m/m)", "25.0", "20.0", "20.0", "26.5"],
                        ["Milk Protein in SNF, min, %, (m/m)", "34.0", "34.0", "34.0", "34.0"]
                    ]
                }
            },
            sweetenedCondensedMilk: {
                title: "Sweetened Condensed Milk ke liye Standards",
                description: {
                    title: "Description",
                    p1: "Sweetened Condensed Milk pani ko approximately 60% partially remove karke aur sugar (40-45%) milake hasil kiya gaya product hai. Fat ya protein content ko adjust kiya ja sakta hai."
                },
                composition: {
                    title: "Composition",
                    headers: ["Parameter", "Sweetened Condensed Milk", "Sweetened Condensed Partially Skimmed", "Sweetened Condensed Skimmed", "Sweetened Condensed High Fat"],
                    rows: [
                        ["Milk Fat, %, (m/m)", "8.0 (minimum)", "1.0 se zyada aur 8.0 se kam", "1.0 (maximum)", "16.0 (minimum)"],
                        ["Milk Solids, min, %, (m/m)", "28.0", "24.0", "24.0", "--"],
                        ["Milk SNF, min, %, (m/m)", "--", "20.0", "--", "14.0"],
                        ["Milk Protein in SNF, min, %", "34.0", "34.0", "34.0", "34.0"]
                    ]
                }
            },
            khoa: {
                title: "Khoa ke liye Standards",
                description: { 
                    title: "Description", 
                    p1: "Khoa ya Mawa milk se pani ko approximately 70-75% partially remove karke hasil kiya gaya product hai." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Requirement"],
                    rows: [
                        ["Total Solids, min, %, (m/m)", "55.0"],
                        ["Milk Fat, min, %, dry matter basis", "30.0 (27.0 from May 1, 2025)"],
                        ["Total Ash, max, %, (m/m)", "6.0"],
                        ["Titrable Acidity (lactic acid), max, %", "0.9"]
                    ]
                }
            },
            cream: {
                title: "Cream aur Malai ke liye Standards",
                description: {
                    title: "Description",
                    list: [
                        "<b>Cream:</b> Milk se physical separation (centrifugation) dwara hasil fat-rich liquid product.",
                        "<b>Malai:</b> Milk ko heat (80-85°C) karke aur phir cool karke tayyar kiya gaya ek fat-rich product."
                    ]
                },
                composition: {
                    title: "Compositional Specifications",
                    p1: "Product mein kam se kam 10.0% (m/m) milk fat hona chahiye."
                },
                labeling: {
                    title: "Labelling",
                    p1: "Fat ki quantity ka mention kiya jana chahiye (jaise, 'Low-fat cream', 'Medium-fat cream', 'High-fat cream')."
                }
            },
            fatProducts: {
                title: "Milk Fat Products ke liye Standards",
                description: { 
                    title: "Description", 
                    p1: "Fat-rich products jo exclusively milk se hasil kiye jaate hain." 
                },
                composition: {
                    title: "Compositional Requirements",
                    headers: ["Parameter", "Milk Fat, Butter Oil", "Anhydrous Milk Fat", "Ghee"],
                    rows: [
                        ["Moisture, max, % (m/m)", "0.4", "0.1", "0.5"],
                        ["Milk Fat, min, % (m/m)", "99.6", "99.8", "99.5"],
                        ["Butyro-refractometer Reading at 40°C", "40.0-44.0", "40.0-44.0", "40.0-44.0"],
                        ["Reichert Meissl Value, min", "24.0", "24.0", "24.0"],
                        ["FFA as Oleic Acid, max %", "0.4", "0.3", "2.0"]
                    ]
                }
            },
            butter: {
                title: "Butter (Makhan) ke liye Standards",
                definition: { 
                    title: "Definition", 
                    p1: "Butter ek fatty product hai, jo principally water-in-oil emulsion ke form mein hota hai."
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Table Butter", "White Butter/Cooking Butter"],
                    rows: [
                        ["Moisture, max, % (m/m)", "16.0", "-"],
                        ["Milk Fat, min, % (m/m)", "80.0", "76.0"],
                        ["Milk SNF, max, % (m/m)", "2.0", "-"],
                        ["Common Salt, max, % (m/m)", "3.0", "-"]
                    ]
                },
                note: "Agar butter ko bina kisi indication ke becha jata hai ki yeh table butter hai ya white butter, to table butter ke standards apply honge."
            },
            milkPowders: {
                title: "Milk Powder aur Cream Powder ke liye Standards",
                description: { 
                    title: "Description", 
                    p1: "Milk ya cream se pani ko spray drying ya roller drying methods dwara approximately 95-97% partially remove karke hasil kiye gaye products." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Whole Milk Powder", "Partially Skimmed Milk Powder", "Skimmed Milk Powder", "Cream Powder"],
                    rows: [
                        ["Moisture*, max, % (m/m)", "5.0", "5.0", "5.0", "5.0"],
                        ["Milk Fat, % (m/m)", "Min 26.0", ">1.5 and <26.0", "1.5 (max)", "42.0 (min)"],
                        ["Milk Protein in SNF, min, %", "34.0", "34.0", "34.0", "34.0"],
                        ["Insolubility Index, max, ml", "2.0", "2.0", "2.0", "-"]
                    ]
                },
                note: "*Moisture content mein lactose ka crystallization water include nahi hai."
            },
            fermented: {
                title: "Fermented Milk Products ke liye Standards",
                description: {
                    title: "Description",
                    list: [
                        "<b>Fermented Milk (Dahi/Yoghurt):</b> Microorganisms dwara milk ke fermentation se hasil hota hai. Ismein Dahi aur Yoghurt shamil hain.",
                        "<b>Chakka:</b> Dahi ya Yoghurt se whey partial removal karke hasil fermented aur concentrated milk product.",
                        "<b>Shrikhand:</b> Chakka se hasil ek product, jismein milk fat aur sugar (30-40%) milaye jaate hain."
                    ]
                },
                yoghurt: {
                    title: "Compositional Specifications (Yoghurt aur Dahi)",
                    headers: ["Parameter", "Yoghurt/Dahi", "Partially Skimmed Yoghurt", "Skimmed Yoghurt"],
                    rows: [
                        ["Milk Fat, % (m/m)", "3.0-15.0", "0.5-3.0", "0.5 (max)"],
                        ["Milk SNF, min, % (m/m)", "8.5", "8.5", "8.5"]
                    ]
                },
                chakka: {
                    title: "Compositional Specifications (Chakka)",
                    headers: ["Parameter", "Chakka", "Skimmed Milk Chakka", "Full Cream Chakka"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "30.0", "20.0", "28.0"],
                        ["Milk Fat, %, dry basis", "33.0 (min)", "5.0 (max)", "38.0 (min)"]
                    ]
                }
            },
            iceCream: {
                title: "Ice Cream, Kulfi, etc. ke liye Standards",
                description: { 
                    title: "Description", 
                    p1: "Pasteurized mix ko freeze karke hasil kiye gaye frozen milk products." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Ice Cream/Kulfi", "Medium Fat Ice Cream", "Low Fat Ice Cream"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "36.0", "30.0", "26.0"],
                        ["Weight, min, g/l", "525.0", "475.0", "475.0"],
                        ["Milk Fat, % (m/m)", "10.0 (min)", "2.5-10.0", "2.5 (max)"],
                        ["Milk Protein, min, % (m/m)", "3.5", "3.5", "3.0"]
                    ]
                },
                milkIce: {
                    title: "Milk Ice ya Milk Lolly",
                    headers: ["Parameter", "Requirement"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "20.0"],
                        ["Milk Fat, max, % (m/m)", "2.0"],
                        ["Milk Protein, min, % (m/m)", "3.5"]
                    ]
                },
                note: "Agar coating ya layer non-dairy ingredients se bani hai, to sirf ice cream portion ko composition ka palan karna hoga."
            },
            frozenDessert: {
                title: "Frozen Dessert ya Confection ke liye Standards",
                description: { 
                    title: "Description", 
                    p1: "Edible vegetable oils ya fats, ya vegetable protein products ke saath prepare kiye gaye pasteurised mix ko freeze karke hasil kiya gaya product." 
                },
                composition: {
                    title: "Composition",
                    p1: "Frozen dessert ke liye standards ice cream ke samaan hain, except fat ka source vegetable hai."
                }
            },
            chhanaPaneer: {
                title: "Chhana aur Paneer ke liye Standards",
                definition: { 
                    title: "Definition", 
                    p1: "Chhana ya Paneer milk se permitted acidulants aur heat (80-90°C) ke saath acid-heat coagulation dwara hasil product hai." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Chhana/Paneer", "Medium Fat Chhana/Paneer", "Low Fat Chhana/Paneer"],
                    rows: [
                        ["Moisture, max, % (m/m)", "65.0 (Chhana) / 60.0 (Paneer)", "65.0 (Chhana) / 60.0 (Paneer)", "70.0 (Chhana) / 70.0 (Paneer)"],
                        ["Milk Fat, %, dry matter basis", "50.0 (min)", ">20.0 and <50.0", "20.0 (max)"]
                    ]
                },
                labeling: {
                    title: "Labelling",
                    p1: "Product ka naam 'Chhana', 'Paneer', 'Low Fat Chhana', etc. hona chahiye, jo composition par depend karta hai."
                }
            },
            cheese: {
                title: "Cheese aur Cheese Products ke liye Standards",
                description: {
                    title: "Description",
                    list: [
                        "<b>Cheese:</b> Milk protein ke enzymatic coagulation se hasil ek ripened ya unripened product.",
                        "<b>Processed Cheese:</b> Ek ya ek se zyada types ke cheese ko grind, mix, melt (80-95°C) aur emulsify karke hasil kiya jaata hai."
                    ]
                },
                composition: {
                    title: "Compositional Requirements (Examples)",
                    headers: ["Product", "Moisture, Max, % (m/m)", "Milk Fat, Min, % (dry basis)"],
                    rows: [
                        ["Hard-Pressed Cheese", "39.0", "48.0"],
                        ["Cheddar Cheese", "39.0", "48.0"],
                        ["Mozzarella Cheese", "60.0", "35.0"],
                        ["Processed Cheese", "47.0", "40.0"]
                    ]
                },
                labeling: {
                    title: "Labelling",
                    p1: "Product ka naam 'cheese', 'whey cheese' ya 'cheese in brine' hona chahiye. Outer packing remove karne ke instructions hone chahiye."
                }
            },
            casein: {
                title: "Edible Casein Products ke liye Standards",
                description: {
                    title: "Description",
                    list: [
                        "<b>Edible Acid Casein:</b> Skimmed milk ke acid se precipitated coagulum ko separate, wash aur dry karke hasil product.",
                        "<b>Edible Rennet Casein:</b> Rennet dwara coagulated skimmed milk se whey separate karne ke baad bache coagulum ko wash aur dry karne ke baad hasil product."
                    ]
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Edible Acid Casein", "Edible Rennet Casein"],
                    rows: [
                        ["Moisture, max, % (m/m)", "12.0", "12.0"],
                        ["Milk Fat, max, % (m/m)", "2.0", "2.0"],
                        ["Milk Protein, min, %, dry basis", "90.0", "84.0"],
                        ["Lactose, max, % (m/m)", "1.0", "1.0"]
                    ]
                },
                note: "Casein in protein minimum 95% hona chahiye."
            },
            lactose: {
                title: "Edible Lactose ke liye Standards",
                description: { 
                    title: "Description", 
                    p1: "Lactose ek white se light yellow crystalline, halka sweet disaccharide sugar hai jo milk mein paya jaata hai." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameters", "Limits"],
                    rows: [
                        ["Total Moisture, max, % (m/m)", "6.0"],
                        ["Lactose, min, % (m/m) dry basis", "99.0"],
                        ["Sulphated Ash, max, % (m/m)", "0.3"]
                    ]
                }
            },
            wheyProtein: {
                title: "Whey Protein Concentrate",
                description: { 
                    title: "Description", 
                    p1: "Whey se non-protein constituents remove karke hasil kiya gaya ek product." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameters", "Limits"],
                    rows: [
                        ["Moisture, max, % (m/m)", "6.0"],
                        ["Milk Protein, min, %, (m/m)", "35.0"],
                        ["Milk Fat, max, %, (m/m)", "10"],
                        ["Scorched Particles, max", "Disc B (15 mg)"]
                    ]
                },
                note: "Protein content total nitrogen ko 6.38 se multiply karke determine ki jaati hai."
            },
            colostrum: {
                title: "Gaye ya Bhains ke Colostrum aur Colostrum Products ke liye Standards",
                description: {
                    title: "Description",
                    list: [
                        "<b>Colostrum:</b> Prasav ke baad teen se paanch din tak hasil mammary secretion.",
                        "<b>Colostrum Powder:</b> Colostrum ko dry karke hasil kiya gaya product."
                    ]
                },
                compositionColostrum: {
                    title: "Compositional Specifications (Colostrum)",
                    headers: ["Parameters", "Requirements"],
                    rows: [
                        ["Protein, min, % (m/m)", "7.0"],
                        ["Immunoglobulins-G (IgG), min, % (m/m)", "1.8"]
                    ]
                },
                compositionPowder: {
                    title: "Compositional Specifications (Colostrum Powder)",
                    headers: ["Parameters", "Requirements"],
                    rows: [
                        ["Protein, min, % (m/m)", "40.0"],
                        ["Immunoglobulins-G (IgG), min, % (m/m)", "8.5"]
                    ]
                },
                note: "Protein content total nitrogen ko 6.38 se multiply karke determine ki jaati hai."
            },
            dairyPermeatePowders: {
                title: "Dairy Permeate Powders",
                description: { 
                    title: "Description", 
                    p1: "Dairy permeate powders dried milk products hain jo lactose ki high content ki characteristic hain." 
                },
                composition: {
                    title: "Composition",
                    p1: "Lactose minimum 76%."
                }
            }
        }
    },
    en: {
        mainTitle: "FSSAI Standards for Dairy Products",
        description: "A comprehensive guide to official dairy standards.",
        backToTopics: "Back to Topics",
        topics: {
            general: {
                title: "General Standards for Milk and Milk Products",
                p1: "The General standard provides comprehensive definitions for milk and milk products and guidance on the use of dairy terms in relation to foods offered to consumers or for further processing.",
                definitions: {
                    title: "Definitions",
                    list: [
                        "<b>Boiling:</b> Refers to the process of constantly heating milk to boiling point at atmospheric pressure (101.325 kPa) until it reaches 100°C. This process destroys pathogenic microorganisms but allows spores to survive.",
                        "<b>Analogue:</b> A product in which components not derived from milk (such as vegetable oils, plant proteins), either partially or completely, replace any milk component and the final product resembles organoleptically and/or functionally a milk product. These must be clearly labeled.",
                        "<b>Composite Milk Product:</b> A product in which milk, milk products, or milk constituents are an essential part in terms of quantity in the final product (generally >50% by weight). Examples include flavoured milk and milk-based desserts.",
                        "<b>Milk:</b> The normal mammary secretion derived from complete milking of a healthy milch animal, without any addition or extraction. It shall be free from colostrum. pH range: 6.6-6.8, specific gravity: 1.027-1.035 at 15°C.",
                        "<b>Milk Product:</b> A product obtained by processing of milk, which may contain permitted food additives (emulsifiers, stabilizers, preservatives) and other ingredients in accordance with FSSAI regulations.",
                        "<b>Pasteurisation:</b> A microbicidal heat treatment of milk that destroys pathogenic bacteria:<br>• Low Temperature Long Time (LTLT): 63°C for 30 minutes<br>• High Temperature Short Time (HTST): 72°C for 15 seconds<br>• Higher Heat Shorter Time (HHST): 89°C for 1.0 second<br>This process inactivates the Alkaline Phosphatase enzyme, which serves as an indicator of successful pasteurization.",
                        "<b>Recombined Milk:</b> A product resulting from the combination of preserved forms of milk fat (butter, butter oil, cream) and milk-solids-non-fat (skim milk powder), with or without the addition of potable water. Processing temperature: 50-55°C, homogenization pressure: 150-200 bar.",
                        "<b>Reconstituted Milk:</b> A product resulting from the addition of potable water to dried (milk powder) or concentrated form (evaporated milk) of milk. Reconstitution ratio: typically 1:7 to 1:8 (powder:water) for full cream milk powder.",
                        "<b>Sterilisation:</b> The application of heat to milk or milk products at high temperatures to render them commercially sterile:<br>• In-container sterilization: 115-121°C for 15-40 minutes<br>• Continuous sterilization: 140-150°C for 2-6 seconds<br>This process also destroys spores including Clostridium botulinum.",
                        "<b>Ultra High Temperature (UHT) Treatment:</b> Heating milk in a continuous flow to a temperature of not less than 135-150°C for 2-8 seconds and then packing in aseptic conditions. Methods include direct heating (steam injection) or indirect heating (plate/tubular heat exchangers). Shelf life: 6-9 months at room temperature without refrigeration."
                    ]
                },
                principles: {
                    title: "General Principles",
                    p1: "Foods shall be described or presented in such a manner as to ensure the correct use of dairy terms, to protect consumers from being misled, and to ensure fair trade practices. Dairy products should be stored under refrigeration below 4°C (except UHT and sterilized products)."
                },
                microbiological: {
                    title: "Microbiological Standards",
                    p1: "Microbiological limits as per FSSAI and international guidelines:",
                    list: [
                        "<b>Total Plate Count (TPC):</b> Pasteurized milk: <30,000 CFU/ml; Raw milk: <2,00,000 CFU/ml",
                        "<b>Coliform Count:</b> Pasteurized milk: <10 CFU/ml (Satisfactory: <20, Acceptable: 20-10,000, Unsatisfactory: >10,000)",
                        "<b>E. coli:</b> Should be absent in pasteurized milk (<10 CFU/ml)",
                        "<b>Staphylococcus aureus:</b> <20 CFU/ml (Satisfactory), <100 CFU/ml (Acceptable), ≥10,000 CFU/ml (Unacceptable)",
                        "<b>Salmonella:</b> Absent/not detected in 25 ml sample",
                        "<b>Listeria monocytogenes:</b> Absent/not detected in 25 g sample",
                        "<b>Yeast and Mold:</b> <50 CFU/ml for pasteurized products"
                    ]
                }
            },
            milk: {
                title: "Standard for Milk",
                description: {
                    title: "Description",
                    list: [
                        "<b>Species identified milk:</b> Milk obtained from a specific animal (cow, buffalo, goat, sheep, camel).",
                        "<b>Mixed Milk:</b> Any combination of species identified milk.",
                        "<b>Standardized milk:</b> Milk standardized to a specific fat (4.5%) and solids-not-fat percentage (8.5%).",
                        "<b>Low Lactose or Lactose free milk:</b> Milk in which the lactose content has been substantially reduced through hydrolysis."
                    ]
                },
                composition: {
                    title: "Compositional Requirements (Minimum)",
                    headers: ["Class of Milk", "Minimum Milk Fat (% m/m)", "Minimum Milk SNF (% m/m)"],
                    rows: [
                        ["Buffalo Milk", "5.0", "9.0"],
                        ["Cow Milk", "3.2", "8.3"],
                        ["Goat Milk", "3.0", "8.0"],
                        ["Sheep Milk", "3.0", "9.0"],
                        ["Camel Milk", "2.0", "6.0"],
                        ["Mixed Milk", "4.5", "8.5"],
                        ["Standardized Milk", "4.5", "8.5"],
                        ["Toned Milk", "3.0", "8.5"],
                        ["Double Toned Milk", "1.3", "9.0"],
                        ["Skimmed Milk", "Not more than 0.5", "8.7"],
                        ["Full Cream Milk", "6.0", "9.0"]
                    ]
                },
                additives: {
                    title: "Food Additives and Contaminants",
                    p1: "Milk shall not contain any food additives, except for specific additives in sterilised milk (sodium citrate, sodium bicarbonate as stabilizers - maximum 2000 mg/kg).",
                    contaminants: "Heavy metals limits: Lead <0.02 mg/kg, Arsenic <0.1 mg/kg, Mercury <0.01 mg/kg. Antibiotic residues (penicillin, tetracycline, streptomycin) should be below detection limits."
                },
                hygiene: {
                    title: "Hygiene and Quality Parameters",
                    p1: "Products shall be prepared and handled in accordance with prescribed hygiene standards:",
                    list: [
                        "<b>Somatic Cell Count (SCC):</b> Buffalo milk: <4,00,000 cells/ml; Cow milk: <4,00,000 cells/ml (indicator of udder health/mastitis)",
                        "<b>Freezing Point:</b> -0.512°C to -0.550°C (adulterated milk has a higher freezing point)",
                        "<b>Acidity:</b> Fresh milk: 0.13-0.14% lactic acid; Sour milk: >0.18%",
                        "<b>Alcohol Test:</b> 68% alcohol test should not be positive (indicates stability)",
                        "<b>Methylene Blue Reduction Test (MBRT):</b> Good quality milk: >5 hours; Poor quality: <2 hours"
                    ]
                },
                labeling: {
                    title: "Labelling Requirements",
                    p1: "The class of milk (Buffalo/Cow/Toned etc.) and heat treatment (Raw/Pasteurized/Boiled/Sterilized/UHT) must be declared on the label. Manufacturing date, expiry date, storage temperature (4°C or below), and batch number are mandatory."
                }
            },
            flavouredMilk: {
                title: "Standard for Flavoured Milk",
                description: {
                    title: "Description",
                    p1: "Flavoured Milk means the product prepared from milk or other products derived from milk, and edible flavourings (chocolate, vanilla, strawberry, mango, coffee) with or without addition of sugar, nutritive sweeteners, stabilisers and food colours. Flavoured milk shall be subjected to heat treatment."
                },
                composition: {
                    title: "Composition",
                    p1: "Flavoured Milk shall have the same minimum percentage of milk fat and milk solids-not-fat as that of the milk from which it is prepared."
                }
            },
            evaporatedMilk: {
                title: "Standard for Evaporated or Concentrated Milk",
                description: {
                    title: "Description",
                    p1: "Evaporated Milk means the product obtained by partial removal (approximately 60%) of water from milk by heat or any other process. The fat and protein content may be adjusted."
                },
                composition: {
                    title: "Composition",
                    headers: ["Parameter", "Evaporated milk", "Evaporated partly skimmed milk", "Evaporated skimmed milk", "Evaporated high fat milk"],
                    rows: [
                        ["Milk fat, %, (m/m)", "7.5 (minimum)", "More than 1.0 and Less than 7.5", "1.0 (maximum)", "15.0 (minimum)"],
                        ["Milk solids, minimum, %, (m/m)", "25.0", "20.0", "20.0", "26.5"],
                        ["Milk protein in SNF, minimum, %, (m/m)", "34.0", "34.0", "34.0", "34.0"]
                    ]
                }
            },
            sweetenedCondensedMilk: {
                title: "Standard for Sweetened Condensed Milk",
                description: {
                    title: "Description",
                    p1: "Sweetened Condensed Milk is the product obtained by partial removal (approximately 60%) of water from milk with the addition of sugar (40-45%). The fat or protein content may be adjusted."
                },
                composition: {
                    title: "Composition",
                    headers: ["Parameter", "Sweetened condensed milk", "Sweetened condensed partly skimmed", "Sweetened condensed skimmed", "Sweetened condensed high fat"],
                    rows: [
                        ["Milk fat, %, (m/m)", "8.0 (minimum)", "More than 1.0 and less than 8.0", "1.0 (maximum)", "16.0 (minimum)"],
                        ["Milk solids, minimum, %, (m/m)", "28.0", "24.0", "24.0", "--"],
                        ["Milk solid not fat, minimum, %, (m/m)", "--", "20.0", "--", "14.0"],
                        ["Milk protein in SNF, minimum, %, (m/m)", "34.0", "34.0", "34.0", "34.0"]
                    ]
                }
            },
            khoa: {
                title: "Standard for Khoa",
                description: { 
                    title: "Description", 
                    p1: "Khoa or Mawa is a product obtained by partial removal (approximately 70-75%) of water from milk."
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Requirement"],
                    rows: [
                        ["Total solids, minimum, %, (m/m)", "55.0"],
                        ["Milk fat, minimum, %, (m/m), dry matter basis", "30.0 (27.0 from May 1, 2025)"],
                        ["Total ash, maximum, %, (m/m)", "6.0"],
                        ["Titrable acidity (as % lactic acid), maximum, %", "0.9"]
                    ]
                }
            },
            cream: {
                title: "Standard for Cream and Malai",
                description: {
                    title: "Description",
                    list: [
                        "<b>Cream:</b> A fat-rich liquid product obtained by physical separation (centrifugation) from milk.",
                        "<b>Malai:</b> A fat-rich product prepared by heating (80-85°C) and then cooling milk."
                    ]
                },
                composition: {
                    title: "Compositional Specifications",
                    p1: "The product shall contain not less than 10.0% (m/m) of milk fat."
                },
                labeling: {
                    title: "Labelling",
                    p1: "The fat content shall be mentioned (e.g., 'Low-fat cream,' 'Medium-fat cream,' 'High-fat cream')."
                }
            },
            fatProducts: {
                title: "Standard for Milk Fat Products",
                description: { 
                    title: "Description", 
                    p1: "Fat-rich products derived exclusively from milk." 
                },
                composition: {
                    title: "Compositional Requirements",
                    headers: ["Parameter", "Milk Fat, Butter Oil", "Anhydrous Milk Fat, Anhydrous Butter Oil", "Ghee"],
                    rows: [
                        ["Moisture, max, % (m/m)", "0.4", "0.1", "0.5"],
                        ["Milk fat, min, % (m/m)", "99.6", "99.8", "99.5"],
                        ["Butyro-refractometer Reading at 40°C", "40.0 to 44.0", "40.0 to 44.0", "40.0 to 44.0"],
                        ["Reichert Meissl Value, min", "24.0", "24.0", "24.0"],
                        ["FFA as Oleic Acid, max %", "0.4", "0.3", "2.0"]
                    ]
                }
            },
            butter: {
                title: "Standard for Butter",
                definition: { 
                    title: "Definition", 
                    p1: "Butter is a fatty product, principally in the form of a water-in-oil emulsion."
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Table butter", "White butter/ Cooking butter"],
                    rows: [
                        ["Moisture, max, % (m/m)", "16.0", "-"],
                        ["Milk fat, min, % (m/m)", "80.0", "76.0"],
                        ["Milk solids-not-fat, max, % (m/m)", "2.0", "-"],
                        ["Common salt, max, % (m/m)", "3.0", "-"]
                    ]
                },
                note: "If butter is sold without any indication as to whether it is table butter or white butter, the standards of table butter shall apply."
            },
            milkPowders: {
                title: "Standard for Milk Powders and Cream Powder",
                description: { 
                    title: "Description", 
                    p1: "Milk products obtained by partial removal (approximately 95-97%) of water from milk or cream through spray drying or roller drying methods."
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Whole Milk Powder", "Partly Skimmed Milk Powder", "Skimmed Milk Powder", "Cream Powder"],
                    rows: [
                        ["Moisture*, max, % (m/m)", "5.0", "5.0", "5.0", "5.0"],
                        ["Milk fat, % (m/m)", "Min 26.0", ">1.5 and <26.0", "1.5 (max)", "42.0 (min)"],
                        ["Milk protein in SNF, min, %, (m/m)", "34.0", "34.0", "34.0", "34.0"],
                        ["Insolubility Index, max, ml", "2.0", "2.0", "2.0", "-"]
                    ]
                },
                note: "*The moisture content does not include water of crystallization of the lactose."
            },
            fermented: {
                title: "Standard for Fermented Milk Products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Fermented Milk:</b> Obtained by fermentation of milk by microorganisms. Includes Dahi and Yoghurt.",
                        "<b>Chakka:</b> Fermented and concentrated milk product obtained from Dahi or Yoghurt by partial removal of whey.",
                        "<b>Shrikhand:</b> Product obtained from chakka, with added milk fat and sugar (30-40%)."
                    ]
                },
                yoghurt: {
                    title: "Compositional Specifications (Yoghurt and Dahi)",
                    headers: ["Parameter", "Yoghurt and Dahi", "Partly skimmed Yoghurt", "Skimmed Yoghurt"],
                    rows: [
                        ["Milk Fat, % (m/m)", "3.0 to 15.0", "0.5 to 3.0", "0.5 (max)"],
                        ["Milk solids-not-fat, min, % (m/m)", "8.5", "8.5", "8.5"]
                    ]
                },
                chakka: {
                    title: "Compositional Specifications (Chakka)",
                    headers: ["Parameter", "Chakka", "Skimmed Milk Chakka", "Full Cream Chakka"],
                    rows: [
                        ["Total solids, min, % (m/m)", "30.0", "20.0", "28.0"],
                        ["Milk fat, % (m/m), on dry basis", "33.0 (min)", "5.0 (max)", "38.0 (min)"]
                    ]
                }
            },
            iceCream: {
                title: "Standard for Ice Cream, Kulfi, etc.",
                description: { 
                    title: "Description", 
                    p1: "Frozen milk products obtained by freezing a pasteurized mix."
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Ice cream or Kulfi", "Medium Fat Ice Cream", "Low Fat Ice Cream"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "36.0", "30.0", "26.0"],
                        ["Weight, min, g/l", "525.0", "475.0", "475.0"],
                        ["Milk Fat, % (m/m)", "10.0 (min)", "2.5 to 10.0", "2.5 (max)"],
                        ["Milk Protein, min, % (m/m)", "3.5", "3.5", "3.0"]
                    ]
                },
                milkIce: {
                    title: "Milk Ice or Milk Lolly",
                    headers: ["Parameter", "Requirement"],
                    rows: [
                        ["Total Solids, min, % (m/m)", "20.0"],
                        ["Milk Fat, max, % (m/m)", "2.0"],
                        ["Milk Protein, min, % (m/m)", "3.5"]
                    ]
                },
                note: "If a coating or layer is made of non-dairy ingredients, only the ice cream portion must conform to the composition."
            },
            frozenDessert: {
                title: "Standard for Frozen Desserts or Confections",
                description: { 
                    title: "Description", 
                    p1: "Product obtained by freezing a pasteurized mix prepared with edible vegetable oils or fats, or vegetable protein products, or both." 
                },
                composition: {
                    title: "Composition",
                    p1: "Standards for frozen desserts are similar to ice cream, except the source of fat is vegetable."
                }
            },
            chhanaPaneer: {
                title: "Standard for Chhana and Paneer",
                definition: { 
                    title: "Definition", 
                    p1: "Chhana or Paneer means the product obtained from milk by precipitation with permitted acidulants and heat (80-90°C) through acid-heat coagulation." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Chhana or Paneer", "Medium fat Chhana or Paneer", "Low fat Chhana or Paneer"],
                    rows: [
                        ["Moisture, max, % (m/m)", "65.0 (Chhana) / 60.0 (Paneer)", "65.0 (Chhana) / 60.0 (Paneer)", "70.0 (Chhana) / 70.0 (Paneer)"],
                        ["Milk fat, % (m/m), dry matter basis", "50.0 (min)", ">20.0 and <50.0", "20.0 (max)"]
                    ]
                },
                labeling: {
                    title: "Labelling",
                    p1: "The name of the product shall be 'Chhana', 'Paneer', 'Low Fat Chhana', etc., depending upon the composition."
                }
            },
            cheese: {
                title: "Standard for Cheese and Cheese Products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Cheese:</b> A ripened or unripened product obtained by enzymatic coagulation of milk protein.",
                        "<b>Processed Cheese:</b> Obtained by grinding, mixing, melting (80-95°C) and emulsifying one or more varieties of cheese."
                    ]
                },
                composition: {
                    title: "Compositional Requirements (Examples)",
                    headers: ["Product", "Moisture, Max, % (m/m)", "Milk fat, Min, % (on dry basis)"],
                    rows: [
                        ["Hard-Pressed Cheese", "39.0", "48.0"],
                        ["Cheddar Cheese", "39.0", "48.0"],
                        ["Mozzarella Cheese", "60.0", "35.0"],
                        ["Processed Cheese", "47.0", "40.0"]
                    ]
                },
                labeling: {
                    title: "Labelling",
                    p1: "The name of the product shall be 'cheese', 'whey cheese' or 'cheese in brine'. Must bear instructions to remove outer packing."
                }
            },
            casein: {
                title: "Standard for Edible Casein Products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Edible Acid Casein:</b> Product obtained by separating, washing and drying the acid precipitated coagulum of skimmed milk.",
                        "<b>Edible Rennet Casein:</b> Product obtained after washing and drying the coagulum remaining after separating the whey from skimmed milk coagulated by rennet."
                    ]
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameter", "Edible Acid Casein", "Edible Rennet Casein"],
                    rows: [
                        ["Moisture, max, % (m/m)", "12.0", "12.0"],
                        ["Milk fat, max, % (m/m)", "2.0", "2.0"],
                        ["Milk protein, min, % (m/m), on dry basis", "90.0", "84.0"],
                        ["Lactose, max, % (m/m)", "1.0", "1.0"]
                    ]
                },
                note: "Casein in protein must be minimum 95%."
            },
            lactose: {
                title: "Standard for Edible Lactose",
                description: { 
                    title: "Description", 
                    p1: "Lactose is a white to light yellow crystalline, slightly sweet disaccharide sugar found in milk." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameters", "Limits"],
                    rows: [
                        ["Total moisture, max, % (m/m)", "6.0"],
                        ["Lactose, min, % (m/m) on dry basis", "99.0"],
                        ["Sulphated ash, max, % (m/m)", "0.3"]
                    ]
                }
            },
            wheyProtein: {
                title: "Whey Protein Concentrate",
                description: { 
                    title: "Description", 
                    p1: "A product obtained by removing non-protein constituents from whey." 
                },
                composition: {
                    title: "Compositional Specifications",
                    headers: ["Parameters", "Limits"],
                    rows: [
                        ["Moisture, max, % (m/m)", "6.0"],
                        ["Milk Protein, min, %, (m/m)", "35.0"],
                        ["Milk Fat, max, %, (m/m)", "10"],
                        ["Scorched particles, max", "Disc B (15 mg)"]
                    ]
                },
                note: "Protein content is 6.38 multiplied by the total nitrogen determined."
            },
            colostrum: {
                title: "Standard for Cow or Buffalo Colostrum and Colostrum products",
                description: {
                    title: "Description",
                    list: [
                        "<b>Colostrum:</b> The lacteal secretion from the mammary glands of cow or buffalo obtained three to five days after parturition.",
                        "<b>Colostrum powder:</b> Product obtained by drying colostrum."
                    ]
                },
                compositionColostrum: {
                    title: "Compositional Specifications (Colostrum)",
                    headers: ["Parameters", "Requirements"],
                    rows: [
                        ["Protein, min, % (m/m)", "7.0"],
                        ["Immunoglobulins-G (IgG), min, % (m/m)", "1.8"]
                    ]
                },
                compositionPowder: {
                    title: "Compositional Specifications (Colostrum Powder)",
                    headers: ["Parameters", "Requirements"],
                    rows: [
                        ["Protein, min, % (m/m)", "40.0"],
                        ["Immunoglobulins-G (IgG), min, % (m/m)", "8.5"]
                    ]
                },
                note: "Protein content is 6.38 multiplied by the total nitrogen determined."
            },
            dairyPermeatePowders: {
                title: "Dairy Permeate Powders",
                description: { 
                    title: "Description", 
                    p1: "Dairy permeate powders are dried milk products characterised by a high content of lactose." 
                },
                composition: {
                    title: "Composition",
                    p1: "Lactose minimum 76%."
                }
            }
        }
    }
};
