// 'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a daily dairy tip.
 *
 * It exports:
 * - `generateDairyTip`: An async function to generate a new daily dairy tip.
 * - `DairyTipInput`: The input type for the generateDairyTip function (empty).
 * - `DairyTipOutput`: The output type for the generateDairyTip function (string).
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DairyTipInputSchema = z.object({});
export type DairyTipInput = z.infer<typeof DairyTipInputSchema>;

const DairyTipOutputSchema = z.string();
export type DairyTipOutput = z.infer<typeof DairyTipOutputSchema>;

export async function generateDairyTip(): Promise<DairyTipOutput> {
  return generateDairyTipFlow({});
}

const generateDairyTipPrompt = ai.definePrompt({
  name: 'generateDairyTipPrompt',
  input: {schema: DairyTipInputSchema},
  output: {schema: DairyTipOutputSchema},
  prompt: `Give me one short, interesting, and fun fact about dairy science, milk, or the Indian dairy industry. The fact should be easy to understand for a farmer. Respond in Hinglish.`,
});

const generateDairyTipFlow = ai.defineFlow(
  {
    name: 'generateDairyTipFlow',
    inputSchema: DairyTipInputSchema,
    outputSchema: DairyTipOutputSchema,
  },
  async () => {
    const {text} = await generateDairyTipPrompt({});
    return text!;
  }
);
