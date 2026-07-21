// --- MAIN CONTROLLER ---
import { handleSarathiChat } from './sarathi';
import { handleCareerExpert } from './expert';
import { handleInterviewSession } from './interview';

// Yeh function aapke UI widget se call hoga
export async function generateOfflineResponse(
  messages: Array<{ role: string; content: string }>,
  systemPrompt: string,
  userName: string = "User",
  gender: 'male' | 'female' | 'other' = 'other',
  language: string = "English"
): Promise<string> {
  
  // 1. Instant response delay (50ms) for realistic feel without lag
  await new Promise(resolve => setTimeout(resolve, 50));

  const lastUserMessage = messages[messages.length - 1]?.content || "";
  const promptLower = systemPrompt.toLowerCase();

  // --- Router Logic (Decide karega kahan bhejna hai) ---

  // A. Interview Mode Logic
  if (promptLower.includes("interview coach")) {
    // Check agar yeh "Generate" command hai (Resume upload hone par)
    const isInitialSetup = lastUserMessage.toLowerCase().includes("generate") || lastUserMessage.toLowerCase().includes("resume content");
    return handleInterviewSession(lastUserMessage, isInitialSetup);
  }

  // B. Expert Mode Logic (Gyan AI)
  if (promptLower.includes("expert")) {
    // Default topic agar specify nahi hai
    return handleCareerExpert("Career Guidance", lastUserMessage);
  }

  // C. Default Sarathi Mode
  return handleSarathiChat(lastUserMessage, userName, gender, language, messages.length);
}
