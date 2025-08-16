
"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Crown, User as UserIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import { SubscriptionModal } from './subscription-modal';
import { useAuth, type UserProfile } from '@/context/auth-context';
import type { User } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSubscription } from '@/context/subscription-context';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const planNames: { [key: string]: string } = {
    '7-days': '7-Day Pass',
    '1-month': '1-Month Plan',
    '6-months': '6-Month Plan',
    'yearly': 'Yearly Plan',
    'lifetime': 'Lifetime Plan',
};

export function Header({ user, userProfile }: { user: User, userProfile: UserProfile }) {
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
                <Card className="glass-card transition-all">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <Link href="/profile" className="flex items-center gap-4 group">
                             <Avatar className="w-12 h-12 border-2 border-primary/20 group-hover:ring-4 group-hover:ring-primary/20 transition-all">
                                <AvatarImage src={userProfile.photoURL ?? undefined} alt={userProfile.name ?? 'User'} />
                                <AvatarFallback><UserIcon /></AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">Welcome, {userProfile.name || "Friend"}! 👋</h1>
                                <p className="text-sm text-gray-500 group-hover:text-primary transition-colors">View your profile & settings</p>
                            </div>
                        </Link>
                        <div className="flex items-center gap-1 sm:gap-2 self-end sm:self-center">
                             {isPro && subscription ? (
                                <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4 shadow-lg h-auto cursor-pointer" onClick={() => router.push('/profile')}>
                                    <Crown className="w-4 h-4 mr-2" />
                                    {planNames[subscription.plan] || 'Pro Member'}
                                </Badge>
                             ) : (
                                <Button onClick={() => setIsSubscriptionOpen(true)} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg transition-shadow h-auto py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm">
                                    <Crown className="w-4 h-4 mr-1 sm:mr-2" />
                                    Go Pro
                                </Button>
                             )}
                             <Button variant="ghost" size="icon" className="text-gray-500 hover:text-destructive transition-colors" onClick={handleLogout}>
                                <LogOut />
                                <span className="sr-only">Log Out</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </header>
            <SubscriptionModal isOpen={isSubscriptionOpen} setIsOpen={setIsSubscriptionOpen} />
        </>
    );
}
