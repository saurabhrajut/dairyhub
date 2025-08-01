
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const foodTechTopics = [
    {
        id: "intro-food-tech",
        title: "Introduction to Food Technology",
        content: `
            <p><strong>Scientific Definition:</strong> Food Technology is a branch of food science that deals with the production processes that make foods. It involves the application of science and engineering principles to the selection, preservation, processing, packaging, distribution, and use of safe, nutritious, and wholesome food.</p>
            <p><strong>In-depth Introduction:</strong> This field integrates disciplines like chemistry, microbiology, engineering, and nutrition to address the entire food supply chain, from 'farm to fork'. Food technologists work on developing new food products, designing processing methods to ensure food safety and quality, improving food shelf life, and ensuring that food products meet governmental and industrial standards. The primary goal is to provide a safe, convenient, and nutritious food supply to a growing global population, tackling challenges like food spoilage, foodborne illnesses, and nutrient loss during processing.</p>
        `
    },
    {
        id: "eng-props",
        title: "Engineering Properties of Foods",
        content: `
            <p><strong>Scientific Definition:</strong> Engineering properties of foods are the physical and chemical characteristics that are essential for the design and operation of food processing equipment, storage systems, and quality control. These properties include thermal (specific heat, thermal conductivity), rheological (viscosity, elasticity), and physical (density, porosity) attributes.</p>
            <p><strong>In-depth Introduction:</strong> Understanding these properties is fundamental to food engineering. For example, thermal conductivity determines how quickly a food product heats or cools, which is critical for designing pasteurizers or freezers. Rheological properties, which describe how a food deforms and flows, are vital for designing pumps, mixers, and extruders. Physical properties like density and porosity affect packaging design and storage space requirements. Accurate measurement of these properties ensures efficient process design, optimal product quality, and energy conservation in the food industry.</p>
        `
    },
    {
        id: "food-biochem",
        title: "Food Biochemistry",
        content: `
            <p><strong>Scientific Definition:</strong> Food Biochemistry is the study of the chemical processes and interactions of all biological and non-biological components of foods. It focuses on the chemical structure, properties, and reactions of food constituents like carbohydrates, lipids, proteins, vitamins, and minerals, and how they change during processing, storage, and digestion.</p>
            <p><strong>In-depth Introduction:</strong> This field explains the 'why' behind food quality changes. For instance, it explores enzymatic browning in fruits, the Maillard reaction that gives baked goods their characteristic color and flavor, lipid oxidation that leads to rancidity, and protein denaturation during cooking. By understanding these biochemical pathways, food technologists can control them to enhance desirable attributes (like flavor development in cheese) or prevent undesirable changes (like spoilage or nutrient degradation), ultimately leading to better and safer food products.</p>
        `
    },
     {
        id: "processing-methods",
        title: "Principles and Methods of Food Processing",
        content: `
            <p><strong>Scientific Definition:</strong> This field covers the fundamental principles and various techniques used to transform raw agricultural commodities into consumable food products. It includes methods for preservation (canning, freezing, drying), size reduction (milling, grinding), mixing, and separation.</p>
            <p><strong>In-depth Introduction:</strong> The core principle of food processing is to extend shelf life, improve safety, and enhance the sensory qualities (taste, texture, appearance) of food. Preservation methods like pasteurization (heat) and freezing (cold) inhibit microbial growth. Dehydration removes water to prevent spoilage. Mechanical processing like homogenization creates stable emulsions in milk. Each method is chosen based on the specific food's properties and the desired outcome, balancing preservation with the retention of nutritional value and sensory attributes.</p>
        `
    },
    {
        id: "food-engineering",
        title: "Food Engineering",
        content: `
            <p><strong>Scientific Definition:</strong> Food Engineering is a multidisciplinary field that applies engineering, science, and mathematical principles to food processing and production. It focuses on designing and optimizing food processing operations, equipment, and systems.</p>
            <p><strong>In-depth Introduction:</strong> Food engineers are problem-solvers for the food industry. They design the machinery for pasteurization, the systems for aseptic packaging, and the processes for efficient heat transfer in a food plant. Their work involves fluid mechanics (pumping liquids), heat and mass transfer (cooking and drying), and process control to ensure that every food product is made consistently, safely, and efficiently on a large scale.</p>
        `
    },
    {
        id: "food-microbiology",
        title: "Food Microbiology",
        content: `
            <p><strong>Scientific Definition:</strong> Food Microbiology is the study of microorganisms that inhabit, create, or contaminate food. This includes the study of both spoilage-causing and pathogenic (disease-causing) microbes, as well as beneficial microbes used in fermentation (probiotics, yeast in bread, cultures in yogurt).</p>
            <p><strong>In-depth Introduction:</strong> This discipline is critical for food safety and production. Food microbiologists identify harmful bacteria like <em>Salmonella</em> and <em>Listeria</em> and develop methods to control them (e.g., HACCP systems). They also harness beneficial microorganisms to produce foods like cheese, yogurt, beer, and bread. Understanding microbial growth requirements (temperature, pH, water activity) allows for the development of effective preservation techniques and the creation of new fermented food products.</p>
        `
    },
     {
        id: "heat-mass-transfer",
        title: "Heat and Mass Transfer",
        content: `
            <p><strong>Scientific Definition:</strong> In the context of food engineering, this is the study of the movement of heat energy and physical matter (like water) into, out of, and within food materials during processing. Key principles include conduction, convection, and radiation for heat transfer, and diffusion and convection for mass transfer.</p>
            <p><strong>In-depth Introduction:</strong> These principles are the backbone of most food processing operations. Baking a cake involves heat transfer from the oven to the batter. Drying grapes to make raisins is a mass transfer process where water moves from the fruit into the air. Designing efficient and effective processes like pasteurization, freezing, drying, and frying requires a deep understanding of how heat and mass move, as this directly impacts processing time, energy consumption, food safety, and final product quality.</p>
        `
    },
    {
        id: "food-biotech",
        title: "Introduction to Food Biotechnology",
        content: `
            <p><strong>Scientific Definition:</strong> Food Biotechnology is the application of modern biological techniques, including genetic engineering, to improve the production, quality, and safety of food. It involves using living organisms or their components to produce or modify food products.</p>
            <p><strong>In-depth Introduction:</strong> This field has a broad impact, from traditional fermentation (using microbes to make yogurt) to modern advancements. Biotechnology is used to develop enzymes for more efficient cheese production (e.g., FPC - Fermentation-Produced Chymosin), create crops with enhanced nutritional value or pest resistance (GMOs), and develop rapid diagnostic kits to detect foodborne pathogens. It offers powerful tools to create more sustainable, nutritious, and safer food systems.</p>
        `
    },
    {
        id: "food-composition",
        title: "Food Composition and Analysis",
        content: `
            <p><strong>Scientific Definition:</strong> This is the discipline focused on determining the major and minor chemical components of foods and developing the analytical methods to quantify them. It involves analyzing for moisture, ash (minerals), proteins, fats, carbohydrates, vitamins, and other bioactive compounds.</p>
            <p><strong>In-depth Introduction:</strong> Food analysis is crucial for several reasons: nutrition labeling (e.g., the nutrition facts panel), quality control (ensuring a product meets its fat or protein specification), food safety (testing for toxins or adulterants), and regulatory compliance. Food analysts use a variety of techniques, from classic wet chemistry (like Kjeldahl for protein, Soxhlet for fat) to modern instrumental methods (like HPLC and GC-MS) to get accurate and reliable data about what is in our food.</p>
        `
    },
     {
        id: "food-nutrition",
        title: "Introduction to Food Nutrition",
        content: `
            <p><strong>Scientific Definition:</strong> Food Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to the maintenance, growth, reproduction, health, and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism, and excretion.</p>
            <p><strong>In-depth Introduction:</strong> This field connects food to health. It examines the roles of macronutrients (carbohydrates, fats, proteins) and micronutrients (vitamins, minerals) in the body. Nutrition science informs dietary guidelines, helps in the formulation of fortified and functional foods, and is essential for understanding and preventing diet-related diseases like obesity, diabetes, and heart disease. For a food technologist, understanding nutrition is key to creating products that are not just safe and tasty, but also healthy.</p>
        `
    },
    {
        id: "fruit-veg-processing",
        title: "Fruits and Vegetables Processing",
        content: `
            <p><strong>Scientific Definition:</strong> This is a specialized area of food technology focused on the principles and methods of preserving and processing fruits and vegetables to create products like juices, jams, jellies, canned goods, and frozen items.</p>
            <p><strong>In-depth Introduction:</strong> Fruits and vegetables are highly perishable due to their high water content and metabolic activity. Processing aims to inactivate spoilage enzymes and microorganisms to extend shelf life. Key processes include blanching (a mild heat treatment to inactivate enzymes), canning (sterilization in a sealed container), juicing, and dehydration. The challenge is to preserve the delicate flavors, colors, and heat-sensitive vitamins (like Vitamin C) that make these foods valuable.</p>
        `
    },
    {
        id: "food-safety-regs",
        title: "Food Safety, Quality and Regulations",
        content: `
            <p><strong>Scientific Definition:</strong> This domain covers the systems, standards, and legal frameworks designed to ensure that food is safe for consumption and meets specified quality attributes. It includes concepts like HACCP, GMP, ISO 22000, and an understanding of national and international food laws (like FSSAI in India, FDA in the US).</p>
            <p><strong>In-depth Introduction:</strong> Ensuring food safety is the most critical responsibility of the food industry. This field involves a proactive approach to identify and control potential hazards (biological, chemical, physical) at every step of the food chain. Quality management systems (QMS) are implemented to ensure consistency and adherence to specifications. Regulations are the legally enforceable rules that govern food production, labeling, and trade, protecting consumers and facilitating fair trade practices.</p>
        `
    },
     {
        id: "refrigeration",
        title: "Food Refrigeration and Cold Storage Construction",
        content: `
            <p><strong>Scientific Definition:</strong> This is a branch of food engineering that deals with the principles of refrigeration (the process of removing heat) and the design and construction of controlled low-temperature environments (cold storage) for food preservation.</p>
            <p><strong>In-depth Introduction:</strong> Refrigeration slows down microbial growth and enzymatic and chemical reactions, thereby extending the shelf life of perishable foods like milk, meat, and fresh produce. This field involves understanding the refrigeration cycle (evaporation, compression, condensation, expansion), calculating cooling loads, and selecting appropriate refrigerants. The construction of cold storage facilities requires knowledge of insulation materials, vapor barriers, and air circulation systems to maintain a consistent low temperature and prevent spoilage efficiently.</p>
        `
    },
    {
        id: "milk-products-tech",
        title: "Technology of Milk and Milk Products",
        content: `
            <p><strong>Scientific Definition:</strong> This is a specialized field of food technology that applies scientific and engineering principles to the processing, preservation, and manufacturing of milk and its derivatives, such as cheese, yogurt, butter, ice cream, and milk powder.</p>
            <p><strong>In-depth Introduction:</strong> This discipline covers the entire dairy processing chain. It starts with milk chemistry and microbiology, moves to unit operations like pasteurization, homogenization, and separation, and then delves into the specific technologies for creating a diverse range of dairy products. For example, it includes the science of cheese making (coagulation, ripening), the physics of ice cream freezing (crystal formation, overrun), and the engineering of milk drying (spray and drum drying). The goal is to produce safe, high-quality, and consistent dairy products.</p>
        `
    },
    {
        id: "fermentation-tech",
        title: "Fermentation Technology",
        content: `
            <p><strong>Scientific Definition:</strong> This is a field of biotechnology that utilizes microorganisms (like bacteria, yeast, and fungi) and their enzymes to produce valuable products through controlled metabolic processes. In the context of food, it is used to produce, preserve, and flavor a wide variety of foods and beverages.</p>
            <p><strong>In-depth Introduction:</strong> Fermentation is one of the oldest forms of food preservation. It involves harnessing the power of microbes to transform raw materials. For example, lactic acid bacteria ferment lactose in milk to produce yogurt and cheese, creating acidity that preserves the product and develops unique flavors. Yeast ferments sugars to produce alcohol and carbon dioxide for beer and bread. Modern fermentation technology also involves large-scale production in bioreactors to create products like enzymes, vitamins, and alternative proteins.</p>
        `
    },
    {
        id: "post-harvest",
        title: "Post Harvest Handling and Processing",
        content: `
            <p><strong>Scientific Definition:</strong> This field deals with the science and technology applied to agricultural produce immediately after harvest for its protection, conservation, processing, packaging, distribution, marketing, and utilization to meet the food and nutritional requirements of the consumers.</p>
            <p><strong>In-depth Introduction:</strong> A significant portion of food produced is lost between harvest and consumption. Post-harvest technology aims to minimize these losses. It includes practices like proper cleaning, sorting, and grading of produce; controlled atmosphere and modified atmosphere storage to slow down ripening and decay; and primary processing steps to make the produce ready for the market or further processing. The goal is to maintain quality, reduce spoilage, and ensure that the harvested food reaches the consumer in the best possible condition.</p>
        `
    },
    {
        id: "instrumental-analysis",
        title: "Instrumental Analysis of Foods",
        content: `
            <p><strong>Scientific Definition:</strong> This is a sub-discipline of food analysis that employs sophisticated scientific instruments to identify, quantify, and characterize the chemical and physical properties of food components. Common techniques include spectroscopy (UV-Vis, IR, AAS), chromatography (GC, HPLC), and mass spectrometry (MS).</p>
            <p><strong>In-depth Introduction:</strong> Instrumental analysis provides high sensitivity, accuracy, and speed compared to traditional wet chemistry methods. For example, High-Performance Liquid Chromatography (HPLC) can be used to accurately measure vitamin content or detect specific additives and contaminants. Gas Chromatography-Mass Spectrometry (GC-MS) is invaluable for identifying volatile flavor compounds or detecting pesticide residues. These powerful tools are essential for modern quality assurance, food safety monitoring, and research and development.</p>
        `
    },
    {
        id: "waste-management",
        title: "Waste Management and Effluent Treatment",
        content: `
            <p><strong>Scientific Definition:</strong> This is a field of environmental and food engineering focused on the collection, treatment, and disposal of solid and liquid waste (effluent) generated during food processing in an environmentally sustainable and regulatory-compliant manner.</p>
            <p><strong>In-depth Introduction:</strong> The food industry generates significant amounts of waste, such as peels, seeds, and wastewater with high organic loads (measured as BOD and COD). Improper disposal can lead to severe environmental pollution. This field involves designing Effluent Treatment Plants (ETPs) that use physical (screening), chemical (coagulation), and biological (aerobic/anaerobic digestion) processes to clean wastewater before it is discharged. It also focuses on the "3Rs" - Reduce, Reuse, and Recycle - finding ways to convert waste into value-added products like animal feed, biogas, or compost, thereby promoting a circular economy.</p>
        `
    },
    {
        id: "plant-design",
        title: "Food Plant Design and Layout",
        content: `
            <p><strong>Scientific Definition:</strong> This is a specialized area of food engineering concerned with the systematic planning and design of food manufacturing facilities. It involves arranging equipment, utilities, and workspaces to optimize workflow, ensure hygienic conditions, and comply with safety regulations.</p>
            <p><strong>In-depth Introduction:</strong> A well-designed plant is crucial for efficient and safe food production. Key principles include creating a logical process flow to prevent cross-contamination between raw and cooked products, designing surfaces that are easy to clean and sanitize, ensuring adequate space for equipment operation and maintenance, and providing necessary utilities (water, steam, electricity). The layout must adhere to GMP (Good Manufacturing Practices) and food safety standards, considering everything from pest control to employee welfare facilities.</p>
        `
    },
    {
        id: "flavors-colors",
        title: "Food Flavours and Colours",
        content: `
            <p><strong>Scientific Definition:</strong> This field of food science studies the chemical compounds and sensory perceptions that constitute the flavor and appearance of food. It includes the analysis of natural flavors and colors, the development of nature-identical and artificial alternatives, and the technology of their application in food products.</p>
            <p><strong>In-depth Introduction:</strong> Flavor is a complex combination of taste (sweet, sour, salt, bitter, umami) and aroma (volatile compounds detected by the nose). Color is often the first sensory attribute a consumer uses to judge a product's quality. This field explores how processing can affect these attributes and how to restore or enhance them using approved additives. It involves techniques like flavor encapsulation to protect delicate aromas during processing and understanding the stability of natural pigments (like anthocyanins or carotenoids) under different conditions (pH, light, heat).</p>
        `
    },
    {
        id: "frozen-foods",
        title: "Technology of Frozen Foods",
        content: `
            <p><strong>Scientific Definition:</strong> This is the branch of food preservation that uses freezing (reducing temperature below the food's freezing point) to inhibit microbial growth and slow down chemical and enzymatic reactions, thereby extending shelf life while maintaining high quality.</p>
            <p><strong>In-depth Introduction:</strong> Freezing is one of the best methods for long-term preservation because it minimally affects the nutritional value and sensory characteristics of many foods. The technology focuses on the science of ice crystal formation. Rapid freezing (e.g., blast freezing, cryogenic freezing) creates small ice crystals, which cause less damage to the food's cellular structure, resulting in better texture upon thawing. The field also covers pre-freezing treatments (like blanching), packaging requirements for frozen foods, and managing the cold chain to ensure the product remains frozen from the factory to the consumer.</p>
        `
    },
    {
        id: "meat-fish-poultry",
        title: "Meat, Fish and Poultry Processing",
        content: `
            <p><strong>Scientific Definition:</strong> This is a specialized area of food technology that deals with the conversion of livestock, fish, and poultry into safe, wholesome, and value-added consumable products. It covers all stages from slaughter/catching to processing, preservation, and packaging.</p>
            <p><strong>In-depth Introduction:</strong> This field is critically important for managing highly perishable and microbiologically sensitive products. It involves understanding post-mortem biochemistry (like rigor mortis), methods of slaughter and dressing, and preservation techniques such as curing, smoking, cooking, and freezing. The technology also focuses on creating value-added products like sausages, bacon, and breaded chicken, ensuring their safety and quality through strict process control and hygiene management.</p>
        `
    },
    {
        id: "product-dev",
        title: "Food Product Development and Sensory Evaluation",
        content: `
            <p><strong>Scientific Definition:</strong> Food Product Development is the systematic process of creating new food products, from idea generation to market launch. Sensory Evaluation is the scientific discipline used to evoke, measure, analyze, and interpret human responses to products as perceived through the senses of sight, smell, touch, taste, and hearing.</p>
            <p><strong>In-depth Introduction:</strong> Creating a successful new food product is a complex, multi-stage process. It starts with an idea, followed by formulation, pilot plant trials, shelf-life testing, and scaling up for commercial production. Throughout this process, sensory evaluation is critical. Trained panels and consumer tests are used to assess attributes like flavor, texture, and appearance to ensure the product meets consumer expectations. It is an iterative process of formulation and testing to create a product that is not only safe and stable but also desirable to consumers.</p>
        `
    },
    {
        id: "food-packaging",
        title: "Food Packaging",
        content: `
            <p><strong>Scientific Definition:</strong> Food Packaging is a coordinated system of preparing goods for transport, warehousing, logistics, sale, and end use. It is a scientific and artistic discipline that involves protecting the food product from environmental factors, containing it for handling, and communicating information to the consumer.</p>
            <p><strong>In-depth Introduction:</strong> Modern food packaging does much more than just hold the food. Its primary function is protection – against microorganisms, moisture, oxygen, and physical damage. It must also be inert, meaning it doesn't transfer any harmful substances to the food. Advanced packaging technologies include modified atmosphere packaging (MAP), which alters the gas composition inside a package to extend shelf life, and active packaging, which can absorb oxygen or release antimicrobial agents. Furthermore, the package is a key marketing tool, providing nutritional information, branding, and convenience features.</p>
        `
    },
    {
        id: "food-storage",
        title: "Food Storage Engineering",
        content: `
            <p><strong>Scientific Definition:</strong> This is a field of food engineering that focuses on the design and management of storage systems and conditions to maintain the quality and safety of food materials over time. It involves controlling environmental factors like temperature, humidity, and gas composition.</p>
            <p><strong>In-depth Introduction:</strong> Proper storage is essential to prevent spoilage and extend the availability of seasonal foods. This field applies principles of engineering and food science to design optimal storage solutions. Examples include designing grain silos with proper aeration to prevent mold growth, and developing controlled atmosphere (CA) storage facilities for apples, which slow down ripening by reducing oxygen and increasing carbon dioxide levels. The goal is to create an environment that minimizes quality degradation and economic loss during the period between production and consumption.</p>
        `
    },
    {
        id: "baking-confectionery",
        title: "Baking and Confectionery Technology",
        content: `
            <p><strong>Scientific Definition:</strong> This is a branch of food technology that deals with the science and art of producing baked goods (like bread, cakes, and biscuits) and confectionery items (like chocolates and candies). It involves understanding the functional properties of ingredients like flour, sugar, fats, and leavening agents.</p>
            <p><strong>In-depth Introduction:</strong> This field is a blend of chemistry, physics, and artistry. In baking, the focus is on gluten development in flour, the action of yeast or chemical leaveners to create texture, and heat transfer during baking. In confectionery, it's about controlling sugar crystallization, which is the key to creating different textures from hard candy to soft fudge. It also involves the science of emulsions (for creams) and the complex rheology and tempering of chocolate to achieve the perfect snap and gloss.</p>
        `
    },
    {
        id: "fats-oils",
        title: "Technology of Fats and Oils",
        content: `
            <p><strong>Scientific Definition:</strong> This is a specialized area of food technology focusing on the extraction, refining, modification, and utilization of fats and oils from plant and animal sources. It covers the chemistry of lipids and the engineering of processes to produce edible oils, shortening, margarine, and other fat-based products.</p>
            <p><strong>In-depth Introduction:</strong> Raw oils extracted from sources like soybeans or sunflower seeds need to be refined to remove impurities. This involves processes like degumming, neutralization, bleaching, and deodorization. The technology also includes modification processes like hydrogenation (which converts liquid oils to solid fats for making margarine), interesterification (to alter melting properties), and fractionation (to separate fats into liquid and solid parts). A key challenge in this field is preventing lipid oxidation, which causes rancidity and off-flavors.</p>
        `
    },
    {
        id: "snack-food",
        title: "Snack Food Technology",
        content: `
            <p><strong>Scientific Definition:</strong> This field of food technology is dedicated to the development and production of snack foods, which are typically characterized by their convenience, sensory appeal, and shelf stability. It involves processes like extrusion, frying, baking, and seasoning.</p>
            <p><strong>In-depth Introduction:</strong> Snack food production often relies on advanced processing technologies. Extrusion cooking, for example, is a high-temperature, short-time process that simultaneously cooks, forms, and expands a cereal-based dough to create products like puffed snacks and breakfast cereals. Frying technology focuses on optimizing heat transfer and minimizing oil uptake. A major focus is on flavor application, ensuring that seasonings adhere uniformly to the product. The industry is also increasingly focused on developing healthier snacks by reducing fat and sodium and incorporating whole grains and other nutritious ingredients.</p>
        `
    },
     {
        id: "food-additives",
        title: "Introduction to Food Additives",
        content: `
            <p><strong>Scientific Definition:</strong> A food additive is any substance not normally consumed as a food by itself and not normally used as a typical ingredient of the food, whether or not it has nutritive value, the intentional addition of which to food for a technological (including organoleptic) purpose in the manufacturing, processing, preparation, treatment, packing, packaging, transport or holding of such food results, or may be reasonably expected to result, in it or its by-products becoming a component of or otherwise affecting the characteristics of such foods.</p>
            <p><strong>In-depth Introduction:</strong> Additives serve many functions: preservatives (like sorbates) inhibit spoilage, antioxidants (like BHT) prevent rancidity, emulsifiers (like lecithin) stabilize mixtures of oil and water, and stabilizers (like xanthan gum) provide texture and body. Other additives enhance flavor (MSG) or add color (tartrazine). The use of food additives is strictly regulated by government agencies like FSSAI and FDA, which establish which additives are safe, in which foods they can be used, and at what maximum levels.</p>
        `
    },
    {
        id: "traditional-foods",
        title: "Technology of Traditional Foods",
        content: `
            <p><strong>Scientific Definition:</strong> This is a field that applies modern food science and technology principles to study, standardize, and improve the production of traditional and ethnic foods, with the goal of preserving cultural heritage while ensuring safety, consistency, and scalability.</p>
            <p><strong>In-depth Introduction:</strong> Many traditional foods are produced using age-old methods passed down through generations. While this imparts unique character, it can also lead to inconsistent quality and safety. This field works to understand the science behind a traditional processes (e.g., the specific microbial consortia in a traditional fermented product). It then aims to standardize the process by controlling critical parameters, developing appropriate packaging to extend shelf life, and adapting the production for a larger, industrial scale without losing the food's authentic character.</p>
        `
    },
    {
        id: "functional-foods",
        title: "Functional Foods and Nutraceuticals",
        content: `
            <p><strong>Scientific Definition:</strong> Functional foods are foods that have a potentially positive effect on health beyond basic nutrition. Nutraceuticals are products derived from food sources that are purported to provide extra health benefits, in addition to the basic nutritional value found in foods.</p>
            <p><strong>In-depth Introduction:</strong> This is a rapidly growing area where food and medicine intersect. Functional foods are often enriched with specific components like probiotics (for gut health), omega-3 fatty acids (for heart health), or plant stanols (to lower cholesterol). Nutraceuticals are often sold in medicinal forms like capsules or powders. Examples include glucosamine for joint health or isolated antioxidants like lycopene. The development of these products requires rigorous scientific evidence to substantiate health claims and must navigate the regulatory landscape that often separates food from drugs.</p>
        `
    }
];

export function FoodTechModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-800 font-headline">
            Foundations of Food Technology
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-500">
            An in-depth guide to the core concepts of food science and technology.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-4 pr-6">
            <Accordion type="single" collapsible className="w-full">
                {foodTechTopics.map((topic) => (
                     <AccordionItem key={topic.id} value={topic.id}>
                        <AccordionTrigger className="text-xl font-bold hover:no-underline font-headline text-left">
                           {topic.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                                 dangerouslySetInnerHTML={{ __html: topic.content }} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
