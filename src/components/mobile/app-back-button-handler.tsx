"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LogOut, Milk, ShieldAlert } from "lucide-react";

export function AppBackButtonHandler() {
  const router = useRouter();
  const pathname = usePathname();
  const [showExitDialog, setShowExitDialog] = useState(false);

  useEffect(() => {
    let listenerHandle: any = null;

    const setupListener = async () => {
      try {
        const { Capacitor } = await import("@capacitor/core");
        if (Capacitor.isNativePlatform()) {
          const { App } = await import("@capacitor/app");

          listenerHandle = await App.addListener("backButton", ({ canGoBack }) => {
            // 1. If exit dialog is already showing, dismiss it
            if (showExitDialog) {
              setShowExitDialog(false);
              return;
            }

            // 2. Check if any open dialog/modal is visible in DOM
            const openModals = document.querySelectorAll('[role="dialog"]');
            if (openModals.length > 0) {
              // Trigger Escape keyboard event to trigger Radix UI / custom modal dismiss
              const escapeEvent = new KeyboardEvent("keydown", {
                key: "Escape",
                code: "Escape",
                keyCode: 27,
                which: 27,
                bubbles: true,
                cancelable: true,
              });
              document.dispatchEvent(escapeEvent);

              // Also query and click top-most modal close button if available
              const closeButtons = document.querySelectorAll(
                '[role="dialog"] button[aria-label="Close"], [role="dialog"] .modal-close-btn, [role="dialog"] button:has(svg)'
              );
              if (closeButtons.length > 0) {
                const topCloseBtn = closeButtons[closeButtons.length - 1] as HTMLElement;
                if (topCloseBtn) topCloseBtn.click();
              }
              return;
            }

            // 3. If user is on a sub-route (e.g. /profile, /login, /signup), go back or go to home
            if (pathname !== "/" && pathname !== "/login") {
              if (canGoBack || (typeof window !== "undefined" && window.history.length > 1)) {
                router.back();
              } else {
                router.push("/");
              }
              return;
            }

            // 4. If user is on main home screen with no open modals, display Exit Confirmation Dialog
            setShowExitDialog(true);
          });
        }
      } catch (err) {
        console.error("Back button listener setup error:", err);
      }
    };

    setupListener();

    return () => {
      if (listenerHandle && typeof listenerHandle.remove === "function") {
        listenerHandle.remove();
      }
    };
  }, [pathname, router, showExitDialog]);

  const handleConfirmExit = async () => {
    try {
      const { App } = await import("@capacitor/app");
      App.exitApp();
    } catch (e) {
      console.error("Exit app failed", e);
      setShowExitDialog(false);
    }
  };

  return (
    <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
      <AlertDialogContent className="max-w-xs sm:max-w-sm rounded-2xl p-5 bg-slate-900 border border-slate-800 text-white shadow-2xl">
        <AlertDialogHeader className="space-y-2">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-1">
            <Milk className="w-5 h-5" />
          </div>
          <AlertDialogTitle className="text-center text-base font-bold text-white">
            Exit Dairy Hub App?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-xs text-slate-400">
            Are you sure you want to exit? Your calculations and session progress are saved.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-center gap-2 mt-4 sm:space-x-0">
          <AlertDialogCancel
            onClick={() => setShowExitDialog(false)}
            className="flex-1 h-9 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 rounded-xl"
          >
            Stay in App
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirmExit}
            className="flex-1 h-9 text-xs bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md"
          >
            <LogOut className="w-3.5 h-3.5 mr-1" /> Exit App
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AppBackButtonHandler;
