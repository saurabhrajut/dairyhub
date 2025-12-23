import { 
    Bot, Lightbulb, Factory, FlaskConical, Beaker, Scale, 
    Calculator, Settings, TestTube, ClipboardCheck, CheckSquare, 
    Droplet, PackageCheck, Lock, DollarSign, Microscope, 
    Recycle, Bug, ShieldCheck, FileSpreadsheet, Search, Wind, 
    Users, GraduationCap, Atom, Combine, ShieldAlert, Milk, FileText 
} from "lucide-react";

export interface GyanAiSubTopic {
    keywords: string[];
    content: string;
}

export interface GyanAiTopic {
    id: string;
    title: string;
    icon: React.ElementType;
    color?: { bg: string; text: string; };
    intro: string;
    subtopics: GyanAiSubTopic[];
}

interface GyanAiContent {
    [key: string]: GyanAiTopic;
}

// ====================================================================
// SHARED MASTER CONTENT (Detailed English + Hinglish Explanations)
// ====================================================================
const sharedContent = {
    fallback: "I'm sorry, I don't have specific information on that sub-topic. Could you please rephrase or ask about a broader area within this domain?",
    topics: {
        'dairy-tech': {
            id: 'dairy-tech',
            title: "Dairy Technology",
            icon: Milk,
            color: { bg: 'bg-blue-50', text: 'text-blue-500' },
            intro: "Comprehensive Knowledge Base: From raw milk chemistry to advanced processing, engineering, and quality assurance.",
            subtopics: [
                // ==========================================
                // TOPIC 1: MILK CHEMISTRY & COMPOSITION
                // ==========================================
                {
                    keywords: ["milk definition", "composition", "specific gravity", "ph", "freezing point", "buffalo milk"],
                    content: `**Scientific Definition & Composition:**
Milk is defined as the lacteal secretion, practically free from colostrum, obtained by the complete milking of one or more healthy milch animals.

**Chemical Structure:**
1.  **Fat:** Exists as an oil-in-water emulsion (globules protected by FGM).
2.  **Casein (Protein):** Exists as a colloidal suspension (micelles).
3.  **Lactose & Minerals:** Exist in a true solution.

**Average Composition (Cow vs. Buffalo):**
* **Buffalo Milk:** ~7-8% Fat | ~9.5% SNF. (Higher Calcium, best for Mozzarella/Khoa).
* **Cow Milk:** ~3.5-4% Fat | ~8.5% SNF. (Contains Beta-Carotene, causing yellowish color).

**Physical Properties:**
* **Specific Gravity:** 1.028 - 1.032 (Corrected at 20°C).
* **Freezing Point:** -0.530°C to -0.550°C (The most reliable test for added water).
* **pH:** 6.6 - 6.8 (Fresh milk).

**Hinglish Explanation (Detail):**
Dairy technology ki shuruwat doodh ko samajhne se hoti hai. Doodh sirf ek safed liquid nahi hai, balki chemicals ka ek complex mixture hai. Isme teen tarah ke systems kaam karte hain: 'Emulsion' (fat), 'Colloidal' (protein), aur 'Solution' (sugar/minerals).
Cow milk patla hota hai aur peela (yellowish) hota hai, jabki Buffalo milk safed aur gaadha hota hai.
Agar koi aapse puche ki doodh mein paani milaya hai ya nahi, to sabse best test 'Freezing Point' check karna hai. Shuddh doodh hamesha -0.54°C par jamta hai. Agar usme paani milaya gaya, to wo 0°C ke kareeb jamne lagega (Kyuki paani 0 par jamta hai). Ye ek scientific proof hai.`
                },

                // ==========================================
                // TOPIC 2: MICROBIOLOGY & QUALITY TESTING
                // ==========================================
                {
                    keywords: ["platform tests", "mbrt", "gerber", "adulteration", "cob", "alcohol test"],
                    content: `**Microbiology & Quality Assurance Tests:**
Milk is a highly perishable commodity and a perfect culture medium for bacteria.

1.  **Platform Tests (Reception Dock):**
    * **COB (Clot on Boiling):** If milk clots, acidity is >0.22% (Reject).
    * **Alcohol Test:** Mix 1:1 with 68% Ethanol. Checks heat stability for sterilization.
2.  **Chemical Analysis:**
    * **Fat (Gerber Method):** Uses Sulphuric Acid (dissolves casein) and Iso-Amyl Alcohol (separates fat). Centrifuged at 1100 RPM.
    * **SNF:** Calculated using Lactometer reading. Formula: (CLR/4) + (0.21 × Fat) + 0.36.
3.  **Microbiological Quality (MBRT):**
    * **Methylene Blue Reduction Test:** Measures bacterial load. The time taken for the blue dye to fade is proportional to quality. (>4 hours = Good).
4.  **Adulteration Tests:**
    * **Urea:** DMAB Test (Yellow color).
    * **Starch:** Iodine Test (Blue color).

**Hinglish Explanation (Detail):**
Jab doodh plant mein aata hai, to hum sabse pehle 'Platform Tests' karte hain. Sabse zaroori hai **MBRT test**. Isme hum doodh mein neela rang (Methylene Blue) dalte hain. Agar doodh mein bacteria zyada honge, to wo oxygen kha jayenge aur neela rang gayab ho jayega.
**Gerber Test** mein hum acid ka use karke doodh ko jala dete hain, sirf fat bachta hai jo upar tairta hai. Milawat pakadne ke liye simple chemical reactions use hote hain—jaise Iodine dalne par agar doodh neela ho jaye, to matlab Maida/Aloo (Starch) milaya gaya hai.`
                },

                // ==========================================
                // TOPIC 3: THERMAL PROCESSING (PASTEURIZATION)
                // ==========================================
                {
                    keywords: ["pasteurization", "htst", "homogenization", "uht", "alkaline phosphatase"],
                    content: `**Pasteurization & Homogenization:**
**Pasteurization:** Heat treatment to secure public health by killing pathogens (Target: *Mycobacterium tuberculosis* & *Coxiella burnetii*).

1.  **HTST (High Temperature Short Time):** 72°C for 15 seconds. Uses a Plate Heat Exchanger (PHE) with >90% regeneration efficiency.
2.  **Validation:** Verified by the **Alkaline Phosphatase Test**. This enzyme is destroyed at 71.7°C. A negative test confirms safe milk.
3.  **UHT (Ultra High Temp):** 135-150°C for 2-4 seconds. Packed aseptically for long shelf life (no fridge needed).

**Homogenization:**
Mechanical process using high pressure (2000-2500 PSI) to break fat globules from <10 microns to <2 microns.
* **Principle:** Stokes' Law (Reduces the velocity of fat rise).
* **Effect:** Prevents cream layer formation, makes milk whiter and more viscous.

**Hinglish Explanation (Detail):**
Pasteurization ka main maqsad doodh ko ubalna nahi, balki usse 'Safe' banana hai. HTST method mein hum doodh ko sirf 15 second ke liye 72°C par garam karke turant thanda karte hain. Isse vitamins bache rehte hain.
**Homogenization** ka matlab hai fat ko todna. Raw doodh mein malai upar aa jati hai. Homogenizer machine doodh ko ek chote ched (valve) se itne pressure se nikaalti hai ki fat ke tukde ho jate hain aur wo pure doodh mein mix ho jata hai.`
                },

                // ==========================================
                // TOPIC 4: FAT RICH PRODUCTS (BUTTER/GHEE)
                // ==========================================
                {
                    keywords: ["butter", "ghee", "churning", "phase inversion", "overrun"],
                    content: `**Butter and Ghee Technology:**
**Butter Making:**
Relies on **Phase Inversion** (Oil-in-Water $\\rightarrow$ Water-in-Oil).
* **Churning:** Agitation breaks the Fat Globule Membrane (FGM), causing fat clumps to join.
* **Overrun:** The increase in volume due to air/moisture (Max 25%).

**Ghee Production:**
Ghee is clarified butterfat (99.5% Fat).
* **Process:** Butter is heated to 110°C - 120°C. Moisture evaporates.
* **Flavor:** Developed via **Maillard Reaction** (browning of lactose/protein residue).
* **Texture:** Granular crystals (Danedar) are achieved by **slow cooling** to 29°C (crystallization of Stearin fraction).

**Hinglish Explanation (Detail):**
Butter banana 'Phase Inversion' hai. Jab hum cream ko math'te (churn) hain, to fat ki parat toot'ti hai aur wo aapas mein judne lagta hai.
Ghee banane ke liye makkhan ko tab tak garam karte hain jab tak saara paani ud na jaye (115°C). Jo niche brown 'kurchan' bachti hai, wahi Ghee ko asli khushboo deti hai. Ghee ko 'Danedar' banane ke liye usse banane ke baad turant fridge mein mat rakho, dheere-dheere thanda hone do.`
                },

                // ==========================================
                // TOPIC 5: FERMENTED PRODUCTS (CHEESE/DAHI)
                // ==========================================
                {
                    keywords: ["cheese", "dahi", "yoghurt", "fermentation", "rennet", "mozzarella"],
                    content: `**Cheese, Yoghurt & Fermentation:**
**Fermentation:** Lactic Acid Bacteria (LAB) convert Lactose $\\rightarrow$ Lactic Acid.

1.  **Dahi vs. Yoghurt:**
    * **Dahi:** Natural mixed microflora.
    * **Yoghurt:** Specific culture (*Streptococcus thermophilus* & *Lactobacillus bulgaricus* in 1:1 ratio). Incubated at 42°C.
2.  **Cheese (Rennet Coagulation):**
    * **Enzyme:** Rennet (Chymosin) cuts Kappa-Casein hairs, destabilizing micelles to form a gel (Curd).
    * **Mozzarella:** Involves **"Pasta Filata"** (stretching curd in hot water) to align protein fibers for elasticity.
    * **Cheddar:** Involves **"Cheddaring"** (stacking curd blocks) to develop acidity.

**Hinglish Explanation (Detail):**
Paneer acid se banta hai, par Cheese enzyme (Rennet) se banta hai. Rennet doodh ke protein (Casein) ko ek jaal (network) mein baandh deta hai.
Mozzarella (Pizza cheese) ki stretchability tab aati hai jab hum uske curd ko garam paani mein daal kar kheenchte hain. Yoghurt aur Dahi mein farak bacteria ka hai—Yoghurt ke bacteria controlled hote hain jo 42°C par kaam karte hain.`
                },

                // ==========================================
                // TOPIC 6: DAIRY ENGINEERING & CIP
                // ==========================================
                {
                    keywords: ["cip", "cleaning in place", "lye", "acid wash", "sanitization"],
                    content: `**Dairy Plant Engineering & CIP:**
Hygiene is maintained via **CIP (Cleaning In Place)** systems—automatic cleaning without disassembly.

**The 5-Step CIP Cycle:**
1.  **Recovery/Rinse:** Water removes loose soil (90% cleaning).
2.  **Alkali Wash (Lye):** 1-2% Caustic Soda (NaOH) at 75°C. **Removes Fat & Protein.**
3.  **Inter-Rinse:** Water wash.
4.  **Acid Wash:** 0.5% Nitric Acid at 65°C. **Removes Milk Stone (Minerals/Calcium).**
5.  **Sanitization:** Hot water (85°C) kills residual bacteria.

**Hinglish Explanation (Detail):**
Dairy plant mein pipes hath se saaf nahi hote, **CIP System** se hote hain.
Pehle **Caustic Soda (Alkali)** ghumate hain jo chiknai (fat) ko saaf karta hai. Phir **Acid** ghumate hain jo safed parat (calcium/milk stone) ko hatata hai. Last mein garam paani se bacteria maare jate hain. Bina iske doodh kharab ho jayega.`
                }
            ],
        },
        'food-safety': {
            id: 'food-safety',
            title: "Food Safety & Quality",
            icon: ShieldCheck,
            color: { bg: 'bg-green-50', text: 'text-green-500' },
            intro: "Hello! I am your Gyan AI for Food Safety. Feel free to ask about HACCP, ISO 22000, pathogens, or quality control.",
            subtopics: [
                { keywords: ["haccp"], content: "HACCP stands for Hazard Analysis and Critical Control Points. It's a preventive system that identifies biological, chemical, and physical hazards and establishes control measures (CCPs) to eliminate them." },
                { keywords: ["iso 22000", "iso"], content: "ISO 22000 is an international standard for Food Safety Management Systems (FSMS). It ensures safety throughout the entire food chain from farm to fork." },
                { keywords: ["listeria", "pathogen"], content: "Listeria monocytogenes is a dangerous pathogen because it can grow at refrigeration temperatures (4°C). Strict environmental monitoring is crucial to control it." },
            ],
        },
        'food-processing': {
            id: 'food-processing',
            title: "Food Processing",
            icon: Factory,
            color: { bg: 'bg-orange-50', text: 'text-orange-500' },
            intro: "Greetings! Ask me about evaporation, spray drying, extrusion, packaging, or other processing techniques.",
            subtopics: [
                { keywords: ["spray drying", "powder"], content: "Spray drying produces powder from liquid. Concentrated milk is atomized into hot air, causing instant evaporation." },
                { keywords: ["extrusion"], content: "Extrusion forces material through a die to create shapes. Used for pasta, cereals, and snacks." },
                { keywords: ["packaging", "map"], content: "Modified Atmosphere Packaging (MAP) extends shelf life by modifying the gas composition inside the package (reducing oxygen)." },
            ],
        },
        'career-guidance': {
            id: 'career-guidance',
            title: "Career Guidance",
            icon: GraduationCap,
            color: { bg: 'bg-purple-50', text: 'text-purple-500' },
            intro: "Hello! I can help you with job roles, skills, and career paths in the Food and Dairy Industry.",
            subtopics: [
                { keywords: ["quality control", "qc officer"], content: "QC Officers test raw materials and products. Requires analytical skills and knowledge of lab procedures. B.Tech Food Tech is a common qualification." },
                { keywords: ["production", "manager"], content: "Production Managers oversee manufacturing, staff, and efficiency. Requires leadership and technical understanding." },
                { keywords: ["r&d", "scientist"], content: "R&D Scientists create new products. Requires creativity, scientific knowledge, and often a Master's or PhD." },
            ],
        },
        'interview': {
            id: 'interview',
            title: "Interview Preparation",
            icon: FileText,
            color: { bg: 'bg-indigo-50', text: 'text-indigo-500' },
            intro: "Let's prepare! Upload your resume and select your experience level.",
            subtopics: []
        },
    }
};

