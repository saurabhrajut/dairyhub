"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  FileSpreadsheet, Printer, Download, Trash2, User, Clock, Calendar as CalendarIcon, HelpCircle,
  Mail, MessageCircle, Plus, Building2, Sparkles, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { savePdfFile, saveFile } from "@/lib/mobile-download";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

// Types for spreadsheet data
interface ClosingStockRow {
  tank: string;
  variant: string;
  qty: string;
  fat: string;
  snf: string;
  acidity: string;
  temp: string;
}

interface StoreRow {
  item: string;
  bags: string;
  qty: string;
}

interface TankerRow {
  variant: string;
  tankerNo: string;
  qty: string;
  fat: string;
  snf: string;
}

interface DispatchRow {
  variant: string;
  vehicleNo: string;
  qty: string;
  fat: string;
  snf: string;
}

// Pre-defined values
const DEFAULT_TANKS = [
  "RMST-1", "RMST-2", "PMST-1", "PMST-2",
  "HMST-1", "HMST-2", "HMST-3", "HMST-4", "HMST-5", "HMST-6", "HMST-7",
  "Milk Rinse Tank-1 (5KL)", "Milk Rinse Tank-2 (5KL)",
  "VMST-1", "VMST-2", "VMST-3", "VMST-4", "VMST-5", "VMST-6", "VMST-7", "VMST-8",
  "BMCST-1 (5 KL)", "BMCST-2 (5 KL)", "RC Tank", "Dump Tank"
];

const DEFAULT_DISPATCH_VARIANTS = [
  "GOLD", "TAAZA", "HDTM", "ABM", "TADKA",
  "M.DAHI", "L.DAHI", "T.DAHI", "Pro. Dahi",
  "S.Dahi", "S. Lassi"
];

interface ColdBlastRow {
  variant: string;
  unitsPerCrate: string;
  coldCrates: string;
  coldUbd: string;
  blastCrates: string;
  blastUbd: string;
}

