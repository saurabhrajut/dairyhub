export const cipProcessContent = {
    hi: {
        main_title: "Dairy Instruments ki Dhulai aur Safai",
        main_description: "Alag-alag dairy instruments ko saaf aur sanitize karne ke liye ek detailed scientific guide, jisme CIP/COP principles, chemical reactions, microbiology, aur quality control shamil hain.",

        intro: {
            title: "Introduction: CIP aur Milk Stone",
            htmlContent: `
                <p>Dairy instruments aur containers ki surface par bacha hua doodh microbial growth ke liye ek excellent medium pradan karta hai. Doodh mein proteins (casein, whey proteins), fats, lactose, minerals aur vitamins hote hain — yeh sab milkar ek near-perfect nutrient broth banate hain jo bacteria ke liye ideal growth conditions pradan karta hai. Isliye, dairy instruments ko theek se saaf aur sanitize karna zaroori hai. Cleaning aur sanitization complementary processes hain aur akele koi bhi final result prapt nahi karta hai.</p>
                
                <h4 class="font-bold mt-4">Cleaning vs. Sanitization — Fark Kya Hai?</h4>
                <p><strong>Cleaning (Safai):</strong> Iska matlab hai doodh ke residue (Soil) ko physically aur chemically hatana aur surface ko is mitti se free karna. Cleaned surface par microscopy se bhi koi visible soil nahi hoti, lekin microorganisms ho sakte hain.</p>
                <p><strong>Sanitization (Keenu-shudi):</strong> Yeh cleaning ke baad kiya jaata hai aur iska kaam hai remaining microorganism ki population ko safe level par le jaana (usually 99.9% reduction). Note karein ki sanitization tabhi effective hoti hai jab surface pehle se clean ho.</p>
                <p><strong>Sterilization:</strong> Yeh sabse extreme step hai jismein 100% microorganisms aur unke spores ko maara jaata hai. Dairy mein iska use sirf UHT plants aur aseptic filling mein hota hai.</p>

                <h4 class="font-bold mt-4">CIP/CAC Kya Hai?</h4>
                <p><strong>CIP (Cleaning-In-Place):</strong> Yeh ek automated method hai jismein pipelines, tanks, aur doosre instruments ko bina khole (disassemble) saaf kiya jaata hai. Ismein cleaning aur sanitizing solution ko ek certain sequence mein pipes aur instruments ke through pump kiya jaata hai. High velocity flow mechanical scrubbing effect paida karta hai jo deposits ko hatata hai. CIP ka concept 1950s mein dairy industry mein develop hua tha aur aaj yeh modern dairy processing ka backbone hai.</p>
                <p><strong>CAC / COP (Cleaning-Out-of-Place):</strong> Is method mein, chhote parts ya instruments ko alag kiya jaata hai aur unhein cleaning ke liye ek dedicated area mein le jaaya jaata hai, jahan unhein tanks mein dubokar ya manually saaf kiya jaata hai. Example: centrifuge bowls, pump impellers, gaskets.</p>

                <h4 class="font-bold mt-4">CIP System ke Types</h4>
                <p><strong>Single Pass (Singe-Use) Systems:</strong> Har cleaning cycle ke liye naya cleaning solution introduce kiya jaata hai aur phir drain mein dispose kar diya jaata hai. Yeh zyada tar mamlon mein ek pre-rinse se shuru hoga taaki jitna possible ho utna soil hataya ja sake, iske baad detergent cleaning aur final rinse hoga. Yeh simpler aur cheaper initial investment hai lekin zyada paani aur chemical consume karta hai.</p>
                <p><strong>Recirculation Systems:</strong> Cleaning solution ko external tanks mein milaya jaata hai aur saaf kiye jaane wale plant mein introduce kiya jaata hai. Unhein phir se recirculate kiya jaata hai aur zaroorat ke anusaar top-up kiya jaata hai jab tak ki cleaning cycle poora na ho jaaye. Detergent rinse ke baad final rinse karna normal hai. Recirculation systems ko zyada initial investment ki zaroorat hoti hai, lekin kam paani aur cleaning detergent ka use karte hain. Yeh environmentally aur economically better hai.</p>
                <p><strong>Multi-Use Recirculation Systems:</strong> Ek advanced version jismein ek hi CIP station se multiple circuits (tanks, lines, HEs) ko sequence mein clean kiya jaata hai. Modern large dairies mein yahi use hota hai.</p>

                <h4 class="font-bold mt-4">Milk Stone (Dairy Scale):</h4>
                <p>Yeh garam paani aur detergent solutions se sookhe doodh ke solids aur salts ka accumulation hai. Milk stone ek stubborn deposit hai jo surface par firmly adhered hota hai aur ordinary cleaning se nahi hatता.</p>
                <p><strong>Formation Mechanism:</strong> Jab milk ko garam kiya jaata hai (pasteurization, evaporation), toh calcium phosphate (Ca₃(PO₄)₂) ki solubility decrease hoti hai aur yeh precipitate hone lagta hai. Saath hi, whey proteins (especially β-lactoglobulin) heat se denature ho jaate hain aur surface par adsorb ho jaate hain. Yeh denatured proteins calcium phosphate ke saath complex banaate hain, jisse ek tightly-bound layer banti hai.</p>
                <p><strong>Composition:</strong> Ismein 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% protein aur 42-67% ash (mainly calcium phosphate, calcium carbonate, magnesium salts) hoti hai.</p>
                <p><strong>Why it Matters:</strong> Milk stone na sirf cleaning ko mushkil banaata hai, balki yeh microbial harbourage bhi create karta hai. Bacteria aur biofilm is porous layer mein chhup jaate hain aur sanitizer se bachte hain, jisse product contamination ka risk badh jaata hai.</p>

                <h4 class="font-bold mt-4">Biofilm: Ek Chhupi Hui Khatara</h4>
                <p>Biofilm ek structured community of microorganisms hai jo surface se attached hoti hai aur self-produced extracellular polymeric substances (EPS) matrix mein embedded hoti hai. Dairy equipment mein <em>Bacillus cereus, Listeria monocytogenes, Pseudomonas, Staphylococcus</em> jaise organisms biofilm banaate hain.</p>
                <p>Biofilm regular planktonic (free-floating) bacteria se 1000x zyada sanitizer-resistant hoti hai. Isliye proper mechanical action aur chemical cleaning biofilm hatane ke liye zaroon hai. CIP systems ka design isi liye itna critical hai — inadequate flow velocity ya chemical concentration biofilm ko intact rakh sakti hai.</p>
            `
        },

        cip_cycle: {
            title: "Standard CIP Cleaning Cycle — Har Step ki Deep Science",
            intro: "Ek typical CIP cycle mein neeche diye gaye steps hote hain. Har step ek specific scientific purpose serve karta hai. Sequence change karne se cleaning effectiveness drastically reduce ho jaati hai:",
            steps: [
                {
                    title: "1. Pre-Rinse (Prarambhik Dhulan) — 'Soil Load Reduction'",
                    colorClass: "bg-blue-100 border-blue-300",
                    details: `<p><strong>Uddeshya:</strong> Adhikांsh dheeli gandagi aur doodh ke avshesho ko hatana taaki chemical cost aur effectiveness optimize ho.</p>
                    <p><strong>Prakriya:</strong> Lukewarm water (35-50°C) se 5-15 minute ke liye flow kiya jaata hai. Flow velocity ≥1.5 m/s honi chahiye.</p>
                    <p><strong>Science (Temperature ka Critical Role):</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li><strong>Agar bahut thanda paani (&lt;30°C):</strong> Milk fat solidify ho jaati hai (cream solidification) aur surface par stick ho jaati hai, hatana mushkil ho jaata hai.</li>
                      <li><strong>Agar bahut garam paani (&gt;60°C):</strong> Whey proteins (β-lactoglobulin, α-lactalbumin) irreversibly denature ho jaate hain aur stainless steel surface par covalently bind ho jaate hain. Yeh buri tarah stuck ho jaate hain aur baad mein zyada acid/alkali chahiye.</li>
                      <li><strong>Ideal 35-50°C:</strong> Is temperature range mein fat liquid state mein rehta hai (easily rinseable), aur proteins abhi denature nahi hue hain. Zyada se zyada bulk soil is step mein hi nikal jaata hai — typically 90% se zyada.</li>
                    </ul>
                    <p><strong>Economy Principle:</strong> Jitna zyada soil pre-rinse mein hatega, utni kam chemicals ki zaroorat alkali/acid wash mein hogi. Ek gallon milk residue ko neutralize karne ke liye kaafi zyada NaOH ki zaroorat hoti hai — isliye is step ko skip karna expensive mistake hai.</p>`
                },
                {
                    title: "2. Alkali Wash (Kshaariya Dhulan) — 'Fat & Protein Digestion'",
                    colorClass: "bg-orange-100 border-orange-300",
                    details: `<p><strong>Uddeshya:</strong> Fat aur protein-based deposits ko chemically digest karke surface se remove karna.</p>
                    <p><strong>Prakriya:</strong> 0.5-2.0% caustic soda (NaOH) solution ko 70-85°C par 15-30 minute ke liye circulate kiya jaata hai. Flow velocity ≥1.5 m/s, preferably turbulent flow (Re >31,000).</p>
                    <p><strong>Science — Teen Major Chemical Reactions:</strong></p>
                    <p><strong>1. Saponification (Fat Removal):</strong><br/>
                    Triglycerides (fats) NaOH ke saath react karke glycerol aur fatty acid salts (soaps) banaate hain:<br/>
                    <code>Fat (Triglyceride) + 3 NaOH → Glycerol + 3 Sodium Fatty Acid Salts (Soap)</code><br/>
                    Yeh soaps paani mein ghulnsheel hain aur easily rinse ho jaate hain. Garm temperature is reaction ki rate ko dramatically increase karta hai (Arrhenius Equation ke anusaar, har 10°C temperature increase se reaction rate approximately 2x badhti hai).</p>
                    <p><strong>2. Protein Hydrolysis:</strong><br/>
                    NaOH proteins ke peptide bonds ko cleave karta hai, unhe smaller soluble peptides aur amino acids mein convert karta hai:<br/>
                    <code>Protein (large) + NaOH + H₂O → Smaller Peptides + Amino Acids</code><br/>
                    Yeh process saponification se slower hoti hai, isliye sufficient contact time (15-30 min) zaruri hai.</p>
                    <p><strong>3. Emulsification:</strong><br/>
                    Alkali fat ke saath soap banata hai jo natural surfactant ki tarah kaam karta hai, remaining fat particles ko emulsify karke solution mein suspend karta hai.</p>
                    <p><strong>Turbulent Flow ka Role (Reynolds Number):</strong><br/>
                    Re = (ρ × v × D) / μ<br/>
                    Jahan Re &gt; 31,000 ho, flow turbulent hota hai jo continuous mechanical scrubbing effect paida karta hai — yeh chemical action ko complement karta hai aur cleaning efficiency dramatically improve karta hai.</p>
                    <p><strong>Common Alkali Chemicals:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li>Caustic Soda (NaOH) — Most common, strong, economical</li>
                      <li>Sodium Carbonate (Na₂CO₃) — Milder, for sensitive equipment</li>
                      <li>Sodium Metasilicate — Added corrosion inhibitor, good for aluminum</li>
                      <li>Sequestrants (EDTA, NTA) — Hard water mein mineral sequestration ke liye add kiye jaate hain</li>
                    </ul>`
                },
                {
                    title: "3. Intermediate Rinse (Madhyavartti Dhulan) — 'Chemical Transition'",
                    colorClass: "bg-gray-100 border-gray-300",
                    details: `<p><strong>Uddeshya:</strong> Alkali detergent ke avshesho ko puri tarah hatana aur acid wash ke liye surface tayaar karna.</p>
                    <p><strong>Prakriya:</strong> Potable warm water (45-55°C) se 5-10 minute ke liye rinse. Drain ke paani ka pH check karna chahiye — 7-8 tak aana chahiye.</p>
                    <p><strong>Science — Kyon Yeh Step Compulsory Hai:</strong></p>
                    <p>Agar alkali residue reh jaaye aur acid wash seedha apply kiya jaaye, toh ek neutralization reaction hoti hai:<br/>
                    <code>NaOH + HNO₃ → NaNO₃ + H₂O</code><br/>
                    Is reaction mein acid spend ho jaata hai sirf alkali ko neutralize karne mein, na ki milk stone dissolve karne mein. Yeh acid ki effective concentration ko reduce karta hai aur cleaning inadequate ho jaati hai. Saath hi, excess chemical waste bhi hota hai.</p>
                    <p>Is step mein pH monitoring highly recommended hai — automatic CIP systems mein pH probes lagaye jaate hain jo conductivity se solution strength measure karte hain aur rinse completion confirm karte hain.</p>`
                },
                {
                    title: "4. Acid Wash (Amleey Dhulan) — 'Mineral Descaling'",
                    colorClass: "bg-yellow-100 border-yellow-300",
                    details: `<p><strong>Uddeshya:</strong> Milk stone aur doosre mineral deposits (calcium, magnesium phosphates, carbonates) ko chemically dissolve karna.</p>
                    <p><strong>Prakriya:</strong> 0.5-1.5% HNO₃ ya H₃PO₄ solution ko 60-75°C par 10-20 minute ke liye circulate kiya jaata hai.</p>
                    <p><strong>Science — Mineral Dissolution Reactions:</strong></p>
                    <p>Milk stone mein primarily calcium phosphate (Ca₃(PO₄)₂) aur calcium carbonate (CaCO₃) hote hain jo alkali mein insoluble hain:</p>
                    <p><code>Ca₃(PO₄)₂ + 4HNO₃ → 3Ca(NO₃)₂ + 2H₃PO₄</code><br/>
                    (Insoluble calcium phosphate → Soluble calcium nitrate + Phosphoric acid)</p>
                    <p><code>CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂↑</code><br/>
                    (Insoluble calcium carbonate → Soluble salt + Gas evolved)</p>
                    <p>Is tarah acid insoluble mineral salts ko soluble compounds mein convert karta hai jo paani se easily rinse ho jaate hain.</p>
                    <p><strong>Acid Ka Comparison:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li><strong>Nitric Acid (HNO₃):</strong> Strong acid, excellent descaler, also sanitizing properties, but more expensive aur corrosive</li>
                      <li><strong>Phosphoric Acid (H₃PO₄):</strong> Moderate acid, less corrosive, surface ko passivate karta hai (stainless steel par protective layer)</li>
                      <li><strong>Citric Acid:</strong> Mild, food-grade, environmentally friendly, acha chelating agent, lekin less powerful</li>
                      <li><strong>Hydrochloric Acid (HCl):</strong> Very strong, good descaler but highly corrosive — stainless steel ko damage kar sakta hai, careful use</li>
                    </ul>
                    <p><strong>Note:</strong> Nitric acid pasivation bhi karta hai — stainless steel ki surface par ek thin chromium oxide (Cr₂O₃) protective layer banata hai jo future corrosion se bachata hai.</p>`
                },
                {
                    title: "5. Final Rinse (Antim Dhulan) — 'Chemical Clearance'",
                    colorClass: "bg-blue-100 border-blue-300",
                    details: `<p><strong>Uddeshya:</strong> Acid ke sabhi avshesho ko hatana aur surface ko chemically neutral rakhna.</p>
                    <p><strong>Prakriya:</strong> System ko cold potable water (15-25°C) se tab tak rinse kiya jaata hai jab tak drain water ka pH 6.5-7.5 (neutral) na ho jaaye.</p>
                    <p><strong>Science — Rinse Water Quality Matter Karta Hai:</strong></p>
                    <p>Is step mein use hone wale paani ka hardness important hai. Agar hard water use kiya jaaye, toh calcium aur magnesium minerals newly cleaned surface par deposit ho sakte hain, ek thin new scale layer banaate hain. Ideal hai ki final rinse mein soft water ya potable water use kiya jaaye jiska hardness &lt;180 mg/L CaCO₃ equivalent ho.</p>
                    <p>Final rinse water ki quality monitor karna chahiye — both pH aur conductivity check karein. Conductivity &lt;100 μS/cm indicate karta hai ki chemicals successfully removed ho gaye hain.</p>`
                },
                {
                    title: "6. Sanitization/Disinfection (Keenu-shudi) — 'Microbial Kill'",
                    colorClass: "bg-green-100 border-green-300",
                    details: `<p><strong>Uddeshya:</strong> Production shuru hone se pehle remaining microorganisms ko eliminate karna — product safety ensure karna.</p>
                    <p><strong>Prakriya Options:</strong></p>
                    <p><strong>A) Thermal Sanitization (Garam Paani):</strong><br/>
                    85-95°C par 10-15 minute ke liye hot water circulation. Most effective aur no chemical residue, lekin energy intensive.</p>
                    <p><strong>B) Chemical Sanitization:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li><strong>Chlorine (Sodium Hypochlorite):</strong> 150-200 ppm, contact time 2-5 min. Hypochlorous acid (HOCl) bacterial cell membranes ko damage karta hai aur enzyme systems ko inhibit karta hai. pH-sensitive — pH 6-7 par most effective. Rinse zaruri hai (food contact surfaces ke liye &lt;2 ppm residue acceptable).</li>
                      <li><strong>Peracetic Acid (PAA):</strong> 80-200 ppm, highly effective, even against spores. Strong oxidizing agent — DNA, proteins, aur cell membranes sabko damage karta hai. Low residue, environmentally friendly (decomposes to acetic acid + H₂O). Cold temperature par bhi effective.</li>
                      <li><strong>Iodophors:</strong> 12.5-25 ppm iodine, mild, broad-spectrum. Surface staining ho sakti hai.</li>
                      <li><strong>Quaternary Ammonium Compounds (QACs):</strong> Cationic surfactants jo cell membrane ko disrupt karte hain. Persistent residue, effective against gram-positive but less against gram-negative bacteria.</li>
                    </ul>
                    <p><strong>D-value aur Z-value — Thermal Kill ka Measure:</strong><br/>
                    D-value (Decimal Reduction Time) = Time required to kill 90% of target organisms at specific temperature.<br/>
                    Z-value = Temperature change required to change D-value by 10-fold.<br/>
                    Example: <em>Listeria monocytogenes</em> ka D₇₀°C ≈ 0.1 second hai, meaning 70°C par 0.1 second mein 90% kill ho jaate hain.</p>`
                }
            ]
        },

        chemicals: {
            title: "CIP mein Use Hone Wale Chemicals — Complete Scientific Guide",
            intro: "CIP process mein alag-alag chemicals use hote hain, har ek ka specific chemical mechanism aur application range hai:",
            types: [
                {
                    title: "Alkaline Detergents (Kshaareey Prakaalnakarak)",
                    details: `<p><strong>Examples:</strong> Caustic soda (NaOH), sodium carbonate (Na₂CO₃), sodium metasilicate, sodium sesquicarbonate.</p>
                    <p><strong>Mechanism:</strong> (a) Saponification — fat ko soluble soap mein convert; (b) Protein Hydrolysis — peptide bonds cleave karke soluble peptides banana; (c) Emulsification — residual fat particles ko water mein suspend karna.</p>
                    <p><strong>pH Range:</strong> pH 11-14 (highly alkaline). pH meter se monitor karna chahiye.</p>
                    <p><strong>Concentration Guide:</strong> General cleaning: 0.5-1.0% NaOH; Heavy soil: 1.5-2.0% NaOH; Glass bottle washing: 1.5-2.0%.</p>
                    <p><strong>Precautions:</strong> NaOH highly corrosive hai — PPE (gloves, goggles, apron) mandatory hai. Hard water mein NaOH CaCO₃ precipitate bana sakta hai, isliye sequestrants add kiye jaate hain.</p>`
                },
                {
                    title: "Acid Detergents (Amleey Prakaalnakarak)",
                    details: `<p><strong>Examples:</strong> Nitric acid (HNO₃), phosphoric acid (H₃PO₄), citric acid, gluconic acid, hydrochloric acid (HCl — limited use).</p>
                    <p><strong>Mechanism:</strong> Calcium, magnesium aur iron salts (mineral scale) ko soluble compounds mein dissolve karna. Chelation reaction bhi important role play karta hai jab chelating acids (citric, gluconic) use hote hain.</p>
                    <p><strong>pH Range:</strong> pH 1-4 (acidic). HNO₃ aur H₃PO₄ most common.</p>
                    <p><strong>Frequency:</strong> Acid wash CIP cycle mein har cycle mein karna zaroori nahi hota — Dairy Processing Handbook recommendation hai: Alkali wash daily, Acid wash alternate days ya weekly (depending on water hardness aur processing volume).</p>`
                },
                {
                    title: "Sanitizers (Roganashak)",
                    details: `<p><strong>Examples:</strong> Chlorine compounds (NaOCl), peracetic acid (PAA), iodophors, QACs, hot water (>85°C).</p>
                    <p><strong>Log Reduction Standard:</strong> Effective sanitizer ko ≥5 log reduction (99.999%) achieve karna chahiye target pathogens ke against.</p>
                    <p><strong>Choosing the Right Sanitizer:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li>Hot water — No residue, energy intensive, best for aseptic systems</li>
                      <li>Chlorine — Cost effective, but corrosive at high concentrations, pH sensitive</li>
                      <li>PAA — Broad spectrum, spore effective, no rinse required at low concentrations</li>
                      <li>QAC — Persistent activity, no rinse needed, but not effective against spores</li>
                    </ul>`
                },
                {
                    title: "Sequestrants aur Chelating Agents",
                    details: `<p><strong>Examples:</strong> EDTA (ethylenediaminetetraacetic acid), NTA, STPP (sodium tripolyphosphate), gluconate.</p>
                    <p><strong>Kyon Zaroori Hain:</strong> Hard water mein Ca²⁺ aur Mg²⁺ ions cleaning effectiveness ko reduce karte hain — yeh NaOH ke saath insoluble precipitates banaate hain aur surfactant action ko inhibit karte hain. Sequestrants in metal ions ko chelate (cage) karke solution mein soluble rakhte hain.</p>
                    <p><strong>Chemistry:</strong> EDTA ek hexadentate ligand hai jo Ca²⁺ ke saath 1:1 complex banata hai:<br/>
                    <code>Ca²⁺ + EDTA⁴⁻ → [Ca-EDTA]²⁻ (stable, soluble complex)</code></p>`
                },
                {
                    title: "Surfactants (Surface-Active Agents)",
                    details: `<p><strong>Types:</strong> Anionic (LABSA, SDS), Non-ionic (ethoxylates), Cationic (QACs), Amphoteric.</p>
                    <p><strong>Mechanism — Critical Micelle Concentration (CMC):</strong> Surfactants molecules mein ek hydrophilic head aur hydrophobic tail hoti hai. Jab concentration CMC se zyada hoti hai, molecules micelles form karte hain — hydrophobic tails andar, hydrophilic heads bahar. Yeh micelles fat particles ko encapsulate karke water mein emulsify karte hain.</p>
                    <p><strong>HLB Value (Hydrophilic-Lipophilic Balance):</strong> HLB 8-18 wale surfactants oil-in-water emulsification ke liye best hain — dairy cleaning mein preferred.</p>`
                }
            ]
        },

        cleaning_procedures: {
            title: "Specific Instruments ki Cleaning Procedures",
            sections: [
                {
                    title: "Doodh ke Cans ki Safai",
                    content: `
                        <p>Dairy reception dock par aluminium cans mein receive hue raw milk ko manual aur/ya mechanical washing dono ka use karke saaf aur sanitize kiya ja sakta hai.</p>
                        <p><strong>Material Science Note:</strong> Aluminium cans strong alkali (>2% NaOH) se damage ho sakte hain kyunki NaOH aluminium ko dissolve karta hai: <code>2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑</code>. Isliye sodium metasilicate-based alkaline detergents aluminium ke liye preferred hain jo corrosion inhibitor ki tarah kaam karte hain.</p>
                        <h5 class="font-bold mt-2">Manual Washing:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Cans khaali karne ke turant baad, unhein pehle tap water se dhoya jaata hai aur loose dirt ko brush se andar se hata diya jaata hai.</li>
                            <li>Cans ko pehle se taiyaar 50°C par detergent solution (1% sodium hexametaphosphate, trisodium phosphate, sodium carbonate, teepol) mein bhigoyein. Soaking time minimum 5 minute.</li>
                            <li>Garam detergent solution se cans ke andar ke hisse ko acchi tarah se brush karein. Bottom aur seams par special attention dein jahan soil accumulate hota hai.</li>
                            <li>Cans ko garam paani se dhoyein jab tak detergent traces na nikal jaayein.</li>
                            <li>Lid ke saath cans ko steam karein (100°C steam, 2-3 min) aur draining rack par inverted position mein store karein.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Mechanical Washing (Rotary ya Tunnel Type Washer):</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Detergent tank ko 0.5% alkalinity wale detergent solution se charge karein. Alkalinity daily qualitative test se verify karein.</li>
                            <li>Mechanical washer ke paani aur steam valve kholein aur motor aur pump start karein.</li>
                            <li>Cans aur lids ko unke respective carrier paths mein load karein — orientation correct rakhein (inverted for proper drainage).</li>
                            <li>Jet pressure ko 15 psi par aur temperatures maintain karein: Pre-rinsing (40°C), Detergent wash (75°C), Hot water wash (85°C).</li>
                            <li>Steaming aur hot water blast pressure ko respectively 20 psi aur temperatures 120°C aur 125°C par maintain rakha jaata hai. Yeh temperatures milk-borne pathogens (Salmonella, E. coli, Listeria) ko effectively kill karte hain.</li>
                            <li>Outlet par cans aur lids utaarein aur rack par store karein — inverted position mein taaki gravity drainage ho.</li>
                            <li>Har operation ke start aur end mein qualitative ya quantitative tests se detergent solution ki strength check karein. Diluted solution cleaning effectiveness reduce karti hai.</li>
                        </ol>
                    `
                },
                {
                    title: "Cream Separator/Clarifier ki Safai",
                    content: `
                        <p>Cream separator high-speed centrifuges (6000-10000 RPM) hote hain. Inke bowl mein milk ke heavier components (proteins, minerals, somatic cells) centrifugal force se periphery par collect hote hain — ise 'separator slime' ya 'centrifuge sludge' kehte hain. Iska regular removal zaruri hai kyunki:</p>
                        <ul class="list-disc list-inside mt-1 mb-2">
                          <li>Slime accumulation bowl ki balance bigaarti hai, vibration badhata hai</li>
                          <li>Slime microbial growth ka medium hai</li>
                          <li>Thick slime layer separation efficiency reduce karti hai</li>
                        </ul>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Din ke operation ke baad, main machine se bowl carefully hata dein. Bowl mein high-speed rotation se balanced mass distribution zaruri hai — rough handling se damage ho sakta hai.</li>
                            <li>Bowl ko methodically dismantle karein — disc stack ko sequence mein rakhein (numbered order maintain karein). Discs ki exact re-assembly balance ke liye critical hai.</li>
                            <li>Bowl ke periphery se separator slime rubber scraper se carefully hata dein. Slime composition: proteins ~40%, fat ~30%, minerals ~20%, somatic cells ~10%.</li>
                            <li>Brush ki madad se har ek disc ko warm (50-60°C) alkaline detergent solution (0.5% NaOH ya specialized separator cleaner) se saaf karein. Disc channels aur holes special attention chahte hain.</li>
                            <li>Acid rinse (dilute citric acid 0.3%) se mineral scale dissolve karein yadi regular problem ho.</li>
                            <li>Sabhi parts ko lukewarm paani se dhoyein. Rinse water ki purity important hai — tap water mein minerals nahi hone chahiye ideally.</li>
                            <li>Sookhne ke baad reassemble karein aur use se pehle sanitize karein.</li>
                        </ol>
                    `
                },
                {
                    title: "Plate Heat Exchangers (PHE) ki Safai",
                    content: `
                        <p><strong>PHE Design aur Fouling Mechanism:</strong> PHE mein corrugated stainless steel plates hoti hain jo thin channels create karti hain. Milk ek side se aur heating/cooling media doosri side se flow karta hai. High heat transfer area milk components ke liye ideal fouling conditions create karta hai:</p>
                        <ul class="list-disc list-inside mt-1 mb-2">
                          <li><strong>Type A Fouling (Pasteurization section):</strong> 70-110°C range mein primarily β-lactoglobulin denaturation se protein layer</li>
                          <li><strong>Type B Fouling (High temperature section):</strong> >110°C par calcium phosphate-dominant mineral scale</li>
                        </ul>
                        <h5 class="font-bold mt-2">Daily CIP Cleaning:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Lukewarm water (40-50°C) se pre-rinse karein, film aur loose deposits hatane ke liye — minimum 10 min.</li>
                            <li>1.0-1.5% alkaline detergent (NaOH based) ko 75-85°C par 20-30 minute ke liye forward aur backward alternating flow mein circulate karein. Alternating flow ensures even coverage.</li>
                            <li>Intermediate rinse se alkali residue hatayein (pH neutral check karein).</li>
                            <li>0.8-1.2% nitric ya phosphoric acid solution ko 65-75°C par 20-30 minute ke liye circulate karein.</li>
                            <li>40-50°C hot water se rinse, phir cold potable water se final rinse (pH 6.5-7.5 confirm karein).</li>
                            <li>Production se pehle sanitizer solution (PAA 150 ppm ya hot water 90°C) circulate karein.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Periodic Manual Cleaning:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>PHE ko carefully kholein — bolts ko even pressure se loosen karein (cross-pattern).</li>
                            <li>Rubber gaskets inspect karein: swell, cracking, hardening, ya adhesion loss ke signs. Damaged gaskets immediately replace karein — leakage se cross-contamination ho sakta hai.</li>
                            <li>Har plate ko individually inspect karein aur detergent solution + soft brush se scale hatayein. Metal brush use mat karein — plate surface scratch hogi aur future fouling worse ho jaayegi.</li>
                            <li>Plate surface par pitting ya erosion check karein — yeh signs bataate hain ki plate replacement chahiye.</li>
                            <li>Plates ko thoroughly rinse karein aur manufacturer ki re-assembly instructions follow karein — plate sequence aur orientation maintain karein.</li>
                        </ol>
                    `
                },
                {
                    title: "Milk Storage Tank ki Safai",
                    content: `
                        <p>Milk storage tanks mein agitators, temperature sensors, spray devices aur manholes hote hain. Cleaning mein in sabhi components ka attention required hai.</p>
                        <p><strong>Key Challenge:</strong> Large volume tanks mein proper spray coverage achieve karna difficult hai. Rotating spray heads (spray balls) even distribution ensure karte hain, lekin their own cleaning bhi required hai — 'shadow areas' jahan spray nahi pahuinchta woh contamination zones ban sakte hain.</p>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Tank khaali hone ke baad, drain valve fully open karein aur bacha hua milk completely drain karein.</li>
                            <li>Pressurized spray head (rotating spray ball, minimum 5 bar pressure) ka use karke tank ko lukewarm water se pre-rinse karein — minimum 10 minute. Water drainage clear hone tak rinse karein.</li>
                            <li>Drain valve band karein aur alkaline detergent solution (1-1.5% NaOH, 75-80°C) ko spray system ke through pump karein. Minimum 30 minute recirculation — larger tanks ko longer time chahiye.</li>
                            <li>Valve open karein aur detergent solution drain karein. Detergent concentration check karein — if significantly diluted, replace karein ya top-up karein.</li>
                            <li>Warm water se intermediate rinse, phir acid solution (0.5-1% H₃PO₄, 65°C) se 20 minute acid wash (weekly basis).</li>
                            <li>Cold potable water se final rinse jab tak pH neutral ho.</li>
                            <li>Sanitize karein: Steam (100°C, 20 min) ya chlorinated water (150-200 ppm chlorine, 15 min contact). Steam most preferred — no residue.</li>
                            <li>Agitator blades, temperature probes, manhole seal, aur outlet valve ko bhi individually inspect aur clean karein.</li>
                        </ol>
                    `
                },
                {
                    title: "Pasteurizer (HTST/LTLT) ki Safai",
                    content: `
                        <p>Pasteurizers dairy processing ka most critical equipment hain — inki inadequate cleaning directly product safety ko affect karti hai. HTST (High Temperature Short Time: 72°C/15 sec) aur LTLT (Low Temperature Long Time: 63°C/30 min) dono ke liye cleaning critical hai.</p>
                        <p><strong>CIP Sequence for HTST Pasteurizer:</strong></p>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li><strong>Water Flush:</strong> Production end hone par, milk ko lukewarm water se displace karein jab tak outlet mein water clear ho jaaye. Is water ko separate tank mein collect kar sakte hain (still contains some milk).</li>
                            <li><strong>Caustic CIP (80-85°C, 0.8-1.2% NaOH, 30 min):</strong> Poore HTST circuit mein (balance tank, PHE, holding tube, flow diversion valve, regeneration section) alkaline solution circulate karein.</li>
                            <li><strong>Intermediate Water Rinse:</strong> Conductivity monitor karke alkali removal confirm karein.</li>
                            <li><strong>Acid CIP (65-70°C, 0.8% HNO₃, 20 min):</strong> Mineral scale (especially heavy pasteurization section mein) remove karein.</li>
                            <li><strong>Final Water Rinse aur pH Check.</strong></li>
                            <li><strong>Pre-production Sanitization:</strong> 95°C hot water ya PAA (200 ppm) se minimum 15 min.</li>
                        </ol>
                        <p><strong>Flow Diversion Valve (FDV) Critical Check:</strong> HTST mein FDV ek critical safety device hai jo under-pasteurized milk ko divert karta hai. FDV valve seats aur seals ko CIP ke baad visually inspect karein — any wear means immediate replacement.</p>
                    `
                },
                {
                    title: "Pipelines aur Valves ki Safai",
                    content: `
                        <p>Dairy plants mein miles of stainless steel piping hoti hai. Pipeline cleaning mein 'dead legs' ek major concern hain — aise sections jahan flow nahi hota, yahan cleaning solution ka adequate contact time nahi milta aur microbial contamination persist kar sakta hai.</p>
                        <p><strong>Engineering Standard:</strong> Dead leg ka L:D ratio (length to diameter) 2:1 se kam hona chahiye (3-A Sanitary Standards). Zyada L:D = inadequate cleaning = contamination risk.</p>
                        <p><strong>Valve Types aur Cleanability:</strong></p>
                        <ul class="list-disc list-inside mt-1 mb-2">
                          <li><strong>Double Seat Mix-Proof Valves:</strong> Aseptic processing ke liye ideal — leakage detection possible, CIP-able in both seated positions</li>
                          <li><strong>Butterfly Valves:</strong> Simple, CIP-able, but disc edge area shadow zone create karta hai</li>
                          <li><strong>Ball Valves:</strong> Generally NOT recommended for inline CIP — ball interior cleaning difficult</li>
                        </ul>
                        <p><strong>CIP for Pipelines:</strong></p>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Minimum flow velocity ≥1.5 m/s for turbulent flow (preferably ≥2.5 m/s in larger pipes).</li>
                            <li>All valves fully open during CIP to ensure complete coverage.</li>
                            <li>Pipe system ka slope proper hona chahiye (minimum 1:100) taaki gravity drainage complete ho — standing water = bacterial growth.</li>
                            <li>Temperature, concentration, time, aur flow rate (TACT principle) sabko monitor aur log karna chahiye.</li>
                        </ol>
                    `
                }
            ]
        },

        teepol_detergent: {
            title: "Liquid Detergent Banana aur Check Karna",
            htmlContent: `
                <p>Dairy aur food industry mein, haath se bartano aur chhote instruments ki safai ke liye neutral liquid detergent (jaise Teepol) kaafi use kiya jaata hai. Teepol originally Shell Chemicals ka brand tha — ab iska use generic liquid dish soap/detergent ke liye hota hai.</p>
                
                <h4 class="font-bold mt-4">Detergent Chemistry — Basics</h4>
                <p>LABSA (Linear Alkylbenzene Sulfonic Acid) ek anionic surfactant hai — sabse widely used commercial surfactant. Iska structure: Alkyl chain (C10-C13) + Benzene ring + Sulfonic acid group. Yeh dirt aur fat ko surface se detach karne aur water mein emulsify karne mein highly effective hai.</p>
                <p>Neutralization reaction: <code>LABSA + NaOH → Sodium Linear Alkylbenzene Sulfonate (SLAS) + H₂O</code></p>
                <p>Is neutralized form (sodium salt) mein surfactant water mein freely soluble hoti hai aur maximum cleaning effectiveness hoti hai. Incomplete neutralization (pH &lt;7) remains acidic aur uncompleted neutralization (pH &gt;8) excess alkali remains.</p>

                <h4 class="font-bold mt-4">1. General Purpose Liquid Detergent Kaise Banayein (1000 Litre Batch):</h4>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Paani (Soft Water)</td><td class="p-2 border-b">820 - 840 Kg</td><td class="p-2 border-b">82-84%</td><td class="p-2 border-b">Main Solvent — Soft water preferred (hard water mein EDTA add karein)</td></tr>
                <tr><td class="p-2 border-b">Acid Slurry (LABSA 90%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Anionic Surfactant) — Active matter ~90 Kg</td></tr>
                <tr><td class="p-2 border-b">Caustic Soda (NaOH flakes, 98%)</td><td class="p-2 border-b">~15 Kg</td><td class="p-2 border-b">~1.5%</td><td class="p-2 border-b">LABSA ko neutralize karta hai (target pH 6.5-7.5)</td></tr>
                <tr><td class="p-2 border-b">Urea ya Common Salt (NaCl)</td><td class="p-2 border-b">20-40 Kg</td><td class="p-2 border-b">2-4%</td><td class="p-2 border-b">Viscosity builder — ionic strength se micelle structure tighten hoti hai</td></tr>
                <tr><td class="p-2 border-b">Preservative (Kathon CG/Formaldehyde)</td><td class="p-2 border-b">0.1-0.2 Kg</td><td class="p-2 border-b">0.01-0.02%</td><td class="p-2 border-b">Shelf life extension — microbial contamination prevent karta hai</td></tr>
                <tr><td class="p-2 border-b">Rang aur Khushboo</td><td class="p-2 border-b">As required</td><td class="p-2 border-b">-</td><td class="p-2 border-b">Aesthetics ke liye</td></tr>
                <tr class="bg-muted"><td class="p-2 font-bold">Total</td><td class="p-2 font-bold">~1000 Kg</td><td class="p-2 font-bold">100%</td><td class="p-2 font-bold"></td></tr>
                </tbody></table></div>
                <p class="font-semibold">Process (Critical Steps):</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>Ek bade SS/HDPE tank mein paani lein. Agitator start karein (100-150 RPM).</li>
                    <li>LABSA (Acid Slurry) ko dheeere-dheere pour karein — thin stream mein daalo aur lagataar stir karo. Exothermic reaction hoti hai — thodi heat generate hogi.</li>
                    <li>Alag container mein NaOH flakes ko cold water mein dheeere gholein (BAHUT GARAM HOGA — 80-90°C tak — cautiously handle karein, PPE MANDATORY).</li>
                    <li>Thande hone par (30-40°C), NaOH solution ko dheere-dheere LABSA mixture mein daalein. pH meter se continuously monitor karein. Target pH 6.5-7.5. Agar pH zyada ho jaaye toh thoda LABSA add karein; agar kam ho toh thoda NaOH.</li>
                    <li>Salt/Urea add karein aur stir karein — viscosity gradual increase hogi. Desired viscosity (200-500 cP) achieve karne ke liye amount adjust karein.</li>
                    <li>Cool hone ke baad rang aur khushboo add karein. Final pH aur viscosity check karein. Bottle karein.</li>
                </ol>

                <h4 class="font-bold mt-6">2. Acidic Cleaner Kaise Banayein (Milk Stone Remover):</h4>
                <p><strong>⚠️ Warning: Strong acids dangerous hain — always wear PPE: acid-resistant gloves, face shield, apron. "Acid to Water add karo, Water to Acid NAHI" — Dilution Exotherm Safety Rule!</strong></p>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Paani (Cold Water)</td><td class="p-2 border-b">880 Kg</td><td class="p-2 border-b">88%</td><td class="p-2 border-b">Solvent — HAMESHA PEHLE DAALEN</td></tr>
                <tr><td class="p-2 border-b">Phosphoric Acid (85%)</td><td class="p-2 border-b">80 Kg</td><td class="p-2 border-b">~8%</td><td class="p-2 border-b">Mineral scale descaling — milder than HCl, passivates SS</td></tr>
                <tr><td class="p-2 border-b">Non-ionic Surfactant (Nonoxynol)</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Wetting, penetration into scale</td></tr>
                <tr><td class="p-2 border-b">Citric Acid</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Chelating agent — Ca, Mg ions ko complex karta hai</td></tr>
                </tbody></table></div>

                <h4 class="font-bold mt-6">3. Liquid Detergent ki Quality Checks:</h4>
                <p><strong>A) Active Matter % (Two-Phase Titration — ASTM/STAS Method):</strong></p>
                <p>Yeh method anionic surfactant (LABSA/SLAS) ki exact percentage measure karta hai. Cationic titrant (Hyamine 1622) anionic surfactant ke saath ion-pair complex banata hai jab mixed indicator (disulfine blue + dimidium bromide) bichloromethane mein colour change karta hai. Lab mein kiya jaata hai — specialized expertise required.</p>
                <p><strong>B) pH Test (Simple, Routine):</strong><br/>
                pH meter ya pH paper se check karein. Acceptable range: 6.5-7.5 (neutral detergent ke liye).<br/>
                pH &lt;6 = Over-acidic = Incomplete neutralization — skin irritating<br/>
                pH &gt;8 = Over-alkaline = Excess NaOH — may leave residue on food contact surfaces</p>
                <p><strong>C) Viscosity Test (Ford Cup Method):</strong><br/>
                Ford Cup (B4, 4mm orifice) se flow time measure karein. Standard liquid dishwash: 30-120 seconds @ 25°C. Low viscosity = too thin = consumer ki perception mein low quality.</p>
                <p><strong>D) Foam Test:</strong><br/>
                50 ml sample ko shake flask mein 30 second ke liye vigourously shake karein. Foam height measure karein — high foam detergents perceived as "more effective" but foam itself doesn't clean — wetting action cleans!</p>
            `
        },

        sip: {
            title: "SIP (Sterilization-In-Place) — Complete Technical Guide",
            intro: "Sterilization-in-place (SIP) ek continuous commercial scale operation hai jahan equipment aur piping ko in-situ sterilize kiya jaata hai bina disassembly ke. Yeh aseptic dairy products (UHT milk, sterile cream) ke production ke liye essential hai.",
            process: `
                <h5 class="font-bold mt-2">SIP vs CIP — Key Difference:</h5>
                <p>CIP <em>cleaning</em> karta hai (soil removal + significant microbial reduction). SIP <em>sterilization</em> karta hai — all viable organisms including bacterial spores ko destroy karta hai. SIP hamesha CIP ke <em>baad</em> kiya jaata hai — already-clean surface par.</p>
                <p><strong>F-value aur Sterilization Efficacy:</strong><br/>
                F₀ value (equivalent time at 121.1°C) sterilization ki "lethality dose" measure karta hai:<br/>
                <code>F₀ = D₁₂₁ × (log N₀ - log N)</code><br/>
                Aseptic dairy processing mein typically F₀ ≥ 6 min required hai (6-log reduction of most resistant spore-formers).</p>
                
                <h5 class="font-bold mt-2">SIP Process (Steam Sterilization):</h5>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li><strong>Pre-sterilization Flush:</strong> Clean potable water se system flush kiya jaata hai taaki any loose particles remove hon.</li>
                    <li><strong>Air Removal (Critical Step):</strong> Pressure mein steam poore installation se pass kiya jaata hai. Air pockets ek major problem hain — hawa poor heat conductor hai aur steam ke saath mixture steam ka partial pressure reduce karta hai, effective temperature kam ho jaati hai. Vents (bacterial filters se protected) se hawa bahar nikali jaati hai.</li>
                    <li><strong>Temperature Equilibration:</strong> Sab vents se continuous steam output hone par, yeh confirm karta hai ki air replaced ho gayi hai. Sabse door point (coldest point) par bhi target temperature achieve karna zaroori hai.</li>
                    <li><strong>Pressure Hold:</strong> Vents band kiye jaate hain — steam pressure predetermined level tak build up karta hai. Typical: 121°C (1 bar gauge pressure) for 15-20 min.</li>
                    <li><strong>Cool-Down under Sterile Conditions:</strong> Steam release ke baad, system sterile filtered air ya nitrogen se pressurized rakha jaata hai taaki outside air contamination prevent ho.</li>
                    <li><strong>Sterility Maintenance:</strong> Jab tak aseptic filling nahi hoti, system sterile positive pressure mein maintain hona chahiye.</li>
                </ol>
                
                <h5 class="font-bold mt-2">SIP Validation:</h5>
                <p>SIP process ko biological indicators (BI) se validate kiya jaata hai — typically <em>Geobacillus stearothermophilus</em> spores (D₁₂₁ ≈ 1.5-3 min, most heat-resistant non-pathogenic spore-former). Agar BIs killed ho jaayein, process validated hai.</p>
                <p>Temperature aur pressure data continuously log kiya jaata hai — digital records regulatory compliance ke liye essential hain (FDA 21 CFR, EU 853/2004).</p>
            `
        },

        advantages: {
            title: "CIP ke Fayde — Economic aur Scientific Perspective",
            list: [
                "Guaranteed aur repeatable quality assurance — automated CIP human error eliminate karta hai jo manual cleaning mein common hai.",
                "Complete data logging — temperature, concentration, flow rate, time sabka digital record regulatory audits aur HACCP documentation ke liye.",
                "Chemical cost reduction — recirculation systems mein cleaning solutions reuse hote hain; typically 30-50% chemical savings manual cleaning vs CIP.",
                "Inaccessible areas ki cleaning — spray devices aur turbulent flow aise areas clean kar sakte hain jahan manual brush nahi pahuinch sakta.",
                "Worker safety improvement — concentrated acids aur alkalis ke direct handling se workers protected hain; automated systems hazardous chemical exposure minimize karte hain.",
                "Reduced downtime — CIP systems parallel operations allow karte hain; while cleaning hoti hai, other preparations ho sakti hain.",
                "Labour reduction — ek automated CIP system 2-3 workers ka kaam akele kar sakta hai.",
                "Consistent chemical usage aur control — precise dosing systems correct concentrations ensure karte hain; neither over- nor under-concentration.",
                "Water conservation — optimized CIP rinse cycles paani waste kam karte hain vs manual cleaning; typically 40-60% water savings.",
                "Product quality improvement — properly cleaned equipment microbial contamination minimizes karta hai, shelf life badhti hai aur product defects kam hote hain.",
                "Environmental compliance — reduced chemical discharge concentrations aur water usage environmental regulations meet karne mein help karta hai."
            ]
        },

        solution_strength: {
            title: "CIP Solution ki Strength ka Test — Complete Methods",
            intro: "Proper CIP solution strength maintain karna efficient cleaning aur microbial control ke liye critical hai. Under-strength = inadequate cleaning; Over-strength = chemical waste + corrosion risk + safety hazard.",

            alkalinity_test: {
                title: "Washing Solution ki Strength ka Pata Lagana (Alkalinity Test)",
                content: `
                    <p>Alkalinity measurement CIP alkali wash solution ki strength ko quantify karta hai. NaOH ke terms mein expression convenient hai kyunki yeh most common alkali hai, aur doosre alkali compounds (sodium carbonate, metasilicate) ko bhi NaOH equivalent mein express kiya jaata hai.</p>
                    <p><strong>Standard References:</strong> Glass bottles ke liye 1.5% NaOH equivalent; Can washing ke liye 0.5% NaOH equivalent. Dilution over time se solution weaker ho jaati hai — regular testing mandatory hai.</p>
                    
                    <h5 class="font-bold mt-4">Zaruri Reagents aur Equipment:</h5>
                    <p>Conical flask (100 ml, 250 ml), calibrated pipettes (5 ml, 10 ml, 50 ml), burette (50 ml, 0.1 ml graduation), volumetric flask (250 ml), 2.5 N sulphuric acid, 0.1 N sulphuric acid, 0.1 N hydrochloric acid (N/10 HCl), phenolphthalein indicator (0.5% in 60% ethanol), methyl orange indicator (0.1% aqueous), pH meter (for confirmation).</p>

                    <h5 class="font-bold mt-4">Qualitative Test (Field Test):</h5>
                    <p>Yeh test sirf "adequate/inadequate" bataata hai — exact concentration nahi.</p>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Ek conical flask mein 10 ml detergent solution lein.</li>
                        <li>12.5 ml N/10 HCl aur 5 boondein 0.5% phenolphthalein indicator daalein. Agar mixture pink/red ho jaata hai → alkalinity &gt;0.5% NaOH equivalent = ADEQUATE. Agar colourless → &lt;0.5% = INSUFFICIENT, solution replace karein.</li>
                    </ol>
                    <p><strong>Logic:</strong> 12.5 ml of N/10 HCl = 0.00125 equivalents HCl = exactly enough to neutralize 0.5% NaOH in 10 ml. Agar alkali aur zyada hai, neutralization ke baad bhi alkali bacha rahega → phenolphthalein pink rahega.</p>

                    <h5 class="font-bold mt-4">Quantitative Test — Direct Reading Method:</h5>
                    <p>Yeh field use ke liye quick quantitative method hai using 2.5 N H₂SO₄ (directly readable titre).</p>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>100 ml conical flask mein 10 ml sample precisely maapein (calibrated pipette use karein).</li>
                        <li>2-3 boondein phenolphthalein indicator daalein. Solution pink ho jaayegi (agar alkaline hai).</li>
                        <li>Burette mein 2.5 N H₂SO₄ bharein. Dheere-dheere titrate karein jab tak pink colour completely disappear (colourless) na ho jaaye. Last drop ka dhyan rakhein — endpoint precise hona chahiye.</li>
                        <li>Use kiye gaye acid ke ml note karein (e.g., 0.8 ml).</li>
                        <li><strong>Direct Reading:</strong> ml of 2.5 N H₂SO₄ used = % alkali as NaOH directly. Example: 0.8 ml used → 0.8% NaOH equivalent (adequate for can washing &gt;0.5%; inadequate for bottle washing &lt;1.5%).</li>
                    </ol>
                    <p><em>Why 2.5 N gives direct reading?</em> 1 ml of 2.5 N H₂SO₄ = 0.1 g NaOH equivalent = 1% NaOH in 10 ml sample. Yeh convenient calculation factor deliberately chosen hai.</p>

                    <h5 class="font-bold mt-4">Laboratory Method (Double-Indicator, Precise):</h5>
                    <p>Yeh method free caustic (NaOH) aur total alkali (NaOH + Na₂CO₃ + NaHCO₃) dono alag-alag measure karta hai.</p>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>250 ml volumetric flask mein 5 ml washing solution precisely lein. Distilled water se 250 ml tak volume complete karein. Acchi tarah mix karein (invert 3-4 times).</li>
                        <li>Is diluted solution ke 50 ml ko 100 ml conical flask mein transfer karein.</li>
                        <li>2-3 boondein phenolphthalein indicator daalein.</li>
                        <li>0.1 N H₂SO₄ se titrate karein jab tak pink colour bilkul colourless na ho jaaye. Is titre ko "A" ml record karein. (Yeh NaOH + ½ Na₂CO₃ measure karta hai)</li>
                        <li>Usi flask mein 2-3 boondein methyl orange indicator daalein (orange colour aayega).</li>
                        <li>0.1 N H₂SO₄ se continue karte rahein jab tak solution ka colour orange se bright pink/red na ho jaaye. Ek extra ml acid yahan use hoga. Ise "B" ml record karein. (Yeh remaining ½ Na₂CO₃ + NaHCO₃ measure karta hai)</li>
                    </ol>
                    <p class="mt-2"><strong>Calculations (Scientific Basis):</strong><br/>
                    <code>% Free Caustic (NaOH) = (A - B) × 0.4</code><br/>
                    <code>% Total Alkali (as NaOH equivalent) = (A + B) × 0.4</code><br/>
                    <em>Factor 0.4 derivation:</em> 1 ml of 0.1 N H₂SO₄ = 0.004 g NaOH; 50 ml titrated from 250 ml (5× dilution) = 0.004 × 5 × 20 (per 100 ml = per 10 ml of original) × 10 = 0.4%/ml. Yeh dilution factor mathematically built into the formula hai.</p>
                `
            },
            calculators: {
                error_title: "Error",
                success_title: "Successfully Calculate Kiya Gaya",
                error_invalid_titre: "Kripya ek valid titre value enter karein.",
                naoh: {
                    title: "NaOH (%)",
                    description: "10 ml CIP solution ka sample 0.1 N acid (HCl ya H₂SO₄) se phenolphthalein indicator ke saath titrate karein. Endpoint: pink → colourless.",
                    label: "0.1 N Acid ka Use (ml)",
                    button: "NaOH % Calculate Karein",
                    result_prefix: "Caustic Soda (NaOH):"
                },
                hno3: {
                    title: "HNO₃ (%)",
                    description: "10 ml CIP acid solution ka sample 0.1 N NaOH se phenolphthalein indicator ke saath titrate karein. Endpoint: colourless → pink.",
                    label: "0.1 N Base ka Use (ml)",
                    button: "HNO₃ % Calculate Karein",
                    result_prefix: "Nitric Acid (HNO₃):"
                },
                h3po4: {
                    title: "H₃PO₄ (%)",
                    description: "10 ml CIP acid solution ka sample 0.1 N NaOH se titrate karein. Phosphoric acid triprotic hai — phenolphthalein se sirf first proton measure hota hai.",
                    label: "0.1 N Base ka Use (ml)",
                    button: "H₃PO₄ % Calculate Karein",
                    result_prefix: "Phosphoric Acid (H₃PO₄):"
                },
                chlorine: {
                    title: "Chlorine (ppm)",
                    description: "100 ml CIP sanitizer solution ka sample iodometric titration method se 0.01 N sodium thiosulphate ke saath titrate karein. Starch indicator use karein — endpoint: blue → colourless.",
                    label: "0.01 N Sodium Thiosulphate ka Use (ml)",
                    button: "Chlorine (ppm) Calculate Karein",
                    result_prefix: "Available Chlorine:"
                }
            }
        },

        // NEW TOPICS
        haccp_monitoring: {
            title: "CIP aur HACCP — Food Safety Management",
            htmlContent: `
                <p>HACCP (Hazard Analysis and Critical Control Points) ek systematic preventive approach hai jo food safety ke biological, chemical, aur physical hazards ko address karta hai. CIP process HACCP plan ka ek integral part hai.</p>
                
                <h4 class="font-bold mt-4">CIP-Related Critical Control Points (CCPs):</h4>
                <p><strong>CCP 1 — Pasteurization Temperature:</strong> HTST mein 72°C/15 sec ya LTLT mein 63°C/30 min maintain karna zaroori hai. Inadequate cleaning se PHE fouling hoti hai jo heat transfer reduce karta hai — effective pasteurization temperature achieve nahi hoti.</p>
                <p><strong>CCP 2 — Sanitizer Concentration:</strong> Chemical sanitizers ki concentration (ppm) within specified range honi chahiye — too low = inadequate kill; too high = chemical residue in product.</p>
                <p><strong>CCP 3 — CIP Contact Time aur Temperature:</strong> Caustic wash temperature &lt;70°C ya contact time &lt;15 min inadequate cleaning ka risk. Continuous monitoring essential.</p>
                
                <h4 class="font-bold mt-4">CIP Validation aur Verification:</h4>
                <p><strong>Validation</strong> ek baar ka process hai jo prove karta hai ki CIP procedure intended results achieve karti hai. Methods include:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>ATP Bioluminescence Testing — clean surfaces par ATP (biological contamination indicator) measure karna</li>
                  <li>Microbiological Swabbing — TPC (Total Plate Count), Coliforms, specific pathogens test karna</li>
                  <li>Protein Residue Test (Ninhydrin, Biuret) — protein traces detect karna</li>
                  <li>Visual Inspection — UV light se organic residue detect karna</li>
                </ul>
                <p><strong>Verification</strong> ongoing process hai — regular ATP tests, micro tests, rinse water analysis — confirm karta hai ki validated procedure still working hai.</p>
                
                <h4 class="font-bold mt-4">TACT Principle — CIP Effectiveness ke 4 Pillars:</h4>
                <p>Effective cleaning char parameters ka balance hai:</p>
                <ul class="list-disc list-inside mt-1">
                  <li><strong>T — Temperature:</strong> Higher temperature = faster chemical reactions (Arrhenius). But optimal range hai — too high denatures proteins onto surface.</li>
                  <li><strong>A — Action (Mechanical):</strong> Turbulent flow (Re &gt;31,000) ka mechanical scrubbing action. Flow velocity ≥1.5 m/s pipes mein.</li>
                  <li><strong>C — Concentration:</strong> Chemical concentration must be within effective range — dilution se cleaning fails; excess se waste aur safety hazard.</li>
                  <li><strong>T — Time:</strong> Sufficient contact time required for chemical reactions to complete. Shortcuts = inadequate cleaning.</li>
                </ul>
                <p>In charon ko "Sinner's Circle" ya "CIP Circle" bhi kehte hain — ek parameter reduce karo toh doosre badhane padenge. E.g., temperature kam ho toh contact time badhaao.</p>
            `
        },

        water_quality: {
            title: "CIP mein Paani ki Quality — Water Treatment",
            htmlContent: `
                <p>Paani CIP process ka sabse zyada used component hai — typically 70-80% of CIP cost paani se related hai (consumption + treatment + effluent). Paani ki quality directly cleaning effectiveness ko affect karti hai.</p>
                
                <h4 class="font-bold mt-4">Water Hardness aur Dairy CIP:</h4>
                <p>Hard water mein dissolved Ca²⁺ aur Mg²⁺ ions hote hain. Dairy CIP mein yeh ions several problems create karte hain:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>NaOH ke saath insoluble precipitates: Ca(OH)₂, CaCO₃ — scale formation</li>
                  <li>Anionic surfactants ke saath insoluble calcium salts — surfactant activity reduce</li>
                  <li>Rinse water mein minerals — newly cleaned surface par thin deposit</li>
                </ul>
                <p><strong>Classification:</strong></p>
                <ul class="list-disc list-inside mt-1">
                  <li>Soft: &lt;60 mg/L CaCO₃ equivalent — ideal for CIP</li>
                  <li>Moderately hard: 60-120 mg/L — acceptable with sequestrants</li>
                  <li>Hard: 120-180 mg/L — sequestrants required, increased acid wash frequency</li>
                  <li>Very hard: &gt;180 mg/L — water softening necessary</li>
                </ul>
                
                <h4 class="font-bold mt-4">Water Treatment Methods:</h4>
                <p><strong>Ion Exchange Softening:</strong> Water cation exchange resin se pass hota hai jo Ca²⁺ aur Mg²⁺ ions ko Na⁺ ions se exchange karta hai. Resin ko periodically NaCl (brine) se regenerate kiya jaata hai.</p>
                <p><strong>Reverse Osmosis (RO):</strong> High pressure se water semi-permeable membrane through force kiya jaata hai — dissolved ions, bacteria, most contaminants removed. Very high quality water — ideal for final rinse.</p>
                <p><strong>UV Treatment:</strong> Microbial contamination ke liye — 254 nm UV light DNA damage karke microorganisms ko inactivate karta hai. No chemical added — no taste/odor.</p>
                
                <h4 class="font-bold mt-4">CIP Effluent aur Environment:</h4>
                <p>CIP drain water mein high BOD (Biological Oxygen Demand), extreme pH (acidic ya alkaline), aur residual chemicals hote hain. Direct discharge environment ko damage karta hai. Responsible dairy plants:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>Alkali aur acid streams ko mix karke neutralize karte hain (target pH 6-9 before discharge)</li>
                  <li>Chemical recovery — strong caustic solutions concentrate karke reuse</li>
                  <li>Effluent treatment plant (ETP) — biological treatment before final discharge</li>
                </ul>
            `
        },

        microbiology_dairy_cleaning: {
            title: "Dairy Cleaning ki Microbiology — Pathogens aur Spoilage Organisms",
            htmlContent: `
                <p>Dairy processing mein targeted microorganisms ko samajhna CIP program design karne ke liye essential hai. Different organisms alag CIP parameters require karte hain.</p>
                
                <h4 class="font-bold mt-4">Key Dairy Pathogens aur Unki Resistance:</h4>
                <table class="w-full my-4"><thead><tr class="bg-muted"><th class="p-2 text-left">Pathogen</th><th class="p-2 text-left">D-Value</th><th class="p-2 text-left">CIP Concern</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Salmonella spp.</td><td class="p-2 border-b">D₇₀ = 0.1-0.5 sec</td><td class="p-2 border-b">Heat sensitive — adequate pasteurization + sanitization destroys</td></tr>
                <tr><td class="p-2 border-b">Listeria monocytogenes</td><td class="p-2 border-b">D₇₀ = 0.1 sec</td><td class="p-2 border-b">Can grow at refrigeration (4°C)! Biofilm former — critical to remove</td></tr>
                <tr><td class="p-2 border-b">E. coli O157:H7</td><td class="p-2 border-b">D₇₀ &lt;1 sec</td><td class="p-2 border-b">Low infectious dose (&lt;100 cells) — thorough sanitization essential</td></tr>
                <tr><td class="p-2 border-b">Staphylococcus aureus</td><td class="p-2 border-b">D₇₂ = 0.2-2.0 sec</td><td class="p-2 border-b">Enterotoxin production at 10-46°C — heat-stable toxin survives pasteurization</td></tr>
                <tr><td class="p-2 border-b">Bacillus cereus</td><td class="p-2 border-b">Spores: D₁₂₁ = 2-8 min</td><td class="p-2 border-b">Spore-former — CIP removes vegetative cells; spores survive routine sanitization</td></tr>
                <tr><td class="p-2 border-b">Mycobacterium tuberculosis</td><td class="p-2 border-b">D₇₂ = 0.5-2 sec</td><td class="p-2 border-b">Pasteurization indicator organism — destruction confirms adequate heat treatment</td></tr>
                </tbody></table>
                
                <h4 class="font-bold mt-4">Spoilage Organisms:</h4>
                <p><strong>Psychrotrophic Bacteria (Cold-loving):</strong> Pseudomonas, Acinetobacter — refrigeration temperature par grow karte hain (4-7°C), lipases aur proteases produce karte hain jo milk flavor aur shelf life damage karte hain. Inadequate cleaning ke baad equipment surface par survive karte hain.</p>
                <p><strong>Thermoduric Bacteria:</strong> Pasteurization survive karte hain (D₇₂ = high). Includes Micrococcus, Enterococcus, spore-formers. Inki presence post-pasteurization mein equipment recontamination indicate karta hai.</p>
                <p><strong>Thermophilic Bacteria:</strong> 45-65°C range mein grow karte hain — HTST regeneration section mein ideal growth zone. Streptococcus thermophilus, Lactobacillus — rapid growth in warm sections during processing. Regular CIP inhe control karta hai.</p>
                
                <h4 class="font-bold mt-4">Environmental Monitoring Program (EMP):</h4>
                <p>EMP ek systematic program hai jo processing environment mein microbial contamination track karta hai. Zone-based approach:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>Zone 1 — Direct product contact surfaces (equipment interior) — highest risk</li>
                  <li>Zone 2 — Adjacent non-product contact surfaces (equipment exterior)</li>
                  <li>Zone 3 — Near processing environment (floors, drains)</li>
                  <li>Zone 4 — Remote environment (walls, ceilings)</li>
                </ul>
                <p>EMP results CIP effectiveness validate karne mein help karte hain. Listeria environmental positives Zone 3/4 mein acceptable; Zone 1 mein Listeria = immediate corrective action required.</p>
            `
        }
    },

    en: {
        main_title: "Washing and Cleaning of Dairy Equipment",
        main_description: "A comprehensive scientific guide to clean and sanitize dairy equipment, covering CIP/COP principles, chemical reactions, microbiology, HACCP, and quality control.",

        intro: {
            title: "Introduction: CIP and Milk Stone",
            htmlContent: `
                <p>Milk remaining on the surface of dairy equipment and containers provides an excellent medium for microbial growth. Milk contains proteins (casein, whey proteins), fats, lactose, minerals, and vitamins — together forming a near-perfect nutrient broth that creates ideal growth conditions for bacteria. It is therefore essential to clean and sanitize dairy equipment properly. Cleaning and sanitization are complementary processes and neither alone achieves the final objective.</p>
                
                <h4 class="font-bold mt-4">Cleaning vs. Sanitization — Key Distinction</h4>
                <p><strong>Cleaning:</strong> The physical and chemical removal of milk residue (soil), leaving the surface free of visible contamination. A cleaned surface may still harbor microorganisms.</p>
                <p><strong>Sanitization:</strong> Applied after cleaning to reduce the remaining microbial population to safe levels (typically ≥99.9% reduction). Critically, sanitization is only effective on an already-clean surface — organic matter neutralizes most sanitizers.</p>
                <p><strong>Sterilization:</strong> The complete destruction of all viable organisms including bacterial spores. Used only in UHT plants and aseptic filling systems in dairy processing.</p>

                <h4 class="font-bold mt-4">What is CIP/COP?</h4>
                <p><strong>CIP (Cleaning-In-Place):</strong> An automated method for cleaning pipelines, tanks, and other equipment without disassembly. It involves pumping cleaning and sanitizing solutions through pipes and equipment in a specific sequence. High-velocity turbulent flow generates mechanical scrubbing action that dislodges deposits. The concept of CIP was developed in the dairy industry in the 1950s and is now the backbone of modern dairy processing.</p>
                <p><strong>COP (Cleaning-Out-of-Place):</strong> Smaller parts or equipment are disassembled and taken to a dedicated cleaning area where they are soaked or manually cleaned. Examples include centrifuge bowls, pump impellers, and gaskets.</p>

                <h4 class="font-bold mt-4">Types of CIP Systems</h4>
                <p><strong>Single Pass (Single-Use) Systems:</strong> Fresh cleaning solution is introduced for each cleaning cycle and then disposed to drain. This approach is simpler and requires lower initial investment but consumes more water and chemicals.</p>
                <p><strong>Recirculation Systems:</strong> Cleaning solutions are mixed in external tanks and recirculated through the equipment for the duration of the cleaning cycle, topped up as required. These require greater initial investment but use significantly less water and cleaning chemicals — 30-50% savings typical. Environmentally and economically more efficient.</p>
                <p><strong>Multi-Circuit Recirculation Systems:</strong> Advanced systems where a single CIP station serves multiple circuits (tanks, lines, heat exchangers) in sequence. Standard in modern large-scale dairy plants.</p>

                <h4 class="font-bold mt-4">Milk Stone (Dairy Scale):</h4>
                <p>Milk stone is an accumulation of dried milk solids and salts resulting from hot water and detergent contact. It is a stubborn deposit that firmly adheres to equipment surfaces and cannot be removed by ordinary cleaning.</p>
                <p><strong>Formation Mechanism:</strong> When milk is heated (during pasteurization or evaporation), calcium phosphate (Ca₃(PO₄)₂) solubility decreases and it precipitates. Simultaneously, whey proteins (especially β-lactoglobulin) denature under heat and adsorb to surfaces. These denatured proteins form complexes with calcium phosphate, creating a tightly bound layer.</p>
                <p><strong>Composition:</strong> 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% protein; 42-67% ash (primarily calcium phosphate, calcium carbonate, and magnesium salts).</p>
                <p><strong>Why It Matters:</strong> Milk stone not only impairs cleaning but also creates microbial harborage. Bacteria and biofilms hide within this porous layer and survive sanitization, increasing the risk of product contamination.</p>

                <h4 class="font-bold mt-4">Biofilm: The Hidden Hazard</h4>
                <p>A biofilm is a structured community of microorganisms attached to a surface and embedded within a self-produced extracellular polymeric substances (EPS) matrix. In dairy equipment, organisms such as <em>Bacillus cereus, Listeria monocytogenes, Pseudomonas,</em> and <em>Staphylococcus</em> form biofilms.</p>
                <p>Biofilm bacteria can be up to 1000× more resistant to sanitizers than planktonic (free-floating) bacteria. Adequate mechanical action and chemical cleaning are therefore critical for biofilm removal — this is precisely why CIP system design and operation are so important. Inadequate flow velocity or chemical concentration can leave biofilms intact.</p>
            `
        },

        cip_cycle: {
            title: "Standard CIP Cleaning Cycle — The Science Behind Each Step",
            intro: "A typical CIP cycle consists of the following steps in sequence. Each step serves a specific scientific purpose, and altering the sequence significantly reduces cleaning effectiveness:",
            steps: [
                {
                    title: "1. Pre-Rinse — 'Soil Load Reduction'",
                    colorClass: "bg-blue-100 border-blue-300",
                    details: `<p><strong>Purpose:</strong> Remove the bulk of loose soil and milk residues to optimize chemical effectiveness and reduce cost.</p>
                    <p><strong>Process:</strong> Flush with lukewarm water (35-50°C) for 5-15 minutes. Flow velocity should be ≥1.5 m/s.</p>
                    <p><strong>The Science — Temperature is Critical:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li><strong>If water is too cold (&lt;30°C):</strong> Milk fat solidifies, adhering to surfaces and making removal difficult.</li>
                      <li><strong>If water is too hot (&gt;60°C):</strong> Whey proteins (β-lactoglobulin, α-lactalbumin) irreversibly denature and covalently bind to stainless steel surfaces — extremely difficult to remove and requiring significantly more alkali.</li>
                      <li><strong>Optimal 35-50°C:</strong> Fat remains in liquid state (easily rinseable) while proteins have not yet denatured. Typically removes &gt;90% of bulk soil.</li>
                    </ul>
                    <p><strong>Economic Principle:</strong> The more soil removed in the pre-rinse, the less chemical required in subsequent steps. One gallon of milk residue can require a significant amount of NaOH to neutralize — skipping this step is a costly mistake.</p>`
                },
                {
                    title: "2. Alkali Wash — 'Fat and Protein Digestion'",
                    colorClass: "bg-orange-100 border-orange-300",
                    details: `<p><strong>Purpose:</strong> Chemically digest and remove fat- and protein-based deposits from equipment surfaces.</p>
                    <p><strong>Process:</strong> Circulate 0.5-2.0% caustic soda (NaOH) solution at 70-85°C for 15-30 minutes at flow velocity ≥1.5 m/s (turbulent flow, Re &gt;31,000).</p>
                    <p><strong>Three Major Chemical Reactions:</strong></p>
                    <p><strong>1. Saponification (Fat Removal):</strong><br/>
                    Triglycerides react with NaOH to form glycerol and water-soluble fatty acid salts (soaps):<br/>
                    <code>Fat (Triglyceride) + 3 NaOH → Glycerol + 3 Sodium Fatty Acid Salts (Soap)</code><br/>
                    These soaps are water-soluble and easily rinsed away. The elevated temperature dramatically accelerates this reaction (per the Arrhenius equation, each 10°C increase approximately doubles the reaction rate).</p>
                    <p><strong>2. Protein Hydrolysis:</strong><br/>
                    NaOH cleaves peptide bonds in proteins, converting them into smaller, soluble peptides and amino acids:<br/>
                    <code>Protein (large) + NaOH + H₂O → Smaller Peptides + Amino Acids</code><br/>
                    This process is slower than saponification, necessitating adequate contact time (15-30 min).</p>
                    <p><strong>3. Emulsification:</strong><br/>
                    Alkali generates soap, which acts as a natural surfactant to emulsify any remaining fat particles into suspension.</p>
                    <p><strong>The Role of Turbulent Flow (Reynolds Number):</strong><br/>
                    Re = (ρ × v × D) / μ. When Re &gt;31,000, flow is turbulent, generating continuous mechanical scrubbing that complements chemical action and dramatically improves cleaning efficiency.</p>`
                },
                {
                    title: "3. Intermediate Rinse — 'Chemical Transition'",
                    colorClass: "bg-gray-100 border-gray-300",
                    details: `<p><strong>Purpose:</strong> Completely remove alkaline detergent residues and prepare the surface for acid washing.</p>
                    <p><strong>Process:</strong> Rinse with warm potable water (45-55°C) for 5-10 minutes. Monitor drain water pH — should reach 7-8 before proceeding.</p>
                    <p><strong>Why This Step Is Mandatory:</strong></p>
                    <p>If alkali residues remain when acid wash is applied, a neutralization reaction occurs:<br/>
                    <code>NaOH + HNO₃ → NaNO₃ + H₂O</code><br/>
                    The acid is consumed neutralizing the alkali rather than dissolving milk stone, effectively reducing its concentration and rendering the acid wash inadequate. This also results in unnecessary chemical waste.</p>
                    <p>Continuous pH monitoring is highly recommended — modern automated CIP systems incorporate pH probes and conductivity sensors to confirm complete rinse and avoid this problem.</p>`
                },
                {
                    title: "4. Acid Wash — 'Mineral Descaling'",
                    colorClass: "bg-yellow-100 border-yellow-300",
                    details: `<p><strong>Purpose:</strong> Chemically dissolve milk stone and other mineral deposits (calcium and magnesium phosphates, carbonates) that are insoluble in alkali.</p>
                    <p><strong>Process:</strong> Circulate 0.5-1.5% HNO₃ or H₃PO₄ solution at 60-75°C for 10-20 minutes.</p>
                    <p><strong>Mineral Dissolution Chemistry:</strong><br/>
                    <code>Ca₃(PO₄)₂ + 4HNO₃ → 3Ca(NO₃)₂ + 2H₃PO₄</code><br/>
                    (Insoluble calcium phosphate → Soluble calcium nitrate + Phosphoric acid)<br/>
                    <code>CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂↑</code><br/>
                    (Insoluble calcium carbonate → Soluble salt + Water + Gas)</p>
                    <p><strong>Acid Comparison:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li><strong>Nitric Acid (HNO₃):</strong> Strong, excellent descaler, mild sanitizing properties, passivates stainless steel</li>
                      <li><strong>Phosphoric Acid (H₃PO₄):</strong> Moderate strength, less corrosive, excellent passivating agent</li>
                      <li><strong>Citric Acid:</strong> Mild, food-grade, environmentally friendly, good chelating agent, but less powerful</li>
                      <li><strong>Hydrochloric Acid (HCl):</strong> Very strong, effective descaler but can corrode stainless steel — limited use</li>
                    </ul>
                    <p><strong>Passivation:</strong> Nitric and phosphoric acids passivate stainless steel by forming a thin chromium oxide (Cr₂O₃) protective layer, which resists future corrosion — a beneficial side effect of acid washing.</p>`
                },
                {
                    title: "5. Final Rinse — 'Chemical Clearance'",
                    colorClass: "bg-blue-100 border-blue-300",
                    details: `<p><strong>Purpose:</strong> Remove all acid residues and return the surface to a chemically neutral state prior to production or sanitization.</p>
                    <p><strong>Process:</strong> Rinse with cold potable water (15-25°C) until drain water reaches pH 6.5-7.5.</p>
                    <p><strong>Rinse Water Quality Matters:</strong></p>
                    <p>Hard water used in the final rinse can deposit calcium and magnesium minerals onto the newly cleaned surface, forming a thin new scale layer. Soft water or RO water (hardness &lt;180 mg/L CaCO₃ equivalent) is ideal for final rinsing.</p>
                    <p>Both pH and conductivity of the final rinse water should be monitored. Conductivity &lt;100 μS/cm confirms successful chemical removal.</p>`
                },
                {
                    title: "6. Sanitization/Disinfection — 'Microbial Kill'",
                    colorClass: "bg-green-100 border-green-300",
                    details: `<p><strong>Purpose:</strong> Eliminate remaining microorganisms immediately before production to ensure product safety.</p>
                    <p><strong>Options:</strong></p>
                    <p><strong>A) Thermal Sanitization:</strong><br/>
                    Circulate hot water at 85-95°C for 10-15 minutes. Most effective, leaves no chemical residue, but energy-intensive.</p>
                    <p><strong>B) Chemical Sanitization:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li><strong>Chlorine (Sodium Hypochlorite):</strong> 150-200 ppm, 2-5 min contact time. Hypochlorous acid (HOCl) damages bacterial cell membranes and inhibits enzyme systems. Most effective at pH 6-7. Rinse required (&lt;2 ppm residue acceptable on food contact surfaces).</li>
                      <li><strong>Peracetic Acid (PAA):</strong> 80-200 ppm, highly effective including against spores. Strong oxidizing agent — damages DNA, proteins, and cell membranes. Decomposes to acetic acid + H₂O — environmentally friendly. Effective even at low temperatures.</li>
                      <li><strong>Iodophors:</strong> 12.5-25 ppm iodine. Broad-spectrum, mild. Can cause surface staining.</li>
                      <li><strong>Quaternary Ammonium Compounds (QACs):</strong> Cationic surfactants disrupting cell membranes. Persistent residual activity; less effective against gram-negative bacteria.</li>
                    </ul>
                    <p><strong>D-value and Z-value — Measuring Thermal Kill:</strong><br/>
                    D-value (Decimal Reduction Time) = Time to kill 90% of target organisms at a specific temperature.<br/>
                    Z-value = Temperature change required to alter D-value by 10-fold.<br/>
                    Example: <em>Listeria monocytogenes</em> D₇₀°C ≈ 0.1 second — killed very rapidly at 70°C.</p>`
                }
            ]
        },

        chemicals: {
            title: "Chemicals Used in CIP — Complete Scientific Guide",
            intro: "Various types of chemicals are used in the CIP process, each with a specific chemical mechanism and application range:",
            types: [
                {
                    title: "Alkaline Detergents",
                    details: `<p><strong>Examples:</strong> Caustic soda (NaOH), sodium carbonate (Na₂CO₃), sodium metasilicate, sodium sesquicarbonate.</p>
                    <p><strong>Mechanism:</strong> (a) Saponification — converts fat to soluble soap; (b) Protein Hydrolysis — cleaves peptide bonds, generating soluble peptides; (c) Emulsification — residual fat particles suspended in water via soap micelles.</p>
                    <p><strong>pH Range:</strong> pH 11-14 (highly alkaline). Monitor with pH meter or conductivity.</p>
                    <p><strong>Concentration Guide:</strong> General cleaning: 0.5-1.0% NaOH; Heavy soil: 1.5-2.0% NaOH; Glass bottle washing: 1.5-2.0%.</p>
                    <p><strong>Precautions:</strong> NaOH is highly corrosive — PPE (gloves, goggles, apron) is mandatory. In hard water, NaOH can precipitate CaCO₃; sequestrants should be added to prevent this.</p>`
                },
                {
                    title: "Acid Detergents",
                    details: `<p><strong>Examples:</strong> Nitric acid (HNO₃), phosphoric acid (H₃PO₄), citric acid, gluconic acid, hydrochloric acid (HCl — limited application).</p>
                    <p><strong>Mechanism:</strong> Dissolve calcium, magnesium, and iron mineral scale into soluble compounds. Chelating acids (citric, gluconic) also complex metal ions in solution.</p>
                    <p><strong>pH Range:</strong> pH 1-4 (acidic). HNO₃ and H₃PO₄ are most common in dairy CIP.</p>
                    <p><strong>Frequency Recommendation:</strong> Alkali wash daily; Acid wash every alternate day or weekly depending on water hardness and processing volume.</p>`
                },
                {
                    title: "Sanitizers",
                    details: `<p><strong>Examples:</strong> Chlorine compounds (NaOCl), peracetic acid (PAA), iodophors, QACs, hot water (&gt;85°C).</p>
                    <p><strong>Efficacy Standard:</strong> An effective sanitizer should achieve ≥5 log reduction (99.999%) against target pathogens.</p>
                    <p><strong>Selecting the Right Sanitizer:</strong></p>
                    <ul class="list-disc list-inside mt-1">
                      <li>Hot water — No residue, energy-intensive, best for aseptic systems</li>
                      <li>Chlorine — Cost-effective, but corrosive at high concentrations; pH-dependent activity</li>
                      <li>PAA — Broad spectrum, effective against spores, minimal rinse required at low concentrations</li>
                      <li>QAC — Persistent activity, no rinse needed, but not effective against spores</li>
                    </ul>`
                },
                {
                    title: "Sequestrants and Chelating Agents",
                    details: `<p><strong>Examples:</strong> EDTA (ethylenediaminetetraacetic acid), NTA, STPP (sodium tripolyphosphate), gluconate.</p>
                    <p><strong>Why They Are Necessary:</strong> In hard water, Ca²⁺ and Mg²⁺ ions reduce cleaning effectiveness by forming insoluble precipitates with NaOH and inhibiting surfactant activity. Sequestrants chelate (cage) these metal ions, keeping them soluble in solution.</p>
                    <p><strong>Chemistry:</strong> EDTA is a hexadentate ligand forming a 1:1 complex with Ca²⁺:<br/>
                    <code>Ca²⁺ + EDTA⁴⁻ → [Ca-EDTA]²⁻ (stable, soluble complex)</code></p>`
                },
                {
                    title: "Surfactants (Surface-Active Agents)",
                    details: `<p><strong>Types:</strong> Anionic (LABSA, SDS), Non-ionic (ethoxylates), Cationic (QACs), Amphoteric.</p>
                    <p><strong>Mechanism — Critical Micelle Concentration (CMC):</strong> Surfactant molecules have a hydrophilic head and hydrophobic tail. Above the CMC, molecules form micelles — hydrophobic tails inward, hydrophilic heads outward — that encapsulate fat particles and emulsify them into water.</p>
                    <p><strong>HLB Value (Hydrophilic-Lipophilic Balance):</strong> Surfactants with HLB 8-18 are best for oil-in-water emulsification — preferred for dairy CIP applications.</p>`
                }
            ]
        },

        cleaning_procedures: {
            title: "Cleaning Procedures for Specific Equipment",
            sections: [
                {
                    title: "Cleaning of Milk Cans",
                    content: `
                        <p>Raw milk received in aluminium cans at the dairy reception dock may be cleaned and sanitized using manual or mechanical washing depending on the number of cans received daily.</p>
                        <p><strong>Material Science Note:</strong> Aluminium cans can be damaged by strong alkali (&gt;2% NaOH) due to the reaction: <code>2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑</code>. Therefore, sodium metasilicate-based alkaline detergents are preferred for aluminium — metasilicate acts as a corrosion inhibitor.</p>
                        <h5 class="font-bold mt-2">Manual Washing:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Immediately after emptying, rinse cans with tap water and remove loosely held soil from inside with a brush.</li>
                            <li>Soak in pre-prepared detergent solution at 50°C (1% sodium hexametaphosphate, trisodium phosphate, sodium carbonate, teepol) for minimum 5 minutes.</li>
                            <li>Thoroughly brush the interior with hot detergent solution, paying special attention to the base and seam areas.</li>
                            <li>Rinse cans with hot water until detergent traces are removed.</li>
                            <li>Steam cans with lid (100°C steam, 2-3 min) and store inverted on draining rack.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Mechanical Washing (Rotary or Tunnel Type Washer):</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Charge the detergent tank to 0.5% alkalinity. Verify alkalinity daily by qualitative test.</li>
                            <li>Open water and steam valves on the mechanical washer and start motors and pumps.</li>
                            <li>Load cans and lids into their respective carriageways in the correct (inverted) orientation for proper drainage.</li>
                            <li>Maintain jet pressure at 15 psi and temperatures: pre-rinsing (40°C), detergent wash (75°C), hot water wash (85°C).</li>
                            <li>Steaming and hot water blast pressure maintained at 20 psi and temperatures at 120°C and 125°C respectively — sufficient to destroy dairy pathogens.</li>
                            <li>Unload cans and lids at outlet and store on rack, inverted for gravity drainage.</li>
                            <li>Check detergent solution strength at the start and end of each operation using qualitative or quantitative tests.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of Cream Separators/Clarifiers",
                    content: `
                        <p>Cream separators are high-speed centrifuges (6,000-10,000 RPM). During operation, the heavier components of milk (proteins, minerals, somatic cells) collect at the bowl periphery under centrifugal force — this is 'separator slime' or 'centrifuge sludge'. Regular removal is essential because:</p>
                        <ul class="list-disc list-inside mt-1 mb-2">
                          <li>Slime accumulation disrupts bowl balance, increasing vibration</li>
                          <li>Slime provides an excellent microbial growth medium</li>
                          <li>Thick slime layers reduce separation efficiency</li>
                        </ul>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>After the day's operation, carefully remove the bowl from the main machine.</li>
                            <li>Methodically dismantle the bowl and remove the disc stack, maintaining the numbered sequence — exact reassembly is critical for rotational balance.</li>
                            <li>Remove separator slime from the bowl periphery with a rubber scraper. Slime composition: ~40% proteins, ~30% fat, ~20% minerals, ~10% somatic cells.</li>
                            <li>Clean each disc with warm (50-60°C) alkaline detergent solution (0.5% NaOH or specialized separator cleaner) using a soft brush, giving special attention to disc channels and holes.</li>
                            <li>If mineral scale is a recurring problem, apply a dilute citric acid rinse (0.3%) to chelate and dissolve mineral deposits.</li>
                            <li>Rinse all parts with lukewarm water and allow to drain. Use quality rinse water — minimize mineral redeposition.</li>
                            <li>After drying, reassemble in numbered sequence and sanitize before use.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of Plate Heat Exchangers (PHE)",
                    content: `
                        <p><strong>PHE Design and Fouling Mechanism:</strong> PHEs use corrugated stainless steel plates creating thin channels. Milk flows on one side, heating/cooling medium on the other. High heat transfer areas create ideal fouling conditions:</p>
                        <ul class="list-disc list-inside mt-1 mb-2">
                          <li><strong>Type A Fouling (Pasteurization section, 70-110°C):</strong> Primarily β-lactoglobulin denaturation producing a protein layer</li>
                          <li><strong>Type B Fouling (High-temperature section, &gt;110°C):</strong> Calcium phosphate-dominant mineral scale</li>
                        </ul>
                        <h5 class="font-bold mt-2">Daily CIP Cleaning:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Pre-rinse with lukewarm water (40-50°C) for minimum 10 minutes to remove film and loose deposits.</li>
                            <li>Circulate 1.0-1.5% alkaline detergent (NaOH-based) at 75-85°C for 20-30 minutes using alternating forward/backward flow to ensure even coverage.</li>
                            <li>Intermediate rinse to remove alkali (confirm pH neutrality by monitoring).</li>
                            <li>Circulate 0.8-1.2% nitric or phosphoric acid solution at 65-75°C for 20-30 minutes.</li>
                            <li>Rinse with hot water (40-50°C) then cold potable water until pH 6.5-7.5 confirmed.</li>
                            <li>Before production, circulate sanitizer solution (PAA 150 ppm or hot water at 90°C).</li>
                        </ol>
                        <h5 class="font-bold mt-2">Periodic Manual Cleaning:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Open the PHE carefully using a cross-pattern bolt-loosening sequence for even pressure release.</li>
                            <li>Inspect rubber gaskets for swelling, cracking, hardening, or loss of adhesion. Replace any defective gaskets immediately — leakage risks cross-contamination.</li>
                            <li>Inspect each plate individually and remove scale by scrubbing with a soft brush and detergent solution. Never use metal brushes — scratching the plate surface worsens future fouling.</li>
                            <li>Check for pitting or erosion on plate surfaces — signs that plate replacement is needed.</li>
                            <li>Thoroughly rinse plates with tap water to remove all detergent traces.</li>
                            <li>Reassemble following the manufacturer's plate sequence and orientation instructions.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of Milk Storage Tanks",
                    content: `
                        <p>Milk storage tanks include agitators, temperature sensors, spray devices, and manholes — all components require attention during cleaning.</p>
                        <p><strong>Key Challenge:</strong> Achieving proper spray coverage in large-volume tanks is difficult. Rotating spray heads (spray balls) ensure even distribution but require their own cleaning — 'shadow areas' not reached by spray can become contamination zones.</p>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>After emptying, open the drain valve fully and allow complete drainage.</li>
                            <li>Pre-rinse using a pressurized rotating spray head (minimum 5 bar) with lukewarm water for minimum 10 minutes, continuing until drainage runs clear.</li>
                            <li>Close drain valve. Pump alkaline detergent solution (1-1.5% NaOH, 75-80°C) through the spray system. Minimum 30 minutes recirculation — larger tanks require longer times.</li>
                            <li>Open drain valve and allow detergent to drain. Check detergent concentration — if significantly diluted, replace or top up.</li>
                            <li>Warm water intermediate rinse, followed by acid wash (0.5-1% H₃PO₄, 65°C, 20 min) on a weekly basis for mineral scale control.</li>
                            <li>Final rinse with cold potable water until pH is neutral.</li>
                            <li>Sanitize using steam (100°C, 20 min — most preferred, no residue) or chlorinated water (150-200 ppm chlorine, 15 min contact).</li>
                            <li>Individually inspect and clean agitator blades, temperature probes, manhole seals, and outlet valves.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of HTST Pasteurizer",
                    content: `
                        <p>Pasteurizers are the most critical equipment in dairy processing — inadequate cleaning directly compromises product safety. HTST (High Temperature Short Time: 72°C/15 sec) is the industry standard for fluid milk pasteurization.</p>
                        <p><strong>CIP Sequence for HTST Pasteurizer:</strong></p>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li><strong>Water Displacement:</strong> At end of production, displace milk from the system with lukewarm water until the outlet runs clear. This water can be collected separately (still contains residual milk value).</li>
                            <li><strong>Caustic CIP (80-85°C, 0.8-1.2% NaOH, 30 min):</strong> Circulate alkaline solution through the complete HTST circuit — balance tank, PHE (regeneration, heating, cooling sections), holding tube, flow diversion valve.</li>
                            <li><strong>Intermediate Water Rinse:</strong> Monitor conductivity to confirm complete alkali removal before acid wash.</li>
                            <li><strong>Acid CIP (65-70°C, 0.8% HNO₃, 20 min):</strong> Remove mineral scale, particularly heavy in the pasteurization section.</li>
                            <li><strong>Final Water Rinse and pH Check.</strong></li>
                            <li><strong>Pre-production Sanitization:</strong> Hot water (95°C) or PAA (200 ppm) for minimum 15 minutes.</li>
                        </ol>
                        <p><strong>Flow Diversion Valve (FDV) — Critical Safety Device:</strong> The FDV diverts under-pasteurized milk back for reprocessing. FDV valve seats and seals must be visually inspected after each CIP — any wear means immediate replacement. FDV failure = raw milk bypassing pasteurizer = immediate public health risk.</p>
                    `
                },
                {
                    title: "Cleaning of Pipelines and Valves",
                    content: `
                        <p>Dairy plants contain extensive stainless steel piping. 'Dead legs' — sections where flow does not occur — are a major concern, as cleaning solutions cannot achieve adequate contact time in these areas and microbial contamination can persist.</p>
                        <p><strong>Engineering Standard:</strong> Dead leg L:D ratio (length to diameter) should be &lt;2:1 (3-A Sanitary Standards). Higher L:D = inadequate cleaning = contamination risk.</p>
                        <p><strong>Valve Cleanability:</strong></p>
                        <ul class="list-disc list-inside mt-1 mb-2">
                          <li><strong>Double Seat Mix-Proof Valves:</strong> Ideal for aseptic processing — leakage detectable, CIP-able in both seated positions</li>
                          <li><strong>Butterfly Valves:</strong> Simple and CIP-able, but disc edge creates a shadow zone</li>
                          <li><strong>Ball Valves:</strong> Generally NOT recommended for inline CIP — ball interior is difficult to clean adequately</li>
                        </ul>
                        <p><strong>CIP Requirements for Pipelines:</strong></p>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                            <li>Minimum flow velocity ≥1.5 m/s for turbulent flow (preferably ≥2.5 m/s in larger pipes).</li>
                            <li>All valves must be fully open during CIP to ensure complete coverage.</li>
                            <li>Pipe system slope must be adequate (minimum 1:100) for complete gravity drainage — standing water enables bacterial growth.</li>
                            <li>Temperature, concentration, time, and flow rate (TACT principle) must all be monitored and logged.</li>
                        </ol>
                    `
                }
            ]
        },

        teepol_detergent: {
            title: "Making and Testing Liquid Detergent",
            htmlContent: `
                <p>Neutral liquid detergents (like Teepol) are widely used in the dairy and food industry for manual cleaning of utensils and small equipment. 'Teepol' was originally a Shell Chemicals brand — the term is now used generically for liquid dishwashing detergents.</p>
                
                <h4 class="font-bold mt-4">Detergent Chemistry — Fundamentals</h4>
                <p>LABSA (Linear Alkylbenzene Sulfonic Acid) is an anionic surfactant and the most widely used commercial surfactant globally. Its structure: Alkyl chain (C10-C13) + Benzene ring + Sulfonic acid group. It is highly effective at detaching dirt and fat from surfaces and emulsifying them into water.</p>
                <p>Neutralization reaction: <code>LABSA + NaOH → Sodium Linear Alkylbenzene Sulfonate (SLAS) + H₂O</code></p>
                <p>In this neutralized form (sodium salt), the surfactant is freely water-soluble and achieves maximum cleaning effectiveness. Incomplete neutralization (pH &lt;7) leaves the product acidic; incomplete neutralization (pH &gt;8) leaves excess alkali that can cause skin irritation and leave residue on food-contact surfaces.</p>

                <h4 class="font-bold mt-4">1. How to Make a General Purpose Liquid Detergent (1000 Litre Batch):</h4>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Soft Water</td><td class="p-2 border-b">820-840 Kg</td><td class="p-2 border-b">82-84%</td><td class="p-2 border-b">Main solvent — soft water preferred (add EDTA for hard water)</td></tr>
                <tr><td class="p-2 border-b">Acid Slurry (LABSA 90%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main cleaning agent (anionic surfactant) — ~90 Kg active matter</td></tr>
                <tr><td class="p-2 border-b">Caustic Soda (NaOH flakes, 98%)</td><td class="p-2 border-b">~15 Kg</td><td class="p-2 border-b">~1.5%</td><td class="p-2 border-b">Neutralizes LABSA — target pH 6.5-7.5</td></tr>
                <tr><td class="p-2 border-b">Urea or Common Salt (NaCl)</td><td class="p-2 border-b">20-40 Kg</td><td class="p-2 border-b">2-4%</td><td class="p-2 border-b">Viscosity builder — increases ionic strength, tightens micelle structure</td></tr>
                <tr><td class="p-2 border-b">Preservative (Kathon CG)</td><td class="p-2 border-b">0.1-0.2 Kg</td><td class="p-2 border-b">0.01-0.02%</td><td class="p-2 border-b">Extends shelf life — prevents microbial growth in the product</td></tr>
                <tr><td class="p-2 border-b">Color &amp; Perfume</td><td class="p-2 border-b">As required</td><td class="p-2 border-b">-</td><td class="p-2 border-b">Aesthetics only</td></tr>
                <tr class="bg-muted"><td class="p-2 font-bold">Total</td><td class="p-2 font-bold">~1000 Kg</td><td class="p-2 font-bold">100%</td><td class="p-2 font-bold"></td></tr>
                </tbody></table></div>
                <p class="font-semibold">Process (Critical Steps):</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>Add water to a large SS/HDPE tank. Start agitator (100-150 RPM).</li>
                    <li>Add LABSA slowly as a thin stream while continuously stirring. An exothermic reaction generates mild heat.</li>
                    <li>Separately dissolve NaOH flakes in cold water (CAUTION: Highly exothermic — solution can reach 80-90°C. PPE MANDATORY — acid-resistant gloves, face shield).</li>
                    <li>When the NaOH solution has cooled to 30-40°C, add it slowly to the LABSA mixture while monitoring pH continuously. Target pH: 6.5-7.5. If pH rises too high, add a small amount of LABSA; if too low, add a small amount of NaOH solution.</li>
                    <li>Add salt/urea and stir — viscosity will gradually increase. Adjust amount to achieve desired viscosity (200-500 cP).</li>
                    <li>After cooling, add color and perfume. Conduct final pH and viscosity checks before bottling.</li>
                </ol>

                <h4 class="font-bold mt-6">2. How to Make an Acidic Cleaner (Milk Stone Remover, 1000 Litre Batch):</h4>
                <p><strong>⚠️ Warning: Always wear full PPE — acid-resistant gloves, face shield, and apron. Golden Rule: "Add acid to water, NEVER water to acid" — the dilution exotherm can cause explosive spattering.</strong></p>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Cold Water (FIRST)</td><td class="p-2 border-b">880 Kg</td><td class="p-2 border-b">88%</td><td class="p-2 border-b">Solvent — ALWAYS ADD FIRST</td></tr>
                <tr><td class="p-2 border-b">Phosphoric Acid (85%)</td><td class="p-2 border-b">80 Kg</td><td class="p-2 border-b">~8%</td><td class="p-2 border-b">Descaling agent — milder than HCl, passivates stainless steel</td></tr>
                <tr><td class="p-2 border-b">Non-ionic Surfactant (Nonoxynol)</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Wetting agent — improves penetration into scale</td></tr>
                <tr><td class="p-2 border-b">Citric Acid</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Chelating agent — complexes Ca²⁺ and Mg²⁺ ions</td></tr>
                </tbody></table></div>

                <h4 class="font-bold mt-6">3. Liquid Detergent Quality Tests:</h4>
                <p><strong>A) Active Matter % (Two-Phase Titration — ASTM Method):</strong></p>
                <p>This method precisely measures the anionic surfactant (LABSA/SLAS) percentage. A cationic titrant (Hyamine 1622) forms an ion-pair complex with the anionic surfactant; the mixed indicator (disulfine blue + dimidium bromide) undergoes a color change in the dichloromethane phase at the endpoint. This is a laboratory procedure requiring specialized chemicals and expertise.</p>
                <p><strong>B) pH Test (Simple, Routine):</strong><br/>
                Use pH meter or pH paper. Acceptable range for neutral detergent: 6.5-7.5.<br/>
                pH &lt;6 = Over-acidic = Incomplete neutralization — skin-irritating<br/>
                pH &gt;8 = Over-alkaline = Excess NaOH — may leave residue on food-contact surfaces</p>
                <p><strong>C) Viscosity Test (Ford Cup Method):</strong><br/>
                Use Ford Cup (B4, 4mm orifice) and measure flow time. Standard liquid dishwash: 30-120 seconds at 25°C. Low viscosity = product perceived as low quality by consumers.</p>
                <p><strong>D) Foam Test:</strong><br/>
                Vigourously shake 50 ml sample in a stoppered flask for 30 seconds. Measure foam height immediately. Note: foam is a consumer perception indicator only — wetting action (not foam volume) actually cleans.</p>
            `
        },

        sip: {
            title: "SIP (Sterilization-In-Place) — Complete Technical Guide",
            intro: "Sterilization-in-place (SIP) refers to a continuous commercial-scale operation where equipment and piping are sterilized in situ without disassembly. It is essential for the production of aseptic dairy products (UHT milk, sterile cream). SIP systems are highly sophisticated in terms of design, installation, and operation, requiring highly qualified personnel.",
            process: `
                <h5 class="font-bold mt-2">SIP vs CIP — Key Distinction:</h5>
                <p>CIP performs <em>cleaning</em> (soil removal + significant microbial reduction). SIP performs <em>sterilization</em> — destroying all viable organisms including bacterial spores. SIP is always performed <em>after</em> CIP — it can only achieve sterility on an already-clean surface.</p>
                <p><strong>F-value and Sterilization Efficacy:</strong><br/>
                F₀ value (equivalent time at 121.1°C) quantifies the "lethality dose" of sterilization:<br/>
                <code>F₀ = D₁₂₁ × (log N₀ - log N)</code><br/>
                Aseptic dairy processing typically requires F₀ ≥ 6 min (6-log reduction of the most resistant spore-formers).</p>
                
                <h5 class="font-bold mt-2">SIP Process (Steam Sterilization):</h5>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li><strong>Pre-sterilization Flush:</strong> System is flushed with clean potable water to remove any loose particles.</li>
                    <li><strong>Air Removal (Critical Step):</strong> Steam under pressure is passed through the entire installation. Air pockets are a major hazard — air is a poor heat conductor, and an air-steam mixture reduces the steam's partial pressure, lowering the effective temperature. Air is vented through bacteriological-filter-protected vents.</li>
                    <li><strong>Temperature Equilibration:</strong> Continuous steam venting from all vents confirms air replacement. The most remote (coldest) point in the system must also reach the target temperature before timing begins.</li>
                    <li><strong>Pressure Hold:</strong> Vents are closed, allowing steam pressure to build to a predetermined level — typically 121°C (1 bar gauge pressure) for 15-20 minutes.</li>
                    <li><strong>Cool-Down Under Sterile Conditions:</strong> After steam release, the system is maintained under positive pressure with sterile-filtered air or nitrogen to prevent outside air contamination.</li>
                    <li><strong>Sterility Maintenance:</strong> The system remains under sterile positive pressure until aseptic filling commences.</li>
                </ol>
                
                <h5 class="font-bold mt-2">SIP Validation:</h5>
                <p>SIP processes are validated using biological indicators (BIs) — typically <em>Geobacillus stearothermophilus</em> spores (D₁₂₁ ≈ 1.5-3 min, the most heat-resistant standard non-pathogenic spore-former). Destruction of BIs confirms process adequacy.</p>
                <p>Temperature and pressure data are continuously logged — digital records are essential for regulatory compliance (FDA 21 CFR, EU 853/2004).</p>
            `
        },

        advantages: {
            title: "Advantages of CIP — Economic and Scientific Perspective",
            list: [
                "Guaranteed and repeatable quality assurance — automation eliminates the human error that is common in manual cleaning operations.",
                "Complete data logging for quality assurance — temperature, concentration, flow rate, and time are digitally recorded for regulatory audits and HACCP documentation.",
                "Reduction in cleaning costs by recycling cleaning solutions — recirculation systems typically achieve 30-50% chemical savings versus manual cleaning.",
                "Possibility to clean inaccessible areas — spray devices and turbulent flow can clean areas unreachable by manual brushing.",
                "Improved worker safety — workers are protected from direct handling of concentrated acids and alkalis; automated systems minimize hazardous chemical exposure.",
                "Reduced production downtime — automated CIP allows parallel operations; other preparations can proceed during the cleaning cycle.",
                "Reduction in labour requirements — a single automated CIP system can perform the work of 2-3 manual cleaning operators.",
                "More effective use and control of cleaning materials — precise dosing ensures correct concentrations, preventing both under- and over-concentration.",
                "Reduction in water consumption — optimized CIP rinse cycles reduce water waste by 40-60% versus manual cleaning.",
                "Improved product quality and shelf life — properly cleaned equipment minimizes microbial contamination, extending shelf life and reducing product defects.",
                "Environmental compliance — reduced chemical discharge concentrations and lower water usage help meet environmental regulations for effluent discharge."
            ]
        },

        solution_strength: {
            title: "Testing of CIP Solution Strength — Complete Methods",
            intro: "Maintaining proper CIP solution strength is critical for efficient cleaning and microbial control. Under-strength = inadequate cleaning; over-strength = chemical waste + corrosion risk + safety hazard.",

            alkalinity_test: {
                title: "Determining the Strength of Washing Solution (Alkalinity Test)",
                content: `
                    <p>Alkalinity measurement quantifies the strength of the CIP alkali wash solution. Expression in terms of NaOH equivalents is convenient since NaOH is the most common alkali, and other alkalis (sodium carbonate, metasilicate) can also be expressed as NaOH equivalents.</p>
                    <p><strong>Standard References:</strong> 1.5% NaOH equivalent for glass bottles; 0.5% NaOH equivalent for can washing. Solutions weaken over time through repeated use and dilution — regular testing is mandatory.</p>
                    
                    <h5 class="font-bold mt-4">Requirements:</h5>
                    <p>Conical flasks (100 ml, 250 ml), calibrated pipettes (5 ml, 10 ml, 50 ml), burette (50 ml, 0.1 ml graduation), volumetric flask (250 ml), 2.5 N sulphuric acid, 0.1 N sulphuric acid, N/10 HCl, phenolphthalein indicator (0.5% in 60% ethanol), methyl orange indicator (0.1% aqueous), pH meter for confirmation.</p>

                    <h5 class="font-bold mt-4">Qualitative Test (Field Test):</h5>
                    <p>Indicates only "adequate/inadequate" — does not provide exact concentration.</p>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Take 10 ml of detergent solution in a conical flask.</li>
                        <li>Add 12.5 ml of N/10 HCl and 5 drops of 0.5% phenolphthalein indicator. If mixture turns pink/red → alkalinity &gt;0.5% NaOH equivalent = ADEQUATE. If colourless → &lt;0.5% = INSUFFICIENT, replace solution.</li>
                    </ol>
                    <p><strong>Scientific Logic:</strong> 12.5 ml of N/10 HCl = 0.00125 equivalents HCl = exactly sufficient to neutralize 0.5% NaOH in 10 ml. If more alkali is present, excess remains unreacted after neutralization → phenolphthalein remains pink.</p>

                    <h5 class="font-bold mt-4">Quantitative Test — Direct Reading Method:</h5>
                    <p>Uses 2.5 N H₂SO₄ for a quick directly-readable result suitable for field use.</p>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Precisely measure 10 ml sample into a 100 ml conical flask (use calibrated pipette).</li>
                        <li>Add 2-3 drops of phenolphthalein indicator. Solution turns pink if alkaline.</li>
                        <li>Fill burette with 2.5 N H₂SO₄. Titrate slowly until pink colour completely disappears (colourless). Take care at the endpoint — a single drop can overshoot.</li>
                        <li>Record ml of acid used (e.g., 0.8 ml).</li>
                        <li><strong>Direct Reading:</strong> ml of 2.5 N H₂SO₄ used = % alkali as NaOH directly. Example: 0.8 ml used → 0.8% NaOH equivalent (adequate for can washing &gt;0.5%; insufficient for bottle washing &lt;1.5%).</li>
                    </ol>
                    <p><em>Why 2.5 N gives a direct reading?</em> 1 ml of 2.5 N H₂SO₄ = 0.1 g NaOH equivalent = 1% NaOH in 10 ml sample. This convenient factor is deliberately chosen for direct readability.</p>

                    <h5 class="font-bold mt-4">Laboratory Method (Double-Indicator, Precise):</h5>
                    <p>This method separately measures free caustic (NaOH) and total alkali (NaOH + Na₂CO₃ + NaHCO₃).</p>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Precisely transfer 5 ml of washing solution into a 250 ml volumetric flask. Make up to 250 ml with distilled water and mix thoroughly (invert 3-4 times).</li>
                        <li>Transfer 50 ml of this diluted solution to a 100 ml conical flask.</li>
                        <li>Add 2-3 drops of phenolphthalein indicator.</li>
                        <li>Titrate with 0.1 N H₂SO₄ until pink colour is exactly discharged (colourless). Record ml used as "A". (This measures NaOH + ½ Na₂CO₃)</li>
                        <li>Add 2-3 drops of methyl orange indicator (solution turns orange).</li>
                        <li>Continue titrating with 0.1 N H₂SO₄ until colour changes from orange to bright pink/red. Record additional ml used as "B". (This measures the remaining ½ Na₂CO₃ + NaHCO₃)</li>
                    </ol>
                    <p class="mt-2"><strong>Calculations:</strong><br/>
                    <code>% Free Caustic (NaOH) = (A - B) × 0.4</code><br/>
                    <code>% Total Alkali (as NaOH equivalent) = (A + B) × 0.4</code><br/>
                    <em>Derivation of factor 0.4:</em> 1 ml of 0.1 N H₂SO₄ = 0.004 g NaOH; titrating 50 ml from a 250 ml (5× dilution) solution of a 10 ml original sample: 0.004 × 5 × (100/10) × (1/0.1) converts to 0.4%/ml. The dilution factor is mathematically embedded in the formula.</p>
                `
            },
            calculators: {
                error_title: "Error",
                success_title: "Calculated Successfully",
                error_invalid_titre: "Please enter a valid titre value.",
                naoh: {
                    title: "NaOH (%)",
                    description: "Titrate a 10 ml sample of CIP solution with 0.1 N acid (HCl or H₂SO₄) using phenolphthalein indicator. Endpoint: pink → colourless.",
                    label: "0.1 N Acid Used (ml)",
                    button: "Calculate NaOH %",
                    result_prefix: "Caustic Soda (NaOH):"
                },
                hno3: {
                    title: "HNO₃ (%)",
                    description: "Titrate a 10 ml sample of CIP acid solution with 0.1 N NaOH using phenolphthalein indicator. Endpoint: colourless → pink.",
                    label: "0.1 N Base Used (ml)",
                    button: "Calculate HNO₃ %",
                    result_prefix: "Nitric Acid (HNO₃):"
                },
                h3po4: {
                    title: "H₃PO₄ (%)",
                    description: "Titrate a 10 ml sample of CIP acid solution with 0.1 N NaOH. Note: Phosphoric acid is triprotic — phenolphthalein endpoint measures only the first proton.",
                    label: "0.1 N Base Used (ml)",
                    button: "Calculate H₃PO₄ %",
                    result_prefix: "Phosphoric Acid (H₃PO₄):"
                },
                chlorine: {
                    title: "Chlorine (ppm)",
                    description: "Titrate a 100 ml sample of CIP sanitizer solution using the iodometric method with 0.01 N sodium thiosulphate. Use starch indicator — endpoint: blue → colourless.",
                    label: "0.01 N Sodium Thiosulphate Used (ml)",
                    button: "Calculate Chlorine (ppm)",
                    result_prefix: "Available Chlorine:"
                }
            }
        },

        // NEW TOPICS
        haccp_monitoring: {
            title: "CIP and HACCP — Food Safety Management Integration",
            htmlContent: `
                <p>HACCP (Hazard Analysis and Critical Control Points) is a systematic preventive approach addressing biological, chemical, and physical hazards in food production. The CIP process is an integral component of every dairy HACCP plan.</p>
                
                <h4 class="font-bold mt-4">CIP-Related Critical Control Points (CCPs):</h4>
                <p><strong>CCP 1 — Pasteurization Temperature:</strong> Maintaining 72°C/15 sec (HTST) or 63°C/30 min (LTLT) is essential for pathogen destruction. Inadequate cleaning causes PHE fouling, which reduces heat transfer efficiency — the effective pasteurization temperature may then not be achieved, resulting in under-pasteurized product reaching consumers.</p>
                <p><strong>CCP 2 — Sanitizer Concentration:</strong> Chemical sanitizer concentration (ppm) must remain within the specified range — too low = inadequate kill; too high = chemical residue in product, consumer health risk.</p>
                <p><strong>CCP 3 — CIP Contact Time and Temperature:</strong> Caustic wash temperature below 70°C or contact time below 15 minutes creates risk of inadequate cleaning. Continuous monitoring and logging are essential.</p>
                
                <h4 class="font-bold mt-4">CIP Validation and Verification:</h4>
                <p><strong>Validation</strong> is a one-time exercise proving that the CIP procedure achieves its intended results. Methods include:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>ATP Bioluminescence Testing — measuring ATP (a biological contamination indicator) on cleaned surfaces</li>
                  <li>Microbiological Swabbing — testing for TPC, Coliforms, and specific pathogens</li>
                  <li>Protein Residue Tests (Ninhydrin, Biuret) — detecting protein traces on cleaned surfaces</li>
                  <li>Visual Inspection — using UV light to detect organic residues not visible to the naked eye</li>
                </ul>
                <p><strong>Verification</strong> is an ongoing process — regular ATP tests, microbiological tests, and rinse water analysis confirm that the validated procedure continues to perform adequately.</p>
                
                <h4 class="font-bold mt-4">The TACT Principle — The Four Pillars of CIP Effectiveness:</h4>
                <p>Effective cleaning is a balance of four interdependent parameters, often called the "Sinner's Circle":</p>
                <ul class="list-disc list-inside mt-1">
                  <li><strong>T — Temperature:</strong> Higher temperature accelerates chemical reactions (Arrhenius equation), but an optimal range exists — too high denatures proteins onto surfaces.</li>
                  <li><strong>A — Action (Mechanical):</strong> Turbulent flow (Re &gt;31,000) generates mechanical scrubbing. Minimum flow velocity: ≥1.5 m/s in pipelines.</li>
                  <li><strong>C — Concentration:</strong> Chemical concentration must be within the effective range. Dilution causes cleaning failure; excess causes waste, corrosion, and safety hazards.</li>
                  <li><strong>T — Time:</strong> Sufficient contact time is required for chemical reactions to complete. Shortcuts = inadequate cleaning = product safety risk.</li>
                </ul>
                <p>If one parameter is reduced, others must be increased to compensate. For example, if temperature must be reduced, contact time should be extended accordingly.</p>
            `
        },

        water_quality: {
            title: "Water Quality in CIP — Treatment and Management",
            htmlContent: `
                <p>Water is the most heavily used component of the CIP process — typically 70-80% of CIP costs are water-related (consumption, treatment, effluent management). Water quality directly affects cleaning effectiveness.</p>
                
                <h4 class="font-bold mt-4">Water Hardness and Dairy CIP:</h4>
                <p>Hard water contains dissolved Ca²⁺ and Mg²⁺ ions that create several problems in dairy CIP:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>Insoluble precipitates with NaOH: Ca(OH)₂, CaCO₃ — scale formation on equipment surfaces</li>
                  <li>Insoluble calcium salts with anionic surfactants — reduced surfactant cleaning activity</li>
                  <li>Mineral deposition from rinse water on newly cleaned surfaces</li>
                </ul>
                <p><strong>Hardness Classification:</strong></p>
                <ul class="list-disc list-inside mt-1">
                  <li>Soft: &lt;60 mg/L CaCO₃ equivalent — ideal for CIP</li>
                  <li>Moderately hard: 60-120 mg/L — acceptable with sequestrants added</li>
                  <li>Hard: 120-180 mg/L — sequestrants required; increased acid wash frequency recommended</li>
                  <li>Very hard: &gt;180 mg/L — water softening treatment necessary before use in CIP</li>
                </ul>
                
                <h4 class="font-bold mt-4">Water Treatment Methods:</h4>
                <p><strong>Ion Exchange Softening:</strong> Water passes through a cation exchange resin that exchanges Ca²⁺ and Mg²⁺ ions for Na⁺ ions. The resin is periodically regenerated with brine (NaCl solution).</p>
                <p><strong>Reverse Osmosis (RO):</strong> Water is forced under high pressure through a semi-permeable membrane — removing dissolved ions, bacteria, and most contaminants. Produces very high-quality water ideal for final rinse applications.</p>
                <p><strong>UV Treatment:</strong> For microbial control — 254 nm UV light damages microbial DNA, inactivating microorganisms without adding chemicals. No taste, odor, or residue concerns.</p>
                
                <h4 class="font-bold mt-4">CIP Effluent and Environmental Responsibility:</h4>
                <p>CIP drain water contains high BOD (Biological Oxygen Demand), extreme pH (acidic or alkaline), and residual chemicals. Direct discharge to waterways causes environmental damage. Responsible dairy operations:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>Neutralize combined alkali and acid streams (target pH 6-9 before discharge)</li>
                  <li>Chemical recovery systems — concentrate strong caustic solutions for reuse</li>
                  <li>Effluent Treatment Plant (ETP) — biological treatment of wastewater before final discharge</li>
                </ul>
            `
        },

        microbiology_dairy_cleaning: {
            title: "Dairy Cleaning Microbiology — Key Pathogens and Spoilage Organisms",
            htmlContent: `
                <p>Understanding the microorganisms targeted by dairy CIP programs is essential for effective program design. Different organisms require different CIP parameters for adequate control.</p>
                
                <h4 class="font-bold mt-4">Key Dairy Pathogens and Their Resistance:</h4>
                <table class="w-full my-4"><thead><tr class="bg-muted"><th class="p-2 text-left">Pathogen</th><th class="p-2 text-left">D-Value</th><th class="p-2 text-left">CIP Significance</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Salmonella spp.</td><td class="p-2 border-b">D₇₀ = 0.1-0.5 sec</td><td class="p-2 border-b">Heat-sensitive — adequate pasteurization and sanitization destroys effectively</td></tr>
                <tr><td class="p-2 border-b">Listeria monocytogenes</td><td class="p-2 border-b">D₇₀ = 0.1 sec</td><td class="p-2 border-b">Grows at refrigeration temperatures (4°C)! Forms persistent biofilms — critical to remove thoroughly</td></tr>
                <tr><td class="p-2 border-b">E. coli O157:H7</td><td class="p-2 border-b">D₇₀ &lt;1 sec</td><td class="p-2 border-b">Very low infectious dose (&lt;100 cells) — thorough sanitization is essential</td></tr>
                <tr><td class="p-2 border-b">Staphylococcus aureus</td><td class="p-2 border-b">D₇₂ = 0.2-2.0 sec</td><td class="p-2 border-b">Produces heat-stable enterotoxins (10-46°C) that survive pasteurization — source control critical</td></tr>
                <tr><td class="p-2 border-b">Bacillus cereus</td><td class="p-2 border-b">Spores: D₁₂₁ = 2-8 min</td><td class="p-2 border-b">Spore-former — CIP removes vegetative cells; spores survive routine sanitization</td></tr>
                <tr><td class="p-2 border-b">Mycobacterium tuberculosis</td><td class="p-2 border-b">D₇₂ = 0.5-2 sec</td><td class="p-2 border-b">Classic pasteurization indicator organism — its destruction confirms adequate heat treatment</td></tr>
                </tbody></table>
                
                <h4 class="font-bold mt-4">Spoilage Organisms:</h4>
                <p><strong>Psychrotrophic Bacteria (Cold-Loving):</strong> Pseudomonas, Acinetobacter — grow at refrigeration temperatures (4-7°C), producing lipases and proteases that damage milk flavor and reduce shelf life. Can persist on equipment surfaces after inadequate cleaning.</p>
                <p><strong>Thermoduric Bacteria:</strong> Survive pasteurization (high D-values at 72°C). Include Micrococcus, Enterococcus, and spore-formers. Their presence in post-pasteurization samples indicates equipment recontamination or inadequate CIP.</p>
                <p><strong>Thermophilic Bacteria:</strong> Grow optimally at 45-65°C — the ideal growth zone corresponds to the HTST regeneration section operating temperatures. Streptococcus thermophilus, Lactobacillus — can multiply rapidly in warm equipment sections during processing runs. Regular CIP controls their numbers.</p>
                
                <h4 class="font-bold mt-4">Environmental Monitoring Program (EMP):</h4>
                <p>An EMP is a systematic program tracking microbial contamination in the processing environment to validate and verify CIP effectiveness. Uses a zone-based approach:</p>
                <ul class="list-disc list-inside mt-1">
                  <li>Zone 1 — Direct product-contact surfaces (equipment interior) — highest risk, most critical</li>
                  <li>Zone 2 — Adjacent non-product-contact surfaces (equipment exterior, adjacent areas)</li>
                  <li>Zone 3 — Near processing environment (floors, drains, walls near equipment)</li>
                  <li>Zone 4 — Remote environment (distant walls, ceilings, non-processing areas)</li>
                </ul>
                <p>EMP results help validate CIP effectiveness. Listeria environmental positives in Zones 3-4 are investigable but manageable; Listeria in Zone 1 requires immediate corrective action — production hold and intensive CIP root-cause investigation.</p>
            `
        }
    }
};
