"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/auth-context';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/context/language-context';
import { Heart, Mail, MessageCircle, ChevronLeft, LogOut, Settings, HelpCircle, User, Loader2, Building2, ChevronRight, BookOpen, Droplet, Moon, Sun, Gift, Copy, Sparkles, Shield } from 'lucide-react';
import type { Department } from '@/context/auth-context';
import { useReadingMode } from '@/context/reading-mode-context';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);

const themes = [
  { name: 'default', label: 'Default', color: 'bg-gray-400', icon: Sun },
  { name: 'sepia', label: 'Sepia', color: 'bg-[#C6B8A3]', icon: BookOpen },
  { name: 'slate', label: 'Slate', color: 'bg-slate-600', icon: Moon },
  { name: 'paper', label: 'Paper', color: 'bg-[#F8F5E9]', icon: BookOpen },
  { name: 'mint', label: 'Mint', color: 'bg-emerald-200', icon: Droplet },
  { name: 'night', label: 'Night', color: 'bg-[#1E2024]', icon: Moon },
] as const;

// --- PHYSICS ENGINE CONFIGURATION ---
const FRICTION = 0.98; // Air resistance (lower = stops faster)
const BOUNCE_DAMPING = 0.8; // Wall bounce energy loss
const COLLISION_DAMPING = 0.9; // Ball collision energy loss
const CONTAINER_WIDTH = 400; // Approximate width
const CONTAINER_HEIGHT = 300; // Approximate height

