'use server';

import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist/build/pdf.mjs';
import { generateOfflineInterview } from '@/lib/offline-processor'; 

// --- Types (Temporary Definition to prevent TS errors) ---
interface InterviewPrepperInput {
  resumeText: string;
  experienceLevel: string;
  language?: string;
  history?: any[];
  initialRequest?: boolean;
}

// PDF Worker Setup
const PDF_JS_VERSION = "4.10.38"; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.worker.min.mjs`;

// ==========================================
// 1. ACTIVE FUNCTIONS (Working Offline)
// ==========================================

export async function parseResume(formData: FormData): Promise<{text: string}> {
    try {
        const file = formData.get('file') as File;
        if (!file) throw new Error('No file provided');

        const arrayBuffer = await file.arrayBuffer();

        if (file.type.includes('wordprocessingml')) {
            const result = await mammoth.extractRawText({ arrayBuffer });
            return { text: result.value };
        } 
        else if (file.type === 'application/pdf') {
            const loadingTask = pdfjs.getDocument({ data: new Uint8Array(arrayBuffer) });
            const pdf = await loadingTask.promise;
            let text = '';
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                text += textContent.items.map((item: any) => item.str).join(' ') + '\n';
            }
            return { text };
        } 
        else {
            return { text: "" };
        }
    } catch (error) {
        console.error("Parsing Error:", error);
        return { text: "" };
    }
}

export async function interviewPrepper(input: InterviewPrepperInput) {
    try {
        // Calling your offline logic
        return generateOfflineInterview(input.resumeText, input.experienceLevel);
    } catch (error) {
        console.error("Interview Error:", error);
        return {
            response: [{ question: "Error generating questions.", answer: "Please try again." }],
            followUpSuggestion: "System Error"
        };
    }
}

// ==========================================
// 2. PLACEHOLDER FUNCTIONS (To Fix Build Errors)
// ==========================================
// Ye functions error rokne ke liye add kiye gaye hain. 
// Jab user inhe call karega, inhe ek simple message milega.

export async function askExpert(input: any) {
    return {
        answer: "Expert support is currently operating in offline mode. Please check back later for full AI support."
    };
}

export async function sarathiAI(input: any) {
    return {
        answer: "Namaste! I am currently undergoing maintenance. Please use the Interview Tool for now."
    };
}

export async function gyanAI(input: any) {
    return {
        answer: "This topic expert is currently unavailable."
    };
}

export async function getRecipeSuggestions(input: any) {
    return { recipes: [] };
}

export async function getDetectionInstructions(input: any) {
    return { instructions: "Feature unavailable offline." };
}

export async function fetchLatestDairyIndustryData() {
    return { data: "Data unavailable." };
}

export async function refineQuestion(input: any) {
    return { refinedQuestion: input.question };
}

export async function textToSpeech(input: any) {
    return { audio: null };
}

export async function createRazorpayOrder(amount: number) {
    return { success: false, error: "Payment gateway not configured." };
}
