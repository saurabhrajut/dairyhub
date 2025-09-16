
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
import {z} from 'genkit';

const DairyTipInputSchema = z.object({});
export type DairyTipInput = z.infer<typeof DairyTipInputSchema>;

const DairyTipOutputSchema = z.string();
export type DairyTipOutput = z.infer<typeof DairyTipOutputSchema>;

export async function generateDairyTip(): Promise<DairyTipOutput> {
  return generateDairyTipFlow({});
}

const generateDairyTipFlow = ai.defineFlow(
  {
    name: 'generateDairyTipFlow',
    inputSchema: DairyTipInputSchema,
    outputSchema: DairyTipOutputSchema,
  },
  async () => {
    const { text } = await ai.generate({
      model: 'googleai/gemini-1.5-flash',
      prompt: `You are an expert dairy and food technologist. Your task is to generate a detailed, insightful, and scientific "Did you know?" style tip related to the dairy or food industry.

The response MUST be in Hinglish (a mix of Hindi and English).
The tone should be educational yet easy for a common person to understand.
Provide a deep, long-form answer with scientific backing, not just a short fact.

Choose a topic from the following areas:
- **Dairy Processing:** Pasteurization, Homogenization, Sterilization, UHT, Cream Separation, CIP.
- **Dairy Products:** In-depth information about Paneer, Cheese, Yogurt (Dahi), Ghee, Butter, Ice Cream, or Khoa.
- **Milk Chemistry:** Detailed explanation of Fat, Protein (Casein/Whey), Lactose, or Minerals.
- **Quality Assurance:** Concepts like HACCP, TQM, ISO standards (9001, 22000).
- **Quality Control:** SOPs (Standard Operating Procedures), PRPs (Prerequisite Programs), OPRPs.
- **Indian Standards:** FSSAI rules or BIS standards for a specific dairy product.
- **Food Preservation:** Principles of preservation, like using heat, cold, or chemical preservatives.
- **Adulteration:** Scientific details about a common milk adulterant and its detection.
- **R&D in Dairy:** New technologies or research trends in the dairy sector.

Example of a good, detailed response:
"**Homogenization ka scientific raaz kya hai?** Homogenization ek mechanical process hai jisme doodh ko high pressure (lagbhag 2000-3000 PSI) par ek chote se gap (homogenizer valve) se force kiya jaata hai. Isse doodh ke bade fat globules (3-6 microns) toot kar 2 micron se bhi chote ho jaate hain. Is process se fat globules ka surface area badh jaata hai, aur un par ek nayi membrane ban jaati hai jisme casein aur whey proteins hote hain. Yeh nayi membrane fat globules ko aapas mein judne se rokti hai, jisse doodh par malai ki layer nahi banti. Isliye homogenized doodh ka texture zyada creamy aur taste rich lagta hai."

Now, generate a new, different, and equally detailed scientific tip from one of the categories above.`,
    });
    return text ?? "Homogenization ek mechanical process hai jisme doodh ko high pressure par ek chote se gap se force kiya jaata hai. Isse doodh ke bade fat globules toot kar chote ho jaate hain, jisse doodh par malai ki layer nahi banti aur texture zyada creamy lagta hai.";
  }
);
