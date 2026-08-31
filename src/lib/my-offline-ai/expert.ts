// --- GYAN AI (EXPERT) LOGIC (OFFLINE KNOWLEDGE BASE) ---

interface ExpertTopicResponse {
  keywords: string[];
  response: string;
}

const EXPERT_KNOWLEDGE_BASE: ExpertTopicResponse[] = [
  {
    keywords: ["fssai", "food safety", "fostac", "compliance", "license"],
    response: `### 📜 FSSAI & Food Safety Regulations (Offline Knowledge)
    
- **Licensing & Registration:** FSSAI registration is required for petty food businesses (< ₹12 Lakh/yr). State License (₹12L - ₹20Cr) & Central License (> ₹20Cr/yr or export/import).
- **Mandatory Documentation:** Food Safety Management System (FSMS) plan, Water Testing Report (IS 10500), NABL Accredited Lab Reports, and Medical Fitness Certificates for handlers.
- **FoSTaC Certification:** Food Safety Supervisor training is mandatory under FSSAI regulations.
- **Key Inspection Points:** Personal hygiene (hairnets, aprons, boots), pest control records, temperature monitoring logs, and batch traceability records.`
  },
  {
    keywords: ["haccp", "ccp", "hazard", "iso 22000", "fsms", "iso"],
    response: `### 🛡️ HACCP & ISO 22000 FSMS Principles

1. **Hazard Analysis:** Identify Biological (pathogens), Chemical (cleaning agents, adulterants), and Physical (glass, metal) hazards.
2. **Critical Control Points (CCPs):**
   - **CCP-1 (Pasteurization):** HTST at minimum 72°C for 15 seconds (Biological Hazard Control).
   - **CCP-2 (In-line Filter/Metal Detector):** 1mm mesh / Metal Detector before packaging (Physical Hazard Control).
3. **Critical Limits:** Strict parameter bounds (e.g. Temp ≥ 72.0°C, Holding time ≥ 15s).
4. **Monitoring & Corrective Actions:** Automatic Flow Diversion Valve (FDV) returns under-pasteurized milk to balance tank.
5. **Verification & Record Keeping:** Daily thermograph charts, calibration records, and internal FSMS audits.`
  },
  {
    keywords: ["quality control", "qc", "qa", "testing", "adulteration", "fat", "snf", "clr"],
    response: `### 🧪 Quality Control & Testing Guidelines

- **Raw Milk Reception (RMRD) Platform Tests:**
  - **Organoleptic:** Smell, color, appearance.
  - **COB Test (Clot on Boiling):** Detects acidity > 0.20% lactic acid.
  - **Alcohol Test (68-75% Ethanol):** Assesses heat stability before pasteurization.
  - **MBRT (Methylene Blue Reduction Time):** > 4 hours = Good, < 30 mins = Poor quality.
- **Quantitative Chemical Analysis:**
  - **Gerber Fat Method:** 10.75 ml milk + 10 ml H₂SO₄ (sp.gr. 1.82) + 1 ml Amyl Alcohol, centrifugal force at 1100 RPM for 4-5 mins.
  - **CLR & SNF Calculation:** SNF = (CLR / 4) + 0.2 × Fat + 0.36.
- **Adulteration Detection:**
  - **Starch:** Iodine solution ➔ Blue color.
  - **Urea:** DMAB reagent ➔ Bright yellow color.
  - **Detergent:** Methylene blue + Chloroform test.`
  },
  {
    keywords: ["pasteurization", "htst", "ltlt", "uht", "homogenizer", "separator", "processing"],
    response: `### 🏭 Milk Processing & Engineering Parameters

- **Pasteurization Standards:**
  - **LTLT (Batch):** 63°C for 30 minutes.
  - **HTST (Continuous):** 72°C - 75°C for 15 - 20 seconds (Phosphatase Negative).
  - **UHT (Ultra High Temp):** 135°C - 145°C for 1 - 4 seconds (Aseptic packaging).
- **Homogenization:**
  - **1st Stage Pressure:** 1500 - 2000 PSI (Breaks fat globules to < 2 microns).
  - **2nd Stage Pressure:** 500 PSI (Prevents clumping of globules).
- **Cream Separation:** Centrifugal force at 4000-6000 RPM separates fat based on density difference (fat sp.gr 0.93 vs skim milk 1.036).`
  },
  {
    keywords: ["cip", "cleaning", "sanitation", "wash", "caustic", "lye", "acid"],
    response: `### 🧽 Clean-In-Place (CIP) Validation & Sanitation

- **Standard 5-Step CIP Wash Cycle:**
  1. **Pre-Rinse:** Cold/warm water (40-45°C) to flush loose milk solids (5-10 mins).
  2. **Lye/Caustic Wash:** 1.5 - 2.0% Sodium Hydroxide (NaOH) at 75-80°C (15-20 mins) ➔ Removes proteins & fats.
  3. **Intermediate Rinse:** Fresh water rinse to remove alkali residue.
  4. **Acid Wash:** 0.8 - 1.0% Nitric/Phosphoric Acid at 60-65°C (10-15 mins) ➔ Removes mineral milkstone scales.
  5. **Final Rinse & Sanitization:** Hot water (85°C for 15 mins) or Peracetic Acid (PAA 100-150 ppm) or Chlorine (200 ppm).
- **Validation Criteria:** Final rinse water pH must be neutral (6.8 - 7.2) and post-CIP swab test SPC < 10 CFU/cm².`
  },
  {
    keywords: ["etp", "effluent", "wastewater", "bod", "cod", "tss", "sludge"],
    response: `### 💧 Effluent Treatment Plant (ETP) Standards

- **Dairy Wastewater Characteristics:** High Organic Load (BOD 1000-2500 mg/L, COD 2000-4500 mg/L, Fat & Oil residue).
- **Treatment Stages:**
  1. **Primary Treatment:** Oil & Grease Trap ➔ Equalization Tank (pH Correction with H₂SO₄/Lime).
  2. **Secondary (Biological) Treatment:** Aeration Tank (Activated Sludge Process) ➔ Secondary Clarifier Settlement.
  3. **Tertiary Treatment:** Sand & Activated Carbon Filters ➔ Chlorination/UV Disinfection.
- **SPCB Discharge Norms:** pH: 6.5 - 8.5, BOD: < 30 mg/L, COD: < 250 mg/L, TSS: < 100 mg/L, Oil & Grease: < 10 mg/L.`
  },
  {
    keywords: ["career", "job", "interview", "resume", "salary", "fresher", "scope", "roles"],
    response: `### 🎯 Career Guidance & Industry Jobs (Dairy, Food, Pharma, Bio)

- **Top Job Roles:**
  - **Quality Executive / QA Manager:** Responsible for lab testing, NABL standards, FSSAI compliance & customer complaints.
  - **Production Executive / Shift Incharge:** Manages daily plant operations, yield balance, mass balance, CIP & workforce.
  - **Lab Chemist / Microbiologist:** Performs daily chemical, adulteration & microbial swab testing.
  - **Food Safety Auditor:** Audits plant hygiene, HACCP CCPs & supplier quality.
- **Essential Resume Tips:**
  - Highlight practical lab skills (Gerber Fat, Titration, CLR, MBRT, Autoclave).
  - Mention certifications: FoSTaC, HACCP Level 3, ISO 22000 Internal Auditor.
  - Quantify achievements (e.g. "Reduced CIP water wastage by 12% during internship").`
  }
];

