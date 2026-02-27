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
} from "lucide-react";

// ─── Design Tokens ───────────────────────────────────────────────────────────
// Each topic gets a consistent color family used across icon, badge, card bg/border
const PALETTE = {
  blue:    { text: "text-blue-600",    bg: "bg-blue-50",    border: "border-blue-200",    hover: "hover:bg-blue-100",    badge: "bg-blue-100 text-blue-700",    heading: "text-blue-700",    accent: "#2563eb" },
  indigo:  { text: "text-indigo-600",  bg: "bg-indigo-50",  border: "border-indigo-200",  hover: "hover:bg-indigo-100",  badge: "bg-indigo-100 text-indigo-700",  heading: "text-indigo-700",  accent: "#4338ca" },
  cyan:    { text: "text-cyan-600",    bg: "bg-cyan-50",    border: "border-cyan-200",    hover: "hover:bg-cyan-100",    badge: "bg-cyan-100 text-cyan-700",    heading: "text-cyan-700",    accent: "#0891b2" },
  teal:    { text: "text-teal-600",    bg: "bg-teal-50",    border: "border-teal-200",    hover: "hover:bg-teal-100",    badge: "bg-teal-100 text-teal-700",    heading: "text-teal-700",    accent: "#0d9488" },
  emerald: { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", hover: "hover:bg-emerald-100", badge: "bg-emerald-100 text-emerald-700", heading: "text-emerald-700", accent: "#059669" },
  green:   { text: "text-green-600",   bg: "bg-green-50",   border: "border-green-200",   hover: "hover:bg-green-100",   badge: "bg-green-100 text-green-700",   heading: "text-green-700",   accent: "#16a34a" },
  orange:  { text: "text-orange-600",  bg: "bg-orange-50",  border: "border-orange-200",  hover: "hover:bg-orange-100",  badge: "bg-orange-100 text-orange-700",  heading: "text-orange-700",  accent: "#ea580c" },
  slate:   { text: "text-slate-600",   bg: "bg-slate-100",  border: "border-slate-300",   hover: "hover:bg-slate-200",   badge: "bg-slate-200 text-slate-700",   heading: "text-slate-700",   accent: "#475569" },
  amber:   { text: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-200",   hover: "hover:bg-amber-100",   badge: "bg-amber-100 text-amber-700",   heading: "text-amber-700",   accent: "#d97706" },
  violet:  { text: "text-violet-600",  bg: "bg-violet-50",  border: "border-violet-200",  hover: "hover:bg-violet-100",  badge: "bg-violet-100 text-violet-700",  heading: "text-violet-700",  accent: "#7c3aed" },
  pink:    { text: "text-pink-600",    bg: "bg-pink-50",    border: "border-pink-200",    hover: "hover:bg-pink-100",    badge: "bg-pink-100 text-pink-700",    heading: "text-pink-700",    accent: "#db2777" },
  red:     { text: "text-red-600",     bg: "bg-red-50",     border: "border-red-200",     hover: "hover:bg-red-100",     badge: "bg-red-100 text-red-700",     heading: "text-red-700",     accent: "#dc2626" },
  rose:    { text: "text-rose-600",    bg: "bg-rose-50",    border: "border-rose-200",    hover: "hover:bg-rose-100",    badge: "bg-rose-100 text-rose-700",    heading: "text-rose-700",    accent: "#e11d48" },
  purple:  { text: "text-purple-600",  bg: "bg-purple-50",  border: "border-purple-200",  hover: "hover:bg-purple-100",  badge: "bg-purple-100 text-purple-700",  heading: "text-purple-700",  accent: "#9333ea" },
  stone:   { text: "text-stone-600",   bg: "bg-stone-100",  border: "border-stone-300",   hover: "hover:bg-stone-200",   badge: "bg-stone-200 text-stone-700",   heading: "text-stone-700",   accent: "#78716c" },
  sky:     { text: "text-sky-600",     bg: "bg-sky-50",     border: "border-sky-200",     hover: "hover:bg-sky-100",     badge: "bg-sky-100 text-sky-700",     heading: "text-sky-700",     accent: "#0284c7" },
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
    <div className={`rounded-2xl border ${p.border} shadow-sm mb-6 overflow-hidden w-full`}>
      <div className={`${p.bg} px-3 sm:px-5 py-3 border-b ${p.border}`}>
        <h2 className={`text-base sm:text-lg font-bold ${p.heading} font-headline leading-snug`}>{title}</h2>
      </div>
      <div className="p-3 sm:p-5 text-gray-700 leading-relaxed space-y-3 break-words overflow-hidden" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>{children}</div>
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
    <h3 className={`text-sm sm:text-base font-bold ${p.heading} mt-4 mb-2 flex items-center gap-2 break-words`}>
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
    <div className={`${p.bg} border ${p.border} rounded-xl p-3 sm:p-4 text-sm w-full overflow-hidden`}>
      {title && <p className={`font-bold ${p.heading} mb-1.5 text-sm leading-snug`}>{title}</p>}
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
          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${p.bg} border ${p.border}`} style={{ backgroundColor: p.accent }} />
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
        <li key={i} className={`flex items-start gap-2 text-sm p-2 sm:p-3 rounded-lg ${p.bg} border ${p.border}`}>
          <span className={`font-bold text-xs mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${p.badge}`}>
            {i + 1}
          </span>
          <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ol>
  );
};

const ScrollableTable = ({ children, minWidth = "480px" }: { children: React.ReactNode; minWidth?: string }) => (
  <div className="w-full overflow-x-auto rounded-xl border border-gray-200 mt-3">
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
        {/* FIXED: 3-column table with all headers and correct data */}
        {/* Mobile: stacked cards | sm+: scrollable table */}
        <div className="mt-3 space-y-2 sm:hidden">
          {c.table.rows.map((row: any, i: number) => (
            <div key={i} className="rounded-xl border border-teal-200 overflow-hidden text-sm">
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
        <div className="mt-4 rounded-xl border border-emerald-200 overflow-hidden">
          <div className="bg-emerald-50 px-3 sm:px-4 py-2 border-b border-emerald-200">
            <h3 className="font-bold text-emerald-700">{c.gmp.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
            <p className="text-sm">{c.gmp.p1}</p>
            {c.gmp.list.map((item: any, i: number) => (
              <InfoCard key={i} title={item.title} palette="emerald">
                <p className="text-gray-600 text-sm break-words">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* GHP */}
        <div className="mt-4 rounded-xl border border-emerald-200 overflow-hidden">
          <div className="bg-emerald-50 px-3 sm:px-4 py-2 border-b border-emerald-200">
            <h3 className="font-bold text-emerald-700">{c.ghp.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
            <p className="text-sm">{c.ghp.p1}</p>
            {c.ghp.list.map((item: any, i: number) => (
              <InfoCard key={i} title={item.title} palette="emerald">
                <p className="text-gray-600 text-sm break-words">{item.description}</p>
              </InfoCard>
            ))}
          </div>
        </div>

        {/* GLP */}
        <div className="mt-4 rounded-xl border border-emerald-200 overflow-hidden">
          <div className="bg-emerald-50 px-3 sm:px-4 py-2 border-b border-emerald-200">
            <h3 className="font-bold text-emerald-700">{c.glp.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
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
            <div key={i} className="rounded-xl border border-green-200 overflow-hidden text-sm">
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
        <div className="mt-4 rounded-xl border border-purple-200 overflow-hidden">
          <div className="bg-purple-50 px-3 sm:px-4 py-2 border-b border-purple-200">
            <h3 className="font-bold text-purple-700">{c.qms.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
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
        <div className="mt-4 rounded-xl border border-purple-200 overflow-hidden">
          <div className="bg-purple-50 px-3 sm:px-4 py-2 border-b border-purple-200">
            <h3 className="font-bold text-purple-700">{c.fsms.title}</h3>
          </div>
          <div className="p-3 sm:p-4 space-y-3">
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
        <InfoCard title={c.iso_17025.title} palette="purple">
          <p className="text-gray-600 text-sm break-words">{c.iso_17025.description}</p>
        </InfoCard>
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
              <div key={key} className={`rounded-xl border ${p.border} overflow-hidden w-full`}>
                <div className={`${p.bg} px-4 py-2 border-b ${p.border}`}>
                  <h3 className={`font-bold ${p.heading}`}>{body.title}</h3>
                </div>
                <div className="p-3 sm:p-4 space-y-2">
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
            <p className="text-sm text-gray-600 italic p-3 bg-stone-50 rounded-lg border border-stone-200 break-words" style={{ wordBreak: "break-word", overflowWrap: "anywhere" }} dangerouslySetInnerHTML={{ __html: c.p4 }} />
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
                className={`flex items-start gap-3 p-3 sm:p-4 ${p.bg} rounded-xl border ${p.border}`}
              >
                <span
                  className={`font-black text-xl sm:text-2xl w-7 sm:w-8 shrink-0 ${p.text}`}
                  style={{ fontFamily: "serif" }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className={`font-bold ${p.heading} text-sm`}>
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
        <InfoCard title={c.dairy_importance.title} palette="amber">
          <p className="text-gray-700 text-sm break-words">{c.dairy_importance.description}</p>
        </InfoCard>
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
              <div key={i} className={`flex gap-2 sm:gap-3 p-3 sm:p-4 ${p.bg} border ${p.border} rounded-xl`}>
                <span className={`font-black text-lg sm:text-xl w-7 shrink-0 ${p.text}`}>{item.title[0]}</span>
                <div>
                  <p className={`font-bold ${p.heading} text-sm mb-1`}>{item.title}</p>
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
        <InfoCard title={c.risk_matrix.title} palette="rose">
          <p className="text-gray-700 text-sm break-words">{c.risk_matrix.description}</p>
        </InfoCard>
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
        <InfoCard title={c.monitoring.title} palette="blue">
          <p className="text-gray-700 text-sm break-words">{c.monitoring.description}</p>
        </InfoCard>
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
        <InfoCard title={c.spoilage.title} palette="emerald">
          <p className="text-gray-700 text-sm break-words">{c.spoilage.description}</p>
        </InfoCard>
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
  { value: "intro",          icon: Book,           palette: "blue"    as PaletteKey, tabKey: "intro"         },
  { value: "what_is_quality",icon: CheckSquare,     palette: "indigo"  as PaletteKey, titleKey: "whatIsQuality" },
  { value: "qc",             icon: TestTube,        palette: "cyan"    as PaletteKey, tabKey: "qc"            },
  { value: "qa",             icon: BadgeCheck,      palette: "teal"    as PaletteKey, tabKey: "qa"            },
  { value: "prps",           icon: Settings,        palette: "emerald" as PaletteKey, tabKey: "prps"          },
  { value: "oprps",          icon: ShieldCheck,     palette: "green"   as PaletteKey, tabKey: "oprps"         },
  { value: "fiveS",          icon: SortAsc,         palette: "orange"  as PaletteKey, tabKey: "fiveS"         },
  { value: "sop",            icon: FileText,        palette: "slate"   as PaletteKey, tabKey: "sop"           },
  { value: "fifo_fefo",      icon: Forward,         palette: "amber"   as PaletteKey, tabKey: "fifo_fefo"     },
  { value: "philosophy",     icon: Users,           palette: "violet"  as PaletteKey, tabKey: "philosophy"    },
  { value: "tqm",            icon: Award,           palette: "pink"    as PaletteKey, tabKey: "tqm"           },
  { value: "haccp",          icon: ShieldCheck,     palette: "red"     as PaletteKey, tabKey: "haccp"         },
  { value: "taccp_vaccp",    icon: ShieldAlert,     palette: "rose"    as PaletteKey, tabKey: "taccp_vaccp"   },
  { value: "iso",            icon: FileSpreadsheet, palette: "purple"  as PaletteKey, tabKey: "iso"           },
  { value: "lean",           icon: Layers,          palette: "teal"    as PaletteKey, tabKey: "lean"          },
  { value: "six_sigma",      icon: Sigma,           palette: "indigo"  as PaletteKey, tabKey: "six_sigma"     },
  { value: "risk_management",icon: GitBranch,       palette: "red"     as PaletteKey, tabKey: "risk_management"},
  { value: "traceability",   icon: GitBranch,       palette: "sky"     as PaletteKey, tabKey: "traceability"  },
  { value: "cold_chain",     icon: Thermometer,     palette: "cyan"    as PaletteKey, tabKey: "cold_chain"    },
  { value: "sensory",        icon: Star,            palette: "violet"  as PaletteKey, tabKey: "sensory"       },
  { value: "microbiology",   icon: Microscope,      palette: "emerald" as PaletteKey, tabKey: "microbiology"  },
  { value: "packaging",      icon: Package,         palette: "slate"   as PaletteKey, tabKey: "packaging"     },
  { value: "bodies",         icon: Factory,         palette: "stone"   as PaletteKey, tabKey: "bodies"        },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export function QualityConceptModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const { t } = useLanguage();
  const content = t(qualityContent);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) setActiveTopic(null);
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
    if (scrollAreaRef.current)
      scrollPosition.current = scrollAreaRef.current.scrollTop;
    setActiveTopic(v);
  };

  const handleBack = () => setActiveTopic(null);

  useEffect(() => {
    if (!activeTopic && scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current)
          scrollAreaRef.current.scrollTop = scrollPosition.current;
      }, 0);
    }
  }, [activeTopic]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-[95vh] max-h-[95vh] flex flex-col p-0 sm:p-5 overflow-hidden">
        {/* Header */}
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-primary mb-1 font-headline">
            {content.title}
          </DialogTitle>
          <DialogDescription className="text-center text-base text-gray-500">
            {selectedTopic ? selectedTopic.title : content.description}
          </DialogDescription>
        </DialogHeader>

        {/* Topic detail view */}
        {selectedTopic && ActiveComponent ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-2 sm:px-0 shrink-0 pb-1">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="hover:bg-slate-100 text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-2">
              <div className="px-2 pt-0 pb-6 sm:px-0">
                <ActiveComponent content={content} />
              </div>
            </ScrollArea>
          </div>
        ) : (
          /* Topic grid */
          <ScrollArea className="flex-1 mt-2" viewportRef={scrollAreaRef}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 p-2 sm:p-2 pb-6">
              {topics.map((topic) => {
                const p = PALETTE[topic.palette];
                const Icon = topic.icon;
                return (
                  <button
                    key={topic.value}
                    onClick={() => handleSelectTopic(topic.value)}
                    className={`
                      flex flex-col items-center justify-center gap-1.5 p-3 sm:p-4 rounded-2xl border
                      transition-all duration-200 text-center
                      shadow-sm hover:shadow-md active:scale-95
                      ${p.bg} ${p.border} ${p.hover}
                      group
                    `}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${p.badge} transition-transform duration-200 group-hover:scale-110`}
                    >
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${p.text}`} />
                    </div>
                    <span className="font-semibold text-[11px] sm:text-xs leading-tight text-gray-700">
                      {topic.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
