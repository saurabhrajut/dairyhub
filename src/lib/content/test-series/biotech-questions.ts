import { Question } from "./types";

export const ALL_BIOTECH_QUESTIONS: Omit<Question, "id">[] = [
  // SET 1: Recombinant DNA & Genetic Engineering
  {
    question: "Which type of restriction endonuclease cleaves DNA at specific palindromic recognition sequences without requiring ATP?",
    options: ["Type I", "Type II", "Type III", "Type IV"],
    correctAnswer: 1,
    explanation: "Type II restriction endonucleases cleave phosphodiester bonds at or near specific palindromic recognition sequences, requiring only Mg2+ as cofactor.",
    category: "Recombinant DNA"
  },
  {
    question: "What selectable marker genes are present on pBR322 cloning vector for antibiotic selection?",
    options: ["Ampicillin resistant (ampR) and Tetracycline resistant (tetR)", "KanR and LacZ", "NeoR and GFP", "PuromycinR"],
    correctAnswer: 0,
    explanation: "pBR322 carries ampR (beta-lactamase) and tetR genes, enabling insertional inactivation cloning.",
    category: "Cloning Vectors"
  },
  {
    question: "In blue-white screening using pUC19 vector, what causes white colonies to form on X-gal + IPTG agar plates?",
    options: [
      "Insertional inactivation of the lacZ alpha-peptide gene fragment",
      "Functional beta-galactosidase expression",
      "Ampicillin hydrolysis",
      "Lysis of bacterial cells"
    ],
    correctAnswer: 0,
    explanation: "Foreign DNA insertion into the Multiple Cloning Site (MCS) disrupts lacZ alpha-peptide coding sequence, preventing alpha-complementation. Cells remain white.",
    category: "Molecular Screening"
  },
  {
    question: "Which bacterial species is naturally capable of transferring T-DNA from its Ti plasmid into plant genomes?",
    options: ["Agrobacterium tumefaciens", "Escherichia coli", "Bacillus thuringiensis", "Pseudomonas syringae"],
    correctAnswer: 0,
    explanation: "Agrobacterium tumefaciens transfers T-DNA bounded by 25-bp direct border repeats into plant nuclear genomes via Vir protein machinery.",
    category: "Plant Biotech"
  },
  {
    question: "In Polymerase Chain Reaction (PCR), what is the formula used to estimate primer Melting Temperature (Tm)?",
    options: [
      "Tm = 2(A + T) + 4(G + C)",
      "Tm = 4(A + T) + 2(G + C)",
      "Tm = (A + T + G + C) / 4",
      "Tm = 65°C constant"
    ],
    correctAnswer: 0,
    explanation: "Wallace rule estimates primer melting temperature: Tm = 2°C × (Count of A + T) + 4°C × (Count of G + C).",
    category: "PCR Technology"
  },
  {
    question: "Which enzyme synthesizes complementary DNA (cDNA) from an mRNA template using an oligo(dT) primer?",
    options: ["DNA Polymerase I", "Reverse Transcriptase (RNA-dependent DNA Polymerase)", "Taq Polymerase", "RNA Polymerase II"],
    correctAnswer: 1,
    explanation: "Reverse transcriptase transcribes single-stranded mRNA into cDNA by binding to the poly-A tail via an oligo(dT) primer.",
    category: "Enzymology"
  },

  // SET 2: Bioprocess Engineering & Kinetics
  {
    question: "In a stirred tank bioreactor (STR), what is the typical ratio of liquid height (H) to tank diameter (D)?",
    options: ["0.5 : 1", "2 : 1 to 3 : 1", "10 : 1", "0.1 : 1"],
    correctAnswer: 1,
    explanation: "Industrial STRs maintain an aspect ratio (H/D) of 2:1 to 3:1 for optimal gas hold-up and power dissipation.",
    category: "Bioreactor Design"
  },
  {
    question: "What impeller type provides high radial shear stress ideal for gas dispersion in microbial fermenters?",
    options: ["6-flat blade Rushton turbine", "Marine propeller", "Anchor impeller", "Helical ribbon"],
    correctAnswer: 0,
    explanation: "Rushton turbine generates radial flow and high shear, breaking sparged gas bubbles into small bubbles for high interfacial area.",
    category: "Fermentation Eng"
  },
  {
    question: "In Monod microbial growth kinetics, what does the saturation constant (Ks) represent?",
    options: [
      "Substrate concentration at which specific growth rate (µ) is equal to half of maximum growth rate (µmax / 2)",
      "Maximum specific growth rate",
      "Cell yield coefficient",
      "Maintenance coefficient"
    ],
    correctAnswer: 0,
    explanation: "Ks (g/L or mg/L) measures substrate affinity; lower Ks indicates higher enzyme/cell affinity for substrate.",
    category: "Bioprocess Kinetics"
  },
  {
    question: "In a Chemostat continuous culture operating at steady state, the specific growth rate (µ) is equal to:",
    options: ["Dilution Rate (D)", "Maximum growth rate (µmax)", "Zero", "Double the feed rate"],
    correctAnswer: 0,
    explanation: "At steady state in a chemostat, cell growth equals cell loss in effluent, so µ = D (where D = Feed Flow rate F / Working Volume V).",
    category: "Continuous Culture"
  },
  {
    question: "What phenomenon occurs in a Chemostat when Dilution Rate (D) exceeds the maximum specific growth rate (µmax)?",
    options: ["Washout", "Substrate inhibition", "Exponential accumulation", "Stationary phase"],
    correctAnswer: 0,
    explanation: "When D > µmax, cells are pumped out faster than they can divide, resulting in complete depletion of biomass (Washout).",
    category: "Bioprocess Control"
  },
  {
    question: "In thermal sterilization of fermentation media, what parameter quantifies the overall logarithmic cell kill (Del factor, ∇)?",
    options: ["∇ = ln(N0 / Nt)", "∇ = D × t", "∇ = µmax × S", "∇ = kLa"],
    correctAnswer: 0,
    explanation: "Del factor ∇ = ln(Initial viable spores N0 / Desired final spores Nt) = integral of k(T) dt over time.",
    category: "Media Sterilization"
  },

  // SET 3: Downstream Processing (DSP) & Separation
  {
    question: "Which high-pressure mechanical cell disruption equipment operates by forcing cell suspension through a narrow valve orifice at 50-150 MPa?",
    options: ["High-Pressure Homogenizer (Manton-Gaulin)", "Bead Mill", "Ultrasonic probe", "Lyophilizer"],
    correctAnswer: 0,
    explanation: "High-pressure homogenizers disrupt microbial cells via extreme shear, impact against impact ring, and sudden pressure drop cavitation.",
    category: "Cell Disruption"
  },
  {
    question: "What parameter measures the equivalent settling area of a centrifuge relative to a gravity settling basin?",
    options: ["Sigma Factor (Σ)", "G-force", "Reynolds number", "Schmidt number"],
    correctAnswer: 0,
    explanation: "Sigma factor Σ = (ω² V) / (g ln(r2/r1)), representing theoretical settling area of a centrifuge for scale-up.",
    category: "Centrifugation"
  },
  {
    question: "In Ultrafiltration membrane separation, what does MWCO stand for?",
    options: ["Molecular Weight Cut-Off", "Maximum Water Concentration Output", "Membrane Wash Cycle Operation", "Mass Weight Coefficient"],
    correctAnswer: 0,
    explanation: "MWCO specifies the solute molecular weight (in Daltons) at which 90% of the solute is retained by the membrane.",
    category: "Membrane Filtration"
  },
  {
    question: "Which downstream chromatography separates proteins based on reversible electrostatic interactions with charged stationary matrix?",
    options: ["Ion Exchange Chromatography (IEX)", "Hydrophobic Interaction (HIC)", "Size Exclusion (SEC)", "Affinity Chromatography"],
    correctAnswer: 0,
    explanation: "Anion exchangers (DEAE) bind negatively charged proteins, while Cation exchangers (CM/SP) bind positively charged proteins.",
    category: "Downstream Separation"
  },
  {
    question: "In Hydrophobic Interaction Chromatography (HIC), under what salt concentration conditions do target proteins bind to the matrix?",
    options: [
      "High lyotropic salt concentration (e.g. 1-2 M Ammonium Sulfate)",
      "Zero salt (deionized water)",
      "Acidic pH 2.0 without salt",
      "High urea concentration"
    ],
    correctAnswer: 0,
    explanation: "High salt promotes hydrophobic interactions by ordering water molecules around hydrophobic patches, driving protein binding.",
    category: "Chromatography"
  },
  {
    question: "In His-tagged recombinant protein purification using Ni-NTA agarose affinity chromatography, what molecule is added to elute the bound protein?",
    options: ["Imidazole", "Glucose", "Ampicillin", "EDTA"],
    correctAnswer: 0,
    explanation: "Imidazole competes with the Histidine imidazole rings for coordination sites on nickel ions (Ni2+), eluting the His-tagged protein.",
    category: "Protein Affinity"
  },

  // SET 4: Immunology & Molecular Diagnostics
  {
    question: "In Monoclonal Antibody production via Hybridoma technology (Kohler & Milstein), why is HAT medium used for selection?",
    options: [
      "Aminopterin blocks de novo purine/pyrimidine synthesis; only fused hybridomas with HGPRT gene from B-cells survive via salvage pathway",
      "HAT kills all B-cells instantly",
      "HAT acts as nutrient supplement",
      "HAT induces cell fusion"
    ],
    correctAnswer: 0,
    explanation: "Aminopterin blocks de novo nucleotide synthesis. Myeloma cells (HGPRT-) die. Unfused B-cells die naturally. Only HGPRT+ hybridomas survive.",
    category: "Hybridoma Tech"
  },
  {
    question: "Which ELISA format utilizes a primary capture antibody, sample antigen, and an enzyme-conjugated secondary detection antibody forming a sandwich?",
    options: ["Sandwich ELISA", "Direct ELISA", "Competitive ELISA", "Indirect ELISA"],
    correctAnswer: 0,
    explanation: "Sandwich ELISA binds antigen between two specific antibodies (capture and detection), providing high specificity for complex samples.",
    category: "Immunoassays"
  },
  {
    question: "In Western Blotting, what electrical transfer method moves proteins from SDS-PAGE gel onto PVDF or Nitrocellulose membrane?",
    options: ["Electroblotting (Tank or Semi-dry transfer)", "Capillary transfer", "Gravity flow", "Vacuum drying"],
    correctAnswer: 0,
    explanation: "An electric field perpendicular to the gel drives negatively charged SDS-bound proteins onto the binding membrane.",
    category: "Molecular Blotting"
  },
  {
    question: "In Flow Cytometry (FACS), what parameter correlates with cell size?",
    options: ["Forward Scatter (FSC)", "Side Scatter (SSC)", "Fluorescence Intensity", "Absorbance at 280 nm"],
    correctAnswer: 0,
    explanation: "Forward Scattered light (FSC) diffracted at small angles (0.5 - 5°) is proportional to cell surface area or size.",
    category: "Cell Analysis"
  },
  {
    question: "What biophysical analytical technique measures real-time label-free biomolecular interactions via surface refractive index changes?",
    options: ["Surface Plasmon Resonance (SPR / Biacore)", "NMR Spectroscopy", "X-ray Crystallography", "Mass Spectrometry"],
    correctAnswer: 0,
    explanation: "SPR measures changes in the angle of reflected polarized light caused by mass binding at a sensor chip gold surface.",
    category: "Biophysical Methods"
  },
  {
    question: "What enzyme catalyzes the conversion of Glucose into Gluconic acid and H2O2 in commercial enzymatic blood glucose biosensors?",
    options: ["Glucose Oxidase (GOD)", "Hexokinase", "Glucose-6-Phosphate Dehydrogenase", "Lactate Dehydrogenase"],
    correctAnswer: 0,
    explanation: "Glucose oxidase oxidizes beta-D-glucose, generating hydrogen peroxide which is electrochemically detected at an electrode.",
    category: "Biosensors"
  },

  // SET 5: Grand Biotech Mock & Systems Biology
  {
    question: "In CRISPR-Cas9 genome editing, what short 2-6 bp DNA motif adjacent to the target site is mandatory for Cas9 cleavage?",
    options: ["Protospacer Adjacent Motif (PAM, 5'-NGG-3')", "TATA box", "Shine-Dalgarno sequence", "Poly-A signal"],
    correctAnswer: 0,
    explanation: "Cas9 requires PAM recognition (5'-NGG-3' for SpCas9) to unwind DNA and initiate sgRNA base-pairing.",
    category: "Gene Editing"
  },
  {
    question: "What is the theoretical yield coefficient (Yx/s) of bacterial biomass produced per gram of glucose substrate consumed under aerobic conditions?",
    options: ["0.45 - 0.50 g biomass / g glucose", "1.0 g / g", "0.05 g / g", "2.5 g / g"],
    correctAnswer: 0,
    explanation: "Aerobic microbial growth on glucose typically yields ~0.4-0.5 g cell dry weight per gram glucose consumed.",
    category: "Fermentation Yield"
  },
  {
    question: "Which cDNA library screening method uses radio-labeled antibody probes to bind expressed recombinant proteins?",
    options: ["Immunological Screening (Western/Expression screening)", "Plaque hybridization", "PCR screening", "Restriction digestion"],
    correctAnswer: 0,
    explanation: "Expression vectors (lambda gt11) produce protein products bound by specific antibodies on nitrocellulose filters.",
    category: "Library Screening"
  },
  {
    question: "During Freeze Drying (Lyophilization), at what stage is frozen ice removed directly via Sublimation under deep vacuum?",
    options: ["Primary Drying", "Secondary Drying", "Freezing phase", "Annealing phase"],
    correctAnswer: 0,
    explanation: "Primary drying sublimes ice into water vapor below the triple point (pressure < 611 Pa, temp < 0°C).",
    category: "Lyophilization"
  },
  {
    question: "Which metabolic pathway engineering strategy overexpresses the rate-limiting enzyme to increase flux toward target bioproducts?",
    options: ["Targeted Overexpression / Rate-limiting Step Alleviation", "Gene Knockout", "Antisense RNA", "Feed-batch control"],
    correctAnswer: 0,
    explanation: "Relieving bottleneck enzymes increases metabolic flux through synthetic pathways toward desired metabolites.",
    category: "Metabolic Eng"
  },
  {
    question: "What is the function of DpnI restriction enzyme in site-directed mutagenesis kits (QuikChange)?",
    options: [
      "Selectively digest methylated parental template DNA, leaving unmethylated synthesized mutant plasmid intact",
      "Ligate mutant primers",
      "Amplify plasmid",
      "Denature DNA"
    ],
    correctAnswer: 0,
    explanation: "DpnI specifically cleaves 5'-Gm6ATC-3' methylated target DNA isolated from E. coli, eliminating non-mutated parental plasmid.",
    category: "Mutagenesis"
  }
];
