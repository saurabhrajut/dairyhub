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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowLeft, BookOpen, Droplet, Wind, ShieldCheck, Component, Factory,
  FlaskConical, Snowflake, Thermometer, Beaker, Archive, Atom, Loader2,
  AlertTriangle, TestTube2, ChevronRight, Info, Microscope, Milk, Tag,
  Zap, FileText, Sparkles, LayoutGrid, Activity, PackageCheck, Search
} from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { fssaiStandardsContent } from "@/lib/content/fssai-standards-content";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "मानकों पर वापस (Back)",
    topics: "Standards",
    modules: "Categories",
    langPill: "FSSAI Hindi",
  },
  en: {
    backToTopics: "Back to Standards",
    topics: "Standards",
    modules: "Categories",
    langPill: "FSSAI English",
  },
};

// ─── STYLES ────────────────────────────────────────────────────────────────
const CONTENT_STYLES = `
  .strict-html-wrap {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
  .strict-html-wrap * {
    overflow-wrap: break-word !important;
    word-wrap: break-word !important;
    word-break: break-word !important;
    box-sizing: border-box !important;
  }
`;

// =============================================================================
// HELPER / PRIMITIVE COMPONENTS
// =============================================================================

const ProductCard = ({ title, children, accentColor = "blue" }: {
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden w-full">
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 px-3 sm:px-5 py-3 border-b border-gray-200">
      <h2 className="text-base sm:text-lg font-bold text-slate-800 font-headline leading-snug">{title}</h2>
    </div>
    <div className="p-3 sm:p-5 text-gray-700 leading-relaxed space-y-3 break-words overflow-hidden" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
      {children}
    </div>
  </div>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) => (
  <div className="flex items-center gap-2 mt-6 mb-3">
    {Icon && <Icon className="w-4 h-4 text-slate-500 shrink-0" />}
    <h3 className="text-[15px] sm:text-base font-bold text-slate-700 font-headline border-b border-slate-200 pb-1 w-full break-words">
      {children}
    </h3>
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-2 bg-amber-50 text-amber-900 text-sm p-3 rounded-xl mt-4 border border-amber-200 shadow-sm w-full overflow-hidden">
    <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
    <div className="min-w-0 flex-1 break-words"><strong>Note: </strong><span dangerouslySetInnerHTML={{ __html: String(children) }} /></div>
  </div>
);

const Prose = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`prose prose-sm max-w-none break-words text-gray-700 leading-relaxed ${className}`}>
    {children}
  </div>
);

const RichText = ({ html }: { html: string }) => (
  <p className="leading-relaxed text-xs sm:text-sm text-gray-700 break-words" dangerouslySetInnerHTML={{ __html: html }} />
);

const BulletList = ({ items, html = true }: { items: string[]; html?: boolean }) => (
  <ul className="list-none space-y-2 mt-2 w-full overflow-hidden">
    {items?.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 min-w-0">
        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
        {html
          ? <span className="break-words min-w-0 flex-1" dangerouslySetInnerHTML={{ __html: item }} />
          : <span className="break-words min-w-0 flex-1">{item}</span>
        }
      </li>
    ))}
  </ul>
);

const InfoBox = ({ children, variant = "blue" }: { children: React.ReactNode; variant?: "blue" | "green" | "orange" | "purple" }) => {
  const styles = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    green: "bg-green-50 border-green-200 text-green-900",
    orange: "bg-orange-50 border-orange-200 text-orange-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
  };
  return (
    <div className={cn("text-xs sm:text-sm p-3 sm:p-4 rounded-xl border mt-3 leading-relaxed break-words shadow-sm w-full", styles[variant])}>
      {children}
    </div>
  );
};

