"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  FlaskConical,
  Beaker,
  Scale,
  Calculator,
  Settings,
  Users,
  TestTube,
  ClipboardCheck,
  CheckSquare,
  Droplet,
  PackageCheck,
  Lock,
  DollarSign,
  Microscope,
  Recycle,
  Bug,
  ShieldCheck,
  FileSpreadsheet,
  Search,
  Wind,
  GraduationCap,
  Atom,
  Combine,
  ShieldAlert,
} from "lucide-react";
import { ReagentIcon, PaneerIcon, IceCreamIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSubscription } from "@/context/subscription-context";

// All Modals are imported here
import { DairyIndustryModal } from "./info-modals/dairy-industry-modal";
import { MilkChemistryModal } from "./info-modals/milk-chemistry-modal";
import { AdulterationModal } from "./info-modals/adulteration-modal";
import { StandardizationIModal } from "./calculators/standardization-i-modal";
import { StandardizationIIModal } from "./calculators/standardization-ii-modal";
import { SolutionsPrepModal } from "./calculators/solutions-prep-modal";
import { DairyProcessingModal } from "./info-modals/dairy-processing-modal";
import { AboutUsModal } from "./info-modals/about-us-modal";
import { CompositionalAnalysisModal } from "./info-modals/compositional-analysis-modal";
import { CalibrationStandardizationModal } from "./info-modals/calibration-standardization-modal";
import { QualityConceptModal } from "./info-modals/quality-concept-modal";
import { WaterTestingModal } from "./info-modals/water-testing-modal";
import { PackagingMaterialTestingModal } from "./info-modals/packaging-material-testing-modal";
import { LabEquipmentsModal } from "./info-modals/lab-equipments-modal";
import { CipProcessModal } from "./info-modals/cip-process-modal";
import { MicrobiologyTestingModal } from "./info-modals/microbiology-testing-modal";
import { MilkHandlingPreservationModal } from "./info-modals/milk-handling-preservation-modal";
import { FssaiStandardsModal } from "./info-modals/fssai-standards-modal";
import { VariousCalculatorsModal } from "./calculators/various-calculators-modal";
import { ProductsProcessingModal } from "./info-modals/products-processing-modal";
import { AuditsModal } from "./info-modals/audits-modal";
import { ValidationVerificationModal } from "./info-modals/validation-verification-modal";
import { EtpModal } from "./info-modals/etp-modal";
import { ExpertSupportModal } from "./info-modals/expert-support-modal";
import { ProductionCalculationsModal } from "./calculators/production-calculations-modal";
import { PestControlModal } from "./info-modals/pest-control-modal";
import { ChromatographyModal } from "./info-modals/chromatography-modal";


type Topic = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  badge?: string;
  modal: React.ElementType;
  isPro: boolean;
  color: string;
  iconColor: string;
};

const qualityAccessTopics = [
  'industry', 'fssai-standards', 'quality-concept', 'microbiology', 'audits', 'validation-verification',
  'expert-support', 'calibration', 'lab-equipments', 'milk-chemistry', 'lab-calculations', 'production-calculations',
  'adulteration', 'solutions-prep', 'compositional-analysis', 'water-testing', 'packaging-testing', 'chromatography',
  'std1', 'std2', 'milk-handling', 'cip-process', 'etp', 'about-us', 'pest-control'
];

const productionAccessTopics = [
  'industry', 'fssai-standards', 'quality-concept', 'audits', 'validation-verification', 'expert-support',
  'milk-chemistry', 'production-calculations', 'std1', 'std2', 'processing', 'milk-handling',
  'products-processing',
  'cip-process', 'etp', 'about-us', 'pest-control'
];

const processAccessTopics = [
  'industry', 'std1', 'std2', 'processing', 'milk-handling',
  'products-processing', 'cip-process', 'about-us'
];

const departmentAccess: Record<string, string[]> = {
  'quality-access': qualityAccessTopics,
  'production-access': productionAccessTopics,
  'process-access': processAccessTopics,
};

