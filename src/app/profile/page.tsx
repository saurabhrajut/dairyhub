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
import { Heart, Mail, MessageCircle, ChevronLeft, LogOut, Settings, HelpCircle, User, Loader2, Building2, ChevronRight, BookOpen, Droplet, Moon, Sun, Gift, Copy, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import type { Department } from '@/context/auth-context';
import { useReadingMode } from '@/context/reading-mode-context';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

// ============================================================
// 🔑 RAZORPAY CONFIG
// ============================================================
const RAZORPAY_KEY_ID = "rzp_live_RaIS0kmA42YM68";

const DONATION_TIERS = [
  { amount: 50,   label: '₹50',  emoji: '☕', desc: 'Ek chai ki kimat' },
  { amount: 100,  label: '₹100', emoji: '🌱', desc: 'Ek choti madad' },
  { amount: 500,  label: '₹500', emoji: '💪', desc: 'Bada support' },
  { amount: 1000, label: '₹1K',  emoji: '🏆', desc: 'Hero donor' },
];

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
);

const themes = [
  { name: 'default', label: 'Default', color: 'bg-gray-400',   icon: Sun      },
  { name: 'sepia',   label: 'Sepia',   color: 'bg-[#C6B8A3]',  icon: BookOpen },
  { name: 'slate',   label: 'Slate',   color: 'bg-slate-600',  icon: Moon     },
  { name: 'paper',   label: 'Paper',   color: 'bg-[#F8F5E9]',  icon: BookOpen },
  { name: 'mint',    label: 'Mint',    color: 'bg-emerald-200', icon: Droplet  },
  { name: 'night',   label: 'Night',   color: 'bg-[#1E2024]',  icon: Moon     },
] as const;

const FRICTION          = 0.98;
const BOUNCE_DAMPING    = 0.8;
const COLLISION_DAMPING = 0.9;
const CONTAINER_WIDTH   = 400;
const CONTAINER_HEIGHT  = 300;

// ============================================================
// Razorpay script loader — properly waits if already injected
// ============================================================
function loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
        if ((window as any).Razorpay) { resolve(true); return; }

        const existing = document.getElementById('razorpay-script');
        if (existing) {
            // Script tag exists but Razorpay not yet ready — poll
            const poll = setInterval(() => {
                if ((window as any).Razorpay) { clearInterval(poll); resolve(true); }
            }, 100);
            setTimeout(() => { clearInterval(poll); resolve(false); }, 10000);
            return;
        }

        const script = document.createElement('script');
        script.id      = 'razorpay-script';
        script.src     = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload  = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

