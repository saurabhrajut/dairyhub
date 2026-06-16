"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Settings
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
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

// --- Offline AI Helper Functions ---

// Simple PDF text extraction using canvas approach
async function extractPDFText(file: File): Promise<string> {
    try {
      // Use Mozilla's PDF.js with proper Next.js configuration
      const pdfjs = await import('pdfjs-dist');
      
      // Configure worker
      if (typeof window !== 'undefined') {
        // FIX: Yahan end mein '.js' ko hata kar '.mjs' kar diya hai
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
      // Fallback: just return a message
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

// Sarathi AI - Career Navigator
async function sarathiAIOffline(
  userName: string,
  question: string,
  language: string,
  history: Array<{ role: string; content: string }>
): Promise<string> {
  const systemPrompt = `You are Sarathi - an enthusiastic career navigator AI assistant for the food industry. 
  
Your role:
- Help users with career guidance, job search, skill development
- Be friendly, motivating, and use emojis appropriately
- Response language: ${language}
- Keep responses concise (2-3 paragraphs max)
- Use bullet points for actionable advice

User's name: ${userName}`;

  const messages = [
    ...history.map(h => ({ role: h.role, content: h.content })),
    { role: "user", content: question }
  ];

  return await callClaudeAPI(messages, systemPrompt);
}

// Gyan AI - Domain Expert
async function gyanAIOffline(
  topic: string,
  question: string,
  language: string,
  history: Array<{ role: string; content: string }>
): Promise<string> {
  const systemPrompt = `You are an expert AI assistant specializing in: ${topic}

Your role:
- Provide deep, specialized knowledge
- Be professional yet approachable
- Response language: ${language}
- Give practical, actionable advice
- Use examples from the food industry

Keep responses focused and valuable.`;

  const messages = [
    ...history.map(h => ({ role: h.role, content: h.content })),
    { role: "user", content: question }
  ];

  return await callClaudeAPI(messages, systemPrompt);
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
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120"
              alt="Sarathi Chat Bot"
              className="w-full h-full object-cover"
          />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse shadow-md z-10"></span>
        </Button>
      </div>

      {/* Chat Container */}
      <div className={cn(
        "fixed bottom-4 right-4 z-50 w-[92vw] sm:w-[400px] h-[85vh] sm:h-[70vh] max-h-[85vh] bg-white border border-slate-200/50 rounded-3xl shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right overflow-hidden",
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-12 pointer-events-none'
      )}>
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

    // Don't restore cache for interview mode
    if (cached && !(activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation')) {
        const data = JSON.parse(cached);
        setMessages(data.messages);
        setHistory(data.history);
        setTimeout(scrollToBottom, 100);
    } else if (activeMode === 'sarathi') {
         setTimeout(() => {
            const welcomeMsg: UIMessage = {
                id: 'welcome',
                role: 'assistant',
                text: `Namaste ${user.displayName?.split(' ')[0] || 'Champion'}! 🚀 I am **Sarathi** - your ultimate career navigator. Ready to conquer your goals?`,
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            };
            setMessages([welcomeMsg]);
            scrollToBottom();
         }, 400);
    }
  }, [isOpen, activeMode, selectedTopic, user, getCacheKey, scrollToBottom]);

  useEffect(() => {
    const cacheKey = getCacheKey();
    // Don't cache interview sessions
    if (cacheKey && messages.length > 0 && !(activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation')) {
        localStorage.setItem(cacheKey, JSON.stringify({ messages, history }));
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
            responseText = await sarathiAIOffline(
                user?.displayName || 'User',
                query,
                languageRef.current,
                newHistory
            );
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

        // Update history for next turn
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
          // Parse resume offline
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

          // Generate initial interview questions (ONLINE MODE)
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
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative">
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
                            className="h-12 border-slate-200 focus-visible:ring-indigo-500"
                        />
                    </div>
                    
                    <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1">
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
                        className="flex-1 h-12 rounded-2xl"
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
                        className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-lg shadow-indigo-600/20"
                    >
                        Save Settings
                    </Button>
                </div>
            </div>
        )}

        {/* Header */}
        <div className={cn(
            "px-5 py-4 flex items-center justify-between shrink-0 shadow-lg transition-all duration-500 border-b border-slate-200/50",
            activeMode === 'sarathi' ? "bg-white" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        )}>
            <div className="flex items-center gap-3 flex-1">
                {activeMode === 'gyan-ai' && (
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => {
                            if (selectedTopic) setSelectedTopic(null);
                            else setActiveMode('sarathi');
                        }} 
                        className="h-9 w-9 -ml-1 hover:bg-white/20 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                )}
                
                <div className="relative flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl border-2 border-white/80 shadow-md flex-shrink-0 overflow-hidden bg-white/20">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120"
                            alt="Sarathi Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-bold text-base leading-tight truncate">
                            {activeMode === 'sarathi' ? '💬 Sarathi Chat Bot' : (selectedTopic || 'DairyHub Expert Bot')}
                        </h3>
                        <p className={cn("text-xs font-medium opacity-90 leading-tight", 
                            activeMode === 'sarathi' ? "text-slate-600" : "text-indigo-100"
                        )}>
                            {activeMode === 'sarathi' ? 'Career Navigator' : 'Domain Expert'}
                        </p>
                    </div>
                    <div className="w-2 h-2 bg-emerald-400 border-2 border-white rounded-full animate-pulse ml-auto"></div>
                </div>
            </div>
            
            <div className="flex items-center gap-2">
                 {activeMode === 'sarathi' && (
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => setActiveMode('gyan-ai')}
                        className="h-9 bg-white/20 hover:bg-white/30 text-white border-white/20 text-xs px-3 rounded-2xl shadow-lg font-semibold transition-all"
                    >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Experts
                    </Button>
                 )}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowSettings(!showSettings)} 
                    className={cn(
                        "h-10 w-10 rounded-2xl shadow-lg transition-all",
                        activeMode === 'gyan-ai' ? "hover:bg-white/30 text-white" : "hover:bg-slate-100 text-slate-600"
                    )}
                >
                    <Settings className="w-5 h-5" />
                </Button>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={onClose} 
                    className={cn(
                        "h-10 w-10 rounded-2xl shadow-lg transition-all",
                        activeMode === 'gyan-ai' ? "hover:bg-white/30 text-white" : "hover:bg-slate-100 text-slate-600"
                    )}
                >
                    <X className="w-5 h-5" />
                </Button>
            </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            
            {/* Gyan AI Topic Selection */}
            {isGyanHome && (
                <ScrollArea className="flex-1">
                    <div className="p-6 space-y-6 text-center">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Choose Your Expert
                            </h2>
                            <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                                DairyHub specialized knowledge for your career journey
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                            {[
                                { id: 'Career Guidance in Food Industry', icon: GraduationCap, color: 'text-emerald-500', bg: 'bg-emerald-50', gradient: 'from-emerald-500 to-teal-600' },
                            ].map((topic) => (
                                <button
                                    key={topic.id}
                                    onClick={() => startTopicChat(topic.id as GyanAITopic)}
                                    className="group relative h-28 bg-white border-2 border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl hover:border-emerald-400 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" 
                                         style={{background: `linear-gradient(135deg, ${topic.gradient})`}} />
                                    <div className="relative flex flex-col items-center justify-center h-full p-6 gap-3">
                                        <div className={cn("p-4 rounded-3xl shadow-2xl border", topic.bg)}>
                                            <topic.icon className={cn("w-8 h-8", topic.color)} />
                                        </div>
                                        <div>
                                            <span className="block text-lg font-bold text-slate-800 leading-tight">{topic.id.split(' in ')[0]}</span>
                                            <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full mt-1">DairyHub Expert</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        {/* Interview Prep */}
                        <button
                            onClick={() => setSelectedTopic('Interview Preparation')}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 h-24"
                        >
                            <div className="absolute inset-0 bg-white/10" />
                            <div className="relative flex items-center h-full px-6 gap-4">
                                <div className="p-4 bg-white/20 rounded-3xl shadow-2xl">
                                    <FileText className="w-8 h-8 text-white drop-shadow-lg" />
                                </div>
                                <div className="flex-1 text-left text-white">
                                    <h3 className="text-xl font-black leading-tight">DairyHub Mock Interview</h3>
                                    <p className="text-sm opacity-90 leading-tight">Upload resume → Interview practice</p>
                                </div>
                                <ArrowLeft className="w-6 h-6 text-white drop-shadow-lg group-hover:translate-x-2 transition-transform duration-300 rotate-[-20deg]" />
                            </div>
                        </button>
                    </div>
                </ScrollArea>
            )}

            {/* Interview Setup */}
            {isInterviewSetup && (
                <div className="flex-1 flex flex-col p-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 items-center justify-center text-center space-y-8 overflow-hidden">
                    <div className="space-y-3 flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
                            <FileText className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-slate-800 mb-1">🎯 DairyHub Interview Prep</h2>
                            <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
                                Analyze your PDF/DOC resume and simulate real mock interviews
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-md space-y-5 flex-1 flex flex-col justify-center">
                         <div className="grid grid-cols-2 gap-4">
                             {/* Experience Level */}
                             <div className="space-y-2 text-left">
                                 <label className="text-sm font-bold text-slate-700 block mb-1">Experience Level</label>
                                 <Select value={experienceLevel} onValueChange={(v: any) => setExperienceLevel(v)}>
                                     <SelectTrigger className="w-full h-12 bg-white border-slate-200 shadow-lg hover:shadow-xl">
                                         <SelectValue />
                                     </SelectTrigger>
                                     <SelectContent className="bg-white border-slate-200 shadow-2xl">
                                         <SelectItem value="Fresher Student">🎓 Fresher</SelectItem>
                                         <SelectItem value="Experienced Person">💼 Experienced</SelectItem>
                                     </SelectContent>
                                 </Select>
                             </div>
                             
                             {/* Interview Mode */}
                             <div className="space-y-2 text-left">
                                 <label className="text-sm font-bold text-slate-700 block mb-1">Interview Mode</label>
                                 <Select value={interviewMode} onValueChange={(v: any) => setInterviewMode(v)}>
                                     <SelectTrigger className="w-full h-12 bg-white border-slate-200 shadow-lg hover:shadow-xl">
                                         <SelectValue />
                                     </SelectTrigger>
                                     <SelectContent className="bg-white border-slate-200 shadow-2xl">
                                         <SelectItem value="offline">📴 Offline (Local)</SelectItem>
                                         <SelectItem value="online">🌐 Online (AI)</SelectItem>
                                     </SelectContent>
                                 </Select>
                             </div>
                         </div>

                        {/* File Upload */}
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className={cn(
                                "group relative border-3 border-dashed rounded-3xl p-8 h-32 transition-all cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl flex-shrink-0",
                                fileName 
                                  ? "border-emerald-400 bg-emerald-50" 
                                  : "border-slate-200/50 hover:border-indigo-400 bg-white hover:bg-indigo-50/50"
                            )}
                        >
                            <input 
                                ref={fileInputRef}
                                type="file" 
                                className="hidden" 
                                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                onChange={handleFileSelect}
                            />
                            
                            <div className="flex flex-col items-center justify-center h-full gap-3 relative z-10">
                                {fileName ? (
                                    <>
                                        <div className="w-16 h-16 bg-emerald-100/80 p-4 rounded-3xl shadow-2xl animate-bounce">
                                            <FileCheck className="w-8 h-8 text-emerald-600 drop-shadow-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-lg font-black text-emerald-800 truncate max-w-[200px] block px-2">{fileName}</span>
                                            <span className="text-sm text-emerald-600 font-semibold bg-emerald-100 px-3 py-1 rounded-full shadow-sm">✅ Ready</span>
                                        </div>
                                        <span className="text-xs text-emerald-500">Click to change</span>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-16 h-16 bg-white/50 p-4 rounded-3xl group-hover:bg-indigo-100/80 shadow-xl transition-all border-2 border-white/50">
                                            <Upload className="w-8 h-8 text-slate-400 group-hover:text-indigo-500 transition-colors drop-shadow-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-lg font-bold text-slate-700">📄 Drop Resume</span>
                                            <span className="text-sm text-slate-500">PDF, DOC, DOCX • Max 5MB</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Start Button */}
                        <Button 
                            className={cn(
                                "w-full h-14 text-lg font-bold shadow-2xl transition-all duration-300 rounded-3xl flex-shrink-0",
                                resumeFile 
                                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-emerald-500/50 hover:shadow-emerald-500/75 hover:scale-[1.02]" 
                                  : "bg-slate-200/70 text-slate-400 cursor-not-allowed shadow-none"
                            )}
                            disabled={!resumeFile || isProcessingResume}
                            onClick={startInterview}
                        >
                            {isProcessingResume ? (
                                <>
                                    <Loader2 className="animate-spin mr-3 w-6 h-6" />
                                    Analyzing Resume...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="mr-3 w-6 h-6" />
                                    🚀 Start Interview
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            )}

            {/* Main Chat View */}
            {!isGyanHome && !isInterviewSetup && (
                <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
                    {/* Reset Button for Active Interview */}
                    {activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation' && messages.length > 0 && (
                        <div className="px-5 pt-3 pb-2 border-b border-slate-200/50 bg-gradient-to-r from-slate-50 to-indigo-50/30 shrink-0">
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={resetInterview}
                                className="w-full h-10 bg-white hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all rounded-2xl shadow-lg font-semibold text-slate-600 border-slate-200"
                            >
                                <X className="w-4 h-4 mr-2" />
                                🔄 Reset Interview
                            </Button>
                        </div>
                    )}
                    
                    <ScrollArea className="flex-1 px-6 pb-3 pt-2" viewportRef={scrollRef}>
                        <div className="flex flex-col gap-4 pb-1">
                            {messages.length === 0 && (
                                <div className="flex flex-col items-center justify-center h-52 text-center text-slate-400 space-y-3">
                                    <div className="w-20 h-20 rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-indigo-50 mx-auto">
                                        <img 
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120"
                                            alt="Sarathi Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-lg font-bold text-slate-700">Ready to chat with Sarathi!</p>
                                        <p className="text-sm text-slate-500">Ask anything about your dairy industry career</p>
                                    </div>
                                </div>
                            )}
                            {messages.map((msg) => {
                                if (msg.isQuestionAnswer) {
                                    return (
                                        <div key={msg.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-3xl border-2 border-indigo-200/50 shadow-xl ml-4 max-w-[95%]">
                                            <div className="flex gap-3 items-start mb-4">
                                                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-2xl shadow-2xl flex-shrink-0 mt-0.5">
                                                    <BrainCircuit className="w-5 h-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-sm">
                                                        📋 INTERVIEW QUESTION
                                                    </div>
                                                    <p className="font-bold text-lg text-slate-800 leading-relaxed mb-1">{msg.question}</p>
                                                    <div className="h-px bg-gradient-to-r from-indigo-200 to-transparent w-20 -mt-1 mb-3" />
                                                </div>
                                            </div>
                                            <div className="pl-12 space-y-3">
                                                <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                    ✅ PROFESSIONAL ANSWER
                                                </div>
                                                <div className="text-slate-700 leading-relaxed bg-white/60 p-4 rounded-2xl border border-indigo-100">
                                                    <p className="text-base" dangerouslySetInnerHTML={{ __html: msg.answer?.replace(/\n/g, '<br />') || "" }} />
                                                </div>
                                                <div className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-3 py-2 rounded-xl border border-indigo-100">
                                                    💡 <strong>Tip:</strong> Practice this in your own words
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div key={msg.id} className={cn(
                                        "flex gap-3 max-w-[90%]", 
                                        msg.role === 'user' ? "self-end flex-row-reverse" : "self-start"
                                    )}>
                                        {msg.role === 'user' ? (
                                            <div className="w-11 h-11 rounded-2xl border-2 border-white shadow-md mt-1 flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                                <span className="text-white text-xs font-bold shadow-inner">YOU</span>
                                            </div>
                                        ) : (
                                            <div className="w-11 h-11 rounded-2xl border-2 border-white shadow-md mt-1 flex-shrink-0 overflow-hidden bg-indigo-50">
                                                <img 
                                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120"
                                                    alt="Sarathi Avatar"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className={cn(
                                            "py-4 px-6 rounded-3xl shadow-xl relative group max-w-[85%]",
                                            msg.role === 'user' 
                                                ? "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white rounded-br-none shadow-blue-500/30" 
                                                : "bg-white border border-slate-100/50 text-slate-800 rounded-bl-none shadow-slate-100/50"
                                        )}>
                                            <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                                            <span className={cn(
                                                "text-xs font-mono absolute -bottom-3 -right-3 bg-white/90 px-2 py-0.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap",
                                                msg.role === 'user' ? "text-blue-100 bg-blue-500/90 shadow-blue-500/30" : "text-slate-400 bg-slate-50 shadow-slate-200/50"
                                            )}>{msg.timestamp}</span>
                                        </div>
                                    </div>
                                );
                            })}
                            
                            {isLoading && (
                                <div className="self-start flex gap-2 ml-14">
                                    <div className="bg-white border p-4 rounded-3xl rounded-bl-none shadow-xl flex gap-1.5 items-center pr-8 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse opacity-30 rounded-3xl" />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0s]"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="px-5 pt-3 pb-2 bg-gradient-to-r from-white via-slate-50 to-indigo-50 border-t border-slate-200/50 shadow-inner shrink-0">
                        <div className="flex items-center justify-between mb-2 px-1">
                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="h-8 text-xs bg-white border-slate-200 shadow-sm hover:shadow-md rounded-2xl px-2 w-28">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-slate-200 shadow-2xl">
                                    <SelectItem value="English">🇬🇧 English</SelectItem>
                                    <SelectItem value="Hinglish">🇮🇳 Hinglish</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <form 
                            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
                            className="flex items-stretch gap-2 bg-white p-2 rounded-3xl border-2 border-slate-200/50 shadow-xl hover:shadow-2xl focus-within:shadow-3xl focus-within:border-blue-400/70 hover:border-slate-300/70 transition-all duration-300 group"
                        >
                            <Input 
                                ref={inputRef}
                                value={input} 
                                onChange={(e) => setInput(e.target.value)} 
                                placeholder={activeMode === 'sarathi' ? "💭 Ask Sarathi..." : "🧠 Ask expert..."}
                                className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 min-h-[44px] text-base px-4 placeholder-slate-400 group-focus-within:placeholder-slate-500"
                                disabled={isLoading}
                            />
                            <Button 
                                type="submit" 
                                size="icon" 
                                className={cn(
                                    "h-12 w-12 rounded-3xl shrink-0 transition-all duration-300 shadow-2xl group-hover:shadow-3xl",
                                    !input.trim() || isLoading 
                                      ? "bg-slate-200/70 text-slate-400 shadow-md cursor-not-allowed" 
                                      : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95"
                                )}
                                disabled={isLoading || !input.trim()}
                            >
                                <Send className={cn("w-5 h-5 transition-transform group-hover:translate-x-1", input.trim() ? "ml-1" : "ml-0.5")} />
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}
