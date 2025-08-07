
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


export function AboutUsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
            <DialogTitle className="text-3xl sm:text-4xl font-extrabold text-cyan-900 text-center mt-6 mb-2 font-headline">
                Behind Dairy Hub
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 text-lg mb-4">
                The story of your trusted digital dairy partner
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
            
             <div className="bg-cyan-50 border-l-4 border-cyan-500 text-cyan-800 p-6 rounded-r-lg my-8">
                <p className="text-lg">
                  <span className="font-bold">Welcome to Dairy Hub!</span> Humara maksad dairy industry se judi har zaroori jaankari ko aap tak <strong className="font-semibold">saral, sateek aur scientific</strong> tarike se pahuchana hai. Yeh platform un sabhi ke liye hai jo is sector mein seekhna aur aage badhna chahte hain.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 font-headline">Mera Safar: Dairy Technology Ke Pratishtha Tak</h2>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-2/3 space-y-4 text-gray-700 text-base leading-relaxed">
                        <p>Mera naam <strong>Saurabh Rajput</strong> hai, aur Dairy Hub mera ek sapna hai jise maine aap sab ke liye hakikat banaya hai.</p>
                        <p>Food aur Dairy Technology ke kshetra mein meri ruchi hamesha se rahi hai. Apni study and internships ke dauran, maine mehsoos kiya ki is industry mein practical aur aasaani se samajh aane wali scientific knowledge ki kami hai, khaaskar digital platforms par. Isi kami ko pura karne ke liye maine Dairy Hub ki neev rakhi.</p>
                        <p>Mera lakshya ek aisa digital ecosystem banana hai jahan students, professionals, aur dairy enthusiasts aasani se dairy se judi har technical jaankari prapt kar sakein aur apne kaam mein behtar decision le sakein.</p>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner">
                        <h3 className="text-xl font-bold text-cyan-800 mb-4 font-headline">Academic Information</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <GraduationCap className="text-cyan-600 mt-1 mr-3 shrink-0"/>
                                <div>
                                    <strong className="block text-gray-800">B.Tech, Food Technology</strong>
                                    <span className="text-sm text-gray-500">Ch. Devi Lal State Institute, Sirsa (Pursuing)</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FlaskConical className="text-cyan-600 mt-1 mr-3 shrink-0"/>
                                <div>
                                    <strong className="block text-gray-800">Diploma, Dairy Technology</strong>
                                    <span className="text-sm text-gray-500">IGNOU</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <GraduationCap className="text-cyan-600 mt-1 mr-3 shrink-0"/>
                                <div>
                                    <strong className="block text-gray-800">Diploma, Food Technology</strong>
                                    <span className="text-sm text-gray-500">Govt. Polytechnic, Bhiwani</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 font-headline">What's Inside Dairy Hub?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Factory className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Dairy Industry Insights</h4><p className="text-sm text-muted-foreground">Get the latest trends, stats, and updates from the Indian dairy sector.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><FlaskConical className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Milk Chemistry</h4><p className="text-sm text-muted-foreground">Deep dive into milk composition, proteins, and properties.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Beaker className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Solutions Preparation</h4><p className="text-sm text-muted-foreground">Calculate and prepare various lab reagents and solutions accurately.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Scale className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Standardization Calculators</h4><p className="text-sm text-muted-foreground">Pearson square, blending, and advanced calculations for milk standardization.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><PaneerIcon className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Paneer Production</h4><p className="text-sm text-muted-foreground">Master the industrial process and calculate paneer yield.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><IceCreamIcon className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Ice Cream Calculations</h4><p className="text-sm text-muted-foreground">Formulate mixes, calculate overrun, and determine freezing points.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><TestTube className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Compositional Analysis</h4><p className="text-sm text-muted-foreground">Learn chemical testing methods for various dairy products.</p></div></div>
                    <div className="bg-white p-4 rounded-lg border flex items-start gap-4"><Utensils className="w-8 h-8 text-primary shrink-0 mt-1" /><div><h4 className="font-semibold">Food Technology</h4><p className="text-sm text-muted-foreground">Explore core concepts of food science, from processing to packaging.</p></div></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-cyan-800 mb-4 flex items-center gap-3 font-headline">Humara Mission</h2>
                <p className="text-gray-600">Har user tak <strong>sahi, scientific aur practical dairy knowledge</strong> pahuchana – bina kisi confusion ke.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-cyan-800 mb-2 flex items-center gap-3 font-headline">Humara Vision</h2>
                <p className="text-gray-600">India ke dairy sector ko digital support dena, jisse naye learners aur professionals smart decisions le sakein.</p>
              </div>
            </div>
            
            <div className="text-center mt-16 border-t border-gray-200 pt-10">
              <h2 className="text-3xl font-bold text-gray-800 font-headline">Aaiye, Saath Milkar Aage Badhein</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Aapka feedback humare liye anmol hai. Agar aapko app pasand aaye, to please share karein, review karein, aur hume behtar banne mein madad karein.</p>
            </div>
            
            <footer className="text-center mt-12 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Made with ❤️ by Saurabh Rajput | Dairy Hub App
                </p>
            </footer>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
    
