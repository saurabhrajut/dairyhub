'use client';

import { useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";
import { ShieldAlert, Lock } from "lucide-react";

export function AntiCopyGuard() {
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  const lastToastTime = useRef<number>(0);
  const isLockedRef = useRef<boolean>(false);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showWarningToast = (message: string) => {
    const now = Date.now();
    if (now - lastToastTime.current > 2000) {
      lastToastTime.current = now;
      toast({
        title: "Content Protected 🔒",
        description: message,
        variant: "destructive",
      });
    }
  };

  const clearClipboard = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('Content protected by Dairy Hub. Screenshots are disabled.').catch(() => {});
      }
    } catch {
      // Ignore clipboard errors
    }
  };

  const lockScreen = (reason?: string, durationMs: number = 3000) => {
    document.documentElement.classList.add('screenshot-blocked-active');
    document.body.classList.add('window-blurred-protection');
    isLockedRef.current = true;

    if (reason) showWarningToast(reason);
    clearClipboard();

    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    blurTimeoutRef.current = setTimeout(() => {
      unlockScreen();
    }, durationMs);
  };

  const unlockScreen = () => {
    document.documentElement.classList.remove('screenshot-blocked-active');
    document.body.classList.remove('window-blurred-protection');
    isLockedRef.current = false;
  };

  useEffect(() => {
    const isInputElement = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof HTMLElement)) return false;
      const tagName = target.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || target.isContentEditable) {
        return true;
      }
      return target.closest('input, textarea, [contenteditable="true"]') !== null;
    };

    const isMobileUA = (): boolean => {
      if (typeof window === 'undefined') return false;
      return /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Prevent context menu (right click & long press)
    const handleContextMenu = (e: MouseEvent) => {
      if (!isInputElement(e.target)) {
        e.preventDefault();
        showWarningToast("Right-click & copying is disabled on Dairy Hub.");
      }
    };

    // Prevent copy & cut
    const handleCopyCut = (e: ClipboardEvent) => {
      if (!isInputElement(e.target)) {
        e.preventDefault();
        clearClipboard();
        showWarningToast("Copying content from Dairy Hub is disabled.");
      }
    };

    // Prevent text selection start
    const handleSelectStart = (e: Event) => {
      if (!isInputElement(e.target)) {
        e.preventDefault();
      }
    };

    // Prevent drag start
    const handleDragStart = (e: DragEvent) => {
      if (!isInputElement(e.target)) {
        e.preventDefault();
      }
    };

    // Check if key combo matches screenshot shortcuts
    const isScreenshotHotkey = (e: KeyboardEvent): boolean => {
      const key = e.key ? e.key.toLowerCase() : '';
      const code = e.code ? e.code.toLowerCase() : '';

      // PrintScreen / PrtScn / SysReq (Windows/Linux)
      if (key === 'printscreen' || key === 'prtscn' || code === 'printscreen' || key === 'sysreq') {
        return true;
      }

      // Windows Snipping Tool (Win + Shift + S) or Shift + Win + S
      if ((e.metaKey || (e as unknown as { winKey?: boolean }).winKey || key === 'meta' || key === 'os') && e.shiftKey && (key === 's' || code === 'keys')) {
        return true;
      }

      // Windows Game Bar / Snipping combos (Win + G, Win + Alt + PrtScn, Alt + PrtScn, Ctrl + PrtScn)
      if ((e.metaKey || e.ctrlKey || e.altKey) && (key === 'printscreen' || code === 'printscreen')) {
        return true;
      }
      if ((e.metaKey || key === 'meta' || key === 'os') && key === 'g') {
        return true;
      }

      // Mac Screenshot Hotkeys: Cmd+Shift+3, Cmd+Shift+4, Cmd+Shift+5, Cmd+Ctrl+Shift+4
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && ['3', '4', '5', 's'].includes(key)) {
        return true;
      }

      // Chrome / Edge / Firefox screenshot shortcuts (Ctrl + Shift + S)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (key === 's' || code === 'keys')) {
        return true;
      }

      return false;
    };

    // Comprehensive Keyboard shortcuts protection & screenshot hotkey interception
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = isInputElement(e.target);
      const key = e.key ? e.key.toLowerCase() : '';

      // Check screenshot hotkeys immediately
      if (isScreenshotHotkey(e)) {
        e.preventDefault();
        e.stopPropagation();
        lockScreen("Screenshot attempt detected & blocked.", 3000);
        return;
      }

      // Block Ctrl+P / Cmd+P (Print Page)
      if ((e.ctrlKey || e.metaKey) && key === 'p') {
        e.preventDefault();
        lockScreen("Printing content is disabled on Dairy Hub.", 3000);
        return;
      }

      // Block Ctrl+C / Cmd+C (if not in input)
      if ((e.ctrlKey || e.metaKey) && key === 'c') {
        if (!isInput) {
          e.preventDefault();
          clearClipboard();
          showWarningToast("Copy shortcut is disabled.");
        }
      }

      // Block Ctrl+X / Cmd+X (if not in input)
      if ((e.ctrlKey || e.metaKey) && key === 'x') {
        if (!isInput) {
          e.preventDefault();
          clearClipboard();
          showWarningToast("Cut shortcut is disabled.");
        }
      }

      // Block Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && key === 'u') {
        e.preventDefault();
        showWarningToast("View page source is restricted.");
      }

      // Block Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && key === 's') {
        e.preventDefault();
        showWarningToast("Saving page content is disabled.");
      }

      // Block F12 & DevTools shortcuts
      if (
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(key)) ||
        (e.metaKey && e.altKey && ['i', 'j', 'c'].includes(key))
      ) {
        e.preventDefault();
        lockScreen("Developer tools shortcut is disabled.", 3000);
      }
    };

    // Catch keyup as well (critical for PrintScreen which triggers on release in some OS)
    const handleKeyUp = (e: KeyboardEvent) => {
      if (isScreenshotHotkey(e)) {
        e.preventDefault();
        e.stopPropagation();
        lockScreen("Screenshot attempt detected & blocked.", 3000);
      }
    };

    // Obscure DOM instantly when app is hidden or blurred during hardware screen capture (mobile & desktop)
    const handleWindowBlur = () => {
      const active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || (active as HTMLElement).isContentEditable)) {
        return;
      }
      lockScreen(undefined, 3000);
    };

    const handleWindowFocus = () => {
      setTimeout(() => {
        unlockScreen();
      }, 300);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        lockScreen(undefined, 3000);
      } else {
        setTimeout(() => {
          unlockScreen();
        }, 300);
      }
    };

    // Detect DevTools dock/open on Desktop PC/Laptop ONLY
    const checkDevTools = () => {
      if (isMobileUA()) return;
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      if (widthThreshold || heightThreshold) {
        document.body.classList.add('window-blurred-protection');
      }
    };

    const devToolsInterval = setInterval(checkDevTools, 1500);

    // Add event listeners (capture phase true ensures keydown is handled before browser default)
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopyCut);
    document.addEventListener('cut', handleCopyCut);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('keyup', handleKeyUp, true);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('pagehide', handleWindowBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyCut);
      document.removeEventListener('cut', handleCopyCut);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('keyup', handleKeyUp, true);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('pagehide', handleWindowBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(devToolsInterval);
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Synchronous CSS & React Screenshot Blackout Overlay */}
      <div 
        id="pc-screenshot-guard-overlay"
        className="fixed inset-0 z-[999999] bg-slate-950/98 backdrop-blur-3xl hidden flex-col items-center justify-center text-white text-center p-6 select-none pointer-events-auto"
      >
        <div className="bg-red-500/20 p-5 rounded-full mb-4 border border-red-500/30">
          <ShieldAlert className="w-14 h-14 text-red-500 animate-bounce" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">Screenshot Blocked 🔒</h2>
        <p className="text-slate-300 max-w-md text-sm sm:text-base leading-relaxed">
          Content capturing & screenshots are restricted on Dairy Hub to protect proprietary data.
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-800">
          <Lock className="w-3.5 h-3.5 text-amber-400" />
          Protected by Dairy Hub Content Guard
        </div>
      </div>
    </>
  );
}