export default function ProfilePage() {
    const { user, loading, logout, updateUserProfile, updateUserPhoto } = useAuth();
    const { language, setLanguage } = useLanguage();
    const { toast } = useToast();
    const router = useRouter();
    const { theme, setTheme, isEnabled, setIsEnabled } = useReadingMode();

    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen]           = useState(false);
    const [isHelpOpen, setIsHelpOpen]                   = useState(false);
    const [isEditingName, setIsEditingName]             = useState(false);
    const [tempName, setTempName]                       = useState('');

    const [selectedTier, setSelectedTier]         = useState<typeof DONATION_TIERS[0] | null>(null);
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess]     = useState(false);
    const [lastPaymentId, setLastPaymentId]       = useState('');

    const [balls, setBalls] = useState([
        { id: 1, x: 60,  y: 50,  vx: 2,  vy: 1,  size: 64, gradient: 'linear-gradient(135deg, #C084FC, #A78BFA)' },
        { id: 2, x: 250, y: 90,  vx: -1, vy: 2,  size: 48, gradient: 'linear-gradient(135deg, #F9A8D4, #EC4899)' },
        { id: 3, x: 40,  y: 140, vx: 1,  vy: -1, size: 56, gradient: 'linear-gradient(135deg, #93C5FD, #60A5FA)' },
        { id: 4, x: 300, y: 40,  vx: -2, vy: -1, size: 40, gradient: 'linear-gradient(135deg, #67E8F9, #22D3EE)' },
        { id: 5, x: 280, y: 170, vx: 0,  vy: 2,  size: 52, gradient: 'linear-gradient(135deg, #FDE68A, #F59E0B)' },
        { id: 6, x: 70,  y: 200, vx: 2,  vy: 0,  size: 44, gradient: 'linear-gradient(135deg, #86EFAC, #34D399)' },
        { id: 7, x: 280, y: 70,  vx: -1, vy: 1,  size: 50, gradient: 'linear-gradient(135deg, #A5B4FC, #6366F1)' },
        { id: 8, x: 320, y: 130, vx: 1,  vy: -2, size: 46, gradient: 'linear-gradient(135deg, #FDA4AF, #FB7185)' },
    ]);

    const draggingRef = useRef<{ id: number; lastX: number; lastY: number } | null>(null);
    const requestRef  = useRef<number>();
    const ballsRef    = useRef(balls);
    useEffect(() => { ballsRef.current = balls; }, [balls]);

    const updatePhysics = () => {
        const B = [...ballsRef.current];
        B.forEach((ball, i) => {
            if (draggingRef.current?.id === ball.id) return;
            ball.x += ball.vx; ball.y += ball.vy;
            ball.vx *= FRICTION; ball.vy *= FRICTION;
            if (ball.x <= 0)                                 { ball.x = 0;                           ball.vx = -ball.vx * BOUNCE_DAMPING; }
            else if (ball.x + ball.size >= CONTAINER_WIDTH)  { ball.x = CONTAINER_WIDTH - ball.size;  ball.vx = -ball.vx * BOUNCE_DAMPING; }
            if (ball.y <= 0)                                 { ball.y = 0;                           ball.vy = -ball.vy * BOUNCE_DAMPING; }
            else if (ball.y + ball.size >= CONTAINER_HEIGHT) { ball.y = CONTAINER_HEIGHT - ball.size; ball.vy = -ball.vy * BOUNCE_DAMPING; }
            for (let j = i + 1; j < B.length; j++) {
                const o = B[j];
                const dx = (o.x + o.size/2) - (ball.x + ball.size/2);
                const dy = (o.y + o.size/2) - (ball.y + ball.size/2);
                const dist = Math.sqrt(dx*dx + dy*dy);
                const minD = (ball.size + o.size) / 2;
                if (dist < minD) {
                    const ang = Math.atan2(dy, dx), ovlp = minD - dist;
                    const mx = Math.cos(ang)*ovlp/2, my = Math.sin(ang)*ovlp/2;
                    ball.x -= mx; ball.y -= my; o.x += mx; o.y += my;
                    const tvx = ball.vx, tvy = ball.vy;
                    ball.vx = o.vx * COLLISION_DAMPING; ball.vy = o.vy * COLLISION_DAMPING;
                    o.vx = tvx * COLLISION_DAMPING;     o.vy = tvy * COLLISION_DAMPING;
                }
            }
        });
        setBalls(B);
        requestRef.current = requestAnimationFrame(updatePhysics);
    };
    useEffect(() => {
        requestRef.current = requestAnimationFrame(updatePhysics);
        return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
    }, []);

    const handleStart = (e: React.MouseEvent | React.TouchEvent, id: number) => {
        const cx = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const cy = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        draggingRef.current = { id, lastX: cx, lastY: cy };
    };
    const handleMove = (e: any) => {
        if (!draggingRef.current) return;
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = cx - draggingRef.current.lastX, dy = cy - draggingRef.current.lastY;
        const nb = [...ballsRef.current];
        const ball = nb.find(b => b.id === draggingRef.current!.id);
        if (ball) { ball.x += dx; ball.y += dy; ball.vx = dx * 1.5; ball.vy = dy * 1.5; }
        draggingRef.current.lastX = cx; draggingRef.current.lastY = cy;
    };
    const handleEnd = () => { draggingRef.current = null; };
    useEffect(() => {
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchmove', handleMove, { passive: false });
        window.addEventListener('touchend', handleEnd);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, []);

    useEffect(() => {
        if (!loading && !user) router.push('/login');
        else if (user) setTempName(user.displayName || '');
    }, [user, loading, router]);

    // ============================================================
    // 💳 RAZORPAY PAYMENT — Mobile number screen SKIP kiya gaya
    //
    // Razorpay pehle mobile number screen isliye dikhata hai kyunki
    // prefill.contact empty hoti hai. Fix:
    //
    //   1. prefill.contact = "9999999999"  ← dummy number dene se
    //      Razorpay phone collection screen SKIP kar deta hai aur
    //      seedha payment methods dikhata hai.
    //
    //   2. config.display.language = "en"  ← consistent UI
    //
    //   3. Agar user ka actual phone available ho (Auth se),
    //      to woh use karo — aur bhi better experience hoga.
    // ============================================================
    const handleRazorpayPayment = async () => {
        if (!selectedTier) {
            toast({ variant: 'destructive', title: 'Koi amount select karo', description: 'Pehle ek donation tier choose karo.' });
            return;
        }

        setIsPaymentLoading(true);
        const scriptLoaded = await loadRazorpayScript();

        if (!scriptLoaded) {
            toast({ variant: 'destructive', title: 'Payment Error', description: 'Payment gateway load nahi hua. Internet check karo.' });
            setIsPaymentLoading(false);
            return;
        }

        // ✅ KEY FIX: prefill.contact mein valid 10-digit number dena zaroori hai
        // Razorpay tab phone screen skip karta hai aur direct pay options dikhata hai
        // Agar user ka actual phone number available ho to use karo:
        //   const userPhone = user?.phoneNumber?.replace('+91', '') || '9999999999';
        const userPhone = '9999999999'; // fallback — phone screen skip ho jaata hai

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: selectedTier.amount * 100, // paise mein
            currency: 'INR',
            name: 'Dairy Hub',
            description: `Donation - ${selectedTier.label} ${selectedTier.emoji}`,
            image: 'https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_9565.jpg?alt=media&token=e56e6c1f-aeb5-4a6f-a2ec-f797e4060d5e',

            prefill: {
                name:    user?.displayName || '',
                email:   user?.email       || '',
                contact: userPhone,           // ← YEH HAI ASLI FIX 🔑
                                              // Valid contact hone se Razorpay
                                              // phone entry screen skip karta hai
                                              // aur seedha payment options aate hain
            },

            notes: {
                userId: user?.uid || 'anonymous',
            },

            // ✅ config object se aur bhi control milta hai
            config: {
                display: {
                    language: 'en',           // consistent language
                },
            },

            theme: { color: '#A78BFA' },

            // ✅ SUCCESS CALLBACK
            handler: function (response: any) {
                setLastPaymentId(response.razorpay_payment_id);
                setPaymentSuccess(true);
                setIsPaymentLoading(false);
                toast({
                    title: `🎉 ₹${selectedTier.amount} donation received!`,
                    description: `Payment ID: ${response.razorpay_payment_id}`,
                });
                // Firebase mein save karna ho to:
                // await addDoc(collection(db, 'donations'), {
                //   userId: user?.uid,
                //   amount: selectedTier.amount,
                //   paymentId: response.razorpay_payment_id,
                //   createdAt: serverTimestamp()
                // });
            },

            modal: {
                ondismiss: () => {
                    setIsPaymentLoading(false);
                    toast({ title: 'Payment cancelled', description: 'Aapne window band kar di.' });
                },
                // ✅ escape key se dismiss hone par bhi loading reset ho
                escape: true,
            },
        };

        try {
            const rzp = new (window as any).Razorpay(options);
            rzp.on('payment.failed', (response: any) => {
                setIsPaymentLoading(false);
                toast({
                    variant: 'destructive',
                    title: 'Payment Failed',
                    description: response.error.description || 'Kuch problem aayi. Dobara try karo.',
                });
            });
            rzp.open();
        } catch {
            setIsPaymentLoading(false);
            toast({ variant: 'destructive', title: 'Error', description: 'Payment window nahi khula.' });
        }
    };

    const resetDonation = () => {
        setPaymentSuccess(false);
        setSelectedTier(null);
        setLastPaymentId('');
    };

    const handleCopyUpi = () => {
        navigator.clipboard.writeText("9119005734-2@axl");
        toast({ title: "UPI ID Copied!" });
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!user || user.isAnonymous) {
            toast({ variant: "destructive", title: "Action Not Allowed", description: "Guests cannot change profile picture." });
            return;
        }
        if (event.target.files?.[0]) {
            try {
                await updateUserPhoto(event.target.files[0]);
                toast({ title: "Profile picture updated!" });
            } catch (error: any) {
                toast({ variant: "destructive", title: "Upload Failed", description: error.message });
            }
        }
    };

    const handleSaveName = async () => {
        if (!user || user.isAnonymous) { setIsEditingName(false); return; }
        if (tempName.trim() && tempName.trim() !== user.displayName) {
            try {
                await updateUserProfile({ displayName: tempName.trim() });
                setIsEditingName(false);
                toast({ title: "Name updated!" });
            } catch (error: any) {
                toast({ variant: 'destructive', title: "Update failed", description: error.message });
            }
        } else { setIsEditingName(false); }
    };

    const handleLanguageChange = (lang: 'en' | 'hi') => {
        setLanguage(lang);
        toast({ title: "Language Updated", description: `Set to ${lang === 'hi' ? 'Hinglish' : 'English'}.` });
    };

    const handleDepartmentChange = async (dept: Department) => {
        if (user && !user.isAnonymous) {
            try {
                await updateUserProfile({ department: dept });
                toast({ title: "Department Updated" });
            } catch (error: any) {
                toast({ variant: 'destructive', title: "Update Failed", description: error.message });
            }
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            router.push('/login');
        } catch (error: any) {
            toast({ variant: 'destructive', title: "Logout Failed", description: error.message });
        }
    };

    const getDepartmentName = (deptKey?: Department) => {
        if (!deptKey) return 'Not specified';
        const names: Record<Department, string> = {
            'process-access':     'Process Access',
            'production-access':  'Production Access',
            'quality-access':     'Quality Access',
            'all-control-access': 'All Control Access',
            'guest':              'Guest User',
        };
        return names[deptKey];
    };

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
                50%       { background-position: 100% 50%; }
            }
            @keyframes shimmer {
                0%   { background-position: -200% center; }
                100% { background-position:  200% center; }
            }
            .glass-card {
                background: rgba(255, 255, 255, 0.7);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.5);
                box-shadow: 0 8px 32px 0 rgba(167, 139, 250, 0.1);
            }
            .neon-border { position: relative; overflow: hidden; }
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
            .tier-card {
                transition: all 0.2s ease;
                border: 2px solid transparent;
            }
            .tier-card:hover { transform: translateY(-2px); }
            .tier-selected {
                border-color: transparent !important;
                background: linear-gradient(135deg, #A78BFA, #EC4899) !important;
                color: white !important;
                transform: translateY(-3px);
                box-shadow: 0 8px 24px rgba(167, 139, 250, 0.4);
            }
            .tier-selected p { color: rgba(255,255,255,0.85) !important; }
        `}</style>

        <div className="max-w-md mx-auto min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

            {/* Header with Physics Balls */}
            <div className="relative h-72 p-6 overflow-hidden select-none">
                <div className="absolute inset-0 z-0">
                    {balls.map(ball => (
                        <div key={ball.id}
                            onMouseDown={(e) => handleStart(e, ball.id)}
                            onTouchStart={(e) => handleStart(e, ball.id)}
                            className="absolute rounded-full cursor-grab active:cursor-grabbing"
                            style={{
                                width:      `${ball.size}px`,
                                height:     `${ball.size}px`,
                                left:       `${ball.x}px`,
                                top:        `${ball.y}px`,
                                background: ball.gradient,
                                boxShadow:  draggingRef.current?.id === ball.id ? '0 12px 48px rgba(0,0,0,0.3)' : '0 8px 32px rgba(0,0,0,0.2)',
                                transform:  draggingRef.current?.id === ball.id ? 'scale(1.1)' : 'scale(1)',
                                zIndex:     draggingRef.current?.id === ball.id ? 20 : 10,
                                touchAction: 'none',
                            }}
                        />
                    ))}
                </div>
                <Link href="/" className="absolute top-6 left-6 z-20 cursor-pointer glass-card p-2 rounded-full hover:bg-white/50 transition-all">
                    <ChevronLeft className="h-6 w-6 text-gray-700"/>
                </Link>
                <div className="flex flex-col items-center justify-center h-full relative z-10 pointer-events-none">
                    <div className="relative neon-border rounded-full p-1 pointer-events-auto">
                        <div className="relative">
                            <img
                                src={user.photoURL || 'https://placehold.co/128x128/E0E0E0/333?text=User'}
                                alt="Profile"
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

            {/* Name Card */}
            <div className="px-6 -mt-8 relative z-10">
                <div className="glass-card p-6 rounded-2xl neon-border">
                    <div className="flex items-center justify-center space-x-2 min-h-[36px]">
                        {isEditingName ? (
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="text"
                                    className="text-2xl font-bold text-gray-800 bg-white/50 text-center focus:ring-2 focus:ring-purple-400 h-10 border-purple-200"
                                    value={tempName}
                                    onChange={(e) => setTempName(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                                    autoFocus
                                />
                                <Button onClick={handleSaveName} size="sm" className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">Save</Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <h1 className="text-2xl font-bold text-gray-800">{user.displayName || ''}</h1>
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

                {/* ============================================================
                    💳 DONATION CARD
                ============================================================ */}
                <Dialog open={isDonationModalOpen} onOpenChange={(open) => {
                    setIsDonationModalOpen(open);
                    if (!open) resetDonation();
                }}>
                    <div className="relative overflow-hidden p-6 rounded-2xl text-white shadow-xl bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 neon-border">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s infinite' }}></div>
                        <div className="relative z-10 text-center">
                            <Sparkles className="w-8 h-8 mx-auto mb-2 text-yellow-200" />
                            <h3 className="text-2xl font-bold">Support Dairy Hub's Mission</h3>
                            <p className="text-sm mt-2 opacity-90">Aapka support app ko aur behtar banata hai!</p>
                            <DialogTrigger asChild>
                                <Button className="mt-4 bg-white text-rose-500 font-bold py-2 px-6 rounded-full hover:bg-rose-50 transition-all hover:scale-105 shadow-lg">
                                    <Heart className="mr-2 h-4 w-4"/> Donate Now
                                </Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <div className="flex justify-center mb-3">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
                                    <Gift className="w-7 h-7 text-rose-500"/>
                                </div>
                            </div>
                            <DialogTitle className="text-2xl font-bold text-center">Support Dairy Hub</DialogTitle>
                            <DialogDescription className="text-center">
                                आपका समर्थन हमें सशक्त बनाता है 🙏
                            </DialogDescription>
                        </DialogHeader>

                        {/* ---- SUCCESS SCREEN ---- */}
                        {paymentSuccess ? (
                            <div className="py-8 text-center space-y-4">
                                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
                                <h3 className="text-xl font-bold text-gray-800">Bahut Shukriya! 🎉</h3>
                                <p className="text-gray-600">
                                    Aapka <span className="font-bold text-rose-500">₹{selectedTier?.amount}</span> donation receive ho gaya.
                                </p>
                                {lastPaymentId && (
                                    <p className="text-xs text-gray-400 font-mono bg-gray-50 px-3 py-2 rounded-lg">
                                        Payment ID: {lastPaymentId}
                                    </p>
                                )}
                                <p className="text-rose-600 font-semibold text-lg">हर योगदान मायने रखता है! ❤️</p>
                                <Button onClick={resetDonation} variant="outline" className="mt-2 border-rose-200 text-rose-500 hover:bg-rose-50">
                                    Dobara Donate Karo
                                </Button>
                            </div>
                        ) : (
                            <div className="py-4 space-y-5">

                                {/* Tier cards */}
                                <div>
                                    <p className="text-sm font-semibold text-gray-700 mb-3 text-center">💝 Ek amount choose karo</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {DONATION_TIERS.map((tier) => (
                                            <button
                                                key={tier.amount}
                                                onClick={() => setSelectedTier(tier)}
                                                className={cn(
                                                    "tier-card p-4 rounded-2xl text-left bg-white border-2 border-rose-100 shadow-sm",
                                                    selectedTier?.amount === tier.amount && "tier-selected"
                                                )}
                                            >
                                                <span className="text-2xl block mb-1">{tier.emoji}</span>
                                                <span className={cn("text-xl font-bold block", selectedTier?.amount === tier.amount ? "text-white" : "text-gray-800")}>
                                                    {tier.label}
                                                </span>
                                                <p className="text-xs text-gray-500 mt-0.5">{tier.desc}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Pay button */}
                                <Button
                                    onClick={handleRazorpayPayment}
                                    disabled={isPaymentLoading || !selectedTier}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 text-base rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:scale-100"
                                >
                                    {isPaymentLoading ? (
                                        <><Loader2 className="mr-2 h-5 w-5 animate-spin"/> Payment khul raha hai...</>
                                    ) : selectedTier ? (
                                        <>❤️ Pay {selectedTier.label} via Razorpay</>
                                    ) : (
                                        <>Pehle amount select karo</>
                                    )}
                                </Button>

                                <p className="text-center text-xs text-gray-400">
                                    💳 Cards · 📱 UPI · 🏦 NetBanking · 👝 Wallets — sab supported
                                </p>

                                {/* Divider */}
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-px bg-gray-200"/>
                                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">YA SEEDHA UPI / QR</span>
                                    <div className="flex-1 h-px bg-gray-200"/>
                                </div>

                                {/* QR + UPI */}
                                <div className="text-center space-y-3">
                                    <div className="bg-white p-2 rounded-xl inline-block border-4 border-dashed border-rose-200">
                                        <Image
                                            src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_9565.jpg?alt=media&token=e56e6c1f-aeb5-4a6f-a2ec-f797e4060d5e"
                                            alt="QR Code" width={144} height={144}
                                            className="w-36 h-36 rounded-lg"
                                        />
                                    </div>
                                    <div className="bg-rose-50 p-3 rounded-xl border border-dashed border-rose-200 inline-flex items-center gap-2">
                                        <p className="font-mono text-base text-rose-700 font-semibold">9119005734-2@axl</p>
                                        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-500 hover:text-rose-500" onClick={handleCopyUpi}>
                                            <Copy className="h-3.5 w-3.5"/>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>

                {/* User Info Card */}
                <div className="glass-card p-6 rounded-2xl neon-border">
                    <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-purple-500" /> Your Information
                    </h3>
                    <div className="space-y-3">
                        {[
                            { icon: Mail,      gradient: 'from-blue-300 to-blue-500',     value: user.email },
                            { icon: User,      gradient: 'from-green-300 to-green-500',   value: user.gender || 'Not specified' },
                            { icon: Building2, gradient: 'from-purple-300 to-purple-500', value: getDepartmentName(user.department) },
                        ].map(({ icon: Icon, gradient, value }) => (
                            <div key={value} className="flex items-center glass-card p-3 rounded-xl">
                                <div className={`bg-gradient-to-br ${gradient} p-2 rounded-lg shadow-lg`}>
                                    <Icon className="h-5 w-5 text-white"/>
                                </div>
                                <span className="ml-4 text-gray-700 capitalize">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Menu */}
                <div className="glass-card rounded-2xl overflow-hidden neon-border">
                    <ul className="divide-y divide-gray-200">
                        <li onClick={() => setIsSettingsOpen(true)} className="flex justify-between items-center p-4 hover:bg-white/50 cursor-pointer transition-all">
                            <span className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="bg-gradient-to-br from-orange-300 to-orange-500 p-2 rounded-lg shadow-lg"><Settings className="w-5 h-5 text-white"/></div>
                                Settings
                            </span>
                            <ChevronRight className="h-5 w-5 text-gray-400"/>
                        </li>
                        <li onClick={() => setIsHelpOpen(true)} className="flex justify-between items-center p-4 hover:bg-white/50 cursor-pointer transition-all">
                            <span className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-2 rounded-lg shadow-lg"><HelpCircle className="w-5 h-5 text-white"/></div>
                                Help & Support
                            </span>
                            <ChevronRight className="h-5 w-5 text-gray-400"/>
                        </li>
                        <li onClick={handleLogout} className="flex justify-between items-center p-4 hover:bg-red-50 cursor-pointer transition-all">
                            <span className="flex items-center gap-3 text-red-500 font-medium">
                                <div className="bg-gradient-to-br from-red-300 to-red-500 p-2 rounded-lg shadow-lg"><LogOut className="w-5 h-5 text-white"/></div>
                                Logout
                            </span>
                            <ChevronRight className="h-5 w-5 text-red-400"/>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Settings Dialog */}
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2"><Settings className="w-5 h-5"/>App Settings</DialogTitle>
                        <DialogDescription>Change your app preferences here.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">App Language</label>
                            <Select value={language} onValueChange={(v) => handleLanguageChange(v as 'en' | 'hi')}>
                                <SelectTrigger><SelectValue/></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="hi">Hinglish</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {!user.isAnonymous && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Department</label>
                                <Select value={user.department} onValueChange={(v) => handleDepartmentChange(v as Department)}>
                                    <SelectTrigger><SelectValue placeholder="Select Department"/></SelectTrigger>
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
                            <div className="flex items-center space-x-2 mb-4">
                                <Switch id="reading-mode-switch" checked={isEnabled} onCheckedChange={setIsEnabled}/>
                                <Label htmlFor="reading-mode-switch">Enable eye-friendly themes</Label>
                            </div>
                            {isEnabled && (
                                <TooltipProvider>
                                    <div className="flex justify-around items-center p-2 bg-muted rounded-lg">
                                        {themes.map((t) => (
                                            <Tooltip key={t.name}>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        variant="ghost" size="icon"
                                                        className={cn("w-8 h-8 rounded-full", theme === t.name ? 'ring-2 ring-primary ring-offset-2' : '')}
                                                        onClick={() => setTheme(t.name)}
                                                    >
                                                        <div className={cn("w-5 h-5 rounded-full border", t.color)}/>
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent side="bottom"><p>{t.label}</p></TooltipContent>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </TooltipProvider>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Help Dialog */}
            <Dialog open={isHelpOpen} onOpenChange={setIsHelpOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2"><HelpCircle className="w-5 h-5"/>Contact Support</DialogTitle>
                        <DialogDescription>Get help from our team.</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <a href="https://wa.me/9119005734" target="_blank" rel="noopener noreferrer" className="block">
                            <Button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white">
                                <MessageCircle className="mr-2 h-5 w-5"/>WhatsApp
                            </Button>
                        </a>
                        <a href="mailto:saurabhthakur8080@gmail.com" className="block">
                            <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white">
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
