"use server";

import { generateDairyTip } from "@/ai/flows/generate-dairy-tip";
import { suggestDairyRecipes, type SuggestDairyRecipesInput } from "@/ai/flows/suggest-dairy-recipes";
import { sarathiChatbot, type SarathiChatbotInput } from "@/ai/flows/sarathi-chatbot";
import { generateAdulterantDetectionInstructions, type GenerateAdulterantDetectionInstructionsInput } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";


export async function getDailyTip() {
    return await generateDairyTip();
}

export async function getRecipeSuggestions(input: SuggestDairyRecipesInput) {
    return await suggestDairyRecipes(input);
}

export async function getSarathiChatbotResponse(input: SarathiChatbotInput) {
    return await sarathiChatbot(input);
}

export async function getDetectionInstructions(input: GenerateAdulterantDetectionInstructionsInput) {
    return await generateAdulterantDetectionInstructions(input);
}

export async function fetchLatestDairyIndustryData() {
    return await getLatestDairyIndustryData();
}
