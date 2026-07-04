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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { useLanguage } from "@/context/language-context";
import { qualityContent } from "@/lib/content/quality-content";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Book,
  Award,
  ShieldCheck,
  CheckSquare,
  Settings,
  Users,
  TestTube,
  BadgeCheck,
  FileSpreadsheet,
  Factory,
  SortAsc,
  FileText,
  Forward,
  ShieldAlert,
  Zap,
  Sigma,
  Layers,
  GitBranch,
  Thermometer,
  Star,
  Microscope,
  Package,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  Activity,
  PackageCheck,
} from "lucide-react";

// ─────────────────────────────────────────────
// Language-aware UI label helpers
// ─────────────────────────────────────────────
const LABELS = {
  hi: {
    backToTopics: "विषयों पर वापस (Back)",
    topics: "Topics",
    modules: "Categories",
    langPill: "Quality Hindi",
  },
  en: {
    backToTopics: "Back to Topics",
    topics: "Topics",
    modules: "Categories",
    langPill: "Quality English",
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

// ─── Design Tokens ───────────────────────────────────────────────────────────
// Extended palette with gradient colors and background lights matching the premium grid design
const PALETTE = {
  blue:    { text: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-200",    hover: "hover:bg-blue-100",    badge: "bg-blue-100 text-blue-700",    heading: "text-blue-700",    accent: "#2563eb", color: "from-blue-500 to-cyan-500", bgLight: "bg-blue-50 hover:bg-blue-100", borderColor: "border-blue-200 hover:border-blue-400" },
  indigo:  { text: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-200",  hover: "hover:bg-indigo-100",  badge: "bg-indigo-100 text-indigo-700",  heading: "text-indigo-700",  accent: "#4338ca", color: "from-indigo-500 to-blue-600", bgLight: "bg-indigo-50 hover:bg-indigo-100", borderColor: "border-indigo-200 hover:border-indigo-400" },
  cyan:    { text: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-200",    hover: "hover:bg-cyan-100",    badge: "bg-cyan-100 text-cyan-700",    heading: "text-cyan-700",    accent: "#0891b2", color: "from-cyan-400 to-teal-500", bgLight: "bg-cyan-50 hover:bg-cyan-100", borderColor: "border-cyan-200 hover:border-cyan-400" },
  teal:    { text: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-200",    hover: "hover:bg-teal-100",    badge: "bg-teal-100 text-teal-700",    heading: "text-teal-700",    accent: "#0d9488", color: "from-teal-400 to-emerald-500", bgLight: "bg-teal-50 hover:bg-teal-100", borderColor: "border-teal-200 hover:border-teal-400" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", hover: "hover:bg-emerald-100", badge: "bg-emerald-100 text-emerald-700", heading: "text-emerald-700", accent: "#059669", color: "from-emerald-400 to-green-500", bgLight: "bg-emerald-50 hover:bg-emerald-100", borderColor: "border-emerald-200 hover:border-emerald-400" },
  green:   { text: "text-green-600",   bg: "bg-green-50",   border: "border-green-200",   hover: "hover:bg-green-100",   badge: "bg-green-100 text-green-700",   heading: "text-green-700",   accent: "#16a34a", color: "from-green-400 to-emerald-600", bgLight: "bg-green-50 hover:bg-green-100", borderColor: "border-green-200 hover:border-green-400" },
  orange:  { text: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-200",  hover: "hover:bg-orange-100",  badge: "bg-orange-100 text-orange-700",  heading: "text-orange-700",  accent: "#ea580c", color: "from-orange-400 to-amber-500", bgLight: "bg-orange-50 hover:bg-orange-100", borderColor: "border-orange-200 hover:border-orange-400" },
  slate:   { text: "text-slate-600",   bg: "bg-slate-100",  border: "border-slate-300",   hover: "hover:bg-slate-200",   badge: "bg-slate-200 text-slate-700",   heading: "text-slate-700",   accent: "#475569", color: "from-slate-400 to-gray-500", bgLight: "bg-slate-50 hover:bg-slate-100", borderColor: "border-slate-200 hover:border-slate-400" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-200",   hover: "hover:bg-amber-100",   badge: "bg-amber-100 text-amber-700",   heading: "text-amber-700",   accent: "#d97706", color: "from-amber-400 to-orange-400", bgLight: "bg-amber-50 hover:bg-amber-100", borderColor: "border-amber-200 hover:border-amber-400" },
  violet:  { text: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-200",  hover: "hover:bg-violet-100",  badge: "bg-violet-100 text-violet-700",  heading: "text-violet-700",  accent: "#7c3aed", color: "from-violet-400 to-purple-500", bgLight: "bg-violet-50 hover:bg-violet-100", borderColor: "border-violet-200 hover:border-violet-400" },
  pink:    { text: "text-pink-600",    bg: "bg-pink-50",    border: "border-pink-200",    hover: "hover:bg-pink-100",    badge: "bg-pink-100 text-pink-700",    heading: "text-pink-700",    accent: "#db2777", color: "from-pink-400 to-rose-400", bgLight: "bg-pink-50 hover:bg-pink-100", borderColor: "border-pink-200 hover:border-pink-400" },
  red:     { text: "text-red-600",     bg: "bg-red-50",     border: "border-red-200",     hover: "hover:bg-red-100",     badge: "bg-red-100 text-red-700",     heading: "text-red-700",     accent: "#dc2626", color: "from-red-400 to-rose-500", bgLight: "bg-red-50 hover:bg-red-100", borderColor: "border-red-200 hover:border-red-400" },
  rose:    { text: "text-rose-600",    bg: "bg-rose-50",    border: "border-rose-200",    hover: "hover:bg-rose-100",    badge: "bg-rose-100 text-rose-700",    heading: "text-rose-700",    accent: "#e11d48", color: "from-rose-400 to-red-500", bgLight: "bg-rose-50 hover:bg-rose-100", borderColor: "border-rose-200 hover:border-rose-400" },
  purple:  { text: "text-purple-600",  bg: "bg-purple-50",  border: "border-purple-200",  hover: "hover:bg-purple-100",  badge: "bg-purple-100 text-purple-700",  heading: "text-purple-700",  accent: "#9333ea", color: "from-purple-400 to-fuchsia-500", bgLight: "bg-purple-50 hover:bg-purple-100", borderColor: "border-purple-200 hover:border-purple-400" },
  stone:   { text: "text-stone-600",   bg: "bg-stone-100",  border: "border-stone-300",   hover: "hover:bg-stone-200",   badge: "bg-stone-200 text-stone-700",   heading: "text-stone-700",   accent: "#78716c", color: "from-stone-400 to-stone-500", bgLight: "bg-stone-50 hover:bg-stone-100", borderColor: "border-stone-200 hover:border-stone-400" },
  sky:     { text: "text-sky-600",     bg: "bg-sky-50",     border: "border-sky-200",     hover: "hover:bg-sky-100",     badge: "bg-sky-100 text-sky-700",     heading: "text-sky-700",     accent: "#0284c7", color: "from-sky-400 to-blue-500", bgLight: "bg-sky-50 hover:bg-sky-100", borderColor: "border-sky-200 hover:border-sky-400" },
};

type PaletteKey = keyof typeof PALETTE;

// ─── Reusable Layout Primitives ───────────────────────────────────────────────

const SectionCard = ({
  title,
  children,
  palette = "blue",
}: {
  title: string;
  children: React.ReactNode;
  palette?: PaletteKey;
}) => {
  const p = PALETTE[palette];
  return (
    <div className={cn("rounded-2xl border shadow-sm mb-6 overflow-hidden w-full bg-white", p.border)}>
      <div className={cn("px-3 sm:px-5 py-3 border-b bg-gradient-to-br", p.border, p.bg)}>
        <h2 className={cn("text-base sm:text-lg font-bold font-headline leading-snug", p.heading)}>{title}</h2>
      </div>
      <div className="p-3 sm:p-5 text-gray-700 leading-relaxed space-y-3 break-words overflow-hidden" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
        {children}
      </div>
    </div>
  );
};

const SubHeading = ({
  children,
  palette = "blue",
}: {
  children: React.ReactNode;
  palette?: PaletteKey;
}) => {
  const p = PALETTE[palette];
  return (
    <h3 className={cn("text-sm sm:text-base font-bold mt-4 mb-2 flex items-center gap-2 break-words", p.heading)}>
      <ChevronRight className="w-4 h-4 shrink-0" />
      {children}
    </h3>
  );
};

const InfoCard = ({
  title,
  children,
  palette = "blue",
}: {
  title?: string;
  children: React.ReactNode;
  palette?: PaletteKey;
}) => {
  const p = PALETTE[palette];
  return (
    <div className={cn("border rounded-xl p-3 sm:p-4 text-sm w-full overflow-hidden", p.bg, p.border)}>
      {title && <p className={cn("font-bold mb-1.5 text-sm leading-snug", p.heading)}>{title}</p>}
      {children}
    </div>
  );
};

const BulletList = ({
  items,
  palette = "blue",
}: {
  items: string[];
  palette?: PaletteKey;
}) => {
  const p = PALETTE[palette];
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
          <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 border", p.bg, p.border)} style={{ backgroundColor: p.accent }} />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
};

const NumberedList = ({
  items,
  palette = "blue",
}: {
  items: string[];
  palette?: PaletteKey;
}) => {
  const p = PALETTE[palette];
  return (
    <ol className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-start gap-2 text-sm p-2 sm:p-3 rounded-lg border", p.bg, p.border)}>
          <span className={cn("font-bold text-xs mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0", p.badge)}>
            {i + 1}
          </span>
          <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ol>
  );
};

const ScrollableTable = ({ children, minWidth = "480px" }: { children: React.ReactNode; minWidth?: string }) => (
  <div className="w-full overflow-x-auto rounded-xl border border-gray-200 mt-3 shadow-sm bg-white">
    <Table style={{ minWidth }}>{children}</Table>
  </div>
);

// ─── Topic Content Components ─────────────────────────────────────────────────

const topicComponents = {
  intro: function Content({ content }: { content: any }) {
    return (
      <SectionCard title={content.title} palette="blue">
        <p className="text-sm sm:text-base">{content.intro1}</p>
        <p>{content.intro2}</p>
        <p>{content.intro3}</p>
        <InfoCard title="Key Benefits" palette="blue">
          <BulletList items={content.introBenefits} palette="blue" />
        </InfoCard>
      </SectionCard>
    );
  },

  what_is_quality: function Content({ content }: { content: any }) {
    const c = content.whatIsQuality;
    return (
      <SectionCard title={c.title} palette="indigo">
        <p>{c.p1}</p>
        <div className="flex justify-center my-4">
          <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 px-6 py-4 rounded-r-xl text-lg font-mono text-indigo-900 shadow-sm">
            Quality ∝ 1 / {c.variability}
          </blockquote>
        </div>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <p>{c.p4}</p>
        <SubHeading palette="indigo">{c.dimensions.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.dimensions.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="indigo">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  qc: function Content({ content }: { content: any }) {
    const c = content.qc;
    return (
      <SectionCard title={c.title} palette="cyan">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <SubHeading palette="cyan">{c.responsibilities.title}</SubHeading>
        <NumberedList items={c.responsibilities.list} palette="cyan" />
        <SubHeading palette="cyan">{c.tools.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.tools.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="cyan">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  qa: function Content({ content }: { content: any }) {
    const c = content.qa;
    return (
      <SectionCard title={c.title} palette="teal">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        {/* Mobile: stacked cards | sm+: scrollable table preserved */}
        <div className="mt-3 space-y-2 sm:hidden">
          {c.table.rows.map((row: any, i: number) => (
            <div key={i} className="rounded-xl border border-teal-200 overflow-hidden text-sm bg-white shadow-sm">
              <div className="bg-teal-50 px-3 py-1.5 font-semibold text-teal-800">{row.c1}</div>
              <div className="px-3 py-1.5 border-t border-teal-100">
                <span className="text-xs font-bold text-cyan-600 block mb-0.5">{c.table.header2}</span>
                <span className="text-gray-700">{row.qc}</span>
              </div>
              <div className="px-3 py-1.5 border-t border-teal-100 bg-teal-50/40">
                <span className="text-xs font-bold text-teal-600 block mb-0.5">{c.table.header3}</span>
                <span className="text-gray-700">{row.qa}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden sm:block">
          <ScrollableTable>
            <TableCaption className="text-xs">{c.table.caption}</TableCaption>
            <TableHeader className="bg-teal-50">
              <TableRow>
                <TableHead className="font-bold text-teal-700 whitespace-nowrap">{c.table.header1}</TableHead>
                <TableHead className="font-bold text-cyan-700 whitespace-nowrap">{c.table.header2}</TableHead>
                <TableHead className="font-bold text-teal-700 whitespace-nowrap">{c.table.header3}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {c.table.rows.map((row: any, i: number) => (
                <TableRow key={i} className="hover:bg-teal-50/50">
                  <TableCell className="font-semibold text-gray-700">{row.c1}</TableCell>
                  <TableCell className="text-cyan-800">{row.qc}</TableCell>
                  <TableCell className="text-teal-800">{row.qa}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ScrollableTable>
        </div>
        <SubHeading palette="teal">{c.qa_system_components.title}</SubHeading>
        <div className="space-y-2 mt-2">
          {c.qa_system_components.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="teal">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  prps: function Content({ content }: { content: any }) {
    const c = content.prps;
    return (
      <SectionCard title={c.title} palette="emerald">
        <p>{c.p1}</p>

        {/* GMP */}
        <div className="mt-4 rounded-xl border border-emerald-200 overflow-hidden shadow-sm">
          <div className="bg-emerald-50 px-3 sm:px-4 py-2 border-b border-emerald-200">
            <h3 className="font-bold text-emerald-700">{c.gmp.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3 bg-white">
            <p className="text-sm">{c.gmp.p1}</p>
            {c.gmp.list.map((item: any, i: number) => (
              <InfoCard key={i} title={item.title} palette="emerald">
                <p className="text-gray-600 text-sm break-words">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* GHP */}
        <div className="mt-4 rounded-xl border border-emerald-200 overflow-hidden shadow-sm">
          <div className="bg-emerald-50 px-3 sm:px-4 py-2 border-b border-emerald-200">
            <h3 className="font-bold text-emerald-700">{c.ghp.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3 bg-white">
            <p className="text-sm">{c.ghp.p1}</p>
            {c.ghp.list.map((item: any, i: number) => (
              <InfoCard key={i} title={item.title} palette="emerald">
                <p className="text-gray-600 text-sm break-words">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* GLP */}
        <div className="mt-4 rounded-xl border border-emerald-200 overflow-hidden shadow-sm">
          <div className="bg-emerald-50 px-3 sm:px-4 py-2 border-b border-emerald-200">
            <h3 className="font-bold text-emerald-700">{c.glp.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3 bg-white">
            <p className="text-sm">{c.glp.p1}</p>
            {c.glp.list.map((item: any, i: number) => (
              <InfoCard key={i} title={item.title} palette="emerald">
                <p className="text-gray-600 text-sm break-words">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </SectionCard>
    );
  },

  oprps: function Content({ content }: { content: any }) {
    const c = content.oprps;
    return (
      <SectionCard title={c.title} palette="green">
        <p>{c.p1}</p>
        <SubHeading palette="green">{c.p2}</SubHeading>
        {/* Mobile: stacked accordion cards | sm+: scrollable table */}
        <div className="mt-3 space-y-2 sm:hidden">
          {c.table.rows.map((row: any, i: number) => (
            <div key={i} className="rounded-xl border border-green-200 overflow-hidden text-sm bg-white shadow-sm">
              <div className="bg-green-100 px-3 py-1.5 font-semibold text-green-800">{row.c1}</div>
              {[
                { label: c.table.header2, val: row.c2 },
                { label: c.table.header3, val: row.c3 },
                { label: c.table.header4, val: row.c4 },
              ].map((col, ci) => (
                <div key={ci} className={`px-3 py-1.5 border-t border-green-100 ${ci % 2 === 1 ? "bg-green-50/40" : ""}`}>
                  <span className="text-xs font-bold text-green-600 block mb-0.5">{col.label}</span>
                  <span className="text-gray-700 break-words">{col.val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="hidden sm:block">
          <ScrollableTable minWidth="640px">
            <TableHeader className="bg-green-50">
              <TableRow>
                <TableHead className="font-bold text-green-700 whitespace-nowrap">{c.table.header1}</TableHead>
                <TableHead className="font-bold text-green-700 whitespace-nowrap">{c.table.header2}</TableHead>
                <TableHead className="font-bold text-green-700 whitespace-nowrap">{c.table.header3}</TableHead>
                <TableHead className="font-bold text-green-700 whitespace-nowrap">{c.table.header4}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {c.table.rows.map((row: any, i: number) => (
                <TableRow key={i} className="hover:bg-green-50/50">
                  <TableCell className="font-semibold text-gray-700">{row.c1}</TableCell>
                  <TableCell className="text-gray-600 text-sm break-words">{row.c2}</TableCell>
                  <TableCell className="text-gray-600 text-sm break-words">{row.c3}</TableCell>
                  <TableCell className="text-gray-600 text-sm break-words">{row.c4}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ScrollableTable>
        </div>
        <SubHeading palette="green">{c.dairy_examples.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.dairy_examples.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="green">
              <p
                className="text-gray-600 text-sm break-words overflow-wrap-anywhere"
                style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  philosophy: function Content({ content }: { content: any }) {
    const deming = content.deming;
    const juran = content.juran;
    return (
      <>
        <SectionCard title={deming.title} palette="violet">
          <p>{deming.p1}</p>
          <p>{deming.p2}</p>
          <InfoCard title={deming.cycle.title} palette="violet">
            <p className="text-gray-700 text-sm mb-3 break-words">{deming.cycle.p1}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[deming.cycle.plan, deming.cycle.do, deming.cycle.check, deming.cycle.act].map(
                (phase: any, i: number) => (
                  <div key={i} className="bg-violet-100 border border-violet-200 rounded-lg p-2 sm:p-3">
                    <p className="font-bold text-violet-800 text-sm mb-1">{phase.title}</p>
                    <p className="text-gray-700 text-xs leading-relaxed break-words">{phase.description}</p>
                  </div>
                )
              )}
            </div>
          </InfoCard>
        </SectionCard>

        <SectionCard title={juran.title} palette="purple">
          <p>{juran.p1}</p>
          <p className="italic text-sm text-gray-500 mt-1">{juran.p2}</p>
          <InfoCard title={juran.trilogy.title} palette="purple">
            <p className="text-gray-700 text-sm mb-3 break-words">{juran.trilogy.p1}</p>
            <div className="space-y-2">
              {juran.trilogy.list.map((item: any, i: number) => (
                <div key={i} className="bg-purple-100 border border-purple-200 rounded-lg p-2 sm:p-3">
                  <p className="font-bold text-purple-800 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-700 text-xs leading-relaxed break-words">{item.description}</p>
                </div>
              ))}
            </div>
          </InfoCard>
        </SectionCard>
      </>
    );
  },

  tqm: function Content({ content }: { content: any }) {
    const c = content.tqm;
    return (
      <SectionCard title={c.title} palette="pink">
        <p>{c.p1}</p>
        <SubHeading palette="pink">{c.principles.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.principles.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="pink">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  haccp: function Content({ content }: { content: any }) {
    const c = content.haccp;
    return (
      <SectionCard title={c.title} palette="red">
        <p>{c.p1}</p>
        <InfoCard title={c.prerequisites.title} palette="red">
          <p className="text-sm text-gray-700 break-words">{c.prerequisites.description}</p>
        </InfoCard>
        <SubHeading palette="red">{c.principles.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.principles.list.map((item: any, i: number) => (
            <div
              key={i}
              className="p-3 sm:p-4 bg-red-50 rounded-xl border border-red-100"
            >
              <p className="font-bold text-red-700 text-sm mb-1">
                {item.title}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed break-words">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>
    );
  },

  iso: function Content({ content }: { content: any }) {
    const c = content.iso;
    return (
      <SectionCard title={c.title} palette="purple">
        <p>{c.p1}</p>
        <p>{c.p2}</p>

        {/* ISO 9001 */}
        <div className="mt-4 rounded-xl border border-purple-200 overflow-hidden shadow-sm">
          <div className="bg-purple-50 px-3 sm:px-4 py-2 border-b border-purple-200">
            <h3 className="font-bold text-purple-700">{c.qms.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3 bg-white">
            <p className="text-sm">{c.qms.p1}</p>
            <InfoCard palette="purple" title={c.qms.structure}>
              <ul className="space-y-1">
                {c.qms.clauses.map((clause: string, i: number) => (
                  <li key={i} className="text-xs text-gray-700 flex gap-1.5">
                    <span className="text-purple-400">▸</span>
                    {clause}
                  </li>
                ))}
              </ul>
            </InfoCard>
            <p className="text-sm font-semibold text-purple-700">{c.qms.elementsTitle}</p>
            <div className="space-y-2">
              {c.qms.list.map((item: any, i: number) => (
                <InfoCard key={i} title={item.title} palette="purple">
                  <p className="text-gray-600 text-sm break-words">{item.description}</p>
                </InfoCard>
              ))}
            </div>
          </div>
        </div>

        {/* ISO 22000 */}
        <div className="mt-4 rounded-xl border border-purple-200 overflow-hidden shadow-sm">
          <div className="bg-purple-50 px-3 sm:px-4 py-2 border-b border-purple-200">
            <h3 className="font-bold text-purple-700">{c.fsms.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3 bg-white">
            <p className="text-sm">{c.fsms.p1}</p>
            <p className="text-sm italic text-gray-500">{c.fsms.p2}</p>
            <p className="text-sm font-semibold text-purple-700">{c.fsms.elementsTitle}</p>
            <div className="space-y-2">
              {c.fsms.list.map((item: any, i: number) => (
                <InfoCard key={i} title={item.title} palette="purple">
                  <p className="text-gray-600 text-sm break-words">{item.description}</p>
                </InfoCard>
              ))}
            </div>
          </div>
        </div>

        {/* ISO 17025 */}
        <div className="mt-4">
          <InfoCard title={c.iso_17025.title} palette="purple">
            <p className="text-gray-600 text-sm break-words">{c.iso_17025.description}</p>
          </InfoCard>
        </div>
      </SectionCard>
    );
  },

  bodies: function Content({ content }: { content: any }) {
    const c = content.regulatory_bodies;
    const bodies = [
      { key: "fssai", palette: "stone" as PaletteKey },
      { key: "bis", palette: "slate" as PaletteKey },
      { key: "agmark", palette: "amber" as PaletteKey },
      { key: "mmpo", palette: "orange" as PaletteKey },
      { key: "exportact", palette: "sky" as PaletteKey },
    ];

    return (
      <SectionCard title={c.title} palette="stone">
        <p>{c.p1}</p>
        <div className="space-y-4 mt-4">
          {bodies.map(({ key, palette }) => {
            const body = c[key];
            if (!body) return null;
            const p = PALETTE[palette];
            return (
              <div key={key} className={cn("rounded-xl border overflow-hidden w-full shadow-sm", p.border)}>
                <div className={cn("px-4 py-2 border-b", p.bg, p.border)}>
                  <h3 className={cn("font-bold", p.heading)}>{body.title}</h3>
                </div>
                <div className="p-3 sm:p-4 space-y-2 bg-white">
                  <p className="text-sm">{body.p1}</p>
                  {body.p2 && <p className="text-sm font-semibold">{body.p2}</p>}

                  {/* Responsibilities (FSSAI) */}
                  {body.responsibilities && (
                    <BulletList items={body.responsibilities} palette={palette} />
                  )}
                  {body.p3 && <p className="text-sm text-gray-600 italic break-words">{body.p3}</p>}

                  {/* Standards (BIS) */}
                  {body.standards && (
                    <ul className="space-y-1">
                      {body.standards.map((s: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex gap-2"
                          dangerouslySetInnerHTML={{ __html: s.startsWith("<") ? s : `<span>▸ ${s}</span>` }}
                        />
                      ))}
                    </ul>
                  )}

                  {/* Benefits (Agmark) */}
                  {body.benefits && (
                    <ul className="space-y-1">
                      {body.benefits.map((b: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: b }} />
                      ))}
                    </ul>
                  )}

                  {/* Provisions (MMPO) */}
                  {body.provisions && (
                    <ul className="space-y-1">
                      {body.provisions.map((prov: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: prov }} />
                      ))}
                    </ul>
                  )}

                  {/* Requirements (Export Act) */}
                  {body.requirements && (
                    <ul className="space-y-1">
                      {body.requirements.map((req: string, i: number) => (
                        <li key={i} className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: req }} />
                      ))}
                    </ul>
                  )}

                  {/* International alignment (Export Act nested) */}
                  {body.international && (
                    <InfoCard title={body.international.title} palette={palette}>
                      <p className="text-sm mb-2">{body.international.p1}</p>
                      <BulletList items={body.international.benefits} palette={palette} />
                    </InfoCard>
                  )}
                </div>
              </div>
            );
          })}
          {/* Footer note */}
          {c.p4 && (
            <p className="text-sm text-gray-600 italic p-3 bg-stone-50 rounded-lg border border-stone-200 break-words mt-4" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }} dangerouslySetInnerHTML={{ __html: c.p4 }} />
          )}
        </div>
      </SectionCard>
    );
  },

  fiveS: function Content({ content }: { content: any }) {
    const c = content.fiveS;
    const sPalettes: PaletteKey[] = ["orange", "amber", "emerald", "sky", "violet"];
    return (
      <SectionCard title={c.title} palette="orange">
        <p>{c.p1}</p>
        <div className="space-y-3 mt-4">
          {c.principles.list.map((item: any, i: number) => {
            const p = PALETTE[sPalettes[i] ?? "orange"];
            return (
              <div
                key={i}
                className={cn("flex items-start gap-3 p-3 sm:p-4 rounded-xl border", p.bg, p.border)}
              >
                <span
                  className={cn("font-black text-xl sm:text-2xl w-7 sm:w-8 shrink-0", p.text)}
                  style={{ fontFamily: "serif" }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className={cn("font-bold text-sm", p.heading)}>
                    {item.title}
                    <span className="ml-2 font-normal text-gray-400 text-xs">
                      {item.japanese}
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>
    );
  },

  sop: function Content({ content }: { content: any }) {
    const c = content.sop;
    return (
      <SectionCard title={c.title} palette="slate">
        <p>{c.p1}</p>
        <SubHeading palette="slate">{c.types.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {c.types.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="slate">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
        <SubHeading palette="slate">{c.importance.title}</SubHeading>
        <div className="space-y-2 mt-2">
          {c.importance.list.map((item: string, i: number) => (
            <div
              key={i}
              className="text-sm p-3 bg-slate-50 rounded-lg border border-slate-200 text-gray-700"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
        <SubHeading palette="slate">{c.structure.title}</SubHeading>
        <div className="space-y-2 mt-2">
          {c.structure.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="slate">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  fifo_fefo: function Content({ content }: { content: any }) {
    const c = content.fifo_fefo;
    return (
      <SectionCard title={c.title} palette="amber">
        <p>{c.p1}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <InfoCard title={c.fifo.title} palette="amber">
            <p className="text-gray-700 text-sm break-words">{c.fifo.description}</p>
          </InfoCard>
          <InfoCard title={c.fefo.title} palette="green">
            <p className="text-gray-700 text-sm break-words">{c.fefo.description}</p>
          </InfoCard>
        </div>
        <div className="mt-4">
          <InfoCard title={c.dairy_importance.title} palette="amber">
            <p className="text-gray-700 text-sm break-words">{c.dairy_importance.description}</p>
          </InfoCard>
        </div>
        <SubHeading palette="amber">{c.implementation.title}</SubHeading>
        <div className="space-y-2 mt-2">
          {c.implementation.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="amber">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  taccp_vaccp: function Content({ content }: { content: any }) {
    const c = content.taccp_vaccp;
    return (
      <SectionCard title={c.title} palette="rose">
        <p>{c.p1}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
            <h4 className="font-bold text-red-700 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <ShieldAlert className="w-4 h-4" />
              {c.taccp.title}
            </h4>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed break-words">{c.taccp.description}</p>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <h4 className="font-bold text-yellow-700 flex items-center gap-2 mb-2 text-sm sm:text-base">
              <Zap className="w-4 h-4" />
              {c.vaccp.title}
            </h4>
            <p className="text-xs sm:text-sm text-yellow-900 leading-relaxed break-words">{c.vaccp.description}</p>
          </div>
        </div>
        <p
          className="mt-4 text-sm italic text-gray-500 p-3 bg-rose-50 rounded-lg border border-rose-100"
          dangerouslySetInnerHTML={{ __html: c.p2 }}
        />
      </SectionCard>
    );
  },

  lean: function Content({ content }: { content: any }) {
    const c = content.lean;
    return (
      <SectionCard title={c.title} palette="teal">
        <p>{c.p1}</p>
        <SubHeading palette="teal">{c.eight_wastes.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.eight_wastes.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="teal">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  six_sigma: function Content({ content }: { content: any }) {
    const c = content.six_sigma;
    const stepPalettes: PaletteKey[] = ["indigo", "blue", "cyan", "teal", "emerald"];
    return (
      <SectionCard title={c.title} palette="indigo">
        <p>{c.p1}</p>
        <SubHeading palette="indigo">{c.dmaic.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.dmaic.list.map((item: any, i: number) => {
            const p = PALETTE[stepPalettes[i] ?? "indigo"];
            return (
              <div key={i} className={cn("flex gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border", p.bg, p.border)}>
                <span className={cn("font-black text-lg sm:text-xl w-7 shrink-0", p.text)}>{item.title[0]}</span>
                <div>
                  <p className={cn("font-bold text-sm mb-1", p.heading)}>{item.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed break-words">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionCard>
    );
  },

  risk_management: function Content({ content }: { content: any }) {
    const c = content.risk_management;
    return (
      <SectionCard title={c.title} palette="red">
        <p>{c.p1}</p>
        <InfoCard title={c.risk_assessment.title} palette="red">
          <p className="text-gray-700 text-sm break-words">{c.risk_assessment.description}</p>
        </InfoCard>
        <div className="mt-4">
          <InfoCard title={c.risk_matrix.title} palette="rose">
            <p className="text-gray-700 text-sm break-words">{c.risk_matrix.description}</p>
          </InfoCard>
        </div>
      </SectionCard>
    );
  },

  traceability: function Content({ content }: { content: any }) {
    const c = content.traceability;
    return (
      <SectionCard title={c.title} palette="sky">
        <p>{c.p1}</p>
        <SubHeading palette="sky">{c.components.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.components.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="sky">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  cold_chain: function Content({ content }: { content: any }) {
    const c = content.cold_chain;
    return (
      <SectionCard title={c.title} palette="cyan">
        <p>{c.p1}</p>
        <SubHeading palette="cyan">{c.temperature_zones.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.temperature_zones.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="cyan">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
        <div className="mt-4">
          <InfoCard title={c.monitoring.title} palette="blue">
            <p className="text-gray-700 text-sm break-words">{c.monitoring.description}</p>
          </InfoCard>
        </div>
      </SectionCard>
    );
  },

  sensory: function Content({ content }: { content: any }) {
    const c = content.sensory;
    return (
      <SectionCard title={c.title} palette="violet">
        <p>{c.p1}</p>
        <SubHeading palette="violet">{c.methods.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.methods.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="violet">
              <p className="text-gray-600 text-sm break-words" style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>{item.description}</p>
            </InfoCard>
          ))}
        </div>
        <SubHeading palette="violet">{c.off_flavors.title}</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {c.off_flavors.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="violet">
              <p className="text-gray-600 text-sm break-words" style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },

  microbiology: function Content({ content }: { content: any }) {
    const c = content.microbiology;
    return (
      <SectionCard title={c.title} palette="emerald">
        <p>{c.p1}</p>
        <SubHeading palette="emerald">{c.pathogens.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.pathogens.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="red">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
        <div className="mt-4">
          <InfoCard title={c.spoilage.title} palette="emerald">
            <p className="text-gray-700 text-sm break-words">{c.spoilage.description}</p>
          </InfoCard>
        </div>
      </SectionCard>
    );
  },

  packaging: function Content({ content }: { content: any }) {
    const c = content.packaging;
    return (
      <SectionCard title={c.title} palette="slate">
        <p>{c.p1}</p>
        <SubHeading palette="slate">{c.types.title}</SubHeading>
        <div className="space-y-3 mt-2">
          {c.types.list.map((item: any, i: number) => (
            <InfoCard key={i} title={item.title} palette="slate">
              <p className="text-gray-600 text-sm break-words">{item.description}</p>
            </InfoCard>
          ))}
        </div>
      </SectionCard>
    );
  },
};

// ─── Topic Registry ───────────────────────────────────────────────────────────

const TOPICS = [
  { value: "intro",          icon: Book,            palette: "blue"    as PaletteKey, tabKey: "intro"          },
  { value: "what_is_quality",icon: CheckSquare,     palette: "indigo"  as PaletteKey, titleKey: "whatIsQuality" },
  { value: "qc",             icon: TestTube,        palette: "cyan"    as PaletteKey, tabKey: "qc"             },
  { value: "qa",             icon: BadgeCheck,      palette: "teal"    as PaletteKey, tabKey: "qa"             },
  { value: "prps",           icon: Settings,        palette: "emerald" as PaletteKey, tabKey: "prps"          },
  { value: "oprps",          icon: ShieldCheck,     palette: "green"   as PaletteKey, tabKey: "oprps"          },
  { value: "fiveS",          icon: SortAsc,         palette: "orange"  as PaletteKey, tabKey: "fiveS"          },
  { value: "sop",            icon: FileText,        palette: "slate"   as PaletteKey, tabKey: "sop"            },
  { value: "fifo_fefo",      icon: Forward,         palette: "amber"   as PaletteKey, tabKey: "fifo_fefo"      },
  { value: "philosophy",     icon: Users,           palette: "violet"  as PaletteKey, tabKey: "philosophy"     },
  { value: "tqm",            icon: Award,           palette: "pink"    as PaletteKey, tabKey: "tqm"            },
  { value: "haccp",          icon: ShieldCheck,     palette: "red"     as PaletteKey, tabKey: "haccp"          },
  { value: "taccp_vaccp",    icon: ShieldAlert,     palette: "rose"    as PaletteKey, tabKey: "taccp_vaccp"    },
  { value: "iso",            icon: FileSpreadsheet, palette: "purple"  as PaletteKey, tabKey: "iso"            },
  { value: "lean",           icon: Layers,          palette: "teal"    as PaletteKey, tabKey: "lean"           },
  { value: "six_sigma",      icon: Sigma,           palette: "indigo"  as PaletteKey, tabKey: "six_sigma"      },
  { value: "risk_management",icon: GitBranch,       palette: "red"     as PaletteKey, tabKey: "risk_management"},
  { value: "traceability",   icon: GitBranch,       palette: "sky"     as PaletteKey, tabKey: "traceability"   },
  { value: "cold_chain",     icon: Thermometer,     palette: "cyan"    as PaletteKey, tabKey: "cold_chain"     },
  { value: "sensory",        icon: Star,            palette: "violet"  as PaletteKey, tabKey: "sensory"        },
  { value: "microbiology",   icon: Microscope,      palette: "emerald" as PaletteKey, tabKey: "microbiology"   },
  { value: "packaging",      icon: Package,         palette: "slate"   as PaletteKey, tabKey: "packaging"      },
  { value: "bodies",         icon: Factory,         palette: "stone"   as PaletteKey, tabKey: "bodies"         },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export function QualityConceptModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t, language } = useLanguage();
  const content = t(qualityContent);
  const lang = ((language ?? "hi") === "en" ? "en" : "hi") as "hi" | "en";
  const lbl = LABELS[lang];

  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
      scrollPosition.current = 0;
    }
    setIsOpen(open);
  };

  if (!content) return null;

  // Resolve display titles from content
  const topics = TOPICS.map((t) => ({
    ...t,
    title: t.titleKey
      ? (content as any)[t.titleKey]?.title ?? t.value
      : (content.tabs as any)[t.tabKey ?? t.value] ?? t.value,
  }));

  const selectedTopic = topics.find((t) => t.value === activeTopic);
  const ActiveComponent =
    activeTopic
      ? (topicComponents as any)[activeTopic]
      : null;

  const handleSelectTopic = (v: string) => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) scrollPosition.current = viewport.scrollTop;
    }
    setActiveTopic(v);
  };

  const handleBack = () => setActiveTopic(null);

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

  const getDialogDescription = () => {
    if (selectedTopic) return "Detailed quality control concepts & steps.";
    return content.description || "Explore detailed quality concepts for dairy products.";
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <style dangerouslySetInnerHTML={{ __html: CONTENT_STYLES }} />

      <DialogContent className="
        w-screen h-[100dvh] max-w-screen max-h-[100dvh] rounded-none
        sm:w-[95vw] sm:h-[95dvh] sm:max-w-4xl sm:max-h-[95dvh] sm:rounded-2xl
        lg:max-w-6xl
        flex flex-col p-0 gap-0 overflow-hidden shadow-2xl box-border strict-html-wrap
        [&>button]:!text-white
      ">
        {/* ── Top Header Bar ─────────────────────── */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 px-3 sm:px-6 py-2 sm:py-4 shrink-0 border-b border-white/10">
          <DialogHeader>
            <DialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-center text-white font-headline tracking-tight leading-tight">
              🏆 {content.title}
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

          {/* Back button */}
          {activeTopic && selectedTopic && (
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
                <selectedTopic.icon className="w-3 h-3 shrink-0" />
                <span className="font-medium truncate min-w-0">{selectedTopic.title}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Content Area ───────────────────────── */}
        {selectedTopic && ActiveComponent ? (

          /* ── Topic Detail View ─────────────────── */
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-auto bg-slate-50 strict-html-wrap">
            <div className="p-2 sm:p-4 md:p-6 max-w-5xl mx-auto w-full pb-10">
              <ActiveComponent content={content} />
            </div>
          </div>

        ) : (

          /* ── Topic Grid / Home View ─────────────── */
          <div className="flex-1 min-h-0 overflow-hidden bg-slate-50/50">
            <ScrollArea className="h-full w-full" viewportRef={scrollAreaRef}>
              <div className="p-3 sm:p-4 md:p-6 pb-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {topics.map((topic) => {
                    const p = PALETTE[topic.palette];
                    return (
                      <button
                        key={topic.value}
                        onClick={() => handleSelectTopic(topic.value)}
                        className={`
                          group relative flex flex-col items-center justify-center p-3 sm:p-5
                          bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-transparent
                          text-center aspect-square transition-all duration-300 transform hover:scale-[1.03]
                          active:scale-95 hover:ring-2 hover:ring-offset-1 hover:ring-indigo-200 box-border w-full
                        `}
                      >
                        <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", p.bgLight)} />
                        
                        <div className="relative z-10">
                          <div className={cn("p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br text-white mb-2 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md", p.color)}>
                            <topic.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                          </div>
                        </div>
                        
                        <span className="relative z-10 font-bold text-[10px] sm:text-[13px] font-headline text-slate-600 group-hover:text-slate-800 transition-colors leading-tight line-clamp-2 px-0.5">
                          {topic.title}
                        </span>
                        
                        <ChevronRight className="absolute bottom-1 right-1 h-3 w-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Sparkles className="absolute top-1 right-1 h-2.5 w-2.5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollArea>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
