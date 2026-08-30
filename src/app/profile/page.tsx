"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/auth-context";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useLanguage } from "@/context/language-context";
import {
  Heart,
  Mail,
  MessageCircle,
  ChevronLeft,
  LogOut,
  Settings,
  HelpCircle,
  User,
  Loader2,
  Building2,
  ChevronRight,
  BookOpen,
  Droplet,
  Moon,
  Sun,
  Gift,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Star,
  MessageSquarePlus,
  Video,
  Camera,
  Edit3,
  Globe
} from "lucide-react";
import type { Department } from '@/context/auth-context';
import { useReadingMode } from "@/context/reading-mode-context";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { OnboardingTourModal } from "@/components/onboarding-tour-modal";
import { UserFeedbackModal } from "@/components/user-feedback-modal";
import { TutorialVideosModal } from "@/components/tutorial-videos-modal";
import { BottomNav } from "@/components/bottom-nav";

// ============================================================
// 🔑 RAZORPAY CONFIG
// ============================================================
const RAZORPAY_KEY_ID = "rzp_live_RaIS0kmA42YM68";

const DONATION_TIERS = [
  { amount: 50,   label: '₹50',  emoji: '✨', desc: 'Starter Support' },
  { amount: 100,  label: '₹100', emoji: '🌱', desc: 'Community Supporter' },
  { amount: 500,  label: '₹500', emoji: '💪', desc: 'Pro Contributor' },
  { amount: 1000, label: '₹1K',  emoji: '🏆', desc: 'Champion Sponsor' },
];

