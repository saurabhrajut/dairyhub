
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
import { Loader2, Sparkles, Lightbulb, UserPlus, Bot, ArrowLeft, Send, Upload } from 'lucide-react';
import { askExpert } from '@/app/actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Message } from '@/ai/flows/types';
import { useAuth } from '@/context/auth-context';
import { useCollection, useFirebase } from '@/firebase';
import { collection, doc, serverTimestamp, setDoc, addDoc, query, orderBy, where, getDocs, limit, getDoc, updateDoc } from 'firebase/firestore';

const initialExperts = [
  { id: '1', name: "Dr. Ramesh Kumar", experience: 15, specialization: "Dairy Technology", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=R", type: 'ai' },
  { id: '2', name: "Sunita Sharma", experience: 12, specialization: "Food Safety and Quality", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=S", type: 'ai' },
  { id: '3', name: "Anil Singh", experience: 20, specialization: "Food Processing", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=A", type: 'ai' }
];

interface Expert {
    id: string;
    name: string;
    experience: number;
    specialization: string;
    photo: string;
    type: 'ai' | 'real';
    fee?: number;
}

interface UIMessage { id: string; role: "user" | "assistant"; text: string; }

// --- New Firebase-related functions ---
async function getOrCreateChat(db: any, currentUserId: string, expertId: string) {
    if (!currentUserId || !expertId) {
        throw new Error("User ID or Expert ID is missing.");
    }
    const sortedParticipants = [currentUserId, expertId].sort();
    const chatId = sortedParticipants.join('_');
    const chatRef = doc(db, 'chats', chatId);
    
    // Check if a chat with this ID already exists
    const chatSnap = await getDocs(query(collection(db, 'chats'), where('participants', '==', sortedParticipants), limit(1)));

    if (chatSnap.empty) {
        await setDoc(chatRef, {
            participants: sortedParticipants,
            createdAt: serverTimestamp(),
        });
        return chatId;
    } else {
        return chatSnap.docs[0].id;
    }
}

async function sendMessage(db: any, chatId: string, senderId: string, text: string) {
    if (!text.trim()) return;
    const messagesRef = collection(db, 'chats', chatId, 'messages');
    await addDoc(messagesRef, {
        senderId,
        text,
        timestamp: serverTimestamp()
    });
    // Also update the last message on the chat document for previews
    await setDoc(doc(db, 'chats', chatId), {
        lastMessage: { text, senderId, timestamp: serverTimestamp() }
    }, { merge: true });
}


export function ExpertSupportModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const { user } = useAuth();
  const [chatId, setChatId] = useState<string | null>(null);
  const { firestore } = useFirebase();

  // Fetch real experts from Firestore
  const expertsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, "experts"));
  }, [firestore]);
  const { data: realExpertsData, loading: expertsLoading } = useCollection(expertsQuery);

  const realExperts: Expert[] = useMemo(() => {
    if (!realExpertsData) return [];
    return realExpertsData.map((doc: any) => ({
      id: doc.id,
      name: doc.displayName,
      experience: doc.experience,
      specialization: doc.specialization,
      photo: doc.photoURL,
      fee: doc.fee,
      type: 'real'
    }));
  }, [realExpertsData]);


  const handleSelectExpert = useCallback(async (expert: Expert) => {
      setSelectedExpert(expert);
      if (expert.type === 'real' && firestore && user) {
          try {
              const id = await getOrCreateChat(firestore, user.uid, expert.id);
              setChatId(id);
          } catch(error) {
              console.error("Failed to get or create chat:", error);
              // Handle error, maybe show a toast
          }
      }
      setActivePage('chat');
  }, [firestore, user]);

  const handleBackToHome = useCallback(() => {
      setActivePage('home');
      setSelectedExpert(null);
      setChatId(null);
  }, []);
  
  const handleAddExpert = async (newExpert: Omit<Expert, 'id' | 'type'>) => {
    if (!user || user.isAnonymous || !firestore) return;
    
    // Use the authenticated user's UID as the expert ID
    const expertId = user.uid;
    const expertRef = doc(firestore, 'experts', expertId);

    const expertData = {
      displayName: newExpert.name,
      experience: newExpert.experience,
      specialization: newExpert.specialization,
      fee: newExpert.fee,
      photoURL: newExpert.photo || `https://placehold.co/150x150/E2E8F0/4A5568?text=${newExpert.name.charAt(0)}`,
    };

    // Save expert profile to 'experts' collection
    await setDoc(expertRef, expertData, { merge: true });

    // Update user's profile to mark them as an expert
    const userRef = doc(firestore, 'users', user.uid);
    await updateDoc(userRef, {
        isExpert: true,
        expertDetails: {
            specialization: newExpert.specialization,
            experience: newExpert.experience,
            fee: newExpert.fee,
        }
    });

    setActivePage('home');
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActivePage('home');
      setSelectedExpert(null);
      setChatId(null);
    }
    setIsOpen(open);
  }

  const renderPage = () => {
      switch (activePage) {
          case 'chat': return <ChatPage expert={selectedExpert!} onBack={handleBackToHome} chatId={chatId} />;
          case 'register': return <RegisterExpertPage onBack={() => setActivePage('home')} onRegister={handleAddExpert} />;
          case 'home':
          default: return <HomePage onSelectExpert={handleSelectExpert} setActivePage={setActivePage} realExperts={realExperts} expertsLoading={expertsLoading} />;
      }
  };

  return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
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

