
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { auth, googleProvider } from '@/lib/firebase';
import { 
  signInWithPopup,
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

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,34.556,44,29.86,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

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
  
  const handleGoogleSignIn = async () => {
    setLoading('google');
    try {
      await signInWithPopup(auth, googleProvider);
      // The onAuthStateChanged listener in AuthProvider will handle the redirect
      // and profile creation.
      toast({ title: 'Success', description: 'Signed in successfully with Google!' });
      router.push('/');
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      toast({ variant: 'destructive', title: 'Error', description: "Could not complete Google sign-in. Please try again." });
      setLoading(null);
    }
  };
  
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
      
      // The onAuthStateChanged listener in AuthProvider will handle profile creation.
      // We just need to update the profile display name here.
      await updateProfile(user, { displayName: values.name });

      // We can also optimistically set the user data in our context
      // This part can be removed if onAuthStateChanged handles it reliably
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
                <CardTitle className="font-headline text-3xl">Welcome to Dairy Hub</CardTitle>
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

          <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or</span></div>
          </div>

          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={!!loading}>
            {loading === 'google' ? 'Redirecting...' : <><GoogleIcon /> Sign in with Google</>}
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}
