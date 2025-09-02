
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
import { PaneerIcon, IceCreamIcon, ReagentIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { DairyIndustryModal } from "./info-modals/dairy-industry-modal";
import { MilkChemistryModal } from "./info-modals/milk-chemistry-modal";
import { AdulterationModal } from "./info-modals/adulteration-modal";
import { StandardizationIModal } from "./calculators/standardization-i-modal";
import { StandardizationIIModal } from "./calculators/standardization-ii-modal";
import { SolutionsPrepModal } from "./calculators/solutions-prep-modal";
import { PaneerProcessingModal } from "./info-modals/paneer-processing-modal";
import { DairyProcessingModal } from "./info-modals/dairy-processing-modal";
import { AboutUsModal } from "./info-modals/about-us-modal";
import { CompositionalAnalysisModal } from "./info-modals/compositional-analysis-modal";
import { CalibrationStandardizationModal } from "./info-modals/calibration-standardization-modal";
import { QualityConceptModal } from "./info-modals/quality-concept-modal";
import { WaterTestingModal } from "./info-modals/water-testing-modal";
import { PackagingMaterialTestingModal } from "./info-modals/packaging-material-testing-modal";
import { PlantCostModal } from "./calculators/plant-cost-modal";
import { LabEquipmentsModal } from "./info-modals/lab-equipments-modal";
import { CipProcessModal } from "./info-modals/cip-process-modal";
import { MicrobiologyTestingModal } from "./info-modals/microbiology-testing-modal";
import { MilkHandlingPreservationModal } from "./info-modals/milk-handling-preservation-modal";
import { FssaiStandardsModal } from "./info-modals/fssai-standards-modal";
import { VariousCalculatorsModal } from "./calculators/various-calculators-modal";
import { FermentedProductsModal } from "./info-modals/fermented-products-modal";
import { EvaporationDryingModal } from "./info-modals/evaporation-drying-modal";
import { AuditsModal } from "./info-modals/audits-modal";
import { ValidationVerificationModal } from "./info-modals/validation-verification-modal";
import { EtpModal } from "./info-modals/etp-modal";
import { IceCreamProductionModal } from "./info-modals/ice-cream-production-modal";
import { ExpertSupportModal } from "./info-modals/expert-support-modal";
import { useAuth } from "@/context/auth-context";
import type { Department } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type AccessRole = Department | 'all' | 'guest';

const topics: { id: string; title: string; description: string; category: string; icon: React.ElementType; badge?: string; modal: React.ElementType; isPro: boolean; color: string; access: AccessRole[] }[] = [
  { id: 'industry', title: 'Dairy Industry', description: 'Overview & Trends', category: 'industry', icon: Factory, badge: 'New', modal: DairyIndustryModal, isPro: false, color: 'from-blue-100 to-indigo-200', access: ['all'] },
  { id: 'fssai-standards', title: 'FSSAI Standards', description: 'Official Dairy Standards', category: 'industry', icon: ShieldCheck, badge: 'New', modal: FssaiStandardsModal, isPro: false, color: 'from-green-100 to-teal-200', access: ['quality-access', 'all-control-access'] },
  { id: 'milk-chemistry', title: 'Milk Chemistry', description: 'Composition & Properties', category: 'science', icon: Atom, modal: MilkChemistryModal, isPro: false, color: 'from-red-100 to-rose-200', access: ['production-access', 'quality-access', 'all-control-access'] },
  { id: 'microbiology', title: 'Microbiology', description: 'Testing & Pathogens', category: 'science', icon: Bug, badge: 'New', modal: MicrobiologyTestingModal, isPro: true, color: 'from-purple-100 to-violet-200', access: ['quality-access', 'all-control-access'] },
  
  { id: 'milk-handling', title: 'Milk Handling', description: 'Reception & Preservation', category: 'milk', icon: Droplet, badge: 'New', modal: MilkHandlingPreservationModal, isPro: false, color: 'from-cyan-100 to-sky-200', access: ['production-access', 'quality-access', 'all-control-access'] },
  { id: 'processing', title: 'Dairy Processing', description: 'Techniques & Machinery', category: 'industry', icon: Settings, modal: DairyProcessingModal, isPro: false, color: 'from-gray-100 to-gray-300', access: ['production-access', 'quality-access', 'all-control-access'] },
  { id: 'adulteration', title: 'Adulteration', description: 'Detection & Prevention', category: 'milk', icon: TestTube, badge: 'Updated', modal: AdulterationModal, isPro: false, color: 'from-yellow-100 to-amber-200', access: ['quality-access', 'all-control-access'] },
  { id: 'solutions-prep', title: 'Solutions Preparation', description: 'Reagents & Calculators', category: 'science', icon: Beaker, modal: SolutionsPrepModal, isPro: false, color: 'from-emerald-100 to-green-200', access: ['quality-access', 'all-control-access'] },

  { id: 'fermented-products', title: 'Fermented Products', description: 'Yogurt, Dahi & More', category: 'science', icon: ReagentIcon, badge: 'New', modal: FermentedProductsModal, isPro: true, color: 'from-pink-100 to-fuchsia-200', access: ['production-access', 'all-control-access'] },
  { id: 'evaporation-drying', title: 'Evaporation & Drying', description: 'Condensed & Powdered Milk', category: 'science', icon: Wind, badge: 'New', modal: EvaporationDryingModal, isPro: true, color: 'from-indigo-100 to-blue-200', access: ['production-access', 'all-control-access'] },
  { id: 'paneer-production', title: 'Paneer Processing', description: 'Process & Yield', category: 'science', icon: PaneerIcon, modal: PaneerProcessingModal, isPro: false, color: 'from-lime-100 to-yellow-200', access: ['production-access', 'all-control-access'] },
  { id: 'ice-cream-production', title: 'Ice-Cream Production', description: 'Process & Science', category: 'science', icon: IceCreamIcon, modal: IceCreamProductionModal, isPro: true, color: 'from-rose-100 to-pink-200', access: ['production-access', 'all-control-access'] },
  
  { id: 'std1', title: 'Standardization I', description: 'Basic Principles', category: 'milk', icon: Scale, modal: StandardizationIModal, isPro: false, color: 'from-sky-100 to-cyan-200', access: ['all'] },
  { id: 'std2', title: 'Standardization II', description: 'Advanced Blending', category: 'milk', icon: Calculator, modal: StandardizationIIModal, isPro: false, color: 'from-fuchsia-100 to-purple-200', access: ['process-access', 'production-access', 'quality-access', 'all-control-access'] },
  { id: 'various-calculations', title: 'Various Calculations', description: 'Yield, Acidity, etc.', category: 'science', icon: FileSpreadsheet, badge: 'Updated', modal: VariousCalculatorsModal, isPro: false, color: 'from-orange-100 to-red-200', access: ['production-access', 'quality-access', 'all-control-access'] },
  { id: 'plant-cost', title: 'Plant Cost', description: 'Profit & Loss Calc', category: 'industry', icon: DollarSign, badge: 'Pro', modal: PlantCostModal, isPro: true, color: 'from-yellow-100 to-green-200', access: ['production-access', 'all-control-access'] },
  
  { id: 'quality-concept', title: 'Quality Concepts', description: 'HACCP, TQM, ISO', category: 'industry', icon: CheckSquare, modal: QualityConceptModal, isPro: false, color: 'from-teal-100 to-cyan-200', access: ['quality-access', 'all-control-access'] },
  { id: 'cip-process', title: 'CIP Process', description: 'Cleaning-In-Place Guide', category: 'industry', icon: Recycle, badge: 'New', modal: CipProcessModal, isPro: true, color: 'from-blue-100 to-cyan-300', access: ['process-access', 'production-access', 'quality-access', 'all-control-access'] },
  { id: 'etp', title: 'ETP', description: 'Wastewater Treatment', category: 'industry', icon: Recycle, badge: 'New', modal: EtpModal, isPro: true, color: 'from-green-100 to-lime-200', access: ['quality-access', 'all-control-access'] },
  { id: 'lab-equipments', title: 'Lab Equipments', description: 'Principles & Working', category: 'science', icon: Microscope, badge: 'Pro', modal: LabEquipmentsModal, isPro: true, color: 'from-gray-200 to-blue-200', access: ['quality-access', 'all-control-access'] },
  
  { id: 'compositional-analysis', title: 'Compositional Analysis', description: 'Chemical tests for products', category: 'science', icon: TestTube, modal: CompositionalAnalysisModal, isPro: false, color: 'from-indigo-100 to-purple-300', access: ['quality-access', 'all-control-access'] },
  { id: 'calibration', title: 'Calibration', description: 'Glassware & Reagents', category: 'science', icon: ClipboardCheck, modal: CalibrationStandardizationModal, isPro: false, color: 'from-red-100 to-orange-200', access: ['quality-access', 'all-control-access'] },
  { id: 'water-testing', title: 'Water Testing', description: 'WTP/ETP Analysis', category: 'industry', icon: Droplet, modal: WaterTestingModal, isPro: true, color: 'from-blue-200 to-sky-300', access: ['quality-access', 'all-control-access'] },
  { id: 'packaging-testing', title: 'Packaging Testing', description: 'Quality tests for materials', category: 'industry', icon: PackageCheck, modal: PackagingMaterialTestingModal, isPro: true, color: 'from-amber-100 to-yellow-200', access: ['quality-access', 'all-control-access'] },

  { id: 'audits', title: 'Audits', description: 'Internal & External Audits', category: 'industry', icon: ClipboardCheck, badge: 'New', modal: AuditsModal, isPro: true, color: 'from-rose-100 to-red-200', access: ['quality-access', 'all-control-access'] },
  { id: 'validation-verification', title: 'Validation & Verification', description: 'Food Safety Assurance', category: 'industry', icon: ClipboardCheck, badge: 'New', modal: ValidationVerificationModal, isPro: true, color: 'from-violet-100 to-fuchsia-200', access: ['production-access', 'quality-access', 'all-control-access'] },
  
  { id: 'expert-support', title: 'Expert Support', description: 'Ask AI & Real Experts', category: 'industry', icon: GraduationCap, badge: 'Pro', modal: ExpertSupportModal, isPro: true, color: 'from-amber-100 to-orange-200', access: ['quality-access', 'all-control-access'] },
  { id: 'about-us', title: 'About Us', description: 'Our Mission & Vision', category: 'industry', icon: Users, modal: AboutUsModal, isPro: false, color: 'from-slate-100 to-stone-200', access: ['all'] },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Science", value: "science" },
  { label: "Industry", value: "industry" },
  { label: "Milk", value: "milk" },
];

export function TopicGrid() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const userDepartment = user?.department; // Can be undefined

  const hasAccess = (topicAccess: AccessRole[]) => {
    if (!userDepartment || userDepartment === 'guest') {
      return false; // Lock everything if department is not set or is guest
    }
    if (topicAccess.includes('all')) return true;
    return topicAccess.includes(userDepartment);
  };

  const filteredTopics = topics.filter((topic) => {
    const matchesFilter = activeFilter === "all" || topic.category === activeFilter;
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (id: string, isAccessible: boolean) => {
      if (!isAccessible) {
          if (user?.department === 'guest') {
              toast({
                  title: "Feature Locked for Guests",
                  description: "Please sign up for an account to access this feature.",
                  variant: "destructive"
              });
              router.push('/signup');
          } else {
              toast({
                  title: "Access Denied",
                  description: "Please select your department in your profile to unlock features.",
                  variant: "destructive"
              });
              router.push('/profile');
          }
          return;
      }
      const topic = topics.find(t => t.id === id);
      if (topic && topic.modal) {
        setActiveModal(id);
      }
  };

  return (
    <>
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search topics..."
            className="w-full pl-10 pr-4 py-2 rounded-full shadow-sm bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter.value)}
              className="rounded-full px-5 transition-all shadow-sm data-[variant=default]:shadow-lg"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
        {filteredTopics.map((topic) => {
          const isAccessible = hasAccess(topic.access);
          return (
            <div
              key={topic.id}
              onClick={() => openModal(topic.id, isAccessible)}
              className={`bg-card p-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden group ${isAccessible ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
            >
              {!isAccessible && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                    <Lock className="w-6 h-6 text-white" />
                </div>
              )}
              {topic.badge && <Badge variant={topic.badge === 'Pro' ? 'default' : 'destructive'} className="absolute top-2 right-2 text-xs px-1.5 py-0.5 h-auto animate-pulse">{topic.badge}</Badge>}
              <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center bg-gradient-to-br ${topic.color}`}>
                <topic.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline font-semibold text-card-foreground text-sm leading-tight">{topic.title}</h3>
              <p className="hidden sm:block text-xs text-muted-foreground mt-1">{topic.description}</p>
            </div>
          )
        })}
      </div>
      
      {topics.map(topic => {
          const ModalComponent = topic.modal;
          if (!ModalComponent) return null;
          return <ModalComponent key={`${topic.id}-modal`} isOpen={activeModal === topic.id} setIsOpen={() => setActiveModal(null)} />
      })}
    </>
  );
}
