"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Loader2, 
  MessageCircle, 
  Send, 
  X, 
  ArrowLeft, 
  BrainCircuit, 
  Upload, 
  FileCheck, 
  Sparkles,
  GraduationCap,
  FileText,
  Settings,
  ChevronRight,
  RotateCcw,
  User,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateOfflineResponse } from '@/lib/my-offline-ai';
import { selectOfflineQuestions, evaluateOfflineAnswer } from '@/lib/my-offline-ai/interview';

// --- Types ---

interface UIMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  isQuestionAnswer?: boolean;
  question?: string;
  answer?: string;
  isPending?: boolean;
  timestamp: string;
}

type ChatMode = 'sarathi' | 'gyan-ai';
type GyanAITopic = 
  | 'Career Guidance in Food Industry' 
  | 'Interview Preparation';

// --- STYLES ---
const CONTENT_STYLES = `
  .strict-html-wrap {
    box-sizing: border-box !important;
  }
  .strict-html-wrap * {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    box-sizing: border-box !important;
  }
`;

// --- Offline AI Helper Functions ---

// Simple PDF text extraction using canvas approach
async function extractPDFText(file: File): Promise<string> {
    try {
      const pdfjs = await import('pdfjs-dist');
      
      if (typeof window !== 'undefined') {
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      }
      
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ');
        fullText += pageText + '\n';
      }
      
      return fullText.trim() || 'PDF text extraction completed but no text found. Please ensure your PDF contains selectable text.';
    } catch (error) {
      console.error('PDF extraction error:', error);
      return `Unable to extract text from PDF. Please try a different file or ensure the PDF contains selectable text. Error: ${error}`;
    }
  }

// Extract text from DOC/DOCX using mammoth
async function extractDocText(file: File): Promise<string> {
  try {
    const mammoth = await import('mammoth');
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value.trim() || 'Document parsed but no text found.';
  } catch (error) {
    console.error('DOC extraction failed:', error);
    return `Unable to extract text from document. Error: ${error}`;
  }
}

// Unified resume parser
async function parseResumeOffline(file: File): Promise<string> {
  const fileType = file.type;
  const fileName = file.name.toLowerCase();
  
  if (fileType === 'application/pdf' || fileName.endsWith('.pdf')) {
    return await extractPDFText(file);
  } else if (
    fileType === 'application/msword' || 
    fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    fileName.endsWith('.doc') ||
    fileName.endsWith('.docx')
  ) {
    return await extractDocText(file);
  } else {
    throw new Error('Unsupported file type. Please upload PDF, DOC, or DOCX.');
  }
}

// --- Direct Gemini API Call ---
async function callGeminiAPI(
  messages: Array<{ role: string; content: string }>,
  systemPrompt: string,
  apiKey: string
): Promise<string> {
  const contents = messages.map(msg => {
    const role = msg.role === 'assistant' ? 'model' : 'user';
    return {
      role: role,
      parts: [{ text: msg.content }]
    };
  });

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1500,
        }
      })
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errMsg = errorData.error?.message || response.statusText;
    throw new Error(`DairyHub API Error: ${errMsg}`);
  }

  const result = await response.json();
  const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("No response generated by the AI.");
  }
  return text;
}

// --- NEW OFFLINE LOGIC ---
async function callClaudeAPI(
    messages: Array<{ role: string; content: string }>,
    systemPrompt: string
  ): Promise<string> {
    const savedKey = typeof window !== 'undefined' 
      ? (localStorage.getItem('dairyhub_api_key') || localStorage.getItem('dairyhub_gemini_api_key')) 
      : null;
    const apiKey = savedKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("API_KEY_MISSING");
    }
    
    return await callGeminiAPI(messages, systemPrompt, apiKey);
  }

// Sarathi AI - Friendly Assistant
async function sarathiAIOffline(
  userName: string,
  gender: string,
  question: string,
  language: string,
  history: Array<{ role: string; content: string }>
): Promise<string> {
  const messages = [
    ...history.map(h => ({ role: h.role, content: h.content })),
    { role: "user", content: question }
  ];

  try {
    const isHinglish = language === 'Hinglish';
    let genderInstruction = "";
    if (isHinglish) {
      if (gender === 'male') genderInstruction = `Address the user in a very friendly manner as "Bhai", "Bhaiya", or "Yaar".`;
      else if (gender === 'female') genderInstruction = `Address the user in a very friendly manner as "Behen", "Didi", or "Dear".`;
      else genderInstruction = `Address the user in a very friendly manner as "Dost" or "Yaar".`;
    } else {
      if (gender === 'male') genderInstruction = `Address the user in a very friendly manner as "bro", "brother", or "buddy".`;
      else if (gender === 'female') genderInstruction = `Address the user in a very friendly manner as "sister", "didi", or "dear".`;
      else genderInstruction = `Address the user in a very friendly manner as "friend" or "champion".`;
    }

    const systemPrompt = `You are Sarathi - a friendly, super witty, and slightly comedic AI companion for the dairy and food industry.
  
Your character & guidelines:
- You are a close friend (dost/yaar) to the user.
- ${genderInstruction}
- Talk like a real friend, using a casual, warm, and highly engaging tone.
- Crack light jokes, funny comments, or witty remarks in between your conversation.
- Answer user queries with useful information about dairy technology, food processing, quality, etc.
- Response language: ${language}.
- User's name: ${userName}
- User's gender: ${gender}`;

    return await callClaudeAPI(messages, systemPrompt);
  } catch (e) {
    // Instant local offline engine fallback
    return await generateOfflineResponse(messages, "Sarathi friendly assistant", userName, (gender as any) || 'other', language);
  }
}

