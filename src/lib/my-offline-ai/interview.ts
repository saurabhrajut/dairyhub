// --- INTERVIEW SIMULATION LOGIC ---

// Local Mock Data (Taaki agar aapke paas database nahi hai to bhi error na aaye)
const MOCK_INTERVIEW_DB = [
  {
    keyword: ["quality", "qa", "qc", "food safety"],
    questions: [
      { q: "What is the difference between QA and QC?", a: "QA is process-oriented (prevention), while QC is product-oriented (detection)." },
      { q: "Explain HACCP principles.", a: "Hazard Analysis Critical Control Point involves 7 principles to ensure food safety." }
    ]
  },
  {
    keyword: ["production", "manufacturing"],
    questions: [
      { q: "How do you handle production targets under pressure?", a: "I prioritize tasks, communicate with the team, and ensure safety isn't compromised." }
    ]
  },
  {
    keyword: ["always_include"], // Yeh hamesha poocha jayega
    questions: [
      { q: "Tell me about yourself.", a: "Start with your education, relevant experience, and why you are interested in this role." },
      { q: "Why do you want to join the food industry?", a: "Express your passion for food science and impact on consumer health." }
    ]
  }
];

// Helper to get questions
function generateQuestionsFromResume(resumeText: string) {
  const resumeLower = resumeText.toLowerCase();
  let relevantQuestions: { q: string; a: string }[] = [];
  const seenQuestions = new Set<string>();

  // 1. Always Include Questions
  const alwaysInclude = MOCK_INTERVIEW_DB.find(item => item.keyword.includes("always_include"));
  if (alwaysInclude) {
    alwaysInclude.questions.forEach(q => {
      relevantQuestions.push(q);
      seenQuestions.add(q.q);
    });
  }

  // 2. Keyword Matching
  MOCK_INTERVIEW_DB.forEach(category => {
    if (category.keyword.includes("always_include")) return;
    
    // Check if resume contains any keyword from this category
    const hasKeyword = category.keyword.some(k => resumeLower.includes(k));
    
    if (hasKeyword) {
      category.questions.forEach(q => {
        if (!seenQuestions.has(q.q)) {
          relevantQuestions.push(q);
          seenQuestions.add(q.q);
        }
      });
    }
  });

  // Return top 3 unique questions
  return relevantQuestions.slice(0, 3);
}

export function handleInterviewSession(message: string, isInitialSetup: boolean): string {
  
  // Case 1: START (Jab Resume upload hota hai)
  if (isInitialSetup) {
    const questions = generateQuestionsFromResume(message);
    
    if (questions.length === 0) {
       return "Muje resume mein keywords nahi mile, par chaliye basic introduction se shuru karte hain.\n\nQ1: Tell me about yourself?";
    }

    // Output formatting (Sarathi UI format)
    return questions.map((q, i) => 
      `Q${i+1}: ${q.q}\nA${i+1}: ${q.a}`
    ).join("\n\n") + "\n\nFOLLOW_UP: Great! Shall we start practicing these answers?";
  }

  // Case 2: FEEDBACK (Jab user answer deta hai)
  return "Bahut badhiya! 👍 Aapka jawab clear tha. \n\nTip: Koshish karein ki apne answer mein koi real-life example add karein. \n\nNext Question: What is your biggest weakness?";
}
