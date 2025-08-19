
"use server";

import { generateDairyTip } from "@/ai/flows/generate-dairy-tip";
import { suggestDairyRecipes, type SuggestDairyRecipesInput } from "@/ai/flows/suggest-dairy-recipes";
import { sarathiChatbot, type SarathiChatbotInput } from "@/ai/flows/sarathi-chatbot";
import { generateAdulterantDetectionInstructions, type GenerateAdulterantDetectionInstructionsInput } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";
import Razorpay from "razorpay";

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

export async function createRazorpayOrder(amount: number, currency: string) {
  const instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency,
    receipt: `receipt_order_${new Date().getTime()}`,
  };

  try {
    const order = await instance.orders.create(options);
    return order;
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    throw new Error("Failed to create payment order.");
  }
}
