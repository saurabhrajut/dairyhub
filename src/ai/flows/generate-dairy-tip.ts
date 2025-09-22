'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a daily dairy tip.
 *
 * It exports:
 * - `generateDairyTip`: An async function to generate a new daily dairy tip.
 * - `DairyTipInput`: The input type for the generateDairyTip function (empty).
 * - `DairyTipOutput`: The output type for the generateDairyTip function (string).
 */

import {ai} from '@/ai/genkit';
import {z, runFlow} from 'genkit';

const DairyTipInputSchema = z.object({});
export type DairyTipInput = z.infer<typeof DairyTipInputSchema>;

const DairyTipOutputSchema = z.string();
export type DairyTipOutput = z.infer<typeof DairyTipOutputSchema>;

export async function generateDairyTip(): Promise<DairyTipOutput> {
  const tip = await runFlow(generateDairyTipFlow, {});
  return tip;
}

const generateDairyTipPrompt = ai.definePrompt({
    name: 'generateDairyTipPrompt',
    model: 'googleai/gemini-1.5-flash',
    prompt: `You are an expert dairy and food technologist. Your task is to generate a new, detailed, insightful, and scientific "Did you know?" style tip related to the dairy or food industry.

The response MUST be in Hinglish (a mix of Hindi and English).
The tone should be educational yet easy for a common person to understand.
Provide a deep, long-form answer with scientific backing, not just a short fact. The answer should be highly technical and professional.

Choose a topic from the following areas:
- **Dairy Processing:** Pasteurization (HTST, LTLT), Homogenization (single vs two-stage), Sterilization, UHT (Direct vs Indirect), Cream Separation, CIP (Cleaning-In-Place).
- **Dairy Products:** In-depth information about Paneer, Cheese (Cheddar, Mozzarella), Yogurt (Dahi), Ghee, Butter, Ice Cream, or Khoa.
- **Milk Chemistry:** Detailed explanation of Fat (triglycerides, FFA), Protein (Casein micelles, Whey proteins like α-lactalbumin, β-lactoglobulin), Lactose (crystallization, Maillard reaction), Minerals (Colloidal Calcium Phosphate).
- **Quality Assurance:** Concepts like HACCP, TQM, ISO standards (9001, 22000), GMP, GHP, GLP.
- **Quality Control:** SOPs (Standard Operating Procedures), PRPs (Prerequisite Programs), OPRPs, In-process quality checks.
- **Indian Standards:** FSSAI rules or BIS standards for a specific dairy product.
- **Food Preservation:** Principles of preservation, like using heat, cold, chemical preservatives, or controlling water activity (aw).
- **Adulteration:** Scientific details about a common milk adulterant (e.g., urea, maltodextrin, detergents) and its detection method (e.g., DMAB test for urea).
- **R&D in Dairy:** New technologies (like HPP, PEF), novel ingredients (WPC, WPI), or research trends in the dairy sector.
- **Chemicals in Dairy:** The role and preparation of acids (Citric, Lactic, HCl), bases (NaOH), and indicators (Phenolphthalein) in a dairy lab.
- **Standardization:** Detailed explanation of standardizing milk for Fat and SNF using Pearson Square or algebraic methods.
- **Acidity Control:** How to chemically decrease milk acidity using neutralizers (like sodium bicarbonate) or naturally increase it during fermentation.
- **Food Engineering Principles:** In-depth look at a specific piece of equipment like a Pasteurizer (PHE), Homogenizer, Evaporator (including Calandria types), explaining its working principle and critical parameters.

Example of a good, detailed, technical response:
"**Homogenization ka scientific raaz kya hai?** Homogenization ek mechanical process hai jisme doodh ko high pressure (lagbhag 2000-3000 PSI) par ek chote se gap (homogenizer valve) se force kiya jaata hai. Isse doodh ke bade fat globules (3-6 microns) toot kar 2 micron se bhi chote ho jaate hain. Is process se fat globules ka surface area badh jaata hai, aur un par ek nayi membrane ban jaati hai jisme casein aur whey proteins hote hain. Yeh nayi membrane fat globules ko aapas mein judne se rokti hai, jisse doodh par malai ki layer nahi banti. Isliye homogenized doodh ka texture zyada creamy aur taste rich lagta hai. Two-stage homogenization me, pehle stage ke baad ek lower pressure (around 500 PSI) ka second stage istemal hota hai jo pehle stage me bane छोटे fat clusters ko todta hai, jisse viscosity control hoti hai."

Now, generate a new, different, and equally detailed scientific and technical tip from one of the categories above.
`,
    config: {
        temperature: 1.0,
    }
});

const generateDairyTipFlow = ai.defineFlow(
  {
    name: 'generateDairyTipFlow',
    inputSchema: DairyTipInputSchema,
    outputSchema: DairyTipOutputSchema,
  },
  async () => {
    const response = await generateDairyTipPrompt();
    return response.text ?? "Did you know? Homogenization is a mechanical process where milk is forced through a small gap at high pressure. This breaks down large fat globules into smaller ones, preventing a cream layer from forming and resulting in a creamier texture.";
  }
);
