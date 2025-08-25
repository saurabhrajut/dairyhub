
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
import { Button } from "../ui/button"
import { FlaskConical, Microscope, Shield, ArrowLeft } from "lucide-react"

const platformTests = [
    {
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
    {
        title: "Total Solids (TS) and Solid-Not-Fat (SNF) Test with Lactometer",
        content: `
            <p><strong>Principle:</strong> This test uses a lactometer to measure the specific gravity of milk, which is then used with the fat percentage in Richmond's formula to estimate the SNF and TS.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>Determine the fat percentage of the milk using the Gerber method.</li>
                <li>Warm the milk sample to 40°C and then cool it to 27°C.</li>
                <li>Pour the milk into a lactometer jar and gently insert an ISI-marked lactometer.</li>
                <li>Record the lactometer reading (LR) at the top of the meniscus.</li>
                <li>Apply temperature and fat corrections to get the Corrected Lactometer Reading (CLR).</li>
            </ul>
            <h4 class="font-semibold mt-2">Calculation:</h4>
            <pre><code>SNF (%) = (CLR / 4) + (0.25 * Fat %) + 0.72 (for cow milk)</code></pre>
            <pre><code>Total Solids (TS %) = Fat % + SNF %</code></pre>
            <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
        `
    },
    {
        title: "Freezing Point Test",
        content: `
            <p><strong>Principle:</strong> The freezing point of milk is one of its most constant properties (-0.512 to -0.575 °C). Adding water to milk raises the freezing point closer to 0°C, the freezing point of water.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <p>This test is performed using a specialized instrument called a Cryoscope. The instrument supercools the milk sample and then induces crystallization, accurately measuring the temperature at which it freezes.</p>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>A freezing point higher than the standard range is a definitive indication of added water.</p>
        `
    },
    {
        title: "Sedimentation Test",
        content: `
            <p><strong>Principle:</strong> This test measures the amount of visible dirt and extraneous matter in milk.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>A known volume of milk (e.g., 500 ml) is filtered through a special sediment test disc.</li>
                <li>The disc is then dried and compared with standard sediment discs to grade the milk.</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>A high amount of sediment indicates poor hygiene and udder health during milking.</p>
        `
    },
    {
        title: "Resazurin Test",
        content: `
            <p><strong>Principle:</strong> Resazurin is a redox dye that changes color based on the metabolic activity of bacteria in the milk. It provides a quick estimate of the microbiological quality.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <p>A standard solution of resazurin is added to a milk sample, which is then incubated. The color change from blue to pink to white is observed over time.</p>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>A rapid color change indicates a high bacterial load and poor quality milk.</p>
        `
    }
];

const preservativesData = [
    {
        title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Rosalic Acid Test</h4>
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
                <h4 class="mt-4">Method 3: Determination of true lactic acid/lactate content</h4>
                <p><strong>Siddhant:</strong> The true lactic acid/lactate content is determined spectrophotometrically. The principle involves removing interfering substances, oxidizing lactic acid to acetaldehyde, which then forms a purple color with p-hydroxydiphenyl. A disturbed relationship between lactic acid content and titratable acidity indicates neutralization.</p>
                <ol>
                    <li>Prepare a protein-free filtrate of the milk sample using copper sulfate and calcium hydroxide.</li>
                    <li>The filtrate is treated with sulfuric acid and copper sulfate to oxidize lactic acid.</li>
                    <li>p-Hydroxydiphenyl reagent is added, and after incubation, a purple color develops.</li>
                    <li>The intensity of the color is measured at 570 nm and compared against a standard curve.</li>
                    <li>If the milk has normal or low titratable acidity but a lactic acid content higher than 30 mg/100 ml, neutralization is suspected.</li>
                </ol>
                <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960), BIS (1981)</p>
            </div>
        `
    },
     {
        title: 'Boric Acid and Borates',
        content: `
            <div class="prose max-w-none prose-blue">
                <p><strong>Siddhant:</strong> Boric acid and its salts give a red colour with turmeric paper.</p>
                <ol>
                    <li>Take 5 ml of milk in a test tube and add 1 ml concentrated HCl.</li>
                    <li>Mix well, then dip a strip of turmeric paper.</li>
                    <li>Dry the paper strip and observe the color change.</li>
                    <li>A <strong>red colour</strong> on the paper indicates the presence of boric acid.</li>
                    <li>Then add a drop of ammonium hydroxide solution.</li>
                    <li>A change from red to <strong>deep-green</strong> confirms the presence of boric acid.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Formalin (Formaldehyde)',
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
                <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
            </div>
        `
    },
     {
        title: 'Hydrogen Peroxide (H₂O₂)',
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
                 <p><strong>Siddhant:</strong> H₂O₂ oxidizes potassium iodide (KI) to iodine (I₂), which then reacts with starch to form a blue complex.</p>
                <ol>
                    <li>Take 1 ml of milk and add 1 ml of potassium iodide-starch reagent.</li>
                    <li>Appearance of a <strong>blue color</strong> indicates the presence of H₂O₂.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Salicylic Acid & Benzoic Acid',
        content: `
             <div class="prose max-w-none prose-blue">
                <p><strong>Siddhant:</strong> These acids are extracted with ether and then react with ferric chloride to produce characteristic colors.</p>
                <ol>
                    <li>Acidify 10 ml of milk with HCl and extract with ethyl ether.</li>
                    <li>Evaporate the ether. Dissolve the residue in water.</li>
                    <li>Add a few drops of 0.5% neutral ferric chloride solution.</li>
                    <li><strong>Salicylic Acid:</strong> A violet color indicates its presence.</li>
                    <li><strong>Benzoic Acid:</strong> A salmon-colored precipitate indicates its presence.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Hypochlorites & Chloramines',
        content: `
            <div class="prose max-w-none prose-blue">
                <p><strong>Siddhant:</strong> These strong oxidizing agents can be detected by their reaction with potassium iodide and starch.</p>
                <ol>
                    <li>Add 5 ml of milk to a test tube.</li>
                    <li>Add 1.5 ml of 7% potassium iodide solution and mix.</li>
                    <li>Add 4 ml of dilute HCl and mix.</li>
                    <li>In the presence of hypochlorite, a <strong>yellowish-brown to deep mauve color</strong> develops.</li>
                </ol>
            </div>
        `
    }
];

