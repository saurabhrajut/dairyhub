
'use server';
import { ai } from '@/ai/genkit';
import { InterviewPrepperInputSchema, InterviewPrepperOutputSchema, type InterviewPrepperInput, type InterviewPrepperOutput } from './types';

/**
 * Primary prompt (uses your strict schema).
 * If provider returns structured output exactly matching schema, we use it.
 */
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


/**
 * Fallback prompt: ask the model to emit a plain JSON string inside a single text field.
 * This is more permissive and helps when strict schema validation fails.
 */
const interviewPrepperFallbackPrompt = ai.definePrompt({
  name: 'interviewPrepperFallbackPrompt',
  input: { schema: InterviewPrepperInputSchema },
  // output here is simple text (we'll parse JSON from text)
  output: { schema: { type: 'object', properties: { rawText: { type: 'string' } }, required: ['rawText'] } },
  system: `You are an expert hiring manager and technical interviewer... (same tone)`,
  prompt: `
Given the following resume and experience level ({{experienceLevel}}), produce a JSON object with two keys:
1) "response": an array of objects with keys "question" and "answer" (answer = model answer / guideline).
2) "followUpSuggestion": a single string with the next step suggestion.

Return ONLY valid JSON (no explanatory text) as the value of "rawText". Example of the JSON you should produce:

{
  "response": [{"question":"Tell me about yourself","answer":"Suggested answer..."}],
  "followUpSuggestion": "Would you like to dive deeper..."
}

Resume:
'''
{{resumeText}}
'''

History (if present):
{{#if history}}
{{#each history}}
- {{role}}: {{#if content.[0].text}}{{content.[0].text}}{{/if}}
{{/each}}
{{/if}}

If initialRequest is true, create 3-4 initial questions (including Intro and Why hire you). Otherwise answer the last user message and ask the next relevant question.
`
});

/**
 * Helper: call prompt with retries
 */
async function callWithRetries<T>(fn: (input:any)=>Promise<T>, input: any, tries = 2) {
  let lastErr: any = null;
  for (let i = 0; i <= tries; i++) {
    try {
      const res = await fn(input);
      return res;
    } catch (err) {
      lastErr = err;
      console.error(`[interviewPrepper] attempt ${i} failed`, err);
      // small backoff
      await new Promise(r => setTimeout(r, 700 * (i + 1)));
    }
  }
  throw lastErr;
}

/**
 * Optional helper: summarize in chunks (non-destructive).
 * NOTE: This DOES NOT modify user's stored resume. It only makes a temporary summary
 * to reduce prompt size if your provider/model needs it.
 */
async function summarizeResumeIfNeeded(resumeText: string) {
  // If resume is small (<30k chars) skip summarization
  if (!resumeText || resumeText.length < 30000) return resumeText;

  console.warn("[interviewPrepper] resume is large; creating condensed summary for prompt (non-destructive).");
  // Simple chunking and summarization prompt (use a very small prompt definition or ai.call if available)
  // We'll create a quick summarizer prompt inline (implementation depends on ai SDK ability).
  const chunkSize = 20000;
  const chunks: string[] = [];
  for (let i = 0; i < resumeText.length; i += chunkSize) {
    chunks.push(resumeText.slice(i, i + chunkSize));
  }

  // summarize each chunk
  const summaries: string[] = [];
  for (const [idx, chunk] of chunks.entries()) {
    // Using fallback-like prompt for chunk summary (very short)
    const summaryPrompt = ai.definePrompt({
      name: `resumeChunkSummary-${idx}`,
      input: { schema: { type: 'object', properties: { chunk: { type: 'string' } }, required: ['chunk'] } },
      output: { schema: { type: 'object', properties: { summary: { type: 'string' } }, required: ['summary'] } },
      system: `You are a helpful summarizer. Produce a concise structured bulleted summary (3-6 bullets) of the important skills, projects, and dates in the following resume chunk.`,
      prompt: `Resume chunk:
'''
{{chunk}}
'''
Return a short bullet-list style summary (each bullet 1-2 sentences).`
    });

    try {
      const r: any = await callWithRetries(() => summaryPrompt({ chunk }), 2);
      if (r && r.output && r.output.summary) {
        summaries.push(r.output.summary);
      } else {
        // fallback to first N chars if summary fails
        summaries.push(chunk.slice(0, 2000));
      }
    } catch (e) {
      console.error("[interviewPrepper] chunk summary failed:", e);
      summaries.push(chunk.slice(0, 2000));
    }
  }

  // combine summaries into one string (still much smaller than original)
  return summaries.join("\n\n");
}

