"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Loader2, UserCheck, ArrowLeft, Milk } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { FactoryIcon } from '@/components/icons';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Google</title>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.58 2.05-4.82 2.05-5.82 0-10.56-4.74-10.56-10.56S6.66 3.14 12.48 3.14c3.3 0 5.39 1.28 6.68 2.52l2.52-2.52C19.22 1.28 16.21 0 12.48 0 5.6 0 0 5.6 0 12.48s5.6 12.48 12.48 12.48c7.1 0 12.12-4.92 12.12-12.12 0-.8-.08-1.55-.25-2.28H12.48z" fill="currentColor" />
    </svg>
);

const BG_VIDEO = '/Grok-Video-7F6A1000-EF08-4491-A4E4-8EFC91E61178.MOV';

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
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                src={BG_VIDEO}
            />
            {/* Milky overlay to match dairy hub theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-white/5 to-amber-950/20 mix-blend-overlay pointer-events-none" />

            {/* Login Card Overlay (Centered) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-sm px-4 sm:px-0">
                <div className="liquid-glass bg-white/[0.06] rounded-3xl p-8 border border-white/20 shadow-2xl relative">
                    <Link href="/" className="absolute top-4 left-4 text-white/50 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    
                    <div className="text-center mb-6">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                            <Milk className="w-7 h-7 text-white fill-white/10" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">
                            Welcome to <span className="underline decoration-white/20">Dairy Hub</span>
                        </h1>
                        <p className="text-white/50 mt-1.5 text-xs">Sign in to continue</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-white/80 mb-1">Email Address</label>
                            <div className="relative mt-1">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-xs font-semibold text-white/80 mb-1">Password</label>
                            <div className="relative mt-1">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 outline-none transition-all text-xs"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        
                        <button 
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-2.5 rounded-full hover:bg-white/90 transition-all flex items-center justify-center text-xs mt-6 shadow-lg shadow-black/10"
                            disabled={isEmailLoading}
                        >
                            {isEmailLoading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Sign In'}
                        </button>
                    </form>

                    <div className="relative my-5">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10"></span>
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase">
                            <span className="bg-transparent px-2 text-white/40 font-medium">Or continue with</span>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <button 
                            onClick={handleGoogleSignIn} 
                            className="w-full liquid-glass text-white border border-white/10 font-semibold py-2.5 rounded-full hover:bg-white/5 transition-all flex items-center justify-center text-xs" 
                            disabled={isGoogleLoading || isGuestLoading || isEmailLoading}
                        >
                            {isGoogleLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <GoogleIcon className="mr-2 h-4 w-4" />}
                            Sign in with Google
                        </button>
                        <button 
                            onClick={handleGuestLogin}
                            className="w-full liquid-glass text-white border border-white/10 font-semibold py-2.5 rounded-full hover:bg-white/5 transition-all flex items-center justify-center text-xs"
                            disabled={isGuestLoading || isGoogleLoading || isEmailLoading}
                        >
                            {isGuestLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <UserCheck className="mr-2 h-4 w-4" />}
                            Continue as Guest
                        </button>
                    </div>
                    
                    <div className="text-center mt-5">
                        <p className="text-xs text-white/60">
                            Don't have an account?
                            <Link href="/signup" className="text-white hover:underline font-semibold ml-1">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
