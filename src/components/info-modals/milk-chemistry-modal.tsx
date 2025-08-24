
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
];

const InfoBlock = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="prose prose-sm max-w-none text-gray-700">{children}</div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-0">
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
                <p><strong>Scientific Definition:</strong> “Milk is the normal secretion of the mammary glands of mammals, obtained without any colostrum, and is composed of water, fat, proteins, lactose, minerals, and vitamins in a naturally balanced form.”</p>
                <p><strong>FSSAI Definition:</strong> “Milk is the normal mammary secretion derived from complete milking of healthy milch animals, without any addition thereto or extraction therefrom, unless otherwise provided, for consumption as liquid milk or for further processing.”</p>
                <p>Milk is a complex biological fluid that can be seen in three different phases:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Emulsion:</strong> Fat globules are dispersed in water.</li>
                    <li><strong>Colloidal Suspension:</strong> Casein protein micelles are suspended in water.</li>
                    <li><strong>True Solution:</strong> Lactose, whey proteins, minerals, and vitamins are completely dissolved in water.</li>
                </ul>
            </InfoBlock>
            
            <InfoBlock title="Milk Constituents (Doodh ke Ghatak)">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow><TableHead>Constituents</TableHead><TableHead>%</TableHead><TableHead>Constituents</TableHead><TableHead>%</TableHead></TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Water</TableCell><TableCell>87.54</TableCell><TableCell>Casein</TableCell><TableCell>2.63</TableCell></TableRow>
                            <TableRow><TableCell>Fat</TableCell><TableCell>3.71</TableCell><TableCell>Whey protein</TableCell><TableCell>0.42</TableCell></TableRow>
                            <TableRow><TableCell>Protein</TableCell><TableCell>3.18</TableCell><TableCell>Protease-peptone</TableCell><TableCell>0.13</TableCell></TableRow>
                            <TableRow><TableCell>Lactose</TableCell><TableCell>4.70</TableCell><TableCell>Other nitrogeneous substances</TableCell><TableCell>0.11</TableCell></TableRow>
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
        </Section>
    )
}

function MammaryGlandContent() {
    return (
        <Section title="The Mammary Gland and Milk Secretion" icon={Cpu}>
            <InfoBlock title="The Mammary Gland Structure">
                <p>The mammary gland is made up of secretary and connective tissue. Secretary units are small grape-like objects called "alveoli". A group of alveoli are joined together in a cluster (lobule) with a common duct. Each lobule has between 150 to 220 alveoli. A number of lobules together form a lobe, which is drained by a larger duct. The basic component of an alveolus is a single layer of epithelial cells surrounding a central cavity, the lumen. Each alveolus is surrounded by myoepithelial cells that are responsible for milk ejection.</p>
                <p>The cow’s udder consists of 4 distinctly separate glands, known as the quarters. Each quarter is provided with a teat, the hollow interior portion of which is known as the teat cistern. The teat cistern extends upwards into the body of the gland and is connected with the gland cistern. Radiating from the walls of the cistern are numerous tubes or ducts which branch out or divide innumerable times.</p>
            </InfoBlock>
            <InfoBlock title="Physiology of Milk Secretion">
                <p>Milk is synthesized in the epithelial cells of the alveolus under complex hormonal control. The major hormones are estrogen, progesterone, and growth hormone for development, insulin for cell division, corticosteroids for organelle development, and prolactin for initiation and maintenance of lactation. Precursors enter the secretory cells from the blood on the basal side, and milk is secreted from the apical side into the lumen. Protein and lipid are synthesized in the endoplasmic reticulum; lactose synthesis and assembly of casein micelles occur in the Golgi apparatus. Mitochondria supply the energy for these processes.</p>
                <p>For every liter of milk secreted, about 400 litres of blood are required to circulate through the udder.</p>
            </InfoBlock>
             <InfoBlock title="Milk Ejection (Let-down)">
                <p>At milking time, the cow ejects or lets down her milk. This is a reflex action controlled by sensory nerves that carry a message to the pituitary gland. The pituitary gland then releases the hormone oxytocin, which causes the myoepithelial cells to contract and squeeze the milk from the alveoli into the ducts. Conditions that frighten or anger the cow interfere with this function. The milking operation must be completed before oxytocin's influence is lost, usually within ten minutes.</p>
            </InfoBlock>
        </Section>
    );
}

