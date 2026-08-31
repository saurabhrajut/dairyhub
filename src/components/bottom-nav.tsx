"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Bookmark, Wrench, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function BottomNav({ activeTab = "home", onTabChange }: BottomNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isProfilePage = pathname === "/profile";

  const handleNavClick = (tabId: string, href?: string) => {
    if (href && pathname !== href) {
      router.push(href);
      return;
    }

    if (isProfilePage && href !== "/profile") {
      router.push("/" + (tabId !== "home" ? `?tab=${tabId}` : ""));
      return;
    }

    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const currentTab = isProfilePage ? "profile" : activeTab;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 sm:px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-md mx-auto flex justify-around items-center">
        {/* 1. Home */}
        <button
          type="button"
          onClick={() => handleNavClick("home", "/")}
          className={cn(
            "flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200",
            currentTab === "home"
              ? "text-indigo-600 font-bold scale-105"
              : "text-slate-500 hover:text-slate-800 font-medium"
          )}
        >
          <Home
            className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 transition-transform",
              currentTab === "home" && "stroke-[2.5]"
            )}
          />
          <span className="text-[11px] sm:text-xs mt-1">Home</span>
        </button>

        {/* 2. Bookmarks */}
        <button
          type="button"
          onClick={() => handleNavClick("bookmarks")}
          className={cn(
            "flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200",
            currentTab === "bookmarks"
              ? "text-indigo-600 font-bold scale-105"
              : "text-slate-500 hover:text-slate-800 font-medium"
          )}
        >
          <Bookmark
            className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 transition-transform",
              currentTab === "bookmarks" && "stroke-[2.5] fill-indigo-100 text-indigo-600"
            )}
          />
          <span className="text-[11px] sm:text-xs mt-1">Bookmarks</span>
        </button>

        {/* 3. Tools */}
        <button
          type="button"
          onClick={() => handleNavClick("tools")}
          className={cn(
            "flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200",
            currentTab === "tools"
              ? "text-indigo-600 font-bold scale-105"
              : "text-slate-500 hover:text-slate-800 font-medium"
          )}
        >
          <Wrench
            className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 transition-transform",
              currentTab === "tools" && "stroke-[2.5]"
            )}
          />
          <span className="text-[11px] sm:text-xs mt-1">Tools</span>
        </button>

        {/* 4. Profile */}
        <button
          type="button"
          onClick={() => handleNavClick("profile", "/profile")}
          className={cn(
            "flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200",
            currentTab === "profile"
              ? "text-indigo-600 font-bold scale-105"
              : "text-slate-500 hover:text-slate-800 font-medium"
          )}
        >
          <User
            className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 transition-transform",
              currentTab === "profile" && "stroke-[2.5]"
            )}
          />
          <span className="text-[11px] sm:text-xs mt-1">Profile</span>
        </button>
      </div>
    </nav>
  );
}
