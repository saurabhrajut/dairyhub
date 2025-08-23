"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@/context/user-context';
import { SubscriptionModal } from '@/components/subscription-modal';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/context/language-context';
import { useToast } from '@/hooks/use-toast';
import { Info, Mail, MessageCircle } from 'lucide-react';

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);

const proFeatures = [
    "Unlock all premium calculators & guides",
    "Full access to Sarathi AI Chatbot",
    "Access to exclusive industry reports",
    "Save and export your calculations",
    "Ad-free experience",
];

export default function ProfilePage() {
    const { user, setUser } = useUser();
    const { language, setLanguage } = useLanguage();
    const { toast } = useToast();

    const [isMounted, setIsMounted] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [tempName, setTempName] = useState(user.name);
    const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setTempName(user.name);
    }, [user.name]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && typeof e.target.result === 'string') {
                    setUser({ ...user, profilePic: e.target.result });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    
    const handleSaveName = () => {
        if (tempName.trim()) {
            setUser({ ...user, name: tempName.trim() });
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

    const getCardClass = (delay: number) => {
        const baseClass = "card-enter";
        const activeClass = isMounted ? "card-enter-active" : "";
        return `${baseClass} ${activeClass}`;
    };

    return (
        <>
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-lg">
            {/* Header Section with Gradient */}
            <div className="relative bg-gradient-to-br from-cyan-400 to-blue-600 h-60 p-6 rounded-b-3xl text-white">
                <Link href="/" className="absolute top-4 left-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                
                <div className="flex flex-col items-center justify-center h-full">
                    {/* Profile Picture */}
                    <div className="relative">
                        <Image
                            id="profilePic"
                            src={user.profilePic}
                            alt="Profile Picture"
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                        <label htmlFor="fileInput" className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition-colors">
                           <EditIcon />
                        </label>
                        <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
                    </div>
                </div>
            </div>

            {/* User Name and Email Section */}
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
                            <h1 id="userName" className="text-2xl font-bold text-gray-800">{user.name}</h1>
                            <button onClick={() => { setIsEditingName(true); setTempName(user.name); }} className="text-gray-500 hover:text-blue-600">
                               <EditIcon />
                            </button>
                        </div>
                    )}
                </div>
                 <p className="text-gray-500 text-sm">{user.email}</p>
            </div>

            <div className="px-6 pb-6 space-y-6">
                {/* Subscription Card */}
                <div className={`bg-gradient-to-r from-green-400 to-teal-500 p-5 rounded-xl text-white shadow-lg ${getCardClass(0)}`}>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm font-medium opacity-80">Subscription Plan</p>
                            <p className="text-2xl font-bold">Pro Plan</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium opacity-80">Expires on</p>
                            <p className="font-semibold">25 Dec 2024</p>
                        </div>
                    </div>
                     <div className="mt-4 pt-4 border-t border-white/20">
                        <h4 className="text-sm font-semibold mb-2">Pro Features:</h4>
                        <ul className="space-y-1 text-xs">
                          {proFeatures.slice(0,2).map(feature => <li key={feature} className="flex items-center gap-2"><Info size={14}/>{feature}</li>)}
                        </ul>
                    </div>
                    <div className="mt-4 text-center">
                        <Button onClick={() => setIsSubscriptionModalOpen(true)} className="bg-white text-teal-600 font-bold py-2 px-6 rounded-full hover:bg-teal-50 transition-colors">Manage Plan</Button>
                    </div>
                </div>

                {/* Details Card */}
                <div className={`bg-gray-50 p-5 rounded-xl border border-gray-200 ${getCardClass(100)}`} >
                    <h3 className="font-bold text-gray-700 mb-4">Aapki Jaankari</h3>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a1.19 1.19 0 00-.54 1.634l3.938 5.906a1.19 1.19 0 001.634-.54l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <span className="ml-4 text-gray-600">+91 9111905734</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="ml-4 text-gray-600">123, Dairy Colony, Jaipur, Rajasthan</span>
                        </div>
                    </div>
                </div>

                {/* Menu Options */}
                <div className={`bg-gray-50 p-3 rounded-xl border border-gray-200 ${getCardClass(200)}`}>
                    <ul className="divide-y divide-gray-200">
                        {/* Settings */}
                         <Dialog>
                            <DialogTrigger asChild>
                                <li className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                                    <span className="text-gray-700 font-medium">Settings</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </li>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>App Settings</DialogTitle>
                                    <DialogDescription>Change your app preferences here.</DialogDescription>
                                </DialogHeader>
                                <div className="py-4">
                                    <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">App Language</label>
                                    <Select value={language} onValueChange={(value) => handleLanguageChange(value as 'en' | 'hi')}>
                                        <SelectTrigger id="language-select"><SelectValue/></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="hi">Hinglish</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </DialogContent>
                        </Dialog>
                        
                        {/* Help & Support */}
                        <Dialog>
                             <DialogTrigger asChild>
                                <li className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                                    <span className="text-gray-700 font-medium">Help & Support</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </li>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader><DialogTitle>Contact Support</DialogTitle></DialogHeader>
                                <div className="py-4 space-y-4">
                                     <a href="https://wa.me/919111905734" target="_blank" rel="noopener noreferrer" className="block">
                                        <Button className="w-full" variant="outline"><MessageCircle className="mr-2"/>WhatsApp</Button>
                                    </a>
                                     <a href="mailto:saurabhthakur8080@gmail.com" className="block">
                                        <Button className="w-full" variant="outline"><Mail className="mr-2"/>Email</Button>
                                    </a>
                                </div>
                            </DialogContent>
                        </Dialog>

                        {/* Logout */}
                        <li className="flex justify-between items-center p-3 hover:bg-red-50 rounded-lg cursor-pointer">
                            <span className="text-red-500 font-medium">Logout</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <SubscriptionModal isOpen={isSubscriptionModalOpen} setIsOpen={setIsSubscriptionModalOpen} />
        </>
    );
}
