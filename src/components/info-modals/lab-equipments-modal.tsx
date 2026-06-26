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
import { Badge } from "@/components/ui/badge";
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
  PackageSearch,
  CheckCircle,
  Scale, // ✅ Error fixed: Scale icon import yahan add kiya gaya hai
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "उपकरणों पर वापस (Back)",
    topics: "Equipments",
    modules: "Categories",
    langPill: "Lab Hindi Content",
    topicsCount: (n: number) => `${n} equipments`,
  },
  en: {
    backToTopics: "Back to Equipments",
    topics: "Equipments",
    modules: "Categories",
    langPill: "Lab English Content",
    topicsCount: (n: number) => `${n} equipments`,
  },
};

// ─────────────────────────────────────────────
// Configuration: Dynamic Gradients & Icons
// ─────────────────────────────────────────────
const equipmentsConfig: Record<string, { icon: any, colorClass: string, bgClass: string, borderClass: string, badge: string }> = {
  lactometer: { icon: Ruler, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400", badge: "Density" },
  butyrometer: { icon: FlaskRound, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400", badge: "Fat Test" },
  "milk-analyzer": { icon: PcCase, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400", badge: "Digital" },
  refractometer: { icon: ScanLine, colorClass: "text-sky-600", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400", badge: "Optical" },
  centrifuge: { icon: Orbit, colorClass: "text-fuchsia-600", bgClass: "bg-fuchsia-50 hover:bg-fuchsia-100", borderClass: "border-fuchsia-200 hover:border-fuchsia-400", badge: "Spinning" },
  microscope: { icon: Microscope, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400", badge: "Visual" },
  "ph-meter": { icon: Activity, colorClass: "text-lime-600", bgClass: "bg-lime-50 hover:bg-lime-100", borderClass: "border-lime-200 hover:border-lime-400", badge: "Acidity" },
  "weighing-balance": { icon: Scale, colorClass: "text-zinc-600", bgClass: "bg-zinc-50 hover:bg-zinc-100", borderClass: "border-zinc-200 hover:border-zinc-400", badge: "Weight" },
  "magnetic-stirrer": { icon: Tornado, colorClass: "text-violet-600", bgClass: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200 hover:border-violet-400", badge: "Mixing" },
  "water-bath": { icon: Waves, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400", badge: "Heating" },
  "hot-air-oven": { icon: Heater, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400", badge: "Dry Heat" },
  incubator: { icon: ThermometerSun, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400", badge: "Culture" },
  autoclave: { icon: ShieldPlus, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400", badge: "Sterile" },
  "bunsen-burner": { icon: Flame, colorClass: "text-red-600", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400", badge: "Fire" },
  "muffle-furnace": { icon: Flame, colorClass: "text-rose-700", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-300 hover:border-rose-500", badge: "High Temp" },
  refrigerator: { icon: Refrigerator, colorClass: "text-blue-400", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400", badge: "Cooling" },
  pipette: { icon: Pipette, colorClass: "text-indigo-500", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400", badge: "Liquid" },
  burette: { icon: Hourglass, colorClass: "text-purple-500", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400", badge: "Titration" },
  beaker: { icon: Beaker, colorClass: "text-cyan-500", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400", badge: "Glassware" },
  "conical-flask": { icon: FlaskConical, colorClass: "text-emerald-500", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400", badge: "Glassware" },
  "measuring-cylinder": { icon: Cylinder, colorClass: "text-sky-500", bgClass: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200 hover:border-sky-400", badge: "Volume" },
  funnel: { icon: Filter, colorClass: "text-yellow-500", bgClass: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200 hover:border-yellow-400", badge: "Transfer" },
  desiccator: { icon: CookingPot, colorClass: "text-orange-700", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400", badge: "Drying" },
  thermometer: { icon: Thermometer, colorClass: "text-red-500", bgClass: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200 hover:border-red-400", badge: "Temp" },
  stopwatch: { icon: Timer, colorClass: "text-gray-700", bgClass: "bg-gray-50 hover:bg-gray-100", borderClass: "border-gray-200 hover:border-gray-400", badge: "Time" },
  default: { icon: FlaskConical, colorClass: "text-slate-600", bgClass: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200 hover:border-slate-400", badge: "Equipment" }
};

// ─────────────────────────────────────────────
// HTML Wrappers & Sections
// ─────────────────────────────────────────────
const wrapTablesInScrollDiv = (container: HTMLElement) => {
  container.querySelectorAll("table").forEach((table) => {
    if (table.parentElement?.classList.contains("table-scroll-wrap")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll-wrap overflow-x-auto w-full my-4 rounded-xl border border-gray-200 shadow-sm";
    table.parentNode?.insertBefore(wrapper, table);
    wrapper.appendChild(table);
    table.style.borderCollapse = "collapse";
    table.style.fontSize = "12px";
    table.style.width = "max-content";
    table.style.minWidth = "100%";
    table.querySelectorAll("td").forEach((td) => {
      (td as HTMLElement).style.border = "1px solid #e5e7eb";
      (td as HTMLElement).style.padding = "8px 12px";
      (td as HTMLElement).style.verticalAlign = "top";
      (td as HTMLElement).style.whiteSpace = "normal";
      (td as HTMLElement).style.minWidth = "120px";
    });
    table.querySelectorAll("th").forEach((th) => {
      (th as HTMLElement).style.border = "1px solid #e5e7eb";
      (th as HTMLElement).style.padding = "8px 12px";
      (th as HTMLElement).style.backgroundColor = "#f8fafc";
      (th as HTMLElement).style.fontWeight = "600";
      (th as HTMLElement).style.textAlign = "left";
      (th as HTMLElement).style.whiteSpace = "nowrap";
      (th as HTMLElement).style.color = "#334155";
    });
  });
};

const SafeHTML = ({ html }: { html: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (containerRef.current) wrapTablesInScrollDiv(containerRef.current); }, [html]);

  return (
    <div
      ref={containerRef}
      className="strict-html-wrap prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed
        [&_h4]:font-bold [&_h4]:text-indigo-900 [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:text-sm sm:[&_h4]:text-base
        [&_p]:mb-3 [&_p]:break-words
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-3
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_ol]:mb-3
        [&_li]:break-words [&_li]:text-gray-600
        [&_strong]:font-semibold [&_strong]:text-gray-900
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const Section = ({
  title,
  children,
  icon: Icon,
  accentColor = "indigo",
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  accentColor?: string;
}) => {
  const headerGradients: Record<string, string> = {
    blue: "from-blue-600 to-blue-500", orange: "from-orange-600 to-orange-500",
    emerald: "from-emerald-600 to-emerald-500", purple: "from-purple-600 to-purple-500",
    indigo: "from-indigo-600 to-indigo-500", teal: "from-teal-600 to-teal-500",
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.indigo;

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm mb-5 w-full max-w-full overflow-hidden box-border">
      <div className={`bg-gradient-to-r ${gradient} p-3 sm:p-4 flex items-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl`}>
        {Icon && (
          <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        )}
        <h2 className="text-sm sm:text-lg font-bold text-white font-headline leading-tight break-words">{title}</h2>
      </div>
      <div className="p-4 sm:p-6 w-full min-w-0 max-w-full">{children}</div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Components
// ─────────────────────────────────────────────
const EquipmentDetail = ({ equipment, content }: { equipment: any; content: any }) => (
  <div className="space-y-6 pb-10 w-full max-w-full overflow-hidden">
    <Section title={content.purposeTitle} icon={CheckCircle} accentColor="indigo">
      <SafeHTML html={equipment.purpose} />
    </Section>

    <Section title={content.principleTitle} icon={Activity} accentColor="emerald">
      <SafeHTML html={equipment.principle} />
    </Section>

    {equipment.parts && equipment.parts.length > 0 && (
      <Section title={content.partsTitle} icon={RotateCw} accentColor="purple">
        <div className="space-y-3">
          {equipment.parts.map((part: any, i: number) => (
            <div key={i} className="flex flex-col sm:flex-row sm:gap-3 text-sm border-b border-gray-100 pb-3 last:border-0 last:pb-0">
              <span className="font-bold text-purple-800 min-w-[120px] shrink-0">{part.name}:</span>
              <span className="text-gray-600 flex-1"><SafeHTML html={part.description} /></span>
            </div>
          ))}
        </div>
      </Section>
    )}
  </div>
);

// ─────────────────────────────────────────────
// Main Modal
// ─────────────────────────────────────────────
export function LabEquipmentsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  
  const content = t(labEquipmentsContent);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveId(null);
      setSearchTerm("");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };
  
  if (!content || !content.equipments) return null;

  const selectedEquipment = activeId ? content.equipments.find((e:any) => e.id === activeId) : null;
  const activeConfig = selectedEquipment ? (equipmentsConfig[selectedEquipment.id] || equipmentsConfig.default) : null;

  const filteredEquipments = content.equipments.filter((equip:any) => 
    equip.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    equip.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelectEquipment = (id: string) => {
    if (scrollRef.current) {
      const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) scrollPosition.current = viewport.scrollTop;
    }
    setSearchTerm("");
    setActiveId(id);
  }

  const handleBack = () => {
    setActiveId(null);
    setSearchTerm("");
  }

  useEffect(() => {
    if (!activeId && scrollRef.current) {
      const timeoutId = setTimeout(() => {
        if (scrollRef.current) {
          const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (viewport) viewport.scrollTop = scrollPosition.current;
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [activeId]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style dangerouslySetInnerHTML={{ __html: `
        .strict-html-wrap { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
        .strict-html-wrap * { overflow-wrap: break-word !important; word-wrap: break-word !important; word-break: break-word !important; white-space: normal !important; max-width: 100% !important; }
        .strict-html-wrap table { display: block !important; overflow-x: auto !important; width: 100% !important; }
      `}} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-5xl sm:max-h-[95dvh] sm:rounded-2xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
      ">
        
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🔬 {content.title}
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeId ? "hidden sm:block" : "block"}`}>
              {selectedEquipment ? "Detailed equipment view" : content.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeId && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <PackageSearch className="w-3 h-3 shrink-0" /> {content.equipments.length} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> All {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <FlaskConical className="w-3 h-3 shrink-0" /> {lbl.langPill}
              </span>
            </div>
          )}

          {/* Back button */}
          {activeId && selectedEquipment && activeConfig && (
            <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                {lbl.backToTopics}
              </Button>
              <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                <activeConfig.icon className="w-3 h-3 shrink-0" />
                <span className="font-medium truncate min-w-0">{selectedEquipment.name}</span>
                <Badge variant="secondary" className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none">
                  {activeConfig.badge}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedEquipment && activeConfig ? (
          
          /* ── Detail View ───────────────────────── */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50 strict-html-wrap">
            <div className="p-3 sm:p-6 max-w-4xl mx-auto w-full">
              <EquipmentDetail equipment={selectedEquipment} content={content} />
            </div>
          </div>

        ) : (
          
          /* ── Grid View & Search ────────────────── */
          <div className="flex-1 min-h-0 flex flex-col bg-slate-50/50 overflow-hidden">
            <div className="px-3 sm:px-6 py-3 bg-white border-b border-gray-200 shrink-0 shadow-sm z-10">
              <div className="relative max-w-4xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input 
                  placeholder={content.searchPlaceholder}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <ScrollArea className="flex-1 w-full" viewportRef={scrollRef}>
              <div className="p-3 sm:p-6 pb-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                  {filteredEquipments.map((equip: any) => {
                    const cfg = equipmentsConfig[equip.id] || equipmentsConfig.default;
                    return (
                      <button
                        key={equip.id}
                        onClick={() => handleSelectEquipment(equip.id)}
                        className={`
                          group relative flex flex-col items-center justify-center p-3 sm:p-5 
                          bg-white rounded-xl sm:rounded-2xl border-2 transition-all duration-200 
                          text-center shadow-sm hover:shadow-md hover:-translate-y-1 
                          ${cfg.bgClass} ${cfg.borderClass} w-full box-border aspect-square
                        `}
                      >
                        {/* Icon Container */}
                        <div className={`
                          p-3 sm:p-4 rounded-xl shadow-sm mb-2 sm:mb-3 shrink-0 
                          transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100
                        `}>
                          <cfg.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${cfg.colorClass}`} />
                        </div>
                        
                        {/* Name */}
                        <span className="font-bold text-[11px] sm:text-[13px] leading-tight text-gray-700 group-hover:text-black line-clamp-2 px-1">
                          {equip.name}
                        </span>

                        {/* Hover badge/effect */}
                        <Badge variant="outline" className={`absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] sm:text-[9px] px-1.5 py-0 ${cfg.colorClass} border-current bg-white`}>
                          View Details
                        </Badge>
                      </button>
                    );
                  })}
                </div>
                
                {filteredEquipments.length === 0 && (
                  <div className="text-center py-10 px-4 flex flex-col items-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                      <Search className="h-6 w-6 text-slate-400" />
                    </div>
                    <p className="text-slate-600 font-medium break-words">
                      {content.noResults || "No equipment found."}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Try searching with a different keyword
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
