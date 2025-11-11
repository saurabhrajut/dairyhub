
"use client";


import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/auth-context';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/context/language-context';
import { Heart, QrCode, Mail, MessageCircle, ChevronLeft, LogOut, Settings, HelpCircle, User, Loader2, Building2, ChevronRight, BookOpen, Droplet, Moon, Sun, Gift, Copy } from 'lucide-react';
import type { Department } from '@/context/auth-context';
import { useReadingMode } from '@/context/reading-mode-context';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';


const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);


const themes = [
  { name: 'default', label: 'Default', color: 'bg-gray-400', icon: Sun },
  { name: 'sepia', label: 'Sepia', color: 'bg-[#C6B8A3]', icon: BookOpen },
  { name: 'slate', label: 'Slate', color: 'bg-slate-600', icon: Moon },
  { name: 'paper', label: 'Paper', color: 'bg-[#F8F5E9]', icon: BookOpen },
  { name: 'mint', label: 'Mint', color: 'bg-emerald-200', icon: Droplet },
  { name: 'night', label: 'Night', color: 'bg-[#1E2024]', icon: Moon },
] as const;


export default function ProfilePage() {
    const { user, loading, logout, updateUserProfile, updateUserPhoto } = useAuth();
    const { language, setLanguage } = useLanguage();
    const { toast } = useToast();
    const router = useRouter();
    const { theme, setTheme, isEnabled, setIsEnabled } = useReadingMode();
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

    const [isEditingName, setIsEditingName] = useState(false);
    
    const [tempName, setTempName] = useState('');
    
    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        } else if (user) {
            setTempName(user.displayName || '');
        }
    }, [user, loading, router]);

    const handleCopyUpi = () => {
        const upiId = "911900573@ybl";
        navigator.clipboard.writeText(upiId);
        toast({
            title: "UPI ID Copied!",
            description: `${upiId} has been copied to your clipboard.`,
        });
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || user.isAnonymous) {
            toast({ variant: "destructive", title: "Action Not Allowed", description: "Guests cannot change their profile picture. Please sign up." });
            return;
        }
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            try {
                await updateUserPhoto(file);
                toast({ title: "Profile picture updated!" });
            } catch (error: any) {
                toast({ variant: "destructive", title: "Upload Failed", description: error.message });
            }
        }
    };
    
    const handleSaveName = async () => {
        if (!user || user.isAnonymous) {
            toast({ variant: "destructive", title: "Action Not Allowed", description: "Guests cannot change their name. Please sign up." });
            setIsEditingName(false);
            return;
        }
        if (tempName.trim() && tempName.trim() !== user.displayName) {
            try {
                await updateUserProfile({ displayName: tempName.trim() });
                setIsEditingName(false);
                toast({ title: "Name updated successfully!" });
            } catch (error: any) {
                toast({ variant: 'destructive', title: "Update failed", description: error.message });
            }
        } else {
            setIsEditingName(false);
        }
    }
    
    const handleLanguageChange = (lang: 'en' | 'hi') => {
        setLanguage(lang);
        toast({
            title: "Language Updated",
            description: `App language set to ${lang === 'hi' ? 'Hinglish' : 'English'}.`,
        });
    }


    const handleDepartmentChange = async (dept: Department) => {
        if (user && !user.isAnonymous) {
            try {
                await updateUserProfile({ department: dept });
                toast({
                    title: "Department Updated",
                    description: `Your access has been set to ${getDepartmentName(dept)}.`,
                });
            } catch (error: any) {
                toast({ variant: 'destructive', title: "Update Failed", description: error.message });
            }
        }
    };


    const handleLogout = async () => {
        await logout();
        router.push('/login');
    }


    const getCardClass = (delay: number) => {
        const baseClass = "card-enter";
        const activeClass = "card-enter-active";
        return `${baseClass} ${activeClass}`;
    };


    const getDepartmentName = (deptKey?: Department) => {
        if (!deptKey) return 'Not specified';
        const names: Record<Department, string> = {
            'process-access': 'Process Access',
            'production-access': 'Production Access',
            'quality-access': 'Quality Access',
            'all-control-access': 'All Control Access',
            'guest': 'Guest User'
        }
        return names[deptKey];
    }
    
    if (loading || !user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="animate-spin h-8 w-8" />
            </div>
        );
    }


    return (
        <>
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg">
            <div className="relative bg-gradient-to-b from-orange-500 via-white to-green-600 h-60 p-6 rounded-b-3xl">
                <Link href="/" className="absolute top-4 left-4 cursor-pointer">
                   <ChevronLeft className="h-6 w-6 text-gray-800"/>
                </Link>
                
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative">
                        <img
                            id="profilePic"
                            src={user.photoURL || 'https://placehold.co/128x128/E0E0E0/333?text=User'}
                            alt="Profile Picture"
                            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                         {!user.isAnonymous && (
                            <label htmlFor="fileInput" className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition-colors">
                               <EditIcon />
                            </label>
                         )}
                        <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
                    </div>
                </div>
            </div>


            <div className="text-center p-6 -mt-8">
                <div className="flex items-center justify-center space-x-2 min-h-[36px]">
                    {isEditingName ? (
                         <div className="flex items-center justify-center space-x-2">
                             <Input
                                type="text"
                                id="nameInput"
                                className="text-2xl font-bold text-gray-800 bg-gray-200 rounded-md px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
                                value={tempName}
                                onChange={(e) => setTempName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                                autoFocus
                            />
                            <Button onClick={handleSaveName} size="sm">Save</Button>
                         </div>
                    ) : (
                         <div className="flex items-center justify-center space-x-2">
                            <h1 id="userName" className="text-2xl font-bold text-gray-800">{user.displayName || ''}</h1>
                             {!user.isAnonymous && (
                                <button onClick={() => { setIsEditingName(true); setTempName(user.displayName || ''); }} className="text-gray-500 hover:text-blue-600">
                                   <EditIcon />
                                </button>
                             )}
                        </div>
                    )}
                </div>
                 <p className="text-gray-500 text-sm">{user.email}</p>
            </div>


            <div className="px-6 pb-6 space-y-6">
                <Dialog open={isDonationModalOpen} onOpenChange={setIsDonationModalOpen}>
                    <div className={`p-5 rounded-xl text-white shadow-lg bg-gradient-to-r from-pink-500 to-rose-500 ${getCardClass(0)}`}>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">Support Dairy Hub's Mission</h3>
                            <p className="text-sm mt-2 opacity-90">If you find this app helpful, your contribution keeps it running and growing!</p>
                            <DialogTrigger asChild>
                                <Button className="mt-4 bg-white text-rose-600 font-bold py-2 px-6 rounded-full hover:bg-rose-50 transition-colors animate-pulse">
                                    <Heart className="mr-2 h-4 w-4"/>
                                    Donate
                                </Button>
                            </DialogTrigger>
                        </div>
                    </div>
                     <DialogContent>
                        <DialogHeader>
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
                                    <Gift className="w-8 h-8 text-rose-500"/>
                                </div>
                            </div>
                            <DialogTitle className="text-2xl font-bold text-center">Support Dairy Hub</DialogTitle>
                            <DialogDescription className="text-center text-muted-foreground">
                                आपका समर्थन हमें सशक्त बनाता है और बेहतर बनने की प्रेरणा देता है।
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 text-center">
                            <p className="mb-4">Scan the QR code with any payment app to contribute.</p>
                            <div className="bg-white p-2 rounded-lg inline-block border-4 border-dashed border-rose-200">
                                <Image 
                                    src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_9565.jpg?alt=media&token=e56e6c1f-aeb5-4a6f-a2ec-f797e4060d5e" 
                                    alt="QR Code for Donation"
                                    width={192}
                                    height={192}
                                    className="w-48 h-48 rounded-md"
                                />
                            </div>
                             <div className="mt-6 bg-rose-50 p-3 rounded-lg border border-dashed border-rose-200">
                                <p className="text-sm text-gray-600">Or use UPI ID:</p>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                  <p className="font-mono text-lg text-rose-700 font-semibold">9119005734-2@axl</p>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500" onClick={handleCopyUpi}>
                                    <Copy className="h-4 w-4" />
                                  </Button>
                                </div>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-gray-800">हर योगदान मायने रखता है, चाहे वह कितना भी छोटा क्यों न हो।</p>
                            <p className="mt-1 text-sm text-rose-600 font-bold">Thank you for your support! 🙏</p>
                        </div>
                    </DialogContent>
                </Dialog>


                <div className={`bg-gray-50 p-5 rounded-xl border border-gray-200 ${getCardClass(100)}`} >
                    <h3 className="font-bold text-gray-700 mb-4">Your Information</h3>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg"><Mail className="h-5 w-5 text-blue-600"/></div>
                            <span className="ml-4 text-gray-600">{user.email}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-lg"><User className="h-5 w-5 text-green-600"/></div>
                            <span className="ml-4 text-gray-600 capitalize">{user.gender || 'Not specified'}</span>
                        </div>
                         <div className="flex items-center">
                            <div className="bg-purple-100 p-2 rounded-lg"><Building2 className="h-5 w-5 text-purple-600"/></div>
                            <span className="ml-4 text-gray-600 capitalize">{getDepartmentName(user.department)}</span>
                        </div>
                    </div>
                </div>


                <div className={`bg-gray-50 p-3 rounded-xl border border-gray-200 ${getCardClass(200)}`}>
                    <ul className="divide-y divide-gray-200">
                         <Dialog>
                            <DialogTrigger asChild>
                                <li className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                                    <span className="flex items-center gap-3 text-gray-700 font-medium"><Settings/>Settings</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </li>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>App Settings</DialogTitle>
                                    <DialogDescription>Change your app preferences here.</DialogDescription>
                                </DialogHeader>
                                <div className="py-4 space-y-6">
                                    <div>
                                        <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">App Language</label>
                                        <Select value={language} onValueChange={(value) => handleLanguageChange(value as 'en' | 'hi')}>
                                            <SelectTrigger id="language-select"><SelectValue/></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="hi">Hinglish</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    {!user.isAnonymous && (
                                        <div>
                                            <label htmlFor="department-select" className="block text-sm font-medium text-gray-700 mb-2">Your Department</label>
                                            <Select value={user.department} onValueChange={(value) => handleDepartmentChange(value as Department)}>
                                                <SelectTrigger id="department-select"><SelectValue placeholder="Select Department"/></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="process-access">Process Access</SelectItem>
                                                    <SelectItem value="production-access">Production Access</SelectItem>
                                                    <SelectItem value="quality-access">Quality Access</SelectItem>
                                                    <SelectItem value="all-control-access">All Control Access</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                     <div>
                                        <Label className="block text-sm font-medium text-gray-700 mb-2">Reading Mode</Label>
                                        <div className='flex items-center space-x-2 mb-4'>
                                          <Switch id="reading-mode-switch" checked={isEnabled} onCheckedChange={setIsEnabled} />
                                          <Label htmlFor="reading-mode-switch">Enable eye-friendly themes</Label>
                                        </div>
                                        {isEnabled && (
                                          <TooltipProvider>
                                            <div className="flex justify-around items-center p-2 bg-muted rounded-lg">
                                                {themes.map((t) => (
                                                <Tooltip key={t.name}>
                                                    <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className={cn(
                                                        "w-8 h-8 rounded-full",
                                                        theme === t.name ? 'ring-2 ring-primary ring-offset-2' : ''
                                                        )}
                                                        onClick={() => setTheme(t.name)}
                                                    >
                                                        <div className={cn("w-5 h-5 rounded-full border", t.color)} />
                                                    </Button>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="bottom">
                                                    <p>{t.label}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                                ))}
                                            </div>
                                          </TooltipProvider>
                                        )}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                        
                        <Dialog>
                             <DialogTrigger asChild>
                                <li className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                                    <span className="flex items-center gap-3 text-gray-700 font-medium"><HelpCircle/>Help & Support</span>
                                    <ChevronRight className="h-5 w-5 text-gray-400" />
                                </li>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader><DialogTitle>Contact Support</DialogTitle></DialogHeader>
                                <div className="py-4 space-y-4">
                                     <a href="https://wa.me/9119005734" target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full" variant="outline"><MessageCircle className="mr-2"/>WhatsApp</Button>
                                    </a>
                                     <a href="mailto:saurabhthakur8080@gmail.com" className="block">
                                        <Button className="w-full" variant="outline"><Mail className="mr-2"/>Email</Button>
                                    </a>
                                </div>
                            </DialogContent>
                        </Dialog>


                        <li onClick={handleLogout} className="flex justify-between items-center p-3 hover:bg-red-50 rounded-lg cursor-pointer">
                            <span className="flex items-center gap-3 text-red-500 font-medium"><LogOut/>Logout</span>
                            <ChevronRight className="h-5 w-5 text-red-500" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

    

    

    
