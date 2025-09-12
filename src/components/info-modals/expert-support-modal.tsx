
"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Lightbulb, UserPlus, Bot, ArrowLeft, Send } from 'lucide-react';
import { askExpert, gyanAI } from '@/app/actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const initialExperts = [
    { id: '1', name: "Dr. Ramesh Kumar", experience: 15, specialization: "Dairy Technology", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=R", type: 'ai' },
    { id: '2', name: "Sunita Sharma", experience: 12, specialization: "Food Safety and Quality", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=S", type: 'ai' },
    { id: '3', name: "Anil Singh", experience: 20, specialization: "Food Processing", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=A", type: 'ai' }
];

interface Message {
  role: "user" | "model";
  content: { text: string }[];
}

interface UIMessage {
    id: string;
    role: "user" | "assistant";
    text: string;
}

// Main Component
export function ExpertSupportModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
    const [activePage, setActivePage] = useState<'home' | 'chat' | 'gyan-ai' | 'register'>('home');
    const [selectedExpert, setSelectedExpert] = useState<typeof initialExperts[0] | null>(null);

    const handleSelectExpert = useCallback((expert: typeof initialExperts[0]) => {
        setSelectedExpert(expert);
        setActivePage('chat');
    }, []);

    const handleBackToHome = useCallback(() => {
        setActivePage('home');
        setSelectedExpert(null);
    }, []);

    const renderPage = () => {
        switch (activePage) {
            case 'chat': 
                return <ChatPage expert={selectedExpert!} onBack={handleBackToHome} />;
            case 'gyan-ai': 
                return <GyanAIPage onBack={() => setActivePage('home')} />;
            case 'register': 
                return <RegisterExpertPage onBack={() => setActivePage('home')} />;
            case 'home':
            default: 
                return <HomePage setActivePage={setActivePage} onSelectExpert={handleSelectExpert} />;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
                <DialogHeader className="p-4 sm:p-0 shrink-0">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-800 font-headline">
                        💡 Experts Suggest
                    </DialogTitle>
                </DialogHeader>
                <div className="flex-1 min-h-0">
                    {renderPage()}
                </div>
            </DialogContent>
        </Dialog>
    );
}

// Sub-components for each page
function HomePage({ setActivePage, onSelectExpert }: { setActivePage: (page: string) => void, onSelectExpert: (expert: any) => void }) {
    const [expertType, setExpertType] = useState<'ai' | 'real'>('ai');
    const [experts, setExperts] = useState(initialExperts);
   
    const filteredExperts = useMemo(() => experts.filter(e => e.type === expertType), [experts, expertType]);

    return (
        <ScrollArea className="h-full">
            <div className="p-4">
                 <div className="text-center my-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Advice from Industry Experts</h2>
                    <p className="text-md text-gray-600 max-w-2xl mx-auto">Choose between instant AI-powered answers or connect with real-world professionals.</p>
                </div>
                 <div className="flex justify-center mb-6">
                        <div className="bg-gray-200 rounded-full p-1 flex items-center">
                            <Button onClick={() => setExpertType('ai')} variant={expertType === 'ai' ? 'default' : 'ghost'} className="rounded-full shadow-sm">AI Experts</Button>
                            <Button onClick={() => setExpertType('real')} variant={expertType === 'real' ? 'default' : 'ghost'} className="rounded-full shadow-sm" disabled>Real Experts (Coming Soon)</Button>
                        </div>
                    </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                   {filteredExperts.map(expert => (
                       <div key={expert.id} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer" onClick={() => onSelectExpert(expert)}>
                           <img className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200" src={expert.photo} alt={expert.name} />
                           <h4 className="text-lg font-semibold text-gray-900">{expert.name}</h4>
                           <p className="text-sm text-gray-600 mt-1">{expert.experience}+ years in {expert.specialization}</p>
                       </div>
                   ))}
                </div>

                 <div className="text-center mt-8 space-x-4">
                    <Button variant="secondary" onClick={() => setActivePage('gyan-ai')}>Go to Gyan AI <Lightbulb className="ml-2"/></Button>
                    <Button variant="outline" onClick={() => setActivePage('register')}>Become an Expert <UserPlus className="ml-2" /></Button>
                </div>
            </div>
        </ScrollArea>
    );
}

function ChatInterface({ title, description, initialMessage, onBack, apiCall }: { title: string, description: string, initialMessage: string, onBack: () => void, apiCall: (query: string, history: Message[]) => Promise<{ answer: string }> }) {
    const [messages, setMessages] = useState<UIMessage[]>([
        { id: "initial", role: "assistant", text: initialMessage }
    ]);
    const [history, setHistory] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const query = input.trim();
        if (!query || isLoading) return;

        const userMessage: UIMessage = { id: Date.now().toString(), role: "user", text: query };
        setMessages((prev) => [...prev, userMessage]);

        const newHistoryForApi: Message[] = [...history, { role: 'user', content: [{ text: query }] }];
        setInput("");
        setIsLoading(true);

        try {
            const response = await apiCall(query, newHistoryForApi);

            const assistantMessage: UIMessage = { id: Date.now().toString() + "-ai", role: "assistant", text: response.answer };
            setMessages((prev) => [...prev, assistantMessage]);
            setHistory([...newHistoryForApi, { role: 'model', content: [{ text: response.answer }] }]);

        } catch (error) {
            console.error(error);
            const errorMessage: UIMessage = { id: Date.now().toString() + "-error", role: "assistant", text: "Sorry, something went wrong. Please try again." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-full flex flex-col p-4">
            <Button variant="ghost" onClick={onBack} className="self-start mb-2"><ArrowLeft className="mr-2"/> Back</Button>
            <div className="flex-1 flex flex-col bg-card border rounded-lg overflow-hidden">
                <header className="p-4 border-b flex items-center justify-between gap-4">
                    <div className='flex items-center gap-4'>
                        <div className="bg-primary/10 p-2 rounded-full"><Bot className="w-6 h-6 text-primary"/></div>
                        <div>
                            <h3 className="font-bold">{title}</h3>
                            <p className="text-xs text-muted-foreground">{description}</p>
                        </div>
                    </div>
                </header>
                <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
                    <div className="flex flex-col gap-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end" : "self-start"}`}>
                                {msg.role === 'assistant' && <div className="bg-muted p-2 rounded-full h-fit shrink-0"><Bot className="w-5 h-5 text-foreground" /></div>}
                                <div className={`flex-1 p-3 rounded-2xl break-words ${msg.role === "user" ? "bg-primary/90 text-primary-foreground rounded-br-none" : "bg-muted text-muted-foreground rounded-bl-none"}`}>
                                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="self-start flex gap-3 items-center">
                                <div className="bg-muted p-2 rounded-full h-fit"><Bot className="w-5 h-5 text-foreground" /></div>
                                <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Loader2 className="animate-spin h-4 w-4" />
                                        Thinking...
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <form onSubmit={handleSubmit} className="p-4 border-t bg-background flex items-center gap-2">
                    <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a follow-up question..." className="flex-grow" disabled={isLoading} />
                    <Button type="submit" size="icon" className="shrink-0" disabled={isLoading || !input}><Send /></Button>
                </form>
            </div>
        </div>
    );
}

function ChatPage({ expert, onBack }: { expert: typeof initialExperts[0], onBack: () => void }) {
    const [language, setLanguage] = useState("English");

    const apiCall = useCallback((query: string, history: Message[]) => {
        return askExpert({
            expertName: expert.name,
            experience: expert.experience,
            specialization: expert.specialization,
            question: query,
            language: language,
            history: history,
        });
    }, [expert, language]);

    return (
        <div className="h-full flex flex-col p-4">
             <Button variant="ghost" onClick={onBack} className="self-start mb-2"><ArrowLeft className="mr-2"/> Back to Experts</Button>
            <div className="flex-1 flex flex-col bg-card border rounded-lg overflow-hidden">
                <header className="p-4 border-b flex items-center justify-between gap-4">
                    <div className='flex items-center gap-4'>
                        <img className="w-12 h-12 rounded-full object-cover" src={expert.photo} alt={expert.name} />
                        <div>
                            <h3 className="font-bold">{expert.name}</h3>
                            <p className="text-xs text-muted-foreground">{expert.specialization}</p>
                        </div>
                    </div>
                    <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Hindi">Hindi</SelectItem>
                        </SelectContent>
                    </Select>
                </header>
                 <ChatInterface
                    title={expert.name}
                    description={expert.specialization}
                    initialMessage={`Hello! I am ${expert.name}. Ask me anything about ${expert.specialization}.`}
                    onBack={onBack}
                    apiCall={apiCall}
                />
            </div>
        </div>
    );
}


function GyanAIPage({ onBack }: { onBack: () => void }) {
    const [topic, setTopic] = useState("Dairy Technology");
    const [language, setLanguage] = useState('English');
    const { toast } = useToast();

    const apiCall = useCallback((query: string, history: Message[]) => {
        if (!query) {
            toast({ variant: 'destructive', title: 'Error', description: 'Please enter a question.' });
            return Promise.reject('Empty question');
        }
        return gyanAI({ topic, question: query, language, history });
    }, [topic, language, toast]);

    const GyanAIHeader = (
         <div className="space-y-4">
            <Select onValueChange={setTopic} defaultValue="Dairy Technology">
                <SelectTrigger><SelectValue placeholder="Choose Topic" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="Dairy Technology">Dairy Technology</SelectItem>
                    <SelectItem value="Food Safety and Quality">Food Safety and Quality</SelectItem>
                    <SelectItem value="Food Processing">Food Processing</SelectItem>
                    <SelectItem value="Career Guidance in Food Industry">Career Guidance</SelectItem>
                </SelectContent>
            </Select>
            <Select onValueChange={setLanguage} defaultValue="English">
                <SelectTrigger><SelectValue placeholder="Response Language" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );

    return (
        <div className="h-full flex flex-col p-4">
            <Button variant="ghost" onClick={onBack} className="self-start mb-2"><ArrowLeft className="mr-2"/> Back to Home</Button>
            <div className="flex-1 flex flex-col bg-card border rounded-lg overflow-hidden">
                <header className="p-4 border-b flex flex-col sm:flex-row items-center justify-between gap-4">
                     <div className='flex items-center gap-4'>
                        <div className="bg-primary/10 p-2 rounded-full"><Lightbulb className="w-6 h-6 text-primary"/></div>
                        <div>
                            <h3 className="font-bold">Gyan AI - Your AI Specialist</h3>
                            <p className="text-xs text-muted-foreground">Instant, scientific information on any topic.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto">{GyanAIHeader}</div>
                </header>
                 <ChatInterface
                    title="Gyan AI"
                    description="Your AI Specialist"
                    initialMessage="Hello! I am Gyan AI. Select a topic and ask me anything."
                    onBack={onBack}
                    apiCall={apiCall}
                />
            </div>
        </div>
    );
}

function RegisterExpertPage({ onBack }: { onBack: (page: string) => void }) {
    return (
        <ScrollArea className="h-full">
            <div className="p-4">
                <Button variant="ghost" onClick={() => onBack('home')}><ArrowLeft className="mr-2" /> Back to Home</Button>
                <div className="bg-card p-6 rounded-xl shadow-lg max-w-2xl mx-auto border mt-6">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Register as a Real Expert</h3>
                    <div className="space-y-4">
                        <Input placeholder="Full Name" />
                        <Input type="number" placeholder="Experience (in years)" />
                        <Input placeholder="Specialization (e.g., Dairy Technology)" />
                        <Input type="url" placeholder="URL to your photo (Optional)" />
                        <Input type="number" placeholder="Fee per hour (₹)" />
                        <Button className="w-full bg-green-600 hover:bg-green-700">Register</Button>
                    </div>
                </div>
            </div>
        </ScrollArea>
    );
}
