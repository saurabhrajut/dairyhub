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
  Milk,
  Factory,
  GraduationCap,
  FileText,
  ShieldCheck,
  Wifi,
  WifiOff
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import type { Message } from '@/ai/flows/types';
import { sarathiAI, interviewPrepper, parseResume } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { gyanAiContent, type GyanAiTopic } from '@/lib/content/gyan-ai-content';
import { useLanguage } from '@/context/language-context';

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

// --- Main Widget Component ---

export function SarathiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
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
        "fixed bottom-6 right-6 z-40 transition-all duration-500 ease-in-out", 
        isOpen ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'
      )}>
        <Button 
          size="icon" 
          className="rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl bg-gradient-to-tr from-orange-500 to-blue-600 hover:scale-110 transition-transform duration-300 border-4 border-white" 
          onClick={handleOpenChat}
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
        </Button>
      </div>

      {/* Chat Container */}
      <div className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[380px] h-[85vh] sm:h-[650px] max-h-[700px] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden",
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
      )}>
        <ChatInterface 
            isOpen={isOpen}
            onClose={() => setIsOpen(false)} 
        />
      </div>
    </>
  );
}

// --- Internal Logic Component ---

function ChatInterface({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const [activeMode, setActiveMode] = useState<ChatMode>('sarathi');
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const [isOnline, setIsOnline] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Gyan AI Specifics
  const [selectedTopic, setSelectedTopic] = useState<GyanAiTopic | null>(null);
  const [experienceLevel, setExperienceLevel] = useState<'Fresher Student' | 'Experienced Person'>('Fresher Student');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [isProcessingResume, setIsProcessingResume] = useState(false);

  const languageRef = useRef(language);
  languageRef.current = language;

  const content = t(gyanAiContent);
  const gyanTopics = Object.keys(content.topics);

  // --- Network Listener ---
  useEffect(() => {
    setIsOnline(navigator.onLine);
    const handleOnline = () => { setIsOnline(true); toast({ title: "Back Online", className: "text-green-600" }); };
    const handleOffline = () => { setIsOnline(false); toast({ title: "You are Offline", description: "Using limited offline capabilities.", variant: "destructive" }); };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [toast]);

  // --- Helpers ---

  const getCacheKey = useCallback(() => {
    if (!user) return null;
    const topicKey = activeMode === 'gyan-ai' && selectedTopic ? `_${selectedTopic.id}` : '';
    return `chat_v3_${activeMode}${topicKey}_${user.uid}`;
  }, [activeMode, selectedTopic, user]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  // --- Effects ---

  useEffect(() => {
    setMessages([]);
    setHistory([]);
    
    if (!isOpen || !user) return;
    
    const cacheKey = getCacheKey();
    const cached = cacheKey ? localStorage.getItem(cacheKey) : null;

    if (cached) {
        const data = JSON.parse(cached);
        setMessages(data.messages);
        setHistory(data.history);
    } else {
        if (activeMode === 'sarathi') {
             setTimeout(() => {
                const welcomeMsg: UIMessage = {
                    id: 'welcome',
                    role: 'assistant',
                    text: `Namaste ${user.displayName?.split(' ')[0] || 'Friend'}! I am **Sarathi**. How can I help you navigate your career or studies today?`,
                    timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                };
                setMessages([welcomeMsg]);
             }, 300);
        } else if (activeMode === 'gyan-ai' && selectedTopic) {
            startTopicChat(selectedTopic);
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeMode, selectedTopic, user, getCacheKey]);

  useEffect(() => {
    const cacheKey = getCacheKey();
    if (cacheKey && messages.length > 0) {
        localStorage.setItem(cacheKey, JSON.stringify({ messages, history }));
    }
  }, [messages, history, getCacheKey]);

  useEffect(() => scrollToBottom(), [messages, isLoading]);

  // --- Handlers ---

  const handleSendMessage = async (textOverride?: string) => {
    const query = textOverride || input.trim();
    if (!query || isLoading) return;

    const userMsg: UIMessage = {
        id: Date.now().toString(),
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
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        if (activeMode === 'sarathi') {
            response = await sarathiAI({
                userName: user?.displayName || 'User',
                question: query,
                language: languageRef.current,
                history: newHistory
            });
            const answerText = response.answer || "I didn't catch that.";
            setMessages(prev => [...prev, {
                id: Date.now().toString() + 'ai',
                role: 'assistant',
                text: answerText,
                timestamp
            }]);
        } else if (activeMode === 'gyan-ai' && selectedTopic) {
            if (selectedTopic.id === 'interview') {
                response = await interviewPrepper({
                    resumeText: "", 
                    experienceLevel, 
                    language: languageRef.current,
                    history: newHistory,
                    initialRequest: false
                });

                if (!response?.response) throw new Error("Interview response failed");

                const qaMessages: UIMessage[] = response.response.map((qa: any, idx: number) => ({
                    id: `${Date.now()}-${idx}`,
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
                        id: `${Date.now()}-followup`,
                        role: 'assistant',
                        text: response.followUpSuggestion,
                        timestamp
                    }]);
                }
            } else {
                // --- OFFLINE GYAN AI LOGIC ---
                // Simulating offline response from local content
                const lowerQuery = query.toLowerCase();
                
                // Find matching subtopic in local content
                const subtopic = selectedTopic.subtopics.find(sub => 
                    sub.keywords.some(kw => lowerQuery.includes(kw))
                );

                let answerText = subtopic 
                    ? subtopic.content 
                    : content.fallback;

                // DIAGRAM TRIGGER: If a specific subtopic is found, append a diagram tag
                // This helps users visualize the concept even in offline mode
                if (subtopic) {
                    answerText += `\n\n`;
                }
                
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now().toString() + 'ai',
                        role: 'assistant',
                        text: answerText,
                        timestamp
                    }]);
                    setIsLoading(false);
                }, 600); // Slight delay for realism
                return; 
            }
        } else {
             throw new Error("Invalid chat mode or topic.");
        }

    } catch (error) {
        setMessages(prev => [...prev, {
            id: 'error',
            role: 'assistant',
            text: "My connection seems weak. Can you try again?",
            timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }]);
    } finally {
        setIsLoading(false);
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const startInterview = async () => {
      if (!resumeFile) return;
      setIsProcessingResume(true);
      try {
          const formData = new FormData();
          formData.append('file', resumeFile);
          const result = await parseResume(formData);
          
          if (!result?.text) throw new Error("Resume parsing failed");

          const response = await interviewPrepper({
              resumeText: result.text,
              experienceLevel,
              language: languageRef.current,
              history: [],
              initialRequest: true
          });

          if (!response?.response) throw new Error("Initialization failed");

          const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          const qaMessages: UIMessage[] = response.response.map((qa: any, idx: number) => ({
                id: `init-${idx}`,
                role: 'assistant',
                text: "",
                isQuestionAnswer: true,
                question: qa.question,
                answer: qa.answer,
                timestamp
            }));
            
           setMessages(qaMessages);
           if (response.followUpSuggestion) {
             setMessages(prev => [...prev, { id: 'init-follow', role: 'assistant', text: response.followUpSuggestion, timestamp }]);
           }

      } catch (err) {
          toast({ variant: "destructive", title: "Error", description: "Failed to start interview." });
      } finally {
          setIsProcessingResume(false);
      }
  };

  const startTopicChat = async (topic: GyanAiTopic) => {
      setSelectedTopic(topic);
      if (topic.id === 'interview') return; 

      setIsLoading(true);
      setTimeout(() => {
          setMessages([{
              id: 'intro',
              role: 'assistant',
              text: topic.intro,
              timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
          }]);
          setIsLoading(false);
      }, 300);
  };

  const getTopicIcon = (id: string) => {
    const icons: { [key: string]: React.ElementType } = {
        'dairy-tech': Milk,
        'food-safety': ShieldCheck,
        'food-processing': Factory,
        'career-guidance': GraduationCap,
        'interview': FileText,
    };
    return icons[id] || BrainCircuit;
  };

  // --- Renders ---
  const isGyanHome = activeMode === 'gyan-ai' && !selectedTopic;
  const isInterviewSetup = activeMode === 'gyan-ai' && selectedTopic?.id === 'interview' && messages.length === 0;

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
        {/* Header */}
        <div className={cn(
            "px-4 py-3 flex items-center justify-between shrink-0 shadow-sm transition-colors duration-500 z-20",
            activeMode === 'sarathi' ? "bg-white" : "bg-indigo-600 text-white"
        )}>
            <div className="flex items-center gap-3">
                {activeMode === 'gyan-ai' && (
                    <Button variant="ghost" size="icon" onClick={() => {
                        if (selectedTopic) setSelectedTopic(null);
                        else setActiveMode('sarathi');
                    }} className={cn("h-8 w-8 -ml-2", activeMode === 'gyan-ai' ? "text-white hover:bg-white/20" : "")}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                )}
                
                <div className="relative">
                    <div className={cn("p-1.5 rounded-xl", activeMode === 'sarathi' ? "bg-orange-100" : "bg-white/20")}>
                        {activeMode === 'sarathi' ? <Bot className="w-6 h-6 text-orange-600" /> : <BrainCircuit className="w-6 h-6 text-white" />}
                    </div>
                    {/* Status Dot */}
                    <span className={cn(
                        "absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white rounded-full",
                        isOnline ? "bg-green-500" : "bg-red-500"
                    )}></span>
                </div>

                <div>
                    <h3 className="font-bold text-sm leading-none mb-0.5">
                        {activeMode === 'sarathi' ? 'Sarathi AI' : (selectedTopic?.title || 'Gyan AI')}
                    </h3>
                    <div className="flex items-center gap-1">
                        {!isOnline && <WifiOff className="w-3 h-3 opacity-70" />}
                        <p className={cn("text-[10px] opacity-80", activeMode === 'sarathi' ? "text-slate-500" : "text-indigo-100")}>
                            {isOnline ? (activeMode === 'sarathi' ? 'Online' : 'Expert Mode') : 'Offline Mode'}
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-1">
                 {activeMode === 'sarathi' && (
                    <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => setActiveMode('gyan-ai')}
                        className="h-8 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 text-xs px-2 gap-1.5 rounded-full"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Experts</span>
                    </Button>
                 )}
                <Button variant="ghost" size="icon" onClick={onClose} className={cn("h-8 w-8", activeMode === 'gyan-ai' ? "text-white hover:bg-white/20" : "text-slate-400")}>
                    <X className="w-5 h-5" />
                </Button>
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 relative overflow-hidden flex flex-col">
            
            {/* Gyan AI Menu */}
            {isGyanHome && (
                <ScrollArea className="h-full bg-slate-50 p-4">
                    <div className="space-y-4">
                        <div className="text-center py-4">
                            <h2 className="text-lg font-bold text-slate-800">Expert Knowledge Base</h2>
                            <p className="text-xs text-slate-500">
                                {isOnline ? 'Tap a card for specialized assistance' : 'Limited offline access available'}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {gyanTopics.map((topicId) => {
                                const topic = content.topics[topicId];
                                const Icon = getTopicIcon(topic.id);
                                return (
                                <button
                                    key={topic.id}
                                    onClick={() => startTopicChat(topic)}
                                    className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all text-center gap-3 aspect-square"
                                >
                                    <div className={cn("p-3 rounded-full", topic.color?.bg || 'bg-slate-100')}>
                                        <Icon className={cn("w-6 h-6", topic.color?.text || 'text-slate-600')} />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-700 leading-tight">{topic.title}</span>
                                </button>
                            )})}
                        </div>
                    </div>
                </ScrollArea>
            )}

            {/* Interview Setup */}
            {isInterviewSetup && (
                <div className="h-full flex flex-col p-6 bg-white items-center justify-center text-center space-y-6">
                    <div className="space-y-2">
                        <div className="bg-indigo-100 p-4 rounded-full w-fit mx-auto">
                            <FileText className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">Mock Interview Setup</h2>
                        <p className="text-sm text-slate-500">AI will analyze your resume and ask tailored questions.</p>
                    </div>

                    <div className="w-full space-y-4">
                         <div className="space-y-2 text-left">
                            <label className="text-xs font-semibold text-slate-700 ml-1">Experience Level</label>
                            <Select value={experienceLevel} onValueChange={(v: any) => setExperienceLevel(v)}>
                                <SelectTrigger className="w-full bg-slate-50"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Fresher Student">Fresher Student</SelectItem>
                                    <SelectItem value="Experienced Person">Experienced Professional</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:bg-slate-50 transition-colors relative cursor-pointer">
                            <input 
                                type="file" 
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                    if(e.target.files?.[0]) {
                                        setResumeFile(e.target.files[0]);
                                        setFileName(e.target.files[0].name);
                                    }
                                }}
                            />
                            <div className="flex flex-col items-center gap-2">
                                {fileName ? (
                                    <>
                                        <FileCheck className="w-8 h-8 text-green-500" />
                                        <span className="text-sm font-medium text-green-700 break-all">{fileName}</span>
                                        <span className="text-xs text-slate-400">Click to change</span>
                                    </>
                                ) : (
                                    <>
                                        <Upload className="w-8 h-8 text-slate-400" />
                                        <span className="text-sm font-medium text-slate-600">Upload Resume</span>
                                        <span className="text-xs text-slate-400">PDF or Word (Max 5MB)</span>
                                    </>
                                )}
                            </div>
                        </div>

                        <Button 
                            className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 shadow-md"
                            disabled={!resumeFile || isProcessingResume}
                            onClick={startInterview}
                        >
                            {isProcessingResume ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                            Start Interview
                        </Button>
                    </div>
                </div>
            )}

            {/* Chat Messages */}
            {!isGyanHome && !isInterviewSetup && (
                <ScrollArea className="flex-1 p-3 bg-slate-50" viewportRef={scrollRef}>
                    <div className="flex flex-col gap-3 pb-2">
                        <div className="flex justify-center">
                            <span className="text-[10px] bg-slate-100 text-slate-400 px-3 py-1 rounded-full">Today</span>
                        </div>

                        {messages.map((msg) => {
                            if (msg.isQuestionAnswer) {
                                return (
                                    <div key={msg.id} className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm space-y-2 ml-2 max-w-[95%]">
                                        <div className="flex gap-2">
                                            <div className="bg-indigo-100 p-1.5 rounded-lg h-fit"><BrainCircuit className="w-4 h-4 text-indigo-600"/></div>
                                            <p className="font-bold text-sm text-slate-800">{msg.question}</p>
                                        </div>
                                        <div className="pl-8 text-sm text-slate-600 border-l-2 border-indigo-100">
                                            <p dangerouslySetInnerHTML={{ __html: msg.answer?.replace(/\n/g, '<br />') || "" }} />
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <div key={msg.id} className={cn(
                                    "flex gap-2 max-w-[85%]", 
                                    msg.role === 'user' ? "self-end flex-row-reverse" : "self-start"
                                )}>
                                    <Avatar className="w-8 h-8 border shadow-sm mt-1">
                                        {msg.role === 'user' ? (
                                            <AvatarFallback className="bg-slate-200 text-slate-600 text-[10px]">ME</AvatarFallback>
                                        ) : (
                                            <>
                                                <AvatarImage src={activeMode === 'sarathi' ? "/sarathi-icon.png" : "/gyan-icon.png"} />
                                                <AvatarFallback className={activeMode === 'sarathi' ? "bg-orange-100 text-orange-600" : "bg-indigo-100 text-indigo-600"}>
                                                    <Bot className="w-4 h-4" />
                                                </AvatarFallback>
                                            </>
                                        )}
                                    </Avatar>
                                    <div className={cn(
                                        "p-2.5 px-3 rounded-2xl text-sm shadow-sm relative group leading-relaxed",
                                        msg.role === 'user' 
                                            ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none" 
                                            : "bg-white border border-slate-200 text-slate-700 rounded-tl-none"
                                    )}>
                                        <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                                        <span className={cn(
                                            "text-[9px] block text-right mt-1 opacity-60",
                                            msg.role === 'user' ? "text-blue-100" : "text-slate-400"
                                        )}>{msg.timestamp}</span>
                                    </div>
                                </div>
                            );
                        })}
                        
                        {isLoading && (
                            <div className="self-start flex gap-2 ml-1">
                                <div className="bg-white border p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            )}

            {/* Input Area */}
            {!isGyanHome && !isInterviewSetup && (
                <div className="p-2 bg-white border-t shrink-0">
                    <div className="flex items-center gap-2 mb-2 px-1">
                        <Select value={language} onValueChange={setLanguage}>
                            <SelectTrigger className="h-6 text-[10px] w-fit border-none bg-slate-100 hover:bg-slate-200 rounded-full px-3">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Hinglish">Hinglish</SelectItem>
                            </SelectContent>
                        </Select>
                        {!isOnline && <span className="text-[10px] text-red-500 font-medium flex items-center gap-1"><WifiOff className="w-3 h-3" /> Offline</span>}
                    </div>
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
                        className="flex items-end gap-2 bg-slate-50 p-1 rounded-[20px] border border-slate-200 focus-within:border-blue-400 transition-all"
                    >
                        <Input 
                            ref={inputRef}
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            placeholder={!isOnline && activeMode === 'gyan-ai' ? "Offline mode active..." : (activeMode === 'sarathi' ? "Message Sarathi..." : "Ask the expert...")}
                            className="border-none shadow-none focus-visible:ring-0 bg-transparent min-h-[40px] max-h-[100px] py-2 px-4 resize-none"
                            disabled={isLoading}
                        />
                        <Button 
                            type="submit" 
                            size="icon" 
                            className={cn(
                                "rounded-full h-9 w-9 mb-0.5 mr-0.5 shrink-0 transition-all",
                                !input.trim() ? "bg-slate-300 text-slate-500" : "bg-blue-600 text-white shadow-md hover:scale-105"
                            )}
                            disabled={isLoading || !input.trim()}
                        >
                            <Send className="w-4 h-4 ml-0.5" />
                        </Button>
                    </form>
                </div>
            )}
        </div>
    </div>
  );
}
