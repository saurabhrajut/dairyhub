
"use server";

import { generateDairyTip } from "@/ai/flows/generate-dairy-tip";
import { suggestDairyRecipes } from "@/ai/flows/suggest-dairy-recipes";
import { sarathiChatbot } from "@/ai/flows/sarathi-chatbot";
import { generateAdulterantDetectionInstructions } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";
import Razorpay from "razorpay";
import { askExpert as askExpertFlow } from "@/ai/flows/expert-support-flow";
import { gyanAI as gyanAIFlow } from "@/ai/flows/gyan-ai-flow";
import { refineQuestion as refineQuestionFlow } from "@/ai/flows/refine-question-flow";
import { textToSpeech as textToSpeechFlow } from "@/ai/flows/text-to-speech-flow";


import type { 
    SuggestDairyRecipesInput,
    SarathiChatbotInput,
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

export async function getSarathiChatbotResponse(input: SarathiChatbotInput) {
    return await sarathiChatbot(input);
}

export async function getDetectionInstructions(input: GenerateAdulterantDetectionInstructionsInput) {
    return await generateAdulterantDetectionInstructions(input);
}

export async function fetchLatestDairyIndustryData() {
    return await getLatestDairyIndustryData();
}

export async function createRazorpayOrder(amount: number) {
  const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: `receipt_order_${new Date().getTime()}`,
  };

  try {
    const order = await instance.orders.create(options);
    if (!order) throw new Error("Order creation failed");
    return order;
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    throw new Error("Failed to create payment order.");
  }
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
