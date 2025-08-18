
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "../ui/button";
import { ArrowLeft, Beaker, CheckSquare, Settings, BarChart } from "lucide-react";


const qualityParams = [
  { param: "Fat Content", buffalo: "5.5% - 6.5%", cow: "3.5% - 4.5%", importance: "Directly impacts the final yield and texture of the paneer." },
  { param: "SNF (Solids-Not-Fat)", buffalo: "~9.0%", cow: "~8.5%", importance: "Contributes to the structure and firmness." },
  { param: "Acidity (% Lactic Acid)", buffalo: "0.14 - 0.16%", cow: "0.13 - 0.14%", importance: "Fresh milk is required. High acidity leads to poor texture and low yield." },
];

const processSteps = [
    { step: 1, stage: "Milk Standardization", params: "Milk is standardized to a specific Fat-to-SNF ratio, typically by adjusting the fat content to <strong>5.8-6.0%</strong> for consistent product quality." },
    { step: 2, stage: "Heating", params: "The standardized milk is heated to <strong>85-90°C</strong> and held for 5-10 minutes. This step kills pathogenic bacteria and denatures whey proteins, which increases the final yield." },
    { step: 3, stage: "Coagulation", params: "The milk is cooled to the coagulation temperature of <strong>70-75°C</strong>. A coagulant (typically 1-2% hot citric acid solution or sour whey) is slowly added while gently stirring until clear whey separates." },
    { step: 4, stage: "Draining the Whey", params: "The coagulated mass (curd) is allowed to settle for 5-10 minutes. Afterwards, the liquid whey is carefully drained off, leaving the solid paneer curd behind." },
    { step: 5, stage: "Hooping & Pressing", params: "The hot curd is transferred into stainless steel hoops (molds) lined with muslin cloth. The curd is then pressed using mechanical or pneumatic presses at a pressure of <strong>2-3 kg/cm² for 15-20 minutes</strong>." },
    { step: 6, stage: "Chilling", params: "After pressing, the solid block of paneer is removed from the hoops and immersed in chilled water (<strong>4-6°C</strong>) for 2-3 hours. This firms up the texture and improves shelf life." },
    { step: 7, stage: "Cutting & Packaging", params: "The chilled paneer block is cut into desired sizes and shapes. It is then vacuum-packed or packed in pouches with brine to maintain freshness and prevent microbial growth. The final product is stored at refrigeration temperatures (< 5°C)." },
];

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-8">
        <h2 className="text-xl font-bold text-blue-700 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-700 font-headline">{title}</h2>
        <div className="mt-4 space-y-4 text-gray-600 leading-relaxed prose prose-sm max-w-none break-words">
            {children}
        </div>
    </section>
);


