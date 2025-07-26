
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { getSarathiChatbotResponse } from "@/app/actions";
import { Mic, Send, Bot, Paperclip, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "model";
  content: { text: string }[];
}

// Separate UI message type to handle local IDs
interface UIMessage {
    id: string;
    sender: "user" | "assistant";
    text: string;
    lang?: string;
}

export function ChatPanel({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [messages, setMessages] = useState<UIMessage[]>([
    {
      id: "initial",
      sender: "assistant",
      text: "Ram Ram Sa mere dost! 🙏 Main hu aapka Sarathi. Apne dairy ke sawal pucho, ya fir neeche resume paste karke interview ki taiyari karo!",
    },
  ]);
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [showResumeInput, setShowResumeInput] = useState(false);
  const [language, setLanguage] = useState("hi-IN");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    const resumeQuery = resumeText.trim();

    if (!query && !resumeQuery) return;
    if (isLoading) return;

    const userMessageText = showResumeInput ? `Please analyze my resume.` : query;
    const userMessage: UIMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: userMessageText,
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Add user message to Genkit history
    const newHistory: Message[] = [...history, { role: 'user', content: [{ text: userMessageText }] }];
    setHistory(newHistory);

    setInput("");
    setIsLoading(true);

    try {
      const response = await getSarathiChatbotResponse({
        question: query,
        language: language,
        resumeText: resumeQuery || undefined,
        history: newHistory,
      });
      const assistantMessage: UIMessage = {
        id: Date.now().toString() + "-ai",
        sender: "assistant",
        text: response.answer,
        lang: language,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // Add assistant message to Genkit history
      setHistory(prev => [...prev, { role: 'model', content: [{ text: response.answer }] }]);

    } catch (error) {
      console.error(error);
      const errorMessage: UIMessage = {
        id: Date.now().toString() + "-error",
        sender: "assistant",
        text: "Maaf karna, kuch gadbad ho gayi. Fir se try karein.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setResumeText("");
      setShowResumeInput(false);
    }
  };

  const handleAttachClick = () => {
    if (showResumeInput) {
        setResumeText("");
    }
    setShowResumeInput(!showResumeInput);
  }

  return (
    <div
      className={`fixed bottom-28 right-8 w-[90%] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <header className="popup-header bg-gradient-to-r from-primary to-indigo-500 text-primary-foreground p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg font-headline">Sarathi</h3>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-auto bg-primary/50 text-xs border-0 focus:ring-0 h-7 px-2">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hi-IN">Hinglish</SelectItem>
              <SelectItem value="hi-IN-haryanvi">Haryanvi</SelectItem>
              <SelectItem value="pa-IN">Punjabi</SelectItem>
              <SelectItem value="en-IN">English</SelectItem>
              <SelectItem value="hi-IN-hindi">Hindi</SelectItem>
              <SelectItem value="hi-Braj">Braj Bhasha</SelectItem>
              <SelectItem value="hi-Bhoj">Bhojpuri</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${
                msg.sender === "user" ? "self-end" : "self-start"
              }`}
            >
              {msg.sender === 'assistant' && <div className="bg-muted p-2 rounded-full h-fit shrink-0"><Bot className="w-5 h-5 text-foreground" /></div>}
              <div
                className={`flex-1 p-3 rounded-2xl break-words ${
                  msg.sender === "user"
                    ? "bg-primary/90 text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm" dangerouslySetInnerHTML={{__html: msg.text.replace(/\n/g, '<br />')}}></p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="self-start flex gap-3 items-center">
              <div className="bg-muted p-2 rounded-full h-fit"><Bot className="w-5 h-5 text-foreground" /></div>
              <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
                  रुको जरा, सबर करो...
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {showResumeInput && (
        <div className="p-2 border-t bg-amber-50">
            <Label htmlFor="resume-input" className="text-xs text-amber-800 px-2 font-semibold">Paste your resume below for interview analysis</Label>
            <Textarea 
                id="resume-input"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Apna resume yahan paste karein..."
                className="w-full text-xs h-24 bg-white border-amber-200 focus-visible:ring-amber-500"
                disabled={isLoading}
            />
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="p-4 border-t bg-background flex items-center gap-2"
      >
        <Button type="button" size="icon" variant="ghost" className="text-muted-foreground shrink-0" onClick={handleAttachClick} disabled={isLoading} title="Analyze Resume">
            <Paperclip className="h-4 w-4" />
        </Button>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={showResumeInput ? "e.g., Ask questions based on this" : "Ask a question..."}
          className="flex-grow rounded-full focus-visible:ring-primary"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