const renderTable = (tableData: any) => {
  if (!tableData || !tableData.headers || !tableData.rows) return null;

  return (
    <>
      <div className="hidden sm:block rounded-xl border border-gray-200 mt-3 mb-4 shadow-sm overflow-x-auto bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-700 hover:bg-slate-700">
              {tableData.headers.map((header: string, i: number) => (
                <TableHead key={i} className="font-bold text-white text-xs uppercase tracking-wide py-2.5 px-3 whitespace-nowrap">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.rows.map((row: any, rowIndex: number) => (
              <TableRow key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                {Object.values(row).map((cell: any, cellIndex: number) => (
                  <TableCell
                    key={cellIndex}
                    dangerouslySetInnerHTML={{ __html: cell }}
                    className={`text-xs py-2 px-3 align-top ${cellIndex === 0 ? "font-medium text-slate-700" : "text-slate-600"}`}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="sm:hidden space-y-3 mt-3 mb-4 w-full">
        {tableData.rows.map((row: any, rowIndex: number) => {
          const cells = Object.values(row) as string[];
          return (
            <div key={rowIndex} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm w-full">
              <div
                className="bg-slate-700 text-white text-[11px] font-bold px-3 py-2 leading-snug break-words"
                dangerouslySetInnerHTML={{ __html: cells[0] }}
              />
              <div className="divide-y divide-gray-100">
                {cells.slice(1).map((cell, ci) => (
                  <div key={ci} className={`flex flex-col px-3 py-2 ${ci % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">
                      {tableData.headers[ci + 1]}
                    </span>
                    <span
                      className="text-xs text-slate-700 leading-snug break-words"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const renderDescription = (desc: any) => {
  if (!desc) return null;
  return (
    <>
      {desc.p1 && <RichText html={desc.p1} />}
      {desc.p2 && <RichText html={desc.p2} />}
      {desc.list && <BulletList items={desc.list} />}
      {desc.additives && (
        <InfoBox variant="green">
          <span dangerouslySetInnerHTML={{ __html: desc.additives }} />
        </InfoBox>
      )}
    </>
  );
};


// =============================================================================
// TOPIC CONTENT COMPONENTS
// =============================================================================

const topicComponents: { [key: string]: React.FC<{ content: any }> } = {
  general: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.general;
    return (
      <ProductCard title={s.title}>
        <Prose>
          <RichText html={s.p1} />
          <SectionTitle icon={BookOpen}>{s.definitions.title}</SectionTitle>
          <div className="space-y-3">
            {s.definitions.list.map((item: string, i: number) => (
              <div key={i}
                className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs sm:text-sm leading-relaxed break-words overflow-hidden"
                dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </div>
          <SectionTitle icon={ShieldCheck}>{content.principles.title}</SectionTitle>
          <RichText html={content.principles.p1} />
          {content.principles.p2 && <RichText html={content.principles.p2} />}

          <SectionTitle icon={Microscope}>{content.microbiological.title}</SectionTitle>
          <p className="text-sm text-gray-600">{content.microbiological.p1}</p>
          <BulletList items={content.microbiological.list} />

          {content.contaminants && (
            <>
              <SectionTitle icon={AlertTriangle}>{content.contaminants.title}</SectionTitle>
              <p className="text-sm text-gray-600">{content.contaminants.p1}</p>
              <BulletList items={content.contaminants.list} />
            </>
          )}
        </Prose>
      </ProductCard>
    );
  },

  milk: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.milk;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        <BulletList items={s.description.list} />
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.nutritional && (
          <>
            <SectionTitle icon={Zap}>{s.nutritional.title}</SectionTitle>
            {renderTable(s.nutritional)}
          </>
        )}
        <SectionTitle>{s.additives.title}</SectionTitle>
        <RichText html={s.additives.p1} />
        <SectionTitle>{s.hygiene.title}</SectionTitle>
        <RichText html={s.hygiene.p1} />
        {s.hygiene.additionalPoints && (
          <BulletList items={s.hygiene.additionalPoints} html={false} />
        )}
        <SectionTitle icon={Tag}>{s.labeling.title}</SectionTitle>
        <div className="text-sm text-gray-700 leading-relaxed break-words" dangerouslySetInnerHTML={{ __html: s.labeling.p1 }} />
      </ProductCard>
    );
  },

  flavouredMilk: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.flavouredMilk;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderDescription(s.composition)}
        {s.heat_treatment && (
          <>
            <SectionTitle icon={Thermometer}>{s.heat_treatment.title}</SectionTitle>
            <RichText html={s.heat_treatment.p1} />
          </>
        )}
      </ProductCard>
    );
  },

  evaporatedMilk: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.evaporatedMilk;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.processing && (
          <>
            <SectionTitle icon={Factory}>{s.processing.title}</SectionTitle>
            <InfoBox variant="blue"><span dangerouslySetInnerHTML={{ __html: s.processing.p1 }} /></InfoBox>
          </>
        )}
      </ProductCard>
    );
  },

  sweetenedCondensedMilk: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.sweetenedCondensedMilk;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.quality && (
          <>
            <SectionTitle icon={TestTube2}>{s.quality.title}</SectionTitle>
            <InfoBox variant="orange"><span dangerouslySetInnerHTML={{ __html: s.quality.p1 }} /></InfoBox>
          </>
        )}
      </ProductCard>
    );
  },

  khoa: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.khoa;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.adulteration && (
          <>
            <SectionTitle icon={AlertTriangle}>{s.adulteration.title}</SectionTitle>
            <InfoBox variant="orange"><span dangerouslySetInnerHTML={{ __html: s.adulteration.p1 }} /></InfoBox>
          </>
        )}
      </ProductCard>
    );
  },

  cream: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.cream;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        <BulletList items={s.description.list} />
        <SectionTitle>{s.composition.title}</SectionTitle>
        {s.composition.p1 && <RichText html={s.composition.p1} />}
        {renderTable(s.composition)}
        {s.processing && (
          <>
            <SectionTitle icon={Factory}>{s.processing.title}</SectionTitle>
            <InfoBox variant="blue"><span dangerouslySetInnerHTML={{ __html: s.processing.p1 }} /></InfoBox>
          </>
        )}
        <SectionTitle icon={Tag}>{s.labeling.title}</SectionTitle>
        <RichText html={s.labeling.p1} />
      </ProductCard>
    );
  },

  fatProducts: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.fatProducts;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.quality_tests && (
          <>
            <SectionTitle icon={TestTube2}>{s.quality_tests.title}</SectionTitle>
            <InfoBox variant="orange"><span dangerouslySetInnerHTML={{ __html: s.quality_tests.p1 }} /></InfoBox>
          </>
        )}
      </ProductCard>
    );
  },

  butter: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.butter;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.definition.title}</SectionTitle>
        <RichText html={s.definition.p1} />
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.types && (
          <>
            <SectionTitle>{s.types.title}</SectionTitle>
            <RichText html={s.types.p1} />
          </>
        )}
        {s.processing && (
          <>
            <SectionTitle icon={Factory}>{s.processing.title}</SectionTitle>
            <InfoBox variant="blue"><span dangerouslySetInnerHTML={{ __html: s.processing.p1 }} /></InfoBox>
          </>
        )}
        <Note>{s.note}</Note>
      </ProductCard>
    );
  },

  milkPowders: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.milkPowders;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        <Note>{s.note}</Note>
        {s.quality && (
          <>
            <SectionTitle icon={TestTube2}>{s.quality.title}</SectionTitle>
            <InfoBox variant="blue"><span dangerouslySetInnerHTML={{ __html: s.quality.p1 }} /></InfoBox>
          </>
        )}
      </ProductCard>
    );
  },

  fermented: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.fermented;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        <BulletList items={s.description.list} />
        <SectionTitle>{s.yoghurt.title}</SectionTitle>
        {renderTable(s.yoghurt)}
        <SectionTitle>{s.chakka.title}</SectionTitle>
        {renderTable(s.chakka)}
      </ProductCard>
    );
  },

  iceCream: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.iceCream;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        <SectionTitle>{s.milkIce.title}</SectionTitle>
        {renderTable(s.milkIce)}
        <Note>{s.note}</Note>
      </ProductCard>
    );
  },

  frozenDessert: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.frozenDessert;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {s.composition.p1 && <RichText html={s.composition.p1} />}
        {renderTable(s.composition)}
      </ProductCard>
    );
  },

  chhanaPaneer: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.chhanaPaneer;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.definition.title}</SectionTitle>
        <RichText html={s.definition.p1} />
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.manufacturing && (
          <>
            <SectionTitle icon={Factory}>{s.manufacturing.title}</SectionTitle>
            <InfoBox variant="blue"><span dangerouslySetInnerHTML={{ __html: s.manufacturing.p1 }} /></InfoBox>
            {s.manufacturing.p2 && (
              <InfoBox variant="green"><span dangerouslySetInnerHTML={{ __html: s.manufacturing.p2 }} /></InfoBox>
            )}
          </>
        )}
        <SectionTitle icon={Tag}>{s.labeling.title}</SectionTitle>
        <div className="text-sm text-gray-700 break-words" dangerouslySetInnerHTML={{ __html: s.labeling.p1 }} />
      </ProductCard>
    );
  },

  cheese: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.cheese;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        <BulletList items={s.description.list} />
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        {s.ripening && (
          <>
            <SectionTitle icon={Thermometer}>{s.ripening.title}</SectionTitle>
            <InfoBox variant="purple"><span dangerouslySetInnerHTML={{ __html: s.ripening.p1 }} /></InfoBox>
          </>
        )}
        <SectionTitle icon={Tag}>{s.labeling.title}</SectionTitle>
        <RichText html={s.labeling.p1} />
      </ProductCard>
    );
  },

  casein: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.casein;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        <BulletList items={s.description.list} />
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        <Note>{s.note}</Note>
      </ProductCard>
    );
  },

  lactose: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.lactose;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
      </ProductCard>
    );
  },

  wheyProtein: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.wheyProtein;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
        <Note>{s.note}</Note>
      </ProductCard>
    );
  },

  colostrum: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.colostrum;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        <BulletList items={s.description.list} />
        <SectionTitle>{s.compositionColostrum.title}</SectionTitle>
        {renderTable(s.compositionColostrum)}
        <SectionTitle>{s.compositionPowder.title}</SectionTitle>
        {renderTable(s.compositionPowder)}
        <Note>{s.note}</Note>
      </ProductCard>
    );
  },

  dairyPermeatePowders: function Content({ content }) {
    if (!content) return null;
    const s = content.topics.dairyPermeatePowders;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {s.composition.p1 && <RichText html={s.composition.p1} />}
        {renderTable(s.composition)}
      </ProductCard>
    );
  },

  rabri: function Content({ content }) {
    if (!content?.topics?.rabri) return null;
    const s = content.topics.rabri;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle>{s.composition.title}</SectionTitle>
        {renderTable(s.composition)}
      </ProductCard>
    );
  },

  dairyAnalogues: function Content({ content }) {
    if (!content?.topics?.dairyAnalogues) return null;
    const s = content.topics.dairyAnalogues;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={FileText}>{s.description.title}</SectionTitle>
        {renderDescription(s.description)}
        <SectionTitle icon={Tag}>{s.labelling.title}</SectionTitle>
        <BulletList items={s.labelling.list} html={false} />
        {s.examples && (
          <>
            <SectionTitle>{s.examples.title}</SectionTitle>
            <InfoBox variant="orange"><span dangerouslySetInnerHTML={{ __html: s.examples.p1 }} /></InfoBox>
          </>
        )}
      </ProductCard>
    );
  },

  testingMethods: function Content({ content }) {
    if (!content?.topics?.testingMethods) return null;
    const s = content.topics.testingMethods;
    return (
      <ProductCard title={s.title}>
        <SectionTitle icon={TestTube2}>{s.description.title}</SectionTitle>
        <RichText html={s.description.p1} />
        {s.physical && (
          <>
            <SectionTitle icon={Zap}>{s.physical.title}</SectionTitle>
            <BulletList items={s.physical.list} />
          </>
        )}
        {s.chemical && (
          <>
            <SectionTitle icon={FlaskConical}>{s.chemical.title}</SectionTitle>
            <BulletList items={s.chemical.list} />
          </>
        )}
        {s.microbiological_methods && (
          <>
            <SectionTitle icon={Microscope}>{s.microbiological_methods.title}</SectionTitle>
            <BulletList items={s.microbiological_methods.list} />
          </>
        )}
      </ProductCard>
    );
  },

  contaminants: function Content({ content }) {
    if (!content?.contaminants) return null;
    const s = content.contaminants;
    return (
      <ProductCard title={s.title}>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{s.p1}</p>
        <BulletList items={s.list} />
      </ProductCard>
    );
  },
};

// =============================================================================
// PREMIUM TOPIC REGISTRY — single source of truth for grid rendering
// =============================================================================

const topics = [
  { value: "general", icon: BookOpen, color: "from-blue-500 to-cyan-500", bgLight: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200", badge: "Core" },
  { value: "milk", icon: Droplet, color: "from-sky-400 to-blue-500", bgLight: "bg-sky-50 hover:bg-sky-100", borderClass: "border-sky-200", badge: null },
  { value: "flavouredMilk", icon: Droplet, color: "from-pink-400 to-rose-400", bgLight: "bg-pink-50 hover:bg-pink-100", borderClass: "border-pink-200", badge: null },
  { value: "evaporatedMilk", icon: Thermometer, color: "from-amber-400 to-orange-400", bgLight: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200", badge: null },
  { value: "sweetenedCondensedMilk", icon: Thermometer, color: "from-yellow-500 to-amber-600", bgLight: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200", badge: null },
  { value: "khoa", icon: Component, color: "from-orange-400 to-red-500", bgLight: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200", badge: null },
  { value: "rabri", icon: Milk, color: "from-red-400 to-rose-500", bgLight: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200", badge: "New" },
  { value: "cream", icon: Droplet, color: "from-rose-400 to-pink-500", bgLight: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200", badge: null },
  { value: "fatProducts", icon: FlaskConical, color: "from-red-500 to-orange-500", bgLight: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200", badge: null },
  { value: "butter", icon: Factory, color: "from-amber-400 to-yellow-500", bgLight: "bg-yellow-50 hover:bg-yellow-100", borderClass: "border-yellow-200", badge: null },
  { value: "milkPowders", icon: Wind, color: "from-slate-400 to-gray-500", bgLight: "bg-slate-50 hover:bg-slate-100", borderClass: "border-slate-200", badge: null },
  { value: "fermented", icon: Beaker, color: "from-lime-400 to-green-500", bgLight: "bg-lime-50 hover:bg-lime-100", borderClass: "border-lime-200", badge: null },
  { value: "iceCream", icon: IceCreamIcon, color: "from-fuchsia-400 to-purple-500", bgLight: "bg-fuchsia-50 hover:bg-fuchsia-100", borderClass: "border-fuchsia-200", badge: null },
  { value: "frozenDessert", icon: Snowflake, color: "from-cyan-400 to-teal-500", bgLight: "bg-cyan-50 hover:bg-cyan-100", borderClass: "border-cyan-200", badge: null },
  { value: "chhanaPaneer", icon: PaneerIcon, color: "from-emerald-400 to-green-500", bgLight: "bg-emerald-50 hover:bg-emerald-100", borderClass: "border-emerald-200", badge: null },
  { value: "cheese", icon: Component, color: "from-orange-500 to-amber-600", bgLight: "bg-orange-50 hover:bg-orange-100", borderClass: "border-orange-200", badge: null },
  { value: "dairyAnalogues", icon: AlertTriangle, color: "from-amber-600 to-red-600", bgLight: "bg-amber-50 hover:bg-amber-100", borderClass: "border-amber-200", badge: "New" },
  { value: "casein", icon: FlaskConical, color: "from-violet-400 to-purple-500", bgLight: "bg-violet-50 hover:bg-violet-100", borderClass: "border-violet-200", badge: null },
  { value: "lactose", icon: Atom, color: "from-indigo-400 to-blue-500", bgLight: "bg-indigo-50 hover:bg-indigo-100", borderClass: "border-indigo-200", badge: null },
  { value: "wheyProtein", icon: Archive, color: "from-teal-400 to-emerald-500", bgLight: "bg-teal-50 hover:bg-teal-100", borderClass: "border-teal-200", badge: null },
  { value: "colostrum", icon: ShieldCheck, color: "from-rose-500 to-red-600", bgLight: "bg-rose-50 hover:bg-rose-100", borderClass: "border-rose-200", badge: null },
  { value: "dairyPermeatePowders", icon: Wind, color: "from-stone-400 to-gray-500", bgLight: "bg-stone-50 hover:bg-stone-100", borderClass: "border-stone-200", badge: null },
  { value: "contaminants", icon: AlertTriangle, color: "from-red-600 to-rose-700", bgLight: "bg-red-50 hover:bg-red-100", borderClass: "border-red-200", badge: "New" },
  { value: "testingMethods", icon: TestTube2, color: "from-blue-600 to-indigo-600", bgLight: "bg-blue-50 hover:bg-blue-100", borderClass: "border-blue-200", badge: "New" },
];

// =============================================================================
// MAIN MODAL COMPONENT
// =============================================================================

export function FssaiStandardsModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const content = t(fssaiStandardsContent);
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      setSearchQuery("");
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) scrollPosition.current = viewport.scrollTop;
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
  };

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      const timeoutId = setTimeout(() => {
        if (scrollAreaRef.current) {
          const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
          if (viewport) viewport.scrollTop = scrollPosition.current;
        }
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [activeTopic]);

  const getTopicTitle = (topicValue: string): string => {
    if (!content) return topicValue;
    if (topicValue === "contaminants") return content.contaminants?.title || topicValue;
    const topicData = (content.topics as any)[topicValue];
    return topicData?.title || topicValue;
  };

  // Filter topics based on search
  const filteredTopics = searchQuery.trim()
    ? topics.filter(t => getTopicTitle(t.value).toLowerCase().includes(searchQuery.toLowerCase()))
    : topics;

  const selectedTopic = activeTopic ? topics.find(t => t.value === activeTopic) : null;
  const ActiveComponent = selectedTopic ? topicComponents[selectedTopic.value] : null;

  if (!content) {
    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent>
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const getDialogDescription = () => {
    if (selectedTopic) return "Detailed FSSAI parameter limits & standards.";
    return content.description || "Explore complete dairy standards and safety regulations.";
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border strict-html-wrap
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              ⚖️ {content.mainTitle || "FSSAI Standards"}
            </DialogTitle>
            <DialogDescription className={`text-center text-indigo-200/80 text-[10px] sm:text-sm line-clamp-1 px-2 mt-1 ${activeTopic ? "hidden sm:block" : "block"}`}>
              {getDialogDescription()}
            </DialogDescription>
          </DialogHeader>

          {/* Stats pills — hidden on mobile to save vertical space */}
          {!activeTopic && (
            <div className="hidden sm:flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-3">
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <LayoutGrid className="w-3 h-3 shrink-0" /> {topics.length} {lbl.topics}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                <PackageCheck className="w-3 h-3 shrink-0" /> {lbl.modules}
              </span>
              <span className="inline-flex items-center gap-1 bg-indigo-500/30 text-indigo-200 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40">
                <Activity className="w-3 h-3 shrink-0" /> {lbl.langPill}
              </span>
            </div>
          )}

          {/* Back button Breadcrumb */}
          {activeTopic && selectedTopic && (
            <div className="flex items-center gap-2 mt-1.5 sm:mt-2 min-w-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="text-white hover:bg-white/20 hover:text-white border border-white/30 rounded-lg shrink-0 text-xs px-2 h-6 sm:h-7"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                {content.backToTopics || lbl.backToTopics}
              </Button>
              <div className="flex items-center gap-1.5 text-white/70 text-[10px] sm:text-xs min-w-0 overflow-hidden">
                <selectedTopic.icon className="w-3 h-3 shrink-0" />
                <span className="font-medium truncate min-w-0">{getTopicTitle(selectedTopic.value)}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {activeTopic && selectedTopic && ActiveComponent ? (
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50">
            <ScrollArea className="h-full w-full max-w-full">
              <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full pb-10 mt-2 sm:mt-3">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50/50">
            {/* Elegant Search Bar */}
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white border-b border-gray-100 shrink-0 shadow-sm z-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-between">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search standards..."
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-full px-4 py-1.5 sm:py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-slate-50 transition-all placeholder:text-slate-400"
                />
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium whitespace-nowrap hidden sm:block">
                Showing {filteredTopics.length} entries
              </p>
            </div>

            <ScrollArea className="flex-1 h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 pb-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {filteredTopics.map((topic) => {
                    const topicTitle = getTopicTitle(topic.value);
                    return (
                      <button
                        key={topic.value}
                        onClick={() => handleSelectTopic(topic.value)}
                        className={cn(
                          "group relative flex flex-col items-center justify-center",
                          "p-3 sm:p-5 bg-white hover:shadow-lg rounded-xl sm:rounded-2xl",
                          "border border-gray-100 hover:border-transparent",
                          "text-center aspect-square",
                          "transition-all duration-300 transform hover:scale-[1.03]",
                          "active:scale-95",
                          "hover:ring-2 hover:ring-offset-1 hover:ring-indigo-200 box-border"
                        )}
                      >
                        <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", topic.bgLight)} />
                        
                        {/* Premium Badge Position */}
                        {topic.badge && (
                          <span className="absolute top-2 right-2 z-20">
                            <Badge variant="secondary" className={cn(
                              "text-[9px] px-1.5 py-0 font-bold leading-4 border", 
                              topic.badge === "New" ? "bg-green-100 text-green-700 border-green-200" : "bg-blue-100 text-blue-700 border-blue-200"
                            )}>
                              {topic.badge}
                            </Badge>
                          </span>
                        )}

                        <div className="relative z-10">
                          <div className={cn("p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br text-white mb-2 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md", topic.color)}>
                            <topic.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                        </div>
                        <span className="relative z-10 font-bold text-[10px] sm:text-[13px] font-headline text-slate-600 group-hover:text-slate-800 transition-colors leading-tight line-clamp-2 px-0.5 break-words w-full">
                          {topicTitle}
                        </span>
                        <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
                      </button>
                    );
                  })}
                </div>

                {/* Empty State */}
                {filteredTopics.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <Search className="w-10 h-10 mb-3 opacity-20" />
                    <p className="text-sm font-medium">No standards match "{searchQuery}"</p>
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
