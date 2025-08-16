
"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Star, User as UserIcon, Crown } from "lucide-react";
import { SettingsPanel } from './settings-panel';
import { useRouter } from 'next/navigation';
import { SubscriptionModal } from './subscription-modal';
import { useAuth, type UserProfile } from '@/context/auth-context';
import type { User } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSubscription } from '@/context/subscription-context';
import { Badge } from '@/components/ui/badge';

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
    const router = useRouter();
    const { logout } = useAuth();
    const { isPro, subscription } = useSubscription();

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    }

    return (
        <>
            <header className="mb-8">
                <Card className="glass-card">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                             <Avatar>
                                <AvatarImage src={userProfile.photoURL ?? undefined} alt={userProfile.name ?? 'User'} />
                                <AvatarFallback><UserIcon /></AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">Welcome, {userProfile.name || "Friend"}! 👋</h1>
                                <p className="text-sm text-gray-500">Ready to Explore the World of Dairy?</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                             {isPro && subscription ? (
                                <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm py-2 px-4 shadow-lg">
                                    <Crown className="w-4 h-4 mr-2" />
                                    {planNames[subscription.plan] || 'Pro Member'}
                                </Badge>
                             ) : (
                                <Button onClick={() => setIsSubscriptionOpen(true)} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg transition-shadow">
                                    <Star className="w-4 h-4 mr-2" />
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
                        </div>
                    </CardContent>
                </Card>
            </header>
            <SettingsPanel isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
            <SubscriptionModal isOpen={isSubscriptionOpen} setIsOpen={setIsSubscriptionOpen} />
        </>
    );
}
