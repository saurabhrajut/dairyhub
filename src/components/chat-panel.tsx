
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
import { Mic, Send, Bot, Paperclip, X, Loader2, Languages, PlayCircle, StopCircle } from "lucide-react";
import type { ChatUserProfile } from "./chat-widget";
import { useLanguage } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";


interface GenkitMessage {
  role: "user" | "model";
  content: { text: string }[];
}

interface UIMessage {
    id: string;
    role: "user" | "model";
    text: string;
    lang?: string;
}

export function ChatPanel({
  isOpen,
  setIsOpen,
  user
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: ChatUserProfile;
}) {
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [input, setInput] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [showResumeInput, setShowResumeInput] = useState(false);
  const [language, setLanguage] = useState("hi-IN");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { language: appLanguage, setLanguage: setAppLanguage } = useLanguage();
  const { toast } = useToast();
  const recognitionRef = useRef<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);

  useEffect(() => {
    // Initialize welcome message only once
    if (messages.length === 0) {
      const welcomeMsg = `Ram Ram Sa ${user?.name || 'mere dost'}! 🙏 Main hu aapka Sarathi — full-on assistant mode mein! To… Jo bhi sawal ho bs bta dena, mai apne dimag ke ghode दौड़ा ke aapko batane ki कोशिश करूँगा, धन्यवाद। 😊`;
      const initialMessage: UIMessage = { id: "initial", role: "model", text: welcomeMsg, lang: "hi-IN" };
      setMessages([initialMessage]);
    }
  }, [user.name, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Setup Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        if (event.error === 'no-speech') {
            toast({ variant: 'destructive', title: "No speech detected", description: "Maine kuch suna nahi. Kripya dobara koshish karein." });
        } else if (event.error === 'not-allowed') {
            toast({ variant: 'destructive', title: "Permission Denied", description: "Microphone permission nahi hai." });
        }
        setIsListening(false);
      };
      recognitionRef.current = recognition;
    } else {
      console.warn("Speech Recognition not supported by this browser.");
    }

    // Cleanup speech synthesis on component unmount
    return () => {
      speechSynthesis.cancel();
    };
  }, [toast]);

  const handleMicClick = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
      } else {
        try {
          recognitionRef.current.lang = language;
          recognitionRef.current.start();
        } catch (e) {
          console.error("Could not start recognition:", e);
          setIsListening(false);
        }
      }
    } else {
      toast({ variant: 'destructive', title: "Not Supported", description: "Your browser does not support speech recognition." });
    }
  };


  const handleAppLanguageChange = (lang: string) => {
      setAppLanguage(lang as 'en' | 'hi');
      toast({
          title: "Language Updated",
          description: `App language set to ${lang === 'hi' ? 'Hinglish' : 'English'}.`,
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    const resumeQuery = resumeText.trim();

    if (!query && !resumeQuery) return;
    if (isLoading || !user) return; // Ensure user is available

    const userMessageText = showResumeInput ? (query || `Please analyze my resume.`) : query;
    const userMessage: UIMessage = {
      id: Date.now().toString(),
      role: "user",
      text: userMessageText,
    };
    
    // Add user message to UI immediately
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    
    // Prepare history for API call
    const historyForApi: GenkitMessage[] = newMessages
      .filter(msg => msg.id !== 'initial') // Exclude welcome message
      .map(msg => ({
        role: msg.role,
        content: [{ text: msg.text }]
      }));
      
    setInput("");
    setIsLoading(true);

    try {
      const response = await getSarathiChatbotResponse({
        name: user.name || 'Guest', // Pass the most current name
        age: user.age,
        gender: user.gender || 'other',
        question: query,
        language: language,
        resumeText: resumeQuery || undefined,
        history: historyForApi.slice(0, -1), // Send history *before* the current user message
      });

      const assistantMessage: UIMessage = {
        id: Date.now().toString() + "-ai",
        role: "model",
        text: response.answer,
        lang: language,
      };
      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage: UIMessage = {
        id: Date.now().toString() + "-error",
        role: "model",
        text: "Maaf karna, kuch gadbad ho gayi. Fir se try karein.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      if (showResumeInput) {
        setResumeText("");
        setShowResumeInput(false);
      }
    }
  };
  
  const handleSpeak = (messageId: string, text: string, lang: string) => {
    if (speakingMessageId === messageId) {
      speechSynthesis.cancel();
      setSpeakingMessageId(null);
      return;
    }

    speechSynthesis.cancel(); // Stop any previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(v => v.lang.startsWith(lang.split('-')[0])) || voices.find(v => v.lang.startsWith('en'));
    utterance.lang = lang;
    utterance.onstart = () => setSpeakingMessageId(messageId);
    utterance.onend = () => setSpeakingMessageId(null);
    utterance.onerror = () => setSpeakingMessageId(null);
    speechSynthesis.speak(utterance);
  };
  
  // Load voices on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
        speechSynthesis.getVoices(); 
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
        }
    }
  }, []);

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
        <div className="flex items-center gap-2">
             <Languages className="w-4 h-4" />
              <Select value={appLanguage} onValueChange={handleAppLanguageChange}>
                  <SelectTrigger className="w-auto bg-primary/50 text-xs border-0 focus:ring-0 h-7 px-2">
                  <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="hi">Hinglish</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                  </SelectContent>
              </Select>
        </div>
      </header>

      <ScrollArea className="flex-grow p-4 bg-gray-50" ref={scrollAreaRef}>
        <div className="flex flex-col gap-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 max-w-[85%] ${
                msg.role === "user" ? "self-end" : "self-start"
              }`}
            >
              {msg.role === 'model' && <div className="bg-muted p-2 rounded-full h-fit shrink-0"><Bot className="w-5 h-5 text-foreground" /></div>}
              <div
                className={`flex-1 p-3 rounded-xl break-words relative group ${
                  msg.role === "user"
                    ? "bg-primary/90 text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm" dangerouslySetInnerHTML={{__html: msg.text.replace(/\n/g, '<br />')}}></p>
                 {msg.role === 'model' && msg.id !== 'initial' && (
                    <button onClick={() => handleSpeak(msg.id, msg.text, msg.lang || 'hi-IN')} className="absolute -bottom-3 -right-3 bg-white p-1 rounded-full shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      {speakingMessageId === msg.id ? <StopCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
                    </button>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="self-start flex gap-3 items-center">
              <div className="bg-muted p-2 rounded-full h-fit"><Bot className="w-5 h-5 text-foreground" /></div>
              <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                   <Loader2 className="animate-spin h-4 w-4" />
                  Soch raha hu...
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
        className="p-3 border-t bg-background flex items-center gap-2"
      >
        <Button type="button" size="icon" variant="ghost" className="text-muted-foreground shrink-0" onClick={handleAttachClick} disabled={isLoading} title="Analyze Resume">
            <Paperclip className="h-5 w-5" />
        </Button>
         <Button type="button" size="icon" variant="ghost" onClick={handleMicClick} className={`shrink-0 ${isListening ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`} disabled={!recognitionRef.current} title="Speak">
            <Mic className="h-5 w-5" />
        </Button>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={showResumeInput ? "e.g., Ask questions based on this" : "Ask a question..."}
          className="flex-grow rounded-full focus-visible:ring-primary"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={isLoading || (!input && !resumeText)}>
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
