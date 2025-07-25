
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
} from "lucide-react";
import { PaneerIcon } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { DairyIndustryModal } from "./info-modals/dairy-industry-modal";
import { MilkChemistryModal } from "./info-modals/milk-chemistry-modal";
import { AdulterationModal } from "./info-modals/adulteration-modal";
import { StandardizationIModal } from "./calculators/standardization-i-modal";
import { StandardizationIIModal } from "./calculators/standardization-ii-modal";
import { SolutionsPrepModal } from "./calculators/solutions-prep-modal";
import { PaneerProductionModal } from "./info-modals/paneer-production-modal";
import { DairyProcessingModal } from "./info-modals/dairy-processing-modal";

const topics = [
  { id: 'industry', title: 'Dairy Industry', description: 'Overview & Trends', category: 'industry', icon: Factory, badge: 'New', modal: DairyIndustryModal },
  { id: 'milk-chemistry', title: 'Milk Chemistry', description: 'Composition & Properties', category: 'science', icon: FlaskConical, modal: MilkChemistryModal },
  { id: 'solutions-prep', title: 'Solutions Preparation', description: 'Testing Methods', category: 'science', icon: Beaker, modal: SolutionsPrepModal },
  { id: 'adulteration', title: 'Adulteration', description: 'Detection & Prevention', category: 'milk', icon: Biohazard, badge: 'Updated', modal: AdulterationModal },
  { id: 'std1', title: 'Standardization I', description: 'Basic Principles', category: 'milk', icon: Scale, modal: StandardizationIModal },
  { id: 'std2', title: 'Standardization II', description: 'Advanced Blending', category: 'milk', icon: Calculator, modal: StandardizationIIModal },
  { id: 'paneer-production', title: 'Paneer Production', description: 'Process & Yield', category: 'science', icon: PaneerIcon, modal: PaneerProductionModal },
  { id: 'processing', title: 'Dairy Processing', description: 'Techniques & Machinery', category: 'industry', icon: Settings, modal: DairyProcessingModal },
  { id: 'food-tech', title: 'Food Technology', description: 'Product Development', category: 'science', icon: Utensils, modal: null },
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

  const filteredTopics = topics.filter((topic) => {
    const matchesFilter = activeFilter === "all" || topic.category === activeFilter;
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (id: string) => {
      const topic = topics.find(t => t.id === id);
      if(topic && topic.modal) {
        setActiveModal(id);
      } else {
        alert("This section is coming soon!");
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
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => openModal(topic.id)}
            className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center relative overflow-hidden group"
          >
            {topic.badge && <Badge variant="destructive" className="absolute top-3 right-3 animate-pulse">{topic.badge}</Badge>}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20">
              <topic.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-headline font-semibold text-card-foreground text-md">{topic.title}</h3>
            <p className="text-xs text-muted-foreground">{topic.description}</p>
          </div>
        ))}
      </div>
      
      {topics.map(topic => {
          const ModalComponent = topic.modal;
          if (!ModalComponent) return null;
          return <ModalComponent key={`${topic.id}-modal`} isOpen={activeModal === topic.id} setIsOpen={() => setActiveModal(null)} />
      })}
    </>
  );
}