const adulterantsData = [
    {
        title: 'Cane Sugar',
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
                <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
            </div>
        `
    },
    {
        title: 'Starch & Other Cereal Flours',
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
                <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960)</p>
            </div>
        `
    },
    {
        title: 'Cellulose',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Siddhant:</strong> Cellulose is insoluble. It can be detected by its reaction with iodinated zinc chloride.</p>
                <ol>
                    <li>Take 10 ml of milk and add 10-15 drops of concentrated nitric acid.</li>
                    <li>Filter the coagulated mass and wash with water.</li>
                    <li>Boil the residue with 1-2 ml of iodinated zinc chloride reagent.</li>
                    <li>Appearance of a <strong>blue or violet color</strong> indicates the presence of cellulose.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Urea',
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
                <p class="text-xs"><strong>Ref:</strong> IS:1479 (1960), FSSAI 2006 (limit: 70 mg/100ml)</p>
            </div>
        `
    },
    {
        title: 'Glucose',
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
        title: 'Ammonium Compounds (Sulphates)',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: Nessler’s Reagent Method</h4>
                 <ol>
                    <li>Take 5 ml of milk sample into a test tube.</li>
                    <li>Add 1 ml of Nessler’s reagent.</li>
                    <li>Appearance of <strong>yellowish or grey colour</strong> confirms the presence of added ammonium salts.</li>
                </ol>
                <h4 class="mt-4">Method 2: Turmeric Paper Method</h4>
                <p><strong>Siddhant:</strong> Ammonium salts release ammonia in alkaline conditions, which turns wet turmeric paper red.</p>
                <ol>
                    <li>Take 5 ml of milk and add 1 ml of 10% NaOH.</li>
                    <li>Place a wet turmeric paper on the rim of the test tube.</li>
                    <li>Appearance of <strong>pinkish red colour</strong> on the paper confirms the presence of ammonium salt.</li>
                </ol>
                 <h4 class="mt-4">Method 3: Sulfate Detection (with BaCl₂)</h4>
                <p><strong>Siddhant:</strong> Sulphates precipitate with Barium Chloride (BaCl₂).</p>
                <ol>
                    <li>Take 10 ml of milk and add 10 ml of Trichloroacetic acid (TCA) to coagulate it.</li>
                    <li>Filter the milk and take 5 ml of the clear filtrate.</li>
                    <li>Add a few drops of 5% BaCl₂ solution.</li>
                    <li>Formation of a <strong>milky-white precipitate</strong> indicates the presence of added sulphates (like ammonium sulphate).</li>
                </ol>
            </div>
        `
    },
     {
        title: 'Common Salt (NaCl)',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Silver Nitrate Test</h4>
                 <p><strong>Siddhant:</strong> Added salt reacts with silver nitrate. Potassium chromate acts as an indicator.</p>
                <ol>
                    <li>Take 5 ml of milk in a test tube.</li>
                    <li>Add 1 ml of 0.1 N silver nitrate solution.</li>
                    <li>Mix and add 0.5 ml of 10% potassium chromate solution.</li>
                    <li>Appearance of a <strong>yellow colour</strong> indicates added salt, whereas pure milk gives a brick red color.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Vegetable/Refined Oil (Foreign Fat)',
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
                <p class="text-xs"><strong>Ref:</strong> IS 3508 – 1966</p>
            </div>
        `
    },
    {
        title: 'Mineral Oil',
        content: `
            <div class="prose max-w-none prose-green">
                 <h4>Holde's Test</h4>
                 <p><strong>Siddhant:</strong> Mineral oils are non-saponifiable, meaning they do not form soap with alkali, unlike edible fats.</p>
                <ol>
                    <li>Saponify 1g of fat with 25ml of 4% alcoholic KOH.</li>
                    <li>Add 100ml of hot water.</li>
                    <li>The appearance of <strong>turbidity</strong> indicates the presence of mineral oil.</li>
                </ol>
            </div>
        `
    },
     {
        title: 'Animal Body Fat (e.g., Lard)',
        content: `
            <div class="prose max-w-none prose-green">
                 <h4>Opacity Test</h4>
                 <p><strong>Siddhant:</strong> Different fats solidify and become opaque at different rates and temperatures.</p>
                <ol>
                    <li>Melt 5g of ghee at 50°C.</li>
                    <li>Transfer to a water bath at 23°C and record the time it takes for the sample to become opaque.</li>
                    <li><strong>Result:</strong> Buffalo ghee takes 14-15 min, cow ghee 18-19 min. A shorter time suggests animal body fat adulteration, while a longer time suggests vegetable oil.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Pond Water (Nitrates)',
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
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Purpose:</strong> To illegally increase the SNF content of natural milk.</p>
                <p><strong>Siddhant:</strong> The proteins in reconstituted milk powder contain reducing groups that react with phosphomolybdic acid on boiling to give a blue colour.</p>
                <ol>
                    <li>Centrifuge 50 ml of milk to separate the cream.</li>
                    <li>Coagulate the skim milk portion with acetic acid.</li>
                    <li>Wash the precipitate, then add 2 ml of 1% phosphomolybdic acid and boil for 15 minutes.</li>
                    <li>The curd from pure milk will be greenish, whereas the curd from a sample containing SMP will be <strong>bluish</strong>.</li>
                </ol>
                <p class="text-xs"><strong>Ref:</strong> Journal of Food Science and Technology, Vol 22 (1985)</p>
            </div>
        `
    },
     {
        title: 'Soymilk in Milk',
        content: `
            <div class="prose max-w-none prose-green">
                <p>Soymilk is sometimes added to illegally increase the protein content and SNF reading of milk. Several methods exist for its detection.</p>
                <h4 class="mt-4">Method I: Polarimeteric method</h4>
                <p>Based on the different optical rotation of sugars. Soymilk contains sucrose, raffinose, and stachyose, while bovine milk contains lactose. A significant change in the optical rotation of a protein-free filtrate can indicate soymilk addition.</p>
                <h4 class="mt-4">Method II: Isoelectric precipitation method</h4>
                <p>Soy proteins precipitate at a higher pH (~5.7) than milk casein (pH 4.6). By adjusting the milk pH to 5.7 and heating, coagulation will occur if soymilk is present.</p>
                 <h4 class="mt-4">Method III: SDS-PAGE method</h4>
                <p>This electrophoretic technique separates proteins based on molecular weight. Soy proteins have different molecular weights than milk proteins and will show up as distinct, extra bands on the gel, confirming adulteration.</p>
                <h4 class="mt-4">Method IV: Immunodiffusion method</h4>
                <p>Uses antibodies specific to soy proteins. If soy protein is present in the milk, it will react with the antibody to form a visible precipitation line in an agar gel.</p>
                <h4 class="mt-4">Method V: HPLC based method</h4>
                <p>High-Performance Liquid Chromatography can separate and quantify the different sugars. The presence of stachyose, a sugar found in soybeans but not milk, is a definitive marker for soymilk adulteration.</p>
                <h4 class="mt-4">Method VI: Rapid method (Trypsin Inhibition)</h4>
                <p>Soymilk contains trypsin inhibitors. This test measures the activity of the enzyme trypsin. If soymilk is present, the trypsin will be inhibited, leading to a reduced color change in a specific chemical reaction compared to a pure milk sample.</p>
            </div>
        `
    },
     {
        title: 'Cheese Whey in Milk',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Ninhydrin based spectrophotometric method</h4>
                <p><strong>Siddhant:</strong> When rennet is used to make cheese, it cleaves a specific part of kappa-casein called glycomacropeptide (GMP), which goes into the whey. This GMP contains sialic acid. The test selectively precipitates GMP from the milk sample and then measures the sialic acid content. A high level of sialic acid indicates the presence of added cheese whey.</p>
                <ol>
                    <li>Glycomacropeptide (GMP) is selectively precipitated from the milk sample using Trichloroacetic acid (TCA).</li>
                    <li>The precipitate is then treated with an acidic ninhydrin reagent and heated.</li>
                    <li>The sialic acid bound to the GMP produces a stable yellow-brown color, which is measured with a spectrophotometer at 470 nm.</li>
                    <li>An absorbance value significantly higher than that of pure milk indicates adulteration with cheese whey.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Gelatine',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Purpose:</strong> To increase the thickness and SNF content of milk.</p>
                <p><strong>Siddhant:</strong> Gelatine forms a yellow precipitate with picric acid.</p>
                <ol>
                    <li>Take 10 ml of milk and add 20 ml of Stokes reagent (acid mercuric nitrate).</li>
                    <li>Shake well and filter.</li>
                    <li>To the filtrate, add an equal volume of saturated picric acid solution.</li>
                    <li>A <strong>yellow precipitate</strong> indicates the presence of gelatine.</li>
                </ol>
            </div>
        `
    }
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
                            {selectedCategory.data.map((item) => (
                                <AccordionItem key={item.title} value={item.title.replace(/\s/g, '-')}>
                                    <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                                    <AccordionContent>
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
    