const topics: Topic[] = [
  { id: 'industry', title: 'Dairy Industry', description: 'Overview & Trends', category: 'production', icon: Factory, badge: 'New', modal: DairyIndustryModal, isPro: false, color: 'from-blue-500 via-indigo-500 to-purple-600', iconColor: 'text-white' },
  { id: 'fssai-standards', title: 'FSSAI Standards', description: 'Official Dairy Standards', category: 'quality', icon: ShieldCheck, badge: 'New', modal: FssaiStandardsModal, isPro: false, color: 'from-emerald-500 via-teal-500 to-cyan-600', iconColor: 'text-white' },
  { id: 'quality-concept', title: 'Quality Concepts', description: 'HACCP, TQM, ISO', category: 'quality', icon: CheckSquare, modal: QualityConceptModal, isPro: true, color: 'from-cyan-500 via-sky-500 to-blue-600', iconColor: 'text-white' },
  { id: 'microbiology', title: 'Microbiology', description: 'Testing & Pathogens', category: 'quality', icon: Bug, badge: 'New', modal: MicrobiologyTestingModal, isPro: true, color: 'from-purple-500 via-violet-500 to-fuchsia-600', iconColor: 'text-white' },
  { id: 'audits', title: 'Audits', description: 'Internal & External Audits', category: 'quality', icon: ClipboardCheck, badge: 'New', modal: AuditsModal, isPro: true, color: 'from-rose-500 via-pink-500 to-red-600', iconColor: 'text-white' },
  { id: 'validation-verification', title: 'Validation & Verification', description: 'Food Safety Assurance', category: 'quality', icon: ClipboardCheck, badge: 'New', modal: ValidationVerificationModal, isPro: true, color: 'from-violet-500 via-purple-500 to-fuchsia-600', iconColor: 'text-white' },
  { id: 'expert-support', title: 'Expert Support', description: 'AI & Real Expert Advice', category: 'production', icon: GraduationCap, badge: 'AI', modal: ExpertSupportModal, isPro: true, color: 'from-orange-500 via-amber-500 to-yellow-600', iconColor: 'text-white' },
  { id: 'calibration', title: 'Calibration', description: 'Glassware & Reagents', category: 'quality', icon: ClipboardCheck, modal: CalibrationStandardizationModal, isPro: true, color: 'from-red-500 via-orange-500 to-amber-600', iconColor: 'text-white' },
  { id: 'lab-equipments', title: 'Lab Equipments', description: 'Principles & Working', category: 'quality', icon: Microscope, badge: 'Pro', modal: LabEquipmentsModal, isPro: true, color: 'from-slate-500 via-gray-500 to-zinc-600', iconColor: 'text-white' },
  { id: 'milk-chemistry', title: 'Milk Chemistry', description: 'Composition & Properties', category: 'quality', icon: Atom, modal: MilkChemistryModal, isPro: true, color: 'from-pink-500 via-rose-500 to-red-600', iconColor: 'text-white' },
  { id: 'lab-calculations', title: 'Lab Calculations', description: 'Yield, Acidity, etc.', category: 'quality', icon: FileSpreadsheet, badge: 'Updated', modal: VariousCalculatorsModal, isPro: true, color: 'from-amber-500 via-orange-500 to-red-600', iconColor: 'text-white' },
  { id: 'production-calculations', title: 'Production Calculations', description: 'Batch, Yield & Costing', category: 'production', icon: Combine, modal: ProductionCalculationsModal, isPro: true, color: 'from-indigo-500 via-violet-500 to-purple-600', iconColor: 'text-white' },
  { id: 'adulteration', title: 'Adulteration', description: 'Detection & Prevention', category: 'quality', icon: ReagentIcon, badge: 'Updated', modal: AdulterationModal, isPro: true, color: 'from-yellow-500 via-amber-500 to-orange-600', iconColor: 'text-white' },
  { id: 'solutions-prep', title: 'Solutions Preparation', description: 'Reagents & Calculators', category: 'quality', icon: Beaker, modal: SolutionsPrepModal, isPro: true, color: 'from-green-500 via-emerald-500 to-teal-600', iconColor: 'text-white' },
  { id: 'compositional-analysis', title: 'Compositional Analysis', description: 'Chemical tests for products', category: 'quality', icon: TestTube, modal: CompositionalAnalysisModal, isPro: true, color: 'from-indigo-500 via-blue-500 to-purple-600', iconColor: 'text-white' },
  { id: 'water-testing', title: 'Water Testing', description: 'WTP/ETP Analysis', category: 'quality', icon: Droplet, modal: WaterTestingModal, isPro: true, color: 'from-blue-500 via-cyan-500 to-sky-600', iconColor: 'text-white' },
  { id: 'packaging-testing', title: 'Packaging Testing', description: 'Quality tests for materials', category: 'quality', icon: PackageCheck, modal: PackagingMaterialTestingModal, isPro: true, color: 'from-yellow-500 via-amber-500 to-orange-600', iconColor: 'text-white' },
  { id: 'chromatography', title: 'Chromatography', description: 'HPLC, GC, TLC & More', category: 'quality', icon: HplcIcon, badge: 'New', modal: ChromatographyModal, isPro: false, color: 'from-pink-100 to-rose-200' },
  { id: 'std1', title: 'Standardization I', description: 'Basic Principles', category: 'process', icon: Scale, modal: StandardizationIModal, isPro: true, color: 'from-sky-500 via-blue-500 to-cyan-600', iconColor: 'text-white' },
  { id: 'std2', title: 'Advanced Standardization', description: 'Advanced Blending', category: 'process', icon: Calculator, modal: StandardizationIIModal, isPro: true, color: 'from-fuchsia-500 via-pink-500 to-purple-600', iconColor: 'text-white' },
  { id: 'processing', title: 'Dairy Processing', description: 'Techniques & Machinery', category: 'process', icon: Settings, modal: DairyProcessingModal, isPro: true, color: 'from-gray-500 via-slate-500 to-zinc-600', iconColor: 'text-white' },
  { id: 'milk-handling', title: 'Milk Handling', description: 'Reception & Preservation', category: 'process', icon: Droplet, badge: 'New', modal: MilkHandlingPreservationModal, isPro: false, color: 'from-cyan-500 via-blue-500 to-sky-600', iconColor: 'text-white' },
  { id: 'products-processing', title: 'Products Processing', description: 'Yogurt, Butter, Ghee & More', category: 'production', icon: Factory, badge: 'New', modal: ProductsProcessingModal, isPro: true, color: 'from-pink-500 via-fuchsia-500 to-purple-600', iconColor: 'text-white' },
  { id: 'cip-process', title: 'CIP Process', description: 'Cleaning-In-Place Guide', category: 'process', icon: Recycle, badge: 'New', modal: CipProcessModal, isPro: true, color: 'from-blue-500 via-cyan-500 to-teal-600', iconColor: 'text-white' },
  { id: 'etp', title: 'ETP', description: 'Wastewater Treatment', category: 'process', icon: Recycle, badge: 'New', modal: EtpModal, isPro: true, color: 'from-lime-500 via-green-500 to-emerald-600', iconColor: 'text-white' },
  { id: 'pest-control', title: 'Pest Control', description: 'Prevention & Management', category: 'quality', icon: Bug, modal: PestControlModal, isPro: true, color: 'from-red-500 via-rose-500 to-pink-600', iconColor: 'text-white' },
  { id: 'about-us', title: 'About Us', description: 'Our Mission & Vision', category: 'production', icon: Users, modal: AboutUsModal, isPro: false, color: 'from-slate-500 via-gray-500 to-stone-600', iconColor: 'text-white' },
];

