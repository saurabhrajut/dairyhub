// src/lib/interview-data.ts

export type QuestionData = {
  keyword: string[]; // Keywords to match in resume
  questions: {
    q: string;
    a: string;
  }[];
};

export const INTERVIEW_DB: QuestionData[] = [
  // --- 1. HR & Behavior (Always included) ---
  {
    keyword: ["always_include"], 
    questions: [
      {
        q: "Tell me about yourself.",
        a: "Structure your answer: 1. Current Role/Education, 2. Key Experiences/Projects, 3. Future Goals. Keep it professional and relevant to the job."
      },
      {
        q: "Why should we hire you?",
        a: "Highlight your unique skills found in your resume. Connect your past achievements to the company's future goals."
      }
    ]
  },
  
  // --- 2. Dairy & Food Tech Specifics ---
  {
    keyword: ["dairy", "milk", "food technology", "processing"],
    questions: [
      {
        q: "Explain the difference between Pasteurization and Sterilization.",
        a: "Pasteurization kills pathogenic bacteria (approx 72°C for 15s), while Sterilization kills all microorganisms (above 100°C). Sterilized milk has a longer shelf life."
      },
      {
        q: "What is HACCP and why is it important?",
        a: "HACCP stands for Hazard Analysis Critical Control Point. It is a systematic preventive approach to food safety from biological, chemical, and physical hazards."
      }
    ]
  },
  {
    keyword: ["quality", "qa", "qc", "testing"],
    questions: [
      {
        q: "How do you handle a batch of products that failed quality testing?",
        a: "I would immediately quarantine the batch, document the non-conformance, perform a root cause analysis, and decide whether to rework or discard based on safety standards."
      }
    ]
  },

  // --- 3. Management & Soft Skills ---
  {
    keyword: ["team", "lead", "manager", "management", "project"],
    questions: [
      {
        q: "Describe a time you managed a conflict within your team.",
        a: "Focus on the 'STAR' method: Situation, Task, Action, Result. Explain how you listened to both sides and found a collaborative solution."
      }
    ]
  },

  // --- 4. Technical/Coding (Example) ---
  {
    keyword: ["javascript", "react", "node", "coding", "developer"],
    questions: [
      {
        q: "Explain the concept of 'Event Loop' in JavaScript.",
        a: "The Event Loop allows JavaScript to perform non-blocking operations by offloading tasks to the system kernel whenever possible."
      }
    ]
  }
];
