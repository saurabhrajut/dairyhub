'use server';

import mammoth from 'mammoth';
import * as pdfjs from 'pdfjs-dist/build/pdf.mjs';
import { generateOfflineInterview } from '@/lib/offline-processor'; // ✅ Import check karein

// --- Types ---
// Agar apke paas types file alag hai to wahan se import karein, 
// warna temporary yahan define kar raha hu taaki error na aaye
interface InterviewPrepperInput {
  resumeText: string;
  experienceLevel: string;
  language?: string;
  history?: any[];
  initialRequest?: boolean;
}

// PDF Worker Setup (Required for Next.js)
const PDF_JS_VERSION = "4.10.38"; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.worker.min.mjs`;

// --- 1. Resume Parsing Function ---
export async function parseResume(formData: FormData): Promise<{text: string}> {
    console.log("--> parseResume Called");
    
    try {
        const file = formData.get('file') as File;
        if (!file) throw new Error('No file provided');

        console.log("--> File received:", file.name, file.type);
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
            throw new Error('Unsupported file type');
        }
    } catch (error) {
        console.error("--> Parsing Error:", error);
        return { text: "" }; // Empty text return karein taaki app crash na ho
    }
}

// --- 2. Offline Interview Function (AI REPLACEMENT) ---
export async function interviewPrepper(input: InterviewPrepperInput) {
    console.log("--> interviewPrepper Action Called");
    
    try {
        // AI Flow hata diya, seedha offline logic call kiya
        const result = generateOfflineInterview(input.resumeText, input.experienceLevel);
        
        console.log("--> Returning Result to Frontend");
        return result;

    } catch (error) {
        console.error("--> interviewPrepper Error:", error);
        // Error ke case mein safe data return karein
        return {
            response: [{ 
                question: "Could not generate questions.", 
                answer: "Please try uploading the resume again." 
            }],
            followUpSuggestion: "System Error"
        };
    }
}

// --- Dummy Exports to prevent errors if frontend calls them ---
// (Baaki functions ko aise hi chhod dein agar wo use ho rahe hain)
export async function sarathiAI() { return null; }
export async function gyanAI() { return null; }
