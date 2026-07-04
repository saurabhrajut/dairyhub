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
  FlaskConical,
  Cpu,
  Package,
  Trash2,
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
    wrapper.className =
      "table-scroll-wrap overflow-x-auto w-full my-4 rounded-xl border border-gray-200 shadow-sm";
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
  useEffect(() => {
    if (ref.current) wrapTablesInScrollDiv(ref.current);
  }, [children]);
  return (
    <div
      ref={ref}
      className="p-4 sm:p-6 md:p-8 text-sm sm:text-base text-gray-700 leading-relaxed
      [&_h4]:font-bold [&_h4]:text-indigo-900 [&_h4]:mt-6 [&_h4]:mb-3 [&_h4]:text-sm sm:[&_h4]:text-lg [&_h4]:border-b [&_h4]:border-indigo-100 [&_h4]:pb-1
      [&_h5]:font-semibold [&_h5]:text-gray-800 [&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-xs sm:[&_h5]:text-sm
      [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:break-words
      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4
      [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:mb-4
      [&_li]:leading-relaxed [&_li]:break-words [&_li]:text-gray-600
      [&_strong]:text-gray-900 [&_em]:italic
      [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[11px] sm:[&_code]:text-[13px] [&_code]:font-mono [&_code]:break-all
      w-full max-w-full overflow-hidden box-border
    "
    >
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
    blue: "from-blue-600 to-blue-500",
    orange: "from-orange-600 to-orange-500",
    cyan: "from-cyan-600 to-cyan-500",
    emerald: "from-emerald-600 to-emerald-500",
    red: "from-red-600 to-red-500",
    purple: "from-purple-600 to-purple-500",
    rose: "from-rose-600 to-rose-500",
    amber: "from-amber-600 to-amber-500",
    teal: "from-teal-600 to-teal-500",
    indigo: "from-indigo-600 to-indigo-500",
    violet: "from-violet-600 to-violet-500",
    fuchsia: "from-fuchsia-600 to-fuchsia-500",
    lime: "from-lime-600 to-lime-500",
    sky: "from-sky-600 to-sky-500",
  };
  const gradient = headerGradients[accentColor] ?? headerGradients.blue;

  return (
    <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm mb-4 sm:mb-5 w-full max-w-full overflow-hidden box-border">
      <div
        className={`bg-gradient-to-r ${gradient} p-3 sm:p-5 flex items-center gap-2 sm:gap-3 rounded-t-xl sm:rounded-t-2xl`}
      >
        {Icon && (
          <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl shrink-0">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        )}
        <h2 className="text-sm sm:text-xl font-bold text-white font-headline leading-tight break-words">
          {title}
        </h2>
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
    <div
      className={`pl-3 sm:pl-4 border-l-2 ${accent} w-full max-w-full overflow-hidden box-border`}
    >
      {children}
    </div>
  </div>
);

const RawHTML = ({ html }: { html: string }) => (
  <div
    className="w-full max-w-full overflow-hidden break-words strict-html-wrap"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

// ─────────────────────────────────────────────
// Reusable Info Card Grid
// ─────────────────────────────────────────────
const InfoCard = ({
  title,
  items,
  accentColor = "indigo",
}: {
  title?: string;
  items: string[];
  accentColor?: string;
}) => {
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-50 border-indigo-100 text-indigo-900",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-900",
    blue: "bg-blue-50 border-blue-100 text-blue-900",
    purple: "bg-purple-50 border-purple-100 text-purple-900",
    orange: "bg-orange-50 border-orange-100 text-orange-900",
    cyan: "bg-cyan-50 border-cyan-100 text-cyan-900",
    teal: "bg-teal-50 border-teal-100 text-teal-900",
    rose: "bg-rose-50 border-rose-100 text-rose-900",
    amber: "bg-amber-50 border-amber-100 text-amber-900",
    violet: "bg-violet-50 border-violet-100 text-violet-900",
    fuchsia: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-900",
    lime: "bg-lime-50 border-lime-100 text-lime-900",
    sky: "bg-sky-50 border-sky-100 text-sky-900",
  };
  const cls = colorMap[accentColor] ?? colorMap.indigo;

  return (
    <div className={`p-4 sm:p-5 rounded-xl border my-4 ${cls}`}>
      {title && (
        <h4 className="font-bold text-sm sm:text-base mb-3 !mt-0 !border-none !pb-0">
          {title}
        </h4>
      )}
      <ul className="list-disc pl-5 space-y-1.5 m-0 text-sm">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed break-words">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TwoColumnCards = ({
  cards,
}: {
  cards: {
    title: string;
    content: React.ReactNode;
  }[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
    {cards.map((card, i) => (
      <div
        key={i}
        className="border border-gray-200 p-4 rounded-xl shadow-sm bg-white"
      >
        <h4 className="!mt-0 font-bold text-indigo-700 border-b pb-2 mb-2 text-sm sm:text-base">
          {card.title}
        </h4>
        {card.content}
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────
// Topic Content Renderers
// ─────────────────────────────────────────────
const topicComponents: Record<
  string,
  React.FC<{ content: any; accent?: string }>
> = {
  // ── Introduction ──────────────────────────
  introduction: ({ content, accent }) => {
    const s = content.sections.introduction;
    return (
      <Section title={s.title} icon={BookOpen} accentColor={accent}>
        <RawHTML html={s.p1} />
        <div className="bg-blue-50/50 p-4 sm:p-5 rounded-xl border border-blue-100 my-4">
          <RawHTML html={s.p2} />
        </div>
        <RawHTML html={s.p3} />

        {/* Scientific Data */}
        {s.scientificData && (
          <SubSection title={s.scientificData.title} accent="border-blue-200">
            <TwoColumnCards
              cards={[
                {
                  title: s.scientificData.composition.title,
                  content: (
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {s.scientificData.composition.items.map(
                        (item: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  ),
                },
                {
                  title: s.scientificData.microbialGrowth.title,
                  content: (
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {s.scientificData.microbialGrowth.items.map(
                        (item: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  ),
                },
              ]}
            />
          </SubSection>
        )}
      </Section>
    );
  },

  // ── Reception ─────────────────────────────
  reception: ({ content, accent }) => {
    const s = content.sections.reception;
    return (
      <Section title={s.title} icon={Droplet} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Farm Practices */}
        <SubSection title={s.farm_practices.title} accent="border-emerald-200">
          <RawHTML html={s.farm_practices.p1} />
          <RawHTML html={s.farm_practices.p2} />
          <RawHTML html={s.farm_practices.p3} />
          {s.farm_practices.additionalTests && (
            <InfoCard
              title={s.farm_practices.additionalTests.title}
              items={s.farm_practices.additionalTests.items}
              accentColor="emerald"
            />
          )}
        </SubSection>

        {/* Plant Reception */}
        <SubSection
          title={s.plant_reception.title}
          accent="border-emerald-200"
        >
          <RawHTML html={s.plant_reception.p1} />
          <RawHTML html={s.plant_reception.p2} />
          <div className="bg-emerald-50/50 p-4 sm:p-5 rounded-xl border border-emerald-100 my-4">
            <ul className="list-disc list-inside space-y-2 m-0 p-0 text-sm">
              <li>
                <strong className="font-semibold text-emerald-900">
                  {s.plant_reception.measurement_methods.by_weight.title}:
                </strong>{" "}
                {s.plant_reception.measurement_methods.by_weight.text}
              </li>
              <li>
                <strong className="font-semibold text-emerald-900">
                  {s.plant_reception.measurement_methods.by_volume.title}:
                </strong>{" "}
                {s.plant_reception.measurement_methods.by_volume.text}
              </li>
            </ul>
          </div>
          <RawHTML html={s.plant_reception.p3} />

          {/* Reception Quality Tests */}
          {s.plant_reception.receptionQualityTests && (
            <SubSection
              title={s.plant_reception.receptionQualityTests.title}
              accent="border-teal-200"
            >
              {s.plant_reception.receptionQualityTests.organoleptic && (
                <InfoCard
                  title={
                    s.plant_reception.receptionQualityTests.organoleptic.title
                  }
                  items={
                    s.plant_reception.receptionQualityTests.organoleptic.items
                  }
                  accentColor="teal"
                />
              )}
              {s.plant_reception.receptionQualityTests.chemical && (
                <InfoCard
                  title={
                    s.plant_reception.receptionQualityTests.chemical.title
                  }
                  items={
                    s.plant_reception.receptionQualityTests.chemical.items
                  }
                  accentColor="sky"
                />
              )}
              {s.plant_reception.receptionQualityTests.adulteration && (
                <InfoCard
                  title={
                    s.plant_reception.receptionQualityTests.adulteration.title
                  }
                  items={
                    s.plant_reception.receptionQualityTests.adulteration.items
                  }
                  accentColor="rose"
                />
              )}
            </SubSection>
          )}
        </SubSection>

        {/* Hygiene & Cleaning */}
        <SubSection
          title={s.hygiene_cleaning.title}
          accent="border-emerald-200"
        >
          <RawHTML html={s.hygiene_cleaning.p1} />
          {s.hygiene_cleaning.cipProtocol && (
            <InfoCard
              title={s.hygiene_cleaning.cipProtocol.title}
              items={s.hygiene_cleaning.cipProtocol.steps}
              accentColor="cyan"
            />
          )}
          <RawHTML html={s.hygiene_cleaning.p2} />
          <RawHTML html={s.hygiene_cleaning.p3} />
        </SubSection>
      </Section>
    );
  },

  // ── Transportation ────────────────────────
  transportation: ({ content, accent }) => {
    const s = content.sections.transportation;
    return (
      <Section title={s.title} icon={Truck} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Tanker Design */}
        <SubSection title={s.tanker_design.title} accent="border-orange-200">
          <div className="bg-orange-50/50 p-4 sm:p-5 rounded-xl border border-orange-100 space-y-3">
            <RawHTML html={s.tanker_design.p1} />
            <RawHTML html={s.tanker_design.p2} />
            <RawHTML html={s.tanker_design.p3} />
          </div>
          {s.tanker_design.tankerSpecifications && (
            <InfoCard
              title={s.tanker_design.tankerSpecifications.title}
              items={s.tanker_design.tankerSpecifications.items}
              accentColor="orange"
            />
          )}
        </SubSection>

        {/* Hygienic Transport */}
        <SubSection
          title={s.hygienic_transport.title}
          accent="border-orange-200"
        >
          <RawHTML html={s.hygienic_transport.p1} />
          <RawHTML html={s.hygienic_transport.p2} />
          <RawHTML html={s.hygienic_transport.p3} />
          {s.hygienic_transport.biofilmPrevention && (
            <div className="bg-rose-50/50 p-4 sm:p-5 rounded-xl border border-rose-100 my-4">
              <h4 className="font-bold text-rose-900 text-sm sm:text-base mb-2 !mt-0 !border-none">
                {s.hygienic_transport.biofilmPrevention.title}
              </h4>
              <RawHTML html={s.hygienic_transport.biofilmPrevention.p1} />
              <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                {s.hygienic_transport.biofilmPrevention.preventionMethods.map(
                  (m: string, i: number) => (
                    <li key={i} className="text-gray-600">
                      {m}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </SubSection>

        {/* Temperature Control */}
        <SubSection title={s.temp_control.title} accent="border-orange-200">
          <RawHTML html={s.temp_control.p1} />
          <RawHTML html={s.temp_control.p2} />
          {s.temp_control.coldChainIntegrity && (
            <div className="bg-blue-50/60 p-4 sm:p-5 rounded-xl border border-blue-100 my-4">
              <h4 className="font-bold text-blue-900 text-sm sm:text-base mb-2 !mt-0 !border-none">
                {s.temp_control.coldChainIntegrity.title}
              </h4>
              <RawHTML html={s.temp_control.coldChainIntegrity.p1} />
              <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                {s.temp_control.coldChainIntegrity.items.map(
                  (item: string, i: number) => (
                    <li key={i} className="text-gray-600">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </SubSection>

        {/* Monitoring & Logistics */}
        <SubSection
          title={s.monitoring_logistics.title}
          accent="border-orange-200"
        >
          <RawHTML html={s.monitoring_logistics.p1} />
          <RawHTML html={s.monitoring_logistics.p2} />
          <RawHTML html={s.monitoring_logistics.p3} />
          <RawHTML html={s.monitoring_logistics.p4} />
          {s.monitoring_logistics.regulatoryCompliance && (
            <InfoCard
              title={s.monitoring_logistics.regulatoryCompliance.title}
              items={s.monitoring_logistics.regulatoryCompliance.items}
              accentColor="amber"
            />
          )}
        </SubSection>
      </Section>
    );
  },

  // ── Storage ───────────────────────────────
  storage: ({ content, accent }) => {
    const s = content.sections.storage;
    return (
      <Section title={s.title} icon={Warehouse} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Raw Milk Silos */}
        <SubSection title={s.raw_milk_silos.title} accent="border-cyan-200">
          <RawHTML html={s.raw_milk_silos.p1} />
          <RawHTML html={s.raw_milk_silos.p2} />
          <div className="bg-cyan-50/50 p-4 sm:p-5 rounded-xl border border-cyan-100 my-4">
            <ul className="list-disc list-inside space-y-1.5 m-0 p-0 text-sm">
              {(
                ["temp", "level", "low_level", "overflow"] as const
              ).map((key) => (
                <li key={key}>
                  <strong className="font-semibold text-cyan-900">
                    {s.raw_milk_silos.sensors[key].title}:
                  </strong>{" "}
                  {s.raw_milk_silos.sensors[key].text}
                </li>
              ))}
            </ul>
          </div>
          {s.raw_milk_silos.siloManagement && (
            <InfoCard
              title={s.raw_milk_silos.siloManagement.title}
              items={s.raw_milk_silos.siloManagement.items}
              accentColor="cyan"
            />
          )}
        </SubSection>

        {/* Refrigerated Storage */}
        <SubSection
          title={s.refrigerated_storage.title}
          accent="border-cyan-200"
        >
          <RawHTML html={s.refrigerated_storage.p1} />
          <RawHTML html={s.refrigerated_storage.p2} />
          <RawHTML html={s.refrigerated_storage.p3} />
          {s.refrigerated_storage.shelfLifeData && (
            <InfoCard
              title={s.refrigerated_storage.shelfLifeData.title}
              items={s.refrigerated_storage.shelfLifeData.items}
              accentColor="sky"
            />
          )}
          {s.refrigerated_storage.eslMilk && (
            <div className="bg-indigo-50/50 p-4 sm:p-5 rounded-xl border border-indigo-100 my-4">
              <h4 className="font-bold text-indigo-900 text-sm sm:text-base mb-2 !mt-0 !border-none">
                {s.refrigerated_storage.eslMilk.title}
              </h4>
              <RawHTML html={s.refrigerated_storage.eslMilk.p1} />
            </div>
          )}
        </SubSection>

        {/* UHT Storage */}
        <SubSection title={s.uht_storage.title} accent="border-cyan-200">
          <RawHTML html={s.uht_storage.p1} />
          <RawHTML html={s.uht_storage.p2} />
          <RawHTML html={s.uht_storage.p3} />
          {s.uht_storage.uhtChanges && (
            <TwoColumnCards
              cards={[
                {
                  title:
                    (s.uht_storage.uhtChanges.title ?? "") +
                    " — Nutritional",
                  content: (
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {s.uht_storage.uhtChanges.nutritional.map(
                        (item: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  ),
                },
                {
                  title:
                    (s.uht_storage.uhtChanges.title ?? "") + " — Sensory",
                  content: (
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {s.uht_storage.uhtChanges.sensory.map(
                        (item: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  ),
                },
              ]}
            />
          )}
        </SubSection>

        {/* Other Storage Methods */}
        {s.otherStorageMethods && (
          <SubSection
            title={s.otherStorageMethods.title}
            accent="border-cyan-200"
          >
            {(
              ["condensedMilk", "driedMilk", "fermentedProducts"] as const
            ).map((key) => {
              const item = s.otherStorageMethods[key];
              return (
                <div
                  key={key}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-3"
                >
                  <h4 className="font-bold text-slate-800 text-sm !mt-0 !border-none mb-1">
                    {item.title}
                  </h4>
                  <RawHTML html={item.p1} />
                </div>
              );
            })}
          </SubSection>
        )}
      </Section>
    );
  },

  // ── Preservation ──────────────────────────
  preservation: ({ content, accent }) => {
    const s = content.sections.preservation;
    return (
      <Section title={s.title} icon={Shield} accentColor={accent}>
        {/* Principles */}
        <SubSection title={s.principles.title} accent="border-purple-200">
          <RawHTML html={s.principles.p1} />
          {s.principles.hurdleConcept && (
            <InfoCard
              title={s.principles.hurdleConcept.title}
              items={s.principles.hurdleConcept.items}
              accentColor="purple"
            />
          )}
          <RawHTML html={s.principles.p2} />
        </SubSection>

        {/* Thermal Preservation */}
        {s.thermalPreservation && (
          <SubSection
            title={s.thermalPreservation.title}
            accent="border-purple-200"
          >
            <div className="bg-purple-50/50 p-4 sm:p-5 rounded-xl border border-purple-100 space-y-4">
              <div>
                <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                  {s.thermalPreservation.pasteurization.title}
                </h4>
                <RawHTML html={s.thermalPreservation.pasteurization.p1} />
                <InfoCard
                  title="Pasteurization Methods"
                  items={s.thermalPreservation.pasteurization.methods}
                  accentColor="violet"
                />
                <p className="text-sm mt-2 text-gray-600">
                  <strong>Effectiveness:</strong>{" "}
                  {s.thermalPreservation.pasteurization.effectiveness}
                </p>
              </div>
              {s.thermalPreservation.htst_equipment && (
                <div>
                  <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                    {s.thermalPreservation.htst_equipment.title}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    {s.thermalPreservation.htst_equipment.items.map(
                      (item: string, i: number) => (
                        <li key={i} className="text-gray-600">
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </SubSection>
        )}

        {/* Chemicals */}
        <SubSection title={s.chemicals.title} accent="border-purple-200">
          <div className="bg-purple-50/50 p-4 sm:p-5 rounded-xl border border-purple-100 space-y-4">
            {/* H2O2 */}
            <div>
              <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                {s.chemicals.h2o2.title}
              </h4>
              <RawHTML html={s.chemicals.h2o2.p1} />
              <RawHTML html={s.chemicals.h2o2.p2} />
            </div>
            <div className="h-px bg-purple-100" />

            {/* LP System */}
            <div>
              <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                {s.chemicals.lp_system.title}
              </h4>
              <RawHTML html={s.chemicals.lp_system.p1} />
              <RawHTML html={s.chemicals.lp_system.p2} />
            </div>
            <div className="h-px bg-purple-100" />

            {/* Nisin */}
            {s.chemicals.nisin && (
              <>
                <div>
                  <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                    {s.chemicals.nisin.title}
                  </h4>
                  <RawHTML html={s.chemicals.nisin.p1} />
                  {s.chemicals.nisin.regulatory && (
                    <p className="text-xs text-gray-500 mt-1 italic">
                      {s.chemicals.nisin.regulatory}
                    </p>
                  )}
                </div>
                <div className="h-px bg-purple-100" />
              </>
            )}

            {/* Natamycin */}
            {s.chemicals.natamycin && (
              <>
                <div>
                  <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                    {s.chemicals.natamycin.title}
                  </h4>
                  <RawHTML html={s.chemicals.natamycin.p1} />
                </div>
                <div className="h-px bg-purple-100" />
              </>
            )}

            {/* Other */}
            <div>
              <h4 className="!mt-0 !mb-1.5 font-bold text-purple-900 !border-none text-sm sm:text-base">
                {s.chemicals.other.title}
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                {s.chemicals.other.items.map((item: string, i: number) => (
                  <li key={i} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SubSection>

        {/* Non-Thermal */}
        {s.nonThermal && (
          <SubSection title={s.nonThermal.title} accent="border-purple-200">
            {(
              [
                "hpProcessing",
                "pulsedElectricField",
                "uvTreatment",
                "microfiltration",
              ] as const
            ).map((key) => {
              const item = s.nonThermal[key];
              if (!item) return null;
              return (
                <div
                  key={key}
                  className="bg-fuchsia-50/50 p-4 rounded-xl border border-fuchsia-100 mb-3"
                >
                  <h4 className="font-bold text-fuchsia-900 text-sm sm:text-base !mt-0 !border-none mb-2">
                    {item.title}
                  </h4>
                  <RawHTML html={item.p1} />
                  {item.advantages && (
                    <div className="mt-2">
                      <strong className="text-emerald-700 text-xs">
                        ✓ Advantages:
                      </strong>
                      <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                        {item.advantages.map((a: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.limitations && (
                    <div className="mt-2">
                      <strong className="text-rose-700 text-xs">
                        ✗ Limitations:
                      </strong>
                      <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                        {item.limitations.map((l: string, i: number) => (
                          <li key={i} className="text-gray-600">
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.applications && (
                    <p className="text-sm mt-2 text-gray-600">
                      <strong>Applications:</strong> {item.applications}
                    </p>
                  )}
                </div>
              );
            })}
          </SubSection>
        )}

        {/* Regulatory */}
        <SubSection title={s.regulatory.title} accent="border-purple-200">
          {s.regulatory.india && (
            <InfoCard
              title={s.regulatory.india.title}
              items={s.regulatory.india.items}
              accentColor="indigo"
            />
          )}
          {s.regulatory.international && (
            <InfoCard
              title={s.regulatory.international.title}
              items={s.regulatory.international.items}
              accentColor="sky"
            />
          )}
          {s.regulatory.adulteration && (
            <InfoCard
              title={s.regulatory.adulteration.title}
              items={s.regulatory.adulteration.items}
              accentColor="rose"
            />
          )}
        </SubSection>

        {/* Comparison */}
        <SubSection title={s.comparison.title} accent="border-purple-200">
          <RawHTML html={s.comparison.p1} />
          {s.comparison.methodsComparison && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              {Object.entries(s.comparison.methodsComparison).map(
                ([key, val]: [string, any]) => {
                  if (key === "title" || typeof val === "string") return null;
                  return (
                    <div
                      key={key}
                      className="border border-gray-200 p-4 rounded-xl shadow-sm bg-white"
                    >
                      <h4 className="!mt-0 font-bold text-indigo-700 border-b pb-2 mb-3 text-sm sm:text-base">
                        {val.title}
                      </h4>
                      {val.principle && (
                        <p className="text-xs text-gray-500 mb-1">
                          <strong>Principle:</strong> {val.principle}
                        </p>
                      )}
                      {val.logReduction && (
                        <p className="text-xs text-gray-500 mb-1">
                          <strong>Log Reduction:</strong> {val.logReduction}
                        </p>
                      )}
                      {val.shelfLife && (
                        <p className="text-xs text-gray-500 mb-2">
                          <strong>Shelf Life:</strong> {val.shelfLife}
                        </p>
                      )}
                      {val.advantages && (
                        <p className="text-sm mt-1">
                          <strong className="text-emerald-600">Adv:</strong>{" "}
                          {val.advantages}
                        </p>
                      )}
                      {val.disadvantages && (
                        <p className="text-sm mt-1.5">
                          <strong className="text-rose-600">Dis:</strong>{" "}
                          {val.disadvantages}
                        </p>
                      )}
                      {val.cost && (
                        <p className="text-xs text-gray-400 mt-2 italic">
                          Cost: {val.cost}
                        </p>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          )}
          <div className="mt-4">
            <RawHTML html={s.comparison.p2} />
          </div>
        </SubSection>
      </Section>
    );
  },

  // ── Quality Testing ───────────────────────
  qualityTesting: ({ content, accent }) => {
    const s = content.sections.qualityTesting;
    return (
      <Section title={s.title} icon={FlaskConical} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Microbiological Tests */}
        <SubSection
          title={s.microbiologicalTests.title}
          accent="border-violet-200"
        >
          {/* SPC */}
          <div className="bg-violet-50/50 p-4 rounded-xl border border-violet-100 mb-3">
            <h4 className="font-bold text-violet-900 text-sm sm:text-base !mt-0 !border-none mb-2">
              {s.microbiologicalTests.standardPlateCount.title}
            </h4>
            <RawHTML html={s.microbiologicalTests.standardPlateCount.p1} />
            <p className="text-sm text-gray-600 mt-1">
              <strong>Rapid Methods:</strong>{" "}
              {s.microbiologicalTests.standardPlateCount.rapidMethods}
            </p>
          </div>

          {/* Coliform */}
          <div className="bg-violet-50/50 p-4 rounded-xl border border-violet-100 mb-3">
            <h4 className="font-bold text-violet-900 text-sm sm:text-base !mt-0 !border-none mb-2">
              {s.microbiologicalTests.coliformTest.title}
            </h4>
            <RawHTML html={s.microbiologicalTests.coliformTest.p1} />
          </div>

          {/* Specific Pathogen */}
          {s.microbiologicalTests.specificPathogen && (
            <InfoCard
              title={s.microbiologicalTests.specificPathogen.title}
              items={s.microbiologicalTests.specificPathogen.items}
              accentColor="rose"
            />
          )}

          {/* Rapid Methods */}
          {s.microbiologicalTests.rapidMicrobial && (
            <InfoCard
              title={s.microbiologicalTests.rapidMicrobial.title}
              items={s.microbiologicalTests.rapidMicrobial.items}
              accentColor="indigo"
            />
          )}
        </SubSection>

        {/* Chemical Tests */}
        <SubSection title={s.chemicalTests.title} accent="border-violet-200">
          {/* Compositional */}
          {s.chemicalTests.compositional && (
            <InfoCard
              title={s.chemicalTests.compositional.title}
              items={s.chemicalTests.compositional.items}
              accentColor="sky"
            />
          )}

          {/* Freezing Point */}
          {s.chemicalTests.freezingPoint && (
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-3">
              <h4 className="font-bold text-blue-900 text-sm sm:text-base !mt-0 !border-none mb-2">
                {s.chemicalTests.freezingPoint.title}
              </h4>
              <RawHTML html={s.chemicalTests.freezingPoint.p1} />
            </div>
          )}

          {/* Antibiotic Residue */}
          {s.chemicalTests.antibioticResidue && (
            <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100 mb-3">
              <h4 className="font-bold text-amber-900 text-sm sm:text-base !mt-0 !border-none mb-2">
                {s.chemicalTests.antibioticResidue.title}
              </h4>
              <RawHTML html={s.chemicalTests.antibioticResidue.p1} />
              <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
                {s.chemicalTests.antibioticResidue.methods.map(
                  (m: string, i: number) => (
                    <li key={i} className="text-gray-600">
                      {m}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* SCC */}
          {s.chemicalTests.somaticCells && (
            <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-100 mb-3">
              <h4 className="font-bold text-rose-900 text-sm sm:text-base !mt-0 !border-none mb-2">
                {s.chemicalTests.somaticCells.title}
              </h4>
              <RawHTML html={s.chemicalTests.somaticCells.p1} />
              <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
                {s.chemicalTests.somaticCells.methods.map(
                  (m: string, i: number) => (
                    <li key={i} className="text-gray-600">
                      {m}
                    </li>
                  )
                )}
              </ul>
              {s.chemicalTests.somaticCells.economicImpact && (
                <p className="text-xs text-gray-500 mt-2 italic">
                  {s.chemicalTests.somaticCells.economicImpact}
                </p>
              )}
            </div>
          )}
        </SubSection>

        {/* Sensor Technology */}
        {s.sensorTechnology && (
          <SubSection
            title={s.sensorTechnology.title}
            accent="border-violet-200"
          >
            <RawHTML html={s.sensorTechnology.p1} />
            <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
              {s.sensorTechnology.technologies.map(
                (tech: string, i: number) => (
                  <li key={i} className="text-gray-600">
                    {tech}
                  </li>
                )
              )}
            </ul>
          </SubSection>
        )}
      </Section>
    );
  },

  // ── Processing Methods ────────────────────
  processingMethods: ({ content, accent }) => {
    const s = content.sections.processingMethods;
    return (
      <Section title={s.title} icon={Cpu} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Homogenization */}
        {s.homogenization && (
          <SubSection title={s.homogenization.title} accent="border-lime-200">
            <RawHTML html={s.homogenization.p1} />
            {s.homogenization.scientificDetails && (
              <div className="bg-lime-50/50 p-4 rounded-xl border border-lime-100 my-3">
                <RawHTML html={s.homogenization.scientificDetails} />
              </div>
            )}
            {s.homogenization.types && (
              <InfoCard
                title="Types of Homogenization"
                items={s.homogenization.types}
                accentColor="lime"
              />
            )}
          </SubSection>
        )}

        {/* Standardization */}
        {s.standardization && (
          <SubSection
            title={s.standardization.title}
            accent="border-lime-200"
          >
            <RawHTML html={s.standardization.p1} />
            {s.standardization.fortification && (
              <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 my-3">
                <h4 className="font-bold text-green-900 text-sm sm:text-base !mt-0 !border-none mb-2">
                  {s.standardization.fortification.title}
                </h4>
                <RawHTML html={s.standardization.fortification.p1} />
                {s.standardization.fortification.challenges && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Technical Challenges:</strong>{" "}
                    {s.standardization.fortification.challenges}
                  </p>
                )}
              </div>
            )}
          </SubSection>
        )}

        {/* Separation */}
        {s.separation && (
          <SubSection title={s.separation.title} accent="border-lime-200">
            <RawHTML html={s.separation.p1} />
          </SubSection>
        )}
      </Section>
    );
  },

  // ── Packaging & Labeling ──────────────────
  packagingLabeling: ({ content, accent }) => {
    const s = content.sections.packagingLabeling;
    return (
      <Section title={s.title} icon={Package} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Packaging Materials */}
        <SubSection
          title={s.packagingMaterials.title}
          accent="border-sky-200"
        >
          {(
            [
              "plasticBottles",
              "multilayerCartons",
              "glassbottles",
              "flexiblePackaging",
            ] as const
          ).map((key) => {
            const item = s.packagingMaterials[key];
            if (!item) return null;
            return (
              <div
                key={key}
                className="bg-sky-50/50 p-4 rounded-xl border border-sky-100 mb-3"
              >
                <h4 className="font-bold text-sky-900 text-sm sm:text-base !mt-0 !border-none mb-2">
                  {item.title}
                </h4>
                <RawHTML html={item.p1} />
              </div>
            );
          })}

          {/* Active & Intelligent Packaging */}
          {s.packagingMaterials.activeIntelligentPackaging && (
            <InfoCard
              title={s.packagingMaterials.activeIntelligentPackaging.title}
              items={s.packagingMaterials.activeIntelligentPackaging.items}
              accentColor="violet"
            />
          )}
        </SubSection>

        {/* Labeling Requirements */}
        {s.labelingRequirements && (
          <SubSection
            title={s.labelingRequirements.title}
            accent="border-sky-200"
          >
            {s.labelingRequirements.fssai && (
              <>
                <InfoCard
                  title={s.labelingRequirements.fssai.title}
                  items={s.labelingRequirements.fssai.mandatory}
                  accentColor="indigo"
                />
                {s.labelingRequirements.fssai.fortificationLabel && (
                  <div className="bg-green-50/60 p-3 rounded-xl border border-green-100 text-sm text-green-800 mt-2">
                    <strong>Fortification Note:</strong>{" "}
                    {s.labelingRequirements.fssai.fortificationLabel}
                  </div>
                )}
              </>
            )}
          </SubSection>
        )}
      </Section>
    );
  },

  // ── Wastage Management ────────────────────
  wastageManagement: ({ content, accent }) => {
    const s = content.sections.wastageManagement;
    return (
      <Section title={s.title} icon={Trash2} accentColor={accent}>
        <RawHTML html={s.p1} />

        {/* Loss Points */}
        {s.lossPoints && (
          <SubSection title={s.lossPoints.title} accent="border-rose-200">
            <InfoCard
              items={s.lossPoints.items}
              accentColor="rose"
            />
          </SubSection>
        )}

        {/* Reduction Strategies */}
        {s.reductionStrategies && (
          <SubSection
            title={s.reductionStrategies.title}
            accent="border-rose-200"
          >
            <InfoCard
              title="Technical Strategies"
              items={s.reductionStrategies.technical}
              accentColor="emerald"
            />
            {s.reductionStrategies.byproducts && (
              <InfoCard
                title={s.reductionStrategies.byproducts.title}
                items={s.reductionStrategies.byproducts.items}
                accentColor="amber"
              />
            )}
          </SubSection>
        )}

        {/* Environmental Impact */}
        {s.environmentalImpact && (
          <SubSection
            title={s.environmentalImpact.title}
            accent="border-rose-200"
          >
            <InfoCard
              items={s.environmentalImpact.items}
              accentColor="teal"
            />
          </SubSection>
        )}
      </Section>
    );
  },

  // ── Conclusions ───────────────────────────
  conclusions: ({ content, accent }) => {
    const s = content.sections.conclusions;
    return (
      <Section title={s.title} icon={CheckCircle} accentColor={accent}>
        <div className="bg-teal-50/80 p-5 sm:p-6 rounded-xl border border-teal-100 text-teal-950 font-medium space-y-2">
          <RawHTML html={s.p1} />
          <RawHTML html={s.p2} />
          <RawHTML html={s.p3} />
          <RawHTML html={s.p4} />
          <RawHTML html={s.p5} />
          <RawHTML html={s.p6} />
        </div>

        {/* Key Takeaways */}
        {s.keyTakeaways && (
          <SubSection title={s.keyTakeaways.title} accent="border-teal-200">
            <InfoCard items={s.keyTakeaways.items} accentColor="teal" />
          </SubSection>
        )}

        {/* Future Trends */}
        {s.futureTrends && (
          <SubSection title={s.futureTrends.title} accent="border-teal-200">
            <InfoCard items={s.futureTrends.items} accentColor="indigo" />
          </SubSection>
        )}
      </Section>
    );
  },
};

// ─────────────────────────────────────────────
// Topic Group Configuration
// ─────────────────────────────────────────────
const getTopicGroups = (c: any, lang: "hi" | "en") => {
  return [
    {
      groupLabel:
        lang === "hi" ? "बुनियाद (Foundation)" : "Foundation",
      groupIcon: BookOpen,
      topics: [
        {
          value: "introduction",
          title: c.tabs.introduction,
          subtitle: "Importance, Composition & Microbiology",
          icon: BookOpen,
          accent: "blue",
          badge: "Core",
          badgeVariant: "secondary" as const,
          colorClass: "text-blue-600",
          bgClass: "bg-blue-50 hover:bg-blue-100",
          borderClass: "border-blue-200 hover:border-blue-400",
        },
      ],
    },
    {
      groupLabel:
        lang === "hi"
          ? "लॉजिस्टिक्स और हैंडलिंग (Logistics & Handling)"
          : "Logistics & Handling",
      groupIcon: Truck,
      topics: [
        {
          value: "reception",
          title: c.tabs.reception,
          subtitle: "Farm & Plant Reception, CIP, Platform Tests",
          icon: Droplet,
          accent: "emerald",
          badge: "Handling",
          badgeVariant: "secondary" as const,
          colorClass: "text-emerald-600",
          bgClass: "bg-emerald-50 hover:bg-emerald-100",
          borderClass: "border-emerald-200 hover:border-emerald-400",
        },
        {
          value: "transportation",
          title: c.tabs.transportation,
          subtitle: "Tanker Design, Cold Chain & Smart Logistics",
          icon: Truck,
          accent: "orange",
          badge: "Transit",
          badgeVariant: "secondary" as const,
          colorClass: "text-orange-600",
          bgClass: "bg-orange-50 hover:bg-orange-100",
          borderClass: "border-orange-200 hover:border-orange-400",
        },
      ],
    },
    {
      groupLabel:
        lang === "hi"
          ? "संचालन और सुरक्षा (Operations & Safety)"
          : "Operations & Safety",
      groupIcon: ShieldCheck,
      topics: [
        {
          value: "storage",
          title: c.tabs.storage,
          subtitle: "Silos, Refrigeration, UHT & Specialty Storage",
          icon: Warehouse,
          accent: "cyan",
          badge: "Storage",
          badgeVariant: "secondary" as const,
          colorClass: "text-cyan-600",
          bgClass: "bg-cyan-50 hover:bg-cyan-100",
          borderClass: "border-cyan-200 hover:border-cyan-400",
        },
        {
          value: "preservation",
          title: c.tabs.preservation,
          subtitle: "Thermal, Chemical & Non-Thermal Methods",
          icon: Shield,
          accent: "purple",
          badge: "Safety",
          badgeVariant: "secondary" as const,
          colorClass: "text-purple-600",
          bgClass: "bg-purple-50 hover:bg-purple-100",
          borderClass: "border-purple-200 hover:border-purple-400",
        },
      ],
    },
    {
      groupLabel:
        lang === "hi"
          ? "गुणवत्ता और प्रसंस्करण (Quality & Processing)"
          : "Quality & Processing",
      groupIcon: FlaskConical,
      topics: [
        {
          value: "qualityTesting",
          title: c.tabs.qualityTesting,
          subtitle: "Microbiology, Chemical & Sensor Technologies",
          icon: FlaskConical,
          accent: "violet",
          badge: "Testing",
          badgeVariant: "secondary" as const,
          colorClass: "text-violet-600",
          bgClass: "bg-violet-50 hover:bg-violet-100",
          borderClass: "border-violet-200 hover:border-violet-400",
        },
        {
          value: "processingMethods",
          title: c.tabs.processingMethods,
          subtitle: "Homogenization, Standardization & Separation",
          icon: Cpu,
          accent: "lime",
          badge: "Processing",
          badgeVariant: "secondary" as const,
          colorClass: "text-lime-600",
          bgClass: "bg-lime-50 hover:bg-lime-100",
          borderClass: "border-lime-200 hover:border-lime-400",
        },
      ],
    },
    {
      groupLabel:
        lang === "hi"
          ? "पैकेजिंग और स्थिरता (Packaging & Sustainability)"
          : "Packaging & Sustainability",
      groupIcon: Package,
      topics: [
        {
          value: "packagingLabeling",
          title: c.tabs.packagingLabeling,
          subtitle: "Materials, Active Packaging & FSSAI Labeling",
          icon: Package,
          accent: "sky",
          badge: "Packaging",
          badgeVariant: "secondary" as const,
          colorClass: "text-sky-600",
          bgClass: "bg-sky-50 hover:bg-sky-100",
          borderClass: "border-sky-200 hover:border-sky-400",
        },
        {
          value: "wastageManagement",
          title: c.tabs.wastageManagement,
          subtitle: "Loss Reduction, Byproducts & Environment",
          icon: Trash2,
          accent: "rose",
          badge: "Sustainability",
          badgeVariant: "secondary" as const,
          colorClass: "text-rose-600",
          bgClass: "bg-rose-50 hover:bg-rose-100",
          borderClass: "border-rose-200 hover:border-rose-400",
        },
      ],
    },
    {
      groupLabel:
        lang === "hi" ? "निष्कर्ष (Summary)" : "Summary",
      groupIcon: CheckCircle,
      topics: [
        {
          value: "conclusions",
          title: c.tabs.conclusions,
          subtitle: "Key Takeaways & Future Trends",
          icon: CheckCircle,
          accent: "teal",
          badge: "Wrap Up",
          badgeVariant: "secondary" as const,
          colorClass: "text-teal-600",
          bgClass: "bg-teal-50 hover:bg-teal-100",
          borderClass: "border-teal-200 hover:border-teal-400",
          wide: true,
        },
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
  const ActiveComponent = activeTopic
    ? topicComponents[activeTopic as keyof typeof topicComponents]
    : null;

  const handleSelectTopic = (value: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (viewport) scrollPosition.current = viewport.scrollTop;
    }
    setActiveTopic(value);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      const timeoutId = setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector(
            "[data-radix-scroll-area-viewport]"
          );
          if (viewport) viewport.scrollTop = scrollPosition.current;
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [activeTopic]);

  const totalTopics = ALL_TOPICS.length;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      <DialogContent
        className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border
        [&>button]:!text-white
      "
      >
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🥛 {content.title}
            </DialogTitle>
            <DialogDescription
              className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${
                activeTopic ? "hidden sm:block" : "block"
              }`}
            >
              {selectedTopicInfo
                ? selectedTopicInfo.subtitle
                : content.description}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {totalTopics}{" "}
                {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <Container className="w-3 h-3 shrink-0" /> {TOPIC_GROUPS.length}{" "}
                {lbl.modules}
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
                <span className="font-medium truncate min-w-0">
                  {selectedTopicInfo.title}
                </span>
                <Badge
                  variant={selectedTopicInfo.badgeVariant}
                  className="text-[9px] px-1 py-0 shrink-0 hidden sm:inline-flex bg-white/20 text-white border-none"
                >
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
              <ActiveComponent
                content={content}
                accent={selectedTopicInfo.accent}
              />
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
                            ${
                              (topic as any).wide
                                ? "sm:col-span-2 lg:col-span-3"
                                : ""
                            }
                          `}
                        >
                          {/* Icon */}
                          <div className="p-2 sm:p-2.5 rounded-lg shadow-sm mr-3 shrink-0 transition-transform duration-200 group-hover:scale-110 bg-white border border-gray-100">
                            <topic.icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${topic.colorClass}`}
                            />
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
