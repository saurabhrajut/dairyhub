// CIP PROCESS CONTENT - ULTIMATE FULLY EXPANDED EDITION
// Completely symmetric, deep scientific & engineering content across both Hindi/Hinglish (hi) and English (en) dictionaries.

export const cipProcessContent = {
  hi: {
    main_title: "Dairy Instruments ki Dhulai aur Safai",
    main_description: "CIP, SIP, chemicals, testing methods, biofilm, water quality aur HACCP compliance ke saath ek comprehensive scientific guide.",

    intro: {
      title: "Introduction: CIP, CAC aur Milk Stone",
      htmlContent: `
        <p>Dairy instruments ki surface par bacha hua doodh microbial growth ke liye ek excellent medium pradan karta hai. Doodh mein proteins, fats, lactose aur minerals hote hain jo bacteria ke liye ideal nutrient source hain.</p>
        
        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Dairy Soil ke Prakar:</h4>
        <div class="overflow-x-auto my-3">
          <table class="w-full border text-xs sm:text-sm">
            <thead>
              <tr class="bg-indigo-100 text-indigo-900">
                <th class="p-2 border text-left font-bold">Soil Prakar</th>
                <th class="p-2 border text-left font-bold">Mukhya Ghatak</th>
                <th class="p-2 border text-left font-bold">Vileyshila (Solubility)</th>
                <th class="p-2 border text-left font-bold">Niyantran Rasayan</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="p-2 border font-semibold">Carbohydrates (Lactose)</td>
                <td class="p-2 border">Sharkara, Monosaccharides</td>
                <td class="p-2 border">Jal mein atyadhik vileya (Water soluble)</td>
                <td class="p-2 border">Garam paani (40-50°C) pre-rinse</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="p-2 border font-semibold">Organic Soil (Protein)</td>
                <td class="p-2 border">Casein, whey proteins jo heat se denature hote hain</td>
                <td class="p-2 border">Jal mein avileya, Alkali mein hydrolyzable</td>
                <td class="p-2 border">Caustic Soda (NaOH 0.5-2.0%), 70-80°C</td>
              </tr>
              <tr class="bg-white">
                <td class="p-2 border font-semibold">Organic Soil (Fat)</td>
                <td class="p-2 border">Milk fat (Triglycerides)</td>
                <td class="p-2 border">Alkaline solution mein saponification se dissolve hoti hai</td>
                <td class="p-2 border">Alkaline cleaner + Surfactants/Teepol</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="p-2 border font-semibold">Mineral Soil (Milk Stone)</td>
                <td class="p-2 border">Ca aur Mg ke phosphate/carbonate salts</td>
                <td class="p-2 border">Alkali mein insoluble, Acid mein soluble</td>
                <td class="p-2 border">Nitric Acid (HNO₃ 0.5-1.0%) / Phosphoric Acid</td>
              </tr>
              <tr class="bg-white">
                <td class="p-2 border font-semibold">Microbial Biofilm</td>
                <td class="p-2 border">Bacteria ki organized colony in EPS matrix</td>
                <td class="p-2 border">Sanitizers ke prati 1000x resistant</td>
                <td class="p-2 border">Peracetic Acid (PAA), Bio-enzymes, ClO₂</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">CIP/CAC Kya Hai?</h4>
        <p><strong>CIP (Cleaning-In-Place):</strong> Automated method jismein pipelines, tanks ko bina disassemble kiye saaf kiya jaata hai. High velocity turbulent flow (≥ 1.5 - 2.0 m/s) mechanical scrubbing effect paida karta hai. CIP 1950s mein dairy industry mein develop hua tha.</p>
        <p><strong>CAC / COP (Cleaning-Out-of-Place):</strong> Chhote parts disassemble karke dedicated area mein manually ya ultrasonic bath mein saaf kiye jaate hain. Cream separators, pump heads, homogenizer valves examples hain.</p>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">CIP Systems ke Types:</h4>
        <p><strong>Single Pass:</strong> Har cycle ke liye naya solution — simpler lekin zyada water/chemical use karta hai.</p>
        <p><strong>Recirculation:</strong> Solutions external tanks mein mix karke recirculate kiye jaate hain — zyada initial investment lekin kam water/chemical. Modern dairies ka preferred method.</p>
        <p><strong>Centralized Multi-Circuit:</strong> Single CIP unit multiple lines serve karti hai — PLC/SCADA controlled, full data logging.</p>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">CIP Fluid Dynamics: Reynolds Number (Re) evam Wall Shear Stress</h4>
        <p>CIP cleaning mein turbulent flow hona anivarya hai. Reynolds Number equation: <strong>Re = (ρ × v × D) / μ</strong>.</p>
        <ul class="list-disc list-inside space-y-1 text-sm mt-1">
          <li><strong>Re &lt; 2,100:</strong> Laminar Flow (In-effective for cleaning).</li>
          <li><strong>Re &gt; 10,000:</strong> Fully Turbulent Flow (Required for CIP — creates high wall shear stress eddies).</li>
          <li><strong>Wall Shear Stress (τ<sub>w</sub>):</strong> Minimum <strong>10 - 15 Pascal (Pa)</strong> required. Linear velocity <strong>≥ 1.5 - 2.0 m/s</strong> in pipelines.</li>
        </ul>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">TACT Principle (CIP ke 4 Fundamentals):</h4>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>T - Time:</strong> Sufficient contact time — kam time = incomplete cleaning (15-45 min per phase).</li>
          <li><strong>A - Action:</strong> Turbulent flow (Re &gt; 10,000) = mechanical scrubbing force.</li>
          <li><strong>C - Concentration:</strong> Sahi chemical concentration — bahut kam ineffective, bahut zyada corrosive.</li>
          <li><strong>T - Temperature:</strong> Arrhenius law — har 10°C rise se reaction rate ~2x badhti hai (Max 80-85°C).</li>
        </ul>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Milk Stone:</h4>
        <p>Hot water aur detergent solutions se sookhe doodh ke solids aur mineral salts ka accumulation. Pasteurization temperatures (72-75°C) par formation accelerate hoti hai kyunki calcium phosphate ki solubility heat mein inverse hoti hai.</p>
        <p><strong>Composition:</strong> 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% protein; 42-67% ash.</p>
        <p><strong>Formation Mechanism:</strong> Heat se Ca²⁺ aur phosphate ions precipitate hote hain. Beta-lactoglobulin 70°C+ par denature hokar stainless steel se chemical thiol-disulfide bond banata hai — yahi primary mechanism hai.</p>
        <p><strong>Water Hardness Effect:</strong> Hard water milk stone formation ko significantly accelerate karta hai — water softening recommended hai.</p>
      `
    },

    cip_cycle: {
      title: "Standard CIP Cleaning Cycle — Scientific Explanation",
      intro: "Ek typical CIP cycle ke steps neeche diye gaye hain. Proper sequence follow karna zaroori hai — steps reorder karne se cleaning effectiveness significantly reduce hoti hai.",
      steps: [
        {
          title: "1. Praarambhik Dhulai (Pre-rinse)",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Uddeshya:</strong> Adhikaansh dhili gandagi aur doodh ke avshesho ko hatana.</p>
          <p><strong>Prakriya:</strong> Gungune paani (40-50°C) se 10-15 minute rinse.</p>
          <p><strong>Vigyan:</strong> &gt;60°C paani proteins ko denature karta hai — surface se chipak jaate hain. Thanda paani fat solidify karta hai. 40-50°C optimal hai: dairy fat melting point ~35-40°C, proteins native state mein — asaani se rinse. ~80-90% organic load is step mein remove hota hai.</p>
          <p class="mt-2 font-semibold">Quality Check: End mein paani saaf ya halka cloudy hona chahiye (Turbidity &lt; 5 NTU).</p>`
        },
        {
          title: "2. Kshariya Dhulai (Alkali Wash)",
          colorClass: "bg-orange-100 border-orange-300",
          details: `<p><strong>Uddeshya:</strong> Fat aur protein remove karna.</p>
          <p><strong>Prakriya:</strong> 0.5-2.0% NaOH solution, 70-80°C par 15-30 minute circulate.</p>
          <p><strong>Vigyan — Teen Key Reactions:</strong></p>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Saponification:</strong> Triglycerides (Fat) + 3 NaOH → Soap (soluble) + Glycerol</li>
            <li><strong>Protein Hydrolysis:</strong> Alkali peptide bonds todhta hai — soluble peptides/amino acids banate hain</li>
            <li><strong>Emulsification & Sequestration:</strong> Fat droplets suspend rehte hain. EDTA/Gluconate calcium bind karta hai.</li>
          </ul>
          <p class="mt-1">Arrhenius law: 70°C par reaction rate 40°C se 8-16x faster hoti hai.</p>
          <p><strong>Concentrations:</strong> Can: 0.5% | Pipelines: 0.5-1.0% | Bottle: 1.5-2.0% | HTST: 1.5-2.0% | Evaporator: 2.0-3.0%.</p>`
        },
        {
          title: "3. Madhyavarti Dhulai (Intermediate Rinse)",
          colorClass: "bg-gray-100 border-gray-300",
          details: `<p><strong>Uddeshya:</strong> Alkali residue completely remove karna acid wash se pehle.</p>
          <p><strong>Prakriya:</strong> Garam paani (50-60°C), 5-10 minute, pH neutral hone tak.</p>
          <p><strong>Vigyan:</strong> Alkali residue acid waste karta hai — NaOH + HNO₃ → NaNO₃ + H₂O (neutralization). Acid effectiveness reduce hogi. Concentrated acid-alkali direct contact se violent exothermic reaction bhi ho sakti hai.</p>
          <p class="mt-2 font-semibold">Quality Check: Rinse water pH 7-8 tak aana chahiye.</p>`
        },
        {
          title: "4. Amleey Dhulai (Acid Wash)",
          colorClass: "bg-yellow-100 border-yellow-300",
          details: `<p><strong>Uddeshya:</strong> Milk stone aur mineral deposits (CaCO₃, MgCO₃, Calcium Phosphate) remove karna.</p>
          <p><strong>Prakriya:</strong> 0.5-1.0% HNO₃ ya H₃PO₄, 60-70°C par 10-20 minute.</p>
          <p><strong>Vigyan:</strong> Milk stone mein Ca₃(PO₄)₂ aur CaCO₃ hote hain — alkali mein insoluble lekin acid mein soluble:</p>
          <ul class="list-disc list-inside mt-1">
            <li>Ca₃(PO₄)₂ + 4HNO₃ → 3Ca(NO₃)₂ (soluble) + 2H₂PO₄⁻</li>
            <li>CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          </ul>
          <p class="mt-1"><strong>HNO₃ Advantage:</strong> Stainless steel par Cr₂O₃ passivation layer banata hai — corrosion resistance badhti hai. Dairy ke liye preferred.</p>`
        },
        {
          title: "5. Antim Dhulai (Final Rinse)",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Uddeshya:</strong> Acid ke sabhi traces remove karna.</p>
          <p><strong>Prakriya:</strong> Thande potable water se rinse jab tak pH 6.5-7.5 na ho. Min 5-10 minute (Inline conductivity &lt; 10 µS/cm).</p>
          <p><strong>Vigyan:</strong> Trace acid bhi milk pH aur quality affect karta hai. Rinse water potable quality hona chahiye (TPC &lt;100 CFU/mL, Coliform 0/100mL).</p>`
        },
        {
          title: "6. Keetnashak / Sanitization",
          colorClass: "bg-green-100 border-green-300",
          details: `<p><strong>Uddeshya:</strong> Remaining microorganisms ko acceptable level tak reduce karna (5-log / 99.999% reduction).</p>
          <p><strong>Methods:</strong></p>
          <div class="overflow-x-auto my-2"><table class="w-full text-xs border">
            <thead><tr class="bg-green-200"><th class="p-1 border text-left">Method</th><th class="p-1 border text-left">Conditions</th><th class="p-1 border text-left">Advantage</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">Hot Water</td><td class="p-1 border">85-95°C, 10-15 min</td><td class="p-1 border">No chemical residue</td></tr>
              <tr><td class="p-1 border">Chlorine</td><td class="p-1 border">150-200 ppm, pH 6.5-7.5</td><td class="p-1 border">Fast, inexpensive</td></tr>
              <tr><td class="p-1 border">Peracetic Acid (PAA)</td><td class="p-1 border">100-200 ppm, 20-30°C</td><td class="p-1 border">Biofilm effective, zero toxic residue</td></tr>
              <tr><td class="p-1 border">QAC</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">Residual activity</td></tr>
            </tbody>
          </table></div>
          <p class="mt-2"><strong>Log Reduction:</strong> 3-log = 99.9% kill | 5-log = 99.999% kill. Dairy mein minimum 3-log required. Organic matter sanitizer effectiveness reduce karta hai — thorough cleaning PEHLE essential hai.</p>`
        }
      ]
    },

    chemicals: {
      title: "CIP mein Use Hone Wale Chemicals — Scientific Guide",
      intro: "Har chemical category ki science samajhna sahi concentration, temperature aur sequence choose karne ke liye zaroori hai.",
      types: [
        {
          title: "Alkaline Detergents (Kshariya Cleaners)",
          details: `<p><strong>Examples:</strong> NaOH, KOH, Na₂CO₃, Sodium metasilicate, STPP, Sodium gluconate, EDTA.</p>
          <p><strong>Mechanism:</strong> NaOH fat saponify karta hai. Builders (STPP) Ca²⁺/Mg²⁺ sequester karte hain. Chelating agents metal ions ke saath stable complexes banate hain redeposition rokne ke liye.</p>
          <p><strong>pH:</strong> 11-14 | <strong>Effective against:</strong> Fats, proteins, sugars | <strong>Not against:</strong> Mineral deposits.</p>
          <p class="text-red-700 font-semibold mt-2">⚠ Safety: Corrosive — PPE (gloves, goggles, apron) zaroori. Exothermic dissolution warning.</p>`
        },
        {
          title: "Acid Detergents (Amleey Cleaners)",
          details: `<p><strong>Examples:</strong> HNO₃, H₃PO₄, Citric acid, Gluconic acid, Sulfamic acid.</p>
          <p><strong>Mechanism:</strong> Mineral salts ko soluble form mein convert karte hain. HNO₃ stainless steel ko passivate (Cr₂O₃ layer) bhi karta hai. Chelating acids metal ions ke saath stable complexes banati hain.</p>
          <p><strong>pH:</strong> 1-3 (strong), 3-4 (food-grade) | <strong>Effective against:</strong> Milk stone, water scale, rust.</p>
          <p class="text-red-700 font-semibold mt-2">⚠ Safety: Hamesha acid ko PAANI MEIN daalein — kabhi paani ko acid mein nahi! NO₂ gas warning.</p>`
        },
        {
          title: "Enzyme-based / Neutral Cleaners",
          details: `<p><strong>Examples:</strong> Protease cleaners, Lipase cleaners, Teepol, Nonionic surfactant blends.</p>
          <p><strong>Mechanism:</strong> Enzymes specific substrate biologically degrade karte hain. Protease proteins ko peptides mein todhti hai, Lipase fats ko fatty acids mein. Low-temperature cleaning ke liye ideal.</p>
          <p><strong>pH:</strong> 6-8 | <strong>Optimal Temp:</strong> 40-55°C | <strong>Advantages:</strong> Metal aur seals ke liye gentle, environment-friendly.</p>`
        },
        {
          title: "Sanitizers — Detailed Comparison",
          details: `<div class="overflow-x-auto my-2"><table class="w-full text-xs border">
            <thead><tr class="bg-purple-200"><th class="p-1 border text-left">Sanitizer</th><th class="p-1 border text-left">Conc.</th><th class="p-1 border text-left">pH Range</th><th class="p-1 border text-left">Mechanism</th><th class="p-1 border text-left">Limitation</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border font-semibold">Chlorine (NaOCl)</td><td class="p-1 border">100-200 ppm</td><td class="p-1 border">6.5-7.5</td><td class="p-1 border">HOCl cell membrane disrupt karta hai</td><td class="p-1 border">pH sensitive, SS 304 pitting corrosion if &gt;50°C</td></tr>
              <tr><td class="p-1 border font-semibold">Peracetic Acid (PAA)</td><td class="p-1 border">100-300 ppm</td><td class="p-1 border">2-7</td><td class="p-1 border">Strong oxidizer (1.81 eV) — proteins oxidize</td><td class="p-1 border">Pungent smell, concentrated form handling</td></tr>
              <tr><td class="p-1 border font-semibold">QAC (Quats)</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">7-10</td><td class="p-1 border">Negatively charged membrane se bind</td><td class="p-1 border">Foam, MRL concerns on food contact surfaces</td></tr>
              <tr><td class="p-1 border font-semibold">Hot Water</td><td class="p-1 border">85-95°C</td><td class="p-1 border">Neutral</td><td class="p-1 border">Heat denaturation</td><td class="p-1 border">High energy cost</td></tr>
            </tbody>
          </table></div>`
        },
        {
          title: "Sequestrants aur Water Softeners",
          details: `<p><strong>Examples:</strong> EDTA, STPP, Sodium Gluconate, Polyphosphates.</p>
          <p><strong>Mechanism:</strong> Hard water Ca²⁺ aur Mg²⁺ ions soap ke saath insoluble scum banate hain. Sequestrants in ions ke saath stable soluble chelate complexes banate hain — cleaning interfere nahi hoti.</p>
          <p><strong>Sequestration vs Softening:</strong> Chemical sequestrants ions inactivate karte hain (remove nahi). Ion exchange resins Ca²⁺/Mg²⁺ ko Na⁺ se replace karte hain (true softening).</p>`
        }
      ]
    },

    advantages: {
      title: "CIP ke Fayde — Detailed Analysis",
      list: [
        "Guaranteed aur repeatable quality assurance — har cycle documented aur verifiable hoti hai.",
        "Complete data logging — FSSAI, ISO 22000 aur HACCP regulatory compliance ke liye.",
        "Cleaning costs 30-50% reduce — recirculation systems mein chemical reuse se.",
        "Inaccessible areas (pipe bends, crevices) bhi effectively clean — manual cleaning impossible hoti hai wahanpar.",
        "Operator safety better — hazardous chemicals ke saath minimal direct contact.",
        "Production downtime 60-70% reduce — manual cleaning ke comparison mein.",
        "Labour requirements significantly reduce — automated systems minimal supervision chahte hain.",
        "Chemical dosing precision — overuse (waste/corrosion) aur underuse (ineffective) dono avoid.",
        "Water consumption 30-40% reduce recirculation systems mein.",
        "Human error eliminate — consistent cleaning har baar.",
        "Real-time monitoring — cleaning failures immediately detect, corrective action possible before product compromise."
      ]
    },

    cleaning_procedures: {
      title: "Specific Instruments ki Cleaning Procedures",
      sections: [
        {
          title: "Doodh ke Cans ki Safai",
          content: `<p><strong>Aluminium Chemistry Note:</strong> Strong NaOH (&gt;2%) se bachein. Aluminium amphoteric hai: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑. Mild alkaline cleaners (0.5-1.0% NaOH equivalent) use karein.</p>
          <h5 class="font-bold mt-3 text-indigo-900">Manual Washing:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Khaali hone ke turant baad warm water (40°C) se rinse, brush se loose soil remove.</li>
            <li>50°C detergent solution mein 5-10 minute soak (1% sodium hexametaphosphate/trisodium phosphate/sodium carbonate/teepol).</li>
            <li>Garam detergent solution se interior thoroughly brush — bottom aur neck par special attention.</li>
            <li>Hot water (70-75°C) se rinse karein.</li>
            <li>Steam (100°C, 5 min) ya 200 ppm chlorine se sanitize karein.</li>
            <li>Inverted position mein draining rack par store karein.</li>
          </ol>
          <h5 class="font-bold mt-3 text-indigo-900">Mechanical Washing (Rotary/Tunnel Washer):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Detergent tank ko 0.5% alkalinity tak charge karein.</li>
            <li>Water aur steam valves kholein, motors aur pumps start karein.</li>
            <li>Cans aur lids respective carriageways mein load karein.</li>
            <li>Jet pressure: 15 psi | Pre-rinse: 40°C | Detergent wash: 75°C | Hot water: 85°C.</li>
            <li>Steam: 120°C, 20 psi | Hot water blast: 125°C, 20 psi.</li>
            <li>Outlet par unload karein, inverted rack par store karein.</li>
            <li>Har operation ke start aur end mein detergent strength qualitative/quantitative test se check karein.</li>
          </ol>`
        },
        {
          title: "Cream Separator/Clarifier ki Safai",
          content: `<p><strong>Why COP Required:</strong> High-speed bowl ke periphery par "separator slime" (cream residue, denatured protein) accumulate hoti hai — CIP se effectively remove nahi hoti. Daily dismantling zaroori hai.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Day operation ke baad bowl main machine se carefully remove karein.</li>
            <li>Bowl dismantle karein, numbered disc stack ka order maintain karein.</li>
            <li>Periphery se separator slime spatula se carefully remove karein.</li>
            <li>Har disc ko both sides se warm (55-60°C) detergent solution aur brush se clean karein — disc channels bhi.</li>
            <li>Sabhi parts ko lukewarm water se rinse karein, inverted rack par drain karein.</li>
            <li>Steam ya 200 ppm chlorine se sanitize karein.</li>
            <li>Manufacturer torque specifications ke anusaar reassemble karein.</li>
          </ol>`
        },
        {
          title: "Plate Heat Exchangers (PHE) ki Safai",
          content: `<p><strong>PHE Fouling Stages:</strong> (1) Protein conditioning layer adsorption → (2) Transport-controlled deposit buildup → (3) Steady-state thick deposit. Regular CIP critical hai.</p>
          <h5 class="font-bold mt-3 text-indigo-900">Daily CIP:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Lukewarm water (40-50°C) se 10 min rinse — flow direction reverse karein better coverage ke liye.</li>
            <li>Acid detergent (0.5-1.0%) 70°C par 20-30 min circulate. <em>(PHE ke liye acid-first sequence better hai)</em></li>
            <li>Intermediate warm water (60°C) rinse: 5-8 min.</li>
            <li>Alkali solution (0.5-1.0%) 70°C par 20-30 min circulate.</li>
            <li>40-50°C hot water phir tap water 10 min — drain aur dry.</li>
            <li>Use se pehle sanitizer circulate karein (PAA 150-200 ppm ya Cl 100-150 ppm).</li>
          </ol>
          <h5 class="font-bold mt-3 text-indigo-900">Periodic Cleaning:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>PHE carefully open aur dismantle karein.</li>
            <li>Rubber gaskets inspect karein — cracking, swelling? Defective ones replace karein.</li>
            <li>Har plate check karein — scoring, pitting, corrosion? Soft brush aur 1% H₃PO₄ se scale remove.</li>
            <li>Plates par scratches ya dents avoid karein — bacterial harborage sites ban jaate hain.</li>
            <li>Tap water se thoroughly rinse, manufacturer sequence mein reassemble.</li>
            <li>Reassembly ke baad pressure leak test karein.</li>
          </ol>`
        },
        {
          title: "Doodh Storage Tank ki Safai",
          content: `<p><strong>Design Note:</strong> Large tanks mein spray balls (rotary/static) se poori surface coverage ensure karna zaroori hai. Operating pressure: 1.8 - 2.5 bar, Flow rate $Q = 1.5-2.0\ \text{m}^3/\text{hr/m}$ perimeter. Riboflavin UV test se spray coverage periodically verify karein.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Tank khaali hone ke baad drain valve kholein.</li>
            <li>Pressurized spray heads se warm water (50°C) se 10-15 min rinse.</li>
            <li>Spray ball coverage verify karein — poori surface wet honi chahiye.</li>
            <li>0.5-1.0% alkali detergent (75-80°C) se 20-30 min wash, phir drain.</li>
            <li>Intermediate warm water rinse: 10 min.</li>
            <li>Optional: 0.5% HNO₃ ya H₃PO₄ (60-70°C, 15-20 min) milk stone ke liye.</li>
            <li>Warm water phir cold potable water se traces remove, drain aur dry.</li>
            <li>Steam (95°C, 15 min) ya 150-200 ppm chlorinated water se sanitize.</li>
          </ol>`
        },
        {
          title: "HTST Pasteurizer ki Safai",
          content: `<p><strong>Fouling Mechanism:</strong> 72-75°C par beta-lactoglobulin unfold hokar surface attach hoti hai — yeh "conditioning layer" further fouling accelerate karta hai.</p>
          <h5 class="font-bold mt-3 text-indigo-900">Daily CIP Sequence:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Cold water rinse (30-40°C): 10-15 min — milk system se push out hota hai.</li>
            <li>Alkali wash (0.5-1.0% NaOH, 75-80°C): 30-45 min.</li>
            <li>Intermediate rinse (60°C): 10 min.</li>
            <li>Acid wash (0.5-1.0% HNO₃, 65-70°C): 20-30 min.</li>
            <li>Final rinse (cold potable water): 10-15 min until neutral pH.</li>
            <li>Thermal sanitization (95°C, 10-15 min) ya chemical sanitization.</li>
          </ol>
          <p class="mt-2 text-sm"><strong>FDV Testing:</strong> Har production run se pehle Flow Diversion Valve function test mandatory hai — faulty FDV under-pasteurized milk distribute kar sakta hai.</p>`
        },
        {
          title: "Homogenizer ki Safai",
          content: `<p>Homogenizers high pressure (150-300 bar) par operate karte hain — narrow channels mein deposits asaani se accumulate hote hain. COP cleaning required hai.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
            <li>Production ke baad warm water flush karein.</li>
            <li>Homogenizing valve assembly dismantle karein (COP procedure).</li>
            <li>Parts ko warm (55-60°C) alkaline detergent solution mein 30 min soak karein.</li>
            <li>Narrow passages ko specially designed brushes se clean karein.</li>
            <li>Thoroughly rinse karein.</li>
            <li>Pistons, seals aur O-rings inspect karein — wear signs?</li>
            <li>Reassemble aur sanitize karein.</li>
          </ol>`
        },
        {
          title: "Membrane Filtration Units (UF, RO, NF, MF)",
          content: `<p>Membrane elements (Polysulfone, Polyethersulfone, Polyamide) high temperature aur extreme pH ke prati sensitive hote hain.</p>
          <ul class="list-disc list-inside space-y-1 text-sm mt-1">
            <li><strong>Limits:</strong> Temp ≤ 50°C, pH range 2.0 - 10.5 (polyamide dependent). Never use Chlorine or strong oxidizers on polyamide RO membranes!</li>
            <li><strong>Enzymatic Cleaning:</strong> Protease-based bio-cleaners (pH 9.5, 45°C) to break down protein fouling.</li>
          </ul>`
        }
      ]
    },

    teepol_detergent: {
      title: "Liquid Detergent Banana aur Quality Check Karna",
      htmlContent: `
        <p>Dairy aur food industry mein neutral liquid detergent (jaise Teepol) haath se bartano ki safai ke liye kaafi use kiya jaata hai. Teepol ek brand name hai sodium alkyl sulfate-based surfactant ke liye.</p>
        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Surfactants ki Science:</h4>
        <p>Surfactant molecules mein ek <strong>hydrophilic head</strong> (water-loving) aur ek <strong>hydrophobic tail</strong> (water-fearing) hoti hai. Yeh amphiphilic molecule water-air interface par surface tension reduce karta hai (72.8 se 28-35 dynes/cm) aur fat droplets ke around <strong>micelles</strong> banata hai — fat paani mein suspend hokar wash out ho jaata hai.</p>
        
        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">1. General Purpose Liquid Detergent / Teepol (1000 Litre Batch):</h4>
        <div class="overflow-x-auto my-3"><table class="w-full border text-xs sm:text-sm"><thead><tr class="bg-indigo-100 text-indigo-900"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border font-semibold">Paani (DM Water)</td><td class="p-2 border">820-840</td><td class="p-2 border">82-84%</td><td class="p-2 border">Main Solvent Base</td></tr>
        <tr><td class="p-2 border font-semibold">LABSA (Acid Slurry 90%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Main Cleaning Agent (Anionic Surfactant)</td></tr>
        <tr><td class="p-2 border font-semibold">Caustic Soda (NaOH 47%)</td><td class="p-2 border">~28</td><td class="p-2 border">~2.8%</td><td class="p-2 border">LABSA neutralize karna (pH 7.0 neutralization)</td></tr>
        <tr><td class="p-2 border font-semibold">SLES (70%)</td><td class="p-2 border">45</td><td class="p-2 border">4.5%</td><td class="p-2 border">Secondary Anionic Surfactant & Foam stabilizer</td></tr>
        <tr><td class="p-2 border font-semibold">Urea ya Salt (NaCl)</td><td class="p-2 border">20-40</td><td class="p-2 border">2-4%</td><td class="p-2 border">Viscosity Enhancer (300-500 cP)</td></tr>
        <tr><td class="p-2 border font-semibold">STPP / EDTA</td><td class="p-2 border">12</td><td class="p-2 border">1.2%</td><td class="p-2 border">Builder & Heavy metal sequestrant</td></tr>
        <tr class="bg-slate-100 font-bold"><td class="p-2 border">Total Batch</td><td class="p-2 border">1000 Kg</td><td class="p-2 border">100%</td><td class="p-2 border">Specs: pH 6.5-7.5 | Active Matter &gt;8%</td></tr>
        </tbody></table></div>
        <p><strong>LABSA ke baare mein:</strong> Linear Alkyl Benzene Sulphonic Acid — most common anionic surfactant. Strongly acidic (pH ~1-2). NaOH neutralization zaroori: LABSA + NaOH → Sodium LAS (active surfactant) + H₂O</p>
        <p class="font-semibold mt-3">Process:</p>
        <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
          <li>SS/HDPE tank mein paani lein. LABSA dheere-dheere daalein, continuously stir karein (exothermic).</li>
          <li>Alag se NaOH ko thode paani mein gholein (PPE zaroori — highly exothermic).</li>
          <li>pH meter monitor karte hue caustic solution dheere daalein. Target pH: 6.5-7.5.</li>
          <li>Salt ya urea viscosity ke liye daalein. Thanda hone par color aur perfume daalein.</li>
          <li>Final specs: pH 6.5-7.5 | Active Matter &gt;8% | Viscosity 200-500 cP.</li>
        </ol>

        <h4 class="font-bold mt-6 text-indigo-900 border-b border-indigo-100 pb-1">2. Acidic CIP Cleaner (1000 Litre Batch):</h4>
        <p class="text-red-700 font-semibold">⚠ Warning: Strong acids bahut khatarnak hain — chemical-resistant gloves, face shield, apron, boots. Achi ventilation ensure karein.</p>
        <div class="overflow-x-auto my-3"><table class="w-full border text-xs sm:text-sm"><thead><tr class="bg-indigo-100 text-indigo-900"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border font-semibold">Paani (Water)</td><td class="p-2 border">880</td><td class="p-2 border">88%</td><td class="p-2 border">Solvent (acid-resistant tank mein)</td></tr>
        <tr><td class="p-2 border font-semibold">HCl (33%) / HNO₃ (68%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Descaling Agent</td></tr>
        <tr><td class="p-2 border font-semibold">Non-ionic Surfactant</td><td class="p-2 border">20</td><td class="p-2 border">2%</td><td class="p-2 border">Wetting aur soil removal</td></tr>
        </tbody></table></div>
        <p class="font-semibold">Process:</p>
        <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
          <li>HDPE/FRP acid-resistant tank mein saara paani lein.</li>
          <li class="font-bold text-red-700">Hamesha acid ko paani mein daalein — kabhi paani ko acid mein NAHI! (Violent exothermic reaction)</li>
          <li>HCl/HNO₃ dheere-dheere paani mein daalein, stir karte rahein. Non-ionic surfactant daalein aur mix karein. Final pH: 1-2.</li>
        </ol>

        <h4 class="font-bold mt-6 text-indigo-900 border-b border-indigo-100 pb-1">3. Alkaline CIP Stock Solution (10% NaOH, 1000L):</h4>
        <p>102 Kg NaOH flakes (98%) + 898 L cold water + optional 10-20 Kg Sodium Gluconate (sequestrant).</p>
        <p>Dilution: 1L stock + 9L water = ~1% NaOH working solution.</p>
        <p class="text-red-700 font-semibold">⚠ NaOH dissolution highly exothermic — temperature 80°C+ tak ja sakta hai. PPE essential!</p>

        <h4 class="font-bold mt-6 text-indigo-900 border-b border-indigo-100 pb-1">4. Detergent Strength Check (Active Matter %):</h4>
        <p>Standard method: <strong>MBAS (Methylene Blue Active Substances) Test</strong> — methylene blue dye anionic surfactants ke saath complex banata hai jo chloroform phase mein extract hota hai. 650 nm par absorbance measure → standard curve se Active Matter % calculate.</p>
        <p class="mt-2 text-sm"><strong>Rapid Field Test:</strong> pH paper se check karein — neutral detergent pH 6.5-7.5. pH &gt;9 = incomplete neutralization.</p>
      `
    },

    sip: {
      title: "SIP (Sterilization-In-Place) — Complete Scientific Guide",
      intro: "SIP equipment aur pipelines ko disassemble kiye bina sterilize karta hai. Aseptic processing (UHT milk) ke liye essential hai aur hamesha complete CIP ke BAAD kiya jaata hai.",
      process: `
        <h5 class="font-bold text-indigo-900 border-b border-indigo-100 pb-1">CIP vs SIP — Key Differences:</h5>
        <div class="overflow-x-auto my-3"><table class="w-full border text-xs sm:text-sm">
          <thead><tr class="bg-red-200 text-red-950"><th class="p-2 border text-left font-bold">Parameter</th><th class="p-2 border text-left font-bold">CIP</th><th class="p-2 border text-left font-bold">SIP</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border font-semibold">Objective</td><td class="p-2 border">Soil remove, microbial load reduce</td><td class="p-2 border">Commercial sterility achieve (SAL 10⁻⁶)</td></tr>
            <tr><td class="p-2 border font-semibold">Agent</td><td class="p-2 border">Chemical solutions (Caustic/Acid)</td><td class="p-2 border">Saturated Pure Steam (&gt;121°C)</td></tr>
            <tr><td class="p-2 border font-semibold">Pressure</td><td class="p-2 border">Atmospheric (mostly)</td><td class="p-2 border">15-30 psi (1.0 - 2.0 bar)</td></tr>
            <tr><td class="p-2 border font-semibold">Log Reduction</td><td class="p-2 border">3-5 log reduction</td><td class="p-2 border">6-12 log reduction</td></tr>
          </tbody>
        </table></div>

        <h5 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">D-Value aur F-Value Concepts:</h5>
        <p><strong>D-value:</strong> Ek specific temperature par 90% microbial population (1 log cycle) kill karne ka time. Example: B. stearothermophilus spores D₁₂₁.₁ = 1-1.5 min.</p>
        <p><strong>F₀-value:</strong> 121.1°C par equivalent sterilization minutes calculation:</p>
        <div class="p-3 bg-slate-100 rounded-lg text-center font-mono my-2 text-indigo-950 font-bold">
          F₀ = ∫ 10^[(T(t) - 121.1) / Z] dt
        </div>
        <p class="text-xs text-gray-600">F₀ = 12 min (12-D concept) commercial dairy ke liye standard hai target spore <em>C. botulinum</em> aur <em>B. stearothermophilus</em> ko destroy karne ke liye.</p>

        <h5 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">SIP Process Steps:</h5>
        <ol class="list-decimal list-inside space-y-1 mt-2 text-sm">
          <li>CIP completion verify karein — pH check aur microbiological testing.</li>
          <li>System partially drain aur air-dry karein.</li>
          <li>Steam traps aur pressure gauges calibration check karein.</li>
          <li>Saturated pure steam pressure mein supply karein (saturated &gt; superheated — moist heat latent heat 2200 kJ/kg rapid transfer).</li>
          <li>Air ko 0.2-micron bacterial filter-protected vents se bahar nikalein — cold spots eliminate.</li>
          <li>Vents band karein — pressure 15-21 psi (121-126°C) tak build up hone dein.</li>
          <li>Required hold time maintain karein (minimum 20-30 min at 121°C).</li>
          <li>Steam condenser ke through slowly release karein — sudden depressurization avoid karein.</li>
          <li>Sterile nitrogen ya air (0.5 bar overpressure) se pressurize karein cooling ke liye (vacuum collapse prevention).</li>
          <li>Temperature aur pressure data log review karein — F₀ calculate karein.</li>
        </ol>

        <h5 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Steam Quality Requirements:</h5>
        <ul class="list-disc list-inside mt-1 text-sm">
          <li>Dryness fraction ≥ 0.97 (saturated steam)</li>
          <li>No superheat — superheated steam less effective hai (behaves like dry air)</li>
          <li>No non-condensable gases — air/CO₂ effectiveness reduce karte hain</li>
          <li>Boiler chemicals food-contact grade hone chahiye</li>
        </ul>

        <h5 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Biological Indicator (BI) Testing:</h5>
        <p class="text-sm">B. stearothermophilus spore strips (10⁶ spores/strip) critical cold spot locations par place karein. SIP ke baad culture karein at 55-60°C for 48h: Growth = SIP failure | No growth = SIP successful.</p>
      `
    },

    biofilm: {
      title: "Biofilm — Dairy Industry ki Hidden Threat",
      intro: "Biofilm bacterial contamination ka advanced form hai jo ordinary cleaning se remove karna bahut mushkil hota hai — dairy mein serious quality aur safety concern.",
      htmlContent: `
        <h4 class="font-bold text-rose-900 border-b border-rose-100 pb-1">Biofilm Kya Hai?</h4>
        <p>Biofilm bacteria ka organized community hai jo surface par attach hota hai aur khud ko self-produced <strong>Extracellular Polymeric Substance (EPS)</strong> matrix mein encase karta hai. EPS polysaccharides, proteins, eDNA aur lipids se bana hota hai. Yeh matrix bacteria ko:</p>
        <ul class="list-disc list-inside mt-1 space-y-1 text-sm">
          <li>Sanitizers se <strong>1000x zyada resistant</strong> banata hai</li>
          <li>Drying (desiccation) aur environmental stress se protect karta hai</li>
          <li>Quorum sensing ke through inter-bacterial communication aur gene transfer allow karta hai</li>
        </ul>

        <h4 class="font-bold mt-4 text-rose-900 border-b border-rose-100 pb-1">Biofilm Formation ke 5 Stages:</h4>
        <ol class="list-decimal list-inside mt-2 space-y-1 text-sm">
          <li><strong>Initial Attachment (Reversible):</strong> Free-floating (planktonic) bacteria surface par loosely attach hote hain</li>
          <li><strong>Irreversible Attachment:</strong> Bacteria permanently attach aur divide hone lagte hain</li>
          <li><strong>Early Development:</strong> Microcolonies form, EPS production shuru</li>
          <li><strong>Maturation:</strong> 3D mushroom-shaped clusters, water channels — fully protected community</li>
          <li><strong>Dispersion:</strong> Cells detach hokar naye surfaces colonize karti hain — product contamination risk!</li>
        </ol>

        <h4 class="font-bold mt-4 text-rose-900 border-b border-rose-100 pb-1">Dairy mein Common Biofilm-Forming Bacteria:</h4>
        <div class="overflow-x-auto my-2"><table class="w-full border text-xs sm:text-sm">
          <thead><tr class="bg-rose-100 text-rose-900"><th class="p-2 border text-left font-bold">Organism</th><th class="p-2 border text-left font-bold">Temp Range</th><th class="p-2 border text-left font-bold">Special Concern</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border font-semibold">Pseudomonas fluorescens</td><td class="p-2 border">4-10°C (Psychrotroph)</td><td class="p-2 border">Refrigeration par bhi biofilm, heat-stable protease/lipase</td></tr>
            <tr><td class="p-2 border font-semibold">Listeria monocytogenes</td><td class="p-2 border">0-45°C</td><td class="p-2 border">Foodborne pathogen, wet environments mein thrive</td></tr>
            <tr><td class="p-2 border font-semibold">Staphylococcus aureus</td><td class="p-2 border">10-45°C</td><td class="p-2 border">Heat-stable enterotoxin producer</td></tr>
            <tr><td class="p-2 border font-semibold">Bacillus cereus</td><td class="p-2 border">10-50°C</td><td class="p-2 border">Pasteurization-resistant spores, diarrheal toxins</td></tr>
          </tbody>
        </table></div>

        <h4 class="font-bold mt-4 text-rose-900 border-b border-rose-100 pb-1">Biofilm Detection Methods:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1 text-sm">
          <li><strong>ATP Bioluminescence:</strong> Surface ATP measure — rapid result (seconds). ATP &gt;10 RLU/100 cm² = potential biofilm.</li>
          <li><strong>Swab Testing:</strong> Standard plate count ya selective media par culture.</li>
          <li><strong>Crystal Violet Staining:</strong> Lab method — stain, wash, absorbance measure.</li>
          <li><strong>SEM (Scanning Electron Microscopy):</strong> Direct visualization of biofilm structure.</li>
        </ul>

        <h4 class="font-bold mt-4 text-rose-900 border-b border-rose-100 pb-1">Biofilm Prevention aur Control:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1 text-sm">
          <li>Surface roughness minimize karein — Ra &lt;0.8 μm food-contact SS ke liye recommended.</li>
          <li>Equipment design mein dead legs, crevices, horizontal surfaces avoid karein.</li>
          <li>Regular (daily) thorough CIP — biofilm 4-24 hours mein form ho sakta hai.</li>
          <li>Sanitizer rotation implement karein — resistance develop na ho.</li>
          <li>Enzymatic cleaners (proteases, amylases) use karein jo EPS matrix degrade karein.</li>
          <li>Peracetic Acid (PAA 200 ppm) ya Chlorine Dioxide (ClO₂ 5-10 ppm) oxidative shock treatment.</li>
        </ul>
      `
    },

    water_quality: {
      title: "CIP mein Paani ki Quality ka Mahatv",
      intro: "Paani CIP ka primary medium hai. Paani ki quality directly cleaning effectiveness, scale formation aur product quality ko affect karti hai.",
      htmlContent: `
        <h4 class="font-bold text-sky-900 border-b border-sky-100 pb-1">Water Hardness aur CIP Impact:</h4>
        <div class="overflow-x-auto my-2"><table class="w-full border text-xs sm:text-sm">
          <thead><tr class="bg-sky-100 text-sky-900"><th class="p-2 border text-left font-bold">Category</th><th class="p-2 border text-left font-bold">CaCO₃ (mg/L)</th><th class="p-2 border text-left font-bold">CIP Impact</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border font-semibold text-emerald-700">Soft</td><td class="p-2 border">0-75</td><td class="p-2 border">Good — minimal scale formation</td></tr>
            <tr><td class="p-2 border font-semibold text-blue-700">Moderate</td><td class="p-2 border">75-150</td><td class="p-2 border">Acceptable with sequestrants</td></tr>
            <tr><td class="p-2 border font-semibold text-amber-700">Hard</td><td class="p-2 border">150-300</td><td class="p-2 border">Scale formation, reduced caustic cleaning efficiency by 20-30%</td></tr>
            <tr><td class="p-2 border font-semibold text-rose-700">Very Hard</td><td class="p-2 border">&gt;300</td><td class="p-2 border">Serious scaling — mandatory softening required!</td></tr>
          </tbody>
        </table></div>

        <h4 class="font-bold mt-4 text-sky-900 border-b border-sky-100 pb-1">Langelier Saturation Index (LSI) & Ryznar Stability Index (RSI):</h4>
        <p class="text-sm">LSI = pH - pHs. LSI &gt; 0 = Scale forming; LSI &lt; 0 = Corrosive water. Target RSI: 6.0 - 7.0.</p>

        <h4 class="font-bold mt-4 text-sky-900 border-b border-sky-100 pb-1">Iron aur Manganese ki Problems:</h4>
        <p class="text-sm">High iron (&gt;0.3 mg/L) aur manganese (&gt;0.05 mg/L) oxidize hokar insoluble hydroxides banate hain. Brown/orange deposits, chlorine consumption, product color/flavor affect. Greensand filters use karein.</p>

        <h4 class="font-bold mt-4 text-sky-900 border-b border-sky-100 pb-1">Microbiological Quality Requirements:</h4>
        <ul class="list-disc list-inside mt-1 text-sm space-y-1">
          <li>Total Plate Count: &lt;100 CFU/mL</li>
          <li>Coliforms: Absent (0/100 mL)</li>
          <li>E. coli: Absent (0/100 mL)</li>
          <li>Turbidity: &lt;1 NTU</li>
          <li>Residual Chlorine: 0.2-0.5 mg/L</li>
        </ul>

        <h4 class="font-bold mt-4 text-sky-900 border-b border-sky-100 pb-1">Water Treatment Systems for Dairy:</h4>
        <p class="text-sm">Ion Exchange Softener resin reaction: <code>2 R-Na + Ca²⁺ ⇌ R₂-Ca + 2 Na⁺</code>. Regenerated with 10-15% Brine (NaCl).</p>
        <ul class="list-disc list-inside mt-1 space-y-1 text-sm">
          <li>Sand/Multimedia Filtration: Suspended solids remove</li>
          <li>Activated Carbon Filter: Chlorine, odor, organics remove</li>
          <li>Reverse Osmosis (RO): High purity water for sensitive applications</li>
          <li>UV Disinfection: Chemical-free microbial control (254 nm wavelength)</li>
        </ul>
      `
    },

    environmental_compliance: {
      title: "CIP Effluent Treatment aur Environmental Compliance",
      intro: "CIP operations se large volumes of chemical-laden wastewater generate hoti hai. Responsible treatment aur disposal dairy industry ka important responsibility hai.",
      htmlContent: `
        <h4 class="font-bold text-green-900 border-b border-green-100 pb-1">CIP Wastewater Characteristics:</h4>
        <div class="overflow-x-auto my-2"><table class="w-full border text-xs sm:text-sm">
          <thead><tr class="bg-green-100 text-green-900"><th class="p-2 border text-left font-bold">Parameter</th><th class="p-2 border text-left font-bold">Range</th><th class="p-2 border text-left font-bold">Environmental Concern</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border font-semibold">pH</td><td class="p-2 border">2-13</td><td class="p-2 border">Extreme pH aquatic life harm karta hai</td></tr>
            <tr><td class="p-2 border font-semibold">BOD₅</td><td class="p-2 border">1500-3500 mg/L</td><td class="p-2 border">High oxygen demand, eutrophication</td></tr>
            <tr><td class="p-2 border font-semibold">COD</td><td class="p-2 border">3000-7000 mg/L</td><td class="p-2 border">Organic pollution indicator</td></tr>
            <tr><td class="p-2 border font-semibold">Total Phosphorus</td><td class="p-2 border">50-200 mg/L</td><td class="p-2 border">Eutrophication</td></tr>
          </tbody>
        </table></div>

        <h4 class="font-bold mt-4 text-green-900 border-b border-green-100 pb-1">Treatment Methods:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1 text-sm">
          <li><strong>pH Neutralization:</strong> Equalization pit mein Acid aur Alkali streams self-neutralize hote hain; CO₂ gas injection or acid/lime dosing for final pH 6.5-8.5.</li>
          <li><strong>DAF (Dissolved Air Flotation):</strong> Fat aur suspended solids removal.</li>
          <li><strong>Biological Treatment (MBBR/SBR):</strong> BOD/COD reduction.</li>
        </ul>

        <h4 class="font-bold mt-4 text-green-900 border-b border-green-100 pb-1">Green CIP — Sustainable Practices:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1 text-sm">
          <li><strong>Caustic Recovery Unit (CRU):</strong> Ceramic nanofiltration se 80-85% pure hot caustic recover karein.</li>
          <li>Final rinse water ko next pre-rinse ke liye recycle karein (30-40% water saving).</li>
          <li>COW Water (Condensate of Whey) recovery in evaporators for CIP rinsing.</li>
        </ul>
      `
    },

    haccp_cip: {
      title: "CIP aur HACCP — Food Safety Management",
      intro: "CIP/SIP procedures HACCP framework ka essential PRP/oPRP component hain. Proper documentation aur verification FSSAI, ISO 22000 aur BRC standards ke liye mandatory hai.",
      htmlContent: `
        <h4 class="font-bold text-slate-900 border-b border-slate-200 pb-1">CIP Critical Limits — Monitoring Parameters:</h4>
        <div class="overflow-x-auto my-2"><table class="w-full border text-xs sm:text-sm">
          <thead><tr class="bg-slate-200 text-slate-900"><th class="p-2 border text-left font-bold">Parameter</th><th class="p-2 border text-left font-bold">Critical Limit</th><th class="p-2 border text-left font-bold">Monitoring Frequency</th></tr></thead>
          <tbody>
            <tr><td class="p-2 border font-semibold">Alkali Concentration</td><td class="p-2 border">0.5-1.5% NaOH</td><td class="p-2 border">Har cycle / Titration</td></tr>
            <tr><td class="p-2 border font-semibold">Acid Concentration</td><td class="p-2 border">0.5-1.0% HNO₃</td><td class="p-2 border">Har cycle / Titration</td></tr>
            <tr><td class="p-2 border font-semibold">Temperature</td><td class="p-2 border">70-80°C (alkali), 60-70°C (acid)</td><td class="p-2 border">Continuous / Inline sensor</td></tr>
            <tr><td class="p-2 border font-semibold">Flow Velocity</td><td class="p-2 border">≥ 1.5 - 2.0 m/s (Re &gt; 10,000)</td><td class="p-2 border">Continuous / Flow meter</td></tr>
            <tr><td class="p-2 border font-semibold">Final Rinse pH</td><td class="p-2 border">6.5-7.5</td><td class="p-2 border">Har cycle / Inline conductivity</td></tr>
            <tr><td class="p-2 border font-semibold">Sanitizer Conc.</td><td class="p-2 border">100-200 ppm (PAA / Cl)</td><td class="p-2 border">Har cycle / Test strips</td></tr>
          </tbody>
        </table></div>

        <h4 class="font-bold mt-4 text-slate-900 border-b border-slate-200 pb-1">Rapid ATP Bioluminescence Assay Physics:</h4>
        <p class="text-sm">Enzyme reaction: <code>ATP + Luciferin + O₂ → Oxyluciferin + AMP + PPi + Light (560 nm)</code>.</p>
        <ul class="list-disc list-inside mt-1 text-sm space-y-1">
          <li><strong>RLU &lt; 10:</strong> Pass (Hygienically clean)</li>
          <li><strong>10 ≤ RLU ≤ 30:</strong> Caution (Re-rinse required)</li>
          <li><strong>RLU &gt; 30:</strong> Fail (Immediate Re-CIP required!)</li>
        </ul>
      `
    },

    solution_strength: {
      title: "CIP Solution ki Strength ka Testing — Complete Methods",
      intro: "CIP solutions ki regular strength testing cleaning effectiveness ensure karne ke liye critical hai. Understrength = ineffective cleaning; overstrength = equipment damage + product contamination risk.",
      alkalinity_test: {
        title: "Washing Solution ki Strength Determine Karna (Alkalinity & Acid Test SOPs)",
        content: `
          <h5 class="font-bold text-indigo-900 mt-2">Method 1 — Qualitative Test (Rapid Field Test):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-1 text-sm">
            <li>10 mL detergent solution conical flask mein lein.</li>
            <li>12.5 mL N/10 HCl + 5 drops phenolphthalein indicator daalein.</li>
            <li>Red ho jaaye → alkalinity &gt;0.5% NaOH = SUFFICIENT.</li>
            <li>Colourless = alkalinity low — solution top up ya replace karein.</li>
          </ol>
          <h5 class="font-bold mt-4 text-indigo-900">Method 2 — Quantitative Direct Reading:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-1 text-sm">
            <li>10 mL sample in 100 mL conical flask.</li>
            <li>5 drops phenolphthalein indicator. Titrate with 2.5 N H₂SO₄ until colourless.</li>
            <li><strong>Calculation: mL of 2.5N H₂SO₄ = % NaOH directly.</strong></li>
          </ol>
          <h5 class="font-bold mt-4 text-indigo-900">Method 3 — Laboratory Method (Most Accurate):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-1 text-sm">
            <li>5 mL washing solution in 250 mL volumetric flask. Dilute to 250 mL with DI water.</li>
            <li>50 mL in conical flask → Phenolphthalein → Titrate with 0.1 N H₂SO₄ to colourless (Vol = "A" mL).</li>
            <li>Add Methyl Orange → Titrate to slight pink (Vol = "B" mL).</li>
          </ol>
          <p class="mt-2 p-3 bg-indigo-100 rounded-lg text-sm"><strong>Calculations:</strong><br/>
          % Free Caustic (NaOH) = (A − B) × 0.4<br/>
          % Total Alkali = (A + B) × 0.4</p>
          <h5 class="font-bold mt-4 text-indigo-900">Nitric Acid (HNO₃ %) Titration Formula:</h5>
          <p class="font-mono bg-indigo-50 p-2 text-center text-sm">% HNO₃ (w/v) = (V_NaOH × N_NaOH × 6.3) / V_Sample</p>
        `
      },
      calculators: {
        error_title: "Error",
        success_title: "Successfully Calculate Kiya Gaya",
        error_invalid_titre: "Kripya valid titre value enter karein.",
        naoh: { title: "NaOH (%)", description: "10 mL CIP solution sample ko 0.1 N acid (HCl) se phenolphthalein indicator ke saath titrate karein.", label: "0.1 N Acid Use (mL)", button: "NaOH % Calculate Karein", result_prefix: "Caustic Soda (NaOH):" },
        hno3: { title: "HNO₃ (%)", description: "10 mL CIP solution sample ko 0.1 N base (NaOH) se phenolphthalein indicator ke saath titrate karein.", label: "0.1 N Base Use (mL)", button: "HNO₃ % Calculate Karein", result_prefix: "Nitric Acid (HNO₃):" }
      }
    }
  },

  en: {
    main_title: "Cleaning and Sanitization of Dairy Instruments",
    main_description: "A comprehensive scientific guide covering CIP, SIP, chemicals, testing methods, biofilm, water quality, and HACCP compliance.",

    intro: {
      title: "Introduction: CIP, CAC & Milk Stone",
      htmlContent: `
        <p>Residual milk on dairy instrument surfaces provides an excellent medium for microbial growth. Milk contains proteins, fats, lactose, and minerals that are ideal nutrients for bacteria.</p>
        
        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Types of Dairy Soil:</h4>
        <div class="overflow-x-auto my-3">
          <table class="w-full border text-xs sm:text-sm">
            <thead>
              <tr class="bg-indigo-100 text-indigo-900">
                <th class="p-2 border text-left font-bold">Soil Type</th>
                <th class="p-2 border text-left font-bold">Major Components</th>
                <th class="p-2 border text-left font-bold">Solubility Characteristic</th>
                <th class="p-2 border text-left font-bold">Target Chemical Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="p-2 border font-semibold">Carbohydrates (Lactose)</td>
                <td class="p-2 border">Sugars, Monosaccharides</td>
                <td class="p-2 border">Highly water soluble</td>
                <td class="p-2 border">Warm water (40-50°C) pre-rinse</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="p-2 border font-semibold">Organic Soil (Protein)</td>
                <td class="p-2 border">Casein, whey proteins denatured by heat</td>
                <td class="p-2 border">Insoluble in water; Hydrolyzable in alkali</td>
                <td class="p-2 border">Sodium Hydroxide (NaOH 0.5-2.0%), 70-80°C</td>
              </tr>
              <tr class="bg-white">
                <td class="p-2 border font-semibold">Organic Soil (Fat)</td>
                <td class="p-2 border">Milk fat (Triglycerides)</td>
                <td class="p-2 border">Saponifiable in alkaline solutions</td>
                <td class="p-2 border">Alkaline cleaner + Surfactants/Teepol</td>
              </tr>
              <tr class="bg-slate-50">
                <td class="p-2 border font-semibold">Mineral Soil (Milk Stone)</td>
                <td class="p-2 border">Ca & Mg phosphate/carbonate salts</td>
                <td class="p-2 border">Insoluble in alkali, soluble in acid</td>
                <td class="p-2 border">Nitric Acid (HNO₃ 0.5-1.0%) / Phosphoric Acid</td>
              </tr>
              <tr class="bg-white">
                <td class="p-2 border font-semibold">Microbial Biofilm</td>
                <td class="p-2 border">Bacteria encased in EPS matrix</td>
                <td class="p-2 border">1000x more resistant to sanitizers</td>
                <td class="p-2 border">Peracetic Acid (PAA), Enzymes, Chlorine Dioxide</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">What is CIP / CAC?</h4>
        <p><strong>CIP (Cleaning-In-Place):</strong> Automated method to clean pipelines and tanks without disassembly. High velocity turbulent flow (≥ 1.5 - 2.0 m/s, Re &gt; 10,000) provides mechanical scrubbing. Developed in the 1950s.</p>
        <p><strong>CAC / COP (Cleaning-Out-of-Place):</strong> Parts disassembled and cleaned in dedicated COP/ultrasonic tanks (cream separator discs, homogenizer valves, pump heads).</p>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Types of CIP Systems:</h4>
        <p><strong>Single Pass:</strong> Fresh chemical solution used for each cycle — simpler but consumes more water/chemicals.</p>
        <p><strong>Recirculation:</strong> Solutions mixed in external tanks and recirculated — higher initial investment but saves water/chemicals. Preferred method in modern dairies.</p>
        <p><strong>Centralized Multi-Circuit:</strong> Single CIP station serves multiple lines under PLC/SCADA control with full data logging.</p>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">CIP Fluid Dynamics: Reynolds Number (Re) & Wall Shear Stress</h4>
        <p>Turbulent flow is essential during CIP. Reynolds Number equation: <strong>Re = (ρ × v × D) / μ</strong>.</p>
        <ul class="list-disc list-inside space-y-1 text-sm mt-1">
          <li><strong>Re &lt; 2,100:</strong> Laminar Flow (Ineffective for cleaning).</li>
          <li><strong>Re &gt; 10,000:</strong> Fully Turbulent Flow (Required for CIP — creates high wall shear stress eddies).</li>
          <li><strong>Wall Shear Stress (τ<sub>w</sub>):</strong> Minimum <strong>10 - 15 Pascal (Pa)</strong> required. Linear velocity <strong>≥ 1.5 - 2.0 m/s</strong> in pipelines.</li>
        </ul>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">TACT Principle (4 CIP Fundamentals):</h4>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>T - Time:</strong> Sufficient contact time (15-45 mins per phase).</li>
          <li><strong>A - Action:</strong> Turbulent flow (Re &gt; 10,000) = mechanical scrubbing force.</li>
          <li><strong>C - Concentration:</strong> Optimum chemical strength (NaOH 0.5-2.0%, HNO₃ 0.5-1.0%, PAA 100-200 ppm).</li>
          <li><strong>T - Temperature:</strong> Arrhenius law — reaction rate doubles for every 10°C rise (Max 80-85°C).</li>
        </ul>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Milk Stone:</h4>
        <p>Accumulation of dried milk solids and mineral salts from hot water and detergent solutions. Acceleration occurs at pasteurization temperatures (72-75°C) due to inverse thermal solubility of calcium phosphate.</p>
        <p><strong>Composition:</strong> 2.6-8.7% moisture, 3.6-17.6% fat, 4.4-43.8% protein, 42-67% ash.</p>
        <p><strong>Formation Mechanism:</strong> Beta-lactoglobulin denatures above 70°C to form thiol-disulfide bonds with stainless steel, co-precipitating with calcium phosphate.</p>
        <p><strong>Water Hardness Effect:</strong> Hard water significantly accelerates milk stone formation — water softening is recommended.</p>
      `
    },

    cip_cycle: {
      title: "Standard CIP Cleaning Cycle — Scientific Explanation",
      intro: "Step-by-step SOP for standard 6-step CIP cycle. Following proper sequence is essential — reordering steps significantly reduces cleaning effectiveness.",
      steps: [
        {
          title: "1. Pre-rinse (Warm Water 40-50°C)",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Objective:</strong> Flush out 85-90% of loose soil and free milk residue.</p>
          <p><strong>Procedure:</strong> Rinse with warm water (40-50°C) for 10-15 minutes.</p>
          <p><strong>Science:</strong> Water &gt;60°C denatures proteins and bakes them onto surfaces. Water &lt;35°C solidifies fat. 40-50°C is optimal: milk fat melts (~35-40°C) while proteins remain in native state for easy flushing.</p>
          <p class="mt-2 font-semibold">Quality Check: Discharge water should run clear (Turbidity &lt; 5 NTU).</p>`
        },
        {
          title: "2. Alkaline Caustic Wash (NaOH 0.5-2.0% at 70-80°C)",
          colorClass: "bg-orange-100 border-orange-300",
          details: `<p><strong>Objective:</strong> Remove organic fats and proteins.</p>
          <p><strong>Procedure:</strong> Recirculate 0.5-2.0% NaOH solution at 70-80°C for 15-30 minutes.</p>
          <p><strong>Science — Three Key Reactions:</strong></p>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Saponification:</strong> Triglycerides + 3 NaOH → Soluble Soap + Glycerol</li>
            <li><strong>Protein Hydrolysis:</strong> Alkali breaks peptide bonds into soluble peptides/amino acids</li>
            <li><strong>Emulsification & Sequestration:</strong> Fat droplets remain suspended; EDTA/Gluconate sequesters calcium.</li>
          </ul>
          <p class="mt-1">Arrhenius law: Reaction rate at 70°C is 8-16x faster than at 40°C.</p>
          <p><strong>Concentrations:</strong> Cans: 0.5% | Pipelines: 0.5-1.0% | Bottles: 1.5-2.0% | HTST: 1.5-2.0% | Evaporators: 2.0-3.0%.</p>`
        },
        {
          title: "3. Intermediate Rinse (Warm Water 50-60°C)",
          colorClass: "bg-gray-100 border-gray-300",
          details: `<p><strong>Objective:</strong> Completely remove caustic residues prior to acid wash.</p>
          <p><strong>Procedure:</strong> Rinse with warm water (50-60°C) for 5-10 minutes until neutral pH is reached.</p>
          <p><strong>Science:</strong> Caustic residue wastes acid via neutralization (NaOH + HNO₃ → NaNO₃ + H₂O), reducing acid efficacy and causing violent exothermic heat generation.</p>
          <p class="mt-2 font-semibold">Quality Check: Rinse water pH should reach 7-8.</p>`
        },
        {
          title: "4. Acid Wash (HNO₃ 0.5-1.0% at 60-70°C)",
          colorClass: "bg-yellow-100 border-yellow-300",
          details: `<p><strong>Objective:</strong> Remove milk stone and mineral deposits (CaCO₃, MgCO₃, Calcium Phosphate).</p>
          <p><strong>Procedure:</strong> Recirculate 0.5-1.0% HNO₃ or H₃PO₄ at 60-70°C for 10-20 minutes.</p>
          <p><strong>Science:</strong> Converts insoluble mineral deposits into soluble salts:</p>
          <ul class="list-disc list-inside mt-1">
            <li>Ca₃(PO₄)₂ + 4 HNO₃ → 3 Ca(NO₃)₂ (soluble) + 2 H₂PO₄⁻</li>
            <li>CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑</li>
          </ul>
          <p class="mt-1"><strong>HNO₃ Advantage:</strong> Regenerates the protective Chromium Oxide (Cr₂O₃) passivation layer on Stainless Steel (SS 304/316L).</p>`
        },
        {
          title: "5. Final Potable Water Rinse",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Objective:</strong> Remove all acid traces and return system to neutral pH.</p>
          <p><strong>Procedure:</strong> Flush with cold potable water for 5-10 minutes until pH 6.5-7.5 and inline conductivity &lt; 10 µS/cm.</p>
          <p><strong>Science:</strong> Microbiological standard: TPC &lt; 100 CFU/mL, Coliforms 0/100 mL.</p>`
        },
        {
          title: "6. Sanitization / Disinfection",
          colorClass: "bg-green-100 border-green-300",
          details: `<p><strong>Objective:</strong> Reduce remaining microorganisms by 5-log (99.999%).</p>
          <p><strong>Methods:</strong></p>
          <div class="overflow-x-auto my-2"><table class="w-full text-xs border">
            <thead><tr class="bg-green-200"><th class="p-1 border text-left">Method</th><th class="p-1 border text-left">Conditions</th><th class="p-1 border text-left">Advantage</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">Hot Water</td><td class="p-1 border">85-95°C, 10-15 min</td><td class="p-1 border">No chemical residue</td></tr>
              <tr><td class="p-1 border">Chlorine</td><td class="p-1 border">150-200 ppm, pH 6.5-7.5</td><td class="p-1 border">Fast, inexpensive</td></tr>
              <tr><td class="p-1 border">Peracetic Acid (PAA)</td><td class="p-1 border">100-200 ppm, 20-30°C</td><td class="p-1 border">Biofilm effective, zero toxic residue</td></tr>
              <tr><td class="p-1 border">QAC</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">Residual activity</td></tr>
            </tbody>
          </table></div>
          <p class="mt-2"><strong>Log Reduction:</strong> 3-log = 99.9% kill | 5-log = 99.999% kill. Minimum 3-log required in dairy.</p>`
        }
      ]
    },

    chemicals: {
      title: "CIP Chemicals — Scientific Guide",
      intro: "Understanding the science behind each chemical category is essential for selecting correct concentration, temperature, and sequence.",
      types: [
        {
          title: "Alkaline Detergents",
          details: `<p><strong>Examples:</strong> NaOH, KOH, Na₂CO₃, Sodium metasilicate, STPP, Sodium gluconate, EDTA.</p>
          <p><strong>Mechanism:</strong> NaOH saponifies fat. STPP sequesters Ca²⁺/Mg²⁺. Chelating agents form stable soluble metal complexes.</p>
          <p><strong>pH:</strong> 11-14 | <strong>Effective against:</strong> Fats, proteins, sugars | <strong>Safety:</strong> Highly corrosive, PPE required.</p>`
        },
        {
          title: "Acid Detergents",
          details: `<p><strong>Examples:</strong> HNO₃, H₃PO₄, Citric acid, Gluconic acid, Sulfamic acid.</p>
          <p><strong>Mechanism:</strong> Converts mineral scale into soluble salts. HNO₃ passivates stainless steel (Cr₂O₃ layer).</p>
          <p><strong>pH:</strong> 1-3 | <strong>Effective against:</strong> Milk stone, water scale, rust | <strong>Safety:</strong> Always add acid to water!</p>`
        },
        {
          title: "Enzyme-based / Neutral Cleaners",
          details: `<p><strong>Examples:</strong> Protease cleaners, Lipase cleaners, Teepol, Nonionic surfactant blends.</p>
          <p><strong>Mechanism:</strong> Biologically degrades specific substrates (proteases break down proteins, lipases break down fats). Ideal for membrane CIP.</p>
          <p><strong>pH:</strong> 6-8 | <strong>Optimal Temp:</strong> 40-55°C | <strong>Advantages:</strong> Gentle on seals and membranes.</p>`
        },
        {
          title: "Sanitizers — Detailed Comparison",
          details: `<div class="overflow-x-auto my-2"><table class="w-full text-xs border">
            <thead><tr class="bg-purple-200"><th class="p-1 border text-left">Sanitizer</th><th class="p-1 border text-left">Conc.</th><th class="p-1 border text-left">pH Range</th><th class="p-1 border text-left">Mechanism</th><th class="p-1 border text-left">Limitation</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border font-semibold">Chlorine (NaOCl)</td><td class="p-1 border">100-200 ppm</td><td class="p-1 border">6.5-7.5</td><td class="p-1 border">HOCl cell membrane disruption</td><td class="p-1 border">Pitting corrosion on SS 304 if &gt;50°C</td></tr>
              <tr><td class="p-1 border font-semibold">Peracetic Acid (PAA)</td><td class="p-1 border">100-300 ppm</td><td class="p-1 border">2-7</td><td class="p-1 border">Strong oxidizer (1.81 eV)</td><td class="p-1 border">Pungent odor</td></tr>
              <tr><td class="p-1 border font-semibold">QAC (Quats)</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">7-10</td><td class="p-1 border">Binds negatively charged membrane</td><td class="p-1 border">Foam, MRL concerns</td></tr>
              <tr><td class="p-1 border font-semibold">Hot Water</td><td class="p-1 border">85-95°C</td><td class="p-1 border">Neutral</td><td class="p-1 border">Heat denaturation</td><td class="p-1 border">High energy cost</td></tr>
            </tbody>
          </table></div>`
        },
        {
          title: "Sequestrants and Water Softeners",
          details: `<p><strong>Examples:</strong> EDTA, STPP, Sodium Gluconate, Polyphosphates.</p>
          <p><strong>Mechanism:</strong> Sequestrants inactivate Ca²⁺/Mg²⁺ by forming soluble chelates. Ion exchange resins replace Ca²⁺/Mg²⁺ with Na⁺ (true softening).</p>`
        }
      ]
    },

    advantages: {
      title: "CIP System Advantages",
      list: [
        "Guaranteed and repeatable quality assurance — every cycle is documented and verifiable.",
        "Complete data logging for FSSAI, ISO 22000, and HACCP compliance.",
        "Reduces cleaning costs by 30-50% via chemical recirculation.",
        "Cleans inaccessible pipe bends and crevices effectively where manual cleaning is impossible.",
        "Improves operator safety with minimal direct chemical contact.",
        "Reduces production downtime by 60-70% compared to manual cleaning.",
        "Significantly reduces labor requirements.",
        "Precision chemical dosing avoids both overuse and underuse.",
        "Reduces water consumption by 30-40% in recirculation systems.",
        "Eliminates human error.",
        "Real-time monitoring allows immediate detection of cleaning failures."
      ]
    },

    cleaning_procedures: {
      title: "Equipment-Specific CIP SOPs",
      sections: [
        {
          title: "Milk Can Cleaning",
          content: `<p><strong>Aluminium Note:</strong> Avoid strong NaOH (&gt;2%) on amphoteric aluminium cans (2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑). Use mild alkaline cleaners (0.5-1.0%). Manual and rotary washer SOPs.</p>`
        },
        {
          title: "Cream Separator / Clarifier COP",
          content: `<p>Daily bowl dismantling is required due to "separator slime" accumulation on bowl periphery. Order disc stack during COP cleaning.</p>`
        },
        {
          title: "Plate Heat Exchangers (PHE) Cleaning",
          content: `<p>Daily CIP sequence: Pre-rinse 40-50°C → Acid wash 0.5-1.0% (70°C, 20-30m) → Intermediate rinse → Alkali wash 0.5-1.0% (70°C, 20-30m) → Final rinse & PAA sanitization. Periodic gasket inspection and plate descaling.</p>`
        },
        {
          title: "Milk Storage Tank Cleaning",
          content: `<p>Cleaned via dynamic rotary jet spray balls at Q = 1.5-2.0 m³/hr per meter perimeter at 1.8-2.5 bar pressure. Riboflavin UV coverage test.</p>`
        },
        {
          title: "HTST Pasteurizer Cleaning",
          content: `<p>0.5-1.0% NaOH (75-80°C, 30-45m) → Intermediate rinse → 0.5-1.0% HNO₃ (65-70°C, 20-30m) → Final rinse → Thermal/PAA sanitization. Flow Diversion Valve (FDV) function test mandatory.</p>`
        },
        {
          title: "Homogenizer Cleaning",
          content: `<p>High-pressure cavitation deposits require COP dismantling of homogenizing valves and impact rings for ultrasonic bath cleaning.</p>`
        },
        {
          title: "Membrane Filtration Units (UF, RO, NF, MF)",
          content: `<p>Limits: Temp ≤ 50°C, pH 2.0-10.5. Protease enzymatic bio-cleaners + PAA sanitization.</p>`
        }
      ]
    },

    teepol_detergent: {
      title: "Liquid Detergent Formulation & Testing",
      htmlContent: `
        <p>Neutral liquid detergents (e.g. Teepol) are widely used for manual washing. Surfactants contain hydrophilic heads and hydrophobic tails that reduce surface tension (72.8 to 28-35 dynes/cm) and form micelles around lipid soil.</p>
        
        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">1. Neutral Teepol Batch Recipe (1000L):</h4>
        <div class="overflow-x-auto my-3"><table class="w-full border text-xs sm:text-sm"><thead><tr class="bg-indigo-100 text-indigo-900"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border font-semibold">DM Water</td><td class="p-2 border">820-840</td><td class="p-2 border">82-84%</td><td class="p-2 border">Main Solvent Base</td></tr>
        <tr><td class="p-2 border font-semibold">LABSA (Acid Slurry 90%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Main Cleaning Agent (Anionic Surfactant)</td></tr>
        <tr><td class="p-2 border font-semibold">Caustic Soda (NaOH 47%)</td><td class="p-2 border">~28</td><td class="p-2 border">~2.8%</td><td class="p-2 border">LABSA Neutralization (pH 7.0)</td></tr>
        <tr><td class="p-2 border font-semibold">SLES (70%)</td><td class="p-2 border">45</td><td class="p-2 border">4.5%</td><td class="p-2 border">Secondary Anionic Surfactant & Foam stabilizer</td></tr>
        <tr><td class="p-2 border font-semibold">Salt (NaCl) / Urea</td><td class="p-2 border">20-40</td><td class="p-2 border">2-4%</td><td class="p-2 border">Viscosity Enhancer (300-500 cP)</td></tr>
        <tr><td class="p-2 border font-semibold">STPP / EDTA</td><td class="p-2 border">12</td><td class="p-2 border">1.2%</td><td class="p-2 border">Builder & Heavy metal sequestrant</td></tr>
        </tbody></table></div>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">2. Acidic CIP Cleaner Batch Recipe (1000L):</h4>
        <p>Water 880 kg (88%) + HCl 33% / HNO₃ 68% 100 kg (10%) + Non-ionic Surfactant 20 kg (2%). Target pH 1-2. Always add acid to water!</p>

        <h4 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">3. Active Matter & Field Testing:</h4>
        <p>MBAS (Methylene Blue Active Substances) Spectrophotometric Test at 650 nm and rapid field pH paper testing.</p>
      `
    },

    sip: {
      title: "SIP (Sterilization-In-Place) Guide",
      intro: "Achieves commercial sterility (SAL 10⁻⁶) using Culinary Pure Saturated Steam (121.1°C for 20-30 min, target F₀ ≥ 12 min). Verified using *Geobacillus stearothermophilus* (ATCC 7953) 10⁶ spore challenge test.",
      process: `
        <h5 class="font-bold text-indigo-900 border-b border-indigo-100 pb-1">CIP vs SIP Parameters:</h5>
        <p>CIP reduces soil and microbial load (3-5 log), while SIP achieves commercial sterility (6-12 log reduction at 15-30 psi steam pressure).</p>

        <h5 class="font-bold mt-4 text-indigo-900 border-b border-indigo-100 pb-1">Thermal Death Kinetics & SOP:</h5>
        <p>F₀ = ∫ 10^[(T(t) - 121.1) / Z] dt. 10-step SOP: CIP verification → System drain → Pure steam supply → Air elimination → Holding phase (121.1°C, 30m) → 0.5 bar sterile nitrogen/air overpressure during cooling.</p>
      `
    },

    biofilm: {
      title: "Biofilm Microbiology & Control",
      intro: "Biofilms consist of bacterial communities embedded in an Extracellular Polymeric Substance (EPS) matrix (polysaccharides, eDNA, proteins). Provides 1000x higher sanitizer resistance.",
      htmlContent: `<p>Organisms: *Pseudomonas fluorescens* (psychrotrophic lipases/proteases), *Listeria monocytogenes*, *Bacillus cereus* spores, and *Cronobacter sakazakii*. Eradicated via Protease enzymatic cleaners followed by PAA 200 ppm or ClO₂ shock.</p>`
    },

    water_quality: {
      title: "CIP Water Quality & Softening",
      intro: "Water hardness (>150 ppm CaCO₃) reduces caustic cleaning efficiency by 20-30%. Langelier Saturation Index (LSI) & Ryznar Stability Index (RSI) used to monitor scaling vs corrosive tendencies. Sodium SAC ion-exchange softeners replace Ca²⁺/Mg²⁺ with Na⁺.",
      htmlContent: `<p>Microbiological standards: TPC < 100 CFU/mL, Coliforms 0/100 mL, Turbidity < 1 NTU.</p>`
    },

    environmental_compliance: {
      title: "Environmental Compliance & Green CIP",
      intro: "CIP Effluent: BOD₅ (1500-3500 mg/L), COD (3000-7000 mg/L), pH 2-13. Continuous automated neutralization pits (CO₂ gas injection). Caustic Recovery Units (CRU) using ceramic nanofiltration recover 80-85% pure hot caustic lye.",
      htmlContent: `<p>Final rinse water reuse for next pre-rinse saves 30-40% water.</p>`
    },

    haccp_cip: {
      title: "HACCP Validation & Rapid ATP Testing",
      intro: "CIP monitoring relies on inline flow, temperature, and conductivity sensors. Verification via Rapid ATP Bioluminescence: <10 RLU/100 cm² = Pass.",
      htmlContent: `<p>Microbiological swabbing validation: TPC < 5 CFU/cm², Coliforms 0/cm².</p>`
    },

    solution_strength: {
      title: "Chemical Titration Protocols & Testing",
      intro: "Quantitative titrations for NaOH % and HNO₃ %:",
      alkalinity_test: {
        title: "NaOH & HNO₃ Titration SOPs",
        content: `
          <p class="font-mono bg-indigo-50 p-2 text-center">% NaOH (w/v) = (V_HCl × N_HCl × 4.0) / V_Sample</p>
          <p class="font-mono bg-indigo-50 p-2 text-center mt-2">% HNO₃ (w/v) = (V_NaOH × N_NaOH × 6.3) / V_Sample</p>
        `
      },
      calculators: {
        error_title: "Error",
        success_title: "Calculated Successfully",
        error_invalid_titre: "Please enter a valid titre value.",
        naoh: { title: "NaOH (%)", description: "Titrate 10 mL CIP solution sample with 0.1 N acid (HCl) using phenolphthalein indicator.", label: "0.1 N Acid Used (mL)", button: "Calculate NaOH %", result_prefix: "Caustic Soda (NaOH):" },
        hno3: { title: "HNO₃ (%)", description: "Titrate 10 mL CIP solution sample with 0.1 N base (NaOH) using phenolphthalein indicator.", label: "0.1 N Base Used (mL)", button: "Calculate HNO₃ %", result_prefix: "Nitric Acid (HNO₃):" }
      }
    }
  }
};
