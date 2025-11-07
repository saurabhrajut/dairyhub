
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle2, Zap, Loader2 } from "lucide-react";
import { useSubscription, type SubscriptionPlan } from "@/context/subscription-context";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";
import { createRazorpayOrder } from "@/app/actions";
import { cn } from "@/lib/utils";
import getConfig from 'next/config';


declare global {
    interface Window {
        Razorpay: any;
    }
}

const allProFeatures = [
    "Unlock all premium calculators & guides",
    "Full access to Sarathi AI Chatbot",
    "Full access to Expert Support & Gyan AI",
    "AI-powered Interview Preparation",
    "Access to exclusive industry reports",
    "Save and export your calculations",
    "Ad-free experience",
];

const plans: Record<string, { title: string; price: number; duration: string; popular?: boolean }> = {
    '1-day': { title: "1 Day", price: 10, duration: "Trial Access" },
    '7-days': { title: "7 Days", price: 49, duration: "Weekly Pass" },
    '1-month': { title: "1 Month", price: 149, duration: "Full Access" },
    '6-months': { title: "6 Months", price: 447, duration: "Save 50%", popular: true },
    'yearly': { title: "Yearly", price: 799, duration: "Best Value" },
};

export function SubscriptionModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { subscribe } = useSubscription();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<{key: SubscriptionPlan, price: number} | null>(null);

  const handleSubscription = useCallback((planKey: SubscriptionPlan, price: number) => {
    setIsLoading(planKey);
    setSelectedPlan({ key: planKey, price });
  }, []);
  
  useEffect(() => {
    if (!selectedPlan || !isOpen) {
      return;
    }

    const processPayment = async () => {
        if (!user || user.isAnonymous) {
            toast({ variant: "destructive", title: "Authentication Required", description: "Please sign up or log in to subscribe." });
            setIsLoading(null);
            setSelectedPlan(null);
            return;
        }

        // Check if Razorpay script is loaded
        if (typeof window.Razorpay === 'undefined') {
            toast({
                variant: "destructive",
                title: "Payment Gateway Error",
                description: "Could not connect to payment gateway. Please check your internet connection and try again.",
            });
            setIsLoading(null);
            setSelectedPlan(null);
            return;
        }

        const { publicRuntimeConfig } = getConfig();
        const keyId = publicRuntimeConfig.razorpayKeyId;

        if (!keyId) {
            toast({
                variant: "destructive",
                title: "Configuration Error",
                description: "Payment gateway is not configured correctly. Please contact support.",
            });
            setIsLoading(null);
            setSelectedPlan(null);
            return;
        }


        try {
            const orderResponse = await createRazorpayOrder(selectedPlan.price);
            
            if (!orderResponse.success || !orderResponse.order) {
                throw new Error(orderResponse.error || "Could not create Razorpay order.");
            }

            const options = {
                key: keyId,
                amount: orderResponse.order.amount,
                currency: orderResponse.order.currency,
                name: "Dairy Hub Pro",
                description: `Subscription for ${plans[selectedPlan.key as keyof typeof plans]?.title}`,
                order_id: orderResponse.order.id,
                prefill: {
                    name: user.displayName || "Dairy Hub User",
                    email: user.email || undefined,
                },
                handler: async function (response: any) {
                    try {
                        await subscribe(selectedPlan.key as SubscriptionPlan, user.uid, response.razorpay_payment_id);
                        toast({
                            title: "Subscription Successful!",
                            description: "Thank you for supporting Dairy Hub. Your Pro features are now active.",
                        });
                        setIsOpen(false);
                    } catch (error: any) {
                         toast({
                            variant: "destructive",
                            title: "Subscription Failed",
                            description: "Could not update your subscription status. Please contact support.",
                        });
                    } finally {
                        setIsLoading(null);
                        setSelectedPlan(null);
                    }
                },
                modal: {
                    ondismiss: () => {
                        setIsLoading(null);
                        setSelectedPlan(null);
                    }
                },
                theme: {
                    color: "#4F46E5"
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response: any) {
                toast({
                    variant: "destructive",
                    title: "Payment Failed",
                    description: response.error.description || "Your payment could not be processed. Please try again.",
                });
                setIsLoading(null);
                setSelectedPlan(null);
            });
            rzp.open();

        } catch (error: any) {
             toast({
                variant: "destructive",
                title: "Error",
                description: error.message || "An unexpected error occurred. Please try again.",
            });
            setIsLoading(null);
            setSelectedPlan(null);
        }
    };
    
    processPayment();

  }, [selectedPlan, isOpen, user, subscribe, setIsOpen, toast]);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-full max-h-[90vh] flex flex-col p-0">
        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 order-2 md:order-1 flex flex-col">
                  <DialogHeader>
                      <div className="flex justify-center mb-2">
                          <div className="bg-amber-100 p-3 rounded-full">
                              <Crown className="w-8 h-8 text-amber-500" />
                          </div>
                      </div>
                      <DialogTitle className="text-3xl text-center font-extrabold text-gray-800 font-headline">Go Pro!</DialogTitle>
                      <DialogDescription className="text-muted-foreground text-center">
                          Unlock powerful features and support Dairy Hub App development.
                      </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 space-y-3 flex-1">
                      {allProFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                          </div>
                      ))}
                  </div>
                   <div className="mt-8 bg-gray-50 p-4 rounded-lg text-center border">
                      <p className="text-xs text-muted-foreground">Payments are securely processed by Razorpay.</p>
                  </div>
              </div>
              <div className="bg-primary/5 p-8 order-1 md:order-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary font-headline mb-6 text-center">Choose Your Plan</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(plans).map(([planKey, plan]) => {
                       const popular = plan.popular || false;
                       return (
                           <div key={planKey} className={`border bg-white p-5 rounded-xl shadow-sm relative ${popular ? 'border-2 border-primary' : ''}`}>
                               {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow">Best Value</div>}
                               <h4 className="text-lg font-bold text-center font-headline">{plan.title}</h4>
                               <p className="text-center text-muted-foreground text-sm mb-3">{plan.duration}</p>
                               <p className="text-4xl font-extrabold text-center text-gray-800 mb-4">
                                   ₹{plan.price}
                               </p>
                               <Button 
                                   onClick={() => handleSubscription(planKey as SubscriptionPlan, plan.price)}
                                   className={`w-full ${popular ? 'bg-gradient-to-r from-primary to-indigo-500 text-white shadow-md' : ''}`}
                                   variant={popular ? 'default' : 'outline'}
                                   disabled={!!isLoading}
                                >
                                   {isLoading === planKey ? <Loader2 className="animate-spin" /> : 'Choose Plan'}
                               </Button>
                           </div>
                       )
                    })}
                  </div>
              </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
