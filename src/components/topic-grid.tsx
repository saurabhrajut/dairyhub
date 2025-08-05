
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  FlaskConical,
  Beaker,
  Biohazard,
  Scale,
  Calculator,
  Settings,
  Utensils,
  Search,
  Users,
  TestTube,
  ClipboardCheck,
  CheckSquare,
  Droplet,
  PackageCheck,
  Lock,
  DollarSign,
} from "lucide-react";
import { PaneerIcon, IceCreamIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { DairyIndustryModal } from "./info-modals/dairy-industry-modal";
import { MilkChemistryModal } from "./info-modals/milk-chemistry-modal";
import { AdulterationModal } from "./info-modals/adulteration-modal";
import { StandardizationIModal } from "./calculators/standardization-i-modal";
import { StandardizationIIModal } from "./calculators/standardization-ii-modal";
import { SolutionsPrepModal } from "./calculators/solutions-prep-modal";
import { PaneerProductionModal } from "./info-modals/paneer-production-modal";
import { DairyProcessingModal } from "./info-modals/dairy-processing-modal";
import { AboutUsModal } from "./info-modals/about-us-modal";
import { IceCreamCalculationsModal } from "./info-modals/ice-cream-calculations-modal";
import { CompositionalAnalysisModal } from "./info-modals/compositional-analysis-modal";
import { CalibrationStandardizationModal } from "./info-modals/calibration-standardization-modal";
import { QualityConceptModal } from "./info-modals/quality-concept-modal";
import { WaterTestingModal } from "./info-modals/water-testing-modal";
import { PackagingMaterialTestingModal } from "./info-modals/packaging-material-testing-modal";
import { FoodTechModal } from "./info-modals/food-tech-modal";
import { PlantCostModal } from "./calculators/plant-cost-modal";
import { useSubscription } from "@/context/subscription-context";
import { SubscriptionModal } from "./subscription-modal";

const topics = [
  { id: 'industry', title: 'Dairy Industry', description: 'Overview & Trends', category: 'industry', icon: Factory, badge: 'New', modal: DairyIndustryModal, isPro: true },
  { id: 'milk-chemistry', title: 'Milk Chemistry', description: 'Composition & Properties', category: 'science', icon: FlaskConical, modal: MilkChemistryModal, isPro: true },
  { id: 'solutions-prep', title: 'Solutions Preparation', description: 'Testing Methods', category: 'science', icon: Beaker, modal: SolutionsPrepModal, isPro: true },
  { id: 'adulteration', title: 'Adulteration', description: 'Detection & Prevention', category: 'milk', icon: Biohazard, badge: 'Updated', modal: AdulterationModal, isPro: true },
  { id: 'std1', title: 'Standardization I', description: 'Basic Principles', category: 'milk', icon: Scale, modal: StandardizationIModal, isPro: false },
  { id: 'std2', title: 'Standardization II', description: 'Advanced Blending', category: 'milk', icon: Calculator, modal: StandardizationIIModal, isPro: true },
  { id: 'paneer-production', title: 'Paneer Production', description: 'Process & Yield', category: 'science', icon: PaneerIcon, modal: PaneerProductionModal, isPro: true },
  { id: 'ice-cream-calc', title: 'Ice Cream Calc', description: 'Overrun & Mix', category: 'science', icon: IceCreamIcon, modal: IceCreamCalculationsModal, isPro: true },
  { id: 'plant-cost', title: 'Plant Cost', description: 'Profit & Loss Calc', category: 'industry', icon: DollarSign, badge: 'Pro', modal: PlantCostModal, isPro: true },
  { id: 'compositional-analysis', title: 'Compositional Analysis', description: 'Chemical tests for products', category: 'science', icon: TestTube, modal: CompositionalAnalysisModal, isPro: true },
  { id: 'calibration', title: 'Calibration', description: 'Glassware & Reagents', category: 'science', icon: ClipboardCheck, modal: CalibrationStandardizationModal, isPro: true },
  { id: 'quality-concept', title: 'Quality Concepts', description: 'HACCP, TQM, ISO', category: 'industry', icon: CheckSquare, modal: QualityConceptModal, isPro: true },
  { id: 'water-testing', title: 'Water Testing', description: 'WTP/ETP Analysis', category: 'industry', icon: Droplet, modal: WaterTestingModal, isPro: true },
  { id: 'packaging-testing', title: 'Packaging Testing', description: 'Quality tests for materials', category: 'industry', icon: PackageCheck, modal: PackagingMaterialTestingModal, isPro: true },
  { id: 'processing', title: 'Dairy Processing', description: 'Techniques & Machinery', category: 'industry', icon: Settings, modal: DairyProcessingModal, isPro: true },
  { id: 'food-tech', title: 'Food Technology', description: 'Product Development', category: 'science', icon: Utensils, modal: FoodTechModal, isPro: true },
  { id: 'about-us', title: 'About Us', description: 'Our Mission & Vision', category: 'industry', icon: Users, modal: AboutUsModal, isPro: false },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Science", value: "science" },
  { label: "Industry", value: "industry" },
  { label: "Milk", value: "milk" },
];

export function TopicGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const { isPro } = useSubscription();

  const filteredTopics = topics.filter((topic) => {
    const matchesFilter = activeFilter === "all" || topic.category === activeFilter;
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (id: string) => {
      const topic = topics.find(t => t.id === id);
      if (!topic) return;

      if (topic.isPro && !isPro) {
        setIsSubscriptionModalOpen(true);
        return;
      }
      
      if(topic && topic.modal) {
        setActiveModal(id);
      } else {
        // Fallback for topics without modals yet, though we are adding one now.
        // You might want to show a "Coming Soon" toast here in the future.
        setIsSubscriptionModalOpen(true); 
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredTopics.map((topic) => {
          const isLocked = topic.isPro && !isPro;
          return (
            <div
              key={topic.id}
              onClick={() => openModal(topic.id)}
              className={`bg-card p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center relative overflow-hidden group ${isLocked ? 'opacity-70' : ''}`}
            >
              {isLocked && <div className="absolute inset-0 bg-black/30 flex items-center justify-center"><Lock className="w-8 h-8 text-white" /></div>}
              {topic.badge && <Badge variant={topic.badge === 'Pro' ? 'default' : 'destructive'} className="absolute top-3 right-3 animate-pulse">{topic.badge}</Badge>}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20">
                <topic.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-headline font-semibold text-card-foreground text-md">{topic.title}</h3>
              <p className="text-xs text-muted-foreground">{topic.description}</p>
            </div>
          )
        })}
      </div>
      
      {topics.map(topic => {
          const ModalComponent = topic.modal;
          if (!ModalComponent) return null;
          return <ModalComponent key={`${topic.id}-modal`} isOpen={activeModal === topic.id} setIsOpen={() => setActiveModal(null)} />
      })}
      <SubscriptionModal isOpen={isSubscriptionModalOpen} setIsOpen={setIsSubscriptionModalOpen} />
    </>
  );
}
