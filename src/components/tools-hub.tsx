"use client";

import React, { useState } from "react";
import {
  Calculator,
  Beaker,
  FlaskConical,
  Droplet,
  Thermometer,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  FileText,
  Briefcase,
  Bot,
  GraduationCap,
  Rocket
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface ToolsHubProps {
  onOpenModal: (modalId: string) => void;
}

export function ToolsHub({ onOpenModal }: ToolsHubProps) {
  // 1. SNF & TS Calculator State
  const [clrInput, setClrInput] = useState<string>("28");
  const [fatInput, setFatInput] = useState<string>("4.5");
  const [snfResult, setSnfResult] = useState<number | null>(7.91);
  const [tsResult, setTsResult] = useState<number | null>(12.41);

  // 2. CLR Temperature Correction State
  const [obsClr, setObsClr] = useState<string>("28");
  const [obsTemp, setObsTemp] = useState<string>("25");
  const [correctedClr, setCorrectedClr] = useState<number | null>(29.0);

  // 3. Milk Acidity Calculator State
  const [naohVol, setNaohVol] = useState<string>("1.5");
  const [milkVol, setMilkVol] = useState<string>("10");
  const [acidityResult, setAcidityResult] = useState<number | null>(0.135);

  // 4. CIP Lye Dosing Calculator State
  const [targetLyePercent, setTargetLyePercent] = useState<string>("1.5");
  const [tankWaterLiters, setTankWaterLiters] = useState<string>("1000");
  const [lyeReqLiters, setLyeReqLiters] = useState<number | null>(21.4);

  // Calculate SNF & TS
  const handleCalcSnf = () => {
    const clr = parseFloat(clrInput);
    const fat = parseFloat(fatInput);
    if (!isNaN(clr) && !isNaN(fat)) {
      const snf = clr / 4 + 0.2 * fat + 0.36;
      const ts = fat + snf;
      setSnfResult(parseFloat(snf.toFixed(2)));
      setTsResult(parseFloat(ts.toFixed(2)));
    }
  };

  // Calculate Temperature Corrected CLR
  const handleCalcClrTemp = () => {
    const clr = parseFloat(obsClr);
    const temp = parseFloat(obsTemp);
    if (!isNaN(clr) && !isNaN(temp)) {
      const corr = clr + (temp - 20) * 0.2;
      setCorrectedClr(parseFloat(corr.toFixed(1)));
    }
  };

  // Calculate Milk Acidity %
  const handleCalcAcidity = () => {
    const v = parseFloat(naohVol);
    const m = parseFloat(milkVol);
    if (!isNaN(v) && !isNaN(m) && m > 0) {
      const acid = (v * 0.009 / m) * 100;
      setAcidityResult(parseFloat(acid.toFixed(3)));
    }
  };

  // Calculate CIP Lye Dosing
  const handleCalcCip = () => {
    const targetP = parseFloat(targetLyePercent);
    const waterL = parseFloat(tankWaterLiters);
    if (!isNaN(targetP) && !isNaN(waterL) && waterL > 0) {
      const lyeL = (waterL * targetP) / (70 - targetP);
      setLyeReqLiters(parseFloat(lyeL.toFixed(1)));
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* FEATURED: NTA / GATE Style 120 Qs Test Series Card */}
      <div className="p-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white rounded-2xl shadow-lg border border-amber-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-inner">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-slate-950 text-amber-400 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
              🏆 NTA & GATE Style Live Exam
            </span>
            <h3 className="font-extrabold text-base text-white leading-tight">
              Dairy & Food Tech Test Series (120 Qs)
            </h3>
            <p className="text-xs text-amber-100 mt-0.5">
              Practice real-time exam center simulation with live timer, question palette, negative marking & detailed scorecard.
            </p>
          </div>
        </div>

        <Button
          onClick={() => onOpenModal("test-series")}
          className="bg-slate-950 hover:bg-slate-900 text-amber-400 font-black text-xs px-5 py-2.5 rounded-xl shrink-0 shadow-md flex items-center gap-1.5 transition-transform active:scale-95 border border-amber-400/40"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          Launch 120 Qs Test Series
          <ChevronRight className="w-4 h-4 text-amber-400" />
        </Button>
      </div>

      {/* FEATURED: Saarthi AI Dairy Assistant & Expert Bot */}
      <div className="p-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl shadow-lg border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/40 backdrop-blur-sm border border-indigo-400/40 flex items-center justify-center text-white shrink-0 shadow-inner">
            <Bot className="w-7 h-7 text-indigo-300 animate-pulse" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-emerald-400 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
              🤖 AI Plant Assistant
            </span>
            <h3 className="font-extrabold text-base text-white leading-tight">
              Saarthi AI Dairy & Food Chatbot
            </h3>
            <p className="text-xs text-indigo-200 mt-0.5">
              Ask QA/QC calculations, HTST pasteurization troubleshooting, CIP guidelines, or mock interview questions.
            </p>
          </div>
        </div>

        <Button
          onClick={() => onOpenModal("sarathi-bot")}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl shrink-0 shadow-md flex items-center gap-1.5 transition-transform active:scale-95 border border-indigo-400/30"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          Launch Saarthi AI Bot
          <ChevronRight className="w-4 h-4 text-white" />
        </Button>
      </div>

      {/* FEATURED: Dairy & Food Professional Job Launchpad Card */}
      <div className="p-4 bg-gradient-to-r from-emerald-700 via-teal-800 to-indigo-900 text-white rounded-2xl shadow-lg border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-inner">
            <Rocket className="w-7 h-7 text-amber-300 animate-pulse" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
              🚀 Dairy & Food Industry Community Career Portal
            </span>
            <h3 className="font-extrabold text-base text-white leading-tight">
              Dairy & Food Professional Job Launchpad
            </h3>
            <p className="text-xs text-emerald-100 mt-0.5">
              Publish hiring vacancies for your company or post your candidate profile for recruiters across Dairy & Food sectors.
            </p>
          </div>
        </div>

        <Button
          onClick={() => onOpenModal("job-launchpad")}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shrink-0 shadow-md flex items-center gap-1.5 transition-transform active:scale-95 border border-amber-500/40"
        >
          <Rocket className="w-4 h-4 text-slate-950" />
          Open Job Launchpad
          <ChevronRight className="w-4 h-4 text-slate-950" />
        </Button>
      </div>

      {/* FEATURED: Dairy & Food Professional Resume Builder Card */}
      <div className="p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white rounded-2xl shadow-lg border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-inner">
            <FileText className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
              ✨ Featured Career Tool
            </span>
            <h3 className="font-extrabold text-base text-white leading-tight">
              Dairy & Food Tech Resume Builder
            </h3>
            <p className="text-xs text-blue-100 mt-0.5">
              Create ATS-formatted professional resumes pre-filled with QA/QC, Plant Production & Lab skills.
            </p>
          </div>
        </div>

        <Button
          onClick={() => onOpenModal("resume-maker")}
          className="bg-white text-indigo-900 hover:bg-blue-50 font-extrabold text-xs px-4 py-2 rounded-xl shrink-0 shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
        >
          <Briefcase className="w-4 h-4 text-indigo-600" />
          Open Resume Builder
          <ChevronRight className="w-4 h-4 text-indigo-600" />
        </Button>
      </div>

      {/* FEATURED: Non-Dairy Food Products Testing Launchpad Card */}
      <div className="p-4 bg-gradient-to-r from-teal-800 via-emerald-900 to-indigo-950 text-white rounded-2xl shadow-lg border border-teal-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-inner">
            <FlaskConical className="w-7 h-7 text-emerald-300 animate-pulse" />
          </div>
          <div>
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
              🧪 Food Quality & Safety Testing Portal
            </span>
            <h3 className="font-extrabold text-base text-white leading-tight">
              Food Products Quality & Safety Testing Launchpad
            </h3>
            <p className="text-xs text-teal-100 mt-0.5">
              Comprehensive SOPs, scientific principles, adulteration tests & FSSAI limits for Cereals, Oils, Spices, Honey, Beverages & Meat.
            </p>
          </div>
        </div>

        <Button
          onClick={() => onOpenModal("food-testing-launchpad")}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shrink-0 shadow-md flex items-center gap-1.5 transition-transform active:scale-95 border border-amber-500/40"
        >
          <FlaskConical className="w-4 h-4 text-slate-950" />
          Launch Food Testing Portal
          <ChevronRight className="w-4 h-4 text-slate-950" />
        </Button>
      </div>

      {/* Interactive Quick Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tool 1: SNF & Total Solids Calculator */}
        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl border-b border-slate-100">
            <CardTitle className="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-2 text-indigo-900">
                <Droplet className="w-4 h-4 text-blue-600" />
                1. Milk SNF % & Total Solids (TS) Tool
              </span>
              <Badge variant="outline" className="text-[10px] bg-white border-blue-200 text-blue-700 font-bold">
                ISI Formula
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Lactometer (CLR)</Label>
                <Input
                  type="number"
                  step="0.5"
                  value={clrInput}
                  onChange={(e) => setClrInput(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 28"
                />
              </div>
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Milk Fat %</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={fatInput}
                  onChange={(e) => setFatInput(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 4.5"
                />
              </div>
            </div>

            <Button
              onClick={handleCalcSnf}
              size="sm"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs h-8"
            >
              Calculate SNF & TS %
            </Button>

            {snfResult !== null && (
              <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 flex items-center justify-between text-xs font-bold text-indigo-950">
                <div>
                  <span className="text-slate-500 font-normal">Calculated SNF:</span>
                  <span className="text-sm font-extrabold text-indigo-700 ml-1.5">{snfResult}%</span>
                </div>
                <div>
                  <span className="text-slate-500 font-normal">Total Solids (TS):</span>
                  <span className="text-sm font-extrabold text-emerald-700 ml-1.5">{tsResult}%</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tool 2: CLR Temperature Correction Tool */}
        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-t-2xl border-b border-slate-100">
            <CardTitle className="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-2 text-amber-900">
                <Thermometer className="w-4 h-4 text-amber-600" />
                2. CLR Temperature Correction (20°C Std)
              </span>
              <Badge variant="outline" className="text-[10px] bg-white border-amber-200 text-amber-700 font-bold">
                Ref Temp 20°C
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Observed CLR</Label>
                <Input
                  type="number"
                  step="0.5"
                  value={obsClr}
                  onChange={(e) => setObsClr(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 28"
                />
              </div>
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Sample Temp (°C)</Label>
                <Input
                  type="number"
                  step="0.5"
                  value={obsTemp}
                  onChange={(e) => setObsTemp(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 25"
                />
              </div>
            </div>

            <Button
              onClick={handleCalcClrTemp}
              size="sm"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs h-8"
            >
              Correct CLR to 20°C
            </Button>

            {correctedClr !== null && (
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-100 flex items-center justify-between text-xs font-bold text-amber-950">
                <span className="text-slate-500 font-normal">Corrected CLR (at 20°C):</span>
                <span className="text-sm font-extrabold text-amber-800">{correctedClr}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tool 3: Milk Acidity % (Lactic Acid) Calculator */}
        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-t-2xl border-b border-slate-100">
            <CardTitle className="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-2 text-emerald-900">
                <Beaker className="w-4 h-4 text-emerald-600" />
                3. Milk Titratable Acidity % Calculator
              </span>
              <Badge variant="outline" className="text-[10px] bg-white border-emerald-200 text-emerald-700 font-bold">
                N/10 NaOH Titration
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">N/10 NaOH Used (mL)</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={naohVol}
                  onChange={(e) => setNaohVol(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 1.5"
                />
              </div>
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Milk Sample (mL)</Label>
                <Input
                  type="number"
                  step="1"
                  value={milkVol}
                  onChange={(e) => setMilkVol(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 10"
                />
              </div>
            </div>

            <Button
              onClick={handleCalcAcidity}
              size="sm"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-8"
            >
              Calculate Acidity %
            </Button>

            {acidityResult !== null && (
              <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-950">
                <span className="text-slate-500 font-normal">Titratable Acidity:</span>
                <span className="text-sm font-extrabold text-emerald-700">
                  {acidityResult}% Lactic Acid
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tool 4: CIP Lye Concentration Chemical Dosing Tool */}
        <Card className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="p-4 pb-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-2xl border-b border-slate-100">
            <CardTitle className="text-sm font-bold text-slate-900 flex items-center justify-between">
              <span className="flex items-center gap-2 text-purple-900">
                <RefreshCw className="w-4 h-4 text-purple-600" />
                4. CIP Lye Dosing Calculator (70% NaOH)
              </span>
              <Badge variant="outline" className="text-[10px] bg-white border-purple-200 text-purple-700 font-bold">
                Plant CIP Lye Tank
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Target Lye Conc %</Label>
                <Input
                  type="number"
                  step="0.1"
                  value={targetLyePercent}
                  onChange={(e) => setTargetLyePercent(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 1.5"
                />
              </div>
              <div>
                <Label className="text-slate-600 text-[11px] font-semibold">Tank Water (Liters)</Label>
                <Input
                  type="number"
                  step="100"
                  value={tankWaterLiters}
                  onChange={(e) => setTankWaterLiters(e.target.value)}
                  className="mt-1 h-8 text-xs font-bold"
                  placeholder="e.g. 1000"
                />
              </div>
            </div>

            <Button
              onClick={handleCalcCip}
              size="sm"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs h-8"
            >
              Calculate Required 70% Lye
            </Button>

            {lyeReqLiters !== null && (
              <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-100 flex items-center justify-between text-xs font-bold text-purple-950">
                <span className="text-slate-500 font-normal">70% Caustic Soda Required:</span>
                <span className="text-sm font-extrabold text-purple-700">{lyeReqLiters} Liters</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Free Lifetime Guarantee Footer */}
      <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3 text-emerald-950 text-xs font-medium">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
        <div>
          <span className="font-extrabold text-emerald-900 block text-sm">
            100% Free Lifetime Dairy & Food Tools
          </span>
          All calculations execute locally on your device with zero subscriptions, zero API fees, and zero hidden charges forever.
        </div>
      </div>
    </div>
  );
}