const topicComponents = {
    process: () => (
        <Section title="Step-by-Step Production Process">
            <p className="mb-6">The following table outlines the standardized procedure for manufacturing paneer at an industrial scale.</p>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader><TableRow><TableHead>Step No.</TableHead><TableHead>Process Stage</TableHead><TableHead>Key Parameters &amp; Procedure</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {processSteps.map(item => (
                            <TableRow key={item.step}>
                                <TableCell>{item.step}</TableCell>
                                <TableCell className="font-medium">{item.stage}</TableCell>
                                <TableCell dangerouslySetInnerHTML={{__html: item.params}} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
    ),
    quality_control: () => (
        <Section title="Raw Material &amp; Quality Control">
            <p className="mb-6">The quality of paneer is directly dependent on the quality of the incoming milk. In a dairy industry setting, milk is first tested for critical parameters before being accepted for processing.</p>
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader><TableRow><TableHead>Parameter</TableHead><TableHead>Ideal Range (Buffalo Milk)</TableHead><TableHead>Ideal Range (Cow Milk)</TableHead><TableHead>Importance</TableHead></TableRow></TableHeader>
                    <TableBody>
                        {qualityParams.map(item => (
                            <TableRow key={item.param}>
                                <TableCell className="font-medium">{item.param}</TableCell>
                                <TableCell>{item.buffalo}</TableCell>
                                <TableCell>{item.cow}</TableCell>
                                <TableCell>{item.importance}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Section>
    ),
    coagulants: () => (
        <Section title="Coagulants: Types and Usage">
            <p className="mb-4">The choice of coagulant affects the texture, flavor, and yield of the paneer.</p>
            <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Citric Acid</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> 1-2% solution (10-20g of citric acid powder in 1 litre of hot water at 70°C).<br/><strong>Usage:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results. Add slowly to hot milk (70-75°C) with gentle stirring until clear whey separates. Over-addition can make paneer sour.</p></div>
                <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Acetic Acid (Vinegar)</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> 1-2% solution (10-20ml of food-grade white vinegar in 1 litre of hot water).<br/><strong>Usage:</strong> A widely available and effective coagulant. It can sometimes impart a slight pungent or vinegar-like flavor, which is why citric acid is often preferred for a more neutral taste profile. Use in the same manner as citric acid solution.</p></div>
                <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Sour Whey</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> Use whey from a previous batch, allowed to develop natural acidity (0.8-0.9% lactic acid).<br/><strong>Usage:</strong> A traditional and economical method. Often results in a softer, more traditional-flavored paneer. Can be less consistent than citric acid.</p></div>
                <div className="p-4 border rounded-lg bg-card"><h4 className="font-bold text-card-foreground">Calcium Chloride</h4><p className="text-sm text-muted-foreground"><strong>Preparation:</strong> Often added to milk *before* the acid coagulant.<br/><strong>Usage:</strong> Not a primary coagulant, but added to milk (especially cow milk or pasteurized milk) to improve the coagulation properties and firmness of the curd, which can slightly increase yield by improving moisture retention.</p></div>
            </div>
        </Section>
    ),
    yield_texture: () => (
        <>
            <Section title="How to Increase Paneer Yield">
                <p className="mb-4">Maximizing yield is key to profitability. Here are the most effective methods:</p>
                <ul className="list-disc list-outside pl-5 space-y-3 text-muted-foreground">
                    <li><strong>Optimal Heating:</strong> Heating milk to 85-90°C denatures whey proteins (like β-lactoglobulin and α-lactalbumin). These proteins then get trapped in the casein curd during coagulation, increasing the total solid recovery and thus the yield.</li>
                    <li><strong>Correct Coagulation pH:</strong> The ideal pH for paneer coagulation is around 5.2. Adding the coagulant correctly to reach this pH ensures maximum protein precipitation without making the paneer too acidic, which would cause it to lose moisture and yield.</li>
                    <li><strong>Gentle Stirring:</strong> Stirring too vigorously during coagulation breaks the curd into fine particles, which are then lost in the whey. Gentle, slow stirring helps form a firm, consolidated curd mass.</li>
                    <li><strong>Controlled Pressing:</strong> Applying the correct pressure (2-3 kg/cm²) for the right amount of time (15-20 mins) is crucial. Over-pressing squeezes out too much moisture and fat, reducing yield and creating a hard paneer. Under-pressing results in a product with too much moisture, which has a shorter shelf life.</li>
                </ul>
            </Section>

             <Section title="Safe Yield Increasers for Consumption">
                <p className="mb-4">Certain additives can be used to safely increase the yield and improve the texture of paneer.</p>
                <Alert variant="default" className="bg-green-50 border-green-500 text-green-800">
                    <AlertDescription><strong>Whey Protein Concentrate (WPC):</strong> Adding WPC powder to milk before heating is a modern technique to boost the protein content. This directly increases the amount of solids available for coagulation, leading to a higher yield and a softer, more nutritious paneer. This is a common and safe practice in the industry.</AlertDescription>
                </Alert>
            </Section>

             <Section title="Paneer Texture Explained: Hard, Soft, and Fluffy">
                <p className="mb-4">The final texture of paneer is a result of several factors throughout the production process.</p>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>Texture</TableHead><TableHead>Primary Causes</TableHead><TableHead>Result</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-medium text-red-600">Hard / Rubbery</TableCell><TableCell>Low fat content in milk, over-pressing, high coagulation temperature, excessive cooking.</TableCell><TableCell>Chewy, dry, and does not absorb flavors well. Low moisture content.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium text-green-600">Soft / Spongy (Ideal)</TableCell><TableCell>Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing, proper chilling.</TableCell><TableCell>Holds its shape, has a smooth bite, and absorbs gravies. This is the desired texture for high-quality paneer.</TableCell></TableRow>
                            <TableRow><TableCell className="font-medium text-yellow-600">Fluffy / Crumbly</TableCell><TableCell>High acidity in milk, coagulation at too low a temperature, insufficient pressing.</TableCell><TableCell>Breaks apart easily, difficult to cut into cubes, may taste overly acidic.</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Section>
        </>
    )
};

const topics = [
    { value: "process", title: "Process", icon: Settings, component: topicComponents.process },
    { value: "quality_control", title: "Quality Control", icon: CheckSquare, component: topicComponents.quality_control },
    { value: "coagulants", title: "Coagulants", icon: Beaker, component: topicComponents.coagulants },
    { value: "yield_texture", title: "Yield & Texture", icon: BarChart, component: topicComponents.yield_texture },
];

export function PaneerProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveTopic(null);
    }
    setIsOpen(open);
  };
  
  const selectedTopic = topics.find(t => t.value === activeTopic);
  const ActiveComponent = selectedTopic ? selectedTopic.component : null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">Industrial Paneer Production</DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            {selectedTopic ? selectedTopic.title : "Process, Yield & Quality Control 🧀"}
          </DialogDescription>
        </DialogHeader>

        {selectedTopic && ActiveComponent ? (
            <div className="flex-1 flex flex-col min-h-0">
                <div className="px-4 sm:px-0">
                    <Button variant="ghost" onClick={() => setActiveTopic(null)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Topics
                    </Button>
                </div>
                <ScrollArea className="flex-1 mt-4 sm:pr-4">
                    <div className="p-4 pt-0 sm:p-0">
                        <ActiveComponent />
                    </div>
                </ScrollArea>
            </div>
        ) : (
            <ScrollArea className="flex-1 mt-4 sm:pr-4">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-0">
                    {topics.map(topic => (
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
