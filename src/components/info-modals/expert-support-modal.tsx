
"use client";

import { useState, useTransition, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Lightbulb, UserPlus, Mic, Bot, StopCircle, ArrowLeft, Send } from 'lucide-react';

import { askExpert, gyanAI, refineQuestion, summarizeTopic, textToSpeech } from '@/app/actions';

// Mock data, can be fetched from a DB
const initialExperts = [
    { id: '1', name: "Dr. Ramesh Kumar", experience: 15, specialization: "Dairy Technology", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=R", fee: 50, type: 'ai' },
    { id: '2', name: "Sunita Sharma", experience: 12, specialization: "Food Safety and Quality", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=S", fee: 50, type: 'ai' },
    { id: '3', name: "Anil Singh", experience: 20, specialization: "Food Processing", photo: "https://placehold.co/150x150/E2E8F0/4A5568?text=A", fee: 75, type: 'ai' }
];

// Main Component
export function ExpertSupportModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
    const [activePage, setActivePage] = useState('home'); // 'home', 'gyan-ai', 'register'

    const renderPage = () => {
        switch (activePage) {
            case 'gyan-ai': return <GyanAIPage setActivePage={setActivePage} />;
            case 'register': return <RegisterExpertPage setActivePage={setActivePage} />;
            case 'home':
            default: return <HomePage setActivePage={setActivePage} />;
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
function HomePage({ setActivePage }: { setActivePage: (page: string) => void }) {
    const [expertType, setExpertType] = useState<'ai' | 'real'>('ai');
    const [experts, setExperts] = useState(initialExperts);
    const [selectedExpertId, setSelectedExpertId] = useState('');
    const [question, setQuestion] = useState('');
    const [userName, setUserName] = useState('');
    const [language, setLanguage] = useState('English');
    const [isLoading, startTransition] = useTransition();
    const [isRefining, startRefineTransition] = useTransition();
    const [response, setResponse] = useState<{title: string, message: string, textToSpeak: string} | null>(null);
    const { toast } = useToast();

    const filteredExperts = useMemo(() => experts.filter(e => e.type === expertType), [experts, expertType]);

    const handleAsk = () => {
        if (!selectedExpertId || !question || !userName) {
            toast({ variant: 'destructive', title: "Please fill all fields." });
            return;
        }
        startTransition(async () => {
            const expert = experts.find(e => e.id === selectedExpertId);
            if (!expert) return;

            if (expert.type === 'ai') {
                try {
                    const result = await askExpert({
                        expertName: expert.name,
                        experience: expert.experience,
                        specialization: expert.specialization,
                        question: question,
                        language: language
                    });
                    setResponse({ title: `Response from ${expert.name}:`, message: result.answer.replace(/\n/g, '<br />'), textToSpeak: result.answer });
                } catch (e) {
                    setResponse({ title: 'Error', message: 'Could not get response from AI.', textToSpeak: 'Error' });
                }
            } else {
                setResponse({ title: 'Question Sent!', message: `Your question has been sent to ${expert.name}. You will be notified via email.`, textToSpeak: `Your question has been sent to ${expert.name}` });
            }
        });
    };

    const handleRefine = () => {
        if (!question) {
            toast({ variant: 'destructive', title: "Please write a question first." });
            return;
        }
        startRefineTransition(async () => {
            const refinedQ = await refineQuestion({ question });
            setQuestion(refinedQ.refinedQuestion);
        });
    };

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
                   {filteredExperts.map(expert => (
                       <div key={expert.id} className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
                           <img className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200" src={expert.photo} alt={expert.name} />
                           <h4 className="text-lg font-semibold text-gray-900">{expert.name}</h4>
                           <p className="text-sm text-gray-600 mt-1">{expert.experience}+ years in {expert.specialization}</p>
                           <div className="mt-3 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">Fee: ₹{expert.fee}/hour</div>
                       </div>
                   ))}
                </div>

                <div className="bg-card p-6 rounded-xl shadow-lg max-w-2xl mx-auto border">
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Ask an Expert</h3>
                     <div className="space-y-4">
                        <Input placeholder="Your Name" value={userName} onChange={e => setUserName(e.target.value)} />
                        <Select onValueChange={setSelectedExpertId} value={selectedExpertId}>
                            <SelectTrigger><SelectValue placeholder={`Choose a ${expertType} expert`} /></SelectTrigger>
                            <SelectContent>
                                {filteredExperts.map(expert => <SelectItem key={expert.id} value={expert.id}>{expert.name} ({expert.specialization})</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Textarea placeholder="Your Question..." value={question} onChange={e => setQuestion(e.target.value)} rows={5} />
                        <div className="flex justify-end">
                            <Button variant="link" onClick={handleRefine} disabled={isRefining}>
                                {isRefining ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2" />} Refine Question
                            </Button>
                        </div>
                        {expertType === 'ai' && (
                            <Select onValueChange={setLanguage} defaultValue="English">
                                <SelectTrigger><SelectValue placeholder="Response Language" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Hinglish">Hinglish</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                        <Button onClick={handleAsk} disabled={isLoading} className="w-full bg-green-600 hover:bg-green-700">
                           {isLoading ? <Loader2 className="animate-spin" /> : <Send />} Ask Now
                        </Button>
                     </div>
                </div>
                 <div className="text-center mt-8">
                    <Button variant="secondary" onClick={() => setActivePage('gyan-ai')}>Go to Gyan AI <Lightbulb className="ml-2"/></Button>
                    <Button variant="secondary" onClick={() => setActivePage('register')} className="ml-4">Become an Expert <UserPlus className="ml-2" /></Button>
                </div>
            </div>
            <ResponseModal response={response} setResponse={setResponse} />
        </ScrollArea>
    );
}

function GyanAIPage({ setActivePage }: { setActivePage: (page: string) => void }) {
    const [topic, setTopic] = useState("Dairy Technology");
    const [question, setQuestion] = useState('');
    const [language, setLanguage] = useState('English');
    const [isLoading, startTransition] = useTransition();
    const [response, setResponse] = useState<{ title: string; message: string; textToSpeak: string } | null>(null);

    const handleAskGyan = () => {
        if (!question) {
            alert("Please enter a question.");
            return;
        }
        startTransition(async () => {
            setResponse({ title: 'Gyan AI is thinking...', message: '<div class="flex justify-center items-center p-8"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>', textToSpeak: '' });
            try {
                const result = await gyanAI({ topic, question, language });
                setResponse({ title: "Gyan AI's Response:", message: result.answer.replace(/\n/g, '<br />'), textToSpeak: result.answer });
            } catch (e) {
                setResponse({ title: 'Error', message: 'Could not get response from Gyan AI.', textToSpeak: 'Error' });
            }
        });
    };

    return (
        <ScrollArea className="h-full">
            <div className="p-4">
                <Button variant="ghost" onClick={() => setActivePage('home')}><ArrowLeft className="mr-2" /> Back to Home</Button>
                <div className="text-center my-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Gyan AI - Your AI Specialist</h2>
                    <p className="text-md text-gray-600">Instant, scientific information on any topic.</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-lg max-w-3xl mx-auto border">
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
                        <Textarea placeholder="Your detailed question..." value={question} onChange={e => setQuestion(e.target.value)} rows={6} />
                        <Select onValueChange={setLanguage} defaultValue="English">
                            <SelectTrigger><SelectValue placeholder="Response Language" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Hinglish">Hinglish</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button onClick={handleAskGyan} disabled={isLoading} className="w-full">
                           {isLoading ? <Loader2 className="animate-spin" /> : <Bot />} Get Answer
                        </Button>
                    </div>
                </div>
                {response && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border max-w-3xl mx-auto">
                        <ResponseModal response={response} setResponse={setResponse} isOpen={!!response} />
                    </div>
                )}
            </div>
        </ScrollArea>
    );
}

function RegisterExpertPage({ setActivePage }: { setActivePage: (page: string) => void }) {
    return (
        <ScrollArea className="h-full">
            <div className="p-4">
                <Button variant="ghost" onClick={() => setActivePage('home')}><ArrowLeft className="mr-2" /> Back to Home</Button>
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

// Modal for showing responses
function ResponseModal({ response, setResponse, isOpen }: { response: {title: string, message: string, textToSpeak: string} | null; setResponse: (r: any) => void; isOpen?: boolean }) {
    const [isSpeaking, startSpeakTransition] = useTransition();
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    
    const handleSpeak = () => {
        if (audio && !audio.paused) {
            audio.pause();
            setAudio(null);
            return;
        }

        if (response?.textToSpeak) {
            startSpeakTransition(async () => {
                const result = await textToSpeech({ text: response.textToSpeak });
                if (result.media) {
                    const newAudio = new Audio(result.media);
                    setAudio(newAudio);
                    newAudio.play();
                    newAudio.onended = () => setAudio(null);
                }
            });
        }
    };

    return (
        <Dialog open={!!response || isOpen} onOpenChange={(open) => !open && setResponse(null)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{response?.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[50vh]">
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: response?.message || '' }} />
                </ScrollArea>
                <DialogFooter className="sm:justify-between items-center gap-2">
                     <Button variant="outline" onClick={handleSpeak} disabled={isSpeaking || !response?.textToSpeak}>
                        {audio && !audio.paused ? <StopCircle /> : <Mic />}
                        {isSpeaking ? <Loader2 className="animate-spin ml-2"/> : (audio && !audio.paused ? 'Stop' : 'Listen')}
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" onClick={() => audio?.pause()}>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