const themes = [
  { name: 'default', label: 'Default', color: 'bg-gray-400',   icon: Sun      },
  { name: 'sepia',   label: 'Sepia',   color: 'bg-[#C6B8A3]',  icon: BookOpen },
  { name: 'slate',   label: 'Slate',   color: 'bg-slate-600',  icon: Moon     },
  { name: 'paper',   label: 'Paper',   color: 'bg-[#F8F5E9]',  icon: BookOpen },
  { name: 'mint',    label: 'Mint',    color: 'bg-emerald-200', icon: Droplet  },
  { name: 'night',   label: 'Night',   color: 'bg-[#1E2024]',  icon: Moon     },
  { name: 'rose',    label: 'Rose',    color: 'bg-[#F4D0D0]',  icon: Sun      },
  { name: 'forest',  label: 'Forest',  color: 'bg-[#2D4A3E]',  icon: Droplet  },
  { name: 'cream',   label: 'Cream',   color: 'bg-[#FFFBF0]',  icon: BookOpen },
] as const;

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) { resolve(true); return; }
    const existing = document.getElementById('razorpay-script');
    if (existing) {
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
  const [isTourOpen, setIsTourOpen]                   = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen]           = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen]         = useState(false);
  const [isEditingName, setIsEditingName]             = useState(false);
  const [tempName, setTempName]                       = useState('');

  const [selectedTier, setSelectedTier]         = useState<typeof DONATION_TIERS[0] | null>(null);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess]     = useState(false);
  const [lastPaymentId, setLastPaymentId]       = useState('');

  useEffect(() => {
    if (!loading && !user) router.push('/login');
    else if (user) setTempName(user.displayName || '');
  }, [user, loading, router]);

  const handleRazorpayPayment = async () => {
    if (!selectedTier) {
      toast({ variant: 'destructive', title: 'Select an Amount', description: 'Please select a donation tier first.' });
      return;
    }

    setIsPaymentLoading(true);
    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      toast({ variant: 'destructive', title: 'Payment Error', description: 'Failed to load payment gateway. Please check your internet connection.' });
      setIsPaymentLoading(false);
      return;
    }

    const donorName = user?.displayName?.trim() || 'Dairy Hub User';

    const options = {
      key:      RAZORPAY_KEY_ID,
      amount:   selectedTier.amount * 100,
      currency: 'INR',
      name: donorName,
      description: 'Thanks from Dairy Hub Team',
      image: 'https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/EF9A49FE-8131-4DD5-9311-7FC058B1FD0E%20(1).png?alt=media&token=8b9c0609-762c-4e7b-bcfc-94b65976b54c',
      prefill: {
        name:  donorName,
        email: user?.email || '',
      },
      readonly: {
        name:  true,
        email: true,
      },
      notes: {
        userId:    user?.uid   || 'anonymous',
        donorName: donorName,
        email:     user?.email || '',
      },
      config: {
        display: {
          language: 'en',
          hide: [
            { key: 'contact' },
          ],
        },
      },
      theme: { color: '#2563EB' },
      handler: function (response: any) {
        setLastPaymentId(response.razorpay_payment_id);
        setPaymentSuccess(true);
        setIsPaymentLoading(false);
        toast({
          title: `🎉 ₹${selectedTier.amount} donation received!`,
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
      },
      modal: {
        ondismiss: () => {
          setIsPaymentLoading(false);
          toast({ title: 'Payment Cancelled', description: 'You closed the payment window.' });
        },
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
          description: response.error.description || 'Something went wrong. Please try again.',
        });
      });
      rzp.open();
    } catch {
      setIsPaymentLoading(false);
      toast({ variant: 'destructive', title: 'Error', description: 'Could not open payment window.' });
    }
  };

  const resetDonation = () => {
    setPaymentSuccess(false);
    setSelectedTier(null);
    setLastPaymentId('');
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

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error: any) {
      toast({ variant: 'destructive', title: "Logout Failed", description: error.message });
    }
  };

  const getDepartmentName = (deptKey?: Department) => {
    if (!deptKey) return 'Dairy & Food Technology';
    const names: Record<Department, string> = {
      'process-access':     'Dairy Processing & Operations',
      'production-access':  'Plant Production & Operations',
      'quality-access':     'QA/QC Lab & Food Safety',
      'all-control-access': 'Full Plant Control Access',
      'guest':              'Guest Practitioner',
    };
    return names[deptKey];
  };

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <Loader2 className="animate-spin h-9 w-9 text-blue-600" />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto min-h-screen pb-24 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 text-slate-900 relative overflow-hidden font-sans">
        
        {/* LIGHT ELEGANT HERO HEADER */}
        <div className="relative pt-6 pb-8 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-3xl shadow-lg">
          
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/" 
              className="p-2.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all active:scale-95 flex items-center justify-center shadow-inner"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Link>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              Official Member
            </div>

            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-all active:scale-95 flex items-center justify-center shadow-inner"
            >
              <Settings className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* AVATAR & USER PROFILE INFO */}
          <div className="flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-24 h-24 rounded-3xl p-1 bg-white/30 backdrop-blur-sm shadow-xl">
                <img
                  src={user.photoURL || 'https://placehold.co/128x128/3B82F6/FFF?text=User'}
                  alt="Profile"
                  className="w-full h-full rounded-[20px] object-cover bg-white border-2 border-white shadow-md"
                />
              </div>

              {!user.isAnonymous && (
                <label 
                  htmlFor="fileInput" 
                  className="absolute -bottom-1 -right-1 bg-white hover:bg-slate-100 text-blue-600 p-2 rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-110 border border-blue-100"
                >
                  <Camera className="w-3.5 h-3.5" />
                </label>
              )}
              <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            {/* Editable Name & Email */}
            <div className="mt-3.5 space-y-1 w-full max-w-xs">
              {isEditingName ? (
                <div className="flex items-center justify-center gap-2">
                  <Input
                    type="text"
                    className="text-center font-bold text-base bg-white text-slate-900 h-9 rounded-xl focus-visible:ring-white border-none shadow-md"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    autoFocus
                  />
                  <Button onClick={handleSaveName} size="sm" className="bg-white text-blue-700 hover:bg-slate-100 font-bold h-9 px-3 rounded-xl text-xs shadow-md">
                    Save
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-1.5">
                  <h1 className="text-lg font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
                    {user.displayName || 'Dairy Practitioner'}
                  </h1>
                  {!user.isAnonymous && (
                    <button 
                      onClick={() => { setIsEditingName(true); setTempName(user.displayName || ''); }}
                      className="text-blue-100 hover:text-white p-1 transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              <p className="text-xs text-blue-100 font-medium truncate">{user.email}</p>
              
              <div className="pt-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md text-[11px] font-semibold text-white shadow-inner border border-white/20">
                  <Building2 className="w-3.5 h-3.5 text-blue-200" />
                  {getDepartmentName(user.department)}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN BODY OPTIONS */}
        <div className="p-5 space-y-4">

          {/* ACCOUNT CREDENTIALS CARD */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="font-extrabold text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" /> Professional Credentials
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2 font-medium">
                  <Mail className="w-4 h-4 text-blue-500" /> Registered Email
                </span>
                <span className="font-bold text-slate-800 truncate max-w-[180px]">{user.email}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2 font-medium">
                  <Globe className="w-4 h-4 text-teal-500" /> App Language
                </span>
                <span className="font-bold text-blue-600 uppercase">{language === 'hi' ? 'Hinglish' : 'English'}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between">
                <span className="text-slate-500 flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Access Tier
                </span>
                <span className="font-extrabold text-emerald-600">100% Free Lifetime</span>
              </div>
            </div>
          </div>

          {/* APP OPTIONS MENU CARD */}
          <div className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="divide-y divide-slate-100">
              
              <button 
                onClick={() => setIsTutorialsOpen(true)} 
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors">
                      Watch Video Tutorials 📺
                    </h4>
                    <p className="text-[10px] text-slate-500">Step-by-step guides for plant machinery</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button 
                onClick={() => setIsFeedbackOpen(true)} 
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <MessageSquarePlus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 group-hover:text-indigo-600 transition-colors">
                      User Feedback & Suggestions 💬
                    </h4>
                    <p className="text-[10px] text-slate-500">Request new calculators & plant modules</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button 
                onClick={() => setIsSettingsOpen(true)} 
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 group-hover:text-amber-600 transition-colors">
                      App Preferences & Eye Protection
                    </h4>
                    <p className="text-[10px] text-slate-500">Eye-protection themes & Hinglish language</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=in.co.dairyhub', '_blank')} 
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-yellow-50 text-yellow-600 border border-yellow-100">
                    <Star className="w-4 h-4 fill-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 group-hover:text-yellow-600 transition-colors">
                      Rate Dairy Hub on Play Store ⭐
                    </h4>
                    <p className="text-[10px] text-slate-500">Support fellow dairy technologists</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button 
                onClick={() => setIsTourOpen(true)} 
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 group-hover:text-purple-600 transition-colors">
                      Interactive App Walkthrough
                    </h4>
                    <p className="text-[10px] text-slate-500">Replay guided tour of all dairy plant modules</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button 
                onClick={() => setIsHelpOpen(true)} 
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 group-hover:text-cyan-600 transition-colors">
                      Help & Direct Support
                    </h4>
                    <p className="text-[10px] text-slate-500">Contact team via WhatsApp or Email</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button 
                onClick={handleLogout} 
                className="w-full flex items-center justify-between p-4 hover:bg-rose-50 text-left transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                    <LogOut className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-rose-600 group-hover:text-rose-700 transition-colors">
                      Log Out Account
                    </h4>
                    <p className="text-[10px] text-slate-500">Sign out securely from this device</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>
          </div>

          {/* SUPPORTER BANNER (DONATION MODAL TRIGGER) */}
          <Dialog open={isDonationModalOpen} onOpenChange={(open) => {
            setIsDonationModalOpen(open);
            if (!open) resetDonation();
          }}>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-rose-600 text-white shadow-md space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xs text-white leading-tight">
                    Support Dairy Hub Free Mission
                  </h3>
                  <p className="text-[11px] text-pink-100 mt-0.5">
                    100% free app for all dairy students, lab technicians & plant engineers.
                  </p>
                </div>
              </div>

              <DialogTrigger asChild>
                <Button className="w-full bg-white text-rose-600 hover:bg-pink-50 font-extrabold text-xs h-9 rounded-xl shadow-md border-none">
                  <Heart className="mr-2 h-4 w-4 fill-rose-600" /> Support Community Development
                </Button>
              </DialogTrigger>
            </div>

            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white text-slate-900 border-slate-200">
              <DialogHeader>
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                    <Gift className="w-7 h-7 text-rose-500"/>
                  </div>
                </div>
                <DialogTitle className="text-xl font-bold text-center text-slate-900">Support Dairy Hub</DialogTitle>
                <DialogDescription className="text-center text-slate-500 text-xs">
                  Your voluntary support empowers us to build better free tools for the dairy community 🙏
                </DialogDescription>
              </DialogHeader>

              {paymentSuccess ? (
                <div className="py-6 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-lg font-bold text-slate-900">Thank You So Much! 🎉</h3>
                  <p className="text-xs text-slate-600">
                    Your contribution of <span className="font-bold text-rose-600">₹{selectedTier?.amount}</span> has been received.
                  </p>
                  {lastPaymentId && (
                    <p className="text-[11px] text-slate-500 font-mono bg-slate-50 p-2 rounded-lg border border-slate-200">
                      Payment ID: {lastPaymentId}
                    </p>
                  )}
                  <Button onClick={resetDonation} variant="outline" className="mt-2 border-slate-300 text-slate-700 hover:bg-slate-100">
                    Donate Again
                  </Button>
                </div>
              ) : (
                <div className="py-2 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-700 mb-3 text-center">💝 Select Support Amount</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {DONATION_TIERS.map((tier) => (
                        <button
                          key={tier.amount}
                          onClick={() => setSelectedTier(tier)}
                          className={cn(
                            "p-3 rounded-xl text-left bg-slate-50 border border-slate-200 transition-all",
                            selectedTier?.amount === tier.amount && "bg-rose-500 border-rose-600 text-white shadow-md"
                          )}
                        >
                          <span className="text-xl block mb-1">{tier.emoji}</span>
                          <span className={cn("text-base font-extrabold block", selectedTier?.amount === tier.amount ? "text-white" : "text-slate-900")}>
                            {tier.label}
                          </span>
                          <p className={cn("text-[10px] mt-0.5 line-clamp-1", selectedTier?.amount === tier.amount ? "text-rose-100" : "text-slate-500")}>
                            {tier.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleRazorpayPayment}
                    disabled={isPaymentLoading || !selectedTier}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs h-11 rounded-xl shadow-md disabled:opacity-50"
                  >
                    {isPaymentLoading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Opening Gateway...</>
                    ) : selectedTier ? (
                      <>❤️ Pay {selectedTier.label} via Razorpay</>
                    ) : (
                      <>Select an amount first</>
                    )}
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>

        </div>

        {/* SETTINGS DIALOG */}
        <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DialogContent className="max-w-md bg-white text-slate-900 border-slate-200">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-slate-900">
                <Settings className="w-5 h-5 text-blue-600"/> App Preferences
              </DialogTitle>
              <DialogDescription className="text-slate-500 text-xs">Customize your reading themes & language.</DialogDescription>
            </DialogHeader>

            <div className="py-3 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">App Language</label>
                <Select value={language} onValueChange={(v) => handleLanguageChange(v as 'en' | 'hi')}>
                  <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-900 h-10 rounded-xl">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent className="bg-white border-slate-200 text-slate-900">
                    <SelectItem value="en">English (Official)</SelectItem>
                    <SelectItem value="hi">Hinglish (Hindi + English)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Reading Mode & Themes</Label>
                <div className="flex items-center space-x-2 mb-3">
                  <Switch id="reading-mode-switch" checked={isEnabled} onCheckedChange={setIsEnabled}/>
                  <Label htmlFor="reading-mode-switch" className="text-xs text-slate-600">Enable eye-protection reading themes</Label>
                </div>

                {isEnabled && (
                  <TooltipProvider>
                    <div className="flex justify-around items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      {themes.map((t) => (
                        <Tooltip key={t.name}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost" 
                              size="icon"
                              className={cn("w-8 h-8 rounded-full", theme === t.name ? 'ring-2 ring-blue-600 ring-offset-2 ring-offset-white' : '')}
                              onClick={() => setTheme(t.name)}
                            >
                              <div className={cn("w-5 h-5 rounded-full border border-slate-300", t.color)}/>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" className="bg-slate-900 text-white text-[10px]">
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

        {/* INTERACTIVE TOUR MODAL */}
        <OnboardingTourModal isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />

        {/* HELP DIALOG */}
        <Dialog open={isHelpOpen} onOpenChange={setIsHelpOpen}>
          <DialogContent className="max-w-md bg-white text-slate-900 border-slate-200">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-slate-900"><HelpCircle className="w-5 h-5 text-blue-600"/>Contact Support</DialogTitle>
              <DialogDescription className="text-slate-500 text-xs">Direct support from Dairy Hub technical team.</DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-3">
              <a href="https://wa.me/9119005734" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 rounded-xl">
                  <MessageCircle className="mr-2 h-5 w-5"/> WhatsApp Direct Support
                </Button>
              </a>
              <a href="mailto:saurabhthakur8080@gmail.com" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 rounded-xl">
                  <Mail className="mr-2 h-5 w-5"/> Email Support
                </Button>
              </a>
            </div>
          </DialogContent>
        </Dialog>

        {/* USER FEEDBACK MODAL */}
        <UserFeedbackModal open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />

        {/* VIDEO TUTORIALS MODAL */}
        <TutorialVideosModal open={isTutorialsOpen} onOpenChange={setIsTutorialsOpen} />

        {/* BOTTOM NAVIGATION */}
        <BottomNav activeTab="profile" />

      </div>
    </>
  );
}