function ProteinsContent() {
    return (
        <Section title="Milk Proteins" icon={Dna}>
             <InfoBlock title="Overview of Milk Proteins">
                <p>Protein is one of the most essential nutrients of milk, present at about 3.5%. It contains all essential amino acids. The caseins, whey proteins and non-protein nitrogen (NPN) make up the nitrogen content of milk (80%, 18% and 2% respectively). Proteins are high molecular weight polymers of amino acids covalently linked by the peptide bond.</p>
            </InfoBlock>

            <InfoBlock title="Casein (~80% of Milk Protein)">
                <p>Casein is a generic term for a class of phosphoproteins. In milk, casein exists as its calcium salts in distinct globular particles called micelles. The casein system is defined as a glycophosphoprotein, since it contains both carbohydrate and phosphorus. Biologically, casein serves as a carrier for calcium and phosphate. All caseins precipitate at pH 4.6.</p>
                <h5 className="font-bold mt-4">Casein Fractions</h5>
                <p>Caseins are classified into four major groups: αs1-casein, αs2-casein, β-casein, and κ-casein. These fractions differ in their charge and composition. αs1 and β-casein are calcium-sensitive, while κ-casein is calcium-insensitive and stabilizes the micelle. Whole casein contains about 75% of α-casein, 22% of β-casein and 3% of γ-casein.</p>
                <h5 className="font-bold mt-4">Casein Coagulation (Curd Formation)</h5>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Acid Coagulation:</strong> When the pH of milk drops to 4.6 (isoelectric point), casein micelles lose their negative charge and aggregate to form a gel (e.g., Paneer, Yogurt).</li>
                    <li><strong>Enzymatic Coagulation:</strong> The enzyme rennet cleaves κ-casein at the 105-106 amino acid bond (phenylalanine-methionine), destabilizing the micelles and causing them to aggregate in the presence of calcium to form a curd (e.g., Cheese).</li>
                    <li><strong>Alcohol Precipitation:</strong> Alcohol dehydrates the micelle's protective layer. If milk is acidic (unstable), the proteins will coagulate. This is a quick test for milk freshness.</li>
                    <li><strong>Heat Precipitation:</strong> Pure casein doesn't easily precipitate with heat, but prolonged heating at high temperatures (e.g., 120°C under pressure) can cause coagulation.</li>
                </ul>
            </InfoBlock>

            <InfoBlock title="Whey Proteins (~20% of Milk Protein)">
                <p>The proteins remaining in the whey after casein precipitation are called whey proteins. These globular proteins are more water-soluble than caseins and are prone to heat denaturation.</p>
                <h5 className="font-bold mt-4">Whey Protein Fractions</h5>
                <p><strong>Beta–lactoglobulin (β-Lg):</strong> Comprises approximately half the total whey proteins. It is coagulated by heat and is an excellent source of essential and branched-chain amino acids.</p>
                <p><strong>Alpha–lactalbumin (α-La):</strong> It is the primary protein in human breast milk and is a good source of tryptophan. This is the only whey protein component capable of binding calcium.</p>
                <p><strong>Immunoglobulins (Ig):</strong> Provide protective effects and are predominant in colostrum.</p>
                <p><strong>Bovine Serum Albumin (BSA):</strong> A large-sized protein with good fat-binding properties.</p>
            </InfoBlock>
        </Section>
    )
}

