
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, type UserProfile } from "@/context/auth-context";
import { useSubscription, type SubscriptionPlan } from "@/context/subscription-context";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User as UserIcon, Mail, Cake, VenetianMask, Crown, CalendarClock, ArrowLeft } from 'lucide-react';
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { SubscriptionModal } from "@/components/subscription-modal";
import { useToast } from "@/hooks/use-toast";

const planNames: { [key: string]: string } = {
    '7-days': '7-Day Pass',
    '1-month': '1-Month Plan',
    '6-months': '6-Month Plan',
    'yearly': 'Yearly Plan',
    'lifetime': 'Lifetime Plan',
};

const ProfileDetail = ({ icon: Icon, label, value, loading }: { icon: React.ElementType, label: string, value: string | number | null | undefined, loading: boolean }) => {
    if (loading) {
        return (
            <div className="flex items-center gap-3 text-sm">
                <Icon className="w-5 h-5 text-muted-foreground" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-5 w-32" />
            </div>
        )
    }
    if (!value) return null;
    return (
         <div className="flex items-center gap-3 text-sm">
            <Icon className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-muted-foreground min-w-[80px]">{label}:</span>
            <span className="text-foreground font-semibold">{value}</span>
        </div>
    )
};


export default function ProfilePage() {
    const { user, userProfile, loading: authLoading } = useAuth();
    const { isPro, subscription } = useSubscription();
    const { language, setLanguage } = useLanguage();
    const router = useRouter();
    const { toast } = useToast();
    const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
          router.replace("/login");
        }
      }, [authLoading, user, router]);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang as 'en' | 'hi');
        toast({
            title: "Language Updated",
            description: `Language has been set to ${lang === 'hi' ? 'Hinglish' : 'English'}.`,
        });
    };

    if (authLoading || !user || !userProfile) {
        return <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-background"><p>Loading Profile...</p></div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <Button variant="ghost" onClick={() => router.push('/')} className="mb-4">
                    <ArrowLeft className="mr-2" />
                    Back to Home
                </Button>

                <Card className="shadow-xl overflow-hidden">
                     <div className="bg-gradient-to-r from-primary to-indigo-500 p-8">
                         <div className="flex items-center gap-6">
                            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                                <AvatarImage src={userProfile?.photoURL ?? undefined} alt={userProfile?.name ?? 'User'} />
                                <AvatarFallback><UserIcon className="w-10 h-10" /></AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-3xl font-bold text-white font-headline">{userProfile?.name}</h1>
                                <p className="text-primary-foreground/80">{userProfile?.email}</p>
                            </div>
                        </div>
                    </div>

                    <CardContent className="p-6 space-y-8">
                        {/* Profile Information Section */}
                        <section>
                            <h3 className="text-lg font-semibold text-primary font-headline mb-4">Profile Information</h3>
                            <div className="space-y-4">
                                <ProfileDetail icon={UserIcon} label="Name" value={userProfile.name} loading={authLoading} />
                                <ProfileDetail icon={Mail} label="Email" value={userProfile.email} loading={authLoading} />
                                <ProfileDetail icon={Cake} label="Age" value={userProfile.age} loading={authLoading} />
                                <ProfileDetail icon={VenetianMask} label="Gender" value={userProfile.gender} loading={authLoading} />
                            </div>
                        </section>

                        {/* Subscription Status Section */}
                        <section>
                            <h3 className="text-lg font-semibold text-primary font-headline mb-4">Subscription Status</h3>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                {isPro && subscription ? (
                                    <div className="space-y-3">
                                        <ProfileDetail icon={Crown} label="Current Plan" value={planNames[subscription.plan]} loading={authLoading} />
                                        <ProfileDetail 
                                            icon={CalendarClock} 
                                            label="Expires On" 
                                            value={subscription.expiryDate ? format(new Date(subscription.expiryDate), 'PPP') : 'Never'} 
                                            loading={authLoading}
                                        />
                                        <Button size="sm" className="mt-2" onClick={() => setIsSubscriptionModalOpen(true)}>Manage Subscription</Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <p className="text-muted-foreground">You are on the free plan.</p>
                                        <Button size="sm" onClick={() => setIsSubscriptionModalOpen(true)}>Upgrade to Pro</Button>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Settings Section */}
                        <section>
                            <h3 className="text-lg font-semibold text-primary font-headline mb-4">Settings</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="language-select">App Language</Label>
                                     <Select value={language} onValueChange={handleLanguageChange}>
                                      <SelectTrigger id="language-select">
                                        <SelectValue placeholder="Select a language" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="hi">Hinglish</SelectItem>
                                        <SelectItem value="en">English</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-xs text-muted-foreground mt-2">Changes the language for all informational guides and text content within the app.</p>
                                </div>
                            </div>
                        </section>

                    </CardContent>
                </Card>
            </div>
            <SubscriptionModal isOpen={isSubscriptionModalOpen} setIsOpen={setIsSubscriptionModalOpen} />
        </div>
    );
}
