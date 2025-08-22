
"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth, type UserProfile } from "@/context/auth-context";
import { useSubscription, type SubscriptionPlan } from "@/context/subscription-context";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User as UserIcon, Mail, Cake, VenetianMask, Crown, CalendarClock, ArrowLeft, Edit, Check, Camera, Settings, ChevronRight, LogOut, Bell } from 'lucide-react';
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { SubscriptionModal } from "@/components/subscription-modal";
import { useToast } from "@/hooks/use-toast";

const planNames: { [key: string]: string } = {
    '7-days': '7-Day Pass',
    '1-month': '1-Month Plan',
    '6-months': '6-Month Plan',
    'yearly': 'Yearly Plan',
    'lifetime': 'Lifetime Plan',
};

const ProfileRow = ({ icon: Icon, label, value, loading, onClick, hasChevron = false }: { icon: React.ElementType, label: string, value: React.ReactNode, loading?: boolean, onClick?: () => void, hasChevron?: boolean }) => {
    const content = (
        <>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                    <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="font-semibold text-gray-700">{label}</p>
                    {loading ? <Skeleton className="h-4 w-24 mt-1" /> : <p className="text-sm text-muted-foreground">{value}</p>}
                </div>
            </div>
            {hasChevron && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
        </>
    );

    if (onClick) {
        return (
            <button onClick={onClick} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                {content}
            </button>
        );
    }

    return <div className="w-full flex items-center justify-between p-4">{content}</div>;
};

export default function ProfilePage() {
    const { user, userProfile, setUserData, loading: authLoading, logout } = useAuth();
    const { isPro, subscription } = useSubscription();
    const { language, setLanguage } = useLanguage();
    const router = useRouter();
    const { toast } = useToast();
    const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [newName, setNewName] = useState(userProfile?.name || "");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!authLoading && !user) {
          router.replace("/login");
        }
        if (userProfile) {
            setNewName(userProfile.name || "");
        }
    }, [authLoading, user, userProfile, router]);
    
    const handleSaveName = async () => {
        if (user && newName.trim()) {
            await setUserData(user, { name: newName.trim(), displayName: newName.trim() });
            setIsEditingName(false);
            toast({ title: "Name Updated", description: "Your new name has been saved." });
        } else {
            toast({ variant: "destructive", title: "Error", description: "Name cannot be empty."});
        }
    };
    
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && user) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64String = reader.result as string;
                await setUserData(user, { photoURL: base64String });
                toast({ title: "Profile Photo Updated", description: "Your new photo has been saved." });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang as 'en' | 'hi');
        toast({
            title: "Language Updated",
            description: `Language has been set to ${lang === 'hi' ? 'Hinglish' : 'English'}.`,
        });
    };
    
    const handleLogout = async () => {
        await logout();
        router.push('/login');
        toast({ title: "Logged Out", description: "You have been logged out successfully." });
    }

    if (authLoading || !user || !userProfile) {
        return (
             <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                    <p className="mt-4 text-muted-foreground">Loading Profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-primary text-primary-foreground p-4 shadow-md">
                 <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.push('/')} className="text-white hover:bg-white/20">
                        <ArrowLeft />
                    </Button>
                    <h1 className="text-xl font-bold font-headline">My Profile</h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-4 sm:p-8">
                {/* User Info Card */}
                <Card className="shadow-lg mb-8">
                    <CardContent className="p-6 flex items-center gap-6">
                        <div className="relative group">
                            <Avatar className="w-20 h-20 border-4 border-primary/20 shadow-md">
                                <AvatarImage src={userProfile?.photoURL ?? undefined} alt={userProfile?.name ?? 'User'} />
                                <AvatarFallback><UserIcon className="w-10 h-10" /></AvatarFallback>
                            </Avatar>
                             <button
                                className="absolute bottom-0 right-0 h-7 w-7 bg-background text-foreground rounded-full flex items-center justify-center border shadow-md hover:bg-muted"
                                onClick={() => fileInputRef.current?.click()}
                                aria-label="Change profile picture"
                            >
                                <Camera className="w-4 h-4" />
                            </button>
                            <input
                                type="file" ref={fileInputRef} onChange={handleFileChange}
                                className="hidden" accept="image/png, image/jpeg"
                            />
                        </div>
                        <div className="flex-1">
                             {isEditingName ? (
                                <div className="flex items-center gap-2">
                                    <Input
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className="h-9"
                                        autoFocus
                                    />
                                    <Button size="icon" className="h-9 w-9 shrink-0" onClick={handleSaveName}><Check className="w-4 h-4" /></Button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <h2 className="text-2xl font-bold text-gray-800 font-headline">{userProfile.name}</h2>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground" onClick={() => setIsEditingName(true)}><Edit className="w-4 h-4" /></Button>
                                </div>
                            )}
                            <p className="text-muted-foreground">{userProfile.email}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Profile Details Card */}
                <Card className="shadow-lg mb-8">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 divide-y">
                       <ProfileRow icon={Cake} label="Age" value={userProfile.age} loading={authLoading} />
                       <ProfileRow icon={VenetianMask} label="Gender" value={userProfile.gender} loading={authLoading} />
                    </CardContent>
                </Card>
                
                 {/* Subscription Card */}
                <Card className="shadow-lg mb-8">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Subscription</CardTitle>
                    </CardHeader>
                     <CardContent className="p-0 divide-y">
                       {isPro && subscription ? (
                           <>
                                <ProfileRow icon={Crown} label="Current Plan" value={planNames[subscription.plan]} loading={authLoading} />
                                <ProfileRow 
                                    icon={CalendarClock} 
                                    label="Expires On" 
                                    value={subscription.expiryDate ? format(new Date(subscription.expiryDate), 'PPP') : 'Never'} 
                                    loading={authLoading}
                                />
                                <ProfileRow 
                                    icon={Settings} 
                                    label="Manage Subscription" 
                                    value="View or change your plan" 
                                    onClick={() => setIsSubscriptionModalOpen(true)}
                                    hasChevron={true}
                                />
                           </>
                       ) : (
                            <ProfileRow 
                                icon={Crown} 
                                label="Upgrade to Pro" 
                                value="Unlock all features" 
                                onClick={() => setIsSubscriptionModalOpen(true)}
                                hasChevron={true}
                            />
                       )}
                    </CardContent>
                </Card>

                {/* Settings Card */}
                 <Card className="shadow-lg mb-8">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Settings</CardTitle>
                    </CardHeader>
                     <CardContent className="p-0 divide-y">
                        <div className="w-full flex items-center justify-between p-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <Bell className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">App Language</p>
                                    <p className="text-sm text-muted-foreground">Change the language for all guides</p>
                                </div>
                            </div>
                            <Select value={language} onValueChange={handleLanguageChange}>
                                <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="hi">Hinglish</SelectItem>
                                    <SelectItem value="en">English</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <ProfileRow 
                            icon={LogOut} 
                            label="Logout" 
                            value="Logout from your account"
                            onClick={handleLogout}
                            hasChevron={true}
                        />
                    </CardContent>
                </Card>

            </main>
            <SubscriptionModal isOpen={isSubscriptionModalOpen} setIsOpen={setIsSubscriptionModalOpen} />
        </div>
    );
}
