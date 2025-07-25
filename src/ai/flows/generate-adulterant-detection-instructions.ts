// 'use server';
/**
 * @fileOverview A flow to generate instructions for detecting milk adulterants and preservatives.
 *
 * - generateAdulterantDetectionInstructions - A function that handles the generation of detection instructions.
 * - GenerateAdulterantDetectionInstructionsInput - The input type for the generateAdulterantDetectionInstructions function.
 * - GenerateAdulterantDetectionInstructionsOutput - The return type for the generateAdulterantDetectionInstructions function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdulterantDetectionInstructionsInputSchema = z.object({
  adulterant: z.string().describe('The name of the adulterant or preservative to detect.'),
});
export type GenerateAdulterantDetectionInstructionsInput = z.infer<typeof GenerateAdulterantDetectionInstructionsInputSchema>;

const GenerateAdulterantDetectionInstructionsOutputSchema = z.object({
  instructions: z.string().describe('Step-by-step instructions for detecting the specified adulterant or preservative in milk.'),
});
export type GenerateAdulterantDetectionInstructionsOutput = z.infer<typeof GenerateAdulterantDetectionInstructionsOutputSchema>;

export async function generateAdulterantDetectionInstructions(
  input: GenerateAdulterantDetectionInstructionsInput
): Promise<GenerateAdulterantDetectionInstructionsOutput> {
  return generateAdulterantDetectionInstructionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAdulterantDetectionInstructionsPrompt',
  input: {schema: GenerateAdulterantDetectionInstructionsInputSchema},
  output: {schema: GenerateAdulterantDetectionInstructionsOutputSchema},
  prompt: `You are an expert in dairy science, skilled at explaining complex chemical tests in simple terms.

The user wants to know how to detect a specific adulterant or preservative in milk. Provide clear, step-by-step instructions that are easy to follow, even for someone without a scientific background. Be sure to use Hinglish, mixing Hindi and English words.

Adulterant/Preservative: {{{adulterant}}}

Instructions:`,
});

const generateAdulterantDetectionInstructionsFlow = ai.defineFlow(
  {
    name: 'generateAdulterantDetectionInstructionsFlow',
    inputSchema: GenerateAdulterantDetectionInstructionsInputSchema,
    outputSchema: GenerateAdulterantDetectionInstructionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