const DEFAULT_COLD_BLAST_VARIANTS = [
  { name: "Amul Butter 16x500x20 gm", unitsPerCrate: 16 },
  { name: "Amul Fresh Paneer 15x200 gm Carton", unitsPerCrate: 15 },
  { name: "Amul Premium Dahi 14x400 Gm Cup Crate", unitsPerCrate: 14 },
  { name: "Amul Probiotic BM 12x500 mL Pet Bottle", unitsPerCrate: 12 },
  { name: "Amul Butter Sandwich Bread 10x400gm", unitsPerCrate: 10 },
  { name: "Amul Butter Whole Wheat Bread 10x400gm", unitsPerCrate: 10 },
  { name: "Amul Butter Sandwich Bread 15x200gm", unitsPerCrate: 15 },
  { name: "Amul Brown Butter Bread 10x400gm", unitsPerCrate: 10 },
  { name: "", unitsPerCrate: 1 },
  { name: "Amul Curd Pouch 16x700 gm Crate", unitsPerCrate: 16 },
  { name: "Amul Lite Dahi 15 Kg Matka", unitsPerCrate: 1 },
  { name: "Amul Lite Dahi 5 Kg Matka", unitsPerCrate: 1 },
  { name: "", unitsPerCrate: 1 },
  { name: "AMUL LOW FAT DAHI POUCH 74x150 GM CRATE", unitsPerCrate: 74 },
  { name: "Amul Masti Dahi 400 g Matka", unitsPerCrate: 1 },
  { name: "Amul Masti Dahi 500 g Matka", unitsPerCrate: 1 },
  { name: "Amul Probiotic Dahi Bucket 6x1 Kg Crate", unitsPerCrate: 6 },
  { name: "Amul Masti Dahi Bucket 6x1 Kg Crate", unitsPerCrate: 6 },
  { name: "Amul Masti Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
  { name: "Amul Masti Dahi Cup 28x200 Gm Crate", unitsPerCrate: 28 },
  { name: "Amul Masti Dahi Cup 54x80 gm Crate", unitsPerCrate: 54 },
  { name: "Amul Masti Dahi Pouch 12x1 Kg Crate", unitsPerCrate: 12 },
  { name: "Amul Masti Dahi Pouch 30x380 gm Crate", unitsPerCrate: 30 },
  { name: "Amul Masti Dahi Pouch 60x200 gm Crate", unitsPerCrate: 60 },
  { name: "Amul Meetha Dahi Cup 28x185 gm Crate", unitsPerCrate: 28 },
  { name: "Amul Meetha Dahi Cup 54x80 Gm Crate", unitsPerCrate: 54 },
  { name: "Amul Meethi Lassi 40X300 mL Pouch Crate", unitsPerCrate: 40 },
  { name: "Amul Buttermilk 12x1 Litre Pouch Crate", unitsPerCrate: 12 },
  { name: "Amul Pro. Buttermilk 16x680 mL Pouch", unitsPerCrate: 16 },
  { name: "Amul Pro. Buttermilk 30x400 mL Pouch", unitsPerCrate: 30 },
  { name: "Amul Pro. Buttermilk 40x300 mL Pouch", unitsPerCrate: 40 },
  { name: "Amul Pro. Tadka Chaas 24x500 mL Pouch", unitsPerCrate: 24 },
  { name: "Amul Pro. Tadka Chaas 42x260 mL Pouch", unitsPerCrate: 42 }
];

const parseUnitsPerCrate = (name: string): number => {
  if (!name) return 1;
  const match = name.match(/(\d+)\s*(?:x|X)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return 1;
};

export interface DairyCompanyConfig {
  id: string;
  name: string;
  dispatchVariants: string[];
  coldBlastVariants: { name: string; unitsPerCrate: number }[];
}

export const DAIRY_COMPANIES: Record<string, DairyCompanyConfig> = {
  amul: {
    id: "amul",
    name: "Amul Dairy",
    dispatchVariants: [
      "Amul Gold", "Amul Taaza", "Amul Slim (HDTM)", "Amul Cow Milk",
      "Amul Masti Dahi", "Amul Probiotic Dahi", "Amul Meetha Dahi",
      "Amul Masti Buttermilk", "Amul Tadka Chaas", "Amul Paneer", "Amul Lassi"
    ],
    coldBlastVariants: [
      { name: "Amul Butter 16x500x20 gm", unitsPerCrate: 16 },
      { name: "Amul Fresh Paneer 15x200 gm Carton", unitsPerCrate: 15 },
      { name: "Amul Premium Dahi 14x400 Gm Cup Crate", unitsPerCrate: 14 },
      { name: "Amul Probiotic BM 12x500 mL Pet Bottle", unitsPerCrate: 12 },
      { name: "Amul Butter Sandwich Bread 10x400gm", unitsPerCrate: 10 },
      { name: "Amul Curd Pouch 16x700 gm Crate", unitsPerCrate: 16 },
      { name: "AMUL LOW FAT DAHI POUCH 74x150 GM CRATE", unitsPerCrate: 74 },
      { name: "Amul Masti Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Amul Masti Dahi Cup 28x200 Gm Crate", unitsPerCrate: 28 },
      { name: "Amul Masti Dahi Pouch 12x1 Kg Crate", unitsPerCrate: 12 },
      { name: "Amul Meetha Dahi Cup 28x185 gm Crate", unitsPerCrate: 28 },
      { name: "Amul Meethi Lassi 40X300 mL Pouch Crate", unitsPerCrate: 40 },
      { name: "Amul Pro. Buttermilk 40x300 mL Pouch", unitsPerCrate: 40 },
      { name: "Amul Pro. Tadka Chaas 24x500 mL Pouch", unitsPerCrate: 24 }
    ]
  },
  mother_dairy: {
    id: "mother_dairy",
    name: "Mother Dairy",
    dispatchVariants: [
      "Full Cream Milk (FCM)", "Toned Milk (Taaza)", "Double Toned (Live Lite)",
      "Mother Dairy Cow Milk", "Classic Dahi", "Ultimate Dahi",
      "Mishti Doi", "Tadka Chaas", "Plain Lassi", "Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Mother Dairy Fresh Paneer 15x200 gm", unitsPerCrate: 15 },
      { name: "Mother Dairy Classic Dahi 14x400 gm Cup", unitsPerCrate: 14 },
      { name: "Mother Dairy Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Mother Dairy Mishti Doi 28x80 gm Cup", unitsPerCrate: 28 },
      { name: "Mother Dairy Tadka Chaas 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Mother Dairy Plain Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Mother Dairy Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  nandini: {
    id: "nandini",
    name: "Nandini (KMF Karnataka)",
    dispatchVariants: [
      "Nandini Full Cream Milk", "Nandini Special Milk", "Nandini Toned Milk",
      "Nandini Double Toned", "Nandini Samvruddhi", "Nandini GoodLife UHT",
      "Nandini Curd / Dahi", "Nandini Spiced Buttermilk", "Nandini Sweet Lassi", "Nandini Paneer"
    ],
    coldBlastVariants: [
      { name: "Nandini Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Nandini Curd Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Nandini Curd Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Nandini Buttermilk 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Nandini Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Nandini Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  verka: {
    id: "verka",
    name: "Verka (Punjab Milkfed)",
    dispatchVariants: [
      "Verka Full Cream Milk", "Verka Shakti Toned Milk", "Verka Special DTM",
      "Verka Cow Milk", "Verka Dahi", "Verka Kheer",
      "Verka Plain Lassi", "Verka Namkeen Lassi", "Verka Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Verka Fresh Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Verka Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Verka Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Verka Lassi Pouch 40x200 ml", unitsPerCrate: 40 },
      { name: "Verka Kheer Cup 28x150 gm", unitsPerCrate: 28 },
      { name: "Verka Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  saras: {
    id: "saras",
    name: "Saras (RCDF Rajasthan)",
    dispatchVariants: [
      "Saras Gold (FCM)", "Saras Taj (Standardized)", "Saras Smart (Toned)",
      "Saras Lite (DTM)", "Saras Cow Milk", "Saras Plain Dahi",
      "Saras Masala Chaas", "Saras Sweet Lassi", "Saras Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Saras Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Saras Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Saras Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Saras Masala Chaas 30x300 ml", unitsPerCrate: 30 },
      { name: "Saras Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Saras Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  sudha: {
    id: "sudha",
    name: "Sudha (COMFED Bihar)",
    dispatchVariants: [
      "Sudha Gold (FCM)", "Sudha Shakti (Standardized)", "Sudha Healthy (Toned)",
      "Sudha Smart (DTM)", "Sudha Cow Milk", "Sudha Special Dahi",
      "Sudha Masala Lassi", "Sudha Sweet Lassi", "Sudha Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Sudha Fresh Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Sudha Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Sudha Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Sudha Masala Lassi 30x200 ml", unitsPerCrate: 30 },
      { name: "Sudha Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Sudha Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  aavin: {
    id: "aavin",
    name: "Aavin (Tamil Nadu)",
    dispatchVariants: [
      "Aavin Premium Full Cream", "Aavin Standardized Milk", "Aavin Toned Milk",
      "Aavin Double Toned", "Aavin Diet Milk", "Aavin Curd",
      "Aavin Buttermilk", "Aavin Lassi", "Aavin Paneer"
    ],
    coldBlastVariants: [
      { name: "Aavin Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Aavin Curd Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Aavin Curd Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Aavin Buttermilk 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Aavin Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Aavin Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  milma: {
    id: "milma",
    name: "Milma (Kerala)",
    dispatchVariants: [
      "Milma Rich (Full Cream)", "Milma Smart (Toned)", "Milma Double Toned",
      "Milma Cow Milk", "Milma Fresh Curd", "Milma Sambharam (Buttermilk)",
      "Milma Sweet Lassi", "Milma Paneer", "Milma Peda"
    ],
    coldBlastVariants: [
      { name: "Milma Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Milma Curd Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Milma Curd Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Milma Sambharam 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Milma Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Milma Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  vijaya: {
    id: "vijaya",
    name: "Vijaya (AP & Telangana)",
    dispatchVariants: [
      "Vijaya Full Cream Milk", "Vijaya Standard Milk", "Vijaya Toned Milk",
      "Vijaya Double Toned Milk", "Vijaya Cow Milk", "Vijaya Fresh Dahi",
      "Vijaya Masala Buttermilk", "Vijaya Lassi", "Vijaya Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Vijaya Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Vijaya Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Vijaya Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Vijaya Buttermilk 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Vijaya Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Vijaya Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  parag: {
    id: "parag",
    name: "Parag Milk Foods",
    dispatchVariants: [
      "Parag Gold (FCM)", "Parag Taaza (Toned)", "Parag Lite (DTM)",
      "Parag Cow Milk", "Parag Premium Dahi", "Parag Plain Dahi",
      "Parag Masala Chaas", "Parag Sweet Lassi", "Parag Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Parag Fresh Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Parag Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Parag Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Parag Masala Chaas 30x300 ml Bottle", unitsPerCrate: 30 },
      { name: "Parag Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Parag Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  paras: {
    id: "paras",
    name: "Paras Dairy",
    dispatchVariants: [
      "Paras Premium Milk (FCM)", "Paras Standard Milk", "Paras Toned Milk",
      "Paras DTM", "Paras Pure Desi Dahi", "Paras Premium Dahi",
      "Paras Masala Chaas", "Paras Lassi", "Paras Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Paras Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Paras Premium Dahi 14x400 gm Cup", unitsPerCrate: 14 },
      { name: "Paras Pure Dahi 12x1 kg Pouch", unitsPerCrate: 12 },
      { name: "Paras Masala Chaas 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Paras Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Paras Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  ananda: {
    id: "ananda",
    name: "Ananda Dairy",
    dispatchVariants: [
      "Ananda Gold (FCM)", "Ananda Toned Milk", "Ananda Double Toned Milk",
      "Ananda Cow Milk", "Ananda Rabri Dahi", "Ananda Masti Dahi",
      "Ananda Masala Chaas", "Ananda Lassi", "Ananda Paneer"
    ],
    coldBlastVariants: [
      { name: "Ananda Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Ananda Masti Dahi 14x400 gm Cup", unitsPerCrate: 14 },
      { name: "Ananda Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Ananda Rabri Dahi 28x200 gm Cup", unitsPerCrate: 28 },
      { name: "Ananda Chaas 30x300 ml Pouch", unitsPerCrate: 30 },
      { name: "Ananda Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 }
    ]
  },
  gyan: {
    id: "gyan",
    name: "Gyan Dairy",
    dispatchVariants: [
      "Gyan Full Cream Milk", "Gyan Toned Milk", "Gyan Cow Milk",
      "Gyan DTM", "Gyan Premium Dahi", "Gyan Lassi",
      "Gyan Masala Chaas", "Gyan Fresh Paneer", "Gyan Khoya / Mawa"
    ],
    coldBlastVariants: [
      { name: "Gyan Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Gyan Premium Dahi 14x400 gm Cup", unitsPerCrate: 14 },
      { name: "Gyan Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Gyan Masala Chaas 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Gyan Lassi Pouch 40x200 ml", unitsPerCrate: 40 },
      { name: "Gyan Khoya / Mawa 10x1 kg Pack", unitsPerCrate: 10 }
    ]
  },
  heritage: {
    id: "heritage",
    name: "Heritage Foods",
    dispatchVariants: [
      "Heritage Special FCM", "Heritage Daily Toned Milk", "Heritage Cow Milk",
      "Heritage Double Toned", "Heritage Curd / Dahi", "Heritage Buttermilk",
      "Heritage Lassi", "Heritage Fresh Paneer", "Heritage Ghee"
    ],
    coldBlastVariants: [
      { name: "Heritage Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Heritage Curd Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Heritage Curd Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Heritage Buttermilk 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Heritage Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Heritage Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  hatsun: {
    id: "hatsun",
    name: "Hatsun / Arokya Dairy",
    dispatchVariants: [
      "Arokya Full Cream Milk", "Arokya Toned Milk", "Arokya Double Toned",
      "Hatsun Curd", "Hatsun Buttermilk", "Hatsun Paneer",
      "Hatsun Table Butter", "Hatsun Ghee"
    ],
    coldBlastVariants: [
      { name: "Hatsun Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Hatsun Curd Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Hatsun Curd Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Hatsun Buttermilk 30x200 ml Pouch", unitsPerCrate: 30 },
      { name: "Hatsun Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  abhi_federation: {
    id: "abhi_federation",
    name: "Abhi Federation",
    dispatchVariants: [
      "Fed. Full Cream Milk", "Fed. Standard Milk", "Fed. Toned Milk",
      "Fed. Double Toned Milk", "Fed. Fresh Dahi", "Fed. Masala Chaas",
      "Fed. Sweet Lassi", "Fed. Fresh Paneer"
    ],
    coldBlastVariants: [
      { name: "Fed. Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Fed. Dahi 14x400 gm Cup Crate", unitsPerCrate: 14 },
      { name: "Fed. Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Fed. Masala Chaas 30x300 ml", unitsPerCrate: 30 },
      { name: "Fed. Sweet Lassi 40x200 ml", unitsPerCrate: 40 }
    ]
  },
  country_delight: {
    id: "country_delight",
    name: "Country Delight / Direct Dairies",
    dispatchVariants: [
      "Desi Cow Milk", "Buffalo Milk", "Low Fat Milk",
      "Taaza Dahi", "Ghar Jaisa Dahi", "Fresh Paneer", "Desi White Butter"
    ],
    coldBlastVariants: [
      { name: "Fresh Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Taaza Dahi Matka 5 kg", unitsPerCrate: 1 },
      { name: "Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Desi Butter 10x500 gm Pack", unitsPerCrate: 10 }
    ]
  },
  standard_plant: {
    id: "standard_plant",
    name: "Standard Processing Plant Format",
    dispatchVariants: [
      "Full Cream Milk (FCM 6.0/9.0)", "Standardized Milk (SM 4.5/8.5)",
      "Toned Milk (TM 3.0/8.5)", "Double Toned Milk (DTM 1.5/9.0)",
      "Skimmed Milk (SNF 8.7)", "Cow Milk (3.5/8.5)",
      "Fresh Dahi (Pouch/Cup)", "Flavored Milk", "Fresh Paneer", "Desi Ghee"
    ],
    coldBlastVariants: [
      { name: "Fresh Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Standard Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Standard Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Spiced Buttermilk 30x200 ml", unitsPerCrate: 30 },
      { name: "Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 },
      { name: "Table Butter 16x500 gm", unitsPerCrate: 16 }
    ]
  },
  standard_bmc: {
    id: "standard_bmc",
    name: "Bulk Milk Chilling Center (BMC) Format",
    dispatchVariants: [
      "Chilled Mixed Raw Milk (4°C)", "Chilled Cow Raw Milk (4°C)",
      "Chilled Buffalo Raw Milk (4°C)", "Chilled Skimmed Milk",
      "Cream (40% Fat)", "Chilled Whey Water"
    ],
    coldBlastVariants: [
      { name: "Sample Milk Bottles 24x500 ml", unitsPerCrate: 24 },
      { name: "Chilled Cream Cans 20 L", unitsPerCrate: 1 }
    ]
  },
  local_company: {
    id: "local_company",
    name: "Local Dairy / Other Dairy",
    dispatchVariants: [
      "Full Cream Milk (FCM)", "Toned Milk (TM)", "Double Toned Milk (DTM)",
      "Cow Milk", "Fresh Dahi", "Matka Dahi", "Masala Chaas",
      "Sweet Lassi", "Paneer", "Khoya / Mawa"
    ],
    coldBlastVariants: [
      { name: "Fresh Paneer 15x200 gm Pack", unitsPerCrate: 15 },
      { name: "Dahi Cup 14x400 gm Crate", unitsPerCrate: 14 },
      { name: "Dahi Pouch 12x1 kg Crate", unitsPerCrate: 12 },
      { name: "Matka Dahi 5 kg Bucket", unitsPerCrate: 1 },
      { name: "Masala Chaas 30x300 ml", unitsPerCrate: 30 },
      { name: "Sweet Lassi 40x200 ml Pouch", unitsPerCrate: 40 }
    ]
  }
};

const mergeColdBlastStock = (savedRows: ColdBlastRow[], defaultVariants = DEFAULT_COLD_BLAST_VARIANTS): ColdBlastRow[] => {
  if (!savedRows || !Array.isArray(savedRows)) return [];
  const savedMap = new Map<string, ColdBlastRow>();
  savedRows.forEach(row => {
    if (row.variant) {
      savedMap.set(row.variant, row);
    }
  });

  const merged = defaultVariants.map(v => {
    const saved = savedMap.get(v.name);
    return {
      variant: v.name,
      unitsPerCrate: String(v.unitsPerCrate),
      coldCrates: saved ? saved.coldCrates : "",
      coldUbd: saved ? saved.coldUbd : "",
      blastCrates: saved ? saved.blastCrates : "",
      blastUbd: saved ? saved.blastUbd : ""
    };
  });

  savedRows.forEach((row, idx) => {
    if (idx >= defaultVariants.length) {
      merged.push({
        variant: row.variant || "",
        unitsPerCrate: row.unitsPerCrate || "1",
        coldCrates: row.coldCrates || "",
        coldUbd: row.coldUbd || "",
        blastCrates: row.blastCrates || "",
        blastUbd: row.blastUbd || ""
      });
    }
  });

  const currentExtraCount = merged.length - defaultVariants.length;
  if (currentExtraCount < 5) {
    for (let i = currentExtraCount; i < 5; i++) {
      merged.push({
        variant: "",
        unitsPerCrate: "1",
        coldCrates: "",
        coldUbd: "",
        blastCrates: "",
        blastUbd: ""
      });
    }
  }

  return merged;
};

const formatPrintVal = (val: number | string) => {
  const num = parseFloat(String(val));
  if (isNaN(num) || num === 0) return "";
  return Number.isInteger(num) ? String(num) : num.toFixed(2);
};

const STORAGE_KEY = "dairyhub_shift_report_draft";

export default function ShiftReportCalc() {
  const [activeTab, setActiveTab] = useState<"daily" | "monthly">("daily");
  const [reportType, setReportType] = useState<"milk_dispatch" | "cold_blast_closing">(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("dairyhub_selected_report_type");
        if (saved === "cold_blast_closing" || saved === "milk_dispatch") return saved;
      }
    } catch (e) {}
    return "milk_dispatch";
  });
  
  const parsedDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState(() => parsedDate.getMonth() + 1); // 1-12
  const [selectedYear, setSelectedYear] = useState(() => parsedDate.getFullYear());

  const defaultDate = new Date().toISOString().split('T')[0];

  // Company Selection State
  const [selectedCompanyKey, setSelectedCompanyKey] = useState<string>(() => {
    try {
      if (typeof window !== "undefined") {
        const savedKey = localStorage.getItem(`dairyhub_selected_company_key_${defaultDate}`) || localStorage.getItem("dairyhub_selected_company_key");
        if (savedKey && DAIRY_COMPANIES[savedKey]) return savedKey;
      }
    } catch (e) {}
    return "";
  });

  const [companyNameCB, setCompanyNameCB] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_cold_blast_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.companyNameCB) return data.companyNameCB;
        }
      }
    } catch (e) {}
    return "";
  });

  const [closingStockCB, setClosingStockCB] = useState<ColdBlastRow[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_cold_blast_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.closingStockCB) return mergeColdBlastStock(data.closingStockCB);
        }
      }
    } catch (e) {}
    return mergeColdBlastStock([]);
  });

  // Custom Monthly Closing Stock Rows state
  const [customMonthlyClosingStock, setCustomMonthlyClosingStock] = useState<ClosingStockRow[]>([]);
  const [customMonthlyClosingStockCB, setCustomMonthlyClosingStockCB] = useState<ColdBlastRow[]>([]);
  
  // Header Meta
  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.time) return data.time;
        }
      }
    } catch (e) {}
    return "08:00";
  });
  
  const [shift, setShift] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.shift) return data.shift;
        }
      }
    } catch (e) {}
    return "Morning (A)";
  });

  const [shiftIncharge, setShiftIncharge] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.shiftIncharge) return data.shiftIncharge;
        }
      }
    } catch (e) {}
    return "";
  });

  const [banasOfficer, setBanasOfficer] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.banasOfficer) return data.banasOfficer;
        }
      }
    } catch (e) {}
    return "";
  });

  // Synchronous initialization with cache-clearing logic to prevent old default text loading
  const [companyName, setCompanyName] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        let saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (!saved) {
          saved = localStorage.getItem("dairyhub_shift_report_draft");
        }
        if (saved) {
          const data = JSON.parse(saved);
          const isOldDefault = data.companyName && (
            data.companyName.includes("V S Anand") || 
            data.companyName === "V S Anand Foods Processing (MPS Sonipat)"
          );
          if (!isOldDefault) return data.companyName || "";
        }
      }
    } catch (e) {}
    return "";
  });

  const [leftOfficerLabel, setLeftOfficerLabel] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        let saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (!saved) {
          saved = localStorage.getItem("dairyhub_shift_report_draft");
        }
        if (saved) {
          const data = JSON.parse(saved);
          const isOldDefault = data.leftOfficerLabel && (
            data.leftOfficerLabel.includes("Banas") || 
            data.leftOfficerLabel === "Banas Officer"
          );
          if (!isOldDefault) return data.leftOfficerLabel || "";
        }
      }
    } catch (e) {}
    return "";
  });

  const [rightOfficerLabel, setRightOfficerLabel] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        let saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (!saved) {
          saved = localStorage.getItem("dairyhub_shift_report_draft");
        }
        if (saved) {
          const data = JSON.parse(saved);
          if (data.rightOfficerLabel) {
            const isVsa = data.rightOfficerLabel.includes("VSA");
            return isVsa ? "Shift Incharge" : data.rightOfficerLabel;
          }
        }
      }
    } catch (e) {}
    return "Shift Incharge";
  });

  const [customRightLabel, setCustomRightLabel] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        let saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (!saved) {
          saved = localStorage.getItem("dairyhub_shift_report_draft");
        }
        if (saved) {
          const data = JSON.parse(saved);
          if (data.customRightLabel !== undefined) return data.customRightLabel;
        }
      }
    } catch (e) {}
    return "";
  });

  const activeRightLabel = rightOfficerLabel === "Custom" ? customRightLabel : rightOfficerLabel;

  const handleCompanySelect = (val: string) => {
    setSelectedCompanyKey(val);
    if (typeof window !== "undefined") {
      localStorage.setItem(`dairyhub_selected_company_key_${date}`, val);
      localStorage.setItem("dairyhub_selected_company_key", val);
    }

    if (val && val !== "none" && DAIRY_COMPANIES[val]) {
      const comp = DAIRY_COMPANIES[val];
      setCompanyName(comp.name);
      setCompanyNameCB(comp.name);

      // Populate Dispatched details for this company
      const dispatchRows = comp.dispatchVariants.map(variant => ({
        variant, vehicleNo: "", qty: "", fat: "", snf: ""
      }));
      for (let i = 0; i < 3; i++) {
        dispatchRows.push({ variant: "", vehicleNo: "", qty: "", fat: "", snf: "" });
      }
      setDispatchedDetails(dispatchRows);

      // Populate Cold & Blast closing stock for this company
      const coldBlastRows = comp.coldBlastVariants.map(v => ({
        variant: v.name,
        unitsPerCrate: String(v.unitsPerCrate),
        coldCrates: "",
        coldUbd: "",
        blastCrates: "",
        blastUbd: ""
      }));
      for (let i = 0; i < 5; i++) {
        coldBlastRows.push({ variant: "", unitsPerCrate: "1", coldCrates: "", coldUbd: "", blastCrates: "", blastUbd: "" });
      }
      setClosingStockCB(coldBlastRows);

      toast({
        title: "Company Selected",
        description: `Loaded ${comp.name} product list & report template.`,
      });
    }
  };

  // Closing Stock
  const [closingStock, setClosingStock] = useState<ClosingStockRow[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.closingStock) return data.closingStock;
        }
      }
    } catch (e) {}
    const rows = DEFAULT_TANKS.map(tank => ({
      tank, variant: "", qty: "", fat: "", snf: "", acidity: "", temp: ""
    }));
    for (let i = 0; i < 4; i++) {
      rows.push({ tank: "", variant: "", qty: "", fat: "", snf: "", acidity: "", temp: "" });
    }
    return rows;
  });

  // Store Inventory
  const [storeInventory, setStoreInventory] = useState<StoreRow[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.storeInventory) return data.storeInventory;
        }
      }
    } catch (e) {}
    return [
      { item: "SUGAR BAG - 50 kg", bags: "", qty: "" },
      { item: "SMP BAG - 25 kg", bags: "", qty: "" },
      { item: "", bags: "", qty: "" }
    ];
  });

  // Tanker Unloading (5 rows)
  const [tankerUnloading, setTankerUnloading] = useState<TankerRow[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.tankerUnloading) return data.tankerUnloading;
        }
      }
    } catch (e) {}
    return Array.from({ length: 5 }, () => ({ variant: "", tankerNo: "", qty: "", fat: "", snf: "" }));
  });

  // Tanker Standing on Dock (3 rows)
  const [tankerStanding, setTankerStanding] = useState<TankerRow[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.tankerStanding) return data.tankerStanding;
        }
      }
    } catch (e) {}
    return Array.from({ length: 3 }, () => ({ variant: "", tankerNo: "", qty: "", fat: "", snf: "" }));
  });

  // Dispatched Details
  const [dispatchedDetails, setDispatchedDetails] = useState<DispatchRow[]>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`dairyhub_shift_report_${defaultDate}`);
        if (saved) {
          const data = JSON.parse(saved);
          if (data.dispatchedDetails) return data.dispatchedDetails;
        }
      }
    } catch (e) {}
    const rows = DEFAULT_DISPATCH_VARIANTS.map(variant => ({
      variant, vehicleNo: "", qty: "", fat: "", snf: ""
    }));
    for (let i = 0; i < 3; i++) {
      rows.push({ variant: "", vehicleNo: "", qty: "", fat: "", snf: "" });
    }
    return rows;
  });

  const lastLoadedDateRef = useRef(date);

  // Load draft when date changes
  useEffect(() => {
    if (date === lastLoadedDateRef.current) return;

    try {
      // 1. Load Daily Milk & Tanker Report
      const storageKey = `dairyhub_shift_report_${date}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.time) setTime(data.time);
        if (data.shift) setShift(data.shift);
        if (data.shiftIncharge) setShiftIncharge(data.shiftIncharge);
        if (data.banasOfficer) setBanasOfficer(data.banasOfficer);
        
        // Filter out old cached default values
        const isOldDefaultCompany = data.companyName && (
          data.companyName.includes("V S Anand") || 
          data.companyName === "V S Anand Foods Processing (MPS Sonipat)"
        );
        setCompanyName(isOldDefaultCompany ? "" : (data.companyName || ""));

        const isOldDefaultLeft = data.leftOfficerLabel && (
          data.leftOfficerLabel.includes("Banas") || 
          data.leftOfficerLabel === "Banas Officer"
        );
        setLeftOfficerLabel(isOldDefaultLeft ? "" : (data.leftOfficerLabel || ""));

        if (data.rightOfficerLabel) {
          const isVsa = data.rightOfficerLabel.includes("VSA");
          setRightOfficerLabel(isVsa ? "Shift Incharge" : data.rightOfficerLabel);
        } else {
          setRightOfficerLabel("Shift Incharge");
        }
        if (data.customRightLabel !== undefined) setCustomRightLabel(data.customRightLabel);
        if (data.closingStock) setClosingStock(data.closingStock);
        if (data.storeInventory) setStoreInventory(data.storeInventory);
        if (data.tankerUnloading) setTankerUnloading(data.tankerUnloading);
        if (data.tankerStanding) setTankerStanding(data.tankerStanding);
        if (data.dispatchedDetails) setDispatchedDetails(data.dispatchedDetails);
      } else {
        // No saved report for this date: load empty templates
        setTime("08:00");
        setShift("Morning (A)");
        setShiftIncharge("");
        setBanasOfficer("");
        
        setClosingStock(DEFAULT_TANKS.map(tank => ({
          tank, variant: "", qty: "", fat: "", snf: "", acidity: "", temp: ""
        })).concat(Array.from({ length: 4 }, () => ({ tank: "", variant: "", qty: "", fat: "", snf: "", acidity: "", temp: "" }))));
        
        setStoreInventory([
          { item: "SUGAR BAG - 50 kg", bags: "", qty: "" },
          { item: "SMP BAG - 25 kg", bags: "", qty: "" },
          { item: "", bags: "", qty: "" }
        ]);
        
        setTankerUnloading(Array.from({ length: 5 }, () => ({ variant: "", tankerNo: "", qty: "", fat: "", snf: "" })));
        setTankerStanding(Array.from({ length: 3 }, () => ({ variant: "", tankerNo: "", qty: "", fat: "", snf: "" })));
        
        setDispatchedDetails(DEFAULT_DISPATCH_VARIANTS.map(variant => ({
          variant, vehicleNo: "", qty: "", fat: "", snf: ""
        })).concat(Array.from({ length: 3 }, () => ({ variant: "", vehicleNo: "", qty: "", fat: "", snf: "" }))));
      }

      // 2. Load Cold Room & Blast Room Closing Report
      const storageKeyCB = `dairyhub_cold_blast_report_${date}`;
      const savedCB = localStorage.getItem(storageKeyCB);
      if (savedCB) {
        const dataCB = JSON.parse(savedCB);
        if (dataCB.companyNameCB) setCompanyNameCB(dataCB.companyNameCB);
        if (dataCB.closingStockCB) setClosingStockCB(mergeColdBlastStock(dataCB.closingStockCB));
      } else {
        setCompanyNameCB("");
        setClosingStockCB(mergeColdBlastStock([]));
      }
      
      lastLoadedDateRef.current = date;
    } catch (e) {
      console.error("Failed to load draft for date", date, e);
    }
  }, [date]);

  // Auto-save draft on data change (Milk & Tanker)
  useEffect(() => {
    if (date !== lastLoadedDateRef.current) return;

    const data = {
      date, time, shift, shiftIncharge, banasOfficer,
      companyName, leftOfficerLabel, rightOfficerLabel, customRightLabel,
      closingStock, storeInventory, tankerUnloading, tankerStanding, dispatchedDetails
    };
    localStorage.setItem(`dairyhub_shift_report_${date}`, JSON.stringify(data));
  }, [date, time, shift, shiftIncharge, banasOfficer, companyName, leftOfficerLabel, rightOfficerLabel, customRightLabel, closingStock, storeInventory, tankerUnloading, tankerStanding, dispatchedDetails]);

  // Auto-save draft on data change (Cold Room & Blast Room)
  useEffect(() => {
    if (date !== lastLoadedDateRef.current) return;

    const dataCB = {
      date, time, shift, shiftIncharge, banasOfficer,
      companyNameCB, leftOfficerLabel, rightOfficerLabel, customRightLabel,
      closingStockCB
    };
    localStorage.setItem(`dairyhub_cold_blast_report_${date}`, JSON.stringify(dataCB));
  }, [date, time, shift, shiftIncharge, banasOfficer, companyNameCB, leftOfficerLabel, rightOfficerLabel, customRightLabel, closingStockCB]);

  // Save reportType on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dairyhub_selected_report_type", reportType);
    }
  }, [reportType]);

  // Reset function
  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear the entire shift report sheet?")) {
      setDate(new Date().toISOString().split('T')[0]);
      setTime("08:00");
      setShift("Morning (A)");
      setShiftIncharge("");
      setBanasOfficer("");
      setLeftOfficerLabel("");
      setRightOfficerLabel("Shift Incharge");
      setCustomRightLabel("");

      if (reportType === "milk_dispatch") {
        setCompanyName("");
        setClosingStock(DEFAULT_TANKS.map(tank => ({
          tank, variant: "", qty: "", fat: "", snf: "", acidity: "", temp: ""
        })).concat(Array.from({ length: 4 }, () => ({ tank: "", variant: "", qty: "", fat: "", snf: "", acidity: "", temp: "" }))));

        setStoreInventory([
          { item: "SUGAR BAG - 50 kg", bags: "", qty: "" },
          { item: "SMP BAG - 25 kg", bags: "", qty: "" },
          { item: "", bags: "", qty: "" }
        ]);

        setTankerUnloading(Array.from({ length: 5 }, () => ({ variant: "", tankerNo: "", qty: "", fat: "", snf: "" })));
        setTankerStanding(Array.from({ length: 3 }, () => ({ variant: "", tankerNo: "", qty: "", fat: "", snf: "" })));
        
        setDispatchedDetails(DEFAULT_DISPATCH_VARIANTS.map(variant => ({
          variant, vehicleNo: "", qty: "", fat: "", snf: ""
        })).concat(Array.from({ length: 3 }, () => ({ variant: "", vehicleNo: "", qty: "", fat: "", snf: "" }))));

        localStorage.removeItem(`dairyhub_shift_report_${date}`);
      } else {
        setCompanyNameCB("V S Anand Foods Processing (MPS Sonipat)");
        const defaultRows = DEFAULT_COLD_BLAST_VARIANTS.map(v => ({
          variant: v.name,
          unitsPerCrate: String(v.unitsPerCrate),
          coldCrates: "",
          coldUbd: "",
          blastCrates: "",
          blastUbd: ""
        }));
        for (let i = 0; i < 5; i++) {
          defaultRows.push({
            variant: "",
            unitsPerCrate: "1",
            coldCrates: "",
            coldUbd: "",
            blastCrates: "",
            blastUbd: ""
          });
        }
        setClosingStockCB(defaultRows);
        localStorage.removeItem(`dairyhub_cold_blast_report_${date}`);
      }

      toast({
        title: "Sheet Cleared",
        description: "All inputs have been reset to blank.",
      });
    }
  };

  // Keyboard navigation for spreadsheet cell focus
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>, 
    tableName: string, 
    rowIndex: number, 
    colIndex: number
  ) => {
    let nextRow = rowIndex;
    let nextCol = colIndex;

    switch (e.key) {
      case 'ArrowUp':
        nextRow = rowIndex - 1;
        break;
      case 'ArrowDown':
        nextRow = rowIndex + 1;
        break;
      case 'ArrowLeft':
        nextCol = colIndex - 1;
        break;
      case 'ArrowRight':
        nextCol = colIndex + 1;
        break;
      default:
        return; // Ignore other keys
    }

    const nextInput = document.querySelector(
      `[data-table="${tableName}"][data-row="${nextRow}"][data-col="${nextCol}"]`
    ) as HTMLInputElement;

    if (nextInput) {
      e.preventDefault();
      nextInput.focus();
      nextInput.select();
    }
  };

  // Calculations
  const calculateTotalClosingStockQty = () => {
    return closingStock.reduce((sum, row) => sum + (parseFloat(row.qty) || 0), 0);
  };

  const calculateTotalUnloadingQty = () => {
    return tankerUnloading.reduce((sum, row) => sum + (parseFloat(row.qty) || 0), 0);
  };

  const calculateTotalStandingQty = () => {
    return tankerStanding.reduce((sum, row) => sum + (parseFloat(row.qty) || 0), 0);
  };

  const calculateTotalDispatchedQty = () => {
    return dispatchedDetails.reduce((sum, row) => sum + (parseFloat(row.qty) || 0), 0);
  };

  // Handling cell edits
  const handleClosingStockChange = (index: number, key: keyof ClosingStockRow, value: string) => {
    const updated = [...closingStock];
    updated[index][key] = value;
    setClosingStock(updated);
  };

  const getRowCalculations = (row: ColdBlastRow) => {
    const packsPerCrate = parseFloat(row.unitsPerCrate) || 1;
    const coldCrates = parseFloat(row.coldCrates) || 0;
    const coldUbd = parseFloat(row.coldUbd) || 0;
    const blastCrates = parseFloat(row.blastCrates) || 0;
    const blastUbd = parseFloat(row.blastUbd) || 0;

    const coldTotal = coldCrates + (coldUbd / packsPerCrate);
    const blastTotal = blastCrates + (blastUbd / packsPerCrate);
    const grandTotal = coldTotal + blastTotal;

    return {
      coldTotal: isNaN(coldTotal) ? 0 : coldTotal,
      blastTotal: isNaN(blastTotal) ? 0 : blastTotal,
      grandTotal: isNaN(grandTotal) ? 0 : grandTotal
    };
  };

  const getColdBlastTotals = () => {
    let totalColdCrates = 0;
    let totalColdUbd = 0;
    let totalColdTotal = 0;
    let totalBlastCrates = 0;
    let totalBlastUbd = 0;
    let totalBlastTotal = 0;
    let totalGrandTotal = 0;

    closingStockCB.forEach(row => {
      if (row.variant || row.coldCrates || row.coldUbd || row.blastCrates || row.blastUbd) {
        const { coldTotal, blastTotal, grandTotal } = getRowCalculations(row);
        totalColdCrates += parseFloat(row.coldCrates) || 0;
        totalColdUbd += parseFloat(row.coldUbd) || 0;
        totalColdTotal += coldTotal;
        totalBlastCrates += parseFloat(row.blastCrates) || 0;
        totalBlastUbd += parseFloat(row.blastUbd) || 0;
        totalBlastTotal += blastTotal;
        totalGrandTotal += grandTotal;
      }
    });

    return {
      coldCrates: totalColdCrates,
      coldUbd: totalColdUbd,
      coldTotal: totalColdTotal,
      blastCrates: totalBlastCrates,
      blastUbd: totalBlastUbd,
      blastTotal: totalBlastTotal,
      grandTotal: totalGrandTotal
    };
  };

  const handleClosingStockCBChange = (index: number, key: keyof ColdBlastRow, value: string) => {
    const updated = [...closingStockCB];
    updated[index][key] = value;
    
    // Auto-calculate unitsPerCrate if variant name changes
    if (key === "variant") {
      updated[index].unitsPerCrate = String(parseUnitsPerCrate(value));
    }
    
    setClosingStockCB(updated);
  };

  const handleStoreChange = (index: number, key: keyof StoreRow, value: string) => {
    const updated = [...storeInventory];
    updated[index][key] = value;
    
    // Auto-calculate Qty based on bag weights
    if (key === "bags") {
      const bagsNum = parseFloat(value) || 0;
      if (updated[index].item.includes("50 kg")) {
        updated[index].qty = String(bagsNum * 50);
      } else if (updated[index].item.includes("25 kg")) {
        updated[index].qty = String(bagsNum * 25);
      }
    }
    
    setStoreInventory(updated);
  };

  const handleUnloadingChange = (index: number, key: keyof TankerRow, value: string) => {
    const updated = [...tankerUnloading];
    updated[index][key] = value;
    setTankerUnloading(updated);
  };

  const handleStandingChange = (index: number, key: keyof TankerRow, value: string) => {
    const updated = [...tankerStanding];
    updated[index][key] = value;
    setTankerStanding(updated);
  };

  const handleDispatchChange = (index: number, key: keyof DispatchRow, value: string) => {
    const updated = [...dispatchedDetails];
    updated[index][key] = value;
    setDispatchedDetails(updated);
  };

  // Export to CSV
  const handleExportCSV = async () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    if (reportType === "milk_dispatch") {
      csvContent += `"${companyName || "SHIFT REPORT"}"\r\n`;
      csvContent += `Date,${date},Time,${time},Shift,${shift},${activeRightLabel || "Shift Incharge"},${shiftIncharge},${leftOfficerLabel || "Officer"},${banasOfficer}\r\n\r\n`;

      // Closing Stock
      csvContent += "CLOSING STOCK\r\n";
      csvContent += "TANK,VARIENT,Qty (kg),%FAT,%SNF,Acidity,Temp.\r\n";
      closingStock.forEach(row => {
        if (row.tank || row.variant || row.qty) {
          csvContent += `"${row.tank}","${row.variant}","${row.qty}","${row.fat}","${row.snf}","${row.acidity}","${row.temp}"\r\n`;
        }
      });
      csvContent += `TOTAL CLOSING STOCK,,${calculateTotalClosingStockQty()},,,,\r\n\r\n`;

      // Store
      csvContent += "STORE INVENTORY\r\n";
      csvContent += "ITEM,No of Bags,Qty (kg)\r\n";
      storeInventory.forEach(row => {
        if (row.item || row.bags || row.qty) {
          csvContent += `"${row.item}","${row.bags}","${row.qty}"\r\n`;
        }
      });
      csvContent += "\r\n";

      // Tanker Unloading
      csvContent += "TANKER UNLOADING\r\n";
      csvContent += "Varient,Tanker No.,Qty (kg),% Fat,% SNF\r\n";
      tankerUnloading.forEach(row => {
        if (row.variant || row.tankerNo || row.qty) {
          csvContent += `"${row.variant}","${row.tankerNo}","${row.qty}","${row.fat}","${row.snf}"\r\n`;
        }
      });
      csvContent += `TOTAL UNLOADING,,${calculateTotalUnloadingQty()},,\r\n\r\n`;

      // Tanker Standing
      csvContent += "TANKER STANDING ON DOCK\r\n";
      csvContent += "Varient,Tanker No.,Qty (kg),% Fat,% SNF\r\n";
      tankerStanding.forEach(row => {
        if (row.variant || row.tankerNo || row.qty) {
          csvContent += `"${row.variant}","${row.tankerNo}","${row.qty}","${row.fat}","${row.snf}"\r\n`;
        }
      });
      csvContent += `TOTAL STANDING,,${calculateTotalStandingQty()},,\r\n\r\n`;

      // Dispatched
      csvContent += "DISPATCHED DETAILS\r\n";
      csvContent += "Varient,Veh. No. / Party,Qty (kg),% Fat,% SNF\r\n";
      dispatchedDetails.forEach(row => {
        if (row.variant || row.vehicleNo || row.qty) {
          csvContent += `"${row.variant}","${row.vehicleNo}","${row.qty}","${row.fat}","${row.snf}"\r\n`;
        }
      });
      csvContent += `TOTAL DISPATCHED,,${calculateTotalDispatchedQty()},,\r\n`;
    } else {
      csvContent += `"${companyNameCB || "CLOSING STOCK REPORT"}"\r\n`;
      csvContent += `Date,${date},Time,${time},Shift,${shift},${activeRightLabel || "Shift Incharge"},${shiftIncharge},${leftOfficerLabel || "Officer"},${banasOfficer}\r\n\r\n`;

      csvContent += "CLOSING STOCK (COLD ROOM & BLAST ROOM)\r\n";
      csvContent += "VARIENT,COLD ROOM CRATES,COLD ROOM UBD,COLD ROOM TOTAL,BLAST ROOM CRATES,BLAST ROOM UBD,BLAST ROOM TOTAL,GRAND TOTAL CRATES\r\n";
      
      closingStockCB.forEach(row => {
        if (row.variant || row.coldCrates || row.coldUbd || row.blastCrates || row.blastUbd) {
          const calcs = getRowCalculations(row);
          csvContent += `"${row.variant}","${row.coldCrates}","${row.coldUbd}","${calcs.coldTotal.toFixed(2)}","${row.blastCrates}","${row.blastUbd}","${calcs.blastTotal.toFixed(2)}","${calcs.grandTotal.toFixed(2)}"\r\n`;
        }
      });

      const totalsCB = getColdBlastTotals();
      csvContent += `TOTALS,${totalsCB.coldCrates},${totalsCB.coldUbd},${totalsCB.coldTotal.toFixed(2)},${totalsCB.blastCrates},${totalsCB.blastUbd},${totalsCB.blastTotal.toFixed(2)},${totalsCB.grandTotal.toFixed(2)}\r\n`;
    }

    const cleanCsvText = csvContent.replace(/^data:text\/csv;charset=utf-8,/, "");
    await saveFile(cleanCsvText, `${reportType === "milk_dispatch" ? "Shift_Report" : "Cold_Blast_Report"}_${date}_${shift.replace(/\s+/g, '_')}.csv`, "text/csv;charset=utf-8;");

    toast({
      title: "Export Success",
      description: "Shift report exported successfully as CSV.",
    });
  };

  // Generate PDF Blob for Sharing
  const generatePDFBlob = async (): Promise<Blob | null> => {
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    tempDiv.style.top = "-9999px";
    tempDiv.style.width = "750px";
    tempDiv.style.background = "white";
    tempDiv.style.color = "black";
    
    if (reportType === "milk_dispatch") {
      const closingStockRowsHtml = closingStock
        .filter(r => r.tank || r.variant || r.qty)
        .map(r => `
          <tr>
            <td>${r.tank || ""}</td>
            <td>${r.variant || ""}</td>
            <td style="text-align: right;">${r.qty || ""}</td>
            <td style="text-align: right;">${r.fat || ""}</td>
            <td style="text-align: right;">${r.snf || ""}</td>
            <td style="text-align: right;">${r.acidity || ""}</td>
            <td style="text-align: right;">${r.temp || ""}</td>
          </tr>
        `).join("");

      const storeRowsHtml = storeInventory
        .filter(r => r.item || r.bags || r.qty)
        .map(r => `
          <tr>
            <td>${r.item || ""}</td>
            <td style="text-align: right;">${r.bags || ""}</td>
            <td style="text-align: right;">${r.qty || ""}</td>
            <td></td><td></td><td></td><td></td>
          </tr>
        `).join("");

      const unloadingRowsHtml = tankerUnloading
        .map(r => `
          <tr>
            <td>${r.variant || ""}</td>
            <td>${r.tankerNo || ""}</td>
            <td style="text-align: right;">${r.qty || ""}</td>
            <td style="text-align: right;">${r.fat || ""}</td>
            <td style="text-align: right;">${r.snf || ""}</td>
          </tr>
        `).join("");

      const standingRowsHtml = tankerStanding
        .map(r => `
          <tr>
            <td>${r.variant || ""}</td>
            <td>${r.tankerNo || ""}</td>
            <td style="text-align: right;">${r.qty || ""}</td>
            <td style="text-align: right;">${r.fat || ""}</td>
            <td style="text-align: right;">${r.snf || ""}</td>
          </tr>
        `).join("");

      const dispatchRowsHtml = dispatchedDetails
        .filter(r => r.variant || r.vehicleNo || r.qty)
        .map(r => `
          <tr>
            <td>${r.variant || ""}</td>
            <td>${r.vehicleNo || ""}</td>
            <td style="text-align: right;">${r.qty || ""}</td>
            <td style="text-align: right;">${r.fat || ""}</td>
            <td style="text-align: right;">${r.snf || ""}</td>
          </tr>
        `).join("");

      tempDiv.innerHTML = `
        <div style="font-family: Arial, sans-serif; font-size: 9px; padding: 20px; color: #000; background: #fff; width: 710px; box-sizing: border-box;">
          <div style="text-align: center; border: 1.5px solid #000; padding: 5px; font-size: 13px; font-weight: bold; margin-bottom: 8px; letter-spacing: 0.5px;">
            ${companyName || "SHIFT REPORT"}
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; border: 1px solid #000; padding: 5px; margin-bottom: 10px; font-size: 8px; font-weight: bold;">
            <div>DATE: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${date}</span></div>
            <div>TIME: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${time}</span></div>
            <div>SHIFT: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${shift}</span></div>
            <div>SHIFT INCHARGE: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${shiftIncharge}</span></div>
          </div>

          <div style="display: grid; grid-template-columns: 1.3fr 1fr; gap: 12px; align-items: start;">
            <!-- Left Column -->
            <div>
              <div style="font-size: 8px; font-weight: bold; text-align: center; border: 1px solid #000; border-bottom: none; padding: 3px; background: #f2f2f2;">CLOSING STOCK</div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 8px;">
                <thead>
                  <tr style="background: #f2f2f2;">
                    <th style="border: 1px solid #000; padding: 3px; text-align: left; font-size: 8px;">TANK</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: left; font-size: 8px;">VARIENT</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right; font-size: 8px;">Qty (kg)</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right; font-size: 8px;">%FAT</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right; font-size: 8px;">%SNF</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right; font-size: 8px;">Acidity</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right; font-size: 8px;">Temp.</th>
                  </tr>
                </thead>
                <tbody>
                  ${closingStockRowsHtml}
                  <tr style="font-weight: bold; background: #f9f9f9;">
                    <td colspan="2" style="border: 1px solid #000; padding: 3px;">TOTAL</td>
                    <td style="border: 1px solid #000; padding: 3px; text-align: right;">${calculateTotalClosingStockQty().toFixed(1)}</td>
                    <td style="border: 1px solid #000;"></td><td style="border: 1px solid #000;"></td><td style="border: 1px solid #000;"></td><td style="border: 1px solid #000;"></td>
                  </tr>
                  <tr>
                    <td colspan="7" style="font-size: 8px; font-weight: bold; text-align: center; border: 1px solid #000; padding: 2px; background: #f2f2f2; border-top: none;">STORE</td>
                  </tr>
                  <tr style="font-weight: bold; background: #f9f9f9;">
                    <td style="border: 1px solid #000; padding: 3px;">STORE ITEM</td>
                    <td colspan="2" style="border: 1px solid #000; padding: 3px; text-align: center;">No of Bags</td>
                    <td colspan="4" style="border: 1px solid #000; padding: 3px; text-align: center;">Qty (kg)</td>
                  </tr>
                  ${storeRowsHtml}
                </tbody>
              </table>
            </div>

            <!-- Right Column -->
            <div>
              <div style="font-size: 8px; font-weight: bold; text-align: center; border: 1px solid #000; border-bottom: none; padding: 3px; background: #f2f2f2;">Tanker Unloading</div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 8px;">
                <thead>
                  <tr style="background: #f2f2f2;">
                    <th style="border: 1px solid #000; padding: 3px; text-align: left;">Varient</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: left;">Tanker No.</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">Qty (kg)</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">% Fat</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">% SNF</th>
                  </tr>
                </thead>
                <tbody>
                  ${unloadingRowsHtml}
                  <tr style="font-weight: bold; background: #f9f9f9;">
                    <td colspan="2" style="border: 1px solid #000; padding: 3px;">TOTAL</td>
                    <td style="border: 1px solid #000; padding: 3px; text-align: right;">${calculateTotalUnloadingQty().toFixed(1)}</td>
                    <td style="border: 1px solid #000;"></td><td style="border: 1px solid #000;"></td>
                  </tr>
                </tbody>
              </table>

              <div style="font-size: 8px; font-weight: bold; text-align: center; border: 1px solid #000; border-bottom: none; padding: 3px; background: #f2f2f2;">Tanker Standing on Dock</div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 8px;">
                <thead>
                  <tr style="background: #f2f2f2;">
                    <th style="border: 1px solid #000; padding: 3px; text-align: left;">Varient</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: left;">Tanker No.</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">Qty (kg)</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">% Fat</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">% SNF</th>
                  </tr>
                </thead>
                <tbody>
                  ${standingRowsHtml}
                  <tr style="font-weight: bold; background: #f9f9f9;">
                    <td colspan="2" style="border: 1px solid #000; padding: 3px;">TOTAL</td>
                    <td style="border: 1px solid #000; padding: 3px; text-align: right;">${calculateTotalStandingQty().toFixed(1)}</td>
                    <td style="border: 1px solid #000;"></td><td style="border: 1px solid #000;"></td>
                  </tr>
                </tbody>
              </table>

              <div style="font-size: 8px; font-weight: bold; text-align: center; border: 1px solid #000; border-bottom: none; padding: 3px; background: #f2f2f2;">Dispatched Details</div>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 8px;">
                <thead>
                  <tr style="background: #f2f2f2;">
                    <th style="border: 1px solid #000; padding: 3px; text-align: left;">Varient</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: left;">Veh. No. / Party</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">Qty (kg)</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">% Fat</th>
                    <th style="border: 1px solid #000; padding: 3px; text-align: right;">% SNF</th>
                  </tr>
                </thead>
                <tbody>
                  ${dispatchRowsHtml}
                  <tr style="font-weight: bold; background: #f9f9f9;">
                    <td colspan="2" style="border: 1px solid #000; padding: 3px;">TOTAL</td>
                    <td style="border: 1px solid #000; padding: 3px; text-align: right;">${calculateTotalDispatchedQty().toFixed(1)}</td>
                    <td style="border: 1px solid #000;"></td><td style="border: 1px solid #000;"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style="margin-top: 30px; display: flex; justify-content: space-between; padding: 0 20px;">
            <div style="width: 140px; border-top: 1px solid #000; text-align: center; padding-top: 4px; font-weight: bold; font-size: 8px;">
              (${leftOfficerLabel ? leftOfficerLabel : "............................"})
              <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${banasOfficer || "_________________"}</div>
            </div>
            <div style="width: 140px; border-top: 1px solid #000; text-align: center; padding-top: 4px; font-weight: bold; font-size: 8px;">
              (${activeRightLabel ? activeRightLabel : "............................"})
              <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${shiftIncharge || "_________________"}</div>
            </div>
          </div>
        </div>
      `;
    } else {
      const coldBlastRowsHtml = closingStockCB
        .map(r => {
          const hasValues = r.variant || r.coldCrates || r.coldUbd || r.blastCrates || r.blastUbd;
          if (!r.variant && !hasValues) {
            return `
              <tr style="height: 15px;">
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
              </tr>
            `;
          }
          const calcs = getRowCalculations(r);
          return `
            <tr>
              <td style="border: 1px solid #000; padding: 3px;">${r.variant || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.coldCrates || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.coldUbd || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(calcs.coldTotal)}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.blastCrates || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.blastUbd || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(calcs.blastTotal)}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(calcs.grandTotal)}</td>
            </tr>
          `;
        }).join("");

      const totalsCB = getColdBlastTotals();
      tempDiv.innerHTML = `
        <div style="font-family: Arial, sans-serif; font-size: 9px; padding: 20px; color: #000; background: #fff; width: 710px; box-sizing: border-box;">
          <div style="text-align: center; border: 1.5px solid #000; padding: 5px; font-size: 13px; font-weight: bold; margin-bottom: 8px; letter-spacing: 0.5px;">
            ${companyNameCB || "V S Anand Foods Processing (MPS Sonipat)"}
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; border: 1px solid #000; padding: 5px; margin-bottom: 10px; font-size: 8px; font-weight: bold;">
            <div>DATE: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${date}</span></div>
            <div>TIME: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${time}</span></div>
            <div>SHIFT: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${shift}</span></div>
            <div>SHIFT INCHARGE: <span style="font-weight: normal; border-bottom: 1px dotted #000; margin-left: 4px;">${shiftIncharge}</span></div>
          </div>

          <div style="font-size: 8px; font-weight: bold; text-align: center; border: 1px solid #000; border-bottom: none; padding: 3px; background: #f2f2f2;">CLOSING STOCK</div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 8px;">
            <thead>
              <tr style="background: #f2f2f2;">
                <th rowspan="2" style="border: 1px solid #000; padding: 3px; text-align: left; width: 35%;">VARIENT</th>
                <th colspan="3" style="border: 1px solid #000; padding: 3px; text-align: center;">COLD ROOM</th>
                <th colspan="3" style="border: 1px solid #000; padding: 3px; text-align: center;">BLAST ROOM</th>
                <th rowspan="2" style="border: 1px solid #000; padding: 3px; text-align: center; width: 12%;">G. TOTAL<br>CRATES</th>
              </tr>
              <tr style="background: #f2f2f2;">
                <th style="border: 1px solid #000; padding: 3px; text-align: center; width: 9%;">CRATES</th>
                <th style="border: 1px solid #000; padding: 3px; text-align: center; width: 9%;">UBD</th>
                <th style="border: 1px solid #000; padding: 3px; text-align: center; width: 13%;">TOTAL CRATES</th>
                <th style="border: 1px solid #000; padding: 3px; text-align: center; width: 9%;">CRATES</th>
                <th style="border: 1px solid #000; padding: 3px; text-align: center; width: 9%;">UBD</th>
                <th style="border: 1px solid #000; padding: 3px; text-align: center; width: 13%;">TOTAL CRATES</th>
              </tr>
            </thead>
            <tbody>
              ${coldBlastRowsHtml}
              <tr style="font-weight: bold; background: #f2f2f2;">
                <td style="border: 1px solid #000; padding: 3px;">TOTAL</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.coldCrates || ""}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.coldUbd || ""}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(totalsCB.coldTotal)}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.blastCrates || ""}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.blastUbd || ""}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(totalsCB.blastTotal)}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(totalsCB.grandTotal)}</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 30px; display: flex; justify-content: space-between; padding: 0 20px;">
            <div style="width: 140px; border-top: 1px solid #000; text-align: center; padding-top: 4px; font-weight: bold; font-size: 8px;">
              (${leftOfficerLabel ? leftOfficerLabel : "Officer"})
              <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${banasOfficer || "_________________"}</div>
            </div>
            <div style="width: 140px; border-top: 1px solid #000; text-align: center; padding-top: 4px; font-weight: bold; font-size: 8px;">
              (Incharge)
              <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${shiftIncharge || "_________________"}</div>
            </div>
          </div>
        </div>
      `;
    }

    document.body.appendChild(tempDiv);
    
    try {
      const canvas = await html2canvas(tempDiv, { scale: 2 });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
      return pdf.output("blob");
    } catch (error) {
      console.error("PDF Blob generation failed", error);
      return null;
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  const handleWhatsAppShare = async () => {
    toast({
      title: "Generating PDF...",
      description: "Please wait while we generate the report PDF.",
    });
    
    const blob = await generatePDFBlob();
    if (!blob) {
      toast({
        title: "Share Failed",
        description: "Could not compile the PDF report.",
        variant: "destructive",
      });
      return;
    }
    
    const file = new File([blob], `Shift_Report_${date}.pdf`, { type: "application/pdf" });
    
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: "Daily Shift Report",
          text: `Please find attached the Shift Report for ${date} (${shift}). Generated by Dairy Hub app.`
        });
      } catch (err) {
        console.log("Web Share API failed, falling back to link sharing", err);
        const text = `Shift Report - Date: ${date}, Shift: ${shift}. Generated by Dairy Hub app.`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
      }
    } else {
      const text = `Shift Report - Date: ${date}, Shift: ${shift}. Generated by Dairy Hub app.`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
      
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Shift_Report_${date}.pdf`;
      link.click();
      toast({
        title: "WhatsApp opened & PDF downloaded",
        description: "PDF direct attachment is not supported in this browser. Please attach the downloaded PDF manually.",
      });
    }
  };

  const handleEmailShare = async () => {
    toast({
      title: "Generating PDF...",
      description: "Please wait while we generate the report PDF.",
    });
    
    const blob = await generatePDFBlob();
    if (!blob) {
      toast({
        title: "Share Failed",
        description: "Could not compile the PDF report.",
        variant: "destructive",
      });
      return;
    }
    
    const file = new File([blob], `Shift_Report_${date}.pdf`, { type: "application/pdf" });
    
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: `Shift Report - ${date}`,
          text: `Please find attached the Shift Report for ${date} (${shift}). Generated by Dairy Hub app.`
        });
      } catch (err) {
        const subject = `Shift Report - ${date} (${shift})`;
        const body = `Hi,\n\nPlease find attached the Shift Report for ${date} (${shift}).\n\nGenerated by Dairy Hub app.`;
        window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
      }
    } else {
      const subject = `Shift Report - ${date} (${shift})`;
      const body = `Hi,\n\nPlease find attached the Shift Report for ${date} (${shift}).\n\nGenerated by Dairy Hub app.`;
      window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
      
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Shift_Report_${date}.pdf`;
      link.click();
      toast({
        title: "Email opened & PDF downloaded",
        description: "PDF direct attachment is not supported in this browser. Please attach the downloaded PDF manually.",
      });
    }
  };
  // getMonthlyReportData aggregates daily reports for a given month and year
  const getMonthlyReportData = (year: number, month: number) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const list = [];
    
    if (reportType === "milk_dispatch") {
      let grandUnloaded = 0;
      let grandStanding = 0;
      let grandDispatched = 0;
      let lastClosingStockRows: ClosingStockRow[] = [];
      let lastDateWithData = "";

      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const saved = localStorage.getItem(`dairyhub_shift_report_${dateStr}`);
        if (saved) {
          try {
            const data = JSON.parse(saved);
            
            let totalClosingQty = 0;
            if (data.closingStock && Array.isArray(data.closingStock)) {
              totalClosingQty = data.closingStock.reduce((acc: number, row: any) => {
                const val = parseFloat(row.qty);
                return acc + (isNaN(val) ? 0 : val);
              }, 0);
              
              lastClosingStockRows = data.closingStock;
              lastDateWithData = dateStr;
            }

            let totalUnloadedQty = 0;
            if (data.tankerUnloading && Array.isArray(data.tankerUnloading)) {
              totalUnloadedQty = data.tankerUnloading.reduce((acc: number, row: any) => {
                const val = parseFloat(row.qty);
                return acc + (isNaN(val) ? 0 : val);
              }, 0);
            }

            let totalStandingQty = 0;
            if (data.tankerStanding && Array.isArray(data.tankerStanding)) {
              totalStandingQty = data.tankerStanding.reduce((acc: number, row: any) => {
                const val = parseFloat(row.qty);
                return acc + (isNaN(val) ? 0 : val);
              }, 0);
            }

            let totalDispatchedQty = 0;
            if (data.dispatchedDetails && Array.isArray(data.dispatchedDetails)) {
              totalDispatchedQty = data.dispatchedDetails.reduce((acc: number, row: any) => {
                const val = parseFloat(row.qty);
                return acc + (isNaN(val) ? 0 : val);
              }, 0);
            }

            grandUnloaded += totalUnloadedQty;
            grandStanding += totalStandingQty;
            grandDispatched += totalDispatchedQty;

            list.push({
              date: dateStr,
              shift: data.shift || "Morning (A)",
              shiftIncharge: data.shiftIncharge || "—",
              closingStockQty: totalClosingQty,
              unloadedQty: totalUnloadedQty,
              standingQty: totalStandingQty,
              dispatchedQty: totalDispatchedQty,
              hasData: true
            });
          } catch (e) {
            console.error("Failed to parse daily data for", dateStr, e);
            list.push({
              date: dateStr,
              shift: "—",
              shiftIncharge: "—",
              closingStockQty: 0,
              unloadedQty: 0,
              standingQty: 0,
              dispatchedQty: 0,
              hasData: false
            });
          }
        } else {
          list.push({
            date: dateStr,
            shift: "—",
            shiftIncharge: "—",
            closingStockQty: 0,
            unloadedQty: 0,
            standingQty: 0,
            dispatchedQty: 0,
            hasData: false
          });
        }
      }

      return {
        dailyList: list,
        grandTotals: {
          unloaded: grandUnloaded,
          standing: grandStanding,
          dispatched: grandDispatched
        },
        monthEndClosingStock: lastClosingStockRows,
        lastDateWithData
      };
    } else {
      // cold_blast_closing
      let grandColdCrates = 0;
      let grandColdUbd = 0;
      let grandColdTotal = 0;
      let grandBlastCrates = 0;
      let grandBlastUbd = 0;
      let grandBlastTotal = 0;
      let grandGrandTotal = 0;
      let lastClosingStockRowsCB: ColdBlastRow[] = [];
      let lastDateWithData = "";

      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const saved = localStorage.getItem(`dairyhub_cold_blast_report_${dateStr}`);
        if (saved) {
          try {
            const data = JSON.parse(saved);
            
            let dayColdCrates = 0;
            let dayColdUbd = 0;
            let dayColdTotal = 0;
            let dayBlastCrates = 0;
            let dayBlastUbd = 0;
            let dayBlastTotal = 0;
            let dayGrandTotal = 0;

            if (data.closingStockCB && Array.isArray(data.closingStockCB)) {
              data.closingStockCB.forEach((row: any) => {
                const cc = parseFloat(row.coldCrates) || 0;
                const cu = parseFloat(row.coldUbd) || 0;
                const bc = parseFloat(row.blastCrates) || 0;
                const bu = parseFloat(row.blastUbd) || 0;
                const packs = parseFloat(row.unitsPerCrate) || 1;

                const cTotal = cc + (cu / packs);
                const bTotal = bc + (bu / packs);
                const gTotal = cTotal + bTotal;

                dayColdCrates += cc;
                dayColdUbd += cu;
                dayColdTotal += cTotal;
                dayBlastCrates += bc;
                dayBlastUbd += bu;
                dayBlastTotal += bTotal;
                dayGrandTotal += gTotal;
              });

              lastClosingStockRowsCB = data.closingStockCB;
              lastDateWithData = dateStr;
            }

            grandColdCrates += dayColdCrates;
            grandColdUbd += dayColdUbd;
            grandColdTotal += dayColdTotal;
            grandBlastCrates += dayBlastCrates;
            grandBlastUbd += dayBlastUbd;
            grandBlastTotal += dayBlastTotal;
            grandGrandTotal += dayGrandTotal;

            list.push({
              date: dateStr,
              shift: data.shift || "Morning (A)",
              shiftIncharge: data.shiftIncharge || "—",
              coldCrates: dayColdCrates,
              coldUbd: dayColdUbd,
              coldTotal: dayColdTotal,
              blastCrates: dayBlastCrates,
              blastUbd: dayBlastUbd,
              blastTotal: dayBlastTotal,
              grandTotal: dayGrandTotal,
              hasData: true
            });
          } catch (e) {
            console.error("Failed to parse daily cold room data for", dateStr, e);
            list.push({
              date: dateStr,
              shift: "—",
              shiftIncharge: "—",
              coldCrates: 0,
              coldUbd: 0,
              coldTotal: 0,
              blastCrates: 0,
              blastUbd: 0,
              blastTotal: 0,
              grandTotal: 0,
              hasData: false
            });
          }
        } else {
          list.push({
            date: dateStr,
            shift: "—",
            shiftIncharge: "—",
            coldCrates: 0,
            coldUbd: 0,
            coldTotal: 0,
            blastCrates: 0,
            blastUbd: 0,
            blastTotal: 0,
            grandTotal: 0,
            hasData: false
          });
        }
      }

      return {
        dailyList: list,
        grandTotals: {
          coldCrates: grandColdCrates,
          coldUbd: grandColdUbd,
          coldTotal: grandColdTotal,
          blastCrates: grandBlastCrates,
          blastUbd: grandBlastUbd,
          blastTotal: grandBlastTotal,
          grandTotal: grandGrandTotal
        },
        monthEndClosingStockCB: lastClosingStockRowsCB,
        lastDateWithData
      };
    }
  };

  const handleExportMonthlyCSV = async (year: number, month: number, reportData: any) => {
    let csvContent = "data:text/csv;charset=utf-8,";
    
    if (reportType === "milk_dispatch") {
      csvContent += `"MONTHLY SHIFT REPORT SUMMARY - ${String(month).padStart(2, '0')}/${year}"\r\n\r\n`;
      csvContent += "Date,Shift,Shift Incharge,Closing Stock (kg),Tankers Unloaded (kg),Tankers Standing (kg),Dispatched Qty (kg)\r\n";
      
      reportData.dailyList.forEach((r: any) => {
        csvContent += `${r.date},${r.shift},"${(r.shiftIncharge || "").replace(/"/g, '""')}",${r.closingStockQty},${r.unloadedQty},${r.standingQty},${r.dispatchedQty}\r\n`;
      });

      csvContent += `\r\nTOTALS,,,0,${reportData.grandTotals.unloaded},${reportData.grandTotals.standing},${reportData.grandTotals.dispatched}\r\n`;
    } else {
      csvContent += `"MONTHLY COLD ROOM SUMMARY - ${String(month).padStart(2, '0')}/${year}"\r\n\r\n`;
      csvContent += "Date,Shift,Shift Incharge,Cold Room Crates,Cold Room UBD,Cold Room Total,Blast Room Crates,Blast Room UBD,Blast Room Total,Grand Total Crates\r\n";
      
      reportData.dailyList.forEach((r: any) => {
        csvContent += `${r.date},${r.shift},"${(r.shiftIncharge || "").replace(/"/g, '""')}",${r.coldCrates},${r.coldUbd},${r.coldTotal.toFixed(2)},${r.blastCrates},${r.blastUbd},${r.blastTotal.toFixed(2)},${r.grandTotal.toFixed(2)}\r\n`;
      });

      const totals = reportData.grandTotals;
      csvContent += `\r\nTOTALS,,,${totals.coldCrates},${totals.coldUbd},${totals.coldTotal.toFixed(2)},${totals.blastCrates},${totals.blastUbd},${totals.blastTotal.toFixed(2)},${totals.grandTotal.toFixed(2)}\r\n`;
    }

    const cleanCsvText = csvContent.replace(/^data:text\/csv;charset=utf-8,/, "");
    await saveFile(cleanCsvText, `Monthly_${reportType === "milk_dispatch" ? "Shift" : "Cold_Room"}_Summary_${year}_${month}.csv`, "text/csv;charset=utf-8;");

    toast({
      title: "Export Success",
      description: "Monthly summary exported successfully as CSV.",
    });
  };

  const handlePrintMonthlySummary = (year: number, month: number, reportData: any) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      toast({
        title: "Print Failed",
        description: "Pop-up blocker is preventing the print window from opening.",
        variant: "destructive"
      });
      return;
    }

    let htmlContent = "";

    if (reportType === "milk_dispatch") {
      const tableRowsHtml = reportData.dailyList.map((r: any) => `
        <tr>
          <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">${r.date}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: center;">${r.shift}</td>
          <td style="border: 1px solid #000; padding: 4px;">${r.shiftIncharge}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right; font-weight: 500;">${r.hasData ? r.closingStockQty.toFixed(1) : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.unloadedQty.toFixed(1) : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.standingQty.toFixed(1) : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.dispatchedQty.toFixed(1) : "—"}</td>
        </tr>
      `).join("");

      const monthEndStockRowsHtml = reportData.monthEndClosingStock && reportData.monthEndClosingStock.length > 0
        ? reportData.monthEndClosingStock
            .filter((r: any) => r.tank || r.variant || r.qty)
            .map((r: any) => `
              <tr>
                <td style="border: 1px solid #000; padding: 3px;">${r.tank || "—"}</td>
                <td style="border: 1px solid #000; padding: 3px;">${r.variant || "—"}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.qty || "—"}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.fat || "—"}</td>
                <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.snf || "—"}</td>
              </tr>
            `).join("")
        : `<tr><td colspan="5" style="border: 1px solid #000; padding: 6px; text-align: center; color: #777;">No closing stock recorded in this month</td></tr>`;

      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Monthly Summary - Generated by Dairy Hub app</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 10mm;
              }
              body {
                font-family: Arial, sans-serif;
                font-size: 8px;
                color: #000;
                line-height: 1.2;
              }
              .header {
                text-align: center;
                font-size: 13px;
                font-weight: bold;
                border: 1.5px solid #000;
                padding: 5px;
                margin-bottom: 12px;
              }
              .title {
                font-size: 10px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 10px;
                text-decoration: underline;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 12px;
              }
              th, td {
                border: 1px solid #000;
                padding: 3px 4px;
              }
              th {
                background-color: #f2f2f2;
                font-weight: bold;
              }
              .totals-row {
                font-weight: bold;
                background-color: #f9f9f9;
              }
              .flex-container {
                display: flex;
                gap: 15px;
                margin-top: 15px;
              }
              .flex-child {
                flex: 1;
              }
            </style>
          </head>
          <body>
            <div class="header">
              ${companyName || "SHIFT REPORT MONTHLY SUMMARY"}
            </div>
            <div class="title">
              MONTHLY SUMMARY REPORT FOR: ${String(month).padStart(2, '0')}/${year}
            </div>

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Shift</th>
                  <th>Shift Incharge</th>
                  <th>Closing Stock (kg)</th>
                  <th>Tankers Unloaded (kg)</th>
                  <th>Tankers Standing (kg)</th>
                  <th>Dispatched (kg)</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
                <tr class="totals-row">
                  <td colspan="3">GRAND TOTALS</td>
                  <td style="text-align: right;">—</td>
                  <td style="text-align: right;">${reportData.grandTotals.unloaded.toFixed(1)}</td>
                  <td style="text-align: right;">${reportData.grandTotals.standing.toFixed(1)}</td>
                  <td style="text-align: right;">${reportData.grandTotals.dispatched.toFixed(1)}</td>
                </tr>
              </tbody>
            </table>

            <div class="flex-container">
              <div class="flex-child" style="flex: 1.2;">
                <div style="font-weight: bold; font-size: 9px; margin-bottom: 4px; text-transform: uppercase;">
                  Month-End Closing Stock Balance (as of ${reportData.lastDateWithData || "No Data"})
                </div>
                <table>
                  <thead>
                    <tr style="background-color: #f2f2f2;">
                      <th>Tank</th>
                      <th>Varient</th>
                      <th>Qty (kg)</th>
                      <th>% Fat</th>
                      <th>% SNF</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${monthEndStockRowsHtml}
                  </tbody>
                </table>
              </div>

              <div class="flex-child" style="display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; padding: 0 10px; margin-top: 50px;">
                  <div style="width: 110px; border-top: 1px solid #000; text-align: center; padding-top: 3px; font-weight: bold; font-size: 8px;">
                    (${leftOfficerLabel ? leftOfficerLabel : "Officer"})
                  </div>
                  <div style="width: 110px; border-top: 1px solid #000; text-align: center; padding-top: 3px; font-weight: bold; font-size: 8px;">
                    (${activeRightLabel ? activeRightLabel : "Shift Incharge"})
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 25px; text-align: center; text-transform: uppercase; font-size: 8px; font-weight: bold; font-family: Arial, sans-serif; letter-spacing: 1px;">
              POWERED BY DAIRY HUB ERP SYSTEM
            </div>
          </body>
        </html>
      `;
    } else {
      const tableRowsHtml = reportData.dailyList.map((r: any) => `
        <tr>
          <td style="border: 1px solid #000; padding: 4px; font-weight: bold;">${r.date}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: center;">${r.shift}</td>
          <td style="border: 1px solid #000; padding: 4px;">${r.shiftIncharge}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.coldCrates : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.coldUbd : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right; font-weight: bold;">${r.hasData ? r.coldTotal.toFixed(2) : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.blastCrates : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right;">${r.hasData ? r.blastUbd : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right; font-weight: bold;">${r.hasData ? r.blastTotal.toFixed(2) : "—"}</td>
          <td style="border: 1px solid #000; padding: 4px; text-align: right; font-weight: bold;">${r.hasData ? r.grandTotal.toFixed(2) : "—"}</td>
        </tr>
      `).join("");

      const monthEndStockRowsHtml = reportData.monthEndClosingStockCB && reportData.monthEndClosingStockCB.length > 0
        ? reportData.monthEndClosingStockCB
            .filter((r: any) => r.variant || r.coldCrates || r.coldUbd || r.blastCrates || r.blastUbd)
            .map((r: any) => {
              const cc = parseFloat(r.coldCrates) || 0;
              const cu = parseFloat(r.coldUbd) || 0;
              const bc = parseFloat(r.blastCrates) || 0;
              const bu = parseFloat(r.blastUbd) || 0;
              const packs = parseFloat(r.unitsPerCrate) || 1;
              const cTotal = cc + (cu / packs);
              const bTotal = bc + (bu / packs);
              const gTotal = cTotal + bTotal;
              return `
                <tr>
                  <td style="border: 1px solid #000; padding: 3px;">${r.variant || "—"}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.coldCrates || "—"}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.coldUbd || "—"}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${cTotal.toFixed(2)}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.blastCrates || "—"}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.blastUbd || "—"}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${bTotal.toFixed(2)}</td>
                  <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${gTotal.toFixed(2)}</td>
                </tr>
              `;
            }).join("")
        : `<tr><td colspan="8" style="border: 1px solid #000; padding: 6px; text-align: center; color: #777;">No closing stock recorded in this month</td></tr>`;

      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Monthly Cold Room Summary - Generated by Dairy Hub app</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 10mm;
              }
              body {
                font-family: Arial, sans-serif;
                font-size: 8px;
                color: #000;
                line-height: 1.2;
              }
              .header {
                text-align: center;
                font-size: 13px;
                font-weight: bold;
                border: 1.5px solid #000;
                padding: 5px;
                margin-bottom: 12px;
              }
              .title {
                font-size: 10px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 10px;
                text-decoration: underline;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 12px;
              }
              th, td {
                border: 1px solid #000;
                padding: 3px 4px;
              }
              th {
                background-color: #f2f2f2;
                font-weight: bold;
              }
              .totals-row {
                font-weight: bold;
                background-color: #f9f9f9;
              }
              .flex-container {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 15px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              ${companyNameCB || "COLD ROOM MONTHLY SUMMARY"}
            </div>
            <div class="title">
              MONTHLY SUMMARY REPORT FOR: ${String(month).padStart(2, '0')}/${year}
            </div>

            <table>
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th rowspan="2">Date</th>
                  <th rowspan="2">Shift</th>
                  <th rowspan="2">Shift Incharge</th>
                  <th colspan="3" style="text-align: center;">COLD ROOM</th>
                  <th colspan="3" style="text-align: center;">BLAST ROOM</th>
                  <th rowspan="2" style="text-align: center;">G. TOTAL CRATES</th>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <th>CRATES</th>
                  <th>UBD</th>
                  <th>TOTAL</th>
                  <th>CRATES</th>
                  <th>UBD</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
                <tr class="totals-row">
                  <td colspan="3">GRAND TOTALS</td>
                  <td style="text-align: right;">${reportData.grandTotals.coldCrates}</td>
                  <td style="text-align: right;">${reportData.grandTotals.coldUbd}</td>
                  <td style="text-align: right; font-weight: bold;">${reportData.grandTotals.coldTotal.toFixed(2)}</td>
                  <td style="text-align: right;">${reportData.grandTotals.blastCrates}</td>
                  <td style="text-align: right;">${reportData.grandTotals.blastUbd}</td>
                  <td style="text-align: right; font-weight: bold;">${reportData.grandTotals.blastTotal.toFixed(2)}</td>
                  <td style="text-align: right; font-weight: bold;">${reportData.grandTotals.grandTotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div class="flex-container">
              <div>
                <div style="font-weight: bold; font-size: 9px; margin-bottom: 4px; text-transform: uppercase;">
                  Month-End Closing Stock Balance (as of ${reportData.lastDateWithData || "No Data"})
                </div>
                <table>
                  <thead>
                    <tr style="background-color: #f2f2f2;">
                      <th rowspan="2">Variant</th>
                      <th colspan="3" style="text-align: center;">Cold Room</th>
                      <th colspan="3" style="text-align: center;">Blast Room</th>
                      <th rowspan="2" style="text-align: center;">G. Total Crates</th>
                    </tr>
                    <tr style="background-color: #f2f2f2;">
                      <th>Crates</th>
                      <th>UBD</th>
                      <th>Total</th>
                      <th>Crates</th>
                      <th>UBD</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${monthEndStockRowsHtml}
                  </tbody>
                </table>
              </div>

              <div style="display: flex; justify-content: space-between; padding: 0 10px; margin-top: 50px;">
                <div style="width: 150px; border-top: 1px solid #000; text-align: center; padding-top: 3px; font-weight: bold; font-size: 8px;">
                  (${leftOfficerLabel ? leftOfficerLabel : "Officer"})
                </div>
                <div style="width: 150px; border-top: 1px solid #000; text-align: center; padding-top: 3px; font-weight: bold; font-size: 8px;">
                  (Incharge)
                </div>
              </div>
            </div>
            <div style="margin-top: 25px; text-align: center; text-transform: uppercase; font-size: 8px; font-weight: bold; font-family: Arial, sans-serif; letter-spacing: 1px;">
              POWERED BY DAIRY HUB ERP SYSTEM
            </div>
          </body>
        </html>
      `;
    }

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      toast({
        title: "Print Failed",
        description: "Pop-up blocker is preventing the print window from opening.",
        variant: "destructive"
      });
      return;
    }

    let htmlContent = "";

    if (reportType === "milk_dispatch") {
      const closingStockRowsHtml = closingStock
        .filter(r => r.tank || r.variant || r.qty)
        .map(r => `
          <tr>
            <td>${r.tank || ""}</td>
            <td>${r.variant || ""}</td>
            <td class="text-right">${r.qty || ""}</td>
            <td class="text-right">${r.fat || ""}</td>
            <td class="text-right">${r.snf || ""}</td>
            <td class="text-right">${r.acidity || ""}</td>
            <td class="text-right">${r.temp || ""}</td>
          </tr>
        `).join("");

      const storeRowsHtml = storeInventory
        .filter(r => r.item || r.bags || r.qty)
        .map(r => `
          <tr>
            <td>${r.item || ""}</td>
            <td class="text-right">${r.bags || ""}</td>
            <td class="text-right">${r.qty || ""}</td>
            <td></td><td></td><td></td><td></td>
          </tr>
        `).join("");

      const unloadingRowsHtml = tankerUnloading
        .map(r => `
          <tr>
            <td>${r.variant || ""}</td>
            <td>${r.tankerNo || ""}</td>
            <td class="text-right">${r.qty || ""}</td>
            <td class="text-right">${r.fat || ""}</td>
            <td class="text-right">${r.snf || ""}</td>
          </tr>
        `).join("");

      const standingRowsHtml = tankerStanding
        .map(r => `
          <tr>
            <td>${r.variant || ""}</td>
            <td>${r.tankerNo || ""}</td>
            <td class="text-right">${r.qty || ""}</td>
            <td class="text-right">${r.fat || ""}</td>
            <td class="text-right">${r.snf || ""}</td>
          </tr>
        `).join("");

      const dispatchRowsHtml = dispatchedDetails
        .filter(r => r.variant || r.vehicleNo || r.qty)
        .map(r => `
          <tr>
            <td>${r.variant || ""}</td>
            <td>${r.vehicleNo || ""}</td>
            <td class="text-right">${r.qty || ""}</td>
            <td class="text-right">${r.fat || ""}</td>
            <td class="text-right">${r.snf || ""}</td>
          </tr>
        `).join("");

      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Shift Report - Generated by Dairy Hub app</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 10mm;
              }
              body {
                font-family: 'Segoe UI', Arial, sans-serif;
                font-size: 8px;
                color: #000;
                background-color: #fff;
                line-height: 1.1;
              }
              .header-box {
                text-align: center;
                border: 1.5px solid #000;
                padding: 4px;
                font-size: 11px;
                font-weight: bold;
                margin-bottom: 6px;
                letter-spacing: 0.5px;
              }
              .meta-section {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 8px;
                border: 1px solid #000;
                padding: 4px 6px;
                margin-bottom: 8px;
                font-size: 8px;
                font-weight: bold;
              }
              .meta-item {
                display: flex;
                align-items: center;
              }
              .meta-val {
                font-weight: normal;
                border-bottom: 1px dotted #000;
                margin-left: 4px;
                flex-grow: 1;
                min-height: 10px;
              }
              .main-content {
                display: grid;
                grid-template-columns: 1.25fr 1fr;
                gap: 12px;
              }
              .column-left {
                display: flex;
                flex-direction: column;
              }
              .column-right {
                display: flex;
                flex-direction: column;
                gap: 8px;
              }
              .section-title {
                font-size: 8px;
                font-weight: bold;
                text-transform: uppercase;
                text-align: center;
                border: 1px solid #000;
                border-bottom: none;
                padding: 2px;
                background-color: #f2f2f2;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 8px;
              }
              th, td {
                border: 1px solid #000;
                padding: 2.5px 3.5px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
                font-weight: bold;
                text-align: center;
                font-size: 7.5px;
              }
              .text-center {
                text-align: center;
              }
              .text-right {
                text-align: right;
              }
              .total-row {
                font-weight: bold;
                background-color: #f9f9f9;
              }
              .footer-sign {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
              }
              .sig-box {
                width: 150px;
                border-top: 1px solid #000;
                text-align: center;
                padding-top: 4px;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="header-box">
              ${companyName || "SHIFT REPORT"}
            </div>
            
            <div class="meta-section">
              <div class="meta-item">DATE:<div class="meta-val">${date}</div></div>
              <div class="meta-item">TIME:<div class="meta-val">${time}</div></div>
              <div class="meta-item">SHIFT:<div class="meta-val">${shift}</div></div>
              <div class="meta-item">SHIFT INCHARGE:<div class="meta-val">${shiftIncharge}</div></div>
            </div>

            <div class="main-content">
              <div class="column-left">
                <div class="section-title">Closing Stock</div>
                <table>
                  <thead>
                    <tr>
                      <th style="width: 25%">Tank</th>
                      <th style="width: 25%">Varient</th>
                      <th style="width: 14%">Qty (kg)</th>
                      <th style="width: 9%">% Fat</th>
                      <th style="width: 9%">% SNF</th>
                      <th style="width: 9%">Acidity</th>
                      <th style="width: 9%">Temp.</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${closingStockRowsHtml}
                    <tr class="total-row">
                      <td colspan="2">TOTAL</td>
                      <td class="text-right">${calculateTotalClosingStockQty().toFixed(1)}</td>
                      <td></td><td></td><td></td><td></td>
                    </tr>
                    <tr>
                      <td colspan="7" class="text-center font-bold" style="background-color: #f2f2f2;">STORE INVENTORY</td>
                    </tr>
                    <tr class="total-row">
                      <td>Store Item</td>
                      <td colspan="2" class="text-center">No of Bags</td>
                      <td colspan="4" class="text-center">Qty (kg)</td>
                    </tr>
                    ${storeRowsHtml}
                  </tbody>
                </table>
              </div>

              <div class="column-right">
                <div>
                  <div class="section-title">Tanker Unloading</div>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 25%">Varient</th>
                        <th style="width: 25%">Tanker No.</th>
                        <th style="width: 20%">Qty (kg)</th>
                        <th style="width: 15%">% Fat</th>
                        <th style="width: 15%">% SNF</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${unloadingRowsHtml}
                      <tr class="total-row">
                        <td colspan="2">TOTAL</td>
                        <td class="text-right">${calculateTotalUnloadingQty().toFixed(1)}</td>
                        <td></td><td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <div class="section-title">Tanker Standing on Dock</div>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 25%">Varient</th>
                        <th style="width: 25%">Tanker No.</th>
                        <th style="width: 20%">Q.Ty (kg)</th>
                        <th style="width: 15%">% Fat</th>
                        <th style="width: 15%">% SNF</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${standingRowsHtml}
                      <tr class="total-row">
                        <td colspan="2">TOTAL</td>
                        <td class="text-right">${calculateTotalStandingQty().toFixed(1)}</td>
                        <td></td><td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <div class="section-title">Dispatched Details</div>
                  <table>
                    <thead>
                      <tr>
                        <th style="width: 25%">Varient</th>
                        <th style="width: 25%">Veh. No. / Party</th>
                        <th style="width: 20%">Qty (kg)</th>
                        <th style="width: 15%">% Fat</th>
                        <th style="width: 15%">% SNF</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${dispatchRowsHtml}
                      <tr class="total-row">
                        <td colspan="2">TOTAL</td>
                        <td class="text-right">${calculateTotalDispatchedQty().toFixed(1)}</td>
                        <td></td><td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="footer-sign">
              <div class="sig-box" style="margin-top: 30px;">
                (${leftOfficerLabel ? leftOfficerLabel : "............................"})
                <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${banasOfficer || "_________________"}</div>
              </div>
              <div class="sig-box" style="margin-top: 30px;">
                (${activeRightLabel ? activeRightLabel : "............................"})
                <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${shiftIncharge || "_________________"}</div>
              </div>
            </div>
            <div style="margin-top: 25px; text-align: center; text-transform: uppercase; font-size: 8px; font-weight: bold; font-family: Arial, sans-serif; letter-spacing: 1px;">
              POWERED BY DAIRY HUB ERP SYSTEM
            </div>
          </body>
        </html>
      `;
    } else {
      // Build print HTML content for cold_blast_closing
      const coldBlastRowsHtml = closingStockCB
        .map(r => {
          const hasValues = r.variant || r.coldCrates || r.coldUbd || r.blastCrates || r.blastUbd;
          if (!r.variant && !hasValues) {
            return `
              <tr style="height: 15px;">
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
                <td style="border: 1px solid #000;"></td>
              </tr>
            `;
          }
          const calcs = getRowCalculations(r);
          return `
            <tr>
              <td style="border: 1px solid #000; padding: 3px;">${r.variant}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.coldCrates || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.coldUbd || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(calcs.coldTotal)}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.blastCrates || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right;">${r.blastUbd || ""}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(calcs.blastTotal)}</td>
              <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(calcs.grandTotal)}</td>
            </tr>
          `;
        }).join("");

      const totalsCB = getColdBlastTotals();
      const totalsRowHtml = `
        <tr style="font-weight: bold; background-color: #f2f2f2;">
          <td style="border: 1px solid #000; padding: 3px;">TOTAL</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.coldCrates || ""}</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.coldUbd || ""}</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(totalsCB.coldTotal)}</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.blastCrates || ""}</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right;">${totalsCB.blastUbd || ""}</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(totalsCB.blastTotal)}</td>
          <td style="border: 1px solid #000; padding: 3px; text-align: right; font-weight: bold;">${formatPrintVal(totalsCB.grandTotal)}</td>
        </tr>
      `;

      htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Closing Stock Report - Generated by Dairy Hub app</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 10mm;
              }
              body {
                font-family: 'Segoe UI', Arial, sans-serif;
                font-size: 8px;
                color: #000;
                background-color: #fff;
                line-height: 1.1;
              }
              .header-box {
                text-align: center;
                border: 1.5px solid #000;
                padding: 4px;
                font-size: 11px;
                font-weight: bold;
                margin-bottom: 6px;
                letter-spacing: 0.5px;
              }
              .meta-section {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 8px;
                border: 1px solid #000;
                padding: 4px 6px;
                margin-bottom: 8px;
                font-size: 8px;
                font-weight: bold;
              }
              .meta-item {
                display: flex;
                align-items: center;
              }
              .meta-val {
                font-weight: normal;
                border-bottom: 1px dotted #000;
                margin-left: 4px;
                flex-grow: 1;
                min-height: 10px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 12px;
              }
              th, td {
                border: 1px solid #000;
                padding: 2.5px 3.5px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
                font-weight: bold;
                text-align: center;
                font-size: 7.5px;
              }
              .text-center {
                text-align: center;
              }
              .text-right {
                text-align: right;
              }
              .font-bold {
                font-weight: bold;
              }
              .sig-section {
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
              }
              .sig-box {
                width: 150px;
                border-top: 1px solid #000;
                text-align: center;
                padding-top: 4px;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <div class="header-box">
              ${companyNameCB || "V S Anand Foods Processing (MPS Sonipat)"}
            </div>
            
            <div class="meta-section">
              <div class="meta-item">DATE:<div class="meta-val">${date}</div></div>
              <div class="meta-item">TIME:<div class="meta-val">${time}</div></div>
              <div class="meta-item">SHIFT:<div class="meta-val">${shift}</div></div>
              <div class="meta-item">SHIFT INCHARGE:<div class="meta-val">${shiftIncharge}</div></div>
            </div>

            <div style="font-weight: bold; font-size: 9px; text-align: center; border: 1px solid #000; border-bottom: none; padding: 3px; background-color: #f2f2f2;">CLOSING STOCK</div>
            <table>
              <thead>
                <tr>
                  <th rowspan="2" style="text-align: left; width: 35%;">VARIENT</th>
                  <th colspan="3" style="text-align: center;">COLD ROOM</th>
                  <th colspan="3" style="text-align: center;">BLAST ROOM</th>
                  <th rowspan="2" style="text-align: center; width: 12%;">G. TOTAL<br>CRATES</th>
                </tr>
                <tr>
                  <th style="width: 9%; text-align: center;">CRATES</th>
                  <th style="width: 9%; text-align: center;">UBD</th>
                  <th style="width: 13%; text-align: center;">TOTAL CRATES</th>
                  <th style="width: 9%; text-align: center;">CRATES</th>
                  <th style="width: 9%; text-align: center;">UBD</th>
                  <th style="width: 13%; text-align: center;">TOTAL CRATES</th>
                </tr>
              </thead>
              <tbody>
                ${coldBlastRowsHtml}
                ${totalsRowHtml}
              </tbody>
            </table>

            <div class="sig-section">
              <div class="sig-box">
                (${leftOfficerLabel ? leftOfficerLabel : "Officer"})
                <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${banasOfficer || "_________________"}</div>
              </div>
              <div class="sig-box">
                (Incharge)
                <div style="font-weight: normal; font-size: 7px; margin-top: 4px;">Name: ${shiftIncharge || "_________________"}</div>
              </div>
            </div>
            <div style="margin-top: 25px; text-align: center; text-transform: uppercase; font-size: 8px; font-weight: bold; font-family: Arial, sans-serif; letter-spacing: 1px;">
              POWERED BY DAIRY HUB ERP SYSTEM
            </div>
          </body>
        </html>
      `;
    }

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <div className="flex flex-col gap-6 p-1 bg-slate-50 rounded-xl max-w-full overflow-x-hidden">
      
      {/* ── TAB SWITCHER ── */}
      <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 self-center shadow-inner gap-1">
        <button
          onClick={() => setActiveTab("daily")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
            activeTab === "daily"
              ? "bg-white text-teal-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <FileSpreadsheet className="w-3.5 h-3.5" />
          Daily Entry
        </button>
        <button
          onClick={() => setActiveTab("monthly")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
            activeTab === "monthly"
              ? "bg-white text-teal-700 shadow-sm border border-slate-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <CalendarIcon className="w-3.5 h-3.5" />
          Monthly Summary
        </button>
      </div>

      {activeTab === "daily" && (
        <>
          {/* ── COMPANY NAME HEADER ── */}
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Company / Processing Unit</span>
            <input 
              type="text" 
              placeholder="Enter Company / Processing Unit Name..."
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)} 
              className="text-center font-bold text-lg sm:text-2xl text-slate-800 bg-transparent border-b border-dashed border-slate-200 hover:border-slate-400 focus:border-teal-500 focus:outline-none px-2 py-1 rounded w-full transition-all"
            />
          </div>

      {/* ── SHEET CONTROL ACTIONS BAR ── */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg border border-teal-100">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-base leading-tight">Daily Shift Report Sheet</h3>
            <p className="text-xs text-slate-500">Excel-style editable production data entry</p>
          </div>
        </div>

        {/* ── REPORT TYPE SELECTOR ── */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">Report Type:</label>
          <select
            value={reportType}
            onChange={(e) => {
              const val = e.target.value as "milk_dispatch" | "cold_blast_closing";
              setReportType(val);
              try { localStorage.setItem("dairyhub_report_type", val); } catch {}
            }}
            className="h-9 text-xs font-semibold px-3 pr-8 rounded-lg border border-teal-200 bg-teal-50 text-teal-800 focus:ring-2 focus:ring-teal-400 focus:outline-none cursor-pointer shadow-sm"
          >
            <option value="milk_dispatch">🥛 Milk Dispatch Report</option>
            <option value="cold_blast_closing">❄️ Cold Room &amp; Blast Room Closing</option>
          </select>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <Button 
            onClick={handlePrint}
            variant="outline" 
            size="sm" 
            className="h-9 px-3 gap-1.5 text-xs text-slate-700 hover:text-slate-900 border-slate-200 bg-white hover:bg-slate-50"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            Print / Save PDF
          </Button>
          <Button 
            onClick={handleWhatsAppShare}
            variant="outline" 
            size="sm" 
            className="h-9 px-3 gap-1.5 text-xs text-green-700 hover:text-green-900 border-green-100 bg-green-50/30 hover:bg-green-50"
          >
            <MessageCircle className="w-4 h-4 text-green-600" />
            WhatsApp Export
          </Button>
          <Button 
            onClick={handleEmailShare}
            variant="outline" 
            size="sm" 
            className="h-9 px-3 gap-1.5 text-xs text-blue-700 hover:text-blue-900 border-blue-100 bg-blue-50/30 hover:bg-blue-50"
          >
            <Mail className="w-4 h-4 text-blue-600" />
            Gmail Export
          </Button>
          <Button 
            onClick={handleReset}
            variant="ghost" 
            size="sm" 
            className="h-9 px-3 gap-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 text-red-500" />
            Clear Sheet
          </Button>
        </div>
      </div>

      {/* ── COMPANY SELECTION DROPDOWN BAR ── */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 p-4 sm:p-5 rounded-xl border-2 border-indigo-400 shadow-md text-white flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-300 animate-pulse" />
            <h3 className="text-sm font-extrabold tracking-wide uppercase text-indigo-100 flex items-center gap-2">
              Select Dairy Company <span className="text-red-400 font-black">*</span>
            </h3>
          </div>
          <p className="text-[11px] text-indigo-200">
            Select a company to load its product list and shift report template.
          </p>
        </div>
        
        <div className="w-full md:w-80 shrink-0">
          <Select
            value={selectedCompanyKey || "none"}
            onValueChange={(val) => {
              if (val !== "none") {
                handleCompanySelect(val);
              } else {
                setSelectedCompanyKey("");
              }
            }}
          >
            <SelectTrigger className="h-10 text-xs font-black text-slate-900 bg-white border-2 border-indigo-300 focus:ring-2 focus:ring-indigo-400 shadow-sm">
              <SelectValue placeholder="-- Select Dairy Company --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none" className="text-xs text-slate-400 italic">-- Select Dairy Company --</SelectItem>
              {Object.values(DAIRY_COMPANIES).map((comp) => (
                <SelectItem key={comp.id} value={comp.id} className="text-xs font-bold text-slate-800">
                  🏢 {comp.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {(!selectedCompanyKey || selectedCompanyKey === "none") ? (
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 border-2 border-dashed border-amber-300 p-10 rounded-2xl text-center space-y-4 shadow-sm my-4">
          <div className="inline-flex p-4 bg-amber-100/80 rounded-full text-amber-600 shadow-inner">
            <Building2 className="w-10 h-10" />
          </div>
          <div className="space-y-1.5 max-w-lg mx-auto">
            <h3 className="text-base font-extrabold text-amber-900">Select a Dairy Company to Load Products</h3>
            <p className="text-xs text-amber-800 leading-relaxed">
              Please select your dairy company from the <strong>"Select Dairy Company"</strong> dropdown above to load the relevant product list and shift report template.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {Object.values(DAIRY_COMPANIES).map((comp) => (
              <button
                key={comp.id}
                onClick={() => handleCompanySelect(comp.id)}
                className="px-3 py-1.5 bg-white hover:bg-indigo-50 text-indigo-900 text-xs font-bold border border-indigo-200 rounded-lg shadow-sm transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                {comp.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
      <>
      {/* Active Company Badge Header */}
      <div className="p-3 bg-indigo-50/80 border border-indigo-200 rounded-xl flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-indigo-600 text-white rounded-md text-xs font-bold">
            <Building2 className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">Active Selected Company</span>
            <h4 className="text-sm font-extrabold text-indigo-950 flex items-center gap-1.5">
              {companyName || DAIRY_COMPANIES[selectedCompanyKey]?.name}
              <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Change Company:</span>
          <button 
            onClick={() => setSelectedCompanyKey("")}
            className="text-xs text-indigo-700 hover:text-indigo-900 underline font-bold"
          >
            Change / Reset Company
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" /> Date
          </Label>
          <Input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="h-9 text-xs focus:ring-teal-500"
          />
        </div>
        
        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> Time
          </Label>
          <Input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            className="h-9 text-xs focus:ring-teal-500"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-600">Shift</Label>
          <Select value={shift} onValueChange={setShift}>
            <SelectTrigger className="h-9 text-xs focus:ring-teal-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Morning (A)" className="text-xs">Morning (A)</SelectItem>
              <SelectItem value="Evening (B)" className="text-xs">Evening (B)</SelectItem>
              <SelectItem value="Night (C)" className="text-xs">Night (C)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-slate-400" /> {activeRightLabel || "Shift Incharge"}
          </Label>
          <Input 
            type="text" 
            placeholder="Name of Incharge"
            value={shiftIncharge} 
            onChange={(e) => setShiftIncharge(e.target.value)} 
            className="h-9 text-xs focus:ring-teal-500"
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-slate-400" /> {leftOfficerLabel || "Officer"}
          </Label>
          <Input 
            type="text" 
            placeholder="Name of Officer"
            value={banasOfficer} 
            onChange={(e) => setBanasOfficer(e.target.value)} 
            className="h-9 text-xs focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Helper Guideline Alert */}
      <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-[11px] text-blue-800 leading-normal">
          <strong>Excel controls enabled:</strong> Click on any input cell to edit. You can navigate through the grid using the <strong>Arrow keys (↑, ↓, ←, →)</strong> or <strong>Tab</strong> keys just like a spreadsheet.
        </p>
      </div>

      {/* ── MAIN SPREADSHEET LAYOUT (Milk Dispatch) ── */}
      {reportType === "milk_dispatch" && (
      <>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* ================== LEFT SIDE: CLOSING STOCK & STORE ================== */}
        <div className="xl:col-span-7 flex flex-col gap-6">
          
          {/* Closing Stock Grid Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">CLOSING STOCK</span>
              <span className="text-[11px] font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                Total Qty: {calculateTotalClosingStockQty().toLocaleString('en-IN')} kg
              </span>
            </div>
            
            <div className="overflow-x-auto w-full max-w-full">
              <table className="w-full min-w-[650px] text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 text-left font-bold w-[30%]">TANK</th>
                    <th className="p-2 border-r border-slate-200 text-left font-bold w-[20%]">VARIENT</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[12%]">Qty (kg)</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[9.5%]">%FAT</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[9.5%]">%SNF</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[10%]">Acidity</th>
                    <th className="p-2 border-slate-200 text-right font-bold w-[9%]">Temp (°C)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {closingStock.map((row, rIdx) => (
                    <tr key={`closing-${rIdx}`} className="hover:bg-slate-50/50 transition-colors">
                      {/* Tank Name Cell (Prepopulated but editable) */}
                      <td className="p-1 border-r border-slate-200 font-medium bg-slate-50/20">
                        <input
                          type="text"
                          value={row.tank}
                          placeholder={rIdx >= DEFAULT_TANKS.length ? "Custom Tank" : ""}
                          onChange={(e) => handleClosingStockChange(rIdx, "tank", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 0)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={0}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-semibold"
                        />
                      </td>
                      
                      {/* Variant */}
                      <td className="p-1 border-r border-slate-200">
                        <input
                          type="text"
                          value={row.variant}
                          onChange={(e) => handleClosingStockChange(rIdx, "variant", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 1)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={1}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                        />
                      </td>

                      {/* Quantity */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.qty}
                          onChange={(e) => handleClosingStockChange(rIdx, "qty", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 2)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={2}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Fat */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.fat}
                          onChange={(e) => handleClosingStockChange(rIdx, "fat", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 3)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={3}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* SNF */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.snf}
                          onChange={(e) => handleClosingStockChange(rIdx, "snf", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 4)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={4}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Acidity */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.acidity}
                          onChange={(e) => handleClosingStockChange(rIdx, "acidity", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 5)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={5}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Temp */}
                      <td className="p-1 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.temp}
                          onChange={(e) => handleClosingStockChange(rIdx, "temp", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "closing", rIdx, 6)}
                          data-table="closing"
                          data-row={rIdx}
                          data-col={6}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>
                    </tr>
                  ))}
                  
                  {/* Closing Stock Total row */}
                  <tr className="bg-slate-100 font-bold border-t border-slate-200">
                    <td colSpan={2} className="p-2.5 text-left text-slate-700">TOTAL CLOSING STOCK</td>
                    <td className="p-2.5 text-right text-slate-900 font-mono text-xs border-r border-slate-200">
                      {calculateTotalClosingStockQty().toFixed(1)}
                    </td>
                    <td colSpan={4} className="bg-slate-100"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Add Row Button for Closing Stock */}
            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setClosingStock(prev => [...prev, { tank: "", variant: "", qty: "", fat: "", snf: "", acidity: "", temp: "" }])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
              >
                + Add Row
              </button>
            </div>
          </div>

          {/* Store Inventory Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
              <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">STORE STOCK</span>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[500px] text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 text-left font-bold w-[45%]">STORE ITEM</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[25%]">No of Bags</th>
                    <th className="p-2 text-right font-bold w-[30%]">Qty (kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {storeInventory.map((row, rIdx) => (
                    <tr key={`store-${rIdx}`} className="hover:bg-slate-50/50">
                      {/* Store Item Name */}
                      <td className="p-1 border-r border-slate-200 bg-slate-50/10">
                        <input
                          type="text"
                          value={row.item}
                          placeholder={rIdx === 2 ? "Custom item (e.g. Salt)" : ""}
                          onChange={(e) => handleStoreChange(rIdx, "item", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "store", rIdx, 0)}
                          data-table="store"
                          data-row={rIdx}
                          data-col={0}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-semibold"
                        />
                      </td>

                      {/* Number of Bags */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.bags}
                          placeholder="0"
                          onChange={(e) => handleStoreChange(rIdx, "bags", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "store", rIdx, 1)}
                          data-table="store"
                          data-row={rIdx}
                          data-col={1}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Qty in kg */}
                      <td className="p-1 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.qty}
                          placeholder="0.0"
                          onChange={(e) => handleStoreChange(rIdx, "qty", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "store", rIdx, 2)}
                          data-table="store"
                          data-row={rIdx}
                          data-col={2}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Row Button for Store Inventory */}
            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setStoreInventory(prev => [...prev, { item: "", bags: "", qty: "" }])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
              >
                + Add Row
              </button>
            </div>
          </div>
        </div>

        {/* ================== RIGHT SIDE: TANKERS & DISPATCH ================== */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          
          {/* Tanker Unloading Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">Tanker Unloading</span>
              <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                Total: {calculateTotalUnloadingQty().toLocaleString('en-IN')} kg
              </span>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[400px] text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 text-left font-bold">Varient</th>
                    <th className="p-2 border-r border-slate-200 text-left font-bold">Tanker No.</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold">Qty (kg)</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold">%Fat</th>
                    <th className="p-2 text-right font-bold">%SNF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tankerUnloading.map((row, rIdx) => (
                    <tr key={`unload-${rIdx}`} className="hover:bg-slate-50/50">
                      {/* Varient */}
                      <td className="p-1 border-r border-slate-200">
                        <input
                          type="text"
                          placeholder="e.g. Raw Milk"
                          value={row.variant}
                          onChange={(e) => handleUnloadingChange(rIdx, "variant", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "unloading", rIdx, 0)}
                          data-table="unloading"
                          data-row={rIdx}
                          data-col={0}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                        />
                      </td>

                      {/* Tanker No. */}
                      <td className="p-1 border-r border-slate-200">
                        <input
                          type="text"
                          placeholder="HR-55-A-1234"
                          value={row.tankerNo}
                          onChange={(e) => handleUnloadingChange(rIdx, "tankerNo", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "unloading", rIdx, 1)}
                          data-table="unloading"
                          data-row={rIdx}
                          data-col={1}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                        />
                      </td>

                      {/* Qty */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.qty}
                          onChange={(e) => handleUnloadingChange(rIdx, "qty", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "unloading", rIdx, 2)}
                          data-table="unloading"
                          data-row={rIdx}
                          data-col={2}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Fat */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.fat}
                          onChange={(e) => handleUnloadingChange(rIdx, "fat", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "unloading", rIdx, 3)}
                          data-table="unloading"
                          data-row={rIdx}
                          data-col={3}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* SNF */}
                      <td className="p-1 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.snf}
                          onChange={(e) => handleUnloadingChange(rIdx, "snf", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "unloading", rIdx, 4)}
                          data-table="unloading"
                          data-row={rIdx}
                          data-col={4}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>
                    </tr>
                  ))}
                  
                  {/* Unloading Total Row */}
                  <tr className="bg-slate-100 font-bold border-t border-slate-200">
                    <td colSpan={2} className="p-2 text-left text-slate-700">TOTAL UNLOADED</td>
                    <td className="p-2 text-right text-slate-900 font-mono border-r border-slate-200">
                      {calculateTotalUnloadingQty().toFixed(1)}
                    </td>
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Add Row Button for Tanker Unloading */}
            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setTankerUnloading(prev => [...prev, { variant: "", tankerNo: "", qty: "", fat: "", snf: "" }])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
              >
                + Add Row
              </button>
            </div>
          </div>

          {/* Tanker Standing on Dock Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">Tanker Standing on Dock</span>
              <span className="text-[11px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                Total: {calculateTotalStandingQty().toLocaleString('en-IN')} kg
              </span>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[400px] text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 text-left font-bold">Varient</th>
                    <th className="p-2 border-r border-slate-200 text-left font-bold">Tanker No.</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold">Qty (kg)</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold">%Fat</th>
                    <th className="p-2 text-right font-bold">%SNF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tankerStanding.map((row, rIdx) => (
                    <tr key={`stand-${rIdx}`} className="hover:bg-slate-50/50">
                      {/* Varient */}
                      <td className="p-1 border-r border-slate-200">
                        <input
                          type="text"
                          placeholder="e.g. Mixed Milk"
                          value={row.variant}
                          onChange={(e) => handleStandingChange(rIdx, "variant", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "standing", rIdx, 0)}
                          data-table="standing"
                          data-row={rIdx}
                          data-col={0}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                        />
                      </td>

                      {/* Tanker No. */}
                      <td className="p-1 border-r border-slate-200">
                        <input
                          type="text"
                          placeholder="DL-1-GB-4321"
                          value={row.tankerNo}
                          onChange={(e) => handleStandingChange(rIdx, "tankerNo", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "standing", rIdx, 1)}
                          data-table="standing"
                          data-row={rIdx}
                          data-col={1}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                        />
                      </td>

                      {/* Qty */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.qty}
                          onChange={(e) => handleStandingChange(rIdx, "qty", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "standing", rIdx, 2)}
                          data-table="standing"
                          data-row={rIdx}
                          data-col={2}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Fat */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.fat}
                          onChange={(e) => handleStandingChange(rIdx, "fat", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "standing", rIdx, 3)}
                          data-table="standing"
                          data-row={rIdx}
                          data-col={3}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* SNF */}
                      <td className="p-1 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.snf}
                          onChange={(e) => handleStandingChange(rIdx, "snf", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "standing", rIdx, 4)}
                          data-table="standing"
                          data-row={rIdx}
                          data-col={4}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>
                    </tr>
                  ))}
                  
                  {/* Standing Total Row */}
                  <tr className="bg-slate-100 font-bold border-t border-slate-200">
                    <td colSpan={2} className="p-2 text-left text-slate-700">TOTAL STANDING</td>
                    <td className="p-2 text-right text-slate-900 font-mono border-r border-slate-200">
                      {calculateTotalStandingQty().toFixed(1)}
                    </td>
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Add Row Button for Tanker Standing */}
            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setTankerStanding(prev => [...prev, { variant: "", tankerNo: "", qty: "", fat: "", snf: "" }])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
              >
                + Add Row
              </button>
            </div>
          </div>

          {/* Dispatched Details Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">Dispatched Details</span>
              <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                Total: {calculateTotalDispatchedQty().toLocaleString('en-IN')} kg
              </span>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[400px] text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 text-left font-bold w-[30%]">Varient</th>
                    <th className="p-2 border-r border-slate-200 text-left font-bold w-[30%]">Veh. No. / Party</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[16%]">Qty (kg)</th>
                    <th className="p-2 border-r border-slate-200 text-right font-bold w-[12%]">%Fat</th>
                    <th className="p-2 text-right font-bold w-[12%]">%SNF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {dispatchedDetails.map((row, rIdx) => (
                    <tr key={`dispatch-${rIdx}`} className="hover:bg-slate-50/50">
                      {/* Varient Name (Editable) */}
                      <td className="p-1 border-r border-slate-200 font-medium bg-slate-50/20">
                        <input
                          type="text"
                          value={row.variant}
                          placeholder={rIdx >= DEFAULT_DISPATCH_VARIANTS.length ? "Custom Variant" : ""}
                          onChange={(e) => handleDispatchChange(rIdx, "variant", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "dispatched", rIdx, 0)}
                          data-table="dispatched"
                          data-row={rIdx}
                          data-col={0}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-semibold"
                        />
                      </td>

                      {/* Vehicle No. / Party */}
                      <td className="p-1 border-r border-slate-200">
                        <input
                          type="text"
                          placeholder="e.g. Banas / MH-12"
                          value={row.vehicleNo}
                          onChange={(e) => handleDispatchChange(rIdx, "vehicleNo", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "dispatched", rIdx, 1)}
                          data-table="dispatched"
                          data-row={rIdx}
                          data-col={1}
                          className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                        />
                      </td>

                      {/* Qty */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.qty}
                          onChange={(e) => handleDispatchChange(rIdx, "qty", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "dispatched", rIdx, 2)}
                          data-table="dispatched"
                          data-row={rIdx}
                          data-col={2}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* Fat */}
                      <td className="p-1 border-r border-slate-200 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.fat}
                          onChange={(e) => handleDispatchChange(rIdx, "fat", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "dispatched", rIdx, 3)}
                          data-table="dispatched"
                          data-row={rIdx}
                          data-col={3}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>

                      {/* SNF */}
                      <td className="p-1 text-right">
                        <input
                          type="number"
                          step="any"
                          value={row.snf}
                          onChange={(e) => handleDispatchChange(rIdx, "snf", e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, "dispatched", rIdx, 4)}
                          data-table="dispatched"
                          data-row={rIdx}
                          data-col={4}
                          className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                        />
                      </td>
                    </tr>
                  ))}
                  
                  {/* Dispatch Total Row */}
                  <tr className="bg-slate-100 font-bold border-t border-slate-200">
                    <td colSpan={2} className="p-2 text-left text-slate-700">TOTAL DISPATCHED</td>
                    <td className="p-2 text-right text-slate-900 font-mono border-r border-slate-200">
                      {calculateTotalDispatchedQty().toFixed(1)}
                    </td>
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Add Row Button for Dispatched Details */}
            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setDispatchedDetails(prev => [...prev, { variant: "", vehicleNo: "", qty: "", fat: "", snf: "" }])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
              >
                + Add Row
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── SIGNATURES / FOOTER LABELS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-xl border border-slate-200 shadow-sm mt-2">
        {/* Left Signature Block */}
        <div className="flex flex-col items-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
          <div className="w-full max-w-xs border-t-2 border-dashed border-slate-300 pt-3 text-center space-y-2">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Left Signature Title</span>
              <Input 
                type="text" 
                placeholder="e.g. Quality Officer, Plant Officer"
                value={leftOfficerLabel}
                onChange={(e) => setLeftOfficerLabel(e.target.value)}
                className="text-center font-bold text-slate-700 bg-transparent border-slate-200 focus:ring-teal-500 h-8 text-xs"
              />
            </div>
            <div className="mt-2 text-slate-500 text-xs font-mono">
              Name: <span className="font-semibold">{banasOfficer || "_________________"}</span>
            </div>
          </div>
        </div>
        
        {/* Right Signature Block */}
        <div className="flex flex-col items-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
          <div className="w-full max-w-xs border-t-2 border-dashed border-slate-300 pt-3 text-center space-y-2">
            <div className="text-left w-full">
              <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1 text-center">Right Signature Title</span>
              <Select 
                value={rightOfficerLabel} 
                onValueChange={(val) => {
                  setRightOfficerLabel(val);
                  if (val !== "Custom") {
                    setCustomRightLabel("");
                  }
                }}
              >
                <SelectTrigger className="h-8 text-xs font-bold text-slate-700 bg-transparent border-slate-200">
                  <SelectValue placeholder="Select Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Incharge" className="text-xs font-semibold text-slate-700">Incharge</SelectItem>
                  <SelectItem value="Shift Incharge" className="text-xs font-semibold text-slate-700">Shift Incharge</SelectItem>
                  <SelectItem value="Production Manager" className="text-xs font-semibold text-slate-700">Production Manager</SelectItem>
                  <SelectItem value="Custom" className="text-xs font-semibold text-slate-700">Custom Title...</SelectItem>
                </SelectContent>
              </Select>
              
              {rightOfficerLabel === "Custom" && (
                <Input
                  type="text"
                  placeholder="Enter custom title"
                  value={customRightLabel}
                  onChange={(e) => setCustomRightLabel(e.target.value)}
                  className="h-8 text-xs font-bold text-slate-700 mt-1.5 focus:ring-teal-500 text-center"
                />
              )}
            </div>
            <div className="mt-2 text-slate-500 text-xs font-mono">
              Name: <span className="font-semibold">{shiftIncharge || "_________________"}</span>
            </div>
          </div>
        </div>
      </div>
      </>
      )} {/* end milk_dispatch */}

      {/* ── COLD ROOM & BLAST ROOM TABLE ── */}
      {reportType === "cold_blast_closing" && (
        <div className="flex flex-col gap-4">
          {/* Cold Room Company Name */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Company / Processing Unit</span>
            <input
              type="text"
              placeholder="Enter Company / Processing Unit Name..."
              value={companyNameCB}
              onChange={(e) => setCompanyNameCB(e.target.value)}
              className="text-center font-bold text-lg sm:text-2xl text-slate-800 bg-transparent border-b border-dashed border-slate-200 hover:border-slate-400 focus:border-teal-500 focus:outline-none px-2 py-1 rounded w-full transition-all"
            />
          </div>

          {/* Cold Room Table Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-slate-200 flex justify-between items-center">
              <span className="font-bold text-slate-700 text-xs sm:text-sm uppercase tracking-wider">❄️ Cold Room &amp; Blast Room Closing Stock</span>
              <span className="text-[11px] font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                Grand Total: {getColdBlastTotals().grandTotal.toFixed(2)} Crates
              </span>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[750px] text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200 text-left font-bold w-[22%]">VARIANT</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[10%]">Units/Crate</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[12%] bg-cyan-50/50">Cold Crates</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[10%] bg-cyan-50/50">Cold UBD</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[10%] bg-cyan-50/50">Cold Total</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[12%] bg-purple-50/50">Blast Crates</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[10%] bg-purple-50/50">Blast UBD</th>
                    <th className="p-2 border-r border-slate-200 text-center font-bold w-[10%] bg-purple-50/50">Blast Total</th>
                    <th className="p-2 text-center font-bold w-[10%] bg-emerald-50/50">Grand Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {closingStockCB.map((row, rIdx) => {
                    const calcs = getRowCalculations(row);
                    return (
                      <tr key={`cb-${rIdx}`} className="hover:bg-slate-50/50 transition-colors">
                        {/* Variant */}
                        <td className="p-1 border-r border-slate-200 bg-slate-50/20">
                          <input
                            type="text"
                            value={row.variant}
                            onChange={(e) => {
                              const updated = [...closingStockCB];
                              updated[rIdx] = { ...updated[rIdx], variant: e.target.value };
                              setClosingStockCB(updated);
                            }}
                            placeholder="Product name..."
                            className="w-full bg-transparent px-1.5 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded"
                          />
                        </td>
                        {/* Units per Crate */}
                        <td className="p-1 border-r border-slate-200 text-center">
                          <input
                            type="number"
                            step="any"
                            value={row.unitsPerCrate}
                            onChange={(e) => {
                              const updated = [...closingStockCB];
                              updated[rIdx] = { ...updated[rIdx], unitsPerCrate: e.target.value };
                              setClosingStockCB(updated);
                            }}
                            className="w-full bg-transparent px-1.5 py-1 text-center text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                          />
                        </td>
                        {/* Cold Crates */}
                        <td className="p-1 border-r border-slate-200 bg-cyan-50/30">
                          <input
                            type="number"
                            step="any"
                            value={row.coldCrates}
                            onChange={(e) => {
                              const updated = [...closingStockCB];
                              updated[rIdx] = { ...updated[rIdx], coldCrates: e.target.value };
                              setClosingStockCB(updated);
                            }}
                            className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded font-mono"
                          />
                        </td>
                        {/* Cold UBD */}
                        <td className="p-1 border-r border-slate-200 bg-cyan-50/30">
                          <input
                            type="number"
                            step="any"
                            value={row.coldUbd}
                            onChange={(e) => {
                              const updated = [...closingStockCB];
                              updated[rIdx] = { ...updated[rIdx], coldUbd: e.target.value };
                              setClosingStockCB(updated);
                            }}
                            className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-cyan-500 rounded font-mono"
                          />
                        </td>
                        {/* Cold Total (calculated) */}
                        <td className="p-2 border-r border-slate-200 text-right font-mono font-semibold text-cyan-700 bg-cyan-50/40">
                          {calcs.coldTotal > 0 ? calcs.coldTotal.toFixed(2) : "—"}
                        </td>
                        {/* Blast Crates */}
                        <td className="p-1 border-r border-slate-200 bg-purple-50/30">
                          <input
                            type="number"
                            step="any"
                            value={row.blastCrates}
                            onChange={(e) => {
                              const updated = [...closingStockCB];
                              updated[rIdx] = { ...updated[rIdx], blastCrates: e.target.value };
                              setClosingStockCB(updated);
                            }}
                            className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-purple-500 rounded font-mono"
                          />
                        </td>
                        {/* Blast UBD */}
                        <td className="p-1 border-r border-slate-200 bg-purple-50/30">
                          <input
                            type="number"
                            step="any"
                            value={row.blastUbd}
                            onChange={(e) => {
                              const updated = [...closingStockCB];
                              updated[rIdx] = { ...updated[rIdx], blastUbd: e.target.value };
                              setClosingStockCB(updated);
                            }}
                            className="w-full bg-transparent px-1.5 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-purple-500 rounded font-mono"
                          />
                        </td>
                        {/* Blast Total (calculated) */}
                        <td className="p-2 border-r border-slate-200 text-right font-mono font-semibold text-purple-700 bg-purple-50/40">
                          {calcs.blastTotal > 0 ? calcs.blastTotal.toFixed(2) : "—"}
                        </td>
                        {/* Grand Total */}
                        <td className="p-2 text-right font-mono font-bold text-emerald-700 bg-emerald-50/40">
                          {calcs.grandTotal > 0 ? calcs.grandTotal.toFixed(2) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-100 font-bold border-t-2 border-slate-300 text-xs">
                    <td colSpan={2} className="p-2 text-left text-slate-700">TOTALS</td>
                    <td className="p-2 text-right font-mono text-cyan-800 border-r border-slate-200">{getColdBlastTotals().coldCrates}</td>
                    <td className="p-2 text-right font-mono text-cyan-800 border-r border-slate-200">{getColdBlastTotals().coldUbd}</td>
                    <td className="p-2 text-right font-mono font-bold text-cyan-900 border-r border-slate-200">{getColdBlastTotals().coldTotal.toFixed(2)}</td>
                    <td className="p-2 text-right font-mono text-purple-800 border-r border-slate-200">{getColdBlastTotals().blastCrates}</td>
                    <td className="p-2 text-right font-mono text-purple-800 border-r border-slate-200">{getColdBlastTotals().blastUbd}</td>
                    <td className="p-2 text-right font-mono font-bold text-purple-900 border-r border-slate-200">{getColdBlastTotals().blastTotal.toFixed(2)}</td>
                    <td className="p-2 text-right font-mono font-bold text-emerald-900">{getColdBlastTotals().grandTotal.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Add Row Button */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => setClosingStockCB(prev => [...prev, { variant: "", unitsPerCrate: "1", coldCrates: "", coldUbd: "", blastCrates: "", blastUbd: "" }])}
                className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
              >
                + Add Row
              </button>
            </div>
          </div>

          {/* ── SIGNATURES / FOOTER LABELS FOR COLD & BLAST ROOM ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-xl border border-slate-200 shadow-sm mt-2">
            {/* Left Signature Block */}
            <div className="flex flex-col items-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <div className="w-full max-w-xs border-t-2 border-dashed border-slate-300 pt-3 text-center space-y-2">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Left Signature Title</span>
                  <Input 
                    type="text" 
                    placeholder="e.g. Cold Room Officer, Quality Incharge"
                    value={leftOfficerLabel}
                    onChange={(e) => setLeftOfficerLabel(e.target.value)}
                    className="text-center font-bold text-slate-700 bg-transparent border-slate-200 focus:ring-teal-500 h-8 text-xs"
                  />
                </div>
                <div className="mt-2 text-slate-500 text-xs font-mono">
                  Name: <span className="font-semibold">{banasOfficer || "_________________"}</span>
                </div>
              </div>
            </div>
            
            {/* Right Signature Block */}
            <div className="flex flex-col items-center p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <div className="w-full max-w-xs border-t-2 border-dashed border-slate-300 pt-3 text-center space-y-2">
                <div className="text-left w-full">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1 text-center">Right Signature Title</span>
                  <Select 
                    value={rightOfficerLabel} 
                    onValueChange={(val) => {
                      setRightOfficerLabel(val);
                      if (val !== "Custom") {
                        setCustomRightLabel("");
                      }
                    }}
                  >
                    <SelectTrigger className="h-8 text-xs font-bold text-slate-700 bg-transparent border-slate-200">
                      <SelectValue placeholder="Select Title" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Incharge" className="text-xs font-semibold text-slate-700">Incharge</SelectItem>
                      <SelectItem value="Shift Incharge" className="text-xs font-semibold text-slate-700">Shift Incharge</SelectItem>
                      <SelectItem value="Cold Room Incharge" className="text-xs font-semibold text-slate-700">Cold Room Incharge</SelectItem>
                      <SelectItem value="Production Manager" className="text-xs font-semibold text-slate-700">Production Manager</SelectItem>
                      <SelectItem value="Custom" className="text-xs font-semibold text-slate-700">Custom Title...</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {rightOfficerLabel === "Custom" && (
                    <Input
                      type="text"
                      placeholder="Enter custom title"
                      value={customRightLabel}
                      onChange={(e) => setCustomRightLabel(e.target.value)}
                      className="h-8 text-xs font-bold text-slate-700 mt-1.5 focus:ring-teal-500 text-center"
                    />
                  )}
                </div>
                <div className="mt-2 text-slate-500 text-xs font-mono">
                  Name: <span className="font-semibold">{shiftIncharge || "_________________"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} {/* end cold_blast_closing */}

      </>
      )} {/* end company selection check */} 
      </> 
      )} {/* end activeTab daily */}

      {/* ── MONTHLY SUMMARY & CLOSING VIEW ── */}
      {activeTab === "monthly" && (
        <div className="flex flex-col gap-6">
          {/* Month Selector Panel */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg border border-teal-100">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base leading-tight">Monthly Closing & Summaries</h3>
                <p className="text-xs text-slate-500">Aggregate daily production data per calendar month</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Month Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Month:</span>
                <Select value={String(selectedMonth)} onValueChange={(val) => setSelectedMonth(Number(val))}>
                  <SelectTrigger className="h-9 w-28 text-xs focus:ring-teal-500 font-semibold text-slate-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)} className="text-xs">
                        {new Date(2026, i, 1).toLocaleString('default', { month: 'long' })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Year Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Year:</span>
                <Select value={String(selectedYear)} onValueChange={(val) => setSelectedYear(Number(val))}>
                  <SelectTrigger className="h-9 w-24 text-xs focus:ring-teal-500 font-semibold text-slate-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 11 }, (_, i) => {
                      const yr = 2020 + i;
                      return (
                        <SelectItem key={yr} value={String(yr)} className="text-xs">
                          {yr}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={() => handlePrintMonthlySummary(selectedYear, selectedMonth, getMonthlyReportData(selectedYear, selectedMonth))}
                variant="outline"
                size="sm"
                className="h-9 px-3 gap-1.5 text-xs text-slate-700 hover:text-slate-900 border-slate-200 bg-white hover:bg-slate-50"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                Print Monthly Report
              </Button>
              <Button
                onClick={() => handleExportMonthlyCSV(selectedYear, selectedMonth, getMonthlyReportData(selectedYear, selectedMonth))}
                variant="outline"
                size="sm"
                className="h-9 px-3 gap-1.5 text-xs text-teal-700 hover:text-teal-900 border-teal-100 bg-teal-50/30 hover:bg-teal-50"
              >
                <Download className="w-4 h-4 text-teal-600" />
                Export CSV Summary
              </Button>
            </div>
          </div>

          {/* Quick Metrics Summary Cards */}
          {(() => {
            const mData = getMonthlyReportData(selectedYear, selectedMonth);
            const isColdRoom = reportType === "cold_blast_closing";
            
            const monthEndClosingQty = !isColdRoom
              ? (mData.monthEndClosingStock || []).reduce((acc: number, r: any) => acc + (parseFloat(r.qty) || 0), 0)
              : (mData.monthEndClosingStockCB || []).reduce((acc: number, r: any) => {
                  const cc = parseFloat(r.coldCrates) || 0;
                  const cu = parseFloat(r.coldUbd) || 0;
                  const bc = parseFloat(r.blastCrates) || 0;
                  const bu = parseFloat(r.blastUbd) || 0;
                  const packs = parseFloat(r.unitsPerCrate) || 1;
                  return acc + cc + (cu / packs) + bc + (bu / packs);
                }, 0);

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-teal-600">
                      {isColdRoom ? "Total Cold Room stock" : "Total Monthly Unloaded"}
                    </span>
                    <span className="text-2xl font-black text-teal-700">
                      {isColdRoom ? (mData.grandTotals as any).coldTotal?.toFixed(2) : (mData.grandTotals as any).unloaded?.toFixed(1)}{" "}
                      <span className="text-xs font-semibold text-slate-500">{isColdRoom ? "crates" : "kg"}</span>
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {isColdRoom ? "Aggregate cold room total crates" : "Sum of all unloaded tankers this month"}
                    </span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-blue-600">
                      {isColdRoom ? "Total Blast Room Stock" : "Total Monthly Dispatched"}
                    </span>
                    <span className="text-2xl font-black text-blue-700">
                      {isColdRoom ? (mData.grandTotals as any).blastTotal?.toFixed(2) : (mData.grandTotals as any).dispatched?.toFixed(1)}{" "}
                      <span className="text-xs font-semibold text-slate-500">{isColdRoom ? "crates" : "kg"}</span>
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {isColdRoom ? "Aggregate blast room total crates" : "Sum of all dispatched products this month"}
                    </span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-amber-600">
                      {isColdRoom ? "Month-End Closing Crates" : "Month-End Closing Balance"}
                    </span>
                    <span className="text-2xl font-black text-amber-700">
                      {monthEndClosingQty.toFixed(isColdRoom ? 2 : 1)}{" "}
                      <span className="text-xs font-semibold text-slate-500">{isColdRoom ? "crates" : "kg"}</span>
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Closing stock of {mData.lastDateWithData || "no recorded date"}
                    </span>
                  </div>
                </div>

                {/* Monthly Summary Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider">Calendar Days Breakdown</h4>
                    <span className="text-[10px] text-slate-400 font-semibold">Automatic 28/29/30/31 Days Detection</span>
                  </div>
                  <div className="overflow-x-auto max-h-[500px]">
                    {!isColdRoom ? (
                      <table className="w-full border-collapse text-xs text-left">
                        <thead className="sticky top-0 bg-slate-100 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px] z-10">
                          <tr>
                            <th className="px-4 py-3 border-r border-slate-200">Date</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-center">Shift</th>
                            <th className="px-4 py-3 border-r border-slate-200">Shift Incharge</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Closing Stock (kg)</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Tankers Unloaded (kg)</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Tankers Standing (kg)</th>
                            <th className="px-4 py-3 text-right">Dispatched Qty (kg)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {mData.dailyList.map((row) => (
                            <tr key={row.date} className={`hover:bg-slate-50 transition-colors ${row.hasData ? 'bg-emerald-50/10' : ''}`}>
                              <td className="px-4 py-2.5 font-mono font-bold text-slate-600 border-r border-slate-100">{row.date}</td>
                              <td className="px-4 py-2.5 text-center border-r border-slate-100 font-semibold">{row.shift}</td>
                              <td className="px-4 py-2.5 border-r border-slate-100 truncate max-w-[120px]">{row.shiftIncharge}</td>
                              <td className="px-4 py-2.5 text-right font-semibold border-r border-slate-100">{row.hasData ? (row as any).closingStockQty?.toFixed(1) : "—"}</td>
                              <td className="px-4 py-2.5 text-right border-r border-slate-100">{row.hasData ? (row as any).unloadedQty?.toFixed(1) : "—"}</td>
                              <td className="px-4 py-2.5 text-right border-r border-slate-100">{row.hasData ? (row as any).standingQty?.toFixed(1) : "—"}</td>
                              <td className="px-4 py-2.5 text-right">{row.hasData ? (row as any).dispatchedQty?.toFixed(1) : "—"}</td>
                            </tr>
                          ))}
                          <tr className="bg-slate-50 font-bold border-t-2 border-slate-200 text-slate-800 text-[13px]">
                            <td colSpan={3} className="px-4 py-3 border-r border-slate-200 text-left">Monthly Total Summary</td>
                            <td className="px-4 py-3 text-right border-r border-slate-200 text-slate-500">—</td>
                            <td className="px-4 py-3 text-right border-r border-slate-200 text-teal-700">{(mData.grandTotals as any).unloaded?.toFixed(1)}</td>
                            <td className="px-4 py-3 text-right border-r border-slate-200 text-slate-700">{(mData.grandTotals as any).standing?.toFixed(1)}</td>
                            <td className="px-4 py-3 text-right text-blue-700">{(mData.grandTotals as any).dispatched?.toFixed(1)}</td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full border-collapse text-xs text-left">
                        <thead className="sticky top-0 bg-slate-100 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px] z-10">
                          <tr>
                            <th rowSpan={2} className="px-4 py-3 border-r border-slate-200 align-middle">Date</th>
                            <th rowSpan={2} className="px-4 py-3 border-r border-slate-200 text-center align-middle">Shift</th>
                            <th rowSpan={2} className="px-4 py-3 border-r border-slate-200 align-middle">Shift Incharge</th>
                            <th colSpan={3} className="px-4 py-1.5 border-r border-slate-200 text-center">Cold Room</th>
                            <th colSpan={3} className="px-4 py-1.5 border-r border-slate-200 text-center">Blast Room</th>
                            <th rowSpan={2} className="px-4 py-3 text-right align-middle">Grand Total Crates</th>
                          </tr>
                          <tr className="sticky top-[32px] bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold text-[9px] z-10">
                            <th className="px-2 py-1.5 border-r border-slate-200 text-right">Crates</th>
                            <th className="px-2 py-1.5 border-r border-slate-200 text-right">UBD</th>
                            <th className="px-2 py-1.5 border-r border-slate-200 text-right">Total</th>
                            <th className="px-2 py-1.5 border-r border-slate-200 text-right">Crates</th>
                            <th className="px-2 py-1.5 border-r border-slate-200 text-right">UBD</th>
                            <th className="px-2 py-1.5 border-r border-slate-200 text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {mData.dailyList.map((row) => (
                            <tr key={row.date} className={`hover:bg-slate-50 transition-colors ${row.hasData ? 'bg-emerald-50/10' : ''}`}>
                              <td className="px-4 py-2.5 font-mono font-bold text-slate-600 border-r border-slate-100">{row.date}</td>
                              <td className="px-4 py-2.5 text-center border-r border-slate-100 font-semibold">{row.shift}</td>
                              <td className="px-4 py-2.5 border-r border-slate-100 truncate max-w-[120px]">{row.shiftIncharge}</td>
                              <td className="px-2 py-2.5 text-right border-r border-slate-100">{row.hasData ? (row as any).coldCrates : "—"}</td>
                              <td className="px-2 py-2.5 text-right border-r border-slate-100">{row.hasData ? (row as any).coldUbd : "—"}</td>
                              <td className="px-2 py-2.5 text-right border-r border-slate-100 font-bold text-teal-700">{row.hasData ? (row as any).coldTotal?.toFixed(2) : "—"}</td>
                              <td className="px-2 py-2.5 text-right border-r border-slate-100">{row.hasData ? (row as any).blastCrates : "—"}</td>
                              <td className="px-2 py-2.5 text-right border-r border-slate-100">{row.hasData ? (row as any).blastUbd : "—"}</td>
                              <td className="px-2 py-2.5 text-right border-r border-slate-100 font-bold text-blue-700">{row.hasData ? (row as any).blastTotal?.toFixed(2) : "—"}</td>
                              <td className="px-4 py-2.5 text-right font-black text-amber-700">{row.hasData ? (row as any).grandTotal?.toFixed(2) : "—"}</td>
                            </tr>
                          ))}
                          <tr className="bg-slate-50 font-bold border-t-2 border-slate-200 text-slate-800 text-[12px]">
                            <td colSpan={3} className="px-4 py-3 border-r border-slate-200 text-left">Monthly Total Summary</td>
                            <td className="px-2 py-3 text-right border-r border-slate-200 text-slate-600">{(mData.grandTotals as any).coldCrates}</td>
                            <td className="px-2 py-3 text-right border-r border-slate-200 text-slate-600">{(mData.grandTotals as any).coldUbd}</td>
                            <td className="px-2 py-3 text-right border-r border-slate-200 text-teal-700 font-bold">{(mData.grandTotals as any).coldTotal?.toFixed(2)}</td>
                            <td className="px-2 py-3 text-right border-r border-slate-200 text-slate-600">{(mData.grandTotals as any).blastCrates}</td>
                            <td className="px-2 py-3 text-right border-r border-slate-200 text-slate-600">{(mData.grandTotals as any).blastUbd}</td>
                            <td className="px-2 py-3 text-right border-r border-slate-200 text-blue-700 font-bold">{(mData.grandTotals as any).blastTotal?.toFixed(2)}</td>
                            <td className="px-4 py-3 text-right text-amber-700 font-black">{(mData.grandTotals as any).grandTotal?.toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                {/* Closing Stock Inventory Month-End Table */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-xs text-slate-700 uppercase tracking-wider">Month-End Closing Stock Balance</h4>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Physical closing stock balance taken on last recorded day ({mData.lastDateWithData || "no dates entered"})</p>
                    </div>
                  </div>
                  <div className="p-4">
                    {!isColdRoom ? (
                      <table className="w-full border-collapse text-xs text-left border border-slate-200">
                        <thead className="bg-slate-100 font-bold uppercase tracking-wider text-[10px]">
                          <tr>
                            <th className="px-4 py-2 border border-slate-200">Tank</th>
                            <th className="px-4 py-2 border border-slate-200">Variant</th>
                            <th className="px-4 py-2 border border-slate-200 text-right">Qty (kg)</th>
                            <th className="px-4 py-2 border border-slate-200 text-right">% Fat</th>
                            <th className="px-4 py-2 border border-slate-200 text-right">% SNF</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                          {mData.monthEndClosingStock && mData.monthEndClosingStock.length > 0 ? (
                            mData.monthEndClosingStock
                              .filter((r: any) => r.tank || r.variant || r.qty)
                              .map((r: any, idx: number) => (
                                <tr key={`m-stock-${idx}`} className="hover:bg-slate-50">
                                  <td className="px-4 py-2 border border-slate-200 font-bold">{r.tank || "—"}</td>
                                  <td className="px-4 py-2 border border-slate-200 font-medium">{r.variant || "—"}</td>
                                  <td className="px-4 py-2 border border-slate-200 text-right font-semibold">{r.qty || "—"}</td>
                                  <td className="px-4 py-2 border border-slate-200 text-right">{r.fat || "—"}</td>
                                  <td className="px-4 py-2 border border-slate-200 text-right">{r.snf || "—"}</td>
                                </tr>
                              ))
                          ) : null}

                          {/* Additional Custom Monthly Stock Rows */}
                          {customMonthlyClosingStock.map((r, idx) => (
                            <tr key={`m-custom-${idx}`} className="hover:bg-slate-50 bg-teal-50/10">
                              <td className="p-1 border border-slate-200">
                                <input
                                  type="text"
                                  placeholder="Tank name..."
                                  value={r.tank}
                                  onChange={(e) => {
                                    const updated = [...customMonthlyClosingStock];
                                    updated[idx] = { ...updated[idx], tank: e.target.value };
                                    setCustomMonthlyClosingStock(updated);
                                  }}
                                  className="w-full bg-transparent px-2 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-bold"
                                />
                              </td>
                              <td className="p-1 border border-slate-200">
                                <input
                                  type="text"
                                  placeholder="Product variant..."
                                  value={r.variant}
                                  onChange={(e) => {
                                    const updated = [...customMonthlyClosingStock];
                                    updated[idx] = { ...updated[idx], variant: e.target.value };
                                    setCustomMonthlyClosingStock(updated);
                                  }}
                                  className="w-full bg-transparent px-2 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-medium"
                                />
                              </td>
                              <td className="p-1 border border-slate-200 text-right">
                                <input
                                  type="number"
                                  step="any"
                                  placeholder="0.0"
                                  value={r.qty}
                                  onChange={(e) => {
                                    const updated = [...customMonthlyClosingStock];
                                    updated[idx] = { ...updated[idx], qty: e.target.value };
                                    setCustomMonthlyClosingStock(updated);
                                  }}
                                  className="w-full bg-transparent px-2 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono font-semibold"
                                />
                              </td>
                              <td className="p-1 border border-slate-200 text-right">
                                <input
                                  type="number"
                                  step="any"
                                  placeholder="0.0"
                                  value={r.fat}
                                  onChange={(e) => {
                                    const updated = [...customMonthlyClosingStock];
                                    updated[idx] = { ...updated[idx], fat: e.target.value };
                                    setCustomMonthlyClosingStock(updated);
                                  }}
                                  className="w-full bg-transparent px-2 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                                />
                              </td>
                              <td className="p-1 border border-slate-200 text-right">
                                <input
                                  type="number"
                                  step="any"
                                  placeholder="0.0"
                                  value={r.snf}
                                  onChange={(e) => {
                                    const updated = [...customMonthlyClosingStock];
                                    updated[idx] = { ...updated[idx], snf: e.target.value };
                                    setCustomMonthlyClosingStock(updated);
                                  }}
                                  className="w-full bg-transparent px-2 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                                />
                              </td>
                            </tr>
                          ))}

                          {(!mData.monthEndClosingStock || mData.monthEndClosingStock.length === 0) && customMonthlyClosingStock.length === 0 && (
                            <tr>
                              <td colSpan={5} className="px-4 py-6 text-center text-slate-400 font-medium border border-slate-200">
                                No closing stock records exist for this month. Click "+ Add Row" below to add a month-end record.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    ) : (
                      <table className="w-full border-collapse text-xs text-left border border-slate-200">
                        <thead className="bg-slate-100 font-bold uppercase tracking-wider text-[10px]">
                          <tr>
                            <th rowSpan={2} className="px-4 py-2 border border-slate-200">Variant</th>
                            <th colSpan={3} className="px-4 py-1 border border-slate-200 text-center">Cold Room</th>
                            <th colSpan={3} className="px-4 py-1 border border-slate-200 text-center">Blast Room</th>
                            <th rowSpan={2} className="px-4 py-2 border border-slate-200 text-right">G. Total Crates</th>
                          </tr>
                          <tr className="bg-slate-100">
                            <th className="px-2 py-1 border border-slate-200 text-right">Crates</th>
                            <th className="px-2 py-1 border border-slate-200 text-right">UBD</th>
                            <th className="px-2 py-1 border border-slate-200 text-right">Total</th>
                            <th className="px-2 py-1 border border-slate-200 text-right">Crates</th>
                            <th className="px-2 py-1 border border-slate-200 text-right">UBD</th>
                            <th className="px-2 py-1 border border-slate-200 text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                          {mData.monthEndClosingStockCB && mData.monthEndClosingStockCB.length > 0 ? (
                            mData.monthEndClosingStockCB
                              .filter((r: any) => r.variant || r.coldCrates || r.coldUbd || r.blastCrates || r.blastUbd)
                              .map((r: any, idx: number) => {
                                const cc = parseFloat(r.coldCrates) || 0;
                                const cu = parseFloat(r.coldUbd) || 0;
                                const bc = parseFloat(r.blastCrates) || 0;
                                const bu = parseFloat(r.blastUbd) || 0;
                                const packs = parseFloat(r.unitsPerCrate) || 1;
                                const cTotal = cc + (cu / packs);
                                const bTotal = bc + (bu / packs);
                                const gTotal = cTotal + bTotal;
                                return (
                                  <tr key={`m-cb-${idx}`} className="hover:bg-slate-50 font-medium">
                                    <td className="px-4 py-2 border border-slate-200 font-bold">{r.variant || "—"}</td>
                                    <td className="px-2 py-2 border border-slate-200 text-right">{r.coldCrates || "—"}</td>
                                    <td className="px-2 py-2 border border-slate-200 text-right">{r.coldUbd || "—"}</td>
                                    <td className="px-2 py-2 border border-slate-200 text-right font-bold text-teal-700">{cTotal.toFixed(2)}</td>
                                    <td className="px-2 py-2 border border-slate-200 text-right">{r.blastCrates || "—"}</td>
                                    <td className="px-2 py-2 border border-slate-200 text-right">{r.blastUbd || "—"}</td>
                                    <td className="px-2 py-2 border border-slate-200 text-right font-bold text-blue-700">{bTotal.toFixed(2)}</td>
                                    <td className="px-4 py-2 border border-slate-200 text-right font-black text-amber-700">{gTotal.toFixed(2)}</td>
                                  </tr>
                                );
                              })
                          ) : null}

                          {/* Additional Custom Monthly Cold/Blast Stock Rows */}
                          {customMonthlyClosingStockCB.map((r, idx) => {
                            const cc = parseFloat(r.coldCrates) || 0;
                            const cu = parseFloat(r.coldUbd) || 0;
                            const bc = parseFloat(r.blastCrates) || 0;
                            const bu = parseFloat(r.blastUbd) || 0;
                            const packs = parseFloat(r.unitsPerCrate) || 1;
                            const cTotal = cc + (cu / packs);
                            const bTotal = bc + (bu / packs);
                            const gTotal = cTotal + bTotal;
                            return (
                              <tr key={`m-cb-custom-${idx}`} className="hover:bg-slate-50 bg-cyan-50/10">
                                <td className="p-1 border border-slate-200">
                                  <input
                                    type="text"
                                    placeholder="Variant name..."
                                    value={r.variant}
                                    onChange={(e) => {
                                      const updated = [...customMonthlyClosingStockCB];
                                      updated[idx] = { ...updated[idx], variant: e.target.value };
                                      setCustomMonthlyClosingStockCB(updated);
                                    }}
                                    className="w-full bg-transparent px-2 py-1 text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-bold"
                                  />
                                </td>
                                <td className="p-1 border border-slate-200">
                                  <input
                                    type="number"
                                    step="any"
                                    value={r.coldCrates}
                                    onChange={(e) => {
                                      const updated = [...customMonthlyClosingStockCB];
                                      updated[idx] = { ...updated[idx], coldCrates: e.target.value };
                                      setCustomMonthlyClosingStockCB(updated);
                                    }}
                                    className="w-full bg-transparent px-1 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                                  />
                                </td>
                                <td className="p-1 border border-slate-200">
                                  <input
                                    type="number"
                                    step="any"
                                    value={r.coldUbd}
                                    onChange={(e) => {
                                      const updated = [...customMonthlyClosingStockCB];
                                      updated[idx] = { ...updated[idx], coldUbd: e.target.value };
                                      setCustomMonthlyClosingStockCB(updated);
                                    }}
                                    className="w-full bg-transparent px-1 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                                  />
                                </td>
                                <td className="px-2 py-2 border border-slate-200 text-right font-bold text-teal-700">
                                  {cTotal > 0 ? cTotal.toFixed(2) : "—"}
                                </td>
                                <td className="p-1 border border-slate-200">
                                  <input
                                    type="number"
                                    step="any"
                                    value={r.blastCrates}
                                    onChange={(e) => {
                                      const updated = [...customMonthlyClosingStockCB];
                                      updated[idx] = { ...updated[idx], blastCrates: e.target.value };
                                      setCustomMonthlyClosingStockCB(updated);
                                    }}
                                    className="w-full bg-transparent px-1 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                                  />
                                </td>
                                <td className="p-1 border border-slate-200">
                                  <input
                                    type="number"
                                    step="any"
                                    value={r.blastUbd}
                                    onChange={(e) => {
                                      const updated = [...customMonthlyClosingStockCB];
                                      updated[idx] = { ...updated[idx], blastUbd: e.target.value };
                                      setCustomMonthlyClosingStockCB(updated);
                                    }}
                                    className="w-full bg-transparent px-1 py-1 text-right text-slate-800 border-0 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded font-mono"
                                  />
                                </td>
                                <td className="px-2 py-2 border border-slate-200 text-right font-bold text-blue-700">
                                  {bTotal > 0 ? bTotal.toFixed(2) : "—"}
                                </td>
                                <td className="px-4 py-2 border border-slate-200 text-right font-black text-amber-700">
                                  {gTotal > 0 ? gTotal.toFixed(2) : "—"}
                                </td>
                              </tr>
                            );
                          })}

                          {(!mData.monthEndClosingStockCB || mData.monthEndClosingStockCB.length === 0) && customMonthlyClosingStockCB.length === 0 && (
                            <tr>
                              <td colSpan={8} className="px-4 py-6 text-center text-slate-400 font-medium border border-slate-200">
                                No closing stock records exist for this month. Click "+ Add Row" below to add a month-end record.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    )}
                  </div>

                  {/* Add Row Button for Month-End Closing Stock */}
                  <div className="p-3 bg-slate-50 border-t border-slate-200">
                    <button
                      onClick={() => {
                        if (!isColdRoom) {
                          setCustomMonthlyClosingStock(prev => [...prev, { tank: "", variant: "", qty: "", fat: "", snf: "", acidity: "", temp: "" }]);
                        } else {
                          setCustomMonthlyClosingStockCB(prev => [...prev, { variant: "", unitsPerCrate: "1", coldCrates: "", coldUbd: "", blastCrates: "", blastUbd: "" }]);
                        }
                      }}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-lg transition-all"
                    >
                      + Add Row
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}

    </div>
  );
}
