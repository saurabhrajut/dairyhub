export const tlcContent = {
  hi: {
    mainTitle: "Thin Layer Chromatography (TLC)",
    description:
      "Thin Layer Chromatography (TLC) ke detailed principles, operational methodology, Rf value calculation, aur dairy industry mein lipids aur contaminants analysis ke applications.",
    introduction: {
      title: "TLC ka Detailed Introduction",
      content: `<p>Thin Layer Chromatography (TLC) ek widely used planar chromatography technique hai jo mixtures ko separate, identify, aur purify karne ke liye use hoti hai. Ye 'Open Column Chromatography' ka ek form hai jahan separation ek glass, aluminium, ya plastic sheet par coated thin layer par hoti hai.</p>
      
      <p>Historically, iska development 1938 mein Izmailov aur Shraiber ne kiya tha (drop chromatography), lekin modern standardized TLC plates (Silica Gel G) ka credit Egon Stahl (1950s) ko jata hai. Aaj, TLC chemistry labs mein 'workhorse' technique hai kyunki ye fast (10-30 mins), cheap, aur versatile hai.</p>
      
      <p>Dairy aur Food Analysis mein, TLC ek primary screening tool hai. Ye complex equipment (jaise HPLC) use karne se pehle sample ki quick checking ke liye ideal hai. Iska use milk lipids (phospholipids, triglycerides) ki profiling, ghee mein adulteration (vanaspati/animal fat detection), aur milk mein hazardous contaminants jaise Aflatoxin M1 detect karne ke liye kiya jata hai.</p>`
    },
    principle: {
      title: "Scientific Principle of TLC",
      content: `<p>TLC ka separation principle primarily <strong>Adsorption</strong> (solid stationary phase) ya <strong>Partition</strong> (liquid stationary phase) par based hota hai, depending on the coating material.</p>
      
      <p><strong>Mechanism:</strong></p>
      <ul>
        <li><strong>Stationary Phase:</strong> Ek inert backing (glass/plastic) par adsorbent ki patli layer (0.25 mm) hoti hai. Most common adsorbent <strong>Silica Gel</strong> hai (polar, acidic nature). Other options: Alumina (polar, basic), Cellulose (partition chromatography).</li>
        <li><strong>Mobile Phase:</strong> Ek solvent ya solvent mixture jo capillary action ke through plate par neeche se upar move karta hai.</li>
        <li><strong>Separation Logic (Polartiy):</strong> Silica gel polar hota hai. Jab sample run karta hai:
          <ul>
            <li><strong>Polar compounds:</strong> Silica ke saath strong hydrogen bonding karte hain, isliye dheere move karte hain (Lower Rf).</li>
            <li><strong>Non-polar compounds:</strong> Mobile phase ke saath fast move karte hain kyunki wo silica se kam interact karte hain (Higher Rf).</li>
          </ul>
        </li>
      </ul>
      
      
      <p>Is tarah, components unki polarity aur silica/solvent affinity ke basis par distinct spots mein separate ho jate hain.</p>`
    },
    methodology: {
      title: "Methodology aur Operational Steps",
      content: `<h4>1. Plate Preparation (Activation)</h4>
      <p>Pre-coated plates market mein available hain, lekin lab mein bhi banayi ja sakti hain. Silica Gel 'G' (Gypsum binder) use hota hai. Use karne se pehle plates ko oven mein 100-110°C par 30 mins heat kiya jata hai (Activation) taaki moisture remove ho aur pores open ho jayein.</p>
      
      <h4>2. Sample Spotting</h4>
      <p>Sample ko volatile solvent (e.g., chloroform, methanol) mein dissolve karte hain. Capillary tube ya micro-pipette use karke plate ke bottom edge se 1-2 cm upar ek chhota spot lagate hain. Spot jitna compact hoga, resolution utna high hoga.</p>
      
      <h4>3. Chamber Saturation</h4>
      <p>Development chamber (glass jar) mein mobile phase add karte hain. Chamber ko dhak kar 10-15 minute chhod dete hain taaki solvent vapors pure chamber ko saturate kar dein. Ye 'edge effect' aur uneven running ko rokne ke liye critical hai.</p>
      
      <h4>4. Development (The Run)</h4>
      <p>Plate ko chamber mein vertical rakhte hain (spot solvent level se upar hona chahiye). Solvent capillary action se upar chadhta hai. Jab solvent front top edge se thoda neeche ho, plate ko nikaal kar dry kar lete hain.</p>
      
      <h4>5. Visualization (Detection)</h4>
      <p>Colorless compounds ko dekhne ke liye methods:</p>
      <ul>
        <li><strong>UV Light:</strong> 254 nm (fluorescence quenching) ya 366 nm (fluorescence) par dekhte hain. Aflatoxins blue/green fluorescence dete hain.</li>
        <li><strong>Iodine Chamber:</strong> Iodine vapors organic compounds (especially lipids) ke saath reversible brown complex banate hain.</li>
        <li><strong>Chemical Sprays (Derivatization):</strong> Specific reagents spray karte hain. Example: Ninhydrin (Amino acids ke liye purple spots), Sulfuric acid charring (general organics).</li>
      </ul>`
    },
    dataAnalysis: {
      title: "Data Analysis: Retardation Factor (Rf)",
      content: `<p>TLC analysis qualitative hoti hai aur components ko unke <strong>Rf (Retardation factor)</strong> value se identify kiya jata hai. Rf value constant hoti hai specific solvent system aur adsorbent ke liye.</p>
      
      <p><strong>Rf Formula:</strong></p>
      <p>$$R_f = \\frac{\\text{Distance traveled by Solute (Spot center)}}{\\text{Distance traveled by Solvent Front}}$$</p>
      
      <p>Rf ki value hamesha 0 aur 1 ke beech hoti hai (0 < Rf < 1).</p>
      <ul>
        <li><strong>Rf ≈ 0:</strong> Substance bohot polar hai ya stationary phase se strong bind hai.</li>
        <li><strong>Rf ≈ 1:</strong> Substance non-polar hai aur solvent front ke saath travel kar raha hai.</li>
      </ul>
      
      <p><strong>Factors affecting Rf:</strong> Temperature, layer thickness, moisture content, aur chamber saturation. Isliye standards ko hamesha sample ke saath run kiya jata hai comparison ke liye.</p>`
    },
    applications: {
      title: "Dairy aur Food Industry mein Applications",
      content: `<h4>1. Detection of Adulteration in Ghee</h4>
      <p>Desi ghee mein vanaspati (vegetable oil) ya animal tallow ki milawat pakadne ke liye TLC use hoti hai. Reversed-phase TLC plates use karke cholesterol aur phytosterols (plants se) ke spots ko differentiate kiya jata hai. Agar ghee mein phytosterol ka spot dikhe, toh vegetable oil adulteration confirm hoti hai.</p>
      
      <h4>2. Aflatoxin M1 Analysis in Milk</h4>
      <p>Aflatoxins (mold toxins) carcinogenic hote hain. Milk mein Aflatoxin M1 detect karne ke liye TLC ek standard screening method hai. Sample extract ko run karke UV light (366 nm) mein observe karte hain. Blue fluorescent spot Aflatoxin indicate karta hai.</p>
      
      <h4>3. Lipid Profiling of Dairy Products</h4>
      <p>Milk fat complex hota hai. TLC neutral lipids (triglycerides, di/mono-glycerides, cholesterol) aur polar lipids (phospholipids like lecithin, cephalin) ko separate karne ke liye best hai. Different solvent systems use karke pure lipid class ka 'fingerprint' milta hai.</p>
      
      <h4>4. Detection of Synthetic Colors</h4>
      <p>Milk sweets ya beverages mein banned synthetic dyes (metanil yellow, malachite green) ko identify karne ke liye TLC use hoti hai. Dye ke spots standards ke Rf value se match kiye jate hain.</p>
      
      <h4>5. Monitoring Fermentation</h4>
      <p>Yogurt ya cheese culture fermentation ke dauran organic acids (lactic acid, citric acid) aur sugars (lactose degradation) ke breakdown ko monitor karne ke liye.</p>`
    },
    advantagesLimitations: {
      title: "Advantages aur Limitations",
      content: `<h4>Advantages (Fayde)</h4>
      <ul>
        <li><strong>Simple & Low Cost:</strong> Mehenge equipment ki zaroorat nahi.</li>
        <li><strong>High Throughput:</strong> Ek hi plate par 10-20 samples ek saath run kar sakte hain (Parallel processing), jo HPLC/GC mein possible nahi hai.</li>
        <li><strong>Disposable Static Phase:</strong> Har naye sample ke liye fresh plate use hoti hai, isliye cross-contamination ya column degradation ka dar nahi (useful for dirty samples like biological extracts).</li>
        <li><strong>Specific Visualization:</strong> Plate spray karke specific functional groups identify kar sakte hain.</li>
      </ul>
      
      <h4>Limitations (Kamiyan)</h4>
      <ul>
        <li><strong>Lower Resolution:</strong> HPLC ya GC jitni peak capacity (separation power) nahi hoti.</li>
        <li><strong>Manual Quantification:</strong> Spot size judge karna subjective ho sakta hai unless densitometer use karein.</li>
        <li><strong>Environmental Sensitivity:</strong> Humidity aur temperature Rf values ko change kar sakte hain.</li>
        <li><strong>Limited Plate Length:</strong> Separation path chhota hota hai (usually 10-20 cm), limiting peak capacity.</li>
      </ul>`
    },
    advancedTechniques: {
      title: "Advanced Technique: HPTLC",
      content: `<h4>High-Performance Thin Layer Chromatography (HPTLC)</h4>
      <p>Ye TLC ka advanced version hai jo automation aur accuracy provide karta hai. Ismein optimized silica gel use hota hai (smaller particle size: 5-6 μm compared to 10-12 μm in TLC), jisse resolution badh jata hai.</p>
      
      <ul>
        <li><strong>Automated Spotting:</strong> Machines samples ko nano-liter volumes mein precise bands ke form mein spray karti hain.</li>
        <li><strong>Automated Development:</strong> Controlled humidity aur temperature chambers.</li>
        <li><strong>Densitometry:</strong> Plate ko scanner se scan karke chromatogram generate kiya jata hai (peaks milte hain jaise HPLC mein), jisse accurate quantification possible hai.</li>
        <li><strong>Hyphenation:</strong> HPTLC-MS (Mass Spectrometry) direct band identification ke liye use hota hai without scraping.</li>
      </ul>`
    }
  },

  en: {
    mainTitle: "Thin Layer Chromatography (TLC)",
    description:
      "Advanced principles, operational methodology, and detailed applications of Thin Layer Chromatography (TLC) in dairy and food analysis.",
    introduction: {
      title: "Detailed Introduction to TLC",
      content: `<p>Thin Layer Chromatography (TLC) is a widely used technique in planar chromatography for the separation, identification, and purification of mixtures. It is categorized as a liquid-solid adsorption chromatography technique where separation occurs on a thin layer of adsorbent coated on an inert backing.</p>
      
      <p>While early concepts originated with Izmailov and Shraiber (1938), the modern standardized technique was established by Egon Stahl in the 1950s. Today, TLC remains a cornerstone in analytical chemistry due to its speed, cost-effectiveness, and versatility.</p>
      
      <p>In Dairy and Food Analysis, TLC serves as a crucial screening tool. It is often the first step in analyzing complex matrices before employing sophisticated techniques like HPLC or GC. It is extensively used for lipid profiling, detecting adulterants (such as vegetable oils in ghee), and screening for residues and contaminants like mycotoxins (Aflatoxins) and antibiotics.</p>`
    },
    principle: {
      title: "Scientific Principle",
      content: `<p>TLC operates on the principle of differential distribution of components between a <strong>Stationary Phase</strong> (adsorbent) and a <strong>Mobile Phase</strong> (solvent). Separation is primarily governed by <strong>Adsorption</strong> or <strong>Partition</strong>.</p>
      
      <p><strong>Mechanism of Action:</strong></p>
      <ul>
        <li><strong>Stationary Phase:</strong> A thin layer (0.25 mm for analytical, up to 2 mm for preparative) of adsorbent is coated on glass, aluminum, or plastic. The most common adsorbent is <strong>Silica Gel</strong> (polar due to -Si-OH silanol groups). Other adsorbents include Alumina (basic/polar) and Cellulose.</li>
        <li><strong>Mobile Phase:</strong> A solvent or mixture of solvents that moves up the plate via <strong>capillary action</strong> against gravity.</li>
        <li><strong>Polarity-Based Separation:</strong>
          <ul>
            <li><strong>Polar Analytes:</strong> Interact strongly with the polar silica sites via hydrogen bonding or dipole-dipole interactions. They migrate slowly and have lower Rf values.</li>
            <li><strong>Non-polar Analytes:</strong> Have weaker affinity for the polar stationary phase and are more soluble in the mobile phase (especially if non-polar solvents are used). They migrate faster and have higher Rf values.</li>
          </ul>
        </li>
      </ul>
      
      
      <p>The separation efficiency depends on the balance between the analyte's affinity for the adsorbent and its solubility in the solvent (Eluotropic strength).</p>`
    },
    methodology: {
      title: "Methodology and Operational Steps",
      content: `<h4>1. Plate Preparation and Activation</h4>
      <p>Plates are coated with a slurry of adsorbent (e.g., Silica Gel G). 'G' stands for Gypsum (CaSO<sub>4</sub>), which acts as a binder. Before use, plates are <strong>activated</strong> by heating at 100-110°C for 30-60 minutes to remove adsorbed water molecules, freeing up the active sites for separation.</p>
      
      <h4>2. Sample Application (Spotting)</h4>
      <p>Samples are dissolved in a volatile solvent. Using a capillary tube or micropipette, small spots (1-2 mm diameter) are applied 1-2 cm from the bottom edge. High sample concentration or large spots can cause "tailing" and poor resolution.</p>
      
      <h4>3. Chamber Saturation</h4>
      <p>The development tank is lined with filter paper and filled with the mobile phase. It is covered and left to stand for 15-30 minutes. This ensures the chamber atmosphere is saturated with solvent vapors, preventing uneven solvent migration (edge effects) and ensuring reproducible Rf values.</p>
      
      <h4>4. Development (The Run)</h4>
      <p>The plate is placed vertically in the chamber. The solvent moves up via capillary action. The run is stopped when the solvent front reaches about 1-2 cm from the top edge. The plate is removed and dried.</p>
      
      <h4>5. Visualization (Detection)</h4>
      <p>Since most organic compounds are colorless, visualization methods are required:</p>
      <ul>
        <li><strong>Physical Methods:</strong> UV lamp at 254 nm (fluorescence quenching - dark spots on green background) or 366 nm (native fluorescence).</li>
        <li><strong>Chemical Methods (Derivatization):</strong> Spraying reagents that react with analytes to produce color. Examples:
            <ul>
                <li><em>Iodine Vapor:</em> General detection for lipids/organic compounds (brown spots).</li>
                <li><em>Ninhydrin:</em> For amino acids and peptides (purple/blue spots).</li>
                <li><em>Vanillin-Sulfuric Acid:</em> For higher alcohols, phenols, and steroids.</li>
            </ul>
        </li>
      </ul>`
    },
    dataAnalysis: {
      title: "Data Analysis: Retardation Factor (Rf)",
      content: `<p>Qualitative analysis in TLC is performed using the <strong>Retardation Factor (Rf)</strong>. It is a dimensionless quantity characteristic of a specific compound in a specific solvent system.</p>
      
      <p><strong>Rf Formula:</strong></p>
      <p>$$R_f = \\frac{\\text{Distance traveled by Substance}}{\\text{Distance traveled by Solvent Front}}$$</p>
      
      <p><strong>Interpretation:</strong></p>
      <ul>
        <li>Range: 0.0 to 1.0. Ideal Rf values for separation are typically between 0.3 and 0.7.</li>
        <li>Comparison: The Rf of an unknown sample is compared with the Rf of a standard reference material run on the same plate.</li>
      </ul>
      
      <p><strong>Factors Influencing Rf:</strong> Adsorbent activity (moisture), layer thickness, temperature, solvent purity, and chamber saturation degree.</p>`
    },
    applications: {
      title: "Applications in Dairy and Food Analysis",
      content: `<h4>1. Detection of Ghee Adulteration</h4>
      <p>TLC is a statutory method for detecting vegetable oils (Vanaspati) in Ghee. By using reversed-phase TLC or specific solvent systems, chemists can separate cholesterol (animal origin) from phytosterols (plant origin). The presence of β-sitosterol or stigmasterol confirms adulteration.</p>
      
      <h4>2. Aflatoxin Screening (M1)</h4>
      <p>Aflatoxin M1 is a hydroxylated metabolite of Aflatoxin B1 found in milk from cows fed contaminated feed. TLC is the standard screening method (AOAC protocols) for detecting M1. Extracts are run and observed under UV (366 nm); M1 appears as a distinct blue fluorescent spot.</p>
      
      <h4>3. Lipid Class Profiling</h4>
      <p>Dairy lipids are complex. TLC separates neutral lipids (tri-, di-, mono-glycerides, cholesterol esters) from polar lipids (phospholipids like phosphatidylcholine, sphingomyelin). This is essential for studying milk fat globule membrane (MFGM) composition and changes during processing.</p>
      
      <h4>4. Synthetic Color Detection</h4>
      <p>Used to detect non-permitted coal-tar dyes in dairy sweets and beverages. The dye is extracted and run against standards of permitted and non-permitted colors for identification.</p>
      
      <h4>5. Preservative Analysis</h4>
      <p>Detection of added preservatives like benzoic acid or sorbic acid in dairy products (yogurt, cheese) to ensure compliance with food safety regulations.</p>`
    },
    advantagesLimitations: {
      title: "Advantages and Limitations",
      content: `<h4>Advantages</h4>
      <ul>
        <li><strong>Simultaneous Analysis:</strong> Multiple samples and standards can be run side-by-side on a single plate, reducing time and allowing direct visual comparison.</li>
        <li><strong>Cost-Effective:</strong> Low solvent consumption and minimal instrumentation requirements compared to HPLC/GC.</li>
        <li><strong>Sample Tolerance:</strong> TLC plates are disposable, allowing the analysis of crude or "dirty" samples that might irreversibly damage HPLC columns.</li>
        <li><strong>Versatility:</strong> Applicable to almost all classes of compounds (volatile, non-volatile, polar, non-polar).</li>
      </ul>
      
      <h4>Limitations</h4>
      <ul>
        <li><strong>Limited Resolution:</strong> Lower number of theoretical plates compared to HPLC, making separation of very similar isomers difficult.</li>
        <li><strong>Reproducibility:</strong> Rf values can vary with environmental conditions (humidity/temperature), necessitating simultaneous standard runs.</li>
        <li><strong>Quantitation:</strong> Traditional TLC is semi-quantitative. Accurate quantitation requires scanning densitometry (HPTLC).</li>
        <li><strong>Automation:</strong> Standard TLC is manual and labor-intensive compared to automated chromatography systems.</li>
      </ul>`
    },
    advancedTechniques: {
      title: "Advanced Technique: HPTLC",
      content: `<h4>High-Performance Thin Layer Chromatography (HPTLC)</h4>
      <p>HPTLC represents the instrumentalization of conventional TLC, offering superior resolution, reproducibility, and quantification capabilities.</p>
      
      <ul>
        <li><strong>Stationary Phase:</strong> Uses plates coated with optimized, smaller particles (5-6 μm vs 10-12 μm in TLC) with narrower size distribution, providing sharper bands and higher efficiency.</li>
        <li><strong>Automated Application:</strong> Samples are sprayed as bands rather than spots using automated applicators, improving resolution and quantitation.</li>
        <li><strong>Densitometry:</strong> Plates are scanned using a densitometer (photometer) at specific wavelengths to generate chromatograms (peaks), allowing for precise quantification (picogram levels).</li>
        <li><strong>Hyphenation:</strong> HPTLC-MS interfaces allow direct mass spectrometric analysis of bands directly from the plate, combining separation power with structural identification.</li>
      </ul>`
    }
  }
};
