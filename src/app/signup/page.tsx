
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Lock, User, UserCheck, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useAuth, type Department } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { FactoryIcon, DepartmentIcon } from '@/components/icons';


const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  gender: z.enum(['male', 'female', 'other'], { errorMap: () => ({ message: "Gender is required." }) }),
  department: z.enum(['process-access', 'production-access', 'quality-access', 'all-control-access'], { errorMap: () => ({ message: "Department is required." }) })
});

type SignupFormValues = z.infer<typeof signupSchema>;


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
        },
    });

    const handleSignup: SubmitHandler<SignupFormValues> = async (data) => {
        setIsLoading(true);
        try {
            await signup(data.email, data.password, data.name, data.gender as 'male' | 'female' | 'other', data.department as Department);
            toast({
                title: 'Signup Successful!',
                description: 'Welcome! You can now log in.',
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
        <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 m-4 border relative">
                 <Link href="/" className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                 <div className="text-center mb-8">
                    <FactoryIcon className="w-20 h-20 text-primary mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        Join <span className="text-primary">Dairy Hub</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">Create your account</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSignup)} className="space-y-4">
                         <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <Input placeholder="e.g. xyz" {...field} className="pl-10" />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                         <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <Input type="email" placeholder="you@example.com" {...field} className="pl-10"/>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                            <Input type="password" placeholder="••••••••" {...field} className="pl-10"/>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                           <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                         <div className="relative">
                                              <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                              <SelectTrigger className="pl-10"><SelectValue placeholder="Select Gender" /></SelectTrigger>
                                         </div>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="department"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Department</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                         <div className="relative">
                                             <DepartmentIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                             <SelectTrigger className="pl-10"><SelectValue placeholder="Select Department" /></SelectTrigger>
                                         </div>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="process-access">Process</SelectItem>
                                        <SelectItem value="production-access">Production</SelectItem>
                                        <SelectItem value="quality-access">Quality</SelectItem>
                                        <SelectItem value="all-control-access">All Control</SelectItem>
                                    </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Create Account'}
                        </Button>
                    </form>
                </Form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary hover:underline font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

    
