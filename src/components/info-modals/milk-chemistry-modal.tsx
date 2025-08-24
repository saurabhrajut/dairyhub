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
                <p>Milk is a complex colloidal system that is a mixture of multiple components. Each constituent defines the nutritional and functional properties of milk.</p>
                
                <h5 className="font-bold mt-4">1. Water (Paani) – 87-88%</h5>
                <p>The largest component of milk is water, which gives milk its fluid nature and acts as a solvent for the other constituents.</p>

                <h5 className="font-bold mt-4">2. Fat (Lipids) – 3-6%</h5>
                <p>Milk fat exists as an emulsion (fat droplets dispersed in water). It is the most energy-rich component of milk (9 kcal/g) and provides flavor, texture, and fat-soluble vitamins (A, D, E, K).</p>
               
                <h5 className="font-bold mt-4">3. Protein – 3-4%</h5>
                <p>Milk protein is of high biological value and provides essential amino acids. It is of two types: Casein (~80%) and Whey (~20%).</p>
                
                <h5 className="font-bold mt-4">4. Lactose (Milk Sugar) – 4.5-5.0%</h5>
                <p>This is the primary carbohydrate in milk (glucose + galactose) which gives milk its slightly sweet taste. Bacteria ferment it to produce lactic acid, which is essential for products like yogurt.</p>

                <h5 className="font-bold mt-4">5. Minerals & Salts (Ash) – 0.7-0.9%</h5>
                <p>Milk is a good source of minerals, with Calcium (Ca) and Phosphorus (P) being prominent. They also help in maintaining the stability and pH of milk.</p>
            </InfoBlock>
        </Section>
    )
}

function MammaryGlandContent() {
    return (
        <Section title="The Mammary Gland and Milk Secretion" icon={Cpu}>
            <InfoBlock title="The Mammary Gland">
                <p>The mammary gland is made up of secretary and connective tissue. Secretary units are small grape-like objects called "alveoli". A group of alveoli are joined together in a cluster with a common duct, so that they resemble grapes attached to a stem. Each lobule has between 150 to 220 alveoli. Each lobule is surrounded by a connective tissue capsule. A number of lobules together form a lobe, which is drained by a larger duct.</p>
                <p>The basic component of an alveolus is a single layer of epithelial cells surrounding a central cavity, the lumen. Each alveolus is supplied with small capillaries and is surrounded by myoepithelial cells that are responsible for milk ejection.</p>
            </InfoBlock>
            <InfoBlock title="Physiology of Milk Secretion">
                <p>Milk is synthesized in secretory cells, which comprise the secretory epithelium. The major hormones involved in the development of the mammary gland are estrogen, progesterone, and growth hormone. Insulin promotes cell division of the mammary epithelium, corticosteroids are involved for the developments of the cellular organelles, and prolactin is essential for the initiation and maintenance of lactation.</p>
                <p>Precursors enter the secretory cells from the blood on the basal side, and milk is secreted from the apical side into the lumen of the alveolus. The hormone oxytocin stimulates contraction of the myoepithelial cells, thus squeezing milk out of the alveoli into the ducts. The biosynthetic processes occur at various sites in the cell. Protein and lipid are synthesized in the endoplasmic reticulum; lactose synthesis and assembly of casein micelles occur in the Golgi apparatus. Mitochondria supply the energy for these synthesis processes.</p>
            </InfoBlock>
             <InfoBlock title="Milk Ejection (Let-down)">
                <p>Milk is secreted more or less continuously between milking periods. At milking time, the cow ejects or lets down her milk. This is a reflex action controlled by sensory nerves that carry a message to the pituitary gland. The pituitary gland then furnishes to the bloodstream a hormone known as oxytocin, which causes the alveoli to contract and squeeze the milk from them into the ducts. Conditions that frighten or anger the cow interfere with this function. The milking operation must be completed before oxytocin's influence is lost, usually within ten minutes.</p>
            </InfoBlock>
        </Section>
    );
}

