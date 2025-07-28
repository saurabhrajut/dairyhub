
"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Star } from "lucide-react";
import { SettingsPanel } from './settings-panel';
import type { UserProfile } from '@/app/page';
import { useRouter } from 'next/navigation';
import { SubscriptionModal } from './subscription-modal';

export function Header({ user, setUser }: { user: UserProfile; setUser: (user: UserProfile | null) => void; }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("dhenu-guide-user");
        setUser(null);
        router.push("/login");
    }

    return (
        <>
            <header className="mb-8">
                <Card className="glass-card">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">Welcome, {user.name}! 👋</h1>
                            <p className="text-sm text-gray-500">Ready to Explore the World of Dairy?</p>
                        </div>
                        <div className="flex items-center gap-2">
                             <Button onClick={() => setIsSubscriptionOpen(true)} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg transition-shadow">
                                <Star className="w-4 h-4 mr-2" />
                                Go Pro
                            </Button>
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
