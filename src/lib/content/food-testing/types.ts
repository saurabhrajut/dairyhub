import React from "react";

export type TestType = "Chemical" | "Physical" | "Microbiological";

export type FoodCategory =
  | "Cereal & Grain Products"
  | "Bakery & Confectionery"
  | "Processed & Packaged Foods"
  | "Beverages"
  | "Pulses, Oil & Spices"
  | "Meat & Other Products"
  | "Namkeens & Snacks";

export interface FlowchartStepNode {
  stepNumber: number;
  phaseName: string;
  title: string;
  action: string;
  scientificMechanism: string;
  controlPoint?: string;
  reagentsInvolved?: string[];
}

export interface FoodTestItem {
  id: string;
  category: FoodCategory;
  testType: TestType;
  productName: string;
  testName: string;
  shortSummary: string;
  scientificReason?: string;
  principle?: string;
  detailedScientificRationale: string;
  detailedTestPrinciple: string;
  chemicalEquation?: string;
  formulaBreakdown?: {
    formula: string;
    variables: { symbol: string; description: string }[];
    derivation?: string;
    factorOrigin?: string;
    unitAnalysis?: string;
    practicalExample?: string;
  };
  referenceStandard: string;
  reagentsAndApparatus: string[];
  prescribedLimit: string;
  riskIfFailed: string;
  procedureSteps: string[];
  flowchartSteps: FlowchartStepNode[];
}
