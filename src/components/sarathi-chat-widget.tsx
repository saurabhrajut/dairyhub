
"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, MessageCircle, Send, X, ArrowLeft, BrainCircuit, Upload, FileCheck, Wifi, WifiOff } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import type { Message } from '@/ai/flows/types';
import { sarathiAI, gyanAI, interviewPrepper, parseResume } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

interface UIMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  isQuestionAnswer?: boolean;
  question?: string;
  answer?: string;
  isPending?: boolean;
}

type ChatMode = 'sarathi' | 'gyan-ai';
type GyanAITopic = 
  | 'Dairy Technology' 
  | 'Food Safety and Quality' 
  | 'Food Processing' 
  | 'Career Guidance in Food Industry' 
  | 'Interview Preparation';

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

  const handleModeChange = (mode: ChatMode) => {
    setActiveMode(mode);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setActiveMode('sarathi'), 300);
  };
  
  const handleBack = () => {
    setActiveMode('sarathi');
  }

  return (
    <>
      <div className={cn(
        "fixed bottom-6 right-6 z-40 transition-transform duration-300", 
        isOpen ? 'scale-0' : 'scale-100'
      )}>
        <Button 
          size="icon" 
          className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-primary to-accent" 
          onClick={handleOpenChat}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>

      <div className={cn(
        "fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-card border rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right",
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
      )}>
        <ChatHeader 
          mode={activeMode} 
          onBack={handleBack} 
          onClose={handleClose} 
          onModeChange={handleModeChange} 
        />
        <ChatView mode={activeMode} isOpen={isOpen} />
      </div>
    </>
  );
}

function ChatHeader({ 
  mode, 
  onBack, 
  onClose, 
  onModeChange 
}: { 
  mode: ChatMode; 
  onBack: () => void; 
  onClose: () => void; 
  onModeChange: (mode: ChatMode) => void; 
}) {
  const { user } = useAuth();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    if (typeof window !== 'undefined') {
        setIsOnline(navigator.onLine);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }
    };
  }, []);

  const getHeaderInfo = () => {
    if (mode === 'sarathi') {
      return { 
        title: "सारथी AI", 
        desc: "Your Digital Partner" 
      };
    } else {
      return { 
        title: "Gyan AI", 
        desc: `Expert Knowledge for ${user?.displayName || 'You'}` 
      };
    }
  };

  const { title, desc } = getHeaderInfo();

  return (
    <header className="p-4 border-b flex items-center justify-between gap-2 bg-muted/50 rounded-t-2xl shrink-0">
      {mode !== 'sarathi' && (
        <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
          <ArrowLeft />
        </Button>
      )}
      <div className={`flex items-center gap-3 ${mode !== 'sarathi' ? '' : 'flex-1'}`}>
        <div className="relative">
            <div className="bg-primary/10 p-2 rounded-full h-fit">
              <Bot className="w-6 h-6 text-primary" />
            </div>
             <div className={cn("absolute -bottom-1 -right-1 rounded-full p-0.5", isOnline ? 'bg-green-200' : 'bg-gray-300')}>
                {isOnline ? <Wifi className="w-2.5 h-2.5 text-green-700" /> : <WifiOff className="w-2.5 h-2.5 text-gray-600" />}
            </div>
        </div>
        <div>
          <h3 className="font-bold font-headline">{title}</h3>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {mode === 'sarathi' && (
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8"
            onClick={() => onModeChange('gyan-ai')}
          >
            <BrainCircuit className="w-4 h-4 mr-2" />
            Gyan AI
          </Button>
        )}
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X />
        </Button>
      </div>
    </header>
  );
}

