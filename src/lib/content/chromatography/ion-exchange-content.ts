export const ionExchangeContent = {
  hi: {
    mainTitle: "Ion Exchange Chromatography",
    description:
      "Ion Exchange Chromatography ke advanced scientific principles, resin chemistry, aur detailed applications.",
    introduction: {
      title: "Ion Exchange Chromatography ka Detailed Introduction",
      content: `<p>Ion Exchange Chromatography (IEC) ek powerful separation technique hai jo charged molecules, jaise inorganic ions, amino acids, peptides, proteins, nucleotides aur kuch polysaccharides ko separate, purify aur concentrate karne ke liye use hoti hai. Ye technique liquid chromatography ka part hai jahan separation analyte ke net charge aur resin par present opposite charged functional groups ke electrostatic interactions par based hota hai.</p>
      
      <p>Biochemistry, biotechnology, pharmaceutical analysis, food technology, aur water treatment mein IEC extensively use hoti hai. Proteins ke case mein, ye technique unke isoelectric point (pI), surface charge distribution, aur local microenvironment ke basis par subtle differences ko exploit karke high-resolution separation provide karti hai. Dairy aur food industry mein, IEC ka use whey proteins purification, casein fractionation, lactose-free products banane (lactose removal), mineral content adjustment, aur anions/cations (Ca<sup>2+</sup>, Mg<sup>2+</sup>, phosphate, citrate) control ke liye kiya jata hai.</p>
      
      <p>IEC ka major advantage ye hai ki ye gentle, aqueous environment mein operate karti hai, jisse sensitive biomolecules jaise enzymes, antibodies, aur structural proteins ka native conformation preserve rehta hai. Is technique ki selectivity easily tune ki ja sakti hai buffer pH, ionic strength, temperature aur gradient profile ko adjust karke, jisse same column par multiple different separations achieve kiye ja sakte hain.</p>`
    },
    principle: {
      title: "Ion Exchange Chromatography ka Scientific Siddhant",
      content: `<p>Ion Exchange Chromatography ka fundamental principle electrostatic interaction par based hai jo oppositely charged species ke beech hoti hai. Stationary phase ek insoluble, cross-linked polymeric matrix hota hai (zyada tar polystyrene ya agarose/Sepharose base) jispar covalently attached charged functional groups present hote hain. Ye functional groups permanently charged rehte hain, jabki unke saath associated counter-ions mobile aur exchangeable hote hain.</p>
      
      <p>Do main types hote hain:</p>
      <ul>
        <li><strong>Cation Exchangers:</strong> In par fixed negative charges hote hain (jaise sulfonic acid –SO<sub>3</sub><sup>-</sup> ya carboxymethyl –CH<sub>2</sub>COO<sup>-</sup>), jo positively charged analytes (cations, jaise Na<sup>+</sup>, Ca<sup>2+</sup>, basic amino acids, positively charged proteins) ko attract karte hain. Cation exchanger par bound initial counter-ion (e.g., Na<sup>+</sup>, H<sup>+</sup>) analyte ke cation ke saath exchange ho jata hai.</li>
        <li><strong>Anion Exchangers:</strong> In par fixed positive charges hote hain (jaise quaternary ammonium –N<sup>+</sup>(CH<sub>3</sub>)<sub>3</sub>, diethylaminoethyl –CH<sub>2</sub>CH<sub>2</sub>NH(CH<sub>2</sub>CH<sub>3</sub>)), jo negatively charged analytes (anions, jaise Cl<sup>-</sup>, phosphate, acidic proteins, nucleotides) ko bind karte hain. Bound counter-ions (Cl<sup>-</sup>, OH<sup>-</sup>) analyte anion ke saath exchange hote hain.</li>
      </ul>
      
      <p>Equilibrium ko conceptual form mein likh sakte hain (cation exchanger ke example se):</p>
      <p>R–SO<sub>3</sub><sup>-</sup>–Na<sup>+</sup> + M<sup>2+</sup> ⇌ (R–SO<sub>3</sub><sup>-</sup>)<sub>2</sub>M + 2 Na<sup>+</sup></p>
      <p>yahan R resin backbone ko represent karta hai, Na<sup>+</sup> initial counter-ion hai aur M<sup>2+</sup> analyte cation hai. Separation isi equilibrium ke different analytes ke liye different affinity (association constant) par dependent hoti hai.</p>
      
      <p>Charged biomolecules, specially proteins, ka net charge buffer pH ke relative unke isoelectric point (pI) se determine hota hai:</p>
      <ul>
        <li>Agar pH &lt; pI → protein net positively charged (cationic) hota hai → cation exchanger par bind karega.</li>
        <li>Agar pH &gt; pI → protein net negatively charged (anionic) hota hai → anion exchanger par bind karega.</li>
        <li>Agar pH ≈ pI → net charge near zero, binding weak ya negligible, protein column se flow-through mein nikal sakta hai.</li>
      </ul>
      
      <p>Ion exchange column mein initially resin buffer ke saath equilibrate hota hai jisme ek particular counter-ion concentration aur pH defined hota hai. Jab sample load kiya jata hai, oppositely charged analyte molecules stationary phase par adsorb ho jate hain, jabki unbound ya weakly bound species wash phase mein elute ho jati hain. Elution controlled way se ki jaati hai zyada ionic strength (e.g., NaCl gradient) ya pH change karke.</p>
      
      <p><strong>Salt Gradient Elution:</strong> Jab gradually NaCl concentration increase ki jati hai, tab Na<sup>+</sup> (cation exchanger ke case mein) ya Cl<sup>-</sup> (anion exchanger ke case mein) analyte ke saath competition karte hain binding sites ke liye. Jo analytes weakly bound hote hain, wo low salt concentration par hi displaced ho ke pehle elute hote hain, jabki strongly bound analytes higher salt concentration par elute hote hain. Is tarah, binding strength ke difference ke basis par separation achieve hota hai.</p>
      
      <p><strong>pH Gradient Elution:</strong> Agar buffer pH change kiya jaye to analyte ke ionization state change hoti hai. Jaise–jaise pH analyte ke pI ke kareeb aata hai, net charge decrease hota hai, binding weaken hoti hai aur molecule column se desorb ho kar elute ho jata hai. Proteins ke high-resolution separation ke liye pH gradient (e.g., pH 4–8) ka use bahut effective hota hai.</p>
      
      <p>Ion exchange process ko thermodynamically describe kiya ja sakta hai distribution coefficient (K<sub>d</sub>) ke through, jo stationary phase aur mobile phase ke beech analyte concentration ka ratio hai. Higher K<sub>d</sub> → stronger binding → longer retention time. Chromatographic resolution pe depend karta hai: (1) analytes ke charge difference, (2) resin capacity aur functional group density, (3) buffer pH aur ionic strength, (4) gradient slope, (5) temperature.</p>`
    },
    resinTypes: {
      title: "Resin Types, Functional Groups, aur Capacity",
      content: `<p>Ion exchange resins chemically engineered matrices hote hain jo mechanical stability, chemical resistance, aur defined charge density provide karte hain. Basic categories:</p>
      
      <h4>1. Strong vs Weak Ion Exchangers</h4>
      <ul>
        <li><strong>Strong Cation Exchangers (SCX):</strong> Sulfonic acid groups (–SO<sub>3</sub>H) permanently ionized rehte hain wide pH range (pH 1–14) par. Inka charge pH se independent hota hai, isliye binding behavior mainly analyte charge par dependent hota hai. Example: S Sepharose (agarose-based), Sulfonated polystyrene resins.</li>
        <li><strong>Weak Cation Exchangers (WCX):</strong> Carboxymethyl (–CH<sub>2</sub>COO<sup>-</sup>) functional groups use karte hain, jo pH dependent ionization dikhate hain (pH 4–9 effective range). Lower pH par protonated ho kar neutral ho sakte hain, jisse binding capacity kam ho jati hai. Inka use subtle selectivity tuning ke liye kiya jata hai.</li>
        <li><strong>Strong Anion Exchangers (SAX):</strong> Quaternary ammonium groups (–N<sup>+</sup>(CH<sub>3</sub>)<sub>3</sub>) permanently positively charged rehte hain pH 2–12 tak. Ye strongly negatively charged analytes (DNA, RNA, sulfate, phosphate) ko bind karte hain.</li>
        <li><strong>Weak Anion Exchangers (WAX):</strong> Diethylaminoethyl (DEAE) jaise groups, jinka charge pH dependent hota hai (protonated form positive, deprotonated neutral). Ye mild conditions mein gentle separation allow karte hain, especially labile proteins ke liye.</li>
      </ul>
      
      <h4>2. Matrix Materials</h4>
      <ul>
        <li><strong>Agarose/Sepharose-based resins:</strong> Hydrophilic, biocompatible, low non-specific hydrophobic binding, proteins ke liye ideal. Typical bead size 30–90 μm, mechanical stability medium, pressure limit low–medium (suitable for gravity, low-pressure, FPLC systems).</li>
        <li><strong>Polystyrene–divinylbenzene (PS–DVB):</strong> High mechanical strength, high capacity, but comparatively hydrophobic. Inorganic ions, small molecules, water treatment ke liye common. Bead size 5–15 μm (HPLC grade) ya 50–100 μm (process grade).</li>
        <li><strong>Cellulose-based resins:</strong> Early generation bioseparation media, hydrophilic, low pressure capability, delicate but mild separation environment.</li>
      </ul>
      
      <h4>3. Capacity, Porosity, aur Particle Size</h4>
      <p><strong>Exchange Capacity:</strong> Resin per unit volume ya mass par available sites ka measure hota hai, typically meq/mL (milliequivalents per mL) ya μmol/mL. Bioseparation resins ke liye usually 50–200 μmol/mL protein binding capacity. Higher capacity → zyada sample load, lekin agar bahut zyada ho to non-specific interactions aur peak broadening bhi increase ho sakta hai.</p>
      
      <p><strong>Porosity:</strong> Proteins ke efficient diffusion ke liye pores ka size important hai. Agar pores chhote hain, bade proteins (e.g., IgG, enzymes) interior tak diffuse nahi kar pate, apparent capacity drop ho jata hai. Typical pore sizes 30–100 nm (300–1000 Å) for protein chromatography.</p>
      
      <p><strong>Particle Size:</strong> Smaller beads (5–20 μm) higher efficiency (sharper peaks) provide karte hain kyunki diffusion distance kam hota hai, lekin pressure drop zyada hota hai (Darcy's law ke accordance mein). Process-scale columns mein usually 30–90 μm beads use hote hain jisse moderate pressure at acceptable flow rates milta hai.</p>`
    },
    mechanismSteps: {
      title: "Ion Exchange Process ke Operational Steps",
      content: `<p>Typical IEC run kuch standard steps follow karta hai:</p>
      <ol>
        <li><strong>Column Equilibration:</strong> Column ko starting buffer (defined pH aur ionic strength) ke saath flush kiya jata hai jab tak baseline stable na ho jaye. Is stage par resin ka counter-ion form set hota hai (e.g., Na<sup>+</sup> form for cation exchanger, Cl<sup>-</sup> form for anion exchanger).</li>
        <li><strong>Sample Application (Loading):</strong> Sample ko usually low ionic strength buffer mein adjust kiya jata hai jiska pH aisa ho ke target analyte net charged ho aur resin ke opposite sign ka ho. Flow rate moderate rakha jata hai jisse analytes ko resin ke saath maximum contact time mile aur binding efficient ho.</li>
        <li><strong>Wash Step:</strong> Same buffer se column wash kiya jata hai taaki unbound ya weakly bound impurities remove ho jayein. Is stage par target analyte still column par bound rehta hai.</li>
        <li><strong>Elution:</strong> Controlled way se ya to salt concentration (ionic strength) increase kiya jata hai (linear ya step gradient), ya pH change kiya jata hai. Elution peaks detector (UV at 214, 254, 280 nm; conductivity; fluorescence) se monitor kiye jate hain. Jo species weakly bound hoti hain, wo jaldi elute hoti hain; strongly bound species later peaks mein aati hain.</li>
        <li><strong>Strip aur Regeneration:</strong> Strong eluent (high salt, extreme pH) se remaining strongly bound contaminants ko strip kiya jata hai. Uske baad column ko starting conditions par regenerate aur re-equilibrate kiya jata hai next run ke liye.</li>
        <li><strong>Storage:</strong> Microbial growth rokne ke liye 20% ethanol, sodium azide, ya specialized storage buffer use kiya jata hai jab column long-term ke liye store karna ho.</li>
      </ol>`
    },
    selectivityControl: {
      title: "Selectivity aur Resolution ka Control",
      content: `<p>Ion Exchange Chromatography mein selectivity aur resolution tune karne ke liye kuch powerful knobs hote hain:</p>
      
      <ul>
        <li><strong>pH Control:</strong> pH analyte ke ionizable groups (carboxyl, amino, imidazole, guanidinium, phosphate) ke protonation–deprotonation ko control karta hai. Proteins ke liye, small pH shift (0.2–0.5 unit) bhi net charge mein noticeable change produce kar sakti hai, jis se binding strength significantly alter ho sakti hai. pH gradients fine selectivity adjustments ke liye bahut sensitive tool hain.</li>
        
        <li><strong>Ionic Strength:</strong> Buffer salt concentration (typically NaCl ya KCl) electrostatic interactions screen karta hai. Low salt → strong binding, high salt → weak binding (shielding effect). Gradient shallow rakha jaye (slow increase in salt) to resolution high milega, lekin run time lamba hoga; steep gradient se run fast ho jata hai but peaks compressed aur resolution kam ho sakti hai.</li>
        
        <li><strong>Temperature:</strong> Diffusion, viscosity, aur analyte conformation ko affect karta hai. Most protein IEC 4–25°C par chalaaya jata hai taa ki denaturation avoid ho, lekin small temperature changes bhi selectivity alter kar sakte hain.</li>
        
        <li><strong>Flow Rate:</strong> Lower flow rates equilibrium ko better approach karne ka time dete hain, retention aur resolution improve hoti hai. High flow rates throughput increase karte hain but mass transfer limitations ki wajah se peaks broaden ho sakte hain.</li>
        
        <li><strong>Gradient Shape:</strong> Linear gradients common hain, lekin convex/concave gradients fine-tuning ke liye use kiye jate hain; e.g., critical region jahan multiple peaks closely elute ho rahe hain wahan shallow gradient use karna, baki region mein steep.</li>
      </ul>`
    },
    applications: {
      title: "Ion Exchange Chromatography ke Applications",
      content: `<p>Ion Exchange Chromatography ka use kai advanced applications mein hota hai:</p>
      <ul>
        <li><strong>Protein Purification:</strong> Recombinant enzymes, monoclonal antibodies, serum proteins, plasma fractions, whey proteins (β-lactoglobulin, α-lactalbumin, immunoglobulins) ki purification. IEC ko aksar first capture step ke roop mein use kiya jata hai kyunki binding capacity high hoti hai.</li>
        
        <li><strong>Charge Variant Analysis:</strong> Biopharmaceuticals (e.g., therapeutic antibodies) ke charge variants (deamidation, C-terminal lysine clipping, oxidation) ko IEC separate karke product heterogeneity characterize ki jaati hai.</li>
        
        <li><strong>Amino Acid Analysis:</strong> Derivatization ke saath ya post-column detection methods (ninhydrin, OPA) use karke amino acids separation.</li>
        
        <li><strong>Nucleic Acid Purification:</strong> RNA/DNA fragment cleanup, oligonucleotide purification, plasmid DNA desalting, anion exchange columns par.</li>
        
        <li><strong>Water softening aur Demineralization:</strong> Ca<sup>2+</sup>, Mg<sup>2+</sup> removing from hard water using cation exchange resins, nitrate/sulfate/phosphate removing with anion exchange. Food-grade resins sugar industry, beverage production, aur dairy mineral adjustment mein use hote hain.</li>
        
        <li><strong>Dairy/Food Applications:</strong> Whey demineralization (infant formula production), lactose removal via anion exchange, milk protein fractionation, bitter peptides remove karna, cheese brine purification.</li>
      </ul>`
    },
    advantagesLimitations: {
      title: "Advantages, Limitations aur Practical Points",
      content: `<h4>Advantages</h4>
      <ul>
        <li>High selectivity based on charge differences, even closely related proteins separate ho sakte hain.</li>
        <li>High capacity – large sample loads handle kar sakta hai, scale-up friendly (lab se industrial columns tak).</li>
        <li>Aqueous, mild conditions – sensitive biomolecules ke liye suitable (native structure preserved).</li>
        <li>Gradient control ke through separation behavior finely tune kiya ja sakta hai.</li>
        <li>Re-usable columns – proper cleaning/regeneration se hundreds runs possible.</li>
      </ul>
      
      <h4>Limitations</h4>
      <ul>
        <li>Analyte ko charged hona zaroori hai at working pH; strongly hydrophobic neutral molecules ke liye suitable nahi.</li>
        <li>Buffer optimization time-consuming ho sakta hai (pH, salt, gradient development).</li>
        <li>High salt elution solutions ko aage ke steps (e.g., SEC, activity assays) se pehle desalting ki zaroorat hoti hai.</li>
        <li>Fouling risk – complex biological samples (cell lysates, raw whey) resin ko clog ya foul kar sakte hain agar proper pre-clarification na ki jaye.</li>
      </ul>`
    }
  },

  en: {
    mainTitle: "Ion Exchange Chromatography",
    description:
      "Advanced scientific principles, resin chemistry, and detailed applications of Ion Exchange Chromatography.",
    introduction: {
      title: "Detailed Introduction to Ion Exchange Chromatography",
      content: `<p>Ion Exchange Chromatography (IEC) is a powerful separation technique used to separate, purify, and concentrate charged molecules such as inorganic ions, amino acids, peptides, proteins, nucleotides, and some polysaccharides. It is a type of liquid chromatography in which separation is governed by electrostatic interactions between charged analytes and oppositely charged functional groups attached to a solid matrix.</p>
      
      <p>IEC is widely used in biochemistry, biotechnology, pharmaceutical analysis, food technology, and water treatment. For proteins, it exploits subtle differences in isoelectric point (pI), surface charge distribution, and local microenvironment to achieve high-resolution separation. In the dairy and food industries, IEC is used for whey protein purification, casein fractionation, lactose removal, mineral adjustment, and control of ions such as Ca<sup>2+</sup>, Mg<sup>2+</sup>, phosphate, and citrate.</p>
      
      <p>The major advantage of IEC is that it operates in gentle, aqueous conditions, preserving the native conformation and activity of sensitive biomolecules such as enzymes, antibodies, and structural proteins. Its selectivity can be tuned by adjusting buffer pH, ionic strength, temperature, and gradient shape, allowing multiple different separations on the same column.</p>`
    },
    principle: {
      title: "Scientific Principle of Ion Exchange Chromatography",
      content: `<p>The fundamental principle of Ion Exchange Chromatography is electrostatic attraction between oppositely charged species. The stationary phase is an insoluble, cross-linked polymer matrix (typically polystyrene or agarose/Sepharose) bearing covalently attached ionizable functional groups that carry a permanent charge. These fixed charges are balanced by mobile counter-ions, which can be exchanged by sample ions of the same sign.</p>
      
      <p>Main types:</p>
      <ul>
        <li><strong>Cation Exchangers:</strong> Carry fixed negative charges (e.g., sulfonic acid –SO<sub>3</sub><sup>-</sup> or carboxymethyl –CH<sub>2</sub>COO<sup>-</sup>) and bind positively charged analytes such as metal cations, basic amino acids, and positively charged proteins. Counter-ions like Na<sup>+</sup> or H<sup>+</sup> are displaced by analyte cations.</li>
        <li><strong>Anion Exchangers:</strong> Carry fixed positive charges (e.g., quaternary ammonium –N<sup>+</sup>(CH<sub>3</sub>)<sub>3</sub>, diethylaminoethyl groups) and bind negatively charged analytes such as chloride, phosphate, acidic proteins, and nucleotides. Counter-ions like Cl<sup>-</sup> or OH<sup>-</sup> are displaced by analyte anions.</li>
      </ul>
      
      <p>For a cation exchanger, the equilibrium can be written as:</p>
      <p>R–SO<sub>3</sub><sup>-</sup>–Na<sup>+</sup> + M<sup>2+</sup> ⇌ (R–SO<sub>3</sub><sup>-</sup>)<sub>2</sub>M + 2 Na<sup>+</sup></p>
      
      <p>The net charge of proteins depends on buffer pH relative to their isoelectric point (pI):</p>
      <ul>
        <li>If pH &lt; pI → protein is net positively charged and binds to cation exchangers.</li>
        <li>If pH &gt; pI → protein is net negatively charged and binds to anion exchangers.</li>
        <li>If pH ≈ pI → net charge is close to zero, and binding is weak or absent.</li>
      </ul>
      
      <p>Columns are first equilibrated with a buffer of defined pH and ionic strength. When the sample is applied, oppositely charged analytes bind to the stationary phase, whereas uncharged or similarly charged species flow through. Elution is then controlled either by increasing ionic strength (salt gradient) or by changing pH.</p>
      
      <p><strong>Salt Gradient Elution:</strong> Gradual increase in salt concentration (e.g., NaCl) introduces competing ions (Na<sup>+</sup> on cation exchangers, Cl<sup>-</sup> on anion exchangers) that displace bound analytes. Weakly bound analytes elute at low salt; strongly bound ones elute at higher salt concentrations, providing separation based on binding strength.</p>
      
      <p><strong>pH Gradient Elution:</strong> Changing the buffer pH alters analyte ionization and net charge. As pH approaches a protein’s pI, its net charge decreases, binding weakens, and the protein elutes. Carefully designed pH gradients are particularly powerful for resolving protein isoforms and charge variants.</p>`
    },
    resinTypes: {
      title: "Resin Types, Functional Groups, and Capacity",
      content: `<p>Ion exchange resins are chemically engineered matrices designed for mechanical stability, chemical resistance, and defined charge density.</p>
      
      <h4>1. Strong vs Weak Ion Exchangers</h4>
      <ul>
        <li><strong>Strong Cation Exchangers (SCX):</strong> Sulfonic acid groups (–SO<sub>3</sub>H) that remain ionized across a wide pH range (1–14). Binding is largely independent of pH and depends mainly on analyte charge.</li>
        <li><strong>Weak Cation Exchangers (WCX):</strong> Carboxymethyl groups (–CH<sub>2</sub>COO<sup>-</sup>) showing pH-dependent ionization (effective pH 4–9). They allow fine-tuning of selectivity by pH adjustment.</li>
        <li><strong>Strong Anion Exchangers (SAX):</strong> Quaternary ammonium groups that carry a permanent positive charge (pH 2–12). Used for strong acid analytes, nucleic acids, and mineral anions.</li>
        <li><strong>Weak Anion Exchangers (WAX):</strong> Diethylaminoethyl-type groups with pH-dependent charge; suitable for gentle separations and labile proteins.</li>
      </ul>
      
      <h4>2. Matrix Materials</h4>
      <ul>
        <li><strong>Agarose-based resins:</strong> Hydrophilic, biocompatible, low non-specific binding, ideal for protein purification and FPLC systems.</li>
        <li><strong>Polystyrene–DVB resins:</strong> Mechanically strong, high capacity, more hydrophobic; used for inorganic ion exchange and process water treatment.</li>
        <li><strong>Cellulose-based resins:</strong> Older but mild media for lab-scale protein separations.</li>
      </ul>
      
      <h4>3. Capacity, Porosity, and Particle Size</h4>
      <p><strong>Exchange Capacity:</strong> The amount of exchangeable groups per mL or per gram of resin, typically expressed in μmol/mL or meq/mL. Higher capacity increases sample loading but may increase non-specific interactions if too high.</p>
      
      <p><strong>Porosity:</strong> Pore size distribution determines accessibility for different molecular sizes. Proteins require sufficiently large pores (300–1000 Å) for efficient diffusion and full utilization of internal surface area.</p>
      
      <p><strong>Particle Size:</strong> Smaller particles (5–20 μm) provide higher efficiency and sharper peaks but at higher backpressure. Larger particles (30–90 μm) are used for preparative and industrial scales to allow higher flow rates at moderate pressure.</p>`
    },
    mechanismSteps: {
      title: "Operational Steps in Ion Exchange Chromatography",
      content: `<p>A typical IEC run follows these steps:</p>
      <ol>
        <li><strong>Column Equilibration:</strong> Equilibrate with starting buffer until a stable baseline is achieved and the resin is in the desired counter-ion form.</li>
        <li><strong>Sample Loading:</strong> Apply sample in low ionic strength buffer at a pH where the target analyte is charged and able to bind. Use moderate flow rates to maximize interaction.</li>
        <li><strong>Column Washing:</strong> Wash with starting buffer to remove unbound and weakly bound impurities while retaining the target analyte on the column.</li>
        <li><strong>Elution:</strong> Elute bound analytes by increasing salt concentration (salt gradient or step elution) or by altering pH. Monitor elution with UV, conductivity, or other detectors.</li>
        <li><strong>Stripping and Regeneration:</strong> Use high salt or extreme pH to remove strongly bound contaminants, then re-equilibrate the column with starting buffer.</li>
        <li><strong>Storage:</strong> Store the column in a preservative solution (e.g., 20% ethanol) to prevent microbial growth.</li>
      </ol>`
    },
    selectivityControl: {
      title: "Control of Selectivity and Resolution",
      content: `<p>Selectivity and resolution can be tuned using several key parameters:</p>
      <ul>
        <li><strong>pH:</strong> Governs ionization of analyte functional groups and thus net charge. Small pH adjustments can significantly alter binding strength and separation behavior.</li>
        <li><strong>Ionic Strength:</strong> Salt concentration screens electrostatic interactions. Low salt favors binding; high salt promotes elution. Gradient steepness influences resolution versus run time.</li>
        <li><strong>Temperature:</strong> Affects viscosity, diffusion, and sometimes analyte conformation. Most protein separations are run at 4–25°C.</li>
        <li><strong>Flow Rate:</strong> Lower flow rates enhance equilibration and resolution but reduce throughput. Higher flow rates speed up runs at the cost of some efficiency.</li>
        <li><strong>Gradient Shape:</strong> Linear, convex, or concave gradients can be chosen to optimize resolution in critical regions of the chromatogram.</li>
      </ul>`
    },
    applications: {
      title: "Applications of Ion Exchange Chromatography",
      content: `<p>Ion Exchange Chromatography is used in many fields:</p>
      <ul>
        <li><strong>Protein Purification:</strong> Capture and polishing of enzymes, antibodies, plasma proteins, and whey proteins.</li>
        <li><strong>Charge Variant Analysis:</strong> Characterization of therapeutic proteins and antibodies by resolving charge variants.</li>
        <li><strong>Amino Acid Analysis:</strong> Separation of amino acids with appropriate derivatization and detection methods.</li>
        <li><strong>Nucleic Acid Separation:</strong> Purification of DNA, RNA, and oligonucleotides using anion exchange resins.</li>
        <li><strong>Water Treatment:</strong> Softening and demineralization by removal of cations and anions.</li>
        <li><strong>Food and Dairy:</strong> Demineralization of whey, protein fractionation, lactose removal, and mineral adjustment in formulations.</li>
      </ul>`
    },
    advantagesLimitations: {
      title: "Advantages and Limitations",
      content: `<h4>Advantages</h4>
      <ul>
        <li>High selectivity based on charge differences.</li>
        <li>High capacity and scalability from lab to industrial processes.</li>
        <li>Mild aqueous conditions compatible with sensitive biomolecules.</li>
        <li>Fine control of separation via pH and salt gradients.</li>
        <li>Reusable columns with proper cleaning and regeneration.</li>
      </ul>
      
      <h4>Limitations</h4>
      <ul>
        <li>Requires analytes to be ionizable and charged at working pH.</li>
        <li>Method development may be time-consuming due to pH and gradient optimization.</li>
        <li>High-salt eluates often require desalting before downstream applications.</li>
        <li>Fouling and clogging risks with complex or particulate-rich samples.</li>
      </ul>`
    }
  }
};
