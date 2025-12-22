"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { 
  Loader2, 
  UserPlus, 
  Bot, 
  ArrowLeft, 
  Send, 
  Briefcase, 
  Star, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { askExpert } from '@/app/actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Message } from '@/ai/flows/types';
import { cn } from '@/lib/utils';

// --- Data & Types ---

const expertsList = [
  { 
    id: '1', 
    name: "Dr. Ramesh Kumar", 
    experience: 15, 
    specialization: "Dairy Technology", 
    role: "Senior Dairy Scientist",
    photo: "https://placehold.co/150x150/E2E8F0/1e293b?text=RK", 
    type: 'ai',
    status: 'online',
    tags: ["Milk Processing", "Cheese", "Quality Control"]
  },
  { 
    id: '2', 
    name: "Sunita Sharma", 
    experience: 12, 
    specialization: "Food Safety & Quality", 
    role: "ISO Certified Auditor",
    photo: "https://placehold.co/150x150/E2E8F0/1e293b?text=SS", 
    type: 'ai',
    status: 'online',
    tags: ["HACCP", "FSSAI", "Hygiene"]
  },
  { 
    id: '3', 
    name: "Anil Singh", 
    experience: 20, 
    specialization: "Food Processing", 
    role: "Industrial Consultant",
    photo: "https://placehold.co/150x150/E2E8F0/1e293b?text=AS", 
    type: 'ai',
    status: 'online',
    tags: ["Packaging", "Preservation", "Machinery"]
  }
];

interface UIMessage { 
    id: string; 
    role: "user" | "assistant"; 
    text: string; 
    timestamp: string;
}

type ViewState = 'list' | 'chat' | 'register';

// --- Main Component ---

export function ExpertSupportModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeView, setActiveView] = useState<ViewState>('list');
  const [selectedExpert, setSelectedExpert] = useState<typeof expertsList[0] | null>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
        setTimeout(() => {
            setActiveView('list');
            setSelectedExpert(null);
        }, 300);
    }
  }, [isOpen]);

  const handleSelectExpert = (expert: typeof expertsList[0]) => {
      setSelectedExpert(expert);
      setActiveView('chat');
  };

  return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl w-[95vw] h-[85vh] flex flex-col p-0 overflow-hidden bg-slate-50/50 backdrop-blur-sm">
              <div className="flex-1 w-full h-full flex flex-col min-h-0">
                  {activeView === 'list' && (
                      <ExpertListView 
                          onSelectExpert={handleSelectExpert} 
                          onRegister={() => setActiveView('register')} 
                      />
                  )}
                  {activeView === 'chat' && selectedExpert && (
                      <ChatView 
                          expert={selectedExpert} 
                          onBack={() => setActiveView('list')} 
                      />
                  )}
                  {activeView === 'register' && (
                      <RegisterView 
                          onBack={() => setActiveView('list')} 
                      />
                  )}
              </div>
          </DialogContent>
      </Dialog>
  );
}

// --- Sub-Components ---

