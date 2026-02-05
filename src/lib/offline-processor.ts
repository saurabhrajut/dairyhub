// src/lib/offline-processor.ts
import { INTERVIEW_DB } from './interview-data';

export function generateOfflineInterview(resumeText: string, experienceLevel: string) {
  const normalizedText = resumeText.toLowerCase();
  let selectedQuestions: { question: string; answer: string }[] = [];

  // 1. "Always Include" wale questions (HR Round)
  const hrData = INTERVIEW_DB.find(item => item.keyword.includes("always_include"));
  if (hrData) {
    selectedQuestions.push(...hrData.questions.map(i => ({ question: i.q, answer: i.a })));
  }

  // 2. Keyword Matching Logic
  INTERVIEW_DB.forEach((category) => {
    if (category.keyword.includes("always_include")) return; // Skip HR (already added)

    // Check agar resume me koi bhi keyword match ho raha hai
    const isMatch = category.keyword.some(key => normalizedText.includes(key));
    
    if (isMatch) {
      // Agar match hua, to us category ke saare questions le lo
      // (Advanced: Aap random 2-3 pick kar sakte ho taaki list lambi na ho)
      const mapped = category.questions.map(q => ({ question: q.q, answer: q.a }));
      selectedQuestions.push(...mapped);
    }
  });

  // 3. Agar koi technical keyword match nahi hua, to Generic fallback
  if (selectedQuestions.length <= 2) {
     selectedQuestions.push({
       question: "What was the most challenging project you worked on?",
       answer: "Discuss a specific project from your resume. Focus on the problem, your approach, and the final outcome."
     });
  }

  // 4. Experience Level Tweak (Optional Text change)
  let followUpMsg = "Keep practicing these answers!";
  if (experienceLevel === "Fresher Student") {
    followUpMsg = "As a fresher, focus on your basics and confidence. Good luck!";
  } else {
    followUpMsg = "As an experienced professional, try to add real-life metrics to your answers.";
  }

  return {
    response: selectedQuestions,
    followUpSuggestion: followUpMsg
  };
}
