"use client";

import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";
import { useAuth } from "@/context/auth-context";
import { createRazorpayOrder } from "@/app/actions";

const proFeatures = [
    "Unlock all premium calculators & guides",
    "Full access to Sarathi AI Chatbot",
    "Access to exclusive industry reports",
    "Save and export your calculations",
    "Ad-free experience",
];

const plans = {
    '7-days': { title: "7 Days", price: 99, duration: "Starter Access" },
    '1-month': { title: "1 Month", price: 299, duration: "Full Access" },
    '6-months': { title: "6 Months", price: 599, duration: "Save 33%" },
    'yearly': { title: "Yearly", price: 999, duration: "Best Value" },
    'lifetime': { title: "Lifetime", price: 1499, duration: "One-Time Purchase", popular: true },
};


export function SubscriptionModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { user, userProfile } = useAuth();
  const { subscribe } = useSubscription();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<SubscriptionPlan | null>(null);

  const handleSubscription = async (planKey: SubscriptionPlan) => {
    setIsLoading(planKey);
    
    if (!user || !userProfile) {
        toast({ variant: "destructive", title: "Error", description: "You must be logged in to subscribe."});
        setIsLoading(null);
        return;
    }

    const planDetails = plans[planKey];
    
    try {
        const order = await createRazorpayOrder(planDetails.price, "INR");
        if (!order || !order.id) {
            throw new Error("Failed to create payment order.");
        }

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: "DhenuGuide Pro",
            description: `Subscription for ${planDetails.title}`,
            order_id: order.id,
            handler: function (response: any) {
                // On successful payment
                subscribe(planKey);
                setIsOpen(false);
                toast({
                    title: "Subscribed! 🎉",
                    description: "Welcome to Pro! All features are now unlocked.",
                });
            },
            prefill: {
                name: userProfile.name || "Dairy Hub User",
                email: user.email,
            },
            theme: {
                color: "#4F46E5",
            },
            modal: {
                ondismiss: function() {
                    setIsLoading(null); // Stop loading if the user closes the modal
                }
            }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();

    } catch (error: any) {
        toast({ variant: "destructive", title: "Payment Failed", description: error.message || "Could not initiate payment. Please try again." });
        setIsLoading(null);
    }
  };

  const PlanCard = ({ planKey, popular = false }: { planKey: SubscriptionPlan, popular?: boolean }) => {
    const plan = plans[planKey];
    return (
        <div className={`border bg-white p-5 rounded-xl shadow-sm relative ${popular ? 'border-2 border-primary' : ''}`}>
            {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow">Best Value</div>}
            <h4 className="text-lg font-bold text-center font-headline">{plan.title}</h4>
            <p className="text-center text-muted-foreground text-sm mb-3">{plan.duration}</p>
            <p className="text-4xl font-extrabold text-center text-gray-800 mb-4">
                ₹{plan.price}
            </p>
            <Button onClick={() => handleSubscription(planKey)} className={`w-full ${popular ? 'bg-gradient-to-r from-primary to-indigo-500 text-white shadow-md' : ''}`} variant={popular ? 'default' : 'outline'} disabled={!!isLoading}>
                {isLoading === planKey ? <Loader2 className="animate-spin" /> : 'Choose Plan'}
            </Button>
        </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-full max-h-[90vh] flex flex-col p-0">
        <ScrollArea className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 order-2 md:order-1 flex flex-col">
                  <DialogHeader>
                      <div className="flex justify-center mb-2">
                          <div className="bg-amber-100 p-3 rounded-full">
                              <Zap className="w-8 h-8 text-amber-500" />
                          </div>
                      </div>
                      <DialogTitle className="text-3xl text-center font-extrabold text-gray-800 font-headline">Go Pro!</DialogTitle>
                      <DialogDescription className="text-muted-foreground text-center">
                          Unlock powerful features and support DhenuGuide's development.
                      </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 space-y-3 flex-1">
                      {proFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                          </div>
                      ))}
                  </div>
                   <div className="mt-8 bg-gray-50 p-4 rounded-lg text-center border">
                      <p className="text-xs text-muted-foreground">Payment is processed securely by Razorpay.</p>
                  </div>
              </div>
              <div className="bg-primary/5 p-8 order-1 md:order-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary font-headline mb-6 text-center">Choose Your Plan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <PlanCard planKey="7-days" />
                    <PlanCard planKey="1-month" />
                    <PlanCard planKey="6-months" />
                    <PlanCard planKey="yearly" />
                    <div className="sm:col-span-2">
                      <PlanCard planKey="lifetime" popular />
                    </div>
                  </div>
              </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