function ProteinsContent() {
    return (
        <Section title="Milk Proteins" icon={Dna}>
             <InfoBlock title="Overview of Milk Proteins">
                <p>Protein is one of the most essential nutrients of milk, present at about 3.5%. It contains all essential amino acids. The caseins, whey proteins and non-protein nitrogen (NPN) make up the nitrogen content of milk (76%, 18% and 6% respectively). The Rowland fraction method facilitates the separation of these components.</p>
            </InfoBlock>

            <InfoBlock title="Casein (~80% of Milk Protein)">
                <p>Casein is a generic term for a class of phosphoproteins that make up about 80% of the total milk protein content. In milk, casein exists as its calcium salts in distinct globular particles called micelles. The casein system is defined as a glycophosphoprotein, since it contains both carbohydrate and phosphorus. Biologically, casein serves as a carrier for calcium and phosphate. All caseins precipitate at pH 4.6.</p>
                <h5 className="font-bold mt-4">Casein Fractions</h5>
                <p>Caseins are classified into four major groups: αs1-casein, αs2-casein, β-casein, and κ-casein.</p>
                <h5 className="font-bold mt-4">Casein Coagulation (Curd Formation)</h5>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Acid Coagulation:</strong> When the pH of milk drops to 4.6, casein micelles lose their charge and aggregate to form a gel (e.g., Paneer, Yogurt).</li>
                    <li><strong>Enzymatic Coagulation:</strong> The enzyme rennet cleaves κ-casein, destabilizing the micelles and causing them to aggregate in the presence of calcium to form a curd (e.g., Cheese).</li>
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
                <p>Fat is the most commercially significant and variable constituent of milk. About 98% of milk fat is a mixture of triglycerides. It exists in the form of globules (0.1-15 µm diameter) covered by a thin membrane rich in phospholipids.</p>
                <p>The fatty acid composition is very wide, containing a relatively high proportion (15-20 mol%) of short-chain fatty acids (C4-C10), which is typical for ruminant milk. This wide variety of fatty acids gives milk fat a broad melting range (approx. -30°C to +40°C).</p>
                <h5 className="font-bold mt-4">Fatty Acid Sources</h5>
                <p>Short-chain fatty acids (up to C14) are synthesized within the mammary gland from acetate and beta-hydroxybutyric acid, which come from rumen fermentation. Long-chain fatty acids (C16, C18) are absorbed from the bloodstream. The yellow color of cow milk fat is due to carotene from feed.</p>
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
                <h5 className="font-bold mt-4">Crystallization</h5>
                <p>Lactose can crystallize in two forms, α-hydrate and β-anhydrous. The α-lactose hydrate is less soluble and can form hard, gritty crystals, causing a "sandiness" defect in products like ice cream and condensed milk if not controlled properly.</p>
            </InfoBlock>
        </Section>
    )
}

function MineralsContent() {
    return (
        <Section title="Minerals and Salts" icon={Gem}>
             <InfoBlock title="Mineral Composition">
               <p>Milk is an important source of dietary calcium, magnesium, phosphorus, and potassium. About 67% of calcium and 44% of phosphate are bound within the casein micelle as "colloidal calcium phosphate".</p>
               <p>The dissolved salts in milk serum affect various properties, including protein stability and osmotic pressure. The total ionic strength of milk is about 0.5 M. The salt balance is crucial for the heat stability of milk.</p>
            </InfoBlock>
        </Section>
    )
}

function VitaminsEnzymesContent() {
    return (
        <Section title="Vitamins & Enzymes" icon={FlaskConical}>
             <InfoBlock title="Vitamins in Milk">
                <p>Milk is a good source of many vitamins. Fat-soluble vitamins include A, D, E, and K. Water-soluble vitamins include the B-complex (Thiamine, Riboflavin, Niacin, etc.) and Vitamin C (though much of it is destroyed by pasteurization).</p>
            </InfoBlock>
             <InfoBlock title="Enzymes in Milk">
                <p>Milk contains several native enzymes. Some important ones include:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Lipoprotein Lipase:</strong> Can cause rancidity if fat globules are damaged.</li>
                    <li><strong>Alkaline Phosphatase:</strong> Used as an indicator for proper pasteurization, as it's destroyed by the heat treatment.</li>
                    <li><strong>Plasmin:</strong> A heat-resistant protease that can cause age gelation in UHT milk.</li>
                    <li><strong>Lactoperoxidase:</strong> Part of a natural antimicrobial system in raw milk.</li>
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
