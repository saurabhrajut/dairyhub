"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Milk, Smartphone, Mail, Key } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,34.556,44,29.86,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': () => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
        'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
        }
      });
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading('google');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({ title: 'Success', description: "Signed in successfully with Google." });
      router.push('/');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      toast({ variant: 'destructive', title: 'Error', description: "Could not sign in with Google. Please try again." });
      setLoading(null);
    }
  };

  const handlePhoneSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading('phone');
    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
      setConfirmationResult(result);
      setOtpSent(true);
      toast({ title: 'OTP Sent', description: "Please check your phone for the OTP." });
    } catch (error) {
      console.error('Phone Sign-In Error:', error);
      toast({ variant: 'destructive', title: 'Error', description: "Failed to send OTP. Please check the phone number or try again." });
    } finally {
      setLoading(null);
    }
  };

  const handleOtpVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmationResult) return;
    setLoading('otp');
    try {
      await confirmationResult.confirm(otp);
      toast({ title: 'Success', description: "Phone number verified successfully." });
      router.push('/');
    } catch (error) {
      console.error('OTP Verification Error:', error);
      toast({ variant: 'destructive', title: 'Error', description: "Invalid OTP. Please try again." });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div id="recaptcha-container"></div>
      <Card className="w-full max-w-sm shadow-2xl overflow-hidden">
        <div className="bg-primary/10 p-6">
            <Milk className="w-12 h-12 text-primary mx-auto" />
            <CardHeader className="text-center p-0 pt-4">
                <CardTitle className="font-headline text-3xl">Welcome to Dairy Hub</CardTitle>
                <CardDescription>Sign in to continue</CardDescription>
            </CardHeader>
        </div>
        <CardContent className="p-6 space-y-4">
          {!otpSent ? (
            <>
              <form onSubmit={handlePhoneSignIn} className="space-y-4">
                <div className='relative'>
                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} 
                        placeholder="10-digit mobile number" 
                        className="pl-10"
                        required
                    />
                </div>
                <Button type="submit" className="w-full" disabled={!!loading || phone.length !== 10}>
                  {loading === 'phone' ? 'Sending OTP...' : 'Sign in with Phone'}
                </Button>
              </form>

              <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
              </div>

              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={!!loading}>
                {loading === 'google' ? 'Signing in...' : <><GoogleIcon /> Sign in with Google</>}
              </Button>
            </>
          ) : (
            <form onSubmit={handleOtpVerify} className="space-y-4">
              <p className="text-sm text-center text-muted-foreground">Enter the OTP sent to +91 {phone}</p>
              <div className='relative'>
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                    type="text" 
                    value={otp} 
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))} 
                    placeholder="6-digit OTP" 
                    className="pl-10 text-center tracking-[0.5em]"
                    maxLength={6}
                    required
                />
              </div>
              <Button type="submit" className="w-full" disabled={!!loading || otp.length !== 6}>
                {loading === 'otp' ? 'Verifying...' : 'Verify OTP'}
              </Button>
              <Button variant="link" size="sm" onClick={() => setOtpSent(false)} className="w-full text-muted-foreground">
                Change phone number
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// @ts-ignore
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}
