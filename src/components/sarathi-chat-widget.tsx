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
  FileText
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import type { Message } from '@/ai/flows/types';
import { sarathiAI, gyanAI, interviewPrepper, parseResume } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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
          className="rounded-full w-14 h-14 shadow-2xl bg-gradient-to-tr from-orange-500 via-orange-400 to-blue-600 hover:scale-110 transition-all duration-300 border-4 border-white/90 backdrop-blur-sm" 
          onClick={handleOpenChat}
        >
          <MessageCircle className="w-7 h-7 text-white drop-shadow-sm" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse shadow-md"></span>
        </Button>
      </div>

      {/* Chat Container */}
      <div className={cn(
        "fixed bottom-4 right-4 z-50 w-[92vw] sm:w-[400px] h-[85vh] sm:h-[70vh] max-h-[85vh] bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl flex flex-col transition-all duration-500 origin-bottom-right overflow-hidden",
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

function ChatInterface({ isOpen, onClose, activeMode, setActiveMode }: { 
  isOpen: boolean; 
  onClose: () => void; 
  activeMode: ChatMode; 
  setActiveMode: (m: ChatMode) => void 
}) {
  const { user } = useAuth();
  const { toast } = useToast();
   
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 🎯 INTERVIEW PREP - FULL STATE MANAGEMENT
  const [selectedTopic, setSelectedTopic] = useState<GyanAITopic | null>(null);
  const [experienceLevel, setExperienceLevel] = useState<'Fresher Student' | 'Experienced Person'>('Fresher Student');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isProcessingResume, setIsProcessingResume] = useState(false);

  // 🎯 FILE INPUT REF - CRITICAL FOR UPLOAD
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const languageRef = useRef(language);
  languageRef.current = language;

  // --- Helpers ---

  const getCacheKey = useCallback(() => {
    if (!user) return null;
    const topicKey = activeMode === 'gyan-ai' && selectedTopic ? `_${selectedTopic}` : '';
    return `chat_v3_${activeMode}${topicKey}_${user.uid}`;
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
    
    if (!isOpen || !user) return;
    
    const cacheKey = getCacheKey();
    const cached = cacheKey ? localStorage.getItem(cacheKey) : null;

    if (cached) {
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
    if (cacheKey && messages.length > 0) {
        localStorage.setItem(cacheKey, JSON.stringify({ messages, history }));
    }
  }, [messages, history, getCacheKey]);

  useEffect(() => scrollToBottom(), [messages, isLoading, scrollToBottom]);

  // 🎯 FILE UPLOAD HANDLER - 100% WORKING
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Size check
    if (file.size > 5 * 1024 * 1024) {
      toast({
        variant: "destructive",
        title: "❌ File too large",
        description: "Maximum 5MB allowed 📏",
      });
      e.target.value = "";
      return;
    }

    // Type check
    const allowedTypes = [
      'application/pdf',
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      toast({
        variant: "destructive",
        title: "❌ Invalid file type",
        description: "Only PDF, DOC, DOCX allowed 📄",
      });
      e.target.value = "";
      return;
    }

    // ✅ SUCCESS - SET FILE
    setResumeFile(file);
    setFileName(file.name);
    
    toast({
      title: "✅ Resume uploaded!",
      description: `${file.name} is ready for analysis ✨`,
      className: "bg-emerald-50 border-emerald-200"
    });
  };

  // 🎯 START INTERVIEW - FULL FLOW
  const startInterview = async () => {
    if (!resumeFile) {
      toast({
        variant: "destructive",
        title: "No resume",
        description: "Please upload your resume first 📄"
      });
      return;
    }

    setIsProcessingResume(true);
    try {
      // Parse resume
      const formData = new FormData();
      formData.append('file', resumeFile);
      
      const result = await parseResume(formData);
      if (!result?.text) {
        throw new Error("Resume parsing failed");
      }

      // Start interview
      const response = await interviewPrepper({
        resumeText: result.text,
        experienceLevel,
        language: languageRef.current,
        history: [],
        initialRequest: true
      });

      if (!response?.response) {
        throw new Error("Interview initialization failed");
      }

      // Show interview questions
      const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const qaMessages: UIMessage[] = response.response.map((qa: any, idx: number) => ({
        id: `init-${idx}`,
        role: 'assistant',
        text: "",
        isQuestionAnswer: true,
        question: qa.question,
        answer: qa.answer || "Your turn to answer...",
        timestamp
      }));
      
      setMessages(qaMessages);
      
      if (response.followUpSuggestion) {
        setMessages(prev => [...prev, { 
          id: 'init-follow', 
          role: 'assistant', 
          text: response.followUpSuggestion, 
          timestamp 
        }]);
      }

      toast({
        title: "🎯 Interview Started!",
        description: "AI has analyzed your resume. Practice now!"
      });

    } catch (err: any) {
      console.error("Interview error:", err);
      toast({ 
        variant: "destructive", 
        title: "⚠️ Error", 
        description: err.message || "Failed to start interview. Try again." 
      });
    } finally {
      setIsProcessingResume(false);
    }
  };

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

    const newHistory = [...history, { role: 'user', content: [{ text: query }] } as Message];
    setHistory(newHistory);

    try {
      let response: any;
      
      if (activeMode === 'sarathi') {
        response = await sarathiAI({
          userName: user?.displayName || 'User',
          question: query,
          language: languageRef.current,
          history: newHistory
        });
      } else if (selectedTopic === 'Interview Preparation') {
        response = await interviewPrepper({
          resumeText: "",
          experienceLevel,
          language: languageRef.current,
          history: newHistory,
          initialRequest: false
        });
      } else {
        response = await gyanAI({
          topic: selectedTopic!,
          question: query,
          language: languageRef.current,
          history: newHistory
        });
      }

      if (!response) throw new Error("No response");

      const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      
      if (activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation' && response.response) {
        const qaMessages: UIMessage[] = response.response.map((qa: any, idx: number) => ({
          id: `qa-${Date.now()}-${idx}`,
          role: 'assistant',
          text: "",
          isQuestionAnswer: true,
          question: qa.question,
          answer: qa.answer,
          timestamp
        }));
        setMessages(prev => [...prev, ...qaMessages]);
        
        if (response.followUpSuggestion) {
          setMessages(prev => [...prev, {
            id: `followup-${Date.now()}`,
            role: 'assistant',
            text: response.followUpSuggestion,
            timestamp
          }]);
        }
      } else {
        const answerText = response.answer || response.refinedQuestion?.refinedQuestion || "Hmm, let me think about that...";
        setMessages(prev => [...prev, {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          text: answerText,
          timestamp
        }]);
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        id: 'error',
        role: 'assistant',
        text: "🌐 Connection hiccup! Try again in a moment?",
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  };

  const startTopicChat = async (topic: GyanAITopic) => {
    setSelectedTopic(topic);
    if (topic === 'Interview Preparation') return;

    setIsLoading(true);
    try {
      const response = await gyanAI({
        topic,
        question: `Introduce yourself as the ultimate ${topic} expert and share 3 key ways you can help.`,
        language: languageRef.current,
        history: []
      });
      
      setMessages([{
        id: 'intro',
        role: 'assistant',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  // Render conditions
  const isGyanHome = activeMode === 'gyan-ai' && !selectedTopic;
  const isInterviewSetup = activeMode === 'gyan-ai' && selectedTopic === 'Interview Preparation' && messages.length === 0;

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative">
      {/* Header */}
      <div className={cn(
        "px-5 py-4 flex items-center justify-between shrink-0 shadow-lg backdrop-blur-sm transition-all duration-500 border-b border-slate-200/50",
        activeMode === 'sarathi' ? "bg-white/90" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
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
            <div className={cn(
              "p-2 rounded-2xl shadow-lg backdrop-blur-sm flex-shrink-0",
              activeMode === 'sarathi' 
                ? "bg-gradient-to-br from-orange-400 to-orange-500" 
                : "bg-white/30"
            )}>
              {activeMode === 'sarathi' ? 
                <Bot className="w-7 h-7 text-white drop-shadow-sm" /> : 
                <BrainCircuit className="w-7 h-7 text-white drop-shadow-sm" />
              }
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-base leading-tight truncate">
                {activeMode === 'sarathi' ? '🤖 Sarathi AI' : (selectedTopic || 'Gyan AI')}
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
              className="h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20 text-xs px-3 rounded-2xl shadow-lg font-semibold transition-all"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              Experts
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className={cn(
              "h-10 w-10 rounded-2xl backdrop-blur-sm shadow-lg transition-all",
              activeMode === 'gyan-ai' ? "hover:bg-white/30 text-white" : "hover:bg-slate-100 text-slate-600"
            )}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* 🎯 MAIN CONTENT */}
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        
        {/* Gyan AI Home */}
        {isGyanHome && (
          <ScrollArea className="flex-1">
            <div className="p-6 space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Choose Your Expert
                </h2>
                <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Tap to unlock specialized AI knowledge
                </p>
              </div>
              
              {/* Career Guidance Card */}
              <button
                onClick={() => startTopicChat('Career Guidance in Food Industry' as GyanAITopic)}
                className="w-full h-28 bg-white border-2 border-slate-200 rounded-3xl shadow-xl hover:shadow-2xl hover:border-emerald-400 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center h-full p-6 gap-3">
                  <div className="p-4 bg-emerald-50 rounded-3xl shadow-2xl border">
                    <GraduationCap className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-slate-800">Career Guidance</span>
                    <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-0.5 rounded-full mt-1">Food Industry</span>
                  </div>
                </div>
              </button>

              {/* 🎯 INTERVIEW PREP BUTTON */}
              <button
                onClick={() => setSelectedTopic('Interview Preparation')}
                className="w-full h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="relative flex items-center h-full px-6 gap-4 text-white">
                  <div className="p-4 bg-white/20 rounded-3xl backdrop-blur-sm shadow-2xl">
                    <FileText className="w-8 h-8 drop-shadow-lg" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-black leading-tight">AI Mock Interview</h3>
                    <p className="text-sm opacity-90">Upload PDF/DOC resume for practice</p>
                  </div>
                </div>
              </button>
            </div>
          </ScrollArea>
        )}

        {/* 🎯 INTERVIEW SETUP - FULL PDF/DOC UPLOAD */}
        {isInterviewSetup && (
          <div className="flex-1 flex flex-col justify-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 space-y-8">
            
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
                <FileText className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <h2 className="text-2xl font-black text-slate-800">🎯 Mock Interview</h2>
              <p className="text-lg text-slate-600 max-w-md mx-auto">
                Upload your PDF/DOC resume for personalized interview practice
              </p>
            </div>

            {/* Experience Level */}
            <div className="max-w-md mx-auto space-y-2">
              <label className="text-sm font-bold text-slate-700 block mb-1">Experience Level</label>
              <Select value={experienceLevel} onValueChange={(v: any) => setExperienceLevel(v)}>
                <SelectTrigger className="w-full h-12 bg-white/70 backdrop-blur-sm border-slate-200 shadow-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fresher Student">🎓 Fresher Student</SelectItem>
                  <SelectItem value="Experienced Person">💼 Experienced Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 🎯 FILE UPLOAD - FULLY FUNCTIONAL */}
            <div className="max-w-md mx-auto">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "relative border-3 border-dashed rounded-3xl p-8 h-32 cursor-pointer shadow-xl hover:shadow-2xl transition-all group",
                  fileName 
                    ? "border-emerald-400 bg-emerald-50/80" 
                    : "border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/50"
                )}
              >
                {/* 🎯 HIDDEN FILE INPUT - WORKS 100% */}
                <input 
                  ref={fileInputRef}
                  type="file" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                />
                
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  {fileName ? (
                    <>
                      <div className="w-16 h-16 bg-emerald-100 p-4 rounded-3xl shadow-2xl animate-bounce">
                        <FileCheck className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="space-y-1 text-center">
                        <span className="text-lg font-bold text-emerald-800 block px-2 truncate max-w-[220px]">
                          {fileName}
                        </span>
                        <span className="text-xs text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full font-semibold">
                          ✅ Ready for Analysis
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-slate-100 p-4 rounded-3xl group-hover:bg-indigo-100 shadow-xl transition-all border-2 border-slate-200">
                        <Upload className="w-8 h-8 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                      </div>
                      <div className="space-y-1 text-center">
                        <span className="text-lg font-bold text-slate-700">Upload Resume</span>
                        <span className="text-sm text-slate-500">PDF, DOC, DOCX • Max 5MB</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* 🎯 START BUTTON */}
            <div className="max-w-md mx-auto">
              <Button 
                className={cn(
                  "w-full h-14 text-lg font-bold shadow-2xl rounded-3xl",
                  resumeFile 
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white hover:scale-[1.02]" 
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                )}
                disabled={!resumeFile || isProcessingResume}
                onClick={startInterview}
              >
                {isProcessingResume ? (
                  <>
                    <Loader2 className="animate-spin mr-3 w-6 h-6" />
                    Processing Resume...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-3 w-6 h-6" />
                    🚀 Start Mock Interview
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Chat View */}
        {!isGyanHome && !isInterviewSetup && (
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            <ScrollArea className="flex-1 px-6 pb-3 pt-2" viewportRef={scrollRef}>
              <div className="flex flex-col gap-4 pb-1">
                {messages.map((msg) => (
                  <div key={msg.id} className={cn(
                    "flex gap-3 max-w-[90%]", 
                    msg.role === 'user' ? "self-end flex-row-reverse" : "self-start"
                  )}>
                    <Avatar className="w-11 h-11 border-2 shadow-lg mt-1 flex-shrink-0">
                      {msg.role === 'user' ? (
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-bold">YOU</AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold">
                          <Bot className="w-5 h-5" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className={cn(
                      "py-4 px-6 rounded-3xl shadow-xl relative group max-w-[85%]",
                      msg.role === 'user' 
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-br-none" 
                        : "bg-white/80 border border-slate-100/50 text-slate-800 rounded-bl-none"
                    )}>
                      {msg.isQuestionAnswer ? (
                        <>
                          <p className="font-bold text-lg text-slate-800 mb-2">{msg.question}</p>
                          <div className="pl-6 text-base" dangerouslySetInnerHTML={{ __html: msg.answer?.replace(/\n/g, '<br />') || "" }} />
                        </>
                      ) : (
                        <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="self-start flex gap-2 ml-14">
                    <div className="bg-white/80 backdrop-blur-sm border p-4 rounded-3xl rounded-bl-none shadow-xl flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0s]"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="px-5 pt-3 pb-2 bg-gradient-to-r from-white/90 to-slate-50/90 border-t border-slate-200/50 backdrop-blur-sm shrink-0">
              <div className="flex items-center justify-between mb-2 px-1">
                <Select value={language} onValueChange={setLanguage} className="w-28">
                  <SelectTrigger className="h-8 text-xs bg-white/70 backdrop-blur-sm rounded-2xl px-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">🇬🇧 English</SelectItem>
                    <SelectItem value="Hinglish">🇮🇳 Hinglish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
                className="flex items-stretch gap-2 bg-white/80 backdrop-blur-xl p-2 rounded-3xl border-2 border-slate-200/50 shadow-xl hover:shadow-2xl focus-within:border-blue-400 transition-all group"
              >
                <Input 
                  ref={inputRef}
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="Type your message..."
                  className="flex-1 border-none bg-transparent shadow-none focus-visible:ring-0 min-h-[44px] text-base px-4 placeholder-slate-400"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className={cn(
                    "h-12 w-12 rounded-3xl shrink-0 shadow-2xl",
                    !input.trim() || isLoading 
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                      : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:scale-105 shadow-blue-500/40"
                  )}
                  disabled={isLoading || !input.trim()}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
