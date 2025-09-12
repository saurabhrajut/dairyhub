
"use server";

import { generateDairyTip } from "@/ai/flows/generate-dairy-tip";
import { suggestDairyRecipes } from "@/ai/flows/suggest-dairy-recipes";
import { generateAdulterantDetectionInstructions } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";
import { askExpert as askExpertFlow } from "@/ai/flows/expert-support-flow";
import { gyanAI as gyanAIFlow } from "@/ai/flows/gyan-ai-flow";
import { refineQuestion as refineQuestionFlow } from "@/ai/flows/refine-question-flow";
import { textToSpeech as textToSpeechFlow } from "@/ai/flows/text-to-speech-flow";


import type { 
    SuggestDairyRecipesInput,
    GenerateAdulterantDetectionInstructionsInput,
    AskExpertInput,
    GyanAIInput,
    RefineQuestionInput,
    TextToSpeechInput
} from "@/ai/flows/types";

export async function getDailyTip() {
    return await generateDairyTip();
}

export async function getRecipeSuggestions(input: SuggestDairyRecipesInput) {
    return await suggestDairyRecipes(input);
}

export async function getDetectionInstructions(input: GenerateAdulterantDetectionInstructionsInput) {
    return await generateAdulterantDetectionInstructions(input);
}

export async function fetchLatestDairyIndustryData() {
    return await getLatestDairyIndustryData();
}

export async function askExpert(input: AskExpertInput) {
    return await askExpertFlow(input);
}

export async function gyanAI(input: GyanAIInput) {
    return await gyanAIFlow(input);
}

export async function refineQuestion(input: RefineQuestionInput) {
    return await refineQuestionFlow(input);
}

export async function textToSpeech(input: TextToSpeechInput) {
    return await textToSpeechFlow(input);
}
