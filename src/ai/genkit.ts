
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

const geminiApiKey = process.env.GEMINI_API_KEY;

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: geminiApiKey,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
  // Log errors to the console, but disable verbose logging for cleaner output.
  logLevel: 'error',
});
