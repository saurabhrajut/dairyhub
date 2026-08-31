// Removed 'use server' to allow static client-side build for local Android app.

// Unused on client-side and can cause bundler/build issues:
// import mammoth from 'mammoth';
// import * as pdfjs from 'pdfjs-dist/build/pdf.mjs';
// 

// --- Types (Temporary Definition to prevent TS errors) ---
interface InterviewPrepperInput {
  resumeText: string;
  experienceLevel: string;
  language?: string;
  history?: any[];
  initialRequest?: boolean;
}

// ==========================================
// 1. ACTIVE FUNCTIONS (Working Offline)
// ==========================================

export async function parseResume(formData: FormData): Promise<{text: string}> {
    // Moved offline client-side parsing into sarathi-chat-widget.tsx. 
    // This is a placeholder.
    return { text: "" };
}

export async function interviewPrepper(input: InterviewPrepperInput) {
    // Moved offline client-side prepper into sarathi-chat-widget.tsx.
    // This is a placeholder.
    return {
        response: [{ question: "Offline Mode.", answer: "Please use the Chat Widget." }],
        followUpSuggestion: "Offline Mode"
    };
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

export async function createRazorpayOrder(amount: number): Promise<{
    success: boolean;
    error?: string;
    order?: {
        id: string;
        amount: number;
        currency: string;
    };
}> {
    return { success: false, error: "Payment gateway not configured." };
}