export function TopicGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const openModal = (id: string, isProFeature: boolean) => {
    if (user?.isAnonymous && id !== 'about-us') {
      toast({
        title: "Sign Up to Access",
        description: "This feature is locked for guests. Please create an account to continue.",
        action: (
          <Button onClick={() => router.push('/signup')}>Sign Up</Button>
        ),
      });
      return;
    }
    setActiveModal(id);
  };

  return (
    <div className="relative min-h-screen">
      {/* Animated Gradient Background with Lab Equipment */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-gradient-shift" />
        
        {/* Gradient orbs */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8b5cf6 1px, transparent 1px),
              linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Lab Equipment Icons */}
        
        {/* Beaker 1 */}
        <div className="absolute top-[15%] left-[10%] animate-float-equipment-1 opacity-10">
          <Beaker className="w-16 h-16 text-blue-500" strokeWidth={1.5} />
        </div>
        
        {/* Test Tube 1 */}
        <div className="absolute top-[25%] right-[15%] animate-float-equipment-2 opacity-10">
          <TestTube className="w-14 h-14 text-purple-500" strokeWidth={1.5} />
        </div>
        
        {/* Flask Conical 1 */}
        <div className="absolute top-[40%] left-[8%] animate-float-equipment-3 opacity-10">
          <FlaskConical className="w-18 h-18 text-pink-500" strokeWidth={1.5} />
        </div>
        
        {/* Microscope */}
        <div className="absolute top-[60%] right-[12%] animate-float-equipment-4 opacity-10">
          <Microscope className="w-16 h-16 text-teal-500" strokeWidth={1.5} />
        </div>
        
        {/* Droplet (Milk) */}
        <div className="absolute top-[70%] left-[20%] animate-float-equipment-5 opacity-10">
          <Droplet className="w-14 h-14 text-cyan-500" strokeWidth={1.5} />
        </div>
        
        {/* Settings (Gear/Wheel) */}
        <div className="absolute top-[35%] right-[25%] animate-spin-equipment opacity-10">
          <Settings className="w-16 h-16 text-orange-500" strokeWidth={1.5} />
        </div>
        
        {/* Scale/Balance */}
        <div className="absolute bottom-[20%] left-[30%] animate-float-equipment-6 opacity-10">
          <Scale className="w-15 h-15 text-indigo-500" strokeWidth={1.5} />
        </div>
        
        {/* Beaker 2 */}
        <div className="absolute bottom-[40%] right-[8%] animate-float-equipment-7 opacity-10">
          <Beaker className="w-14 h-14 text-emerald-500" strokeWidth={1.5} />
        </div>
        
        {/* Test Tube 2 */}
        <div className="absolute top-[50%] left-[15%] animate-float-equipment-8 opacity-10">
          <TestTube className="w-16 h-16 text-rose-500" strokeWidth={1.5} />
        </div>
        
        {/* Flask Conical 2 */}
        <div className="absolute bottom-[30%] right-[20%] animate-float-equipment-9 opacity-10">
          <FlaskConical className="w-17 h-17 text-violet-500" strokeWidth={1.5} />
        </div>
        
        {/* Atom (Chemistry) */}
        <div className="absolute top-[20%] left-[25%] animate-spin-equipment-slow opacity-10">
          <Atom className="w-15 h-15 text-fuchsia-500" strokeWidth={1.5} />
        </div>
        
        {/* Calculator */}
        <div className="absolute bottom-[50%] right-[30%] animate-float-equipment-10 opacity-10">
          <Calculator className="w-14 h-14 text-amber-500" strokeWidth={1.5} />
        </div>
        
        {/* Factory (Processing) */}
        <div className="absolute top-[80%] right-[18%] animate-float-equipment-11 opacity-10">
          <Factory className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
        </div>
        
        {/* Package */}
        <div className="absolute top-[10%] right-[35%] animate-float-equipment-12 opacity-10">
          <PackageCheck className="w-14 h-14 text-green-500" strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative">
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search topics..."
              className="w-full pl-10 pr-4 py-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm border-2 border-white/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
          {filteredTopics.map((topic) => {
            const isLocked = user?.isAnonymous && topic.id !== 'about-us';

            return (
              <div
                key={topic.id}
                onClick={() => openModal(topic.id, topic.isPro)}
                className={cn(
                  "bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center relative overflow-hidden group border-2 border-white/50",
                  "cursor-pointer"
                )}
              >
                {isLocked && (
                  <div className="absolute top-2 right-2 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full p-1.5 z-20 shadow-lg">
                    <Lock className="w-3 h-3" />
                  </div>
                )}
                {topic.badge && (
                  <Badge 
                    variant={topic.badge === 'Pro' ? 'default' : 'destructive'} 
                    className="absolute top-2 left-2 text-xs px-2 py-0.5 h-auto animate-pulse z-10 shadow-md font-semibold"
                  >
                    {topic.badge}
                  </Badge>
                )}
                
                <div className={cn(
                  "w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                  "group-hover:scale-110 group-hover:rotate-3 transition-all duration-300",
                  "relative overflow-hidden",
                  topic.color
                )}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <topic.icon className={cn("w-8 h-8 relative z-10", topic.iconColor)} strokeWidth={2.5} />
                </div>
                
                <h3 className="font-headline font-bold text-card-foreground text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="hidden sm:block text-xs text-muted-foreground mt-1 line-clamp-2">
                  {topic.description}
                </p>

                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  topic.color
                )} />
              </div>
            );
          })}
        </div>

        {topics.map(topic => {
          const ModalComponent = topic.modal;
          if (!ModalComponent) return null;
          return <ModalComponent key={`${topic.id}-modal`} isOpen={activeModal === topic.id} setIsOpen={() => setActiveModal(null)} />
        })}
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        
        /* Equipment Animations */
        @keyframes float-equipment-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(5deg); }
          66% { transform: translate(-15px, -15px) rotate(-3deg); }
        }
        
        @keyframes float-equipment-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 20px) rotate(-7deg); }
          66% { transform: translate(15px, 10px) rotate(4deg); }
        }
        
        @keyframes float-equipment-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -25px) rotate(8deg); }
        }
        
        @keyframes float-equipment-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 30px) rotate(-6deg); }
        }
        
        @keyframes float-equipment-5 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -20px) scale(1.1); }
        }
        
        @keyframes float-equipment-6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -20px) rotate(10deg); }
        }
        
        @keyframes float-equipment-7 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, 25px) rotate(-5deg); }
          66% { transform: translate(-20px, 10px) rotate(3deg); }
        }
        
        @keyframes float-equipment-8 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 30px) rotate(7deg); }
        }
        
        @keyframes float-equipment-9 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-25px, -30px) rotate(-8deg); }
        }
        
        @keyframes float-equipment-10 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, -25px) rotate(6deg); }
          66% { transform: translate(20px, -10px) rotate(-4deg); }
        }
        
        @keyframes float-equipment-11 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -35px) scale(1.05); }
        }
        
        @keyframes float-equipment-12 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 25px) rotate(9deg); }
        }
        
        @keyframes spin-equipment {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-equipment-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        
        .animate-float-equipment-1 { animation: float-equipment-1 12s ease-in-out infinite; }
        .animate-float-equipment-2 { animation: float-equipment-2 15s ease-in-out infinite; }
        .animate-float-equipment-3 { animation: float-equipment-3 10s ease-in-out infinite; }
        .animate-float-equipment-4 { animation: float-equipment-4 13s ease-in-out infinite; }
        .animate-float-equipment-5 { animation: float-equipment-5 11s ease-in-out infinite; }
        .animate-float-equipment-6 { animation: float-equipment-6 14s ease-in-out infinite; }
        .animate-float-equipment-7 { animation: float-equipment-7 16s ease-in-out infinite; }
        .animate-float-equipment-8 { animation: float-equipment-8 9s ease-in-out infinite; }
        .animate-float-equipment-9 { animation: float-equipment-9 12s ease-in-out infinite; }
        .animate-float-equipment-10 { animation: float-equipment-10 13s ease-in-out infinite; }
        .animate-float-equipment-11 { animation: float-equipment-11 11s ease-in-out infinite; }
        .animate-float-equipment-12 { animation: float-equipment-12 14s ease-in-out infinite; }
        .animate-spin-equipment { animation: spin-equipment 25s linear infinite; }
        .animate-spin-equipment-slow { animation: spin-equipment-slow 30s linear infinite; }
      `}</style>
    </div>
  );
}
