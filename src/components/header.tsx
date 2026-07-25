
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User as UserIcon, Settings, ChevronRight, Loader2, Video, MessageSquarePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { UserFeedbackModal } from "@/components/user-feedback-modal";
import { TutorialVideosModal } from "@/components/tutorial-videos-modal";

export function Header() {
    const { user, loading } = useAuth();
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
    
    if (loading) {
        return (
            <header className="mb-8">
                <Card className="bg-gradient-to-br from-green-100 via-white to-blue-100 p-1 rounded-2xl shadow-md transition-all">
                    <CardContent className="p-4 flex items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin" />
                    </CardContent>
                </Card>
            </header>
        );
    }

    return (
        <>
            <header className="mb-8">
                <Card className="bg-gradient-to-br from-green-100 via-white to-blue-100 p-1 rounded-2xl shadow-md transition-all">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                         <div className="flex items-center gap-4 group w-full">
                            <Avatar className="w-12 h-12 border-2 border-primary/20">
                                <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                                <AvatarFallback><UserIcon /></AvatarFallback>
                            </Avatar>
                            
                            <div>
                                <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                                    Welcome, {user?.displayName || 'Guest'}! 👋
                                </h1>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-xs text-gray-500">Your digital dairy guide</p>
                                    <button
                                        onClick={() => setIsTutorialsOpen(true)}
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded-full transition-colors"
                                    >
                                        <Video className="w-3 h-3" /> Tutorials
                                    </button>
                                    <button
                                        onClick={() => setIsFeedbackOpen(true)}
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded-full transition-colors"
                                    >
                                        <MessageSquarePlus className="w-3 h-3" /> Feedback
                                    </button>
                                </div>
                            </div>
                        </div>
                         
                        {user ? (
                             <Link href="/profile">
                                <Button variant="ghost" className="shrink-0">
                                    View Profile
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        ) : (
                             <Link href="/login">
                                <Button variant="ghost" className="shrink-0">
                                    Login / Sign Up
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        )}
                    </CardContent>
                </Card>
            </header>

            <UserFeedbackModal open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
            <TutorialVideosModal open={isTutorialsOpen} onOpenChange={setIsTutorialsOpen} />
        </>
    );
}
