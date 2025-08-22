
"use client";

import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { User as UserIcon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth, type UserProfile } from '@/context/auth-context';
import type { User } from 'firebase/auth';

export function Header({ user, userProfile }: { user: User, userProfile: UserProfile | null }) {
    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    return (
        <>
            <header className="mb-8">
                <Card className="glass-card transition-all">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4 group">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full">
                                        <Avatar className="w-12 h-12 border-2 border-primary/20 cursor-pointer group-hover:ring-4 group-hover:ring-primary/30 transition-all">
                                            <AvatarImage src={userProfile?.photoURL ?? undefined} alt={userProfile?.name ?? 'User'} />
                                            <AvatarFallback><UserIcon /></AvatarFallback>
                                        </Avatar>
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.push('/profile')}>
                                        <UserIcon className="mr-2" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout}>
                                        <LogOut className="mr-2" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            
                            <div>
                                <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">Welcome, {userProfile?.name || user?.displayName || 'User'}! 👋</h1>
                                <p className="text-sm text-gray-500">Explore the Dairy Hub</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </header>
        </>
    );
}
