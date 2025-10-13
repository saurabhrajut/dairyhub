
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import type { Message } from '@/ai/flows/types';
import { sarathiAI } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface UIMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
}

export function SarathiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('English');
  const scrollViewportRef = useRef<HTMLDivElement>(null);
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      if (messages.length === 0 && user) {
        setMessages([{
          id: 'initial',
          role: 'assistant',
          text: `Namaste ${user.displayName || 'Guest'}, I am Sarathi, your digital partner. How can I help you today?`
        }]);
      } else if (!user && !loading) {
         setMessages([{
          id: 'initial-guest',
          role: 'assistant',
          text: `Namaste Guest, I am Sarathi. Please log in for a personalized experience.`
        }]);
      }
    }
  }, [isOpen, user, messages.length, loading]);
  
  useEffect(() => {
    if (scrollViewportRef.current) {
        scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
    }
  }, [messages, isLoading]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();

    if (!user) {
        toast({
            title: "Login Required",
            description: "Please log in to chat with Sarathi.",
            action: <Button onClick={() => router.push('/login')}>Login</Button>
        });
        return;
    }

    if (!query || isLoading) return;

    const userMessage: UIMessage = { id: Date.now().toString(), role: 'user', text: query };
    setMessages(prev => [...prev, userMessage]);
    
    const newHistoryForApi: Message[] = [...history, { role: 'user', content: [{ text: query }] }];
    setInput('');
    setIsLoading(true);

    try {
        const response = await sarathiAI({
            userName: user.displayName || 'Guest',
            question: query,
            language: language,
            history: newHistoryForApi,
        });

        if (!response?.answer) {
            throw new Error("Sorry, I could not get a response. Please try again.");
        }
        
        const assistantMessage: UIMessage = { id: Date.now().toString() + '-ai', role: 'assistant', text: response.answer };
        setMessages(prev => [...prev, assistantMessage]);
        setHistory([...newHistoryForApi, { role: 'model', content: [{ text: response.answer }] }]);

    } catch (error: any) {
        const errorMessage: UIMessage = { id: Date.now().toString() + '-error', role: 'assistant', text: error.message || "Sorry, something went wrong." };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };


  return (
    <>
      <div className={cn("fixed bottom-6 right-6 z-40 transition-transform duration-300", isOpen ? 'scale-0' : 'scale-100')}>
        <Button size="icon" className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-primary to-accent" onClick={() => setIsOpen(true)}>
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>

      <div className={cn(
        "fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-card border rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right",
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
      )}>
        <header className="p-4 border-b flex items-center justify-between gap-4 bg-muted/50 rounded-t-2xl">
            <div className='flex items-center gap-3'>
                <div className="bg-primary/10 p-2 rounded-full h-fit"><Bot className="w-6 h-6 text-primary" /></div>
                <div>
                    <h3 className="font-bold font-headline">सारथी AI</h3>
                    <p className="text-xs text-muted-foreground">Your Digital Partner</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-[120px] h-8 text-xs">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Hinglish">Hinglish</SelectItem>
                    </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}><X /></Button>
            </div>
        </header>

        <ScrollArea className="flex-grow p-4" viewportRef={scrollViewportRef}>
            <div className="flex flex-col gap-4">
                 {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end" : "self-start"}`}>
                        {msg.role === 'assistant' && <div className="bg-muted p-2 rounded-full h-fit shrink-0"><Bot className="w-5 h-5 text-foreground" /></div>}
                        <div className={`flex-1 p-3 rounded-2xl break-words ${msg.role === "user" ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted text-muted-foreground rounded-bl-none"}`}>
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
        <form onSubmit={handleSubmit} className="p-4 border-t bg-background flex items-center gap-2 rounded-b-2xl">
            <Input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask Sarathi anything..." 
              className="flex-grow" 
              disabled={isLoading || (!user && !loading)} 
            />
            <Button type="submit" size="icon" className="shrink-0" disabled={isLoading || !input || (!user && !loading)}><Send /></Button>
        </form>
      </div>
    </>
  );
}
