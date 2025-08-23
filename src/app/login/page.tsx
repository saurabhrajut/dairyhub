"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

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
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 m-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Dairy Hub</h1>
                    <p className="text-gray-500 mt-2">Log in to your account</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="mb-4 relative">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 ease-in-out transform hover:scale-105"
                                disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Log In'}
                        </Button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Don't have an account?
                        <Link href="/signup" className="text-purple-600 hover:underline font-medium ml-1">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
