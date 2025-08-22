
"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/auth-context";
import { Skeleton } from "@/components/ui/skeleton";

export function Header() {
    const { user, userProfile, loading } = useAuth();

    return (
        <>
            <header className="mb-8">
                <Card className="glass-card transition-all">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <Link href="/profile" className="flex items-center gap-4 group w-full">
                            <Avatar className="w-12 h-12 border-2 border-primary/20 group-hover:ring-4 group-hover:ring-primary/20 transition-all">
                                {loading ? (
                                    <Skeleton className="h-12 w-12 rounded-full" />
                                ) : (
                                    <>
                                        <AvatarImage src={userProfile?.photoURL ?? undefined} alt={userProfile?.name ?? 'User'} />
                                        <AvatarFallback><UserIcon /></AvatarFallback>
                                    </>
                                )}
                            </Avatar>
                            
                            <div>
                                {loading ? (
                                    <div className="space-y-2">
                                        <Skeleton className="h-6 w-40" />
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                                            Welcome, {userProfile?.name || 'Guest'}! 👋
                                        </h1>
                                        <p className="text-sm text-gray-500">Click to view your profile</p>
                                    </>
                                )}
                            </div>
                        </Link>
                    </CardContent>
                </Card>
            </header>
        </>
    );
}