// Gyan AI - Domain Expert
async function gyanAIOffline(
  topic: string,
  question: string,
  language: string,
  history: Array<{ role: string; content: string }>
): Promise<string> {
  const messages = [
    ...history.map(h => ({ role: h.role, content: h.content })),
    { role: "user", content: question }
  ];

  try {
    const systemPrompt = `You are an expert AI assistant specializing in: ${topic}
Your role:
- Provide deep, specialized knowledge
- Response language: ${language}
- Give practical, actionable advice`;

    return await callClaudeAPI(messages, systemPrompt);
  } catch (e) {
    // Instant local offline engine fallback
    return await generateOfflineResponse(messages, `Expert in ${topic}`, "User", "other", language);
  }
}

// Interview Preparation - Smart Mock Interviews
async function interviewPrepperOffline(
  resumeText: string,
  experienceLevel: string,
  language: string,
  history: Array<{ role: string; content: string }>,
  isInitialRequest: boolean
): Promise<{ questions: Array<{ question: string; answer: string }>; followUp: string }> {
  let systemPrompt = '';
  let userPrompt = '';

  if (isInitialRequest) {
    systemPrompt = `You are an expert interview coach. Analyze the resume and generate relevant interview questions with professional answers.

Experience Level: ${experienceLevel}
Language: ${language}

Format your response EXACTLY as:
Q1: [Question here]
A1: [Detailed professional answer here]

Q2: [Question here]
A2: [Detailed professional answer here]

Q3: [Question here]
A3: [Detailed professional answer here]

FOLLOW_UP: [A brief tip or suggestion for the candidate]

Generate 3 questions based on the resume content.`;

    userPrompt = `Resume Content:\n${resumeText}\n\nGenerate 3 relevant interview questions with professional answers.`;
  } else {
    systemPrompt = `You are an interview coach providing feedback and follow-up questions.

Experience Level: ${experienceLevel}
Language: ${language}

Based on the conversation history, provide:
1. Constructive feedback on the candidate's response
2. A follow-up question if needed
3. Tips for improvement

Keep it conversational and encouraging.`;

    userPrompt = history[history.length - 1]?.content || "Continue the interview";
  }

  const messages = isInitialRequest 
    ? [{ role: "user", content: userPrompt }]
    : history.map(h => ({ role: h.role, content: h.content }));

  const response = await callClaudeAPI(messages, systemPrompt);

  // Parse response
  if (isInitialRequest) {
    const questions: Array<{ question: string; answer: string }> = [];
    const lines = response.split('\n').filter(l => l.trim());
    
    let currentQ = '';
    let currentA = '';
    let followUp = '';

    for (const line of lines) {
      if (line.match(/^Q\d+:/)) {
        if (currentQ && currentA) {
          questions.push({ question: currentQ, answer: currentA });
        }
        currentQ = line.replace(/^Q\d+:\s*/, '').trim();
        currentA = '';
      } else if (line.match(/^A\d+:/)) {
        currentA = line.replace(/^A\d+:\s*/, '').trim();
      } else if (line.startsWith('FOLLOW_UP:')) {
        followUp = line.replace('FOLLOW_UP:', '').trim();
        if (currentQ && currentA) {
          questions.push({ question: currentQ, answer: currentA });
        }
      } else if (currentA) {
        currentA += ' ' + line.trim();
      }
    }

    if (currentQ && currentA && questions.length < 3) {
      questions.push({ question: currentQ, answer: currentA });
    }

    // Fallback if parsing failed
    if (questions.length === 0) {
      questions.push({
        question: "Tell me about yourself and your background.",
        answer: "Based on your resume, you can highlight your education, relevant experience, and key skills that make you a strong candidate for this position."
      });
      questions.push({
        question: "What are your key strengths?",
        answer: "Emphasize the technical and soft skills mentioned in your resume that are most relevant to the role you're applying for."
      });
      questions.push({
        question: "Why are you interested in this position?",
        answer: "Connect your background and career goals with the specific opportunity, showing genuine interest and research about the role."
      });
      followUp = "Practice these answers out loud before your interview!";
    }

    return { questions, followUp };
  } else {
    return { questions: [], followUp: response };
  }
}

// --- Main Widget Component ---