export function handleCareerExpert(topic: string, message: string): string {
  const msg = message.toLowerCase().trim();

  // Search for matching keyword in knowledge base
  for (const item of EXPERT_KNOWLEDGE_BASE) {
    if (item.keywords.some(kw => msg.includes(kw))) {
      return item.response;
    }
  }

  // Topic specific defaults if no specific keyword matched
  if (topic.includes("Career")) {
    return `### 🎓 Food & Dairy Industry Career Guide (Offline Mode)

Food & Dairy Industry mein successful career ke 4 pillars:
1. **Technical Foundation:** Practical knowledge of Processing (Pasteurization, Homogenization, CIP) & Testing (Fat, SNF, Microbial).
2. **Quality Standards:** In-depth understanding of FSSAI, HACCP, ISO 22000 & GMP/GHP.
3. **Plant Experience:** Hands-on exposure to shift operations, yield calculations & inventory tracking.
4. **Professional Resume:** Highlight your internships, plant projects & key competencies clearly!

*Poochhiye specific topic jaise: FSSAI, HACCP, QC Testing, CIP Wash, ETP Plant, ya Interview Tips!*`;
  }

  return `### 💡 Gyan AI Technical Expert (Offline Mode)

Main **${topic}** ka domain expert hoon. Offline mode mein bhi mere paas detailed industry knowledge database available hai!

Aap in topics par sawal pooch sakte hain:
- 🥛 **Dairy & Food Science:** Milk composition, Fat & CLR testing, Adulteration methods.
- 🧪 **Quality Control:** COB, MBRT, Gerber test, Reagent preparation, Swab testing.
- 🏭 **Plant Engineering:** HTST Pasteurization, Homogenizer pressures, CIP 5-step wash, ETP plant.
- 📜 **Regulatory Standards:** FSSAI licensing, HACCP CCPs, ISO 22000 FSMS, SPCB norms.
- 💼 **Career & Resume:** Job roles, technical competencies, interview preparation.`;
}
