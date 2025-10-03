import { genkit } from 'genkit';
import { googleAI, gemini25FlashLite } from '@genkit-ai/googleai';

const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
  console.warn(
    'GEMINI_API_KEY is not set. AI features will not work. See README.md for instructions.'
  );
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: geminiApiKey,
    }),
  ],
  model: gemini25FlashLite, // ✅ Ye perfect hai
});
