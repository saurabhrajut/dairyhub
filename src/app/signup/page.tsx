"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, User, UserCheck, Loader2, ArrowLeft, Phone, DollarSign, Briefcase, Milk } from 'lucide-react';
import Link from 'next/link';
import { useAuth, type Department } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { FactoryIcon } from '@/components/icons';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  gender: z.enum(['male', 'female', 'other'], { errorMap: () => ({ message: "Gender is required." }) }),
  department: z.enum(['process-access', 'production-access', 'quality-access', 'all-control-access'], { errorMap: () => ({ message: "Department is required." }) }).default('all-control-access'),
  isExpert: z.boolean().default(false),
  expertFee: z.string().optional(),
  expertPhone: z.string().optional(),
  expertSpecialization: z.string().optional(),
  expertExperience: z.string().optional()
});

type SignupFormValues = z.infer<typeof signupSchema>;

const BG_VIDEO = '/Grok-Video-7F6A1000-EF08-4491-A4E4-8EFC91E61178.MOV';

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { signup } = useAuth();
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            gender: "male",
            department: "all-control-access",
            isExpert: false,
            expertFee: "500",
            expertPhone: "",
            expertSpecialization: "Dairy Technology",
            expertExperience: "5"
        },
    });

    const isExpertChecked = form.watch("isExpert");

    const handleSignup: SubmitHandler<SignupFormValues> = async (data) => {
        setIsLoading(true);
        try {
            // Register user locally in auth context
            await signup(
                data.email, 
                data.password, 
                data.name, 
                data.gender as 'male' | 'female' | 'other', 
                data.department as Department
            );

            // If checked as expert, sync with Firestore experts collection
            if (data.isExpert) {
                try {
                    const currentUserRaw = localStorage.getItem('dairy-hub-current-user');
                    if (currentUserRaw) {
                        const currentUser = JSON.parse(currentUserRaw);
                        const { firestore } = initializeFirebase();
                        const expertDocRef = doc(firestore, "experts", currentUser.uid);
                        
                        await setDoc(expertDocRef, {
                            name: data.name,
                            experience: Number(data.expertExperience) || 5,
                            fee: Number(data.expertFee) || 500,
                            specialization: data.expertSpecialization || "Dairy Technology",
                            role: "Certified Consultant",
                            photo: `https://placehold.co/150x150/E2E8F0/1e293b?text=${data.name.charAt(0).toUpperCase()}`,
                            status: 'online',
                            tags: [data.expertSpecialization || "Dairy Technology"],
                            phone: data.expertPhone || "",
                            email: data.email,
                            createdAt: new Date().toISOString()
                        });
                    }
                } catch (dbErr) {
                    console.error("Firestore expert sync error:", dbErr);
                }
            }

            toast({
                title: 'Signup Successful!',
                description: data.isExpert ? 'Account created and expert panel activated!' : 'Welcome! You can now log in.',
            });
            router.push('/');
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Signup Failed',
                description: error.code === 'auth/email-already-in-use' ? 'This email is already in use.' : (error.message || 'Please check your information and try again.'),
            });
        } finally {
            setIsLoading(false);
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

            {/* Signup Card Overlay (Centered) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-md px-4 sm:px-0">
                <div className="liquid-glass bg-white/[0.06] rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
                    <Link href="/login" className="absolute top-4 left-4 text-white/50 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    
                    <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-inner">
                            <Milk className="w-6 h-6 text-white fill-white/10" strokeWidth={1.5} />
                        </div>
                        <h1 className="text-xl font-bold text-white tracking-tight">
                            Join <span className="underline decoration-white/20">Dairy Hub</span>
                        </h1>
                        <p className="text-white/50 mt-1 text-[11px]">Create your account to access our digital dairy guide</p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSignup)} className="space-y-3.5 max-h-[55vh] overflow-y-auto pr-1">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-semibold text-white/80">Full Name</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                                <Input placeholder="e.g. Ramesh Kumar" {...field} className="pl-9 text-xs h-10 bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[10px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-semibold text-white/80">Email Address</FormLabel>
                                        <FormControl>
                                             <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                                <Input type="email" placeholder="you@example.com" {...field} className="pl-9 text-xs h-10 bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[10px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-semibold text-white/80">Password</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
                                                <Input type="password" placeholder="••••••••" {...field} className="pl-9 text-xs h-10 bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="text-[10px]" />
                                    </FormItem>
                                )}
                            />
                            
                            <div className="grid grid-cols-1 gap-3.5">
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-xs font-semibold text-white/80">Gender</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <div className="relative">
                                                        <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 z-10" />
                                                        <SelectTrigger className="pl-9 text-xs h-10 bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-white/20 focus:ring-0 focus:ring-offset-0">
                                                            <SelectValue placeholder="Gender" />
                                                        </SelectTrigger>
                                                    </div>
                                                </FormControl>
                                                <SelectContent className="bg-zinc-900 border-zinc-800 text-white text-xs">
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="text-[10px]" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Expert Registration Toggle */}
                            <FormField
                                control={form.control}
                                name="isExpert"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-white/10 p-3 bg-white/5">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="border-white/30 text-white"
                                            />
                                        </FormControl>
                                        <div className="space-y-0.5 leading-none">
                                            <FormLabel className="text-xs font-bold text-white">Sign up as an Expert</FormLabel>
                                            <FormDescription className="text-[9px] text-white/60">
                                                Offer paid consulting and help other users.
                                            </FormDescription>
                                        </div>
                                    </FormItem>
                                )}
                            />

                            {/* Conditional Expert Fields */}
                            {isExpertChecked && (
                                <div className="space-y-3.5 border border-white/10 p-3 rounded-xl bg-white/5">
                                    <h3 className="text-xs font-bold text-white flex items-center gap-1">
                                        <Briefcase className="w-3.5 h-3.5 text-white/80" /> Expert Profile Setup
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3.5">
                                        <FormField
                                            control={form.control}
                                            name="expertExperience"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[10px] font-semibold text-white/80">Experience (Years)</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" {...field} className="text-xs h-9 bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                                    </FormControl>
                                                    <FormMessage className="text-[10px]" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="expertFee"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[10px] font-semibold text-white/80">Fee (₹/hr)</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <DollarSign className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40 w-3.5 h-3.5" />
                                                            <Input type="number" {...field} className="pl-8 text-xs h-9 bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage className="text-[10px]" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="expertPhone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-semibold text-white/80">WhatsApp / Phone Number</FormLabel>
                                                <FormControl>
                                                    <div className="relative">
                                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-3.5 h-3.5" />
                                                        <Input type="tel" placeholder="+91..." {...field} className="pl-9 text-xs h-9 bg-white/5 border-white/10 text-white placeholder-white/30 focus:bg-white/10 focus:border-white/20 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="expertSpecialization"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-semibold text-white/80">Specialization</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="text-xs h-9 bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-white/20 focus:ring-0 focus:ring-offset-0">
                                                            <SelectValue placeholder="Select Specialization" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white text-xs">
                                                        <SelectItem value="Dairy Technology">Dairy Technology</SelectItem>
                                                        <SelectItem value="Food Safety & Quality">Food Safety & Quality</SelectItem>
                                                        <SelectItem value="Food Processing">Food Processing</SelectItem>
                                                        <SelectItem value="Milk Procurement">Milk Procurement</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="text-[10px]" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="w-full bg-white text-black font-semibold py-2.5 rounded-full hover:bg-white/90 transition-all flex items-center justify-center text-xs font-bold shadow-lg shadow-black/10" 
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Create Account'}
                            </button>
                        </form>
                    </Form>

                    <div className="text-center mt-4">
                        <p className="text-xs text-white/60">
                            Already have an account?{' '}
                            <Link href="/login" className="text-white hover:underline font-semibold ml-1">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
