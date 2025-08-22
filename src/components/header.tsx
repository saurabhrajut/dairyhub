"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export function Header() {
    return (
        <>
            <header className="mb-8">
                <Card className="glass-card transition-all">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4 group w-full">
                            <Avatar className="w-12 h-12 border-2 border-primary/20 group-hover:ring-4 group-hover:ring-primary/20 transition-all">
                                <AvatarFallback><UserIcon /></AvatarFallback>
                            </Avatar>
                            
                            <div>
                                <h1 className="font-headline text-xl sm:text-2xl font-bold text-gray-800">
                                    Welcome, Guest! 👋
                                </h1>
                                <p className="text-sm text-gray-500">Your digital dairy guide</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </header>
        </>
    );
}
