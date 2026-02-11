// --- SARATHI SMART CHAT LOGIC ---

const SARATHI_DB = {
  greetings: [
    "Namaste! 🙏 Main Sarathi hoon. Aaj main aapki career mein kaise madad kar sakta hoon?",
    "Hello Champion! 🚀 Career guidance chahiye ya interview tips?",
    "Swagat hai! Bataiye, aaj hum kis baare mein baat karein?"
  ],
  resume_tips: "📄 **Resume Tips:**\n1. Resume ko 1 page ka rakhein.\n2. 'Action Verbs' use karein (jaise: Managed, Created).\n3. Results ko numbers mein likhein (e.g., 'Increased efficiency by 20%').",
  
  job_search: "💼 **Job Search:**\nLinkedIn par active rahein aur HRs ko professional message bhejein. Naukri.com aur Instahyre par bhi profile update rakhein.",
  
  career_scope: "🚀 **Career Scope:**\nFood Industry mein 'Quality Assurance (QA)', 'R&D', 'Production', aur 'Supply Chain' mein bahut demand hai. Fresher salary ₹15k-₹25k se start hoti hai.",
  
  skills: "🛠 **Top Skills:**\nTechnical: HACCP, ISO 22000, GMP.\nSoft Skills: Communication, Teamwork aur Problem Solving.",
  
  motivation: "Haar mat maaniye! 💪 Har expert kabhi beginner tha. Apni learning par focus karein, job zaroor milegi.",

  unknown: "Maaf karein, main abhi Offline Mode mein hoon isliye har baat nahi samajh pa raha. 😅\n\nAap inme se kuch try karein:\n- 'Resume kaise banayein?'\n- 'Job kaise dhundein?'\n- 'Skills kya chahiye?'\n- 'Interview tips'"
};

export function handleSarathiChat(message: string): string {
  const msg = message.toLowerCase();

  // 1. GREETINGS (Hello, Hi, Kaise ho)
  if (msg.match(/\b(hello|hi|hey|namaste|start|good morning|morning|kaise|kese)\b/)) {
    return SARATHI_DB.greetings[Math.floor(Math.random() * SARATHI_DB.greetings.length)];
  }

  // 2. RESUME / CV
  if (msg.includes("resume") || msg.includes("cv") || msg.includes("biodata") || msg.includes("bio")) {
    return SARATHI_DB.resume_tips;
  }

  // 3. JOB / VACANCY / INTERNSHIP
  if (msg.includes("job") || msg.includes("vacancy") || msg.includes("opening") || msg.includes("work") || msg.includes("intern")) {
    return SARATHI_DB.job_search;
  }

  // 4. CAREER / SCOPE / SALARY / FUTURE
  if (msg.includes("career") || msg.includes("scope") || msg.includes("future") || msg.includes("salary") || msg.includes("paise") || msg.includes("growth")) {
    return SARATHI_DB.career_scope;
  }

  // 5. SKILLS / PADHAI / COURSE
  if (msg.includes("skill") || msg.includes("haccp") || msg.includes("iso") || msg.includes("course") || msg.includes("learn") || msg.includes("seekhna")) {
    return SARATHI_DB.skills;
  }

  // 6. MOTIVATION / SAD / WORRIED
  if (msg.includes("sad") || msg.includes("tension") || msg.includes("worried") || msg.includes("dar") || msg.includes("scared")) {
    return SARATHI_DB.motivation;
  }

  // 7. INTERVIEW (Direct Tip)
  if (msg.includes("interview")) {
    return "🎤 **Interview Tip:**\nInterview se pehle company ke baare mein research zaroor karein. Confidence banaye rakhein aur eye-contact karein.";
  }

  // Fallback (Agar kuch samajh na aaye)
  return SARATHI_DB.unknown;
}
