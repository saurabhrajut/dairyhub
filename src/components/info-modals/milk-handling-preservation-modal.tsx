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
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { useLanguage } from "@/context/language-context";
import { milkHandlingPreservationContent } from "@/lib/content/milk-handling-preservation-content";
import {
  ArrowLeft,
  BookOpen,
  Truck,
  Warehouse,
  Shield,
  CheckCircle,
  Droplet,
  ChevronRight,
  LayoutGrid,
  Activity,
  PackageCheck,
  ShieldCheck,
  Snowflake,
  Container,
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "Topics par Wapas",
    topics: "Topics",
    modules: "Categories",
    langPill: "Handling Hindi Content",
    topicsCount: (n: number) => `${n} topics`,
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Categories",
    langPill: "Handling English Content",
    topicsCount: (n: number) => `${n} topics`,
  },
};

// ─────────────────────────────────────────────
// Table Scroll & Prose Wrapper
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

const SectionBody = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current) wrapTablesInScrollDiv(ref.current); }, [children]);
  return (
    <div ref={ref} className="p-4 sm:p-6 md:p-8 text-sm sm:text-base text-gray-700 leading-relaxed
      [&_h4]:font-bold [&_h4]:text-indigo-900 [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-sm sm:[&_h4]:text-lg [&_h4]:border-b [&_h4]:border-indigo-100 [&_h4]:pb-1
      [&_h5]:font-semibold [&_h5]:text-gray-800 [&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-xs sm:[&_h5]:text-sm
      [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:break-words
      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4
      [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:mb-4
      [&_li]:leading-relaxed [&_li]:break-words [&_li]:text-gray-600
      [&_strong]:text-gray-900 [&_em]:italic
      [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[11px] sm:[&_code]:text-[13px] [&_code]:font-mono [&_code]:break-all
      w-full max-w-full overflow-hidden box-border
    ">
      {children}
    </div>
  );
};

// ─────────────────────────────────────────────
// Section & SubSection Wrappers
// ─────────────────────────────────────────────
const Section = ({
  title,
  children,
  icon: Icon,
  accentColor = "blue",
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  accentColor?: string;
}) => {
  const headerGradients: Record<string, string> = {
    blue:    "from-blue-600 to-blue-500",
    orange:  "from-orange-600 to-orange-500",
    cyan:    "from-cyan-600 to-cyan-500",
    emerald: "from-emerald-600 to-emerald-500",
    red:     "from-red-600 to-red-500",
    purple:  "from-purple-600 to-purple-500",
    rose:    "from-rose-600 to-rose-500",
    amber:   "from-amber-600 to-amber-500",
    teal:    "from-teal-600 to-teal-500",
    indigo:  "from-indigo-600 to-indigo-500",
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm mb-4 sm:mb-5 w-full max-w-full overflow-hidden box-border">
      <div className={`bg-gradient-to-r ${gradient} p-3 sm:p-5 flex items-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl`}>
        {Icon && (
          <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        )}
        <h2 className="text-sm sm:text-xl font-bold text-white font-headline leading-tight break-words">{title}</h2>
      </div>
      <SectionBody>{children}</SectionBody>
    </div>
  );
};

const SubSection = ({
  title,
  children,
  accent = "border-gray-200",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) => (
  <div className="mt-5 mb-4 w-full max-w-full overflow-hidden box-border">
    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-3 font-headline flex items-start gap-2">
      <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0 mt-1.5"></span>
      <span className="flex-1 break-words">{title}</span>
    </h3>
    <div className={`pl-3 sm:pl-4 border-l-2 ${accent} w-full max-w-full overflow-hidden box-border`}>
      {children}
    </div>
  </div>
);

const RawHTML = ({ html }: { html: string }) => (
  <div className="w-full max-w-full overflow-hidden break-words strict-html-wrap" dangerouslySetInnerHTML={{ __html: html }} />
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-5 space-y-1.5 mb-4 mt-2">
    {items.map((item, idx) => (
      <li key={idx} className="text-gray-600 leading-relaxed text-sm">{item}</li>
    ))}
  </ul>
);

const StepsList = ({ steps }: { steps: string[] }) => (
  <ol className="list-decimal pl-5 space-y-2 mb-4 mt-2">
    {steps.map((step, idx) => (
      <li key={idx} className="text-gray-600 leading-relaxed text-sm">{step}</li>
    ))}
  </ol>
);

// ─────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────
const topicComponents: Record<string, React.FC<{ content: any; accent?: string }>> = {
  introduction: ({ content, accent }) => (
    <Section title={content.sections.introduction.title} icon={BookOpen} accentColor={accent}>
      <RawHTML html={content.sections.introduction.p1} />
      <div className="bg-blue-50/50 p-4 sm:p-5 rounded-xl border border-blue-100 my-4">
        <RawHTML html={content.sections.introduction.p2} />
      </div>
      <RawHTML html={content.sections.introduction.p3} />
      {content.sections.introduction.scientificData && (
        <SubSection title={content.sections.introduction.scientificData.title} accent="border-blue-200">
          <h4 className="font-semibold text-blue-900 mt-2 mb-1">{content.sections.introduction.scientificData.composition.title}</h4>
          <BulletList items={content.sections.introduction.scientificData.composition.items} />
          <h4 className="font-semibold text-blue-900 mt-4 mb-1">{content.sections.introduction.scientificData.microbialGrowth.title}</h4>
          <BulletList items={content.sections.introduction.scientificData.microbialGrowth.items} />
        </SubSection>
      )}
    </Section>
  ),

  reception: ({ content, accent }) => (
    <Section title={content.sections.reception.title} icon={Droplet} accentColor={accent}>
      <RawHTML html={content.sections.reception.p1} />
      
      <SubSection title={content.sections.reception.farm_practices.title} accent="border-emerald-200">
        <RawHTML html={content.sections.reception.farm_practices.p1} />
        <RawHTML html={content.sections.reception.farm_practices.p2} />
        <RawHTML html={content.sections.reception.farm_practices.p3} />
        {content.sections.reception.farm_practices.additionalTests && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-150 my-3">
            <h4 className="font-semibold text-emerald-900 !border-none !mt-0">{content.sections.reception.farm_practices.additionalTests.title}</h4>
            <BulletList items={content.sections.reception.farm_practices.additionalTests.items} />
          </div>
        )}
      </SubSection>

      <SubSection title={content.sections.reception.plant_reception.title} accent="border-emerald-200">
        <RawHTML html={content.sections.reception.plant_reception.p1} />
        <RawHTML html={content.sections.reception.plant_reception.p2} />
        <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-xl border border-emerald-100 my-4">
          <ul className="list-disc list-inside space-y-2 m-0 p-0 text-sm">
            <li><strong className="font-semibold text-emerald-900">{content.sections.reception.plant_reception.measurement_methods.by_weight.title}:</strong> {content.sections.reception.plant_reception.measurement_methods.by_weight.text}</li>
            <li><strong className="font-semibold text-emerald-900">{content.sections.reception.plant_reception.measurement_methods.by_volume.title}:</strong> {content.sections.reception.plant_reception.measurement_methods.by_volume.text}</li>
          </ul>
        </div>
        <RawHTML html={content.sections.reception.plant_reception.p3} />
        {content.sections.reception.plant_reception.receptionQualityTests && (
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-emerald-900 !border-none !mt-0">{content.sections.reception.plant_reception.receptionQualityTests.title}</h4>
            <div className="space-y-3 mt-2">
              <div>
                <h5 className="font-semibold text-gray-800">{content.sections.reception.plant_reception.receptionQualityTests.organoleptic.title}</h5>
                <BulletList items={content.sections.reception.plant_reception.receptionQualityTests.organoleptic.items} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">{content.sections.reception.plant_reception.receptionQualityTests.chemical.title}</h5>
                <BulletList items={content.sections.reception.plant_reception.receptionQualityTests.chemical.items} />
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">{content.sections.reception.plant_reception.receptionQualityTests.adulteration.title}</h5>
                <BulletList items={content.sections.reception.plant_reception.receptionQualityTests.adulteration.items} />
              </div>
            </div>
          </div>
        )}
      </SubSection>
      
      <SubSection title={content.sections.reception.hygiene_cleaning.title} accent="border-emerald-200">
        <RawHTML html={content.sections.reception.hygiene_cleaning.p1} />
        {content.sections.reception.hygiene_cleaning.cipProtocol && (
          <div className="bg-emerald-50/30 p-4 rounded-xl border border-emerald-100/50 my-3">
            <h4 className="font-semibold text-emerald-900 !border-none !mt-0">{content.sections.reception.hygiene_cleaning.cipProtocol.title}</h4>
            <StepsList steps={content.sections.reception.hygiene_cleaning.cipProtocol.steps} />
          </div>
        )}
        <RawHTML html={content.sections.reception.hygiene_cleaning.p2} />
        <RawHTML html={content.sections.reception.hygiene_cleaning.p3} />
      </SubSection>
    </Section>
  ),

  transportation: ({ content, accent }) => (
    <Section title={content.sections.transportation.title} icon={Truck} accentColor={accent}>
      <RawHTML html={content.sections.transportation.p1} />
      
      <SubSection title={content.sections.transportation.tanker_design.title} accent="border-orange-200">
        <div className="bg-orange-50/50 p-4 sm:p-5 rounded-xl border border-orange-100 space-y-3">
          <RawHTML html={content.sections.transportation.tanker_design.p1} />
          <RawHTML html={content.sections.transportation.tanker_design.p2} />
          <RawHTML html={content.sections.transportation.tanker_design.p3} />
          {content.sections.transportation.tanker_design.tankerSpecifications && (
            <div className="bg-white p-4 rounded-lg border border-orange-100">
              <h5 className="font-semibold text-orange-950 mt-0">{content.sections.transportation.tanker_design.tankerSpecifications.title}</h5>
              <BulletList items={content.sections.transportation.tanker_design.tankerSpecifications.items} />
            </div>
          )}
        </div>
      </SubSection>

      <SubSection title={content.sections.transportation.hygienic_transport.title} accent="border-orange-200">
        <RawHTML html={content.sections.transportation.hygienic_transport.p1} />
        <RawHTML html={content.sections.transportation.hygienic_transport.p2} />
        <RawHTML html={content.sections.transportation.hygienic_transport.p3} />
        {content.sections.transportation.hygienic_transport.biofilmPrevention && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 my-3">
            <h4 className="font-semibold text-orange-900 !border-none !mt-0">{content.sections.transportation.hygienic_transport.biofilmPrevention.title}</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">{content.sections.transportation.hygienic_transport.biofilmPrevention.p1}</p>
            <BulletList items={content.sections.transportation.hygienic_transport.biofilmPrevention.preventionMethods} />
          </div>
        )}
      </SubSection>
      
      <SubSection title={content.sections.transportation.temp_control.title} accent="border-orange-200">
        <RawHTML html={content.sections.transportation.temp_control.p1} />
        <RawHTML html={content.sections.transportation.temp_control.p2} />
        {content.sections.transportation.temp_control.coldChainIntegrity && (
          <div className="bg-orange-50/30 p-4 rounded-xl border border-orange-100/50 my-3">
            <h4 className="font-semibold text-orange-900 !border-none !mt-0">{content.sections.transportation.temp_control.coldChainIntegrity.title}</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">{content.sections.transportation.temp_control.coldChainIntegrity.p1}</p>
            <BulletList items={content.sections.transportation.temp_control.coldChainIntegrity.items} />
          </div>
        )}
      </SubSection>
      
      <SubSection title={content.sections.transportation.monitoring_logistics.title} accent="border-orange-200">
        <RawHTML html={content.sections.transportation.monitoring_logistics.p1} />
        <RawHTML html={content.sections.transportation.monitoring_logistics.p2} />
        <RawHTML html={content.sections.transportation.monitoring_logistics.p3} />
        <RawHTML html={content.sections.transportation.monitoring_logistics.p4} />
        {content.sections.transportation.monitoring_logistics.regulatoryCompliance && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 my-3">
            <h4 className="font-semibold text-orange-900 !border-none !mt-0">{content.sections.transportation.monitoring_logistics.regulatoryCompliance.title}</h4>
            <BulletList items={content.sections.transportation.monitoring_logistics.regulatoryCompliance.items} />
          </div>
        )}
      </SubSection>
    </Section>
  ),

  storage: ({ content, accent }) => (
    <Section title={content.sections.storage.title} icon={Warehouse} accentColor={accent}>
      <RawHTML html={content.sections.storage.p1} />
      
      <SubSection title={content.sections.storage.raw_milk_silos.title} accent="border-cyan-200">
        <RawHTML html={content.sections.storage.raw_milk_silos.p1} />
        <RawHTML html={content.sections.storage.raw_milk_silos.p2} />
        <div className="bg-cyan-50/50 p-4 sm:p-5 rounded-xl border border-cyan-100 my-4">
          <ul className="list-disc list-inside space-y-1.5 m-0 p-0 text-sm">
            <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.temp.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.temp.text}</li>
            <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.level.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.level.text}</li>
            <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.low_level.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.low_level.text}</li>
            <li><strong className="font-semibold text-cyan-900">{content.sections.storage.raw_milk_silos.sensors.overflow.title}:</strong> {content.sections.storage.raw_milk_silos.sensors.overflow.text}</li>
          </ul>
        </div>
        {content.sections.storage.raw_milk_silos.siloManagement && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.raw_milk_silos.siloManagement.title}</h4>
            <BulletList items={content.sections.storage.raw_milk_silos.siloManagement.items} />
          </div>
        )}
      </SubSection>

      <SubSection title={content.sections.storage.refrigerated_storage.title} accent="border-cyan-200">
        <RawHTML html={content.sections.storage.refrigerated_storage.p1} />
        <RawHTML html={content.sections.storage.refrigerated_storage.p2} />
        <RawHTML html={content.sections.storage.refrigerated_storage.p3} />
        {content.sections.storage.refrigerated_storage.shelfLifeData && (
          <div className="bg-cyan-50/30 p-4 rounded-xl border border-cyan-100/50 my-3">
            <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.refrigerated_storage.shelfLifeData.title}</h4>
            <BulletList items={content.sections.storage.refrigerated_storage.shelfLifeData.items} />
          </div>
        )}
        {content.sections.storage.refrigerated_storage.eslMilk && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 my-3">
            <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.refrigerated_storage.eslMilk.title}</h4>
            <RawHTML html={content.sections.storage.refrigerated_storage.eslMilk.p1} />
          </div>
        )}
      </SubSection>
      
      <SubSection title={content.sections.storage.uht_storage.title} accent="border-cyan-200">
        <RawHTML html={content.sections.storage.uht_storage.p1} />
        <RawHTML html={content.sections.storage.uht_storage.p2} />
        <RawHTML html={content.sections.storage.uht_storage.p3} />
        {content.sections.storage.uht_storage.uhtChanges && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 my-3 space-y-3">
            <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.uht_storage.uhtChanges.title}</h4>
            <div>
              <h5 className="font-semibold text-gray-800">Nutritional Changes</h5>
              <BulletList items={content.sections.storage.uht_storage.uhtChanges.nutritional} />
            </div>
            <div>
              <h5 className="font-semibold text-gray-800">Sensory Changes</h5>
              <BulletList items={content.sections.storage.uht_storage.uhtChanges.sensory} />
            </div>
          </div>
        )}
      </SubSection>

      {content.sections.storage.otherStorageMethods && (
        <SubSection title={content.sections.storage.otherStorageMethods.title} accent="border-cyan-200">
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.otherStorageMethods.condensedMilk.title}</h4>
              <RawHTML html={content.sections.storage.otherStorageMethods.condensedMilk.p1} />
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.otherStorageMethods.driedMilk.title}</h4>
              <RawHTML html={content.sections.storage.otherStorageMethods.driedMilk.p1} />
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-cyan-900 !border-none !mt-0">{content.sections.storage.otherStorageMethods.fermentedProducts.title}</h4>
              <RawHTML html={content.sections.storage.otherStorageMethods.fermentedProducts.p1} />
            </div>
          </div>
        </SubSection>
      )}
    </Section>
  ),

  preservation: ({ content, accent }) => (
    <Section title={content.sections.preservation.title} icon={Shield} accentColor={accent}>
      <SubSection title={content.sections.preservation.principles.title} accent="border-purple-200">
        <RawHTML html={content.sections.preservation.principles.p1} />
        {content.sections.preservation.principles.hurdleConcept && (
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 my-3">
            <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.principles.hurdleConcept.title}</h4>
            <BulletList items={content.sections.preservation.principles.hurdleConcept.items} />
          </div>
        )}
        <RawHTML html={content.sections.preservation.principles.p2} />
      </SubSection>

      {content.sections.preservation.thermalPreservation && (
        <SubSection title={content.sections.preservation.thermalPreservation.title} accent="border-purple-200">
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.thermalPreservation.pasteurization.title}</h4>
              <RawHTML html={content.sections.preservation.thermalPreservation.pasteurization.p1} />
              <BulletList items={content.sections.preservation.thermalPreservation.pasteurization.methods} />
              <p className="text-sm text-gray-700 leading-relaxed"><strong>Effectiveness:</strong> {content.sections.preservation.thermalPreservation.pasteurization.effectiveness}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.thermalPreservation.htst_equipment.title}</h4>
              <BulletList items={content.sections.preservation.thermalPreservation.htst_equipment.items} />
            </div>
          </div>
        </SubSection>
      )}
      
      <SubSection title={content.sections.preservation.chemicals.title} accent="border-purple-200">
        <div className="bg-purple-50/50 p-4 sm:p-5 rounded-xl border border-purple-100 space-y-4">
          <div>
            <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none">{content.sections.preservation.chemicals.h2o2.title}</h4>
            <RawHTML html={content.sections.preservation.chemicals.h2o2.p1} />
            <RawHTML html={content.sections.preservation.chemicals.h2o2.p2} />
          </div>
          <div className="h-px bg-purple-100 my-2" />
          <div>
            <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none">{content.sections.preservation.chemicals.lp_system.title}</h4>
            <RawHTML html={content.sections.preservation.chemicals.lp_system.p1} />
            <RawHTML html={content.sections.preservation.chemicals.lp_system.p2} />
          </div>
          {content.sections.preservation.chemicals.nisin && (
            <>
              <div className="h-px bg-purple-100 my-2" />
              <div>
                <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none">{content.sections.preservation.chemicals.nisin.title}</h4>
                <RawHTML html={content.sections.preservation.chemicals.nisin.p1} />
                <p className="text-xs text-gray-500 mt-1"><strong>Regulatory:</strong> {content.sections.preservation.chemicals.nisin.regulatory}</p>
              </div>
            </>
          )}
          {content.sections.preservation.chemicals.natamycin && (
            <>
              <div className="h-px bg-purple-100 my-2" />
              <div>
                <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none">{content.sections.preservation.chemicals.natamycin.title}</h4>
                <RawHTML html={content.sections.preservation.chemicals.natamycin.p1} />
              </div>
            </>
          )}
          <div className="h-px bg-purple-100 my-2" />
          <div>
            <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none">{content.sections.preservation.chemicals.other.title}</h4>
            <BulletList items={content.sections.preservation.chemicals.other.items} />
          </div>
        </div>
      </SubSection>

      {content.sections.preservation.nonThermal && (
        <SubSection title={content.sections.preservation.nonThermal.title} accent="border-purple-200">
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.nonThermal.hpProcessing.title}</h4>
              <RawHTML html={content.sections.preservation.nonThermal.hpProcessing.p1} />
              <h5 className="font-semibold text-gray-800 mt-2">Advantages</h5>
              <BulletList items={content.sections.preservation.nonThermal.hpProcessing.advantages} />
              <h5 className="font-semibold text-gray-800 mt-2">Limitations</h5>
              <BulletList items={content.sections.preservation.nonThermal.hpProcessing.limitations} />
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.nonThermal.pulsedElectricField.title}</h4>
              <RawHTML html={content.sections.preservation.nonThermal.pulsedElectricField.p1} />
              <p className="text-sm text-gray-700 leading-relaxed mt-2"><strong>Applications:</strong> {content.sections.preservation.nonThermal.pulsedElectricField.applications}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.nonThermal.uvTreatment.title}</h4>
              <RawHTML html={content.sections.preservation.nonThermal.uvTreatment.p1} />
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.nonThermal.microfiltration.title}</h4>
              <RawHTML html={content.sections.preservation.nonThermal.microfiltration.p1} />
            </div>
          </div>
        </SubSection>
      )}

      <SubSection title={content.sections.preservation.regulatory.title} accent="border-purple-200">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.regulatory.india.title}</h4>
            <BulletList items={content.sections.preservation.regulatory.india.items} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.regulatory.international.title}</h4>
            <BulletList items={content.sections.preservation.regulatory.international.items} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-purple-900 !border-none !mt-0">{content.sections.preservation.regulatory.adulteration.title}</h4>
            <BulletList items={content.sections.preservation.regulatory.adulteration.items} />
          </div>
        </div>
      </SubSection>
      
      <SubSection title={content.sections.preservation.comparison.title} accent="border-purple-200">
        <RawHTML html={content.sections.preservation.comparison.p1} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {Object.keys(content.sections.preservation.comparison.methodsComparison).filter(k => k !== "title").map((key) => {
            const method = content.sections.preservation.comparison.methodsComparison[key];
            return (
              <div key={key} className="border border-gray-200 p-4 rounded-xl shadow-sm bg-white flex flex-col justify-between">
                <div>
                  <h4 className="!mt-0 font-bold text-indigo-700 border-b pb-2 mb-2">{method.title}</h4>
                  <p className="text-sm mt-1"><strong>Principle:</strong> {method.principle}</p>
                  <p className="text-sm mt-1"><strong>Log Reduction:</strong> {method.logReduction}</p>
                  <p className="text-sm mt-1"><strong>Shelf Life:</strong> {method.shelfLife}</p>
                  <p className="text-sm mt-1.5"><strong className="text-emerald-600">Advantages:</strong> {method.advantages}</p>
                  <p className="text-sm mt-1.5"><strong className="text-rose-600">Disadvantages:</strong> {method.disadvantages}</p>
                </div>
                <p className="text-sm mt-2 pt-2 border-t border-gray-100 font-medium text-slate-700">Cost: {method.cost}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <RawHTML html={content.sections.preservation.comparison.p2} />
        </div>
      </SubSection>
    </Section>
  ),

  qualityTesting: ({ content, accent }) => (
    <Section title={content.sections.qualityTesting.title} icon={ShieldCheck} accentColor={accent}>
      <RawHTML html={content.sections.qualityTesting.p1} />

      <SubSection title={content.sections.qualityTesting.microbiologicalTests.title} accent="border-rose-200">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.microbiologicalTests.standardPlateCount.title}</h4>
            <RawHTML html={content.sections.qualityTesting.microbiologicalTests.standardPlateCount.p1} />
            <p className="text-sm text-gray-700 leading-relaxed mt-2"><strong>Rapid Alternatives:</strong> {content.sections.qualityTesting.microbiologicalTests.standardPlateCount.rapidMethods}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.microbiologicalTests.coliformTest.title}</h4>
            <RawHTML html={content.sections.qualityTesting.microbiologicalTests.coliformTest.p1} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.microbiologicalTests.specificPathogen.title}</h4>
            <BulletList items={content.sections.qualityTesting.microbiologicalTests.specificPathogen.items} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.microbiologicalTests.rapidMicrobial.title}</h4>
            <BulletList items={content.sections.qualityTesting.microbiologicalTests.rapidMicrobial.items} />
          </div>
        </div>
      </SubSection>

      <SubSection title={content.sections.qualityTesting.chemicalTests.title} accent="border-rose-200">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.chemicalTests.compositional.title}</h4>
            <BulletList items={content.sections.qualityTesting.chemicalTests.compositional.items} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.chemicalTests.freezingPoint.title}</h4>
            <RawHTML html={content.sections.qualityTesting.chemicalTests.freezingPoint.p1} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.chemicalTests.antibioticResidue.title}</h4>
            <RawHTML html={content.sections.qualityTesting.chemicalTests.antibioticResidue.p1} />
            <BulletList items={content.sections.qualityTesting.chemicalTests.antibioticResidue.methods} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-rose-900 !border-none !mt-0">{content.sections.qualityTesting.chemicalTests.somaticCells.title}</h4>
            <RawHTML html={content.sections.qualityTesting.chemicalTests.somaticCells.p1} />
            <BulletList items={content.sections.qualityTesting.chemicalTests.somaticCells.methods} />
            <p className="text-sm text-gray-700 leading-relaxed mt-2 font-medium"><strong>Economic Impact:</strong> {content.sections.qualityTesting.chemicalTests.somaticCells.economicImpact}</p>
          </div>
        </div>
      </SubSection>

      <SubSection title={content.sections.qualityTesting.sensorTechnology.title} accent="border-rose-200">
        <RawHTML html={content.sections.qualityTesting.sensorTechnology.p1} />
        <BulletList items={content.sections.qualityTesting.sensorTechnology.technologies} />
      </SubSection>
    </Section>
  ),

  processingMethods: ({ content, accent }) => (
    <Section title={content.sections.processingMethods.title} icon={Activity} accentColor={accent}>
      <RawHTML html={content.sections.processingMethods.p1} />

      <SubSection title={content.sections.processingMethods.homogenization.title} accent="border-indigo-200">
        <RawHTML html={content.sections.processingMethods.homogenization.p1} />
        <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100 my-3">
          <h4 className="font-semibold text-indigo-900 !border-none !mt-0">Scientific Details</h4>
          <RawHTML html={content.sections.processingMethods.homogenization.scientificDetails} />
        </div>
        <BulletList items={content.sections.processingMethods.homogenization.types} />
      </SubSection>

      <SubSection title={content.sections.processingMethods.standardization.title} accent="border-indigo-200">
        <RawHTML html={content.sections.processingMethods.standardization.p1} />
        {content.sections.processingMethods.standardization.fortification && (
          <div className="space-y-3 mt-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-indigo-900 !border-none !mt-0">{content.sections.processingMethods.standardization.fortification.title}</h4>
              <RawHTML html={content.sections.processingMethods.standardization.fortification.p1} />
              <p className="text-sm text-gray-700 leading-relaxed mt-2"><strong>Challenges:</strong> {content.sections.processingMethods.standardization.fortification.challenges}</p>
            </div>
          </div>
        )}
      </SubSection>

      <SubSection title={content.sections.processingMethods.separation.title} accent="border-indigo-200">
        <RawHTML html={content.sections.processingMethods.separation.p1} />
      </SubSection>
    </Section>
  ),

  packagingLabeling: ({ content, accent }) => (
    <Section title={content.sections.packagingLabeling.title} icon={PackageCheck} accentColor={accent}>
      <RawHTML html={content.sections.packagingLabeling.p1} />

      <SubSection title={content.sections.packagingLabeling.packagingMaterials.title} accent="border-amber-200">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-amber-900 !border-none !mt-0">{content.sections.packagingLabeling.packagingMaterials.plasticBottles.title}</h4>
            <RawHTML html={content.sections.packagingLabeling.packagingMaterials.plasticBottles.p1} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-amber-900 !border-none !mt-0">{content.sections.packagingLabeling.packagingMaterials.multilayerCartons.title}</h4>
            <RawHTML html={content.sections.packagingLabeling.packagingMaterials.multilayerCartons.p1} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-amber-900 !border-none !mt-0">{content.sections.packagingLabeling.packagingMaterials.glassbottles.title}</h4>
            <RawHTML html={content.sections.packagingLabeling.packagingMaterials.glassbottles.p1} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-amber-900 !border-none !mt-0">{content.sections.packagingLabeling.packagingMaterials.flexiblePackaging.title}</h4>
            <RawHTML html={content.sections.packagingLabeling.packagingMaterials.flexiblePackaging.p1} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-amber-900 !border-none !mt-0">{content.sections.packagingLabeling.packagingMaterials.activeIntelligentPackaging.title}</h4>
            <BulletList items={content.sections.packagingLabeling.packagingMaterials.activeIntelligentPackaging.items} />
          </div>
        </div>
      </SubSection>

      <SubSection title={content.sections.packagingLabeling.labelingRequirements.title} accent="border-amber-200">
        <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-amber-900 !border-none !mt-0">{content.sections.packagingLabeling.labelingRequirements.fssai.title}</h4>
          <BulletList items={content.sections.packagingLabeling.labelingRequirements.fssai.mandatory} />
          <p className="text-sm font-medium text-amber-950 mt-2 bg-amber-50 p-3 rounded-lg border border-amber-100">{content.sections.packagingLabeling.labelingRequirements.fssai.fortificationLabel}</p>
        </div>
      </SubSection>
    </Section>
  ),

  wastageManagement: ({ content, accent }) => (
    <Section title={content.sections.wastageManagement.title} icon={Snowflake} accentColor={accent}>
      <RawHTML html={content.sections.wastageManagement.p1} />

      <SubSection title={content.sections.wastageManagement.lossPoints.title} accent="border-teal-200">
        <BulletList items={content.sections.wastageManagement.lossPoints.items} />
      </SubSection>

      <SubSection title={content.sections.wastageManagement.reductionStrategies.title} accent="border-teal-200">
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-teal-900 mt-0">Technical Strategies</h5>
            <BulletList items={content.sections.wastageManagement.reductionStrategies.technical} />
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-teal-900 !border-none !mt-0">{content.sections.wastageManagement.reductionStrategies.byproducts.title}</h4>
            <BulletList items={content.sections.wastageManagement.reductionStrategies.byproducts.items} />
          </div>
        </div>
      </SubSection>

      <SubSection title={content.sections.wastageManagement.environmentalImpact.title} accent="border-teal-200">
        <BulletList items={content.sections.wastageManagement.environmentalImpact.items} />
      </SubSection>
    </Section>
  ),

  conclusions: ({ content, accent }) => (
    <Section title={content.sections.conclusions.title} icon={CheckCircle} accentColor={accent}>
      <div className="bg-teal-50/80 p-5 sm:p-6 rounded-xl border border-teal-100 text-teal-950 font-medium space-y-4">
        <RawHTML html={content.sections.conclusions.p1} />
        <RawHTML html={content.sections.conclusions.p2} />
        <RawHTML html={content.sections.conclusions.p3} />
        <RawHTML html={content.sections.conclusions.p4} />
        <RawHTML html={content.sections.conclusions.p5} />
        <RawHTML html={content.sections.conclusions.p6} />
      </div>
      {content.sections.conclusions.keyTakeaways && (
        <SubSection title={content.sections.conclusions.keyTakeaways.title} accent="border-teal-200">
          <BulletList items={content.sections.conclusions.keyTakeaways.items} />
        </SubSection>
      )}
      {content.sections.conclusions.futureTrends && (
        <SubSection title={content.sections.conclusions.futureTrends.title} accent="border-teal-200">
          <BulletList items={content.sections.conclusions.futureTrends.items} />
        </SubSection>
      )}
    </Section>
  ),
};

