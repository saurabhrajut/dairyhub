"use client";

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
import {
  ArrowLeft, BookOpen, Droplet, Wind, ShieldCheck, Component, Factory,
  FlaskConical, Snowflake, Thermometer, Beaker, Archive, Atom, Loader2,
  AlertTriangle, TestTube2, ChevronRight, Info, Microscope, Milk, Tag,
  Zap, FileText
} from "lucide-react";
import { IceCreamIcon, PaneerIcon } from "../icons";
import { useLanguage } from "@/context/language-context";
import { fssaiStandardsContent } from "@/lib/content/fssai-standards-content";
import { useState, useRef, useEffect } from "react";

// =============================================================================
// HELPER / PRIMITIVE COMPONENTS
// =============================================================================

const ProductCard = ({ title, children, accentColor = "blue" }: {
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
    <div className="bg-gradient-to-r from-slate-50 to-gray-100 px-4 py-3 sm:px-5 sm:py-4 border-b border-gray-200">
      <h2 className="text-base sm:text-xl font-bold text-slate-800 font-headline leading-tight">{title}</h2>
    </div>
    <div className="p-4 sm:p-6 text-gray-700 space-y-1">{children}</div>
  </div>
);

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) => (
  <div className="flex items-center gap-2 mt-7 mb-3">
    {Icon && <Icon className="w-4 h-4 text-slate-500 shrink-0" />}
    <h3 className="text-base font-bold text-slate-700 font-headline border-b border-slate-200 pb-1 w-full">
      {children}
    </h3>
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-2 bg-amber-50 text-amber-900 text-sm p-3 rounded-lg mt-4 border border-amber-200">
    <Info className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" />
    <div><strong>Note: </strong><span dangerouslySetInnerHTML={{ __html: String(children) }} /></div>
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
  <ul className="list-none space-y-2 mt-2">
    {items?.map((item, i) => (
      <li key={i} className="flex gap-2 text-xs sm:text-sm text-gray-700 min-w-0">
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
    <div className={`text-xs sm:text-sm p-3 sm:p-4 rounded-lg border mt-3 leading-relaxed break-words ${styles[variant]}`}>
      {children}
    </div>
  );
};

const renderTable = (tableData: any) => {
  if (!tableData || !tableData.headers || !tableData.rows) return null;
  const colCount = tableData.headers.length;
  // For wide tables (3+ cols) on mobile we render a card-style stacked layout
  return (
    <>
      {/* Desktop table — hidden on very small screens if many columns */}
      <div className={`rounded-xl border border-gray-200 mt-3 mb-4 shadow-sm ${colCount >= 4 ? "hidden sm:block" : "overflow-x-auto"}`}>
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

      {/* Mobile card layout — only for wide tables (4+ columns) */}
      {colCount >= 4 && (
        <div className="sm:hidden space-y-3 mt-3 mb-4">
          {tableData.rows.map((row: any, rowIndex: number) => {
            const cells = Object.values(row) as string[];
            return (
              <div key={rowIndex} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {/* Row header = first cell */}
                <div className="bg-slate-700 text-white text-xs font-bold px-3 py-2"
                  dangerouslySetInnerHTML={{ __html: cells[0] }} />
                {/* Remaining cells paired with their column header */}
                <div className="divide-y divide-gray-100">
                  {cells.slice(1).map((cell, ci) => (
                    <div key={ci} className={`flex flex-col px-3 py-2 ${ci % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">
                        {tableData.headers[ci + 1]}
                      </span>
                      <span className="text-sm text-slate-700" dangerouslySetInnerHTML={{ __html: cell }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

// Handles both p1+p2 text blocks and list items flexibly
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
                className="bg-slate-50 rounded-lg p-3 border border-slate-100 text-xs sm:text-sm leading-relaxed break-words overflow-hidden"
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
        <div className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.labeling.p1 }} />
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
        <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: s.labeling.p1 }} />
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

  // --- NEW TOPIC COMPONENTS ---

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
// TOPIC REGISTRY — single source of truth for icons/colors/keys
// =============================================================================

const topics = [
  { value: "general",                icon: BookOpen,     colorClass: "text-blue-600",    bgClass: "bg-blue-50",     borderClass: "border-blue-200",   hoverClass: "hover:bg-blue-100",    badge: "Core" },
  { value: "milk",                   icon: Droplet,      colorClass: "text-sky-600",     bgClass: "bg-sky-50",      borderClass: "border-sky-200",    hoverClass: "hover:bg-sky-100",     badge: null },
  { value: "flavouredMilk",          icon: Droplet,      colorClass: "text-pink-600",    bgClass: "bg-pink-50",     borderClass: "border-pink-200",   hoverClass: "hover:bg-pink-100",    badge: null },
  { value: "evaporatedMilk",         icon: Thermometer,  colorClass: "text-amber-600",   bgClass: "bg-amber-50",    borderClass: "border-amber-200",  hoverClass: "hover:bg-amber-100",   badge: null },
  { value: "sweetenedCondensedMilk", icon: Thermometer,  colorClass: "text-yellow-700",  bgClass: "bg-yellow-50",   borderClass: "border-yellow-200", hoverClass: "hover:bg-yellow-100",  badge: null },
  { value: "khoa",                   icon: Component,    colorClass: "text-orange-600",  bgClass: "bg-orange-50",   borderClass: "border-orange-200", hoverClass: "hover:bg-orange-100",  badge: null },
  { value: "rabri",                  icon: Milk,         colorClass: "text-red-500",     bgClass: "bg-red-50",      borderClass: "border-red-200",    hoverClass: "hover:bg-red-100",     badge: "New" },
  { value: "cream",                  icon: Droplet,      colorClass: "text-rose-600",    bgClass: "bg-rose-50",     borderClass: "border-rose-200",   hoverClass: "hover:bg-rose-100",    badge: null },
  { value: "fatProducts",            icon: FlaskConical, colorClass: "text-red-600",     bgClass: "bg-red-50",      borderClass: "border-red-200",    hoverClass: "hover:bg-red-100",     badge: null },
  { value: "butter",                 icon: Factory,      colorClass: "text-amber-500",   bgClass: "bg-yellow-100",  borderClass: "border-yellow-300", hoverClass: "hover:bg-yellow-200",  badge: null },
  { value: "milkPowders",            icon: Wind,         colorClass: "text-slate-600",   bgClass: "bg-slate-100",   borderClass: "border-slate-300",  hoverClass: "hover:bg-slate-200",   badge: null },
  { value: "fermented",              icon: Beaker,       colorClass: "text-lime-600",    bgClass: "bg-lime-50",     borderClass: "border-lime-200",   hoverClass: "hover:bg-lime-100",    badge: null },
  { value: "iceCream",               icon: IceCreamIcon, colorClass: "text-fuchsia-600", bgClass: "bg-fuchsia-50",  borderClass: "border-fuchsia-200",hoverClass: "hover:bg-fuchsia-100", badge: null },
  { value: "frozenDessert",          icon: Snowflake,    colorClass: "text-cyan-600",    bgClass: "bg-cyan-50",     borderClass: "border-cyan-200",   hoverClass: "hover:bg-cyan-100",    badge: null },
  { value: "chhanaPaneer",           icon: PaneerIcon,   colorClass: "text-emerald-600", bgClass: "bg-emerald-50",  borderClass: "border-emerald-200",hoverClass: "hover:bg-emerald-100", badge: null },
  { value: "cheese",                 icon: Component,    colorClass: "text-orange-700",  bgClass: "bg-orange-100",  borderClass: "border-orange-300", hoverClass: "hover:bg-orange-200",  badge: null },
  { value: "dairyAnalogues",         icon: AlertTriangle,colorClass: "text-amber-700",   bgClass: "bg-amber-100",   borderClass: "border-amber-300",  hoverClass: "hover:bg-amber-200",   badge: "New" },
  { value: "casein",                 icon: FlaskConical, colorClass: "text-violet-600",  bgClass: "bg-violet-50",   borderClass: "border-violet-200", hoverClass: "hover:bg-violet-100",  badge: null },
  { value: "lactose",                icon: Atom,         colorClass: "text-indigo-600",  bgClass: "bg-indigo-50",   borderClass: "border-indigo-200", hoverClass: "hover:bg-indigo-100",  badge: null },
  { value: "wheyProtein",            icon: Archive,      colorClass: "text-teal-600",    bgClass: "bg-teal-50",     borderClass: "border-teal-200",   hoverClass: "hover:bg-teal-100",    badge: null },
  { value: "colostrum",              icon: ShieldCheck,  colorClass: "text-rose-700",    bgClass: "bg-rose-100",    borderClass: "border-rose-300",   hoverClass: "hover:bg-rose-200",    badge: null },
  { value: "dairyPermeatePowders",   icon: Wind,         colorClass: "text-stone-600",   bgClass: "bg-stone-100",   borderClass: "border-stone-300",  hoverClass: "hover:bg-stone-200",   badge: null },
  { value: "contaminants",           icon: AlertTriangle,colorClass: "text-red-700",     bgClass: "bg-red-100",     borderClass: "border-red-300",    hoverClass: "hover:bg-red-200",     badge: "New" },
  { value: "testingMethods",         icon: TestTube2,    colorClass: "text-blue-700",    bgClass: "bg-blue-100",    borderClass: "border-blue-300",   hoverClass: "hover:bg-blue-200",    badge: "New" },
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
  const { t } = useLanguage();
  const content = t(fssaiStandardsContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      setSearchQuery("");
    }
    setIsOpen(open);
  };

  const handleSelectTopic = (topicValue: string) => {
    if (scrollAreaRef.current) {
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    }
    setActiveTopic(topicValue);
  };

  const handleBack = () => {
    setActiveTopic(null);
  };

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollPosition.current;
        }
      }, 0);
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

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="
        w-full max-w-none h-[100dvh] rounded-none
        sm:max-w-4xl sm:lg:max-w-6xl sm:w-[95vw] sm:h-auto sm:max-h-[92vh] sm:rounded-2xl
        flex flex-col p-0 overflow-hidden
        sm:top-[50%] sm:translate-y-[-50%]
      ">
        {/* ---- Header ---- */}
        <DialogHeader className="px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4 border-b border-gray-200 bg-gradient-to-r from-slate-800 to-slate-700 shrink-0 sm:rounded-t-2xl">
          <DialogTitle className="text-lg sm:text-2xl md:text-3xl font-bold text-center text-white mb-1 font-headline tracking-tight leading-tight">
            {content.mainTitle}
          </DialogTitle>
          <DialogDescription className="text-center text-xs sm:text-sm text-slate-300 line-clamp-2">
            {selectedTopic
              ? <span className="flex items-center justify-center gap-2">
                  <selectedTopic.icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{getTopicTitle(selectedTopic.value)}</span>
                </span>
              : content.description
            }
          </DialogDescription>
        </DialogHeader>

        {/* ---- Topic Detail View ---- */}
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0 bg-gray-50">
            <div className="px-4 pt-3 pb-1 bg-white border-b border-gray-100 shrink-0">
              <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100 text-slate-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {content.backToTopics}
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-3 sm:p-6 max-w-5xl mx-auto">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* ---- Topic Grid View ---- */
          <div className="flex-1 flex flex-col min-h-0 bg-gray-50">
            {/* Search bar */}
            <div className="px-4 pt-3 pb-2 bg-white border-b border-gray-100 shrink-0">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search topics..."
                  className="w-full text-sm border border-gray-200 rounded-lg px-4 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-gray-50"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-xs text-gray-400 mt-1 text-right">{filteredTopics.length} topics</p>
            </div>

            <ScrollArea className="flex-1" viewportRef={scrollAreaRef}>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4">
                {filteredTopics.map(topic => {
                  const topicTitle = getTopicTitle(topic.value);
                  return (
                    <button
                      key={topic.value}
                      onClick={() => handleSelectTopic(topic.value)}
                      className={`
                        relative flex flex-col sm:flex-row items-start sm:items-center
                        p-3 sm:p-4 rounded-xl border transition-all duration-200
                        text-left shadow-sm hover:shadow-md active:scale-[0.98]
                        ${topic.bgClass} ${topic.borderClass} ${topic.hoverClass}
                        group min-w-0
                      `}
                    >
                      {/* Badge */}
                      {topic.badge && (
                        <span className="absolute top-1.5 right-1.5">
                          <Badge
                            variant="secondary"
                            className={`text-[9px] px-1 py-0 font-bold leading-4 ${
                              topic.badge === "New"
                                ? "bg-green-100 text-green-700 border border-green-200"
                                : "bg-blue-100 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {topic.badge}
                          </Badge>
                        </span>
                      )}

                      <topic.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-0 sm:mr-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${topic.colorClass}`}
                      />
                      <div className="min-w-0 flex-1 pr-2">
                        <span className="font-semibold text-xs sm:text-sm text-gray-800 group-hover:text-black leading-snug block break-words">
                          {topicTitle}
                        </span>
                      </div>
                      <ChevronRight className="hidden sm:block w-4 h-4 ml-auto shrink-0 text-gray-300 group-hover:text-gray-500 transition-colors" />
                    </button>
                  );
                })}

                {filteredTopics.length === 0 && (
                  <div className="col-span-2 lg:col-span-3 flex flex-col items-center justify-center py-16 text-gray-400">
                    <svg className="w-12 h-12 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium">No topics match "{searchQuery}"</p>
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
