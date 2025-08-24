
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Atom, Droplets, FlaskConical, Gem, Dna, TestTube, Cpu } from "lucide-react";


const physicalProperties = [
    { property: "Colour and optical properties", value: "White to yellow opaque", details: "Opacity is due to light scattering by fat globules and casein micelles. Yellow color is due to carotene from feed." },
    { property: "Flavour", value: "Pleasant, slightly sweet", details: "Combined effect of components. Off-flavors can develop from feed, bacterial growth, or oxidation." },
    { property: "Refractive Index (at 20°C)", value: "1.3440 - 1.3485", details: "Used for quick estimation of total solids and to detect water adulteration." },
    { property: "Density (at 20°C)", value: "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", details: "Milk is denser than water due to its solid content (SNF). Higher fat content slightly lowers density." },
    { property: "Viscosity (at 25°C)", value: "~2.0 cP", details: "About twice as viscous as water. Depends on temperature and composition (fat, protein). Homogenization increases viscosity." },
    { property: "Surface Tension (at 20°C)", value: "50 dyne/cm", details: "Lower than water (72 dyne/cm) due to surfactants like proteins and free fatty acids." },
    { property: "Freezing Point", value: "-0.512 to -0.575 °C", details: "A reliable indicator for detecting added water, as added water raises the freezing point closer to 0°C." },
    { property: "Boiling Point", value: "100.17 °C", details: "Slightly higher than water due to dissolved solids." },
    { property: "Acidity (Titratable)", value: "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", details: "Natural acidity is due to casein, phosphates, citrates, etc. Not due to lactic acid in fresh milk." },
    { property: "pH", value: "6.5 - 6.7", details: "Slightly acidic. Lower pH suggests bacterial action (souring)." },
    { property: "Heat Stability", value: "Varies, depends on salt balance", details: "Ability to withstand high temperatures without coagulation. Crucial for sterilized milk products." },
    { property: "Redox Potential (Eh)", value: "+0.2 to +0.3 volts", details: "Indicates the balance between oxidizing and reducing agents. Decreases upon boiling or due to microbial growth."}
];

const InfoBlock = ({ title, children, noProse }: { title: string, children: React.ReactNode, noProse?: boolean }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        {noProse ? (
            <div className="text-gray-700">{children}</div>
        ) : (
            <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
        )}
    </div>
);


const Section = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
    <div>
        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-headline">
            <Icon className="w-6 h-6" />
            <span>{title}</span>
        </h3>
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed prose max-w-none break-words">
            {children}
        </div>
    </div>
);

const chemistryTopics = [
    { value: "composition", title: "Composition", icon: BookOpen, content: <CompositionContent /> },
    { value: "mammary_gland", title: "Mammary Gland & Secretion", icon: Cpu, content: <MammaryGlandContent /> },
    { value: "proteins", title: "Proteins", icon: Dna, content: <ProteinsContent /> },
    { value: "fat", title: "Fat", icon: Droplets, content: <FatContent /> },
    { value: "lactose", title: "Lactose", icon: Atom, content: <LactoseContent /> },
    { value: "minerals", title: "Minerals & Salts", icon: Gem, content: <MineralsContent /> },
    { value: "vitamins_enzymes", title: "Vitamins & Enzymes", icon: FlaskConical, content: <VitaminsEnzymesContent /> },
    { value: "properties", title: "Physical Properties", icon: TestTube, content: <PropertiesContent /> },
    { value: "other", title: "Other Components", icon: FlaskConical, content: <OtherComponentsContent /> },
];

