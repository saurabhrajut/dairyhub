"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  CheckCircle,
  Thermometer,
  Settings,
  Filter,
  Droplet,
  Wind,
  Layers,
  Archive,
  RotateCw,
  Scaling,
  Zap,
  Clock,
  View,
  Power,
  ShieldCheck,
  Package
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";


function Section({ title, icon: Icon, children, value }: { title: string, icon: React.ElementType, children: React.ReactNode, value: string }) {
    return (
        <div>
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-headline">
                <Icon className="w-6 h-6" />
                <span>{title}</span>
            </h3>
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed pl-9 break-words">
                {children}
            </div>
        </div>
    );
}

const processingTopics = [
    { value: "workflow", title: "Workflow Overview", icon: Settings },
    { value: "filtration", title: "Filtration & Clarification", icon: Filter },
    { value: "separation", title: "Cream Separation", icon: Droplet },
    { value: "standardization", title: "Standardization", icon: Scaling },
    { value: "homogenization", title: "Homogenization", icon: Layers },
    { value: "bactofugation", title: "Bactofugation", icon: RotateCw },
    { value: "heat-treatment", title: "Heat Treatment", icon: Thermometer },
    { value: "kinetics", title: "Kinetic Parameters", icon: Clock },
    { value: "pasteurization", title: "Pasteurization", icon: Zap },
    { value: "htst-operation", title: "HTST Operation", icon: Power },
    { value: "heat-exchangers", title: "Heat Exchangers", icon: View },
    { value: "vacuum-pasteurization", title: "Vacreation", icon: Wind },
    { value: "sterilization", title: "Sterilization/UHT", icon: ShieldCheck }
];

