
"use server";

import 'dotenv/config';
import { generateDairyTip } from "@/ai/flows/generate-dairy-tip";
import { suggestDairyRecipes } from "@/ai/flows/suggest-dairy-recipes";
import { generateAdulterantDetectionInstructions } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";
import { askExpert as askExpertFlow } from "@/ai/flows/expert-support-flow";
import { gyanAI as gyanAIFlow } from "@/ai/flows/gyan-ai-flow";
import { refineQuestion as refineQuestionFlow } from "@/ai/flows/refine-question-flow";
import { textToSpeech as textToSpeechFlow } from "@/ai/flows/text-to-speech-flow";
import { sarathiChatbot } from "@/ai/flows/sarathi-chatbot";
import Razorpay from "razorpay";
import crypto from "crypto";


import type { 
    SuggestDairyRecipesInput,
    GenerateAdulterantDetectionInstructionsInput,
    AskExpertInput,
    GyanAIInput,
    RefineQuestionInput,
    TextToSpeechInput,
    SarathiChatbotInput,
    SarathiChatbotOutput
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

export async function getSarathiChatbotResponse(input: SarathiChatbotInput): Promise<SarathiChatbotOutput> {
    return await sarathiChatbot(input);
}


// Razorpay Actions
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createRazorpayOrder(amount: number) {
    const options = {
        amount: amount * 100, // amount in the smallest currency unit (paise)
        currency: "INR",
        receipt: `receipt_order_${new Date().getTime()}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        return order;
    } catch (error) {
        console.error("Razorpay order creation failed:", error);
        throw new Error("Could not create Razorpay order.");
    }
}

interface VerificationPayload {
    orderId: string;
    paymentId: string;
    signature: string;
}

export async function verifyRazorpayPayment(payload: VerificationPayload) {
    const { orderId, paymentId, signature } = payload;
    const body = orderId + "|" + paymentId;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(body.toString())
        .digest("hex");

    if (expectedSignature === signature) {
        return { success: true };
    } else {
        return { success: false };
    }
}
