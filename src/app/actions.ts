
"use server";

import { suggestDairyRecipes } from "@/ai/flows/suggest-dairy-recipes";
import { generateAdulterantDetectionInstructions } from "@/ai/flows/generate-adulterant-detection-instructions";
import { getLatestDairyIndustryData } from "@/ai/flows/get-latest-dairy-industry-data";
import { askExpert as askExpertFlow } from "@/ai/flows/expert-support-flow";
import { gyanAI as gyanAIFlow } from "@/ai/flows/gyan-ai-flow";
import { refineQuestion as refineQuestionFlow } from "@/ai/flows/refine-question-flow";
import { textToSpeech as textToSpeechFlow } from "@/ai/flows/text-to-speech-flow";
import { interviewPrepper as interviewPrepperFlow } from "@/ai/flows/interview-prepper-flow";
import { sarathiAI as sarathiAIFlow } from "@/ai/flows/sarathi-ai-flow";
import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist/build/pdf.mjs';
import Razorpay from 'razorpay';


// Set the workerSrc to prevent it from trying to load a worker script on the server.
// This is necessary for server-side rendering environments like Next.js.
const PDF_JS_VERSION = "4.10.38"; // Use the version installed in package.json
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.worker.min.mjs`;


import type { 
    SuggestDairyRecipesInput,
    GenerateAdulterantDetectionInstructionsInput,
    AskExpertInput,
    GyanAIInput,
    RefineQuestionInput,
    TextToSpeechInput,
    InterviewPrepperInput,
    DocxParsingInput,
    PdfParsingInput,
    SarathiAIInput
} from "@/ai/flows/types";

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

export async function interviewPrepper(input: InterviewPrepperInput) {
    return await interviewPrepperFlow(input);
}

export async function sarathiAI(input: SarathiAIInput) {
    return await sarathiAIFlow(input);
}

export async function parseResume(formData: FormData): Promise<{text: string}> {
    const file = formData.get('file') as File;
    if (!file) {
        throw new Error('No file provided');
    }

    const arrayBuffer = await file.arrayBuffer();

    if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const result = await mammoth.extractRawText({ arrayBuffer });
        return { text: result.value };
    } else if (file.type === 'application/pdf') {
        const loadingTask = pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) });
        const pdf = await loadingTask.promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            text += textContent.items.map((item: any) => item.str).join(' ') + '\n';
        }
        return { text };
    } else {
        throw new Error('Invalid file type. Please upload a .docx or .pdf file.');
    }
}

export async function createRazorpayOrder(amount: number) {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
        console.error("Razorpay key_id or key_secret is not set in environment variables.");
        return { success: false, error: "Payment gateway is not configured on the server. Please contact support." };
    }

    const razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
    });

    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: "INR",
    };

    try {
        const order = await razorpay.orders.create(options);
        return { success: true, order };
    } catch (error) {
        console.error("Razorpay order creation failed:", error);
        return { success: false, error: "Could not create Razorpay order. Please check server logs." };
    }
}
