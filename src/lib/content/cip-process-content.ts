// CIP PROCESS CONTENT - UPGRADED VERSION
// New topics added: biofilm, water_quality, environmental_compliance, haccp_cip
// All existing topics expanded with detailed scientific information

export const cipProcessContent = {
  hi: {
    main_title: "Dairy Instruments ki Dhulai aur Safai",
    main_description: "CIP, SIP, chemicals, testing methods, biofilm, water quality aur HACCP compliance ke saath ek comprehensive scientific guide.",

    intro: {
      title: "Introduction: CIP, CAC aur Milk Stone",
      htmlContent: `
        <p>Dairy instruments ki surface par bacha hua doodh microbial growth ke liye ek excellent medium pradan karta hai. Doodh mein proteins, fats, lactose aur minerals hote hain jo bacteria ke liye ideal nutrient source hain.</p>
        <h4 class="font-bold mt-4">Dairy Soil ke Prakar:</h4>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Mineral Soil:</strong> Ca aur Mg ke phosphate/carbonate salts (milk stone). Alkali mein insoluble, acid mein soluble.</li>
          <li><strong>Organic Soil (Protein):</strong> Casein, whey proteins jo heat se denature hokar surface se chipak jaate hain. Alkali se hydrolysis hote hain.</li>
          <li><strong>Organic Soil (Fat):</strong> Milk fat jo alkaline solution mein saponification se dissolve hoti hai.</li>
          <li><strong>Microbial Biofilm:</strong> Bacteria ki organized colony jo surface par ek protective EPS matrix mein encased hoti hai.</li>
        </ul>
        <h4 class="font-bold mt-4">CIP/CAC Kya Hai?</h4>
        <p><strong>CIP (Cleaning-In-Place):</strong> Automated method jismein pipelines, tanks ko bina disassemble kiye saaf kiya jaata hai. High velocity turbulent flow (≥ 1.5 m/s) mechanical scrubbing effect paida karta hai. CIP 1950s mein dairy industry mein develop hua tha.</p>
        <p><strong>CAC / COP (Cleaning-Out-of-Place):</strong> Chhote parts disassemble karke dedicated area mein manually saaf kiye jaate hain. Cream separators, pump heads examples hain.</p>
        <h4 class="font-bold mt-4">CIP Systems ke Types:</h4>
        <p><strong>Single Pass:</strong> Har cycle ke liye naya solution — simpler lekin zyada water/chemical use karta hai.</p>
        <p><strong>Recirculation:</strong> Solutions external tanks mein mix karke recirculate kiye jaate hain — zyada initial investment lekin kam water/chemical. Modern dairies ka preferred method.</p>
        <p><strong>Centralized Multi-Circuit:</strong> Single CIP unit multiple lines serve karti hai — PLC controlled, full data logging.</p>
        <h4 class="font-bold mt-4">TACT Principle (CIP ke 4 Fundamentals):</h4>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>T - Time:</strong> Sufficient contact time — kam time = incomplete cleaning.</li>
          <li><strong>A - Action:</strong> Turbulent flow (Re > 10,000) = mechanical scrubbing.</li>
          <li><strong>C - Concentration:</strong> Sahi chemical concentration — bahut kam ineffective, bahut zyada corrosive.</li>
          <li><strong>T - Temperature:</strong> Arrhenius law — har 10°C rise se reaction rate ~2x badhti hai.</li>
        </ul>
        <h4 class="font-bold mt-4">Milk Stone:</h4>
        <p>Hot water aur detergent solutions se sookhe doodh ke solids aur mineral salts ka accumulation. Pasteurization temperatures (72-75°C) par formation accelerate hoti hai kyunki calcium phosphate ki solubility heat mein inverse hoti hai.</p>
        <p><strong>Composition:</strong> 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% protein; 42-67% ash.</p>
        <p><strong>Formation Mechanism:</strong> Heat se Ca²⁺ aur phosphate ions precipitate hote hain. Beta-lactoglobulin 70°C+ par denature hokar stainless steel se chemical bond banata hai — yahi primary mechanism hai.</p>
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
          <p class="mt-2 font-semibold">Quality Check: End mein paani saaf ya halka cloudy hona chahiye.</p>`
        },
        {
          title: "2. Kshariya Dhulai (Alkali Wash)",
          colorClass: "bg-orange-100 border-orange-300",
          details: `<p><strong>Uddeshya:</strong> Fat aur protein remove karna.</p>
          <p><strong>Prakriya:</strong> 0.5-2.0% NaOH solution, 70-80°C par 15-30 minute circulate.</p>
          <p><strong>Vigyan — Teen Key Reactions:</strong></p>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Saponification:</strong> Fat + NaOH → Soap (soluble) + Glycerol</li>
            <li><strong>Protein Hydrolysis:</strong> Alkali peptide bonds todhta hai — soluble peptides banate hain</li>
            <li><strong>Emulsification:</strong> Fat droplets suspend rehte hain drainage ke liye</li>
          </ul>
          <p class="mt-1">Arrhenius law: 70°C par reaction rate 40°C se 8-16x faster hoti hai.</p>
          <p><strong>Concentrations:</strong> Can: 0.5% | Bottle: 1.5-2.0% | Pipelines: 0.5-1.0%</p>`
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
          details: `<p><strong>Uddeshya:</strong> Milk stone aur mineral deposits (CaCO₃, MgCO₃) remove karna.</p>
          <p><strong>Prakriya:</strong> 0.5-1.0% HNO₃ ya H₃PO₄, 60-70°C par 10-20 minute.</p>
          <p><strong>Vigyan:</strong> Milk stone mein Ca₃(PO₄)₂ aur CaCO₃ hote hain — alkali mein insoluble lekin acid mein soluble:</p>
          <ul class="list-disc list-inside mt-1">
            <li>Ca₃(PO₄)₂ + 4HNO₃ → 3Ca(NO₃)₂ + 2H₂PO₄⁻ (soluble)</li>
            <li>CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          </ul>
          <p class="mt-1"><strong>HNO₃ Advantage:</strong> Stainless steel par Cr₂O₃ passivation layer banata hai — corrosion resistance badhti hai. Dairy ke liye preferred.</p>`
        },
        {
          title: "5. Antim Dhulai (Final Rinse)",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Uddeshya:</strong> Acid ke sabhi traces remove karna.</p>
          <p><strong>Prakriya:</strong> Thande potable water se rinse jab tak pH 6.5-7.5 na ho. Min 5-10 minute.</p>
          <p><strong>Vigyan:</strong> Trace acid bhi milk pH aur quality affect karta hai. Rinse water potable quality hona chahiye (TPC &lt;100 CFU/mL). Modern systems mein inline conductivity meters rinse completion detect karte hain.</p>`
        },
        {
          title: "6. Keetnashak / Sanitization",
          colorClass: "bg-green-100 border-green-300",
          details: `<p><strong>Uddeshya:</strong> Remaining microorganisms ko acceptable level tak reduce karna.</p>
          <p><strong>Methods:</strong></p>
          <table class="w-full text-xs mt-2 border">
            <thead><tr class="bg-green-200"><th class="p-1 border">Method</th><th class="p-1 border">Conditions</th><th class="p-1 border">Advantage</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">Hot Water</td><td class="p-1 border">90-95°C, 10-15 min</td><td class="p-1 border">No chemical residue</td></tr>
              <tr><td class="p-1 border">Chlorine</td><td class="p-1 border">150-200 ppm, pH 6.5-7.5</td><td class="p-1 border">Fast, inexpensive</td></tr>
              <tr><td class="p-1 border">PAA</td><td class="p-1 border">100-300 ppm</td><td class="p-1 border">Biofilm effective</td></tr>
              <tr><td class="p-1 border">QAC</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">Residual activity</td></tr>
            </tbody>
          </table>
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
          details: `<p><strong>Examples:</strong> NaOH, Na₂CO₃, Sodium metasilicate, STPP, Sodium gluconate.</p>
          <p><strong>Mechanism:</strong> NaOH fat saponify karta hai. Builders (STPP) Ca²⁺/Mg²⁺ sequester karte hain. Chelating agents metal ions ke saath stable complexes banate hain redeposition rokne ke liye.</p>
          <p><strong>pH:</strong> 11-14 | <strong>Effective against:</strong> Fats, proteins, sugars | <strong>Not against:</strong> Mineral deposits.</p>
          <p class="text-red-700 font-semibold mt-2">⚠ Safety: Corrosive — PPE (gloves, goggles, apron) zaroori.</p>`
        },
        {
          title: "Acid Detergents (Amleey Cleaners)",
          details: `<p><strong>Examples:</strong> HNO₃, H₃PO₄, Citric acid, Gluconic acid, Sulfamic acid.</p>
          <p><strong>Mechanism:</strong> Mineral salts ko soluble form mein convert karte hain. HNO₃ stainless steel ko passivate bhi karta hai. Chelating acids metal ions ke saath stable complexes banati hain.</p>
          <p><strong>pH:</strong> 1-3 (strong), 3-4 (food-grade) | <strong>Effective against:</strong> Milk stone, water scale, rust.</p>
          <p class="text-red-700 font-semibold mt-2">⚠ Safety: Hamesha acid ko PAANI MEIN daalein — kabhi paani ko acid mein nahi! Highly corrosive.</p>`
        },
        {
          title: "Enzyme-based / Neutral Cleaners",
          details: `<p><strong>Examples:</strong> Protease cleaners, Lipase cleaners, Teepol, Nonionic surfactant blends.</p>
          <p><strong>Mechanism:</strong> Enzymes specific substrate biologically degrade karte hain. Protease proteins ko peptides mein todhti hai, Lipase fats ko fatty acids mein. Low-temperature cleaning ke liye ideal.</p>
          <p><strong>pH:</strong> 6-8 | <strong>Optimal Temp:</strong> 40-55°C | <strong>Advantages:</strong> Metal aur seals ke liye gentle, environment-friendly.</p>`
        },
        {
          title: "Sanitizers — Detailed Comparison",
          details: `<table class="w-full text-xs mt-2 border">
            <thead><tr class="bg-purple-200"><th class="p-1 border">Sanitizer</th><th class="p-1 border">Conc.</th><th class="p-1 border">pH Range</th><th class="p-1 border">Mechanism</th><th class="p-1 border">Limitation</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">Chlorine (NaOCl)</td><td class="p-1 border">100-200 ppm</td><td class="p-1 border">6.5-7.5</td><td class="p-1 border">HOCl cell membrane disrupt karta hai</td><td class="p-1 border">pH sensitive, corrosive</td></tr>
              <tr><td class="p-1 border">Peracetic Acid</td><td class="p-1 border">100-300 ppm</td><td class="p-1 border">2-7</td><td class="p-1 border">Strong oxidizer — proteins oxidize</td><td class="p-1 border">Pungent smell</td></tr>
              <tr><td class="p-1 border">QAC (Quats)</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">7-10</td><td class="p-1 border">Negatively charged membrane se bind</td><td class="p-1 border">Foam, limited vs spores</td></tr>
              <tr><td class="p-1 border">Hot Water</td><td class="p-1 border">90-95°C</td><td class="p-1 border">Neutral</td><td class="p-1 border">Heat denaturation</td><td class="p-1 border">High energy cost</td></tr>
            </tbody>
          </table>`
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
          <h5 class="font-bold mt-3">Manual Washing:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Khaali hone ke turant baad warm water (40°C) se rinse, brush se loose soil remove.</li>
            <li>50°C detergent solution mein 5-10 minute soak (1% sodium hexametaphosphate/trisodium phosphate/sodium carbonate/teepol).</li>
            <li>Garam detergent solution se interior thoroughly brush — bottom aur neck par special attention.</li>
            <li>Hot water (70-75°C) se rinse karein.</li>
            <li>Steam (100°C, 5 min) ya 200 ppm chlorine se sanitize karein.</li>
            <li>Inverted position mein draining rack par store karein.</li>
          </ol>
          <h5 class="font-bold mt-3">Mechanical Washing (Rotary/Tunnel Washer):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
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
          <ol class="list-decimal list-inside space-y-1 mt-2">
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
          <h5 class="font-bold mt-3">Daily CIP:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Lukewarm water (40-50°C) se 10 min rinse — flow direction reverse karein better coverage ke liye.</li>
            <li>Acid detergent (0.5-1.0%) 70°C par 20-30 min circulate. <em>(PHE ke liye acid-first sequence better hai)</em></li>
            <li>Intermediate warm water (60°C) rinse: 5-8 min.</li>
            <li>Alkali solution (0.5-1.0%) 70°C par 20-30 min circulate.</li>
            <li>40-50°C hot water phir tap water 10 min — drain aur dry.</li>
            <li>Use se pehle sanitizer circulate karein (PAA 150-200 ppm ya Cl 100-150 ppm).</li>
          </ol>
          <h5 class="font-bold mt-3">Periodic Cleaning:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
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
          content: `<p><strong>Design Note:</strong> Large tanks mein spray balls (rotary/static) se poori surface coverage ensure karna zaroori hai. Dead spots mein biofilm form ho sakti hai. Riboflavin UV test se spray coverage periodically verify karein.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
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
          <h5 class="font-bold mt-3">Daily CIP Sequence:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Cold water rinse (30-40°C): 10-15 min — milk system se push out hota hai.</li>
            <li>Alkali wash (0.5-1.0% NaOH, 75-80°C): 30-45 min.</li>
            <li>Intermediate rinse (60°C): 10 min.</li>
            <li>Acid wash (0.5-1.0% HNO₃, 65-70°C): 20-30 min.</li>
            <li>Final rinse (cold potable water): 10-15 min until neutral pH.</li>
            <li>Thermal sanitization (95°C, 10-15 min) ya chemical sanitization.</li>
          </ol>
          <p class="mt-2"><strong>FDV Testing:</strong> Har production run se pehle Flow Diversion Valve function test mandatory hai — faulty FDV under-pasteurized milk distribute kar sakta hai.</p>`
        },
        {
          title: "Homogenizer ki Safai",
          content: `<p>Homogenizers high pressure (150-300 bar) par operate karte hain — narrow channels mein deposits asaani se accumulate hote hain. COP cleaning required hai.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Production ke baad warm water flush karein.</li>
            <li>Homogenizing valve assembly dismantle karein (COP procedure).</li>
            <li>Parts ko warm (55-60°C) alkaline detergent solution mein 30 min soak karein.</li>
            <li>Narrow passages ko specially designed brushes se clean karein.</li>
            <li>Thoroughly rinse karein.</li>
            <li>Pistons, seals aur O-rings inspect karein — wear signs?</li>
            <li>Reassemble aur sanitize karein.</li>
          </ol>`
        }
      ]
    },

    teepol_detergent: {
      title: "Liquid Detergent Banana aur Quality Check Karna",
      htmlContent: `
        <p>Dairy aur food industry mein neutral liquid detergent (jaise Teepol) haath se bartano ki safai ke liye kaafi use kiya jaata hai. Teepol ek brand name hai sodium alkyl sulfate-based surfactant ke liye.</p>
        <h4 class="font-bold mt-4">Surfactants ki Science:</h4>
        <p>Surfactant molecules mein ek <strong>hydrophilic head</strong> (water-loving) aur ek <strong>hydrophobic tail</strong> (water-fearing) hoti hai. Yeh amphiphilic molecule water-air interface par surface tension reduce karta hai aur fat droplets ke around <strong>micelles</strong> banata hai — fat paani mein suspend hokar wash out ho jaata hai.</p>
        <h4 class="font-bold mt-4">1. General Purpose Liquid Detergent (1000 Litre Batch):</h4>
        <div class="overflow-x-auto my-4"><table class="w-full border"><thead><tr class="bg-muted"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border">Paani</td><td class="p-2 border">820-840</td><td class="p-2 border">82-84%</td><td class="p-2 border">Main Solvent</td></tr>
        <tr><td class="p-2 border">LABSA (Acid Slurry 90%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Main Cleaning Agent (Anionic Surfactant)</td></tr>
        <tr><td class="p-2 border">Caustic Soda (NaOH)</td><td class="p-2 border">~15</td><td class="p-2 border">~1.5%</td><td class="p-2 border">LABSA neutralize karna (pH 7)</td></tr>
        <tr><td class="p-2 border">Urea ya Salt</td><td class="p-2 border">20-40</td><td class="p-2 border">2-4%</td><td class="p-2 border">Viscosity Enhancer</td></tr>
        <tr><td class="p-2 border">Color & Perfume</td><td class="p-2 border">As required</td><td class="p-2 border">&lt;0.5%</td><td class="p-2 border">Aesthetics</td></tr>
        <tr class="bg-muted"><td class="p-2 border font-bold">Total</td><td class="p-2 border font-bold">1000 Kg</td><td class="p-2 border font-bold">100%</td><td class="p-2 border"></td></tr>
        </tbody></table></div>
        <p><strong>LABSA ke baare mein:</strong> Linear Alkyl Benzene Sulphonic Acid — most common anionic surfactant. Strongly acidic (pH ~1-2). NaOH neutralization zaroori: LABSA + NaOH → Sodium LAS (active surfactant) + H₂O</p>
        <p class="font-semibold mt-3">Process:</p>
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>SS/HDPE tank mein paani lein. LABSA dheere-dheere daalein, continuously stir karein (exothermic).</li>
          <li>Alag se NaOH ko thode paani mein gholein (PPE zaroori — highly exothermic).</li>
          <li>pH meter monitor karte hue caustic solution dheere daalein. Target pH: 6.5-7.5.</li>
          <li>Salt ya urea viscosity ke liye daalein. Thanda hone par color aur perfume daalein.</li>
          <li>Final specs: pH 6.5-7.5 | Active Matter &gt;8% | Viscosity 200-500 cP.</li>
        </ol>
        <h4 class="font-bold mt-6">2. Acidic CIP Cleaner (1000 Litre Batch):</h4>
        <p class="text-red-700 font-semibold">⚠ Warning: Strong acids bahut khatarnak hain — chemical-resistant gloves, face shield, apron, boots. Achi ventilation ensure karein.</p>
        <div class="overflow-x-auto my-4"><table class="w-full border"><thead><tr class="bg-muted"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border">Paani (Water)</td><td class="p-2 border">880</td><td class="p-2 border">88%</td><td class="p-2 border">Solvent (acid-resistant tank mein)</td></tr>
        <tr><td class="p-2 border">HCl (33%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Descaling Agent</td></tr>
        <tr><td class="p-2 border">Non-ionic Surfactant</td><td class="p-2 border">20</td><td class="p-2 border">2%</td><td class="p-2 border">Wetting aur soil removal</td></tr>
        </tbody></table></div>
        <p class="font-semibold">Process:</p>
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>HDPE/FRP acid-resistant tank mein saara paani lein.</li>
          <li class="font-bold text-red-700">Hamesha acid ko paani mein daalein — kabhi paani ko acid mein NAHI! (Violent exothermic reaction)</li>
          <li>HCl dheere-dheere paani mein daalein, stir karte rahein.</li>
          <li>Non-ionic surfactant daalein aur mix karein. Final pH: 1-2.</li>
        </ol>
        <h4 class="font-bold mt-6">3. Alkaline CIP Stock Solution (10% NaOH, 1000L):</h4>
        <p>102 Kg NaOH flakes (98%) + 898 L cold water + optional 10-20 Kg Sodium Gluconate (sequestrant).</p>
        <p>Dilution: 1L stock + 9L water = ~1% NaOH working solution.</p>
        <p class="text-red-700 font-semibold">⚠ NaOH dissolution highly exothermic — temperature 80°C+ tak ja sakta hai. PPE essential!</p>
        <h4 class="font-bold mt-6">Detergent Strength Check (Active Matter %):</h4>
        <p>Standard method: <strong>MBAS (Methylene Blue Active Substances) Test</strong> — methylene blue dye anionic surfactants ke saath complex banata hai jo chloroform phase mein extract hota hai. 650 nm par absorbance measure → standard curve se Active Matter % calculate.</p>
        <p class="mt-2"><strong>Rapid Field Test:</strong> pH paper se check karein — neutral detergent pH 6.5-7.5. pH &gt;9 = incomplete neutralization.</p>
      `
    },

    sip: {
      title: "SIP (Sterilization-In-Place) — Complete Scientific Guide",
      intro: "SIP equipment aur pipelines ko disassemble kiye bina sterilize karta hai. Aseptic processing (UHT milk) ke liye essential hai aur hamesha complete CIP ke BAAD kiya jaata hai.",
      process: `
        <h5 class="font-bold">CIP vs SIP — Key Differences:</h5>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-red-200"><th class="p-1 border">Parameter</th><th class="p-1 border">CIP</th><th class="p-1 border">SIP</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Objective</td><td class="p-1 border">Soil remove, microbial load reduce</td><td class="p-1 border">Commercial sterility achieve</td></tr>
            <tr><td class="p-1 border">Agent</td><td class="p-1 border">Chemical solutions</td><td class="p-1 border">Saturated steam (&gt;121°C)</td></tr>
            <tr><td class="p-1 border">Pressure</td><td class="p-1 border">Atmospheric (mostly)</td><td class="p-1 border">15-30 psi</td></tr>
            <tr><td class="p-1 border">Log Reduction</td><td class="p-1 border">3-5 log</td><td class="p-1 border">6-12 log</td></tr>
          </tbody>
        </table>
        <h5 class="font-bold mt-4">D-Value aur F-Value Concepts:</h5>
        <p><strong>D-value:</strong> Ek specific temperature par 90% microbial population (1 log cycle) kill karne ka time. Example: B. stearothermophilus spores D₁₂₁ = 1-1.5 min.</p>
        <p><strong>F₀-value:</strong> 121°C par equivalent sterilization minutes. F₀ = 12 min (12-D concept) commercial dairy ke liye standard.</p>
        <h5 class="font-bold mt-4">SIP Process Steps:</h5>
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>CIP completion verify karein — pH check aur microbiological testing.</li>
          <li>System partially drain aur air-dry karein.</li>
          <li>Steam traps aur pressure gauges calibration check karein.</li>
          <li>Saturated steam pressure mein supply karein (saturated &gt; superheated — moist heat more effective).</li>
          <li>Air ko 0.2-micron bacterial filter-protected vents se bahar nikalein — cold spots eliminate.</li>
          <li>Vents band karein — pressure 15-21 psi (121-126°C) tak build up hone dein.</li>
          <li>Required hold time maintain karein (minimum 15-20 min at 121°C).</li>
          <li>Steam condenser ke through slowly release karein — sudden depressurization avoid karein.</li>
          <li>Sterile nitrogen ya air se pressurize karein cooling ke liye.</li>
          <li>Temperature aur pressure data log review karein — F₀ calculate karein.</li>
        </ol>
        <h5 class="font-bold mt-4">Steam Quality Requirements:</h5>
        <ul class="list-disc list-inside mt-1">
          <li>Dryness fraction ≥ 0.97 (saturated steam)</li>
          <li>No superheat — superheated steam less effective hai</li>
          <li>No non-condensable gases — air/CO₂ effectiveness reduce karte hain</li>
          <li>Boiler chemicals food-contact grade hone chahiye</li>
        </ul>
        <h5 class="font-bold mt-4">Biological Indicator (BI) Testing:</h5>
        <p>B. stearothermophilus spore strips (10⁶ spores/strip) critical locations par place karein. SIP ke baad culture karein: Growth = SIP failure | No growth = SIP successful.</p>
      `
    },

    biofilm: {
      title: "Biofilm — Dairy Industry ki Hidden Threat",
      intro: "Biofilm bacterial contamination ka advanced form hai jo ordinary cleaning se remove karna bahut mushkil hota hai — dairy mein serious quality aur safety concern.",
      htmlContent: `
        <h4 class="font-bold">Biofilm Kya Hai?</h4>
        <p>Biofilm bacteria ka organized community hai jo surface par attach hota hai aur khud ko self-produced <strong>Extracellular Polymeric Substance (EPS)</strong> matrix mein encase karta hai. EPS polysaccharides, proteins, DNA aur lipids se bana hota hai. Yeh matrix bacteria ko:</p>
        <ul class="list-disc list-inside mt-1">
          <li>Sanitizers se <strong>1000x zyada resistant</strong> banata hai</li>
          <li>Drying aur environmental stress se protect karta hai</li>
          <li>Quorum sensing ke through inter-bacterial communication allow karta hai</li>
        </ul>
        <h4 class="font-bold mt-4">Biofilm Formation ke 5 Stages:</h4>
        <ol class="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Initial Attachment (Reversible):</strong> Free-floating bacteria surface par loosely attach hote hain</li>
          <li><strong>Irreversible Attachment:</strong> Bacteria permanently attach aur divide hone lagte hain</li>
          <li><strong>Early Development:</strong> Microcolonies form, EPS production shuru</li>
          <li><strong>Maturation:</strong> 3D mushroom-shaped clusters, water channels — fully protected community</li>
          <li><strong>Dispersion:</strong> Cells detach hokar naye surfaces colonize karti hain — product contamination risk!</li>
        </ol>
        <h4 class="font-bold mt-4">Dairy mein Common Biofilm-Forming Bacteria:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Organism</th><th class="p-1 border">Temp Range</th><th class="p-1 border">Special Concern</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Pseudomonas fluorescens</td><td class="p-1 border">4-10°C</td><td class="p-1 border">Refrigeration par bhi biofilm, heat-stable protease/lipase</td></tr>
            <tr><td class="p-1 border">Listeria monocytogenes</td><td class="p-1 border">0-45°C</td><td class="p-1 border">Foodborne pathogen, wet environments mein thrive</td></tr>
            <tr><td class="p-1 border">Staphylococcus aureus</td><td class="p-1 border">10-45°C</td><td class="p-1 border">Heat-stable enterotoxin producer</td></tr>
            <tr><td class="p-1 border">Bacillus cereus</td><td class="p-1 border">10-50°C</td><td class="p-1 border">Pasteurization-resistant spores</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Biofilm Detection Methods:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li><strong>ATP Bioluminescence:</strong> Surface ATP measure — rapid result (seconds). ATP &gt;10 RLU/100 cm² = potential biofilm.</li>
          <li><strong>Swab Testing:</strong> Standard plate count ya selective media par culture.</li>
          <li><strong>Crystal Violet Staining:</strong> Lab method — stain, wash, absorbance measure.</li>
          <li><strong>SEM (Scanning Electron Microscopy):</strong> Direct visualization of biofilm structure.</li>
        </ul>
        <h4 class="font-bold mt-4">Biofilm Prevention aur Control:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li>Surface roughness minimize karein — Ra &lt;0.8 μm food-contact SS ke liye recommended.</li>
          <li>Equipment design mein dead legs, crevices, horizontal surfaces avoid karein.</li>
          <li>Regular (daily) thorough CIP — biofilm 4-24 hours mein form ho sakta hai.</li>
          <li>Sanitizer rotation implement karein — resistance develop na ho.</li>
          <li>Enzymatic cleaners use karein jo EPS matrix degrade karein.</li>
          <li>Peracetic Acid (PAA) established biofilms ke against highly effective hai.</li>
        </ul>
      `
    },

    water_quality: {
      title: "CIP mein Paani ki Quality ka Mahatv",
      intro: "Paani CIP ka primary medium hai. Paani ki quality directly cleaning effectiveness, scale formation aur product quality ko affect karti hai.",
      htmlContent: `
        <h4 class="font-bold">Water Hardness aur CIP Impact:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Category</th><th class="p-1 border">CaCO₃ (mg/L)</th><th class="p-1 border">CIP Impact</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Soft</td><td class="p-1 border">0-75</td><td class="p-1 border">Good — minimal scale formation</td></tr>
            <tr><td class="p-1 border">Moderate</td><td class="p-1 border">75-150</td><td class="p-1 border">Acceptable with sequestrants</td></tr>
            <tr><td class="p-1 border">Hard</td><td class="p-1 border">150-300</td><td class="p-1 border">Scale formation, reduced cleaning efficiency</td></tr>
            <tr><td class="p-1 border">Very Hard</td><td class="p-1 border">&gt;300</td><td class="p-1 border">Serious scaling — more frequent acid wash needed</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Iron aur Manganese ki Problems:</h4>
        <p>High iron (&gt;0.3 mg/L) aur manganese (&gt;0.05 mg/L) oxidize hokar insoluble hydroxides banate hain jo equipment surface par deposit hote hain. Yeh brown/orange deposits create karte hain, chlorine sanitizer rapidly consume karte hain, product color/flavor affect karte hain.</p>
        <p><strong>Solution:</strong> Greensand filters ya sequestrant use karein.</p>
        <h4 class="font-bold mt-4">Microbiological Quality Requirements:</h4>
        <ul class="list-disc list-inside mt-1">
          <li>Total Plate Count: &lt;100 CFU/mL</li>
          <li>Coliforms: Absent (0/100 mL)</li>
          <li>E. coli: Absent (0/100 mL)</li>
          <li>Turbidity: &lt;1 NTU</li>
          <li>Residual Chlorine: 0.2-0.5 mg/L</li>
        </ul>
        <h4 class="font-bold mt-4">Water Treatment Systems for Dairy:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li><strong>Sand/Multimedia Filtration:</strong> Suspended solids remove</li>
          <li><strong>Activated Carbon Filter:</strong> Chlorine, odor, organics remove</li>
          <li><strong>Ion Exchange Softening:</strong> Ca²⁺/Mg²⁺ ko Na⁺ se replace (true softening)</li>
          <li><strong>Reverse Osmosis (RO):</strong> High purity water for sensitive applications</li>
          <li><strong>UV Disinfection:</strong> Chemical-free microbial control (254 nm wavelength)</li>
          <li><strong>Chlorination:</strong> Residual disinfection maintain karna</li>
        </ul>
      `
    },

    environmental_compliance: {
      title: "CIP Effluent Treatment aur Environmental Compliance",
      intro: "CIP operations se large volumes of chemical-laden wastewater generate hoti hai. Responsible treatment aur disposal dairy industry ka important responsibility hai.",
      htmlContent: `
        <h4 class="font-bold">CIP Wastewater Characteristics:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Parameter</th><th class="p-1 border">Range</th><th class="p-1 border">Environmental Concern</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">pH</td><td class="p-1 border">2-13</td><td class="p-1 border">Extreme pH aquatic life harm karta hai</td></tr>
            <tr><td class="p-1 border">BOD</td><td class="p-1 border">2000-5000 mg/L</td><td class="p-1 border">High oxygen demand, eutrophication</td></tr>
            <tr><td class="p-1 border">COD</td><td class="p-1 border">5000-15000 mg/L</td><td class="p-1 border">Organic pollution indicator</td></tr>
            <tr><td class="p-1 border">Total Phosphorus</td><td class="p-1 border">50-200 mg/L</td><td class="p-1 border">Eutrophication</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Treatment Methods:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li><strong>pH Neutralization:</strong> Acid aur alkali streams mix karein ya lime/acid add karein — target pH 6-9.</li>
          <li><strong>DAF (Dissolved Air Flotation):</strong> Fat aur suspended solids removal.</li>
          <li><strong>Biological Treatment (MBBR/SBR):</strong> BOD/COD reduction.</li>
          <li><strong>Phosphorus Precipitation:</strong> Alum ya ferric chloride treatment.</li>
        </ul>
        <h4 class="font-bold mt-4">CPCB Standards (India) — Dairy Effluent Limits:</h4>
        <ul class="list-disc list-inside mt-1">
          <li>pH: 6.0-9.0</li>
          <li>BOD: ≤30 mg/L (surface water discharge)</li>
          <li>TSS: ≤100 mg/L</li>
          <li>Oil &amp; Grease: ≤10 mg/L</li>
        </ul>
        <h4 class="font-bold mt-4">Green CIP — Sustainable Practices:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li>Chemical recovery aur reuse systems implement karein.</li>
          <li>Pre-rinse operations ke liye recovered rinse water recycle karein.</li>
          <li>Enzyme-based cleaners lower temperature par effective — energy saving.</li>
          <li>Conductivity-based dosing systems se precise chemical usage.</li>
          <li>Optimized CIP programs se water aur chemical use minimize karein.</li>
        </ul>
      `
    },

    haccp_cip: {
      title: "CIP aur HACCP — Food Safety Management",
      intro: "CIP/SIP procedures HACCP framework ka essential component hain. Proper documentation aur verification FSSAI, ISO 22000 aur BRC standards ke liye mandatory hai.",
      htmlContent: `
        <h4 class="font-bold">CIP HACCP mein kahan fit hota hai?</h4>
        <p>CIP typically ek <strong>Prerequisite Program (PRP)</strong> hai — CCP nahi — lekin iska failure directly CCPs ko compromise karta hai. HACCP aur ISO 22000 dono CIP validation aur monitoring mandatory maante hain.</p>
        <h4 class="font-bold mt-4">CIP Critical Limits — Monitoring Parameters:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Parameter</th><th class="p-1 border">Critical Limit</th><th class="p-1 border">Monitoring Frequency</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Alkali Concentration</td><td class="p-1 border">0.5-1.5% NaOH</td><td class="p-1 border">Har cycle / Titration</td></tr>
            <tr><td class="p-1 border">Acid Concentration</td><td class="p-1 border">0.5-1.0% HNO₃</td><td class="p-1 border">Har cycle / Titration</td></tr>
            <tr><td class="p-1 border">Temperature</td><td class="p-1 border">70-80°C (alkali), 60-70°C (acid)</td><td class="p-1 border">Continuous / Inline sensor</td></tr>
            <tr><td class="p-1 border">Contact Time</td><td class="p-1 border">15-30 min (alkali)</td><td class="p-1 border">Automated timer</td></tr>
            <tr><td class="p-1 border">Final Rinse pH</td><td class="p-1 border">6.5-7.5</td><td class="p-1 border">Har cycle / pH meter</td></tr>
            <tr><td class="p-1 border">Sanitizer Conc.</td><td class="p-1 border">150-200 ppm (Cl)</td><td class="p-1 border">Har cycle / Test strips</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Validation vs Verification vs Monitoring:</h4>
        <ul class="list-disc list-inside mt-1 space-y-2">
          <li><strong>Validation:</strong> Prove karna ki CIP program required cleanliness achieve karta hai. Microbiological testing, ATP testing. One-time ya major change ke baad.</li>
          <li><strong>Verification:</strong> Confirm karna ki validated parameters achieve ho rahe hain. Monthly ATP testing, swab testing. Periodic.</li>
          <li><strong>Monitoring:</strong> Daily concentrations, temperatures, times, final pH measurement. Har cycle.</li>
        </ul>
        <h4 class="font-bold mt-4">CIP Records — Minimum Requirements:</h4>
        <ul class="list-disc list-inside mt-1">
          <li>Date aur time of each CIP cycle</li>
          <li>Equipment/circuit cleaned</li>
          <li>Chemical concentrations (with test results)</li>
          <li>Temperature aur time records</li>
          <li>Final rinse pH</li>
          <li>Operator signature</li>
          <li>Deviations aur corrective actions</li>
        </ul>
        <p class="mt-2 text-sm text-gray-600">Records minimum 1 year retain karein (FSSAI requirement). Electronic data logging tamper-proof automated records provide karta hai.</p>
        <h4 class="font-bold mt-4">CIP Failure ke liye Corrective Actions:</h4>
        <ol class="list-decimal list-inside mt-1 space-y-1">
          <li>Equipment ko production se immediately withdraw karein.</li>
          <li>Root cause identify karein — chemical? temperature? time? equipment?</li>
          <li>Correct parameters ke saath re-CIP karein.</li>
          <li>Microbiological testing se re-CIP effectiveness confirm karein.</li>
          <li>Root cause analysis karein aur SOP update karein.</li>
          <li>Incident log mein document karein.</li>
        </ol>
      `
    },

    solution_strength: {
      title: "CIP Solution ki Strength ka Testing — Complete Methods",
      intro: "CIP solutions ki regular strength testing cleaning effectiveness ensure karne ke liye critical hai. Understrength = ineffective cleaning; overstrength = equipment damage + product contamination risk.",
      alkalinity_test: {
        title: "Washing Solution ki Strength Determine Karna (Alkalinity Test)",
        content: `
          <p>Washing solution ki strength NaOH equivalent mein express ki jaati hai. Glass bottles ke liye 1.5% aur can washing ke liye 0.5% typically use hoti hai. Repeated use se solution dilute hota hai — regular testing essential hai.</p>
          <h5 class="font-bold mt-4">Required Equipment aur Reagents:</h5>
          <p>Conical flask, pipettes (10 mL, 50 mL), burette (25 mL), volumetric flask (250 mL), magnetic stirrer | 2.5 N H₂SO₄, 0.1 N H₂SO₄, 0.1 N HCl | Phenolphthalein (0.5% in ethanol), Methyl orange (0.1%).</p>
          <h5 class="font-bold mt-4">Method 1 — Qualitative Test (Rapid Field Test):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>10 mL detergent solution conical flask mein lein.</li>
            <li>12.5 mL N/10 HCl + 5 drops phenolphthalein indicator daalein.</li>
            <li>Red ho jaaye → alkalinity &gt;0.5% NaOH = SUFFICIENT.</li>
            <li>Colourless = alkalinity low — solution top up ya replace karein.</li>
          </ol>
          <h5 class="font-bold mt-4">Method 2 — Quantitative Direct Reading:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>10 mL sample in 100 mL conical flask.</li>
            <li>5 drops phenolphthalein indicator.</li>
            <li>2.5 N H₂SO₄ se titrate karein colourless hone tak.</li>
            <li>Used acid mL note karein.</li>
            <li><strong>Calculation: mL of 2.5N H₂SO₄ = % NaOH directly.</strong></li>
          </ol>
          <p class="text-sm mt-1 text-gray-600">Example: 1.5 mL used → 1.5% NaOH equivalent.</p>
          <h5 class="font-bold mt-4">Method 3 — Laboratory Method (Most Accurate):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>5 mL washing solution in 250 mL volumetric flask.</li>
            <li>Distilled water se 250 mL complete karein (50x dilution).</li>
            <li>50 mL in 100 mL conical flask transfer karein.</li>
            <li>Phenolphthalein indicator daalein.</li>
            <li>0.1 N H₂SO₄ se colourless hone tak titrate. Volume = "A" mL.</li>
            <li>Methyl orange indicator daalein.</li>
            <li>Slight pink aane tak titrate. Volume = "B" mL.</li>
          </ol>
          <p class="mt-3 p-3 bg-indigo-100 rounded-lg"><strong>Calculations:</strong><br/>
          % Free Caustic (NaOH) = (A − B) × 0.4<br/>
          % Total Alkali = (A + B) × 0.4</p>
          <h5 class="font-bold mt-4">Indicator Science:</h5>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Phenolphthalein:</strong> Colourless → pink at pH 8.2-10. Strong alkali (NaOH, Na₂CO₃ → NaHCO₃) neutralization indicate karta hai.</li>
            <li><strong>Methyl Orange:</strong> Orange → red at pH 3.1-4.4. Weak acid (NaHCO₃ → CO₂) neutralization indicate karta hai.</li>
          </ul>
        `
      },
      calculators: {
        error_title: "Error",
        success_title: "Successfully Calculate Kiya Gaya",
        error_invalid_titre: "Kripya valid titre value enter karein.",
        naoh: { title: "NaOH (%)", description: "10 mL CIP solution sample ko 0.1 N acid (HCl) se phenolphthalein indicator ke saath titrate karein.", label: "0.1 N Acid Use (mL)", button: "NaOH % Calculate Karein", result_prefix: "Caustic Soda (NaOH):" },
        hno3: { title: "HNO₃ (%)", description: "10 mL CIP solution sample ko 0.1 N base (NaOH) se phenolphthalein indicator ke saath titrate karein.", label: "0.1 N Base Use (mL)", button: "HNO₃ % Calculate Karein", result_prefix: "Nitric Acid (HNO₃):" },
        h3po4: { title: "H₃PO₄ (%)", description: "10 mL CIP solution sample ko 0.1 N base (NaOH) se phenolphthalein indicator ke saath titrate karein.", label: "0.1 N Base Use (mL)", button: "H₃PO₄ % Calculate Karein", result_prefix: "Phosphoric Acid (H₃PO₄):" },
        chlorine: { title: "Chlorine (ppm)", description: "100 mL CIP solution sample ko iodometric titration method se 0.01 N Sodium Thiosulphate ke saath titrate karein.", label: "0.01 N Sodium Thiosulphate Use (mL)", button: "Chlorine (ppm) Calculate Karein", result_prefix: "Available Chlorine:" }
      }
    }
  },

  en: {
    main_title: "Washing and Cleaning of Dairy Equipments",
    main_description: "A comprehensive scientific guide — CIP, SIP, chemicals, testing methods, biofilm, water quality, HACCP compliance and best practices.",

    intro: {
      title: "Introduction: CIP, CAC and Milk Stone",
      htmlContent: `
        <p>Milk remaining on dairy equipment surfaces provides an excellent medium for microbial growth — containing proteins, fats, lactose and minerals as ideal bacterial nutrients. Proper cleaning and sanitization are complementary and neither achieves the final result alone.</p>
        <h4 class="font-bold mt-4">Types of Dairy Soil:</h4>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>Mineral Soil:</strong> Ca and Mg phosphate/carbonate salts (milk stone). Insoluble in alkali, soluble in acid.</li>
          <li><strong>Organic (Protein):</strong> Casein, whey proteins that denature from heat and adhere to surfaces. Hydrolyzed by alkali.</li>
          <li><strong>Organic (Fat):</strong> Milk fat dissolved by saponification in alkaline solution.</li>
          <li><strong>Microbial Biofilm:</strong> Bacterial colonies in a protective EPS matrix — resistant to ordinary cleaning.</li>
        </ul>
        <h4 class="font-bold mt-4">What is CIP/CAC?</h4>
        <p><strong>CIP (Cleaning-In-Place):</strong> Automated method cleaning pipelines and tanks without disassembly. High velocity turbulent flow (≥1.5 m/s) generates mechanical scrubbing. Developed in the dairy industry in the 1950s.</p>
        <p><strong>CAC / COP (Cleaning-Out-of-Place):</strong> Smaller parts disassembled and manually cleaned in dedicated areas — cream separators, pump heads, valves.</p>
        <h4 class="font-bold mt-4">CIP System Types:</h4>
        <p><strong>Single Pass:</strong> Fresh solution each cycle — simpler but uses more water/chemicals.</p>
        <p><strong>Recirculation:</strong> Solutions recirculated from external tanks — higher investment but less water/chemical. Preferred in modern dairies.</p>
        <p><strong>Centralized Multi-Circuit:</strong> Single CIP unit serves multiple lines — PLC controlled, full data logging.</p>
        <h4 class="font-bold mt-4">TACT Principle — Four CIP Fundamentals:</h4>
        <ul class="list-disc list-inside mt-2 space-y-1">
          <li><strong>T - Time:</strong> Sufficient contact time at each step.</li>
          <li><strong>A - Action:</strong> Turbulent flow (Re &gt;10,000) = mechanical scrubbing.</li>
          <li><strong>C - Concentration:</strong> Correct chemical concentration — too low ineffective, too high corrosive.</li>
          <li><strong>T - Temperature:</strong> Arrhenius law — each 10°C rise approximately doubles reaction rate.</li>
        </ul>
        <h4 class="font-bold mt-4">Milk Stone:</h4>
        <p>Accumulation of dried milk solids and mineral salts. Formation accelerates at pasteurization temperatures (72-75°C) due to inverse solubility of calcium phosphate.</p>
        <p><strong>Composition:</strong> 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% protein; 42-67% ash.</p>
        <p><strong>Formation Mechanism:</strong> Heat causes Ca²⁺ and phosphate precipitation. Beta-lactoglobulin denatures above 70°C and chemically bonds to stainless steel surfaces — the primary mechanism.</p>
      `
    },

    cip_cycle: {
      title: "Standard CIP Cleaning Cycle — Scientific Explanation",
      intro: "A typical CIP cycle follows these steps in precise sequence. Reordering steps significantly reduces cleaning effectiveness.",
      steps: [
        {
          title: "1. Pre-rinse",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Purpose:</strong> Remove most loose soil and milk residues.</p>
          <p><strong>Process:</strong> Lukewarm water (40-50°C) for 10-15 minutes.</p>
          <p><strong>Science:</strong> &gt;60°C denatures proteins — they adhere. Cold solidifies fats. 40-50°C optimal: dairy fat melts ~35-40°C; proteins remain native — easily rinsed. ~80-90% of organic load removed in this step.</p>
          <p class="mt-2 font-semibold">Quality Check: Water should run clear or slightly cloudy by end.</p>`
        },
        {
          title: "2. Alkali Wash",
          colorClass: "bg-orange-100 border-orange-300",
          details: `<p><strong>Purpose:</strong> Remove fat and protein.</p>
          <p><strong>Process:</strong> 0.5-2.0% NaOH solution, 70-80°C, 15-30 minutes.</p>
          <p><strong>Science — Three Key Reactions:</strong></p>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Saponification:</strong> Fat + NaOH → Soluble Soap + Glycerol</li>
            <li><strong>Protein Hydrolysis:</strong> Alkali hydrolyzes peptide bonds → soluble peptides</li>
            <li><strong>Emulsification:</strong> Fat droplets kept suspended for drainage</li>
          </ul>
          <p class="mt-1">Arrhenius: at 70°C, reaction rates 8-16× faster than at 40°C.</p>
          <p><strong>Concentrations:</strong> Cans: 0.5% | Bottles: 1.5-2.0% | Pipelines: 0.5-1.0%</p>`
        },
        {
          title: "3. Intermediate Rinse",
          colorClass: "bg-gray-100 border-gray-300",
          details: `<p><strong>Purpose:</strong> Completely remove alkali residue before acid wash.</p>
          <p><strong>Process:</strong> Warm water (50-60°C), 5-10 minutes until pH neutral.</p>
          <p><strong>Science:</strong> Alkali residue wastes acid — NaOH + HNO₃ → NaNO₃ + H₂O (neutralization). Direct acid-alkali contact risks violent exothermic reaction.</p>
          <p class="mt-2 font-semibold">Quality Check: Rinse water should reach pH 7-8.</p>`
        },
        {
          title: "4. Acid Wash",
          colorClass: "bg-yellow-100 border-yellow-300",
          details: `<p><strong>Purpose:</strong> Remove milk stone and mineral deposits (CaCO₃, MgCO₃).</p>
          <p><strong>Process:</strong> 0.5-1.0% HNO₃ or H₃PO₄, 60-70°C, 10-20 minutes.</p>
          <p><strong>Science:</strong> Milk stone contains Ca₃(PO₄)₂ and CaCO₃ — insoluble in alkali, soluble in acid:</p>
          <ul class="list-disc list-inside mt-1">
            <li>Ca₃(PO₄)₂ + 4HNO₃ → 3Ca(NO₃)₂ + 2H₂PO₄⁻ (soluble)</li>
            <li>CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑</li>
          </ul>
          <p class="mt-1"><strong>HNO₃ Advantage:</strong> Forms Cr₂O₃ passivation layer on stainless steel — preferred for dairy.</p>`
        },
        {
          title: "5. Final Rinse",
          colorClass: "bg-blue-100 border-blue-300",
          details: `<p><strong>Purpose:</strong> Remove all acid traces.</p>
          <p><strong>Process:</strong> Cold potable water until pH 6.5-7.5. Minimum 5-10 minutes.</p>
          <p><strong>Science:</strong> Even trace acid affects milk pH and quality. Rinse water must be potable quality (TPC &lt;100 CFU/mL). Modern systems use inline conductivity to detect rinse completion.</p>`
        },
        {
          title: "6. Disinfection/Sanitization",
          colorClass: "bg-green-100 border-green-300",
          details: `<p><strong>Purpose:</strong> Kill/reduce remaining microorganisms to acceptable levels.</p>
          <table class="w-full text-xs mt-2 border">
            <thead><tr class="bg-green-200"><th class="p-1 border">Method</th><th class="p-1 border">Conditions</th><th class="p-1 border">Advantage</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">Hot Water</td><td class="p-1 border">90-95°C, 10-15 min</td><td class="p-1 border">No chemical residue</td></tr>
              <tr><td class="p-1 border">Chlorine</td><td class="p-1 border">150-200 ppm, pH 6.5-7.5</td><td class="p-1 border">Fast, inexpensive</td></tr>
              <tr><td class="p-1 border">PAA</td><td class="p-1 border">100-300 ppm</td><td class="p-1 border">Effective vs biofilm</td></tr>
              <tr><td class="p-1 border">QAC</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">Residual activity</td></tr>
            </tbody>
          </table>
          <p class="mt-2"><strong>Log Reduction:</strong> 3-log = 99.9% kill | 5-log = 99.999% kill. Dairy requires minimum 3-log. Organic matter reduces sanitizer effectiveness — thorough prior cleaning is essential.</p>`
        }
      ]
    },

    chemicals: {
      title: "Chemicals Used in CIP — Detailed Scientific Guide",
      intro: "Understanding each chemical category's science helps select the correct concentration, temperature and sequence.",
      types: [
        {
          title: "Alkaline Detergents",
          details: `<p><strong>Examples:</strong> NaOH, Na₂CO₃, Sodium metasilicate, STPP, Sodium gluconate.</p>
          <p><strong>Mechanism:</strong> NaOH saponifies fat. Builders (STPP) sequester Ca²⁺/Mg²⁺ from hard water. Chelating agents form stable metal ion complexes preventing redeposition.</p>
          <p><strong>pH:</strong> 11-14 | <strong>Effective against:</strong> Fats, proteins, sugars | <strong>Not against:</strong> Mineral deposits.</p>
          <p class="text-red-700 font-semibold mt-2">⚠ Safety: Corrosive — PPE (gloves, goggles, apron) mandatory.</p>`
        },
        {
          title: "Acid Detergents",
          details: `<p><strong>Examples:</strong> HNO₃, H₃PO₄, Citric acid, Gluconic acid, Sulfamic acid.</p>
          <p><strong>Mechanism:</strong> Convert insoluble mineral salts to soluble forms. HNO₃ also passivates stainless steel. Chelating acids form stable complexes with metal ions.</p>
          <p><strong>pH:</strong> 1-3 (strong), 3-4 (food-grade) | <strong>Effective against:</strong> Milk stone, water scale, rust.</p>
          <p class="text-red-700 font-semibold mt-2">⚠ Always add acid to WATER — never water to acid! Highly corrosive.</p>`
        },
        {
          title: "Enzyme-based / Neutral Cleaners",
          details: `<p><strong>Examples:</strong> Protease, Lipase cleaners, Teepol, Nonionic surfactant blends.</p>
          <p><strong>Mechanism:</strong> Enzymes biologically degrade specific substrates. Protease breaks proteins; lipase hydrolyzes fats. Ideal for low-temperature cleaning and sensitive equipment.</p>
          <p><strong>pH:</strong> 6-8 | <strong>Optimal:</strong> 40-55°C | <strong>Advantages:</strong> Gentle on metals and seals, eco-friendly.</p>`
        },
        {
          title: "Sanitizers — Detailed Comparison",
          details: `<table class="w-full text-xs mt-2 border">
            <thead><tr class="bg-purple-200"><th class="p-1 border">Sanitizer</th><th class="p-1 border">Conc.</th><th class="p-1 border">pH Range</th><th class="p-1 border">Mechanism</th><th class="p-1 border">Limitation</th></tr></thead>
            <tbody>
              <tr><td class="p-1 border">Chlorine (NaOCl)</td><td class="p-1 border">100-200 ppm</td><td class="p-1 border">6.5-7.5</td><td class="p-1 border">HOCl disrupts cell membrane</td><td class="p-1 border">pH sensitive, corrosive</td></tr>
              <tr><td class="p-1 border">Peracetic Acid</td><td class="p-1 border">100-300 ppm</td><td class="p-1 border">2-7</td><td class="p-1 border">Strong oxidizer</td><td class="p-1 border">Pungent odor</td></tr>
              <tr><td class="p-1 border">QAC (Quats)</td><td class="p-1 border">200-400 ppm</td><td class="p-1 border">7-10</td><td class="p-1 border">Membrane disruption</td><td class="p-1 border">Foam, limited vs spores</td></tr>
              <tr><td class="p-1 border">Hot Water</td><td class="p-1 border">90-95°C</td><td class="p-1 border">Neutral</td><td class="p-1 border">Heat denaturation</td><td class="p-1 border">High energy cost</td></tr>
            </tbody>
          </table>`
        },
        {
          title: "Sequestrants and Water Softeners",
          details: `<p><strong>Examples:</strong> EDTA, STPP, Sodium Gluconate, Polyphosphates.</p>
          <p><strong>Mechanism:</strong> Hard water Ca²⁺/Mg²⁺ form insoluble scum with soaps. Sequestrants form stable soluble chelate complexes with these ions — preventing cleaning interference.</p>
          <p><strong>Sequestration vs. Softening:</strong> Sequestrants inactivate ions (don't remove). Ion exchange resins replace Ca²⁺/Mg²⁺ with Na⁺ (true softening).</p>`
        }
      ]
    },

    advantages: {
      title: "Advantages of CIP — Detailed Analysis",
      list: [
        "Guaranteed and repeatable quality assurance — every cycle documented and verifiable.",
        "Complete data logging for FSSAI, ISO 22000 and HACCP regulatory compliance.",
        "Cleaning costs reduced 30-50% by recycling solutions in recirculation systems.",
        "Cleans inaccessible areas (pipe bends, crevices) impossible to reach manually.",
        "Better operator safety — minimal direct contact with hazardous chemicals.",
        "Production downtime reduced 60-70% compared to manual cleaning.",
        "Significant labour reduction — automated systems need minimal supervision.",
        "Precise chemical dosing prevents overuse (waste/corrosion) and underuse (ineffective).",
        "Water consumption reduced 30-40% in recirculation systems.",
        "Human error eliminated — consistent cleaning every time.",
        "Real-time monitoring detects failures immediately for corrective action before product compromise."
      ]
    },

    cleaning_procedures: {
      title: "Cleaning Procedures for Specific Equipment",
      sections: [
        {
          title: "Cleaning of Milk Cans",
          content: `<p><strong>Aluminium Chemistry:</strong> Avoid NaOH &gt;2% — aluminium is amphoteric: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑. Use mild alkaline (0.5-1.0% NaOH equivalent).</p>
          <h5 class="font-bold mt-3">Manual Washing:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Immediately after emptying, rinse with warm water (40°C), remove loose soil with brush.</li>
            <li>Soak 5-10 min in 50°C detergent solution (1% sodium hexametaphosphate/TSP/sodium carbonate/teepol).</li>
            <li>Thoroughly brush interior with hot detergent — bottom and neck need special attention.</li>
            <li>Rinse with hot water (70-75°C).</li>
            <li>Steam (100°C, 5 min) or sanitize with 200 ppm chlorine.</li>
            <li>Store inverted on draining rack.</li>
          </ol>
          <h5 class="font-bold mt-3">Mechanical Washing (Rotary/Tunnel Washer):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Charge detergent tank to 0.5% alkalinity.</li>
            <li>Open water and steam valves; start motors and pumps.</li>
            <li>Load cans and lids into carriageways.</li>
            <li>Jet pressure: 15 psi | Pre-rinse: 40°C | Detergent: 75°C | Hot water: 85°C.</li>
            <li>Steam: 120°C, 20 psi | Hot blast: 125°C, 20 psi.</li>
            <li>Unload at outlet; store inverted on rack.</li>
            <li>Check detergent strength at start and end of each operation.</li>
          </ol>`
        },
        {
          title: "Cleaning of Cream Separators/Clarifiers",
          content: `<p><strong>Why COP is Required:</strong> High-speed bowl periphery accumulates "separator slime" (cream residue, denatured protein) that CIP cannot effectively remove. Daily dismantling is essential.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>After daily operation, carefully remove bowl from main machine.</li>
            <li>Dismantle bowl, maintain numbered disc stack order.</li>
            <li>Remove separator slime from periphery using a spatula.</li>
            <li>Clean each disc both sides with warm (55-60°C) detergent and brush — including disc channels.</li>
            <li>Rinse all parts with lukewarm water; drain inverted on rack.</li>
            <li>Sanitize with steam or 200 ppm chlorine.</li>
            <li>Reassemble per manufacturer torque specifications.</li>
          </ol>`
        },
        {
          title: "Cleaning of Plate Heat Exchangers (PHE)",
          content: `<p><strong>PHE Fouling Stages:</strong> (1) Protein conditioning layer → (2) Transport-controlled buildup → (3) Steady-state thick deposit. Regular CIP is critical.</p>
          <h5 class="font-bold mt-3">Daily CIP:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Lukewarm water (40-50°C) rinse 10 min — reverse flow for better coverage.</li>
            <li>Acid detergent (0.5-1.0%) at 70°C for 20-30 min. <em>(Acid-first sequence recommended for PHE)</em></li>
            <li>Intermediate warm water (60°C) rinse: 5-8 min.</li>
            <li>Alkali solution (0.5-1.0%) at 70°C for 20-30 min.</li>
            <li>40-50°C hot water then tap water 10 min — drain and dry.</li>
            <li>Circulate sanitizer before use (PAA 150-200 ppm or Cl 100-150 ppm).</li>
          </ol>
          <h5 class="font-bold mt-3">Periodic Cleaning:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Carefully open and dismantle PHE.</li>
            <li>Inspect rubber gaskets — cracking, swelling? Replace defective ones.</li>
            <li>Check each plate — scoring, pitting, corrosion? Remove scale with soft brush and 1% H₃PO₄.</li>
            <li>Avoid scratches and dents — they create bacterial harborage sites.</li>
            <li>Thoroughly rinse with tap water; reassemble per manufacturer sequence.</li>
            <li>Perform pressure leak test after reassembly.</li>
          </ol>`
        },
        {
          title: "Cleaning of Milk Storage Tanks",
          content: `<p><strong>Design Note:</strong> Large tanks require spray balls (rotary/static) for full surface coverage. Dead spots harbor biofilm. Verify spray coverage periodically with riboflavin UV test.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>After emptying, open drain valve.</li>
            <li>Rinse with warm water (50°C) using pressurized spray heads: 10-15 min.</li>
            <li>Verify spray ball coverage — all surfaces must be wetted.</li>
            <li>0.5-1.0% alkali detergent (75-80°C) wash for 20-30 min, then drain.</li>
            <li>Intermediate warm water rinse: 10 min.</li>
            <li>Optional: 0.5% HNO₃ or H₃PO₄ (60-70°C, 15-20 min) for milk stone.</li>
            <li>Rinse with warm then cold potable water — drain and dry.</li>
            <li>Sanitize with steam (95°C, 15 min) or 150-200 ppm chlorinated water.</li>
          </ol>`
        },
        {
          title: "Cleaning of HTST Pasteurizer",
          content: `<p><strong>Fouling Mechanism:</strong> At 72-75°C, beta-lactoglobulin unfolds and attaches to surfaces — this "conditioning layer" accelerates further fouling.</p>
          <h5 class="font-bold mt-3">Daily CIP Sequence:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Cold water rinse (30-40°C): 10-15 min — pushes milk out of system.</li>
            <li>Alkali wash (0.5-1.0% NaOH, 75-80°C): 30-45 min.</li>
            <li>Intermediate rinse (60°C): 10 min.</li>
            <li>Acid wash (0.5-1.0% HNO₃, 65-70°C): 20-30 min.</li>
            <li>Final rinse (cold potable water): 10-15 min until neutral pH.</li>
            <li>Thermal sanitization (95°C, 10-15 min) or chemical sanitization.</li>
          </ol>
          <p class="mt-2"><strong>FDV Testing:</strong> Flow Diversion Valve function test mandatory before each production run — faulty FDV can allow under-pasteurized milk into distribution.</p>`
        },
        {
          title: "Cleaning of Homogenizer",
          content: `<p>Homogenizers operate at high pressure (150-300 bar) — narrow channels easily accumulate deposits. COP cleaning required.</p>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>After production, flush with warm water.</li>
            <li>Dismantle homogenizing valve assembly (COP).</li>
            <li>Soak parts in warm (55-60°C) alkaline detergent for 30 min.</li>
            <li>Clean narrow passages with specially designed brushes.</li>
            <li>Thoroughly rinse.</li>
            <li>Inspect pistons, seals and O-rings for wear signs.</li>
            <li>Reassemble and sanitize.</li>
          </ol>`
        }
      ]
    },

    teepol_detergent: {
      title: "Making and Testing Liquid Detergent",
      htmlContent: `
        <p>Neutral liquid detergents (like Teepol) are widely used for manual cleaning of dairy utensils and small equipment. Teepol is a brand name for sodium alkyl sulfate-based surfactant formulations.</p>
        <h4 class="font-bold mt-4">The Science of Surfactants:</h4>
        <p>Surfactant molecules have a <strong>hydrophilic head</strong> and <strong>hydrophobic tail</strong>. These amphiphilic molecules reduce surface tension and form <strong>micelles</strong> around fat droplets — suspending them in water for effective removal.</p>
        <h4 class="font-bold mt-4">1. General Purpose Liquid Detergent (1000 Litre Batch):</h4>
        <div class="overflow-x-auto my-4"><table class="w-full border"><thead><tr class="bg-muted"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border">Water</td><td class="p-2 border">820-840</td><td class="p-2 border">82-84%</td><td class="p-2 border">Main Solvent</td></tr>
        <tr><td class="p-2 border">LABSA (Acid Slurry 90%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Main Cleaning Agent (Anionic Surfactant)</td></tr>
        <tr><td class="p-2 border">Caustic Soda (NaOH)</td><td class="p-2 border">~15</td><td class="p-2 border">~1.5%</td><td class="p-2 border">Neutralize LABSA to pH 7</td></tr>
        <tr><td class="p-2 border">Urea or Salt</td><td class="p-2 border">20-40</td><td class="p-2 border">2-4%</td><td class="p-2 border">Viscosity Enhancer</td></tr>
        <tr><td class="p-2 border">Color &amp; Perfume</td><td class="p-2 border">As required</td><td class="p-2 border">&lt;0.5%</td><td class="p-2 border">Aesthetics</td></tr>
        <tr class="bg-muted"><td class="p-2 border font-bold">Total</td><td class="p-2 border font-bold">1000 Kg</td><td class="p-2 border font-bold">100%</td><td class="p-2 border"></td></tr>
        </tbody></table></div>
        <p><strong>About LABSA:</strong> Linear Alkyl Benzene Sulphonic Acid — most common anionic surfactant. Strongly acidic (pH ~1-2). Neutralization: LABSA + NaOH → Sodium LAS (active surfactant) + H₂O</p>
        <p class="font-semibold mt-3">Process:</p>
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>Add water to SS/HDPE tank. Slowly add LABSA with continuous stirring (exothermic).</li>
          <li>Separately dissolve NaOH in small amount of water (PPE required — highly exothermic).</li>
          <li>Monitoring with pH meter, slowly add caustic to slurry. Target pH: 6.5-7.5.</li>
          <li>Add salt or urea for viscosity. Once cooled, add color and perfume.</li>
          <li>Final specs: pH 6.5-7.5 | Active Matter &gt;8% | Viscosity 200-500 cP.</li>
        </ol>
        <h4 class="font-bold mt-6">2. Acidic CIP Cleaner (1000 Litre Batch):</h4>
        <p class="text-red-700 font-semibold">⚠ Warning: Strong acids are highly dangerous. Wear full PPE. Ensure adequate ventilation.</p>
        <div class="overflow-x-auto my-4"><table class="w-full border"><thead><tr class="bg-muted"><th class="p-2 border text-left">Ingredient</th><th class="p-2 border text-left">Quantity (Kg)</th><th class="p-2 border text-left">%</th><th class="p-2 border text-left">Purpose</th></tr></thead><tbody>
        <tr><td class="p-2 border">Water</td><td class="p-2 border">880</td><td class="p-2 border">88%</td><td class="p-2 border">Solvent (acid-resistant tank)</td></tr>
        <tr><td class="p-2 border">HCl (33%)</td><td class="p-2 border">100</td><td class="p-2 border">10%</td><td class="p-2 border">Descaling Agent</td></tr>
        <tr><td class="p-2 border">Non-ionic Surfactant</td><td class="p-2 border">20</td><td class="p-2 border">2%</td><td class="p-2 border">Wetting and soil removal</td></tr>
        </tbody></table></div>
        <p class="font-semibold">Process:</p>
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>Add all water to HDPE/FRP acid-resistant tank.</li>
          <li class="font-bold text-red-700">Always add acid to water — NEVER water to acid! (Violent exothermic reaction)</li>
          <li>Slowly add HCl to water with stirring.</li>
          <li>Add non-ionic surfactant and mix. Final pH: 1-2.</li>
        </ol>
        <h4 class="font-bold mt-6">How to Check Detergent Strength (Active Matter %):</h4>
        <p>Standard method: <strong>MBAS (Methylene Blue Active Substances) Test</strong> — methylene blue dye forms a complex with anionic surfactants extracted into chloroform, measured at 650 nm absorbance.</p>
        <p class="mt-2"><strong>Rapid Field Test:</strong> Check pH — neutral detergent should be 6.5-7.5. pH &gt;9 = incomplete neutralization.</p>
      `
    },

    sip: {
      title: "SIP (Sterilization-In-Place) — Complete Scientific Guide",
      intro: "SIP sterilizes equipment and pipelines without disassembly. Essential for aseptic processing (UHT milk) and always performed AFTER a complete CIP cycle.",
      process: `
        <h5 class="font-bold">CIP vs. SIP — Key Differences:</h5>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-red-200"><th class="p-1 border">Parameter</th><th class="p-1 border">CIP</th><th class="p-1 border">SIP</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Objective</td><td class="p-1 border">Remove soil, reduce microbial load</td><td class="p-1 border">Achieve commercial sterility</td></tr>
            <tr><td class="p-1 border">Agent</td><td class="p-1 border">Chemical solutions</td><td class="p-1 border">Saturated steam (&gt;121°C)</td></tr>
            <tr><td class="p-1 border">Pressure</td><td class="p-1 border">Atmospheric (mostly)</td><td class="p-1 border">15-30 psi</td></tr>
            <tr><td class="p-1 border">Log Reduction</td><td class="p-1 border">3-5 log</td><td class="p-1 border">6-12 log</td></tr>
          </tbody>
        </table>
        <h5 class="font-bold mt-4">D-Value and F-Value Concepts:</h5>
        <p><strong>D-value:</strong> Time at a specific temperature to kill 90% microbial population (1 log cycle). Example: B. stearothermophilus spores D₁₂₁ = 1-1.5 min.</p>
        <p><strong>F₀-value:</strong> Equivalent sterilization time at 121°C. F₀ = 12 min (12-D concept) is standard for commercial dairy.</p>
        <h5 class="font-bold mt-4">SIP Process Steps:</h5>
        <ol class="list-decimal list-inside space-y-1 mt-2">
          <li>Verify CIP completion — pH check and microbiological testing.</li>
          <li>Partially drain and air-dry system after CIP.</li>
          <li>Check steam traps and pressure gauge calibration.</li>
          <li>Supply saturated steam under pressure (saturated &gt; superheated — moist heat more effective).</li>
          <li>Vent air through 0.2-micron bacterial filter-protected vents — eliminate cold spots.</li>
          <li>Close vents — let pressure build to 15-21 psi (121-126°C).</li>
          <li>Maintain required hold time (minimum 15-20 min at 121°C).</li>
          <li>Slowly release steam through condenser — avoid sudden depressurization.</li>
          <li>Pressurize with sterile nitrogen or air for cooling.</li>
          <li>Review temperature and pressure log data — calculate F₀ value.</li>
        </ol>
        <h5 class="font-bold mt-4">Steam Quality Requirements:</h5>
        <ul class="list-disc list-inside mt-1">
          <li>Dryness fraction ≥ 0.97 (saturated steam)</li>
          <li>No superheat — less effective than moist heat</li>
          <li>No non-condensable gases — reduce effectiveness</li>
          <li>Boiler chemicals must be food-contact grade</li>
        </ul>
        <h5 class="font-bold mt-4">Biological Indicator (BI) Testing:</h5>
        <p>B. stearothermophilus spore strips (10⁶ spores/strip) placed at critical locations. After SIP, culture: Growth = SIP failure | No growth = SIP successful.</p>
      `
    },

    biofilm: {
      title: "Biofilm — The Hidden Threat in Dairy Processing",
      intro: "Biofilm is an advanced form of bacterial contamination extremely difficult to remove with ordinary cleaning — a serious quality and food safety concern in dairy.",
      htmlContent: `
        <h4 class="font-bold">What is Biofilm?</h4>
        <p>Biofilm is an organized bacterial community attached to surfaces and enclosed in self-produced <strong>Extracellular Polymeric Substance (EPS)</strong> matrix of polysaccharides, proteins, DNA and lipids. This matrix makes bacteria:</p>
        <ul class="list-disc list-inside mt-1">
          <li>Up to <strong>1000× more resistant</strong> to sanitizers and antibiotics</li>
          <li>Protected from drying and environmental stress</li>
          <li>Capable of communication via quorum sensing</li>
        </ul>
        <h4 class="font-bold mt-4">5 Stages of Biofilm Formation:</h4>
        <ol class="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Initial Attachment (Reversible):</strong> Free-floating bacteria loosely attach</li>
          <li><strong>Irreversible Attachment:</strong> Bacteria permanently attach and divide</li>
          <li><strong>Early Development:</strong> Microcolonies form, EPS production begins</li>
          <li><strong>Maturation:</strong> 3D mushroom-shaped clusters with water channels — fully protected</li>
          <li><strong>Dispersion:</strong> Cells detach to colonize new surfaces — product contamination risk!</li>
        </ol>
        <h4 class="font-bold mt-4">Common Biofilm-Forming Bacteria in Dairy:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Organism</th><th class="p-1 border">Temp Range</th><th class="p-1 border">Special Concern</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Pseudomonas fluorescens</td><td class="p-1 border">4-10°C</td><td class="p-1 border">Biofilm under refrigeration, heat-stable enzymes</td></tr>
            <tr><td class="p-1 border">Listeria monocytogenes</td><td class="p-1 border">0-45°C</td><td class="p-1 border">Foodborne pathogen, thrives in wet environments</td></tr>
            <tr><td class="p-1 border">Staphylococcus aureus</td><td class="p-1 border">10-45°C</td><td class="p-1 border">Heat-stable enterotoxin producer</td></tr>
            <tr><td class="p-1 border">Bacillus cereus</td><td class="p-1 border">10-50°C</td><td class="p-1 border">Pasteurization-resistant spores</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Biofilm Detection:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li><strong>ATP Bioluminescence:</strong> Rapid surface ATP measurement. &gt;10 RLU/100 cm² = potential biofilm.</li>
          <li><strong>Swab Testing:</strong> Standard plate count or selective media culture.</li>
          <li><strong>Crystal Violet Staining:</strong> Lab method — stain, wash, measure absorbance.</li>
          <li><strong>SEM:</strong> Direct visualization of biofilm architecture.</li>
        </ul>
        <h4 class="font-bold mt-4">Biofilm Prevention and Control:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li>Minimize surface roughness — Ra &lt;0.8 μm for food-contact stainless steel.</li>
          <li>Eliminate dead legs, crevices and horizontal surfaces in equipment design.</li>
          <li>Daily thorough CIP — biofilm can form within 4-24 hours.</li>
          <li>Rotate sanitizer types to prevent resistance development.</li>
          <li>Use enzymatic cleaners that degrade the EPS matrix.</li>
          <li>Peracetic Acid (PAA) is highly effective against established biofilms.</li>
        </ul>
      `
    },

    water_quality: {
      title: "Water Quality in CIP — Scientific Importance",
      intro: "Water is the primary medium of CIP. Its quality directly affects cleaning effectiveness, scale formation and product quality.",
      htmlContent: `
        <h4 class="font-bold">Water Hardness and CIP Impact:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Category</th><th class="p-1 border">CaCO₃ (mg/L)</th><th class="p-1 border">CIP Impact</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Soft</td><td class="p-1 border">0-75</td><td class="p-1 border">Good — minimal scale formation</td></tr>
            <tr><td class="p-1 border">Moderate</td><td class="p-1 border">75-150</td><td class="p-1 border">Acceptable with sequestrants</td></tr>
            <tr><td class="p-1 border">Hard</td><td class="p-1 border">150-300</td><td class="p-1 border">Scale formation, reduced efficiency</td></tr>
            <tr><td class="p-1 border">Very Hard</td><td class="p-1 border">&gt;300</td><td class="p-1 border">Serious scaling — more frequent acid wash</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Iron and Manganese Problems:</h4>
        <p>High iron (&gt;0.3 mg/L) and manganese (&gt;0.05 mg/L) oxidize to insoluble hydroxides depositing on equipment. They cause brown/orange staining, rapidly consume chlorine sanitizers, and affect product color and flavor.</p>
        <p><strong>Solution:</strong> Greensand filters or sequestrant use.</p>
        <h4 class="font-bold mt-4">Microbiological Quality Requirements:</h4>
        <ul class="list-disc list-inside mt-1">
          <li>Total Plate Count: &lt;100 CFU/mL</li>
          <li>Coliforms: Absent (0/100 mL)</li>
          <li>E. coli: Absent (0/100 mL)</li>
          <li>Turbidity: &lt;1 NTU</li>
          <li>Residual Chlorine: 0.2-0.5 mg/L</li>
        </ul>
        <h4 class="font-bold mt-4">Water Treatment Systems for Dairy:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li><strong>Sand/Multimedia Filtration:</strong> Suspended solids removal</li>
          <li><strong>Activated Carbon:</strong> Chlorine, odor, organics removal</li>
          <li><strong>Ion Exchange Softening:</strong> Replaces Ca²⁺/Mg²⁺ with Na⁺ (true softening)</li>
          <li><strong>Reverse Osmosis:</strong> High purity for sensitive applications</li>
          <li><strong>UV Disinfection:</strong> Chemical-free microbial control (254 nm)</li>
          <li><strong>Chlorination:</strong> Maintains residual disinfection</li>
        </ul>
      `
    },

    environmental_compliance: {
      title: "CIP Effluent Treatment and Environmental Compliance",
      intro: "CIP generates large volumes of chemical-laden wastewater. Responsible treatment and disposal is an important environmental and regulatory responsibility.",
      htmlContent: `
        <h4 class="font-bold">CIP Wastewater Characteristics:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Parameter</th><th class="p-1 border">Range</th><th class="p-1 border">Environmental Concern</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">pH</td><td class="p-1 border">2-13</td><td class="p-1 border">Extreme pH harms aquatic life</td></tr>
            <tr><td class="p-1 border">BOD</td><td class="p-1 border">2000-5000 mg/L</td><td class="p-1 border">High oxygen demand, eutrophication</td></tr>
            <tr><td class="p-1 border">COD</td><td class="p-1 border">5000-15000 mg/L</td><td class="p-1 border">Organic pollution indicator</td></tr>
            <tr><td class="p-1 border">Total Phosphorus</td><td class="p-1 border">50-200 mg/L</td><td class="p-1 border">Eutrophication risk</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Treatment Methods:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li><strong>pH Neutralization:</strong> Mix acid/alkali streams or add lime/acid — target pH 6-9.</li>
          <li><strong>DAF (Dissolved Air Flotation):</strong> Fat and suspended solids removal.</li>
          <li><strong>Biological Treatment (MBBR/SBR):</strong> BOD/COD reduction.</li>
          <li><strong>Phosphorus Precipitation:</strong> Alum or ferric chloride treatment.</li>
        </ul>
        <h4 class="font-bold mt-4">CPCB Standards (India) — Dairy Effluent Limits:</h4>
        <ul class="list-disc list-inside mt-1">
          <li>pH: 6.0-9.0</li>
          <li>BOD: ≤30 mg/L (surface water)</li>
          <li>TSS: ≤100 mg/L</li>
          <li>Oil &amp; Grease: ≤10 mg/L</li>
        </ul>
        <h4 class="font-bold mt-4">Green CIP — Sustainable Practices:</h4>
        <ul class="list-disc list-inside mt-1 space-y-1">
          <li>Implement chemical recovery and reuse systems.</li>
          <li>Recycle recovered rinse water for pre-rinse operations.</li>
          <li>Use enzyme-based cleaners at lower temperatures (energy saving).</li>
          <li>Conductivity-based dosing for precise chemical usage.</li>
          <li>Optimized CIP programs to minimize water and chemical use.</li>
        </ul>
      `
    },

    haccp_cip: {
      title: "CIP and HACCP — Food Safety Management Integration",
      intro: "CIP/SIP procedures are essential components of the HACCP framework. Proper documentation and verification are mandatory under FSSAI, ISO 22000 and BRC standards.",
      htmlContent: `
        <h4 class="font-bold">CIP in the HACCP Framework:</h4>
        <p>CIP is typically a <strong>Prerequisite Program (PRP)</strong> — not a CCP — but its failure directly compromises CCPs. Both HACCP and ISO 22000 mandate CIP validation and monitoring.</p>
        <h4 class="font-bold mt-4">CIP Critical Limits — Monitoring Parameters:</h4>
        <table class="w-full border text-sm mt-2">
          <thead><tr class="bg-muted"><th class="p-1 border">Parameter</th><th class="p-1 border">Critical Limit</th><th class="p-1 border">Monitoring Frequency</th></tr></thead>
          <tbody>
            <tr><td class="p-1 border">Alkali Concentration</td><td class="p-1 border">0.5-1.5% NaOH</td><td class="p-1 border">Each cycle / Titration</td></tr>
            <tr><td class="p-1 border">Acid Concentration</td><td class="p-1 border">0.5-1.0% HNO₃</td><td class="p-1 border">Each cycle / Titration</td></tr>
            <tr><td class="p-1 border">Temperature</td><td class="p-1 border">70-80°C (alkali), 60-70°C (acid)</td><td class="p-1 border">Continuous / Inline sensor</td></tr>
            <tr><td class="p-1 border">Contact Time</td><td class="p-1 border">15-30 min (alkali)</td><td class="p-1 border">Automated timer</td></tr>
            <tr><td class="p-1 border">Final Rinse pH</td><td class="p-1 border">6.5-7.5</td><td class="p-1 border">Each cycle / pH meter</td></tr>
            <tr><td class="p-1 border">Sanitizer Conc.</td><td class="p-1 border">150-200 ppm (Cl)</td><td class="p-1 border">Each cycle / Test strips</td></tr>
          </tbody>
        </table>
        <h4 class="font-bold mt-4">Validation vs. Verification vs. Monitoring:</h4>
        <ul class="list-disc list-inside mt-1 space-y-2">
          <li><strong>Validation:</strong> Prove CIP achieves required cleanliness. Microbiological testing, ATP testing. One-time or after major changes.</li>
          <li><strong>Verification:</strong> Confirm validated parameters are being achieved. Monthly ATP, swab testing. Periodic.</li>
          <li><strong>Monitoring:</strong> Daily concentrations, temperatures, times, final pH. Every cycle.</li>
        </ul>
        <h4 class="font-bold mt-4">Minimum CIP Record Requirements:</h4>
        <ul class="list-disc list-inside mt-1">
          <li>Date and time of each CIP cycle</li>
          <li>Equipment/circuit cleaned</li>
          <li>Chemical concentrations (with test results)</li>
          <li>Temperature and time records</li>
          <li>Final rinse pH</li>
          <li>Operator signature</li>
          <li>Deviations and corrective actions</li>
        </ul>
        <p class="mt-2 text-sm text-gray-600">Retain records for minimum 1 year (FSSAI). Electronic data logging provides tamper-proof automated records.</p>
        <h4 class="font-bold mt-4">Corrective Actions for CIP Failures:</h4>
        <ol class="list-decimal list-inside mt-1 space-y-1">
          <li>Withdraw equipment from production immediately.</li>
          <li>Identify root cause — chemical? temperature? time? equipment failure?</li>
          <li>Re-CIP with correct parameters.</li>
          <li>Confirm re-CIP effectiveness with microbiological testing.</li>
          <li>Conduct root cause analysis and update SOP.</li>
          <li>Document in incident log.</li>
        </ol>
      `
    },

    solution_strength: {
      title: "Testing CIP Solution Strength — Complete Methods",
      intro: "Regular strength testing is critical. Under-strength = ineffective cleaning; over-strength = equipment corrosion and product contamination risk.",
      alkalinity_test: {
        title: "Determining Washing Solution Strength (Alkalinity Test)",
        content: `
          <p>Strength expressed as NaOH equivalent. 1.5% for glass bottles; 0.5% for can washing. Repeated use dilutes solution — regular testing essential.</p>
          <h5 class="font-bold mt-4">Required Equipment and Reagents:</h5>
          <p>Conical flask, pipettes (10 mL, 50 mL), burette (25 mL), volumetric flask (250 mL), magnetic stirrer | 2.5 N H₂SO₄, 0.1 N H₂SO₄, 0.1 N HCl | Phenolphthalein (0.5% in ethanol), Methyl orange (0.1%).</p>
          <h5 class="font-bold mt-4">Method 1 — Qualitative Test (Rapid Field Test):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Take 10 mL detergent solution in conical flask.</li>
            <li>Add 12.5 mL N/10 HCl + 5 drops phenolphthalein indicator.</li>
            <li>Turns red → alkalinity &gt;0.5% NaOH = SUFFICIENT.</li>
            <li>Colourless = alkalinity too low — top up or replace.</li>
          </ol>
          <h5 class="font-bold mt-4">Method 2 — Quantitative Direct Reading:</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>10 mL sample in 100 mL conical flask.</li>
            <li>Add 5 drops phenolphthalein indicator.</li>
            <li>Titrate with 2.5 N H₂SO₄ until colourless.</li>
            <li>Note volume of acid used.</li>
            <li><strong>Calculation: mL of 2.5N H₂SO₄ = % NaOH directly.</strong></li>
          </ol>
          <p class="text-sm mt-1 text-gray-600">Example: 1.5 mL used → 1.5% NaOH equivalent.</p>
          <h5 class="font-bold mt-4">Method 3 — Laboratory Method (Most Accurate):</h5>
          <ol class="list-decimal list-inside space-y-1 mt-2">
            <li>Take 5 mL washing solution in 250 mL volumetric flask.</li>
            <li>Make up to 250 mL with distilled water (50× dilution).</li>
            <li>Transfer 50 mL to 100 mL conical flask.</li>
            <li>Add phenolphthalein indicator drops.</li>
            <li>Titrate with 0.1 N H₂SO₄ to colourless. Record as "A" mL.</li>
            <li>Add methyl orange indicator drops.</li>
            <li>Titrate until slight pink. Record as "B" mL.</li>
          </ol>
          <p class="mt-3 p-3 bg-indigo-100 rounded-lg"><strong>Calculations:</strong><br/>
          % Free Caustic (NaOH) = (A − B) × 0.4<br/>
          % Total Alkali = (A + B) × 0.4</p>
          <h5 class="font-bold mt-4">Indicator Science:</h5>
          <ul class="list-disc list-inside mt-1">
            <li><strong>Phenolphthalein:</strong> Colourless → pink at pH 8.2-10. Indicates strong alkali neutralization.</li>
            <li><strong>Methyl Orange:</strong> Orange → red at pH 3.1-4.4. Indicates weak acid (NaHCO₃) neutralization.</li>
          </ul>
        `
      },
      calculators: {
        error_title: "Error",
        success_title: "Calculated Successfully",
        error_invalid_titre: "Please enter a valid titre value.",
        naoh: { title: "NaOH (%)", description: "Titrate 10 mL CIP solution with 0.1 N acid (HCl) using phenolphthalein indicator.", label: "0.1 N Acid Used (mL)", button: "Calculate NaOH %", result_prefix: "Caustic Soda (NaOH):" },
        hno3: { title: "HNO₃ (%)", description: "Titrate 10 mL CIP solution with 0.1 N base (NaOH) using phenolphthalein indicator.", label: "0.1 N Base Used (mL)", button: "Calculate HNO₃ %", result_prefix: "Nitric Acid (HNO₃):" },
        h3po4: { title: "H₃PO₄ (%)", description: "Titrate 10 mL CIP solution with 0.1 N base (NaOH) using phenolphthalein indicator.", label: "0.1 N Base Used (mL)", button: "Calculate H₃PO₄ %", result_prefix: "Phosphoric Acid (H₃PO₄):" },
        chlorine: { title: "Chlorine (ppm)", description: "Titrate 100 mL CIP solution using iodometric method with 0.01 N Sodium Thiosulphate.", label: "0.01 N Sodium Thiosulphate Used (mL)", button: "Calculate Chlorine (ppm)", result_prefix: "Available Chlorine:" }
      }
    }
  }
}