/**
 * Main flow (robust)
 */
const interviewPrepperFlow = ai.defineFlow(
  {
    name: 'interviewPrepperFlow',
    inputSchema: InterviewPrepperInputSchema,
    outputSchema: InterviewPrepperOutputSchema,
  },
  async (input: InterviewPrepperInput): Promise<InterviewPrepperOutput> => {
    try {
      console.log("[interviewPrepperFlow] incoming input size:", input?.resumeText?.length ?? 0, "language:", input.language, "initialRequest:", !!input.initialRequest);

      if (!input.resumeText || input.resumeText.trim().length === 0) {
        throw new Error("resumeText is empty or invalid.");
      }
      
      const effectiveResume = input.resumeText;

      // build the input we will send to the main prompt
      const promptInput = { ...input, resumeText: effectiveResume };

      // try primary (schema-validated) prompt with retries
      let primaryResult: any = null;
      try {
        primaryResult = await callWithRetries((payload) => interviewPrepperPrompt(payload), promptInput, 2);
        console.log("[interviewPrepperFlow] primaryResult:", !!primaryResult?.output);
      } catch (primaryErr) {
        console.warn("[interviewPrepperFlow] primary prompt failed:", primaryErr);
      }

      // If primary returned valid structured output, use it
      if (primaryResult && primaryResult.output && Array.isArray(primaryResult.output.response)) {
        console.log("[interviewPrepperFlow] using primary structured output");
        return primaryResult.output as InterviewPrepperOutput;
      }

      // Primary failed — attempt fallback that returns raw JSON text inside a single field
      console.warn("[interviewPrepperFlow] primary output missing, trying fallback prompt");
      const fallbackResult: any = await callWithRetries((payload) => interviewPrepperFallbackPrompt(payload), promptInput, 2);

      if (fallbackResult && fallbackResult.output && typeof fallbackResult.output.rawText === 'string') {
        const rawText = fallbackResult.output.rawText.trim();
        // Attempt to parse JSON from rawText
        try {
          const parsed = JSON.parse(rawText);
          if (parsed && Array.isArray(parsed.response)) {
            const out: InterviewPrepperOutput = {
              response: parsed.response.map((q: any) => ({ question: q.question ?? '', answer: q.answer ?? '' })),
              followUpSuggestion: parsed.followUpSuggestion ?? '',
            };
            console.log("[interviewPrepperFlow] fallback parsed successfully");
            return out;
          } else {
            console.warn("[interviewPrepperFlow] fallback JSON parsed but structure unexpected, returning default");
          }
        } catch (parseErr) {
          console.error("[interviewPrepperFlow] Failed to parse fallback JSON:", parseErr, "rawText:", rawText.slice(0, 1000));
        }
      }

      // If all attempts fail, return a safe default consistent with schema
      console.error("[interviewPrepperFlow] All attempts failed, returning safe default");
      return {
        response: [],
        followUpSuggestion: "Sorry, I couldn't generate interview questions right now. Please try again in a few moments."
      };

    } catch (err) {
      console.error("Error in interviewPrepperFlow (outer):", err);
      return {
        response: [],
        followUpSuggestion: "An unexpected error occurred. Please try again later."
      };
    }
  }
);

export async function interviewPrepper(input: InterviewPrepperInput): Promise<InterviewPrepperOutput> {
  return interviewPrepperFlow(input);
}