function FatContent() {
    return (
        <Section title="Milk Fat (Lipids)" icon={Droplets}>
            <InfoBlock title="Milk Fat Characteristics">
                <p>Fat is the most commercially significant and variable constituent of milk. About 98% of milk fat is a mixture of triglycerides. It exists in the form of globules (0.1-15 µm diameter) covered by a thin protective membrane rich in phospholipids.</p>
                <p>The fatty acid composition is very wide, containing a relatively high proportion (15-20 mol%) of short-chain fatty acids (C4-C10), which is typical for ruminant milk. This wide variety of fatty acids gives milk fat a broad melting range (approx. -30°C to +40°C).</p>
                <h5 className="font-bold mt-4">Fatty Acid Sources</h5>
                <p>Short-chain fatty acids (up to C14) are synthesized within the mammary gland from acetate and beta-hydroxybutyric acid from rumen fermentation. Long-chain fatty acids (C16, C18) are absorbed from the bloodstream. The yellow color of cow milk fat is due to carotene from feed.</p>
            </InfoBlock>
            <InfoBlock title="Fat Globules and Emulsion Stability">
                 <p>Fat exists as an emulsion of globules in milk plasma. Each globule is surrounded by a membrane that prevents them from coalescing. When milk is agitated or homogenized, these globules can be disrupted. This is critical for processes like churning butter, where controlled destabilization is desired.</p>
                 <p><strong>Creaming:</strong> Due to their lower density, fat globules rise to the top, a process called creaming. In raw milk, a protein complex called 'agglutinin' causes globules to clump and rise faster. Homogenization prevents creaming by reducing globule size.</p>
                 <p><strong>Lipolysis:</strong> The enzyme lipoprotein lipase can break down fat (lipolysis), releasing free fatty acids that cause a soapy-rancid off-flavor. This is usually prevented by the fat globule membrane but can be induced by damage to the globules (e.g., excessive agitation).</p>
            </InfoBlock>
            <InfoBlock title="Autoxidation and Crystallization">
                <p><strong>Autoxidation:</strong> Double bonds in fatty acids can oxidize, leading to off-flavors (tallowy, fishy, metallic). This process is catalyzed by factors like heat, light, and metal ions (especially copper). Phospholipids in the fat globule membrane are particularly susceptible.</p>
                <p><strong>Crystallization:</strong> Milk fat consists of a mix of triglycerides with different melting points. When milk is cooled, the higher melting point triglycerides crystallize. This process is complex and can occur in different polymorphic forms (α, β', β), affecting the texture and stability of products like butter and cream.</p>
            </InfoBlock>
        </Section>
    )
}

function LactoseContent() {
    return (
        <Section title="Lactose (Milk Sugar)" icon={Atom}>
             <InfoBlock title="Lactose Properties">
               <p>Lactose is the major carbohydrate in milk (4.8-5.2%), present in true solution. It is a disaccharide made of glucose and galactose. Lactose is about 1/6th as sweet as cane sugar.</p>
               <p>It is fermented by microorganisms to produce lactic acid, which is essential for cultured products. When heated, lactose can undergo the Maillard reaction with protein amino groups, leading to browning and a cooked flavor, especially in sterilized milk.</p>
                <h5 className="font-bold mt-4">Crystallization and Mutarotation</h5>
                <p>Lactose can crystallize in two forms, α-hydrate and β-anhydrous. When dissolved in water, these forms interconvert until an equilibrium is reached, a process called <strong>mutarotation</strong>. The α-lactose hydrate is less soluble and can form hard, gritty crystals, causing a "sandiness" defect in products like ice cream and condensed milk if not controlled properly.</p>
                <p>The rate of mutarotation is affected by temperature and pH. At 20°C and pH 6.7, it takes many hours to reach equilibrium, but at 70°C, it takes only a few minutes. This is a critical factor in the production of dairy powders and condensed products.</p>
            </InfoBlock>
        </Section>
    )
}

function MineralsContent() {
    return (
        <Section title="Minerals and Salts" icon={Gem}>
             <InfoBlock title="Mineral Composition and Distribution">
               <p>Milk is an important source of dietary calcium, magnesium, phosphorus, and potassium. The salts in milk exist in a complex equilibrium between a dissolved (soluble) phase and a colloidal phase associated with the casein micelles.</p>
               <p>About 67% of calcium and 44% of phosphate are bound within the casein micelle as "colloidal calcium phosphate". This colloidal phosphate is amorphous and also contains magnesium and citrate. It is crucial for maintaining the structure and stability of the casein micelles.</p>
               <p>The dissolved salts in the milk serum affect various properties, including protein stability, heat stability, and osmotic pressure. The total ionic strength of milk is about 0.5 M. The salt balance, particularly the ratio of calcium and magnesium to phosphate and citrate, is critical for the heat stability of milk during processing like sterilization.</p>
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
                <p>Milk is a good source of many vitamins. Fat-soluble vitamins include A, D, E, and K, which are found in the milk fat. Water-soluble vitamins include the B-complex (Thiamine, Riboflavin, Niacin, etc.) and Vitamin C (though much of it is destroyed by pasteurization).</p>
            </InfoBlock>
             <InfoBlock title="Enzymes in Milk">
                <p>Milk contains several native enzymes. Some important ones include:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Lipoprotein Lipase:</strong> Can cause hydrolytic rancidity (soapy flavor) if fat globules are damaged. It is mostly inactivated by pasteurization.</li>
                    <li><strong>Alkaline Phosphatase:</strong> Used as an indicator for proper pasteurization, as it's destroyed by the heat treatment. A positive test indicates inadequate pasteurization or raw milk contamination.</li>
                    <li><strong>Plasmin:</strong> A heat-resistant protease that can break down protein and cause proteolysis and age gelation in UHT milk during long storage.</li>
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
