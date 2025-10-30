
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2, UserCheck, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { FactoryIcon } from '@/components/icons';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Google</title>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.58 2.05-4.82 2.05-5.82 0-10.56-4.74-10.56-10.56S6.66 3.14 12.48 3.14c3.3 0 5.39 1.28 6.68 2.52l2.52-2.52C19.22 1.28 16.21 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.1 0 12.12-4.92 12.12-12.12 0-.8-.08-1.55-.25-2.28H12.48z" />
    </svg>
);


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailLoading, setIsEmailLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [isGuestLoading, setIsGuestLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const { login, anonymousLogin, signInWithGoogle } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsEmailLoading(true);

        try {
            await login(email, password);
            toast({
                title: 'Login Successful!',
                description: "Welcome back!",
            });
            router.push('/');
        } catch (error: any) {
             toast({
                variant: "destructive",
                title: 'Login Failed',
                description: error.message || "Please check your credentials or sign up.",
            });
        } finally {
            setIsEmailLoading(false);
        }
    };
    
    const handleGuestLogin = async () => {
        setIsGuestLoading(true);
        try {
            await anonymousLogin();
            toast({
                title: 'Logged in as Guest!',
                description: "Welcome! Explore the app's features.",
            });
            router.push('/');
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: 'Guest Login Failed',
                description: "Could not log in as guest. Please try again.",
            });
        } finally {
            setIsGuestLoading(false);
        }
    }

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        try {
            await signInWithGoogle();
             toast({
                title: 'Signed in with Google!',
                description: "Welcome!",
            });
            router.push('/');
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: 'Google Sign-In Failed',
                description: error.message || "Could not sign in with Google. Please try again.",
            });
        } finally {
            setIsGoogleLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 m-4 border relative">
                <Link href="/" className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                 <div className="text-center mb-8">
                    <FactoryIcon className="w-20 h-20 text-primary mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome to <span className="text-primary">Dairy Hub</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">Sign in to continue</p>
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
                                disabled={isEmailLoading}>
                            {isEmailLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
                        </Button>
                    </div>
                </form>

                 <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>

                 <div className="space-y-3">
                    <Button onClick={handleGoogleSignIn} variant="outline" className="w-full" disabled={isGoogleLoading || isGuestLoading || isEmailLoading}>
                        {isGoogleLoading ? <Loader2 className="animate-spin" /> : <GoogleIcon className="mr-2 h-4 w-4" />}
                        Sign in with Google
                    </Button>
                    <Button onClick={handleGuestLogin}
                            variant="outline"
                            className="w-full"
                            disabled={isGuestLoading || isGoogleLoading || isEmailLoading}>
                        {isGuestLoading ? <Loader2 className="animate-spin" /> : <UserCheck className="mr-2 h-4 w-4" />}
                        Continue as Guest
                    </Button>
                </div>
                
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

    
