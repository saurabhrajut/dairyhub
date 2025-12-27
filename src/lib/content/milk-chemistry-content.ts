export const milkChemistryContent = {
    hi: {
        mainTitle: "Advanced Dairy Chemistry & Physics (Doodh ka Vishleshnatmak Rasayan Vigyan)",
        description: "Milk ke molecular structure, thermodynamics, biochemical pathways, kinetics aur industrial processing science ka thesis-level deep analysis.",
        backToTopics: "Back to Topics",
        composition: {
            title: "Composition aur Physico-chemical Phases",
            whatIsMilk: {
                title: "Definition, Structural Complexity aur Colloidal Stability",
                fssaiDef: "<strong>FSSAI Definition (Food Safety and Standards Act, 2006):</strong> “Milk wo normal mammary secretion hai jo healthy milch animal ki complete milking se prapt hota hai. Isme colostrum nahi hona chahiye. Standardized Milk ke liye minimum Fat 4.5% aur SNF 8.5% (Cow) ya Fat 6.0% aur SNF 9.0% (Buffalo) hona anivary hai. Yeh definition ensure karti hai ki consumer ko nutrient-dense product mile. Legally, 'Milk' shabd ka upyog sirf animal origin ke liye kiya ja sakta hai (Plant-based beverages ko 'Milk' kehna varjit hai).”",
                usaDef: "<strong>Global Definition (Codex Alimentarius):</strong> \"Milk ek lacteal secretion hai jo milking ke dwara prapt hota hai. Chemical drishya se, yeh ek polydisperse system hai. Isme paani continuous phase hai aur baki components dispersed phase hain. Iski complexity is baat se samjhi ja sakti hai ki yeh ek hi waqt par Solution, Emulsion aur Suspension teeno states mein exist karta hai, jo DLVO theory ke anusar stable rehte hain.\"",
                p1: "Advance Dairy Chemistry mein hum Milk ko ek simple liquid nahi, balki ek complex **'Colloidal Biological Fluid'** maante hain. Iska microstructure processing (heating, freezing, drying) ke dauran kaise behave karega, yeh in teen phases ke thermodynamic equilibrium par depend karta hai:",
                phases: [
                    "<strong>1. Oil-in-Water Emulsion (The Fat Phase):</strong> Milk Fat (Lipids) paani mein ghulta nahi hai (hydrophobic). Yeh microscopic globules (0.1 - 15 microns) ke roop mein bikhra rehta hai. Har globule ke charo taraf ek bahut hi complex 'Biological Membrane' hoti hai jise **MFGM (Milk Fat Globule Membrane)** kehte hain. Yeh membrane Trilaminar hoti hai aur isme Phospholipids, Glycoproteins, Sphingolipids aur Enzymes (Xanthine Oxidase) hote hain jo fat ko 'Coalescence' (judne) se rokti hai aur Lipase enzyme ke attack se bachati hai. Stokes' Law ke anusar ye globules upar uthte hain.",
                    "<strong>2. Colloidal Suspension (The Casein Micelle):</strong> Casein proteins (Alpha-s1, Alpha-s2, Beta, Kappa) akele molecules ke roop mein exist nahi karte. Yeh hazaron ki sankhya mein judkar bade spherical supramolecular particles banate hain jinhe **'Casein Micelles'** (Size: 50-300 nm) kehte hain. Yeh micelles 'Colloidal Calcium Phosphate (CCP)' nanoclusters ke dwara stabilize hote hain. Kappa-casein micelle ke surface par ek 'Hairy Layer' banata hai jo Steric Repulsion ke dwara micelles ko judne se rokta hai.",
                    "<strong>3. True Solution (The Serum Phase):</strong> Doodh ka continuous phase paani (plasma) hai. Isme Lactose (sugar), Whey Proteins (Alpha-lactalbumin, Beta-lactoglobulin), soluble Minerals (Sodium, Potassium, Chlorides, Citrates), aur Water-soluble Vitamins (B-complex, C) puri tarah se molecular level par ghule hote hain. Yeh phase doodh ke Osmotic Pressure (jo blood ke barabar hota hai), Freezing Point Depression aur Boiling Point Elevation ko govern karta hai."
                ]
            },
            generalComposition: {
                title: "Detailed Chemical Composition (Bovine vs Bubaline)",
                headers: ["Constituent (Ghatak)", "Average % Value", "Range & Variation Factors"],
                rows: [
                    { c1: "Water (Solvent Phase)", v1: "87.0 - 88.0%", c2: "Variation: Feed hydration, ambient temperature aur lactation stage par depend karta hai. Iska dielectric constant salt dissociation ko affect karta hai." },
                    { c1: "Fat (Lipids)", v1: "3.5 - 7.5% (Cow vs Buffalo)", c2: "Variation: Breed, feed (fiber content -> acetate production), aur milking interval se sabse zyada badalta hai. Last strippings mein fat sabse zyada hota hai." },
                    { c1: "Casein Protein", v1: "2.6 - 3.4%", c2: "Significance: Cheese yield aur Curd firmness isi par depend karti hai. Yeh Phosphorus ka main carrier hai." },
                    { c1: "Whey Protein", v1: "0.6 - 0.7%", c2: "Significance: Heat sensitivity aur nutritional value (High BV). Sulphur-containing amino acids ka source." },
                    { c1: "Lactose (Anhydrous)", v1: "4.6 - 4.8%", c2: "Stability: Sabse stable component, lekin Mastitis mein kam ho jata hai kyunki blood-milk barrier leak karta hai." },
                    { c1: "Ash (Minerals)", v1: "0.7 - 0.8%", c2: "Constituents: Ca, P, Mg, K, Na, Cl, Citrate. Yeh buffering capacity decide karte hain." },
                    { c1: "Total Solids (TS)", v1: "12.5 - 16.0%", c2: "Calculation: TS = Fat + SNF. Economics mein doodh ka daam TS par nirdharit hota hai." }
                ]
            },
            speciesDifferences: {
                title: "Comparative Analysis: Species Composition",
                headers: ["Species", "Fat %", "Protein %", "Lactose %", "Ash %", "Key Characteristic & Industrial Use"],
                rows: [
                    { species: "Cow (Bos taurus)", water: "3.5-4.5", fat: "3.2-3.4", sugar: "4.6-4.8", protein: "0.7", ash: "Balanced nutrition. Fat globules bade hote hain, cream separation aasan hai. Yellow color (Carotene) butter ko golden rang deta hai." },
                    { species: "Buffalo (Bubalus bubalis)", water: "6.0-8.5", fat: "4.0-4.5", sugar: "4.8-5.0", protein: "0.8", ash: "White color (No carotene), High Casein/Fat ratio (Best for Mozzarella Cheese aur Paneer yield). Peroxidase activity zyada hoti hai." },
                    { species: "Goat (Capra hircus)", water: "4.0-4.5", fat: "3.5-3.7", sugar: "4.2-4.5", protein: "0.8", ash: "Smaller fat globules (<2 micron), naturally homogenized, 'Agglutinin' protein ki kami se creaming dhire hoti hai. Allergy sufferers ke liye better." },
                    { species: "Human (Homo sapiens)", water: "3.5-3.8", fat: "1.0-1.2", sugar: "6.8-7.0", protein: "0.2", ash: "Very high Lactose for brain development; Low Casein (Soft curd, easy digestion); High Whey protein (Alpha-lactalbumin, Lactoferrin)." },
                    { species: "Camel", water: "3.0-4.0", fat: "3.0-3.5", sugar: "4.0-4.5", protein: "0.7", ash: "Contains Insulin-like protein (Anti-diabetic properties), salty taste due to high Chlorides. Dahi jamana mushkil hota hai." }
                ]
            },
            water: {
                title: "Water Chemistry, Molecular Mobility aur Sorption Isotherms",
                p1: "Doodh mein ~87% paani hota hai, lekin food technology aur drying science mein hum ise sirf 'H2O' nahi maante. Water ki state product ki stability, microbial growth (Water Activity - aw) aur glass transition temperature (Tg) decide karti hai:",
                forms: [
                    { name: "1. Free / Bulk Water (~96% of total water)", desc: "Yeh wo paani hai jo solvent ki tarah kaam karta hai aur Capillary condensation dikhata hai. Isme salts aur sugar ghule hote hain. Microorganisms (Bacteria/Yeast) growth ke liye isi paani ka use karte hain. Evaporation aur Spray Drying ke dauran yahi paani nikalta hai. Iska freezing point 0°C ke paas hota hai aur yeh vapor pressure exert karta hai." },
                    { name: "2. Bound Water / Vicinal Water (~3-4%)", desc: "Yeh paani proteins (charged groups) aur lactose ke saath Hydrogen Bonds aur Van der Waals forces se chipka rehta hai (Monolayer sorption - BET Theory). Yeh chemically 'inert' hota hai. Yeh -40°C par bhi ice nahi banta aur solvents (jaise sugar) ko dissolve nahi kar sakta. High protein products (Greek Yogurt) mein bound water zyada hone se syneresis (paani chhodna) kam hota hai." },
                    { name: "3. Water of Crystallization", desc: "Yeh specific molecules ke crystal lattice ke andar hota hai, jaise Alpha-Lactose Monohydrate. Ise sukhana sabse mushkil hota hai. Agar ise zabardasti nikala jaye (excessive heating), toh lactose ka structure bigad kar 'Amorphous' ho jata hai jo hygroscopic hota hai (Lumping in milk powder)." }
                ]
            }
        },
        mammaryGland: {
            title: "Biosynthesis aur Mammary Physiology",
            structure: {
                title: "Anatomy: The Milk Factory Architecture",
                p1: "Mammary gland (Udder) ek highly specialized exocrine gland hai. Iski functional unit **'Alveolus'** hai. Ek alveolus ke andar 'Secretory Epithelial Cells' ki ek layer hoti hai jo doodh banane ki chemical factory hai. In cells ke do sides hote hain: (1) **Basal Membrane:** Jahan se blood se raw material (Nutrients) andar aata hai. (2) **Apical Membrane:** Jahan se bana hua doodh Lumen mein release hota hai (Exocytosis).",
                p2: "**Blood-Milk Barrier:** Doodh aur khoon kabhi mix nahi hote, ye 'Tight Junctions' dwara alag rehte hain. Doodh banane ke liye, udder ko bahut zyada blood flow ki zaroorat hoti hai. 1 Litre doodh banane ke liye ~500 Litre khoon alveoli ke charo taraf capillaries se guzarta hai. Mastitis mein yeh barrier toot jata hai, jisse khoon ke cells (Somatic cells) aur salts (Chloride/Sodium) doodh mein aa jate hain, aur Lactose/Potassium blood mein leak ho jate hain."
            },
            physiology: {
                title: "Biosynthesis Pathways (Cellular Level)",
                p1: "Milk synthesis hormones (Prolactin, Glucocorticoids, Insulin, Growth Hormone) dwara regulate hota hai. Har component ka alag pathway hai:",
                ejectionTitle: "Mechanism: Glucose to Lactose (Lactose Synthetase Complex)",
                ejectionText: "Blood se Glucose 'GLUT1' transporter ke zariye cell mein aata hai. **Golgi Apparatus** mein ek enzyme system hota hai jise **'Lactose Synthetase'** kehte hain. Yeh do parts se bana hai: (A) Galactosyl Transferase (GT) aur (B) Alpha-Lactalbumin. Normal cells mein GT glycoproteins banata hai, lekin mammary gland mein Alpha-lactalbumin GT ko modify kar deta hai taaki wo Glucose ko accept kare aur use Galactose ke saath jodkar Lactose banaye. Isliye Alpha-lactalbumin ko 'Specifier Protein' kehte hain.",
                precursors: {
                    title: "Metabolic Transformation of Precursors",
                    caption: "Blood components ka Milk components mein transformation:",
                    headers: ["Component", "Blood Precursor", "Synthesis Mechanism"],
                    rows: [
                        { constituent: "Lactose", plasma: "Blood Glucose", milk: "Synthesized in Golgi Apparatus via Lactose Synthetase." },
                        { constituent: "Casein", plasma: "Free Amino Acids", milk: "De-novo synthesis in Rough Endoplasmic Reticulum (RER) -> Golgi Packaging." },
                        { constituent: "Fat (Short Chain C4-C14)", plasma: "Acetate & Beta-Hydroxybutyrate", milk: "De-novo synthesis in Cytoplasm via Fatty Acid Synthase (Ruminants specific)." },
                        { constituent: "Fat (Long Chain C16+)", plasma: "Triglycerides/NEFA (VLDL)", milk: "Direct absorption from blood lipids via Lipoprotein Lipase." },
                        { constituent: "Immunoglobulins", plasma: "Blood Antibodies", milk: "Receptor-mediated Transcytosis (Direct transfer without change)." },
                        { constituent: "Minerals", plasma: "Ionic Salts", milk: "Active transport pumps (ATP dependent) concentrate minerals against gradient." }
                    ]
                }
            }
        },
        proteins: {
            title: "Advanced Protein Chemistry & Proteomics",
            overview: {
                title: "Protein Classification & Primary Structure",
                p1: "Doodh ke proteins ko unki 'Solubility at Isoelectric Point (pH 4.6)' ke aadhar par classify kiya jata hai. Total protein (~3.3%) mein se 80% Casein (Insoluble at pH 4.6) aur 20% Whey Proteins (Soluble at pH 4.6) hote hain. Milk proteins 'Complete Proteins' hain kyunki inmein sabhi 9 Essential Amino Acids paye jate hain. Proteomics study se pata chala hai ki milk fat globule membrane mein bhi specialized proteins (MUC1, Xanthine Dehydrogenase) hote hain."
            },
            casein: {
                title: "The Casein Micelle: Models, Structure & Stability",
                p1: "Casein nature ka sabse complex protein structure hai. Yeh solution mein nahi, balki suspension mein rehta hai. Iske structure ko samjhne ke liye **'Holt’s Nanocluster Model'** (Calcium phosphate nanoclusters bound to phosphoserine) ya **'Horne’s Dual Binding Model'** (Hydrophobic interaction + CCP bridges) use kiya jata hai. Micelle ek porous sponge jaisa hota hai jo 4g paani per gram protein hold kar sakta hai.",
                fractionsTitle: "Genetic Variants of Casein (A1 vs A2 Hypothesis)",
                fractionsText: "Casein ke 4 main types hain: Alpha-s1, Alpha-s2, Beta, aur Kappa. **Beta-Casein** ke genetic variants (A1 vs A2) aajkal charcha mein hain. A1 milk (common in European breeds like HF) mein position 67 par Histidine amino acid hota hai, jo digestion par tootkar 'Beta-Casomorphin-7 (BCM-7)' opioid peptide banata hai. A2 milk (Indian breeds like Gir, Sahiwal) mein wahan Proline hota hai, jo ye bond tootne nahi deta. **Kappa-Casein** micelle ki satah par 'Hairy Layer' banata hai jo doodh ko phatne se rokti hai.",
                coagulationTitle: "Coagulation Mechanisms (Dahi/Cheese Chemistry)",
                coagulationText: "Casein ko jamane ke do mukhya tarike hain, jo alag-alag texture dete hain:",
                coagulationTypes: [
                    { name: "1. Acid Coagulation (Isoelectric Precipitation)", desc: "Example: Paneer/Yogurt. Jab pH 6.6 se 4.6 (Isoelectric Point - pI) tak girta hai, Casein micelles par net negative charge (Zeta Potential) Zero ho jata hai. Electrostatic repulsion khatam ho jati hai aur micelles 'Hydrophobic Interaction' ke karan jud jate hain. Iska curd soft aur fragile hota hai, aur Calcium serum mein nikal jata hai (Demineralization)." },
                    { name: "2. Rennet Coagulation (Enzymatic Hydrolysis)", desc: "Example: Cheddar/Mozzarella. Rennet (Chymosin) enzyme Kappa-casein ke Phe105-Met106 bond ko kaat deta hai. Isse stabilizing hairy layer (Glycomacropeptide - GMP) whey mein nikal jati hai. 'Para-kappa-casein' micelles ab unstable hokar Calcium ki maujoodgi mein hydrophobic bonding se strong 3D network banate hain. Is curd mein Calcium retain hota hai (Calcium Paracaseinate)." },
                    { name: "3. Heat Coagulation", desc: "Casein bahut heat stable hai (140°C par 20 minute tak stable - Type A Stability). Lekin agar doodh ka salt balance (Calcium vs Phosphate) bigad jaye ya pH thoda bhi kam ho (developed acidity), toh heat treatment (Pasteurization/UHT) ke dauran protein phat jata hai (Heat induced coagulation)." }
                ]
            },
            whey: {
                title: "Whey Proteins (Serum Proteins) & Functional Properties",
                p1: "Whey proteins Globular hote hain aur inmein Cysteine (Sulphur containing amino acid) zyada hota hai. Inka biological value (BV) Casein se zyada hota hai. Yeh heat sensitive hote hain (70°C ke upar denature ho jate hain). Inka denaturation kinetics 'First Order Reaction' follow karta hai.",
                fractionsTitle: "Functional Fractions",
                fractions: [
                    { name: "Beta-Lactoglobulin (β-Lg)", desc: "Yeh major whey protein (~50%) hai. Isme 2 Disulphide bonds aur 1 free Sulfhydryl (-SH) group hota hai. Garam karne par protein khulta hai (unfolding) aur -SH group expose hota hai, jo Kappa-casein ke saath Disulphide bridge banata hai. Yeh complex yogurt ki viscosity badhata hai aur syneresis rokta hai." },
                    { name: "Alpha-Lactalbumin (α-La)", desc: "Yeh sabse easily digest hone wala protein hai. Yeh metalloprotein hai jo Calcium ko bind karta hai. Infant formula mein ise add kiya jata hai kyunki human milk mein yahi main protein hai." },
                    { name: "Immunoglobulins (Ig)", desc: "Yeh antibodies (IgG, IgA, IgM) hain. Colostrum mein yeh 50-100 g/L tak ho sakte hain. Processing ke dauran yeh sabse pehle destroy hote hain, isliye inhe 'Pasteurization Indicator' nahi mana jata (kyunki ye bahut jaldi mar jate hain)." }
                ]
            }
        },
        fat: {
            title: "Lipid Chemistry, Stereochemistry aur Fatty Acid Profile",
            characteristics: {
                title: "Triglyceride Structure & Complexity",
                p1: "Milk fat duniya ka sabse complex natural lipid hai (400+ Fatty acids). Chemically, yeh **Triglycerides** (98%) hain. Glycerol backbone par 3 Fatty Acids (sn-1, sn-2, sn-3 positions) specific pattern mein jude hote hain. Example: Short chain fatty acids aksar sn-3 position par hote hain, jo digestion mein jaldi absorb hote hain.",
                p2: "**Butyric Acid (C4:0):** Yeh milk fat ka signature fatty acid hai. Doodh mein ~3-4% hota hai. Yeh ruminal fermentation (fiber digestion) se banta hai. Jab lipolysis hota hai, toh yahi acid 'Rancid' smell deta hai. **Conjugated Linoleic Acid (CLA):** Yeh ek anti-carcinogenic (cancer-fighting) fatty acid (C18:2 isomer) hai jo ruminants ke biohydrogenation process se banta hai."
            },
            stability: {
                title: "Milk Fat Globule Membrane (MFGM) Architecture",
                p1: "Fat globules (0.1-15 micron) nange nahi hote. Woh ek 3-layer biological membrane se dhake hote hain jo secretory cell ki cell membrane se aati hai. Isme Phospholipids (Lecithin, Sphingomyelin, Phosphatidylserine), Glycoproteins aur specific proteins (Butyrophilin, Xanthine Oxidase) hote hain. MFGM 'Natural Emulsifier' ka kaam karta hai.",
                creamingTitle: "Creaming (Stokes' Law Application)",
                creamingText: "Kacche doodh mein fat upar kyu aata hai? **Stokes' Law** ke anusar, velocity of rising (V) globule ke radius ke square (r²) ke proportional hoti hai. Fat halka hota hai (Density 0.93) aur Plasma bhari (Density 1.036). Ek protein 'Cryoglobulin/Agglutinin' (IgM) globules ko guchhon (clusters) mein jodta hai, jisse effective 'r' badh jata hai aur cream jaldi upar aati hai. Homogenization mein hum pressure se globules ko todkar chhota (<1 micron) kar dete hain taaki V zero ho jaye.",
                lipolysisTitle: "Lipolysis (Enzymatic Degradation)",
                lipolysisText: "Doodh mein 'Lipoprotein Lipase' enzyme naturally hota hai. Normal doodh mein MFGM is enzyme ko fat tak pahunchne nahi deta. Lekin agar hum doodh ko zor se hilayein (Agitation), pump karein, foaming karein, ya freeze karein, toh MFGM toot jati hai. Lipase fat ko todkar Free Fatty Acids (FFA) banata hai. Isse doodh kadwa ho jata hai aur sabun jaisa swad aata hai. Ise 'Induced Lipolysis' kehte hain."
            },
            autoxidation: {
                title: "Oxidative Rancidity Mechanism",
                autoxidationTitle: "Free Radical Mechanism (Initiation, Propagation, Termination)",
                autoxidationText: "Unsaturated fatty acids oxygen ke saath react karke 'Hydroperoxides' banate hain. Yeh reaction 3 steps mein hoti hai. Initiation phase mein free radicals bante hain jo Copper/Iron/Light se catalyze hote hain. Propagation mein ye radicals chain reaction karte hain. Termination mein stable non-radical products bante hain. Hydroperoxides decompose hokar Aldehydes aur Ketones banate hain jo 'Metallic' ya 'Fishy' off-flavor dete hain.",
                crystallizationTitle: "Polymorphism, Nucleation & Texture",
                crystallizationText: "Fat crystals ke alag-alag shapes (Polymorphs) hote hain: **Alpha** (Unstable, random packing), **Beta-prime** (Fine needles, ideal for Butter smoothness), aur **Beta** (Large platelets, thermodynamically stable). Ghee mein humein 'Beta' crystals chahiye taaki wo danedaar (grainy) bane. Slow cooling (29°C) Beta crystals ko promote karti hai, jabki rapid cooling Beta-prime banati hai."
            }
        },
        lactose: {
            title: "Lactose Chemistry (Milk Sugar)",
            properties: {
                title: "Structural Properties, Mutarotation & Reactivity",
                p1: "Lactose (C12H22O11) ek Reducing Disaccharide hai (Beta-D-Galactose linked to D-Glucose via Beta-1,4 bond). Yeh mammalian milk ka osmotic regulator hai. Iski sweetness sucrose ki 1/6th hoti hai. Yeh metabolic energy ka source hai aur Calcium absorption badhata hai. Galactose brain development (Galactocerebrosides) ke liye zaroori hai.",
                p2: "**Maillard Reaction (Non-enzymatic Browning):** Food chemistry mein yeh sabse important reaction hai. Heating ke dauran, Lactose ka aldehyde group (reducing end) Protein ke amino group (Lysine) ke saath react karta hai. Isse pehle Schiff base banta hai, fir Amadori rearrangement hoti hai, aur ant mein complex polymerization se brown pigments (**Melanoidins**) bante hain. Yeh UHT milk, Khoya aur Milk powder mein flavor aur color change ka karan hai. Isse Nutritional value kam ho jati hai (Blockage of Lysine).",
                crystallizationTitle: "Solubility, Supersaturation & Sandiness",
                crystallizationText1: "Lactose ki solubility kam hoti hai (18g/100ml at 20°C). Condensed milk aur Ice-cream mein water content kam hone par Lactose supersaturated ho jata hai. Woh crystallize hokar **Alpha-Lactose Monohydrate** (Tomahawk shape crystals) banata hai. Agar crystal ka size 15-20 micron se bada ho, toh wo jeebh par 'Ret (Sand)' ki tarah lagta hai. Ise 'Sandiness Defect' kehte hain.",
                crystallizationText2: "Mutarotation Kinetics: Solution mein Alpha (37%) aur Beta (63%) forms equilibrium mein rehte hain. Beta form zyada soluble aur meetha hota hai. Powder banate waqt hum spray drying se paani itni jaldi nikalte hain ki lactose crystallize nahi ho pata aur 'Amorphous' (Glassy) state mein rehta hai. Yeh amorphous lactose bahut hygroscopic (paani sokhne wala) hota hai, jo milk powder ki caking (jamna) ka karan banta hai."
            }
        },
        minerals: {
            title: "Minerals & Salt Balance Theory",
            composition: {
                title: "Partitioning of Minerals & Ionic Strength",
                p1: "Milk Ash (~0.7%) mein K, Ca, P, Cl, Na, Mg hote hain. Calcium aur Phosphorus nutrition aur technology dono ke liye critical hain. Doodh mein Calcium do forms mein hota hai: (1) **Soluble:** Serum mein ghula hua (~30%) as Calcium Citrate/Phosphate. (2) **Colloidal:** Casein micelle ke andar 'Colloidal Calcium Phosphate (CCP)' ke roop mein (~70%) jo micelle structure ko banaye rakhta hai.",
                p2: "**Sommer & Hart’s Salt Balance Theory:** Doodh ki Heat Stability (garam karne par na phatna) ek delicate balance par tikee hai. Ek taraf Divalent Cations (Ca++, Mg++) hain jo protein ko destabilize karte hain. Dusri taraf Anions (Phosphate, Citrate) hain jo protein ko stabilize karte hain. Agar balance Cations ki taraf jhuk jaye (e.g., acidic milk ya colostrum), toh doodh garam karne par phat jayega (Sweet Curdling). Processed cheese mein hum 'Emulsifying Salts' (Tri-sodium Citrate) dalte hain taaki wo Calcium ko pakad le (chelation) aur texture smooth ho."
            },
            trace: {
                title: "Trace Elements Significance",
                p1: "Trace elements enzymes ke co-factors hote hain (e.g., Zinc in Alkaline Phosphatase, Molybdenum in Xanthine Oxidase). Iron ki kami doodh ka ek natural drawback hai (0.2-0.5 mg/kg), isliye milk is not a complete food for infants regarding Iron. Copper ek potent pro-oxidant hai; agar processing equipment (Brass/Copper) se thoda sa bhi copper doodh mein aa jaye, toh wo fat oxidation (rancidity) shuru kar deta hai."
            }
        },
        vitaminsEnzymes: {
            title: "Vitamins & Enzymatic Indicators",
            vitamins: {
                title: "Vitamins: Nutritional & Technological Chemistry",
                p1: "Milk vitamins do major groups mein divided hote hain aur processing mein inka role alag-alag hota hai:\n\n**1. Fat-Soluble Vitamins (A, D, E, K):**\nYe vitamins Milk Fat Globules ke core mein dissolve hote hain.\n• **Fortification Logic:** Jab dairy mein milk se cream nikali jati hai (Separation), to Vitamin A aur D bhi fat ke saath nikal jate hain. Isliye Toned ya Skimmed milk peene walo ko nutrition kam milta hai. Is loss ko bharne ke liye FSSAI ne 'Fortification' mandatory kiya hai.\n• **Pigmentation (Color):** Cow milk ka 'Golden-Yellow' rang Beta-Carotene (Vitamin A precursor) ki wajah se hota hai. Buffaloes mein metabolism fast hota hai—wo carotene ko liver mein todkar colourless Vitamin A (Retinol) bana deti hain, isliye Buffalo milk 'Porcelain White' hota hai.\n• **Antioxidant:** Vitamin E (Tocopherols) natural antioxidant ka kaam karta hai aur milk fat ko oxidation (rancidity) se bachata hai.\n\n**2. Water-Soluble Vitamins (B-Complex & C):**\nYe vitamins milk serum (whey) phase mein paye jate hain.\n• **The Riboflavin Effect (Vitamin B2):** Ye milk whey ko greenish-yellow fluorescent tinge deta hai. Ye light ke liye bahut sensitive hai (Photosensitive). Agar milk ko transparent bottle mein dhoop (sunlight) mein rakha jaye, to Riboflavin excite hokar 'Methionine' amino acid ko oxidize karta hai. Is reaction se **'Methional'** compound banta hai, jo milk mein 'Sunlight Flavor' (jale hue pankh jaisi badbu) paida karta hai.\n• **Heat Sensitivity:** Vitamin C (Ascorbic Acid) sabse zyada unstable hota hai aur Pasteurization ke dauran partially destroy ho jata hai."
            },
            enzymes: {
                title: "Milk Enzymes (Hinglish)",
                overview: {
                    title: "Enzymes: Milk ki History ka Pata Lagana",
                    p1: "Milk mein 60 se zyada natural enzymes hote hain. Ye processing ke dauran 'Markers' ka kaam karte hain. Jaise 'Alkaline Phosphatase' batata hai ki Pasteurization sahi hua ya nahi, aur 'Lactoperoxidase' batata hai ki milk powder high-heat hai ya low-heat. Ye enzymes milk ki shelf-life aur flavour par bahut bada asar dalte hain."
                },
                headers: ["Enzyme", "Stability", "Detailed Explanation (Hinglish)"],
                rows: [
                    {
                        name: "Alkaline Phosphatase (ALP)",
                        stability: "Khatam @ 71.7°C / 15 sec",
                        details: "**Pasteurization ka Saboot:** Ye enzyme dairy industry ka sabse important marker hai. Science ye hai ki jis temperature par TB ke bacteria (M. tuberculosis) aur Q-fever ke bacteria (C. burnetii) marte hain, ALP enzyme bhi usi temperature par destroy hota hai.\n\n**Testing:** Agar pasteurized milk ke test mein ALP positive aaye, to iska matlab teen cheezein ho sakti hain: 1) Milk raw hai, 2) Temperature 71.7°C tak nahi pahuncha, ya 3) Pasteurization ke baad raw milk mix ho gaya hai. Cream mein ye enzyme kabhi-kabhi wapas active (Reactivation) ho jata hai."
                    },
                    {
                        name: "Lactoperoxidase (LPO)",
                        stability: "Khatam @ 80°C (High Heat)",
                        details: "**High Heat vs Low Heat:** Ye enzyme normal pasteurization (72°C) par zinda rehta hai, lekin 80°C par destroy ho jata hai. Agar aap Milk Powder khareed rahe hain aur usme LPO present hai, to wo 'Low Heat Powder' hai (Cheese banane ke liye best). Agar LPO absent hai, to wo 'High Heat Powder' hai (Bakery ke liye best).\n\n**LP System:** Ye milk ka apna natural preservative system hai. Ye Thiocyanate aur Hydrogen Peroxide ($H_2O_2$) ka use karke bacteria ko maarta hai. Gaon mein bina fridge ke doodh bachane ke liye is system ko activate kiya jata hai."
                    },
                    {
                        name: "Plasmin",
                        stability: "Bahut Strong (UHT mein bhi bachta hai)",
                        details: "**UHT Milk ka Dushman:** Plasmin khoon (blood) se doodh mein aata hai. Ye itna heat-stable hai ki UHT treatment (140°C) ke baad bhi thoda bach jata hai.\n\n**Problem:** Jab hum UHT milk ke carton ko 3-4 mahine store karte hain, to ye Plasmin dheere-dheere proteins (Casein) ko katna shuru karta hai. Is wajah se milk mein kadwahat (bitterness) aa jati hai aur kabhi-kabhi doodh carton ke andar hi jam jata hai (Age Gelation). Mastitis wale doodh mein Plasmin zyada hota hai."
                    },
                    {
                        name: "Lipoprotein Lipase (LPL)",
                        stability: "Kamzor (Pasteurization se mar jata hai)",
                        details: "**Rancidity ka Karan:** Ye enzyme Fat ko todkar Fatty Acids (jaise Butyric acid) banata hai, jisse doodh mein 'sabun jaisi' ya 'khatti' badbu aati hai.\n\n**Action:** Normally, Fat globules ke upar ek membrane (MFGM) hoti hai jo fat ko is enzyme se bachati hai. Lekin agar hum raw milk ko zyada hilayein (agitation) ya homogenize karein bina garam kiye, to membrane toot jati hai aur enzyme fat par hamla kar deta hai. Pasteurization is enzyme ko poori tarah destroy kar deta hai."
                    }
                ]
            }
        },
        properties: {
            title: "Physical Properties of Milk (Hinglish)",
            overview: {
                title: "Overview of Physical Properties",
                p1: "Milk sirf ek simple liquid nahi hai, balki ye ek complex system hai jo teen phases se milkar bana hai: Fat ka emulsion, Casein proteins ka colloidal suspension, aur Lactose/Minerals ka solution. Milk ki physical properties—jaise density, viscosity, aur freezing point—isi complex composition par depend karti hain. Dairy processing (jaise pasteurization ya cheese making) aur quality control (adulteration check karna) ke liye in properties ko samajhna bahut zaroori hai."
            },
            headers: ["Property", "Value", "Detailed Explanation (Hinglish)"],
            rows: [
                {
                    property: "Colour and Optical Properties",
                    value: "White to Creamy Yellow",
                    details: "Milk ka colour mainly light scattering ki wajah se hota hai. Milk mein maujood Fat globules aur Casein micelles size mein bade hote hain, jo light ko reflect aur scatter karte hain, jis wajah se milk white dikhta hai.\n\n**Scientific Reason:** Cow milk thoda yellowish (pila) dikhta hai kyunki usme 'Beta-Carotene' naam ka pigment hota hai jo cows ghaas (fodder) se leti hain. Buffalo aur Goat milk pure 'porcelain white' hota hai kyunki ye animals beta-carotene ko digest karke colorless Vitamin A mein convert kar dete hain. Skim milk (bina fat wala) thoda bluish dikhta hai kyunki fat nikalne ke baad light scattering kam ho jati hai."
                },
                {
                    property: "Flavour",
                    value: "Pleasant, Slightly Sweet",
                    details: "Fresh milk ka taste unique hota hai. Iska sweet taste 'Lactose' (milk sugar) ki wajah se aata hai, aur salty taste dissolved minerals (chlorides aur phosphates) ki wajah se hota hai. Fat milk ko ek 'rich' aur creamy mouthfeel deta hai.\n\n**Defects:** Agar milk ko copper ke bartan mein rakha jaye ya sunlight lag jaye, to oxidation ki wajah se 'Cardboardy' flavour aa jata hai. Agar bacteria grow kar jayein, to wo lactose ko lactic acid mein badal dete hain, jisse milk 'sour' (khatta) ho jata hai. Mastitis wale milk mein chloride content badh jata hai, isliye wo namkeen (salty) lagta hai."
                },
                {
                    property: "Refractive Index (at 20°C)",
                    value: "1.3440 - 1.3485",
                    details: "Refractive Index (RI) ye measure karta hai ki jab light hawa se milk ke andar jaati hai to wo kitni bend hoti hai. Ye property milk mein dissolved solids (sugar aur salts) par depend karti hai.\n\n**Significance:** Ye adulteration pakdne ke liye use hota hai. Pani ka RI kam hota hai (1.3330). Agar koi milk mein paani milayega, to milk ka RI kam ho jayega. Total Solids (TS) calculate karne ke liye bhi iska use kiya jata hai."
                },
                {
                    property: "Density & Specific Gravity",
                    value: "Cow: 1.028-1.032 | Buffalo: 1.030-1.034",
                    details: "Density ka matlab hai milk paani se kitna bhaari hai. Milk paani se heavy hota hai kyunki isme proteins aur minerals (SNF) hote hain. Lekin, Milk Fat paani se halka hota hai (0.93 g/mL).\n\n**Key Concept:** Isliye jab milk se cream nikali jati hai (skimming), to bache hue milk (Skim Milk) ki density *badh* jati hai (kyunki halki cheez nikal gayi). Agar milk mein paani milaya jaye, to density kam ho jati hai. Lactometer isi principle par kaam karta hai."
                },
                {
                    property: "Viscosity (at 25°C)",
                    value: "~2.0 cP (Centipoise)",
                    details: "Viscosity matlab fluid ka gaadhapan ya bahne mein resistance. Milk paani se lagbhag dugna (2x) viscous hota hai. Ye mainly Casein protein aur Fat globules ki wajah se hai.\n\n**Factors:** Thande temperature par viscosity badh jati hai. Homogenization process (jisme fat ko toda jata hai) se bhi viscosity badhti hai kyunki fat ka surface area badh jata hai aur naye fat clusters bante hain. Process design karte waqt (pump selection, pipe sizing) viscosity ka dhyan rakhna padta hai."
                },
                {
                    property: "Surface Tension",
                    value: "50 dyne/cm",
                    details: "Water ki surface tension high hoti hai (72 dyne/cm), lekin milk ki kam hoti hai (50 dyne/cm). Aisa isliye hai kyunki milk mein proteins aur free fatty acids hote hain jo 'surfactants' ka kaam karte hain.\n\n**Application:** Ye property milk foam (jaise cappuccino mein) banane mein madad karti hai. Agar surface tension bahut kam ho jaye (e.g., <45), to iska matlab milk mein fat breakdown (rancidity/lipolysis) shuru ho gaya hai."
                },
                {
                    property: "Freezing Point",
                    value: "-0.512 to -0.575 °C",
                    details: "Ye milk ki sabse constant physical property hai. Milk hamesha 0°C se neeche freeze hota hai kyunki isme lactose aur salts dissolved hote hain (Osmotic pressure maintain karne ke liye).\n\n**Adulteration Check:** Agar doodh wala pani milayega, to freezing point 0°C ke kareeb aane lagega (e.g., -0.400°C). Cryoscope machine isi basis par batati hai ki milk mein kitna % paani milaya gaya hai. Ye test sabse reliable mana jata hai."
                },
                {
                    property: "Boiling Point",
                    value: "100.17 °C",
                    details: "Milk pure paani (100°C) se thode zyada temperature par boil hota hai dissolved solids ki wajah se. \n\n**Processing Note:** Halanki boiling point 100°C+ hai, lekin industry mein milk powder ya condensed milk banate waqt vacuum evaporators use kiye jate hain taaki milk 50-60°C par hi boil ho jaye. High temperature par boil karne se milk ka colour brown ho sakta hai (Maillard reaction) aur nutritional value kam ho sakti hai."
                },
                {
                    property: "Acidity (Titratable)",
                    value: "0.14 - 0.18% (as Lactic Acid)",
                    details: "Taaze (fresh) milk mein Lactic Acid bilkul nahi hota. Fresh milk ki acidity 'Natural Acidity' kehlati hai jo Citrates, Phosphates, Carbon dioxide aur Casein ki wajah se hoti hai.\n\n**Souring:** Jab bacteria (Lactococcus lactis) milk mein grow karte hain, wo lactose ko khakar Lactic Acid banate hain. Ise 'Developed Acidity' kehte hain. Agar Acidity 0.18% se upar chali jaye, to garam karne par doodh phat (curdle) jayega."
                },
                {
                    property: "pH",
                    value: "6.5 - 6.7",
                    details: "Milk chemically thoda acidic hota hai. pH value H+ ions ki concentration batati hai. \n\n**Health Indicator:** Agar pH 6.5 se neeche hai, matlab milk kharab (sour) ho raha hai. Agar pH 6.8 se upar hai, to ye 'Mastitis' (udder infection) ka sanket hai, kyunki infection mein blood components milk mein aa jate hain jo alkaline hote hain. Cheese making ke liye pH control karna bahut zaroori hai."
                },
                {
                    property: "Heat Stability",
                    value: "Varies (Depends on Salt Balance)",
                    details: "Heat stability ka matlab hai ki milk high temperature (jaise 140°C) par bina phate (coagulation) kitni der tik sakta hai. Ye acidity par to depend karta hi hai, lekin sabse zyada 'Salt Balance' par depend karta hai.\n\n**Salt Balance:** Calcium + Magnesium (Divalent ions) aur Phosphate + Citrate (Anions) ka ratio sahi hona chahiye. Agar ye balance bigad jaye (jaise garmiyon mein ya specific diet se), to milk processing ke dauran coagulate ho jayega. Alcohol test isiliye kiya jata hai taaki heat stability check ho sake."
                },
                {
                    property: "Redox Potential (Eh)",
                    value: "+0.2 to +0.3 Volts",
                    details: "Ye property batati hai ki milk mein oxidation ya reduction ki kya sthiti hai. Fresh milk mein oxygen dissolved hoti hai isliye Eh positive hota hai.\n\n**Quality Test:** Bacteria oxygen consume karte hain aur 'reducing' environment banate hain (Eh negative ho jata hai). MBRT (Methylene Blue Reduction Test) isi par kaam karta hai—blue dye dalne par agar wo jaldi colorless ho jaye, matlab milk mein bacteria bahut zyada hain aur quality kharab hai."
                }
            ]
        },
        other: {
            title: "Somatic Cells, Residues & Adulterants",
            minor: {
                title: "Somatic Cell Count (SCC)",
                list: [
                    { name: "Definition", desc: "SCC mein WBCs (Leukocytes - 75%) aur Epithelial cells (25%) hote hain. Yeh udder health ka barometer hai." },
                    { name: "Impact on Quality", desc: "High SCC (>400,000 cells/ml) ka matlab Mastitis hai. Aise doodh mein Proteolytic enzymes (Plasmin) aur Lipolytic enzymes zyada hote hain jo Casein aur Fat ko tod dete hain. Isse Cheese ki yield kam ho jati hai, taste kharab (Salty/Bitter) ho jata hai aur Shelf life ghat jati hai." }
                ]
            },
            contaminants: {
                title: "Chemical Residues & Adulterants",
                p1: "Modern dairy chemistry mein contaminants ka detection (HPLC, GC-MS) critical hai:",
                list: [
                    { name: "Antibiotics (Beta-lactams, Tetracyclines)", desc: "Residues culture failures ka karan bante hain (Dahi nahi jamta kyunki starter bacteria mar jate hain). Human health mein antibiotic resistance aur allergy cause karte hain. MRL (Maximum Residue Limits) strictly follow kiye jate hain." },
                    { name: "Aflatoxin M1", desc: "Agar pashu moldy feed khaye (Aspergillus flavus), toh Aflatoxin B1 metabolize hokar M1 ban jata hai aur doodh mein secrete hota hai. Limit: 0.5 ppb. Yeh heat stable carcinogen hai (Pasteurization se nahi marta)." },
                    { name: "Melamine", desc: "Synthetic adulterant (Non-protein nitrogen) jo protein test (Kjeldahl method) ko cheat karne ke liye milaya jata hai. Yeh kidney mein Cyanuric acid ke saath milkar insoluble crystals banata hai." },
                    { name: "Neutralizers (Soda/NaOH)", desc: "Fte hue doodh ki acidity chhupane ke liye milaya jata hai taaki wo heat stability test pass kar le. Rosalic acid test se pakda jata hai." }
                ]
            }
        }
    },
    en: {
        mainTitle: "Advanced Dairy Chemistry",
        description: "A thesis-level analysis of the molecular structure, thermodynamics, biochemical pathways, reaction kinetics, and industrial processing science of milk.",
        backToTopics: "Back to Topics",
        composition: {
            title: "Composition and Physico-chemical Phases",
            whatIsMilk: {
                title: "Definition, Structural Complexity & Colloidal Stability",
                fssaiDef: "<strong>FSSAI Definition (Food Safety and Standards Act, 2006):</strong> “Milk is the normal mammary secretion derived from complete milking of healthy milch animals. It must be free from colostrum. Standardized milk requires specific minimum Fat and SNF limits (e.g., Cow: 3.2-4.0% Fat, 8.3-8.5% SNF depending on the state). Legally, the term 'Milk' is reserved for animal secretions; plant-based beverages cannot be labeled as 'Milk'.”",
                usaDef: "<strong>Global Definition (Codex Alimentarius):</strong> \"Milk is a lacteal secretion obtained by the complete milking of one or more healthy milch animals. Chemically, it is a complex polydisperse system where water forms the continuous phase, holding other components in specific physical states governed by DLVO theory of colloidal stability.\"",
                p1: "In Advanced Dairy Chemistry, milk is not merely a liquid but a **'Colloidal Biological Fluid'**. Its behavior during processing (heating, freezing, drying) is governed by its existence in three simultaneous physical phases:",
                phases: [
                    "<strong>1. Oil-in-Water Emulsion (The Fat Phase):</strong> Milk Fat (Lipids) is hydrophobic. It exists as microscopic globules (0.1 - 15 microns) dispersed in the plasma. Each globule is encased in a highly complex, trilaminar biological membrane called the **MFGM (Milk Fat Globule Membrane)**. This membrane is a mosaic of phospholipids, sphingolipids, glycoproteins, and enzymes (Xanthine Oxidase), preventing the globules from coalescing (merging) via steric and electrostatic repulsion and protecting the fat core from Lipolytic enzymes.",
                    "<strong>2. Colloidal Suspension (The Casein Micelle):</strong> Casein proteins (Alpha, Beta, Kappa) do not exist as single molecules. They aggregate into supramolecular structures called **'Casein Micelles'** (Size: 50-300 nm). These micelles are stabilized by nanoclusters of 'Colloidal Calcium Phosphate (CCP)'. Kappa-casein resides on the surface, projecting a 'hairy layer' (glycomacropeptide) that prevents aggregation via steric hindrance.",
                    "<strong>3. True Solution (The Serum Phase):</strong> The continuous phase is water (plasma). Dissolved within it at the molecular level are Lactose (milk sugar), Whey Proteins (Alpha-lactalbumin, Beta-lactoglobulin), soluble Minerals (Sodium, Potassium, Chlorides, Citrates), and Water-soluble Vitamins. This phase governs the Colligative Properties: Osmotic Pressure, Freezing Point Depression, and Boiling Point Elevation."
                ]
            },
            generalComposition: {
                title: "Detailed Chemical Composition (Bovine vs Bubaline)",
                headers: ["Constituent", "Average % Value", "Range & Variation Factors"],
                rows: [
                    { c1: "Water (Solvent Phase)", v1: "87.0 - 88.0%", c2: "Variation: Dependent on feed hydration, ambient temperature, and stage of lactation. Dielectric constant affects salt dissociation." },
                    { c1: "Fat (Lipids)", v1: "3.5 - 7.5% (Cow vs Buffalo)", c2: "Variation: The most variable component. Influenced by breed, fiber in diet (acetate production), and milking interval. Strippings (last milk) are richest in fat." },
                    { c1: "Casein Protein", v1: "2.6 - 3.4%", c2: "Significance: Determines cheese yield and curd tension/firmness. Acts as the primary carrier of Calcium and Phosphorus." },
                    { c1: "Whey Protein", v1: "0.6 - 0.7%", c2: "Significance: High nutritional biological value; sensitive to heat denaturation (First order kinetics)." },
                    { c1: "Lactose (Anhydrous)", v1: "4.6 - 4.8%", c2: "Stability: The most stable solid constituent (osmoregulator). Drops only during Mastitis due to blood-milk barrier leakage." },
                    { c1: "Ash (Minerals)", v1: "0.7 - 0.8%", c2: "Constituents: Ca, P, Mg, K, Na, Cl, Citrate. Essential for heat stability and buffering capacity." },
                    { c1: "Total Solids (TS)", v1: "12.5 - 16.0%", c2: "Calculation: TS = Fat % + SNF %. Basic determinant of milk pricing." }
                ]
            },
            speciesDifferences: {
                title: "Comparative Analysis: Species Composition",
                headers: ["Species", "Fat %", "Protein %", "Lactose %", "Ash %", "Key Characteristic & Industrial Application"],
                rows: [
                    { species: "Cow (Bos taurus)", water: "3.5-4.5", fat: "3.2-3.4", sugar: "4.6-4.8", protein: "0.7", ash: "Balanced nutrition; Yellow fat due to Carotene transfer (Golden Butter)." },
                    { species: "Buffalo (Bubalus bubalis)", water: "6.0-8.5", fat: "4.0-4.5", sugar: "4.8-5.0", protein: "0.8", ash: "White fat (converts carotene to Vit A); High Casein/Fat ratio ideal for Mozzarella & Paneer; Large fat globules." },
                    { species: "Goat (Capra hircus)", water: "4.0-4.5", fat: "3.5-3.7", sugar: "4.2-4.5", protein: "0.8", ash: "Smaller fat globules (<2 micron); naturally homogenized; distinctive 'goaty' flavor (Caproic acid); Hypoallergenic." },
                    { species: "Human (Homo sapiens)", water: "3.5-3.8", fat: "1.0-1.2", sugar: "6.8-7.0", protein: "0.2", ash: "Very high Lactose for brain development; low Casein (Soft curd); high Whey (Alpha-lactalbumin, Lactoferrin, IgA)." },
                    { species: "Camel", water: "3.0-4.0", fat: "3.0-3.5", sugar: "4.0-4.5", protein: "0.7", ash: "Contains Insulin-like protein (Anti-diabetic); salty taste due to high Chloride; weak curd formation due to different casein micelle structure." }
                ]
            },
            water: {
                title: "Water Chemistry and Moisture Sorption Isotherms",
                p1: "Milk contains ~87% water, but in food science, water is defined by its molecular mobility and interaction with solutes. We analyze it in the context of 'Water Activity (aw)' and Sorption Isotherms:",
                forms: [
                    { name: "1. Free / Bulk Water (~96% of total water)", desc: "This is the solvent water having full molecular mobility. It dissolves salts and lactose. It behaves like pure water (FP 0°C). It is available for chemical reactions and microbial growth. This is the water removed during evaporation and spray drying." },
                    { name: "2. Bound Water / Vicinal Water (~3-4%)", desc: "This water is tightly held to the surface of proteins (polar groups) and lactose via Hydrogen Bonds and Van der Waals forces (Monolayer sorption - BET Theory). It is chemically 'inert'—it does not freeze at -40°C and cannot act as a solvent. High-protein products (like Greek Yogurt) have higher bound water, reducing syneresis." },
                    { name: "3. Water of Crystallization", desc: "This water is chemically integrated into the crystal lattice of molecules, specifically Alpha-Lactose Monohydrate. It requires significant energy to remove. Removing it (e.g., excessive drying heat) destroys the crystal structure, creating amorphous lactose." }
                ]
            }
        },
        mammaryGland: {
            title: "Biosynthesis and Mammary Physiology",
            structure: {
                title: "Anatomy: The Milk Factory Architecture",
                p1: "The mammary gland (Udder) is a sophisticated exocrine factory. Its functional unit is the **'Alveolus'**. Inside each alveolus is a single layer of 'Secretory Epithelial Cells' responsible for milk synthesis. These cells exhibit polarity: (1) **Basal Membrane:** Absorbs raw materials (nutrients) from the blood. (2) **Apical Membrane:** Secretes the synthesized milk into the Lumen via Exocytosis.",
                p2: "**Blood-Milk Barrier:** Milk and blood do not mix, separated by 'Tight Junctions' between epithelial cells. The metabolic demand is immense: approx. 500 Liters of blood must flow through the udder capillaries to produce just 1 Litre of milk. In Mastitis, these tight junctions break (leaky barrier), allowing blood salts (Na, Cl) and somatic cells to enter milk, while Lactose leaks into blood."
            },
            physiology: {
                title: "Biosynthesis Pathways (Cellular Level)",
                p1: "Milk synthesis is regulated by the Lactogenic Complex (Prolactin, Glucocorticoids, Insulin, Growth Hormone). Each component has a distinct metabolic pathway:",
                ejectionTitle: "Mechanism: Glucose to Lactose (Lactose Synthetase Complex)",
                ejectionText: "Glucose enters the cell from the blood via GLUT1 transporters. In the **Golgi Apparatus**, a unique enzyme system called **'Lactose Synthetase'** operates. It consists of two parts: (A) Galactosyl Transferase (GT) and (B) Alpha-Lactalbumin. In other tissues, GT synthesizes glycoproteins. However, in the mammary gland, Alpha-lactalbumin modifies GT to accept Glucose as a substrate, linking it with Galactose to form Lactose. Thus, Alpha-lactalbumin acts as the 'Specifier Protein'.",
                precursors: {
                    title: "Metabolic Transformation of Precursors",
                    caption: "Transformation of Blood Components into Milk Components:",
                    headers: ["Component", "Blood Precursor", "Synthesis Mechanism"],
                    rows: [
                        { constituent: "Lactose", plasma: "Blood Glucose", milk: "Synthesized in Golgi Apparatus via Lactose Synthetase." },
                        { constituent: "Casein", plasma: "Free Amino Acids", milk: "De-novo synthesis in Rough Endoplasmic Reticulum (RER)." },
                        { constituent: "Fat (Short Chain C4-C14)", plasma: "Acetate & Beta-Hydroxybutyrate", milk: "De-novo synthesis in Cytoplasm via Fatty Acid Synthase (Ruminants specific)." },
                        { constituent: "Fat (Long Chain C16+)", plasma: "Triglycerides/NEFA (VLDL)", milk: "Direct absorption from blood lipids via Lipoprotein Lipase." },
                        { constituent: "Immunoglobulins", plasma: "Blood Antibodies", milk: "Receptor-mediated Transcytosis (Direct transport)." },
                        { constituent: "Minerals", plasma: "Ionic Salts", milk: "Active transport pumps (ATP dependent) concentrate minerals against gradient." }
                    ]
                }
            }
        },
        proteins: {
            title: "Advanced Protein Chemistry & Proteomics",
            overview: {
                title: "Protein Classification & Primary Structure",
                p1: "Milk proteins are biologically functional, providing nutrition and immunity. They are chemically classified based on 'Solubility at Isoelectric Point (pH 4.6)'. Of the total protein (~3.3%), 80% is Casein (Insoluble at pH 4.6) and 20% is Whey Protein (Soluble at pH 4.6). They are 'Complete Proteins' containing all 9 Essential Amino Acids."
            },
            casein: {
                title: "The Casein Micelle: Models, Structure & Stability",
                p1: "Casein represents one of nature's most complex supramolecular structures. It exists as a stable suspension. Understanding its structure relies on models like **'Holt’s Nanocluster Model'** (CCP nanoclusters bound to phosphoserine regions) or **'Horne’s Dual Binding Model'** (Hydrophobic interaction + CCP bridges). The micelle is highly hydrated (holds 4g water/g protein).",
                fractionsTitle: "Genetic Variants of Casein (A1 vs A2 Hypothesis)",
                fractionsText: "There are four main casein fractions. **Beta-Casein** variants (A1 vs A2) are significant. A1 milk (common in European breeds like HF) contains Histidine at position 67, which can release **Beta-Casomorphin-7 (BCM-7)** opioid peptide upon digestion. A2 milk (Indian breeds like Gir) contains Proline, preventing this release. **Kappa-Casein** resides on the micelle surface, forming a 'Hairy Layer' (Glycomacropeptide) that provides steric stabilization, preventing aggregation.",
                coagulationTitle: "Coagulation Mechanisms (The Science of Cheese/Yogurt)",
                coagulationText: "Destabilizing the casein micelle is central to dairy technology:",
                coagulationTypes: [
                    { name: "1. Acid Coagulation (Isoelectric Precipitation)", desc: "Example: Cottage Cheese/Yogurt. When pH drops from 6.6 to 4.6 (Isoelectric Point - pI), the net negative charge (Zeta Potential) on casein micelles is neutralized. Electrostatic repulsion ceases, and micelles aggregate via 'Hydrophobic Interactions' to form a gel. The curd is demineralized as Calcium dissolves into the serum." },
                    { name: "2. Rennet Coagulation (Enzymatic Hydrolysis)", desc: "Example: Cheddar/Mozzarella. The enzyme Rennet (Chymosin) acts as a biological knife. It specifically cleaves the Phe105-Met106 bond of Kappa-casein. This 'shaves off' the stabilizing hairy layer (CMP). The remaining 'Para-kappa-casein' micelles become sensitive to Calcium and form a robust 3D network via hydrophobic bonding, retaining minerals." },
                    { name: "3. Heat Coagulation", desc: "Casein is remarkably heat stable (can withstand 140°C for 20 mins - Type A stability). However, if the salt balance (Calcium vs Phosphate) is disturbed or if slight acidity develops, the protein loses stability and coagulates during heating (Heat-induced coagulation)." }
                ]
            },
            whey: {
                title: "Whey Proteins (Serum Proteins) & Functional Properties",
                p1: "Whey proteins are globular with defined secondary/tertiary structures. They are rich in Cysteine (Sulphur amino acid) and have a higher Biological Value (BV) than casein. They are heat labile, denaturing above 70°C following First Order Kinetics.",
                fractionsTitle: "Functional Fractions",
                fractions: [
                    { name: "Beta-Lactoglobulin (β-Lg)", desc: "The major whey protein (~50%). Contains 2 Disulphide bonds and 1 free Sulfhydryl (-SH) group. Upon heating, the protein unfolds, exposing -SH groups which release volatile H2S (Cooked Flavor). It forms a complex with Kappa-casein via disulfide bridges, crucial for yogurt viscosity and preventing syneresis." },
                    { name: "Alpha-Lactalbumin (α-La)", desc: "The most digestible protein. A metalloprotein binding Calcium. It is a key component of the Lactose Synthase enzyme. Primary protein in human milk." },
                    { name: "Immunoglobulins (Ig)", desc: "Large antibodies (IgG, IgA, IgM). Found in concentrations of 50-100 g/L in Colostrum to provide 'Passive Immunity' to the neonate. They are the first to be destroyed by heat." }
                ]
            }
        },
        fat: {
            title: "Lipid Chemistry, Stereochemistry & Fatty Acid Profile",
            characteristics: {
                title: "Triglyceride Structure & Complexity",
                p1: "Milk fat is the most complex natural lipid known (400+ distinct Fatty acids). Chemically, it consists of **Triglycerides** (98%), formed by a Glycerol backbone esterified with 3 Fatty Acids at stereospecific positions (sn-1, sn-2, sn-3). Short chain acids prefer sn-3 position for easy lipase access during digestion.",
                p2: "**Butyric Acid (C4:0):** The signature fatty acid of ruminant milk (~3-4%). Synthesized from rumen fermentation products. It is responsible for the unique flavor of butter but causes 'Rancidity' if released. **Conjugated Linoleic Acid (CLA):** A potent anti-carcinogenic fatty acid (C18:2 isomer) produced via biohydrogenation in the rumen."
            },
            stability: {
                title: "Milk Fat Globule Membrane (MFGM) Architecture",
                p1: "Fat globules (0.1-15 micron) are not naked oil droplets. They are encased in a tri-layer biological membrane derived from the secretory cell's apical membrane. It consists of Phospholipids (Lecithin, Sphingomyelin, Phosphatidylserine), Glycoproteins, and Enzymes (Xanthine Oxidase, Butyrophilin). The MFGM acts as a natural 'Emulsifier', preventing coalescence.",
                creamingTitle: "Creaming (Stokes' Law Application)",
                creamingText: "Why does cream rise? Governed by **Stokes' Law**, the velocity of rising (V) is proportional to the square of the globule radius (r²). Fat is lighter (Density 0.93) than Plasma (Density 1.036). The protein 'Cryoglobulin/Agglutinin' (IgM) causes globules to flocculate into clusters at low temperatures, increasing effective 'r' and accelerating creaming. Homogenization disrupts globules (<1 micron) and coats them with casein, preventing this.",
                lipolysisTitle: "Lipolysis (Enzymatic Degradation)",
                lipolysisText: "Milk contains the enzyme 'Lipoprotein Lipase'. In intact globules, the MFGM separates the enzyme from the fat substrate. However, if the MFGM is damaged (vigorous agitation, pumping, foaming, freezing), Lipase attacks the triglycerides, hydrolyzing them into Free Fatty Acids (FFA). The release of Butyric Acid causes a bitter, soapy, and rancid off-flavor known as 'Induced Hydrolytic Rancidity'."
            },
            autoxidation: {
                title: "Oxidative Rancidity Mechanism",
                autoxidationTitle: "Free Radical Mechanism (Initiation, Propagation, Termination)",
                autoxidationText: "Unsaturated fatty acids react with atmospheric Oxygen to form 'Hydroperoxides'. This is a chain reaction: **Initiation:** Formation of free radicals catalyzed by light, heat, or metal ions (Cu, Fe). **Propagation:** Radicals react with O2. **Termination:** Stable products form. The breakdown of hydroperoxides yields Aldehydes and Ketones, responsible for 'Metallic', 'Fishy', or 'Cardboardy' off-flavors.",
                crystallizationTitle: "Polymorphism, Nucleation & Texture",
                crystallizationText: "Milk fat exhibits 'Polymorphism', meaning it can crystallize into different lattice structures: (1) **Alpha** (Unstable, random packing), (2) **Beta-prime** (Fine needles, ideal for smooth Butter), (3) **Beta** (Large platelets, thermodynamically stable). For grainy Ghee, large Beta crystals are desired, achieved by slow cooling (29°C)."
            }
        },
        lactose: {
            title: "Lactose Chemistry (Milk Sugar)",
            properties: {
                title: "Structural Properties, Mutarotation & Reactivity",
                p1: "Lactose (C12H22O11) is a Reducing Disaccharide composed of Glucose and Galactose linked by a β-1,4 bond. It functions as the osmotic regulator of milk. It is 1/6th as sweet as sucrose. It aids in calcium absorption and establishes a distinct intestinal flora (Bifidobacteria).",
                p2: "**Maillard Reaction (Non-enzymatic Browning):** A central reaction in food chemistry. Upon heating, the aldehyde group of Lactose reacts with the amino group (Lysine) of proteins. This cascade forms Schiff bases, undergoes Amadori rearrangement, and finally produces brown pigments (**Melanoidins**) and caramelized flavor compounds. This causes browning in UHT milk, Milk powder, and Khoya, and reduces nutritional protein quality (loss of Lysine).",
                crystallizationTitle: "Solubility, Supersaturation & Sandiness Defect",
                crystallizationText1: "Lactose has low solubility. In concentrated products like Condensed milk and Ice-cream, lactose becomes supersaturated. It crystallizes as **Alpha-Lactose Monohydrate** (Tomahawk shaped crystals). If crystal size exceeds 15-20 microns, the tongue perceives them as hard particles, causing a 'Sandiness' defect.",
                crystallizationText2: "Mutarotation Kinetics: In aqueous solution, Alpha and Beta forms exist in equilibrium (Ratio 37:63 at 20°C). Beta-lactose is more soluble and sweeter. In powder technology (Spray drying), rapid evaporation prevents crystallization, leaving lactose in an 'Amorphous' (Glassy) state. This amorphous lactose is highly hygroscopic, causing caking/lumping in powders."
            }
        },
        minerals: {
            title: "Minerals & Salt Balance Theory",
            composition: {
                title: "Partitioning of Minerals & Ionic Strength",
                p1: "Milk Ash (~0.7%) contains K, Ca, P, Cl, Na, Mg. Calcium and Phosphorus are critical. They are partitioned into two phases: (1) **Soluble:** Dissolved in serum (~30%). (2) **Colloidal:** Bound within Casein micelles as 'Colloidal Calcium Phosphate (CCP)' (~70%), providing structural integrity.",
                p2: "**Sommer & Hart’s Salt Balance Theory:** The heat stability of milk (resistance to coagulation during heating) depends on the ratio of Divalent Cations (Ca++, Mg++) to Monovalent/Divalent Anions (Phosphate, Citrate). If the balance shifts towards Calcium (e.g., acidic milk or colostrum), the milk coagulates on heating (Sweet Curdling). Stabilizing salts (Citrates/Phosphates) are added to processed cheese to sequester Calcium (chelation) and emulsify the fat."
            },
            trace: {
                title: "Trace Elements Significance",
                p1: "Trace elements act as enzyme co-factors (e.g., Zinc in Alkaline Phosphatase, Molybdenum in Xanthine Oxidase). Milk is naturally deficient in Iron (0.2-0.5 mg/kg), hence it is not a complete food for infants regarding Iron (risk of Anemia). Copper is a potent pro-oxidant; contamination from brass/copper equipment catalyzes oxidative rancidity."
            }
        },
        vitaminsEnzymes: {
            title: "Vitamins & Enzymatic Indicators",
            vitamins: {
                title: "Vitamins: Nutritional & Technological Chemistry",
                p1: "Milk vitamins are distributed between two distinct phases, influencing both nutrition and processing stability:\n\n**1. Fat-Soluble Vitamins (A, D, E, K):**\nThese are dissolved within the core of milk fat globules.\n• **Fortification Logic:** During the production of Toned or Skimmed milk, the removal of milk fat results in the simultaneous loss of Vitamins A and D. To prevent nutritional deficiency, regulatory bodies (like FSSAI) mandate the fortification of low-fat milk variants.\n• **Pigmentation Chemistry:** The characteristic golden-yellow color of Cow milk is due to **Beta-Carotene** (a precursor to Vitamin A) transferred from green feed. In contrast, Buffaloes and Goats possess a metabolic mechanism that efficiently converts carotene into colorless Vitamin A (Retinol) prior to secretion, resulting in 'Porcelain White' milk.\n• **Stability:** Vitamin E (Tocopherols) acts as a natural antioxidant, protecting unsaturated fatty acids from auto-oxidation.\n\n**2. Water-Soluble Vitamins (B-Complex & C):**\nThese are dissolved in the serum (whey) phase.\n• **The Riboflavin Effect (Vit B2):** This vitamin imparts the characteristic greenish-yellow fluorescent tinge to whey. It is highly **photosensitive**. Upon exposure to sunlight or fluorescent lighting, Riboflavin acts as a catalyst, oxidizing the amino acid **Methionine**. This reaction generates **Methional** (3-methylthiopropanal) and sulfur compounds, causing the 'Sunlight Flavor' defect (often described as burnt feathers or cardboard-like).\n• **Heat Sensitivity:** Vitamin C (Ascorbic Acid) is the most heat-labile component and is significantly reduced during pasteurization."
            },
            enzymes: {
                title: "Endogenous Enzymes: Process & Quality Markers",
                overview: {
                    title: "The Enzymology of Milk Processing",
                    p1: "Milk contains over 60 indigenous enzymes, originating from the cow's mammary tissue, blood plasma, or leukocytes. While present in trace amounts, they are catalytic powerhouses that dictate the shelf-life, stability, and processing parameters of dairy products. In Dairy Technology, these enzymes play a dual role: they are 'Indices of Heat Treatment' (telling us if pasteurization was successful) and 'Agents of Deterioration' (causing off-flavours and gelation). The thermal stability of these enzymes ranges widely; from Lipases (labile) to Plasmin (highly heat-resistant), creating a spectrum used to validate different thermal processes."
                },
                headers: ["Enzyme", "Thermal Stability", "Scientific Significance & Mechanism"],
                rows: [
                    {
                        name: "Alkaline Phosphatase (ALP)",
                        stability: "Inactivated at 71.7°C / 15 sec",
                        details: "ALP is a membrane-bound glycoprotein and a phospho-monoesterase that requires Zinc and Magnesium for activity. It is the definitive 'Index Organism' for pasteurization efficiency.\n\n**Mechanism & Significance:** The thermal destruction curve of ALP closely parallels, but is slightly higher than, the thermal death curve of *Coxiella burnetii* (the most heat-resistant non-spore-forming pathogen found in milk) and *Mycobacterium tuberculosis*. Therefore, if ALP is destroyed, the pathogen is certainly destroyed. \n\n**The Test:** The ALP test (e.g., Aschaffenburg & Mullen) detects the liberation of phenol or similar compounds from a phosphate substrate. A positive result indicates: 1) The milk is raw, 2) The pasteurization temperature/time was insufficient, or 3) Post-pasteurization contamination with raw milk (even 0.1% raw milk can trigger a positive result). Note: In high-fat products like cream, ALP can undergo 'Reactivation' upon storage, leading to false positives."
                    },
                    {
                        name: "Lactoperoxidase (LPO)",
                        stability: "Inactivated at ~80°C / 15 sec",
                        details: "LPO is one of the most abundant enzymes in whey. It is a heme-containing peroxidase. Because it survives standard pasteurization (72°C) but is destroyed at high temperatures (80°C+), it serves as the marker to differentiate between 'High Heat' and 'Low Heat' thermal processes.\n\n**The LP System (Antimicrobial):** LPO is the engine of a natural bacteriostatic system. It catalyzes the oxidation of Thiocyanate ($SCN^-$) in the presence of Hydrogen Peroxide ($H_2O_2$) to produce Hypothiocyanite ($OSCN^-$). This ion oxidizes the sulfhydryl groups of bacterial enzymes, inhibiting their metabolism. \n\n**Industrial Application:** This system is often activated exogenously in tropical countries to preserve raw milk during transport without refrigeration. In milk powder production, the presence of active LPO classifies the product as 'Low Heat Skim Milk Powder,' which is essential for recombined milk and cheese making where protein denaturation must be minimized."
                    },
                    {
                        name: "Plasmin (Milk Protease)",
                        stability: "Highly Heat Stable (Survives UHT)",
                        details: "Plasmin is a serine protease transferred from blood into milk. It exists primarily as the inactive precursor 'Plasminogen,' associated with Casein micelles. It is the primary enemy of UHT milk quality.\n\n**Mechanism of Defect:** Plasmin is exceptionally heat stable; it survives pasteurization completely and retains significant activity even after UHT treatment (135-150°C). During storage, Plasmin attacks $\\beta$-casein and $\\alpha_{s2}$-casein, hydrolyzing them into $\\gamma$-caseins and proteose-peptones. \n\n**Consequences:** 1) **Bitterness:** The released peptides are hydrophobic and bitter. 2) **Age Gelation:** The breakdown of the casein network causes the UHT milk to lose fluidity and form a gel or coagulum inside the carton after 3-6 months. Plasmin activity is higher in late-lactation milk and milk from cows with mastitis, making somatic cell count (SCC) control crucial for UHT milk production."
                    },
                    {
                        name: "Lipoprotein Lipase (LPL)",
                        stability: "Heat Labile (Destroyed < 70°C)",
                        details: "LPL is the primary agent of 'Hydrolytic Rancidity.' In the udder, the enzyme is separated from its substrate (milk fat) by the Milk Fat Globule Membrane (MFGM). \n\n**Mechanism:** If the MFGM is damaged—due to excessive agitation, foaming, freezing, or homogenization of raw milk—LPL gains access to the triglyceride core. It hydrolyzes the fat, releasing short-chain free fatty acids (specifically Butyric, Caproic, and Caprylic acids). \n\n**Sensory Impact:** Even tiny amounts of free butyric acid cause a distinct 'rancid,' 'soapy,' or 'vomit-like' smell. Since LPL is heat labile, it is completely destroyed by pasteurization. Therefore, rancidity is rarely a problem in processed milk *unless* the damage occurred *before* heating (in the raw milk silo) or if post-pasteurization contamination introduces bacterial lipases (which are heat stable)."
                    },
                    {
                        name: "Catalase",
                        stability: "Inactivated at ~65°C",
                        details: "Catalase catalyzes the decomposition of Hydrogen Peroxide ($H_2O_2$) into water and oxygen. While present in normal milk, its concentration skyrockets during infection.\n\n**Significance as a Marker:** Catalase is an intracellular enzyme found in leukocytes (white blood cells) and epithelial cells. Therefore, a high Catalase content correlates directly with a high Somatic Cell Count (SCC). It is used as a rapid, indirect indicator of **Mastitis** (udder infection). In cheese making, high catalase activity (from coliform bacteria) can cause 'early gas defects,' leading to pinholes and blowing in the curd."
                    }
                ]
            }
        },
        properties: {
            title: "Physical Properties of Milk",
            overview: {
                title: "Comprehensive Overview of Physical Properties",
                p1: "Milk is not a simple homogeneous liquid; it is a complex, polydisperse system consisting of three distinct phases: an emulsion of fat globules, a colloidal suspension of casein micelles, and a true solution of lactose, whey proteins, minerals, and vitamins. The physical properties of milk—such as density, viscosity, refractive index, and freezing point—are the resultant vectors of this heterogeneous composition. Understanding these properties is fundamental to Dairy Technology for several reasons. \n\nFirstly, quality assurance relies heavily on physical metrics; for instance, the freezing point is the gold standard for detecting water adulteration, while specific gravity is used to estimate Solids-Not-Fat (SNF). Secondly, process engineering depends on these constants; viscosity determines the design of pumps and heat exchangers, while thermal properties dictate the energy requirements for pasteurization and spray drying. Thirdly, consumer perception is driven by physical attributes; the opacity (whiteness) and viscosity (mouthfeel) directly influence the acceptability of the product. These properties are dynamic, influenced by factors such as the species of the animal (cow vs. buffalo), the stage of lactation, nutritional status, health of the udder (mastitis), and environmental temperature. The data below represents a detailed scientific synthesis of these properties."
            },
            headers: ["Property", "Value", "Significance & Scientific Detail"],
            rows: [
                {
                    property: "Colour and Optical Properties",
                    value: "Opaque White to Creamy Yellow",
                    details: "The opacity of milk is primarily caused by the scattering of light by large colloidal particles, specifically fat globules and casein micelles. Because these particles are large enough to scatter all wavelengths of the visible light spectrum effectively (Mie scattering), the result is a white appearance. The 'whiteness' intensity is often correlated with the size and number of these particles; homogenized milk appears whiter than raw milk because the fat globules are shattered into smaller, more numerous spheres that scatter light more efficiently. \n\nVariations in colour occur between species. Cow milk often has a yellowish tint due to the presence of carotenoid pigments (specifically beta-carotene) dissolved in the milk fat. Cows transfer these pigments from green feed (forage/grass) into their milk. In contrast, buffalo and goat milk appear structurally 'whiter' (porcelain white) because these animals convert beta-carotene into colorless Vitamin A before it is secreted into the milk. Additionally, skim milk may appear slightly bluish or greenish; the blue tint arises because, in the absence of fat, the smaller casein micelles scatter shorter blue wavelengths more effectively (Tyndall effect), while a greenish hue is often due to the presence of riboflavin (Vitamin B2) in the whey phase."
                },
                {
                    property: "Flavour Profile",
                    value: "Pleasant, Slightly Sweet, Aromatic",
                    details: "The flavour of fresh, high-quality milk is a delicate balance of sweetness, saltiness, and 'richness.' The sweet note is derived entirely from lactose (milk sugar). The salty character originates from dissolved minerals, particularly chlorides and phosphates. The 'rich' or 'creamy' mouthfeel and aroma are contributed by the milk fat and the milk fat globule membrane (MFGM) components. \n\nFlavour is highly susceptible to alteration. 'Feed flavours' can transfer from volatile compounds in fodder (e.g., wild onion, garlic, or silage) directly into the milk via the bloodstream. Chemical changes also drastically alter flavour: 'Oxidized' or 'cardboardy' flavours result from the oxidation of unsaturated fatty acids (catalyzed by copper or light exposure). 'Rancid' or 'soapy' flavours are caused by lipolysis, where the enzyme lipase hydrolyzes milk fat to release free fatty acids (like butyric acid). 'Acid' or 'sour' flavours indicate bacterial fermentation of lactose into lactic acid. The balance of salt-to-lactose is also a physiological indicator; milk from a cow with mastitis has higher chloride and lower lactose, resulting in a distinct salty taste."
                },
                {
                    property: "Refractive Index (at 20°C)",
                    value: "1.3440 - 1.3485",
                    details: "The Refractive Index (RI) is a measure of the bending of light as it passes from air into the milk sample. In milk, the RI is determined by the total concentration of dissolved solutes in the serum phase (primarily lactose and salts) and the colloidal proteins. It is typically measured using a Zeiss immersion refractometer. \n\nThe RI is mathematically related to the total solids content of the milk. Because the RI of water is roughly 1.3330, the increase in milk is due to its solutes. This property is utilized in the detection of adulteration; adding water lowers the RI closer to 1.3330. Conversely, adding solids (like sugar or skim milk powder) raises it. The 'Refractometer Number' is often converted to assess the Solids-Not-Fat (SNF) content accurately. It is a rapid optical test that often precedes more complex gravimetric analysis in industrial settings."
                },
                {
                    property: "Density and Specific Gravity (at 20°C)",
                    value: "Cow: 1.028-1.032 g/mL | Buffalo: 1.030-1.034 g/mL",
                    details: "Density is the mass per unit volume, while specific gravity (SG) is the ratio of milk's density to the density of water at a standard temperature (usually 4°C or 20°C). Milk is heavier than water because the dissolved solids (proteins, lactose, minerals) have a higher density than water. However, milk fat is less dense (approx 0.93 g/mL) than water. Therefore, there is an inverse relationship between fat and density: cream floats because it is lighter. \n\nWhen milk is skimmed (fat removed), the density *increases* (to approx 1.036) because the lighter component has been removed. Conversely, adding water decreases density. The 'Recknagel Effect' describes a phenomenon where the density of milk slightly increases for several hours after milking due to the slow solidification of fat globules and the escape of entrained gases. In dairy testing, density is measured using a Lactometer. The corrected lactometer reading (CLR) is used in the Richmond formula ($T.S. = 0.25G + 1.2F + 0.14$) to calculate Total Solids."
                },
                {
                    property: "Viscosity (at 25°C)",
                    value: "~2.0 cP (Centipoise)",
                    details: "Viscosity describes the internal resistance of the fluid to flow. Milk is roughly twice as viscous as water. This property is governed by the state and concentration of the casein micelles and the fat globules. Milk behaves generally as a Newtonian fluid (viscosity is independent of shear rate) at standard conditions, but high-fat creams exhibit non-Newtonian, shear-thinning behavior.\n\nFactors affecting viscosity include: 1) **Temperature:** Viscosity decreases as temperature rises. 2) **Fat Content:** Higher fat leads to higher viscosity. 3) **Homogenization:** This process increases viscosity significantly because it increases the surface area of fat globules, allowing more casein to adsorb onto the fat surface, creating voluminous fat-protein clusters that resist flow. 4) **Aging:** Raw milk viscosity can increase slightly upon aging due to the hydration of proteins and the clustering of fat globules (creaming). This property is critical in calculating pumping requirements and holding tube lengths in pasteurizers."
                },
                {
                    property: "Surface Tension (at 20°C)",
                    value: "50 dyne/cm (0.05 N/m)",
                    details: "Surface tension is the force acting on the surface of a liquid that tends to minimize its area. Water has a high surface tension (72 dyne/cm), but milk has a significantly lower value due to the presence of surface-active agents (surfactants). The primary surfactants in milk are the proteins (caseins and whey proteins) and free fatty acids, which migrate to the air-liquid interface.\n\nThe surface tension is relevant for the formation and stability of milk foam (e.g., in cappuccinos) and the efficiency of cleaning operations. A sharp decrease in surface tension (below 45 dyne/cm) is often an indicator of lipolysis (rancidity), where fats have been broken down into free fatty acids and monoglycerides, which are potent surfactants. Conversely, high surface tension makes it difficult for milk to wet surfaces, impacting the cleaning of stainless steel dairy equipment."
                },
                {
                    property: "Freezing Point",
                    value: "-0.512 to -0.575 °C",
                    details: "The freezing point is the most constant physical property of milk and is the definitive test for added water. It is a colligative property, meaning it depends solely on the *number* of solute particles in solution, not their weight. The freezing point is determined by the osmotic pressure of the milk, which the cow strictly regulates to be in equilibrium with her blood. \n\nThe main contributors to freezing point depression are lactose and soluble salts (chlorides). Fat and casein have negligible effects as they are not in true solution. The freezing point is usually measured using a Thermistor Cryoscope. If water is added to milk, the concentration of solutes decreases, and the freezing point rises closer to 0°C. For every 1% of added water, the freezing point rises by approximately 0.0055°C. Regulatory standards usually set a maximum freezing point (e.g., -0.520°C); any value 'warmer' than this suggests adulteration."
                },
                {
                    property: "Boiling Point",
                    value: "100.17 °C (at 1 atm)",
                    details: "Milk boils at a temperature slightly higher than pure water (100°C) due to the ebullioscopic constant related to its dissolved solids (lactose and salts). The boiling point elevation is small (~0.17°C) but physically significant. \n\nHowever, in industrial processing, the boiling point is manipulated using vacuum. In evaporators (used to make condensed milk or milk powder), milk is boiled at much lower temperatures (e.g., 50-60°C) by applying a partial vacuum. This is crucial because boiling milk at 100°C under atmospheric pressure causes severe thermal damage: denaturation of whey proteins, Maillard browning (caramelization), and the development of 'cooked' flavours. Therefore, while the *standard* boiling point is 100.17°C, the *process* boiling point is engineered to preserve quality."
                },
                {
                    property: "Acidity (Titratable & Natural)",
                    value: "Cow: 0.14-0.16% | Buffalo: 0.17-0.18% (as Lactic Acid)",
                    details: "It is a common misconception that fresh milk contains lactic acid. Freshly drawn milk contains *no* lactic acid. The acidity measured in fresh milk is called 'Apparent' or 'Natural' acidity. This is caused by the buffering capacity of casein micelles, citrates, phosphates, albumin, and carbon dioxide. \n\n'Real' or 'Developed' acidity occurs only when bacteria (like *Lactococcus lactis*) ferment lactose into lactic acid. In dairy processing, Titratable Acidity (TA) is a critical quality check. If the TA exceeds 0.18% for cow milk, it is typically rejected as heat stability usually compromises at this point (it will curdle upon boiling). Buffalo milk has a naturally higher buffering capacity and thus a higher natural acidity, which must be accounted for to avoid false rejections during procurement."
                },
                {
                    property: "pH (Hydrogen Ion Concentration)",
                    value: "6.5 - 6.7 (at 25°C)",
                    details: "Milk is slightly acidic. The pH represents the active acidity (concentration of H+ ions), distinct from the total titratable acidity. The pH of milk is controlled by the complex equilibrium between dissolved CO2, proteins, and phosphate/citrate salts. \n\nThe pH is a critical control point for protein stability. The isoelectric point of casein is pH 4.6; as milk sours and pH drops toward 4.6, the casein micelles lose their charge repulsion and precipitate (curdle). A pH lower than 6.5 in raw milk suggests bacterial action (souring) or the presence of colostrum. A pH higher than 6.8 is indicative of mastitis (infection), where blood components leak into the milk, making it more alkaline (closer to blood pH of 7.4). Monitoring pH is essential for cheese making, as the enzyme rennet functions optimally only within specific pH ranges."
                },
                {
                    property: "Heat Stability",
                    value: "Variable (Depends on Salt Balance)",
                    details: "Heat stability is the length of time milk can withstand high processing temperatures (e.g., 140°C) without visible coagulation. This property is vital for the manufacture of UHT (Ultra-High Temperature) milk and evaporated milk. \n\nHeat stability is not determined by acidity alone but by the 'Salt Balance'—specifically the molar ratio of Calcium + Magnesium (divalent cations) to Phosphate + Citrate (anions). If this balance is disturbed, the casein micelles become sensitive to heat and coagulate rapidly. Seasonality affects this balance (e.g., drought conditions often reduce stability). Dairy processors often perform an 'Alcohol Test' (mixing milk with 68% ethanol) as a rapid proxy for heat stability; if the milk flocculates with alcohol, it will likely fail during thermal processing."
                },
                {
                    property: "Redox Potential (Eh)",
                    value: "+0.2 to +0.3 Volts",
                    details: "The Oxidation-Reduction (Redox) potential measures the electrical balance between oxidizing and reducing agents in the milk. Fresh milk is chemically oxidized (positive Eh) due to dissolved oxygen. \n\nHowever, this potential drops significantly (becomes negative) under two conditions: 1) **Heating:** Boiling drives off oxygen and releases sulfhydryl (-SH) groups from whey proteins, which are strong reducing agents. 2) **Bacterial Growth:** Bacteria consume oxygen and produce reducing enzymes. This principle is the basis of the Methylene Blue Reduction Test (MBRT). Methylene blue is a dye that is blue in an oxidized state and colorless in a reduced state. If added to milk with a high bacterial load, the bacteria rapidly lower the Eh, turning the dye colorless quickly. Thus, the time taken for the colour change is inversely proportional to the bacterial quality of the milk."
                }
            ]
        },
        other: {
            title: "Somatic Cells, Residues & Adulterants",
            minor: {
                title: "Somatic Cell Count (SCC)",
                list: [
                    { name: "Definition", desc: "SCC comprises Leukocytes (WBCs - 75%) and Epithelial cells (25%). It is the primary indicator of udder health/Mastitis." },
                    { name: "Impact on Quality", desc: "High SCC (>400,000 cells/ml) indicates infection. Such milk has altered composition: High Na/Cl, Low Lactose/Casein, and high proteolytic enzymes (Plasmin) and Lipolytic enzymes. This leads to poor cheese yield, off-flavors (Salty/Bitter), and reduced shelf life." }
                ]
            },
            contaminants: {
                title: "Chemical Residues & Adulterants",
                p1: "Modern dairy chemistry relies on advanced chromatography (HPLC, GC-MS) to detect trace contaminants:",
                list: [
                    { name: "Antibiotics (Beta-lactams, Tetracyclines)", desc: "Residues from mastitis therapy. They inhibit starter cultures causing failure in yogurt/cheese production (Curd not setting). They pose health risks like allergy and antibiotic resistance. MRLs are strictly monitored." },
                    { name: "Aflatoxin M1", desc: "Metabolite of Aflatoxin B1 found in moldy feed (Aspergillus flavus). It is a potent, heat-stable carcinogen (Class 1). FSSAI limit: 0.5 ppb. It survives pasteurization and drying." },
                    { name: "Melamine", desc: "A nitrogen-rich industrial chemical added to falsely elevate protein readings in the Kjeldahl test. It forms insoluble Melamine-Cyanurate crystals in kidneys, causing renal failure." },
                    { name: "Neutralizers (NaOH/Carbonates)", desc: "Added to mask acidity in spoiled milk to pass the heat stability test (Clot-on-Boiling). Detected via Rosalic Acid test or Alkalinity of Ash." }
                ]
            }
        }
    }
};
