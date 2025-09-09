
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { ChatPanel } from "./chat-panel";
import { useAuth } from "@/context/auth-context";

export interface ChatUserProfile {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
}

export function ChatWidget({ user: chatUserProp }: { user: ChatUserProfile }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleWidgetClick = () => {
    setIsOpen(!isOpen);
  };
  
  const chatUser: ChatUserProfile = {
    name: user?.displayName || chatUserProp.name,
    age: 30, // This can be updated to use user.age if available
    gender: user?.gender || chatUserProp.gender,
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
        </Button>
      </div>
      <ChatPanel isOpen={isOpen} setIsOpen={setIsOpen} user={chatUser} />
    </>
  );
}
