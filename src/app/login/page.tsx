
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { auth } from '@/lib/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Milk, Mail, Key, User as UserIcon, Cake, VenetianMask } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/auth-context';


const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.coerce.number().min(1, { message: "Age is required." }).max(120),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select a gender." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});


export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { setUserData } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", age: undefined, gender: undefined, email: "", password: "" },
  });
  
  const onEmailSignIn = async (values: z.infer<typeof signInSchema>) => {
    setLoading('email_signin');
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({ title: 'Success', description: 'Signed in successfully!' });
      router.push('/');
    } catch (error: any) {
      console.error("Email Sign-In Error:", error);
      toast({ variant: 'destructive', title: 'Sign-in Failed', description: error.message });
    } finally {
        setLoading(null);
    }
  };

  const onEmailSignUp = async (values: z.infer<typeof signUpSchema>) => {
    setLoading('email_signup');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;
      
      // Update the user's profile in Firebase Auth
      await updateProfile(user, { displayName: values.name });

      // Create the user's profile document in Firestore via AuthProvider
      if (setUserData) {
        await setUserData(user, {
            name: values.name,
            age: values.age,
            gender: values.gender
        });
      }

      toast({ title: `Welcome, ${values.name}!`, description: 'Your account has been created.' });
      router.push('/');
    } catch (error: any) {
      console.error("Email Sign-Up Error:", error);
      toast({ variant: 'destructive', title: 'Sign-up Failed', description: error.message });
    } finally {
        setLoading(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-2xl overflow-hidden">
        <div className="bg-primary/10 p-6">
            <Milk className="w-12 h-12 text-primary mx-auto" />
            <CardHeader className="text-center p-0 pt-4">
                <CardTitle className="font-headline text-3xl">Welcome to DhenuGuide</CardTitle>
                <CardDescription>Sign in or create an account</CardDescription>
            </CardHeader>
        </div>
        <CardContent className="p-6">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin" className="space-y-4 pt-4">
              <Form {...signInForm}>
                <form onSubmit={signInForm.handleSubmit(onEmailSignIn)} className="space-y-4">
                  <FormField
                    control={signInForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                         <div className='relative'>
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input placeholder="Email address" {...field} className="pl-10" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={signInForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                         <div className='relative'>
                            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input type="password" placeholder="Password" {...field} className="pl-10" />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={!!loading}>
                      {loading === 'email_signin' ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="signup" className="pt-4">
              <Form {...signUpForm}>
                <form onSubmit={signUpForm.handleSubmit(onEmailSignUp)} className="space-y-4">
                   <FormField control={signUpForm.control} name="name" render={({ field }) => (
                      <FormItem><div className='relative'><UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input placeholder="Full Name" {...field} className="pl-10"/></div><FormMessage /></FormItem>
                    )}/>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={signUpForm.control} name="age" render={({ field }) => (
                        <FormItem><div className='relative'><Cake className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input type="number" placeholder="Age" {...field} onChange={e => field.onChange(parseInt(e.target.value, 10) || null)} className="pl-10"/></div><FormMessage /></FormItem>
                      )}/>
                       <FormField control={signUpForm.control} name="gender" render={({ field }) => (
                        <FormItem className='space-y-2'>
                          <FormLabel className='flex items-center gap-2 text-muted-foreground text-sm'><VenetianMask className="h-5 w-5" /> Gender</FormLabel>
                          <FormControl>
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-2 items-center">
                              <FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="male" /></FormControl><FormLabel className="font-normal">Male</FormLabel></FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="female" /></FormControl><FormLabel className="font-normal">Female</FormLabel></FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="other" /></FormControl><FormLabel className="font-normal">Other</FormLabel></FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}/>
                    </div>
                   <FormField control={signUpForm.control} name="email" render={({ field }) => (
                      <FormItem><div className='relative'><Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input placeholder="Email Address" {...field} className="pl-10"/></div><FormMessage /></FormItem>
                    )}/>
                   <FormField control={signUpForm.control} name="password" render={({ field }) => (
                      <FormItem><div className='relative'><Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input type="password" placeholder="Password (min. 6 characters)" {...field} className="pl-10"/></div><FormMessage /></FormItem>
                    )}/>
                  <Button type="submit" className="w-full" disabled={!!loading}>
                    {loading === 'email_signup' ? 'Creating Account...' : 'Sign Up'}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
