"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { Switch } from "@/components/ui/switch";
import { 
  Loader2, 
  UserPlus, 
  Bot, 
  ArrowLeft, 
  Send, 
  Briefcase, 
  Star, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  Phone,
  Mail,
  User,
  Check,
  X,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { initializeFirebase } from '@/firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  addDoc, 
  onSnapshot, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from '@/lib/utils';

interface Expert {
  id: string;
  name: string;
  experience: number;
  specialization: string;
  role: string;
  photo: string;
  type: 'ai' | 'real';
  status: 'online' | 'offline';
  fee: number;
  tags: string[];
  phone?: string;
  email?: string;
}

const PRESET_SPECIALIST_TAGS = [
  "HACCP",
  "ISO 22000",
  "FSSC 22000",
  "BRCGS",
  "Pasteurization",
  "UHT Processing",
  "CIP Systems",
  "Milk Testing",
  "Adulteration Detection",
  "Cheese Making",
  "Paneer Processing",
  "Yogurt & Dahi",
  "Ghee Production",
  "Butter Making",
  "Ice Cream Formulation",
  "Evaporators & Dryers",
  "Membrane Filtration (RO/UF)",
  "Cold Chain Management",
  "Silo & Storage Hygiene",
  "Laboratory Analysis",
  "Microbiology Testing",
  "Chemical Testing",
  "Sensory Evaluation",
  "Packaging Materials",
  "ETP & Waste Management",
  "Pest Control Protocols",
  "Audits & Compliance",
  "FSSAI Regulations",
  "Dairy Farm Management",
  "Animal Nutrition",
  "Clean Milk Production",
  "Mastitis Control",
  "Calibrations & Verification",
  "PLC & Automation",
  "Energy Audits",
  // Food Technology Tags
  "Food Packaging & Preservation",
  "Food Chemistry & Analysis",
  "Food Biotechnology",
  "Sensory Science",
  "Thermal Processing & Canning",
  "Dehydration & Drying",
  "Freezing & Cold Storage",
  "Fermentation Technology",
  "Bakery & Confectionery",
  "Beverage Technology",
  "Fruit & Vegetable Processing",
  "Meat, Poultry & Fish Processing",
  "Food Additives & Ingredients",
  "Nutraceuticals & Functional Foods",
  "Food Product Development",
  "Shelf Life Studies",
  "Food Rheology & Texture",
  "Extrusion Technology",
  "Non-Thermal Preservation",
  "Food Traceability",
  "GMP & GHP",
  "Allergen Management",
  "Post-Harvest Technology"
];

const COUNTRY_CODES = [
  { code: "+91", country: "India (IN)" },
  { code: "+1", country: "United States/Canada (US/CA)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+971", country: "United Arab Emirates (AE)" },
  { code: "+966", country: "Saudi Arabia (SA)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+33", country: "France (FR)" },
  { code: "+81", country: "Japan (JP)" },
  { code: "+86", country: "China (CN)" },
  { code: "+7", country: "Russia (RU)" },
  { code: "+55", country: "Brazil (BR)" },
  { code: "+27", country: "South Africa (ZA)" },
  { code: "+92", country: "Pakistan (PK)" },
  { code: "+880", country: "Bangladesh (BD)" },
  { code: "+977", country: "Nepal (NP)" },
  { code: "+94", country: "Sri Lanka (LK)" },
  { code: "+64", country: "New Zealand (NZ)" },
  { code: "+31", country: "Netherlands (NL)" },
  { code: "+39", country: "Italy (IT)" },
  { code: "+34", country: "Spain (ES)" },
  { code: "+41", country: "Switzerland (CH)" },
  { code: "+46", country: "Sweden (SE)" },
  { code: "+62", country: "Indonesia (ID)" },
  { code: "+60", country: "Malaysia (MY)" },
  { code: "+66", country: "Thailand (TH)" },
  { code: "+84", country: "Vietnam (VN)" },
  { code: "+63", country: "Philippines (PH)" },
  { code: "+90", country: "Turkey (TR)" },
  { code: "+20", country: "Egypt (EG)" },
  { code: "+234", country: "Nigeria (NG)" },
  { code: "+254", country: "Kenya (KE)" },
  { code: "+52", country: "Mexico (MX)" },
  { code: "+54", country: "Argentina (AR)" },
  { code: "+57", country: "Colombia (CO)" },
  { code: "+353", country: "Ireland (IE)" },
  { code: "+32", country: "Belgium (BE)" },
  { code: "+43", country: "Austria (AT)" },
  { code: "+45", country: "Denmark (DK)" },
  { code: "+47", country: "Norway (NO)" },
  { code: "+358", country: "Finland (FI)" },
  { code: "+48", country: "Poland (PL)" },
  { code: "+351", country: "Portugal (PT)" },
  { code: "+30", country: "Greece (GR)" },
  { code: "+965", country: "Kuwait (KW)" },
  { code: "+968", country: "Oman (OM)" },
  { code: "+974", country: "Qatar (QA)" },
  { code: "+973", country: "Bahrain (BH)" },
];

const parsePhoneNumber = (fullNumber: string) => {
  if (!fullNumber) return { countryCode: "+91", localNumber: "" };
  
  // Sort country codes by length of code descending to match longer codes first
  const sortedCodes = [...COUNTRY_CODES].sort((a, b) => b.code.length - a.code.length);
  
  for (const item of sortedCodes) {
    if (fullNumber.startsWith(item.code)) {
      return {
        countryCode: item.code,
        localNumber: fullNumber.slice(item.code.length)
      };
    }
  }
  
  return { countryCode: "+91", localNumber: fullNumber };
};

interface ChatRoom {
  id: string;
  userId: string;
  userName: string;
  expertId: string;
  expertName: string;
  lastMessage: string;
  lastMessageTime: any;
}

interface UIMessage { 
  id: string; 
  role: "user" | "assistant"; 
  text: string; 
  timestamp: string;
}

interface FirestoreMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: any;
}

type ViewState = 'list' | 'real-chat' | 'register' | 'expert-dashboard' | 'expert-chat';

