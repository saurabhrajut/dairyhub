"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { GraduationCap, Quote, Target, HeartHandshake } from "lucide-react"; 
import { useLanguage } from "@/context/language-context";
import { aboutUsContent } from "@/lib/content/about-us-content";

export function AboutUsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(aboutUsContent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6 bg-slate-50/50">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
            <DialogTitle className="text-3xl sm:text-4xl font-extrabold text-center mt-4 mb-2 font-headline bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
                {content.title}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-500 text-lg mb-4">
                {content.description}
            </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 mt-2 sm:pr-4">
            <div className="p-4 sm:p-0 space-y-10 pb-10">
                
                {/* 1. Developer Profile Section (Hero Card) */}
                <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-10">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-10" />
                    
                    <div className="relative flex flex-col md:flex-row items-center gap-8 z-10">
                        {/* Profile Image */}
                        <div className="flex-shrink-0 relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                            <Image
                                src={content.developer.image}
                                alt={content.developer.name}
                                width={240}
                                height={240}
                                className="relative w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-2xl shadow-xl ring-4 ring-white"
                            />
                        </div>

                        {/* Info Block */}
                        <div className="flex-1 text-center md:text-left">
                             {/* Name */}
                             <h3 className="text-3xl font-bold text-gray-900 font-headline mb-6">{content.developer.name}</h3>
                             
                             {/* Academic Info */}
                             <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl inline-block w-full">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center justify-center md:justify-start gap-2">
                                    <GraduationCap className="w-5 h-5 text-blue-600"/> {content.developer.academicInfo.title}
                                </h4>
                                <ul className="space-y-3">
                                    {content.developer.academicInfo.degrees.map((degree, index) => (
                                        <li key={index} className="flex items-start bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                            <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                                            <div className="text-left">
                                                <strong className="block text-gray-900 text-sm md:text-base">{degree.name}</strong>
                                                <span className="text-xs md:text-sm text-gray-500">{degree.institution}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Welcome Message (Quote Style) */}
                <div className="max-w-4xl mx-auto text-center relative py-4">
                    <Quote className="w-10 h-10 text-cyan-200 absolute top-0 left-0 -translate-y-1/2 opacity-50" />
                    <div className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed italic px-8" dangerouslySetInnerHTML={{ __html: content.welcomeMessage }} />
                    <Quote className="w-10 h-10 text-cyan-200 absolute bottom-0 right-0 translate-y-1/2 rotate-180 opacity-50" />
                </div>

                {/* 3. My Journey (Story) */}
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 font-headline border-b pb-2">My Journey</h3>
                    <div dangerouslySetInnerHTML={{ __html: content.journey.story }} />
                </div>
                
                {/* 4. Mission & Vision (Modern Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mission Card */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 font-headline">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                            <Target className="w-6 h-6" />
                        </div>
                        {content.mission.title}
                    </h2>
                    <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.mission.text }} />
                  </div>

                  {/* Vision Card */}
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 font-headline">
                        <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                            <HeartHandshake className="w-6 h-6" />
                        </div>
                        {content.vision.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{content.vision.text}</p>
                  </div>
                </div>
                
                {/* 5. Call to Action & Footer */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden mt-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]" />
                  <div className="relative z-10">
                      <h2 className="text-2xl sm:text-3xl font-bold font-headline mb-4">{content.callToAction.title}</h2>
                      <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">{content.callToAction.text}</p>
                      
                      <div className="mt-8 pt-8 border-t border-slate-800">
                        <p className="text-sm text-slate-500 font-mono">
                          {content.footer}
                        </p>
                      </div>
                  </div>
                </div>

            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
