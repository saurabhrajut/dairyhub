
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";

const Section = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <section id={id} className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24">{title}</h2>
        {children}
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">{children}</h3>
);


export function CalibrationStandardizationModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">Calibration and Standardization</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A guide to ensuring accuracy in dairy laboratory measurements.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-full pr-6 mt-4">
            <div className="prose max-w-none text-gray-700 text-sm leading-relaxed">
                <section className="mb-8">
                    <p>Calibration may be defined as establishing and recording the measurement uncertainty of the measuring equipment. It does not involve adjustment but may show/demonstrate the necessity for adjustment. In simpler words, calibration is a technique in which a comparison between measurements of known magnitude or correctness is made or set with one device and another measurement made in a similar way with a second device. The device which is used as a reference generally has a known or assigned degree of correctness and is referred as standard. The second device which is to be calibrated is generally referred as the unit under test (UUT), test instrument (TI), etc.</p>
                    <p>In a dairy plant, milk is critically analyzed for a number of factors like its composition and quality during reception, processing, and during dispatch for sale. This is required to ensure optimum price of the product, checking its suitability for processing, and to know whether it meets the legal standards. In order to make sure that all the results generated during the analysis of milk and milk products are accurate and to prevent the generation of erroneous results, the calibration of glassware is a must. Therefore, calibration of glassware before being used for analysis is of utmost importance.</p>
                    <p>The glasswares that are commonly used during analysis in a dairy plant laboratory are butyrometer, lactometer, milk pipette and other pipettes, volumetric flask, measuring cylinder, beaker, thermometer, etc.</p>
                    <p>The reliability of the obtained results not only depends on the calibration of the glasswares involved in the testing but also on the chemicals involved in various tests. So in order to ensure that the prepared solutions are accurate, we need to go for their standardization using some primary standard substances like oxalic acid, sodium carbonate, sodium hydrogen carbonate, etc. Such chemicals are referred as primary substances. To ensure proper standardization of chemicals, one must have some basic knowledge of terms like normality, molarity, and molality. These terms are discussed below.</p>
                    <p className="text-xs text-muted-foreground mt-4"># Springer Nature Singapore Pte Ltd. 2020<br/>K. Gandhi et al., Chemical Quality Assurance of Milk and Milk Products,<br/>https://doi.org/10.1007/978-981-15-4167-4_6</p>
                </section>
                
                <Section title="Key Definitions" id="definitions">
                    <SubHeading>Reagent</SubHeading>
                    <p>A substance that can react with another substance or an agent and brings about the chemical change/reaction.</p>
                    
                    <SubHeading>Solution</SubHeading>
                    <p>A solution is a homogeneous mixture of two or more substances (or components). It consists of two components namely solute and solvent. The component present in higher proportions is called solvent. The component present in smaller proportions is called solute.</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>A solution in which a small amount of solute is present is called a dilute solution.</li>
                        <li>A solution in which a large amount of solute is present is called a concentrated solution.</li>
                        <li>A solution in which no more solute can be dissolved in a given amount of solvent at a particular temperature is called a saturated solution.</li>
                    </ul>

                    <SubHeading>Standard Solution</SubHeading>
                    <p>A solution whose strength or concentration is known is called a Standard solution.</p>
                    
                    <SubHeading>Normal Solution (Normality)</SubHeading>
                    <p>It is the number of gram equivalents of a solute/molecule present in 1 L of a solution (denoted by N). N = gram equivalent of solute / volume of solution in liter.</p>
                    <p>Gram equivalent weight is equal to the molecular weight of the compound divided by its valance or reactive ion or by the number of replaceable hydrogen (for acids) or hydroxyl ions (for base).</p>

                    <SubHeading>Molarity</SubHeading>
                    <p>The number of moles of solute dissolved per liter of the solution. It is denoted by M. M = mole of solute / volume of solution in liter.</p>
                    
                    <SubHeading>Molality</SubHeading>
                    <p>The number of moles of solute dissolved per 1000 g of solvent. It is denoted by “m”. m = No. of moles of solute / wt. of solvent (kg).</p>
                    <p className="font-semibold mt-2">Note: Normality and molarity are temperature dependent because volume depends on temperature while molality is temperature independent.</p>
                </Section>
                
                <Section title="Calibration of Milk Pipette" id="pipette">
                     <SubHeading>(a) Comparison Method</SubHeading>
                     <p>The fat content of a milk sample estimated by the new pipette is compared with the fat content estimated by using a well-calibrated pipette. If the result is the same, the new pipettes are accepted.</p>
                     
                     <SubHeading>(b) BIS Method</SubHeading>
                     <p>This method determines if the pipette dispenses 10.75 ± 0.03 ml of distilled water at 27°C.</p>
                     <ol className="list-decimal list-inside space-y-1">
                         <li>Clean the pipette and fill with distilled water at 27°C above the mark.</li>
                         <li>Adjust the meniscus to the mark.</li>
                         <li>Dispense the water into a pre-weighed beaker.</li>
                         <li>Weigh the beaker with water to find the mass of water delivered.</li>
                         <li>Calculate the volume: Volume = Mass / Density (Density of water at 27°C is 0.99654 g/mL).</li>
                         <li>Accept if the volume is within the tolerance.</li>
                     </ol>
                     
                     <SubHeading>(c) Mathematical Method</SubHeading>
                     <p>This method involves calculating the volume per unit length of the pipette stem and then determining the exact point for the 10.75 ml mark based on measurements at two temporary points.</p>
                </Section>
                
                <Section title="Calibration of Butyrometer" id="butyrometer">
                     <p>Butyrometers are calibrated based on the principle that each 1% fat mark corresponds to an internal volume of 0.125 ml. This is typically checked using purified mercury due to its high density and non-wetting properties.</p>
                     
                     <Table>
                        <TableCaption>Table 6.1 Classification of butyrometer as per BIS</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>Scale (%)</TableHead><TableHead>Product</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>0–0.5</TableCell><TableCell>Skim milk</TableCell></TableRow>
                            <TableRow><TableCell>0–4</TableCell><TableCell>Partly skimmed milk, buttermilk</TableCell></TableRow>
                            <TableRow><TableCell>0–10</TableCell><TableCell>Whole milk, evaporated milk (unsweetened)</TableCell></TableRow>
                            <TableRow><TableCell>0–20</TableCell><TableCell>Dry milk powder</TableCell></TableRow>
                            <TableRow><TableCell>0–40</TableCell><TableCell>Ice cream, condensed milk, cheese</TableCell></TableRow>
                            <TableRow><TableCell>0–70</TableCell><TableCell>Cream</TableCell></TableRow>
                            <TableRow><TableCell>0–90</TableCell><TableCell>Butter</TableCell></TableRow>
                        </TableBody>
                     </Table>
                </Section>

                <Section title="Calibration of Lactometer" id="lactometer">
                     <p>Lactometers are calibrated using solutions of known specific gravity, typically anhydrous sodium carbonate or sodium chloride solutions. The lactometer reading is checked against the known specific gravity of these standard solutions at a specified temperature (e.g., 27°C for BIS lactometers).</p>
                </Section>
                
                <Section title="Calibration of Other Glassware" id="other-glassware">
                    <p>Volumetric flasks, measuring cylinders, and beakers are calibrated by weighing the volume of distilled water they contain at a specific temperature (e.g., 27°C) and comparing it to the stated capacity, ensuring it falls within the tolerance limits for its class (Class A or Class B).</p>
                </Section>
                
                <Section title="Calibration of Thermometer" id="thermometer">
                    <p>Thermometers are calibrated at fixed points. For a 0-100°C thermometer, this is done at the ice point (0°C) using an ice-water mixture and at the boiling point (100°C, adjusted for atmospheric pressure) using boiling distilled water.</p>
                </Section>
                
                <Section title="Calibration of Weighing Balance" id="balance">
                    <p>Weighing balances are calibrated using three key tests:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Eccentric Test:</strong> Checks for accuracy when a weight is placed at different positions on the platform.</li>
                        <li><strong>Repeatability Test:</strong> Checks if the balance gives the same reading for the same weight multiple times.</li>
                        <li><strong>Linearity Test:</strong> Checks for accuracy across the entire measuring range of the balance.</li>
                    </ul>
                </Section>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
