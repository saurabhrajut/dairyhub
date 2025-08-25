
"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { FlaskConical, Microscope, Shield, ArrowLeft } from "lucide-react"

const platformTests = [
    {
        id: "organoleptic",
        title: "Organoleptic Test (संवेदी परीक्षण)",
        content: `
            <p>The lid of the can is opened as soon as the milk arrives on the dairy platform, and the milk is mixed up with a plunger to check for a pleasant or bad odour. The general appearance, color, consistency, temperature and flavor are next assessed.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>Begin by shaking the milk can a little bit, then opening the lid and tasting it for any aroma or flavor that radiates from it.</li>
                <li>Examine the milk's visual appearance, including color, any foreign items on the surface, and the sanitary state of the milk can. The cleanliness of the can reveals how the milk was treated.</li>
                <li>To check the temperature of the milk, press your hand on the milk can. The temperature of the milk can reveal when it was last milked.</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>The milk that is not having the required standards is rejected.</p>
        `
    },
    {
        id: "cob",
        title: "Clot On Boiling (COB) Test",
        content: `
            <p>It is a simple and cheap test for definitive result based on heat stability of the milk.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>In a test tube take 5ml of milk.</li>
                <li>Place it a boiling water bath.</li>
                <li>Remove it from the bath without shaking.</li>
                <li>Note for any acidic smell or precipitated particles.</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>The acidity of milk that results in a positive test is usually greater than 0.22 percent (as lactic acid) or has abnormally high protein content, such as colostrum milk. Because such milk cannot withstand heat treatment during processing, it is not appropriate for distribution or processing as liquid milk.</p>
        `
    },
    {
        id: "alcohol",
        title: "Alcohol Test",
        content: `
            <p>A simple and quick alcohol coagulation test is available. It's based on the fact that milk proteins have a low stability when exposed to alcohol. When milk has a high quantity of lactic acid, rennet, milk protein, or salt, as in mastitis, the test may fail.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>In a test tube take 5ml of milk.</li>
                <li>Add equal quantity of 68% Ethyl alcohol.</li>
                <li>Mix the contents well by inverting the test tube.</li>
                <li>Examine for formation of coagulation.</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>If any coagulation is formed, then fine particles of curd will be visible inside the test tube. This denotes positive alcohol test and such milk is rejected.</p>
        `
    },
];

const preservativesData = [
    {
        title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
        purpose: 'To neutralize developed acidity in sour milk.',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Rosolic Acid Test</h4>
                <p><strong>Siddhant:</strong> Rosolic acid is an indicator which gives a red colour in alkaline condition.</p>
                <ol>
                    <li>Take 10 ml of milk in a test tube and add an equal volume of ethyl alcohol (95%).</li>
                    <li>Add a few drops of 0.1% rosolic acid solution and mix.</li>
                    <li>Appearance of a <strong>rose-red colour</strong> indicates the presence of neutralizers, whereas pure milk turns brownish.</li>
                </ol>
                <h4 class="mt-4">Method 2: Alkalinity of Ash Test</h4>
                <p><strong>Siddhant:</strong> If a neutralizer has been added, the ash of the milk will have a higher alkalinity compared to pure milk.</p>
                <ol>
                    <li>Take 20 ml of milk in a silica crucible.</li>
                    <li>Evaporate the water and ash the contents in a muffle furnace at 550°C.</li>
                    <li>Dissolve the ash in 10 ml of distilled water and titrate it against 0.1 N HCl.</li>
                    <li>A titre value of more than 1.2 ml of 0.1 N HCl indicates the presence of neutralizers.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Formalin (Formaldehyde)',
        purpose: 'A powerful preservative to extend shelf life illegally.',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Leach Test</h4>
                <p><strong>Siddhant:</strong> Formaldehyde gives a violet colour with ferric salts in the presence of concentrated sulfuric acid.</p>
                <ol>
                    <li>Take about 5 ml of milk in a test tube.</li>
                    <li>Add to it equal volume of detecting reagent (Conc. HCl + 10% FeCl3 solution).</li>
                    <li>Keep the tube in boiling water bath for about 3-4 min.</li>
                    <li>Appearance of a <strong>brownish pink colour</strong> confirms the presence of formalin in the sample, whereas; control sample will remain white.</li>
                </ol>
                <h4 class="mt-4">Method 2: Chromotropic Acid Test</h4>
                 <p><strong>Siddhant:</strong> Formaldehyde reacts with chromotropic acid to form a colored compound.</p>
                <ol>
                    <li>Take 1 ml of milk in a test tube.</li>
                    <li>Add 1 ml of chromotropic acid reagent and mix well.</li>
                    <li>Appearance of a <strong>yellow color</strong> confirms the presence of formalin, whereas the control sample remains white.</li>
                </ol>
            </div>
        `
    },
     {
        title: 'Hydrogen Peroxide (H₂O₂)',
        purpose: 'Used as a preservative, especially where refrigeration is not available.',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Para-phenylenediamine Test</h4>
                <p><strong>Siddhant:</strong> Hydrogen peroxide oxidizes para-phenylenediamine, changing its colour from yellow to blue.</p>
                <ol>
                    <li>Take 2 ml of milk in a test tube and add an equal volume of raw milk.</li>
                    <li>Add 2 drops of 2% para-phenylenediamine solution and shake well.</li>
                    <li>Appearance of a <strong>blue colour</strong> confirms the presence of hydrogen peroxide.</li>
                </ol>
                
                <h4 class="mt-4">Method 2: Potassium Iodide & Starch Test</h4>
                <ol>
                    <li>Take 1 ml of milk and add 1 ml of potassium iodide-starch reagent.</li>
                    <li>Appearance of a <strong>blue color</strong> indicates the presence of H₂O₂.</li>
                </ol>
            </div>
        `
    },
];

