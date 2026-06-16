// --- TECHNICAL INTERVIEW Q&A DATABASE & EVALUATION LOGIC ---

export interface OfflineQuestion {
  id: string;
  category: string;
  keywords: string[];
  q_en: string;
  a_en: string;
  q_hinglish: string;
  a_hinglish: string;
  keyTerms: string[];
}

export const OFFLINE_INTERVIEW_DB: OfflineQuestion[] = [
  {
    id: "intro",
    category: "General / HR",
    keywords: ["fresher", "experience", "education", "introduce", "myself"],
    q_en: "Can you introduce yourself and highlight your experience/background in the food or dairy industry?",
    a_en: "Mention your degree (e.g., B.Tech in Dairy Technology/Food Tech), key academic projects, internships at processing plants, and your passion for quality assurance or plant operations.",
    q_hinglish: "Kya aap apna short introduction de sakte hain aur food/dairy industry me apna background batayein?",
    a_hinglish: "Aap apne introduction me apni degree (Dairy Tech/Food Tech), college, internships (plant training), major projects, aur is industry me aane ke reasons ko clear aur confident tarike se batayein.",
    keyTerms: ["degree", "internship", "project", "dairy", "food", "training"]
  },
  {
    id: "why_industry",
    category: "General / HR",
    keywords: ["why", "join", "motivation", "interest"],
    q_en: "Why do you want to join the dairy and food industry specifically?",
    a_en: "Express appreciation for the critical role of dairy products in public nutrition, the complexity of liquid processing engineering, and your aspiration to ensure food safety and quality compliance.",
    q_hinglish: "Aap dairy aur food technology industry me hi apna career kyun banana chahte hain?",
    a_hinglish: "Aap batayein ki dairy industry directly public health aur nutrition se judi hai, isme liquid milk processing ki core engineering involve hoti hai, aur quality assurance or production standards me aapka genuine interest hai.",
    keyTerms: ["nutrition", "public health", "quality", "safety", "processing", "career"]
  },
  {
    id: "strength_weakness",
    category: "General / HR",
    keywords: ["strength", "weakness", "improve", "challenge", "skill"],
    q_en: "What is your greatest strength and one area you are actively working to improve?",
    a_en: "Choose a strength relevant to the role (e.g., analytical thinking, attention to detail in QA, or teamwork in shift operations). For weakness, mention a genuine area with concrete steps you are taking to improve it (e.g., 'I am improving my data analysis speed by practicing Excel/Power BI').",
    q_hinglish: "Aapki sabse badi strength kya hai aur ek aisa area batayein jisme aap abhi improve kar rahe hain?",
    a_hinglish: "Strength me koi relevant skill batayein jaise QA me attention to detail ya production me teamwork. Weakness me honest rehkar batayein ki aap actively kya kar rahe hain usse improve karne ke liye, jaise 'Excel skills badhane ke liye daily practice kar raha/rahi hoon'.",
    keyTerms: ["analytical", "attention to detail", "teamwork", "data", "improve", "practice"]
  },
  {
    id: "salary_expectation",
    category: "General / HR",
    keywords: ["salary", "package", "ctc", "expectation", "compensation"],
    q_en: "What are your salary expectations for this role?",
    a_en: "Research industry benchmarks for the role and experience level. Give a range rather than a fixed number (e.g., 'Based on my research and skills, I am expecting between X and Y LPA, though I am open to discussion based on the overall package and growth opportunities'). Never undersell yourself.",
    q_hinglish: "Is role ke liye aapki salary expectation kya hai?",
    a_hinglish: "Pehle industry standard research karein. Fixed number ki jagah range dein, jaise 'Mere skills aur research ke basis par mujhe X se Y LPA ki expectation hai, lekin overall package aur growth opportunities dekhkar negotiate karne me mujhe khushi hogi'. Khud ko undervalue mat karein.",
    keyTerms: ["range", "lpa", "negotiate", "research", "benchmark", "package"]
  },
  {
    id: "where_5years",
    category: "General / HR",
    keywords: ["5 years", "future", "goal", "vision", "ambition"],
    q_en: "Where do you see yourself in 5 years in this industry?",
    a_en: "Align your answer with the company's growth path. For example: 'In 5 years, I see myself as a senior production/QA manager, having led cross-functional teams, contributed to plant efficiency projects, and possibly obtained additional certifications like FSSC Lead Auditor or Six Sigma.'",
    q_hinglish: "5 saal baad aap khud ko is industry me kahan dekhte hain?",
    a_hinglish: "Company ke growth path se align karke jawab dein, jaise 'Main chahta/chahti hoon ki 5 saal me main ek senior QA/Production Manager ban sakoon, team lead kiya ho, plant efficiency projects me contribute kiya ho, aur FSSC Lead Auditor ya Six Sigma certification bhi le li ho'.",
    keyTerms: ["manager", "certification", "lead", "efficiency", "cross-functional", "growth"]
  },
  {
    id: "htst_uht",
    category: "Dairy Technology",
    keywords: ["pasteurization", "uht", "htst", "thermal", "processing", "milk"],
    q_en: "What is the primary difference between HTST pasteurization and UHT processing?",
    a_en: "HTST (High Temperature Short Time) pasteurization is conducted at 72°C for 15 seconds to destroy pathogens (requires refrigeration, shelf life ~7-10 days). UHT (Ultra High Temperature) treatment operates at 135-140°C for 2-4 seconds under aseptic conditions, rendering milk sterile for room-temperature storage up to 3-6 months.",
    q_hinglish: "HTST pasteurization aur UHT processing ke beech main difference kya hai?",
    a_hinglish: "HTST (High Temperature Short Time) pasteurization me milk ko 72°C par 15 seconds ke liye heat kiya jata hai (refrigeration zaroori hai, shelf life 7-10 din). UHT (Ultra High Temperature) me 135-140°C par 2-4 seconds ke liye treatment hota hai, jisse milk sterile ho jata hai aur room temperature par 3-6 mahine chal sakta hai.",
    keyTerms: ["72", "15", "135", "140", "seconds", "refrigeration", "sterile", "shelf life"]
  },
  {
    id: "homogenization",
    category: "Dairy Technology",
    keywords: ["homogenization", "fat", "globule", "creaming", "separation"],
    q_en: "Explain the mechanical mechanism and purpose of milk homogenization.",
    a_en: "Homogenization reduces fat globule size from 3-4 microns to under 2 microns by forcing milk through a small valve under high pressure (150-200 bar). This increases fat surface area, prevents coalescence, and stops fat from separating (creaming) due to Stokes' Law.",
    q_hinglish: "Milk homogenization ka target kya hota hai aur ye kaise kaam karta hai?",
    a_hinglish: "Homogenization me milk ko high pressure (150-200 bar) par valve se guzara jata hai. Isse fat globules ka size 3-4 microns se ghatkar 2 microns se kam ho jata hai. Uniform distribution hone se milk ke upar malai (cream layer) banna ruk jata hai.",
    keyTerms: ["pressure", "globule", "stokes", "creaming", "microns", "valve"]
  },
  {
    id: "cip_cycle",
    category: "Dairy Technology",
    keywords: ["cip", "clean in place", "caustic", "acid", "cleaning", "rinse"],
    q_en: "What are the 5 standard steps of a CIP (Clean-In-Place) cycle in a dairy plant?",
    a_en: "The steps are: 1) Pre-rinse with water (to remove loose soil), 2) Caustic wash (NaOH, 1.5-2.0% at 75-80°C to dissolve fats/proteins), 3) Intermediate rinse, 4) Acid wash (Nitric/Phosphoric acid, 0.5-1.0% at 60°C to remove milk stone/minerals), and 5) Final rinse and sanitation.",
    q_hinglish: "Dairy plant me standard 5-step CIP cycle kaunse hote hain?",
    a_hinglish: "CIP cycle ke steps hain: 1) Pre-rinse (normal water se dhulai), 2) Caustic wash (NaOH solution 1.5-2% at 75-80°C fats/proteins hatane ke liye), 3) Intermediate rinse, 4) Acid wash (0.5-1% acid solution at 60°C milk stone clean karne ke liye), aur 5) Final sanitize-rinse.",
    keyTerms: ["rinse", "caustic", "naoh", "acid", "nitric", "phosphoric", "milkstone", "sanitize"]
  },
  {
    id: "plate_heat_exchanger",
    category: "Dairy Technology",
    keywords: ["phe", "plate heat exchanger", "regeneration", "heating", "cooling"],
    q_en: "How does a Plate Heat Exchanger (PHE) work in a milk pasteurization line and what is regeneration efficiency?",
    a_en: "A PHE uses thin corrugated metal plates with hot and cold fluids flowing in alternate channels. In a pasteurizer, incoming cold raw milk is pre-heated by outgoing hot pasteurized milk in the regeneration section (saving 70-95% energy). Then it passes through heating and cooling sections for final treatment.",
    q_hinglish: "Pasteurization line me Plate Heat Exchanger (PHE) kaise kaam karta hai aur regeneration efficiency kya hoti hai?",
    a_hinglish: "PHE me thin corrugated plates ke beech alternately hot aur cold fluids flow karte hain. Pasteurizer me incoming raw cold milk, bahar ja rahi hot pasteurized milk se preheat hoti hai — ise regeneration kehte hain jo 70-95% energy bachata hai. Phir heating aur cooling sections se gujarti hai.",
    keyTerms: ["regeneration", "corrugated", "efficiency", "preheat", "channel", "energy saving"]
  },
  {
    id: "standardization",
    category: "Dairy Technology",
    keywords: ["standardization", "fat", "pearson", "toned", "double toned"],
    q_en: "How is milk standardized to achieve a target fat percentage using Pearson's Square method?",
    a_en: "Pearson's Square is used to calculate mixing ratios of high-fat and low-fat milk streams. Place the target fat in the center, richest fat top-left, skimmest fat bottom-left. Subtract diagonally to get mixing proportions. For example, mixing 4% fat milk and 0.5% skim to achieve 3% toned milk.",
    q_hinglish: "Milk standardization me Pearson's Square method kaise use hota hai?",
    a_hinglish: "Pearson's Square ek quick calculation method hai. Center me desired fat %, top-left me rich milk fat %, bottom-left me skim milk fat % rakho. Diagonal subtract karne par mixing ratio milta hai. Jaise 4% fat milk aur 0.5% skim milk ko mix karke 3% toned milk banana.",
    keyTerms: ["pearson square", "mixing ratio", "toned", "skim", "fat", "standardize"]
  },
  {
    id: "uht_fouling",
    category: "Dairy Technology",
    keywords: ["fouling", "uht", "scale", "cleaning", "heat exchanger"],
    q_en: "What causes fouling in UHT heat exchangers, and how is it addressed?",
    a_en: "Fouling is the deposition of milk components (whey proteins at lower temps, mineral salts like calcium phosphate at higher temps) on heat exchanger surfaces. It reduces heat transfer efficiency and is cleaned using targeted caustic-acid-caustic CIP cycles.",
    q_hinglish: "UHT heat exchangers me fouling kyun hoti hai aur ise kaise saf kiya jata hai?",
    a_hinglish: "UHT pipes par milk components (low temp par beta-lactoglobulin whey protein, aur high temp par calcium phosphate minerals) jam jate hain, jisse heat transfer inefficient ho jata hai. Ise deep CIP caustic aur acid wash se clean kiya jata hai.",
    keyTerms: ["protein", "calcium phosphate", "fouling", "deposit", "heat transfer", "cip"]
  },
  {
    id: "evaporator_vacuum",
    category: "Dairy Technology",
    keywords: ["evaporator", "vacuum", "boiling", "concentration", "steam"],
    q_en: "Why do milk evaporators operate under vacuum conditions?",
    a_en: "Operating under vacuum lowers the boiling point of milk (typically to 50-60°C instead of 100°C). This prevents thermal damage, protein denaturation, cooked flavors, and browning (Maillard reaction) while saving energy.",
    q_hinglish: "Milk evaporators vacuum condition me kyun chalaye jate hain?",
    a_hinglish: "Vacuum pressure badhane se milk ka boiling point kam (50-60°C) ho jata hai. Isse milk proteins damage nahi hote, cooked flavor ya yellow color (Maillard browning) nahi aata aur energy consumption bhi kaafi save hoti hai.",
    keyTerms: ["boiling point", "vacuum", "50", "60", "protein denaturation", "browning"]
  },
  {
    id: "membrane_filtration",
    category: "Dairy Technology",
    keywords: ["membrane", "filtration", "reverse osmosis", "ro", "ultrafiltration"],
    q_en: "Compare Ultrafiltration (UF) and Reverse Osmosis (RO) applications in dairy processing.",
    a_en: "Ultrafiltration (UF) has a larger pore size, retaining proteins and fats while letting lactose and minerals pass (used for protein concentration). Reverse Osmosis (RO) has the tightest pores, retaining all solids and letting only water pass (used for concentration and water recovery).",
    q_hinglish: "Ultrafiltration (UF) aur Reverse Osmosis (RO) me kya difference hai?",
    a_hinglish: "Ultrafiltration (UF) ka pore size bada hota hai, ye protein aur fats ko hold karta hai par lactose/water ko pass hone deta hai. Reverse Osmosis (RO) sabse barik filter hai, ye saare solids (protein, fat, lactose) ko rokkar keval paani ko pass hone deta hai.",
    keyTerms: ["pore size", "protein", "lactose", "solids", "water recovery", "filtration"]
  },
  {
    id: "microfiltration",
    category: "Dairy Technology",
    keywords: ["microfiltration", "mf", "spore", "bacteria", "cold", "filtration"],
    q_en: "What is Microfiltration (MF) and what is its advantage over heat treatment in dairy?",
    a_en: "Microfiltration uses membranes with 1.4 micron pore size to physically remove bacteria and spores from skim milk without heat. This 'cold pasteurization' technique extends shelf life, minimizes heat damage to proteins and flavors, and is used in extended shelf life (ESL) milk production.",
    q_hinglish: "Microfiltration (MF) kya hai aur dairy me heat treatment ke mukable iska kya faida hai?",
    a_hinglish: "Microfiltration ek 1.4 micron pore size membrane hai jo bina heat ke bacteria aur spores ko physically filter kar deti hai. Ise 'cold pasteurization' bolte hain. Isse milk ka flavor aur protein damage nahi hota aur ESL (Extended Shelf Life) milk banane me use hota hai.",
    keyTerms: ["1.4 micron", "spore", "cold pasteurization", "ESL", "bacteria removal", "membrane"]
  },
  {
    id: "haccp_ccp",
    category: "Food Safety & QA",
    keywords: ["haccp", "ccp", "critical control", "hazard", "risk"],
    q_en: "How do you identify a Critical Control Point (CCP) in a dairy processing line?",
    a_en: "A CCP is determined using the HACCP Decision Tree. You evaluate whether a hazard exists at a step, if control is necessary for safety, and if a subsequent step will eliminate or reduce the hazard. Common CCPs include pasteurization and metal detection.",
    q_hinglish: "Dairy process line me Critical Control Point (CCP) ko kaise identify kiya jata hai?",
    a_hinglish: "CCP identify karne ke liye HACCP Decision Tree ka use hota hai. Hum check karte hain ki kya us step par hazard ko control karna safety ke liye zaroori hai aur kya aage koi aur step is risk ko khatam karega. Jaise pasteurization ya metal detection critical control points hain.",
    keyTerms: ["decision tree", "hazard", "eliminate", "pasteurization", "metal detection", "control"]
  },
  {
    id: "iso_fssc",
    category: "Food Safety & QA",
    keywords: ["iso 22000", "fssc 22000", "gfsi", "prerequisite", "prp"],
    q_en: "What is the key difference between ISO 22000 and FSSC 22000 standards?",
    a_en: "ISO 22000 is not recognized by the GFSI (Global Food Safety Initiative). FSSC 22000 is fully GFSI-recognized because it combines ISO 22000 with sector-specific Prerequisite Programs (PRPs, e.g., ISO/TS 22002-1) and additional FSSC requirements.",
    q_hinglish: "ISO 22000 aur FSSC 22000 certification standards me kya farq hai?",
    a_hinglish: "ISO 22000 standard GFSI (Global Food Safety Initiative) se benchmarked nahi hai. FSSC 22000 full GFSI-recognized scheme hai kyunki ye ISO 22000 ke sath sector-specific Prerequisite Programs (PRPs like ISO/TS 22002-1) aur FSSC guidelines ko compile karti hai.",
    keyTerms: ["gfsi", "prerequisite", "prp", "ts 22002", "benchmark", "standards"]
  },
  {
    id: "fssai_milk",
    category: "Food Safety & QA",
    keywords: ["fssai", "fat", "snf", "legal", "limit", "cow", "buffalo"],
    q_en: "What are the FSSAI fat and SNF limits for cow and buffalo milk in India?",
    a_en: "For Cow milk, the FSSAI limits require a minimum of 3.2% to 4.0% Fat and 8.3% to 8.5% SNF (varies by state). For Buffalo milk, it requires a minimum of 5.0% to 6.0% Fat and 9.0% SNF.",
    q_hinglish: "Cow aur Buffalo milk ke liye FSSAI ki fat aur SNF limits kya hain?",
    a_hinglish: "Cow milk ke liye minimum Fat 3.2%-4.0% aur SNF 8.3%-8.5% hona chahiye (state par depend karta hai). Buffalo milk ke liye minimum Fat 5.0%-6.0% aur SNF 9.0% hona legal requirement hai.",
    keyTerms: ["fat", "snf", "cow", "buffalo", "3.2", "8.3", "5.0", "9.0"]
  },
  {
    id: "allergen_control",
    category: "Food Safety & QA",
    keywords: ["allergen", "cross contamination", "labeling", "cleaning"],
    q_en: "What are the core components of an effective allergen control program in a food plant?",
    a_en: "Components include: 1) Identification of all allergen ingredients, 2) Dedicated storage and color-coded utensils, 3) Production scheduling (non-allergenic first), 4) Validated wet cleaning to remove allergen proteins, and 5) Accurate product packaging labeling.",
    q_hinglish: "Food manufacturing plant me allergen control program ke main points kya hote hain?",
    a_hinglish: "Main controls hain: 1) Allergenic items ko separate storage dena, 2) dedicated/color-coded utensils, 3) scheduling (bina allergen waala batch pehle aur allergen waala baad me run karna), 4) CIP check to clean protein traces, aur 5) Packaging par allergen warnings.",
    keyTerms: ["storage", "cleaning", "scheduling", "labeling", "cross contamination", "utensils"]
  },
  {
    id: "traceability_recall",
    category: "Food Safety & QA",
    keywords: ["traceability", "recall", "forward", "backward", "tracking"],
    q_en: "What is the difference between forward and backward traceability in a food plant?",
    a_en: "Backward traceability tracks a finished product back to its raw material sources and suppliers. Forward traceability tracks raw materials or batches forward to the specific distributors, shipments, and retail locations for recalls.",
    q_hinglish: "Food manufacturing plant me forward aur backward traceability kya hoti hai?",
    a_hinglish: "Backward traceability me finish goods se shuru karke raw material aur supplier tak ka data nikala jata hai. Forward traceability me raw material batch number se lekar distributor, shop aur customer shipment ki details track ki jati hain takki recall easy ho.",
    keyTerms: ["forward", "backward", "supplier", "distributor", "recall", "track"]
  },
  {
    id: "corrective_action",
    category: "Food Safety & QA",
    keywords: ["corrective action", "capa", "ncr", "non-conformance", "deviation", "root cause"],
    q_en: "What is the difference between a Corrective Action and a Preventive Action (CAPA)?",
    a_en: "A Corrective Action addresses an existing non-conformance — it identifies the root cause (using tools like 5-Why or Fishbone diagram) and eliminates it to prevent recurrence. A Preventive Action (PA) is proactive — it identifies potential problems before they occur and puts controls in place. Together they form CAPA.",
    q_hinglish: "Corrective Action aur Preventive Action (CAPA) me kya farq hai?",
    a_hinglish: "Corrective Action ek already hue problem ke liye hoti hai — pehle root cause dhundhte hain (5-Why ya Fishbone se), phir ise permanently fix karte hain. Preventive Action proactive hoti hai — wo potential problem ko pehle se rokne ke liye controls lagati hai. Dono milkar CAPA banate hain.",
    keyTerms: ["root cause", "5-why", "fishbone", "non-conformance", "proactive", "recurrence"]
  },
  {
    id: "internal_audit",
    category: "Food Safety & QA",
    keywords: ["internal audit", "audit", "checklist", "gap analysis", "compliance"],
    q_en: "How do you prepare for and conduct a food safety internal audit?",
    a_en: "Preparation includes reviewing the audit scope, previous audit findings, and relevant standards (HACCP, FSSC 22000). During the audit, use checklists, interview personnel, observe practices, and collect objective evidence. Document all findings as conformance or non-conformance. Prepare a report and follow up on CAPA closure.",
    q_hinglish: "Food safety internal audit ki preparation aur conduction kaise karte hain?",
    a_hinglish: "Pehle scope aur previous findings review karo, phir checklist banao based on HACCP/FSSC 22000 requirements. Audit me employees se baat karo, actual practices observe karo aur objective evidence collect karo. Saari findings document karo — conformance ya NCR ke roop me. Baad me CAPA follow-up karo.",
    keyTerms: ["checklist", "objective evidence", "NCR", "observation", "CAPA", "conformance"]
  },
  {
    id: "mbrt_test",
    category: "Lab & Testing",
    keywords: ["mbrt", "methylene", "blue", "dye", "microbial", "quality"],
    q_en: "Explain the biochemical basis of the Methylene Blue Reduction Test (MBRT).",
    a_en: "Active microorganisms in milk consume oxygen during respiration, lowering the oxidation-reduction potential. This reduces the methylene blue dye, causing it to lose its blue color. Faster decolorization indicates higher bacterial load and lower quality.",
    q_hinglish: "MBRT (Methylene Blue Reduction Test) ka scientific basis kya hai?",
    a_hinglish: "Milk me present active microbes oxygen consume karte hain, jisse oxidation-reduction potential down hota hai. Yeh state methylene blue dye ko reduce karke colorless kar deti hai. Jaldi rang udd jana (decolorization) high bacterial population ko dikhata hai.",
    keyTerms: ["oxygen", "reduction", "decolorization", "dye", "microbes", "respiration"]
  },
  {
    id: "alp_test",
    category: "Lab & Testing",
    keywords: ["phosphatase", "alkaline", "alp", "pasteurization", "enzyme"],
    q_en: "Why is Alkaline Phosphatase used as an indicator enzyme for pasteurization success?",
    a_en: "Alkaline Phosphatase is a natural milk enzyme with a heat inactivation profile slightly higher than the most heat-resistant non-spore-forming pathogen (Coxiella burnetii). If ALP is destroyed (test negative), it confirms pasteurization destroyed all pathogens.",
    q_hinglish: "ALP (Alkaline Phosphatase) test se pasteurization ki check-up kaise hoti hai?",
    a_hinglish: "ALP milk me present ek natural enzyme hai jiski heat resistance pathogens (Coxiella burnetii) se thodi zyada hoti hai. Agar pasteurization ke baad ALP destroy (test negative) ho jata hai, toh mana jata hai ki saare pathogens khatam ho chuke hain.",
    keyTerms: ["enzyme", "heat resistance", "pathogen", "coxiella", "negative", "inactive"]
  },
  {
    id: "hplc_analysis",
    category: "Lab & Testing",
    keywords: ["hplc", "chromatography", "aflatoxin", "contaminant", "liquid"],
    q_en: "How is HPLC used in dairy quality control to ensure toxin safety?",
    a_en: "HPLC is used with fluorescence detection to quantify Mycotoxins like Aflatoxin M1 down to parts-per-billion (ppb) levels. FSSAI limit for Aflatoxin M1 in milk is 0.5 ppb. It is also used to analyze vitamins and amino acid profiles.",
    q_hinglish: "HPLC ka use dairy quality checking me toxins aur adulterants detect karne me kaise hota hai?",
    a_hinglish: "HPLC (High-Performance Liquid Chromatography) ka use Aflatoxin M1 jaise harmful mycotoxins ko ppb (parts-per-billion) level par measure karne ke liye hota hai. FSSAI ke mutabik milk me Aflatoxin M1 limit max 0.5 ppb honi chahiye.",
    keyTerms: ["aflatoxin", "mycotoxin", "ppb", "limit", "fluorescence", "chromatography"]
  },
  {
    id: "sensory_test",
    category: "Lab & Testing",
    keywords: ["sensory", "organoleptic", "triangle", "taste", "flavor"],
    q_en: "What is a Triangle Test in sensory evaluation, and when is it used?",
    a_en: "A Triangle Test is a discriminative method where panelists are presented with three coded samples (two identical, one different). They must identify the odd sample. It is used to detect if minor process or ingredient changes alter product flavor.",
    q_hinglish: "Sensory evaluation me Triangle Test kya hota hai aur ye kab kaam aata hai?",
    a_hinglish: "Triangle Test ek difference test hai jisme panels ko 3 coded samples diye jate hain (2 same hote hain aur 1 different). Panelist ko odd sample identify karna hota hai. Ye tab use hota hai jab quality me subtle change ya raw material badla gaya ho.",
    keyTerms: ["triangle", "panelist", "sample", "odd", "discriminative", "flavor"]
  },
  {
    id: "adulteration_starch",
    category: "Lab & Testing",
    keywords: ["adulteration", "starch", "iodine", "urea", "milk"],
    q_en: "How do you detect starch and excess urea adulteration in milk?",
    a_en: "Starch is detected by adding Iodine solution, which turns milk intense blue. Urea is detected using DMAB reagent (p-Dimethylaminobenzaldehyde), which turns milk yellow in the presence of added urea (natural urea gives a very light yellow).",
    q_hinglish: "Milk me starch aur urea ki milaawat (adulteration) kaise check ki jaati hai?",
    a_hinglish: "Starch check karne ke liye Iodine test kiya jata hai, milk blue color me badal jata hai. Urea test ke liye DMAB reagent daala jata hai, chemical react hone par milk dark yellow ho jata hai (natural milk yellow nahi padta).",
    keyTerms: ["iodine", "blue", "urea", "dmab", "yellow", "reagent", "adulteration"]
  },
  {
    id: "adulteration_snf",
    category: "Lab & Testing",
    keywords: ["adulteration", "water", "snf", "lactometer", "density", "added water"],
    q_en: "How is water adulteration in milk detected at a procurement or reception level?",
    a_en: "Water adulteration is detected using a Lactometer, which measures milk density (CLR - Corrected Lactometer Reading). Pure cow milk CLR is 26-30°. Added water dilutes solids and lowers CLR and SNF%. A Milk Analyzer (Gerber/FTIR) can simultaneously check fat, SNF, and protein to confirm dilution.",
    q_hinglish: "Milk reception par pani ki milaawat (water adulteration) kaise pakdi jati hai?",
    a_hinglish: "Pani milana Lactometer se pakda jata hai — ye milk ki density (CLR) measure karta hai. Pure cow milk ka CLR 26-30° hota hai; pani milne par CLR aur SNF% gir jata hai. Milk Analyzer (FTIR) se fat, SNF, aur protein ek saath check karte hain jo dilution confirm karta hai.",
    keyTerms: ["lactometer", "CLR", "density", "SNF", "FTIR", "dilution", "water"]
  },
  {
    id: "pcr_pathogen",
    category: "Lab & Testing",
    keywords: ["pcr", "dna", "pathogen", "salmonella", "listeria", "rapid", "detection"],
    q_en: "How is PCR (Polymerase Chain Reaction) used for rapid pathogen detection in food safety labs?",
    a_en: "PCR amplifies specific DNA sequences of target pathogens (e.g., Salmonella, Listeria, E. coli O157:H7) from food samples. Real-time PCR (qPCR) can detect and quantify pathogens in 3-5 hours compared to 3-5 days for traditional culture methods, enabling faster recall decisions.",
    q_hinglish: "Food safety lab me PCR technique se pathogens kaise detect karte hain?",
    a_hinglish: "PCR technique target pathogen (jaise Salmonella, Listeria) ke specific DNA sequence ko amplify karke detect karti hai. Real-time PCR (qPCR) se result sirf 3-5 ghante me aata hai, jabki traditional culture method me 3-5 din lagte hain. Isse fast recall decisions lene me madad milti hai.",
    keyTerms: ["DNA", "amplify", "qPCR", "Salmonella", "Listeria", "rapid", "culture method"]
  },
  {
    id: "ghee_clarify",
    category: "Products Processing",
    keywords: ["ghee", "moisture", "clarification", "shelf", "rancidity"],
    q_en: "What is the moisture limit in ghee and how does clarification affect its shelf life?",
    a_en: "FSSAI requires ghee moisture to be below 0.5% (industry target is <0.2%). Clarification is done by heating butter to 110-120°C to evaporate water. Keeping moisture low prevents hydrolytic rancidity and bacterial growth, extending shelf life.",
    q_hinglish: "Ghee me moisture ki legal limit kya hai aur clarification process iski shelf life kaise badhati hai?",
    a_hinglish: "Ghee me moisture ki FSSAI limit maximum 0.5% hai. Clarification process me butter ko 110-120°C heat karke sara moisture bhaap bana kar udaya jata hai. Moisture kam rehne se hydrolytic rancidity rukti hai aur shelf life badhti hai.",
    keyTerms: ["moisture", "0.5", "0.2", "rancidity", "evaporate", "shelf life", "butter"]
  },
  {
    id: "cheese_syneresis",
    category: "Products Processing",
    keywords: ["cheese", "syneresis", "whey", "curd", "rennet"],
    q_en: "What is syneresis in cheese curd, and how is it controlled during manufacturing?",
    a_en: "Syneresis is the expulsion of whey from the curd structure due to protein network contraction. It is controlled by temperature (higher temp increases syneresis), pH/acidity, curd cutting size (smaller cuts expel whey faster), and stirring rate.",
    q_hinglish: "Cheese production me syneresis kya hota hai aur curds se paani kaise control kiya jata hai?",
    a_hinglish: "Syneresis cheese curd gel ke sikudne se whey (whey protein aur paani) ke bahar nikalne ki process ko kehte hain. Isko cutting size (chota size = fast syneresis), high temperature, pH level aur stirring speed se control kiya jata hai.",
    keyTerms: ["whey", "expulsion", "cutting size", "temperature", "pH", "stirring"]
  },
  {
    id: "icecream_sandiness",
    category: "Products Processing",
    keywords: ["ice cream", "sandiness", "lactose", "crystallization", "defect"],
    q_en: "What causes the 'sandiness' defect in ice cream and how is it prevented?",
    a_en: "Sandiness is caused by the crystallization of lactose into large alpha-lactose hydrate crystals, typically due to high milk solids-not-fat (MSNF) levels (>11%) or temperature fluctuations during storage (heat shock). Prevention involves limiting MSNF and stabilizing temperature.",
    q_hinglish: "Ice cream me 'sandiness' (kirkirapan) defect kyun hota hai aur ise kaise rokein?",
    a_hinglish: "Sandiness tab hoti hai jab milk ka lactose bada crystal structure bana leta hai. Aisa tab hota hai jab MSNF (SNF) ki quantity 11-12% se upar ho jaye ya storage me temp badalta rahe (heat shock). Ise freeze temp stabilize karke roka ja sakta hai.",
    keyTerms: ["lactose", "crystallization", "msnf", "sandiness", "heat shock", "temperature"]
  },
  {
    id: "yogurt_stabilizers",
    category: "Products Processing",
    keywords: ["yogurt", "stabilizer", "dahi", "syneresis", "viscosity"],
    q_en: "Why are stabilizers used in yogurt and how do they prevent syneresis?",
    a_en: "Stabilizers (like gelatin, pectin, or starch) bind free water and increase viscosity. They support the casein protein gel network, preventing the separation of whey (syneresis) during storage and transportation, improving texture.",
    q_hinglish: "Yogurt ya Dahi me stabilizers kyun add kiye jaate hain?",
    a_hinglish: "Stabilizers (jaise pectin, gelatin ya modified starch) free water ko block karte hain aur viscosity badhate hain. Ye dahi ke protein structure (casein) ko strength dete hain taaki transport ke dauran whey water upar na aaye (syneresis check).",
    keyTerms: ["syneresis", "whey", "viscosity", "gelatin", "pectin", "protein"]
  },
  {
    id: "butter_churning",
    category: "Products Processing",
    keywords: ["butter", "churning", "overrun", "crystallization", "fat"],
    q_en: "What happens during the churning phase of butter manufacturing?",
    a_en: "Churning applies mechanical energy to cream, damaging the fat globule membranes. This releases liquid fat, which acts as a cement to bind the fat globules together into butter granules, separating them from the liquid buttermilk.",
    q_hinglish: "Butter production me churning phase me kya changes aate hain?",
    a_hinglish: "Churning me cream ko vigorously shook kiya jata hai, jisse fat globule membranes damage ho jati hain. Fat free hokar aapas me judne lagta hai (butter granules) aur buttermilk liquid bilkul alag ho jata hai.",
    keyTerms: ["membrane", "fat globules", "granules", "buttermilk", "churning", "cream"]
  },
  {
    id: "spray_drying",
    category: "Products Processing",
    keywords: ["spray", "drying", "powder", "solubility", "atomizer"],
    q_en: "How does the atomization step in spray drying impact milk powder quality?",
    a_en: "Atomization breaks concentrated liquid milk into fine droplets using a wheel or nozzle, maximizing surface area in the drying chamber. Correct atomization ensures uniform particle size, low moisture, high solubility index, and prevents scorched particles.",
    q_hinglish: "Spray drying me atomization step milk powder ki solubility aur quality ko kaise impact karta hai?",
    a_hinglish: "Atomizer (nozzle or disc) concentrated milk ko bohot barik droplets me badal deta hai jisse dry hot air me contact area maximum ho jata hai. Sahi atomization se uniform particles banenge, dry timing kam hogi, aur solubility index high rahega.",
    keyTerms: ["atomizer", "droplets", "solubility", "moisture", "nozzle", "particles"]
  },
  {
    id: "paneer_yield",
    category: "Products Processing",
    keywords: ["paneer", "yield", "coagulant", "citric", "acid", "protein"],
    q_en: "What factors affect the yield of paneer during manufacturing?",
    a_en: "Paneer yield depends on: 1) Milk fat and protein content (higher = more yield), 2) Coagulant type and concentration (citric acid, lactic acid — affects protein network), 3) Coagulation temperature (70-80°C optimal), 4) pH at coagulation (5.3-5.5 optimal), and 5) Pressing pressure and time.",
    q_hinglish: "Paneer manufacturing me yield ko kaun se factors affect karte hain?",
    a_hinglish: "Paneer yield depend karta hai: 1) Milk fat aur protein content par (jyada = jyada yield), 2) Coagulant type aur concentration par (citric/lactic acid), 3) Coagulation temperature 70-80°C, 4) pH 5.3-5.5 optimal hona chahiye, aur 5) Pressing pressure aur time par.",
    keyTerms: ["yield", "citric acid", "coagulation", "protein", "pH", "pressing", "temperature"]
  },
  {
    id: "cheese_rennet",
    category: "Products Processing",
    keywords: ["rennet", "coagulation", "casein", "kappa", "chymosin"],
    q_en: "How does rennet (chymosin) induce milk coagulation during cheese making?",
    a_en: "Rennet specifically cleaves the phe105-met106 bond of kappa-casein on the surface of casein micelles. This removes the hydrophilic glycomacropeptide layer, destroying micelle stability and causing them to aggregate into a curd gel in the presence of calcium ions.",
    q_hinglish: "Cheese making me rennet enzyme curd aggregation kaise karta hai?",
    a_hinglish: "Rennet (chymosin) milk me present kappa-casein protein molecule ko split kar deta hai. Isse casein micelle ki stability chali jaati hai aur calcium ions ki presence me micelles aapas me group banakar dahi (curd gel) banate hain.",
    keyTerms: ["chymosin", "kappa-casein", "micelle", "coagulation", "calcium", "curd"]
  },
  {
    id: "mastitis_detect",
    category: "Procurement & Farm",
    keywords: ["mastitis", "cmt", "somatic", "scc", "california"],
    q_en: "How do you test for subclinical mastitis at the farm or reception level?",
    a_en: "Subclinical mastitis is detected using the California Mastitis Test (CMT), where reagent mixes with milk DNA to form a gel. Somatic Cell Count (SCC) analysis is also used, where counts over 200,000 cells/ml indicate infection.",
    q_hinglish: "Farm ya procurement level par subclinical mastitis disease kaise check karte hain?",
    a_hinglish: "Iske liye California Mastitis Test (CMT) kiya jata hai, jahan chemical reagent milk somatic cells ke DNA ke sath link hokar gel/slime banata hai. Iske alawa Somatic Cell Count (SCC) agar 2 lakh cells/ml se zyada ho to infection mana jata hai.",
    keyTerms: ["cmt", "california", "somatic", "scc", "gel", "dna", "infection"]
  },
  {
    id: "cold_chain",
    category: "Procurement & Farm",
    keywords: ["cold chain", "chilling", "bulk milk", "bmc", "temperature"],
    q_en: "Why is it critical to chill raw milk to 4°C within 2 hours of milking?",
    a_en: "Milk leaves the udder at 37°C, which is ideal for rapid bacterial multiplication. Chilling milk to 4°C within 2 hours induces a bacteriostatic state, halting the growth of mesophilic pathogens and preventing souring/lactic acid production.",
    q_hinglish: "Milking ke baad raw milk ko 2 ghante ke andar 4°C par cooling karna kyun compulsory hai?",
    a_hinglish: "Cow se milk 37°C body temp par nikalta hai, jo bacteria ke double hone ke liye perfect hai. 2 ghante ke andar milk ko 4°C ya usse kam chill karne se bacterial growth freeze ho jati hai, jisse milk fata ya khatta nahi hota.",
    keyTerms: ["37", "4", "2 hours", "bacteriostatic", "chill", "procurement"]
  },
  {
    id: "mastitis_prevent",
    category: "Procurement & Farm",
    keywords: ["mastitis", "teat", "dipping", "post", "pre", "hygiene"],
    q_en: "Why is post-milking teat dipping considered the most effective mastitis prevention method?",
    a_en: "After milking, the teat canal remains open for 30-40 minutes. Post-milking dipping coats the teat in sanitizer (e.g., iodine), killing pathogens present on the skin and preventing them from entering the open canal before it closes.",
    q_hinglish: "Post-milking teat dipping mastitis disease ko rokne ke liye sabse effective method kyun hai?",
    a_hinglish: "Milking ke baad cow ke teat ka pipe (canal) lagbhag 30-40 minutes tak open rehta hai. Post-dipping me teat ko sanitizer (iodine) me dubaya jata hai, jisse skin par present pathogens khatam hote hain aur open canal me infection enter nahi kar pata.",
    keyTerms: ["teat canal", "iodine", "sanitizer", "canal open", "infection", "prevention"]
  },
  {
    id: "milk_reception_tests",
    category: "Procurement & Farm",
    keywords: ["reception", "platform test", "can", "raw milk", "acceptance", "rejection"],
    q_en: "What are the key platform tests performed on raw milk at reception before acceptance?",
    a_en: "Platform tests at reception include: 1) Organoleptic check (smell, color, appearance), 2) Clot-on-Boiling (COB) test for acidity, 3) Alcohol test (68% alcohol for UHT milk), 4) Lactometer reading (CLR for density/added water), 5) Fat and SNF by milk analyzer, and 6) Temperature check (<8°C acceptable).",
    q_hinglish: "Raw milk reception par acceptance se pehle kaunse platform tests kiye jate hain?",
    a_hinglish: "Platform tests me shamil hain: 1) Organoleptic check (smell, color, look), 2) Clot-on-Boiling (COB) test acidity ke liye, 3) Alcohol test (68% alcohol UHT milk ke liye), 4) Lactometer CLR reading, 5) Fat aur SNF milk analyzer se, aur 6) Temperature check (<8°C).",
    keyTerms: ["organoleptic", "COB", "alcohol test", "CLR", "milk analyzer", "temperature", "platform"]
  },
  {
    id: "etp_bod_cod",
    category: "Environment & Safety",
    keywords: ["etp", "effluent", "bod", "cod", "waste", "water"],
    q_en: "Why is dairy wastewater treatment critical, and what do BOD and COD measure?",
    a_en: "Dairy effluent is high in organic matter (fat, lactose, protein). BOD (Biochemical Oxygen Demand) measures oxygen needed by microbes to decompose organics. COD (Chemical Oxygen Demand) measures oxygen required to chemically oxidize all organics. High levels deplete river oxygen if untreated.",
    q_hinglish: "ETP (Effluent Treatment Plant) me BOD aur COD ka kya role hai?",
    a_hinglish: "Dairy waste water me organic matter (fats, whey) high hota hai. BOD organic waste ko biologically decompose karne me lagne wali oxygen batata hai. COD chemical oxidation me lagne wali oxygen batata hai. High levels rivers ke ecosystem ko destroy kar sakte hain.",
    keyTerms: ["wastewater", "organic", "bod", "cod", "oxygen", "effluent", "etp"]
  },
  {
    id: "pest_control",
    category: "Environment & Safety",
    keywords: ["pest", "control", "rodent", "insect", "infestation"],
    q_en: "What are the core preventive strategies for pest control in food processing dry areas?",
    a_en: "Strategies include: 1) Physical exclusion (screens, air curtains), 2) Moisture control (eliminating leaks), 3) Proper sanitation to remove food sources, 4) Placement of non-toxic glue traps/multicatch boxes internally, and 5) Regular inspections.",
    q_hinglish: "Food plant ke dry production area me pest control kaise kiya jata hai?",
    a_hinglish: "Main rules hain: 1) Physical exclusion (doors screen mesh aur air curtains lagana), 2) area dry rakhna (water leakage block karna), 3) night cleanliness taaki insect feed na mile, aur 4) internal chemical-free traps lagana.",
    keyTerms: ["exclusion", "sanitation", "trap", "moisture", "air curtain", "pest"]
  },
  {
    id: "gmp_ghp",
    category: "Environment & Safety",
    keywords: ["gmp", "ghp", "good manufacturing", "hygiene", "personal hygiene", "plant"],
    q_en: "What are Good Manufacturing Practices (GMP) and how are they implemented in a dairy plant?",
    a_en: "GMP are documented practices ensuring products are consistently produced and controlled to quality standards. In dairy plants, GMP covers: 1) Personal hygiene (handwashing, PPE, no jewellery), 2) Premises design (smooth washable surfaces, drainage), 3) Equipment maintenance, 4) Pest control, and 5) Waste management.",
    q_hinglish: "Good Manufacturing Practices (GMP) kya hoti hain aur dairy plant me kaise implement hoti hain?",
    a_hinglish: "GMP aise documented practices hain jo ensure karte hain ki products consistently quality standards ke according banein. Dairy plant me GMP cover karta hai: 1) Personal hygiene (handwashing, PPE, jewelry nahi), 2) Plant design (smooth washable surfaces), 3) Equipment maintenance, 4) Pest control, aur 5) Waste management.",
    keyTerms: ["personal hygiene", "PPE", "premises", "washable", "maintenance", "documentation"]
  },
  {
    id: "energy_audit",
    category: "Environment & Safety",
    keywords: ["energy", "audit", "steam", "refrigeration", "efficiency", "saving"],
    q_en: "What are the major energy consuming areas in a dairy plant and how can energy efficiency be improved?",
    a_en: "Major energy consumers are: 1) Refrigeration (compressors for chilling/freezing), 2) Steam generation (boilers for pasteurization/evaporation), 3) CIP pumps, and 4) Spray dryers. Efficiency improvements include heat recovery (regeneration in PHE), insulation of steam lines, variable speed drives on pumps, and condensate return systems.",
    q_hinglish: "Dairy plant me sabse zyada energy kaun consume karta hai aur efficiency kaise badhayi ja sakti hai?",
    a_hinglish: "Sabse zyada energy use hoti hai: 1) Refrigeration compressors, 2) Steam boilers (pasteurization/evaporation ke liye), 3) CIP pumps, aur 4) Spray dryers. Efficiency ke liye PHE regeneration, steam line insulation, variable speed drives on pumps, aur condensate return systems lagane chahiye.",
    keyTerms: ["refrigeration", "boiler", "steam", "regeneration", "insulation", "variable speed drive"]
  },
  {
    id: "six_sigma",
    category: "Production & Operations",
    keywords: ["six sigma", "lean", "oee", "efficiency", "dmaic", "waste"],
    q_en: "How can Six Sigma DMAIC methodology be applied to reduce defects in a dairy production line?",
    a_en: "DMAIC stands for: Define (identify the problem, e.g., high fat loss in cream separator), Measure (collect baseline data), Analyze (identify root causes using Fishbone/Pareto), Improve (pilot solutions, e.g., optimize separator speed), Control (implement SOP and SPC charts to sustain improvement).",
    q_hinglish: "Six Sigma DMAIC methodology dairy production line me defects kaise reduce karta hai?",
    a_hinglish: "DMAIC ka matlab hai: Define (problem identify karo, jaise cream separator me fat loss), Measure (baseline data collect karo), Analyze (root cause dhundho — Fishbone/Pareto se), Improve (solution pilot karo — separator speed optimize), Control (SOP aur SPC charts se improvement sustain karo).",
    keyTerms: ["DMAIC", "define", "measure", "analyze", "improve", "control", "SPC", "Pareto"]
  },
  {
    id: "oee_calculation",
    category: "Production & Operations",
    keywords: ["oee", "overall equipment effectiveness", "availability", "performance", "quality"],
    q_en: "How is OEE (Overall Equipment Effectiveness) calculated and why is it important in a dairy plant?",
    a_en: "OEE = Availability × Performance × Quality. Availability = (Run Time / Planned Production Time). Performance = (Ideal Cycle Time × Total Count / Run Time). Quality = (Good Count / Total Count). World-class OEE is 85%. It helps identify losses from breakdowns, speed loss, and defects to improve plant efficiency.",
    q_hinglish: "OEE (Overall Equipment Effectiveness) kaise calculate karte hain aur dairy plant me iska importance kya hai?",
    a_hinglish: "OEE = Availability × Performance × Quality. Availability = Run Time / Planned Time. Performance = Ideal Speed / Actual Speed. Quality = Good Output / Total Output. World-class OEE 85% hota hai. Ye breakdowns, speed losses aur defects identify karne me help karta hai.",
    keyTerms: ["availability", "performance", "quality", "85%", "breakdown", "losses", "world-class"]
  },
  {
    id: "sop_writing",
    category: "Production & Operations",
    keywords: ["sop", "standard operating procedure", "document", "work instruction", "control"],
    q_en: "What are the key elements of a well-written Standard Operating Procedure (SOP) in a food plant?",
    a_en: "A good SOP includes: 1) Title, SOP number, version, effective date, 2) Purpose and scope, 3) Responsibilities (who does what), 4) Equipment and materials needed, 5) Step-by-step procedure with critical parameters, 6) Safety precautions, 7) Reference documents, and 8) Review/approval signatures.",
    q_hinglish: "Food plant me ek effective SOP (Standard Operating Procedure) ke main elements kya hone chahiye?",
    a_hinglish: "Achhe SOP me hona chahiye: 1) Title, SOP number, version, date, 2) Purpose aur scope, 3) Responsibilities (kaun kya karega), 4) Equipment aur materials, 5) Step-by-step procedure with critical parameters, 6) Safety precautions, 7) Reference documents, aur 8) Review/approval signatures.",
    keyTerms: ["title", "scope", "responsibility", "step-by-step", "critical parameter", "approval", "version"]
  },
  {
    id: "cold_storage",
    category: "Production & Operations",
    keywords: ["cold storage", "temperature", "refrigeration", "product", "storage", "fifo"],
    q_en: "What temperature zones are used for different dairy product storage and why?",
    a_en: "Dairy product storage zones: 1) Chilled store (0-4°C) for fresh milk, paneer, curd, dahi, 2) Frozen store (-18°C or below) for ice cream and frozen dairy, 3) Ambient store (cool, dry) for UHT milk, ghee, milk powder. FIFO (First In First Out) must be strictly followed in all zones to manage shelf life.",
    q_hinglish: "Different dairy products ke liye storage temperature zones kya hote hain?",
    a_hinglish: "Dairy storage zones hain: 1) Chilled store (0-4°C) — fresh milk, paneer, curd ke liye, 2) Frozen store (-18°C ya neeche) — ice cream aur frozen dairy ke liye, 3) Ambient store — UHT milk, ghee, powder ke liye. Saare zones me FIFO (First In First Out) strictly follow karna zaroori hai.",
    keyTerms: ["0-4°C", "-18°C", "ambient", "FIFO", "shelf life", "chilled", "frozen"]
  },
  {
    id: "statistical_process_control",
    category: "Production & Operations",
    keywords: ["spc", "control chart", "ucl", "lcl", "process", "variation"],
    q_en: "How is Statistical Process Control (SPC) used to monitor dairy production quality?",
    a_en: "SPC uses control charts to monitor process parameters (e.g., pasteurization temperature, fat%, fill weight) over time. UCL (Upper Control Limit) and LCL (Lower Control Limit) are set at ±3 sigma from the mean. Points outside limits or trending patterns indicate process instability requiring investigation.",
    q_hinglish: "Dairy production quality monitor karne ke liye SPC (Statistical Process Control) ka use kaise hota hai?",
    a_hinglish: "SPC me control charts use hote hain jo process parameters (jaise pasteurization temp, fat%, fill weight) ko continuously monitor karte hain. UCL aur LCL mean se ±3 sigma par set hote hain. Agar koi point bahar jaye ya trend dikhe, toh process investigation zaroori hai.",
    keyTerms: ["control chart", "UCL", "LCL", "3 sigma", "mean", "trending", "instability"]
  }
];






