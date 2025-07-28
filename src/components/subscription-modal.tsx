"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";
import { useSubscription } from "@/context/subscription-context";
import { useToast } from "@/hooks/use-toast";

const proFeatures = [
    "Unlock all premium calculators & guides",
    "Full access to Sarathi AI Chatbot",
    "Access to exclusive industry reports",
    "Save and export your calculations",
    "Ad-free experience",
];

export function SubscriptionModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { subscribe } = useSubscription();
  const { toast } = useToast();

  const handleSubscribe = (plan: '7-days' | '1-month' | '6-months' | 'yearly' | 'lifetime') => {
    subscribe(plan);
    setIsOpen(false);
    toast({
        title: "Subscribed! 🎉",
        description: "Welcome to Pro! All features are now unlocked.",
    });
  };

  const PlanCard = ({ title, price, duration, onSelect, popular = false }: { title: string, price: string, duration: string, onSelect: () => void, popular?: boolean }) => (
    <div className={`border bg-white p-5 rounded-xl shadow-sm relative ${popular ? 'border-2 border-primary' : ''}`}>
        {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-0.5 rounded-full text-xs font-semibold shadow">Best Value</div>}
        <h4 className="text-lg font-bold text-center font-headline">{title}</h4>
        <p className="text-center text-muted-foreground text-sm mb-3">{duration}</p>
        <p className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            {price}
        </p>
        <Button onClick={onSelect} className={`w-full ${popular ? 'bg-gradient-to-r from-primary to-indigo-500 text-white shadow-md' : ''}`} variant={popular ? 'default' : 'outline'}>
            Choose Plan
        </Button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 order-2 md:order-1">
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
                <div className="mt-6 space-y-3">
                    {proFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </div>
                    ))}
                </div>
                 <div className="mt-8 bg-gray-50 p-4 rounded-lg text-center border">
                    <h4 className="font-semibold text-gray-700">Pay using any UPI App</h4>
                    <p className="text-xs text-muted-foreground mb-3">Scan the QR code to complete your payment.</p>
                    <Image 
                        src="https://firebasestudio.app/assets/images/dhenu-guide-upi-qr.png"
                        data-ai-hint="QR code"
                        alt="UPI QR Code for Saurabh Kumar"
                        width={150}
                        height={150}
                        className="mx-auto rounded-md border-4 border-white shadow-lg"
                    />
                    <p className="mt-2 text-sm font-semibold text-gray-800 bg-gray-200 p-2 rounded-md inline-block">9119005734-2@axl</p>
                    <p className="text-xs text-muted-foreground mt-3">After payment, send a screenshot to our support team to activate your plan.</p>
                </div>
            </div>
            <div className="bg-primary/5 p-8 order-1 md:order-2 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-primary font-headline mb-6 text-center">Choose Your Plan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <PlanCard title="7 Days" price="₹99" duration="Starter Access" onSelect={() => handleSubscribe('7-days')} />
                   <PlanCard title="1 Month" price="₹299" duration="Full Access" onSelect={() => handleSubscribe('1-month')} />
                   <PlanCard title="6 Months" price="₹599" duration="Save 33%" onSelect={() => handleSubscribe('6-months')} />
                   <PlanCard title="Yearly" price="₹999" duration="Best Value" onSelect={() => handleSubscribe('yearly')} />
                   <div className="sm:col-span-2">
                     <PlanCard title="Lifetime" price="₹1499" duration="One-Time Purchase" onSelect={() => handleSubscribe('lifetime')} popular />
                   </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
