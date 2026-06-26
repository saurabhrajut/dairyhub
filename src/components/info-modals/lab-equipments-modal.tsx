"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";
import { labEquipmentsContent } from "@/lib/content/lab-equipments-content";
import {
  Search,
  ArrowLeft,
  Microscope,
  FlaskConical,
  FlaskRound,
  Waves,
  Heater,
  ThermometerSun,
  ShieldPlus,
  Flame,
  Refrigerator,
  Pipette,
  Hourglass,
  Beaker,
  Cylinder,
  Filter,
  CookingPot,
  Thermometer,
  Timer,
  Ruler,
  ScanLine,
  PcCase,
  Orbit,
  Tornado,
  Zap,
  Activity,
  RotateCw,
  LayoutGrid,
} from "lucide-react";

// ─────────────────────────────────────────────
// Configuration: Dynamic Gradients & Icons
// ─────────────────────────────────────────────
const equipmentsConfig: Record<string, { icon: any, color: string }> = {
  lactometer: { icon: Ruler, color: "from-blue-500 to-indigo-500" },
  butyrometer: { icon: FlaskRound, color: "from-yellow-400 to-orange-500" },
  "milk-analyzer": { icon: PcCase, color: "from-slate-600 to-zinc-700" },
  refractometer: { icon: ScanLine, color: "from-sky-400 to-cyan-500" },
  centrifuge: { icon: Orbit, color: "from-fuchsia-500 to-purple-600" },
  microscope: { icon: Microscope, color: "from-teal-500 to-emerald-600" },
  "ph-meter": { icon: Activity, color: "from-lime-500 to-green-600" },
  "weighing-balance": { icon: Scale, color: "from-slate-400 to-slate-600" },
  "magnetic-stirrer": { icon: Tornado, color: "from-violet-500 to-indigo-600" },
  "water-bath": { icon: Waves, color: "from-blue-400 to-blue-600" },
  "hot-air-oven": { icon: Heater, color: "from-orange-500 to-red-500" },
  incubator: { icon: ThermometerSun, color: "from-rose-400 to-pink-500" },
  autoclave: { icon: ShieldPlus, color: "from-emerald-600 to-teal-700" },
  "bunsen-burner": { icon: Flame, color: "from-orange-400 to-red-600" },
  "muffle-furnace": { icon: Flame, color: "from-red-600 to-rose-700" },
  refrigerator: { icon: Refrigerator, color: "from-cyan-300 to-blue-400" },
  pipette: { icon: Pipette, color: "from-cyan-400 to-teal-400" },
  burette: { icon: Hourglass, color: "from-violet-400 to-purple-500" },
  beaker: { icon: Beaker, color: "from-blue-300 to-blue-500" },
  "conical-flask": { icon: FlaskConical, color: "from-emerald-400 to-teal-500" },
  "measuring-cylinder": { icon: Cylinder, color: "from-sky-300 to-cyan-500" },
  funnel: { icon: Filter, color: "from-yellow-300 to-orange-400" },
  desiccator: { icon: CookingPot, color: "from-amber-600 to-orange-700" },
  thermometer: { icon: Thermometer, color: "from-red-400 to-orange-500" },
  stopwatch: { icon: Timer, color: "from-gray-600 to-slate-800" },
  default: { icon: FlaskConical, color: "from-gray-400 to-slate-500" }
};

// ─────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────
const DetailView = ({ equipment, content }: { equipment: any; content: any }) => (
  <div className="space-y-6 pb-10">
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-lg mb-3 text-indigo-900 flex items-center gap-2 font-headline">
        <Zap className="w-5 h-5 text-yellow-500" /> {content.purposeTitle}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: equipment.purpose }} />
    </div>

    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="font-bold text-lg mb-3 text-indigo-900 flex items-center gap-2 font-headline">
        <Activity className="w-5 h-5 text-blue-500" /> {content.principleTitle}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: equipment.principle }} />
    </div>

    {equipment.parts && equipment.parts.length > 0 && (
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-lg mb-4 text-indigo-900 flex items-center gap-2 font-headline">
          <RotateCw className="w-5 h-5 text-gray-500" /> {content.partsTitle}
        </h3>
        <div className="space-y-3">
          {equipment.parts.map((part: any, i: number) => (
            <div key={i} className="flex gap-3 text-sm border-b border-gray-50 pb-2 last:border-0">
              <span className="font-bold text-indigo-700 min-w-[100px]">{part.name}:</span>
              <span className="text-gray-600">{part.description}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ─────────────────────────────────────────────
// Main Modal
// ─────────────────────────────────────────────
export function LabEquipmentsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const content = t(labEquipmentsContent);

  const selected = activeId ? content?.equipments?.find(e => e.id === activeId) : null;
  const config = selected ? (equipmentsConfig[selected.id] || equipmentsConfig.default) : null;

  const filtered = content?.equipments?.filter((e: any) => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    e.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <Dialog open={isOpen} onOpenChange={(o) => { if(!o) setActiveId(null); setIsOpen(o); }}>
      <DialogContent className="w-screen h-[100dvh] max-w-screen max-h-[100dvh] sm:w-[95vw] sm:h-[95dvh] sm:max-w-5xl sm:rounded-2xl p-0 flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 p-4 sm:px-8 sm:py-6 shrink-0 text-white">
          <div className="flex items-center gap-4">
            {activeId && (
              <Button variant="ghost" size="icon" onClick={() => setActiveId(null)} className="hover:bg-white/20">
                <ArrowLeft />
              </Button>
            )}
            <div className="flex-1 text-center sm:text-left">
              <DialogTitle className="text-xl sm:text-2xl font-bold font-headline">
                {selected ? selected.name : content.title}
              </DialogTitle>
              <DialogDescription className="text-indigo-200/80 text-xs sm:text-sm">
                {selected ? "Laboratory Equipment Details" : content.description}
              </DialogDescription>
            </div>
          </div>
        </div>

        {/* Body */}
        {selected && config ? (
          <ScrollArea className="flex-1 bg-slate-50">
            <div className="p-4 sm:p-8 max-w-3xl mx-auto">
              <DetailView equipment={selected} content={content} />
            </div>
          </ScrollArea>
        ) : (
          <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
            <div className="p-4 sm:px-8 shrink-0">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder={content.searchPlaceholder}
                  className="pl-11 h-12 rounded-2xl shadow-sm border-0 bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <ScrollArea className="flex-1 px-4 sm:px-8 pb-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
                {filtered.map((equip: any) => {
                  const cfg = equipmentsConfig[equip.id] || equipmentsConfig.default;
                  return (
                    <button
                      key={equip.id}
                      onClick={() => setActiveId(equip.id)}
                      className="group flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={cn("p-4 rounded-full bg-gradient-to-br text-white mb-3 transition-transform group-hover:scale-110 shadow-sm", cfg.color)}>
                        <cfg.icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-gray-700 group-hover:text-indigo-700 text-center line-clamp-2">
                        {equip.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