export function SarathiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<ChatMode>('sarathi');
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleOpenChat = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to use the AI assistant.",
        action: <Button onClick={() => router.push('/login')}>Login</Button>
      });
      return;
    }
    setIsOpen(true);
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className={cn(
        "fixed bottom-4 right-4 z-40 transition-all duration-500 ease-in-out", 
        isOpen ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'
      )}>
        <Button 
          size="icon" 
          className="rounded-2xl w-14 h-14 shadow-2xl bg-gradient-to-tr from-orange-500 via-orange-400 to-blue-600 hover:scale-110 transition-all duration-300 border-4 border-white/90 overflow-hidden relative" 
          onClick={handleOpenChat}
        >
          <img 
              src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_6535%20(2).jpg?alt=media&token=5843169c-b4d5-4e04-b2be-3ab1a49af457"
              alt="Sarathi Chat Bot"
              className="w-full h-full object-cover"
          />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse shadow-md z-10"></span>
        </Button>
      </div>

      {/* Chat Container */}
      <div className={cn(
        "fixed z-50 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 w-auto sm:w-[400px] max-w-[calc(100vw-2rem)] h-[80vh] sm:h-[620px] max-h-[85vh] bg-slate-50 border border-slate-200/80 rounded-3xl shadow-2xl flex flex-col transition-all duration-300 overflow-hidden",
        isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
      )}>
        <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />
        <ChatInterface 
            isOpen={isOpen}
            onClose={() => setIsOpen(false)} 
            activeMode={activeMode} 
            setActiveMode={setActiveMode} 
        />
      </div>
    </>
  );
}

// --- Internal Logic Component ---

