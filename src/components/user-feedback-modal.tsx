"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, MessageSquarePlus, Send, CheckCircle2, Bug, Lightbulb, BookOpen, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";

interface UserFeedbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FEEDBACK_TYPES = [
  { id: "general", label: "General Experience", icon: ThumbsUp },
  { id: "bug", label: "Report a Bug", icon: Bug },
  { id: "feature", label: "Feature Request", icon: Lightbulb },
  { id: "content", label: "Content Improvement", icon: BookOpen },
];

export function UserFeedbackModal({ open, onOpenChange }: UserFeedbackModalProps) {
  const { user } = useAuth();
  const { toast } = useToast();

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [type, setType] = useState<string>("general");
  const [feedbackText, setFeedbackText] = useState<string>("");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) {
      toast({
        title: "Feedback required",
        description: "Please enter a few words about your experience.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Save feedback to local storage log
    try {
      const existingLogs = JSON.parse(localStorage.getItem("dairyhub_feedback_submissions") || "[]");
      const newEntry = {
        id: Date.now().toString(),
        userId: user?.uid || "guest",
        userName: user?.displayName || "Guest User",
        email: email || user?.email || "anonymous",
        rating,
        type,
        feedback: feedbackText,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("dairyhub_feedback_submissions", JSON.stringify([...existingLogs, newEntry]));
    } catch (e) {
      console.error("Failed to store feedback locally", e);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Thank You! 🙏",
        description: "Your feedback has been received. We review every response to improve Dairy Hub.",
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFeedbackText("");
    setRating(5);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl">
        <DialogHeader className="text-center sm:text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/20">
            <MessageSquarePlus className="w-6 h-6" />
          </div>
          <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">
            Share Your Experience
          </DialogTitle>
          <DialogDescription className="text-xs text-slate-500 dark:text-slate-400">
            Your insights directly help us enhance calculations, educational content, and features on Dairy Hub.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Feedback Submitted!</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              Thank you for contributing to the Dairy Hub community. We appreciate your support!
            </p>
            <Button onClick={handleReset} className="mt-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-white rounded-xl text-xs font-semibold px-6">
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            {/* Star Rating */}
            <div className="space-y-1 text-center">
              <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Rate your experience</Label>
              <div className="flex justify-center items-center gap-1 py-1">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active = (hoverRating !== null ? hoverRating : rating) >= star;
                  return (
                    <button
                      type="button"
                      key={star}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(null)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        className={cn(
                          "w-7 h-7 transition-colors",
                          active ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-700"
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Selector */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Feedback Type</Label>
              <div className="grid grid-cols-2 gap-2">
                {FEEDBACK_TYPES.map((item) => {
                  const Icon = item.icon;
                  const isSelected = type === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setType(item.id)}
                      className={cn(
                        "flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all text-left",
                        isSelected
                          ? "border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold shadow-sm"
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-600 dark:text-slate-400"
                      )}
                    >
                      <Icon className={cn("w-4 h-4 shrink-0", isSelected ? "text-blue-600 dark:text-blue-400" : "text-slate-400")} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed Feedback Input */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Feedback & Suggestions</Label>
              <Textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Tell us what you loved or how we can make Dairy Hub better for you..."
                className="min-h-[90px] text-xs rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950/60 focus:ring-blue-500"
              />
            </div>

            {/* Contact Email Optional */}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Contact Email (Optional)</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="text-xs rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950/60 h-9"
              />
            </div>

            <DialogFooter className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs h-10 rounded-xl shadow-md shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-3.5 h-3.5" /> Submit Feedback
                  </span>
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