export function ExpertSupportModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeView, setActiveView] = useState<ViewState>('list');
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedChat, setSelectedChat] = useState<ChatRoom | null>(null);
  
  // Real experts from Firestore
  const [realExperts, setRealExperts] = useState<Expert[]>([]);
  const { user } = useAuth();
  
  const db = useMemo(() => {
    try {
      const { firestore } = initializeFirebase();
      return firestore;
    } catch (e) {
      console.error("Firebase not initialized in ExpertSupportModal", e);
      return null;
    }
  }, []);

  // Listen to real experts in Firestore
  useEffect(() => {
    if (!db) return;
    const colRef = collection(db, "experts");
    const unsub = onSnapshot(colRef, (snapshot) => {
      const list: Expert[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        list.push({
          id: docSnap.id,
          name: data.name || "Expert",
          experience: Number(data.experience) || 0,
          specialization: data.specialization || "Dairy Science",
          role: data.role || "Consultant",
          photo: data.photo || `https://placehold.co/150x150/E2E8F0/1e293b?text=${(data.name || "E").charAt(0)}`,
          type: 'real',
          status: data.status || 'offline',
          fee: Number(data.fee) || 0,
          tags: data.tags || [],
          phone: data.phone || "",
          email: data.email || ""
        });
      });
      setRealExperts(list);
    }, (error) => {
      console.error("Error reading experts:", error);
    });

    return () => unsub();
  }, [db]);

  // Real Experts List
  const combinedExpertsList = useMemo(() => {
    return realExperts;
  }, [realExperts]);

  // Is current logged in user an expert?
  const currentExpertProfile = useMemo(() => {
    if (!user || user.isAnonymous) return null;
    return realExperts.find(e => e.id === user.uid) || null;
  }, [user, realExperts]);

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setActiveView('list');
        setSelectedExpert(null);
        setSelectedChat(null);
      }, 300);
    }
  }, [isOpen]);

  const handleSelectExpert = (expert: Expert) => {
    setSelectedExpert(expert);
    setActiveView('real-chat');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] max-h-[90vh] flex flex-col p-0 overflow-hidden bg-slate-50 border border-slate-200 shadow-2xl rounded-2xl">
        <div className="flex-1 w-full h-full flex flex-col min-h-0">
          
          {/* Main Top Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-4 py-3 sm:px-6 sm:py-4 pr-12 flex flex-col sm:flex-row items-start sm:items-center justify-between shrink-0 gap-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/10 p-2 rounded-xl border border-blue-500/20 shadow-inner">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  DairyHub Consultations
                </h1>
                <p className="text-slate-400 text-[10px] sm:text-xs font-medium">Connect with Certified Real Experts</p>
              </div>
            </div>

            {/* Mode Switcher for Registered Experts */}
            {currentExpertProfile && activeView !== 'real-chat' && activeView !== 'expert-chat' && (
              <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 gap-1 w-full sm:w-auto shrink-0 justify-between sm:justify-start">
                <Button 
                  size="sm" 
                  variant={activeView !== 'expert-dashboard' ? 'default' : 'ghost'} 
                  onClick={() => setActiveView('list')}
                  className={cn(
                    "text-[10px] sm:text-xs px-2.5 sm:px-3 h-7 sm:h-8 font-semibold rounded-lg transition-all flex-1 sm:flex-initial",
                    activeView !== 'expert-dashboard' ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-slate-300 hover:text-white"
                  )}
                >
                  Consult Directory
                </Button>
                <Button 
                  size="sm" 
                  variant={activeView === 'expert-dashboard' ? 'default' : 'ghost'} 
                  onClick={() => setActiveView('expert-dashboard')}
                  className={cn(
                    "text-[10px] sm:text-xs px-2.5 sm:px-3 h-7 sm:h-8 font-semibold rounded-lg transition-all flex-1 sm:flex-initial",
                    activeView === 'expert-dashboard' ? "bg-green-600 hover:bg-green-700 text-white" : "text-slate-300 hover:text-white"
                  )}
                >
                  <Briefcase className="w-3 h-3 mr-1 sm:mr-1.5 shrink-0" />
                  Expert Dashboard
                </Button>
              </div>
            )}
          </div>

          <div className="flex-1 min-h-0 flex flex-col relative bg-slate-50/30">
            {activeView === 'list' && (
              <ExpertListView 
                expertsList={combinedExpertsList}
                onSelectExpert={handleSelectExpert} 
                onRegister={() => setActiveView('register')} 
                currentExpertProfile={currentExpertProfile}
                onGoToDashboard={() => setActiveView('expert-dashboard')}
              />
            )}
            {activeView === 'real-chat' && selectedExpert && (
              <RealChatView 
                expert={selectedExpert} 
                onBack={() => setActiveView('list')} 
              />
            )}
            {activeView === 'register' && (
              <RegisterView 
                onBack={() => setActiveView('list')} 
              />
            )}
            {activeView === 'expert-dashboard' && (
              <ExpertDashboardView 
                currentExpert={currentExpertProfile}
                onBack={() => setActiveView('list')}
                onOpenChat={(chat) => {
                  setSelectedChat(chat);
                  setActiveView('expert-chat');
                }}
              />
            )}
            {activeView === 'expert-chat' && selectedChat && (
              <ExpertChatView 
                chat={selectedChat}
                onBack={() => setActiveView('expert-dashboard')}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// --- List View Component ---
function ExpertListView({ 
  expertsList, 
  onSelectExpert, 
  onRegister,
  currentExpertProfile,
  onGoToDashboard
}: { 
  expertsList: Expert[], 
  onSelectExpert: (e: Expert) => void, 
  onRegister: () => void,
  currentExpertProfile: Expert | null,
  onGoToDashboard: () => void
}) {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col h-full bg-white min-h-0">
      <div className="p-4 sm:p-6 border-b bg-gradient-to-b from-slate-50 to-white shrink-0">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-lg sm:text-2xl font-bold text-slate-800 mb-0.5 sm:mb-1">Get Professional Guidance</h2>
          <p className="text-slate-500 text-[11px] sm:text-sm leading-normal">
            Consult real-time industry experts for professional support.
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1 bg-slate-50/50 min-h-0">
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {expertsList.map((expert) => {
            const isSelf = user && expert.id === user.uid;

            return (
              <Card 
                key={expert.id} 
                className="group hover:shadow-xl hover:border-slate-300 transition-all duration-300 border-slate-200 cursor-pointer overflow-hidden flex flex-col"
                onClick={() => onSelectExpert(expert)}
              >
                <div className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-emerald-500 to-teal-500" />
                
                <CardHeader className="flex flex-row items-start gap-3 sm:gap-4 pb-2.5 sm:pb-3">
                  <div className="relative shrink-0">
                    <Avatar className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white shadow-md">
                      <AvatarImage src={expert.photo} />
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-bold text-base sm:text-lg">
                        {expert.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className={cn(
                      "absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 border-2 border-white rounded-full shadow",
                      expert.status === 'online' ? "bg-green-500" : "bg-slate-300"
                    )}></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                        {expert.name}
                      </h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 shrink-0" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">{expert.role}</p>
                    <div className="flex items-center gap-1 mt-0.5 text-slate-600 text-[10px] sm:text-xs font-semibold">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                      <span>{expert.experience}+ Yrs Exp.</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-3 flex-1">
                  <p className="text-[11px] sm:text-xs text-slate-600 mb-2.5 line-clamp-2">
                    Specialist in <span className="font-semibold text-slate-800">{expert.specialization}</span>. 
                    Ask about {expert.tags.join(', ')}.
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {expert.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[9px] font-medium bg-slate-100/80 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Consultation Pricing Badge */}
                  <div className="mt-3 flex items-center justify-between border-t pt-2 text-[10px] sm:text-xs">
                    <span className="text-slate-400 font-medium">Consultation Fee:</span>
                    <span className="font-bold px-2 py-0.5 rounded-full border shadow-sm text-emerald-600 bg-emerald-50 border-emerald-100">
                      {`₹${expert.fee}/hr`}
                    </span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 shrink-0 mt-auto">
                  <Button className={cn(
                    "w-full transition-colors gap-2 font-semibold text-xs sm:text-sm h-8 sm:h-9 shadow-sm",
                    isSelf 
                      ? "bg-slate-100 text-slate-600 hover:bg-slate-200 border" 
                      : "bg-slate-900 text-white hover:bg-blue-600"
                  )}>
                    {isSelf ? "My Profile" : "Chat Now"} 
                    <Send className="w-3 h-3" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </ScrollArea>

      {/* Join Panel Button */}
      <div className="p-4 border-t bg-white shrink-0 flex justify-center gap-3">
        {currentExpertProfile ? (
          <Button variant="outline" onClick={onGoToDashboard} className="text-green-600 border-green-200 bg-green-50 hover:bg-green-100 hover:text-green-700 font-semibold text-xs sm:text-sm">
            <Briefcase className="w-3.5 h-3.5 mr-2 shrink-0" />
            Manage My Expert Panel
          </Button>
        ) : (
          <Button variant="outline" onClick={onRegister} className="text-slate-600 border-dashed border-slate-300 hover:border-blue-400 hover:text-blue-600 font-semibold text-xs sm:text-sm">
            <UserPlus className="w-3.5 h-3.5 mr-2 shrink-0" />
            Join as a Real Expert
          </Button>
        )}
      </div>
    </div>
  );
}

// --- REAL EXPERT CHAT (Firestore real-time room) ---
function RealChatView({ expert, onBack }: { expert: Expert, onBack: () => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<FirestoreMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const db = useMemo(() => {
    try {
      const { firestore } = initializeFirebase();
      return firestore;
    } catch {
      return null;
    }
  }, []);

  const chatId = useMemo(() => {
    if (!user) return "";
    return `${user.uid}_${expert.id}`;
  }, [user, expert]);

  // Read message list from Firestore in real-time
  useEffect(() => {
    if (!db || !chatId || !user) return;
    
    // Create/Initialize Chat Metadata in parent collection if it doesn't exist yet
    const chatDocRef = doc(db, "chats", chatId);
    setDoc(chatDocRef, {
      id: chatId,
      userId: user.uid,
      userName: user.displayName || "Client User",
      expertId: expert.id,
      expertName: expert.name,
      lastMessage: "Consultation opened",
      lastMessageTime: serverTimestamp()
    }, { merge: true }).catch(err => console.error("Error creating chat record", err));

    const messagesCol = collection(db, "chats", chatId, "messages");
    const q = query(messagesCol, orderBy("timestamp", "asc"));
    
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs: FirestoreMessage[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        msgs.push({
          id: docSnap.id,
          senderId: data.senderId,
          senderName: data.senderName,
          text: data.text,
          timestamp: data.timestamp
        });
      });
      setMessages(msgs);
      
      // Auto scroll to bottom
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 100);
    }, (error) => {
      console.error("Error loading chat messages:", error);
    });

    return () => unsub();
  }, [db, chatId, user, expert]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !db || !user) return;
    
    setIsSending(true);
    const textToSend = input.trim();
    setInput("");

    try {
      const messagesCol = collection(db, "chats", chatId, "messages");
      await addDoc(messagesCol, {
        senderId: user.uid,
        senderName: user.displayName || "User",
        text: textToSend,
        timestamp: serverTimestamp()
      });

      const chatDocRef = doc(db, "chats", chatId);
      await updateDoc(chatDocRef, {
        lastMessage: textToSend,
        lastMessageTime: serverTimestamp()
      });

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Message failed",
        description: error?.message || "Failed to send message."
      });
    } finally {
      setIsSending(false);
    }
  };

  const formattedTime = (timestamp: any) => {
    if (!timestamp) return "Sending...";
    try {
      const date = timestamp.toDate();
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return "";
    }
  };

  if (!user || user.isAnonymous) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white">
        <AlertCircle className="w-10 h-10 text-slate-400 mb-2.5" />
        <h3 className="text-base font-bold text-slate-800">Authentication Required</h3>
        <p className="text-slate-500 text-xs max-w-xs mt-1">
          Real expert consulting requires a DairyHub user profile. Please log in or sign up to consult with {expert.name}.
        </p>
        <div className="flex gap-3 mt-5">
          <Button variant="outline" size="sm" onClick={onBack}>Cancel</Button>
          <Button size="sm" onClick={() => window.location.href = '/login'} className="bg-slate-900 hover:bg-blue-600">Log In</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 min-h-0">
      <header className="bg-white px-4 py-3 border-b flex items-center justify-between shadow-sm z-10 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-500 hover:text-slate-800 -ml-1 h-8 w-8">
            <ArrowLeft className="w-4.5 h-4.5" />
          </Button>
          <Avatar className="w-9 h-9 border border-slate-200 shrink-0">
            <AvatarImage src={expert.photo} />
            <AvatarFallback>{expert.name[0]}</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h3 className="font-bold text-xs sm:text-sm text-slate-800 leading-tight flex items-center gap-1 truncate">
              {expert.name}
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 shrink-0" />
            </h3>
            <p className="text-[9px] sm:text-[10px] text-green-600 flex items-center gap-1 font-semibold truncate">
              <span className={cn(
                "w-1.5 h-1.5 rounded-full animate-pulse",
                expert.status === 'online' ? "bg-green-500" : "bg-slate-400"
              )}></span>
              {expert.status === 'online' ? 'Online' : 'Offline'} • ₹{expert.fee}/hr
            </p>
          </div>
        </div>

        {/* Direct Contact Links */}
        <div className="flex items-center gap-1.5 shrink-0">
          {expert.phone && (
            <Button 
              size="icon" 
              variant="outline" 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:border-emerald-300 hover:text-emerald-600"
              onClick={() => window.open(`https://wa.me/${expert.phone ? expert.phone.replace('+', '') : ''}?text=Hello%20Dr.%20${expert.name},%20I%20need%20a%20consultation%20about%20dairy%20processing.`)}
              title="Connect via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </Button>
          )}
          {expert.phone && (
            <Button 
              size="icon" 
              variant="outline" 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg hover:border-blue-300 hover:text-blue-600"
              onClick={() => window.open(`tel:${expert.phone}`)}
              title="Call Expert"
            >
              <Phone className="w-3.5 h-3.5" />
            </Button>
          )}
        </div>
      </header>

      <ScrollArea className="flex-1 p-3 sm:p-4 min-h-0" viewportRef={scrollRef}>
        <div className="flex flex-col gap-3 max-w-3xl mx-auto pb-4">
          <div className="text-center my-1">
            <span className="text-[8px] sm:text-[9px] font-semibold text-slate-400 bg-slate-200/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Real-time In-App Consult
            </span>
          </div>

          {messages.length === 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center text-[10px] sm:text-xs text-blue-700 max-w-xs sm:max-w-sm mx-auto mt-6 shadow-sm">
              Start messaging. If the expert is online, they will reply to you directly. You can also connect via WhatsApp or Phone.
            </div>
          )}

          {messages.map((msg) => {
            const isMe = msg.senderId === user.uid;
            return (
              <div 
                key={msg.id} 
                className={cn(
                  "flex gap-2 max-w-[85%] md:max-w-[75%]",
                  isMe ? "self-end flex-row-reverse" : "self-start"
                )}
              >
                <Avatar className="w-7.5 h-7.5 shrink-0 mt-0.5 border">
                  {!isMe ? (
                    <AvatarImage src={expert.photo} />
                  ) : (
                    <AvatarFallback className="bg-slate-800 text-white text-[9px] font-bold">Me</AvatarFallback>
                  )}
                </Avatar>
                <div className={cn(
                  "relative p-2.5 rounded-2xl text-[11px] sm:text-xs shadow-sm leading-relaxed",
                  isMe 
                    ? "bg-slate-900 text-white rounded-tr-none" 
                    : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                )}>
                  <p>{msg.text}</p>
                  <span className={cn(
                    "text-[8px] sm:text-[9px] block text-right mt-1 opacity-70",
                    isMe ? "text-slate-300" : "text-slate-400"
                  )}>
                    {formattedTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <form 
        onSubmit={handleSendMessage}
        className="bg-white p-3 sm:p-4 border-t flex gap-2 items-center shrink-0"
      >
        <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your query for the expert..."
          className="min-h-[36px] h-9 bg-slate-50 border-slate-200 focus-visible:ring-slate-900 rounded-full px-4 text-xs"
          disabled={isSending}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isSending || !input.trim()}
          className="w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 shrink-0 shadow-md transition-colors"
        >
          {isSending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
        </Button>
      </form>
    </div>
  );
}

// --- REGISTER VIEW COMPONENT ---
function RegisterView({ onBack }: { onBack: () => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [name, setName] = useState(user?.displayName || "");
  const [experience, setExperience] = useState("");
  const [fee, setFee] = useState("");
  const [specialization, setSpecialization] = useState("Dairy Technology");
  const [countryCode, setCountryCode] = useState("+91");
  const [localPhone, setLocalPhone] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTagInput, setCustomTagInput] = useState("");

  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(prev => prev.filter(t => t !== tag));
    } else {
      setSelectedTags(prev => [...prev, tag]);
    }
  };

  const handleAddCustomTag = () => {
    const trimmed = customTagInput.trim();
    if (trimmed && !selectedTags.includes(trimmed)) {
      setSelectedTags(prev => [...prev, trimmed]);
      setCustomTagInput("");
    }
  };

  const db = useMemo(() => {
    try {
      const { firestore } = initializeFirebase();
      return firestore;
    } catch {
      return null;
    }
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) {
      toast({
        variant: "destructive",
        title: "Registration Error",
        description: "Firestore database could not be initialized."
      });
      return;
    }
    if (!user || user.isAnonymous) {
      toast({
        variant: "destructive",
        title: "Login Required",
        description: "Please sign in to register as an expert."
      });
      return;
    }

    setIsLoading(true);

    try {
      const expertDocRef = doc(db, "experts", user.uid);
      await setDoc(expertDocRef, {
        name: name,
        experience: Number(experience),
        fee: Number(fee),
        specialization: specialization,
        role: "Certified Consultant",
        photo: user.photoURL || `https://placehold.co/150x150/E2E8F0/1e293b?text=${name.charAt(0)}`,
        status: 'online',
        tags: selectedTags.length > 0 ? selectedTags : [specialization],
        phone: countryCode + localPhone.trim().replace(/\D/g, ''),
        email: user.email,
        createdAt: new Date().toISOString()
      });

      toast({
        title: "Expert Panel Activated!",
        description: "You are now registered as an Expert. Other users can view and consult you.",
      });
      
      setTimeout(onBack, 1500);
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Application Failed",
        description: error?.message || String(error)
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user || user.isAnonymous) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white">
        <AlertCircle className="w-10 h-10 text-slate-400 mb-2.5" />
        <h3 className="text-base font-bold text-slate-800">Registration Restricted</h3>
        <p className="text-slate-500 text-xs max-w-xs mt-1">
          Only registered users can join our Expert Panel. Guests must log in or sign up first.
        </p>
        <div className="flex gap-3 mt-5">
          <Button variant="outline" size="sm" onClick={onBack}>Cancel</Button>
          <Button size="sm" onClick={() => window.location.href = '/login'} className="bg-slate-900 hover:bg-blue-600">Log In</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white min-h-0">
      <div className="p-3 sm:p-4 border-b shrink-0 flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="-ml-2 h-8 text-slate-600 text-xs">
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Directory
        </Button>
        <Badge variant="outline" className="text-indigo-600 bg-indigo-50 border-indigo-100 text-[10px]">Consulting Program</Badge>
      </div>
      
      <ScrollArea className="flex-1 min-h-0">
        <div className="p-4 sm:p-8 max-w-xl mx-auto">
          <div className="text-center mb-6">
            <div className="bg-indigo-100 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-inner">
              <Briefcase className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Join the Expert Panel</h2>
            <p className="text-slate-500 text-xs mt-1 leading-normal">Share your domain expertise and offer paid consultations to other dairy professionals.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-slate-700">Display Name</label>
              <Input required value={name} onChange={e => setName(e.target.value)} placeholder="Dr. Aditi Verma" className="text-xs h-9 border-slate-200" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-700">Experience (Yrs)</label>
                <Input required type="number" min="1" value={experience} onChange={e => setExperience(e.target.value)} placeholder="10" className="text-xs h-9 border-slate-200" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-slate-700">Consultation Fee (₹/hr)</label>
                <Input required type="number" min="0" value={fee} onChange={e => setFee(e.target.value)} placeholder="500" className="text-xs h-9 border-slate-200" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-slate-700">Specialization</label>
              <Select value={specialization} onValueChange={setSpecialization}>
                <SelectTrigger className="text-xs h-9 border-slate-200">
                  <SelectValue placeholder="Select Domain" />
                </SelectTrigger>
                <SelectContent className="bg-white text-xs">
                  <SelectItem value="Dairy Technology">Dairy Technology</SelectItem>
                  <SelectItem value="Food Safety & Quality">Food Safety & Quality</SelectItem>
                  <SelectItem value="Food Processing">Food Processing</SelectItem>
                  <SelectItem value="Milk Procurement">Milk Procurement</SelectItem>
                  <SelectItem value="Lab Analysis">Lab Analysis & Equipment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-semibold text-slate-700 block">WhatsApp / Contact Number</label>
              <div className="flex gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-[120px] text-xs h-9 border-slate-200 shrink-0 bg-white">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-xs max-h-56">
                    {COUNTRY_CODES.map((item) => (
                      <SelectItem key={item.code} value={item.code}>
                        {item.code} ({item.country.split(' (')[0]})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input 
                  required 
                  type="tel" 
                  value={localPhone} 
                  onChange={e => setLocalPhone(e.target.value.replace(/\D/g, ''))} 
                  placeholder="9999999999" 
                  className="text-xs h-9 border-slate-200 flex-1" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-700 block">Specialist Tags</label>
              
              {/* Selected Tags list */}
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 p-2 bg-slate-50 border border-dashed rounded-lg min-h-9 items-center">
                  {selectedTags.map(tag => (
                    <Badge key={tag} className="bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] flex items-center gap-1.5 py-0.5 px-2">
                      {tag}
                      <X className="w-3 h-3 cursor-pointer shrink-0" onClick={() => handleToggleTag(tag)} />
                    </Badge>
                  ))}
                </div>
              )}

              {/* Preset tags grid */}
              <div className="border border-slate-100 rounded-xl p-3 bg-slate-50/50">
                <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Popular Dairy & Food Safety Tags (Select to add)</p>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {PRESET_SPECIALIST_TAGS.map(tag => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleToggleTag(tag)}
                        className={cn(
                          "text-[10px] px-2.5 py-1 rounded-lg border transition-all font-medium",
                          isSelected 
                            ? "bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm" 
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom tag input */}
              <div className="flex gap-2">
                <Input 
                  value={customTagInput} 
                  onChange={e => setCustomTagInput(e.target.value)} 
                  placeholder="Or enter a custom tag (e.g. Aflatoxin Testing)" 
                  className="text-xs h-9 border-slate-200 flex-1"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddCustomTag();
                    }
                  }}
                />
                <Button 
                  type="button" 
                  onClick={handleAddCustomTag} 
                  className="bg-slate-900 hover:bg-blue-600 text-white text-xs h-9 px-3 font-semibold"
                >
                  Add
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-[10px] sm:text-xs text-slate-600 flex gap-2.5 shadow-inner">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
              <p>Your profile will be public instantly in the Expert Support section. You can toggle your status online/offline or edit details anytime in your Dashboard.</p>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full h-10 bg-slate-900 hover:bg-blue-600 font-bold text-xs shadow transition-colors">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : 'Register & Go Online'}
            </Button>
          </form>
        </div>
      </ScrollArea>
    </div>
  );
}

// --- EXPERT DASHBOARD VIEW ---
function ExpertDashboardView({ 
  currentExpert, 
  onBack,
  onOpenChat
}: { 
  currentExpert: Expert | null, 
  onBack: () => void,
  onOpenChat: (chat: ChatRoom) => void
}) {
  const { toast } = useToast();
  const [activeChats, setActiveChats] = useState<ChatRoom[]>([]);
  const [status, setStatus] = useState<boolean>(currentExpert?.status === 'online');
  const [fee, setFee] = useState<string>(currentExpert?.fee.toString() || "0");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [localPhone, setLocalPhone] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>(currentExpert?.specialization || "");
  const [name, setName] = useState<string>(currentExpert?.name || "");
  const [experience, setExperience] = useState<string>(currentExpert?.experience.toString() || "0");
  const [selectedTags, setSelectedTags] = useState<string[]>(currentExpert?.tags || []);
  const [customTagInput, setCustomTagInput] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Tab for mobile layout
  const [dashboardTab, setDashboardTab] = useState<'chats' | 'profile'>('chats');

  const db = useMemo(() => {
    try {
      const { firestore } = initializeFirebase();
      return firestore;
    } catch {
      return null;
    }
  }, []);

  // Sync status state when profile loads
  useEffect(() => {
    if (currentExpert) {
      setStatus(currentExpert.status === 'online');
      setFee(currentExpert.fee.toString());
      const parsed = parsePhoneNumber(currentExpert.phone || "");
      setCountryCode(parsed.countryCode);
      setLocalPhone(parsed.localNumber);
      setSpecialization(currentExpert.specialization);
      setName(currentExpert.name);
      setExperience(currentExpert.experience.toString());
      setSelectedTags(currentExpert.tags || []);
    }
  }, [currentExpert]);

  // Load incoming chats from clients
  useEffect(() => {
    if (!db || !currentExpert) return;
    const colRef = collection(db, "chats");
    const q = query(colRef, where("expertId", "==", currentExpert.id));
    
    const unsub = onSnapshot(q, (snapshot) => {
      const list: ChatRoom[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        list.push({
          id: docSnap.id,
          userId: data.userId,
          userName: data.userName,
          expertId: data.expertId,
          expertName: data.expertName,
          lastMessage: data.lastMessage,
          lastMessageTime: data.lastMessageTime
        });
      });
      list.sort((a, b) => {
        const timeA = a.lastMessageTime?.seconds || 0;
        const timeB = b.lastMessageTime?.seconds || 0;
        return timeB - timeA;
      });
      setActiveChats(list);
    }, (error) => {
      console.error("Error reading dashboard chats:", error);
    });

    return () => unsub();
  }, [db, currentExpert]);

  const handleToggleStatus = async (checked: boolean) => {
    if (!db || !currentExpert) return;
    setStatus(checked);
    try {
      const docRef = doc(db, "experts", currentExpert.id);
      await updateDoc(docRef, {
        status: checked ? 'online' : 'offline'
      });
      toast({
        title: checked ? "You are Online" : "You are Offline",
        description: checked ? "Clients can contact you for consulting." : "Status set to offline.",
        duration: 1500
      });
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: "Update failed",
        description: e?.message || "Could not sync status with Firestore."
      });
    }
  };

  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(prev => prev.filter(t => t !== tag));
    } else {
      setSelectedTags(prev => [...prev, tag]);
    }
  };

  const handleAddCustomTag = () => {
    const trimmed = customTagInput.trim();
    if (trimmed && !selectedTags.includes(trimmed)) {
      setSelectedTags(prev => [...prev, trimmed]);
      setCustomTagInput("");
    }
  };

  const handleDeleteProfile = async () => {
    if (!db || !currentExpert) return;
    setIsDeleting(true);
    try {
      const docRef = doc(db, "experts", currentExpert.id);
      await deleteDoc(docRef);
      toast({
        title: "Profile Deleted",
        description: "Your expert profile has been permanently removed."
      });
      onBack();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Deletion Failed",
        description: error?.message || "Failed to delete expert profile."
      });
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db || !currentExpert) return;
    setIsUpdating(true);
    try {
      const docRef = doc(db, "experts", currentExpert.id);
      await updateDoc(docRef, {
        name: name,
        experience: Number(experience),
        fee: Number(fee),
        phone: countryCode + localPhone.trim().replace(/\D/g, ''),
        specialization: specialization,
        tags: selectedTags.length > 0 ? selectedTags : [specialization]
      });
      toast({
        title: "Profile Updated",
        description: "Expert profile details updated successfully."
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Update failed",
        description: error?.message || "Failed to update profile values."
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const formattedTime = (timestamp: any) => {
    if (!timestamp) return "";
    try {
      const date = timestamp.toDate();
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return "";
    }
  };

  if (!currentExpert) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white">
        <Loader2 className="w-10 h-10 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-full bg-slate-50 min-h-0 w-full overflow-hidden">
      
      {/* Mobile Sub-Tabs Navigation */}
      <div className="flex md:hidden bg-white px-4 py-2 border-b shrink-0 gap-2 w-full">
        <Button 
          size="sm" 
          variant={dashboardTab === 'chats' ? 'default' : 'outline'}
          onClick={() => setDashboardTab('chats')}
          className={cn(
            "flex-1 text-[11px] h-8 font-semibold rounded-lg shadow-sm transition-all",
            dashboardTab === 'chats' ? "bg-slate-900 text-white" : "text-slate-600 bg-white"
          )}
        >
          Consultations ({activeChats.length})
        </Button>
        <Button 
          size="sm" 
          variant={dashboardTab === 'profile' ? 'default' : 'outline'}
          onClick={() => setDashboardTab('profile')}
          className={cn(
            "flex-1 text-[11px] h-8 font-semibold rounded-lg shadow-sm transition-all",
            dashboardTab === 'profile' ? "bg-slate-900 text-white" : "text-slate-600 bg-white"
          )}
        >
          My Profile Settings
        </Button>
      </div>

      {/* Profile Settings Left Column (Sidebar on Desktop) */}
      <div className={cn(
        "w-full md:w-80 border-r bg-white p-4 sm:p-6 flex flex-col shrink-0 overflow-y-auto min-h-0",
        dashboardTab === 'profile' ? 'flex' : 'hidden md:flex'
      )}>
        <div className="text-center mb-5 shrink-0">
          <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto border-2 border-slate-100 shadow-md mb-2">
            <AvatarImage src={currentExpert.photo} />
            <AvatarFallback>{currentExpert.name[0]}</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center justify-center gap-1">
            {currentExpert.name}
            <Check className="w-3.5 h-3.5 text-emerald-500 font-bold bg-emerald-50 border rounded-full shrink-0" />
          </h3>
          <p className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-0.5">{currentExpert.role}</p>
        </div>

        {/* Status indicator switch */}
        <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl mb-5 flex items-center justify-between shadow-sm shrink-0">
          <div>
            <p className="text-[11px] font-bold text-slate-800">My consulting status</p>
            <p className="text-[9px] text-slate-500 mt-0.5">Toggle to show in search</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn(
              "text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider",
              status ? "text-green-600 bg-green-50" : "text-slate-500 bg-slate-100"
            )}>
              {status ? 'Online' : 'Offline'}
            </span>
            <Switch 
              checked={status} 
              onCheckedChange={handleToggleStatus} 
            />
          </div>
        </div>

        {/* Edit profile form */}
        <form onSubmit={handleUpdateProfile} className="space-y-4 pb-4">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Profile Edit</h4>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-600">Display Name</label>
            <Input 
              type="text" 
              required
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="text-xs h-9 border-slate-200 bg-slate-50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-600">Experience (Years)</label>
            <Input 
              type="number" 
              required
              min="1"
              value={experience} 
              onChange={e => setExperience(e.target.value)} 
              className="text-xs h-9 border-slate-200 bg-slate-50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-600">Consultation Fee (₹/hr)</label>
            <Input 
              type="number" 
              min="0" 
              value={fee} 
              onChange={e => setFee(e.target.value)} 
              className="text-xs h-9 border-slate-200 bg-slate-50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-600 block">WhatsApp / Phone Number</label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[110px] text-xs h-9 border-slate-200 shrink-0 bg-slate-50">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent className="bg-white text-xs max-h-56">
                  {COUNTRY_CODES.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.code} ({item.country.split(' (')[0]})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input 
                type="tel" 
                value={localPhone} 
                onChange={e => setLocalPhone(e.target.value.replace(/\D/g, ''))} 
                placeholder="9999999999"
                className="text-xs h-9 border-slate-200 bg-slate-50 flex-1"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-600">Specialization</label>
            <Select value={specialization} onValueChange={setSpecialization}>
              <SelectTrigger className="text-xs h-9 border-slate-200 bg-slate-50">
                <SelectValue placeholder="Select Domain" />
              </SelectTrigger>
              <SelectContent className="bg-white text-xs">
                <SelectItem value="Dairy Technology">Dairy Technology</SelectItem>
                <SelectItem value="Food Safety & Quality">Food Safety & Quality</SelectItem>
                <SelectItem value="Food Processing">Food Processing</SelectItem>
                <SelectItem value="Milk Procurement">Milk Procurement</SelectItem>
                <SelectItem value="Lab Analysis">Lab Analysis & Equipment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-600 block">Specialist Tags</label>
            
            {/* Selected Tags list */}
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-1 p-1.5 bg-slate-50 border border-dashed rounded-lg min-h-9 items-center">
                {selectedTags.map(tag => (
                  <Badge key={tag} className="bg-indigo-600 hover:bg-indigo-700 text-white text-[9px] flex items-center gap-1 py-0.5 px-1.5">
                    {tag}
                    <X className="w-2.5 h-2.5 cursor-pointer shrink-0" onClick={() => handleToggleTag(tag)} />
                  </Badge>
                ))}
              </div>
            )}

            {/* Preset tags wrap */}
            <div className="border border-slate-100 rounded-lg p-2.5 bg-slate-50/50">
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Popular Tags (Click to toggle)</p>
              <div className="flex flex-wrap gap-1 max-h-28 overflow-y-auto pr-1">
                {PRESET_SPECIALIST_TAGS.map(tag => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleToggleTag(tag)}
                      className={cn(
                        "text-[9px] px-2 py-0.5 rounded border transition-all font-medium",
                        isSelected 
                          ? "bg-indigo-50 border-indigo-200 text-indigo-700 shadow-sm" 
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      )}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom tag input */}
            <div className="flex gap-1.5">
              <Input 
                value={customTagInput} 
                onChange={e => setCustomTagInput(e.target.value)} 
                placeholder="Custom tag" 
                className="text-xs h-8 border-slate-200 flex-1 bg-white"
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddCustomTag();
                  }
                }}
              />
              <Button 
                type="button" 
                onClick={handleAddCustomTag} 
                className="bg-slate-900 hover:bg-blue-600 text-white text-[10px] h-8 px-2 font-semibold"
              >
                Add
              </Button>
            </div>
          </div>

          <Button type="submit" disabled={isUpdating} className="w-full text-xs h-9 bg-slate-900 hover:bg-blue-600 font-semibold transition-colors">
            {isUpdating ? <Loader2 className="w-3.5 h-3.5 animate-spin mx-auto" /> : 'Save Profile Changes'}
          </Button>

          {/* Delete Profile Segment */}
          <div className="border-t border-slate-200 mt-6 pt-5">
            {!showDeleteConfirm ? (
              <Button 
                type="button" 
                variant="destructive" 
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full text-xs h-9 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 font-semibold"
              >
                Delete Expert Profile
              </Button>
            ) : (
              <div className="bg-red-50 border border-red-100 p-3 rounded-xl space-y-2">
                <p className="text-[10px] font-bold text-red-700">Are you absolutely sure?</p>
                <p className="text-[9px] text-red-600">This will permanently delete your consultation profile and you will no longer appear in the expert directory.</p>
                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 text-[10px] h-7 border-slate-200 bg-white"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="button" 
                    size="sm" 
                    variant="destructive" 
                    disabled={isDeleting}
                    onClick={handleDeleteProfile}
                    className="flex-1 text-[10px] h-7 bg-red-600 text-white font-semibold"
                  >
                    {isDeleting ? 'Deleting...' : 'Yes, Delete'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Consultations List Column (Right Column) */}
      <div className={cn(
        "flex-1 p-4 sm:p-6 flex flex-col min-h-0",
        dashboardTab === 'chats' ? 'flex' : 'hidden md:flex'
      )}>
        <div className="mb-3 shrink-0 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-800">Client Consultations</h2>
            <p className="text-[10px] sm:text-xs text-slate-500">Real-time chats and requests initiated by app users</p>
          </div>
          <Badge className="bg-blue-600 hover:bg-blue-700 font-semibold text-[10px] sm:text-xs">{activeChats.length} Requests</Badge>
        </div>

        <ScrollArea className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm min-h-0">
          <div className="p-3 sm:p-4 space-y-3">
            {activeChats.length === 0 ? (
              <div className="text-center py-12 sm:py-16 text-slate-400 flex flex-col items-center">
                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300 mb-2" />
                <p className="text-xs sm:text-sm font-semibold">No active requests yet</p>
                <p className="text-[10px] max-w-xs mt-1 leading-normal">Once a user clicks 'Chat Now' on your public expert profile, they will show up here in real-time.</p>
              </div>
            ) : (
              activeChats.map((chat) => (
                <div 
                  key={chat.id} 
                  className="flex items-center justify-between border-slate-100 border p-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 cursor-pointer"
                  onClick={() => onOpenChat(chat)}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border border-slate-200 shrink-0">
                      <AvatarFallback className="bg-indigo-50 text-indigo-700 font-bold text-xs sm:text-sm">
                        {chat.userName.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">{chat.userName}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 truncate mt-0.5 max-w-[120px] sm:max-w-xs md:max-w-md">
                        {chat.lastMessage}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1.5 shrink-0 ml-4">
                    <span className="text-[8px] sm:text-[9px] text-slate-400 font-medium">
                      {formattedTime(chat.lastMessageTime)}
                    </span>
                    <Button size="sm" className="h-6 sm:h-7 text-[10px] sm:text-xs bg-slate-900 hover:bg-blue-600 font-semibold px-2.5 sm:px-3 rounded-lg shadow-sm">
                      Reply
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>

    </div>
  );
}

// --- EXPERT CHAT VIEW (For replying to a client) ---
function ExpertChatView({ chat, onBack }: { chat: ChatRoom, onBack: () => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<FirestoreMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const db = useMemo(() => {
    try {
      const { firestore } = initializeFirebase();
      return firestore;
    } catch {
      return null;
    }
  }, []);

  // Listen to messages of the chat in real-time
  useEffect(() => {
    if (!db || !chat.id || !user) return;
    const messagesCol = collection(db, "chats", chat.id, "messages");
    const q = query(messagesCol, orderBy("timestamp", "asc"));
    
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs: FirestoreMessage[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        msgs.push({
          id: docSnap.id,
          senderId: data.senderId,
          senderName: data.senderName,
          text: data.text,
          timestamp: data.timestamp
        });
      });
      setMessages(msgs);
      
      // Auto scroll to bottom
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 100);
    }, (error) => {
      console.error("Error loading chat messages:", error);
    });

    return () => unsub();
  }, [db, chat.id, user]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !db || !user) return;
    
    setIsSending(true);
    const textToSend = input.trim();
    setInput("");

    try {
      const messagesCol = collection(db, "chats", chat.id, "messages");
      await addDoc(messagesCol, {
        senderId: user.uid,
        senderName: user.displayName || "Expert",
        text: textToSend,
        timestamp: serverTimestamp()
      });

      const chatDocRef = doc(db, "chats", chat.id);
      await updateDoc(chatDocRef, {
        lastMessage: textToSend,
        lastMessageTime: serverTimestamp()
      });

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Message failed",
        description: error?.message || "Failed to send message."
      });
    } finally {
      setIsSending(false);
    }
  };

  const formattedTime = (timestamp: any) => {
    if (!timestamp) return "Sending...";
    try {
      const date = timestamp.toDate();
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return "";
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 min-h-0">
      <header className="bg-white px-4 py-3 border-b flex items-center justify-between shadow-sm z-10 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-slate-500 hover:text-slate-800 -ml-1 h-8 w-8">
            <ArrowLeft className="w-4.5 h-4.5" />
          </Button>
          <Avatar className="w-9 h-9 border border-slate-200 shrink-0">
            <AvatarFallback className="bg-indigo-50 text-indigo-700 font-bold text-xs">
              {chat.userName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h3 className="font-bold text-xs sm:text-sm text-slate-800 leading-tight truncate">Consultation: {chat.userName}</h3>
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Real-time consulting session</p>
          </div>
        </div>
      </header>

      <ScrollArea className="flex-1 p-3 sm:p-4 min-h-0" viewportRef={scrollRef}>
        <div className="flex flex-col gap-3 max-w-3xl mx-auto pb-4">
          <div className="text-center my-1">
            <span className="text-[8px] sm:text-[9px] font-semibold text-slate-400 bg-slate-200/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Real-time In-App Consult
            </span>
          </div>

          {messages.map((msg) => {
            const isMe = msg.senderId === user?.uid;
            return (
              <div 
                key={msg.id} 
                className={cn(
                  "flex gap-2 max-w-[85%] md:max-w-[75%]",
                  isMe ? "self-end flex-row-reverse" : "self-start"
                )}
              >
                <Avatar className="w-7.5 h-7.5 shrink-0 mt-0.5 border">
                  {isMe ? (
                    <AvatarFallback className="bg-slate-800 text-white text-[9px] font-bold">Me</AvatarFallback>
                  ) : (
                    <AvatarFallback className="bg-indigo-50 text-indigo-700 font-bold text-[9px]">
                      {chat.userName.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div className={cn(
                  "relative p-2.5 rounded-2xl text-[11px] sm:text-xs shadow-sm leading-relaxed",
                  isMe 
                    ? "bg-slate-900 text-white rounded-tr-none" 
                    : "bg-white text-slate-800 border border-slate-100 rounded-tl-none"
                )}>
                  <p>{msg.text}</p>
                  <span className={cn(
                    "text-[8px] sm:text-[9px] block text-right mt-1 opacity-70",
                    isMe ? "text-slate-300" : "text-slate-400"
                  )}>
                    {formattedTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <form 
        onSubmit={handleSendMessage}
        className="bg-white p-3 sm:p-4 border-t flex gap-2 items-center shrink-0"
      >
        <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Reply to ${chat.userName}...`}
          className="min-h-[36px] h-9 bg-slate-50 border-slate-200 focus-visible:ring-slate-900 rounded-full px-4 text-xs"
          disabled={isSending}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isSending || !input.trim()}
          className="w-9 h-9 rounded-full bg-slate-900 hover:bg-blue-600 shrink-0 shadow-md transition-colors"
        >
          {isSending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
        </Button>
      </form>
    </div>
  );
}
