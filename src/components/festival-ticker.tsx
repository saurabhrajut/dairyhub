"use client";

import { useState, useEffect, useMemo } from "react";
import { getTodayFestivals, FestivalEvent } from "@/lib/festivals-data";

export function FestivalTicker() {
  const [mounted, setMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    setMounted(true);
    const now = new Date();

    // Check for optional URL date testing (e.g. ?date=2026-09-04 to view Janmashtami hoarding line)
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const testDate = params.get("date");
        if (testDate && /^\d{4}-\d{2}-\d{2}$/.test(testDate)) {
          const [y, m, d] = testDate.split("-").map(Number);
          setCurrentDate(new Date(y, m - 1, d, 12, 0, 0));
          return;
        }
      }
    } catch {
      // Ignore URL parsing errors
    }

    setCurrentDate(now);

    // Re-check periodically so at midnight 00:00:00 it automatically activates or deactivates
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const todayFestivals = useMemo(() => {
    if (!mounted) return [];
    return getTodayFestivals(currentDate);
  }, [mounted, currentDate]);

  // If component is not mounted or today is NOT a festival day, show NOTHING
  if (!mounted || todayFestivals.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-amber-400/80 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-amber-950/40 my-3 shadow-sm select-none festival-today-glow">
      <div className="flex items-center h-12 sm:h-13 overflow-hidden relative w-full">
        <div className="festival-marquee-track flex items-center py-1 w-full">
          {/* Block 1 */}
          <div className="festival-marquee-block">
            <FestivalHoardingItems festivals={todayFestivals} />
          </div>

          {/* Block 2 (Duplicate for continuous uninterrupted loop) */}
          <div className="festival-marquee-block" aria-hidden="true">
            <FestivalHoardingItems festivals={todayFestivals} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Pure festival hoarding items:
 * Only shows the festival name and greeting.
 * Does NOT show religion/category tags (Hindu, Sikh, Jain, etc.).
 */
function FestivalHoardingItems({ festivals }: { festivals: FestivalEvent[] }) {
  return (
    <div className="flex items-center gap-12 sm:gap-16 px-6 flex-shrink-0 flex-nowrap">
      {festivals.map((f) => (
        <div
          key={f.id}
          className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/15 dark:bg-amber-500/25 border border-amber-400/60 shadow-xs flex-shrink-0 whitespace-nowrap"
        >
          <span className="text-xl sm:text-2xl">{f.icon}</span>
          <span className="font-extrabold text-sm sm:text-base text-amber-950 dark:text-amber-100">
            {f.name}:
          </span>
          <span className="text-xs sm:text-sm font-semibold text-orange-950 dark:text-orange-200">
            {f.greeting}
          </span>
          <span className="font-bold ml-1 text-base">
            {f.icon === "🇮🇳" ? "🇮🇳" : "🪔"}
          </span>
        </div>
      ))}
    </div>
  );
}