function HomePage({ setActivePage, onSelectExpert, realExperts, expertsLoading }: { setActivePage: (page: string) => void, onSelectExpert: (expert: any) => void, realExperts: Expert[], expertsLoading: boolean }) {
  const [expertType, setExpertType] = useState<'ai' | 'real'>('ai');
  const experts = useMemo(() => {
      if (expertType === 'ai') return initialExperts;
      return realExperts;
  }, [expertType, realExperts]);

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
            <Button onClick={() => setExpertType('real')} variant={expertType === 'real' ? 'default' : 'ghost'} className="rounded-full shadow-sm">Real Experts</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {expertsLoading && expertType === 'real' && (
            <div className="col-span-full text-center py-10">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="text-muted-foreground mt-2">Loading Experts...</p>
            </div>
          )}

          {!expertsLoading && experts.map(expert => (
            <div key={expert.id} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer" onClick={() => onSelectExpert(expert)}>
              <img className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200" src={expert.photo} data-ai-hint="profile photo" alt={expert.name} />
              <h4 className="text-lg font-semibold text-gray-900">{expert.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{expert.experience}+ years in {expert.specialization}</p>
              {expert.type === 'real' && expert.fee && <p className="text-sm font-bold text-green-600 mt-2">₹{expert.fee}/hour</p>}
            </div>
          ))}

           {!expertsLoading && expertType === 'real' && experts.length === 0 && (
                <div className="col-span-full text-center py-10 text-gray-500">
                    <p>No real experts have registered yet.</p>
                    <p>Be the first one!</p>
                </div>
            )}
        </div>
        <div className="text-center mt-8 space-x-4">
          <Button variant="outline" onClick={() => setActivePage('register')}>Become an Expert <UserPlus className="ml-2" /></Button>
        </div>
      </div>
    </ScrollArea>
  );
}

function ChatPage({ expert, onBack, chatId }: { expert: Expert, onBack: () => void, chatId: string | null }) {
    if (expert.type === 'ai') {
        return <AIChat expert={expert} onBack={onBack} />;
    } else {
        return <RealExpertChat expert={expert} onBack={onBack} chatId={chatId} />;
    }
}