const adulterantsData = [
    {
        title: 'Cane Sugar',
        purpose: 'To increase the SNF content and density (CLR) of milk, often after adding water.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: Using Seliwanoff’s Reagent</h4>
                <p><strong>Siddhant:</strong> Fructose in cane sugar reacts with resorcinol in HCl to give red colour.</p>
                <ol>
                    <li>Take 1 ml of milk and add 1 ml of Seliwanoff's reagent (resorcinol in HCl).</li>
                    <li>Heat in a boiling water bath for 5 minutes.</li>
                    <li>A <strong>red colour</strong> indicates the presence of sucrose. Pure milk remains white.</li>
                </ol>

                <h4 class="mt-4">Method 2: Resorcinol Test</h4>
                <ol>
                    <li>Take about 5 ml of milk in a test tube.</li>
                    <li>Add 1 ml of concentrated HCl.</li>
                    <li>Add 0.1 g of resorcinol and mix.</li>
                    <li>Place the tube in boiling water bath for 5 min.</li>
                    <li>A <strong>red colour</strong> indicates the presence of sucrose.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Starch & Other Cereal Flours',
        purpose: 'To increase the SNF content and thickness of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: Using Iodine (Without heated milk sample)</h4>
                <ol>
                    <li>Take 1 ml milk in a test tube.</li>
                    <li>Add 2 drops of iodine solution.</li>
                    <li>Appearance of a <strong>blue colour</strong> indicates the presence of starch.</li>
                </ol>

                <h4 class="mt-4">Method 2: Using Iodine (With boiled milk sample)</h4>
                <p><strong>Siddhant:</strong> Starch forms a purple-blue complex with iodine.</p>
                <ol>
                    <li>Boil 3-5 ml of milk and cool to room temperature.</li>
                    <li>Add 1-2 drops of iodine solution. A <strong>blue colour</strong> indicates the presence of starch, which disappears on boiling and reappears on cooling.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Urea',
        purpose: 'To increase the non-protein nitrogen (NPN) content, which falsely inflates protein estimation and also increases SNF.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: DMAB & TCA Method</h4>
                <p><strong>Siddhant:</strong> Urea forms a yellow complex with p-dimethylaminobenzaldehyde (DMAB) in a slightly acidic solution.</p>
                 <ol>
                    <li>Take equal quantity of milk and 24% TCA in a test tube, mix and filter.</li>
                    <li>Take 3 ml of filtrate in another test tube.</li>
                    <li>Add 3 ml of 1.6% DMAB reagent.</li>
                    <li>A <strong>distinct yellow colour</strong> indicates added urea.</li>
                </ol>
                <h4 class="mt-4">Method 2: DMAB Reagent Method</h4>
                <ol>
                    <li>Take 1 ml of milk in a test tube.</li>
                    <li>Add 1 ml of 1.6% DMAB reagent.</li>
                    <li>A <strong>distinct yellow colour</strong> indicates added urea.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Glucose',
        purpose: 'To increase the SNF of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Siddhant:</strong> Using a modified Barfoed's test, glucose reduces cupric ions to cuprous, which then reduces phosphomolybdic acid to form a blue compound.</p>
                <ol>
                    <li>Take 1 ml of milk, add 1 ml of modified Barfoed’s reagent.</li>
                    <li>Heat in a boiling water bath for 3 min, then cool.</li>
                    <li>Add 1 ml of phosphomolybdic acid reagent.</li>
                    <li>Immediate formation of a <strong>deep blue color</strong> indicates added glucose.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Maltodextrin',
        purpose: 'A polysaccharide used as a food additive to increase thickness and SNF.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: Using Iodine Reagent</h4>
                <ol>
                   <li>Take 5 ml of milk sample in a test tube.</li>
                   <li>Add 2 ml of iodine solution (0.05 N) and mix.</li>
                   <li>Appearance of a <strong>chocolate-like red-brown color</strong> indicates the presence of dextrin/maltodextrin.</li>
                </ol>
                <h4 class="mt-4">Method 2: Using Citric Acid and Iodine Reagents</h4>
                <ol>
                   <li>Boil 20 ml milk, cool to 70°C and add 0.5 ml of 10% citric acid to coagulate.</li>
                   <li>Filter the coagulated milk.</li>
                   <li>To 2 ml of the filtrate, add 3 drops of iodine solution.</li>
                   <li>An <strong>orange-brown shade</strong> indicates the presence of maltodextrin.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Detergent',
        purpose: 'Added to emulsify external fat (vegetable oil) into milk to create synthetic milk.',
        content: `
            <div class="prose max-w-none prose-red">
                <p><strong>Siddhant:</strong> Anionic detergents form a complex with the cationic dye methylene blue. This complex is soluble in chloroform.</p>
                <ol>
                    <li>Take 1 ml of milk, add 1 ml of methylene blue solution and then 2 ml of chloroform.</li>
                    <li>Vortex for 15 seconds and then centrifuge at 1100 rpm for 3 minutes.</li>
                    <li>A more <strong>intense blue colour in the lower (chloroform) layer</strong> indicates the presence of detergent. If the upper layer is more intense, the detergent is absent.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Ammonium Salts',
        purpose: 'To increase the lactometer reading by increasing the density of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: Nessler’s Reagent Method</h4>
                 <ol>
                    <li>Take 5 ml of milk sample into a test tube.</li>
                    <li>Add 1 ml of Nessler’s reagent.</li>
                    <li>Appearance of <strong>yellowish or grey colour</strong> confirms the presence of added ammonium salts.</li>
                </ol>
                <h4 class="mt-4">Method 2: Turmeric Paper Method</h4>
                <ol>
                    <li>Take 5 ml of milk and add 1 ml of 10% NaOH.</li>
                    <li>Place a wet turmeric paper on the rim of the test tube.</li>
                    <li>Appearance of <strong>pinkish red colour</strong> on the paper confirms the presence of ammonium salt.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Sulfate Salts',
        purpose: 'To increase the lactometer reading.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Siddhant:</strong> Sulphates precipitate with Barium Chloride (BaCl₂).</p>
                <ol>
                    <li>Take 10 ml of milk and add 10 ml of Trichloroacetic acid (TCA) to coagulate it.</li>
                    <li>Filter the milk and take 5 ml of the clear filtrate.</li>
                    <li>Add a few drops of 5% BaCl₂ solution.</li>
                    <li>Formation of a <strong>milky-white precipitate</strong> indicates the presence of added sulphates.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Vegetable/Refined Oil (Foreign Fat)',
        purpose: 'To replace natural milk fat with cheaper vegetable oil to increase profit.',
        content: `
            <div class="prose max-w-none prose-green">
                 <h4>Butyro-Refractometer (BR) Reading Method</h4>
                 <p><strong>Siddhant:</strong> Most vegetable oils have a higher refractive index than pure milk fat (ghee).</p>
                <ol>
                    <li>Isolate fat from the milk sample using a modified Gerber butyrometer.</li>
                    <li>Take the BR reading of the extracted fat at 40°C.</li>
                    <li>Pure milk fat has a BR reading of 40-43. Any reading higher than 45 suggests the presence of foreign fat.</li>
                </ol>
                <h4 class="mt-4">Baudouin Test for Vanaspati</h4>
                <p><strong>Siddhant:</strong> Vanaspati is required to contain 5% sesame oil. The sesamol from this oil reacts with furfural to give a red color.</p>
                <ol>
                    <li>Extract ghee from the milk sample.</li>
                    <li>Take 5g of melted fat, add 5ml concentrated HCl and 0.4ml of 2% furfural solution. Vortex for 2 minutes.</li>
                    <li>A <strong>pink or red color</strong> in the acid layer indicates vanaspati adulteration.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Pond Water (Nitrates)',
        purpose: 'To increase the volume of milk. Pond water is heavier than tap water.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Siddhant:</strong> This method detects nitrates/nitrites present in pond water from agricultural fertilizers.</p>
                <ol>
                    <li>Rinse a test tube with the milk sample and drain.</li>
                    <li>Add 2-3 drops of 2% diphenylamine solution along the side of the test tube.</li>
                    <li>If the sides of the test tube turn <strong>blue</strong>, the milk contains pond water.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Skimmed Milk Powder (SMP) in Natural Milk',
        purpose: 'To illegally increase the SNF content of natural milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Siddhant:</strong> The proteins in reconstituted milk powder contain reducing groups that react with phosphomolybdic acid on boiling to give a blue colour.</p>
                <ol>
                    <li>Centrifuge 50 ml of milk to separate the cream.</li>
                    <li>Coagulate the skim milk portion with acetic acid.</li>
                    <li>Wash the precipitate, then add 2 ml of 1% phosphomolybdic acid and boil for 15 minutes.</li>
                    <li>The curd from pure milk will be greenish, whereas the curd from a sample containing SMP will be <strong>bluish</strong>.</li>
                </ol>
            </div>
        `
    },
];

type AdulterationCategory = 'platform-tests' | 'preservatives' | 'adulterants';

export function AdulterationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [activeCategory, setActiveCategory] = useState<AdulterationCategory | null>(null);

  const categories = [
    { id: 'platform-tests', title: 'Platform Tests', description: 'Quick quality checks at milk reception.', data: platformTests, icon: Microscope, intro: "Platform tests are rapid quality assessments performed at the milk reception dock to quickly judge if a batch of milk is acceptable. These tests are crucial for preventing low-quality or adulterated milk from being mixed with good quality supplies." },
    { id: 'preservatives', title: 'Preservatives', description: 'Detecting illegal preservatives.', data: preservativesData, icon: Shield, intro: "By law, no preservative of any type is permitted in milk. Preservatives are generally added to milk when chilling or transport facilities are inadequate. The common preservatives used are neutralizers, formalin, etc." },
    { id: 'adulterants', title: 'Adulterants', description: 'Detecting common adulterants.', data: adulterantsData, icon: FlaskConical, intro: "Adulterants are substances added to milk to increase its volume or solids-not-fat content to deceive quality tests. Common adulterants include sugar, starch, urea, and vegetable oil." },
  ];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveCategory(null);
    }
    setIsOpen(open);
  };
  
  const selectedCategory = categories.find(c => c.id === activeCategory);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl sm:text-3xl text-center">Raw Milk Quality & Adulteration</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
             {selectedCategory ? selectedCategory.title : "A guide to Platform Tests and detecting adulterants in milk."}
          </DialogDescription>
        </DialogHeader>
        
        {selectedCategory ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                  <Button variant="ghost" onClick={() => setActiveCategory(null)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Categories
                  </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            {selectedCategory.intro}
                        </p>
                        <Accordion type="single" collapsible className="w-full">
                            {selectedCategory.data.map((item, index) => (
                                <AccordionItem key={item.title} value={`item-${index}`}>
                                    <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                                    <AccordionContent>
                                        {'purpose' in item && <p className="font-semibold text-gray-600 mb-2">Purpose: {item.purpose}</p>}
                                        <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </ScrollArea>
                <footer className="text-center mt-4 py-2 border-t border-gray-200 shrink-0">
                    <p className="text-xs text-gray-500">This guide is for informational purposes only. Always adhere to official laboratory standards and safety protocols.</p>
                </footer>
            </div>
        ) : (
             <ScrollArea className="flex-1 mt-4 sm:pr-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-0">
                    {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id as AdulterationCategory)}
                          className="flex flex-col items-center justify-center p-6 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-center transition-all duration-200"
                        >
                            <category.icon className="w-12 h-12 text-primary mb-3" />
                            <h3 className="font-semibold font-headline text-card-foreground">{category.title}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                        </button>
                    ))}
                </div>
            </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  )
}
    

    



