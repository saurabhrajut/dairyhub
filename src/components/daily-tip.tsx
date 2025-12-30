"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Lightbulb, 
  X, 
  Copy, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";
import { dailyTipsContent } from "@/lib/content/daily-tips-content";
import { cn } from "@/lib/utils"; 

export function DailyTip() {
  // Change 1: Start with isVisible as false (Hidden by default)
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { toast } = useToast();
  const { language } = useLanguage();
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    const languageSpecificTips = dailyTipsContent[language]?.tips || dailyTipsContent.en.tips;
    setTips(languageSpecificTips);
    // Removed setCurrentIndex(0) so we don't force the first tip on load
  }, [language]);

  // Change 2: Logic to handle showing a random tip
  const handleShowTip = () => {
    if (tips.length > 0) {
      // Generate a random index based on the total number of tips
      const randomIndex = Math.floor(Math.random() * tips.length);
      setCurrentIndex(randomIndex);
      setIsVisible(true);
    }
  };

  const changeTip = useCallback((direction: "next" | "prev") => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % tips.length;
        } else {
          return (prev - 1 + tips.length) % tips.length;
        }
      });
      setIsAnimating(false);
    }, 200); 
  }, [tips.length]);

  const handleCopy = () => {
    const text = tips[currentIndex];
    if (text) {
      navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Tip saved to clipboard.",
        duration: 1500,
      });
    }
  };

  // If not visible, show the Trigger Button
  if (!isVisible) {
    return (
      <div className="flex justify-center mb-6 animate-in fade-in zoom-in duration-300">
        <Button
          onClick={handleShowTip} // Using the new handler here
          size="sm"
          className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md hover:shadow-indigo-500/25 transition-all text-xs font-medium px-6 py-5"
        >
          <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
          Get Daily Tip
        </Button>
      </div>
    );
  }

  const currentTip = tips[currentIndex] || "";

  return (
    <div className="relative mb-6 group w-full max-w-3xl mx-auto px-1 sm:px-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-xl blur-sm opacity-50 sm:opacity-0 sm:group-hover:opacity-100 transition duration-700" />
      
      <Card className="relative overflow-hidden border-border/40 bg-background/80 backdrop-blur-md shadow-sm rounded-xl">
        
        {/* Main Layout Container: Vertical on Mobile, Horizontal on Desktop */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between p-4 sm:p-2 gap-4 sm:gap-3">
          
          {/* Top Section (Mobile): Icon & Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-1">
            
            {/* Icon */}
            <div className="flex items-center justify-center h-10 w-10 sm:h-8 sm:w-8 rounded-full bg-primary/10 shrink-0">
               <Lightbulb className="h-5 w-5 sm:h-4 sm:w-4 text-primary" />
            </div>

            {/* Tip Content */}
            <div className="w-full flex items-center justify-center sm:justify-start min-h-[3rem] sm:min-h-0">
               <p 
                 className={cn(
                   "text-base sm:text-sm font-medium text-foreground text-center sm:text-left leading-relaxed transition-all duration-300 ease-in-out",
                   isAnimating ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
                 )}
               >
                 {currentTip}
               </p>
            </div>
          </div>

          {/* Divider only for Mobile */}
          <div className="h-px w-full bg-border/50 sm:hidden" />

          {/* Bottom Section (Mobile) / Right Section (Desktop): Controls */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-1">
            
            {/* Left Controls Group (Copy) */}
            <div className="flex items-center gap-1 sm:order-2">
                 <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 sm:h-7 sm:w-7 rounded-full text-muted-foreground hover:bg-muted" 
                  onClick={handleCopy} 
                  title="Copy"
                >
                  <Copy className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                </Button>
            </div>

            {/* Center Navigation Arrows */}
            <div className="flex items-center gap-3 sm:gap-1 bg-muted/40 sm:bg-transparent rounded-full px-3 py-1 sm:p-0 border sm:border-0 border-border/30 sm:order-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 sm:h-7 sm:w-7 rounded-full hover:bg-background shadow-sm sm:shadow-none" 
                onClick={() => changeTip("prev")}
              >
                <ChevronLeft className="h-5 w-5 sm:h-4 sm:w-4" />
              </Button>
              
              <div className="w-px h-4 bg-border/40 sm:hidden" /> 

              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 sm:h-7 sm:w-7 rounded-full hover:bg-background shadow-sm sm:shadow-none" 
                onClick={() => changeTip("next")}
              >
                <ChevronRight className="h-5 w-5 sm:h-4 sm:w-4" />
              </Button>
            </div>

            {/* Right Control (Close) */}
             <div className="flex items-center gap-1 sm:order-3">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 sm:h-7 sm:w-7 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10" 
                  onClick={() => setIsVisible(false)} 
                  title="Close"
                >
                  <X className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                </Button>
             </div>

          </div>

        </div>
      </Card>
    </div>
  );
}
