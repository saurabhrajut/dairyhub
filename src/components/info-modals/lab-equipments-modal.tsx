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
import { 
    Search, 
    ArrowLeft, 
    Microscope, 
    Thermometer, 
    Scale, 
    RotateCw, 
    Pipette, 
    FlaskConical, 
    Filter, 
    Droplet, 
    Zap, 
    Activity, 
    TestTube, 
    Gauge, 
    Beaker, 
    CookingPot, 
    Fan,        
    MonitorCheck, 
    ThermometerSun, 
    Wind,       
    FlaskRound, 
    Waves,      
    Box,        
    Flame,      
    Syringe,    
    Timer,      
    GlassWater, 
    ScanEye,    
    Vibrate,    
    Refrigerator,
    // ✅ NEW UNIQUE ICONS
    Cylinder,   // Measuring Cylinder ke liye perfect
    Tornado,    // Magnetic Stirrer (Vortex) ke liye
    Orbit,      // Centrifuge (Spinning) ke liye
    Heater,     // Hot Air Oven ke liye
    ShieldPlus, // Autoclave (Sterilization) ke liye
    ScanLine,   // Refractometer (Scanning) ke liye
    PcCase,     // Milk Analyzer (Machine) ke liye
    Ruler,      // Lactometer (Scale) ke liye
    Hourglass,  // Burette (Time/Flow) ke liye
    UmbrellaOff // Desiccator (Keep dry) ke liye
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { labEquipmentsContent } from "@/lib/content/lab-equipments-content";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// ✅ COMPLETE ICON MAPPING (All Equipments Covered)
const equipmentsConfig: Record<string, { icon: any, color: string }> = {
    // === MILK TESTING ===
    "lactometer": { 
        icon: Ruler, // 📏 Scale dikhata hai (Reading density)
        color: "from-blue-500 to-indigo-500" 
    }, 
    "butyrometer": { 
        icon: FlaskRound, // 🧪 Fat testing flask
        color: "from-yellow-400 to-orange-500" 
    }, 
    "milk-analyzer": { 
        icon: PcCase, // 🖥️ Computerized Machine
        color: "from-slate-600 to-zinc-700" 
    }, 
    "refractometer": { 
        icon: ScanLine, // 📉 Light Scan refraction
        color: "from-sky-400 to-cyan-500" 
    }, 

    // === GENERAL LAB ===
    "centrifuge": { 
        icon: Orbit, // 💫 Fast Spinning motion
        color: "from-fuchsia-500 to-purple-600" 
    }, 
    "microscope": { 
        icon: Microscope, // 🔬 Bacteria check
        color: "from-teal-500 to-emerald-600" 
    }, 
    "ph-meter": { 
        icon: Gauge, // ⏲️ Meter reading
        color: "from-lime-500 to-green-600" 
    }, 
    "weighing-balance": { 
        icon: Scale, // ⚖️ Weight
        color: "from-slate-400 to-slate-600" 
    }, 
    "magnetic-stirrer": { 
        icon: Tornado, // 🌪️ Vortex mixing action
        color: "from-violet-500 to-indigo-600" 
    }, 
    
    // === HEATING & COOLING ===
    "water-bath": { 
        icon: Waves, // 🌊 Warm Water
        color: "from-blue-400 to-blue-600" 
    }, 
    "hot-air-oven": { 
        icon: Heater, // ♨️ Heating Element
        color: "from-orange-500 to-red-500" 
    }, 
    "incubator": { 
        icon: ThermometerSun, // 🌡️ Controlled Warmth
        color: "from-rose-400 to-pink-500" 
    }, 
    "autoclave": { 
        icon: ShieldPlus, // 🛡️ Sterilization/Safety
        color: "from-emerald-600 to-teal-700" 
    }, 
    "bunsen-burner": { 
        icon: Flame, // 🔥 Direct Fire
        color: "from-orange-400 to-red-600" 
    }, 
    "muffle-furnace": { 
        icon: Flame, // 🔥🔥 Extreme Heat (Darker Red)
        color: "from-red-600 to-rose-700" 
    }, 
    "refrigerator": { 
        icon: Refrigerator, // ❄️ Cooling
        color: "from-cyan-300 to-blue-400" 
    }, 

    // === GLASSWARE ===
    "pipette": { 
        icon: Pipette, // 💧 Dropper
        color: "from-cyan-400 to-teal-400" 
    }, 
    "burette": { 
        icon: Hourglass, // ⏳ Controlled Flow
        color: "from-violet-400 to-purple-500" 
    }, 
    "beaker": { 
        icon: Beaker, // 🥛 Standard Glass
        color: "from-blue-300 to-blue-500" 
    }, 
    "conical-flask": { 
        icon: FlaskConical, // 🧪 Mixing Flask
        color: "from-emerald-400 to-teal-500" 
    }, 
    "measuring-cylinder": { 
        icon: Cylinder, // 🔋 Exact Cylinder Icon
        color: "from-sky-300 to-cyan-500" 
    }, 
    "funnel": { 
        icon: Filter, // 🔽 Filtration
        color: "from-yellow-300 to-orange-400" 
    }, 
    "desiccator": { 
        icon: CookingPot, // ☂️ No Moisture (Dry)
        color: "from-amber-600 to-orange-700" 
    }, 
    
    // === OTHERS ===
    "thermometer": { 
        icon: Thermometer, // 🌡️ Temp Check
        color: "from-red-400 to-orange-500" 
    }, 
    "stopwatch": { 
        icon: Timer, // ⏱️ Time Check
        color: "from-gray-600 to-slate-800" 
    }, 
    
    // Fallback
    "default": { 
        icon: FlaskConical, 
        color: "from-gray-400 to-slate-500" 
    }
};

const EquipmentDetail = ({ equipment, content }: { equipment: any; content: any }) => {
  return (
    <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed px-1">
        {/* Purpose Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border mb-6">
            <h3 className="font-bold text-lg mb-2 text-primary flex items-center gap-2 font-headline">
                <Zap className="w-5 h-5 text-yellow-500" />
                {content.purposeTitle}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: equipment.purpose }} />
        </div>

        {/* Principle Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border mb-6">
            <h3 className="font-bold text-lg mb-2 text-primary flex items-center gap-2 font-headline">
                <Activity className="w-5 h-5 text-blue-500" />
                {content.principleTitle}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: equipment.principle }} />
        </div>

        {/* Parts List */}
        {equipment.parts && equipment.parts.length > 0 && (
            <div className="bg-white p-4 rounded-xl shadow-sm border">
                <h3 className="font-bold text-lg mb-3 text-primary flex items-center gap-2 font-headline">
                    <RotateCw className="w-5 h-5 text-gray-500" />
                    {content.partsTitle}
                </h3>
                <ul className="space-y-3">
                    {equipment.parts.map((part:any, index:number) => (
                        <li key={index} className="flex flex-col sm:flex-row sm:gap-2 text-sm border-b last:border-0 pb-2 last:pb-0 border-slate-100">
                            <span className="font-bold text-slate-700 min-w-[120px]">{part.name}:</span> 
                            <span className="text-slate-600">{part.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};


export function LabEquipmentsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeEquipmentId, setActiveEquipmentId] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  
  const content = t(labEquipmentsContent);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveEquipmentId(null);
      setSearchTerm("");
    }
    setIsOpen(open);
  };
  
  if (!content || !content.equipments) {
      return null; 
  }

  const selectedEquipment = activeEquipmentId ? content.equipments.find(e => e.id === activeEquipmentId) : null;
  
  // ✅ Get config safely
  const activeConfig = selectedEquipment 
    ? (equipmentsConfig[selectedEquipment.id] || equipmentsConfig["default"]) 
    : null;

  const filteredEquipments = content.equipments.filter(equip => 
    equip.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    equip.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelectEquipment = (id: string) => {
    if (scrollAreaRef.current) {
        scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveEquipmentId(id);
  }

  const handleBack = () => {
      setActiveEquipmentId(null);
  }

  useEffect(() => {
    if (!activeEquipmentId && scrollAreaRef.current) {
        setTimeout(() => {
            if(scrollAreaRef.current) {
                scrollAreaRef.current.scrollTop = scrollPosition.current;
            }
        }, 0);
    }
  }, [activeEquipmentId]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-0 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        
        {selectedEquipment && activeConfig ? (
             // === ACTIVE VIEW ===
             <div className="flex-1 flex flex-col min-h-0">
                <DialogHeader className="flex-row items-center space-x-4 pr-6 shrink-0 p-4 sm:p-0 bg-transparent">
                    <Button variant="ghost" size="icon" onClick={handleBack} className="shrink-0 hover:bg-white/50">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-3">
                        {/* ✅ Dynamic Colorful Header Icon */}
                        <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white shadow-md", activeConfig.color)}>
                            <activeConfig.icon className="h-5 w-5" />
                        </div>
                        <div>
                             <DialogTitle className="text-xl font-bold font-headline text-left">
                                {selectedEquipment.name}
                            </DialogTitle>
                        </div>
                    </div>
                </DialogHeader>

                <ScrollArea className="flex-1 mt-4 sm:pr-4 w-full">
                    <div className="p-4 sm:p-0 px-2">
                        <EquipmentDetail equipment={selectedEquipment} content={content} />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            // === DASHBOARD GRID VIEW ===
            <>
                <DialogHeader className="p-4 sm:p-0 shrink-0 bg-transparent">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                            <Microscope className="h-8 w-8 text-indigo-600" />
                        </div>
                    </div>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-headline">
                        {content.title}
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm sm:text-lg text-gray-500">
                        {content.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="px-4 sm:px-0 my-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder={content.searchPlaceholder}
                            className="w-full pl-10 pr-4 py-2 rounded-full shadow-sm bg-white border-slate-200 focus:border-primary focus:ring-primary"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <ScrollArea className="flex-1 mt-2 sm:pr-4" viewportRef={scrollAreaRef}>
                    {/* ✅ Colorful Grid of Equipments */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-0">
                    {filteredEquipments.map((equip) => {
                         // Get config or fallback default
                         const config = equipmentsConfig[equip.id] || equipmentsConfig["default"];
                         
                         return (
                            <button
                                key={equip.id}
                                onClick={() => handleSelectEquipment(equip.id)}
                                className="group relative flex flex-col items-center justify-center p-4 bg-white hover:shadow-xl rounded-2xl border-2 border-transparent hover:border-primary/20 text-center aspect-square transition-all duration-300 transform hover:scale-105"
                            >
                                {/* ✅ Dynamic Gradient Circle Icon */}
                                <div className={cn(
                                    "p-4 rounded-full bg-gradient-to-br text-white mb-3 shadow-md transition-transform group-hover:scale-110",
                                    config.color
                                )}>
                                    <config.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                </div>

                                <span className="font-bold text-sm sm:text-base font-headline text-slate-700 group-hover:text-primary transition-colors line-clamp-2">
                                    {equip.name}
                                </span>
                                
                                {/* Flash Icon effect on hover */}
                                <Zap className="absolute top-2 right-2 h-4 w-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                         )
                    })}
                    </div>
                    
                    {filteredEquipments.length === 0 && (
                        <div className="text-center py-10 text-muted-foreground flex flex-col items-center">
                            <Search className="h-10 w-10 mb-2 opacity-20" />
                            <p>{content.noResults}</p>
                        </div>
                    )}
                </ScrollArea>
            </>
        )}
      </DialogContent>
    </Dialog>
  );
}
