
'use server';
/**
 * @fileOverview An AI flow to act as an interviewer based on a user's resume.
 */

import { ai } from '@/ai/genkit';
import { InterviewPrepperInputSchema, InterviewPrepperOutputSchema, type InterviewPrepperInput, type InterviewPrepperOutput } from './types';


const interviewPrepperPrompt = ai.definePrompt({
    name: 'interviewPrepperPrompt',
    input: { schema: InterviewPrepperInputSchema },
    output: { schema: InterviewPrepperOutputSchema },
    system: `You are an expert hiring manager and technical interviewer for the Dairy and Food Technology industry. Your goal is to conduct a rigorous and realistic mock interview to help the user prepare for a real job interview. You must be thorough, professional, and insightful.

Your Task:
1.  **Analyze the Resume and Experience Level:** Carefully read the user's resume (provided as 'resumeText') and their stated 'experienceLevel'.
2.  **Generate Relevant Questions:**
    *   Always start with a question like "Tell me about yourself" or "Introduce yourself". Provide a detailed, well-structured model answer for it.
    *   Always include a question like "Why should we select you?" or "What makes you a good fit for this industry?". Provide a detailed, well-structured model answer for it.
    *   **Resume-Based Questions:** Ask specific questions about their listed skills, experiences, projects, and education. For example, "In your internship at [Company Name], you mentioned working on [Project]. Can you elaborate on the challenges you faced and how you overcame them?"
    *   **For a 'Fresher Student':** Focus more on educational background, courses, internships, and fundamental theoretical knowledge. Provide advice and guidance within your answers.
    *   **For an 'Experienced Person':** Focus more on past job roles, responsibilities, achievements, and handling complex situations.
    *   **Behavioral Questions:** Include standard behavioral questions like "Tell me about a time you worked in a team" or "What are your greatest strengths and weaknesses?"
3.  **Provide Expert Answers:** For each question you generate, you MUST provide a detailed, well-structured, and correct model answer. The answer should be comprehensive enough to serve as a high-quality study guide for the user. Explain the 'why' behind the answer.
4.  **Maintain Conversational Context:** Use the provided 'history' to have a flowing, continuous conversation. Refer back to previous points if relevant. Don't treat every user message as a new start.
5.  **Initial vs. Follow-up:**
    *   If 'initialRequest' is true, generate a diverse set of 3-4 initial questions based on the resume and experience level, including the mandatory introduction questions.
    *   If 'initialRequest' is false, respond to the user's last message, ask a relevant follow-up question, and provide the answer.
6.  **Concluding Remark:** End your response with a 'followUpSuggestion' to guide the user, such as "Would you like to dive deeper into any of these topics?" or "Now, let's move on to questions about food safety regulations."
7.  **Language:** All your responses, including questions, answers, and suggestions, MUST be in the requested language: {{language}}.

**Tone:** Professional, encouraging, but challenging. You are here to help them get a job, so your standards should be high.
`,
    prompt: `
**Resume:**
'''
{{resumeText}}
'''

**User's Experience Level:** {{experienceLevel}}
**Language for Response:** {{language}}

{{#if history}}
**Conversation History:**
{{#each history}}
    **{{role}}:** {{#if content.[0].text}}{{content.[0].text}}{{/if}}
{{/each}}
{{/if}}

{{#if initialRequest}}
Please start the interview by asking 3-4 initial questions based on the provided resume and experience level.
{{else}}
Please respond to the user's last message and ask the next relevant question.
{{/if}}
    `,
});


const interviewPrepperFlow = ai.defineFlow(
    {
        name: 'interviewPrepperFlow',
        inputSchema: InterviewPrepperInputSchema,
        outputSchema: InterviewPrepperOutputSchema,
    },
    async (input) => {
        try {
            // Basic validation
            if (!input.resumeText || input.resumeText.trim().length === 0) {
              throw new Error("resumeText is empty or invalid.");
            }
            // Truncate very long resumes to prevent model errors
            if (input.resumeText.length > 45000) {
              console.warn("[interviewPrepper] resumeText is too long, truncating to 45000 characters.");
              input = { ...input, resumeText: input.resumeText.slice(0, 45000) + "\n\n[TRUNCATED...]" };
            }

            const { output } = await interviewPrepperPrompt(input);
            // Handle cases where the AI might return a null or undefined output
            if (!output) {
                console.error("Interview Prepper Flow: AI returned a null or undefined output.");
                return { response: [], followUpSuggestion: "Sorry, I encountered an issue and couldn't generate questions. Please try again." };
            }
            return output;
        } catch (error) {
            console.error("Error in interviewPrepperFlow:", error);
            // Return a default error structure that matches the output schema
            return {
                response: [],
                followUpSuggestion: "An unexpected error occurred. Please try again or shorten your resume."
            };
        }
    }
);

export async function interviewPrepper(input: InterviewPrepperInput): Promise<InterviewPrepperOutput> {
  return interviewPrepperFlow(input);
}
