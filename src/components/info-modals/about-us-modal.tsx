"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { 
  GraduationCap, 
  Quote, 
  Target, 
  Share2, 
  User, 
  Rocket, 
  Heart 
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { aboutUsContent } from "@/lib/content/about-us-content";

// ─────────────────────────────────────────────────────────────────
// Shared UI Component (Matching Chemistry Modal Icons)
// ─────────────────────────────────────────────────────────────────
const SectionHead = ({ title, icon: Icon, gradient }: { title: string; icon: any; gradient: string }) => (
  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200">
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
      style={{ background: gradient }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <h2 className="text-base sm:text-lg font-bold text-slate-800 leading-tight" style={{ wordBreak: "break-word" }}>
      {title}
    </h2>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────────────────────────
export function AboutUsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(aboutUsContent);

  // Share function
  const handleShare = async () => {
    const shareData = {
      title: "Check out this App!",
      text: "I found this amazing app, you should check it out!",
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <style dangerouslySetInnerHTML={{ __html: `
        .strict-html-wrap {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .strict-html-wrap, .strict-html-wrap *:not(table):not(thead):not(tbody):not(tr):not(th):not(td) {
          overflow-wrap: break-word !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
        }
      `}} />

      {/* Adapted full-screen mobile to rounded modal design */}
      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
        [&>button]:!text-white
      ">
        {/* ── Top Header Bar (Matching Chemistry Modal) ───────── */}
        <div className="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-950 px-3 sm:px-6 py-3 sm:py-5 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              ℹ️ {content.title}
            </DialogTitle>
            <DialogDescription className="text-center text-cyan-200/80 text-[11px] sm:text-sm line-clamp-2 px-2 mt-1.5">
              {content.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* ── Content Area ───────────────────────── */}
        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50 strict-html-wrap">
          <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8 pb-12">
            
            {/* 1. Developer Profile Section */}
            <div className="space-y-4">
              <SectionHead title="Developer Profile" icon={User} gradient="linear-gradient(135deg,#0284c7,#0369a1)" />
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-600" />
                
                <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <Image
                      src={content.developer.image}
                      alt={content.developer.name}
                      width={240}
                      height={240}
                      className="relative w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-2xl shadow-md ring-4 ring-white"
                    />
                  </div>

                  {/* Info Block styled as a "Chemistry Card" */}
                  <div className="flex-1 text-center md:text-left w-full mt-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 font-headline mb-5">{content.developer.name}</h3>
                    
                    <div className="border-l-4 border-cyan-500 bg-cyan-50/80 rounded-r-xl p-4 sm:p-5 shadow-sm inline-block w-full text-left">
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-4 text-cyan-800 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" /> {content.developer.academicInfo.title}
                      </p>
                      <ul className="space-y-3">
                        {content.developer.academicInfo.degrees.map((degree: any, index: number) => (
                          <li key={index} className="flex items-start bg-white p-3 rounded-lg border border-cyan-100 shadow-sm">
                            <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                            <div>
                              <strong className="block text-slate-800 text-sm leading-tight mb-0.5">{degree.name}</strong>
                              <span className="text-xs text-slate-500">{degree.institution}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Welcome Message (Quote Style) */}
            <div className="max-w-3xl mx-auto text-center relative py-6 my-4">
              <Quote className="w-8 h-8 text-cyan-300 absolute top-0 left-0 -translate-y-1/2 opacity-40" />
              <div className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic px-8" dangerouslySetInnerHTML={{ __html: content.welcomeMessage }} />
              <Quote className="w-8 h-8 text-cyan-300 absolute bottom-0 right-0 translate-y-1/2 rotate-180 opacity-40" />
            </div>

            {/* 3. My Journey */}
            <div className="space-y-4">
              <SectionHead title="My Journey" icon={Rocket} gradient="linear-gradient(135deg,#8b5cf6,#6d28d9)" />
              <div className="prose prose-sm sm:prose-base max-w-none text-slate-700 leading-relaxed bg-white p-5 sm:p-6 rounded-r-2xl border border-slate-200 shadow-sm border-l-4 border-l-purple-500">
                <div dangerouslySetInnerHTML={{ __html: content.journey.story }} />
              </div>
            </div>
            
            {/* 4. Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="space-y-4">
                <SectionHead title={content.mission.title} icon={Target} gradient="linear-gradient(135deg,#3b82f6,#1d4ed8)" />
                <div className="bg-white p-5 rounded-r-2xl border border-slate-200 shadow-sm border-l-4 border-l-blue-500 text-sm leading-6 text-slate-700 h-full">
                  <div dangerouslySetInnerHTML={{ __html: content.mission.text }} />
                </div>
              </div>

              {/* Vision Card */}
              <div className="space-y-4">
                <SectionHead title={content.vision.title} icon={Heart} gradient="linear-gradient(135deg,#ec4899,#be185d)" />
                <div className="bg-white p-5 rounded-r-2xl border border-slate-200 shadow-sm border-l-4 border-l-pink-500 text-sm leading-6 text-slate-700 h-full">
                  <p>{content.vision.text}</p>
                </div>
              </div>
            </div>
            
            {/* 5. Call to Action, Share Button & Footer */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 text-center shadow-lg relative overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900 z-0" />
              <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold font-headline mb-3">{content.callToAction.title}</h2>
                  <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">{content.callToAction.text}</p>
                  
                  <button 
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-md mb-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share with Friends
                  </button>
                  
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 font-mono">
                      {content.footer}
                    </p>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