function ExpertListView({ onSelectExpert, onRegister }: { onSelectExpert: (e: any) => void, onRegister: () => void }) {
    return (
        <div className="flex flex-col h-full bg-white">
            <div className="p-6 border-b bg-white shrink-0">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="flex justify-center mb-3">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <Sparkles className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Expert Consultation</h2>
                    <p className="text-slate-500 text-sm">
                        Connect with AI-powered industry specialists for instant guidance on Dairy, Food Safety, and Processing.
                    </p>
                </div>
            </div>

            <ScrollArea className="flex-1 bg-slate-50">
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {expertsList.map((expert) => (
                        <Card 
                            key={expert.id} 
                            className="group hover:shadow-xl transition-all duration-300 border-slate-200 cursor-pointer overflow-hidden relative"
                            onClick={() => onSelectExpert(expert)}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            <CardHeader className="flex flex-row items-start gap-4 pb-3">
                                <div className="relative">
                                    <Avatar className="w-16 h-16 border-2 border-white shadow-sm">
                                        <AvatarImage src={expert.photo} />
                                        <AvatarFallback>{expert.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{expert.name}</h3>
                                    <p className="text-xs text-slate-500 font-medium">{expert.role}</p>
                                    <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>{expert.experience}+ Years Exp.</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pb-3">
                                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                                    Specialist in <span className="font-semibold text-slate-800">{expert.specialization}</span>. 
                                    Ask me about {expert.tags.join(', ')}.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {expert.tags.slice(0, 2).map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-xs font-normal bg-slate-100 text-slate-600">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button className="w-full bg-slate-900 hover:bg-blue-600 transition-colors gap-2 group-hover:shadow-md">
                                    Chat Now <Send className="w-3 h-3" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </ScrollArea>

            <div className="p-4 border-t bg-white shrink-0 flex justify-center">
                <Button variant="outline" onClick={onRegister} className="text-slate-600 border-dashed border-slate-300 hover:border-blue-400 hover:text-blue-600">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Join as a Real Expert
                </Button>
            </div>
        </div>
    );
}

function ChatView({ expert, onBack }: { expert: typeof expertsList[0], onBack: () => void }) {
    const [messages, setMessages] = useState<UIMessage[]>([]);
    const [history, setHistory] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [language, setLanguage] = useState("English");
    
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const languageRef = useRef(language);
    languageRef.current = language;

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    // Initial greeting
    useEffect(() => {
        if (messages.length === 0) {
            setTimeout(() => {
                const greeting = `Namaste! I am ${expert.name}. I specialize in ${expert.specialization}. How can I assist you today?`;
                setMessages([{
                    id: 'init',
                    role: 'assistant',
                    text: greeting,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
                setHistory([{ role: 'model', content: [{ text: greeting }] }]);
            }, 500);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSendMessage = async (textOverride?: string) => {
        const query = textOverride || input.trim();
        if (!query || isLoading) return;

        const userMsg: UIMessage = {
            id: Date.now().toString(),
            role: 'user',
            text: query,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        const newHistory: Message[] = [...history, { role: 'user', content: [{ text: query }] }];
        setHistory(newHistory);

        try {
            const response = await askExpert({
                expertName: expert.name,
                experience: expert.experience,
                specialization: expert.specialization,
                question: query,
                language: languageRef.current,
                history: newHistory
            });

            if (!response) throw new Error("No response received");

            const answer = response.answer || response.refinedQuestion?.refinedQuestion || "I apologize, I could not generate a response.";
            
            const aiMsg: UIMessage = {
                id: Date.now().toString() + 'ai',
                role: 'assistant',
                text: answer,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setMessages(prev => [...prev, aiMsg]);
            setHistory(prev => [...prev, { role: 'model', content: [{ text: answer }] }]);

        } catch (error) {
            const errorMsg: UIMessage = {
                id: Date.now().toString() + 'err',
                role: 'assistant',
                text: "Sorry, I am facing some connection issues. Please try again.",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
            // Focus back on input after sending (desktop only mainly)
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const suggestedQuestions = [
        `What are the latest trends in ${expert.specialization}?`,
        `How do I solve quality issues in production?`,
        `Best practices for hygiene?`
    ];

    return (
        <div className="flex flex-col h-full bg-slate-100">
            {/* Chat Header */}
            <header className="bg-white px-4 py-3 border-b flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-500 hover:text-slate-800 -ml-2">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Avatar className="w-10 h-10 border border-slate-200">
                        <AvatarImage src={expert.photo} />
                        <AvatarFallback>{expert.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="font-bold text-sm text-slate-800 leading-tight">{expert.name}</h3>
                        <p className="text-xs text-green-600 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            Online • {expert.specialization}
                        </p>
                    </div>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-[110px] h-8 text-xs border-slate-200 bg-slate-50">
                        <SelectValue placeholder="Lang" />
                    </SelectTrigger>
                    <SelectContent align="end">
                        <SelectItem value="English">🇬🇧 English</SelectItem>
                        <SelectItem value="Hinglish">🇮🇳 Hinglish</SelectItem>
                    </SelectContent>
                </Select>
            </header>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-4" viewportRef={scrollRef}>
                <div className="flex flex-col gap-4 max-w-3xl mx-auto pb-4">
                    <div className="text-center my-4">
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-200/50 px-2 py-1 rounded-full uppercase tracking-wider">
                            Encrypted Session
                        </span>
                    </div>

                    {messages.map((msg) => (
                        <div 
                            key={msg.id} 
                            className={cn(
                                "flex gap-2 max-w-[85%] md:max-w-[75%]",
                                msg.role === 'user' ? "self-end flex-row-reverse" : "self-start"
                            )}
                        >
                            <Avatar className="w-8 h-8 shrink-0 mt-1 border border-black/5">
                                {msg.role === 'assistant' ? (
                                    <AvatarImage src={expert.photo} />
                                ) : (
                                    <AvatarFallback className="bg-blue-600 text-white text-xs">Me</AvatarFallback>
                                )}
                            </Avatar>
                            
                            <div className={cn(
                                "relative p-3 rounded-2xl text-sm shadow-sm",
                                msg.role === 'user' 
                                    ? "bg-blue-600 text-white rounded-tr-none" 
                                    : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                            )}>
                                <p dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br/>') }} />
                                <span className={cn(
                                    "text-[10px] block text-right mt-1 opacity-70",
                                    msg.role === 'user' ? "text-blue-100" : "text-slate-400"
                                )}>
                                    {msg.timestamp}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Loading Indicator */}
                    {isLoading && (
                        <div className="flex gap-2 self-start max-w-[75%]">
                             <Avatar className="w-8 h-8 shrink-0 mt-1 border">
                                <AvatarImage src={expert.photo} />
                            </Avatar>
                            <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="bg-white p-4 border-t">
                {/* Suggestions Chips (Only show if few messages) */}
                {messages.length < 3 && !isLoading && (
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
                        {suggestedQuestions.map((q, i) => (
                            <button 
                                key={i}
                                onClick={() => handleSendMessage(q)}
                                className="whitespace-nowrap text-xs bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}
                
                <form 
                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
                    className="flex gap-2 items-end max-w-3xl mx-auto"
                >
                    <Input 
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your question..."
                        className="min-h-[44px] bg-slate-50 border-slate-200 focus-visible:ring-blue-500 rounded-full px-4"
                        disabled={isLoading}
                        autoFocus
                    />
                    <Button 
                        type="submit" 
                        size="icon" 
                        disabled={isLoading || !input.trim()}
                        className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 shrink-0 shadow-md"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-0.5" />}
                    </Button>
                </form>
            </div>
        </div>
    );
}

function RegisterView({ onBack }: { onBack: () => void }) {
    const { toast } = useToast();
    
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Application Received",
            description: "We will review your profile and contact you shortly.",
            duration: 3000,
        });
        setTimeout(onBack, 2000);
    };

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="p-4 border-b">
                <Button variant="ghost" onClick={onBack} className="-ml-2">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Experts
                </Button>
            </div>
            
            <ScrollArea className="flex-1">
                <div className="p-8 max-w-xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Briefcase className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Join the Expert Panel</h2>
                        <p className="text-slate-500 mt-2">Share your knowledge and earn by mentoring students and professionals.</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Full Name</label>
                            <Input required placeholder="Dr. Aditi Verma" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Experience (Yrs)</label>
                                <Input required type="number" placeholder="10" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Consultation Fee (₹/hr)</label>
                                <Input required type="number" placeholder="1500" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Specialization</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Domain" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="dairy">Dairy Technology</SelectItem>
                                    <SelectItem value="safety">Food Safety</SelectItem>
                                    <SelectItem value="processing">Food Processing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">LinkedIn Profile URL</label>
                            <Input type="url" placeholder="https://linkedin.com/in/..." />
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                            <p>Verified experts get a "Blue Tick" badge and priority listing on our platform.</p>
                        </div>

                        <Button type="submit" className="w-full h-11 bg-slate-900 hover:bg-blue-700 text-lg">
                            Submit Application
                        </Button>
                    </form>
                </div>
            </ScrollArea>
        </div>
    );
}
