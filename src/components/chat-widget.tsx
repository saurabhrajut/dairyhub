
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Crown } from "lucide-react";
import { ChatPanel } from "./chat-panel";
import type { UserProfile } from "@/app/page";
import { useSubscription } from "@/context/subscription-context";
import { SubscriptionModal } from "./subscription-modal";

export function ChatWidget({ user }: { user: UserProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const { isPro } = useSubscription();

  const handleWidgetClick = () => {
    if (isPro) {
      setIsOpen(!isOpen);
    } else {
      setIsSubscriptionModalOpen(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={handleWidgetClick}
          className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
          {!isPro && (
            <div className="absolute -top-1 -right-1 bg-amber-400 text-white p-1 rounded-full">
              <Crown className="w-4 h-4" />
            </div>
          )}
        </Button>
      </div>
      {isPro && <ChatPanel isOpen={isOpen} setIsOpen={setIsOpen} user={user} />}
      <SubscriptionModal isOpen={isSubscriptionModalOpen} setIsOpen={setIsSubscriptionModalOpen} />
    </>
  );
}
