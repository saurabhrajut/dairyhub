// --- SARATHI GENERAL CHAT LOGIC ---

const SARATHI_DB = {
  greetings: [
    "Namaste! 🙏 Main Sarathi hoon. Aaj main aapki career mein kaise madad kar sakta hoon?",
    "Hello! Kaise hain aap? Career guidance ke liye main taiyaar hoon.",
    "Swagat hai! 🚀 Job search ho ya interview, main taiyaar hoon."
  ],
  resume_tips: "Resume Tip: Apne resume mein 'Action Verbs' use karein (jaise Managed, Created, Led) aur results ko numbers mein dikhayein (e.g., 'Increased efficiency by 20%').",
  job_search: "Job search ke liye LinkedIn aur Naukri.com par profile update rakhein. HRs ko direct message karna bhi ek accha tareeka hai.",
  unknown: "Main abhi Offline Mode mein hoon. Aap mujhse 'Interview', 'Resume', ya 'Food Industry' ke baare mein puchein."
};

export function handleSarathiChat(message: string): string {
  const msg = message.toLowerCase();

  // 1. Greetings
  if (msg.match(/\b(hello|hi|hey|namaste|start)\b/)) {
    return SARATHI_DB.greetings[Math.floor(Math.random() * SARATHI_DB.greetings.length)];
  }

  // 2. Specific Topics
  if (msg.includes("resume") || msg.includes("cv")) return SARATHI_DB.resume_tips;
  if (msg.includes("job") || msg.includes("vacancy")) return SARATHI_DB.job_search;

  // 3. Fallback
  return SARATHI_DB.unknown;
}
