
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Crown } from "lucide-react";
import { ChatPanel } from "./chat-panel";
import { useAuth } from "@/context/auth-context";
import { useSubscription } from "@/context/subscription-context";
import { SubscriptionModal } from "./subscription-modal";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const { isPro } = useSubscription();
  const { user } = useAuth();

  const handleWidgetClick = () => {
    if (isPro) {
      setIsOpen(!isOpen);
    } else {
      setIsSubscriptionModalOpen(true);
    }
  };
  
  if (!user) {
    return null; // Don't show the widget if user is not logged in
  }
  
  // A mock user profile for the ChatPanel which expects a different structure
  // This can be enhanced in the future by storing this info in AuthContext or a user profile DB
  const mockUserProfile = {
    name: user.displayName || 'Friend',
    age: 30,
    gender: 'other' as const
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
      {isPro && <ChatPanel isOpen={isOpen} setIsOpen={setIsOpen} user={mockUserProfile} />}
      <SubscriptionModal isOpen={isSubscriptionModalOpen} setIsOpen={setIsSubscriptionModalOpen} />
    </>
  );
}
