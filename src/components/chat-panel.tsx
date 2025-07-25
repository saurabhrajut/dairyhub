"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getSarathiChatbotResponse } from "@/app/actions";
import { Mic, Send, Bot } from "lucide-react";

interface Message {
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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "assistant",
      text: "Ram Ram Sa mere dost! 🙏 Main hu aapka Sarathi. Jo bhi sawal ho bs bta dena.",
    },
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("hi-IN");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await getSarathiChatbotResponse({
        question: input,
        language: language,
      });
      const assistantMessage: Message = {
        id: Date.now().toString() + "-ai",
        sender: "assistant",
        text: response.answer,
        lang: language,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        sender: "assistant",
        text: "Maaf karna, kuch gadbad ho gayi. Fir se try karein.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

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
              {msg.sender === 'assistant' && <div className="bg-muted p-2 rounded-full h-fit"><Bot className="w-5 h-5 text-foreground" /></div>}
              <div
                className={`flex-1 p-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-primary/90 text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm">{msg.text.replace(/\n/g, '<br />')}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="self-start flex gap-3 items-center">
              <div className="bg-muted p-2 rounded-full h-fit"><Bot className="w-5 h-5 text-foreground" /></div>
              <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form
        onSubmit={handleSubmit}
        className="p-4 border-t bg-background flex items-center gap-2"
      >
        <Button type="button" size="icon" variant="ghost" className="text-muted-foreground" disabled>
            <Mic className="h-4 w-4" />
        </Button>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
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
