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
import { useAuth, type Department } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";
import { createRazorpayOrder, verifyRazorpayPayment } from "@/app/actions";

const allProFeatures = [
    "Unlock all premium calculators & guides",
    "Full access to Sarathi AI Chatbot",
    "Access to exclusive industry reports",
    "Save and export your calculations",
    "Ad-free experience",
];

const departmentPlans: Record<Department, Record<string, { title: string; price: number; duration: string; popular?: boolean }>> = {
    'process-access': {
        '1-month': { title: "1 Month", price: 99, duration: "Full Access" },
        '6-months': { title: "6 Months", price: 299, duration: "Save 45%", popular: true },
        'yearly': { title: "Yearly", price: 549, duration: "Best Value" },
    },
    'production-access': {
        '7-days': { title: "7 Days", price: 49, duration: "Starter Access" },
        '1-month': { title: "1 Month", price: 99, duration: "Full Access" },
        '6-months': { title: "6 Months", price: 399, duration: "Save 33%", popular: true },
        'yearly': { title: "Yearly", price: 749, duration: "Best Value" },
    },
    'quality-access': {
        '7-days': { title: "7 Days", price: 79, duration: "Starter Access" },
        '1-month': { title: "1 Month", price: 149, duration: "Full Access" },
        '6-months': { title: "6 Months", price: 499, duration: "Save 45%", popular: true },
        'yearly': { title: "Yearly", price: 849, duration: "Best Value" },
    },
    'all-control-access': {
        '1-month': { title: "1 Month Ultimate", price: 499, duration: "All Access Pass" },
        '6-months': { title: "6 Months Ultimate", price: 999, duration: "Save 50%", popular: true },
        'yearly': { title: "Yearly Ultimate", price: 1499, duration: "Best Value" },
        'lifetime': { title: "Lifetime Ultimate", price: 2499, duration: "One-Time Purchase" },
    },
    'guest': {} // Guests can't subscribe
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
  const [isLoading, setIsLoading] = useState<any | null>(null);

  const userDepartment = user?.department || 'guest';
  const currentPlans = departmentPlans[userDepartment] || {};

  const handleSubscription = async (planKey: any) => {
    if (!user) {
        toast({ variant: "destructive", title: "Not Logged In", description: "You must be logged in to subscribe." });
        return;
    }
    if (user.department === 'guest') {
        toast({ variant: "destructive", title: "Action Not Allowed", description: "Guests cannot subscribe. Please sign up for an account." });
        return;
    }

    setIsLoading(planKey);
    
    try {
        await subscribe(planKey, user.uid);
        setIsOpen(false);
        toast({
            title: "Subscribed! 🎉",
            description: "Welcome to Pro! All features for your department are now unlocked.",
        });

    } catch (error: any) {
        toast({ variant: "destructive", title: "Action Failed", description: error.message || "Could not complete the action. Please try again." });
    } finally {
        setIsLoading(null);
    }
  };

  const getDepartmentName = (deptKey?: Department) => {
    if (!deptKey) return 'Not specified';
    const names: Record<Department, string> = {
        'process-access': 'Process Access',
        'production-access': 'Production Access',
        'quality-access': 'Quality Access',
        'all-control-access': 'All Control Access',
        'guest': 'Guest'
    }
    return names[deptKey];
  }

  const PlanCard = ({ planKey }: { planKey: string }) => {
    const plan = currentPlans[planKey];
    if (!plan) return null;
    const popular = plan.popular || false;
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
                      <p className="text-xs text-muted-foreground">This is a simulated subscription flow.</p>
                  </div>
              </div>
              <div className="bg-primary/5 p-8 order-1 md:order-2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary font-headline mb-2 text-center">Choose Your Plan</h3>
                   <p className="text-center text-sm text-muted-foreground mb-6">Showing plans for: <strong>{getDepartmentName(userDepartment)}</strong></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.keys(currentPlans).map(planKey => (
                       <PlanCard key={planKey} planKey={planKey} />
                    ))}
                     {Object.keys(currentPlans).length === 0 && (
                        <div className="sm:col-span-2 text-center text-muted-foreground bg-white p-6 rounded-lg">
                            <p>No subscription plans available for your current status.</p>
                            <p className="text-xs mt-2">Please select a department in your profile to see available plans.</p>
                        </div>
                     )}
                  </div>
              </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