export function MilkChemistryModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null); // Reset when closing
    }
    setIsOpen(open);
  };

  const selectedTopic = chemistryTopics.find(t => t.value === activeTopic);
  
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl lg:max-w-6xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">Chemistry of Milk</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : "A deep dive into the science of milk."}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic ? (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="px-4 sm:px-0">
              <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Topics
              </Button>
            </div>
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
              <div className="p-4 pt-0 sm:p-0">
                {selectedTopic.content}
              </div>
            </ScrollArea>
          </div>
        ) : (
          <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:p-0">
              {chemistryTopics.map(topic => (
                <button
                  key={topic.value}
                  onClick={() => setActiveTopic(topic.value)}
                  className="flex items-center p-4 bg-card hover:bg-primary/10 rounded-lg shadow-sm border text-left transition-all duration-200"
                >
                  <topic.icon className="w-8 h-8 text-primary mr-4 shrink-0" />
                  <div>
                    <span className="font-semibold font-headline text-card-foreground">{topic.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}


// Content Components
function CompositionContent() {
    return (
        <Section title="Composition of Milk" icon={BookOpen}>
            <InfoBlock title="What is Milk? (Doodh Kya Hai?)">
                <p><strong>FSSAI Definition:</strong> “Milk is the secretion derived from the complete milking of healthy milch animals. It shall be free from colostrum.”</p>
                <p><strong>Federal Definition of U.S.A.:</strong> "Milk is the fresh, clean lacteal secretion obtained by the complete milking of one or more healthy cows, properly fed and kept, excluding that obtained within 15 days before and 10 days after calving and containing not less than 8.5 percent solids-not-fat and not less than 3.25 percent milk fat."</p>
                <p>Milk is a complex biological fluid that can be seen in three different phases:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Emulsion:</strong> Fat globules are dispersed in water.</li>
                    <li><strong>Colloidal Suspension:</strong> Casein protein micelles are suspended in water.</li>
                    <li><strong>True Solution:</strong> Lactose, whey proteins, minerals, and vitamins are completely dissolved in water.</li>
                </ul>
            </InfoBlock>
            
            <InfoBlock title="General Composition of Milk">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow><TableHead>Constituents</TableHead><TableHead>%</TableHead><TableHead>Constituents</TableHead><TableHead>%</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Water</TableCell><TableCell>87.54</TableCell><TableCell>Casein</TableCell><TableCell>2.63</TableCell></TableRow>
                            <TableRow><TableCell>Fat</TableCell><TableCell>3.71</TableCell><TableCell>Whey protein</TableCell><TableCell>0.42</TableCell></TableRow>
                            <TableRow><TableCell>Protein</TableCell><TableCell>3.18</TableCell><TableCell>Protease-peptone</TableCell><TableCell>0.13</TableCell></TableRow>
                            <TableRow><TableCell>Lactose</TableCell><TableCell>4.70</TableCell><TableCell>Other nitrogenous substances</TableCell><TableCell>0.11</TableCell></TableRow>
                            <TableRow><TableCell>Ash</TableCell><TableCell>0.76</TableCell><TableCell>Total</TableCell><TableCell>100.0</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </InfoBlock>

            <InfoBlock title="Differences in Milk Composition due to Species">
                 <div className="overflow-x-auto">
                    <Table>
                         <TableHeader>
                            <TableRow><TableHead>Species</TableHead><TableHead>Water (%)</TableHead><TableHead>Fat (%)</TableHead><TableHead>Sugar (%)</TableHead><TableHead>Protein (%)</TableHead><TableHead>Ash (%)</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Cow</TableCell><TableCell>87.54</TableCell><TableCell>3.71</TableCell><TableCell>4.70</TableCell><TableCell>3.31</TableCell><TableCell>0.76</TableCell></TableRow>
                            <TableRow><TableCell>Goat</TableCell><TableCell>85.58</TableCell><TableCell>4.93</TableCell><TableCell>4.78</TableCell><TableCell>4.11</TableCell><TableCell>0.89</TableCell></TableRow>
                            <TableRow><TableCell>Buffalo</TableCell><TableCell>82.90</TableCell><TableCell>7.50</TableCell><TableCell>4.70</TableCell><TableCell>4.10</TableCell><TableCell>0.80</TableCell></TableRow>
                            <TableRow><TableCell>Human</TableCell><TableCell>88.50</TableCell><TableCell>3.30</TableCell><TableCell>6.80</TableCell><TableCell>1.30</TableCell><TableCell>0.20</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </InfoBlock>
            <InfoBlock title="Water in Milk">
                <p>Water is the most abundant component, acting as a suspending, dispersing, and dissolving medium. It exists in three forms:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Free Water:</strong> The largest portion, it acts as a solvent and supports microbial growth.</li>
                    <li><strong>Bound Water:</strong> Bound to proteins and other components via hydrogen bonds. It does not freeze at 0°C, does not act as a solvent, and cannot support microbial growth.</li>
                    <li><strong>Crystallized Water:</strong> Water present within the chemical structure of components like lactose hydrate (C₁₂H₂₂O₁₁·H₂O). It is the hardest to remove.</li>
                </ul>
            </InfoBlock>
        </Section>
    )
}

function MammaryGlandContent() {
    return (
        <Section title="The Mammary Gland and Milk Secretion" icon={Cpu}>
            <InfoBlock title="The Mammary Gland Structure">
                <p>The mammary gland is made up of secretary and connective tissue. The basic secretory units are small, grape-like objects called "alveoli". A group of 150-220 alveoli form a lobule, and a number of lobules form a lobe. The cow’s udder consists of 4 separate quarters, each with a teat cistern and gland cistern, from which numerous ducts branch out to the alveoli.</p>
                <p>Each alveolus consists of a single layer of epithelial cells surrounding a central cavity (lumen) and is surrounded by myoepithelial cells responsible for milk ejection.</p>
            </InfoBlock>
            <InfoBlock title="Physiology of Milk Secretion">
                <p>Milk is synthesized in the epithelial cells of the alveolus under complex hormonal control (estrogen, progesterone, prolactin, etc.). Precursors for milk synthesis are taken from the blood. Protein and lipid are synthesized in the endoplasmic reticulum; lactose synthesis and assembly of casein micelles occur in the Golgi apparatus. For every liter of milk secreted, about 400-500 litres of blood must circulate through the udder.</p>
                <p><strong>Milk Ejection (Let-down):</strong> This is a reflex action controlled by the hormone oxytocin, which causes the myoepithelial cells to contract and squeeze milk from the alveoli into the ducts. This reflex lasts for about 10 minutes.</p>
            </InfoBlock>
            <InfoBlock title="Milk Precursors" noProse={true}>
                <div className="overflow-x-auto">
                    <Table>
                        <TableCaption>Comparison of Blood Plasma and Milk Composition</TableCaption>
                        <TableHeader>
                            <TableRow><TableHead>Constituent</TableHead><TableHead>Blood Plasma (%)</TableHead><TableHead>Milk (%)</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                        <TableRow><TableCell>Water</TableCell><TableCell>91.0</TableCell><TableCell>87.0</TableCell></TableRow>
                        <TableRow><TableCell>Glucose</TableCell><TableCell>0.05</TableCell><TableCell>Lactose: 4.8</TableCell></TableRow>
                        <TableRow><TableCell>Serum Albumin</TableCell><TableCell>3.20</TableCell><TableCell>Lactalbumin: 0.52</TableCell></TableRow>
                        <TableRow><TableCell>Serum Globulin</TableCell><TableCell>4.40</TableCell><TableCell>Globulin: 0.05</TableCell></TableRow>
                        <TableRow><TableCell>Amino Acids</TableCell><TableCell>0.003</TableCell><TableCell>Casein: 2.9</TableCell></TableRow>
                        <TableRow><TableCell>Neutral Fats</TableCell><TableCell>0.09</TableCell><TableCell>3.8</TableCell></TableRow>
                        <TableRow><TableCell>Calcium</TableCell><TableCell>0.009</TableCell><TableCell>0.12</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </InfoBlock>
        </Section>
    );
}

function ProteinsContent() {
    return (
        <Section title="Milk Proteins" icon={Dna}>
             <InfoBlock title="Overview of Milk Proteins">
                <p>Protein is one of the most essential nutrients of milk, present at about 3.5%. It contains all essential amino acids. The proteins in milk are divided into two main groups: <strong>Casein (~80%)</strong> and <strong>Whey Proteins (~20%)</strong>.</p>
            </InfoBlock>
            <InfoBlock title="Casein (~80% of Milk Protein)">
                <p>Casein is a class of phosphoproteins existing in milk as complex particles called <strong>micelles</strong>. These micelles are what make milk white and opaque. Biologically, casein serves as a carrier for calcium and phosphate. All caseins precipitate at a pH of 4.6 (their isoelectric point).</p>
                <h5 className="font-bold mt-4">Casein Fractions</h5>
                <p>Casein is composed of four main fractions: αs1-casein, αs2-casein, β-casein, and κ-casein. κ-casein is located on the surface of the micelle and is responsible for its stability.</p>
                <h5 className="font-bold mt-4">Casein Coagulation (Curd Formation)</h5>
                <p>The ability of casein to coagulate is fundamental to making products like cheese and yogurt. This happens in several ways:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Acid Coagulation:</strong> When the pH of milk drops to 4.6 (e.g., by adding lemon/vinegar or through bacterial fermentation), casein micelles lose their negative charge and aggregate to form a gel. This is the principle behind Paneer and Dahi.</li>
                    <li><strong>Enzymatic Coagulation:</strong> The enzyme rennet (or rennin) specifically cleaves κ-casein, destabilizing the micelles and causing them to clump together in the presence of calcium to form a curd. This is the basis of most cheesemaking.</li>
                    <li><strong>Alcohol Precipitation:</strong> Alcohol dehydrates the protective layer of the micelle. If the milk is already acidic (unstable), the proteins will coagulate. This is a quick test for milk freshness.</li>
                    <li><strong>Heat Precipitation:</strong> While pure casein is heat-stable, prolonged heating at very high temperatures (e.g., 120°C under pressure) can cause coagulation.</li>
                </ul>
            </InfoBlock>

            <InfoBlock title="Whey Proteins (~20% of Milk Protein)">
                <p>The proteins remaining in the liquid whey after casein precipitation are called whey proteins. These globular proteins are more water-soluble than caseins and are denatured by heat.</p>
                <h5 className="font-bold mt-4">Whey Protein Fractions</h5>
                <p><strong>Beta–lactoglobulin (β-Lg):</strong> Comprises about half of the total whey proteins. It is coagulated by heat and is an excellent source of essential amino acids.</p>
                <p><strong>Alpha–lactalbumin (α-La):</strong> A key protein in human milk, it is a good source of tryptophan and is involved in lactose synthesis.</p>
                <p><strong>Immunoglobulins (Ig):</strong> These are antibodies that provide passive immunity and are found in very high concentrations in colostrum.</p>
                <p><strong>Bovine Serum Albumin (BSA):</strong> A large protein with good fat-binding properties.</p>
            </InfoBlock>
        </Section>
    )
}

function FatContent() {
    return (
        <Section title="Milk Fat (Lipids)" icon={Droplets}>
            <InfoBlock title="Milk Fat Characteristics">
                <p>Fat is the most commercially significant and variable constituent of milk. About 98% of milk fat is a mixture of triglycerides. It exists as small globules (0.1-15 µm diameter) surrounded by a protective membrane called the Milk Fat Globule Membrane (MFGM).</p>
                <p>Milk fat is unique due to its high proportion of short-chain fatty acids (like butyric acid, C4:0), which contribute to its characteristic flavor. This wide variety of fatty acids also gives milk fat a broad melting range (approx. -30°C to +40°C), making it solid at refrigeration temperatures and liquid at body temperature.</p>
            </InfoBlock>
            <InfoBlock title="Fat Globules and Emulsion Stability">
                 <p>Milk is an oil-in-water emulsion. The MFGM stabilizes the fat globules, preventing them from clumping together (coalescence).</p>
                 <p><strong>Creaming:</strong> Due to their lower density, fat globules rise to the top, a process called creaming. Homogenization prevents this by reducing globule size.</p>
                 <p><strong>Lipolysis:</strong> The enzyme lipoprotein lipase can break down fat (lipolysis), releasing free fatty acids that cause a soapy or rancid off-flavor. This is usually prevented by an intact MFGM but can be triggered by mechanical damage to the globules.</p>
            </InfoBlock>
            <InfoBlock title="Autoxidation and Crystallization">
                <p><strong>Autoxidation:</strong> Double bonds in unsaturated fatty acids can oxidize, leading to off-flavors (tallowy, fishy, metallic). This process is accelerated by heat, light, and metal ions (especially copper).</p>
                <p><strong>Crystallization:</strong> Milk fat consists of a mix of triglycerides with different melting points. When milk is cooled, the higher melting point triglycerides crystallize. This process is complex and can occur in different polymorphic forms (α, β', β), which affects the texture and stability of products like butter and cream.</p>
            </InfoBlock>
        </Section>
    )
}

function LactoseContent() {
    return (
        <Section title="Lactose (Milk Sugar)" icon={Atom}>
             <InfoBlock title="Lactose Properties">
               <p>Lactose is the main carbohydrate in milk (4.8-5.2%), present in true solution. It is a disaccharide made of glucose and galactose. Lactose is only about 1/6th as sweet as sucrose (table sugar).</p>
               <p>It is fermented by microorganisms to produce lactic acid, which is essential for cultured products like yogurt and cheese. When heated, lactose can undergo the Maillard reaction with protein amino groups, leading to browning and a cooked flavor, especially in sterilized milk.</p>
                <h5 className="font-bold mt-4">Crystallization and Mutarotation</h5>
                <p>Lactose can crystallize in two forms, α-hydrate and β-anhydrous. When dissolved in water, these forms interconvert until an equilibrium is reached, a process called <strong>mutarotation</strong>. The α-lactose hydrate is less soluble and can form hard, gritty crystals, causing a "sandiness" defect in products like ice cream and sweetened condensed milk if not controlled properly.</p>
                <p>The rate of mutarotation is affected by temperature and pH. This is a critical factor in the production of dairy powders and condensed products to ensure a smooth texture.</p>
            </InfoBlock>
        </Section>
    )
}

function MineralsContent() {
    return (
        <Section title="Minerals and Salts" icon={Gem}>
             <InfoBlock title="Mineral Composition and Distribution">
               <p>Milk is an excellent source of dietary calcium, magnesium, phosphorus, and potassium. The salts in milk exist in a complex equilibrium between a dissolved (soluble) phase and a colloidal phase associated with the casein micelles.</p>
               <p>About two-thirds of the calcium and half of the phosphate are bound within the casein micelle as "colloidal calcium phosphate". This colloidal phosphate is crucial for maintaining the structure and stability of the casein micelles.</p>
               <p>The dissolved salts in the milk serum affect various properties, including protein stability, heat stability, and osmotic pressure. The "salt balance," particularly the ratio of calcium and magnesium to phosphate and citrate, is critical for the heat stability of milk during processing like sterilization.</p>
            </InfoBlock>
             <InfoBlock title="Trace Elements">
                <p>Milk contains numerous trace elements like Zinc, Copper, and Iron. Some of these are nutritional, while others can be contaminants. For example, Copper (Cu) can act as a catalyst for fat oxidation, leading to off-flavors, even at very low concentrations. Therefore, avoiding contamination from equipment made of copper alloys is important.</p>
             </InfoBlock>
        </Section>
    )
}

function VitaminsEnzymesContent() {
    return (
        <Section title="Vitamins & Enzymes" icon={FlaskConical}>
             <InfoBlock title="Vitamins in Milk">
                <p>Milk is a good source of many vitamins. Fat-soluble vitamins (A, D, E, K) are found in the milk fat, while water-soluble vitamins (B-complex and Vitamin C) are in the aqueous phase. Pasteurization can destroy some of the more heat-sensitive vitamins like Vitamin C and folate.</p>
            </InfoBlock>
             <InfoBlock title="Enzymes in Milk">
                <p>Milk contains several native enzymes. Some important ones include:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Lipoprotein Lipase:</strong> Can cause hydrolytic rancidity (soapy flavor) if fat globules are damaged. It is mostly inactivated by pasteurization.</li>
                    <li><strong>Alkaline Phosphatase:</strong> Used as an indicator for proper pasteurization, as it is destroyed by the heat treatment. A positive test indicates inadequate pasteurization or raw milk contamination.</li>
                    <li><strong>Plasmin:</strong> A heat-resistant protease that can break down protein and cause age gelation or bitterness in UHT milk during long storage.</li>
                    <li><strong>Lactoperoxidase:</strong> Part of a natural antimicrobial system in raw milk. It is more heat-resistant than alkaline phosphatase and a negative test can indicate overheating.</li>
                    <li><strong>Xanthine Oxidase:</strong> Associated with the fat globule membrane. Its activity is sometimes linked to oxidative processes.</li>
                </ul>
            </InfoBlock>
        </Section>
    )
}

function PropertiesContent() {
    return (
        <Section title="Physical Properties" icon={TestTube}>
             <InfoBlock title="Overview of Physical Properties">
                <p>The physical properties of milk are determined by its complex composition and are crucial for processing and quality control.</p>
            </InfoBlock>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Property</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Significance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {physicalProperties.map(prop => (
                            <TableRow key={prop.property}>
                                <TableCell className="font-medium">{prop.property}</TableCell>
                                <TableCell>{prop.value}</TableCell>
                                <TableCell>{prop.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
    )
}

function OtherComponentsContent() {
    return (
        <Section title="Other Components & Contaminants" icon={FlaskConical}>
            <InfoBlock title="Minor Natural Components">
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Organic Acids:</strong> Milk contains citric acid and trace amounts of others. Bacterial action can increase lactic acid.</li>
                    <li><strong>Nitrogenous Compounds (NPN):</strong> About 5% of total nitrogen is non-protein nitrogen, including urea, creatinine, and free amino acids.</li>
                    <li><strong>Gases:</strong> Freshly drawn milk contains dissolved gases, mainly carbon dioxide. On exposure to air, CO₂ is lost and O₂/N₂ are gained. Dissolved oxygen can contribute to oxidation.</li>
                </ul>
            </InfoBlock>
            <InfoBlock title="Contaminants">
                <p>Substances that can enter milk unintentionally:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>From the Cow:</strong> If a cow has mastitis, blood components and somatic cells can enter the milk. Drugs used for treatment can also pass into the milk.</li>
                    <li><strong>From Feed:</strong> Pesticides, mycotoxins (from molds on feed), and heavy metals can be transferred to milk.</li>
                    <li><strong>From Handling:</strong> Cleaning agents, sanitizers, and metal ions (like copper from equipment) can contaminate milk.</li>
                    <li><strong>Radionuclides:</strong> Radioactive isotopes (like Strontium-90, Iodine-131) can enter milk if the cow ingests contaminated feed or water.</li>
                </ul>
            </InfoBlock>
        </Section>
    );
}