// ─────────────────────────────────────────────
// Topic Group Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel: lang === "hi" ? "बुनियाद (Foundation)" : "Foundation",
      groupIcon: BookOpen,
      topics: [
        { value: "introduction", title: c.tabs.introduction, subtitle: lang === "hi" ? "बुनियादी बातें" : "Importance & Basics", icon: BookOpen, accent: "blue", badge: "Core", badgeVariant: "secondary" as const, colorClass: "text-blue-600", bgClass: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200 hover:border-blue-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "लॉजिस्टिक्स और हैंडलिंग (Logistics & Handling)" : "Logistics & Handling",
      groupIcon: Truck,
      topics: [
        { value: "reception", title: c.tabs.reception, subtitle: lang === "hi" ? "फार्म और प्लांट रिसेप्शन" : "Farm & Plant Reception", icon: Droplet, accent: "emerald", badge: "Handling", badgeVariant: "secondary" as const, colorClass: "text-emerald-600", bgClass: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200 hover:border-emerald-400" },
        { value: "transportation", title: c.tabs.transportation, subtitle: lang === "hi" ? "हाइजीनिक ट्रांजिट और तापमान" : "Hygienic Transit & Temps", icon: Truck, accent: "orange", badge: "Transit", badgeVariant: "secondary" as const, colorClass: "text-orange-600", bgClass: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200 hover:border-orange-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "संचालन और प्रसंस्करण (Operations & Processing)" : "Operations & Processing",
      groupIcon: Activity,
      topics: [
        { value: "storage", title: c.tabs.storage, subtitle: lang === "hi" ? "साइलो और कोल्ड स्टोरेज" : "Silos & Cold Storage", icon: Warehouse, accent: "cyan", badge: "Storage", badgeVariant: "secondary" as const, colorClass: "text-cyan-600", bgClass: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200 hover:border-cyan-400" },
        { value: "processingMethods", title: c.tabs.processingMethods, subtitle: lang === "hi" ? "दूध प्रसंस्करण तकनीक" : "Milk Processing Tech", icon: Activity, accent: "indigo", badge: "Processing", badgeVariant: "secondary" as const, colorClass: "text-indigo-600", bgClass: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200 hover:border-indigo-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "गुणवत्ता और सुरक्षा (Quality & Safety)" : "Quality & Safety",
      groupIcon: ShieldCheck,
      topics: [
        { value: "preservation", title: c.tabs.preservation, subtitle: lang === "hi" ? "रासायनिक और भौतिक विधियां" : "Chemical & Physical Methods", icon: Shield, accent: "purple", badge: "Safety", badgeVariant: "secondary" as const, colorClass: "text-purple-600", bgClass: "bg-purple-50 hover:bg-purple-100", borderClass: "border-purple-200 hover:border-purple-400" },
        { value: "qualityTesting", title: c.tabs.qualityTesting, subtitle: lang === "hi" ? "प्रयोगशाला परीक्षण विधियां" : "Advanced Lab Testing", icon: ShieldCheck, accent: "rose", badge: "Testing", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "पैकेजिंग और बर्बादी (Packaging & Wastage)" : "Packaging & Wastage",
      groupIcon: PackageCheck,
      topics: [
        { value: "packagingLabeling", title: c.tabs.packagingLabeling, subtitle: lang === "hi" ? "पैकेजिंग और लेबलिंग नियम" : "Packaging & Regulations", icon: PackageCheck, accent: "amber", badge: "Packaging", badgeVariant: "secondary" as const, colorClass: "text-amber-600", bgClass: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200 hover:border-amber-400" },
        { value: "wastageManagement", title: c.tabs.wastageManagement, subtitle: lang === "hi" ? "दूध की बर्बादी और सस्टेनेबिलिटी" : "Loss Reduction & Footprint", icon: Snowflake, accent: "teal", badge: "Waste Mgmt", badgeVariant: "secondary" as const, colorClass: "text-teal-600", bgClass: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200 hover:border-teal-400" },
      ],
    },
    {
      groupLabel: lang === "hi" ? "निष्कर्ष (Summary)" : "Summary",
      groupIcon: CheckCircle,
      topics: [
        { value: "conclusions", title: c.tabs.conclusions, subtitle: lang === "hi" ? "मुख्य बातें और भविष्य की राह" : "Key Takeaways & Future Trends", icon: CheckCircle, accent: "rose", badge: "Wrap Up", badgeVariant: "secondary" as const, colorClass: "text-rose-600", bgClass: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200 hover:border-rose-400", wide: true },
      ],
    },
  ];
};

// ─────────────────────────────────────────────
// Main Modal Component
// ─────────────────────────────────────────────
export function MilkHandlingPreservationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const content = t(milkHandlingPreservationContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  if (!content) return null;

  const TOPIC_GROUPS = getTopicGroups(content, lang);
  const ALL_TOPICS = TOPIC_GROUPS.flatMap((g) => g.topics);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const selectedTopicInfo = ALL_TOPICS.find((tp) => tp.value === activeTopic);
  const ActiveComponent = activeTopic ? topicComponents[activeTopic as keyof typeof topicComponents] : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        scrollPosition.current = viewport.scrollTop;
      }
    }
    setActiveTopic(value);
  };

  const handleBack = () => {
    setActiveTopic(null);
  };

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      const timeoutId = setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (viewport) {
            viewport.scrollTop = scrollPosition.current;
          }
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [activeTopic]);

  const totalTopics = ALL_TOPICS.length;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style dangerouslySetInnerHTML={{ __html: `
        .strict-html-wrap {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .strict-html-wrap * {
          overflow-wrap: break-word !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          white-space: normal !important;
          max-width: 100% !important;
        }
      `}} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
        [&>button]:!text-white
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🥛 {content.title}
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {selectedTopicInfo ? selectedTopicInfo.subtitle : content.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Container className="w-3 h-3 shrink-0" /> {TOPIC_GROUPS.length} {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Activity className="w-3 h-3 shrink-0" /> {lbl.langPill}
              </span>
            </div>
          )}

          {/* Back button */}
          {activeTopic && selectedTopicInfo && (
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
                <selectedTopicInfo.icon className="w-3 h-3 shrink-0" />
                <span className="font-medium truncate min-w-0">{selectedTopicInfo.title}</span>
                <Badge variant={selectedTopicInfo.badgeVariant} className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none">
                  {selectedTopicInfo.badge}
                </Badge>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedTopicInfo && ActiveComponent ? (

          /* ── Topic Detail View ─────────────────── */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50 strict-html-wrap">
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full pb-10">
              <ActiveComponent content={content} accent={selectedTopicInfo.accent} />
            </div>
          </div>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-7 max-w-6xl mx-auto pb-10">
                {TOPIC_GROUPS.map((group) => (
                  <div key={group.groupLabel}>

                    {/* Group header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <group.groupIcon className="w-4 h-4 text-indigo-500" />
                        <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600">
                          {group.groupLabel}
                        </h3>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent" />
                      <span className="text-[10px] text-indigo-600 font-medium tabular-nums bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                        {lbl.topicsCount(group.topics.length)}
                      </span>
                    </div>

                    {/* Cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {group.topics.map((topic) => (
                        <button
                          key={topic.value}
                          onClick={() => handleSelectTopic(topic.value)}
                          className={`
                            relative flex items-start p-3 sm:p-4 rounded-xl border-2 transition-all duration-200
                            text-left shadow-sm hover:shadow-md hover:-translate-y-1
                            ${topic.bgClass} ${topic.borderClass}
                            group w-full bg-white box-border
                            ${(topic as any).wide ? "sm:col-span-2 lg:col-span-3" : ""}
                          `}
                        >
                          {/* Icon */}
                          <div className={`p-2 sm:p-2.5 rounded-lg shadow-sm mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100`}>
                            <topic.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${topic.colorClass}`} />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0 overflow-hidden pt-0.5">
                            <div className="flex items-start gap-1.5 flex-wrap mb-1">
                              <span className="font-bold text-gray-800 text-[13px] sm:text-[15px] leading-tight break-words group-hover:text-black transition-colors">
                                {topic.title}
                              </span>
                              {topic.badge && (
                                <Badge
                                  variant={topic.badgeVariant}
                                  className="text-[9px] px-1.5 py-0 shrink-0 hidden xs:inline-flex font-medium"
                                >
                                  {topic.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-500 leading-snug line-clamp-2 break-words">
                              {topic.subtitle}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 ml-1 mt-1.5 transition-transform duration-200 group-hover:translate-x-1 ${topic.colorClass} opacity-50 hidden sm:block`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