// Helper to select questions based on keywords from resume
export function selectOfflineQuestions(resumeText: string, experienceLevel: string): OfflineQuestion[] {
  const resumeLower = resumeText.toLowerCase();
  
  // Calculate score for each question in the database
  const scoredQuestions = OFFLINE_INTERVIEW_DB.map(q => {
    let score = 0;
    
    // Check keywords overlap
    q.keywords.forEach(keyword => {
      if (resumeLower.includes(keyword)) {
        score += 2;
      }
    });

    // Experience level bonus matching
    if (experienceLevel === "Fresher Student" && q.category === "General / HR") {
      score += 1;
    }

    return { question: q, score };
  });

  // Sort by score descending
  scoredQuestions.sort((a, b) => b.score - a.score);

  // Take top matching questions, ensuring we include at least the Introduction ("intro") or General questions
  const selected: OfflineQuestion[] = [];
  const introQuestion = OFFLINE_INTERVIEW_DB.find(q => q.id === "intro");
  
  if (introQuestion) {
    selected.push(introQuestion);
  }

  // Add the next best scoring questions (avoiding duplicates)
  for (const item of scoredQuestions) {
    if (selected.length >= 3) break;
    if (item.question.id !== "intro") {
      selected.push(item.question);
    }
  }

  // Fallback in case we don't have enough
  if (selected.length < 3) {
    OFFLINE_INTERVIEW_DB.forEach(q => {
      if (selected.length < 3 && !selected.some(s => s.id === q.id)) {
        selected.push(q);
      }
    });
  }

  return selected.slice(0, 3);
}