export default function ProfilePage() {
    const { user, loading, logout, updateUserProfile, updateUserPhoto } = useAuth();
    const { language, setLanguage } = useLanguage();
    const { toast } = useToast();
    const router = useRouter();
    const { theme, setTheme, isEnabled, setIsEnabled } = useReadingMode();
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [tempName, setTempName] = useState('');

    // --- GAME PHYSICS STATE ---
    // Using refs for physics calculations to avoid re-renders on every math step
    // Using state only to update the DOM
    const [balls, setBalls] = useState([
        { id: 1, x: 60, y: 50, vx: 2, vy: 1, size: 64, gradient: 'linear-gradient(135deg, #C084FC, #A78BFA)' },
        { id: 2, x: 250, y: 90, vx: -1, vy: 2, size: 48, gradient: 'linear-gradient(135deg, #F9A8D4, #EC4899)' },
        { id: 3, x: 40, y: 140, vx: 1, vy: -1, size: 56, gradient: 'linear-gradient(135deg, #93C5FD, #60A5FA)' },
        { id: 4, x: 300, y: 40, vx: -2, vy: -1, size: 40, gradient: 'linear-gradient(135deg, #67E8F9, #22D3EE)' },
        { id: 5, x: 280, y: 170, vx: 0, vy: 2, size: 52, gradient: 'linear-gradient(135deg, #FDE68A, #F59E0B)' },
        { id: 6, x: 70, y: 200, vx: 2, vy: 0, size: 44, gradient: 'linear-gradient(135deg, #86EFAC, #34D399)' },
        { id: 7, x: 280, y: 70, vx: -1, vy: 1, size: 50, gradient: 'linear-gradient(135deg, #A5B4FC, #6366F1)' },
        { id: 8, x: 320, y: 130, vx: 1, vy: -2, size: 46, gradient: 'linear-gradient(135deg, #FDA4AF, #FB7185)' },
    ]);

    // Dragging state
    const draggingRef = useRef<{ id: number; lastX: number; lastY: number; timestamp: number } | null>(null);
    const requestRef = useRef<number>();
    const ballsRef = useRef(balls); // Mutable ref to hold latest positions without causing re-renders

    // Sync state to ref initially
    useEffect(() => {
        ballsRef.current = balls;
    }, []);

    // MAIN GAME LOOP
    const updatePhysics = () => {
        const currentBalls = [...ballsRef.current];

        currentBalls.forEach((ball, index) => {
            // Skip physics for the ball being dragged (it follows mouse)
            if (draggingRef.current?.id === ball.id) return;

            // Apply velocity
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Apply friction
            ball.vx *= FRICTION;
            ball.vy *= FRICTION;

            // Wall Collisions (Bounce)
            if (ball.x <= 0) {
                ball.x = 0;
                ball.vx = -ball.vx * BOUNCE_DAMPING;
            } else if (ball.x + ball.size >= CONTAINER_WIDTH) {
                ball.x = CONTAINER_WIDTH - ball.size;
                ball.vx = -ball.vx * BOUNCE_DAMPING;
            }

            if (ball.y <= 0) {
                ball.y = 0;
                ball.vy = -ball.vy * BOUNCE_DAMPING;
            } else if (ball.y + ball.size >= CONTAINER_HEIGHT) {
                ball.y = CONTAINER_HEIGHT - ball.size;
                ball.vy = -ball.vy * BOUNCE_DAMPING;
            }

            // Ball-to-Ball Collision
            for (let j = index + 1; j < currentBalls.length; j++) {
                const other = currentBalls[j];
                const dx = (other.x + other.size / 2) - (ball.x + ball.size / 2);
                const dy = (other.y + other.size / 2) - (ball.y + ball.size / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = (ball.size + other.size) / 2;

                if (distance < minDistance) {
                    // Collision Detected - Resolve Overlap
                    const angle = Math.atan2(dy, dx);
                    const overlap = minDistance - distance;
                    
                    // Push balls apart
                    const moveX = (Math.cos(angle) * overlap) / 2;
                    const moveY = (Math.sin(angle) * overlap) / 2;

                    ball.x -= moveX;
                    ball.y -= moveY;
                    other.x += moveX;
                    other.y += moveY;

                    // Exchange Velocity (Simple Elastic Collision)
                    const tempVx = ball.vx;
                    const tempVy = ball.vy;
                    ball.vx = other.vx * COLLISION_DAMPING;
                    ball.vy = other.vy * COLLISION_DAMPING;
                    other.vx = tempVx * COLLISION_DAMPING;
                    other.vy = tempVy * COLLISION_DAMPING;
                }
            }
        });

        // Update React State to render frame
        setBalls(currentBalls);
        requestRef.current = requestAnimationFrame(updatePhysics);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(updatePhysics);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    // --- INTERACTION HANDLERS ---

    const handleStart = (e: React.MouseEvent | React.TouchEvent, id: number) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

        draggingRef.current = {
            id,
            lastX: clientX,
            lastY: clientY,
            timestamp: Date.now()
        };
    };

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!draggingRef.current) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

        // Calculate delta for velocity calculation on release
        const dx = clientX - draggingRef.current.lastX;
        const dy = clientY - draggingRef.current.lastY;

        // Update the dragged ball's position directly
        const newBalls = [...ballsRef.current];
        const ball = newBalls.find(b => b.id === draggingRef.current?.id);
        
        if (ball) {
            ball.x += dx;
            ball.y += dy;
            
            // Keep velocity updated for "throw" effect
            ball.vx = dx * 1.5; // Multiplier adds "power" to the throw
            ball.vy = dy * 1.5;
        }

        draggingRef.current.lastX = clientX;
        draggingRef.current.lastY = clientY;
    };

    const handleEnd = () => {
        draggingRef.current = null;
    };

    // Attach global move/up listeners to ensure drag doesn't break if mouse leaves div
    useEffect(() => {
        window.addEventListener('mousemove', handleMove as any);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove as any, { passive: false });
        window.addEventListener('touchend', handleEnd);

        return () => {
            window.removeEventListener('mousemove', handleMove as any);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove as any);
            window.removeEventListener('touchend', handleEnd);
        };
    }, []);
    
    // --- END PHYSICS LOGIC ---

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        } else if (user) {
            setTempName(user.displayName || '');
        }
    }, [user, loading, router]);

    const handleCopyUpi = () => {
        const upiId = "9119005734-2@axl";
        navigator.clipboard.writeText(upiId);
        toast({
            title: "UPI ID Copied!",
            description: `${upiId} has been copied to your clipboard.`,
        });
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || user.isAnonymous) {
            toast({ variant: "destructive", title: "Action Not Allowed", description: "Guests cannot change their profile picture. Please sign up." });
            return;
        }
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            try {
                await updateUserPhoto(file);
                toast({ title: "Profile picture updated!" });
            } catch (error: any) {
                toast({ variant: "destructive", title: "Upload Failed", description: error.message });
            }
        }
    };
    
    const handleSaveName = async () => {
        if (!user || user.isAnonymous) {
            toast({ variant: "destructive", title: "Action Not Allowed", description: "Guests cannot change their name. Please sign up." });
            setIsEditingName(false);
            return;
        }
        if (tempName.trim() && tempName.trim() !== user.displayName) {
            try {
                await updateUserProfile({ displayName: tempName.trim() });
                setIsEditingName(false);
                toast({ title: "Name updated successfully!" });
            } catch (error: any) {
                toast({ variant: 'destructive', title: "Update failed", description: error.message });
            }
        } else {
            setIsEditingName(false);
        }
    }
    
    const handleLanguageChange = (lang: 'en' | 'hi') => {
        setLanguage(lang);
        toast({
            title: "Language Updated",
            description: `App language set to ${lang === 'hi' ? 'Hinglish' : 'English'}.`,
        });
    }

    const handleDepartmentChange = async (dept: Department) => {
        if (user && !user.isAnonymous) {
            try {
                await updateUserProfile({ department: dept });
                toast({
                    title: "Department Updated",
                    description: `Your access has been set to ${getDepartmentName(dept)}.`,
                });
            } catch (error: any) {
                toast({ variant: 'destructive', title: "Update Failed", description: error.message });
            }
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            toast({
                title: "Logged Out",
                description: "You have been successfully logged out.",
            });
            router.push('/login');
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: "Logout Failed",
                description: error.message
            });
        }
    }

    const getDepartmentName = (deptKey?: Department) => {
        if (!deptKey) return 'Not specified';
        const names: Record<Department, string> = {
            'process-access': 'Process Access',
            'production-access': 'Production Access',
            'quality-access': 'Quality Access',
            'all-control-access': 'All Control Access',
            'guest': 'Guest User'
        }
        return names[deptKey];
    }
    
    if (loading || !user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <Loader2 className="animate-spin h-8 w-8 text-purple-500" />
            </div>
        );
    }

    return (
        <>
        <style jsx>{`
            @keyframes gradient-flow {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            @keyframes glow-pulse {
                0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.4); }
                50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.6), 0 0 60px rgba(96, 165, 250, 0.5); }
            }
            @keyframes shimmer {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
            }
            .glass-card {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.5);
                box-shadow: 0 8px 32px 0 rgba(167, 139, 250, 0.1);
            }
            .neon-border {
                position: relative;
                overflow: hidden;
            }
            .neon-border::before {
                content: '';
                position: absolute;
                inset: 0;
                padding: 2px;
                border-radius: inherit;
                background: linear-gradient(45deg, #A78BFA, #EC4899, #60A5FA, #A78BFA);
                background-size: 300% 300%;
                animation: gradient-flow 3s ease infinite;
                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
            }
        `}</style>
        
        <div className="max-w-md mx-auto min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Header Section with Interactive Draggable Balls */}
            <div className="relative h-72 p-6 overflow-hidden select-none">
                {/* Interactive Balls Container */}
                <div className="absolute inset-0 z-0">
                    {balls.map(ball => (
                        <div
                            key={ball.id}
                            onMouseDown={(e) => handleStart(e, ball.id)}
                            onTouchStart={(e) => handleStart(e, ball.id)}
                            className="absolute rounded-full cursor-grab active:cursor-grabbing hover:shadow-2xl transition-shadow duration-75"
                            style={{
                                width: `${ball.size}px`,
                                height: `${ball.size}px`,
                                left: `${ball.x}px`,
                                top: `${ball.y}px`,
                                background: ball.gradient,
                                boxShadow: draggingRef.current?.id === ball.id 
                                    ? '0 12px 48px rgba(0, 0, 0, 0.3)' 
                                    : '0 8px 32px rgba(0, 0, 0, 0.2)',
                                transform: draggingRef.current?.id === ball.id ? 'scale(1.1)' : 'scale(1)',
                                zIndex: draggingRef.current?.id === ball.id ? 20 : 10,
                                touchAction: 'none' // Critical for touch drag
                            }}
                        />
                    ))}
                </div>

                <Link href="/" className="absolute top-6 left-6 z-20 cursor-pointer glass-card p-2 rounded-full hover:bg-white/50 transition-all">
                   <ChevronLeft className="h-6 w-6 text-gray-700"/>
                </Link>
                
                {/* Profile Pic Container */}
                <div className="flex flex-col items-center justify-center h-full relative z-10 pointer-events-none">
                    <div className="relative neon-border rounded-full p-1 animate-glow-pulse pointer-events-auto">
                        <div className="relative">
                            <img
                                id="profilePic"
                                src={user.photoURL || 'https://placehold.co/128x128/E0E0E0/333?text=User'}
                                alt="Profile Picture"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
                            />
                            {!user.isAnonymous && (
                                <label htmlFor="fileInput" className="absolute bottom-0 right-0 bg-gradient-to-br from-purple-400 to-pink-400 p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                   <EditIcon />
                                </label>
                            )}
                            <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
                        </div>
                    </div>
                    
                    {!user.isAnonymous && (
                        <div className="mt-3 glass-card px-4 py-1 rounded-full flex items-center gap-2 pointer-events-auto">
                            <Shield className="w-4 h-4 text-purple-500" />
                            <span className="text-gray-700 text-sm font-semibold">Verified User</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Name Section */}
            <div className="px-6 -mt-8 relative z-10">
                <div className="glass-card p-6 rounded-2xl neon-border">
                    <div className="flex items-center justify-center space-x-2 min-h-[36px]">
                        {isEditingName ? (
                             <div className="flex items-center justify-center space-x-2">
                                 <Input
                                    type="text"
                                    id="nameInput"
                                    className="text-2xl font-bold text-gray-800 bg-white/50 rounded-md px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-purple-400 h-10 border-purple-200"
                                    value={tempName}
                                    onChange={(e) => setTempName(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                                    autoFocus
                                />
                                <Button onClick={handleSaveName} size="sm" className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">Save</Button>
                             </div>
                        ) : (
                             <div className="flex items-center justify-center space-x-2">
                                <h1 id="userName" className="text-2xl font-bold text-gray-800">{user.displayName || ''}</h1>
                                 {!user.isAnonymous && (
                                    <button onClick={() => { setIsEditingName(true); setTempName(user.displayName || ''); }} className="text-gray-500 hover:text-purple-600">
                                       <EditIcon />
                                    </button>
                                 )}
                            </div>
                        )}
                    </div>
                     <p className="text-gray-600 text-sm text-center mt-2">{user.email}</p>
                </div>
            </div>

            <div className="px-6 pb-6 mt-6 space-y-4">
                {/* Donation Card */}
                <Dialog open={isDonationModalOpen} onOpenChange={setIsDonationModalOpen}>
                    <div className="relative overflow-hidden p-6 rounded-2xl text-white shadow-xl bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 neon-border">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                        <div className="relative z-10 text-center">
                            <Sparkles className="w-8 h-8 mx-auto mb-2 text-yellow-200" />
                            <h3 className="text-2xl font-bold">Support Dairy Hub's Mission</h3>
                            <p className="text-sm mt-2 opacity-90">If you find this app helpful, your contribution keeps it running and growing!</p>
                            <DialogTrigger asChild>
                                <Button className="mt-4 bg-white text-rose-500 font-bold py-2 px-6 rounded-full hover:bg-rose-50 transition-all hover:scale-105 shadow-lg">
                                    <Heart className="mr-2 h-4 w-4"/>
                                    Donate Now
                                </Button>
                            </DialogTrigger>
                        </div>
                    </div>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
                                    <Gift className="w-8 h-8 text-rose-500"/>
                                </div>
                            </div>
                            <DialogTitle className="text-2xl font-bold text-center">Support Dairy Hub</DialogTitle>
                            <DialogDescription className="text-center text-muted-foreground">
                                आपका समर्थन हमें सशक्त बनाता है और बेहतर बनने की प्रेरणा देता है।
                            </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 text-center">
                            <p className="mb-4">Scan the QR code with any payment app to contribute.</p>
                            <div className="bg-white p-2 rounded-lg inline-block border-4 border-dashed border-rose-200">
                                <Image 
                                    src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_9565.jpg?alt=media&token=e56e6c1f-aeb5-4a6f-a2ec-f797e4060d5e" 
                                    alt="QR Code for Donation"
                                    width={192}
                                    height={192}
                                    className="w-48 h-48 rounded-md"
                                />
                            </div>
                             <div className="mt-6 bg-rose-50 p-3 rounded-lg border border-dashed border-rose-200">
                                <p className="text-sm text-gray-600">Or use UPI ID:</p>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                  <p className="font-mono text-lg text-rose-700 font-semibold">9119005734-2@axl</p>
                                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500" onClick={handleCopyUpi}>
                                    <Copy className="h-4 w-4" />
                                  </Button>
                                </div>
                            </div>
                            <p className="mt-4 text-lg font-semibold text-gray-800">हर योगदान मायने रखता है, चाहे वह कितना भी छोटा क्यों न हो।</p>
                            <p className="mt-1 text-sm text-rose-600 font-bold">Thank you for your support! 🙏</p>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* User Info Card */}
                <div className="glass-card p-6 rounded-2xl neon-border">
                    <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-purple-500" />
                        Your Information
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center glass-card p-3 rounded-xl">
                            <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-2 rounded-lg shadow-lg">
                                <Mail className="h-5 w-5 text-white"/>
                            </div>
                            <span className="ml-4 text-gray-700">{user.email}</span>
                        </div>
                        <div className="flex items-center glass-card p-3 rounded-xl">
                            <div className="bg-gradient-to-br from-green-300 to-green-500 p-2 rounded-lg shadow-lg">
                                <User className="h-5 w-5 text-white"/>
                            </div>
                            <span className="ml-4 text-gray-700 capitalize">{user.gender || 'Not specified'}</span>
                        </div>
                         <div className="flex items-center glass-card p-3 rounded-xl">
                            <div className="bg-gradient-to-br from-purple-300 to-purple-500 p-2 rounded-lg shadow-lg">
                                <Building2 className="h-5 w-5 text-white"/>
                            </div>
                            <span className="ml-4 text-gray-700 capitalize">{getDepartmentName(user.department)}</span>
                        </div>
                    </div>
                </div>

                {/* Settings Menu Card */}
                <div className="glass-card rounded-2xl overflow-hidden neon-border">
                    <ul className="divide-y divide-gray-200">
                         <li 
                            onClick={() => setIsSettingsOpen(true)}
                            className="flex justify-between items-center p-4 hover:bg-white/50 cursor-pointer transition-all"
                         >
                            <span className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="bg-gradient-to-br from-orange-300 to-orange-500 p-2 rounded-lg shadow-lg">
                                    <Settings className="w-5 h-5 text-white"/>
                                </div>
                                Settings
                            </span>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                        </li>
                        
                        <li 
                            onClick={() => setIsHelpOpen(true)}
                            className="flex justify-between items-center p-4 hover:bg-white/50 cursor-pointer transition-all"
                        >
                            <span className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-2 rounded-lg shadow-lg">
                                    <HelpCircle className="w-5 h-5 text-white"/>
                                </div>
                                Help & Support
                            </span>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                        </li>

                        <li 
                            onClick={handleLogout} 
                            className="flex justify-between items-center p-4 hover:bg-red-50 cursor-pointer transition-all"
                        >
                            <span className="flex items-center gap-3 text-red-500 font-medium">
                                <div className="bg-gradient-to-br from-red-300 to-red-500 p-2 rounded-lg shadow-lg">
                                    <LogOut className="w-5 h-5 text-white"/>
                                </div>
                                Logout
                            </span>
                            <ChevronRight className="h-5 w-5 text-red-400" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Settings Dialog */}
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Settings className="w-5 h-5" />
                            App Settings
                        </DialogTitle>
                        <DialogDescription>Change your app preferences here.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-6">
                        <div>
                            <label htmlFor="language-select" className="block text-sm font-medium text-gray-700 mb-2">App Language</label>
                            <Select value={language} onValueChange={(value) => handleLanguageChange(value as 'en' | 'hi')}>
                                <SelectTrigger id="language-select"><SelectValue/></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="hi">Hinglish</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {!user.isAnonymous && (
                            <div>
                                <label htmlFor="department-select" className="block text-sm font-medium text-gray-700 mb-2">Your Department</label>
                                <Select value={user.department} onValueChange={(value) => handleDepartmentChange(value as Department)}>
                                    <SelectTrigger id="department-select"><SelectValue placeholder="Select Department"/></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="process-access">Process Access</SelectItem>
                                        <SelectItem value="production-access">Production Access</SelectItem>
                                        <SelectItem value="quality-access">Quality Access</SelectItem>
                                        <SelectItem value="all-control-access">All Control Access</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                         <div>
                            <Label className="block text-sm font-medium text-gray-700 mb-2">Reading Mode</Label>
                            <div className='flex items-center space-x-2 mb-4'>
                              <Switch id="reading-mode-switch" checked={isEnabled} onCheckedChange={setIsEnabled} />
                              <Label htmlFor="reading-mode-switch">Enable eye-friendly themes</Label>
                            </div>
                            {isEnabled && (
                              <TooltipProvider>
                                <div className="flex justify-around items-center p-2 bg-muted rounded-lg">
                                    {themes.map((t) => (
                                    <Tooltip key={t.name}>
                                        <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className={cn(
                                            "w-8 h-8 rounded-full",
                                            theme === t.name ? 'ring-2 ring-primary ring-offset-2' : ''
                                            )}
                                            onClick={() => setTheme(t.name)}
                                        >
                                            <div className={cn("w-5 h-5 rounded-full border", t.color)} />
                                        </Button>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom">
                                        <p>{t.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                    ))}
                                </div>
                              </TooltipProvider>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Help & Support Dialog */}
            <Dialog open={isHelpOpen} onOpenChange={setIsHelpOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <HelpCircle className="w-5 h-5" />
                            Contact Support
                        </DialogTitle>
                        <DialogDescription>Get help from our support team.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                         <a href="https://wa.me/9119005734" target="_blank" rel="noopener noreferrer" className="block">
                            <Button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600" variant="default">
                                <MessageCircle className="mr-2 h-5 w-5"/>WhatsApp
                            </Button>
                        </a>
                         <a href="mailto:saurabhthakur8080@gmail.com" className="block">
                            <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600" variant="default">
                                <Mail className="mr-2 h-5 w-5"/>Email
                            </Button>
                        </a>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
        </>
    );
}
