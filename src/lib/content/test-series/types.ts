export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
  category: string;
}

export type DisciplineType = "dairy" | "food" | "biotech";
export type TestModeType = "full" | "mock"; // full = 120 Qs (120 Mins), mock = 30 Qs (30 Mins)

export interface SeriesSetInfo {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
}

export const TEST_SERIES_SETS: SeriesSetInfo[] = [
  {
    id: 1,
    title: "Set 1: National GATE & ICAR Core Technical Exam Series",
    subtitle: "Focus on ICAR AIEEA PG, ICAR NET, GATE XE/XL & Core Fundamentals",
    badge: "GATE & ICAR CORE",
  },
  {
    id: 2,
    title: "Set 2: FSSAI CFSO/TO & Quality Assurance Master Series",
    subtitle: "Focus on FSSAI Acts, Adulteration Tests, MBRT, Gerber & Lab Safety",
    badge: "FSSAI & QA SPECIAL",
  },
  {
    id: 3,
    title: "Set 3: Plant Operations, Engineering & Utility Equipment Series",
    subtitle: "Focus on Evaporators, Spray Dryers, CIP Automation & Utilities",
    badge: "PLANT & ENGINEERING",
  },
  {
    id: 4,
    title: "Set 4: Chemistry, Microbiology & Processing Series",
    subtitle: "Focus on Protein Chemistry, Starter Cultures & Product Processing",
    badge: "CHEMISTRY & MICROBIOLOGY",
  },
  {
    id: 5,
    title: "Set 5: Advanced Calculations & Science Series",
    subtitle: "Focus on Pearson Square Math, Rheology, Thermodynamics & UHT",
    badge: "CALCULATIONS & MATH",
  },
  {
    id: 6,
    title: "Set 6: Adulteration, Standards & Regulatory Series",
    subtitle: "Focus on Chemical Adulteration Tests, WPNI, FSSAI Limits & MFGM",
    badge: "ADULTERATION & STANDARDS",
  },
  {
    id: 7,
    title: "Set 7: Advanced Scientific & Brain-Twisting Series",
    subtitle: "Focus on Colloid Science, Isoelectric Point, Rheology, Kinetics & Novel Processing",
    badge: "ADVANCED SCIENTIFIC",
  },
  {
    id: 8,
    title: "Set 8: Advanced Industrial & Research Master Series",
    subtitle: "Focus on Homogenization, Fouling, Crystallization, Rheology & Proteomics",
    badge: "INDUSTRIAL MASTER",
  },
];