function AIChat({ expert, onBack }: { expert: Expert, onBack: () => void }) {
    const [messages, setMessages] = useState<UIMessage[]>([]);
    const [history, setHistory] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewportRef = useRef<HTMLDivElement>(null);
    const [language, setLanguage] = useState("English");
    const languageRef = useRef(language);
    languageRef.current = language;

    useEffect(() => {
        setMessages([{ id: "initial-ai", role: "assistant", text: `Hello! I am ${expert.name}. Ask me anything about ${expert.specialization}.` }]);
    }, [expert]);

    useEffect(() => {
        if (scrollViewportRef.current) {
            scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

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
            const payload = {
                expertName: expert.name,
                experience: expert.experience,
                specialization: expert.specialization,
                question: query,
                language: languageRef.current,
                history: newHistoryForApi,
            };
            const response = await askExpert(payload);
            
            if (!response?.answer) throw new Error("Received an empty response.");

            const assistantMessage: UIMessage = { id: Date.now().toString() + "-ai", role: "assistant", text: response.answer };
            setMessages((prev) => [...prev, assistantMessage]);
            setHistory([...newHistoryForApi, { role: 'model', content: [{ text: response.answer }] }]);

        } catch (error: any) {
            const errorMessage: UIMessage = { id: Date.now().toString() + "-error", role: "assistant", text: error.message || "Sorry, something went wrong." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

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
                    <SelectTrigger className="w-[120px]"><SelectValue placeholder="Language" /></SelectTrigger>
                    <SelectContent><SelectItem value="English">English</SelectItem><SelectItem value="Hinglish">Hinglish</SelectItem></SelectContent>
                </Select>
            </header>
             <ScrollArea className="flex-grow p-4" viewportRef={scrollViewportRef}>
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
                            <div className="bg-muted p-3 rounded-2xl rounded-bl-none"><div className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="animate-spin h-4 w-4" />Thinking...</div></div>
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

function RealExpertChat({ expert, onBack, chatId }: { expert: Expert, onBack: () => void, chatId: string | null }) {
    const { user } = useAuth();
    const { firestore } = useFirebase();
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewportRef = useRef<HTMLDivElement>(null);

    const messagesQuery = useMemo(() => {
        if (!firestore || !chatId) return null;
        return query(collection(firestore, 'chats', chatId, 'messages'), orderBy('timestamp', 'asc'));
    }, [firestore, chatId]);

    const { data: messages, loading: messagesLoading } = useCollection(messagesQuery);

    useEffect(() => {
        if (scrollViewportRef.current) {
            scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (!text || !firestore || !user || !chatId) return;

        setIsLoading(true);
        setInput("");
        try {
            await sendMessage(firestore, chatId, user.uid, text);
        } catch (error) {
            console.error("Error sending message:", error);
            // Optionally, show a toast to the user
        } finally {
            setIsLoading(false);
        }
    };

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
                            {expert.fee && <p className="text-xs font-bold text-green-600 mt-1">₹{expert.fee}/hour</p>}
                        </div>
                    </div>
                </header>
                 <ScrollArea className="flex-grow p-4" viewportRef={scrollViewportRef}>
                    <div className="flex flex-col gap-4">
                        {messagesLoading && <div className="text-center text-muted-foreground"><Loader2 className="animate-spin inline-block mr-2" />Loading messages...</div>}
                        {messages?.map((msg: any) => (
                            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.senderId === user?.uid ? "self-end" : "self-start"}`}>
                                {msg.senderId !== user?.uid && (
                                    <div className="bg-muted p-2 rounded-full h-fit shrink-0">
                                        <img src={expert.photo} alt={expert.name} className="w-5 h-5 rounded-full" />
                                    </div>
                                )}
                                <div className={`flex-1 p-3 rounded-2xl break-words ${msg.senderId === user?.uid ? "bg-primary/90 text-primary-foreground rounded-br-none" : "bg-muted text-muted-foreground rounded-bl-none"}`}>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="self-end flex gap-3 items-center">
                                <div className="bg-primary/90 p-3 rounded-2xl rounded-br-none">
                                    <div className="flex items-center gap-2 text-sm text-primary-foreground">
                                        <Loader2 className="animate-spin h-4 w-4" />
                                        Sending...
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
                <form onSubmit={handleSendMessage} className="p-4 border-t bg-background flex items-center gap-2">
                    <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-grow" disabled={isLoading} />
                    <Button type="submit" size="icon" className="shrink-0" disabled={isLoading || !input}><Send /></Button>
                </form>
            </div>
      </div>
    );
}


function RegisterExpertPage({ onBack, onRegister }: { onBack: () => void, onRegister: (data: Omit<Expert, 'id' | 'type'>) => void }) {
    const [formData, setFormData] = useState({ name: '', experience: '', specialization: '', photo: '', fee: '' });
    const { toast } = useToast();
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setFormData(prev => ({...prev, photo: result}));
                setPhotoPreview(result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, experience, specialization, fee } = formData;
        if (!name || !experience || !specialization || !fee) {
            toast({ variant: 'destructive', title: "Missing fields", description: "Please fill out all required fields."});
            return;
        }
        onRegister({
            name,
            experience: parseInt(experience, 10),
            specialization,
            photo: formData.photo,
            fee: parseInt(fee, 10)
        });
        toast({ title: "Registration Successful!", description: "You are now listed as a real expert." });
    }

    return (
        <ScrollArea className="h-full">
        <div className="p-4">
            <Button variant="ghost" onClick={onBack}><ArrowLeft className="mr-2" /> Back to Home</Button>
            <div className="bg-card p-6 rounded-xl shadow-lg max-w-2xl mx-auto border mt-6">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Register as a Real Expert</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                 <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                        {photoPreview ? (
                            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <UserPlus className="w-12 h-12 text-gray-400" />
                        )}
                    </div>
                     <Button asChild variant="outline">
                        <label htmlFor="photo-upload" className="cursor-pointer">
                           <Upload className="mr-2" /> Upload Photo
                        </label>
                    </Button>
                    <Input id="photo-upload" name="photo" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </div>
                <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <Input name="experience" type="number" placeholder="Experience (in years)" value={formData.experience} onChange={handleChange} required />
                <Input name="specialization" placeholder="Specialization (e.g., Dairy Technology)" value={formData.specialization} onChange={handleChange} required />
                <Input name="fee" type="number" placeholder="Fee per hour (₹)" value={formData.fee} onChange={handleChange} required />
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Register</Button>
            </form>
            </div>
        </div>
        </ScrollArea>
    );
}
