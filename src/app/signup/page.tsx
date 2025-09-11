"use client";

import { useState, useEffect } from 'react'; // <<-- useEffect ko import karein
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { User, Mail, Lock, Binary, Loader2, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth, type Department } from '@/context/auth-context';

const formSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    gender: z.enum(['male', 'female', 'other'], { required_error: 'Please select a gender.' }),
    department: z.enum(['process-access', 'production-access', 'quality-access', 'all-control-access'], { required_error: 'Please select a department.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export default function SignUpPage() {
    const { toast } = useToast();
    const router = useRouter();
    // <<-- 1. User object ko context se lein
    const { signup, user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    // <<-- 2. useEffect ka istemal karein jo 'user' object par nazar rakhega
    useEffect(() => {
        // Jab 'user' object null se badal kar usmein data aa jaaye, tab redirect karo
        if (user) {
            router.push('/profile');
        }
    }, [user, router]);


    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            await signup(values.email, values.password, values.username, values.gender, values.department as Department);
            toast({
                title: 'Account Created!',
                description: "Welcome! You will be redirected shortly.",
            });
            // <<-- 3. Yahan se router.push hata dein. Ab yeh useEffect se handle hoga.
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: 'Sign Up Failed',
                description: error.message || 'An unexpected error occurred.',
            });
        } finally {
            setIsLoading(false);
        }
    }

    // Baaki ka poora JSX code waisa hi rahega...
    return (
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 m-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Dairy Hub</h1>
                    <p className="text-gray-500 mt-2">Create your account</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Aapke saare Form Fields yahan aayenge... poora form waisa hi rahega */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <FormControl>
                                            <Input placeholder="Username" {...field} className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:ring-pink-500 transition" />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <FormControl>
                                            <Input type="email" placeholder="Email Address" {...field} className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:ring-pink-500 transition" />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                     <div className="relative">
                                        <Binary className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:ring-pink-500 transition">
                                                    <SelectValue placeholder="Select Gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                                <FormItem>
                                     <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:ring-pink-500 transition">
                                                    <SelectValue placeholder="Select Department" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="process-access">Process Access</SelectItem>
                                                    <SelectItem value="production-access">Production Access</SelectItem>
                                                    <SelectItem value="quality-access">Quality Access</SelectItem>
                                                    <SelectItem value="all-control-access">All Control Access</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <FormControl>
                                            <Input type="password" placeholder="Password" {...field} className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:ring-pink-500 transition" />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div>
                            <Button type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 ease-in-out transform hover:scale-105"
                                    disabled={isLoading}>
                               {isLoading ? <Loader2 className="animate-spin" /> : 'Sign Up'}
                            </Button>
                        </div>
                    </form>
                </Form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Already have an account?
                        <Link href="/login" className="text-purple-600 hover:underline font-medium ml-1">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

