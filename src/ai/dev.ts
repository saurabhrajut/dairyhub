import { config } from 'dotenv';
config();

import '@/ai/flows/generate-adulterant-detection-instructions.ts';
import '@/ai/flows/generate-dairy-tip.ts';
import '@/ai/flows/sarathi-chatbot.ts';
import '@/ai/flows/suggest-dairy-recipes.ts';