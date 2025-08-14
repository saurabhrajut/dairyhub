
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
import { GraduationCap, FlaskConical, Rocket, Factory, Beaker, Scale, TestTube, Utensils } from "lucide-react";
import { PaneerIcon, IceCreamIcon } from "../icons";
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
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
            <DialogTitle className="text-3xl sm:text-4xl font-extrabold text-cyan-900 text-center mt-6 mb-2 font-headline">
                {content.title}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 text-lg mb-4">
                {content.description}
            </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <div className="text-center">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_6535.jpeg?alt=media&token=ef1eb6fa-e4f8-4d68-a9a6-5aab8538d8ab"
                    data-ai-hint="profile photo"
                    alt="Saurabh Rajput"
                    width={144}
                    height={144}
                    className="w-36 h-36 rounded-full object-cover mx-auto ring-4 ring-offset-4 ring-cyan-600 shadow-lg"
                />
            </div>
            
             <div className="bg-cyan-50 border-l-4 border-cyan-500 text-cyan-800 p-6 rounded-r-lg my-8" dangerouslySetInnerHTML={{ __html: content.welcomeMessage }} />

            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 font-headline">{content.journey.title}</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-2/3 space-y-4 text-gray-700 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: content.journey.story }} />
                    <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner">
                        <h3 className="text-xl font-bold text-cyan-800 mb-4 font-headline">{content.journey.academicInfo.title}</h3>
                        <ul className="space-y-4">
                            {content.journey.academicInfo.degrees.map((degree, index) => (
                                <li key={index} className="flex items-start">
                                    <GraduationCap className="text-cyan-600 mt-1 mr-3 shrink-0"/>
                                    <div>
                                        <strong className="block text-gray-800">{degree.name}</strong>
                                        <span className="text-sm text-gray-500">{degree.institution}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 font-headline">{content.whatsInside.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Factory className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[0].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[0].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><FlaskConical className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[1].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[1].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Beaker className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[2].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[2].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Scale className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[3].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[3].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><PaneerIcon className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[4].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[4].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><IceCreamIcon className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[5].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[5].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><TestTube className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[6].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[6].description}</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">{content.whatsInside.features[7].title}</h4><p className="text-sm text-muted-foreground">{content.whatsInside.features[7].description}</p></div></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center gap-3 font-headline">{content.mission.title}</h2>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: content.mission.text }} />
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-cyan-800 mb-2 flex items-center gap-3 font-headline">{content.vision.title}</h2>
                <p className="text-gray-600">{content.vision.text}</p>
              </div>
            </div>
            
            <div className="text-center mt-16 border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-800 font-headline">{content.callToAction.title}</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{content.callToAction.text}</p>
            </div>
            
            <footer className="text-center mt-12 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  {content.footer}
                </p>
            </footer>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
    
