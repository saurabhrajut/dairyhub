
import { z } from 'genkit';

// Types for expert-support-flow.ts
export const AskExpertInputSchema = z.object({
  expertName: z.string().describe("The name of the expert persona to adopt."),
  experience: z.number().describe("The years of experience of the expert."),
  specialization: z.string().describe("The specialization of the expert."),
  question: z.string().describe("The user's question."),
  language: z.string().describe("The language for the response (e.g., English, Hinglish)."),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
      text: z.string()
    }))
  })).optional().describe('The previous conversation history to maintain context.'),
});
export type AskExpertInput = z.infer<typeof AskExpertInputSchema>;

export const AskExpertOutputSchema = z.object({
  answer: z.string().describe("The AI-generated expert response."),
});
export type AskExpertOutput = z.infer<typeof AskExpertOutputSchema>;


// Types for gyan-ai-flow.ts
export const GyanAIInputSchema = z.object({
  topic: z.string().describe("The topic of expertise (e.g., Dairy Technology, Food Safety)."),
  question: z.string().describe("The user's question."),
  language: z.string().describe("The language for the response (e.g., English, Hinglish)."),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
      text: z.string()
    }))
  })).optional().describe('The previous conversation history to maintain context.'),
});
export type GyanAIInput = z.infer<typeof GyanAIInputSchema>;

export const GyanAIOutputSchema = z.object({
  answer: z.string().describe("The AI-generated expert response."),
});
export type GyanAIOutput = z.infer<typeof GyanAIOutputSchema>;


// Types for refine-question-flow.ts
export const RefineQuestionInputSchema = z.object({
  question: z.string().describe("The user's original question."),
});
export type RefineQuestionInput = z.infer<typeof RefineQuestionInputSchema>;

export const RefineQuestionOutputSchema = z.object({
  refinedQuestion: z.string().describe("The refined, more professional question."),
});
export type RefineQuestionOutput = z.infer<typeof RefineQuestionOutputSchema>;


// Types for text-to-speech-flow.ts
export const TextToSpeechInputSchema = z.object({
    text: z.string().describe("The text to convert to speech."),
});
export type TextToSpeechInput = z.infer<typeof TextToSpeechInputSchema>;

export const TextToSpeechOutputSchema = z.object({
    media: z.string().describe("The base64 encoded WAV audio data URI."),
});
export type TextToSpeechOutput = z.infer<typeof TextToSpeechOutputSchema>;

// Types for suggest-dairy-recipes.ts
export const SuggestDairyRecipesInputSchema = z.object({
  milkType: z.string().describe('The type of milk used.'),
  fatPercentage: z.number().describe('The fat percentage of the milk.'),
  snfPercentage: z.number().describe('The solids-not-fat percentage of the milk.'),
});
export type SuggestDairyRecipesInput = z.infer<typeof SuggestDairyRecipesInputSchema>;

export const SuggestDairyRecipesOutputSchema = z.object({
  recipeSuggestions: z.string().describe('Recipe suggestions based on the milk composition.'),
});
export type SuggestDairyRecipesOutput = z.infer<typeof SuggestDairyRecipesOutputSchema>;

// Types for generate-adulterant-detection-instructions.ts
export const GenerateAdulterantDetectionInstructionsInputSchema = z.object({
  adulterant: z.string().describe('The name of the adulterant or preservative to detect.'),
});
export type GenerateAdulterantDetectionInstructionsInput = z.infer<typeof GenerateAdulterantDetectionInstructionsInputSchema>;

export const GenerateAdulterantDetectionInstructionsOutputSchema = z.object({
  instructions: z.string().describe('Step-by-step instructions for detecting the specified adulterant or preservative in milk.'),
});
export type GenerateAdulterantDetectionInstructionsOutput = z.infer<typeof GenerateAdulterantDetectionInstructionsOutputSchema>;
