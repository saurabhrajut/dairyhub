
"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Star, User as UserIcon, Crown, ChevronDown, Mail, Cake, VenetianMask, CalendarClock } from "lucide-react";
import { SettingsPanel } from './settings-panel';
import { useRouter } from 'next/navigation';
import { SubscriptionModal } from './subscription-modal';
import { useAuth, type UserProfile } from '@/context/auth-context';
import type { User } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSubscription } from '@/context/subscription-context';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { format } from 'date-fns';

const planNames: { [key: string]: string } = {
    '7-days': '7-Day Pass',
    '1-month': '1-Month Plan',
    '6-months': '6-Month Plan',
    'yearly': 'Yearly Plan',
    'lifetime': 'Lifetime Plan',
};


export function Header({ user, userProfile }: { user: User, userProfile: UserProfile }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const router = useRouter();
    const { logout } = useAuth();
    const { isPro, subscription } = useSubscription();

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    }

    const ProfileDetail = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number | null | undefined }) => {
        if (!value) return null;
        return (
             <div className="flex items-center gap-3 text-sm">
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium text-muted-foreground">{label}:</span>
                <span className="text-foreground font-semibold">{value}</span>
            </div>
        )
    };


    return (
        <>
            <header className="mb-8">
                <Collapsible open={isHeaderOpen} onOpenChange={setIsHeaderOpen}>
                <Card className="glass-card transition-all">
                    <CardContent className="p-0">
                        <CollapsibleTrigger asChild>
                             <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer hover:bg-primary/5">
                                <div className="flex items-center gap-4">
                                     <Avatar className="w-12 h-12 border-2 border-primary/20">
                                        <AvatarImage src={userProfile.photoURL ?? undefined} alt={userProfile.name ?? 'User'} />
                                        <AvatarFallback><UserIcon /></AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">Welcome, {userProfile.name || "Friend"}! 👋</h1>
                                        <p className="text-sm text-gray-500">Ready to Explore the World of Dairy?</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-center">
                                     {isPro && subscription ? (
                                        <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 shadow-lg h-auto">
                                            <Crown className="w-4 h-4 mr-2" />
                                            {planNames[subscription.plan] || 'Pro Member'}
                                        </Badge>
                                     ) : (
                                        <Button onClick={() => setIsSubscriptionOpen(true)} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg transition-shadow h-auto py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                                            <Star className="w-4 h-4 mr-1 sm:mr-2" />
                                            Go Pro
                                        </Button>
                                     )}
                                     <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary transition-colors" onClick={() => setIsSettingsOpen(true)}>
                                        <Settings />
                                        <span className="sr-only">Settings</span>
                                    </Button>
                                     <Button variant="ghost" size="icon" className="text-gray-500 hover:text-destructive transition-colors" onClick={handleLogout}>
                                        <LogOut />
                                        <span className="sr-only">Log Out</span>
                                    </Button>
                                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isHeaderOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 pb-6 space-y-4 animate-accordion-down">
                            <hr className="mb-4" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <div>
                                    <h4 className="font-bold font-headline text-primary mb-3">Profile Information</h4>
                                    <div className="space-y-2">
                                        <ProfileDetail icon={UserIcon} label="Name" value={userProfile.name} />
                                        <ProfileDetail icon={Mail} label="Email" value={userProfile.email} />
                                        <ProfileDetail icon={Cake} label="Age" value={userProfile.age} />
                                        <ProfileDetail icon={VenetianMask} label="Gender" value={userProfile.gender} />
                                    </div>
                                </div>
                                 <div>
                                    <h4 className="font-bold font-headline text-primary mb-3">Subscription Status</h4>
                                     {isPro && subscription ? (
                                        <div className="space-y-2">
                                            <ProfileDetail icon={Crown} label="Current Plan" value={planNames[subscription.plan]} />
                                            <ProfileDetail 
                                                icon={CalendarClock} 
                                                label="Expires On" 
                                                value={subscription.expiryDate ? format(new Date(subscription.expiryDate), 'PPP') : 'Never'} 
                                            />
                                            <Button size="sm" className="mt-2" onClick={() => setIsSubscriptionOpen(true)}>Manage Subscription</Button>
                                        </div>
                                     ) : (
                                        <div>
                                            <p className="text-muted-foreground text-sm">You are on the free plan.</p>
                                            <Button size="sm" className="mt-2" onClick={() => setIsSubscriptionOpen(true)}>Upgrade to Pro</Button>
                                        </div>
                                     )}
                                </div>
                            </div>
                        </CollapsibleContent>
                    </CardContent>
                </Card>
                </Collapsible>
            </header>
            <SettingsPanel isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
            <SubscriptionModal isOpen={isSubscriptionOpen} setIsOpen={setIsSubscriptionOpen} />
        </>
    );
}
