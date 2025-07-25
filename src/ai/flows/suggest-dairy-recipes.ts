'use server';

/**
 * @fileOverview Provides recipe suggestions based on the final milk composition.
 *
 * - suggestDairyRecipes - A function that handles the recipe suggestion process.
 * - SuggestDairyRecipesInput - The input type for the suggestDairyRecipes function.
 * - SuggestDairyRecipesOutput - The return type for the suggestDairyRecipes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDairyRecipesInputSchema = z.object({
  milkType: z.string().describe('The type of milk used.'),
  fatPercentage: z.number().describe('The fat percentage of the milk.'),
  snfPercentage: z.number().describe('The solids-not-fat percentage of the milk.'),
});
export type SuggestDairyRecipesInput = z.infer<typeof SuggestDairyRecipesInputSchema>;

const SuggestDairyRecipesOutputSchema = z.object({
  recipeSuggestions: z.string().describe('Recipe suggestions based on the milk composition.'),
});
export type SuggestDairyRecipesOutput = z.infer<typeof SuggestDairyRecipesOutputSchema>;

export async function suggestDairyRecipes(input: SuggestDairyRecipesInput): Promise<SuggestDairyRecipesOutput> {
  return suggestDairyRecipesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDairyRecipesPrompt',
  input: {schema: SuggestDairyRecipesInputSchema},
  output: {schema: SuggestDairyRecipesOutputSchema},
  prompt: `Suggest 2 simple recipes I can make with {{milkType}} that has {{fatPercentage}}% fat and {{snfPercentage}}% SNF. Provide the recipes in a simple, easy-to-follow format with ingredients and steps. Respond in Hinglish.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const suggestDairyRecipesFlow = ai.defineFlow(
  {
    name: 'suggestDairyRecipesFlow',
    inputSchema: SuggestDairyRecipesInputSchema,
    outputSchema: SuggestDairyRecipesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {recipeSuggestions: output!.recipeSuggestions!};
  }
);
