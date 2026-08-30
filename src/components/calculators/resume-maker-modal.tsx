"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ResumeMakerCalc } from "./resume-maker-calc";

interface ResumeMakerModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function ResumeMakerModal({ isOpen, setIsOpen }: ResumeMakerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl w-[96vw] max-h-[94vh] h-[94vh] flex flex-col p-2 sm:p-4 gap-0 rounded-2xl overflow-hidden">
        <DialogHeader className="p-2 sm:p-3 pb-2 border-b">
          <DialogTitle className="text-base sm:text-lg font-bold text-slate-900 flex items-center justify-between">
            <span>📄 Dairy & Food Technology Professional Resume Builder</span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-1 sm:p-2">
          <ResumeMakerCalc />
        </div>
      </DialogContent>
    </Dialog>
  );
}
