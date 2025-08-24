"use client";

import { useState } from 'react';
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
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { User, Mail, Lock, Binary, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';

const formSchema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    gender: z.enum(['male', 'female', 'other'], { required_error: 'Please select a gender.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export default function SignUpPage() {
    const { toast } = useToast();
    const router = useRouter();
    const { signup } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            await signup(values.email, values.password, values.username, values.gender);
            toast({
                title: 'Account Created!',
                description: "This is a demo. No real account was created.",
            });
            router.push('/login');
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

    return (
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 m-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Dairy Hub</h1>
                    <p className="text-gray-500 mt-2">Create your colorful account</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                     <div className="relative">
                                        <Binary className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
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
