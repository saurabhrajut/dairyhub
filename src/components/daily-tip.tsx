
"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Sparkles, X, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/language-context";
import { dailyTipsContent } from "@/lib/content/daily-tips-content";

export function DailyTip() {
  const [tip, setTip] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Show by default
  const { toast } = useToast();
  const { language } = useLanguage();
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    // Load tips based on language
    const languageSpecificTips = dailyTipsContent[language]?.tips || dailyTipsContent.en.tips;
    setTips(languageSpecificTips);
    // Set an initial random tip
    setTip(languageSpecificTips[Math.floor(Math.random() * languageSpecificTips.length)]);
  }, [language]);

  const handleNewTip = useCallback(() => {
    if (tips.length > 0) {
      const newTip = tips[Math.floor(Math.random() * tips.length)];
      setTip(newTip);
    }
  }, [tips]);
  
  const handleCopy = () => {
    if(tip) {
      navigator.clipboard.writeText(tip);
      toast({
          title: "Tip Copied!",
          description: "You can now paste the tip anywhere.",
      });
    }
  }
  
  if (!isVisible) {
      return (
        <div className="flex justify-center mb-8">
            <Button
              onClick={() => setIsVisible(true)}
              className="text-sm shrink-0 bg-gradient-to-r from-primary to-indigo-400 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Show Daily Tip
            </Button>
        </div>
      );
  }

  return (
    <Card className="mb-8 glass-card relative">
      <div className="absolute top-1 right-1 flex items-center">
         <Button variant="ghost" size="icon" className="w-6 h-6 text-muted-foreground" onClick={handleCopy} title="Copy Tip">
            <Copy className="w-3 h-3"/>
        </Button>
        <Button variant="ghost" size="icon" className="w-6 h-6 text-muted-foreground" onClick={() => setIsVisible(false)} title="Hide Tip">
            <X className="w-4 h-4"/>
        </Button>
      </div>
      <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-semibold text-primary text-center sm:text-left flex items-center gap-2 pr-16 sm:pr-6">
          <Lightbulb className="w-5 h-5 text-yellow-500 shrink-0" />
          <span className="font-bold font-headline">Did You Know?</span>
          <span className="text-sm">{tip}</span>
        </p>
        <Button
          onClick={handleNewTip}
          className="text-sm shrink-0 bg-gradient-to-r from-primary to-indigo-400 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Next Tip
        </Button>
      </CardContent>
    </Card>
  );
}