// ====================================================================
// EXPORTED CONTENT MAP (Language Switching)
// ====================================================================
export const gyanAiContent: { en: GyanAiContent; hi: GyanAiContent } = {
    // English Mode: Uses the shared content directly
    en: sharedContent,

    // Hinglish Mode: Overrides Titles/Intros/Subtopics to Hinglish
    hi: {
        fallback: "Sorry, mere paas us topic par specific information nahi hai. Kya aap koi aur sawaal puch sakte hain?",
        topics: {
            'dairy-tech': {
                ...sharedContent.topics['dairy-tech'],
                title: "Dairy Technology",
                intro: "Namaste! Main aapka Dairy Expert hu. Yahan aapko Milk Processing, Quality Testing, aur Engineering ki poori jaankari detailed Hinglish mein milegi.",
                // We use the same subtopics because they already contain the rich English+Hinglish mix
                subtopics: sharedContent.topics['dairy-tech'].subtopics 
            },
            'food-safety': {
                id: 'food-safety',
                title: "Food Safety & Quality",
                icon: ShieldCheck,
                color: { bg: 'bg-green-50', text: 'text-green-500' },
                intro: "Hello! Main Food Safety aur Quality ka expert hu. Aap mujhse HACCP, ISO 22000, hygiene practices ya quality control ke baare mein puch sakte hain.",
                subtopics: [
                    { keywords: ["haccp"], content: "HACCP ka matlab hai Hazard Analysis and Critical Control Points. Ye ek preventive system hai jo food safety ensure karta hai. Isme hum production process mein biological, chemical, aur physical hazards ko identify karte hain aur unhe rokne ke liye Critical Control Points (CCPs) set karte hain." },
                    { keywords: ["iso 22000", "iso"], content: "ISO 22000 Food Safety Management Systems (FSMS) ka international standard hai. Ye HACCP ke principles ko management system ke sath combine karta hai taaki 'Farm to Fork' (khet se khane tak) safety bani rahe." },
                    { keywords: ["listeria", "pathogen"], content: "Listeria monocytogenes ek dangerous bacteria hai kyunki ye fridge ke temperature (4°C) par bhi grow kar sakta hai. Ye aksar geele environments jaise drains mein paya jata hai, isliye safai bahut zaroori hai." },
                ],
            },
            'food-processing': {
                id: 'food-processing',
                title: "Food Processing",
                icon: Factory,
                color: { bg: 'bg-orange-50', text: 'text-orange-500' },
                intro: "Greetings! Food Processing expert hone ke naate, main aapko evaporation, spray drying, extrusion, aur packaging technologies ke baare mein bata sakta hu. Boliye kya janna hai?",
                subtopics: [
                    { keywords: ["spray drying", "powder"], content: "Spray drying ek method hai liquid se dry powder banane ka. Dairy industry mein isse milk powder banta hai. Gaadhe doodh (concentrated milk) ko garam hawa mein spray kiya jata hai, jisse paani turant ud jata hai aur powder ban jata hai." },
                    { keywords: ["extrusion"], content: "Extrusion wo process hai jisme material ko ek die (saancha) ke through push karke specific shape di jati hai. Food industry mein isse pasta, snacks (jaise Kurkure), aur breakfast cereals banaye jate hain." },
                    { keywords: ["packaging", "map"], content: "Modified Atmosphere Packaging (MAP) shelf life badhane ki technique hai. Isme hum packet ke andar ki hawa badal dete hain—oxygen kam kar dete hain aur Nitrogen ya CO2 bhar dete hain taaki khana jaldi kharab na ho." },
                ],
            },
            'career-guidance': {
                id: 'career-guidance',
                title: "Career Guidance",
                icon: GraduationCap,
                color: { bg: 'bg-purple-50', text: 'text-purple-500' },
                intro: "Hello! Main aapka career guidance AI hu. Main aapko Food aur Dairy Technology industry mein job roles, skills aur career paths ke baare mein bata sakta hu. Bataiye main kaise madad karu?",
                subtopics: [
                    { keywords: ["quality control", "qc officer"], content: "Quality Control (QC) Officer raw materials aur finished products ki testing ke liye responsible hota hai. Is role ke liye aapko lab testing (jaise Fat, Acidity, Micro) aani chahiye. B.Tech Food Tech ek common qualification hai." },
                    { keywords: ["production", "manager"], content: "Production Manager poore manufacturing process ko oversee karta hai. Wo staff manage karta hai, production plan banata hai aur efficiency ensure karta hai. Iske liye leadership skills aur machinery ki samajh honi chahiye." },
                    { keywords: ["r&d", "research", "scientist"], content: "R&D Scientist naye products banane ya existing products ko improve karne par kaam karta hai. Isme nayi recipes aur experiments karne padte hain. Is role ke liye creativity aur scientific knowledge bahut zaroori hai (M.Tech/PhD preferred)." },
                ],
            },
            'interview': {
                id: 'interview',
                title: "Interview Ki Taiyari",
                icon: FileText,
                color: { bg: 'bg-indigo-50', text: 'text-indigo-500' },
                intro: "Chalo interview ki taiyari karein! Apna resume upload karein aur apna experience level select karein taaki hum mock interview shuru kar sakein.",
                subtopics: []
            },
        }
    }
};
