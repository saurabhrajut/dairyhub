"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getDailyTip } from "@/app/actions";
import { Lightbulb, Sparkles } from "lucide-react";

export function DailyTip() {
  const [tip, setTip] = useState("SNF = TS - Fat");
  const [isPending, startTransition] = useTransition();

  const handleNewTip = () => {
    startTransition(async () => {
      try {
        const newTip = await getDailyTip();
        setTip(newTip);
      } catch (error) {
        console.error("Failed to fetch new tip:", error);
        setTip("Oops! Koi gadbad ho gayi. Fir se try karein.");
      }
    });
  };

  return (
    <Card className="mb-8 glass-card">
      <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-semibold text-primary text-center sm:text-left flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500" />
          <span className="font-bold font-headline">Did You Know?</span>
          <span>{isPending ? "Soch raha hu..." : tip}</span>
        </p>
        <Button
          onClick={handleNewTip}
          disabled={isPending}
          className="text-sm shrink-0 bg-gradient-to-r from-primary to-indigo-400 text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isPending ? "Soch raha hu..." : "Naya Tip"}
        </Button>
      </CardContent>
    </Card>
  );
}
