"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User as UserIcon, Settings, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export function Header() {
    const { user } = useAuth();
    const displayUser = user || { displayName: 'Guest', photoURL: undefined };

    return (
        <>
            <header className="mb-8">
                <Card className="glass-card transition-all">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4 group w-full">
                             <Link href="/profile">
                                <Avatar className="w-12 h-12 border-2 border-primary/20 group-hover:ring-4 group-hover:ring-primary/20 transition-all cursor-pointer">
                                    <AvatarImage src={displayUser.photoURL || undefined} alt={displayUser.displayName || 'Guest'} />
                                    <AvatarFallback><UserIcon /></AvatarFallback>
                                </Avatar>
                            </Link>
                            
                            <div>
                                <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                                    Welcome, {displayUser.displayName || 'Guest'}! 👋
                                </h1>
                                <p className="text-sm text-gray-500">Your digital dairy guide</p>
                            </div>
                        </div>
                         <Link href={user ? "/profile" : "/login"}>
                             <Button variant="ghost" className="shrink-0">
                                {user ? 'View Profile' : 'Login / Sign Up'}
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                         </Link>
                    </CardContent>
                </Card>
            </header>
        </>
    );
}
