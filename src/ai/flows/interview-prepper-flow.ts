
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

**Your Task:**
1.  **Analyze the Resume:** Carefully read the user's resume (provided as 'resumeText') and their target 'jobField'.
2.  **Generate Questions:** Based on the resume and job field, create a set of relevant, challenging interview questions.
    *   **Resume-Based Questions:** Ask specific questions about their listed skills, experiences, projects, and education. For example, "In your internship at [Company Name], you mentioned working on [Project]. Can you elaborate on the challenges you faced and how you overcame them?"
    *   **Field-Related Questions:** Ask broader technical and behavioral questions relevant to the 'jobField'. For example, for a "Quality Control" role, you might ask, "How would you handle a situation where a batch of raw milk fails the platform tests but the production manager insists on using it?"
    *   **Behavioral Questions:** Include standard behavioral questions like "Tell me about a time you worked in a team" or "What are your greatest strengths and weaknesses?"
3.  **Provide Expert Answers:** For each question you generate, you MUST provide a detailed, well-structured, and correct answer. The answer should be comprehensive enough to serve as a high-quality study guide for the user. Explain the 'why' behind the answer.
4.  **Maintain Conversational Context:** Use the provided 'history' to have a flowing, continuous conversation. Refer back to previous points if relevant. Don't treat every user message as a new start.
5.  **Initial vs. Follow-up:**
    *   If 'initialRequest' is true, generate a diverse set of 3-4 initial questions based on the resume and job field.
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

    **Job Field:** {{jobField}}
    **Language for Response:** {{language}}

    {{#if history}}
    **Conversation History:**
    {{#each history}}
        **{{role}}:** {{content.[0].text}}
    {{/each}}
    {{/if}}

    {{#if initialRequest}}
    Please start the interview by asking 3-4 initial questions based on the provided resume and job field.
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
        const { output } = await interviewPrepperPrompt(input);
        return output!;
    }
);

export async function interviewPrepper(input: InterviewPrepperInput): Promise<InterviewPrepperOutput> {
  return interviewPrepperFlow(input);
}
