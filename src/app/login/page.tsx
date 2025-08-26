"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { MilkCanIcon } from '@/components/icons';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate a successful login and navigate to the profile page.
        toast({
            title: 'Navigating to Profile',
            description: 'Bypassing authentication for demo.',
        });
        router.push('/profile');
        
        // No real authentication call is made.
        // We keep the loading state simulation for better UX.
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8 m-4">
                <div className="text-center mb-10">
                    <MilkCanIcon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome to <span className="text-primary">Dairy Hub</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">Sign in or create an account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                     <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                        <div className="relative mt-1">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-300 rounded-lg focus:ring-primary transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                     <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative mt-1">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-300 rounded-lg focus:ring-primary transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <Button type="submit"
                                className="w-full bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out"
                                disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
                        </Button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <Link href="/signup" className="text-primary hover:underline font-medium ml-1">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
