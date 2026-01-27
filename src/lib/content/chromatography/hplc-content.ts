export const hplcContent = {
  hi: {
    mainTitle: "High-Performance Liquid Chromatography (HPLC)",
    description:
      "HPLC ke advanced principles, instrumentation hardware, reverse-phase mechanism, aur dairy industry mein vitamins/toxins analysis ke detailed applications.",
    introduction: {
      title: "HPLC ka Detailed Introduction",
      content: `<p>High-Performance Liquid Chromatography (HPLC), jise pehle 'High-Pressure Liquid Chromatography' kaha jata tha, analytical chemistry ki sabse versatile aur powerful technique hai. Ye kisi bhi complex mixture (jaise milk extract) ke components ko molecular level par separate, identify aur quantify karne ke liye use hoti hai.</p>
      
      <p>Conventional column chromatography ke comparison mein, HPLC high pressure (up to 400-600 bar) use karta hai solvent ko column ke through push karne ke liye. Is wajah se separation bohot fast aur high-resolution hota hai. Dairy industry mein, ye 'Gold Standard' hai for testing heat-sensitive compounds like vitamins, antibiotics, aur mycotoxins jo Gas Chromatography (GC) par degrade ho sakte hain.</p>`
    },
    principle: {
      title: "Scientific Principle: Separation Mechanism",
      content: `<p>HPLC ka basic principle <strong>Adsorption</strong> aur <strong>Partition</strong> coefficient par based hai. Separation do phases ke beech 'tug-of-war' (rassa-kashi) jaisa hota hai:</p>
      
      <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
        <li><strong>Stationary Phase:</strong> Column ke andar packed solid particles (silica). Ye molecules ko pakad kar rakhna chahta hai (Retain).</li>
        <li><strong>Mobile Phase:</strong> Liquid solvent jo pump ke through flow hota hai. Ye molecules ko apne saath bahakar le jana chahta hai (Elute).</li>
      </ul>
      
      <p><strong>Separation Logic (Polarity Rule):</strong></p>
      <p>Sabse common mode <strong>Reverse-Phase HPLC (RP-HPLC)</strong> hai. Ismein:</p>
      <ul>
        <li><strong>Stationary Phase:</strong> Non-polar hota hai (e.g., C18 coated silica).</li>
        <li><strong>Mobile Phase:</strong> Polar hota hai (e.g., Water + Methanol/Acetonitrile).</li>
        <li><strong>Result:</strong> Non-polar compounds column ke saath strong bond banate hain aur late nikalte hain. Polar compounds mobile phase ke saath jaldi nikal jate hain.</li>
      </ul>
      
      
      <p>Har component ka column se nikalne ka time alag hota hai, jise hum <strong>Retention Time (Rt)</strong> kehte hain. Ye har compound ka unique fingerprint hai.</p>`
    },
    components: {
      title: "HPLC System Hardware Components",
      content: `
      <ol class="list-decimal list-outside pl-5 space-y-3">
        <li><strong>Solvent Reservoir & Degasser:</strong> Mobile phase bottles. Degasser solvent mein se dissolved hawa (oxygen/nitrogen) nikalta hai taaki bubbles na banein aur baseline stable rahe.</li>
        
        <li><strong>High-Pressure Pump:</strong> System ka heart. Ye solvent ko constant flow rate (e.g., 1.0 mL/min) aur high pressure par deliver karta hai. Pulsation-free flow accuracy ke liye zaroori hai.</li>
        
        <li><strong>Autosampler (Injector):</strong> Ye precise amount of sample (e.g., 20 μL) ko high-pressure stream mein inject karta hai bina pressure drop kiye.</li>
        
        <li><strong>Analytical Column (The Oven):</strong> Ye separation engine hai. Usually stainless steel tube (15-25 cm long) jisme 3-5 μm silica particles packed hote hain. Temperature control (Column Oven) retention time reproducibility ke liye critical hai.</li>
        
        <li><strong>Detectors (The Eyes):</strong> Column se nikalne wale compounds ko detect karta hai:
          <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
            <li><strong>PDA/DAD (Photodiode Array):</strong> UV-absorbing compounds (vitamins, preservatives) ke liye. Full spectrum scan karta hai.</li>
            <li><strong>FLD (Fluorescence):</strong> Highly sensitive. Aflatoxins aur Vitamins (B2) ke liye best.</li>
            <li><strong>RID (Refractive Index):</strong> Sugars (Lactose) ke liye use hota hai kyunki sugars UV absorb nahi karti.</li>
          </ul>
        </li>
      </ol>
      

[Image of HPLC Instrumentation Diagram]
`
    },
    applications: {
      title: "Dairy Industry mein Critical Applications",
      content: `
      <ul class="list-disc list-outside pl-5 space-y-3">
        <li><strong>Aflatoxin M1 Screening:</strong> Milk safety ka sabse important test. Cows jo contaminated feed khati hain, unke milk mein M1 toxin aata hai. HPLC-FLD isse ppt (parts per trillion) level tak detect kar sakta hai.</li>
        
        <li><strong>Vitamin Profiling (Fortification Check):</strong>
          <ul class="list-disc pl-5">
             <li>Fat-Soluble (A, D, E, K): Fortified milk mein level check karne ke liye.</li>
             <li>Water-Soluble (B-Complex, C): Infant formula mein nutritional labeling verify karne ke liye.</li>
          </ul>
        </li>
        
        <li><strong>Sugar Analysis (Lactose-Free Products):</strong> Lactose-free milk mein residual lactose (<0.1%) measure karne ke liye HPLC-RI ya HPLC-ELSD use hota hai. Saath hi Glucose aur Galactose ka ratio check kiya jata hai.</li>
        
        <li><strong>Melamine Detection:</strong> Protein adulteration (fake protein) pakadne ke liye. Melamine nitrogen-rich chemical hai jo illegal tarike se milk mein milaya jata hai. HPLC isse accurately pakadta hai.</li>
        
        <li><strong>Antibiotic Residues:</strong> Veterinary drugs (Tetracyclines, Sulfonamides) ke residues detect karna taaki milk safe declare kiya ja sake.</li>
      </ul>`
    },
    troubleshooting: {
      title: "Common Problems aur Troubleshooting",
      content: `
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li><strong>High Backpressure:</strong> Column blockage ya guard column clogged hone se hota hai. Filtered mobile phase use karein.</li>
        <li><strong>Drifting Retention Time:</strong> Temperature fluctuation ya mobile phase composition change hone ki wajah se. Column oven use karein aur bubbles remove karein.</li>
        <li><strong>Ghost Peaks:</strong> Purane sample ka carryover ya contaminated water/solvent. Injection needle wash karein aur HPLC grade water use karein.</li>
        <li><strong>Split Peaks:</strong> Column inlet void (kharaab) ho gaya hai ya sample solvent mobile phase se match nahi kar raha.</li>
      </ul>`
    },
    advantages: {
      title: "HPLC ke Advantages (Kyun use karein?)",
      content: `
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li><strong>Speed & Automation:</strong> Autosampler ke saath 24/7 samples run kiye ja sakte hain.</li>
        <li><strong>Sensitivity:</strong> Trace level analysis (ppb/ppt) possible hai jo titration ya basic chemistry se nahi milta.</li>
        <li><strong>Reproducibility:</strong> Agar method sahi hai, toh results hamesha consistent aayenge.</li>
        <li><strong>Non-Destructive:</strong> Kuch detectors ke baad sample ko wapas collect (Fraction Collection) kiya ja sakta hai further research ke liye.</li>
      </ul>`
    }
  },

  en: {
    mainTitle: "High-Performance Liquid Chromatography (HPLC)",
    description:
      "A comprehensive guide to HPLC: Instrumentation, Reverse-Phase mechanisms, Method Development, and critical applications in Dairy Quality Assurance.",
    introduction: {
      title: "Detailed Introduction to HPLC",
      content: "<p>High-Performance Liquid Chromatography (HPLC) represents the pinnacle of liquid chromatography techniques. Originally termed 'High-Pressure Liquid Chromatography', it distinguishes itself from traditional low-pressure column chromatography by utilizing high operational pressures (up to 6000 psi or 400 bar) to force the mobile phase through densely packed columns. This results in superior resolution, speed, and sensitivity.</p><p>In the dairy and food sector, HPLC is the analytical workhorse. It serves as the primary method for ensuring food safety (toxins, antibiotics) and verifying nutritional compliance (vitamins, additives), particularly for thermolabile (heat-sensitive) compounds that cannot be analyzed via Gas Chromatography.</p>"
    },
    principle: {
      title: "Scientific Principle & Separation Modes",
      content: `<p>HPLC separation is based on the differential distribution of analytes between a <strong>Mobile Phase</strong> (liquid) and a <strong>Stationary Phase</strong> (solid packing). The separation efficiency is governed by the polarity of the molecules.</p>
      
      <h4>1. Reverse-Phase Chromatography (RP-HPLC)</h4>
      <p>This is the most common mode used in 90% of food analysis.</p>
      <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
        <li><strong>Stationary Phase:</strong> Non-polar / Hydrophobic (e.g., Silica beads modified with C18 or C8 alkyl chains).</li>
        <li><strong>Mobile Phase:</strong> Polar (e.g., Water mixed with Methanol or Acetonitrile).</li>
        <li><strong>Mechanism:</strong> "Like dissolves like." Non-polar analytes bind to the non-polar column (longer retention time), while polar analytes prefer the mobile phase and elute earlier. Increasing the organic solvent percentage in the mobile phase speeds up elution of non-polar compounds.</li>
      </ul>
      

      <h4>2. Normal-Phase Chromatography</h4>
      <p>Uses a polar stationary phase (pure Silica) and non-polar mobile phase (Hexane). Used for separating very hydrophobic isomers, like Tocopherols (Vitamin E).</p>`
    },
    components: {
      title: "Instrumentation: The HPLC Stack",
      content: `
      <ol class="list-decimal list-outside pl-5 space-y-3">
        <li><strong>Solvent Manager (Pump & Degasser):</strong> 
          <ul class="list-disc pl-5">
            <li><em>Degasser:</em> Removes dissolved gases to prevent bubbles that cause baseline noise.</li>
            <li><em>Pump:</em> Delivers flow with high precision (e.g., 0.001 mL/min accuracy). Can run 'Isocratic' (constant composition) or 'Gradient' (changing composition over time) methods.</li>
          </ul>
        </li>
        
        <li><strong>Autosampler (Injector):</strong> Automatically draws and injects samples from vials into the high-pressure flow path without stopping the pump, allowing for high-throughput overnight runs.</li>
        
        <li><strong>Thermostatted Column Compartment (TCC):</strong> Maintains the column at a specific temperature (e.g., 25°C - 60°C). Temperature control is vital because viscosity and solubility change with heat, affecting retention times.</li>
        
        <li><strong>Analytical Column:</strong> The heart of the separation. Common dimensions: 150mm x 4.6mm with 5µm particle size. Smaller particles (sub-2µm) are used in UHPLC for faster runs.</li>
        
        <li><strong>Detectors:</strong>
           <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
              <li><strong>UV-Vis / PDA (Photodiode Array):</strong> The standard detector for compounds with chromophores (Vitamins, Preservatives).</li>
              <li><strong>FLD (Fluorescence):</strong> For naturally fluorescent compounds (Aflatoxins, Riboflavin) or derivatized amino acids. extremely sensitive.</li>
              <li><strong>RID (Refractive Index):</strong> Universal but low sensitivity. Standard for sugars (Lactose, Glucose) which lack UV absorbance.</li>
              <li><strong>LC-MS/MS:</strong> Mass spectrometry coupling for molecular weight identification and ultra-trace quantification.</li>
           </ul>
        </li>
      </ol>
      `
    },
    applications: {
      title: "Critical Applications in Dairy Science",
      content: `
      <ul class="list-disc list-outside pl-5 space-y-3">
        <li><strong>Mycotoxin Analysis (Aflatoxin M1):</strong> The most critical safety test. M1 is extracted using Immunoaffinity columns and analyzed via HPLC-FLD. Strict regulatory limits (e.g., 0.5 ppb in US, 0.05 ppb in EU) require HPLC's sensitivity.</li>
        
        <li><strong>Vitamin Quantification:</strong> 
          <ul class="list-disc pl-5">
             <li>Simultaneous determination of fat-soluble vitamins (A, D2, D3, E) in fortified milk and infant formula.</li>
             <li>Analysis of water-soluble vitamins (B1, B2, B6, B12, C) using aqueous mobile phases.</li>
          </ul>
        </li>
        
        <li><strong>Carbohydrate Profiling:</strong> Separation of Lactose, Glucose, Galactose, and Sucrose using specialized amino-columns or RID detection. Essential for certifying "Lactose-Free" products and monitoring enzymatic hydrolysis.</li>
        
        <li><strong>Adulterant Detection (Melamine & Dicyandiamide):</strong> Following the 2008 milk scandal, HPLC methods were standardized to detect Melamine (added to artificially boost protein test results) at ppm levels.</li>
        
        <li><strong>Preservatives and Additives:</strong> Quantification of Sodium Benzoate, Sorbic Acid, or synthetic colors in dairy beverages and yogurts.</li>
        
        <li><strong>Protein Characterization:</strong> Size-Exclusion HPLC (SEC) or Ion-Exchange HPLC is used to separate Whey proteins (Alpha-lactalbumin, Beta-lactoglobulin) and Caseins.</li>
      </ul>`
    },
    troubleshooting: {
      title: "Troubleshooting Common HPLC Issues",
      content: `
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li><strong>Baseline Noise/Drift:</strong> Usually caused by air bubbles in the pump (purge the system), contaminated mobile phase, or lamp aging in the detector.</li>
        <li><strong>High Backpressure:</strong> Indicates a blockage. Common culprits: Clogged inline filter, guard column saturation, or precipitation of buffer salts in the column (always wash with water before organic solvents).</li>
        <li><strong>Retention Time Shift:</strong> Check column temperature stability, mobile phase pH (evaporation of organic modifier), or pump flow rate accuracy.</li>
        <li><strong>Peak Tailing:</strong> Often due to "secondary interactions" with silica silanols (add triethylamine or lower pH) or a void at the column head (replace column).</li>
      </ul>`
    },
    advantages: {
      title: "Strategic Advantages of HPLC",
      content: `
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li><strong>Sensitivity & Specificity:</strong> Capable of resolving complex biological matrices with detection limits in the nanogram/picogram range.</li>
        <li><strong>Quantitative Precision:</strong> Automated injection and integration yield RSD values < 1%, making it ideal for regulatory compliance.</li>
        <li><strong>Broad Applicability:</strong> Unlike GC, it does not require samples to be volatile, making it suitable for 80% of organic chemicals including large biomolecules (proteins, peptides).</li>
      </ul>`
    }
  }
};
