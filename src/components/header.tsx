"use client";

import { useState, useEffect, useCallback } from "react";
import { Bell, Video, MessageSquarePlus, Clock } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import { UserFeedbackModal } from "@/components/user-feedback-modal";
import { TutorialVideosModal } from "@/components/tutorial-videos-modal";
import { NotificationsModal } from "@/components/notifications-modal";

export function Header() {
  const { user } = useAuth();
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [counts, setCounts] = useState({ unread: 4, total: 10, jobs: 6 });

  const handleCountsChange = useCallback((unread: number, total: number, jobs: number) => {
    setCounts((prev) => {
      if (prev.unread === unread && prev.total === total && prev.jobs === jobs) {
        return prev;
      }
      return { unread, total, jobs };
    });
  }, []);

  // Real-Time 24-Hour World Clock State
  const [time24, setTime24] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime24(`${h}:${m}:${s}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="mb-6 pt-2 px-1">
        <div className="flex items-center justify-between gap-2">
          {/* Left Title & Subtitle matching photo */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dairy Hub
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-indigo-700 mt-0.5 leading-snug">
              Your Pocket Companion for
              <br className="sm:hidden" /> Dairy Knowledge & Calculations
            </p>
          </div>

          {/* Right Section: 24-Hour Real-Time World Clock + Notification Bell */}
          <div className="flex items-center gap-2">
            {/* Real-Time 24-Hour Digital Clock Badge (100% Free) */}
            {mounted && time24 && (
              <div
                className="hidden border border-slate-200 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-xl shadow-xs text-[11px] sm:text-xs font-mono font-bold text-slate-800 shrink-0 xs:flex items-center gap-1.5"
                title="Real-Time 24-Hour World Clock"
              >
                <Clock className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
                <span className="tracking-wider text-indigo-950">{time24}</span>
                <span className="text-[10px] text-slate-600 font-sans font-semibold">24H</span>
              </div>
            )}

            {/* Notification Bell Button with Prominent Job Numbers Badge */}
            <button
              type="button"
              onClick={() => setIsNotificationsOpen(true)}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white text-slate-800 hover:text-indigo-600 shadow-sm border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shrink-0"
              title="Dairy & Food Industry Live Jobs & Feed"
            >
              <Bell className="w-4 h-4 text-indigo-600 animate-pulse" />
              <span className="text-xs font-black text-slate-900">Jobs</span>
              <span className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-black leading-none text-center shadow-2xs",
                counts.unread > 0 ? "bg-red-500 text-white animate-pulse" : "bg-indigo-100 text-indigo-900"
              )}>
                {counts.unread > 0 ? `${counts.unread} NEW` : counts.jobs > 0 ? `${counts.jobs} Active` : counts.total}
              </span>
              {counts.unread > 0 && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
              )}
            </button>

          </div>
        </div>

        {/* Quick action pill buttons + Mobile Clock View */}
        <div className="flex items-center justify-between gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsTutorialsOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50/90 hover:bg-blue-100 border border-blue-200/60 px-3 py-1 rounded-full transition-colors shrink-0"
            >
              <Video className="w-3.5 h-3.5" /> Video Tutorials
            </button>
            <button
              onClick={() => setIsFeedbackOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 border border-indigo-200/60 px-3 py-1 rounded-full transition-colors shrink-0"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" /> Feedback
            </button>
          </div>

          {/* Mobile Real-Time 24h Clock */}
          {mounted && time24 && (
            <div className="xs:hidden inline-flex items-center gap-1 text-[11px] font-mono font-bold text-slate-800 bg-white border border-slate-200 px-2.5 py-1 rounded-full shrink-0 shadow-xs">
              <Clock className="w-3 h-3 text-indigo-600 animate-pulse" />
              <span>{time24}</span>
              <span className="text-[9px] text-slate-600 font-sans font-semibold">24H</span>
            </div>
          )}

          {user && (
            <span className="hidden sm:inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
              👋 Hi, {user.displayName || "User"}
            </span>
          )}
        </div>
      </header>

      {/* Real Dairy & Food Industry Notifications Feed */}
      <NotificationsModal
        open={isNotificationsOpen}
        onOpenChange={setIsNotificationsOpen}
        onCountsChange={handleCountsChange}
      />

      <UserFeedbackModal open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
      <TutorialVideosModal open={isTutorialsOpen} onOpenChange={setIsTutorialsOpen} />
    </>
  );
}
