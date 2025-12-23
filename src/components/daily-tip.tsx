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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { toast } = useToast();
  const { language } = useLanguage();
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    const languageSpecificTips = dailyTipsContent[language]?.tips || dailyTipsContent.en.tips;
    setTips(languageSpecificTips);
    setCurrentIndex(0); 
  }, [language]);

  // Handle Navigation (Circular/Infinite Loop)
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

  if (!isVisible) {
    return (
      <div className="flex justify-center mb-6 animate-in fade-in zoom-in duration-300">
        <Button
          onClick={() => setIsVisible(true)}
          size="sm"
          className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md hover:shadow-indigo-500/25 transition-all text-xs"
        >
          <Sparkles className="mr-2 h-3 w-3" />
          Daily Tip
        </Button>
      </div>
    );
  }

  const currentTip = tips[currentIndex] || "";

  return (
    <div className="relative mb-6 group w-full max-w-3xl mx-auto">
      {/* Subtle Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700" />
      
      <Card className="relative overflow-hidden border-border/40 bg-background/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
        <div className="flex items-center justify-between p-2 gap-3 min-h-[50px]">
          
          {/* Left: Icon */}
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400/10 to-orange-500/10 shrink-0">
             <Lightbulb className="h-4 w-4 text-yellow-500" />
          </div>

          {/* Center: Tip Content */}
          <div className="flex-1 flex items-center justify-center sm:justify-start overflow-hidden">
             <p 
               className={cn(
                 "text-sm font-medium text-foreground text-center sm:text-left leading-tight transition-all duration-300 ease-in-out px-1",
                 isAnimating ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
               )}
             >
               {currentTip}
             </p>
          </div>

          {/* Right: Controls (Nav + Actions) */}
          <div className="flex items-center gap-1 shrink-0 bg-muted/30 rounded-lg p-0.5 border border-border/20">
            {/* Previous Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-background/80" 
              onClick={() => changeTip("prev")}
              title="Previous Tip"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Next Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-md text-muted-foreground hover:text-foreground hover:bg-background/80" 
              onClick={() => changeTip("next")}
              title="Next Tip"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <div className="w-px h-4 bg-border/50 mx-0.5" /> {/* Divider */}

            {/* Copy Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-md text-muted-foreground hover:text-primary hover:bg-background/80" 
              onClick={handleCopy} 
              title="Copy"
            >
              <Copy className="h-3.5 w-3.5" />
            </Button>

            {/* Close Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7 rounded-md text-muted-foreground hover:text-destructive hover:bg-background/80" 
              onClick={() => setIsVisible(false)} 
              title="Hide"
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          </div>

        </div>
      </Card>
    </div>
  );
}
