"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Video, Clock, CheckCircle, ExternalLink, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface TutorialVideosModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface VideoTutorial {
  id: string;
  title: string;
  duration: string;
  category: "calculators" | "qa-qc" | "processing" | "sarathi";
  description: string;
  youtubeId: string; // YouTube Video Embed ID
  thumbnailBg: string;
  bullets: string[];
}

const TUTORIAL_VIDEOS: VideoTutorial[] = [
  {
    id: "std-calc",
    title: "Milk Standardization & Pearson Square",
    duration: "4:45",
    category: "calculators",
    description: "Learn how to accurately standardise Fat and SNF percentages in raw milk batches using Pearson Square and blending calculations.",
    youtubeId: "L_LUpnjgPso", // Dairy Milk Standardization & Pearson Square
    thumbnailBg: "from-blue-600 to-indigo-700",
    bullets: [
      "Target Fat & SNF calculation methodology",
      "Blending skim milk & cream proportioning",
      "Avoiding costly milk solids loss in plant batches",
    ],
  },
  {
    id: "platform-test",
    title: "Platform Testing & Quality Control",
    duration: "6:10",
    category: "qa-qc",
    description: "Step-by-step visual demonstration of platform tests: MBRT, alcohol test, lactometer SNF estimation, and adulterant testing.",
    youtubeId: "3Q9Zp8x9Wms", // Milk Platform Test Demonstration
    thumbnailBg: "from-emerald-600 to-teal-700",
    bullets: [
      "Correct lactometer reading & temperature correction",
      "Rapid adulteration detection (starch, urea, detergent)",
      "Quality grading on milk reception dock",
    ],
  },
  {
    id: "cip-guide",
    title: "CIP System Optimization & Sanitization",
    duration: "5:30",
    category: "processing",
    description: "Master Clean-In-Place chemical dosing calculations, temperature-time cycles, and sanitization validation for pasteurizers & silos.",
    youtubeId: "J---aiyznGQ", // Clean in Place CIP Dairy Systems
    thumbnailBg: "from-purple-600 to-violet-700",
    bullets: [
      "Caustic & acid solution strength calculation",
      "Rinse cycle efficiency & chemical conservation",
      "Preventing milk stone accumulation",
    ],
  },
  {
    id: "solutions-prep",
    title: "Lab Chemical Solutions & Titrations",
    duration: "3:50",
    category: "calculators",
    description: "Visual guide on preparing N/10 NaOH, phenolphthalein indicator, Gerber sulfuric acid, and standard volumetric reagents.",
    youtubeId: "8rQI8RyaVvw", // Preparation of Volumetric Solutions
    thumbnailBg: "from-amber-600 to-orange-700",
    bullets: [
      "Normality and Molarity calculations",
      "Safe handling of concentrated lab acids",
      "Standardization against primary standards",
    ],
  },
  {
    id: "sarathi-ai",
    title: "Sarathi AI Assistant - Instant Dairy Solutions",
    duration: "3:15",
    category: "sarathi",
    description: "How to use Sarathi AI to resolve complex processing issues, troubleshoot product defects, and ask dairy technology questions.",
    youtubeId: "5qap5aO4i9A", // AI Assistant in Dairy Technology
    thumbnailBg: "from-cyan-600 to-blue-700",
    bullets: [
      "Voice & text prompt best practices",
      "Troubleshooting cheese, dahi & ghee defects",
      "FSSAI standards quick search",
    ],
  },
];

export function TutorialVideosModal({ open, onOpenChange }: TutorialVideosModalProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(TUTORIAL_VIDEOS[0]);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const filteredVideos = TUTORIAL_VIDEOS.filter((v) => filterCategory === "all" || v.category === filterCategory);

  const handleSelectVideo = (video: VideoTutorial) => {
    setSelectedVideo(video);
    setIsPlaying(true); // Auto play selected video iframe
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl rounded-2xl bg-slate-950 text-white border border-slate-800 p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="p-5 border-b border-slate-800/80 bg-slate-900/60 flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
                Dairy Hub Video Tutorials
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-[10px]">
                  Visual Learning
                </Badge>
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-400">
                Step-by-step video guides for key calculators, QA testing & dairy plant operations.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[75vh] overflow-y-auto">
          {/* Main Video View Area */}
          <div className="md:col-span-7 p-5 bg-slate-950 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800/80 space-y-4">
            {selectedVideo ? (
              <div className="space-y-4">
                {/* Video Player Frame / Iframe */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 group shadow-lg">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className={cn("absolute inset-0 bg-gradient-to-br flex flex-col items-center justify-center p-6 text-center", selectedVideo.thumbnailBg)}>
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110"
                        title="Click to Play Video"
                      >
                        <Play className="w-8 h-8 fill-white ml-1" />
                      </button>
                      <h4 className="mt-3 text-sm font-bold text-white drop-shadow-md">{selectedVideo.title}</h4>
                      <span className="text-[11px] text-white/90 mt-1 flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" /> {selectedVideo.duration} mins
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-bold text-white">{selectedVideo.title}</h3>
                    <div className="flex items-center gap-2">
                      {isPlaying && (
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                        >
                          <RefreshCw className="w-3 h-3" /> Replay Thumbnail
                        </button>
                      )}
                      <a
                        href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-blue-400 hover:underline flex items-center gap-1 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/60"
                      >
                        <ExternalLink className="w-3 h-3" /> YouTube
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{selectedVideo.description}</p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Key Takeaways</span>
                  <ul className="space-y-1">
                    {selectedVideo.bullets.map((b, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 text-slate-500 text-xs">Select a video tutorial to begin watching.</div>
            )}
          </div>

          {/* Video List Sidebar */}
          <div className="md:col-span-5 p-4 bg-slate-900/40 space-y-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
              {[
                { id: "all", label: "All" },
                { id: "calculators", label: "Calculators" },
                { id: "qa-qc", label: "QA / QC" },
                { id: "processing", label: "Processing" },
                { id: "sarathi", label: "AI Guide" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors",
                    filterCategory === cat.id
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-slate-800/80 text-slate-400 hover:text-slate-200"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* List items */}
            <div className="space-y-2">
              {filteredVideos.map((video) => {
                const isSelected = selectedVideo?.id === video.id;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={cn(
                      "p-3 rounded-xl border text-left cursor-pointer transition-all flex items-start justify-between gap-2 group",
                      isSelected
                        ? "bg-blue-950/60 border-blue-500 text-white shadow-md"
                        : "bg-slate-900/80 border-slate-800/80 text-slate-300 hover:border-slate-700"
                    )}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Play className={cn("w-3.5 h-3.5 shrink-0", isSelected ? "text-blue-400 fill-blue-400" : "text-slate-400")} />
                        <h4 className="text-xs font-semibold group-hover:text-white line-clamp-1">{video.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{video.description}</p>
                    </div>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-800/90 px-1.5 py-0.5 rounded shrink-0">
                      {video.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
