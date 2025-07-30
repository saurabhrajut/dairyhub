
'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a daily dairy tip.
 *
 * It exports:
 * - `generateDairyTip`: An async function to generate a new daily dairy tip.
 * - `DairyTipInput`: The input type for the generateDairyTip function (empty).
 * - `DairyTipOutput`: The output type for the generateDairyTip function (string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DairyTipInputSchema = z.object({});
export type DairyTipInput = z.infer<typeof DairyTipInputSchema>;

const DairyTipOutputSchema = z.string();
export type DairyTipOutput = z.infer<typeof DairyTipOutputSchema>;

export async function generateDairyTip(): Promise<DairyTipOutput> {
  return generateDairyTipFlow({});
}

const generateDairyTipFlow = ai.defineFlow(
  {
    name: 'generateDairyTipFlow',
    inputSchema: DairyTipInputSchema,
    outputSchema: DairyTipOutputSchema,
  },
  async () => {
    const { text } = await ai.generate({
      prompt: `You are a dairy and food science expert. Generate one interesting, scientific, and surprising question and its answer related to the dairy or food industry.
The tone should be like a "Did you know?" fact.
You MUST respond in Hinglish (a mix of Hindi and English).
Make it easy for a common person to understand.

Example Question: Doodh ubalne par upar kyu aata hai?
Example Answer: Doodh mein protein aur fat ek layer bana lete hain. Jab paani bhaap banta hai, to steam uss layer ko upar utha deti hai, isliye doodh ubal jaata hai.

Generate a new, different fact about the dairy or food industry.`,
    });
    return text ?? "Doodh ubalne par upar kyu aata hai? Doodh mein protein aur fat ek layer bana lete hain. Jab paani bhaap banta hai, to steam uss layer ko upar utha deti hai, isliye doodh ubal jaata hai.";
  }
);
