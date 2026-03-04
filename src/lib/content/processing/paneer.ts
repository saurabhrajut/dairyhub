
export const paneerProcessingContent = {
    hi: {
        mainTitle: "Industrial Paneer Production",
        description: "Advanced Process Engineering, Yield Optimization & Quality Control — Ek Scientific Reference 🧀🔬",
        backToTopics: "Topics pe Wapas Jao",
        tabs: {
            process: "Process",
            quality_control: "Quality Control",
            coagulants: "Coagulants",
            yield_texture: "Yield & Texture",
            microbiology: "Microbiology & Safety",
            nutrition: "Nutrition & Composition",
            shelf_life: "Shelf Life & Packaging",
            defects: "Defects & Troubleshooting"
        },
        topics: {
            process: {
                title: "Step-by-Step Production Process — Scientific Basis",
                description: "Ye table industrial scale pe paneer banane ka standardized procedure batata hai, FSSAI/BIS (IS 10484:1983, revised 2004) guidelines ke saath. Har step mein dairy chemistry aur engineering ka rationale diya gaya hai.",
                table: {
                    headers: ["Step No.", "Process Stage", "Key Parameters & Scientific Procedure"],
                    rows: [
                        {
                            step: 1,
                            stage: "Milk Reception & Platform Testing",
                            params: "Raw milk dairy dock pe receive hota hai aur turant platform tests kiye jaate hain: <strong>COB (Clot-on-Boiling) test</strong> high acidity detect karne ke liye (>0.20% LA), <strong>Alcohol test</strong> (68-75% ethanol) colloidal instability ke liye, <strong>Lactometer reading</strong> (1.028–1.032 g/mL cow ke liye; 1.030–1.034 g/mL buffalo ke liye) adulteration screening ke liye, aur <strong>MBRT (Methylene Blue Reduction Test)</strong> — milk ko 2 ghante se zyada mein decolorise hona chahiye (Grade I ya II). Sirf criteria pass karne wala milk accept hota hai. Agar insulated tankers mein transport kiya hai toh reception pe milk temperature ≤10°C honi chahiye."
                        },
                        {
                            step: 2,
                            stage: "Filtration & Clarification",
                            params: "Raw milk ko in-line filters (200-mesh stainless steel screens) ya centrifugal <strong>clarifier</strong> se pass kiya jaata hai jo 5,000–7,000 × g pe operate karta hai — isse somatic cells, leucocytes, sediment, aur baaki extraneous matter nikal jaata hai. 35–40°C pe clarification karne se separation efficiency improve hoti hai. Ye step total bacterial count ko lagbhag 50–90% tak reduce kar deta hai aur final paneer ki visual appearance aur microbiological quality improve karta hai."
                        },
                        {
                            step: 3,
                            stage: "Milk Standardization",
                            params: "Milk ko <strong>Fat:SNF ratio 1:1.52 se 1:1.58</strong> pe standardize kiya jaata hai (typically buffalo milk ke liye 5.8–6.0% fat aur 9.0–9.2% SNF; cow milk blends ke liye 4.5–5.0% fat aur 8.5–8.8% SNF). Standardization <strong>Pearson's Square method</strong> se ki jaati hai — whole milk ko skim milk ya cream ke saath blend karke. Casein-to-fat ratio (ideally ~0.68–0.72) body, texture, aur sliceability ko govern karta hai. Buffalo milk preferred hai (yield ~18–22% paneer vs. cow milk se ~14–16%) kyunki isme higher total solids (~17% vs. ~13%), higher casein content (~3.5% vs. ~2.5%), aur larger fat globules (avg. 5–8 μm vs. 3–4 μm) hote hain jo curd matrix mein better retain hote hain. Mixed milk (60:40 buffalo:cow) ek industrial standard hai cost optimization ke liye."
                        },
                        {
                            step: 4,
                            stage: "Pre-heating & Homogenization (Optional)",
                            params: "Cow-milk-based paneer ya blends ke liye, optional <strong>single-stage homogenization</strong> 2,500 psi (17.2 MPa) pe 60–65°C pe ki ja sakti hai. Homogenization fat globule diameter ko 3–5 μm se <1 μm tak reduce kar deta hai, fat-surface area ko ~6× badhata hai, aur ek naya fat globule membrane create karta hai jisme adsorbed casein micelles hote hain. Isse whey mein fat losses prevent hote hain (whey fat ~0.5% se ~0.15% ho jaata hai), whiteness improve hoti hai (CIE L* value 3–5 units se badhta hai), aur smoother mouthfeel milta hai. <strong>Dhyan rakhein:</strong> Buffalo milk mein over-homogenization (>3,000 psi) se excessively soft, pasty paneer ban sakta hai kyunki native fat globule structure disrupt ho jaata hai. 100% buffalo milk paneer ke liye recommended nahi hai."
                        },
                        {
                            step: 5,
                            stage: "Heat Treatment (Pasteurization / Forewarming)",
                            params: "Standardized milk ko <strong>85–90°C pe 5–10 minutes</strong> tak heat kiya jaata hai — tubular ya plate heat exchanger mein, ya double-jacketed stainless steel vat mein agitation ke saath. Ye step multiple objectives achieve karta hai: <ul><li><strong>Microbial destruction:</strong> Saare vegetative pathogens ka complete elimination (6–8 log reduction — <em>Salmonella</em>, <em>E. coli</em> O157:H7, <em>Listeria monocytogenes</em>, <em>Staphylococcus aureus</em>). Spore-forming bacteria (<em>Bacillus cereus</em>) survive karte hain lekin baad mein chilling se control ho jaate hain.</li><li><strong>Whey protein denaturation:</strong> 80°C pe lagbhag 80–90% β-lactoglobulin (β-Lg, 18.3 kDa) aur α-lactalbumin (α-La, 14.2 kDa) irreversible unfolding se guzarte hain. β-Lg ke exposed thiol groups (-SH) micelle surface pe κ-casein ke saath disulfide bridges (S-S) banate hain, jisse β-Lg–κ-casein complexes create hote hain. Ye co-precipitation yield ko <strong>5–8%</strong> tak badhata hai kyunki denatured whey proteins (~0.6–0.7% milk ka) casein gel network mein physically trap ho jaate hain, whey mein lose hone ki jagah.</li><li><strong>Enzyme inactivation:</strong> Native milk lipase (lipoprotein lipase, LPL) aur alkaline phosphatase inactivate ho jaate hain — isse lipolysis (rancid off-flavors) prevent hoti hai aur adequate heat treatment confirm hoti hai (negative phosphatase test).</li><li><strong>Calcium equilibrium shift:</strong> Heating soluble calcium ko colloidal calcium phosphate (CCP) mein convert karta hai, casein micelles ke andar isko badhata hai. Isse final curd ki firmness aur water-holding capacity (WHC) enhance hoti hai.</li></ul>"
                        },
                        {
                            step: 6,
                            stage: "Coagulation Temperature tak Cooling",
                            params: "Heated milk ko coagulation temperature <strong>70–75°C</strong> (optimum: 72°C) tak cool kiya jaata hai. Ye temperature bahut critical hai: <ul><li><65°C pe: Coagulation sluggish hota hai, curd weak aur fragile hota hai, casein aggregation incomplete rehti hai — result mein high whey losses aur crumbly texture aata hai.</li><li>70–75°C pe: Protein denaturation, calcium-mediated aggregation, aur fat entrapment ke beech optimal balance milta hai. Resulting curd ki WHC sabse zyada hoti hai.</li><li>>80°C pe: Rapid coagulation hoti hai jo hard, rubbery curd banata hai — excessive moisture expulsion hota hai; Maillard browning surface pe ho sakta hai; whey mein fat leakage badhta hai.</li></ul> Continuous systems mein, PHE (plate heat exchanger) 85–90% regeneration efficiency ke saath energy conservation ke liye use hota hai."
                        },
                        {
                            step: 7,
                            stage: "Coagulation (Acid-Induced Gelation)",
                            params: "Coagulant (typically <strong>1–2% w/v citric acid solution</strong> 70°C pe, ya sour whey 0.8–0.9% lactic acid pe) <strong>slowly aur continuously</strong> hot milk mein add kiya jaata hai — 30–40 RPM pe flat paddle se gently stir karte hue. Coagulant aise rate pe add kiya jaata hai ki milk ka pH ~6.6 se <strong>casein ke isoelectric point (pH 5.2–5.4)</strong> tak 2–3 minutes mein aa jaye. <br/><br/><strong>Mechanism:</strong> Jaise jaise pH decrease hota hai, casein micelles pe negative charge (zeta potential) neutralize hota hai (lagbhag −20 mV pH 6.6 pe se ~0 mV pH 4.6 pe). pH 5.2–5.4 pe, jo true isoelectric point (pI = 4.6) se thoda upar hai, sufficient charge neutralization ho jaata hai jisse hydrophobic interactions aur calcium-phosphate bridging dominate karte hain — rapid micellar aggregation hota hai. Fat globules physically collapsing casein network mein trap ho jaate hain. <br/><br/><strong>End-point indicators:</strong> Jab curd mass se separate hone wala whey <strong>clear aur greenish-yellow</strong> dikhe (milky ya turbid nahi) tab stirring band karo. Turbid whey ka matlab incomplete coagulation ya excess fine curd particles whey mein ja rahe hain. Curd mass ek cohesive, smooth, glossy white aggregate ki tarah dikhna chahiye. Whey pH <strong>5.2 ± 0.1</strong> read hona chahiye calibrated digital pH meter se."
                        },
                        {
                            step: 8,
                            stage: "Curd Setting & Whey Draining",
                            params: "Coagulation ke baad, curd ko vat mein <strong>5–10 minutes tak bina chhue rest</strong> karne diya jaata hai. Ye quiescent period syneresis allow karta hai — casein gel ke contract hone ki wajah se whey spontaneously bahar nikalta hai (protein–protein interactions aur gel network ke rearrangement ki wajah se). Is time mein curd contract hota hai aur whey surface pe aur curd mass ke around pool ho jaata hai. <br/><br/>Phir whey ko carefully <strong>perforated stainless steel drain plate ya muslin-lined sieve</strong> se drain kiya jaata hai. Whey volume lagbhag <strong>original milk volume ka 80–85%</strong> hota hai. Whey composition: ~93% water, 0.8–0.9% protein (mostly α-La, β-Lg, BSA, immunoglobulins, aur GMP — glycomacropeptide jo κ-casein se acid dwara release hota hai), 4.5–5.0% lactose, 0.3–0.5% fat, 0.5–0.7% minerals. Is whey ka BOD ~35,000–40,000 mg/L hota hai aur <strong>isko bina treat kiye discharge nahi karna chahiye</strong>; isko whey powder, WPC mein process kiya jaata hai, ya lactose/lactic acid production ke liye use hota hai."
                        },
                        {
                            step: 9,
                            stage: "Hooping & Pressing",
                            params: "Hot curd mass (60–65°C) ko turant <strong>food-grade stainless steel (SS 304/316) hoops ya rectangular molds</strong> mein transfer kiya jaata hai — double-layered muslin cloth (cheese cloth, ~60 threads/inch) se lined. Rapid transfer isliye zaroori hai kyunki curd ko 55°C se neeche cool nahi hona chahiye, warna fuse aur knit hone ki ability kam ho jaayegi. <br/><br/>Pressing hydraulic, pneumatic, ya screw presses se ki jaati hai — <strong>2–3 kg/cm² (196–294 kPa) pe 15–20 minutes</strong> ke liye. <br/><br/><strong>Pressing ka scientific basis:</strong> Mechanical pressure syneresis ko accelerate karta hai — casein gel matrix ko compress karke interstitial channels se whey force out hota hai. Saath hi saath, high temperature pe fat partially liquid rehta hai jo plasticizer ki tarah kaam karta hai — casein strands ko fuse hone aur smooth, continuous protein matrix banane mein madad karta hai. Yahi step paneer ke characteristic <strong>compact, non-crumbly body</strong> ko define karta hai. Excessive pressure (>4 kg/cm²) se moisture aur free fat zyada nikal jaata hai (whey fat >1% tak badh jaata hai), jisse dry, hard, low-yield product milta hai. Insufficient pressure (<1.5 kg/cm²) se open-textured, high-moisture product milta hai jo rapid spoilage ke liye susceptible hota hai."
                        },
                        {
                            step: 10,
                            stage: "Immersion Chilling",
                            params: "Pressed paneer block (internal temp ~45–55°C) ko <strong>de-hoop</strong> kiya jaata hai aur turant <strong>chilled water ya pasteurized chilled brine (2–4% NaCl, 4–6°C pe)</strong> mein <strong>2–3 ghante</strong> ke liye daal diya jaata hai. <br/><br/><strong>Scientific purpose:</strong> <ul><li><strong>Rapid cooling:</strong> Core temperature 2 ghante mein 10°C se neeche aa jaani chahiye taaki microbial danger zone (10–60°C) se bahar nikle. Cooling rate block dimensions pe depend karta hai — standard 1 kg blocks (~15 × 10 × 6 cm) se ye asaani se achieve ho jaata hai.</li><li><strong>Texture firming:</strong> Rapid cooling milk fat ko solidify kar deta hai (crystallization range 15–38°C — fatty acid profile pe depend karta hai), pliable warm curd ko firm, sliceable block mein convert karta hai. Fat crystallization protein matrix ke andar ek rigid scaffold create karta hai.</li><li><strong>Surface rind formation:</strong> Chilling se ek slightly denser outer layer (rind) banti hai jo surface moisture activity reduce karti hai — spoilage organisms ke khilaf ek mild barrier provide karti hai.</li><li><strong>Moisture equilibration:</strong> Block chilling ke dauran apne weight ka 2–5% water absorb karta hai, jo pressing losses ko compensate karta hai aur final moisture ko desired range 52–58% pe adjust karta hai.</li></ul>"
                        },
                        {
                            step: 11,
                            stage: "Cutting, Weighing & Packaging",
                            params: "Chilled paneer blocks ko nikalke SS racks pe 5–10 minutes ke liye surface-dry kiya jaata hai, phir <strong>specified retail dimensions</strong> mein cut kiya jaata hai — automated ultrasonic cutters ya wire-cutting frames se precision aur minimal product loss ke liye. Har piece ko calibrated scales pe (±1 g accuracy) weigh kiya jaata hai. <br/><br/><strong>Packaging options:</strong> <ul><li><strong>Vacuum packaging (VP):</strong> Air remove karke anaerobic environment create karta hai — oxidative rancidity aur aerobic microbial growth reduce hoti hai. Shelf life 4°C pe 20–30 days tak extend hoti hai. Residual O₂ < 1%. Packaging material: LDPE/nylon laminate (OTR < 20 cc/m²/24h).</li><li><strong>Modified Atmosphere Packaging (MAP):</strong> N₂/CO₂ mixture (typically 30:70 ya 50:50) se flush kiya jaata hai. CO₂ surface moisture mein dissolve hokar carbonic acid banata hai — surface pH lower karta hai aur Gram-negative spoilage bacteria (<em>Pseudomonas</em> spp.) inhibit karta hai. Shelf life 25–45 days tak extend hoti hai.</li><li><strong>Brine pouches:</strong> 2–4% NaCl brine mein potassium sorbate (0.1%) ke saath LDPE pouches mein pack kiya jaata hai. Traditional method; shelf life 7–15 days.</li><li><strong>Retort packaging:</strong> Paneer retortable pouches (PET/Al-foil/PP laminate) mein thermally process hota hai — 121°C pe 15–20 min (F₀ = 5–7 min). Commercial sterility achieve hoti hai; shelf life ambient temperature pe 6–12 months. Texture softer ho jaata hai aur slight browning aati hai Maillard reactions ki wajah se.</li></ul> Final product cold rooms mein <strong>2–5°C</strong> pe >85% RH ke saath store hota hai taaki surface drying prevent ho. FIFO (First In, First Out) inventory rotation mandatory hai."
                        }
                    ]
                },
                advanced_process_notes: {
                    title: "Advanced Process Engineering Notes",
                    description: "Process optimization ke liye supplementary scientific information.",
                    sections: [
                        {
                            title: "Continuous vs. Batch Processing",
                            content: "Modern large-scale dairies <strong>continuous paneer-making machines</strong> use karti hain (jaise NDRI continuous paneer plant ya Alfa Laval/Tetra Pak modular systems) — jo 5,000–10,000 L/h process kar sakti hain. Continuous systems mein milk indirect UHT-type plate heat exchangers se heat hota hai, aur coagulant inline metering pumps se precisely controlled flow ratio pe inject hota hai (typically 1:8 se 1:12 coagulant:milk volume se). Coagulum ek tubular reactor mein banta hai — residence time 30–60 seconds — phir continuous drainage belt aur pressing unit pe jaata hai. Continuous systems superior consistency dete hain (±0.5% variation moisture mein) compared to batch processing (±2–3% variation), lekin higher capital investment chahiye (₹1.5–3 Cr ek 2,000 L/h line ke liye)."
                        },
                        {
                            title: "Coagulation mein Calcium ka Role",
                            content: "Milk mein ~120 mg/dL total calcium hota hai, jisme ~65–70% colloidal hai (casein micelles se CCP ke roop mein bound — primarily Ca₉(PO₄)₆ nanoclusters) aur ~30–35% soluble hai (ionic Ca²⁺ + calcium citrate + calcium phosphate solution mein). Acid coagulation ke dauran, jaise pH 6.6 se 5.2 tak girta hai, CCP <strong>progressively solubilize</strong> hota hai — Ca²⁺ aur inorganic phosphate (Pi) serum phase mein release karte hain. pH 5.0 tak, lagbhag 100% CCP dissolve ho chuka hota hai. Casein micelles ke internal 'cement' ka ye loss micelles ko swell (hydrate) karta hai aur ultimately individual casein molecules (αS1, αS2, β, κ) mein dissociate kar deta hai. Isoelectric point pe, ye dissociated caseins <strong>hydrophobic interactions</strong> aur <strong>hydrogen bonding</strong> se aggregate hokar ek naya acid-set gel network banate hain. Ye gel cheese ke rennet-set gel se fundamentally different hai, jo CCP retain karta hai aur κ-casein ki enzymatic cleavage pe rely karta hai."
                        },
                        {
                            title: "Water Activity (aᵥ) Considerations",
                            content: "Fresh paneer ki water activity (aᵥ) <strong>0.97–0.99</strong> hoti hai, jo bahut high hai aur virtually saare foodborne pathogens aur spoilage organisms ke growth ko support karti hai. Isliye temperature control (cold chain 5°C se neeche) primary hurdle hai. aᵥ ko <0.95 tak reduce karna — partial drying, salting, ya humectant addition se — shelf life extend kar sakta hai lekin traditional sensory profile alter ho jaata hai. Reference ke liye: <em>S. aureus</em> growth minimum aᵥ = 0.83; <em>E. coli</em> = 0.95; yeasts = 0.88; molds = 0.80."
                        }
                    ]
                },
                quality_control: {
                    title: "Raw Material & In-Process Quality Control",
                    description: "Paneer ki quality directly incoming milk quality aur strict in-process controls pe depend karti hai. Industrial dairies ek tiered quality assurance (QA) system follow karti hain — incoming raw materials, processing ke dauran critical control points (CCPs), aur finished product testing — sab FSSAI standards (FSS Regulations 2011, amended 2020) aur BIS IS 10484 ke conforming.",
                    raw_milk_table: {
                        title: "Raw Milk Quality Parameters",
                        headers: ["Parameter", "Test Method", "Ideal Range (Buffalo)", "Ideal Range (Cow)", "Scientific Significance"],
                        rows: [
                            {
                                param: "Fat Content (%)",
                                method: "Gerber method (IS 1224) / Milko-Scan FTIR",
                                buffalo: "6.0 – 7.5%",
                                cow: "3.5 – 4.5%",
                                importance: "Fat casein matrix mein plasticizer ka kaam karta hai — smoothness, softness, aur flavor deta hai. Fat globules coagulation ke dauran physically trap ho jaate hain; higher fat = higher yield (lagbhag 1% milk fat badhne se ≈ 1.5–2% paneer yield badhta hai). Buffalo milk fat mein saturated fatty acids zyada hote hain (C16:0 palmitic ~30%, C18:0 stearic ~12%) — firmer fat crystals aur better body dete hain."
                            },
                            {
                                param: "SNF (Solids-Not-Fat) (%)",
                                method: "Lactometer + Fat test (IS 10083) / FTIR",
                                buffalo: "9.0 – 10.0%",
                                cow: "8.3 – 8.8%",
                                importance: "SNF mein protein (~3.3–4.5%), lactose (~4.5–5.0%), aur minerals (~0.7–0.8%) shamil hain. Protein fraction — khaas taur pe <strong>casein</strong> (αS1, αS2, β, κ-casein, jo total milk protein ka ~80% hota hai) — paneer matrix ka structural backbone banata hai. Higher casein = denser gel = firmer paneer. Lactose frying ke time Maillard browning mein contribute karta hai."
                            },
                            {
                                param: "Total Protein (%)",
                                method: "Kjeldahl (IS 1479 Part II) / Dumas combustion / FTIR",
                                buffalo: "3.8 – 4.5%",
                                cow: "3.0 – 3.5%",
                                importance: "Total protein = casein + whey proteins. Casein fraction (CN/TP ratio: buffalo mein ~80%, cow mein ~78%) primary yield-determining factor hai. 0.1% casein content badhne se paneer yield ~0.5% badhta hai. Whey proteins (~20% of TP) yield mein tabhi contribute karte hain jab high-heat treatment se denature ho jaayein."
                            },
                            {
                                param: "Titratable Acidity (% LA)",
                                method: "0.1N NaOH se Titration / Dornic method",
                                buffalo: "0.14 – 0.16%",
                                cow: "0.13 – 0.15%",
                                importance: "Freshness reflect karta hai. Fresh milk ki acidity casein, phosphates, citrates, CO₂, aur albumin ki wajah se hoti hai (natural acidity ~0.12–0.14%). Developed acidity (bacterial lactose → lactic acid fermentation se) 0.18% se upar poor hygiene ya prolonged storage indicate karti hai. High acidity (>0.20%) se <strong>premature coagulation</strong> heating ke dauran hota hai — weak curd structure, high fat loss whey mein, crumbly texture, aur sour off-flavor aata hai."
                            },
                            {
                                param: "pH",
                                method: "Digital pH meter (glass electrode, 25°C pe calibrated)",
                                buffalo: "6.6 – 6.8",
                                cow: "6.6 – 6.7",
                                importance: "pH aur titratable acidity complementary hain lekin interchangeable nahi. pH free H⁺ activity measure karta hai; TA total titratable acid measure karta hai. Buffalo milk ki buffering capacity zyada hoti hai (higher casein aur phosphate ki wajah se) — isliye cow milk ke same pH pe bhi higher TA ho sakta hai. pH < 6.4 reject hota hai."
                            },
                            {
                                param: "SPC (Standard Plate Count)",
                                method: "PCA pe pour plate, 37°C/48h (IS 5402)",
                                buffalo: "< 2 × 10⁵ CFU/mL",
                                cow: "< 2 × 10⁵ CFU/mL",
                                importance: "Overall microbiological quality aur milking, handling, aur transport ke dauran hygiene indicate karta hai. High SPC (>5 × 10⁵) zyada protease aur lipase production se correlate karta hai — jo final paneer mein off-flavors, bitterness, aur rancidity cause kar sakte hain, pasteurization ke baad bhi (psychrotrophs jaise <em>Pseudomonas fluorescens</em> ke heat-stable bacterial enzymes)."
                            },
                            {
                                param: "Somatic Cell Count (SCC)",
                                method: "Fossomatic FC / direct microscopic SCC (DMSCC)",
                                buffalo: "< 3 × 10⁵ cells/mL",
                                cow: "< 2 × 10⁵ cells/mL",
                                importance: "Elevated SCC (>5 × 10⁵) subclinical mastitis indicate karta hai. Mastitic milk ki composition altered hoti hai: ↑ whey proteins (especially BSA aur Ig), ↑ Na⁺ aur Cl⁻, ↓ casein, ↓ lactose, ↓ calcium, ↑ plasmin activity (jo β-casein ko γ-caseins + proteose-peptones mein degrade karta hai). Isse <strong>poor coagulation</strong> hota hai, soft/weak curd, reduced yield (5–15% loss), aur bitter off-flavors aate hain."
                            },
                            {
                                param: "Antibiotic Residues",
                                method: "Charm/Delvotest/SNAP (screening); HPLC (confirmation)",
                                buffalo: "MRL se neeche (jaise β-lactam <4 ppb)",
                                cow: "MRL se neeche (FSSAI limits)",
                                importance: "Antibiotics (β-lactams, tetracyclines, sulfonamides, aminoglycosides) ki presence Maximum Residue Limits (MRLs) se upar food safety regulations ka violation hai. Ye sour whey preparation ke liye starter cultures ko bhi interfere karte hain aur public health risks pose karte hain (allergies, AMR). Positive test wala milk <strong>reject</strong> hota hai."
                            },
                            {
                                param: "Adulterants",
                                method: "Qualitative tests: starch (iodine test), urea (DMAB test), neutralizers (rosalic acid test), detergent (methylene blue test), H₂O₂ (KI-starch test)",
                                buffalo: "Absent",
                                cow: "Absent",
                                importance: "Indian milk supply chains mein common adulterants: water (freezing point depression < −0.525°C ya density anomalies se detect), urea (apparent SNF badhata hai; >70 ppm adulteration indicate karta hai), starch, cane sugar, sodium chloride, sodium bicarbonate/carbonate (neutralizers jo developed acidity mask karte hain), aur detergent/hydrogen peroxide (preservatives). Koi bhi adulteration hone pe <strong>rejection</strong> hota hai."
                            },
                            {
                                param: "Freezing Point (°C)",
                                method: "Thermistor cryoscope (IS 1479 Part III)",
                                buffalo: "−0.547 se −0.560°C",
                                cow: "−0.525 se −0.540°C",
                                importance: "Genuine milk ka freezing point dissolved lactose aur minerals ki wajah se 0°C se neeche rehta hai (colligative property). Water addition se freezing point 0°C ki taraf badh jaata hai. −0.510°C se upar (cow) ya −0.530°C (buffalo) se upar ka value water adulteration strongly suggest karta hai. Har 1% added water FP ko ~0.0054°C se raise karta hai."
                            }
                        ]
                    },
                    in_process_table: {
                        title: "In-Process Quality Control (Critical Control Points)",
                        headers: ["CCP/Stage", "Monitored Parameter", "Target Value", "Monitoring Method", "Corrective Action"],
                        rows: [
                            {
                                stage: "Milk Heating",
                                param: "Temperature / Time",
                                target: "85–90°C / 5–10 min",
                                method: "Inline RTD sensor + chart recorder / SCADA",
                                action: "Agar temp < 82°C ya hold time < 5 min → re-pasteurize karo. PHE gaskets, steam supply, flow diversion valve (FDV) check karo."
                            },
                            {
                                stage: "Coagulation",
                                param: "Endpoint pe Whey pH",
                                target: "5.2 ± 0.1",
                                method: "Digital pH meter (har batch check karo)",
                                action: "Agar pH > 5.5 → thoda aur coagulant slowly add karo. Agar pH < 4.8 → coagulant over-addition; batch sour, crumbly paneer dega. Subsequent batches ke liye coagulant flow rate adjust karo."
                            },
                            {
                                stage: "Coagulation",
                                param: "Coagulation temperature",
                                target: "70–75°C",
                                method: "Thermometer / RTD probe vat mein",
                                action: "Agar temp < 65°C → coagulant add karne se pehle gently reheat karo. Agar temp > 80°C → target range tak cool karo."
                            },
                            {
                                stage: "Pressing",
                                param: "Pressure & Duration",
                                target: "2–3 kg/cm² / 15–20 min",
                                method: "Press pe pressure gauge / timer",
                                action: "Pressure regulator adjust karo. Muslin cloth clogging ke liye inspect karo."
                            },
                            {
                                stage: "Chilling",
                                param: "Water temperature; chilling ke baad block ka core temp",
                                target: "Water: 4–6°C; Core: 2 ghante mein <10°C",
                                method: "Water bath mein thermometer; paneer block mein probe thermometer",
                                action: "Agar water temp > 8°C → ice add karo ya chiller compressor check karo. Agar core temp achieve nahi hua → chilling time extend karo ya block size reduce karo."
                            },
                            {
                                stage: "Packaging",
                                param: "Vacuum level (VP); gas composition (MAP); seal integrity",
                                target: "VP: residual O₂ < 1%; MAP: CO₂ 30±5%, N₂ 70±5%; seal: no leaks",
                                method: "O₂/CO₂ analyzers (jaise Dansensor CheckMate); seals ke liye dye penetration/bubble leak test",
                                action: "Gas mixer re-calibrate karo; sealing jaws replace karo; leaky packs reject karo."
                            }
                        ]
                    },
                    finished_product_table: {
                        title: "Finished Product Specifications (FSSAI & IS 10484 ke anusar)",
                        headers: ["Parameter", "FSSAI/BIS Standard", "Typical Value (Buffalo Milk Paneer)", "Test Method"],
                        rows: [
                            { param: "Moisture (% max)", standard: "≤ 60%", typical: "52–58%", method: "102°C ± 2°C pe oven drying constant weight tak (IS 12291)" },
                            { param: "Fat on Dry Matter (% min)", standard: "≥ 50%", typical: "52–58%", method: "Dissolved paneer sample pe Gerber method (IS 2785)" },
                            { param: "Titratable Acidity (% LA, max)", standard: "≤ 0.5%", typical: "0.30–0.45%", method: "Paneer homogenate ka 0.1N NaOH se titration" },
                            { param: "Total Plate Count (CFU/g, max)", standard: "≤ 5 × 10⁴", typical: "10³–10⁴", method: "PCA pe pour plate, 37°C/48h" },
                            { param: "Coliform Count (CFU/g, max)", standard: "≤ 10", typical: "< 10", method: "VRBA pe pour plate, 37°C/24h" },
                            { param: "Yeast & Mold (CFU/g, max)", standard: "≤ 50", typical: "< 25", method: "Chloramphenicol wale PDA pe spread plate, 25°C/5d" },
                            { param: "E. coli", standard: "1 g mein Absent", typical: "Absent", method: "Enrichment + selective plating (EMB / CT-SMAC)" },
                            { param: "Salmonella spp.", standard: "25 g mein Absent", typical: "Absent", method: "ISO 6579 / BAM method / PCR" },
                            { param: "Listeria monocytogenes", standard: "25 g mein Absent", typical: "Absent", method: "ISO 11290 / ALOA agar / PCR" },
                            { param: "Staphylococcal enterotoxin", standard: "Not detectable", typical: "ND", method: "ELISA / RPLA" },
                            { param: "Lead (mg/kg, max)", standard: "≤ 0.5", typical: "< 0.05", method: "AAS / ICP-MS (IS 5765)" },
                            { param: "Aflatoxin M1 (μg/kg, max)", standard: "≤ 0.5", typical: "< 0.1", method: "Fluorescence ke saath HPLC / ELISA" },
                            { param: "Pesticide Residues", standard: "MRL ke andar (FSS Contaminants Regulations)", typical: "LOD se neeche", method: "GC-MS/MS, LC-MS/MS (multi-residue method)" }
                        ]
                    },
                    sensory_evaluation: {
                        title: "Sensory Evaluation Parameters",
                        description: "Trained sensory panels paneer ko 9-point hedonic scale pe ya descriptive analysis (DA) se specific attributes ke saath evaluate karte hain:",
                        attributes: [
                            { name: "Appearance", criteria: "Smooth, uniform surface; white se light cream color (CIE L* > 88, a* < 1.0, b* 10–15); koi cracks, pinholes, ya surface sliminess nahi." },
                            { name: "Body & Texture", criteria: "Firm, compact, cohesive; cutting pe smooth (clean-cut surface, koi crumbling nahi); compress karne pe slightly spongy; koi graininess, rubberiness, ya pastiness nahi." },
                            { name: "Flavor & Aroma", criteria: "Mild, pleasant acidic flavor; characteristic cooked-milk aroma; koi bitterness, rancidity, sourness, ya foreign/metallic off-flavors nahi." },
                            { name: "Mouthfeel", criteria: "Smooth; chewing pe partially melt hota hai; excessively chewy, gritty, ya sticky nahi." }
                        ]
                    }
                },
                coagulants: {
                    title: "Coagulants: Types, Mechanism & Optimization",
                    description: "Coagulant arguably single most important variable hai (milk composition ke baad) jo paneer quality determine karta hai. Paneer production <strong>acid coagulation</strong> pe rely karta hai — casein micelle system ko pH lower karke isoelectric point (whole casein ka pI = 4.6; paneer ke liye operational target = pH 5.2–5.4) ki taraf destabilize karna. Cheese ke unlike, koi enzymatic (rennet) coagulation involved nahi hai.",
                    mechanism_detail: {
                        title: "Acid Coagulation ka Mechanism — Detail mein",
                        content: "Native milk pH (~6.7) pe, casein micelles ek net negative surface charge carry karte hain (zeta potential ≈ −20 mV), jo κ-casein ke protruding 'hairy' layer — C-terminal glycomacropeptide (GMP, residues 106–169) — dwara maintain hota hai. Ye charge, GMP brush layer ki steric repulsion aur micelle surface ki hydration ke saath milke, micelles ko stable colloidal suspension mein rakhta hai. <br/><br/>Jaise acid add hota hai aur pH girta hai: <ol><li><strong>pH 6.7 → 6.0:</strong> Colloidal calcium phosphate (CCP) dissolve hona shuru hota hai (Ca₉(PO₄)₆ → 9Ca²⁺ + 6PO₄³⁻). Micelles swell hone lagte hain kyunki internal structural 'nanoclusters' lost ho rahe hain. Electrostatic repulsion dheere dheere decrease hota hai.</li><li><strong>pH 6.0 → 5.5:</strong> Extensive CCP dissolution. Micelles structural calcium se depleted ho jaate hain. Individual caseins (αS1, αS2, β, κ) micelle se serum mein dissociate hona shuru karte hain. β-casein, sabse zyada hydrophobic aur temperature-sensitive hone ki wajah se, low temperatures pe significantly dissociate hota hai lekin >20°C pe associated rehta hai.</li><li><strong>pH 5.5 → 5.0:</strong> Charge neutralization zone. Casein pe net negative charge zero ke paas aa jaata hai. Caseins ke exposed non-polar domains ke beech hydrophobic interactions dominant ho jaate hain — rapid aggregation hota hai. 70–75°C ke coagulation temperature pe, hydrophobic interactions maximize hote hain (kyunki ye entropy-driven hain aur increasing temperature ke saath strengthen hote hain). Isse ek strong, cohesive gel produce hota hai.</li><li><strong>pH 5.0 → 4.6 (pI):</strong> Complete charge neutralization. Maximum aggregation. Paneer mein, hum pH 4.6 tak NAHI jaate — hum 5.2–5.4 pe rok dete hain kyunki: (a) is pH pe curd mein sufficient firmness aur cohesion hoti hai; (b) aur neeche jaane se paneer excessively acidic ho jaata hai (sour taste), excessive moisture expulsion hota hai (dry, hard texture), aur whey mein calcium loss badhta hai (curd weak hota hai).</li></ol>"
                    },
                    types: [
                        {
                            name: "Citric Acid (C₆H₈O₇ · H₂O, MW 210.14)",
                            details: "<strong>Preparation:</strong> 1–2% w/v solution (10–20 g anhydrous citric acid per litre water mein 70–80°C pe). Food-grade citric acid use karo (INS 330, E330), ≥99.5% purity (IP/USP/FCC grade). <br/><br/><strong>Dosage:</strong> Lagbhag 2.0–2.5 g citric acid per litre milk (milk ki buffering capacity pe vary karta hai). Buffalo milk ko cow milk se 10–15% zyada coagulant chahiye higher buffering capacity ki wajah se (higher casein aur phosphate). <br/><br/><strong>pKa values:</strong> pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40. Operational pH 5.2 pe, citric acid predominantly citrate²⁻ aur H-citrate²⁻ species ke roop mein exist karta hai. Iski triprotic nature target pH ke around <strong>excellent buffering action</strong> provide karti hai — pH 5.2 ko approach karna overshoot kiye bina easier ho jaata hai. <br/><br/><strong>Fayde:</strong> Clean, mildly tart flavor; excellent reproducibility; easy concentration standardization; calcium chelate karta hai (calcium citrate bana ke) — texture thoda soften kar sakta hai; globally available aur inexpensive. <br/><br/><strong>Nuksan:</strong> Over-addition (pH < 5.0) → sour, crumbly paneer poor body ke saath."
                        },
                        {
                            name: "Acetic Acid / Vinegar (CH₃COOH, MW 60.05)",
                            details: "<strong>Preparation:</strong> Glacial acetic acid (food-grade, E260) ko 1–2% v/v tak dilute karo; YA commercial white vinegar (~4–6% acetic acid) ko 1:2 water mein dilute karo. <br/><br/><strong>pKa:</strong> 4.76 (monoprotic). Monoprotic hone ki wajah se, acetic acid citric acid se kam buffering provide karta hai — pH overshoot zyada likely hota hai. Zyada careful addition rate control chahiye. <br/><br/><strong>Dosage:</strong> ~3–4 mL glacial acetic acid per litre milk. <br/><br/><strong>Fayde:</strong> Asaani se available, inexpensive, effective. <br/><br/><strong>Nuksan:</strong> Detectable acetic/vinegar-like aroma de sakta hai (volatile acid, bp 118°C — coagulation temperature pe partially release hota hai); monoprotic nature ki wajah se endpoint pH precisely control karna zyada mushkil hai; kuch studies thoda different curd microstructure report karti hain (larger whey pockets ke saath slightly zyada open texture). Generally Indian industry mein citric acid ke baad <strong>second choice</strong> mana jaata hai."
                        },
                        {
                            name: "Lactic Acid (CH₃CHOHCOOH, MW 90.08)",
                            details: "<strong>Preparation:</strong> Food-grade 88% L(+)-lactic acid (E270) ko 1–2% w/v tak dilute karo. <br/><br/><strong>pKa:</strong> 3.86 (monoprotic). Acetic se stronger acid; careful dosing chahiye. <br/><br/><strong>Fayde:</strong> Milk fermentation ka 'natural' acid; sabse authentic, traditional flavor profile produce karta hai. Calcium lactate banata hai jiska moderate solubility hai — intermediate curd firmness aata hai. Kuch studies (Sachdeva & Singh, 1988; NDRI Karnal) citric acid ke comparison mein lactic acid se slightly higher yield (+1–2%) report karti hain — finer, zyada uniform curd particles jo better whey protein retain karte hain. <br/><br/><strong>Nuksan:</strong> Citric acid se zyada mehnga; over-acidification se bachne ke liye precise metering chahiye."
                        },
                        {
                            name: "Tartaric Acid (C₄H₆O₆, MW 150.09)",
                            details: "<strong>Preparation:</strong> Food-grade L(+)-tartaric acid (E334) ka 1–2% w/v solution. <br/><br/><strong>pKa values:</strong> pKa₁ = 2.89, pKa₂ = 4.34. Diprotic acid, citric se stronger. <br/><br/><strong>Usage:</strong> Industrially kam common; kabhi kabhi research settings mein use hota hai. Acha body aur slightly different flavor profile wala paneer produce karta hai. Calcium tartrate ki low solubility hai aur excessively use karne pe fine crystals ('wine diamonds') ke roop mein precipitate ho sakta hai — graininess cause karta hai."
                        },
                        {
                            name: "Sour Whey (Cultured Whey)",
                            details: "<strong>Preparation:</strong> Previous paneer batch ka whey 30–37°C pe 12–24 ghante incubate kiya jaata hai — residual LAB (Lactobacillus, Lactococcus) se lactic acid develop hoti hai. Target acidity: <strong>0.8–1.0% lactic acid</strong> (pH ~3.8–4.2). Alternatively, fresh whey ko defined LAB starter culture (jaise <em>Lactobacillus delbrueckii</em> ssp. <em>bulgaricus</em>) se inoculate kiya ja sakta hai — zyada consistent results ke liye. <br/><br/><strong>Dosage:</strong> Milk volume ka ~25–30% (dilute acid content ki wajah se high volume chahiye). <br/><br/><strong>Fayde:</strong> Traditional, economical (waste stream utilize hota hai), softer paneer produce karta hai characteristic 'dahi-like' aroma ke saath (diacetyl, acetaldehyde, aur baaki LAB metabolites ki wajah se). <br/><br/><strong>Nuksan:</strong> Batches ke beech <strong>inconsistent acid strength</strong> (LAB activity, temperature, holding time pe depend karta hai); LAB pe bacteriophage attack ka risk; agar fermentation conditions controlled nahi toh pathogenic ya spoilage organisms se contamination ka risk; milk solids ka dilution (yield thoda kam hota hai); slow acid delivery ki wajah se longer coagulation process."
                        },
                        {
                            name: "Calcium Chloride (CaCl₂ · 2H₂O, MW 147.01)",
                            details: "<strong>Role:</strong> <strong>Primary coagulant nahi hai</strong> — <strong>coagulation aid / calcium fortifier</strong> ke roop mein use hota hai. <br/><br/><strong>Preparation & Dosage:</strong> Milk ka 0.01–0.02% w/v (100–200 mg/L) water mein dissolve karke, milk mein heating se pehle ya coagulant addition se kam se kam 15 minutes pehle add karo. Maximum permitted: 0.02% (200 ppm) FSSAI/Codex ke anusar. <br/><br/><strong>Mechanism:</strong> Serum phase mein ionic Ca²⁺ concentration badhata hai, jisse: (1) acid coagulation ke dauran faster aur firmer casein aggregation hota hai (Ca²⁺ negatively charged casein molecules ke beech cross-bridging agent ka kaam karta hai), (2) pasteurization se disrupted calcium equilibrium partially restore hota hai (heating ~5–10% soluble Ca²⁺ ko insoluble CCP mein convert kar deta hai — coagulability reduce hoti hai), (3) water-holding capacity aur yield ~1–3% improve hota hai (zyada complete protein aggregation, whey mein kam protein loss). <br/><br/><strong>Khaas taur pe useful:</strong> Cow milk (buffalo se kam native calcium), UHT-treated milk, late-lactation cows ka milk (kam Ca²⁺), aur stored/cold-stored milk ke liye. <br/><br/><strong>Dhyan rakhein:</strong> Excess CaCl₂ (>0.04%) se excessively hard/rubbery curd, bitter flavor (CaCl₂ inherently bitter hai), aur calcium phosphate precipitates (white specks) ho sakte hain."
                        },
                        {
                            name: "Glucono-Delta-Lactone (GDL, C₆H₁₀O₆, MW 178.14)",
                            details: "<strong>Mechanism:</strong> GDL (E575) ek cyclic ester hai jo water mein slowly hydrolyze hokar gluconic acid produce karta hai. Ye slow, uniform acid release bahut even coagulation provide karta hai — exceptionally <strong>smooth, silky, aur uniform</strong> curd structure produce karta hai. <br/><br/><strong>Dosage:</strong> Milk ka 0.3–0.5% w/w. <br/><br/><strong>Fayde:</strong> Saare acid coagulants mein sabse homogeneous gel deta hai; koi pH overshoot risk nahi; bahut mild, clean flavor (gluconic acid ek weak acid hai, pKa = 3.86). East Asia mein tofu production ke liye use hota hai aur paneer ke liye increasingly research ho rahi hai. <br/><br/><strong>Nuksan:</strong> Slow coagulation (70°C pe 20–30 minutes vs. citric acid ke 2–3 minutes); higher cost; India mein limited availability; traditional nahi hai."
                        }
                    ],
                    comparison_table: {
                        title: "Coagulants ka Comparative Summary",
                        headers: ["Coagulant", "Type", "pKa(s)", "Per L Milk Dose", "Coagulation Speed", "Flavor Impact", "Texture Impact", "Yield Impact", "Industrial Preference"],
                        rows: [
                            { coagulant: "Citric acid", type: "Triprotic organic acid", pka: "3.13, 4.76, 6.40", dose: "2.0–2.5 g", speed: "Fast (2–3 min)", flavor: "Clean, mild tart", texture: "Smooth, firm", yield: "Baseline (reference)", preference: "⭐⭐⭐⭐⭐ (#1)" },
                            { coagulant: "Lactic acid", type: "Monoprotic organic acid", pka: "3.86", dose: "2.5–3.0 mL (88%)", speed: "Fast", flavor: "Natural, mild sour", texture: "Smooth, slightly softer", yield: "+1–2%", preference: "⭐⭐⭐" },
                            { coagulant: "Acetic acid", type: "Monoprotic organic acid", pka: "4.76", dose: "3–4 mL (glacial)", speed: "Fast", flavor: "Vinegar note possible", texture: "Slightly open", yield: "Comparable", preference: "⭐⭐⭐" },
                            { coagulant: "Tartaric acid", type: "Diprotic organic acid", pka: "2.89, 4.34", dose: "2.0–2.5 g", speed: "Fast", flavor: "Slightly tart", texture: "Firm, grainy ho sakta hai", yield: "Comparable", preference: "⭐⭐" },
                            { coagulant: "Sour whey", type: "Mixed organic acids", pka: "Variable", dose: "250–300 mL", speed: "Moderate", flavor: "Traditional, dahi-like", texture: "Soft, traditional", yield: "−1–3% (dilution)", preference: "⭐⭐⭐ (traditional)" },
                            { coagulant: "GDL", type: "Lactone → gluconic acid", pka: "3.86 (gluconic)", dose: "3–5 g", speed: "Slow (20–30 min)", flavor: "Bahut clean, neutral", texture: "Bahut smooth, silky", yield: "+2–3%", preference: "⭐⭐ (emerging)" },
                            { coagulant: "CaCl₂", type: "Coagulation aid (salt)", pka: "N/A", dose: "0.1–0.2 g", speed: "N/A (adjunct)", flavor: "Excess mein bitter", texture: "Firmer curd", yield: "+1–3%", preference: "⭐⭐⭐⭐ (adjunct)" }
                        ]
                    }
                },
                yield_texture: {
                    title: "Yield Optimization & Texture Science",
                    yield: {
                        title: "Paneer Yield — Calculation & Optimization",
                        description: "Yield paneer manufacturing mein sabse critical economic parameter hai. Isko define kiya jaata hai — kitna mass paneer mila per unit mass processed milk se.",
                        formulas: {
                            title: "Yield Calculation Formulas",
                            content: "<strong>1. Actual Yield (%):</strong><br/> <code>Yield (%) = (Paneer ka mass / Milk ka mass) × 100</code><br/><br/><strong>2. Adjusted Yield (reference moisture pe standardized):</strong><br/> <code>Adjusted Yield = Actual Yield × (100 − Actual Moisture%) / (100 − Reference Moisture%)</code><br/>Reference moisture typically 55% hota hai. Isse varying moisture content wale batches ka fair comparison ho sakta hai.<br/><br/><strong>3. Theoretical Maximum Yield (Van Slyke-type estimate paneer ke liye):</strong><br/> <code>Y_theoretical ≈ [(Fat × R_f) + (Casein × R_cn) + (Denatured WP × R_wp)] / (1 − M/100)</code><br/>Jahan R_f = fat recovery factor (~0.90–0.93), R_cn = casein recovery (~0.95–0.97), R_wp = whey protein recovery (~0.40–0.80 heat treatment pe depend karta hai), M = target moisture (%). <br/><br/><strong>Typical industrial yields:</strong><br/> Buffalo milk (6.5% fat, 9.5% SNF): <strong>18–22%</strong><br/> Cow milk (4.0% fat, 8.5% SNF): <strong>14–16%</strong><br/> Mixed milk (60:40 B:C): <strong>16–19%</strong>"
                        },
                        methods: [
                            {
                                method: "Optimal Heat Treatment (85–90°C / 5–10 min)",
                                detail: "<strong>Mechanism:</strong> β-Lactoglobulin (β-Lg, 18.3 kDa, milk mein 2–4 g/L) ka denaturation temperature ~78°C hai. 85–90°C pe, lagbhag 80–90% β-Lg unfold ho jaata hai — apna single free thiol group (Cys-121) aur hydrophobic core expose karta hai. Exposed thiol casein micelle surface pe κ-casein (Cys-11—Cys-88 ya Cys-88—Cys-11) ke saath thiol-disulfide exchange reaction initiate karta hai — covalent β-Lg–κ-casein complexes bante hain. α-Lactalbumin (α-La, 14.2 kDa, 1–1.5 g/L) bhi denature hota hai lekin aggregation ke liye β-Lg ki presence chahiye (α-La mein free thiol nahi hota). Ye denatured whey proteins acid casein gel mein physically incorporate ho jaate hain — total solids recovery <strong>5–8%</strong> badhati hai. Underheating (72°C/15s, standard HTST) sirf ~10–15% β-Lg denature karta hai — significant whey protein loss aur lower yield. UHT treatment (138°C/2–4s) >95% whey proteins denature karta hai lekin 'cooked' flavor aur slight browning de sakta hai."
                            },
                            {
                                method: "Optimal Coagulation pH (5.2 ± 0.1)",
                                detail: "<strong>Mechanism:</strong> pH 5.2 pe, casein ka minimal net charge hota hai (pI = 4.6 approach karte hue lekin abhi slightly negative) — maximum hydrophobic-driven aggregation allow hota hai jabki enough residual calcium bridges structural integrity ke liye bache rehte hain. pH > 5.5 pe, insufficient charge neutralization → incomplete coagulation → whey mein protein loss → reduced yield. pH < 4.8 pe, excessive acid → excessive moisture expulsion (syneresis), calcium solubilization, aur crumbly, acidic product — paradoxically lower yield despite complete protein precipitation (kyunki moisture loss protein gain se zyada hota hai). Research (Kumar et al., 2014, J. Food Sci. Technol.) dikhata hai ki yield pH 5.2–5.3 pe sharply peak karta hai aur pH 5.0 ya pH 5.5 pe 2–4% girta hai."
                            },
                            {
                                method: "Coagulation Temperature (70–75°C, optimum 72°C)",
                                detail: "Temperature coagulation ki rate aur gel ki microstructure dono ko affect karta hai. 70–75°C pe: <strong>Hydrophobic interactions</strong> (jo temperature ke saath strengthen hote hain) maximize hote hain — dense, compact gel produce hota hai jo effectively fat aur moisture entrap karta hai. Fat partially liquid hota hai (apne crystallization range ke upar) — filler aur plasticizer ka kaam karta hai. <60°C pe: Hydrophobic interactions weaker hote hain; curd soft, fragile, aur handling ke dauran shattering prone hota hai; fat solidify hona shuru hota hai aur poorly integrated hota hai. >80°C pe: Coagulation bahut rapid ('flash set') hota hai; curd dense aur rubbery hota hai; whey mein excessive fat expression; potential Maillard browning."
                            },
                            {
                                method: "Gentle Stirring Protocol",
                                detail: "Coagulant addition ke dauran stirring acid ko uniformly distribute karne aur localized over-acidification prevent karne ke liye hota hai. Lekin stirring shear rate (γ̇) controlled hona chahiye. <strong>Recommended: 30–40 RPM flat paddle stirrer se (γ̇ < 50 s⁻¹)</strong>. Vigorous stirring (>100 RPM, γ̇ > 200 s⁻¹) nascent gel ko fine curd particles (fines) mein fracture kar deta hai — jo drainage cloth se pass hokar whey mein chale jaate hain: (1) 2–5% yield loss, (2) turbid whey (high fat aur protein content), (3) pressing ke dauran cohesive block banane mein difficulty. Jab clear whey dikhe tab stirring band karo."
                            },
                            {
                                method: "Controlled Pressing (2–3 kg/cm², 15–20 min)",
                                detail: "Pressing ke do functions hain: (1) entrapped whey ka mechanical expulsion (syneresis), aur (2) individual curd particles ka ek smooth, continuous block mein fusion (curd knitting). Curd particles ki surface pe casein strands, abhi bhi hot aur pliable hone ki wajah se, pressure mein merge hokar naye protein–protein junctions banate hain. <strong>Over-pressing (>4 kg/cm² ya >30 min):</strong> Excessive moisture (48% se neeche girta hai) aur free fat squeeze out hota hai (whey fat >1% tak badh jaata hai) — hard, dry, low-yield product milta hai. <strong>Under-pressing (<1.5 kg/cm² ya <10 min):</strong> Insufficient whey expulsion (moisture >62%) aur poor particle fusion → open, crumbly texture visible curd grain boundaries ke saath, aur high aᵥ ki wajah se shortened shelf life."
                            },
                            {
                                method: "Whey Protein Concentrate (WPC) Fortification",
                                detail: "<strong>Method:</strong> WPC-35 (35% protein) ya WPC-80 (80% protein) powder reconstitute karke heat treatment se pehle milk mein add karo — <strong>milk ka 0.5–2.0% w/v</strong> rate pe. Phir milk ko 85–90°C pe heat karo — isse added whey proteins denature ho jaate hain aur coagulation ke dauran casein ke saath co-precipitate hote hain. <br/><br/><strong>Results:</strong> 1% WPC addition se yield <strong>5–8%</strong> badhta hai aur 2% pe <strong>10–15%</strong> (Kanawjia & Singh, 2000, Indian J. Dairy Sci.). Paneer softer hota hai aur improved water-holding capacity milti hai. Nutritional value enhance hoti hai (higher biological value protein). <br/><br/><strong>Regulatory status:</strong> FSSAI milk-derived ingredients ki addition permit karta hai; label pe declare karna zaroori hai. <br/><br/><strong>Limitation:</strong> Excessive WPC (>3%) se pasty, sticky texture aur 'whey' flavor aa sakta hai."
                            },
                            {
                                method: "Milk Protein Concentrate (MPC) / Skim Milk Powder (SMP) Addition",
                                detail: "Milk mein SMP (0.5–1.5%) ya MPC-70/80 (0.3–1.0%) add karne se total solids aur casein content badhta hai. Ye essentially ek 'enrichment' approach hai — curd-forming solids ki concentration badhana. MPC SMP se preferred hai kyunki isme higher casein:whey protein ratio aur lower lactose content hota hai. <strong>Yield increase: 3–8%</strong> dosage pe depend karta hai. Heat treatment se pehle add karna chahiye aur completely dissolve hona chahiye — warna graininess aa sakti hai."
                            },
                            {
                                method: "Ultrafiltration (UF) of Milk",
                                detail: "Coagulation se pehle milk ko UF se pre-concentrate karna (MWCO 10–25 kDa membranes use karke) <strong>2× se 3× concentration</strong> tak (protein ~3.5% se 7–10% tak badhana). UF casein micelles aur fat globules ko retentate mein retain karta hai jabki water, lactose, aur soluble minerals permeate ho jaate hain. Concentrated retentate ko kam coagulant chahiye, zyada cohesive curd produce hota hai, aur throughput dramatically badhta hai (same mass paneer chhoti volume retentate se). <strong>Yield improvement: conventional process se 10–15%</strong> (Rao et al., 1992). Uniformity bhi improve hoti hai aur whey volume reduce hota hai (environmental benefit). Capital-intensive hai lekin large dairies mein increasingly adopt ho raha hai."
                            },
                            {
                                method: "Calcium Chloride Addition (0.01–0.02%)",
                                detail: "Jaise Coagulants section mein describe kiya hai. Pasteurization mein lost calcium restore karta hai, firmer curd promote karta hai, whey mein protein loss reduce karta hai. <strong>Yield increase: 1–3%.</strong>"
                            }
                        ]
                    },
                    safeIncreasers: {
                        title: "Safe & Permitted Yield Enhancers / Texture Modifiers",
                        description: "Neeche diye gaye additives scientifically validated hain, consumption ke liye safe hain, aur generally food regulatory authorities (FSSAI, FDA, Codex Alimentarius) dwara permitted hain — lekin labeling requirements follow karni zaroori hain.",
                        items: [
                            {
                                name: "Whey Protein Concentrate (WPC-35/80)",
                                detail: "Upar cover kiya hai. Protein content aur yield badhata hai. Softness aur nutritional quality improve karti hai. Dose: milk ka 0.5–2.0% w/v."
                            },
                            {
                                name: "Sodium Caseinate",
                                detail: "Casein ka sodium salt; water mein highly soluble. Milk mein 0.2–0.5% pe add hota hai. Effective casein concentration badhata hai, fat ka emulsification improve karta hai, aur curd matrix ko strengthen karta hai. Yield 2–4% improve kar sakta hai. Label pe declare karna zaroori hai."
                            },
                            {
                                name: "Food-grade Hydrocolloids / Stabilizers",
                                detail: "<ul><li><strong>Carrageenan (κ- ya ι-carrageenan, E407):</strong> Red seaweed se ek sulfated galactan. κ-casein ke saath electrostatic attraction se interact karta hai — apne sulfate groups (SO₃⁻) aur casein pe positive patches ke beech. Casein matrix ke andar ek secondary gel network banata hai — firmness aur moisture retention badhata hai. Dose: milk ka 0.01–0.05%. Yield 3–5% badh sakta hai.</li><li><strong>Guar gum (E412):</strong> Galactomannan polysaccharide. Entrapped whey phase ki viscosity badhata hai — syneresis reduce karta hai. Dose: 0.05–0.1%. Softness aur moisture retention improve karta hai.</li><li><strong>Sodium alginate (E401):</strong> Brown seaweed se mannuronic aur guluronic acid ka linear copolymer. Ca²⁺ ke saath cross-link hokar 'egg-box' gel banata hai. Dose: 0.05–0.1%. Sliceability aur moisture retention improve karta hai.</li><li><strong>CMC (Carboxymethyl cellulose, E466):</strong> Anionic cellulose derivative. Water binder ka kaam karta hai. Dose: 0.05–0.15%. Storage ke dauran moisture loss reduce karta hai.</li></ul><strong>Note:</strong> FSSAI certain stabilizers/emulsifiers ko prescribed limits mein dairy products mein permit karta hai. Manufacturer ko current regulations verify karne chahiye aur ingredients declare karne chahiye."
                            },
                            {
                                name: "Emulsifying Salts",
                                detail: "<strong>Trisodium citrate (E331iii):</strong> Milk ka 0.5–1.0% pe, trisodium citrate calcium chelate karta hai — casein micelles ke andar CCP ko partially disrupt karta hai. Isse casein structure soften hota hai — paneer ki smooth-melting quality aur moisture retention improve hoti hai. Processed paneer / paneer-based spreads mein zyada commonly use hota hai. <br/><br/><strong>Disodium hydrogen phosphate (E339ii):</strong> Similar calcium-chelating action. Dose: 0.1–0.3%. Smoothness improve karta hai aur cold storage ke dauran hardening reduce karta hai."
                            },
                            {
                                name: "Food-grade Enzymes (Emerging)",
                                detail: "<strong>Transglutaminase (TGase, EC 2.3.2.13):</strong> Ek microbial enzyme jo protein chains ke beech ε-(γ-glutamyl)-lysine isopeptide cross-links ki formation catalyze karta hai. Jab milk mein (1–5 U/g protein) coagulation se pehle ya dauran add kiya jaata hai, TGase casein matrix mein additional covalent cross-links create karta hai — dramatically improve hota hai: (1) gel strength (+30–60%), (2) water-holding capacity (+5–10%), (3) yield (+3–7%), (4) sliceability aur fry-ability (cooking ke dauran structure maintain rehta hai). TGase GRAS hai (FDA) aur FSSAI processing aid ke roop mein permit karta hai. Enzyme heat treatment step se inactivate ho jaata hai. <br/><br/><strong>Note:</strong> TGase increasingly tofu aur cheese industries mein use ho raha hai aur paneer ke liye actively research ho rahi hai (Sharma et al., 2020, LWT — Food Sci. Technol.)."
                            }
                        ]
                    },
                    texture: {
                        title: "Paneer Texture Science — Comprehensive Analysis",
                        description: "Texture ek multi-dimensional sensory attribute hai jo casein-fat-moisture gel ki microstructure se govern hoti hai. Neeche paneer texture ka physicochemical basis cover kiya gaya hai.",
                        microstructure_note: "<strong>Microstructural basis:</strong> Scanning Electron Microscopy (SEM) aur Confocal Laser Scanning Microscopy (CLSM) ke under, paneer ek <strong>continuous protein (casein) matrix</strong> dikhta hai jisme embedded fat globules (kuch coalesced hokar pools banate hain) aur water channels hote hain. Protein matrix ki density, fat globules ka size aur distribution, aur water-filled interstices ka volume — ye sab milke macroscopic texture determine karte hain. Protein 'skeleton' banata hai, fat 'plasticizer/filler' ka kaam karta hai, aur water voids mein bharta hai aur 'lubricant' ka kaam karta hai.",
                        table: {
                            headers: ["Texture Outcome", "Primary Physicochemical Causes", "Microstructural Characteristics", "Instrumental Measurement", "Sensory Result"],
                            rows: [
                                {
                                    texture: "Hard / Rubbery / Chewy",
                                    colorClass: "text-red-600",
                                    causes: "<ul><li>Kam fat content (<4% milk fat) → matrix mein kam plasticizer</li><li>Over-pressing (>4 kg/cm², >30 min) → excessive moisture/fat expulsion</li><li>High coagulation temp (>80°C) → dense, over-aggregated casein</li><li>Low coagulation pH (<5.0) → excessive syneresis</li><li>Excessive CaCl₂ (>0.03%) → over-cross-linked casein</li><li>Prolonged cold storage → progressive casein aggregation (age-hardening)</li></ul>",
                                    microstructure: "Dense, compact protein matrix kam/chhote fat inclusions aur minimal water channels ke saath. Thick casein strands. Low porosity.",
                                    measurement: "TPA (Texture Profile Analysis): Hardness >25 N; Chewiness >15 N; Springiness >0.85. Low Adhesiveness.",
                                    result: "Chewy, dry, 'squeaky' mouthfeel. Flavors/gravies acha absorb nahi karta. Bhurji ke liye crumble karna mushkil. Low moisture (<50%)."
                                },
                                {
                                    texture: "Soft / Smooth / Compact (IDEAL)",
                                    colorClass: "text-green-600",
                                    causes: "<ul><li>Standardized milk (5.5–6.5% fat, 9% SNF)</li><li>Sahi heat treatment (85–90°C/5–10 min)</li><li>Coagulation 70–75°C pe, pH 5.2 ± 0.1</li><li>Controlled pressing (2–3 kg/cm², 15–20 min)</li><li>Proper chilling (4–6°C, 2–3 h)</li><li>Adequate fat:protein ratio (~1.3–1.5:1)</li></ul>",
                                    microstructure: "Moderately dense protein matrix well-distributed, spherical se slightly irregular fat inclusions (5–30 μm) ke saath. Moderate size ke interconnected water channels. Balanced porosity.",
                                    measurement: "TPA: Hardness 12–20 N; Cohesiveness 0.35–0.50; Springiness 0.70–0.85; Chewiness 5–12 N. Moderate adhesiveness.",
                                    result: "Firm lekin yielding bite; cubes mein cut karne pe shape hold karta hai; smooth, clean-cut surface; gravies absorb karta hai; pleasant, smooth mouthfeel; chewing pe partially melt hota hai. Moisture 52–58%."
                                },
                                {
                                    texture: "Soft / Crumbly / Fragile",
                                    colorClass: "text-yellow-600",
                                    causes: "<ul><li>Milk mein high acidity (>0.20% LA, developed acidity)</li><li>Bahut low temperature pe coagulation (<65°C)</li><li>Insufficient pressing (<1.5 kg/cm², <10 min)</li><li>Bina denaturation ke excessive whey protein content</li><li>High pH coagulation (>5.6) → incomplete aggregation</li><li>Cow milk bina fortification ke (low casein, low fat)</li></ul>",
                                    microstructure: "Open, porous protein matrix large, irregular water-filled voids ke saath. Poor particle fusion — grain boundaries visible. Fragmented fat distribution.",
                                    measurement: "TPA: Hardness <8 N; Cohesiveness <0.25; Low force pe Fracturability present. High friability.",
                                    result: "Cut karte waqt asaani se toot jaata hai; cooking mein cube shape hold nahi karta; fry karne mein disintegrate ho jaata hai; pasty ya mealy ho sakta hai. Moisture >60%. Short shelf life."
                                },
                                {
                                    texture: "Grainy / Gritty",
                                    colorClass: "text-orange-500",
                                    causes: "<ul><li>Bahut rapid acid addition (localized over-acidification hard acid-casein particles create karti hai)</li><li>Low temp pe high acid concentration ke saath coagulation</li><li>High CaCl₂ → calcium phosphate/lactate crystals</li><li>Tartaric acid coagulant → calcium tartrate crystals</li><li>Addition se pehle SMP/WPC ka poor dissolution</li></ul>",
                                    microstructure: "Heterogeneous: dense, over-aggregated casein granules aur weaker, under-aggregated regions ka mixture. Kuch cases mein visible white crystalline deposits.",
                                    measurement: "Local hardness measurements mein high variability. Homogenized paneer ka particle size analysis bimodal distribution dikhata hai.",
                                    result: "Rough, sandy mouthfeel; visible specks ya granules; cut karne pe heterogeneous appearance. Premium market ke liye unacceptable."
                                }
                            ]
                        },
                        age_hardening: {
                            title: "Paneer mein Age-Hardening Phenomenon",
                            content: "Stored paneer mein ek well-documented problem hai <strong>cold storage (2–5°C) ke dauran progressive hardening</strong>. Paneer ki hardness 7–14 days ki refrigerated storage mein 40–80% tak badh sakti hai. <br/><br/><strong>Mechanism:</strong> <ol><li><strong>Protein rearrangement:</strong> Casein molecules time ke saath additional hydrophobic aur hydrogen bonds banaate rehte hain — protein matrix compact hota jaata hai (cheese mein 'aging' jaisa, lekin bina proteolysis ke).</li><li><strong>Moisture redistribution:</strong> Free water interior se surface ki taraf migrate karta hai (jahan evaporate hota hai ya packaging absorb kar leti hai) — internal plasticization reduce hoti hai.</li><li><strong>Fat crystallization changes:</strong> Refrigeration temperature pe, milk fat polymorphic transitions se guzarta hai (α → β' → β crystal forms) — β crystals denser aur harder hote hain, overall firmness mein contribute karte hain.</li></ol><strong>Mitigation strategies:</strong> (1) Surface moisture loss prevent karne ke liye Vacuum/MAP packaging; (2) Moisture maintain karne ke liye hydrocolloids (carrageenan, guar gum) ka inclusion; (3) Excessive calcium-mediated cross-linking prevent karne ke liye calcium-chelating salts (trisodium citrate); (4) −18°C pe storage (freezing) age-hardening rok deta hai lekin thawing pe textural damage ho sakta hai (ice crystal dwara protein matrix disruption — rapid blast freezing −40°C pe small ice crystals produce karke mitigate kiya jaata hai)."
                        }
                    }
                },
                microbiology: {
                    title: "Microbiology & Food Safety",
                    description: "Paneer ek high-moisture (52–58%), near-neutral pH (5.2–5.8), protein-rich dairy product hai jiska water activity (aᵥ) 0.97–0.99 hai. Ye ise ek <strong>excellent growth medium</strong> banata hai wide range ke microorganisms ke liye. Proper hygiene, process control, aur cold chain management ke bina, paneer serious foodborne illness ka vehicle ban sakta hai.",
                    sections: [
                        {
                            title: "Paneer mein Microbiological Hazards",
                            content: "",
                            table: {
                                headers: ["Organism", "Category", "Source", "Paneer mein Growth Conditions", "Health Risk", "Control Measure"],
                                rows: [
                                    {
                                        organism: "<em>Staphylococcus aureus</em>",
                                        category: "Gram(+) coccus; mesophilic",
                                        source: "Human skin/nasal carriage; contaminated milk (mastitis); post-process handling",
                                        growth: "7–48°C, pH 4.0–10.0, aᵥ > 0.83 pe grow karta hai. >10⁵ CFU/g pe heat-stable enterotoxins (A–E, G–I) produce karta hai; toxins 100°C/30 min survive karte hain.",
                                        risk: "Staphylococcal food poisoning: rapid-onset (1–6 h) nausea, vomiting, abdominal cramps, diarrhea. Usually self-limiting.",
                                        control: "Pasteurization cells kill kar deta hai (D₆₅ = ~0.2 min). Post-pasteurization contamination (PPC) prevent karo: gloves, masks, sanitized equipment use karo. Toxin production prevent karne ke liye <5°C maintain karo. HACCP CCP."
                                    },
                                    {
                                        organism: "<em>Escherichia coli</em> (incl. O157:H7, STEC)",
                                        category: "Gram(−) rod; mesophilic",
                                        source: "Milk ka fecal contamination (poor udder hygiene, contaminated water); handlers se PPC",
                                        growth: "7–46°C, pH 4.4–9.0 pe grow karta hai. STEC Shiga toxins (Stx1, Stx2) produce karta hai.",
                                        risk: "Gastroenteritis; STEC Hemolytic Uremic Syndrome (HUS) cause kar sakta hai — life-threatening, khaas taur pe bachhon mein. Low infectious dose (~10–100 cells STEC ke liye).",
                                        control: "Pasteurization (72°C/15s ya equivalent, D₇₂ < 1 s). Post-process hygiene. Cold chain <5°C. Finished product ki coliform testing."
                                    },
                                    {
                                        organism: "<em>Salmonella</em> spp.",
                                        category: "Gram(−) rod; mesophilic",
                                        source: "Infected animals ka raw milk; processing environment mein cross-contamination (drains, floors mein biofilms)",
                                        growth: "5–47°C, pH 3.8–9.5 pe grow karta hai. 5°C se neeche grow nahi karta lekin refrigeration survive karta hai.",
                                        risk: "Salmonellosis: diarrhea, fever, abdominal cramps (onset 12–72 h). Immunocompromised mein invasive (bacteremia) ho sakta hai.",
                                        control: "Pasteurization (D₇₂ < 1 s). Environmental sanitation (CIP, floor sanitization). ISO 6579 ke anusar testing. Finished product mein zero tolerance (25g mein absent)."
                                    },
                                    {
                                        organism: "<em>Listeria monocytogenes</em>",
                                        category: "Gram(+) rod; psychrotrophic",
                                        source: "Environment mein ubiquitous (soil, water, drains, cold room surfaces pe condensation). Food processing environments mein biofilms banane ke liye notorious.",
                                        growth: "<strong>0–45°C pe grow kar sakta hai</strong> (psychrotrophic!), pH 4.4–9.4, aᵥ > 0.92, aur 10% NaCl tak. Paneer ki refrigerated storage ke dauran <strong>multiply</strong> karta hai.",
                                        risk: "Listeriosis: meningitis, septicemia, spontaneous abortion. Case fatality rate 20–30%. Primarily pregnant women, neonates, elderly, immunocompromised ko affect karta hai. Susceptible individuals mein low infectious dose.",
                                        control: "Pasteurization cells kill kar deta hai (D₇₂ < 1 s). <strong>Primary risk post-process contamination hai.</strong> Strict environmental monitoring program (drains, floors, cold rooms, conveyors, cutting boards ki environmental <em>Listeria</em> swabbing). Packaging areas mein air filtration (HEPA). Finished product testing (25g mein absent). <strong>Ye paneer ki #1 food safety concern hai.</strong>"
                                    },
                                    {
                                        organism: "<em>Bacillus cereus</em>",
                                        category: "Gram(+) spore-former; mesophilic/psychrotrophic strains exist karte hain",
                                        source: "Soil, raw milk, spices. Spores pasteurization survive karte hain.",
                                        growth: "Vegetative growth 10–50°C pe (kuch psychrotrophic strains 4°C pe). Diarrheal enterotoxin produce karta hai (Hbl, Nhe — food mein growth ke dauran >10⁵ CFU/g pe produce hota hai) aur emetic toxin (cereulide — preformed, heat-stable, starchy foods mein produce hota hai).",
                                        risk: "Diarrheal syndrome (8–16 h onset) ya emetic syndrome (1–5 h onset, mainly rice/starchy foods se). Usually self-limiting.",
                                        control: "Spores pasteurization se eliminate nahi ho sakte. Control: rapid cooling (<5°C 2 h mein), cold chain maintain karna, aur short shelf life. Finished product mein <em>B. cereus</em> count <10³ CFU/g hona chahiye."
                                    },
                                    {
                                        organism: "Psychrotrophic spoilage bacteria (<em>Pseudomonas</em> spp., <em>Acinetobacter</em>, <em>Shewanella</em>)",
                                        category: "Gram(−) rods; psychrotrophic",
                                        source: "Water supply, environmental contamination, processing equipment mein biofilms.",
                                        growth: "4–7°C pe acha grow karte hain; <em>Pseudomonas fluorescens</em> ki 4°C pe generation time ~12 h hai. Extracellular proteases (caseinase, gelatinase) aur lipases produce karte hain.",
                                        risk: "Pathogenic nahi, lekin <strong>rapid spoilage</strong> cause karte hain: surface sliminess, off-odors (fruity, putrid, rancid), discoloration (yellow, pink — pyoverdin ya pyocyanin pigments ki wajah se), aur casein hydrolysis se bitter peptides.",
                                        control: "Strict post-process hygiene. CO₂ ke saath MAP packaging (Gram-negative aerobes inhibit hote hain). Chilling ke liye chlorinated/UV-treated water. Short shelf life. Cold rooms ki achi sanitation."
                                    },
                                    {
                                        organism: "Yeasts (<em>Candida</em>, <em>Rhodotorula</em>, <em>Pichia</em>) & Molds (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Cladosporium</em>)",
                                        category: "Fungi",
                                        source: "Airborne spores; contaminated packaging materials; environmental",
                                        growth: "5–37°C, pH 2–9, aᵥ > 0.80 (molds) ya > 0.88 (yeasts) pe grow karte hain. Slow growth lekin acidic, low-aᵥ conditions tolerate karte hain.",
                                        risk: "Spoilage: surface mold growth (visible colonies), off-flavors (musty, alcoholic, yeasty), gas production (vacuum packs ka bloating), mycotoxin production (<em>Aspergillus flavus</em> → aflatoxins). Yeasts fermentation aur blown packs cause karte hain.",
                                        control: "Packaging area mein air filtration; packaging materials ki UV sterilization; CO₂ ke saath MAP; cold rooms mein HEPA filters; <5°C maintain karo; finished product mein Y&M count <50 CFU/g."
                                    }
                                ]
                            }
                        },
                        {
                            title: "Paneer Production ke liye HACCP Plan Summary",
                            content: "<strong>Hazard Analysis and Critical Control Points (HACCP)</strong> dairy processing ke liye mandatory hai (FSSAI regulations). Paneer ke liye key CCPs:<br/><br/><strong>CCP 1:</strong> Milk pasteurization (85–90°C/5–10 min) — saare vegetative pathogens control karta hai. Monitoring: inline temperature/time recorder. Critical limit: ≥82°C ≥5 min ke liye. Deviation: divert aur re-process karo.<br/><br/><strong>CCP 2:</strong> Post-pasteurization environment — <em>Listeria</em>, <em>Pseudomonas</em>, aur environmental recontamination control karta hai. Monitoring: ATP bioluminescence swabs (food-contact surfaces pe <100 RLU), environmental <em>Listeria</em> testing (zone approach: Zone 1 = food contact, Zone 2 = near food contact, Zone 3 = processing environment, Zone 4 = remote areas).<br/><br/><strong>CCP 3:</strong> Cold chain maintenance (chilling se distribution tak product <5°C). Monitoring: cold rooms aur transport vehicles mein data loggers, IoT-enabled temperature tracking.<br/><br/><strong>Prerequisite Programs (PRPs):</strong> Supplier qualification, SSOPs (Sanitation Standard Operating Procedures), personnel hygiene (handwashing, gloves, hairnets, boot dips), water quality management, pest control, equipment maintenance, calibration, traceability (lot coding), allergen management, recall procedure."
                        },
                        {
                            title: "Shelf Life Limiting Factors — Microbiological Perspective",
                            content: "Refrigeration (4–5°C) ke under paneer ki shelf life primarily determine hoti hai: <ol><li><strong>Packaging ke waqt initial microbial load</strong> (post-process contamination level). Acha manufactured paneer TPC < 10³ CFU/g ke saath 3–4× zyada last karega TPC = 10⁴ CFU/g wale se.</li><li><strong>Storage ke dauran microbial growth ki rate</strong>, jo govern hoti hai: storage temperature (bacterial growth ke liye Q₁₀ ≈ 2–3; har 5°C increase roughly growth rate double karta hai), packaging atmosphere (aerobic vs. MAP vs. vacuum), aur product pH/aᵥ.</li><li><strong>Spoilage threshold:</strong> Paneer typically tab reject hota hai jab TPC 10⁶–10⁷ CFU/g cross karta hai (detectable off-odors, surface sliminess).</li></ol><strong>Predictive microbiology example:</strong> Agar ek vacuum-packed paneer ka initial TPC 10³ CFU/g hai aur dominant psychrotrophic flora ki 4°C pe generation time ~14 h hai, toh 10⁶ CFU/g (spoilage) tak pahunchne mein lagbhag 14 × log₂(10⁶/10³) / log₂(10) ≈ 14 × 10 = ~140 ghante ≈ ~6 din lagenge. MAP (CO₂) ke saath, lag phase extend hoti hai aur generation time ~20 h ho jaata hai — shelf life ~15–20 days tak extend hoti hai."
                        }
                    ]
                },
                nutrition: {
                    title: "Nutritional Composition & Functional Properties",
                    description: "Paneer ek nutrient-dense dairy product hai jo vegetarian diets mein — khaas taur pe South Asia mein — major protein source ka kaam karta hai.",
                    composition_table: {
                        title: "Paneer ki Proximate Composition (per 100 g)",
                        headers: ["Nutrient", "Buffalo Milk Paneer", "Cow Milk Paneer", "Mixed Milk Paneer", "Significance"],
                        rows: [
                            { nutrient: "Energy (kcal)", buffalo: "280–320", cow: "240–265", mixed: "260–290", significance: "High caloric density; primarily fat aur protein se." },
                            { nutrient: "Moisture (%)", buffalo: "50–55", cow: "53–58", mixed: "52–56", significance: "Texture (softness/firmness) aur shelf life determine karta hai (higher moisture = shorter shelf life)." },
                            { nutrient: "Total Protein (g)", buffalo: "18–22", cow: "16–19", mixed: "17–20", significance: "Saare essential amino acids hote hain. Biological Value (BV) ≈ 80–85. PDCAAS ≈ 1.0 casein ke liye. Branched-chain amino acids (BCAAs: leucine, isoleucine, valine) se bharpoor — muscle protein synthesis ke liye important." },
                            { nutrient: "Total Fat (g)", buffalo: "22–28", cow: "18–22", mixed: "20–25", significance: "Predominantly saturated (65–70%): palmitic (C16:0, ~30%), stearic (C18:0, ~12%), myristic (C14:0, ~11%). Main MUFA oleic acid (C18:1, ~24%). CLA (conjugated linoleic acid, ~5–7 mg/g fat) bhi hota hai — ek bioactive fatty acid jiske potential anti-carcinogenic aur anti-atherogenic properties hain. Cholesterol: ~70–100 mg/100g." },
                            { nutrient: "Carbohydrate / Lactose (g)", buffalo: "1.5–2.5", cow: "2.0–3.0", mixed: "1.8–2.8", significance: "Zyaadatar lactose whey mein nikal jaata hai (~95% original milk lactose). Paneer mein residual lactose bahut kam hai — isliye ye <strong>generally lactose-intolerant individuals dwara well-tolerated</strong> hai. Paneer mein lactose ~0.5–1.5 g per serving (50g) hai — zyaadatar lactose-intolerant adults ke 12g threshold se bahut neeche." },
                            { nutrient: "Calcium (mg)", buffalo: "350–450", cow: "280–350", mixed: "300–400", significance: "Paneer calcium ka excellent source hai (per 100g 35–45% RDA). Calcium colloidal (casein phosphate se bound — total ka ~50–60%) aur ionic/soluble dono forms mein exist karta hai. Acid coagulation se original milk calcium ka ~30–40% whey mein chala jaata hai (pH 5.2 pe CCP solubilization ki wajah se), lekin paneer phir bhi substantial calcium retain karta hai. Higher casein content ki wajah se buffalo milk paneer mein zyada calcium hota hai." },
                            { nutrient: "Phosphorus (mg)", buffalo: "250–350", cow: "200–280", mixed: "220–300", significance: "Ca:P ratio ≈ 1.2–1.5:1, jo calcium absorption ke liye favorable hai. Phosphorus casein-bound phosphoserine residues aur free phosphate ke roop mein present hota hai." },
                            { nutrient: "Sodium (mg)", buffalo: "20–30", cow: "20–30", mixed: "20–30", significance: "Naturally sodium mein low. Brine-packed ya pressing ke dauran salt add karne pe significantly badh sakta hai (300–600 mg/100g)." },
                            { nutrient: "Zinc (mg)", buffalo: "3.0–4.0", cow: "2.5–3.5", mixed: "2.8–3.8", significance: "Casein se bound (phosphoserine aur histidine residues ke through). Acha source: ~25–35% RDA/100g." },
                            { nutrient: "Vitamin A (retinol, μg)", buffalo: "180–250", cow: "100–150", mixed: "140–200", significance: "Buffalo milk paneer mein higher vitamin A hota hai — higher fat content ki wajah se aur isliye ki cow milk mein carotenoids (β-carotene) yellowish tinge dete hain lekin retinol mein kam efficiently convert hote hain." },
                            { nutrient: "Vitamin B12 (μg)", buffalo: "1.0–1.5", cow: "0.8–1.2", mixed: "0.9–1.3", significance: "Vegetarians ke liye important, jo B12 deficiency ke risk pe ho sakte hain. 100g paneer RDA ka ~35–50% provide karta hai (2.4 μg/day)." },
                            { nutrient: "Riboflavin / B2 (mg)", buffalo: "0.25–0.35", cow: "0.30–0.40", mixed: "0.28–0.38", significance: "Per 100g ~20–30% RDA. Partially whey mein lost hota hai (riboflavin water-soluble hai); paneer mein retention ~40–50%." },
                            { nutrient: "Folate / B9 (μg)", buffalo: "15–25", cow: "10–20", mixed: "12–22", significance: "Moderate source. Zyaadatar folate whey mein lost hota hai." }
                        ]
                    },
                    amino_acid_profile: {
                        title: "Paneer Protein ka Essential Amino Acid Profile",
                        headers: ["Amino Acid", "Paneer (mg/g protein)", "WHO/FAO Reference (mg/g protein)", "Status"],
                        rows: [
                            { aa: "Leucine", paneer: "95–100", reference: "59", status: "✅ Requirement se ~70% zyada" },
                            { aa: "Isoleucine", paneer: "50–55", reference: "30", status: "✅ Exceeds" },
                            { aa: "Valine", paneer: "65–70", reference: "39", status: "✅ Exceeds" },
                            { aa: "Lysine", paneer: "80–85", reference: "45", status: "✅ Exceeds" },
                            { aa: "Methionine + Cysteine", paneer: "30–35", reference: "22", status: "✅ Adequate (casein ke liye first limiting)" },
                            { aa: "Phenylalanine + Tyrosine", paneer: "100–110", reference: "38", status: "✅ Exceeds" },
                            { aa: "Threonine", paneer: "42–48", reference: "23", status: "✅ Exceeds" },
                            { aa: "Tryptophan", paneer: "12–15", reference: "6", status: "✅ Exceeds" },
                            { aa: "Histidine", paneer: "28–32", reference: "15", status: "✅ Exceeds" }
                        ]
                    },
                    bioactive_compounds: {
                        title: "Paneer mein Bioactive Compounds",
                        items: [
                            {
                                name: "Casein-Derived Bioactive Peptides",
                                detail: "Digestion ke dauran, gastrointestinal proteases (pepsin, trypsin, chymotrypsin) casein ko bioactive peptides mein cleave karte hain. Key examples: <ul><li><strong>Casomorphins (β-casomorphin-7):</strong> β-casein (f60–66) se opioid agonists; gut motility modulate kar sakte hain aur analgesic effects hain.</li><li><strong>Phosphopeptides (CPP, casein phosphopeptides):</strong> αS1-, αS2-, aur β-casein se; phosphoserine clusters contain karte hain jo calcium bind aur solubilize karte hain — intestinal calcium absorption enhance karta hai.</li><li><strong>ACE-inhibitory peptides:</strong> VPP (Val-Pro-Pro) aur IPP (Ile-Pro-Pro) β-casein aur κ-casein se; angiotensin-converting enzyme inhibit karte hain — potentially blood pressure lower karte hain.</li><li><strong>Lactoferricin (lactoferrin se, agar present ho):</strong> Antimicrobial peptide.</li></ul>"
                            },
                            {
                                name: "Conjugated Linoleic Acid (CLA)",
                                detail: "Milk fat mein CLA (primarily <em>cis</em>-9, <em>trans</em>-11 C18:2 isomer, 'rumenic acid') 3–7 mg/g fat pe hota hai. CLA rumen bacteria (Butyrivibrio fibrisolvens) dwara linoleic acid ki biohydrogenation se produce hota hai, aur mammary gland mein Δ9-desaturase dwara vaccenic acid se. Animal studies anti-carcinogenic, anti-atherogenic, anti-diabetic, aur body composition-modifying effects dikhate hain — haalank human evidence kam conclusive hai. Pasture-fed animals ke paneer mein CLA concentrate-fed animals se 2–3× zyada hota hai."
                            },
                            {
                                name: "Sphingolipids (Sphingomyelin, Gangliosides)",
                                detail: "Milk fat globule membrane (MFGM) mein present. Sphingomyelin aur iske metabolites (ceramide, sphingosine) ne cell aur animal models mein anti-cancer properties demonstrate ki hain — apoptosis induce karke aur cell proliferation inhibit karke."
                            }
                        ]
                    }
                },
                shelf_life: {
                    title: "Shelf Life Extension & Packaging Technology",
                    description: "Paneer ki inherent perishability (high moisture, near-neutral pH, high aᵥ) ki wajah se shelf life extension ke liye multi-hurdle approach zaroori hai.",
                    sections: [
                        {
                            title: "Hurdle Technology Approach",
                            content: "<strong>Hurdle concept</strong> (Leistner, 1992) mein multiple preservation factors ('hurdles') combine kiye jaate hain — har ek sub-lethal level pe — taaki unka combined effect microbial growth inhibit kare. Paneer ke liye primary hurdles hain: <ul><li><strong>Temperature (t):</strong> ≤5°C pe storage — mesophilic pathogens inhibit hote hain, psychrotrophs slow hote hain.</li><li><strong>Packaging atmosphere (Eh):</strong> Reduced O₂ (vacuum/MAP) — aerobic spoilers inhibit hote hain.</li><li><strong>pH:</strong> 5.2–5.5 pe maintained — bahut saare Gram-negative bacteria inhibit hote hain.</li><li><strong>Preservatives (Pres):</strong> Potassium sorbate, nisin, natamycin — permitted levels pe.</li><li><strong>Competitive microflora:</strong> Surface-applied protective cultures (bio-preservation).</li></ul>"
                        },
                        {
                            title: "Packaging Technologies — Detailed Comparison",
                            table: {
                                headers: ["Technology", "Mechanism", "4°C pe Typical Shelf Life", "Fayde", "Limitations"],
                                rows: [
                                    {
                                        tech: "Atmospheric (unwrapped ya LDPE wrap)",
                                        mechanism: "Koi barrier nahi; aerobic environment",
                                        life: "3–6 din",
                                        advantages: "Sabse sasta; local/unorganized market ke liye suitable",
                                        limitations: "Rapid spoilage; surface drying, mold growth, off-odors"
                                    },
                                    {
                                        tech: "Vacuum Packaging (VP)",
                                        mechanism: "Air remove karta hai; anaerobic environment create karta hai (O₂ <1%). Obligate aerobes (<em>Pseudomonas</em>) inhibit hote hain.",
                                        life: "20–30 din",
                                        advantages: "Simple; effective; widely adopted; oxidation prevent karta hai",
                                        limitations: "Facultative anaerobes (LAB, <em>Enterobacteriaceae</em>) aur <em>Listeria</em> phir bhi grow kar sakte hain. Pack collapse aesthetics."
                                    },
                                    {
                                        tech: "Modified Atmosphere Packaging (MAP)",
                                        mechanism: "CO₂/N₂ mixture (typically 30–70% CO₂) se flush kiya jaata hai. CO₂ water/fat mein dissolve hota hai → carbonic acid banta hai → surface pH low ho jaata hai; Gram(−) aerobes inhibit hote hain; psychrotrophs ki lag phase extend hoti hai.",
                                        life: "30–45 days",
                                        advantages: "Gram(−) inhibition ke liye VP se behtar; pack ka appearance attractive rehta hai (collapse nahi hota); better color retention",
                                        limitations: "Gas mixing equipment aur gas-impermeable packaging material (OTR <5 cc/m²/24h) chahiye; pack integrity critical hai; CO₂ product mein absorb hoke partial pack collapse kar sakta hai time ke saath"
                                    },
                                    {
                                        tech: "Active Packaging",
                                        mechanism: "Packaging material mein active agents incorporate hote hain: O₂ scavengers (iron-based sachets, ascorbate), CO₂ emitters, antimicrobial coatings (nisin, natamycin, silver nanoparticles, chitosan, essential oils).",
                                        life: "35–60 days",
                                        advantages: "Targeted antimicrobial activity; VP/MAP ke saath combine kar sakte hain; innovative approach hai",
                                        limitations: "Har active agent ke liye regulatory approval chahiye; cost zyada hoti hai; consumers ko packaging mein 'chemicals' acceptable nahi lagte"
                                    },
                                    {
                                        tech: "Retort Processing",
                                        mechanism: "Retortable pouch mein thermal sterilization (121°C/15–20 min, F₀ = 5–7 min). Commercial sterility achieve hoti hai (<em>Cl. botulinum</em> ka 12D reduction).",
                                        life: "6–12 months (ambient)",
                                        advantages: "Ambient storage ho sakti hai; shelf life bahut zyada; cold chain ki zarurat nahi; export/military/remote areas ke liye ideal",
                                        limitations: "Texture softer ho jaata hai (protein denaturation), thodi browning hoti hai (Maillard), sensory profile alag ho jaata hai; cost zyada; consumer perception issue hota hai"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Paneer ke liye Permitted Preservatives",
                            items: [
                                {
                                    name: "Potassium Sorbate (E202) / Sorbic Acid (E200)",
                                    detail: "<strong>Kaam kaise karta hai:</strong> Molds aur yeasts ko inhibit karta hai — inke metabolic pathways mein dehydrogenase enzymes ko block karke. Catalase activity aur sulfhydryl enzymes ko bhi inhibit karta hai. pH <6.5 par effective hai (undissociated form active hoti hai; pKa = 4.76). <br/><strong>Permitted level:</strong> Paneer mein max 1,000 ppm (1 g/kg) — FSSAI ke according. <br/><strong>Application:</strong> Chilling/packing ke liye use hone wale brine mein dissolve karke, ya surface par spray karke."
                                },
                                {
                                    name: "Nisin (E234)",
                                    detail: "<strong>Kya hai:</strong> 34 amino acid wala lantibiotic (Class I bacteriocin) jo <em>Lactococcus lactis</em> se produce hota hai. FDA se GRAS status wala yeh akela bacteriocin hai aur FSSAI ne dairy products mein approve kiya hai. <br/><strong>Kaam kaise karta hai:</strong> Gram(+) bacteria ke Lipid II (cell wall precursor) se bind karta hai, cytoplasmic membrane mein pores banata hai → PMF (proton motive force) loss, ion efflux, aur cell death hoti hai. <em>Listeria</em>, <em>Staphylococcus</em>, <em>Bacillus</em>, <em>Clostridium</em> ke against effective hai. Gram(−) bacteria (outer membrane barrier) aur fungi ke against ineffective hai. <br/><strong>Permitted level:</strong> FSSAI ke according 12.5 mg/kg (12.5 ppm). <br/><strong>Application:</strong> Chilling water mein add karke ya packaging film mein incorporate karke."
                                },
                                {
                                    name: "Natamycin (E235)",
                                    detail: "<strong>Kya hai:</strong> <em>Streptomyces natalensis</em> se produce hone wala polyene macrolide antifungal. <br/><strong>Kaam kaise karta hai:</strong> Fungal cell membranes mein ergosterol se irreversibly bind karta hai, pores banata hai → cell lysis hoti hai. Fungi ke liye highly specific hai (bacteria mein ergosterol nahi hota). <br/><strong>Permitted level:</strong> Surface application, max 1 mg/dm² surface area (ya Codex ke according product mein 40 ppm). <br/><strong>Application:</strong> Paneer surface par mold growth rokne ke liye dip ya spray ke roop mein apply kiya jaata hai."
                                }
                            ]
                        },
                        {
                            title: "Novel / Emerging Preservation Technologies",
                            items: [
                                {
                                    name: "High-Pressure Processing (HPP)",
                                    detail: "Paneer ko 400–600 MPa par 3–10 minutes ke liye 20–25°C pe process kiya jaata hai. HPP vegetative pathogens ko inactivate karta hai (<em>Listeria</em>, <em>Salmonella</em>, <em>E. coli</em> ka >5 log reduction) aur shelf life 4°C par 45–60 days tak extend hoti hai. Non-thermal hone ki wajah se paneer ka fresh texture aur flavor preserve rehta hai. Spores inactivate nahi hote. Capital cost zyada hoti hai (~₹5–10 Cr for a 55L vessel system), lekin operating cost moderate hai. Premium/export paneer ke liye increasingly adopt ho raha hai."
                                },
                                {
                                    name: "UV-C Irradiation (Surface Treatment)",
                                    detail: "Paneer surfaces ko packaging se pehle UV-C light (254 nm, 10–50 mJ/cm²) se expose kiya jaata hai. UV-C microbial DNA ko damage karta hai (thymine dimer formation), surface contaminants ka 1–3 log reduction achieve hota hai. Penetration deep nahi hoti (sirf surface effect). Low cost; koi residues nahi; koi regulatory concerns nahi. MAP ke saath best results milte hain."
                                },
                                {
                                    name: "Edible Coatings",
                                    detail: "Paneer blocks ko edible film-forming solutions mein dip ya spray kiya jaata hai: <ul><li><strong>Chitosan (1–2% dilute acetic acid mein):</strong> Crustacean shells se bana polycationic biopolymer. Gram(−) > Gram(+) ke against antimicrobial (negatively charged cell surfaces se bind karta hai, membrane disrupt karta hai). Moisture loss aur O₂ ingress kam karne wala semi-permeable barrier bhi banata hai.</li><li><strong>Whey protein isolate (WPI) films:</strong> WPI (8–10%) + glycerol (plasticizer) + antimicrobial agents (nisin, oregano EO). Transparent, flexible films banate hain jisme achchi oxygen barrier properties hoti hain.</li><li><strong>Starch-based coatings:</strong> Modified starch + essential oils (thyme, oregano — thymol aur carvacrol contain karte hain jo broad-spectrum antimicrobial hain).</li></ul>Edible coatings VP ke upar se 7–14 days extra shelf life de sakti hain."
                                },
                                {
                                    name: "Pulsed Electric Field (PEF)",
                                    detail: "Paneer ya milk par short, high-voltage pulses (20–80 kV/cm, microsecond duration) apply ki jaati hain. PEF microbial cell membranes mein electroporation (irreversible pore formation) cause karta hai. Non-thermal hai; nutrients aur texture preserve rehte hain. Solid dairy products ke liye abhi mostly research stage par hai."
                                },
                                {
                                    name: "Cold Plasma Treatment",
                                    detail: "Non-thermal atmospheric ya low-pressure plasma reactive oxygen aur nitrogen species (RONS: O₃, OH•, NO₂, H₂O₂) generate karta hai jo microbial cell components (membranes, DNA, proteins) ko damage karte hain. Paneer ka 1–5 minutes ka surface treatment temperature increase ya chemical residues ke bina 1–3 log reduction achieve kar sakta hai. Emerging technology hai jisme laboratory studies mein promising results mile hain."
                                }
                            ]
                        }
                    ]
                },
                defects: {
                    title: "Defects, Troubleshooting & Process Optimization",
                    description: "Paneer ke common defects, unke root causes, aur corrective actions ka systematic analysis. Yeh quality assurance teams ke liye ek diagnostic guide hai.",
                    defects_table: {
                        headers: ["Defect", "Dekhe Jane Wale Lakshan", "Root Cause Analysis", "Corrective / Preventive Action"],
                        rows: [
                            {
                                defect: "Zyada Hardness / Rubbery Texture",
                                observed: "Product rigid hai, asaani se compress nahi hota, chewing par 'squeak' karta hai, gravy absorb nahi karta. TPA hardness >30 N.",
                                cause: "<ol><li>Milk fat bahut kam (<4.5% buffalo ke liye, <3.5% cow ke liye) — plasticization insufficient hai.</li><li>Over-pressing: pressure >4 kg/cm² ya duration >25 min.</li><li>Coagulation temperature >80°C — dense protein aggregation hoti hai.</li><li>Coagulation pH <5.0 — excessive syneresis hoti hai.</li><li>Excess CaCl₂ (>0.03%) — over-cross-linking ho jaati hai.</li><li>Extended cold storage mein age-hardening.</li></ol>",
                                action: "<ol><li>Milk standardization verify aur adjust karo (target 5.8–6.0% fat).</li><li>Pressing pressure 2–2.5 kg/cm² aur duration 15 min tak reduce karo.</li><li>Coagulation temperature 70–72°C par reduce karo.</li><li>Coagulation endpoint pH monitor karo — pH 5.2 par acid add karna band karo.</li><li>CaCl₂ reduce ya eliminate karo.</li><li>Excess calcium chelate karne ke liye 0.01–0.03% trisodium citrate add karo; moisture retention ke liye 0.05% guar gum; surface drying rokne ke liye VP/MAP ensure karo.</li></ol>"
                            },
                            {
                                defect: "Crumbly / Fragile Texture",
                                observed: "Product cut ya handle karte time toot jaata hai; cube shape maintain nahi kar pata; cross-section par grainy surface dikhta hai.",
                                cause: "<ol><li>Milk acidity bahut zyada (>0.18% LA) — processing se pehle pre-coagulation ho jaati hai.</li><li>Coagulation temperature bahut kam (<65°C) — weak hydrophobic bonds bante hain.</li><li>Insufficient pressing (<1.5 kg/cm² ya <10 min) — poor curd knitting hoti hai.</li><li>Coagulation ke dauran vigorous stirring — curd fines bante hain.</li><li>Bina fortification ke cow milk — matrix formation ke liye low casein.</li><li>Coagulation pH >5.5 — incomplete aggregation hoti hai.</li></ol>",
                                action: "<ol><li>Acidity >0.18% LA wala milk test karke reject karo.</li><li>Coagulation temperature ≥70°C ensure karo.</li><li>Pressing pressure 2.5–3 kg/cm² 15–20 min ke liye badhao.</li><li>Stirring speed 30–40 RPM rako; jaise hi clear whey dikhe band kar do.</li><li>Cow milk mein 0.5–1% WPC ya 0.5% SMP se fortify karo.</li><li>Target pH 5.2 tak pahunchne ke liye aur coagulant add karo.</li></ol>"
                            },
                            {
                                defect: "Sour / Acidic Taste",
                                observed: "Mild acidity se zyada pronounced tart/sour flavor; product ka pH <5.0.",
                                cause: "<ol><li>Excess coagulant add ho gaya — pH 5.0 se neeche chala gaya.</li><li>Bahut zyada acidic sour whey ka use (>1.0% LA).</li><li>Raw milk mein developed acidity (>0.18%).</li><li>Storage ke dauran microbial acid production (under-refrigerated product mein LAB growth).</li></ol>",
                                action: "<ol><li>pH meter calibrate karo; coagulant addition rate standardize karo; operator ko endpoint detection sikhao.</li><li>Use se pehle sour whey acidity 0.8–0.9% par standardize karo.</li><li>Raw milk quality improve karo — milking se processing tak ka time kam karo.</li><li>Cold chain integrity ensure karo (<5°C throughout).</li></ol>"
                            },
                            {
                                defect: "Bitter Taste",
                                observed: "Storage ke 5–7 days baad distinctly bitter aftertaste aata hai.",
                                cause: "<ol><li>Excess CaCl₂ — yeh salt intrinsically bitter hota hai.</li><li>Psychrotrophic bacterial proteases (<em>Pseudomonas fluorescens</em> se) — heat-stable metalloproteinases (AprX) pasteurization survive karke β-casein ko slowly bitter peptides mein hydrolyze karte hain (residues 53–91 aur 164–209 ke hydrophobic peptides).</li><li>High SPC (>10⁶ CFU/mL) wale raw milk ka use — pasteurization se pehle protease load develop ho jaata hai.</li><li>Accidentally use hue residual rennet se bitter peptides banate hain.</li></ol>",
                                action: "<ol><li>CaCl₂ ≤0.02% tak reduce karo.</li><li>Raw milk quality improve karo — reception par SPC <2×10⁵ ensure karo; milking se cooling tak ka time <2 hours raho; processing se pehle raw milk <4°C par <24 hours store karo.</li><li>Psychrotroph growth slow karne ke liye reception par milk ka thermization (63°C/15s) consider karo.</li></ol>"
                            },
                            {
                                defect: "Rancid / Soapy Off-Flavor",
                                observed: "Soapy, goaty, ya rancid taste; 1–3 days mein detect ho jaata hai.",
                                cause: "<ol><li>Lipolysis: Triglycerides se lipase activity ke wajah se free fatty acids release hote hain (khaaskar butyric C4:0, caproic C6:0, caprylic C8:0, capric C10:0 — short/medium chain FAs).</li><li>Lipase ke sources: (a) native milk lipoprotein lipase (LPL) — pasteurization se inactivate hona chahiye lekin inadequate heating par survive karta hai; (b) psychrotrophs ki bacterial lipases — heat-stable, pasteurization survive karti hain; (c) pumping, homogenization, ya agitation ke dauran MFGM (fat globule membrane) ko mechanical damage — fat lipases ke samne expose ho jaata hai.</li></ol>",
                                action: "<ol><li>Adequate heat treatment ensure karo (≥85°C/5 min — LPL D₈₀ = ~1 min).</li><li>Raw milk quality improve karo (SPC control).</li><li>Milk ka mechanical abuse minimize karo (excessive pumping avoid karo, positive displacement pumps use karo, buffalo milk ka unnecessary homogenization avoid karo).</li></ol>"
                            },
                            {
                                defect: "Yellowish / Brown Discoloration",
                                observed: "Surface ya poora body characteristic white/cream ki jagah yellow se brown color dikhata hai.",
                                cause: "<ol><li>Maillard reaction: High temperatures par lactose-protein reactions se browning (khaaskar >95°C ya retort processing par).</li><li>Cow milk ka use (higher β-carotene content → yellow hue — defect nahi hai per se lekin kuch markets mein preferred nahi).</li><li>Surface fat ka oxidative discoloration (light aur oxygen ke exposure se).</li><li>Microbial pigment production (<em>Pseudomonas fluorescens</em> → pyoverdin/fluorescein — yellow-green; <em>Rhodotorula</em> → carotenoid pigments — pink/orange).</li></ol>",
                                action: "<ol><li>Conventional paneer ke liye heating temperature ≤90°C control karo.</li><li>Whiter color ke liye buffalo milk ya blend use karo; ya permitted whitener use karo (TiO₂, E171 — regulatory status vary karta hai).</li><li>Light se protect karo (opaque packaging); vacuum/MAP packaging.</li><li>Post-process hygiene improve karo; environmental monitoring karo.</li></ol>"
                            },
                            {
                                defect: "Surface Sliminess",
                                observed: "Paneer surface par viscous, sticky, translucent layer; unpleasant tacky feel; off-odor bhi aa sakta hai.",
                                cause: "<em>Pseudomonas</em> spp. aur doosre psychrotrophic Gram(−) bacteria ki growth. Yeh extracellular polysaccharides (EPS) aur proteolytic enzymes produce karte hain. Slime >10⁷ CFU/cm² par noticeable ho jaata hai. Cause: post-process contamination + inadequate refrigeration.",
                                action: "Post-pasteurization area mein strict hygiene (sanitized cutting boards, knives, conveyors, molds); treated/UV-sterilized chilling water; MAP with ≥30% CO₂ (<em>Pseudomonas</em> inhibit karta hai); <4°C maintain karo; processing se packaging tak ka time kam karo."
                            },
                            {
                                defect: "Mold Growth on Surface",
                                observed: "Paneer surface par visible fuzzy/powdery colonies (white, green, blue, black), usually 7–14 days baad.",
                                cause: "Handling, cutting, ya packaging ke dauran airborne mold spore contamination. <em>Penicillium</em> spp., <em>Aspergillus</em> spp., <em>Cladosporium</em> spp. sabse common hain. MAP mein insufficient CO₂ ya poor vacuum seal aerobic mold growth allow karta hai.",
                                action: "Packaging room mein HEPA air filtration; packaging area air aur surfaces ka UV-C treatment; natamycin surface spray (40 ppm); vacuum seal integrity ensure karo (dye penetration test); <5°C maintain karo (mold growth slow hoti hai lekin poori tarah nahi rukti)."
                            },
                            {
                                defect: "Whey Leakage in Package",
                                observed: "Vacuum ya MAP pack mein free whey/serum ka accumulation; poor appearance; milky ya slightly turbid liquid.",
                                cause: "<ol><li>Insufficient pressing — high residual moisture storage ke dauran exude hoti hai.</li><li>Age-related syneresis — progressive casein contraction entrapped whey release karta hai.</li><li>Storage ke dauran temperature fluctuations (repeated cooling/warming cycles moisture migration promote karte hain).</li><li>Mechanical damage (rough handling, stacking pressure).</li></ol>",
                                action: "<ol><li>Target moisture 52–56% ke liye pressing optimize karo (2.5–3 kg/cm², 15–20 min).</li><li>Free whey soak karne ke liye packaging mein absorber pads use karo.</li><li>Storage ke dauran constant temperature (±1°C) maintain karo; cold room mein door-open events avoid karo.</li><li>Carefully handle karo; proper packing/stacking protocols follow karo.</li></ol>"
                            },
                            {
                                defect: "Blown / Swollen Packs",
                                observed: "Vacuum ya MAP packs mein visible gas inflation dikhta hai; burst ho sakta hai.",
                                cause: "<ol><li>Fermenting organisms se gas production: <em>Leuconostoc</em> spp. (heterofermentative LAB → CO₂), yeasts (<em>Candida</em>, <em>Pichia</em> → CO₂ + ethanol), <em>Clostridium</em> spp. (anaerobic conditions aur spores present hon to → H₂ + CO₂), coliforms (CO₂ + H₂).</li><li>Seal failure se air ingress → aerobic spoilage → gas production.</li></ol>",
                                action: "<ol><li>Hygiene improve karo (initial contamination kam karo); release se pehle finished product ka yeast/coliform count test karo.</li><li>Har batch par seal integrity check karo (leak test); sealing machine calibrate karo.</li><li>Agar <em>Clostridium</em> suspected ho → raw milk supply investigate karo (silage/soil se spore contamination) aur process changes consider karo (tighter pH control, nisin addition).</li></ol>"
                            }
                        ]
                    },
                    process_optimization: {
                        title: "Process Optimization Summary — Key Parameter Windows",
                        table: {
                            headers: ["Parameter", "Under-range Effect", "Optimal Range", "Over-range Effect"],
                            rows: [
                                { param: "Milk Fat (%)", under: "<4.5% → hard, dry, low yield hoga", optimal: "5.5–6.5%", over: ">7.5% → bahut zyada soft, greasy, fat whey mein chali jaayegi" },
                                { param: "Heat Treatment Temp (°C)", under: "<78°C → WP denaturation kam, yield low, pathogens nahi marenge", optimal: "85–90°C / 5–10 min", over: ">95°C → cooked flavor aayega, browning hogi, whey interactions change honge" },
                                { param: "Coagulation Temp (°C)", under: "<65°C → weak, crumbly curd banega", optimal: "70–75°C", over: ">80°C → hard, rubbery curd banega" },
                                { param: "Coagulation pH", under: "<5.0 → sour, crumbly, zyada Ca loss, dry product", optimal: "5.2 ± 0.1", over: ">5.5 → incomplete coagulation, weak curd, whey mein losses zyada" },
                                { param: "Pressing Pressure (kg/cm²)", under: "<1.5 → high moisture, open texture, shelf life short hogi", optimal: "2–3 kg/cm²", over: ">4 → hard, dry, low yield" },
                                { param: "Pressing Time (min)", under: "<10 → poor curd knitting, crumbly product", optimal: "15–20 min", over: ">30 → moisture loss zyada ho jaayegi" },
                                { param: "Chilling Temp (°C)", under: ">10°C → soft product, keeping quality poor", optimal: "4–6°C water, 2–3 h", over: "<0°C → ice crystal damage hoga, cracking hogi (freeze hone par)" },
                                { param: "CaCl₂ Addition (%)", under: "0% (cow milk mein) → weak curd, low yield", optimal: "0.01–0.02%", over: ">0.04% → hard, bitter product" },
                                { param: "Coagulant Concentration", under: "Bahut dilute → slow coagulation, uneven curd", optimal: "1–2% citric acid solution", over: "Bahut concentrated → localized over-acidification, grainy texture" },
                                { param: "Storage Temperature (°C)", under: "<−2°C → freezing damage hoga", optimal: "2–5°C", over: ">8°C → microbial growth rapid, shelf life short" }
                            ]
                        }
                    }
                }
            }
        }
    },
    en: {
        mainTitle: "Industrial Paneer Production",
        description: "Advanced Process Engineering, Yield Optimization & Quality Control — A Scientific Reference 🧀🔬",
        backToTopics: "Back to Topics",
        tabs: {
            process: "Process",
            quality_control: "Quality Control",
            coagulants: "Coagulants",
            yield_texture: "Yield & Texture",
            microbiology: "Microbiology & Safety",
            nutrition: "Nutrition & Composition",
            shelf_life: "Shelf Life & Packaging",
            defects: "Defects & Troubleshooting"
        },
        topics: {
            process: {
                title: "Step-by-Step Production Process — Scientific Basis",
                description: "The following table outlines the standardized industrial procedure for manufacturing paneer, incorporating FSSAI/BIS (IS 10484:1983, revised 2004) guidelines. Each step is annotated with the underlying dairy chemistry and engineering rationale.",
                table: {
                    headers: ["Step No.", "Process Stage", "Key Parameters & Scientific Procedure"],
                    rows: [
                        {
                            step: 1,
                            stage: "Milk Reception & Platform Testing",
                            params: "Raw milk is received at the dairy dock and immediately subjected to platform tests: <strong>COB (Clot-on-Boiling) test</strong> to detect high acidity (>0.20% LA), <strong>Alcohol test</strong> (68-75% ethanol) for colloidal instability, <strong>Lactometer reading</strong> (1.028–1.032 g/mL for cow; 1.030–1.034 g/mL for buffalo) for adulteration screening, and <strong>MBRT (Methylene Blue Reduction Test)</strong> — milk must decolorise in >2 hours (Grade I or II). Only milk meeting these criteria is accepted. Milk temperature at reception should be ≤10°C if transported in insulated tankers."
                        },
                        {
                            step: 2,
                            stage: "Filtration & Clarification",
                            params: "Raw milk is passed through in-line filters (200-mesh stainless steel screens) or a centrifugal <strong>clarifier</strong> operating at 5,000–7,000 × g to remove somatic cells, leucocytes, sediment, and extraneous matter. Clarification at 35–40°C improves separation efficiency. This step reduces the total bacterial count by approximately 50–90% and improves the visual appearance and microbiological quality of the final paneer."
                        },
                        {
                            step: 3,
                            stage: "Milk Standardization",
                            params: "Milk is standardized to a <strong>Fat:SNF ratio of 1:1.52 to 1:1.58</strong> (typically 5.8–6.0% fat and 9.0–9.2% SNF for buffalo milk; for cow milk blends, 4.5–5.0% fat with 8.5–8.8% SNF). Standardization is achieved using <strong>Pearson's Square method</strong> by blending whole milk with skim milk or cream. The casein-to-fat ratio (ideally ~0.68–0.72) governs the body, texture, and sliceability. Buffalo milk is preferred (yields ~18–22% paneer vs. ~14–16% from cow milk) due to higher total solids (~17% vs. ~13%), higher casein content (~3.5% vs. ~2.5%), and larger fat globules (avg. 5–8 μm vs. 3–4 μm) that are better retained in the curd matrix. Mixed milk (60:40 buffalo:cow) is an industrial standard for cost optimization."
                        },
                        {
                            step: 4,
                            stage: "Pre-heating & Homogenization (Optional)",
                            params: "For cow-milk-based paneer or blends, optional <strong>single-stage homogenization</strong> at 2,500 psi (17.2 MPa) at 60–65°C can be applied. Homogenization reduces fat globule diameter from 3–5 μm to <1 μm, increases the fat-surface area by ~6×, and creates a new fat globule membrane containing adsorbed casein micelles. This prevents fat losses in whey (reduces whey fat from ~0.5% to ~0.15%), improves whiteness (CIE L* value ↑ by 3–5 units), and yields a smoother mouthfeel. <strong>Caution:</strong> Over-homogenization (>3,000 psi) in buffalo milk can produce excessively soft, pasty paneer due to disruption of the native fat globule structure. Not recommended for 100% buffalo milk paneer."
                        },
                        {
                            step: 5,
                            stage: "Heat Treatment (Pasteurization / Forewarming)",
                            params: "Standardized milk is heated to <strong>85–90°C for 5–10 minutes</strong> in a tubular or plate heat exchanger, or in a double-jacketed stainless steel vat with agitation. This step achieves multiple objectives: <ul><li><strong>Microbial destruction:</strong> Complete elimination of all vegetative pathogens (6–8 log reduction of <em>Salmonella</em>, <em>E. coli</em> O157:H7, <em>Listeria monocytogenes</em>, <em>Staphylococcus aureus</em>). Spore-forming bacteria (<em>Bacillus cereus</em>) survive but are controlled by subsequent chilling.</li><li><strong>Whey protein denaturation:</strong> At 80°C, approximately 80–90% of β-lactoglobulin (β-Lg, 18.3 kDa) and α-lactalbumin (α-La, 14.2 kDa) undergo irreversible unfolding. Exposed thiol groups (-SH) on β-Lg form disulfide bridges (S-S) with κ-casein on the micelle surface, creating β-Lg–κ-casein complexes. This co-precipitation increases yield by <strong>5–8%</strong> because denatured whey proteins (~0.6–0.7% of milk) are physically entrapped in the casein gel network instead of being lost in whey.</li><li><strong>Enzyme inactivation:</strong> Native milk lipase (lipoprotein lipase, LPL) and alkaline phosphatase are inactivated, preventing lipolysis (rancid off-flavors) and confirming adequate heat treatment (negative phosphatase test).</li><li><strong>Calcium equilibrium shift:</strong> Heating shifts soluble calcium to colloidal calcium phosphate (CCP), increasing it within casein micelles. This enhances the firmness and water-holding capacity (WHC) of the final curd.</li></ul>"
                        },
                        {
                            step: 6,
                            stage: "Cooling to Coagulation Temperature",
                            params: "Heated milk is cooled to the coagulation temperature of <strong>70–75°C</strong> (optimum: 72°C). This temperature is critical: <ul><li>At <65°C: Coagulation is sluggish, curd is weak and fragile, casein aggregation is incomplete, resulting in high whey losses and crumbly texture.</li><li>At 70–75°C: Optimal balance between protein denaturation, calcium-mediated aggregation, and fat entrapment. The resulting curd has the highest WHC.</li><li>At >80°C: Rapid coagulation produces a hard, rubbery curd with excessive moisture expulsion; Maillard browning may occur at the surface; fat leakage into whey increases.</li></ul> In continuous systems, a PHE (plate heat exchanger) with a regeneration efficiency of 85–90% is used for energy conservation."
                        },
                        {
                            step: 7,
                            stage: "Coagulation (Acid-Induced Gelation)",
                            params: "A coagulant (typically <strong>1–2% w/v citric acid solution</strong> at 70°C, or sour whey at 0.8–0.9% lactic acid) is added <strong>slowly and continuously</strong> to the hot milk while stirring gently at 30–40 RPM with a flat paddle. The coagulant is added at a rate that brings the milk pH from ~6.6 to the <strong>isoelectric point of casein (pH 5.2–5.4)</strong> within 2–3 minutes. <br/><br/><strong>Mechanism:</strong> As pH decreases, the negative charge (zeta potential) on casein micelles is neutralized (from approximately −20 mV at pH 6.6 to ~0 mV at pH 4.6). At pH 5.2–5.4, which is slightly above the true isoelectric point (pI = 4.6), sufficient charge neutralization occurs for hydrophobic interactions and calcium-phosphate bridging to dominate, causing rapid micellar aggregation. Fat globules are physically entrapped within the collapsing casein network. <br/><br/><strong>End-point indicators:</strong> Stirring is stopped when the whey separating from the curd mass is <strong>clear and greenish-yellow</strong> (not milky or turbid). Turbid whey indicates incomplete coagulation or excess fine curd particles being lost. The curd mass should appear as a cohesive, smooth, glossy white aggregate. Whey pH should read <strong>5.2 ± 0.1</strong> using a calibrated digital pH meter."
                        },
                        {
                            step: 8,
                            stage: "Curd Setting & Whey Draining",
                            params: "After coagulation, the curd is allowed to <strong>rest undisturbed for 5–10 minutes</strong> in the vat. This quiescent period permits syneresis — the spontaneous expulsion of whey from the contracting casein gel due to continued protein–protein interactions and rearrangement of the gel network. During this time, the curd contracts and whey pools on the surface and around the curd mass. <br/><br/>The whey is then carefully drained through a <strong>perforated stainless steel drain plate or muslin-lined sieve</strong>. Whey volume is approximately <strong>80–85% of the original milk volume</strong>. Whey composition: ~93% water, 0.8–0.9% protein (mostly α-La, β-Lg, BSA, immunoglobulins, and GMP — glycomacropeptide released from κ-casein by acid), 4.5–5.0% lactose, 0.3–0.5% fat, 0.5–0.7% minerals. This whey has a BOD of ~35,000–40,000 mg/L and <strong>must not be discharged untreated</strong>; it is processed into whey powder, WPC, or used for lactose/lactic acid production."
                        },
                        {
                            step: 9,
                            stage: "Hooping & Pressing",
                            params: "The hot curd mass (60–65°C) is transferred immediately into <strong>food-grade stainless steel (SS 304/316) hoops or rectangular molds</strong> lined with double-layered muslin cloth (cheese cloth, ~60 threads/inch). Rapid transfer prevents the curd from cooling below 55°C, which would reduce its ability to fuse and knit into a cohesive block. <br/><br/>Pressing is applied using hydraulic, pneumatic, or screw presses at <strong>2–3 kg/cm² (196–294 kPa) for 15–20 minutes</strong>. <br/><br/><strong>Scientific basis of pressing:</strong> Mechanical pressure accelerates syneresis by compressing the casein gel matrix, forcing whey through interstitial channels. Simultaneously, the high temperature allows fat to remain partially liquid, acting as a plasticizer that helps casein strands fuse and form a smooth, continuous protein matrix. This is the critical step that defines paneer's characteristic <strong>compact, non-crumbly body</strong>. Excessive pressure (>4 kg/cm²) leads to over-expulsion of moisture and fat (>2% fat loss in whey), resulting in a dry, hard product with poor mouthfeel. Insufficient pressure (<1.5 kg/cm²) leads to an open-textured, high-moisture product susceptible to rapid spoilage."
                        },
                        {
                            step: 10,
                            stage: "Immersion Chilling",
                            params: "The pressed paneer block (internal temp ~45–55°C) is <strong>de-hooped</strong> and immediately immersed in <strong>chilled water or pasteurized chilled brine (2–4% NaCl at 4–6°C)</strong> for <strong>2–3 hours</strong>. <br/><br/><strong>Scientific purpose:</strong> <ul><li><strong>Rapid cooling:</strong> The core temperature must drop below 10°C within 2 hours to exit the microbial danger zone (10–60°C). Cooling rate depends on block dimensions — standard 1 kg blocks (~15 × 10 × 6 cm) achieve this readily.</li><li><strong>Texture firming:</strong> Rapid cooling solidifies milk fat (which has a crystallization range of 15–38°C depending on fatty acid profile), transforming the pliable warm curd into a firm, sliceable block. Fat crystallization creates a rigid scaffold within the protein matrix.</li><li><strong>Surface rind formation:</strong> Chilling creates a slightly denser outer layer (rind) that reduces surface moisture activity, providing a mild barrier to spoilage organisms.</li><li><strong>Moisture equilibration:</strong> The block absorbs 2–5% of its weight in water during chilling, which compensates for pressing losses and adjusts the final moisture to the desired range of 52–58%.</li></ul>"
                        },
                        {
                            step: 11,
                            stage: "Cutting, Weighing & Packaging",
                            params: "Chilled paneer blocks are removed, surface-dried on SS racks for 5–10 minutes, then <strong>cut to specified retail dimensions</strong> using automated ultrasonic cutters or wire-cutting frames for precision and minimal product loss. Each piece is weighed on calibrated scales (±1 g accuracy). <br/><br/><strong>Packaging options:</strong> <ul><li><strong>Vacuum packaging (VP):</strong> Removes air to create an anaerobic environment, reducing oxidative rancidity and aerobic microbial growth. Extends shelf life to 20–30 days at 4°C. Residual O₂ < 1%. Packaging material: LDPE/nylon laminate (OTR < 20 cc/m²/24h).</li><li><strong>Modified Atmosphere Packaging (MAP):</strong> Flushed with N₂/CO₂ mixture (typically 30:70 or 50:50). CO₂ dissolves in surface moisture forming carbonic acid, lowering surface pH and inhibiting Gram-negative spoilage bacteria (<em>Pseudomonas</em> spp.). Extends shelf life to 25–45 days.</li><li><strong>Brine pouches:</strong> Immersed in 2–4% NaCl brine with potassium sorbate (0.1%) in LDPE pouches. Traditional method; shelf life 7–15 days.</li><li><strong>Retort packaging:</strong> Paneer in retortable pouches (PET/Al-foil/PP laminate) is thermally processed at 121°C for 15–20 min (F₀ = 5–7 min). Achieves commercial sterility; shelf life 6–12 months at ambient temperature. Texture becomes softer and slightly brownish due to Maillard reactions.</li></ul> The final product is stored in cold rooms at <strong>2–5°C</strong> with >85% RH to prevent surface drying. FIFO (First In, First Out) inventory rotation is mandatory."
                        }
                    ]
                },
                advanced_process_notes: {
                    title: "Advanced Process Engineering Notes",
                    description: "Supplementary scientific information for process optimization.",
                    sections: [
                        {
                            title: "Continuous vs. Batch Processing",
                            content: "Modern large-scale dairies employ <strong>continuous paneer-making machines</strong> (e.g., the NDRI continuous paneer plant or Alfa Laval/Tetra Pak modular systems) capable of processing 5,000–10,000 L/h. In continuous systems, milk is heated via indirect UHT-type plate heat exchangers, and coagulant is injected inline using metering pumps at a precisely controlled flow ratio (typically 1:8 to 1:12 coagulant:milk by volume). The coagulum is formed in a tubular reactor with residence time of 30–60 seconds, then passes to a continuous drainage belt and pressing unit. Continuous systems offer superior consistency (±0.5% variation in moisture) compared to batch processing (±2–3% variation), but require higher capital investment (₹1.5–3 Cr for a 2,000 L/h line)."
                        },
                        {
                            title: "Role of Calcium in Coagulation",
                            content: "Milk contains ~120 mg/dL total calcium, of which ~65–70% is colloidal (bound to casein micelles as CCP — colloidal calcium phosphate, primarily Ca₉(PO₄)₆ nanoclusters) and ~30–35% is soluble (ionic Ca²⁺ + calcium citrate + calcium phosphate in solution). During acid coagulation, as pH falls from 6.6 to 5.2, CCP is <strong>progressively solubilized</strong> — releasing Ca²⁺ and inorganic phosphate (Pi) into the serum phase. By pH 5.0, nearly 100% of CCP has dissolved. This loss of the internal 'cement' of casein micelles causes them to swell (hydrate) and ultimately dissociate into individual casein molecules (αS1, αS2, β, κ). At the isoelectric point, these dissociated caseins aggregate via <strong>hydrophobic interactions</strong> and <strong>hydrogen bonding</strong> into a new, acid-set gel network. This gel is fundamentally different from the rennet-set gel in cheese, which retains CCP and relies on enzymatic cleavage of κ-casein."
                        },
                        {
                            title: "Water Activity (aᵥ) Considerations",
                            content: "Fresh paneer has a water activity (aᵥ) of <strong>0.97–0.99</strong>, which is very high and supports the growth of virtually all foodborne pathogens and spoilage organisms. This is why temperature control (cold chain maintenance at <5°C) is the primary hurdle. Reducing aᵥ to <0.95 via partial drying, salting, or humectant addition can extend shelf life but alters the traditional sensory profile. For reference: <em>S. aureus</em> growth minimum aᵥ = 0.83; <em>E. coli</em> = 0.95; yeasts = 0.88; molds = 0.80."
                        }
                    ]
                },
                quality_control: {
                    title: "Raw Material & In-Process Quality Control",
                    description: "The quality of paneer is a direct function of the incoming milk quality and strict in-process controls. Industrial dairies employ a tiered quality assurance (QA) system covering incoming raw materials, critical control points (CCPs) during processing, and finished product testing conforming to FSSAI standards (FSS Regulations 2011, amended 2020) and BIS IS 10484.",
                    raw_milk_table: {
                        title: "Raw Milk Quality Parameters",
                        headers: ["Parameter", "Test Method", "Ideal Range (Buffalo)", "Ideal Range (Cow)", "Scientific Significance"],
                        rows: [
                            {
                                param: "Fat Content (%)",
                                method: "Gerber method (IS 1224) / Milko-Scan FTIR",
                                buffalo: "6.0 – 7.5%",
                                cow: "3.5 – 4.5%",
                                importance: "Fat acts as a plasticizer within the casein matrix, imparting smoothness, softness, and flavor. Fat globules are physically entrapped during coagulation; higher fat = higher yield (approximately 1% increase in milk fat ≈ 1.5–2% increase in paneer yield). Buffalo milk fat has higher levels of saturated fatty acids (C16:0 palmitic ~30%, C18:0 stearic ~12%) giving firmer fat crystals and better body."
                            },
                            {
                                param: "SNF (Solids-Not-Fat) (%)",
                                method: "Lactometer + Fat test (IS 10083) / FTIR",
                                buffalo: "9.0 – 10.0%",
                                cow: "8.3 – 8.8%",
                                importance: "SNF includes protein (~3.3–4.5%), lactose (~4.5–5.0%), and minerals (~0.7–0.8%). The protein fraction — particularly <strong>casein</strong> (αS1, αS2, β, κ-casein, comprising ~80% of total milk protein) — forms the structural backbone of the paneer matrix. Higher casein = denser gel = firmer paneer. Lactose contributes to Maillard browning during frying."
                            },
                            {
                                param: "Total Protein (%)",
                                method: "Kjeldahl (IS 1479 Part II) / Dumas combustion / FTIR",
                                buffalo: "3.8 – 4.5%",
                                cow: "3.0 – 3.5%",
                                importance: "Total protein = casein + whey proteins. The casein fraction (CN/TP ratio: ~80% in buffalo, ~78% in cow) is the primary yield-determining factor. A 0.1% increase in casein content can increase paneer yield by ~0.5%. Whey proteins (~20% of TP) contribute to yield only if denatured by high-heat treatment."
                            },
                            {
                                param: "Titratable Acidity (% LA)",
                                method: "Titration with 0.1N NaOH / Dornic method",
                                buffalo: "0.14 – 0.16%",
                                cow: "0.13 – 0.15%",
                                importance: "Reflects freshness. Fresh milk acidity is due to casein, phosphates, citrates, CO₂, and albumin (natural acidity ~0.12–0.14%). Developed acidity (from bacterial lactose → lactic acid fermentation) above 0.18% indicates poor hygiene or prolonged storage. High acidity (>0.20%) causes <strong>premature coagulation</strong> during heating, weak curd structure, high fat loss in whey, crumbly texture, and sour off-flavor."
                            },
                            {
                                param: "pH",
                                method: "Digital pH meter (glass electrode, calibrated at 25°C)",
                                buffalo: "6.6 – 6.8",
                                cow: "6.6 – 6.7",
                                importance: "pH and titratable acidity are complementary but not interchangeable. pH measures free H⁺ activity; TA measures total titratable acid. Buffalo milk has higher buffering capacity (due to higher casein and phosphate) — thus can have the same pH as cow milk but higher TA. pH < 6.4 is rejected."
                            },
                            {
                                param: "SPC (Standard Plate Count)",
                                method: "Pour plate on PCA, 37°C/48h (IS 5402)",
                                buffalo: "< 2 × 10⁵ CFU/mL",
                                cow: "< 2 × 10⁵ CFU/mL",
                                importance: "Indicates overall microbiological quality and hygiene during milking, handling, and transport. High SPC (>5 × 10⁵) correlates with higher protease and lipase production that can cause off-flavors, bitterness, and rancidity in the final paneer, even after pasteurization (heat-stable bacterial enzymes from psychrotrophs like <em>Pseudomonas fluorescens</em>)."
                            },
                            {
                                param: "Somatic Cell Count (SCC)",
                                method: "Fossomatic FC / direct microscopic SCC (DMSCC)",
                                buffalo: "< 3 × 10⁵ cells/mL",
                                cow: "< 2 × 10⁵ cells/mL",
                                importance: "Elevated SCC (>5 × 10⁵) indicates subclinical mastitis. Mastitic milk has altered composition: ↑ whey proteins (especially BSA and Ig), ↑ Na⁺ and Cl⁻, ↓ casein, ↓ lactose, ↓ calcium, ↑ plasmin activity (which degrades β-casein → γ-caseins + proteose-peptones). This results in <strong>poor coagulation</strong>, soft/weak curd, reduced yield (5–15% loss), and bitter off-flavors."
                            },
                            {
                                param: "Antibiotic Residues",
                                method: "Charm/Delvotest/SNAP (screening); HPLC (confirmation)",
                                buffalo: "Below MRL (e.g., β-lactam <4 ppb)",
                                cow: "Below MRL (FSSAI limits)",
                                importance: "Presence of antibiotics (β-lactams, tetracyclines, sulfonamides, aminoglycosides) above Maximum Residue Limits (MRLs) violates food safety regulations. They also interfere with starter cultures if used for sour whey preparation and pose public health risks (allergies, AMR). Milk testing positive is <strong>rejected</strong>."
                            },
                            {
                                param: "Adulterants",
                                method: "Qualitative tests: starch (iodine test), urea (DMAB test), neutralizers (rosalic acid test), detergent (methylene blue test), H₂O₂ (KI-starch test)",
                                buffalo: "Absent",
                                cow: "Absent",
                                importance: "Common adulterants in Indian milk supply chains include water (detected by freezing point depression < −0.525°C or density anomalies), urea (increases apparent SNF; >70 ppm indicates adulteration), starch, cane sugar, sodium chloride, sodium bicarbonate/carbonate (neutralizers to mask developed acidity), and detergent/hydrogen peroxide (preservatives). Any adulteration leads to <strong>rejection</strong>."
                            },
                            {
                                param: "Freezing Point (°C)",
                                method: "Thermistor cryoscope (IS 1479 Part III)",
                                buffalo: "−0.547 to −0.560°C",
                                cow: "−0.525 to −0.540°C",
                                importance: "The freezing point of genuine milk is depressed below 0°C due to dissolved lactose and minerals (colligative property). Water addition raises the freezing point toward 0°C. A value above −0.510°C (cow) or −0.530°C (buffalo) strongly suggests water adulteration. Each 1% added water raises FP by ~0.0054°C."
                            }
                        ]
                    },
                    in_process_table: {
                        title: "In-Process Quality Control (Critical Control Points)",
                        headers: ["CCP/Stage", "Parameter Monitored", "Target Value", "Monitoring Method", "Corrective Action"],
                        rows: [
                            {
                                stage: "Milk Heating",
                                param: "Temperature / Time",
                                target: "85–90°C / 5–10 min",
                                method: "Inline RTD sensor + chart recorder / SCADA",
                                action: "If temp < 82°C or hold time < 5 min → re-pasteurize. Check PHE gaskets, steam supply, flow diversion valve (FDV)."
                            },
                            {
                                stage: "Coagulation",
                                param: "Whey pH at endpoint",
                                target: "5.2 ± 0.1",
                                method: "Digital pH meter (checked every batch)",
                                action: "If pH > 5.5 → add more coagulant slowly. If pH < 4.8 → coagulant over-addition; the batch will yield sour, crumbly paneer. Adjust coagulant flow rate for subsequent batches."
                            },
                            {
                                stage: "Coagulation",
                                param: "Coagulation temperature",
                                target: "70–75°C",
                                method: "Thermometer / RTD probe in vat",
                                action: "If temp < 65°C → reheat gently before adding coagulant. If temp > 80°C → cool to target range."
                            },
                            {
                                stage: "Pressing",
                                param: "Pressure & Duration",
                                target: "2–3 kg/cm² / 15–20 min",
                                method: "Pressure gauge on press / timer",
                                action: "Adjust pressure regulator. Inspect muslin cloth for clogging."
                            },
                            {
                                stage: "Chilling",
                                param: "Water temperature; core temp of block after chilling",
                                target: "Water: 4–6°C; Core: <10°C within 2 h",
                                method: "Thermometer in water bath; probe thermometer in paneer block",
                                action: "If water temp > 8°C → add ice or check chiller compressor. If core temp not reached → extend chilling time or reduce block size."
                            },
                            {
                                stage: "Packaging",
                                param: "Vacuum level (VP); gas composition (MAP); seal integrity",
                                target: "VP: residual O₂ < 1%; MAP: CO₂ 30±5%, N₂ 70±5%; seal: no leaks",
                                method: "O₂/CO₂ analyzers (e.g., Dansensor CheckMate); dye penetration/bubble leak test for seals",
                                action: "Re-calibrate gas mixer; replace sealing jaws; reject leaky packs."
                            }
                        ]
                    },
                    finished_product_table: {
                        title: "Finished Product Specifications (as per FSSAI & IS 10484)",
                        headers: ["Parameter", "FSSAI/BIS Standard", "Typical Value (Buffalo Milk Paneer)", "Test Method"],
                        rows: [
                            { param: "Moisture (% max)", standard: "≤ 60%", typical: "52–58%", method: "Oven drying at 102°C ± 2°C to constant weight (IS 12291)" },
                            { param: "Fat on Dry Matter (% min)", standard: "≥ 50%", typical: "52–58%", method: "Gerber method on dissolved paneer sample (IS 2785)" },
                            { param: "Titratable Acidity (% LA, max)", standard: "≤ 0.5%", typical: "0.30–0.45%", method: "Titration of paneer homogenate with 0.1N NaOH" },
                            { param: "Total Plate Count (CFU/g, max)", standard: "≤ 5 × 10⁴", typical: "10³–10⁴", method: "Pour plate on PCA, 37°C/48h" },
                            { param: "Coliform Count (CFU/g, max)", standard: "≤ 10", typical: "< 10", method: "Pour plate on VRBA, 37°C/24h" },
                            { param: "Yeast & Mold (CFU/g, max)", standard: "≤ 50", typical: "< 25", method: "Spread plate on PDA with chloramphenicol, 25°C/5d" },
                            { param: "E. coli", standard: "Absent in 1 g", typical: "Absent", method: "Enrichment + selective plating (EMB / CT-SMAC)" },
                            { param: "Salmonella spp.", standard: "Absent in 25 g", typical: "Absent", method: "ISO 6579 / BAM method / PCR" },
                            { param: "Listeria monocytogenes", standard: "Absent in 25 g", typical: "Absent", method: "ISO 11290 / ALOA agar / PCR" },
                            { param: "Staphylococcal enterotoxin", standard: "Not detectable", typical: "ND", method: "ELISA / RPLA" },
                            { param: "Lead (mg/kg, max)", standard: "≤ 0.5", typical: "< 0.05", method: "AAS / ICP-MS (IS 5765)" },
                            { param: "Aflatoxin M1 (μg/kg, max)", standard: "≤ 0.5", typical: "< 0.1", method: "HPLC with fluorescence / ELISA" },
                            { param: "Pesticide Residues", standard: "Within MRL (FSS Contaminants Regulations)", typical: "Below LOD", method: "GC-MS/MS, LC-MS/MS (multi-residue method)" }
                        ]
                    },
                    sensory_evaluation: {
                        title: "Sensory Evaluation Parameters",
                        description: "Trained sensory panels evaluate paneer on a 9-point hedonic scale or using descriptive analysis (DA) with specific attributes:",
                        attributes: [
                            { name: "Appearance", criteria: "Smooth, uniform surface; white to light cream color (CIE L* > 88, a* < 1.0, b* 10–15); no cracks, pinholes, or surface sliminess." },
                            { name: "Body & Texture", criteria: "Firm, compact, cohesive; smooth on cutting (clean-cut surface, no crumbling); slightly spongy when compressed; no graininess, rubberiness, or pastiness." },
                            { name: "Flavor & Aroma", criteria: "Mild, pleasant acidic flavor; characteristic cooked-milk aroma; no bitterness, rancidity, sourness, or foreign/metallic off-flavors." },
                            { name: "Mouthfeel", criteria: "Smooth; melts partially on chewing; not excessively chewy, gritty, or sticky." }
                        ]
                    }
                },
                coagulants: {
                    title: "Coagulants: Types, Mechanism & Optimization",
                    description: "The coagulant is arguably the single most important variable (after milk composition) in determining paneer quality. Paneer production relies on <strong>acid coagulation</strong> — the destabilization of the casein micelle system by lowering pH toward the isoelectric point (pI = 4.6 for whole casein; operational target = pH 5.2–5.4 for paneer). Unlike cheese, no enzymatic (rennet) coagulation is involved.",
                    mechanism_detail: {
                        title: "Mechanism of Acid Coagulation — Detailed",
                        content: "At native milk pH (~6.7), casein micelles carry a net negative surface charge (zeta potential ≈ −20 mV), maintained by the protruding 'hairy' layer of κ-casein C-terminal glycomacropeptide (GMP, residues 106–169). This charge, combined with steric repulsion from the GMP brush layer and hydration of the micelle surface, keeps micelles in a stable colloidal suspension. <br/><br/>As acid is added and pH drops: <ol><li><strong>pH 6.7 → 6.0:</strong> Colloidal calcium phosphate (CCP) begins to dissolve (Ca₉(PO₄)₆ → 9Ca²⁺ + 6PO₄³⁻). Micelles start to swell as internal structural 'nanoclusters' are lost. Electrostatic repulsion decreases slowly.</li><li><strong>pH 6.0 → 5.5:</strong> Extensive CCP dissolution. Micelles become depleted of structural calcium. Individual caseins (αS1, αS2, β, κ) begin to dissociate from the micelle into the serum. β-casein, being the most hydrophobic and temperature-sensitive, dissociates significantly at low temperatures but remains associated at >20°C.</li><li><strong>pH 5.5 → 5.0:</strong> Charge neutralization zone. The net negative charge on casein approaches zero. Hydrophobic interactions between exposed non-polar domains of caseins become dominant, causing rapid aggregation. At the coagulation temperature of 70–75°C, hydrophobic interactions are maximized (since they are entropy-driven and strengthen with increasing temperature). This produces a strong, cohesive gel.</li><li><strong>pH 5.0 → 4.6 (pI):</strong> Complete charge neutralization. Maximum aggregation. In paneer, we do NOT go to pH 4.6 — we stop at 5.2–5.4 because: (a) at this pH, the curd has sufficient firmness and cohesion; (b) going lower makes paneer excessively acidic (sour taste), causes excessive moisture expulsion (dry, hard texture), and increases calcium loss into whey (weakening the curd).</li></ol>"
                    },
                    types: [
                        {
                            name: "Citric Acid (C₆H₈O₇ · H₂O, MW 210.14)",
                            details: "<strong>Preparation:</strong> 1–2% w/v solution (10–20 g anhydrous citric acid per litre of water at 70–80°C). Use food-grade citric acid (INS 330, E330), ≥99.5% purity (IP/USP/FCC grade). <br/><br/><strong>Dosage:</strong> Approximately 2.0–2.5 g citric acid per litre of milk (varies with milk buffering capacity). Buffalo milk requires 10–15% more coagulant than cow milk due to higher buffering capacity (higher casein and phosphate). <br/><br/><strong>pKa values:</strong> pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40. At the operational pH of 5.2, citric acid exists predominantly as citrate²⁻ and H-citrate²⁻ species. Its triprotic nature provides <strong>excellent buffering action</strong> around the target pH, making it easier to approach pH 5.2 without overshooting. <br/><br/><strong>Advantages:</strong> Clean, mildly tart flavor; excellent reproducibility; easy concentration standardization; chelates calcium (forming calcium citrate), which can slightly soften texture; globally available and inexpensive. <br/><br/><strong>Disadvantages:</strong> Over-addition (pH < 5.0) → sour, crumbly paneer with poor body."
                        },
                        {
                            name: "Acetic Acid / Vinegar (CH₃COOH, MW 60.05)",
                            details: "<strong>Preparation:</strong> Dilute glacial acetic acid (food-grade, E260) to 1–2% v/v; OR use commercial white vinegar (~4–6% acetic acid) diluted 1:2 with water. <br/><br/><strong>pKa:</strong> 4.76 (monoprotic). Being monoprotic, acetic acid provides less buffering than citric acid, making pH overshoot more likely. Requires more careful addition rate control. <br/><br/><strong>Dosage:</strong> ~3–4 mL glacial acetic acid per litre of milk. <br/><br/><strong>Advantages:</strong> Readily available, inexpensive, effective. <br/><br/><strong>Disadvantages:</strong> Can impart a detectable acetic/vinegar-like aroma (volatile acid, bp 118°C — partially released at coagulation temperature); more difficult to control endpoint pH precisely due to monoprotic nature; produces a slightly different curd microstructure (some studies report slightly more open texture with larger whey pockets). Generally considered the <strong>second choice</strong> after citric acid in Indian industry."
                        },
                        {
                            name: "Lactic Acid (CH₃CHOHCOOH, MW 90.08)",
                            details: "<strong>Preparation:</strong> Food-grade 88% L(+)-lactic acid (E270) diluted to 1–2% w/v. <br/><br/><strong>pKa:</strong> 3.86 (monoprotic). Stronger acid than acetic; requires careful dosing. <br/><br/><strong>Advantages:</strong> The 'natural' acid of milk fermentation; produces the most authentic, traditional flavor profile. Forms calcium lactate which has moderate solubility — resulting in intermediate curd firmness. Some studies (Sachdeva & Singh, 1988; NDRI Karnal) report slightly higher yield with lactic acid compared to citric acid (+1–2%) attributed to finer, more uniform curd particles with better whey protein retention. <br/><br/><strong>Disadvantages:</strong> More expensive than citric acid; requires precise metering to avoid over-acidification."
                        },
                        {
                            name: "Tartaric Acid (C₄H₆O₆, MW 150.09)",
                            details: "<strong>Preparation:</strong> 1–2% w/v solution of food-grade L(+)-tartaric acid (E334). <br/><br/><strong>pKa values:</strong> pKa₁ = 2.89, pKa₂ = 4.34. Diprotic acid, stronger than citric. <br/><br/><strong>Usage:</strong> Less common industrially; sometimes used in research settings. Produces paneer with good body and slightly different flavor profile. Calcium tartrate has low solubility and can precipitate as fine crystals ('wine diamonds') if used excessively, causing graininess."
                        },
                        {
                            name: "Sour Whey (Cultured Whey)",
                            details: "<strong>Preparation:</strong> Whey from a previous paneer batch is incubated at 30–37°C for 12–24 hours to develop lactic acid via residual LAB (Lactobacillus, Lactococcus). Target acidity: <strong>0.8–1.0% lactic acid</strong> (pH ~3.8–4.2). Alternatively, fresh whey can be inoculated with defined LAB starter culture (e.g., <em>Lactobacillus delbrueckii</em> ssp. <em>bulgaricus</em>) for more consistent results. <br/><br/><strong>Dosage:</strong> ~25–30% of milk volume (high volume required due to dilute acid content). <br/><br/><strong>Advantages:</strong> Traditional, economical (utilizes a waste stream), produces softer paneer with characteristic 'dahi-like' aroma (due to diacetyl, acetaldehyde, and other LAB metabolites). <br/><br/><strong>Disadvantages:</strong> <strong>Inconsistent acid strength</strong> between batches (depends on LAB activity, temperature, holding time); risk of bacteriophage attack on LAB; potential contamination with pathogenic or spoilage organisms if fermentation conditions are not controlled; dilution of milk solids (lowers yield slightly); longer coagulation process due to slower acid delivery."
                        },
                        {
                            name: "Calcium Chloride (CaCl₂ · 2H₂O, MW 147.01)",
                            details: "<strong>Role:</strong> <strong>Not a primary coagulant</strong> — used as a <strong>coagulation aid / calcium fortifier</strong>. <br/><br/><strong>Preparation & Dosage:</strong> 0.01–0.02% w/v of milk (100–200 mg/L) dissolved in water, added to milk before heating or at least 15 minutes before coagulant addition. Maximum permitted: 0.02% (200 ppm) per FSSAI/Codex. <br/><br/><strong>Mechanism:</strong> Increases ionic Ca²⁺ concentration in the serum phase, which: (1) promotes faster and firmer casein aggregation during acid coagulation (Ca²⁺ acts as a cross-bridging agent between negatively charged casein molecules), (2) partially restores the calcium equilibrium disrupted by pasteurization (heating converts ~5–10% of soluble Ca²⁺ to insoluble CCP, reducing coagulability), (3) improves the water-holding capacity and yield by ~1–3% (more complete protein aggregation, less protein lost in whey). <br/><br/><strong>Especially useful for:</strong> Cow milk (lower native calcium than buffalo), UHT-treated milk, milk from late-lactation cows (lower Ca²⁺), and stored/cold-stored milk. <br/><br/><strong>Caution:</strong> Excess CaCl₂ (>0.04%) causes excessively hard/rubbery curd, bitter flavor (CaCl₂ is inherently bitter), and potential calcium phosphate precipitates (white specks)."
                        },
                        {
                            name: "Glucono-Delta-Lactone (GDL, C₆H₁₀O₆, MW 178.14)",
                            details: "<strong>Mechanism:</strong> GDL (E575) is a cyclic ester that slowly hydrolyzes in water to produce gluconic acid. This slow, uniform acid release provides very even coagulation — producing an exceptionally <strong>smooth, silky, and uniform</strong> curd structure. <br/><br/><strong>Dosage:</strong> 0.3–0.5% w/w of milk. <br/><br/><strong>Advantages:</strong> Provides the most homogeneous gel of all acid coagulants; no pH overshoot risk; very mild, clean flavor (gluconic acid is a weak acid, pKa = 3.86). Used for tofu production in East Asia and increasingly researched for paneer. <br/><br/><strong>Disadvantages:</strong> Slow coagulation (20–30 minutes at 70°C vs. 2–3 minutes for citric acid); higher cost; limited availability in India; not traditional."
                        }
                    ],
                    comparison_table: {
                        title: "Comparative Summary of Coagulants",
                        headers: ["Coagulant", "Type", "pKa(s)", "Dose per L Milk", "Coagulation Speed", "Flavor Impact", "Texture Impact", "Yield Impact", "Industrial Preference"],
                        rows: [
                            { coagulant: "Citric acid", type: "Triprotic organic acid", pka: "3.13, 4.76, 6.40", dose: "2.0–2.5 g", speed: "Fast (2–3 min)", flavor: "Clean, mild tart", texture: "Smooth, firm", yield: "Baseline (reference)", preference: "⭐⭐⭐⭐⭐ (#1)" },
                            { coagulant: "Lactic acid", type: "Monoprotic organic acid", pka: "3.86", dose: "2.5–3.0 mL (88%)", speed: "Fast", flavor: "Natural, mild sour", texture: "Smooth, slightly softer", yield: "+1–2%", preference: "⭐⭐⭐" },
                            { coagulant: "Acetic acid", type: "Monoprotic organic acid", pka: "4.76", dose: "3–4 mL (glacial)", speed: "Fast", flavor: "Vinegar note possible", texture: "Slightly open", yield: "Comparable", preference: "⭐⭐⭐" },
                            { coagulant: "Tartaric acid", type: "Diprotic organic acid", pka: "2.89, 4.34", dose: "2.0–2.5 g", speed: "Fast", flavor: "Slightly tart", texture: "Firm, can be grainy", yield: "Comparable", preference: "⭐⭐" },
                            { coagulant: "Sour whey", type: "Mixed organic acids", pka: "Variable", dose: "250–300 mL", speed: "Moderate", flavor: "Traditional, dahi-like", texture: "Soft, traditional", yield: "−1–3% (dilution)", preference: "⭐⭐⭐ (traditional)" },
                            { coagulant: "GDL", type: "Lactone → gluconic acid", pka: "3.86 (gluconic)", dose: "3–5 g", speed: "Slow (20–30 min)", flavor: "Very clean, neutral", texture: "Very smooth, silky", yield: "+2–3%", preference: "⭐⭐ (emerging)" },
                            { coagulant: "CaCl₂", type: "Coagulation aid (salt)", pka: "N/A", dose: "0.1–0.2 g", speed: "N/A (adjunct)", flavor: "Bitter if excess", texture: "Firmer curd", yield: "+1–3%", preference: "⭐⭐⭐⭐ (adjunct)" }
                        ]
                    }
                },
                yield_texture: {
                    title: "Yield Optimization & Texture Science",
                    yield: {
                        title: "Paneer Yield — Calculation & Optimization",
                        description: "Yield is the most critical economic parameter in paneer manufacturing. It is defined as the mass of paneer obtained per unit mass of milk processed.",
                        formulas: {
                            title: "Yield Calculation Formulas",
                            content: "<strong>1. Actual Yield (%):</strong><br/> <code>Yield (%) = (Mass of paneer obtained / Mass of milk used) × 100</code><br/><br/><strong>2. Adjusted Yield (standardized to reference moisture):</strong><br/> <code>Adjusted Yield = Actual Yield × (100 − Actual Moisture%) / (100 − Reference Moisture%)</code><br/>Reference moisture is typically 55%. This allows fair comparison across batches with varying moisture content.<br/><br/><strong>3. Theoretical Maximum Yield (Van Slyke-type estimate for paneer):</strong><br/> <code>Y_theoretical ≈ [(Fat × R_f) + (Casein × R_cn) + (Denatured WP × R_wp)] / (1 − M/100)</code><br/>Where R_f = fat recovery factor (~0.90–0.93), R_cn = casein recovery (~0.95–0.97), R_wp = whey protein recovery (~0.40–0.80 depending on heat treatment), M = target moisture (%). <br/><br/><strong>Typical industrial yields:</strong><br/> Buffalo milk (6.5% fat, 9.5% SNF): <strong>18–22%</strong><br/> Cow milk (4.0% fat, 8.5% SNF): <strong>14–16%</strong><br/> Mixed milk (60:40 B:C): <strong>16–19%</strong>"
                        },
                        methods: [
                            {
                                method: "Optimal Heat Treatment (85–90°C / 5–10 min)",
                                detail: "<strong>Mechanism:</strong> β-Lactoglobulin (β-Lg, 18.3 kDa, 2–4 g/L in milk) has a denaturation temperature of ~78°C. At 85–90°C, approximately 80–90% of β-Lg unfolds, exposing its single free thiol group (Cys-121) and hydrophobic core. The exposed thiol initiates a thiol-disulfide exchange reaction with κ-casein (Cys-11—Cys-88 or Cys-88—Cys-11) on the casein micelle surface, forming covalent β-Lg–κ-casein complexes. α-Lactalbumin (α-La, 14.2 kDa, 1–1.5 g/L) also denatures but requires the presence of β-Lg for aggregation (α-La lacks a free thiol). These denatured whey proteins are physically incorporated into the acid casein gel, increasing total solids recovery by <strong>5–8%</strong>. Underheating (72°C/15s, standard HTST) denatures only ~10–15% of β-Lg, resulting in significant whey protein loss and lower yield. UHT treatment (138°C/2–4s) denatures >95% of whey proteins but can produce a 'cooked' flavor and slight browning."
                            },
                            {
                                method: "Optimal Coagulation pH (5.2 ± 0.1)",
                                detail: "<strong>Mechanism:</strong> At pH 5.2, casein has minimal net charge (approaching pI = 4.6 but still slightly negative), allowing maximum hydrophobic-driven aggregation while retaining enough residual calcium bridges for structural integrity. At pH > 5.5, insufficient charge neutralization → incomplete coagulation → protein loss in whey → reduced yield. At pH < 4.8, excessive acid → excessive moisture expulsion (syneresis), calcium solubilization, and a crumbly, acidic product with paradoxically lower yield despite complete protein precipitation (because moisture loss outweighs protein gain). Research (Kumar et al., 2014, J. Food Sci. Technol.) shows that yield peaks sharply at pH 5.2–5.3 and drops by 2–4% at pH 5.0 or pH 5.5."
                            },
                            {
                                method: "Coagulation Temperature (70–75°C, optimum 72°C)",
                                detail: "Temperature affects both the rate of coagulation and the microstructure of the gel. At 70–75°C: <strong>hydrophobic interactions</strong> (which strengthen with temperature) are maximized, producing a dense, compact gel that effectively entraps fat and moisture. Fat is partially liquid (above its crystallization range), acting as a filler and plasticizer. At <60°C: hydrophobic interactions are weaker; curd is soft, fragile, and prone to shattering during handling; fat begins to solidify and is poorly integrated. At >80°C: coagulation is too rapid ('flash set'); curd is dense and rubbery; excessive fat expression into whey; potential Maillard browning."
                            },
                            {
                                method: "Gentle Stirring Protocol",
                                detail: "Stirring during coagulant addition serves to distribute acid uniformly and prevent localized over-acidification. However, stirring shear rate (γ̇) must be controlled. <strong>Recommended: 30–40 RPM with a flat paddle stirrer (γ̇ < 50 s⁻¹)</strong>. Vigorous stirring (>100 RPM, γ̇ > 200 s⁻¹) fractures the nascent gel into fine curd particles (fines) that pass through drainage cloth into whey, causing: (1) yield loss of 2–5%, (2) turbid whey (high fat and protein content), (3) difficulty in forming a cohesive block during pressing. Stirring is stopped as soon as clear whey is visible."
                            },
                            {
                                method: "Controlled Pressing (2–3 kg/cm², 15–20 min)",
                                detail: "Pressing serves two functions: (1) mechanical expulsion of entrapped whey (syneresis), and (2) fusion of individual curd particles into a smooth, continuous block (curd knitting). The casein strands at the surface of curd particles, being still hot and pliable, merge and form new protein–protein junctions under pressure. <strong>Over-pressing (>4 kg/cm² or >30 min):</strong> Squeezes out excessive moisture (dropping to <48%) and free fat (whey fat increases to >1%), yielding a hard, dry, low-yield product. <strong>Under-pressing (<1.5 kg/cm² or <10 min):</strong> Insufficient whey expulsion (moisture >62%) and poor particle fusion → open, crumbly texture with visible curd grain boundaries, and shortened shelf life due to high aᵥ."
                            },
                            {
                                method: "Whey Protein Concentrate (WPC) Fortification",
                                detail: "<strong>Method:</strong> WPC-35 (35% protein) or WPC-80 (80% protein) powder is reconstituted and added to milk before heat treatment, at a rate of <strong>0.5–2.0% w/v of milk</strong>. The milk is then heated to 85–90°C, which denatures the added whey proteins, allowing them to co-precipitate with casein during coagulation. <br/><br/><strong>Results:</strong> WPC addition at 1% increases yield by <strong>5–8%</strong> and at 2% by <strong>10–15%</strong> (Kanawjia & Singh, 2000, Indian J. Dairy Sci.). The paneer is softer and has improved water-holding capacity. Nutritional value is enhanced (higher biological value protein). <br/><br/><strong>Regulatory status:</strong> FSSAI permits addition of milk-derived ingredients; must be declared on label. <br/><br/><strong>Limitation:</strong> Excessive WPC (>3%) can cause a pasty, sticky texture and a 'whey' flavor."
                            },
                            {
                                method: "Milk Protein Concentrate (MPC) / Skim Milk Powder (SMP) Addition",
                                detail: "Adding SMP (0.5–1.5%) or MPC-70/80 (0.3–1.0%) to milk increases the total solids and casein content. This is essentially an 'enrichment' approach — increasing the concentration of curd-forming solids. MPC is preferred over SMP because it has a higher casein:whey protein ratio and lower lactose content. <strong>Yield increase: 3–8%</strong> depending on dosage. Must be added before heat treatment and dissolved completely to avoid graininess."
                            },
                            {
                                method: "Ultrafiltration (UF) of Milk",
                                detail: "Pre-concentrating milk by UF (using membranes with MWCO 10–25 kDa) to <strong>2× to 3× concentration</strong> (increasing protein from ~3.5% to 7–10%) before coagulation. UF retains casein micelles and fat globules in the retentate while permeating water, lactose, and soluble minerals. The concentrated retentate requires less coagulant, produces a more cohesive curd, and dramatically increases throughput (same mass of paneer from a smaller volume of retentate). <strong>Yield improvement: 10–15%</strong> vs. conventional process (Rao et al., 1992). Also improves uniformity and reduces whey volume (environmental benefit). Capital-intensive but increasingly adopted by large dairies."
                            },
                            {
                                method: "Calcium Chloride Addition (0.01–0.02%)",
                                detail: "As described in the Coagulants section. Restores calcium lost during pasteurization, promotes firmer curd, reduces protein loss in whey. <strong>Yield increase: 1–3%.</strong>"
                            }
                        ]
                    },
                    safeIncreasers: {
                        title: "Safe & Permitted Yield Enhancers / Texture Modifiers",
                        description: "The following additives are scientifically validated, safe for consumption, and generally permitted by food regulatory authorities (FSSAI, FDA, Codex Alimentarius) — though labeling requirements must be followed.",
                        items: [
                            {
                                name: "Whey Protein Concentrate (WPC-35/80)",
                                detail: "Covered above. Increases protein content and yield. Improves softness and nutritional quality. Dose: 0.5–2.0% w/v of milk."
                            },
                            {
                                name: "Sodium Caseinate",
                                detail: "Sodium salt of casein; highly soluble in water. Added at 0.2–0.5% to milk. Increases effective casein concentration, improves emulsification of fat, and strengthens the curd matrix. Can improve yield by 2–4%. Must be declared on label."
                            },
                            {
                                name: "Food-grade Hydrocolloids / Stabilizers",
                                detail: "<ul><li><strong>Carrageenan (κ- or ι-carrageenan, E407):</strong> A sulfated galactan from red seaweed. Interacts with κ-casein via electrostatic attraction between its sulfate groups (SO₃⁻) and positive patches on casein. Forms a secondary gel network within the casein matrix, increasing firmness and moisture retention. Dose: 0.01–0.05% of milk. Can increase yield by 3–5%.</li><li><strong>Guar gum (E412):</strong> Galactomannan polysaccharide. Increases viscosity of entrapped whey phase, reducing syneresis. Dose: 0.05–0.1%. Improves softness and moisture retention.</li><li><strong>Sodium alginate (E401):</strong> Linear copolymer of mannuronic and guluronic acid from brown seaweed. Cross-links with Ca²⁺ to form an 'egg-box' gel. Dose: 0.05–0.1%. Improves sliceability and moisture retention.</li><li><strong>CMC (Carboxymethyl cellulose, E466):</strong> Anionic cellulose derivative. Acts as a water binder. Dose: 0.05–0.15%. Reduces moisture loss during storage.</li></ul><strong>Note:</strong> FSSAI permits certain stabilizers/emulsifiers in dairy products within prescribed limits. Manufacturer must verify current regulations and declare ingredients."
                            },
                            {
                                name: "Emulsifying Salts",
                                detail: "<strong>Trisodium citrate (E331iii):</strong> At 0.5–1.0% of milk, trisodium citrate chelates calcium, partially disrupting the CCP within casein micelles. This softens the casein structure, improving the smooth-melting quality and moisture retention of paneer. Used more commonly in processed paneer / paneer-based spreads. <br/><br/><strong>Disodium hydrogen phosphate (E339ii):</strong> Similar calcium-chelating action. Dose: 0.1–0.3%. Improves the smoothness and reduces hardening during cold storage."
                            },
                            {
                                name: "Food-grade Enzymes (Emerging)",
                                detail: "<strong>Transglutaminase (TGase, EC 2.3.2.13):</strong> A microbial enzyme that catalyzes the formation of ε-(γ-glutamyl)-lysine isopeptide cross-links between protein chains. When added to milk (1–5 U/g protein) before or during coagulation, TGase creates additional covalent cross-links in the casein matrix, dramatically improving: (1) gel strength (+30–60%), (2) water-holding capacity (+5–10%), (3) yield (+3–7%), (4) sliceability and fry-ability (maintains structure during cooking). TGase is GRAS (FDA) and permitted by FSSAI as a processing aid. The enzyme is inactivated by the heat treatment step. <br/><br/><strong>Note:</strong> TGase is increasingly used in the tofu and cheese industries and is being actively researched for paneer (Sharma et al., 2020, LWT — Food Sci. Technol.)."
                            }
                        ]
                    },
                    texture: {
                        title: "Paneer Texture Science — Comprehensive Analysis",
                        description: "Texture is a multi-dimensional sensory attribute governed by the microstructure of the casein-fat-moisture gel. The following analysis covers the physicochemical basis of paneer texture.",
                        microstructure_note: "<strong>Microstructural basis:</strong> Under Scanning Electron Microscopy (SEM) and Confocal Laser Scanning Microscopy (CLSM), paneer appears as a <strong>continuous protein (casein) matrix</strong> with embedded fat globules (some coalesced into pools) and water channels. The density of the protein matrix, the size and distribution of fat globules, and the volume of water-filled interstices determine the macroscopic texture. Protein forms the 'skeleton,' fat acts as a 'plasticizer/filler,' and water fills the voids and acts as a 'lubricant.'",
                        table: {
                            headers: ["Texture Outcome", "Primary Physicochemical Causes", "Microstructural Characteristics", "Instrumental Measurement", "Sensory Result"],
                            rows: [
                                {
                                    texture: "Hard / Rubbery / Chewy",
                                    colorClass: "text-red-600",
                                    causes: "<ul><li>Low fat content (<4% milk fat) → less plasticizer in matrix</li><li>Over-pressing (>4 kg/cm², >30 min) → excessive moisture/fat expulsion</li><li>High coagulation temp (>80°C) → dense, over-aggregated casein</li><li>Low coagulation pH (<5.0) → excessive syneresis</li><li>Excessive CaCl₂ (>0.03%) → over-cross-linked casein</li><li>Prolonged cold storage → progressive casein aggregation (age-hardening)</li></ul>",
                                    microstructure: "Dense, compact protein matrix with few/small fat inclusions and minimal water channels. Thick casein strands. Low porosity.",
                                    measurement: "TPA (Texture Profile Analysis): Hardness >25 N; Chewiness >15 N; Springiness >0.85. Low Adhesiveness.",
                                    result: "Chewy, dry, 'squeaky' mouthfeel. Does not absorb flavors/gravies well. Difficult to crumble for bhurji. Low moisture (<50%)."
                                },
                                {
                                    texture: "Soft / Smooth / Compact (IDEAL)",
                                    colorClass: "text-green-600",
                                    causes: "<ul><li>Standardized milk (5.5–6.5% fat, 9% SNF)</li><li>Correct heat treatment (85–90°C/5–10 min)</li><li>Coagulation at 70–75°C, pH 5.2 ± 0.1</li><li>Controlled pressing (2–3 kg/cm², 15–20 min)</li><li>Proper chilling (4–6°C, 2–3 h)</li><li>Adequate fat:protein ratio (~1.3–1.5:1)</li></ul>",
                                    microstructure: "Moderately dense protein matrix with well-distributed, spherical to slightly irregular fat inclusions (5–30 μm). Interconnected water channels of moderate size. Balanced porosity.",
                                    measurement: "TPA: Hardness 12–20 N; Cohesiveness 0.35–0.50; Springiness 0.70–0.85; Chewiness 5–12 N. Moderate adhesiveness.",
                                    result: "Firm yet yielding bite; holds shape when cut into cubes; smooth, clean-cut surface; absorbs gravies; pleasant, smooth mouthfeel; melts partially on chewing. Moisture 52–58%."
                                },
                                {
                                    texture: "Soft / Crumbly / Fragile",
                                    colorClass: "text-yellow-600",
                                    causes: "<ul><li>High acidity in milk (>0.20% LA, developed acidity)</li><li>Coagulation at too low temperature (<65°C)</li><li>Insufficient pressing (<1.5 kg/cm², <10 min)</li><li>Excessive whey protein content without denaturation</li><li>High pH coagulation (>5.6) → incomplete aggregation</li><li>Cow milk without fortification (low casein, low fat)</li></ul>",
                                    microstructure: "Open, porous protein matrix with large, irregular water-filled voids. Poor particle fusion — grain boundaries visible. Fragmented fat distribution.",
                                    measurement: "TPA: Hardness <8 N; Cohesiveness <0.25; Fracturability present at low force. High friability.",
                                    result: "Breaks apart easily when cut; cannot hold cube shape during cooking; difficult to fry (disintegrates); may be pasty or mealy. Moisture >60%. Short shelf life."
                                },
                                {
                                    texture: "Grainy / Gritty",
                                    colorClass: "text-orange-500",
                                    causes: "<ul><li>Excessively rapid acid addition (localized over-acidification creates hard acid-casein particles)</li><li>Coagulation at too low temp with high acid concentration</li><li>High CaCl₂ → calcium phosphate/lactate crystals</li><li>Tartaric acid coagulant → calcium tartrate crystals</li><li>Poor dissolution of SMP/WPC before addition</li></ul>",
                                    microstructure: "Heterogeneous: mixture of dense, over-aggregated casein granules interspersed with weaker, under-aggregated regions. Visible white crystalline deposits in some cases.",
                                    measurement: "High variability in local hardness measurements. Particle size analysis of homogenized paneer shows bimodal distribution.",
                                    result: "Rough, sandy mouthfeel; visible specks or granules; heterogeneous appearance when cut. Unacceptable for premium market."
                                }
                            ]
                        },
                        age_hardening: {
                            title: "Age-Hardening Phenomenon in Paneer",
                            content: "A well-documented problem in stored paneer is <strong>progressive hardening during cold storage</strong> (2–5°C). The hardness of paneer can increase by 40–80% over 7–14 days of refrigerated storage. <br/><br/><strong>Mechanism:</strong> <ol><li><strong>Protein rearrangement:</strong> Casein molecules continue to form additional hydrophobic and hydrogen bonds over time, compacting the protein matrix (similar to 'aging' in cheese, but without proteolysis).</li><li><strong>Moisture redistribution:</strong> Free water migrates from the interior to the surface (where it evaporates or is absorbed by packaging), reducing the internal plasticization.</li><li><strong>Fat crystallization changes:</strong> At refrigeration temperature, milk fat undergoes polymorphic transitions (α → β' → β crystal forms), with β crystals being denser and harder, contributing to overall firmness.</li></ol><strong>Mitigation strategies:</strong> (1) Vacuum/MAP packaging to prevent surface moisture loss; (2) Inclusion of hydrocolloids (carrageenan, guar gum) to maintain moisture; (3) Calcium-chelating salts (trisodium citrate) to prevent excessive calcium-mediated cross-linking; (4) Storage at −18°C (freezing) halts age-hardening but can cause textural damage on thawing (ice crystal disruption of protein matrix — mitigated by rapid blast freezing at −40°C to produce small ice crystals)."
                        }
                    }
                },
                microbiology: {
                    title: "Microbiology & Food Safety",
                    description: "Paneer is a high-moisture (52–58%), near-neutral pH (5.2–5.8), protein-rich dairy product with a water activity (aᵥ) of 0.97–0.99. This makes it an <strong>excellent growth medium</strong> for a wide range of microorganisms. Without proper hygiene, process control, and cold chain management, paneer can be a vehicle for serious foodborne illness.",
                    sections: [
                        {
                            title: "Microbiological Hazards in Paneer",
                            content: "",
                            table: {
                                headers: ["Organism", "Category", "Source", "Growth Conditions in Paneer", "Health Risk", "Control Measure"],
                                rows: [
                                    {
                                        organism: "<em>Staphylococcus aureus</em>",
                                        category: "Gram(+) coccus; mesophilic",
                                        source: "Human skin/nasal carriage; contaminated milk (mastitis); post-process handling",
                                        growth: "Grows at 7–48°C, pH 4.0–10.0, aᵥ > 0.83. Produces heat-stable enterotoxins (A–E, G–I) at >10⁵ CFU/g; toxins survive 100°C/30 min.",
                                        risk: "Staphylococcal food poisoning: rapid-onset (1–6 h) nausea, vomiting, abdominal cramps, diarrhea. Usually self-limiting.",
                                        control: "Pasteurization kills cells (D₆₅ = ~0.2 min). Prevent post-pasteurization contamination (PPC): use gloves, masks, sanitized equipment. Maintain <5°C to prevent toxin production. HACCP CCP."
                                    },
                                    {
                                        organism: "<em>Escherichia coli</em> (incl. O157:H7, STEC)",
                                        category: "Gram(−) rod; mesophilic",
                                        source: "Fecal contamination of milk (poor udder hygiene, contaminated water); PPC from handlers",
                                        growth: "Grows at 7–46°C, pH 4.4–9.0. STEC produces Shiga toxins (Stx1, Stx2).",
                                        risk: "Gastroenteritis; STEC can cause Hemolytic Uremic Syndrome (HUS) — life-threatening, especially in children. Low infectious dose (~10–100 cells for STEC).",
                                        control: "Pasteurization (72°C/15s or equivalent, D₇₂ < 1 s). Post-process hygiene. Cold chain <5°C. Coliform testing of finished product."
                                    },
                                    {
                                        organism: "<em>Salmonella</em> spp.",
                                        category: "Gram(−) rod; mesophilic",
                                        source: "Raw milk from infected animals; cross-contamination in processing environment (biofilms in drains, floors)",
                                        growth: "Grows at 5–47°C, pH 3.8–9.5. Cannot grow below 5°C but survives refrigeration.",
                                        risk: "Salmonellosis: diarrhea, fever, abdominal cramps (onset 12–72 h). Can be invasive (bacteremia) in immunocompromised.",
                                        control: "Pasteurization (D₇₂ < 1 s). Environmental sanitation (CIP, floor sanitization). Testing per ISO 6579. Zero tolerance in finished product (absent/25g)."
                                    },
                                    {
                                        organism: "<em>Listeria monocytogenes</em>",
                                        category: "Gram(+) rod; psychrotrophic",
                                        source: "Ubiquitous in environment (soil, water, drains, condensation on cold room surfaces). Notorious for forming biofilms in food processing environments.",
                                        growth: "<strong>Can grow at 0–45°C</strong> (psychrotrophic!), pH 4.4–9.4, aᵥ > 0.92, and up to 10% NaCl. Survives and <strong>multiplies during refrigerated storage</strong> of paneer.",
                                        risk: "Listeriosis: meningitis, septicemia, spontaneous abortion. Case fatality rate 20–30%. Primarily affects pregnant women, neonates, elderly, immunocompromised. Low infectious dose in susceptible individuals.",
                                        control: "Pasteurization kills cells (D₇₂ < 1 s). <strong>Primary risk is post-process contamination.</strong> Strict environmental monitoring program (environmental <em>Listeria</em> swabbing of drains, floors, cold rooms, conveyors, cutting boards). Air filtration (HEPA) in packaging areas. Finished product testing (absent/25g). <strong>This is the #1 food safety concern for paneer.</strong>"
                                    },
                                    {
                                        organism: "<em>Bacillus cereus</em>",
                                        category: "Gram(+) spore-former; mesophilic/psychrotrophic strains exist",
                                        source: "Soil, raw milk, spices. Spores survive pasteurization.",
                                        growth: "Vegetative growth at 10–50°C (some psychrotrophic strains at 4°C). Produces diarrheal enterotoxin (Hbl, Nhe — produced during growth in food at >10⁵ CFU/g) and emetic toxin (cereulide — preformed, heat-stable, produced in starchy foods).",
                                        risk: "Diarrheal syndrome (8–16 h onset) or emetic syndrome (1–5 h onset, mainly from rice/starchy foods). Usually self-limiting.",
                                        control: "Spores cannot be eliminated by pasteurization. Control by: rapid cooling (<5°C within 2 h), maintaining cold chain, and short shelf life. <em>B. cereus</em> count in finished product should be <10³ CFU/g."
                                    },
                                    {
                                        organism: "Psychrotrophic spoilage bacteria (<em>Pseudomonas</em> spp., <em>Acinetobacter</em>, <em>Shewanella</em>)",
                                        category: "Gram(−) rods; psychrotrophic",
                                        source: "Water supply, environmental contamination, biofilms in processing equipment.",
                                        growth: "Grow well at 4–7°C; <em>Pseudomonas fluorescens</em> has a generation time of ~12 h at 4°C. Produce extracellular proteases (caseinase, gelatinase) and lipases.",
                                        risk: "Not pathogenic, but cause <strong>rapid spoilage</strong>: surface sliminess, off-odors (fruity, putrid, rancid), discoloration (yellow, pink — due to pyoverdin or pyocyanin pigments), and bitter peptides from casein hydrolysis.",
                                        control: "Strict post-process hygiene. MAP packaging with CO₂ (inhibits Gram-negative aerobes). Chlorinated/UV-treated water for chilling. Short shelf life. Good sanitation of cold rooms."
                                    },
                                    {
                                        organism: "Yeasts (<em>Candida</em>, <em>Rhodotorula</em>, <em>Pichia</em>) & Molds (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Cladosporium</em>)",
                                        category: "Fungi",
                                        source: "Airborne spores; contaminated packaging materials; environmental",
                                        growth: "Grow at 5–37°C, pH 2–9, aᵥ > 0.80 (molds) or > 0.88 (yeasts). Slow growth but tolerant of acidic, low-aᵥ conditions.",
                                        risk: "Spoilage: surface mold growth (visible colonies), off-flavors (musty, alcoholic, yeasty), gas production (bloating of vacuum packs), mycotoxin production (<em>Aspergillus flavus</em> → aflatoxins). Yeasts cause fermentation and blown packs.",
                                        control: "Air filtration in packaging area; UV sterilization of packaging materials; MAP with CO₂; HEPA filters in cold rooms; maintain <5°C; Y&M count <50 CFU/g in finished product."
                                    }
                                ]
                            }
                        },
                        {
                            title: "HACCP Plan Summary for Paneer Production",
                            content: "<strong>Hazard Analysis and Critical Control Points (HACCP)</strong> is mandatory for dairy processing (FSSAI regulations). Key CCPs for paneer:<br/><br/><strong>CCP 1:</strong> Milk pasteurization (85–90°C/5–10 min) — controls all vegetative pathogens. Monitoring: inline temperature/time recorder. Critical limit: ≥82°C for ≥5 min. Deviation: divert and re-process.<br/><br/><strong>CCP 2:</strong> Post-pasteurization environment — controls <em>Listeria</em>, <em>Pseudomonas</em>, and environmental recontamination. Monitoring: ATP bioluminescence swabs (<100 RLU on food-contact surfaces), environmental <em>Listeria</em> testing (zone approach: Zone 1 = food contact, Zone 2 = near food contact, Zone 3 = processing environment, Zone 4 = remote areas).<br/><br/><strong>CCP 3:</strong> Cold chain maintenance (product <5°C from chilling through distribution). Monitoring: data loggers in cold rooms and transport vehicles, IoT-enabled temperature tracking.<br/><br/><strong>Prerequisite Programs (PRPs):</strong> Supplier qualification, SSOPs (Sanitation Standard Operating Procedures), personnel hygiene (handwashing, gloves, hairnets, boot dips), water quality management, pest control, equipment maintenance, calibration, traceability (lot coding), allergen management, recall procedure."
                        },
                        {
                            title: "Shelf Life Limiting Factors — Microbiological Perspective",
                            content: "The shelf life of paneer under refrigeration (4–5°C) is determined primarily by: <ol><li><strong>Initial microbial load</strong> at packaging (post-process contamination level). A well-manufactured paneer with TPC < 10³ CFU/g will last 3–4× longer than one with TPC = 10⁴ CFU/g.</li><li><strong>Rate of microbial growth</strong> during storage, governed by: storage temperature (Q₁₀ for bacterial growth ≈ 2–3; every 5°C increase roughly doubles the growth rate), packaging atmosphere (aerobic vs. MAP vs. vacuum), and product pH/aᵥ.</li><li><strong>Spoilage threshold:</strong> Paneer is typically rejected when TPC exceeds 10⁶–10⁷ CFU/g (detectable off-odors, surface sliminess).</li></ol><strong>Predictive microbiology example:</strong> If a vacuum-packed paneer has an initial TPC of 10³ CFU/g and the dominant psychrotrophic flora has a generation time of ~14 h at 4°C, it will take approximately 14 × log₂(10⁶/10³) / log₂(10) ≈ 14 × 10 = ~140 hours ≈ ~6 days to reach 10⁶ CFU/g (spoilage). With MAP (CO₂), the lag phase is extended and generation time is ~20 h, extending shelf life to ~15–20 days."
                        }
                    ]
                },
                nutrition: {
                    title: "Nutritional Composition & Functional Properties",
                    description: "Paneer is a nutrient-dense dairy product that serves as a major protein source in vegetarian diets, particularly in South Asia.",
                    composition_table: {
                        title: "Proximate Composition of Paneer (per 100 g)",
                        headers: ["Nutrient", "Buffalo Milk Paneer", "Cow Milk Paneer", "Mixed Milk Paneer", "Significance"],
                        rows: [
                            { nutrient: "Energy (kcal)", buffalo: "280–320", cow: "240–265", mixed: "260–290", significance: "High caloric density; primarily from fat and protein." },
                            { nutrient: "Moisture (%)", buffalo: "50–55", cow: "53–58", mixed: "52–56", significance: "Determines texture (softness/firmness) and shelf life (higher moisture = shorter shelf life)." },
                            { nutrient: "Total Protein (g)", buffalo: "18–22", cow: "16–19", mixed: "17–20", significance: "Contains all essential amino acids. Biological Value (BV) ≈ 80–85. PDCAAS ≈ 1.0 for casein. Rich in branched-chain amino acids (BCAAs: leucine, isoleucine, valine) important for muscle protein synthesis." },
                            { nutrient: "Total Fat (g)", buffalo: "22–28", cow: "18–22", mixed: "20–25", significance: "Predominantly saturated (65–70%): palmitic (C16:0, ~30%), stearic (C18:0, ~12%), myristic (C14:0, ~11%). Contains oleic acid (C18:1, ~24%) as the main MUFA. Also contains CLA (conjugated linoleic acid, ~5–7 mg/g fat) — a bioactive fatty acid with potential anti-carcinogenic and anti-atherogenic properties. Cholesterol: ~70–100 mg/100g." },
                            { nutrient: "Carbohydrate / Lactose (g)", buffalo: "1.5–2.5", cow: "2.0–3.0", mixed: "1.8–2.8", significance: "Most lactose is removed in whey (~95% of original milk lactose). Residual lactose in paneer is very low, making it <strong>generally well-tolerated by lactose-intolerant individuals</strong>. Lactose in paneer is ~0.5–1.5 g per serving (50g), well below the 12g threshold for most lactose-intolerant adults." },
                            { nutrient: "Calcium (mg)", buffalo: "350–450", cow: "280–350", mixed: "300–400", significance: "Paneer is an excellent source of calcium (35–45% RDA per 100g). Calcium exists in both colloidal (bound to casein phosphate — ~50–60% of total) and ionic/soluble forms. Acid coagulation causes loss of ~30–40% of original milk calcium into whey (due to CCP solubilization at pH 5.2), but paneer still retains substantial calcium. Buffalo milk paneer has more calcium due to higher casein content." },
                            { nutrient: "Phosphorus (mg)", buffalo: "250–350", cow: "200–280", mixed: "220–300", significance: "Ca:P ratio ≈ 1.2–1.5:1, which is favorable for calcium absorption. Phosphorus is present as casein-bound phosphoserine residues and free phosphate." },
                            { nutrient: "Sodium (mg)", buffalo: "20–30", cow: "20–30", mixed: "20–30", significance: "Naturally low in sodium. Can increase significantly (300–600 mg/100g) if brine-packed or salt is added during pressing." },
                            { nutrient: "Zinc (mg)", buffalo: "3.0–4.0", cow: "2.5–3.5", mixed: "2.8–3.8", significance: "Bound to casein (via phosphoserine and histidine residues). Good source: ~25–35% RDA/100g." },
                            { nutrient: "Vitamin A (retinol, μg)", buffalo: "180–250", cow: "100–150", mixed: "140–200", significance: "Buffalo milk paneer has higher vitamin A due to higher fat content and the fact that carotenoids (β-carotene) in cow milk give a yellowish tinge but are converted less efficiently to retinol." },
                            { nutrient: "Vitamin B12 (μg)", buffalo: "1.0–1.5", cow: "0.8–1.2", mixed: "0.9–1.3", significance: "Important for vegetarians, who may be at risk of B12 deficiency. 100g paneer provides ~35–50% of RDA (2.4 μg/day)." },
                            { nutrient: "Riboflavin / B2 (mg)", buffalo: "0.25–0.35", cow: "0.30–0.40", mixed: "0.28–0.38", significance: "~20–30% of RDA per 100g. Partially lost in whey (riboflavin is water-soluble); retention in paneer is ~40–50%." },
                            { nutrient: "Folate / B9 (μg)", buffalo: "15–25", cow: "10–20", mixed: "12–22", significance: "Moderate source. Most folate is lost in whey." }
                        ]
                    },
                    amino_acid_profile: {
                        title: "Essential Amino Acid Profile of Paneer Protein",
                        headers: ["Amino Acid", "Paneer (mg/g protein)", "WHO/FAO Reference (mg/g protein)", "Status"],
                        rows: [
                            { aa: "Leucine", paneer: "95–100", reference: "59", status: "✅ Exceeds requirement by ~70%" },
                            { aa: "Isoleucine", paneer: "50–55", reference: "30", status: "✅ Exceeds" },
                            { aa: "Valine", paneer: "65–70", reference: "39", status: "✅ Exceeds" },
                            { aa: "Lysine", paneer: "80–85", reference: "45", status: "✅ Exceeds" },
                            { aa: "Methionine + Cysteine", paneer: "30–35", reference: "22", status: "✅ Adequate (first limiting for casein)" },
                            { aa: "Phenylalanine + Tyrosine", paneer: "100–110", reference: "38", status: "✅ Exceeds" },
                            { aa: "Threonine", paneer: "42–48", reference: "23", status: "✅ Exceeds" },
                            { aa: "Tryptophan", paneer: "12–15", reference: "6", status: "✅ Exceeds" },
                            { aa: "Histidine", paneer: "28–32", reference: "15", status: "✅ Exceeds" }
                        ]
                    },
                    bioactive_compounds: {
                        title: "Bioactive Compounds in Paneer",
                        items: [
                            {
                                name: "Casein-Derived Bioactive Peptides",
                                detail: "During digestion, gastrointestinal proteases (pepsin, trypsin, chymotrypsin) cleave casein into bioactive peptides. Key examples: <ul><li><strong>Casomorphins (β-casomorphin-7):</strong> Opioid agonists from β-casein (f60–66); may modulate gut motility and have analgesic effects.</li><li><strong>Phosphopeptides (CPP, casein phosphopeptides):</strong> From αS1-, αS2-, and β-casein; contain phosphoserine clusters that bind and solubilize calcium, enhancing intestinal calcium absorption.</li><li><strong>ACE-inhibitory peptides:</strong> VPP (Val-Pro-Pro) and IPP (Ile-Pro-Pro) from β-casein and κ-casein; inhibit angiotensin-converting enzyme, potentially lowering blood pressure.</li><li><strong>Lactoferricin (from lactoferrin, if present):</strong> Antimicrobial peptide.</li></ul>"
                            },
                            {
                                name: "Conjugated Linoleic Acid (CLA)",
                                detail: "Milk fat contains CLA (primarily the <em>cis</em>-9, <em>trans</em>-11 C18:2 isomer, 'rumenic acid') at 3–7 mg/g fat. CLA is produced by rumen bacteria (Butyrivibrio fibrisolvens) via biohydrogenation of linoleic acid, and by Δ9-desaturase in the mammary gland from vaccenic acid. Animal studies show anti-carcinogenic, anti-atherogenic, anti-diabetic, and body composition-modifying effects, though human evidence is less conclusive. Paneer from pasture-fed animals has 2–3× higher CLA than from concentrate-fed animals."
                            },
                            {
                                name: "Sphingolipids (Sphingomyelin, Gangliosides)",
                                detail: "Present in the milk fat globule membrane (MFGM). Sphingomyelin and its metabolites (ceramide, sphingosine) have demonstrated anti-cancer properties in cell and animal models by inducing apoptosis and inhibiting cell proliferation."
                            }
                        ]
                    }
                },
                shelf_life: {
                    title: "Shelf Life Extension & Packaging Technology",
                    description: "The inherent perishability of paneer (high moisture, near-neutral pH, high aᵥ) necessitates a multi-hurdle approach to shelf life extension.",
                    sections: [
                        {
                            title: "Hurdle Technology Approach",
                            content: "The <strong>hurdle concept</strong> (Leistner, 1992) involves combining multiple preservation factors ('hurdles'), each at a sub-lethal level, so that their combined effect inhibits microbial growth. For paneer, the primary hurdles are: <ul><li><strong>Temperature (t):</strong> Storage at ≤5°C — inhibits mesophilic pathogens, slows psychrotrophs.</li><li><strong>Packaging atmosphere (Eh):</strong> Reduced O₂ (vacuum/MAP) — inhibits aerobic spoilers.</li><li><strong>pH:</strong> Maintained at 5.2–5.5 — inhibits many Gram-negative bacteria.</li><li><strong>Preservatives (Pres):</strong> Potassium sorbate, nisin, natamycin — at permitted levels.</li><li><strong>Competitive microflora:</strong> Surface-applied protective cultures (bio-preservation).</li></ul>"
                        },
                        {
                            title: "Packaging Technologies — Detailed Comparison",
                            table: {
                                headers: ["Technology", "Mechanism", "Typical Shelf Life at 4°C", "Advantages", "Limitations"],
                                rows: [
                                    {
                                        tech: "Atmospheric (unwrapped or LDPE wrap)",
                                        mechanism: "No barrier; aerobic environment",
                                        life: "3–6 days",
                                        advantages: "Cheapest; suitable for local/unorganized market",
                                        limitations: "Rapid spoilage; surface drying, mold growth, off-odors"
                                    },
                                    {
                                        tech: "Vacuum Packaging (VP)",
                                        mechanism: "Removes air; creates anaerobic environment (O₂ <1%). Inhibits obligate aerobes (<em>Pseudomonas</em>).",
                                        life: "20–30 days",
                                        advantages: "Simple; effective; widely adopted; prevents oxidation",
                                        limitations: "Facultative anaerobes (LAB, <em>Enterobacteriaceae</em>) and <em>Listeria</em> can still grow. Pack collapse aesthetics."
                                    },
                                    {
                                        tech: "Modified Atmosphere Packaging (MAP)",
                                        mechanism: "Flushed with CO₂/N₂ mixture (typically 30–70% CO₂). CO₂ dissolves in water/fat → carbonic acid → lowers surface pH; inhibits Gram(−) aerobes; prolongs lag phase of psychrotrophs.",
                                        life: "30–45 days",
                                        advantages: "Superior to VP for Gram(−) inhibition; attractive pack appearance (no collapse); better color retention",
                                        limitations: "Requires gas mixing equipment, gas-impermeable packaging material (OTR <5 cc/m²/24h); pack integrity critical; CO₂ absorbed by product can cause partial pack collapse over time"
                                    },
                                    {
                                        tech: "Active Packaging",
                                        mechanism: "Packaging material incorporates active agents: O₂ scavengers (iron-based sachets, ascorbate), CO₂ emitters, antimicrobial coatings (nisin, natamycin, silver nanoparticles, chitosan, essential oils).",
                                        life: "35–60 days",
                                        advantages: "Targeted antimicrobial activity; can be combined with VP/MAP; innovative",
                                        limitations: "Regulatory approval required for each active agent; higher cost; consumer acceptance of 'chemicals' in food packaging"
                                    },
                                    {
                                        tech: "Retort Processing",
                                        mechanism: "Thermal sterilization in retortable pouch (121°C/15–20 min, F₀ = 5–7 min). Achieves commercial sterility (12D reduction of <em>Cl. botulinum</em>).",
                                        life: "6–12 months (ambient)",
                                        advantages: "Ambient storage; long shelf life; no cold chain needed; ideal for export/military/remote areas",
                                        limitations: "Texture becomes softer (protein denaturation), slight browning (Maillard), different sensory profile; higher cost; consumer perception"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Permitted Preservatives for Paneer",
                            items: [
                                {
                                    name: "Potassium Sorbate (E202) / Sorbic Acid (E200)",
                                    detail: "<strong>Mode of action:</strong> Inhibits molds and yeasts by interfering with dehydrogenase enzymes in their metabolic pathways. Also inhibits catalase activity and sulfhydryl enzymes. Effective at pH <6.5 (undissociated form is active; pKa = 4.76). <br/><strong>Permitted level:</strong> Up to 1,000 ppm (1 g/kg) in paneer (FSSAI). <br/><strong>Application:</strong> Dissolved in brine used for chilling/packing, or sprayed on surface."
                                },
                                {
                                    name: "Nisin (E234)",
                                    detail: "<strong>Nature:</strong> A 34-amino-acid lantibiotic (Class I bacteriocin) produced by <em>Lactococcus lactis</em>. It is the only bacteriocin with GRAS status (FDA) and is approved by FSSAI for dairy products. <br/><strong>Mode of action:</strong> Binds to Lipid II (a cell wall precursor) on Gram(+) bacteria, forming pores in the cytoplasmic membrane → loss of PMF (proton motive force), ion efflux, and cell death. Effective against <em>Listeria</em>, <em>Staphylococcus</em>, <em>Bacillus</em>, <em>Clostridium</em>. Ineffective against Gram(−) bacteria (outer membrane barrier) and fungi. <br/><strong>Permitted level:</strong> 12.5 mg/kg (12.5 ppm) as per FSSAI. <br/><strong>Application:</strong> Added to chilling water or incorporated into packaging film."
                                },
                                {
                                    name: "Natamycin (E235)",
                                    detail: "<strong>Nature:</strong> A polyene macrolide antifungal produced by <em>Streptomyces natalensis</em>. <br/><strong>Mode of action:</strong> Binds irreversibly to ergosterol in fungal cell membranes, creating pores → cell lysis. Highly specific to fungi (bacteria lack ergosterol). <br/><strong>Permitted level:</strong> Surface application, max 1 mg/dm² surface area (or 40 ppm in product by Codex). <br/><strong>Application:</strong> Applied as a dip or spray on paneer surface to prevent mold growth."
                                }
                            ]
                        },
                        {
                            title: "Novel / Emerging Preservation Technologies",
                            items: [
                                {
                                    name: "High-Pressure Processing (HPP)",
                                    detail: "Paneer is subjected to 400–600 MPa for 3–10 minutes at 20–25°C. HPP inactivates vegetative pathogens (>5 log reduction of <em>Listeria</em>, <em>Salmonella</em>, <em>E. coli</em>) and extends shelf life to 45–60 days at 4°C. Being non-thermal, HPP preserves the fresh texture and flavor of paneer. Spores are not inactivated. Capital cost is high (~₹5–10 Cr for a 55L vessel system), but operating cost is moderate. Increasingly adopted for premium/export paneer."
                                },
                                {
                                    name: "UV-C Irradiation (Surface Treatment)",
                                    detail: "Paneer surfaces are exposed to UV-C light (254 nm, 10–50 mJ/cm²) immediately before packaging. UV-C damages microbial DNA (thymine dimer formation), achieving 1–3 log reduction of surface contaminants. Does not penetrate deeply (surface effect only). Low cost; no residues; no regulatory concerns. Best combined with MAP."
                                },
                                {
                                    name: "Edible Coatings",
                                    detail: "Paneer blocks are dipped in or sprayed with edible film-forming solutions: <ul><li><strong>Chitosan (1–2% in dilute acetic acid):</strong> Polycationic biopolymer from crustacean shells. Antimicrobial against Gram(−) > Gram(+) (binds to negatively charged cell surfaces, disrupts membrane). Also forms a semi-permeable barrier reducing moisture loss and O₂ ingress.</li><li><strong>Whey protein isolate (WPI) films:</strong> WPI (8–10%) + glycerol (plasticizer) + antimicrobial agents (nisin, oregano EO). Forms transparent, flexible films with good oxygen barrier properties.</li><li><strong>Starch-based coatings:</strong> Modified starch + essential oils (thyme, oregano — containing thymol and carvacrol with broad-spectrum antimicrobial activity).</li></ul>Edible coatings can extend shelf life by 7–14 days beyond VP alone."
                                },
                                {
                                    name: "Pulsed Electric Field (PEF)",
                                    detail: "Application of short, high-voltage pulses (20–80 kV/cm, microsecond duration) to paneer or milk. PEF causes electroporation (irreversible pore formation) in microbial cell membranes. Non-thermal; preserves nutrients and texture. Still largely at research stage for solid dairy products."
                                },
                                {
                                    name: "Cold Plasma Treatment",
                                    detail: "Non-thermal atmospheric or low-pressure plasma generates reactive oxygen and nitrogen species (RONS: O₃, OH•, NO₂, H₂O₂) that damage microbial cell components (membranes, DNA, proteins). Surface treatment of paneer for 1–5 minutes can achieve 1–3 log reduction without temperature increase or chemical residues. Emerging technology with promising results in laboratory studies."
                                }
                            ]
                        }
                    ]
                },
                defects: {
                    title: "Defects, Troubleshooting & Process Optimization",
                    description: "A systematic analysis of common paneer defects, their root causes, and corrective actions. This serves as a diagnostic guide for quality assurance teams.",
                    defects_table: {
                        headers: ["Defect", "Observed Characteristics", "Root Cause Analysis", "Corrective / Preventive Action"],
                        rows: [
                            {
                                defect: "Excessive Hardness / Rubbery Texture",
                                observed: "Product is rigid, does not compress easily, 'squeaks' on chewing, does not absorb gravy. TPA hardness >30 N.",
                                cause: "<ol><li>Milk fat too low (<4.5% for buffalo, <3.5% for cow) — insufficient plasticization.</li><li>Over-pressing: pressure >4 kg/cm² or duration >25 min.</li><li>Coagulation temperature >80°C — dense protein aggregation.</li><li>Coagulation pH <5.0 — excessive syneresis.</li><li>Excess CaCl₂ (>0.03%) — over-cross-linking.</li><li>Age-hardening during extended cold storage.</li></ol>",
                                action: "<ol><li>Verify and adjust milk standardization (target 5.8–6.0% fat).</li><li>Reduce pressing pressure to 2–2.5 kg/cm², duration to 15 min.</li><li>Reduce coagulation temperature to 70–72°C.</li><li>Monitor coagulation endpoint pH — stop adding acid at pH 5.2.</li><li>Reduce/eliminate CaCl₂.</li><li>Add 0.01–0.03% trisodium citrate to chelate excess calcium; add 0.05% guar gum for moisture retention; ensure VP/MAP to prevent surface drying.</li></ol>"
                            },
                            {
                                defect: "Crumbly / Fragile Texture",
                                observed: "Product breaks apart when cut or handled; cannot hold cube shape; grainy surface on cross-section.",
                                cause: "<ol><li>Milk acidity too high (>0.18% LA) — pre-coagulation before processing.</li><li>Coagulation temperature too low (<65°C) — weak hydrophobic bonds.</li><li>Insufficient pressing (<1.5 kg/cm² or <10 min) — poor curd knitting.</li><li>Vigorous stirring during coagulation — curd fines formation.</li><li>Cow milk without fortification — low casein for matrix formation.</li><li>Coagulation pH >5.5 — incomplete aggregation.</li></ol>",
                                action: "<ol><li>Test and reject milk with acidity >0.18% LA.</li><li>Ensure coagulation temperature is ≥70°C.</li><li>Increase pressing pressure to 2.5–3 kg/cm² for 15–20 min.</li><li>Reduce stirring speed to 30–40 RPM; stop as soon as clear whey appears.</li><li>Fortify cow milk with 0.5–1% WPC or 0.5% SMP.</li><li>Add more coagulant to reach target pH 5.2.</li></ol>"
                            },
                            {
                                defect: "Sour / Acidic Taste",
                                observed: "Pronounced tart/sour flavor beyond mild acidity; pH of product <5.0.",
                                cause: "<ol><li>Excess coagulant added — pH dropped below 5.0.</li><li>Use of highly acidic sour whey (>1.0% LA).</li><li>Developed acidity in raw milk (>0.18%).</li><li>Microbial acid production during storage (LAB growth in under-refrigerated product).</li></ol>",
                                action: "<ol><li>Calibrate pH meter; standardize coagulant addition rate; train operator on endpoint detection.</li><li>Standardize sour whey acidity to 0.8–0.9% before use.</li><li>Improve raw milk quality — reduce time from milking to processing.</li><li>Ensure cold chain integrity (<5°C throughout).</li></ol>"
                            },
                            {
                                defect: "Bitter Taste",
                                observed: "Distinctly bitter aftertaste, especially after 5–7 days of storage.",
                                cause: "<ol><li>Excess CaCl₂ — intrinsically bitter salt.</li><li>Psychrotrophic bacterial proteases (from <em>Pseudomonas fluorescens</em>) — heat-stable metalloproteinases (AprX) survive pasteurization and slowly hydrolyze β-casein into bitter peptides (hydrophobic peptides from residues 53–91 and 164–209).</li><li>Use of raw milk with high SPC (>10⁶ CFU/mL) that developed protease load before pasteurization.</li><li>Residual rennet (if accidentally used) producing bitter peptides.</li></ol>",
                                action: "<ol><li>Reduce CaCl₂ to ≤0.02%.</li><li>Improve raw milk quality — ensure SPC <2×10⁵ at reception; reduce time from milking to cooling to <2 hours; store raw milk at <4°C for <24 hours before processing.</li><li>Consider thermization (63°C/15s) of raw milk at reception to slow psychrotroph growth.</li></ol>"
                            },
                            {
                                defect: "Rancid / Soapy Off-Flavor",
                                observed: "Soapy, goaty, or rancid taste; detectable within 1–3 days.",
                                cause: "<ol><li>Lipolysis: Free fatty acids (especially butyric C4:0, caproic C6:0, caprylic C8:0, capric C10:0 — short/medium chain FAs) released from triglycerides by lipase activity.</li><li>Sources of lipase: (a) native milk lipoprotein lipase (LPL) — should be inactivated by pasteurization but survives if heating is inadequate; (b) bacterial lipases from psychrotrophs — heat-stable, survive pasteurization; (c) mechanical damage to MFGM (fat globule membrane) during pumping, homogenization, or agitation exposes fat to lipases.</li></ol>",
                                action: "<ol><li>Ensure adequate heat treatment (≥85°C/5 min — LPL D₈₀ = ~1 min).</li><li>Improve raw milk quality (SPC control).</li><li>Minimize mechanical abuse of milk (avoid excessive pumping, use positive displacement pumps, avoid unnecessary homogenization of buffalo milk).</li></ol>"
                            },
                            {
                                defect: "Yellowish / Brown Discoloration",
                                observed: "Surface or entire body shows yellow to brown color instead of characteristic white/cream.",
                                cause: "<ol><li>Maillard reaction: Browning from lactose-protein reactions at high temperatures (especially if heated >95°C or retort-processed).</li><li>Use of cow milk (higher β-carotene content → yellow hue, not a defect per se but not preferred in some markets).</li><li>Oxidative discoloration of surface fat (exposure to light and oxygen).</li><li>Microbial pigment production (<em>Pseudomonas fluorescens</em> → pyoverdin/fluorescein — yellow-green; <em>Rhodotorula</em> → carotenoid pigments — pink/orange).</li></ol>",
                                action: "<ol><li>Control heating temperature to ≤90°C for conventional paneer.</li><li>Use buffalo milk or blend for whiter color; or use permitted whitener (TiO₂, E171 — regulatory status varies).</li><li>Protect from light (opaque packaging); vacuum/MAP packaging.</li><li>Improve post-process hygiene; environmental monitoring.</li></ol>"
                            },
                            {
                                defect: "Surface Sliminess",
                                observed: "Viscous, sticky, translucent layer on paneer surface; unpleasant tacky feel; may have off-odor.",
                                cause: "Growth of <em>Pseudomonas</em> spp. and other psychrotrophic Gram(−) bacteria. They produce extracellular polysaccharides (EPS) and proteolytic enzymes. Slime becomes noticeable at >10⁷ CFU/cm². Cause: post-process contamination + inadequate refrigeration.",
                                action: "Strict hygiene in post-pasteurization area (sanitized cutting boards, knives, conveyors, molds); treated/UV-sterilized chilling water; MAP with ≥30% CO₂ (inhibits <em>Pseudomonas</em>); maintain <4°C; reduce time from processing to packaging."
                            },
                            {
                                defect: "Mold Growth on Surface",
                                observed: "Visible fuzzy/powdery colonies (white, green, blue, black) on paneer surface, usually after 7–14 days.",
                                cause: "Airborne mold spore contamination during handling, cutting, or packaging. <em>Penicillium</em> spp., <em>Aspergillus</em> spp., <em>Cladosporium</em> spp. are most common. Insufficient CO₂ in MAP or poor vacuum seal allows aerobic mold growth.",
                                action: "HEPA air filtration in packaging room; UV-C treatment of packaging area air and surfaces; natamycin surface spray (40 ppm); ensure vacuum seal integrity (dye penetration test); maintain <5°C (slows but does not prevent mold growth)."
                            },
                            {
                                defect: "Whey Leakage in Package",
                                observed: "Accumulation of free whey/serum in vacuum or MAP pack; poor appearance; milky or slightly turbid liquid.",
                                cause: "<ol><li>Insufficient pressing — high residual moisture that exudes during storage.</li><li>Age-related syneresis — progressive casein contraction releases entrapped whey.</li><li>Temperature fluctuations during storage (repeated cooling/warming cycles promote moisture migration).</li><li>Mechanical damage (rough handling, stacking pressure).</li></ol>",
                                action: "<ol><li>Optimize pressing (2.5–3 kg/cm², 15–20 min) for target moisture 52–56%.</li><li>Use absorber pads in packaging to soak up free whey.</li><li>Maintain constant temperature (±1°C) during storage; avoid door-open events in cold room.</li><li>Handle carefully; proper packing/stacking protocols.</li></ol>"
                            },
                            {
                                defect: "Blown / Swollen Packs",
                                observed: "Vacuum or MAP packs show visible gas inflation; may burst.",
                                cause: "<ol><li>Gas production by fermenting organisms: <em>Leuconostoc</em> spp. (heterofermentative LAB → CO₂), yeasts (<em>Candida</em>, <em>Pichia</em> → CO₂ + ethanol), <em>Clostridium</em> spp. (if anaerobic conditions and spores present → H₂ + CO₂), coliforms (CO₂ + H₂).</li><li>Seal failure allowing air ingress → aerobic spoilage → gas production.</li></ol>",
                                action: "<ol><li>Improve hygiene (reduce initial contamination); test finished product for yeast/coliform count before release.</li><li>Check seal integrity on every batch (leak test); calibrate sealing machine.</li><li>If <em>Clostridium</em> is suspected → investigate raw milk supply (spore contamination from silage/soil) and consider process changes (tighter pH control, nisin addition).</li></ol>"
                            }
                        ]
                    },
                    process_optimization: {
                        title: "Process Optimization Summary — Key Parameter Windows",
                        table: {
                            headers: ["Parameter", "Under-range Effect", "Optimal Range", "Over-range Effect"],
                            rows: [
                                { param: "Milk Fat (%)", under: "<4.5% → hard, dry, low yield", optimal: "5.5–6.5%", over: ">7.5% → excessively soft, greasy, fat loss in whey" },
                                { param: "Heat Treatment Temp (°C)", under: "<78°C → low WP denaturation, low yield, inadequate pathogen kill", optimal: "85–90°C / 5–10 min", over: ">95°C → cooked flavor, browning, interaction with whey changes" },
                                { param: "Coagulation Temp (°C)", under: "<65°C → weak, crumbly curd", optimal: "70–75°C", over: ">80°C → hard, rubbery curd" },
                                { param: "Coagulation pH", under: "<5.0 → sour, crumbly, high Ca loss, dry", optimal: "5.2 ± 0.1", over: ">5.5 → incomplete coagulation, weak curd, high whey losses" },
                                { param: "Pressing Pressure (kg/cm²)", under: "<1.5 → high moisture, open texture, short shelf life", optimal: "2–3 kg/cm²", over: ">4 → hard, dry, low yield" },
                                { param: "Pressing Time (min)", under: "<10 → poor curd knitting, crumbly", optimal: "15–20 min", over: ">30 → excessive moisture loss" },
                                { param: "Chilling Temp (°C)", under: ">10°C → soft, poor keeping quality", optimal: "4–6°C water, 2–3 h", over: "<0°C → ice crystal damage, cracking (if frozen)" },
                                { param: "CaCl₂ Addition (%)", under: "0% (cow milk) → weak curd, low yield", optimal: "0.01–0.02%", over: ">0.04% → hard, bitter" },
                                { param: "Coagulant Concentration", under: "Too dilute → slow coagulation, uneven curd", optimal: "1–2% citric acid solution", over: "Too concentrated → localized over-acidification, grainy texture" },
                                { param: "Storage Temperature (°C)", under: "<−2°C → freezing damage", optimal: "2–5°C", over: ">8°C → rapid microbial growth, short shelf life" }
                            ]
                        }
                    }
                }
            }
        }
    }    // <-- just }, not };
};       // <-- this closes the top-level export
