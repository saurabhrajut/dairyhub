
"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { SettingsPanel } from './settings-panel';
import type { UserProfile } from '@/app/page';
import { useRouter } from 'next/navigation';

export function Header({ user, setUser }: { user: UserProfile; setUser: (user: UserProfile | null) => void; }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                            <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">Welcome, {user.name}! 👋</h1>
                            <p className="text-sm text-gray-500">Ready to Explore the World of Dairy?</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-destructive transition-colors" onClick={handleLogout}>
                                <LogOut />
                                <span className="sr-only">Log Out</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary transition-colors" onClick={() => setIsSettingsOpen(true)}>
                                <Settings />
                                <span className="sr-only">Settings</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </header>
            <SettingsPanel isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen} />
        </>
    );
}