// Helper to evaluate answer and generate feedback response in offline mode
export function evaluateOfflineAnswer(
  question: OfflineQuestion,
  userAnswer: string,
  resumeText: string,
  language: string
): { feedback: string; nextPrompt: string } {
  const answerLower = userAnswer.trim().toLowerCase();
  const resumeLower = resumeText.toLowerCase();

  // 1. Check if the answer is empty or too short
  if (userAnswer.trim().length < 8) {
    const shortFeedback = language === "Hinglish"
      ? `Aapka answer bahut hi short hai. Koshish karein ki thoda aur detail me explain karein. Technical terms ka use karke complete sentence bolein.`
      : `Your answer is too short. Please try to expand and explain in detail using technical terminology.`;
    return { feedback: shortFeedback, nextPrompt: "" };
  }

  // 2. Score the answer by matching key terms
  let matchedTerms: string[] = [];
  question.keyTerms.forEach(term => {
    if (answerLower.includes(term.toLowerCase())) {
      matchedTerms.push(term);
    }
  });

  const matchPercentage = (matchedTerms.length / question.keyTerms.length) * 100;
  
  // 3. Extract relevant resume keywords to provide personalized suggestions
  let resumeMatches: string[] = [];
  question.keywords.forEach(keyword => {
    if (keyword !== "always_include" && resumeLower.includes(keyword)) {
      resumeMatches.push(keyword);
    }
  });

  // 4. Draft Feedback (Suggestions, Stored Answer, Motivation)
  let feedbackText = "";
  
  if (language === "Hinglish") {
    // Motivation (Prerna)
    let motivation = "";
    if (matchPercentage >= 60) {
      motivation = `🌟 **Bahut badhiya!** Aapka core technical point bilkul clear hai. Aapka answer high standard ka hai.`;
    } else if (matchPercentage >= 30) {
      motivation = `👍 **Achha effort hai!** Aapne basic concept ko chhua hai, par isme thoda aur detail jodna zaroori hai.`;
    } else {
      motivation = `💪 **Koshish acchi hai!** Interview simulation me answers dene se hi practice hoti hai. Don't worry, har turn ke sath aap seekhenge.`;
    }

    // Suggestions (Sujhav)
    let suggestions = "";
    if (matchedTerms.length < question.keyTerms.length) {
      const missing = question.keyTerms.filter(t => !matchedTerms.includes(t));
      suggestions = `\n\n💡 **Sujhav (Tip):** Answer me ye key terms cover karna behtar hoga: **${missing.join(", ")}**.\n`;
    }

    // Resume integration suggestion
    if (resumeMatches.length > 0) {
      suggestions += `Aapke resume me **${resumeMatches.join(", ")}** ka zikr hai. Apne answer me likhein ki aapne internships/projects me is control system par kaise kaam kiya hai, isse answer real lagega.`;
    } else {
      suggestions += `Aap is answer ko standard industrial practices ke sath jod kar batayein to impact aur behtar hoga.`;
    }

    // Stored Professional Answer
    const professionalAnswer = `\n\n✅ **Standard Professional Answer:**\n${question.a_hinglish}`;

    feedbackText = `${motivation}${suggestions}${professionalAnswer}`;
  } else {
    // English feedback
    let motivation = "";
    if (matchPercentage >= 60) {
      motivation = `🌟 **Excellent job!** Your technical command is very strong and you covered the core concept perfectly.`;
    } else if (matchPercentage >= 30) {
      motivation = `👍 **Good attempt!** You've got the basic concept right, but you need to pack it with more technical specifics.`;
    } else {
      motivation = `💪 **Keep practicing!** Speaking during mock sessions is the best way to improve. Let's build up your confidence.`;
    }

    let suggestions = "";
    if (matchedTerms.length < question.keyTerms.length) {
      const missing = question.keyTerms.filter(t => !matchedTerms.includes(t));
      suggestions = `\n\n💡 **Suggestion:** Try to include these key industry terms: **${missing.join(", ")}**.\n`;
    }

    if (resumeMatches.length > 0) {
      suggestions += `Since your resume mentions experience with **${resumeMatches.join(", ")}**, connect this concept to a real project or lab work you completed. It adds credibility.`;
    } else {
      suggestions += `Linking this response to plant-level operations will significantly increase your impact.`;
    }

    const professionalAnswer = `\n\n✅ **Standard Professional Answer:**\n${question.a_en}`;

    feedbackText = `${motivation}${suggestions}${professionalAnswer}`;
  }

  return { feedback: feedbackText, nextPrompt: "" };
}

// Backward compatibility wrapper for main offline controller
export function handleInterviewSession(message: string, isInitialSetup: boolean): string {
  if (isInitialSetup) {
    const questions = selectOfflineQuestions(message, "Fresher Student");
    return questions.map((q, i) => 
      `Q${i+1}: ${q.q_hinglish}\nA${i+1}: ${q.a_hinglish}`
    ).join("\n\n") + "\n\nFOLLOW_UP: Practice these answers out loud!";
  }
  return "Aapka response receive ho gaya hai. Practice karte raheine!";
}