function ChatView({ mode, isOpen }: { mode: ChatMode; isOpen: boolean }) {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  // Gyan AI States
  const [selectedTopic, setSelectedTopic] = useState<GyanAITopic>('Dairy Technology');
  const [chatStarted, setChatStarted] = useState(false);
  
  // Interview Prep States
  const [experienceLevel, setExperienceLevel] = useState<'Fresher Student' | 'Experienced Person'>('Fresher Student');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string>("");
  const [fileName, setFileName] = useState("");
  const [isProcessingResume, setIsProcessingResume] = useState(false);

  const languageRef = useRef(language);
  languageRef.current = language;
  const topicRef = useRef(selectedTopic);
  topicRef.current = selectedTopic;
  
  const getCacheKey = useCallback(() => {
    if (!user) return null;
    return `chatHistory_${mode}_${user.uid}` + (mode === 'gyan-ai' ? `_${selectedTopic.replace(/\s+/g, '_')}` : '');
  }, [mode, selectedTopic, user]);


  const resetChat = useCallback(() => {
    setMessages([]);
    setHistory([]);
    setInput('');
    setIsLoading(false);
    setChatStarted(false);
    setResumeFile(null);
    setResumeText("");
    setFileName("");
    setIsProcessingResume(false);
  }, []);

  // Load messages from localStorage on mount/mode change
  useEffect(() => {
    resetChat();
    if (!isOpen || !user) return;

    const cacheKey = getCacheKey();
    if (!cacheKey) return;
    
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { messages: cachedMessages, history: cachedHistory } = JSON.parse(cached);
        if (cachedMessages.length > 0) {
            setMessages(cachedMessages);
            setHistory(cachedHistory || []);
             if (mode === 'gyan-ai') {
                setChatStarted(true); // If there's history, the chat has started
            }
        }
      } else if (mode === 'sarathi') {
        setMessages([{ 
          id: 'initial', 
          role: 'assistant', 
          text: `Namaste ${user.displayName || 'Guest'}, I am Sarathi, your digital partner. How can I help you today?` 
        }]);
      }
    } catch (e) {
      console.error("Failed to load chat from localStorage", e);
    }
  }, [isOpen, mode, selectedTopic, user, resetChat, getCacheKey]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    const cacheKey = getCacheKey();
    if (!cacheKey || messages.length === 0) return;
    
    try {
      const dataToCache = { messages, history };
      localStorage.setItem(cacheKey, JSON.stringify(dataToCache));
    } catch (e) {
      console.error("Failed to save chat to localStorage", e);
    }
  }, [messages, history, getCacheKey]);
  
  // Resend pending messages when online
  useEffect(() => {
    const handleOnline = async () => {
      const pendingMessages = messages.filter(m => m.isPending);
      if (pendingMessages.length > 0) {
        toast({ title: "You're back online!", description: "Sending queued messages..." });
        
        setMessages(msgs => msgs.map(m => m.isPending ? { ...m, isPending: false } : m));
        
        const lastPending = pendingMessages[pendingMessages.length - 1];
        if (lastPending) {
           await sendApiRequest(lastPending.text, history);
        }
      }
    };
    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, history]);

  useEffect(() => {
    if (scrollViewportRef.current) {
      scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFile(file);
      setFileName(`Selected: ${file.name}`);
    }
  };

  const sendApiRequest = async (query: string, currentHistory: Message[]) => {
      setIsLoading(true);
      try {
        let response: any;
        
        if (mode === 'sarathi') {
          response = await sarathiAI({
            userName: user?.displayName || 'Guest',
            question: query,
            language: languageRef.current,
            history: currentHistory,
          });
        } else if (mode === 'gyan-ai') {
          if (selectedTopic === 'Interview Preparation') {
            response = await interviewPrepper({
              resumeText: resumeText,
              experienceLevel: experienceLevel,
              language: languageRef.current,
              history: currentHistory,
              initialRequest: false
            });
          } else {
            response = await gyanAI({
              topic: selectedTopic,
              question: query,
              language: languageRef.current,
              history: currentHistory,
            });
          }
        }
  
        if (!response) {
          throw new Error("Sorry, I could not get a response. Please try again.");
        }
        
        let newMessages: UIMessage[] = [];
        let newHistoryEntries: Message[] = [];
  
        if (selectedTopic === 'Interview Preparation' && response.response) {
          newMessages = response.response.map((qa: any, index: number) => ({
            id: `${Date.now()}-qa-${index}`,
            role: 'assistant', text: "", isQuestionAnswer: true, question: qa.question, answer: qa.answer
          }));
          if (response.followUpSuggestion) {
            newMessages.push({ id: `${Date.now()}-follow-up`, role: 'assistant', text: response.followUpSuggestion });
          }
          newHistoryEntries = response.response.flatMap((qa: any) => [
            { role: 'model', content: [{ text: `Question: ${qa.question}` }] as any },
            { role: 'model', content: [{ text: `Answer: ${qa.answer}` }] as any }
          ]);
        } else if (response.answer) {
          newMessages.push({ id: Date.now().toString() + '-ai', role: 'assistant', text: response.answer });
          newHistoryEntries.push({ role: 'model', content: [{ text: response.answer }] });
        } else {
          throw new Error("Invalid response format from the server.");
        }
  
        setMessages(prev => [...prev, ...newMessages]);
        setHistory(prev => [...prev, { role: 'user', content: [{ text: query }] }, ...newHistoryEntries]);
  
      } catch (error: any) {
        const errorMessage: UIMessage = { id: Date.now().toString() + '-error', role: 'assistant', text: error.message || "Sorry, something went wrong." };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
  }

  const handleStartGyanAIChat = async () => {
    setChatStarted(true);
    setIsLoading(true);

    try {
      if (selectedTopic === 'Interview Preparation') {
        if (!resumeFile) {
          toast({ variant: 'destructive', title: 'Error', description: 'Please upload a resume file first.' });
          setIsLoading(false); setChatStarted(false); return;
        }

        setIsProcessingResume(true);
        toast({ title: "Processing Resume", description: "Please wait..." });
        
        const formData = new FormData();
        formData.append('file', resumeFile);
        const parseResult = await parseResume(formData);
        
        if (!parseResult?.text) throw new Error("Failed to extract text from the resume.");
        
        setResumeText(parseResult.text);
        setIsProcessingResume(false);
        toast({ title: "Success", description: "Resume processed. Starting interview..." });

        const payload = { resumeText: parseResult.text, experienceLevel, language: languageRef.current, history: [], initialRequest: true };
        const response = await interviewPrepper(payload);
        
        if (!response || !response.response || response.response.length === 0) throw new Error("Failed to start interview. Please try again.");

        const initialQuestions: UIMessage[] = response.response.map((qa: any, index: number) => ({ id: `initial-qa-${index}`, role: 'assistant', text: "", isQuestionAnswer: true, question: qa.question, answer: qa.answer }));
        const followUp: UIMessage = { id: 'follow-up', role: 'assistant', text: response.followUpSuggestion || "You can ask me any follow-up questions about the interview." };
        setMessages([...initialQuestions, followUp]);

        const newHistory = response.response.flatMap((qa: any) => [{ role: 'model', content: [{ text: `Question: ${qa.question}` }] as any }, { role: 'model', content: [{ text: `Answer: ${qa.answer}` }] as any }]);
        setHistory(newHistory);
      } else {
        const response = await gyanAI({ topic: selectedTopic, question: 'Give me a brief introduction about yourself and how you can help me.', language: languageRef.current, history: [] });
        if (!response?.answer) throw new Error("Could not get an initial response.");
        const initialMessage: UIMessage = { id: "initial-gyan", role: "assistant", text: response.answer };
        setMessages([initialMessage]);
        setHistory([{ role: 'model', content: [{ text: response.answer }] }]);
      }
    } catch (error: any) {
      console.error("Error starting Gyan AI:", error);
      toast({ variant: 'destructive', title: 'Error', description: error.message || 'Failed to start the session.' });
      const errorMessage: UIMessage = { id: "initial-error", role: "assistant", text: "Sorry, I couldn't start the session. Please try again." };
      setMessages([errorMessage]);
      setChatStarted(false);
    } finally {
      setIsLoading(false); setIsProcessingResume(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();

    if (!user) {
      toast({ title: "Login Required", description: "Please log in to chat.", action: <Button onClick={() => router.push('/login')}>Login</Button> });
      return;
    }

    if (!query || isLoading) return;
    
    const isOffline = typeof window !== 'undefined' && !window.navigator.onLine;

    const userMessage: UIMessage = { id: Date.now().toString(), role: 'user', text: query, isPending: isOffline };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    if (isOffline) {
        toast({ title: "You are offline", description: "Your message has been queued and will be sent when you're back online." });
        return;
    }
    
    const newHistoryForApi: Message[] = [...history, { role: 'user', content: [{ text: query }] }];
    
    setHistory(newHistoryForApi);
    await sendApiRequest(query, newHistoryForApi);
  };

  const GyanAITopicSelection = () => (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="topic-select">Choose Topic</Label>
        <Select value={selectedTopic} onValueChange={(v) => setSelectedTopic(v as GyanAITopic)}>
          <SelectTrigger id="topic-select"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Dairy Technology">Dairy Technology</SelectItem>
            <SelectItem value="Food Safety and Quality">Food Safety and Quality</SelectItem>
            <SelectItem value="Food Processing">Food Processing</SelectItem>
            <SelectItem value="Career Guidance in Food Industry">Career Guidance</SelectItem>
            <SelectItem value="Interview Preparation">Interview Preparation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {selectedTopic === 'Interview Preparation' && (
        <div className="p-4 border-l-4 border-primary bg-primary/10 space-y-3 rounded-r-lg">
          <h4 className='font-bold text-sm'>Interview Preparation Setup</h4>
          <p className='text-xs text-muted-foreground'>Upload your resume to start a mock interview with AI.</p>
          <div className="space-y-2">
            <Label htmlFor="experience-level">Experience Level</Label>
            <Select value={experienceLevel} onValueChange={(v) => setExperienceLevel(v as any)}>
              <SelectTrigger id="experience-level"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Fresher Student">Fresher Student</SelectItem>
                <SelectItem value="Experienced Person">Experienced Person</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume-file">Upload Resume (PDF or Word)</Label>
            <label htmlFor="resume-file" className="block">
              <Button asChild variant="outline" className="w-full cursor-pointer" disabled={isLoading}>
                <span>
                  {isLoading && isProcessingResume ? ( <><Loader2 className="animate-spin mr-2 h-4 w-4" />Processing...</>
                  ) : fileName ? ( <><FileCheck className="mr-2 h-4 w-4" />{fileName.length > 25 ? fileName.substring(0, 25) + '...' : fileName}</>
                  ) : ( <><Upload className="mr-2 h-4 w-4" />Choose PDF or Word file...</>
                  )}
                </span>
              </Button>
              <Input id="resume-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" disabled={isLoading} />
            </label>
          </div>
        </div>
      )}

      <Button onClick={handleStartGyanAIChat} disabled={isLoading || (selectedTopic === 'Interview Preparation' && !resumeFile)} className="w-full">
        {isLoading ? ( <><Loader2 className="animate-spin mr-2 h-4 w-4" />Starting...</>
        ) : ( selectedTopic === 'Interview Preparation' ? "Start Mock Interview" : "Start Chat" )}
      </Button>
    </div>
  );

  const renderMessages = () => (
    <div className="flex flex-col gap-4">
      {messages.map((msg) => {
        if (msg.isQuestionAnswer) {
          return (
            <div key={msg.id} className="bg-muted p-4 rounded-lg border">
              <p className="font-bold text-sm text-foreground mb-2">Q: {msg.question}</p>
              <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: msg.answer?.replace(/\n/g, '<br />') || "" }}/>
            </div>
          );
        }
        return (
          <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end" : "self-start"}`}>
            {msg.role === 'assistant' && (
              <div className="bg-muted p-2 rounded-full h-fit shrink-0"><Bot className="w-5 h-5 text-foreground" /></div>
            )}
            <div className={cn('flex-1 p-3 rounded-2xl break-words', 
              msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted text-muted-foreground rounded-bl-none",
              msg.isPending && "opacity-70"
            )}>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
               {msg.isPending && <span className="text-xs block mt-1 text-right">Queued...</span>}
            </div>
          </div>
        );
      })}
      {isLoading && !isProcessingResume && (
        <div className="self-start flex gap-3 items-center">
          <div className="bg-muted p-2 rounded-full h-fit"><Bot className="w-5 h-5 text-foreground" /></div>
          <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="animate-spin h-4 w-4" />Thinking...</div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="p-2 border-b">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-full h-8 text-xs"><SelectValue placeholder="Language" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Hinglish">Hinglish</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {mode === 'gyan-ai' && !chatStarted ? (
        <ScrollArea className="flex-grow"><GyanAITopicSelection /></ScrollArea>
      ) : (
        <>
          <ScrollArea className="flex-grow p-4" viewportRef={scrollViewportRef}>{renderMessages()}</ScrollArea>
          <form onSubmit={handleSubmit} className="p-4 border-t bg-background flex items-center gap-2 rounded-b-2xl">
            <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything..." className="flex-grow" disabled={isLoading || (!user && !loading)} />
            <Button type="submit" size="icon" className="shrink-0" disabled={isLoading || !input || (!user && !loading)}><Send /></Button>
          </form>
        </>
      )}
    </div>
  );
}

    
