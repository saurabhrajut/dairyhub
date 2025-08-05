
"use server";

import crypto from 'crypto';
import Razorpay from 'razorpay';
import { generateDairyTip } from "@/ai/flows/generate-dairy-tip";
import { suggestDairyRecipes, type SuggestDairyRecipesInput } from "@/ai/flows/suggest-dairy-recipes";
import { sarathiChatbot, type SarathiChatbotInput } from "@/ai/flows/sarathi-chatbot";
import { generateAdulterantDetectionInstructions, type GenerateAdulterantDetectionInstructionsInput } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";

// Razorpay Instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});


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

// Payment actions
export async function createRazorpayOrder(amount: number) {
    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: `receipt_order_${new Date().getTime()}`
    };

    try {
        const order = await razorpay.orders.create(options);
        return { success: true, order };
    } catch (error) {
        console.error("Razorpay order creation failed:", error);
        return { success: false, error: "Could not create order." };
    }
}

export async function verifyRazorpayPayment(data: {
    orderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
}) {
    const { orderId, razorpayPaymentId, razorpaySignature } = data;
    const body = orderId + "|" + razorpayPaymentId;

    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
        .update(body.toString())
        .digest('hex');

    const isAuthentic = expectedSignature === razorpaySignature;

    if (isAuthentic) {
        return { success: true, message: "Payment verified successfully." };
    } else {
        return { success: false, message: "Payment verification failed." };
    }
}