function ChatInterface({ isOpen, onClose, activeMode, setActiveMode }: { isOpen: boolean; onClose: () => void; activeMode: ChatMode; setActiveMode: (m: ChatMode) => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
   
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [history, setHistory] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Gyan AI Specifics
  const [selectedTopic, setSelectedTopic] = useState<GyanAITopic | null>(null);
  const [experienceLevel, setExperienceLevel] = useState<'Fresher Student' | 'Experienced Person'>('Fresher Student');
  const [interviewMode, setInterviewMode] = useState<'online' | 'offline'>('offline');
  const [offlineQuestions, setOfflineQuestions] = useState<any[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isProcessingResume, setIsProcessingResume] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [settingsApiKey, setSettingsApiKey] = useState("");
  const [sarathiMode, setSarathiMode] = useState<'online' | 'offline'>('offline');

  // Sync API Key from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = localStorage.getItem('dairyhub_api_key') || localStorage.getItem('dairyhub_gemini_api_key') || "";
      setSettingsApiKey(key);
    }
  }, [isOpen]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const languageRef = useRef(language);
  languageRef.current = language;

  // --- Helpers ---

  const getCacheKey = useCallback(() => {
    if (!user) return null;
    const topicKey = activeMode === 'gyan-ai' && selectedTopic ? `_${selectedTopic}` : '';
    return `chat_offline_v1_${activeMode}${topicKey}_${user.uid}`;
  }, [activeMode, selectedTopic, user]);

  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, []);

  const triggerWelcomeMessage = useCallback(() => {
    if (!user) return;
    const isHinglish = languageRef.current === 'Hinglish';
    const gender = user.gender || 'other';
    let genderTerm = '';
    if (isHinglish) {
      if (gender === 'male') genderTerm = 'Bhai';
      else if (gender === 'female') genderTerm = 'Behen';
      else genderTerm = 'Dost';
    } else {
      if (gender === 'male') genderTerm = 'bro';
      else if (gender === 'female') genderTerm = 'dear';
      else genderTerm = 'friend';
    }
    
    const welcomeText = isHinglish 
      ? `Namaste ${user.displayName?.split(' ')[0] || 'Champion'} ${genderTerm}! 🚀 Main hoon **Sarathi** - aapka friendly AI companion. Batao aaj kya chill chat karein? 😉`
      : `Hello ${user.displayName?.split(' ')[0] || 'Champion'} ${genderTerm}! 🚀 I am **Sarathi** - your friendly AI companion. Ready to chat? 😉`;

    const welcomeMsg: UIMessage = {
        id: 'welcome',
        role: 'assistant',
        text: welcomeText,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    setMessages([welcomeMsg]);
    setHistory([]);
    setTimeout(scrollToBottom, 100);
  }, [user, scrollToBottom]);

  // --- Effects ---

  useEffect(() => {
    setMessages([]);
    setHistory([]);
    setResumeFile(null);
    setFileName("");
    setResumeText("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    
    if (!isOpen || !user) return;
    
    const cacheKey = getCacheKey();
    const cached = cacheKey ? localStorage.getItem(cacheKey) : null;

    if (cached && !(activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation')) {
        try {
            const data = JSON.parse(cached);
            const savedTime = data.timestamp || 0;
            const now = Date.now();
            const twentyFourHours = 24 * 60 * 60 * 1000;
            
            if (now - savedTime > twentyFourHours) {
                if (cacheKey) localStorage.removeItem(cacheKey);
                if (activeMode === 'sarathi') {
                    setTimeout(triggerWelcomeMessage, 400);
                } else if (selectedTopic) {
                    setTimeout(() => startTopicChat(selectedTopic), 400);
                }
            } else {
                setMessages(data.messages || []);
                setHistory(data.history || []);
                setTimeout(scrollToBottom, 100);
            }
        } catch (e) {
            console.error('Error parsing cached chat:', e);
            if (activeMode === 'sarathi') {
                setTimeout(triggerWelcomeMessage, 400);
            }
        }
    } else if (activeMode === 'sarathi') {
         setTimeout(triggerWelcomeMessage, 400);
    }
  }, [isOpen, activeMode, selectedTopic, user, getCacheKey, scrollToBottom, triggerWelcomeMessage]);

  useEffect(() => {
    const cacheKey = getCacheKey();
    if (cacheKey && messages.length > 0 && !(activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation')) {
        localStorage.setItem(cacheKey, JSON.stringify({ 
            messages, 
            history,
            timestamp: Date.now()
        }));
    }
  }, [messages, history, getCacheKey, activeMode, selectedTopic]);

  useEffect(() => scrollToBottom(), [messages, isLoading, scrollToBottom]);

  // --- Handlers ---

  const handleSendMessage = async (textOverride?: string) => {
    const query = textOverride || input.trim();
    if (!query || isLoading) return;

    const userMsg: UIMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const newHistory = [...history, { role: 'user', content: query }];
    setHistory(newHistory);

    try {
        let responseText = '';
        let qaMessages: UIMessage[] = [];
        let followUpText = '';
        
        if (activeMode === 'sarathi') {
            if (sarathiMode === 'offline') {
                responseText = await generateOfflineResponse(
                    newHistory,
                    "Sarathi friendly assistant",
                    user?.displayName || 'User',
                    user?.gender || 'other',
                    languageRef.current
                );
            } else {
                responseText = await sarathiAIOffline(
                    user?.displayName || 'User',
                    user?.gender || 'other',
                    query,
                    languageRef.current,
                    newHistory
                );
            }
        } else {
            if (selectedTopic === 'Interview Preparation') {
                if (interviewMode === 'offline') {
                    const currentQ = offlineQuestions[currentQuestionIdx];
                    if (!currentQ) {
                        responseText = languageRef.current === 'Hinglish'
                          ? "Interview completed! Kripya fresh start ke liye Reset button click karein."
                          : "Interview completed! Please click the Reset button for a fresh start.";
                    } else {
                        const evalResult = evaluateOfflineAnswer(currentQ, query, resumeText, languageRef.current);
                        responseText = evalResult.feedback;
                        
                        const nextIdx = currentQuestionIdx + 1;
                        if (nextIdx < offlineQuestions.length) {
                            setCurrentQuestionIdx(nextIdx);
                            const nextQ = offlineQuestions[nextIdx];
                            const nextQText = languageRef.current === 'Hinglish' ? nextQ.q_hinglish : nextQ.q_en;
                            
                            followUpText = languageRef.current === 'Hinglish'
                              ? `\n\n📝 **Agla technical question (Q${nextIdx + 1}):**\n${nextQText}`
                              : `\n\n📝 **Next technical question (Q${nextIdx + 1}):**\n${nextQText}`;
                        } else {
                            followUpText = languageRef.current === 'Hinglish'
                              ? `\n\n🎉 **Mock Interview Completed!**\n\nAapne sabhi technical questions ke answers de diye hain. Industrial tips aur suggestions ko readout karein aur behtar career path ke liye model answers ke according practice karein. All the best! 👍`
                              : `\n\n🎉 **Mock Interview Completed!**\n\nYou have answered all technical questions. Read the suggestions and practice with the professional model answers to improve your interview performance. Best of luck! 👍`;
                        }
                    }
                } else {
                    const result = await interviewPrepperOffline(
                        resumeText,
                        experienceLevel,
                        languageRef.current,
                        newHistory,
                        false
                    );
                    
                    if (result.questions.length > 0) {
                        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                        qaMessages = result.questions.map((qa, idx) => ({
                            id: `qa-${Date.now()}-${idx}`,
                            role: 'assistant',
                            text: "",
                            isQuestionAnswer: true,
                            question: qa.question,
                            answer: qa.answer,
                            timestamp
                        }));
                    }
                    followUpText = result.followUp;
                }
            } else {
                responseText = await gyanAIOffline(
                    selectedTopic!,
                    query,
                    languageRef.current,
                    newHistory
                );
            }
        }

        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        if (qaMessages.length > 0) {
            setMessages(prev => [...prev, ...qaMessages]);
            if (followUpText) {
                setMessages(prev => [...prev, {
                    id: `followup-${Date.now()}`,
                    role: 'assistant',
                    text: followUpText,
                    timestamp
                }]);
            }
        } else if (responseText) {
            setMessages(prev => [...prev, {
                id: `ai-${Date.now()}`,
                role: 'assistant',
                text: responseText,
                timestamp
            }]);
            if (followUpText) {
                setMessages(prev => [...prev, {
                    id: `followup-${Date.now()}`,
                    role: 'assistant',
                    text: followUpText,
                    timestamp
                }]);
            }
        }

        setHistory(prev => [...prev, { role: 'assistant', content: responseText || followUpText || '' }]);

    } catch (error: any) {
        console.error('AI Error:', error);
        const errorMessage = error.message || 'Unknown error';
        let displayErrorText = `⚠️ AI Error: ${errorMessage.includes('API') ? 'Please check your API setup and internet connection.' : errorMessage}`;
        if (errorMessage === "API_KEY_MISSING") {
            displayErrorText = `⚠️ **AI API Key Missing**\n\nReal-time online mode use karne ke liye aapko Settings me **API Key** daalna hoga.\n\nUpar right corner me **⚙️ (Settings)** icon par click karein aur apni key save karein.`;
            setShowSettings(true);
        }
        setMessages(prev => [...prev, {
            id: `error-${Date.now()}`,
            role: 'assistant',
            text: displayErrorText,
            timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }]);
    } finally {
        setIsLoading(false);
        setTimeout(() => inputRef.current?.focus(), 150);
    }
  };

  // File Upload Handler
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        
        if (file.size > 5 * 1024 * 1024) {
            toast({
                variant: "destructive",
                title: "File too large",
                description: "Max 5MB please! 📏",
            });
            e.target.value = "";
            return;
        }

        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const fileName = file.name.toLowerCase();
        if (!allowedTypes.includes(file.type) && !fileName.match(/\.(doc|docx|pdf)$/)) {
            toast({
                variant: "destructive",
                title: "Invalid File Type",
                description: "PDF or Word only please! 📄",
            });
            e.target.value = "";
            return;
        }

        setResumeFile(file);
        setFileName(file.name);
        
        toast({
            title: "✅ Resume Ready",
            description: `"${file.name}" loaded successfully!`,
            className: "bg-emerald-50 border-emerald-200"
        });
    }
  };

  const startInterview = async () => {
      if (!resumeFile) return;
      setIsProcessingResume(true);
      
      try {
          const extractedText = await parseResumeOffline(resumeFile);
          setResumeText(extractedText);
          
          if (!extractedText || extractedText.length < 50) {
            throw new Error("Resume text extraction failed or too short. Please ensure your file contains readable text.");
          }

          if (interviewMode === 'offline') {
              const selectedQs = selectOfflineQuestions(extractedText, experienceLevel);
              if (selectedQs.length === 0) {
                  throw new Error("No questions available in the offline database.");
              }
              setOfflineQuestions(selectedQs);
              setCurrentQuestionIdx(0);
              
              const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
              
              const welcomeMsg: UIMessage = {
                  id: 'interview-welcome',
                  role: 'assistant',
                  text: languageRef.current === 'Hinglish'
                    ? `🎯 **Offline Mock Interview Started!**\n\nMaine aapka resume read kiya hai aur iske basis par 3 relevant technical questions select kiye hain. Ek-ek karke naturally answers type karein, main har answer par aapko industrial tips, model answers aur motivation dunga!\n\n**Pehla technical question:**`
                    : `🎯 **Offline Mock Interview Started!**\n\nI have successfully analyzed your resume and selected 3 key technical questions. Answer them step-by-step, and I will supply detailed suggestions, professional answers, and encouragement.\n\n**First technical question:**`,
                  timestamp
              };

              const firstQ = selectedQs[0];
              const qMsg: UIMessage = {
                  id: `offline-q-0`,
                  role: 'assistant',
                  text: languageRef.current === 'Hinglish' ? firstQ.q_hinglish : firstQ.q_en,
                  timestamp
              };

              setMessages([welcomeMsg, qMsg]);
              setHistory([
                  { role: 'assistant', content: welcomeMsg.text },
                  { role: 'assistant', content: qMsg.text }
              ]);

              toast({
                  title: "🚀 Mock Interview Started!",
                  description: "Offline mode is active. Please answer the first question above.",
                  className: "bg-green-50 border-green-200"
              });
              setIsProcessingResume(false);
              return;
          }

          const result = await interviewPrepperOffline(
              extractedText,
              experienceLevel,
              languageRef.current,
              [],
              true
          );

          if (!result.questions || result.questions.length === 0) {
            throw new Error("Failed to generate interview questions");
          }

          const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          
          const welcomeMsg: UIMessage = {
              id: 'interview-welcome',
              role: 'assistant',
              text: `🎯 Perfect! I've analyzed your resume (${extractedText.length} characters). Let's start your ${experienceLevel === 'Fresher Student' ? 'fresher' : 'experienced'} interview simulation. Answer naturally and I'll provide detailed feedback!`,
              timestamp
          };
          
          const qaMessages: UIMessage[] = result.questions.map((qa, idx) => ({
                id: `init-${idx}`,
                role: 'assistant',
                text: "",
                isQuestionAnswer: true,
                question: qa.question,
                answer: qa.answer,
                timestamp
            }));
            
           setMessages([welcomeMsg, ...qaMessages]);
           
           if (result.followUp) {
             setMessages(prev => [...prev, { 
                id: 'init-follow', 
                role: 'assistant', 
                text: result.followUp, 
                timestamp 
             }]);
           }

           toast({
               title: "🚀 Interview Started!",
               description: "Answer questions naturally. Type your responses below.",
               className: "bg-green-50 border-green-200"
           });

      } catch (err: any) {
          console.error('Interview setup error:', err);
          let errMsg = err.message || "Resume analysis failed. Ensure file is readable and try again.";
          if (err.message === "API_KEY_MISSING") {
              errMsg = "Real-time AI features require an API Key. Please click the Settings (gear) icon in the header to enter your API key.";
              setShowSettings(true);
          }
          toast({ 
            variant: "destructive", 
            title: "⚠️ Setup Error", 
            description: errMsg,
          });
      } finally {
          setIsProcessingResume(false);
      }
  };

  const resetInterview = () => {
      setMessages([]);
      setHistory([]);
      setResumeFile(null);
      setFileName("");
      setResumeText("");
      setOfflineQuestions([]);
      setCurrentQuestionIdx(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
      toast({
          title: "🔄 Interview Reset",
          description: "Ready for a fresh start! Upload your resume again.",
          className: "bg-blue-50 border-blue-200"
      });
  };

  const startTopicChat = async (topic: GyanAITopic) => {
      setSelectedTopic(topic);
      if (topic === 'Interview Preparation') return;

      setIsLoading(true);
      try {
          const introText = await gyanAIOffline(
              topic,
              `Introduce yourself as the ultimate ${topic} expert and share 3 key ways you can help.`,
              languageRef.current,
              []
          );
          
          setMessages([{
              id: 'intro',
              role: 'assistant',
              text: introText,
              timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
          }]);
      } catch (e: any) {
          console.error(e);
          let errMsg = e.message || "Failed to initialize expert. Check your internet connection.";
          if (e.message === "API_KEY_MISSING") {
              errMsg = "Real-time AI features require an API Key. Please click the Settings (gear) icon in the header to enter your API key.";
              setShowSettings(true);
          }
          toast({
              variant: "destructive",
              title: "Connection Error",
              description: errMsg
          });
      } finally {
          setIsLoading(false);
      }
  };

  // --- Renders ---

  const isGyanHome = activeMode === 'gyan-ai' && !selectedTopic;
  const isInterviewSetup = activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation' && messages.length === 0;

  return (
    <div className="flex flex-col h-full bg-slate-50 relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Settings Overlay */}
        {showSettings && (
            <div className="absolute inset-0 bg-white z-30 flex flex-col p-6 transition-all duration-300">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
                        API Key Settings
                    </h3>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setShowSettings(false)}
                        className="rounded-full"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </Button>
                </div>
                
                <div className="flex-1 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        To enable real-time features, enter your <strong>Google API Key</strong>. 
                        Your key is saved securely on your device locally and is never shared.
                    </p>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                            API Key
                        </label>
                        <Input 
                            type="password"
                            placeholder="AIzaSy..."
                            value={settingsApiKey}
                            onChange={(e) => setSettingsApiKey(e.target.value)}
                            className="h-12 border-slate-200 focus-visible:ring-indigo-500 rounded-xl"
                        />
                    </div>
                    
                    <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
                        <span className="font-semibold block text-slate-700">How to get a key?</span>
                        <a 
                            href="https://aistudio.google.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline inline-block font-semibold"
                        >
                            Get a free API key from Google AI Studio ↗
                        </a>
                    </div>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                localStorage.removeItem('dairyhub_api_key');
                                localStorage.removeItem('dairyhub_gemini_api_key');
                                setSettingsApiKey("");
                                toast({
                                    title: "Settings Reset",
                                    description: "API key has been removed.",
                                });
                            }
                        }}
                        className="flex-1 h-12 rounded-xl"
                    >
                        Clear Key
                    </Button>
                    <Button
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                localStorage.setItem('dairyhub_api_key', settingsApiKey.trim());
                                localStorage.setItem('dairyhub_gemini_api_key', settingsApiKey.trim());
                                toast({
                                    title: "Settings Saved",
                                    description: "API key saved successfully! 🎉",
                                    className: "bg-emerald-50 border-emerald-200"
                                });
                                setShowSettings(false);
                            }
                        }}
                        className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/20"
                    >
                        Save Settings
                    </Button>
                </div>
            </div>
        )}

        {/* Header */}
        <div className="px-4 py-3 flex items-center justify-between shrink-0 shadow-md transition-all duration-500 border-b border-white/10 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white z-20">
            <div className="flex items-center gap-3 flex-1">
                {activeMode === 'gyan-ai' && (
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                            setSelectedTopic(null);
                            setActiveMode('sarathi');
                        }} 
                        className="h-9 w-9 -ml-1 hover:bg-white/20 text-white transition-all rounded-full"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                )}
                
                <div className="relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-white/30 shadow-md flex-shrink-0 overflow-hidden bg-white/20">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_6535%20(2).jpg?alt=media&token=5843169c-b4d5-4e04-b2be-3ab1a49af457"
                            alt="Sarathi Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-bold text-[15px] sm:text-base leading-tight truncate font-headline tracking-tight">
                            {activeMode === 'sarathi' ? '💬 Sarathi Chat Bot' : (selectedTopic || 'DairyHub Expert Bot')}
                        </h3>
                        <p className="text-[10px] sm:text-xs font-medium opacity-80 leading-tight text-indigo-200/90">
                            {activeMode === 'sarathi' ? 'Friendly Companion' : 'Domain Expert'}
                        </p>
                    </div>
                    <div className="w-2 h-2 bg-emerald-400 border border-white/50 rounded-full animate-pulse ml-auto shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                </div>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
                 {activeMode === 'sarathi' && (
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => {
                            setActiveMode('gyan-ai');
                            setSelectedTopic('Interview Preparation');
                        }}
                        className="h-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-[10px] sm:text-xs px-2 sm:px-3 rounded-lg shadow-sm font-semibold transition-all"
                    >
                        <Sparkles className="w-3.5 h-3.5 mr-1 text-yellow-300" />
                        Experts
                    </Button>
                 )}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowSettings(!showSettings)} 
                    className="h-9 w-9 rounded-xl hover:bg-white/20 text-white transition-all"
                >
                    <Settings className="w-4 h-4" />
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onClose} 
                    className="h-9 w-9 rounded-xl hover:bg-white/20 hover:text-red-400 text-white transition-all"
                >
                    <X className="w-5 h-5" />
                </Button>
            </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden relative">
            
            {/* Gyan AI Topic Selection */}
            {isGyanHome && (
                <ScrollArea className="flex-1 bg-slate-50/50">
                    <div className="p-4 sm:p-6 space-y-6 text-center max-w-md mx-auto">
                        <div className="space-y-2 mt-4">
                            <h2 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-headline">
                                Choose Your Expert
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                                DairyHub specialized knowledge for your career journey
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
                            {[
                                { id: 'Career Guidance in Food Industry', icon: GraduationCap, color: 'from-emerald-400 to-teal-500', bgLight: 'bg-emerald-50 hover:bg-emerald-100', border: 'border-emerald-200' },
                            ].map((topic) => (
                                <button
                                    key={topic.id}
                                    onClick={() => startTopicChat(topic.id as GyanAITopic)}
                                    className="group relative flex flex-col items-center justify-center p-4 sm:p-5 bg-white hover:shadow-md rounded-2xl border border-gray-100 hover:border-indigo-200 text-center aspect-square transition-all duration-200 active:scale-95 box-border w-full col-span-2 sm:col-span-1"
                                >
                                    <div className={cn("absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", topic.bgLight)} />
                                    
                                    <span className="absolute top-2 right-2 z-20">
                                      <Badge variant="secondary" className="text-[9px] px-1.5 py-0 font-bold leading-4 border bg-blue-100 text-blue-700 border-blue-200">
                                        DairyHub Expert
                                      </Badge>
                                    </span>

                                    <div className="relative z-10">
                                      <div className={cn("p-3 rounded-xl bg-gradient-to-br text-white mb-3 shadow-sm transition-transform duration-300 group-hover:shadow-md", topic.color)}>
                                        <topic.icon className="w-6 h-6" />
                                      </div>
                                    </div>
                                    <span className="relative z-10 font-bold text-xs sm:text-sm font-headline text-slate-700 group-hover:text-slate-900 transition-colors leading-tight line-clamp-2 px-1">
                                      {topic.id.split(' in ')[0]}
                                    </span>
                                    <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
                                </button>
                            ))}

                            <button
                                onClick={() => setSelectedTopic('Interview Preparation')}
                                className="group relative flex flex-col items-center justify-center p-4 sm:p-5 bg-white hover:shadow-md rounded-2xl border border-gray-100 hover:border-indigo-200 text-center aspect-square transition-all duration-200 active:scale-95 box-border w-full col-span-2 sm:col-span-1"
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-50 hover:bg-indigo-100" />
                                
                                <span className="absolute top-2 right-2 z-20">
                                  <Badge variant="secondary" className="text-[9px] px-1.5 py-0 font-bold leading-4 border bg-purple-100 text-purple-700 border-purple-200">
                                    Mock Interview
                                  </Badge>
                                </span>

                                <div className="relative z-10">
                                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                                    <BrainCircuit className="w-6 h-6" />
                                  </div>
                                </div>
                                <span className="relative z-10 font-bold text-xs sm:text-sm font-headline text-slate-700 group-hover:text-slate-900 transition-colors leading-tight line-clamp-2 px-1">
                                  Interview Prep
                                </span>
                                <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
                            </button>
                        </div>
                    </div>
                </ScrollArea>
            )}

            {/* Interview Prep Setup Screen */}
            {isInterviewSetup && (
                <ScrollArea className="flex-1 bg-slate-50/50">
                    <div className="p-4 sm:p-6 space-y-5 max-w-md mx-auto">
                        <div className="text-center space-y-1">
                            <h3 className="text-lg font-bold text-slate-800 font-headline">
                                🎯 Mock Interview Setup
                            </h3>
                            <p className="text-xs text-slate-500">
                                Upload your resume to generate personalized technical questions
                            </p>
                        </div>

                        {/* File Upload Box */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                                1. Upload Resume (PDF/DOCX)
                            </label>
                            
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                            />

                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className={cn(
                                    "border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all duration-300",
                                    resumeFile 
                                        ? "border-emerald-400 bg-emerald-50/50" 
                                        : "border-slate-300 hover:border-indigo-400 bg-white hover:bg-indigo-50/30"
                                )}
                            >
                                {resumeFile ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <FileCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                                        <div className="text-left min-w-0">
                                            <p className="text-xs font-bold text-slate-800 truncate">{fileName}</p>
                                            <p className="text-[10px] text-emerald-600 font-medium">Ready for AI analysis</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Upload className="w-8 h-8 text-slate-400 mx-auto" />
                                        <div>
                                            <p className="text-xs font-bold text-slate-700">Click to upload resume</p>
                                            <p className="text-[10px] text-slate-400 mt-0.5">PDF, DOC, DOCX (Max 5MB)</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Experience Level Selector */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                                2. Select Experience Level
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'Fresher Student', label: '🎓 Student / Fresher' },
                                    { id: 'Experienced Person', label: '💼 Experienced (1+ Yrs)' }
                                ].map(level => (
                                    <button
                                        key={level.id}
                                        onClick={() => setExperienceLevel(level.id as any)}
                                        className={cn(
                                            "p-3 rounded-xl border text-xs font-bold text-center transition-all",
                                            experienceLevel === level.id 
                                                ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" 
                                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                        )}
                                    >
                                        {level.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mode Switcher */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                                3. Mode Selection
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setInterviewMode('offline')}
                                    className={cn(
                                        "p-2.5 rounded-xl border text-xs font-bold text-center transition-all",
                                        interviewMode === 'offline' 
                                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm" 
                                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    ⚡ Fast Offline Mode
                                </button>
                                <button
                                    onClick={() => setInterviewMode('online')}
                                    className={cn(
                                        "p-2.5 rounded-xl border text-xs font-bold text-center transition-all",
                                        interviewMode === 'online' 
                                            ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" 
                                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    🌐 Real-time Online AI
                                </button>
                            </div>
                        </div>

                        {/* Start Button */}
                        <Button
                            onClick={startInterview}
                            disabled={!resumeFile || isProcessingResume}
                            className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/25 transition-all text-sm"
                        >
                            {isProcessingResume ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Analyzing Resume...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Start Interview Simulation
                                </>
                            )}
                        </Button>
                    </div>
                </ScrollArea>
            )}

            {/* Chat Message Scroll Area */}
            {(!isGyanHome && !isInterviewSetup) && (
                <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50/30">
                    {messages.map((msg) => (
                        <div key={msg.id} className="space-y-2">
                            {msg.isQuestionAnswer ? (
                                <div className="bg-white border border-indigo-100 rounded-2xl p-4 shadow-sm space-y-3 my-2">
                                    <div className="flex items-start gap-2">
                                        <Badge className="bg-indigo-600 text-white text-[10px] shrink-0 mt-0.5">
                                            Question
                                        </Badge>
                                        <p className="text-xs font-bold text-slate-800 leading-relaxed">
                                            {msg.question}
                                        </p>
                                    </div>
                                    
                                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs space-y-1">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                                            Sample Model Answer:
                                        </span>
                                        <p className="text-slate-700 leading-relaxed font-sans text-xs">
                                            {msg.answer}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className={cn(
                                    "flex flex-col max-w-[85%] rounded-2xl p-3 shadow-sm text-xs transition-all",
                                    msg.role === 'user' 
                                      ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white ml-auto rounded-tr-none" 
                                      : "bg-white border border-slate-200/80 text-slate-800 mr-auto rounded-tl-none shadow-slate-100"
                                )}>
                                    <span className="whitespace-pre-wrap leading-relaxed">{msg.text}</span>
                                    <span className="text-[8px] opacity-70 mt-1 text-right block self-end">{msg.timestamp}</span>
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {isLoading && (
                        <div className="flex items-center gap-2 text-xs text-slate-500 p-3 bg-white rounded-2xl border border-slate-200 mr-auto max-w-[60%] shadow-sm animate-pulse">
                            <Loader2 className="h-4 w-4 animate-spin text-indigo-600 shrink-0" />
                            <span className="font-medium">Sarathi is thinking...</span>
                        </div>
                    )}
                </div>
            )}

            {/* Controls Bar for Active Interview */}
            {(activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation' && messages.length > 0) && (
                <div className="px-3 py-2 bg-indigo-50/80 border-t border-indigo-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-indigo-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Mock Interview Active ({interviewMode.toUpperCase()})
                    </span>
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={resetInterview}
                        className="h-7 text-[10px] font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                    >
                        <RotateCcw className="w-3 h-3 mr-1" />
                        Reset Interview
                    </Button>
                </div>
            )}

            {/* Input Bar */}
            {(!isGyanHome && !isInterviewSetup) && (
                <div className="p-3 border-t border-slate-200/80 bg-white flex items-center gap-2 shrink-0 z-10 shadow-lg">
                    {/* Language Selector Dropdown */}
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="h-9 px-2 text-[10px] font-bold bg-slate-100 border border-slate-200 text-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <option value="English">EN</option>
                        <option value="Hinglish">Hinglish</option>
                    </select>

                    <Input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
                        placeholder={activeMode === 'sarathi' ? 'Ask Sarathi AI...' : 'Ask expert or type answer...'}
                        className="flex-1 text-xs h-9 bg-slate-50 border-slate-200 focus-visible:ring-indigo-500 rounded-xl"
                    />
                    
                    <Button 
                        size="icon" 
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl h-9 w-9 flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-95"
                        onClick={() => handleSendMessage()}
                        disabled={isLoading || !input.trim()}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            )}

        </div>
    </div>
  );
}
