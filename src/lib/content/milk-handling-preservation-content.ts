
export const milkHandlingPreservationContent = {
    hi: {
        title: "Milk Handling aur Preservation",
        description: "Reception se Preservation tak: Quality aur Safety ensure karna",
        backToTopics: "Topics par vapas jayen",
        tabs: {
            introduction: "Introduction",
            reception: "Reception",
            transportation: "Transportation",
            storage: "Storage",
            preservation: "Preservation",
            qualityTesting: "Quality Testing",
            processingMethods: "Processing Methods",
            packagingLabeling: "Packaging & Labeling",
            wastageManagement: "Wastage Management",
            conclusions: "Conclusions"
        },
        sections: {
            introduction: {
                title: "I. Introduction: Doodh ki Quality aur Safety ki Criticality",
                p1: "Doodh, hajaro saalon se human nutrition ka ek staple, inherently ek highly perishable raw material hai. Iski rich nutritional composition — jisme approximately 87% water, 3.4% protein (casein aur whey), 3.7% fat, 4.9% lactose, aur essential vitamins aur minerals jaise calcium (120 mg/100mL), phosphorus, riboflavin (B2), aur vitamin B12 shamil hain — ek ideal growth medium provide karti hai diverse array of spoilage aur pathogenic microorganisms ke liye. In microorganisms mein Klebsiella, Bacillus cereus, Pseudomonas fluorescens, Staphylococcus aureus, Streptococcus agalactiae, Listeria monocytogenes, Salmonella spp., aur E. coli O157:H7 shamil hain. Yeh inherent susceptibility ka matlab hai ki bacterial populations rapidly multiply kar sakte hain — kuch species ki doubling time 20 minutes se bhi kam hoti hai 37°C par — jisse doodh processing ke liye unsuitable aur human consumption ke liye unsafe ho jata hai.",

                p2: "Dairy processing mein ek fundamental principle is baat par emphasize karta hai ki doodh ki quality ko higher quality doodh ke saath blend karke improve nahi kiya ja sakta. Poor-quality doodh ka ek single lot (jisme even 1% contaminated doodh bhi shamil ho) poore mixed batch ko compromise ya spoil karne ki capacity rakhta hai — ek phenomenon jise 'microbial cross-contamination effect' kehte hain. Yeh robust initial quality checks aur effective segregation protocols ki critical need ko underscore karta hai. Indian dairy industry, jo apne vast network of over 350 million smallholder farmers ki characteristic rakhti hai, frequently raw milk quality se related challenges encounter karti hai, jisme high bacterial loads (often exceeding 10^6 CFU/mL), somatic cell counts (>5 lakh cells/mL), aur antibiotic residues (beta-lactams, tetracyclines) ki potential presence shamil hai — yeh sab public health aur trade barriers create karte hain.",

                p3: "Doodh mein spoilage aur pathogenic microorganisms ki rapid multiplication rates — exponential phase mein 2^n growth kinetics follow karte hue — ka matlab hai ki earliest stages mein hygiene ya temperature control mein koi bhi failure, jaise farm collection ya initial transport ke dauran, bacterial load mein astronomical increase ka karan ban sakti hai. Example ke liye, agar milk 10°C par 6 ghante ke liye rahta hai instead of 4°C ke, bacterial count 10 guna zyada ho sakta hai. Yeh cascading effect — jise 'temperature abuse cascade' kehte hain — quality control mein ek initial, seemingly minor lapse ke widespread aur severe consequences demonstrate karta hai, jaise rejected doodh se substantial economic losses (India mein estimated ₹2,000 crore annually) aur significant public health risks. Isliye, reception dock par rigorous quality control keval ek regulatory hurdle nahi hai, balki ek critical, proactive risk mitigation strategy hai jise 'Hazard Analysis and Critical Control Points (HACCP)' framework ke under implement kiya jata hai.",

                scientificData: {
                    title: "Scientific Data aur Statistics",
                    composition: {
                        title: "Doodh ki Average Chemical Composition (Cow Milk)",
                        items: [
                            "Water: 87.3%",
                            "Fat: 3.7% (range 3.2-5.0%)",
                            "Protein: 3.4% (Casein: 2.7%, Whey: 0.7%)",
                            "Lactose: 4.9%",
                            "Minerals: 0.7% (Ca, P, K, Na, Mg)",
                            "Vitamins: A, D, E, K, B-complex",
                            "pH: 6.6-6.8 (fresh milk)"
                        ]
                    },
                    microbialGrowth: {
                        title: "Microbial Growth Rates at Different Temperatures",
                        items: [
                            "0°C: Minimal growth (generation time >24 hours)",
                            "4°C: Severely inhibited (generation time ~12-15 hours)",
                            "10°C: Slow growth (generation time ~3-4 hours)",
                            "21°C: Moderate growth (generation time ~45-60 min)",
                            "37°C: Optimal growth (generation time ~20-30 min)"
                        ]
                    }
                }
            },

            reception: {
                title: "II. Dairy Plants mein Doodh ka Reception aur Initial Handling",
                p1: "Farm se processing plant tak doodh ki journey mein meticulous handling aur stringent quality control measures shamil hain iske integrity ko preserve karne ke liye. Reception stage — jise 'first critical control point (CCP-1)' bhi kehte hain HACCP framework mein — determine karta hai ki incoming milk processing ke liye acceptable hai ya nahi.",

                farm_practices: {
                    title: "Farm-Level par Milk Collection aur Cooling ke liye Best Practices",
                    p1: "Farm level par, doodh ki quality ki foundation hygiene aur rapid cooling protocols ke strict adherence ke through rakhi jati hai. Hygienic milking practices mein shamil hain: udder pre-dipping (0.5-1% iodine solution se), teat cleaning aur drying (individual paper towels se), fore-stripping (mastitis detection ke liye), aur post-dipping (glycerin-based teat dip se). In practices se bacterial contamination 90% tak reduce ho sakta hai. Equipment — stainless steel buckets, milking machines, pipelines — ko food-grade detergents (alkaline cleaners pH 11-12 aur acidic cleaners pH 2-3) se daily clean karna essential hai.",

                    p2: "Rapid cooling ek aur essential practice hai. Doodh ko milking ke do ghante ke andar +4°C (ya 40°F se neeche) tak jaldi se cool kiya jana chahiye — yeh 'two-hour rule' internationally accepted standard hai. Yeh immediate chilling bacterial growth ko inhibit karne aur processing plant tak pahunchne tak doodh ki quality ko preserve karne ke liye crucial hai. Farm mein commonly use kiye jane wale cooling systems hain: Direct Expansion Bulk Milk Coolers (DX-BMCs) jo 45 minutes mein 35°C se 4°C tak cool kar sakte hain, aur Plate Coolers jo bore well/spring water use karke initial pre-cooling karte hain milking parlor mein hi.",

                    p3: "Modern dairy farms increasingly initial quality checks ke liye data-driven tools utilize kar rahe hain. Automated Milking Systems (AMS ya 'Milking Robots') vital information record karte hain jaise milk volume, milking duration, milk conductivity (>6.0 mS/cm par mastitis suspect hota hai), mid-infrared spectroscopy se fat/protein/lactose analysis, aur RFID tags ke through individual cow identity. Precision Livestock Farming (PLF) technologies real-time data provide karti hain. Farm se doodh nikalne se pehle preliminary quality tests kiye jate hain: Clot-on-Boiling (COB) test, Alcohol Test (68% ethanol ke saath), pH measurement, Lactometer reading (SNF ke liye 1.028-1.034 range normal hai), aur antibiotic residue screening (Charm ROSA, Delvotest, Copan bioptic kits).",

                    additionalTests: {
                        title: "Farm-Level Par Additional Quality Parameters",
                        items: [
                            "Somatic Cell Count (SCC): <2,00,000 cells/mL (normal), >5,00,000 cells/mL (mastitis indicator) — BIS IS:1479 standard",
                            "Total Bacterial Count (TBC): <1,00,000 CFU/mL (Grade A milk) — Plate Count Agar par 32°C, 48 hours incubation",
                            "Titratable Acidity: 0.14-0.16% lactic acid (fresh milk), >0.18% mein spoilage start",
                            "Freezing Point: -0.530°C to -0.560°C (adulteration se change hota hai — water addition se -0.530°C se upar aata hai)",
                            "Coliform Count: <10 CFU/mL (good hygiene indicator)"
                        ]
                    }
                },

                plant_reception: {
                    title: "Dairy Plant Reception Area Design aur Equipment",
                    p1: "Dairy plant mein arrival par, doodh specialized reception departments mein enter karta hai jo efficient handling aur rigorous quality assessment ke liye design kiye gaye hain. Reception dock ka design GMP (Good Manufacturing Practices) aur FSMA (Food Safety Modernization Act) guidelines ke according hona chahiye. Yeh departments comprehensive quality testing, accurate quantity measurement aur doodh ko subsequent processing stages mein seamless transfer ke liye responsible hain.",

                    p2: "Tanker reception area configuration: minimum 3-4 unloading bays (peak hours mein waiting time <30 minutes), dedicated sampling points (HDPE ya stainless steel sampling valves), aur separate lanes for accepted/rejected milk. Tankers ko arrival par unique codes ya RFID tags use karke identify kiya jata hai — complete traceability ke liye.",

                    measurement_methods: {
                        by_weight: {
                            title: "Weight dwara (Gravimetric Method)",
                            text: "Is method mein unloading se pehle aur baad mein certified weighbridge par tanker ka weighing shamil hai — accuracy ±0.1% hoti hai. Alternatively, doodh ko load cells se equipped specialized weighing tanks mein pump kiya ja sakta hai (capacity 5,000-30,000 L). Weighing tanks typically stainless steel 304/316L se bane hote hain aur NABL-accredited load cells use karte hain. Legal metrology requirements ke under tampered weights regular calibration se guzarte hain."
                        },
                        by_volume: {
                            title: "Volume dwara (Volumetric Method)",
                            text: "Volume measurement ke liye electromagnetic flowmeters (EMF) ya positive displacement flowmeters utilize kiye jate hain — accuracy ±0.5%. Accuracy ensure karne ke liye aur doodh line mein air ke entry ko prevent karne ke liye — jo false high readings aur foam formation causa karta hai — flowmeter se pehle typically ek centrifugal air-eliminator lagaya jata hai. Modern systems mein Coriolis mass flowmeters bhi use hone lage hain jo simultaneously density bhi measure karte hain."
                        }
                    },

                    p3: "Farm mein initial cooling (+4°C) aur insulated transport ke bawajood, transit ke dauran thoda temperature increase (typically 1-3°C) aksar unavoidable hota hai. Isliye, doodh ko usually raw milk silos mein transfer karne se pehle plate heat exchanger (PHE) ya tubular heat exchanger use karke +4°C se neeche re-cool kiya jata hai. Chilled water (0-2°C) ya glycol systems (propylene glycol, food-grade) cooling medium ke roop mein use kiye jate hain.",

                    receptionQualityTests: {
                        title: "Platform Tests at Reception — Scientific Basis",
                        organoleptic: {
                            title: "Organoleptic/Sensory Tests",
                            items: [
                                "Color: Normal cow milk creamy white; bluish tint — water addition; yellow tint — colostrum/mastitis",
                                "Odor: Clean, slightly sweet; off-odors indicate spoilage (butyric acid — rancidity, acetic acid — fermentation)",
                                "Appearance: Homogeneous; sediment — dirt/mastitis; ropy texture — bacterial contamination (Alcaligenes viscolactis)"
                            ]
                        },
                        chemical: {
                            title: "Rapid Chemical Tests",
                            items: [
                                "Alcohol Test: 2 mL milk + 2 mL 68% alcohol — coagulation means acidity >0.18% ya calcium imbalance",
                                "Clot on Boiling (COB): Milk boil karein — clot/curd formation means acidity >0.20%",
                                "Methylene Blue Reduction Test (MBRT): 10 mL milk + 1 mL MBRT solution, 37°C incubation — Grade A milk 5+ hours mein decolorize hota hai",
                                "Resazurin Test (30-min): Rapid version of MBRT — Grade A milk purple color retain karta hai",
                                "Lactometer Test: Lactometer reading (LR) at 27°C — adultered milk mein LR >32 (water addition)"
                            ]
                        },
                        adulteration: {
                            title: "Adulteration Detection Tests",
                            items: [
                                "Starch Detection: Milk + iodine solution — blue/black color = starch added (illegal thickener)",
                                "Urea Detection: Urease + bromothymol blue — green/blue color = exogenous urea added",
                                "Detergent Detection: Bromocresol purple test — violet color = detergent present",
                                "Formalin Detection: Sulfuric acid layer test — violet ring at interface = formalin present",
                                "Hydrogen Peroxide Detection: Vanadium pentoxide test — pink/red = H2O2 present",
                                "Neutralizer Detection (Soda): Rosolic acid test — rose/crimson = sodium carbonate/bicarbonate added"
                            ]
                        }
                    }
                },

                hygiene_cleaning: {
                    title: "Containers aur Equipment ke liye Hygiene aur CIP Procedures",
                    p1: "Cleaning aur disinfection do distinct processes hain: Cleaning physical aur chemical residues remove karta hai (soil removal — >99.5% required), jabki Disinfection/Sanitization harmful bacteria ko kill karta hai (>99.999% reduction = 5-log reduction target). Dairy industry mein 'Clean-in-Place (CIP)' technology standard hai jo manual disassembly ke bina automated cleaning enable karta hai.",

                    cipProtocol: {
                        title: "Standard CIP Protocol (5-Step Process)",
                        steps: [
                            "Step 1 - Pre-rinse: Lukewarm water (35-45°C) se 5-10 minutes — loosens milk residues",
                            "Step 2 - Alkaline Wash: NaOH/KOH solution (1-2%, pH 11-13) at 70-75°C for 20-30 min — fat aur protein dissolve karta hai",
                            "Step 3 - Intermediate Rinse: Hot water (65-70°C) se — alkaline cleaner remove karta hai",
                            "Step 4 - Acid Wash: Nitric acid/phosphoric acid (0.5-1%, pH 2-3) at 65-70°C for 15-20 min — mineral deposits (milkstone = calcium phosphate) remove karta hai",
                            "Step 5 - Final Rinse + Sanitization: Cold water rinse, phir sanitizer (chlorine 200 ppm, peracetic acid 100-200 ppm, ya hot water 85°C+ for 20 min)"
                        ]
                    },

                    p2: "Farm tanks ko kisi bhi milk residue ke liye inspect kiya jata hai — ATP bioluminescence testing (Relative Light Units <200 = clean) increasingly popular ho raha hai. Milk tankers ki daily CIP hoti hai, ya har collection round ke baad. Tanker cleaning ka verification conductivity measurement se hota hai — rinse water conductivity <10 µS/cm = adequate rinse.",

                    p3: "Reception area mein contamination prevention ke liye: dedicated color-coded utensils (blue = raw area, red = reject area), positive pressure HVAC systems jo insects aur dust ko bahar rakhte hain, aur regular environmental monitoring (air sampling — settle plate method, surface swabs — contact plates) ka implementation essential hai."
                }
            },

            transportation: {
                title: "III. Milk Transportation Systems aur Logistics",
                p1: "Farm se processing plant tak doodh ka transportation ek carefully orchestrated operation hai. Global milk collection volumes — jisme India ka 23% global share (2023 data) shamil hai — ek efficient, safe, aur traceable transport network ki imperative demand karte hain. India mein approximately 1.2 lakh milk collection routes hain jo organized sector ko service karte hain.",

                tanker_design: {
                    title: "Milk Tankers ka Design aur Construction",
                    p1: "Milk tank trucks exclusively food-grade stainless steel se constructed hote hain — typically AISI Grade 304 (18% chromium, 8% nickel) ya superior Grade 316L (2-3% molybdenum addition jo chloride corrosion resistance enhance karta hai). Interior surface finish: 2B ya BA finish, Ra ≤0.8 µm (roughness average) — smoother surfaces bacterial adhesion reduce karte hain. All welds continuous aur crevice-free hone chahiye — ASME Bioprocessing Equipment (BPE) standards ke according.",

                    p2: "Critical design feature ek robust insulation system hai: typically 100-150 mm thick polyurethane foam (thermal conductivity λ = 0.022-0.026 W/m·K). ATP-R1 certification require karta hai ki external temperature 30°C par bhi internal milk temperature 10 hours mein ≤6°C increase honi chahiye. Vacuum-insulated panels (VIPs) increasingly use ho rahe hain jo traditional foam se 5-10x better insulation provide karte hain.",

                    p3: "Milk tankers 2-6 internal compartments ke saath design kiye jate hain (baffles/bulkheads se divided), capacity 8,000-30,000 liters. Compartmentalization allow karta hai: different farms se milk segregation (quality-based sorting), different fat content milk ka separate transport, aur vehicle stability improvement (sloshing se CoG shift minimize hota hai). Bottom outlet valves butterfly design ke hote hain (no dead legs, complete drainage ensure karta hai).",

                    tankerSpecifications: {
                        title: "Standard Milk Tanker Technical Specifications",
                        items: [
                            "Material: SS 304/316L, 3-4 mm shell thickness",
                            "Capacity: Small — 3,000-8,000 L (rural routes), Large — 15,000-30,000 L (highway routes)",
                            "Insulation: 100-150 mm PUF, Temperature rise <2°C in 6 hours",
                            "Pump: Centrifugal/sanitary pump, 500-1000 L/min flow rate",
                            "Agitator: Slow-speed (1-5 RPM) to prevent fat globule damage",
                            "Sampling Valve: Tri-clamp fittings, aseptic sampling",
                            "CIP Connection: Dedicated spray balls (360° coverage), 1.5 bar pressure"
                        ]
                    }
                },

                hygienic_transport: {
                    title: "Hygienic Transport Ensure karna",
                    p1: "Sare milk-contact components — valves, pumps, hoses, gaskets — ko 3-A Sanitary Standards (USA) ya EHEDG (European Hygienic Engineering and Design Group) guidelines ke according design kiya jana chahiye. Gaskets food-grade EPDM ya silicone se bane hone chahiye (PTFE nahi — absorption potential ke karan). Hoses food-grade PTFE-lined ya SS corrugated flexible hoses preferably honi chahiye.",

                    p2: "Milk tanker ki interior surface Ra ≤0.8 µm honi chahiye — yeh smooth surface bacterial biofilm formation ko dramatically reduce karta hai. Studies show karte hain ki Ra >1.6 µm surfaces par biofilm formation 10x zyada hoti hai compared to Ra ≤0.4 µm surfaces. Electropolishing (acidic electrolyte mein anodic dissolution) further surface smoothness aur corrosion resistance enhance karta hai.",

                    p3: "Advanced CIP systems tankers par: bottom-mounted spray balls aur top-mounted rotating spray heads comprehensive coverage ensure karte hain. CIP validation ATP bioluminescence testing se hoti hai — acceptable threshold <100 RLU (Relative Light Units). Microbiological verification: Rinse water samples — <10 CFU/mL acceptable.",

                    biofilmPrevention: {
                        title: "Biofilm Formation aur Prevention",
                        p1: "Biofilms — surfaces par adhered bacteria ke protected communities — dairy equipment mein ek major hazard hain. Biofilm mein bacteria 100-1000x more resistant hote hain sanitizers ke against compared to planktonic cells. Common biofilm formers in dairy: Listeria monocytogenes, Pseudomonas aeruginosa, Bacillus cereus, aur Staphylococcus aureus.",
                        preventionMethods: [
                            "Surface finish: Ra ≤0.8 µm — attachment sites minimize karta hai",
                            "CIP frequency: Daily minimum, post-collection harbaar",
                            "Enzymatic cleaners: Protease + lipase cocktails (biofilm matrix dissolve karte hain)",
                            "High-velocity flow: >1.5 m/s (turbulent flow Re >10,000) — mechanical scouring",
                            "Ozone treatment: 1-2 ppm aqueous ozone — broad-spectrum sanitizer (EPA-approved)"
                        ]
                    }
                },

                temp_control: {
                    title: "Transit ke dauran Temperature Control aur Cold Chain Management",
                    p1: "International dairy standards (Codex Alimentarius — CAC/RCP 57-2004) specify karte hain ki raw milk transport ke dauran 10°C se exceed nahi karna chahiye. India mein FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations specify karte hain raw milk ko 5°C ya us se neeche maintain karna. ATP (Accord sur le Transport des denrées Périssables) — international agreement — temperature-controlled transport equipment ke liye standards define karta hai.",

                    p2: "Modern milk tank trucks advanced IoT-enabled temperature monitoring systems feature karte hain: multiple PT-100 aur PT-1000 resistance temperature detectors (RTDs) ya NTC thermistors placed at strategic locations (top, middle, bottom of each compartment). Data loggers (HACCP-compliant, tamper-proof) temperature, GPS location, speed aur door opening events ko continuous record karte hain — cloud mein upload hota hai real-time mein (GPRS/4G connectivity). Alert systems: SMS/email alerts >6°C temperature breaches par, geofencing alerts unauthorized diversions ke liye.",

                    coldChainIntegrity: {
                        title: "Cold Chain Integrity — Scientific Importance",
                        p1: "Integrated Temperature-Time concept use kiya jata hai dairy mein: Total Bacterial Count exponential function hai of temperature × time. Formula: N = N₀ × e^(µ×t) jahan µ = specific growth rate (temperature-dependent, Arrhenius equation follow karta hai).",
                        items: [
                            "4°C mein 12 hours: Bacterial count approximately doubles (2x N₀)",
                            "10°C mein 12 hours: Bacterial count approximately 10x ho jata hai",
                            "20°C mein 12 hours: Bacterial count approximately 1000x ho jata hai",
                            "Practical implication: 4°C se 2°C ka temperature abuse bhi long routes mein significant quality degradation cause kar sakta hai"
                        ]
                    }
                },

                monitoring_logistics: {
                    title: "Smart Logistics aur Real-time Monitoring",
                    p1: "Industry 4.0 technologies dairy logistics mein revolutionize kar rahi hain. Advanced systems mein shamil hain: Fleet Management Systems (FMS) jo route optimization, fuel efficiency aur driver behavior (harsh braking — fat globule damage risk) monitor karte hain. Blockchain-based traceability platforms (jaise IBM Food Trust, Ripe.io) milk batches ko farm se plant tak immutably track karte hain — recall events mein extremely valuable.",

                    p2: "Milk quality monitoring in-transit: Near-Infrared (NIR) spectroscopy sensors kuch advanced tankers mein installed hote hain jo real-time milk quality parameters (fat, protein, lactose, somatic cells) measure karte hain without sampling. Electronic nose technology (e-nose) — array of gas sensors — off-odors aur spoilage volatiles (acetaldehyde, diacetyl, butyric acid) detect karte hain.",

                    p3: "India mein National Dairy Development Board (NDDB) ka 'iMark' system — RFID aur QR code-based tracking system — milk cans aur tankers track karta hai cooperative dairy supply chain mein. AMUL ka 'Milk Procurement System' real-time data capture karta hai 18,000+ collection centers se.",

                    p4: "Logistics optimization: Milk collection route optimization algorithms (Vehicle Routing Problem — VRP solvers) use karte hain jo minimize karte hain: total travel distance, fuel consumption, aur critically, milk-in-transit time. Studies show karte hain ki optimal routing 15-25% mileage aur 10-20% transit time reduce kar sakta hai — directly milk quality improvement mein result karta hai.",

                    regulatoryCompliance: {
                        title: "Transport ke liye Regulatory Compliance",
                        items: [
                            "India: FSSAI Regulations — Food Safety and Standards (Licensing and Registration) Regulations 2011, Schedule 4 — vehicles ke liye requirements",
                            "AGMARK standards — grade specifications",
                            "Prevention of Food Adulteration (PFA) Act",
                            "Europe: EC Regulation 853/2004 — hygiene rules for food of animal origin",
                            "EC Regulation 1/2005 — animal transport (indirectly relevant)",
                            "USA: Grade 'A' Pasteurized Milk Ordinance (PMO) — comprehensive milk transport regulations",
                            "International: Codex Alimentarius CAC/RCP 57-2004 — Hygienic Practices for Milk"
                        ]
                    }
                }
            },

            storage: {
                title: "IV. Milk Storage Techniques aur Technologies",
                p1: "Effective storage doodh preservation ka ek critical component hai. Different stages par different storage requirements hote hain — raw milk reception se processed product distribution tak. Storage conditions directly shelf life, safety aur sensory quality ko determine karte hain.",

                raw_milk_silos: {
                    title: "Silo Tanks mein Raw Milk Storage",
                    p1: "Untreated raw milk usually large, vertical, insulated silo tanks mein store kiya jata hai, jo aksar plant ke bahar located hote hain (space optimization ke liye). Tank capacity typically 50,000-500,000 liters tak range karti hai, tall cylindrical design ke saath (height:diameter ratio ≈ 3:1 to 5:1 — efficient mixing ke liye). Construction: SS 304 double-walled tanks with 100-150 mm PUF insulation. External surface: cladding (SS 2B ya stucco aluminum) ya fiberglass reinforced plastic (FRP).",

                    p2: "Gravity ke karan cream separation prevent karne ke liye raw milk silos mein gentle agitation crucial hai. Side-mounted variable-speed propeller agitators (paddle ya hydrofoil design) ya top-mounted slow-speed agitators use kiye jate hain. Agitation gentle hona chahiye taki: air entrainment minimize ho (foam formation se fat loss aur oxidation), fat globule damage se bacha ja sake (free fat release — rancidity cause karta hai), aur air-milk interface minimized rahe.",

                    sensors: {
                        temp: {
                            title: "Temperature Sensors (PT-100 RTDs)",
                            text: "Multiple sensors at different heights (top, middle, bottom) — temperature stratification detect karte hain. Continuous monitoring with PLC integration, alarm triggers at >6°C."
                        },
                        level: {
                            title: "Level Sensors (Ultrasonic ya Pressure Transmitters)",
                            text: "Continuous level measurement — inventory management ke liye critical. Magnetostrictive level sensors high accuracy (±1 mm) provide karte hain."
                        },
                        low_level: {
                            title: "Low-Level Sensors (Float Switches ya Guided Wave Radar)",
                            text: "Outlet pipe par — pump cavitation se prevent karte hain. Automatic pump shutoff when level too low."
                        },
                        overflow: {
                            title: "Overflow Protection (High-Level Alarm + Auto-shutoff Valve)",
                            text: "Tank ke top par — dual protection: high-level alarm + automatic inlet valve closure. Prevents product loss aur contamination."
                        }
                    },

                    siloManagement: {
                        title: "Silo Management Best Practices",
                        items: [
                            "FIFO (First-In-First-Out) principle — oldest milk first process karo",
                            "Maximum raw milk holding time: 24-48 hours at 4°C (>72 hours mein quality degradation significant hoti hai)",
                            "Regular milk quality checks during storage (acidity, temperature, organoleptic every 4-6 hours)",
                            "Silo CIP after each complete emptying — full CIP cycle mandatory",
                            "Silo interior inspection: monthly visual inspection, annual dimensional check",
                            "Positive pressure nitrogen blanketing: some plants mein oxidation prevent karne ke liye"
                        ]
                    }
                },

                refrigerated_storage: {
                    title: "Pasteurized/Processed Milk ke liye Refrigerated Storage",
                    p1: "Refrigeration doodh aur dairy products ki safety aur quality maintain karne ke liye sabse critical aur widely used method hai. Scientific basis: Arrhenius equation demonstrate karta hai ki har 10°C temperature reduction se reaction rates (microbial growth aur enzymatic activity) approximately 2-3x (Q10 factor) slow ho jati hain.",

                    p2: "International standards: Codex Standard 206-1999 (fluid milk) — pasteurized milk 6°C ya neeche store hona chahiye. India (FSSAI): pasteurized milk 4°C ya neeche. USA (PMO): 45°F (7.2°C) ya below. Optimum storage temperature for maximum shelf life: 1-4°C. Freezing point of milk: approximately -0.54°C — isliye 0°C se zyada neeche nahi store karna chahiye (partial freezing fat structure damage karta hai aur protein precipitation cause karta hai).",

                    p3: "Cold storage room design: Insulated panels (PUF — 150-200 mm), automatic temperature recording, multiple thermometers at different heights, backup refrigeration systems (N+1 redundancy), emergency alarm systems. Refrigeration systems: vapor compression cycle (HFO-1234yf ya CO2 transcritical systems — eco-friendly refrigerants replacing older HFCs). Defrost systems: electric, hot gas, ya off-cycle defrost (typically every 6-8 hours, <30 min duration).",

                    shelfLifeData: {
                        title: "Pasteurized Milk Shelf Life at Different Temperatures",
                        items: [
                            "1-2°C: Up to 21-25 days (Extended Shelf Life — ESL milk)",
                            "4°C: 14-18 days (standard pasteurized)",
                            "7°C: 7-10 days",
                            "10°C: 3-5 days",
                            ">15°C: <48 hours (rapid quality loss)"
                        ]
                    },

                    eslMilk: {
                        title: "Extended Shelf Life (ESL) Milk Technology",
                        p1: "ESL milk ek relatively new category hai jo standard pasteurized aur UHT ke beech positioned hai. ESL milk achieve kiya jata hai by combining: Microfiltration (MF) — 1.4 µm membranes se 99.9% bacteria remove hote hain, higher pasteurization temperatures (125-127°C for 2-4 seconds), aur aseptic/semi-aseptic packaging. Result: 30-45 days shelf life at refrigeration temperatures — UHT taste nahi, but longer than conventional pasteurized."
                    }
                },

                uht_storage: {
                    title: "Ultra-High Temperature (UHT) Milk — Science aur Technology",
                    p1: "UHT milk flash sterilization se guzarta hai: rapidly heated to 135-155°C (FSSAI minimum 135°C) for 2-8 seconds (continuous flow system mein). Two types: Direct UHT (steam injection ya steam infusion — milk directly steam ke saath contact mein aata hai, rapid heating 0.3 seconds mein, flavour naram) aur Indirect UHT (PHE ya THX ke through, slower heating, more caramelization). Sterility concept: 12-D process — most heat-resistant pathogen Bacillus stearothermophilus (z-value = 10°C, D121°C = 4 min) ke liye 12 log reduction achieve karna.",

                    p2: "Aseptic packaging UHT milk ki shelf stability ke liye equally critical hai. Common packaging: Tetra Pak (6-layer laminate: PE/paper/PE/Al/PE/PE), SIG Combibloc. These materials provide: oxygen barrier (O2 transmission rate <0.1 cc/day), light barrier (prevents photooxidation — riboflavin destruction aur off-flavours), mechanical protection. Filling mein: packaging sterilization (H2O2 spray + UV, ya H2O2 bath at 70°C), aseptic filling environment (ISO Class 5 or better), hermetic sealing.",

                    p3: "UHT milk mein chemical preservatives ki zarurat nahi hoti — commercial sterility (viable spoilage organisms ki absence at normal storage conditions) already achieved hai. However, chemical changes during storage hoti hain: Maillard browning (lactose + lysine reaction — slow at room temp, months ke baad noticeable), proteolysis by heat-stable enzymes (plasmin — indigenous milk enzyme — UHT resistant, eventually causes bitterness aur gelation — 'age gelation problem'), aur fat oxidation (especially linolenic acid).",

                    uhtChanges: {
                        title: "UHT Processing se Nutritional aur Sensory Changes",
                        nutritional: [
                            "Vitamin C: 20-25% reduction (heat-labile)",
                            "Thiamine (B1): 10-20% reduction",
                            "Vitamin B12: 10-20% reduction",
                            "Folic acid: 5-10% reduction",
                            "Vitamin A, D, E, K: Minimal change (heat-stable)",
                            "Calcium, Phosphorus: No significant change",
                            "Protein: Slight denaturation of whey proteins (β-Lg — 70-80% denatured), digestibility improved slightly",
                            "Casein: Relatively heat-stable, Maillard reaction causes slight lysine loss"
                        ],
                        sensory: [
                            "Cooked/sulphurous flavour (volatile sulfur compounds — H2S, dimethyl sulfide from whey protein denaturation)",
                            "Slight caramelization (Maillard reaction — HMF formation, furanic compounds)",
                            "These off-flavours diminish after few weeks storage (dissipation through packaging)",
                            "UHT milk viscosity slightly higher than pasteurized (whey protein denaturation aur casein micelle changes)"
                        ]
                    }
                },

                otherStorageMethods: {
                    title: "Other Specialized Storage Methods",
                    condensedMilk: {
                        title: "Condensed Milk Storage",
                        p1: "Sweetened condensed milk: 60-65% sucrose concentration — 'hurdle effect' — water activity (aw) 0.83 tak reduce ho jata hai, microbial growth inhibit hoti hai. Shelf life: 1-2 years at room temperature (unopened cans). Evaporated milk (unsweetened): sterilization required (115-120°C for 15-20 min) — shelf life 1-2 years. Storage: dry, cool (below 20°C), dark conditions preferred."
                    },
                    driedMilk: {
                        title: "Dried Milk/Milk Powder Storage",
                        p1: "Spray drying: milk concentrate (48-52% TS) ko hot air chamber mein atomize kiya jata hai (inlet temp 170-220°C, outlet 80-95°C). Moisture content: ≤3% (whole milk powder) ya ≤4% (skim milk powder) — water activity aw ≤0.25, microbial stability excellent. Shelf life: Whole milk powder — 6-12 months (fat oxidation limiting factor), Skim milk powder — 18-24 months (lower fat content). Storage requirements: airtight containers (nitrogen flushing recommended), cool (15-20°C), dry (<65% RH), dark. Caking prevention: silica gel desiccants, proper packaging (multi-layer laminated pouches)."
                    },
                    fermentedProducts: {
                        title: "Fermented Dairy Products Storage",
                        p1: "Yogurt, dahi, buttermilk, cheese — refrigerated storage at 2-6°C. Self-preserving nature due to: lactic acid (pH 4.0-4.6 — inhibits pathogen growth), bacteriocins production (nisin, acidophilin — antimicrobial peptides), competitive exclusion by starter cultures. Hard cheeses (moisture <39%): stored at 2-8°C, up to 12+ months. Soft cheeses (moisture >55%): refrigerated, short shelf life (2-4 weeks). Modified Atmosphere Packaging (MAP) — CO2/N2 mixture used for cheese — extends shelf life 50-100%."
                    }
                }
            },

            preservation: {
                title: "V. Doodh Preservation Methods — Comprehensive Overview",
                principles: {
                    title: "Dairy mein Preservation ke Scientific Principles",
                    p1: "Doodh preservation ka fundamental concept 'Leistner's Hurdle Technology' par based hai — multiple simultaneous antimicrobial factors (hurdles) jo microorganisms ki growth ko collectively inhibit karte hain. Koi bhi single hurdle sufficient nahi hota hai — unka combination synergistic effect create karta hai. Major hurdles: Temperature (T), Water Activity (aw), pH, Redox Potential (Eh), Competitive Microbiota, aur Preservatives.",

                    hurdleConcept: {
                        title: "Hurdle Concept — Scientific Basis",
                        items: [
                            "Temperature hurdle: <4°C ya >72°C — microbial growth severely restricted",
                            "Water activity hurdle: aw <0.91 (yeast/mold), <0.86 (Staphylococcus), <0.60 (no microbial growth)",
                            "pH hurdle: <4.6 (prevents C. botulinum), <4.0 (prevents most pathogens)",
                            "Redox potential hurdle: Eh <-150 mV (anaerobic conditions — aerobic spoilage prevent)",
                            "Competitive microbiota: Lactic acid bacteria (LAB) outcompete pathogens — 'biological preservation'"
                        ]
                    },

                    p2: "Chemical preservatives ek aisa environment create karke kaam karte hain jo microbial growth ke liye unfavorable hota hai. Mechanisms: (1) Disruption of cell membrane integrity, (2) Inhibition of critical metabolic enzymes, (3) Interference with DNA replication/transcription, (4) Reduction in water activity, (5) pH depression below growth optimum. Bactericidal effect: microorganisms kill karna; Bacteriostatic effect: growth inhibit karna without killing."
                },

                thermalPreservation: {
                    title: "Thermal Preservation Methods",
                    pasteurization: {
                        title: "Pasteurization — Science aur Methods",
                        p1: "Pasteurization ka scientific basis: all milk-borne pathogenic organisms ke against thermal death kinetics follow karte hain first-order reaction kinetics: log(N/N₀) = -t/D, jahan D = decimal reduction time (time to achieve 1-log reduction at specific temperature). Target pathogen: Coxiella burnetii (Q fever organism — most heat-resistant pathogen in milk, D63°C = 2-3 min).",
                        methods: [
                            "LTLT (Low Temperature Long Time): 62.8°C (145°F) for 30 minutes — batch/vat pasteurization",
                            "HTST (High Temperature Short Time): 72°C (161.6°F) for 15 seconds — continuous flow, most common",
                            "Higher Heat Shorter Time (HHST): 89°C for 1 sec, 90°C for 0.5 sec, 94°C for 0.1 sec, 96°C for 0.05 sec",
                            "UHT: 135-140°C for 2-8 seconds",
                            "Ultra-Pasteurization: 138°C for at least 2 seconds (with refrigeration) — ESL milk"
                        ],
                        effectiveness: "HTST pasteurization: 5+ log reduction in pathogenic bacteria, including: Mycobacterium tuberculosis, Salmonella spp., Listeria monocytogenes, Staphylococcus aureus (but not its heat-stable toxins), E. coli O157:H7, Campylobacter jejuni"
                    },

                    htst_equipment: {
                        title: "HTST Pasteurizer — Equipment Components",
                        items: [
                            "Balance Tank (Constant Level Tank): Continuous uninterrupted milk supply ensure karta hai",
                            "Feed Pump: Centrifugal pump, maintains constant flow rate",
                            "Flow Controller: Metering pump ya flow control valve — precise residence time ensure karta hai",
                            "Regeneration Section (PHE): Cold raw milk preheated by hot pasteurized milk (energy savings: 85-95%)",
                            "Heating Section (PHE): Hot water/steam-heated plates — target temperature achieve karta hai",
                            "Holding Tube: Calculated length/diameter for minimum 15-second residence time at flow rate",
                            "Flow Diversion Device (FDD): Safety device — agar temperature <72°C fall karein toh automatically milk divert karta hai (unpasteurized milk back to balance tank)",
                            "Cooling Section (PHE): Pasteurized milk ko chilled water/glycol se cool karna",
                            "Homogenizer (optional): 150-200 bar pressure — fat globule size reduction"
                        ]
                    }
                },

                chemicals: {
                    title: "Chemical Preservation Methods",
                    h2o2: {
                        title: "Hydrogen Peroxide (H2O2) — Scientific Details",
                        p1: "H2O2 ek powerful oxidizing agent hai jiska antimicrobial mechanism: reactive oxygen species (ROS) generation — hydroxyl radicals (·OH), superoxide (O2·⁻) — jo bacterial cell membranes, proteins aur DNA ko oxidatively damage karte hain. Effective concentration: 0.03-0.1% (300-1000 ppm) for milk preservation. Gram-negative bacteria generally more sensitive hain than Gram-positive.",
                        p2: "H2O2 doodh mein catalase enzyme (naturally present) se rapidly decompose ho jata hai: 2H₂O₂ → 2H₂O + O₂ (catalase-mediated). Isliye higher concentrations needed. Disadvantages: destroys catalase aur peroxidase (indigenous enzymes), reduces vitamin C aur some B vitamins, can cause protein oxidation (off-flavours), methionine oxidation in proteins. Regulatory status: FDA 21 CFR 184.1366 — GRAS (Generally Recognized as Safe) for specific uses, but banned in many countries for direct milk preservation."
                    },

                    lp_system: {
                        title: "Lactoperoxidase System (LP-System) — Detailed Science",
                        p1: "LP-System ek naturally occurring antimicrobial system hai: Lactoperoxidase enzyme (LP) + Thiocyanate ions (SCN⁻) + Hydrogen peroxide (H2O2). Reaction: LP catalyzes oxidation of SCN⁻ by H2O2 → Hypothiocyanous acid (HOSCN) + Hypothiocyanite (OSCN⁻). Natural content: LP — 30 mg/L bovine milk (highly concentrated whey protein), SCN⁻ — 1-15 mg/L (from glucosinolate metabolism, brassica feed se variably). H2O2 naturally very low — limiting factor.",
                        p2: "LP-System activation: WHO/FAO approved protocol — thiocyanate 14 ppm + H2O2 8.5 ppm add karna (H2O2 source: sodium percarbonate). Effect: bacteriostatic (growth inhibition) rather than bactericidal for mesophilic bacteria, at 30°C, up to 7-8 hours additional protection. Scientific mechanism: HOSCN irreversibly inhibits bacterial enzymes containing sulfhydryl groups (thiol-dependent enzymes like glycolysis enzymes, hexokinase, aldolase) → energy metabolism block → bacterial growth arrest. LP-system ineffective against: thermophilic bacteria, spores, yeasts, molds."
                    },

                    nisin: {
                        title: "Nisin — Natural Antimicrobial Peptide",
                        p1: "Nisin ek bacteriocin hai — Lactococcus lactis subsp. lactis dwara produced ek antimicrobial peptide. Structure: 34 amino acid lantibiotic with unique lanthionine residues. Mechanism: pore formation in bacterial cell membrane (lipid II binding) + inhibition of cell wall synthesis. Spectrum: active against Gram-positive bacteria aur spores (Clostridium botulinum, Bacillus cereus, Listeria monocytogenes, Staphylococcus aureus). Gram-negative bacteria resistant (outer membrane barrier). FSSAI permitted level: 250 IU/g (international units per gram). Dairy applications: processed cheese (prevents late blowing by Clostridia), flavoured milk, UHT milk (extra safety hurdle). Temperature stability: stable at low pH (<5.0), loses activity at neutral pH — dairy applications limited by this.",
                        regulatory: "Status: E234 (European food additive number), GRAS (USA), Codex GSFA — permitted in various dairy products at specific levels."
                    },

                    natamycin: {
                        title: "Natamycin (Pimaricin) — Antifungal Preservative",
                        p1: "Natamycin ek polyene macrolide antifungal compound hai — Streptomyces natalensis dwara produced. Mechanism: ergosterol ke saath binding (fungal cell membrane component) → membrane permeability aur function disrupt → fungal cell death. Spectrum: highly effective against all yeasts aur molds, bacteria ko affect nahi karta. Dairy applications: cheese surface treatment (0.2-0.4 mg/dm²), cottage cheese, sour cream. NOT for use in fermented dairy products where starter culture (yeast-based) involved. FSSAI permitted: surface treatment of cheese only. EU: E235 — permitted only for surface treatment of hard/semi-hard cheeses.",
                    },

                    other: {
                        title: "Other Chemical Preservatives aur Modern Approaches",
                        items: [
                            "Sodium benzoate: Primarily antifungal, effective pH <4.5 — mainly fruit-flavoured dairy drinks mein; FSSAI allows in flavoured milk up to 600 ppm",
                            "Potassium sorbate: Sorbic acid (CH3CH=CHCH=CHCOOH) — antifungal; more effective at pH 4.0-6.0; used in dairy spreads, cheese coatings; FSSAI permits 1000 ppm in some categories",
                            "Lysozyme: Natural enzyme from egg white; cleaves bacterial cell wall (peptidoglycan); used in hard cheese to prevent late blowing by Clostridium tyrobutyricum; E1105 in EU",
                            "Carbon Dioxide (CO2): Dissolved CO2 (Hyperbaric CO2 treatment) inhibits many bacteria; used in some ESL milk applications; 'carbonic acid' antimicrobial effect",
                            "Bacteriophages: Viruses that infect bacteria; FDA-approved ListShield™ (against L. monocytogenes) for ready-to-eat foods; research stage for dairy applications",
                            "Essential Oils: Thymol (thyme), carvacrol (oregano), eugenol (clove) — potent antimicrobials; application limited by strong flavour contribution to dairy products"
                        ]
                    }
                },

                nonThermal: {
                    title: "Non-Thermal Preservation Technologies",
                    hpProcessing: {
                        title: "High Pressure Processing (HPP)",
                        p1: "HPP (ya Pascalization): 400-600 MPa (4,000-6,000 atm) hydrostatic pressure applied for 3-10 minutes at low temperatures (5-20°C). Mechanism: non-covalent bonds disruption (hydrogen bonds, hydrophobic interactions, electrostatic interactions) → enzyme inactivation, protein denaturation, cell membrane disruption → microbial death. Pressure transmitted uniformly through liquid (Pascal's principle) — no hot spots.",
                        advantages: [
                            "Equivalent pathogen reduction to pasteurization (5-log reduction) without heat",
                            "Preserves heat-labile nutrients (vitamin C, folate) aur fresh milk taste",
                            "Inactivates most vegetative bacteria aur viruses",
                            "Extends shelf life: HPP milk — up to 30-40 days at refrigeration",
                            "Approved for raw milk cheese aging alternative (USA — 60-day aging rule)"
                        ],
                        limitations: [
                            "Spores resistant (Bacillus, Clostridium) — cannot achieve commercial sterility",
                            "High capital cost (HPP equipment: $500,000-$2.5 million)",
                            "Batch process — limited throughput",
                            "Some enzyme activity may persist (plasmin — age gelation in UHT)",
                            "Limited application in fluid milk (mainly used for juices, deli meats)"
                        ]
                    },

                    pulsedElectricField: {
                        title: "Pulsed Electric Field (PEF) Treatment",
                        p1: "PEF: milk ko high-intensity (20-80 kV/cm), short-duration (1-100 µs) electric field pulses ke through pass kiya jata hai. Mechanism: 'electroporation' — cell membrane mein transient ya permanent pores formation → intracellular components leakage → cell death. Temperature rise minimal (25-55°C during treatment). Effectiveness: 4-5 log reduction in vegetative bacteria, combined with mild heat (55-60°C) effectiveness increases.",
                        applications: "Continuous flow systems mein milk treatment (10,000-100,000 L/hr possible), ESL milk production, fresh juices. Commercial applications growing in Europe (Netherlands, Germany). PEF-treated milk nutritional profile: comparable to raw milk — heat-labile vitamins well-preserved. Spores resistant — limitation similar to HPP."
                    },

                    uvTreatment: {
                        title: "UV Light Treatment",
                        p1: "UV-C light (254 nm wavelength) — germicidal radiation jo DNA/RNA damage karta hai (thymine dimers formation → replication impossible). Milk treatment challenge: UV absorption by milk components (riboflavin, proteins, fat) limits penetration depth (few mm). Solution: thin-film UV reactors (turbulent flow through UV-transparent tubes — swirl flow/Taylor-Couette reactors). Commercial system: Salcor 3450 system, microGAPS (thin film annular UV reactors). Effectiveness in clear milk: 4+ log reduction; whole milk: 2-3 log reduction. Advantage: no chemical residues, minimal heat. Approved in some states (USA) as alternative to pasteurization for specific applications."
                    },

                    microfiltration: {
                        title: "Microfiltration (MF) — Cold Physical Separation",
                        p1: "MF (1.4 µm membranes — Bactocatch® Tetra Pak system): bacteria physical separation by size exclusion. Process: cream aur skim milk separate kiye jate hain pehle (centrifugal separator se), skim milk MF membrane se pass hoti hai (99.5% bacteria removal), concentrate (bacteria-rich) separately heat-treated (130°C/4 sec), phir cream aur treated skim milk recombine kiye jate hain. Result: ESL milk with 6+ log bacterial reduction, minimal heat treatment. Advantage: fresh milk taste preserved (no cooked flavour), nutritional profile near-raw milk. Used extensively in Scandinavian countries (especially Sweden — Bactocatch system widely deployed)."
                    }
                },

                regulatory: {
                    title: "Chemical Preservatives ki Regulatory Framework",
                    india: {
                        title: "India — FSSAI Regulations",
                        items: [
                            "Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011 — Schedule II aur III",
                            "Schedule II: Prohibited substances — formalin, boric acid, salicylic acid, benzoic acid (fluid milk mein), sodium carbonate/bicarbonate (as neutralizers), hydrogen peroxide (unless specifically permitted)",
                            "Schedule III: Permitted preservatives with max limits",
                            "Raw milk: NO preservatives permitted by law",
                            "Pasteurized milk: No added preservatives (except LP-system activation — WHO/FAO/FSSAI guidelines under consideration)",
                            "UHT milk: No preservatives needed/permitted (sterilization sufficient)",
                            "Cheese: Natamycin (surface only, 1 mg/dm²), Lysozyme (as per CODEX)",
                            "Dairy beverages/flavoured milk: Sodium benzoate (600 ppm), potassium sorbate (1000 ppm)"
                        ]
                    },
                    international: {
                        title: "International Regulatory Framework",
                        items: [
                            "Codex Alimentarius (CODEX STAN 192-1995, General Standard for Food Additives — GSFA): International reference standard",
                            "EU: Regulation (EC) 1333/2008 on food additives — strict list of permitted additives for dairy",
                            "USA FDA: 21 CFR Parts 130-135 (dairy standards), GRAS substances list",
                            "WHO/FAO Joint Expert Committee on Food Additives (JECFA): ADI (Acceptable Daily Intake) establish karta hai",
                            "Codex Committee on Food Additives (CCFA): International harmonization"
                        ]
                    },
                    adulteration: {
                        title: "Common Milk Adulterants aur Detection Methods",
                        items: [
                            "Water addition: Lactometer (LR <28 at 27°C), cryoscopy (freezing point >-0.525°C), electrical conductivity",
                            "Skim milk/removal of fat: Gerber/Rose-Gottlieb fat test (<3.0% fat in toned milk suspect)",
                            "Urea (exogenous): Urease strip test, DMAB (para-dimethylaminobenzaldehyde) reaction",
                            "Detergent: Methylene blue stability test, bromocresol purple test",
                            "Starch: Iodine test (blue/black colour)",
                            "Formalin: Hestrin method, FeCl3 test",
                            "Hydrogen peroxide: Vanadium pentoxide + H2SO4 test",
                            "Neutralizers (NaHCO3, Na2CO3): Rosolic acid test (rose/crimson colour)",
                            "Glucose: Fehling's test, enzyme-based glucose strips",
                            "Synthetic milk (urea + oil + detergent + water): Microscopy, GC-MS analysis",
                            "Melamine (protein-adulteration): HPLC, LC-MS/MS — Kjeldahl nitrogen false elevation detect karta hai"
                        ]
                    }
                },

                comparison: {
                    title: "Preservation Methods ka Comprehensive Comparative Analysis",
                    p1: "Doodh preservation method ka choice effectiveness, safety, cost, consumer acceptance aur product characteristics par impact ke careful balancing ko involve karta hai — ek multi-criteria decision process.",

                    methodsComparison: {
                        title: "Major Preservation Methods — Scientific Comparison",
                        refrigeration: {
                            title: "Refrigeration (2-4°C)",
                            principle: "Microbial growth rate reduction (Q10 factor = 2-3 per 10°C decrease)",
                            logReduction: "0-1 log (bacteriostatic, not bactericidal)",
                            shelfLife: "14-21 days (pasteurized milk)",
                            advantages: "Nutrition preserved, taste unaltered, widely accepted, simple technology",
                            disadvantages: "Requires continuous cold chain, high energy cost, infrastructure-intensive, no effect on heat-stable toxins",
                            cost: "Medium (operational) + High (capital for cold chain infrastructure)"
                        },
                        pasteurization: {
                            title: "HTST Pasteurization (72°C/15s)",
                            principle: "Thermal inactivation of vegetative pathogens (first-order kinetics)",
                            logReduction: "5-6 log reduction in pathogens",
                            shelfLife: "14-18 days (with refrigeration)",
                            advantages: "Gold standard food safety, all pathogens eliminated, minimal nutritional change, taste near-fresh",
                            disadvantages: "Requires refrigeration post-pasteurization, doesn't inactivate spores, some heat-stable enzymes (plasmin, lipase) remain active",
                            cost: "Medium capital, Low operational"
                        },
                        uht: {
                            title: "UHT (135-155°C/2-8s)",
                            principle: "Commercial sterilization — destruction of all viable microorganisms",
                            logReduction: "12+ log reduction (theoretical — commercial sterility)",
                            shelfLife: "6-12 months (unopened, room temperature)",
                            advantages: "No refrigeration needed until opened, maximum microbial safety, ideal for distribution in areas lacking cold chain",
                            disadvantages: "Cooked/sulphurous off-flavour, slight nutritional losses, age gelation problem (long storage), expensive aseptic packaging, enzymatic spoilage possible (psychrotrophic lipases — heat stable)",
                            cost: "High capital, Medium operational"
                        },
                        hpp: {
                            title: "High Pressure Processing (400-600 MPa)",
                            principle: "Non-thermal cell membrane disruption aur enzyme inactivation",
                            logReduction: "5-6 log reduction in vegetative bacteria",
                            shelfLife: "30-40 days (refrigerated)",
                            advantages: "Fresh-like taste aur nutrition, no chemical additives, novel application",
                            disadvantages: "Spores not inactivated, very high capital cost, batch process (low throughput), limited commercial dairy applications",
                            cost: "Very High capital, High operational"
                        },
                        chemicalPreservation: {
                            title: "Chemical Preservation (LP-System, Nisin)",
                            principle: "Enzyme inhibition, cell membrane disruption, reactive species generation",
                            logReduction: "2-4 log (typically bacteriostatic in LP-system)",
                            shelfLife: "Variable (hours to days extension only — not standalone method)",
                            advantages: "LP-system: natural, cost-effective for rural areas with no cold chain, extends raw milk collection window by 6-8 hours; Nisin: effective in processed cheese",
                            disadvantages: "Not sufficient as sole preservation method, regulatory restrictions (varies by country), potential consumer concerns, may affect sensory properties at high concentrations",
                            cost: "Low (LP-system), Medium (nisin, natamycin)"
                        }
                    },

                    p2: "Modern dairy preservation mein 'hurdle technology' ka implementation: HTST pasteurization + refrigeration + aseptic packaging = multiple overlapping protection systems. UHT + aseptic packaging = ultimate 'double hurdle' for ambient stability. ESL milk = MF + mild heat treatment + refrigeration = optimized compromise. Future trends: HPP + mild heat (thermodynamic synergy), PEF + refrigeration, natural antimicrobials (nisin + lysozyme + lactoferrin) + refrigeration — all represent multi-hurdle approaches achieving safety without compromising quality."
                }
            },

            qualityTesting: {
                title: "VI. Advanced Quality Testing — Laboratory Methods",
                p1: "Comprehensive quality testing dairy industry mein product safety, consistency aur regulatory compliance ensure karne ka backbone hai. Modern testing protocols combine rapid screening tests with confirmatory laboratory methods.",

                microbiologicalTests: {
                    title: "Microbiological Testing Methods",
                    standardPlateCount: {
                        title: "Standard Plate Count (SPC) / Total Plate Count (TPC)",
                        p1: "Method: Milk serial dilutions (10⁻¹ to 10⁻⁶) ko Plate Count Agar (PCA) par plate kiya jata hai, 32°C par 48 ±2 hours incubate kiya jata hai. Count: 25-250 colonies wali plates count ki jati hain (AOAC method). Result expression: CFU/mL (Colony Forming Units per milliliter). Acceptable limits: Raw milk Grade A <1,00,000 CFU/mL (BIS), Pasteurized milk <30,000 CFU/mL (pre-distribution), <1,00,000 CFU/mL (at consumer level — FSSAI). Advanced variation: Spiral Plate Method (faster, automated) — SPirALL® instrument.",
                        rapidMethods: "Rapid alternatives: BACTOSCAN™ FC (flow cytometry — individual cells count karta hai fluorescent dye se, 8 min result), BactoSomatic (somatic + bacteria simultaneous), IDF Standard 161C:2009."
                    },
                    coliformTest: {
                        title: "Coliform Count — Hygiene Indicator",
                        p1: "Coliforms (E. coli, Klebsiella, Enterobacter) fecal contamination ke indicator organisms hain. Method: Most Probable Number (MPN) — Lauryl Sulfate Tryptose (LST) broth tubes, 35°C/48h; ya Violet Red Bile Agar (VRBA) pour plates, 35°C/24h. FSSAI limits: Pasteurized milk — Nil (coliforms absent in 1 mL), or <1 MPN/mL. Significance: Coliform presence indicates post-pasteurization contamination ya pasteurization failure — critical food safety signal."
                    },
                    specificPathogen: {
                        title: "Specific Pathogen Testing",
                        items: [
                            "Listeria monocytogenes: ISO 11290-1:2017 method — FDA BAM Method — enrichment + selective plating (PALCAM, ALOA agar) + PCR confirmation; 25 g/mL — zero tolerance in ready-to-eat dairy",
                            "Salmonella spp.: ISO 6579-1:2017 — pre-enrichment (BPW), selective enrichment (RVS, MKTTn), selective plating (XLD, BGA), biochemical + serological confirmation; Zero tolerance in 25 mL",
                            "Staphylococcus aureus aur Enterotoxins: ISO 6888-1, Baird Parker Agar, coagulase test; Enterotoxin ELISA (RIDASCREEN SET™) — heat-stable toxins important in pasteurized milk",
                            "E. coli O157:H7: Immunomagnetic separation (IMS) + CT-SMAC plating + O157 latex agglutination + PCR for eae/stx genes",
                            "Mycobacterium tuberculosis: MGIT960 liquid culture system (6 weeks) ya PCR-based methods (IS6110 gene target)"
                        ]
                    },
                    rapidMicrobial: {
                        title: "Rapid Microbiological Methods",
                        items: [
                            "Real-time PCR (qPCR): Species-specific gene targets amplify karke 2-4 hours mein results — GeneXpert, bioMérieux GENE-UP systems",
                            "MALDI-TOF MS (Matrix-Assisted Laser Desorption/Ionization — Time of Flight Mass Spectrometry): Bacterial protein fingerprinting se species identification minutes mein (Bruker MALDI Biotyper, bioMérieux VITEK MS)",
                            "Flow Cytometry (BactoScan): Individual cells ko fluorescent staining ke baad laser se count karta hai — 8-10 min total process",
                            "Impedance/Conductance Microbiology (Bactometer™): Bacterial metabolism se media mein ionic changes detect karta hai",
                            "Adenosine Triphosphate (ATP) Bioluminescence: Environmental/equipment hygiene testing — RLU measurement, results in seconds"
                        ]
                    }
                },

                chemicalTests: {
                    title: "Chemical aur Compositional Analysis",
                    compositional: {
                        title: "Compositional Analysis",
                        items: [
                            "Fat determination: Gerber Method (ISO 2446) — sulfuric acid + isoamyl alcohol, centrifugation, butyrate reading; Rose-Gottlieb method (AOAC 905.02 — more accurate, reference method); IR spectroscopy (MilkoScan™ FT+ — simultaneous fat, protein, lactose, total solids in 60 seconds)",
                            "Protein: Kjeldahl method (ISO 8968-1) — nitrogen determination × 6.38 conversion factor; Dumas combustion method (faster, automated); Near-Infrared (NIR) spectroscopy (rapid, non-destructive)",
                            "Lactose: Enzymatic method (lactase → glucose + galactose → glucose oxidase reaction → colorimetric), Polarimetry, HPLC (gold standard for lactose-free milk verification)",
                            "Total Solids: Oven drying method (ISO 6731) — 102°C until constant weight; Microwave drying (faster); Infrared moisture analyzers",
                            "Ash/Minerals: Muffle furnace ashing at 550°C, ICP-OES/MS for individual minerals (Ca, P, Fe, Zn, Se)"
                        ]
                    },
                    freezingPoint: {
                        title: "Freezing Point Depression (Cryoscopy)",
                        p1: "Cryoscopy freezing point measurement water addition detect karne ka most reliable method hai. Principle: colligative property — dissolved solutes milk ki freezing point depress karte hain. Normal bovine milk freezing point: -0.530°C to -0.560°C (average -0.540°C). Water addition se freezing point -0.530°C se upar shift hoti hai. 1% water addition = approximately +0.005°C shift. Method: Thermistor cryoscope (IDF Standard 108:2002) — 99.5% accuracy. Electronic advanced systems: Funke-Gerber Cryostar-i™. Important note: mastitis milk mein reduced lactose (dilution effect from blood plasma) se slightly elevated freezing point possible even without water addition."
                    },
                    antibioticResidue: {
                        title: "Antibiotic Residue Testing",
                        p1: "Antibiotic residues in milk ek major public health concern hain — antibiotic resistance development, allergic reactions (especially beta-lactams), disruption of starter cultures in fermented dairy. Major antibiotic classes in Indian dairy: Beta-lactams (penicillin, ampicillin, amoxicillin, cloxacillin — mastitis treatment), Tetracyclines (oxytetracycline, chlortetracycline), Sulfonamides, Aminoglycosides (streptomycin, neomycin).",
                        methods: [
                            "Rapid screening: Lateral flow immunoassay strips (Charm ROSA, Idexx SNAP — 3-8 min, qualitative); Delvotest™ SP-NT (microbial inhibition test — 3 hours, broad spectrum); Copan BioRacer (automated strip reader)",
                            "Confirmatory: LC-MS/MS (Liquid Chromatography tandem Mass Spectrometry) — gold standard, quantitative, simultaneous multi-residue detection, ppb sensitivity",
                            "ELISA (Enzyme-Linked Immunosorbent Assay): Semi-quantitative, class-specific antibodies",
                            "FSSAI MRL (Maximum Residue Limits): Penicillin G — 4 µg/kg, Amoxicillin — 4 µg/kg, Tetracycline — 100 µg/kg, Oxytetracycline — 100 µg/kg (as per Schedule 5, FSSR 2011)"
                        ]
                    },
                    somaticCells: {
                        title: "Somatic Cell Count (SCC) — Mastitis Indicator",
                        p1: "SCC = number of somatic cells (predominantly leukocytes/white blood cells) per mL of milk. High SCC indicates mastitis (udder infection). Scientific basis: infection → immune response → influx of neutrophils into milk → elevated SCC. Normal healthy cow: <1,00,000 cells/mL. Sub-clinical mastitis: 2,00,000-5,00,000 cells/mL. Clinical mastitis: >5,00,000 cells/mL.",
                        methods: [
                            "Direct Microscopic Somatic Cell Count (DMSCC): Newmann-Lampert stain, microscope counting — reference method",
                            "Electronic cell counting: Fossomatic™ (flow cytometry + fluorescent dye Ethidium Bromide) — automated, high throughput, IDF standard method",
                            "California Mastitis Test (CMT): Field test — detergent + milk, DNA viscosity gel formation indicates SCC level",
                            "Porta-SCC™: Portable electronic counter for farm use"
                        ],
                        economicImpact: "High SCC milk economic impact: reduced cheese yield (casein breakdown by plasmin at high SCC), reduced butter quality, shorter shelf life, reduced lactose content, reduced milk protein content. India mein estimated loss due to mastitis: ₹7,000-9,000 crore annually."
                    }
                },

                sensorTechnology: {
                    title: "Advanced Sensor Technologies aur Industry 4.0",
                    p1: "Dairy quality testing mein digital transformation rapid pace par ho raha hai. Inline aur online sensors real-time monitoring enable kar rahe hain jo traditional offline laboratory testing replace kar rahe hain various parameters ke liye.",
                    technologies: [
                        "Mid-Infrared (MIR) Spectroscopy (MilkoScan™ FT+, Bentley FTS): 60+ parameters simultaneously measure karta hai (fat, protein, lactose, SCC, urea, fatty acid profile, freezing point prediction) within 60 seconds — lab milk analyzers ka standard",
                        "Near-Infrared (NIR) Spectroscopy: Inline probes — milk streams mein real-time measurement without sampling, factory automation integration",
                        "Raman Spectroscopy: Milk composition aur adulteration detection — non-destructive, no sample preparation; water, melanine, starch, urea detect kar sakta hai",
                        "Electronic Nose (e-Nose): Sensor array jo volatile organic compounds (VOCs) detect karta hai — spoilage early warning (acetic acid, butyric acid, acetaldehyde), milk freshness real-time assessment",
                        "Biosensors: Electrochemical biosensors jo antibiotics, hormones (rBST), pathogens, mycotoxins detect karte hain with high sensitivity (femtomolar detection possible), point-of-care applications",
                        "Hyperspectral Imaging: Quality defects, fat distribution, adulteration detect karne ke liye — mainly for solid dairy products (cheese, butter)"
                    ]
                }
            },

            processingMethods: {
                title: "VII. Milk Processing Technologies",
                p1: "Raw milk ko processed dairy products mein convert karna involves multiple carefully controlled unit operations. Each processing step product safety, nutrition, taste aur shelf life par significant impact dalta hai.",

                homogenization: {
                    title: "Homogenization",
                    p1: "Homogenization milk mein fat globules ko mechanically size-reduce karta hai — average diameter 3-5 µm se 0.2-1.0 µm tak (HTST processing se pehle typically done). High pressure (150-200 bar) se milk ko narrow valve gaps se force kiya jata hai — cavitation, turbulence aur shear forces fat globules ko break karte hain. Result: cream layer formation nahi hoti, uniform fat distribution, improved digestibility (smaller fat globules easier to digest), whiter appearance, improved flavour stability.",
                    scientificDetails: "Two-stage homogenization: Stage 1 (150-170 bar) — fat globule size reduction; Stage 2 (30-50 bar) — fat globule cluster disruption. New fat globule membranes form from milk proteins (casein micelle fragments + whey proteins) → more stable. Homogenized milk fat is more susceptible to lipolysis (lipase activity) because new membrane weaker than native MFGM (Milk Fat Globule Membrane).",
                    types: [
                        "Upstream homogenization: Raw milk homogenized pehle, phir pasteurized — reduces microbial load slightly (physical disruption)",
                        "Downstream homogenization: After pasteurization (most common) — better microbial safety",
                        "Partial homogenization: Only cream portion homogenized (energy efficient)",
                        "Micro-homogenization (Microfluidization): Very high pressure (500-1000 bar) — submicron fat globules, different texture/mouthfeel"
                    ]
                },

                standardization: {
                    title: "Standardization aur Fortification",
                    p1: "Standardization: Fat aur SNF (Solids-Not-Fat) content ko required levels tak adjust karna — cream addition ya removal through centrifugal separator. FSSAI requirements: Toned Milk — 3.0% fat, 8.5% SNF; Double Toned Milk — 1.5% fat, 9.0% SNF; Standardized Milk — 4.5% fat, 8.5% SNF; Full Cream Milk — ≥6.0% fat, 9.0% SNF; Cow Milk — 3.5% fat, 8.5% SNF.",
                    fortification: {
                        title: "Milk Fortification",
                        p1: "Nutritional fortification India mein public health initiative hai — FSSAI aur NDDB ka 'POSHAN' program. Mandatory fortification of packaged milk: Vitamin A (770 IU/250 mL) aur Vitamin D (400 IU/250 mL). Optional: Vitamin B12, Folic acid, Iron, Zinc.",
                        challenges: "Technical challenges: Vitamin A (fat-soluble — oil premix required, pro-vitamin A — β-carotene alternative), Vitamin D stability issues (UV light degradation — opaque packaging required), Iron fortification affects colour aur taste, overcoming bioavailability challenges, ensuring homogeneous distribution."
                    }
                },

                separation: {
                    title: "Cream Separation aur Centrifugation",
                    p1: "Cream separators: disc-stack centrifuges operating at 6,000-10,000 RPM. Stokes' Law governs separation: velocity = 2r²(ρ_milk - ρ_fat)g/9η, jahan r = fat globule radius, ρ = density, g = gravitational force, η = viscosity. Temperature 40-55°C par separation most efficient (lower viscosity). Bactofugation: high-speed centrifugation (15,000-20,000 RPM) — 90-95% bacteria aur spores remove karta hai (heavier than milk serum) — alternative ya supplement to pasteurization.",
                }
            },

            packagingLabeling: {
                title: "VIII. Dairy Packaging aur Labeling",
                p1: "Packaging dairy products ki shelf life, safety aur consumer appeal directly determine karta hai. 'Package is the silent salesman' concept dairy mein particularly relevant hai.",

                packagingMaterials: {
                    title: "Packaging Materials — Science aur Selection",
                    plasticBottles: {
                        title: "HDPE (High-Density Polyethylene) Bottles",
                        p1: "Most common for pasteurized milk in India. Properties: good moisture barrier, chemical resistance, food-safe, recyclable (#2 HDPE). Limitation: poor oxygen barrier (O₂ transmission rate 500-600 cc·mm/m²·day·atm) — photooxidation possible. Opaque HDPE (white, contains TiO₂) blocks light — vitamin destruction prevent karta hai. Hermetic seal — tamper-evident. Shelf life: 14-18 days at 4°C."
                    },
                    multilayerCartons: {
                        title: "Multilayer Paperboard Cartons (Tetra Pak, SIG)",
                        p1: "ESL aur UHT milk ke liye standard. Structure (6 layers): Polyethylene (outer, moisture protection) / Paperboard (structural strength) / Polyethylene (adhesion) / Aluminum foil (oxygen + light barrier, O₂ TR ≈ 0 cc/day) / Polyethylene / Polyethylene (inner, food contact). Aseptic filling: H2O2 sterilization + UV + aseptic environment. Advantage: excellent shelf life, lightweight, recyclable (paper + Al + PE separation required). India mein Tetra Pak dominant (60%+ market share in UHT segment)."
                    },
                    glassbottles: {
                        title: "Glass Bottles — Traditional aur Premium",
                        p1: "Superior barrier properties (zero gas transmission), chemically inert, no plastic taste migration, infinitely recyclable, premium perception. Disadvantages: heavy (10x heavier than equivalent plastic), fragile, high transport cost, high production energy. Return/refill systems economically viable in some contexts. Increasingly popular in premium dairy segment (craft dairies, organic milk)."
                    },
                    flexiblePackaging: {
                        title: "Flexible Packaging — Pouches",
                        p1: "Polythene pouches: Cheapest packaging (lowest per-unit cost), widely used in India for pasteurized milk in loose retail. Multi-layer: PE/PA/PE or EVOH-based (better oxygen barrier). Disadvantage: inferior oxygen barrier compared to rigid containers, shorter shelf life for sensitive products. Pre-formed pouches (form-fill-seal machines — FFS): Automated, hygienic, cost-effective for high volumes."
                    },
                    activeIntelligentPackaging: {
                        title: "Active aur Intelligent Packaging — Future Technologies",
                        items: [
                            "Active packaging: Oxygen scavengers (iron-based sachets — FeO oxidation absorbs O₂), CO₂ emitters (freshness enhance karte hain), antimicrobial packaging (silver nanoparticles, essential oil vapours, nisin-coated films incorporated)",
                            "Intelligent packaging: Time-Temperature Indicators (TTIs — color change karte hain based on temperature history, e.g., 3M Monitormark™), Freshness indicators (pH-sensitive dyes jo spoilage acids detect karte hain, colorimetric CO₂ indicators), RFID tags (inventory tracking, anti-counterfeiting)",
                            "Biodegradable/Biobased packaging: PLA (Polylactic Acid) from corn starch, PHA (Polyhydroxyalkanoates), seaweed-based films — sustainability push",
                            "Smart Labels: QR codes linking to supply chain information, allergen information, recipe suggestions"
                        ]
                    }
                },

                labelingRequirements: {
                    title: "Labeling Regulatory Requirements",
                    fssai: {
                        title: "FSSAI Labeling Requirements (FSS Act 2006 + FSS Labeling & Display Regulations 2020)",
                        mandatory: [
                            "Product name (e.g., 'Pasteurized Toned Milk', 'UHT Full Cream Milk')",
                            "Net quantity (volume in mL or L)",
                            "Best Before / Use By date (format DD/MM/YYYY or DD-MM-YYYY)",
                            "Storage conditions ('Keep refrigerated below 4°C')",
                            "FSSAI license number (14-digit)",
                            "Manufacturer/packer name aur complete address",
                            "Country of origin",
                            "Ingredients list (if anything added — vitamin premix, stabilizers)",
                            "Nutritional information (per 100 mL serving): Energy (kcal), Protein, Total Fat, Carbohydrates, Sugars, Sodium",
                            "Vegetarian/Non-vegetarian symbol (green dot = veg for fortified milk)",
                            "Batch/Lot number (for traceability)",
                            "Customer care/helpline number"
                        ],
                        fortificationLabel: "If fortified: '+F' symbol (FSSAI fortification logo) — blue logo with grain symbol mandatory on packaging of fortified milk"
                    }
                }
            },

            wastageManagement: {
                title: "IX. Milk Wastage Management aur Sustainability",
                p1: "Global food wastage ek critical sustainability issue hai — FAO estimate karta hai ki ~1.3 billion tonnes food annually wasted hota hai. Dairy sector mein, milk losses farm se consumer tak poori value chain mein occur hoti hain. India mein estimated post-harvest milk losses: 6-8% (approximately 10-13 million tonnes annually — WHO-FAO data).",

                lossPoints: {
                    title: "Milk Loss — Points aur Causes",
                    items: [
                        "Farm level (30-40% of total losses): Mastitis-affected milk discard, antibiotic withdrawal period discard, colostrum wastage, spillage during milking/handling, poor hygiene leading to early rejection",
                        "Collection/transport (15-20%): Temperature abuse during transport, long transit times (>6 hours without adequate cooling), road quality issues causing mechanical damage, tanker cleaning failures leading to entire tanker rejection",
                        "Reception/Processing (10-15%): Quality rejection at platform testing, processing equipment failures, CIP chemical overdose contamination, power failures (cold chain break), over-run in processing (excess product with no packaging available)",
                        "Storage/Distribution (20-25%): Cold chain failures (power cuts, refrigerator failures), product returns from retailers (nearing expiry), damaged packaging, over-ordering",
                        "Consumer level (15-20%): Over-purchasing, improper storage at home, partial use of containers"
                    ]
                },

                reductionStrategies: {
                    title: "Milk Loss Reduction Strategies",
                    technical: [
                        "Real-time milk quality monitoring aur predictive analytics (AI-based spoilage prediction)",
                        "Dynamic routing aur scheduling (shorter farm-to-plant times)",
                        "Cold chain optimization (solar-powered BMCs in remote areas, PCM-Phase Change Material cooling for transport without electricity)",
                        "Rapid platform testing (reduce rejection rates through better farm education)",
                        "Diversification into value-added products (near-expiry milk → khoa, cheese, milk powder) — reduces loss by converting to longer-shelf-life products",
                        "Modified atmosphere packaging (MAP) aur active packaging adoption",
                        "Demand forecasting AI tools (reduce over-production)"
                    ],
                    byproducts: {
                        title: "Milk Byproduct Utilization — Circular Economy",
                        items: [
                            "Whey (byproduct of cheese/paneer making): WPC (Whey Protein Concentrate — 35-80% protein), WPI (Whey Protein Isolate — >90% protein), WPH (hydrolyzed whey — infant formula), Whey permeate (lactose — pharma grade, food ingredient), Whey butter, Lactose (pharmaceutical excipient, food ingredient)",
                            "Buttermilk (byproduct of butter making): Fermented beverages (chaas), food ingredient (bakery, confectionery), animal feed",
                            "Cream (standardization byproduct): Butter, ghee, cream products, ice cream",
                            "Rejected milk (low acidity, minor quality issues): Biogas production (anaerobic digestion — 1L milk ≈ 0.5 m³ biogas), composting (after heat treatment), approved animal feed",
                            "Skim milk permeate (from UF/MF): Lactose recovery, fermentation substrate (ethanol, lactic acid, vitamins production)"
                        ]
                    }
                },

                environmentalImpact: {
                    title: "Dairy Industry ka Environmental Footprint",
                    items: [
                        "Carbon footprint: Global dairy contributes ~4% of total greenhouse gas emissions (GHG). 1 liter milk production: 1.0-3.5 kg CO₂ equivalent (range depends on production system, feed, geography)",
                        "Water footprint: 1 liter milk production requires approximately 1,000 liters water (virtual water — including feed crops irrigation)",
                        "Wastewater: Dairy plants generate 1-3 liters wastewater per liter milk processed (high BOD — 1,000-5,000 mg/L, COD 2,000-10,000 mg/L). Treatment: UASB reactors, activated sludge, constructed wetlands",
                        "Energy consumption: Pasteurization + refrigeration: 0.3-0.5 kWh/liter; UHT processing: 0.4-0.7 kWh/liter. Renewable energy integration: solar thermal (milk pre-heating), solar PV (cooling systems), biogas from wastewater",
                        "Packaging waste: Single-use plastic reduction — India's plastic waste management rules impact; Extended Producer Responsibility (EPR) mandatory for dairy companies"
                    ]
                }
            },

            conclusions: {
                title: "X. Conclusions aur Future Outlook",
                p1: "Reception se preservation tak doodh ka comprehensive management dairy industry ke bhitar product safety aur economic viability dono ensure karne ke liye paramount hai. Scientific advancements — from molecular biology-based rapid testing methods to IoT-enabled cold chain monitoring aur non-thermal preservation technologies — continuously this field ko transform kar rahe hain.",

                p2: "Effective milk management farm mein rigorous hygiene aur rapid cooling ke saath start hota hai — jo processing plant mein arriving doodh ki quality ko directly impact karta hai. 'Farm to Fork' approach: every link in this chain must function optimally. Weak link theory apply hoti hai — kisi bhi point par failure quality ko compromise kar sakti hai.",

                p3: "Milk transportation ek specialized operation hai jo advanced tanker design, IoT-based monitoring, blockchain traceability, aur smart logistics par rely karta hai. Cold chain integrity — ek seamless, interconnected temperature management system ke roop mein — isolated cooling events se fundamentally different approach hai.",

                p4: "Storage techniques, chahe large raw milk silos mein ho ya UHT milk ke aseptic packaging mein, continuously evolve ho rahe hain — Phase Change Materials (PCMs), active packaging, vacuum insulated panels jaise innovations shelf life extend karte hue environmental impact reduce kar rahe hain.",

                p5: "Quality testing infrastructure real-time mein evolve ho rahi hai — traditional 48-hour plate count se 8-minute BACTOSCAN flow cytometry tak, ya agle 5 saalon mein inline NIR/Raman sensors jo processing lines mein directly integrated honge. Artificial intelligence aur machine learning quality prediction, process optimization aur waste reduction mein transformative role play kar rahe hain.",

                p6: "Preservation science ka future 'clean label' movement dwara shaped ho raha hai — consumers chemical preservatives se natural alternatives ki taraf shift kar rahe hain. Hurdle technology combinations, biological preservation (bacteriocins, bacteriophages), aur advanced physical methods (HPP, PEF, UV) ek future present karte hain jahan safety aur quality minimal intervention ke saath achieve hoti hai.",

                keyTakeaways: {
                    title: "Key Scientific Takeaways",
                    items: [
                        "Temperature is the most critical single factor in milk quality preservation — every 6°C temperature increase doubles spoilage rate (Q10 ≈ 2)",
                        "Milk quality cannot be improved — only maintained. Sub-standard input = sub-standard output. Prevention (farm hygiene, rapid cooling) >> Correction (impossible in most cases)",
                        "Pasteurization (72°C/15s) achieves 5-6 log pathogen reduction — sufficient for public health protection with proper refrigeration",
                        "UHT (135-155°C/2-8s) + aseptic packaging = commercial sterility — revolutionary for areas without cold chain infrastructure",
                        "Hurdle technology (multiple simultaneous barriers) is the future of dairy preservation — effective, clean-label, minimal processing",
                        "Digitalization (IoT, AI, blockchain) is transforming dairy from a traditional practice to a data-driven science — enabling real-time quality management from farm to consumer"
                    ]
                },

                futureTrends: {
                    title: "Future Trends in Milk Handling aur Preservation",
                    items: [
                        "Precision Fermentation aur Cell-Cultured Dairy: Lab-grown dairy proteins (Perfect Day — whey proteins via fermentation) aur cell-cultured milk — potential disruption to traditional dairy",
                        "AI-powered Quality Management: Predictive spoilage models, automated quality sorting, computer vision-based defect detection",
                        "Blockchain-based Complete Traceability: Farm-to-consumer real-time tracking — immutable quality records, rapid targeted recalls",
                        "Carbon-neutral Dairy Processing: Net-zero targets by 2050 — renewable energy integration, carbon capture, circular economy principles",
                        "Personalized Nutrition: A2 milk, lactose-free, fortified milk targeted at specific health conditions — growing market segment",
                        "Novel Preservation Technologies: Cold plasma treatment, ultrasonication, dense phase CO₂ — research to commercial transition expected in next 5-10 years",
                        "Smart Packaging: Time-temperature indicators becoming standard, freshness sensors embedded in packaging, augmented reality labels for consumer information"
                    ]
                }
            },
    en: {
        title: "Milk Handling and Preservation",
        description: "From Reception to Preservation: Ensuring Quality and Safety",
        backToTopics: "Back to Topics",
        tabs: {
            introduction: "Introduction",
            reception: "Reception",
            transportation: "Transportation",
            storage: "Storage",
            preservation: "Preservation",
            qualityTesting: "Quality Testing",
            processingMethods: "Processing Methods",
            packagingLabeling: "Packaging & Labeling",
            wastageManagement: "Wastage Management",
            conclusions: "Conclusions"
        },
        sections: {
            introduction: {
                title: "I. Introduction: The Criticality of Milk Quality and Safety",
                p1: "Milk, a staple of human nutrition for thousands of years, is inherently a highly perishable raw material. Its rich nutritional composition — comprising approximately 87% water, 3.4% protein (casein and whey), 3.7% fat, 4.9% lactose, and essential vitamins and minerals such as calcium (120 mg/100mL), phosphorus, riboflavin (B2), and vitamin B12 — provides an ideal growth medium for a diverse array of spoilage and pathogenic microorganisms. These include Klebsiella, Bacillus cereus, Pseudomonas fluorescens, Staphylococcus aureus, Streptococcus agalactiae, Listeria monocytogenes, Salmonella spp., and E. coli O157:H7. This inherent susceptibility means that bacterial populations can multiply rapidly — with some species having a doubling time of less than 20 minutes at 37°C — rendering milk unsuitable for processing and unsafe for human consumption.",

                p2: "A fundamental principle in dairy processing emphasizes that milk quality cannot be improved by blending it with higher quality milk. A single lot of poor-quality milk (even comprising just 1% contaminated milk) has the capacity to compromise or spoil an entire mixed batch — a phenomenon known as the 'microbial cross-contamination effect.' This underscores the critical need for robust initial quality checks and effective segregation protocols. The Indian dairy industry, characterized by its vast network of over 350 million smallholder farmers, frequently encounters challenges related to raw milk quality, including high bacterial loads (often exceeding 10⁶ CFU/mL), somatic cell counts (>500,000 cells/mL), and the potential presence of antibiotic residues (beta-lactams, tetracyclines) — all of which create public health concerns and trade barriers.",

                p3: "The rapid multiplication rates of spoilage and pathogenic microorganisms in milk — following exponential growth kinetics of 2ⁿ during the exponential phase — mean that any failure in hygiene or temperature control at the earliest stages, such as during farm collection or initial transport, can result in an astronomical increase in bacterial load. For example, if milk is held at 10°C for 6 hours instead of 4°C, bacterial counts can increase approximately 10-fold. This cascading effect — known as 'temperature abuse cascade' — demonstrates the widespread and severe consequences of an initial, seemingly minor lapse in quality control, such as substantial economic losses from rejected milk (estimated at ₹2,000 crore annually in India) and significant public health risks. Therefore, rigorous quality control at the reception dock is not merely a regulatory hurdle, but a critical, proactive risk mitigation strategy implemented under the 'Hazard Analysis and Critical Control Points (HACCP)' framework.",

                scientificData: {
                    title: "Scientific Data and Statistics",
                    composition: {
                        title: "Average Chemical Composition of Milk (Cow Milk)",
                        items: [
                            "Water: 87.3%",
                            "Fat: 3.7% (range 3.2-5.0%)",
                            "Protein: 3.4% (Casein: 2.7%, Whey: 0.7%)",
                            "Lactose: 4.9%",
                            "Minerals: 0.7% (Ca, P, K, Na, Mg)",
                            "Vitamins: A, D, E, K, B-complex",
                            "pH: 6.6-6.8 (fresh milk)"
                        ]
                    },
                    microbialGrowth: {
                        title: "Microbial Growth Rates at Different Temperatures",
                        items: [
                            "0°C: Minimal growth (generation time >24 hours)",
                            "4°C: Severely inhibited (generation time ~12-15 hours)",
                            "10°C: Slow growth (generation time ~3-4 hours)",
                            "21°C: Moderate growth (generation time ~45-60 min)",
                            "37°C: Optimal growth (generation time ~20-30 min)"
                        ]
                    }
                }
            },

            reception: {
                title: "II. Reception and Initial Handling of Milk at Dairy Plants",
                p1: "The journey of milk from farm to processing plant involves meticulous handling and stringent quality control measures to preserve its integrity. The reception stage — also referred to as 'Critical Control Point 1 (CCP-1)' in the HACCP framework — determines whether incoming milk is acceptable for processing.",

                farm_practices: {
                    title: "Best Practices for Milk Collection and Cooling at Farm Level",
                    p1: "At the farm level, the foundation of milk quality is established through strict adherence to hygiene and rapid cooling protocols. Hygienic milking practices include: udder pre-dipping (with 0.5-1% iodine solution), teat cleaning and drying (with individual paper towels), fore-stripping (for mastitis detection), and post-dipping (with glycerin-based teat dip). These practices can reduce bacterial contamination by up to 90%. Equipment — stainless steel buckets, milking machines, pipelines — must be cleaned daily with food-grade detergents (alkaline cleaners pH 11-12 and acidic cleaners pH 2-3).",

                    p2: "Rapid cooling is another essential practice. Milk should be rapidly cooled to +4°C (or below 40°F) within two hours of milking — this 'two-hour rule' is an internationally accepted standard. This immediate chilling is crucial for inhibiting bacterial growth and preserving milk quality until it reaches the processing plant. Cooling systems commonly used on farms include: Direct Expansion Bulk Milk Coolers (DX-BMCs), which can cool milk from 35°C to 4°C in 45 minutes, and Plate Coolers that use bore well/spring water for initial pre-cooling directly in the milking parlor.",

                    p3: "Modern dairy farms are increasingly utilizing data-driven tools for initial quality checks. Automated Milking Systems (AMS or 'Milking Robots') record vital information such as milk volume, milking duration, milk conductivity (mastitis is suspected above 6.0 mS/cm), fat/protein/lactose analysis via mid-infrared spectroscopy, and individual cow identity through RFID tags. Precision Livestock Farming (PLF) technologies provide real-time data. Before milk leaves the farm, preliminary quality tests are conducted: Clot-on-Boiling (COB) test, Alcohol Test (with 68% ethanol), pH measurement, Lactometer reading (SNF normal range: 1.028-1.034), and antibiotic residue screening (Charm ROSA, Delvotest, Copan bioptic kits).",

                    additionalTests: {
                        title: "Additional Quality Parameters at Farm Level",
                        items: [
                            "Somatic Cell Count (SCC): <200,000 cells/mL (normal), >500,000 cells/mL (mastitis indicator) — BIS IS:1479 standard",
                            "Total Bacterial Count (TBC): <100,000 CFU/mL (Grade A milk) — Plate Count Agar at 32°C, 48 hours incubation",
                            "Titratable Acidity: 0.14-0.16% lactic acid (fresh milk), >0.18% indicates spoilage onset",
                            "Freezing Point: -0.530°C to -0.560°C (changes with adulteration — water addition raises above -0.530°C)",
                            "Coliform Count: <10 CFU/mL (indicator of good hygiene)"
                        ]
                    }
                },

                plant_reception: {
                    title: "Dairy Plant Reception Area Design and Equipment",
                    p1: "Upon arrival at the dairy plant, milk enters specialized reception departments designed for efficient handling and rigorous quality assessment. The reception dock design must comply with GMP (Good Manufacturing Practices) and FSMA (Food Safety Modernization Act) guidelines. These departments are responsible for comprehensive quality testing, accurate quantity measurement, and seamless transfer of milk to subsequent processing stages.",

                    p2: "Tanker reception area configuration: minimum 3-4 unloading bays (waiting time <30 minutes during peak hours), dedicated sampling points (HDPE or stainless steel sampling valves), and separate lanes for accepted/rejected milk. Tankers are identified upon arrival using unique codes or RFID tags — for complete traceability.",

                    measurement_methods: {
                        by_weight: {
                            title: "By Weight (Gravimetric Method)",
                            text: "This method involves weighing the tanker on a certified weighbridge before and after unloading — accuracy of ±0.1%. Alternatively, milk can be pumped into specialized weighing tanks equipped with load cells (capacity 5,000-30,000 L). Weighing tanks are typically made of stainless steel 304/316L and use NABL-accredited load cells. Under legal metrology requirements, weights undergo regular calibration to prevent tampering."
                        },
                        by_volume: {
                            title: "By Volume (Volumetric Method)",
                            text: "Electromagnetic flowmeters (EMF) or positive displacement flowmeters are utilized for volume measurement — accuracy of ±0.5%. To ensure accuracy and prevent air from entering the milk line — which causes false high readings and foam formation — a centrifugal air-eliminator is typically installed before the flowmeter. Modern systems also use Coriolis mass flowmeters that simultaneously measure density."
                        }
                    },

                    p3: "Despite initial cooling (+4°C) at the farm and insulated transport, a slight temperature increase (typically 1-3°C) during transit is often unavoidable. Therefore, milk is usually re-cooled below +4°C using a plate heat exchanger (PHE) or tubular heat exchanger installed in the transfer line to raw milk silos. Chilled water (0-2°C) or glycol systems (propylene glycol, food-grade) are used as cooling media.",

                    receptionQualityTests: {
                        title: "Platform Tests at Reception — Scientific Basis",
                        organoleptic: {
                            title: "Organoleptic/Sensory Tests",
                            items: [
                                "Color: Normal cow milk is creamy white; bluish tint — water addition; yellow tint — colostrum/mastitis",
                                "Odor: Clean, slightly sweet; off-odors indicate spoilage (butyric acid — rancidity, acetic acid — fermentation)",
                                "Appearance: Homogeneous; sediment — dirt/mastitis; ropy texture — bacterial contamination (Alcaligenes viscolactis)"
                            ]
                        },
                        chemical: {
                            title: "Rapid Chemical Tests",
                            items: [
                                "Alcohol Test: 2 mL milk + 2 mL 68% alcohol — coagulation indicates acidity >0.18% or calcium imbalance",
                                "Clot on Boiling (COB): Boil the milk — clot/curd formation indicates acidity >0.20%",
                                "Methylene Blue Reduction Test (MBRT): 10 mL milk + 1 mL MBRT solution, incubate at 37°C — Grade A milk decolorizes in 5+ hours",
                                "Resazurin Test (30-min): Rapid version of MBRT — Grade A milk retains purple color",
                                "Lactometer Test: Lactometer reading (LR) at 27°C — adulterated milk shows LR >32 (water addition)"
                            ]
                        },
                        adulteration: {
                            title: "Adulteration Detection Tests",
                            items: [
                                "Starch Detection: Milk + iodine solution — blue/black color = starch added (illegal thickener)",
                                "Urea Detection: Urease + bromothymol blue — green/blue color = exogenous urea added",
                                "Detergent Detection: Bromocresol purple test — violet color = detergent present",
                                "Formalin Detection: Sulfuric acid layer test — violet ring at interface = formalin present",
                                "Hydrogen Peroxide Detection: Vanadium pentoxide test — pink/red = H₂O₂ present",
                                "Neutralizer Detection (Soda): Rosolic acid test — rose/crimson = sodium carbonate/bicarbonate added"
                            ]
                        }
                    }
                },

                hygiene_cleaning: {
                    title: "Hygiene and CIP Procedures for Containers and Equipment",
                    p1: "Cleaning and disinfection are two distinct processes: Cleaning removes physical and chemical residues (soil removal — >99.5% required), while Disinfection/Sanitization kills harmful bacteria (>99.999% reduction = 5-log reduction target). The dairy industry standard is 'Clean-in-Place (CIP)' technology, which enables automated cleaning without manual disassembly.",

                    cipProtocol: {
                        title: "Standard CIP Protocol (5-Step Process)",
                        steps: [
                            "Step 1 - Pre-rinse: Lukewarm water (35-45°C) for 5-10 minutes — loosens milk residues",
                            "Step 2 - Alkaline Wash: NaOH/KOH solution (1-2%, pH 11-13) at 70-75°C for 20-30 min — dissolves fat and protein",
                            "Step 3 - Intermediate Rinse: Hot water (65-70°C) — removes alkaline cleaner",
                            "Step 4 - Acid Wash: Nitric acid/phosphoric acid (0.5-1%, pH 2-3) at 65-70°C for 15-20 min — removes mineral deposits (milkstone = calcium phosphate)",
                            "Step 5 - Final Rinse + Sanitization: Cold water rinse, followed by sanitizer (chlorine 200 ppm, peracetic acid 100-200 ppm, or hot water 85°C+ for 20 min)"
                        ]
                    },

                    p2: "Farm tanks are inspected for any milk residue — ATP bioluminescence testing (Relative Light Units <200 = clean) is increasingly popular. Milk tankers undergo daily CIP, or after each collection round. Tanker cleaning is verified by conductivity measurement — rinse water conductivity <10 µS/cm = adequate rinse.",

                    p3: "For contamination prevention in the reception area: dedicated color-coded utensils (blue = raw area, red = reject area), positive pressure HVAC systems that keep insects and dust out, and regular environmental monitoring (air sampling — settle plate method, surface swabs — contact plates) are essential implementations."
                }
            },

            transportation: {
                title: "III. Milk Transportation Systems and Logistics",
                p1: "The transportation of milk from farm to processing plant is a carefully orchestrated operation. Global milk collection volumes — with India holding a 23% global share (2023 data) — demand an efficient, safe, and traceable transport network. India has approximately 120,000 milk collection routes serving the organized sector.",

                tanker_design: {
                    title: "Design and Construction of Milk Tankers",
                    p1: "Milk tank trucks are constructed exclusively from food-grade stainless steel — typically AISI Grade 304 (18% chromium, 8% nickel) or superior Grade 316L (2-3% molybdenum addition that enhances chloride corrosion resistance). Interior surface finish: 2B or BA finish, Ra ≤0.8 µm (roughness average) — smoother surfaces reduce bacterial adhesion. All welds must be continuous and crevice-free — as per ASME Bioprocessing Equipment (BPE) standards.",

                    p2: "A critical design feature is a robust insulation system: typically 100-150 mm thick polyurethane foam (thermal conductivity λ = 0.022-0.026 W/m·K). ATP-R1 certification requires that even at an external temperature of 30°C, the internal milk temperature should increase by no more than ≤6°C over 10 hours. Vacuum-insulated panels (VIPs) are increasingly being used, providing 5-10x better insulation than traditional foam.",

                    p3: "Milk tankers are designed with 2-6 internal compartments (divided by baffles/bulkheads), with capacities of 8,000-30,000 liters. Compartmentalization allows: segregation of milk from different farms (quality-based sorting), separate transport of milk with different fat content, and improved vehicle stability (minimizes CoG shift from sloshing). Bottom outlet valves are of butterfly design (no dead legs, ensures complete drainage).",

                    tankerSpecifications: {
                        title: "Standard Milk Tanker Technical Specifications",
                        items: [
                            "Material: SS 304/316L, 3-4 mm shell thickness",
                            "Capacity: Small — 3,000-8,000 L (rural routes), Large — 15,000-30,000 L (highway routes)",
                            "Insulation: 100-150 mm PUF, Temperature rise <2°C in 6 hours",
                            "Pump: Centrifugal/sanitary pump, 500-1000 L/min flow rate",
                            "Agitator: Slow-speed (1-5 RPM) to prevent fat globule damage",
                            "Sampling Valve: Tri-clamp fittings, aseptic sampling",
                            "CIP Connection: Dedicated spray balls (360° coverage), 1.5 bar pressure"
                        ]
                    }
                },

                hygienic_transport: {
                    title: "Ensuring Hygienic Transport",
                    p1: "All milk-contact components — valves, pumps, hoses, gaskets — must be designed according to 3-A Sanitary Standards (USA) or EHEDG (European Hygienic Engineering and Design Group) guidelines. Gaskets must be made from food-grade EPDM or silicone (not PTFE — due to absorption potential). Hoses should preferably be food-grade PTFE-lined or SS corrugated flexible hoses.",

                    p2: "The interior surface of milk tankers must have Ra ≤0.8 µm — this smooth surface dramatically reduces bacterial biofilm formation. Studies show that biofilm formation on surfaces with Ra >1.6 µm is 10x greater compared to surfaces with Ra ≤0.4 µm. Electropolishing (anodic dissolution in acidic electrolyte) further enhances surface smoothness and corrosion resistance.",

                    p3: "Advanced CIP systems on tankers: bottom-mounted spray balls and top-mounted rotating spray heads ensure comprehensive coverage. CIP validation is performed using ATP bioluminescence testing — acceptable threshold <100 RLU (Relative Light Units). Microbiological verification: Rinse water samples — <10 CFU/mL is acceptable.",

                    biofilmPrevention: {
                        title: "Biofilm Formation and Prevention",
                        p1: "Biofilms — protected communities of bacteria adhered to surfaces — are a major hazard in dairy equipment. Bacteria within biofilms are 100-1000x more resistant to sanitizers compared to planktonic cells. Common biofilm formers in dairy: Listeria monocytogenes, Pseudomonas aeruginosa, Bacillus cereus, and Staphylococcus aureus.",
                        preventionMethods: [
                            "Surface finish: Ra ≤0.8 µm — minimizes attachment sites",
                            "CIP frequency: Daily minimum, after every collection",
                            "Enzymatic cleaners: Protease + lipase cocktails (dissolve biofilm matrix)",
                            "High-velocity flow: >1.5 m/s (turbulent flow Re >10,000) — mechanical scouring",
                            "Ozone treatment: 1-2 ppm aqueous ozone — broad-spectrum sanitizer (EPA-approved)"
                        ]
                    }
                },

                temp_control: {
                    title: "Temperature Control and Cold Chain Management During Transit",
                    p1: "International dairy standards (Codex Alimentarius — CAC/RCP 57-2004) specify that raw milk must not exceed 10°C during transport. In India, FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations specify maintaining raw milk at 5°C or below. ATP (Accord sur le Transport des denrées Périssables) — an international agreement — defines standards for temperature-controlled transport equipment used for perishable foodstuffs.",

                    p2: "Modern milk tank trucks feature advanced IoT-enabled temperature monitoring systems: multiple PT-100 and PT-1000 resistance temperature detectors (RTDs) or NTC thermistors placed at strategic locations (top, middle, bottom of each compartment). Data loggers (HACCP-compliant, tamper-proof) continuously record temperature, GPS location, speed, and door opening events — uploaded in real-time to the cloud (GPRS/4G connectivity). Alert systems: SMS/email alerts on temperature breaches >6°C, geofencing alerts for unauthorized diversions.",

                    coldChainIntegrity: {
                        title: "Cold Chain Integrity — Scientific Importance",
                        p1: "The Integrated Temperature-Time concept is used in dairy: Total Bacterial Count is an exponential function of temperature × time. Formula: N = N₀ × e^(µ×t) where µ = specific growth rate (temperature-dependent, following Arrhenius equation).",
                        items: [
                            "At 4°C for 12 hours: Bacterial count approximately doubles (2x N₀)",
                            "At 10°C for 12 hours: Bacterial count increases approximately 10x",
                            "At 20°C for 12 hours: Bacterial count increases approximately 1000x",
                            "Practical implication: Even a 2°C temperature abuse from 4°C can cause significant quality degradation on long routes"
                        ]
                    }
                },

                monitoring_logistics: {
                    title: "Smart Logistics and Real-time Monitoring",
                    p1: "Industry 4.0 technologies are revolutionizing dairy logistics. Advanced systems include: Fleet Management Systems (FMS) that monitor route optimization, fuel efficiency, and driver behavior (harsh braking — risk of fat globule damage). Blockchain-based traceability platforms (such as IBM Food Trust, Ripe.io) immutably track milk batches from farm to plant — extremely valuable during recall events.",

                    p2: "In-transit milk quality monitoring: Near-Infrared (NIR) spectroscopy sensors installed in some advanced tankers measure real-time milk quality parameters (fat, protein, lactose, somatic cells) without sampling. Electronic nose technology (e-nose) — array of gas sensors — detects off-odors and spoilage volatiles (acetaldehyde, diacetyl, butyric acid).",

                    p3: "In India, NDDB's 'iMark' system — an RFID and QR code-based tracking system — tracks milk cans and tankers in the cooperative dairy supply chain. AMUL's 'Milk Procurement System' captures real-time data from 18,000+ collection centers.",

                    p4: "Logistics optimization: Milk collection route optimization algorithms (Vehicle Routing Problem — VRP solvers) minimize: total travel distance, fuel consumption, and critically, milk-in-transit time. Studies show that optimal routing can reduce mileage by 15-25% and transit time by 10-20% — directly resulting in milk quality improvement.",

                    regulatoryCompliance: {
                        title: "Regulatory Compliance for Transport",
                        items: [
                            "India: FSSAI Regulations — Food Safety and Standards (Licensing and Registration) Regulations 2011, Schedule 4 — requirements for vehicles",
                            "AGMARK standards — grade specifications",
                            "Prevention of Food Adulteration (PFA) Act",
                            "Europe: EC Regulation 853/2004 — hygiene rules for food of animal origin",
                            "EC Regulation 1/2005 — animal transport (indirectly relevant)",
                            "USA: Grade 'A' Pasteurized Milk Ordinance (PMO) — comprehensive milk transport regulations",
                            "International: Codex Alimentarius CAC/RCP 57-2004 — Hygienic Practices for Milk"
                        ]
                    }
                }
            },

            storage: {
                title: "IV. Milk Storage Techniques and Technologies",
                p1: "Effective storage is a critical component of milk preservation, maintaining its quality and safety from reception through distribution. Different stages require different storage conditions — from raw milk reception to processed product distribution. Storage conditions directly determine shelf life, safety, and sensory quality.",

                raw_milk_silos: {
                    title: "Raw Milk Storage in Silo Tanks",
                    p1: "Untreated raw milk is typically stored in large, vertical, insulated silo tanks, often located outside the plant (for space optimization). Tank capacity typically ranges from 50,000 to 500,000 liters, with tall cylindrical designs (height:diameter ratio ≈ 3:1 to 5:1 — for efficient mixing). Construction: SS 304 double-walled tanks with 100-150 mm PUF insulation. External surface: cladding (SS 2B or stucco aluminum) or fiberglass reinforced plastic (FRP).",

                    p2: "Gentle agitation within raw milk silos is crucial to prevent cream separation due to gravity. Side-mounted variable-speed propeller agitators (paddle or hydrofoil design) or top-mounted slow-speed agitators are used. Agitation must be gentle to: minimize air entrainment (foam formation leads to fat loss and oxidation), avoid fat globule damage (free fat release — causes rancidity), and keep the air-milk interface minimal.",

                    sensors: {
                        temp: {
                            title: "Temperature Sensors (PT-100 RTDs)",
                            text: "Multiple sensors at different heights (top, middle, bottom) — detect temperature stratification. Continuous monitoring with PLC integration, alarm triggers at >6°C."
                        },
                        level: {
                            title: "Level Sensors (Ultrasonic or Pressure Transmitters)",
                            text: "Continuous level measurement — critical for inventory management. Magnetostrictive level sensors provide high accuracy (±1 mm)."
                        },
                        low_level: {
                            title: "Low-Level Sensors (Float Switches or Guided Wave Radar)",
                            text: "Located at the outlet pipe — prevent pump cavitation. Automatic pump shutoff when level is too low."
                        },
                        overflow: {
                            title: "Overflow Protection (High-Level Alarm + Auto-shutoff Valve)",
                            text: "Located at the top of the tank — dual protection: high-level alarm + automatic inlet valve closure. Prevents product loss and contamination."
                        }
                    },

                    siloManagement: {
                        title: "Silo Management Best Practices",
                        items: [
                            "FIFO (First-In-First-Out) principle — process the oldest milk first",
                            "Maximum raw milk holding time: 24-48 hours at 4°C (significant quality degradation beyond 72 hours)",
                            "Regular milk quality checks during storage (acidity, temperature, organoleptic every 4-6 hours)",
                            "Silo CIP after each complete emptying — full CIP cycle mandatory",
                            "Silo interior inspection: monthly visual inspection, annual dimensional check",
                            "Positive pressure nitrogen blanketing: used in some plants to prevent oxidation"
                        ]
                    }
                },

                refrigerated_storage: {
                    title: "Refrigerated Storage for Pasteurized/Processed Milk",
                    p1: "Refrigeration is the most critical and widely used method for maintaining the safety and quality of milk and dairy products. Scientific basis: the Arrhenius equation demonstrates that for every 10°C temperature reduction, reaction rates (microbial growth and enzymatic activity) slow by approximately 2-3x (Q10 factor).",

                    p2: "International standards: Codex Standard 206-1999 (fluid milk) — pasteurized milk must be stored at 6°C or below. India (FSSAI): pasteurized milk at 4°C or below. USA (PMO): 45°F (7.2°C) or below. Optimum storage temperature for maximum shelf life: 1-4°C. Freezing point of milk: approximately -0.54°C — therefore should not be stored below 0°C (partial freezing damages fat structure and causes protein precipitation).",

                    p3: "Cold storage room design: Insulated panels (PUF — 150-200 mm), automatic temperature recording, multiple thermometers at different heights, backup refrigeration systems (N+1 redundancy), emergency alarm systems. Refrigeration systems: vapor compression cycle (HFO-1234yf or CO₂ transcritical systems — eco-friendly refrigerants replacing older HFCs). Defrost systems: electric, hot gas, or off-cycle defrost (typically every 6-8 hours, <30 min duration).",

                    shelfLifeData: {
                        title: "Pasteurized Milk Shelf Life at Different Temperatures",
                        items: [
                            "1-2°C: Up to 21-25 days (Extended Shelf Life — ESL milk)",
                            "4°C: 14-18 days (standard pasteurized)",
                            "7°C: 7-10 days",
                            "10°C: 3-5 days",
                            ">15°C: <48 hours (rapid quality loss)"
                        ]
                    },

                    eslMilk: {
                        title: "Extended Shelf Life (ESL) Milk Technology",
                        p1: "ESL milk is a relatively new category positioned between standard pasteurized and UHT milk. ESL milk is achieved by combining: Microfiltration (MF) — 1.4 µm membranes remove 99.9% of bacteria, higher pasteurization temperatures (125-127°C for 2-4 seconds), and aseptic/semi-aseptic packaging. Result: 30-45 days shelf life at refrigeration temperatures — without the UHT taste, but longer than conventional pasteurized milk."
                    }
                },

                uht_storage: {
                    title: "Ultra-High Temperature (UHT) Milk — Science and Technology",
                    p1: "UHT milk undergoes flash sterilization: rapidly heated to 135-155°C (FSSAI minimum 135°C) for 2-8 seconds (in a continuous flow system). Two types: Direct UHT (steam injection or steam infusion — milk comes into direct contact with steam, rapid heating in 0.3 seconds, milder flavour) and Indirect UHT (through PHE or THX, slower heating, more caramelization). Sterility concept: 12-D process — achieving 12 log reduction for the most heat-resistant pathogen Bacillus stearothermophilus (z-value = 10°C, D121°C = 4 min).",

                    p2: "Aseptic packaging is equally critical for UHT milk shelf stability. Common packaging: Tetra Pak (6-layer laminate: PE/paper/PE/Al/PE/PE), SIG Combibloc. These materials provide: oxygen barrier (O₂ transmission rate <0.1 cc/day), light barrier (prevents photooxidation — riboflavin destruction and off-flavours), mechanical protection. Filling involves: packaging sterilization (H₂O₂ spray + UV, or H₂O₂ bath at 70°C), aseptic filling environment (ISO Class 5 or better), hermetic sealing.",

                    p3: "UHT milk does not require chemical preservatives — commercial sterility (absence of viable spoilage organisms under normal storage conditions) is already achieved. However, chemical changes occur during storage: Maillard browning (lactose + lysine reaction — slow at room temp, noticeable after months), proteolysis by heat-stable enzymes (plasmin — an indigenous milk enzyme resistant to UHT, eventually causes bitterness and gelation — the 'age gelation problem'), and fat oxidation (especially linolenic acid).",

                    uhtChanges: {
                        title: "Nutritional and Sensory Changes from UHT Processing",
                        nutritional: [
                            "Vitamin C: 20-25% reduction (heat-labile)",
                            "Thiamine (B1): 10-20% reduction",
                            "Vitamin B12: 10-20% reduction",
                            "Folic acid: 5-10% reduction",
                            "Vitamins A, D, E, K: Minimal change (heat-stable)",
                            "Calcium, Phosphorus: No significant change",
                            "Protein: Slight denaturation of whey proteins (β-Lg — 70-80% denatured), digestibility slightly improved",
                            "Casein: Relatively heat-stable, Maillard reaction causes slight lysine loss"
                        ],
                        sensory: [
                            "Cooked/sulphurous off-flavour (volatile sulfur compounds — H₂S, dimethyl sulfide from whey protein denaturation)",
                            "Slight caramelization (Maillard reaction — HMF formation, furanic compounds)",
                            "These off-flavours diminish after a few weeks of storage (dissipation through packaging)",
                            "UHT milk viscosity is slightly higher than pasteurized (due to whey protein denaturation and casein micelle changes)"
                        ]
                    }
                },

                otherStorageMethods: {
                    title: "Other Specialized Storage Methods",
                    condensedMilk: {
                        title: "Condensed Milk Storage",
                        p1: "Sweetened condensed milk: 60-65% sucrose concentration — 'hurdle effect' — water activity (aw) reduced to 0.83, inhibiting microbial growth. Shelf life: 1-2 years at room temperature (unopened cans). Evaporated milk (unsweetened): requires sterilization (115-120°C for 15-20 min) — shelf life 1-2 years. Storage: dry, cool (below 20°C), dark conditions preferred."
                    },
                    driedMilk: {
                        title: "Dried Milk/Milk Powder Storage",
                        p1: "Spray drying: milk concentrate (48-52% TS) is atomized in a hot air chamber (inlet temp 170-220°C, outlet 80-95°C). Moisture content: ≤3% (whole milk powder) or ≤4% (skim milk powder) — water activity aw ≤0.25, excellent microbial stability. Shelf life: Whole milk powder — 6-12 months (fat oxidation is the limiting factor), Skim milk powder — 18-24 months (lower fat content). Storage requirements: airtight containers (nitrogen flushing recommended), cool (15-20°C), dry (<65% RH), dark. Caking prevention: silica gel desiccants, proper packaging (multi-layer laminated pouches)."
                    },
                    fermentedProducts: {
                        title: "Fermented Dairy Products Storage",
                        p1: "Yogurt, dahi, buttermilk, cheese — refrigerated storage at 2-6°C. Self-preserving nature due to: lactic acid (pH 4.0-4.6 — inhibits pathogen growth), bacteriocin production (nisin, acidophilin — antimicrobial peptides), competitive exclusion by starter cultures. Hard cheeses (moisture <39%): stored at 2-8°C, up to 12+ months. Soft cheeses (moisture >55%): refrigerated, short shelf life (2-4 weeks). Modified Atmosphere Packaging (MAP) — CO₂/N₂ mixture used for cheese — extends shelf life by 50-100%."
                    }
                }
            },

            preservation: {
                title: "V. Milk Preservation Methods — Comprehensive Overview",
                principles: {
                    title: "Scientific Principles of Preservation in Dairy",
                    p1: "The fundamental concept of milk preservation is based on 'Leistner's Hurdle Technology' — multiple simultaneous antimicrobial factors (hurdles) that collectively inhibit microbial growth. No single hurdle is sufficient — their combination creates a synergistic effect. Major hurdles: Temperature (T), Water Activity (aw), pH, Redox Potential (Eh), Competitive Microbiota, and Preservatives.",

                    hurdleConcept: {
                        title: "Hurdle Concept — Scientific Basis",
                        items: [
                            "Temperature hurdle: <4°C or >72°C — microbial growth severely restricted",
                            "Water activity hurdle: aw <0.91 (yeast/mold), <0.86 (Staphylococcus), <0.60 (no microbial growth)",
                            "pH hurdle: <4.6 (prevents C. botulinum), <4.0 (prevents most pathogens)",
                            "Redox potential hurdle: Eh <-150 mV (anaerobic conditions — prevents aerobic spoilage)",
                            "Competitive microbiota: Lactic acid bacteria (LAB) outcompete pathogens — 'biological preservation'"
                        ]
                    },

                    p2: "Chemical preservatives work by creating an environment unfavorable for microbial growth. Mechanisms: (1) Disruption of cell membrane integrity, (2) Inhibition of critical metabolic enzymes, (3) Interference with DNA replication/transcription, (4) Reduction in water activity, (5) pH depression below growth optimum. Bactericidal effect: kills microorganisms; Bacteriostatic effect: inhibits growth without killing."
                },

                thermalPreservation: {
                    title: "Thermal Preservation Methods",
                    pasteurization: {
                        title: "Pasteurization — Science and Methods",
                        p1: "The scientific basis of pasteurization: thermal death kinetics against all milk-borne pathogenic organisms follow first-order reaction kinetics: log(N/N₀) = -t/D, where D = decimal reduction time (time to achieve 1-log reduction at a specific temperature). Target pathogen: Coxiella burnetii (Q fever organism — most heat-resistant pathogen in milk, D63°C = 2-3 min).",
                        methods: [
                            "LTLT (Low Temperature Long Time): 62.8°C (145°F) for 30 minutes — batch/vat pasteurization",
                            "HTST (High Temperature Short Time): 72°C (161.6°F) for 15 seconds — continuous flow, most common",
                            "Higher Heat Shorter Time (HHST): 89°C for 1 sec, 90°C for 0.5 sec, 94°C for 0.1 sec, 96°C for 0.05 sec",
                            "UHT: 135-140°C for 2-8 seconds",
                            "Ultra-Pasteurization: 138°C for at least 2 seconds (with refrigeration) — ESL milk"
                        ],
                        effectiveness: "HTST pasteurization: 5+ log reduction in pathogenic bacteria, including: Mycobacterium tuberculosis, Salmonella spp., Listeria monocytogenes, Staphylococcus aureus (but not its heat-stable toxins), E. coli O157:H7, Campylobacter jejuni"
                    },

                    htst_equipment: {
                        title: "HTST Pasteurizer — Equipment Components",
                        items: [
                            "Balance Tank (Constant Level Tank): Ensures a continuous, uninterrupted milk supply",
                            "Feed Pump: Centrifugal pump, maintains constant flow rate",
                            "Flow Controller: Metering pump or flow control valve — ensures precise residence time",
                            "Regeneration Section (PHE): Cold raw milk preheated by hot pasteurized milk (energy savings: 85-95%)",
                            "Heating Section (PHE): Hot water/steam-heated plates — achieves target temperature",
                            "Holding Tube: Calculated length/diameter for minimum 15-second residence time at operating flow rate",
                            "Flow Diversion Device (FDD): Safety device — automatically diverts milk if temperature falls below 72°C (unpasteurized milk returned to balance tank)",
                            "Cooling Section (PHE): Cooling pasteurized milk with chilled water/glycol",
                            "Homogenizer (optional): 150-200 bar pressure — reduces fat globule size"
                        ]
                    }
                },

                chemicals: {
                    title: "Chemical Preservation Methods",
                    h2o2: {
                        title: "Hydrogen Peroxide (H₂O₂) — Scientific Details",
                        p1: "H₂O₂ is a powerful oxidizing agent whose antimicrobial mechanism involves: generation of reactive oxygen species (ROS) — hydroxyl radicals (·OH), superoxide (O₂·⁻) — which oxidatively damage bacterial cell membranes, proteins, and DNA. Effective concentration: 0.03-0.1% (300-1000 ppm) for milk preservation. Gram-negative bacteria are generally more sensitive than Gram-positive organisms.",
                        p2: "H₂O₂ is rapidly decomposed in milk by the naturally present catalase enzyme: 2H₂O₂ → 2H₂O + O₂ (catalase-mediated). Therefore higher concentrations are needed. Disadvantages: destroys catalase and peroxidase (indigenous enzymes), reduces vitamin C and some B vitamins, can cause protein oxidation (off-flavours), methionine oxidation in proteins. Regulatory status: FDA 21 CFR 184.1366 — GRAS (Generally Recognized as Safe) for specific uses, but banned in many countries for direct milk preservation."
                    },

                    lp_system: {
                        title: "Lactoperoxidase System (LP-System) — Detailed Science",
                        p1: "The LP-System is a naturally occurring antimicrobial system: Lactoperoxidase enzyme (LP) + Thiocyanate ions (SCN⁻) + Hydrogen peroxide (H₂O₂). Reaction: LP catalyzes oxidation of SCN⁻ by H₂O₂ → Hypothiocyanous acid (HOSCN) + Hypothiocyanite (OSCN⁻). Natural content: LP — 30 mg/L bovine milk (highly concentrated whey protein), SCN⁻ — 1-15 mg/L (from glucosinolate metabolism, variably from brassica feed). H₂O₂ is naturally very low — the limiting factor.",
                        p2: "LP-System activation: WHO/FAO approved protocol — add thiocyanate 14 ppm + H₂O₂ 8.5 ppm (H₂O₂ source: sodium percarbonate). Effect: bacteriostatic (growth inhibition) rather than bactericidal for mesophilic bacteria, at 30°C, providing up to 7-8 hours additional protection. Scientific mechanism: HOSCN irreversibly inhibits bacterial enzymes containing sulfhydryl groups (thiol-dependent enzymes such as glycolysis enzymes, hexokinase, aldolase) → blocks energy metabolism → arrests bacterial growth. LP-system is ineffective against: thermophilic bacteria, spores, yeasts, and molds."
                    },

                    nisin: {
                        title: "Nisin — Natural Antimicrobial Peptide",
                        p1: "Nisin is a bacteriocin — an antimicrobial peptide produced by Lactococcus lactis subsp. lactis. Structure: 34 amino acid lantibiotic with unique lanthionine residues. Mechanism: pore formation in bacterial cell membrane (lipid II binding) + inhibition of cell wall synthesis. Spectrum: active against Gram-positive bacteria and spores (Clostridium botulinum, Bacillus cereus, Listeria monocytogenes, Staphylococcus aureus). Gram-negative bacteria are resistant (outer membrane barrier). FSSAI permitted level: 250 IU/g (international units per gram). Dairy applications: processed cheese (prevents late blowing by Clostridia), flavoured milk, UHT milk (additional safety hurdle). Temperature stability: stable at low pH (<5.0), loses activity at neutral pH — limiting dairy applications.",
                        regulatory: "Status: E234 (European food additive number), GRAS (USA), Codex GSFA — permitted in various dairy products at specific levels."
                    },

                    natamycin: {
                        title: "Natamycin (Pimaricin) — Antifungal Preservative",
                        p1: "Natamycin is a polyene macrolide antifungal compound produced by Streptomyces natalensis. Mechanism: binding with ergosterol (fungal cell membrane component) → disrupts membrane permeability and function → fungal cell death. Spectrum: highly effective against all yeasts and molds; does not affect bacteria. Dairy applications: cheese surface treatment (0.2-0.4 mg/dm²), cottage cheese, sour cream. NOT for use in fermented dairy products where yeast-based starter cultures are involved. FSSAI permitted: surface treatment of cheese only. EU: E235 — permitted only for surface treatment of hard/semi-hard cheeses."
                    },

                    other: {
                        title: "Other Chemical Preservatives and Modern Approaches",
                        items: [
                            "Sodium benzoate: Primarily antifungal, effective at pH <4.5 — mainly in fruit-flavoured dairy drinks; FSSAI allows up to 600 ppm in flavoured milk",
                            "Potassium sorbate: Sorbic acid (CH₃CH=CHCH=CHCOOH) — antifungal; more effective at pH 4.0-6.0; used in dairy spreads, cheese coatings; FSSAI permits 1000 ppm in some categories",
                            "Lysozyme: Natural enzyme from egg white; cleaves bacterial cell wall (peptidoglycan); used in hard cheese to prevent late blowing by Clostridium tyrobutyricum; E1105 in EU",
                            "Carbon Dioxide (CO₂): Dissolved CO₂ (Hyperbaric CO₂ treatment) inhibits many bacteria; used in some ESL milk applications; antimicrobial effect via carbonic acid formation",
                            "Bacteriophages: Viruses that infect bacteria; FDA-approved ListShield™ (against L. monocytogenes) for ready-to-eat foods; research stage for dairy applications",
                            "Essential Oils: Thymol (thyme), carvacrol (oregano), eugenol (clove) — potent antimicrobials; application limited by strong flavour contribution to dairy products"
                        ]
                    }
                },

                nonThermal: {
                    title: "Non-Thermal Preservation Technologies",
                    hpProcessing: {
                        title: "High Pressure Processing (HPP)",
                        p1: "HPP (or Pascalization): 400-600 MPa (4,000-6,000 atm) hydrostatic pressure applied for 3-10 minutes at low temperatures (5-20°C). Mechanism: disruption of non-covalent bonds (hydrogen bonds, hydrophobic interactions, electrostatic interactions) → enzyme inactivation, protein denaturation, cell membrane disruption → microbial death. Pressure is transmitted uniformly through the liquid (Pascal's principle) — no hot spots.",
                        advantages: [
                            "Equivalent pathogen reduction to pasteurization (5-log reduction) without heat",
                            "Preserves heat-labile nutrients (vitamin C, folate) and fresh milk taste",
                            "Inactivates most vegetative bacteria and viruses",
                            "Extends shelf life: HPP milk — up to 30-40 days under refrigeration",
                            "Approved as an alternative to 60-day aging rule for raw milk cheese (USA)"
                        ],
                        limitations: [
                            "Spores are resistant (Bacillus, Clostridium) — cannot achieve commercial sterility",
                            "High capital cost (HPP equipment: $500,000-$2.5 million)",
                            "Batch process — limited throughput",
                            "Some enzyme activity may persist (plasmin — age gelation in UHT)",
                            "Limited application in fluid milk (mainly used for juices, deli meats)"
                        ]
                    },

                    pulsedElectricField: {
                        title: "Pulsed Electric Field (PEF) Treatment",
                        p1: "PEF: milk is passed through high-intensity (20-80 kV/cm), short-duration (1-100 µs) electric field pulses. Mechanism: 'electroporation' — formation of transient or permanent pores in the cell membrane → leakage of intracellular components → cell death. Temperature rise is minimal (25-55°C during treatment). Effectiveness: 4-5 log reduction in vegetative bacteria; effectiveness increases when combined with mild heat (55-60°C).",
                        applications: "Milk treatment in continuous flow systems (10,000-100,000 L/hr possible), ESL milk production, fresh juices. Commercial applications are growing in Europe (Netherlands, Germany). Nutritional profile of PEF-treated milk: comparable to raw milk — heat-labile vitamins well-preserved. Spores are resistant — a limitation similar to HPP."
                    },

                    uvTreatment: {
                        title: "UV Light Treatment",
                        p1: "UV-C light (254 nm wavelength) — germicidal radiation that damages DNA/RNA (thymine dimer formation → replication impossible). Challenge for milk treatment: UV absorption by milk components (riboflavin, proteins, fat) limits penetration depth (a few mm). Solution: thin-film UV reactors (turbulent flow through UV-transparent tubes — swirl flow/Taylor-Couette reactors). Commercial systems: Salcor 3450 system, microGAPS (thin film annular UV reactors). Effectiveness in clear milk: 4+ log reduction; whole milk: 2-3 log reduction. Advantage: no chemical residues, minimal heat. Approved in some US states as an alternative to pasteurization for specific applications."
                    },

                    microfiltration: {
                        title: "Microfiltration (MF) — Cold Physical Separation",
                        p1: "MF (1.4 µm membranes — Bactocatch® Tetra Pak system): physical separation of bacteria by size exclusion. Process: cream and skim milk are first separated (via centrifugal separator), skim milk passes through the MF membrane (99.5% bacteria removal), the concentrate (bacteria-rich) is separately heat-treated (130°C/4 sec), then cream and treated skim milk are recombined. Result: ESL milk with 6+ log bacterial reduction, minimal heat treatment. Advantage: fresh milk taste preserved (no cooked flavour), nutritional profile near that of raw milk. Used extensively in Scandinavian countries (especially Sweden — Bactocatch system widely deployed)."
                    }
                },

                regulatory: {
                    title: "Regulatory Framework for Chemical Preservatives",
                    india: {
                        title: "India — FSSAI Regulations",
                        items: [
                            "Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011 — Schedule II and III",
                            "Schedule II: Prohibited substances — formalin, boric acid, salicylic acid, benzoic acid (in fluid milk), sodium carbonate/bicarbonate (as neutralizers), hydrogen peroxide (unless specifically permitted)",
                            "Schedule III: Permitted preservatives with maximum limits",
                            "Raw milk: NO preservatives permitted by law",
                            "Pasteurized milk: No added preservatives (except LP-system activation — under WHO/FAO/FSSAI guidelines consideration)",
                            "UHT milk: No preservatives needed/permitted (sterilization sufficient)",
                            "Cheese: Natamycin (surface only, 1 mg/dm²), Lysozyme (as per CODEX)",
                            "Dairy beverages/flavoured milk: Sodium benzoate (600 ppm), potassium sorbate (1000 ppm)"
                        ]
                    },
                    international: {
                        title: "International Regulatory Framework",
                        items: [
                            "Codex Alimentarius (CODEX STAN 192-1995, General Standard for Food Additives — GSFA): International reference standard",
                            "EU: Regulation (EC) 1333/2008 on food additives — strict list of permitted additives for dairy",
                            "USA FDA: 21 CFR Parts 130-135 (dairy standards), GRAS substances list",
                            "WHO/FAO Joint Expert Committee on Food Additives (JECFA): Establishes ADI (Acceptable Daily Intake)",
                            "Codex Committee on Food Additives (CCFA): International harmonization"
                        ]
                    },
                    adulteration: {
                        title: "Common Milk Adulterants and Detection Methods",
                        items: [
                            "Water addition: Lactometer (LR <28 at 27°C), cryoscopy (freezing point >-0.525°C), electrical conductivity",
                            "Skim milk/fat removal: Gerber/Rose-Gottlieb fat test (<3.0% fat in toned milk is suspect)",
                            "Urea (exogenous): Urease strip test, DMAB (para-dimethylaminobenzaldehyde) reaction",
                            "Detergent: Methylene blue stability test, bromocresol purple test",
                            "Starch: Iodine test (blue/black colour)",
                            "Formalin: Hestrin method, FeCl₃ test",
                            "Hydrogen peroxide: Vanadium pentoxide + H₂SO₄ test",
                            "Neutralizers (NaHCO₃, Na₂CO₃): Rosolic acid test (rose/crimson colour)",
                            "Glucose: Fehling's test, enzyme-based glucose strips",
                            "Synthetic milk (urea + oil + detergent + water): Microscopy, GC-MS analysis",
                            "Melamine (protein adulteration): HPLC, LC-MS/MS — detects false elevation of Kjeldahl nitrogen"
                        ]
                    }
                },

                comparison: {
                    title: "Comprehensive Comparative Analysis of Preservation Methods",
                    p1: "The choice of milk preservation method involves careful balancing of effectiveness, safety, cost, consumer acceptance, and impact on product characteristics — a multi-criteria decision process.",

                    methodsComparison: {
                        title: "Major Preservation Methods — Scientific Comparison",
                        refrigeration: {
                            title: "Refrigeration (2-4°C)",
                            principle: "Microbial growth rate reduction (Q10 factor = 2-3 per 10°C decrease)",
                            logReduction: "0-1 log (bacteriostatic, not bactericidal)",
                            shelfLife: "14-21 days (pasteurized milk)",
                            advantages: "Nutrition preserved, taste unaltered, widely accepted, simple technology",
                            disadvantages: "Requires continuous cold chain, high energy cost, infrastructure-intensive, no effect on heat-stable toxins",
                            cost: "Medium (operational) + High (capital for cold chain infrastructure)"
                        },
                        pasteurization: {
                            title: "HTST Pasteurization (72°C/15s)",
                            principle: "Thermal inactivation of vegetative pathogens (first-order kinetics)",
                            logReduction: "5-6 log reduction in pathogens",
                            shelfLife: "14-18 days (with refrigeration)",
                            advantages: "Gold standard for food safety, eliminates all pathogens, minimal nutritional change, taste close to fresh milk",
                            disadvantages: "Requires post-pasteurization refrigeration, does not inactivate spores, some heat-stable enzymes (plasmin, lipase) remain active",
                            cost: "Medium capital, Low operational"
                        },
                        uht: {
                            title: "UHT (135-155°C/2-8s)",
                            principle: "Commercial sterilization — destruction of all viable microorganisms",
                            logReduction: "12+ log reduction (theoretical — commercial sterility)",
                            shelfLife: "6-12 months (unopened, room temperature)",
                            advantages: "No refrigeration needed until opened, maximum microbial safety, ideal for distribution in areas lacking cold chain infrastructure",
                            disadvantages: "Cooked/sulphurous off-flavour, slight nutritional losses, age gelation problem (long storage), expensive aseptic packaging, enzymatic spoilage possible (heat-stable psychrotrophic lipases)",
                            cost: "High capital, Medium operational"
                        },
                        hpp: {
                            title: "High Pressure Processing (400-600 MPa)",
                            principle: "Non-thermal cell membrane disruption and enzyme inactivation",
                            logReduction: "5-6 log reduction in vegetative bacteria",
                            shelfLife: "30-40 days (refrigerated)",
                            advantages: "Fresh-like taste and nutrition, no chemical additives, novel application",
                            disadvantages: "Spores not inactivated, very high capital cost, batch process (low throughput), limited commercial dairy applications",
                            cost: "Very High capital, High operational"
                        },
                        chemicalPreservation: {
                            title: "Chemical Preservation (LP-System, Nisin)",
                            principle: "Enzyme inhibition, cell membrane disruption, reactive species generation",
                            logReduction: "2-4 log (typically bacteriostatic in LP-system)",
                            shelfLife: "Variable (hours to days extension only — not a standalone method)",
                            advantages: "LP-system: natural, cost-effective for rural areas with no cold chain, extends raw milk collection window by 6-8 hours; Nisin: effective in processed cheese",
                            disadvantages: "Not sufficient as a sole preservation method, regulatory restrictions (varies by country), potential consumer concerns, may affect sensory properties at high concentrations",
                            cost: "Low (LP-system), Medium (nisin, natamycin)"
                        }
                    },

                    p2: "Modern dairy preservation often involves a combination of methods — an approach known as 'hurdle technology.' HTST pasteurization + refrigeration + aseptic packaging = multiple overlapping protection systems. UHT + aseptic packaging = ultimate 'double hurdle' for ambient stability. ESL milk = MF + mild heat treatment + refrigeration = an optimized compromise. Future trends: HPP + mild heat (thermodynamic synergy), PEF + refrigeration, natural antimicrobials (nisin + lysozyme + lactoferrin) + refrigeration — all representing multi-hurdle approaches achieving safety without compromising quality."
                }
            },

            qualityTesting: {
                title: "VI. Advanced Quality Testing — Laboratory Methods",
                p1: "Comprehensive quality testing is the backbone of the dairy industry, ensuring product safety, consistency, and regulatory compliance. Modern testing protocols combine rapid screening tests with confirmatory laboratory methods.",

                microbiologicalTests: {
                    title: "Microbiological Testing Methods",
                    standardPlateCount: {
                        title: "Standard Plate Count (SPC) / Total Plate Count (TPC)",
                        p1: "Method: Milk serial dilutions (10⁻¹ to 10⁻⁶) are plated on Plate Count Agar (PCA), incubated at 32°C for 48 ±2 hours. Count: Plates containing 25-250 colonies are counted (AOAC method). Result expression: CFU/mL (Colony Forming Units per milliliter). Acceptable limits: Raw milk Grade A <100,000 CFU/mL (BIS), Pasteurized milk <30,000 CFU/mL (pre-distribution), <100,000 CFU/mL (at consumer level — FSSAI). Advanced variation: Spiral Plate Method (faster, automated) — SPirALL® instrument.",
                        rapidMethods: "Rapid alternatives: BACTOSCAN™ FC (flow cytometry — counts individual cells with fluorescent dye, 8 min results), BactoSomatic (simultaneous somatic + bacteria count), IDF Standard 161C:2009."
                    },
                    coliformTest: {
                        title: "Coliform Count — Hygiene Indicator",
                        p1: "Coliforms (E. coli, Klebsiella, Enterobacter) are indicator organisms for fecal contamination. Method: Most Probable Number (MPN) — Lauryl Sulfate Tryptose (LST) broth tubes, 35°C/48h; or Violet Red Bile Agar (VRBA) pour plates, 35°C/24h. FSSAI limits: Pasteurized milk — Nil (coliforms absent in 1 mL), or <1 MPN/mL. Significance: Coliform presence indicates post-pasteurization contamination or pasteurization failure — a critical food safety signal."
                    },
                    specificPathogen: {
                        title: "Specific Pathogen Testing",
                        items: [
                            "Listeria monocytogenes: ISO 11290-1:2017 method — FDA BAM Method — enrichment + selective plating (PALCAM, ALOA agar) + PCR confirmation; 25 g/mL — zero tolerance in ready-to-eat dairy",
                            "Salmonella spp.: ISO 6579-1:2017 — pre-enrichment (BPW), selective enrichment (RVS, MKTTn), selective plating (XLD, BGA), biochemical + serological confirmation; Zero tolerance in 25 mL",
                            "Staphylococcus aureus and Enterotoxins: ISO 6888-1, Baird Parker Agar, coagulase test; Enterotoxin ELISA (RIDASCREEN SET™) — heat-stable toxins are important in pasteurized milk",
                            "E. coli O157:H7: Immunomagnetic separation (IMS) + CT-SMAC plating + O157 latex agglutination + PCR for eae/stx genes",
                            "Mycobacterium tuberculosis: MGIT960 liquid culture system (6 weeks) or PCR-based methods (IS6110 gene target)"
                        ]
                    },
                    rapidMicrobial: {
                        title: "Rapid Microbiological Methods",
                        items: [
                            "Real-time PCR (qPCR): Species-specific gene targets amplified for results in 2-4 hours — GeneXpert, bioMérieux GENE-UP systems",
                            "MALDI-TOF MS (Matrix-Assisted Laser Desorption/Ionization — Time of Flight Mass Spectrometry): Species identification by bacterial protein fingerprinting within minutes (Bruker MALDI Biotyper, bioMérieux VITEK MS)",
                            "Flow Cytometry (BactoScan): Individual cells counted using laser after fluorescent staining — 8-10 min total process",
                            "Impedance/Conductance Microbiology (Bactometer™): Detects ionic changes in media from bacterial metabolism",
                            "Adenosine Triphosphate (ATP) Bioluminescence: Environmental/equipment hygiene testing — RLU measurement, results in seconds"
                        ]
                    }
                },

                chemicalTests: {
                    title: "Chemical and Compositional Analysis",
                    compositional: {
                        title: "Compositional Analysis",
                        items: [
                            "Fat determination: Gerber Method (ISO 2446) — sulfuric acid + isoamyl alcohol, centrifugation, butyrate reading; Rose-Gottlieb method (AOAC 905.02 — more accurate, reference method); IR spectroscopy (MilkoScan™ FT+ — simultaneous fat, protein, lactose, total solids in 60 seconds)",
                            "Protein: Kjeldahl method (ISO 8968-1) — nitrogen determination × 6.38 conversion factor; Dumas combustion method (faster, automated); Near-Infrared (NIR) spectroscopy (rapid, non-destructive)",
                            "Lactose: Enzymatic method (lactase → glucose + galactose → glucose oxidase reaction → colorimetric), Polarimetry, HPLC (gold standard for lactose-free milk verification)",
                            "Total Solids: Oven drying method (ISO 6731) — 102°C until constant weight; Microwave drying (faster); Infrared moisture analyzers",
                            "Ash/Minerals: Muffle furnace ashing at 550°C, ICP-OES/MS for individual minerals (Ca, P, Fe, Zn, Se)"
                        ]
                    },
                    freezingPoint: {
                        title: "Freezing Point Depression (Cryoscopy)",
                        p1: "Cryoscopy freezing point measurement is the most reliable method for detecting water addition. Principle: colligative property — dissolved solutes depress the freezing point of milk. Normal bovine milk freezing point: -0.530°C to -0.560°C (average -0.540°C). Water addition raises the freezing point above -0.530°C. 1% water addition = approximately +0.005°C shift. Method: Thermistor cryoscope (IDF Standard 108:2002) — 99.5% accuracy. Advanced electronic systems: Funke-Gerber Cryostar-i™. Important note: mastitis milk may show a slightly elevated freezing point even without water addition due to reduced lactose (dilution effect from blood plasma)."
                    },
                    antibioticResidue: {
                        title: "Antibiotic Residue Testing",
                        p1: "Antibiotic residues in milk are a major public health concern — they contribute to antibiotic resistance development, allergic reactions (especially from beta-lactams), and disruption of starter cultures in fermented dairy products. Major antibiotic classes in Indian dairy: Beta-lactams (penicillin, ampicillin, amoxicillin, cloxacillin — used for mastitis treatment), Tetracyclines (oxytetracycline, chlortetracycline), Sulfonamides, Aminoglycosides (streptomycin, neomycin).",
                        methods: [
                            "Rapid screening: Lateral flow immunoassay strips (Charm ROSA, Idexx SNAP — 3-8 min, qualitative); Delvotest™ SP-NT (microbial inhibition test — 3 hours, broad spectrum); Copan BioRacer (automated strip reader)",
                            "Confirmatory: LC-MS/MS (Liquid Chromatography tandem Mass Spectrometry) — gold standard, quantitative, simultaneous multi-residue detection, ppb sensitivity",
                            "ELISA (Enzyme-Linked Immunosorbent Assay): Semi-quantitative, class-specific antibodies",
                            "FSSAI MRL (Maximum Residue Limits): Penicillin G — 4 µg/kg, Amoxicillin — 4 µg/kg, Tetracycline — 100 µg/kg, Oxytetracycline — 100 µg/kg (as per Schedule 5, FSSR 2011)"
                        ]
                    },
                    somaticCells: {
                        title: "Somatic Cell Count (SCC) — Mastitis Indicator",
                        p1: "SCC = number of somatic cells (predominantly leukocytes/white blood cells) per mL of milk. High SCC indicates mastitis (udder infection). Scientific basis: infection → immune response → influx of neutrophils into milk → elevated SCC. Normal healthy cow: <100,000 cells/mL. Sub-clinical mastitis: 200,000-500,000 cells/mL. Clinical mastitis: >500,000 cells/mL.",
                        methods: [
                            "Direct Microscopic Somatic Cell Count (DMSCC): Newman-Lampert stain, microscope counting — reference method",
                            "Electronic cell counting: Fossomatic™ (flow cytometry + fluorescent dye Ethidium Bromide) — automated, high throughput, IDF standard method",
                            "California Mastitis Test (CMT): Field test — detergent + milk, DNA viscosity gel formation indicates SCC level",
                            "Porta-SCC™: Portable electronic counter for farm use"
                        ],
                        economicImpact: "Economic impact of high SCC milk: reduced cheese yield (casein breakdown by plasmin at high SCC), reduced butter quality, shorter shelf life, reduced lactose content, reduced milk protein content. Estimated loss due to mastitis in India: ₹7,000-9,000 crore annually."
                    }
                },

                sensorTechnology: {
                    title: "Advanced Sensor Technologies and Industry 4.0",
                    p1: "Digital transformation in dairy quality testing is occurring at a rapid pace. Inline and online sensors are enabling real-time monitoring, replacing traditional offline laboratory testing for various parameters.",
                    technologies: [
                        "Mid-Infrared (MIR) Spectroscopy (MilkoScan™ FT+, Bentley FTS): Simultaneously measures 60+ parameters (fat, protein, lactose, SCC, urea, fatty acid profile, freezing point prediction) within 60 seconds — standard for lab milk analyzers",
                        "Near-Infrared (NIR) Spectroscopy: Inline probes — real-time measurement in milk streams without sampling, integrated with factory automation",
                        "Raman Spectroscopy: Milk composition and adulteration detection — non-destructive, no sample preparation; can detect water, melamine, starch, urea",
                        "Electronic Nose (e-Nose): Sensor array detecting volatile organic compounds (VOCs) — early spoilage warning (acetic acid, butyric acid, acetaldehyde), real-time milk freshness assessment",
                        "Biosensors: Electrochemical biosensors detecting antibiotics, hormones (rBST), pathogens, mycotoxins with high sensitivity (femtomolar detection possible), point-of-care applications",
                        "Hyperspectral Imaging: For detecting quality defects, fat distribution, adulteration — mainly for solid dairy products (cheese, butter)"
                    ]
                }
            },

            processingMethods: {
                title: "VII. Milk Processing Technologies",
                p1: "Converting raw milk into processed dairy products involves multiple carefully controlled unit operations. Each processing step has a significant impact on product safety, nutrition, taste, and shelf life.",

                homogenization: {
                    title: "Homogenization",
                    p1: "Homogenization mechanically reduces the size of fat globules in milk — from an average diameter of 3-5 µm to 0.2-1.0 µm (typically done before HTST processing). Milk is forced through narrow valve gaps at high pressure (150-200 bar) — cavitation, turbulence, and shear forces break apart fat globules. Result: no cream layer formation, uniform fat distribution, improved digestibility (smaller fat globules are easier to digest), whiter appearance, improved flavour stability.",
                    scientificDetails: "Two-stage homogenization: Stage 1 (150-170 bar) — fat globule size reduction; Stage 2 (30-50 bar) — fat globule cluster disruption. New fat globule membranes form from milk proteins (casein micelle fragments + whey proteins) → more stable. Homogenized milk fat is more susceptible to lipolysis (lipase activity) because the new membrane is weaker than the native MFGM (Milk Fat Globule Membrane).",
                    types: [
                        "Upstream homogenization: Raw milk homogenized first, then pasteurized — slightly reduces microbial load (physical disruption)",
                        "Downstream homogenization: After pasteurization (most common) — better microbial safety",
                        "Partial homogenization: Only the cream portion is homogenized (energy efficient)",
                        "Micro-homogenization (Microfluidization): Very high pressure (500-1000 bar) — submicron fat globules, different texture/mouthfeel"
                    ]
                },

                standardization: {
                    title: "Standardization and Fortification",
                    p1: "Standardization: Adjusting fat and SNF (Solids-Not-Fat) content to required levels — through cream addition or removal using a centrifugal separator. FSSAI requirements: Toned Milk — 3.0% fat, 8.5% SNF; Double Toned Milk — 1.5% fat, 9.0% SNF; Standardized Milk — 4.5% fat, 8.5% SNF; Full Cream Milk — ≥6.0% fat, 9.0% SNF; Cow Milk — 3.5% fat, 8.5% SNF.",
                    fortification: {
                        title: "Milk Fortification",
                        p1: "Nutritional fortification is a public health initiative in India — under FSSAI and NDDB's 'POSHAN' program. Mandatory fortification of packaged milk: Vitamin A (770 IU/250 mL) and Vitamin D (400 IU/250 mL). Optional: Vitamin B12, Folic acid, Iron, Zinc.",
                        challenges: "Technical challenges: Vitamin A (fat-soluble — requires oil premix, pro-vitamin A — β-carotene as alternative), Vitamin D stability issues (UV light degradation — requires opaque packaging), Iron fortification affects colour and taste, overcoming bioavailability challenges, ensuring homogeneous distribution."
                    }
                },

                separation: {
                    title: "Cream Separation and Centrifugation",
                    p1: "Cream separators: disc-stack centrifuges operating at 6,000-10,000 RPM. Stokes' Law governs separation: velocity = 2r²(ρ_milk - ρ_fat)g/9η, where r = fat globule radius, ρ = density, g = gravitational force, η = viscosity. Separation is most efficient at 40-55°C (lower viscosity). Bactofugation: high-speed centrifugation (15,000-20,000 RPM) — removes 90-95% of bacteria and spores (heavier than milk serum) — an alternative or supplement to pasteurization."
                }
            },

            packagingLabeling: {
                title: "VIII. Dairy Packaging and Labeling",
                p1: "Packaging directly determines the shelf life, safety, and consumer appeal of dairy products. The concept that 'the package is the silent salesman' is particularly relevant in the dairy industry.",

                packagingMaterials: {
                    title: "Packaging Materials — Science and Selection",
                    plasticBottles: {
                        title: "HDPE (High-Density Polyethylene) Bottles",
                        p1: "Most common for pasteurized milk in India. Properties: good moisture barrier, chemical resistance, food-safe, recyclable (#2 HDPE). Limitation: poor oxygen barrier (O₂ transmission rate 500-600 cc·mm/m²·day·atm) — photooxidation possible. Opaque HDPE (white, contains TiO₂) blocks light — prevents vitamin destruction. Hermetic seal — tamper-evident. Shelf life: 14-18 days at 4°C."
                    },
                    multilayerCartons: {
                        title: "Multilayer Paperboard Cartons (Tetra Pak, SIG)",
                        p1: "Standard for ESL and UHT milk. Structure (6 layers): Polyethylene (outer, moisture protection) / Paperboard (structural strength) / Polyethylene (adhesion) / Aluminum foil (oxygen + light barrier, O₂ TR ≈ 0 cc/day) / Polyethylene / Polyethylene (inner, food contact). Aseptic filling: H₂O₂ sterilization + UV + aseptic environment. Advantage: excellent shelf life, lightweight, recyclable (paper + Al + PE separation required). Tetra Pak is dominant in India (60%+ market share in UHT segment)."
                    },
                    glassbottles: {
                        title: "Glass Bottles — Traditional and Premium",
                        p1: "Superior barrier properties (zero gas transmission), chemically inert, no plastic taste migration, infinitely recyclable, premium perception. Disadvantages: heavy (10x heavier than equivalent plastic), fragile, high transport cost, high production energy. Return/refill systems are economically viable in some contexts. Increasingly popular in the premium dairy segment (craft dairies, organic milk)."
                    },
                    flexiblePackaging: {
                        title: "Flexible Packaging — Pouches",
                        p1: "Polyethylene pouches: Cheapest packaging (lowest per-unit cost), widely used in India for pasteurized milk in loose retail. Multi-layer: PE/PA/PE or EVOH-based (better oxygen barrier). Disadvantage: inferior oxygen barrier compared to rigid containers, shorter shelf life for sensitive products. Pre-formed pouches (form-fill-seal machines — FFS): Automated, hygienic, cost-effective for high volumes."
                    },
                    activeIntelligentPackaging: {
                        title: "Active and Intelligent Packaging — Future Technologies",
                        items: [
                            "Active packaging: Oxygen scavengers (iron-based sachets — FeO oxidation absorbs O₂), CO₂ emitters (enhance freshness), antimicrobial packaging (silver nanoparticles, essential oil vapors, nisin-coated films incorporated into packaging)",
                            "Intelligent packaging: Time-Temperature Indicators (TTIs — change color based on temperature history, e.g., 3M Monitormark™), Freshness indicators (pH-sensitive dyes detecting spoilage acids, colorimetric CO₂ indicators), RFID tags (inventory tracking, anti-counterfeiting)",
                            "Biodegradable/Biobased packaging: PLA (Polylactic Acid) from corn starch, PHA (Polyhydroxyalkanoates), seaweed-based films — driven by sustainability push",
                            "Smart Labels: QR codes linking to supply chain information, allergen information, recipe suggestions"
                        ]
                    }
                },

                labelingRequirements: {
                    title: "Regulatory Labeling Requirements",
                    fssai: {
                        title: "FSSAI Labeling Requirements (FSS Act 2006 + FSS Labeling & Display Regulations 2020)",
                        mandatory: [
                            "Product name (e.g., 'Pasteurized Toned Milk', 'UHT Full Cream Milk')",
                            "Net quantity (volume in mL or L)",
                            "Best Before / Use By date (format DD/MM/YYYY or DD-MM-YYYY)",
                            "Storage conditions ('Keep refrigerated below 4°C')",
                            "FSSAI license number (14-digit)",
                            "Manufacturer/packer name and complete address",
                            "Country of origin",
                            "Ingredients list (if anything added — vitamin premix, stabilizers)",
                            "Nutritional information (per 100 mL serving): Energy (kcal), Protein, Total Fat, Carbohydrates, Sugars, Sodium",
                            "Vegetarian/Non-vegetarian symbol (green dot = veg for fortified milk)",
                            "Batch/Lot number (for traceability)",
                            "Customer care/helpline number"
                        ],
                        fortificationLabel: "If fortified: '+F' symbol (FSSAI fortification logo) — blue logo with grain symbol mandatory on packaging of fortified milk"
                    }
                }
            },

            wastageManagement: {
                title: "IX. Milk Wastage Management and Sustainability",
                p1: "Global food wastage is a critical sustainability issue — FAO estimates that approximately 1.3 billion tonnes of food is wasted annually. In the dairy sector, milk losses occur throughout the entire value chain from farm to consumer. Estimated post-harvest milk losses in India: 6-8% (approximately 10-13 million tonnes annually — WHO-FAO data).",

                lossPoints: {
                    title: "Milk Loss — Points and Causes",
                    items: [
                        "Farm level (30-40% of total losses): Mastitis-affected milk discard, antibiotic withdrawal period discard, colostrum wastage, spillage during milking/handling, poor hygiene leading to early rejection",
                        "Collection/transport (15-20%): Temperature abuse during transport, long transit times (>6 hours without adequate cooling), road quality issues causing mechanical damage, tanker cleaning failures leading to entire tanker rejection",
                        "Reception/Processing (10-15%): Quality rejection at platform testing, processing equipment failures, CIP chemical overdose contamination, power failures (cold chain break), over-run in processing (excess product with no packaging available)",
                        "Storage/Distribution (20-25%): Cold chain failures (power cuts, refrigerator failures), product returns from retailers (nearing expiry), damaged packaging, over-ordering",
                        "Consumer level (15-20%): Over-purchasing, improper storage at home, partial use of containers"
                    ]
                },

                reductionStrategies: {
                    title: "Milk Loss Reduction Strategies",
                    technical: [
                        "Real-time milk quality monitoring and predictive analytics (AI-based spoilage prediction)",
                        "Dynamic routing and scheduling (shorter farm-to-plant times)",
                        "Cold chain optimization (solar-powered BMCs in remote areas, PCM-Phase Change Material cooling for transport without electricity)",
                        "Rapid platform testing (reduce rejection rates through better farm education)",
                        "Diversification into value-added products (near-expiry milk → khoa, cheese, milk powder) — reduces loss by converting to longer-shelf-life products",
                        "Adoption of Modified Atmosphere Packaging (MAP) and active packaging",
                        "AI-powered demand forecasting tools (reduce over-production)"
                    ],
                    byproducts: {
                        title: "Milk Byproduct Utilization — Circular Economy",
                        items: [
                            "Whey (byproduct of cheese/paneer making): WPC (Whey Protein Concentrate — 35-80% protein), WPI (Whey Protein Isolate — >90% protein), WPH (hydrolyzed whey — infant formula), Whey permeate (lactose — pharma grade, food ingredient), Whey butter, Lactose (pharmaceutical excipient, food ingredient)",
                            "Buttermilk (byproduct of butter making): Fermented beverages (chaas), food ingredient (bakery, confectionery), animal feed",
                            "Cream (standardization byproduct): Butter, ghee, cream products, ice cream",
                            "Rejected milk (low acidity, minor quality issues): Biogas production (anaerobic digestion — 1L milk ≈ 0.5 m³ biogas), composting (after heat treatment), approved animal feed",
                            "Skim milk permeate (from UF/MF): Lactose recovery, fermentation substrate (ethanol, lactic acid, vitamin production)"
                        ]
                    }
                },

                environmentalImpact: {
                    title: "Environmental Footprint of the Dairy Industry",
                    items: [
                        "Carbon footprint: Global dairy contributes ~4% of total greenhouse gas (GHG) emissions. 1 liter milk production: 1.0-3.5 kg CO₂ equivalent (range depends on production system, feed, geography)",
                        "Water footprint: 1 liter milk production requires approximately 1,000 liters of water (virtual water — including feed crop irrigation)",
                        "Wastewater: Dairy plants generate 1-3 liters of wastewater per liter of milk processed (high BOD — 1,000-5,000 mg/L, COD 2,000-10,000 mg/L). Treatment: UASB reactors, activated sludge, constructed wetlands",
                        "Energy consumption: Pasteurization + refrigeration: 0.3-0.5 kWh/liter; UHT processing: 0.4-0.7 kWh/liter. Renewable energy integration: solar thermal (milk pre-heating), solar PV (cooling systems), biogas from wastewater",
                        "Packaging waste: Single-use plastic reduction — India's plastic waste management rules impact dairy industry; Extended Producer Responsibility (EPR) mandatory for dairy companies"
                    ]
                }
            },

            conclusions: {
                title: "X. Conclusions and Future Outlook",
                p1: "The comprehensive management of milk from reception to preservation is paramount for ensuring both product safety and economic viability within the dairy industry. Scientific advancements — from molecular biology-based rapid testing methods to IoT-enabled cold chain monitoring and non-thermal preservation technologies — are continuously transforming this field.",

                p2: "Effective milk management begins with rigorous hygiene and rapid cooling at the farm — which directly impacts the quality of milk arriving at the processing plant. The 'Farm to Fork' approach requires every link in this chain to function optimally. The weak link theory applies — failure at any point can compromise quality.",

                p3: "Milk transportation is a specialized operation that relies on advanced tanker design, IoT-based monitoring, blockchain traceability, and smart logistics. Cold chain integrity — as a seamless, interconnected temperature management system — is a fundamentally different approach from a series of isolated cooling events.",

                p4: "Storage techniques, whether in large raw milk silos or aseptic packaging for UHT milk, are continuously evolving — innovations such as Phase Change Materials (PCMs), active packaging, and vacuum insulated panels extend shelf life while reducing environmental impact.",

                p5: "Quality testing infrastructure is evolving in real time — from traditional 48-hour plate counts to 8-minute BACTOSCAN flow cytometry, and within the next 5 years, inline NIR/Raman sensors directly integrated into processing lines. Artificial intelligence and machine learning are playing a transformative role in quality prediction, process optimization, and waste reduction.",

                p6: "The future of preservation science is being shaped by the 'clean label' movement — consumers are shifting away from chemical preservatives toward natural alternatives. Hurdle technology combinations, biological preservation (bacteriocins, bacteriophages), and advanced physical methods (HPP, PEF, UV) present a future where safety and quality are achieved with minimal intervention.",

                keyTakeaways: {
                    title: "Key Scientific Takeaways",
                    items: [
                        "Temperature is the most critical single factor in milk quality preservation — every 6°C temperature increase doubles the spoilage rate (Q10 ≈ 2)",
                        "Milk quality cannot be improved — only maintained. Sub-standard input = sub-standard output. Prevention (farm hygiene, rapid cooling) is far more effective than correction (which is impossible in most cases)",
                        "Pasteurization (72°C/15s) achieves 5-6 log pathogen reduction — sufficient for public health protection with proper refrigeration",
                        "UHT (135-155°C/2-8s) + aseptic packaging = commercial sterility — revolutionary for areas without cold chain infrastructure",
                        "Hurdle technology (multiple simultaneous barriers) is the future of dairy preservation — effective, clean-label, minimal processing",
                        "Digitalization (IoT, AI, blockchain) is transforming dairy from a traditional practice to a data-driven science — enabling real-time quality management from farm to consumer"
                    ]
                },

                futureTrends: {
                    title: "Future Trends in Milk Handling and Preservation",
                    items: [
                        "Precision Fermentation and Cell-Cultured Dairy: Lab-grown dairy proteins (Perfect Day — whey proteins via fermentation) and cell-cultured milk — potential disruption to traditional dairy",
                        "AI-powered Quality Management: Predictive spoilage models, automated quality sorting, computer vision-based defect detection",
                        "Blockchain-based Complete Traceability: Real-time farm-to-consumer tracking — immutable quality records, rapid targeted recalls",
                        "Carbon-neutral Dairy Processing: Net-zero targets by 2050 — renewable energy integration, carbon capture, circular economy principles",
                        "Personalized Nutrition: A2 milk, lactose-free, fortified milk targeted at specific health conditions — growing market segment",
                        "Novel Preservation Technologies: Cold plasma treatment, ultrasonication, dense phase CO₂ — research-to-commercial transition expected in the next 5-10 years",
                        "Smart Packaging: Time-temperature indicators becoming standard, freshness sensors embedded in packaging, augmented reality labels for consumer information"
                    ]
                }
            }
        };