export function DairyProcessingModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const isMobile = useIsMobile();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            The Science of Dairy Processing
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            A deep-dive into the core technologies that transform raw milk.
          </DialogDescription>
        </DialogHeader>
         <Tabs defaultValue="workflow" orientation={isMobile ? "horizontal" : "vertical"} className="flex-1 flex flex-col md:flex-row gap-4 min-h-0">
            <div className={cn("flex-shrink-0", isMobile ? "w-full border-b" : "w-56 border-r pr-4")}>
                <ScrollArea className={cn("w-full h-full", isMobile ? "whitespace-nowrap" : "")}>
                    <TabsList className={cn("w-full h-auto flex", isMobile ? "flex-row" : "flex-col items-start")}>
                        {processingTopics.map(topic => (
                             <TabsTrigger key={topic.value} value={topic.value} className="text-left justify-start w-full md:w-full shrink-0">{topic.title}</TabsTrigger>
                        ))}
                    </TabsList>
                    {isMobile && <ScrollBar orientation="horizontal" />}
                </ScrollArea>
            </div>
            <div className="flex-1 min-w-0">
                <ScrollArea className="h-full pr-2">
                    <TabsContent value="workflow" className="mt-0">
                        <Section value="workflow" title="Workflow Overview" icon={Settings}>
                            <p>Dairy processing ek sequence of operations hai jismein raw milk ko safe, high-quality, aur shelf-stable products mein badla jaata hai. Har step ka ek specific purpose hota hai.</p>
                            <ol className="list-decimal pl-5 mt-4 space-y-2">
                                <li><strong>Reception & Testing:</strong> Plant mein aane wale doodh ki quality (Fat, SNF, Acidity, Adulterants) jaanchi jaati hai.</li>
                                <li><strong>Chilling:</strong> Doodh ko turant 4-5°C tak thanda kiya jaata hai taaki bacteria ki growth ruk jaaye.</li>
                                <li><strong>Filtration/Clarification:</strong> Doodh se visible dirt aur foreign matter ko hataya jaata hai.</li>
                                <li><strong>Standardization:</strong> Fat aur SNF content ko product (toned, double toned, etc.) ke hisaab se adjust kiya jaata hai.</li>
                                <li><strong>Homogenization:</strong> Fat globules ko todkar doodh ko uniform banaya jaata hai.</li>
                                <li><strong>Pasteurization/Sterilization:</strong> Doodh ko heat-treat karke harmful bacteria ko khatam kiya jaata hai.</li>
                                <li><strong>Packaging:</strong> Sterile conditions mein doodh ko pack kiya jaata hai.</li>
                                <li><strong>Storage & Despatch:</strong> Final products ko cold storage mein rakha jaata hai aur market mein bheja jaata hai.</li>
                            </ol>
                        </Section>
                    </TabsContent>
                    <TabsContent value="filtration" className="mt-0">
                        <Section value="filtration" title="Filtration and Clarification" icon={Filter}>
                            <h4>Parichay (Introduction)</h4>
                            <p>During handling of milk on farm and its transportation, certain visible particles and dirt may gain access into the milk which may be removed by either filtration or centrifugal clarification. Filtration/clarification equipment has been designed for both cold and warm milk. Since fluidity of warm milk is more, its separation process is more efficient. However, warming of milk for this purpose requires additional equipment. It also poses the risk of bacterial growth unless handled properly. Handling at higher temperatures may also affect creaming property of the milk besides dissolving some of the extraneous matter.</p>
                            
                            <h4 className="mt-4">Pre-heating</h4>
                            <p>This term refers to heating of milk before the operation which follows immediately. The milk is pre-heated to about 35-40°C using plate or tubular heater for efficient filtration/clarification. Pre-heating becomes essential, if the incoming milk is cold. As the temperature of the milk increases, the viscosity of milk decreases resulting in more efficient filtration/clarification.</p>
                            
                            <h4 className="mt-4">Filtration</h4>
                            <p>Filtration of milk is carried out to remove visible sediment (foreign matter) from the milk to improve the aesthetic quality of milk. While filtration removes suspended foreign particles by straining process, clarification removes the same by centrifugal force. The advantages of filtration are that preheating is not essential and there is less likelihood of soluble dirt going into the solution. However, the major disadvantage is the flow of milk is slow.</p>

                            <h4 className="mt-4">Clarification</h4>
                            <p>Clarification is more efficient than filtration for the removal of dirt and foreign matter from milk. It removes leucocytes, udder tissues, other large cells and fine dirt. The objective of clarification is to improve the appearance and marketability of milk. A clarifier may be operated depending on the size of the machine, for a period ranging from 2 - 8 h for cold milk (5 - 10°C) and 1-4 h for warm milk (57°C), without cleaning.</p>
                        </Section>
                    </TabsContent>
                    <TabsContent value="separation" className="mt-0">
                        <Section value="separation" title="Cream Separation" icon={Droplet}>
                            <h4>Siddhant (Principles)</h4>
                            <p>Cream separation is the process of separating milk fat from the non-fat solids portion of milk. It is possible because of the difference in density between fat (~0.93 g/mL) and skim milk (~1.036 g/mL).</p>
                            <p><strong>Gravity Separation:</strong> According to Stoke's Law, the less dense fat globules slowly rise to the surface to form a cream layer. This is a slow process.</p>
                            <p><strong>Centrifugal Separation:</strong> Milk is spun rapidly, creating a centrifugal force. The heavier skim milk is thrown to the periphery, while the lighter cream collects in the center. This process is very fast and efficient.</p>
                            <h4 className="mt-4">Cream Separator Components</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Bowl and Disc Assembly:</strong> The main part of the separator, containing a stack of cone-shaped discs. The small spaces (separation channels) between these discs cause the milk to flow in thin layers, separating the fat and skim milk.</li>
                                <li><strong>Inlet/Outlet:</strong> Milk enters from the bottom of the bowl and, after separation, exits through separate outlets for cream and skim milk.</li>
                                <li><strong>Cream Regulating Screw:</strong> By adjusting this screw, the size of the cream outlet can be changed, thus controlling the fat percentage in the cream.</li>
                            </ul>
                        </Section>
                    </TabsContent>
                    <TabsContent value="standardization" className="mt-0">
                        <Section value="standardization" title="Standardization of Milk" icon={Scaling}>
                            <h4>Parichay (Introduction)</h4>
                            <p>Standardization is the process of adjusting one or more of the milk constituents to a nominated level. In the market milk industry, this normally involves reducing the butterfat content by adding skim milk or by removing cream.</p>
                            <h4 className="mt-4">Uddeshya (Objectives)</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To comply with the legal requirements for particular milk/dairy products.</li>
                                <li>To provide the consumer with a uniform product.</li>
                                <li>To ensure economics in production.</li>
                            </ul>
                            <h4 className="mt-4">Methods of Calculation</h4>
                            <p>For standardization of milk or cream, the proportions of the various ingredients of known composition to be mixed can be estimated using Pearson's Square method or algebraic equations.</p>
                            <h5>Pearson’s Square Method</h5>
                            <p>Draw a square and place the desired fat percentage in the center. At the left-hand corners, place the fat percentages of the materials to be mixed. Subtract the number in the center from the larger number on the left and place the remainder at the diagonally opposite right-hand corner. Do the same for the other number. The numbers on the right now represent the parts of each of the original materials that must be blended.</p>
                            <h5>Algebraic Equations</h5>
                            <p>This method involves setting up and solving mass balance equations based on the known compositions and quantities of the products.</p>
                            <h4 className="mt-4">Methods of Standardization</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Batch Standardization:</strong> This is the most common process in dairies. The fat content of a large batch of milk is tested, and then the required amount of skim milk or cream is added to achieve the desired level.</li>
                                <li><strong>Continuous Standardization:</strong> This uses an inline sampler and testing device that continuously measures the fat content. An operator adjusts the flow of skim milk or cream into the milk line based on these readings.</li>
                                <li><strong>Automatic Standardization:</strong> This is an extension of the continuous process where a microprocessor automatically controls the flow of skim milk or cream based on signals from the sampler/tester system.</li>
                            </ul>
                        </Section>
                    </TabsContent>
                    <TabsContent value="homogenization" className="mt-0">
                        <Section value="homogenization" title="Homogenization" icon={Layers}>
                            <h4>Parichay aur Paribhasha (Introduction and Definition)</h4>
                            <p>Homogenization is a mechanical process aimed at breaking down the large fat globules in milk into smaller, uniform-sized globules (&lt;2 µm). This creates a stable emulsion in the milk, preventing the fat from rising to form a cream layer.</p>
                            <h4 className="mt-4">Fayde aur Nuksan (Merits and Demerits)</h4>
                            <p><strong>Merits:</strong> No cream layer formation, milk appears thicker and tastes richer, and is more easily digestible. <strong>Demerits:</strong> Increased production cost, and can lead to rancidity if not done at the correct temperature.</p>
                            <h4 className="mt-4">Siddhant aur Prakriya (Principles and Process)</h4>
                            <p>Milk is forced through a homogenizer valve (a very small gap) at high pressure. As the milk passes through this valve at high velocity, forces like turbulence, shear, and cavitation combine to break down the large fat globules into smaller ones. Homogenization is typically done before pasteurization.</p>
                            <h4 className="mt-4">Doodh ke Gunon par Prabhav (Effect on Milk Properties)</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Whiter Color:</strong> Smaller fat globules scatter light more, making the milk appear whiter and more opaque.</li>
                                <li><strong>Fuller Body & Richer Taste:</strong> Homogenized milk feels thicker and more flavorful in the mouth.</li>
                                <li><strong>Sensitivity to Lipase:</strong> If the milk is not properly heated before homogenization, the lipase enzyme can rapidly break down the fat, producing a rancid flavor.</li>
                            </ul>
                        </Section>
                    </TabsContent>
                    <TabsContent value="bactofugation" className="mt-0">
                        <Section value="bactofugation" title="Bactofugation" icon={RotateCw}>
                            <h4>Parichay (Introduction)</h4>
                            <p>Bactofugation is the process of removing microorganisms, especially heat-resistant spores (like Bacillus/Clostridia), from milk using centrifugal force. Its main objective is to improve the hygienic quality of milk, allowing it to be sterilized at a lower temperature-time combination. This is particularly important for products with a long shelf-life, such as hard cheese and UHT milk.</p>
                            <h4 className="mt-4">Bactotherm Process</h4>
                            <p>In this process, milk is heated to 60-75°C and then sent to a special high-efficiency centrifuge (Bactofuge). Here, the bacteria (which are denser than milk) are separated and discharged as a concentrate called 'bactofugate'. This bactofugate is separately UHT treated (130-140°C for 3-4 seconds) and then mixed back into the milk. This prevents loss of milk solids while significantly reducing the bacterial load.</p>
                        </Section>
                    </TabsContent>
                    <TabsContent value="heat-treatment" className="mt-0">
                        <Section value="heat-treatment" title="Principles of Heat Treatment" icon={Thermometer}>
                            <h4>Parichay (Introduction)</h4>
                            <p>Thermal processing is a crucial step in the dairy industry to minimize spoilage and eliminate food-borne illnesses. The primary objective of heat treatment is to inactivate all pathogenic microorganisms and most enzymes, thus improving the hygienic quality and shelf life of milk products. Pasteurization is the most common thermal process.</p>
                            <h4 className="mt-4">Time and Temperature</h4>
                            <p>There is a logarithmic relationship between temperature and time for inactivating microorganisms. A 10°C increase in temperature can reduce the required time to 1/10th of the original. This relationship is described by the Q10 factor. For chemical reactions, the Q10 is low (2-4), while for bacterial spores, it is very high (around 30). This allows UHT processing (very high temperature for a very short time) to effectively sterilize milk with minimal chemical changes (like browning).</p>
                            <h4 className="mt-4">Changes in Milk Components</h4>
                            <p>Heat treatment affects milk components. Whey proteins start to denature above 70°C, which can be beneficial for yogurt making but can affect cheese renneting. The salt equilibrium is also disturbed, and at higher temperatures, calcium can precipitate. Vitamins, especially B-complex and C, are also sensitive to heat.</p>
                        </Section>
                    </TabsContent>
                    <TabsContent value="kinetics" className="mt-0">
                         <Section value="kinetics" title="Kinetic Parameters of Heat Induced Changes" icon={Clock}>
                            <p>Microorganisms are destroyed by heat when their proteins coagulate and essential enzymes are inactivated. Several terms are used to denote heat resistance:</p>
                            <ul className="list-disc pl-5 space-y-2">
                            <li><strong>D-Value (Decimal Reduction Time):</strong> The time in minutes required at a specific temperature to reduce the number of organisms to 1/10th of the original value.</li>
                            <li><strong>Z-Value:</strong> The increase in temperature necessary to achieve the same lethal action in 1/10th of the time.</li>
                            <li><strong>F0 Value:</strong> The thermal death time (in minutes) of an organism at 121°C. It is a measure of the total lethal effect of a thermal process.</li>
                            <li><strong>Q10-Value:</strong> The increase in the rate of a reaction when the temperature is increased by 10°C.</li>
                            </ul>
                        </Section>
                    </TabsContent>
                    <TabsContent value="pasteurization" className="mt-0">
                        <Section value="pasteurization" title="Methods of Pasteurization" icon={Zap}>
                            <p>Pasteurization is a heat treatment process designed to kill all pathogenic microorganisms in milk, making it safe for consumption and extending its shelf life. The two main methods are:</p>
                            <h4 className="mt-4">Low-Temperature Long-Time (LTLT) / Batch Pasteurization</h4>
                            <p>Milk is heated to a minimum of 63°C and held at this temperature for at least 30 minutes, then cooled. This method is suitable for smaller volumes and is often done in multi-purpose vats.</p>
                            <h4 className="mt-4">High-Temperature Short-Time (HTST) Pasteurization</h4>
                            <p>This is the modern, continuous method for pasteurizing large volumes of milk. Milk is heated to 72°C for 15 seconds and then immediately cooled to 5°C or below. It is highly efficient due to its regeneration section, where outgoing hot pasteurized milk heats the incoming cold raw milk.</p>
                        </Section>
                    </TabsContent>
                     <TabsContent value="htst-operation" className="mt-0">
                        <Section value="htst-operation" title="Working of HTST Pasteurizer" icon={Power}>
                            <h4>Operation Steps</h4>
                            <ol className="list-decimal pl-5 space-y-2">
                                <li><strong>Startup:</strong> The plant is first sterilized with hot water. Milk flow is then started, which goes to a float-controlled balance tank. A pump pushes the milk through the regeneration section where it is pre-heated by the outgoing pasteurized milk.</li>
                                <li><strong>Heating & Holding:</strong> The pre-heated milk then enters the heating section where hot water brings it to the pasteurization temperature (e.g., 72°C). It then flows through the holding tube, which is sized to ensure the milk is held for the required time (e.g., 15 seconds).</li>
                                <li><strong>Flow Diversion Valve (FDV):</strong> This is a critical safety device. If the milk does not reach the required temperature, the FDV automatically diverts it back to the balance tank for reprocessing.</li>
                                <li><strong>Cooling & Exit:</strong> Properly pasteurized milk passes the FDV and goes back through the regeneration section to be cooled by the incoming raw milk. It is then further cooled in the cooling section with chilled water before exiting the system for packaging.</li>
                            </ol>
                            <h4>Efficiency Test</h4>
                            <p>The **Alkaline Phosphatase Test** is used to check the efficiency of pasteurization. This enzyme is naturally present in raw milk and is destroyed at a temperature-time combination slightly higher than that required to kill the most heat-resistant pathogen (Mycobacterium tuberculosis). A negative phosphatase test indicates proper pasteurization.</p>
                        </Section>
                    </TabsContent>
                     <TabsContent value="heat-exchangers" className="mt-0">
                        <Section value="heat-exchangers" title="Heat Exchangers - Plate and Tubular Type" icon={View}>
                            <h4>Plate Heat Exchangers (PHE)</h4>
                            <p>The PHE is widely used for pasteurization. It consists of a series of thin, corrugated stainless steel plates pressed together in a frame. Gaskets seal the plates and direct the flow of milk and the heating/cooling medium (like hot water or chilled water) through alternate channels. The corrugations create turbulence, ensuring efficient heat transfer. Multiple sections for regeneration, heating, and cooling are combined in one compact unit.</p>
                            <h4>Tubular Heat Exchangers</h4>
                            <p>In these exchangers, the product flows through tubes that are heated or cooled externally. They can handle higher pressures and are often used for UHT processing where temperatures exceed 100°C. However, they are more difficult to clean and inspect compared to plate heat exchangers.</p>
                        </Section>
                    </TabsContent>
                     <TabsContent value="vacuum-pasteurization" className="mt-0">
                        <Section value="vacuum-pasteurization" title="Vacuum Pasteurization (Vacreation)" icon={Wind}>
                            <h4>Purpose</h4>
                            <p>Vacreation is a process of heat treatment under vacuum. Its main purposes are to kill bacteria, inactivate enzymes, and, most importantly, remove undesirable feed and weed taints and off-flavors from milk or cream through steam distillation.</p>
                            <h4>Principle & Process</h4>
                            <p>The process involves mixing the product (like cream) with steam under vacuum and then causing it to expand suddenly into a second chamber with a higher vacuum. This flash evaporation and steam distillation process effectively strips out volatile off-flavors. A typical Vacreator has multiple chambers, each with a progressively higher vacuum, to achieve pasteurization, flavor removal, and cooling in a single continuous process.</p>
                        </Section>
                    </TabsContent>
                    <TabsContent value="sterilization" className="mt-0">
                        <Section value="sterilization" title="Sterilization, UHT & Packaging" icon={ShieldCheck}>
                            <h4>Introduction to Sterilization</h4>
                            <p>According to Food Safety and Standards Rules-2011, the term ‘sterilization’ when used in association with milk, means heating milk in sealed container continuously to a temperature of either 115°C for 15 min or at least 130°C for a period of one second or more in a continuous flow and then packed under aseptic condition in hermetically sealed containers to ensure preservation at room temperature for a period not less than 15 days from the date of manufacture.</p>
                            <h4>In-bottle Sterilization</h4>
                            <p>In this method, raw milk is filtered, standardized, homogenized, and filled into bottles. The sealed bottles are then heated in batches or continuously (e.g., in a hydrostatic tower sterilizer) to 110-118°C for 15-25 minutes. This process gives a long shelf life but can cause more significant changes to flavor and color compared to UHT.</p>
                            <h4 className="mt-4">Ultra-High Temperature (UHT) Processing</h4>
                            <p>UHT is a modern sterilization technique where milk is heated to a very high temperature (135-150°C) for a very short time (a few seconds). This effectively sterilizes the milk with minimal nutritional and sensory damage. The sterile milk is then packed aseptically into sterile containers.</p>
                            <h5 className="font-bold mt-2">UHT Heating Methods:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Direct Heating:</strong> Steam is injected directly into the milk (steam injection) or milk is infused into a steam-filled chamber (infusion). This allows for very rapid heating but requires precise control to remove the added water.</li>
                                <li><strong>Indirect Heating:</strong> Milk is heated through a surface, like in a plate or tubular heat exchanger, without direct contact with the heating medium. This is more common but can lead to more cooked flavors.</li>
                            </ul>
                            <h4 className="mt-4">Homogenization in UHT Processing</h4>
                            <p>Homogenization can be done before (upstream) or after (downstream) UHT heating. Upstream is simpler as it doesn't require a sterile homogenizer, but downstream homogenization can provide better stability against protein aggregation and sediment formation during storage, especially in direct heating systems.</p>
                            <h4 className="mt-4">Aseptic Packaging</h4>
                            <p>Aseptic packaging is critical for UHT products. It involves sterilizing the packaging material (often using hydrogen peroxide), filling the sterile product in a sterile environment, and sealing the container hermetically to prevent recontamination. This allows the product to have a long shelf life without refrigeration.</p>
                            <h4 className="mt-4">Defects in UHT Milk</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Flavour:</strong> A "cooked" or "cabbage" flavour is common initially due to sulphur compounds, but it usually disappears after a few days. Oxidized or stale flavours can develop later during storage.</li>
                                <li><strong>Colour:</strong> Unlike in-bottle sterilization, UHT milk doesn't typically brown during processing. However, some browning can occur during long-term storage.</li>
                                <li><strong>Texture & Structure:</strong> Inefficient homogenization can lead to fat separation. Sediment can form due to protein aggregation. "Age gelation," where the milk thickens and forms a gel during storage, can also occur, primarily due to enzymatic (protease) activity or physico-chemical changes.</li>
                            </ul>
                            <h4 className="mt-4">Nutritive Value of UHT Milk</h4>
                            <p>UHT processing causes some denaturation of whey proteins but has little effect on the nutritional value of casein, lipids, or minerals. There can be some loss of heat-sensitive vitamins, such as folic acid and vitamin C, but fat-soluble vitamins (A, D, E, K) and most B-complex vitamins are largely unaffected.</p>
                        </Section>
                    </TabsContent>
                </ScrollArea>
            </div>
          </Tabs>
      </DialogContent>
    </Dialog>
  );
}