
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Crown, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const proFeatures = [
    "Unlock all premium calculators",
    "Access to exclusive industry reports",
    "Ad-free experience",
    "Priority AI Chatbot support",
    "Save and export your calculations"
];

export function SubscriptionModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 order-2 md:order-1">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-extrabold text-gray-800 font-headline">Go Pro!</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                        Unlock powerful features and support the development of DhenuGuide.
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-6 space-y-4">
                    {proFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-muted-foreground">{feature}</span>
                        </div>
                    ))}
                </div>
                 <div className="mt-8 bg-gray-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-gray-700">Pay using any UPI App</h4>
                    <p className="text-xs text-muted-foreground mb-3">Scan the QR code to complete your payment.</p>
                    <Image 
                        src="https://placehold.co/200x200.png"
                        data-ai-hint="QR code"
                        alt="UPI QR Code"
                        width={180}
                        height={180}
                        className="mx-auto rounded-md border-4 border-white shadow-lg"
                    />
                    <p className="text-xs text-muted-foreground mt-3">After payment, send a screenshot to our support team to activate your plan.</p>
                </div>
            </div>
            <div className="bg-primary/5 p-8 order-1 md:order-2">
                <h3 className="text-xl font-bold text-primary font-headline mb-6 text-center">Choose Your Plan</h3>
                <div className="space-y-6">
                    <div className="border-2 border-primary bg-white p-6 rounded-2xl shadow-lg relative transform hover:scale-105 transition-transform duration-300">
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                            Best Value
                        </div>
                        <Crown className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                        <h4 className="text-xl font-bold text-center font-headline">One-Time Purchase</h4>
                        <p className="text-center text-muted-foreground text-sm mb-4">Lifetime Access</p>
                        <p className="text-5xl font-extrabold text-center text-gray-800 mb-6">
                            ₹1499
                        </p>
                        <Button className="w-full bg-gradient-to-r from-primary to-indigo-500 text-white shadow-md">Get Lifetime Access</Button>
                    </div>
                     <div className="border bg-white p-6 rounded-2xl">
                        <h4 className="text-xl font-bold text-center font-headline">Yearly Plan</h4>
                        <p className="text-center text-muted-foreground text-sm mb-4">Billed Annually</p>
                        <p className="text-5xl font-extrabold text-center text-gray-800 mb-6">
                            ₹999<span className="text-lg text-muted-foreground">/year</span>
                        </p>
                        <Button className="w-full" variant="outline">Choose Yearly</Button>
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
